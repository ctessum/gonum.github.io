//+build ignore

// This script generates example code and the HTML code for the
// webpage.
package main

import (
	"bytes"
	"fmt"
	"go/ast"
	"go/doc"
	"go/parser"
	"go/printer"
	"go/token"
	"html/template"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"text/scanner"
	"unicode"

	"github.com/kr/pretty"
	"github.com/mvdan/xurls"

	"golang.org/x/tools/imports"
)

func main() {
	exampleData, err := generateExamples()
	if err != nil {
		log.Fatalf("ERROR: %v", err)
	}

	err = generateIndex(exampleData)
	if err != nil {
		log.Fatalf("ERROR: %v", err)
	}
}

func generateIndex(exampleData map[template.HTML][]Example) error {
	t, err := template.ParseFiles("index_template.html")
	if err != nil {
		return err
	}
	w, err := os.Create("index.html")
	if err != nil {
		return err
	}

	templateData := struct {
		Shim        template.HTML
		ExampleData map[template.HTML][]Example
	}{
		Shim: `    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->`,
		ExampleData: exampleData,
	}

	err = t.Execute(w, templateData)
	if err != nil {
		return err
	}
	return nil
}

func generateExamples() (map[template.HTML][]Example, error) {
	exampleData := make(map[template.HTML][]Example) // holder for examples
	dir := filepath.Join(os.ExpandEnv("$GOPATH"), "src", "github.com", "gonum")
	err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if !info.IsDir() {
			return nil
		}
		path = strings.Replace(path, "\\", "/", -1)
		fset := token.NewFileSet()
		pkgs, err := parser.ParseDir(fset, path, nil, parser.ParseComments)
		if err != nil {
			return err
		}
		pkgs2, err := parser.ParseDir(fset, path, nil, parser.ParseComments)
		if err != nil {
			return err
		}
		for pkgName, pkg := range pkgs {
			descriptionPath := strings.Trim(strings.Split(path, "gonum")[1], "/\\") // This is the path we use for the description
			importPath := "github.com" + strings.Split(path, "github.com")[1]
			docpkg := doc.New(pkgs2[pkgName], importPath, 0)
			var files []*ast.File
			for _, f := range pkg.Files {
				files = append(files, f)
			}
			examples := doc.Examples(files...)
			for _, ex := range examples {
				var cmd string
				if ex.Play != nil {
					cmd, err = playToCmd(ex.Play, fset)
				} else {
					cmd, err = codeToCmd(ex.Code, fset, docpkg)
				}
				var Name, Type string
				if len(ex.Name) > 0 && ex.Name[0:1] == "_" {
					Name = strings.Title(strings.Trim(ex.Name, "_"))
				} else {
					name := strings.Split(ex.Name, "_")
					Type = name[0]
					if len(name) > 1 {
						Name = strings.Title(name[1])
					}
				}

				// Find if there is an image url in the documentation.
				img := xurls.Strict.FindString(ex.Doc)
				if !(strings.Contains(img, "png") || strings.Contains(img, "jpg") || strings.Contains(img, "jpeg")) {
					img = ""
				} else {
					img = strings.Replace(img, "github.com", "raw.githubusercontent.com", 1)
					img = strings.Replace(img, "blob/", "", 1)
				}

				exampleData[template.HTML(descriptionPath)] = append(exampleData[template.HTML(descriptionPath)], Example{
					PkgName: pkgName,
					Type:    Type,
					Name:    Name,
					Abbrev:  getUpperCaseChars(Type + Name),
					Doc:     ex.Doc,
					Code:    cmd,
					Img:     img,
				})
			}
		}
		return nil
	})
	if err != nil {
		return nil, err
	}
	if err := writeSource(exampleData); err != nil {
		return nil, err
	}
	return exampleData, nil
}

type Example struct {
	PkgName string
	Type    string
	Abbrev  string
	Name    string
	Doc     string
	Code    string
	Img     string
}

// writeSource writes out the example data into a Go source
// file.
func writeSource(exampleData map[template.HTML][]Example) error {
	w, err := os.Create("exampledata.go")
	if err != nil {
		return err
	}
	s := `// This code is autmatically generated. Any changes should be made in generate.go.

package main

// Example holds information about documentation examples.
type Example struct {
	PkgName string
	Type    string
	Abbrev  string
  Name    string
	Doc     string
	Code    string
	Img     string
}
var exampleData = `
	if err != nil {
		return err
	}
	s += strings.Replace(fmt.Sprintf("%# v\n", pretty.Formatter(exampleData)), "map[template.HTML][]main.Example{", "map[string][]Example{", 1)
	_, err = fmt.Fprint(w, s)
	if err != nil {
		return err
	}
	return w.Close()
}

func playToCmd(play *ast.File, fset *token.FileSet) (string, error) {
	b := bytes.NewBuffer(nil)
	err := printer.Fprint(b, fset, play)
	if err != nil {
		return "", err
	}
	return string(addPlotSaver(b.Bytes())), nil
}

// codeToCmd converts a go/doc.Example.Code node into
// an executable command.
func codeToCmd(code ast.Node, fset *token.FileSet, docpkg *doc.Package) (string, error) {
	b := bytes.NewBuffer(nil)
	err := printer.Fprint(b, fset, code)
	if err != nil {
		return "", err
	}
	cmd, err := exampleToCmd(b, docpkg)
	if err != nil {
		return "", err
	}

	return cmd, nil
}

// exampleToCmd converts a package example to a standalone program.
func exampleToCmd(b *bytes.Buffer, docpkg *doc.Package) (string, error) {
	example := append(([]byte)("package main\n\nfunc main() "), b.Bytes()...)
	example = addPlotSaver(addPackageName(docpkg, example))
	var err error
	example, err = imports.Process("./", example, nil)
	if err != nil {
		return "", err
	}
	return string(example), nil
}

func addPlotSaver(cmd []byte) []byte {
	exp, err := regexp.Compile(`err(.*)p.Save(.*)\)`)
	if err != nil {
		panic(err)
	}

	plotSave := ([]byte)(`
	// Normally, we would save the figure using plot.Save(), but here we are going
	// to directly save it in this webpage.
	img := vgsvg.New(vg.Points(400), vg.Points(300))
	p.Draw(draw.New(img))
	b := new(bytes.Buffer)
	if _, err = img.WriteTo(b); err != nil {
		log.Panic(err)
	}
	plotWindow := dom.GetWindow().Document().GetElementByID("plot_window").(*dom.HTMLDivElement)
	plotWindow.SetInnerHTML(string(b.Bytes()))
`)
	return exp.ReplaceAll(cmd, plotSave)
}

// addPackageName adds the import statement in from of items that
// are part of the current package so that they will compile as part
// of a standalone program.
// TODO: Make this better.
func addPackageName(docpkg *doc.Package, cmd []byte) []byte {
	for _, t := range docpkg.Types {
		for _, f := range t.Funcs {
			funcReplace := ([]byte)(docpkg.Name + "." + f.Name + "(")
			cmd = bytes.Replace(cmd, ([]byte)(f.Name+"("), funcReplace, -1)
		}
		typeReplace := ([]byte)(docpkg.Name + "." + t.Name + "{")
		cmd = bytes.Replace(cmd, ([]byte)(t.Name+"{"), typeReplace, -1)
	}
	for _, f := range docpkg.Funcs {
		funcReplace := ([]byte)(docpkg.Name + "." + f.Name + "(")
		cmd = bytes.Replace(cmd, ([]byte)(f.Name+"("), funcReplace, -1)
	}
	return cmd
}

func removeDelimString(str string) string {
	// alphanumeric (== [0-9A-Za-z])
	// \s is a white space character
	regExp := regexp.MustCompile(`[^[:alnum:]\s]`)
	return regExp.ReplaceAllString(str, "")
}

// get all upper case characters from string
// to get all lower case characters, just remove the exclamation mark !
// infront of unicode.IsLower()
func getUpperCaseChars(str string) string {
	tokens := removeDelimString(str)
	var result []string
	for _, char := range tokens {
		if !unicode.IsLower(char) && char != ' ' {
			result = append(result, scanner.TokenString(char))
		}
	}
	return strings.Replace(strings.Join(result, ""), "\"", "", -1)
}

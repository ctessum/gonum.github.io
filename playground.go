// This file is adapted from https://github.com/gopherjs/gopherjs.github.io.
// Refer to playground_LICENSE for license information.

//go:generate ./update.sh

package main

import (
	"bytes"
	"fmt"
	"go/ast"
	"go/format"
	"go/parser"
	"go/scanner"
	"go/token"
	"go/types"
	"strings"
	"time"

	//"github.com/gonum/gonum.github.io/internal/imports"
	"github.com/ctessum/gonum.github.io/internal/imports"
	"github.com/gopherjs/gopherjs/compiler"
	"github.com/gopherjs/gopherjs/js"
	"github.com/neelance/go-angularjs"
	"honnef.co/go/js/dom"
	"honnef.co/go/js/xhr"
)

type Line map[string]string

var output []Line

const snippetStoreHost = "https://snippets.gopherjs.org"

func main() {
	doc := dom.GetWindow().Document()
	var location = dom.GetWindow().Top().Location() // We might be inside an iframe, but want to use the location of topmost window.

	modalPlaygroundLabel := doc.GetElementByID("modalPlaygroundLabel").(*dom.HTMLHeadingElement)
	modalPlaygroundDoc := doc.GetElementByID("modalPlaygroundDoc").(*dom.HTMLParagraphElement)
	modalPlaygroundCode := doc.GetElementByID("code").(*dom.HTMLTextAreaElement)
	modalPlotWindow := doc.GetElementByID("plot_window").(*dom.HTMLDivElement)

	codeReady := make(chan struct{}) // Used to synchronize when "code" value is ready.

	app := angularjs.NewModule("playground", nil, nil)

	app.NewController("PlaygroundCtrl", func(scope *angularjs.Scope) {

		var ready bool
		scope.Set("loadCode", func(pkgName, Type, name string) {
			data, ok := exampleData[pkgName]
			if !ok {
				panic(fmt.Errorf("missing package %s example data", pkgName))
			}
			var found bool
			for _, ex := range data {
				if ex.Type == Type && ex.Name == name {

					scope.Set("output", []Line{})
					modalPlotWindow.SetInnerHTML("")
					scope.Set("code", ex.Code)

					scope.Set("imports", true)
					scope.Set("shareUrl", "")
					scope.Set("showShareUrl", false)

					title := fmt.Sprintf("%s.%s %s", pkgName, ex.Type, ex.Name)
					modalPlaygroundLabel.SetTextContent(title)
					modalPlaygroundDoc.SetTextContent(ex.Doc)
					codeLines := 20 // This is the maxinum number of lines to show at once.
					if cl := strings.Count(ex.Code, "\n"); cl < codeLines {
						codeLines = cl
					}
					modalPlaygroundCode.SetAttribute("rows", fmt.Sprintf("%d", codeLines))

					if !ready {
						close(codeReady)
						ready = true
					}
					found = true
				}
			}
			if !found {
				panic(fmt.Errorf("couldn't find example %s.%s %s", pkgName, Type, name))
			}
		})

		packages := make(map[string]*compiler.Archive)
		var pkgsToLoad map[string]struct{}
		importContext := &compiler.ImportContext{
			Packages: make(map[string]*types.Package),
			Import: func(path string) (*compiler.Archive, error) {
				println(path)
				if pkg, found := packages[path]; found {
					return pkg, nil
				}
				pkgsToLoad[path] = struct{}{}
				return &compiler.Archive{}, nil
			},
		}
		fileSet := token.NewFileSet()
		pkgsReceived := 0

		setupEnvironment(scope)

		codeArea := angularjs.ElementById("code")
		codeArea.On("input", func(e *angularjs.Event) {
			scope.Set("showShareUrl", false)
			location.Hash = ""
		})
		codeArea.On("keydown", codeAreaKeyDown(scope, codeArea, location))

		var run func(bool)
		run = func(loadOnly bool) {
			button := angularjs.ElementById("run-button")
			runningButton := button.Call("button", "loading")
			scope.Set("output", nil)
			modalPlotWindow.SetInnerHTML("")
			pkgsToLoad = make(map[string]struct{})

			file, err := parser.ParseFile(fileSet, "prog.go", []byte(scope.Get("code").String()), parser.ParseComments)
			if err != nil {
				if list, ok := err.(scanner.ErrorList); ok {
					for _, entry := range list {
						output = append(output, Line{"type": "err", "content": entry.Error()})
					}
					scope.Set("output", output)
					runningButton.Call("button", "reset")
					return
				}
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				runningButton.Call("button", "reset")
				return
			}

			mainPkg, err := compiler.Compile("main", []*ast.File{file}, fileSet, importContext, false)
			packages["main"] = mainPkg
			if err != nil && len(pkgsToLoad) == 0 {
				if list, ok := err.(compiler.ErrorList); ok {
					output = []Line{}
					for _, entry := range list {
						output = append(output, Line{"type": "err", "content": entry.Error()})
					}
					scope.Set("output", output)
					runningButton.Call("button", "reset")
					return
				}
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				runningButton.Call("button", "reset")
				return
			}

			var allPkgs []*compiler.Archive
			if len(pkgsToLoad) == 0 {
				allPkgs, _ = compiler.ImportDependencies(mainPkg, importContext.Import)
			}

			if len(pkgsToLoad) != 0 {
				pkgsReceived = 0
				for path := range pkgsToLoad {
					req := xhr.NewRequest("GET", "pkg/"+path+".a.js")
					req.ResponseType = xhr.ArrayBuffer
					go func(path string) {
						err := req.Send(nil)
						if err != nil || req.Status != 200 {
							scope.Apply(func() {
								scope.Set("output", []Line{Line{"type": "err", "content": `failed to load package "` + path + `"`}})
							})
							runningButton.Call("button", "reset")
							return
						}

						data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
						packages[path], err = compiler.ReadArchive(path+".a", path, bytes.NewReader(data), importContext.Packages)
						if err != nil {
							scope.Apply(func() {
								scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
							})
							runningButton.Call("button", "reset")
							return
						}
						pkgsReceived++
						if pkgsReceived == len(pkgsToLoad) {
							runningButton.Call("button", "reset")
							run(loadOnly)
						}
					}(path)
				}
				runningButton.Call("button", "reset")
				return
			}

			if loadOnly {
				runningButton.Call("button", "reset")
				return
			}

			jsCode := bytes.NewBuffer(nil)
			jsCode.WriteString("try{\n")
			compiler.WriteProgramCode(allPkgs, &compiler.SourceMapFilter{Writer: jsCode})
			jsCode.WriteString("} catch (err) {\ngoPanicHandler(err.message);\n}\n")
			js.Global.Set("$checkForDeadlock", true)
			js.Global.Call("eval", js.InternalObject(jsCode.String()))
			runningButton.Call("button", "reset")
		}
		scope.Set("run", run)
		go func() {
			<-codeReady // Wait for "code" value to be ready.
			run(true)
		}()

		scope.Set("format", func() {
			code := []byte(scope.Get("code").String())
			var out []byte
			var err error
			switch scope.Get("imports").Bool() {
			case true:
				out, err = imports.Process("prog.go", code, nil)
			case false:
				out, err = format.Source(code)
			}
			if err != nil {
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				return
			}
			scope.Set("code", string(out))
			scope.Set("output", []Line{})
		})

		scope.Set("share", func() {
			req := xhr.NewRequest("POST", snippetStoreHost+"/share")
			req.ResponseType = xhr.ArrayBuffer
			go func() {
				err := req.Send([]byte(scope.Get("code").String())) // Send as binary.
				if err != nil || req.Status != 200 {
					scope.Apply(func() {
						scope.Set("output", []Line{Line{"type": "err", "content": `failed to share snippet`}})
					})
					return
				}

				data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
				scope.Apply(func() {
					id := string(data)

					location.Hash = "#/" + id

					scope.Set("shareUrl", location.String())
					scope.Set("showShareUrl", true)
					// TODO: Do this better using AngularJS.
					//       Perhaps using http://stackoverflow.com/questions/14833326/how-to-set-focus-on-input-field/18295416.
					go func() {
						time.Sleep(time.Millisecond)
						dom.GetWindow().Document().GetElementByID("share-url").(*dom.HTMLInputElement).Select()
					}()
				})
			}()
		})

		// Start watching for hashchange events, and reload snippet if it happens.
		dom.GetWindow().Top().AddEventListener("hashchange", false, func(event dom.Event) {
			event.PreventDefault()

			if strings.HasPrefix(location.Hash, "#/") {
				id := location.Hash[2:]

				req := xhr.NewRequest("GET", snippetStoreHost+"/p/"+id)
				req.ResponseType = xhr.ArrayBuffer
				go func() {
					err := req.Send(nil)
					if err != nil || req.Status != 200 {
						scope.Apply(func() {
							scope.Set("output", []Line{Line{"type": "err", "content": `failed to load snippet "` + id + `"`}})
						})
						return
					}

					data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
					scope.Apply(func() {
						scope.Set("code", string(data))
					})
				}()
			}
		})
	})
}

func setupEnvironment(scope *angularjs.Scope) {
	js.Global.Set("goPrintToConsole", js.InternalObject(func(b []byte) {
		lines := strings.Split(string(b), "\n")
		if len(output) == 0 || output[len(output)-1]["type"] != "out" {
			output = append(output, Line{"type": "out", "content": ""})
		}
		output[len(output)-1]["content"] += lines[0]
		for i := 1; i < len(lines); i++ {
			output = append(output, Line{"type": "out", "content": lines[i]})
		}
		scope.Set("output", output)
		scope.EvalAsync(func() {
			time.AfterFunc(0, func() {
				box := angularjs.ElementById("output")
				box.SetProp("scrollTop", box.Prop("scrollHeight"))
			})
		})
	}))
	js.Global.Set("goPanicHandler", js.InternalObject(func(msg string) {
		output = append(output, Line{"type": "err", "content": "panic: " + msg})
		scope.Set("output", output)
	}))
}

func codeAreaKeyDown(scope *angularjs.Scope, codeArea *angularjs.JQueryElement, location *dom.Location) func(*angularjs.Event) {
	return func(e *angularjs.Event) {
		toInsert := ""
		switch e.KeyCode {
		case '\t':
			toInsert = "\t"
		case '\r':
			toInsert = "\n"
			start := codeArea.Prop("selectionStart").Int()
			code := scope.Get("code").String()
			i := strings.LastIndex(code[:start], "\n") + 1
			for i < start {
				c := code[i]
				if c != ' ' && c != '\t' {
					break
				}
				toInsert += string(c)
				i++
			}
		}
		if toInsert != "" {
			scope.Set("showShareUrl", false)
			location.Hash = ""

			start := codeArea.Prop("selectionStart").Int()
			end := codeArea.Prop("selectionEnd").Int()
			code := scope.Get("code").String()
			scope.Apply(func() {
				scope.Set("code", code[:start]+toInsert+code[end:])
			})
			codeArea.SetProp("selectionStart", start+len(toInsert))
			codeArea.SetProp("selectionEnd", start+len(toInsert))
			e.PreventDefault()
		}
	}
}

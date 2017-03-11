//go:generate go run generate.go

package main

import (
	"fmt"
	"strings"

	"honnef.co/go/js/dom"
)

func main() {
	doc := dom.GetWindow().Document()

	codeChan := setupLinks(doc)

	playground(codeChan)
}

func setupLinks(doc dom.Document) chan string {
	codeChan := make(chan string)
	modalPlaygroundLabel := doc.GetElementByID("modalPlaygroundLabel").(*dom.HTMLHeadingElement)
	modalPlaygroundDoc := doc.GetElementByID("modalPlaygroundDoc").(*dom.HTMLParagraphElement)
	modalPlaygroundCode := doc.GetElementByID("code").(*dom.HTMLTextAreaElement)
	for pkg, data := range exampleData {
		for _, example := range data {
			func(pkg string, example Example) {
				linkID := fmt.Sprintf("%s%s%sLink", example.PkgName, example.Type, example.Name)
				link := doc.GetElementByID(linkID).(*dom.HTMLAnchorElement)
				link.AddEventListener("click", false, func(event dom.Event) {
					title := fmt.Sprintf("%s.%s %s", pkg, example.Type, example.Name)
					modalPlaygroundLabel.SetTextContent(title)
					modalPlaygroundDoc.SetTextContent(example.Doc)
					codeChan <- example.Code
					codeLines := 20 // This is the maxinum number of lines to show at once.
					if cl := strings.Count(example.Code, "\n"); cl < codeLines {
						codeLines = cl
					}
					modalPlaygroundCode.SetAttribute("rows", fmt.Sprintf("%d", codeLines))
				})
			}(pkg, example)
		}
	}
	return codeChan
}

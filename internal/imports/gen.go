//go:generate go run mkapi.go -output=gopherjs.txt -gopath github.com/gopherjs/gopherjs/js github.com/gonum/floats
//go:generate go run mkstdlib.go -output=zstdlib
//go:generate rm gopherjs.txt

package imports

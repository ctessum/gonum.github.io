//go:generate go run mkapi.go -output=gopherjs.txt -gopath github.com/gopherjs/gopherjs/js github.com/gonum/floats github.com/gonum/matrix/mat64 github.com/gonum/plot/palette/moreland github.com/gonum/plot/plotter github.com/gonum/plot/plotutil github.com/gonum/plot/vg/vgtex github.com/gonum/stat github.com/gonum/stat/sampleuv
//go:generate go run mkstdlib.go -output=zstdlib
//go:generate rm gopherjs.txt

package imports

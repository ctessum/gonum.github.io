//go:generate go run mkapi.go -output=gopherjs.txt -gopath github.com/gopherjs/gopherjs/js honnef.co/go/js/dom github.com/gonum/floats github.com/gonum/graph/simple github.com/gonum/graph/community github.com/gonum/integrate github.com/gonum/matrix/mat64 github.com/gonum/plot/palette/moreland github.com/gonum/plot/plotter github.com/gonum/plot/plotutil github.com/gonum/plot/vg github.com/gonum/plot/vg/vgtex github.com/gonum/plot/vg/vgimg github.com/gonum/plot/vg/vgpdf github.com/gonum/plot/vg/vgeps github.com/gonum/plot/vg/vgsvg github.com/gonum/plot/vg/draw github.com/gonum/stat github.com/gonum/stat/sampleuv
//go:generate go run mkstdlib.go -output=zstdlib
//go:generate rm gopherjs.txt

package imports

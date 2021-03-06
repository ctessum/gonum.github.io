#!/bin/sh

# This file is adapted from https://github.com/gopherjs/gopherjs.github.io.
# Refer to playground_LICENSE for license information for the copied code.

set -e

tmp=$(mktemp -d "${TMPDIR:-/tmp}/gopherjs_playground.XXXXXXXXXX")


cleanup() {
    rm -rf "$tmp"
    exit
}

trap cleanup EXIT SIGHUP SIGINT SIGTERM

go install github.com/gopherjs/gopherjs/...

# go generate github.com/gonum/gonum.github.io/internal/imports
go generate github.com/ctessum/gonum.github.io/internal/imports

# Build playground itself.
gopherjs build -m

# The GOPATH workspace where the GopherJS project is.
gopherjsgopath=$(go list -f '{{.Root}}' github.com/gopherjs/gopherjs)

rm -r pkg/

# Use an empty GOPATH workspace with just gopherjs,
# so that all the standard library packages get written to GOROOT/pkg.
export GOPATH="$tmp/gopath"
mkdir -p "$GOPATH"/src/github.com/gopherjs/gopherjs
cp -a "$gopherjsgopath"/src/github.com/gopherjs/gopherjs/* "$GOPATH"/src/github.com/gopherjs/gopherjs

gopherjs install -m github.com/gopherjs/gopherjs/js github.com/gopherjs/gopherjs/nosync
mkdir -p pkg/github.com/gopherjs/gopherjs
cp "$GOPATH"/pkg/*_js_min/github.com/gopherjs/gopherjs/js.a pkg/github.com/gopherjs/gopherjs/js.a
cp "$GOPATH"/pkg/*_js_min/github.com/gopherjs/gopherjs/nosync.a pkg/github.com/gopherjs/gopherjs/nosync.a


gopherjs get -m \
  honnef.co/go/js/dom \
  github.com/gonum/floats \
  github.com/gonum/graph/community \
  github.com/gonum/integrate \
  github.com/gonum/matrix/mat64 \
  github.com/gonum/plot/palette/moreland \
  github.com/gonum/plot/plotter \
  github.com/gonum/plot/plotutil \
  github.com/gonum/plot/vg/vgtex \
  github.com/gonum/plot/vg/vgimg \
  github.com/gonum/plot/vg/vgsvg \
  github.com/gonum/plot/vg/vgpdf \
  github.com/gonum/plot/vg/vgeps \
  github.com/gonum/stat \
  github.com/gonum/stat/sampleuv

mkdir -p pkg/github.com/gonum
cp -a "$GOPATH"/pkg/*_js_min/* pkg/

# Get the dependencies for running these scripts.
go get \
  github.com/kr/pretty \
  github.com/mvdan/xurls

go run generate.go

# Make a copy of GOROOT that is user-writeable,
# use it to build and copy out standard library packages.
cp -a "$(go env GOROOT)" "$tmp/goroot"
export GOROOT="$tmp/goroot"
gopherjs install -m \
         archive/tar \
         archive/zip \
         bufio \
         bytes \
         compress/bzip2 \
         compress/flate \
         compress/gzip \
         compress/lzw \
         compress/zlib \
         container/heap \
         container/list \
         container/ring \
         crypto/aes \
         crypto/cipher \
         crypto/des \
         crypto/dsa \
         crypto/ecdsa \
         crypto/elliptic \
         crypto/hmac \
         crypto/md5 \
         crypto/rand \
         crypto/rc4 \
         crypto/rsa \
         crypto/sha1 \
         crypto/sha256 \
         crypto/sha512 \
         crypto/subtle \
         database/sql/driver \
         debug/gosym \
         debug/pe \
         encoding/ascii85 \
         encoding/asn1 \
         encoding/base32 \
         encoding/base64 \
         encoding/binary \
         encoding/csv \
         encoding/gob \
         encoding/hex \
         encoding/json \
         encoding/pem \
         encoding/xml \
         errors \
         fmt \
         go/ast \
         go/doc \
         go/format \
         go/printer \
         go/token \
         hash/adler32 \
         hash/crc32 \
         hash/crc64 \
         hash/fnv \
         html \
         html/template \
         image \
         image/color \
         image/draw \
         image/gif \
         image/jpeg \
         image/png \
         index/suffixarray \
         io \
         io/ioutil \
         math \
         math/big \
         math/cmplx \
         math/rand \
         mime \
         net/http/cookiejar \
         net/http/fcgi \
         net/http/httptest \
         net/http/httputil \
         net/mail \
         net/smtp \
         net/textproto \
         net/url \
         path \
         path/filepath \
         reflect \
         regexp \
         regexp/syntax \
         runtime/internal/sys \
         sort \
         strconv \
         strings \
         sync/atomic \
         testing \
         testing/iotest \
         testing/quick \
         text/scanner \
         text/tabwriter \
         text/template \
         text/template/parse \
         time \
         unicode \
         unicode/utf16 \
         unicode/utf8

cp -a "$GOROOT"/pkg/*_js_min/* pkg/
cp -a "$GOROOT"/pkg/*_amd64_js_min/* pkg/

# Rename all *.a files in pkg/ to *.a.js.
find pkg -name "*.a" -exec sh -c 'mv $0 $0.js' {} \;

����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �$B��'github.com/gonum/graph/internal/orderedorderedgithub.com/gonum/graph�J
$$ exports $$
pv0orderedNgithub.com/gonum/graph/internal/orderedByID Node
graph,github.com/gonum/graph ID     Lenn8   Lessn8ij   Swapn8ij  BySliceIDs <LencH   LesscHij   SwapcHij  BySliceValues LencT   LesscTij   SwapcTij  A&A=$packages["github.com/gonum/graph"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BlB=$pkg.ByID=$newType(12,$kindSlice,"ordered.ByID",true,"github.com/gonum/graph/internal/ordered",true,null);��B.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)}];B.init(A.Node);ByIDgithub.com/gonum/graph.Node,github.com/gonum/graph/internal/ordered.ByID C~C=$pkg.BySliceValues=$newType(12,$kindSlice,"ordered.BySliceValues",true,"github.com/gonum/graph/internal/ordered",true,null);��C.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)}];
C.init(E);BySliceValues5github.com/gonum/graph/internal/ordered.BySliceValues)github.com/gonum/graph/internal/ordered.E DxD=$pkg.BySliceIDs=$newType(12,$kindSlice,"ordered.BySliceIDs",true,"github.com/gonum/graph/internal/ordered",true,null);��D.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)}];
D.init(F);
BySliceIDsgithub.com/gonum/graph.Node2github.com/gonum/graph/internal/ordered.BySliceIDs)github.com/gonum/graph/internal/ordered.F EE=$sliceType($Int);E FF=$sliceType(A.Node);Fgithub.com/gonum/graph.Node 2(github.com/gonum/graph/internal/ordered.ByID).Len��B.prototype.Len=function(){var $ptr,a;a=this;  �return a.$length;    };$ptrType(B).prototype.Len=function(){return this.$get().Len();};ByID,github.com/gonum/graph/internal/ordered.ByID 3(github.com/gonum/graph/internal/ordered.ByID).Less�BB.prototype.Less=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  �d=((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]).ID();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]).ID();$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return d<e;    }return;}if($f===undefined){$f={$blk:B.prototype.Less};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$ptrType(B).prototype.Less=function(a,b){return this.$get().Less(a,b);};ByID,github.com/gonum/graph/internal/ordered.ByID 3(github.com/gonum/graph/internal/ordered.ByID).Swap�B.prototype.Swap=function(a,b){var $ptr,a,b,c,d,e;c=this;   d=((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]);e=((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]);((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]=d);((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]=e);    };$ptrType(B).prototype.Swap=function(a,b){return this.$get().Swap(a,b);};ByID,github.com/gonum/graph/internal/ordered.ByID ;(github.com/gonum/graph/internal/ordered.BySliceValues).Len��C.prototype.Len=function(){var $ptr,a;a=this;  �return a.$length;    };$ptrType(C).prototype.Len=function(){return this.$get().Len();};BySliceValues5github.com/gonum/graph/internal/ordered.BySliceValues <(github.com/gonum/graph/internal/ordered.BySliceValues).Less��C.prototype.Less=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;c=this;  1d=((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]);e=((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]);f=d;g=e;  Fh=f.$length;    if(g.$length<h){  gh=g.$length;    }  xi=$subslice(f,0,h);j=0;while(true){if(!(j<i.$length)){break;}k=j;l=((j<0||j>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+j]);    if(l<((k<0||k>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+k])){  �return true;    }    if(l>((k<0||k>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+k])){  �return false;    }    j++;}  �return f.$length<g.$length;    };$ptrType(C).prototype.Less=function(a,b){return this.$get().Less(a,b);};BySliceValues5github.com/gonum/graph/internal/ordered.BySliceValues <(github.com/gonum/graph/internal/ordered.BySliceValues).Swap�C.prototype.Swap=function(a,b){var $ptr,a,b,c,d,e;c=this;  (d=((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]);e=((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]);((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]=d);((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]=e);    };$ptrType(C).prototype.Swap=function(a,b){return this.$get().Swap(a,b);};BySliceValues5github.com/gonum/graph/internal/ordered.BySliceValues 8(github.com/gonum/graph/internal/ordered.BySliceIDs).Len��D.prototype.Len=function(){var $ptr,a;a=this;  return a.$length;    };$ptrType(D).prototype.Len=function(){return this.$get().Len();};
BySliceIDs2github.com/gonum/graph/internal/ordered.BySliceIDs 9(github.com/gonum/graph/internal/ordered.BySliceIDs).Less�9D.prototype.Less=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  ?d=((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]);e=((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]);f=d;g=e;  Th=f.$length;    if(g.$length<h){  uh=g.$length;    }  �i=$subslice(f,0,h);j=0;case 1:if(!(j<i.$length)){$s=2;continue;}k=j;l=((j<0||j>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+j]);  �m=l.ID();$s=5;case 5:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=((k<0||k>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+k]).ID();$s=6;case 6:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}if(m<n){$s=3;continue;}$s=4;continue;    case 3:  �$s=-1;return true;    case 4:  �o=l.ID();$s=9;case 9:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}p=((k<0||k>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+k]).ID();$s=10;case 10:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}if(o>p){$s=7;continue;}$s=8;continue;    case 7:  �$s=-1;return false;    case 8:    j++;$s=1;continue;case 2:  $s=-1;return f.$length<g.$length;    }return;}if($f===undefined){$f={$blk:D.prototype.Less};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.$s=$s;$f.$r=$r;return $f;};$ptrType(D).prototype.Less=function(a,b){return this.$get().Less(a,b);};
BySliceIDs2github.com/gonum/graph/internal/ordered.BySliceIDs 9(github.com/gonum/graph/internal/ordered.BySliceIDs).Swap�D.prototype.Swap=function(a,b){var $ptr,a,b,c,d,e;c=this;  Gd=((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]);e=((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]);((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]=d);((b<0||b>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+b]=e);    };$ptrType(D).prototype.Swap=function(a,b){return this.$get().Swap(a,b);};
BySliceIDs2github.com/gonum/graph/internal/ordered.BySliceIDs ��{"Base":1635,"Files":[{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\graph\\internal\\ordered\\sort.go","Base":1,"Size":1633,"Lines":[0,61,116,167,169,226,243,245,278,280,349,360,384,386,439,507,570,572,639,687,715,717,769,815,836,850,868,882,886,914,931,947,952,969,986,991,995,1020,1023,1090,1092,1156,1215,1247,1249,1298,1341,1362,1376,1394,1408,1412,1440,1467,1483,1488,1515,1532,1537,1541,1566,1569],"Infos":null}]}
 
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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ����github.com/gonum/floatsfloatserrors!github.com/gonum/internal/asm/f64mathsort��
$$ exports $$
pv0floats.github.com/gonum/floatsZ	Add dsts:  	AddConst cdst  	AddScaled dst
alphas  	AddScaledTo dstyH
alphas  	
AddTo dstsPtP  	Argsort dstinds  	
Count f     s  	CumProd dstsb  	CumSum dstsh  	Distance stnL  	Div dstsr  	
DivTo dstsvtv  	Dot s1s2|  	
Equal s1s2�   	EqualApprox s1s2�tol   	EqualFunc s1s2�f         	EqualLengths slices  	EqualWithinAbs abtol   	&EqualWithinAbsOrRel ababsTolrelTol   	EqualWithinRel abtol   	EqualWithinULP abulp   	Find indsf     sk  6 	HasNaN s   	LogSpan dstlu  	LogSumExp s  	Max s  	MaxIdx s  	Min s  	MinIdx s  	Mul dsts�  	
MulTo dsts�t�  	Nearest sv  	"NearestWithinSpan nluv  	Norm sL  	Prod s  	Reverse s  	
Round xprec  	RoundEven xprec  	Same st�   	
Scale cdst  	Span dstlu  	Sub dsts�  	
SubTo dsts�t�  	Sum s  	Within sv  9AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D1D=$packages["github.com/gonum/internal/asm/f64"];a    $r=D.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["math"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["sort"];a    $r=C.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} J��J=$pkg.argsort=$newType(0,$kindStruct,"floats.argsort",true,"github.com/gonum/floats",false,function(s_,inds_){this.$val=this;if(arguments.length===0){this.s=BA.nil;this.inds=BB.nil;return;}this.s=s_;this.inds=inds_;});��J.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)}];��J.init("github.com/gonum/floats",[{prop:"s",name:"s",exported:false,typ:BA,tag:""},{prop:"inds",name:"inds",exported:false,typ:BB,tag:""}]);argsortgithub.com/gonum/floats.BAgithub.com/gonum/floats.BBgithub.com/gonum/floats.argsort BABA=$sliceType($Float64);BA BBBB=$sliceType($Int);BB github.com/gonum/floats.AddE��E=function(a,b){var $ptr,a,b;    if(!((a.$length===b.$length))){  �$panic(new $String("floats: length of the slices do not match"));    }  (D.AxpyUnitaryTo(a,1,b,a);    };$pkg.Add=E;Addgithub.com/gonum/floats.Add/github.com/gonum/internal/asm/f64.AxpyUnitaryTo github.com/gonum/floats.AddToF�PF=function(a,b,c){var $ptr,a,b,c;    if(!((b.$length===c.$length))){  #$panic(new $String("floats: length of adders do not match"));    }    if(!((a.$length===b.$length))){  s$panic(new $String("floats: length of destination does not match length of adder"));    }  �D.AxpyUnitaryTo(a,1,b,c);  �return a;    };$pkg.AddTo=F;AddTogithub.com/gonum/floats.AddTo/github.com/gonum/internal/asm/f64.AxpyUnitaryTo  github.com/gonum/floats.AddConstG�FG=function(a,b){var $ptr,a,b,c,d,e;  Zc=b;d=0;while(true){if(!(d<c.$length)){break;}e=d;  r((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e])+(a));    d++;}    };$pkg.AddConst=G;AddConst github.com/gonum/floats.AddConst !github.com/gonum/floats.AddScaledH��H=function(a,b,c){var $ptr,a,b,c;    if(!((a.$length===c.$length))){  H$panic(new $String("floats: length of destination and source to not match"));    }  �D.AxpyUnitaryTo(a,b,c,a);    };$pkg.AddScaled=H;	AddScaled!github.com/gonum/floats.AddScaled/github.com/gonum/internal/asm/f64.AxpyUnitaryTo #github.com/gonum/floats.AddScaledToI��I=function(a,b,c,d){var $ptr,a,b,c,d;    if(!((a.$length===d.$length))||!((a.$length===b.$length))){  $$panic(new $String("floats: lengths of slices do not match"));    }  ZD.AxpyUnitaryTo(a,c,d,b);  �return a;    };$pkg.AddScaledTo=I;AddScaledTo#github.com/gonum/floats.AddScaledTo/github.com/gonum/internal/asm/f64.AxpyUnitaryTo %(github.com/gonum/floats.argsort).Len��J.ptr.prototype.Len=function(){var $ptr,a;a=this;  	:return a.s.$length;    };J.prototype.Len=function(){return this.$val.Len();};argsortgithub.com/gonum/floats.argsort &(github.com/gonum/floats.argsort).Less�]J.ptr.prototype.Less=function(a,b){var $ptr,a,b,c,d,e;c=this;  	yreturn(d=c.s,((a<0||a>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+a]))<(e=c.s,((b<0||b>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+b]));    };J.prototype.Less=function(a,b){return this.$val.Less(a,b);};argsortgithub.com/gonum/floats.argsort &(github.com/gonum/floats.argsort).Swap�J.ptr.prototype.Swap=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;c=this;  	�d=(e=c.s,((b<0||b>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+b]));f=(g=c.s,((a<0||a>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+a]));(h=c.s,((a<0||a>=h.$length)?($throwRuntimeError("index out of range"),undefined):h.$array[h.$offset+a]=d));(i=c.s,((b<0||b>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+b]=f));  	�j=(k=c.inds,((b<0||b>=k.$length)?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+b]));l=(m=c.inds,((a<0||a>=m.$length)?($throwRuntimeError("index out of range"),undefined):m.$array[m.$offset+a]));(n=c.inds,((a<0||a>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+a]=j));(o=c.inds,((b<0||b>=o.$length)?($throwRuntimeError("index out of range"),undefined):o.$array[o.$offset+b]=l));    };J.prototype.Swap=function(a,b){return this.$val.Swap(a,b);};argsortgithub.com/gonum/floats.argsort github.com/gonum/floats.ArgsortK�9K=function(a,b){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(!((a.$length===b.$length))){  �$panic(new $String("floats: length of inds does not match length of slice"));    }  c=a;d=0;while(true){if(!(d<c.$length)){break;}e=d;  ((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=e);    d++;}  /f=new J.ptr(a,b);  R$r=C.Sort(new f.constructor.elem(f));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:K};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Argsort=K;Argsortgithub.com/gonum/floats.Argsortgithub.com/gonum/floats.BAgithub.com/gonum/floats.BBgithub.com/gonum/floats.argsort	sort.Sort github.com/gonum/floats.CountL��L=function(a,b){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  c=0;  d=b;e=0;case 1:if(!(e<d.$length)){$s=2;continue;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  9g=a(f);$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}if(g){$s=3;continue;}$s=4;continue;    case 3:  Ic=c+(1)>>0;    case 4:    e++;$s=1;continue;case 2:  X$s=-1;return c;    }return;}if($f===undefined){$f={$blk:L};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Count=L;Countgithub.com/gonum/floats.Count github.com/gonum/floats.CumProdM�M=function(a,b){var $ptr,a,b;    if(!((a.$length===b.$length))){  �$panic(new $String("floats: length of destination does not match length of the source"));    }    if(a.$length===0){  6return a;    }  Greturn D.CumProd(a,b);    };$pkg.CumProd=M;CumProdgithub.com/gonum/floats.CumProd)github.com/gonum/internal/asm/f64.CumProd github.com/gonum/floats.CumSumN��N=function(a,b){var $ptr,a,b;    if(!((a.$length===b.$length))){  �$panic(new $String("floats: length of destination does not match length of the source"));    }    if(a.$length===0){  1return a;    }  Breturn D.CumSum(a,b);    };$pkg.CumSum=N;CumSumgithub.com/gonum/floats.CumSum(github.com/gonum/internal/asm/f64.CumSum  github.com/gonum/floats.DistanceO�O=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;    if(!((a.$length===b.$length))){  6$panic(new $String("floats: slice lengths do not match"));    }    if(a.$length===0){  |return 0;    }  �d=0;    if(c===2){  �e=a;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);  �i=((g<0||g>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+g])-h;  �d=B.Hypot(d,i);    f++;}  return d;    }    if(c===1){  #j=a;k=0;while(true){if(!(k<j.$length)){break;}l=k;m=((k<0||k>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+k]);  =d=d+(B.Abs(((l<0||l>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+l])-m));    k++;}  `return d;    }    if(B.IsInf(c,1)){  �n=a;o=0;while(true){if(!(o<n.$length)){break;}p=o;q=((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]);  �r=B.Abs(((p<0||p>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+p])-q);    if(r>d){  �d=r;    }    o++;}  �return d;    }  s=a;t=0;while(true){if(!(t<s.$length)){break;}u=t;v=((t<0||t>=s.$length)?($throwRuntimeError("index out of range"),undefined):s.$array[s.$offset+t]);  (d=d+(B.Pow(B.Abs(((u<0||u>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+u])-v),c));    t++;}  Treturn B.Pow(d,1/c);    };$pkg.Distance=O;Distance github.com/gonum/floats.Distancemath.Abs
math.Hypot
math.IsInfmath.Pow github.com/gonum/floats.DivP��P=function(a,b){var $ptr,a,b;    if(!((a.$length===b.$length))){  6$panic(new $String("floats: slice lengths do not match"));    }  hD.Div(a,b);    };$pkg.Div=P;Divgithub.com/gonum/floats.Div%github.com/gonum/internal/asm/f64.Div github.com/gonum/floats.DivToQ��Q=function(a,b,c){var $ptr,a,b,c;    if(!((b.$length===c.$length))||!((a.$length===c.$length))){  h$panic(new $String("floats: slice lengths do not match"));    }  �return D.DivTo(a,b,c);    };$pkg.DivTo=Q;DivTogithub.com/gonum/floats.DivTo'github.com/gonum/internal/asm/f64.DivTo github.com/gonum/floats.DotR��R=function(a,b){var $ptr,a,b;    if(!((a.$length===b.$length))){  �$panic(new $String("floats: lengths of the slices do not match"));    }  �return D.DotUnitary(a,b);    };$pkg.Dot=R;Dotgithub.com/gonum/floats.Dot,github.com/gonum/internal/asm/f64.DotUnitary github.com/gonum/floats.EqualS��S=function(a,b){var $ptr,a,b,c,d,e,f;    if(!((a.$length===b.$length))){  �return false;    }  �c=a;d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);    if(!((((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e])===f))){  �return false;    }    d++;}  �return true;    };$pkg.Equal=S;Equalgithub.com/gonum/floats.Equal #github.com/gonum/floats.EqualApproxT��T=function(a,b,c){var $ptr,a,b,c,d,e,f,g;    if(!((a.$length===b.$length))){  return false;    }  d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);    if(!X(g,((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f]),c,c)){  creturn false;    }    e++;}  {return true;    };$pkg.EqualApprox=T;EqualApprox#github.com/gonum/floats.EqualApprox+github.com/gonum/floats.EqualWithinAbsOrRel !github.com/gonum/floats.EqualFuncU��U=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(!((a.$length===b.$length))){  i$s=-1;return false;    }  |d=a;e=0;case 1:if(!(e<d.$length)){$s=2;continue;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  �h=c(g,((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f]));$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}if(!h){$s=3;continue;}$s=4;continue;    case 3:  �$s=-1;return false;    case 4:    e++;$s=1;continue;case 2:  �$s=-1;return true;    }return;}if($f===undefined){$f={$blk:U};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};$pkg.EqualFunc=U;	EqualFunc!github.com/gonum/floats.EqualFunc &github.com/gonum/floats.EqualWithinAbsV`V=function(a,b,c){var $ptr,a,b,c;  greturn(a===b)||B.Abs(a-b)<=c;    };$pkg.EqualWithinAbs=V;EqualWithinAbs&github.com/gonum/floats.EqualWithinAbsmath.Abs &github.com/gonum/floats.EqualWithinRelW��W=function(a,b,c){var $ptr,a,b,c,d;    if(a===b){  }return true;    }  �d=B.Abs(a-b);    if(d<=2.2250738585072014e-308){  �return d<=c*2.2250738585072014e-308;    }  �return d/B.Max(B.Abs(a),B.Abs(b))<=c;    };$pkg.EqualWithinRel=W;EqualWithinRel&github.com/gonum/floats.EqualWithinRelmath.Absmath.Max +github.com/gonum/floats.EqualWithinAbsOrRelX��X=function(a,b,c,d){var $ptr,a,b,c,d;    if(V(a,b,c)){  �return true;    }  �return W(a,b,d);    };$pkg.EqualWithinAbsOrRel=X;EqualWithinAbsOrRel&github.com/gonum/floats.EqualWithinAbs+github.com/gonum/floats.EqualWithinAbsOrRel&github.com/gonum/floats.EqualWithinRel &github.com/gonum/floats.EqualWithinULPY�Y=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i;    if(a===b){   �return true;    }    if(B.IsNaN(a)||B.IsNaN(b)){  !return false;    }    if(!(B.Signbit(a)===B.Signbit(b))){  !Nreturn(d=(e=B.Float64bits(B.Abs(a)),f=B.Float64bits(B.Abs(b)),new $Uint64(e.$high+f.$high,e.$low+f.$low)),g=new $Uint64(0,c),(d.$high<g.$high||(d.$high===g.$high&&d.$low<=g.$low)));    }  !�return(h=Z(B.Float64bits(a),B.Float64bits(b)),i=new $Uint64(0,c),(h.$high<i.$high||(h.$high===i.$high&&h.$low<=i.$low)));    };$pkg.EqualWithinULP=Y;EqualWithinULP&github.com/gonum/floats.EqualWithinULPgithub.com/gonum/floats.ulpDiffmath.Absmath.Float64bits
math.IsNaNmath.Signbit github.com/gonum/floats.ulpDiffZ��Z=function(a,b){var $ptr,a,b;    if((a.$high>b.$high||(a.$high===b.$high&&a.$low>b.$low))){  "'return new $Uint64(a.$high-b.$high,a.$low-b.$low);    }  ":return new $Uint64(b.$high-a.$high,b.$low-a.$low);    };ulpDiffgithub.com/gonum/floats.ulpDiff $github.com/gonum/floats.EqualLengthsAA��AA=function(a){var $ptr,a,b,c;    if(a.$length===0){  #freturn true;    }  #xb=(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]).$length;  #�c=1;while(true){if(!(c<a.$length)){break;}    if(!((((c<0||c>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+c]).$length===b))){  #�return false;    }  #�c=c+(1)>>0;    }  #�return true;    };$pkg.EqualLengths=AA;EqualLengths$github.com/gonum/floats.EqualLengths github.com/gonum/floats.FindAB�AB=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &�a=$subslice(a,0,0);    if(d===0){  &�$s=-1;return[a,$ifaceNil];    }  'if(d<0){$s=1;continue;}$s=2;continue;    case 1:  '-e=c;f=0;case 3:if(!(f<e.$length)){$s=4;continue;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);  'Ii=b(h);$s=7;case 7:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}if(i){$s=5;continue;}$s=6;continue;    case 5:  'Za=$append(a,g);    case 6:    f++;$s=3;continue;case 4:  '$s=-1;return[a,$ifaceNil];    case 2:  '�j=0;  '�k=c;l=0;case 8:if(!(l<k.$length)){$s=9;continue;}m=l;n=((l<0||l>=k.$length)?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+l]);  '�o=b(n);$s=12;case 12:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}if(o){$s=10;continue;}$s=11;continue;    case 10:  '�a=$append(a,m);  (j=j+(1)>>0;    if(j===d){  (9$s=-1;return[a,$ifaceNil];    }    case 11:    l++;$s=8;continue;case 9:  (�$s=-1;return[a,A.New("floats: insufficient elements found")];    }return;}if($f===undefined){$f={$blk:AB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Find=AB;Find
errors.Newgithub.com/gonum/floats.Find github.com/gonum/floats.HasNaNAC�AC=function(a){var $ptr,a,b,c,d;  )kb=a;c=0;while(true){if(!(c<b.$length)){break;}d=((c<0||c>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+c]);    if(B.IsNaN(d)){  )�return true;    }    c++;}  )�return false;    };$pkg.HasNaN=AC;HasNaNgithub.com/gonum/floats.HasNaN
math.IsNaN github.com/gonum/floats.LogSpanAD�yAD=function(a,b,c){var $ptr,a,b,c,d,e,f;  +�AV(a,B.Log(b),B.Log(c));  ,d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;  ,)((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]=B.Exp(((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f])));    e++;}  ,Ireturn a;    };$pkg.LogSpan=AD;LogSpangithub.com/gonum/floats.LogSpangithub.com/gonum/floats.Spanmath.Expmath.Log !github.com/gonum/floats.LogSumExpAE�JAE=function(a){var $ptr,a,b,c,d,e,f;  -�b=AF(a);    if(B.IsInf(b,0)){  .return b;    }  .4c=0;  ._d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  .zc=c+(B.Exp(f-b));    e++;}  .�return B.Log(c)+b;    };$pkg.LogSumExp=AE;	LogSumExp!github.com/gonum/floats.LogSumExpgithub.com/gonum/floats.Maxmath.Exp
math.IsInfmath.Log github.com/gonum/floats.MaxAF��AF=function(a){var $ptr,a,b;  /zreturn(b=AG(a),((b<0||b>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+b]));    };$pkg.Max=AF;Maxgithub.com/gonum/floats.Maxgithub.com/gonum/floats.MaxIdx github.com/gonum/floats.MaxIdxAG��AG=function(a){var $ptr,a,b,c,d,e,f,g;    if(a.$length===0){  0�$panic(new $String("floats: zero slice length"));    }  0�b=(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]);  0�c=0;  0�d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);    if(g>b){  0�b=g;  1	c=f;    }    e++;}  1return c;    };$pkg.MaxIdx=AG;MaxIdxgithub.com/gonum/floats.MaxIdx github.com/gonum/floats.MinAH��AH=function(a){var $ptr,a,b;  1�return(b=AI(a),((b<0||b>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+b]));    };$pkg.Min=AH;Mingithub.com/gonum/floats.Mingithub.com/gonum/floats.MinIdx github.com/gonum/floats.MinIdxAI�}AI=function(a){var $ptr,a,b,c,d,e,f,g;  2�b=(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]);  2�c=0;  2�d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);    if(g<b){  2�b=g;  2�c=f;    }    e++;}  3return c;    };$pkg.MinIdx=AI;MinIdxgithub.com/gonum/floats.MinIdx github.com/gonum/floats.MulAJ�AJ=function(a,b){var $ptr,a,b,c,d,e,f;    if(!((a.$length===b.$length))){  3�$panic(new $String("floats: slice lengths do not match"));    }  4"c=b;d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  4=((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e]=((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e])*(f));    d++;}    };$pkg.Mul=AJ;Mulgithub.com/gonum/floats.Mul github.com/gonum/floats.MulToAK�?AK=function(a,b,c){var $ptr,a,b,c,d,e,f,g;    if(!((b.$length===c.$length))||!((a.$length===c.$length))){  5L$panic(new $String("floats: slice lengths do not match"));    }  5~d=c;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  5�((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]=g*((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f]));    e++;}  5�return a;    };$pkg.MulTo=AK;MulTogithub.com/gonum/floats.MulTo github.com/gonum/floats.NearestAL��AL=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i;  6�c=0;  6�d=B.Abs(b-(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]));  6�e=a;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);  6�i=B.Abs(b-h);    if(i<d){  7 d=i;  73c=g;    }    f++;}  7Freturn c;    };$pkg.Nearest=AL;Nearestgithub.com/gonum/floats.Nearestmath.Abs )github.com/gonum/floats.NearestWithinSpanAM��AM=function(a,b,c,d){var $ptr,a,b,c,d;    if(c<b){  8�$panic(new $String("floats: upper bound greater than lower bound"));    }    if(d<b||d>c){  8�return-1;    }  9rreturn((a-1)/(c-b)*(d-b)+0.5>>0);    };$pkg.NearestWithinSpan=AM;NearestWithinSpan)github.com/gonum/floats.NearestWithinSpan github.com/gonum/floats.NormAN�QAN=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n;    if(a.$length===0){  ;lreturn 0;    }    if(b===2){  ;�c=B.Abs((0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]));  ;�d=1;while(true){if(!(d<a.$length)){break;}  ;�c=B.Hypot(c,((d<0||d>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+d]));  ;�d=d+(1)>>0;    }  ;�return c;    }  <e=0;    if(b===1){  <,f=a;g=0;while(true){if(!(g<f.$length)){break;}h=((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]);  <He=e+(B.Abs(h));    g++;}  <freturn e;    }    if(B.IsInf(b,1)){  <�i=a;j=0;while(true){if(!(j<i.$length)){break;}k=((j<0||j>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+j]);  <�e=B.Max(e,B.Abs(k));    j++;}  <�return e;    }  <�l=a;m=0;while(true){if(!(m<l.$length)){break;}n=((m<0||m>=l.$length)?($throwRuntimeError("index out of range"),undefined):l.$array[l.$offset+m]);  =e=e+(B.Pow(B.Abs(n),b));    m++;}  =0return B.Pow(e,1/b);    };$pkg.Norm=AN;Normgithub.com/gonum/floats.Normmath.Abs
math.Hypot
math.IsInfmath.Maxmath.Pow github.com/gonum/floats.ProdAO��AO=function(a){var $ptr,a,b,c,d,e;  =�b=1;  =�c=a;d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  =�b=b*(e);    d++;}  >return b;    };$pkg.Prod=AO;Prodgithub.com/gonum/floats.Prod github.com/gonum/floats.ReverseAP�2AP=function(a){var $ptr,a,b,c,d,e,f,g,h,i;  >tb=0;c=a.$length-1>>0;d=b;e=c;while(true){if(!(d<e)){break;}  >�f=((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e]);g=((d<0||d>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+d]);((d<0||d>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+d]=f);((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e]=g);  >�h=d+1>>0;i=e-1>>0;d=h;e=i;}    };$pkg.Reverse=AP;Reversegithub.com/gonum/floats.Reverse github.com/gonum/floats.RoundAQ�QAQ=function(a,b){var $ptr,a,b,c,d;    if(a===0){  ?�return 0;    }    if(b>=0&&(a===B.Trunc(a))){  @creturn a;    }  @rc=B.Pow10(b);  @�d=a*c;    if(B.IsInf(d,0)){  @�return a;    }    if(a<0){  @�a=B.Ceil(d-0.5);    }else{  Aa=B.Floor(d+0.5);    }    if(a===0){  AAreturn 0;    }  ARreturn a/c;    };$pkg.Round=AQ;Roundgithub.com/gonum/floats.Round	math.Ceil
math.Floor
math.IsInf
math.Pow10
math.Trunc !github.com/gonum/floats.RoundEvenAR��AR=function(a,b){var $ptr,a,b,c,d,e,f;    if(a===0){  B�return 0;    }    if(b>=0&&(a===B.Trunc(a))){  Creturn a;    }  Cc=B.Pow10(b);  C6d=a*c;    if(B.IsInf(d,0)){  Clreturn a;    }    if(AS(d)){  C�e=B.Modf(B.Mod(d,2));f=e[0];  C�d=d+(f);    if(d>0){  C�a=B.Floor(d);    }else{  D%a=B.Ceil(d);    }    }else{    if(a<0){  D_a=B.Ceil(d-0.5);    }else{  D�a=B.Floor(d+0.5);    }    }    if(a===0){  D�return 0;    }  D�return a/c;    };$pkg.RoundEven=AR;	RoundEven	!github.com/gonum/floats.RoundEven!github.com/gonum/floats.isHalfway	math.Ceil
math.Floor
math.IsInfmath.Mod	math.Modf
math.Pow10
math.Trunc !github.com/gonum/floats.isHalfwayAS��AS=function(a){var $ptr,a,b,c;  Eb=B.Modf(a);c=b[1];  E+c=B.Abs(c);  ECreturn(c===0.5)||(B.Nextafter(c,B.Inf(-1))<0.5&&B.Nextafter(c,B.Inf(1))>0.5);    };	isHalfway!github.com/gonum/floats.isHalfwaymath.Absmath.Inf	math.Modfmath.Nextafter github.com/gonum/floats.SameAT��AT=function(a,b){var $ptr,a,b,c,d,e,f,g;    if(!((a.$length===b.$length))){  F{return false;    }  F�c=a;d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  F�g=((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]);    if(!((f===g))&&!B.IsNaN(f)&&!B.IsNaN(g)){  F�return false;    }    d++;}  G return true;    };$pkg.Same=AT;Samegithub.com/gonum/floats.Same
math.IsNaN github.com/gonum/floats.ScaleAUfAU=function(a,b){var $ptr,a,b;    if(b.$length>0){  G�D.ScalUnitary(a,b);    }    };$pkg.Scale=AU;Scalegithub.com/gonum/floats.Scale-github.com/gonum/internal/asm/f64.ScalUnitary github.com/gonum/floats.SpanAV�yAV=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h;  Igd=a.$length;    if(d<2){  I�$panic(new $String("floats: destination must have length >1"));    }  I�e=(c-b)/(d-1>>0);  I�f=a;g=0;while(true){if(!(g<f.$length)){break;}h=g;  I�((h<0||h>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+h]=b+e*h);    g++;}  Jreturn a;    };$pkg.Span=AV;Spangithub.com/gonum/floats.Span github.com/gonum/floats.SubAW��AW=function(a,b){var $ptr,a,b;    if(!((a.$length===b.$length))){  J�$panic(new $String("floats: length of the slices do not match"));    }  KD.AxpyUnitaryTo(a,-1,b,a);    };$pkg.Sub=AW;Subgithub.com/gonum/floats.Sub/github.com/gonum/internal/asm/f64.AxpyUnitaryTo github.com/gonum/floats.SubToAX�kAX=function(a,b,c){var $ptr,a,b,c;    if(!((b.$length===c.$length))){  L$panic(new $String("floats: length of subtractor and subtractee do not match"));    }    if(!((a.$length===b.$length))){  Ls$panic(new $String("floats: length of destination does not match length of subtractor"));    }  L�D.AxpyUnitaryTo(a,-1,c,b);  L�return a;    };$pkg.SubTo=AX;SubTogithub.com/gonum/floats.SubTo/github.com/gonum/internal/asm/f64.AxpyUnitaryTo github.com/gonum/floats.SumAY��AY=function(a){var $ptr,a,b,c,d,e;  MTb=0;  Mbc=a;d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  M}b=b+(e);    d++;}  M�return b;    };$pkg.Sum=AY;Sumgithub.com/gonum/floats.Sum github.com/gonum/floats.WithinAZ��AZ=function(a,b){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(a.$length<2){  NX$panic(new $String("floats: slice length less than 2"));    }  N�c=C.Float64sAreSorted(a);$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}if(!c){$s=1;continue;}$s=2;continue;    case 1:  N�$panic(new $String("floats: input slice not sorted"));    case 2:    if(b<(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0])||b>=(d=a.$length-1>>0,((d<0||d>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+d]))||B.IsNaN(b)){  O$s=-1;return-1;    }  Oe=$subslice(a,1);f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);    if(b<h){  OK$s=-1;return g;    }    f++;}  O_$s=-1;return-1;    }return;}if($f===undefined){$f={$blk:AZ};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Within=AZ;Withingithub.com/gonum/floats.Within
math.IsNaNsort.Float64sAreSorted �-{"Base":20334,"Files":[{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\floats\\floats.go","Base":1,"Size":20332,"Lines":[0,59,107,157,159,236,314,361,365,445,463,479,481,491,502,511,520,522,560,563,565,639,692,722,748,802,806,842,845,847,905,987,1032,1056,1106,1110,1136,1209,1213,1247,1260,1263,1265,1325,1368,1391,1406,1410,1413,1415,1461,1518,1579,1605,1671,1675,1715,1718,1720,1791,1828,1889,1893,1957,2033,2081,2132,2136,2174,2187,2190,2192,2259,2272,2295,2312,2325,2328,2330,2360,2378,2381,2383,2423,2448,2451,2453,2488,2522,2568,2571,2573,2646,2722,2802,2872,2931,2974,3003,3069,3073,3096,3111,3115,3117,3152,3167,3170,3172,3250,3291,3344,3356,3382,3397,3405,3410,3414,3425,3428,3430,3498,3555,3623,3641,3645,3718,3762,3788,3866,3870,3891,3905,3909,3938,3941,3943,4006,4063,4131,4149,4153,4226,4269,4295,4373,4377,4398,4412,4416,4444,4447,4449,4520,4583,4635,4659,4706,4710,4729,4741,4745,4764,4778,4803,4824,4858,4863,4878,4882,4896,4921,4952,4957,4972,4976,5000,5025,5059,5083,5103,5109,5114,5129,5133,5157,5198,5202,5231,5234,5236,5283,5333,5371,5401,5427,5474,5478,5496,5499,5501,5548,5598,5642,5687,5733,5780,5784,5814,5817,5819,5871,5902,5963,6001,6027,6082,6086,6118,6121,6123,6183,6227,6264,6290,6306,6310,6337,6358,6375,6380,6384,6398,6401,6403,6469,6537,6575,6631,6657,6673,6677,6702,6751,6768,6773,6777,6791,6794,6796,6859,6916,6988,7014,7030,7034,7061,7084,7101,7106,7110,7124,7127,7129,7189,7222,7269,7309,7312,7314,7364,7366,7432,7485,7532,7546,7561,7565,7592,7625,7665,7669,7733,7797,7862,7888,7945,7948,7950,8018,8046,8109,8145,8160,8164,8202,8205,8207,8270,8338,8390,8404,8419,8423,8461,8477,8481,8523,8608,8612,8686,8689,8691,8727,8740,8756,8760,8775,8778,8780,8850,8918,8965,9035,9059,9074,9078,9100,9137,9165,9182,9187,9191,9205,9208,9210,9288,9354,9368,9429,9456,9524,9592,9676,9758,9760,9817,9819,9857,9875,9877,9926,9940,9960,9964,9966,10013,10026,10053,10069,10097,10103,10108,10128,10132,10134,10176,10190,10216,10231,10258,10271,10292,10314,10320,10325,10329,10406,10471,10474,10476,10553,10568,10601,10625,10647,10663,10668,10672,10687,10690,10692,10767,10834,10902,10929,11005,11050,11129,11133,11186,11241,11279,11302,11331,11335,11348,11351,11353,11434,11469,11508,11570,11598,11647,11666,11695,11769,11801,11818,11822,11840,11869,11895,11928,11932,11989,12021,12024,12026,12119,12152,12174,12177,12179,12260,12343,12376,12408,12427,12465,12469,12483,12497,12521,12537,12549,12561,12566,12570,12583,12586,12588,12681,12714,12736,12739,12741,12822,12905,12938,12970,12984,12998,13022,13038,13050,13062,13067,13071,13084,13087,13089,13146,13199,13237,13267,13293,13340,13344,13370,13387,13391,13394,13396,13453,13506,13550,13595,13641,13688,13692,13718,13741,13745,13758,13761,13763,13813,13863,13913,13940,13984,13998,14027,14053,14085,14108,14127,14139,14144,14148,14161,14164,14166,14238,14306,14385,14427,14489,14502,14559,14563,14585,14598,14602,14662,14704,14751,14754,14756,14811,14842,14861,14915,14973,15018,15066,15136,15160,15190,15209,15221,15225,15239,15268,15301,15341,15346,15364,15368,15387,15401,15428,15454,15459,15474,15478,15502,15529,15570,15575,15590,15594,15620,15658,15662,15691,15694,15696,15755,15784,15818,15832,15858,15873,15877,15891,15894,15896,15953,15982,16034,16061,16065,16068,16070,16152,16156,16179,16200,16226,16248,16291,16305,16338,16374,16386,16390,16441,16480,16492,16496,16522,16544,16575,16587,16591,16604,16637,16648,16682,16686,16688,16702,16714,16718,16720,16737,16740,16742,16818,16822,16845,16870,16900,16926,16973,16987,17020,17056,17068,17072,17123,17162,17174,17178,17204,17226,17257,17269,17273,17300,17353,17379,17400,17429,17441,17469,17474,17485,17499,17533,17545,17580,17585,17589,17591,17605,17617,17621,17623,17640,17643,17645,17679,17705,17729,17839,17842,17844,17928,17982,18016,18040,18056,18060,18084,18097,18148,18165,18170,18174,18188,18191,18193,18252,18292,18312,18339,18343,18346,18348,18423,18507,18560,18588,18592,18683,18687,18737,18789,18805,18818,18870,18874,18907,18930,18962,18966,18979,18982,18984,19055,19098,19128,19154,19208,19212,19249,19252,19254,19318,19400,19445,19469,19538,19542,19568,19646,19650,19685,19698,19701,19703,19757,19790,19808,19834,19848,19852,19865,19868,19870,19951,19969,19992,20035,20053,20098,20102,20136,20179,20183,20236,20249,20253,20281,20295,20308,20313,20317,20329],"Infos":null}]}
 
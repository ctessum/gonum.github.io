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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �z��encoding/base32base32bytesiostrconvstrings�I
$$ exports $$
pv0base32encoding/base32"CorruptInputError 

Errore8    Encoding encode   decodeMap �2 Encodeenc<dst2srcF  EncodeToStringenc<src2   EncodedLenenc<n  decodeenc<dst2srcVnend err6 Decodeenc<dst2src\nerr6 DecodeStringenc<s  2 6 DecodedLenenc<n  HexEncoding<	NewDecoder enc<rReaderioio Read p2nerr6   n 	NewEncoder enc<wWriter 
Write p2nerr6   WriteCloserCloser 
Close   6  z   	NewEncoding encoder  h StdEncodingh(AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["io"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["strconv"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["strings"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E��E=$pkg.Encoding=$newType(0,$kindStruct,"base32.Encoding",true,"encoding/base32",true,function(encode_,decodeMap_){this.$val=this;if(arguments.length===0){this.encode="";this.decodeMap=N.zero();return;}this.encode=encode_;this.decodeMap=decodeMap_;});�SP.methods=[{prop:"Encode",name:"Encode",pkg:"",typ:$funcType([O,O],[],false)},{prop:"EncodeToString",name:"EncodeToString",pkg:"",typ:$funcType([O],[$String],false)},{prop:"EncodedLen",name:"EncodedLen",pkg:"",typ:$funcType([$Int],[$Int],false)},{prop:"decode",name:"decode",pkg:"encoding/base32",typ:$funcType([O,O],[$Int,$Bool,$error],false)},{prop:"Decode",name:"Decode",pkg:"",typ:$funcType([O,O],[$Int,$error],false)},{prop:"DecodeString",name:"DecodeString",pkg:"",typ:$funcType([$String],[O,$error],false)},{prop:"DecodedLen",name:"DecodedLen",pkg:"",typ:$funcType([$Int],[$Int],false)}];��E.init("encoding/base32",[{prop:"encode",name:"encode",exported:false,typ:$String,tag:""},{prop:"decodeMap",name:"decodeMap",exported:false,typ:N,tag:""}]);Encodingencoding/base32.Encodingencoding/base32.Nencoding/base32.Oencoding/base32.P H�cH=$pkg.encoder=$newType(0,$kindStruct,"base32.encoder",true,"encoding/base32",false,function(err_,enc_,w_,buf_,nbuf_,out_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;this.enc=P.nil;this.w=$ifaceNil;this.buf=Q.zero();this.nbuf=0;this.out=R.zero();return;}this.err=err_;this.enc=enc_;this.w=w_;this.buf=buf_;this.nbuf=nbuf_;this.out=out_;});��U.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([O],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�aH.init("encoding/base32",[{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"enc",name:"enc",exported:false,typ:P,tag:""},{prop:"w",name:"w",exported:false,typ:B.Writer,tag:""},{prop:"buf",name:"buf",exported:false,typ:Q,tag:""},{prop:"nbuf",name:"nbuf",exported:false,typ:$Int,tag:""},{prop:"out",name:"out",exported:false,typ:R,tag:""}]);encoderencoding/base32.Oencoding/base32.Pencoding/base32.Qencoding/base32.Rencoding/base32.Uencoding/base32.encoder	io.Writer JlJ=$pkg.CorruptInputError=$newType(8,$kindInt64,"base32.CorruptInputError",true,"encoding/base32",true,null);QJ.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];CorruptInputError!encoding/base32.CorruptInputError K��K=$pkg.decoder=$newType(0,$kindStruct,"base32.decoder",true,"encoding/base32",false,function(err_,enc_,r_,end_,buf_,nbuf_,out_,outbuf_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;this.enc=P.nil;this.r=$ifaceNil;this.end=false;this.buf=R.zero();this.nbuf=0;this.out=O.nil;this.outbuf=T.zero();return;}this.err=err_;this.enc=enc_;this.r=r_;this.end=end_;this.buf=buf_;this.nbuf=nbuf_;this.out=out_;this.outbuf=outbuf_;});TV.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([O],[$Int,$error],false)}];��K.init("encoding/base32",[{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"enc",name:"enc",exported:false,typ:P,tag:""},{prop:"r",name:"r",exported:false,typ:B.Reader,tag:""},{prop:"end",name:"end",exported:false,typ:$Bool,tag:""},{prop:"buf",name:"buf",exported:false,typ:R,tag:""},{prop:"nbuf",name:"nbuf",exported:false,typ:$Int,tag:""},{prop:"out",name:"out",exported:false,typ:O,tag:""},{prop:"outbuf",name:"outbuf",exported:false,typ:T,tag:""}]);decoderencoding/base32.Oencoding/base32.Pencoding/base32.Rencoding/base32.Tencoding/base32.Vencoding/base32.decoder	io.Reader L��L=$pkg.newlineFilteringReader=$newType(0,$kindStruct,"base32.newlineFilteringReader",true,"encoding/base32",false,function(wrapped_){this.$val=this;if(arguments.length===0){this.wrapped=$ifaceNil;return;}this.wrapped=wrapped_;});TW.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([O],[$Int,$error],false)}];_L.init("encoding/base32",[{prop:"wrapped",name:"wrapped",exported:false,typ:B.Reader,tag:""}]);newlineFilteringReaderencoding/base32.Oencoding/base32.W&encoding/base32.newlineFilteringReader	io.Reader NN=$arrayType($Uint8,256);N OO=$sliceType($Uint8);O PP=$ptrType(E);Pencoding/base32.Encoding QQ=$arrayType($Uint8,5);Q RR=$arrayType($Uint8,1024);R SS=$arrayType($Uint8,8);S TT=$arrayType($Uint8,640);T UU=$ptrType(H);Uencoding/base32.encoder VV=$ptrType(K);Vencoding/base32.decoder WW=$ptrType(L);W&encoding/base32.newlineFilteringReader StdEncoding HexEncoding GremoveNewlinesMapper <    $pkg.StdEncoding=F("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567");encoding/base32.NewEncodingencoding/base32.StdEncoding <    $pkg.HexEncoding=F("0123456789ABCDEFGHIJKLMNOPQRSTUV");encoding/base32.HexEncodingencoding/base32.NewEncoding e    G=(function(a){var $ptr,a;    if((a===13)||(a===10)){  �return-1;    }  �return a;    });removeNewlinesMapper$encoding/base32.removeNewlinesMapper encoding/base32.NewEncodingF��F=function(a){var $ptr,a,b,c,d,e,f,g;  |b=new E.ptr("",N.zero());  �b.encode=a;  �c=0;while(true){if(!(c<256)){break;}  �(d=b.decodeMap,((c<0||c>=d.length)?($throwRuntimeError("index out of range"),undefined):d[c]=255));  �c=c+(1)>>0;    }  �e=0;while(true){if(!(e<a.length)){break;}  (f=b.decodeMap,g=a.charCodeAt(e),((g<0||g>=f.length)?($throwRuntimeError("index out of range"),undefined):f[g]=(e<<24>>>24)));  e=e+(1)>>0;    }  4return b;    };$pkg.NewEncoding=F;NewEncodingencoding/base32.Encodingencoding/base32.Nencoding/base32.NewEncoding "(*encoding/base32.Encoding).Encode��E.ptr.prototype.Encode=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=this;    if(b.$length===0){  return;    }  while(true){if(!(b.$length>0)){break;}  4d=0;e=0;f=0;g=0;h=0;i=0;j=0;k=0;l=d;m=e;n=f;o=g;p=h;q=i;r=j;s=k;    t=b.$length;    if(t===(4)){  r=(r|((((((3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])<<3<<24>>>24))&31)>>>0)))>>>0;  &q=((((3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])>>>2<<24>>>24))&31)>>>0;  Cp=(3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])>>>7<<24>>>24;  pp=(p|((((((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])<<1<<24>>>24))&31)>>>0)))>>>0;  �o=((((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])>>>4<<24>>>24))&31)>>>0;  �o=(o|((((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])<<4<<24>>>24))&31)>>>0)))>>>0;  �n=((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>1<<24>>>24))&31)>>>0;  �m=((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>6<<24>>>24))&31)>>>0;  	5m=(m|((((((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Sl=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])>>>3<<24>>>24;    }else if(t===(3)){  pp=(p|((((((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])<<1<<24>>>24))&31)>>>0)))>>>0;  �o=((((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])>>>4<<24>>>24))&31)>>>0;  �o=(o|((((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])<<4<<24>>>24))&31)>>>0)))>>>0;  �n=((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>1<<24>>>24))&31)>>>0;  �m=((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>6<<24>>>24))&31)>>>0;  	5m=(m|((((((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Sl=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])>>>3<<24>>>24;    }else if(t===(2)){  �o=(o|((((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])<<4<<24>>>24))&31)>>>0)))>>>0;  �n=((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>1<<24>>>24))&31)>>>0;  �m=((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>6<<24>>>24))&31)>>>0;  	5m=(m|((((((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Sl=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])>>>3<<24>>>24;    }else if(t===(1)){  	5m=(m|((((((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Sl=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])>>>3<<24>>>24;    }else{  �s=((4>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+4])&31)>>>0;  �r=(4>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+4])>>>5<<24>>>24;  r=(r|((((((3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])<<3<<24>>>24))&31)>>>0)))>>>0;  &q=((((3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])>>>2<<24>>>24))&31)>>>0;  Cp=(3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])>>>7<<24>>>24;  pp=(p|((((((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])<<1<<24>>>24))&31)>>>0)))>>>0;  �o=((((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])>>>4<<24>>>24))&31)>>>0;  �o=(o|((((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])<<4<<24>>>24))&31)>>>0)))>>>0;  �n=((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>1<<24>>>24))&31)>>>0;  �m=((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>6<<24>>>24))&31)>>>0;  	5m=(m|((((((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Sl=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])>>>3<<24>>>24;    }  	�(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=c.encode.charCodeAt(l));  	�(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=c.encode.charCodeAt(m));  	�(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=c.encode.charCodeAt(n));  	�(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=c.encode.charCodeAt(o));  
(4>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+4]=c.encode.charCodeAt(p));  
 (5>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+5]=c.encode.charCodeAt(q));  
:(6>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+6]=c.encode.charCodeAt(r));  
T(7>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+7]=c.encode.charCodeAt(s));    if(b.$length<5){  
�(7>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+7]=61);    if(b.$length<4){  
�(6>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+6]=61);  
�(5>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+5]=61);    if(b.$length<3){  
�(4>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+4]=61);    if(b.$length<2){  ((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=61);  ;(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=61);    }    }    }  ]break;    }  ib=$subslice(b,5);  ya=$subslice(a,8);    }    };E.prototype.Encode=function(a,b){return this.$val.Encode(a,b);};Encodingencoding/base32.Encoding *(*encoding/base32.Encoding).EncodeToString��E.ptr.prototype.EncodeToString=function(a){var $ptr,a,b,c;b=this;  �c=$makeSlice(O,b.EncodedLen(a.$length));  ,b.Encode(c,a);  Breturn $bytesToString(c);    };E.prototype.EncodeToString=function(a){return this.$val.EncodeToString(a);};Encodingencoding/base32.Encodingencoding/base32.O  (*encoding/base32.encoder).Write�
H.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    e=0;f=d.err;b=e;c=f;$s=-1;return[b,c];    }  �if(d.nbuf>0){$s=1;continue;}$s=2;continue;    case 1:  �g=0;  �g=0;while(true){if(!(g<a.$length&&d.nbuf<5)){break;}  �(h=d.buf,i=d.nbuf,((i<0||i>=h.length)?($throwRuntimeError("index out of range"),undefined):h[i]=((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g])));  �d.nbuf=d.nbuf+(1)>>0;  �g=g+(1)>>0;    }  
b=b+(g)>>0;  a=$subslice(a,g);    if(d.nbuf<5){  2$s=-1;return[b,c];    }  ?d.enc.Encode($subslice(new O(d.out),0),$subslice(new O(d.buf),0));  gk=d.w.Write($subslice(new O(d.out),0,8));$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;d.err=j[1];    if(!($interfaceIsEqual(d.err,$ifaceNil))){    l=b;m=d.err;b=l;c=m;$s=-1;return[b,c];    }  �d.nbuf=0;    case 2:  �case 4:if(!(a.$length>=5)){$s=5;continue;}  �n=640;    if(n>a.$length){  n=a.$length;  .n=n-((o=n%5,o===o?o:$throwRuntimeError("integer divide by zero")))>>0;    }  Ad.enc.Encode($subslice(new O(d.out),0),$subslice(a,0,n));  gr=d.w.Write($subslice(new O(d.out),0,($imul((q=n/5,(q===q&&q!==1/0&&q!==-1/0)?q>>0:$throwRuntimeError("integer divide by zero")),8))));$s=6;case 6:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}p=r;d.err=p[1];    if(!($interfaceIsEqual(d.err,$ifaceNil))){    s=b;t=d.err;b=s;c=t;$s=-1;return[b,c];    }  �b=b+(n)>>0;  �a=$subslice(a,n);    $s=4;continue;case 5:  �u=0;while(true){if(!(u<a.$length)){break;}  (v=d.buf,((u<0||u>=v.length)?($throwRuntimeError("index out of range"),undefined):v[u]=((u<0||u>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+u])));  �u=u+(1)>>0;    }  d.nbuf=a.$length;  ,b=b+(a.$length)>>0;  9$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Write=function(a){return this.$val.Write(a);};encoderencoding/base32.Oencoding/base32.encoder  (*encoding/base32.encoder).Close�H.ptr.prototype.Close=function(){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  
if($interfaceIsEqual(a.err,$ifaceNil)&&a.nbuf>0){$s=1;continue;}$s=2;continue;    case 1:  ,a.enc.Encode($subslice(new O(a.out),0),$subslice(new O(a.buf),0,a.nbuf));  Wa.nbuf=0;  dc=a.w.Write($subslice(new O(a.out),0,8));$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;a.err=b[1];    case 2:  �$s=-1;return a.err;    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Close=function(){return this.$val.Close();};encoderencoding/base32.Oencoding/base32.encoder encoding/base32.NewEncoderIoI=function(a,b){var $ptr,a,b;  �return new H.ptr($ifaceNil,a,b,Q.zero(),0,R.zero());    };$pkg.NewEncoder=I;
NewEncoderencoding/base32.Encodingencoding/base32.NewEncoderencoding/base32.Pencoding/base32.Qencoding/base32.Rencoding/base32.encoder &(*encoding/base32.Encoding).EncodedLen��E.ptr.prototype.EncodedLen=function(a){var $ptr,a,b,c;b=this;  �return $imul((c=((a+4>>0))/5,(c===c&&c!==1/0&&c!==-1/0)?c>>0:$throwRuntimeError("integer divide by zero")),8);    };E.prototype.EncodedLen=function(a){return this.$val.EncodedLen(a);};Encodingencoding/base32.Encoding )(encoding/base32.CorruptInputError).Error��J.prototype.Error=function(){var $ptr,a;a=this;  +return"illegal base32 data at input byte "+C.FormatInt(new $Int64(a.$high,a.$low),10);    };$ptrType(J).prototype.Error=function(){return this.$get().Error();};CorruptInputError!encoding/base32.CorruptInputErrorstrconv.FormatInt "(*encoding/base32.Encoding).decode��E.ptr.prototype.decode=function(a,b){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=0;d=false;e=$ifaceNil;f=this;  �g=b.$length;  �while(true){if(!(b.$length>0&&!d)){break;}  3h=S.zero();  Bi=8;  Sj=0;while(true){if(!(j<8)){break;}    if(b.$length===0){    k=c;l=false;m=new J(0,((g-b.$length>>0)-j>>0));c=k;d=l;e=m;return[c,d,e];    }  �n=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0]);  �b=$subslice(b,1);    if((n===61)&&j>=2&&b.$length<8){    if((b.$length+j>>0)<7){    o=c;p=false;q=new J(0,g);c=o;d=p;e=q;return[c,d,e];    }  �r=0;while(true){if(!(r<(7-j>>0))){break;}    if(b.$length>r&&!((((r<0||r>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+r])===61))){    s=c;t=false;u=new J(0,(((g-b.$length>>0)+r>>0)-1>>0));c=s;d=t;e=u;return[c,d,e];    }  �r=r+(1)>>0;    }  Yv=j;w=true;i=v;d=w;    if((i===1)||(i===3)||(i===6)){    x=c;y=false;z=new J(0,((g-b.$length>>0)-1>>0));c=x;d=y;e=z;return[c,d,e];    }  Pbreak;    }  ^((j<0||j>=h.length)?($throwRuntimeError("index out of range"),undefined):h[j]=(aa=f.decodeMap,((n<0||n>=aa.length)?($throwRuntimeError("index out of range"),undefined):aa[n])));    if(((j<0||j>=h.length)?($throwRuntimeError("index out of range"),undefined):h[j])===255){    ab=c;ac=false;ad=new J(0,((g-b.$length>>0)-1>>0));c=ab;d=ac;e=ad;return[c,d,e];    }  �j=j+(1)>>0;    }    ae=i;    if(ae===(8)){  B(4>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+4]=(((h[6]<<5<<24>>>24)|h[7])>>>0));  |(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=(((((h[4]<<7<<24>>>24)|(h[5]<<2<<24>>>24))>>>0)|(h[6]>>>3<<24>>>24))>>>0));  �(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=(((h[3]<<4<<24>>>24)|(h[4]>>>1<<24>>>24))>>>0));  (1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=(((((h[1]<<6<<24>>>24)|(h[2]<<1<<24>>>24))>>>0)|(h[3]>>>4<<24>>>24))>>>0));  M(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));    }else if(ae===(7)){  |(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=(((((h[4]<<7<<24>>>24)|(h[5]<<2<<24>>>24))>>>0)|(h[6]>>>3<<24>>>24))>>>0));  �(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=(((h[3]<<4<<24>>>24)|(h[4]>>>1<<24>>>24))>>>0));  (1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=(((((h[1]<<6<<24>>>24)|(h[2]<<1<<24>>>24))>>>0)|(h[3]>>>4<<24>>>24))>>>0));  M(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));    }else if(ae===(5)){  �(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=(((h[3]<<4<<24>>>24)|(h[4]>>>1<<24>>>24))>>>0));  (1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=(((((h[1]<<6<<24>>>24)|(h[2]<<1<<24>>>24))>>>0)|(h[3]>>>4<<24>>>24))>>>0));  M(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));    }else if(ae===(4)){  (1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=(((((h[1]<<6<<24>>>24)|(h[2]<<1<<24>>>24))>>>0)|(h[3]>>>4<<24>>>24))>>>0));  M(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));    }else if(ae===(2)){  M(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));    }  ta=$subslice(a,5);    af=i;    if(af===(2)){  �c=c+(1)>>0;    }else if(af===(4)){  �c=c+(2)>>0;    }else if(af===(5)){  �c=c+(3)>>0;    }else if(af===(7)){  �c=c+(4)>>0;    }else if(af===(8)){  �c=c+(5)>>0;    }    }    ag=c;ah=d;ai=$ifaceNil;c=ag;d=ah;e=ai;return[c,d,e];    };E.prototype.decode=function(a,b){return this.$val.decode(a,b);};Encodingdecode~!encoding/base32.CorruptInputErrorencoding/base32.Encodingencoding/base32.S "(*encoding/base32.Encoding).Decode��E.ptr.prototype.Decode=function(a,b){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=0;d=$ifaceNil;e=this;  �f=A.Map(G,b);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}b=f;  �g=e.decode(a,b);c=g[0];d=g[2];  �$s=-1;return[c,d];    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Decode};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Decode=function(a,b){return this.$val.Decode(a,b);};Encoding	bytes.Mapencoding/base32.Encodingencoding/base32.decode~$encoding/base32.removeNewlinesMapper ((*encoding/base32.Encoding).DecodeString��E.ptr.prototype.DecodeString=function(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  lc=D.Map(G,a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}a=c;  �d=$makeSlice(O,b.DecodedLen(a.length));  �e=b.decode(d,new O($stringToBytes(a)));f=e[0];g=e[2];  �$s=-1;return[$subslice(d,0,f),g];    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.DecodeString};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.DecodeString=function(a){return this.$val.DecodeString(a);};Encodingencoding/base32.Encodingencoding/base32.Oencoding/base32.decode~$encoding/base32.removeNewlinesMapperstrings.Map (*encoding/base32.decoder).Read�	QK.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    e=0;f=d.err;b=e;c=f;$s=-1;return[b,c];    }    if(d.out.$length>0){  !�b=$copySlice(a,d.out);  !�d.out=$subslice(d.out,b);    g=b;h=$ifaceNil;b=g;c=h;$s=-1;return[b,c];    }  !�j=$imul((i=a.$length/5,(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero")),8);    if(j<8){  "j=8;    }    if(j>1024){  "*j=1024;    }  ">l=B.ReadAtLeast(d.r,$subslice(new O(d.buf),d.nbuf,j),8-d.nbuf>>0);$s=1;case 1:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;j=k[0];d.err=k[1];  "{d.nbuf=d.nbuf+(j)>>0;    if(d.nbuf<8){    m=0;n=d.err;b=m;c=n;$s=-1;return[b,c];    }  "�p=$imul((o=d.nbuf/8,(o===o&&o!==1/0&&o!==-1/0)?o>>0:$throwRuntimeError("integer divide by zero")),8);  #r=$imul((q=d.nbuf/8,(q===q&&q!==1/0&&q!==-1/0)?q>>0:$throwRuntimeError("integer divide by zero")),5);    if(r>a.$length){  #/s=d.enc.decode($subslice(new O(d.outbuf),0),$subslice(new O(d.buf),0,p));r=s[0];d.end=s[1];d.err=s[2];  #ld.out=$subslice(new O(d.outbuf),0,r);  #�b=$copySlice(a,d.out);  #�d.out=$subslice(d.out,b);    }else{  #�t=d.enc.decode(a,$subslice(new O(d.buf),0,p));b=t[0];d.end=t[1];d.err=t[2];    }  #�d.nbuf=d.nbuf-(p)>>0;  #�u=0;while(true){if(!(u<d.nbuf)){break;}  $(x=d.buf,((u<0||u>=x.length)?($throwRuntimeError("index out of range"),undefined):x[u]=(v=d.buf,w=u+p>>0,((w<0||w>=v.length)?($throwRuntimeError("index out of range"),undefined):v[w]))));  $u=u+(1)>>0;    }    if($interfaceIsEqual(d.err,$ifaceNil)){  $Id.err=c;    }    y=b;z=d.err;b=y;c=z;$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Read=function(a){return this.$val.Read(a);};decoderencoding/base32.Oencoding/base32.decoderencoding/base32.decode~io.ReadAtLeast .(*encoding/base32.newlineFilteringReader).Read�L.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  $�d=b.wrapped.Read(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];  %case 2:if(!(e>0)){$s=3;continue;}  %g=0;  % h=$subslice(a,0,e);i=0;while(true){if(!(i<h.$length)){break;}j=i;k=((i<0||i>=h.$length)?($throwRuntimeError("index out of range"),undefined):h.$array[h.$offset+i]);    if(!((k===13))&&!((k===10))){    if(!((j===g))){  %t((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g]=k);    }  %�g=g+(1)>>0;    }    i++;}    if(g>0){  %�$s=-1;return[g,f];    }  &m=b.wrapped.Read(a);$s=4;case 4:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;e=l[0];f=l[1];    $s=2;continue;case 3:  & $s=-1;return[e,f];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Read=function(a){return this.$val.Read(a);};newlineFilteringReader&encoding/base32.newlineFilteringReader encoding/base32.NewDecoderM��M=function(a,b){var $ptr,a,b;  &�return new K.ptr($ifaceNil,a,new L.ptr(b),false,R.zero(),0,O.nil,T.zero());    };$pkg.NewDecoder=M;
NewDecoderencoding/base32.NewDecoderencoding/base32.Oencoding/base32.Pencoding/base32.Rencoding/base32.Tencoding/base32.decoder&encoding/base32.newlineFilteringReader &(*encoding/base32.Encoding).DecodedLen��E.ptr.prototype.DecodedLen=function(a){var $ptr,a,b,c;b=this;  '�return $imul((c=a/8,(c===c&&c!==1/0&&c!==-1/0)?c>>0:$throwRuntimeError("integer divide by zero")),5);    };E.prototype.DecodedLen=function(a){return this.$val.DecodedLen(a);};Encodingencoding/base32.Encoding ��{"Base":10135,"Files":[{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\goroot\\src\\encoding\\base32\\base32.go","Base":1,"Size":10133,"Lines":[0,55,109,159,160,231,246,247,256,265,271,282,293,295,296,299,312,316,317,385,452,512,569,592,610,631,633,634,687,740,741,810,845,890,910,930,971,995,998,1035,1071,1074,1084,1086,1087,1149,1162,1203,1204,1273,1305,1346,1347,1394,1423,1435,1438,1448,1450,1451,1454,1465,1469,1470,1524,1562,1565,1623,1684,1737,1784,1804,1813,1816,1817,1837,1879,1880,1929,1954,1974,1985,2007,2027,2042,2052,2082,2111,2131,2146,2156,2186,2215,2230,2240,2270,2299,2328,2343,2353,2383,2403,2407,2408,2459,2485,2511,2537,2563,2589,2615,2641,2667,2668,2695,2715,2731,2752,2769,2786,2808,2826,2849,2868,2887,2894,2900,2905,2914,2918,2934,2950,2953,2955,2956,3010,3067,3114,3136,3156,3158,3159,3181,3193,3209,3225,3281,3324,3358,3360,3361,3416,3435,3453,3456,3457,3477,3494,3506,3551,3575,3587,3591,3600,3612,3630,3640,3644,3681,3735,3754,3758,3771,3774,3775,3802,3821,3848,3867,3882,3898,3902,3937,3998,4017,4021,4031,4044,4047,4048,4069,4100,4118,4121,4138,4151,4159,4161,4162,4216,4269,4303,4360,4393,4436,4449,4484,4487,4501,4503,4504,4571,4643,4703,4771,4800,4861,4894,4896,4897,4962,4997,5067,5068,5071,5082,5086,5087,5116,5117,5161,5240,5242,5243,5313,5381,5451,5508,5584,5602,5630,5676,5695,5707,5708,5731,5753,5813,5818,5834,5851,5895,5944,5970,5997,6043,6049,6082,6122,6149,6215,6222,6228,6252,6327,6403,6475,6548,6619,6664,6725,6731,6741,6746,6777,6801,6861,6866,6873,6877,6878,6935,6948,6964,6974,7007,7022,7032,7081,7096,7106,7142,7157,7167,7216,7231,7241,7277,7281,7297,7313,7323,7333,7343,7353,7363,7373,7383,7393,7403,7413,7417,7420,7440,7442,7443,7507,7576,7644,7707,7755,7821,7865,7899,7907,7909,7910,7980,8042,8084,8130,8172,8194,8196,8197,8219,8233,8251,8269,8310,8347,8359,8401,8428,8430,8431,8485,8504,8522,8525,8526,8574,8595,8616,8636,8652,8655,8656,8674,8696,8709,8718,8721,8743,8761,8764,8825,8839,8856,8874,8877,8878,8942,8964,8986,9004,9065,9090,9111,9131,9141,9190,9193,9207,9238,9263,9266,9267,9286,9300,9303,9320,9322,9323,9360,9379,9381,9382,9445,9474,9487,9501,9530,9561,9582,9601,9607,9620,9625,9629,9647,9669,9673,9726,9755,9758,9773,9775,9776,9830,9886,9944,9946,9947,10017,10069],"Infos":null}]}
 
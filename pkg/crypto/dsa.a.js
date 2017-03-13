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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �H���
crypto/dsadsaerrorsiomath/big��
$$ exports $$
pv0dsacrypto/dsa&ErrInvalidPublicKey6	GenerateKey privPrivateKey   PublicKey   Parameters PIntbigmath/bigneg  absnatWord T
clearzN   normzN  N makezNn N setWordzNxR N setUint64zNx N setzNxN N addzNxNyN N subzNxNyN N cmpxNyNr mulAddWWzNxNyRrR N montgomeryzN
xNyNmNkRn N mulzNxNyN N mulRangezNab N divWzNxNyRqNrR divzNz2NuNvNqNrN divLargezNuNuInNvNqNrN bitLenxN    trailingZeroBitsxN   shlzNxNs N shrzNxNs N setBitzNxNib N bitxNi  stickyxNi  andzNxNyN N andNotzNxNyN N orzNxNyN N xorzNxNyN N modWxNdRrR randomzNrandRandrandmath/randsrcSource 
Int63   
 Seed seed
    s64Source64�Uint64      readVal
 readPos ExpFloat64r�   NormFloat64r�   Seedr�seed
  
Int63r�  
 Uint32r�   Uint64r�   
Int31r�   Intr�   Int63nr�n
 
 Int31nr�n  Intnr�n  Float64r�   Float32r�   Permr�n  Readr�p2nerr6 
limitNn N 
expNNzNxNyNmN N expNNWindowedzNxNyNmN N expNNMontgomeryzNxNyNmN N 
byteszNbuf2i setByteszNbuf2 N sqrtzNxN N scanzNrByteScannerioioByteReader ReadByte   2 6  UnreadByte   6  basefracOk resNb
counterr6 utoaxNbase 2 itoaxNneg base 2 convertWordsqN
s2bRndigitsbbR
tabledivisorbbbN 
nbits ndigits    
expWWzNxRyR N 0probablyPrimeMillerRabinnNrepsforce2    $probablyPrimeLucasnN     rSignxJ   SetInt64zJx
 J SetUint64zJx J SetzJxJ J BitsxJ  R SetBitszJabsR J AbszJxJ J NegzJxJ J AddzJxJy� J SubzJxJy� J MulzJxJy� J MulRangezJa
b
 J BinomialzJn
k
 J QuozJxJy� J RemzJxJy� J QuoRemzJxJy�r� J J DivzJxJy� J ModzJxJy� J DivModzJxJy�m� J J CmpxJyJr 
Int64xJ  
 Uint64xJ   SetStringzJs base J   SetByteszJbuf2 J 
BytesxJ  2 BitLenxJ   ExpzJxJy�m� J GCDzJxJy�a�b� J binaryGCDzJaJb� J RandzJrnd�nJ J ModInversezJgJn� J "modSqrt3Mod4PrimezJxJp� J (modSqrtTonelliShankszJxJp� J ModSqrtzJxJp� J LshzJxJn J RshzJxJn J BitxJi  SetBitzJxJib J AndzJxJy� J AndNotzJxJy� J OrzJxJy� J XorzJxJy� J NotzJxJ J SqrtzJxJ J TextxJbase   AppendxJbuf2base 2 StringxJ    FormatxJs
Statefmtfmt Flag c   Precision  precok  
Width  widok  
Write b2nerr6  ch4  scanzJr�base J  6 ScanzJsScanState Read buf2nerr6 ReadRune  r4sizeerr6 SkipSpace    
Token skipSpace f  4   
token2err6 UnreadRune   6 
Width  widok   ch4 6 GobEncodexJ  2 6 GobDecodezJbuf2 6 MarshalTextxJ text2err6 UnmarshalTextzJtext2 6 MarshalJSONxJ  2 6 UnmarshalJSONzJtext2 6 ProbablyPrimexJn    QH GH   YJ   XJ  randReader Read p2nerr6   6 	$GenerateParameters paramsDrand�
sizesParameterSizes   6 L1024N160�! L2048N224�!L2048N256�!L3072N256�!�D<@	Sign rand�priv<hash2rJs�err6 	Verify pub@hash2rJs�   AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["io"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["math/big"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D��D=$pkg.Parameters=$newType(0,$kindStruct,"dsa.Parameters",true,"crypto/dsa",true,function(P_,Q_,G_){this.$val=this;if(arguments.length===0){this.P=N.nil;this.Q=N.nil;this.G=N.nil;return;}this.P=P_;this.Q=Q_;this.G=G_;});��D.init("",[{prop:"P",name:"P",exported:true,typ:N,tag:""},{prop:"Q",name:"Q",exported:true,typ:N,tag:""},{prop:"G",name:"G",exported:true,typ:N,tag:""}]);
Parameterscrypto/dsa.Ncrypto/dsa.Parameters E��E=$pkg.PublicKey=$newType(0,$kindStruct,"dsa.PublicKey",true,"crypto/dsa",true,function(Parameters_,Y_){this.$val=this;if(arguments.length===0){this.Parameters=new D.ptr(N.nil,N.nil,N.nil);this.Y=N.nil;return;}this.Parameters=Parameters_;this.Y=Y_;});sE.init("",[{prop:"Parameters",name:"",exported:true,typ:D,tag:""},{prop:"Y",name:"Y",exported:true,typ:N,tag:""}]);	PublicKeycrypto/dsa.Ncrypto/dsa.Parameterscrypto/dsa.PublicKey F�
F=$pkg.PrivateKey=$newType(0,$kindStruct,"dsa.PrivateKey",true,"crypto/dsa",true,function(PublicKey_,X_){this.$val=this;if(arguments.length===0){this.PublicKey=new E.ptr(new D.ptr(N.nil,N.nil,N.nil),N.nil);this.X=N.nil;return;}this.PublicKey=PublicKey_;this.X=X_;});rF.init("",[{prop:"PublicKey",name:"",exported:true,typ:E,tag:""},{prop:"X",name:"X",exported:true,typ:N,tag:""}]);
PrivateKeycrypto/dsa.Ncrypto/dsa.Parameterscrypto/dsa.PrivateKeycrypto/dsa.PublicKey G\G=$pkg.ParameterSizes=$newType(4,$kindInt,"dsa.ParameterSizes",true,"crypto/dsa",true,null);ParameterSizescrypto/dsa.ParameterSizes MM=$sliceType($Uint8);M NN=$ptrType(C.Int);Nmath/big.Int ErrInvalidPublicKey F    $pkg.ErrInvalidPublicKey=A.New("crypto/dsa: invalid public key");crypto/dsa.ErrInvalidPublicKey
errors.New crypto/dsa.GenerateParametersH�aH=function(a,b,c){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �d=0;e=0;f=d;g=e;    h=c;    if(h===(0)){  f=1024;  g=160;    }else if(h===(1)){  -f=2048;  8g=224;    }else if(h===(2)){  Sf=2048;  ^g=256;    }else if(h===(3)){  yf=3072;  �g=256;    }else{  �$s=-1;return A.New("crypto/dsa: invalid ParameterSizes");    }  �j=$makeSlice(M,(i=g/8,(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero")));  �l=$makeSlice(M,(k=f/8,(k===k&&k!==1/0&&k!==-1/0)?k>>0:$throwRuntimeError("integer divide by zero")));  	m=new C.Int.ptr(false,C.nat.nil);  	#n=new C.Int.ptr(false,C.nat.nil);  	6o=new C.Int.ptr(false,C.nat.nil);  	Kp=new C.Int.ptr(false,C.nat.nil);  	`p.SetInt64(new $Int64(0,1));  	�case 1:  	�r=B.ReadFull(b,j);$s=3;case 3:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;s=q[1];    if(!($interfaceIsEqual(s,$ifaceNil))){  	�$s=-1;return s;    }    t=j.$length-1>>0;  	�((t<0||t>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+t]=((((t<0||t>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+t])|(1))>>>0));  	�(0>=j.$length?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+0]=(((0>=j.$length?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+0])|(128))>>>0));  
m.SetBytes(j);  
u=m.ProbablyPrime(64);$s=6;case 6:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}if(!u){$s=4;continue;}$s=5;continue;    case 4:  
@$s=1;continue;    case 5:  
Tv=0;case 7:if(!(v<($imul(4,f)))){$s=8;continue;}  
qx=B.ReadFull(b,l);$s=9;case 9:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}w=x;y=w[1];    if(!($interfaceIsEqual(y,$ifaceNil))){  
�$s=-1;return y;    }    z=l.$length-1>>0;  
�((z<0||z>=l.$length)?($throwRuntimeError("index out of range"),undefined):l.$array[l.$offset+z]=((((z<0||z>=l.$length)?($throwRuntimeError("index out of range"),undefined):l.$array[l.$offset+z])|(1))>>>0));  
�(0>=l.$length?($throwRuntimeError("index out of range"),undefined):l.$array[l.$offset+0]=(((0>=l.$length?($throwRuntimeError("index out of range"),undefined):l.$array[l.$offset+0])|(128))>>>0));  
�n.SetBytes(l);  aa=o.Mod(n,m);$s=10;case 10:if($c){$c=false;aa=aa.$blk();}if(aa&&aa.$blk!==undefined){break s;}aa;  o.Sub(o,p);  +n.Sub(n,o);  <if(n.BitLen()<f){$s=11;continue;}$s=12;continue;    case 11:  
ev=v+(1)>>0;    $s=7;continue;    case 12:  fab=n.ProbablyPrime(64);$s=15;case 15:if($c){$c=false;ab=ab.$blk();}if(ab&&ab.$blk!==undefined){break s;}if(!ab){$s=13;continue;}$s=14;continue;    case 13:  
ev=v+(1)>>0;    $s=7;continue;    case 14:  �a.P=n;  �a.Q=m;  �$s=2;continue s;    $s=7;continue;case 8:    $s=1;continue;case 2:  �ac=new C.Int.ptr(false,C.nat.nil);  �ac.SetInt64(new $Int64(0,2));  �ad=new C.Int.ptr(false,C.nat.nil);  ae=new C.Int.ptr(false,C.nat.nil).Sub(n,p);  3af=new C.Int.ptr(false,C.nat.nil).Div(ae,m);$s=16;case 16:if($c){$c=false;af=af.$blk();}if(af&&af.$blk!==undefined){break s;}ag=af;  Scase 17:  [ah=ad.Exp(ac,ag,n);$s=19;case 19:if($c){$c=false;ah=ah.$blk();}if(ah&&ah.$blk!==undefined){break s;}ah;    if(ad.Cmp(p)===0){  �ac.Add(ac,p);  �$s=17;continue;    }  �a.G=ad;  �$s=-1;return $ifaceNil;    $s=17;continue;case 18:    $s=-1;return $ifaceNil;}return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};$pkg.GenerateParameters=H;GenerateParameterscrypto/dsa.GenerateParameterscrypto/dsa.M
errors.Newio.ReadFullmath/big.Intmath/big.nat crypto/dsa.GenerateKeyI�YI=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(a.PublicKey.Parameters.P===N.nil||a.PublicKey.Parameters.Q===N.nil||a.PublicKey.Parameters.G===N.nil){  �$s=-1;return A.New("crypto/dsa: parameters not set up before generating key");    }  c=new C.Int.ptr(false,C.nat.nil);  %e=$makeSlice(M,(d=a.PublicKey.Parameters.Q.BitLen()/8,(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero")));  Qcase 1:  Yg=B.ReadFull(b,e);$s=3;case 3:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  �$s=-1;return h;    }  �c.SetBytes(e);    if(!((c.Sign()===0))&&c.Cmp(a.PublicKey.Parameters.Q)<0){  �$s=2;continue;    }    $s=1;continue;case 2:  �a.X=c;  �a.PublicKey.Y=new C.Int.ptr(false,C.nat.nil);  i=a.PublicKey.Y.Exp(a.PublicKey.Parameters.G,c,a.PublicKey.Parameters.P);$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}i;  4$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:I};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};$pkg.GenerateKey=I;GenerateKeycrypto/dsa.GenerateKeycrypto/dsa.Mcrypto/dsa.N
errors.Newio.ReadFullmath/big.Intmath/big.nat crypto/dsa.fermatInverseJ�4J=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  xc=C.NewInt(new $Int64(0,2));  �d=new C.Int.ptr(false,C.nat.nil).Sub(b,c);  �e=new C.Int.ptr(false,C.nat.nil).Exp(a,d,b);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return e;    }return;}if($f===undefined){$f={$blk:J};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};fermatInversecrypto/dsa.fermatInversemath/big.Intmath/big.NewIntmath/big.nat crypto/dsa.SignK�	�K=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=N.nil;e=N.nil;f=$ifaceNil;  ng=b.PublicKey.Parameters.Q.BitLen();    if(b.PublicKey.Parameters.Q.Sign()<=0||b.PublicKey.Parameters.P.Sign()<=0||b.PublicKey.Parameters.G.Sign()<=0||b.X.Sign()<=0||!(((g&7)===0))){  �f=$pkg.ErrInvalidPublicKey;  $s=-1;return[d,e,f];    }  g=(g>>$min((3),31))>>0;  !h=0;  3h=10;case 1:if(!(h>0)){$s=2;continue;}  _i=new C.Int.ptr(false,C.nat.nil);  sj=$makeSlice(M,g);  �case 3:  �l=B.ReadFull(a,j);$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;f=k[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �$s=-1;return[d,e,f];    }  �i.SetBytes(j);    if(i.Sign()>0&&i.Cmp(b.PublicKey.Parameters.Q)<0){  �$s=4;continue;    }    $s=3;continue;case 4:  �m=J(i,b.PublicKey.Parameters.Q);$s=6;case 6:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;  �o=new C.Int.ptr(false,C.nat.nil).Exp(b.PublicKey.Parameters.G,i,b.PublicKey.Parameters.P);$s=7;case 7:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}d=o;   p=d.Mod(d,b.PublicKey.Parameters.Q);$s=8;case 8:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}p;  4if(d.Sign()===0){$s=9;continue;}$s=10;continue;    case 9:  Ph=h-(1)>>0;    $s=1;continue;    case 10:  Zq=i.SetBytes(c);  se=new C.Int.ptr(false,C.nat.nil).Mul(b.X,d);  �e.Add(e,q);  �r=e.Mod(e,b.PublicKey.Parameters.Q);$s=11;case 11:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}r;  �e.Mul(e,n);  �s=e.Mod(e,b.PublicKey.Parameters.Q);$s=12;case 12:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}s;    if(!((e.Sign()===0))){  �$s=2;continue;    }  Ph=h-(1)>>0;    $s=1;continue;case 2:    if(h===0){    t=N.nil;u=N.nil;v=$pkg.ErrInvalidPublicKey;d=t;e=u;f=v;$s=-1;return[d,e,f];    }  �$s=-1;return[d,e,f];    }return;}if($f===undefined){$f={$blk:K};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Sign=K;Signcrypto/dsa.ErrInvalidPublicKeycrypto/dsa.Mcrypto/dsa.Ncrypto/dsa.Signcrypto/dsa.fermatInverseio.ReadFullmath/big.Intmath/big.nat crypto/dsa.VerifyL�*L=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(a.Parameters.P.Sign()===0){  @$s=-1;return false;    }    if(c.Sign()<1||c.Cmp(a.Parameters.Q)>=0){  {$s=-1;return false;    }    if(d.Sign()<1||d.Cmp(a.Parameters.Q)>=0){  �$s=-1;return false;    }  �e=new C.Int.ptr(false,C.nat.nil).ModInverse(d,a.Parameters.Q);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;  �g=a.Parameters.Q.BitLen();    if(!(((g&7)===0))){  $s=-1;return false;    }  &h=new C.Int.ptr(false,C.nat.nil).SetBytes(b);  Ii=new C.Int.ptr(false,C.nat.nil).Mul(h,f);  gj=i.Mod(i,a.Parameters.Q);$s=2;case 2:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}j;  zk=f.Mul(c,f);  �l=k.Mod(k,a.Parameters.Q);$s=3;case 3:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}l;  �m=i.Exp(a.Parameters.G,i,a.Parameters.P);$s=4;case 4:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;  �o=k.Exp(a.Y,k,a.Parameters.P);$s=5;case 5:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}o;  �n.Mul(n,k);  �p=n.Mod(n,a.Parameters.P);$s=6;case 6:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}p;  �q=n.Mod(n,a.Parameters.Q);$s=7;case 7:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}q;  
$s=-1;return n.Cmp(c)===0;    }return;}if($f===undefined){$f={$blk:L};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Verify=L;Verifycrypto/dsa.Verifymath/big.Intmath/big.nat �`{"Base":6946,"Files":[{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\goroot\\src\\crypto\\dsa\\dsa.go","Base":1,"Size":6944,"Lines":[0,55,109,159,160,245,248,338,350,351,360,370,376,388,390,391,470,546,571,589,591,592,634,658,670,682,684,685,729,754,765,777,779,780,857,933,1012,1043,1114,1115,1194,1254,1278,1279,1287,1320,1331,1342,1353,1355,1356,1436,1505,1527,1528,1606,1669,1759,1830,1899,1964,2004,2005,2019,2035,2052,2063,2073,2090,2101,2111,2128,2139,2149,2166,2177,2187,2197,2255,2258,2259,2288,2317,2318,2337,2356,2377,2398,2415,2416,2432,2439,2494,2508,2512,2513,2542,2562,2583,2584,2620,2632,2636,2637,2666,2722,2737,2742,2743,2773,2794,2795,2817,2834,2855,2872,2895,2908,2913,2914,2951,2964,2969,2970,2986,3002,3026,3030,3033,3034,3053,3068,3087,3088,3121,3152,3153,3160,3177,3200,3217,3229,3233,3234,3249,3262,3265,3267,3268,3342,3404,3463,3517,3596,3599,3600,3619,3662,3663,3670,3708,3726,3740,3744,3765,3807,3816,3820,3823,3824,3836,3859,3890,3902,3904,3905,3982,4060,4131,4169,4214,4236,4273,4313,4315,4316,4396,4474,4553,4562,4565,4645,4720,4742,4745,4818,4857,4943,4971,4972,4994,5097,5125,5134,5137,5146,5147,5165,5212,5232,5257,5265,5300,5319,5330,5335,5354,5405,5442,5476,5521,5563,5573,5578,5582,5583,5618,5619,5661,5680,5681,5702,5714,5718,5719,5743,5744,5778,5792,5811,5828,5847,5848,5869,5878,5882,5885,5886,5955,5969,5989,6028,6031,6032,6040,6042,6043,6122,6165,6168,6248,6323,6345,6408,6436,6437,6461,6476,6479,6480,6520,6535,6538,6578,6593,6596,6597,6637,6638,6659,6674,6689,6692,6726,6727,6757,6776,6795,6814,6845,6871,6885,6902,6919,6920,6942],"Infos":null}]}
 
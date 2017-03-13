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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �N	��(github.com/gonum/mathext/internal/cephescephes'github.com/gonum/mathext/internal/gonummath��
$$ exports $$
pv0cephesPgithub.com/gonum/mathext/internal/cephes	Incbet aabbxx  	
Incbi aabbyy0  	
Ndtri y0  P0
P1P2Q0Q1Q2B7B=$packages["github.com/gonum/mathext/internal/gonum"];a    $r=B.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["math"];a    $r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} NN=$sliceType($Float64);N CbadParamOutOfBounds P0 Q0 P1 Q1 P2 Q2 )    C="cephes: parameter out of bounds";badParamOutOfBounds<github.com/gonum/mathext/internal/cephes.badParamOutOfBounds ��    $pkg.P0=$toNativeArray($kindFloat64,[-59.96335010141079,98.00107541859997,-56.67628574690703,13.931260938727968,-1.2391658386738125]);P0+github.com/gonum/mathext/internal/cephes.P0 ��    $pkg.Q0=$toNativeArray($kindFloat64,[1.9544885833814176,4.676279128988815,86.36024213908905,-225.46268785411937,200.26021238006066,-82.03722561683334,15.90562251262117,-1.1833162112133]);Q0+github.com/gonum/mathext/internal/cephes.Q0 ��    $pkg.P1=$toNativeArray($kindFloat64,[4.0554489230596245,31.525109459989388,57.16281922464213,44.08050738932008,14.684956192885803,2.1866330685079025,-0.1402560791713545,-0.03504246268278482,-0.0008574567851546854]);P1+github.com/gonum/mathext/internal/cephes.P1 ��    $pkg.Q1=$toNativeArray($kindFloat64,[15.779988325646675,45.39076351288792,41.3172038254672,15.04253856929075,2.504649462083094,-0.14218292285478779,-0.03808064076915783,-0.0009332594808954574]);Q1+github.com/gonum/mathext/internal/cephes.Q1 ��    $pkg.P2=$toNativeArray($kindFloat64,[3.2377489177694603,6.915228890689842,3.9388102529247444,1.3330346081580755,0.20148538954917908,0.012371663481782003,0.00030158155350823543,2.6580697468673755e-06,6.239745391849833e-09]);P2+github.com/gonum/mathext/internal/cephes.P2 ��    $pkg.Q2=$toNativeArray($kindFloat64,[6.02427039364742,3.6798356385616087,1.3770209948908132,0.21623699359449663,0.013420400608854318,0.00032801446468212774,2.8924786474538068e-06,6.790194080099813e-09]);Q2+github.com/gonum/mathext/internal/cephes.Q2 /github.com/gonum/mathext/internal/cephes.IncbetD�D=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;    if(a<=0||b<=0){  �$panic(new $String(C));    }    if(c<=0||c>=1){    if(c===0){  return 0;    }    if(c===1){  9return 1;    }  J$panic(new $String(C));    }  qd=0;    if(b*c<=1&&c<=0.95){  �e=H(a,b,c);  �return E(e,d);    }  �f=1-c;  $g=0;h=0;i=0;j=0;k=g;l=h;m=i;n=j;    if(c>a/(a+b)){  Rd=1;  ^k=b;  hl=a;  rm=c;  }n=f;    }else{  �k=a;  �l=b;  �m=f;  �n=c;    }    if((d===1)&&(l*n)<=1&&n<=0.95){  �o=H(k,l,n);  return E(o,d);    }  Wp=n*(k+l-2)-(k-1);    if(p<0){  �f=F(k,l,n);    }else{  �f=G(k,l,n)/m;    }  	q=0;  	%p=k*A.Log(n);  	;q=l*A.Log(m);    if((k+l)<171.6243769563027&&A.Abs(p)<709.782712893384&&A.Abs(q)<709.782712893384){  	�q=A.Pow(m,l);  	�q=q*(A.Pow(n,k));  	�q=q/(k);  	�q=q*(f);  	�q=q*(1/B.Beta(k,l));  	�return E(q,d);    }  
8p=p+(q-B.Lbeta(k,l));  
Up=p+(A.Log(f/k));    if(p<-745.1332191019412){  
q=0;    }else{  
�q=A.Exp(p);    }  
�return E(q,d);    };$pkg.Incbet=D;Incbet/github.com/gonum/mathext/internal/cephes.Incbet<github.com/gonum/mathext/internal/cephes.badParamOutOfBounds/github.com/gonum/mathext/internal/cephes.incbcf.github.com/gonum/mathext/internal/cephes.incbd0github.com/gonum/mathext/internal/cephes.pseries3github.com/gonum/mathext/internal/cephes.transformT,github.com/gonum/mathext/internal/gonum.Beta-github.com/gonum/mathext/internal/gonum.Lbetamath.Absmath.Expmath.Logmath.Pow 3github.com/gonum/mathext/internal/cephes.transformTE��E=function(a,b){var $ptr,a,b;    if(b===1){    if(a<=1.1102230246251565e-16){  &a=0.9999999999999999;    }else{  Ga=1-a;    }    }  ^return a;    };
transformT3github.com/gonum/mathext/internal/cephes.transformT /github.com/gonum/mathext/internal/cephes.incbcfF��F=function(a,b,c){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  �d=0;e=0;f=0;g=0;h=0;i=0;j=0;k=d;l=e;m=f;n=g;o=h;p=i;q=j;  ,r=0;s=0;t=0;u=0;v=0;w=0;x=0;y=0;z=r;aa=s;ab=t;ac=u;ad=v;ae=w;af=x;ag=y;  Yah=0;ai=0;aj=0;ak=0;al=ah;am=ai;an=aj;ao=ak;  yap=0;  �z=a;  �aa=a+b;  �ab=a;  �ac=a+1;  �ad=1;  �ae=b-1;  �af=ac;  �ag=a+2;  �n=0;  �q=1;   m=1;  p=1;  an=1;  &al=1;  0ao=3.3306690738754696e-16;  Nap=0;while(true){if(!(ap<=300)){break;}  jk=-(c*z*aa)/(ab*ac);  �l=m+n*k;  �o=p+q*k;  �n=m;  �m=l;  �q=p;  �p=o;  �k=(c*ad*ae)/(af*ag);  l=m+n*k;  .o=p+q*k;  En=m;  Tm=l;  aq=p;  pp=o;    if(!((o===0))){  �al=l/o;    }    if(!((al===0))){  �am=A.Abs((an-al)/al);  �an=al;    }else{  �am=1;    }    if(am<ao){  return an;    }  'z=z+(1);  4aa=aa+(1);  Aab=ab+(2);  Nac=ac+(2);  [ad=ad+(1);  hae=ae-(1);  uaf=af+(2);  �ag=ag+(2);    if((A.Abs(o)+A.Abs(l))>4.503599627370496e+15){  �n=n*(2.220446049250313e-16);  �m=m*(2.220446049250313e-16);  �q=q*(2.220446049250313e-16);  �p=p*(2.220446049250313e-16);    }    if((A.Abs(o)<2.220446049250313e-16)||(A.Abs(l)<2.220446049250313e-16)){  Jn=n*(4.503599627370496e+15);  Zm=m*(4.503599627370496e+15);  jq=q*(4.503599627370496e+15);  zp=p*(4.503599627370496e+15);    }  _ap=ap+(1)>>0;    }  �return an;    };incbcf/github.com/gonum/mathext/internal/cephes.incbcfmath.Abs .github.com/gonum/mathext/internal/cephes.incbdG��G=function(a,b,c){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  0d=0;e=0;f=0;g=0;h=0;i=0;j=0;k=d;l=e;m=f;n=g;o=h;p=i;q=j;  ar=0;s=0;t=0;u=0;v=0;w=0;x=0;y=0;z=r;aa=s;ab=t;ac=u;ad=v;ae=w;af=x;ag=y;  �ah=0;ai=0;aj=0;ak=0;al=0;am=ah;an=ai;ao=aj;ap=ak;aq=al;  �ar=0;  �z=a;  �aa=b-1;  �ab=a;  �ac=a+1;  �ad=1;  �ae=a+b;  af=a+1;  ag=a+2;  #n=0;  0q=1;  =m=1;  Jp=1;  Wap=c/(1-c);  kao=1;  wam=1;  �aq=3.3306690738754696e-16;  �ar=0;while(true){if(!(ar<=300)){break;}  �k=-(ap*z*aa)/(ab*ac);  �l=m+n*k;  �o=p+q*k;  
n=m;  m=l;  &q=p;  5p=o;  Dk=(ap*ad*ae)/(af*ag);  fl=m+n*k;  }o=p+q*k;  �n=m;  �m=l;  �q=p;  �p=o;    if(!((o===0))){  �am=l/o;    }    if(!((am===0))){  an=A.Abs((ao-am)/am);  #ao=am;    }else{  ;an=1;    }    if(an<aq){  areturn ao;    }  vz=z+(1);  �aa=aa-(1);  �ab=ab+(2);  �ac=ac+(2);  �ad=ad+(1);  �ae=ae+(1);  �af=af+(2);  �ag=ag+(2);    if((A.Abs(o)+A.Abs(l))>4.503599627370496e+15){  n=n*(2.220446049250313e-16);   m=m*(2.220446049250313e-16);  3q=q*(2.220446049250313e-16);  Fp=p*(2.220446049250313e-16);    }    if((A.Abs(o)<2.220446049250313e-16)||(A.Abs(l)<2.220446049250313e-16)){  �n=n*(4.503599627370496e+15);  �m=m*(4.503599627370496e+15);  �q=q*(4.503599627370496e+15);  �p=p*(4.503599627370496e+15);    }  �ar=ar+(1)>>0;    }  �return ao;    };incbd.github.com/gonum/mathext/internal/cephes.incbdmath.Abs 0github.com/gonum/mathext/internal/cephes.pseriesH��H=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  �d=0;e=0;f=0;g=0;h=0;i=0;j=0;k=0;l=d;m=e;n=f;o=g;p=h;q=i;r=j;s=k;  �s=1/a;  �n=(1-b)*c;  �o=n/(a+1);  �q=o;  m=n;  p=2;  l=0;   r=1.1102230246251565e-16*s;  2while(true){if(!(A.Abs(o)>r)){break;}  Kn=(p-b)*c/p;  bm=m*(n);  lo=m/(a+p);  l=l+(o);  �p=p+(1);    }  �l=l+(q);  �l=l+(s);  �n=a*A.Log(c);    if((a+b)<171.6243769563027&&A.Abs(n)<709.782712893384){  �m=1/B.Beta(a,b);  l=l*m*A.Pow(c,a);    }else{  :m=-B.Lbeta(a,b)+n+A.Log(l);    if(m<-745.1332191019412){  zl=0;    }else{  �l=A.Exp(m);    }    }  �return l;    };pseries0github.com/gonum/mathext/internal/cephes.pseries,github.com/gonum/mathext/internal/gonum.Beta-github.com/gonum/mathext/internal/gonum.Lbetamath.Absmath.Expmath.Logmath.Pow .github.com/gonum/mathext/internal/cephes.IncbiI��I=function(a,b,c){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s;$s=0;s:while(true){switch($s){case 0:  pd=0;e=0;f=0;g=0;h=0;i=0;j=0;k=0;l=0;m=0;n=0;o=0;p=0;q=0;r=0;s=d;t=e;u=f;v=g;w=h;x=i;y=j;z=k;aa=l;ab=m;ac=n;ad=o;ae=p;af=q;ag=r;  �ah=0;ai=0;aj=0;ak=0;al=ah;am=ai;an=aj;ao=ak;  �al=0;    if(c<=0){  �$s=-1;return 0;    }    if(c>=1){  $s=-1;return 1;    }  (y=0;  3ae=0;  >z=1;  Iaf=1;  Tao=0;  aif(a<=1||b<=1){$s=1;continue;}$s=2;continue;    case 1:  �ad=1e-06;  �am=0;  �s=a;  �t=b;  �u=c;  �x=s/(s+t);  �w=D(s,t,x);  �$s=4;continue;    $s=3;continue;case 2:  ad=0.0001;    case 3:  Dab=-K(c);    if(c>0.5){  kam=1;  ws=b;  �t=a;  �u=1-c;  �ab=-ab;    }else{  �am=0;  �s=a;  �t=b;  �u=c;    }  �aa=(ab*ab-3)/6;  x=2/(1/(2*s-1)+1/(2*t-1));  1v=ab*A.Sqrt(x+aa)/x-(1/(2*t-1)-1/(2*s-1))*(aa+0.8333333333333334-2/(3*x));  �v=2*v;  �if(v<-745.1332191019412){$s=5;continue;}$s=6;continue;    case 5:  �x=0;  �$s=7;continue;    case 6:  �x=s/(s+t*A.Exp(v));  w=D(s,t,x);  ab=(w-u)/u;  /if(A.Abs(ab)<0.2){$s=8;continue;}$s=9;continue;    case 8:  J$s=10;continue;    case 9:  �case 4:  �an=0;  �ac=0.5;  �al=0;case 11:if(!(al<100)){$s=12;continue;}  �if(!((al===0))){$s=13;continue;}$s=14;continue;    case 13:  �x=y+ac*(z-y);    if(x===1){  x=0.9999999999999999;    }  'if(x===0){$s=15;continue;}$s=16;continue;    case 15:  :ac=0.5;  Hx=y+ac*(z-y);  aif(x===0){$s=17;continue;}$s=18;continue;    case 17:  �$s=7;continue;    case 18:    case 16:  �w=D(s,t,x);  �ab=(z-y)/(z+y);  �if(A.Abs(ab)<ad){$s=19;continue;}$s=20;continue;    case 19:   $s=10;continue;    case 20:   !ab=(w-u)/u;   8if(A.Abs(ab)<ad){$s=21;continue;}$s=22;continue;    case 21:   Z$s=10;continue;    case 22:    case 14:   rif(w<u){$s=23;continue;}$s=24;continue;    case 23:   �y=x;   �ae=w;    if(an<0){   �an=0;   �ac=0.5;    }else if(an>3){   �ac=1-(1-ac)*(1-ac);    }else if(an>1){  !ac=0.5*ac+0.5;    }else{  !;ac=(u-w)/(af-ae);    }  !_an=an+(1)>>0;  !lif(y>0.75){$s=26;continue;}$s=27;continue;    case 26:    if(am===1){  !�am=0;  !�s=a;  !�t=b;  !�u=c;    }else{  !�am=1;  !�s=b;  !�t=a;  "u=1-c;    }  "x=1-x;  "0w=D(s,t,x);  "Iy=0;  "Wae=0;  "ez=1;  "saf=1;  "�$s=4;continue;    case 27:    $s=25;continue;case 24:  "�z=x;  "�if((am===1)&&z<1.1102230246251565e-16){$s=28;continue;}$s=29;continue;    case 28:  "�x=0;  "�$s=7;continue;    case 29:  "�af=w;    if(an>0){  #an=0;  #ac=0.5;    }else if(an<-3){  #Cac=ac*ac;    }else if(an<-1){  #nac=0.5*ac;    }else{  #�ac=(w-u)/(af-ae);    }  #�an=an-(1)>>0;    case 25:  �al=al+(1)>>0;    $s=11;continue;case 12:  #�if(y>=1){$s=30;continue;}$s=31;continue;    case 30:  #�x=0.9999999999999999;  $$s=7;continue;    case 31:  $if(x<=0){$s=32;continue;}$s=33;continue;    case 32:  $Jx=0;  $U$s=7;continue;    case 33:  $fcase 10:  $nif(ao>0){$s=34;continue;}$s=35;continue;    case 34:  $$s=7;continue;    case 35:  $�ao=1;  $�aa=J(s+t)-J(s)-J(t);  $�al=0;case 36:if(!(al<8)){$s=37;continue;}    if(!((al===0))){  %w=D(s,t,x);    }    if(w<ae){  %Fx=y;  %Qw=ae;    }else if(w>af){  %rx=z;  %}w=af;    }else if(w<u){  %�y=x;  %�ae=w;    }else{  %�z=x;  %�af=w;    }    if((x===1)||(x===0)){  %�$s=37;continue;    }  &Ev=(s-1)*A.Log(x)+(t-1)*A.Log(1-x)+aa;  &�if(v<-745.1332191019412){$s=38;continue;}$s=39;continue;    case 38:  &�$s=7;continue;    case 39:    if(v>709.782712893384){  &�$s=37;continue;    }  &�v=A.Exp(v);  'v=(w-u)/v;  ')ag=x-v;    if(ag<=y){  'Iw=(x-y)/(z-y);  'fag=y+0.5*w*(x-y);    if(ag<=0){  '�$s=37;continue;    }    }    if(ag>=z){  '�w=(z-x)/(z-y);  '�ag=z-0.5*w*(z-x);    if(ag>=1){  ($s=37;continue;    }    }  (x=ag;  (%if(A.Abs(v/x)<1.4210854715202004e-14){$s=40;continue;}$s=41;continue;    case 40:  (K$s=7;continue;    case 41:  $�al=al+(1)>>0;    $s=36;continue;case 37:  ({ad=2.842170943040401e-14;  (�$s=4;continue;  (�case 7:    if(am>0){    if(x<=1.1102230246251565e-16){  (�x=0.9999999999999999;    }else{  (�x=1-x;    }    }  )$s=-1;return x;    }return;}};$pkg.Incbi=I;Incbi/github.com/gonum/mathext/internal/cephes.Incbet.github.com/gonum/mathext/internal/cephes.Incbi.github.com/gonum/mathext/internal/cephes.Ndtri-github.com/gonum/mathext/internal/cephes.lgammath.Absmath.Expmath.Log	math.Sqrt -github.com/gonum/mathext/internal/cephes.lgamJLJ=function(a){var $ptr,a,b,c;  )@b=A.Lgamma(a);c=b[0];  )Zreturn c;    };lgam-github.com/gonum/mathext/internal/cephes.lgammath.Lgamma .github.com/gonum/mathext/internal/cephes.NdtriK� K=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n;  5�b=0;c=0;d=0;e=0;f=0;g=0;h=b;i=c;j=d;k=e;l=f;m=g;  6n=0;    if(a<=0){    if(a<0){  6J$panic(new $String(C));    }  6mreturn A.Inf(-1);    }    if(a>=1){    if(a>1){  6�$panic(new $String(C));    }  6�return A.Inf(1);    }  6�n=1;  6�i=a;    if(i>0.8646647167633873){  7=i=1-i;  7Ln=0;    }    if(i>0.1353352832366127){  7�i=i-0.5;  7�k=i*i;  7�h=i+i*(k*L(k,new N($pkg.P0),4)/M(k,new N($pkg.Q0),8));  7�h=h*2.5066282746310007;  7�return h;    }  7�h=A.Sqrt(-2*A.Log(i));  8l=h-A.Log(h)/h;  8:j=1/h;    if(h<8){  8~m=j*L(j,new N($pkg.P1),8)/M(j,new N($pkg.Q1),8);    }else{  8�m=j*L(j,new N($pkg.P2),8)/M(j,new N($pkg.Q2),8);    }  8�h=l-m;    if(!((n===0))){  9h=-h;    }  9#return h;    };$pkg.Ndtri=K;Ndtri*github.com/gonum/mathext/internal/cephes.N.github.com/gonum/mathext/internal/cephes.Ndtri+github.com/gonum/mathext/internal/cephes.P0+github.com/gonum/mathext/internal/cephes.P1+github.com/gonum/mathext/internal/cephes.P2+github.com/gonum/mathext/internal/cephes.Q0+github.com/gonum/mathext/internal/cephes.Q1+github.com/gonum/mathext/internal/cephes.Q2<github.com/gonum/mathext/internal/cephes.badParamOutOfBounds.github.com/gonum/mathext/internal/cephes.p1evl/github.com/gonum/mathext/internal/cephes.polevlmath.Infmath.Log	math.Sqrt /github.com/gonum/mathext/internal/cephes.polevlL�EL=function(a,b,c){var $ptr,a,b,c,d,e;  ;�d=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0]);  ;�e=1;while(true){if(!(e<=c)){break;}  ;�d=d*a+((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]);  ;�e=e+(1)>>0;    }  ;�return d;    };polevl/github.com/gonum/mathext/internal/cephes.polevl .github.com/gonum/mathext/internal/cephes.p1evlM�NM=function(a,b,c){var $ptr,a,b,c,d,e;  <�d=a+(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0]);  <�e=1;while(true){if(!(e<=(c-1>>0))){break;}  <�d=d*a+((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]);  <�e=e+(1)>>0;    }  <�return d;    };p1evl.github.com/gonum/mathext/internal/cephes.p1evl �J{"Base":15594,"Files":[{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\internal\\cephes\\cephes.go","Base":1,"Size":866,"Lines":[0,61,116,167,169,257,273,275,279,314,316,406,491,565,626,630,632,639,697,700,702,711,758,810,863],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\internal\\cephes\\incbeta.go","Base":868,"Size":5464,"Lines":[0,61,116,167,169,173,224,271,276,278,294,296,306,315,317,361,364,366,375,406,438,476,479,481,543,586,612,642,646,672,688,701,706,722,735,740,770,774,776,791,823,851,881,885,887,901,903,955,981,1004,1016,1026,1036,1047,1056,1067,1077,1087,1097,1107,1111,1113,1159,1184,1214,1218,1220,1266,1297,1312,1335,1346,1373,1377,1379,1409,1456,1472,1494,1517,1587,1610,1633,1643,1653,1684,1714,1718,1720,1747,1776,1799,1817,1828,1839,1858,1862,1864,1893,1896,1898,1946,1963,1983,2004,2016,2032,2037,2041,2052,2055,2057,2139,2154,2194,2243,2288,2320,2332,2334,2343,2356,2365,2380,2391,2406,2416,2431,2433,2446,2459,2472,2485,2497,2507,2531,2533,2562,2564,2599,2622,2645,2660,2673,2688,2701,2703,2737,2760,2783,2798,2811,2826,2839,2841,2857,2873,2878,2893,2925,2937,2949,2961,2966,2968,2987,3002,3007,3009,3022,3035,3048,3061,3074,3087,3100,3113,3115,3159,3178,3197,3216,3235,3240,3299,3315,3331,3347,3363,3368,3372,3374,3387,3390,3392,3473,3488,3527,3576,3621,3656,3668,3670,3679,3694,3703,3718,3729,3742,3757,3772,3774,3787,3800,3813,3826,3846,3858,3868,3892,3921,3923,3958,3981,4004,4019,4032,4047,4060,4062,4096,4119,4142,4157,4170,4185,4198,4200,4216,4232,4237,4252,4284,4296,4308,4320,4325,4327,4346,4361,4366,4368,4381,4394,4407,4420,4433,4446,4459,4472,4474,4518,4537,4556,4575,4594,4599,4658,4674,4690,4706,4722,4727,4731,4744,4747,4749,4831,4879,4920,4959,4974,4994,5014,5023,5031,5041,5051,5069,5093,5116,5126,5145,5155,5167,5171,5181,5191,5193,5215,5261,5291,5321,5332,5376,5395,5407,5419,5439,5444,5448,5461],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\internal\\cephes\\incbi.go","Base":6333,"Size":4267,"Lines":[0,61,116,167,169,173,222,269,274,276,292,294,309,311,387,430,505,534,536,544,560,576,580,598,614,618,629,640,651,662,673,675,705,726,738,748,758,770,789,812,827,838,859,863,902,921,923,940,952,962,972,990,1002,1013,1025,1035,1045,1057,1061,1063,1091,1139,1229,1243,1261,1294,1303,1316,1320,1350,1372,1393,1419,1432,1436,1438,1494,1503,1505,1515,1526,1554,1569,1593,1611,1633,1639,1657,1671,1696,1715,1751,1767,1774,1780,1804,1835,1868,1883,1889,1912,1945,1960,1966,1971,1986,1997,2008,2025,2038,2052,2076,2110,2134,2157,2170,2201,2207,2220,2239,2259,2274,2287,2300,2315,2329,2344,2357,2370,2391,2398,2415,2440,2454,2468,2482,2496,2513,2519,2531,2542,2576,2589,2604,2610,2621,2638,2651,2665,2690,2708,2733,2752,2765,2796,2802,2815,2820,2824,2852,2869,2889,2902,2906,2922,2955,2966,2979,2983,2985,2992,3008,3021,3025,3036,3074,3076,3102,3147,3162,3186,3191,3206,3217,3228,3250,3261,3272,3294,3305,3316,3328,3339,3350,3355,3384,3394,3399,3462,3521,3540,3554,3559,3578,3588,3593,3612,3670,3690,3704,3721,3750,3777,3796,3807,3813,3818,3835,3864,3891,3910,3921,3927,3932,3942,3979,3993,3998,4002,4029,4057,4071,4073,4080,4082,4098,4118,4139,4151,4167,4172,4176,4189,4192,4194,4226,4252,4264],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\internal\\cephes\\ndtri.go","Base":10601,"Size":4041,"Lines":[0,61,116,167,169,173,225,278,339,344,346,362,364,379,381,459,538,605,639,641,661,700,702,746,768,797,825,854,882,911,914,916,938,972,1000,1028,1056,1085,1113,1142,1170,1199,1202,1204,1276,1336,1358,1386,1414,1442,1470,1498,1526,1556,1586,1616,1619,1621,1643,1678,1706,1734,1762,1790,1818,1848,1878,1908,1911,1913,1986,2054,2076,2104,2132,2160,2188,2217,2246,2275,2304,2333,2336,2338,2360,2395,2423,2451,2479,2508,2537,2566,2595,2624,2627,2629,2693,2752,2792,2826,2889,2958,3011,3079,3142,3211,3245,3260,3262,3279,3294,3325,3330,3353,3357,3374,3389,3420,3425,3447,3451,3462,3471,3538,3553,3565,3569,3571,3605,3620,3634,3693,3709,3723,3727,3729,3765,3790,3792,3806,3859,3912,3923,3976,3980,3994,4011,4021,4025,4038],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\internal\\cephes\\polevl.go","Base":14643,"Size":950,"Lines":[0,61,116,167,169,173,226,279,340,345,347,363,365,411,450,529,548,605,622,650,675,679,692,695,697,780,798,854,875,905,930,934,947],"Infos":null}]}
 
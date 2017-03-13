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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �"#��github.com/gonum/mathextmathext&github.com/gonum/mathext/internal/amos(github.com/gonum/mathext/internal/cephes'github.com/gonum/mathext/internal/gonummath�
$$ exports $$
pv0mathext0github.com/gonum/mathext	AiryAi z  	AiryAiDeriv z  	Beta ab  	Digamma x  	InvRegIncBeta aby  	
Lbeta ab  	MvLgamma vdim  	NormalQuantile p  	RegIncBeta abx  A6A=$packages["github.com/gonum/mathext/internal/amos"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} C8C=$packages["github.com/gonum/mathext/internal/cephes"];a    $r=C.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} B7B=$packages["github.com/gonum/mathext/internal/gonum"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["math"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} MzQSA NzQSB OzQIA PzQIB QzQTA RzQTB ��    M=$toNativeArray($kindFloat64,[2509.0809287301227,33430.57558358813,67265.7709270087,45921.95393154987,13731.69376550946,1971.5909503065513,133.14166789178438,3.3871328727963665]);zQSAgithub.com/gonum/mathext.zQSA ��    N=$toNativeArray($kindFloat64,[5226.495278852854,28729.085735721943,39307.89580009271,21213.794301586597,5394.196021424751,687.1870074920579,42.31333070160091,1]);zQSBgithub.com/gonum/mathext.zQSB ��    O=$toNativeArray($kindFloat64,[0.0007745450142783414,0.022723844989269184,0.2417807251774506,1.2704582524523684,3.6478483247632045,5.769497221460691,4.630337846156546,1.4234371107496835]);zQIAgithub.com/gonum/mathext.zQIA ��    P=$toNativeArray($kindFloat64,[1.0507500716444169e-09,0.0005475938084995345,0.015198666563616457,0.14810397642748008,0.6897673349851,1.6763848301838038,2.053191626637759,1]);zQIBgithub.com/gonum/mathext.zQIB ��    Q=$toNativeArray($kindFloat64,[2.0103343992922881e-07,2.7115555687434876e-05,0.0012426609473880784,0.026532189526576124,0.29656057182850487,1.7848265399172913,5.463784911164114,6.657904643501103]);zQTAgithub.com/gonum/mathext.zQTA ��    R=$toNativeArray($kindFloat64,[2.0442631033899397e-15,1.421511758316446e-07,1.8463183175100548e-05,0.0007868691311456133,0.014875361290850615,0.1369298809227358,0.599832206555888,1]);zQTBgithub.com/gonum/mathext.zQTB github.com/gonum/mathext.AiryAiE��E=function(a){var $ptr,a,b,c,d,e,f;  �b=0;  �c=1;   d=A.Zairy(a.$real,a.$imag,b,c);e=d[0];f=d[1];  8return new $Complex128(e,f);    };$pkg.AiryAi=E;AiryAigithub.com/gonum/mathext.AiryAi,github.com/gonum/mathext/internal/amos.Zairy $github.com/gonum/mathext.AiryAiDerivF��F=function(a){var $ptr,a,b,c,d,e,f;  mb=1;  wc=1;  �d=A.Zairy(a.$real,a.$imag,b,c);e=d[0];f=d[1];  �return new $Complex128(e,f);    };$pkg.AiryAiDeriv=F;AiryAiDeriv$github.com/gonum/mathext.AiryAiDeriv,github.com/gonum/mathext/internal/amos.Zairy github.com/gonum/mathext.BetaGHG=function(a,b){var $ptr,a,b;  �return B.Beta(a,b);    };$pkg.Beta=G;Betagithub.com/gonum/mathext.Beta,github.com/gonum/mathext/internal/gonum.Beta github.com/gonum/mathext.LbetaHJH=function(a,b){var $ptr,a,b;  
Yreturn B.Lbeta(a,b);    };$pkg.Lbeta=H;Lbetagithub.com/gonum/mathext.Lbeta-github.com/gonum/mathext/internal/gonum.Lbeta #github.com/gonum/mathext.RegIncBetaIVI=function(a,b,c){var $ptr,a,b,c;  return C.Incbet(a,b,c);    };$pkg.RegIncBeta=I;
RegIncBeta#github.com/gonum/mathext.RegIncBeta/github.com/gonum/mathext/internal/cephes.Incbet &github.com/gonum/mathext.InvRegIncBetaJ��J=function(a,b,c){var $ptr,a,b,c;    if(c<0||c>1){  �$panic(new $String("mathext: parameter out of range"));    }  �return C.Incbi(a,b,c);    };$pkg.InvRegIncBeta=J;InvRegIncBeta&github.com/gonum/mathext.InvRegIncBeta.github.com/gonum/mathext/internal/cephes.Incbi  github.com/gonum/mathext.DigammaK�8K=function(a){var $ptr,a,b,c,d,e;  b=0;  while(true){if(!(a<7)){break;}  1b=b-(1/a);  (a=a+(1);    }  Ga=a-(0.5);  Xc=1/a;  hd=c*c;  ye=d*d;  �b=b+(D.Log(a)+0.041666666666666664*d-0.007291666666666667*e+0.0038442460317460315*e*d-0.004134114583333333*e*e);  �return b;    };$pkg.Digamma=K;Digamma github.com/gonum/mathext.Digammamath.Log 'github.com/gonum/mathext.NormalQuantileL�L=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;    if(a<0||1<a){  �$panic(new $String("mathext: quantile out of bounds"));    }else if((a===1)){  �return D.Inf(1);    }else if((a===0)){  	return D.Inf(-1);    }  bb=a-0.5;    if(D.Abs(b)<=0.425){  �c=0.180625-b*b;  �d=((((((M[0]*c+M[1])*c+M[2])*c+M[3])*c+M[4])*c+M[5])*c+M[6])*c+M[7];  e=((((((N[0]*c+N[1])*c+N[2])*c+N[3])*c+N[4])*c+N[5])*c+N[6])*c+N[7];  sreturn b*d/e;    }    if(a<0.5){  �f=D.Sqrt(-D.Log(a));    if(f<=5){  �g=f-1.6;  �h=((((((O[0]*g+O[1])*g+O[2])*g+O[3])*g+O[4])*g+O[5])*g+O[6])*g+O[7];  Hi=((((((P[0]*g+P[1])*g+P[2])*g+P[3])*g+P[4])*g+P[5])*g+P[6])*g+P[7];  �return-h/i;    }  �j=f-5;  �k=((((((Q[0]*j+Q[1])*j+Q[2])*j+Q[3])*j+Q[4])*j+Q[5])*j+Q[6])*j+Q[7];  9l=((((((R[0]*j+R[1])*j+R[2])*j+R[3])*j+R[4])*j+R[5])*j+R[6])*j+R[7];  �return-k/l;    }  �m=D.Sqrt(-D.Log(1-a));    if(m<=5){  �n=m-1.6;  �o=((((((O[0]*n+O[1])*n+O[2])*n+O[3])*n+O[4])*n+O[5])*n+O[6])*n+O[7];  ]p=((((((P[0]*n+P[1])*n+P[2])*n+P[3])*n+P[4])*n+P[5])*n+P[6])*n+P[7];  �return o/p;    }  �q=m-5;  �r=((((((Q[0]*q+Q[1])*q+Q[2])*q+Q[3])*q+Q[4])*q+Q[5])*q+Q[6])*q+Q[7];  Js=((((((R[0]*q+R[1])*q+R[2])*q+R[3])*q+R[4])*q+R[5])*q+R[6])*q+R[7];  �return r/s;    };$pkg.NormalQuantile=L;NormalQuantile'github.com/gonum/mathext.NormalQuantilegithub.com/gonum/mathext.zQIAgithub.com/gonum/mathext.zQIBgithub.com/gonum/mathext.zQSAgithub.com/gonum/mathext.zQSBgithub.com/gonum/mathext.zQTAgithub.com/gonum/mathext.zQTBmath.Absmath.Infmath.Log	math.Sqrt !github.com/gonum/mathext.MvLgammaS�hS=function(a,b){var $ptr,a,b,c,d,e,f,g;    if(b<1){  &�$panic(new $String("mathext: negative dimension"));    }  ')c=b;    if(a<(c-1)*0.5){  'Ureturn D.NaN();    }  'md=c*(c-1)*0.25*1.1447298858494002;  '�e=1;while(true){if(!(e<=b)){break;}  '�f=D.Lgamma(a+(1-e>>0)*0.5);g=f[0];  '�d=d+(g);  '�e=e+(1)>>0;    }  '�return d;    };$pkg.MvLgamma=S;MvLgamma!github.com/gonum/mathext.MvLgammamath.Lgammamath.NaN ��{"Base":10240,"Files":[{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\airy.go","Base":1,"Size":1495,"Lines":[0,61,116,167,169,186,188,237,239,319,382,402,489,529,587,644,701,744,754,766,822,849,852,854,937,1020,1040,1127,1172,1230,1287,1344,1387,1397,1409,1465,1492],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\beta.go","Base":1497,"Size":1181,"Lines":[0,61,116,167,169,186,188,238,240,323,349,372,413,454,495,536,578,582,669,704,730,733,735,813,838,866,889,934,979,1024,1069,1115,1151,1178],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\betainc.go","Base":2679,"Size":1141,"Lines":[0,61,116,167,169,186,188,239,241,318,349,383,459,549,608,660,692,695,697,781,812,830,910,982,1037,1059,1103,1107,1138],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\digamma.go","Base":3821,"Size":796,"Lines":[0,61,116,167,169,186,188,198,207,210,212,287,318,396,414,449,475,534,555,578,597,601,618,634,651,670,777,793],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\erf.go","Base":4618,"Size":4755,"Lines":[0,61,116,167,169,186,188,203,205,209,270,338,410,416,482,545,604,676,739,754,810,880,938,1007,1074,1145,1215,1286,1352,1423,1494,1563,1634,1704,1708,1710,1790,1873,1915,1926,1949,1993,2008,2030,2045,2068,2072,2133,2135,2151,2180,2205,2306,2407,2430,2434,2436,2451,2483,2500,2517,2619,2721,2741,2746,2760,2861,2962,2981,2985,3020,3036,3052,3153,3254,3272,3276,3278,3291,3391,3491,3508,3511,3513,3520,3725,3910,4126,4326,4546,4752],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gonum\\mathext\\mvgamma.go","Base":9374,"Size":865,"Lines":[0,61,116,167,169,186,188,203,205,214,298,301,303,372,450,454,529,546,591,606,646,650,671,693,714,718,756,786,832,845,849,862],"Infos":null}]}
 
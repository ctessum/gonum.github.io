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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �6���!github.com/gonum/internal/asm/f64f64math��
$$ exports $$
pv0f64Bgithub.com/gonum/internal/asm/f64(	Add dsts:  	AddConst 
alphax  	AxpyInc 
alphaxyBnincXincYixiy  	AxpyIncTo dstincDstidst
alphaxyHnincXincYixiy  	AxpyUnitary 
alphaxyL  	AxpyUnitaryTo dst
alphaxyR  	CumProd dstsV  	CumSum dsts\  	Div dstsb  	
DivTo dstsftf  	DotInc xylnincXincYixiysum 	DotUnitary xypsum 	L1Dist stt  	L1Norm xsum 	L1NormInc xnincXsum 	LinfDist st�  	ScalInc 
alphaxnincX  	ScalIncTo dstincDst
alphaxnincX  	ScalUnitary 
alphax  	ScalUnitaryTo dst
alphax  AA=$packages["math"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} -github.com/gonum/internal/asm/f64.AxpyUnitaryB��B=function(a,b,c){var $ptr,a,b,c,d,e,f,g;  ]d=b;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  v((f<0||f>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+f]=((f<0||f>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+f])+(a*g));    e++;}    };$pkg.AxpyUnitary=B;AxpyUnitary-github.com/gonum/internal/asm/f64.AxpyUnitary /github.com/gonum/internal/asm/f64.AxpyUnitaryToC��C=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h;  ,e=c;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);  E((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g]=b*h+((g<0||g>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+g]));    f++;}    };$pkg.AxpyUnitaryTo=C;AxpyUnitaryTo/github.com/gonum/internal/asm/f64.AxpyUnitaryTo )github.com/gonum/internal/asm/f64.AxpyIncD��D=function(a,b,c,d,e,f,g,h){var $ptr,a,b,c,d,e,f,g,h,i;  2i=0;while(true){if(!(i<(d>>0))){break;}  O((h<0||h>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+h]=((h<0||h>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+h])+(a*((g<0||g>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+g])));  ig=g+(e)>>>0;  wh=h+(f)>>>0;  Fi=i+(1)>>0;    }    };$pkg.AxpyInc=D;AxpyInc)github.com/gonum/internal/asm/f64.AxpyInc +github.com/gonum/internal/asm/f64.AxpyIncToE��E=function(a,b,c,d,e,f,g,h,i,j,k){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;  �l=0;while(true){if(!(l<(g>>0))){break;}  �((c<0||c>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+c]=d*((j<0||j>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+j])+((k<0||k>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+k]));  �j=j+(h)>>>0;  �k=k+(i)>>>0;  �c=c+(b)>>>0;  �l=l+(1)>>0;    }    };$pkg.AxpyIncTo=E;	AxpyIncTo+github.com/gonum/internal/asm/f64.AxpyIncTo ,github.com/gonum/internal/asm/f64.DotUnitaryF�hF=function(a,b){var $ptr,a,b,c,d,e,f,g;c=0;  dd=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  }c=c+(((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f])*g);    e++;}    c=c;return c;    };$pkg.DotUnitary=F;
DotUnitary,github.com/gonum/internal/asm/f64.DotUnitary (github.com/gonum/internal/asm/f64.DotIncG��G=function(a,b,c,d,e,f,g){var $ptr,a,b,c,d,e,f,g,h,i;h=0;  zi=0;while(true){if(!(i<(c>>0))){break;}  �h=h+(((g<0||g>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+g])*((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]));  �f=f+(d)>>>0;  �g=g+(e)>>>0;  �i=i+(1)>>0;    }    h=h;return h;    };$pkg.DotInc=G;DotInc(github.com/gonum/internal/asm/f64.DotInc -github.com/gonum/internal/asm/f64.ScalUnitaryH�IH=function(a,b){var $ptr,a,b,c,d,e;  
0c=b;d=0;while(true){if(!(d<c.$length)){break;}e=d;  
F((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e])*(a));    d++;}    };$pkg.ScalUnitary=H;ScalUnitary-github.com/gonum/internal/asm/f64.ScalUnitary /github.com/gonum/internal/asm/f64.ScalUnitaryToI�SI=function(a,b,c){var $ptr,a,b,c,d,e,f,g;  
�d=c;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  	((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]=b*g);    e++;}    };$pkg.ScalUnitaryTo=I;ScalUnitaryTo/github.com/gonum/internal/asm/f64.ScalUnitaryTo )github.com/gonum/internal/asm/f64.ScalIncJ�fJ=function(a,b,c,d){var $ptr,a,b,c,d,e,f;  �e=0;  �f=0;while(true){if(!(f<(c>>0))){break;}  	((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e])*(a));  e=e+(d)>>>0;   f=f+(1)>>0;    }    };$pkg.ScalInc=J;ScalInc)github.com/gonum/internal/asm/f64.ScalInc +github.com/gonum/internal/asm/f64.ScalIncToK��K=function(a,b,c,d,e,f){var $ptr,a,b,c,d,e,f,g,h,i,j,k;  .g=0;h=0;i=g;j=h;  Ek=0;while(true){if(!(k<(e>>0))){break;}  b((i<0||i>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+i]=c*((j<0||j>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+j]));  j=j+(f)>>>0;  �i=i+(b)>>>0;  Yk=k+(1)>>0;    }    };$pkg.ScalIncTo=K;	ScalIncTo+github.com/gonum/internal/asm/f64.ScalIncTo (github.com/gonum/internal/asm/f64.L1NormL� L=function(a){var $ptr,a,b,c,d,e;b=0;  c=a;d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  .b=b+(A.Abs(e));    d++;}    b=b;return b;    };$pkg.L1Norm=L;L1Norm(github.com/gonum/internal/asm/f64.L1Normmath.Abs +github.com/gonum/internal/asm/f64.L1NormIncM�M=function(a,b,c){var $ptr,a,b,c,d,e;d=0;  e=0;while(true){if(!(e<($imul(b,c)))){break;}  'd=d+(A.Abs(((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e])));  e=e+(c)>>0;    }    d=d;return d;    };$pkg.L1NormInc=M;	L1NormInc+github.com/gonum/internal/asm/f64.L1NormIncmath.Abs %github.com/gonum/internal/asm/f64.AddN��N=function(a,b){var $ptr,a,b,c,d,e,f;  �c=b;d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  �((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e]=((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e])+(f));    d++;}    };$pkg.Add=N;Add%github.com/gonum/internal/asm/f64.Add *github.com/gonum/internal/asm/f64.AddConstO�FO=function(a,b){var $ptr,a,b,c,d,e;  Rc=b;d=0;while(true){if(!(d<c.$length)){break;}e=d;  h((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e])+(a));    d++;}    };$pkg.AddConst=O;AddConst*github.com/gonum/internal/asm/f64.AddConst (github.com/gonum/internal/asm/f64.CumSumP��P=function(a,b){var $ptr,a,b,c,d,e,f,g;    if(b.$length===0){  areturn a;    }  r(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0]));  �c=$subslice(b,1);d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  �(g=e+1>>0,((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g]=((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e])+f));    d++;}  �return a;    };$pkg.CumSum=P;CumSum(github.com/gonum/internal/asm/f64.CumSum )github.com/gonum/internal/asm/f64.CumProdQ��Q=function(a,b){var $ptr,a,b,c,d,e,f,g;    if(b.$length===0){  �return a;    }  �(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0]));  �c=$subslice(b,1);d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  �(g=e+1>>0,((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g]=((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e])*f));    d++;}  	return a;    };$pkg.CumProd=Q;CumProd)github.com/gonum/internal/asm/f64.CumProd %github.com/gonum/internal/asm/f64.DivR��R=function(a,b){var $ptr,a,b,c,d,e,f;  xc=b;d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  �((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e]=((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e])/(f));    d++;}    };$pkg.Div=R;Div%github.com/gonum/internal/asm/f64.Div 'github.com/gonum/internal/asm/f64.DivToS��S=function(a,b,c){var $ptr,a,b,c,d,e,f,g;  ,d=b;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  E((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]=g/((f<0||f>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+f]));    e++;}  ]return a;    };$pkg.DivTo=S;DivTo'github.com/gonum/internal/asm/f64.DivTo (github.com/gonum/internal/asm/f64.L1DistT�lT=function(a,b){var $ptr,a,b,c,d,e,f,g;  c=0;  !d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  :c=c+(A.Abs(((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f])-g));    e++;}  [return c;    };$pkg.L1Dist=T;L1Dist(github.com/gonum/internal/asm/f64.L1Distmath.Abs *github.com/gonum/internal/asm/f64.LinfDistU��U=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i;  �c=0;    if(a.$length===0){  �return 0;    }  �c=A.Abs((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])-(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]));  	d=$subslice(a,1);e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  &i=A.Abs((h=f+1>>0,((h<0||h>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+h]))-g);    if(i>c||A.IsNaN(c)){  uc=i;    }    e++;}  �return c;    };$pkg.LinfDist=U;LinfDist*github.com/gonum/internal/asm/f64.LinfDistmath.Abs
math.IsNaN �	{"Base":6304,"Files":[{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f64\\axpy.go","Base":1,"Size":1296,"Lines":[0,61,116,167,169,202,204,217,219,238,265,289,296,347,371,392,396,399,401,422,449,479,486,554,578,605,609,612,614,629,664,693,710,727,734,812,844,870,884,898,902,905,907,924,959,997,1014,1031,1052,1059,1176,1208,1243,1257,1271,1289,1293],"Infos":null},{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f64\\doc.go","Base":1298,"Size":234,"Lines":[0,61,116,167,169,221],"Infos":null},{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f64\\dot.go","Base":1533,"Size":736,"Lines":[0,61,116,167,169,202,204,217,219,237,264,286,293,309,358,382,401,405,418,421,423,437,472,499,516,533,540,556,632,664,688,702,716,720,733],"Infos":null},{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f64\\scal.go","Base":2270,"Size":1222,"Lines":[0,61,116,167,169,202,204,217,219,238,262,282,289,337,358,375,379,382,384,405,432,457,464,529,553,575,579,582,584,599,619,654,675,692,699,760,777,809,827,841,845,848,850,867,893,928,960,977,998,1005,1099,1122,1154,1183,1197,1215,1219],"Infos":null},{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f64\\stubs_noasm.go","Base":3493,"Size":2810,"Lines":[0,61,116,167,169,202,204,217,219,234,236,250,277,302,309,325,367,391,413,417,430,433,435,452,493,521,528,544,602,640,665,669,682,685,687,698,725,743,750,780,804,819,823,826,828,844,868,888,895,940,961,978,982,985,987,1001,1023,1040,1047,1066,1097,1125,1132,1148,1191,1210,1224,1228,1244,1272,1297,1301,1314,1317,1319,1334,1356,1373,1380,1399,1430,1458,1465,1481,1525,1544,1558,1562,1578,1606,1631,1635,1648,1651,1653,1664,1691,1709,1716,1746,1770,1785,1789,1792,1794,1807,1834,1858,1865,1881,1926,1950,1971,1975,1988,1991,1993,2007,2029,2056,2089,2096,2113,2152,2171,2195,2225,2229,2243,2246,2248,2264,2286,2308,2323,2330,2364,2395,2433,2479,2501,2509,2516,2533,2574,2593,2612,2624,2628,2659,2687,2722,2765,2784,2789,2793,2807],"Infos":null}]}
 
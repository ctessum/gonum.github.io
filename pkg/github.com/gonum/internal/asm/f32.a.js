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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �!���!github.com/gonum/internal/asm/f32f32�1
$$ exports $$
pv0f32Bgithub.com/gonum/internal/asm/f32	AxpyInc 
alphaxy:nincXincYixiy  	AxpyIncTo dstincDstidst
alphaxy@nincXincYixiy  	AxpyUnitary 
alphaxyD  	AxpyUnitaryTo dst
alphaxyJ  	DdotInc xyNnincXincYixiysum 	DdotUnitary xyRsum 	DotInc xyVnincXincYixiysum 	DotUnitary xyZsum 	ScalInc 
alphaxnincX  	ScalIncTo dstincDst
alphaxnincX  	ScalUnitary 
alphax  	ScalUnitaryTo dst
alphax  -github.com/gonum/internal/asm/f32.DdotUnitaryA�eA=function(a,b){var $ptr,a,b,c,d,e,f,g;c=0;  Yd=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  rc=c+(((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f])*g);    e++;}  �return c;    };$pkg.DdotUnitary=A;DdotUnitary-github.com/gonum/internal/asm/f32.DdotUnitary )github.com/gonum/internal/asm/f32.DdotIncB��B=function(a,b,c,d,e,f,g){var $ptr,a,b,c,d,e,f,g,h,i;h=0;  �i=0;while(true){if(!(i<(c>>0))){break;}  �h=h+(((g<0||g>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+g])*((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]));  �f=f+(d)>>>0;  �g=g+(e)>>>0;  �i=i+(1)>>0;    }  �return h;    };$pkg.DdotInc=B;DdotInc)github.com/gonum/internal/asm/f32.DdotInc ,github.com/gonum/internal/asm/f32.DotUnitaryC�zC=function(a,b){var $ptr,a,b,c,d,e,f,g;c=0;  .d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  Gc=$fround(c+($fround(((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f])*g)));    e++;}    c=c;return c;    };$pkg.DotUnitary=C;
DotUnitary,github.com/gonum/internal/asm/f32.DotUnitary (github.com/gonum/internal/asm/f32.DotIncD��D=function(a,b,c,d,e,f,g){var $ptr,a,b,c,d,e,f,g,h,i;h=0;  Di=0;while(true){if(!(i<(c>>0))){break;}  ah=$fround(h+($fround(((g<0||g>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+g])*((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]))));  yf=f+(d)>>>0;  �g=g+(e)>>>0;  Xi=i+(1)>>0;    }    h=h;return h;    };$pkg.DotInc=D;DotInc(github.com/gonum/internal/asm/f32.DotInc -github.com/gonum/internal/asm/f32.ScalUnitaryE�RE=function(a,b){var $ptr,a,b,c,d,e;  �c=b;d=0;while(true){if(!(d<c.$length)){break;}e=d;  �((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=$fround(((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e])*(a)));    d++;}    };$pkg.ScalUnitary=E;ScalUnitary-github.com/gonum/internal/asm/f32.ScalUnitary /github.com/gonum/internal/asm/f32.ScalUnitaryToF�\F=function(a,b,c){var $ptr,a,b,c,d,e,f,g;  �d=c;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  �((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]=$fround(b*g));    e++;}    };$pkg.ScalUnitaryTo=F;ScalUnitaryTo/github.com/gonum/internal/asm/f32.ScalUnitaryTo )github.com/gonum/internal/asm/f32.ScalIncG�oG=function(a,b,c,d){var $ptr,a,b,c,d,e,f;  	�e=0;  	�f=0;while(true){if(!(f<(c>>0))){break;}  	�((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=$fround(((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e])*(a)));  	�e=e+(d)>>>0;  	�f=f+(1)>>0;    }    };$pkg.ScalInc=G;ScalInc)github.com/gonum/internal/asm/f32.ScalInc +github.com/gonum/internal/asm/f32.ScalIncToH��H=function(a,b,c,d,e,f){var $ptr,a,b,c,d,e,f,g,h,i,j,k;  
�g=0;h=0;i=g;j=h;  
�k=0;while(true){if(!(k<(e>>0))){break;}  	((i<0||i>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+i]=$fround(c*((j<0||j>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+j])));  &j=j+(f)>>>0;  4i=i+(b)>>>0;   k=k+(1)>>0;    }    };$pkg.ScalIncTo=H;	ScalIncTo+github.com/gonum/internal/asm/f32.ScalIncTo -github.com/gonum/internal/asm/f32.AxpyUnitaryI��I=function(a,b,c){var $ptr,a,b,c,d,e,f,g;  �d=b;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  �((f<0||f>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+f]=$fround(((f<0||f>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+f])+($fround(a*g))));    e++;}    };$pkg.AxpyUnitary=I;AxpyUnitary-github.com/gonum/internal/asm/f32.AxpyUnitary /github.com/gonum/internal/asm/f32.AxpyUnitaryToJ��J=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h;  we=c;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);  �((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g]=$fround($fround(b*h)+((g<0||g>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+g])));    f++;}    };$pkg.AxpyUnitaryTo=J;AxpyUnitaryTo/github.com/gonum/internal/asm/f32.AxpyUnitaryTo )github.com/gonum/internal/asm/f32.AxpyIncK��K=function(a,b,c,d,e,f,g,h){var $ptr,a,b,c,d,e,f,g,h,i;  }i=0;while(true){if(!(i<(d>>0))){break;}  �((h<0||h>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+h]=$fround(((h<0||h>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+h])+($fround(a*((g<0||g>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+g])))));  �g=g+(e)>>>0;  �h=h+(f)>>>0;  �i=i+(1)>>0;    }    };$pkg.AxpyInc=K;AxpyInc)github.com/gonum/internal/asm/f32.AxpyInc +github.com/gonum/internal/asm/f32.AxpyIncToL�L=function(a,b,c,d,e,f,g,h,i,j,k){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;  �l=0;while(true){if(!(l<(g>>0))){break;}  ((c<0||c>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+c]=$fround($fround(d*((j<0||j>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+j]))+((k<0||k>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+k])));  )j=j+(h)>>>0;  7k=k+(i)>>>0;  Ec=c+(b)>>>0;  �l=l+(1)>>0;    }    };$pkg.AxpyIncTo=L;	AxpyIncTo+github.com/gonum/internal/asm/f32.AxpyIncTo ��{"Base":4189,"Files":[{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f32\\ddot.go","Base":1,"Size":765,"Lines":[0,61,116,167,169,182,184,203,231,272,280,293,343,367,404,408,417,420,422,437,472,517,534,551,558,570,647,679,721,735,749,753,762],"Infos":null},{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f32\\doc.go","Base":767,"Size":234,"Lines":[0,61,116,167,169,221],"Infos":null},{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f32\\dot.go","Base":1002,"Size":701,"Lines":[0,61,116,167,169,182,184,202,229,251,258,274,323,347,366,370,383,386,388,402,437,464,481,498,505,521,597,629,653,667,681,685,698],"Infos":null},{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f32\\scal.go","Base":1704,"Size":1187,"Lines":[0,61,116,167,169,182,184,203,227,247,254,302,323,340,344,347,349,370,397,422,429,494,518,540,544,547,549,564,584,619,640,657,664,725,742,774,792,806,810,813,815,832,858,893,925,942,963,970,1064,1087,1119,1148,1162,1180,1184],"Infos":null},{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\internal\\asm\\f32\\stubs_noasm.go","Base":2892,"Size":1296,"Lines":[0,61,116,167,169,202,204,217,219,238,265,289,296,347,371,392,396,399,401,422,449,479,486,554,578,605,609,612,614,629,664,693,710,727,734,812,844,870,884,898,902,905,907,924,959,997,1014,1031,1052,1059,1176,1208,1243,1257,1271,1289,1293],"Infos":null}]}
 
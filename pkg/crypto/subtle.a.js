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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �l��crypto/subtlesubtle��
$$ exports $$
pv0subtlecrypto/subtle	$ConstantTimeByteEq xy  	&ConstantTimeCompare x2y<  	 ConstantTimeCopy vx2y@  	ConstantTimeEq xy  	(ConstantTimeLessOrEq xy  	$ConstantTimeSelect vxy  !crypto/subtle.ConstantTimeCompareA��A=function(a,b){var $ptr,a,b,c,d;    if(!((a.$length===b.$length))){  ;return 0;    }  Mc=0;  Zd=0;while(true){if(!(d<a.$length)){break;}  vc=(c|(((((d<0||d>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+d])^((d<0||d>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+d]))<<24>>>24)))>>>0;  nd=d+(1)>>0;    }  �return C(c,0);    };$pkg.ConstantTimeCompare=A;ConstantTimeCompare crypto/subtle.ConstantTimeByteEq!crypto/subtle.ConstantTimeCompare  crypto/subtle.ConstantTimeSelectBqB=function(a,b,c){var $ptr,a,b,c;  Nreturn((~((a-1>>0))>>0)&b)|(((a-1>>0))&c);    };$pkg.ConstantTimeSelect=B;ConstantTimeSelect crypto/subtle.ConstantTimeSelect  crypto/subtle.ConstantTimeByteEqC��C=function(a,b){var $ptr,a,b,c;  �c=~(((a^b)<<24>>>24))<<24>>>24;  �c=(c&((c>>>4<<24>>>24)))>>>0;  �c=(c&((c>>>2<<24>>>24)))>>>0;  �c=(c&((c>>>1<<24>>>24)))>>>0;  return(c>>0);    };$pkg.ConstantTimeByteEq=C;ConstantTimeByteEq crypto/subtle.ConstantTimeByteEq crypto/subtle.ConstantTimeEqD��D=function(a,b){var $ptr,a,b,c;  wc=~(((a^b)>>0))>>0;  �c=c&((c>>16>>0));  �c=c&((c>>8>>0));  �c=c&((c>>4>>0));  �c=c&((c>>2>>0));  �c=c&((c>>1>>0));  �return((c&1)>>0);    };$pkg.ConstantTimeEq=D;ConstantTimeEqcrypto/subtle.ConstantTimeEq crypto/subtle.ConstantTimeCopyE�yE=function(a,b,c){var $ptr,a,b,c,d,e,f;    if(!((b.$length===c.$length))){  �$panic(new $String("subtle: slices have different lengths"));    }  d=((a-1>>0)<<24>>>24);  "e=((~((a-1>>0))>>0)<<24>>>24);  ?f=0;while(true){if(!(f<b.$length)){break;}  [((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f]=((((((f<0||f>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+f])&d)>>>0)|((((f<0||f>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+f])&e)>>>0))>>>0));  Sf=f+(1)>>0;    }    };$pkg.ConstantTimeCopy=E;ConstantTimeCopycrypto/subtle.ConstantTimeCopy "crypto/subtle.ConstantTimeLessOrEqF��F=function(a,b){var $ptr,a,b,c,d;  ,c=(a>>0);  =d=(b>>0);  Nreturn(((((((c-d>>0)-1>>0))>>31>>0))&1)>>0);    };$pkg.ConstantTimeLessOrEq=F;ConstantTimeLessOrEq"crypto/subtle.ConstantTimeLessOrEq �{"Base":1913,"Files":[{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\goroot\\src\\crypto\\subtle\\constant_time.go","Base":1,"Size":1911,"Lines":[0,55,109,159,160,238,292,307,308,374,451,501,545,568,579,582,583,595,596,627,646,649,650,683,685,686,745,802,873,874,933,975,990,1003,1016,1029,1030,1045,1047,1048,1103,1141,1156,1170,1183,1196,1209,1222,1223,1242,1244,1245,1323,1400,1426,1470,1493,1542,1545,1546,1568,1593,1624,1657,1660,1662,1663,1724,1792,1834,1851,1868,1909],"Infos":null}]}
 
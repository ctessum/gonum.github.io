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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �/���runtime/debugdebugosruntimesorttime�{
$$ exports $$
pv0
debugruntime/debug	FreeOSMemory    GCStats LastGCTimetimetimesec
 nsec locLocationname  zonezonename  offset 
isDST    txzoneTranswhen
 
index 
isstd  
isutc    cacheStart
 cacheEnd
 cacheZoneJ getlD  D StringlD    lookuplDsec

name offset
isDST 
start
end
 lookupFirstZonelD   firstZoneUsedlD    lookupNamelDname unix
offset
isDST ok   VStringt>    Formatt>layout    AppendFormatt>b2layout  2 setLoct>locD  
Aftert>u>   Beforet>u>   
Equalt>u>   IsZerot>    abst>   locabst> name offsetabs Datet> year
month
MonthStringm�    day Yeart>   
Montht>  � Dayt>   Weekdayt>  WeekdayStringd�     ISOWeekt> yearweek 
Clockt> hourminsec Hourt>   Minutet>   Secondt>   Nanosecondt>   YearDayt>   Addt>dDuration

Stringd�    Nanosecondsd�  
 Secondsd�   Minutesd�   
Hoursd�    > Subt>u> � AddDatet>
yearsmonthsdays > datet>full year
month�dayyday UTCt>  > 
Localt>  > Int>locD > Locationt>  D Zonet> name offset Unixt>  
 UnixNanot>  
 MarshalBinaryt>  2 6 UnmarshalBinaryt>data2 6 GobEncodet>  2 6 GobDecodet>data2 6 MarshalJSONt>  2 6 UnmarshalJSONt>data2 6 MarshalTextt>  2 6 UnmarshalTextt>data2 6 Truncatet>d� > 
Roundt>d� >  
NumGC
 PauseTotal� 
Pause� PauseEnd> PauseQuantiles�  	PrintStack    	ReadGCStats 
stats:  	SetGCPercent percent  	SetMaxStack 
bytes  	SetMaxThreads threads  	SetPanicOnFault enabled    	SetTraceback 
level   	
Stack   2 	WriteHeapDump fd  DD=$packages["os"];a    $r=D.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["runtime"];a    $r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["sort"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["time"];a    $r=C.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G�G=$pkg.GCStats=$newType(0,$kindStruct,"debug.GCStats",true,"runtime/debug",true,function(LastGC_,NumGC_,PauseTotal_,Pause_,PauseEnd_,PauseQuantiles_){this.$val=this;if(arguments.length===0){this.LastGC=new C.Time.ptr(new $Int64(0,0),0,Z.nil);this.NumGC=new $Int64(0,0);this.PauseTotal=new C.Duration(0,0);this.Pause=V.nil;this.PauseEnd=X.nil;this.PauseQuantiles=V.nil;return;}this.LastGC=LastGC_;this.NumGC=NumGC_;this.PauseTotal=PauseTotal_;this.Pause=Pause_;this.PauseEnd=PauseEnd_;this.PauseQuantiles=PauseQuantiles_;});��G.init("",[{prop:"LastGC",name:"LastGC",exported:true,typ:C.Time,tag:""},{prop:"NumGC",name:"NumGC",exported:true,typ:$Int64,tag:""},{prop:"PauseTotal",name:"PauseTotal",exported:true,typ:C.Duration,tag:""},{prop:"Pause",name:"Pause",exported:true,typ:V,tag:""},{prop:"PauseEnd",name:"PauseEnd",exported:true,typ:X,tag:""},{prop:"PauseQuantiles",name:"PauseQuantiles",exported:true,typ:V,tag:""}]);GCStatsruntime/debug.GCStatsruntime/debug.Vruntime/debug.Xruntime/debug.Ztime.Durationtime.Location	time.Time VV=$sliceType(C.Duration);Vtime.Duration WW=$ptrType(V);Wruntime/debug.V XX=$sliceType(C.Time);X	time.Time YY=$sliceType($Uint8);Y ZZ=$ptrType(C.Location);Ztime.Location runtime/debug.setGCPercentE0E=function(c){var $ptr,c;   mreturn 100;    };setGCPercentruntime/debug.setGCPercent runtime/debug.setMaxStackF6F=function(c){var $ptr,c;  return 250000000;    };setMaxStackruntime/debug.setMaxStack runtime/debug.ReadGCStatsH��H=function(c){var $ptr,aa,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;aa=$f.aa;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=[d];    if(c.Pause.$capacity<515){  uc.Pause=$makeSlice(V,515);    }  	R((c.$ptr_Pause||(c.$ptr_Pause=new W(function(){return this.$target.Pause;},function($v){this.$target.Pause=$v;},c))));  	e=c.Pause.$length-3>>0;  	:C.Time.copy(c.LastGC,C.Unix(new $Int64(0,0),(f=(g=c.Pause,((e<0||e>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+e])),new $Int64(f.$high,f.$low))));  	nc.NumGC=(h=(i=c.Pause,j=e+1>>0,((j<0||j>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+j])),new $Int64(h.$high,h.$low));  	�c.PauseTotal=(k=c.Pause,l=e+2>>0,((l<0||l>=k.$length)?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+l]));  	�e=(m=e/(2),(m===m&&m!==1/0&&m!==-1/0)?m>>0:$throwRuntimeError("integer divide by zero"));  	�c.Pause=$subslice(c.Pause,0,e);    if(c.PauseEnd.$capacity<256){  
-c.PauseEnd=$makeSlice(X,0,256);    }  
ac.PauseEnd=$subslice(c.PauseEnd,0,0);  
�n=$subslice(c.Pause,e,(e+e>>0));o=0;while(true){if(!(o<n.$length)){break;}p=((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]);  
�c.PauseEnd=$append(c.PauseEnd,C.Unix(new $Int64(0,0),new $Int64(p.$high,p.$low)));    o++;}  
�if(c.PauseQuantiles.$length>0){$s=1;continue;}$s=2;continue;    case 1:  if(e===0){$s=3;continue;}$s=4;continue;    case 3:  ,q=c.PauseQuantiles;r=0;while(true){if(!(r<q.$length)){break;}s=r;  V(t=c.PauseQuantiles,((s<0||s>=t.$length)?($throwRuntimeError("index out of range"),undefined):t.$array[t.$offset+s]=new C.Duration(0,0)));    r++;}    $s=5;continue;case 4:  �d[0]=$subslice(c.Pause,e,(e+e>>0));  $copySlice(d[0],c.Pause);  :$r=B.Slice(d[0],(function(d){return function(u,v){var $ptr,u,v,w,x;  creturn(w=((u<0||u>=d[0].$length)?($throwRuntimeError("index out of range"),undefined):d[0].$array[d[0].$offset+u]),x=((v<0||v>=d[0].$length)?($throwRuntimeError("index out of range"),undefined):d[0].$array[d[0].$offset+v]),(w.$high<x.$high||(w.$high===x.$high&&w.$low<x.$low)));    };})(d));$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �u=c.PauseQuantiles.$length-1>>0;  �v=0;while(true){if(!(v<u)){break;}  �(y=c.PauseQuantiles,((v<0||v>=y.$length)?($throwRuntimeError("index out of range"),undefined):y.$array[y.$offset+v]=(w=(x=($imul(d[0].$length,v))/u,(x===x&&x!==1/0&&x!==-1/0)?x>>0:$throwRuntimeError("integer divide by zero")),((w<0||w>=d[0].$length)?($throwRuntimeError("index out of range"),undefined):d[0].$array[d[0].$offset+w]))));  �v=v+(1)>>0;    }  (aa=c.PauseQuantiles,((u<0||u>=aa.$length)?($throwRuntimeError("index out of range"),undefined):aa.$array[aa.$offset+u]=(z=d[0].$length-1>>0,((z<0||z>=d[0].$length)?($throwRuntimeError("index out of range"),undefined):d[0].$array[d[0].$offset+z]))));    case 5:    case 2:    $s=-1;return;}return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.aa=aa;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};$pkg.ReadGCStats=H;ReadGCStats	runtime/debug.ReadGCStatsruntime/debug.Vruntime/debug.Wruntime/debug.Xruntime/debug.readGCStats
sort.Slicetime.Duration	time.Time	time.Unix runtime/debug.SetGCPercentIeI=function(c){var $ptr,c,d;  d=E((c>>0));  =A.GC();  Kreturn(d>>0);    };$pkg.SetGCPercent=I;SetGCPercent
runtime.GCruntime/debug.SetGCPercentruntime/debug.setGCPercent runtime/debug.FreeOSMemoryJ:J=function(){var $ptr;  pS();    };$pkg.FreeOSMemory=J;FreeOSMemoryruntime/debug.FreeOSMemoryruntime/debug.freeOSMemory runtime/debug.SetMaxStackKDK=function(c){var $ptr,c;  rreturn F(c);    };$pkg.SetMaxStack=K;SetMaxStackruntime/debug.SetMaxStackruntime/debug.setMaxStack runtime/debug.SetMaxThreadsLFL=function(c){var $ptr,c;  �return U(c);    };$pkg.SetMaxThreads=L;SetMaxThreadsruntime/debug.SetMaxThreadsruntime/debug.setMaxThreads runtime/debug.SetPanicOnFaultMHM=function(c){var $ptr,c;  Zreturn T(c);    };$pkg.SetPanicOnFault=M;SetPanicOnFaultruntime/debug.SetPanicOnFaultruntime/debug.setPanicOnFault runtime/debug.WriteHeapDumpNwN=function(){$throwRuntimeError("native function not implemented: runtime/debug.WriteHeapDump");};$pkg.WriteHeapDump=N;WriteHeapDumpruntime/debug.WriteHeapDump runtime/debug.SetTracebackOuO=function(){$throwRuntimeError("native function not implemented: runtime/debug.SetTraceback");};$pkg.SetTraceback=O;SetTracebackruntime/debug.SetTraceback runtime/debug.PrintStackP��P=function(){var $ptr,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  $c=D.Stderr.Write(Q());$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}c;    $s=-1;return;}return;}if($f===undefined){$f={$blk:P};}$f.$ptr=$ptr;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};$pkg.PrintStack=P;
PrintStack	os.Stderrruntime/debug.PrintStackruntime/debug.Stack runtime/debug.StackQ��Q=function(){var $ptr,c,d;  �c=$makeSlice(Y,1024);  while(true){  d=A.Stack(c,false);    if(d<c.$length){  Kreturn $subslice(c,0,d);    }  `c=$makeSlice(Y,($imul(2,c.$length)));    }    };$pkg.Stack=Q;Stackruntime.Stackruntime/debug.Stackruntime/debug.Y runtime/debug.readGCStatsR`R=function(){$throwRuntimeError("native function not implemented: runtime/debug.readGCStats");};readGCStatsruntime/debug.readGCStats runtime/debug.freeOSMemorySaS=function(){$throwRuntimeError("native function not implemented: runtime/debug.freeOSMemory");};freeOSMemoryruntime/debug.freeOSMemory runtime/debug.setPanicOnFaultTdT=function(){$throwRuntimeError("native function not implemented: runtime/debug.setPanicOnFault");};setPanicOnFaultruntime/debug.setPanicOnFault runtime/debug.setMaxThreadsUbU=function(){$throwRuntimeError("native function not implemented: runtime/debug.setMaxThreads");};setMaxThreadsruntime/debug.setMaxThreads ��{"Base":8472,"Files":[{"Name":"/src/runtime/debug/debug.go","Base":1,"Size":298,"Lines":[0,13,14,28,29,62,107,119,121,122,156,201,278,296],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\goroot\\src\\runtime\\debug\\garbage.go","Base":300,"Size":7011,"Lines":[0,55,109,159,160,174,175,184,195,203,211,213,214,279,301,360,425,492,560,638,670,672,673,742,809,885,952,1029,1092,1163,1206,1241,1303,1366,1430,1486,1511,1569,1607,1659,1662,1663,1729,1797,1860,1919,1987,2007,2034,2061,2113,2152,2189,2234,2265,2266,2303,2353,2356,2393,2436,2503,2506,2507,2543,2557,2598,2630,2635,2646,2711,2764,2798,2827,2903,2942,2971,3026,3031,3083,3087,3090,3092,3093,3156,3226,3307,3353,3422,3472,3526,3563,3600,3614,3631,3633,3634,3693,3753,3820,3885,3907,3923,3925,3926,3980,4024,4088,4112,4157,4233,4236,4300,4370,4387,4421,4448,4450,4451,4512,4584,4619,4666,4708,4711,4788,4862,4950,5023,5026,5092,5160,5231,5269,5300,5302,5303,5376,5451,5530,5598,5670,5742,5797,5855,5891,5933,5966,5968,5969,6038,6074,6077,6150,6220,6287,6348,6351,6424,6455,6456,6524,6594,6627,6690,6755,6814,6868,6933,6979],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\goroot\\src\\runtime\\debug\\stack.go","Base":7312,"Size":756,"Lines":[0,55,109,159,160,236,257,271,272,281,287,298,300,301,383,403,429,431,432,505,587,609,636,643,676,696,714,718,751,754],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\goroot\\src\\runtime\\debug\\stubs.go","Base":8069,"Size":402,"Lines":[0,55,109,159,160,174,175,184,192,194,195,230,265,285,311,342,374],"Infos":null}]}
 
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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �,R��#github.com/gopherjs/gopherjs/nosyncnosync��
$$ exports $$
pv0nosyncFgithub.com/gopherjs/gopherjs/nosync

Mutex locked   Lockm8   Unlockm8   Once 
doing   done   DooDf      Pool 
store    New       GetpN     PutpNx    RWMutex writeLocked   readLockCounter  Lockrwf   Unlockrwf   
RLockrwf   RUnlockrwf   WaitGroup counter  Addwgz
delta  Donewgz   Waitwgz   A��A=$pkg.Mutex=$newType(0,$kindStruct,"nosync.Mutex",true,"github.com/gopherjs/gopherjs/nosync",true,function(locked_){this.$val=this;if(arguments.length===0){this.locked=false;return;}this.locked=locked_;});��F.methods=[{prop:"Lock",name:"Lock",pkg:"",typ:$funcType([],[],false)},{prop:"Unlock",name:"Unlock",pkg:"",typ:$funcType([],[],false)}];nA.init("github.com/gopherjs/gopherjs/nosync",[{prop:"locked",name:"locked",exported:false,typ:$Bool,tag:""}]);Mutex%github.com/gopherjs/gopherjs/nosync.F)github.com/gopherjs/gopherjs/nosync.Mutex B�4B=$pkg.RWMutex=$newType(0,$kindStruct,"nosync.RWMutex",true,"github.com/gopherjs/gopherjs/nosync",true,function(writeLocked_,readLockCounter_){this.$val=this;if(arguments.length===0){this.writeLocked=false;this.readLockCounter=0;return;}this.writeLocked=writeLocked_;this.readLockCounter=readLockCounter_;});�G.methods=[{prop:"Lock",name:"Lock",pkg:"",typ:$funcType([],[],false)},{prop:"Unlock",name:"Unlock",pkg:"",typ:$funcType([],[],false)},{prop:"RLock",name:"RLock",pkg:"",typ:$funcType([],[],false)},{prop:"RUnlock",name:"RUnlock",pkg:"",typ:$funcType([],[],false)}];��B.init("github.com/gopherjs/gopherjs/nosync",[{prop:"writeLocked",name:"writeLocked",exported:false,typ:$Bool,tag:""},{prop:"readLockCounter",name:"readLockCounter",exported:false,typ:$Int,tag:""}]);RWMutex%github.com/gopherjs/gopherjs/nosync.G+github.com/gopherjs/gopherjs/nosync.RWMutex C��C=$pkg.WaitGroup=$newType(0,$kindStruct,"nosync.WaitGroup",true,"github.com/gopherjs/gopherjs/nosync",true,function(counter_){this.$val=this;if(arguments.length===0){this.counter=0;return;}this.counter=counter_;});��H.methods=[{prop:"Add",name:"Add",pkg:"",typ:$funcType([$Int],[],false)},{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[],false)},{prop:"Wait",name:"Wait",pkg:"",typ:$funcType([],[],false)}];oC.init("github.com/gopherjs/gopherjs/nosync",[{prop:"counter",name:"counter",exported:false,typ:$Int,tag:""}]);	WaitGroup%github.com/gopherjs/gopherjs/nosync.H-github.com/gopherjs/gopherjs/nosync.WaitGroup D��D=$pkg.Once=$newType(0,$kindStruct,"nosync.Once",true,"github.com/gopherjs/gopherjs/nosync",true,function(doing_,done_){this.$val=this;if(arguments.length===0){this.doing=false;this.done=false;return;}this.doing=doing_;this.done=done_;});EJ.methods=[{prop:"Do",name:"Do",pkg:"",typ:$funcType([I],[],false)}];��D.init("github.com/gopherjs/gopherjs/nosync",[{prop:"doing",name:"doing",exported:false,typ:$Bool,tag:""},{prop:"done",name:"done",exported:false,typ:$Bool,tag:""}]);Once%github.com/gopherjs/gopherjs/nosync.I%github.com/gopherjs/gopherjs/nosync.J(github.com/gopherjs/gopherjs/nosync.Once E��E=$pkg.Pool=$newType(0,$kindStruct,"nosync.Pool",true,"github.com/gopherjs/gopherjs/nosync",true,function(store_,New_){this.$val=this;if(arguments.length===0){this.store=K.nil;this.New=$throwNilPointerError;return;}this.store=store_;this.New=New_;});��L.methods=[{prop:"Get",name:"Get",pkg:"",typ:$funcType([],[$emptyInterface],false)},{prop:"Put",name:"Put",pkg:"",typ:$funcType([$emptyInterface],[],false)}];��E.init("github.com/gopherjs/gopherjs/nosync",[{prop:"store",name:"store",exported:false,typ:K,tag:""},{prop:"New",name:"New",exported:true,typ:M,tag:""}]);Pool%github.com/gopherjs/gopherjs/nosync.K%github.com/gopherjs/gopherjs/nosync.L%github.com/gopherjs/gopherjs/nosync.M(github.com/gopherjs/gopherjs/nosync.Pool FF=$ptrType(A);F)github.com/gopherjs/gopherjs/nosync.Mutex GG=$ptrType(B);G+github.com/gopherjs/gopherjs/nosync.RWMutex HH=$ptrType(C);H-github.com/gopherjs/gopherjs/nosync.WaitGroup II=$funcType([],[],false);I JJ=$ptrType(D);J(github.com/gopherjs/gopherjs/nosync.Once KK=$sliceType($emptyInterface);K LL=$ptrType(E);L(github.com/gopherjs/gopherjs/nosync.Pool M(M=$funcType([],[$emptyInterface],false);M 1(*github.com/gopherjs/gopherjs/nosync.Mutex).Lock��A.ptr.prototype.Lock=function(){var $ptr,a;a=this;    if(a.locked){   �$panic(new $String("nosync: mutex is already locked"));    }  a.locked=true;    };A.prototype.Lock=function(){return this.$val.Lock();};Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.Mutex).Unlock��A.ptr.prototype.Unlock=function(){var $ptr,a;a=this;    if(!a.locked){  �$panic(new $String("nosync: unlock of unlocked mutex"));    }  �a.locked=false;    };A.prototype.Unlock=function(){return this.$val.Unlock();};Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.RWMutex).Lock��B.ptr.prototype.Lock=function(){var $ptr,a;a=this;    if(!((a.readLockCounter===0))||a.writeLocked){  �$panic(new $String("nosync: mutex is already locked"));    }  +a.writeLocked=true;    };B.prototype.Lock=function(){return this.$val.Lock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 5(*github.com/gopherjs/gopherjs/nosync.RWMutex).Unlock��B.ptr.prototype.Unlock=function(){var $ptr,a;a=this;    if(!a.writeLocked){  �$panic(new $String("nosync: unlock of unlocked mutex"));    }  
a.writeLocked=false;    };B.prototype.Unlock=function(){return this.$val.Unlock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.RWMutex).RLock��B.ptr.prototype.RLock=function(){var $ptr,a;a=this;    if(a.writeLocked){  �$panic(new $String("nosync: mutex is already locked"));    }  �a.readLockCounter=a.readLockCounter+(1)>>0;    };B.prototype.RLock=function(){return this.$val.RLock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 6(*github.com/gopherjs/gopherjs/nosync.RWMutex).RUnlock�
B.ptr.prototype.RUnlock=function(){var $ptr,a;a=this;    if(a.readLockCounter===0){  �$panic(new $String("nosync: unlock of unlocked mutex"));    }  a.readLockCounter=a.readLockCounter-(1)>>0;    };B.prototype.RUnlock=function(){return this.$val.RUnlock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Add��C.ptr.prototype.Add=function(a){var $ptr,a,b;b=this;  b.counter=b.counter+(a)>>0;    if(b.counter<0){  ?$panic(new $String("sync: negative WaitGroup counter"));    }    };C.prototype.Add=function(a){return this.$val.Add(a);};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Done~C.ptr.prototype.Done=function(){var $ptr,a;a=this;  �a.Add(-1);    };C.prototype.Done=function(){return this.$val.Done();};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Wait��C.ptr.prototype.Wait=function(){var $ptr,a;a=this;    if(!((a.counter===0))){  =$panic(new $String("sync: WaitGroup counter not zero"));    }    };C.prototype.Wait=function(){return this.$val.Wait();};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup .(*github.com/gopherjs/gopherjs/nosync.Once).Do�D.ptr.prototype.Do=function(a){var $ptr,a,b,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=[b];b[0]=this;    if(b[0].done){  ,$s=-1;return;    }    if(b[0].doing){  I$panic(new $String("nosync: Do called within f"));    }  sb[0].doing=true;  �$deferred.push([(function(b){return function(){var $ptr;  �b[0].doing=false;  �b[0].done=true;    };})(b),[]]);  �$r=a();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:D.ptr.prototype.Do};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};D.prototype.Do=function(a){return this.$val.Do(a);};Once(github.com/gopherjs/gopherjs/nosync.Once /(*github.com/gopherjs/gopherjs/nosync.Pool).Get��E.ptr.prototype.Get=function(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  -if(a.store.$length===0){$s=1;continue;}$s=2;continue;    case 1:  Gif(!(a.New===$throwNilPointerError)){$s=3;continue;}$s=4;continue;    case 3:  ]b=a.New();$s=5;case 5:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    case 4:  t$s=-1;return $ifaceNil;    case 2:  �e=(c=a.store,d=a.store.$length-1>>0,((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]));  �a.store=$subslice(a.store,0,(a.store.$length-1>>0));  �$s=-1;return e;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Get};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Get=function(){return this.$val.Get();};Pool(github.com/gopherjs/gopherjs/nosync.Pool /(*github.com/gopherjs/gopherjs/nosync.Pool).Put��E.ptr.prototype.Put=function(a){var $ptr,a,b;b=this;    if($interfaceIsEqual(a,$ifaceNil)){  +return;    }  8b.store=$append(b.store,a);    };E.prototype.Put=function(a){return this.$val.Put(a);};Pool(github.com/gopherjs/gopherjs/nosync.Pool ��{"Base":5466,"Files":[{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gopherjs\\gopherjs\\nosync\\mutex.go","Base":1,"Size":2158,"Lines":[0,16,18,62,83,97,100,102,167,193,209,253,257,275,278,280,345,373,390,435,439,458,461,463,509,532,555,577,580,582,683,712,761,805,809,833,836,838,929,960,983,1028,1032,1057,1060,1062,1164,1194,1216,1260,1264,1287,1290,1292,1435,1467,1498,1543,1547,1570,1573,1575,1623,1648,1662,1665,1667,1769,1808,1830,1852,1897,1901,1904,1906,1949,1980,1993,1996,1998,2052,2083,2106,2151,2155],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gopherjs\\gopherjs\\nosync\\once.go","Base":2160,"Size":1111,"Lines":[0,16,18,78,98,111,124,127,129,199,263,282,361,436,487,491,569,646,695,749,753,801,805,882,905,909,940,954,964,968,983,1022,1026,1043,1060,1079,1096,1102,1108],"Infos":null},{"Name":"C:\\Users\\Chris\\Documents\\go\\src\\github.com\\gonum\\gonum.github.io\\tmp\\gopath\\src\\github.com\\gopherjs\\gopherjs\\nosync\\pool.go","Base":3272,"Size":2193,"Lines":[0,16,18,94,109,113,194,272,303,307,373,377,452,530,611,627,631,704,779,857,882,886,964,1044,1115,1130,1134,1215,1295,1376,1391,1395,1415,1437,1464,1467,1469,1538,1578,1639,1715,1747,1751,1823,1856,1892,1917,1938,1957,1962,1976,1980,2011,2048,2059,2062,2064,2092,2129,2145,2155,2159,2190],"Infos":null}]}
 
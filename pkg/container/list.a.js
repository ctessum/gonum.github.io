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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �-���container/listlist��
$$ exports $$
pv0listcontainer/listElement next 8 prev < list List root 8 len  &Initl@  @ Lenl@   
Frontl@  8 Backl@  8 lazyInitl@   insertl@e8atb 8 insertValuel@v  at8 8 removel@e8 8 Removel@e8    PushFrontl@v   8 PushBackl@v   8 InsertBeforel@v  mark8 8 InsertAfterl@v  mark8 8 MoveToFrontl@e8  MoveToBackl@e8  MoveBeforel@e8mark�  MoveAfterl@e8mark�  PushBackListl@
other@  PushFrontListl@
other@   
Value   Nexte8  8 Preve8  8 @	New   @ A�-A=$pkg.Element=$newType(0,$kindStruct,"list.Element",true,"container/list",true,function(next_,prev_,list_,Value_){this.$val=this;if(arguments.length===0){this.next=E.nil;this.prev=E.nil;this.list=D.nil;this.Value=$ifaceNil;return;}this.next=next_;this.prev=prev_;this.list=list_;this.Value=Value_;});��E.methods=[{prop:"Next",name:"Next",pkg:"",typ:$funcType([],[E],false)},{prop:"Prev",name:"Prev",pkg:"",typ:$funcType([],[E],false)}];�A.init("container/list",[{prop:"next",name:"next",exported:false,typ:E,tag:""},{prop:"prev",name:"prev",exported:false,typ:E,tag:""},{prop:"list",name:"list",exported:false,typ:D,tag:""},{prop:"Value",name:"Value",exported:true,typ:$emptyInterface,tag:""}]);Elementcontainer/list.Dcontainer/list.Econtainer/list.Element B��B=$pkg.List=$newType(0,$kindStruct,"list.List",true,"container/list",true,function(root_,len_){this.$val=this;if(arguments.length===0){this.root=new A.ptr(E.nil,E.nil,D.nil,$ifaceNil);this.len=0;return;}this.root=root_;this.len=len_;});��D.methods=[{prop:"Init",name:"Init",pkg:"",typ:$funcType([],[D],false)},{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Front",name:"Front",pkg:"",typ:$funcType([],[E],false)},{prop:"Back",name:"Back",pkg:"",typ:$funcType([],[E],false)},{prop:"lazyInit",name:"lazyInit",pkg:"container/list",typ:$funcType([],[],false)},{prop:"insert",name:"insert",pkg:"container/list",typ:$funcType([E,E],[E],false)},{prop:"insertValue",name:"insertValue",pkg:"container/list",typ:$funcType([$emptyInterface,E],[E],false)},{prop:"remove",name:"remove",pkg:"container/list",typ:$funcType([E],[E],false)},{prop:"Remove",name:"Remove",pkg:"",typ:$funcType([E],[$emptyInterface],false)},{prop:"PushFront",name:"PushFront",pkg:"",typ:$funcType([$emptyInterface],[E],false)},{prop:"PushBack",name:"PushBack",pkg:"",typ:$funcType([$emptyInterface],[E],false)},{prop:"InsertBefore",name:"InsertBefore",pkg:"",typ:$funcType([$emptyInterface,E],[E],false)},{prop:"InsertAfter",name:"InsertAfter",pkg:"",typ:$funcType([$emptyInterface,E],[E],false)},{prop:"MoveToFront",name:"MoveToFront",pkg:"",typ:$funcType([E],[],false)},{prop:"MoveToBack",name:"MoveToBack",pkg:"",typ:$funcType([E],[],false)},{prop:"MoveBefore",name:"MoveBefore",pkg:"",typ:$funcType([E,E],[],false)},{prop:"MoveAfter",name:"MoveAfter",pkg:"",typ:$funcType([E,E],[],false)},{prop:"PushBackList",name:"PushBackList",pkg:"",typ:$funcType([D],[],false)},{prop:"PushFrontList",name:"PushFrontList",pkg:"",typ:$funcType([D],[],false)}];��B.init("container/list",[{prop:"root",name:"root",exported:false,typ:A,tag:""},{prop:"len",name:"len",exported:false,typ:$Int,tag:""}]);Listcontainer/list.Dcontainer/list.Econtainer/list.Elementcontainer/list.List DD=$ptrType(B);Dcontainer/list.List EE=$ptrType(A);Econtainer/list.Element (*container/list.Element).Next��A.ptr.prototype.Next=function(){var $ptr,a,b;a=this;  �b=a.next;    if(!(a.list===D.nil)&&!(b===a.list.root)){  �return b;    }  return E.nil;    };A.prototype.Next=function(){return this.$val.Next();};Elementcontainer/list.Dcontainer/list.Econtainer/list.Elementcontainer/list.List (*container/list.Element).Prev��A.ptr.prototype.Prev=function(){var $ptr,a,b;a=this;  lb=a.prev;    if(!(a.list===D.nil)&&!(b===a.list.root)){  �return b;    }  �return E.nil;    };A.prototype.Prev=function(){return this.$val.Prev();};Elementcontainer/list.Dcontainer/list.Econtainer/list.Element (*container/list.List).Init��B.ptr.prototype.Init=function(){var $ptr,a;a=this;  a.root.next=a.root;  -a.root.prev=a.root;  Da.len=0;  Oreturn a;    };B.prototype.Init=function(){return this.$val.Init();};Listcontainer/list.List container/list.NewCoC=function(){var $ptr;  �return new B.ptr(new A.ptr(E.nil,E.nil,D.nil,$ifaceNil),0).Init();    };$pkg.New=C;Newcontainer/list.Dcontainer/list.Econtainer/list.Elementcontainer/list.Listcontainer/list.New (*container/list.List).Len~B.ptr.prototype.Len=function(){var $ptr,a;a=this;  return a.len;    };B.prototype.Len=function(){return this.$val.Len();};Listcontainer/list.List (*container/list.List).Front��B.ptr.prototype.Front=function(){var $ptr,a;a=this;    if(a.len===0){  �return E.nil;    }  �return a.root.next;    };B.prototype.Front=function(){return this.$val.Front();};Listcontainer/list.Econtainer/list.List (*container/list.List).Back��B.ptr.prototype.Back=function(){var $ptr,a;a=this;    if(a.len===0){  return E.nil;    }  )return a.root.prev;    };B.prototype.Back=function(){return this.$val.Back();};Listcontainer/list.Econtainer/list.List (*container/list.List).lazyInit��B.ptr.prototype.lazyInit=function(){var $ptr,a;a=this;    if(a.root.next===E.nil){  �a.Init();    }    };B.prototype.lazyInit=function(){return this.$val.lazyInit();};List	lazyInit~container/list.Econtainer/list.List (*container/list.List).insert��B.ptr.prototype.insert=function(a,b){var $ptr,a,b,c,d;c=this;  	(d=b.next;  	6b.next=a;  	Ca.prev=b;  	Pa.next=d;  	\d.prev=a;  	ha.list=c;  	tc.len=c.len+(1)>>0;  	}return a;    };B.prototype.insert=function(a,b){return this.$val.insert(a,b);};Listinsert~container/list.List "(*container/list.List).insertValue��B.ptr.prototype.insertValue=function(a,b){var $ptr,a,b,c;c=this;  
return c.insert(new A.ptr(E.nil,E.nil,D.nil,a),b);    };B.prototype.insertValue=function(a,b){return this.$val.insertValue(a,b);};ListinsertValue~container/list.Dcontainer/list.Econtainer/list.Elementcontainer/list.Listcontainer/list.insert~ (*container/list.List).remove�B.ptr.prototype.remove=function(a){var $ptr,a,b;b=this;  
�a.prev.next=a.next;  
�a.next.prev=a.prev;  
�a.next=E.nil;  a.prev=E.nil;  )a.list=D.nil;  7b.len=b.len-(1)>>0;  @return a;    };B.prototype.remove=function(a){return this.$val.remove(a);};Listremove~container/list.Dcontainer/list.Econtainer/list.List (*container/list.List).Remove��B.ptr.prototype.Remove=function(a){var $ptr,a,b;b=this;    if(a.list===b){  |b.remove(a);    }  �return a.Value;    };B.prototype.Remove=function(a){return this.$val.Remove(a);};Listcontainer/list.Listcontainer/list.remove~  (*container/list.List).PushFront��B.ptr.prototype.PushFront=function(a){var $ptr,a,b;b=this;  *b.lazyInit();  8return b.insertValue(a,b.root);    };B.prototype.PushFront=function(a){return this.$val.PushFront(a);};Listcontainer/list.Listcontainer/list.insertValue~container/list.lazyInit~ (*container/list.List).PushBack��B.ptr.prototype.PushBack=function(a){var $ptr,a,b;b=this;  �b.lazyInit();  �return b.insertValue(a,b.root.prev);    };B.prototype.PushBack=function(a){return this.$val.PushBack(a);};Listcontainer/list.Listcontainer/list.insertValue~container/list.lazyInit~ #(*container/list.List).InsertBefore��B.ptr.prototype.InsertBefore=function(a,b){var $ptr,a,b,c;c=this;    if(!(b.list===c)){  return E.nil;    }  Xreturn c.insertValue(a,b.prev);    };B.prototype.InsertBefore=function(a,b){return this.$val.InsertBefore(a,b);};Listcontainer/list.Econtainer/list.Listcontainer/list.insertValue~ "(*container/list.List).InsertAfter��B.ptr.prototype.InsertAfter=function(a,b){var $ptr,a,b,c;c=this;    if(!(b.list===c)){  preturn E.nil;    }  �return c.insertValue(a,b);    };B.prototype.InsertAfter=function(a,b){return this.$val.InsertAfter(a,b);};Listcontainer/list.Econtainer/list.Listcontainer/list.insertValue~ "(*container/list.List).MoveToFront��B.ptr.prototype.MoveToFront=function(a){var $ptr,a,b;b=this;    if(!(a.list===b)||b.root.next===a){  �return;    }  �b.insert(b.remove(a),b.root);    };B.prototype.MoveToFront=function(a){return this.$val.MoveToFront(a);};Listcontainer/list.Listcontainer/list.insert~container/list.remove~ !(*container/list.List).MoveToBack��B.ptr.prototype.MoveToBack=function(a){var $ptr,a,b;b=this;    if(!(a.list===b)||b.root.prev===a){  �return;    }  b.insert(b.remove(a),b.root.prev);    };B.prototype.MoveToBack=function(a){return this.$val.MoveToBack(a);};Listcontainer/list.Listcontainer/list.insert~container/list.remove~ !(*container/list.List).MoveBefore��B.ptr.prototype.MoveBefore=function(a,b){var $ptr,a,b,c;c=this;    if(!(a.list===c)||a===b||!(b.list===c)){  return;    }  %c.insert(c.remove(a),b.prev);    };B.prototype.MoveBefore=function(a,b){return this.$val.MoveBefore(a,b);};Listcontainer/list.Listcontainer/list.insert~container/list.remove~  (*container/list.List).MoveAfter��B.ptr.prototype.MoveAfter=function(a,b){var $ptr,a,b,c;c=this;    if(!(a.list===c)||a===b||!(b.list===c)){  6return;    }  Ac.insert(c.remove(a),b);    };B.prototype.MoveAfter=function(a,b){return this.$val.MoveAfter(a,b);};Listcontainer/list.Listcontainer/list.insert~container/list.remove~ #(*container/list.List).PushBackList�5B.ptr.prototype.PushBackList=function(a){var $ptr,a,b,c,d,e,f,g,h;b=this;  �b.lazyInit();  c=a.Len();d=a.Front();e=c;f=d;while(true){if(!(e>0)){break;}  Sb.insertValue(f.Value,b.root.prev);  :g=e-1>>0;h=f.Next();e=g;f=h;}    };B.prototype.PushBackList=function(a){return this.$val.PushBackList(a);};Listcontainer/list.Listcontainer/list.insertValue~container/list.lazyInit~ $(*container/list.List).PushFrontList�2B.ptr.prototype.PushFrontList=function(a){var $ptr,a,b,c,d,e,f,g,h;b=this;  b.lazyInit();  /c=a.Len();d=a.Back();e=c;f=d;while(true){if(!(e>0)){break;}  rb.insertValue(f.Value,b.root);  Yg=e-1>>0;h=f.Prev();e=g;f=h;}    };B.prototype.PushFrontList=function(a){return this.$val.PushFrontList(a);};Listcontainer/list.Listcontainer/list.insertValue~container/list.lazyInit~ ��{"Base":6040,"Files":[{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\goroot\\src\\container\\list\\list.go","Base":1,"Size":6038,"Lines":[0,55,109,159,160,209,212,260,308,341,346,349,362,363,406,428,498,569,639,710,735,756,757,801,813,814,854,873,875,876,922,958,1012,1023,1026,1038,1040,1041,1091,1127,1181,1192,1195,1207,1209,1210,1251,1309,1328,1414,1485,1487,1488,1526,1556,1579,1602,1613,1623,1625,1626,1662,1707,1708,1757,1784,1826,1827,1880,1914,1931,1944,1947,1967,1969,1970,2021,2054,2071,2084,2087,2107,2109,2110,2160,2188,2213,2224,2227,2229,2230,2293,2342,2356,2369,2382,2394,2406,2418,2427,2437,2439,2440,2516,2582,2623,2625,2626,2694,2739,2761,2783,2819,2855,2869,2878,2888,2890,2891,2948,2989,3037,3055,3125,3193,3207,3210,3226,3228,3229,3317,3368,3382,3416,3418,3419,3505,3555,3569,3607,3609,3610,3702,3763,3832,3853,3866,3869,3926,3962,3964,3965,4055,4116,4184,4205,4218,4221,4278,4309,4311,4312,4367,4425,4466,4504,4513,4516,4573,4605,4607,4608,4661,4719,4759,4797,4806,4809,4866,4902,4904,4905,4968,5048,5094,5143,5152,5155,5189,5191,5192,5253,5333,5378,5427,5436,5439,5468,5470,5471,5542,5584,5627,5641,5712,5750,5753,5755,5756,5829,5871,5915,5929,5999,6033,6036],"Infos":null}]}
 
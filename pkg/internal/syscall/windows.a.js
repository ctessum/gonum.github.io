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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ��)��internal/syscall/windowswindowsinternal/syscall/windows/sysdllsyscall�A
$$ exports $$
pv0windows0internal/syscall/windows�	*AdjustTokenPrivileges 
token
Tokensyscallsyscall

Closet:  6 getInfot:
classinitSize 0 6 GetTokenUsert:  TokenuserUser SIDAndAttributesSidSID StringsidN    6 LensidN   CopysidN  N 6 LookupAccountsidNsystem account domain accTypeerr6  Attributes     6 (GetTokenPrimaryGroupt:  "TokenprimarygroupPrimaryGroupN   6 .GetUserProfileDirectoryt:    6 (disableAllPrivileges newstate TOKEN_PRIVILEGES PrivilegeCount Privileges&LUID_AND_ATTRIBUTES LuidLUID LowPart HighPart   Attributes    buflenprevstaterreturnlen 6 *ComputerNameDnsDomain$!:ComputerNameDnsFullyQualified$!.ComputerNameDnsHostname$!ComputerNameMax$!&ComputerNameNetBIOS$! :ComputerNamePhysicalDnsDomain$!JComputerNamePhysicalDnsFullyQualified$!>ComputerNamePhysicalDnsHostname$!
6ComputerNamePhysicalNetBIOS$!8ERROR_NO_UNICODE_TRANSLATION
Errno
Errore�    Temporarye�    Timeoute�    !�.ERROR_SHARING_VIOLATION�!@.FSCTL_SET_REPARSE_POINT$!ȂH.GAA_FLAG_INCLUDE_PREFIX$! 	GetACP  acp 	(GetAdaptersAddresses 
family
flagsreserved adapterAddresses$IpAdapterAddresses (Length IfIndex Next� AdapterName2 &FirstUnicastAddress.IpAdapterUnicastAddress Length 
Flags Next� AddressSocketAddress SockaddrRawSockaddrAnyAddrRawSockaddrFamily Data   Pad� Sockaddrrsa�  Sockaddr sockaddr  ptr0lenerr6   6  SockaddrLength   PrefixOrigin SuffixOrigin DadState ValidLifetime "PreferredLifetime LeaseLifetime $OnLinkPrefixLength   &FirstAnycastAddress.IpAdapterAnycastAddress Length 
Flags Next� Address�   *FirstMulticastAddress2IpAdapterMulticastAddress Length 
Flags Next� Address�   *FirstDnsServerAddress2IpAdapterDnsServerAdapter Length Reserved Next� Address�   DnsSuffix Description FriendlyName PhysicalAddress2 *PhysicalAddressLength 
Flags Mtu IfType OperStatus Ipv6IfIndex ZoneIndices  FirstPrefixIpAdapterPrefix 
Length 
Flags Next� Address� PrefixLength    sizePointererrcode6 	"GetComputerNameEx nameformatbufnerr6 	GetConsoleCP  ccp 	 GetCurrentThread  pseudoHandleHandle err6 	"GetModuleFileName module�fnlennerr6 IF_TYPE_ATM$!J.IF_TYPE_ETHERNET_CSMACD$! IF_TYPE_IEEE1394$!�"IF_TYPE_IEEE80211$!�4IF_TYPE_ISO88025_TOKENRING$!IF_TYPE_OTHER$!IF_TYPE_PPP$!.2IF_TYPE_SOFTWARE_LOOPBACK$!0IF_TYPE_TUNNEL$!�4IO_REPARSE_TAG_MOUNT_POINT$!����&IfOperStatusDormant$!
 IfOperStatusDown$!4IfOperStatusLowerLayerDown$!,IfOperStatusNotPresent$!&IfOperStatusTesting$!&IfOperStatusUnknown$!IfOperStatusUp$!	ImpersonateSelf $impersonationlevelerr6 ������|x	(LookupPrivilegeValue systemnamenameluid|err6 (MB_ERR_INVALID_CHARS$!*MOVEFILE_COPY_ALLOWED$!0MOVEFILE_CREATE_HARDLINK$! 6MOVEFILE_DELAY_UNTIL_REBOOT$!<MOVEFILE_FAIL_IF_NOT_TRACKABLE$!@2MOVEFILE_REPLACE_EXISTING$!,MOVEFILE_WRITE_THROUGH$!.MountPointReparseBuffer 
(SubstituteNameOffset (SubstituteNameLength PrintNameOffset PrintNameLength PathBuffer  	MoveFileEx fromto
flagserr6 	&MultiByteToWideChar codePagedwFlagsstr2nstr
wcharnwcharnwriteerr6 	NetShareAdd serverName
levelbuf2parmErrneterr6 	NetShareDel serverNamenetNamereservedneterr6 	OpenThreadToken h�accessopenasself 
token:err6 4REPARSE_DATA_BUFFER_HEADER ReparseTag "ReparseDataLength Reserved  	Rename oldpath newpath  6 	RevertToSelf  err6 (SE_PRIVILEGE_ENABLED$!SHARE_INFO_2 Netname Type Remark Permissions MaxUses CurrentUses Path Passwd  STYPE_DISKTREE$! *SYMLINK_FLAG_RELATIVE$!"SecurityAnonymous$! $SecurityDelegation$!,SecurityIdentification$!*SecurityImpersonation$!�2SymbolicLinkReparseBuffer (SubstituteNameOffset (SubstituteNameLength PrintNameOffset PrintNameLength 
Flags PathBuffer  .TOKEN_ADJUST_PRIVILEGES$!@rWB/B=$packages["internal/syscall/windows/sysdll"];a    $r=B.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["syscall"];a    $r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} C��C=$pkg.REPARSE_DATA_BUFFER_HEADER=$newType(0,$kindStruct,"windows.REPARSE_DATA_BUFFER_HEADER",true,"internal/syscall/windows",true,function(ReparseTag_,ReparseDataLength_,Reserved_){this.$val=this;if(arguments.length===0){this.ReparseTag=0;this.ReparseDataLength=0;this.Reserved=0;return;}this.ReparseTag=ReparseTag_;this.ReparseDataLength=ReparseDataLength_;this.Reserved=Reserved_;});��C.init("",[{prop:"ReparseTag",name:"ReparseTag",exported:true,typ:$Uint32,tag:""},{prop:"ReparseDataLength",name:"ReparseDataLength",exported:true,typ:$Uint16,tag:""},{prop:"Reserved",name:"Reserved",exported:true,typ:$Uint16,tag:""}]);REPARSE_DATA_BUFFER_HEADER3internal/syscall/windows.REPARSE_DATA_BUFFER_HEADER D��D=$pkg.SymbolicLinkReparseBuffer=$newType(0,$kindStruct,"windows.SymbolicLinkReparseBuffer",true,"internal/syscall/windows",true,function(SubstituteNameOffset_,SubstituteNameLength_,PrintNameOffset_,PrintNameLength_,Flags_,PathBuffer_){this.$val=this;if(arguments.length===0){this.SubstituteNameOffset=0;this.SubstituteNameLength=0;this.PrintNameOffset=0;this.PrintNameLength=0;this.Flags=0;this.PathBuffer=BC.zero();return;}this.SubstituteNameOffset=SubstituteNameOffset_;this.SubstituteNameLength=SubstituteNameLength_;this.PrintNameOffset=PrintNameOffset_;this.PrintNameLength=PrintNameLength_;this.Flags=Flags_;this.PathBuffer=PathBuffer_;});��D.init("",[{prop:"SubstituteNameOffset",name:"SubstituteNameOffset",exported:true,typ:$Uint16,tag:""},{prop:"SubstituteNameLength",name:"SubstituteNameLength",exported:true,typ:$Uint16,tag:""},{prop:"PrintNameOffset",name:"PrintNameOffset",exported:true,typ:$Uint16,tag:""},{prop:"PrintNameLength",name:"PrintNameLength",exported:true,typ:$Uint16,tag:""},{prop:"Flags",name:"Flags",exported:true,typ:$Uint32,tag:""},{prop:"PathBuffer",name:"PathBuffer",exported:true,typ:BC,tag:""}]);SymbolicLinkReparseBufferinternal/syscall/windows.BC2internal/syscall/windows.SymbolicLinkReparseBuffer E�\E=$pkg.MountPointReparseBuffer=$newType(0,$kindStruct,"windows.MountPointReparseBuffer",true,"internal/syscall/windows",true,function(SubstituteNameOffset_,SubstituteNameLength_,PrintNameOffset_,PrintNameLength_,PathBuffer_){this.$val=this;if(arguments.length===0){this.SubstituteNameOffset=0;this.SubstituteNameLength=0;this.PrintNameOffset=0;this.PrintNameLength=0;this.PathBuffer=BC.zero();return;}this.SubstituteNameOffset=SubstituteNameOffset_;this.SubstituteNameLength=SubstituteNameLength_;this.PrintNameOffset=PrintNameOffset_;this.PrintNameLength=PrintNameLength_;this.PathBuffer=PathBuffer_;});��E.init("",[{prop:"SubstituteNameOffset",name:"SubstituteNameOffset",exported:true,typ:$Uint16,tag:""},{prop:"SubstituteNameLength",name:"SubstituteNameLength",exported:true,typ:$Uint16,tag:""},{prop:"PrintNameOffset",name:"PrintNameOffset",exported:true,typ:$Uint16,tag:""},{prop:"PrintNameLength",name:"PrintNameLength",exported:true,typ:$Uint16,tag:""},{prop:"PathBuffer",name:"PathBuffer",exported:true,typ:BC,tag:""}]);MountPointReparseBufferinternal/syscall/windows.BC0internal/syscall/windows.MountPointReparseBuffer F��F=$pkg.LUID=$newType(0,$kindStruct,"windows.LUID",true,"internal/syscall/windows",true,function(LowPart_,HighPart_){this.$val=this;if(arguments.length===0){this.LowPart=0;this.HighPart=0;return;}this.LowPart=LowPart_;this.HighPart=HighPart_;});��F.init("",[{prop:"LowPart",name:"LowPart",exported:true,typ:$Uint32,tag:""},{prop:"HighPart",name:"HighPart",exported:true,typ:$Int32,tag:""}]);LUIDinternal/syscall/windows.LUID G�G=$pkg.LUID_AND_ATTRIBUTES=$newType(0,$kindStruct,"windows.LUID_AND_ATTRIBUTES",true,"internal/syscall/windows",true,function(Luid_,Attributes_){this.$val=this;if(arguments.length===0){this.Luid=new F.ptr(0,0);this.Attributes=0;return;}this.Luid=Luid_;this.Attributes=Attributes_;});��G.init("",[{prop:"Luid",name:"Luid",exported:true,typ:F,tag:""},{prop:"Attributes",name:"Attributes",exported:true,typ:$Uint32,tag:""}]);LUID_AND_ATTRIBUTESinternal/syscall/windows.LUID,internal/syscall/windows.LUID_AND_ATTRIBUTES H�8H=$pkg.TOKEN_PRIVILEGES=$newType(0,$kindStruct,"windows.TOKEN_PRIVILEGES",true,"internal/syscall/windows",true,function(PrivilegeCount_,Privileges_){this.$val=this;if(arguments.length===0){this.PrivilegeCount=0;this.Privileges=BD.zero();return;}this.PrivilegeCount=PrivilegeCount_;this.Privileges=Privileges_;});��H.init("",[{prop:"PrivilegeCount",name:"PrivilegeCount",exported:true,typ:$Uint32,tag:""},{prop:"Privileges",name:"Privileges",exported:true,typ:BD,tag:""}]);TOKEN_PRIVILEGESinternal/syscall/windows.BDinternal/syscall/windows.LUID,internal/syscall/windows.LUID_AND_ATTRIBUTES)internal/syscall/windows.TOKEN_PRIVILEGES J�'J=$pkg.SocketAddress=$newType(0,$kindStruct,"windows.SocketAddress",true,"internal/syscall/windows",true,function(Sockaddr_,SockaddrLength_){this.$val=this;if(arguments.length===0){this.Sockaddr=BE.nil;this.SockaddrLength=0;return;}this.Sockaddr=Sockaddr_;this.SockaddrLength=SockaddrLength_;});��J.init("",[{prop:"Sockaddr",name:"Sockaddr",exported:true,typ:BE,tag:""},{prop:"SockaddrLength",name:"SockaddrLength",exported:true,typ:$Int32,tag:""}]);SocketAddressinternal/syscall/windows.BE&internal/syscall/windows.SocketAddresssyscall.RawSockaddrAny K�cK=$pkg.IpAdapterUnicastAddress=$newType(0,$kindStruct,"windows.IpAdapterUnicastAddress",true,"internal/syscall/windows",true,function(Length_,Flags_,Next_,Address_,PrefixOrigin_,SuffixOrigin_,DadState_,ValidLifetime_,PreferredLifetime_,LeaseLifetime_,OnLinkPrefixLength_){this.$val=this;if(arguments.length===0){this.Length=0;this.Flags=0;this.Next=BF.nil;this.Address=new J.ptr(BE.nil,0);this.PrefixOrigin=0;this.SuffixOrigin=0;this.DadState=0;this.ValidLifetime=0;this.PreferredLifetime=0;this.LeaseLifetime=0;this.OnLinkPrefixLength=0;return;}this.Length=Length_;this.Flags=Flags_;this.Next=Next_;this.Address=Address_;this.PrefixOrigin=PrefixOrigin_;this.SuffixOrigin=SuffixOrigin_;this.DadState=DadState_;this.ValidLifetime=ValidLifetime_;this.PreferredLifetime=PreferredLifetime_;this.LeaseLifetime=LeaseLifetime_;this.OnLinkPrefixLength=OnLinkPrefixLength_;});�K.init("",[{prop:"Length",name:"Length",exported:true,typ:$Uint32,tag:""},{prop:"Flags",name:"Flags",exported:true,typ:$Uint32,tag:""},{prop:"Next",name:"Next",exported:true,typ:BF,tag:""},{prop:"Address",name:"Address",exported:true,typ:J,tag:""},{prop:"PrefixOrigin",name:"PrefixOrigin",exported:true,typ:$Int32,tag:""},{prop:"SuffixOrigin",name:"SuffixOrigin",exported:true,typ:$Int32,tag:""},{prop:"DadState",name:"DadState",exported:true,typ:$Int32,tag:""},{prop:"ValidLifetime",name:"ValidLifetime",exported:true,typ:$Uint32,tag:""},{prop:"PreferredLifetime",name:"PreferredLifetime",exported:true,typ:$Uint32,tag:""},{prop:"LeaseLifetime",name:"LeaseLifetime",exported:true,typ:$Uint32,tag:""},{prop:"OnLinkPrefixLength",name:"OnLinkPrefixLength",exported:true,typ:$Uint8,tag:""}]);IpAdapterUnicastAddressinternal/syscall/windows.BEinternal/syscall/windows.BF0internal/syscall/windows.IpAdapterUnicastAddress&internal/syscall/windows.SocketAddress L�qL=$pkg.IpAdapterAnycastAddress=$newType(0,$kindStruct,"windows.IpAdapterAnycastAddress",true,"internal/syscall/windows",true,function(Length_,Flags_,Next_,Address_){this.$val=this;if(arguments.length===0){this.Length=0;this.Flags=0;this.Next=BG.nil;this.Address=new J.ptr(BE.nil,0);return;}this.Length=Length_;this.Flags=Flags_;this.Next=Next_;this.Address=Address_;});��L.init("",[{prop:"Length",name:"Length",exported:true,typ:$Uint32,tag:""},{prop:"Flags",name:"Flags",exported:true,typ:$Uint32,tag:""},{prop:"Next",name:"Next",exported:true,typ:BG,tag:""},{prop:"Address",name:"Address",exported:true,typ:J,tag:""}]);IpAdapterAnycastAddressinternal/syscall/windows.BEinternal/syscall/windows.BG0internal/syscall/windows.IpAdapterAnycastAddress&internal/syscall/windows.SocketAddress M�uM=$pkg.IpAdapterMulticastAddress=$newType(0,$kindStruct,"windows.IpAdapterMulticastAddress",true,"internal/syscall/windows",true,function(Length_,Flags_,Next_,Address_){this.$val=this;if(arguments.length===0){this.Length=0;this.Flags=0;this.Next=BH.nil;this.Address=new J.ptr(BE.nil,0);return;}this.Length=Length_;this.Flags=Flags_;this.Next=Next_;this.Address=Address_;});��M.init("",[{prop:"Length",name:"Length",exported:true,typ:$Uint32,tag:""},{prop:"Flags",name:"Flags",exported:true,typ:$Uint32,tag:""},{prop:"Next",name:"Next",exported:true,typ:BH,tag:""},{prop:"Address",name:"Address",exported:true,typ:J,tag:""}]);IpAdapterMulticastAddressinternal/syscall/windows.BEinternal/syscall/windows.BH2internal/syscall/windows.IpAdapterMulticastAddress&internal/syscall/windows.SocketAddress N��N=$pkg.IpAdapterDnsServerAdapter=$newType(0,$kindStruct,"windows.IpAdapterDnsServerAdapter",true,"internal/syscall/windows",true,function(Length_,Reserved_,Next_,Address_){this.$val=this;if(arguments.length===0){this.Length=0;this.Reserved=0;this.Next=BI.nil;this.Address=new J.ptr(BE.nil,0);return;}this.Length=Length_;this.Reserved=Reserved_;this.Next=Next_;this.Address=Address_;});� N.init("",[{prop:"Length",name:"Length",exported:true,typ:$Uint32,tag:""},{prop:"Reserved",name:"Reserved",exported:true,typ:$Uint32,tag:""},{prop:"Next",name:"Next",exported:true,typ:BI,tag:""},{prop:"Address",name:"Address",exported:true,typ:J,tag:""}]);IpAdapterDnsServerAdapterinternal/syscall/windows.BEinternal/syscall/windows.BI2internal/syscall/windows.IpAdapterDnsServerAdapter&internal/syscall/windows.SocketAddress O��O=$pkg.IpAdapterPrefix=$newType(0,$kindStruct,"windows.IpAdapterPrefix",true,"internal/syscall/windows",true,function(Length_,Flags_,Next_,Address_,PrefixLength_){this.$val=this;if(arguments.length===0){this.Length=0;this.Flags=0;this.Next=BJ.nil;this.Address=new J.ptr(BE.nil,0);this.PrefixLength=0;return;}this.Length=Length_;this.Flags=Flags_;this.Next=Next_;this.Address=Address_;this.PrefixLength=PrefixLength_;});�EO.init("",[{prop:"Length",name:"Length",exported:true,typ:$Uint32,tag:""},{prop:"Flags",name:"Flags",exported:true,typ:$Uint32,tag:""},{prop:"Next",name:"Next",exported:true,typ:BJ,tag:""},{prop:"Address",name:"Address",exported:true,typ:J,tag:""},{prop:"PrefixLength",name:"PrefixLength",exported:true,typ:$Uint32,tag:""}]);IpAdapterPrefixinternal/syscall/windows.BEinternal/syscall/windows.BJ(internal/syscall/windows.IpAdapterPrefix&internal/syscall/windows.SocketAddress P��P=$pkg.IpAdapterAddresses=$newType(0,$kindStruct,"windows.IpAdapterAddresses",true,"internal/syscall/windows",true,function(Length_,IfIndex_,Next_,AdapterName_,FirstUnicastAddress_,FirstAnycastAddress_,FirstMulticastAddress_,FirstDnsServerAddress_,DnsSuffix_,Description_,FriendlyName_,PhysicalAddress_,PhysicalAddressLength_,Flags_,Mtu_,IfType_,OperStatus_,Ipv6IfIndex_,ZoneIndices_,FirstPrefix_){this.$val=this;if(arguments.length===0){this.Length=0;this.IfIndex=0;this.Next=BK.nil;this.AdapterName=BL.nil;this.FirstUnicastAddress=BF.nil;this.FirstAnycastAddress=BG.nil;this.FirstMulticastAddress=BH.nil;this.FirstDnsServerAddress=BI.nil;this.DnsSuffix=BM.nil;this.Description=BM.nil;this.FriendlyName=BM.nil;this.PhysicalAddress=BN.zero();this.PhysicalAddressLength=0;this.Flags=0;this.Mtu=0;this.IfType=0;this.OperStatus=0;this.Ipv6IfIndex=0;this.ZoneIndices=BO.zero();this.FirstPrefix=BJ.nil;return;}this.Length=Length_;this.IfIndex=IfIndex_;this.Next=Next_;this.AdapterName=AdapterName_;this.FirstUnicastAddress=FirstUnicastAddress_;this.FirstAnycastAddress=FirstAnycastAddress_;this.FirstMulticastAddress=FirstMulticastAddress_;this.FirstDnsServerAddress=FirstDnsServerAddress_;this.DnsSuffix=DnsSuffix_;this.Description=Description_;this.FriendlyName=FriendlyName_;this.PhysicalAddress=PhysicalAddress_;this.PhysicalAddressLength=PhysicalAddressLength_;this.Flags=Flags_;this.Mtu=Mtu_;this.IfType=IfType_;this.OperStatus=OperStatus_;this.Ipv6IfIndex=Ipv6IfIndex_;this.ZoneIndices=ZoneIndices_;this.FirstPrefix=FirstPrefix_;});��P.init("",[{prop:"Length",name:"Length",exported:true,typ:$Uint32,tag:""},{prop:"IfIndex",name:"IfIndex",exported:true,typ:$Uint32,tag:""},{prop:"Next",name:"Next",exported:true,typ:BK,tag:""},{prop:"AdapterName",name:"AdapterName",exported:true,typ:BL,tag:""},{prop:"FirstUnicastAddress",name:"FirstUnicastAddress",exported:true,typ:BF,tag:""},{prop:"FirstAnycastAddress",name:"FirstAnycastAddress",exported:true,typ:BG,tag:""},{prop:"FirstMulticastAddress",name:"FirstMulticastAddress",exported:true,typ:BH,tag:""},{prop:"FirstDnsServerAddress",name:"FirstDnsServerAddress",exported:true,typ:BI,tag:""},{prop:"DnsSuffix",name:"DnsSuffix",exported:true,typ:BM,tag:""},{prop:"Description",name:"Description",exported:true,typ:BM,tag:""},{prop:"FriendlyName",name:"FriendlyName",exported:true,typ:BM,tag:""},{prop:"PhysicalAddress",name:"PhysicalAddress",exported:true,typ:BN,tag:""},{prop:"PhysicalAddressLength",name:"PhysicalAddressLength",exported:true,typ:$Uint32,tag:""},{prop:"Flags",name:"Flags",exported:true,typ:$Uint32,tag:""},{prop:"Mtu",name:"Mtu",exported:true,typ:$Uint32,tag:""},{prop:"IfType",name:"IfType",exported:true,typ:$Uint32,tag:""},{prop:"OperStatus",name:"OperStatus",exported:true,typ:$Uint32,tag:""},{prop:"Ipv6IfIndex",name:"Ipv6IfIndex",exported:true,typ:$Uint32,tag:""},{prop:"ZoneIndices",name:"ZoneIndices",exported:true,typ:BO,tag:""},{prop:"FirstPrefix",name:"FirstPrefix",exported:true,typ:BJ,tag:""}]);IpAdapterAddressesinternal/syscall/windows.BFinternal/syscall/windows.BGinternal/syscall/windows.BHinternal/syscall/windows.BIinternal/syscall/windows.BJinternal/syscall/windows.BKinternal/syscall/windows.BLinternal/syscall/windows.BMinternal/syscall/windows.BNinternal/syscall/windows.BO+internal/syscall/windows.IpAdapterAddresses R�(R=$pkg.SHARE_INFO_2=$newType(0,$kindStruct,"windows.SHARE_INFO_2",true,"internal/syscall/windows",true,function(Netname_,Type_,Remark_,Permissions_,MaxUses_,CurrentUses_,Path_,Passwd_){this.$val=this;if(arguments.length===0){this.Netname=BM.nil;this.Type=0;this.Remark=BM.nil;this.Permissions=0;this.MaxUses=0;this.CurrentUses=0;this.Path=BM.nil;this.Passwd=BM.nil;return;}this.Netname=Netname_;this.Type=Type_;this.Remark=Remark_;this.Permissions=Permissions_;this.MaxUses=MaxUses_;this.CurrentUses=CurrentUses_;this.Path=Path_;this.Passwd=Passwd_;});�R.init("",[{prop:"Netname",name:"Netname",exported:true,typ:BM,tag:""},{prop:"Type",name:"Type",exported:true,typ:$Uint32,tag:""},{prop:"Remark",name:"Remark",exported:true,typ:BM,tag:""},{prop:"Permissions",name:"Permissions",exported:true,typ:$Uint32,tag:""},{prop:"MaxUses",name:"MaxUses",exported:true,typ:$Uint32,tag:""},{prop:"CurrentUses",name:"CurrentUses",exported:true,typ:$Uint32,tag:""},{prop:"Path",name:"Path",exported:true,typ:BM,tag:""},{prop:"Passwd",name:"Passwd",exported:true,typ:BM,tag:""}]);SHARE_INFO_2internal/syscall/windows.BM%internal/syscall/windows.SHARE_INFO_2 BCBC=$arrayType($Uint16,1);BC BDBD=$arrayType(G,1);BD,internal/syscall/windows.LUID_AND_ATTRIBUTES BEBE=$ptrType(A.RawSockaddrAny);BEsyscall.RawSockaddrAny BFBF=$ptrType(K);BF0internal/syscall/windows.IpAdapterUnicastAddress BGBG=$ptrType(L);BG0internal/syscall/windows.IpAdapterAnycastAddress BHBH=$ptrType(M);BH2internal/syscall/windows.IpAdapterMulticastAddress BIBI=$ptrType(N);BI2internal/syscall/windows.IpAdapterDnsServerAdapter BJBJ=$ptrType(O);BJ(internal/syscall/windows.IpAdapterPrefix BKBK=$ptrType(P);BK+internal/syscall/windows.IpAdapterAddresses BLBL=$ptrType($Uint8);BL BMBM=$ptrType($Uint16);BM BNBN=$arrayType($Uint8,8);BN BOBO=$arrayType($Uint32,16);BO SerrERROR_IO_PENDING Umodiphlpapi Vmodkernel32 Wmodnetapi32 Xmodadvapi32 YprocGetAdaptersAddresses ZprocGetComputerNameExW AAprocMoveFileExW ABprocGetModuleFileNameW AC
procGetACP ADprocGetConsoleCP AEprocMultiByteToWideChar AFprocGetCurrentThread AGprocNetShareAdd AHprocNetShareDel AIprocImpersonateSelf AJprocRevertToSelf AKprocOpenThreadToken ALprocLookupPrivilegeValueW AMprocAdjustTokenPrivileges     S=new A.Errno(997);errERROR_IO_PENDING,internal/syscall/windows.errERROR_IO_PENDINGsyscall.Errno +    U=A.NewLazyDLL(B.Add("iphlpapi.dll"));$internal/syscall/windows.modiphlpapi#internal/syscall/windows/sysdll.Addsyscall.NewLazyDLL +    V=A.NewLazyDLL(B.Add("kernel32.dll"));$internal/syscall/windows.modkernel32#internal/syscall/windows/sysdll.Addsyscall.NewLazyDLL +    W=A.NewLazyDLL(B.Add("netapi32.dll"));$internal/syscall/windows.modnetapi32#internal/syscall/windows/sysdll.Addsyscall.NewLazyDLL +    X=A.NewLazyDLL(B.Add("advapi32.dll"));$internal/syscall/windows.modadvapi32#internal/syscall/windows/sysdll.Addsyscall.NewLazyDLL )    Y=U.NewProc("GetAdaptersAddresses");$internal/syscall/windows.modiphlpapi1internal/syscall/windows.procGetAdaptersAddresses '    Z=V.NewProc("GetComputerNameExW");$internal/syscall/windows.modkernel32/internal/syscall/windows.procGetComputerNameExW !    AA=V.NewProc("MoveFileExW");$internal/syscall/windows.modkernel32(internal/syscall/windows.procMoveFileExW (    AB=V.NewProc("GetModuleFileNameW");$internal/syscall/windows.modkernel32/internal/syscall/windows.procGetModuleFileNameW     AC=V.NewProc("GetACP");$internal/syscall/windows.modkernel32#internal/syscall/windows.procGetACP "    AD=V.NewProc("GetConsoleCP");$internal/syscall/windows.modkernel32)internal/syscall/windows.procGetConsoleCP )    AE=V.NewProc("MultiByteToWideChar");$internal/syscall/windows.modkernel320internal/syscall/windows.procMultiByteToWideChar &    AF=V.NewProc("GetCurrentThread");$internal/syscall/windows.modkernel32-internal/syscall/windows.procGetCurrentThread !    AG=W.NewProc("NetShareAdd");$internal/syscall/windows.modnetapi32(internal/syscall/windows.procNetShareAdd !    AH=W.NewProc("NetShareDel");$internal/syscall/windows.modnetapi32(internal/syscall/windows.procNetShareDel %    AI=X.NewProc("ImpersonateSelf");$internal/syscall/windows.modadvapi32,internal/syscall/windows.procImpersonateSelf "    AJ=X.NewProc("RevertToSelf");$internal/syscall/windows.modadvapi32)internal/syscall/windows.procRevertToSelf %    AK=X.NewProc("OpenThreadToken");$internal/syscall/windows.modadvapi32,internal/syscall/windows.procOpenThreadToken +    AL=X.NewProc("LookupPrivilegeValueW");$internal/syscall/windows.modadvapi322internal/syscall/windows.procLookupPrivilegeValueW +    AM=X.NewProc("AdjustTokenPrivileges");$internal/syscall/windows.modadvapi322internal/syscall/windows.procAdjustTokenPrivileges .internal/syscall/windows.AdjustTokenPrivilegesI��I=function(a,b,c,d,e,f){var $ptr,a,b,c,d,e,f,g,h,i;  Yg=BB(a,b,c,d,e,f);h=g[0];i=g[1];    if(h===0){  �return i;    }    if($interfaceIsEqual(i,new A.Errno(536870951))){  vreturn $ifaceNil;    }  �return i;    };$pkg.AdjustTokenPrivileges=I;AdjustTokenPrivileges.internal/syscall/windows.AdjustTokenPrivileges.internal/syscall/windows.adjustTokenPrivilegessyscall.Errno internal/syscall/windows.RenameQ�*Q=function(a,b){var $ptr,a,b,c,d,e,f,g;   �c=A.UTF16PtrFromString(a);d=c[0];e=c[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  ! return e;    }  !f=A.UTF16PtrFromString(b);g=f[0];e=f[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  !Qreturn e;    }  !`return AP(d,g,1);    };$pkg.Rename=Q;Rename#internal/syscall/windows.MoveFileExinternal/syscall/windows.Renamesyscall.UTF16PtrFromString !internal/syscall/windows.errnoErrT��T=function(a){var $ptr,a,b;    b=a;    if(b===(0)){  &�return $ifaceNil;    }else if(b===(997)){  'return S;    }  '�return new A.Errno(a);    };errnoErr,internal/syscall/windows.errERROR_IO_PENDING!internal/syscall/windows.errnoErrsyscall.Errno -internal/syscall/windows.GetAdaptersAddressesAN��AN=function(a,b,c,d,e){var $ptr,a,b,c,d,e,f,g,h;f=$ifaceNil;  -Og=A.Syscall6(Y.Addr(),5,(a>>>0),(b>>>0),c,d,e,0);h=g[0];    if(!((h===0))){  .(f=new A.Errno((h>>>0));    }  .Hreturn f;    };$pkg.GetAdaptersAddresses=AN;GetAdaptersAddresses-internal/syscall/windows.GetAdaptersAddresses1internal/syscall/windows.procGetAdaptersAddressessyscall.Errnosyscall.Syscall6 *internal/syscall/windows.GetComputerNameExAO� AO=function(a,b,c){var $ptr,a,b,c,d,e,f,g;d=$ifaceNil;  .�e=A.Syscall(Z.Addr(),3,(a>>>0),b,c);f=e[0];g=e[2];    if(f===0){    if(!((g===0))){  /Qd=T(g);    }else{  /rd=new A.Errno(536870951);    }    }  /�return d;    };$pkg.GetComputerNameEx=AO;GetComputerNameEx*internal/syscall/windows.GetComputerNameEx!internal/syscall/windows.errnoErr/internal/syscall/windows.procGetComputerNameExWsyscall.Errnosyscall.Syscall #internal/syscall/windows.MoveFileExAP��AP=function(a,b,c){var $ptr,a,b,c,d,e,f,g;d=$ifaceNil;  /�e=A.Syscall(AA.Addr(),3,a,b,(c>>>0));f=e[0];g=e[2];    if(f===0){    if(!((g===0))){  0�d=T(g);    }else{  0�d=new A.Errno(536870951);    }    }  0�return d;    };$pkg.MoveFileEx=AP;
MoveFileEx#internal/syscall/windows.MoveFileEx!internal/syscall/windows.errnoErr(internal/syscall/windows.procMoveFileExWsyscall.Errnosyscall.Syscall *internal/syscall/windows.GetModuleFileNameAQ�AQ=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h;d=0;e=$ifaceNil;  1+f=A.Syscall(AB.Addr(),3,(a>>>0),b,(c>>>0));g=f[0];h=f[2];  1�d=(g>>>0);    if(d===0){    if(!((h===0))){  1�e=T(h);    }else{  1�e=new A.Errno(536870951);    }    }  2return[d,e];    };$pkg.GetModuleFileName=AQ;GetModuleFileName*internal/syscall/windows.GetModuleFileName!internal/syscall/windows.errnoErr/internal/syscall/windows.procGetModuleFileNameWsyscall.Errnosyscall.Syscall internal/syscall/windows.GetACPARAR=function(){var $ptr,a,b,c;a=0;  2;b=A.Syscall(AC.Addr(),0,0,0,0);c=b[0];  2wa=(c>>>0);  2�return a;    };$pkg.GetACP=AR;GetACPinternal/syscall/windows.GetACP#internal/syscall/windows.procGetACPsyscall.Syscall %internal/syscall/windows.GetConsoleCPAS��AS=function(){var $ptr,a,b,c;a=0;  2�b=A.Syscall(AD.Addr(),0,0,0,0);c=b[0];  2�a=(c>>>0);  3return a;    };$pkg.GetConsoleCP=AS;GetConsoleCP%internal/syscall/windows.GetConsoleCP)internal/syscall/windows.procGetConsoleCPsyscall.Syscall ,internal/syscall/windows.MultiByteToWideCharAT�?AT=function(a,b,c,d,e,f){var $ptr,a,b,c,d,e,f,g,h,i,j,k;g=0;h=$ifaceNil;  3�i=A.Syscall6(AE.Addr(),6,(a>>>0),(b>>>0),c,(d>>>0),e,(f>>>0));j=i[0];k=i[2];  4eg=(j>>0);    if(g===0){    if(!((k===0))){  4�h=T(k);    }else{  4�h=new A.Errno(536870951);    }    }  4�return[g,h];    };$pkg.MultiByteToWideChar=AT;MultiByteToWideChar,internal/syscall/windows.MultiByteToWideChar!internal/syscall/windows.errnoErr0internal/syscall/windows.procMultiByteToWideCharsyscall.Errnosyscall.Syscall6 )internal/syscall/windows.GetCurrentThreadAU�AU=function(){var $ptr,a,b,c,d,e;a=0;b=$ifaceNil;  5(c=A.Syscall(AF.Addr(),0,0,0,0);d=c[0];e=c[2];  5oa=(d>>>0);    if(a===0){    if(!((e===0))){  5�b=T(e);    }else{  5�b=new A.Errno(536870951);    }    }  5�return[a,b];    };$pkg.GetCurrentThread=AU;GetCurrentThread)internal/syscall/windows.GetCurrentThread!internal/syscall/windows.errnoErr-internal/syscall/windows.procGetCurrentThreadsyscall.Errnosyscall.Syscall $internal/syscall/windows.NetShareAddAV��AV=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g;e=$ifaceNil;  6df=A.Syscall6(AG.Addr(),4,a,(b>>>0),c,d,0,0);g=f[0];    if(!((g===0))){  7'e=new A.Errno((g>>>0));    }  7Freturn e;    };$pkg.NetShareAdd=AV;NetShareAdd$internal/syscall/windows.NetShareAdd(internal/syscall/windows.procNetShareAddsyscall.Errnosyscall.Syscall6 $internal/syscall/windows.NetShareDelAW��AW=function(a,b,c){var $ptr,a,b,c,d,e,f;d=$ifaceNil;  7�e=A.Syscall(AH.Addr(),3,a,b,(c>>>0));f=e[0];    if(!((f===0))){  8Jd=new A.Errno((f>>>0));    }  8ireturn d;    };$pkg.NetShareDel=AW;NetShareDel$internal/syscall/windows.NetShareDel(internal/syscall/windows.procNetShareDelsyscall.Errnosyscall.Syscall (internal/syscall/windows.ImpersonateSelfAX��AX=function(a){var $ptr,a,b,c,d,e;b=$ifaceNil;  8�c=A.Syscall(AI.Addr(),1,(a>>>0),0,0);d=c[0];e=c[2];    if(d===0){    if(!((e===0))){  91b=T(e);    }else{  9Rb=new A.Errno(536870951);    }    }  9oreturn b;    };$pkg.ImpersonateSelf=AX;ImpersonateSelf(internal/syscall/windows.ImpersonateSelf!internal/syscall/windows.errnoErr,internal/syscall/windows.procImpersonateSelfsyscall.Errnosyscall.Syscall %internal/syscall/windows.RevertToSelfAY��AY=function(){var $ptr,a,b,c,d;a=$ifaceNil;  9�b=A.Syscall(AJ.Addr(),0,0,0,0);c=b[0];d=b[2];    if(c===0){    if(!((d===0))){  9�a=T(d);    }else{  :a=new A.Errno(536870951);    }    }  :<return a;    };$pkg.RevertToSelf=AY;RevertToSelf%internal/syscall/windows.RevertToSelf!internal/syscall/windows.errnoErr)internal/syscall/windows.procRevertToSelfsyscall.Errnosyscall.Syscall (internal/syscall/windows.OpenThreadTokenAZ�OAZ=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i;e=$ifaceNil;  :�f=0;    if(c){  :�f=1;    }else{  :�f=0;    }  :�g=A.Syscall6(AK.Addr(),4,(a>>>0),(b>>>0),(f>>>0),d,0,0);h=g[0];i=g[2];    if(h===0){    if(!((i===0))){  ;�e=T(i);    }else{  ;�e=new A.Errno(536870951);    }    }  ;�return e;    };$pkg.OpenThreadToken=AZ;OpenThreadToken(internal/syscall/windows.OpenThreadToken!internal/syscall/windows.errnoErr,internal/syscall/windows.procOpenThreadTokensyscall.Errnosyscall.Syscall6 -internal/syscall/windows.LookupPrivilegeValueBA��BA=function(a,b,c){var $ptr,a,b,c,d,e,f,g;d=$ifaceNil;  <Ae=A.Syscall(AL.Addr(),3,a,b,c);f=e[0];g=e[2];    if(f===0){    if(!((g===0))){  =d=T(g);    }else{  ='d=new A.Errno(536870951);    }    }  =Dreturn d;    };$pkg.LookupPrivilegeValue=BA;LookupPrivilegeValue-internal/syscall/windows.LookupPrivilegeValue!internal/syscall/windows.errnoErr2internal/syscall/windows.procLookupPrivilegeValueWsyscall.Errnosyscall.Syscall .internal/syscall/windows.adjustTokenPrivilegesBB�VBB=function(a,b,c,d,e,f){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;g=0;h=$ifaceNil;  >i=0;    if(b){  >;i=1;    }else{  >Oi=0;    }  >[j=A.Syscall6(AM.Addr(),6,(a>>>0),(i>>>0),c,(d>>>0),e,f);k=j[0];l=j[2];  ?9g=(k>>>0);    if(true){    if(!((l===0))){  ?gh=T(l);    }else{  ?�h=new A.Errno(536870951);    }    }  ?�return[g,h];    };adjustTokenPrivileges.internal/syscall/windows.adjustTokenPrivileges!internal/syscall/windows.errnoErr2internal/syscall/windows.procAdjustTokenPrivilegessyscall.Errnosyscall.Syscall6 ��{"Base":16303,"Files":[{"Name":"C:\\Go\\src\\internal\\syscall\\windows\\mksyscall.go","Base":1,"Size":306,"Lines":[0,55,109,159,160,176,177],"Infos":null},{"Name":"C:\\Go\\src\\internal\\syscall\\windows\\reparse_windows.go","Base":308,"Size":2442,"Lines":[0,55,109,159,160,176,177,185,226,267,268,295,297,298,332,393,456,457,538,579,598,655,714,771,803,829,855,857,858,898,950,1009,1072,1133,1162,1221,1284,1354,1383,1439,1463,1519,1543,1614,1686,1705,1727,1729,1730,1768,1820,1879,1942,2003,2032,2091,2154,2224,2253,2309,2333,2389,2413,2440],"Infos":null},{"Name":"C:\\Go\\src\\internal\\syscall\\windows\\security_windows.go","Base":2751,"Size":1747,"Lines":[0,55,109,159,160,176,177,186,197,199,200,208,236,264,292,320,322,323,411,468,469,477,511,549,551,552,571,588,604,606,607,641,658,677,679,680,711,734,773,775,776,909,1027,1258,1259,1433,1537,1552,1591,1604,1607,1648,1676,1717,1730,1733,1745],"Infos":null},{"Name":"C:\\Go\\src\\internal\\syscall\\windows\\syscall_windows.go","Base":4499,"Size":4955,"Lines":[0,55,109,159,160,176,177,194,195,203,252,303,305,306,349,350,358,390,422,454,487,520,553,586,620,654,656,657,685,725,747,749,750,788,815,842,887,921,947,973,999,1026,1053,1080,1106,1108,1109,1147,1163,1179,1213,1236,1238,1239,1279,1295,1311,1347,1370,1372,1373,1413,1430,1447,1484,1508,1510,1511,1541,1562,1583,1614,1642,1663,1665,1666,1699,1729,1759,1802,1831,1879,1927,1977,2027,2058,2089,2120,2184,2214,2244,2274,2304,2334,2364,2398,2438,2480,2482,2483,2491,2523,2555,2587,2619,2651,2683,2715,2717,2718,2899,2999,3082,3205,3206,3214,3257,3300,3343,3386,3429,3472,3515,3558,3601,3602,3640,3678,3716,3754,3793,3832,3834,3835,3880,3930,3947,3960,3963,4011,4028,4041,4044,4100,4102,4103,4134,4135,4181,4239,4407,4501,4502,4530,4531,4558,4579,4599,4620,4640,4660,4680,4701,4722,4724,4725,4844],"Infos":null},{"Name":"C:\\Go\\src\\internal\\syscall\\windows\\zsyscall_windows.go","Base":9455,"Size":6847,"Lines":[0,59,60,76,77,86,121,132,142,144,145,166,167,220,237,245,274,276,277,283,349,351,352,410,437,476,488,497,510,539,568,571,632,687,701,711,713,714,720,782,844,906,968,969,1042,1113,1177,1248,1307,1372,1444,1513,1577,1641,1709,1774,1842,1916,1990,1992,1993,2143,2345,2359,2389,2392,2400,2402,2403,2483,2626,2640,2655,2677,2688,2712,2716,2719,2727,2729,2730,2800,2933,2947,2962,2984,2995,3019,3023,3026,3034,3036,3037,3131,3255,3271,3284,3299,3321,3332,3356,3360,3363,3371,3373,3374,3403,3463,3481,3489,3491,3492,3527,3593,3611,3619,3621,3622,3760,3957,3977,3995,4010,4032,4043,4067,4071,4074,4082,4084,4085,4152,4223,4258,4282,4297,4319,4330,4354,4358,4361,4369,4371,4372,4468,4648,4662,4691,4694,4702,4704,4705,4793,4939,4953,4982,4985,4993,4995,4996,5058,5154,5168,5183,5205,5216,5240,5244,5247,5255,5257,5258,5292,5359,5373,5388,5410,5421,5445,5449,5452,5460,5462,5463,5570,5586,5603,5613,5623,5633,5636,5779,5793,5808,5830,5841,5865,5869,5872,5880,5882,5883,5969,6135,6149,6164,6186,6197,6221,6225,6228,6236,6238,6239,6431,6447,6474,6484,6494,6504,6507,6729,6747,6758,6773,6795,6806,6830,6834,6837,6845],"Infos":null}]}
 
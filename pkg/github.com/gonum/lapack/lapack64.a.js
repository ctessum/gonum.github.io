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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �XM�� github.com/gonum/lapack/lapack64lapack64github.com/gonum/blasgithub.com/gonum/blas/blas64github.com/gonum/lapackgithub.com/gonum/lapack/native�
/
$$ exports $$
pv0lapack64@github.com/gonum/lapack/lapack64.	
Gecon 
normMatrixNormlapack.github.com/gonum/lapack2 aGeneralblas648github.com/gonum/blas/blas64Rows Cols Stride Data  
anormwork
iwork  	Geev 
jobvlLeftEVJob2 
jobvrRightEVJob2 a<wrwiLvl<vr<work
lwork
first 	
Gelqf a<tauworkR
lwork  	Gels 

transTransposeblas*github.com/gonum/blas a<b<work
lwork   	
Geqrf a<tauwork\
lwork  	
Gesvd jobUSVDJob2 
jobVT`a<u<vt<sworkb
lworkok  	
Getrf a<ipiv   	
Getri a<ipivwork
lworkok  	
Getrs 
transVa<b<ipiv  	Ggsvd3 jobUGSVDJob2 jobVtjobQta<b<
alphabetavu<v<q<work
lwork
iworkklok  	
Lange norm:a<work  	
Lansy norm:aSymmetricN Stride Data UploUplo   work  	
Lantr norm:aTriangular
N Stride Data Uplo� DiagDiag   work  	
Lapmt forward x<k  	
Ormlq sideSide 
transVa<tauc<work
lwork  	
Ormqr side�
transVa<tauc<work
lwork  	
Pocon a�
anormwork
iwork  	
Potrf a�t�ok  	Syev 
jobz
EVJob2 a�wwork�
lworkok  	
Trcon norm:a�work
iwork  	
Trtri a�ok  	
Trtrs 
transVa�b<ok  	Use lFloat64 ,Dgecon norm:nalda
anormwork
iwork  
Dgeev 
jobvlH
jobvrJnaldawrwi�vlldvlvrldvrwork
lwork
first Dgelqf mnaldatauwork�
lwork  
Dgels 
transVmnnrhsaldabldbwork
lwork   Dgeqrf mnaldatauwork�
lwork  Dgesvd jobU`
jobVT`mnaldasu�lduvtldvtwork
lworkok  Dgetrf 
mnaldaipivok  Dgetri naldaipivwork
lworkok  Dgetrs 
transVnnrhsaldaipivbldb  Dggsvd3 *jobUtjobVtjobQtmnpaldabldb
alphabeta�u�lduvldvqldqwork
lwork
iworkklok  Dlange norm:mnaldawork  Dlansy norm:uplo�naldawork  Dlantr norm:uplo�diag�mnaldawork  Dlapmt forward mnxldxk  Dormlq side�
transVmnkaldatauc�ldcwork
lwork  Dormqr side�
transVmnkaldatauc�ldcwork
lwork  Dpocon uplo�nalda
anormwork
iwork  Dpotrf ul�naldaok  
Dsyev jobz�uplo�naldawwork�
lworkok  Dtrcon norm:uplo�diag�naldawork
iwork  Dtrtri 
uplo�diag�naldaok  Dtrtrs uplo�
transVdiag�nnrhsaldabldbok     A%A=$packages["github.com/gonum/blas"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} B,B=$packages["github.com/gonum/blas/blas64"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} C'C=$packages["github.com/gonum/lapack"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D.D=$packages["github.com/gonum/lapack/native"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} ACAC=$sliceType($Float64);AC Elapack64 a@    E=(a=new D.Implementation.ptr(),new a.constructor.elem(a));lapack64)github.com/gonum/lapack/lapack64.lapack64-github.com/gonum/lapack/native.Implementation $github.com/gonum/lapack/lapack64.UseF4F=function(b){var $ptr,b;  �E=b;    };$pkg.Use=F;Use$github.com/gonum/lapack/lapack64.Use)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.PotrfG�oG=function(b){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=new B.Triangular.ptr(0,0,AC.nil,0,0);d=false;  �e=E.Dpotrf(b.Uplo,b.N,b.Data,b.Stride);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;  �c.Uplo=b.Uplo;  �c.N=b.N;  �c.Data=b.Data;  c.Stride=b.Stride;  'c.Diag=131;  ?$s=-1;return[c,d];    }return;}if($f===undefined){$f={$blk:G};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Potrf=G;Potrf'github.com/gonum/blas/blas64.Triangular#github.com/gonum/lapack/lapack64.AC&github.com/gonum/lapack/lapack64.Potrf)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.GeconH�H=function(b,c,d,e,f){var $ptr,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  
�g=E.Dgecon(b,c.Cols,c.Data,c.Stride,d,e,f);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$s=-1;return g;    }return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Gecon=H;Gecon&github.com/gonum/lapack/lapack64.Gecon)github.com/gonum/lapack/lapack64.lapack64 %github.com/gonum/lapack/lapack64.GelsI� I=function(b,c,d,e,f){var $ptr,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:   g=E.Dgels(b,c.Rows,c.Cols,d.Cols,c.Data,c.Stride,d.Data,d.Stride,e,f);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$s=-1;return g;    }return;}if($f===undefined){$f={$blk:I};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Gels=I;Gels%github.com/gonum/lapack/lapack64.Gels)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.GeqrfJ��J=function(b,c,d,e){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  n$r=E.Dgeqrf(b.Rows,b.Cols,b.Data,b.Stride,c,d,e);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:J};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Geqrf=J;Geqrf&github.com/gonum/lapack/lapack64.Geqrf)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.GelqfK��K=function(b,c,d,e){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �$r=E.Dgelqf(b.Rows,b.Cols,b.Data,b.Stride,c,d,e);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:K};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Gelqf=K;Gelqf&github.com/gonum/lapack/lapack64.Gelqf)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.GesvdL��L=function(b,c,d,e,f,g,h,i){var $ptr,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:j=false;    k=E.Dgesvd(b,c,d.Rows,d.Cols,d.Data,d.Stride,g,e.Data,e.Stride,f.Data,f.Stride,h,i);$s=1;case 1:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;$s=-1;return j;    }return;}if($f===undefined){$f={$blk:L};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Gesvd=L;Gesvd&github.com/gonum/lapack/lapack64.Gesvd)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.GetrfM��M=function(b,c){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  (�d=E.Dgetrf(b.Rows,b.Cols,b.Data,b.Stride,c);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Getrf=M;Getrf&github.com/gonum/lapack/lapack64.Getrf)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.GetriN�N=function(b,c,d,e){var $ptr,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=false;    g=E.Dgetri(b.Cols,b.Data,b.Stride,c,d,e);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;$s=-1;return f;    }return;}if($f===undefined){$f={$blk:N};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Getri=N;Getri&github.com/gonum/lapack/lapack64.Getri)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.GetrsO��O=function(b,c,d,e){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  /($r=E.Dgetrs(b,c.Cols,d.Cols,c.Data,c.Stride,e,d.Data,d.Stride);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:O};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Getrs=O;Getrs&github.com/gonum/lapack/lapack64.Getrs)github.com/gonum/lapack/lapack64.lapack64 'github.com/gonum/lapack/lapack64.Ggsvd3P�\P=function(b,c,d,e,f,g,h,i,j,k,l,m,n){var $ptr,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:o=0;p=0;q=false;    s=E.Dggsvd3(b,c,d,e.Rows,e.Cols,f.Rows,e.Data,e.Stride,f.Data,f.Stride,g,h,i.Data,i.Stride,j.Data,j.Stride,k.Data,k.Stride,l,m,n);$s=1;case 1:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}r=s;o=r[0];p=r[1];q=r[2];$s=-1;return[o,p,q];    }return;}if($f===undefined){$f={$blk:P};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Ggsvd3=P;Ggsvd3'github.com/gonum/lapack/lapack64.Ggsvd3)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.LangeQ��Q=function(b,c,d){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  ?�e=E.Dlange(b,c.Rows,c.Cols,c.Data,c.Stride,d);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return e;    }return;}if($f===undefined){$f={$blk:Q};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Lange=Q;Lange&github.com/gonum/lapack/lapack64.Lange)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.LansyR��R=function(b,c,d){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  A�e=E.Dlansy(b,c.Uplo,c.N,c.Data,c.Stride,d);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return e;    }return;}if($f===undefined){$f={$blk:R};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Lansy=R;Lansy&github.com/gonum/lapack/lapack64.Lansy)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.LantrS��S=function(b,c,d){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  C(e=E.Dlantr(b,c.Uplo,c.Diag,c.N,c.N,c.Data,c.Stride,d);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return e;    }return;}if($f===undefined){$f={$blk:S};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Lantr=S;Lantr&github.com/gonum/lapack/lapack64.Lantr)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.LapmtT��T=function(b,c,d){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  E�$r=E.Dlapmt(b,c.Rows,c.Cols,c.Data,c.Stride,d);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:T};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Lapmt=T;Lapmt&github.com/gonum/lapack/lapack64.Lapmt)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.OrmlqU�=U=function(b,c,d,e,f,g,h){var $ptr,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Jq$r=E.Dormlq(b,c,f.Rows,f.Cols,d.Rows,d.Data,d.Stride,e,f.Data,f.Stride,g,h);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:U};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Ormlq=U;Ormlq&github.com/gonum/lapack/lapack64.Ormlq)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.OrmqrV�=V=function(b,c,d,e,f,g,h){var $ptr,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Q$r=E.Dormqr(b,c,f.Rows,f.Cols,d.Cols,d.Data,d.Stride,e,f.Data,f.Stride,g,h);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:V};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Ormqr=V;Ormqr&github.com/gonum/lapack/lapack64.Ormqr)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.PoconW��W=function(b,c,d,e){var $ptr,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  S�f=E.Dpocon(b.Uplo,b.N,b.Data,b.Stride,c,d,e);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=-1;return f;    }return;}if($f===undefined){$f={$blk:W};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Pocon=W;Pocon&github.com/gonum/lapack/lapack64.Pocon)github.com/gonum/lapack/lapack64.lapack64 %github.com/gonum/lapack/lapack64.SyevX�$X=function(b,c,d,e,f){var $ptr,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:g=false;    h=E.Dsyev(b,c.Uplo,c.N,c.Data,c.Stride,d,e,f);$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;$s=-1;return g;    }return;}if($f===undefined){$f={$blk:X};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Syev=X;Syev%github.com/gonum/lapack/lapack64.Syev)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.TrconY��Y=function(b,c,d,e){var $ptr,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Y�f=E.Dtrcon(b,c.Uplo,c.Diag,c.N,c.Data,c.Stride,d,e);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=-1;return f;    }return;}if($f===undefined){$f={$blk:Y};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Trcon=Y;Trcon&github.com/gonum/lapack/lapack64.Trcon)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.TrtriZ��Z=function(b){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=false;    d=E.Dtrtri(b.Uplo,b.Diag,b.N,b.Data,b.Stride);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;$s=-1;return c;    }return;}if($f===undefined){$f={$blk:Z};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Trtri=Z;Trtri&github.com/gonum/lapack/lapack64.Trtri)github.com/gonum/lapack/lapack64.lapack64 &github.com/gonum/lapack/lapack64.TrtrsAA�AA=function(b,c,d){var $ptr,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=false;    f=E.Dtrtrs(c.Uplo,b,c.Diag,c.N,d.Cols,c.Data,c.Stride,d.Data,d.Stride);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;$s=-1;return e;    }return;}if($f===undefined){$f={$blk:AA};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Trtrs=AA;Trtrs&github.com/gonum/lapack/lapack64.Trtrs)github.com/gonum/lapack/lapack64.lapack64 %github.com/gonum/lapack/lapack64.GeevAB��AB=function(b,c,d,e,f,g,h,i,j){var $ptr,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:k=0;  g
l=d.Rows;    if(!((d.Cols===l))){  g,$panic(new $String("lapack64: matrix not square"));    }    if((b===86)&&(!((g.Rows===l))||!((g.Cols===l)))){  g�$panic(new $String("lapack64: bad size of VL"));    }    if((c===86)&&(!((h.Rows===l))||!((h.Cols===l)))){  h$panic(new $String("lapack64: bad size of VR"));    }    m=E.Dgeev(b,c,l,d.Data,d.Stride,e,f,g.Data,g.Stride,h.Data,h.Stride,i,j);$s=1;case 1:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}k=m;$s=-1;return k;    }return;}if($f===undefined){$f={$blk:AB};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Geev=AB;Geev%github.com/gonum/lapack/lapack64.Geev)github.com/gonum/lapack/lapack64.lapack64 �{"Base":26803,"Files":[{"Name":"C:\\Users\\Chris\\AppData\\Local\\Temp\\gopherjs_playground.nq2ur5zXMg\\gopath\\src\\github.com\\gonum\\lapack\\lapack64\\lapack64.go","Base":1,"Size":26801,"Lines":[0,61,116,167,169,248,313,317,398,440,444,523,605,688,776,802,806,885,967,1045,1063,1065,1075,1101,1134,1162,1197,1200,1202,1257,1259,1343,1400,1430,1445,1448,1450,1502,1537,1582,1624,1693,1769,1842,1896,1961,2015,2033,2045,2063,2085,2109,2118,2121,2123,2203,2283,2327,2331,2408,2412,2488,2492,2582,2586,2675,2783,2860,2863,2865,2944,3005,3074,3078,3147,3151,3234,3256,3340,3359,3442,3463,3543,3565,3648,3726,3730,3814,3899,3971,4047,4133,4203,4207,4284,4364,4438,4523,4535,4638,4742,4745,4747,4824,4902,4983,5067,5148,5188,5192,5275,5283,5313,5344,5374,5420,5424,5506,5573,5577,5654,5721,5792,5875,5932,5996,6066,6069,6071,6148,6230,6309,6386,6466,6492,6496,6573,6649,6684,6688,6765,6832,6903,6986,7043,7107,7177,7180,7182,7257,7261,7301,7326,7406,7487,7564,7582,7586,7666,7684,7754,7832,7916,7984,8064,8141,8145,8227,8309,8351,8355,8434,8466,8470,8542,8622,8702,8716,8720,8790,8873,8955,8969,8973,9055,9131,9212,9293,9306,9310,9378,9484,9610,9613,9615,9677,9731,9750,9828,9911,9932,9936,10012,10094,10131,10135,10186,10190,10268,10341,10415,10440,10489,10554,10557,10559,10642,10719,10789,10793,10873,10936,10940,11017,11084,11148,11231,11288,11369,11439,11442,11444,11510,11548,11586,11628,11715,11719,11797,11857,11861,11941,11986,12070,12153,12156,12158,12230,12273,12299,12303,12329,12375,12379,12445,12519,12587,12659,12689,12693,12712,12716,12744,12774,12804,12834,12838,12864,12892,12920,12924,12956,12993,13030,13034,13044,13048,13093,13137,13157,13161,13180,13203,13216,13220,13238,13242,13274,13307,13340,13344,13378,13413,13448,13483,13487,13529,13572,13615,13658,13662,13672,13713,13753,13773,13777,13833,13858,13883,13917,13921,13995,14020,14024,14112,14130,14191,14258,14340,14414,14494,14541,14545,14624,14689,14711,14733,14752,14782,14812,14830,14867,14905,14921,14948,14972,14976,15055,15059,15139,15211,15287,15313,15489,15680,15683,15685,15765,15798,15860,15948,16030,16111,16213,16279,16359,16430,16433,16435,16505,16586,16641,16707,16789,16857,16860,16862,16936,17019,17107,17190,17271,17274,17276,17350,17418,17422,17481,17485,17549,17553,17604,17608,17672,17676,17749,17804,17868,17871,17873,17944,17997,18062,18125,18191,18255,18335,18389,18393,18470,18556,18600,18664,18747,18804,18808,18885,18925,19055,19164,19167,19169,19236,19304,19370,19438,19504,19569,19605,19609,19672,19736,19809,19889,19965,19975,19979,20060,20141,20152,20156,20236,20307,20386,20466,20494,20498,20579,20607,20737,20846,20849,20851,20933,21014,21059,21063,21130,21134,21224,21228,21317,21403,21479,21482,21484,21562,21586,21590,21672,21719,21723,21805,21879,21954,21992,21996,22085,22162,22242,22290,22382,22459,22462,22464,22549,22627,22631,22721,22725,22814,22910,22993,22996,22998,23081,23093,23097,23177,23240,23285,23349,23352,23354,23435,23530,23615,23712,23715,23717,23790,23847,23851,23922,23940,23963,24046,24073,24124,24128,24209,24288,24362,24382,24402,24482,24519,24557,24595,24633,24671,24750,24813,24817,24895,24936,25016,25057,25114,25118,25200,25279,25359,25424,25428,25510,25589,25666,25739,25743,25824,25879,25883,25953,26025,26098,26178,26216,26376,26390,26409,26449,26453,26524,26561,26565,26637,26674,26678,26798],"Infos":null}]}
 
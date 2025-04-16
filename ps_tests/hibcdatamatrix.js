function bwipp_runtest_hibcdatamatrix(){
$_ = Object.create($_);//#2
var _0=function(){
$k[$j++]="";//#17
$k[$j++]="dontdraw";//#17
bwipp_hibcdatamatrix();//#17
};//#17
isError(_0,'bwipp.hibcdatamatrixEmptyData#18');//#17
var _1=function(){
$k[$j++]="";//#20
$k[$j++]="dontdraw validatecheck";//#20
bwipp_hibcdatamatrix();//#20
};//#20
isError(_1,'bwipp.hibcdatamatrixEmptyData#21');//#20
var _2=function(){
$k[$j++]=",";//#23
$k[$j++]="dontdraw";//#23
bwipp_hibcdatamatrix();//#23
};//#23
isError(_2,'bwipp.hibcdatamatrixBadCharacter#24');//#23
var _3=function(){
$k[$j++]="A123BJC5D6E71H";//#26
$k[$j++]="dontdraw validatecheck";//#26
bwipp_hibcdatamatrix();//#26
};//#26
isError(_3,'bwipp.hibcdatamatrixBadCheckDigit#27');//#26
var _4=function(){
$k[$j++]="/";//#29
$k[$j++]="dontdraw validatecheck";//#29
bwipp_hibcdatamatrix();//#29
};//#29
isError(_4,'bwipp.hibcdatamatrixBadCheckDigit#30');//#29
$k[$j++]="A123BJC5D6E71G";//#35
$k[$j++]="dontdraw validatecheck";//#35
bwipp_hibcdatamatrix();//#35
debugIsEqual($get($k[--$j],'pixs'),$a([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));//#53
$k[$j++]="A123BJC5D6E71/$$52001510X3C";//#55
$k[$j++]="dontdraw validatecheck";//#55
bwipp_hibcdatamatrix();//#55
debugIsEqual($get($k[--$j],'pixs'),$a([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));//#77
$k[$j++]="H123ABC01234567890";//#79
$k[$j++]="dontdraw";//#79
bwipp_hibcdatamatrix();//#79
debugIsEqual($get($k[--$j],'pixs'),$a([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));//#99
$_ = Object.getPrototypeOf($_);//#100
}//bwipp_runtest_hibcdatamatrix
console.log("hibcdatamatrix...")
bwipp_runtest_hibcdatamatrix();


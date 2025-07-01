function bwipp_runtest_hibcdatamatrixrectangular(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
var _0=function(){
$k[$j++]="";//#17
$k[$j++]="dontdraw";//#17
bwipp_hibcdatamatrixrectangular();//#17
};//#17
isError(_0,'bwipp.hibcdatamatrixrectangularEmptyData#18');//#17
var _1=function(){
$k[$j++]="";//#20
$k[$j++]="dontdraw validatecheck";//#20
bwipp_hibcdatamatrixrectangular();//#20
};//#20
isError(_1,'bwipp.hibcdatamatrixrectangularEmptyData#21');//#20
var _2=function(){
$k[$j++]=",";//#23
$k[$j++]="dontdraw";//#23
bwipp_hibcdatamatrixrectangular();//#23
};//#23
isError(_2,'bwipp.hibcdatamatrixrectangularBadCharacter#24');//#23
var _3=function(){
$k[$j++]="A123BJC5D6E71H";//#26
$k[$j++]="dontdraw validatecheck";//#26
bwipp_hibcdatamatrixrectangular();//#26
};//#26
isError(_3,'bwipp.hibcdatamatrixrectangularBadCheckDigit#27');//#26
var _4=function(){
$k[$j++]="/";//#29
$k[$j++]="dontdraw validatecheck";//#29
bwipp_hibcdatamatrixrectangular();//#29
};//#29
isError(_4,'bwipp.hibcdatamatrixrectangularBadCheckDigit#30');//#29
$k[$j++]="A123BJC5D6E71G";//#35
$k[$j++]="dontdraw validatecheck";//#35
bwipp_hibcdatamatrixrectangular();//#35
debugIsEqual($get($k[--$j],'pixs'),$a([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));//#49
$_ = $__;//#50
}//bwipp_runtest_hibcdatamatrixrectangular
console.log("hibcdatamatrixrectangular...")
bwipp_runtest_hibcdatamatrixrectangular();


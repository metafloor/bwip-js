function bwipp_runtest_hibccode128(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
var _0=function(){
$k[$j++]="";//#17
$k[$j++]="dontdraw";//#17
bwipp_hibccode128();//#17
};//#17
isError(_0,'bwipp.hibccode128emptyData#18');//#17
var _1=function(){
$k[$j++]="";//#20
$k[$j++]="dontdraw validatecheck";//#20
bwipp_hibccode128();//#20
};//#20
isError(_1,'bwipp.hibccode128emptyData#21');//#20
var _2=function(){
$k[$j++]=",";//#23
$k[$j++]="dontdraw";//#23
bwipp_hibccode128();//#23
};//#23
isError(_2,'bwipp.hibccode128badCharacter#24');//#23
var _3=function(){
$k[$j++]="A123BJC5D6E71F";//#26
$k[$j++]="dontdraw validatecheck";//#26
bwipp_hibccode128();//#26
};//#26
isError(_3,'bwipp.hibccode128badCheckDigit#27');//#26
var _4=function(){
$k[$j++]="/";//#29
$k[$j++]="dontdraw validatecheck";//#29
bwipp_hibccode128();//#29
};//#29
isError(_4,'bwipp.hibccode128badCheckDigit#30');//#29
$k[$j++]="A123BJC5D6E71G";//#35
$k[$j++]="dontdraw validatecheck";//#35
bwipp_hibccode128();//#35
debugIsEqual($get($k[--$j],'sbs'),$a([2,1,1,2,1,4,2,3,1,2,1,2,1,1,1,3,2,3,1,2,3,2,2,1,2,2,3,2,1,1,2,2,1,1,3,2,1,3,1,1,2,3,1,1,2,1,3,3,1,3,1,3,2,1,2,1,3,2,1,2,1,1,2,3,1,3,2,2,3,1,1,2,1,3,2,1,1,3,3,1,2,1,3,1,1,2,3,2,2,1,2,1,1,3,1,3,2,3,2,1,2,1,2,3,3,1,1,1,2]));//#38
$k[$j++]="$$52001510X3G";//#40
$k[$j++]="dontdraw";//#40
bwipp_hibccode128();//#40
debugIsEqual($get($k[--$j],'sbs'),$a([2,1,1,2,1,4,2,3,1,2,1,2,1,2,1,3,2,2,1,2,1,3,2,2,1,1,3,1,4,1,2,1,3,3,1,1,2,1,2,2,2,2,1,1,3,2,2,2,2,2,1,3,1,2,1,1,4,1,3,1,3,3,1,1,2,1,2,2,1,1,3,2,2,1,1,3,1,3,1,1,2,3,1,3,1,3,4,1,1,1,2,3,3,1,1,1,2]));//#43
$_ = $__;//#44
}//bwipp_runtest_hibccode128
console.log("hibccode128...")
bwipp_runtest_hibccode128();


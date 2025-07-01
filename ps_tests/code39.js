function bwipp_runtest_code39(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
var _0=function(){
$k[$j++]="";//#18
$k[$j++]="dontdraw";//#18
bwipp_code39();//#18
};//#18
isError(_0,'bwipp.code39emptyData#19');//#18
var _1=function(){
$k[$j++]="";//#20
$k[$j++]="dontdraw";//#20
bwipp_code39ext();//#20
};//#20
isError(_1,'bwipp.code39emptyData#21');//#20
var _2=function(){
$k[$j++]="";//#23
$k[$j++]="dontdraw validatecheck";//#23
bwipp_code39();//#23
};//#23
isError(_2,'bwipp.code39emptyData#24');//#23
var _3=function(){
$k[$j++]="";//#25
$k[$j++]="dontdraw validatecheck";//#25
bwipp_code39ext();//#25
};//#25
isError(_3,'bwipp.code39emptyData#26');//#25
var _4=function(){
$k[$j++]=",";//#28
$k[$j++]="dontdraw";//#28
bwipp_code39();//#28
};//#28
isError(_4,'bwipp.code39badCharacter#29');//#28
var _5=function(){
$k[$j++]="^161";//#31
$k[$j++]="dontdraw parse";//#31
bwipp_code39ext();//#31
};//#31
isError(_5,'bwipp.code39extBadCharacter#32');//#31
var _6=function(){
$k[$j++]="Z1.";//#34
$k[$j++]="dontdraw validatecheck";//#34
bwipp_code39();//#34
};//#34
isError(_6,'bwipp.code39badCheckDigit#35');//#34
var _7=function(){
$k[$j++]="Z1.";//#36
$k[$j++]="dontdraw validatecheck";//#36
bwipp_code39ext();//#36
};//#36
isError(_7,'bwipp.code39badCheckDigit#37');//#36
var _B=function(){
$k[$j++]="0";//#42
$k[$j++]="dontdraw";//#42
bwipp_code39();//#42
var _A=$get($k[--$j],'sbs');//#42
$k[$j++]=_A;//#42
};//#42
debugIsEqual(_B,$a([1,3,1,1,3,1,3,1,1,1,1,1,1,3,3,1,3,1,1,1,1,3,1,1,3,1,3,1,1,1]));//#42
var _F=function(){
$k[$j++]="0";//#45
$k[$j++]="dontdraw validatecheck";//#45
bwipp_code39();//#45
var _E=$get($k[--$j],'sbs');//#45
$k[$j++]=_E;//#45
};//#45
debugIsEqual(_F,$a([1,3,1,1,3,1,3,1,1,1,1,1,1,3,3,1,3,1,1,1,1,3,1,1,3,1,3,1,1,1]));//#45
var _J=function(){
$k[$j++]="1A";//#48
$k[$j++]="dontdraw";//#48
bwipp_code39();//#48
var _I=$get($k[--$j],'sbs');//#48
$k[$j++]=_I;//#48
};//#48
debugIsEqual(_J,$a([1,3,1,1,3,1,3,1,1,1,3,1,1,3,1,1,1,1,3,1,3,1,1,1,1,3,1,1,3,1,1,3,1,1,3,1,3,1,1,1]));//#48
var _N=function(){
$k[$j++]="Z1-";//#51
$k[$j++]="dontdraw validatecheck";//#51
bwipp_code39();//#51
var _M=$get($k[--$j],'sbs');//#51
$k[$j++]=_M;//#51
};//#51
debugIsEqual(_N,$a([1,3,1,1,3,1,3,1,1,1,1,3,3,1,3,1,1,1,1,1,3,1,1,3,1,1,1,1,3,1,1,3,1,1,1,1,3,1,3,1,1,3,1,1,3,1,3,1,1,1]));//#51
var _R=function(){
$k[$j++]=",I";//#54
$k[$j++]="dontdraw validatecheck";//#54
bwipp_code39ext();//#54
var _Q=$get($k[--$j],'sbs');//#54
$k[$j++]=_Q;//#54
};//#54
debugIsEqual(_R,$a([1,3,1,1,3,1,3,1,1,1,1,3,1,3,1,1,1,3,1,1,1,1,3,1,1,1,1,3,3,1,1,1,3,1,1,3,3,1,1,1,1,3,1,1,3,1,3,1,1,1]));//#54
$_ = $__;//#56
}//bwipp_runtest_code39
console.log("code39...")
bwipp_runtest_code39();


function bwipp_runtest_code11(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
var _0=function(){
$k[$j++]="";//#15
$k[$j++]="dontdraw";//#15
bwipp_code11();//#15
};//#15
isError(_0,'bwipp.code11emptyData#16');//#15
var _1=function(){
$k[$j++]="";//#18
$k[$j++]="dontdraw validatecheck";//#18
bwipp_code11();//#18
};//#18
isError(_1,'bwipp.code11emptyData#19');//#18
var _2=function(){
$k[$j++]="A";//#21
$k[$j++]="dontdraw";//#21
bwipp_code11();//#21
};//#21
isError(_2,'bwipp.code11badCharacter#22');//#21
var _3=function(){
$k[$j++]="12345678901";//#24
$k[$j++]="dontdraw validatecheck";//#24
bwipp_code11();//#24
};//#24
isError(_3,'bwipp.code11badLength#25');//#24
var _4=function(){
$k[$j++]="123-454";//#27
$k[$j++]="dontdraw validatecheck";//#27
bwipp_code11();//#27
};//#27
isError(_4,'bwipp.code11badCheckDigit#28');//#27
var _5=function(){
$k[$j++]="1234567890149";//#30
$k[$j++]="dontdraw validatecheck";//#30
bwipp_code11();//#30
};//#30
isError(_5,'bwipp.code11badCheckDigits#31');//#30
var _9=function(){
$k[$j++]="0";//#36
$k[$j++]="dontdraw";//#36
bwipp_code11();//#36
var _8=$get($k[--$j],'sbs');//#36
$k[$j++]=_8;//#36
};//#36
debugIsEqual(_9,$a([1,1,3,3,1,1,1,1,1,1,3,1,1,1,3,3,1,1]));//#36
var _D=function(){
$k[$j++]="0";//#39
$k[$j++]="dontdraw validatecheck";//#39
bwipp_code11();//#39
var _C=$get($k[--$j],'sbs');//#39
$k[$j++]=_C;//#39
};//#39
debugIsEqual(_D,$a([1,1,3,3,1,1,1,1,1,1,3,1,1,1,3,3,1,1]));//#39
var _H=function(){
$k[$j++]="123-455";//#42
$k[$j++]="dontdraw validatecheck";//#42
bwipp_code11();//#42
var _G=$get($k[--$j],'sbs');//#42
$k[$j++]=_G;//#42
};//#42
debugIsEqual(_H,$a([1,1,3,3,1,1,3,1,1,1,3,1,1,3,1,1,3,1,3,3,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,3,1,1]));//#42
var _L=function(){
$k[$j++]="123456789014-";//#45
$k[$j++]="dontdraw validatecheck";//#45
bwipp_code11();//#45
var _K=$get($k[--$j],'sbs');//#45
$k[$j++]=_K;//#45
};//#45
debugIsEqual(_L,$a([1,1,3,3,1,1,3,1,1,1,3,1,1,3,1,1,3,1,3,3,1,1,1,1,1,1,3,1,3,1,3,1,3,1,1,1,1,3,3,1,1,1,1,1,1,3,3,1,3,1,1,3,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,1,1,3,1,3,1,1,1,3,1,1,1,1,1,3,3,1,1]));//#45
$_ = $__;//#47
}//bwipp_runtest_code11
console.log("code11...")
bwipp_runtest_code11();


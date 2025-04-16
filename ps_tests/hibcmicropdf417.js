function bwipp_runtest_hibcmicropdf417(){
$_ = Object.create($_);//#2
var _0=function(){
$k[$j++]="";//#15
$k[$j++]="dontdraw";//#15
bwipp_hibcmicropdf417();//#15
};//#15
isError(_0,'bwipp.hibcmicropdf417EmptyData#16');//#15
var _1=function(){
$k[$j++]="";//#18
$k[$j++]="dontdraw validatecheck";//#18
bwipp_hibcmicropdf417();//#18
};//#18
isError(_1,'bwipp.hibcmicropdf417EmptyData#19');//#18
var _2=function(){
$k[$j++]=",";//#21
$k[$j++]="dontdraw";//#21
bwipp_hibcmicropdf417();//#21
};//#21
isError(_2,'bwipp.hibcmicropdf417BadCharacter#22');//#21
var _3=function(){
$k[$j++]="A123BJC5D6E71H";//#24
$k[$j++]="dontdraw validatecheck";//#24
bwipp_hibcmicropdf417();//#24
};//#24
isError(_3,'bwipp.hibcmicropdf417BadCheckDigit#25');//#24
var _4=function(){
$k[$j++]="/";//#27
$k[$j++]="dontdraw validatecheck";//#27
bwipp_hibcmicropdf417();//#27
};//#27
isError(_4,'bwipp.hibcmicropdf417BadCheckDigit#28');//#27
$k[$j++]="A123BJC5D6E71G";//#33
$k[$j++]="dontdraw validatecheck";//#33
bwipp_hibcmicropdf417();//#33
debugIsEqual($get($k[--$j],'pixs'),$a([1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1]));//#63
$_ = Object.getPrototypeOf($_);//#64
}//bwipp_runtest_hibcmicropdf417
console.log("hibcmicropdf417...")
bwipp_runtest_hibcmicropdf417();


function bwipp_runtest_hibcqrcode(){
$_ = Object.create($_);//#2
var _0=function(){
$k[$j++]="";//#17
$k[$j++]="dontdraw";//#17
bwipp_hibcqrcode();//#17
};//#17
isError(_0,'bwipp.hibcqrcodeEmptyData#18');//#17
var _1=function(){
$k[$j++]="";//#20
$k[$j++]="dontdraw validatecheck";//#20
bwipp_hibcqrcode();//#20
};//#20
isError(_1,'bwipp.hibcqrcodeEmptyData#21');//#20
var _2=function(){
$k[$j++]=",";//#23
$k[$j++]="dontdraw";//#23
bwipp_hibcqrcode();//#23
};//#23
isError(_2,'bwipp.hibcqrcodeBadCharacter#24');//#23
var _3=function(){
$k[$j++]="H123ABC01234567890E";//#26
$k[$j++]="dontdraw validatecheck";//#26
bwipp_hibcqrcode();//#26
};//#26
isError(_3,'bwipp.hibcqrcodeBadCheckDigit#27');//#26
var _4=function(){
$k[$j++]="/";//#29
$k[$j++]="dontdraw validatecheck";//#29
bwipp_hibcqrcode();//#29
};//#29
isError(_4,'bwipp.hibcqrcodeBadCheckDigit#30');//#29
$k[$j++]="H123ABC01234567890D";//#35
$k[$j++]="dontdraw validatecheck";//#35
bwipp_hibcqrcode();//#35
debugIsEqual($get($k[--$j],'pixs'),$a([1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1]));//#58
$_ = Object.getPrototypeOf($_);//#59
}//bwipp_runtest_hibcqrcode
console.log("hibcqrcode...")
bwipp_runtest_hibcqrcode();


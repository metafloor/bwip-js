function bwipp_runtest_posicode(){
$_ = Object.create($_);//#2
var _0=function(){
$k[$j++]="ABC123";//#15
$k[$j++]="dontdraw version=c";//#15
bwipp_posicode();//#15
};//#15
isError(_0,'bwipp.posicodeInvalidVersion#16');//#15
var _1=function(){
$k[$j++]="a";//#18
$k[$j++]="dontdraw version=limitedb";//#18
bwipp_posicode();//#18
};//#18
isError(_1,'bwipp.posicodeBadCharacter#19');//#18
var _2=function(){
$k[$j++]="AB^029CD";//#21
$k[$j++]="dontdraw parse version=limitedb";//#21
bwipp_posicode();//#21
};//#21
isError(_2,'bwipp.posicodeBadCharacter#22');//#21
$k[$j++]="AB^029CD";//#27
$k[$j++]="dontdraw parse version=a";//#27
bwipp_posicode();//#27
debugIsEqual($get($k[--$j],'sbs'),$a([1,12,1,1,1,1,1,2,1,8,1,1,1,1,1,7,1,2,1,1,1,1,1,1,1,8,1,1,1,4,1,2,1,6,1,3,1,1,1,5,1,4,1,1,1,1,1,2,1,6,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1]));//#30
$k[$j++]="AB^029CD";//#32
$k[$j++]="dontdraw parse version=b";//#32
bwipp_posicode();//#32
debugIsEqual($get($k[--$j],'sbs'),$a([1,12,1,2,1,3,1,2,1,9,1,2,1,2,1,8,1,3,1,2,1,2,1,2,1,9,1,2,1,5,1,3,1,7,1,4,1,2,1,6,1,5,1,2,1,2,1,3,1,7,1,4,1,2,1,2,1,2,1,2,1,2,1,2,1,12,1]));//#35
$k[$j++]="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-.";//#37
$k[$j++]="dontdraw version=limiteda";//#37
bwipp_posicode();//#37
debugIsEqual($get($k[--$j],'sbs'),$a([1,5,1,1,1,1,1,1,1,3,1,2,1,1,1,2,1,3,1,1,1,1,1,4,1,2,1,3,1,1,1,2,1,2,1,2,1,2,1,1,1,3,1,4,1,1,1,1,1,3,1,2,1,1,1,3,1,1,1,2,1,1,1,4,1,1,1,7,1,1,1,1,1,6,1,2,1,1,1,5,1,3,1,1,1,4,1,4,1,1,1,3,1,5,1,1,1,2,1,6,1,1,1,1,1,7,1,1,1,6,1,1,1,2,1,5,1,2,1,2,1,4,1,3,1,2,1,3,1,4,1,2,1,2,1,5,1,2,1,1,1,6,1,2,1,5,1,1,1,3,1,4,1,2,1,3,1,3,1,3,1,3,1,2,1,4,1,3,1,1,1,5,1,3,1,4,1,1,1,4,1,3,1,2,1,4,1,2,1,3,1,4,1,1,1,4,1,4,1,3,1,1,1,5,1,2,1,2,1,5,1,1,1,3,1,5,1,2,1,1,1,6,1,1,1,2,1,6,1,1,1,1,1,7,1,1,1,7,1,1,1,1,1,3,1,1,1]));//#40
$_ = Object.getPrototypeOf($_);//#41
}//bwipp_runtest_posicode
console.log("posicode...")
bwipp_runtest_posicode();


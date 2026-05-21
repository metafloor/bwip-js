function bwipp_runtest_code39(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_code39.globals);//#2
var _0=$_.isError;//#20
var _1=$_.isError;//#23
var _2=$_.isError;//#26
var _3=$_.isError;//#29
var _4=$_.isError;//#31
var _5=$a([1,3,1,1,3,1,3,1,1,1,1,1,1,3,3,1,3,1,1,1,1,3,1,1,3,1,3,1,1,1]);//#37
var _6=$_.debugIsEqual;//#37
var _7=$a([1,3,1,1,3,1,3,1,1,1,1,1,1,3,3,1,3,1,1,1,1,3,1,1,3,1,3,1,1,1]);//#40
var _8=$_.debugIsEqual;//#40
var _9=$a([1,3,1,1,3,1,3,1,1,1,3,1,1,3,1,1,1,1,3,1,3,1,1,1,1,3,1,1,3,1,1,3,1,1,3,1,3,1,1,1]);//#43
var _A=$_.debugIsEqual;//#43
var _B=$a([1,3,1,1,3,1,3,1,1,1,1,3,3,1,3,1,1,1,1,1,3,1,1,3,1,1,1,1,3,1,1,3,1,1,1,1,3,1,3,1,1,3,1,1,3,1,3,1,1,1]);//#46
var _C=$_.debugIsEqual;//#46
$k[$j++]=function(){
$k[$j++]="";//#19
$k[$j++]="dontdraw";//#19
bwipp_code39();//#19
};//#19
$k[$j++]='bwipp.code39emptyData';//#19
$k[$j++]=_0;//#19
$k[$j++]=function(){
$k[$j++]="";//#22
$k[$j++]="dontdraw validatecheck";//#22
bwipp_code39();//#22
};//#22
$k[$j++]='bwipp.code39emptyData';//#22
$k[$j++]=_1;//#22
$k[$j++]=function(){
$k[$j++]=",";//#25
$k[$j++]="dontdraw";//#25
bwipp_code39();//#25
};//#25
$k[$j++]='bwipp.code39badCharacter';//#25
$k[$j++]=_2;//#25
$k[$j++]=function(){
$k[$j++]="Z1.";//#28
$k[$j++]="dontdraw validatecheck";//#28
bwipp_code39();//#28
};//#28
$k[$j++]='bwipp.code39badCheckDigit';//#28
$k[$j++]=_3;//#28
$k[$j++]=function(){
var _D=$s(501);//#31
$k[$j++]=_D;//#31
$k[$j++]="dontdraw";//#31
bwipp_code39();//#31
};//#31
$k[$j++]='bwipp.code39inputTooLong';//#31
$k[$j++]=_4;//#31
$k[$j++]=function(){
$k[$j++]="0";//#36
$k[$j++]="dontdraw";//#36
bwipp_code39();//#36
var _E=$k[--$j];//#36
var _F=$get(_E,'sbs');//#36
$k[$j++]=_F;//#36
};//#36
$k[$j++]=_5;//#36
$k[$j++]=_6;//#36
$k[$j++]=function(){
$k[$j++]="0";//#39
$k[$j++]="dontdraw validatecheck";//#39
bwipp_code39();//#39
var _G=$k[--$j];//#39
var _H=$get(_G,'sbs');//#39
$k[$j++]=_H;//#39
};//#39
$k[$j++]=_7;//#39
$k[$j++]=_8;//#39
$k[$j++]=function(){
$k[$j++]="1A";//#42
$k[$j++]="dontdraw";//#42
bwipp_code39();//#42
var _I=$k[--$j];//#42
var _J=$get(_I,'sbs');//#42
$k[$j++]=_J;//#42
};//#42
$k[$j++]=_9;//#42
$k[$j++]=_A;//#42
$k[$j++]=function(){
$k[$j++]="Z1-";//#45
$k[$j++]="dontdraw validatecheck";//#45
bwipp_code39();//#45
var _K=$k[--$j];//#45
var _L=$get(_K,'sbs');//#45
$k[$j++]=_L;//#45
};//#45
$k[$j++]=_B;//#45
$k[$j++]=_C;//#45
$_ = $__;//#45
}//bwipp_runtest_code39
console.log("code39...")
bwipp_runtest_code39();


function bwipp_runtest_code2of5(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_code2of5.globals);//#2
var _0=$_.isError;//#17
var _1=$_.isError;//#20
var _2=$_.isError;//#23
var _3=$_.isError;//#26
var _4=$_.isError;//#29
var _5=$_.isError;//#31
var _6=$a([3,1,3,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,1,1,3]);//#37
var _7=$_.debugIsEqual;//#37
var _8=$a([3,1,3,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,1,1,3]);//#40
var _9=$_.debugIsEqual;//#40
var _A=$a([3,1,3,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,3]);//#43
var _B=$_.debugIsEqual;//#43
var _C=$a([3,1,3,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,3,1,1,1,3]);//#46
var _D=$_.debugIsEqual;//#46
$k[$j++]=function(){
$k[$j++]="";//#16
$k[$j++]="dontdraw";//#16
bwipp_code2of5();//#16
};//#16
$k[$j++]='bwipp.code2of5emptyData';//#16
$k[$j++]=_0;//#16
$k[$j++]=function(){
$k[$j++]="";//#19
$k[$j++]="dontdraw validatecheck";//#19
bwipp_code2of5();//#19
};//#19
$k[$j++]='bwipp.code2of5emptyData';//#19
$k[$j++]=_1;//#19
$k[$j++]=function(){
$k[$j++]="A";//#22
$k[$j++]="dontdraw";//#22
bwipp_code2of5();//#22
};//#22
$k[$j++]='bwipp.code2of5badCharacter';//#22
$k[$j++]=_2;//#22
$k[$j++]=function(){
$k[$j++]="876543211";//#25
$k[$j++]="dontdraw validatecheck";//#25
bwipp_code2of5();//#25
};//#25
$k[$j++]='bwipp.code2of5badCheckDigit';//#25
$k[$j++]=_3;//#25
$k[$j++]=function(){
$k[$j++]="0";//#28
$k[$j++]="dontdraw version=blah";//#28
bwipp_code2of5();//#28
};//#28
$k[$j++]='bwipp.code2of5badVersion';//#28
$k[$j++]=_4;//#28
$k[$j++]=function(){
var _E=$s(501);//#31
$k[$j++]=_E;//#31
$k[$j++]="dontdraw";//#31
bwipp_code2of5();//#31
};//#31
$k[$j++]='bwipp.code2of5inputTooLong';//#31
$k[$j++]=_5;//#31
$k[$j++]=function(){
$k[$j++]="0";//#36
$k[$j++]="dontdraw";//#36
bwipp_code2of5();//#36
var _F=$k[--$j];//#36
var _G=$get(_F,'sbs');//#36
$k[$j++]=_G;//#36
};//#36
$k[$j++]=_6;//#36
$k[$j++]=_7;//#36
$k[$j++]=function(){
$k[$j++]="0";//#39
$k[$j++]="dontdraw validatecheck";//#39
bwipp_code2of5();//#39
var _H=$k[--$j];//#39
var _I=$get(_H,'sbs');//#39
$k[$j++]=_I;//#39
};//#39
$k[$j++]=_8;//#39
$k[$j++]=_9;//#39
$k[$j++]=function(){
$k[$j++]="876543212";//#42
$k[$j++]="dontdraw validatecheck";//#42
bwipp_code2of5();//#42
var _J=$k[--$j];//#42
var _K=$get(_J,'sbs');//#42
$k[$j++]=_K;//#42
};//#42
$k[$j++]=_A;//#42
$k[$j++]=_B;//#42
$k[$j++]=function(){
$k[$j++]="87654321";//#45
$k[$j++]="dontdraw";//#45
bwipp_code2of5();//#45
var _L=$k[--$j];//#45
var _M=$get(_L,'sbs');//#45
$k[$j++]=_M;//#45
};//#45
$k[$j++]=_C;//#45
$k[$j++]=_D;//#45
$_ = $__;//#45
}//bwipp_runtest_code2of5
console.log("code2of5...")
bwipp_runtest_code2of5();


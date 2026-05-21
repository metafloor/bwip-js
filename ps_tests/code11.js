function bwipp_runtest_code11(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_code11.globals);//#2
var _0=$_.isError;//#17
var _1=$_.isError;//#20
var _2=$_.isError;//#23
var _3=$_.isError;//#26
var _4=$_.isError;//#29
var _5=$_.isError;//#32
var _6=$_.isError;//#34
var _7=$a([1,1,3,3,1,1,1,1,1,1,3,1,1,1,3,3,1,1]);//#40
var _8=$_.debugIsEqual;//#40
var _9=$a([1,1,3,3,1,1,1,1,1,1,3,1,1,1,3,3,1,1]);//#43
var _A=$_.debugIsEqual;//#43
var _B=$a([1,1,3,3,1,1,3,1,1,1,3,1,1,3,1,1,3,1,3,3,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,3,1,1]);//#46
var _C=$_.debugIsEqual;//#46
var _D=$a([1,1,3,3,1,1,3,1,1,1,3,1,1,3,1,1,3,1,3,3,1,1,1,1,1,1,3,1,3,1,3,1,3,1,1,1,1,3,3,1,1,1,1,1,1,3,3,1,3,1,1,3,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,1,1,3,1,3,1,1,1,3,1,1,1,1,1,3,3,1,1]);//#49
var _E=$_.debugIsEqual;//#49
$k[$j++]=function(){
$k[$j++]="";//#16
$k[$j++]="dontdraw";//#16
bwipp_code11();//#16
};//#16
$k[$j++]='bwipp.code11emptyData';//#16
$k[$j++]=_0;//#16
$k[$j++]=function(){
$k[$j++]="";//#19
$k[$j++]="dontdraw validatecheck";//#19
bwipp_code11();//#19
};//#19
$k[$j++]='bwipp.code11emptyData';//#19
$k[$j++]=_1;//#19
$k[$j++]=function(){
$k[$j++]="A";//#22
$k[$j++]="dontdraw";//#22
bwipp_code11();//#22
};//#22
$k[$j++]='bwipp.code11badCharacter';//#22
$k[$j++]=_2;//#22
$k[$j++]=function(){
$k[$j++]="12345678901";//#25
$k[$j++]="dontdraw validatecheck";//#25
bwipp_code11();//#25
};//#25
$k[$j++]='bwipp.code11badLength';//#25
$k[$j++]=_3;//#25
$k[$j++]=function(){
$k[$j++]="123-454";//#28
$k[$j++]="dontdraw validatecheck";//#28
bwipp_code11();//#28
};//#28
$k[$j++]='bwipp.code11badCheckDigit';//#28
$k[$j++]=_4;//#28
$k[$j++]=function(){
$k[$j++]="1234567890149";//#31
$k[$j++]="dontdraw validatecheck";//#31
bwipp_code11();//#31
};//#31
$k[$j++]='bwipp.code11badCheckDigits';//#31
$k[$j++]=_5;//#31
$k[$j++]=function(){
var _F=$s(501);//#34
$k[$j++]=_F;//#34
$k[$j++]="dontdraw";//#34
bwipp_code11();//#34
};//#34
$k[$j++]='bwipp.code11inputTooLong';//#34
$k[$j++]=_6;//#34
$k[$j++]=function(){
$k[$j++]="0";//#39
$k[$j++]="dontdraw";//#39
bwipp_code11();//#39
var _G=$k[--$j];//#39
var _H=$get(_G,'sbs');//#39
$k[$j++]=_H;//#39
};//#39
$k[$j++]=_7;//#39
$k[$j++]=_8;//#39
$k[$j++]=function(){
$k[$j++]="0";//#42
$k[$j++]="dontdraw validatecheck";//#42
bwipp_code11();//#42
var _I=$k[--$j];//#42
var _J=$get(_I,'sbs');//#42
$k[$j++]=_J;//#42
};//#42
$k[$j++]=_9;//#42
$k[$j++]=_A;//#42
$k[$j++]=function(){
$k[$j++]="123-455";//#45
$k[$j++]="dontdraw validatecheck";//#45
bwipp_code11();//#45
var _K=$k[--$j];//#45
var _L=$get(_K,'sbs');//#45
$k[$j++]=_L;//#45
};//#45
$k[$j++]=_B;//#45
$k[$j++]=_C;//#45
$k[$j++]=function(){
$k[$j++]="123456789014-";//#48
$k[$j++]="dontdraw validatecheck";//#48
bwipp_code11();//#48
var _M=$k[--$j];//#48
var _N=$get(_M,'sbs');//#48
$k[$j++]=_N;//#48
};//#48
$k[$j++]=_D;//#48
$k[$j++]=_E;//#48
$_ = $__;//#48
}//bwipp_runtest_code11
console.log("code11...")
bwipp_runtest_code11();


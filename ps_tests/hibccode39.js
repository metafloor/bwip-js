function bwipp_runtest_hibccode39(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_hibccode39.globals);//#2
var _0=$_.isError;//#20
var _1=$_.isError;//#23
var _2=$_.isError;//#26
var _3=$_.isError;//#29
var _4=$_.isError;//#32
var _5=$_.isError;//#34
$k[$j++]=function(){
$k[$j++]="";//#19
$k[$j++]="dontdraw";//#19
bwipp_hibccode39();//#19
};//#19
$k[$j++]='bwipp.hibccode39emptyData';//#19
$k[$j++]=_0;//#19
$k[$j++]=function(){
$k[$j++]="";//#22
$k[$j++]="dontdraw validatecheck";//#22
bwipp_hibccode39();//#22
};//#22
$k[$j++]='bwipp.hibccode39emptyData';//#22
$k[$j++]=_1;//#22
$k[$j++]=function(){
$k[$j++]=",";//#25
$k[$j++]="dontdraw";//#25
bwipp_hibccode39();//#25
};//#25
$k[$j++]='bwipp.hibccode39badCharacter';//#25
$k[$j++]=_2;//#25
$k[$j++]=function(){
$k[$j++]="A123BJC5D6E71F";//#28
$k[$j++]="dontdraw validatecheck";//#28
bwipp_hibccode39();//#28
};//#28
$k[$j++]='bwipp.hibccode39badCheckDigit';//#28
$k[$j++]=_3;//#28
$k[$j++]=function(){
$k[$j++]="/";//#31
$k[$j++]="dontdraw validatecheck";//#31
bwipp_hibccode39();//#31
};//#31
$k[$j++]='bwipp.hibccode39badCheckDigit';//#31
$k[$j++]=_4;//#31
$k[$j++]=function(){
var _6=$s(501);//#34
$k[$j++]=_6;//#34
$k[$j++]="dontdraw";//#34
bwipp_hibccode39();//#34
};//#34
$k[$j++]='bwipp.hibccode39inputTooLong';//#34
$k[$j++]=_5;//#34
$k[$j++]="A123BJC5D6E71G";//#34
$k[$j++]="dontdraw validatecheck";//#34
bwipp_hibccode39();//#34
var _7=$k[--$j];//#39
var _8=$get(_7,'sbs');//#39
var _9=$a([1,3,1,1,3,1,3,1,1,1,1,3,1,1,1,3,1,3,1,1,3,1,1,1,1,3,1,1,3,1,3,1,1,3,1,1,1,1,3,1,1,1,3,3,1,1,1,1,3,1,3,1,3,3,1,1,1,1,1,1,1,1,3,1,1,3,1,1,3,1,1,1,1,1,3,3,3,1,1,1,3,1,3,1,1,3,1,1,1,1,3,1,1,3,3,1,1,1,1,1,1,1,1,1,3,3,1,1,3,1,1,1,3,3,3,1,1,1,1,1,3,1,1,1,3,3,1,1,1,1,1,1,1,3,1,1,3,1,3,1,3,1,1,3,1,1,1,1,3,1,1,1,1,1,1,3,3,1,3,1,1,3,1,1,3,1,3,1,1,1]);//#41
var _A=$_.debugIsEqual;//#42
$k[$j++]=_8;//#44
$k[$j++]=_9;//#44
$k[$j++]=_A;//#44
$k[$j++]="$$52001510X3G";//#44
$k[$j++]="dontdraw";//#44
bwipp_hibccode39();//#44
var _B=$k[--$j];//#44
var _C=$get(_B,'sbs');//#44
var _D=$a([1,3,1,1,3,1,3,1,1,1,1,3,1,1,1,3,1,3,1,1,1,3,1,3,1,3,1,1,1,1,1,3,1,3,1,3,1,1,1,1,3,1,1,3,3,1,1,1,1,1,1,1,3,3,1,1,1,1,3,1,1,1,1,3,3,1,3,1,1,1,1,1,1,3,3,1,3,1,1,1,3,1,1,3,1,1,1,1,3,1,3,1,1,3,3,1,1,1,1,1,3,1,1,3,1,1,1,1,3,1,1,1,1,3,3,1,3,1,1,1,1,3,1,1,3,1,1,1,3,1,3,1,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,1,3,1,1,1,1,1,3,3,1,1,3,1,1,3,1,1,3,1,3,1,1,1]);//#46
var _E=$_.debugIsEqual;//#47
$k[$j++]=_C;//#48
$k[$j++]=_D;//#48
$k[$j++]=_E;//#48
$_ = $__;//#48
}//bwipp_runtest_hibccode39
console.log("hibccode39...")
bwipp_runtest_hibccode39();


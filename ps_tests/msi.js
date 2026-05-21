function bwipp_runtest_msi(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_msi.globals);//#2
var _0=$a([2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1]);//#16
var _1=$_.debugIsEqual;//#16
var _2=$a([2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1]);//#19
var _3=$_.debugIsEqual;//#19
var _4=$a([2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]);//#22
var _5=$_.debugIsEqual;//#22
var _6=$a([2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]);//#25
var _7=$_.debugIsEqual;//#25
var _8=$_.isError;//#28
var _9=$_.isError;//#31
var _A=$_.isError;//#34
var _B=$a([2,1,1,2,1,2,1,2,2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,2,1,1,2,2,1,1,2,1,2,1,2,2,1,1,2,2,1,1,2,2,1,2,1,1,2,1,2,2,1,2,1,2,1,1,2,2,1,1,2,1,2,1,2,1]);//#38
var _C=$_.debugIsEqual;//#38
var _D=$a([2,1,1,2,1,2,1,2,2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,2,1,1,2,2,1,1,2,1,2,1,2,2,1,1,2,2,1,1,2,2,1,2,1,1,2,1,2,2,1,2,1,2,1,2,1,1,2,1,2,2,1,1,2,1]);//#41
var _E=$_.debugIsEqual;//#41
var _F=$_.isError;//#44
var _G=$_.isError;//#47
var _H=$_.isError;//#49
$k[$j++]=function(){
$k[$j++]="2211";//#15
$k[$j++]="dontdraw includecheck checktype=mod11 badmod11";//#15
bwipp_msi();//#15
var _I=$k[--$j];//#15
var _J=$get(_I,'sbs');//#15
$k[$j++]=_J;//#15
};//#15
$k[$j++]=_0;//#15
$k[$j++]=_1;//#15
$k[$j++]=function(){
$k[$j++]="2211";//#18
$k[$j++]="dontdraw includecheck checktype=ncrmod11 badmod11";//#18
bwipp_msi();//#18
var _K=$k[--$j];//#18
var _L=$get(_K,'sbs');//#18
$k[$j++]=_L;//#18
};//#18
$k[$j++]=_2;//#18
$k[$j++]=_3;//#18
$k[$j++]=function(){
$k[$j++]="2211";//#21
$k[$j++]="dontdraw includecheck checktype=mod1110 badmod11";//#21
bwipp_msi();//#21
var _M=$k[--$j];//#21
var _N=$get(_M,'sbs');//#21
$k[$j++]=_N;//#21
};//#21
$k[$j++]=_4;//#21
$k[$j++]=_5;//#21
$k[$j++]=function(){
$k[$j++]="2211";//#24
$k[$j++]="dontdraw includecheck checktype=ncrmod1110 badmod11";//#24
bwipp_msi();//#24
var _O=$k[--$j];//#24
var _P=$get(_O,'sbs');//#24
$k[$j++]=_P;//#24
};//#24
$k[$j++]=_6;//#24
$k[$j++]=_7;//#24
$k[$j++]=function(){
$k[$j++]="2211";//#27
$k[$j++]="dontdraw includecheck checktype=mod10 badmod11";//#27
bwipp_msi();//#27
};//#27
$k[$j++]='bwipp.msiBadMod11Mismatch';//#27
$k[$j++]=_8;//#27
$k[$j++]=function(){
$k[$j++]="2211";//#30
$k[$j++]="dontdraw includecheck checktype=mod1010 badmod11";//#30
bwipp_msi();//#30
};//#30
$k[$j++]='bwipp.msiBadMod11Mismatch';//#30
$k[$j++]=_9;//#30
$k[$j++]=function(){
$k[$j++]="2211";//#33
$k[$j++]="dontdraw includecheck checktype=mod11";//#33
bwipp_msi();//#33
};//#33
$k[$j++]='bwipp.msiBadMod11NotSpecified';//#33
$k[$j++]=_A;//#33
$k[$j++]=function(){
$k[$j++]="1234567";//#37
$k[$j++]="dontdraw includecheck checktype=mod11";//#37
bwipp_msi();//#37
var _Q=$k[--$j];//#37
var _R=$get(_Q,'sbs');//#37
$k[$j++]=_R;//#37
};//#37
$k[$j++]=_B;//#37
$k[$j++]=_C;//#37
$k[$j++]=function(){
$k[$j++]="1234567";//#40
$k[$j++]="dontdraw includecheck checktype=ncrmod11";//#40
bwipp_msi();//#40
var _S=$k[--$j];//#40
var _T=$get(_S,'sbs');//#40
$k[$j++]=_T;//#40
};//#40
$k[$j++]=_D;//#40
$k[$j++]=_E;//#40
$k[$j++]=function(){
$k[$j++]="123A";//#43
$k[$j++]="dontdraw";//#43
bwipp_msi();//#43
};//#43
$k[$j++]='bwipp.msiBadCharacter';//#43
$k[$j++]=_F;//#43
$k[$j++]=function(){
$k[$j++]="1234";//#46
$k[$j++]="checktype=mod10 dontdraw";//#46
bwipp_msi();//#46
};//#46
$k[$j++]='bwipp.msiCheckTypeWithoutCheck';//#46
$k[$j++]=_G;//#46
$k[$j++]=function(){
var _U=$s(501);//#49
$k[$j++]=_U;//#49
$k[$j++]="dontdraw";//#49
bwipp_msi();//#49
};//#49
$k[$j++]='bwipp.msiinputTooLong';//#49
$k[$j++]=_H;//#49
$_ = $__;//#49
}//bwipp_runtest_msi
console.log("msi...")
bwipp_runtest_msi();


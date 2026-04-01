function bwipp_runtest_rationalizedCodabar(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_rationalizedCodabar.globals);//#2
var _0=$_.isError;//#20
var _1=$_.isError;//#23
var _2=$_.isError;//#26
var _3=$_.isError;//#29
var _4=$_.isError;//#32
var _5=$_.isError;//#35
var _6=$_.isError;//#37
$k[$j++]=function(){
$k[$j++]="A";//#19
$k[$j++]="dontdraw";//#19
bwipp_rationalizedCodabar();//#19
};//#19
$k[$j++]='bwipp.rationalizedCodabarBadLength';//#19
$k[$j++]=_0;//#19
$k[$j++]=function(){
$k[$j++]="AB";//#22
$k[$j++]="dontdraw validatecheck";//#22
bwipp_rationalizedCodabar();//#22
};//#22
$k[$j++]='bwipp.rationalizedCodabarBadLength';//#22
$k[$j++]=_1;//#22
$k[$j++]=function(){
$k[$j++]="TB";//#25
$k[$j++]="dontdraw";//#25
bwipp_rationalizedCodabar();//#25
};//#25
$k[$j++]='bwipp.rationalizedCodabarBadStartStop';//#25
$k[$j++]=_2;//#25
$k[$j++]=function(){
$k[$j++]="AN";//#28
$k[$j++]="dontdraw altstartstop";//#28
bwipp_rationalizedCodabar();//#28
};//#28
$k[$j++]='bwipp.rationalizedCodabarBadAltStartStop';//#28
$k[$j++]=_3;//#28
$k[$j++]=function(){
$k[$j++]="AAB";//#31
$k[$j++]="dontdraw";//#31
bwipp_rationalizedCodabar();//#31
};//#31
$k[$j++]='bwipp.rationalizedCodabarBadCharacter';//#31
$k[$j++]=_4;//#31
$k[$j++]=function(){
$k[$j++]="A37859.B";//#34
$k[$j++]="dontdraw validatecheck";//#34
bwipp_rationalizedCodabar();//#34
};//#34
$k[$j++]='bwipp.rationalizedCodabarBadCheckDigit';//#34
$k[$j++]=_5;//#34
$k[$j++]=function(){
var _7=$s(501);//#37
$k[$j++]=_7;//#37
$k[$j++]="dontdraw";//#37
bwipp_rationalizedCodabar();//#37
};//#37
$k[$j++]='bwipp.rationalizedCodabarinputTooLong';//#37
$k[$j++]=_6;//#37
$k[$j++]="A37859B";//#37
$k[$j++]="dontdraw";//#37
bwipp_rationalizedCodabar();//#37
var _8=$k[--$j];//#42
var _9=$get(_8,'sbs');//#42
var _A=$a([1,1,3,3,1,3,1,1,3,3,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,3,3,1,1,1,1,1,3,1,1,1,1,3,1,1,3,1,1,3,1,1,1,1,1,3,1,3,1,1,3,1]);//#44
var _B=$_.debugIsEqual;//#45
$k[$j++]=_9;//#47
$k[$j++]=_A;//#47
$k[$j++]=_B;//#47
$k[$j++]="A37859+B";//#47
$k[$j++]="dontdraw validatecheck";//#47
bwipp_rationalizedCodabar();//#47
var _C=$k[--$j];//#47
var _D=$get(_C,'sbs');//#47
var _E=$a([1,1,3,3,1,3,1,1,3,3,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,3,3,1,1,1,1,1,3,1,1,1,1,3,1,1,3,1,1,3,1,1,1,1,1,1,3,1,3,1,3,1,1,3,1,3,1,1,3,1]);//#49
var _F=$_.debugIsEqual;//#50
$k[$j++]=_D;//#52
$k[$j++]=_E;//#52
$k[$j++]=_F;//#52
$k[$j++]="AB";//#52
$k[$j++]="dontdraw";//#52
bwipp_rationalizedCodabar();//#52
var _G=$k[--$j];//#52
var _H=$get(_G,'sbs');//#52
var _I=$a([1,1,3,3,1,3,1,1,1,3,1,3,1,1,3,1]);//#54
var _J=$_.debugIsEqual;//#55
$k[$j++]=_H;//#57
$k[$j++]=_I;//#57
$k[$j++]=_J;//#57
$k[$j++]="TN";//#57
$k[$j++]="dontdraw altstartstop";//#57
bwipp_rationalizedCodabar();//#57
var _K=$k[--$j];//#57
var _L=$get(_K,'sbs');//#57
var _M=$a([1,1,3,3,1,3,1,1,1,3,1,3,1,1,3,1]);//#59
var _N=$_.debugIsEqual;//#60
$k[$j++]=_L;//#61
$k[$j++]=_M;//#61
$k[$j++]=_N;//#61
$_ = $__;//#61
}//bwipp_runtest_rationalizedCodabar
console.log("rationalizedCodabar...")
bwipp_runtest_rationalizedCodabar();


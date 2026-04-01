function bwipp_runtest_posicode(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_posicode.globals);//#2
var _0=$_.isError;//#17
var _1=$_.isError;//#20
var _2=$_.isError;//#23
var _3=$_.isError;//#25
var _4=$_.isError;//#28
var _5=$_.isError;//#29
var _6=$_.isError;//#30
var _7=$_.isError;//#31
var _8=$_.isError;//#32
var _9=$_.isError;//#35
var _A=$_.isError;//#36
$k[$j++]=function(){
$k[$j++]="ABC123";//#16
$k[$j++]="dontdraw version=c";//#16
bwipp_posicode();//#16
};//#16
$k[$j++]='bwipp.posicodeInvalidVersion';//#16
$k[$j++]=_0;//#16
$k[$j++]=function(){
$k[$j++]="a";//#19
$k[$j++]="dontdraw version=limitedb";//#19
bwipp_posicode();//#19
};//#19
$k[$j++]='bwipp.posicodeBadCharacter';//#19
$k[$j++]=_1;//#19
$k[$j++]=function(){
$k[$j++]="AB^029CD";//#22
$k[$j++]="dontdraw parse version=limitedb";//#22
bwipp_posicode();//#22
};//#22
$k[$j++]='bwipp.posicodeBadCharacter';//#22
$k[$j++]=_2;//#22
$k[$j++]=function(){
var _B=$s(501);//#25
$k[$j++]=_B;//#25
$k[$j++]="dontdraw";//#25
bwipp_posicode();//#25
};//#25
$k[$j++]='bwipp.posicodeinputTooLong';//#25
$k[$j++]=_3;//#25
$k[$j++]=function(){
$k[$j++]="^12A";//#28
$k[$j++]="raw dontdraw";//#28
bwipp_posicode();//#28
};//#28
$k[$j++]='bwipp.posicodeBadRawFormat';//#28
$k[$j++]=_4;//#28
$k[$j++]=function(){
$k[$j++]="^12";//#29
$k[$j++]="raw dontdraw";//#29
bwipp_posicode();//#29
};//#29
$k[$j++]='bwipp.posicodeBadRawFormat';//#29
$k[$j++]=_5;//#29
$k[$j++]=function(){
$k[$j++]="^1";//#30
$k[$j++]="raw dontdraw";//#30
bwipp_posicode();//#30
};//#30
$k[$j++]='bwipp.posicodeBadRawFormat';//#30
$k[$j++]=_6;//#30
$k[$j++]=function(){
$k[$j++]="^";//#31
$k[$j++]="raw dontdraw";//#31
bwipp_posicode();//#31
};//#31
$k[$j++]='bwipp.posicodeBadRawFormat';//#31
$k[$j++]=_7;//#31
$k[$j++]=function(){
$k[$j++]="^020garbage";//#32
$k[$j++]="raw dontdraw";//#32
bwipp_posicode();//#32
};//#32
$k[$j++]='bwipp.posicodeBadRawFormat';//#32
$k[$j++]=_8;//#32
$k[$j++]=function(){
$k[$j++]="^046";//#35
$k[$j++]="raw dontdraw";//#35
bwipp_posicode();//#35
};//#35
$k[$j++]='bwipp.posicodeBadRawCodeword';//#35
$k[$j++]=_9;//#35
$k[$j++]=function(){
$k[$j++]="^999";//#36
$k[$j++]="raw dontdraw";//#36
bwipp_posicode();//#36
};//#36
$k[$j++]='bwipp.posicodeBadRawCodeword';//#36
$k[$j++]=_A;//#36
$k[$j++]="AB^029CD";//#36
$k[$j++]="dontdraw parse version=a";//#36
bwipp_posicode();//#36
var _C=$k[--$j];//#40
var _D=$get(_C,'sbs');//#40
var _E=$a([1,12,1,1,1,1,1,2,1,8,1,1,1,1,1,7,1,2,1,1,1,1,1,1,1,8,1,1,1,4,1,2,1,6,1,3,1,1,1,5,1,4,1,1,1,1,1,2,1,6,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1]);//#42
var _F=$_.debugIsEqual;//#43
$k[$j++]=_D;//#45
$k[$j++]=_E;//#45
$k[$j++]=_F;//#45
$k[$j++]="AB^029CD";//#45
$k[$j++]="dontdraw parse version=b";//#45
bwipp_posicode();//#45
var _G=$k[--$j];//#45
var _H=$get(_G,'sbs');//#45
var _I=$a([1,12,1,2,1,3,1,2,1,9,1,2,1,2,1,8,1,3,1,2,1,2,1,2,1,9,1,2,1,5,1,3,1,7,1,4,1,2,1,6,1,5,1,2,1,2,1,3,1,7,1,4,1,2,1,2,1,2,1,2,1,2,1,2,1,12,1]);//#47
var _J=$_.debugIsEqual;//#48
$k[$j++]=_H;//#50
$k[$j++]=_I;//#50
$k[$j++]=_J;//#50
$k[$j++]="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-.";//#50
$k[$j++]="dontdraw version=limiteda";//#50
bwipp_posicode();//#50
var _K=$k[--$j];//#50
var _L=$get(_K,'sbs');//#50
var _M=$a([1,5,1,1,1,1,1,1,1,3,1,2,1,1,1,2,1,3,1,1,1,1,1,4,1,2,1,3,1,1,1,2,1,2,1,2,1,2,1,1,1,3,1,4,1,1,1,1,1,3,1,2,1,1,1,3,1,1,1,2,1,1,1,4,1,1,1,7,1,1,1,1,1,6,1,2,1,1,1,5,1,3,1,1,1,4,1,4,1,1,1,3,1,5,1,1,1,2,1,6,1,1,1,1,1,7,1,1,1,6,1,1,1,2,1,5,1,2,1,2,1,4,1,3,1,2,1,3,1,4,1,2,1,2,1,5,1,2,1,1,1,6,1,2,1,5,1,1,1,3,1,4,1,2,1,3,1,3,1,3,1,3,1,2,1,4,1,3,1,1,1,5,1,3,1,4,1,1,1,4,1,3,1,2,1,4,1,2,1,3,1,4,1,1,1,4,1,4,1,3,1,1,1,5,1,2,1,2,1,5,1,1,1,3,1,5,1,2,1,1,1,6,1,1,1,2,1,6,1,1,1,1,1,7,1,1,1,7,1,1,1,1,1,3,1,1,1]);//#52
var _N=$_.debugIsEqual;//#53
$k[$j++]=_L;//#60
$k[$j++]=_M;//#60
$k[$j++]=_N;//#60
$k[$j++]="^160";//#60
$k[$j++]="dontdraw parse version=a";//#60
bwipp_posicode();//#60
var _O=$k[--$j];//#60
var _P=$get(_O,'sbs');//#60
var _Q=$a([1,12,1,1,1,1,1,2,1,1,1,1,1,8,1,1,1,1,1,8,1,2,1,3,1,5,1,3,1,3,1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,11,1]);//#61
var _R=$_.debugIsEqual;//#61
$k[$j++]=_P;//#63
$k[$j++]=_Q;//#63
$k[$j++]=_R;//#63
$k[$j++]="^160";//#63
$k[$j++]="dontdraw parse version=b";//#63
bwipp_posicode();//#63
var _S=$k[--$j];//#63
var _T=$get(_S,'sbs');//#63
var _U=$a([1,12,1,2,1,3,1,2,1,2,1,2,1,9,1,2,1,2,1,9,1,3,1,4,1,6,1,4,1,4,1,3,1,3,1,3,1,3,1,2,1,2,1,2,1,2,1,12,1]);//#64
var _V=$_.debugIsEqual;//#64
$k[$j++]=_T;//#66
$k[$j++]=_U;//#66
$k[$j++]=_V;//#66
$k[$j++]="^160^160^160^160";//#66
$k[$j++]="dontdraw parse version=a";//#66
bwipp_posicode();//#66
var _W=$k[--$j];//#66
var _X=$get(_W,'sbs');//#66
var _Y=$a([1,12,1,1,1,1,1,2,1,1,1,1,1,8,1,1,1,1,1,8,1,1,1,1,1,8,1,1,1,1,1,8,1,2,1,3,1,5,1,2,1,3,1,5,1,2,1,3,1,5,1,2,1,3,1,5,1,4,1,1,1,2,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,11,1]);//#67
var _Z=$_.debugIsEqual;//#67
$k[$j++]=_X;//#68
$k[$j++]=_Y;//#68
$k[$j++]=_Z;//#68
$_ = $__;//#68
}//bwipp_runtest_posicode
console.log("posicode...")
bwipp_runtest_posicode();


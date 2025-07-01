function bwipp_runtest_microqrcode(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#15
$_.o=$k[--$j];//#16
$_.t=$k[--$j];//#17
var _8=function(){
$k[$j++]=$_.t;//#18
$k[$j++]=$_.o;//#18
bwipp_microqrcode();//#18
var _7=$get($k[--$j],'pixs');//#18
$k[$j++]=_7;//#18
};//#18
isEqual(_8,$_.e);//#18
};//#18
$_.er_tmpl=function(){
$_.e=$k[--$j];//#22
$_.o=$k[--$j];//#23
$_.t=$k[--$j];//#24
var _H=function(){
$k[$j++]=$_.t;//#25
$k[$j++]=$_.o;//#25
bwipp_microqrcode();//#25
var _G=$get($k[--$j],'pixs');//#25
$k[$j++]=_G;//#25
};//#25
isError(_H,$_.e);//#25
};//#25
var _J=function(){
$k[$j++]="^128";//#32
$k[$j++]="parse fixedeclevel debugcws";//#32
bwipp_microqrcode();//#32
};//#32
debugIsEqual(_J,$a([134,0,0,236,17,236,17,236,17,236,0]));//#32
var _L=function(){
$k[$j++]="^129";//#36
$k[$j++]="parse fixedeclevel debugcws";//#36
bwipp_microqrcode();//#36
};//#36
debugIsEqual(_L,$a([134,4,0,236,17,236,17,236,17,236,0]));//#36
var _N=function(){
$k[$j++]="ABCDEFGHIJK";//#44
$k[$j++]="version=M3 eclevel=M fixedeclevel debugcws";//#44
bwipp_microqrcode();//#44
};//#44
debugIsEqual(_N,$a([108,230,162,149,10,184,89,234,128]));//#44
var _P=function(){
$k[$j++]="???????????????";//#49
$k[$j++]="version=M4 eclevel=L fixedeclevel debugcws";//#49
bwipp_microqrcode();//#49
};//#49
debugIsEqual(_P,$a([79,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]));//#49
var _R=function(){
$k[$j++]="^147^095^228^170^130^226^147^095^228^170^130^226^147^095^228^170^130^226";//#54
$k[$j++]="parse version=M4 eclevel=L fixedeclevel debugcws";//#54
bwipp_microqrcode();//#54
};//#54
debugIsEqual(_R,$a([114,217,253,85,5,137,179,250,170,11,19,103,245,84,22,32]));//#54
var _T=function(){
$k[$j++]="?^147^095^228^170^130^226^147^095^228^170?";//#59
$k[$j++]="parse version=M4 eclevel=L fixedeclevel debugcws";//#59
bwipp_microqrcode();//#59
};//#59
debugIsEqual(_T,$a([76,63,147,95,228,170,130,226,147,95,228,170,63,0,0,236]));//#59
var _V=function(){
$k[$j++]="?^147^095^228^170^130^2261";//#64
$k[$j++]="parse version=M3 eclevel=L fixedeclevel debugcws";//#64
bwipp_microqrcode();//#64
};//#64
debugIsEqual(_V,$a([132,255,109,159,213,80,88,128,136,0,0]));//#64
var _X=function(){
$k[$j++]="?^147^095^228^170^130^226^147^0951";//#69
$k[$j++]="parse version=M3 eclevel=L fixedeclevel debugcws";//#69
bwipp_microqrcode();//#69
};//#69
debugIsEqual(_X,$a([132,255,141,159,213,80,88,155,62,4,64]));//#69
var _Z=function(){
$k[$j++]="?^147^095^228^170^130^226^147^095^228^1701";//#74
$k[$j++]="parse version=M4 eclevel=L fixedeclevel debugcws";//#74
bwipp_microqrcode();//#74
};//#74
debugIsEqual(_Z,$a([65,63,106,217,253,85,5,137,179,250,170,0,136,0,236,17]));//#74
var _b=function(){
$k[$j++]="ABC^147^095";//#79
$k[$j++]="parse version=M3 eclevel=L fixedeclevel debugcws";//#79
bwipp_microqrcode();//#79
};//#79
debugIsEqual(_b,$a([76,230,153,150,207,128,236,17,236,17,0]));//#79
var _d=function(){
$k[$j++]="K9^000^000^000^000^000^000^000^000^000^000^000^000^000";//#84
$k[$j++]="parse fixedeclevel debugcws";//#84
bwipp_microqrcode();//#84
};//#84
debugIsEqual(_d,$a([79,75,57,0,0,0,0,0,0,0,0,0,0,0,0,0]));//#84
var _f=function(){
$k[$j++]="9K^000^000^000^000^000^000^000^000^000^000^000^000^000";//#88
$k[$j++]="parse fixedeclevel debugcws";//#88
bwipp_microqrcode();//#88
};//#88
debugIsEqual(_f,$a([79,57,75,0,0,0,0,0,0,0,0,0,0,0,0,0]));//#88
var _h=function(){
$k[$j++]="K9K^000^000^000^000^000^000^000^000^000^000^000^000";//#93
$k[$j++]="parse fixedeclevel debugcws";//#93
bwipp_microqrcode();//#93
};//#93
debugIsEqual(_h,$a([79,75,57,75,0,0,0,0,0,0,0,0,0,0,0,0]));//#93
var _j=function(){
$k[$j++]="^000^000^000^000^000^000^000^000^000^000^000^000K9K";//#97
$k[$j++]="parse fixedeclevel debugcws";//#97
bwipp_microqrcode();//#97
};//#97
debugIsEqual(_j,$a([79,0,0,0,0,0,0,0,0,0,0,0,0,75,57,75]));//#97
var _l=function(){
$k[$j++]="K9K9^000^000^000^000^000^000^000^000^000^000^000";//#103
$k[$j++]="parse fixedeclevel debugcws";//#103
bwipp_microqrcode();//#103
};//#103
debugIsEqual(_l,$a([36,113,174,53,44,0,0,0,0,0,0,0,0,0,0,0]));//#103
var _m=$a([75,0,0,0,0,0,0,0,0,0,0,0,36,113,174,52]);//#108
var _n=function(){
$k[$j++]="^000^000^000^000^000^000^000^000^000^000^000K9K9";//#107
$k[$j++]="parse fixedeclevel debugcws";//#107
bwipp_microqrcode();//#107
};//#107
debugIsEqual(_n,_m);//#107
var _p=function(){
$k[$j++]="K9K9K9K^000^000^000^000^000^000^000^000^000";//#112
$k[$j++]="parse fixedeclevel debugcws";//#112
bwipp_microqrcode();//#112
};//#112
debugIsEqual(_p,$a([39,113,174,53,198,168,146,0,0,0,0,0,0,0,0,0]));//#112
var _r=function(){
$k[$j++]="^000^000^000^000^000^000^000^000^000K9K9K9K";//#116
$k[$j++]="parse fixedeclevel debugcws";//#116
bwipp_microqrcode();//#116
};//#116
debugIsEqual(_r,$a([73,0,0,0,0,0,0,0,0,0,39,113,174,53,198,168]));//#116
var _t=function(){
$k[$j++]="^000^000^000^000^000^000^000^000^000KK999KK";//#120
$k[$j++]="parse fixedeclevel debugcws";//#120
bwipp_microqrcode();//#120
};//#120
debugIsEqual(_t,$a([73,0,0,0,0,0,0,0,0,0,39,115,6,120,212,168]));//#120
$k[$j++]="^000^000^000^000^000^000^000^000^000KK9999K";//#123
$k[$j++]="parse fixedeclevel dontdraw";//#123
$k[$j++]='bwipp.qrcodeNoValidSymbol#123';//#123
$_.er_tmpl();//#123
var _v=function(){
$k[$j++]="K9K9K9K9^000^000^000^000^000^000^000^000";//#127
$k[$j++]="parse fixedeclevel debugcws";//#127
bwipp_microqrcode();//#127
};//#127
debugIsEqual(_v,$a([40,113,174,53,198,184,212,128,0,0,0,0,0,0,0,0]));//#127
var _x=function(){
$k[$j++]="^000^000^000^000^000^000^000^000K9K9K9K9";//#131
$k[$j++]="parse fixedeclevel debugcws";//#131
bwipp_microqrcode();//#131
};//#131
debugIsEqual(_x,$a([72,0,0,0,0,0,0,0,0,40,113,174,53,198,184,208]));//#131
var _z=function(){
$k[$j++]="K9K9K9K9K9^000^000^000^000^000^000^000";//#136
$k[$j++]="parse fixedeclevel debugcws";//#136
bwipp_microqrcode();//#136
};//#136
debugIsEqual(_z,$a([42,113,174,53,198,184,215,26,142,0,0,0,0,0,0,0]));//#136
$k[$j++]="^000^000^000^000^000^000^000K9K9K9K9K9";//#139
$k[$j++]="parse dontdraw";//#139
$k[$j++]='bwipp.qrcodeNoValidSymbol#139';//#139
$_.er_tmpl();//#139
var _11=function(){
$k[$j++]="^000^000^000^000^000^000^000K9K9K9K9K";//#142
$k[$j++]="parse fixedeclevel debugcws";//#142
bwipp_microqrcode();//#142
};//#142
debugIsEqual(_11,$a([72,0,0,0,0,0,0,0,75,40,53,38,164,212,154,144]));//#142
$k[$j++]="01234567";//#163
$k[$j++]="dontdraw eclevel=L fixedeclevel";//#163
$k[$j++]=$a([1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1]);//#163
$_.eq_tmpl();//#163
$k[$j++]="12345";//#180
$k[$j++]="dontdraw eclevel=M fixedeclevel";//#180
$k[$j++]=$a([1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1]);//#180
$_.eq_tmpl();//#180
$_ = $__;//#181
}//bwipp_runtest_microqrcode
console.log("microqrcode...")
bwipp_runtest_microqrcode();


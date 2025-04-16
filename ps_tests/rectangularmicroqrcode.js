function bwipp_runtest_rectangularmicroqrcode(){
$_ = Object.create($_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#15
$_.o=$k[--$j];//#16
$_.t=$k[--$j];//#17
var _8=function(){
$k[$j++]=$_.t;//#18
$k[$j++]=$_.o;//#18
bwipp_rectangularmicroqrcode();//#18
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
bwipp_rectangularmicroqrcode();//#25
var _G=$get($k[--$j],'pixs');//#25
$k[$j++]=_G;//#25
};//#25
isError(_H,$_.e);//#25
};//#25
var _J=function(){
$k[$j++]="ABCDEFG";//#33
$k[$j++]="version=R7x43 fixedeclevel debugcws";//#33
bwipp_rectangularmicroqrcode();//#33
};//#33
debugIsEqual(_J,$a([92,230,162,149,10,128]));//#33
var _L=function(){
$k[$j++]="0123456";//#38
$k[$j++]="version=R11x27 eclevel=H fixedeclevel debugecc";//#38
bwipp_rectangularmicroqrcode();//#38
};//#38
debugIsEqual(_L,$a([46,6,43,44,0,17,132,191,191,171,228,80,46,175,36,0]));//#38
var _N=function(){
$k[$j++]="1234567890123456789012345678901234567890123456789012345678901";//#43
$k[$j++]="version=R13x43 fixedeclevel debugcws";//#43
bwipp_rectangularmicroqrcode();//#43
};//#43
debugIsEqual(_N,$a([62,143,110,70,42,6,43,53,55,10,117,70,251,208,246,228,98,160,98,179,83,112,167,84,111,189,8]));//#43
var _P=function(){
$k[$j++]="123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123";//#50
$k[$j++]="version=R13x77 fixedeclevel debugcws";//#50
bwipp_rectangularmicroqrcode();//#50
};//#50
debugIsEqual(_P,$a([62,199,183,35,21,3,21,154,155,133,58,163,125,232,123,114,49,80,49,89,169,184,83,170,55,222,135,183,35,21,3,21,154,155,133,58,163,125,232,123,114,49,80,49,89,169,184,83,170,55,222,135,176]));//#50
$k[$j++]=function(){
$k[$j++]="^ECI000009^161^162^163^164^165";//#58
$k[$j++]="parse parsefnc version=R17x139 eclevel=M fixedeclevel debugcws";//#58
bwipp_rectangularmicroqrcode();//#58
};//#58
$k[$j++]=Infinity;//#59
$k[$j++]=225;//#59
$k[$j++]=44;//#59
$k[$j++]=22;//#59
$k[$j++]=134;//#59
$k[$j++]=138;//#59
$k[$j++]=142;//#59
$k[$j++]=146;//#59
$k[$j++]=148;//#59
$k[$j++]=0;//#59
$k[$j++]=236;//#59
for(var _Q=0,_R=71;_Q<_R;_Q++){//#59
$k[$j++]=17;//#59
$k[$j++]=236;//#59
}//#59
var _S=$a();//#58
debugIsEqual($k[--$j],_S);//#59
var _V=function(){
$k[$j++]="0123456789012345";//#63
$k[$j++]="version=R7x59 fixedeclevel debugcws";//#63
bwipp_rectangularmicroqrcode();//#63
};//#63
debugIsEqual(_V,$a([48,3,21,154,155,133,58,148,0,236,17,236]));//#63
var _X=function(){
$k[$j++]="AC-42";//#68
$k[$j++]="version=R7x59 eclevel=H fixedeclevel debugcws";//#68
bwipp_rectangularmicroqrcode();//#68
};//#68
debugIsEqual(_X,$a([69,57,220,228,32,236,17]));//#68
var _Z=function(){
$k[$j++]="?????";//#73
$k[$j++]="version=R7x43 eclevel=M fixedeclevel debugcws";//#73
bwipp_rectangularmicroqrcode();//#73
};//#73
debugIsEqual(_Z,$a([116,252,252,252,252,252]));//#73
var _b=function(){
$k[$j++]="^147^095^228^170^147^095";//#78
$k[$j++]="parse version=R7x43 eclevel=M fixedeclevel debugcws";//#78
bwipp_rectangularmicroqrcode();//#78
};//#78
debugIsEqual(_b,$a([155,103,245,84,217,240]));//#78
var _d=function(){
$k[$j++]="K9^000^000^000^000^000^000^000^000^000^000^000^000";//#83
$k[$j++]="parse version=R11x59 eclevel=H fixedeclevel debugcws";//#83
bwipp_rectangularmicroqrcode();//#83
};//#83
debugIsEqual(_d,$a([110,75,57,0,0,0,0,0,0,0,0,0,0,0,0]));//#83
var _f=function(){
$k[$j++]="^000^000^000^000^000^000^000^000^000^000^000^000K9";//#87
$k[$j++]="parse version=R11x59 eclevel=H fixedeclevel debugcws";//#87
bwipp_rectangularmicroqrcode();//#87
};//#87
debugIsEqual(_f,$a([110,0,0,0,0,0,0,0,0,0,0,0,0,75,57]));//#87
var _h=function(){
$k[$j++]="K9K9K9K^000^000^000^000^000^000^000^000";//#92
$k[$j++]="parse version=R11x59 eclevel=H fixedeclevel debugcws";//#92
bwipp_rectangularmicroqrcode();//#92
};//#92
debugIsEqual(_h,$a([67,184,215,26,227,84,104,0,0,0,0,0,0,0,0]));//#92
var _j=function(){
$k[$j++]="^000^000^000^000^000^000^000^000K9K9K9K";//#96
$k[$j++]="parse version=R11x59 eclevel=H fixedeclevel debugcws";//#96
bwipp_rectangularmicroqrcode();//#96
};//#96
debugIsEqual(_j,$a([104,0,0,0,0,0,0,0,0,67,184,215,26,227,84]));//#96
var _l=function(){
$k[$j++]="K9K9K9K9K9^000^000^000^000^000^000";//#101
$k[$j++]="parse version=R11x59 eclevel=H fixedeclevel debugcws";//#101
bwipp_rectangularmicroqrcode();//#101
};//#101
debugIsEqual(_l,$a([69,56,215,26,227,92,107,141,102,0,0,0,0,0,0]));//#101
$k[$j++]="^000^000^000^000^000^000K9K9K9K9K9";//#104
$k[$j++]="parse version=R11x59 eclevel=H fixedeclevel dontdraw";//#104
$k[$j++]='bwipp.qrcodeNoValidSymbol#104';//#104
$_.er_tmpl();//#104
if(false){//#110
var _n=function(){
$k[$j++]="^000^000^000^000^000^000K9K9K9K9K";//#108
$k[$j++]="parse version=R11x59 eclevel=H fixedeclevel debugcws";//#108
bwipp_rectangularmicroqrcode();//#108
};//#108
debugIsEqual(_n,$a([103,0,0,0,0,0,0,75,68,26,147,82,106,77,72]));//#108
}//#108
$k[$j++]="12345678901234567890123456";//#130
$k[$j++]="dontdraw eclevel=M fixedeclevel version=R13x27";//#130
$k[$j++]=$a([1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1]);//#130
$_.eq_tmpl();//#130
$_ = Object.getPrototypeOf($_);//#131
}//bwipp_runtest_rectangularmicroqrcode
console.log("rectangularmicroqrcode...")
bwipp_runtest_rectangularmicroqrcode();


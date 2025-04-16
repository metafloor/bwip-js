function bwipp_runtest_bc412(){
$_ = Object.create($_);//#2
$_.eq_tmpl_semi=function(){
$_.e=$k[--$j];//#15
$_.t=$k[--$j];//#16
var _6=function(){
$k[$j++]=$_.t;//#17
$k[$j++]="dontdraw semi";//#17
bwipp_bc412();//#17
var _5=$get($k[--$j],'sbs');//#17
$k[$j++]=_5;//#17
};//#17
isEqual(_6,$_.e);//#17
};//#17
$_.er_tmpl_semi=function(){
$_.e=$k[--$j];//#20
$_.t=$k[--$j];//#21
var _D=function(){
$k[$j++]=$_.t;//#22
$k[$j++]="dontdraw semi";//#22
bwipp_bc412();//#22
var _C=$get($k[--$j],'sbs');//#22
$k[$j++]=_C;//#22
};//#22
isError(_D,$_.e);//#22
};//#22
$_.eq_tmpl_semi_validate=function(){
$_.e=$k[--$j];//#26
$_.t=$k[--$j];//#27
var _K=function(){
$k[$j++]=$_.t;//#28
$k[$j++]="dontdraw semi validatecheck";//#28
bwipp_bc412();//#28
var _J=$get($k[--$j],'sbs');//#28
$k[$j++]=_J;//#28
};//#28
isEqual(_K,$_.e);//#28
};//#28
$_.er_tmpl_semi_validate=function(){
$_.e=$k[--$j];//#31
$_.t=$k[--$j];//#32
var _R=function(){
$k[$j++]=$_.t;//#33
$k[$j++]="dontdraw semi validatecheck";//#33
bwipp_bc412();//#33
var _Q=$get($k[--$j],'sbs');//#33
$k[$j++]=_Q;//#33
};//#33
isError(_R,$_.e);//#33
};//#33
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#37
$_.t=$k[--$j];//#38
var _Y=function(){
$k[$j++]=$_.t;//#39
$k[$j++]="dontdraw includestartstop includecheck";//#39
bwipp_bc412();//#39
var _X=$get($k[--$j],'sbs');//#39
$k[$j++]=_X;//#39
};//#39
isEqual(_Y,$_.e);//#39
};//#39
$_.er_tmpl=function(){
$_.e=$k[--$j];//#42
$_.t=$k[--$j];//#43
var _b=$_.e;//#44
var _f=function(){
$k[$j++]=$_.t;//#44
$k[$j++]="dontdraw includestartstop includecheck";//#44
bwipp_bc412();//#44
var _e=$get($k[--$j],'sbs');//#44
$k[$j++]=_e;//#44
};//#44
isError(_f,_b);//#44
};//#44
$_.eq_tmpl_validate=function(){
$_.e=$k[--$j];//#48
$_.t=$k[--$j];//#49
var _m=function(){
$k[$j++]=$_.t;//#50
$k[$j++]="dontdraw includestartstop validatecheck";//#50
bwipp_bc412();//#50
var _l=$get($k[--$j],'sbs');//#50
$k[$j++]=_l;//#50
};//#50
isEqual(_m,$_.e);//#50
};//#50
$_.er_tmpl_validate=function(){
$_.e=$k[--$j];//#53
$_.t=$k[--$j];//#54
var _t=function(){
$k[$j++]=$_.t;//#55
$k[$j++]="dontdraw includestartstop validatecheck";//#55
bwipp_bc412();//#55
var _s=$get($k[--$j],'sbs');//#55
$k[$j++]=_s;//#55
};//#55
isError(_t,$_.e);//#55
};//#55
$k[$j++]="AQ45670";//#62
$k[$j++]=$a([1,2,1,1,1,3,1,2,1,2,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,1,1,5,1,1,1,1,1,2,1,1,1,4,1,1,1,2,1,2,1,3,1,1,1,2,1,3,1,2,1,1,1,1,1,1,1,5,1,1,1]);//#62
$_.eq_tmpl_semi();//#62
var _v=$a([1,2,1,1,1,3,1,2,1,2,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,1,1,5,1,1,1,1,1,2,1,1,1,4,1,1,1,2,1,2,1,3,1,1,1,2,1,3,1,2,1,1,1,1,1,1,1,5,1,1,1]);//#65
$k[$j++]="AQQ45670";//#66
$k[$j++]=_v;//#66
$_.eq_tmpl_semi_validate();//#66
$k[$j++]="A2Q45670";//#70
$k[$j++]='bwipp.bc412semiBadCheckDigit#69';//#70
$_.er_tmpl_semi_validate();//#70
$k[$j++]="AQ45670";//#74
$k[$j++]=$a([1,2,1,1,1,3,1,2,1,2,1,3,1,1,1,1,1,3,1,1,1,1,1,5,1,1,1,1,1,2,1,1,1,4,1,1,1,2,1,2,1,3,1,1,1,2,1,3,1,2,1,1,1,1,1,1,1,5,1,2,1,2,1,3,1,1,1,1,1]);//#74
$_.eq_tmpl();//#74
$k[$j++]="AQ45670L";//#78
$k[$j++]=$a([1,2,1,1,1,3,1,2,1,2,1,3,1,1,1,1,1,3,1,1,1,1,1,5,1,1,1,1,1,2,1,1,1,4,1,1,1,2,1,2,1,3,1,1,1,2,1,3,1,2,1,1,1,1,1,1,1,5,1,2,1,2,1,3,1,1,1,1,1]);//#78
$_.eq_tmpl_validate();//#78
$k[$j++]="AQ45670V";//#82
$k[$j++]='bwipp.bc412badCheckDigit#81';//#82
$_.er_tmpl_validate();//#82
$k[$j++]="";//#84
$k[$j++]='bwipp.bc412emptyData#84';//#84
$_.er_tmpl();//#84
$k[$j++]="";//#85
$k[$j++]='bwipp.bc412emptyData#85';//#85
$_.er_tmpl_validate();//#85
$k[$j++]="";//#86
$k[$j++]='bwipp.bc412emptyData#86';//#86
$_.er_tmpl_semi();//#86
$k[$j++]="";//#87
$k[$j++]='bwipp.bc412emptyData#87';//#87
$_.er_tmpl_semi_validate();//#87
$k[$j++]="1234567890ABCDEFGH";//#91
$k[$j++]=$a([1,2,1,1,1,1,1,2,1,4,1,2,1,1,1,4,1,1,1,1,1,1,1,3,1,3,1,1,1,1,1,4,1,2,1,1,1,1,1,5,1,1,1,1,1,2,1,1,1,4,1,1,1,2,1,2,1,3,1,1,1,2,1,3,1,2,1,1,1,2,1,4,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,5,1,1,1,3,1,2,1,2,1,1,1,3,1,3,1,1,1,1,1,4,1,1,1,2,1,1,1,4,1,2,1,1,1,1,1,5,1,1,1,1,1,2,1,1,1,1,1,4,1,2,1,1,1,2,1,3,1,2,1,1,1,3,1,2,1,1,1]);//#91
$_.eq_tmpl_semi();//#91
$k[$j++]="1I234567890ABCDEFGH";//#95
$k[$j++]=$a([1,2,1,1,1,1,1,2,1,4,1,2,1,1,1,4,1,1,1,1,1,1,1,3,1,3,1,1,1,1,1,4,1,2,1,1,1,1,1,5,1,1,1,1,1,2,1,1,1,4,1,1,1,2,1,2,1,3,1,1,1,2,1,3,1,2,1,1,1,2,1,4,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,5,1,1,1,3,1,2,1,2,1,1,1,3,1,3,1,1,1,1,1,4,1,1,1,2,1,1,1,4,1,2,1,1,1,1,1,5,1,1,1,1,1,2,1,1,1,1,1,4,1,2,1,1,1,2,1,3,1,2,1,1,1,3,1,2,1,1,1]);//#95
$_.eq_tmpl_semi_validate();//#95
$k[$j++]="1X234567890ABCDEFGH";//#99
$k[$j++]='bwipp.bc412semiBadCheckDigit#98';//#99
$_.er_tmpl_semi_validate();//#99
$k[$j++]="1234567890ABCDEFGHI";//#103
$k[$j++]='bwipp.bc412semiBadLength#102';//#103
$_.er_tmpl_semi();//#103
$k[$j++]="1I234567890ABCDEFGHI";//#107
$k[$j++]='bwipp.bc412semivalidateBadLength#106';//#107
$_.er_tmpl_semi_validate();//#107
$k[$j++]="123456";//#111
$k[$j++]='bwipp.bc412semiBadLength#110';//#111
$_.er_tmpl_semi();//#111
$k[$j++]="1234567";//#115
$k[$j++]='bwipp.bc412semivalidateBadLength#114';//#115
$_.er_tmpl_semi_validate();//#115
$k[$j++]="ABCDEFGHIJKLMNO";//#119
$k[$j++]='bwipp.bc412badCharacter#118';//#119
$_.er_tmpl();//#119
$k[$j++]="ABCDEFGHIJKLMNO";//#123
$k[$j++]='bwipp.bc412badCharacter#122';//#123
$_.er_tmpl_semi();//#123
$_ = Object.getPrototypeOf($_);//#124
}//bwipp_runtest_bc412
console.log("bc412...")
bwipp_runtest_bc412();


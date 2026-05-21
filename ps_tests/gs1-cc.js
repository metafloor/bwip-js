function bwipp_runtest_gs1_cc(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_gs1_cc.globals);//#2
var _0=$a([16,920,901,50,494,840,370,378,27,610,352,885,316,132,33,8]);//#23
var _1=$_.debugIsEqual;//#23
var _2=$a([82,920,901,50,494,840,370,378,27,610,352,885,316,221,383,123,782,732,55,320,705,870,633,13,755,176,442,608,110,641,511,841,366,27,610,352,885,316,221,383,123,782,732,55,320,705,870,633,13,755,176,442,608,110,641,511,841,366,27,610,352,885,316,221,383,123,782,732,55,320,705,870,633,13,755,176,442,608,66,16,132,33]);//#28
var _3=$_.debugIsEqual;//#28
var _4=$a([82,920,901,50,504,633,638,559,197,44,694,740,450,287,192,554,360,354,38,798,640,545,128,55,320,705,870,633,13,755,176,442,608,110,641,511,841,366,27,610,352,885,316,221,383,123,782,732,55,320,705,870,633,13,755,176,442,608,110,641,511,841,366,27,610,352,885,316,221,383,123,782,732,55,320,705,870,633,8,66,16,132]);//#33
var _5=$_.debugIsEqual;//#33
var _6=$a([82,920,901,50,504,633,638,559,197,44,694,740,448,55,320,705,870,633,13,755,176,442,608,110,641,511,841,366,27,610,352,885,316,221,383,123,782,732,55,320,705,870,633,13,755,176,442,608,110,641,511,841,366,27,610,352,885,316,221,383,123,782,732,55,320,705,870,633,13,755,176,442,608,110,641,511,841,366,16,132,33,8]);//#38
var _7=$_.debugIsEqual;//#38
var _8=$_.isError;//#41
var _9=$_.isError;//#42
var _A=$_.isError;//#44
var _B=$_.isError;//#45
var _C=$_.isError;//#46
var _D=$_.isError;//#47
var _E=$_.isError;//#48
var _F=$_.isError;//#50
var _G=$_.isError;//#52
var _H=$_.isError;//#54
var _I=$_.isError;//#56
var _J=$_.isError;//#57
var _K=$_.isError;//#58
var _L=$_.isError;//#61
var _M=$_.isEqual;//#64
$k[$j++]=function(){
var _N=$_.gs1_cc;//#22
$k[$j++]="(20)12";//#22
$k[$j++]="ccversion=c lintype=gs1-128 linwidth=189 debugcws dontlint";//#22
$k[$j++]=_N;//#22
};//#22
$k[$j++]=_0;//#22
$k[$j++]=_1;//#22
$k[$j++]=function(){
var _O=$_.gs1_cc;//#27
$k[$j++]="(20)12";//#27
$k[$j++]="ccversion=c lintype=gs1-128 linwidth=695 debugcws dontlint";//#27
$k[$j++]=_O;//#27
};//#27
$k[$j++]=_2;//#27
$k[$j++]=_3;//#27
$k[$j++]=function(){
var _P=$_.gs1_cc;//#32
$k[$j++]="(20)12(90)123456789012345678901234567890(91)1234567890123";//#32
$k[$j++]="ccversion=c lintype=gs1-128 linwidth=695 debugcws dontlint";//#32
$k[$j++]=_P;//#32
};//#32
$k[$j++]=_4;//#32
$k[$j++]=_5;//#32
$k[$j++]=function(){
var _Q=$_.gs1_cc;//#37
$k[$j++]="(20)12(90)12345678901234567890";//#37
$k[$j++]="ccversion=c lintype=gs1-128 linwidth=585 debugcws dontlint";//#37
$k[$j++]=_Q;//#37
};//#37
$k[$j++]=_6;//#37
$k[$j++]=_7;//#37
$k[$j++]=function(){
var _R=$_.gs1_cc;//#41
$k[$j++]="";//#41
$k[$j++]="";//#41
$k[$j++]=_R;//#41
};//#41
$k[$j++]='bwipp.GS1aiMissingOpenParen';//#41
$k[$j++]=_8;//#41
$k[$j++]=function(){
var _S=$_.gs1_cc;//#42
$k[$j++]="";//#42
$k[$j++]="lintype=upca";//#42
$k[$j++]=_S;//#42
};//#42
$k[$j++]='bwipp.GS1aiMissingOpenParen';//#42
$k[$j++]=_9;//#42
$k[$j++]=function(){
var _T=$_.gs1_cc;//#44
$k[$j++]="(90)1";//#44
$k[$j++]="ccversion=d";//#44
$k[$j++]=_T;//#44
};//#44
$k[$j++]='bwipp.gs1ccBadCCversion';//#44
$k[$j++]=_A;//#44
$k[$j++]=function(){
var _U=$_.gs1_cc;//#45
$k[$j++]="(90)1";//#45
$k[$j++]="cccolumns=31";//#45
$k[$j++]=_U;//#45
};//#45
$k[$j++]='bwipp.gs1ccColumnsTooBig';//#45
$k[$j++]=_B;//#45
$k[$j++]=function(){
var _V=$_.gs1_cc;//#46
$k[$j++]="(90)1";//#46
$k[$j++]="cccolumns=0";//#46
$k[$j++]=_V;//#46
};//#46
$k[$j++]='bwipp.gs1ccBadColumns';//#46
$k[$j++]=_C;//#46
$k[$j++]=function(){
var _W=$_.gs1_cc;//#47
$k[$j++]="(90)1";//#47
$k[$j++]="cccolumns=1";//#47
$k[$j++]=_W;//#47
};//#47
$k[$j++]='bwipp.gs1ccBadColumns';//#47
$k[$j++]=_D;//#47
$k[$j++]=function(){
var _X=$_.gs1_cc;//#48
$k[$j++]="(90)1";//#48
$k[$j++]="cccolumns=5";//#48
$k[$j++]=_X;//#48
};//#48
$k[$j++]='bwipp.gs1ccBadColumns';//#48
$k[$j++]=_E;//#48
$k[$j++]=function(){
var _Y=$_.gs1_cc;//#50
$k[$j++]="(90)1";//#50
$k[$j++]="lintype=blah";//#50
$k[$j++]=_Y;//#50
};//#50
$k[$j++]='bwipp.gs1ccBadLinType';//#50
$k[$j++]=_F;//#50
$k[$j++]=function(){
var _Z=$_.gs1_cc;//#52
$k[$j++]="(90)1";//#52
$k[$j++]="lintype=gs1-128 ccversion=c";//#52
$k[$j++]=_Z;//#52
};//#52
$k[$j++]='bwipp.gs1ccMissingLinWidth';//#52
$k[$j++]=_G;//#52
$k[$j++]=function(){
var _a=$_.gs1_cc;//#54
$k[$j++]="(90)1";//#54
$k[$j++]="lintype=gs1-128 ccversion=c linwidth=67";//#54
$k[$j++]=_a;//#54
};//#54
$k[$j++]='bwipp.gs1ccMinimumLinWidth';//#54
$k[$j++]=_H;//#54
$k[$j++]=function(){
var _b=$_.gs1_cc;//#56
$k[$j++]="(90)1";//#56
$k[$j++]="cccolumns=2 lintype=ean13";//#56
$k[$j++]=_b;//#56
};//#56
$k[$j++]='bwipp.gs1ccColumnsTooSmall';//#56
$k[$j++]=_I;//#56
$k[$j++]=function(){
var _c=$_.gs1_cc;//#57
$k[$j++]="(90)1";//#57
$k[$j++]="cccolumns=2 lintype=ean8";//#57
$k[$j++]=_c;//#57
};//#57
$k[$j++]='bwipp.gs1ccColumnsTooSmall';//#57
$k[$j++]=_J;//#57
$k[$j++]=function(){
var _d=$_.gs1_cc;//#58
$k[$j++]="(90)1";//#58
$k[$j++]="cccolumns=3 lintype=ean13";//#58
$k[$j++]=_d;//#58
};//#58
$k[$j++]='bwipp.gs1ccColumnsTooSmall';//#58
$k[$j++]=_K;//#58
$k[$j++]=function(){
var _e=$_.gs1_cc;//#61
$k[$j++]="\(91\)AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";//#61
$k[$j++]="ccversion=b lintype=ean13 dontdraw dontlint";//#61
$k[$j++]=_e;//#61
};//#61
$k[$j++]='bwipp.gs1ccDataTooLarge';//#61
$k[$j++]=_L;//#61
$k[$j++]=function(){
var _f=$_.gs1_cc;//#64
$k[$j++]="(11)ABCDEF";//#64
$k[$j++]="dontdraw dontlint";//#64
$k[$j++]=true;//#64
};//#64
$k[$j++]=true;//#64
$k[$j++]=_M;//#64
$_ = $__;//#64
}//bwipp_runtest_gs1_cc
console.log("gs1-cc...")
bwipp_runtest_gs1_cc();


function bwipp_runtest_ismn(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_ismn.globals);//#2
var _0=$a([1,1,1,1,3,1,2,2,1,1,3,1,1,2,3,2,1,2,2,4,1,1,1,3,2,1,1,1,1,1,1,1,1,2,3,1,1,4,1,1,2,1,2,2,2,2,2,1,2,2,2,1,1,4,1,1,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
var _6=$_.isError;//#25
var _7=$_.isError;//#26
var _8=$_.isError;//#27
var _9=$_.isError;//#28
var _A=$_.isError;//#29
var _B=$_.isError;//#30
var _C=$_.isError;//#31
var _D=$_.isError;//#32
var _E=$_.isError;//#33
var _F=$_.isError;//#34
var _G=$_.isError;//#35
var _H=$_.isError;//#36
$k[$j++]=function(){
$k[$j++]="979-0-2605-3211-3";//#13
$k[$j++]="dontdraw";//#13
bwipp_ismn();//#13
var _I=$k[--$j];//#13
var _J=$get(_I,'sbs');//#13
$k[$j++]=_J;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="979-0-2605-321";//#21
$k[$j++]="dontdraw";//#21
bwipp_ismn();//#21
};//#21
$k[$j++]='bwipp.ismnBadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="979-0-2605-3211-3 123";//#22
$k[$j++]="dontdraw";//#22
bwipp_ismn();//#22
};//#22
$k[$j++]='bwipp.ismnBadAddOnLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="978-0-2605-3211-5";//#23
$k[$j++]="dontdraw";//#23
bwipp_ismn();//#23
};//#23
$k[$j++]='bwipp.ismn13badPrefix';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="979-0--605-3211-3";//#24
$k[$j++]="dontdraw";//#24
bwipp_ismn();//#24
};//#24
$k[$j++]='bwipp.ismn13adjacentDashes';//#24
$k[$j++]=_5;//#24
$k[$j++]=function(){
$k[$j++]="979-0-260532114-3";//#25
$k[$j++]="dontdraw";//#25
bwipp_ismn();//#25
};//#25
$k[$j++]='bwipp.ismn13numDashesDigits';//#25
$k[$j++]=_6;//#25
$k[$j++]=function(){
$k[$j++]="979-0-2605-321A-3";//#26
$k[$j++]="dontdraw";//#26
bwipp_ismn();//#26
};//#26
$k[$j++]='bwipp.ismn13character15';//#26
$k[$j++]=_7;//#26
$k[$j++]=function(){
$k[$j++]="979-0-2605-321133";//#27
$k[$j++]="dontdraw";//#27
bwipp_ismn();//#27
};//#27
$k[$j++]='bwipp.ismn13character16';//#27
$k[$j++]=_8;//#27
$k[$j++]=function(){
$k[$j++]="979-0-2605-3211-A";//#28
$k[$j++]="dontdraw";//#28
bwipp_ismn();//#28
};//#28
$k[$j++]='bwipp.ismn13character17';//#28
$k[$j++]=_9;//#28
$k[$j++]=function(){
$k[$j++]="979-0-2605-3211-0";//#29
$k[$j++]="dontdraw";//#29
bwipp_ismn();//#29
};//#29
$k[$j++]='bwipp.ismnBadCheckDigit';//#29
$k[$j++]=_A;//#29
$k[$j++]=function(){
$k[$j++]="X-2605-3211-4";//#30
$k[$j++]="dontdraw";//#30
bwipp_ismn();//#30
};//#30
$k[$j++]='bwipp.ismn10badPrefix';//#30
$k[$j++]=_B;//#30
$k[$j++]=function(){
$k[$j++]="M-A605-3211-4";//#31
$k[$j++]="dontdraw";//#31
bwipp_ismn();//#31
};//#31
$k[$j++]='bwipp.ismn10character3';//#31
$k[$j++]=_C;//#31
$k[$j++]=function(){
$k[$j++]="M-2--5-3211-4";//#32
$k[$j++]="dontdraw";//#32
bwipp_ismn();//#32
};//#32
$k[$j++]='bwipp.ismn10adjacentDashes';//#32
$k[$j++]=_D;//#32
$k[$j++]=function(){
$k[$j++]="M-260532110-4";//#33
$k[$j++]="dontdraw";//#33
bwipp_ismn();//#33
};//#33
$k[$j++]='bwipp.ismn10numDashesDigits';//#33
$k[$j++]=_E;//#33
$k[$j++]=function(){
$k[$j++]="M-2605-321A-4";//#34
$k[$j++]="dontdraw";//#34
bwipp_ismn();//#34
};//#34
$k[$j++]='bwipp.ismn10character11';//#34
$k[$j++]=_F;//#34
$k[$j++]=function(){
$k[$j++]="M-2605-321144";//#35
$k[$j++]="dontdraw";//#35
bwipp_ismn();//#35
};//#35
$k[$j++]='bwipp.ismn10character12';//#35
$k[$j++]=_G;//#35
$k[$j++]=function(){
$k[$j++]="M-2605-3211-?";//#36
$k[$j++]="dontdraw";//#36
bwipp_ismn();//#36
};//#36
$k[$j++]='bwipp.ismn10character13';//#36
$k[$j++]=_H;//#36
$_ = $__;//#36
}//bwipp_runtest_ismn
console.log("ismn...")
bwipp_runtest_ismn();


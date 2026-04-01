function bwipp_runtest_databaromni(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_databaromni.globals);//#2
$_.eq_tmpl=function(){
var _0=$k[--$j];//#17
var _1=$k[--$j];//#17
var _2=function(){
var _3=$_._arg0_;//#17
$k[$j++]=_3;//#17
$k[$j++]="dontdraw";//#17
bwipp_databaromni();//#17
var _4=$k[--$j];//#17
var _5=$get(_4,'sbs');//#17
$k[$j++]=_5;//#17
};//#17
$put(_2,0,_1);//#17
var _6=$_.isEqual;//#18
$k[$j++]=_2;//#18
$k[$j++]=_0;//#18
$k[$j++]=_6;//#18
};//#18
$_.er_tmpl=function(){
var _7=$k[--$j];//#22
var _8=$k[--$j];//#22
var _9=function(){
var _A=$_._arg0_;//#22
$k[$j++]=_A;//#22
$k[$j++]="dontdraw";//#22
bwipp_databaromni();//#22
var _B=$k[--$j];//#22
var _C=$get(_B,'sbs');//#22
$k[$j++]=_C;//#22
};//#22
$put(_9,0,_8);//#22
var _D=$_.isError;//#23
$k[$j++]=_9;//#23
$k[$j++]=_7;//#23
$k[$j++]=_D;//#23
};//#23
var _E=$a([1,1,1,3,3,1,1,5,1,2,7,4,1,1,1,2,2,1,2,1,5,1,2,5,1,2,1,1,1,2,1,1,2,8,3,3,2,1,2,1,2,3,2,1,1]);//#28
$k[$j++]="(01)20012345678909";//#29
$k[$j++]=_E;//#29
$_.eq_tmpl();//#29
var _F=$a([1,2,1,3,1,4,1,3,1,3,3,7,1,1,1,1,1,5,2,2,2,1,1,1,2,2,1,2,1,5,1,1,6,5,2,4,1,1,1,3,3,2,1,1,1]);//#32
$k[$j++]="(01)0441234567890";//#33
$k[$j++]=_F;//#33
$_.eq_tmpl();//#33
$k[$j++]="(01)20012345678908";//#36
$k[$j++]='bwipp.databaromniBadCheckDigit';//#36
$_.er_tmpl();//#36
$k[$j++]="";//#37
$k[$j++]='bwipp.databaromniBadLength';//#37
$_.er_tmpl();//#37
$k[$j++]="(01)200123456789091";//#38
$k[$j++]='bwipp.databaromniBadLength';//#38
$_.er_tmpl();//#38
$k[$j++]="(01)200123456789";//#39
$k[$j++]='bwipp.databaromniBadLength';//#39
$_.er_tmpl();//#39
$k[$j++]="(01)2001234567890A";//#40
$k[$j++]='bwipp.databaromniBadCharacter';//#40
$_.er_tmpl();//#40
$k[$j++]="(02)2001234567890";//#41
$k[$j++]='bwipp.databaromniBadAI';//#41
$_.er_tmpl();//#41
var _G=$_.isError;//#44
var _H=$_.isError;//#47
$k[$j++]=function(){
$k[$j++]="(01)20012345678909";//#43
$k[$j++]="format=invalid dontdraw";//#43
bwipp_databaromni();//#43
};//#43
$k[$j++]='bwipp.databaromniBadFormat';//#43
$k[$j++]=_G;//#43
$k[$j++]=function(){
$k[$j++]="\(01\)09521234543213";//#47
$k[$j++]="barxmult=32 dontdraw";//#47
bwipp_databaromni();//#47
};//#47
$k[$j++]='bwipp.databarStackedOmniBarXmult';//#47
$k[$j++]=_H;//#47
$_ = $__;//#47
}//bwipp_runtest_databaromni
console.log("databaromni...")
bwipp_runtest_databaromni();


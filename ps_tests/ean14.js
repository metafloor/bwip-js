function bwipp_runtest_ean14(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_ean14.globals);//#2
$_.eq_tmpl=function(){
var _0=$k[--$j];//#14
var _1=$k[--$j];//#14
var _2=function(){
var _3=$_._arg0_;//#14
$k[$j++]=_3;//#14
$k[$j++]="dontdraw";//#14
bwipp_ean14();//#14
var _4=$k[--$j];//#14
var _5=$get(_4,'sbs');//#14
$k[$j++]=_5;//#14
};//#14
$put(_2,0,_1);//#14
var _6=$_.isEqual;//#15
$k[$j++]=_2;//#15
$k[$j++]=_0;//#15
$k[$j++]=_6;//#15
};//#15
$_.er_tmpl=function(){
var _7=$k[--$j];//#19
var _8=$k[--$j];//#19
var _9=function(){
var _A=$_._arg0_;//#19
$k[$j++]=_A;//#19
$k[$j++]="dontdraw";//#19
bwipp_ean14();//#19
var _B=$k[--$j];//#19
var _C=$get(_B,'sbs');//#19
$k[$j++]=_C;//#19
};//#19
$put(_9,0,_8);//#19
var _D=$_.isError;//#20
$k[$j++]=_9;//#20
$k[$j++]=_7;//#20
$k[$j++]=_D;//#20
};//#20
var _E=$a([2,1,1,2,3,2,4,1,1,1,3,1,2,2,2,1,2,2,2,2,1,2,1,3,2,1,3,3,1,1,4,2,1,1,1,2,1,2,1,1,2,4,1,1,2,3,3,1,2,1,3,2,1,2,1,3,2,2,1,2,3,3,2,1,1,1,2,3,3,1,1,1,2]);//#25
$k[$j++]="(01)09528765432108";//#26
$k[$j++]=_E;//#26
$_.eq_tmpl();//#26
$k[$j++]="(01)09528765432107";//#29
$k[$j++]='bwipp.ean14badCheckDigit';//#29
$_.er_tmpl();//#29
$k[$j++]="";//#30
$k[$j++]='bwipp.ean14badLength';//#30
$_.er_tmpl();//#30
$k[$j++]="(01)095287654321081";//#31
$k[$j++]='bwipp.ean14badLength';//#31
$_.er_tmpl();//#31
$k[$j++]="(01)095287654321";//#32
$k[$j++]='bwipp.ean14badLength';//#32
$_.er_tmpl();//#32
$k[$j++]="(01)0952876543210A";//#33
$k[$j++]='bwipp.ean14badCharacter';//#33
$_.er_tmpl();//#33
$k[$j++]="(02)0952876543210";//#34
$k[$j++]='bwipp.ean14badAI';//#34
$_.er_tmpl();//#34
$_ = $__;//#35
}//bwipp_runtest_ean14
console.log("ean14...")
bwipp_runtest_ean14();


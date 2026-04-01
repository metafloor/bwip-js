function bwipp_runtest_azteccodecompact(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_azteccodecompact.globals);//#2
$_.eq_tmpl=function(){
$r(3,1);//#14
var _0=function(){
var _1=$_._arg0_;//#14
var _2=$_._arg1_;//#14
$k[$j++]=_1;//#14
$k[$j++]=_2;//#14
bwipp_azteccodecompact();//#14
var _3=$k[--$j];//#14
var _4=$get(_3,'pixs');//#14
$k[$j++]=_4;//#14
};//#14
$k[$j++]=_0;//#15
$k[$j++]=_0;//#15
$r(3,-1);//#15
var _5=$k[--$j];//#15
var _6=$k[--$j];//#15
$put(_6,1,_5);//#15
var _7=$k[--$j];//#16
$k[$j++]=_7;//#16
$k[$j++]=_7;//#16
$r(3,-1);//#16
var _8=$k[--$j];//#16
var _9=$k[--$j];//#16
$put(_9,0,_8);//#16
var _A=$_.isEqual;//#17
$k[$j++]=_A;//#17
};//#17
var _B=$a([0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0]);//#36
$k[$j++]="1234";//#37
$k[$j++]="dontdraw";//#37
$k[$j++]=_B;//#37
$_.eq_tmpl();//#37
$_.er_tmpl=function(){
$r(3,1);//#40
var _C=function(){
var _D=$_._arg0_;//#40
var _E=$_._arg1_;//#40
$k[$j++]=_D;//#40
$k[$j++]=_E;//#40
bwipp_azteccodecompact();//#40
};//#40
$k[$j++]=_C;//#41
$k[$j++]=_C;//#41
$r(3,-1);//#41
var _F=$k[--$j];//#41
var _G=$k[--$j];//#41
$put(_G,1,_F);//#41
var _H=$k[--$j];//#42
$k[$j++]=_H;//#42
$k[$j++]=_H;//#42
$r(3,-1);//#42
var _I=$k[--$j];//#42
var _J=$k[--$j];//#42
$put(_J,0,_I);//#42
var _K=$k[--$j];//#43
var _L=$k[--$j];//#43
var _M=$_.isError;//#43
$k[$j++]=_K;//#43
$k[$j++]=_L;//#43
$k[$j++]=_M;//#43
};//#43
$k[$j++]="TEST";//#52
$k[$j++]="layers=0 dontdraw";//#52
$k[$j++]='bwipp.aztecCompactInvalidLayers';//#52
$_.er_tmpl();//#52
$k[$j++]="TEST";//#53
$k[$j++]="layers=5 dontdraw";//#53
$k[$j++]='bwipp.aztecCompactInvalidLayers';//#53
$_.er_tmpl();//#53
$k[$j++]="TEST";//#56
$k[$j++]="layers=2 readerinit dontdraw";//#56
$k[$j++]='bwipp.aztecCompactInitInvalidLayers';//#56
$_.er_tmpl();//#56
$_ = $__;//#57
}//bwipp_runtest_azteccodecompact
console.log("azteccodecompact...")
bwipp_runtest_azteccodecompact();


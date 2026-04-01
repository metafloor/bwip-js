function bwipp_runtest_daft(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_daft.globals);//#2
$_.dump_4state_tmpl=function(){
var _0=$k[--$j];//#14
$_.ret=_0;//#14
var _1=$_.ret;//#15
var _2=$get(_1,'bhs');//#15
$_.bhs=_2;//#15
var _3=$_.ret;//#16
var _4=$get(_3,'bbs');//#16
$_.bbs=_4;//#16
$k[$j++]=Infinity;//#17
var _5=$_.bbs;//#18
for(var _7=0,_6=_5.length-1;_7<=_6;_7+=1){//#22
$_.i=_7;//#19
var _8=$_.i;//#20
if(_8!=0){//#20
$k[$j++]=0;//#20
}//#20
var _9=$_.bbs;//#21
var _A=$_.i;//#21
var _B=$get(_9,_A);//#21
if(_B<0.05){//#21
var _C=$_.bhs;//#21
var _D=$_.i;//#21
var _E=$get(_C,_D);//#21
var _F=(_E>0.14)?1:0;//#21
$k[$j++]=_F;//#21
}else{//#21
var _G=$_.bhs;//#21
var _H=$_.i;//#21
var _I=$get(_G,_H);//#21
var _J=(_I>0.09)?1:0;//#21
$k[$j++]=_J;//#21
}//#21
}//#21
var _K=$_.bbs;//#23
for(var _M=0,_L=_K.length-1;_M<=_L;_M+=1){//#27
$_.i=_M;//#24
var _N=$_.i;//#25
if(_N!=0){//#25
$k[$j++]=0;//#25
}//#25
$k[$j++]=1;//#26
}//#26
var _O=$_.bbs;//#28
for(var _Q=0,_P=_O.length-1;_Q<=_P;_Q+=1){//#32
$_.i=_Q;//#29
var _R=$_.i;//#30
if(_R!=0){//#30
$k[$j++]=0;//#30
}//#30
var _S=$_.bbs;//#31
var _T=$_.i;//#31
var _U=$get(_S,_T);//#31
if(_U<0.05){//#31
var _V=$_.bhs;//#31
var _W=$_.i;//#31
var _X=$get(_V,_W);//#31
var _Y=(_X>0.09)?1:0;//#31
$k[$j++]=_Y;//#31
}else{//#31
$k[$j++]=0;//#31
}//#31
}//#31
var _Z=$a();//#31
$k[$j++]=_Z;//#31
};//#31
var _a=$_.isError;//#40
var _b=$_.isError;//#43
var _c=$_.isError;//#46
$k[$j++]=function(){
var _d=$s(2501);//#39
$k[$j++]=_d;//#39
$k[$j++]="dontdraw";//#39
bwipp_daft();//#39
};//#39
$k[$j++]='bwipp.daftinputTooLong';//#39
$k[$j++]=_a;//#39
$k[$j++]=function(){
$k[$j++]="";//#42
$k[$j++]="dontdraw";//#42
bwipp_daft();//#42
};//#42
$k[$j++]='bwipp.daftEmptyData';//#42
$k[$j++]=_b;//#42
$k[$j++]=function(){
$k[$j++]="B";//#45
$k[$j++]="dontdraw";//#45
bwipp_daft();//#45
};//#45
$k[$j++]='bwipp.daftBadCharacter';//#45
$k[$j++]=_c;//#45
$k[$j++]="DAFT";//#45
$k[$j++]="dontdraw";//#45
bwipp_daft();//#45
$_.dump_4state_tmpl();//#51
var _e=$a([0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0]);//#55
var _f=$_.isEqual;//#56
$k[$j++]=_e;//#57
$k[$j++]=_f;//#57
$_ = $__;//#57
}//bwipp_runtest_daft
console.log("daft...")
bwipp_runtest_daft();


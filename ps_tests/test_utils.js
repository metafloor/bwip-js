var _0=$k[--$j];
$_[_0]=true;
function bwipp__isEqual(){
var _0=$k[--$j];//#16
var _1=$k[--$j];//#16
var _2=$type(_0);//#16
var _3=$type(_1);//#16
$k[$j++]=_1;//#16
$k[$j++]=_0;//#16
if($ne(_2,_3)){//#16
$pstack();//#16
$k[$j++]='testError';//#16
}//#16
var _4=$k[--$j];//#17
var _5=$type(_4);//#17
$k[$j++]=_4;//#30
if($eq(_5,'arraytype')||$eq(_5,'stringtype')){//#29
var _6=$k[--$j];//#18
var _7=$k[--$j];//#18
$k[$j++]=_7;//#19
$k[$j++]=_6;//#19
if(_6.length!=_7.length){//#19
$pstack();//#19
$k[$j++]='testError';//#19
}//#19
var _8=$k[--$j];//#20
$k[$j++]=_8;//#27
for(var _A=0,_9=_8.length-1;_A<=_9;_A+=1){//#27
var _B=$k[--$j];//#21
var _C=$k[--$j];//#21
var _D=$get(_C,_A);//#21
var _E=$get(_B,_A);//#21
var _F=$type(_E);//#22
var _G=$type(_D);//#22
$k[$j++]=_C;//#26
$k[$j++]=_B;//#26
$k[$j++]=_D;//#26
$k[$j++]=_E;//#26
if($eq(_F,'realtype')||$eq(_G,'realtype')){//#25
var _H=$k[--$j];//#23
var _I=$k[--$j];//#23
if(($abs($f(_I-_H)))>0.0001){//#23
$pstack();//#23
$k[$j++]='testError';//#23
}//#23
}else{//#25
var _J=$k[--$j];//#25
var _K=$k[--$j];//#25
if($ne(_K,_J)){//#25
$pstack();//#25
$k[$j++]='testError';//#25
}//#25
}//#25
}//#25
}else{//#29
var _L=$k[--$j];//#29
var _M=$k[--$j];//#29
$k[$j++]=_M;//#29
$k[$j++]=_L;//#29
if($ne(_M,_L)){//#29
$pstack();//#29
$k[$j++]='testError';//#29
}//#29
}//#29
$j-=2;//#31
}//bwipp__isEqual
function bwipp__isError(){
var _0=$k[--$j];//#35
var _1=$k[--$j];//#35
$k[$j++]=_0;//#35
$k[$j++]=_1;//#35
$j--;//#35
var _2=$k[--$j];//#36
var _3=$k[--$j];//#36
$k[$j++]=_3;//#36
$k[$j++]=_2;//#36
if($ne(_3,_2)){//#36
$pstack();//#36
$k[$j++]='testError';//#36
}//#36
$j-=2;//#37
}//bwipp__isError
function bwipp__debugIsEqual(){
var _0=$k[--$j];//#41
var _1=$k[--$j];//#41
$k[$j++]=_1;//#42
$k[$j++]=_0;//#42
if(_0.length!=_1.length){//#42
$pstack();//#42
$k[$j++]='testError';//#42
}//#42
var _2=$k[--$j];//#43
$k[$j++]=_2;//#50
for(var _4=0,_3=_2.length-1;_4<=_3;_4+=1){//#50
var _5=$k[--$j];//#44
var _6=$k[--$j];//#44
var _7=$get(_6,_4);//#44
var _8=$get(_5,_4);//#44
var _9=$type(_8);//#45
var _A=$type(_7);//#45
$k[$j++]=_6;//#49
$k[$j++]=_5;//#49
$k[$j++]=_7;//#49
$k[$j++]=_8;//#49
if($eq(_9,'realtype')||$eq(_A,'realtype')){//#48
var _B=$k[--$j];//#46
var _C=$k[--$j];//#46
if(($abs($f(_C-_B)))>0.0001){//#46
$pstack();//#46
$k[$j++]='testError';//#46
}//#46
}else{//#48
var _D=$k[--$j];//#48
var _E=$k[--$j];//#48
if($ne(_E,_D)){//#48
$pstack();//#48
$k[$j++]='testError';//#48
}//#48
}//#48
}//#48
$j-=3;//#51
}//bwipp__debugIsEqual
function bwipp__fuzzTest(){
var _0=$_.expectedResults;//#57
if(_0==2){//#67
$j-=2;//#59
var _1=$s(128);//#60
var _2=$k[--$j];//#60
$anchorsearch($cvs(_1,_2),"bwipp.");//#60
var _3=$k[--$j];//#64
if(_3){//#63
$j-=2;//#61
}else{//#63
$j--;//#63
$pstack();//#63
$k[$j++]='testError';//#63
}//#63
}else{//#67
$j-=2;//#67
}//#67
}//bwipp__fuzzTest
function bwipp__doTest(){
var _0=$k[--$j];//#72
$_.test=_0;//#72
var _1=$k[--$j];//#73
$_.expect=_1;//#73
var _2=$k[--$j];//#74
$_.cmd=_2;//#74
$_.cds=3;//#75
$_.wasglobal=true;//#76
var _3=$j;//#78
$_.depth=_3;//#78
var $__ = $_;//#79
$_=Object.assign({},$_,bwipp__doTest.globals);//#79
$k[$j++]='testStart';//#83
$k[$j++]=$_.cmd;//#83
try{//#83
var _4=$_.cmd;//#81
if(_4()===true){return true;}//#81
$k[$j++]=1;//#82
$k[$j++]=false}catch(e){$k[$j++]=true}//#82
var _5=$k[--$j];//#89
if(_5){//#89
var _6=$get(bwipp_error,'errorname');//#84
$put(bwipp_error,'errorname',"");//#85
var _7=$get(bwipp_error,'errorinfo');//#86
$put(bwipp_error,'errorinfo',"");//#87
$k[$j++]=_6;//#88
$k[$j++]=_7;//#88
$k[$j++]=2;//#88
}//#88
$_ = $__;//#90
var _8=$k[--$j];//#91
$_.expectedResults=_8;//#91
var _9=$j;//#92
var _A=$_.depth;//#92
var _B=$_.expectedResults;//#92
if((_9-_A)!=_B){//#94
$pstack();//#93
$k[$j++]='stackImbalance';//#93
}//#93
var _C=$_.expect;//#95
$k[$j++]=_C;//#95
if($_.test()===true){return true;}//#95
$j=0;//#96
var _D=$_.cds;//#97
var _E=3-_D;//#97
$k[$j++]=_E;//#100
if(_E!=0){//#100
$pstr();//#98
var _F=$k[--$j];//#98
$pr();//#98
for(var _G=0,_H=_F;_G<_H;_G++){//#99
$_ = $__;//#99
}//#99
}else{//#100
$j--;//#100
}//#100
var _I=$_.wasglobal;//#101
if(true!=_I){//#104
$pr();//#102
var _J=$_.wasglobal;//#103
}//#103
}//bwipp__doTest
function bwipp_isEqual(){
$k[$j++]=bwipp__isEqual;//#107
bwipp__doTest();//#107
}//bwipp_isEqual
function bwipp_isError(){
$k[$j++]=bwipp__isError;//#108
bwipp__doTest();//#108
}//bwipp_isError
function bwipp_debugIsEqual(){
$k[$j++]=bwipp__debugIsEqual;//#109
bwipp__doTest();//#109
}//bwipp_debugIsEqual
function bwipp_fuzzTest(){
$k[$j++]=null;//#110
$k[$j++]=bwipp__fuzzTest;//#110
bwipp__doTest();//#110
}//bwipp_fuzzTest

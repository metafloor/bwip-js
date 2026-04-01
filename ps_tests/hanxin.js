function bwipp_runtest_hanxin(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_hanxin.globals);//#2
$_.er_tmpl=function(){
$r(3,1);//#14
var _0=function(){
var _1=$_._arg0_;//#14
var _2=$_._arg1_;//#14
$k[$j++]=_1;//#14
$k[$j++]=_2;//#14
bwipp_hanxin();//#14
};//#14
$k[$j++]=_0;//#15
$k[$j++]=_0;//#15
$r(3,-1);//#15
var _3=$k[--$j];//#15
var _4=$k[--$j];//#15
$put(_4,1,_3);//#15
var _5=$k[--$j];//#16
$k[$j++]=_5;//#16
$k[$j++]=_5;//#16
$r(3,-1);//#16
var _6=$k[--$j];//#16
var _7=$k[--$j];//#16
$put(_7,0,_6);//#16
var _8=$k[--$j];//#17
var _9=$k[--$j];//#17
var _A=$_.isError;//#17
$k[$j++]=_8;//#17
$k[$j++]=_9;//#17
$k[$j++]=_A;//#17
};//#17
var _B=$a([1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1]);//#49
var _C=$_.debugIsEqual;//#50
$k[$j++]=function(){
$k[$j++]="ABC123";//#24
$k[$j++]="dontdraw";//#24
bwipp_hanxin();//#24
var _D=$k[--$j];//#24
var _E=$get(_D,'pixs');//#24
$k[$j++]=_E;//#24
};//#24
$k[$j++]=_B;//#24
$k[$j++]=_C;//#24
$k[$j++]="";//#24
$k[$j++]="dontdraw";//#24
$k[$j++]='bwipp.hanxinEmptyData';//#24
$_.er_tmpl();//#24
$k[$j++]="TEST";//#61
$k[$j++]="version=0 dontdraw";//#61
$k[$j++]='bwipp.hanxinInvalidVersion';//#61
$_.er_tmpl();//#61
$k[$j++]="TEST";//#62
$k[$j++]="version=85 dontdraw";//#62
$k[$j++]='bwipp.hanxinInvalidVersion';//#62
$_.er_tmpl();//#62
$k[$j++]="TEST";//#65
$k[$j++]="eclevel=L0 dontdraw";//#65
$k[$j++]='bwipp.hanxinInvalidErrorCorrectionLevel';//#65
$_.er_tmpl();//#65
$k[$j++]="TEST";//#66
$k[$j++]="eclevel=L5 dontdraw";//#66
$k[$j++]='bwipp.hanxinInvalidErrorCorrectionLevel';//#66
$_.er_tmpl();//#66
$k[$j++]="TEST";//#69
$k[$j++]="mask=5 dontdraw";//#69
$k[$j++]='bwipp.hanxinInvalidErrorCorrectionLevel';//#69
$_.er_tmpl();//#69
$k[$j++]="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//#72
$k[$j++]="version=1 dontdraw";//#72
$k[$j++]='bwipp.hanxinNoValidSymbol';//#72
$_.er_tmpl();//#72
var _F=$s(14001);//#74
$k[$j++]=_F;//#74
$k[$j++]="dontdraw";//#74
$k[$j++]='bwipp.hanxinInputTooLong';//#74
$_.er_tmpl();//#74
var _G=$_.isError;//#77
var _H=$_.isEqual;//#79
var _I=$_.isEqual;//#80
var _J=$_.isEqual;//#81
var _K=$_.isEqual;//#82
$k[$j++]=function(){
var _L=$s(8200);//#77
$k[$j++]=_L;//#77
for(var _M=0;_M<=8199;_M+=1){//#77
var _N=$k[--$j];//#77
$put(_N,_M,49);//#77
$k[$j++]=_N;//#77
}//#77
$k[$j++]="dontdraw";//#77
bwipp_hanxin();//#77
};//#77
$k[$j++]='bwipp.hanxinInputTooLarge';//#77
$k[$j++]=_G;//#77
$k[$j++]=function(){
$k[$j++]="TEST";//#79
$k[$j++]="version=1 dontdraw";//#79
bwipp_hanxin();//#79
$j--;//#79
$k[$j++]=true;//#79
};//#79
$k[$j++]=true;//#79
$k[$j++]=_H;//#79
$k[$j++]=function(){
$k[$j++]="TEST";//#80
$k[$j++]="version=84 dontdraw";//#80
bwipp_hanxin();//#80
$j--;//#80
$k[$j++]=true;//#80
};//#80
$k[$j++]=true;//#80
$k[$j++]=_I;//#80
$k[$j++]=function(){
$k[$j++]="TEST";//#81
$k[$j++]="eclevel=L1 dontdraw";//#81
bwipp_hanxin();//#81
$j--;//#81
$k[$j++]=true;//#81
};//#81
$k[$j++]=true;//#81
$k[$j++]=_J;//#81
$k[$j++]=function(){
$k[$j++]="TEST";//#82
$k[$j++]="eclevel=L4 dontdraw";//#82
bwipp_hanxin();//#82
$j--;//#82
$k[$j++]=true;//#82
};//#82
$k[$j++]=true;//#82
$k[$j++]=_K;//#82
$k[$j++]="TEST";//#82
$k[$j++]="mask=-2 dontdraw";//#82
$k[$j++]='bwipp.hanxinInvalidErrorCorrectionLevel';//#82
$_.er_tmpl();//#82
$_ = $__;//#84
}//bwipp_runtest_hanxin
console.log("hanxin...")
bwipp_runtest_hanxin();


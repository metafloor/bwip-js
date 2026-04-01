function bwipp_runtest_itf14(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_itf14.globals);//#2
var _0=$a([1,1,1,1,1,1,1,2,2,1,2,2,1,1,2,1,1,2,2,1,1,1,1,2,2,1,1,2,1,1,1,1,2,2,2,1,2,1,1,2,1,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,2,2,1,1,1,1,1,2,2,2,1,2,1,1,1,1,2,1,2,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
$k[$j++]=function(){
$k[$j++]="0 952 1234 54321 3";//#13
$k[$j++]="dontdraw";//#13
bwipp_itf14();//#13
var _6=$k[--$j];//#13
var _7=$get(_6,'sbs');//#13
$k[$j++]=_7;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="123456789012";//#21
$k[$j++]="dontdraw";//#21
bwipp_itf14();//#21
};//#21
$k[$j++]='bwipp.itf14badLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="123456789012345";//#22
$k[$j++]="dontdraw";//#22
bwipp_itf14();//#22
};//#22
$k[$j++]='bwipp.itf14badLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="095212345432A3";//#23
$k[$j++]="dontdraw";//#23
bwipp_itf14();//#23
};//#23
$k[$j++]='bwipp.itf14badCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="09521234543210";//#24
$k[$j++]="dontdraw";//#24
bwipp_itf14();//#24
};//#24
$k[$j++]='bwipp.itf14badCheckDigit';//#24
$k[$j++]=_5;//#24
$_ = $__;//#24
}//bwipp_runtest_itf14
console.log("itf14...")
bwipp_runtest_itf14();


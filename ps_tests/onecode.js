function bwipp_runtest_onecode(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_onecode.globals);//#2
var _0=$a([0,0,0,0,559,202,508,451,124,34]);//#17
var _1=$_.debugIsEqual;//#17
var _2=$a([659,0,150,72,109,1016,535,1063,167,578]);//#22
var _3=$_.debugIsEqual;//#22
var _4=$a([0,1100,201,601,240,505,309,189,728,906]);//#27
var _5=$_.debugIsEqual;//#27
var _6=$a([658,1133,256,291,361,249,330,1102,394,270]);//#32
var _7=$_.debugIsEqual;//#32
var _8=$_.isError;//#39
var _9=$_.isError;//#40
$k[$j++]=function(){
$k[$j++]="01234567094987654321";//#17
$k[$j++]="debugcws";//#17
bwipp_onecode();//#17
};//#17
$k[$j++]=_0;//#17
$k[$j++]=_1;//#17
$k[$j++]=function(){
$k[$j++]="0123456709498765432112345";//#22
$k[$j++]="debugcws";//#22
bwipp_onecode();//#22
};//#22
$k[$j++]=_2;//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="01234567094987654321123456789";//#27
$k[$j++]="debugcws";//#27
bwipp_onecode();//#27
};//#27
$k[$j++]=_4;//#27
$k[$j++]=_5;//#27
$k[$j++]=function(){
$k[$j++]="9999999999999999999999999999999";//#32
$k[$j++]="debugcws";//#32
bwipp_onecode();//#32
};//#32
$k[$j++]=_6;//#32
$k[$j++]=_7;//#32
$k[$j++]=function(){
$k[$j++]="0123456709498765432A";//#39
$k[$j++]="dontdraw";//#39
bwipp_onecode();//#39
};//#39
$k[$j++]='bwipp.onecodeBadCharacter';//#39
$k[$j++]=_8;//#39
$k[$j++]=function(){
$k[$j++]="012345670949876543210123456789";//#40
$k[$j++]="dontdraw";//#40
bwipp_onecode();//#40
};//#40
$k[$j++]='bwipp.onecodeInvalidLength';//#40
$k[$j++]=_9;//#40
$_ = $__;//#40
}//bwipp_runtest_onecode
console.log("onecode...")
bwipp_runtest_onecode();


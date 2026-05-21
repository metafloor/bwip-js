function bwipp_runtest_telepen(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_telepen.globals);//#2
var _0=$a([1,1,1,1,1,1,1,1,1,1,3,3,1,1,3,1,3,1,3,3,3,3,3,1,3,3,1,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,3,1,3,3,1,1,3,3,3,1,1,1,1,1,1,3,1,3,3,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#25
$k[$j++]=function(){
$k[$j++]="ABCDEF";//#13
$k[$j++]="dontdraw";//#13
bwipp_telepen();//#13
var _6=$k[--$j];//#13
var _7=$get(_6,'sbs');//#13
$k[$j++]=_7;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="123";//#21
$k[$j++]="numeric dontdraw";//#21
bwipp_telepen();//#21
};//#21
$k[$j++]='bwipp.telepenNumericOddLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="X123";//#22
$k[$j++]="numeric dontdraw";//#22
bwipp_telepen();//#22
};//#22
$k[$j++]='bwipp.telepenInvalidNumericCharacter';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="ABC\200";//#23
$k[$j++]="dontdraw";//#23
bwipp_telepen();//#23
};//#23
$k[$j++]='bwipp.telepenInvalidAlphaCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
var _8=$s(501);//#25
$k[$j++]=_8;//#25
$k[$j++]="dontdraw";//#25
bwipp_telepen();//#25
};//#25
$k[$j++]='bwipp.telepeninputTooLong';//#25
$k[$j++]=_5;//#25
$_ = $__;//#25
}//bwipp_runtest_telepen
console.log("telepen...")
bwipp_runtest_telepen();


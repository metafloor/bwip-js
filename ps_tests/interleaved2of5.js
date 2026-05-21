function bwipp_runtest_interleaved2of5(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_interleaved2of5.globals);//#2
var _0=$a([1,1,1,1,1,1,1,2,2,1,2,1,1,2,1,1,1,1,2,2,1,2,2,1,2,1,1,2,1,1,1,1,2,2,2,1,2,1,1,2,1,1,1,2,2,1,1,2,2,2,1,1,1,1,1,1,1,2,1,2,2,1,2,1,2,1,1,1]);//#14
var _1=$_.isEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#23
$k[$j++]=function(){
$k[$j++]="2401234567";//#13
$k[$j++]="includecheck dontdraw";//#13
bwipp_interleaved2of5();//#13
var _4=$k[--$j];//#13
var _5=$get(_4,'sbs');//#13
$k[$j++]=_5;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="123A5";//#21
$k[$j++]="dontdraw";//#21
bwipp_interleaved2of5();//#21
};//#21
$k[$j++]='bwipp.interleaved2of5badCharacter';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
var _6=$s(501);//#23
$k[$j++]=_6;//#23
$k[$j++]="dontdraw";//#23
bwipp_interleaved2of5();//#23
};//#23
$k[$j++]='bwipp.interleaved2of5inputTooLong';//#23
$k[$j++]=_3;//#23
$_ = $__;//#23
}//bwipp_runtest_interleaved2of5
console.log("interleaved2of5...")
bwipp_runtest_interleaved2of5();


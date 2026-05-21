function bwipp_runtest_channelcode(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_channelcode.globals);//#2
var _0=$a([1,1,1,1,1,1,1,1,1,5,4,1,1,1,2,1,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
$k[$j++]=function(){
$k[$j++]="3493";//#13
$k[$j++]="dontdraw";//#13
bwipp_channelcode();//#13
var _6=$k[--$j];//#13
var _7=$get(_6,'sbs');//#13
$k[$j++]=_7;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="1";//#21
$k[$j++]="dontdraw";//#21
bwipp_channelcode();//#21
};//#21
$k[$j++]='bwipp.channelcodeBadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="12345678";//#22
$k[$j++]="dontdraw";//#22
bwipp_channelcode();//#22
};//#22
$k[$j++]='bwipp.channelcodeBadLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="12A4";//#23
$k[$j++]="dontdraw";//#23
bwipp_channelcode();//#23
};//#23
$k[$j++]='bwipp.channelcodeBadCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="7742863";//#24
$k[$j++]="dontdraw";//#24
bwipp_channelcode();//#24
};//#24
$k[$j++]='bwipp.channelcodeTooBig';//#24
$k[$j++]=_5;//#24
$_ = $__;//#24
}//bwipp_runtest_channelcode
console.log("channelcode...")
bwipp_runtest_channelcode();


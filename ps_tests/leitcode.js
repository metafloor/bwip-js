function bwipp_runtest_leitcode(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_leitcode.globals);//#2
var _0=$a([1,1,1,1,1,2,2,1,1,1,1,1,2,2,2,1,2,1,1,2,1,1,1,2,2,1,1,1,1,2,2,2,1,1,1,2,1,1,1,2,2,1,2,1,1,2,1,1,2,1,2,1,1,2,1,1,2,1,2,2,1,1,1,2,1,2,1,1,2,1,2,1,1,2,2,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
$k[$j++]=function(){
$k[$j++]="21348075016401";//#13
$k[$j++]="dontdraw";//#13
bwipp_leitcode();//#13
var _6=$k[--$j];//#13
var _7=$get(_6,'sbs');//#13
$k[$j++]=_7;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="123456789012";//#21
$k[$j++]="dontdraw";//#21
bwipp_leitcode();//#21
};//#21
$k[$j++]='bwipp.leitcodeBadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="123456789012345";//#22
$k[$j++]="dontdraw";//#22
bwipp_leitcode();//#22
};//#22
$k[$j++]='bwipp.leitcodeBadLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="2134807501640A";//#23
$k[$j++]="dontdraw";//#23
bwipp_leitcode();//#23
};//#23
$k[$j++]='bwipp.leitcodeBadCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="21348075016400";//#24
$k[$j++]="dontdraw";//#24
bwipp_leitcode();//#24
};//#24
$k[$j++]='bwipp.leitcodeBadCheckDigit';//#24
$k[$j++]=_5;//#24
$_ = $__;//#24
}//bwipp_runtest_leitcode
console.log("leitcode...")
bwipp_runtest_leitcode();


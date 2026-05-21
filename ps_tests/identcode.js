function bwipp_runtest_identcode(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_identcode.globals);//#2
var _0=$a([1,1,1,1,2,1,1,2,2,2,1,1,1,1,2,2,2,1,1,1,1,1,1,2,1,1,1,2,2,1,2,1,1,2,1,2,1,2,2,1,1,1,2,1,1,2,1,2,2,1,2,1,1,1,2,2,1,2,1,1,1,1,2,1,2,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
$k[$j++]=function(){
$k[$j++]="563102430313";//#13
$k[$j++]="dontdraw";//#13
bwipp_identcode();//#13
var _6=$k[--$j];//#13
var _7=$get(_6,'sbs');//#13
$k[$j++]=_7;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="1234567890";//#21
$k[$j++]="dontdraw";//#21
bwipp_identcode();//#21
};//#21
$k[$j++]='bwipp.identcodeBadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="1234567890123";//#22
$k[$j++]="dontdraw";//#22
bwipp_identcode();//#22
};//#22
$k[$j++]='bwipp.identcodeBadLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="5631024303A3";//#23
$k[$j++]="dontdraw";//#23
bwipp_identcode();//#23
};//#23
$k[$j++]='bwipp.identcodeBadCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="563102430310";//#24
$k[$j++]="dontdraw";//#24
bwipp_identcode();//#24
};//#24
$k[$j++]='bwipp.identcodeBadCheckDigit';//#24
$k[$j++]=_5;//#24
$_ = $__;//#24
}//bwipp_runtest_identcode
console.log("identcode...")
bwipp_runtest_identcode();


function bwipp_runtest_symbol(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_symbol.globals);//#2
var _0=$a([2.25,2.25,2.25,11.25,2.25,11.25,2.25,2.25,2.25]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#23
$k[$j++]=function(){
$k[$j++]="fima";//#13
$k[$j++]="dontdraw";//#13
bwipp_symbol();//#13
var _4=$k[--$j];//#13
var _5=$get(_4,'sbs');//#13
$k[$j++]=_5;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
var _6=$s(51);//#21
$k[$j++]=_6;//#21
$k[$j++]="dontdraw";//#21
bwipp_symbol();//#21
};//#21
$k[$j++]='bwipp.symbolinputTooLong';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="unknown";//#23
$k[$j++]="dontdraw";//#23
bwipp_symbol();//#23
};//#23
$k[$j++]='bwipp.symbolUnknownSymbol';//#23
$k[$j++]=_3;//#23
$_ = $__;//#23
}//bwipp_runtest_symbol
console.log("symbol...")
bwipp_runtest_symbol();


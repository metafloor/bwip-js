function bwipp_runtest_ean2(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_ean2.globals);//#2
var _0=$a([1,1,2,3,2,1,1,1,1,1,3,2,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
$k[$j++]=function(){
$k[$j++]="05";//#13
$k[$j++]="dontdraw";//#13
bwipp_ean2();//#13
var _4=$k[--$j];//#13
var _5=$get(_4,'sbs');//#13
$k[$j++]=_5;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="1";//#21
$k[$j++]="dontdraw";//#21
bwipp_ean2();//#21
};//#21
$k[$j++]='bwipp.ean2badLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="AB";//#22
$k[$j++]="dontdraw";//#22
bwipp_ean2();//#22
};//#22
$k[$j++]='bwipp.ean2badCharacter';//#22
$k[$j++]=_3;//#22
$_ = $__;//#22
}//bwipp_runtest_ean2
console.log("ean2...")
bwipp_runtest_ean2();


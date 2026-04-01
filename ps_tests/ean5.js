function bwipp_runtest_ean5(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_ean5.globals);//#2
var _0=$a([1,1,2,2,1,1,3,1,1,3,2,1,1,1,1,2,1,2,2,1,1,3,2,1,1,1,1,1,1,2,3]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
$k[$j++]=function(){
$k[$j++]="90200";//#13
$k[$j++]="dontdraw";//#13
bwipp_ean5();//#13
var _4=$k[--$j];//#13
var _5=$get(_4,'sbs');//#13
$k[$j++]=_5;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="1234";//#21
$k[$j++]="dontdraw";//#21
bwipp_ean5();//#21
};//#21
$k[$j++]='bwipp.ean5badLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="ABCDE";//#22
$k[$j++]="dontdraw";//#22
bwipp_ean5();//#22
};//#22
$k[$j++]='bwipp.ean5badCharacter';//#22
$k[$j++]=_3;//#22
$_ = $__;//#22
}//bwipp_runtest_ean5
console.log("ean5...")
bwipp_runtest_ean5();


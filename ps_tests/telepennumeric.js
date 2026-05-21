function bwipp_runtest_telepennumeric(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_telepennumeric.globals);//#2
var _0=$a([1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,3,1,1,1,3,3,1,3,1,3,1,1,3,1,3,3,3,3,1,3,1,1,1,1,1,3,1,1,1,1,3,3,1,1,3,1,3,1,3,3,1,1,1,1,1,1,1,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
$k[$j++]=function(){
$k[$j++]="01234567";//#13
$k[$j++]="dontdraw";//#13
bwipp_telepennumeric();//#13
var _2=$k[--$j];//#13
var _3=$get(_2,'sbs');//#13
$k[$j++]=_3;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$_ = $__;//#13
}//bwipp_runtest_telepennumeric
console.log("telepennumeric...")
bwipp_runtest_telepennumeric();


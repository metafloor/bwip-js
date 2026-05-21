function bwipp_runtest_industrial2of5(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_industrial2of5.globals);//#2
var _0=$_.isError;//#17
var _1=$a([3,1,3,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,3,1,1,1,3]);//#23
var _2=$_.debugIsEqual;//#23
$k[$j++]=function(){
$k[$j++]="";//#16
$k[$j++]="dontdraw";//#16
bwipp_industrial2of5();//#16
};//#16
$k[$j++]='bwipp.code2of5emptyData';//#16
$k[$j++]=_0;//#16
$k[$j++]=function(){
$k[$j++]="87654321";//#22
$k[$j++]="dontdraw";//#22
bwipp_industrial2of5();//#22
var _3=$k[--$j];//#22
var _4=$get(_3,'sbs');//#22
$k[$j++]=_4;//#22
};//#22
$k[$j++]=_1;//#22
$k[$j++]=_2;//#22
$_ = $__;//#22
}//bwipp_runtest_industrial2of5
console.log("industrial2of5...")
bwipp_runtest_industrial2of5();


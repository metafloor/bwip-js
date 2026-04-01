function bwipp_runtest_mands(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_mands.globals);//#2
var _0=$a([1,1,1,3,2,1,1,3,2,1,1,1,1,1,4,1,1,3,2,1,1,1,1,1,2,1,2,2,2,2,2,1,2,2,2,1,1,2,1,3,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
$k[$j++]=function(){
$k[$j++]="0642118";//#13
$k[$j++]="includetext dontdraw";//#13
bwipp_mands();//#13
var _3=$k[--$j];//#13
var _4=$get(_3,'sbs');//#13
$k[$j++]=_4;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="123456";//#21
$k[$j++]="dontdraw";//#21
bwipp_mands();//#21
};//#21
$k[$j++]='bwipp.MandSbadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]="12345670";//#21
$k[$j++]="dontdraw";//#21
bwipp_mands();//#21
$j--;//#24
$_ = $__;//#25
}//bwipp_runtest_mands
console.log("mands...")
bwipp_runtest_mands();


function bwipp_runtest_raw(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_raw.globals);//#2
var _0=$a([3,3,1,1,3,2,1,3,1,3,1,3,4,1,1,1,2,2,1,3,1,3,1,1,3,3,3,2,1,3,1,1,4,1,3,1,1,3,1,2,2,1,3,2,3]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#23
$k[$j++]=function(){
$k[$j++]="331132131313411122131311333213114131131221323";//#13
$k[$j++]="dontdraw";//#13
bwipp_raw();//#13
var _4=$k[--$j];//#13
var _5=$get(_4,'sbs');//#13
$k[$j++]=_5;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
var _6=$s(2501);//#21
$k[$j++]=_6;//#21
$k[$j++]="dontdraw";//#21
bwipp_raw();//#21
};//#21
$k[$j++]='bwipp.rawinputTooLong';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="120345";//#23
$k[$j++]="dontdraw";//#23
bwipp_raw();//#23
};//#23
$k[$j++]='bwipp.rawBadCharacter';//#23
$k[$j++]=_3;//#23
$_ = $__;//#23
}//bwipp_runtest_raw
console.log("raw...")
bwipp_runtest_raw();


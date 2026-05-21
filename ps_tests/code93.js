function bwipp_runtest_code93(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_code93.globals);//#2
$_.eq_tmpl=function(){
var _0=$k[--$j];//#17
var _1=$k[--$j];//#17
var _2=function(){
var _3=$_._arg0_;//#17
$k[$j++]=_3;//#17
$k[$j++]="dontdraw includecheck";//#17
bwipp_code93();//#17
var _4=$k[--$j];//#17
var _5=$get(_4,'sbs');//#17
$k[$j++]=_5;//#17
};//#17
$put(_2,0,_1);//#17
var _6=$_.isEqual;//#18
$k[$j++]=_2;//#18
$k[$j++]=_0;//#18
$k[$j++]=_6;//#18
};//#18
var _7=$a([1,1,1,1,4,1,3,2,1,1,1,1,1,1,2,1,3,1,1,1,3,1,2,1,2,1,1,1,3,1,1,2,1,1,2,2,1,1,1,2,2,2,1,1,1,1,4,1,1]);//#25
$k[$j++]="$/+%";//#25
$k[$j++]=_7;//#25
$_.eq_tmpl();//#25
var _8=$_.isError;//#32
var _9=$_.isError;//#34
$k[$j++]=function(){
$k[$j++]="abc";//#32
$k[$j++]="dontdraw";//#32
bwipp_code93();//#32
};//#32
$k[$j++]='bwipp.code93BadCharacter';//#32
$k[$j++]=_8;//#32
$k[$j++]=function(){
var _A=$s(501);//#34
$k[$j++]=_A;//#34
$k[$j++]="dontdraw";//#34
bwipp_code93();//#34
};//#34
$k[$j++]='bwipp.code93inputTooLong';//#34
$k[$j++]=_9;//#34
$_ = $__;//#34
}//bwipp_runtest_code93
console.log("code93...")
bwipp_runtest_code93();


function bwipp_runtest_flattermarken(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_flattermarken.globals);//#2
var _0=$a([0,0,1,8,0,0,1,8,0,9,0,0,0,8,1,0,0,8,1,0]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#23
$k[$j++]=function(){
$k[$j++]="11099";//#13
$k[$j++]="dontdraw";//#13
bwipp_flattermarken();//#13
var _4=$k[--$j];//#13
var _5=$get(_4,'sbs');//#13
$k[$j++]=_5;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="123A5";//#21
$k[$j++]="dontdraw";//#21
bwipp_flattermarken();//#21
};//#21
$k[$j++]='bwipp.flattermarkenBadCharacter';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
var _6=$s(501);//#23
$k[$j++]=_6;//#23
$k[$j++]="dontdraw";//#23
bwipp_flattermarken();//#23
};//#23
$k[$j++]='bwipp.flattermarkeninputTooLong';//#23
$k[$j++]=_3;//#23
$_ = $__;//#23
}//bwipp_runtest_flattermarken
console.log("flattermarken...")
bwipp_runtest_flattermarken();


function bwipp_runtest_code32(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_code32.globals);//#2
var _0=$a([1,3,1,1,3,1,3,1,1,1,1,1,1,3,3,1,3,1,1,1,3,1,3,1,1,3,1,1,1,1,1,1,3,1,1,1,3,3,1,1,1,1,3,1,1,1,3,3,1,1,1,1,3,1,1,3,1,1,3,1,1,1,1,1,3,3,1,1,3,1,1,3,1,1,3,1,3,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
$k[$j++]=function(){
$k[$j++]="01234567";//#13
$k[$j++]="dontdraw";//#13
bwipp_code32();//#13
var _6=$k[--$j];//#13
var _7=$get(_6,'sbs');//#13
$k[$j++]=_7;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="1234567";//#21
$k[$j++]="dontdraw";//#21
bwipp_code32();//#21
};//#21
$k[$j++]='bwipp.code32badLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="1234567890";//#22
$k[$j++]="dontdraw";//#22
bwipp_code32();//#22
};//#22
$k[$j++]='bwipp.code32badLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="0123456A";//#23
$k[$j++]="dontdraw";//#23
bwipp_code32();//#23
};//#23
$k[$j++]='bwipp.code32badCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="012345670";//#24
$k[$j++]="dontdraw";//#24
bwipp_code32();//#24
};//#24
$k[$j++]='bwipp.code32badCheckDigit';//#24
$k[$j++]=_5;//#24
$_ = $__;//#24
}//bwipp_runtest_code32
console.log("code32...")
bwipp_runtest_code32();


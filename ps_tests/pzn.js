function bwipp_runtest_pzn(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_pzn.globals);//#2
var _0=$a([1,3,1,1,3,1,3,1,1,1,1,3,1,1,1,1,3,1,3,1,3,1,1,3,1,1,1,1,3,1,1,1,3,3,1,1,1,1,3,1,3,1,3,3,1,1,1,1,1,1,1,1,1,3,3,1,1,1,3,1,3,1,1,3,3,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,3,3,1,1,1,1,3,1,1,3,1,1,3,1,3,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
var _6=$_.isError;//#25
$k[$j++]=function(){
$k[$j++]="123456";//#13
$k[$j++]="dontdraw";//#13
bwipp_pzn();//#13
var _7=$k[--$j];//#13
var _8=$get(_7,'sbs');//#13
$k[$j++]=_8;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="12345";//#21
$k[$j++]="dontdraw";//#21
bwipp_pzn();//#21
};//#21
$k[$j++]='bwipp.pzn7badLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="123456789";//#22
$k[$j++]="pzn8 dontdraw";//#22
bwipp_pzn();//#22
};//#22
$k[$j++]='bwipp.pzn8badLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="12345A";//#23
$k[$j++]="dontdraw";//#23
bwipp_pzn();//#23
};//#23
$k[$j++]='bwipp.pznBadCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="1234560";//#24
$k[$j++]="dontdraw";//#24
bwipp_pzn();//#24
};//#24
$k[$j++]='bwipp.pznBadCheckDigit';//#24
$k[$j++]=_5;//#24
$k[$j++]=function(){
$k[$j++]="100009";//#25
$k[$j++]="dontdraw";//#25
bwipp_pzn();//#25
};//#25
$k[$j++]='bwipp.pznBadInputSequence';//#25
$k[$j++]=_6;//#25
$_ = $__;//#25
}//bwipp_runtest_pzn
console.log("pzn...")
bwipp_runtest_pzn();


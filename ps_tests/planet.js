function bwipp_runtest_planet(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_planet.globals);//#2
var _0=$a([0.125,0.05,0.05,0.125,0.125,0.125,0.125,0.125,0.125,0.05,0.05,0.125,0.125,0.05,0.125,0.05,0.125,0.125,0.05,0.05,0.125,0.125,0.05,0.125,0.125,0.05,0.125,0.05,0.125,0.05,0.125,0.125,0.05,0.05,0.125,0.125,0.05,0.125,0.125,0.125,0.05,0.05,0.125,0.125,0.05,0.125,0.05,0.125,0.05,0.125,0.125,0.05,0.05,0.125,0.125,0.125,0.125,0.05,0.125,0.05,0.125,0.125]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
$k[$j++]=function(){
$k[$j++]="01234567890";//#13
$k[$j++]="dontdraw";//#13
bwipp_planet();//#13
var _6=$k[--$j];//#13
var _7=$get(_6,'bhs');//#13
$k[$j++]=_7;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="1234567890";//#21
$k[$j++]="dontdraw";//#21
bwipp_planet();//#21
};//#21
$k[$j++]='bwipp.planetBadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="123456789012";//#22
$k[$j++]="dontdraw";//#22
bwipp_planet();//#22
};//#22
$k[$j++]='bwipp.planetBadLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="0123456789A";//#23
$k[$j++]="dontdraw";//#23
bwipp_planet();//#23
};//#23
$k[$j++]='bwipp.planetBadCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="012345678901";//#24
$k[$j++]="validatecheck dontdraw";//#24
bwipp_planet();//#24
};//#24
$k[$j++]='bwipp.planetBadCheckDigit';//#24
$k[$j++]=_5;//#24
$_ = $__;//#24
}//bwipp_runtest_planet
console.log("planet...")
bwipp_runtest_planet();


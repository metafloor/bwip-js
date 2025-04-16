function bwipp_runtest_dotcode(){
$_ = Object.create($_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#15
$_.o=$k[--$j];//#16
$_.t=$k[--$j];//#17
var _8=function(){
$k[$j++]=$_.t;//#18
$k[$j++]=$_.o;//#18
bwipp_dotcode();//#18
var _7=$get($k[--$j],'pixs');//#18
$k[$j++]=_7;//#18
};//#18
isEqual(_8,$_.e);//#18
};//#18
var _A=function(){
$k[$j++]="^128^1281234567890123456";//#23
$k[$j++]="parse debugcws";//#23
bwipp_dotcode();//#23
};//#23
debugIsEqual(_A,$a([112,3,14,11,111,12,34,56,78,90,12,34,56]));//#23
var _C=function(){
$k[$j++]="[\)>^03005^029101^030^004";//#27
$k[$j++]="parse debugcws";//#27
bwipp_dotcode();//#27
};//#27
debugIsEqual(_C,$a([106,97,17,16,17]));//#27
var _E=function(){
$k[$j++]="[\)>^03007Text^030^004";//#31
$k[$j++]="parse debugcws";//#31
bwipp_dotcode();//#31
};//#31
debugIsEqual(_E,$a([106,100,16,23,52,69,88,84,100]));//#31
var _G=function(){
$k[$j++]="12a^013^010";//#35
$k[$j++]="parse debugcws";//#35
bwipp_dotcode();//#35
};//#35
debugIsEqual(_G,$a([107,12,103,65,96]));//#35
var _I=function(){
$k[$j++]="^001a^009^013^010";//#39
$k[$j++]="parse debugcws";//#39
bwipp_dotcode();//#39
};//#39
debugIsEqual(_I,$a([101,65,98,65,97,96]));//#39
$k[$j++]="2741";//#57
$k[$j++]="dontdraw";//#57
$k[$j++]=$a([1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0]);//#57
$_.eq_tmpl();//#57
$_ = Object.getPrototypeOf($_);//#58
}//bwipp_runtest_dotcode
console.log("dotcode...")
bwipp_runtest_dotcode();


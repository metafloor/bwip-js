function bwipp_runtest_hibcdatamatrixrectangular(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_hibcdatamatrixrectangular.globals);//#2
var _0=$_.isError;//#20
var _1=$_.isError;//#23
var _2=$_.isError;//#26
var _3=$_.isError;//#29
var _4=$_.isError;//#32
var _5=$_.isError;//#35
$k[$j++]=function(){
$k[$j++]="";//#19
$k[$j++]="dontdraw";//#19
bwipp_hibcdatamatrixrectangular();//#19
};//#19
$k[$j++]='bwipp.hibcdatamatrixrectangularEmptyData';//#19
$k[$j++]=_0;//#19
$k[$j++]=function(){
$k[$j++]="";//#22
$k[$j++]="dontdraw validatecheck";//#22
bwipp_hibcdatamatrixrectangular();//#22
};//#22
$k[$j++]='bwipp.hibcdatamatrixrectangularEmptyData';//#22
$k[$j++]=_1;//#22
$k[$j++]=function(){
var _6=$s(15001);//#25
$k[$j++]=_6;//#25
$k[$j++]="dontdraw";//#25
bwipp_hibcdatamatrixrectangular();//#25
};//#25
$k[$j++]='bwipp.hibcdatamatrixrectangularinputTooLong';//#25
$k[$j++]=_2;//#25
$k[$j++]=function(){
$k[$j++]=",";//#28
$k[$j++]="dontdraw";//#28
bwipp_hibcdatamatrixrectangular();//#28
};//#28
$k[$j++]='bwipp.hibcdatamatrixrectangularBadCharacter';//#28
$k[$j++]=_3;//#28
$k[$j++]=function(){
$k[$j++]="A123BJC5D6E71H";//#31
$k[$j++]="dontdraw validatecheck";//#31
bwipp_hibcdatamatrixrectangular();//#31
};//#31
$k[$j++]='bwipp.hibcdatamatrixrectangularBadCheckDigit';//#31
$k[$j++]=_4;//#31
$k[$j++]=function(){
$k[$j++]="/";//#34
$k[$j++]="dontdraw validatecheck";//#34
bwipp_hibcdatamatrixrectangular();//#34
};//#34
$k[$j++]='bwipp.hibcdatamatrixrectangularBadCheckDigit';//#34
$k[$j++]=_5;//#34
$k[$j++]="A123BJC5D6E71G";//#34
$k[$j++]="dontdraw validatecheck";//#34
bwipp_hibcdatamatrixrectangular();//#34
var _7=$k[--$j];//#40
var _8=$get(_7,'pixs');//#40
var _9=$a([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);//#53
var _A=$_.debugIsEqual;//#54
$k[$j++]=_8;//#55
$k[$j++]=_9;//#55
$k[$j++]=_A;//#55
$_ = $__;//#55
}//bwipp_runtest_hibcdatamatrixrectangular
console.log("hibcdatamatrixrectangular...")
bwipp_runtest_hibcdatamatrixrectangular();


function bwipp_runtest_gs1datamatrixrectangular(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_gs1datamatrixrectangular.globals);//#2
var _0=$a([232,131,130,131,153,175,197,219,135,147,148,134,131,151,230,89,233,109,36,128,95,147,154,254,142,164,186,208,232,221,239,89,233,109,36,128,95,254,129,17,167,62,212,107,3,153,48,198,93]);//#21
var _1=$_.debugIsEqual;//#21
var _2=$a([232,131,130,131,153,175,197,219,135,147,148,134,131,151,230,89,233,109,36,128,95,147,154,254,142,164,186,208,30,221,239,89,233,109,36,128,95,254,129,17,167,62,212,107,3,153,48,198,93]);//#25
var _3=$_.debugIsEqual;//#25
var _4=$a([232,131,130,131,153,175,197,219,135,147,134,131,145,129,87,237]);//#32
var _5=$_.debugIsEqual;//#32
var _6=$_.isError;//#34
$k[$j++]=function(){
$k[$j++]="(01)00012345678905(17)180401(21)ABCDEFGHIJKL12345678(91)abcdefghi";//#20
$k[$j++]="debugcws";//#20
bwipp_gs1datamatrixrectangular();//#20
};//#20
$k[$j++]=_0;//#20
$k[$j++]=_1;//#20
$k[$j++]=function(){
$k[$j++]="(01)00012345678905(17)180401(21)ABCDEFGHIJKL12345678(91)abcdefghi";//#24
$k[$j++]="debugcws gssep";//#24
bwipp_gs1datamatrixrectangular();//#24
};//#24
$k[$j++]=_2;//#24
$k[$j++]=_3;//#24
$k[$j++]=function(){
$k[$j++]="(01)00012345678905(17)040115";//#31
$k[$j++]="debugcws";//#31
bwipp_gs1datamatrixrectangular();//#31
};//#31
$k[$j++]=_4;//#31
$k[$j++]=_5;//#31
$k[$j++]=function(){
var _7=$s(4001);//#34
$k[$j++]=_7;//#34
$k[$j++]="dontdraw";//#34
bwipp_gs1datamatrixrectangular();//#34
};//#34
$k[$j++]='bwipp.gs1datamatrixrectangularinputTooLong';//#34
$k[$j++]=_6;//#34
$_ = $__;//#34
}//bwipp_runtest_gs1datamatrixrectangular
console.log("gs1datamatrixrectangular...")
bwipp_runtest_gs1datamatrixrectangular();


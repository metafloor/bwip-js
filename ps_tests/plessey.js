function bwipp_runtest_plessey(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_plessey.globals);//#2
var _0=$_.isError;//#17
var _1=$_.isError;//#20
var _2=$_.isError;//#23
var _3=$_.isError;//#26
var _4=$_.isError;//#29
var _5=$_.isError;//#32
var _6=$_.isError;//#35
var _7=$_.isError;//#37
$k[$j++]=function(){
$k[$j++]="";//#16
$k[$j++]="dontdraw";//#16
bwipp_plessey();//#16
};//#16
$k[$j++]='bwipp.plesseyEmptyData';//#16
$k[$j++]=_0;//#16
$k[$j++]=function(){
$k[$j++]="";//#19
$k[$j++]="dontdraw validatecheck";//#19
bwipp_plessey();//#19
};//#19
$k[$j++]='bwipp.plesseyEmptyData';//#19
$k[$j++]=_1;//#19
$k[$j++]=function(){
$k[$j++]="G";//#22
$k[$j++]="dontdraw";//#22
bwipp_plessey();//#22
};//#22
$k[$j++]='bwipp.plesseyBadCharacter';//#22
$k[$j++]=_2;//#22
$k[$j++]=function(){
$k[$j++]="1234ABCDEFDF";//#25
$k[$j++]="dontdraw validatecheck";//#25
bwipp_plessey();//#25
};//#25
$k[$j++]='bwipp.plesseyBadCheckDigits';//#25
$k[$j++]=_3;//#25
$k[$j++]=function(){
$k[$j++]="1234ABCDEFCE";//#28
$k[$j++]="dontdraw validatecheck";//#28
bwipp_plessey();//#28
};//#28
$k[$j++]='bwipp.plesseyBadCheckDigits';//#28
$k[$j++]=_4;//#28
$k[$j++]=function(){
$k[$j++]="01";//#31
$k[$j++]="dontdraw validatecheck";//#31
bwipp_plessey();//#31
};//#31
$k[$j++]='bwipp.plesseyBadCheckDigits';//#31
$k[$j++]=_5;//#31
$k[$j++]=function(){
$k[$j++]="A";//#34
$k[$j++]="dontdraw validatecheck";//#34
bwipp_plessey();//#34
};//#34
$k[$j++]='bwipp.plesseyBadLength';//#34
$k[$j++]=_6;//#34
$k[$j++]=function(){
var _8=$s(501);//#37
$k[$j++]=_8;//#37
$k[$j++]="dontdraw";//#37
bwipp_plessey();//#37
};//#37
$k[$j++]='bwipp.plesseyInputTooLong';//#37
$k[$j++]=_7;//#37
$k[$j++]="1234ABCDEFCF";//#37
$k[$j++]="dontdraw validatecheck";//#37
bwipp_plessey();//#37
var _9=$k[--$j];//#42
var _A=$get(_9,'sbs');//#42
var _B=$a([3,2,3,2,1,4,3,2,3,2,1,4,1,4,1,4,1,4,3,2,1,4,1,4,3,2,3,2,1,4,1,4,1,4,1,4,3,2,1,4,1,4,3,2,1,4,3,2,3,2,3,2,1,4,3,2,1,4,1,4,3,2,3,2,3,2,1,4,3,2,3,2,1,4,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1,4,1,4,3,2,3,2,3,2,3,2,3,2,3,2,5,4,1,4,1,2,3,2,3]);//#44
var _C=$_.debugIsEqual;//#45
$k[$j++]=_A;//#47
$k[$j++]=_B;//#47
$k[$j++]=_C;//#47
$k[$j++]="00";//#47
$k[$j++]="dontdraw validatecheck";//#47
bwipp_plessey();//#47
var _D=$k[--$j];//#47
var _E=$get(_D,'sbs');//#47
var _F=$a([3,2,3,2,1,4,3,2,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,1,4,1,2,3,2,3]);//#49
var _G=$_.debugIsEqual;//#50
$k[$j++]=_E;//#51
$k[$j++]=_F;//#51
$k[$j++]=_G;//#51
$_ = $__;//#51
}//bwipp_runtest_plessey
console.log("plessey...")
bwipp_runtest_plessey();


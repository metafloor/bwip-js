function bwipp_runtest_issn(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_issn.globals);//#2
var _0=$a([1,1,1,1,3,1,2,2,1,3,1,1,1,2,3,1,4,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,1,1,3,1,2,1,2,3,1,3,2,1,1,3,2,1,1,2,2,2,1,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
var _6=$_.isError;//#25
var _7=$_.isError;//#26
var _8=$_.isError;//#27
var _9=$_.isError;//#28
var _A=$_.isError;//#29
$k[$j++]=function(){
$k[$j++]="0311-175X";//#13
$k[$j++]="dontdraw";//#13
bwipp_issn();//#13
var _B=$k[--$j];//#13
var _C=$get(_B,'sbs');//#13
$k[$j++]=_C;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="0311-17";//#21
$k[$j++]="dontdraw";//#21
bwipp_issn();//#21
};//#21
$k[$j++]='bwipp.issnBadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="ABCD-1750";//#22
$k[$j++]="dontdraw";//#22
bwipp_issn();//#22
};//#22
$k[$j++]='bwipp.issnFirstThroughFourthNotNumeric';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="03111750";//#23
$k[$j++]="dontdraw";//#23
bwipp_issn();//#23
};//#23
$k[$j++]='bwipp.issnNeedsDash';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="0311-A750";//#24
$k[$j++]="dontdraw";//#24
bwipp_issn();//#24
};//#24
$k[$j++]='bwipp.issnSixthThroughEighthNotNumeric';//#24
$k[$j++]=_5;//#24
$k[$j++]=function(){
$k[$j++]="0311-175?";//#25
$k[$j++]="dontdraw";//#25
bwipp_issn();//#25
};//#25
$k[$j++]='bwipp.issnNinthCharacterBadFormat';//#25
$k[$j++]=_6;//#25
$k[$j++]=function(){
$k[$j++]="0311-175X 1";//#26
$k[$j++]="dontdraw";//#26
bwipp_issn();//#26
};//#26
$k[$j++]='bwipp.issnBadSequenceVariantLength';//#26
$k[$j++]=_7;//#26
$k[$j++]=function(){
$k[$j++]="0311-175X AB";//#27
$k[$j++]="dontdraw";//#27
bwipp_issn();//#27
};//#27
$k[$j++]='bwipp.issnSequenceVariantBadCharacter';//#27
$k[$j++]=_8;//#27
$k[$j++]=function(){
$k[$j++]="0311-175X 12 1234";//#28
$k[$j++]="dontdraw";//#28
bwipp_issn();//#28
};//#28
$k[$j++]='bwipp.issnBadAddOnLength';//#28
$k[$j++]=_9;//#28
$k[$j++]=function(){
$k[$j++]="0311-1750";//#29
$k[$j++]="dontdraw";//#29
bwipp_issn();//#29
};//#29
$k[$j++]='bwipp.issnBadCheckDigit';//#29
$k[$j++]=_A;//#29
$_ = $__;//#29
}//bwipp_runtest_issn
console.log("issn...")
bwipp_runtest_issn();


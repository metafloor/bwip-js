function bwipp_runtest_code39ext(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_code39ext.globals);//#2
var _0=$_.isError;//#20
var _1=$_.isError;//#23
var _2=$_.isError;//#26
var _3=$_.isError;//#29
var _4=$_.isError;//#31
var _5=$a([1,3,1,1,3,1,3,1,1,1,1,3,1,3,1,1,1,3,1,1,1,1,3,1,1,1,1,3,3,1,1,1,3,1,1,3,3,1,1,1,1,3,1,1,3,1,3,1,1,1]);//#37
var _6=$_.debugIsEqual;//#37
var _7=$_.isEqual;//#42
var _8=$_.isEqual;//#44
var _9=$_.isEqual;//#46
var _A=$_.isEqual;//#48
var _B=$_.isEqual;//#50
$k[$j++]=function(){
$k[$j++]="";//#19
$k[$j++]="dontdraw";//#19
bwipp_code39ext();//#19
};//#19
$k[$j++]='bwipp.code39emptyData';//#19
$k[$j++]=_0;//#19
$k[$j++]=function(){
$k[$j++]="";//#22
$k[$j++]="dontdraw validatecheck";//#22
bwipp_code39ext();//#22
};//#22
$k[$j++]='bwipp.code39emptyData';//#22
$k[$j++]=_1;//#22
$k[$j++]=function(){
$k[$j++]="^161";//#25
$k[$j++]="dontdraw parse";//#25
bwipp_code39ext();//#25
};//#25
$k[$j++]='bwipp.code39extBadCharacter';//#25
$k[$j++]=_2;//#25
$k[$j++]=function(){
$k[$j++]="Z1.";//#28
$k[$j++]="dontdraw validatecheck";//#28
bwipp_code39ext();//#28
};//#28
$k[$j++]='bwipp.code39badCheckDigit';//#28
$k[$j++]=_3;//#28
$k[$j++]=function(){
var _C=$s(501);//#31
$k[$j++]=_C;//#31
$k[$j++]="dontdraw";//#31
bwipp_code39ext();//#31
};//#31
$k[$j++]='bwipp.code39extinputTooLong';//#31
$k[$j++]=_4;//#31
$k[$j++]=function(){
$k[$j++]=",I";//#36
$k[$j++]="dontdraw validatecheck";//#36
bwipp_code39ext();//#36
var _D=$k[--$j];//#36
var _E=$get(_D,'sbs');//#36
$k[$j++]=_E;//#36
};//#36
$k[$j++]=_5;//#36
$k[$j++]=_6;//#36
$k[$j++]=function(){
$k[$j++]="Code39 Ext!";//#42
$k[$j++]="includetext";//#42
bwipp_code39ext();//#42
};//#42
$k[$j++]=function(){
$k[$j++]=true;//#42
};//#42
$k[$j++]=true;//#42
$k[$j++]=_7;//#42
$k[$j++]=function(){
$k[$j++]="Code39 Ext!";//#44
$k[$j++]="includetext hidestars";//#44
bwipp_code39ext();//#44
};//#44
$k[$j++]=function(){
$k[$j++]=true;//#44
};//#44
$k[$j++]=true;//#44
$k[$j++]=_8;//#44
$k[$j++]=function(){
$k[$j++]="Code39 Ext!";//#46
$k[$j++]="includetext includecheck";//#46
bwipp_code39ext();//#46
};//#46
$k[$j++]=function(){
$k[$j++]=true;//#46
};//#46
$k[$j++]=true;//#46
$k[$j++]=_9;//#46
$k[$j++]=function(){
$k[$j++]="Code39 Ext!";//#48
$k[$j++]="includetext includecheck includecheckintext";//#48
bwipp_code39ext();//#48
};//#48
$k[$j++]=function(){
$k[$j++]=true;//#48
};//#48
$k[$j++]=true;//#48
$k[$j++]=_A;//#48
$k[$j++]=function(){
$k[$j++]="Code39 Ext!";//#50
$k[$j++]="includetext includecheck includecheckintext hidestars";//#50
bwipp_code39ext();//#50
};//#50
$k[$j++]=function(){
$k[$j++]=true;//#50
};//#50
$k[$j++]=true;//#50
$k[$j++]=_B;//#50
$_ = $__;//#50
}//bwipp_runtest_code39ext
console.log("code39ext...")
bwipp_runtest_code39ext();


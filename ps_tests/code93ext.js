function bwipp_runtest_code93ext(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_code93ext.globals);//#2
$_.eq_tmpl=function(){
var _0=$k[--$j];//#17
var _1=$k[--$j];//#17
var _2=function(){
var _3=$_._arg0_;//#17
$k[$j++]=_3;//#17
$k[$j++]="dontdraw parse includecheck";//#17
bwipp_code93ext();//#17
var _4=$k[--$j];//#17
var _5=$get(_4,'sbs');//#17
$k[$j++]=_5;//#17
};//#17
$put(_2,0,_1);//#17
var _6=$_.isEqual;//#18
$k[$j++]=_2;//#18
$k[$j++]=_0;//#18
$k[$j++]=_6;//#18
};//#18
var _7=$a([1,1,1,1,4,1,3,2,1,1,1,1,1,1,2,1,3,1,1,1,3,1,2,1,2,1,1,1,3,1,1,2,1,1,2,2,1,1,1,2,2,2,1,1,1,1,4,1,1]);//#25
$k[$j++]="$/+%";//#25
$k[$j++]=_7;//#25
$_.eq_tmpl();//#25
var _8=$a([1,1,1,1,4,1,3,2,1,1,1,1,2,1,1,1,3,1,3,1,1,1,2,1,2,3,1,1,1,1,3,1,1,1,2,1,1,1,2,1,1,3,3,1,1,1,2,1,1,1,2,2,1,2,3,1,1,1,2,1,1,1,2,3,1,1,3,1,1,1,2,1,1,2,2,1,1,2,1,1,3,1,2,1,3,1,1,1,2,1,1,1,1,1,2,3,1,2,1,1,3,1,3,1,1,1,1,2,1,1,2,1,3,1,2,1,2,2,1,1,1,1,1,1,1,4,1,1,1,1,4,1,1]);//#28
$k[$j++]="$%&^039()*+,-./";//#28
$k[$j++]=_8;//#28
$_.eq_tmpl();//#28
var _9=$a([1,1,1,1,4,1,2,1,1,3,1,1,1,2,1,1,2,2,2,2,1,1,1,2,2,2,1,2,1,1,1,2,1,2,2,1,1,1,1,2,2,2,1,4,1,1,1,1,1,1,1,4,1,1,2,2,1,1,1,2,1,3,1,1,2,1,1,1,1,1,4,1,1]);//#34
$k[$j++]="CODE^01393";//#34
$k[$j++]=_9;//#34
$_.eq_tmpl();//#34
var _A=$_.isError;//#41
var _B=$_.isError;//#43
var _C=$_.isEqual;//#48
var _D=$_.isEqual;//#50
var _E=$_.isEqual;//#52
$k[$j++]=function(){
$k[$j++]="ABC^200";//#41
$k[$j++]="dontdraw parse";//#41
bwipp_code93ext();//#41
};//#41
$k[$j++]='bwipp.code93extbadCharacter';//#41
$k[$j++]=_A;//#41
$k[$j++]=function(){
var _F=$s(501);//#43
$k[$j++]=_F;//#43
$k[$j++]="dontdraw";//#43
bwipp_code93ext();//#43
};//#43
$k[$j++]='bwipp.code93extinputTooLong';//#43
$k[$j++]=_B;//#43
$k[$j++]=function(){
$k[$j++]="Code93 Ext!";//#48
$k[$j++]="includetext";//#48
bwipp_code93ext();//#48
};//#48
$k[$j++]=function(){
$k[$j++]=true;//#48
};//#48
$k[$j++]=true;//#48
$k[$j++]=_C;//#48
$k[$j++]=function(){
$k[$j++]="Code93 Ext!";//#50
$k[$j++]="includetext includecheck";//#50
bwipp_code93ext();//#50
};//#50
$k[$j++]=function(){
$k[$j++]=true;//#50
};//#50
$k[$j++]=true;//#50
$k[$j++]=_D;//#50
$k[$j++]=function(){
$k[$j++]="Code93 Ext!";//#52
$k[$j++]="includetext includecheck includecheckintext";//#52
bwipp_code93ext();//#52
};//#52
$k[$j++]=function(){
$k[$j++]=true;//#52
};//#52
$k[$j++]=true;//#52
$k[$j++]=_E;//#52
$_ = $__;//#52
}//bwipp_runtest_code93ext
console.log("code93ext...")
bwipp_runtest_code93ext();


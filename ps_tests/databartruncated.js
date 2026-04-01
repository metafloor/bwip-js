function bwipp_runtest_databartruncated(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_databartruncated.globals);//#2
$_.eq_tmpl=function(){
var _0=$k[--$j];//#17
var _1=$k[--$j];//#17
var _2=function(){
var _3=$_._arg0_;//#17
$k[$j++]=_3;//#17
$k[$j++]="dontdraw";//#17
bwipp_databartruncated();//#17
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
$_.er_tmpl=function(){
var _7=$k[--$j];//#22
var _8=$k[--$j];//#22
var _9=function(){
var _A=$_._arg0_;//#22
$k[$j++]=_A;//#22
$k[$j++]="dontdraw";//#22
bwipp_databartruncated();//#22
var _B=$k[--$j];//#22
var _C=$get(_B,'sbs');//#22
$k[$j++]=_C;//#22
};//#22
$put(_9,0,_8);//#22
var _D=$_.isError;//#23
$k[$j++]=_9;//#23
$k[$j++]=_7;//#23
$k[$j++]=_D;//#23
};//#23
var _E=$a([1,1,1,1,1,2,1,8,1,2,7,4,1,1,3,2,1,1,2,1,4,1,3,2,1,1,1,1,2,4,1,1,7,3,3,2,2,2,4,1,3,1,1,1,1]);//#28
$k[$j++]="(01)00012345678905";//#29
$k[$j++]=_E;//#29
$_.eq_tmpl();//#29
$k[$j++]="(01)00012345678906";//#31
$k[$j++]='bwipp.databartruncatedBadCheckDigit';//#31
$_.er_tmpl();//#31
$k[$j++]="";//#32
$k[$j++]='bwipp.databartruncatedBadLength';//#32
$_.er_tmpl();//#32
$k[$j++]="(01)000123456789051";//#33
$k[$j++]='bwipp.databartruncatedBadLength';//#33
$_.er_tmpl();//#33
$k[$j++]="(01)000123456789";//#34
$k[$j++]='bwipp.databartruncatedBadLength';//#34
$_.er_tmpl();//#34
$k[$j++]="(01)0001234567890A";//#35
$k[$j++]='bwipp.databartruncatedBadCharacter';//#35
$_.er_tmpl();//#35
$k[$j++]="(02)0001234567890";//#36
$k[$j++]='bwipp.databartruncatedBadAI';//#36
$_.er_tmpl();//#36
$_ = $__;//#37
}//bwipp_runtest_databartruncated
console.log("databartruncated...")
bwipp_runtest_databartruncated();


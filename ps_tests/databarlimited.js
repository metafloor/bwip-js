function bwipp_runtest_databarlimited(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_databarlimited.globals);//#2
$_.eq_tmpl=function(){
var _0=$k[--$j];//#17
var _1=$k[--$j];//#17
var _2=function(){
var _3=$_._arg0_;//#17
$k[$j++]=_3;//#17
$k[$j++]="dontdraw";//#17
bwipp_databarlimited();//#17
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
bwipp_databarlimited();//#22
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
var _E=$a([1,3,2,2,2,3,2,1,2,1,1,1,1,2,3,1,1,2,1,1,1,1,2,1,1,2,2,1,1,2,1,2,1,1,2,3,2,1,3,2,2,2,2,1,1,5]);//#28
$k[$j++]="(01)15012345678907";//#29
$k[$j++]=_E;//#29
$_.eq_tmpl();//#29
var _F=$a([1,1,1,1,1,2,1,2,1,2,2,4,2,5,1,1,1,1,2,1,1,2,1,1,2,2,1,1,1,3,1,3,1,1,1,3,1,5,1,2,1,2,1,1,1,5]);//#32
$k[$j++]="(01)0009876543210";//#33
$k[$j++]=_F;//#33
$_.eq_tmpl();//#33
$k[$j++]="(01)15012345678908";//#36
$k[$j++]='bwipp.databarlimitedBadCheckDigit';//#36
$_.er_tmpl();//#36
$k[$j++]="";//#37
$k[$j++]='bwipp.databarlimitedBadLength';//#37
$_.er_tmpl();//#37
$k[$j++]="(01)150123456789071";//#38
$k[$j++]='bwipp.databarlimitedBadLength';//#38
$_.er_tmpl();//#38
$k[$j++]="(01)150123456789";//#39
$k[$j++]='bwipp.databarlimitedBadLength';//#39
$_.er_tmpl();//#39
$k[$j++]="(01)25012345678907";//#40
$k[$j++]='bwipp.databarlimitedBadStartDigit';//#40
$_.er_tmpl();//#40
$k[$j++]="(01)1501234567890A";//#41
$k[$j++]='bwipp.databarlimitedBadCharacter';//#41
$_.er_tmpl();//#41
$k[$j++]="(02)15012345678907";//#42
$k[$j++]='bwipp.databarlimitedBadAI';//#42
$_.er_tmpl();//#42
$_ = $__;//#43
}//bwipp_runtest_databarlimited
console.log("databarlimited...")
bwipp_runtest_databarlimited();


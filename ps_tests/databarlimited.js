function bwipp_runtest_databarlimited(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#15
$_.t=$k[--$j];//#16
var _6=function(){
$k[$j++]=$_.t;//#17
$k[$j++]="dontdraw";//#17
bwipp_databarlimited();//#17
var _5=$get($k[--$j],'sbs');//#17
$k[$j++]=_5;//#17
};//#17
isEqual(_6,$_.e);//#17
};//#17
$_.er_tmpl=function(){
$_.e=$k[--$j];//#21
$_.t=$k[--$j];//#22
var _D=function(){
$k[$j++]=$_.t;//#23
$k[$j++]="dontdraw";//#23
bwipp_databarlimited();//#23
var _C=$get($k[--$j],'sbs');//#23
$k[$j++]=_C;//#23
};//#23
isError(_D,$_.e);//#23
};//#23
$k[$j++]="(01)15012345678907";//#29
$k[$j++]=$a([1,3,2,2,2,3,2,1,2,1,1,1,1,2,3,1,1,2,1,1,1,1,2,1,1,2,2,1,1,2,1,2,1,1,2,3,2,1,3,2,2,2,2,1,1,5]);//#29
$_.eq_tmpl();//#29
$k[$j++]="(01)0009876543210";//#33
$k[$j++]=$a([1,1,1,1,1,2,1,2,1,2,2,4,2,5,1,1,1,1,2,1,1,2,1,1,2,2,1,1,1,3,1,3,1,1,1,3,1,5,1,2,1,2,1,1,1,5]);//#33
$_.eq_tmpl();//#33
$k[$j++]="(01)15012345678908";//#36
$k[$j++]='bwipp.databarlimitedBadCheckDigit#36';//#36
$_.er_tmpl();//#36
$k[$j++]="";//#37
$k[$j++]='bwipp.databarlimitedBadLength#37';//#37
$_.er_tmpl();//#37
$k[$j++]="(01)150123456789071";//#38
$k[$j++]='bwipp.databarlimitedBadLength#38';//#38
$_.er_tmpl();//#38
$k[$j++]="(01)150123456789";//#39
$k[$j++]='bwipp.databarlimitedBadLength#39';//#39
$_.er_tmpl();//#39
$k[$j++]="(01)25012345678907";//#40
$k[$j++]='bwipp.databarlimitedBadStartDigit#40';//#40
$_.er_tmpl();//#40
$k[$j++]="(01)1501234567890A";//#41
$k[$j++]='bwipp.databarlimitedBadCharacter#41';//#41
$_.er_tmpl();//#41
$k[$j++]="(02)15012345678907";//#42
$k[$j++]='bwipp.databarlimitedBadAI#42';//#42
$_.er_tmpl();//#42
$_ = $__;//#43
}//bwipp_runtest_databarlimited
console.log("databarlimited...")
bwipp_runtest_databarlimited();


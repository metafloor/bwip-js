function bwipp_runtest_databaromni(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#15
$_.t=$k[--$j];//#16
var _6=function(){
$k[$j++]=$_.t;//#17
$k[$j++]="dontdraw";//#17
bwipp_databaromni();//#17
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
bwipp_databaromni();//#23
var _C=$get($k[--$j],'sbs');//#23
$k[$j++]=_C;//#23
};//#23
isError(_D,$_.e);//#23
};//#23
$k[$j++]="(01)20012345678909";//#29
$k[$j++]=$a([1,1,1,3,3,1,1,5,1,2,7,4,1,1,1,2,2,1,2,1,5,1,2,5,1,2,1,1,1,2,1,1,2,8,3,3,2,1,2,1,2,3,2,1,1]);//#29
$_.eq_tmpl();//#29
$k[$j++]="(01)0441234567890";//#33
$k[$j++]=$a([1,2,1,3,1,4,1,3,1,3,3,7,1,1,1,1,1,5,2,2,2,1,1,1,2,2,1,2,1,5,1,1,6,5,2,4,1,1,1,3,3,2,1,1,1]);//#33
$_.eq_tmpl();//#33
$k[$j++]="(01)20012345678908";//#36
$k[$j++]='bwipp.databaromniBadCheckDigit#36';//#36
$_.er_tmpl();//#36
$k[$j++]="";//#37
$k[$j++]='bwipp.databaromniBadLength#37';//#37
$_.er_tmpl();//#37
$k[$j++]="(01)200123456789091";//#38
$k[$j++]='bwipp.databaromniBadLength#38';//#38
$_.er_tmpl();//#38
$k[$j++]="(01)200123456789";//#39
$k[$j++]='bwipp.databaromniBadLength#39';//#39
$_.er_tmpl();//#39
$k[$j++]="(01)2001234567890A";//#40
$k[$j++]='bwipp.databaromniBadCharacter#40';//#40
$_.er_tmpl();//#40
$k[$j++]="(02)2001234567890";//#41
$k[$j++]='bwipp.databaromniBadAI#41';//#41
$_.er_tmpl();//#41
$_ = $__;//#42
}//bwipp_runtest_databaromni
console.log("databaromni...")
bwipp_runtest_databaromni();


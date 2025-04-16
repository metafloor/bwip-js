function bwipp_runtest_ean14(){
$_ = Object.create($_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#13
$_.t=$k[--$j];//#14
var _6=function(){
$k[$j++]=$_.t;//#15
$k[$j++]="dontdraw";//#15
bwipp_ean14();//#15
var _5=$get($k[--$j],'sbs');//#15
$k[$j++]=_5;//#15
};//#15
isEqual(_6,$_.e);//#15
};//#15
$_.er_tmpl=function(){
$_.e=$k[--$j];//#19
$_.t=$k[--$j];//#20
var _D=function(){
$k[$j++]=$_.t;//#21
$k[$j++]="dontdraw";//#21
bwipp_ean14();//#21
var _C=$get($k[--$j],'sbs');//#21
$k[$j++]=_C;//#21
};//#21
isError(_D,$_.e);//#21
};//#21
$k[$j++]="(01)09528765432108";//#27
$k[$j++]=$a([2,1,1,2,3,2,4,1,1,1,3,1,2,2,2,1,2,2,2,2,1,2,1,3,2,1,3,3,1,1,4,2,1,1,1,2,1,2,1,1,2,4,1,1,2,3,3,1,2,1,3,2,1,2,1,3,2,2,1,2,3,3,2,1,1,1,2,3,3,1,1,1,2]);//#27
$_.eq_tmpl();//#27
$k[$j++]="(01)09528765432107";//#30
$k[$j++]='bwipp.ean14badCheckDigit#30';//#30
$_.er_tmpl();//#30
$k[$j++]="";//#31
$k[$j++]='bwipp.ean14badLength#31';//#31
$_.er_tmpl();//#31
$k[$j++]="(01)095287654321081";//#32
$k[$j++]='bwipp.ean14badLength#32';//#32
$_.er_tmpl();//#32
$k[$j++]="(01)095287654321";//#33
$k[$j++]='bwipp.ean14badLength#33';//#33
$_.er_tmpl();//#33
$k[$j++]="(01)0952876543210A";//#34
$k[$j++]='bwipp.ean14badCharacter#34';//#34
$_.er_tmpl();//#34
$k[$j++]="(02)0952876543210";//#35
$k[$j++]='bwipp.ean14badAI#35';//#35
$_.er_tmpl();//#35
$_ = Object.getPrototypeOf($_);//#36
}//bwipp_runtest_ean14
console.log("ean14...")
bwipp_runtest_ean14();


function bwipp_runtest_databartruncated(){
$_ = Object.create($_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#15
$_.t=$k[--$j];//#16
var _6=function(){
$k[$j++]=$_.t;//#17
$k[$j++]="dontdraw";//#17
bwipp_databartruncated();//#17
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
bwipp_databartruncated();//#23
var _C=$get($k[--$j],'sbs');//#23
$k[$j++]=_C;//#23
};//#23
isError(_D,$_.e);//#23
};//#23
$k[$j++]="(01)00012345678905";//#29
$k[$j++]=$a([1,1,1,1,1,2,1,8,1,2,7,4,1,1,3,2,1,1,2,1,4,1,3,2,1,1,1,1,2,4,1,1,7,3,3,2,2,2,4,1,3,1,1,1,1]);//#29
$_.eq_tmpl();//#29
$k[$j++]="(01)00012345678906";//#31
$k[$j++]='bwipp.databartruncatedBadCheckDigit#31';//#31
$_.er_tmpl();//#31
$k[$j++]="";//#32
$k[$j++]='bwipp.databartruncatedBadLength#32';//#32
$_.er_tmpl();//#32
$k[$j++]="(01)000123456789051";//#33
$k[$j++]='bwipp.databartruncatedBadLength#33';//#33
$_.er_tmpl();//#33
$k[$j++]="(01)000123456789";//#34
$k[$j++]='bwipp.databartruncatedBadLength#34';//#34
$_.er_tmpl();//#34
$k[$j++]="(01)0001234567890A";//#35
$k[$j++]='bwipp.databartruncatedBadCharacter#35';//#35
$_.er_tmpl();//#35
$k[$j++]="(02)0001234567890";//#36
$k[$j++]='bwipp.databartruncatedBadAI#36';//#36
$_.er_tmpl();//#36
$_ = Object.getPrototypeOf($_);//#37
}//bwipp_runtest_databartruncated
console.log("databartruncated...")
bwipp_runtest_databartruncated();


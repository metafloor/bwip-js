function bwipp_runtest_databarexpanded(){
$_ = Object.create($_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#15
$_.t=$k[--$j];//#16
var _6=function(){
$k[$j++]=$_.t;//#17
$k[$j++]="dontdraw";//#17
bwipp_databarexpanded();//#17
var _5=$get($k[--$j],'sbs');//#17
$k[$j++]=_5;//#17
};//#17
isEqual(_6,$_.e);//#17
};//#17
$_.eq_tmpl_dontlint=function(){
$_.e=$k[--$j];//#21
$_.t=$k[--$j];//#22
var _D=function(){
$k[$j++]=$_.t;//#23
$k[$j++]="dontdraw dontlint";//#23
bwipp_databarexpanded();//#23
var _C=$get($k[--$j],'sbs');//#23
$k[$j++]=_C;//#23
};//#23
isEqual(_D,$_.e);//#23
};//#23
$k[$j++]="(01)00012345678905(10)ABC123";//#29
$k[$j++]=$a([1,3,2,5,1,1,2,1,2,1,8,4,1,1,2,2,2,4,1,1,4,1,1,1,4,2,2,1,5,1,1,1,5,6,2,3,1,1,2,4,2,1,3,3,4,1,2,1,1,1,4,3,6,4,1,1,3,3,2,2,1,4,1,1,1,2,3,1,6,1,2,1,1,1,8,2,3,2,1,1,2,1,6,1,3,2,2,1,3,2,1,1,5,3,4,6,1,1,1,1]);//#29
$_.eq_tmpl();//#29
$k[$j++]="(01)90012345678908(3103)001750";//#32
$k[$j++]=$a([1,1,3,2,1,5,1,2,2,1,8,4,1,1,3,4,1,2,2,3,1,1,1,1,4,1,3,2,2,3,1,1,4,6,3,2,1,1,3,3,3,1,3,1,4,1,1,1,4,3,2,3,6,4,1,1,1,1,2,4,1,2,5,1,1,1]);//#32
$_.eq_tmpl();//#32
$k[$j++]="(01)90012345678908(3202)000156";//#35
$k[$j++]=$a([1,1,1,2,1,3,4,4,1,1,8,4,1,1,1,2,3,3,1,4,2,1,1,1,4,1,3,2,2,3,1,1,4,6,3,2,1,1,3,3,3,1,3,1,4,1,1,1,4,3,2,3,6,4,1,1,2,4,1,5,1,1,1,2,1,1]);//#35
$_.eq_tmpl();//#35
$k[$j++]="(01)90012345678908(3103)012233(15)991231";//#38
$k[$j++]=$a([1,2,2,5,1,2,3,1,1,1,8,4,1,1,1,1,3,2,1,5,2,2,1,1,4,2,2,1,5,1,1,1,6,4,3,3,1,1,2,4,2,1,3,3,4,1,2,1,1,1,4,3,6,4,1,1,2,4,2,1,1,1,2,4,3,2,2,2,2,3,1,2,1,1,8,2,3,3,2,1,4,1,1,4,1,1,1]);//#38
$_.eq_tmpl();//#38
$k[$j++]="(01)98898765432106(3202)012345(15)991231";//#41
$k[$j++]=$a([1,2,1,4,2,3,2,1,2,1,8,4,1,1,3,4,2,2,1,1,1,3,2,1,1,6,2,3,1,1,1,1,6,4,3,1,1,2,3,6,1,2,1,1,1,2,5,1,3,2,2,3,6,4,1,1,3,1,2,5,1,2,1,2,1,3,4,2,1,1,2,3,1,1,8,2,3,3,2,1,4,1,1,4,1,1,1]);//#41
$_.eq_tmpl();//#41
$k[$j++]="(01)90012345678908(3922)795";//#44
$k[$j++]=$a([1,1,2,5,1,3,1,1,3,1,8,4,1,1,1,2,3,5,1,1,2,2,1,1,4,2,2,1,5,1,1,1,6,4,3,3,1,1,2,4,2,1,3,3,4,1,2,1,1,1,4,3,6,4,1,1,1,2,4,1,3,1,1,4,2,3,2,1,3,2,1,3,1,1,8,2,3,1,1]);//#44
$_.eq_tmpl_dontlint();//#44
$k[$j++]="(01)90012345678908(3922)795(20)01";//#47
$k[$j++]=$a([1,3,2,1,2,4,2,2,1,1,8,4,1,1,4,3,1,4,1,1,1,2,1,1,4,2,2,1,5,1,1,1,6,4,3,3,1,1,2,4,2,1,3,3,4,1,2,1,1,1,4,3,6,4,1,1,1,2,4,1,3,1,1,4,2,3,3,3,1,1,2,2,1,1,8,2,3,1,1,2,5,3,3,1,1,1,1]);//#47
$_.eq_tmpl_dontlint();//#47
$k[$j++]="(10)12A";//#59
$k[$j++]=$a([1,1,1,5,2,1,1,5,1,1,8,4,1,1,1,3,1,7,1,1,2,1,1,1,5,2,1,2,3,2,1,1,4,8,1,2,3,1,7,1,1,1,1,1,1]);//#59
$_.eq_tmpl_dontlint();//#59
$k[$j++]="(01)90012345678908(3103)012233(15)000000";//#62
$k[$j++]=$a([1,1,4,2,2,2,1,3,2,1,8,4,1,1,1,2,1,3,5,2,2,1,1,1,4,2,2,1,5,1,1,1,5,6,2,3,1,1,2,4,2,1,3,3,4,1,2,1,1,1,4,3,6,4,1,1,1,2,1,1,2,3,3,4,1,5,1,2,2,3,2,1,1,1,8,2,3,2,2,1,5,1,4,1,1,1,4,1,3,4,1,2,1,3,2,8,1,1,1,1,2,4,1,6,1,1,1,1,1,1,4,1,6,2,1,1,9,2,2,1,1]);//#62
$_.eq_tmpl_dontlint();//#62
$_ = Object.getPrototypeOf($_);//#63
}//bwipp_runtest_databarexpanded
console.log("databarexpanded...")
bwipp_runtest_databarexpanded();


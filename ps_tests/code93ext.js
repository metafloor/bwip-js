function bwipp_runtest_code93ext(){
$_ = Object.create($_);//#2
$_.eq_tmpl=function(){
$_.e=$k[--$j];//#16
$_.t=$k[--$j];//#17
var _6=function(){
$k[$j++]=$_.t;//#18
$k[$j++]="dontdraw parse includecheck";//#18
bwipp_code93ext();//#18
var _5=$get($k[--$j],'sbs');//#18
$k[$j++]=_5;//#18
};//#18
isEqual(_6,$_.e);//#18
};//#18
$_.eq_nonext_tmpl=function(){
$_.e=$k[--$j];//#22
$_.t=$k[--$j];//#23
var _D=function(){
$k[$j++]=$_.t;//#24
$k[$j++]="dontdraw includecheck";//#24
bwipp_code93();//#24
var _C=$get($k[--$j],'sbs');//#24
$k[$j++]=_C;//#24
};//#24
isEqual(_D,$_.e);//#24
};//#24
$k[$j++]="$/+%";//#31
$k[$j++]=$a([1,1,1,1,4,1,3,2,1,1,1,1,1,1,2,1,3,1,1,1,3,1,2,1,2,1,1,1,3,1,1,2,1,1,2,2,1,1,1,2,2,2,1,1,1,1,4,1,1]);//#31
$_.eq_tmpl();//#31
$k[$j++]="$/+%";//#34
$k[$j++]=$a([1,1,1,1,4,1,3,2,1,1,1,1,1,1,2,1,3,1,1,1,3,1,2,1,2,1,1,1,3,1,1,2,1,1,2,2,1,1,1,2,2,2,1,1,1,1,4,1,1]);//#34
$_.eq_nonext_tmpl();//#34
$k[$j++]="$%&^039()*+,-./";//#37
$k[$j++]=$a([1,1,1,1,4,1,3,2,1,1,1,1,2,1,1,1,3,1,3,1,1,1,2,1,2,3,1,1,1,1,3,1,1,1,2,1,1,1,2,1,1,3,3,1,1,1,2,1,1,1,2,2,1,2,3,1,1,1,2,1,1,1,2,3,1,1,3,1,1,1,2,1,1,2,2,1,1,2,1,1,3,1,2,1,3,1,1,1,2,1,1,1,1,1,2,3,1,2,1,1,3,1,3,1,1,1,1,2,1,1,2,1,3,1,2,1,2,2,1,1,1,1,1,1,1,4,1,1,1,1,4,1,1]);//#37
$_.eq_tmpl();//#37
$k[$j++]="CODE^01393";//#43
$k[$j++]=$a([1,1,1,1,4,1,2,1,1,3,1,1,1,2,1,1,2,2,2,2,1,1,1,2,2,2,1,2,1,1,1,2,1,2,2,1,1,1,1,2,2,2,1,4,1,1,1,1,1,1,1,4,1,1,2,2,1,1,1,2,1,3,1,1,2,1,1,1,1,1,4,1,1]);//#43
$_.eq_tmpl();//#43
$_ = Object.getPrototypeOf($_);//#44
}//bwipp_runtest_code93ext
console.log("code93ext...")
bwipp_runtest_code93ext();


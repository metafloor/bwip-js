function bwipp_runtest_pharmacode2(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_pharmacode2.globals);//#2
var _0=$a([0.1575,0.1575,0.1575,0.1575,0.1575,0.1575,0.315,0.315,0.1575,0.315,0.315]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
var _6=$_.isError;//#25
$k[$j++]=function(){
$k[$j++]="117480";//#13
$k[$j++]="dontdraw";//#13
bwipp_pharmacode2();//#13
var _7=$k[--$j];//#13
var _8=$get(_7,'bhs');//#13
$k[$j++]=_8;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="";//#21
$k[$j++]="dontdraw";//#21
bwipp_pharmacode2();//#21
};//#21
$k[$j++]='bwipp.pharmacode2BadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="123456789";//#22
$k[$j++]="dontdraw";//#22
bwipp_pharmacode2();//#22
};//#22
$k[$j++]='bwipp.pharmacode2BadLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="12A4";//#23
$k[$j++]="dontdraw";//#23
bwipp_pharmacode2();//#23
};//#23
$k[$j++]='bwipp.pharmacode2badCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="3";//#24
$k[$j++]="dontdraw";//#24
bwipp_pharmacode2();//#24
};//#24
$k[$j++]='bwipp.pharmacode2badValue';//#24
$k[$j++]=_5;//#24
$k[$j++]=function(){
$k[$j++]="64570081";//#25
$k[$j++]="dontdraw";//#25
bwipp_pharmacode2();//#25
};//#25
$k[$j++]='bwipp.pharmacode2badValue';//#25
$k[$j++]=_6;//#25
$_ = $__;//#25
}//bwipp_runtest_pharmacode2
console.log("pharmacode2...")
bwipp_runtest_pharmacode2();


function bwipp_runtest_pharmacode(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_pharmacode.globals);//#2
var _0=$a([4.2525,2.835,4.2525,2.835,1.4175,2.835,1.4175,2.835,4.2525,2.835,1.4175,2.835,4.2525,2.835,1.4175,2.835,4.2525,2.835,4.2525,2.835,4.2525,2.835,1.4175,2.835,4.2525,2.835,1.4175,2.835,1.4175,2.835,4.2525,2.835]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
var _6=$_.isError;//#25
$k[$j++]=function(){
$k[$j++]="117480";//#13
$k[$j++]="dontdraw";//#13
bwipp_pharmacode();//#13
var _7=$k[--$j];//#13
var _8=$get(_7,'sbs');//#13
$k[$j++]=_8;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="";//#21
$k[$j++]="dontdraw";//#21
bwipp_pharmacode();//#21
};//#21
$k[$j++]='bwipp.pharmacodeBadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="1234567";//#22
$k[$j++]="dontdraw";//#22
bwipp_pharmacode();//#22
};//#22
$k[$j++]='bwipp.pharmacodeBadLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="12A4";//#23
$k[$j++]="dontdraw";//#23
bwipp_pharmacode();//#23
};//#23
$k[$j++]='bwipp.pharmacodeBadCharacter';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="2";//#24
$k[$j++]="dontdraw";//#24
bwipp_pharmacode();//#24
};//#24
$k[$j++]='bwipp.pharmacodeBadValue';//#24
$k[$j++]=_5;//#24
$k[$j++]=function(){
$k[$j++]="131071";//#25
$k[$j++]="dontdraw";//#25
bwipp_pharmacode();//#25
};//#25
$k[$j++]='bwipp.pharmacodeBadValue';//#25
$k[$j++]=_6;//#25
$_ = $__;//#25
}//bwipp_runtest_pharmacode
console.log("pharmacode...")
bwipp_runtest_pharmacode();


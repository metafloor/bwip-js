function bwipp_runtest_rationalizedCodabar(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
var _0=function(){
$k[$j++]="A";//#17
$k[$j++]="dontdraw";//#17
bwipp_rationalizedCodabar();//#17
};//#17
isError(_0,'bwipp.rationalizedCodabarBadLength#18');//#17
var _1=function(){
$k[$j++]="AB";//#20
$k[$j++]="dontdraw validatecheck";//#20
bwipp_rationalizedCodabar();//#20
};//#20
isError(_1,'bwipp.rationalizedCodabarBadLength#21');//#20
var _2=function(){
$k[$j++]="TB";//#23
$k[$j++]="dontdraw";//#23
bwipp_rationalizedCodabar();//#23
};//#23
isError(_2,'bwipp.rationalizedCodabarBadStartStop#24');//#23
var _3=function(){
$k[$j++]="AN";//#26
$k[$j++]="dontdraw altstartstop";//#26
bwipp_rationalizedCodabar();//#26
};//#26
isError(_3,'bwipp.rationalizedCodabarBadAltStartStop#27');//#26
var _4=function(){
$k[$j++]="AAB";//#29
$k[$j++]="dontdraw";//#29
bwipp_rationalizedCodabar();//#29
};//#29
isError(_4,'bwipp.rationalizedCodabarBadCharacter#30');//#29
var _5=function(){
$k[$j++]="A37859.B";//#32
$k[$j++]="dontdraw validatecheck";//#32
bwipp_rationalizedCodabar();//#32
};//#32
isError(_5,'bwipp.rationalizedCodabarBadCheckDigit#33');//#32
$k[$j++]="A37859B";//#38
$k[$j++]="dontdraw";//#38
bwipp_rationalizedCodabar();//#38
debugIsEqual($get($k[--$j],'sbs'),$a([1,1,3,3,1,3,1,1,3,3,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,3,3,1,1,1,1,1,3,1,1,1,1,3,1,1,3,1,1,3,1,1,1,1,1,3,1,3,1,1,3,1]));//#41
$k[$j++]="A37859+B";//#43
$k[$j++]="dontdraw validatecheck";//#43
bwipp_rationalizedCodabar();//#43
debugIsEqual($get($k[--$j],'sbs'),$a([1,1,3,3,1,3,1,1,3,3,1,1,1,1,1,1,1,3,1,1,3,1,1,1,1,3,3,1,1,1,1,1,3,1,1,1,1,3,1,1,3,1,1,3,1,1,1,1,1,1,3,1,3,1,3,1,1,3,1,3,1,1,3,1]));//#46
$k[$j++]="AB";//#48
$k[$j++]="dontdraw";//#48
bwipp_rationalizedCodabar();//#48
debugIsEqual($get($k[--$j],'sbs'),$a([1,1,3,3,1,3,1,1,1,3,1,3,1,1,3,1]));//#51
$k[$j++]="TN";//#53
$k[$j++]="dontdraw altstartstop";//#53
bwipp_rationalizedCodabar();//#53
debugIsEqual($get($k[--$j],'sbs'),$a([1,1,3,3,1,3,1,1,1,3,1,3,1,1,3,1]));//#56
$_ = $__;//#57
}//bwipp_runtest_rationalizedCodabar
console.log("rationalizedCodabar...")
bwipp_runtest_rationalizedCodabar();


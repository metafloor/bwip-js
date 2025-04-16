function bwipp_runtest_msi(){
$_ = Object.create($_);//#2
var _3=function(){
$k[$j++]="2211";//#14
$k[$j++]="dontdraw includecheck checktype=mod11 badmod11";//#14
bwipp_msi();//#14
var _2=$get($k[--$j],'sbs');//#14
$k[$j++]=_2;//#14
};//#14
debugIsEqual(_3,$a([2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1]));//#14
var _7=function(){
$k[$j++]="2211";//#17
$k[$j++]="dontdraw includecheck checktype=ncrmod11 badmod11";//#17
bwipp_msi();//#17
var _6=$get($k[--$j],'sbs');//#17
$k[$j++]=_6;//#17
};//#17
debugIsEqual(_7,$a([2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1]));//#17
var _B=function(){
$k[$j++]="2211";//#20
$k[$j++]="dontdraw includecheck checktype=mod1110 badmod11";//#20
bwipp_msi();//#20
var _A=$get($k[--$j],'sbs');//#20
$k[$j++]=_A;//#20
};//#20
debugIsEqual(_B,$a([2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]));//#20
var _F=function(){
$k[$j++]="2211";//#23
$k[$j++]="dontdraw includecheck checktype=ncrmod1110 badmod11";//#23
bwipp_msi();//#23
var _E=$get($k[--$j],'sbs');//#23
$k[$j++]=_E;//#23
};//#23
debugIsEqual(_F,$a([2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]));//#23
var _G=function(){
$k[$j++]="2211";//#26
$k[$j++]="dontdraw includecheck checktype=mod10 badmod11";//#26
bwipp_msi();//#26
};//#26
isError(_G,'bwipp.msiBadMod11Mismatch#27');//#26
var _H=function(){
$k[$j++]="2211";//#29
$k[$j++]="dontdraw includecheck checktype=mod1010 badmod11";//#29
bwipp_msi();//#29
};//#29
isError(_H,'bwipp.msiBadMod11Mismatch#30');//#29
var _I=function(){
$k[$j++]="2211";//#32
$k[$j++]="dontdraw includecheck checktype=mod11";//#32
bwipp_msi();//#32
};//#32
isError(_I,'bwipp.msiBadMod11NotSpecified#33');//#32
var _M=function(){
$k[$j++]="1234567";//#36
$k[$j++]="dontdraw includecheck checktype=mod11";//#36
bwipp_msi();//#36
var _L=$get($k[--$j],'sbs');//#36
$k[$j++]=_L;//#36
};//#36
debugIsEqual(_M,$a([2,1,1,2,1,2,1,2,2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,2,1,1,2,2,1,1,2,1,2,1,2,2,1,1,2,2,1,1,2,2,1,2,1,1,2,1,2,2,1,2,1,2,1,1,2,2,1,1,2,1,2,1,2,1]));//#36
var _Q=function(){
$k[$j++]="1234567";//#39
$k[$j++]="dontdraw includecheck checktype=ncrmod11";//#39
bwipp_msi();//#39
var _P=$get($k[--$j],'sbs');//#39
$k[$j++]=_P;//#39
};//#39
debugIsEqual(_Q,$a([2,1,1,2,1,2,1,2,2,1,1,2,1,2,2,1,1,2,1,2,1,2,2,1,2,1,1,2,2,1,1,2,1,2,1,2,2,1,1,2,2,1,1,2,2,1,2,1,1,2,1,2,2,1,2,1,2,1,2,1,1,2,1,2,2,1,1,2,1]));//#39
$_ = Object.getPrototypeOf($_);//#41
}//bwipp_runtest_msi
console.log("msi...")
bwipp_runtest_msi();


function bwipp_runtest_plessey(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
var _0=function(){
$k[$j++]="";//#15
$k[$j++]="dontdraw";//#15
bwipp_plessey();//#15
};//#15
isError(_0,'bwipp.plesseyEmptyData#16');//#15
var _1=function(){
$k[$j++]="";//#18
$k[$j++]="dontdraw validatecheck";//#18
bwipp_plessey();//#18
};//#18
isError(_1,'bwipp.plesseyEmptyData#19');//#18
var _2=function(){
$k[$j++]="G";//#21
$k[$j++]="dontdraw";//#21
bwipp_plessey();//#21
};//#21
isError(_2,'bwipp.plesseyBadCharacter#22');//#21
var _3=function(){
$k[$j++]="1234ABCDEFDF";//#24
$k[$j++]="dontdraw validatecheck";//#24
bwipp_plessey();//#24
};//#24
isError(_3,'bwipp.plesseyBadCheckDigits#25');//#24
var _4=function(){
$k[$j++]="1234ABCDEFCE";//#27
$k[$j++]="dontdraw validatecheck";//#27
bwipp_plessey();//#27
};//#27
isError(_4,'bwipp.plesseyBadCheckDigits#28');//#27
var _5=function(){
$k[$j++]="01";//#30
$k[$j++]="dontdraw validatecheck";//#30
bwipp_plessey();//#30
};//#30
isError(_5,'bwipp.plesseyBadCheckDigits#31');//#30
$k[$j++]="1234ABCDEFCF";//#36
$k[$j++]="dontdraw validatecheck";//#36
bwipp_plessey();//#36
debugIsEqual($get($k[--$j],'sbs'),$a([3,2,3,2,1,4,3,2,3,2,1,4,1,4,1,4,1,4,3,2,1,4,1,4,3,2,3,2,1,4,1,4,1,4,1,4,3,2,1,4,1,4,3,2,1,4,3,2,3,2,3,2,1,4,3,2,1,4,1,4,3,2,3,2,3,2,1,4,3,2,3,2,1,4,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1,4,1,4,3,2,3,2,3,2,3,2,3,2,3,2,5,4,1,4,1,2,3,2,3]));//#39
$k[$j++]="00";//#41
$k[$j++]="dontdraw validatecheck";//#41
bwipp_plessey();//#41
debugIsEqual($get($k[--$j],'sbs'),$a([3,2,3,2,1,4,3,2,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,1,4,1,2,3,2,3]));//#44
$_ = $__;//#45
}//bwipp_runtest_plessey
console.log("plessey...")
bwipp_runtest_plessey();


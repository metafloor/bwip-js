function bwipp_runtest_code128(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
var _1=function(){
$k[$j++]="^193^193^193^193^193^19399999999999999^193";//#17
$k[$j++]="debugcws parse";//#17
bwipp_code128();//#17
};//#17
debugIsEqual(_1,$a([104,100,100,33,33,33,33,33,33,100,100,99,99,99,99,99,99,99,99,100,100,33,3,106]));//#17
var _3=function(){
$k[$j++]="^193^193^193^193^193^19399999999999999^193";//#22
$k[$j++]="debugcws parse newencoder unlatchextbeforec";//#22
bwipp_code128();//#22
};//#22
debugIsEqual(_3,$a([104,100,100,33,33,33,33,33,33,100,100,99,99,99,99,99,99,99,99,100,100,33,3,106]));//#22
var _5=function(){
$k[$j++]="^193^193^193^193^193^19399999999999999^193";//#26
$k[$j++]="debugcws parse newencoder";//#26
bwipp_code128();//#26
};//#26
debugIsEqual(_5,$a([104,100,100,33,33,33,33,33,33,99,99,99,99,99,99,99,99,100,33,91,106]));//#26
var _7=function(){
$k[$j++]="^193^193^193^193^193^19399999999999999^193";//#30
$k[$j++]="debugcws parse newencoder suppressc";//#30
bwipp_code128();//#30
};//#30
debugIsEqual(_7,$a([104,100,100,33,33,33,33,33,33,100,100,25,25,25,25,25,25,25,25,25,25,25,25,25,25,100,33,1,106]));//#30
var _9=function(){
$k[$j++]=" ^160^160^160^160 ^160^160^160^160 ";//#34
$k[$j++]="debugcws parse parsefnc newencoder";//#34
bwipp_code128();//#34
};//#34
debugIsEqual(_9,$a([104,0,100,100,0,0,0,0,100,0,0,0,0,0,100,0,23,106]));//#34
var _B=function(){
$k[$j++]=" ^160^160^160 ^160^160^160 ^160^160^160 ";//#38
$k[$j++]="debugcws parse parsefnc newencoder";//#38
bwipp_code128();//#38
};//#38
debugIsEqual(_B,$a([104,0,100,100,0,0,0,100,0,0,0,0,100,0,0,0,0,100,0,84,106]));//#38
var _D=function(){
$k[$j++]=" ^160^160 ^160^160 ^160^160 ^160^160 ";//#42
$k[$j++]="debugcws parse parsefnc newencoder";//#42
bwipp_code128();//#42
};//#42
debugIsEqual(_D,$a([104,0,100,100,0,0,100,0,0,0,100,0,0,0,100,0,0,0,100,0,48,106]));//#42
var _F=function(){
$k[$j++]="12^FNC1345^FNC167^FNC18";//#47
$k[$j++]="debugcws parse parsefnc";//#47
bwipp_code128();//#47
};//#47
debugIsEqual(_F,$a([105,12,102,34,100,21,102,22,23,102,24,49,106]));//#47
var _H=function(){
$k[$j++]="12^FNC1345^FNC167^FNC18";//#51
$k[$j++]="debugcws parse parsefnc newencoder";//#51
bwipp_code128();//#51
};//#51
debugIsEqual(_H,$a([105,12,102,34,100,21,102,22,23,102,24,49,106]));//#51
var _J=function(){
$k[$j++]=" 12^FNC1 ";//#55
$k[$j++]="debugcws parse parsefnc newencoder";//#55
bwipp_code128();//#55
};//#55
debugIsEqual(_J,$a([104,0,17,18,102,0,85,106]));//#55
var _L=function(){
$k[$j++]=" 1234^FNC1567";//#59
$k[$j++]="debugcws parse parsefnc newencoder";//#59
bwipp_code128();//#59
};//#59
debugIsEqual(_L,$a([104,0,99,12,34,102,56,100,23,41,106]));//#59
var _N=function(){
$k[$j++]="123^FNC14567";//#64
$k[$j++]="debugcws parse parsefnc";//#64
bwipp_code128();//#64
};//#64
debugIsEqual(_N,$a([104,17,99,23,102,45,67,84,106]));//#64
var _P=function(){
$k[$j++]="123^FNC14567";//#68
$k[$j++]="debugcws parse parsefnc newencoder";//#68
bwipp_code128();//#68
};//#68
debugIsEqual(_P,$a([104,17,99,23,102,45,67,84,106]));//#68
var _R=function(){
$k[$j++]="^104^033^034^035^065^066^067^016^017^018^019";//#76
$k[$j++]="debugcws raw";//#76
bwipp_code128();//#76
};//#76
debugIsEqual(_R,$a([104,33,34,35,65,66,67,16,17,18,19,48,106]));//#76
$_ = $__;//#79
}//bwipp_runtest_code128
console.log("code128...")
bwipp_runtest_code128();


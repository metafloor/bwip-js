function bwipp_runtest_datamatrix(){
$_ = Object.create($_);//#2
var _1=function(){
$k[$j++]="[\)>^03005^029214^030^004";//#16
$k[$j++]="debugcws parse";//#16
bwipp_datamatrix();//#16
};//#16
debugIsEqual(_1,$a([236,151,53]));//#16
var _3=function(){
$k[$j++]="[\)>^03005^02921456^030^004";//#20
$k[$j++]="debugcws parse";//#20
bwipp_datamatrix();//#20
};//#20
debugIsEqual(_3,$a([236,151,175,55,129]));//#20
var _7=function(){
$k[$j++]="^ECI000003price:$439.97^ECI000029^193^227^202^219^188^219:^163^1643149.79^ECI000017Preis:444,90 ^164";//#28
$k[$j++]="dontdraw parse parsefnc format=rectangle";//#28
bwipp_datamatrix();//#28
var _6=$get($k[--$j],'pixs');//#28
$k[$j++]=_6;//#28
};//#28
debugIsEqual(_7,$a([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));//#28
var _B=function(){
$k[$j++]="^ECI000003price:$439.97^ECI000029^193^227^202^219^188^219:^163^1643149.79^ECI000017Preis:444,90 ^164";//#51
$k[$j++]="dontdraw parse parsefnc format=rectangle dmre";//#51
bwipp_datamatrix();//#51
var _A=$get($k[--$j],'pixs');//#51
$k[$j++]=_A;//#51
};//#51
debugIsEqual(_B,$a([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));//#51
var _D=function(){
$k[$j++]="A1B2C3D4E5F6G7H8I9J0K1L2";//#75
$k[$j++]="debugcws";//#75
bwipp_datamatrix();//#75
};//#75
debugIsEqual(_D,$a([230,88,88,40,8,107,147,59,67,126,206,78,126,144,121,35,47,254]));//#75
var _F=function(){
$k[$j++]="123456";//#79
$k[$j++]="debugcws";//#79
bwipp_datamatrix();//#79
};//#79
debugIsEqual(_F,$a([142,164,186]));//#79
var _H=function(){
$k[$j++]="30Q324343430794<OQQ";//#83
$k[$j++]="debugcws";//#83
bwipp_datamatrix();//#83
};//#83
debugIsEqual(_H,$a([160,82,162,173,173,173,137,224,61,80,82,82]));//#83
var _J=function(){
$k[$j++]="A1B2C3D4E5F6G7H8I9J0K1L2";//#87
$k[$j++]="debugcws columns=64 dmre format=rectangle";//#87
bwipp_datamatrix();//#87
};//#87
debugIsEqual(_J,$a([230,88,88,40,8,107,147,59,67,126,206,78,126,144,121,35,47,254,129,73,223,118,14,164]));//#87
var _L=function(){
$k[$j++]="123456789012345678901234567890123456";//#91
$k[$j++]="debugcws columns=48 dmre format=rectangle";//#91
bwipp_datamatrix();//#91
};//#91
debugIsEqual(_L,$a([142,164,186,208,220,142,164,186,208,220,142,164,186,208,220,142,164,186]));//#91
var _N=function(){
$k[$j++]="30Q324343430794<OQ";//#95
$k[$j++]="debugcws rows=16 format=rectangle";//#95
bwipp_datamatrix();//#95
};//#95
debugIsEqual(_N,$a([160,82,162,173,173,173,137,224,61,80,82,129,42,192,87,237,133,28,178,73,223,118,14,164,59,209,104,254,150,45,195,90]));//#95
var _P=function(){
$k[$j++]="[\)>^03006^029+/ACMRN123456/V2009121908334^030^004";//#99
$k[$j++]="debugcws parse";//#99
bwipp_datamatrix();//#99
};//#99
debugIsEqual(_P,$a([237,44,48,66,68,78,83,79,142,164,186,48,87,150,139,142,149,138,163,53,129,118]));//#99
$_ = Object.getPrototypeOf($_);//#101
}//bwipp_runtest_datamatrix
console.log("datamatrix...")
bwipp_runtest_datamatrix();


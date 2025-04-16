function bwipp_runtest_code2of5(){
$_ = Object.create($_);//#2
var _0=function(){
$k[$j++]="";//#20
$k[$j++]="dontdraw";//#20
bwipp_code2of5();//#20
};//#20
isError(_0,'bwipp.code2of5emptyData#21');//#20
var _1=function(){
$k[$j++]="";//#22
$k[$j++]="dontdraw";//#22
bwipp_industrial2of5();//#22
};//#22
isError(_1,'bwipp.code2of5emptyData#23');//#22
var _2=function(){
$k[$j++]="";//#24
$k[$j++]="dontdraw";//#24
bwipp_iata2of5();//#24
};//#24
isError(_2,'bwipp.code2of5emptyData#25');//#24
var _3=function(){
$k[$j++]="";//#26
$k[$j++]="dontdraw";//#26
bwipp_matrix2of5();//#26
};//#26
isError(_3,'bwipp.code2of5emptyData#27');//#26
var _4=function(){
$k[$j++]="";//#28
$k[$j++]="dontdraw";//#28
bwipp_coop2of5();//#28
};//#28
isError(_4,'bwipp.code2of5emptyData#29');//#28
var _5=function(){
$k[$j++]="";//#30
$k[$j++]="dontdraw";//#30
bwipp_datalogic2of5();//#30
};//#30
isError(_5,'bwipp.code2of5emptyData#31');//#30
var _6=function(){
$k[$j++]="";//#33
$k[$j++]="dontdraw validatecheck";//#33
bwipp_code2of5();//#33
};//#33
isError(_6,'bwipp.code2of5emptyData#34');//#33
var _7=function(){
$k[$j++]="A";//#36
$k[$j++]="dontdraw";//#36
bwipp_code2of5();//#36
};//#36
isError(_7,'bwipp.code2of5badCharacter#37');//#36
var _8=function(){
$k[$j++]="876543211";//#39
$k[$j++]="dontdraw validatecheck";//#39
bwipp_code2of5();//#39
};//#39
isError(_8,'bwipp.code2of5badCheckDigit#40');//#39
var _9=function(){
$k[$j++]="0";//#42
$k[$j++]="dontdraw version=blah";//#42
bwipp_code2of5();//#42
};//#42
isError(_9,'bwipp.code2of5badVersion#43');//#42
var _D=function(){
$k[$j++]="0";//#48
$k[$j++]="dontdraw";//#48
bwipp_code2of5();//#48
var _C=$get($k[--$j],'sbs');//#48
$k[$j++]=_C;//#48
};//#48
debugIsEqual(_D,$a([3,1,3,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,1,1,3]));//#48
var _H=function(){
$k[$j++]="0";//#51
$k[$j++]="dontdraw validatecheck";//#51
bwipp_code2of5();//#51
var _G=$get($k[--$j],'sbs');//#51
$k[$j++]=_G;//#51
};//#51
debugIsEqual(_H,$a([3,1,3,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,1,1,3]));//#51
var _L=function(){
$k[$j++]="876543212";//#54
$k[$j++]="dontdraw validatecheck";//#54
bwipp_code2of5();//#54
var _K=$get($k[--$j],'sbs');//#54
$k[$j++]=_K;//#54
};//#54
debugIsEqual(_L,$a([3,1,3,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,3]));//#54
var _P=function(){
$k[$j++]="87654321";//#57
$k[$j++]="dontdraw";//#57
bwipp_code2of5();//#57
var _O=$get($k[--$j],'sbs');//#57
$k[$j++]=_O;//#57
};//#57
debugIsEqual(_P,$a([3,1,3,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,3,1,1,1,3]));//#57
var _T=function(){
$k[$j++]="87654321";//#60
$k[$j++]="dontdraw";//#60
bwipp_industrial2of5();//#60
var _S=$get($k[--$j],'sbs');//#60
$k[$j++]=_S;//#60
};//#60
debugIsEqual(_T,$a([3,1,3,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,3,1,1,1,3]));//#60
var _X=function(){
$k[$j++]="87654321";//#63
$k[$j++]="dontdraw";//#63
bwipp_iata2of5();//#63
var _W=$get($k[--$j],'sbs');//#63
$k[$j++]=_W;//#63
};//#63
debugIsEqual(_X,$a([1,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,3,1,1]));//#63
var _b=function(){
$k[$j++]="87654321";//#66
$k[$j++]="dontdraw";//#66
bwipp_matrix2of5();//#66
var _a=$get($k[--$j],'sbs');//#66
$k[$j++]=_a;//#66
};//#66
debugIsEqual(_b,$a([3,1,1,1,1,1,3,1,1,3,1,1,1,1,1,3,3,1,1,3,3,1,1,1,3,1,3,1,1,1,1,1,3,1,3,1,3,3,1,1,1,1,1,3,1,1,3,1,3,1,1,1,3,1,3,1,1,1,1]));//#66
var _c=$a([3,1,3,1,3,1,1,3,1,1,3,1,1,1,3,1,1,3,3,1,1,1,1,3,1,3,1,1,1,3,1,1,3,1,1,1,3,3,1,1,1,1,3,1,3,1,1,1,1,3,3,1,1,3,3]);//#70
var _f=function(){
$k[$j++]="87654321";//#69
$k[$j++]="dontdraw";//#69
bwipp_coop2of5();//#69
var _e=$get($k[--$j],'sbs');//#69
$k[$j++]=_e;//#69
};//#69
debugIsEqual(_f,_c);//#69
var _j=function(){
$k[$j++]="87654321";//#72
$k[$j++]="dontdraw";//#72
bwipp_datalogic2of5();//#72
var _i=$get($k[--$j],'sbs');//#72
$k[$j++]=_i;//#72
};//#72
debugIsEqual(_j,$a([1,1,1,1,3,1,1,3,1,1,1,1,1,3,3,1,1,3,3,1,1,1,3,1,3,1,1,1,1,1,3,1,3,1,3,3,1,1,1,1,1,3,1,1,3,1,3,1,1,1,3,1,3,1,1]));//#72
$_ = Object.getPrototypeOf($_);//#74
}//bwipp_runtest_code2of5
console.log("code2of5...")
bwipp_runtest_code2of5();


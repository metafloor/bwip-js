function bwipp_runtest_parseinput(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
$_.ctx=null;//#10
var _2=function(){
var _1=new Map([["parse",false],["parsefnc",false]]);//#15
$k[$j++]="ABC";//#15
$k[$j++]=_1;//#15
bwipp_parseinput();//#15
};//#15
isEqual(_2,$a([65,66,67]));//#15
var _5=function(){
var _4=new Map([["parse",true],["parsefnc",false]]);//#19
$k[$j++]="ABC";//#19
$k[$j++]=_4;//#19
bwipp_parseinput();//#19
};//#19
isEqual(_5,$a([65,66,67]));//#19
var _8=function(){
var _7=new Map([["parse",false],["parsefnc",true]]);//#23
$k[$j++]="ABC";//#23
$k[$j++]=_7;//#23
bwipp_parseinput();//#23
};//#23
isEqual(_8,$a([65,66,67]));//#23
var _B=function(){
var _A=new Map([["parse",true],["parsefnc",true]]);//#27
$k[$j++]="ABC";//#27
$k[$j++]=_A;//#27
bwipp_parseinput();//#27
};//#27
isEqual(_B,$a([65,66,67]));//#27
var _E=function(){
var _D=new Map([["parse",true],["parsefnc",true],["eci",true]]);//#31
$k[$j++]="ABC";//#31
$k[$j++]=_D;//#31
bwipp_parseinput();//#31
};//#31
isEqual(_E,$a([65,66,67]));//#31
var _G=function(){
var _F=new Map([["parseonly",true],["parse",false],["parsefnc",false]]);//#35
$k[$j++]="ABC";//#35
$k[$j++]=_F;//#35
bwipp_parseinput();//#35
};//#35
isEqual(_G,"ABC");//#35
var _I=function(){
var _H=new Map([["parseonly",true],["parse",true],["parsefnc",false]]);//#39
$k[$j++]="ABC";//#39
$k[$j++]=_H;//#39
bwipp_parseinput();//#39
};//#39
isEqual(_I,"ABC");//#39
var _L=function(){
var _K=new Map([["parse",false],["parsefnc",false]]);//#43
$k[$j++]="A^000BC";//#43
$k[$j++]=_K;//#43
bwipp_parseinput();//#43
};//#43
isEqual(_L,$a([65,94,48,48,48,66,67]));//#43
var _O=function(){
var _N=new Map([["parse",true],["parsefnc",false]]);//#50
$k[$j++]="^000ABC";//#50
$k[$j++]=_N;//#50
bwipp_parseinput();//#50
};//#50
isEqual(_O,$a([0,65,66,67]));//#50
var _R=function(){
var _Q=new Map([["parse",true],["parsefnc",false]]);//#54
$k[$j++]="ABC^000";//#54
$k[$j++]=_Q;//#54
bwipp_parseinput();//#54
};//#54
isEqual(_R,$a([65,66,67,0]));//#54
var _U=function(){
var _T=new Map([["parse",true],["parsefnc",false]]);//#58
$k[$j++]="A^000BC";//#58
$k[$j++]=_T;//#58
bwipp_parseinput();//#58
};//#58
isEqual(_U,$a([65,0,66,67]));//#58
var _X=function(){
var _W=new Map([["parse",true],["parsefnc",false]]);//#62
$k[$j++]="A^255BC";//#62
$k[$j++]=_W;//#62
bwipp_parseinput();//#62
};//#62
isEqual(_X,$a([65,255,66,67]));//#62
var _Z=function(){
var _Y=new Map([["parse",true],["parsefnc",false]]);//#66
$k[$j++]="A^256BC";//#66
$k[$j++]=_Y;//#66
bwipp_parseinput();//#66
};//#66
isError(_Z,'bwipp.invalidOrdinal#67');//#66
var _c=function(){
var _b=new Map([["parse",true],["parsefnc",false]]);//#70
$k[$j++]="ABC^00";//#70
$k[$j++]=_b;//#70
bwipp_parseinput();//#70
};//#70
isEqual(_c,$a([65,66,67,94,48,48]));//#70
var _f=function(){
var _e=new Map([["parse",true],["parsefnc",false]]);//#74
$k[$j++]="ABC^0";//#74
$k[$j++]=_e;//#74
bwipp_parseinput();//#74
};//#74
isEqual(_f,$a([65,66,67,94,48]));//#74
var _i=function(){
var _h=new Map([["parse",true],["parsefnc",false]]);//#78
$k[$j++]="ABC^";//#78
$k[$j++]=_h;//#78
bwipp_parseinput();//#78
};//#78
isEqual(_i,$a([65,66,67,94]));//#78
var _l=function(){
var _k=new Map([["parse",true],["parsefnc",false]]);//#85
$k[$j++]="^NUL^SOH^STX^ETX^EOT^ENQ^ACK^BEL^BS^TAB^LF^VT^FF^CR^014^015^DLE^DC1^DC2^DC3^DC4^NAK^SYN^ETB^CAN^EM^SUB^ESC^FS^GS^RS^US";//#85
$k[$j++]=_k;//#85
bwipp_parseinput();//#85
};//#85
isEqual(_l,$a([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]));//#85
var _o=function(){
var _n=new Map([["parse",true],["parsefnc",false]]);//#89
$k[$j++]="^NULABC";//#89
$k[$j++]=_n;//#89
bwipp_parseinput();//#89
};//#89
isEqual(_o,$a([0,65,66,67]));//#89
var _p=$a([65,66,67,0]);//#94
var _r=function(){
var _q=new Map([["parse",true],["parsefnc",false]]);//#93
$k[$j++]="ABC^NUL";//#93
$k[$j++]=_q;//#93
bwipp_parseinput();//#93
};//#93
isEqual(_r,_p);//#93
var _u=function(){
var _t=new Map([["parse",true],["parsefnc",false]]);//#97
$k[$j++]="A^NULBC";//#97
$k[$j++]=_t;//#97
bwipp_parseinput();//#97
};//#97
isEqual(_u,$a([65,0,66,67]));//#97
var _x=function(){
var _w=new Map([["parse",true],["parsefnc",false]]);//#101
$k[$j++]="^USABC";//#101
$k[$j++]=_w;//#101
bwipp_parseinput();//#101
};//#101
isEqual(_x,$a([31,65,66,67]));//#101
var _10=function(){
var _z=new Map([["parse",true],["parsefnc",false]]);//#105
$k[$j++]="ABC^US";//#105
$k[$j++]=_z;//#105
bwipp_parseinput();//#105
};//#105
isEqual(_10,$a([65,66,67,31]));//#105
var _13=function(){
var _12=new Map([["parse",true],["parsefnc",false]]);//#109
$k[$j++]="A^USBC";//#109
$k[$j++]=_12;//#109
bwipp_parseinput();//#109
};//#109
isEqual(_13,$a([65,31,66,67]));//#109
var _16=function(){
var _15=new Map([["parse",true],["parsefnc",false]]);//#113
$k[$j++]="ABC^NU";//#113
$k[$j++]=_15;//#113
bwipp_parseinput();//#113
};//#113
isEqual(_16,$a([65,66,67,94,78,85]));//#113
var _19=function(){
var _18=new Map([["parse",true],["parsefnc",false]]);//#117
$k[$j++]="ABC^N";//#117
$k[$j++]=_18;//#117
bwipp_parseinput();//#117
};//#117
isEqual(_19,$a([65,66,67,94,78]));//#117
var _1C=function(){
var _1B=new Map([["parse",true],["parsefnc",false]]);//#121
$k[$j++]="ABC^";//#121
$k[$j++]=_1B;//#121
bwipp_parseinput();//#121
};//#121
isEqual(_1C,$a([65,66,67,94]));//#121
var _1F=function(){
var _1E=new Map([["parse",true],["parsefnc",false]]);//#125
$k[$j++]="ABC^U";//#125
$k[$j++]=_1E;//#125
bwipp_parseinput();//#125
};//#125
isEqual(_1F,$a([65,66,67,94,85]));//#125
var _1I=function(){
var _1H=new Map([["parse",true],["parsefnc",false]]);//#129
$k[$j++]="ABC^";//#129
$k[$j++]=_1H;//#129
bwipp_parseinput();//#129
};//#129
isEqual(_1I,$a([65,66,67,94]));//#129
var _1L=function(){
var _1K=new Map([["parse",true],["parsefnc",false]]);//#133
$k[$j++]="ABC^094RS";//#133
$k[$j++]=_1K;//#133
bwipp_parseinput();//#133
};//#133
isEqual(_1L,$a([65,66,67,94,82,83]));//#133
var _1O=function(){
var _1N=new Map([["parse",true],["parsefnc",false]]);//#137
$k[$j++]="ABC^094NUL";//#137
$k[$j++]=_1N;//#137
bwipp_parseinput();//#137
};//#137
isEqual(_1O,$a([65,66,67,94,78,85,76]));//#137
var _1R=function(){
var _1Q=new Map([["parse",false],["parsefnc",false],["FNC1",-1]]);//#144
$k[$j++]="^FNC1ABC";//#144
$k[$j++]=_1Q;//#144
bwipp_parseinput();//#144
};//#144
isEqual(_1R,$a([94,70,78,67,49,65,66,67]));//#144
var _1U=function(){
var _1T=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#148
$k[$j++]="^FNC1ABC";//#148
$k[$j++]=_1T;//#148
bwipp_parseinput();//#148
};//#148
isEqual(_1U,$a([-1,65,66,67]));//#148
var _1X=function(){
var _1W=new Map([["parse",false],["parsefnc",true],["FNC1",-1],["SFT+",-2]]);//#152
$k[$j++]="A^FNC1XXX^SFT+BC";//#152
$k[$j++]=_1W;//#152
bwipp_parseinput();//#152
};//#152
isEqual(_1X,$a([65,-1,88,88,88,-2,66,67]));//#152
var _1a=function(){
var _1Z=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#156
$k[$j++]="ABC^FNC1";//#156
$k[$j++]=_1Z;//#156
bwipp_parseinput();//#156
};//#156
isEqual(_1a,$a([65,66,67,-1]));//#156
var _1d=function(){
var _1c=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#160
$k[$j++]="AB^^FNC1C";//#160
$k[$j++]=_1c;//#160
bwipp_parseinput();//#160
};//#160
isEqual(_1d,$a([65,66,94,70,78,67,49,67]));//#160
var _1g=function(){
var _1f=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#164
$k[$j++]="AB^^";//#164
$k[$j++]=_1f;//#164
bwipp_parseinput();//#164
};//#164
isEqual(_1g,$a([65,66,94]));//#164
var _1i=function(){
var _1h=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#168
$k[$j++]="ABC^FNC";//#168
$k[$j++]=_1h;//#168
bwipp_parseinput();//#168
};//#168
isError(_1i,'bwipp.truncatedFNC#169');//#168
var _1k=function(){
var _1j=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#172
$k[$j++]="ABC^F";//#172
$k[$j++]=_1j;//#172
bwipp_parseinput();//#172
};//#172
isError(_1k,'bwipp.truncatedFNC#173');//#172
var _1m=function(){
var _1l=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#176
$k[$j++]="ABC^";//#176
$k[$j++]=_1l;//#176
bwipp_parseinput();//#176
};//#176
isError(_1m,'bwipp.truncatedCaret#177');//#176
var _1o=function(){
var _1n=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#180
$k[$j++]="A^FNC2BC";//#180
$k[$j++]=_1n;//#180
bwipp_parseinput();//#180
};//#180
isError(_1o,'bwipp.unknownFNC#181');//#180
var _1q=function(){
var _1p=new Map([["parse",false],["parsefnc",true],["FNC1",-1]]);//#184
$k[$j++]="A^ECI123456BC";//#184
$k[$j++]=_1p;//#184
bwipp_parseinput();//#184
};//#184
isError(_1q,'bwipp.unknownFNC#185');//#184
var _1t=function(){
var _1s=new Map([["parse",false],["parsefnc",true],["eci",true],["FNC1",-1]]);//#188
$k[$j++]="A^ECI000000BC";//#188
$k[$j++]=_1s;//#188
bwipp_parseinput();//#188
};//#188
isEqual(_1t,$a([65,-1000000,66,67]));//#188
var _1w=function(){
var _1v=new Map([["parse",false],["parsefnc",true],["eci",true],["FNC1",-1]]);//#192
$k[$j++]="A^ECI999999BC";//#192
$k[$j++]=_1v;//#192
bwipp_parseinput();//#192
};//#192
isEqual(_1w,$a([65,-1999999,66,67]));//#192
var _1y=function(){
var _1x=new Map([["parse",false],["parsefnc",true],["eci",true],["FNC1",-1]]);//#196
$k[$j++]="A^ECI99999ABC";//#196
$k[$j++]=_1x;//#196
bwipp_parseinput();//#196
};//#196
isError(_1y,'bwipp.invalidECI#197');//#196
var _20=function(){
var _1z=new Map([["parse",false],["parsefnc",true]]);//#200
$k[$j++]="A^000BC";//#200
$k[$j++]=_1z;//#200
bwipp_parseinput();//#200
};//#200
isError(_20,'bwipp.unknownFNC#201');//#200
var _23=function(){
var _22=new Map([["parse",true],["parsefnc",true],["FNC1",-1]]);//#204
$k[$j++]="AB^094FNC1C";//#204
$k[$j++]=_22;//#204
bwipp_parseinput();//#204
};//#204
isEqual(_23,$a([65,66,-1,67]));//#204
var _26=function(){
var _25=new Map([["parse",true],["parsefnc",true],["eci",true],["FNC1",-1]]);//#211
$k[$j++]="XX^000XX^FNC1XX^ECI123456XX";//#211
$k[$j++]=_25;//#211
bwipp_parseinput();//#211
};//#211
isEqual(_26,$a([88,88,0,88,88,-1,88,88,-1123456,88,88]));//#211
var _28=function(){
var _27=new Map([["parseonly",true],["parse",true],["parsefnc",true],["FNC1",-1]]);//#215
$k[$j++]="XX^000XX^FNC1XX^ECI123456XX";//#215
$k[$j++]=_27;//#215
bwipp_parseinput();//#215
};//#215
isEqual(_28,"XX\000XX^FNC1XX^ECI123456XX");//#215
$_ = $__;//#218
}//bwipp_runtest_parseinput
console.log("parseinput...")
bwipp_runtest_parseinput();


function bwipp_runtest_royalmail(){
$_ = Object.create($_);//#2
$_.dump_4state_tmpl=function(){
$_.ret=$k[--$j];//#15
$_.bhs=$get($_.ret,'bhs');//#16
$_.bbs=$get($_.ret,'bbs');//#17
$k[$j++]=Infinity;//#18
for(var _7=0,_6=$_.bbs.length-1;_7<=_6;_7+=1){//#23
$_.i=_7;//#20
if($_.i!=0){//#21
$k[$j++]=0;//#21
}//#21
if($get($_.bbs,$_.i)<0.05){//#22
var _F=($get($_.bhs,$_.i)>0.14)?1:0;//#22
$k[$j++]=_F;//#22
}else{//#22
var _J=($get($_.bhs,$_.i)>0.09)?1:0;//#22
$k[$j++]=_J;//#22
}//#22
}//#22
for(var _M=0,_L=$_.bbs.length-1;_M<=_L;_M+=1){//#28
$_.i=_M;//#25
if($_.i!=0){//#26
$k[$j++]=0;//#26
}//#26
$k[$j++]=1;//#27
}//#27
for(var _Q=0,_P=$_.bbs.length-1;_Q<=_P;_Q+=1){//#33
$_.i=_Q;//#30
if($_.i!=0){//#31
$k[$j++]=0;//#31
}//#31
if($get($_.bbs,$_.i)<0.05){//#32
var _Y=($get($_.bhs,$_.i)>0.09)?1:0;//#32
$k[$j++]=_Y;//#32
}else{//#32
$k[$j++]=0;//#32
}//#32
}//#32
var _Z=$a();//#32
$k[$j++]=_Z;//#32
};//#32
var _a=function(){
$k[$j++]="";//#40
$k[$j++]="dontdraw";//#40
bwipp_royalmail();//#40
};//#40
isError(_a,'bwipp.royalmailEmptyData#41');//#40
var _b=function(){
$k[$j++]=",";//#43
$k[$j++]="dontdraw";//#43
bwipp_royalmail();//#43
};//#43
isError(_b,'bwipp.royalmailBadCharacter#44');//#43
var _c=function(){
$k[$j++]="1";//#46
$k[$j++]="dontdraw validatecheck";//#46
bwipp_royalmail();//#46
};//#46
isError(_c,'bwipp.royalmailBadCheckDigit#47');//#46
var _d=function(){
$k[$j++]="SO316XY1AT";//#49
$k[$j++]="dontdraw validatecheck";//#49
bwipp_royalmail();//#49
};//#49
isError(_d,'bwipp.royalmailBadCheckDigit#50');//#49
$k[$j++]="LE28HS9Z";//#55
$k[$j++]="dontdraw";//#55
bwipp_royalmail();//#55
$_.dump_4state_tmpl();//#55
isEqual($k[--$j],$a([1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1]));//#60
$k[$j++]="SO316XY1AS";//#62
$k[$j++]="dontdraw validatecheck";//#62
bwipp_royalmail();//#62
$_.dump_4state_tmpl();//#62
isEqual($k[--$j],$a([1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]));//#67
$_ = Object.getPrototypeOf($_);//#68
}//bwipp_runtest_royalmail
console.log("royalmail...")
bwipp_runtest_royalmail();


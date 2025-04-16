function bwipp_runtest_auspost(){
$_ = Object.create($_);//#2
$_.dump_4state_tmpl=function(){
$_.ret=$k[--$j];//#16
$_.bhs=$get($_.ret,'bhs');//#17
$_.bbs=$get($_.ret,'bbs');//#18
$k[$j++]=Infinity;//#19
for(var _7=0,_6=$_.bbs.length-1;_7<=_6;_7+=1){//#24
$_.i=_7;//#21
if($_.i!=0){//#22
$k[$j++]=0;//#22
}//#22
if($get($_.bbs,$_.i)<0.05){//#23
var _F=($get($_.bhs,$_.i)>0.14)?1:0;//#23
$k[$j++]=_F;//#23
}else{//#23
var _J=($get($_.bhs,$_.i)>0.09)?1:0;//#23
$k[$j++]=_J;//#23
}//#23
}//#23
for(var _M=0,_L=$_.bbs.length-1;_M<=_L;_M+=1){//#29
$_.i=_M;//#26
if($_.i!=0){//#27
$k[$j++]=0;//#27
}//#27
$k[$j++]=1;//#28
}//#28
for(var _Q=0,_P=$_.bbs.length-1;_Q<=_P;_Q+=1){//#34
$_.i=_Q;//#31
if($_.i!=0){//#32
$k[$j++]=0;//#32
}//#32
if($get($_.bbs,$_.i)<0.05){//#33
var _Y=($get($_.bhs,$_.i)>0.09)?1:0;//#33
$k[$j++]=_Y;//#33
}else{//#33
$k[$j++]=0;//#33
}//#33
}//#33
var _Z=$a();//#33
$k[$j++]=_Z;//#33
};//#33
var _a=function(){
$k[$j++]="";//#41
$k[$j++]="dontdraw";//#41
bwipp_auspost();//#41
};//#41
isError(_a,'bwipp.auspostTooShort#42');//#41
var _b=function(){
$k[$j++]="1196184209";//#44
$k[$j++]="dontdraw custinfoenc=alpha";//#44
bwipp_auspost();//#44
};//#44
isError(_b,'bwipp.auspostBadCustinfoEncoding#45');//#44
var _c=function(){
$k[$j++]="1";//#47
$k[$j++]="dontdraw";//#47
bwipp_auspost();//#47
};//#47
isError(_c,'bwipp.auspostTooShort#48');//#47
var _d=function(){
$k[$j++]="1096184209";//#50
$k[$j++]="dontdraw";//#50
bwipp_auspost();//#50
};//#50
isError(_d,'bwipp.auspostBadFCC#51');//#50
var _e=function(){
$k[$j++]="119618420A";//#53
$k[$j++]="dontdraw";//#53
bwipp_auspost();//#53
};//#53
isError(_e,'bwipp.auspostIncompleteDPID#54');//#53
var _f=function(){
$k[$j++]="5912345678ABcd!";//#56
$k[$j++]="dontdraw";//#56
bwipp_auspost();//#56
};//#56
isError(_f,'bwipp.auspostInvalidCustinfoCharacter#57');//#56
var _g=function(){
$k[$j++]="11123456789";//#59
$k[$j++]="dontdraw";//#59
bwipp_auspost();//#59
};//#59
isError(_g,'bwipp.auspostTooLong#60');//#59
var _h=function(){
$k[$j++]="591234567890123A";//#62
$k[$j++]="dontdraw";//#62
bwipp_auspost();//#62
};//#62
isError(_h,'bwipp.auspostTooLong#63');//#62
var _i=function(){
$k[$j++]="59123456789012345A";//#65
$k[$j++]="dontdraw";//#65
bwipp_auspost();//#65
};//#65
isError(_i,'bwipp.auspostTooLong#66');//#65
var _j=function(){
$k[$j++]="62123456789012345678A";//#68
$k[$j++]="dontdraw";//#68
bwipp_auspost();//#68
};//#68
isError(_j,'bwipp.auspostTooLong#69');//#68
var _k=function(){
$k[$j++]="621234567890123456789012A";//#71
$k[$j++]="dontdraw";//#71
bwipp_auspost();//#71
};//#71
isError(_k,'bwipp.auspostTooLong#72');//#71
$k[$j++]="1196184209";//#77
$k[$j++]="dontdraw";//#77
bwipp_auspost();//#77
$_.dump_4state_tmpl();//#77
isEqual($k[--$j],$a([1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0]));//#82
$k[$j++]="5956439111ABA 9";//#84
$k[$j++]="dontdraw";//#84
bwipp_auspost();//#84
$_.dump_4state_tmpl();//#84
isEqual($k[--$j],$a([1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0]));//#89
$_ = Object.getPrototypeOf($_);//#90
}//bwipp_runtest_auspost
console.log("auspost...")
bwipp_runtest_auspost();


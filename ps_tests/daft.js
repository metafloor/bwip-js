function bwipp_runtest_daft(){
var $__ = $_;//#2
$_ = Object.assign({}, $_);//#2
$_.dump_4state_tmpl=function(){
$_.ret=$k[--$j];//#13
$_.bhs=$get($_.ret,'bhs');//#14
$_.bbs=$get($_.ret,'bbs');//#15
$k[$j++]=Infinity;//#16
for(var _7=0,_6=$_.bbs.length-1;_7<=_6;_7+=1){//#21
$_.i=_7;//#18
if($_.i!=0){//#19
$k[$j++]=0;//#19
}//#19
if($get($_.bbs,$_.i)<0.05){//#20
var _F=($get($_.bhs,$_.i)>0.14)?1:0;//#20
$k[$j++]=_F;//#20
}else{//#20
var _J=($get($_.bhs,$_.i)>0.09)?1:0;//#20
$k[$j++]=_J;//#20
}//#20
}//#20
for(var _M=0,_L=$_.bbs.length-1;_M<=_L;_M+=1){//#26
$_.i=_M;//#23
if($_.i!=0){//#24
$k[$j++]=0;//#24
}//#24
$k[$j++]=1;//#25
}//#25
for(var _Q=0,_P=$_.bbs.length-1;_Q<=_P;_Q+=1){//#31
$_.i=_Q;//#28
if($_.i!=0){//#29
$k[$j++]=0;//#29
}//#29
if($get($_.bbs,$_.i)<0.05){//#30
var _Y=($get($_.bhs,$_.i)>0.09)?1:0;//#30
$k[$j++]=_Y;//#30
}else{//#30
$k[$j++]=0;//#30
}//#30
}//#30
var _Z=$a();//#30
$k[$j++]=_Z;//#30
};//#30
var _a=function(){
$k[$j++]="";//#38
$k[$j++]="dontdraw";//#38
bwipp_daft();//#38
};//#38
isError(_a,'bwipp.daftEmptyData#39');//#38
var _b=function(){
$k[$j++]="B";//#41
$k[$j++]="dontdraw";//#41
bwipp_daft();//#41
};//#41
isError(_b,'bwipp.daftBadCharacter#42');//#41
$k[$j++]="DAFT";//#47
$k[$j++]="dontdraw";//#47
bwipp_daft();//#47
$_.dump_4state_tmpl();//#47
isEqual($k[--$j],$a([0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0]));//#52
$_ = $__;//#53
}//bwipp_runtest_daft
console.log("daft...")
bwipp_runtest_daft();


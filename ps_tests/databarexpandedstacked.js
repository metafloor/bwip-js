function bwipp_runtest_databarexpandedstacked(){
$_ = Object.create($_);//#2
$_.er_tmpl_opts=function(){
$_.e=$k[--$j];//#13
$_.o=$k[--$j];//#14
$_.t=$k[--$j];//#15
var _8=function(){
$k[$j++]=$_.t;//#16
$k[$j++]=$_.o;//#16
bwipp_databarexpandedstacked();//#16
var _7=$get($k[--$j],'pixs');//#16
$k[$j++]=_7;//#16
};//#16
isError(_8,$_.e);//#16
};//#16
$k[$j++]="(01)00628176379104(17)500723(10)103";//#19
$k[$j++]="dontdraw segments=1";//#19
$k[$j++]='bwipp.gs1databarexpandedBadSegments#19';//#19
$_.er_tmpl_opts();//#19
$k[$j++]="(01)00628176379104(17)500723(10)103";//#20
$k[$j++]="dontdraw segments=23";//#20
$k[$j++]='bwipp.gs1databarexpandedBadSegments#20';//#20
$_.er_tmpl_opts();//#20
$k[$j++]="(01)00628176379104(17)500723(10)103";//#21
$k[$j++]="dontdraw segments=3";//#21
$k[$j++]='bwipp.gs1databarexpandedBadSegments#21';//#21
$_.er_tmpl_opts();//#21
$_ = Object.getPrototypeOf($_);//#23
}//bwipp_runtest_databarexpandedstacked
console.log("databarexpandedstacked...")
bwipp_runtest_databarexpandedstacked();


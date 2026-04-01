function bwipp_runtest_isbn(){
var $__ = $_;//#2
$_=Object.assign({},$_,bwipp_runtest_isbn.globals);//#2
var _0=$a([1,1,1,1,3,1,2,3,1,2,1,1,2,2,2,1,2,3,1,4,1,1,1,1,2,3,1,1,1,1,1,1,1,2,1,3,2,2,2,1,2,1,2,2,1,4,1,1,2,2,2,1,1,1,3,2,1,1,1]);//#14
var _1=$_.debugIsEqual;//#14
var _2=$_.isError;//#21
var _3=$_.isError;//#22
var _4=$_.isError;//#23
var _5=$_.isError;//#24
var _6=$_.isError;//#25
var _7=$_.isError;//#26
var _8=$_.isError;//#27
var _9=$_.isError;//#28
var _A=$_.isError;//#29
var _B=$_.isError;//#30
var _C=$_.isError;//#31
var _D=$_.isError;//#32
var _E=$_.isError;//#33
var _F=$_.isError;//#34
var _G=$_.isError;//#35
var _H=$_.isError;//#36
$k[$j++]=function(){
$k[$j++]="978-1-56581-231-4";//#13
$k[$j++]="dontdraw";//#13
bwipp_isbn();//#13
var _I=$k[--$j];//#13
var _J=$get(_I,'sbs');//#13
$k[$j++]=_J;//#13
};//#13
$k[$j++]=_0;//#13
$k[$j++]=_1;//#13
$k[$j++]=function(){
$k[$j++]="978-1-5658-231";//#21
$k[$j++]="dontdraw";//#21
bwipp_isbn();//#21
};//#21
$k[$j++]='bwipp.isbnBadLength';//#21
$k[$j++]=_2;//#21
$k[$j++]=function(){
$k[$j++]="978-1-56581-231-4 123";//#22
$k[$j++]="dontdraw";//#22
bwipp_isbn();//#22
};//#22
$k[$j++]='bwipp.isbnBadAddOnLength';//#22
$k[$j++]=_3;//#22
$k[$j++]=function(){
$k[$j++]="123-1-56581-231-7";//#23
$k[$j++]="dontdraw";//#23
bwipp_isbn();//#23
};//#23
$k[$j++]='bwipp.isbn13badPrefix';//#23
$k[$j++]=_4;//#23
$k[$j++]=function(){
$k[$j++]="978-1--58121-31-7";//#24
$k[$j++]="dontdraw";//#24
bwipp_isbn();//#24
};//#24
$k[$j++]='bwipp.isbn13adjacentDashes';//#24
$k[$j++]=_5;//#24
$k[$j++]=function(){
$k[$j++]="978-1-565812314-7";//#25
$k[$j++]="dontdraw";//#25
bwipp_isbn();//#25
};//#25
$k[$j++]='bwipp.isbn13numDashesDigits';//#25
$k[$j++]=_6;//#25
$k[$j++]=function(){
$k[$j++]="978-1-56581-23A-7";//#26
$k[$j++]="dontdraw";//#26
bwipp_isbn();//#26
};//#26
$k[$j++]='bwipp.isbn13character15';//#26
$k[$j++]=_7;//#26
$k[$j++]=function(){
$k[$j++]="978-1-56581-23147";//#27
$k[$j++]="dontdraw";//#27
bwipp_isbn();//#27
};//#27
$k[$j++]='bwipp.isbn13character16';//#27
$k[$j++]=_8;//#27
$k[$j++]=function(){
$k[$j++]="978-1-56581-231-A";//#28
$k[$j++]="dontdraw";//#28
bwipp_isbn();//#28
};//#28
$k[$j++]='bwipp.isbn13character17';//#28
$k[$j++]=_9;//#28
$k[$j++]=function(){
$k[$j++]="978-1-56581-231-0";//#29
$k[$j++]="dontdraw";//#29
bwipp_isbn();//#29
};//#29
$k[$j++]='bwipp.isbn13badCheckDigit';//#29
$k[$j++]=_A;//#29
$k[$j++]=function(){
$k[$j++]="A-56581-231-7";//#30
$k[$j++]="dontdraw";//#30
bwipp_isbn();//#30
};//#30
$k[$j++]='bwipp.isbn10FirstDigit';//#30
$k[$j++]=_B;//#30
$k[$j++]=function(){
$k[$j++]="1--6581-231-7";//#31
$k[$j++]="dontdraw";//#31
bwipp_isbn();//#31
};//#31
$k[$j++]='bwipp.isbn10adjacentDashes';//#31
$k[$j++]=_C;//#31
$k[$j++]=function(){
$k[$j++]="1-565812314-7";//#32
$k[$j++]="dontdraw";//#32
bwipp_isbn();//#32
};//#32
$k[$j++]='bwipp.isbn10numDashesDigits';//#32
$k[$j++]=_D;//#32
$k[$j++]=function(){
$k[$j++]="1-56581-23A-7";//#33
$k[$j++]="dontdraw";//#33
bwipp_isbn();//#33
};//#33
$k[$j++]='bwipp.isbn10character11';//#33
$k[$j++]=_E;//#33
$k[$j++]=function(){
$k[$j++]="1-56581-231X7";//#34
$k[$j++]="dontdraw";//#34
bwipp_isbn();//#34
};//#34
$k[$j++]='bwipp.isbn10character12';//#34
$k[$j++]=_F;//#34
$k[$j++]=function(){
$k[$j++]="1-56581-231-?";//#35
$k[$j++]="dontdraw";//#35
bwipp_isbn();//#35
};//#35
$k[$j++]='bwipp.isbn10character13';//#35
$k[$j++]=_G;//#35
$k[$j++]=function(){
$k[$j++]="1-56581-231-0";//#36
$k[$j++]="dontdraw";//#36
bwipp_isbn();//#36
};//#36
$k[$j++]='bwipp.isbn10badCheckDigit';//#36
$k[$j++]=_H;//#36
$_ = $__;//#36
}//bwipp_runtest_isbn
console.log("isbn...")
bwipp_runtest_isbn();


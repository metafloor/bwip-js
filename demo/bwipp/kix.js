// file: bwipp/kix.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN kix
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("kix", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("kix", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
BWIPJS.bwipp["kix"]=function() {
	var t,x,y;
	function $f0(){
		return -1;
	}
	function $f1(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f3(){
		var a=/^\s*([^\s]+)(\s+.*)?$/.exec(this.stk[this.ptr-1]);
		if (a) {
			this.stk[this.ptr-1]=BWIPJS.psstring(a[2]===undefined?"":a[2]);
			this.stk[this.ptr++]=BWIPJS.psstring(a[1]);
			this.stk[this.ptr++]=true;
		} else {
			this.stk[this.ptr-1]=false;
		}
		this.stk[this.ptr++]=false;
		this.eq();
		this.stk[this.ptr++]=$f0;
		var t0=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t0.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-2].toString();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("=");
		var h=this.stk[this.ptr-2];
		t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		this.stk[this.ptr++]=true;
		this.eq();
		this.stk[this.ptr++]=$f1;
		this.stk[this.ptr++]=$f2;
		var t1=this.stk[--this.ptr];
		var t2=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t2.call(this)==-1) return -1;
		} else {
			if (t1.call(this)==-1) return -1;
		}
	}
	function $f4(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]={};
		this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
		this.xget("options");
		this.stk[this.ptr++]=$f3;
		var t3=this.stk[--this.ptr];
		while (t3.call(this)!=-1);
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		this.xget("charvals");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("barchars");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f7(){
		this.stk[this.ptr++]="bwipp.kixBadCharacter";
		this.stk[this.ptr++]=BWIPJS.psstring("KIX must contain only capital letters and digits");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f8(){
		this.xget("barcode");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("charvals");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.stk[this.ptr++]=$f7;
		var t11=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t11.call(this)==-1) return -1;
		}
	}
	function $f9(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="indx";
		this.xget("charvals");
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("encstr");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("encs");
		this.xget("indx");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("txt");
		this.xget("i");
		this.stk[this.ptr++]=Infinity;
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3.312;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("textyoffset");
		this.xget("textfont");
		this.xget("textsize");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f10(){
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f11(){
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=5;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f12(){
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=5;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f13(){
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=8;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f14(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="enc";
		this.xget("encstr");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("enc");
		this.stk[this.ptr++]=BWIPJS.psstring("0");
		this.eq();
		this.stk[this.ptr++]=$f10;
		var t22=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t22.call(this)==-1) return -1;
		}
		this.xget("enc");
		this.stk[this.ptr++]=BWIPJS.psstring("1");
		this.eq();
		this.stk[this.ptr++]=$f11;
		var t23=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t23.call(this)==-1) return -1;
		}
		this.xget("enc");
		this.stk[this.ptr++]=BWIPJS.psstring("2");
		this.eq();
		this.stk[this.ptr++]=$f12;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
		this.xget("enc");
		this.stk[this.ptr++]=BWIPJS.psstring("3");
		this.eq();
		this.stk[this.ptr++]=$f13;
		var t25=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t25.call(this)==-1) return -1;
		}
	}
	function $f15(){
		this.stk[this.ptr++]=1.44;
		this.stk[this.ptr++]=1.872;
	}
	function $f16(){
		this.stk[this.ptr++]="txt";
		this.xget("txt");
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="options";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcode";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dontdraw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="includetext";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textfont";
	this.stk[this.ptr++]="Courier";
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textsize";
	this.stk[this.ptr++]=10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textyoffset";
	this.stk[this.ptr++]=-8.5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=0.175;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("options");
	this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype";
	this.eq();
	this.stk[this.ptr++]=$f4;
	var t4=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t4.call(this)==-1) return -1;
	}
	this.xget("options");
	this.stk[this.ptr++]=$f5;
	var t5=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t5);
	this.stk[this.ptr++]="textfont";
	this.xget("textfont");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textsize";
	this.xget("textsize");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textyoffset";
	this.xget("textyoffset");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	this.xget("height");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encs";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0033"),BWIPJS.psstring("0123"),BWIPJS.psstring("0132"),BWIPJS.psstring("1023"),BWIPJS.psstring("1032"),BWIPJS.psstring("1122"),BWIPJS.psstring("0213"),BWIPJS.psstring("0303"),BWIPJS.psstring("0312"),BWIPJS.psstring("1203"),BWIPJS.psstring("1212"),BWIPJS.psstring("1302"),BWIPJS.psstring("0231"),BWIPJS.psstring("0321"),BWIPJS.psstring("0330"),BWIPJS.psstring("1221"),BWIPJS.psstring("1230"),BWIPJS.psstring("1320"),BWIPJS.psstring("2013"),BWIPJS.psstring("2103"),BWIPJS.psstring("2112"),BWIPJS.psstring("3003"),BWIPJS.psstring("3012"),BWIPJS.psstring("3102"),BWIPJS.psstring("2031"),BWIPJS.psstring("2121"),BWIPJS.psstring("2130"),BWIPJS.psstring("3021"),BWIPJS.psstring("3030"),BWIPJS.psstring("3120"),BWIPJS.psstring("2211"),BWIPJS.psstring("2301"),BWIPJS.psstring("2310"),BWIPJS.psstring("3201"),BWIPJS.psstring("3210"),BWIPJS.psstring("3300")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barchars";
	this.stk[this.ptr++]=BWIPJS.psstring("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=36;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=35;
	this.stk[this.ptr++]=$f6;
	var t10=this.stk[--this.ptr];
	var t8=this.stk[--this.ptr];
	var t7=this.stk[--this.ptr];
	var t6=this.stk[--this.ptr];
	for (var t9=t6; t7<0 ? t9>=t8 : t9<=t8; t9+=t7) {
		this.stk[this.ptr++]=t9;
		if (t10.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f8;
	var t16=this.stk[--this.ptr];
	var t14=this.stk[--this.ptr];
	var t13=this.stk[--this.ptr];
	var t12=this.stk[--this.ptr];
	for (var t15=t12; t13<0 ? t15>=t14 : t15<=t14; t15+=t13) {
		this.stk[this.ptr++]=t15;
		if (t16.call(this)==-1) break;
	}
	this.stk[this.ptr++]="barlen";
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encstr";
	this.xget("barlen");
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="txt";
	this.xget("barlen");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("barlen");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f9;
	var t21=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	var t18=this.stk[--this.ptr];
	var t17=this.stk[--this.ptr];
	for (var t20=t17; t18<0 ? t20>=t19 : t20<=t19; t20+=t18) {
		this.stk[this.ptr++]=t20;
		if (t21.call(this)==-1) break;
	}
	this.stk[this.ptr++]="bbs";
	this.xget("encstr");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bhs";
	this.xget("encstr");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("encstr");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f14;
	var t30=this.stk[--this.ptr];
	var t28=this.stk[--this.ptr];
	var t27=this.stk[--this.ptr];
	var t26=this.stk[--this.ptr];
	for (var t29=t26; t27<0 ? t29>=t28 : t29<=t28; t29+=t27) {
		this.stk[this.ptr++]=t29;
		if (t30.call(this)==-1) break;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	this.stk[this.ptr++]=this.get("renlinear");
	this.stk[this.ptr++]="bbs";
	this.xget("bbs");
	this.stk[this.ptr++]="bhs";
	this.xget("bhs");
	this.stk[this.ptr++]="sbs";
	this.stk[this.ptr++]=Infinity;
	this.xget("bhs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f15;
	var t33=this.stk[--this.ptr];
	var t31=this.stk[--this.ptr];
	for (var t32=0; t32<t31; t32++) {
		if (t33.call(this)==-1) break;
	}
	this.stk[this.ptr++]=1.44;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.xget("includetext");
	this.stk[this.ptr++]=$f16;
	var t34=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t34.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="opt";
	this.xget("options");
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.xget("dontdraw");
	this.not();
	this.stk[this.ptr++]=this.get("renlinear");
	var t35=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t35.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("kix");
// END OF kix

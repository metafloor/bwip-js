// file: bwipp/code39ext.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN code39ext
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("code39ext", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("code39ext", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
if (!BWIPJS.bwipp["code39"] && BWIPJS.increfs("code39ext", "code39")) {
	BWIPJS.load("bwipp/code39.js");
}
BWIPJS.bwipp["code39ext"]=function() {
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
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("msg");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("j");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.xget("msg");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f7(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("msg");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("j");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="barcode";
		this.xget("msg");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f8(){
		this.stk[this.ptr++]=BWIPJS.psstring("^");
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
		this.stk[this.ptr++]=$f6;
		this.stk[this.ptr++]=$f7;
		var t6=this.stk[--this.ptr];
		var t7=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t7.call(this)==-1) return -1;
		} else {
			if (t6.call(this)==-1) return -1;
		}
	}
	function $f9(){
		this.stk[this.ptr++]="msg";
		this.xget("barcode");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("barcode");
		this.stk[this.ptr++]=$f8;
		var t8=this.stk[--this.ptr];
		while (t8.call(this)!=-1);
	}
	function $f10(){
		this.stk[this.ptr++]="bwipp.code39extBadCharacter";
		this.stk[this.ptr++]=BWIPJS.psstring("Code 39 Extended must contain only ASCII characters");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f11(){
		this.stk[this.ptr++]=128;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f10;
		var t10=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t10.call(this)==-1) return -1;
		}
	}
	function $f12(){
		this.xget("newtext");
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring(" ");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f13(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="extchar";
		this.xget("extencs");
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("newcode");
		this.xget("j");
		this.xget("extchar");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("newtext");
		this.xget("j");
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("extchar");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.ne();
		this.stk[this.ptr++]=$f12;
		var t12=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t12.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.xget("extchar");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f14(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="txtentry";
		this.xget("txt");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("txtentry");
		this.stk[this.ptr++]=0;
		this.xget("newtext");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("txt");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("txtentry");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f15(){
		this.stk[this.ptr++]="txt";
		this.xget("args");
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("newtext");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f14;
		var t22=this.stk[--this.ptr];
		var t20=this.stk[--this.ptr];
		var t19=this.stk[--this.ptr];
		var t18=this.stk[--this.ptr];
		for (var t21=t18; t19<0 ? t21>=t20 : t21<=t20; t21+=t19) {
			this.stk[this.ptr++]=t21;
			if (t22.call(this)==-1) break;
		}
		this.xget("args");
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		this.xget("txt");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
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
	this.stk[this.ptr++]="parse";
	this.stk[this.ptr++]=false;
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
	this.xget("parse");
	this.stk[this.ptr++]=$f9;
	var t9=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t9.call(this)==-1) return -1;
	}
	this.xget("barcode");
	this.stk[this.ptr++]=$f11;
	var t11=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t11);
	this.stk[this.ptr++]="barlen";
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="extencs";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("%U"),BWIPJS.psstring("$A"),BWIPJS.psstring("$B"),BWIPJS.psstring("$C"),BWIPJS.psstring("$D"),BWIPJS.psstring("$E"),BWIPJS.psstring("$F"),BWIPJS.psstring("$G"),BWIPJS.psstring("$H"),BWIPJS.psstring("$I"),BWIPJS.psstring("$J"),BWIPJS.psstring("$K"),BWIPJS.psstring("$L"),BWIPJS.psstring("$M"),BWIPJS.psstring("$N"),BWIPJS.psstring("$O"),BWIPJS.psstring("$P"),BWIPJS.psstring("$Q"),BWIPJS.psstring("$R"),BWIPJS.psstring("$S"),BWIPJS.psstring("$T"),BWIPJS.psstring("$U"),BWIPJS.psstring("$V"),BWIPJS.psstring("$W"),BWIPJS.psstring("$X"),BWIPJS.psstring("$Y"),BWIPJS.psstring("$Z"),BWIPJS.psstring("%A"),BWIPJS.psstring("%B"),BWIPJS.psstring("%C"),BWIPJS.psstring("%D"),BWIPJS.psstring("%E"),BWIPJS.psstring(" "),BWIPJS.psstring("/A"),BWIPJS.psstring("/B"),BWIPJS.psstring("/C"),BWIPJS.psstring("/D"),BWIPJS.psstring("/E"),BWIPJS.psstring("/F"),BWIPJS.psstring("/G"),BWIPJS.psstring("/H"),BWIPJS.psstring("/I"),BWIPJS.psstring("/J"),BWIPJS.psstring("/K"),BWIPJS.psstring("/L"),BWIPJS.psstring("-"),BWIPJS.psstring("."),BWIPJS.psstring("/O"),BWIPJS.psstring("0"),BWIPJS.psstring("1"),BWIPJS.psstring("2"),BWIPJS.psstring("3"),BWIPJS.psstring("4"),BWIPJS.psstring("5"),BWIPJS.psstring("6"),BWIPJS.psstring("7"),BWIPJS.psstring("8"),BWIPJS.psstring("9"),BWIPJS.psstring("/Z"),BWIPJS.psstring("%F"),BWIPJS.psstring("%G"),BWIPJS.psstring("%H"),BWIPJS.psstring("%I"),BWIPJS.psstring("%J"),BWIPJS.psstring("%V"),BWIPJS.psstring("A"),BWIPJS.psstring("B"),BWIPJS.psstring("C"),BWIPJS.psstring("D"),BWIPJS.psstring("E"),BWIPJS.psstring("F"),BWIPJS.psstring("G"),BWIPJS.psstring("H"),BWIPJS.psstring("I"),BWIPJS.psstring("J"),BWIPJS.psstring("K"),BWIPJS.psstring("L"),BWIPJS.psstring("M"),BWIPJS.psstring("N"),BWIPJS.psstring("O"),BWIPJS.psstring("P"),BWIPJS.psstring("Q"),BWIPJS.psstring("R"),BWIPJS.psstring("S"),BWIPJS.psstring("T"),BWIPJS.psstring("U"),BWIPJS.psstring("V"),BWIPJS.psstring("W"),BWIPJS.psstring("X"),BWIPJS.psstring("Y"),BWIPJS.psstring("Z"),BWIPJS.psstring("%K"),BWIPJS.psstring("%L"),BWIPJS.psstring("%M"),BWIPJS.psstring("%N"),BWIPJS.psstring("%O"),BWIPJS.psstring("%W"),BWIPJS.psstring("+A"),BWIPJS.psstring("+B"),BWIPJS.psstring("+C"),BWIPJS.psstring("+D"),BWIPJS.psstring("+E"),BWIPJS.psstring("+F"),BWIPJS.psstring("+G"),BWIPJS.psstring("+H"),BWIPJS.psstring("+I"),BWIPJS.psstring("+J"),BWIPJS.psstring("+K"),BWIPJS.psstring("+L"),BWIPJS.psstring("+M"),BWIPJS.psstring("+N"),BWIPJS.psstring("+O"),BWIPJS.psstring("+P"),BWIPJS.psstring("+Q"),BWIPJS.psstring("+R"),BWIPJS.psstring("+S"),BWIPJS.psstring("+T"),BWIPJS.psstring("+U"),BWIPJS.psstring("+V"),BWIPJS.psstring("+W"),BWIPJS.psstring("+X"),BWIPJS.psstring("+Y"),BWIPJS.psstring("+Z"),BWIPJS.psstring("%P"),BWIPJS.psstring("%Q"),BWIPJS.psstring("%R"),BWIPJS.psstring("%S"),BWIPJS.psstring("%T")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="newcode";
	this.xget("barlen");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="newtext";
	this.xget("barlen");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("barlen");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f13;
	var t17=this.stk[--this.ptr];
	var t15=this.stk[--this.ptr];
	var t14=this.stk[--this.ptr];
	var t13=this.stk[--this.ptr];
	for (var t16=t13; t14<0 ? t16>=t15 : t16<=t15; t16+=t14) {
		this.stk[this.ptr++]=t16;
		if (t17.call(this)==-1) break;
	}
	this.stk[this.ptr++]="newcode";
	this.xget("newcode");
	this.stk[this.ptr++]=0;
	this.xget("j");
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="newtext";
	this.xget("newtext");
	this.stk[this.ptr++]=0;
	this.xget("j");
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("options");
	this.stk[this.ptr++]=BWIPJS.psstring("dontdraw");
	this.stk[this.ptr++]=true;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.stk[this.ptr++]="args";
	this.xget("newcode");
	this.xget("options");
	this.stk[this.ptr++]=this.get("code39");
	t=this.stk[--this.ptr];
	if (t instanceof Function) t.call(this); else this.eval(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("includetext");
	this.stk[this.ptr++]=$f15;
	var t23=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t23.call(this)==-1) return -1;
	}
	this.xget("args");
	this.stk[this.ptr++]=BWIPJS.psstring("opt");
	this.xget("options");
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.xget("args");
	this.xget("dontdraw");
	this.not();
	this.stk[this.ptr++]=this.get("renlinear");
	var t24=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t24.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("code39ext");
// END OF code39ext

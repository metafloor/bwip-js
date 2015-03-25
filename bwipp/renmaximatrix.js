// file: bwipp/renmaximatrix.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-03-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN renmaximatrix
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("renmaximatrix", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
BWIPJS.bwipp["renmaximatrix"]=function() {
	function $f0(){
		//#line 406: args {def} forall
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f1(){
		//#line 407: opt {def} forall
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		//#line 416: (<      >) 8 string copy dup 1 anycolor putinterval cvx exec {255 div} forall setrgbcolor
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	}
	function $f3(){
		//#line 416: (<      >) 8 string copy dup 1 anycolor putinterval cvx exec {255 div} forall setrgbcolor
		this.stk[this.ptr++]=BWIPJS.psstring("<      >");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		if (typeof(this.stk[this.ptr-1])=="number") {
			for (var n=this.stk[--this.ptr],t=this.ptr+n; this.ptr<t; this.ptr++) this.stk[this.ptr]=this.stk[this.ptr-n];
		} else if (this.stk[this.ptr-1] instanceof BWIPJS.psstring||this.stk[this.ptr-1] instanceof BWIPJS.psarray) {
			this.stk[this.ptr-1].assign(0,this.stk[this.ptr-2]);
			this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,this.stk[this.ptr-2].length);
			this.ptr--;
		} else {
			var src=this.stk[this.ptr-2]; var dst=this.stk[this.ptr-1];
			for (var i in src) dst[i]=src[i];
			this.stk[this.ptr-2]=dst;
			this.ptr--;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("anycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.stk[this.ptr++]=$f2;
		var t8=this.stk[--this.ptr];
		var t7=this.stk[--this.ptr];
		for (t6 in t7) {
			if (t7 instanceof BWIPJS.psstring || t7 instanceof BWIPJS.psarray) {
				if (t6.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t7.get(t6);
			} else {
				this.stk[this.ptr++]=t6;
				this.stk[this.ptr++]=t7[t6];
			}
			if (t8.call(this)==-1) break;
		}
		this.setrgb(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f4(){
		//#line 419: (<        >) 10 string copy dup 1 anycolor putinterval cvx exec {255 div} forall setcmykcolor
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	}
	function $f5(){
		//#line 419: (<        >) 10 string copy dup 1 anycolor putinterval cvx exec {255 div} forall setcmykcolor
		this.stk[this.ptr++]=BWIPJS.psstring("<        >");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		if (typeof(this.stk[this.ptr-1])=="number") {
			for (var n=this.stk[--this.ptr],t=this.ptr+n; this.ptr<t; this.ptr++) this.stk[this.ptr]=this.stk[this.ptr-n];
		} else if (this.stk[this.ptr-1] instanceof BWIPJS.psstring||this.stk[this.ptr-1] instanceof BWIPJS.psarray) {
			this.stk[this.ptr-1].assign(0,this.stk[this.ptr-2]);
			this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,this.stk[this.ptr-2].length);
			this.ptr--;
		} else {
			var src=this.stk[this.ptr-2]; var dst=this.stk[this.ptr-1];
			for (var i in src) dst[i]=src[i];
			this.stk[this.ptr-2]=dst;
			this.ptr--;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("anycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.stk[this.ptr++]=$f4;
		var t12=this.stk[--this.ptr];
		var t11=this.stk[--this.ptr];
		for (t10 in t11) {
			if (t11 instanceof BWIPJS.psstring || t11 instanceof BWIPJS.psarray) {
				if (t10.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t11.get(t10);
			} else {
				this.stk[this.ptr++]=t10;
				this.stk[this.ptr++]=t11[t10];
			}
			if (t12.call(this)==-1) break;
		}
		this.setcmyk(this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=4;
	}
	function $f6(){
		//#line 414: /anycolor exch def
		this.stk[this.ptr++]="anycolor";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 415: anycolor length 6 eq {
		var t=this.dstk.get("anycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=6;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f3;
		//#line 417: } if
		var t9=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t9.call(this)==-1) return -1;
		}
		//#line 418: anycolor length 8 eq {
		var t=this.dstk.get("anycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f5;
		//#line 420: } if
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
		}
	}
	function $f7(){
		//#line 430: backgroundcolor (unset) ne { gsave backgroundcolor setanycolor fill grestore } if 
		this.gsave();
		var t=this.dstk.get("backgroundcolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setanycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.fill();
		this.grestore();
	}
	function $f8(){
		//#line 431: barcolor (unset) ne { barcolor setanycolor } if
		var t=this.dstk.get("barcolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setanycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f9(){
		//#line 440: y 2 mod 0 eq {x} {x 0.5 add} ifelse
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f10(){
		//#line 440: y 2 mod 0 eq {x} {x 0.5 add} ifelse
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f11(){
		//#line 437: dup 
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		//#line 438: /x exch 30 mod def 
		this.stk[this.ptr++]="x";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 439: /y exch 30 idiv def
		this.stk[this.ptr++]="y";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 440: y 2 mod 0 eq {x} {x 0.5 add} ifelse
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f9;
		this.stk[this.ptr++]=$f10;
		var t16=this.stk[--this.ptr];
		var t17=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t17.call(this)==-1) return -1;
		} else {
			if (t16.call(this)==-1) return -1;
		}
		//#line 441: 32 y sub 0.8661 mul
		this.stk[this.ptr++]=32;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0.8661;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		//#line 442: moveto
		var y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		//#line 443: 0     0.5774 rmoveto
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0.5774;
		var y=this.stk[--this.ptr];
		this.rmoveto(this.stk[--this.ptr],y);
		//#line 444: -0.5 -0.2887 rlineto
		this.stk[this.ptr++]=-0.5;
		this.stk[this.ptr++]=-0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		//#line 445: 0    -0.5774 rlineto
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=-0.5774;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		//#line 446: 0.5  -0.2887 rlineto
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr++]=-0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		//#line 447: 0.5   0.2887 rlineto
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr++]=0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		//#line 448: 0     0.5774 rlineto
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0.5774;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		//#line 449: -0.5  0.2887 rlineto
		this.stk[this.ptr++]=-0.5;
		this.stk[this.ptr++]=0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		//#line 450: closepath
		this.closepath();
	}
	//#line 397: 20 dict begin
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	//#line 399: /args exch def   % We are given some arguments
	this.stk[this.ptr++]="args";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 402: /barcolor (unset) def
	this.stk[this.ptr++]="barcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 403: /backgroundcolor (unset) def
	this.stk[this.ptr++]="backgroundcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 406: args {def} forall
	var t=this.dstk.get("args");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f0;
	var t2=this.stk[--this.ptr];
	var t1=this.stk[--this.ptr];
	for (t0 in t1) {
		if (t1 instanceof BWIPJS.psstring || t1 instanceof BWIPJS.psarray) {
			if (t0.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t1.get(t0);
		} else {
			this.stk[this.ptr++]=t0;
			this.stk[this.ptr++]=t1[t0];
		}
		if (t2.call(this)==-1) break;
	}
	//#line 407: opt {def} forall
	var t=this.dstk.get("opt");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f1;
	var t5=this.stk[--this.ptr];
	var t4=this.stk[--this.ptr];
	for (t3 in t4) {
		if (t4 instanceof BWIPJS.psstring || t4 instanceof BWIPJS.psarray) {
			if (t3.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t4.get(t3);
		} else {
			this.stk[this.ptr++]=t3;
			this.stk[this.ptr++]=t4[t3];
		}
		if (t5.call(this)==-1) break;
	}
	//#line 409: /barcolor barcolor cvlit def
	this.stk[this.ptr++]="barcolor";
	var t=this.dstk.get("barcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 410: /backgroundcolor backgroundcolor cvlit def
	this.stk[this.ptr++]="backgroundcolor";
	var t=this.dstk.get("backgroundcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 413: /setanycolor {
	this.stk[this.ptr++]="setanycolor";
	this.stk[this.ptr++]=$f6;
	//#line 421: } bind def
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 423: gsave
	this.gsave();
	//#line 425: currentpoint translate
	var t=this.currentpoint();
	this.stk[this.ptr++]=t.x;
	this.stk[this.ptr++]=t.y;
	var y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	//#line 427: 2.4945 dup scale  % from 1pt to 1.88mm
	this.stk[this.ptr++]=2.4945;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	var y=this.stk[--this.ptr];
	this.scale(this.stk[--this.ptr],y);
	//#line 429: 0 0 moveto 30 0 lineto 30 29 lineto 0 29 lineto closepath
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=0;
	var y=this.stk[--this.ptr];
	this.moveto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=0;
	var y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=29;
	var y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=29;
	var y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.closepath();
	//#line 430: backgroundcolor (unset) ne { gsave backgroundcolor setanycolor fill grestore } if 
	var t=this.dstk.get("backgroundcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f7;
	var t14=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t14.call(this)==-1) return -1;
	}
	//#line 431: barcolor (unset) ne { barcolor setanycolor } if
	var t=this.dstk.get("barcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f8;
	var t15=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t15.call(this)==-1) return -1;
	}
	//#line 433: 0.5 0.5774 translate
	this.stk[this.ptr++]=0.5;
	this.stk[this.ptr++]=0.5774;
	var y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	//#line 435: newpath
	this.newpath();
	//#line 436: pixs {
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f11;
	//#line 451: } forall
	var t20=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	for (t18 in t19) {
		if (t19 instanceof BWIPJS.psstring || t19 instanceof BWIPJS.psarray) {
			if (t18.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t19.get(t18);
		} else {
			this.stk[this.ptr++]=t18;
			this.stk[this.ptr++]=t19[t18];
		}
		if (t20.call(this)==-1) break;
	}
	//#line 452: fill
	this.fill();
	//#line 455: newpath 14 13.8576 0.5774 0 360 arc closepath
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=0.5774;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	//#line 456: 14 13.8576 1.3359 360 0 arcn closepath fill
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=1.3359;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	//#line 457: newpath 14 13.8576 2.1058 0 360 arc closepath
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=2.1058;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	//#line 458: 14 13.8576 2.8644 360 0 arcn closepath fill
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=2.8644;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	//#line 459: newpath 14 13.8576 3.6229 0 360 arc closepath
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=3.6229;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	//#line 460: 14 13.8576 4.3814 360 0 arcn closepath fill
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=4.3814;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	//#line 462: grestore
	this.grestore();
	//#line 464: end
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("renmaximatrix");
// END OF renmaximatrix

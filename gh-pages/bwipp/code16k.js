// file: bwipp/code16k.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-02-18
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2015 Terry Burton
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.
// BEGIN code16k
if (!BWIPJS.bwipp["raiseerror"]) BWIPJS.load("bwipp/raiseerror.js");
if (!BWIPJS.bwipp["renmatrix"]) BWIPJS.load("bwipp/renmatrix.js");
BWIPJS.bwipp["code16k"]=function() {
	this.dict["raiseerror"]=BWIPJS.bwipp["raiseerror"];
	this.dict["renmatrix"]=BWIPJS.bwipp["renmatrix"];
	function $f0(){
		//#line 10467: token false eq {exit} if dup length string cvs (=) search
		return -1;
	}
	function $f1(){
		//#line 10468: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		//#line 10468: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f3(){
		//#line 10467: token false eq {exit} if dup length string cvs (=) search
		var a=/^\s*([^\s]+)(\s+.*)?$/.exec(this.stk[this.ptr-1]);
		if (a) {
			this.stk[this.ptr-1]=BWIPJS.psstring(a[2]===undefined?"":a[2]);
			this.stk[this.ptr++]=BWIPJS.psstring(a[1]);
			this.stk[this.ptr++]=true;
		} else {
			this.stk[this.ptr-1]=false;
		}
		this.stk[this.ptr++]=false;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f0;
		var t0=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t0.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-2].toString();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("=");
		var h=this.stk[this.ptr-2];
		var t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		//#line 10468: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		this.stk[this.ptr++]=true;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
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
		//#line 10465: 1 dict begin
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]={};
		this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
		//#line 10466: options {
		var t=this.dstk.get("options");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f3;
		//#line 10469: } loop
		var t3=this.stk[--this.ptr];
		while (true) {
			if (t3.call(this)==-1) break;
		}
		//#line 10470: currentdict end /options exch def
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		//#line 10472: options {def} forall
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		//#line 10480: pos -1 ne {/rows 16 def} if
		this.stk[this.ptr++]="rows";
		this.stk[this.ptr++]=16;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		//#line 10489: dup msg exch j exch putinterval
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 10490: length j add 1 add /j exch def
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10491: pop
		this.ptr--;
		//#line 10492: dup 0 3 getinterval cvi msg exch j 1 sub exch put
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 10493: dup length 3 sub 3 exch getinterval
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f8(){
		//#line 10495: dup msg exch j exch putinterval
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 10496: length j add /j exch def
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10497: /barcode msg 0 j getinterval def
		this.stk[this.ptr++]="barcode";
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10498: exit
		return -1;
	}
	function $f9(){
		//#line 10488: (^) search {
		this.stk[this.ptr++]=BWIPJS.psstring("^");
		var h=this.stk[this.ptr-2];
		var t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		this.stk[this.ptr++]=$f7;
		//#line 10494: } {
		this.stk[this.ptr++]=$f8;
		//#line 10499: } ifelse 
		var t9=this.stk[--this.ptr];
		var t10=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t10.call(this)==-1) return -1;
		} else {
			if (t9.call(this)==-1) return -1;
		}
	}
	function $f10(){
		//#line 10484: /msg barcode length string def
		this.stk[this.ptr++]="msg";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10485: /j 0 def
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10486: barcode
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10487: { % loop
		this.stk[this.ptr++]=$f9;
		//#line 10500: } loop
		var t11=this.stk[--this.ptr];
		while (true) {
			if (t11.call(this)==-1) break;
		}
	}
	function $f11(){
		//#line 10560: encs j get dup type /stringtype eq {0 get} if  % convert string to ASCII if required
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
	}
	function $f12(){
		//#line 10559: /j exch def
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10560: encs j get dup type /stringtype eq {0 get} if  % convert string to ASCII if required
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="stringtype";
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f11;
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
		}
		//#line 10561: charvals j get exch i put 
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f13(){
		//#line 10556: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10557: /encs charmaps i get def
		this.stk[this.ptr++]="encs";
		var t=this.dstk.get("charmaps");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10558: 0 1 2 {
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f12;
		//#line 10562: } for
		var t18=this.stk[--this.ptr];
		var t16=this.stk[--this.ptr];
		var t15=this.stk[--this.ptr];
		var t14=this.stk[--this.ptr];
		for (var t17=t14; t15<0 ? t17>=t16 : t17<=t16; t17+=t15) {
			this.stk[this.ptr++]=t17;
			if (t18.call(this)==-1) break;
		}
	}
	function $f14(){
		//#line 10568: raw {/encoding (raw) def} if
		this.stk[this.ptr++]="encoding";
		this.stk[this.ptr++]=BWIPJS.psstring("raw");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f15(){
		//#line 10574: i barlen eq {exit} if
		return -1;
	}
	function $f16(){
		//#line 10574: i barlen eq {exit} if
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f15;
		var t25=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t25.call(this)==-1) return -1;
		}
		//#line 10575: /cw barcode i 1 add 3 getinterval cvi def
		this.stk[this.ptr++]="cw";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10576: cws j cw put
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 10577: /i i 4 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10578: /j j 1 add def
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f17(){
		//#line 10571: /cws barlen array def
		this.stk[this.ptr++]="cws";
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10572: /i 0 def /j 0 def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10573: { % loop
		this.stk[this.ptr++]=$f16;
		//#line 10579: } loop
		var t26=this.stk[--this.ptr];
		while (true) {
			if (t26.call(this)==-1) break;
		}
		//#line 10580: /cws cws 0 j getinterval def
		this.stk[this.ptr++]="cws";
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10581: /text () def
		this.stk[this.ptr++]="text";
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f18(){
		//#line 10594: i barlen eq {exit} if
		return -1;
	}
	function $f19(){
		//#line 10598: /char fncvals barcode i 1 add 4 getinterval get def
		this.stk[this.ptr++]="char";
		var t=this.dstk.get("fncvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10599: /i i 4 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f20(){
		//#line 10601: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f21(){
		//#line 10597: barcode i 1 add get 94 ne {
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=94;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f19;
		//#line 10600: } {
		this.stk[this.ptr++]=$f20;
		//#line 10602: } ifelse
		var t29=this.stk[--this.ptr];
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
		} else {
			if (t29.call(this)==-1) return -1;
		}
	}
	function $f22(){
		//#line 10594: i barlen eq {exit} if
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f18;
		var t28=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t28.call(this)==-1) return -1;
		}
		//#line 10595: /char barcode i get def
		this.stk[this.ptr++]="char";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10596: parsefnc char 94 eq and i barlen 4 sub lt and {
		var t=this.dstk.get("parsefnc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=94;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f21;
		//#line 10603: } if
		var t31=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t31.call(this)==-1) return -1;
		}
		//#line 10604: msg j char put
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 10605: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10606: /j j 1 add def
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f23(){
		//#line 10615: p msglen ge {exit} if
		return -1;
	}
	function $f24(){
		//#line 10617: dup setc exch known not {pop exit} if
		this.ptr--;
		return -1;
	}
	function $f25(){
		//#line 10620: s 2 mod 0 eq {/s s 1 add def} {exit} ifelse
		this.stk[this.ptr++]="s";
		var t=this.dstk.get("s");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f26(){
		//#line 10620: s 2 mod 0 eq {/s s 1 add def} {exit} ifelse
		return -1;
	}
	function $f27(){
		//#line 10620: s 2 mod 0 eq {/s s 1 add def} {exit} ifelse
		var t=this.dstk.get("s");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f25;
		this.stk[this.ptr++]=$f26;
		var t35=this.stk[--this.ptr];
		var t36=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t36.call(this)==-1) return -1;
		} else {
			if (t35.call(this)==-1) return -1;
		}
	}
	function $f28(){
		//#line 10615: p msglen ge {exit} if
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f23;
		var t33=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t33.call(this)==-1) return -1;
		}
		//#line 10616: msg p get
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		//#line 10617: dup setc exch known not {pop exit} if
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("setc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		this.stk[this.ptr++]=$f24;
		var t34=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t34.call(this)==-1) return -1;
		}
		//#line 10618: fn1 eq {
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f27;
		//#line 10621: } if
		var t37=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t37.call(this)==-1) return -1;
		}
		//#line 10622: /n n 1 add def
		this.stk[this.ptr++]="n";
		var t=this.dstk.get("n");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10623: /s s 1 add def
		this.stk[this.ptr++]="s";
		var t=this.dstk.get("s");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10624: /p p 1 add def
		this.stk[this.ptr++]="p";
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f29(){
		//#line 10613: /n 0 def /s 0 def
		this.stk[this.ptr++]="n";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="s";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10614: /p exch def {
		this.stk[this.ptr++]="p";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f28;
		//#line 10625: } loop
		var t38=this.stk[--this.ptr];
		while (true) {
			if (t38.call(this)==-1) break;
		}
		//#line 10626: n s
		var t=this.dstk.get("n");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("s");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f30(){
		//#line 10631: seta exch get cws exch j exch put
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 10632: /j j 1 add def
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f31(){
		//#line 10635: setb exch get cws exch j exch put
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 10636: /j j 1 add def
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f32(){
		//#line 10640: setc exch get
		var t=this.dstk.get("setc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
	}
	function $f33(){
		//#line 10642: aload pop 48 sub exch 48 sub 10 mul add
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f34(){
		//#line 10639: dup type /arraytype ne {
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="arraytype";
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f32;
		//#line 10641: } {
		this.stk[this.ptr++]=$f33;
		//#line 10643: } ifelse
		var t39=this.stk[--this.ptr];
		var t40=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t40.call(this)==-1) return -1;
		} else {
			if (t39.call(this)==-1) return -1;
		}
		//#line 10644: cws exch j exch put
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 10645: /j j 1 add def
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f35(){
		//#line 10649: /anotb {dup seta exch known exch setb exch known not and} bind def
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f36(){
		//#line 10650: /bnota {dup setb exch known exch seta exch known not and} bind def
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f37(){
		//#line 10653: /nextanotb [ msg length {0} repeat 9999 ] def
		this.stk[this.ptr++]=0;
	}
	function $f38(){
		//#line 10654: /nextbnota [ msg length {0} repeat 9999 ] def
		this.stk[this.ptr++]=0;
	}
	function $f39(){
		//#line 10658: nextanotb i 0 put
		var t=this.dstk.get("nextanotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f40(){
		//#line 10660: nextanotb i nextanotb i 1 add get 1 add put
		var t=this.dstk.get("nextanotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nextanotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f41(){
		//#line 10663: nextbnota i 0 put
		var t=this.dstk.get("nextbnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f42(){
		//#line 10665: nextbnota i nextbnota i 1 add get 1 add put
		var t=this.dstk.get("nextbnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nextbnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f43(){
		//#line 10656: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10657: msg i get anotb {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("anotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f39;
		//#line 10659: } {
		this.stk[this.ptr++]=$f40;
		//#line 10661: } ifelse
		var t47=this.stk[--this.ptr];
		var t48=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t48.call(this)==-1) return -1;
		} else {
			if (t47.call(this)==-1) return -1;
		}
		//#line 10662: msg i get bnota {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("bnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f41;
		//#line 10664: } {
		this.stk[this.ptr++]=$f42;
		//#line 10666: } ifelse
		var t49=this.stk[--this.ptr];
		var t50=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t50.call(this)==-1) return -1;
		} else {
			if (t49.call(this)==-1) return -1;
		}
	}
	function $f44(){
		//#line 10670: /abeforeb {dup nextanotb exch get exch nextbnota exch get lt} bind def
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("nextanotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("nextbnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
	}
	function $f45(){
		//#line 10671: /bbeforea {dup nextbnota exch get exch nextanotb exch get lt} bind def
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("nextbnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("nextanotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
	}
	function $f46(){
		//#line 10681: cws 0 pos 10 idiv 1 sub put
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 10682: cws 1 pos 10 mod 1 sub put 
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 10683: /j 2 def
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10684: /cset (setb) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10685: /mode 7 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=7;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10686: exit
		return -1;
	}
	function $f47(){
		//#line 10690: /cset (setb) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10691: /mode 1 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10692: exit
		return -1;
	}
	function $f48(){
		//#line 10697: /cset (setc) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10698: /mode 4 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=4;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10699: /i 1 def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10700: exit
		return -1;
	}
	function $f49(){
		//#line 10696: msg 0 get fn1 eq 1 numsscr exch pop 2 ge and {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f48;
		//#line 10701: } if
		var t58=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t58.call(this)==-1) return -1;
		}
	}
	function $f50(){
		//#line 10705: /cset (setb) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10706: /mode 3 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10707: /i 1 def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10708: exit
		return -1;
	}
	function $f51(){
		//#line 10713: /cset (setc) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10714: /mode 2 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10715: exit
		return -1;
	}
	function $f52(){
		//#line 10719: msg 0 get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10720: /cset (setc) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10721: /mode 5 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=5;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10722: /i 1 def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10723: exit
		return -1;
	}
	function $f53(){
		//#line 10728: msg 0 get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10729: /cset (setc) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10730: /mode 5 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=5;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10731: /i 1 def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10732: exit
		return -1;
	}
	function $f54(){
		//#line 10737: msg 0 get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10738: msg 1 get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10739: /cset (setc) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10740: /mode 6 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=6;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10741: /i 2 def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10742: exit
		return -1;
	}
	function $f55(){
		//#line 10748: msg 0 get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10749: msg 1 get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10750: /cset (setc) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10751: /mode 6 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=6;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10752: /i 2 def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10753: exit
		return -1;
	}
	function $f56(){
		//#line 10712: 0 numsscr exch pop dup 2 ge exch 2 mod 0 eq and {
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f51;
		//#line 10716: } if
		var t61=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t61.call(this)==-1) return -1;
		}
		//#line 10718: 0 numsscr exch pop dup 3 ge exch 2 mod 1 eq and {
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f52;
		//#line 10724: } if
		var t62=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t62.call(this)==-1) return -1;
		}
		//#line 10726: setb msg 0 get known
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		//#line 10727: 1 numsscr exch pop dup 2 ge exch 2 mod 0 eq and and {
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f53;
		//#line 10733: } if
		var t63=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t63.call(this)==-1) return -1;
		}
		//#line 10735: setb msg 0 get known
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		//#line 10736: 1 numsscr exch pop dup 3 ge exch 2 mod 1 eq and and {
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f54;
		//#line 10743: } if
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		}
		//#line 10745: setb msg 0 get known
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		//#line 10746: setb msg 1 get known and
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		//#line 10747: 2 numsscr exch pop dup 2 ge exch 2 mod 0 eq and and {
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f55;
		//#line 10754: } if
		var t65=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t65.call(this)==-1) return -1;
		}
	}
	function $f57(){
		//#line 10758: /cset (seta) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10759: /mode 0 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10760: exit
		return -1;
	}
	function $f58(){
		//#line 10679: pos -1 ne {
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=-1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f46;
		//#line 10687: } if
		var t56=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t56.call(this)==-1) return -1;
		}
		//#line 10689: msglen 0 eq {
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f47;
		//#line 10693: } if
		var t57=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t57.call(this)==-1) return -1;
		}
		//#line 10695: msglen 2 ge {
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f49;
		//#line 10702: } if
		var t59=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t59.call(this)==-1) return -1;
		}
		//#line 10704: msg 0 get fn1 eq {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f50;
		//#line 10709: } if
		var t60=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t60.call(this)==-1) return -1;
		}
		//#line 10710: msglen 2 ge {
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f56;
		//#line 10755: } if
		var t66=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t66.call(this)==-1) return -1;
		}
		//#line 10757: 0 abeforeb {
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("abeforeb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f57;
		//#line 10761: } if
		var t67=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t67.call(this)==-1) return -1;
		}
		//#line 10763: /cset (setb) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10764: /mode 1 def
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10765: exit
		return -1;
	}
	function $f59(){
		//#line 10769: i msglen eq {exit} if
		return -1;
	}
	function $f60(){
		//#line 10780: sb1 enca
		var t=this.dstk.get("sb1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10781: msg i get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10782: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10783: exit
		return -1;
	}
	function $f61(){
		//#line 10778: msg i get bnota
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("bnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10779: i 1 add abeforeb and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("abeforeb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f60;
		//#line 10784: } if
		var t70=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t70.call(this)==-1) return -1;
		}
	}
	function $f62(){
		//#line 10791: sb2 enca
		var t=this.dstk.get("sb2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10792: msg i get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10793: msg i 1 add get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10794: /i i 2 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10795: exit
		return -1;
	}
	function $f63(){
		//#line 10788: msg i get bnota
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("bnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10789: msg i 1 add get bnota and
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("bnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		//#line 10790: i 2 add abeforeb and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("abeforeb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f62;
		//#line 10796: } if
		var t72=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t72.call(this)==-1) return -1;
		}
	}
	function $f64(){
		//#line 10800: swb enca
		var t=this.dstk.get("swb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10801: /cset (setb) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10802: exit
		return -1;
	}
	function $f65(){
		//#line 10811: fn1 encc
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10812: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f66(){
		//#line 10814: msg i 2 getinterval encc
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10815: /i i 2 add def 
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f67(){
		//#line 10810: msg i get fn1 eq {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f65;
		//#line 10813: } {
		this.stk[this.ptr++]=$f66;
		//#line 10816: } ifelse
		var t75=this.stk[--this.ptr];
		var t76=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t76.call(this)==-1) return -1;
		} else {
			if (t75.call(this)==-1) return -1;
		}
	}
	function $f68(){
		//#line 10808: sc2 enca
		var t=this.dstk.get("sc2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10809: 2 {
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f67;
		//#line 10817: } repeat
		var t79=this.stk[--this.ptr];
		var t77=this.stk[--this.ptr];
		for (var t78=0; t78<t77; t78++) {
			if (t79.call(this)==-1) break;
		}
		//#line 10818: exit
		return -1;
	}
	function $f69(){
		//#line 10806: nums 4 eq 
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		//#line 10807: seta msg i 4 add get known and {
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f68;
		//#line 10819: } if
		var t80=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t80.call(this)==-1) return -1;
		}
	}
	function $f70(){
		//#line 10828: fn1 encc
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10829: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f71(){
		//#line 10831: msg i 2 getinterval encc
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10832: /i i 2 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f72(){
		//#line 10827: msg i get fn1 eq {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f70;
		//#line 10830: } {
		this.stk[this.ptr++]=$f71;
		//#line 10833: } ifelse
		var t82=this.stk[--this.ptr];
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		} else {
			if (t82.call(this)==-1) return -1;
		}
	}
	function $f73(){
		//#line 10825: sc3 enca
		var t=this.dstk.get("sc3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10826: 3 {
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f72;
		//#line 10834: } repeat
		var t86=this.stk[--this.ptr];
		var t84=this.stk[--this.ptr];
		for (var t85=0; t85<t84; t85++) {
			if (t86.call(this)==-1) break;
		}
		//#line 10835: exit
		return -1;
	}
	function $f74(){
		//#line 10823: nums 6 eq 
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		//#line 10824: seta msg i 6 add get known and {
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f73;
		//#line 10836: } if
		var t87=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t87.call(this)==-1) return -1;
		}
	}
	function $f75(){
		//#line 10840: swc enca
		var t=this.dstk.get("swc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10841: /cset (setc) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10842: exit
		return -1;
	}
	function $f76(){
		//#line 10777: i msglen 1 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f61;
		//#line 10785: } if
		var t71=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t71.call(this)==-1) return -1;
		}
		//#line 10787: i msglen 2 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f63;
		//#line 10797: } if
		var t73=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t73.call(this)==-1) return -1;
		}
		//#line 10799: msg i get bnota {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("bnota");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f64;
		//#line 10803: } if
		var t74=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t74.call(this)==-1) return -1;
		}
		//#line 10805: i msglen 4 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f69;
		//#line 10820: } if
		var t81=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t81.call(this)==-1) return -1;
		}
		//#line 10822: i msglen 6 sub lt { 
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f74;
		//#line 10837: } if
		var t88=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t88.call(this)==-1) return -1;
		}
		//#line 10839: nums 4 ge nums 2 mod 0 eq and {
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f75;
		//#line 10843: } if
		var t89=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t89.call(this)==-1) return -1;
		}
		//#line 10845: msg i get enca
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10846: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10847: exit
		return -1;
	}
	function $f77(){
		//#line 10854: sa1 encb
		var t=this.dstk.get("sa1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10855: msg i get enca
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10856: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10857: exit
		return -1;
	}
	function $f78(){
		//#line 10852: msg i get anotb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("anotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10853: i 1 add bbeforea and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("bbeforea");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f77;
		//#line 10858: } if
		var t91=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t91.call(this)==-1) return -1;
		}
	}
	function $f79(){
		//#line 10865: sa2 encb
		var t=this.dstk.get("sa2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10866: msg i get enca
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10867: msg i 1 add get enca
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("enca");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10868: /i i 2 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10869: exit
		return -1;
	}
	function $f80(){
		//#line 10862: msg i get anotb 
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("anotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10863: msg i 1 add get anotb and
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("anotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		//#line 10864: i 2 add bbeforea and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("bbeforea");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f79;
		//#line 10870: } if
		var t93=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t93.call(this)==-1) return -1;
		}
	}
	function $f81(){
		//#line 10874: swa encb
		var t=this.dstk.get("swa");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10875: /cset (seta) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10876: exit
		return -1;
	}
	function $f82(){
		//#line 10885: fn1 encc
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10886: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f83(){
		//#line 10888: msg i 2 getinterval encc
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10889: /i i 2 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f84(){
		//#line 10884: msg i get fn1 eq {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f82;
		//#line 10887: } {
		this.stk[this.ptr++]=$f83;
		//#line 10890: } ifelse
		var t96=this.stk[--this.ptr];
		var t97=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t97.call(this)==-1) return -1;
		} else {
			if (t96.call(this)==-1) return -1;
		}
	}
	function $f85(){
		//#line 10882: sc2 encb
		var t=this.dstk.get("sc2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10883: 2 {
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f84;
		//#line 10891: } repeat
		var t100=this.stk[--this.ptr];
		var t98=this.stk[--this.ptr];
		for (var t99=0; t99<t98; t99++) {
			if (t100.call(this)==-1) break;
		}
		//#line 10892: exit
		return -1;
	}
	function $f86(){
		//#line 10880: nums 4 eq
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		//#line 10881: setb msg i 4 add get known and {
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f85;
		//#line 10893: } if
		var t101=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t101.call(this)==-1) return -1;
		}
	}
	function $f87(){
		//#line 10902: fn1 encc
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10903: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f88(){
		//#line 10905: msg i 2 getinterval encc
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10906: /i i 2 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f89(){
		//#line 10901: msg i get fn1 eq {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f87;
		//#line 10904: } {
		this.stk[this.ptr++]=$f88;
		//#line 10907: } ifelse
		var t103=this.stk[--this.ptr];
		var t104=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t104.call(this)==-1) return -1;
		} else {
			if (t103.call(this)==-1) return -1;
		}
	}
	function $f90(){
		//#line 10899: sc3 encb
		var t=this.dstk.get("sc3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10900: 3 {
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f89;
		//#line 10908: } repeat
		var t107=this.stk[--this.ptr];
		var t105=this.stk[--this.ptr];
		for (var t106=0; t106<t105; t106++) {
			if (t107.call(this)==-1) break;
		}
		//#line 10909: exit
		return -1;
	}
	function $f91(){
		//#line 10897: nums 6 eq
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		//#line 10898: setb msg i 6 add get known and {
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f90;
		//#line 10910: } if
		var t108=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t108.call(this)==-1) return -1;
		}
	}
	function $f92(){
		//#line 10914: swc encb
		var t=this.dstk.get("swc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10915: /cset (setc) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10916: exit
		return -1;
	}
	function $f93(){
		//#line 10851: i msglen 1 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f78;
		//#line 10859: } if
		var t92=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t92.call(this)==-1) return -1;
		}
		//#line 10861: i msglen 2 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f80;
		//#line 10871: } if
		var t94=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t94.call(this)==-1) return -1;
		}
		//#line 10873: msg i get anotb {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("anotb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f81;
		//#line 10877: } if
		var t95=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t95.call(this)==-1) return -1;
		}
		//#line 10879: i msglen 4 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f86;
		//#line 10894: } if
		var t102=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t102.call(this)==-1) return -1;
		}
		//#line 10896: i msglen 6 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f91;
		//#line 10911: } if
		var t109=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t109.call(this)==-1) return -1;
		}
		//#line 10913: nums 4 ge nums 2 mod 0 eq and {
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f92;
		//#line 10917: } if
		var t110=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t110.call(this)==-1) return -1;
		}
		//#line 10919: msg i get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10920: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10921: exit 
		return -1;
	}
	function $f94(){
		//#line 10927: fn1 encc
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10928: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f95(){
		//#line 10930: msg i 2 getinterval encc
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10931: /i i 2 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f96(){
		//#line 10926: msg i get fn1 eq {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f94;
		//#line 10929: } {
		this.stk[this.ptr++]=$f95;
		//#line 10932: } ifelse
		var t112=this.stk[--this.ptr];
		var t113=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t113.call(this)==-1) return -1;
		} else {
			if (t112.call(this)==-1) return -1;
		}
		//#line 10933: exit
		return -1;
	}
	function $f97(){
		//#line 10939: sb1 encc
		var t=this.dstk.get("sb1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10940: msg i get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10941: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10942: exit
		return -1;
	}
	function $f98(){
		//#line 10937: setb msg i get known
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		//#line 10938: i 1 add numsscr exch pop dup 2 ge exch 2 mod 0 eq and and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f97;
		//#line 10943: } if
		var t115=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t115.call(this)==-1) return -1;
		}
	}
	function $f99(){
		//#line 10949: sb2 encc
		var t=this.dstk.get("sb2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10950: msg i get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10951: msg i 1 add get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10952: /i i 2 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10953: exit
		return -1;
	}
	function $f100(){
		//#line 10947: setb msg i get known
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		//#line 10948: i 1 add numsscr exch pop dup 3 ge exch 2 mod 1 eq and and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f99;
		//#line 10954: } if
		var t117=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t117.call(this)==-1) return -1;
		}
	}
	function $f101(){
		//#line 10961: sb2 encc
		var t=this.dstk.get("sb2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10962: msg i get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10963: msg i 1 add get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10964: /i i 2 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10965: exit
		return -1;
	}
	function $f102(){
		//#line 10958: setb msg i get known
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		//#line 10959: setb msg i 1 add get known and
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		//#line 10960: i 2 add numsscr exch pop dup 2 ge exch 2 mod 0 eq and and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f101;
		//#line 10966: } if
		var t119=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t119.call(this)==-1) return -1;
		}
	}
	function $f103(){
		//#line 10973: sb3 encc
		var t=this.dstk.get("sb3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10974: msg i get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10975: msg i 1 add get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10976: msg i 2 add get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10977: /i i 3 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10978: exit
		return -1;
	}
	function $f104(){
		//#line 10970: setb msg i get known
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		//#line 10971: setb msg i 1 add get known and
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		//#line 10972: i 2 add numsscr exch pop dup 3 ge exch 2 mod 1 eq and and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f103;
		//#line 10979: } if
		var t121=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t121.call(this)==-1) return -1;
		}
	}
	function $f105(){
		//#line 10987: sb3 encc
		var t=this.dstk.get("sb3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10988: msg i get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10989: msg i 1 add get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10990: msg i 2 add get encb
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10991: /i i 3 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10992: exit 
		return -1;
	}
	function $f106(){
		//#line 10983: setb msg i get known 
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		//#line 10984: setb msg i 1 add get known and
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		//#line 10985: setb msg i 2 add get known and
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		//#line 10986: i 3 add numsscr exch pop dup 2 ge exch 2 mod 0 eq and and {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f105;
		//#line 10993: } if
		var t123=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t123.call(this)==-1) return -1;
		}
	}
	function $f107(){
		//#line 10997: swa encc
		var t=this.dstk.get("swa");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10998: /cset (seta) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10999: exit
		return -1;
	}
	function $f108(){
		//#line 10925: nums 2 ge {
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f96;
		//#line 10934: } if
		var t114=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t114.call(this)==-1) return -1;
		}
		//#line 10936: i msglen 1 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f98;
		//#line 10944: } if
		var t116=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t116.call(this)==-1) return -1;
		}
		//#line 10946: i msglen 1 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f100;
		//#line 10955: } if
		var t118=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t118.call(this)==-1) return -1;
		}
		//#line 10957: i msglen 2 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f102;
		//#line 10967: } if
		var t120=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t120.call(this)==-1) return -1;
		}
		//#line 10969: i msglen 3 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f104;
		//#line 10980: } if
		var t122=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t122.call(this)==-1) return -1;
		}
		//#line 10982: i msglen 3 sub lt {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f106;
		//#line 10994: } if
		var t124=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t124.call(this)==-1) return -1;
		}
		//#line 10996: i abeforeb {
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("abeforeb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f107;
		//#line 11000: } if
		var t125=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t125.call(this)==-1) return -1;
		}
		//#line 11002: swb encc
		var t=this.dstk.get("swb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 11003: /cset (setb) def
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 11004: exit
		return -1;
	}
	function $f109(){
		//#line 10775: cset (seta) eq {
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f76;
		//#line 10848: } if
		var t90=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t90.call(this)==-1) return -1;
		}
		//#line 10849: cset (setb) eq {
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f93;
		//#line 10922: } if
		var t111=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t111.call(this)==-1) return -1;
		}
		//#line 10923: cset (setc) eq {
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f108;
		//#line 11005: } if
		var t126=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t126.call(this)==-1) return -1;
		}
		//#line 11006: exit
		return -1;
	}
	function $f110(){
		//#line 10769: i msglen eq {exit} if
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f59;
		var t69=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t69.call(this)==-1) return -1;
		}
		//#line 10771: i numsscr /nums exch def /nchars exch def
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numsscr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="nums";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nchars";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10774: {  % common exit
		this.stk[this.ptr++]=$f109;
		//#line 11007: } loop
		var t127=this.stk[--this.ptr];
		while (true) {
			if (t127.call(this)==-1) break;
		}
	}
	function $f111(){
		//#line 10586: /fncvals <<
		this.stk[this.ptr++]="fncvals";
		this.stk[this.ptr++]=Infinity;
		//#line 10587: (FNC1) fn1
		this.stk[this.ptr++]=BWIPJS.psstring("FNC1");
		var t=this.dstk.get("fn1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10588: (FNC2) fn2
		this.stk[this.ptr++]=BWIPJS.psstring("FNC2");
		var t=this.dstk.get("fn2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10589: (FNC3) fn3
		this.stk[this.ptr++]=BWIPJS.psstring("FNC3");
		var t=this.dstk.get("fn3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10590: (FNC4) fn4
		this.stk[this.ptr++]=BWIPJS.psstring("FNC4");
		var t=this.dstk.get("fn4");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 10591: >> def
		var t = {};
		for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
			if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
			t[this.stk[i-1]]=this.stk[i];
		}
		if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
		this.ptr = i;
		this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10592: /msg barlen array def
		this.stk[this.ptr++]="msg";
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10593: /i 0 def /j 0 def {
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f22;
		//#line 10607: } loop
		var t32=this.stk[--this.ptr];
		while (true) {
			if (t32.call(this)==-1) break;
		}
		//#line 10608: /msg msg 0 j getinterval def
		this.stk[this.ptr++]="msg";
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10609: /msglen msg length def
		this.stk[this.ptr++]="msglen";
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10612: /numsscr {
		this.stk[this.ptr++]="numsscr";
		this.stk[this.ptr++]=$f29;
		//#line 10627: } bind def
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10630: /enca {
		this.stk[this.ptr++]="enca";
		this.stk[this.ptr++]=$f30;
		//#line 10633: } bind def
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10634: /encb {
		this.stk[this.ptr++]="encb";
		this.stk[this.ptr++]=$f31;
		//#line 10637: } bind def
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10638: /encc {
		this.stk[this.ptr++]="encc";
		this.stk[this.ptr++]=$f34;
		//#line 10646: } bind def
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10649: /anotb {dup seta exch known exch setb exch known not and} bind def
		this.stk[this.ptr++]="anotb";
		this.stk[this.ptr++]=$f35;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10650: /bnota {dup setb exch known exch seta exch known not and} bind def
		this.stk[this.ptr++]="bnota";
		this.stk[this.ptr++]=$f36;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10653: /nextanotb [ msg length {0} repeat 9999 ] def
		this.stk[this.ptr++]="nextanotb";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=$f37;
		var t43=this.stk[--this.ptr];
		var t41=this.stk[--this.ptr];
		for (var t42=0; t42<t41; t42++) {
			if (t43.call(this)==-1) break;
		}
		this.stk[this.ptr++]=9999;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10654: /nextbnota [ msg length {0} repeat 9999 ] def
		this.stk[this.ptr++]="nextbnota";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=$f38;
		var t46=this.stk[--this.ptr];
		var t44=this.stk[--this.ptr];
		for (var t45=0; t45<t44; t45++) {
			if (t46.call(this)==-1) break;
		}
		this.stk[this.ptr++]=9999;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10655: msg length 1 sub -1 0 {
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f43;
		//#line 10667: } for
		var t55=this.stk[--this.ptr];
		var t53=this.stk[--this.ptr];
		var t52=this.stk[--this.ptr];
		var t51=this.stk[--this.ptr];
		for (var t54=t51; t52<0 ? t54>=t53 : t54<=t53; t54+=t52) {
			this.stk[this.ptr++]=t54;
			if (t55.call(this)==-1) break;
		}
		//#line 10670: /abeforeb {dup nextanotb exch get exch nextbnota exch get lt} bind def
		this.stk[this.ptr++]="abeforeb";
		this.stk[this.ptr++]=$f44;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10671: /bbeforea {dup nextbnota exch get exch nextanotb exch get lt} bind def
		this.stk[this.ptr++]="bbeforea";
		this.stk[this.ptr++]=$f45;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10673: /cws barcode length 2 mul 3 add array def
		this.stk[this.ptr++]="cws";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10676: /i 0 def /j 0 def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 10677: {  % common exit
		this.stk[this.ptr++]=$f58;
		//#line 10766: } loop
		var t68=this.stk[--this.ptr];
		while (true) {
			if (t68.call(this)==-1) break;
		}
		//#line 10768: {  % Encode remainder
		this.stk[this.ptr++]=$f110;
		//#line 11009: } loop
		var t128=this.stk[--this.ptr];
		while (true) {
			if (t128.call(this)==-1) break;
		}
		//#line 11010: /cws cws 0 j getinterval def
		this.stk[this.ptr++]="cws";
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f112(){
		//#line 11041: urows 0 ne urows r ne and {/okay false def} if
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f113(){
		//#line 11042: cws length dcws gt {/okay false def} if
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f114(){
		//#line 11043: okay {exit} if
		return -1;
	}
	function $f115(){
		//#line 11037: /m metrics i get def
		this.stk[this.ptr++]="m";
		var t=this.dstk.get("metrics");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 11038: /r    m 0 get def        % Columns in symbol
		this.stk[this.ptr++]="r";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 11039: /dcws m 1 get def        % Data codewords in symbol
		this.stk[this.ptr++]="dcws";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 11040: /okay true def
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 11041: urows 0 ne urows r ne and {/okay false def} if
		var t=this.dstk.get("urows");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("urows");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("r");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f112;
		var t130=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t130.call(this)==-1) return -1;
		}
		//#line 11042: cws length dcws gt {/okay false def} if
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("dcws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f113;
		var t131=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t131.call(this)==-1) return -1;
		}
		//#line 11043: okay {exit} if
		var t=this.dstk.get("okay");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f114;
		var t132=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t132.call(this)==-1) return -1;
		}
		//#line 11044: /i i 1 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f116(){
		//#line 11048: /cws [ cws aload pop dcws cws length sub {103} repeat ] def
		this.stk[this.ptr++]=103;
	}
	function $f117(){
		//#line 11054: 0 0 1 dcws {dup 2 add exch cws exch get mul add} for 
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f118(){
		//#line 11056: 0 0 1 dcws {dup 1 add exch cws exch get mul add} for 
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f119(){
		//#line 11094: /stopencs stopencsodd def
		this.stk[this.ptr++]="stopencs";
		var t=this.dstk.get("stopencsodd");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f120(){
		//#line 11096: /stopencs stopencseven def
		this.stk[this.ptr++]="stopencs";
		var t=this.dstk.get("stopencseven");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f121(){
		//#line 11105: startencs i get {48 sub} forall
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f122(){
		//#line 11108: encs exch get {48 sub} forall
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f123(){
		//#line 11108: encs exch get {48 sub} forall
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f122;
		var t154=this.stk[--this.ptr];
		var t153=this.stk[--this.ptr];
		for (t152 in t153) {
			if (t153 instanceof BWIPJS.psstring || t153 instanceof BWIPJS.psarray) {
				if (t152.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t153.get(t152);
			} else {
				this.stk[this.ptr++]=t152;
				this.stk[this.ptr++]=t153[t152];
			}
			if (t154.call(this)==-1) break;
		}
	}
	function $f124(){
		//#line 11110: stopencs i get {48 sub} forall
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f125(){
		//#line 11114: 1 sbs {1 index 0 eq {{1}} {{0}} ifelse repeat} forall
		this.stk[this.ptr++]=1;
	}
	function $f126(){
		//#line 11114: 1 sbs {1 index 0 eq {{1}} {{0}} ifelse repeat} forall
		this.stk[this.ptr++]=$f125;
	}
	function $f127(){
		//#line 11114: 1 sbs {1 index 0 eq {{1}} {{0}} ifelse repeat} forall
		this.stk[this.ptr++]=0;
	}
	function $f128(){
		//#line 11114: 1 sbs {1 index 0 eq {{1}} {{0}} ifelse repeat} forall
		this.stk[this.ptr++]=$f127;
	}
	function $f129(){
		//#line 11114: 1 sbs {1 index 0 eq {{1}} {{0}} ifelse repeat} forall
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f126;
		this.stk[this.ptr++]=$f128;
		var t161=this.stk[--this.ptr];
		var t162=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t162.call(this)==-1) return -1;
		} else {
			if (t161.call(this)==-1) return -1;
		}
		var t165=this.stk[--this.ptr];
		var t163=this.stk[--this.ptr];
		for (var t164=0; t164<t163; t164++) {
			if (t165.call(this)==-1) break;
		}
	}
	function $f130(){
		//#line 11102: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 11103: /sbs [
		this.stk[this.ptr++]="sbs";
		this.stk[this.ptr++]=Infinity;
		//#line 11104: 10
		this.stk[this.ptr++]=10;
		//#line 11105: startencs i get {48 sub} forall
		var t=this.dstk.get("startencs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f121;
		var t151=this.stk[--this.ptr];
		var t150=this.stk[--this.ptr];
		for (t149 in t150) {
			if (t150 instanceof BWIPJS.psstring || t150 instanceof BWIPJS.psarray) {
				if (t149.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t150.get(t149);
			} else {
				this.stk[this.ptr++]=t149;
				this.stk[this.ptr++]=t150[t149];
			}
			if (t151.call(this)==-1) break;
		}
		//#line 11106: 1
		this.stk[this.ptr++]=1;
		//#line 11107: cws i 5 mul 5 getinterval {
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f123;
		//#line 11109: } forall 
		var t157=this.stk[--this.ptr];
		var t156=this.stk[--this.ptr];
		for (t155 in t156) {
			if (t156 instanceof BWIPJS.psstring || t156 instanceof BWIPJS.psarray) {
				if (t155.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t156.get(t155);
			} else {
				this.stk[this.ptr++]=t155;
				this.stk[this.ptr++]=t156[t155];
			}
			if (t157.call(this)==-1) break;
		}
		//#line 11110: stopencs i get {48 sub} forall
		var t=this.dstk.get("stopencs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f124;
		var t160=this.stk[--this.ptr];
		var t159=this.stk[--this.ptr];
		for (t158 in t159) {
			if (t159 instanceof BWIPJS.psstring || t159 instanceof BWIPJS.psarray) {
				if (t158.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t159.get(t158);
			} else {
				this.stk[this.ptr++]=t158;
				this.stk[this.ptr++]=t159[t158];
			}
			if (t160.call(this)==-1) break;
		}
		//#line 11111: 1
		this.stk[this.ptr++]=1;
		//#line 11112: ] def
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 11113: mark
		this.stk[this.ptr++]=Infinity;
		//#line 11114: 1 sbs {1 index 0 eq {{1}} {{0}} ifelse repeat} forall
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f129;
		var t168=this.stk[--this.ptr];
		var t167=this.stk[--this.ptr];
		for (t166 in t167) {
			if (t167 instanceof BWIPJS.psstring || t167 instanceof BWIPJS.psarray) {
				if (t166.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t167.get(t166);
			} else {
				this.stk[this.ptr++]=t166;
				this.stk[this.ptr++]=t167[t166];
			}
			if (t168.call(this)==-1) break;
		}
		//#line 11115: counttomark 1 sub array astore exch pop exch pop
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		if (i==-1) throw "counttomark: underflow";
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		//#line 11116: rowbits i 3 -1 roll put
		var t=this.dstk.get("rowbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f131(){
		//#line 11121: 81 sepheight mul {1} repeat
		this.stk[this.ptr++]=1;
	}
	function $f132(){
		//#line 11124: rowheight {rowbits i get aload pop} repeat
		var t=this.dstk.get("rowbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f133(){
		//#line 11125: sepheight {10 {0} repeat 70 {1} repeat 0} repeat
		this.stk[this.ptr++]=0;
	}
	function $f134(){
		//#line 11125: sepheight {10 {0} repeat 70 {1} repeat 0} repeat
		this.stk[this.ptr++]=1;
	}
	function $f135(){
		//#line 11125: sepheight {10 {0} repeat 70 {1} repeat 0} repeat
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=$f133;
		var t182=this.stk[--this.ptr];
		var t180=this.stk[--this.ptr];
		for (var t181=0; t181<t180; t181++) {
			if (t182.call(this)==-1) break;
		}
		this.stk[this.ptr++]=70;
		this.stk[this.ptr++]=$f134;
		var t185=this.stk[--this.ptr];
		var t183=this.stk[--this.ptr];
		for (var t184=0; t184<t183; t184++) {
			if (t185.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
	}
	function $f136(){
		//#line 11123: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 11124: rowheight {rowbits i get aload pop} repeat
		var t=this.dstk.get("rowheight");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f132;
		var t179=this.stk[--this.ptr];
		var t177=this.stk[--this.ptr];
		for (var t178=0; t178<t177; t178++) {
			if (t179.call(this)==-1) break;
		}
		//#line 11125: sepheight {10 {0} repeat 70 {1} repeat 0} repeat
		var t=this.dstk.get("sepheight");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f135;
		var t188=this.stk[--this.ptr];
		var t186=this.stk[--this.ptr];
		for (var t187=0; t187<t186; t187++) {
			if (t188.call(this)==-1) break;
		}
	}
	function $f137(){
		//#line 11127: rowheight {rowbits r 1 sub get aload pop} repeat
		var t=this.dstk.get("rowbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("r");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f138(){
		//#line 11128: 81 sepheight mul {1} repeat
		this.stk[this.ptr++]=1;
	}
	//#line 10447: 20 dict begin
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	//#line 10449: /options exch def
	this.stk[this.ptr++]="options";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10450: /barcode exch def
	this.stk[this.ptr++]="barcode";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10452: /dontdraw false def
	this.stk[this.ptr++]="dontdraw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10453: /mode -1 def
	this.stk[this.ptr++]="mode";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10454: /pos -1 def
	this.stk[this.ptr++]="pos";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10455: /rows 0 def
	this.stk[this.ptr++]="rows";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10456: /rowheight 8 def
	this.stk[this.ptr++]="rowheight";
	this.stk[this.ptr++]=8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10457: /sepheight 1 def
	this.stk[this.ptr++]="sepheight";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10458: /encoding (auto) def
	this.stk[this.ptr++]="encoding";
	this.stk[this.ptr++]=BWIPJS.psstring("auto");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10459: /raw false def
	this.stk[this.ptr++]="raw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10460: /parse false def
	this.stk[this.ptr++]="parse";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10461: /parsefnc false def
	this.stk[this.ptr++]="parsefnc";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10464: options type /stringtype eq {
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype";
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f4;
	//#line 10471: } if
	var t4=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t4.call(this)==-1) return -1;
	}
	//#line 10472: options {def} forall
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f5;
	var t7=this.stk[--this.ptr];
	var t6=this.stk[--this.ptr];
	for (t5 in t6) {
		if (t6 instanceof BWIPJS.psstring || t6 instanceof BWIPJS.psarray) {
			if (t5.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t6.get(t5);
		} else {
			this.stk[this.ptr++]=t5;
			this.stk[this.ptr++]=t6[t5];
		}
		if (t7.call(this)==-1) break;
	}
	//#line 10474: /mode mode cvi def
	this.stk[this.ptr++]="mode";
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10475: /pos pos cvi def
	this.stk[this.ptr++]="pos";
	var t=this.dstk.get("pos");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10476: /rows rows cvi def
	this.stk[this.ptr++]="rows";
	var t=this.dstk.get("rows");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10477: /rowheight rowheight cvi def
	this.stk[this.ptr++]="rowheight";
	var t=this.dstk.get("rowheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10478: /sepheight sepheight cvi def
	this.stk[this.ptr++]="sepheight";
	var t=this.dstk.get("sepheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10480: pos -1 ne {/rows 16 def} if
	var t=this.dstk.get("pos");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=-1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f6;
	var t8=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t8.call(this)==-1) return -1;
	}
	//#line 10483: parse {
	var t=this.dstk.get("parse");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f10;
	//#line 10501: } if
	var t12=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t12.call(this)==-1) return -1;
	}
	//#line 10503: /barlen barcode length def
	this.stk[this.ptr++]="barlen";
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10506: /swa  -1 def  /swb  -2 def  /swc  -3 def 
	this.stk[this.ptr++]="swa";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="swb";
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="swc";
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10507: /sa1  -4 def  /sb1  -5 def  /sc1  -6 def 
	this.stk[this.ptr++]="sa1";
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sb1";
	this.stk[this.ptr++]=-5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sc1";
	this.stk[this.ptr++]=-6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10508: /sa2  -7 def  /sb2  -8 def  /sc2  -9 def 
	this.stk[this.ptr++]="sa2";
	this.stk[this.ptr++]=-7;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sb2";
	this.stk[this.ptr++]=-8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sc2";
	this.stk[this.ptr++]=-9;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10509: /pad -10 def  /sb3 -11 def  /sc3 -12 def
	this.stk[this.ptr++]="pad";
	this.stk[this.ptr++]=-10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sb3";
	this.stk[this.ptr++]=-11;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sc3";
	this.stk[this.ptr++]=-12;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10510: /fn1 -13 def  /fn2 -14 def  /fn3 -15 def  /fn4 -16 def
	this.stk[this.ptr++]="fn1";
	this.stk[this.ptr++]=-13;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn2";
	this.stk[this.ptr++]=-14;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn3";
	this.stk[this.ptr++]=-15;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn4";
	this.stk[this.ptr++]=-16;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10513: /charmaps [
	this.stk[this.ptr++]="charmaps";
	this.stk[this.ptr++]=Infinity;
	//#line 10515: [  32   32  (00) ]  [ (!)  (!)  (01) ]  [ (")  (")  (02) ]  % 0-2 
	this.stk[this.ptr++]=BWIPJS.psarray([32,32,BWIPJS.psstring("00")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("!"),BWIPJS.psstring("!"),BWIPJS.psstring("01")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("\""),BWIPJS.psstring("\""),BWIPJS.psstring("02")]);
	//#line 10516: [ (#)  (#)  (03) ]  [ ($)  ($)  (04) ]  [ (%)  (%)  (05) ]  % 3-5
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("#"),BWIPJS.psstring("#"),BWIPJS.psstring("03")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("$"),BWIPJS.psstring("$"),BWIPJS.psstring("04")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("%"),BWIPJS.psstring("%"),BWIPJS.psstring("05")]);
	//#line 10517: [ (&)  (&)  (06) ]  [ (')  (')  (07) ]  [  40   40  (08) ]  % 6-8
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("&"),BWIPJS.psstring("&"),BWIPJS.psstring("06")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("'"),BWIPJS.psstring("'"),BWIPJS.psstring("07")]);
	this.stk[this.ptr++]=BWIPJS.psarray([40,40,BWIPJS.psstring("08")]);
	//#line 10518: [  41   41  (09) ]  [ (*)  (*)  (10) ]  [ (+)  (+)  (11) ]  % 9-11
	this.stk[this.ptr++]=BWIPJS.psarray([41,41,BWIPJS.psstring("09")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("*"),BWIPJS.psstring("*"),BWIPJS.psstring("10")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("+"),BWIPJS.psstring("+"),BWIPJS.psstring("11")]);
	//#line 10519: [ (,)  (,)  (12) ]  [ (-)  (-)  (13) ]  [ (.)  (.)  (14) ]  % 12-14
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(","),BWIPJS.psstring(","),BWIPJS.psstring("12")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("-"),BWIPJS.psstring("-"),BWIPJS.psstring("13")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("."),BWIPJS.psstring("."),BWIPJS.psstring("14")]);
	//#line 10520: [ (/)  (/)  (15) ]  [ (0)  (0)  (16) ]  [ (1)  (1)  (17) ]  % 15-17
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("/"),BWIPJS.psstring("/"),BWIPJS.psstring("15")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0"),BWIPJS.psstring("0"),BWIPJS.psstring("16")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("1"),BWIPJS.psstring("1"),BWIPJS.psstring("17")]);
	//#line 10521: [ (2)  (2)  (18) ]  [ (3)  (3)  (19) ]  [ (4)  (4)  (20) ]  % 18-20
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("2"),BWIPJS.psstring("2"),BWIPJS.psstring("18")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("3"),BWIPJS.psstring("3"),BWIPJS.psstring("19")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("4"),BWIPJS.psstring("4"),BWIPJS.psstring("20")]);
	//#line 10522: [ (5)  (5)  (21) ]  [ (6)  (6)  (22) ]  [ (7)  (7)  (23) ]  % 21-23
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("5"),BWIPJS.psstring("5"),BWIPJS.psstring("21")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("6"),BWIPJS.psstring("6"),BWIPJS.psstring("22")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("7"),BWIPJS.psstring("7"),BWIPJS.psstring("23")]);
	//#line 10523: [ (8)  (8)  (24) ]  [ (9)  (9)  (25) ]  [ (:)  (:)  (26) ]  % 24-26
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("8"),BWIPJS.psstring("8"),BWIPJS.psstring("24")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("9"),BWIPJS.psstring("9"),BWIPJS.psstring("25")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(":"),BWIPJS.psstring(":"),BWIPJS.psstring("26")]);
	//#line 10524: [ (;)  (;)  (27) ]  [ (<)  (<)  (28) ]  [ (=)  (=)  (29) ]  % 27-29
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(";"),BWIPJS.psstring(";"),BWIPJS.psstring("27")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("<"),BWIPJS.psstring("<"),BWIPJS.psstring("28")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("="),BWIPJS.psstring("="),BWIPJS.psstring("29")]);
	//#line 10525: [ (>)  (>)  (30) ]  [ (?)  (?)  (31) ]  [ (@)  (@)  (32) ]  % 30-32
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(">"),BWIPJS.psstring(">"),BWIPJS.psstring("30")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("?"),BWIPJS.psstring("?"),BWIPJS.psstring("31")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("@"),BWIPJS.psstring("@"),BWIPJS.psstring("32")]);
	//#line 10526: [ (A)  (A)  (33) ]  [ (B)  (B)  (34) ]  [ (C)  (C)  (35) ]  % 33-35
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("A"),BWIPJS.psstring("A"),BWIPJS.psstring("33")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("B"),BWIPJS.psstring("B"),BWIPJS.psstring("34")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("C"),BWIPJS.psstring("C"),BWIPJS.psstring("35")]);
	//#line 10527: [ (D)  (D)  (36) ]  [ (E)  (E)  (37) ]  [ (F)  (F)  (38) ]  % 36-38
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("D"),BWIPJS.psstring("D"),BWIPJS.psstring("36")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("E"),BWIPJS.psstring("E"),BWIPJS.psstring("37")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("F"),BWIPJS.psstring("F"),BWIPJS.psstring("38")]);
	//#line 10528: [ (G)  (G)  (39) ]  [ (H)  (H)  (40) ]  [ (I)  (I)  (41) ]  % 39-41
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("G"),BWIPJS.psstring("G"),BWIPJS.psstring("39")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("H"),BWIPJS.psstring("H"),BWIPJS.psstring("40")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("I"),BWIPJS.psstring("I"),BWIPJS.psstring("41")]);
	//#line 10529: [ (J)  (J)  (42) ]  [ (K)  (K)  (43) ]  [ (L)  (L)  (44) ]  % 42-44
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("J"),BWIPJS.psstring("J"),BWIPJS.psstring("42")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("K"),BWIPJS.psstring("K"),BWIPJS.psstring("43")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("L"),BWIPJS.psstring("L"),BWIPJS.psstring("44")]);
	//#line 10530: [ (M)  (M)  (45) ]  [ (N)  (N)  (46) ]  [ (O)  (O)  (47) ]  % 45-47
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("M"),BWIPJS.psstring("M"),BWIPJS.psstring("45")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("N"),BWIPJS.psstring("N"),BWIPJS.psstring("46")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("O"),BWIPJS.psstring("O"),BWIPJS.psstring("47")]);
	//#line 10531: [ (P)  (P)  (48) ]  [ (Q)  (Q)  (49) ]  [ (R)  (R)  (50) ]  % 48-50
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("P"),BWIPJS.psstring("P"),BWIPJS.psstring("48")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Q"),BWIPJS.psstring("Q"),BWIPJS.psstring("49")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("R"),BWIPJS.psstring("R"),BWIPJS.psstring("50")]);
	//#line 10532: [ (S)  (S)  (51) ]  [ (T)  (T)  (52) ]  [ (U)  (U)  (53) ]  % 51-53
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("S"),BWIPJS.psstring("S"),BWIPJS.psstring("51")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("T"),BWIPJS.psstring("T"),BWIPJS.psstring("52")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("U"),BWIPJS.psstring("U"),BWIPJS.psstring("53")]);
	//#line 10533: [ (V)  (V)  (54) ]  [ (W)  (W)  (55) ]  [ (X)  (X)  (56) ]  % 54-56
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("V"),BWIPJS.psstring("V"),BWIPJS.psstring("54")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("W"),BWIPJS.psstring("W"),BWIPJS.psstring("55")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("X"),BWIPJS.psstring("X"),BWIPJS.psstring("56")]);
	//#line 10534: [ (Y)  (Y)  (57) ]  [ (Z)  (Z)  (58) ]  [ ([)  ([)  (59) ]  % 57-59
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Y"),BWIPJS.psstring("Y"),BWIPJS.psstring("57")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Z"),BWIPJS.psstring("Z"),BWIPJS.psstring("58")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("["),BWIPJS.psstring("["),BWIPJS.psstring("59")]);
	//#line 10535: [  92   92  (60) ]  [ (])  (])  (61) ]  [ (^)  (^)  (62) ]  % 60-62
	this.stk[this.ptr++]=BWIPJS.psarray([92,92,BWIPJS.psstring("60")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("]"),BWIPJS.psstring("]"),BWIPJS.psstring("61")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("^"),BWIPJS.psstring("^"),BWIPJS.psstring("62")]);
	//#line 10536: [ (_)  (_)  (63) ]  [   0  (`)  (64) ]  [   1  (a)  (65) ]  % 63-65
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("_"),BWIPJS.psstring("_"),BWIPJS.psstring("63")]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,BWIPJS.psstring("`"),BWIPJS.psstring("64")]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,BWIPJS.psstring("a"),BWIPJS.psstring("65")]);
	//#line 10537: [   2  (b)  (66) ]  [   3  (c)  (67) ]  [   4  (d)  (68) ]  % 66-68
	this.stk[this.ptr++]=BWIPJS.psarray([2,BWIPJS.psstring("b"),BWIPJS.psstring("66")]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,BWIPJS.psstring("c"),BWIPJS.psstring("67")]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,BWIPJS.psstring("d"),BWIPJS.psstring("68")]);
	//#line 10538: [   5  (e)  (69) ]  [   6  (f)  (70) ]  [   7  (g)  (71) ]  % 69-71
	this.stk[this.ptr++]=BWIPJS.psarray([5,BWIPJS.psstring("e"),BWIPJS.psstring("69")]);
	this.stk[this.ptr++]=BWIPJS.psarray([6,BWIPJS.psstring("f"),BWIPJS.psstring("70")]);
	this.stk[this.ptr++]=BWIPJS.psarray([7,BWIPJS.psstring("g"),BWIPJS.psstring("71")]);
	//#line 10539: [   8  (h)  (72) ]  [   9  (i)  (73) ]  [  10  (j)  (74) ]  % 72-74
	this.stk[this.ptr++]=BWIPJS.psarray([8,BWIPJS.psstring("h"),BWIPJS.psstring("72")]);
	this.stk[this.ptr++]=BWIPJS.psarray([9,BWIPJS.psstring("i"),BWIPJS.psstring("73")]);
	this.stk[this.ptr++]=BWIPJS.psarray([10,BWIPJS.psstring("j"),BWIPJS.psstring("74")]);
	//#line 10540: [  11  (k)  (75) ]  [  12  (l)  (76) ]  [  13  (m)  (77) ]  % 75-77
	this.stk[this.ptr++]=BWIPJS.psarray([11,BWIPJS.psstring("k"),BWIPJS.psstring("75")]);
	this.stk[this.ptr++]=BWIPJS.psarray([12,BWIPJS.psstring("l"),BWIPJS.psstring("76")]);
	this.stk[this.ptr++]=BWIPJS.psarray([13,BWIPJS.psstring("m"),BWIPJS.psstring("77")]);
	//#line 10541: [  14  (n)  (78) ]  [  15  (o)  (79) ]  [  16  (p)  (80) ]  % 78-80
	this.stk[this.ptr++]=BWIPJS.psarray([14,BWIPJS.psstring("n"),BWIPJS.psstring("78")]);
	this.stk[this.ptr++]=BWIPJS.psarray([15,BWIPJS.psstring("o"),BWIPJS.psstring("79")]);
	this.stk[this.ptr++]=BWIPJS.psarray([16,BWIPJS.psstring("p"),BWIPJS.psstring("80")]);
	//#line 10542: [  17  (q)  (81) ]  [  18  (r)  (82) ]  [  19  (s)  (83) ]  % 81-83
	this.stk[this.ptr++]=BWIPJS.psarray([17,BWIPJS.psstring("q"),BWIPJS.psstring("81")]);
	this.stk[this.ptr++]=BWIPJS.psarray([18,BWIPJS.psstring("r"),BWIPJS.psstring("82")]);
	this.stk[this.ptr++]=BWIPJS.psarray([19,BWIPJS.psstring("s"),BWIPJS.psstring("83")]);
	//#line 10543: [  20  (t)  (84) ]  [  21  (u)  (85) ]  [  22  (v)  (86) ]  % 84-86
	this.stk[this.ptr++]=BWIPJS.psarray([20,BWIPJS.psstring("t"),BWIPJS.psstring("84")]);
	this.stk[this.ptr++]=BWIPJS.psarray([21,BWIPJS.psstring("u"),BWIPJS.psstring("85")]);
	this.stk[this.ptr++]=BWIPJS.psarray([22,BWIPJS.psstring("v"),BWIPJS.psstring("86")]);
	//#line 10544: [  23  (w)  (87) ]  [  24  (x)  (88) ]  [  25  (y)  (89) ]  % 87-89
	this.stk[this.ptr++]=BWIPJS.psarray([23,BWIPJS.psstring("w"),BWIPJS.psstring("87")]);
	this.stk[this.ptr++]=BWIPJS.psarray([24,BWIPJS.psstring("x"),BWIPJS.psstring("88")]);
	this.stk[this.ptr++]=BWIPJS.psarray([25,BWIPJS.psstring("y"),BWIPJS.psstring("89")]);
	//#line 10545: [  26  (z)  (90) ]  [  27  ({)  (91) ]  [  28  (|)  (92) ]  % 90-92
	this.stk[this.ptr++]=BWIPJS.psarray([26,BWIPJS.psstring("z"),BWIPJS.psstring("90")]);
	this.stk[this.ptr++]=BWIPJS.psarray([27,BWIPJS.psstring("{"),BWIPJS.psstring("91")]);
	this.stk[this.ptr++]=BWIPJS.psarray([28,BWIPJS.psstring("|"),BWIPJS.psstring("92")]);
	//#line 10546: [  29  (})  (93) ]  [  30  (~)  (94) ]  [  31  127  (95) ]  % 93-95
	this.stk[this.ptr++]=BWIPJS.psarray([29,BWIPJS.psstring("}"),BWIPJS.psstring("93")]);
	this.stk[this.ptr++]=BWIPJS.psarray([30,BWIPJS.psstring("~"),BWIPJS.psstring("94")]);
	this.stk[this.ptr++]=BWIPJS.psarray([31,127,BWIPJS.psstring("95")]);
	//#line 10547: [ fn3  fn3  (96) ]  [ fn2  fn2  (97) ]  [ sb1  sa1  (98) ]  % 96-98
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fn3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("96");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fn2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("97");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sb1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sa1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("98");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	//#line 10548: [ swc  swc  (99) ]  [ swb  fn4  swb  ]  [ fn4  swa  swa  ]  % 99-101
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("swc");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("swc");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("99");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("swb");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn4");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("swb");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fn4");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("swa");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("swa");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	//#line 10549: [ fn1  fn1  fn1  ]  [ pad  pad  pad  ]  [ sb2  sa2  sb1  ]  % 102-104
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fn1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("pad");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("pad");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("pad");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sb2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sa2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sb1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	//#line 10550: [ sc2  sc2  sb2  ]  [ sc3  sc3  sb3  ]                      % 105-106
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sc2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sc2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sb2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sc3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sc3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sb3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	//#line 10551: ] def 
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10554: /charvals [ 109 dict 109 dict 109 dict ] def
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=109;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=109;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=109;
	this.stk[this.ptr-1]={};
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10555: 0 1 charmaps length 1 sub {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("charmaps");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f13;
	//#line 10563: } for
	var t23=this.stk[--this.ptr];
	var t21=this.stk[--this.ptr];
	var t20=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	for (var t22=t19; t20<0 ? t22>=t21 : t22<=t21; t22+=t20) {
		this.stk[this.ptr++]=t22;
		if (t23.call(this)==-1) break;
	}
	//#line 10564: /seta charvals 0 get def
	this.stk[this.ptr++]="seta";
	var t=this.dstk.get("charvals");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10565: /setb charvals 1 get def
	this.stk[this.ptr++]="setb";
	var t=this.dstk.get("charvals");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10566: /setc charvals 2 get def
	this.stk[this.ptr++]="setc";
	var t=this.dstk.get("charvals");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 10568: raw {/encoding (raw) def} if
	var t=this.dstk.get("raw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f14;
	var t24=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t24.call(this)==-1) return -1;
	}
	//#line 10570: encoding (raw) eq {
	var t=this.dstk.get("encoding");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("raw");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f17;
	//#line 10582: } if
	var t27=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t27.call(this)==-1) return -1;
	}
	//#line 10584: encoding (auto) eq { 
	var t=this.dstk.get("encoding");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("auto");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f111;
	//#line 11011: } if  % auto encoding
	var t129=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t129.call(this)==-1) return -1;
	}
	//#line 11015: /metrics [
	this.stk[this.ptr++]="metrics";
	this.stk[this.ptr++]=Infinity;
	//#line 11016: [  2    7 ]
	this.stk[this.ptr++]=BWIPJS.psarray([2,7]);
	//#line 11017: [  3   12 ]
	this.stk[this.ptr++]=BWIPJS.psarray([3,12]);
	//#line 11018: [  4   17 ]
	this.stk[this.ptr++]=BWIPJS.psarray([4,17]);
	//#line 11019: [  5   22 ]
	this.stk[this.ptr++]=BWIPJS.psarray([5,22]);
	//#line 11020: [  6   27 ]
	this.stk[this.ptr++]=BWIPJS.psarray([6,27]);
	//#line 11021: [  7   32 ]
	this.stk[this.ptr++]=BWIPJS.psarray([7,32]);
	//#line 11022: [  8   37 ]
	this.stk[this.ptr++]=BWIPJS.psarray([8,37]);
	//#line 11023: [  9   42 ]
	this.stk[this.ptr++]=BWIPJS.psarray([9,42]);
	//#line 11024: [ 10   47 ]
	this.stk[this.ptr++]=BWIPJS.psarray([10,47]);
	//#line 11025: [ 11   52 ]
	this.stk[this.ptr++]=BWIPJS.psarray([11,52]);
	//#line 11026: [ 12   57 ]
	this.stk[this.ptr++]=BWIPJS.psarray([12,57]);
	//#line 11027: [ 13   62 ]
	this.stk[this.ptr++]=BWIPJS.psarray([13,62]);
	//#line 11028: [ 14   67 ]
	this.stk[this.ptr++]=BWIPJS.psarray([14,67]);
	//#line 11029: [ 15   72 ]
	this.stk[this.ptr++]=BWIPJS.psarray([15,72]);
	//#line 11030: [ 16   77 ]
	this.stk[this.ptr++]=BWIPJS.psarray([16,77]);
	//#line 11031: ] def
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11034: /urows rows def
	this.stk[this.ptr++]="urows";
	var t=this.dstk.get("rows");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11035: /i 0 def
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11036: { % loop
	this.stk[this.ptr++]=$f115;
	//#line 11045: } loop
	var t133=this.stk[--this.ptr];
	while (true) {
		if (t133.call(this)==-1) break;
	}
	//#line 11048: /cws [ cws aload pop dcws cws length sub {103} repeat ] def
	this.stk[this.ptr++]="cws";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	var t=this.dstk.get("dcws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f116;
	var t136=this.stk[--this.ptr];
	var t134=this.stk[--this.ptr];
	for (var t135=0; t135<t134; t135++) {
		if (t136.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11051: /cws [ r 2 sub 7 mul mode add cws aload pop ] def
	this.stk[this.ptr++]="cws";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11054: 0 0 1 dcws {dup 2 add exch cws exch get mul add} for 
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("dcws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f117;
	var t141=this.stk[--this.ptr];
	var t139=this.stk[--this.ptr];
	var t138=this.stk[--this.ptr];
	var t137=this.stk[--this.ptr];
	for (var t140=t137; t138<0 ? t140>=t139 : t140<=t139; t140+=t138) {
		this.stk[this.ptr++]=t140;
		if (t141.call(this)==-1) break;
	}
	//#line 11055: 107 mod /c1 exch def
	this.stk[this.ptr++]=107;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="c1";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11056: 0 0 1 dcws {dup 1 add exch cws exch get mul add} for 
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("dcws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f118;
	var t146=this.stk[--this.ptr];
	var t144=this.stk[--this.ptr];
	var t143=this.stk[--this.ptr];
	var t142=this.stk[--this.ptr];
	for (var t145=t142; t143<0 ? t145>=t144 : t145<=t144; t145+=t143) {
		this.stk[this.ptr++]=t145;
		if (t146.call(this)==-1) break;
	}
	//#line 11057: c1 dcws 2 add mul add 107 mod /c2 exch def
	var t=this.dstk.get("c1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("dcws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=107;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="c2";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11058: /cws [ cws aload pop c1 c2 ] def
	this.stk[this.ptr++]="cws";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	var t=this.dstk.get("c1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("c2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11061: /encs
	this.stk[this.ptr++]="encs";
	//#line 11062: [ (212222) (222122) (222221) (121223) (121322) (131222) (122213)
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("212222"),BWIPJS.psstring("222122"),BWIPJS.psstring("222221"),BWIPJS.psstring("121223"),BWIPJS.psstring("121322"),BWIPJS.psstring("131222"),BWIPJS.psstring("122213"),BWIPJS.psstring("122312"),BWIPJS.psstring("132212"),BWIPJS.psstring("221213"),BWIPJS.psstring("221312"),BWIPJS.psstring("231212"),BWIPJS.psstring("112232"),BWIPJS.psstring("122132"),BWIPJS.psstring("122231"),BWIPJS.psstring("113222"),BWIPJS.psstring("123122"),BWIPJS.psstring("123221"),BWIPJS.psstring("223211"),BWIPJS.psstring("221132"),BWIPJS.psstring("221231"),BWIPJS.psstring("213212"),BWIPJS.psstring("223112"),BWIPJS.psstring("312131"),BWIPJS.psstring("311222"),BWIPJS.psstring("321122"),BWIPJS.psstring("321221"),BWIPJS.psstring("312212"),BWIPJS.psstring("322112"),BWIPJS.psstring("322211"),BWIPJS.psstring("212123"),BWIPJS.psstring("212321"),BWIPJS.psstring("232121"),BWIPJS.psstring("111323"),BWIPJS.psstring("131123"),BWIPJS.psstring("131321"),BWIPJS.psstring("112313"),BWIPJS.psstring("132113"),BWIPJS.psstring("132311"),BWIPJS.psstring("211313"),BWIPJS.psstring("231113"),BWIPJS.psstring("231311"),BWIPJS.psstring("112133"),BWIPJS.psstring("112331"),BWIPJS.psstring("132131"),BWIPJS.psstring("113123"),BWIPJS.psstring("113321"),BWIPJS.psstring("133121"),BWIPJS.psstring("313121"),BWIPJS.psstring("211331"),BWIPJS.psstring("231131"),BWIPJS.psstring("213113"),BWIPJS.psstring("213311"),BWIPJS.psstring("213131"),BWIPJS.psstring("311123"),BWIPJS.psstring("311321"),BWIPJS.psstring("331121"),BWIPJS.psstring("312113"),BWIPJS.psstring("312311"),BWIPJS.psstring("332111"),BWIPJS.psstring("314111"),BWIPJS.psstring("221411"),BWIPJS.psstring("431111"),BWIPJS.psstring("111224"),BWIPJS.psstring("111422"),BWIPJS.psstring("121124"),BWIPJS.psstring("121421"),BWIPJS.psstring("141122"),BWIPJS.psstring("141221"),BWIPJS.psstring("112214"),BWIPJS.psstring("112412"),BWIPJS.psstring("122114"),BWIPJS.psstring("122411"),BWIPJS.psstring("142112"),BWIPJS.psstring("142211"),BWIPJS.psstring("241211"),BWIPJS.psstring("221114"),BWIPJS.psstring("413111"),BWIPJS.psstring("241112"),BWIPJS.psstring("134111"),BWIPJS.psstring("111242"),BWIPJS.psstring("121142"),BWIPJS.psstring("121241"),BWIPJS.psstring("114212"),BWIPJS.psstring("124112"),BWIPJS.psstring("124211"),BWIPJS.psstring("411212"),BWIPJS.psstring("421112"),BWIPJS.psstring("421211"),BWIPJS.psstring("212141"),BWIPJS.psstring("214121"),BWIPJS.psstring("412121"),BWIPJS.psstring("111143"),BWIPJS.psstring("111341"),BWIPJS.psstring("131141"),BWIPJS.psstring("114113"),BWIPJS.psstring("114311"),BWIPJS.psstring("411113"),BWIPJS.psstring("411311"),BWIPJS.psstring("113141"),BWIPJS.psstring("114131"),BWIPJS.psstring("311141"),BWIPJS.psstring("411131"),BWIPJS.psstring("211412"),BWIPJS.psstring("211214"),BWIPJS.psstring("211232"),BWIPJS.psstring("211133")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11081: /startencs [ 
	this.stk[this.ptr++]="startencs";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("3211"),BWIPJS.psstring("2221"),BWIPJS.psstring("2122"),BWIPJS.psstring("1411"),BWIPJS.psstring("1132"),BWIPJS.psstring("1231"),BWIPJS.psstring("1114"),BWIPJS.psstring("3112"),BWIPJS.psstring("3211"),BWIPJS.psstring("2221"),BWIPJS.psstring("2122"),BWIPJS.psstring("1411"),BWIPJS.psstring("1132"),BWIPJS.psstring("1231"),BWIPJS.psstring("1114"),BWIPJS.psstring("3112")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11085: /stopencsodd [
	this.stk[this.ptr++]="stopencsodd";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("3211"),BWIPJS.psstring("2221"),BWIPJS.psstring("2122"),BWIPJS.psstring("1411"),BWIPJS.psstring("1132"),BWIPJS.psstring("1231"),BWIPJS.psstring("1114"),BWIPJS.psstring("3112"),BWIPJS.psstring("1132"),BWIPJS.psstring("1231"),BWIPJS.psstring("1114"),BWIPJS.psstring("3112"),BWIPJS.psstring("3211"),BWIPJS.psstring("2221"),BWIPJS.psstring("2122"),BWIPJS.psstring("1411")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11089: /stopencseven [
	this.stk[this.ptr++]="stopencseven";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("2122"),BWIPJS.psstring("1411"),BWIPJS.psstring("1132"),BWIPJS.psstring("1231"),BWIPJS.psstring("1114"),BWIPJS.psstring("3112"),BWIPJS.psstring("1132"),BWIPJS.psstring("1231"),BWIPJS.psstring("1114"),BWIPJS.psstring("3112"),BWIPJS.psstring("3211"),BWIPJS.psstring("2221"),BWIPJS.psstring("2122"),BWIPJS.psstring("1411"),BWIPJS.psstring("3211"),BWIPJS.psstring("2221")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11093: pos -1 eq pos 10 idiv 2 mod 1 eq or {
	var t=this.dstk.get("pos");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=-1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("pos");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=10;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f119;
	//#line 11095: } {
	this.stk[this.ptr++]=$f120;
	//#line 11097: } ifelse
	var t147=this.stk[--this.ptr];
	var t148=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t148.call(this)==-1) return -1;
	} else {
		if (t147.call(this)==-1) return -1;
	}
	//#line 11100: /rowbits r array def
	this.stk[this.ptr++]="rowbits";
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11101: 0 1 r 1 sub {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f130;
	//#line 11117: } for
	var t173=this.stk[--this.ptr];
	var t171=this.stk[--this.ptr];
	var t170=this.stk[--this.ptr];
	var t169=this.stk[--this.ptr];
	for (var t172=t169; t170<0 ? t172>=t171 : t172<=t171; t172+=t170) {
		this.stk[this.ptr++]=t172;
		if (t173.call(this)==-1) break;
	}
	//#line 11120: /pixs [
	this.stk[this.ptr++]="pixs";
	this.stk[this.ptr++]=Infinity;
	//#line 11121: 81 sepheight mul {1} repeat
	this.stk[this.ptr++]=81;
	var t=this.dstk.get("sepheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f131;
	var t176=this.stk[--this.ptr];
	var t174=this.stk[--this.ptr];
	for (var t175=0; t175<t174; t175++) {
		if (t176.call(this)==-1) break;
	}
	//#line 11122: 0 1 r 2 sub {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f136;
	//#line 11126: } for
	var t193=this.stk[--this.ptr];
	var t191=this.stk[--this.ptr];
	var t190=this.stk[--this.ptr];
	var t189=this.stk[--this.ptr];
	for (var t192=t189; t190<0 ? t192>=t191 : t192<=t191; t192+=t190) {
		this.stk[this.ptr++]=t192;
		if (t193.call(this)==-1) break;
	}
	//#line 11127: rowheight {rowbits r 1 sub get aload pop} repeat
	var t=this.dstk.get("rowheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f137;
	var t196=this.stk[--this.ptr];
	var t194=this.stk[--this.ptr];
	for (var t195=0; t195<t194; t195++) {
		if (t196.call(this)==-1) break;
	}
	//#line 11128: 81 sepheight mul {1} repeat
	this.stk[this.ptr++]=81;
	var t=this.dstk.get("sepheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f138;
	var t199=this.stk[--this.ptr];
	var t197=this.stk[--this.ptr];
	for (var t198=0; t198<t197; t198++) {
		if (t199.call(this)==-1) break;
	}
	//#line 11129: ] def
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 11132: <<
	this.stk[this.ptr++]=Infinity;
	//#line 11133: /ren //renmatrix
	this.stk[this.ptr++]="ren";
	var t=this.dstk.get("renmatrix");
	this.stk[this.ptr++]=t;
	//#line 11134: /pixs pixs
	this.stk[this.ptr++]="pixs";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	//#line 11135: /pixx 81
	this.stk[this.ptr++]="pixx";
	this.stk[this.ptr++]=81;
	//#line 11136: /pixy pixs length 81 idiv
	this.stk[this.ptr++]="pixy";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=81;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	//#line 11137: /height pixs length 81 idiv 72 div
	this.stk[this.ptr++]="height";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=81;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	//#line 11138: /width 81 72 div
	this.stk[this.ptr++]="width";
	this.stk[this.ptr++]=81;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	//#line 11139: /opt options
	this.stk[this.ptr++]="opt";
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	//#line 11140: >>
	var t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
		t[this.stk[i-1]]=this.stk[i];
	}
	if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
	this.ptr = i;
	this.stk[this.ptr++]=t;
	//#line 11142: dontdraw not //renmatrix if
	var t=this.dstk.get("dontdraw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
	else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
	var t=this.dstk.get("renmatrix");
	this.stk[this.ptr++]=t;
	var t200=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t200.call(this)==-1) return -1;
	}
	//#line 11144: end
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
// END OF code16k

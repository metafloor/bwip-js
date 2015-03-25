// file: bwipp/databaromni.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-03-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN databaromni
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("databaromni", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("databaromni", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("databaromni", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
BWIPJS.bwipp["databaromni"]=function() {
	function $f0(){
		//#line 4582: token false eq {exit} if dup length string cvs (=) search
		return -1;
	}
	function $f1(){
		//#line 4583: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		//#line 4583: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f3(){
		//#line 4582: token false eq {exit} if dup length string cvs (=) search
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
		//#line 4583: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
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
		//#line 4580: 1 dict begin
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]={};
		this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
		//#line 4581: options {
		var t=this.dstk.get("options");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f3;
		//#line 4584: } loop
		var t3=this.stk[--this.ptr];
		while (true) {
			if (t3.call(this)==-1) break;
		}
		//#line 4585: currentdict end /options exch def
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		//#line 4587: options {def} forall
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		//#line 4589: format (truncated) eq {/height 13 72 div def} if
		this.stk[this.ptr++]="height";
		this.stk[this.ptr++]=13;
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		//#line 4594: /bwipp.databaromniBadAI (GS1 DataBar Omnidirectional must begin with (01) application identifier) //raiseerror exec
		this.stk[this.ptr++]="bwipp.databaromniBadAI";
		this.stk[this.ptr++]=BWIPJS.psstring("GS1 DataBar Omnidirectional must begin with (01) application identifier");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f8(){
		//#line 4597: /bwipp.databaromniBadLength (GS1 DataBar Omnidirectional must be 13 or 14 digits) //raiseerror exec
		this.stk[this.ptr++]="bwipp.databaromniBadLength";
		this.stk[this.ptr++]=BWIPJS.psstring("GS1 DataBar Omnidirectional must be 13 or 14 digits");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f9(){
		//#line 4601: /bwipp.databaromniBadCharacter (GS1 DataBar Omnidirectional must contain only digits) //raiseerror exec
		this.stk[this.ptr++]="bwipp.databaromniBadCharacter";
		this.stk[this.ptr++]=BWIPJS.psstring("GS1 DataBar Omnidirectional must contain only digits");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f10(){
		//#line 4600: dup 48 lt exch 57 gt or {
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f9;
		//#line 4602: } if
		var t11=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t11.call(this)==-1) return -1;
		}
	}
	function $f11(){
		//#line 4609: /checksum checksum barcode i 4 add get 48 sub i 2 mod 0 eq {3 mul} if add def
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	}
	function $f12(){
		//#line 4608: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4609: /checksum checksum barcode i 4 add get 48 sub i 2 mod 0 eq {3 mul} if add def
		this.stk[this.ptr++]="checksum";
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f11;
		var t15=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t15.call(this)==-1) return -1;
		}
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f13(){
		//#line 4614: /bwipp.databaromniBadCheckDigit (Incorrect GS1 DataBar Omnidirectional check digit provided) //raiseerror exec
		this.stk[this.ptr++]="bwipp.databaromniBadCheckDigit";
		this.stk[this.ptr++]=BWIPJS.psstring("Incorrect GS1 DataBar Omnidirectional check digit provided");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f14(){
		//#line 4613: barcode 17 get checksum 48 add ne {
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=17;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f13;
		//#line 4615: } if
		var t21=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t21.call(this)==-1) return -1;
		}
	}
	function $f15(){
		//#line 4625: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4626: txt i [barcode i 1 getinterval 0 0 () 0] put
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f16(){
		//#line 4630: 2 copy sub 2 copy lt {exch} if  % n r maxd mind
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f17(){
		//#line 4635: 1 index idiv exch 1 add exch
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f18(){
		//#line 4633: mul  % mind j v*i
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		//#line 4634: 1 index 3 index le {
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f17;
		//#line 4636: } if
		var t29=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t29.call(this)==-1) return -1;
		}
	}
	function $f19(){
		//#line 4639: 1 index 3 index gt {exit} if
		return -1;
	}
	function $f20(){
		//#line 4639: 1 index 3 index gt {exit} if
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f19;
		var t35=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t35.call(this)==-1) return -1;
		}
		//#line 4640: 1 index idiv exch 1 add exch
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f21(){
		//#line 4630: 2 copy sub 2 copy lt {exch} if  % n r maxd mind
		this.stk[this.ptr++]=2;
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
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
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
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f16;
		var t28=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t28.call(this)==-1) return -1;
		}
		//#line 4631: 1 1 5 3 roll  % mind j=1 v=1 n maxd
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=3;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		//#line 4632: 1 add -1 exch {  % mind j v  n -1 maxd+1
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f18;
		//#line 4637: } for
		var t34=this.stk[--this.ptr];
		var t32=this.stk[--this.ptr];
		var t31=this.stk[--this.ptr];
		var t30=this.stk[--this.ptr];
		for (var t33=t30; t31<0 ? t33>=t32 : t33<=t32; t33+=t31) {
			this.stk[this.ptr++]=t33;
			if (t34.call(this)==-1) break;
		}
		//#line 4638: {  % mind j v
		this.stk[this.ptr++]=$f20;
		//#line 4641: } loop
		var t36=this.stk[--this.ptr];
		while (true) {
			if (t36.call(this)==-1) break;
		}
		//#line 4642: exch pop exch pop
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f22(){
		//#line 4659: /sval sval nm ew sub el sub bar add el bar sub 2 sub ncr sub def
		this.stk[this.ptr++]="sval";
		var t=this.dstk.get("sval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("ncr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f23(){
		//#line 4664: nm exch sub ew sub 1 sub el bar sub 3 sub ncr
		var t=this.dstk.get("nm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("ncr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 4665: /lval exch lval add def
		this.stk[this.ptr++]="lval";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("lval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f24(){
		//#line 4662: /lval 0 def
		this.stk[this.ptr++]="lval";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4663: nm ew sub el sub bar add 2 add -1 mw 1 add {
		var t=this.dstk.get("nm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		var t=this.dstk.get("mw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f23;
		//#line 4666: } for
		var t42=this.stk[--this.ptr];
		var t40=this.stk[--this.ptr];
		var t39=this.stk[--this.ptr];
		var t38=this.stk[--this.ptr];
		for (var t41=t38; t39<0 ? t41>=t40 : t41<=t40; t41+=t39) {
			this.stk[this.ptr++]=t41;
			if (t42.call(this)==-1) break;
		}
		//#line 4667: /sval sval lval el bar sub 1 sub mul sub def
		this.stk[this.ptr++]="sval";
		var t=this.dstk.get("sval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f25(){
		//#line 4669: nm ew sub mw gt {/sval sval 1 sub def} if
		this.stk[this.ptr++]="sval";
		var t=this.dstk.get("sval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f26(){
		//#line 4669: nm ew sub mw gt {/sval sval 1 sub def} if
		var t=this.dstk.get("nm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("mw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f25;
		var t43=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t43.call(this)==-1) return -1;
		}
	}
	function $f27(){
		//#line 4672: val 0 lt {exit} if
		return -1;
	}
	function $f28(){
		//#line 4657: /sval nm ew sub 1 sub el bar sub 2 sub ncr def
		this.stk[this.ptr++]="sval";
		var t=this.dstk.get("nm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("ncr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4658: oe mask 0 eq and nm ew sub el 2 mul sub bar 2 mul add -2 ge and {
		var t=this.dstk.get("oe");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("mask");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("nm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f22;
		//#line 4660: } if
		var t37=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t37.call(this)==-1) return -1;
		}
		//#line 4661: el bar sub 2 gt {
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f24;
		//#line 4668: } {
		this.stk[this.ptr++]=$f26;
		//#line 4670: } ifelse
		var t44=this.stk[--this.ptr];
		var t45=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t45.call(this)==-1) return -1;
		} else {
			if (t44.call(this)==-1) return -1;
		}
		//#line 4671: /val val sval sub def
		this.stk[this.ptr++]="val";
		var t=this.dstk.get("val");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4672: val 0 lt {exit} if
		var t=this.dstk.get("val");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f27;
		var t46=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t46.call(this)==-1) return -1;
		}
		//#line 4673: /ew ew 1 add def
		this.stk[this.ptr++]="ew";
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4674: /mask mask 1 bar bitshift not and def
		this.stk[this.ptr++]="mask";
		var t=this.dstk.get("mask");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f29(){
		//#line 4654: /bar exch def
		this.stk[this.ptr++]="bar";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4655: /ew 1 def 
		this.stk[this.ptr++]="ew";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4656: /mask mask 1 bar bitshift or def {
		this.stk[this.ptr++]="mask";
		var t=this.dstk.get("mask");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f28;
		//#line 4675: } loop  
		var t47=this.stk[--this.ptr];
		while (true) {
			if (t47.call(this)==-1) break;
		}
		//#line 4676: /val val sval add def
		this.stk[this.ptr++]="val";
		var t=this.dstk.get("val");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4677: /nm nm ew sub def
		this.stk[this.ptr++]="nm";
		var t=this.dstk.get("nm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4678: out bar ew put 
		var t=this.dstk.get("out");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ew");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f30(){
		//#line 4646: /oe exch def
		this.stk[this.ptr++]="oe";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4647: /el exch def
		this.stk[this.ptr++]="el";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4648: /mw exch def
		this.stk[this.ptr++]="mw";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4649: /nm exch def
		this.stk[this.ptr++]="nm";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4650: /val exch def
		this.stk[this.ptr++]="val";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4651: /out el array def
		this.stk[this.ptr++]="out";
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4652: /mask 0 def
		this.stk[this.ptr++]="mask";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4653: 0 1 el 2 sub {
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f29;
		//#line 4679: } for
		var t52=this.stk[--this.ptr];
		var t50=this.stk[--this.ptr];
		var t49=this.stk[--this.ptr];
		var t48=this.stk[--this.ptr];
		for (var t51=t48; t49<0 ? t51>=t50 : t51<=t50; t51+=t49) {
			this.stk[this.ptr++]=t51;
			if (t52.call(this)==-1) break;
		}
		//#line 4680: out el 1 sub nm put
		var t=this.dstk.get("out");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("el");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("nm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 4681: out
		var t=this.dstk.get("out");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f31(){
		//#line 4685: linkage {1} {0} ifelse
		this.stk[this.ptr++]=1;
	}
	function $f32(){
		//#line 4685: linkage {1} {0} ifelse
		this.stk[this.ptr++]=0;
	}
	function $f33(){
		//#line 4686: barcode 4 13 getinterval {48 sub} forall
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f34(){
		//#line 4690: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4691: binval i 1 add 2 copy get binval i get 4537077 mod 10 mul add put
		var t=this.dstk.get("binval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
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
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("binval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=4537077;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 4692: binval i binval i get 4537077 idiv put
		var t=this.dstk.get("binval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("binval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=4537077;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f35(){
		//#line 4703: pop
		this.ptr--;
	}
	function $f36(){
		//#line 4705: /i false def
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4706: /left left 3 -1 roll 10 13 j sub exp cvi mul add def
		this.stk[this.ptr++]="left";
		var t=this.dstk.get("left");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=13;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f37(){
		//#line 4700: /j exch def
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4701: binval j get
		var t=this.dstk.get("binval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		//#line 4702: dup 0 eq i and {
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f35;
		//#line 4704: } {
		this.stk[this.ptr++]=$f36;
		//#line 4707: } ifelse
		var t63=this.stk[--this.ptr];
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		} else {
			if (t63.call(this)==-1) return -1;
		}
	}
	function $f38(){
	}
	function $f39(){
		//#line 4732: tab164 i 1 add 7 getinterval {} forall
		var t=this.dstk.get("tab164");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f38;
		var t72=this.stk[--this.ptr];
		var t71=this.stk[--this.ptr];
		for (t70 in t71) {
			if (t71 instanceof BWIPJS.psstring || t71 instanceof BWIPJS.psarray) {
				if (t70.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t71.get(t70);
			} else {
				this.stk[this.ptr++]=t70;
				this.stk[this.ptr++]=t71[t70];
			}
			if (t72.call(this)==-1) break;
		}
		//#line 4733: /d1te exch def /d1to exch def
		this.stk[this.ptr++]="d1te";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d1to";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4734: /d1mwe exch def /d1mwo exch def
		this.stk[this.ptr++]="d1mwe";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d1mwo";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4735: /d1ele exch def /d1elo exch def
		this.stk[this.ptr++]="d1ele";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d1elo";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4736: /d1gs exch def
		this.stk[this.ptr++]="d1gs";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4737: exit
		return -1;
	}
	function $f40(){
		//#line 4731: d1 tab164 i get le {
		var t=this.dstk.get("d1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("tab164");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f39;
		//#line 4738: } if
		var t73=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t73.call(this)==-1) return -1;
		}
		//#line 4739: /i i 8 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f41(){
	}
	function $f42(){
		//#line 4744: tab154 i 1 add 7 getinterval {} forall
		var t=this.dstk.get("tab154");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f41;
		var t77=this.stk[--this.ptr];
		var t76=this.stk[--this.ptr];
		for (t75 in t76) {
			if (t76 instanceof BWIPJS.psstring || t76 instanceof BWIPJS.psarray) {
				if (t75.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t76.get(t75);
			} else {
				this.stk[this.ptr++]=t75;
				this.stk[this.ptr++]=t76[t75];
			}
			if (t77.call(this)==-1) break;
		}
		//#line 4745: /d2te exch def /d2to exch def
		this.stk[this.ptr++]="d2te";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d2to";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4746: /d2mwe exch def /d2mwo exch def
		this.stk[this.ptr++]="d2mwe";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d2mwo";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4747: /d2ele exch def /d2elo exch def
		this.stk[this.ptr++]="d2ele";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d2elo";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4748: /d2gs exch def
		this.stk[this.ptr++]="d2gs";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4749: exit
		return -1;
	}
	function $f43(){
		//#line 4743: d2 tab154 i get le {
		var t=this.dstk.get("d2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("tab154");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f42;
		//#line 4750: } if
		var t78=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t78.call(this)==-1) return -1;
		}
		//#line 4751: /i i 8 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f44(){
	}
	function $f45(){
		//#line 4756: tab164 i 1 add 7 getinterval {} forall
		var t=this.dstk.get("tab164");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f44;
		var t82=this.stk[--this.ptr];
		var t81=this.stk[--this.ptr];
		for (t80 in t81) {
			if (t81 instanceof BWIPJS.psstring || t81 instanceof BWIPJS.psarray) {
				if (t80.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t81.get(t80);
			} else {
				this.stk[this.ptr++]=t80;
				this.stk[this.ptr++]=t81[t80];
			}
			if (t82.call(this)==-1) break;
		}
		//#line 4757: /d3te exch def /d3to exch def
		this.stk[this.ptr++]="d3te";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d3to";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4758: /d3mwe exch def /d3mwo exch def
		this.stk[this.ptr++]="d3mwe";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d3mwo";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4759: /d3ele exch def /d3elo exch def
		this.stk[this.ptr++]="d3ele";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d3elo";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4760: /d3gs exch def
		this.stk[this.ptr++]="d3gs";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4761: exit
		return -1;
	}
	function $f46(){
		//#line 4755: d3 tab164 i get le {
		var t=this.dstk.get("d3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("tab164");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f45;
		//#line 4762: } if
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		}
		//#line 4763: /i i 8 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f47(){
	}
	function $f48(){
		//#line 4768: tab154 i 1 add 7 getinterval {} forall
		var t=this.dstk.get("tab154");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f47;
		var t87=this.stk[--this.ptr];
		var t86=this.stk[--this.ptr];
		for (t85 in t86) {
			if (t86 instanceof BWIPJS.psstring || t86 instanceof BWIPJS.psarray) {
				if (t85.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t86.get(t85);
			} else {
				this.stk[this.ptr++]=t85;
				this.stk[this.ptr++]=t86[t85];
			}
			if (t87.call(this)==-1) break;
		}
		//#line 4769: /d4te exch def /d4to exch def
		this.stk[this.ptr++]="d4te";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d4to";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4770: /d4mwe exch def /d4mwo exch def
		this.stk[this.ptr++]="d4mwe";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d4mwo";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4771: /d4ele exch def /d4elo exch def
		this.stk[this.ptr++]="d4ele";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d4elo";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4772: /d4gs exch def
		this.stk[this.ptr++]="d4gs";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4773: exit
		return -1;
	}
	function $f49(){
		//#line 4767: d4 tab154 i get le {
		var t=this.dstk.get("d4");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("tab154");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f48;
		//#line 4774: } if
		var t88=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t88.call(this)==-1) return -1;
		}
		//#line 4775: /i i 8 add def
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f50(){
		//#line 4789: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4790: d1w i 2 mul d1wo i get put
		var t=this.dstk.get("d1w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("d1wo");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 4791: d1w i 2 mul 1 add d1we i get put
		var t=this.dstk.get("d1w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("d1we");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f51(){
		//#line 4796: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4797: d2w 7 i 2 mul sub d2wo i get put
		var t=this.dstk.get("d2w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=7;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("d2wo");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 4798: d2w 6 i 2 mul sub d2we i get put
		var t=this.dstk.get("d2w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("d2we");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f52(){
		//#line 4803: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4804: d3w 7 i 2 mul sub d3wo i get put
		var t=this.dstk.get("d3w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=7;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("d3wo");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 4805: d3w 6 i 2 mul sub d3we i get put
		var t=this.dstk.get("d3w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("d3we");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f53(){
		//#line 4810: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4811: d4w i 2 mul d4wo i get put
		var t=this.dstk.get("d4w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("d4wo");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 4812: d4w i 2 mul 1 add d4we i get put
		var t=this.dstk.get("d4w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("d4we");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f54(){
	}
	function $f55(){
	}
	function $f56(){
	}
	function $f57(){
	}
	function $f58(){
		//#line 4837: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4838: /checksum checksum widths i get checkweights i get mul add def 
		this.stk[this.ptr++]="checksum";
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("widths");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("checkweights");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f59(){
		//#line 4841: checksum 8 ge {/checksum checksum 1 add def} if
		this.stk[this.ptr++]="checksum";
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f60(){
		//#line 4842: checksum 72 ge {/checksum checksum 1 add def} if
		this.stk[this.ptr++]="checksum";
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f61(){
		//#line 4847: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4848: checkrt i checkrtrev 4 i sub get put
		var t=this.dstk.get("checkrt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checkrtrev");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f62(){
	}
	function $f63(){
	}
	function $f64(){
	}
	function $f65(){
	}
	function $f66(){
	}
	function $f67(){
	}
	function $f68(){
		//#line 4862: /bhs [sbs length 1 add 2 idiv {height} repeat]
		var t=this.dstk.get("height");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f69(){
		//#line 4863: /bbs [sbs length 1 add 2 idiv {0} repeat]
		this.stk[this.ptr++]=0;
	}
	function $f70(){
		//#line 4854: /sbs [
		this.stk[this.ptr++]="sbs";
		this.stk[this.ptr++]=Infinity;
		//#line 4855: 1 d1w {} forall checklt {} forall d2w {} forall 
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("d1w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f62;
		var t136=this.stk[--this.ptr];
		var t135=this.stk[--this.ptr];
		for (t134 in t135) {
			if (t135 instanceof BWIPJS.psstring || t135 instanceof BWIPJS.psarray) {
				if (t134.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t135.get(t134);
			} else {
				this.stk[this.ptr++]=t134;
				this.stk[this.ptr++]=t135[t134];
			}
			if (t136.call(this)==-1) break;
		}
		var t=this.dstk.get("checklt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f63;
		var t139=this.stk[--this.ptr];
		var t138=this.stk[--this.ptr];
		for (t137 in t138) {
			if (t138 instanceof BWIPJS.psstring || t138 instanceof BWIPJS.psarray) {
				if (t137.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t138.get(t137);
			} else {
				this.stk[this.ptr++]=t137;
				this.stk[this.ptr++]=t138[t137];
			}
			if (t139.call(this)==-1) break;
		}
		var t=this.dstk.get("d2w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f64;
		var t142=this.stk[--this.ptr];
		var t141=this.stk[--this.ptr];
		for (t140 in t141) {
			if (t141 instanceof BWIPJS.psstring || t141 instanceof BWIPJS.psarray) {
				if (t140.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t141.get(t140);
			} else {
				this.stk[this.ptr++]=t140;
				this.stk[this.ptr++]=t141[t140];
			}
			if (t142.call(this)==-1) break;
		}
		//#line 4856: d4w {} forall checkrt {} forall d3w {} forall 1 1
		var t=this.dstk.get("d4w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f65;
		var t145=this.stk[--this.ptr];
		var t144=this.stk[--this.ptr];
		for (t143 in t144) {
			if (t144 instanceof BWIPJS.psstring || t144 instanceof BWIPJS.psarray) {
				if (t143.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t144.get(t143);
			} else {
				this.stk[this.ptr++]=t143;
				this.stk[this.ptr++]=t144[t143];
			}
			if (t145.call(this)==-1) break;
		}
		var t=this.dstk.get("checkrt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f66;
		var t148=this.stk[--this.ptr];
		var t147=this.stk[--this.ptr];
		for (t146 in t147) {
			if (t147 instanceof BWIPJS.psstring || t147 instanceof BWIPJS.psarray) {
				if (t146.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t147.get(t146);
			} else {
				this.stk[this.ptr++]=t146;
				this.stk[this.ptr++]=t147[t146];
			}
			if (t148.call(this)==-1) break;
		}
		var t=this.dstk.get("d3w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f67;
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
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		//#line 4857: ] def
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4859: <<
		this.stk[this.ptr++]=Infinity;
		//#line 4860: /ren //renlinear
		this.stk[this.ptr++]="ren";
		var t=this.dstk.get("renlinear");
		this.stk[this.ptr++]=t;
		//#line 4861: /sbs sbs
		this.stk[this.ptr++]="sbs";
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 4862: /bhs [sbs length 1 add 2 idiv {height} repeat]
		this.stk[this.ptr++]="bhs";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=$f68;
		var t154=this.stk[--this.ptr];
		var t152=this.stk[--this.ptr];
		for (var t153=0; t153<t152; t153++) {
			if (t154.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		//#line 4863: /bbs [sbs length 1 add 2 idiv {0} repeat]
		this.stk[this.ptr++]="bbs";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=$f69;
		var t157=this.stk[--this.ptr];
		var t155=this.stk[--this.ptr];
		for (var t156=0; t156<t155; t156++) {
			if (t157.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		//#line 4864: /txt txt
		this.stk[this.ptr++]="txt";
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 4865: /textxalign (center)
		this.stk[this.ptr++]="textxalign";
		this.stk[this.ptr++]=BWIPJS.psstring("center");
		//#line 4866: /opt options
		this.stk[this.ptr++]="opt";
		var t=this.dstk.get("options");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 4867: >>
		var t = {};
		for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
			if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
			t[this.stk[i-1]]=this.stk[i];
		}
		if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
		this.ptr = i;
		this.stk[this.ptr++]=t;
		//#line 4869: dontdraw not //renlinear if
		var t=this.dstk.get("dontdraw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		var t=this.dstk.get("renlinear");
		this.stk[this.ptr++]=t;
		var t158=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t158.call(this)==-1) return -1;
		}
	}
	function $f71(){
	}
	function $f72(){
	}
	function $f73(){
	}
	function $f74(){
	}
	function $f75(){
	}
	function $f76(){
	}
	function $f77(){
		//#line 4877: top i get {0} repeat
		this.stk[this.ptr++]=0;
	}
	function $f78(){
		//#line 4878: top i 1 add get {1} repeat
		this.stk[this.ptr++]=1;
	}
	function $f79(){
		//#line 4876: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4877: top i get {0} repeat
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f77;
		var t179=this.stk[--this.ptr];
		var t177=this.stk[--this.ptr];
		for (var t178=0; t178<t177; t178++) {
			if (t179.call(this)==-1) break;
		}
		//#line 4878: top i 1 add get {1} repeat
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f78;
		var t182=this.stk[--this.ptr];
		var t180=this.stk[--this.ptr];
		for (var t181=0; t181<t180; t181++) {
			if (t182.call(this)==-1) break;
		}
	}
	function $f80(){
		//#line 4883: bot i get {1} repeat
		this.stk[this.ptr++]=1;
	}
	function $f81(){
		//#line 4884: bot i 1 add get {0} repeat
		this.stk[this.ptr++]=0;
	}
	function $f82(){
		//#line 4882: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4883: bot i get {1} repeat
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f80;
		var t190=this.stk[--this.ptr];
		var t188=this.stk[--this.ptr];
		for (var t189=0; t189<t188; t189++) {
			if (t190.call(this)==-1) break;
		}
		//#line 4884: bot i 1 add get {0} repeat
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f81;
		var t193=this.stk[--this.ptr];
		var t191=this.stk[--this.ptr];
		for (var t192=0; t192<t191; t192++) {
			if (t193.call(this)==-1) break;
		}
	}
	function $f83(){
		//#line 4890: /sep [ 50 {0} repeat ] def
		this.stk[this.ptr++]=0;
	}
	function $f84(){
		//#line 4894: sep i 1 top i get sub put
		var t=this.dstk.get("sep");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f85(){
		//#line 4896: sep i 1 sep i 1 sub get sub put
		var t=this.dstk.get("sep");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("sep");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f86(){
		//#line 4892: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4893: top i get bot i get eq {
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f84;
		//#line 4895: } {
		this.stk[this.ptr++]=$f85;
		//#line 4897: } ifelse
		var t202=this.stk[--this.ptr];
		var t203=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t203.call(this)==-1) return -1;
		} else {
			if (t202.call(this)==-1) return -1;
		}
	}
	function $f87(){
		//#line 4900: 5 {top aload pop} repeat
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f88(){
		//#line 4902: 7 {bot aload pop} repeat
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f89(){
		//#line 4890: /sep [ 50 {0} repeat ] def
		this.stk[this.ptr++]="sep";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=50;
		this.stk[this.ptr++]=$f83;
		var t201=this.stk[--this.ptr];
		var t199=this.stk[--this.ptr];
		for (var t200=0; t200<t199; t200++) {
			if (t201.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4891: 4 1 45 {
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=45;
		this.stk[this.ptr++]=$f86;
		//#line 4898: } for
		var t208=this.stk[--this.ptr];
		var t206=this.stk[--this.ptr];
		var t205=this.stk[--this.ptr];
		var t204=this.stk[--this.ptr];
		for (var t207=t204; t205<0 ? t207>=t206 : t207<=t206; t207+=t205) {
			this.stk[this.ptr++]=t207;
			if (t208.call(this)==-1) break;
		}
		//#line 4899: /pixs [
		this.stk[this.ptr++]="pixs";
		this.stk[this.ptr++]=Infinity;
		//#line 4900: 5 {top aload pop} repeat
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=$f87;
		var t211=this.stk[--this.ptr];
		var t209=this.stk[--this.ptr];
		for (var t210=0; t210<t209; t210++) {
			if (t211.call(this)==-1) break;
		}
		//#line 4901: sep aload pop
		var t=this.dstk.get("sep");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		//#line 4902: 7 {bot aload pop} repeat
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=$f88;
		var t214=this.stk[--this.ptr];
		var t212=this.stk[--this.ptr];
		for (var t213=0; t213<t212; t213++) {
			if (t214.call(this)==-1) break;
		}
		//#line 4903: ] def
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4904: /pixy pixs length 50 idiv def
		this.stk[this.ptr++]="pixy";
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=50;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f90(){
		//#line 4909: /sep1 [ top {1 exch sub} forall ] def
		this.stk[this.ptr++]=1;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f91(){
		//#line 4916: 1
		this.stk[this.ptr++]=1;
	}
	function $f92(){
		//#line 4918: sep1 i 1 sub get 0 eq {1} {0} ifelse
		this.stk[this.ptr++]=1;
	}
	function $f93(){
		//#line 4918: sep1 i 1 sub get 0 eq {1} {0} ifelse
		this.stk[this.ptr++]=0;
	}
	function $f94(){
		//#line 4918: sep1 i 1 sub get 0 eq {1} {0} ifelse
		var t=this.dstk.get("sep1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f92;
		this.stk[this.ptr++]=$f93;
		var t219=this.stk[--this.ptr];
		var t220=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t220.call(this)==-1) return -1;
		} else {
			if (t219.call(this)==-1) return -1;
		}
	}
	function $f95(){
		//#line 4915: top i 1 sub get 1 eq {
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f91;
		//#line 4917: } {
		this.stk[this.ptr++]=$f94;
		//#line 4919: } ifelse
		var t221=this.stk[--this.ptr];
		var t222=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t222.call(this)==-1) return -1;
		} else {
			if (t221.call(this)==-1) return -1;
		}
	}
	function $f96(){
		//#line 4921: 0
		this.stk[this.ptr++]=0;
	}
	function $f97(){
		//#line 4913: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4914: top i get 0 eq {
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f95;
		//#line 4920: } {
		this.stk[this.ptr++]=$f96;
		//#line 4922: } ifelse
		var t223=this.stk[--this.ptr];
		var t224=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t224.call(this)==-1) return -1;
		} else {
			if (t223.call(this)==-1) return -1;
		}
		//#line 4923: sep1 exch i exch put
		var t=this.dstk.get("sep1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f98(){
		//#line 4925: /sep2 [ 0 0 0 0 21 { 0 1 } repeat 0 0 0 0 ] def
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
	}
	function $f99(){
		//#line 4926: /sep3 [ bot {1 exch sub} forall ] def
		this.stk[this.ptr++]=1;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f100(){
		//#line 4933: 1
		this.stk[this.ptr++]=1;
	}
	function $f101(){
		//#line 4935: sep3 i 1 sub get 0 eq {1} {0} ifelse
		this.stk[this.ptr++]=1;
	}
	function $f102(){
		//#line 4935: sep3 i 1 sub get 0 eq {1} {0} ifelse
		this.stk[this.ptr++]=0;
	}
	function $f103(){
		//#line 4935: sep3 i 1 sub get 0 eq {1} {0} ifelse
		var t=this.dstk.get("sep3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f101;
		this.stk[this.ptr++]=$f102;
		var t236=this.stk[--this.ptr];
		var t237=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t237.call(this)==-1) return -1;
		} else {
			if (t236.call(this)==-1) return -1;
		}
	}
	function $f104(){
		//#line 4932: bot i 1 sub get 1 eq {
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f100;
		//#line 4934: } {
		this.stk[this.ptr++]=$f103;
		//#line 4936: } ifelse
		var t238=this.stk[--this.ptr];
		var t239=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t239.call(this)==-1) return -1;
		} else {
			if (t238.call(this)==-1) return -1;
		}
	}
	function $f105(){
		//#line 4938: 0
		this.stk[this.ptr++]=0;
	}
	function $f106(){
		//#line 4930: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4931: bot i get 0 eq {
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f104;
		//#line 4937: } {
		this.stk[this.ptr++]=$f105;
		//#line 4939: } ifelse
		var t240=this.stk[--this.ptr];
		var t241=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t241.call(this)==-1) return -1;
		} else {
			if (t240.call(this)==-1) return -1;
		}
		//#line 4940: sep3 exch i exch put
		var t=this.dstk.get("sep3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f107(){
		//#line 4943: true 0 1 12 {dup bot exch 19 add get exch f3 exch get eq and} for {
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=19;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("f3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f108(){
		//#line 4945: sep3 19 [ 0 0 0 0 0 0 0 0 0 0 1 0 0 ] putinterval
		var t=this.dstk.get("sep3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=19;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0,0,0,0,0,0,0,1,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f109(){
		//#line 4948: 33 {top aload pop} repeat
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f110(){
		//#line 4952: 33 {bot aload pop} repeat
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f111(){
		//#line 4909: /sep1 [ top {1 exch sub} forall ] def
		this.stk[this.ptr++]="sep1";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("top");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f90;
		var t218=this.stk[--this.ptr];
		var t217=this.stk[--this.ptr];
		for (t216 in t217) {
			if (t217 instanceof BWIPJS.psstring || t217 instanceof BWIPJS.psarray) {
				if (t216.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t217.get(t216);
			} else {
				this.stk[this.ptr++]=t216;
				this.stk[this.ptr++]=t217[t216];
			}
			if (t218.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4910: sep1 0  [ 0 0 0 0 ] putinterval
		var t=this.dstk.get("sep1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 4911: sep1 46 [ 0 0 0 0 ] putinterval
		var t=this.dstk.get("sep1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=46;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 4912: 18 1 30 {
		this.stk[this.ptr++]=18;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr++]=$f97;
		//#line 4924: } for
		var t229=this.stk[--this.ptr];
		var t227=this.stk[--this.ptr];
		var t226=this.stk[--this.ptr];
		var t225=this.stk[--this.ptr];
		for (var t228=t225; t226<0 ? t228>=t227 : t228<=t227; t228+=t226) {
			this.stk[this.ptr++]=t228;
			if (t229.call(this)==-1) break;
		}
		//#line 4925: /sep2 [ 0 0 0 0 21 { 0 1 } repeat 0 0 0 0 ] def
		this.stk[this.ptr++]="sep2";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=21;
		this.stk[this.ptr++]=$f98;
		var t232=this.stk[--this.ptr];
		var t230=this.stk[--this.ptr];
		for (var t231=0; t231<t230; t231++) {
			if (t232.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4926: /sep3 [ bot {1 exch sub} forall ] def
		this.stk[this.ptr++]="sep3";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("bot");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f99;
		var t235=this.stk[--this.ptr];
		var t234=this.stk[--this.ptr];
		for (t233 in t234) {
			if (t234 instanceof BWIPJS.psstring || t234 instanceof BWIPJS.psarray) {
				if (t233.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t234.get(t233);
			} else {
				this.stk[this.ptr++]=t233;
				this.stk[this.ptr++]=t234[t233];
			}
			if (t235.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4927: sep3 0  [ 0 0 0 0 ] putinterval
		var t=this.dstk.get("sep3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 4928: sep3 46 [ 0 0 0 0 ] putinterval
		var t=this.dstk.get("sep3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=46;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 4929: 19 1 31 {
		this.stk[this.ptr++]=19;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=31;
		this.stk[this.ptr++]=$f106;
		//#line 4941: } for
		var t246=this.stk[--this.ptr];
		var t244=this.stk[--this.ptr];
		var t243=this.stk[--this.ptr];
		var t242=this.stk[--this.ptr];
		for (var t245=t242; t243<0 ? t245>=t244 : t245<=t244; t245+=t243) {
			this.stk[this.ptr++]=t245;
			if (t246.call(this)==-1) break;
		}
		//#line 4942: /f3 [1 1 1 1 1 1 1 1 1 0 1 1 1] def
		this.stk[this.ptr++]="f3";
		this.stk[this.ptr++]=BWIPJS.psarray([1,1,1,1,1,1,1,1,1,0,1,1,1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4943: true 0 1 12 {dup bot exch 19 add get exch f3 exch get eq and} for {
		this.stk[this.ptr++]=true;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr++]=$f107;
		var t251=this.stk[--this.ptr];
		var t249=this.stk[--this.ptr];
		var t248=this.stk[--this.ptr];
		var t247=this.stk[--this.ptr];
		for (var t250=t247; t248<0 ? t250>=t249 : t250<=t249; t250+=t248) {
			this.stk[this.ptr++]=t250;
			if (t251.call(this)==-1) break;
		}
		this.stk[this.ptr++]=$f108;
		//#line 4946: } if
		var t252=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t252.call(this)==-1) return -1;
		}
		//#line 4947: /pixs [
		this.stk[this.ptr++]="pixs";
		this.stk[this.ptr++]=Infinity;
		//#line 4948: 33 {top aload pop} repeat
		this.stk[this.ptr++]=33;
		this.stk[this.ptr++]=$f109;
		var t255=this.stk[--this.ptr];
		var t253=this.stk[--this.ptr];
		for (var t254=0; t254<t253; t254++) {
			if (t255.call(this)==-1) break;
		}
		//#line 4949: sep1 aload pop
		var t=this.dstk.get("sep1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		//#line 4950: sep2 aload pop
		var t=this.dstk.get("sep2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		//#line 4951: sep3 aload pop
		var t=this.dstk.get("sep3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		//#line 4952: 33 {bot aload pop} repeat
		this.stk[this.ptr++]=33;
		this.stk[this.ptr++]=$f110;
		var t258=this.stk[--this.ptr];
		var t256=this.stk[--this.ptr];
		for (var t257=0; t257<t256; t257++) {
			if (t258.call(this)==-1) break;
		}
		//#line 4953: ] def
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4954: /pixy pixs length 50 idiv def
		this.stk[this.ptr++]="pixy";
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=50;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f112(){
		//#line 4873: /top [ 1 1 d1w {} forall checklt {} forall d2w {} forall 1 1 0 ] def
		this.stk[this.ptr++]="top";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("d1w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f71;
		var t161=this.stk[--this.ptr];
		var t160=this.stk[--this.ptr];
		for (t159 in t160) {
			if (t160 instanceof BWIPJS.psstring || t160 instanceof BWIPJS.psarray) {
				if (t159.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t160.get(t159);
			} else {
				this.stk[this.ptr++]=t159;
				this.stk[this.ptr++]=t160[t159];
			}
			if (t161.call(this)==-1) break;
		}
		var t=this.dstk.get("checklt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f72;
		var t164=this.stk[--this.ptr];
		var t163=this.stk[--this.ptr];
		for (t162 in t163) {
			if (t163 instanceof BWIPJS.psstring || t163 instanceof BWIPJS.psarray) {
				if (t162.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t163.get(t162);
			} else {
				this.stk[this.ptr++]=t162;
				this.stk[this.ptr++]=t163[t162];
			}
			if (t164.call(this)==-1) break;
		}
		var t=this.dstk.get("d2w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f73;
		var t167=this.stk[--this.ptr];
		var t166=this.stk[--this.ptr];
		for (t165 in t166) {
			if (t166 instanceof BWIPJS.psstring || t166 instanceof BWIPJS.psarray) {
				if (t165.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t166.get(t165);
			} else {
				this.stk[this.ptr++]=t165;
				this.stk[this.ptr++]=t166[t165];
			}
			if (t167.call(this)==-1) break;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4874: /bot [ 1 1 d4w {} forall checkrt {} forall d3w {} forall 1 1 0 ] def 
		this.stk[this.ptr++]="bot";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("d4w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f74;
		var t170=this.stk[--this.ptr];
		var t169=this.stk[--this.ptr];
		for (t168 in t169) {
			if (t169 instanceof BWIPJS.psstring || t169 instanceof BWIPJS.psarray) {
				if (t168.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t169.get(t168);
			} else {
				this.stk[this.ptr++]=t168;
				this.stk[this.ptr++]=t169[t168];
			}
			if (t170.call(this)==-1) break;
		}
		var t=this.dstk.get("checkrt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f75;
		var t173=this.stk[--this.ptr];
		var t172=this.stk[--this.ptr];
		for (t171 in t172) {
			if (t172 instanceof BWIPJS.psstring || t172 instanceof BWIPJS.psarray) {
				if (t171.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t172.get(t171);
			} else {
				this.stk[this.ptr++]=t171;
				this.stk[this.ptr++]=t172[t171];
			}
			if (t173.call(this)==-1) break;
		}
		var t=this.dstk.get("d3w");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f76;
		var t176=this.stk[--this.ptr];
		var t175=this.stk[--this.ptr];
		for (t174 in t175) {
			if (t175 instanceof BWIPJS.psstring || t175 instanceof BWIPJS.psarray) {
				if (t174.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t175.get(t174);
			} else {
				this.stk[this.ptr++]=t174;
				this.stk[this.ptr++]=t175[t174];
			}
			if (t176.call(this)==-1) break;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4875: 0 2 24 {
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=24;
		this.stk[this.ptr++]=$f79;
		//#line 4879: } for
		var t187=this.stk[--this.ptr];
		var t185=this.stk[--this.ptr];
		var t184=this.stk[--this.ptr];
		var t183=this.stk[--this.ptr];
		for (var t186=t183; t184<0 ? t186>=t185 : t186<=t185; t186+=t184) {
			this.stk[this.ptr++]=t186;
			if (t187.call(this)==-1) break;
		}
		//#line 4880: 50 array astore /top exch def 
		this.stk[this.ptr++]=50;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.stk[this.ptr++]="top";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4881: 0 2 24 {
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=24;
		this.stk[this.ptr++]=$f82;
		//#line 4885: } for
		var t198=this.stk[--this.ptr];
		var t196=this.stk[--this.ptr];
		var t195=this.stk[--this.ptr];
		var t194=this.stk[--this.ptr];
		for (var t197=t194; t195<0 ? t197>=t196 : t197<=t196; t197+=t195) {
			this.stk[this.ptr++]=t197;
			if (t198.call(this)==-1) break;
		}
		//#line 4886: 50 array astore /bot exch def
		this.stk[this.ptr++]=50;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.stk[this.ptr++]="bot";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 4889: format (stacked) eq {
		var t=this.dstk.get("format");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("stacked");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f89;
		//#line 4905: } if
		var t215=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t215.call(this)==-1) return -1;
		}
		//#line 4908: format (stackedomni) eq {
		var t=this.dstk.get("format");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("stackedomni");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f111;
		//#line 4955: } if
		var t259=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t259.call(this)==-1) return -1;
		}
		//#line 4958: <<
		this.stk[this.ptr++]=Infinity;
		//#line 4959: /ren //renmatrix
		this.stk[this.ptr++]="ren";
		var t=this.dstk.get("renmatrix");
		this.stk[this.ptr++]=t;
		//#line 4960: /pixs pixs
		this.stk[this.ptr++]="pixs";
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 4961: /pixx 50
		this.stk[this.ptr++]="pixx";
		this.stk[this.ptr++]=50;
		//#line 4962: /pixy pixy
		this.stk[this.ptr++]="pixy";
		var t=this.dstk.get("pixy");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 4963: /height pixy 72 div
		this.stk[this.ptr++]="height";
		var t=this.dstk.get("pixy");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		//#line 4964: /width 50 72 div
		this.stk[this.ptr++]="width";
		this.stk[this.ptr++]=50;
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		//#line 4965: /opt options
		this.stk[this.ptr++]="opt";
		var t=this.dstk.get("options");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		//#line 4966: >>
		var t = {};
		for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
			if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
			t[this.stk[i-1]]=this.stk[i];
		}
		if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
		this.ptr = i;
		this.stk[this.ptr++]=t;
		//#line 4968: dontdraw not //renmatrix if
		var t=this.dstk.get("dontdraw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		var t=this.dstk.get("renmatrix");
		this.stk[this.ptr++]=t;
		var t260=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t260.call(this)==-1) return -1;
		}
	}
	//#line 4568: 20 dict begin            % Confine variables to local scope
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	//#line 4570: /options exch def  % We are given an option string
	this.stk[this.ptr++]="options";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4571: /barcode exch def  % We are given a barcode string
	this.stk[this.ptr++]="barcode";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4573: /dontdraw false def
	this.stk[this.ptr++]="dontdraw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4574: /height 33 72 div def
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=33;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4575: /linkage false def
	this.stk[this.ptr++]="linkage";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4576: /format (omni) def
	this.stk[this.ptr++]="format";
	this.stk[this.ptr++]=BWIPJS.psstring("omni");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4579: options type /stringtype eq {
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype";
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f4;
	//#line 4586: } if
	var t4=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t4.call(this)==-1) return -1;
	}
	//#line 4587: options {def} forall
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
	//#line 4589: format (truncated) eq {/height 13 72 div def} if
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("truncated");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f6;
	var t8=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t8.call(this)==-1) return -1;
	}
	//#line 4590: /height height cvr def
	this.stk[this.ptr++]="height";
	var t=this.dstk.get("height");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4593: barcode 0 4 getinterval (\(01\)) ne {
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=BWIPJS.psstring("(01)");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f7;
	//#line 4595: } if
	var t9=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t9.call(this)==-1) return -1;
	}
	//#line 4596: barcode length 17 ne barcode length 18 ne and {
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=17;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=18;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f8;
	//#line 4598: } if
	var t10=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t10.call(this)==-1) return -1;
	}
	//#line 4599: barcode 4 barcode length 4 sub getinterval {
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f10;
	//#line 4603: } forall
	var t14=this.stk[--this.ptr];
	var t13=this.stk[--this.ptr];
	for (t12 in t13) {
		if (t13 instanceof BWIPJS.psstring || t13 instanceof BWIPJS.psarray) {
			if (t12.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t13.get(t12);
		} else {
			this.stk[this.ptr++]=t12;
			this.stk[this.ptr++]=t13[t12];
		}
		if (t14.call(this)==-1) break;
	}
	//#line 4606: /checksum 0 def
	this.stk[this.ptr++]="checksum";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4607: 0 1 12 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=12;
	this.stk[this.ptr++]=$f12;
	//#line 4610: } for
	var t20=this.stk[--this.ptr];
	var t18=this.stk[--this.ptr];
	var t17=this.stk[--this.ptr];
	var t16=this.stk[--this.ptr];
	for (var t19=t16; t17<0 ? t19>=t18 : t19<=t18; t19+=t17) {
		this.stk[this.ptr++]=t19;
		if (t20.call(this)==-1) break;
	}
	//#line 4611: /checksum 10 checksum 10 mod sub 10 mod def
	this.stk[this.ptr++]="checksum";
	this.stk[this.ptr++]=10;
	var t=this.dstk.get("checksum");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=10;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=10;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4612: barcode length 18 eq {
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=18;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f14;
	//#line 4616: } if
	var t22=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t22.call(this)==-1) return -1;
	}
	//#line 4617: 18 string
	this.stk[this.ptr++]=18;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	//#line 4618: dup 0 barcode putinterval
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	//#line 4619: dup 17 checksum 48 add put
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=17;
	var t=this.dstk.get("checksum");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	//#line 4620: /barcode exch def
	this.stk[this.ptr++]="barcode";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4623: /txt barcode length array def
	this.stk[this.ptr++]="txt";
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4624: 0 1 barcode length 1 sub {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f15;
	//#line 4627: } for
	var t27=this.stk[--this.ptr];
	var t25=this.stk[--this.ptr];
	var t24=this.stk[--this.ptr];
	var t23=this.stk[--this.ptr];
	for (var t26=t23; t24<0 ? t26>=t25 : t26<=t25; t26+=t24) {
		this.stk[this.ptr++]=t26;
		if (t27.call(this)==-1) break;
	}
	//#line 4629: /ncr {  % n r
	this.stk[this.ptr++]="ncr";
	this.stk[this.ptr++]=$f21;
	//#line 4643: } bind def
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4645: /getRSSwidths {
	this.stk[this.ptr++]="getRSSwidths";
	this.stk[this.ptr++]=$f30;
	//#line 4682: } bind def
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4684: /binval [ 
	this.stk[this.ptr++]="binval";
	this.stk[this.ptr++]=Infinity;
	//#line 4685: linkage {1} {0} ifelse
	var t=this.dstk.get("linkage");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f31;
	this.stk[this.ptr++]=$f32;
	var t53=this.stk[--this.ptr];
	var t54=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t54.call(this)==-1) return -1;
	} else {
		if (t53.call(this)==-1) return -1;
	}
	//#line 4686: barcode 4 13 getinterval {48 sub} forall
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=13;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f33;
	var t57=this.stk[--this.ptr];
	var t56=this.stk[--this.ptr];
	for (t55 in t56) {
		if (t56 instanceof BWIPJS.psstring || t56 instanceof BWIPJS.psarray) {
			if (t55.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t56.get(t55);
		} else {
			this.stk[this.ptr++]=t55;
			this.stk[this.ptr++]=t56[t55];
		}
		if (t57.call(this)==-1) break;
	}
	//#line 4687: ] def
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4689: 0 1 12 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=12;
	this.stk[this.ptr++]=$f34;
	//#line 4693: } for
	var t62=this.stk[--this.ptr];
	var t60=this.stk[--this.ptr];
	var t59=this.stk[--this.ptr];
	var t58=this.stk[--this.ptr];
	for (var t61=t58; t59<0 ? t61>=t60 : t61<=t60; t61+=t59) {
		this.stk[this.ptr++]=t61;
		if (t62.call(this)==-1) break;
	}
	//#line 4694: /right binval 13 get 4537077 mod def
	this.stk[this.ptr++]="right";
	var t=this.dstk.get("binval");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=13;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr++]=4537077;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4695: binval 13 2 copy get 4537077 idiv put
	var t=this.dstk.get("binval");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=13;
	this.stk[this.ptr++]=2;
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
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr++]=4537077;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	//#line 4697: /left 0 def
	this.stk[this.ptr++]="left";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4698: /i true def
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=true;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4699: 0 1 13 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=13;
	this.stk[this.ptr++]=$f37;
	//#line 4708: } for
	var t69=this.stk[--this.ptr];
	var t67=this.stk[--this.ptr];
	var t66=this.stk[--this.ptr];
	var t65=this.stk[--this.ptr];
	for (var t68=t65; t66<0 ? t68>=t67 : t68<=t67; t68+=t66) {
		this.stk[this.ptr++]=t68;
		if (t69.call(this)==-1) break;
	}
	//#line 4710: /d1 left 1597 idiv def
	this.stk[this.ptr++]="d1";
	var t=this.dstk.get("left");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1597;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4711: /d2 left 1597 mod def
	this.stk[this.ptr++]="d2";
	var t=this.dstk.get("left");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1597;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4712: /d3 right 1597 idiv def
	this.stk[this.ptr++]="d3";
	var t=this.dstk.get("right");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1597;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4713: /d4 right 1597 mod def
	this.stk[this.ptr++]="d4";
	var t=this.dstk.get("right");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1597;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4715: /tab164 [
	this.stk[this.ptr++]="tab164";
	this.stk[this.ptr++]=BWIPJS.psarray([160,0,12,4,8,1,161,1,960,161,10,6,6,3,80,10,2014,961,8,8,4,5,31,34,2714,2015,6,10,3,6,10,70,2840,2715,4,12,1,8,1,126]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4723: /tab154 [
	this.stk[this.ptr++]="tab154";
	this.stk[this.ptr++]=BWIPJS.psarray([335,0,5,10,2,7,4,84,1035,336,7,8,4,5,20,35,1515,1036,9,6,6,3,48,10,1596,1516,11,4,8,1,81,1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4730: /i 0 def {
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f40;
	//#line 4740: } loop
	var t74=this.stk[--this.ptr];
	while (true) {
		if (t74.call(this)==-1) break;
	}
	//#line 4742: /i 0 def {
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f43;
	//#line 4752: } loop
	var t79=this.stk[--this.ptr];
	while (true) {
		if (t79.call(this)==-1) break;
	}
	//#line 4754: /i 0 def {
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f46;
	//#line 4764: } loop
	var t84=this.stk[--this.ptr];
	while (true) {
		if (t84.call(this)==-1) break;
	}
	//#line 4766: /i 0 def {
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f49;
	//#line 4776: } loop
	var t89=this.stk[--this.ptr];
	while (true) {
		if (t89.call(this)==-1) break;
	}
	//#line 4778: /d1wo d1 d1gs sub d1te idiv d1elo d1mwo 4 false getRSSwidths def
	this.stk[this.ptr++]="d1wo";
	var t=this.dstk.get("d1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d1gs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d1te");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.dstk.get("d1elo");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d1mwo");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=false;
	var t=this.dstk.get("getRSSwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4779: /d1we d1 d1gs sub d1te mod  d1ele d1mwe 4 true  getRSSwidths def
	this.stk[this.ptr++]="d1we";
	var t=this.dstk.get("d1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d1gs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d1te");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d1ele");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d1mwe");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=true;
	var t=this.dstk.get("getRSSwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4780: /d2wo d2 d2gs sub d2to mod  d2elo d2mwo 4 true  getRSSwidths def
	this.stk[this.ptr++]="d2wo";
	var t=this.dstk.get("d2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d2gs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d2to");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d2elo");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d2mwo");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=true;
	var t=this.dstk.get("getRSSwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4781: /d2we d2 d2gs sub d2to idiv d2ele d2mwe 4 false getRSSwidths def
	this.stk[this.ptr++]="d2we";
	var t=this.dstk.get("d2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d2gs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d2to");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.dstk.get("d2ele");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d2mwe");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=false;
	var t=this.dstk.get("getRSSwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4782: /d3wo d3 d3gs sub d3te idiv d3elo d3mwo 4 false getRSSwidths def
	this.stk[this.ptr++]="d3wo";
	var t=this.dstk.get("d3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d3gs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d3te");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.dstk.get("d3elo");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d3mwo");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=false;
	var t=this.dstk.get("getRSSwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4783: /d3we d3 d3gs sub d3te mod  d3ele d3mwe 4 true  getRSSwidths def
	this.stk[this.ptr++]="d3we";
	var t=this.dstk.get("d3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d3gs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d3te");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d3ele");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d3mwe");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=true;
	var t=this.dstk.get("getRSSwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4784: /d4wo d4 d4gs sub d4to mod  d4elo d4mwo 4 true  getRSSwidths def
	this.stk[this.ptr++]="d4wo";
	var t=this.dstk.get("d4");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d4gs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d4to");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d4elo");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d4mwo");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=true;
	var t=this.dstk.get("getRSSwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4785: /d4we d4 d4gs sub d4to idiv d4ele d4mwe 4 false getRSSwidths def
	this.stk[this.ptr++]="d4we";
	var t=this.dstk.get("d4");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d4gs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("d4to");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.dstk.get("d4ele");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("d4mwe");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=false;
	var t=this.dstk.get("getRSSwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4787: /d1w 8 array def
	this.stk[this.ptr++]="d1w";
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4788: 0 1 3 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=$f50;
	//#line 4792: } for
	var t94=this.stk[--this.ptr];
	var t92=this.stk[--this.ptr];
	var t91=this.stk[--this.ptr];
	var t90=this.stk[--this.ptr];
	for (var t93=t90; t91<0 ? t93>=t92 : t93<=t92; t93+=t91) {
		this.stk[this.ptr++]=t93;
		if (t94.call(this)==-1) break;
	}
	//#line 4794: /d2w 8 array def
	this.stk[this.ptr++]="d2w";
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4795: 0 1 3 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=$f51;
	//#line 4799: } for
	var t99=this.stk[--this.ptr];
	var t97=this.stk[--this.ptr];
	var t96=this.stk[--this.ptr];
	var t95=this.stk[--this.ptr];
	for (var t98=t95; t96<0 ? t98>=t97 : t98<=t97; t98+=t96) {
		this.stk[this.ptr++]=t98;
		if (t99.call(this)==-1) break;
	}
	//#line 4801: /d3w 8 array def
	this.stk[this.ptr++]="d3w";
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4802: 0 1 3 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=$f52;
	//#line 4806: } for
	var t104=this.stk[--this.ptr];
	var t102=this.stk[--this.ptr];
	var t101=this.stk[--this.ptr];
	var t100=this.stk[--this.ptr];
	for (var t103=t100; t101<0 ? t103>=t102 : t103<=t102; t103+=t101) {
		this.stk[this.ptr++]=t103;
		if (t104.call(this)==-1) break;
	}
	//#line 4808: /d4w 8 array def
	this.stk[this.ptr++]="d4w";
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4809: 0 1 3 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=$f53;
	//#line 4813: } for
	var t109=this.stk[--this.ptr];
	var t107=this.stk[--this.ptr];
	var t106=this.stk[--this.ptr];
	var t105=this.stk[--this.ptr];
	for (var t108=t105; t106<0 ? t108>=t107 : t108<=t107; t108+=t106) {
		this.stk[this.ptr++]=t108;
		if (t109.call(this)==-1) break;
	}
	//#line 4815: /widths [
	this.stk[this.ptr++]="widths";
	this.stk[this.ptr++]=Infinity;
	//#line 4816: d1w {} forall
	var t=this.dstk.get("d1w");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f54;
	var t112=this.stk[--this.ptr];
	var t111=this.stk[--this.ptr];
	for (t110 in t111) {
		if (t111 instanceof BWIPJS.psstring || t111 instanceof BWIPJS.psarray) {
			if (t110.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t111.get(t110);
		} else {
			this.stk[this.ptr++]=t110;
			this.stk[this.ptr++]=t111[t110];
		}
		if (t112.call(this)==-1) break;
	}
	//#line 4817: d2w {} forall
	var t=this.dstk.get("d2w");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f55;
	var t115=this.stk[--this.ptr];
	var t114=this.stk[--this.ptr];
	for (t113 in t114) {
		if (t114 instanceof BWIPJS.psstring || t114 instanceof BWIPJS.psarray) {
			if (t113.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t114.get(t113);
		} else {
			this.stk[this.ptr++]=t113;
			this.stk[this.ptr++]=t114[t113];
		}
		if (t115.call(this)==-1) break;
	}
	//#line 4818: d3w {} forall
	var t=this.dstk.get("d3w");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f56;
	var t118=this.stk[--this.ptr];
	var t117=this.stk[--this.ptr];
	for (t116 in t117) {
		if (t117 instanceof BWIPJS.psstring || t117 instanceof BWIPJS.psarray) {
			if (t116.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t117.get(t116);
		} else {
			this.stk[this.ptr++]=t116;
			this.stk[this.ptr++]=t117[t116];
		}
		if (t118.call(this)==-1) break;
	}
	//#line 4819: d4w {} forall
	var t=this.dstk.get("d4w");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f57;
	var t121=this.stk[--this.ptr];
	var t120=this.stk[--this.ptr];
	for (t119 in t120) {
		if (t120 instanceof BWIPJS.psstring || t120 instanceof BWIPJS.psarray) {
			if (t119.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t120.get(t119);
		} else {
			this.stk[this.ptr++]=t119;
			this.stk[this.ptr++]=t120[t119];
		}
		if (t121.call(this)==-1) break;
	}
	//#line 4820: ] def
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4822: /checkweights [
	this.stk[this.ptr++]="checkweights";
	this.stk[this.ptr++]=BWIPJS.psarray([1,3,9,27,2,6,18,54,58,72,24,8,29,36,12,4,74,51,17,32,37,65,48,16,64,34,23,69,49,68,46,59]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4829: /checkwidths [
	this.stk[this.ptr++]="checkwidths";
	this.stk[this.ptr++]=BWIPJS.psarray([3,8,2,1,1,3,5,5,1,1,3,3,7,1,1,3,1,9,1,1,2,7,4,1,1,2,5,6,1,1,2,3,8,1,1,1,5,7,1,1,1,3,9,1,1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4835: /checksum 0 def
	this.stk[this.ptr++]="checksum";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4836: 0 1 31 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=31;
	this.stk[this.ptr++]=$f58;
	//#line 4839: } for
	var t126=this.stk[--this.ptr];
	var t124=this.stk[--this.ptr];
	var t123=this.stk[--this.ptr];
	var t122=this.stk[--this.ptr];
	for (var t125=t122; t123<0 ? t125>=t124 : t125<=t124; t125+=t123) {
		this.stk[this.ptr++]=t125;
		if (t126.call(this)==-1) break;
	}
	//#line 4840: /checksum checksum 79 mod def    
	this.stk[this.ptr++]="checksum";
	var t=this.dstk.get("checksum");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=79;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4841: checksum 8 ge {/checksum checksum 1 add def} if
	var t=this.dstk.get("checksum");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f59;
	var t127=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t127.call(this)==-1) return -1;
	}
	//#line 4842: checksum 72 ge {/checksum checksum 1 add def} if
	var t=this.dstk.get("checksum");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f60;
	var t128=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t128.call(this)==-1) return -1;
	}
	//#line 4843: /checklt checkwidths checksum 9 idiv 5 mul 5 getinterval def
	this.stk[this.ptr++]="checklt";
	var t=this.dstk.get("checkwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("checksum");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=9;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4844: /checkrtrev checkwidths checksum 9 mod 5 mul 5 getinterval def
	this.stk[this.ptr++]="checkrtrev";
	var t=this.dstk.get("checkwidths");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("checksum");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=9;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4845: /checkrt 5 array def
	this.stk[this.ptr++]="checkrt";
	this.stk[this.ptr++]=5;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 4846: 0 1 4 {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=$f61;
	//#line 4849: } for
	var t133=this.stk[--this.ptr];
	var t131=this.stk[--this.ptr];
	var t130=this.stk[--this.ptr];
	var t129=this.stk[--this.ptr];
	for (var t132=t129; t130<0 ? t132>=t131 : t132<=t131; t132+=t130) {
		this.stk[this.ptr++]=t132;
		if (t133.call(this)==-1) break;
	}
	//#line 4852: format (omni) eq format (truncated) eq or {  % linear
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("omni");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("truncated");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f70;
	//#line 4871: } {  % 2D - stacked or stackedomni
	this.stk[this.ptr++]=$f112;
	//#line 4970: } ifelse
	var t261=this.stk[--this.ptr];
	var t262=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t262.call(this)==-1) return -1;
	} else {
		if (t261.call(this)==-1) return -1;
	}
	//#line 4972: end
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("databaromni");
// END OF databaromni

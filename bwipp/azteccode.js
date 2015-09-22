// file: bwipp/azteccode.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-08-10
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN azteccode
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("azteccode", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("azteccode", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
BWIPJS.bwipp["azteccode"]=function() {
	function $f0(){
		return -1;
	}
	function $f1(){
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
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
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]={};
		this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
		var t=this.dstk.get("options");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f3;
		var t3=this.stk[--this.ptr];
		while (true) {
			if (t3.call(this)==-1) break;
		}
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
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
		this.ptr--;
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
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f7(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="barcode";
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f8(){
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
		this.stk[this.ptr++]=$f6;
		this.stk[this.ptr++]=$f7;
		var t8=this.stk[--this.ptr];
		var t9=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t9.call(this)==-1) return -1;
		} else {
			if (t8.call(this)==-1) return -1;
		}
	}
	function $f9(){
		this.stk[this.ptr++]="msg";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f8;
		var t10=this.stk[--this.ptr];
		while (true) {
			if (t10.call(this)==-1) break;
		}
	}
	function $f10(){
		this.stk[this.ptr++]="msgbits";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f11(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f12(){
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
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
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f13(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encs";
		var t=this.dstk.get("charmaps");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=$f12;
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
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f15(){
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f16(){
		this.stk[this.ptr++]="backto";
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("D");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f14;
		this.stk[this.ptr++]=$f15;
		var t24=this.stk[--this.ptr];
		var t25=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t25.call(this)==-1) return -1;
		} else {
			if (t24.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f17(){
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cost");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("curseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("curseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.dstk.get("latseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f16;
		var t26=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t26.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="imp";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f18(){
		this.stk[this.ptr++]="cost";
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("latlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cost");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f17;
		var t27=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t27.call(this)==-1) return -1;
		}
	}
	function $f19(){
		this.stk[this.ptr++]="y";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("backto");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f18;
		var t28=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t28.call(this)==-1) return -1;
		}
	}
	function $f20(){
		this.stk[this.ptr++]="x";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("L");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("M");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("D");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f19;
		var t31=this.stk[--this.ptr];//forall
		var t30=this.stk[--this.ptr];
		for (var t29 in t30) {
			if (t30 instanceof BWIPJS.psstring || t30 instanceof BWIPJS.psarray) {
				if (t29.charCodeAt(0) > 57) continue;
			} else {
				if (t29.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t29.substr(1);
				} else {
					this.stk[this.ptr++]=t29;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t30,t29);
			if (t31.call(this)==-1) break;
		}
	}
	function $f21(){
		return -1;
	}
	function $f22(){
		this.stk[this.ptr++]="imp";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("L");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("M");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("D");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f20;
		var t34=this.stk[--this.ptr];//forall
		var t33=this.stk[--this.ptr];
		for (var t32 in t33) {
			if (t33 instanceof BWIPJS.psstring || t33 instanceof BWIPJS.psarray) {
				if (t32.charCodeAt(0) > 57) continue;
			} else {
				if (t32.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t32.substr(1);
				} else {
					this.stk[this.ptr++]=t32;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t33,t32);
			if (t34.call(this)==-1) break;
		}
		var t=this.dstk.get("imp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		this.stk[this.ptr++]=$f21;
		var t35=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t35.call(this)==-1) return -1;
		}
	}
	function $f23(){
		return -1;
	}
	function $f24(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		this.stk[this.ptr++]=$f23;
		var t37=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t37.call(this)==-1) return -1;
		}
	}
	function $f25(){
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cost");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("nxtseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("curseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f26(){
		return -1;
	}
	function $f27(){
		var t=this.dstk.get("su");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f28(){
		var t=this.dstk.get("sp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f29(){
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cost");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("nxtseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("curseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f27;
		this.stk[this.ptr++]=$f28;
		var t41=this.stk[--this.ptr];
		var t42=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t42.call(this)==-1) return -1;
		} else {
			if (t41.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f30(){
		this.stk[this.ptr++]="cost";
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("shftlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("charsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cost");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f29;
		var t43=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t43.call(this)==-1) return -1;
		}
	}
	function $f31(){
		this.stk[this.ptr++]="y";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f30;
		var t44=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t44.call(this)==-1) return -1;
		}
	}
	function $f32(){
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f24;
		var t38=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t38.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cost";
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("charsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cost");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f25;
		var t39=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t39.call(this)==-1) return -1;
		}
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f26;
		var t40=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t40.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("L");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("M");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("D");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f31;
		var t47=this.stk[--this.ptr];//forall
		var t46=this.stk[--this.ptr];
		for (var t45 in t46) {
			if (t46 instanceof BWIPJS.psstring || t46 instanceof BWIPJS.psarray) {
				if (t45.charCodeAt(0) > 57) continue;
			} else {
				if (t45.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t45.substr(1);
				} else {
					this.stk[this.ptr++]=t45;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t46,t45);
			if (t47.call(this)==-1) break;
		}
		return -1;
	}
	function $f33(){
		this.stk[this.ptr++]="x";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f32;
		var t48=this.stk[--this.ptr];
		while (true) {
			if (t48.call(this)==-1) break;
		}
	}
	function $f34(){
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("nxtseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("curseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.ptr--;
		var t=this.dstk.get("pcomp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f35(){
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f34;
		var t52=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t52.call(this)==-1) return -1;
		}
	}
	function $f36(){
		this.stk[this.ptr++]="pchars";
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("lastchar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("pcomp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f35;
		var t53=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t53.call(this)==-1) return -1;
		}
	}
	function $f37(){
		this.stk[this.ptr++]=0;
	}
	function $f38(){
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f39(){
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f37;
		this.stk[this.ptr++]=$f38;
		var t55=this.stk[--this.ptr];
		var t56=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t56.call(this)==-1) return -1;
		} else {
			if (t55.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="numbytes";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f40(){
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f41(){
		this.stk[this.ptr++]="char";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f22;
		var t36=this.stk[--this.ptr];
		while (true) {
			if (t36.call(this)==-1) break;
		}
		this.stk[this.ptr++]="nxtlen";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nxtseq";
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("L");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("M");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("D");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f33;
		var t51=this.stk[--this.ptr];//forall
		var t50=this.stk[--this.ptr];
		for (var t49 in t50) {
			if (t50 instanceof BWIPJS.psstring || t50 instanceof BWIPJS.psarray) {
				if (t49.charCodeAt(0) > 57) continue;
			} else {
				if (t49.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t49.substr(1);
				} else {
					this.stk[this.ptr++]=t49;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t50,t49);
			if (t51.call(this)==-1) break;
		}
		var t=this.dstk.get("lastchar");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f36;
		var t54=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t54.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="numbytes";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("nxtseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f39;
		var t59=this.stk[--this.ptr];//forall
		var t58=this.stk[--this.ptr];
		for (var t57 in t58) {
			if (t58 instanceof BWIPJS.psstring || t58 instanceof BWIPJS.psarray) {
				if (t57.charCodeAt(0) > 57) continue;
			} else {
				if (t57.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t57.substr(1);
				} else {
					this.stk[this.ptr++]=t57;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t58,t57);
			if (t59.call(this)==-1) break;
		}
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=32;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f40;
		var t60=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t60.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="curlen";
		var t=this.dstk.get("nxtlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="curseq";
		var t=this.dstk.get("nxtseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lastchar";
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f42(){
		this.stk[this.ptr++]="minseq";
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seq";
		var t=this.dstk.get("curseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f43(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("curlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("minseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f42;
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		}
	}
	function $f44(){
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f45(){
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f44;
		var t72=this.stk[--this.ptr];
		var t70=this.stk[--this.ptr];
		var t69=this.stk[--this.ptr];
		var t68=this.stk[--this.ptr];
		for (var t71=t68; t69<0 ? t71>=t70 : t71<=t70; t71+=t69) {
			this.stk[this.ptr++]=t71;
			if (t72.call(this)==-1) break;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f46(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f47(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("L");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f48(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("M");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f49(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f50(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("D");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=4;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f51(){
		this.stk[this.ptr++]="v";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("v");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("v");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f52(){
		return -1;
	}
	function $f53(){
		var t=this.dstk.get("encu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f54(){
		var t=this.dstk.get("encp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f55(){
		var t=this.dstk.get("seq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("su");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f53;
		this.stk[this.ptr++]=$f54;
		var t74=this.stk[--this.ptr];
		var t75=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t75.call(this)==-1) return -1;
		} else {
			if (t74.call(this)==-1) return -1;
		}
		var t=this.dstk.get("addtomsgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f56(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f57(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("L");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f58(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("M");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f59(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f60(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("D");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f61(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f62(){
		this.stk[this.ptr++]="char";
		var t=this.dstk.get("seq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encfuncs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("state");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		var t=this.dstk.get("addtomsgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("su");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f55;
		var t76=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t76.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f56;
		var t77=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t77.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f57;
		var t78=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t78.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f58;
		var t79=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t79.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f59;
		var t80=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t80.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ld");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f60;
		var t81=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t81.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f61;
		var t82=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t82.call(this)==-1) return -1;
		}
	}
	function $f63(){
		return -1;
	}
	function $f64(){
		return -1;
	}
	function $f65(){
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("seq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f63;
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		}
		var t=this.dstk.get("seq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f64;
		var t84=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t84.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="numbytes";
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f66(){
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("addtomsgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f67(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("addtomsgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=31;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=11;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("addtomsgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f68(){
		var t=this.dstk.get("seq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=8;
		var t=this.dstk.get("tobin");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("addtomsgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f69(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f70(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("L");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f71(){
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("M");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f72(){
		this.stk[this.ptr++]="char";
		var t=this.dstk.get("seq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f69;
		var t91=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t91.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f70;
		var t92=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t92.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f71;
		var t93=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t93.call(this)==-1) return -1;
		}
	}
	function $f73(){
		this.stk[this.ptr++]="numbytes";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f65;
		var t85=this.stk[--this.ptr];
		while (true) {
			if (t85.call(this)==-1) break;
		}
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=31;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f66;
		this.stk[this.ptr++]=$f67;
		var t86=this.stk[--this.ptr];
		var t87=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t87.call(this)==-1) return -1;
		} else {
			if (t86.call(this)==-1) return -1;
		}
		var t=this.dstk.get("numbytes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f68;
		var t90=this.stk[--this.ptr];
		var t88=this.stk[--this.ptr];
		for (var t89=0; t89<t88; t89++) {
			if (t90.call(this)==-1) break;
		}
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f72;
		var t94=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t94.call(this)==-1) return -1;
		}
	}
	function $f74(){
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f52;
		var t73=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t73.call(this)==-1) return -1;
		}
		var t=this.dstk.get("state");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f62;
		this.stk[this.ptr++]=$f73;
		var t95=this.stk[--this.ptr];
		var t96=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t96.call(this)==-1) return -1;
		} else {
			if (t95.call(this)==-1) return -1;
		}
	}
	function $f75(){
		this.stk[this.ptr++]="U";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="L";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="M";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="P";
		this.stk[this.ptr++]=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="D";
		this.stk[this.ptr++]=4;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="B";
		this.stk[this.ptr++]=5;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lu";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ll";
		this.stk[this.ptr++]=-2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lm";
		this.stk[this.ptr++]=-3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lp";
		this.stk[this.ptr++]=-4;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ld";
		this.stk[this.ptr++]=-5;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="su";
		this.stk[this.ptr++]=-6;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sp";
		this.stk[this.ptr++]=-7;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sb";
		this.stk[this.ptr++]=-8;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="fl";
		this.stk[this.ptr++]=-9;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p2";
		this.stk[this.ptr++]=-10;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p3";
		this.stk[this.ptr++]=-11;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p4";
		this.stk[this.ptr++]=-12;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p5";
		this.stk[this.ptr++]=-13;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="charmaps";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("sp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("fl");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([32,32,32,13,32]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("A");
		this.stk[this.ptr++]=BWIPJS.psstring("a");
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("p2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("0");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("B");
		this.stk[this.ptr++]=BWIPJS.psstring("b");
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("p3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("1");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("C");
		this.stk[this.ptr++]=BWIPJS.psstring("c");
		this.stk[this.ptr++]=3;
		var t=this.dstk.get("p4");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("2");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("D");
		this.stk[this.ptr++]=BWIPJS.psstring("d");
		this.stk[this.ptr++]=4;
		var t=this.dstk.get("p5");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("3");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("E"),BWIPJS.psstring("e"),5,BWIPJS.psstring("!"),BWIPJS.psstring("4")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("F"),BWIPJS.psstring("f"),6,BWIPJS.psstring("\""),BWIPJS.psstring("5")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("G"),BWIPJS.psstring("g"),7,BWIPJS.psstring("#"),BWIPJS.psstring("6")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("H"),BWIPJS.psstring("h"),8,BWIPJS.psstring("$"),BWIPJS.psstring("7")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("I"),BWIPJS.psstring("i"),9,BWIPJS.psstring("%"),BWIPJS.psstring("8")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("J"),BWIPJS.psstring("j"),10,BWIPJS.psstring("&"),BWIPJS.psstring("9")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("K"),BWIPJS.psstring("k"),11,BWIPJS.psstring("'"),BWIPJS.psstring(",")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("L"),BWIPJS.psstring("l"),12,40,BWIPJS.psstring(".")]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("M");
		this.stk[this.ptr++]=BWIPJS.psstring("m");
		this.stk[this.ptr++]=13;
		this.stk[this.ptr++]=41;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("N");
		this.stk[this.ptr++]=BWIPJS.psstring("n");
		this.stk[this.ptr++]=27;
		this.stk[this.ptr++]=BWIPJS.psstring("*");
		var t=this.dstk.get("su");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("O"),BWIPJS.psstring("o"),28,BWIPJS.psstring("+"),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("P"),BWIPJS.psstring("p"),29,BWIPJS.psstring(","),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Q"),BWIPJS.psstring("q"),30,BWIPJS.psstring("-"),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("R"),BWIPJS.psstring("r"),31,BWIPJS.psstring("."),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("S"),BWIPJS.psstring("s"),BWIPJS.psstring("@"),BWIPJS.psstring("/"),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("T"),BWIPJS.psstring("t"),92,BWIPJS.psstring(":"),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("U"),BWIPJS.psstring("u"),BWIPJS.psstring("^"),BWIPJS.psstring(";"),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("V"),BWIPJS.psstring("v"),BWIPJS.psstring("_"),BWIPJS.psstring("<"),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("W"),BWIPJS.psstring("w"),BWIPJS.psstring("`"),BWIPJS.psstring("="),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("X"),BWIPJS.psstring("x"),BWIPJS.psstring("|"),BWIPJS.psstring(">"),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Y"),BWIPJS.psstring("y"),BWIPJS.psstring("~"),BWIPJS.psstring("?"),-99]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Z"),BWIPJS.psstring("z"),127,BWIPJS.psstring("["),-99]);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("su");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("]");
		this.stk[this.ptr++]=-99;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("{");
		this.stk[this.ptr++]=-99;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("ld");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ld");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("}");
		this.stk[this.ptr++]=-99;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=-99;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="charvals";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=32;
		this.stk[this.ptr-1]={};
		this.stk[this.ptr++]=32;
		this.stk[this.ptr-1]={};
		this.stk[this.ptr++]=32;
		this.stk[this.ptr-1]={};
		this.stk[this.ptr++]=32;
		this.stk[this.ptr-1]={};
		this.stk[this.ptr++]=16;
		this.stk[this.ptr-1]={};
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("charmaps");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f13;
		var t23=this.stk[--this.ptr];
		var t21=this.stk[--this.ptr];
		var t20=this.stk[--this.ptr];
		var t19=this.stk[--this.ptr];
		for (var t22=t19; t20<0 ? t22>=t21 : t22<=t21; t22+=t20) {
			this.stk[this.ptr++]=t22;
			if (t23.call(this)==-1) break;
		}
		this.stk[this.ptr++]="pcomp";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("\x0d\x0a");
		var t=this.dstk.get("p2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring(". ");
		var t=this.dstk.get("p3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring(", ");
		var t=this.dstk.get("p4");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring(": ");
		var t=this.dstk.get("p5");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t = {};
		for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
			if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
			BWIPJS.set(t,this.stk[i-1],this.stk[i]);
		}
		if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
		this.ptr = i;
		this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="e";
		this.stk[this.ptr++]=10000;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="latlen";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([0,5,5,10,5,10]);
		this.stk[this.ptr++]=BWIPJS.psarray([9,0,5,10,5,10]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,5,0,5,10,10]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,10,10,0,10,15]);
		this.stk[this.ptr++]=BWIPJS.psarray([4,9,9,14,0,14]);
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0,0,0]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="latseq";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("ld");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("ld");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("ld");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ld");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ld");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lp");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lu");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("ll");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("lm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="shftlen";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=4;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="charsize";
		this.stk[this.ptr++]=BWIPJS.psarray([5,5,5,5,4,8]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="curlen";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="curseq";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="backto";
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lastchar";
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f41;
		var t63=this.stk[--this.ptr];//forall
		var t62=this.stk[--this.ptr];
		for (var t61 in t62) {
			if (t62 instanceof BWIPJS.psstring || t62 instanceof BWIPJS.psarray) {
				if (t61.charCodeAt(0) > 57) continue;
			} else {
				if (t61.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t61.substr(1);
				} else {
					this.stk[this.ptr++]=t61;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t62,t61);
			if (t63.call(this)==-1) break;
		}
		this.stk[this.ptr++]="minseq";
		var t=this.dstk.get("e");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("L");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("M");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("P");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("D");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("B");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f43;
		var t67=this.stk[--this.ptr];//forall
		var t66=this.stk[--this.ptr];
		for (var t65 in t66) {
			if (t66 instanceof BWIPJS.psstring || t66 instanceof BWIPJS.psarray) {
				if (t65.charCodeAt(0) > 57) continue;
			} else {
				if (t65.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t65.substr(1);
				} else {
					this.stk[this.ptr++]=t65;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t66,t65);
			if (t67.call(this)==-1) break;
		}
		this.stk[this.ptr++]="tobin";
		this.stk[this.ptr++]=$f45;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encu";
		this.stk[this.ptr++]=$f46;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encl";
		this.stk[this.ptr++]=$f47;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encm";
		this.stk[this.ptr++]=$f48;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encp";
		this.stk[this.ptr++]=$f49;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encd";
		this.stk[this.ptr++]=$f50;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encfuncs";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="encu";
		this.stk[this.ptr++]="encl";
		this.stk[this.ptr++]="encm";
		this.stk[this.ptr++]="encp";
		this.stk[this.ptr++]="encd";
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="addtomsgbits";
		this.stk[this.ptr++]=$f51;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="state";
		var t=this.dstk.get("U");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msgbits";
		var t=this.dstk.get("minseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f74;
		var t97=this.stk[--this.ptr];
		while (true) {
			if (t97.call(this)==-1) break;
		}
	}
	function $f76(){
		this.stk[this.ptr++]="numecw";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f77(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f78(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f79(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f80(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f81(){
		return -1;
	}
	function $f82(){
		this.stk[this.ptr++]="m";
		var t=this.dstk.get("metrics");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="frmt";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mlyr";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="icap";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ncws";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bpcw";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numecw";
		var t=this.dstk.get("ncws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("eclevel");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=100;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("ecaddchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=Math.ceil(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f76;
		var t99=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t99.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="numdcw";
		var t=this.dstk.get("ncws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numecw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("format");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("format");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("frmt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f77;
		var t100=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t100.call(this)==-1) return -1;
		}
		var t=this.dstk.get("readerinit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("icap");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f78;
		var t101=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t101.call(this)==-1) return -1;
		}
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=-1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("mlyr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f79;
		var t102=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t102.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=Math.ceil(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		var t=this.dstk.get("numdcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f80;
		var t103=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t103.call(this)==-1) return -1;
		}
		var t=this.dstk.get("okay");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f81;
		var t104=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t104.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f83(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=BWIPJS.psstring("000000000000");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f84(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=BWIPJS.psstring("111111111111");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f85(){
		return -1;
	}
	function $f86(){
		this.stk[this.ptr++]="cwf";
		this.stk[this.ptr++]=BWIPJS.psstring("1");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="m";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f87(){
		this.stk[this.ptr++]="cwf";
		this.stk[this.ptr++]=BWIPJS.psstring("0");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="m";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f88(){
		this.stk[this.ptr++]="cwb";
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cwf";
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("allzero");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f86;
		var t107=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t107.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("allones");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f87;
		var t108=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t108.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cwf");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]="cwb";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f89(){
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("0");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f90(){
		this.stk[this.ptr++]="cwb";
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cwb";
		this.stk[this.ptr++]=BWIPJS.psstring("111111111111");
		this.stk[this.ptr++]=12;
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
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("allones");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f89;
		var t109=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t109.call(this)==-1) return -1;
		}
	}
	function $f91(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cw";
		var t=this.dstk.get("cw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f92(){
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f85;
		var t106=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t106.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msgbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f88;
		this.stk[this.ptr++]=$f90;
		var t110=this.stk[--this.ptr];
		var t111=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t111.call(this)==-1) return -1;
		} else {
			if (t110.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cw";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f91;
		var t116=this.stk[--this.ptr];
		var t114=this.stk[--this.ptr];
		var t113=this.stk[--this.ptr];
		var t112=this.stk[--this.ptr];
		for (var t115=t112; t113<0 ? t115>=t114 : t115<=t114; t115+=t113) {
			this.stk[this.ptr++]=t115;
			if (t116.call(this)==-1) break;
		}
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("c");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="m";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="c";
		var t=this.dstk.get("c");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f93(){
		var t=this.dstk.get("rspm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean")
			this.stk[this.ptr-2]=!this.stk[this.ptr-2]&&this.stk[this.ptr-1] || this.stk[this.ptr-2]&&!this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]^this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f94(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("rsgf");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f93;
		var t118=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t118.call(this)==-1) return -1;
		}
	}
	function $f95(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("rsalog");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("rslog");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f96(){
		var t=this.dstk.get("rslog");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("rslog");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("rsgf");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("rsalog");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f97(){
		this.ptr--;
		this.ptr--;
		this.stk[this.ptr++]=0;
	}
	function $f98(){
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
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f96;
		this.stk[this.ptr++]=$f97;
		var t127=this.stk[--this.ptr];
		var t128=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t128.call(this)==-1) return -1;
		} else {
			if (t127.call(this)==-1) return -1;
		}
	}
	function $f99(){
		this.stk[this.ptr++]=0;
	}
	function $f100(){
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("rsalog");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("rsprod");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean")
			this.stk[this.ptr-2]=!this.stk[this.ptr-2]&&this.stk[this.ptr-1] || this.stk[this.ptr-2]&&!this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]^this.stk[this.ptr-1];
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f101(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=$f100;
		var t136=this.stk[--this.ptr];
		var t134=this.stk[--this.ptr];
		var t133=this.stk[--this.ptr];
		var t132=this.stk[--this.ptr];
		for (var t135=t132; t133<0 ? t135>=t134 : t135<=t134; t135+=t133) {
			this.stk[this.ptr++]=t135;
			if (t136.call(this)==-1) break;
		}
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("rsalog");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("rsprod");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f102(){
	}
	function $f103(){
		this.stk[this.ptr++]=0;
	}
	function $f104(){
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("rscws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nd");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("rscws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nd");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("k");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("rsnc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("rsprod");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean")
			this.stk[this.ptr-2]=!this.stk[this.ptr-2]&&this.stk[this.ptr-1] || this.stk[this.ptr-2]&&!this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]^this.stk[this.ptr-1];
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f105(){
		this.stk[this.ptr++]="k";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("rscws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("rscws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nd");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean")
			this.stk[this.ptr-2]=!this.stk[this.ptr-2]&&this.stk[this.ptr-1] || this.stk[this.ptr-2]&&!this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]^this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("rsnc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f104;
		var t152=this.stk[--this.ptr];
		var t150=this.stk[--this.ptr];
		var t149=this.stk[--this.ptr];
		var t148=this.stk[--this.ptr];
		for (var t151=t148; t149<0 ? t151>=t150 : t151<=t150; t151+=t149) {
			this.stk[this.ptr++]=t151;
			if (t152.call(this)==-1) break;
		}
	}
	function $f106(){
		this.stk[this.ptr++]="rspm";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rsgf";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rsnc";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rscws";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rsalog";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("rsgf");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f94;
		var t121=this.stk[--this.ptr];
		var t119=this.stk[--this.ptr];
		for (var t120=0; t120<t119; t120++) {
			if (t121.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rslog";
		var t=this.dstk.get("rsgf");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("rsgf");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f95;
		var t126=this.stk[--this.ptr];
		var t124=this.stk[--this.ptr];
		var t123=this.stk[--this.ptr];
		var t122=this.stk[--this.ptr];
		for (var t125=t122; t123<0 ? t125>=t124 : t125<=t124; t125+=t123) {
			this.stk[this.ptr++]=t125;
			if (t126.call(this)==-1) break;
		}
		this.stk[this.ptr++]="rsprod";
		this.stk[this.ptr++]=$f98;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="coeffs";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("rsnc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f99;
		var t131=this.stk[--this.ptr];
		var t129=this.stk[--this.ptr];
		for (var t130=0; t130<t129; t130++) {
			if (t131.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("rsnc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f101;
		var t141=this.stk[--this.ptr];
		var t139=this.stk[--this.ptr];
		var t138=this.stk[--this.ptr];
		var t137=this.stk[--this.ptr];
		for (var t140=t137; t138<0 ? t140>=t139 : t140<=t139; t140+=t138) {
			this.stk[this.ptr++]=t140;
			if (t141.call(this)==-1) break;
		}
		this.stk[this.ptr++]="nd";
		var t=this.dstk.get("rscws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rscws";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("rscws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f102;
		var t144=this.stk[--this.ptr];//forall
		var t143=this.stk[--this.ptr];
		for (var t142 in t143) {
			if (t143 instanceof BWIPJS.psstring || t143 instanceof BWIPJS.psarray) {
				if (t142.charCodeAt(0) > 57) continue;
			} else {
				if (t142.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t142.substr(1);
				} else {
					this.stk[this.ptr++]=t142;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t143,t142);
			if (t144.call(this)==-1) break;
		}
		var t=this.dstk.get("rsnc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f103;
		var t147=this.stk[--this.ptr];
		var t145=this.stk[--this.ptr];
		for (var t146=0; t146<t145; t146++) {
			if (t147.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("nd");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f105;
		var t157=this.stk[--this.ptr];
		var t155=this.stk[--this.ptr];
		var t154=this.stk[--this.ptr];
		var t153=this.stk[--this.ptr];
		for (var t156=t153; t154<0 ? t156>=t155 : t156<=t155; t156+=t154) {
			this.stk[this.ptr++]=t156;
			if (t157.call(this)==-1) break;
		}
		var t=this.dstk.get("rscws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("rscws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f107(){
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1024;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f108(){
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=11;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("readerinit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f107;
		var t158=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t158.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=61440;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=-12;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3840;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=-8;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=240;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=-4;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=15;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=16;
		this.stk[this.ptr++]=19;
		var t=this.dstk.get("rscodes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f109(){
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=32;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f110(){
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("readerinit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f109;
		var t160=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t160.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=240;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=-4;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=15;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=16;
		this.stk[this.ptr++]=19;
		var t=this.dstk.get("rscodes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f111(){
		this.stk[this.ptr++]=10;
		if (typeof(this.stk[this.ptr-1])=="boolean")
			this.stk[this.ptr-2]=!this.stk[this.ptr-2]&&this.stk[this.ptr-1] || this.stk[this.ptr-2]&&!this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]^this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f112(){
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=240;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=-4;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=15;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=16;
		this.stk[this.ptr++]=19;
		var t=this.dstk.get("rscodes");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f111;
		var t164=this.stk[--this.ptr];//forall
		var t163=this.stk[--this.ptr];
		for (var t162 in t163) {
			if (t163 instanceof BWIPJS.psstring || t163 instanceof BWIPJS.psarray) {
				if (t162.charCodeAt(0) > 57) continue;
			} else {
				if (t162.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t162.substr(1);
				} else {
					this.stk[this.ptr++]=t162;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t163,t162);
			if (t164.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f113(){
		var t=this.dstk.get("modebits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("0");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f114(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("modebits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=4;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f115(){
	}
	function $f116(){
		this.stk[this.ptr++]="databits";
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=16;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=112;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f117(){
		this.stk[this.ptr++]="databits";
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=16;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=88;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f118(){
		var t=this.dstk.get("databits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("0");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f119(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("databits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("databits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("ncws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("bpcw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f120(){
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("mid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f121(){
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("llyr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f122(){
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("llyr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f123(){
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("llyr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f124(){
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("llyr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f125(){
		this.stk[this.ptr++]="lbit";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="llyr";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lwid";
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("llyr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ldir";
		var t=this.dstk.get("lbit");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("lwid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("ldir");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f121;
		var t191=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t191.call(this)==-1) return -1;
		}
		var t=this.dstk.get("ldir");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f122;
		var t192=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t192.call(this)==-1) return -1;
		}
		var t=this.dstk.get("ldir");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f123;
		var t193=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t193.call(this)==-1) return -1;
		}
		var t=this.dstk.get("ldir");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f124;
		var t194=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t194.call(this)==-1) return -1;
		}
	}
	function $f126(){
		this.stk[this.ptr++]="fw";
		this.stk[this.ptr++]=12;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f127(){
		this.stk[this.ptr++]="fw";
		this.stk[this.ptr++]=9;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f128(){
		this.stk[this.ptr++]=-1;
	}
	function $f129(){
		this.stk[this.ptr++]="pos";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("layer");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("databits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("databits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f130(){
		this.stk[this.ptr++]="layer";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("layer");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f129;
		var t204=this.stk[--this.ptr];
		var t202=this.stk[--this.ptr];
		var t201=this.stk[--this.ptr];
		var t200=this.stk[--this.ptr];
		for (var t203=t200; t201<0 ? t203>=t202 : t203<=t202; t203+=t201) {
			this.stk[this.ptr++]=t203;
			if (t204.call(this)==-1) break;
		}
	}
	function $f131(){
		this.stk[this.ptr++]=-2;
	}
	function $f132(){
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("npixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("npixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("npixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("npixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f133(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f132;
		var t217=this.stk[--this.ptr];
		var t215=this.stk[--this.ptr];
		var t214=this.stk[--this.ptr];
		var t213=this.stk[--this.ptr];
		for (var t216=t213; t214<0 ? t216>=t215 : t216<=t215; t216+=t214) {
			this.stk[this.ptr++]=t216;
			if (t217.call(this)==-1) break;
		}
	}
	function $f134(){
		var t=this.dstk.get("npixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f135(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("npixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=-2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f134;
		var t223=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t223.call(this)==-1) return -1;
		}
	}
	function $f136(){
		this.stk[this.ptr++]="fw";
		this.stk[this.ptr++]=13;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="size";
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("layers");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10.5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7.5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mid";
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="npixs";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f131;
		var t212=this.stk[--this.ptr];
		var t210=this.stk[--this.ptr];
		for (var t211=0; t211<t210; t211++) {
			if (t212.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=16;
		var t=this.dstk.get("size");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=$f133;
		var t222=this.stk[--this.ptr];
		var t220=this.stk[--this.ptr];
		var t219=this.stk[--this.ptr];
		var t218=this.stk[--this.ptr];
		for (var t221=t218; t219<0 ? t221>=t220 : t221<=t220; t221+=t219) {
			this.stk[this.ptr++]=t221;
			if (t222.call(this)==-1) break;
		}
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("npixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f135;
		var t228=this.stk[--this.ptr];
		var t226=this.stk[--this.ptr];
		var t225=this.stk[--this.ptr];
		var t224=this.stk[--this.ptr];
		for (var t227=t224; t225<0 ? t227>=t226 : t227<=t226; t227+=t225) {
			this.stk[this.ptr++]=t227;
			if (t228.call(this)==-1) break;
		}
		this.stk[this.ptr++]="pixs";
		var t=this.dstk.get("npixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f137(){
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=Math.abs(this.stk[this.ptr-1]);
	}
	function $f138(){
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=Math.abs(this.stk[this.ptr-1]);
	}
	function $f139(){
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=Math.abs(this.stk[this.ptr-1]);
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=Math.abs(this.stk[this.ptr-1]);
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f137;
		this.stk[this.ptr++]=$f138;
		var t230=this.stk[--this.ptr];
		var t231=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t231.call(this)==-1) return -1;
		} else {
			if (t230.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f140(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("fw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f139;
		var t236=this.stk[--this.ptr];
		var t234=this.stk[--this.ptr];
		var t233=this.stk[--this.ptr];
		var t232=this.stk[--this.ptr];
		for (var t235=t232; t233<0 ? t235>=t234 : t235<=t234; t235+=t233) {
			this.stk[this.ptr++]=t235;
			if (t236.call(this)==-1) break;
		}
	}
	function $f141(){
	}
	function $f142(){
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f141;
		var t244=this.stk[--this.ptr];//forall
		var t243=this.stk[--this.ptr];
		for (var t242 in t243) {
			if (t243 instanceof BWIPJS.psstring || t243 instanceof BWIPJS.psarray) {
				if (t242.charCodeAt(0) > 57) continue;
			} else {
				if (t242.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t242.substr(1);
				} else {
					this.stk[this.ptr++]=t242;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t243,t242);
			if (t244.call(this)==-1) break;
		}
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f143(){
		this.stk[this.ptr++]="modemap";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([-5,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-4,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-3,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-2,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-1,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([1,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([2,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([3,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([4,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,7]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,5]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,4]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,3]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,2]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,1]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,-1]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,-2]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,-3]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,-4]);
		this.stk[this.ptr++]=BWIPJS.psarray([7,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([4,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([3,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([2,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([1,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-1,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-2,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-3,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-4,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-5,-7]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,-4]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,-3]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,-2]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,-1]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,1]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,2]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,3]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,4]);
		this.stk[this.ptr++]=BWIPJS.psarray([-7,5]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f144(){
		this.stk[this.ptr++]="modemap";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([-3,5]);
		this.stk[this.ptr++]=BWIPJS.psarray([-2,5]);
		this.stk[this.ptr++]=BWIPJS.psarray([-1,5]);
		this.stk[this.ptr++]=BWIPJS.psarray([0,5]);
		this.stk[this.ptr++]=BWIPJS.psarray([1,5]);
		this.stk[this.ptr++]=BWIPJS.psarray([2,5]);
		this.stk[this.ptr++]=BWIPJS.psarray([3,5]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,3]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,2]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,1]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,0]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,-1]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,-2]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,-3]);
		this.stk[this.ptr++]=BWIPJS.psarray([3,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([2,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([1,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([0,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([-1,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([-2,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([-3,-5]);
		this.stk[this.ptr++]=BWIPJS.psarray([-5,-3]);
		this.stk[this.ptr++]=BWIPJS.psarray([-5,-2]);
		this.stk[this.ptr++]=BWIPJS.psarray([-5,-1]);
		this.stk[this.ptr++]=BWIPJS.psarray([-5,0]);
		this.stk[this.ptr++]=BWIPJS.psarray([-5,1]);
		this.stk[this.ptr++]=BWIPJS.psarray([-5,2]);
		this.stk[this.ptr++]=BWIPJS.psarray([-5,3]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f145(){
	}
	function $f146(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("modemap");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f145;
		var t252=this.stk[--this.ptr];//forall
		var t251=this.stk[--this.ptr];
		for (var t250 in t251) {
			if (t251 instanceof BWIPJS.psstring || t251 instanceof BWIPJS.psarray) {
				if (t250.charCodeAt(0) > 57) continue;
			} else {
				if (t250.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t250.substr(1);
				} else {
					this.stk[this.ptr++]=t250;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t251,t250);
			if (t252.call(this)==-1) break;
		}
		var t=this.dstk.get("cmv");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("modebits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="options";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcode";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dontdraw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="format";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="readerinit";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="layers";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="eclevel";
	this.stk[this.ptr++]=23;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ecaddchars";
	this.stk[this.ptr++]=3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="raw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parse";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype";
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f4;
	var t4=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t4.call(this)==-1) return -1;
	}
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f5;
	var t7=this.stk[--this.ptr];//forall
	var t6=this.stk[--this.ptr];
	for (var t5 in t6) {
		if (t6 instanceof BWIPJS.psstring || t6 instanceof BWIPJS.psarray) {
			if (t5.charCodeAt(0) > 57) continue;
		} else {
			if (t5.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t5.substr(1);
			} else {
				this.stk[this.ptr++]=t5;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t6,t5);
		if (t7.call(this)==-1) break;
	}
	this.stk[this.ptr++]="layers";
	var t=this.dstk.get("layers");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="eclevel";
	var t=this.dstk.get("eclevel");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ecaddchars";
	var t=this.dstk.get("ecaddchars");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("parse");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f9;
	var t11=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t11.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="msgbits";
	this.stk[this.ptr++]=BWIPJS.psstring("");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("rune");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("raw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f10;
	var t12=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t12.call(this)==-1) return -1;
	}
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("rune");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("raw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
	else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f75;
	var t98=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t98.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="metrics";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("rune"),0,0,0,6]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("compact"),1,1,17,6]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),1,1,21,6]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("compact"),2,0,40,6]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),2,1,48,6]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("compact"),3,0,51,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),3,1,60,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("compact"),4,0,76,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),4,1,88,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),5,1,120,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),6,1,156,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),7,1,196,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),8,1,240,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),9,1,230,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),10,1,272,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),11,1,316,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),12,1,364,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),13,1,416,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),14,1,470,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),15,1,528,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),16,1,588,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),17,1,652,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),18,1,720,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),19,1,790,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),20,1,864,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),21,1,940,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),22,1,1020,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),23,0,920,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),24,0,992,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),25,0,1066,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),26,0,1144,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),27,0,1224,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),28,0,1306,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),29,0,1392,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),30,0,1480,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),31,0,1570,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("full"),32,0,1664,12]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f82;
	var t105=this.stk[--this.ptr];
	while (true) {
		if (t105.call(this)==-1) break;
	}
	this.stk[this.ptr++]="layers";
	var t=this.dstk.get("mlyr");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="format";
	var t=this.dstk.get("frmt");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="allzero";
	this.stk[this.ptr++]=$f83;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="allones";
	this.stk[this.ptr++]=$f84;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cws";
	var t=this.dstk.get("ncws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="m";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="c";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f92;
	var t117=this.stk[--this.ptr];
	while (true) {
		if (t117.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws";
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("c");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rscodes";
	this.stk[this.ptr++]=$f106;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f108;
	var t159=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t159.call(this)==-1) return -1;
	}
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("compact");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f110;
	var t161=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t161.call(this)==-1) return -1;
	}
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("rune");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f112;
	var t165=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t165.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="modebits";
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("modebits");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f113;
	var t170=this.stk[--this.ptr];
	var t168=this.stk[--this.ptr];
	var t167=this.stk[--this.ptr];
	var t166=this.stk[--this.ptr];
	for (var t169=t166; t167<0 ? t169>=t168 : t169<=t168; t169+=t167) {
		this.stk[this.ptr++]=t169;
		if (t170.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f114;
	var t175=this.stk[--this.ptr];
	var t173=this.stk[--this.ptr];
	var t172=this.stk[--this.ptr];
	var t171=this.stk[--this.ptr];
	for (var t174=t171; t172<0 ? t174>=t173 : t174<=t173; t174+=t172) {
		this.stk[this.ptr++]=t174;
		if (t175.call(this)==-1) break;
	}
	this.stk[this.ptr++]="rsparams";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([64,67]);
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([256,301]);
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([1024,1033]);
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.stk[this.ptr++]=BWIPJS.psarray([4096,4201]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cws";
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ncws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("rsparams");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("bpcw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]=$f115;
	var t178=this.stk[--this.ptr];//forall
	var t177=this.stk[--this.ptr];
	for (var t176 in t177) {
		if (t177 instanceof BWIPJS.psstring || t177 instanceof BWIPJS.psarray) {
			if (t176.charCodeAt(0) > 57) continue;
		} else {
			if (t176.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t176.substr(1);
			} else {
				this.stk[this.ptr++]=t176;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t177,t176);
		if (t178.call(this)==-1) break;
	}
	var t=this.dstk.get("rscodes");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f116;
	this.stk[this.ptr++]=$f117;
	var t179=this.stk[--this.ptr];
	var t180=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t180.call(this)==-1) return -1;
	} else {
		if (t179.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("databits");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f118;
	var t185=this.stk[--this.ptr];
	var t183=this.stk[--this.ptr];
	var t182=this.stk[--this.ptr];
	var t181=this.stk[--this.ptr];
	for (var t184=t181; t182<0 ? t184>=t183 : t184<=t183; t184+=t182) {
		this.stk[this.ptr++]=t184;
		if (t185.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("ncws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f119;
	var t190=this.stk[--this.ptr];
	var t188=this.stk[--this.ptr];
	var t187=this.stk[--this.ptr];
	var t186=this.stk[--this.ptr];
	for (var t189=t186; t187<0 ? t189>=t188 : t189<=t188; t189+=t187) {
		this.stk[this.ptr++]=t189;
		if (t190.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cmv";
	this.stk[this.ptr++]=$f120;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lmv";
	this.stk[this.ptr++]=$f125;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f126;
	this.stk[this.ptr++]=$f127;
	var t195=this.stk[--this.ptr];
	var t196=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t196.call(this)==-1) return -1;
	} else {
		if (t195.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="size";
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("layers");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pixs";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f128;
	var t199=this.stk[--this.ptr];
	var t197=this.stk[--this.ptr];
	for (var t198=0; t198<t197; t198++) {
		if (t199.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="mid";
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("layers");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f130;
	var t209=this.stk[--this.ptr];
	var t207=this.stk[--this.ptr];
	var t206=this.stk[--this.ptr];
	var t205=this.stk[--this.ptr];
	for (var t208=t205; t206<0 ? t208>=t207 : t208<=t207; t208+=t206) {
		this.stk[this.ptr++]=t208;
		if (t209.call(this)==-1) break;
	}
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f136;
	var t229=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t229.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="fw";
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f140;
	var t241=this.stk[--this.ptr];
	var t239=this.stk[--this.ptr];
	var t238=this.stk[--this.ptr];
	var t237=this.stk[--this.ptr];
	for (var t240=t237; t238<0 ? t240>=t239 : t240<=t239; t240+=t238) {
		this.stk[this.ptr++]=t240;
		if (t241.call(this)==-1) break;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=1;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=1;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=1;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=1;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	var t=this.dstk.get("fw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f142;
	var t247=this.stk[--this.ptr];//forall
	var t246=this.stk[--this.ptr];
	for (var t245 in t246) {
		if (t246 instanceof BWIPJS.psstring || t246 instanceof BWIPJS.psarray) {
			if (t245.charCodeAt(0) > 57) continue;
		} else {
			if (t245.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t245.substr(1);
			} else {
				this.stk[this.ptr++]=t245;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t246,t245);
		if (t247.call(this)==-1) break;
	}
	var t=this.dstk.get("format");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f143;
	this.stk[this.ptr++]=$f144;
	var t248=this.stk[--this.ptr];
	var t249=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t249.call(this)==-1) return -1;
	} else {
		if (t248.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("modemap");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f146;
	var t257=this.stk[--this.ptr];
	var t255=this.stk[--this.ptr];
	var t254=this.stk[--this.ptr];
	var t253=this.stk[--this.ptr];
	for (var t256=t253; t254<0 ? t256>=t255 : t256<=t255; t256+=t254) {
		this.stk[this.ptr++]=t256;
		if (t257.call(this)==-1) break;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	var t=this.dstk.get("renmatrix");
	this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixs";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixx";
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixy";
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="height";
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="width";
	var t=this.dstk.get("size");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="opt";
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
	this.ptr = i;
	this.stk[this.ptr++]=t;
	var t=this.dstk.get("dontdraw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
	else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
	var t=this.dstk.get("renmatrix");
	this.stk[this.ptr++]=t;
	var t258=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t258.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("azteccode");
// END OF azteccode

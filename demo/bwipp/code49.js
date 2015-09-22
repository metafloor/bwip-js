// file: bwipp/code49.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-08-10
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN code49
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("code49", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("code49", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
BWIPJS.bwipp["code49"]=function() {
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
		return -1;
	}
	function $f11(){
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
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f12(){
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f13(){
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=94;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f11;
		this.stk[this.ptr++]=$f12;
		var t13=this.stk[--this.ptr];
		var t14=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t14.call(this)==-1) return -1;
		} else {
			if (t13.call(this)==-1) return -1;
		}
	}
	function $f14(){
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f10;
		var t12=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t12.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="char";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
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
		this.stk[this.ptr++]=$f13;
		var t15=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t15.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f15(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f16(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("charmap");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
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
		this.stk[this.ptr++]=$f15;
		var t17=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t17.call(this)==-1) return -1;
		}
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f17(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("s1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("c2");
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
	function $f18(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("s2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("c2");
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
	function $f19(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("combos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]="c1";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]="c2";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("c1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=49;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f17;
		var t23=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t23.call(this)==-1) return -1;
		}
		var t=this.dstk.get("c1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=50;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f18;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
	}
	function $f20(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
	}
	function $f21(){
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="arraytype";
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f20;
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("cws");
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
	}
	function $f22(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f23(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	}
	function $f24(){
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f25(){
		this.stk[this.ptr++]=0;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f22;
		var t33=this.stk[--this.ptr];//forall
		var t32=this.stk[--this.ptr];
		for (var t31 in t32) {
			if (t32 instanceof BWIPJS.psstring || t32 instanceof BWIPJS.psarray) {
				if (t31.charCodeAt(0) > 57) continue;
			} else {
				if (t31.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t31.substr(1);
				} else {
					this.stk[this.ptr++]=t31;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t32,t31);
			if (t33.call(this)==-1) break;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f23;
		var t36=this.stk[--this.ptr];
		var t34=this.stk[--this.ptr];
		for (var t35=0; t35<t34; t35++) {
			if (t36.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f24;
		var t41=this.stk[--this.ptr];
		var t39=this.stk[--this.ptr];
		var t38=this.stk[--this.ptr];
		var t37=this.stk[--this.ptr];
		for (var t40=t37; t38<0 ? t40>=t39 : t40<=t39; t40+=t38) {
			this.stk[this.ptr++]=t40;
			if (t41.call(this)==-1) break;
		}
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("cws");
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
	}
	function $f26(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f27(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f28(){
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=3;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("base48");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f29(){
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("encodealpha");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f30(){
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("base48");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f31(){
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr++]=48;
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
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
		var t=this.dstk.get("base48");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f32(){
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr++]=48;
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
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
		var t=this.dstk.get("base48");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("base48");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f33(){
		this.stk[this.ptr++]="nums";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="pre";
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f26;
		this.stk[this.ptr++]=$f27;
		var t42=this.stk[--this.ptr];
		var t43=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t43.call(this)==-1) return -1;
		} else {
			if (t42.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("pre");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f28;
		var t48=this.stk[--this.ptr];
		var t46=this.stk[--this.ptr];
		var t45=this.stk[--this.ptr];
		var t44=this.stk[--this.ptr];
		for (var t47=t44; t45<0 ? t47>=t46 : t47<=t46; t47+=t45) {
			this.stk[this.ptr++]=t47;
			if (t48.call(this)==-1) break;
		}
		this.stk[this.ptr++]="nums";
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pre");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("pre");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("nums");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f29;
		var t49=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t49.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f30;
		var t50=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t50.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=4;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f31;
		var t51=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t51.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=7;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f32;
		var t52=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t52.call(this)==-1) return -1;
		}
	}
	function $f34(){
		this.stk[this.ptr++]=0;
	}
	function $f35(){
		var t=this.dstk.get("numericruns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numericruns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f36(){
		var t=this.dstk.get("numericruns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f37(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f35;
		this.stk[this.ptr++]=$f36;
		var t56=this.stk[--this.ptr];
		var t57=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t57.call(this)==-1) return -1;
		} else {
			if (t56.call(this)==-1) return -1;
		}
	}
	function $f38(){
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f39(){
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f40(){
		this.ptr--;
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f41(){
		this.stk[this.ptr++]=4;
	}
	function $f42(){
		this.stk[this.ptr++]=5;
	}
	function $f43(){
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=-1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f38;
		var t63=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t63.call(this)==-1) return -1;
		}
		var t=this.dstk.get("numericruns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f39;
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		}
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="arraytype";
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f40;
		var t65=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t65.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=43;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f41;
		this.stk[this.ptr++]=$f42;
		var t66=this.stk[--this.ptr];
		var t67=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t67.call(this)==-1) return -1;
		} else {
			if (t66.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="mode";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f44(){
		this.stk[this.ptr++]=$f43;
		var t68=this.stk[--this.ptr];
		while (true) {
			if (t68.call(this)==-1) break;
		}
	}
	function $f45(){
		this.stk[this.ptr++]="method";
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f46(){
		this.stk[this.ptr++]="method";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f47(){
		this.ptr--;
	}
	function $f48(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("posval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f47;
		var t72=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t72.call(this)==-1) return -1;
		}
	}
	function $f49(){
		this.stk[this.ptr++]="posval";
		this.stk[this.ptr++]=BWIPJS.psarray([12,22,13,23,33,14,24,34,44,15,25,35,45,55,16,26,36,46,56,66,17,27,37,47,57,67,77,18,28,38,48,58,68,78,88,19,29,39,49,59,69,79,89,99]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=43;
		this.stk[this.ptr++]=$f48;
		var t77=this.stk[--this.ptr];
		var t75=this.stk[--this.ptr];
		var t74=this.stk[--this.ptr];
		var t73=this.stk[--this.ptr];
		for (var t76=t73; t74<0 ? t76>=t75 : t76<=t75; t76+=t74) {
			this.stk[this.ptr++]=t76;
			if (t77.call(this)==-1) break;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="method";
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f50(){
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="method";
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f51(){
		return -1;
	}
	function $f52(){
		var t=this.dstk.get("ns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encodealpha");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="method";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f53(){
		var t=this.dstk.get("numericruns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f52;
		var t81=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t81.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("encodealpha");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f54(){
		var t=this.dstk.get("ns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encodealpha");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="method";
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f55(){
		var t=this.dstk.get("numericruns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f54;
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numericruns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encodenumeric");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numericruns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f56(){
		var t=this.dstk.get("method");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f53;
		var t82=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t82.call(this)==-1) return -1;
		}
		var t=this.dstk.get("method");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f55;
		var t84=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t84.call(this)==-1) return -1;
		}
	}
	function $f57(){
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f51;
		var t80=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t80.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=$f56;
		var t85=this.stk[--this.ptr];
		while (true) {
			if (t85.call(this)==-1) break;
		}
	}
	function $f58(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f59(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f60(){
		return -1;
	}
	function $f61(){
		this.stk[this.ptr++]="m";
		var t=this.dstk.get("metrics");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="r";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dcws";
		var t=this.dstk.get("m");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
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
		this.stk[this.ptr++]=$f58;
		var t87=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t87.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("dcws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f59;
		var t88=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t88.call(this)==-1) return -1;
		}
		var t=this.dstk.get("okay");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f60;
		var t89=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t89.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f62(){
		this.stk[this.ptr++]=48;
	}
	function $f63(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f64(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cc";
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("ccs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("ccs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("cc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f63;
		var t96=this.stk[--this.ptr];//forall
		var t95=this.stk[--this.ptr];
		for (var t94 in t95) {
			if (t95 instanceof BWIPJS.psstring || t95 instanceof BWIPJS.psarray) {
				if (t94.charCodeAt(0) > 57) continue;
			} else {
				if (t94.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t94.substr(1);
				} else {
					this.stk[this.ptr++]=t94;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t95,t94);
			if (t96.call(this)==-1) break;
		}
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f65(){
		var t=this.dstk.get("ccs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ccs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("dcws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f66(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("ccs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("ccs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("weights");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="score";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("score");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f67(){
		this.stk[this.ptr++]="weights";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="score";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("r");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f66;
		var t107=this.stk[--this.ptr];
		var t105=this.stk[--this.ptr];
		var t104=this.stk[--this.ptr];
		var t103=this.stk[--this.ptr];
		for (var t106=t103; t104<0 ? t106>=t105 : t106<=t105; t106+=t104) {
			this.stk[this.ptr++]=t106;
			if (t107.call(this)==-1) break;
		}
		var t=this.dstk.get("score");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f68(){
		var t=this.dstk.get("cr7");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("weightz");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("weightz");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("calccheck");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2401;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		var t=this.dstk.get("lastrow");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f69(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f70(){
		var t=this.dstk.get("parity");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f71(){
		this.stk[this.ptr++]=BWIPJS.psstring("0000");
	}
	function $f72(){
		var t=this.dstk.get("ccrow");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f73(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f74(){
		this.stk[this.ptr++]="j";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("patterns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("scrow");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f73;
		var t121=this.stk[--this.ptr];//forall
		var t120=this.stk[--this.ptr];
		for (var t119 in t120) {
			if (t120 instanceof BWIPJS.psstring || t120 instanceof BWIPJS.psarray) {
				if (t119.charCodeAt(0) > 57) continue;
			} else {
				if (t119.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t119.substr(1);
				} else {
					this.stk[this.ptr++]=t119;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t120,t119);
			if (t121.call(this)==-1) break;
		}
	}
	function $f75(){
		this.stk[this.ptr++]=1;
	}
	function $f76(){
		this.stk[this.ptr++]=$f75;
	}
	function $f77(){
		this.stk[this.ptr++]=0;
	}
	function $f78(){
		this.stk[this.ptr++]=$f77;
	}
	function $f79(){
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f76;
		this.stk[this.ptr++]=$f78;
		var t127=this.stk[--this.ptr];
		var t128=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t128.call(this)==-1) return -1;
		} else {
			if (t127.call(this)==-1) return -1;
		}
		var t131=this.stk[--this.ptr];
		var t129=this.stk[--this.ptr];
		for (var t130=0; t130<t129; t130++) {
			if (t131.call(this)==-1) break;
		}
	}
	function $f80(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("r");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f70;
		this.stk[this.ptr++]=$f71;
		var t112=this.stk[--this.ptr];
		var t113=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t113.call(this)==-1) return -1;
		} else {
			if (t112.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ccrow";
		var t=this.dstk.get("ccs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="scrow";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=$f72;
		var t118=this.stk[--this.ptr];
		var t116=this.stk[--this.ptr];
		var t115=this.stk[--this.ptr];
		var t114=this.stk[--this.ptr];
		for (var t117=t114; t115<0 ? t117>=t116 : t117<=t116; t117+=t115) {
			this.stk[this.ptr++]=t117;
			if (t118.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sbs";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f74;
		var t126=this.stk[--this.ptr];
		var t124=this.stk[--this.ptr];
		var t123=this.stk[--this.ptr];
		var t122=this.stk[--this.ptr];
		for (var t125=t122; t123<0 ? t125>=t124 : t125<=t124; t125+=t123) {
			this.stk[this.ptr++]=t125;
			if (t126.call(this)==-1) break;
		}
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f79;
		var t134=this.stk[--this.ptr];//forall
		var t133=this.stk[--this.ptr];
		for (var t132 in t133) {
			if (t133 instanceof BWIPJS.psstring || t133 instanceof BWIPJS.psarray) {
				if (t132.charCodeAt(0) > 57) continue;
			} else {
				if (t132.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t132.substr(1);
				} else {
					this.stk[this.ptr++]=t132;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t133,t132);
			if (t134.call(this)==-1) break;
		}
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
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f81(){
		this.stk[this.ptr++]=1;
	}
	function $f82(){
		var t=this.dstk.get("rowbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f83(){
		this.stk[this.ptr++]=0;
	}
	function $f84(){
		this.stk[this.ptr++]=1;
	}
	function $f85(){
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=$f83;
		var t148=this.stk[--this.ptr];
		var t146=this.stk[--this.ptr];
		for (var t147=0; t147<t146; t147++) {
			if (t148.call(this)==-1) break;
		}
		this.stk[this.ptr++]=70;
		this.stk[this.ptr++]=$f84;
		var t151=this.stk[--this.ptr];
		var t149=this.stk[--this.ptr];
		for (var t150=0; t150<t149; t150++) {
			if (t151.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
	}
	function $f86(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("rowheight");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f82;
		var t145=this.stk[--this.ptr];
		var t143=this.stk[--this.ptr];
		for (var t144=0; t144<t143; t144++) {
			if (t145.call(this)==-1) break;
		}
		var t=this.dstk.get("sepheight");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f85;
		var t154=this.stk[--this.ptr];
		var t152=this.stk[--this.ptr];
		for (var t153=0; t153<t152; t153++) {
			if (t154.call(this)==-1) break;
		}
	}
	function $f87(){
		var t=this.dstk.get("rowbits");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("r");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f88(){
		this.stk[this.ptr++]=1;
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
	this.stk[this.ptr++]="mode";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pos";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rows";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowheight";
	this.stk[this.ptr++]=8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sepheight";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parse";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parsefnc";
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
	this.stk[this.ptr++]="mode";
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pos";
	var t=this.dstk.get("pos");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rows";
	var t=this.dstk.get("rows");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowheight";
	var t=this.dstk.get("rowheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sepheight";
	var t=this.dstk.get("sepheight");
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
	this.stk[this.ptr++]="barlen";
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="s1";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="s2";
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn1";
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn2";
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn3";
	this.stk[this.ptr++]=-5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ns";
	this.stk[this.ptr++]=-6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fncvals";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC1");
	var t=this.dstk.get("fn1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC2");
	var t=this.dstk.get("fn2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC3");
	var t=this.dstk.get("fn3");
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
	this.stk[this.ptr++]="msg";
	var t=this.dstk.get("barlen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f14;
	var t16=this.stk[--this.ptr];
	while (true) {
		if (t16.call(this)==-1) break;
	}
	this.stk[this.ptr++]="msg";
	var t=this.dstk.get("msg");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("j");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msglen";
	var t=this.dstk.get("msg");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charmap";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("0");
	this.stk[this.ptr++]=BWIPJS.psstring("1");
	this.stk[this.ptr++]=BWIPJS.psstring("2");
	this.stk[this.ptr++]=BWIPJS.psstring("3");
	this.stk[this.ptr++]=BWIPJS.psstring("4");
	this.stk[this.ptr++]=BWIPJS.psstring("5");
	this.stk[this.ptr++]=BWIPJS.psstring("6");
	this.stk[this.ptr++]=BWIPJS.psstring("7");
	this.stk[this.ptr++]=BWIPJS.psstring("8");
	this.stk[this.ptr++]=BWIPJS.psstring("9");
	this.stk[this.ptr++]=BWIPJS.psstring("A");
	this.stk[this.ptr++]=BWIPJS.psstring("B");
	this.stk[this.ptr++]=BWIPJS.psstring("C");
	this.stk[this.ptr++]=BWIPJS.psstring("D");
	this.stk[this.ptr++]=BWIPJS.psstring("E");
	this.stk[this.ptr++]=BWIPJS.psstring("F");
	this.stk[this.ptr++]=BWIPJS.psstring("G");
	this.stk[this.ptr++]=BWIPJS.psstring("H");
	this.stk[this.ptr++]=BWIPJS.psstring("I");
	this.stk[this.ptr++]=BWIPJS.psstring("J");
	this.stk[this.ptr++]=BWIPJS.psstring("K");
	this.stk[this.ptr++]=BWIPJS.psstring("L");
	this.stk[this.ptr++]=BWIPJS.psstring("M");
	this.stk[this.ptr++]=BWIPJS.psstring("N");
	this.stk[this.ptr++]=BWIPJS.psstring("O");
	this.stk[this.ptr++]=BWIPJS.psstring("P");
	this.stk[this.ptr++]=BWIPJS.psstring("Q");
	this.stk[this.ptr++]=BWIPJS.psstring("R");
	this.stk[this.ptr++]=BWIPJS.psstring("S");
	this.stk[this.ptr++]=BWIPJS.psstring("T");
	this.stk[this.ptr++]=BWIPJS.psstring("U");
	this.stk[this.ptr++]=BWIPJS.psstring("V");
	this.stk[this.ptr++]=BWIPJS.psstring("W");
	this.stk[this.ptr++]=BWIPJS.psstring("X");
	this.stk[this.ptr++]=BWIPJS.psstring("Y");
	this.stk[this.ptr++]=BWIPJS.psstring("Z");
	this.stk[this.ptr++]=BWIPJS.psstring("-");
	this.stk[this.ptr++]=BWIPJS.psstring(".");
	this.stk[this.ptr++]=BWIPJS.psstring(" ");
	this.stk[this.ptr++]=BWIPJS.psstring("$");
	this.stk[this.ptr++]=BWIPJS.psstring("/");
	this.stk[this.ptr++]=BWIPJS.psstring("+");
	this.stk[this.ptr++]=BWIPJS.psstring("%");
	var t=this.dstk.get("s1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("s2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ns");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr++]=$f16;
	var t22=this.stk[--this.ptr];
	var t20=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	var t18=this.stk[--this.ptr];
	for (var t21=t18; t19<0 ? t21>=t20 : t21<=t20; t21+=t19) {
		this.stk[this.ptr++]=t21;
		if (t22.call(this)==-1) break;
	}
	this.stk[this.ptr++]="combos";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("1 "),BWIPJS.psstring("1A"),BWIPJS.psstring("1B"),BWIPJS.psstring("1C"),BWIPJS.psstring("1D"),BWIPJS.psstring("1E"),BWIPJS.psstring("1F"),BWIPJS.psstring("1G"),BWIPJS.psstring("1H"),BWIPJS.psstring("1I"),BWIPJS.psstring("1J"),BWIPJS.psstring("1K"),BWIPJS.psstring("1L"),BWIPJS.psstring("1M"),BWIPJS.psstring("1N"),BWIPJS.psstring("1O"),BWIPJS.psstring("1P"),BWIPJS.psstring("1Q"),BWIPJS.psstring("1R"),BWIPJS.psstring("1S"),BWIPJS.psstring("1T"),BWIPJS.psstring("1U"),BWIPJS.psstring("1V"),BWIPJS.psstring("1W"),BWIPJS.psstring("1X"),BWIPJS.psstring("1Y"),BWIPJS.psstring("1Z"),BWIPJS.psstring("11"),BWIPJS.psstring("12"),BWIPJS.psstring("13"),BWIPJS.psstring("14"),BWIPJS.psstring("15"),BWIPJS.psstring("  "),BWIPJS.psstring("16"),BWIPJS.psstring("17"),BWIPJS.psstring("18"),BWIPJS.psstring(" $"),BWIPJS.psstring(" %"),BWIPJS.psstring("19"),BWIPJS.psstring("10"),BWIPJS.psstring("1-"),BWIPJS.psstring("1."),BWIPJS.psstring("1$"),BWIPJS.psstring(" +"),BWIPJS.psstring("1/"),BWIPJS.psstring(" -"),BWIPJS.psstring(" ."),BWIPJS.psstring(" /"),BWIPJS.psstring(" 0"),BWIPJS.psstring(" 1"),BWIPJS.psstring(" 2"),BWIPJS.psstring(" 3"),BWIPJS.psstring(" 4"),BWIPJS.psstring(" 5"),BWIPJS.psstring(" 6"),BWIPJS.psstring(" 7"),BWIPJS.psstring(" 8"),BWIPJS.psstring(" 9"),BWIPJS.psstring("1+"),BWIPJS.psstring("21"),BWIPJS.psstring("22"),BWIPJS.psstring("23"),BWIPJS.psstring("24"),BWIPJS.psstring("25"),BWIPJS.psstring("26"),BWIPJS.psstring(" A"),BWIPJS.psstring(" B"),BWIPJS.psstring(" C"),BWIPJS.psstring(" D"),BWIPJS.psstring(" E"),BWIPJS.psstring(" F"),BWIPJS.psstring(" G"),BWIPJS.psstring(" H"),BWIPJS.psstring(" I"),BWIPJS.psstring(" J"),BWIPJS.psstring(" K"),BWIPJS.psstring(" L"),BWIPJS.psstring(" M"),BWIPJS.psstring(" N"),BWIPJS.psstring(" O"),BWIPJS.psstring(" P"),BWIPJS.psstring(" Q"),BWIPJS.psstring(" R"),BWIPJS.psstring(" S"),BWIPJS.psstring(" T"),BWIPJS.psstring(" U"),BWIPJS.psstring(" V"),BWIPJS.psstring(" W"),BWIPJS.psstring(" X"),BWIPJS.psstring(" Y"),BWIPJS.psstring(" Z"),BWIPJS.psstring("27"),BWIPJS.psstring("28"),BWIPJS.psstring("29"),BWIPJS.psstring("20"),BWIPJS.psstring("2-"),BWIPJS.psstring("2."),BWIPJS.psstring("2A"),BWIPJS.psstring("2B"),BWIPJS.psstring("2C"),BWIPJS.psstring("2D"),BWIPJS.psstring("2E"),BWIPJS.psstring("2F"),BWIPJS.psstring("2G"),BWIPJS.psstring("2H"),BWIPJS.psstring("2I"),BWIPJS.psstring("2J"),BWIPJS.psstring("2K"),BWIPJS.psstring("2L"),BWIPJS.psstring("2M"),BWIPJS.psstring("2N"),BWIPJS.psstring("2O"),BWIPJS.psstring("2P"),BWIPJS.psstring("2Q"),BWIPJS.psstring("2R"),BWIPJS.psstring("2S"),BWIPJS.psstring("2T"),BWIPJS.psstring("2U"),BWIPJS.psstring("2V"),BWIPJS.psstring("2W"),BWIPJS.psstring("2X"),BWIPJS.psstring("2Y"),BWIPJS.psstring("2Z"),BWIPJS.psstring("2$"),BWIPJS.psstring("2/"),BWIPJS.psstring("2+"),BWIPJS.psstring("2%"),BWIPJS.psstring("2 ")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=127;
	this.stk[this.ptr++]=$f19;
	var t29=this.stk[--this.ptr];
	var t27=this.stk[--this.ptr];
	var t26=this.stk[--this.ptr];
	var t25=this.stk[--this.ptr];
	for (var t28=t25; t26<0 ? t28>=t27 : t28<=t27; t28+=t26) {
		this.stk[this.ptr++]=t28;
		if (t29.call(this)==-1) break;
	}
	this.stk[this.ptr++]="encodealpha";
	this.stk[this.ptr++]=$f21;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="base48";
	this.stk[this.ptr++]=$f25;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encodenumeric";
	this.stk[this.ptr++]=$f33;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numericruns";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("msglen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f34;
	var t55=this.stk[--this.ptr];
	var t53=this.stk[--this.ptr];
	for (var t54=0; t54<t53; t54++) {
		if (t55.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("msglen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f37;
	var t62=this.stk[--this.ptr];
	var t60=this.stk[--this.ptr];
	var t59=this.stk[--this.ptr];
	var t58=this.stk[--this.ptr];
	for (var t61=t58; t59<0 ? t61>=t60 : t61<=t60; t61+=t59) {
		this.stk[this.ptr++]=t61;
		if (t62.call(this)==-1) break;
	}
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=-1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f44;
	var t69=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t69.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="cws";
	var t=this.dstk.get("msglen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="method";
	this.stk[this.ptr++]=BWIPJS.psstring("alpha");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f45;
	var t70=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t70.call(this)==-1) return -1;
	}
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f46;
	var t71=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t71.call(this)==-1) return -1;
	}
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=3;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f49;
	var t78=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t78.call(this)==-1) return -1;
	}
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=5;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f50;
	var t79=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t79.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=$f57;
	var t86=this.stk[--this.ptr];
	while (true) {
		if (t86.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws";
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("j");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="metrics";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([2,9]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,16]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,23]);
	this.stk[this.ptr++]=BWIPJS.psarray([5,30]);
	this.stk[this.ptr++]=BWIPJS.psarray([6,37]);
	this.stk[this.ptr++]=BWIPJS.psarray([7,42]);
	this.stk[this.ptr++]=BWIPJS.psarray([8,49]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="urows";
	var t=this.dstk.get("rows");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f61;
	var t90=this.stk[--this.ptr];
	while (true) {
		if (t90.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("cws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
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
	this.stk[this.ptr++]=$f62;
	var t93=this.stk[--this.ptr];
	var t91=this.stk[--this.ptr];
	for (var t92=0; t92<t91; t92++) {
		if (t93.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ccs";
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f64;
	var t101=this.stk[--this.ptr];
	var t99=this.stk[--this.ptr];
	var t98=this.stk[--this.ptr];
	var t97=this.stk[--this.ptr];
	for (var t100=t97; t98<0 ? t100>=t99 : t100<=t99; t100+=t98) {
		this.stk[this.ptr++]=t100;
		if (t101.call(this)==-1) break;
	}
	var t=this.dstk.get("j");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("dcws");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f65;
	var t102=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t102.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="cr7";
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("ccs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ccs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("cr7");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.stk[this.ptr++]=BWIPJS.psarray([1,9,31,26,2,12,17,23,37,18,22,6,27,44,15,43,39,11,13,5,41,33,36,8,4,32,3,19,40,25,29,10,24,30]);
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=Infinity;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=20;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
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
	this.stk[this.ptr++]="weightx";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=Infinity;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=16;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
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
	this.stk[this.ptr++]="weighty";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=38;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
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
	this.stk[this.ptr++]="weightz";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="calccheck";
	this.stk[this.ptr++]=$f67;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lastrow";
	var t=this.dstk.get("ccs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ccs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f68;
	var t108=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t108.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="wr1";
	var t=this.dstk.get("lastrow");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("lastrow");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("cr7");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weighty");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("weighty");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("calccheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("wr1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weighty");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2401;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]="wr2";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	var t=this.stk[this.ptr-1];
	if (t.length >= this.ptr) throw "astore: underflow";
	var a=this.stk.splice(this.ptr-1-t.length,t.length);
	t.assign(0,a);
	this.ptr-=t.length;
	var t=this.dstk.get("lastrow");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=-1;
	var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
	if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
	if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
	else var t=this.stk.splice(this.ptr-a, a-b);
	this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("cr7");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weightx");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("weightx");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("calccheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("wr1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weightx");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("wr2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weightx");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2401;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	var t=this.stk[this.ptr-1];
	if (t.length >= this.ptr) throw "astore: underflow";
	var a=this.stk.splice(this.ptr-1-t.length,t.length);
	t.assign(0,a);
	this.ptr-=t.length;
	var t=this.dstk.get("lastrow");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=-1;
	var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
	if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
	if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
	else var t=this.stk.splice(this.ptr-a, a-b);
	this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("ccs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ccs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=0;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=$f69;
	var t111=this.stk[--this.ptr];//forall
	var t110=this.stk[--this.ptr];
	for (var t109 in t110) {
		if (t110 instanceof BWIPJS.psstring || t110 instanceof BWIPJS.psarray) {
			if (t109.charCodeAt(0) > 57) continue;
		} else {
			if (t109.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t109.substr(1);
			} else {
				this.stk[this.ptr++]=t109;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t110,t109);
		if (t111.call(this)==-1) break;
	}
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("ccs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ccs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=-1;
	var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
	if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
	if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
	else var t=this.stk.splice(this.ptr-a, a-b);
	this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.stk[this.ptr++]="patterns";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("11521132"),BWIPJS.psstring("25112131"),BWIPJS.psstring("14212132"),BWIPJS.psstring("25121221"),BWIPJS.psstring("14221222"),BWIPJS.psstring("12412132"),BWIPJS.psstring("23321221"),BWIPJS.psstring("12421222"),BWIPJS.psstring("21521221"),BWIPJS.psstring("15112222"),BWIPJS.psstring("15121312"),BWIPJS.psstring("13312222"),BWIPJS.psstring("24221311"),BWIPJS.psstring("13321312"),BWIPJS.psstring("11512222"),BWIPJS.psstring("22421311"),BWIPJS.psstring("11521312"),BWIPJS.psstring("25112311"),BWIPJS.psstring("14212312"),BWIPJS.psstring("23312311"),BWIPJS.psstring("12412312"),BWIPJS.psstring("21512311"),BWIPJS.psstring("16121131"),BWIPJS.psstring("14321131"),BWIPJS.psstring("12521131"),BWIPJS.psstring("15212131"),BWIPJS.psstring("15221221"),BWIPJS.psstring("13412131"),BWIPJS.psstring("13421221"),BWIPJS.psstring("11612131"),BWIPJS.psstring("16112221"),BWIPJS.psstring("16121311"),BWIPJS.psstring("14312221"),BWIPJS.psstring("14321311"),BWIPJS.psstring("12512221"),BWIPJS.psstring("12521311"),BWIPJS.psstring("15212311"),BWIPJS.psstring("13412311"),BWIPJS.psstring("11612311"),BWIPJS.psstring("11131135"),BWIPJS.psstring("31131133"),BWIPJS.psstring("51131131"),BWIPJS.psstring("21122134"),BWIPJS.psstring("41122132"),BWIPJS.psstring("21131224"),BWIPJS.psstring("41131222"),BWIPJS.psstring("11113135"),BWIPJS.psstring("31113133"),BWIPJS.psstring("51113131"),BWIPJS.psstring("11122225"),BWIPJS.psstring("31122223"),BWIPJS.psstring("51122221"),BWIPJS.psstring("11131315"),BWIPJS.psstring("31131313"),BWIPJS.psstring("51131311"),BWIPJS.psstring("21113224"),BWIPJS.psstring("41113222"),BWIPJS.psstring("21122314"),BWIPJS.psstring("41122312"),BWIPJS.psstring("11113315"),BWIPJS.psstring("31113313"),BWIPJS.psstring("51113311"),BWIPJS.psstring("12131134"),BWIPJS.psstring("32131132"),BWIPJS.psstring("21231133"),BWIPJS.psstring("41231131"),BWIPJS.psstring("22122133"),BWIPJS.psstring("42122131"),BWIPJS.psstring("11222134"),BWIPJS.psstring("22131223"),BWIPJS.psstring("42131221"),BWIPJS.psstring("11231224"),BWIPJS.psstring("31231222"),BWIPJS.psstring("12113134"),BWIPJS.psstring("32113132"),BWIPJS.psstring("12122224"),BWIPJS.psstring("32122222"),BWIPJS.psstring("12131314"),BWIPJS.psstring("32131312"),BWIPJS.psstring("21231313"),BWIPJS.psstring("41231311"),BWIPJS.psstring("22113223"),BWIPJS.psstring("42113221"),BWIPJS.psstring("11213224"),BWIPJS.psstring("22122313"),BWIPJS.psstring("42122311"),BWIPJS.psstring("11222314"),BWIPJS.psstring("31222312"),BWIPJS.psstring("12113314"),BWIPJS.psstring("32113312"),BWIPJS.psstring("21213313"),BWIPJS.psstring("41213311"),BWIPJS.psstring("13131133"),BWIPJS.psstring("33131131"),BWIPJS.psstring("22231132"),BWIPJS.psstring("11331133"),BWIPJS.psstring("31331131"),BWIPJS.psstring("23122132"),BWIPJS.psstring("12222133"),BWIPJS.psstring("23131222"),BWIPJS.psstring("12231223"),BWIPJS.psstring("32231221"),BWIPJS.psstring("21331222"),BWIPJS.psstring("13113133"),BWIPJS.psstring("33113131"),BWIPJS.psstring("13122223"),BWIPJS.psstring("33122221"),BWIPJS.psstring("11313133"),BWIPJS.psstring("13131313"),BWIPJS.psstring("33131311"),BWIPJS.psstring("11322223"),BWIPJS.psstring("22231312"),BWIPJS.psstring("11331313"),BWIPJS.psstring("31331311"),BWIPJS.psstring("23113222"),BWIPJS.psstring("12213223"),BWIPJS.psstring("23122312"),BWIPJS.psstring("12222313"),BWIPJS.psstring("32222311"),BWIPJS.psstring("21322312"),BWIPJS.psstring("13113313"),BWIPJS.psstring("33113311"),BWIPJS.psstring("22213312"),BWIPJS.psstring("11313313"),BWIPJS.psstring("31313311"),BWIPJS.psstring("14131132"),BWIPJS.psstring("23231131"),BWIPJS.psstring("12331132"),BWIPJS.psstring("21431131"),BWIPJS.psstring("24122131"),BWIPJS.psstring("13222132"),BWIPJS.psstring("24131221"),BWIPJS.psstring("13231222"),BWIPJS.psstring("11422132"),BWIPJS.psstring("22331221"),BWIPJS.psstring("11431222"),BWIPJS.psstring("14113132"),BWIPJS.psstring("14122222"),BWIPJS.psstring("12313132"),BWIPJS.psstring("14131312"),BWIPJS.psstring("12322222"),BWIPJS.psstring("23231311"),BWIPJS.psstring("12331312"),BWIPJS.psstring("21431311"),BWIPJS.psstring("24113221"),BWIPJS.psstring("13213222"),BWIPJS.psstring("24122311"),BWIPJS.psstring("13222312"),BWIPJS.psstring("11413222"),BWIPJS.psstring("22322311"),BWIPJS.psstring("11422312"),BWIPJS.psstring("14113312"),BWIPJS.psstring("23213311"),BWIPJS.psstring("12313312"),BWIPJS.psstring("21413311"),BWIPJS.psstring("15131131"),BWIPJS.psstring("13331131"),BWIPJS.psstring("14222131"),BWIPJS.psstring("14231221"),BWIPJS.psstring("12422131"),BWIPJS.psstring("12431221"),BWIPJS.psstring("15113131"),BWIPJS.psstring("15122221"),BWIPJS.psstring("13313131"),BWIPJS.psstring("15131311"),BWIPJS.psstring("13322221"),BWIPJS.psstring("11513131"),BWIPJS.psstring("13331311"),BWIPJS.psstring("11522221"),BWIPJS.psstring("14213221"),BWIPJS.psstring("14222311"),BWIPJS.psstring("12413221"),BWIPJS.psstring("12422311"),BWIPJS.psstring("15113311"),BWIPJS.psstring("13313311"),BWIPJS.psstring("11513311"),BWIPJS.psstring("11141134"),BWIPJS.psstring("31141132"),BWIPJS.psstring("21132133"),BWIPJS.psstring("41132131"),BWIPJS.psstring("21141223"),BWIPJS.psstring("41141221"),BWIPJS.psstring("11123134"),BWIPJS.psstring("31123132"),BWIPJS.psstring("11132224"),BWIPJS.psstring("31132222"),BWIPJS.psstring("11141314"),BWIPJS.psstring("31141312"),BWIPJS.psstring("21114133"),BWIPJS.psstring("41114131"),BWIPJS.psstring("21123223"),BWIPJS.psstring("41123221"),BWIPJS.psstring("21132313"),BWIPJS.psstring("41132311"),BWIPJS.psstring("11114224"),BWIPJS.psstring("31114222"),BWIPJS.psstring("11123314"),BWIPJS.psstring("31123312"),BWIPJS.psstring("21114313"),BWIPJS.psstring("41114311"),BWIPJS.psstring("12141133"),BWIPJS.psstring("32141131"),BWIPJS.psstring("21241132"),BWIPJS.psstring("22132132"),BWIPJS.psstring("11232133"),BWIPJS.psstring("22141222"),BWIPJS.psstring("11241223"),BWIPJS.psstring("31241221"),BWIPJS.psstring("12123133"),BWIPJS.psstring("32123131"),BWIPJS.psstring("12132223"),BWIPJS.psstring("32132221"),BWIPJS.psstring("12141313"),BWIPJS.psstring("32141311"),BWIPJS.psstring("21241312"),BWIPJS.psstring("22114132"),BWIPJS.psstring("11214133"),BWIPJS.psstring("22123222"),BWIPJS.psstring("11223223"),BWIPJS.psstring("22132312"),BWIPJS.psstring("11232313"),BWIPJS.psstring("31232311"),BWIPJS.psstring("12114223"),BWIPJS.psstring("32114221"),BWIPJS.psstring("12123313"),BWIPJS.psstring("32123311"),BWIPJS.psstring("21223312"),BWIPJS.psstring("22114312"),BWIPJS.psstring("11214313"),BWIPJS.psstring("31214311"),BWIPJS.psstring("13141132"),BWIPJS.psstring("22241131"),BWIPJS.psstring("11341132"),BWIPJS.psstring("23132131"),BWIPJS.psstring("12232132"),BWIPJS.psstring("23141221"),BWIPJS.psstring("12241222"),BWIPJS.psstring("21341221"),BWIPJS.psstring("13123132"),BWIPJS.psstring("13132222"),BWIPJS.psstring("11323132"),BWIPJS.psstring("13141312"),BWIPJS.psstring("11332222"),BWIPJS.psstring("22241311"),BWIPJS.psstring("11341312"),BWIPJS.psstring("23114131"),BWIPJS.psstring("12214132"),BWIPJS.psstring("23123221"),BWIPJS.psstring("12223222"),BWIPJS.psstring("23132311"),BWIPJS.psstring("12232312"),BWIPJS.psstring("21332311"),BWIPJS.psstring("13114222"),BWIPJS.psstring("13123312"),BWIPJS.psstring("11314222"),BWIPJS.psstring("22223311"),BWIPJS.psstring("11323312"),BWIPJS.psstring("23114311"),BWIPJS.psstring("12214312"),BWIPJS.psstring("21314311"),BWIPJS.psstring("14141131"),BWIPJS.psstring("12341131"),BWIPJS.psstring("13232131"),BWIPJS.psstring("13241221"),BWIPJS.psstring("11432131"),BWIPJS.psstring("14123131"),BWIPJS.psstring("14132221"),BWIPJS.psstring("12323131"),BWIPJS.psstring("14141311"),BWIPJS.psstring("12332221"),BWIPJS.psstring("12341311"),BWIPJS.psstring("13214131"),BWIPJS.psstring("13223221"),BWIPJS.psstring("11414131"),BWIPJS.psstring("13232311"),BWIPJS.psstring("11423221"),BWIPJS.psstring("11432311"),BWIPJS.psstring("14114221"),BWIPJS.psstring("14123311"),BWIPJS.psstring("12314221"),BWIPJS.psstring("12323311"),BWIPJS.psstring("13214311"),BWIPJS.psstring("11414311"),BWIPJS.psstring("11151133"),BWIPJS.psstring("31151131"),BWIPJS.psstring("21142132"),BWIPJS.psstring("21151222"),BWIPJS.psstring("11133133"),BWIPJS.psstring("31133131"),BWIPJS.psstring("11142223"),BWIPJS.psstring("31142221"),BWIPJS.psstring("11151313"),BWIPJS.psstring("31151311"),BWIPJS.psstring("21124132"),BWIPJS.psstring("21133222"),BWIPJS.psstring("21142312"),BWIPJS.psstring("11115133"),BWIPJS.psstring("31115131"),BWIPJS.psstring("11124223"),BWIPJS.psstring("31124221"),BWIPJS.psstring("11133313"),BWIPJS.psstring("31133311"),BWIPJS.psstring("21115222"),BWIPJS.psstring("21124312"),BWIPJS.psstring("12151132"),BWIPJS.psstring("21251131"),BWIPJS.psstring("22142131"),BWIPJS.psstring("11242132"),BWIPJS.psstring("22151221"),BWIPJS.psstring("11251222"),BWIPJS.psstring("12133132"),BWIPJS.psstring("12142222"),BWIPJS.psstring("12151312"),BWIPJS.psstring("21251311"),BWIPJS.psstring("22124131"),BWIPJS.psstring("11224132"),BWIPJS.psstring("22133221"),BWIPJS.psstring("11233222"),BWIPJS.psstring("22142311"),BWIPJS.psstring("11242312"),BWIPJS.psstring("12115132"),BWIPJS.psstring("12124222"),BWIPJS.psstring("12133312"),BWIPJS.psstring("21233311"),BWIPJS.psstring("22115221"),BWIPJS.psstring("11215222"),BWIPJS.psstring("22124311"),BWIPJS.psstring("11224312"),BWIPJS.psstring("13151131"),BWIPJS.psstring("12242131"),BWIPJS.psstring("12251221"),BWIPJS.psstring("13133131"),BWIPJS.psstring("13142221"),BWIPJS.psstring("11333131"),BWIPJS.psstring("13151311"),BWIPJS.psstring("11342221"),BWIPJS.psstring("12224131"),BWIPJS.psstring("12233221"),BWIPJS.psstring("12242311"),BWIPJS.psstring("13115131"),BWIPJS.psstring("13124221"),BWIPJS.psstring("11315131"),BWIPJS.psstring("13133311"),BWIPJS.psstring("11324221"),BWIPJS.psstring("11333311"),BWIPJS.psstring("12215221"),BWIPJS.psstring("12224311"),BWIPJS.psstring("11161132"),BWIPJS.psstring("21152131"),BWIPJS.psstring("21161221"),BWIPJS.psstring("11143132"),BWIPJS.psstring("11152222"),BWIPJS.psstring("11161312"),BWIPJS.psstring("21134131"),BWIPJS.psstring("21143221"),BWIPJS.psstring("21152311"),BWIPJS.psstring("11125132"),BWIPJS.psstring("11134222"),BWIPJS.psstring("11143312"),BWIPJS.psstring("21116131"),BWIPJS.psstring("21125221"),BWIPJS.psstring("21134311"),BWIPJS.psstring("12161131"),BWIPJS.psstring("11252131"),BWIPJS.psstring("12143131"),BWIPJS.psstring("12152221"),BWIPJS.psstring("12161311"),BWIPJS.psstring("11234131"),BWIPJS.psstring("11243221"),BWIPJS.psstring("11252311"),BWIPJS.psstring("12125131"),BWIPJS.psstring("12134221"),BWIPJS.psstring("12143311"),BWIPJS.psstring("11216131"),BWIPJS.psstring("11225221"),BWIPJS.psstring("11234311"),BWIPJS.psstring("11111236"),BWIPJS.psstring("31111234"),BWIPJS.psstring("51111232"),BWIPJS.psstring("21111325"),BWIPJS.psstring("41111323"),BWIPJS.psstring("61111321"),BWIPJS.psstring("11111416"),BWIPJS.psstring("31111414"),BWIPJS.psstring("51111412"),BWIPJS.psstring("31211143"),BWIPJS.psstring("51211141"),BWIPJS.psstring("12111235"),BWIPJS.psstring("32111233"),BWIPJS.psstring("52111231"),BWIPJS.psstring("21211234"),BWIPJS.psstring("41211232"),BWIPJS.psstring("22111324"),BWIPJS.psstring("42111322"),BWIPJS.psstring("11211325"),BWIPJS.psstring("31211323"),BWIPJS.psstring("51211321"),BWIPJS.psstring("12111415"),BWIPJS.psstring("32111413"),BWIPJS.psstring("52111411"),BWIPJS.psstring("21211414"),BWIPJS.psstring("41211412"),BWIPJS.psstring("12211144"),BWIPJS.psstring("32211142"),BWIPJS.psstring("21311143"),BWIPJS.psstring("41311141"),BWIPJS.psstring("13111234"),BWIPJS.psstring("33111232"),BWIPJS.psstring("22211233"),BWIPJS.psstring("42211231"),BWIPJS.psstring("11311234"),BWIPJS.psstring("31311232"),BWIPJS.psstring("23111323"),BWIPJS.psstring("43111321"),BWIPJS.psstring("12211324"),BWIPJS.psstring("32211322"),BWIPJS.psstring("21311323"),BWIPJS.psstring("41311321"),BWIPJS.psstring("13111414"),BWIPJS.psstring("33111412"),BWIPJS.psstring("22211413"),BWIPJS.psstring("42211411"),BWIPJS.psstring("11311414"),BWIPJS.psstring("31311412"),BWIPJS.psstring("13211143"),BWIPJS.psstring("33211141"),BWIPJS.psstring("22311142"),BWIPJS.psstring("11411143"),BWIPJS.psstring("31411141"),BWIPJS.psstring("14111233"),BWIPJS.psstring("34111231"),BWIPJS.psstring("23211232"),BWIPJS.psstring("12311233"),BWIPJS.psstring("32311231"),BWIPJS.psstring("21411232"),BWIPJS.psstring("24111322"),BWIPJS.psstring("13211323"),BWIPJS.psstring("33211321"),BWIPJS.psstring("22311322"),BWIPJS.psstring("11411323"),BWIPJS.psstring("31411321"),BWIPJS.psstring("14111413"),BWIPJS.psstring("34111411"),BWIPJS.psstring("23211412"),BWIPJS.psstring("12311413"),BWIPJS.psstring("32311411"),BWIPJS.psstring("21411412"),BWIPJS.psstring("14211142"),BWIPJS.psstring("23311141"),BWIPJS.psstring("12411142"),BWIPJS.psstring("21511141"),BWIPJS.psstring("15111232"),BWIPJS.psstring("24211231"),BWIPJS.psstring("13311232"),BWIPJS.psstring("22411231"),BWIPJS.psstring("11511232"),BWIPJS.psstring("25111321"),BWIPJS.psstring("14211322"),BWIPJS.psstring("23311321"),BWIPJS.psstring("12411322"),BWIPJS.psstring("21511321"),BWIPJS.psstring("15111412"),BWIPJS.psstring("24211411"),BWIPJS.psstring("13311412"),BWIPJS.psstring("22411411"),BWIPJS.psstring("11511412"),BWIPJS.psstring("15211141"),BWIPJS.psstring("13411141"),BWIPJS.psstring("11611141"),BWIPJS.psstring("16111231"),BWIPJS.psstring("14311231"),BWIPJS.psstring("12511231"),BWIPJS.psstring("15211321"),BWIPJS.psstring("13411321"),BWIPJS.psstring("11611321"),BWIPJS.psstring("16111411"),BWIPJS.psstring("14311411"),BWIPJS.psstring("12511411"),BWIPJS.psstring("21121144"),BWIPJS.psstring("41121142"),BWIPJS.psstring("11112145"),BWIPJS.psstring("31112143"),BWIPJS.psstring("51112141"),BWIPJS.psstring("11121235"),BWIPJS.psstring("31121233"),BWIPJS.psstring("51121231"),BWIPJS.psstring("21112234"),BWIPJS.psstring("41112232"),BWIPJS.psstring("21121324"),BWIPJS.psstring("41121322"),BWIPJS.psstring("11112325"),BWIPJS.psstring("31112323"),BWIPJS.psstring("51112321"),BWIPJS.psstring("11121415"),BWIPJS.psstring("31121413"),BWIPJS.psstring("51121411"),BWIPJS.psstring("21112414"),BWIPJS.psstring("41112412"),BWIPJS.psstring("22121143"),BWIPJS.psstring("42121141"),BWIPJS.psstring("11221144"),BWIPJS.psstring("31221142"),BWIPJS.psstring("12112144"),BWIPJS.psstring("32112142"),BWIPJS.psstring("12121234"),BWIPJS.psstring("32121232"),BWIPJS.psstring("21221233"),BWIPJS.psstring("41221231"),BWIPJS.psstring("22112233"),BWIPJS.psstring("42112231"),BWIPJS.psstring("11212234"),BWIPJS.psstring("22121323"),BWIPJS.psstring("42121321"),BWIPJS.psstring("11221324"),BWIPJS.psstring("31221322"),BWIPJS.psstring("12112324"),BWIPJS.psstring("32112322"),BWIPJS.psstring("12121414"),BWIPJS.psstring("32121412"),BWIPJS.psstring("21221413"),BWIPJS.psstring("41221411"),BWIPJS.psstring("22112413"),BWIPJS.psstring("42112411"),BWIPJS.psstring("11212414"),BWIPJS.psstring("31212412"),BWIPJS.psstring("23121142"),BWIPJS.psstring("12221143"),BWIPJS.psstring("32221141"),BWIPJS.psstring("21321142"),BWIPJS.psstring("13112143"),BWIPJS.psstring("33112141"),BWIPJS.psstring("13121233"),BWIPJS.psstring("33121231"),BWIPJS.psstring("11312143"),BWIPJS.psstring("22221232"),BWIPJS.psstring("11321233"),BWIPJS.psstring("31321231"),BWIPJS.psstring("23112232"),BWIPJS.psstring("12212233"),BWIPJS.psstring("23121322"),BWIPJS.psstring("12221323"),BWIPJS.psstring("32221321"),BWIPJS.psstring("21321322"),BWIPJS.psstring("13112323"),BWIPJS.psstring("33112321"),BWIPJS.psstring("13121413"),BWIPJS.psstring("33121411"),BWIPJS.psstring("11312323"),BWIPJS.psstring("22221412"),BWIPJS.psstring("11321413"),BWIPJS.psstring("31321411"),BWIPJS.psstring("23112412"),BWIPJS.psstring("12212413"),BWIPJS.psstring("32212411"),BWIPJS.psstring("21312412"),BWIPJS.psstring("24121141"),BWIPJS.psstring("13221142"),BWIPJS.psstring("22321141"),BWIPJS.psstring("11421142"),BWIPJS.psstring("14112142"),BWIPJS.psstring("14121232"),BWIPJS.psstring("12312142"),BWIPJS.psstring("23221231"),BWIPJS.psstring("12321232"),BWIPJS.psstring("21421231"),BWIPJS.psstring("24112231"),BWIPJS.psstring("13212232"),BWIPJS.psstring("24121321"),BWIPJS.psstring("13221322"),BWIPJS.psstring("11412232"),BWIPJS.psstring("22321321"),BWIPJS.psstring("11421322"),BWIPJS.psstring("14112322"),BWIPJS.psstring("14121412"),BWIPJS.psstring("12312322"),BWIPJS.psstring("23221411"),BWIPJS.psstring("12321412"),BWIPJS.psstring("21421411"),BWIPJS.psstring("24112411"),BWIPJS.psstring("13212412"),BWIPJS.psstring("22312411"),BWIPJS.psstring("11412412"),BWIPJS.psstring("14221141"),BWIPJS.psstring("12421141"),BWIPJS.psstring("15112141"),BWIPJS.psstring("15121231"),BWIPJS.psstring("13312141"),BWIPJS.psstring("13321231"),BWIPJS.psstring("11512141"),BWIPJS.psstring("11521231"),BWIPJS.psstring("14212231"),BWIPJS.psstring("14221321"),BWIPJS.psstring("12412231"),BWIPJS.psstring("12421321"),BWIPJS.psstring("15112321"),BWIPJS.psstring("15121411"),BWIPJS.psstring("13312321"),BWIPJS.psstring("13321411"),BWIPJS.psstring("11512321"),BWIPJS.psstring("11521411"),BWIPJS.psstring("14212411"),BWIPJS.psstring("12412411"),BWIPJS.psstring("21131143"),BWIPJS.psstring("41131141"),BWIPJS.psstring("11122144"),BWIPJS.psstring("31122142"),BWIPJS.psstring("11131234"),BWIPJS.psstring("31131232"),BWIPJS.psstring("21113143"),BWIPJS.psstring("41113141"),BWIPJS.psstring("21122233"),BWIPJS.psstring("41122231"),BWIPJS.psstring("21131323"),BWIPJS.psstring("41131321"),BWIPJS.psstring("11113234"),BWIPJS.psstring("31113232"),BWIPJS.psstring("11122324"),BWIPJS.psstring("31122322"),BWIPJS.psstring("11131414"),BWIPJS.psstring("31131412"),BWIPJS.psstring("21113323"),BWIPJS.psstring("41113321"),BWIPJS.psstring("21122413"),BWIPJS.psstring("41122411"),BWIPJS.psstring("11113414"),BWIPJS.psstring("31113412"),BWIPJS.psstring("22131142"),BWIPJS.psstring("11231143"),BWIPJS.psstring("31231141"),BWIPJS.psstring("12122143"),BWIPJS.psstring("32122141"),BWIPJS.psstring("12131233"),BWIPJS.psstring("32131231"),BWIPJS.psstring("21231232"),BWIPJS.psstring("22113142"),BWIPJS.psstring("11213143"),BWIPJS.psstring("22122232"),BWIPJS.psstring("11222233"),BWIPJS.psstring("22131322"),BWIPJS.psstring("11231323"),BWIPJS.psstring("31231321"),BWIPJS.psstring("12113233"),BWIPJS.psstring("32113231"),BWIPJS.psstring("12122323"),BWIPJS.psstring("32122321"),BWIPJS.psstring("12131413"),BWIPJS.psstring("32131411"),BWIPJS.psstring("21231412"),BWIPJS.psstring("22113322"),BWIPJS.psstring("11213323"),BWIPJS.psstring("22122412"),BWIPJS.psstring("11222413"),BWIPJS.psstring("31222411"),BWIPJS.psstring("12113413"),BWIPJS.psstring("32113411"),BWIPJS.psstring("21213412"),BWIPJS.psstring("23131141"),BWIPJS.psstring("12231142"),BWIPJS.psstring("21331141"),BWIPJS.psstring("13122142"),BWIPJS.psstring("13131232"),BWIPJS.psstring("11322142"),BWIPJS.psstring("22231231"),BWIPJS.psstring("11331232"),BWIPJS.psstring("23113141"),BWIPJS.psstring("12213142"),BWIPJS.psstring("23122231"),BWIPJS.psstring("12222232"),BWIPJS.psstring("23131321"),BWIPJS.psstring("12231322"),BWIPJS.psstring("21331321"),BWIPJS.psstring("13113232"),BWIPJS.psstring("13122322"),BWIPJS.psstring("11313232"),BWIPJS.psstring("13131412"),BWIPJS.psstring("11322322"),BWIPJS.psstring("22231411"),BWIPJS.psstring("11331412"),BWIPJS.psstring("23113321"),BWIPJS.psstring("12213322"),BWIPJS.psstring("23122411"),BWIPJS.psstring("12222412"),BWIPJS.psstring("21322411"),BWIPJS.psstring("13113412"),BWIPJS.psstring("22213411"),BWIPJS.psstring("11313412"),BWIPJS.psstring("13231141"),BWIPJS.psstring("11431141"),BWIPJS.psstring("14122141"),BWIPJS.psstring("14131231"),BWIPJS.psstring("12322141"),BWIPJS.psstring("12331231"),BWIPJS.psstring("13213141"),BWIPJS.psstring("13222231"),BWIPJS.psstring("11413141"),BWIPJS.psstring("13231321"),BWIPJS.psstring("11422231"),BWIPJS.psstring("11431321"),BWIPJS.psstring("14113231"),BWIPJS.psstring("14122321"),BWIPJS.psstring("12313231"),BWIPJS.psstring("14131411"),BWIPJS.psstring("12322321"),BWIPJS.psstring("12331411"),BWIPJS.psstring("13213321"),BWIPJS.psstring("13222411"),BWIPJS.psstring("11413321"),BWIPJS.psstring("11422411"),BWIPJS.psstring("14113411"),BWIPJS.psstring("12313411"),BWIPJS.psstring("21141142"),BWIPJS.psstring("11132143"),BWIPJS.psstring("31132141"),BWIPJS.psstring("11141233"),BWIPJS.psstring("31141231"),BWIPJS.psstring("21123142"),BWIPJS.psstring("21132232"),BWIPJS.psstring("21141322"),BWIPJS.psstring("11114143"),BWIPJS.psstring("31114141"),BWIPJS.psstring("11123233"),BWIPJS.psstring("31123231"),BWIPJS.psstring("11132323"),BWIPJS.psstring("31132321"),BWIPJS.psstring("11141413"),BWIPJS.psstring("31141411"),BWIPJS.psstring("21114232"),BWIPJS.psstring("21123322"),BWIPJS.psstring("21132412"),BWIPJS.psstring("11114323"),BWIPJS.psstring("31114321"),BWIPJS.psstring("11123413"),BWIPJS.psstring("31123411"),BWIPJS.psstring("22141141"),BWIPJS.psstring("11241142"),BWIPJS.psstring("12132142"),BWIPJS.psstring("12141232"),BWIPJS.psstring("21241231"),BWIPJS.psstring("22123141"),BWIPJS.psstring("11223142"),BWIPJS.psstring("22132231"),BWIPJS.psstring("11232232"),BWIPJS.psstring("22141321"),BWIPJS.psstring("11241322"),BWIPJS.psstring("12114142"),BWIPJS.psstring("12123232"),BWIPJS.psstring("12132322"),BWIPJS.psstring("12141412"),BWIPJS.psstring("21241411"),BWIPJS.psstring("22114231"),BWIPJS.psstring("11214232"),BWIPJS.psstring("22123321"),BWIPJS.psstring("11223322"),BWIPJS.psstring("22132411"),BWIPJS.psstring("11232412"),BWIPJS.psstring("12114322"),BWIPJS.psstring("12123412"),BWIPJS.psstring("21223411"),BWIPJS.psstring("12241141"),BWIPJS.psstring("13132141"),BWIPJS.psstring("13141231"),BWIPJS.psstring("11332141"),BWIPJS.psstring("11341231"),BWIPJS.psstring("12223141"),BWIPJS.psstring("12232231"),BWIPJS.psstring("12241321"),BWIPJS.psstring("13114141"),BWIPJS.psstring("13123231"),BWIPJS.psstring("11314141"),BWIPJS.psstring("13132321"),BWIPJS.psstring("11323231"),BWIPJS.psstring("13141411"),BWIPJS.psstring("11332321"),BWIPJS.psstring("11341411"),BWIPJS.psstring("12214231"),BWIPJS.psstring("12223321"),BWIPJS.psstring("12232411"),BWIPJS.psstring("13114321"),BWIPJS.psstring("13123411"),BWIPJS.psstring("11314321"),BWIPJS.psstring("11323411"),BWIPJS.psstring("21151141"),BWIPJS.psstring("11142142"),BWIPJS.psstring("11151232"),BWIPJS.psstring("21133141"),BWIPJS.psstring("21142231"),BWIPJS.psstring("21151321"),BWIPJS.psstring("11124142"),BWIPJS.psstring("11133232"),BWIPJS.psstring("11142322"),BWIPJS.psstring("11151412"),BWIPJS.psstring("21115141"),BWIPJS.psstring("21124231"),BWIPJS.psstring("21133321"),BWIPJS.psstring("21142411"),BWIPJS.psstring("11115232"),BWIPJS.psstring("11124322"),BWIPJS.psstring("11133412"),BWIPJS.psstring("11251141"),BWIPJS.psstring("12142141"),BWIPJS.psstring("12151231"),BWIPJS.psstring("11233141"),BWIPJS.psstring("11242231"),BWIPJS.psstring("11251321"),BWIPJS.psstring("12124141"),BWIPJS.psstring("12133231"),BWIPJS.psstring("12142321"),BWIPJS.psstring("12151411"),BWIPJS.psstring("11215141"),BWIPJS.psstring("11224231"),BWIPJS.psstring("11233321"),BWIPJS.psstring("11242411"),BWIPJS.psstring("12115231"),BWIPJS.psstring("12124321"),BWIPJS.psstring("12133411"),BWIPJS.psstring("11152141"),BWIPJS.psstring("11161231"),BWIPJS.psstring("11134141"),BWIPJS.psstring("11143231"),BWIPJS.psstring("11152321"),BWIPJS.psstring("11161411"),BWIPJS.psstring("11116141"),BWIPJS.psstring("11125231"),BWIPJS.psstring("11134321"),BWIPJS.psstring("11143411"),BWIPJS.psstring("21111244"),BWIPJS.psstring("41111242"),BWIPJS.psstring("11111335"),BWIPJS.psstring("31111333"),BWIPJS.psstring("51111331"),BWIPJS.psstring("21111424"),BWIPJS.psstring("41111422"),BWIPJS.psstring("11111515"),BWIPJS.psstring("31111513"),BWIPJS.psstring("51111511"),BWIPJS.psstring("21211153"),BWIPJS.psstring("41211151"),BWIPJS.psstring("22111243"),BWIPJS.psstring("42111241"),BWIPJS.psstring("11211244"),BWIPJS.psstring("31211242"),BWIPJS.psstring("12111334"),BWIPJS.psstring("32111332"),BWIPJS.psstring("21211333"),BWIPJS.psstring("41211331"),BWIPJS.psstring("22111423"),BWIPJS.psstring("42111421"),BWIPJS.psstring("11211424"),BWIPJS.psstring("31211422"),BWIPJS.psstring("12111514"),BWIPJS.psstring("32111512"),BWIPJS.psstring("21211513"),BWIPJS.psstring("41211511"),BWIPJS.psstring("22211152"),BWIPJS.psstring("11311153"),BWIPJS.psstring("31311151"),BWIPJS.psstring("23111242"),BWIPJS.psstring("12211243"),BWIPJS.psstring("32211241"),BWIPJS.psstring("21311242"),BWIPJS.psstring("13111333"),BWIPJS.psstring("33111331"),BWIPJS.psstring("22211332"),BWIPJS.psstring("11311333"),BWIPJS.psstring("31311331"),BWIPJS.psstring("23111422"),BWIPJS.psstring("12211423"),BWIPJS.psstring("32211421"),BWIPJS.psstring("21311422"),BWIPJS.psstring("13111513"),BWIPJS.psstring("33111511"),BWIPJS.psstring("22211512"),BWIPJS.psstring("11311513"),BWIPJS.psstring("31311511"),BWIPJS.psstring("23211151"),BWIPJS.psstring("12311152"),BWIPJS.psstring("21411151"),BWIPJS.psstring("24111241"),BWIPJS.psstring("13211242"),BWIPJS.psstring("22311241"),BWIPJS.psstring("11411242"),BWIPJS.psstring("14111332"),BWIPJS.psstring("23211331"),BWIPJS.psstring("12311332"),BWIPJS.psstring("21411331"),BWIPJS.psstring("24111421"),BWIPJS.psstring("13211422"),BWIPJS.psstring("22311421"),BWIPJS.psstring("11411422"),BWIPJS.psstring("14111512"),BWIPJS.psstring("23211511"),BWIPJS.psstring("12311512"),BWIPJS.psstring("21411511"),BWIPJS.psstring("13311151"),BWIPJS.psstring("11511151"),BWIPJS.psstring("14211241"),BWIPJS.psstring("12411241"),BWIPJS.psstring("15111331"),BWIPJS.psstring("13311331"),BWIPJS.psstring("11511331"),BWIPJS.psstring("14211421"),BWIPJS.psstring("12411421"),BWIPJS.psstring("15111511"),BWIPJS.psstring("13311511"),BWIPJS.psstring("11511511"),BWIPJS.psstring("31121152"),BWIPJS.psstring("21112153"),BWIPJS.psstring("41112151"),BWIPJS.psstring("21121243"),BWIPJS.psstring("41121241"),BWIPJS.psstring("11112244"),BWIPJS.psstring("31112242"),BWIPJS.psstring("11121334"),BWIPJS.psstring("31121332"),BWIPJS.psstring("21112333"),BWIPJS.psstring("41112331"),BWIPJS.psstring("21121423"),BWIPJS.psstring("41121421"),BWIPJS.psstring("11112424"),BWIPJS.psstring("31112422"),BWIPJS.psstring("11121514"),BWIPJS.psstring("31121512"),BWIPJS.psstring("21112513"),BWIPJS.psstring("41112511"),BWIPJS.psstring("12121153"),BWIPJS.psstring("32121151"),BWIPJS.psstring("21221152"),BWIPJS.psstring("22112152"),BWIPJS.psstring("11212153"),BWIPJS.psstring("22121242"),BWIPJS.psstring("11221243"),BWIPJS.psstring("31221241"),BWIPJS.psstring("12112243"),BWIPJS.psstring("32112241"),BWIPJS.psstring("12121333"),BWIPJS.psstring("32121331"),BWIPJS.psstring("21221332"),BWIPJS.psstring("22112332"),BWIPJS.psstring("11212333"),BWIPJS.psstring("22121422"),BWIPJS.psstring("11221423"),BWIPJS.psstring("31221421"),BWIPJS.psstring("12112423"),BWIPJS.psstring("32112421"),BWIPJS.psstring("12121513"),BWIPJS.psstring("32121511"),BWIPJS.psstring("21221512"),BWIPJS.psstring("22112512"),BWIPJS.psstring("11212513"),BWIPJS.psstring("31212511"),BWIPJS.psstring("13121152"),BWIPJS.psstring("22221151"),BWIPJS.psstring("11321152"),BWIPJS.psstring("23112151"),BWIPJS.psstring("12212152"),BWIPJS.psstring("23121241"),BWIPJS.psstring("12221242"),BWIPJS.psstring("21321241"),BWIPJS.psstring("13112242"),BWIPJS.psstring("13121332"),BWIPJS.psstring("11312242"),BWIPJS.psstring("22221331"),BWIPJS.psstring("11321332"),BWIPJS.psstring("23112331"),BWIPJS.psstring("12212332"),BWIPJS.psstring("23121421"),BWIPJS.psstring("12221422"),BWIPJS.psstring("21321421"),BWIPJS.psstring("13112422"),BWIPJS.psstring("13121512"),BWIPJS.psstring("11312422"),BWIPJS.psstring("22221511"),BWIPJS.psstring("11321512"),BWIPJS.psstring("23112511"),BWIPJS.psstring("12212512"),BWIPJS.psstring("21312511"),BWIPJS.psstring("14121151"),BWIPJS.psstring("12321151"),BWIPJS.psstring("13212151"),BWIPJS.psstring("13221241"),BWIPJS.psstring("11412151"),BWIPJS.psstring("11421241"),BWIPJS.psstring("14112241"),BWIPJS.psstring("14121331"),BWIPJS.psstring("12312241"),BWIPJS.psstring("12321331"),BWIPJS.psstring("13212331"),BWIPJS.psstring("13221421"),BWIPJS.psstring("11412331"),BWIPJS.psstring("11421421"),BWIPJS.psstring("14112421"),BWIPJS.psstring("14121511"),BWIPJS.psstring("12312421"),BWIPJS.psstring("12321511"),BWIPJS.psstring("13212511"),BWIPJS.psstring("11412511"),BWIPJS.psstring("11131153"),BWIPJS.psstring("31131151"),BWIPJS.psstring("21122152"),BWIPJS.psstring("21131242"),BWIPJS.psstring("11113153"),BWIPJS.psstring("31113151"),BWIPJS.psstring("11122243"),BWIPJS.psstring("31122241"),BWIPJS.psstring("11131333"),BWIPJS.psstring("31131331"),BWIPJS.psstring("21113242"),BWIPJS.psstring("21122332"),BWIPJS.psstring("21131422"),BWIPJS.psstring("11113333"),BWIPJS.psstring("31113331"),BWIPJS.psstring("11122423"),BWIPJS.psstring("31122421"),BWIPJS.psstring("11131513"),BWIPJS.psstring("31131511"),BWIPJS.psstring("21113422"),BWIPJS.psstring("21122512"),BWIPJS.psstring("12131152"),BWIPJS.psstring("21231151"),BWIPJS.psstring("22122151"),BWIPJS.psstring("11222152"),BWIPJS.psstring("22131241"),BWIPJS.psstring("11231242"),BWIPJS.psstring("12113152"),BWIPJS.psstring("12122242"),BWIPJS.psstring("12131332"),BWIPJS.psstring("21231331"),BWIPJS.psstring("22113241"),BWIPJS.psstring("11213242"),BWIPJS.psstring("22122331"),BWIPJS.psstring("11222332"),BWIPJS.psstring("22131421"),BWIPJS.psstring("11231422"),BWIPJS.psstring("12113332"),BWIPJS.psstring("12122422"),BWIPJS.psstring("12131512"),BWIPJS.psstring("21231511"),BWIPJS.psstring("22113421"),BWIPJS.psstring("11213422"),BWIPJS.psstring("22122511"),BWIPJS.psstring("11222512"),BWIPJS.psstring("13131151"),BWIPJS.psstring("11331151"),BWIPJS.psstring("12222151"),BWIPJS.psstring("12231241"),BWIPJS.psstring("13113151"),BWIPJS.psstring("13122241"),BWIPJS.psstring("11313151"),BWIPJS.psstring("13131331"),BWIPJS.psstring("11322241"),BWIPJS.psstring("11331331"),BWIPJS.psstring("12213241"),BWIPJS.psstring("12222331"),BWIPJS.psstring("12231421"),BWIPJS.psstring("13113331"),BWIPJS.psstring("13122421"),BWIPJS.psstring("11313331"),BWIPJS.psstring("13131511"),BWIPJS.psstring("11322421"),BWIPJS.psstring("11331511"),BWIPJS.psstring("12213421"),BWIPJS.psstring("12222511"),BWIPJS.psstring("11141152"),BWIPJS.psstring("21132151"),BWIPJS.psstring("21141241"),BWIPJS.psstring("11123152"),BWIPJS.psstring("11132242"),BWIPJS.psstring("11141332"),BWIPJS.psstring("21114151"),BWIPJS.psstring("21123241"),BWIPJS.psstring("21132331"),BWIPJS.psstring("21141421"),BWIPJS.psstring("11114242"),BWIPJS.psstring("11123332"),BWIPJS.psstring("11132422"),BWIPJS.psstring("11141512"),BWIPJS.psstring("21114331"),BWIPJS.psstring("21123421"),BWIPJS.psstring("21132511"),BWIPJS.psstring("12141151"),BWIPJS.psstring("11232151"),BWIPJS.psstring("11241241"),BWIPJS.psstring("12123151"),BWIPJS.psstring("12132241"),BWIPJS.psstring("12141331"),BWIPJS.psstring("11214151"),BWIPJS.psstring("11223241"),BWIPJS.psstring("11232331"),BWIPJS.psstring("11241421"),BWIPJS.psstring("12114241"),BWIPJS.psstring("12123331"),BWIPJS.psstring("12132421"),BWIPJS.psstring("12141511"),BWIPJS.psstring("11214331"),BWIPJS.psstring("11223421"),BWIPJS.psstring("11232511"),BWIPJS.psstring("11151151"),BWIPJS.psstring("11133151"),BWIPJS.psstring("11142241"),BWIPJS.psstring("11151331"),BWIPJS.psstring("11115151"),BWIPJS.psstring("11124241"),BWIPJS.psstring("11133331"),BWIPJS.psstring("11142421"),BWIPJS.psstring("11151511"),BWIPJS.psstring("11111254"),BWIPJS.psstring("31111252"),BWIPJS.psstring("21111343"),BWIPJS.psstring("41111341"),BWIPJS.psstring("11111434"),BWIPJS.psstring("31111432"),BWIPJS.psstring("21111523"),BWIPJS.psstring("41111521"),BWIPJS.psstring("11111614"),BWIPJS.psstring("31111612"),BWIPJS.psstring("31211161"),BWIPJS.psstring("12111253"),BWIPJS.psstring("32111251"),BWIPJS.psstring("21211252"),BWIPJS.psstring("22111342"),BWIPJS.psstring("11211343"),BWIPJS.psstring("31211341"),BWIPJS.psstring("12111433"),BWIPJS.psstring("32111431"),BWIPJS.psstring("21211432"),BWIPJS.psstring("22111522"),BWIPJS.psstring("11211523"),BWIPJS.psstring("31211521"),BWIPJS.psstring("12111613"),BWIPJS.psstring("32111611"),BWIPJS.psstring("21211612"),BWIPJS.psstring("12211162"),BWIPJS.psstring("21311161"),BWIPJS.psstring("13111252"),BWIPJS.psstring("22211251"),BWIPJS.psstring("11311252"),BWIPJS.psstring("23111341"),BWIPJS.psstring("12211342"),BWIPJS.psstring("21311341"),BWIPJS.psstring("13111432"),BWIPJS.psstring("22211431"),BWIPJS.psstring("11311432"),BWIPJS.psstring("23111521"),BWIPJS.psstring("12211522"),BWIPJS.psstring("21311521"),BWIPJS.psstring("13111612"),BWIPJS.psstring("22211611"),BWIPJS.psstring("11311612"),BWIPJS.psstring("13211161"),BWIPJS.psstring("11411161"),BWIPJS.psstring("14111251"),BWIPJS.psstring("12311251"),BWIPJS.psstring("13211341"),BWIPJS.psstring("11411341"),BWIPJS.psstring("14111431"),BWIPJS.psstring("12311431"),BWIPJS.psstring("13211521"),BWIPJS.psstring("11411521"),BWIPJS.psstring("14111611"),BWIPJS.psstring("12311611"),BWIPJS.psstring("21121162"),BWIPJS.psstring("11112163"),BWIPJS.psstring("31112161"),BWIPJS.psstring("11121253"),BWIPJS.psstring("31121251"),BWIPJS.psstring("21112252"),BWIPJS.psstring("21121342"),BWIPJS.psstring("11112343"),BWIPJS.psstring("31112341"),BWIPJS.psstring("11121433"),BWIPJS.psstring("31121431"),BWIPJS.psstring("21112432"),BWIPJS.psstring("21121522"),BWIPJS.psstring("11112523"),BWIPJS.psstring("31112521"),BWIPJS.psstring("11121613"),BWIPJS.psstring("31121611"),BWIPJS.psstring("22121161"),BWIPJS.psstring("11221162"),BWIPJS.psstring("12112162"),BWIPJS.psstring("12121252"),BWIPJS.psstring("21221251"),BWIPJS.psstring("22112251"),BWIPJS.psstring("11212252"),BWIPJS.psstring("22121341"),BWIPJS.psstring("11221342"),BWIPJS.psstring("12112342"),BWIPJS.psstring("12121432"),BWIPJS.psstring("21221431"),BWIPJS.psstring("22112431"),BWIPJS.psstring("11212432"),BWIPJS.psstring("22121521"),BWIPJS.psstring("11221522"),BWIPJS.psstring("12112522"),BWIPJS.psstring("12121612"),BWIPJS.psstring("21221611"),BWIPJS.psstring("12221161"),BWIPJS.psstring("13112161"),BWIPJS.psstring("13121251"),BWIPJS.psstring("11312161"),BWIPJS.psstring("11321251"),BWIPJS.psstring("32121115"),BWIPJS.psstring("52121113"),BWIPJS.psstring("21221116"),BWIPJS.psstring("41221114"),BWIPJS.psstring("61221112"),BWIPJS.psstring("22112116"),BWIPJS.psstring("42112114"),BWIPJS.psstring("31212115"),BWIPJS.psstring("51212113"),BWIPJS.psstring("13121116"),BWIPJS.psstring("33121114"),BWIPJS.psstring("22221115"),BWIPJS.psstring("42221113"),BWIPJS.psstring("11321116"),BWIPJS.psstring("31321114"),BWIPJS.psstring("51321112"),BWIPJS.psstring("23112115"),BWIPJS.psstring("43112113"),BWIPJS.psstring("12212116"),BWIPJS.psstring("32212114"),BWIPJS.psstring("52212112"),BWIPJS.psstring("21312115"),BWIPJS.psstring("41312113"),BWIPJS.psstring("61312111"),BWIPJS.psstring("14121115"),BWIPJS.psstring("34121113"),BWIPJS.psstring("23221114"),BWIPJS.psstring("43221112"),BWIPJS.psstring("12321115"),BWIPJS.psstring("32321113"),BWIPJS.psstring("52321111"),BWIPJS.psstring("21421114"),BWIPJS.psstring("41421112"),BWIPJS.psstring("24112114"),BWIPJS.psstring("13212115"),BWIPJS.psstring("33212113"),BWIPJS.psstring("22312114"),BWIPJS.psstring("42312112"),BWIPJS.psstring("11412115"),BWIPJS.psstring("31412113"),BWIPJS.psstring("51412111"),BWIPJS.psstring("15121114"),BWIPJS.psstring("24221113"),BWIPJS.psstring("13321114"),BWIPJS.psstring("33321112"),BWIPJS.psstring("22421113"),BWIPJS.psstring("42421111"),BWIPJS.psstring("11521114"),BWIPJS.psstring("31521112"),BWIPJS.psstring("25112113"),BWIPJS.psstring("14212114"),BWIPJS.psstring("34212112"),BWIPJS.psstring("23312113"),BWIPJS.psstring("43312111"),BWIPJS.psstring("12412114"),BWIPJS.psstring("32412112"),BWIPJS.psstring("21512113"),BWIPJS.psstring("41512111"),BWIPJS.psstring("16121113"),BWIPJS.psstring("25221112"),BWIPJS.psstring("14321113"),BWIPJS.psstring("34321111"),BWIPJS.psstring("23421112"),BWIPJS.psstring("12521113"),BWIPJS.psstring("32521111"),BWIPJS.psstring("15212113"),BWIPJS.psstring("24312112"),BWIPJS.psstring("13412113"),BWIPJS.psstring("33412111"),BWIPJS.psstring("22512112"),BWIPJS.psstring("11612113"),BWIPJS.psstring("31612111"),BWIPJS.psstring("31131115"),BWIPJS.psstring("51131113"),BWIPJS.psstring("21122116"),BWIPJS.psstring("41122114"),BWIPJS.psstring("61122112"),BWIPJS.psstring("31113115"),BWIPJS.psstring("51113113"),BWIPJS.psstring("12131116"),BWIPJS.psstring("32131114"),BWIPJS.psstring("52131112"),BWIPJS.psstring("21231115"),BWIPJS.psstring("41231113"),BWIPJS.psstring("61231111"),BWIPJS.psstring("22122115"),BWIPJS.psstring("42122113"),BWIPJS.psstring("11222116"),BWIPJS.psstring("31222114"),BWIPJS.psstring("51222112"),BWIPJS.psstring("12113116"),BWIPJS.psstring("32113114"),BWIPJS.psstring("52113112"),BWIPJS.psstring("21213115"),BWIPJS.psstring("41213113"),BWIPJS.psstring("61213111"),BWIPJS.psstring("13131115"),BWIPJS.psstring("33131113"),BWIPJS.psstring("22231114"),BWIPJS.psstring("42231112"),BWIPJS.psstring("11331115"),BWIPJS.psstring("31331113"),BWIPJS.psstring("51331111"),BWIPJS.psstring("23122114"),BWIPJS.psstring("43122112"),BWIPJS.psstring("12222115"),BWIPJS.psstring("32222113"),BWIPJS.psstring("52222111"),BWIPJS.psstring("21322114"),BWIPJS.psstring("41322112"),BWIPJS.psstring("13113115"),BWIPJS.psstring("33113113"),BWIPJS.psstring("22213114"),BWIPJS.psstring("42213112"),BWIPJS.psstring("11313115"),BWIPJS.psstring("31313113"),BWIPJS.psstring("51313111"),BWIPJS.psstring("14131114"),BWIPJS.psstring("34131112"),BWIPJS.psstring("23231113"),BWIPJS.psstring("43231111"),BWIPJS.psstring("12331114"),BWIPJS.psstring("32331112"),BWIPJS.psstring("21431113"),BWIPJS.psstring("41431111"),BWIPJS.psstring("24122113"),BWIPJS.psstring("13222114"),BWIPJS.psstring("33222112"),BWIPJS.psstring("22322113"),BWIPJS.psstring("42322111"),BWIPJS.psstring("11422114"),BWIPJS.psstring("31422112"),BWIPJS.psstring("14113114"),BWIPJS.psstring("34113112"),BWIPJS.psstring("23213113"),BWIPJS.psstring("43213111"),BWIPJS.psstring("12313114"),BWIPJS.psstring("32313112"),BWIPJS.psstring("21413113"),BWIPJS.psstring("41413111"),BWIPJS.psstring("15131113"),BWIPJS.psstring("24231112"),BWIPJS.psstring("13331113"),BWIPJS.psstring("33331111"),BWIPJS.psstring("22431112"),BWIPJS.psstring("25122112"),BWIPJS.psstring("14222113"),BWIPJS.psstring("34222111"),BWIPJS.psstring("23322112"),BWIPJS.psstring("12422113"),BWIPJS.psstring("32422111"),BWIPJS.psstring("21522112"),BWIPJS.psstring("15113113"),BWIPJS.psstring("24213112"),BWIPJS.psstring("13313113"),BWIPJS.psstring("33313111"),BWIPJS.psstring("22413112"),BWIPJS.psstring("11513113"),BWIPJS.psstring("31513111"),BWIPJS.psstring("16131112"),BWIPJS.psstring("25231111"),BWIPJS.psstring("14331112"),BWIPJS.psstring("23431111"),BWIPJS.psstring("15222112"),BWIPJS.psstring("24322111"),BWIPJS.psstring("13422112"),BWIPJS.psstring("22522111"),BWIPJS.psstring("16113112"),BWIPJS.psstring("25213111"),BWIPJS.psstring("14313112"),BWIPJS.psstring("23413111"),BWIPJS.psstring("12513112"),BWIPJS.psstring("21613111"),BWIPJS.psstring("11141116"),BWIPJS.psstring("31141114"),BWIPJS.psstring("51141112"),BWIPJS.psstring("21132115"),BWIPJS.psstring("41132113"),BWIPJS.psstring("61132111"),BWIPJS.psstring("11123116"),BWIPJS.psstring("31123114"),BWIPJS.psstring("51123112"),BWIPJS.psstring("21114115"),BWIPJS.psstring("41114113"),BWIPJS.psstring("61114111"),BWIPJS.psstring("12141115"),BWIPJS.psstring("32141113"),BWIPJS.psstring("52141111"),BWIPJS.psstring("21241114"),BWIPJS.psstring("41241112"),BWIPJS.psstring("22132114"),BWIPJS.psstring("42132112"),BWIPJS.psstring("11232115"),BWIPJS.psstring("31232113"),BWIPJS.psstring("51232111"),BWIPJS.psstring("12123115"),BWIPJS.psstring("32123113"),BWIPJS.psstring("52123111"),BWIPJS.psstring("21223114"),BWIPJS.psstring("41223112"),BWIPJS.psstring("22114114"),BWIPJS.psstring("42114112"),BWIPJS.psstring("11214115"),BWIPJS.psstring("31214113"),BWIPJS.psstring("51214111"),BWIPJS.psstring("13141114"),BWIPJS.psstring("33141112"),BWIPJS.psstring("22241113"),BWIPJS.psstring("42241111"),BWIPJS.psstring("11341114"),BWIPJS.psstring("31341112"),BWIPJS.psstring("23132113"),BWIPJS.psstring("43132111"),BWIPJS.psstring("12232114"),BWIPJS.psstring("32232112"),BWIPJS.psstring("21332113"),BWIPJS.psstring("41332111"),BWIPJS.psstring("13123114"),BWIPJS.psstring("33123112"),BWIPJS.psstring("22223113"),BWIPJS.psstring("42223111"),BWIPJS.psstring("11323114"),BWIPJS.psstring("31323112"),BWIPJS.psstring("23114113"),BWIPJS.psstring("43114111"),BWIPJS.psstring("12214114"),BWIPJS.psstring("32214112"),BWIPJS.psstring("21314113"),BWIPJS.psstring("41314111"),BWIPJS.psstring("14141113"),BWIPJS.psstring("34141111"),BWIPJS.psstring("23241112"),BWIPJS.psstring("12341113"),BWIPJS.psstring("32341111"),BWIPJS.psstring("24132112"),BWIPJS.psstring("13232113"),BWIPJS.psstring("33232111"),BWIPJS.psstring("22332112"),BWIPJS.psstring("11432113"),BWIPJS.psstring("31432111"),BWIPJS.psstring("14123113"),BWIPJS.psstring("34123111"),BWIPJS.psstring("23223112"),BWIPJS.psstring("12323113"),BWIPJS.psstring("32323111"),BWIPJS.psstring("21423112"),BWIPJS.psstring("24114112"),BWIPJS.psstring("13214113"),BWIPJS.psstring("33214111"),BWIPJS.psstring("22314112"),BWIPJS.psstring("11414113"),BWIPJS.psstring("31414111"),BWIPJS.psstring("15141112"),BWIPJS.psstring("24241111"),BWIPJS.psstring("13341112"),BWIPJS.psstring("25132111"),BWIPJS.psstring("14232112"),BWIPJS.psstring("23332111"),BWIPJS.psstring("12432112"),BWIPJS.psstring("15123112"),BWIPJS.psstring("24223111"),BWIPJS.psstring("13323112"),BWIPJS.psstring("22423111"),BWIPJS.psstring("11523112"),BWIPJS.psstring("25114111"),BWIPJS.psstring("14214112"),BWIPJS.psstring("23314111"),BWIPJS.psstring("12414112"),BWIPJS.psstring("21514111"),BWIPJS.psstring("16141111"),BWIPJS.psstring("14341111"),BWIPJS.psstring("15232111"),BWIPJS.psstring("13432111"),BWIPJS.psstring("16123111"),BWIPJS.psstring("14323111"),BWIPJS.psstring("12523111"),BWIPJS.psstring("15214111"),BWIPJS.psstring("13414111"),BWIPJS.psstring("11614111"),BWIPJS.psstring("11151115"),BWIPJS.psstring("31151113"),BWIPJS.psstring("51151111"),BWIPJS.psstring("21142114"),BWIPJS.psstring("41142112"),BWIPJS.psstring("11133115"),BWIPJS.psstring("31133113"),BWIPJS.psstring("51133111"),BWIPJS.psstring("21124114"),BWIPJS.psstring("41124112"),BWIPJS.psstring("11115115"),BWIPJS.psstring("31115113"),BWIPJS.psstring("51115111"),BWIPJS.psstring("12151114"),BWIPJS.psstring("32151112"),BWIPJS.psstring("21251113"),BWIPJS.psstring("41251111"),BWIPJS.psstring("22142113"),BWIPJS.psstring("42142111"),BWIPJS.psstring("11242114"),BWIPJS.psstring("31242112"),BWIPJS.psstring("12133114"),BWIPJS.psstring("32133112"),BWIPJS.psstring("21233113"),BWIPJS.psstring("41233111"),BWIPJS.psstring("22124113"),BWIPJS.psstring("42124111"),BWIPJS.psstring("11224114"),BWIPJS.psstring("31224112"),BWIPJS.psstring("12115114"),BWIPJS.psstring("32115112"),BWIPJS.psstring("21215113"),BWIPJS.psstring("41215111"),BWIPJS.psstring("13151113"),BWIPJS.psstring("33151111"),BWIPJS.psstring("22251112"),BWIPJS.psstring("23142112"),BWIPJS.psstring("12242113"),BWIPJS.psstring("32242111"),BWIPJS.psstring("21342112"),BWIPJS.psstring("13133113"),BWIPJS.psstring("33133111"),BWIPJS.psstring("22233112"),BWIPJS.psstring("11333113"),BWIPJS.psstring("31333111"),BWIPJS.psstring("23124112"),BWIPJS.psstring("12224113"),BWIPJS.psstring("32224111"),BWIPJS.psstring("21324112"),BWIPJS.psstring("13115113"),BWIPJS.psstring("33115111"),BWIPJS.psstring("22215112"),BWIPJS.psstring("11315113"),BWIPJS.psstring("31315111"),BWIPJS.psstring("14151112"),BWIPJS.psstring("23251111"),BWIPJS.psstring("24142111"),BWIPJS.psstring("13242112"),BWIPJS.psstring("22342111"),BWIPJS.psstring("14133112"),BWIPJS.psstring("23233111"),BWIPJS.psstring("12333112"),BWIPJS.psstring("21433111"),BWIPJS.psstring("24124111"),BWIPJS.psstring("13224112"),BWIPJS.psstring("22324111"),BWIPJS.psstring("11424112"),BWIPJS.psstring("14115112"),BWIPJS.psstring("23215111"),BWIPJS.psstring("12315112"),BWIPJS.psstring("21415111"),BWIPJS.psstring("15151111"),BWIPJS.psstring("14242111"),BWIPJS.psstring("15133111"),BWIPJS.psstring("13333111"),BWIPJS.psstring("14224111"),BWIPJS.psstring("12424111"),BWIPJS.psstring("15115111"),BWIPJS.psstring("13315111"),BWIPJS.psstring("11515111"),BWIPJS.psstring("11161114"),BWIPJS.psstring("31161112"),BWIPJS.psstring("21152113"),BWIPJS.psstring("41152111"),BWIPJS.psstring("11143114"),BWIPJS.psstring("31143112"),BWIPJS.psstring("21134113"),BWIPJS.psstring("41134111"),BWIPJS.psstring("11125114"),BWIPJS.psstring("31125112"),BWIPJS.psstring("21116113"),BWIPJS.psstring("41116111"),BWIPJS.psstring("12161113"),BWIPJS.psstring("32161111"),BWIPJS.psstring("22152112"),BWIPJS.psstring("11252113"),BWIPJS.psstring("31252111"),BWIPJS.psstring("12143113"),BWIPJS.psstring("32143111"),BWIPJS.psstring("21243112"),BWIPJS.psstring("22134112"),BWIPJS.psstring("11234113"),BWIPJS.psstring("31234111"),BWIPJS.psstring("12125113"),BWIPJS.psstring("32125111"),BWIPJS.psstring("21225112"),BWIPJS.psstring("22116112"),BWIPJS.psstring("11216113"),BWIPJS.psstring("31216111"),BWIPJS.psstring("13161112"),BWIPJS.psstring("23152111"),BWIPJS.psstring("12252112"),BWIPJS.psstring("13143112"),BWIPJS.psstring("22243111"),BWIPJS.psstring("11343112"),BWIPJS.psstring("23134111"),BWIPJS.psstring("12234112"),BWIPJS.psstring("21334111"),BWIPJS.psstring("13125112"),BWIPJS.psstring("22225111"),BWIPJS.psstring("11325112"),BWIPJS.psstring("23116111"),BWIPJS.psstring("12216112"),BWIPJS.psstring("21316111"),BWIPJS.psstring("14161111"),BWIPJS.psstring("13252111"),BWIPJS.psstring("14143111"),BWIPJS.psstring("12343111"),BWIPJS.psstring("13234111"),BWIPJS.psstring("11434111"),BWIPJS.psstring("14125111"),BWIPJS.psstring("12325111"),BWIPJS.psstring("13216111"),BWIPJS.psstring("11416111"),BWIPJS.psstring("31111216"),BWIPJS.psstring("51111214"),BWIPJS.psstring("31211125"),BWIPJS.psstring("51211123"),BWIPJS.psstring("32111215"),BWIPJS.psstring("52111213"),BWIPJS.psstring("21211216"),BWIPJS.psstring("41211214"),BWIPJS.psstring("61211212"),BWIPJS.psstring("12211126"),BWIPJS.psstring("32211124"),BWIPJS.psstring("52211122"),BWIPJS.psstring("21311125"),BWIPJS.psstring("41311123"),BWIPJS.psstring("61311121"),BWIPJS.psstring("13111216"),BWIPJS.psstring("33111214"),BWIPJS.psstring("22211215"),BWIPJS.psstring("42211213"),BWIPJS.psstring("11311216"),BWIPJS.psstring("31311214"),BWIPJS.psstring("51311212"),BWIPJS.psstring("13211125"),BWIPJS.psstring("33211123"),BWIPJS.psstring("22311124"),BWIPJS.psstring("42311122"),BWIPJS.psstring("11411125"),BWIPJS.psstring("31411123"),BWIPJS.psstring("51411121"),BWIPJS.psstring("14111215"),BWIPJS.psstring("34111213"),BWIPJS.psstring("23211214"),BWIPJS.psstring("43211212"),BWIPJS.psstring("12311215"),BWIPJS.psstring("32311213"),BWIPJS.psstring("52311211"),BWIPJS.psstring("21411214"),BWIPJS.psstring("41411212"),BWIPJS.psstring("14211124"),BWIPJS.psstring("34211122"),BWIPJS.psstring("23311123"),BWIPJS.psstring("43311121"),BWIPJS.psstring("12411124"),BWIPJS.psstring("32411122"),BWIPJS.psstring("21511123"),BWIPJS.psstring("41511121"),BWIPJS.psstring("15111214"),BWIPJS.psstring("24211213"),BWIPJS.psstring("13311214"),BWIPJS.psstring("33311212"),BWIPJS.psstring("22411213"),BWIPJS.psstring("42411211"),BWIPJS.psstring("11511214"),BWIPJS.psstring("31511212"),BWIPJS.psstring("15211123"),BWIPJS.psstring("24311122"),BWIPJS.psstring("13411123"),BWIPJS.psstring("33411121"),BWIPJS.psstring("22511122"),BWIPJS.psstring("11611123"),BWIPJS.psstring("31611121"),BWIPJS.psstring("16111213"),BWIPJS.psstring("25211212"),BWIPJS.psstring("14311213"),BWIPJS.psstring("34311211"),BWIPJS.psstring("23411212"),BWIPJS.psstring("12511213"),BWIPJS.psstring("32511211"),BWIPJS.psstring("21611212"),BWIPJS.psstring("21121126"),BWIPJS.psstring("41121124"),BWIPJS.psstring("61121122"),BWIPJS.psstring("31112125"),BWIPJS.psstring("51112123"),BWIPJS.psstring("31121215"),BWIPJS.psstring("51121213"),BWIPJS.psstring("21112216"),BWIPJS.psstring("41112214"),BWIPJS.psstring("61112212"),BWIPJS.psstring("22121125"),BWIPJS.psstring("42121123"),BWIPJS.psstring("11221126"),BWIPJS.psstring("31221124"),BWIPJS.psstring("51221122"),BWIPJS.psstring("12112126"),BWIPJS.psstring("32112124"),BWIPJS.psstring("52112122"),BWIPJS.psstring("12121216"),BWIPJS.psstring("32121214"),BWIPJS.psstring("52121212"),BWIPJS.psstring("21221215"),BWIPJS.psstring("41221213"),BWIPJS.psstring("61221211"),BWIPJS.psstring("22112215"),BWIPJS.psstring("42112213"),BWIPJS.psstring("11212216"),BWIPJS.psstring("31212214"),BWIPJS.psstring("51212212"),BWIPJS.psstring("23121124"),BWIPJS.psstring("43121122"),BWIPJS.psstring("12221125"),BWIPJS.psstring("32221123"),BWIPJS.psstring("52221121"),BWIPJS.psstring("21321124"),BWIPJS.psstring("41321122"),BWIPJS.psstring("13112125"),BWIPJS.psstring("33112123"),BWIPJS.psstring("13121215"),BWIPJS.psstring("33121213"),BWIPJS.psstring("11312125"),BWIPJS.psstring("22221214"),BWIPJS.psstring("42221212"),BWIPJS.psstring("11321215"),BWIPJS.psstring("31321213"),BWIPJS.psstring("51321211"),BWIPJS.psstring("23112214"),BWIPJS.psstring("43112212"),BWIPJS.psstring("12212215"),BWIPJS.psstring("32212213"),BWIPJS.psstring("52212211"),BWIPJS.psstring("21312214"),BWIPJS.psstring("41312212"),BWIPJS.psstring("24121123"),BWIPJS.psstring("13221124"),BWIPJS.psstring("33221122"),BWIPJS.psstring("22321123"),BWIPJS.psstring("42321121"),BWIPJS.psstring("11421124"),BWIPJS.psstring("31421122"),BWIPJS.psstring("14112124"),BWIPJS.psstring("34112122"),BWIPJS.psstring("14121214"),BWIPJS.psstring("34121212"),BWIPJS.psstring("12312124"),BWIPJS.psstring("23221213"),BWIPJS.psstring("43221211"),BWIPJS.psstring("12321214"),BWIPJS.psstring("32321212"),BWIPJS.psstring("21421213"),BWIPJS.psstring("41421211"),BWIPJS.psstring("24112213"),BWIPJS.psstring("13212214"),BWIPJS.psstring("33212212"),BWIPJS.psstring("22312213"),BWIPJS.psstring("42312211"),BWIPJS.psstring("11412214"),BWIPJS.psstring("31412212"),BWIPJS.psstring("25121122"),BWIPJS.psstring("14221123"),BWIPJS.psstring("34221121"),BWIPJS.psstring("23321122"),BWIPJS.psstring("12421123"),BWIPJS.psstring("32421121"),BWIPJS.psstring("21521122"),BWIPJS.psstring("15112123"),BWIPJS.psstring("15121213"),BWIPJS.psstring("13312123"),BWIPJS.psstring("24221212"),BWIPJS.psstring("13321213"),BWIPJS.psstring("33321211"),BWIPJS.psstring("11512123"),BWIPJS.psstring("22421212"),BWIPJS.psstring("11521213"),BWIPJS.psstring("31521211"),BWIPJS.psstring("25112212"),BWIPJS.psstring("14212213"),BWIPJS.psstring("34212211"),BWIPJS.psstring("23312212"),BWIPJS.psstring("12412213"),BWIPJS.psstring("32412211"),BWIPJS.psstring("21512212"),BWIPJS.psstring("15221122"),BWIPJS.psstring("24321121"),BWIPJS.psstring("13421122"),BWIPJS.psstring("22521121"),BWIPJS.psstring("16112122"),BWIPJS.psstring("16121212"),BWIPJS.psstring("14312122"),BWIPJS.psstring("25221211"),BWIPJS.psstring("14321212"),BWIPJS.psstring("12512122"),BWIPJS.psstring("23421211"),BWIPJS.psstring("12521212"),BWIPJS.psstring("15212212"),BWIPJS.psstring("24312211"),BWIPJS.psstring("13412212"),BWIPJS.psstring("22512211"),BWIPJS.psstring("11612212"),BWIPJS.psstring("21131125"),BWIPJS.psstring("41131123"),BWIPJS.psstring("61131121"),BWIPJS.psstring("11122126"),BWIPJS.psstring("31122124"),BWIPJS.psstring("51122122"),BWIPJS.psstring("11131216"),BWIPJS.psstring("31131214"),BWIPJS.psstring("51131212"),BWIPJS.psstring("21113125"),BWIPJS.psstring("41113123"),BWIPJS.psstring("61113121"),BWIPJS.psstring("21122215"),BWIPJS.psstring("41122213"),BWIPJS.psstring("61122211"),BWIPJS.psstring("11113216"),BWIPJS.psstring("31113214"),BWIPJS.psstring("51113212"),BWIPJS.psstring("22131124"),BWIPJS.psstring("42131122"),BWIPJS.psstring("11231125"),BWIPJS.psstring("31231123"),BWIPJS.psstring("51231121"),BWIPJS.psstring("12122125"),BWIPJS.psstring("32122123"),BWIPJS.psstring("52122121"),BWIPJS.psstring("12131215"),BWIPJS.psstring("32131213"),BWIPJS.psstring("52131211"),BWIPJS.psstring("21231214"),BWIPJS.psstring("41231212"),BWIPJS.psstring("22113124"),BWIPJS.psstring("42113122"),BWIPJS.psstring("11213125"),BWIPJS.psstring("22122214"),BWIPJS.psstring("42122212"),BWIPJS.psstring("11222215"),BWIPJS.psstring("31222213"),BWIPJS.psstring("51222211"),BWIPJS.psstring("12113215"),BWIPJS.psstring("32113213"),BWIPJS.psstring("52113211"),BWIPJS.psstring("21213214"),BWIPJS.psstring("41213212"),BWIPJS.psstring("23131123"),BWIPJS.psstring("43131121"),BWIPJS.psstring("12231124"),BWIPJS.psstring("32231122"),BWIPJS.psstring("21331123"),BWIPJS.psstring("41331121"),BWIPJS.psstring("13122124"),BWIPJS.psstring("33122122"),BWIPJS.psstring("13131214"),BWIPJS.psstring("33131212"),BWIPJS.psstring("11322124"),BWIPJS.psstring("22231213"),BWIPJS.psstring("42231211"),BWIPJS.psstring("11331214"),BWIPJS.psstring("31331212"),BWIPJS.psstring("23113123"),BWIPJS.psstring("43113121"),BWIPJS.psstring("12213124"),BWIPJS.psstring("23122213"),BWIPJS.psstring("43122211"),BWIPJS.psstring("12222214"),BWIPJS.psstring("32222212"),BWIPJS.psstring("21322213"),BWIPJS.psstring("41322211"),BWIPJS.psstring("13113214"),BWIPJS.psstring("33113212"),BWIPJS.psstring("22213213"),BWIPJS.psstring("42213211"),BWIPJS.psstring("11313214"),BWIPJS.psstring("31313212"),BWIPJS.psstring("24131122"),BWIPJS.psstring("13231123"),BWIPJS.psstring("33231121"),BWIPJS.psstring("22331122"),BWIPJS.psstring("11431123"),BWIPJS.psstring("31431121"),BWIPJS.psstring("14122123"),BWIPJS.psstring("34122121"),BWIPJS.psstring("14131213"),BWIPJS.psstring("34131211"),BWIPJS.psstring("12322123"),BWIPJS.psstring("23231212"),BWIPJS.psstring("12331213"),BWIPJS.psstring("32331211"),BWIPJS.psstring("21431212"),BWIPJS.psstring("24113122"),BWIPJS.psstring("13213123"),BWIPJS.psstring("24122212"),BWIPJS.psstring("13222213"),BWIPJS.psstring("33222211"),BWIPJS.psstring("11413123"),BWIPJS.psstring("22322212"),BWIPJS.psstring("11422213"),BWIPJS.psstring("31422211"),BWIPJS.psstring("14113213"),BWIPJS.psstring("34113211"),BWIPJS.psstring("23213212"),BWIPJS.psstring("12313213"),BWIPJS.psstring("32313211"),BWIPJS.psstring("21413212"),BWIPJS.psstring("25131121"),BWIPJS.psstring("14231122"),BWIPJS.psstring("23331121"),BWIPJS.psstring("12431122"),BWIPJS.psstring("15122122"),BWIPJS.psstring("15131212"),BWIPJS.psstring("13322122"),BWIPJS.psstring("24231211"),BWIPJS.psstring("13331212"),BWIPJS.psstring("11522122"),BWIPJS.psstring("22431211"),BWIPJS.psstring("25113121"),BWIPJS.psstring("14213122"),BWIPJS.psstring("25122211"),BWIPJS.psstring("14222212"),BWIPJS.psstring("12413122"),BWIPJS.psstring("23322211"),BWIPJS.psstring("12422212"),BWIPJS.psstring("21522211"),BWIPJS.psstring("15113212"),BWIPJS.psstring("24213211"),BWIPJS.psstring("13313212"),BWIPJS.psstring("22413211"),BWIPJS.psstring("11513212"),BWIPJS.psstring("15231121"),BWIPJS.psstring("13431121"),BWIPJS.psstring("16122121"),BWIPJS.psstring("16131211"),BWIPJS.psstring("14322121"),BWIPJS.psstring("14331211"),BWIPJS.psstring("12522121"),BWIPJS.psstring("15213121"),BWIPJS.psstring("15222211"),BWIPJS.psstring("13413121"),BWIPJS.psstring("13422211"),BWIPJS.psstring("11613121"),BWIPJS.psstring("16113211"),BWIPJS.psstring("14313211"),BWIPJS.psstring("12513211"),BWIPJS.psstring("21141124"),BWIPJS.psstring("41141122"),BWIPJS.psstring("11132125"),BWIPJS.psstring("31132123"),BWIPJS.psstring("51132121"),BWIPJS.psstring("11141215"),BWIPJS.psstring("31141213"),BWIPJS.psstring("51141211"),BWIPJS.psstring("21123124"),BWIPJS.psstring("41123122"),BWIPJS.psstring("21132214"),BWIPJS.psstring("41132212"),BWIPJS.psstring("11114125"),BWIPJS.psstring("31114123"),BWIPJS.psstring("51114121"),BWIPJS.psstring("11123215"),BWIPJS.psstring("31123213"),BWIPJS.psstring("51123211"),BWIPJS.psstring("21114214"),BWIPJS.psstring("41114212"),BWIPJS.psstring("22141123"),BWIPJS.psstring("42141121"),BWIPJS.psstring("11241124"),BWIPJS.psstring("31241122"),BWIPJS.psstring("12132124"),BWIPJS.psstring("32132122"),BWIPJS.psstring("12141214"),BWIPJS.psstring("32141212"),BWIPJS.psstring("21241213"),BWIPJS.psstring("41241211"),BWIPJS.psstring("22123123"),BWIPJS.psstring("42123121"),BWIPJS.psstring("11223124"),BWIPJS.psstring("22132213"),BWIPJS.psstring("42132211"),BWIPJS.psstring("11232214"),BWIPJS.psstring("31232212"),BWIPJS.psstring("12114124"),BWIPJS.psstring("32114122"),BWIPJS.psstring("12123214"),BWIPJS.psstring("32123212"),BWIPJS.psstring("21223213"),BWIPJS.psstring("41223211"),BWIPJS.psstring("22114213"),BWIPJS.psstring("42114211"),BWIPJS.psstring("11214214"),BWIPJS.psstring("31214212"),BWIPJS.psstring("23141122"),BWIPJS.psstring("12241123"),BWIPJS.psstring("32241121"),BWIPJS.psstring("21341122"),BWIPJS.psstring("13132123"),BWIPJS.psstring("33132121"),BWIPJS.psstring("13141213"),BWIPJS.psstring("33141211"),BWIPJS.psstring("11332123"),BWIPJS.psstring("22241212"),BWIPJS.psstring("11341213"),BWIPJS.psstring("31341211"),BWIPJS.psstring("23123122"),BWIPJS.psstring("12223123"),BWIPJS.psstring("23132212"),BWIPJS.psstring("12232213"),BWIPJS.psstring("32232211"),BWIPJS.psstring("21332212"),BWIPJS.psstring("13114123"),BWIPJS.psstring("33114121"),BWIPJS.psstring("13123213"),BWIPJS.psstring("33123211"),BWIPJS.psstring("11314123"),BWIPJS.psstring("22223212"),BWIPJS.psstring("11323213"),BWIPJS.psstring("31323211"),BWIPJS.psstring("23114212"),BWIPJS.psstring("12214213"),BWIPJS.psstring("32214211"),BWIPJS.psstring("21314212"),BWIPJS.psstring("24141121"),BWIPJS.psstring("13241122"),BWIPJS.psstring("22341121"),BWIPJS.psstring("14132122"),BWIPJS.psstring("14141212"),BWIPJS.psstring("12332122"),BWIPJS.psstring("23241211"),BWIPJS.psstring("12341212"),BWIPJS.psstring("24123121"),BWIPJS.psstring("13223122"),BWIPJS.psstring("24132211"),BWIPJS.psstring("13232212"),BWIPJS.psstring("11423122"),BWIPJS.psstring("22332211"),BWIPJS.psstring("11432212"),BWIPJS.psstring("14114122"),BWIPJS.psstring("14123212"),BWIPJS.psstring("12314122"),BWIPJS.psstring("23223211"),BWIPJS.psstring("12323212"),BWIPJS.psstring("21423211"),BWIPJS.psstring("24114211"),BWIPJS.psstring("13214212"),BWIPJS.psstring("22314211"),BWIPJS.psstring("11414212"),BWIPJS.psstring("14241121"),BWIPJS.psstring("15132121"),BWIPJS.psstring("15141211"),BWIPJS.psstring("13332121"),BWIPJS.psstring("13341211"),BWIPJS.psstring("14223121"),BWIPJS.psstring("14232211"),BWIPJS.psstring("12423121"),BWIPJS.psstring("12432211"),BWIPJS.psstring("15114121"),BWIPJS.psstring("15123211"),BWIPJS.psstring("13314121"),BWIPJS.psstring("13323211"),BWIPJS.psstring("11514121"),BWIPJS.psstring("11523211"),BWIPJS.psstring("14214211"),BWIPJS.psstring("12414211"),BWIPJS.psstring("21151123"),BWIPJS.psstring("41151121"),BWIPJS.psstring("11142124"),BWIPJS.psstring("31142122"),BWIPJS.psstring("11151214"),BWIPJS.psstring("31151212"),BWIPJS.psstring("21133123"),BWIPJS.psstring("41133121"),BWIPJS.psstring("21142213"),BWIPJS.psstring("41142211"),BWIPJS.psstring("11124124"),BWIPJS.psstring("31124122"),BWIPJS.psstring("11133214"),BWIPJS.psstring("31133212"),BWIPJS.psstring("21115123"),BWIPJS.psstring("41115121"),BWIPJS.psstring("21124213"),BWIPJS.psstring("41124211"),BWIPJS.psstring("11115214"),BWIPJS.psstring("31115212"),BWIPJS.psstring("22151122"),BWIPJS.psstring("11251123"),BWIPJS.psstring("31251121"),BWIPJS.psstring("12142123"),BWIPJS.psstring("32142121"),BWIPJS.psstring("12151213"),BWIPJS.psstring("32151211"),BWIPJS.psstring("21251212"),BWIPJS.psstring("22133122"),BWIPJS.psstring("11233123"),BWIPJS.psstring("22142212"),BWIPJS.psstring("11242213"),BWIPJS.psstring("31242211"),BWIPJS.psstring("12124123"),BWIPJS.psstring("32124121"),BWIPJS.psstring("12133213"),BWIPJS.psstring("32133211"),BWIPJS.psstring("21233212"),BWIPJS.psstring("22115122"),BWIPJS.psstring("11215123"),BWIPJS.psstring("22124212"),BWIPJS.psstring("11224213"),BWIPJS.psstring("31224211"),BWIPJS.psstring("12115213"),BWIPJS.psstring("32115211"),BWIPJS.psstring("21215212"),BWIPJS.psstring("23151121"),BWIPJS.psstring("12251122"),BWIPJS.psstring("13142122"),BWIPJS.psstring("13151212"),BWIPJS.psstring("11342122"),BWIPJS.psstring("22251211"),BWIPJS.psstring("23133121"),BWIPJS.psstring("12233122"),BWIPJS.psstring("23142211"),BWIPJS.psstring("12242212"),BWIPJS.psstring("21342211"),BWIPJS.psstring("13124122"),BWIPJS.psstring("13133212"),BWIPJS.psstring("11324122"),BWIPJS.psstring("22233211"),BWIPJS.psstring("11333212"),BWIPJS.psstring("23115121"),BWIPJS.psstring("12215122"),BWIPJS.psstring("23124211"),BWIPJS.psstring("12224212"),BWIPJS.psstring("21324211"),BWIPJS.psstring("13115212"),BWIPJS.psstring("22215211"),BWIPJS.psstring("11315212"),BWIPJS.psstring("13251121"),BWIPJS.psstring("14142121"),BWIPJS.psstring("14151211"),BWIPJS.psstring("12342121"),BWIPJS.psstring("13233121"),BWIPJS.psstring("13242211"),BWIPJS.psstring("11433121"),BWIPJS.psstring("14124121"),BWIPJS.psstring("14133211"),BWIPJS.psstring("12324121"),BWIPJS.psstring("12333211"),BWIPJS.psstring("13215121"),BWIPJS.psstring("13224211"),BWIPJS.psstring("11415121"),BWIPJS.psstring("11424211"),BWIPJS.psstring("14115211"),BWIPJS.psstring("12315211"),BWIPJS.psstring("21161122"),BWIPJS.psstring("11152123"),BWIPJS.psstring("31152121"),BWIPJS.psstring("11161213"),BWIPJS.psstring("31161211"),BWIPJS.psstring("21143122"),BWIPJS.psstring("21152212"),BWIPJS.psstring("11134123"),BWIPJS.psstring("31134121"),BWIPJS.psstring("11143213"),BWIPJS.psstring("31143211"),BWIPJS.psstring("21125122"),BWIPJS.psstring("21134212"),BWIPJS.psstring("11116123"),BWIPJS.psstring("31116121"),BWIPJS.psstring("11125213"),BWIPJS.psstring("31125211"),BWIPJS.psstring("22161121"),BWIPJS.psstring("12152122"),BWIPJS.psstring("12161212"),BWIPJS.psstring("22143121"),BWIPJS.psstring("11243122"),BWIPJS.psstring("22152211"),BWIPJS.psstring("11252212"),BWIPJS.psstring("12134122"),BWIPJS.psstring("12143212"),BWIPJS.psstring("21243211"),BWIPJS.psstring("22125121"),BWIPJS.psstring("11225122"),BWIPJS.psstring("22134211"),BWIPJS.psstring("11234212"),BWIPJS.psstring("12116122"),BWIPJS.psstring("12125212"),BWIPJS.psstring("21225211"),BWIPJS.psstring("13152121"),BWIPJS.psstring("13161211"),BWIPJS.psstring("12243121"),BWIPJS.psstring("12252211"),BWIPJS.psstring("13134121"),BWIPJS.psstring("13143211"),BWIPJS.psstring("11334121"),BWIPJS.psstring("11343211"),BWIPJS.psstring("12225121"),BWIPJS.psstring("12234211"),BWIPJS.psstring("13116121"),BWIPJS.psstring("13125211"),BWIPJS.psstring("11316121"),BWIPJS.psstring("11325211"),BWIPJS.psstring("21111226"),BWIPJS.psstring("41111224"),BWIPJS.psstring("61111222"),BWIPJS.psstring("31111315"),BWIPJS.psstring("51111313"),BWIPJS.psstring("21211135"),BWIPJS.psstring("41211133"),BWIPJS.psstring("61211131"),BWIPJS.psstring("22111225"),BWIPJS.psstring("42111223"),BWIPJS.psstring("11211226"),BWIPJS.psstring("31211224"),BWIPJS.psstring("51211222"),BWIPJS.psstring("12111316"),BWIPJS.psstring("32111314"),BWIPJS.psstring("52111312"),BWIPJS.psstring("21211315"),BWIPJS.psstring("41211313"),BWIPJS.psstring("61211311"),BWIPJS.psstring("22211134"),BWIPJS.psstring("42211132"),BWIPJS.psstring("11311135"),BWIPJS.psstring("31311133"),BWIPJS.psstring("51311131"),BWIPJS.psstring("23111224"),BWIPJS.psstring("43111222"),BWIPJS.psstring("12211225"),BWIPJS.psstring("32211223"),BWIPJS.psstring("52211221"),BWIPJS.psstring("21311224"),BWIPJS.psstring("41311222"),BWIPJS.psstring("13111315"),BWIPJS.psstring("33111313"),BWIPJS.psstring("22211314"),BWIPJS.psstring("42211312"),BWIPJS.psstring("11311315"),BWIPJS.psstring("31311313"),BWIPJS.psstring("51311311"),BWIPJS.psstring("23211133"),BWIPJS.psstring("43211131"),BWIPJS.psstring("12311134"),BWIPJS.psstring("32311132"),BWIPJS.psstring("21411133"),BWIPJS.psstring("41411131"),BWIPJS.psstring("24111223"),BWIPJS.psstring("13211224"),BWIPJS.psstring("33211222"),BWIPJS.psstring("22311223"),BWIPJS.psstring("42311221"),BWIPJS.psstring("11411224"),BWIPJS.psstring("31411222"),BWIPJS.psstring("14111314"),BWIPJS.psstring("34111312"),BWIPJS.psstring("23211313"),BWIPJS.psstring("43211311"),BWIPJS.psstring("12311314"),BWIPJS.psstring("32311312"),BWIPJS.psstring("21411313"),BWIPJS.psstring("41411311"),BWIPJS.psstring("24211132"),BWIPJS.psstring("13311133"),BWIPJS.psstring("33311131"),BWIPJS.psstring("22411132"),BWIPJS.psstring("11511133"),BWIPJS.psstring("31511131"),BWIPJS.psstring("25111222"),BWIPJS.psstring("14211223"),BWIPJS.psstring("34211221"),BWIPJS.psstring("23311222"),BWIPJS.psstring("12411223"),BWIPJS.psstring("32411221"),BWIPJS.psstring("21511222"),BWIPJS.psstring("15111313"),BWIPJS.psstring("24211312"),BWIPJS.psstring("13311313"),BWIPJS.psstring("33311311"),BWIPJS.psstring("22411312"),BWIPJS.psstring("11511313"),BWIPJS.psstring("31511311"),BWIPJS.psstring("25211131"),BWIPJS.psstring("14311132"),BWIPJS.psstring("23411131"),BWIPJS.psstring("12511132"),BWIPJS.psstring("21611131"),BWIPJS.psstring("15211222"),BWIPJS.psstring("24311221"),BWIPJS.psstring("13411222"),BWIPJS.psstring("22511221"),BWIPJS.psstring("11611222"),BWIPJS.psstring("16111312"),BWIPJS.psstring("25211311"),BWIPJS.psstring("14311312"),BWIPJS.psstring("23411311"),BWIPJS.psstring("12511312"),BWIPJS.psstring("21611311"),BWIPJS.psstring("31121134"),BWIPJS.psstring("51121132"),BWIPJS.psstring("21112135"),BWIPJS.psstring("41112133"),BWIPJS.psstring("61112131"),BWIPJS.psstring("21121225"),BWIPJS.psstring("41121223"),BWIPJS.psstring("61121221"),BWIPJS.psstring("11112226"),BWIPJS.psstring("31112224"),BWIPJS.psstring("51112222"),BWIPJS.psstring("11121316"),BWIPJS.psstring("31121314"),BWIPJS.psstring("51121312"),BWIPJS.psstring("21112315"),BWIPJS.psstring("41112313"),BWIPJS.psstring("61112311"),BWIPJS.psstring("12121135"),BWIPJS.psstring("32121133"),BWIPJS.psstring("52121131"),BWIPJS.psstring("21221134"),BWIPJS.psstring("41221132"),BWIPJS.psstring("22112134"),BWIPJS.psstring("42112132"),BWIPJS.psstring("11212135"),BWIPJS.psstring("22121224"),BWIPJS.psstring("42121222"),BWIPJS.psstring("11221225"),BWIPJS.psstring("31221223"),BWIPJS.psstring("51221221"),BWIPJS.psstring("12112225"),BWIPJS.psstring("32112223"),BWIPJS.psstring("52112221"),BWIPJS.psstring("12121315"),BWIPJS.psstring("32121313"),BWIPJS.psstring("52121311"),BWIPJS.psstring("21221314"),BWIPJS.psstring("41221312"),BWIPJS.psstring("22112314"),BWIPJS.psstring("42112312"),BWIPJS.psstring("11212315"),BWIPJS.psstring("31212313"),BWIPJS.psstring("51212311"),BWIPJS.psstring("13121134"),BWIPJS.psstring("33121132"),BWIPJS.psstring("22221133"),BWIPJS.psstring("42221131"),BWIPJS.psstring("11321134"),BWIPJS.psstring("31321132"),BWIPJS.psstring("23112133"),BWIPJS.psstring("43112131"),BWIPJS.psstring("12212134"),BWIPJS.psstring("23121223"),BWIPJS.psstring("43121221"),BWIPJS.psstring("12221224"),BWIPJS.psstring("32221222"),BWIPJS.psstring("21321223"),BWIPJS.psstring("41321221"),BWIPJS.psstring("13112224"),BWIPJS.psstring("33112222"),BWIPJS.psstring("13121314"),BWIPJS.psstring("33121312"),BWIPJS.psstring("11312224"),BWIPJS.psstring("22221313"),BWIPJS.psstring("42221311"),BWIPJS.psstring("11321314"),BWIPJS.psstring("31321312"),BWIPJS.psstring("23112313"),BWIPJS.psstring("43112311"),BWIPJS.psstring("12212314"),BWIPJS.psstring("32212312"),BWIPJS.psstring("21312313"),BWIPJS.psstring("41312311"),BWIPJS.psstring("14121133"),BWIPJS.psstring("34121131"),BWIPJS.psstring("23221132"),BWIPJS.psstring("12321133"),BWIPJS.psstring("32321131"),BWIPJS.psstring("21421132"),BWIPJS.psstring("24112132"),BWIPJS.psstring("13212133"),BWIPJS.psstring("24121222"),BWIPJS.psstring("13221223"),BWIPJS.psstring("33221221"),BWIPJS.psstring("11412133"),BWIPJS.psstring("22321222"),BWIPJS.psstring("11421223"),BWIPJS.psstring("31421221"),BWIPJS.psstring("14112223"),BWIPJS.psstring("34112221"),BWIPJS.psstring("14121313"),BWIPJS.psstring("34121311"),BWIPJS.psstring("12312223"),BWIPJS.psstring("23221312"),BWIPJS.psstring("12321313"),BWIPJS.psstring("32321311"),BWIPJS.psstring("21421312"),BWIPJS.psstring("24112312"),BWIPJS.psstring("13212313"),BWIPJS.psstring("33212311"),BWIPJS.psstring("22312312"),BWIPJS.psstring("11412313"),BWIPJS.psstring("31412311"),BWIPJS.psstring("15121132"),BWIPJS.psstring("24221131"),BWIPJS.psstring("13321132"),BWIPJS.psstring("22421131")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("22121116"),BWIPJS.psstring("42121114"),BWIPJS.psstring("31221115"),BWIPJS.psstring("51221113"),BWIPJS.psstring("32112115"),BWIPJS.psstring("52112113"),BWIPJS.psstring("21212116"),BWIPJS.psstring("41212114"),BWIPJS.psstring("61212112"),BWIPJS.psstring("23121115"),BWIPJS.psstring("43121113"),BWIPJS.psstring("12221116"),BWIPJS.psstring("32221114"),BWIPJS.psstring("52221112"),BWIPJS.psstring("21321115"),BWIPJS.psstring("41321113"),BWIPJS.psstring("61321111"),BWIPJS.psstring("13112116"),BWIPJS.psstring("33112114"),BWIPJS.psstring("22212115"),BWIPJS.psstring("42212113"),BWIPJS.psstring("11312116"),BWIPJS.psstring("31312114"),BWIPJS.psstring("51312112"),BWIPJS.psstring("24121114"),BWIPJS.psstring("13221115"),BWIPJS.psstring("33221113"),BWIPJS.psstring("22321114"),BWIPJS.psstring("42321112"),BWIPJS.psstring("11421115"),BWIPJS.psstring("31421113"),BWIPJS.psstring("51421111"),BWIPJS.psstring("14112115"),BWIPJS.psstring("34112113"),BWIPJS.psstring("23212114"),BWIPJS.psstring("43212112"),BWIPJS.psstring("12312115"),BWIPJS.psstring("32312113"),BWIPJS.psstring("52312111"),BWIPJS.psstring("21412114"),BWIPJS.psstring("41412112"),BWIPJS.psstring("25121113"),BWIPJS.psstring("14221114"),BWIPJS.psstring("34221112"),BWIPJS.psstring("23321113"),BWIPJS.psstring("43321111"),BWIPJS.psstring("12421114"),BWIPJS.psstring("32421112"),BWIPJS.psstring("21521113"),BWIPJS.psstring("41521111"),BWIPJS.psstring("15112114"),BWIPJS.psstring("24212113"),BWIPJS.psstring("13312114"),BWIPJS.psstring("33312112"),BWIPJS.psstring("22412113"),BWIPJS.psstring("42412111"),BWIPJS.psstring("11512114"),BWIPJS.psstring("31512112"),BWIPJS.psstring("15221113"),BWIPJS.psstring("24321112"),BWIPJS.psstring("13421113"),BWIPJS.psstring("33421111"),BWIPJS.psstring("22521112"),BWIPJS.psstring("16112113"),BWIPJS.psstring("25212112"),BWIPJS.psstring("14312113"),BWIPJS.psstring("34312111"),BWIPJS.psstring("23412112"),BWIPJS.psstring("12512113"),BWIPJS.psstring("32512111"),BWIPJS.psstring("21612112"),BWIPJS.psstring("21131116"),BWIPJS.psstring("41131114"),BWIPJS.psstring("61131112"),BWIPJS.psstring("31122115"),BWIPJS.psstring("51122113"),BWIPJS.psstring("21113116"),BWIPJS.psstring("41113114"),BWIPJS.psstring("61113112"),BWIPJS.psstring("22131115"),BWIPJS.psstring("42131113"),BWIPJS.psstring("11231116"),BWIPJS.psstring("31231114"),BWIPJS.psstring("51231112"),BWIPJS.psstring("12122116"),BWIPJS.psstring("32122114"),BWIPJS.psstring("52122112"),BWIPJS.psstring("21222115"),BWIPJS.psstring("41222113"),BWIPJS.psstring("61222111"),BWIPJS.psstring("22113115"),BWIPJS.psstring("42113113"),BWIPJS.psstring("11213116"),BWIPJS.psstring("31213114"),BWIPJS.psstring("51213112"),BWIPJS.psstring("23131114"),BWIPJS.psstring("43131112"),BWIPJS.psstring("12231115"),BWIPJS.psstring("32231113"),BWIPJS.psstring("52231111"),BWIPJS.psstring("21331114"),BWIPJS.psstring("41331112"),BWIPJS.psstring("13122115"),BWIPJS.psstring("33122113"),BWIPJS.psstring("22222114"),BWIPJS.psstring("42222112"),BWIPJS.psstring("11322115"),BWIPJS.psstring("31322113"),BWIPJS.psstring("51322111"),BWIPJS.psstring("23113114"),BWIPJS.psstring("43113112"),BWIPJS.psstring("12213115"),BWIPJS.psstring("32213113"),BWIPJS.psstring("52213111"),BWIPJS.psstring("21313114"),BWIPJS.psstring("41313112"),BWIPJS.psstring("24131113"),BWIPJS.psstring("13231114"),BWIPJS.psstring("33231112"),BWIPJS.psstring("22331113"),BWIPJS.psstring("42331111"),BWIPJS.psstring("11431114"),BWIPJS.psstring("31431112"),BWIPJS.psstring("14122114"),BWIPJS.psstring("34122112"),BWIPJS.psstring("23222113"),BWIPJS.psstring("43222111"),BWIPJS.psstring("12322114"),BWIPJS.psstring("32322112"),BWIPJS.psstring("21422113"),BWIPJS.psstring("41422111"),BWIPJS.psstring("24113113"),BWIPJS.psstring("13213114"),BWIPJS.psstring("33213112"),BWIPJS.psstring("22313113"),BWIPJS.psstring("42313111"),BWIPJS.psstring("11413114"),BWIPJS.psstring("31413112"),BWIPJS.psstring("25131112"),BWIPJS.psstring("14231113"),BWIPJS.psstring("34231111"),BWIPJS.psstring("23331112"),BWIPJS.psstring("12431113"),BWIPJS.psstring("32431111"),BWIPJS.psstring("15122113"),BWIPJS.psstring("24222112"),BWIPJS.psstring("13322113"),BWIPJS.psstring("33322111"),BWIPJS.psstring("22422112"),BWIPJS.psstring("11522113"),BWIPJS.psstring("31522111"),BWIPJS.psstring("25113112"),BWIPJS.psstring("14213113"),BWIPJS.psstring("34213111"),BWIPJS.psstring("23313112"),BWIPJS.psstring("12413113"),BWIPJS.psstring("32413111"),BWIPJS.psstring("21513112"),BWIPJS.psstring("15231112"),BWIPJS.psstring("24331111"),BWIPJS.psstring("13431112"),BWIPJS.psstring("16122112"),BWIPJS.psstring("25222111"),BWIPJS.psstring("14322112"),BWIPJS.psstring("23422111"),BWIPJS.psstring("12522112"),BWIPJS.psstring("15213112"),BWIPJS.psstring("24313111"),BWIPJS.psstring("13413112"),BWIPJS.psstring("22513111"),BWIPJS.psstring("11613112"),BWIPJS.psstring("21141115"),BWIPJS.psstring("41141113"),BWIPJS.psstring("61141111"),BWIPJS.psstring("11132116"),BWIPJS.psstring("31132114"),BWIPJS.psstring("51132112"),BWIPJS.psstring("21123115"),BWIPJS.psstring("41123113"),BWIPJS.psstring("61123111"),BWIPJS.psstring("11114116"),BWIPJS.psstring("31114114"),BWIPJS.psstring("51114112"),BWIPJS.psstring("22141114"),BWIPJS.psstring("42141112"),BWIPJS.psstring("11241115"),BWIPJS.psstring("31241113"),BWIPJS.psstring("51241111"),BWIPJS.psstring("12132115"),BWIPJS.psstring("32132113"),BWIPJS.psstring("52132111"),BWIPJS.psstring("21232114"),BWIPJS.psstring("41232112"),BWIPJS.psstring("22123114"),BWIPJS.psstring("42123112"),BWIPJS.psstring("11223115"),BWIPJS.psstring("31223113"),BWIPJS.psstring("51223111"),BWIPJS.psstring("12114115"),BWIPJS.psstring("32114113"),BWIPJS.psstring("52114111"),BWIPJS.psstring("21214114"),BWIPJS.psstring("41214112"),BWIPJS.psstring("23141113"),BWIPJS.psstring("43141111"),BWIPJS.psstring("12241114"),BWIPJS.psstring("32241112"),BWIPJS.psstring("21341113"),BWIPJS.psstring("41341111"),BWIPJS.psstring("13132114"),BWIPJS.psstring("33132112"),BWIPJS.psstring("22232113"),BWIPJS.psstring("42232111"),BWIPJS.psstring("11332114"),BWIPJS.psstring("31332112"),BWIPJS.psstring("23123113"),BWIPJS.psstring("43123111"),BWIPJS.psstring("12223114"),BWIPJS.psstring("32223112"),BWIPJS.psstring("21323113"),BWIPJS.psstring("41323111"),BWIPJS.psstring("13114114"),BWIPJS.psstring("33114112"),BWIPJS.psstring("22214113"),BWIPJS.psstring("42214111"),BWIPJS.psstring("11314114"),BWIPJS.psstring("31314112"),BWIPJS.psstring("24141112"),BWIPJS.psstring("13241113"),BWIPJS.psstring("33241111"),BWIPJS.psstring("22341112"),BWIPJS.psstring("14132113"),BWIPJS.psstring("34132111"),BWIPJS.psstring("23232112"),BWIPJS.psstring("12332113"),BWIPJS.psstring("32332111"),BWIPJS.psstring("21432112"),BWIPJS.psstring("24123112"),BWIPJS.psstring("13223113"),BWIPJS.psstring("33223111"),BWIPJS.psstring("22323112"),BWIPJS.psstring("11423113"),BWIPJS.psstring("31423111"),BWIPJS.psstring("14114113"),BWIPJS.psstring("34114111"),BWIPJS.psstring("23214112"),BWIPJS.psstring("12314113"),BWIPJS.psstring("32314111"),BWIPJS.psstring("21414112"),BWIPJS.psstring("25141111"),BWIPJS.psstring("14241112"),BWIPJS.psstring("23341111"),BWIPJS.psstring("15132112"),BWIPJS.psstring("24232111"),BWIPJS.psstring("13332112"),BWIPJS.psstring("22432111"),BWIPJS.psstring("25123111"),BWIPJS.psstring("14223112"),BWIPJS.psstring("23323111"),BWIPJS.psstring("12423112"),BWIPJS.psstring("21523111"),BWIPJS.psstring("15114112"),BWIPJS.psstring("24214111"),BWIPJS.psstring("13314112"),BWIPJS.psstring("22414111"),BWIPJS.psstring("11514112"),BWIPJS.psstring("15241111"),BWIPJS.psstring("16132111"),BWIPJS.psstring("14332111"),BWIPJS.psstring("15223111"),BWIPJS.psstring("13423111"),BWIPJS.psstring("16114111"),BWIPJS.psstring("14314111"),BWIPJS.psstring("12514111"),BWIPJS.psstring("21151114"),BWIPJS.psstring("41151112"),BWIPJS.psstring("11142115"),BWIPJS.psstring("31142113"),BWIPJS.psstring("51142111"),BWIPJS.psstring("21133114"),BWIPJS.psstring("41133112"),BWIPJS.psstring("11124115"),BWIPJS.psstring("31124113"),BWIPJS.psstring("51124111"),BWIPJS.psstring("21115114"),BWIPJS.psstring("41115112"),BWIPJS.psstring("22151113"),BWIPJS.psstring("42151111"),BWIPJS.psstring("11251114"),BWIPJS.psstring("31251112"),BWIPJS.psstring("12142114"),BWIPJS.psstring("32142112"),BWIPJS.psstring("21242113"),BWIPJS.psstring("41242111"),BWIPJS.psstring("22133113"),BWIPJS.psstring("42133111"),BWIPJS.psstring("11233114"),BWIPJS.psstring("31233112"),BWIPJS.psstring("12124114"),BWIPJS.psstring("32124112"),BWIPJS.psstring("21224113"),BWIPJS.psstring("41224111"),BWIPJS.psstring("22115113"),BWIPJS.psstring("42115111"),BWIPJS.psstring("11215114"),BWIPJS.psstring("31215112"),BWIPJS.psstring("23151112"),BWIPJS.psstring("12251113"),BWIPJS.psstring("32251111"),BWIPJS.psstring("13142113"),BWIPJS.psstring("33142111"),BWIPJS.psstring("22242112"),BWIPJS.psstring("11342113"),BWIPJS.psstring("31342111"),BWIPJS.psstring("23133112"),BWIPJS.psstring("12233113"),BWIPJS.psstring("32233111"),BWIPJS.psstring("21333112"),BWIPJS.psstring("13124113"),BWIPJS.psstring("33124111"),BWIPJS.psstring("22224112"),BWIPJS.psstring("11324113"),BWIPJS.psstring("31324111"),BWIPJS.psstring("23115112"),BWIPJS.psstring("12215113"),BWIPJS.psstring("32215111"),BWIPJS.psstring("21315112"),BWIPJS.psstring("24151111"),BWIPJS.psstring("13251112"),BWIPJS.psstring("14142112"),BWIPJS.psstring("23242111"),BWIPJS.psstring("12342112"),BWIPJS.psstring("24133111"),BWIPJS.psstring("13233112"),BWIPJS.psstring("22333111"),BWIPJS.psstring("11433112"),BWIPJS.psstring("14124112"),BWIPJS.psstring("23224111"),BWIPJS.psstring("12324112"),BWIPJS.psstring("21424111"),BWIPJS.psstring("24115111"),BWIPJS.psstring("13215112"),BWIPJS.psstring("22315111"),BWIPJS.psstring("11415112"),BWIPJS.psstring("14251111"),BWIPJS.psstring("15142111"),BWIPJS.psstring("13342111"),BWIPJS.psstring("14233111"),BWIPJS.psstring("12433111"),BWIPJS.psstring("15124111"),BWIPJS.psstring("13324111"),BWIPJS.psstring("11524111"),BWIPJS.psstring("14215111"),BWIPJS.psstring("12415111"),BWIPJS.psstring("21161113"),BWIPJS.psstring("41161111"),BWIPJS.psstring("11152114"),BWIPJS.psstring("31152112"),BWIPJS.psstring("21143113"),BWIPJS.psstring("41143111"),BWIPJS.psstring("11134114"),BWIPJS.psstring("31134112"),BWIPJS.psstring("21125113"),BWIPJS.psstring("41125111"),BWIPJS.psstring("11116114"),BWIPJS.psstring("31116112"),BWIPJS.psstring("22161112"),BWIPJS.psstring("12152113"),BWIPJS.psstring("32152111"),BWIPJS.psstring("21252112"),BWIPJS.psstring("22143112"),BWIPJS.psstring("11243113"),BWIPJS.psstring("31243111"),BWIPJS.psstring("12134113"),BWIPJS.psstring("32134111"),BWIPJS.psstring("21234112"),BWIPJS.psstring("22125112"),BWIPJS.psstring("11225113"),BWIPJS.psstring("31225111"),BWIPJS.psstring("12116113"),BWIPJS.psstring("32116111"),BWIPJS.psstring("21216112"),BWIPJS.psstring("23161111"),BWIPJS.psstring("13152112"),BWIPJS.psstring("22252111"),BWIPJS.psstring("23143111"),BWIPJS.psstring("12243112"),BWIPJS.psstring("21343111"),BWIPJS.psstring("13134112"),BWIPJS.psstring("22234111"),BWIPJS.psstring("11334112"),BWIPJS.psstring("23125111"),BWIPJS.psstring("12225112"),BWIPJS.psstring("21325111"),BWIPJS.psstring("13116112"),BWIPJS.psstring("22216111"),BWIPJS.psstring("11316112"),BWIPJS.psstring("14152111"),BWIPJS.psstring("13243111"),BWIPJS.psstring("14134111"),BWIPJS.psstring("12334111"),BWIPJS.psstring("13225111"),BWIPJS.psstring("11425111"),BWIPJS.psstring("14116111"),BWIPJS.psstring("12316111"),BWIPJS.psstring("41111215"),BWIPJS.psstring("61111213"),BWIPJS.psstring("21211126"),BWIPJS.psstring("41211124"),BWIPJS.psstring("61211122"),BWIPJS.psstring("22111216"),BWIPJS.psstring("42111214"),BWIPJS.psstring("31211215"),BWIPJS.psstring("51211213"),BWIPJS.psstring("22211125"),BWIPJS.psstring("42211123"),BWIPJS.psstring("11311126"),BWIPJS.psstring("31311124"),BWIPJS.psstring("51311122"),BWIPJS.psstring("23111215"),BWIPJS.psstring("43111213"),BWIPJS.psstring("12211216"),BWIPJS.psstring("32211214"),BWIPJS.psstring("52211212"),BWIPJS.psstring("21311215"),BWIPJS.psstring("41311213"),BWIPJS.psstring("61311211"),BWIPJS.psstring("23211124"),BWIPJS.psstring("43211122"),BWIPJS.psstring("12311125"),BWIPJS.psstring("32311123"),BWIPJS.psstring("52311121"),BWIPJS.psstring("21411124"),BWIPJS.psstring("41411122"),BWIPJS.psstring("24111214"),BWIPJS.psstring("13211215"),BWIPJS.psstring("33211213"),BWIPJS.psstring("22311214"),BWIPJS.psstring("42311212"),BWIPJS.psstring("11411215"),BWIPJS.psstring("31411213"),BWIPJS.psstring("51411211"),BWIPJS.psstring("24211123"),BWIPJS.psstring("13311124"),BWIPJS.psstring("33311122"),BWIPJS.psstring("22411123"),BWIPJS.psstring("42411121"),BWIPJS.psstring("11511124"),BWIPJS.psstring("31511122"),BWIPJS.psstring("25111213"),BWIPJS.psstring("14211214"),BWIPJS.psstring("34211212"),BWIPJS.psstring("23311213"),BWIPJS.psstring("43311211"),BWIPJS.psstring("12411214"),BWIPJS.psstring("32411212"),BWIPJS.psstring("21511213"),BWIPJS.psstring("41511211"),BWIPJS.psstring("25211122"),BWIPJS.psstring("14311123"),BWIPJS.psstring("34311121"),BWIPJS.psstring("23411122"),BWIPJS.psstring("12511123"),BWIPJS.psstring("32511121"),BWIPJS.psstring("21611122"),BWIPJS.psstring("15211213"),BWIPJS.psstring("24311212"),BWIPJS.psstring("13411213"),BWIPJS.psstring("33411211"),BWIPJS.psstring("22511212"),BWIPJS.psstring("11611213"),BWIPJS.psstring("31611211"),BWIPJS.psstring("31121125"),BWIPJS.psstring("51121123"),BWIPJS.psstring("21112126"),BWIPJS.psstring("41112124"),BWIPJS.psstring("61112122"),BWIPJS.psstring("21121216"),BWIPJS.psstring("41121214"),BWIPJS.psstring("61121212"),BWIPJS.psstring("31112215"),BWIPJS.psstring("51112213"),BWIPJS.psstring("12121126"),BWIPJS.psstring("32121124"),BWIPJS.psstring("52121122"),BWIPJS.psstring("21221125"),BWIPJS.psstring("41221123"),BWIPJS.psstring("61221121"),BWIPJS.psstring("22112125"),BWIPJS.psstring("42112123"),BWIPJS.psstring("11212126"),BWIPJS.psstring("22121215"),BWIPJS.psstring("42121213"),BWIPJS.psstring("11221216"),BWIPJS.psstring("31221214"),BWIPJS.psstring("51221212"),BWIPJS.psstring("12112216"),BWIPJS.psstring("32112214"),BWIPJS.psstring("52112212"),BWIPJS.psstring("21212215"),BWIPJS.psstring("41212213"),BWIPJS.psstring("61212211"),BWIPJS.psstring("13121125"),BWIPJS.psstring("33121123"),BWIPJS.psstring("22221124"),BWIPJS.psstring("42221122"),BWIPJS.psstring("11321125"),BWIPJS.psstring("31321123"),BWIPJS.psstring("51321121"),BWIPJS.psstring("23112124"),BWIPJS.psstring("43112122"),BWIPJS.psstring("12212125"),BWIPJS.psstring("23121214"),BWIPJS.psstring("43121212"),BWIPJS.psstring("12221215"),BWIPJS.psstring("32221213"),BWIPJS.psstring("52221211"),BWIPJS.psstring("21321214"),BWIPJS.psstring("41321212"),BWIPJS.psstring("13112215"),BWIPJS.psstring("33112213"),BWIPJS.psstring("22212214"),BWIPJS.psstring("42212212"),BWIPJS.psstring("11312215"),BWIPJS.psstring("31312213"),BWIPJS.psstring("51312211"),BWIPJS.psstring("14121124"),BWIPJS.psstring("34121122"),BWIPJS.psstring("23221123"),BWIPJS.psstring("43221121"),BWIPJS.psstring("12321124"),BWIPJS.psstring("32321122"),BWIPJS.psstring("21421123"),BWIPJS.psstring("41421121"),BWIPJS.psstring("24112123"),BWIPJS.psstring("13212124"),BWIPJS.psstring("24121213"),BWIPJS.psstring("13221214"),BWIPJS.psstring("33221212"),BWIPJS.psstring("11412124"),BWIPJS.psstring("22321213"),BWIPJS.psstring("42321211"),BWIPJS.psstring("11421214"),BWIPJS.psstring("31421212"),BWIPJS.psstring("14112214"),BWIPJS.psstring("34112212"),BWIPJS.psstring("23212213"),BWIPJS.psstring("43212211"),BWIPJS.psstring("12312214"),BWIPJS.psstring("32312212"),BWIPJS.psstring("21412213"),BWIPJS.psstring("41412211"),BWIPJS.psstring("15121123"),BWIPJS.psstring("24221122"),BWIPJS.psstring("13321123"),BWIPJS.psstring("33321121"),BWIPJS.psstring("22421122"),BWIPJS.psstring("11521123"),BWIPJS.psstring("31521121"),BWIPJS.psstring("25112122"),BWIPJS.psstring("14212123"),BWIPJS.psstring("25121212"),BWIPJS.psstring("14221213"),BWIPJS.psstring("34221211"),BWIPJS.psstring("12412123"),BWIPJS.psstring("23321212"),BWIPJS.psstring("12421213"),BWIPJS.psstring("32421211"),BWIPJS.psstring("21521212"),BWIPJS.psstring("15112213"),BWIPJS.psstring("24212212"),BWIPJS.psstring("13312213"),BWIPJS.psstring("33312211"),BWIPJS.psstring("22412212"),BWIPJS.psstring("11512213"),BWIPJS.psstring("31512211"),BWIPJS.psstring("16121122"),BWIPJS.psstring("25221121"),BWIPJS.psstring("14321122"),BWIPJS.psstring("23421121"),BWIPJS.psstring("12521122"),BWIPJS.psstring("15212122"),BWIPJS.psstring("15221212"),BWIPJS.psstring("13412122"),BWIPJS.psstring("24321211"),BWIPJS.psstring("13421212"),BWIPJS.psstring("11612122"),BWIPJS.psstring("22521211"),BWIPJS.psstring("16112212"),BWIPJS.psstring("25212211"),BWIPJS.psstring("14312212"),BWIPJS.psstring("23412211"),BWIPJS.psstring("12512212"),BWIPJS.psstring("21612211"),BWIPJS.psstring("11131126"),BWIPJS.psstring("31131124"),BWIPJS.psstring("51131122"),BWIPJS.psstring("21122125"),BWIPJS.psstring("41122123"),BWIPJS.psstring("61122121"),BWIPJS.psstring("21131215"),BWIPJS.psstring("41131213"),BWIPJS.psstring("61131211"),BWIPJS.psstring("11113126"),BWIPJS.psstring("31113124"),BWIPJS.psstring("51113122"),BWIPJS.psstring("11122216"),BWIPJS.psstring("31122214"),BWIPJS.psstring("51122212"),BWIPJS.psstring("21113215"),BWIPJS.psstring("41113213"),BWIPJS.psstring("61113211"),BWIPJS.psstring("12131125"),BWIPJS.psstring("32131123"),BWIPJS.psstring("52131121"),BWIPJS.psstring("21231124"),BWIPJS.psstring("41231122"),BWIPJS.psstring("22122124"),BWIPJS.psstring("42122122"),BWIPJS.psstring("11222125"),BWIPJS.psstring("22131214"),BWIPJS.psstring("42131212"),BWIPJS.psstring("11231215"),BWIPJS.psstring("31231213"),BWIPJS.psstring("51231211"),BWIPJS.psstring("12113125"),BWIPJS.psstring("32113123"),BWIPJS.psstring("52113121"),BWIPJS.psstring("12122215"),BWIPJS.psstring("32122213"),BWIPJS.psstring("52122211"),BWIPJS.psstring("21222214"),BWIPJS.psstring("41222212"),BWIPJS.psstring("22113214"),BWIPJS.psstring("42113212"),BWIPJS.psstring("11213215"),BWIPJS.psstring("31213213"),BWIPJS.psstring("51213211"),BWIPJS.psstring("13131124"),BWIPJS.psstring("33131122"),BWIPJS.psstring("22231123"),BWIPJS.psstring("42231121"),BWIPJS.psstring("11331124"),BWIPJS.psstring("31331122"),BWIPJS.psstring("23122123"),BWIPJS.psstring("43122121"),BWIPJS.psstring("12222124"),BWIPJS.psstring("23131213"),BWIPJS.psstring("43131211"),BWIPJS.psstring("12231214"),BWIPJS.psstring("32231212"),BWIPJS.psstring("21331213"),BWIPJS.psstring("41331211"),BWIPJS.psstring("13113124"),BWIPJS.psstring("33113122"),BWIPJS.psstring("13122214"),BWIPJS.psstring("33122212"),BWIPJS.psstring("11313124"),BWIPJS.psstring("22222213"),BWIPJS.psstring("42222211"),BWIPJS.psstring("11322214"),BWIPJS.psstring("31322212"),BWIPJS.psstring("23113213"),BWIPJS.psstring("43113211"),BWIPJS.psstring("12213214"),BWIPJS.psstring("32213212"),BWIPJS.psstring("21313213"),BWIPJS.psstring("41313211"),BWIPJS.psstring("14131123"),BWIPJS.psstring("34131121"),BWIPJS.psstring("23231122"),BWIPJS.psstring("12331123"),BWIPJS.psstring("32331121"),BWIPJS.psstring("21431122"),BWIPJS.psstring("24122122"),BWIPJS.psstring("13222123"),BWIPJS.psstring("24131212"),BWIPJS.psstring("13231213"),BWIPJS.psstring("33231211"),BWIPJS.psstring("11422123"),BWIPJS.psstring("22331212"),BWIPJS.psstring("11431213"),BWIPJS.psstring("31431211"),BWIPJS.psstring("14113123"),BWIPJS.psstring("34113121"),BWIPJS.psstring("14122213"),BWIPJS.psstring("34122211"),BWIPJS.psstring("12313123"),BWIPJS.psstring("23222212"),BWIPJS.psstring("12322213"),BWIPJS.psstring("32322211"),BWIPJS.psstring("21422212"),BWIPJS.psstring("24113212"),BWIPJS.psstring("13213213"),BWIPJS.psstring("33213211"),BWIPJS.psstring("22313212"),BWIPJS.psstring("11413213"),BWIPJS.psstring("31413211"),BWIPJS.psstring("15131122"),BWIPJS.psstring("24231121"),BWIPJS.psstring("13331122"),BWIPJS.psstring("22431121"),BWIPJS.psstring("25122121"),BWIPJS.psstring("14222122"),BWIPJS.psstring("25131211"),BWIPJS.psstring("14231212"),BWIPJS.psstring("12422122"),BWIPJS.psstring("23331211"),BWIPJS.psstring("12431212"),BWIPJS.psstring("15113122"),BWIPJS.psstring("15122212"),BWIPJS.psstring("13313122"),BWIPJS.psstring("24222211"),BWIPJS.psstring("13322212"),BWIPJS.psstring("11513122"),BWIPJS.psstring("22422211"),BWIPJS.psstring("11522212"),BWIPJS.psstring("25113211"),BWIPJS.psstring("14213212"),BWIPJS.psstring("23313211"),BWIPJS.psstring("12413212"),BWIPJS.psstring("21513211"),BWIPJS.psstring("16131121"),BWIPJS.psstring("14331121"),BWIPJS.psstring("15222121"),BWIPJS.psstring("15231211"),BWIPJS.psstring("13422121"),BWIPJS.psstring("13431211"),BWIPJS.psstring("16113121"),BWIPJS.psstring("16122211"),BWIPJS.psstring("14313121"),BWIPJS.psstring("14322211"),BWIPJS.psstring("12513121"),BWIPJS.psstring("12522211"),BWIPJS.psstring("15213211"),BWIPJS.psstring("13413211"),BWIPJS.psstring("11613211"),BWIPJS.psstring("11141125"),BWIPJS.psstring("31141123"),BWIPJS.psstring("51141121"),BWIPJS.psstring("21132124"),BWIPJS.psstring("41132122"),BWIPJS.psstring("21141214"),BWIPJS.psstring("41141212"),BWIPJS.psstring("11123125"),BWIPJS.psstring("31123123"),BWIPJS.psstring("51123121"),BWIPJS.psstring("11132215"),BWIPJS.psstring("31132213"),BWIPJS.psstring("51132211"),BWIPJS.psstring("21114124"),BWIPJS.psstring("41114122"),BWIPJS.psstring("21123214"),BWIPJS.psstring("41123212"),BWIPJS.psstring("11114215"),BWIPJS.psstring("31114213"),BWIPJS.psstring("51114211"),BWIPJS.psstring("12141124"),BWIPJS.psstring("32141122"),BWIPJS.psstring("21241123"),BWIPJS.psstring("41241121"),BWIPJS.psstring("22132123"),BWIPJS.psstring("42132121"),BWIPJS.psstring("11232124"),BWIPJS.psstring("22141213"),BWIPJS.psstring("42141211"),BWIPJS.psstring("11241214"),BWIPJS.psstring("31241212"),BWIPJS.psstring("12123124"),BWIPJS.psstring("32123122"),BWIPJS.psstring("12132214"),BWIPJS.psstring("32132212"),BWIPJS.psstring("21232213"),BWIPJS.psstring("41232211"),BWIPJS.psstring("22114123"),BWIPJS.psstring("42114121"),BWIPJS.psstring("11214124"),BWIPJS.psstring("22123213"),BWIPJS.psstring("42123211"),BWIPJS.psstring("11223214"),BWIPJS.psstring("31223212"),BWIPJS.psstring("12114214"),BWIPJS.psstring("32114212"),BWIPJS.psstring("21214213"),BWIPJS.psstring("41214211"),BWIPJS.psstring("13141123"),BWIPJS.psstring("33141121"),BWIPJS.psstring("22241122"),BWIPJS.psstring("11341123"),BWIPJS.psstring("31341121"),BWIPJS.psstring("23132122"),BWIPJS.psstring("12232123"),BWIPJS.psstring("23141212"),BWIPJS.psstring("12241213"),BWIPJS.psstring("32241211"),BWIPJS.psstring("21341212"),BWIPJS.psstring("13123123"),BWIPJS.psstring("33123121"),BWIPJS.psstring("13132213"),BWIPJS.psstring("33132211"),BWIPJS.psstring("11323123"),BWIPJS.psstring("22232212"),BWIPJS.psstring("11332213"),BWIPJS.psstring("31332211"),BWIPJS.psstring("23114122"),BWIPJS.psstring("12214123"),BWIPJS.psstring("23123212"),BWIPJS.psstring("12223213"),BWIPJS.psstring("32223211"),BWIPJS.psstring("21323212"),BWIPJS.psstring("13114213"),BWIPJS.psstring("33114211"),BWIPJS.psstring("22214212"),BWIPJS.psstring("11314213"),BWIPJS.psstring("31314211"),BWIPJS.psstring("14141122"),BWIPJS.psstring("23241121"),BWIPJS.psstring("12341122"),BWIPJS.psstring("24132121"),BWIPJS.psstring("13232122"),BWIPJS.psstring("24141211"),BWIPJS.psstring("13241212"),BWIPJS.psstring("11432122"),BWIPJS.psstring("22341211"),BWIPJS.psstring("14123122"),BWIPJS.psstring("14132212"),BWIPJS.psstring("12323122"),BWIPJS.psstring("23232211"),BWIPJS.psstring("12332212"),BWIPJS.psstring("21432211"),BWIPJS.psstring("24114121"),BWIPJS.psstring("13214122"),BWIPJS.psstring("24123211"),BWIPJS.psstring("13223212"),BWIPJS.psstring("11414122"),BWIPJS.psstring("22323211"),BWIPJS.psstring("11423212"),BWIPJS.psstring("14114212"),BWIPJS.psstring("23214211"),BWIPJS.psstring("12314212"),BWIPJS.psstring("21414211"),BWIPJS.psstring("15141121"),BWIPJS.psstring("13341121"),BWIPJS.psstring("14232121"),BWIPJS.psstring("14241211"),BWIPJS.psstring("12432121"),BWIPJS.psstring("15123121"),BWIPJS.psstring("15132211"),BWIPJS.psstring("13323121"),BWIPJS.psstring("13332211"),BWIPJS.psstring("11523121"),BWIPJS.psstring("14214121"),BWIPJS.psstring("14223211"),BWIPJS.psstring("12414121"),BWIPJS.psstring("12423211"),BWIPJS.psstring("15114211"),BWIPJS.psstring("13314211"),BWIPJS.psstring("11514211"),BWIPJS.psstring("11151124"),BWIPJS.psstring("31151122"),BWIPJS.psstring("21142123"),BWIPJS.psstring("41142121"),BWIPJS.psstring("21151213"),BWIPJS.psstring("41151211"),BWIPJS.psstring("11133124"),BWIPJS.psstring("31133122"),BWIPJS.psstring("11142214"),BWIPJS.psstring("31142212"),BWIPJS.psstring("21124123"),BWIPJS.psstring("41124121"),BWIPJS.psstring("21133213"),BWIPJS.psstring("41133211"),BWIPJS.psstring("11115124"),BWIPJS.psstring("31115122"),BWIPJS.psstring("11124214"),BWIPJS.psstring("31124212"),BWIPJS.psstring("21115213"),BWIPJS.psstring("41115211"),BWIPJS.psstring("12151123"),BWIPJS.psstring("32151121"),BWIPJS.psstring("21251122"),BWIPJS.psstring("22142122"),BWIPJS.psstring("11242123"),BWIPJS.psstring("22151212"),BWIPJS.psstring("11251213"),BWIPJS.psstring("31251211"),BWIPJS.psstring("12133123"),BWIPJS.psstring("32133121"),BWIPJS.psstring("12142213"),BWIPJS.psstring("32142211"),BWIPJS.psstring("21242212"),BWIPJS.psstring("22124122"),BWIPJS.psstring("11224123"),BWIPJS.psstring("22133212"),BWIPJS.psstring("11233213"),BWIPJS.psstring("31233211"),BWIPJS.psstring("12115123"),BWIPJS.psstring("32115121"),BWIPJS.psstring("12124213"),BWIPJS.psstring("32124211"),BWIPJS.psstring("21224212"),BWIPJS.psstring("22115212"),BWIPJS.psstring("11215213"),BWIPJS.psstring("31215211"),BWIPJS.psstring("13151122"),BWIPJS.psstring("22251121"),BWIPJS.psstring("23142121"),BWIPJS.psstring("12242122"),BWIPJS.psstring("23151211"),BWIPJS.psstring("12251212"),BWIPJS.psstring("13133122"),BWIPJS.psstring("13142212"),BWIPJS.psstring("11333122"),BWIPJS.psstring("22242211"),BWIPJS.psstring("11342212"),BWIPJS.psstring("23124121"),BWIPJS.psstring("12224122"),BWIPJS.psstring("23133211"),BWIPJS.psstring("12233212"),BWIPJS.psstring("21333211"),BWIPJS.psstring("13115122"),BWIPJS.psstring("13124212"),BWIPJS.psstring("11315122"),BWIPJS.psstring("22224211"),BWIPJS.psstring("11324212"),BWIPJS.psstring("23115211"),BWIPJS.psstring("12215212"),BWIPJS.psstring("21315211"),BWIPJS.psstring("14151121"),BWIPJS.psstring("13242121"),BWIPJS.psstring("13251211"),BWIPJS.psstring("14133121"),BWIPJS.psstring("14142211"),BWIPJS.psstring("12333121"),BWIPJS.psstring("12342211"),BWIPJS.psstring("13224121"),BWIPJS.psstring("13233211"),BWIPJS.psstring("11424121"),BWIPJS.psstring("11433211"),BWIPJS.psstring("14115121"),BWIPJS.psstring("14124211"),BWIPJS.psstring("12315121"),BWIPJS.psstring("12324211"),BWIPJS.psstring("13215211"),BWIPJS.psstring("11415211"),BWIPJS.psstring("11161123"),BWIPJS.psstring("31161121"),BWIPJS.psstring("21152122"),BWIPJS.psstring("21161212"),BWIPJS.psstring("11143123"),BWIPJS.psstring("31143121"),BWIPJS.psstring("11152213"),BWIPJS.psstring("31152211"),BWIPJS.psstring("21134122"),BWIPJS.psstring("21143212"),BWIPJS.psstring("11125123"),BWIPJS.psstring("31125121"),BWIPJS.psstring("11134213"),BWIPJS.psstring("31134211"),BWIPJS.psstring("21116122"),BWIPJS.psstring("21125212"),BWIPJS.psstring("12161122"),BWIPJS.psstring("22152121"),BWIPJS.psstring("11252122"),BWIPJS.psstring("22161211"),BWIPJS.psstring("12143122"),BWIPJS.psstring("12152212"),BWIPJS.psstring("21252211"),BWIPJS.psstring("22134121"),BWIPJS.psstring("11234122"),BWIPJS.psstring("22143211"),BWIPJS.psstring("11243212"),BWIPJS.psstring("12125122"),BWIPJS.psstring("12134212"),BWIPJS.psstring("21234211"),BWIPJS.psstring("22116121"),BWIPJS.psstring("11216122"),BWIPJS.psstring("22125211"),BWIPJS.psstring("11225212"),BWIPJS.psstring("13161121"),BWIPJS.psstring("12252121"),BWIPJS.psstring("13143121"),BWIPJS.psstring("13152211"),BWIPJS.psstring("11343121"),BWIPJS.psstring("12234121"),BWIPJS.psstring("12243211"),BWIPJS.psstring("13125121"),BWIPJS.psstring("13134211"),BWIPJS.psstring("11325121"),BWIPJS.psstring("11334211"),BWIPJS.psstring("12216121"),BWIPJS.psstring("12225211"),BWIPJS.psstring("31111225"),BWIPJS.psstring("51111223"),BWIPJS.psstring("21111316"),BWIPJS.psstring("41111314"),BWIPJS.psstring("61111312"),BWIPJS.psstring("31211134"),BWIPJS.psstring("51211132"),BWIPJS.psstring("12111226"),BWIPJS.psstring("32111224"),BWIPJS.psstring("52111222"),BWIPJS.psstring("21211225"),BWIPJS.psstring("41211223"),BWIPJS.psstring("61211221"),BWIPJS.psstring("22111315"),BWIPJS.psstring("42111313"),BWIPJS.psstring("11211316"),BWIPJS.psstring("31211314"),BWIPJS.psstring("51211312"),BWIPJS.psstring("12211135"),BWIPJS.psstring("32211133"),BWIPJS.psstring("52211131"),BWIPJS.psstring("21311134"),BWIPJS.psstring("41311132"),BWIPJS.psstring("13111225"),BWIPJS.psstring("33111223"),BWIPJS.psstring("22211224"),BWIPJS.psstring("42211222"),BWIPJS.psstring("11311225"),BWIPJS.psstring("31311223"),BWIPJS.psstring("51311221"),BWIPJS.psstring("23111314"),BWIPJS.psstring("43111312"),BWIPJS.psstring("12211315"),BWIPJS.psstring("32211313"),BWIPJS.psstring("52211311"),BWIPJS.psstring("21311314"),BWIPJS.psstring("41311312"),BWIPJS.psstring("13211134"),BWIPJS.psstring("33211132"),BWIPJS.psstring("22311133"),BWIPJS.psstring("42311131"),BWIPJS.psstring("11411134"),BWIPJS.psstring("31411132"),BWIPJS.psstring("14111224"),BWIPJS.psstring("34111222"),BWIPJS.psstring("23211223"),BWIPJS.psstring("43211221"),BWIPJS.psstring("12311224"),BWIPJS.psstring("32311222"),BWIPJS.psstring("21411223"),BWIPJS.psstring("41411221"),BWIPJS.psstring("24111313"),BWIPJS.psstring("13211314"),BWIPJS.psstring("33211312"),BWIPJS.psstring("22311313"),BWIPJS.psstring("42311311"),BWIPJS.psstring("11411314"),BWIPJS.psstring("31411312"),BWIPJS.psstring("14211133"),BWIPJS.psstring("34211131"),BWIPJS.psstring("23311132"),BWIPJS.psstring("12411133"),BWIPJS.psstring("32411131"),BWIPJS.psstring("21511132"),BWIPJS.psstring("15111223"),BWIPJS.psstring("24211222"),BWIPJS.psstring("13311223"),BWIPJS.psstring("33311221"),BWIPJS.psstring("22411222"),BWIPJS.psstring("11511223"),BWIPJS.psstring("31511221"),BWIPJS.psstring("25111312"),BWIPJS.psstring("14211313"),BWIPJS.psstring("34211311"),BWIPJS.psstring("23311312"),BWIPJS.psstring("12411313"),BWIPJS.psstring("32411311"),BWIPJS.psstring("21511312"),BWIPJS.psstring("15211132"),BWIPJS.psstring("24311131"),BWIPJS.psstring("13411132"),BWIPJS.psstring("22511131"),BWIPJS.psstring("11611132"),BWIPJS.psstring("16111222"),BWIPJS.psstring("25211221"),BWIPJS.psstring("14311222"),BWIPJS.psstring("23411221"),BWIPJS.psstring("12511222"),BWIPJS.psstring("21611221"),BWIPJS.psstring("15211312"),BWIPJS.psstring("24311311"),BWIPJS.psstring("13411312"),BWIPJS.psstring("22511311"),BWIPJS.psstring("11611312"),BWIPJS.psstring("21121135"),BWIPJS.psstring("41121133"),BWIPJS.psstring("61121131"),BWIPJS.psstring("11112136"),BWIPJS.psstring("31112134"),BWIPJS.psstring("51112132"),BWIPJS.psstring("11121226"),BWIPJS.psstring("31121224"),BWIPJS.psstring("51121222"),BWIPJS.psstring("21112225"),BWIPJS.psstring("41112223"),BWIPJS.psstring("61112221"),BWIPJS.psstring("21121315"),BWIPJS.psstring("41121313"),BWIPJS.psstring("61121311"),BWIPJS.psstring("11112316"),BWIPJS.psstring("31112314"),BWIPJS.psstring("51112312"),BWIPJS.psstring("22121134"),BWIPJS.psstring("42121132"),BWIPJS.psstring("11221135"),BWIPJS.psstring("31221133"),BWIPJS.psstring("51221131"),BWIPJS.psstring("12112135"),BWIPJS.psstring("32112133"),BWIPJS.psstring("52112131"),BWIPJS.psstring("12121225"),BWIPJS.psstring("32121223"),BWIPJS.psstring("52121221"),BWIPJS.psstring("21221224"),BWIPJS.psstring("41221222"),BWIPJS.psstring("22112224"),BWIPJS.psstring("42112222"),BWIPJS.psstring("11212225"),BWIPJS.psstring("22121314"),BWIPJS.psstring("42121312"),BWIPJS.psstring("11221315"),BWIPJS.psstring("31221313"),BWIPJS.psstring("51221311"),BWIPJS.psstring("12112315"),BWIPJS.psstring("32112313"),BWIPJS.psstring("52112311"),BWIPJS.psstring("21212314"),BWIPJS.psstring("41212312"),BWIPJS.psstring("23121133"),BWIPJS.psstring("43121131"),BWIPJS.psstring("12221134"),BWIPJS.psstring("32221132"),BWIPJS.psstring("21321133"),BWIPJS.psstring("41321131"),BWIPJS.psstring("13112134"),BWIPJS.psstring("33112132"),BWIPJS.psstring("13121224"),BWIPJS.psstring("33121222"),BWIPJS.psstring("11312134"),BWIPJS.psstring("22221223"),BWIPJS.psstring("42221221"),BWIPJS.psstring("11321224"),BWIPJS.psstring("31321222"),BWIPJS.psstring("23112223"),BWIPJS.psstring("43112221"),BWIPJS.psstring("12212224"),BWIPJS.psstring("23121313"),BWIPJS.psstring("43121311"),BWIPJS.psstring("12221314"),BWIPJS.psstring("32221312"),BWIPJS.psstring("21321313"),BWIPJS.psstring("41321311"),BWIPJS.psstring("13112314"),BWIPJS.psstring("33112312"),BWIPJS.psstring("22212313"),BWIPJS.psstring("42212311"),BWIPJS.psstring("11312314"),BWIPJS.psstring("31312312"),BWIPJS.psstring("24121132"),BWIPJS.psstring("13221133"),BWIPJS.psstring("33221131"),BWIPJS.psstring("22321132"),BWIPJS.psstring("11421133"),BWIPJS.psstring("31421131"),BWIPJS.psstring("14112133"),BWIPJS.psstring("34112131"),BWIPJS.psstring("14121223"),BWIPJS.psstring("34121221"),BWIPJS.psstring("12312133"),BWIPJS.psstring("23221222"),BWIPJS.psstring("12321223"),BWIPJS.psstring("32321221"),BWIPJS.psstring("21421222"),BWIPJS.psstring("24112222"),BWIPJS.psstring("13212223"),BWIPJS.psstring("24121312"),BWIPJS.psstring("13221313"),BWIPJS.psstring("33221311"),BWIPJS.psstring("11412223"),BWIPJS.psstring("22321312"),BWIPJS.psstring("11421313"),BWIPJS.psstring("31421311"),BWIPJS.psstring("14112313"),BWIPJS.psstring("34112311"),BWIPJS.psstring("23212312"),BWIPJS.psstring("12312313"),BWIPJS.psstring("32312311"),BWIPJS.psstring("21412312"),BWIPJS.psstring("25121131"),BWIPJS.psstring("14221132"),BWIPJS.psstring("23321131"),BWIPJS.psstring("12421132"),BWIPJS.psstring("21521131"),BWIPJS.psstring("15112132"),BWIPJS.psstring("15121222"),BWIPJS.psstring("13312132"),BWIPJS.psstring("24221221"),BWIPJS.psstring("13321222"),BWIPJS.psstring("11512132"),BWIPJS.psstring("22421221"),BWIPJS.psstring("11521222"),BWIPJS.psstring("25112221"),BWIPJS.psstring("14212222"),BWIPJS.psstring("25121311"),BWIPJS.psstring("14221312"),BWIPJS.psstring("12412222"),BWIPJS.psstring("23321311"),BWIPJS.psstring("12421312"),BWIPJS.psstring("21521311"),BWIPJS.psstring("15112312"),BWIPJS.psstring("24212311"),BWIPJS.psstring("13312312"),BWIPJS.psstring("22412311"),BWIPJS.psstring("11512312"),BWIPJS.psstring("15221131"),BWIPJS.psstring("13421131"),BWIPJS.psstring("16112131"),BWIPJS.psstring("16121221"),BWIPJS.psstring("14312131"),BWIPJS.psstring("14321221"),BWIPJS.psstring("12512131"),BWIPJS.psstring("12521221"),BWIPJS.psstring("15212221"),BWIPJS.psstring("15221311"),BWIPJS.psstring("13412221"),BWIPJS.psstring("13421311"),BWIPJS.psstring("11612221"),BWIPJS.psstring("16112311"),BWIPJS.psstring("14312311"),BWIPJS.psstring("12512311"),BWIPJS.psstring("21131134"),BWIPJS.psstring("41131132"),BWIPJS.psstring("11122135"),BWIPJS.psstring("31122133"),BWIPJS.psstring("51122131"),BWIPJS.psstring("11131225"),BWIPJS.psstring("31131223"),BWIPJS.psstring("51131221"),BWIPJS.psstring("21113134"),BWIPJS.psstring("41113132"),BWIPJS.psstring("21122224"),BWIPJS.psstring("41122222"),BWIPJS.psstring("21131314"),BWIPJS.psstring("41131312"),BWIPJS.psstring("11113225"),BWIPJS.psstring("31113223"),BWIPJS.psstring("51113221"),BWIPJS.psstring("11122315"),BWIPJS.psstring("31122313"),BWIPJS.psstring("51122311"),BWIPJS.psstring("21113314"),BWIPJS.psstring("41113312"),BWIPJS.psstring("22131133"),BWIPJS.psstring("42131131"),BWIPJS.psstring("11231134"),BWIPJS.psstring("31231132"),BWIPJS.psstring("12122134"),BWIPJS.psstring("32122132"),BWIPJS.psstring("12131224"),BWIPJS.psstring("32131222"),BWIPJS.psstring("21231223"),BWIPJS.psstring("41231221"),BWIPJS.psstring("22113133"),BWIPJS.psstring("42113131"),BWIPJS.psstring("11213134"),BWIPJS.psstring("22122223"),BWIPJS.psstring("42122221"),BWIPJS.psstring("11222224"),BWIPJS.psstring("22131313"),BWIPJS.psstring("42131311"),BWIPJS.psstring("11231314"),BWIPJS.psstring("31231312"),BWIPJS.psstring("12113224"),BWIPJS.psstring("32113222"),BWIPJS.psstring("12122314"),BWIPJS.psstring("32122312"),BWIPJS.psstring("21222313"),BWIPJS.psstring("41222311"),BWIPJS.psstring("22113313"),BWIPJS.psstring("42113311"),BWIPJS.psstring("11213314"),BWIPJS.psstring("31213312"),BWIPJS.psstring("23131132"),BWIPJS.psstring("12231133"),BWIPJS.psstring("32231131"),BWIPJS.psstring("21331132"),BWIPJS.psstring("13122133"),BWIPJS.psstring("33122131"),BWIPJS.psstring("13131223"),BWIPJS.psstring("33131221"),BWIPJS.psstring("11322133"),BWIPJS.psstring("22231222"),BWIPJS.psstring("11331223"),BWIPJS.psstring("31331221"),BWIPJS.psstring("23113132"),BWIPJS.psstring("12213133"),BWIPJS.psstring("23122222"),BWIPJS.psstring("12222223"),BWIPJS.psstring("23131312"),BWIPJS.psstring("12231313"),BWIPJS.psstring("32231311"),BWIPJS.psstring("21331312"),BWIPJS.psstring("13113223"),BWIPJS.psstring("33113221"),BWIPJS.psstring("13122313"),BWIPJS.psstring("33122311"),BWIPJS.psstring("11313223"),BWIPJS.psstring("22222312"),BWIPJS.psstring("11322313"),BWIPJS.psstring("31322311"),BWIPJS.psstring("23113312"),BWIPJS.psstring("12213313"),BWIPJS.psstring("32213311"),BWIPJS.psstring("21313312"),BWIPJS.psstring("24131131"),BWIPJS.psstring("13231132"),BWIPJS.psstring("22331131"),BWIPJS.psstring("11431132"),BWIPJS.psstring("14122132"),BWIPJS.psstring("14131222"),BWIPJS.psstring("12322132"),BWIPJS.psstring("23231221"),BWIPJS.psstring("12331222"),BWIPJS.psstring("21431221"),BWIPJS.psstring("24113131"),BWIPJS.psstring("13213132"),BWIPJS.psstring("24122221"),BWIPJS.psstring("13222222"),BWIPJS.psstring("24131311"),BWIPJS.psstring("11413132"),BWIPJS.psstring("13231312"),BWIPJS.psstring("11422222"),BWIPJS.psstring("22331311"),BWIPJS.psstring("11431312"),BWIPJS.psstring("14113222"),BWIPJS.psstring("14122312"),BWIPJS.psstring("12313222"),BWIPJS.psstring("23222311"),BWIPJS.psstring("12322312"),BWIPJS.psstring("21422311"),BWIPJS.psstring("24113311"),BWIPJS.psstring("13213312"),BWIPJS.psstring("22313311"),BWIPJS.psstring("11413312"),BWIPJS.psstring("14231131"),BWIPJS.psstring("12431131"),BWIPJS.psstring("15122131"),BWIPJS.psstring("15131221"),BWIPJS.psstring("13322131"),BWIPJS.psstring("13331221"),BWIPJS.psstring("11522131"),BWIPJS.psstring("14213131"),BWIPJS.psstring("14222221"),BWIPJS.psstring("12413131"),BWIPJS.psstring("14231311"),BWIPJS.psstring("12422221"),BWIPJS.psstring("12431311"),BWIPJS.psstring("15113221"),BWIPJS.psstring("15122311"),BWIPJS.psstring("13313221"),BWIPJS.psstring("13322311"),BWIPJS.psstring("11513221"),BWIPJS.psstring("11522311"),BWIPJS.psstring("14213311"),BWIPJS.psstring("12413311"),BWIPJS.psstring("21141133"),BWIPJS.psstring("41141131"),BWIPJS.psstring("11132134"),BWIPJS.psstring("31132132"),BWIPJS.psstring("11141224"),BWIPJS.psstring("31141222"),BWIPJS.psstring("21123133"),BWIPJS.psstring("41123131"),BWIPJS.psstring("21132223"),BWIPJS.psstring("41132221"),BWIPJS.psstring("21141313"),BWIPJS.psstring("41141311"),BWIPJS.psstring("11114134"),BWIPJS.psstring("31114132"),BWIPJS.psstring("11123224"),BWIPJS.psstring("31123222"),BWIPJS.psstring("11132314"),BWIPJS.psstring("31132312"),BWIPJS.psstring("21114223"),BWIPJS.psstring("41114221"),BWIPJS.psstring("21123313"),BWIPJS.psstring("41123311"),BWIPJS.psstring("11114314"),BWIPJS.psstring("31114312"),BWIPJS.psstring("22141132"),BWIPJS.psstring("11241133"),BWIPJS.psstring("31241131"),BWIPJS.psstring("12132133"),BWIPJS.psstring("32132131"),BWIPJS.psstring("12141223"),BWIPJS.psstring("32141221"),BWIPJS.psstring("21241222"),BWIPJS.psstring("22123132"),BWIPJS.psstring("11223133"),BWIPJS.psstring("22132222"),BWIPJS.psstring("11232223"),BWIPJS.psstring("22141312"),BWIPJS.psstring("11241313"),BWIPJS.psstring("31241311"),BWIPJS.psstring("12114133"),BWIPJS.psstring("32114131"),BWIPJS.psstring("12123223"),BWIPJS.psstring("32123221"),BWIPJS.psstring("12132313"),BWIPJS.psstring("32132311"),BWIPJS.psstring("21232312"),BWIPJS.psstring("22114222"),BWIPJS.psstring("11214223"),BWIPJS.psstring("22123312"),BWIPJS.psstring("11223313"),BWIPJS.psstring("31223311"),BWIPJS.psstring("12114313"),BWIPJS.psstring("32114311"),BWIPJS.psstring("21214312"),BWIPJS.psstring("23141131"),BWIPJS.psstring("12241132"),BWIPJS.psstring("21341131"),BWIPJS.psstring("13132132"),BWIPJS.psstring("13141222"),BWIPJS.psstring("11332132"),BWIPJS.psstring("22241221"),BWIPJS.psstring("11341222"),BWIPJS.psstring("23123131"),BWIPJS.psstring("12223132"),BWIPJS.psstring("23132221"),BWIPJS.psstring("12232222"),BWIPJS.psstring("23141311"),BWIPJS.psstring("12241312"),BWIPJS.psstring("21341311"),BWIPJS.psstring("13114132"),BWIPJS.psstring("13123222"),BWIPJS.psstring("11314132"),BWIPJS.psstring("13132312"),BWIPJS.psstring("11323222"),BWIPJS.psstring("22232311"),BWIPJS.psstring("11332312"),BWIPJS.psstring("23114221"),BWIPJS.psstring("12214222"),BWIPJS.psstring("23123311"),BWIPJS.psstring("12223312"),BWIPJS.psstring("21323311"),BWIPJS.psstring("13114312"),BWIPJS.psstring("22214311"),BWIPJS.psstring("11314312"),BWIPJS.psstring("13241131"),BWIPJS.psstring("14132131"),BWIPJS.psstring("14141221"),BWIPJS.psstring("12332131"),BWIPJS.psstring("12341221"),BWIPJS.psstring("13223131"),BWIPJS.psstring("13232221"),BWIPJS.psstring("11423131"),BWIPJS.psstring("13241311"),BWIPJS.psstring("11432221"),BWIPJS.psstring("14114131"),BWIPJS.psstring("14123221"),BWIPJS.psstring("12314131"),BWIPJS.psstring("14132311"),BWIPJS.psstring("12323221"),BWIPJS.psstring("12332311"),BWIPJS.psstring("13214221"),BWIPJS.psstring("13223311"),BWIPJS.psstring("11414221"),BWIPJS.psstring("11423311"),BWIPJS.psstring("14114311"),BWIPJS.psstring("12314311"),BWIPJS.psstring("21151132"),BWIPJS.psstring("11142133"),BWIPJS.psstring("31142131"),BWIPJS.psstring("11151223"),BWIPJS.psstring("31151221"),BWIPJS.psstring("21133132"),BWIPJS.psstring("21142222"),BWIPJS.psstring("21151312"),BWIPJS.psstring("11124133"),BWIPJS.psstring("31124131"),BWIPJS.psstring("11133223"),BWIPJS.psstring("31133221"),BWIPJS.psstring("11142313"),BWIPJS.psstring("31142311"),BWIPJS.psstring("21115132"),BWIPJS.psstring("21124222"),BWIPJS.psstring("21133312"),BWIPJS.psstring("11115223"),BWIPJS.psstring("31115221"),BWIPJS.psstring("11124313"),BWIPJS.psstring("31124311"),BWIPJS.psstring("22151131"),BWIPJS.psstring("11251132"),BWIPJS.psstring("12142132"),BWIPJS.psstring("12151222"),BWIPJS.psstring("21251221"),BWIPJS.psstring("22133131"),BWIPJS.psstring("11233132"),BWIPJS.psstring("22142221"),BWIPJS.psstring("11242222"),BWIPJS.psstring("22151311"),BWIPJS.psstring("11251312"),BWIPJS.psstring("12124132"),BWIPJS.psstring("12133222"),BWIPJS.psstring("12142312"),BWIPJS.psstring("21242311"),BWIPJS.psstring("22115131"),BWIPJS.psstring("11215132"),BWIPJS.psstring("22124221"),BWIPJS.psstring("11224222"),BWIPJS.psstring("22133311"),BWIPJS.psstring("11233312"),BWIPJS.psstring("12115222"),BWIPJS.psstring("12124312"),BWIPJS.psstring("21224311"),BWIPJS.psstring("12251131"),BWIPJS.psstring("13142131"),BWIPJS.psstring("13151221"),BWIPJS.psstring("11342131"),BWIPJS.psstring("12233131"),BWIPJS.psstring("12242221"),BWIPJS.psstring("12251311"),BWIPJS.psstring("13124131"),BWIPJS.psstring("13133221"),BWIPJS.psstring("11324131"),BWIPJS.psstring("13142311"),BWIPJS.psstring("11333221"),BWIPJS.psstring("11342311"),BWIPJS.psstring("12215131"),BWIPJS.psstring("12224221"),BWIPJS.psstring("12233311"),BWIPJS.psstring("13115221"),BWIPJS.psstring("13124311"),BWIPJS.psstring("11315221"),BWIPJS.psstring("11324311"),BWIPJS.psstring("21161131"),BWIPJS.psstring("11152132"),BWIPJS.psstring("11161222"),BWIPJS.psstring("21143131"),BWIPJS.psstring("21152221"),BWIPJS.psstring("21161311"),BWIPJS.psstring("11134132"),BWIPJS.psstring("11143222"),BWIPJS.psstring("11152312"),BWIPJS.psstring("21125131"),BWIPJS.psstring("21134221"),BWIPJS.psstring("21143311"),BWIPJS.psstring("11116132"),BWIPJS.psstring("11125222"),BWIPJS.psstring("11134312"),BWIPJS.psstring("12152131"),BWIPJS.psstring("12161221"),BWIPJS.psstring("11243131"),BWIPJS.psstring("11252221"),BWIPJS.psstring("12134131"),BWIPJS.psstring("12143221"),BWIPJS.psstring("12152311"),BWIPJS.psstring("11225131"),BWIPJS.psstring("11234221"),BWIPJS.psstring("11243311"),BWIPJS.psstring("12116131"),BWIPJS.psstring("12125221"),BWIPJS.psstring("12134311"),BWIPJS.psstring("21111235"),BWIPJS.psstring("41111233"),BWIPJS.psstring("61111231"),BWIPJS.psstring("11111326"),BWIPJS.psstring("31111324"),BWIPJS.psstring("51111322"),BWIPJS.psstring("21111415"),BWIPJS.psstring("41111413"),BWIPJS.psstring("61111411"),BWIPJS.psstring("21211144"),BWIPJS.psstring("41211142"),BWIPJS.psstring("22111234"),BWIPJS.psstring("42111232"),BWIPJS.psstring("11211235"),BWIPJS.psstring("31211233"),BWIPJS.psstring("51211231"),BWIPJS.psstring("12111325"),BWIPJS.psstring("32111323"),BWIPJS.psstring("52111321"),BWIPJS.psstring("21211324"),BWIPJS.psstring("41211322"),BWIPJS.psstring("22111414"),BWIPJS.psstring("42111412"),BWIPJS.psstring("11211415"),BWIPJS.psstring("31211413"),BWIPJS.psstring("51211411"),BWIPJS.psstring("22211143"),BWIPJS.psstring("42211141"),BWIPJS.psstring("11311144"),BWIPJS.psstring("31311142"),BWIPJS.psstring("23111233"),BWIPJS.psstring("43111231"),BWIPJS.psstring("12211234"),BWIPJS.psstring("32211232"),BWIPJS.psstring("21311233"),BWIPJS.psstring("41311231"),BWIPJS.psstring("13111324"),BWIPJS.psstring("33111322"),BWIPJS.psstring("22211323"),BWIPJS.psstring("42211321"),BWIPJS.psstring("11311324"),BWIPJS.psstring("31311322"),BWIPJS.psstring("23111413"),BWIPJS.psstring("43111411"),BWIPJS.psstring("12211414"),BWIPJS.psstring("32211412"),BWIPJS.psstring("21311413"),BWIPJS.psstring("41311411"),BWIPJS.psstring("23211142"),BWIPJS.psstring("12311143"),BWIPJS.psstring("32311141"),BWIPJS.psstring("21411142"),BWIPJS.psstring("24111232"),BWIPJS.psstring("13211233"),BWIPJS.psstring("33211231"),BWIPJS.psstring("22311232"),BWIPJS.psstring("11411233"),BWIPJS.psstring("31411231"),BWIPJS.psstring("14111323"),BWIPJS.psstring("34111321"),BWIPJS.psstring("23211322"),BWIPJS.psstring("12311323"),BWIPJS.psstring("32311321"),BWIPJS.psstring("21411322"),BWIPJS.psstring("24111412"),BWIPJS.psstring("13211413"),BWIPJS.psstring("33211411"),BWIPJS.psstring("22311412"),BWIPJS.psstring("11411413"),BWIPJS.psstring("31411411"),BWIPJS.psstring("24211141"),BWIPJS.psstring("13311142"),BWIPJS.psstring("22411141"),BWIPJS.psstring("11511142"),BWIPJS.psstring("25111231"),BWIPJS.psstring("14211232"),BWIPJS.psstring("23311231"),BWIPJS.psstring("12411232"),BWIPJS.psstring("21511231"),BWIPJS.psstring("15111322"),BWIPJS.psstring("24211321"),BWIPJS.psstring("13311322"),BWIPJS.psstring("22411321"),BWIPJS.psstring("11511322"),BWIPJS.psstring("25111411"),BWIPJS.psstring("14211412"),BWIPJS.psstring("23311411"),BWIPJS.psstring("12411412"),BWIPJS.psstring("21511411"),BWIPJS.psstring("14311141"),BWIPJS.psstring("12511141"),BWIPJS.psstring("15211231"),BWIPJS.psstring("13411231"),BWIPJS.psstring("11611231"),BWIPJS.psstring("16111321"),BWIPJS.psstring("14311321"),BWIPJS.psstring("12511321"),BWIPJS.psstring("15211411"),BWIPJS.psstring("13411411"),BWIPJS.psstring("11611411"),BWIPJS.psstring("31121143"),BWIPJS.psstring("51121141"),BWIPJS.psstring("21112144"),BWIPJS.psstring("41112142"),BWIPJS.psstring("21121234"),BWIPJS.psstring("41121232"),BWIPJS.psstring("11112235"),BWIPJS.psstring("31112233"),BWIPJS.psstring("51112231"),BWIPJS.psstring("11121325"),BWIPJS.psstring("31121323"),BWIPJS.psstring("51121321"),BWIPJS.psstring("21112324"),BWIPJS.psstring("41112322"),BWIPJS.psstring("21121414"),BWIPJS.psstring("41121412"),BWIPJS.psstring("11112415"),BWIPJS.psstring("31112413"),BWIPJS.psstring("51112411"),BWIPJS.psstring("12121144"),BWIPJS.psstring("32121142"),BWIPJS.psstring("21221143"),BWIPJS.psstring("41221141"),BWIPJS.psstring("22112143"),BWIPJS.psstring("42112141"),BWIPJS.psstring("11212144"),BWIPJS.psstring("22121233"),BWIPJS.psstring("42121231"),BWIPJS.psstring("11221234"),BWIPJS.psstring("31221232"),BWIPJS.psstring("12112234"),BWIPJS.psstring("32112232"),BWIPJS.psstring("12121324"),BWIPJS.psstring("32121322"),BWIPJS.psstring("21221323"),BWIPJS.psstring("41221321"),BWIPJS.psstring("22112323"),BWIPJS.psstring("42112321"),BWIPJS.psstring("11212324"),BWIPJS.psstring("22121413"),BWIPJS.psstring("42121411"),BWIPJS.psstring("11221414"),BWIPJS.psstring("31221412"),BWIPJS.psstring("12112414"),BWIPJS.psstring("32112412"),BWIPJS.psstring("21212413"),BWIPJS.psstring("41212411"),BWIPJS.psstring("13121143"),BWIPJS.psstring("33121141"),BWIPJS.psstring("22221142"),BWIPJS.psstring("11321143"),BWIPJS.psstring("31321141"),BWIPJS.psstring("23112142"),BWIPJS.psstring("12212143"),BWIPJS.psstring("23121232"),BWIPJS.psstring("12221233"),BWIPJS.psstring("32221231"),BWIPJS.psstring("21321232"),BWIPJS.psstring("13112233"),BWIPJS.psstring("33112231"),BWIPJS.psstring("13121323"),BWIPJS.psstring("33121321"),BWIPJS.psstring("11312233"),BWIPJS.psstring("22221322"),BWIPJS.psstring("11321323"),BWIPJS.psstring("31321321"),BWIPJS.psstring("23112322"),BWIPJS.psstring("12212323"),BWIPJS.psstring("23121412"),BWIPJS.psstring("12221413"),BWIPJS.psstring("32221411"),BWIPJS.psstring("21321412"),BWIPJS.psstring("13112413"),BWIPJS.psstring("33112411"),BWIPJS.psstring("22212412"),BWIPJS.psstring("11312413"),BWIPJS.psstring("31312411"),BWIPJS.psstring("14121142"),BWIPJS.psstring("23221141"),BWIPJS.psstring("12321142"),BWIPJS.psstring("21421141"),BWIPJS.psstring("24112141"),BWIPJS.psstring("13212142"),BWIPJS.psstring("24121231"),BWIPJS.psstring("13221232"),BWIPJS.psstring("11412142"),BWIPJS.psstring("22321231"),BWIPJS.psstring("11421232"),BWIPJS.psstring("14112232"),BWIPJS.psstring("14121322"),BWIPJS.psstring("12312232"),BWIPJS.psstring("23221321"),BWIPJS.psstring("12321322"),BWIPJS.psstring("21421321"),BWIPJS.psstring("24112321"),BWIPJS.psstring("13212322"),BWIPJS.psstring("24121411"),BWIPJS.psstring("13221412"),BWIPJS.psstring("11412322"),BWIPJS.psstring("22321411"),BWIPJS.psstring("11421412"),BWIPJS.psstring("14112412"),BWIPJS.psstring("23212411"),BWIPJS.psstring("12312412"),BWIPJS.psstring("21412411"),BWIPJS.psstring("15121141"),BWIPJS.psstring("13321141"),BWIPJS.psstring("11521141"),BWIPJS.psstring("14212141"),BWIPJS.psstring("14221231"),BWIPJS.psstring("12412141"),BWIPJS.psstring("12421231"),BWIPJS.psstring("15112231"),BWIPJS.psstring("15121321"),BWIPJS.psstring("13312231"),BWIPJS.psstring("13321321"),BWIPJS.psstring("11512231"),BWIPJS.psstring("11521321"),BWIPJS.psstring("14212321"),BWIPJS.psstring("14221411"),BWIPJS.psstring("12412321"),BWIPJS.psstring("12421411"),BWIPJS.psstring("15112411"),BWIPJS.psstring("13312411"),BWIPJS.psstring("11512411"),BWIPJS.psstring("11131144"),BWIPJS.psstring("31131142"),BWIPJS.psstring("21122143"),BWIPJS.psstring("41122141"),BWIPJS.psstring("21131233"),BWIPJS.psstring("41131231"),BWIPJS.psstring("11113144"),BWIPJS.psstring("31113142"),BWIPJS.psstring("11122234"),BWIPJS.psstring("31122232"),BWIPJS.psstring("11131324"),BWIPJS.psstring("31131322"),BWIPJS.psstring("21113233"),BWIPJS.psstring("41113231"),BWIPJS.psstring("21122323"),BWIPJS.psstring("41122321"),BWIPJS.psstring("21131413"),BWIPJS.psstring("41131411"),BWIPJS.psstring("11113324"),BWIPJS.psstring("31113322"),BWIPJS.psstring("11122414"),BWIPJS.psstring("31122412"),BWIPJS.psstring("21113413"),BWIPJS.psstring("41113411"),BWIPJS.psstring("12131143"),BWIPJS.psstring("32131141"),BWIPJS.psstring("21231142"),BWIPJS.psstring("22122142"),BWIPJS.psstring("11222143"),BWIPJS.psstring("22131232"),BWIPJS.psstring("11231233"),BWIPJS.psstring("31231231"),BWIPJS.psstring("12113143"),BWIPJS.psstring("32113141"),BWIPJS.psstring("12122233"),BWIPJS.psstring("32122231"),BWIPJS.psstring("12131323"),BWIPJS.psstring("32131321"),BWIPJS.psstring("21231322"),BWIPJS.psstring("22113232"),BWIPJS.psstring("11213233"),BWIPJS.psstring("22122322"),BWIPJS.psstring("11222323"),BWIPJS.psstring("22131412"),BWIPJS.psstring("11231413"),BWIPJS.psstring("31231411"),BWIPJS.psstring("12113323"),BWIPJS.psstring("32113321"),BWIPJS.psstring("12122413"),BWIPJS.psstring("32122411"),BWIPJS.psstring("21222412"),BWIPJS.psstring("22113412"),BWIPJS.psstring("11213413"),BWIPJS.psstring("31213411"),BWIPJS.psstring("13131142"),BWIPJS.psstring("22231141"),BWIPJS.psstring("11331142"),BWIPJS.psstring("23122141"),BWIPJS.psstring("12222142"),BWIPJS.psstring("23131231"),BWIPJS.psstring("12231232"),BWIPJS.psstring("21331231"),BWIPJS.psstring("13113142"),BWIPJS.psstring("13122232"),BWIPJS.psstring("11313142"),BWIPJS.psstring("13131322"),BWIPJS.psstring("11322232"),BWIPJS.psstring("22231321"),BWIPJS.psstring("11331322"),BWIPJS.psstring("23113231"),BWIPJS.psstring("12213232"),BWIPJS.psstring("23122321"),BWIPJS.psstring("12222322"),BWIPJS.psstring("23131411"),BWIPJS.psstring("12231412"),BWIPJS.psstring("21331411"),BWIPJS.psstring("13113322"),BWIPJS.psstring("13122412"),BWIPJS.psstring("11313322"),BWIPJS.psstring("22222411"),BWIPJS.psstring("11322412"),BWIPJS.psstring("23113411"),BWIPJS.psstring("12213412"),BWIPJS.psstring("21313411"),BWIPJS.psstring("14131141"),BWIPJS.psstring("12331141"),BWIPJS.psstring("13222141"),BWIPJS.psstring("13231231"),BWIPJS.psstring("11422141"),BWIPJS.psstring("11431231"),BWIPJS.psstring("14113141"),BWIPJS.psstring("14122231"),BWIPJS.psstring("12313141"),BWIPJS.psstring("14131321"),BWIPJS.psstring("12322231"),BWIPJS.psstring("12331321"),BWIPJS.psstring("13213231"),BWIPJS.psstring("13222321"),BWIPJS.psstring("11413231"),BWIPJS.psstring("13231411"),BWIPJS.psstring("11422321"),BWIPJS.psstring("11431411"),BWIPJS.psstring("14113321"),BWIPJS.psstring("14122411"),BWIPJS.psstring("12313321"),BWIPJS.psstring("12322411"),BWIPJS.psstring("13213411"),BWIPJS.psstring("11413411"),BWIPJS.psstring("11141143"),BWIPJS.psstring("31141141"),BWIPJS.psstring("21132142"),BWIPJS.psstring("21141232"),BWIPJS.psstring("11123143"),BWIPJS.psstring("31123141"),BWIPJS.psstring("11132233"),BWIPJS.psstring("31132231"),BWIPJS.psstring("11141323"),BWIPJS.psstring("31141321"),BWIPJS.psstring("21114142"),BWIPJS.psstring("21123232"),BWIPJS.psstring("21132322"),BWIPJS.psstring("21141412"),BWIPJS.psstring("11114233"),BWIPJS.psstring("31114231"),BWIPJS.psstring("11123323"),BWIPJS.psstring("31123321"),BWIPJS.psstring("11132413"),BWIPJS.psstring("31132411"),BWIPJS.psstring("21114322"),BWIPJS.psstring("21123412"),BWIPJS.psstring("12141142"),BWIPJS.psstring("21241141"),BWIPJS.psstring("22132141"),BWIPJS.psstring("11232142"),BWIPJS.psstring("22141231"),BWIPJS.psstring("11241232"),BWIPJS.psstring("12123142"),BWIPJS.psstring("12132232"),BWIPJS.psstring("12141322"),BWIPJS.psstring("21241321"),BWIPJS.psstring("22114141"),BWIPJS.psstring("11214142"),BWIPJS.psstring("22123231"),BWIPJS.psstring("11223232"),BWIPJS.psstring("22132321"),BWIPJS.psstring("11232322"),BWIPJS.psstring("22141411"),BWIPJS.psstring("11241412"),BWIPJS.psstring("12114232"),BWIPJS.psstring("12123322"),BWIPJS.psstring("12132412"),BWIPJS.psstring("21232411"),BWIPJS.psstring("22114321"),BWIPJS.psstring("11214322"),BWIPJS.psstring("22123411"),BWIPJS.psstring("11223412"),BWIPJS.psstring("13141141"),BWIPJS.psstring("11341141"),BWIPJS.psstring("12232141"),BWIPJS.psstring("12241231"),BWIPJS.psstring("13123141"),BWIPJS.psstring("13132231"),BWIPJS.psstring("11323141"),BWIPJS.psstring("13141321"),BWIPJS.psstring("11332231"),BWIPJS.psstring("11341321"),BWIPJS.psstring("12214141"),BWIPJS.psstring("12223231"),BWIPJS.psstring("12232321"),BWIPJS.psstring("12241411"),BWIPJS.psstring("13114231"),BWIPJS.psstring("13123321"),BWIPJS.psstring("11314231"),BWIPJS.psstring("13132411"),BWIPJS.psstring("11323321"),BWIPJS.psstring("11332411"),BWIPJS.psstring("12214321"),BWIPJS.psstring("12223411"),BWIPJS.psstring("11151142"),BWIPJS.psstring("21142141"),BWIPJS.psstring("21151231"),BWIPJS.psstring("11133142"),BWIPJS.psstring("11142232"),BWIPJS.psstring("11151322"),BWIPJS.psstring("21124141"),BWIPJS.psstring("21133231"),BWIPJS.psstring("21142321"),BWIPJS.psstring("21151411"),BWIPJS.psstring("11115142"),BWIPJS.psstring("11124232"),BWIPJS.psstring("11133322"),BWIPJS.psstring("11142412"),BWIPJS.psstring("21115231"),BWIPJS.psstring("21124321"),BWIPJS.psstring("21133411"),BWIPJS.psstring("12151141"),BWIPJS.psstring("11242141"),BWIPJS.psstring("11251231"),BWIPJS.psstring("12133141"),BWIPJS.psstring("12142231"),BWIPJS.psstring("12151321"),BWIPJS.psstring("11224141"),BWIPJS.psstring("11233231"),BWIPJS.psstring("11242321"),BWIPJS.psstring("11251411"),BWIPJS.psstring("12115141"),BWIPJS.psstring("12124231"),BWIPJS.psstring("12133321"),BWIPJS.psstring("12142411"),BWIPJS.psstring("11215231"),BWIPJS.psstring("11224321"),BWIPJS.psstring("11233411"),BWIPJS.psstring("11161141"),BWIPJS.psstring("11143141"),BWIPJS.psstring("11152231"),BWIPJS.psstring("11161321"),BWIPJS.psstring("11125141"),BWIPJS.psstring("11134231"),BWIPJS.psstring("11143321"),BWIPJS.psstring("11152411"),BWIPJS.psstring("11111245"),BWIPJS.psstring("31111243"),BWIPJS.psstring("51111241"),BWIPJS.psstring("21111334"),BWIPJS.psstring("41111332"),BWIPJS.psstring("11111425"),BWIPJS.psstring("31111423"),BWIPJS.psstring("51111421"),BWIPJS.psstring("21111514"),BWIPJS.psstring("41111512"),BWIPJS.psstring("31211152"),BWIPJS.psstring("12111244"),BWIPJS.psstring("32111242"),BWIPJS.psstring("21211243"),BWIPJS.psstring("41211241"),BWIPJS.psstring("22111333"),BWIPJS.psstring("42111331"),BWIPJS.psstring("11211334"),BWIPJS.psstring("31211332"),BWIPJS.psstring("12111424"),BWIPJS.psstring("32111422"),BWIPJS.psstring("21211423"),BWIPJS.psstring("41211421"),BWIPJS.psstring("22111513"),BWIPJS.psstring("42111511"),BWIPJS.psstring("11211514"),BWIPJS.psstring("31211512"),BWIPJS.psstring("12211153"),BWIPJS.psstring("32211151"),BWIPJS.psstring("21311152"),BWIPJS.psstring("13111243"),BWIPJS.psstring("33111241"),BWIPJS.psstring("22211242"),BWIPJS.psstring("11311243"),BWIPJS.psstring("31311241"),BWIPJS.psstring("23111332"),BWIPJS.psstring("12211333"),BWIPJS.psstring("32211331"),BWIPJS.psstring("21311332"),BWIPJS.psstring("13111423"),BWIPJS.psstring("33111421"),BWIPJS.psstring("22211422"),BWIPJS.psstring("11311423"),BWIPJS.psstring("31311421"),BWIPJS.psstring("23111512"),BWIPJS.psstring("12211513"),BWIPJS.psstring("32211511"),BWIPJS.psstring("21311512"),BWIPJS.psstring("13211152"),BWIPJS.psstring("22311151"),BWIPJS.psstring("11411152"),BWIPJS.psstring("14111242"),BWIPJS.psstring("23211241"),BWIPJS.psstring("12311242"),BWIPJS.psstring("21411241"),BWIPJS.psstring("24111331"),BWIPJS.psstring("13211332"),BWIPJS.psstring("22311331"),BWIPJS.psstring("11411332"),BWIPJS.psstring("14111422"),BWIPJS.psstring("23211421"),BWIPJS.psstring("12311422"),BWIPJS.psstring("21411421"),BWIPJS.psstring("24111511"),BWIPJS.psstring("13211512"),BWIPJS.psstring("22311511"),BWIPJS.psstring("11411512"),BWIPJS.psstring("14211151"),BWIPJS.psstring("12411151"),BWIPJS.psstring("15111241"),BWIPJS.psstring("13311241"),BWIPJS.psstring("11511241"),BWIPJS.psstring("14211331"),BWIPJS.psstring("12411331"),BWIPJS.psstring("15111421"),BWIPJS.psstring("13311421"),BWIPJS.psstring("11511421"),BWIPJS.psstring("14211511"),BWIPJS.psstring("12411511"),BWIPJS.psstring("21121153"),BWIPJS.psstring("41121151"),BWIPJS.psstring("11112154"),BWIPJS.psstring("31112152"),BWIPJS.psstring("11121244"),BWIPJS.psstring("31121242"),BWIPJS.psstring("21112243"),BWIPJS.psstring("41112241"),BWIPJS.psstring("21121333"),BWIPJS.psstring("41121331"),BWIPJS.psstring("11112334"),BWIPJS.psstring("31112332"),BWIPJS.psstring("11121424"),BWIPJS.psstring("31121422"),BWIPJS.psstring("21112423"),BWIPJS.psstring("41112421"),BWIPJS.psstring("21121513"),BWIPJS.psstring("41121511"),BWIPJS.psstring("11112514"),BWIPJS.psstring("31112512"),BWIPJS.psstring("22121152"),BWIPJS.psstring("11221153"),BWIPJS.psstring("31221151"),BWIPJS.psstring("12112153"),BWIPJS.psstring("32112151"),BWIPJS.psstring("12121243"),BWIPJS.psstring("32121241"),BWIPJS.psstring("21221242"),BWIPJS.psstring("22112242"),BWIPJS.psstring("11212243"),BWIPJS.psstring("22121332"),BWIPJS.psstring("11221333"),BWIPJS.psstring("31221331"),BWIPJS.psstring("12112333"),BWIPJS.psstring("32112331"),BWIPJS.psstring("12121423"),BWIPJS.psstring("32121421"),BWIPJS.psstring("21221422"),BWIPJS.psstring("22112422"),BWIPJS.psstring("11212423"),BWIPJS.psstring("22121512"),BWIPJS.psstring("11221513"),BWIPJS.psstring("31221511"),BWIPJS.psstring("12112513"),BWIPJS.psstring("32112511"),BWIPJS.psstring("21212512"),BWIPJS.psstring("23121151"),BWIPJS.psstring("12221152"),BWIPJS.psstring("21321151"),BWIPJS.psstring("13112152"),BWIPJS.psstring("13121242"),BWIPJS.psstring("11312152"),BWIPJS.psstring("22221241"),BWIPJS.psstring("11321242"),BWIPJS.psstring("23112241"),BWIPJS.psstring("12212242"),BWIPJS.psstring("23121331"),BWIPJS.psstring("12221332"),BWIPJS.psstring("21321331"),BWIPJS.psstring("13112332"),BWIPJS.psstring("13121422"),BWIPJS.psstring("11312332"),BWIPJS.psstring("22221421"),BWIPJS.psstring("11321422"),BWIPJS.psstring("23112421"),BWIPJS.psstring("12212422"),BWIPJS.psstring("23121511"),BWIPJS.psstring("12221512"),BWIPJS.psstring("21321511"),BWIPJS.psstring("13112512"),BWIPJS.psstring("22212511"),BWIPJS.psstring("11312512"),BWIPJS.psstring("13221151"),BWIPJS.psstring("11421151"),BWIPJS.psstring("14112151"),BWIPJS.psstring("14121241"),BWIPJS.psstring("12312151"),BWIPJS.psstring("12321241"),BWIPJS.psstring("13212241"),BWIPJS.psstring("13221331"),BWIPJS.psstring("11412241"),BWIPJS.psstring("11421331"),BWIPJS.psstring("14112331"),BWIPJS.psstring("14121421"),BWIPJS.psstring("12312331"),BWIPJS.psstring("12321421"),BWIPJS.psstring("13212421"),BWIPJS.psstring("13221511"),BWIPJS.psstring("11412421"),BWIPJS.psstring("11421511"),BWIPJS.psstring("14112511"),BWIPJS.psstring("12312511"),BWIPJS.psstring("21131152"),BWIPJS.psstring("11122153"),BWIPJS.psstring("31122151"),BWIPJS.psstring("11131243"),BWIPJS.psstring("31131241"),BWIPJS.psstring("21113152"),BWIPJS.psstring("21122242"),BWIPJS.psstring("21131332"),BWIPJS.psstring("11113243"),BWIPJS.psstring("31113241"),BWIPJS.psstring("11122333"),BWIPJS.psstring("31122331"),BWIPJS.psstring("11131423"),BWIPJS.psstring("31131421"),BWIPJS.psstring("21113332"),BWIPJS.psstring("21122422"),BWIPJS.psstring("21131512"),BWIPJS.psstring("11113423"),BWIPJS.psstring("31113421"),BWIPJS.psstring("11122513"),BWIPJS.psstring("31122511"),BWIPJS.psstring("22131151"),BWIPJS.psstring("11231152"),BWIPJS.psstring("12122152"),BWIPJS.psstring("12131242"),BWIPJS.psstring("21231241"),BWIPJS.psstring("22113151"),BWIPJS.psstring("11213152"),BWIPJS.psstring("22122241"),BWIPJS.psstring("11222242"),BWIPJS.psstring("22131331"),BWIPJS.psstring("11231332"),BWIPJS.psstring("12113242"),BWIPJS.psstring("12122332"),BWIPJS.psstring("12131422"),BWIPJS.psstring("21231421"),BWIPJS.psstring("22113331"),BWIPJS.psstring("11213332"),BWIPJS.psstring("22122421"),BWIPJS.psstring("11222422"),BWIPJS.psstring("22131511"),BWIPJS.psstring("11231512"),BWIPJS.psstring("12113422"),BWIPJS.psstring("12122512"),BWIPJS.psstring("21222511"),BWIPJS.psstring("12231151"),BWIPJS.psstring("13122151"),BWIPJS.psstring("13131241"),BWIPJS.psstring("11322151"),BWIPJS.psstring("11331241"),BWIPJS.psstring("12213151"),BWIPJS.psstring("12222241"),BWIPJS.psstring("12231331"),BWIPJS.psstring("13113241"),BWIPJS.psstring("13122331"),BWIPJS.psstring("11313241"),BWIPJS.psstring("13131421"),BWIPJS.psstring("11322331"),BWIPJS.psstring("11331421"),BWIPJS.psstring("12213331"),BWIPJS.psstring("12222421"),BWIPJS.psstring("12231511"),BWIPJS.psstring("13113421"),BWIPJS.psstring("13122511"),BWIPJS.psstring("11313421"),BWIPJS.psstring("11322511"),BWIPJS.psstring("21141151"),BWIPJS.psstring("11132152"),BWIPJS.psstring("11141242"),BWIPJS.psstring("21123151"),BWIPJS.psstring("21132241"),BWIPJS.psstring("21141331"),BWIPJS.psstring("11114152"),BWIPJS.psstring("11123242"),BWIPJS.psstring("11132332"),BWIPJS.psstring("11141422"),BWIPJS.psstring("21114241"),BWIPJS.psstring("21123331"),BWIPJS.psstring("21132421"),BWIPJS.psstring("21141511"),BWIPJS.psstring("11114332"),BWIPJS.psstring("11123422"),BWIPJS.psstring("11132512"),BWIPJS.psstring("11241151"),BWIPJS.psstring("12132151"),BWIPJS.psstring("12141241"),BWIPJS.psstring("11223151"),BWIPJS.psstring("11232241"),BWIPJS.psstring("11241331"),BWIPJS.psstring("12114151"),BWIPJS.psstring("12123241"),BWIPJS.psstring("12132331"),BWIPJS.psstring("12141421"),BWIPJS.psstring("11214241"),BWIPJS.psstring("11223331"),BWIPJS.psstring("11232421"),BWIPJS.psstring("11241511"),BWIPJS.psstring("12114331"),BWIPJS.psstring("12123421"),BWIPJS.psstring("12132511"),BWIPJS.psstring("11142151"),BWIPJS.psstring("11151241"),BWIPJS.psstring("11124151"),BWIPJS.psstring("11133241"),BWIPJS.psstring("11142331"),BWIPJS.psstring("11151421"),BWIPJS.psstring("11115241"),BWIPJS.psstring("11124331"),BWIPJS.psstring("11133421"),BWIPJS.psstring("11142511"),BWIPJS.psstring("21111253"),BWIPJS.psstring("41111251"),BWIPJS.psstring("11111344"),BWIPJS.psstring("31111342"),BWIPJS.psstring("21111433"),BWIPJS.psstring("41111431"),BWIPJS.psstring("11111524"),BWIPJS.psstring("31111522"),BWIPJS.psstring("21111613"),BWIPJS.psstring("41111611"),BWIPJS.psstring("21211162"),BWIPJS.psstring("22111252"),BWIPJS.psstring("11211253"),BWIPJS.psstring("31211251"),BWIPJS.psstring("12111343"),BWIPJS.psstring("32111341"),BWIPJS.psstring("21211342"),BWIPJS.psstring("22111432"),BWIPJS.psstring("11211433"),BWIPJS.psstring("31211431"),BWIPJS.psstring("12111523"),BWIPJS.psstring("32111521"),BWIPJS.psstring("21211522"),BWIPJS.psstring("22111612"),BWIPJS.psstring("11211613"),BWIPJS.psstring("31211611"),BWIPJS.psstring("22211161"),BWIPJS.psstring("11311162"),BWIPJS.psstring("23111251"),BWIPJS.psstring("12211252"),BWIPJS.psstring("21311251"),BWIPJS.psstring("13111342"),BWIPJS.psstring("22211341"),BWIPJS.psstring("11311342"),BWIPJS.psstring("23111431"),BWIPJS.psstring("12211432"),BWIPJS.psstring("21311431"),BWIPJS.psstring("13111522"),BWIPJS.psstring("22211521"),BWIPJS.psstring("11311522"),BWIPJS.psstring("23111611"),BWIPJS.psstring("12211612"),BWIPJS.psstring("21311611"),BWIPJS.psstring("12311161"),BWIPJS.psstring("13211251"),BWIPJS.psstring("11411251"),BWIPJS.psstring("14111341"),BWIPJS.psstring("12311341"),BWIPJS.psstring("13211431"),BWIPJS.psstring("11411431"),BWIPJS.psstring("14111521"),BWIPJS.psstring("12311521"),BWIPJS.psstring("13211611"),BWIPJS.psstring("11411611"),BWIPJS.psstring("31121161"),BWIPJS.psstring("21112162"),BWIPJS.psstring("21121252"),BWIPJS.psstring("11112253"),BWIPJS.psstring("31112251"),BWIPJS.psstring("11121343"),BWIPJS.psstring("31121341"),BWIPJS.psstring("21112342"),BWIPJS.psstring("21121432"),BWIPJS.psstring("11112433"),BWIPJS.psstring("31112431"),BWIPJS.psstring("11121523"),BWIPJS.psstring("31121521"),BWIPJS.psstring("21112522"),BWIPJS.psstring("21121612"),BWIPJS.psstring("12121162"),BWIPJS.psstring("21221161"),BWIPJS.psstring("22112161"),BWIPJS.psstring("11212162"),BWIPJS.psstring("22121251"),BWIPJS.psstring("11221252"),BWIPJS.psstring("12112252"),BWIPJS.psstring("12121342"),BWIPJS.psstring("21221341"),BWIPJS.psstring("22112341"),BWIPJS.psstring("11212342"),BWIPJS.psstring("22121431"),BWIPJS.psstring("11221432"),BWIPJS.psstring("12112432"),BWIPJS.psstring("12121522"),BWIPJS.psstring("21221521"),BWIPJS.psstring("22112521"),BWIPJS.psstring("11212522"),BWIPJS.psstring("22121611"),BWIPJS.psstring("11221612"),BWIPJS.psstring("13121161"),BWIPJS.psstring("11321161"),BWIPJS.psstring("12212161"),BWIPJS.psstring("12221251"),BWIPJS.psstring("13112251"),BWIPJS.psstring("13121341"),BWIPJS.psstring("11312251"),BWIPJS.psstring("11321341"),BWIPJS.psstring("12212341"),BWIPJS.psstring("12221431"),BWIPJS.psstring("13112431"),BWIPJS.psstring("13121521"),BWIPJS.psstring("11312431"),BWIPJS.psstring("11321521"),BWIPJS.psstring("12212521"),BWIPJS.psstring("12221611"),BWIPJS.psstring("11131162"),BWIPJS.psstring("21122161"),BWIPJS.psstring("21131251"),BWIPJS.psstring("11113162")]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parity";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("1001"),BWIPJS.psstring("0101"),BWIPJS.psstring("1100"),BWIPJS.psstring("0011"),BWIPJS.psstring("1010"),BWIPJS.psstring("0110"),BWIPJS.psstring("1111"),BWIPJS.psstring("0000")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowbits";
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f80;
	var t139=this.stk[--this.ptr];
	var t137=this.stk[--this.ptr];
	var t136=this.stk[--this.ptr];
	var t135=this.stk[--this.ptr];
	for (var t138=t135; t136<0 ? t138>=t137 : t138<=t137; t138+=t136) {
		this.stk[this.ptr++]=t138;
		if (t139.call(this)==-1) break;
	}
	this.stk[this.ptr++]="pixs";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=81;
	var t=this.dstk.get("sepheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f81;
	var t142=this.stk[--this.ptr];
	var t140=this.stk[--this.ptr];
	for (var t141=0; t141<t140; t141++) {
		if (t142.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f86;
	var t159=this.stk[--this.ptr];
	var t157=this.stk[--this.ptr];
	var t156=this.stk[--this.ptr];
	var t155=this.stk[--this.ptr];
	for (var t158=t155; t156<0 ? t158>=t157 : t158<=t157; t158+=t156) {
		this.stk[this.ptr++]=t158;
		if (t159.call(this)==-1) break;
	}
	var t=this.dstk.get("rowheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f87;
	var t162=this.stk[--this.ptr];
	var t160=this.stk[--this.ptr];
	for (var t161=0; t161<t160; t161++) {
		if (t162.call(this)==-1) break;
	}
	this.stk[this.ptr++]=81;
	var t=this.dstk.get("sepheight");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f88;
	var t165=this.stk[--this.ptr];
	var t163=this.stk[--this.ptr];
	for (var t164=0; t164<t163; t164++) {
		if (t165.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	var t=this.dstk.get("renmatrix");
	this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixs";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixx";
	this.stk[this.ptr++]=81;
	this.stk[this.ptr++]="pixy";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=81;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]="height";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=81;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="width";
	this.stk[this.ptr++]=81;
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
	var t166=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t166.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("code49");
// END OF code49

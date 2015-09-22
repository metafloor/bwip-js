// file: bwipp/maxicode.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-08-10
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN maxicode
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("maxicode", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renmaximatrix"] && BWIPJS.increfs("maxicode", "renmaximatrix")) {
	BWIPJS.load("bwipp/renmaximatrix.js");
}
BWIPJS.bwipp["maxicode"]=function() {
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
		this.stk[this.ptr++]="fid";
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msg";
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=9;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f11(){
		this.stk[this.ptr++]="fid";
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f12(){
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("\x5b\x29\x3e\x1e\x30\x31\x1d");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f10;
		this.stk[this.ptr++]=$f11;
		var t12=this.stk[--this.ptr];
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
		} else {
			if (t12.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("\x1d");
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
		this.ptr--;
		this.stk[this.ptr++]="pcode";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("\x1d");
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
		this.ptr--;
		this.stk[this.ptr++]="ccode";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("\x1d");
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
		this.ptr--;
		this.stk[this.ptr++]="scode";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="msg";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("fid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("fid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("fid");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="msg";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msglen";
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f13(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f14(){
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
		this.stk[this.ptr++]=$f13;
		var t15=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t15.call(this)==-1) return -1;
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
	function $f15(){
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
		this.stk[this.ptr++]=$f14;
		var t20=this.stk[--this.ptr];
		var t18=this.stk[--this.ptr];
		var t17=this.stk[--this.ptr];
		var t16=this.stk[--this.ptr];
		for (var t19=t16; t17<0 ? t19>=t18 : t19<=t18; t19+=t17) {
			this.stk[this.ptr++]=t19;
			if (t20.call(this)==-1) break;
		}
	}
	function $f16(){
		this.stk[this.ptr++]=0;
	}
	function $f17(){
		var t=this.dstk.get("nseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nseq");
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
	function $f18(){
		var t=this.dstk.get("nseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f19(){
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
		this.stk[this.ptr++]=$f17;
		this.stk[this.ptr++]=$f18;
		var t29=this.stk[--this.ptr];
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
		} else {
			if (t29.call(this)==-1) return -1;
		}
	}
	function $f20(){
		return -1;
	}
	function $f21(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f22(){
		return -1;
	}
	function $f23(){
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
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f20;
		var t36=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t36.call(this)==-1) return -1;
		}
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
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f21;
		this.stk[this.ptr++]=$f22;
		var t37=this.stk[--this.ptr];
		var t38=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t38.call(this)==-1) return -1;
		} else {
			if (t37.call(this)==-1) return -1;
		}
	}
	function $f24(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f23;
		var t39=this.stk[--this.ptr];
		while (true) {
			if (t39.call(this)==-1) break;
		}
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f25(){
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("out");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f26(){
		var t=this.dstk.get("la");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f27(){
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f26;
		var t40=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t40.call(this)==-1) return -1;
		}
		return -1;
	}
	function $f28(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=63;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=-6;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f29(){
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
	}
	function $f30(){
		this.ptr--;
	}
	function $f31(){
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=$f28;
		var t44=this.stk[--this.ptr];
		var t42=this.stk[--this.ptr];
		for (var t43=0; t43<t42; t43++) {
			if (t44.call(this)==-1) break;
		}
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("ns");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=$f29;
		var t49=this.stk[--this.ptr];
		var t47=this.stk[--this.ptr];
		var t46=this.stk[--this.ptr];
		var t45=this.stk[--this.ptr];
		for (var t48=t45; t46<0 ? t48>=t47 : t48<=t47; t48+=t46) {
			this.stk[this.ptr++]=t48;
			if (t49.call(this)==-1) break;
		}
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=$f30;
		var t52=this.stk[--this.ptr];
		var t50=this.stk[--this.ptr];
		for (var t51=0; t51<t50; t51++) {
			if (t52.call(this)==-1) break;
		}
		var t=this.dstk.get("out");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f32(){
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f33(){
		this.stk[this.ptr++]=-99;
	}
	function $f34(){
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f35(){
		this.stk[this.ptr++]=-99;
	}
	function $f36(){
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f37(){
		var t=this.dstk.get("lb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f38(){
		var t=this.dstk.get("sb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f39(){
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f37;
		this.stk[this.ptr++]=$f38;
		var t59=this.stk[--this.ptr];
		var t60=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t60.call(this)==-1) return -1;
		} else {
			if (t59.call(this)==-1) return -1;
		}
		return -1;
	}
	function $f40(){
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f41(){
		var t=this.dstk.get("sa");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f42(){
		var t=this.dstk.get("sa2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f43(){
		var t=this.dstk.get("sa3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f44(){
		var t=this.dstk.get("la");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f45(){
		this.stk[this.ptr++]="p";
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
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
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f40;
		var t62=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t62.call(this)==-1) return -1;
		}
		this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("prefixinset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f41;
		var t63=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t63.call(this)==-1) return -1;
		}
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f42;
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		}
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f43;
		var t65=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t65.call(this)==-1) return -1;
		}
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f44;
		var t66=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t66.call(this)==-1) return -1;
		}
		return -1;
	}
	function $f46(){
		var t=this.dstk.get("la");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f47(){
		var t=this.dstk.get("lb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f48(){
		this.stk[this.ptr++]="setx";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sx";
		var t=this.dstk.get("sc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lkx";
		var t=this.dstk.get("lkc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f49(){
		this.stk[this.ptr++]="setx";
		this.stk[this.ptr++]=BWIPJS.psstring("setd");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sx";
		var t=this.dstk.get("sd");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lkx";
		var t=this.dstk.get("lkd");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f50(){
		this.stk[this.ptr++]="setx";
		this.stk[this.ptr++]=BWIPJS.psstring("sete");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sx";
		var t=this.dstk.get("se");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lkx";
		var t=this.dstk.get("lke");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f51(){
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f52(){
		var t=this.dstk.get("sx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f53(){
		var t=this.dstk.get("sx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f54(){
		var t=this.dstk.get("sx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("sx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char3");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f55(){
		var t=this.dstk.get("sx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("lkx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset";
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f56(){
		var t=this.dstk.get("nseq");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f31;
		var t53=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t53.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="char1";
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="char2";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f32;
		this.stk[this.ptr++]=$f33;
		var t54=this.stk[--this.ptr];
		var t55=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t55.call(this)==-1) return -1;
		} else {
			if (t54.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="char3";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f34;
		this.stk[this.ptr++]=$f35;
		var t56=this.stk[--this.ptr];
		var t57=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t57.call(this)==-1) return -1;
		} else {
			if (t56.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f36;
		var t58=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t58.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f39;
		var t61=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t61.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f45;
		var t67=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t67.call(this)==-1) return -1;
		}
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f46;
		var t68=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t68.call(this)==-1) return -1;
		}
		var t=this.dstk.get("setb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f47;
		var t69=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t69.call(this)==-1) return -1;
		}
		var t=this.dstk.get("setc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f48;
		var t70=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t70.call(this)==-1) return -1;
		}
		var t=this.dstk.get("setd");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f49;
		var t71=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t71.call(this)==-1) return -1;
		}
		var t=this.dstk.get("sete");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f50;
		var t72=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t72.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="p";
		var t=this.dstk.get("setx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=t;
		var t=this.dstk.get("msg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		var t=this.dstk.get("msglen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
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
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f51;
		var t73=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t73.call(this)==-1) return -1;
		}
		this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("prefixinset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f52;
		var t74=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t74.call(this)==-1) return -1;
		}
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f53;
		var t75=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t75.call(this)==-1) return -1;
		}
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f54;
		var t76=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t76.call(this)==-1) return -1;
		}
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f55;
		var t77=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t77.call(this)==-1) return -1;
		}
		return -1;
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
		this.stk[this.ptr++]=$f27;
		var t41=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t41.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=$f56;
		var t78=this.stk[--this.ptr];
		while (true) {
			if (t78.call(this)==-1) break;
		}
	}
	function $f58(){
		this.stk[this.ptr++]="sami";
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("sami");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pad");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("sami");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("sam");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("sam");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f59(){
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=6;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=36;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f60(){
		var t=this.dstk.get("pcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f61(){
		var t=this.dstk.get("pcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f62(){
		var t=this.dstk.get("seta");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f63(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pccw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=6;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f64(){
		this.stk[this.ptr++]="pccw";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("      ");
		this.stk[this.ptr++]=6;
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
		var t=this.dstk.get("pcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f60;
		this.stk[this.ptr++]=$f61;
		var t81=this.stk[--this.ptr];
		var t82=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t82.call(this)==-1) return -1;
		} else {
			if (t81.call(this)==-1) return -1;
		}
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=$f62;
		var t85=this.stk[--this.ptr];//forall
		var t84=this.stk[--this.ptr];
		for (var t83 in t84) {
			if (t84 instanceof BWIPJS.psstring || t84 instanceof BWIPJS.psarray) {
				if (t83.charCodeAt(0) > 57) continue;
			} else {
				if (t83.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t83.substr(1);
				} else {
					this.stk[this.ptr++]=t83;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t84,t83);
			if (t85.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=$f63;
		var t90=this.stk[--this.ptr];
		var t88=this.stk[--this.ptr];
		var t87=this.stk[--this.ptr];
		var t86=this.stk[--this.ptr];
		for (var t89=t86; t87<0 ? t89>=t88 : t89<=t88; t89+=t87) {
			this.stk[this.ptr++]=t89;
			if (t90.call(this)==-1) break;
		}
	}
	function $f65(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ps";
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ep";
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("pri");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ps");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pri");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ps");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("ep");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f66(){
		var t=this.dstk.get("padval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f67(){
		this.stk[this.ptr++]="mdb";
		this.stk[this.ptr++]=BWIPJS.psstring("0000");
		this.stk[this.ptr++]=4;
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
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
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
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ccb";
		this.stk[this.ptr++]=BWIPJS.psstring("0000000000");
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
		var t=this.dstk.get("ccode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=10;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="scb";
		this.stk[this.ptr++]=BWIPJS.psstring("0000000000");
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
		var t=this.dstk.get("scode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=10;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="pcb";
		this.stk[this.ptr++]=BWIPJS.psstring("000000000000000000000000000000000000");
		this.stk[this.ptr++]=36;
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
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f59;
		this.stk[this.ptr++]=$f64;
		var t91=this.stk[--this.ptr];
		var t92=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t92.call(this)==-1) return -1;
		} else {
			if (t91.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="scm";
		this.stk[this.ptr++]=60;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("mdb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=38;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=30;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=24;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=18;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=16;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=12;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=22;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=28;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("pcb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=34;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=52;
		var t=this.dstk.get("ccb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=42;
		var t=this.dstk.get("ccb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=36;
		var t=this.dstk.get("ccb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=54;
		var t=this.dstk.get("scb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("scm");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=48;
		var t=this.dstk.get("scb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="pri";
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0,0,0,0,0,0,0]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=59;
		this.stk[this.ptr++]=$f65;
		var t97=this.stk[--this.ptr];
		var t95=this.stk[--this.ptr];
		var t94=this.stk[--this.ptr];
		var t93=this.stk[--this.ptr];
		for (var t96=t93; t94<0 ? t96>=t95 : t96<=t95; t96+=t94) {
			this.stk[this.ptr++]=t96;
			if (t97.call(this)==-1) break;
		}
		this.stk[this.ptr++]="sec";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=84;
		this.stk[this.ptr++]=$f66;
		var t100=this.stk[--this.ptr];
		var t98=this.stk[--this.ptr];
		for (var t99=0; t99<t98; t99++) {
			if (t100.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("sec");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("encmsg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f68(){
		this.stk[this.ptr++]=5;
	}
	function $f69(){
		this.stk[this.ptr++]=4;
	}
	function $f70(){
		this.stk[this.ptr++]="mode";
		var t=this.dstk.get("encmsg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=77;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f68;
		this.stk[this.ptr++]=$f69;
		var t102=this.stk[--this.ptr];
		var t103=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t103.call(this)==-1) return -1;
		} else {
			if (t102.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f71(){
		this.stk[this.ptr++]=78;
	}
	function $f72(){
		this.stk[this.ptr++]=94;
	}
	function $f73(){
		var t=this.dstk.get("padval");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f74(){
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=-1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f70;
		var t104=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t104.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cws";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f71;
		this.stk[this.ptr++]=$f72;
		var t105=this.stk[--this.ptr];
		var t106=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t106.call(this)==-1) return -1;
		} else {
			if (t105.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=$f73;
		var t109=this.stk[--this.ptr];
		var t107=this.stk[--this.ptr];
		for (var t108=0; t108<t107; t108++) {
			if (t109.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("mode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("encmsg");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="pri";
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sec";
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		var t=this.dstk.get("cws");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f75(){
		this.stk[this.ptr++]=67;
		if (typeof(this.stk[this.ptr-1])=="boolean")
			this.stk[this.ptr-2]=!this.stk[this.ptr-2]&&this.stk[this.ptr-1] || this.stk[this.ptr-2]&&!this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]^this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f76(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=64;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f75;
		var t111=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t111.call(this)==-1) return -1;
		}
	}
	function $f77(){
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
	function $f78(){
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
		this.stk[this.ptr++]=63;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("rsalog");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f79(){
		this.ptr--;
		this.ptr--;
		this.stk[this.ptr++]=0;
	}
	function $f80(){
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
		this.stk[this.ptr++]=$f78;
		this.stk[this.ptr++]=$f79;
		var t120=this.stk[--this.ptr];
		var t121=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t121.call(this)==-1) return -1;
		} else {
			if (t120.call(this)==-1) return -1;
		}
	}
	function $f81(){
		this.stk[this.ptr++]=0;
	}
	function $f82(){
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
	function $f83(){
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
		this.stk[this.ptr++]=$f82;
		var t129=this.stk[--this.ptr];
		var t127=this.stk[--this.ptr];
		var t126=this.stk[--this.ptr];
		var t125=this.stk[--this.ptr];
		for (var t128=t125; t126<0 ? t128>=t127 : t128<=t127; t128+=t126) {
			this.stk[this.ptr++]=t128;
			if (t129.call(this)==-1) break;
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
	function $f84(){
		this.stk[this.ptr++]=0;
	}
	function $f85(){
		var t=this.dstk.get("ecb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ecb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("ecb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean")
			this.stk[this.ptr-2]=!this.stk[this.ptr-2]&&this.stk[this.ptr-1] || this.stk[this.ptr-2]&&!this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]^this.stk[this.ptr-1];
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f86(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		var t=this.dstk.get("ecb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("ecb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("p");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("t");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("rsprod");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f85;
		var t138=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t138.call(this)==-1) return -1;
		}
	}
	function $f87(){
		this.stk[this.ptr++]="t";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("ecb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean")
			this.stk[this.ptr-2]=!this.stk[this.ptr-2]&&this.stk[this.ptr-1] || this.stk[this.ptr-2]&&!this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]^this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("ecb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f86;
		var t143=this.stk[--this.ptr];
		var t141=this.stk[--this.ptr];
		var t140=this.stk[--this.ptr];
		var t139=this.stk[--this.ptr];
		for (var t142=t139; t140<0 ? t142>=t141 : t142<=t141; t142+=t140) {
			this.stk[this.ptr++]=t142;
			if (t143.call(this)==-1) break;
		}
	}
	function $f88(){
		this.stk[this.ptr++]="rsnum";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cwb";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="coeffs";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("rsnum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f81;
		var t124=this.stk[--this.ptr];
		var t122=this.stk[--this.ptr];
		for (var t123=0; t123<t122; t123++) {
			if (t124.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("rsnum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f83;
		var t134=this.stk[--this.ptr];
		var t132=this.stk[--this.ptr];
		var t131=this.stk[--this.ptr];
		var t130=this.stk[--this.ptr];
		for (var t133=t130; t131<0 ? t133>=t132 : t133<=t132; t133+=t131) {
			this.stk[this.ptr++]=t133;
			if (t134.call(this)==-1) break;
		}
		this.stk[this.ptr++]="coeffs";
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("coeffs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ecb";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("rsnum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f84;
		var t137=this.stk[--this.ptr];
		var t135=this.stk[--this.ptr];
		for (var t136=0; t136<t135; t136++) {
			if (t137.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("cwb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f87;
		var t148=this.stk[--this.ptr];
		var t146=this.stk[--this.ptr];
		var t145=this.stk[--this.ptr];
		var t144=this.stk[--this.ptr];
		for (var t147=t144; t145<0 ? t147>=t146 : t147<=t146; t147+=t145) {
			this.stk[this.ptr++]=t147;
			if (t148.call(this)==-1) break;
		}
		var t=this.dstk.get("ecb");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f89(){
		var t=this.dstk.get("sec");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f90(){
		var t=this.dstk.get("sec");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f91(){
		this.stk[this.ptr++]=20;
	}
	function $f92(){
		this.stk[this.ptr++]=28;
	}
	function $f93(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("secochk");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("secechk");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f94(){
		this.stk[this.ptr++]=0;
	}
	function $f95(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f96(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cw";
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("codewords");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr++]=$f95;
		var t171=this.stk[--this.ptr];//forall
		var t170=this.stk[--this.ptr];
		for (var t169 in t170) {
			if (t170 instanceof BWIPJS.psstring || t170 instanceof BWIPJS.psarray) {
				if (t169.charCodeAt(0) > 57) continue;
			} else {
				if (t169.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t169.substr(1);
				} else {
					this.stk[this.ptr++]=t169;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t170,t169);
			if (t171.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("mods");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		var t=this.dstk.get("cw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cw");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f97(){
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("modmap");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
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
	function $f98(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("mods");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f97;
		var t177=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t177.call(this)==-1) return -1;
		}
	}
	function $f99(){
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
	this.stk[this.ptr++]="sam";
	this.stk[this.ptr++]=-1;
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
	this.stk[this.ptr++]="mode";
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sam";
	var t=this.dstk.get("sam");
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
	this.stk[this.ptr++]="msg";
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msglen";
	var t=this.dstk.get("msg");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=3;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f12;
	var t14=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t14.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="eci";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pad";
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ns";
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="la";
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lb";
	this.stk[this.ptr++]=-5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sa";
	this.stk[this.ptr++]=-6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sb";
	this.stk[this.ptr++]=-7;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sc";
	this.stk[this.ptr++]=-8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sd";
	this.stk[this.ptr++]=-9;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="se";
	this.stk[this.ptr++]=-10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sa2";
	this.stk[this.ptr++]=-11;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sa3";
	this.stk[this.ptr++]=-12;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lkc";
	this.stk[this.ptr++]=-13;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lkd";
	this.stk[this.ptr++]=-14;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lke";
	this.stk[this.ptr++]=-15;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pd2";
	this.stk[this.ptr++]=-16;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pd3";
	this.stk[this.ptr++]=-17;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charmaps";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([13,BWIPJS.psstring("`"),192,224,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("A"),BWIPJS.psstring("a"),193,225,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("B"),BWIPJS.psstring("b"),194,226,2]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("C"),BWIPJS.psstring("c"),195,227,3]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("D"),BWIPJS.psstring("d"),196,228,4]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("E"),BWIPJS.psstring("e"),197,229,5]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("F"),BWIPJS.psstring("f"),198,230,6]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("G"),BWIPJS.psstring("g"),199,231,7]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("H"),BWIPJS.psstring("h"),200,232,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("I"),BWIPJS.psstring("i"),201,233,9]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("J"),BWIPJS.psstring("j"),202,234,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("K"),BWIPJS.psstring("k"),203,235,11]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("L"),BWIPJS.psstring("l"),204,236,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("M"),BWIPJS.psstring("m"),205,237,13]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("N"),BWIPJS.psstring("n"),206,238,14]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("O"),BWIPJS.psstring("o"),207,239,15]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("P"),BWIPJS.psstring("p"),208,240,16]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Q"),BWIPJS.psstring("q"),209,241,17]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("R"),BWIPJS.psstring("r"),210,242,18]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("S"),BWIPJS.psstring("s"),211,243,19]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("T"),BWIPJS.psstring("t"),212,244,20]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("U"),BWIPJS.psstring("u"),213,245,21]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("V"),BWIPJS.psstring("v"),214,246,22]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("W"),BWIPJS.psstring("w"),215,247,23]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("X"),BWIPJS.psstring("x"),216,248,24]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Y"),BWIPJS.psstring("y"),217,249,25]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Z"),BWIPJS.psstring("z"),218,250,26]);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("eci");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("eci");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("eci");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("eci");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("eci");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=28;
	this.stk[this.ptr++]=28;
	this.stk[this.ptr++]=28;
	this.stk[this.ptr++]=28;
	var t=this.dstk.get("pad");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=29;
	this.stk[this.ptr++]=29;
	this.stk[this.ptr++]=29;
	this.stk[this.ptr++]=29;
	var t=this.dstk.get("pad");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=BWIPJS.psarray([30,30,30,30,27]);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("ns");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ns");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ns");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ns");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ns");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(" "),BWIPJS.psstring("{"),219,251,28]);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("pad");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("pad");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=220;
	this.stk[this.ptr++]=252;
	this.stk[this.ptr++]=29;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("\""),BWIPJS.psstring("}"),221,253,30]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("#"),BWIPJS.psstring("~"),222,254,31]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("$"),127,223,255,159]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("%"),BWIPJS.psstring(";"),170,161,160]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("&"),BWIPJS.psstring("<"),172,168,162]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("'"),BWIPJS.psstring("="),177,171,163]);
	this.stk[this.ptr++]=BWIPJS.psarray([40,BWIPJS.psstring(">"),178,175,164]);
	this.stk[this.ptr++]=BWIPJS.psarray([41,BWIPJS.psstring("?"),179,176,165]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("*"),BWIPJS.psstring("["),181,180,166]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("+"),92,185,183,167]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(","),BWIPJS.psstring("]"),186,184,169]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("-"),BWIPJS.psstring("^"),188,187,173]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("."),BWIPJS.psstring("_"),189,191,174]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("/"),BWIPJS.psstring(" "),190,138,182]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0"),BWIPJS.psstring(","),128,139,149]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("1"),BWIPJS.psstring("."),129,140,150]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("2"),BWIPJS.psstring("/"),130,141,151]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("3"),BWIPJS.psstring(":"),131,142,152]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("4"),BWIPJS.psstring("@"),132,143,153]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("5"),BWIPJS.psstring("!"),133,144,154]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("6"),BWIPJS.psstring("|"),134,145,155]);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("7");
	var t=this.dstk.get("pd2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=135;
	this.stk[this.ptr++]=146;
	this.stk[this.ptr++]=156;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("8");
	var t=this.dstk.get("sa2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=136;
	this.stk[this.ptr++]=147;
	this.stk[this.ptr++]=157;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("9");
	var t=this.dstk.get("sa3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=137;
	this.stk[this.ptr++]=148;
	this.stk[this.ptr++]=158;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring(":");
	var t=this.dstk.get("pd3");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("la");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("la");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("la");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sb");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sa");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring(" ");
	this.stk[this.ptr++]=BWIPJS.psstring(" ");
	this.stk[this.ptr++]=BWIPJS.psstring(" ");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sc");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sc");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("lkc");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sc");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sc");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sd");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sd");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sd");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("lkd");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sd");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("se");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("se");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("se");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("se");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("lke");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("lb");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("la");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("lb");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("lb");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("lb");
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
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=64;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=64;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=64;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=64;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=64;
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
	this.stk[this.ptr++]=$f15;
	var t25=this.stk[--this.ptr];
	var t23=this.stk[--this.ptr];
	var t22=this.stk[--this.ptr];
	var t21=this.stk[--this.ptr];
	for (var t24=t21; t22<0 ? t24>=t23 : t24<=t23; t24+=t22) {
		this.stk[this.ptr++]=t24;
		if (t25.call(this)==-1) break;
	}
	this.stk[this.ptr++]="seta";
	var t=this.dstk.get("charvals");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setb";
	var t=this.dstk.get("charvals");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setc";
	var t=this.dstk.get("charvals");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setd";
	var t=this.dstk.get("charvals");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sete";
	var t=this.dstk.get("charvals");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nseq";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("msglen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f16;
	var t28=this.stk[--this.ptr];
	var t26=this.stk[--this.ptr];
	for (var t27=0; t27<t26; t27++) {
		if (t28.call(this)==-1) break;
	}
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
	this.stk[this.ptr++]=$f19;
	var t35=this.stk[--this.ptr];
	var t33=this.stk[--this.ptr];
	var t32=this.stk[--this.ptr];
	var t31=this.stk[--this.ptr];
	for (var t34=t31; t32<0 ? t34>=t33 : t34<=t33; t34+=t32) {
		this.stk[this.ptr++]=t34;
		if (t35.call(this)==-1) break;
	}
	this.stk[this.ptr++]="nseq";
	var t=this.dstk.get("nseq");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("msglen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="prefixinset";
	this.stk[this.ptr++]=$f24;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="enc";
	this.stk[this.ptr++]=$f25;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="out";
	this.stk[this.ptr++]=144;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cset";
	this.stk[this.ptr++]=BWIPJS.psstring("seta");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f57;
	var t79=this.stk[--this.ptr];
	while (true) {
		if (t79.call(this)==-1) break;
	}
	this.stk[this.ptr++]="encmsg";
	var t=this.dstk.get("out");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("j");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="padval";
	var t=this.dstk.get("cset");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=t;
	var t=this.dstk.get("pad");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sami";
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("sam");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=-1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f58;
	var t80=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t80.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="encmsg";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sami");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	var t=this.dstk.get("encmsg");
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
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=3;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f67;
	var t101=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t101.call(this)==-1) return -1;
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
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=6;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("mode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=-1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f74;
	var t110=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t110.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="rsalog";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=63;
	this.stk[this.ptr++]=$f76;
	var t114=this.stk[--this.ptr];
	var t112=this.stk[--this.ptr];
	for (var t113=0; t113<t112; t113++) {
		if (t114.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rslog";
	this.stk[this.ptr++]=64;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=63;
	this.stk[this.ptr++]=$f77;
	var t119=this.stk[--this.ptr];
	var t117=this.stk[--this.ptr];
	var t116=this.stk[--this.ptr];
	var t115=this.stk[--this.ptr];
	for (var t118=t115; t116<0 ? t118>=t117 : t118<=t117; t118+=t116) {
		this.stk[this.ptr++]=t118;
		if (t119.call(this)==-1) break;
	}
	this.stk[this.ptr++]="rsprod";
	this.stk[this.ptr++]=$f80;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rscodes";
	this.stk[this.ptr++]=$f88;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="seco";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=2;
	var t=this.dstk.get("sec");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f89;
	var t153=this.stk[--this.ptr];
	var t151=this.stk[--this.ptr];
	var t150=this.stk[--this.ptr];
	var t149=this.stk[--this.ptr];
	for (var t152=t149; t150<0 ? t152>=t151 : t152<=t151; t152+=t150) {
		this.stk[this.ptr++]=t152;
		if (t153.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sece";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=2;
	var t=this.dstk.get("sec");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f90;
	var t158=this.stk[--this.ptr];
	var t156=this.stk[--this.ptr];
	var t155=this.stk[--this.ptr];
	var t154=this.stk[--this.ptr];
	for (var t157=t154; t155<0 ? t157>=t156 : t157<=t156; t157+=t155) {
		this.stk[this.ptr++]=t157;
		if (t158.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="scodes";
	var t=this.dstk.get("sec");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=84;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f91;
	this.stk[this.ptr++]=$f92;
	var t159=this.stk[--this.ptr];
	var t160=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t160.call(this)==-1) return -1;
	} else {
		if (t159.call(this)==-1) return -1;
	}
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="secochk";
	var t=this.dstk.get("seco");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("scodes");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("rscodes");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="secechk";
	var t=this.dstk.get("sece");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("scodes");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("rscodes");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="secchk";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("scodes");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f93;
	var t165=this.stk[--this.ptr];
	var t163=this.stk[--this.ptr];
	var t162=this.stk[--this.ptr];
	var t161=this.stk[--this.ptr];
	for (var t164=t161; t162<0 ? t164>=t163 : t164<=t163; t164+=t162) {
		this.stk[this.ptr++]=t164;
		if (t165.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="codewords";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("pri");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	var t=this.dstk.get("pri");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=10;
	var t=this.dstk.get("rscodes");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	var t=this.dstk.get("sec");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	var t=this.dstk.get("secchk");
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
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="mods";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=864;
	this.stk[this.ptr++]=$f94;
	var t168=this.stk[--this.ptr];
	var t166=this.stk[--this.ptr];
	for (var t167=0; t167<t166; t167++) {
		if (t168.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=143;
	this.stk[this.ptr++]=$f96;
	var t176=this.stk[--this.ptr];
	var t174=this.stk[--this.ptr];
	var t173=this.stk[--this.ptr];
	var t172=this.stk[--this.ptr];
	for (var t175=t172; t173<0 ? t175>=t174 : t175<=t174; t175+=t173) {
		this.stk[this.ptr++]=t175;
		if (t176.call(this)==-1) break;
	}
	this.stk[this.ptr++]="modmap";
	this.stk[this.ptr++]=BWIPJS.psarray([469,529,286,316,347,346,673,672,703,702,647,676,283,282,313,312,370,610,618,379,378,409,408,439,705,704,559,589,588,619,458,518,640,701,675,674,285,284,315,314,310,340,531,289,288,319,349,348,456,486,517,516,471,470,369,368,399,398,429,428,549,548,579,578,609,608,649,648,679,678,709,708,639,638,669,668,699,698,279,278,309,308,339,338,381,380,411,410,441,440,561,560,591,590,621,620,547,546,577,576,607,606,367,366,397,396,427,426,291,290,321,320,351,350,651,650,681,680,711,710,1,0,31,30,61,60,3,2,33,32,63,62,5,4,35,34,65,64,7,6,37,36,67,66,9,8,39,38,69,68,11,10,41,40,71,70,13,12,43,42,73,72,15,14,45,44,75,74,17,16,47,46,77,76,19,18,49,48,79,78,21,20,51,50,81,80,23,22,53,52,83,82,25,24,55,54,85,84,27,26,57,56,87,86,117,116,147,146,177,176,115,114,145,144,175,174,113,112,143,142,173,172,111,110,141,140,171,170,109,108,139,138,169,168,107,106,137,136,167,166,105,104,135,134,165,164,103,102,133,132,163,162,101,100,131,130,161,160,99,98,129,128,159,158,97,96,127,126,157,156,95,94,125,124,155,154,93,92,123,122,153,152,91,90,121,120,151,150,181,180,211,210,241,240,183,182,213,212,243,242,185,184,215,214,245,244,187,186,217,216,247,246,189,188,219,218,249,248,191,190,221,220,251,250,193,192,223,222,253,252,195,194,225,224,255,254,197,196,227,226,257,256,199,198,229,228,259,258,201,200,231,230,261,260,203,202,233,232,263,262,205,204,235,234,265,264,207,206,237,236,267,266,297,296,327,326,357,356,295,294,325,324,355,354,293,292,323,322,353,352,277,276,307,306,337,336,275,274,305,304,335,334,273,272,303,302,333,332,271,270,301,300,331,330,361,360,391,390,421,420,363,362,393,392,423,422,365,364,395,394,425,424,383,382,413,412,443,442,385,384,415,414,445,444,387,386,417,416,447,446,477,476,507,506,537,536,475,474,505,504,535,534,473,472,503,502,533,532,455,454,485,484,515,514,453,452,483,482,513,512,451,450,481,480,511,510,541,540,571,570,601,600,543,542,573,572,603,602,545,544,575,574,605,604,563,562,593,592,623,622,565,564,595,594,625,624,567,566,597,596,627,626,657,656,687,686,717,716,655,654,685,684,715,714,653,652,683,682,713,712,637,636,667,666,697,696,635,634,665,664,695,694,633,632,663,662,693,692,631,630,661,660,691,690,721,720,751,750,781,780,723,722,753,752,783,782,725,724,755,754,785,784,727,726,757,756,787,786,729,728,759,758,789,788,731,730,761,760,791,790,733,732,763,762,793,792,735,734,765,764,795,794,737,736,767,766,797,796,739,738,769,768,799,798,741,740,771,770,801,800,743,742,773,772,803,802,745,744,775,774,805,804,747,746,777,776,807,806,837,836,867,866,897,896,835,834,865,864,895,894,833,832,863,862,893,892,831,830,861,860,891,890,829,828,859,858,889,888,827,826,857,856,887,886,825,824,855,854,885,884,823,822,853,852,883,882,821,820,851,850,881,880,819,818,849,848,879,878,817,816,847,846,877,876,815,814,845,844,875,874,813,812,843,842,873,872,811,810,841,840,871,870,901,900,931,930,961,960,903,902,933,932,963,962,905,904,935,934,965,964,907,906,937,936,967,966,909,908,939,938,969,968,911,910,941,940,971,970,913,912,943,942,973,972,915,914,945,944,975,974,917,916,947,946,977,976,919,918,949,948,979,978,921,920,951,950,981,980,923,922,953,952,983,982,925,924,955,954,985,984,927,926,957,956,987,986,58,89,88,118,149,148,178,209,208,238,269,268,298,329,328,358,389,388,418,449,448,478,509,508,538,569,568,598,629,628,658,689,688,718,749,748,778,809,808,838,869,868,898,929,928,958,989,988]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pixs";
	this.stk[this.ptr++]=864;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("mods");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f98;
	var t182=this.stk[--this.ptr];
	var t180=this.stk[--this.ptr];
	var t179=this.stk[--this.ptr];
	var t178=this.stk[--this.ptr];
	for (var t181=t178; t179<0 ? t181>=t180 : t181<=t180; t181+=t179) {
		this.stk[this.ptr++]=t181;
		if (t182.call(this)==-1) break;
	}
	this.stk[this.ptr++]="pixs";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("j");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f99;
	var t185=this.stk[--this.ptr];//forall
	var t184=this.stk[--this.ptr];
	for (var t183 in t184) {
		if (t184 instanceof BWIPJS.psstring || t184 instanceof BWIPJS.psarray) {
			if (t183.charCodeAt(0) > 57) continue;
		} else {
			if (t183.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t183.substr(1);
			} else {
				this.stk[this.ptr++]=t183;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t184,t183);
		if (t185.call(this)==-1) break;
	}
	this.stk[this.ptr++]=28;
	this.stk[this.ptr++]=29;
	this.stk[this.ptr++]=280;
	this.stk[this.ptr++]=281;
	this.stk[this.ptr++]=311;
	this.stk[this.ptr++]=457;
	this.stk[this.ptr++]=488;
	this.stk[this.ptr++]=500;
	this.stk[this.ptr++]=530;
	this.stk[this.ptr++]=670;
	this.stk[this.ptr++]=700;
	this.stk[this.ptr++]=677;
	this.stk[this.ptr++]=707;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	var t=this.dstk.get("renmaximatrix");
	this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixs";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
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
	var t=this.dstk.get("renmaximatrix");
	this.stk[this.ptr++]=t;
	var t186=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t186.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("maxicode");
// END OF maxicode

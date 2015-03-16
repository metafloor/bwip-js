// file: bwipp/issn.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-02-18
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2015 Terry Burton
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.
// BEGIN issn
if (!BWIPJS.bwipp["raiseerror"]) BWIPJS.load("bwipp/raiseerror.js");
if (!BWIPJS.bwipp["renlinear"]) BWIPJS.load("bwipp/renlinear.js");
if (!BWIPJS.bwipp["ean13"]) BWIPJS.load("bwipp/ean13.js");
BWIPJS.bwipp["issn"]=function() {
	this.dict["raiseerror"]=BWIPJS.bwipp["raiseerror"];
	this.dict["renlinear"]=BWIPJS.bwipp["renlinear"];
	this.dict["ean13"]=BWIPJS.bwipp["ean13"];
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
		if (t===undefined) throw new Error("dict: options: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f3;
		var t3=this.stk[--this.ptr];
		while (true) {
			if (t3.call(this)==-1) break;
		}
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		this.stk[this.ptr++]="issntextxoffset"; //ident
		var t=this.dstk.get("issntextxoffset");
		if (t===undefined) throw new Error("dict: issntextxoffset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		this.stk[this.ptr++]="issntextyoffset"; //ident
		var t=this.dstk.get("issntextyoffset");
		if (t===undefined) throw new Error("dict: issntextyoffset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f8(){
		this.stk[this.ptr++]="issntxt"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="seqvar"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f9(){
		this.ptr--;
		this.stk[this.ptr++]="seqvar"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f10(){
		this.stk[this.ptr++]="seqvar"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="addon"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f11(){
		this.ptr--;
		this.stk[this.ptr++]="addon"; //ident
		var t=this.dstk.get("seqvar");
		if (t===undefined) throw new Error("dict: seqvar: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seqvar"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("00");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f12(){
		this.stk[this.ptr++]="bwipp.issnBadLength"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must be 8 or 9 characters including dash");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f13(){
		this.stk[this.ptr++]="bwipp.issnBadFormat"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must have the format XXXX-XXXX");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f14(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f13;
		var t15=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t15.call(this)==-1) return -1;
		}
	}
	function $f15(){
		this.stk[this.ptr++]="bwipp.issnBadFormat"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must have the format XXXX-XXXX");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f16(){
		this.stk[this.ptr++]="bwipp.issnBadFormat"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must have the format XXXX-XXXX");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f17(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f16;
		var t20=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t20.call(this)==-1) return -1;
		}
	}
	function $f18(){
		this.stk[this.ptr++]="bwipp.issnBadFormat"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must have the format XXXX-XXXX");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f19(){
		var t=this.dstk.get("issntxt");
		if (t===undefined) throw new Error("dict: issntxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=88;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f18;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
	}
	function $f20(){
		this.stk[this.ptr++]="bwipp.issnBadSequenceVariantLength"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("Sequence variant for ISSN must be 2 digits");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f21(){
		this.stk[this.ptr++]="bwipp.issnSequenceVariantBadCharacter"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("Sequence variant for ISSN must contain only digits");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f22(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f21;
		var t27=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t27.call(this)==-1) return -1;
		}
	}
	function $f23(){
		this.stk[this.ptr++]="bwipp.issnBadAddOnLength"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("Add-on for ISSN must be 2 or 5 digits");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f24(){
		this.stk[this.ptr++]="checksum"; //ident
		var t=this.dstk.get("checksum");
		if (t===undefined) throw new Error("dict: checksum: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issnchar");
		if (t===undefined) throw new Error("dict: issnchar: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		var t=this.dstk.get("n");
		if (t===undefined) throw new Error("dict: n: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f25(){
		var t=this.dstk.get("issn");
		if (t===undefined) throw new Error("dict: issn: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("n");
		if (t===undefined) throw new Error("dict: n: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issnchar");
		if (t===undefined) throw new Error("dict: issnchar: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		var t=this.dstk.get("n");
		if (t===undefined) throw new Error("dict: n: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f24;
		var t32=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t32.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="n"; //ident
		var t=this.dstk.get("n");
		if (t===undefined) throw new Error("dict: n: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f26(){
		return -1;
	}
	function $f27(){
		this.stk[this.ptr++]="issnchar"; //ident
		var t=this.dstk.get("issntxt");
		if (t===undefined) throw new Error("dict: issntxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("issnchar");
		if (t===undefined) throw new Error("dict: issnchar: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=-3;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f25;
		var t33=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t33.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntxt");
		if (t===undefined) throw new Error("dict: issntxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f26;
		var t34=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t34.call(this)==-1) return -1;
		}
	}
	function $f28(){
		this.ptr--;
		this.stk[this.ptr++]=88;
	}
	function $f29(){
		this.stk[this.ptr++]="bwipp.issnBadCheckDigit"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("Incorrect ISSN check digit provided");
		var t=this.dstk.get("raiseerror");
		if (t===undefined) throw new Error("//raiseerror: undefined");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f30(){
		var t=this.dstk.get("issntxt");
		if (t===undefined) throw new Error("dict: issntxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("checksum");
		if (t===undefined) throw new Error("dict: checksum: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f29;
		var t37=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t37.call(this)==-1) return -1;
		}
	}
	function $f31(){
		this.stk[this.ptr++]=12;
		var t=this.dstk.get("addon");
		if (t===undefined) throw new Error("dict: addon: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr++]=BWIPJS.psstring(" ");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=13;
		var t=this.dstk.get("addon");
		if (t===undefined) throw new Error("dict: addon: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="barcode"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f32(){
		this.stk[this.ptr++]="issntextxoffset"; //ident
		this.stk[this.ptr++]=10;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f33(){
		this.stk[this.ptr++]="issntextyoffset"; //ident
		var t=this.dstk.get("height");
		if (t===undefined) throw new Error("dict: height: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f34(){
		this.stk[this.ptr++]="txt"; //ident
		var t=this.dstk.get("args");
		if (t===undefined) throw new Error("dict: args: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="newtxt"; //ident
		var t=this.dstk.get("txt");
		if (t===undefined) throw new Error("dict: txt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("newtxt");
		if (t===undefined) throw new Error("dict: newtxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("txt");
		if (t===undefined) throw new Error("dict: txt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("newtxt");
		if (t===undefined) throw new Error("dict: newtxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("newtxt");
		if (t===undefined) throw new Error("dict: newtxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("issntxt");
		if (t===undefined) throw new Error("dict: issntxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntextxoffset");
		if (t===undefined) throw new Error("dict: issntextxoffset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntextyoffset");
		if (t===undefined) throw new Error("dict: issntextyoffset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntextfont");
		if (t===undefined) throw new Error("dict: issntextfont: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntextsize");
		if (t===undefined) throw new Error("dict: issntextsize: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		var t=this.dstk.get("args");
		if (t===undefined) throw new Error("dict: args: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		var t=this.dstk.get("newtxt");
		if (t===undefined) throw new Error("dict: newtxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f35(){
		var t=this.dstk.get("args");
		if (t===undefined) throw new Error("dict: args: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("issntxt");
		if (t===undefined) throw new Error("dict: issntxt: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntextxoffset");
		if (t===undefined) throw new Error("dict: issntextxoffset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntextyoffset");
		if (t===undefined) throw new Error("dict: issntextyoffset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntextfont");
		if (t===undefined) throw new Error("dict: issntextfont: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("issntextsize");
		if (t===undefined) throw new Error("dict: issntextsize: undefined");
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
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f36(){
		var t=this.dstk.get("issntextxoffset");
		if (t===undefined) throw new Error("dict: issntextxoffset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f32;
		var t40=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t40.call(this)==-1) return -1;
		}
		var t=this.dstk.get("issntextyoffset");
		if (t===undefined) throw new Error("dict: issntextyoffset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f33;
		var t41=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t41.call(this)==-1) return -1;
		}
		var t=this.dstk.get("args");
		if (t===undefined) throw new Error("dict: args: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f34;
		this.stk[this.ptr++]=$f35;
		var t42=this.stk[--this.ptr];
		var t43=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t43.call(this)==-1) return -1;
		} else {
			if (t42.call(this)==-1) return -1;
		}
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="options"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntxt"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dontdraw"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="includetext"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextfont"; //ident
	this.stk[this.ptr++]="Courier"; //ident
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextsize"; //ident
	this.stk[this.ptr++]=9;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextxoffset"; //ident
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextyoffset"; //ident
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height"; //ident
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="addongap"; //ident
	this.stk[this.ptr++]=12;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype"; //ident
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
	if (t===undefined) throw new Error("dict: options: undefined");
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
	this.stk[this.ptr++]="issntextfont"; //ident
	var t=this.dstk.get("issntextfont");
	if (t===undefined) throw new Error("dict: issntextfont: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextsize"; //ident
	var t=this.dstk.get("issntextsize");
	if (t===undefined) throw new Error("dict: issntextsize: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("issntextxoffset");
	if (t===undefined) throw new Error("dict: issntextxoffset: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f6;
	var t8=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t8.call(this)==-1) return -1;
	}
	var t=this.dstk.get("issntextyoffset");
	if (t===undefined) throw new Error("dict: issntextyoffset: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f7;
	var t9=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t9.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="height"; //ident
	var t=this.dstk.get("height");
	if (t===undefined) throw new Error("dict: height: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="addongap"; //ident
	var t=this.dstk.get("addongap");
	if (t===undefined) throw new Error("dict: addongap: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring(" ");
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
	this.stk[this.ptr++]=$f8;
	this.stk[this.ptr++]=$f9;
	var t10=this.stk[--this.ptr];
	var t11=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t11.call(this)==-1) return -1;
	} else {
		if (t10.call(this)==-1) return -1;
	}
	var t=this.dstk.get("seqvar");
	if (t===undefined) throw new Error("dict: seqvar: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring(" ");
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
	this.stk[this.ptr++]=$f10;
	this.stk[this.ptr++]=$f11;
	var t12=this.stk[--this.ptr];
	var t13=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t13.call(this)==-1) return -1;
	} else {
		if (t12.call(this)==-1) return -1;
	}
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=9;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f12;
	var t14=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t14.call(this)==-1) return -1;
	}
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f14;
	var t18=this.stk[--this.ptr];
	var t17=this.stk[--this.ptr];
	for (t16 in t17) {
		if (t17 instanceof BWIPJS.psstring || t17 instanceof BWIPJS.psarray) {
			if (t16.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t17.get(t16);
		} else {
			this.stk[this.ptr++]=t16;
			this.stk[this.ptr++]=t17[t16];
		}
		if (t18.call(this)==-1) break;
	}
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=BWIPJS.psstring("-");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f15;
	var t19=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t19.call(this)==-1) return -1;
	}
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f17;
	var t23=this.stk[--this.ptr];
	var t22=this.stk[--this.ptr];
	for (t21 in t22) {
		if (t22 instanceof BWIPJS.psstring || t22 instanceof BWIPJS.psarray) {
			if (t21.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t22.get(t21);
		} else {
			this.stk[this.ptr++]=t21;
			this.stk[this.ptr++]=t22[t21];
		}
		if (t23.call(this)==-1) break;
	}
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=9;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f19;
	var t25=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t25.call(this)==-1) return -1;
	}
	var t=this.dstk.get("seqvar");
	if (t===undefined) throw new Error("dict: seqvar: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=2;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f20;
	var t26=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t26.call(this)==-1) return -1;
	}
	var t=this.dstk.get("seqvar");
	if (t===undefined) throw new Error("dict: seqvar: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f22;
	var t30=this.stk[--this.ptr];
	var t29=this.stk[--this.ptr];
	for (t28 in t29) {
		if (t29 instanceof BWIPJS.psstring || t29 instanceof BWIPJS.psarray) {
			if (t28.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t29.get(t28);
		} else {
			this.stk[this.ptr++]=t28;
			this.stk[this.ptr++]=t29[t28];
		}
		if (t30.call(this)==-1) break;
	}
	var t=this.dstk.get("addon");
	if (t===undefined) throw new Error("dict: addon: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=0;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("addon");
	if (t===undefined) throw new Error("dict: addon: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=2;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("addon");
	if (t===undefined) throw new Error("dict: addon: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=5;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f23;
	var t31=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t31.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="issn"; //ident
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="n"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f27;
	var t35=this.stk[--this.ptr];
	while (true) {
		if (t35.call(this)==-1) break;
	}
	this.stk[this.ptr++]="checksum"; //ident
	this.stk[this.ptr++]=11;
	var t=this.dstk.get("checksum");
	if (t===undefined) throw new Error("dict: checksum: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum"; //ident
	var t=this.dstk.get("checksum");
	if (t===undefined) throw new Error("dict: checksum: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=58;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f28;
	var t36=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t36.call(this)==-1) return -1;
	}
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=9;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f30;
	var t38=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t38.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="pad"; //ident
	this.stk[this.ptr++]=14;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("pad");
	if (t===undefined) throw new Error("dict: pad: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=BWIPJS.psstring("ISSN ");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("pad");
	if (t===undefined) throw new Error("dict: pad: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=5;
	var t=this.dstk.get("issntxt");
	if (t===undefined) throw new Error("dict: issntxt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("pad");
	if (t===undefined) throw new Error("dict: pad: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=13;
	var t=this.dstk.get("checksum");
	if (t===undefined) throw new Error("dict: checksum: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	this.stk[this.ptr++]="issntxt"; //ident
	var t=this.dstk.get("pad");
	if (t===undefined) throw new Error("dict: pad: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcode"; //ident
	var t=this.dstk.get("issn");
	if (t===undefined) throw new Error("dict: issn: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcode"; //ident
	this.stk[this.ptr++]=12;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("barcode");
	if (t===undefined) throw new Error("dict: barcode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=BWIPJS.psstring("977");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("barcode");
	if (t===undefined) throw new Error("dict: barcode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=3;
	var t=this.dstk.get("issn");
	if (t===undefined) throw new Error("dict: issn: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("barcode");
	if (t===undefined) throw new Error("dict: barcode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=10;
	var t=this.dstk.get("seqvar");
	if (t===undefined) throw new Error("dict: seqvar: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("addon");
	if (t===undefined) throw new Error("dict: addon: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f31;
	var t39=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t39.call(this)==-1) return -1;
	}
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("dontdraw");
	this.stk[this.ptr++]=true;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("addongap");
	var t=this.dstk.get("addongap");
	if (t===undefined) throw new Error("dict: addongap: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	this.stk[this.ptr++]="args"; //ident
	var t=this.dstk.get("barcode");
	if (t===undefined) throw new Error("dict: barcode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ean13");
	if (t===undefined) throw new Error("//ean13: undefined");
	this.stk[this.ptr++]=t;
	var t=this.stk[--this.ptr];
	if (t instanceof Function) t.call(this); else this.eval(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("includetext");
	if (t===undefined) throw new Error("dict: includetext: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f36;
	var t44=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t44.call(this)==-1) return -1;
	}
	var t=this.dstk.get("args");
	if (t===undefined) throw new Error("dict: args: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("opt");
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	var t=this.dstk.get("args");
	if (t===undefined) throw new Error("dict: args: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("dontdraw");
	if (t===undefined) throw new Error("dict: dontdraw: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
	else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
	var t=this.dstk.get("renlinear");
	if (t===undefined) throw new Error("//renlinear: undefined");
	this.stk[this.ptr++]=t;
	var t45=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t45.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
// END OF issn

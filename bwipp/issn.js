// file: bwipp/issn.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN issn
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("issn", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("issn", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
if (!BWIPJS.bwipp["ean13"] && BWIPJS.increfs("issn", "ean13")) {
	BWIPJS.load("bwipp/ean13.js");
}
BWIPJS.bwipp["issn"]=function() {
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
		this.stk[this.ptr++]="issntextxoffset";
		this.xget("issntextxoffset");
		this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		this.stk[this.ptr++]="issntextyoffset";
		this.xget("issntextyoffset");
		this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f8(){
		this.stk[this.ptr++]="issntxt";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="seqvar";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f9(){
		this.ptr--;
		this.stk[this.ptr++]="seqvar";
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f10(){
		this.stk[this.ptr++]="seqvar";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="addon";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f11(){
		this.ptr--;
		this.stk[this.ptr++]="addon";
		this.xget("seqvar");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seqvar";
		this.stk[this.ptr++]=BWIPJS.psstring("00");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f12(){
		this.stk[this.ptr++]="bwipp.issnBadLength";
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must be 8 or 9 characters including dash");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f13(){
		this.stk[this.ptr++]="bwipp.issnBadFormat";
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must have the format XXXX-XXXX");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f14(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.or();
		this.stk[this.ptr++]=$f13;
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
		}
	}
	function $f15(){
		this.stk[this.ptr++]="bwipp.issnBadFormat";
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must have the format XXXX-XXXX");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f16(){
		this.stk[this.ptr++]="bwipp.issnBadFormat";
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must have the format XXXX-XXXX");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f17(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.or();
		this.stk[this.ptr++]=$f16;
		var t16=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t16.call(this)==-1) return -1;
		}
	}
	function $f18(){
		this.stk[this.ptr++]="bwipp.issnBadFormat";
		this.stk[this.ptr++]=BWIPJS.psstring("ISSN must have the format XXXX-XXXX");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f19(){
		this.xget("issntxt");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.or();
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=88;
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f18;
		var t18=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t18.call(this)==-1) return -1;
		}
	}
	function $f20(){
		this.stk[this.ptr++]="bwipp.issnBadSequenceVariantLength";
		this.stk[this.ptr++]=BWIPJS.psstring("Sequence variant for ISSN must be 2 digits");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f21(){
		this.stk[this.ptr++]="bwipp.issnSequenceVariantBadCharacter";
		this.stk[this.ptr++]=BWIPJS.psstring("Sequence variant for ISSN must contain only digits");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f22(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.or();
		this.stk[this.ptr++]=$f21;
		var t21=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t21.call(this)==-1) return -1;
		}
	}
	function $f23(){
		this.stk[this.ptr++]="bwipp.issnBadAddOnLength";
		this.stk[this.ptr++]=BWIPJS.psstring("Add-on for ISSN must be 2 or 5 digits");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f24(){
		this.stk[this.ptr++]="checksum";
		this.xget("checksum");
		this.xget("issnchar");
		this.stk[this.ptr++]=8;
		this.xget("n");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f25(){
		this.xget("issn");
		this.xget("n");
		this.xget("issnchar");
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("n");
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f24;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="n";
		this.xget("n");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f26(){
		return -1;
	}
	function $f27(){
		this.stk[this.ptr++]="issnchar";
		this.xget("issntxt");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("issnchar");
		this.stk[this.ptr++]=-3;
		this.ne();
		this.stk[this.ptr++]=$f25;
		var t25=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t25.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("i");
		this.xget("issntxt");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.stk[this.ptr++]=$f26;
		var t26=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t26.call(this)==-1) return -1;
		}
	}
	function $f28(){
		this.ptr--;
		this.stk[this.ptr++]=88;
	}
	function $f29(){
		this.stk[this.ptr++]="bwipp.issnBadCheckDigit";
		this.stk[this.ptr++]=BWIPJS.psstring("Incorrect ISSN check digit provided");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f30(){
		this.xget("issntxt");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("checksum");
		this.ne();
		this.stk[this.ptr++]=$f29;
		var t29=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t29.call(this)==-1) return -1;
		}
	}
	function $f31(){
		this.stk[this.ptr++]=12;
		this.xget("addon");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.xget("barcode");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr++]=BWIPJS.psstring(" ");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=13;
		this.xget("addon");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="barcode";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f32(){
		this.stk[this.ptr++]="issntextxoffset";
		this.stk[this.ptr++]=10;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f33(){
		this.stk[this.ptr++]="issntextyoffset";
		this.xget("height");
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f34(){
		this.stk[this.ptr++]="txt";
		this.xget("args");
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="newtxt";
		this.xget("txt");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("newtxt");
		this.stk[this.ptr++]=0;
		this.xget("txt");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("newtxt");
		this.xget("newtxt");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=Infinity;
		this.xget("issntxt");
		this.xget("issntextxoffset");
		this.xget("issntextyoffset");
		this.xget("issntextfont");
		this.xget("issntextsize");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("args");
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		this.xget("newtxt");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f35(){
		this.xget("args");
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.xget("issntxt");
		this.xget("issntextxoffset");
		this.xget("issntextyoffset");
		this.xget("issntextfont");
		this.xget("issntextsize");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f36(){
		this.xget("issntextxoffset");
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		this.eq();
		this.stk[this.ptr++]=$f32;
		var t32=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t32.call(this)==-1) return -1;
		}
		this.xget("issntextyoffset");
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		this.eq();
		this.stk[this.ptr++]=$f33;
		var t33=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t33.call(this)==-1) return -1;
		}
		this.xget("args");
		this.stk[this.ptr++]=BWIPJS.psstring("txt");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f34;
		this.stk[this.ptr++]=$f35;
		var t34=this.stk[--this.ptr];
		var t35=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t35.call(this)==-1) return -1;
		} else {
			if (t34.call(this)==-1) return -1;
		}
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="options";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntxt";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dontdraw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="includetext";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextfont";
	this.stk[this.ptr++]="OCR-A";
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextsize";
	this.stk[this.ptr++]=8.5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextxoffset";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextyoffset";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="addongap";
	this.stk[this.ptr++]=12;
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
	this.stk[this.ptr++]="issntextfont";
	this.xget("issntextfont");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="issntextsize";
	this.xget("issntextsize");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("issntextxoffset");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.ne();
	this.stk[this.ptr++]=$f6;
	var t6=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t6.call(this)==-1) return -1;
	}
	this.xget("issntextyoffset");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.ne();
	this.stk[this.ptr++]=$f7;
	var t7=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t7.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="height";
	this.xget("height");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="addongap";
	this.xget("addongap");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("issntxt");
	this.stk[this.ptr++]=BWIPJS.psstring(" ");
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
	this.stk[this.ptr++]=$f8;
	this.stk[this.ptr++]=$f9;
	var t8=this.stk[--this.ptr];
	var t9=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t9.call(this)==-1) return -1;
	} else {
		if (t8.call(this)==-1) return -1;
	}
	this.xget("seqvar");
	this.stk[this.ptr++]=BWIPJS.psstring(" ");
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
	this.stk[this.ptr++]=$f10;
	this.stk[this.ptr++]=$f11;
	var t10=this.stk[--this.ptr];
	var t11=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t11.call(this)==-1) return -1;
	} else {
		if (t10.call(this)==-1) return -1;
	}
	this.xget("issntxt");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	this.ne();
	this.xget("issntxt");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=9;
	this.ne();
	this.and();
	this.stk[this.ptr++]=$f12;
	var t12=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t12.call(this)==-1) return -1;
	}
	this.xget("issntxt");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f14;
	var t14=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t14);
	this.xget("issntxt");
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=BWIPJS.psstring("-");
	this.ne();
	this.stk[this.ptr++]=$f15;
	var t15=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t15.call(this)==-1) return -1;
	}
	this.xget("issntxt");
	this.stk[this.ptr++]=5;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f17;
	var t17=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t17);
	this.xget("issntxt");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=9;
	this.eq();
	this.stk[this.ptr++]=$f19;
	var t19=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t19.call(this)==-1) return -1;
	}
	this.xget("seqvar");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=2;
	this.ne();
	this.stk[this.ptr++]=$f20;
	var t20=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t20.call(this)==-1) return -1;
	}
	this.xget("seqvar");
	this.stk[this.ptr++]=$f22;
	var t22=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t22);
	this.xget("addon");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=0;
	this.ne();
	this.xget("addon");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=2;
	this.ne();
	this.and();
	this.xget("addon");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=5;
	this.ne();
	this.and();
	this.stk[this.ptr++]=$f23;
	var t23=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t23.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="issn";
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="n";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f27;
	var t27=this.stk[--this.ptr];
	while (t27.call(this)!=-1);
	this.stk[this.ptr++]="checksum";
	this.stk[this.ptr++]=11;
	this.xget("checksum");
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum";
	this.xget("checksum");
	this.stk[this.ptr++]=48;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=58;
	this.eq();
	this.stk[this.ptr++]=$f28;
	var t28=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t28.call(this)==-1) return -1;
	}
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("issntxt");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=9;
	this.eq();
	this.stk[this.ptr++]=$f30;
	var t30=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t30.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="pad";
	this.stk[this.ptr++]=14;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("pad");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=BWIPJS.psstring("ISSN ");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.xget("pad");
	this.stk[this.ptr++]=5;
	this.xget("issntxt");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.xget("pad");
	this.stk[this.ptr++]=13;
	this.xget("checksum");
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.stk[this.ptr++]="issntxt";
	this.xget("pad");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcode";
	this.xget("issn");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcode";
	this.stk[this.ptr++]=12;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("barcode");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=BWIPJS.psstring("977");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.xget("barcode");
	this.stk[this.ptr++]=3;
	this.xget("issn");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.xget("barcode");
	this.stk[this.ptr++]=10;
	this.xget("seqvar");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.xget("addon");
	this.stk[this.ptr++]=BWIPJS.psstring("");
	this.ne();
	this.stk[this.ptr++]=$f31;
	var t31=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t31.call(this)==-1) return -1;
	}
	this.xget("options");
	this.stk[this.ptr++]=BWIPJS.psstring("dontdraw");
	this.stk[this.ptr++]=true;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.xget("options");
	this.stk[this.ptr++]=BWIPJS.psstring("addongap");
	this.xget("addongap");
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.stk[this.ptr++]="args";
	this.xget("barcode");
	this.xget("options");
	this.stk[this.ptr++]=this.get("ean13");
	t=this.stk[--this.ptr];
	if (t instanceof Function) t.call(this); else this.eval(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("includetext");
	this.stk[this.ptr++]=$f36;
	var t36=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t36.call(this)==-1) return -1;
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
	var t37=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t37.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("issn");
// END OF issn

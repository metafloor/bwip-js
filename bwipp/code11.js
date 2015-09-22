// file: bwipp/code11.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-08-10
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN code11
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("code11", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("code11", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
BWIPJS.bwipp["code11"]=function() {
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
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f7(){
		this.stk[this.ptr++]="bwipp.code11badCharacter";
		this.stk[this.ptr++]=BWIPJS.psstring("Code 11 must contain only digits and dashes");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f8(){
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		this.stk[this.ptr++]=$f7;
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
		}
	}
	function $f9(){
		this.stk[this.ptr++]="bwipp.code11badLength";
		this.stk[this.ptr++]=BWIPJS.psstring("Code 11 cannot be 11 characters using check digits");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f10(){
		this.stk[this.ptr++]=1;
	}
	function $f11(){
		this.stk[this.ptr++]=2;
	}
	function $f12(){
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=11;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f9;
		var t19=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t19.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="barlen";
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f10;
		this.stk[this.ptr++]=$f11;
		var t20=this.stk[--this.ptr];
		var t21=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t21.call(this)==-1) return -1;
		} else {
			if (t20.call(this)==-1) return -1;
		}
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f13(){
		this.stk[this.ptr++]=2;
	}
	function $f14(){
		this.stk[this.ptr++]=1;
	}
	function $f15(){
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f13;
		this.stk[this.ptr++]=$f14;
		var t23=this.stk[--this.ptr];
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		} else {
			if (t23.call(this)==-1) return -1;
		}
	}
	function $f16(){
		this.stk[this.ptr++]=0;
	}
	function $f17(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="indx";
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="checksum1";
		var t=this.dstk.get("checksum1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("indx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="checksum2";
		var t=this.dstk.get("checksum2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("indx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f18(){
		this.stk[this.ptr++]="bwipp.code11badCheckDigit";
		this.stk[this.ptr++]=BWIPJS.psstring("Incorrect Code 11 check digit provided");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f19(){
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f18;
		var t32=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t32.call(this)==-1) return -1;
		}
	}
	function $f20(){
		this.stk[this.ptr++]="bwipp.code11badCheckDigits";
		this.stk[this.ptr++]=BWIPJS.psstring("Incorrect Code 11 check digits provided");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f21(){
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f20;
		var t33=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t33.call(this)==-1) return -1;
		}
	}
	function $f22(){
		var t=this.dstk.get("numchecks");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f19;
		this.stk[this.ptr++]=$f21;
		var t34=this.stk[--this.ptr];
		var t35=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t35.call(this)==-1) return -1;
		} else {
			if (t34.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="barcode";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="includecheck";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f23(){
		this.stk[this.ptr++]="xpos";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f24(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="indx";
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="enc";
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("indx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
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
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=$f23;
		var t41=this.stk[--this.ptr];
		var t39=this.stk[--this.ptr];
		var t38=this.stk[--this.ptr];
		var t37=this.stk[--this.ptr];
		for (var t40=t37; t38<0 ? t40>=t39 : t40<=t39; t40+=t38) {
			this.stk[this.ptr++]=t40;
			if (t41.call(this)==-1) break;
		}
	}
	function $f25(){
		this.stk[this.ptr++]="xpos";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("enc");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f26(){
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="enc";
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=$f25;
		var t51=this.stk[--this.ptr];
		var t49=this.stk[--this.ptr];
		var t48=this.stk[--this.ptr];
		var t47=this.stk[--this.ptr];
		for (var t50=t47; t48<0 ? t50>=t49 : t50<=t49; t50+=t48) {
			this.stk[this.ptr++]=t50;
			if (t51.call(this)==-1) break;
		}
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f27(){
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("");
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("");
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f28(){
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum2");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("includecheckintext");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f26;
		this.stk[this.ptr++]=$f27;
		var t52=this.stk[--this.ptr];
		var t53=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t53.call(this)==-1) return -1;
		} else {
			if (t52.call(this)==-1) return -1;
		}
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=18;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f29(){
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
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
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("");
		var t=this.dstk.get("xpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f31(){
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum1");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("includecheckintext");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f29;
		this.stk[this.ptr++]=$f30;
		var t54=this.stk[--this.ptr];
		var t55=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t55.call(this)==-1) return -1;
		} else {
			if (t54.call(this)==-1) return -1;
		}
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f32(){
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f28;
		this.stk[this.ptr++]=$f31;
		var t56=this.stk[--this.ptr];
		var t57=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t57.call(this)==-1) return -1;
		} else {
			if (t56.call(this)==-1) return -1;
		}
	}
	function $f33(){
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f34(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f35(){
		var t=this.dstk.get("height");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f36(){
		this.stk[this.ptr++]=0;
	}
	function $f37(){
		this.stk[this.ptr++]="txt";
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
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
	this.stk[this.ptr++]="includecheck";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="validatecheck";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="includetext";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="includecheckintext";
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
	this.stk[this.ptr++]=1;
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
	this.stk[this.ptr++]="textfont";
	var t=this.dstk.get("textfont");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textsize";
	var t=this.dstk.get("textsize");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textyoffset";
	var t=this.dstk.get("textyoffset");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	var t=this.dstk.get("height");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encs";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("111131"),BWIPJS.psstring("311131"),BWIPJS.psstring("131131"),BWIPJS.psstring("331111"),BWIPJS.psstring("113131"),BWIPJS.psstring("313111"),BWIPJS.psstring("133111"),BWIPJS.psstring("111331"),BWIPJS.psstring("311311"),BWIPJS.psstring("311111"),BWIPJS.psstring("113111"),BWIPJS.psstring("113311")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barchars";
	this.stk[this.ptr++]=BWIPJS.psstring("0123456789-");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=10;
	this.stk[this.ptr++]=$f6;
	var t12=this.stk[--this.ptr];
	var t10=this.stk[--this.ptr];
	var t9=this.stk[--this.ptr];
	var t8=this.stk[--this.ptr];
	for (var t11=t8; t9<0 ? t11>=t10 : t11<=t10; t11+=t9) {
		this.stk[this.ptr++]=t11;
		if (t12.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f8;
	var t18=this.stk[--this.ptr];
	var t16=this.stk[--this.ptr];
	var t15=this.stk[--this.ptr];
	var t14=this.stk[--this.ptr];
	for (var t17=t14; t15<0 ? t17>=t16 : t17<=t16; t17+=t15) {
		this.stk[this.ptr++]=t17;
		if (t18.call(this)==-1) break;
	}
	this.stk[this.ptr++]="barlen";
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("validatecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f12;
	var t22=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t22.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="numchecks";
	var t=this.dstk.get("includecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("validatecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f15;
	this.stk[this.ptr++]=$f16;
	var t25=this.stk[--this.ptr];
	var t26=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t26.call(this)==-1) return -1;
	} else {
		if (t25.call(this)==-1) return -1;
	}
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum1";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum2";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("barlen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f17;
	var t31=this.stk[--this.ptr];
	var t29=this.stk[--this.ptr];
	var t28=this.stk[--this.ptr];
	var t27=this.stk[--this.ptr];
	for (var t30=t27; t28<0 ? t30>=t29 : t30<=t29; t30+=t28) {
		this.stk[this.ptr++]=t30;
		if (t31.call(this)==-1) break;
	}
	this.stk[this.ptr++]="checksum1";
	var t=this.dstk.get("checksum1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum2";
	var t=this.dstk.get("checksum2");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("checksum1");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("validatecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f22;
	var t36=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t36.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="sbs";
	var t=this.dstk.get("barlen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("numchecks");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=6;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=12;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="txt";
	var t=this.dstk.get("barlen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("numchecks");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("sbs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("encs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr++]="xpos";
	this.stk[this.ptr++]=8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("barlen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f24;
	var t46=this.stk[--this.ptr];
	var t44=this.stk[--this.ptr];
	var t43=this.stk[--this.ptr];
	var t42=this.stk[--this.ptr];
	for (var t45=t42; t43<0 ? t45>=t44 : t45<=t44; t45+=t43) {
		this.stk[this.ptr++]=t45;
		if (t46.call(this)==-1) break;
	}
	var t=this.dstk.get("includecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f32;
	this.stk[this.ptr++]=$f33;
	var t58=this.stk[--this.ptr];
	var t59=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t59.call(this)==-1) return -1;
	} else {
		if (t58.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	var t=this.dstk.get("renlinear");
	this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="sbs";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sbs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f34;
	var t62=this.stk[--this.ptr];//forall
	var t61=this.stk[--this.ptr];
	for (var t60 in t61) {
		if (t61 instanceof BWIPJS.psstring || t61 instanceof BWIPJS.psarray) {
			if (t60.charCodeAt(0) > 57) continue;
		} else {
			if (t60.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t60.substr(1);
			} else {
				this.stk[this.ptr++]=t60;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t61,t60);
		if (t62.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
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
	this.stk[this.ptr++]=$f35;
	var t65=this.stk[--this.ptr];
	var t63=this.stk[--this.ptr];
	for (var t64=0; t64<t63; t64++) {
		if (t65.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
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
	this.stk[this.ptr++]=$f36;
	var t68=this.stk[--this.ptr];
	var t66=this.stk[--this.ptr];
	for (var t67=0; t67<t66; t67++) {
		if (t68.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	var t=this.dstk.get("includetext");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f37;
	var t69=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t69.call(this)==-1) return -1;
	}
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
	var t=this.dstk.get("renlinear");
	this.stk[this.ptr++]=t;
	var t70=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t70.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("code11");
// END OF code11

// file: bwipp/gs1-cc.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN gs1-cc
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("gs1-cc", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("gs1-cc", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
if (!BWIPJS.bwipp["pdf417"] && BWIPJS.increfs("gs1-cc", "pdf417")) {
	BWIPJS.load("bwipp/pdf417.js");
}
if (!BWIPJS.bwipp["micropdf417"] && BWIPJS.increfs("gs1-cc", "micropdf417")) {
	BWIPJS.load("bwipp/micropdf417.js");
}
BWIPJS.bwipp["gs1-cc"]=function() {
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
		this.stk[this.ptr++]=4;
	}
	function $f7(){
		this.xget("linwidth");
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=17;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	}
	function $f8(){
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="ean13";
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]="upca";
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]="ean8";
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]="upce";
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]="gs1-128";
		this.xget("ccversion");
		this.stk[this.ptr++]=BWIPJS.psstring("c");
		this.ne();
		this.stk[this.ptr++]=$f6;
		this.stk[this.ptr++]=$f7;
		var t6=this.stk[--this.ptr];
		var t7=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t7.call(this)==-1) return -1;
		} else {
			if (t6.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="databaromni";
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]="databarstacked";
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]="databarstackedomni";
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]="databartruncated";
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]="databarlimited";
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]="databarexpanded";
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]="databarexpandedstacked";
		this.stk[this.ptr++]=4;
		t = {};
		for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
			BWIPJS.set(t,this.stk[i-1],this.stk[i]);
		}
		this.ptr = i;
		this.stk[this.ptr++]=t;
		this.xget("lintype");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]="cccolumns";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f9(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("out");
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
		this.xget("out");
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
	function $f10(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("out");
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
		this.xget("out");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		return -1;
	}
	function $f11(){
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
		this.stk[this.ptr++]=$f9;
		this.stk[this.ptr++]=$f10;
		var t9=this.stk[--this.ptr];
		var t10=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t10.call(this)==-1) return -1;
		} else {
			if (t9.call(this)==-1) return -1;
		}
	}
	function $f12(){
		this.stk[this.ptr++]="in";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="out";
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("in");
		this.stk[this.ptr++]=$f11;
		var t11=this.stk[--this.ptr];
		while (t11.call(this)!=-1);
	}
	function $f13(){
		return -1;
	}
	function $f14(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t14=this.stk[--this.ptr];
		var t13=this.stk[--this.ptr];
		if (t14 < 0) t=this.stk.splice(this.ptr-t13, -t14);
		else t=this.stk.splice(this.ptr-t13, t13-t14);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
	}
	function $f15(){
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t16=this.stk[--this.ptr];
		var t15=this.stk[--this.ptr];
		if (t16 < 0) t=this.stk.splice(this.ptr-t15, -t16);
		else t=this.stk.splice(this.ptr-t15, t15-t16);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
	}
	function $f16(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.eq();
		this.stk[this.ptr++]=$f13;
		var t12=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t12.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=BWIPJS.psstring(")");
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
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("(");
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
		this.stk[this.ptr++]=$f14;
		this.stk[this.ptr++]=$f15;
		var t17=this.stk[--this.ptr];
		var t18=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t18.call(this)==-1) return -1;
		} else {
			if (t17.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.xget("ais");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]="ais";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("aival");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t20=this.stk[--this.ptr];
		var t19=this.stk[--this.ptr];
		if (t20 < 0) t=this.stk.splice(this.ptr-t19, -t20);
		else t=this.stk.splice(this.ptr-t19, t19-t20);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.xget("expand");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f17(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=65;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=90;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
	}
	function $f18(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
	}
	function $f19(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
	}
	function $f20(){
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=BWIPJS.psstring("10");
		return -1;
	}
	function $f21(){
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("10");
		this.eq();
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		this.eq();
		this.or();
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("17");
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f20;
		var t22=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t22.call(this)==-1) return -1;
		}
	}
	function $f22(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		return -1;
	}
	function $f23(){
		this.xget("v");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isupper");
		this.stk[this.ptr++]=$f22;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
	}
	function $f24(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		return -1;
	}
	function $f25(){
		this.xget("v");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isnum1");
		this.xget("v");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isupper");
		this.and();
		this.stk[this.ptr++]=$f24;
		var t26=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t26.call(this)==-1) return -1;
		}
	}
	function $f26(){
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		return -1;
	}
	function $f27(){
		this.xget("v");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isnum1");
		this.xget("v");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isnum0");
		this.and();
		this.xget("v");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isupper");
		this.and();
		this.stk[this.ptr++]=$f26;
		var t28=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t28.call(this)==-1) return -1;
		}
	}
	function $f28(){
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		return -1;
	}
	function $f29(){
		this.xget("v");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isnum1");
		this.xget("v");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isnum0");
		this.and();
		this.xget("v");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isnum0");
		this.and();
		this.xget("v");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("isupper");
		this.and();
		this.stk[this.ptr++]=$f28;
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
		}
	}
	function $f30(){
		this.stk[this.ptr++]="v";
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("90");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("v");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f23;
		var t25=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t25.call(this)==-1) return -1;
		}
		this.xget("v");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f25;
		var t27=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t27.call(this)==-1) return -1;
		}
		this.xget("v");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f27;
		var t29=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t29.call(this)==-1) return -1;
		}
		this.xget("v");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f29;
		var t31=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t31.call(this)==-1) return -1;
		}
	}
	function $f31(){
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("90");
		this.eq();
		this.stk[this.ptr++]=$f30;
		var t32=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t32.call(this)==-1) return -1;
		}
	}
	function $f32(){
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f21;
		var t23=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t23.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f31;
		var t33=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t33.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=BWIPJS.psstring("0");
		return -1;
	}
	function $f33(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f34(){
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f33;
		var t39=this.stk[--this.ptr];
		var t37=this.stk[--this.ptr];
		var t36=this.stk[--this.ptr];
		var t35=this.stk[--this.ptr];
		for (var t38=t35; t36<0 ? t38>=t37 : t38<=t37; t38+=t36) {
			this.stk[this.ptr++]=t38;
			if (t39.call(this)==-1) break;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t41=this.stk[--this.ptr];
		var t40=this.stk[--this.ptr];
		if (t41 < 0) t=this.stk.splice(this.ptr-t40, -t41);
		else t=this.stk.splice(this.ptr-t40, t40-t41);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f35(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=65;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.xget("tobin");
	}
	function $f36(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.xget("tobin");
	}
	function $f37(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=94;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f38(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=94;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f39(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=BWIPJS.psstring("00");
		this.stk[this.ptr++]=2;
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
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t53=this.stk[--this.ptr];
		var t52=this.stk[--this.ptr];
		if (t53 < 0) t=this.stk.splice(this.ptr-t52, -t53);
		else t=this.stk.splice(this.ptr-t52, t52-t53);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=11;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=65;
		this.eq();
		this.stk[this.ptr++]=$f37;
		var t54=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t54.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=65;
		this.eq();
		this.stk[this.ptr++]=$f38;
		var t55=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t55.call(this)==-1) return -1;
		}
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("0000000");
		this.stk[this.ptr++]=7;
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
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t57=this.stk[--this.ptr];
		var t56=this.stk[--this.ptr];
		if (t57 < 0) t=this.stk.splice(this.ptr-t56, -t57);
		else t=this.stk.splice(this.ptr-t56, t56-t57);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=7;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f40(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=43;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.xget("tobin");
	}
	function $f41(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=33;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.xget("tobin");
	}
	function $f42(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=15;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.xget("tobin");
	}
	function $f43(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=43;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.xget("tobin");
	}
	function $f44(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.xget("tobin");
	}
	function $f45(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.xget("tobin");
	}
	function $f46(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=197;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.xget("tobin");
	}
	function $f47(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=187;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.xget("tobin");
	}
	function $f48(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f49(){
		this.stk[this.ptr++]=0;
	}
	function $f50(){
		this.stk[this.ptr++]=1;
	}
	function $f51(){
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=384;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=32;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("0000000000000000");
		this.stk[this.ptr++]=16;
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
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t104=this.stk[--this.ptr];
		var t103=this.stk[--this.ptr];
		if (t104 < 0) t=this.stk.splice(this.ptr-t103, -t104);
		else t=this.stk.splice(this.ptr-t103, t103-t104);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=16;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=16;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=-1;
		var t106=this.stk[--this.ptr];
		var t105=this.stk[--this.ptr];
		if (t106 < 0) t=this.stk.splice(this.ptr-t105, -t106);
		else t=this.stk.splice(this.ptr-t105, t105-t106);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=$f48;
		var t107=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t107);
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		this.eq();
		this.stk[this.ptr++]=$f49;
		this.stk[this.ptr++]=$f50;
		var t108=this.stk[--this.ptr];
		var t109=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t109.call(this)==-1) return -1;
		} else {
			if (t108.call(this)==-1) return -1;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]="cdf";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ais";
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f52(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f53(){
	}
	function $f54(){
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=Infinity;
		this.xget("gpf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("fnc1");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f55(){
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=Infinity;
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("10");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f53;
		var t112=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t112);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f54;
		var t113=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t113.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="ais";
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f56(){
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=Infinity;
		this.xget("fnc1");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f57(){
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("10");
		this.eq();
		this.stk[this.ptr++]=$f55;
		this.stk[this.ptr++]=$f56;
		var t114=this.stk[--this.ptr];
		var t115=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t115.call(this)==-1) return -1;
		} else {
			if (t114.call(this)==-1) return -1;
		}
	}
	function $f58(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f59(){
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		this.eq();
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("17");
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f51;
		this.stk[this.ptr++]=$f52;
		var t110=this.stk[--this.ptr];
		var t111=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t111.call(this)==-1) return -1;
		} else {
			if (t110.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f57;
		this.stk[this.ptr++]=$f58;
		var t116=this.stk[--this.ptr];
		var t117=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t117.call(this)==-1) return -1;
		} else {
			if (t116.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f60(){
		this.xget("ai90");
		this.xget("npre");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("ai90");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("npre");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f61(){
		this.stk[this.ptr++]=BWIPJS.psstring("");
	}
	function $f62(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f63(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=65;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=90;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f62;
		var t121=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t121.call(this)==-1) return -1;
		}
	}
	function $f64(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f65(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f64;
		var t123=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t123.call(this)==-1) return -1;
		}
	}
	function $f66(){
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
	}
	function $f67(){
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
	}
	function $f68(){
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f69(){
		this.stk[this.ptr++]=0;
	}
	function $f70(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
	}
	function $f71(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
	}
	function $f72(){
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f73(){
		this.stk[this.ptr++]=-1;
	}
	function $f74(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
	}
	function $f75(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
	}
	function $f76(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("ais1");
		this.stk[this.ptr++]=BWIPJS.psstring("21");
		this.eq();
		this.stk[this.ptr++]=$f74;
		this.stk[this.ptr++]=$f75;
		var t133=this.stk[--this.ptr];
		var t134=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t134.call(this)==-1) return -1;
		} else {
			if (t133.call(this)==-1) return -1;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f77(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f78(){
		this.xget("ai90");
		this.stk[this.ptr++]=0;
		this.xget("npre");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	}
	function $f79(){
		this.stk[this.ptr++]=0;
	}
	function $f80(){
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]="aval";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f81(){
		this.ptr--;
		this.stk[this.ptr++]="aval";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f82(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f83(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f84(){
		this.stk[this.ptr++]=BWIPJS.psstring("00000");
		this.stk[this.ptr++]=5;
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
		this.xget("nval");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=5;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f82;
		var t141=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t141);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]="nbits";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
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
		this.xget("aval");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=4;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f83;
		var t142=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t142);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]="abits";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("nbits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("abits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f85(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f86(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f87(){
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
		this.xget("nval");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=10;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f85;
		var t143=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t143);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]="nbits";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("00000");
		this.stk[this.ptr++]=5;
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
		this.xget("ai90");
		this.xget("npre");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=65;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=5;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f86;
		var t144=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t144);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]="abits";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("nbits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("abits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f88(){
	}
	function $f89(){
		this.xget("fnc1");
	}
	function $f90(){
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=Infinity;
		this.xget("ai90rem");
		this.stk[this.ptr++]=$f88;
		var t147=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t147);
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f89;
		var t148=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t148.call(this)==-1) return -1;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f91(){
		this.xget("alpha");
	}
	function $f92(){
		this.xget("alphanumeric");
	}
	function $f93(){
	}
	function $f94(){
		this.xget("fnc1");
	}
	function $f95(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f96(){
		this.xget("in");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("encs");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f95;
		var t153=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t153);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("out");
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
	}
	function $f97(){
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f98(){
		this.stk[this.ptr++]="encs";
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		this.eq();
		this.stk[this.ptr++]=$f91;
		this.stk[this.ptr++]=$f92;
		var t149=this.stk[--this.ptr];
		var t150=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t150.call(this)==-1) return -1;
		} else {
			if (t149.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="in";
		this.stk[this.ptr++]=Infinity;
		this.xget("ai90rem");
		this.stk[this.ptr++]=$f93;
		var t151=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t151);
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f94;
		var t152=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t152.call(this)==-1) return -1;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="out";
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f96;
		var t158=this.stk[--this.ptr];
		var t156=this.stk[--this.ptr];
		var t155=this.stk[--this.ptr];
		var t154=this.stk[--this.ptr];
		for (var t157=t154; t155<0 ? t157>=t156 : t157<=t156; t157+=t155) {
			this.stk[this.ptr++]=t157;
			if (t158.call(this)==-1) break;
		}
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("out");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		this.ne();
		this.or();
		this.stk[this.ptr++]=$f97;
		var t159=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t159.call(this)==-1) return -1;
		}
	}
	function $f99(){
	}
	function $f100(){
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=Infinity;
		this.xget("gpf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("fnc1");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f101(){
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=Infinity;
		this.xget("gpf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("aival");
		this.xget("ais1");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f99;
		var t162=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t162);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ais";
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f100;
		var t163=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t163.call(this)==-1) return -1;
		}
	}
	function $f102(){
		this.xget("ais1");
		this.stk[this.ptr++]=BWIPJS.psstring("21");
		this.eq();
		this.xget("ais1");
		this.stk[this.ptr++]=BWIPJS.psstring("8004");
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f101;
		var t164=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t164.call(this)==-1) return -1;
		}
	}
	function $f103(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=BWIPJS.psarray([1,1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ai90";
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("90");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("npre");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("ai90");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.ne();
		this.stk[this.ptr++]=$f60;
		this.stk[this.ptr++]=$f61;
		var t119=this.stk[--this.ptr];
		var t120=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t120.call(this)==-1) return -1;
		} else {
			if (t119.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="ai90rem";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nalpha";
		this.stk[this.ptr++]=0;
		this.xget("ai90rem");
		this.stk[this.ptr++]=$f63;
		var t122=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t122);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nnums";
		this.stk[this.ptr++]=0;
		this.xget("ai90rem");
		this.stk[this.ptr++]=$f65;
		var t124=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t124);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		this.xget("nalpha");
		this.xget("nnums");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f66;
		this.stk[this.ptr++]=$f67;
		var t125=this.stk[--this.ptr];
		var t126=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t126.call(this)==-1) return -1;
		} else {
			if (t125.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("nalpha");
		this.xget("nnums");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("ai90rem");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.ne();
		this.stk[this.ptr++]=$f68;
		var t127=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t127.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.eq();
		this.stk[this.ptr++]=$f69;
		var t128=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t128.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.eq();
		this.stk[this.ptr++]=$f70;
		var t129=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t129.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		this.eq();
		this.stk[this.ptr++]=$f71;
		var t130=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t130.call(this)==-1) return -1;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ais1";
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f72;
		this.stk[this.ptr++]=$f73;
		var t131=this.stk[--this.ptr];
		var t132=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t132.call(this)==-1) return -1;
		} else {
			if (t131.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ais1");
		this.stk[this.ptr++]=BWIPJS.psstring("21");
		this.eq();
		this.xget("ais1");
		this.stk[this.ptr++]=BWIPJS.psstring("8004");
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f76;
		this.stk[this.ptr++]=$f77;
		var t135=this.stk[--this.ptr];
		var t136=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t136.call(this)==-1) return -1;
		} else {
			if (t135.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="nval";
		this.xget("npre");
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f78;
		this.stk[this.ptr++]=$f79;
		var t137=this.stk[--this.ptr];
		var t138=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t138.call(this)==-1) return -1;
		} else {
			if (t137.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("BDHIJKLNPQRSTVXZ");
		this.xget("ai90");
		this.xget("npre");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
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
		this.stk[this.ptr++]=$f80;
		this.stk[this.ptr++]=$f81;
		var t139=this.stk[--this.ptr];
		var t140=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t140.call(this)==-1) return -1;
		} else {
			if (t139.call(this)==-1) return -1;
		}
		this.xget("nval");
		this.stk[this.ptr++]=31;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.xget("aval");
		this.stk[this.ptr++]=-1;
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f84;
		this.stk[this.ptr++]=$f87;
		var t145=this.stk[--this.ptr];
		var t146=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t146.call(this)==-1) return -1;
		} else {
			if (t145.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.eq();
		this.stk[this.ptr++]=$f90;
		this.stk[this.ptr++]=$f98;
		var t160=this.stk[--this.ptr];
		var t161=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t161.call(this)==-1) return -1;
		} else {
			if (t160.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="ais";
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f102;
		var t165=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t165.call(this)==-1) return -1;
		}
	}
	function $f104(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=BWIPJS.psarray([0]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f105(){
	}
	function $f106(){
		this.stk[this.ptr++]=BWIPJS.psstring("00");
		this.stk[this.ptr++]=2;
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
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=-1;
		var t174=this.stk[--this.ptr];
		var t173=this.stk[--this.ptr];
		if (t174 < 0) t=this.stk.splice(this.ptr-t173, -t174);
		else t=this.stk.splice(this.ptr-t173, t173-t174);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("aifixed");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t176=this.stk[--this.ptr];
		var t175=this.stk[--this.ptr];
		if (t176 < 0) t=this.stk.splice(this.ptr-t175, -t176);
		else t=this.stk.splice(this.ptr-t175, t175-t176);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f107(){
	}
	function $f108(){
	}
	function $f109(){
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("aifixed");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t189=this.stk[--this.ptr];
		var t188=this.stk[--this.ptr];
		if (t189 < 0) t=this.stk.splice(this.ptr-t188, -t189);
		else t=this.stk.splice(this.ptr-t188, t188-t189);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f110(){
	}
	function $f111(){
	}
	function $f112(){
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.xget("gpf");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("fnc1");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="gpf";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f113(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ai";
		this.xget("ais");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="val";
		this.xget("aival");
		this.xget("ai");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("ai");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("val");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.xget("gpf");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("ai");
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f110;
		var t191=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t191);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("ai");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("val");
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f111;
		var t192=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t192);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="gpf";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("i");
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.ne();
		this.xget("aifixed");
		this.xget("ai");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.and();
		this.stk[this.ptr++]=$f112;
		var t193=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t193.call(this)==-1) return -1;
		}
	}
	function $f114(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f115(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("used");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f114;
		var t199=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t199.call(this)==-1) return -1;
		}
		this.ptr--;
	}
	function $f116(){
		this.xget("used");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f117(){
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="a";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([167,138,118,108,88,78,59]);
		this.stk[this.ptr++]=BWIPJS.psarray([167,138,118,98,78]);
		this.stk[this.ptr++]=BWIPJS.psarray([197,167,138,108,78]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]="b";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([336,296,256,208,160,104,56]);
		this.stk[this.ptr++]=BWIPJS.psarray([768,648,536,416,304,208,152,112,72,32]);
		this.stk[this.ptr++]=BWIPJS.psarray([1184,1016,840,672,496,352,264,208,152,96,56]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		t = {};
		for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
			BWIPJS.set(t,this.stk[i-1],this.stk[i]);
		}
		this.ptr = i;
		this.stk[this.ptr++]=t;
		this.xget("ccversion");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("cccolumns");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]="bitcaps";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=-1;
		this.xget("bitcaps");
		this.stk[this.ptr++]=$f115;
		var t200=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t200);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=-1;
		this.ne();
		this.stk[this.ptr++]=$f116;
		var t201=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t201.call(this)==-1) return -1;
		}
	}
	function $f118(){
		this.stk[this.ptr++]=8;
	}
	function $f119(){
		this.stk[this.ptr++]=16;
	}
	function $f120(){
		this.stk[this.ptr++]=32;
	}
	function $f121(){
		this.stk[this.ptr++]=64;
	}
	function $f122(){
		this.stk[this.ptr++]="c";
		this.xget("c");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f123(){
		this.xget("tgt");
		this.xget("used");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f124(){
		this.stk[this.ptr++]=-1;
	}
	function $f125(){
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="c";
		this.stk[this.ptr++]=-1;
		t = {};
		for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
			BWIPJS.set(t,this.stk[i-1],this.stk[i]);
		}
		this.ptr = i;
		this.stk[this.ptr++]=t;
		this.xget("ccversion");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.ptr--;
		this.stk[this.ptr++]="m";
		this.xget("used");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=Math.ceil(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("m");
		this.stk[this.ptr++]=40;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f118;
		var t202=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t202.call(this)==-1) return -1;
		}
		this.xget("m");
		this.stk[this.ptr++]=41;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("m");
		this.stk[this.ptr++]=160;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f119;
		var t203=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t203.call(this)==-1) return -1;
		}
		this.xget("m");
		this.stk[this.ptr++]=161;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("m");
		this.stk[this.ptr++]=320;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f120;
		var t204=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t204.call(this)==-1) return -1;
		}
		this.xget("m");
		this.stk[this.ptr++]=321;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f121;
		var t205=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t205.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="eccws";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="m";
		this.xget("m");
		this.xget("eccws");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="c";
		this.xget("linwidth");
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=17;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("m");
		this.xget("c");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=90;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f122;
		var t206=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t206.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="r";
		this.xget("m");
		this.xget("c");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=Math.ceil(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="tgt";
		this.xget("c");
		this.xget("r");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("eccws");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("used");
		this.stk[this.ptr++]=8296;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f123;
		this.stk[this.ptr++]=$f124;
		var t207=this.stk[--this.ptr];
		var t208=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t208.call(this)==-1) return -1;
		} else {
			if (t207.call(this)==-1) return -1;
		}
	}
	function $f126(){
		this.stk[this.ptr++]="ccversion";
		this.stk[this.ptr++]=BWIPJS.psstring("b");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f127(){
		this.stk[this.ptr++]="ccversion";
		this.stk[this.ptr++]=BWIPJS.psstring("c");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cccolumns";
		this.xget("linwidth");
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=17;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f128(){
		this.stk[this.ptr++]="ccversion";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f129(){
		this.xget("ccversion");
		this.stk[this.ptr++]=BWIPJS.psstring("b");
		this.eq();
		this.xget("lintype");
		this.stk[this.ptr++]=BWIPJS.psstring("gs1-128");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f127;
		this.stk[this.ptr++]=$f128;
		var t211=this.stk[--this.ptr];
		var t212=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t212.call(this)==-1) return -1;
		} else {
			if (t211.call(this)==-1) return -1;
		}
	}
	function $f130(){
		this.ptr--;
		this.xget("ccversion");
		this.stk[this.ptr++]=BWIPJS.psstring("a");
		this.eq();
		this.stk[this.ptr++]=$f126;
		this.stk[this.ptr++]=$f129;
		var t213=this.stk[--this.ptr];
		var t214=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t214.call(this)==-1) return -1;
		} else {
			if (t213.call(this)==-1) return -1;
		}
		this.xget("used");
		this.xget("rembits");
	}
	function $f131(){
		this.stk[this.ptr++]="used";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ccversion");
		this.stk[this.ptr++]=BWIPJS.psstring("c");
		this.ne();
		this.stk[this.ptr++]=$f117;
		this.stk[this.ptr++]=$f125;
		var t209=this.stk[--this.ptr];
		var t210=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t210.call(this)==-1) return -1;
		} else {
			if (t209.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=-1;
		this.eq();
		this.stk[this.ptr++]=$f130;
		var t215=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t215.call(this)==-1) return -1;
		}
	}
	function $f132(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f133(){
		this.ptr--;
	}
	function $f134(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f135(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]="raw";
		this.ne();
		this.stk[this.ptr++]=$f132;
		this.stk[this.ptr++]=$f133;
		var t216=this.stk[--this.ptr];
		var t217=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t217.call(this)==-1) return -1;
		} else {
			if (t216.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f134;
		var t218=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t218);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("gpfenc");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("j");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f136(){
		this.stk[this.ptr++]=0;
	}
	function $f137(){
		this.stk[this.ptr++]=0;
	}
	function $f138(){
		this.stk[this.ptr++]=0;
	}
	function $f139(){
		this.ptr--;
		this.stk[this.ptr++]=94;
	}
	function $f140(){
		this.ptr--;
		this.stk[this.ptr++]=94;
	}
	function $f141(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("fnc1");
		this.eq();
		this.stk[this.ptr++]=$f140;
		var t229=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t229.call(this)==-1) return -1;
		}
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f142(){
		this.xget("numericruns");
		this.xget("i");
		this.xget("numericruns");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f143(){
		this.xget("numericruns");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f144(){
		this.xget("alphanumericruns");
		this.xget("i");
		this.xget("alphanumericruns");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f145(){
		this.xget("alphanumericruns");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f146(){
		this.xget("nextiso646only");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f147(){
		this.xget("nextiso646only");
		this.xget("i");
		this.xget("nextiso646only");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f148(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("00");
		this.stk[this.ptr++]=2;
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
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("fnc1");
		this.eq();
		this.stk[this.ptr++]=$f139;
		var t228=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t228.call(this)==-1) return -1;
		}
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("i");
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f141;
		var t230=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t230.call(this)==-1) return -1;
		}
		this.xget("numeric");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f142;
		this.stk[this.ptr++]=$f143;
		var t231=this.stk[--this.ptr];
		var t232=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t232.call(this)==-1) return -1;
		} else {
			if (t231.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("alphanumeric");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f144;
		this.stk[this.ptr++]=$f145;
		var t233=this.stk[--this.ptr];
		var t234=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t234.call(this)==-1) return -1;
		} else {
			if (t233.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("iso646");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("alphanumeric");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.and();
		this.stk[this.ptr++]=$f146;
		this.stk[this.ptr++]=$f147;
		var t235=this.stk[--this.ptr];
		var t236=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t236.call(this)==-1) return -1;
		} else {
			if (t235.call(this)==-1) return -1;
		}
	}
	function $f149(){
		return -1;
	}
	function $f150(){
		this.ptr--;
		this.stk[this.ptr++]=94;
	}
	function $f151(){
		this.ptr--;
		this.stk[this.ptr++]=94;
	}
	function $f152(){
		this.xget("numeric");
		this.xget("encode");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f153(){
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("fnc1");
		this.eq();
		this.stk[this.ptr++]=$f150;
		var t243=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t243.call(this)==-1) return -1;
		}
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("fnc1");
		this.eq();
		this.stk[this.ptr++]=$f151;
		var t244=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t244.call(this)==-1) return -1;
		}
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("numeric");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f152;
		var t245=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t245.call(this)==-1) return -1;
		}
		this.ptr--;
		this.xget("lalphanumeric");
		this.xget("numeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f154(){
		this.xget("lalphanumeric");
		this.xget("numeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f155(){
		this.stk[this.ptr++]=BWIPJS.psstring("000000");
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
		this.stk[this.ptr++]=0;
		this.xget("rem");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=47;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=4;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="raw";
		this.xget("encode");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f156(){
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=94;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("numeric");
		this.xget("encode");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f157(){
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.or();
		this.stk[this.ptr++]=$f154;
		var t246=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t246.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="rem";
		this.xget("cdf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("rembits");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("rem");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("rem");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f155;
		this.stk[this.ptr++]=$f156;
		var t247=this.stk[--this.ptr];
		var t248=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t248.call(this)==-1) return -1;
		} else {
			if (t247.call(this)==-1) return -1;
		}
	}
	function $f158(){
		this.xget("i");
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f153;
		this.stk[this.ptr++]=$f157;
		var t249=this.stk[--this.ptr];
		var t250=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t250.call(this)==-1) return -1;
		} else {
			if (t249.call(this)==-1) return -1;
		}
	}
	function $f159(){
		this.xget("fnc1");
		this.xget("alphanumeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f160(){
		this.xget("liso646");
		this.xget("alphanumeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("iso646");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f161(){
		this.xget("lnumeric");
		this.xget("alphanumeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f162(){
		this.xget("lnumeric");
		this.xget("alphanumeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f163(){
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fnc1");
		this.eq();
		this.stk[this.ptr++]=$f159;
		var t252=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t252.call(this)==-1) return -1;
		}
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("iso646");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("alphanumeric");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.and();
		this.stk[this.ptr++]=$f160;
		var t253=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t253.call(this)==-1) return -1;
		}
		this.xget("numericruns");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f161;
		var t254=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t254.call(this)==-1) return -1;
		}
		this.xget("numericruns");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f162;
		var t255=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t255.call(this)==-1) return -1;
		}
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("alphanumeric");
		this.xget("encode");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f164(){
		this.xget("fnc1");
		this.xget("iso646");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f165(){
		this.xget("lnumeric");
		this.xget("iso646");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f166(){
		this.xget("lalphanumeric");
		this.xget("iso646");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f167(){
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fnc1");
		this.eq();
		this.stk[this.ptr++]=$f164;
		var t257=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t257.call(this)==-1) return -1;
		}
		this.xget("numericruns");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextiso646only");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f165;
		var t258=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t258.call(this)==-1) return -1;
		}
		this.xget("alphanumericruns");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextiso646only");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f166;
		var t259=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t259.call(this)==-1) return -1;
		}
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("iso646");
		this.xget("encode");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f168(){
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.eq();
		this.stk[this.ptr++]=$f158;
		var t251=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t251.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.eq();
		this.stk[this.ptr++]=$f163;
		var t256=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t256.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("iso646");
		this.eq();
		this.stk[this.ptr++]=$f167;
		var t260=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t260.call(this)==-1) return -1;
		}
	}
	function $f169(){
		this.xget("i");
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.stk[this.ptr++]=$f149;
		var t242=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t242.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=$f168;
		var t261=this.stk[--this.ptr];
		while (t261.call(this)!=-1);
	}
	function $f170(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f171(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pad");
		this.xget("i");
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,1,0,0]);
		this.stk[this.ptr++]=0;
		this.xget("pad");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
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
		this.stk[this.ptr++]=$f170;
		var t263=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t263.call(this)==-1) return -1;
		}
		this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f172(){
		this.stk[this.ptr++]="pad";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.xget("pad");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=0;
		this.xget("pad");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f173(){
		this.stk[this.ptr++]="pad";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("pad");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=0;
		this.xget("pad");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f174(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=5;
		this.xget("pad");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f171;
		var t268=this.stk[--this.ptr];
		var t266=this.stk[--this.ptr];
		var t265=this.stk[--this.ptr];
		var t264=this.stk[--this.ptr];
		for (var t267=t264; t265<0 ? t267>=t266 : t267<=t266; t267+=t265) {
			this.stk[this.ptr++]=t267;
			if (t268.call(this)==-1) break;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.eq();
		this.stk[this.ptr++]=$f172;
		var t269=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t269.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("alpha");
		this.eq();
		this.stk[this.ptr++]=$f173;
		var t270=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t270.call(this)==-1) return -1;
		}
	}
	function $f175(){
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	}
	function $f176(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="v";
		this.xget("pwr928");
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("v");
		this.stk[this.ptr++]=928;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pwr928");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("i");
		this.xget("v");
		this.stk[this.ptr++]=928;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f177(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="v";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=$f176;
		var t279=this.stk[--this.ptr];
		var t277=this.stk[--this.ptr];
		var t276=this.stk[--this.ptr];
		var t275=this.stk[--this.ptr];
		for (var t278=t275; t276<0 ? t278>=t277 : t278<=t277; t278+=t276) {
			this.stk[this.ptr++]=t278;
			if (t279.call(this)==-1) break;
		}
		this.xget("pwr928");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("pwr928");
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("v");
		this.stk[this.ptr++]=928;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f178(){
		this.stk[this.ptr++]=0;
	}
	function $f179(){
		return -1;
	}
	function $f180(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f181(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cs");
		this.xget("j");
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
		this.xget("pwr928");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("j");
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("csl");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("bs");
		this.xget("bsl");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f182(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("csl");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f181;
		var t294=this.stk[--this.ptr];
		var t292=this.stk[--this.ptr];
		var t291=this.stk[--this.ptr];
		var t290=this.stk[--this.ptr];
		for (var t293=t290; t291<0 ? t293>=t292 : t293<=t292; t293+=t291) {
			this.stk[this.ptr++]=t293;
			if (t294.call(this)==-1) break;
		}
	}
	function $f183(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cs");
		this.xget("i");
		this.stk[this.ptr++]=1;
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
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("cs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=928;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("cs");
		this.xget("i");
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
		this.stk[this.ptr++]=928;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f184(){
		this.xget("b");
		this.xget("bits");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.stk[this.ptr++]=$f179;
		var t288=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t288.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="bs";
		this.xget("bits");
		this.xget("b");
		this.stk[this.ptr++]=69;
		this.xget("bits");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("b");
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
		this.stk[this.ptr++]=$f180;
		var t289=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t289.call(this)==-1) return -1;
		}
		this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bsl";
		this.xget("bs");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cs";
		this.xget("cws");
		this.xget("c");
		this.xget("bsl");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="csl";
		this.xget("cs");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("bsl");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f182;
		var t299=this.stk[--this.ptr];
		var t297=this.stk[--this.ptr];
		var t296=this.stk[--this.ptr];
		var t295=this.stk[--this.ptr];
		for (var t298=t295; t296<0 ? t298>=t297 : t298<=t297; t298+=t296) {
			this.stk[this.ptr++]=t298;
			if (t299.call(this)==-1) break;
		}
		this.xget("csl");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=$f183;
		var t304=this.stk[--this.ptr];
		var t302=this.stk[--this.ptr];
		var t301=this.stk[--this.ptr];
		var t300=this.stk[--this.ptr];
		for (var t303=t300; t301<0 ? t303>=t302 : t303<=t302; t303+=t301) {
			this.stk[this.ptr++]=t303;
			if (t304.call(this)==-1) break;
		}
		this.stk[this.ptr++]="b";
		this.xget("b");
		this.xget("bsl");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="c";
		this.xget("c");
		this.xget("csl");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f185(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("^   ");
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
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=4;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t307=this.stk[--this.ptr];
		var t306=this.stk[--this.ptr];
		if (t307 < 0) t=this.stk.splice(this.ptr-t306, -t307);
		else t=this.stk.splice(this.ptr-t306, t306-t307);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f186(){
		this.stk[this.ptr++]="pwr928";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0,0,0,1]);
		this.stk[this.ptr++]=68;
		this.stk[this.ptr++]=$f175;
		var t274=this.stk[--this.ptr];
		var t272=this.stk[--this.ptr];
		for (var t273=0; t273<t272; t273++) {
			if (t274.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=68;
		this.stk[this.ptr++]=$f177;
		var t284=this.stk[--this.ptr];
		var t282=this.stk[--this.ptr];
		var t281=this.stk[--this.ptr];
		var t280=this.stk[--this.ptr];
		for (var t283=t280; t281<0 ? t283>=t282 : t283<=t282; t283+=t281) {
			this.stk[this.ptr++]=t283;
			if (t284.call(this)==-1) break;
		}
		this.stk[this.ptr++]="cws";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=28;
		this.stk[this.ptr++]=$f178;
		var t287=this.stk[--this.ptr];
		var t285=this.stk[--this.ptr];
		for (var t286=0; t286<t285; t286++) {
			if (t287.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="b";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="c";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f184;
		var t305=this.stk[--this.ptr];
		while (t305.call(this)!=-1);
		this.stk[this.ptr++]="cws";
		this.xget("cws");
		this.stk[this.ptr++]=0;
		this.xget("c");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="barcode";
		this.xget("cws");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("cws");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f185;
		var t312=this.stk[--this.ptr];
		var t310=this.stk[--this.ptr];
		var t309=this.stk[--this.ptr];
		var t308=this.stk[--this.ptr];
		for (var t311=t308; t309<0 ? t311>=t310 : t311<=t310; t311+=t309) {
			this.stk[this.ptr++]=t311;
			if (t312.call(this)==-1) break;
		}
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("dontdraw");
		this.stk[this.ptr++]=true;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("cca");
		this.stk[this.ptr++]=true;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("columns");
		this.xget("cccolumns");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="args";
		this.xget("barcode");
		this.xget("options");
		this.stk[this.ptr++]=this.get("micropdf417");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f187(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	}
	function $f188(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("bits");
		this.xget("i");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f187;
		var t314=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t314);
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.xget("barcode");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("i");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f189(){
		this.stk[this.ptr++]="barcode";
		this.xget("bits");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("barcode");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f188;
		var t319=this.stk[--this.ptr];
		var t317=this.stk[--this.ptr];
		var t316=this.stk[--this.ptr];
		var t315=this.stk[--this.ptr];
		for (var t318=t315; t316<0 ? t318>=t317 : t318<=t317; t318+=t316) {
			this.stk[this.ptr++]=t318;
			if (t319.call(this)==-1) break;
		}
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("dontdraw");
		this.stk[this.ptr++]=true;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("ccb");
		this.stk[this.ptr++]=true;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("columns");
		this.xget("cccolumns");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="args";
		this.xget("barcode");
		this.xget("options");
		this.stk[this.ptr++]=this.get("micropdf417");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f190(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	}
	function $f191(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("bits");
		this.xget("i");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f190;
		var t321=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t321);
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.xget("barcode");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("i");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f192(){
		this.stk[this.ptr++]="barcode";
		this.xget("bits");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("barcode");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f191;
		var t326=this.stk[--this.ptr];
		var t324=this.stk[--this.ptr];
		var t323=this.stk[--this.ptr];
		var t322=this.stk[--this.ptr];
		for (var t325=t322; t323<0 ? t325>=t324 : t325<=t324; t325+=t323) {
			this.stk[this.ptr++]=t325;
			if (t326.call(this)==-1) break;
		}
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("dontdraw");
		this.stk[this.ptr++]=true;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("ccc");
		this.stk[this.ptr++]=true;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("options");
		this.stk[this.ptr++]=BWIPJS.psstring("columns");
		this.xget("cccolumns");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="args";
		this.xget("barcode");
		this.xget("options");
		this.stk[this.ptr++]=this.get("pdf417");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
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
	this.stk[this.ptr++]="ccversion";
	this.stk[this.ptr++]=BWIPJS.psstring("a");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cccolumns";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lintype";
	this.stk[this.ptr++]=BWIPJS.psstring("");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="linwidth";
	this.stk[this.ptr++]=-1;
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
	this.stk[this.ptr++]="cccolumns";
	this.xget("cccolumns");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="linwidth";
	this.xget("linwidth");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("cccolumns");
	this.stk[this.ptr++]=-1;
	this.eq();
	this.stk[this.ptr++]=$f8;
	var t8=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t8.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="expand";
	this.stk[this.ptr++]=$f12;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ais";
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="aival";
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("barcode");
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=1;
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f16;
	var t21=this.stk[--this.ptr];
	while (t21.call(this)!=-1);
	this.ptr--;
	this.stk[this.ptr++]="isupper";
	this.stk[this.ptr++]=$f17;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="isnum0";
	this.stk[this.ptr++]=$f18;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="isnum1";
	this.stk[this.ptr++]=$f19;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f32;
	var t34=this.stk[--this.ptr];
	while (t34.call(this)!=-1);
	this.stk[this.ptr++]="method";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="npre";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fnc1";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lnumeric";
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lalphanumeric";
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="liso646";
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="tobin";
	this.stk[this.ptr++]=$f34;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="alpha";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=65;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=90;
	this.stk[this.ptr++]=$f35;
	var t46=this.stk[--this.ptr];
	var t44=this.stk[--this.ptr];
	var t43=this.stk[--this.ptr];
	var t42=this.stk[--this.ptr];
	for (var t45=t42; t43<0 ? t45>=t44 : t45<=t44; t45+=t43) {
		this.stk[this.ptr++]=t45;
		if (t46.call(this)==-1) break;
	}
	this.stk[this.ptr++]=48;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=57;
	this.stk[this.ptr++]=$f36;
	var t51=this.stk[--this.ptr];
	var t49=this.stk[--this.ptr];
	var t48=this.stk[--this.ptr];
	var t47=this.stk[--this.ptr];
	for (var t50=t47; t48<0 ? t50>=t49 : t50<=t49; t50+=t48) {
		this.stk[this.ptr++]=t50;
		if (t51.call(this)==-1) break;
	}
	this.xget("fnc1");
	this.stk[this.ptr++]=BWIPJS.psstring("11111");
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numeric";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=119;
	this.stk[this.ptr++]=$f39;
	var t62=this.stk[--this.ptr];
	var t60=this.stk[--this.ptr];
	var t59=this.stk[--this.ptr];
	var t58=this.stk[--this.ptr];
	for (var t61=t58; t59<0 ? t61>=t60 : t61<=t60; t61+=t59) {
		this.stk[this.ptr++]=t61;
		if (t62.call(this)==-1) break;
	}
	this.xget("lalphanumeric");
	this.stk[this.ptr++]=BWIPJS.psstring("0000");
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="alphanumeric";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=57;
	this.stk[this.ptr++]=$f40;
	var t67=this.stk[--this.ptr];
	var t65=this.stk[--this.ptr];
	var t64=this.stk[--this.ptr];
	var t63=this.stk[--this.ptr];
	for (var t66=t63; t64<0 ? t66>=t65 : t66<=t65; t66+=t64) {
		this.stk[this.ptr++]=t66;
		if (t67.call(this)==-1) break;
	}
	this.xget("fnc1");
	this.stk[this.ptr++]=BWIPJS.psstring("01111");
	this.stk[this.ptr++]=65;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=90;
	this.stk[this.ptr++]=$f41;
	var t72=this.stk[--this.ptr];
	var t70=this.stk[--this.ptr];
	var t69=this.stk[--this.ptr];
	var t68=this.stk[--this.ptr];
	for (var t71=t68; t69<0 ? t71>=t70 : t71<=t70; t71+=t69) {
		this.stk[this.ptr++]=t71;
		if (t72.call(this)==-1) break;
	}
	this.stk[this.ptr++]=42;
	this.stk[this.ptr++]=BWIPJS.psstring("111010");
	this.stk[this.ptr++]=44;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=47;
	this.stk[this.ptr++]=$f42;
	var t77=this.stk[--this.ptr];
	var t75=this.stk[--this.ptr];
	var t74=this.stk[--this.ptr];
	var t73=this.stk[--this.ptr];
	for (var t76=t73; t74<0 ? t76>=t75 : t76<=t75; t76+=t74) {
		this.stk[this.ptr++]=t76;
		if (t77.call(this)==-1) break;
	}
	this.xget("lnumeric");
	this.stk[this.ptr++]=BWIPJS.psstring("000");
	this.xget("liso646");
	this.stk[this.ptr++]=BWIPJS.psstring("00100");
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="iso646";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=57;
	this.stk[this.ptr++]=$f43;
	var t82=this.stk[--this.ptr];
	var t80=this.stk[--this.ptr];
	var t79=this.stk[--this.ptr];
	var t78=this.stk[--this.ptr];
	for (var t81=t78; t79<0 ? t81>=t80 : t81<=t80; t81+=t79) {
		this.stk[this.ptr++]=t81;
		if (t82.call(this)==-1) break;
	}
	this.xget("fnc1");
	this.stk[this.ptr++]=BWIPJS.psstring("01111");
	this.stk[this.ptr++]=65;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=90;
	this.stk[this.ptr++]=$f44;
	var t87=this.stk[--this.ptr];
	var t85=this.stk[--this.ptr];
	var t84=this.stk[--this.ptr];
	var t83=this.stk[--this.ptr];
	for (var t86=t83; t84<0 ? t86>=t85 : t86<=t85; t86+=t84) {
		this.stk[this.ptr++]=t86;
		if (t87.call(this)==-1) break;
	}
	this.stk[this.ptr++]=97;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=122;
	this.stk[this.ptr++]=$f45;
	var t92=this.stk[--this.ptr];
	var t90=this.stk[--this.ptr];
	var t89=this.stk[--this.ptr];
	var t88=this.stk[--this.ptr];
	for (var t91=t88; t89<0 ? t91>=t90 : t91<=t90; t91+=t89) {
		this.stk[this.ptr++]=t91;
		if (t92.call(this)==-1) break;
	}
	this.stk[this.ptr++]=33;
	this.stk[this.ptr++]=BWIPJS.psstring("11101000");
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=BWIPJS.psstring("11101001");
	this.stk[this.ptr++]=37;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=47;
	this.stk[this.ptr++]=$f46;
	var t97=this.stk[--this.ptr];
	var t95=this.stk[--this.ptr];
	var t94=this.stk[--this.ptr];
	var t93=this.stk[--this.ptr];
	for (var t96=t93; t94<0 ? t96>=t95 : t96<=t95; t96+=t94) {
		this.stk[this.ptr++]=t96;
		if (t97.call(this)==-1) break;
	}
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=63;
	this.stk[this.ptr++]=$f47;
	var t102=this.stk[--this.ptr];
	var t100=this.stk[--this.ptr];
	var t99=this.stk[--this.ptr];
	var t98=this.stk[--this.ptr];
	for (var t101=t98; t99<0 ? t101>=t100 : t101<=t100; t101+=t99) {
		this.stk[this.ptr++]=t101;
		if (t102.call(this)==-1) break;
	}
	this.stk[this.ptr++]=95;
	this.stk[this.ptr++]=BWIPJS.psstring("11111011");
	this.stk[this.ptr++]=32;
	this.stk[this.ptr++]=BWIPJS.psstring("11111100");
	this.xget("lnumeric");
	this.stk[this.ptr++]=BWIPJS.psstring("000");
	this.xget("lalphanumeric");
	this.stk[this.ptr++]=BWIPJS.psstring("00100");
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("10");
	this.eq();
	this.stk[this.ptr++]=$f59;
	var t118=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t118.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("11");
	this.eq();
	this.stk[this.ptr++]=$f103;
	var t166=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t166.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("0");
	this.eq();
	this.stk[this.ptr++]=$f104;
	var t167=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t167.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="aifixed";
	this.stk[this.ptr++]=23;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=$f105;
	var t172=this.stk[--this.ptr];
	var t170=this.stk[--this.ptr];
	var t169=this.stk[--this.ptr];
	var t168=this.stk[--this.ptr];
	for (var t171=t168; t169<0 ? t171>=t170 : t171<=t170; t171+=t169) {
		this.stk[this.ptr++]=t171;
		if (t172.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f106;
	var t177=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t177);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=20;
	this.stk[this.ptr++]=$f107;
	var t182=this.stk[--this.ptr];
	var t180=this.stk[--this.ptr];
	var t179=this.stk[--this.ptr];
	var t178=this.stk[--this.ptr];
	for (var t181=t178; t179<0 ? t181>=t180 : t181<=t180; t181+=t179) {
		this.stk[this.ptr++]=t181;
		if (t182.call(this)==-1) break;
	}
	this.stk[this.ptr++]=23;
	this.stk[this.ptr++]=31;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=36;
	this.stk[this.ptr++]=$f108;
	var t187=this.stk[--this.ptr];
	var t185=this.stk[--this.ptr];
	var t184=this.stk[--this.ptr];
	var t183=this.stk[--this.ptr];
	for (var t186=t183; t184<0 ? t186>=t185 : t186<=t185; t186+=t184) {
		this.stk[this.ptr++]=t186;
		if (t187.call(this)==-1) break;
	}
	this.stk[this.ptr++]=41;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f109;
	var t190=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t190);
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("ais");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f113;
	var t198=this.stk[--this.ptr];
	var t196=this.stk[--this.ptr];
	var t195=this.stk[--this.ptr];
	var t194=this.stk[--this.ptr];
	for (var t197=t194; t195<0 ? t197>=t196 : t197<=t196; t197+=t195) {
		this.stk[this.ptr++]=t197;
		if (t198.call(this)==-1) break;
	}
	this.stk[this.ptr++]="rembits";
	this.stk[this.ptr++]=$f131;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encode";
	this.stk[this.ptr++]=$f135;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numericruns";
	this.stk[this.ptr++]=Infinity;
	this.xget("gpf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=$f136;
	var t221=this.stk[--this.ptr];
	var t219=this.stk[--this.ptr];
	for (var t220=0; t220<t219; t220++) {
		if (t221.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=-1;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="alphanumericruns";
	this.stk[this.ptr++]=Infinity;
	this.xget("gpf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=$f137;
	var t224=this.stk[--this.ptr];
	var t222=this.stk[--this.ptr];
	for (var t223=0; t223<t222; t223++) {
		if (t224.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextiso646only";
	this.stk[this.ptr++]=Infinity;
	this.xget("gpf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=$f138;
	var t227=this.stk[--this.ptr];
	var t225=this.stk[--this.ptr];
	for (var t226=0; t226<t225; t226++) {
		if (t227.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("gpf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f148;
	var t241=this.stk[--this.ptr];
	var t239=this.stk[--this.ptr];
	var t238=this.stk[--this.ptr];
	var t237=this.stk[--this.ptr];
	for (var t240=t237; t238<0 ? t240>=t239 : t240<=t239; t240+=t238) {
		this.stk[this.ptr++]=t240;
		if (t241.call(this)==-1) break;
	}
	this.stk[this.ptr++]="gpfenc";
	this.stk[this.ptr++]=8296;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f169;
	var t262=this.stk[--this.ptr];
	while (t262.call(this)!=-1);
	this.stk[this.ptr++]="gpf";
	this.xget("gpfenc");
	this.stk[this.ptr++]=0;
	this.xget("j");
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pad";
	this.xget("cdf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.xget("gpf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("rembits");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("pad");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f174;
	var t271=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t271.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="bits";
	this.stk[this.ptr++]=Infinity;
	this.xget("cdf");
	t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	this.xget("gpf");
	t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	this.xget("pad");
	t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("ccversion");
	this.stk[this.ptr++]=BWIPJS.psstring("a");
	this.eq();
	this.stk[this.ptr++]=$f186;
	var t313=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t313.call(this)==-1) return -1;
	}
	this.xget("ccversion");
	this.stk[this.ptr++]=BWIPJS.psstring("b");
	this.eq();
	this.stk[this.ptr++]=$f189;
	var t320=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t320.call(this)==-1) return -1;
	}
	this.xget("ccversion");
	this.stk[this.ptr++]=BWIPJS.psstring("c");
	this.eq();
	this.stk[this.ptr++]=$f192;
	var t327=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t327.call(this)==-1) return -1;
	}
	this.xget("args");
	this.xget("dontdraw");
	this.not();
	this.stk[this.ptr++]=this.get("renmatrix");
	var t328=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t328.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("gs1-cc");
// END OF gs1-cc

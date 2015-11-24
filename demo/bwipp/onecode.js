// file: bwipp/onecode.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN onecode
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("onecode", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("onecode", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
BWIPJS.bwipp["onecode"]=function() {
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
		this.stk[this.ptr++]=14;
	}
	function $f7(){
		this.stk[this.ptr++]=11;
	}
	function $f8(){
		this.xget("txt");
		this.xget("i");
		this.xget("spacecnt");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(" "),0,0,BWIPJS.psstring(""),0]);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="spacecnt";
		this.xget("spacecnt");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f9(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("txtdict");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f8;
		var t8=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t8.call(this)==-1) return -1;
		}
		this.xget("txt");
		this.xget("i");
		this.xget("spacecnt");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=Infinity;
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f10(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("num");
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
		this.xget("num");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("base");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("num");
		this.xget("i");
		this.xget("num");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("base");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f11(){
		return -1;
	}
	function $f12(){
	}
	function $f13(){
		this.xget("num");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("base");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f11;
		var t19=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t19.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="num";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.xget("num");
		this.stk[this.ptr++]=$f12;
		var t20=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t20);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("num");
		this.stk[this.ptr++]=0;
		this.xget("num");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("num");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("base");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("num");
		this.stk[this.ptr++]=1;
		this.xget("num");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("base");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f14(){
		this.ptr--;
	}
	function $f15(){
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f16(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.eq();
		this.xget("i");
		this.and();
		this.stk[this.ptr++]=$f14;
		this.stk[this.ptr++]=$f15;
		var t22=this.stk[--this.ptr];
		var t23=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t23.call(this)==-1) return -1;
		} else {
			if (t22.call(this)==-1) return -1;
		}
	}
	function $f17(){
		this.stk[this.ptr++]="num";
		this.stk[this.ptr++]=BWIPJS.psarray([0]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f18(){
		this.stk[this.ptr++]="base";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="num";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("num");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=$f10;
		var t18=this.stk[--this.ptr];
		var t16=this.stk[--this.ptr];
		var t15=this.stk[--this.ptr];
		var t14=this.stk[--this.ptr];
		for (var t17=t14; t15<0 ? t17>=t16 : t17<=t16; t17+=t15) {
			this.stk[this.ptr++]=t17;
			if (t18.call(this)==-1) break;
		}
		this.stk[this.ptr++]=$f13;
		var t21=this.stk[--this.ptr];
		while (t21.call(this)!=-1);
		this.stk[this.ptr++]="num";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("num");
		this.stk[this.ptr++]=$f16;
		var t24=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t24);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("num");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f17;
		var t25=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t25.call(this)==-1) return -1;
		}
		this.xget("num");
	}
	function $f19(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f20(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("a");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("offset");
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
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("b");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=-1;
		var t28=this.stk[--this.ptr];
		var t27=this.stk[--this.ptr];
		if (t28 < 0) t=this.stk.splice(this.ptr-t27, -t28);
		else t=this.stk.splice(this.ptr-t27, t27-t28);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f21(){
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
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
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
		this.stk[this.ptr-1]=Math.abs(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="offset";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f19;
		var t26=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t26.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="a";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="b";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("b");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f20;
		var t33=this.stk[--this.ptr];
		var t31=this.stk[--this.ptr];
		var t30=this.stk[--this.ptr];
		var t29=this.stk[--this.ptr];
		for (var t32=t29; t30<0 ? t32>=t31 : t32<=t31; t32+=t30) {
			this.stk[this.ptr++]=t32;
			if (t33.call(this)==-1) break;
		}
		this.xget("a");
	}
	function $f22(){
		this.stk[this.ptr++]=BWIPJS.psarray([0]);
	}
	function $f23(){
		this.stk[this.ptr++]=BWIPJS.psarray([1]);
	}
	function $f24(){
		this.stk[this.ptr++]=BWIPJS.psarray([1,0,0,0,0,1]);
	}
	function $f25(){
		this.stk[this.ptr++]=BWIPJS.psarray([1,0,0,0,1,0,0,0,0,1]);
	}
	function $f26(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f27(){
	}
	function $f28(){
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	}
	function $f29(){
	}
	function $f30(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f31(){
	}
	function $f32(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("bintmp");
		this.xget("j");
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
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("bintmp");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=256;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bintmp");
		this.xget("j");
		this.xget("bintmp");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=256;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f33(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("bintmp");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f32;
		var t48=this.stk[--this.ptr];
		var t46=this.stk[--this.ptr];
		var t45=this.stk[--this.ptr];
		var t44=this.stk[--this.ptr];
		for (var t47=t44; t45<0 ? t47>=t46 : t47<=t46; t47+=t45) {
			this.stk[this.ptr++]=t47;
			if (t48.call(this)==-1) break;
		}
		this.xget("bytes");
		this.xget("i");
		this.xget("bintmp");
		this.xget("bintmp");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=256;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bintmp");
		this.xget("bintmp");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
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
		this.stk[this.ptr++]=256;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f34(){
		this.stk[this.ptr++]="fcs";
		this.xget("fcs");
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=3893;
		this.xor();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f35(){
		this.stk[this.ptr++]="fcs";
		this.xget("fcs");
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f36(){
		this.xget("fcs");
		this.xget("dat");
		this.xor();
		this.stk[this.ptr++]=1024;
		this.and();
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f34;
		this.stk[this.ptr++]=$f35;
		var t54=this.stk[--this.ptr];
		var t55=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t55.call(this)==-1) return -1;
		} else {
			if (t54.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="fcs";
		this.xget("fcs");
		this.stk[this.ptr++]=2047;
		this.and();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dat";
		this.xget("dat");
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f37(){
		this.stk[this.ptr++]="fcs";
		this.xget("fcs");
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=3893;
		this.xor();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f38(){
		this.stk[this.ptr++]="fcs";
		this.xget("fcs");
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f39(){
		this.xget("fcs");
		this.xget("dat");
		this.xor();
		this.stk[this.ptr++]=1024;
		this.and();
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f37;
		this.stk[this.ptr++]=$f38;
		var t59=this.stk[--this.ptr];
		var t60=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t60.call(this)==-1) return -1;
		} else {
			if (t59.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="fcs";
		this.xget("fcs");
		this.stk[this.ptr++]=2047;
		this.and();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dat";
		this.xget("dat");
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f40(){
		this.xget("bytes");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]="dat";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr++]=$f39;
		var t63=this.stk[--this.ptr];
		var t61=this.stk[--this.ptr];
		for (var t62=0; t62<t61; t62++) {
			if (t63.call(this)==-1) break;
		}
	}
	function $f41(){
		this.stk[this.ptr++]="b";
		this.stk[this.ptr++]=636;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f42(){
		this.stk[this.ptr++]="b";
		this.stk[this.ptr++]=1365;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f43(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("binval");
		this.xget("j");
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
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("binval");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("b");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("binval");
		this.xget("j");
		this.xget("binval");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("b");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f44(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("i");
		this.stk[this.ptr++]=9;
		this.eq();
		this.stk[this.ptr++]=$f41;
		this.stk[this.ptr++]=$f42;
		var t69=this.stk[--this.ptr];
		var t70=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t70.call(this)==-1) return -1;
		} else {
			if (t69.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("binval");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f43;
		var t75=this.stk[--this.ptr];
		var t73=this.stk[--this.ptr];
		var t72=this.stk[--this.ptr];
		var t71=this.stk[--this.ptr];
		for (var t74=t71; t72<0 ? t74>=t73 : t74<=t73; t74+=t72) {
			this.stk[this.ptr++]=t74;
			if (t75.call(this)==-1) break;
		}
		this.xget("codewords");
		this.xget("i");
		this.xget("binval");
		this.xget("binval");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("b");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("binval");
		this.xget("binval");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
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
		this.xget("b");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f45(){
		this.xget("codewords");
		this.stk[this.ptr++]=0;
		this.xget("codewords");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=659;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f46(){
		this.xget("tab513");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f47(){
		this.xget("tab213");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1287;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f48(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("codewords");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1286;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f46;
		this.stk[this.ptr++]=$f47;
		var t82=this.stk[--this.ptr];
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		} else {
			if (t82.call(this)==-1) return -1;
		}
		this.xget("chars");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t85=this.stk[--this.ptr];
		var t84=this.stk[--this.ptr];
		if (t85 < 0) t=this.stk.splice(this.ptr-t84, -t85);
		else t=this.stk.splice(this.ptr-t84, t84-t85);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f49(){
		this.xget("chars");
		this.xget("i");
		this.xget("chars");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=8191;
		this.xor();
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f50(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=2;
		this.xget("i");
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.xget("fcs");
		this.and();
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f49;
		var t91=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t91.call(this)==-1) return -1;
		}
	}
	function $f51(){
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f52(){
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=5;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f53(){
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=5;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f54(){
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=8;
		this.xget("height");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f55(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dec";
		this.xget("chars");
		this.xget("barmap");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.xget("barmap");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.and();
		this.stk[this.ptr++]=0;
		this.ne();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="asc";
		this.xget("chars");
		this.xget("barmap");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.xget("barmap");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.and();
		this.stk[this.ptr++]=0;
		this.ne();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("dec");
		this.not();
		this.xget("asc");
		this.not();
		this.and();
		this.stk[this.ptr++]=$f51;
		var t97=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t97.call(this)==-1) return -1;
		}
		this.xget("dec");
		this.not();
		this.xget("asc");
		this.and();
		this.stk[this.ptr++]=$f52;
		var t98=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t98.call(this)==-1) return -1;
		}
		this.xget("dec");
		this.xget("asc");
		this.not();
		this.and();
		this.stk[this.ptr++]=$f53;
		var t99=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t99.call(this)==-1) return -1;
		}
		this.xget("dec");
		this.xget("asc");
		this.and();
		this.stk[this.ptr++]=$f54;
		var t100=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t100.call(this)==-1) return -1;
		}
	}
	function $f56(){
		this.stk[this.ptr++]=1.44;
		this.stk[this.ptr++]=1.872;
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
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=0.15;
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
	this.stk[this.ptr++]="height";
	this.xget("height");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barlen";
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="txtdict";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.xget("barcode");
	this.stk[this.ptr++]=5;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=BWIPJS.psstring("9");
	this.eq();
	this.stk[this.ptr++]=$f6;
	this.stk[this.ptr++]=$f7;
	var t6=this.stk[--this.ptr];
	var t7=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t7.call(this)==-1) return -1;
	} else {
		if (t6.call(this)==-1) return -1;
	}
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=20;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=25;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=29;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="txt";
	this.xget("barlen");
	this.stk[this.ptr++]=6;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="spacecnt";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("barlen");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f9;
	var t13=this.stk[--this.ptr];
	var t11=this.stk[--this.ptr];
	var t10=this.stk[--this.ptr];
	var t9=this.stk[--this.ptr];
	for (var t12=t9; t10<0 ? t12>=t11 : t12<=t11; t12+=t10) {
		this.stk[this.ptr++]=t12;
		if (t13.call(this)==-1) break;
	}
	this.stk[this.ptr++]="txt";
	this.xget("txt");
	this.stk[this.ptr++]=0;
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.xget("spacecnt");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="normalize";
	this.stk[this.ptr++]=$f18;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bigadd";
	this.stk[this.ptr++]=$f21;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("barlen");
	this.stk[this.ptr++]=20;
	this.eq();
	this.stk[this.ptr++]=$f22;
	var t34=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t34.call(this)==-1) return -1;
	}
	this.xget("barlen");
	this.stk[this.ptr++]=25;
	this.eq();
	this.stk[this.ptr++]=$f23;
	var t35=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t35.call(this)==-1) return -1;
	}
	this.xget("barlen");
	this.stk[this.ptr++]=29;
	this.eq();
	this.stk[this.ptr++]=$f24;
	var t36=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t36.call(this)==-1) return -1;
	}
	this.xget("barlen");
	this.stk[this.ptr++]=31;
	this.eq();
	this.stk[this.ptr++]=$f25;
	var t37=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t37.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="binval";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=Infinity;
	this.xget("barcode");
	this.stk[this.ptr++]=20;
	this.xget("barlen");
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f26;
	var t38=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t38);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.xget("bigadd");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="binval";
	this.stk[this.ptr++]=Infinity;
	this.xget("binval");
	this.stk[this.ptr++]=$f27;
	var t39=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t39);
	this.xget("barcode");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="binval";
	this.stk[this.ptr++]=Infinity;
	this.xget("binval");
	this.stk[this.ptr++]=$f28;
	var t40=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t40);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("barcode");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.xget("bigadd");
	this.stk[this.ptr++]=10;
	this.xget("normalize");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="binval";
	this.stk[this.ptr++]=Infinity;
	this.xget("binval");
	this.stk[this.ptr++]=$f29;
	var t41=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t41);
	this.xget("barcode");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr++]=18;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=$f30;
	var t42=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t42);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bytes";
	this.stk[this.ptr++]=13;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bintmp";
	this.stk[this.ptr++]=Infinity;
	this.xget("binval");
	this.stk[this.ptr++]=$f31;
	var t43=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t43);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=12;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f33;
	var t53=this.stk[--this.ptr];
	var t51=this.stk[--this.ptr];
	var t50=this.stk[--this.ptr];
	var t49=this.stk[--this.ptr];
	for (var t52=t49; t50<0 ? t52>=t51 : t52<=t51; t52+=t50) {
		this.stk[this.ptr++]=t52;
		if (t53.call(this)==-1) break;
	}
	this.stk[this.ptr++]="fcs";
	this.stk[this.ptr++]=2047;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dat";
	this.xget("bytes");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]=5;
	if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
	else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=6;
	this.stk[this.ptr++]=$f36;
	var t58=this.stk[--this.ptr];
	var t56=this.stk[--this.ptr];
	for (var t57=0; t57<t56; t57++) {
		if (t58.call(this)==-1) break;
	}
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=12;
	this.stk[this.ptr++]=$f40;
	var t68=this.stk[--this.ptr];
	var t66=this.stk[--this.ptr];
	var t65=this.stk[--this.ptr];
	var t64=this.stk[--this.ptr];
	for (var t67=t64; t65<0 ? t67>=t66 : t67<=t66; t67+=t65) {
		this.stk[this.ptr++]=t67;
		if (t68.call(this)==-1) break;
	}
	this.stk[this.ptr++]="codewords";
	this.stk[this.ptr++]=10;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=9;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f44;
	var t80=this.stk[--this.ptr];
	var t78=this.stk[--this.ptr];
	var t77=this.stk[--this.ptr];
	var t76=this.stk[--this.ptr];
	for (var t79=t76; t77<0 ? t79>=t78 : t79<=t78; t79+=t77) {
		this.stk[this.ptr++]=t79;
		if (t80.call(this)==-1) break;
	}
	this.xget("codewords");
	this.stk[this.ptr++]=9;
	this.xget("codewords");
	this.stk[this.ptr++]=9;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.xget("fcs");
	this.stk[this.ptr++]=1024;
	this.and();
	this.stk[this.ptr++]=0;
	this.ne();
	this.stk[this.ptr++]=$f45;
	var t81=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t81.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="tab513";
	this.stk[this.ptr++]=BWIPJS.psarray([31,7936,47,7808,55,7552,59,7040,61,6016,62,3968,79,7744,87,7488,91,6976,93,5952,94,3904,103,7360,107,6848,109,5824,110,3776,115,6592,117,5568,118,3520,121,5056,122,3008,124,1984,143,7712,151,7456,155,6944,157,5920,158,3872,167,7328,171,6816,173,5792,174,3744,179,6560,181,5536,182,3488,185,5024,186,2976,188,1952,199,7264,203,6752,205,5728,206,3680,211,6496,213,5472,214,3424,217,4960,218,2912,220,1888,227,6368,229,5344,230,3296,233,4832,234,2784,236,1760,241,4576,242,2528,244,1504,248,992,271,7696,279,7440,283,6928,285,5904,286,3856,295,7312,299,6800,301,5776,302,3728,307,6544,309,5520,310,3472,313,5008,314,2960,316,1936,327,7248,331,6736,333,5712,334,3664,339,6480,341,5456,342,3408,345,4944,346,2896,348,1872,355,6352,357,5328,358,3280,361,4816,362,2768,364,1744,369,4560,370,2512,372,1488,376,976,391,7216,395,6704,397,5680,398,3632,403,6448,405,5424,406,3376,409,4912,410,2864,412,1840,419,6320,421,5296,422,3248,425,4784,426,2736,428,1712,433,4528,434,2480,436,1456,440,944,451,6256,453,5232,454,3184,457,4720,458,2672,460,1648,465,4464,466,2416,468,1392,472,880,481,4336,482,2288,484,1264,488,752,527,7688,535,7432,539,6920,541,5896,542,3848,551,7304,555,6792,557,5768,558,3720,563,6536,565,5512,566,3464,569,5000,570,2952,572,1928,583,7240,587,6728,589,5704,590,3656,595,6472,597,5448,598,3400,601,4936,602,2888,604,1864,611,6344,613,5320,614,3272,617,4808,618,2760,620,1736,625,4552,626,2504,628,1480,632,968,647,7208,651,6696,653,5672,654,3624,659,6440,661,5416,662,3368,665,4904,666,2856,668,1832,675,6312,677,5288,678,3240,681,4776,682,2728,684,1704,689,4520,690,2472,692,1448,696,936,707,6248,709,5224,710,3176,713,4712,714,2664,716,1640,721,4456,722,2408,724,1384,728,872,737,4328,738,2280,740,1256,775,7192,779,6680,781,5656,782,3608,787,6424,789,5400,790,3352,793,4888,794,2840,796,1816,803,6296,805,5272,806,3224,809,4760,810,2712,812,1688,817,4504,818,2456,820,1432,824,920,835,6232,837,5208,838,3160,841,4696,842,2648,844,1624,849,4440,850,2392,852,1368,865,4312,866,2264,868,1240,899,6200,901,5176,902,3128,905,4664,906,2616,908,1592,913,4408,914,2360,916,1336,929,4280,930,2232,932,1208,961,4216,962,2168,964,1144,1039,7684,1047,7428,1051,6916,1053,5892,1054,3844,1063,7300,1067,6788,1069,5764,1070,3716,1075,6532,1077,5508,1078,3460,1081,4996,1082,2948,1084,1924,1095,7236,1099,6724,1101,5700,1102,3652,1107,6468,1109,5444,1110,3396,1113,4932,1114,2884,1116,1860,1123,6340,1125,5316,1126,3268,1129,4804,1130,2756,1132,1732,1137,4548,1138,2500,1140,1476,1159,7204,1163,6692,1165,5668,1166,3620,1171,6436,1173,5412,1174,3364,1177,4900,1178,2852,1180,1828,1187,6308,1189,5284,1190,3236,1193,4772,1194,2724,1196,1700,1201,4516,1202,2468,1204,1444,1219,6244,1221,5220,1222,3172,1225,4708,1226,2660,1228,1636,1233,4452,1234,2404,1236,1380,1249,4324,1250,2276,1287,7188,1291,6676,1293,5652,1294,3604,1299,6420,1301,5396,1302,3348,1305,4884,1306,2836,1308,1812,1315,6292,1317,5268,1318,3220,1321,4756,1322,2708,1324,1684,1329,4500,1330,2452,1332,1428,1347,6228,1349,5204,1350,3156,1353,4692,1354,2644,1356,1620,1361,4436,1362,2388,1377,4308,1378,2260,1411,6196,1413,5172,1414,3124,1417,4660,1418,2612,1420,1588,1425,4404,1426,2356,1441,4276,1442,2228,1473,4212,1474,2164,1543,7180,1547,6668,1549,5644,1550,3596,1555,6412,1557,5388,1558,3340,1561,4876,1562,2828,1564,1804,1571,6284,1573,5260,1574,3212,1577,4748,1578,2700,1580,1676,1585,4492,1586,2444,1603,6220,1605,5196,1606,3148,1609,4684,1610,2636,1617,4428,1618,2380,1633,4300,1634,2252,1667,6188,1669,5164,1670,3116,1673,4652,1674,2604,1681,4396,1682,2348,1697,4268,1698,2220,1729,4204,1730,2156,1795,6172,1797,5148,1798,3100,1801,4636,1802,2588,1809,4380,1810,2332,1825,4252,1826,2204,1857,4188,1858,2140,1921,4156,1922,2108,2063,7682,2071,7426,2075,6914,2077,5890,2078,3842,2087,7298,2091,6786,2093,5762,2094,3714,2099,6530,2101,5506,2102,3458,2105,4994,2106,2946,2119,7234,2123,6722,2125,5698,2126,3650,2131,6466,2133,5442,2134,3394,2137,4930,2138,2882,2147,6338,2149,5314,2150,3266,2153,4802,2154,2754,2161,4546,2162,2498,2183,7202,2187,6690,2189,5666,2190,3618,2195,6434,2197,5410,2198,3362,2201,4898,2202,2850,2211,6306,2213,5282,2214,3234,2217,4770,2218,2722,2225,4514,2226,2466,2243,6242,2245,5218,2246,3170,2249,4706,2250,2658,2257,4450,2258,2402,2273,4322,2311,7186,2315,6674,2317,5650,2318,3602,2323,6418,2325,5394,2326,3346,2329,4882,2330,2834,2339,6290,2341,5266,2342,3218,2345,4754,2346,2706,2353,4498,2354,2450,2371,6226,2373,5202,2374,3154,2377,4690,2378,2642,2385,4434,2401,4306,2435,6194,2437,5170,2438,3122,2441,4658,2442,2610,2449,4402,2465,4274,2497,4210,2567,7178,2571,6666,2573,5642,2574,3594,2579,6410,2581,5386,2582,3338,2585,4874,2586,2826,2595,6282,2597,5258,2598,3210,2601,4746,2602,2698,2609,4490,2627,6218,2629,5194,2630,3146,2633,4682,2641,4426,2657,4298,2691,6186,2693,5162,2694,3114,2697,4650,2705,4394,2721,4266,2753,4202,2819,6170,2821,5146,2822,3098,2825,4634,2833,4378,2849,4250,2881,4186,2945,4154,3079,7174,3083,6662,3085,5638,3086,3590,3091,6406,3093,5382,3094,3334,3097,4870,3107,6278,3109,5254,3110,3206,3113,4742,3121,4486,3139,6214,3141,5190,3145,4678,3153,4422,3169,4294,3203,6182,3205,5158,3209,4646,3217,4390,3233,4262,3265,4198,3331,6166,3333,5142,3337,4630,3345,4374,3361,4246,3393,4182,3457,4150,3587,6158,3589,5134,3593,4622,3601,4366,3617,4238,3649,4174,3713,4142,3841,4126,4111,7681,4119,7425,4123,6913,4125,5889,4135,7297,4139,6785,4141,5761,4147,6529,4149,5505,4153,4993,4167,7233,4171,6721,4173,5697,4179,6465,4181,5441,4185,4929,4195,6337,4197,5313,4201,4801,4209,4545,4231,7201,4235,6689,4237,5665,4243,6433,4245,5409,4249,4897,4259,6305,4261,5281,4265,4769,4273,4513,4291,6241,4293,5217,4297,4705,4305,4449,4359,7185,4363,6673,4365,5649,4371,6417,4373,5393,4377,4881,4387,6289,4389,5265,4393,4753,4401,4497,4419,6225,4421,5201,4425,4689,4483,6193,4485,5169,4489,4657,4615,7177,4619,6665,4621,5641,4627,6409,4629,5385,4633,4873,4643,6281,4645,5257,4649,4745,4675,6217,4677,5193,4739,6185,4741,5161,4867,6169,4869,5145,5127,7173,5131,6661,5133,5637,5139,6405,5141,5381,5155,6277,5157,5253,5187,6213,5251,6181,5379,6165,5635,6157,6151,7171,6155,6659,6163,6403,6179,6275,6211,5189,4681,4433,4321,3142,2634,2386,2274,1612,1364,1252,856,744,496]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="tab213";
	this.stk[this.ptr++]=BWIPJS.psarray([3,6144,5,5120,6,3072,9,4608,10,2560,12,1536,17,4352,18,2304,20,1280,24,768,33,4224,34,2176,36,1152,40,640,48,384,65,4160,66,2112,68,1088,72,576,80,320,96,192,129,4128,130,2080,132,1056,136,544,144,288,257,4112,258,2064,260,1040,264,528,513,4104,514,2056,516,1032,1025,4100,1026,2052,2049,4098,4097,2050,1028,520,272,160]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="chars";
	this.stk[this.ptr++]=10;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=9;
	this.stk[this.ptr++]=$f48;
	var t90=this.stk[--this.ptr];
	var t88=this.stk[--this.ptr];
	var t87=this.stk[--this.ptr];
	var t86=this.stk[--this.ptr];
	for (var t89=t86; t87<0 ? t89>=t88 : t89<=t88; t89+=t87) {
		this.stk[this.ptr++]=t89;
		if (t90.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f50;
	var t96=this.stk[--this.ptr];
	var t94=this.stk[--this.ptr];
	var t93=this.stk[--this.ptr];
	var t92=this.stk[--this.ptr];
	for (var t95=t92; t93<0 ? t95>=t94 : t95<=t94; t95+=t93) {
		this.stk[this.ptr++]=t95;
		if (t96.call(this)==-1) break;
	}
	this.stk[this.ptr++]="barmap";
	this.stk[this.ptr++]=BWIPJS.psarray([7,2,4,3,1,10,0,0,9,12,2,8,5,5,6,11,8,9,3,1,0,1,5,12,2,5,1,8,4,4,9,11,6,3,8,10,3,9,7,6,5,11,1,4,8,5,2,12,9,10,0,2,7,1,6,7,3,6,4,9,0,3,8,6,6,4,2,7,1,1,9,9,7,10,5,2,4,0,3,8,6,2,0,4,8,11,1,0,9,8,3,12,2,6,7,7,5,1,4,10,1,12,6,9,7,3,8,0,5,8,9,7,4,6,2,10,3,4,0,5,8,4,5,7,7,11,1,9,6,0,9,6,0,6,4,8,2,1,3,2,5,9,8,12,4,11,6,1,9,5,7,4,3,3,1,2,0,7,2,0,1,3,4,1,6,10,3,5,8,7,9,4,2,11,5,6,0,8,7,12,4,2,8,1,5,10,3,0,9,3,0,9,6,5,2,4,7,8,1,7,5,0,4,5,2,3,0,10,6,12,9,2,3,11,1,6,8,8,7,9,5,4,0,11,1,5,2,2,9,1,4,12,8,3,6,6,7,0,3,7,4,7,7,5,0,12,1,11,2,9,9,0,6,8,5,3,3,10,8,2]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bbs";
	this.stk[this.ptr++]=65;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bhs";
	this.stk[this.ptr++]=65;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=64;
	this.stk[this.ptr++]=$f55;
	var t105=this.stk[--this.ptr];
	var t103=this.stk[--this.ptr];
	var t102=this.stk[--this.ptr];
	var t101=this.stk[--this.ptr];
	for (var t104=t101; t102<0 ? t104>=t103 : t104<=t103; t104+=t102) {
		this.stk[this.ptr++]=t104;
		if (t105.call(this)==-1) break;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	this.stk[this.ptr++]=this.get("renlinear");
	this.stk[this.ptr++]="bbs";
	this.xget("bbs");
	this.stk[this.ptr++]="bhs";
	this.xget("bhs");
	this.stk[this.ptr++]="sbs";
	this.stk[this.ptr++]=Infinity;
	this.xget("bhs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f56;
	var t108=this.stk[--this.ptr];
	var t106=this.stk[--this.ptr];
	for (var t107=0; t107<t106; t107++) {
		if (t108.call(this)==-1) break;
	}
	this.stk[this.ptr++]=1.44;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]="txt";
	this.xget("txt");
	this.stk[this.ptr++]="textxalign";
	this.stk[this.ptr++]=BWIPJS.psstring("left");
	this.stk[this.ptr++]="textfont";
	this.stk[this.ptr++]="Helvetica";
	this.stk[this.ptr++]="textyoffset";
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]="textxoffset";
	this.stk[this.ptr++]=-0.3;
	this.stk[this.ptr++]="opt";
	this.xget("options");
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.xget("dontdraw");
	this.not();
	this.stk[this.ptr++]=this.get("renlinear");
	var t109=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t109.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("onecode");
// END OF onecode

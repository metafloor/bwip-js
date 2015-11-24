// file: bwipp/databarexpanded.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN databarexpanded
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("databarexpanded", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("databarexpanded", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("databarexpanded", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
BWIPJS.bwipp["databarexpanded"]=function() {
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
		this.stk[this.ptr++]=22;
	}
	function $f8(){
		this.stk[this.ptr++]="segments";
		this.xget("format");
		this.stk[this.ptr++]=BWIPJS.psstring("expandedstacked");
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
		this.stk[this.ptr++]=BWIPJS.psstring("0100");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f18(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("9");
		this.eq();
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("3103");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=32767;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f17;
		var t22=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t22.call(this)==-1) return -1;
		}
	}
	function $f19(){
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.eq();
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("3103");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f18;
		var t23=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t23.call(this)==-1) return -1;
		}
	}
	function $f20(){
		this.stk[this.ptr++]=BWIPJS.psstring("0101");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f21(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("9");
		this.eq();
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("3202");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=9999;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f20;
		var t25=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t25.call(this)==-1) return -1;
		}
	}
	function $f22(){
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.eq();
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("3202");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f21;
		var t26=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t26.call(this)==-1) return -1;
		}
	}
	function $f23(){
		this.stk[this.ptr++]=BWIPJS.psstring("0101");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f24(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("9");
		this.eq();
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("3203");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=22767;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f23;
		var t28=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t28.call(this)==-1) return -1;
		}
	}
	function $f25(){
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.eq();
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("3203");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f24;
		var t29=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t29.call(this)==-1) return -1;
		}
	}
	function $f26(){
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.eq();
		this.or();
	}
	function $f27(){
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.eq();
		this.or();
	}
	function $f28(){
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.ne();
		this.and();
	}
	function $f29(){
		this.stk[this.ptr++]="aibad";
		this.stk[this.ptr++]=true;
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("11"),BWIPJS.psstring("13"),BWIPJS.psstring("15"),BWIPJS.psstring("17")]);
		this.stk[this.ptr++]=$f28;
		var t41=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t41);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f30(){
		this.stk[this.ptr++]="aibad";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f31(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111000");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f32(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111001");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f33(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111010");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f34(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111011");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f35(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111100");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f36(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111101");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f37(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111110");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f38(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111111");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f39(){
		this.xget("ai310x");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f31;
		var t44=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t44.call(this)==-1) return -1;
		}
		this.xget("ai320x");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("11");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f32;
		var t45=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t45.call(this)==-1) return -1;
		}
		this.xget("ai310x");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("13");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f33;
		var t46=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t46.call(this)==-1) return -1;
		}
		this.xget("ai320x");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("13");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f34;
		var t47=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t47.call(this)==-1) return -1;
		}
		this.xget("ai310x");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("15");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f35;
		var t48=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t48.call(this)==-1) return -1;
		}
		this.xget("ai320x");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("15");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f36;
		var t49=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t49.call(this)==-1) return -1;
		}
		this.xget("ai310x");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("17");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f37;
		var t50=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t50.call(this)==-1) return -1;
		}
		this.xget("ai320x");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("17");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f38;
		var t51=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t51.call(this)==-1) return -1;
		}
	}
	function $f40(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("9");
		this.eq();
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=99999;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=999999;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f39;
		var t52=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t52.call(this)==-1) return -1;
		}
	}
	function $f41(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111000");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f42(){
		this.stk[this.ptr++]=BWIPJS.psstring("0111001");
		this.stk[this.ptr++]=false;
		return -1;
	}
	function $f43(){
		this.xget("ai310x");
		this.stk[this.ptr++]=$f41;
		var t53=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t53.call(this)==-1) return -1;
		}
		this.xget("ai320x");
		this.stk[this.ptr++]=$f42;
		var t54=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t54.call(this)==-1) return -1;
		}
	}
	function $f44(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("9");
		this.eq();
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=99999;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f43;
		var t55=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t55.call(this)==-1) return -1;
		}
	}
	function $f45(){
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.eq();
		this.stk[this.ptr++]=$f40;
		this.stk[this.ptr++]=$f44;
		var t56=this.stk[--this.ptr];
		var t57=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t57.call(this)==-1) return -1;
		} else {
			if (t56.call(this)==-1) return -1;
		}
	}
	function $f46(){
		this.stk[this.ptr++]="ai310x";
		this.stk[this.ptr++]=false;
		this.stk[this.ptr++]=3100;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=3109;
		this.stk[this.ptr++]=$f26;
		var t35=this.stk[--this.ptr];
		var t33=this.stk[--this.ptr];
		var t32=this.stk[--this.ptr];
		var t31=this.stk[--this.ptr];
		for (var t34=t31; t32<0 ? t34>=t33 : t34<=t33; t34+=t32) {
			this.stk[this.ptr++]=t34;
			if (t35.call(this)==-1) break;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ai320x";
		this.stk[this.ptr++]=false;
		this.stk[this.ptr++]=3200;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=3209;
		this.stk[this.ptr++]=$f27;
		var t40=this.stk[--this.ptr];
		var t38=this.stk[--this.ptr];
		var t37=this.stk[--this.ptr];
		var t36=this.stk[--this.ptr];
		for (var t39=t36; t37<0 ? t39>=t38 : t39<=t38; t39+=t37) {
			this.stk[this.ptr++]=t39;
			if (t40.call(this)==-1) break;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.eq();
		this.stk[this.ptr++]=$f29;
		this.stk[this.ptr++]=$f30;
		var t42=this.stk[--this.ptr];
		var t43=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t43.call(this)==-1) return -1;
		} else {
			if (t42.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.eq();
		this.xget("ai310x");
		this.xget("ai320x");
		this.or();
		this.and();
		this.xget("aibad");
		this.not();
		this.and();
		this.stk[this.ptr++]=$f45;
		var t58=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t58.call(this)==-1) return -1;
		}
	}
	function $f47(){
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.eq();
		this.or();
	}
	function $f48(){
		this.stk[this.ptr++]=BWIPJS.psstring("01100");
		this.stk[this.ptr++]=true;
		return -1;
	}
	function $f49(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("9");
		this.eq();
		this.stk[this.ptr++]=$f48;
		var t65=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t65.call(this)==-1) return -1;
		}
	}
	function $f50(){
		this.stk[this.ptr++]="ai392x";
		this.stk[this.ptr++]=false;
		this.stk[this.ptr++]=3920;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=3923;
		this.stk[this.ptr++]=$f47;
		var t64=this.stk[--this.ptr];
		var t62=this.stk[--this.ptr];
		var t61=this.stk[--this.ptr];
		var t60=this.stk[--this.ptr];
		for (var t63=t60; t61<0 ? t63>=t62 : t63<=t62; t63+=t61) {
			this.stk[this.ptr++]=t63;
			if (t64.call(this)==-1) break;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.eq();
		this.xget("ai392x");
		this.and();
		this.stk[this.ptr++]=$f49;
		var t66=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t66.call(this)==-1) return -1;
		}
	}
	function $f51(){
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.eq();
		this.or();
	}
	function $f52(){
		this.stk[this.ptr++]=BWIPJS.psstring("01101");
		this.stk[this.ptr++]=true;
		return -1;
	}
	function $f53(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=BWIPJS.psstring("9");
		this.eq();
		this.stk[this.ptr++]=$f52;
		var t73=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t73.call(this)==-1) return -1;
		}
	}
	function $f54(){
		this.stk[this.ptr++]="ai393x";
		this.stk[this.ptr++]=false;
		this.stk[this.ptr++]=3930;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=3933;
		this.stk[this.ptr++]=$f51;
		var t72=this.stk[--this.ptr];
		var t70=this.stk[--this.ptr];
		var t69=this.stk[--this.ptr];
		var t68=this.stk[--this.ptr];
		for (var t71=t68; t69<0 ? t71>=t70 : t71<=t70; t71+=t69) {
			this.stk[this.ptr++]=t71;
			if (t72.call(this)==-1) break;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.eq();
		this.xget("ai393x");
		this.and();
		this.stk[this.ptr++]=$f53;
		var t74=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t74.call(this)==-1) return -1;
		}
	}
	function $f55(){
		this.stk[this.ptr++]=BWIPJS.psstring("1");
		this.stk[this.ptr++]=true;
		return -1;
	}
	function $f56(){
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.eq();
		this.stk[this.ptr++]=$f19;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.eq();
		this.stk[this.ptr++]=$f22;
		var t27=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t27.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.eq();
		this.stk[this.ptr++]=$f25;
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.eq();
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=3;
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f46;
		var t59=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t59.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f50;
		var t67=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t67.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f54;
		var t75=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t75.call(this)==-1) return -1;
		}
		this.xget("ais");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.eq();
		this.stk[this.ptr++]=$f55;
		var t76=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t76.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=BWIPJS.psstring("00");
		this.stk[this.ptr++]=true;
		return -1;
	}
	function $f57(){
		this.stk[this.ptr++]=BWIPJS.psstring("0000000000000000000000000000000000000000");
		this.stk[this.ptr++]=40;
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
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
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
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
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
		this.stk[this.ptr++]=20;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
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
		this.stk[this.ptr++]=30;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
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
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f58(){
		this.stk[this.ptr++]=BWIPJS.psstring("00000000000000000000000000000000000000000000");
		this.stk[this.ptr++]=44;
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
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
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
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t79=this.stk[--this.ptr];
		var t78=this.stk[--this.ptr];
		if (t79 < 0) t=this.stk.splice(this.ptr-t78, -t79);
		else t=this.stk.splice(this.ptr-t78, t78-t79);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("conv12to40");
		this.stk[this.ptr++]=4;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f59(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f60(){
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f59;
		var t84=this.stk[--this.ptr];
		var t82=this.stk[--this.ptr];
		var t81=this.stk[--this.ptr];
		var t80=this.stk[--this.ptr];
		for (var t83=t80; t81<0 ? t83>=t82 : t83<=t82; t83+=t81) {
			this.stk[this.ptr++]=t83;
			if (t84.call(this)==-1) break;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t86=this.stk[--this.ptr];
		var t85=this.stk[--this.ptr];
		if (t86 < 0) t=this.stk.splice(this.ptr-t85, -t86);
		else t=this.stk.splice(this.ptr-t85, t85-t86);
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
	function $f61(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f62(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f63(){
		this.stk[this.ptr++]="cdf";
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("conv13to44");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		this.stk[this.ptr++]=$f62;
		var t88=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t88);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
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
	function $f64(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f65(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=55;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cdf");
		this.stk[this.ptr++]=0;
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("conv12to40");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("cdf");
		this.stk[this.ptr++]=40;
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("3103");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=15;
		this.xget("tobin");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		this.stk[this.ptr++]=$f64;
		var t90=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t90);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ais";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f66(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("3202");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=15;
		this.xget("tobin");
	}
	function $f67(){
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("3203");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=10000;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=15;
		this.xget("tobin");
	}
	function $f68(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f69(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=55;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cdf");
		this.stk[this.ptr++]=0;
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("conv12to40");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("3202");
		this.eq();
		this.stk[this.ptr++]=$f66;
		this.stk[this.ptr++]=$f67;
		var t92=this.stk[--this.ptr];
		var t93=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t93.call(this)==-1) return -1;
		} else {
			if (t92.call(this)==-1) return -1;
		}
		this.xget("cdf");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=40;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		this.stk[this.ptr++]=$f68;
		var t94=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t94);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ais";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f70(){
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=2;
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
	}
	function $f71(){
		this.stk[this.ptr++]=38400;
	}
	function $f72(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f73(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=76;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cdf");
		this.stk[this.ptr++]=0;
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("conv12to40");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=20;
		this.xget("tobin");
		this.xget("cdf");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=40;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.eq();
		this.stk[this.ptr++]=$f70;
		this.stk[this.ptr++]=$f71;
		var t96=this.stk[--this.ptr];
		var t97=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t97.call(this)==-1) return -1;
		} else {
			if (t96.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=16;
		this.xget("tobin");
		this.xget("cdf");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=60;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		this.stk[this.ptr++]=$f72;
		var t98=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t98);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ais";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f74(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f75(){
	}
	function $f76(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=42;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cdf");
		this.stk[this.ptr++]=0;
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("conv12to40");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("cdf");
		this.stk[this.ptr++]=40;
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=2;
		this.xget("tobin");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		this.stk[this.ptr++]=$f74;
		var t100=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t100);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=Infinity;
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f75;
		var t101=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t101);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ais";
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f77(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f78(){
	}
	function $f79(){
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cdf");
		this.stk[this.ptr++]=0;
		this.xget("aival");
		this.stk[this.ptr++]=BWIPJS.psstring("01");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("conv12to40");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("cdf");
		this.stk[this.ptr++]=40;
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=2;
		this.xget("tobin");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("cdf");
		this.stk[this.ptr++]=42;
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=10;
		this.xget("tobin");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="cdf";
		this.stk[this.ptr++]=Infinity;
		this.xget("cdf");
		this.stk[this.ptr++]=$f77;
		var t103=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t103);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gpf";
		this.stk[this.ptr++]=Infinity;
		this.xget("aival");
		this.xget("ais");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f78;
		var t104=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t104);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ais";
		this.xget("ais");
		this.stk[this.ptr++]=2;
		this.xget("ais");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f80(){
		this.stk[this.ptr++]="vlf";
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f81(){
		this.stk[this.ptr++]="vlf";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f82(){
	}
	function $f83(){
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
		var t114=this.stk[--this.ptr];
		var t113=this.stk[--this.ptr];
		if (t114 < 0) t=this.stk.splice(this.ptr-t113, -t114);
		else t=this.stk.splice(this.ptr-t113, t113-t114);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("aifixed");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t116=this.stk[--this.ptr];
		var t115=this.stk[--this.ptr];
		if (t116 < 0) t=this.stk.splice(this.ptr-t115, -t116);
		else t=this.stk.splice(this.ptr-t115, t115-t116);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f84(){
	}
	function $f85(){
	}
	function $f86(){
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
		var t129=this.stk[--this.ptr];
		var t128=this.stk[--this.ptr];
		if (t129 < 0) t=this.stk.splice(this.ptr-t128, -t129);
		else t=this.stk.splice(this.ptr-t128, t128-t129);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f87(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=94;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f88(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=94;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f89(){
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
		var t132=this.stk[--this.ptr];
		var t131=this.stk[--this.ptr];
		if (t132 < 0) t=this.stk.splice(this.ptr-t131, -t132);
		else t=this.stk.splice(this.ptr-t131, t131-t132);
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
		this.stk[this.ptr++]=$f87;
		var t133=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t133.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=65;
		this.eq();
		this.stk[this.ptr++]=$f88;
		var t134=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t134.call(this)==-1) return -1;
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
		var t136=this.stk[--this.ptr];
		var t135=this.stk[--this.ptr];
		if (t136 < 0) t=this.stk.splice(this.ptr-t135, -t136);
		else t=this.stk.splice(this.ptr-t135, t135-t136);
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
	function $f90(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=43;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.xget("tobin");
	}
	function $f91(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=33;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.xget("tobin");
	}
	function $f92(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=15;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.xget("tobin");
	}
	function $f93(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=43;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.xget("tobin");
	}
	function $f94(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.xget("tobin");
	}
	function $f95(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.xget("tobin");
	}
	function $f96(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=197;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.xget("tobin");
	}
	function $f97(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=187;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.xget("tobin");
	}
	function $f98(){
	}
	function $f99(){
	}
	function $f100(){
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
	function $f101(){
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
		this.stk[this.ptr++]=$f98;
		var t182=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t182);
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
		this.stk[this.ptr++]=$f99;
		var t183=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t183);
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
		this.stk[this.ptr++]=$f100;
		var t184=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t184.call(this)==-1) return -1;
		}
	}
	function $f102(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f103(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f104(){
		this.ptr--;
	}
	function $f105(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=Math.ceil(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=48;
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
		this.stk[this.ptr++]=$f102;
		var t190=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t190.call(this)==-1) return -1;
		}
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("segments");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.eq();
		this.stk[this.ptr++]=$f103;
		this.stk[this.ptr++]=$f104;
		var t191=this.stk[--this.ptr];
		var t192=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t192.call(this)==-1) return -1;
		} else {
			if (t191.call(this)==-1) return -1;
		}
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f106(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f107(){
		this.ptr--;
	}
	function $f108(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f109(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]="raw";
		this.ne();
		this.stk[this.ptr++]=$f106;
		this.stk[this.ptr++]=$f107;
		var t193=this.stk[--this.ptr];
		var t194=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t194.call(this)==-1) return -1;
		} else {
			if (t193.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f108;
		var t195=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t195);
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
	function $f110(){
		this.stk[this.ptr++]=0;
	}
	function $f111(){
		this.stk[this.ptr++]=0;
	}
	function $f112(){
		this.stk[this.ptr++]=0;
	}
	function $f113(){
		this.ptr--;
		this.stk[this.ptr++]=94;
	}
	function $f114(){
		this.ptr--;
		this.stk[this.ptr++]=94;
	}
	function $f115(){
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
		this.stk[this.ptr++]=$f114;
		var t206=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t206.call(this)==-1) return -1;
		}
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f116(){
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
	function $f117(){
		this.xget("numericruns");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f118(){
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
	function $f119(){
		this.xget("alphanumericruns");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f120(){
		this.xget("nextiso646only");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f121(){
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
	function $f122(){
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
		this.stk[this.ptr++]=$f113;
		var t205=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t205.call(this)==-1) return -1;
		}
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("i");
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f115;
		var t207=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t207.call(this)==-1) return -1;
		}
		this.xget("numeric");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f116;
		this.stk[this.ptr++]=$f117;
		var t208=this.stk[--this.ptr];
		var t209=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t209.call(this)==-1) return -1;
		} else {
			if (t208.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("alphanumeric");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f118;
		this.stk[this.ptr++]=$f119;
		var t210=this.stk[--this.ptr];
		var t211=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t211.call(this)==-1) return -1;
		} else {
			if (t210.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f120;
		this.stk[this.ptr++]=$f121;
		var t212=this.stk[--this.ptr];
		var t213=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t213.call(this)==-1) return -1;
		} else {
			if (t212.call(this)==-1) return -1;
		}
	}
	function $f123(){
		return -1;
	}
	function $f124(){
		this.ptr--;
		this.stk[this.ptr++]=94;
	}
	function $f125(){
		this.ptr--;
		this.stk[this.ptr++]=94;
	}
	function $f126(){
		this.xget("numeric");
		this.xget("encode");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f127(){
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
		this.stk[this.ptr++]=$f124;
		var t220=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t220.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f125;
		var t221=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t221.call(this)==-1) return -1;
		}
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("numeric");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f126;
		var t222=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t222.call(this)==-1) return -1;
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
	function $f128(){
		this.xget("lalphanumeric");
		this.xget("numeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f129(){
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
	function $f130(){
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
	function $f131(){
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
		this.stk[this.ptr++]=$f128;
		var t223=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t223.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="rem";
		this.stk[this.ptr++]=12;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("method");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("vlf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("cdf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
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
		this.stk[this.ptr++]=$f129;
		this.stk[this.ptr++]=$f130;
		var t224=this.stk[--this.ptr];
		var t225=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t225.call(this)==-1) return -1;
		} else {
			if (t224.call(this)==-1) return -1;
		}
	}
	function $f132(){
		this.xget("i");
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f127;
		this.stk[this.ptr++]=$f131;
		var t226=this.stk[--this.ptr];
		var t227=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t227.call(this)==-1) return -1;
		} else {
			if (t226.call(this)==-1) return -1;
		}
	}
	function $f133(){
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
	function $f134(){
		this.xget("liso646");
		this.xget("alphanumeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("iso646");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f135(){
		this.xget("lnumeric");
		this.xget("alphanumeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f136(){
		this.xget("lnumeric");
		this.xget("alphanumeric");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f137(){
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fnc1");
		this.eq();
		this.stk[this.ptr++]=$f133;
		var t229=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t229.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f134;
		var t230=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t230.call(this)==-1) return -1;
		}
		this.xget("numericruns");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f135;
		var t231=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t231.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f136;
		var t232=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t232.call(this)==-1) return -1;
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
	function $f138(){
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
	function $f139(){
		this.xget("lnumeric");
		this.xget("iso646");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f140(){
		this.xget("lalphanumeric");
		this.xget("iso646");
		this.xget("encode");
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f141(){
		this.xget("gpf");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fnc1");
		this.eq();
		this.stk[this.ptr++]=$f138;
		var t234=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t234.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f139;
		var t235=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t235.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f140;
		var t236=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t236.call(this)==-1) return -1;
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
	function $f142(){
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.eq();
		this.stk[this.ptr++]=$f132;
		var t228=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t228.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("alphanumeric");
		this.eq();
		this.stk[this.ptr++]=$f137;
		var t233=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t233.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("iso646");
		this.eq();
		this.stk[this.ptr++]=$f141;
		var t237=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t237.call(this)==-1) return -1;
		}
	}
	function $f143(){
		this.xget("i");
		this.xget("gpf");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.stk[this.ptr++]=$f123;
		var t219=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t219.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=$f142;
		var t238=this.stk[--this.ptr];
		while (t238.call(this)!=-1);
	}
	function $f144(){
		this.stk[this.ptr++]=0;
	}
	function $f145(){
		this.stk[this.ptr++]=1;
	}
	function $f146(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.xget("vlf");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]=14;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f144;
		this.stk[this.ptr++]=$f145;
		var t240=this.stk[--this.ptr];
		var t241=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t241.call(this)==-1) return -1;
		} else {
			if (t240.call(this)==-1) return -1;
		}
		this.xget("vlf");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f147(){
		this.ptr--;
		this.ptr--;
	}
	function $f148(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f149(){
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
		this.stk[this.ptr++]=$f148;
		var t244=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t244.call(this)==-1) return -1;
		}
		this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f150(){
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
	function $f151(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=5;
		this.xget("pad");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f149;
		var t249=this.stk[--this.ptr];
		var t247=this.stk[--this.ptr];
		var t246=this.stk[--this.ptr];
		var t245=this.stk[--this.ptr];
		for (var t248=t245; t246<0 ? t248>=t247 : t248<=t247; t248+=t246) {
			this.stk[this.ptr++]=t248;
			if (t249.call(this)==-1) break;
		}
		this.xget("mode");
		this.stk[this.ptr++]=BWIPJS.psstring("numeric");
		this.eq();
		this.stk[this.ptr++]=$f150;
		var t250=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t250.call(this)==-1) return -1;
		}
	}
	function $f152(){
		this.stk[this.ptr++]=1;
	}
	function $f153(){
		this.stk[this.ptr++]=0;
	}
	function $f154(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f155(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f156(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f157(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f156;
		var t258=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t258.call(this)==-1) return -1;
		}
	}
	function $f158(){
		return -1;
	}
	function $f159(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f158;
		var t264=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t264.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f160(){
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
		this.stk[this.ptr++]=$f155;
		var t255=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t255.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=3;
		var t257=this.stk[--this.ptr];
		var t256=this.stk[--this.ptr];
		if (t257 < 0) t=this.stk.splice(this.ptr-t256, -t257);
		else t=this.stk.splice(this.ptr-t256, t256-t257);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f157;
		var t263=this.stk[--this.ptr];
		var t261=this.stk[--this.ptr];
		var t260=this.stk[--this.ptr];
		var t259=this.stk[--this.ptr];
		for (var t262=t259; t260<0 ? t262>=t261 : t262<=t261; t262+=t260) {
			this.stk[this.ptr++]=t262;
			if (t263.call(this)==-1) break;
		}
		this.stk[this.ptr++]=$f159;
		var t265=this.stk[--this.ptr];
		while (t265.call(this)!=-1);
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f161(){
		this.stk[this.ptr++]="sval";
		this.xget("sval");
		this.xget("nm");
		this.xget("ew");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("el");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("bar");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("el");
		this.xget("bar");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("ncr");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f162(){
		this.xget("nm");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("ew");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("el");
		this.xget("bar");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("ncr");
		this.stk[this.ptr++]="lval";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("lval");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f163(){
		this.stk[this.ptr++]="lval";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("nm");
		this.xget("ew");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("el");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("bar");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.xget("mw");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f162;
		var t271=this.stk[--this.ptr];
		var t269=this.stk[--this.ptr];
		var t268=this.stk[--this.ptr];
		var t267=this.stk[--this.ptr];
		for (var t270=t267; t268<0 ? t270>=t269 : t270<=t269; t270+=t268) {
			this.stk[this.ptr++]=t270;
			if (t271.call(this)==-1) break;
		}
		this.stk[this.ptr++]="sval";
		this.xget("sval");
		this.xget("lval");
		this.xget("el");
		this.xget("bar");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f164(){
		this.stk[this.ptr++]="sval";
		this.xget("sval");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f165(){
		this.xget("nm");
		this.xget("ew");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("mw");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f164;
		var t272=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t272.call(this)==-1) return -1;
		}
	}
	function $f166(){
		return -1;
	}
	function $f167(){
		this.stk[this.ptr++]="sval";
		this.xget("nm");
		this.xget("ew");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("el");
		this.xget("bar");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("ncr");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("oe");
		this.xget("mask");
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
		this.xget("nm");
		this.xget("ew");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("el");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("bar");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f161;
		var t266=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t266.call(this)==-1) return -1;
		}
		this.xget("el");
		this.xget("bar");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f163;
		this.stk[this.ptr++]=$f165;
		var t273=this.stk[--this.ptr];
		var t274=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t274.call(this)==-1) return -1;
		} else {
			if (t273.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="val";
		this.xget("val");
		this.xget("sval");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("val");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f166;
		var t275=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t275.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="ew";
		this.xget("ew");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mask";
		this.xget("mask");
		this.stk[this.ptr++]=1;
		this.xget("bar");
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.not();
		this.and();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f168(){
		this.stk[this.ptr++]="bar";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ew";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mask";
		this.xget("mask");
		this.stk[this.ptr++]=1;
		this.xget("bar");
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.or();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f167;
		var t276=this.stk[--this.ptr];
		while (t276.call(this)!=-1);
		this.stk[this.ptr++]="val";
		this.xget("val");
		this.xget("sval");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nm";
		this.xget("nm");
		this.xget("ew");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("out");
		this.xget("bar");
		this.xget("ew");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f169(){
		this.stk[this.ptr++]="oe";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="el";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mw";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nm";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="val";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="out";
		this.xget("el");
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mask";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("el");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f168;
		var t281=this.stk[--this.ptr];
		var t279=this.stk[--this.ptr];
		var t278=this.stk[--this.ptr];
		var t277=this.stk[--this.ptr];
		for (var t280=t277; t278<0 ? t280>=t279 : t280<=t279; t280+=t278) {
			this.stk[this.ptr++]=t280;
			if (t281.call(this)==-1) break;
		}
		this.xget("out");
		this.xget("el");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("nm");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("out");
	}
	function $f170(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=11;
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.xget("d");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f171(){
	}
	function $f172(){
		this.xget("tab174");
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f171;
		var t287=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t287);
		this.stk[this.ptr++]="dte";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dto";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dmwe";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dmwo";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dele";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="delo";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dgs";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f173(){
		this.xget("d");
		this.xget("tab174");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f172;
		var t288=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t288.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f174(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("dw");
		this.stk[this.ptr++]=7;
		this.xget("j");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("dwo");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("dw");
		this.stk[this.ptr++]=6;
		this.xget("j");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("dwe");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f175(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f174;
		var t294=this.stk[--this.ptr];
		var t292=this.stk[--this.ptr];
		var t291=this.stk[--this.ptr];
		var t290=this.stk[--this.ptr];
		for (var t293=t290; t291<0 ? t293>=t292 : t293<=t292; t293+=t291) {
			this.stk[this.ptr++]=t293;
			if (t294.call(this)==-1) break;
		}
	}
	function $f176(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("dw");
		this.xget("j");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("dwo");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("dw");
		this.xget("j");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("dwe");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f177(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f176;
		var t299=this.stk[--this.ptr];
		var t297=this.stk[--this.ptr];
		var t296=this.stk[--this.ptr];
		var t295=this.stk[--this.ptr];
		for (var t298=t295; t296<0 ? t298>=t297 : t298<=t297; t298+=t296) {
			this.stk[this.ptr++]=t298;
			if (t299.call(this)==-1) break;
		}
	}
	function $f178(){
		this.stk[this.ptr++]="x";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d";
		this.xget("binval");
		this.xget("x");
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="d";
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=11;
		this.stk[this.ptr++]=$f170;
		var t286=this.stk[--this.ptr];
		var t284=this.stk[--this.ptr];
		var t283=this.stk[--this.ptr];
		var t282=this.stk[--this.ptr];
		for (var t285=t282; t283<0 ? t285>=t284 : t285<=t284; t285+=t283) {
			this.stk[this.ptr++]=t285;
			if (t286.call(this)==-1) break;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f173;
		var t289=this.stk[--this.ptr];
		while (t289.call(this)!=-1);
		this.stk[this.ptr++]="dwo";
		this.xget("d");
		this.xget("dgs");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("dte");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.xget("delo");
		this.xget("dmwo");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=true;
		this.xget("getRSSwidths");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dwe";
		this.xget("d");
		this.xget("dgs");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("dte");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.xget("dele");
		this.xget("dmwe");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=false;
		this.xget("getRSSwidths");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dw";
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("x");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f175;
		this.stk[this.ptr++]=$f177;
		var t300=this.stk[--this.ptr];
		var t301=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t301.call(this)==-1) return -1;
		} else {
			if (t300.call(this)==-1) return -1;
		}
		this.xget("dxw");
		this.xget("x");
		this.xget("dw");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f179(){
		this.stk[this.ptr++]="x";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("fxw");
		this.xget("x");
		this.xget("finderwidths");
		this.xget("seq");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f180(){
		this.stk[this.ptr++]=16;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("checkweights");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=16;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f181(){
	}
	function $f182(){
		this.stk[this.ptr++]=$f181;
		var t313=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t313);
	}
	function $f183(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="checksum";
		this.xget("checksum");
		this.xget("widths");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("checkweightseq");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f184(){
	}
	function $f185(){
		this.xget("tab174");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f184;
		var t320=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t320);
		this.stk[this.ptr++]="cte";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cto";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cmwe";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cmwo";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cele";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="celo";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cgs";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f186(){
		this.xget("checksum");
		this.xget("tab174");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f185;
		var t321=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t321.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f187(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cw");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("cwo");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("cw");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("cwe");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f188(){
		this.stk[this.ptr++]=0;
	}
	function $f189(){
	}
	function $f190(){
	}
	function $f191(){
		this.xget("fxw");
		this.xget("pos");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f190;
		var t330=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t330);
	}
	function $f192(){
		this.xget("dxw");
		this.xget("pos");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f189;
		var t329=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t329);
		this.xget("pos");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f191;
		var t331=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t331.call(this)==-1) return -1;
		}
	}
	function $f193(){
		this.stk[this.ptr++]="pos";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("r");
		this.xget("segments");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pos");
		this.xget("datalen");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f192;
		var t332=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t332.call(this)==-1) return -1;
		}
	}
	function $f194(){
		this.stk[this.ptr++]="r";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.xget("segments");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.ne();
		this.xget("r");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f188;
		var t328=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t328.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("segments");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f193;
		var t337=this.stk[--this.ptr];
		var t335=this.stk[--this.ptr];
		var t334=this.stk[--this.ptr];
		var t333=this.stk[--this.ptr];
		for (var t336=t333; t334<0 ? t336>=t335 : t336<=t335; t336+=t334) {
			this.stk[this.ptr++]=t336;
			if (t337.call(this)==-1) break;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-1];
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.xget("rows");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("r");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.ptr--;
	}
	function $f195(){
	}
	function $f196(){
	}
	function $f197(){
		this.xget("fxw");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f196;
		var t344=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t344);
	}
	function $f198(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("dxw");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f195;
		var t343=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t343);
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f197;
		var t345=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t345.call(this)==-1) return -1;
		}
	}
	function $f199(){
		this.xget("height");
	}
	function $f200(){
		this.stk[this.ptr++]=0;
	}
	function $f201(){
		this.stk[this.ptr++]="sbs";
		this.xget("rows");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sbs";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("datalen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f198;
		var t350=this.stk[--this.ptr];
		var t348=this.stk[--this.ptr];
		var t347=this.stk[--this.ptr];
		var t346=this.stk[--this.ptr];
		for (var t349=t346; t347<0 ? t349>=t348 : t349<=t348; t349+=t347) {
			this.stk[this.ptr++]=t349;
			if (t350.call(this)==-1) break;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="ren";
		this.stk[this.ptr++]=this.get("renlinear");
		this.stk[this.ptr++]="sbs";
		this.xget("sbs");
		this.stk[this.ptr++]="bhs";
		this.stk[this.ptr++]=Infinity;
		this.xget("sbs");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=$f199;
		var t353=this.stk[--this.ptr];
		var t351=this.stk[--this.ptr];
		for (var t352=0; t352<t351; t352++) {
			if (t353.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]="bbs";
		this.stk[this.ptr++]=Infinity;
		this.xget("sbs");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=$f200;
		var t356=this.stk[--this.ptr];
		var t354=this.stk[--this.ptr];
		for (var t355=0; t355<t354; t355++) {
			if (t356.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
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
		var t357=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t357.call(this)==-1) return -1;
		}
	}
	function $f202(){
		this.stk[this.ptr++]=0;
	}
	function $f203(){
		this.stk[this.ptr++]=1;
	}
	function $f204(){
		this.xget("row");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f203;
		var t363=this.stk[--this.ptr];
		var t361=this.stk[--this.ptr];
		for (var t362=0; t362<t361; t362++) {
			if (t363.call(this)==-1) break;
		}
	}
	function $f205(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("row");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f202;
		var t360=this.stk[--this.ptr];
		var t358=this.stk[--this.ptr];
		for (var t359=0; t359<t358; t359++) {
			if (t360.call(this)==-1) break;
		}
		this.xget("i");
		this.xget("row");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f204;
		var t364=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t364.call(this)==-1) return -1;
		}
	}
	function $f206(){
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f207(){
	}
	function $f208(){
	}
	function $f209(){
		this.stk[this.ptr++]=1;
	}
	function $f210(){
		this.stk[this.ptr++]=1;
	}
	function $f211(){
		this.stk[this.ptr++]=0;
	}
	function $f212(){
		this.xget("sep");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f210;
		this.stk[this.ptr++]=$f211;
		var t381=this.stk[--this.ptr];
		var t382=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t382.call(this)==-1) return -1;
		} else {
			if (t381.call(this)==-1) return -1;
		}
	}
	function $f213(){
		this.xget("row");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.eq();
		this.stk[this.ptr++]=$f209;
		this.stk[this.ptr++]=$f212;
		var t383=this.stk[--this.ptr];
		var t384=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t384.call(this)==-1) return -1;
		} else {
			if (t383.call(this)==-1) return -1;
		}
	}
	function $f214(){
		this.stk[this.ptr++]=0;
	}
	function $f215(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("row");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f213;
		this.stk[this.ptr++]=$f214;
		var t385=this.stk[--this.ptr];
		var t386=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t386.call(this)==-1) return -1;
		} else {
			if (t385.call(this)==-1) return -1;
		}
		this.xget("sep");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("i");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f216(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=14;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f215;
		var t391=this.stk[--this.ptr];
		var t389=this.stk[--this.ptr];
		var t388=this.stk[--this.ptr];
		var t387=this.stk[--this.ptr];
		for (var t390=t387; t388<0 ? t390>=t389 : t390<=t389; t390+=t388) {
			this.stk[this.ptr++]=t390;
			if (t391.call(this)==-1) break;
		}
	}
	function $f217(){
		this.stk[this.ptr++]="row";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.xget("row");
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
		this.stk[this.ptr++]="sep";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.xget("sep");
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
	function $f218(){
		this.xget("row");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f219(){
		this.xget("sep");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f220(){
		this.xget("row");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f218;
		var t397=this.stk[--this.ptr];
		var t395=this.stk[--this.ptr];
		var t394=this.stk[--this.ptr];
		var t393=this.stk[--this.ptr];
		for (var t396=t393; t394<0 ? t396>=t395 : t396<=t395; t396+=t394) {
			this.stk[this.ptr++]=t396;
			if (t397.call(this)==-1) break;
		}
		this.xget("row");
		t=this.stk[this.ptr-1];
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.ptr--;
		this.xget("sep");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f219;
		var t402=this.stk[--this.ptr];
		var t400=this.stk[--this.ptr];
		var t399=this.stk[--this.ptr];
		var t398=this.stk[--this.ptr];
		for (var t401=t398; t399<0 ? t401>=t400 : t401<=t400; t401+=t399) {
			this.stk[this.ptr++]=t401;
			if (t402.call(this)==-1) break;
		}
		this.xget("sep");
		t=this.stk[this.ptr-1];
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.ptr--;
	}
	function $f221(){
		this.xget("rows");
		this.xget("r");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("rows");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.ne();
		this.xget("finderpos");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f217;
		this.stk[this.ptr++]=$f220;
		var t403=this.stk[--this.ptr];
		var t404=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t404.call(this)==-1) return -1;
		} else {
			if (t403.call(this)==-1) return -1;
		}
	}
	function $f222(){
		this.stk[this.ptr++]="r";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="row";
		this.xget("rows");
		this.xget("r");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.xget("row");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f205;
		var t369=this.stk[--this.ptr];
		var t367=this.stk[--this.ptr];
		var t366=this.stk[--this.ptr];
		var t365=this.stk[--this.ptr];
		for (var t368=t365; t366<0 ? t368>=t367 : t368<=t367; t368+=t366) {
			this.stk[this.ptr++]=t368;
			if (t369.call(this)==-1) break;
		}
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-1];
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.stk[this.ptr++]="row";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="sep";
		this.stk[this.ptr++]=Infinity;
		this.xget("row");
		this.stk[this.ptr++]=$f206;
		var t370=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t370);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("sep");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("sep");
		this.xget("row");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="finderpos";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=19;
		this.stk[this.ptr++]=98;
		this.xget("row");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f207;
		var t375=this.stk[--this.ptr];
		var t373=this.stk[--this.ptr];
		var t372=this.stk[--this.ptr];
		var t371=this.stk[--this.ptr];
		for (var t374=t371; t372<0 ? t374>=t373 : t374<=t373; t374+=t372) {
			this.stk[this.ptr++]=t374;
			if (t375.call(this)==-1) break;
		}
		this.stk[this.ptr++]=68;
		this.stk[this.ptr++]=98;
		this.xget("row");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f208;
		var t380=this.stk[--this.ptr];
		var t378=this.stk[--this.ptr];
		var t377=this.stk[--this.ptr];
		var t376=this.stk[--this.ptr];
		for (var t379=t376; t377<0 ? t379>=t378 : t379<=t378; t379+=t377) {
			this.stk[this.ptr++]=t379;
			if (t380.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("finderpos");
		this.stk[this.ptr++]=$f216;
		var t392=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t392);
		this.xget("segments");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.xget("r");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f221;
		var t405=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t405.call(this)==-1) return -1;
		}
		this.xget("rows");
		this.xget("r");
		this.xget("row");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("seps");
		this.xget("r");
		this.xget("sep");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f223(){
		this.stk[this.ptr++]=0;
	}
	function $f224(){
		this.stk[this.ptr++]=0;
	}
	function $f225(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
	}
	function $f226(){
		this.xget("seps");
		this.xget("r");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f227(){
		this.xget("rows");
		this.xget("r");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f228(){
		this.xget("seps");
		this.xget("r");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("sep");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f229(){
		this.stk[this.ptr++]="r";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("r");
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f226;
		var t420=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t420.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=34;
		this.stk[this.ptr++]=$f227;
		var t423=this.stk[--this.ptr];
		var t421=this.stk[--this.ptr];
		for (var t422=0; t422<t421; t422++) {
			if (t423.call(this)==-1) break;
		}
		this.xget("r");
		this.xget("numrows");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.ne();
		this.stk[this.ptr++]=$f228;
		var t424=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t424.call(this)==-1) return -1;
		}
	}
	function $f230(){
		this.stk[this.ptr++]="seps";
		this.xget("numrows");
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("numrows");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f222;
		var t410=this.stk[--this.ptr];
		var t408=this.stk[--this.ptr];
		var t407=this.stk[--this.ptr];
		var t406=this.stk[--this.ptr];
		for (var t409=t406; t407<0 ? t409>=t408 : t409<=t408; t409+=t407) {
			this.stk[this.ptr++]=t409;
			if (t410.call(this)==-1) break;
		}
		this.stk[this.ptr++]="pixx";
		this.xget("rows");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.xget("pixx");
		this.stk[this.ptr++]=$f223;
		var t413=this.stk[--this.ptr];
		var t411=this.stk[--this.ptr];
		for (var t412=0; t412<t411; t412++) {
			if (t413.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.xget("rows");
		this.xget("numrows");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("rows");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("numrows");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]=Infinity;
		this.xget("pixx");
		this.stk[this.ptr++]=$f224;
		var t416=this.stk[--this.ptr];
		var t414=this.stk[--this.ptr];
		for (var t415=0; t415<t414; t415++) {
			if (t416.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.xget("seps");
		this.xget("numrows");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("seps");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("numrows");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="sep";
		this.stk[this.ptr++]=Infinity;
		this.xget("pixx");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f225;
		var t419=this.stk[--this.ptr];
		var t417=this.stk[--this.ptr];
		for (var t418=0; t418<t417; t418++) {
			if (t419.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=0;
		this.xget("pixx");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("sep");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("sep");
		this.xget("pixx");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0]);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="pixs";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("numrows");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f229;
		var t429=this.stk[--this.ptr];
		var t427=this.stk[--this.ptr];
		var t426=this.stk[--this.ptr];
		var t425=this.stk[--this.ptr];
		for (var t428=t425; t426<0 ? t428>=t427 : t428<=t427; t428+=t426) {
			this.stk[this.ptr++]=t428;
			if (t429.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="ren";
		this.stk[this.ptr++]=this.get("renmatrix");
		this.stk[this.ptr++]="pixs";
		this.xget("pixs");
		this.stk[this.ptr++]="pixx";
		this.xget("pixx");
		this.stk[this.ptr++]="pixy";
		this.xget("pixs");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("pixx");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]="height";
		this.xget("pixs");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("pixx");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="width";
		this.xget("pixx");
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
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
		this.stk[this.ptr++]=this.get("renmatrix");
		var t430=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t430.call(this)==-1) return -1;
		}
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
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="format";
	this.stk[this.ptr++]=BWIPJS.psstring("expanded");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="segments";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="linkage";
	this.stk[this.ptr++]=false;
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
	this.stk[this.ptr++]="segments";
	this.xget("segments");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("segments");
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
	this.stk[this.ptr++]=$f56;
	var t77=this.stk[--this.ptr];
	while (t77.call(this)!=-1);
	this.stk[this.ptr++]="gpfallow";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="method";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="conv12to40";
	this.stk[this.ptr++]=$f57;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="conv13to44";
	this.stk[this.ptr++]=$f58;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="tobin";
	this.stk[this.ptr++]=$f60;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("00");
	this.eq();
	this.stk[this.ptr++]=$f61;
	var t87=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t87.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("1");
	this.eq();
	this.stk[this.ptr++]=$f63;
	var t89=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t89.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("0100");
	this.eq();
	this.stk[this.ptr++]=$f65;
	var t91=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t91.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("0101");
	this.eq();
	this.stk[this.ptr++]=$f69;
	var t95=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t95.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=7;
	this.eq();
	this.stk[this.ptr++]=$f73;
	var t99=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t99.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("01100");
	this.eq();
	this.stk[this.ptr++]=$f76;
	var t102=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t102.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr++]=BWIPJS.psstring("01101");
	this.eq();
	this.stk[this.ptr++]=$f79;
	var t105=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t105.call(this)==-1) return -1;
	}
	this.xget("gpfallow");
	this.stk[this.ptr++]=$f80;
	this.stk[this.ptr++]=$f81;
	var t106=this.stk[--this.ptr];
	var t107=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t107.call(this)==-1) return -1;
	} else {
		if (t106.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="aifixed";
	this.stk[this.ptr++]=23;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=$f82;
	var t112=this.stk[--this.ptr];
	var t110=this.stk[--this.ptr];
	var t109=this.stk[--this.ptr];
	var t108=this.stk[--this.ptr];
	for (var t111=t108; t109<0 ? t111>=t110 : t111<=t110; t111+=t109) {
		this.stk[this.ptr++]=t111;
		if (t112.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f83;
	var t117=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t117);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=20;
	this.stk[this.ptr++]=$f84;
	var t122=this.stk[--this.ptr];
	var t120=this.stk[--this.ptr];
	var t119=this.stk[--this.ptr];
	var t118=this.stk[--this.ptr];
	for (var t121=t118; t119<0 ? t121>=t120 : t121<=t120; t121+=t119) {
		this.stk[this.ptr++]=t121;
		if (t122.call(this)==-1) break;
	}
	this.stk[this.ptr++]=23;
	this.stk[this.ptr++]=31;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=36;
	this.stk[this.ptr++]=$f85;
	var t127=this.stk[--this.ptr];
	var t125=this.stk[--this.ptr];
	var t124=this.stk[--this.ptr];
	var t123=this.stk[--this.ptr];
	for (var t126=t123; t124<0 ? t126>=t125 : t126<=t125; t126+=t124) {
		this.stk[this.ptr++]=t126;
		if (t127.call(this)==-1) break;
	}
	this.stk[this.ptr++]=41;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f86;
	var t130=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t130);
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
	this.stk[this.ptr++]="numeric";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=119;
	this.stk[this.ptr++]=$f89;
	var t141=this.stk[--this.ptr];
	var t139=this.stk[--this.ptr];
	var t138=this.stk[--this.ptr];
	var t137=this.stk[--this.ptr];
	for (var t140=t137; t138<0 ? t140>=t139 : t140<=t139; t140+=t138) {
		this.stk[this.ptr++]=t140;
		if (t141.call(this)==-1) break;
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
	this.stk[this.ptr++]=$f90;
	var t146=this.stk[--this.ptr];
	var t144=this.stk[--this.ptr];
	var t143=this.stk[--this.ptr];
	var t142=this.stk[--this.ptr];
	for (var t145=t142; t143<0 ? t145>=t144 : t145<=t144; t145+=t143) {
		this.stk[this.ptr++]=t145;
		if (t146.call(this)==-1) break;
	}
	this.xget("fnc1");
	this.stk[this.ptr++]=BWIPJS.psstring("01111");
	this.stk[this.ptr++]=65;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=90;
	this.stk[this.ptr++]=$f91;
	var t151=this.stk[--this.ptr];
	var t149=this.stk[--this.ptr];
	var t148=this.stk[--this.ptr];
	var t147=this.stk[--this.ptr];
	for (var t150=t147; t148<0 ? t150>=t149 : t150<=t149; t150+=t148) {
		this.stk[this.ptr++]=t150;
		if (t151.call(this)==-1) break;
	}
	this.stk[this.ptr++]=42;
	this.stk[this.ptr++]=BWIPJS.psstring("111010");
	this.stk[this.ptr++]=44;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=47;
	this.stk[this.ptr++]=$f92;
	var t156=this.stk[--this.ptr];
	var t154=this.stk[--this.ptr];
	var t153=this.stk[--this.ptr];
	var t152=this.stk[--this.ptr];
	for (var t155=t152; t153<0 ? t155>=t154 : t155<=t154; t155+=t153) {
		this.stk[this.ptr++]=t155;
		if (t156.call(this)==-1) break;
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
	this.stk[this.ptr++]=$f93;
	var t161=this.stk[--this.ptr];
	var t159=this.stk[--this.ptr];
	var t158=this.stk[--this.ptr];
	var t157=this.stk[--this.ptr];
	for (var t160=t157; t158<0 ? t160>=t159 : t160<=t159; t160+=t158) {
		this.stk[this.ptr++]=t160;
		if (t161.call(this)==-1) break;
	}
	this.xget("fnc1");
	this.stk[this.ptr++]=BWIPJS.psstring("01111");
	this.stk[this.ptr++]=65;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=90;
	this.stk[this.ptr++]=$f94;
	var t166=this.stk[--this.ptr];
	var t164=this.stk[--this.ptr];
	var t163=this.stk[--this.ptr];
	var t162=this.stk[--this.ptr];
	for (var t165=t162; t163<0 ? t165>=t164 : t165<=t164; t165+=t163) {
		this.stk[this.ptr++]=t165;
		if (t166.call(this)==-1) break;
	}
	this.stk[this.ptr++]=97;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=122;
	this.stk[this.ptr++]=$f95;
	var t171=this.stk[--this.ptr];
	var t169=this.stk[--this.ptr];
	var t168=this.stk[--this.ptr];
	var t167=this.stk[--this.ptr];
	for (var t170=t167; t168<0 ? t170>=t169 : t170<=t169; t170+=t168) {
		this.stk[this.ptr++]=t170;
		if (t171.call(this)==-1) break;
	}
	this.stk[this.ptr++]=33;
	this.stk[this.ptr++]=BWIPJS.psstring("11101000");
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=BWIPJS.psstring("11101001");
	this.stk[this.ptr++]=37;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=47;
	this.stk[this.ptr++]=$f96;
	var t176=this.stk[--this.ptr];
	var t174=this.stk[--this.ptr];
	var t173=this.stk[--this.ptr];
	var t172=this.stk[--this.ptr];
	for (var t175=t172; t173<0 ? t175>=t174 : t175<=t174; t175+=t173) {
		this.stk[this.ptr++]=t175;
		if (t176.call(this)==-1) break;
	}
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=63;
	this.stk[this.ptr++]=$f97;
	var t181=this.stk[--this.ptr];
	var t179=this.stk[--this.ptr];
	var t178=this.stk[--this.ptr];
	var t177=this.stk[--this.ptr];
	for (var t180=t177; t178<0 ? t180>=t179 : t180<=t179; t180+=t178) {
		this.stk[this.ptr++]=t180;
		if (t181.call(this)==-1) break;
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
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("ais");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f101;
	var t189=this.stk[--this.ptr];
	var t187=this.stk[--this.ptr];
	var t186=this.stk[--this.ptr];
	var t185=this.stk[--this.ptr];
	for (var t188=t185; t186<0 ? t188>=t187 : t188<=t187; t188+=t186) {
		this.stk[this.ptr++]=t188;
		if (t189.call(this)==-1) break;
	}
	this.stk[this.ptr++]="rembits";
	this.stk[this.ptr++]=$f105;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encode";
	this.stk[this.ptr++]=$f109;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numericruns";
	this.stk[this.ptr++]=Infinity;
	this.xget("gpf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=$f110;
	var t198=this.stk[--this.ptr];
	var t196=this.stk[--this.ptr];
	for (var t197=0; t197<t196; t197++) {
		if (t198.call(this)==-1) break;
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
	this.stk[this.ptr++]=$f111;
	var t201=this.stk[--this.ptr];
	var t199=this.stk[--this.ptr];
	for (var t200=0; t200<t199; t200++) {
		if (t201.call(this)==-1) break;
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
	this.stk[this.ptr++]=$f112;
	var t204=this.stk[--this.ptr];
	var t202=this.stk[--this.ptr];
	for (var t203=0; t203<t202; t203++) {
		if (t204.call(this)==-1) break;
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
	this.stk[this.ptr++]=$f122;
	var t218=this.stk[--this.ptr];
	var t216=this.stk[--this.ptr];
	var t215=this.stk[--this.ptr];
	var t214=this.stk[--this.ptr];
	for (var t217=t214; t215<0 ? t217>=t216 : t217<=t216; t217+=t215) {
		this.stk[this.ptr++]=t217;
		if (t218.call(this)==-1) break;
	}
	this.stk[this.ptr++]="gpfenc";
	this.stk[this.ptr++]=252;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="mode";
	this.stk[this.ptr++]=BWIPJS.psstring("numeric");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f143;
	var t239=this.stk[--this.ptr];
	while (t239.call(this)!=-1);
	this.stk[this.ptr++]="gpf";
	this.xget("gpfenc");
	this.stk[this.ptr++]=0;
	this.xget("j");
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=12;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("method");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("vlf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("cdf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("gpf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.xget("rembits");
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="pad";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("vlf");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=0;
	this.ne();
	this.stk[this.ptr++]=$f146;
	this.stk[this.ptr++]=$f147;
	var t242=this.stk[--this.ptr];
	var t243=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t243.call(this)==-1) return -1;
	} else {
		if (t242.call(this)==-1) return -1;
	}
	this.xget("pad");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f151;
	var t251=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t251.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="binval";
	this.stk[this.ptr++]=Infinity;
	this.xget("linkage");
	this.stk[this.ptr++]=$f152;
	this.stk[this.ptr++]=$f153;
	var t252=this.stk[--this.ptr];
	var t253=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t253.call(this)==-1) return -1;
	} else {
		if (t252.call(this)==-1) return -1;
	}
	this.xget("method");
	this.stk[this.ptr++]=$f154;
	var t254=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t254);
	this.xget("vlf");
	t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
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
	this.stk[this.ptr++]="datalen";
	this.xget("binval");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=12;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ncr";
	this.stk[this.ptr++]=$f160;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="getRSSwidths";
	this.stk[this.ptr++]=$f169;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="tab174";
	this.stk[this.ptr++]=BWIPJS.psarray([347,0,12,5,7,2,87,4,1387,348,10,7,5,4,52,20,2947,1388,8,9,4,5,30,52,3987,2948,6,11,3,6,10,104,4191,3988,4,13,1,8,1,204]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dxw";
	this.xget("datalen");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("datalen");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f178;
	var t306=this.stk[--this.ptr];
	var t304=this.stk[--this.ptr];
	var t303=this.stk[--this.ptr];
	var t302=this.stk[--this.ptr];
	for (var t305=t302; t303<0 ? t305>=t304 : t305<=t304; t305+=t303) {
		this.stk[this.ptr++]=t305;
		if (t306.call(this)==-1) break;
	}
	this.stk[this.ptr++]="finderwidths";
	this.stk[this.ptr++]=BWIPJS.psarray([1,8,4,1,1,1,1,4,8,1,3,6,4,1,1,1,1,4,6,3,3,4,6,1,1,1,1,6,4,3,3,2,8,1,1,1,1,8,2,3,2,6,5,1,1,1,1,5,6,2,2,2,9,1,1,1,1,9,2,2]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="finderseq";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([0,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,3,2]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,5,2,7]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,9,2,7,4]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,9,2,7,6,11]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,9,2,7,8,11,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,1,2,3,4,5,6,7]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,1,2,3,4,5,6,9,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,1,2,3,4,5,6,9,10,11]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,1,2,3,4,7,6,9,8,11,10]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="seq";
	this.xget("finderseq");
	this.xget("datalen");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fxw";
	this.xget("seq");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("seq");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f179;
	var t311=this.stk[--this.ptr];
	var t309=this.stk[--this.ptr];
	var t308=this.stk[--this.ptr];
	var t307=this.stk[--this.ptr];
	for (var t310=t307; t308<0 ? t310>=t309 : t310<=t309; t310+=t308) {
		this.stk[this.ptr++]=t310;
		if (t311.call(this)==-1) break;
	}
	this.stk[this.ptr++]="checkweights";
	this.stk[this.ptr++]=BWIPJS.psarray([-1,-1,-1,-1,-1,-1,-1,-1,77,96,32,81,27,9,3,1,20,60,180,118,143,7,21,63,205,209,140,117,39,13,145,189,193,157,49,147,19,57,171,91,132,44,85,169,197,136,186,62,185,133,188,142,4,12,36,108,50,87,29,80,97,173,128,113,150,28,84,41,123,158,52,156,166,196,206,139,187,203,138,46,76,17,51,153,37,111,122,155,146,119,110,107,106,176,129,43,16,48,144,10,30,90,59,177,164,125,112,178,200,137,116,109,70,210,208,202,184,130,179,115,190,204,68,93,31,151,191,134,148,22,66,198,172,94,71,2,40,154,192,64,162,54,18,6,120,149,25,75,14,42,126,167,175,199,207,69,23,78,26,79,103,98,83,38,114,131,182,124,159,53,88,170,127,183,61,161,55,165,73,8,24,72,5,15,89,100,174,58,160,194,135,45]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checkweightseq";
	this.stk[this.ptr++]=Infinity;
	this.xget("seq");
	this.stk[this.ptr++]=$f180;
	var t312=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t312);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=8;
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="widths";
	this.stk[this.ptr++]=Infinity;
	this.xget("dxw");
	this.stk[this.ptr++]=$f182;
	var t314=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t314);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("widths");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f183;
	var t319=this.stk[--this.ptr];
	var t317=this.stk[--this.ptr];
	var t316=this.stk[--this.ptr];
	var t315=this.stk[--this.ptr];
	for (var t318=t315; t316<0 ? t318>=t317 : t318<=t317; t318+=t316) {
		this.stk[this.ptr++]=t318;
		if (t319.call(this)==-1) break;
	}
	this.stk[this.ptr++]="checksum";
	this.xget("checksum");
	this.stk[this.ptr++]=211;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.xget("datalen");
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=211;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f186;
	var t322=this.stk[--this.ptr];
	while (t322.call(this)!=-1);
	this.stk[this.ptr++]="cwo";
	this.xget("checksum");
	this.xget("cgs");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("cte");
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.xget("celo");
	this.xget("cmwo");
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=true;
	this.xget("getRSSwidths");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cwe";
	this.xget("checksum");
	this.xget("cgs");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("cte");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.xget("cele");
	this.xget("cmwe");
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=false;
	this.xget("getRSSwidths");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cw";
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=$f187;
	var t327=this.stk[--this.ptr];
	var t325=this.stk[--this.ptr];
	var t324=this.stk[--this.ptr];
	var t323=this.stk[--this.ptr];
	for (var t326=t323; t324<0 ? t326>=t325 : t326<=t325; t326+=t324) {
		this.stk[this.ptr++]=t326;
		if (t327.call(this)==-1) break;
	}
	this.stk[this.ptr++]=22;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=0;
	this.xget("cw");
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.stk[this.ptr++]=1;
	this.xget("dxw");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr++]=0;
	this.xget("datalen");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]="dxw";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="datalen";
	this.xget("dxw");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rows";
	this.xget("datalen");
	this.xget("segments");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=Math.ceil(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numrows";
	this.xget("rows");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("numrows");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f194;
	var t342=this.stk[--this.ptr];
	var t340=this.stk[--this.ptr];
	var t339=this.stk[--this.ptr];
	var t338=this.stk[--this.ptr];
	for (var t341=t338; t339<0 ? t341>=t340 : t341<=t340; t341+=t339) {
		this.stk[this.ptr++]=t341;
		if (t342.call(this)==-1) break;
	}
	this.xget("format");
	this.stk[this.ptr++]=BWIPJS.psstring("expandedstacked");
	this.ne();
	this.stk[this.ptr++]=$f201;
	this.stk[this.ptr++]=$f230;
	var t431=this.stk[--this.ptr];
	var t432=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t432.call(this)==-1) return -1;
	} else {
		if (t431.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("databarexpanded");
// END OF databarexpanded

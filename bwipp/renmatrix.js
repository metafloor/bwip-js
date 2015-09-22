// file: bwipp/renmatrix.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-08-10
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN renmatrix
BWIPJS.bwipp["renmatrix"]=function() {
	function $f0(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f1(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		this.stk[this.ptr++]=0;
	}
	function $f3(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("pixs8");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pixx8");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pixx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("pixx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f4(){
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("imgstr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
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
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=7;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		var t=this.dstk.get("pixs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f5(){
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	}
	function $f6(){
		this.stk[this.ptr++]=BWIPJS.psstring("<      >");
		this.stk[this.ptr++]=8;
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
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("anycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.stk[this.ptr++]=$f5;
		var t21=this.stk[--this.ptr];//forall
		var t20=this.stk[--this.ptr];
		for (var t19 in t20) {
			if (t20 instanceof BWIPJS.psstring || t20 instanceof BWIPJS.psarray) {
				if (t19.charCodeAt(0) > 57) continue;
			} else {
				if (t19.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t19.substr(1);
				} else {
					this.stk[this.ptr++]=t19;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t20,t19);
			if (t21.call(this)==-1) break;
		}
		this.setrgb(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f7(){
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	}
	function $f8(){
		this.stk[this.ptr++]=BWIPJS.psstring("<        >");
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
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("anycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.stk[this.ptr++]=$f7;
		var t25=this.stk[--this.ptr];//forall
		var t24=this.stk[--this.ptr];
		for (var t23 in t24) {
			if (t24 instanceof BWIPJS.psstring || t24 instanceof BWIPJS.psarray) {
				if (t23.charCodeAt(0) > 57) continue;
			} else {
				if (t23.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t23.substr(1);
				} else {
					this.stk[this.ptr++]=t23;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t24,t23);
			if (t25.call(this)==-1) break;
		}
		this.setcmyk(this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=4;
	}
	function $f9(){
		this.stk[this.ptr++]="anycolor";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("anycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=6;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f6;
		var t22=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t22.call(this)==-1) return -1;
		}
		var t=this.dstk.get("anycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f8;
		var t26=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t26.call(this)==-1) return -1;
		}
	}
	function $f10(){
		this.gsave();
		var t=this.dstk.get("backgroundcolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setanycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.fill();
		this.grestore();
	}
	function $f11(){
		var t=this.dstk.get("barcolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setanycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f12(){
		var t=this.dstk.get("imgstr");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="args";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="width";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="backgroundcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("args");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f0;
	var t2=this.stk[--this.ptr];//forall
	var t1=this.stk[--this.ptr];
	for (var t0 in t1) {
		if (t1 instanceof BWIPJS.psstring || t1 instanceof BWIPJS.psarray) {
			if (t0.charCodeAt(0) > 57) continue;
		} else {
			if (t0.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t0.substr(1);
			} else {
				this.stk[this.ptr++]=t0;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t1,t0);
		if (t2.call(this)==-1) break;
	}
	var t=this.dstk.get("opt");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f1;
	var t5=this.stk[--this.ptr];//forall
	var t4=this.stk[--this.ptr];
	for (var t3 in t4) {
		if (t4 instanceof BWIPJS.psstring || t4 instanceof BWIPJS.psarray) {
			if (t3.charCodeAt(0) > 57) continue;
		} else {
			if (t3.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t3.substr(1);
			} else {
				this.stk[this.ptr++]=t3;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t4,t3);
		if (t5.call(this)==-1) break;
	}
	this.stk[this.ptr++]="width";
	var t=this.dstk.get("width");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	var t=this.dstk.get("height");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcolor";
	var t=this.dstk.get("barcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="backgroundcolor";
	var t=this.dstk.get("backgroundcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pixx8";
	var t=this.dstk.get("pixx");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=Math.ceil(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pixs8";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("pixx8");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("pixy");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f2;
	var t8=this.stk[--this.ptr];
	var t6=this.stk[--this.ptr];
	for (var t7=0; t7<t6; t7++) {
		if (t8.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("pixy");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f3;
	var t13=this.stk[--this.ptr];
	var t11=this.stk[--this.ptr];
	var t10=this.stk[--this.ptr];
	var t9=this.stk[--this.ptr];
	for (var t12=t9; t10<0 ? t12>=t11 : t12<=t11; t12+=t10) {
		this.stk[this.ptr++]=t12;
		if (t13.call(this)==-1) break;
	}
	this.stk[this.ptr++]="pixs";
	var t=this.dstk.get("pixs8");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="imgstr";
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f4;
	var t18=this.stk[--this.ptr];
	var t16=this.stk[--this.ptr];
	var t15=this.stk[--this.ptr];
	var t14=this.stk[--this.ptr];
	for (var t17=t14; t15<0 ? t17>=t16 : t17<=t16; t17+=t15) {
		this.stk[this.ptr++]=t17;
		if (t18.call(this)==-1) break;
	}
	this.stk[this.ptr++]="setanycolor";
	this.stk[this.ptr++]=$f9;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.gsave();
	var t=this.currentpoint();
	this.stk[this.ptr++]=t.x;
	this.stk[this.ptr++]=t.y;
	var y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=72;
	var t=this.dstk.get("width");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=72;
	var t=this.dstk.get("height");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var y=this.stk[--this.ptr];
	this.scale(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0.0001;
	this.stk[this.ptr++]=0.0001;
	var y=this.stk[--this.ptr];
	this.moveto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0.9999;
	this.stk[this.ptr++]=0.0001;
	var y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0.9999;
	this.stk[this.ptr++]=0.9999;
	var y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0.0001;
	this.stk[this.ptr++]=0.9999;
	var y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.closepath();
	var t=this.dstk.get("backgroundcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f10;
	var t27=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t27.call(this)==-1) return -1;
	}
	var t=this.dstk.get("barcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f11;
	var t28=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t28.call(this)==-1) return -1;
	}
	var t=this.dstk.get("pixx");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("pixy");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=true;
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("pixx");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("pixy");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("pixy");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f12;
	this.stk[--this.ptr].call(this);
	this.imagemask(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=5;
	this.grestore();
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("renmatrix");
// END OF renmatrix

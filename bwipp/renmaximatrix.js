// file: bwipp/renmaximatrix.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-08-10
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN renmaximatrix
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("renmaximatrix", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
BWIPJS.bwipp["renmaximatrix"]=function() {
	function $f0(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f1(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	}
	function $f3(){
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
		this.stk[this.ptr++]=$f2;
		var t8=this.stk[--this.ptr];//forall
		var t7=this.stk[--this.ptr];
		for (var t6 in t7) {
			if (t7 instanceof BWIPJS.psstring || t7 instanceof BWIPJS.psarray) {
				if (t6.charCodeAt(0) > 57) continue;
			} else {
				if (t6.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t6.substr(1);
				} else {
					this.stk[this.ptr++]=t6;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t7,t6);
			if (t8.call(this)==-1) break;
		}
		this.setrgb(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f4(){
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	}
	function $f5(){
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
		this.stk[this.ptr++]=$f4;
		var t12=this.stk[--this.ptr];//forall
		var t11=this.stk[--this.ptr];
		for (var t10 in t11) {
			if (t11 instanceof BWIPJS.psstring || t11 instanceof BWIPJS.psarray) {
				if (t10.charCodeAt(0) > 57) continue;
			} else {
				if (t10.charCodeAt(0) == 0xffff) {
					this.stk[this.ptr++]=+t10.substr(1);
				} else {
					this.stk[this.ptr++]=t10;
				}
			}
			this.stk[this.ptr++]=BWIPJS.get(t11,t10);
			if (t12.call(this)==-1) break;
		}
		this.setcmyk(this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=4;
	}
	function $f6(){
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
		this.stk[this.ptr++]=$f3;
		var t9=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t9.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f5;
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
		}
	}
	function $f7(){
		this.gsave();
		var t=this.dstk.get("backgroundcolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setanycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.fill();
		this.grestore();
	}
	function $f8(){
		var t=this.dstk.get("barcolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("setanycolor");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f9(){
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f10(){
		var t=this.dstk.get("x");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f11(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]="x";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="y";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f9;
		this.stk[this.ptr++]=$f10;
		var t16=this.stk[--this.ptr];
		var t17=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t17.call(this)==-1) return -1;
		} else {
			if (t16.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=32;
		var t=this.dstk.get("y");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0.8661;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0.5774;
		var y=this.stk[--this.ptr];
		this.rmoveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=-0.5;
		this.stk[this.ptr++]=-0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=-0.5774;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr++]=-0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr++]=0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0.5774;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=-0.5;
		this.stk[this.ptr++]=0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.closepath();
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="args";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
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
	this.stk[this.ptr++]="barcolor";
	var t=this.dstk.get("barcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="backgroundcolor";
	var t=this.dstk.get("backgroundcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setanycolor";
	this.stk[this.ptr++]=$f6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.gsave();
	var t=this.currentpoint();
	this.stk[this.ptr++]=t.x;
	this.stk[this.ptr++]=t.y;
	var y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=2.4945;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	var y=this.stk[--this.ptr];
	this.scale(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=0;
	var y=this.stk[--this.ptr];
	this.moveto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=0;
	var y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=29;
	var y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=29;
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
	this.stk[this.ptr++]=$f7;
	var t14=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t14.call(this)==-1) return -1;
	}
	var t=this.dstk.get("barcolor");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f8;
	var t15=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t15.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=0.5;
	this.stk[this.ptr++]=0.5774;
	var y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	this.newpath();
	var t=this.dstk.get("pixs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f11;
	var t20=this.stk[--this.ptr];//forall
	var t19=this.stk[--this.ptr];
	for (var t18 in t19) {
		if (t19 instanceof BWIPJS.psstring || t19 instanceof BWIPJS.psarray) {
			if (t18.charCodeAt(0) > 57) continue;
		} else {
			if (t18.charCodeAt(0) == 0xffff) {
				this.stk[this.ptr++]=+t18.substr(1);
			} else {
				this.stk[this.ptr++]=t18;
			}
		}
		this.stk[this.ptr++]=BWIPJS.get(t19,t18);
		if (t20.call(this)==-1) break;
	}
	this.fill();
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=0.5774;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=1.3359;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=2.1058;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=2.8644;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=3.6229;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=4.3814;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	this.grestore();
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("renmaximatrix");
// END OF renmaximatrix

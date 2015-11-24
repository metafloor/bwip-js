// file: bwipp/renmaximatrix.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
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
	var t,x,y;
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
		this.xget("anycolor");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.stk[this.ptr++]=$f2;
		var t2=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t2);
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
		this.xget("anycolor");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.stk[this.ptr++]=$f4;
		var t4=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t4);
		this.setcmyk(this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=4;
	}
	function $f6(){
		this.stk[this.ptr++]="anycolor";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("anycolor");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=6;
		this.eq();
		this.stk[this.ptr++]=$f3;
		var t3=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t3.call(this)==-1) return -1;
		}
		this.xget("anycolor");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		this.eq();
		this.stk[this.ptr++]=$f5;
		var t5=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t5.call(this)==-1) return -1;
		}
	}
	function $f7(){
		this.gsave();
		this.xget("backgroundcolor");
		this.xget("setanycolor");
		this.fill();
		this.grestore();
	}
	function $f8(){
		this.xget("barcolor");
		this.xget("setanycolor");
	}
	function $f9(){
		this.xget("x");
	}
	function $f10(){
		this.xget("x");
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f11(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]="x";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="y";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("y");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f9;
		this.stk[this.ptr++]=$f10;
		var t8=this.stk[--this.ptr];
		var t9=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t9.call(this)==-1) return -1;
		} else {
			if (t8.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=32;
		this.xget("y");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0.8661;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0.5774;
		y=this.stk[--this.ptr];
		this.rmoveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=-0.5;
		this.stk[this.ptr++]=-0.2887;
		y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=-0.5774;
		y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr++]=-0.2887;
		y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr++]=0.2887;
		y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0.5774;
		y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=-0.5;
		this.stk[this.ptr++]=0.2887;
		y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.closepath();
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="args";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="backgroundcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("args");
	this.stk[this.ptr++]=$f0;
	var t0=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t0);
	this.xget("opt");
	this.stk[this.ptr++]=$f1;
	var t1=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t1);
	this.stk[this.ptr++]="barcolor";
	this.xget("barcolor");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="backgroundcolor";
	this.xget("backgroundcolor");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setanycolor";
	this.stk[this.ptr++]=$f6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.gsave();
	t=this.currentpoint();
	this.stk[this.ptr++]=t.x;
	this.stk[this.ptr++]=t.y;
	y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=2.4945;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	y=this.stk[--this.ptr];
	this.scale(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=0;
	y=this.stk[--this.ptr];
	this.moveto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=0;
	y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=29;
	y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=29;
	y=this.stk[--this.ptr];
	this.lineto(this.stk[--this.ptr],y);
	this.closepath();
	this.xget("backgroundcolor");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.ne();
	this.stk[this.ptr++]=$f7;
	var t6=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t6.call(this)==-1) return -1;
	}
	this.xget("barcolor");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.ne();
	this.stk[this.ptr++]=$f8;
	var t7=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t7.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=0.5;
	this.stk[this.ptr++]=0.5774;
	y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	this.newpath();
	this.xget("pixs");
	this.stk[this.ptr++]=$f11;
	var t10=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t10);
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

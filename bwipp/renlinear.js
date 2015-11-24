// file: bwipp/renlinear.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN renlinear
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("renlinear", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
BWIPJS.bwipp["renlinear"]=function() {
	var t,x,y;
	function $f0(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f1(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		this.stk[this.ptr++]="maxh";
		this.xget("h");
		this.xget("y");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f3(){
		this.stk[this.ptr++]="h";
		this.xget("bhs");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="c";
		this.xget("d");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.xget("x");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="y";
		this.xget("bbs");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="w";
		this.xget("d");
		this.xget("inkspread");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("bars");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=Infinity;
		this.xget("h");
		this.xget("c");
		this.xget("y");
		this.xget("w");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("h");
		this.xget("y");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("maxh");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f2;
		var t2=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t2.call(this)==-1) return -1;
		}
	}
	function $f4(){
		this.xget("bars");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=-1;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f5(){
		this.stk[this.ptr++]="d";
		this.xget("sbs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("barratio");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("barratio");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("sbs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f3;
		this.stk[this.ptr++]=$f4;
		var t3=this.stk[--this.ptr];
		var t4=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t4.call(this)==-1) return -1;
		} else {
			if (t3.call(this)==-1) return -1;
		}
	}
	function $f6(){
		this.stk[this.ptr++]="d";
		this.xget("sbs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("spaceratio");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("spaceratio");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f5;
		this.stk[this.ptr++]=$f6;
		var t5=this.stk[--this.ptr];
		var t6=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t6.call(this)==-1) return -1;
		} else {
			if (t5.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="x";
		this.xget("x");
		this.xget("d");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f8(){
		this.xget("width");
		this.stk[this.ptr++]=72;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("x");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		y=this.stk[--this.ptr];
		this.scale(this.stk[--this.ptr],y);
	}
	function $f9(){
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	}
	function $f10(){
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
		this.stk[this.ptr++]=$f9;
		var t13=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t13);
		this.setrgb(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f11(){
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	}
	function $f12(){
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
		this.stk[this.ptr++]=$f11;
		var t15=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t15);
		this.setcmyk(this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=4;
	}
	function $f13(){
		this.stk[this.ptr++]="anycolor";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("anycolor");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=6;
		this.eq();
		this.stk[this.ptr++]=$f10;
		var t14=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t14.call(this)==-1) return -1;
		}
		this.xget("anycolor");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		this.eq();
		this.stk[this.ptr++]=$f12;
		var t16=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t16.call(this)==-1) return -1;
		}
	}
	function $f14(){
		this.gsave();
		this.xget("backgroundcolor");
		this.xget("setanycolor");
		this.fill();
		this.grestore();
	}
	function $f15(){
		this.xget("bordercolor");
		this.xget("setanycolor");
	}
	function $f16(){
		this.gsave();
		this.xget("bordercolor");
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		this.ne();
		this.stk[this.ptr++]=$f15;
		var t18=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t18.call(this)==-1) return -1;
		}
		this.xget("borderwidth");
		this.setlinewidth(this.stk[--this.ptr]);
		this.stroke();
		this.grestore();
	}
	function $f17(){
		this.xget("barcolor");
		this.xget("setanycolor");
	}
	function $f18(){
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.newpath();
		this.setlinewidth(this.stk[--this.ptr]);
		y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stroke();
	}
	function $f19(){
		this.ptr--;
	}
	function $f20(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=-1;
		this.ne();
		this.stk[this.ptr++]=$f18;
		this.stk[this.ptr++]=$f19;
		var t21=this.stk[--this.ptr];
		var t22=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t22.call(this)==-1) return -1;
		} else {
			if (t21.call(this)==-1) return -1;
		}
	}
	function $f21(){
		this.xget("textcolor");
		this.xget("setanycolor");
	}
	function $f22(){
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
		this.stk[this.ptr++]="s";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="fn";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-1]=this.findfont(BWIPJS.psstring(this.stk[this.ptr-1]));
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--; this.stk[this.ptr-1].FontSize = this.stk[this.ptr];
		this.setfont(this.stk[--this.ptr]);
	}
	function $f24(){
		this.ptr--;
		this.ptr--;
	}
	function $f25(){
		this.stk[this.ptr++]=$f22;
		var t25=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t25);
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
		this.xget("s");
		this.ne();
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("fn");
		this.ne();
		this.or();
		this.stk[this.ptr++]=$f23;
		this.stk[this.ptr++]=$f24;
		var t26=this.stk[--this.ptr];
		var t27=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t27.call(this)==-1) return -1;
		} else {
			if (t26.call(this)==-1) return -1;
		}
		y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.show(this.stk[--this.ptr],0,0);
	}
	function $f26(){
		this.stk[this.ptr++]="s";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="fn";
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("txt");
		this.stk[this.ptr++]=$f25;
		var t28=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t28);
	}
	function $f27(){
	}
	function $f28(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f27;
		var t29=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t29);
	}
	function $f29(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("txt");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("tstr");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t32=this.stk[--this.ptr];
		var t31=this.stk[--this.ptr];
		if (t32 < 0) t=this.stk.splice(this.ptr-t31, -t32);
		else t=this.stk.splice(this.ptr-t31, t31-t32);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f30(){
		this.stk[this.ptr++]="txt";
		this.stk[this.ptr++]=Infinity;
		this.xget("txt");
		this.stk[this.ptr++]=$f28;
		var t30=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t30);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="tstr";
		this.xget("txt");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("txt");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f29;
		var t37=this.stk[--this.ptr];
		var t35=this.stk[--this.ptr];
		var t34=this.stk[--this.ptr];
		var t33=this.stk[--this.ptr];
		for (var t36=t33; t34<0 ? t36>=t35 : t36<=t35; t36+=t34) {
			this.stk[this.ptr++]=t36;
			if (t37.call(this)==-1) break;
		}
	}
	function $f31(){
		this.stk[this.ptr++]="tstr";
		this.xget("alttext");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f32(){
		this.stk[this.ptr++]=0;
	}
	function $f33(){
		this.stk[this.ptr++]=this.currentfont();
		this.stk[this.ptr++]="PaintType";
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.eq();
	}
	function $f34(){
		this.stk[this.ptr++]=false;
	}
	function $f35(){
		this.stk[this.ptr++]=this.currentfont();
		this.stk[this.ptr++]="StrokeWidth";
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=this.currentfont();
		this.stk[this.ptr++]="FontMatrix";
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=(BWIPJS.pstype(this.stk[this.ptr-1])=="arraytype"?this.stk[--this.ptr]:null);
		x=this.stk[this.ptr-2]; y=this.stk[this.ptr-1];
		t=this.dtransform(t,x,y);
		this.stk[this.ptr-2]=t.dx; this.stk[this.ptr-1]=t.dy;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=Math.sqrt(this.stk[this.ptr-1]);
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f36(){
		this.gsave();
		this.newpath();
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=BWIPJS.psstring("0");
		this.stk[this.ptr++]=false;
		this.charpath(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.pathbbox();
		this.stk[this.ptr++]=t.llx; this.stk[this.ptr++]=t.lly;
		this.stk[this.ptr++]=t.urx; this.stk[this.ptr++]=t.ury;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=1;
		var t41=this.stk[--this.ptr];
		var t40=this.stk[--this.ptr];
		if (t41 < 0) t=this.stk.splice(this.ptr-t40, -t41);
		else t=this.stk.splice(this.ptr-t40, t40-t41);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.ptr--;
		this.ptr--;
		this.ptr--;
		this.grestore();
		this.stk[this.ptr++]=this.currentfont();
		this.stk[this.ptr++]="PaintType";
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f33;
		this.stk[this.ptr++]=$f34;
		var t42=this.stk[--this.ptr];
		var t43=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t43.call(this)==-1) return -1;
		} else {
			if (t42.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=this.currentfont();
		this.stk[this.ptr++]="StrokeWidth";
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f35;
		var t44=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t44.call(this)==-1) return -1;
		}
	}
	function $f37(){
		this.stk[this.ptr++]="textxpos";
		this.xget("textxoffset");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f38(){
		this.stk[this.ptr++]="textxpos";
		this.xget("x");
		this.xget("textxoffset");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("textwidth");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f39(){
		this.stk[this.ptr++]="textxpos";
		this.xget("textwidth");
		this.xget("textxoffset");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f40(){
		this.stk[this.ptr++]="textxpos";
		this.xget("x");
		this.xget("textxoffset");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f41(){
		this.stk[this.ptr++]="textxpos";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="textgaps";
		this.xget("x");
		this.xget("textwidth");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("tstr");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f42(){
		this.stk[this.ptr++]="textypos";
		this.xget("textyoffset");
		this.xget("maxh");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f43(){
		this.stk[this.ptr++]="textypos";
		this.xget("textyoffset");
		this.xget("maxh");
		this.xget("textascent");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f44(){
		this.xget("textfont");
		this.stk[this.ptr-1]=this.findfont(BWIPJS.psstring(this.stk[this.ptr-1]));
		this.xget("textsize");
		this.ptr--; this.stk[this.ptr-1].FontSize = this.stk[this.ptr];
		this.setfont(this.stk[--this.ptr]);
		this.xget("alttext");
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.eq();
		this.stk[this.ptr++]=$f30;
		this.stk[this.ptr++]=$f31;
		var t38=this.stk[--this.ptr];
		var t39=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t39.call(this)==-1) return -1;
		} else {
			if (t38.call(this)==-1) return -1;
		}
		this.xget("tstr");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f32;
		this.stk[this.ptr++]=$f36;
		var t45=this.stk[--this.ptr];
		var t46=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t46.call(this)==-1) return -1;
		} else {
			if (t45.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="textascent";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="textwidth";
		this.xget("tstr");
		t=this.stringwidth(this.stk[--this.ptr]);
		this.stk[this.ptr++]=t.w; this.stk[this.ptr++]=t.h;
		this.ptr--;
		this.xget("tstr");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("textgaps");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="textxpos";
		this.xget("textxoffset");
		this.xget("x");
		this.xget("textwidth");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("textxalign");
		this.stk[this.ptr++]=BWIPJS.psstring("left");
		this.eq();
		this.stk[this.ptr++]=$f37;
		var t47=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t47.call(this)==-1) return -1;
		}
		this.xget("textxalign");
		this.stk[this.ptr++]=BWIPJS.psstring("right");
		this.eq();
		this.stk[this.ptr++]=$f38;
		var t48=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t48.call(this)==-1) return -1;
		}
		this.xget("textxalign");
		this.stk[this.ptr++]=BWIPJS.psstring("offleft");
		this.eq();
		this.stk[this.ptr++]=$f39;
		var t49=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t49.call(this)==-1) return -1;
		}
		this.xget("textxalign");
		this.stk[this.ptr++]=BWIPJS.psstring("offright");
		this.eq();
		this.stk[this.ptr++]=$f40;
		var t50=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t50.call(this)==-1) return -1;
		}
		this.xget("textxalign");
		this.stk[this.ptr++]=BWIPJS.psstring("justify");
		this.eq();
		this.xget("textwidth");
		this.xget("x");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f41;
		var t51=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t51.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="textypos";
		this.xget("textyoffset");
		this.xget("textascent");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("textyalign");
		this.stk[this.ptr++]=BWIPJS.psstring("above");
		this.eq();
		this.stk[this.ptr++]=$f42;
		var t52=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t52.call(this)==-1) return -1;
		}
		this.xget("textyalign");
		this.stk[this.ptr++]=BWIPJS.psstring("center");
		this.eq();
		this.stk[this.ptr++]=$f43;
		var t53=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t53.call(this)==-1) return -1;
		}
		this.xget("textxpos");
		this.xget("textypos");
		y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.xget("textgaps");
		this.stk[this.ptr++]=0;
		this.xget("tstr");
		this.show(this.stk[this.ptr-1],this.stk[this.ptr-3],this.stk[this.ptr-2]); this.ptr-=3;
	}
	function $f45(){
		this.xget("textxalign");
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		this.eq();
		this.xget("textyalign");
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		this.eq();
		this.and();
		this.xget("alttext");
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f26;
		this.stk[this.ptr++]=$f44;
		var t54=this.stk[--this.ptr];
		var t55=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t55.call(this)==-1) return -1;
		} else {
			if (t54.call(this)==-1) return -1;
		}
	}
	function $f46(){
		this.xget("guardleftpos");
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		this.stk[this.ptr++]=1.5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("guardleftypos");
		this.xget("guardheight");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=BWIPJS.psstring("<");
		this.show(this.stk[--this.ptr],0,0);
	}
	function $f47(){
		this.xget("guardrightpos");
		this.xget("x");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("guardwidth");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("guardrightypos");
		this.xget("guardheight");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=BWIPJS.psstring(">");
		this.show(this.stk[--this.ptr],0,0);
	}
	function $f48(){
		this.stk[this.ptr++]=BWIPJS.psstring("OCR-B");
		this.stk[this.ptr-1]=this.findfont(BWIPJS.psstring(this.stk[this.ptr-1]));
		this.xget("guardheight");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.ptr--; this.stk[this.ptr-1].FontSize = this.stk[this.ptr];
		this.setfont(this.stk[--this.ptr]);
		this.xget("guardleftpos");
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f46;
		var t57=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t57.call(this)==-1) return -1;
		}
		this.xget("guardrightpos");
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f47;
		var t58=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t58.call(this)==-1) return -1;
		}
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="args";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sbs";
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bhs";
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bbs";
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="txt";
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="includetext";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textxalign";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textyalign";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textfont";
	this.stk[this.ptr++]=BWIPJS.psstring("Courier");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textsize";
	this.stk[this.ptr++]=10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textxoffset";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textyoffset";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textgaps";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="alttext";
	this.stk[this.ptr++]=BWIPJS.psstring("");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bordercolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="backgroundcolor";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="inkspread";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="width";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barratio";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="spaceratio";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="showborder";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="borderleft";
	this.stk[this.ptr++]=10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="borderright";
	this.stk[this.ptr++]=10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bordertop";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="borderbottom";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="borderwidth";
	this.stk[this.ptr++]=0.5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardwhitespace";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardleftpos";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardleftypos";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardrightpos";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardrightypos";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardwidth";
	this.stk[this.ptr++]=7;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardheight";
	this.stk[this.ptr++]=7;
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
	this.stk[this.ptr++]="textcolor";
	this.xget("textcolor");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textxalign";
	this.xget("textxalign");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textyalign";
	this.xget("textyalign");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textfont";
	this.xget("textfont");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textsize";
	this.xget("textsize");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textxoffset";
	this.xget("textxoffset");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textyoffset";
	this.xget("textyoffset");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textgaps";
	this.xget("textgaps");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="alttext";
	this.xget("alttext");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bordercolor";
	this.xget("bordercolor");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="backgroundcolor";
	this.xget("backgroundcolor");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="inkspread";
	this.xget("inkspread");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="width";
	this.xget("width");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barratio";
	this.xget("barratio");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="spaceratio";
	this.xget("spaceratio");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="borderleft";
	this.xget("borderleft");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="borderright";
	this.xget("borderright");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bordertop";
	this.xget("bordertop");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="borderbottom";
	this.xget("borderbottom");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="borderwidth";
	this.xget("borderwidth");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardleftpos";
	this.xget("guardleftpos");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardleftypos";
	this.xget("guardleftypos");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardrightpos";
	this.xget("guardrightpos");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardrightypos";
	this.xget("guardrightypos");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardwidth";
	this.xget("guardwidth");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="guardheight";
	this.xget("guardheight");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bars";
	this.xget("sbs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="x";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="maxh";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("sbs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f7;
	var t11=this.stk[--this.ptr];
	var t9=this.stk[--this.ptr];
	var t8=this.stk[--this.ptr];
	var t7=this.stk[--this.ptr];
	for (var t10=t7; t8<0 ? t10>=t9 : t10<=t9; t10+=t8) {
		this.stk[this.ptr++]=t10;
		if (t11.call(this)==-1) break;
	}
	this.gsave();
	t=this.currentpoint();
	this.stk[this.ptr++]=t.x;
	this.stk[this.ptr++]=t.y;
	y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	this.xget("width");
	this.stk[this.ptr++]=0;
	this.ne();
	this.stk[this.ptr++]=$f8;
	var t12=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t12.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="setanycolor";
	this.stk[this.ptr++]=$f13;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.newpath();
	this.xget("borderleft");
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.xget("borderbottom");
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	y=this.stk[--this.ptr];
	this.moveto(this.stk[--this.ptr],y);
	this.xget("x");
	this.xget("borderleft");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("borderright");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=0;
	y=this.stk[--this.ptr];
	this.rlineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0;
	this.xget("maxh");
	this.xget("borderbottom");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("bordertop");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	y=this.stk[--this.ptr];
	this.rlineto(this.stk[--this.ptr],y);
	this.xget("x");
	this.xget("borderleft");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("borderright");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	this.stk[this.ptr++]=0;
	y=this.stk[--this.ptr];
	this.rlineto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0;
	this.xget("maxh");
	this.xget("borderbottom");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("bordertop");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	y=this.stk[--this.ptr];
	this.rlineto(this.stk[--this.ptr],y);
	this.closepath();
	this.xget("backgroundcolor");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.ne();
	this.stk[this.ptr++]=$f14;
	var t17=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t17.call(this)==-1) return -1;
	}
	this.xget("showborder");
	this.stk[this.ptr++]=$f16;
	var t19=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t19.call(this)==-1) return -1;
	}
	this.gsave();
	this.stk[this.ptr++]=0;
	this.ptr--; //no-op
	this.xget("barcolor");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.ne();
	this.stk[this.ptr++]=$f17;
	var t20=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t20.call(this)==-1) return -1;
	}
	this.xget("bars");
	this.stk[this.ptr++]=$f20;
	var t23=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t23);
	this.grestore();
	this.xget("textcolor");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.ne();
	this.stk[this.ptr++]=$f21;
	var t24=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t24.call(this)==-1) return -1;
	}
	this.xget("includetext");
	this.stk[this.ptr++]=$f45;
	var t56=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t56.call(this)==-1) return -1;
	}
	this.xget("guardwhitespace");
	this.stk[this.ptr++]=$f48;
	var t59=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t59.call(this)==-1) return -1;
	}
	this.grestore();
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("renlinear");
// END OF renlinear

// file: bwipp/codablockf.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN codablockf
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("codablockf", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("codablockf", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
BWIPJS.bwipp["codablockf"]=function() {
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
		this.stk[this.ptr++]="c";
		this.xget("columns");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("msg");
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
		this.xget("msg");
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
	function $f8(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("msg");
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
		this.stk[this.ptr++]="barcode";
		this.xget("msg");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f9(){
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
		this.stk[this.ptr++]=$f7;
		this.stk[this.ptr++]=$f8;
		var t7=this.stk[--this.ptr];
		var t8=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t8.call(this)==-1) return -1;
		} else {
			if (t7.call(this)==-1) return -1;
		}
	}
	function $f10(){
		this.stk[this.ptr++]="msg";
		this.xget("barcode");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("barcode");
		this.stk[this.ptr++]=$f9;
		var t9=this.stk[--this.ptr];
		while (t9.call(this)!=-1);
	}
	function $f11(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f12(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("encs");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="stringtype";
		this.eq();
		this.stk[this.ptr++]=$f11;
		var t11=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t11.call(this)==-1) return -1;
		}
		this.xget("charvals");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("i");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f13(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encs";
		this.xget("charmaps");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f12;
		var t16=this.stk[--this.ptr];
		var t14=this.stk[--this.ptr];
		var t13=this.stk[--this.ptr];
		var t12=this.stk[--this.ptr];
		for (var t15=t12; t13<0 ? t15>=t14 : t15<=t14; t15+=t13) {
			this.stk[this.ptr++]=t15;
			if (t16.call(this)==-1) break;
		}
	}
	function $f14(){
		return -1;
	}
	function $f15(){
		this.stk[this.ptr++]="char";
		this.xget("fncvals");
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f16(){
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f17(){
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=94;
		this.ne();
		this.stk[this.ptr++]=$f15;
		this.stk[this.ptr++]=$f16;
		var t23=this.stk[--this.ptr];
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		} else {
			if (t23.call(this)==-1) return -1;
		}
	}
	function $f18(){
		this.xget("i");
		this.xget("barlen");
		this.eq();
		this.stk[this.ptr++]=$f14;
		var t22=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t22.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="char";
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("parsefnc");
		this.xget("char");
		this.stk[this.ptr++]=94;
		this.eq();
		this.and();
		this.xget("i");
		this.xget("barlen");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f17;
		var t25=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t25.call(this)==-1) return -1;
		}
		this.xget("msg");
		this.xget("j");
		this.xget("char");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f19(){
		this.xget("char");
	}
	function $f20(){
		this.xget("fn4");
		this.xget("char");
		this.stk[this.ptr++]=127;
		this.and();
	}
	function $f21(){
		this.stk[this.ptr++]="char";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msgtmp";
		this.stk[this.ptr++]=Infinity;
		this.xget("msgtmp");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("char");
		this.stk[this.ptr++]=128;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f19;
		this.stk[this.ptr++]=$f20;
		var t27=this.stk[--this.ptr];
		var t28=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t28.call(this)==-1) return -1;
		} else {
			if (t27.call(this)==-1) return -1;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f22(){
		return -1;
	}
	function $f23(){
		this.ptr--;
		return -1;
	}
	function $f24(){
		this.stk[this.ptr++]="s";
		this.xget("s");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f25(){
		return -1;
	}
	function $f26(){
		this.xget("s");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f24;
		this.stk[this.ptr++]=$f25;
		var t32=this.stk[--this.ptr];
		var t33=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t33.call(this)==-1) return -1;
		} else {
			if (t32.call(this)==-1) return -1;
		}
	}
	function $f27(){
		this.xget("p");
		this.xget("msglen");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f22;
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
		}
		this.xget("msg");
		this.xget("p");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("setc");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.stk[this.ptr++]=$f23;
		var t31=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t31.call(this)==-1) return -1;
		}
		this.xget("fn1");
		this.eq();
		this.stk[this.ptr++]=$f26;
		var t34=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t34.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="n";
		this.xget("n");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="s";
		this.xget("s");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		this.xget("p");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f28(){
		this.stk[this.ptr++]="n";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="s";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f27;
		var t35=this.stk[--this.ptr];
		while (t35.call(this)!=-1);
		this.xget("n");
		this.xget("s");
	}
	function $f29(){
		this.xget("seta");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("cws");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("j");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f30(){
		this.xget("setb");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("cws");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("j");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f31(){
		this.xget("setc");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f32(){
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f33(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="arraytype";
		this.ne();
		this.stk[this.ptr++]=$f31;
		this.stk[this.ptr++]=$f32;
		var t36=this.stk[--this.ptr];
		var t37=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t37.call(this)==-1) return -1;
		} else {
			if (t36.call(this)==-1) return -1;
		}
		this.xget("cws");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("j");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f34(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("seta");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("setb");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.and();
	}
	function $f35(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("setb");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("seta");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.and();
	}
	function $f36(){
		this.stk[this.ptr++]=0;
	}
	function $f37(){
		this.stk[this.ptr++]=0;
	}
	function $f38(){
		this.xget("nextanotb");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f39(){
		this.xget("nextanotb");
		this.xget("i");
		this.xget("nextanotb");
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
	function $f40(){
		this.xget("nextbnota");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f41(){
		this.xget("nextbnota");
		this.xget("i");
		this.xget("nextbnota");
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
	function $f42(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("anotb");
		this.stk[this.ptr++]=$f38;
		this.stk[this.ptr++]=$f39;
		var t44=this.stk[--this.ptr];
		var t45=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t45.call(this)==-1) return -1;
		} else {
			if (t44.call(this)==-1) return -1;
		}
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("bnota");
		this.stk[this.ptr++]=$f40;
		this.stk[this.ptr++]=$f41;
		var t46=this.stk[--this.ptr];
		var t47=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t47.call(this)==-1) return -1;
		} else {
			if (t46.call(this)==-1) return -1;
		}
	}
	function $f43(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("nextanotb");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("nextbnota");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
	}
	function $f44(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("nextbnota");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("nextanotb");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
	}
	function $f45(){
		this.xget("swc");
		this.xget("enca");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f46(){
		this.xget("swc");
		this.xget("encb");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f47(){
		this.xget("swb");
		this.xget("encc");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f48(){
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.eq();
		this.stk[this.ptr++]=$f45;
		var t53=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t53.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.eq();
		this.stk[this.ptr++]=$f46;
		var t54=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t54.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.eq();
		this.stk[this.ptr++]=$f47;
		var t55=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t55.call(this)==-1) return -1;
		}
	}
	function $f49(){
		this.stk[this.ptr++]=$f48;
		var t56=this.stk[--this.ptr];
		while (t56.call(this)!=-1);
	}
	function $f50(){
		this.stk[this.ptr++]=$f49;
		var t59=this.stk[--this.ptr];
		var t57=this.stk[--this.ptr];
		for (var t58=0; t58<t57; t58++) {
			if (t59.call(this)==-1) break;
		}
	}
	function $f51(){
		this.xget("rows");
	}
	function $f52(){
		this.stk[this.ptr++]=44;
	}
	function $f53(){
		return -1;
	}
	function $f54(){
		this.xget("i");
		this.xget("numsscr");
	}
	function $f55(){
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=-1;
	}
	function $f56(){
		this.xget("swb");
		this.xget("enca");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f57(){
		this.xget("swc");
		this.xget("enca");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f58(){
		this.xget("sft");
		this.xget("enca");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f59(){
		this.xget("msglen");
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f56;
		var t65=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t65.call(this)==-1) return -1;
		}
		this.xget("nums");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f57;
		var t66=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t66.call(this)==-1) return -1;
		}
		this.xget("i");
		this.xget("abeforeb");
		this.stk[this.ptr++]=$f58;
		var t67=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t67.call(this)==-1) return -1;
		}
		this.xget("swb");
		this.xget("enca");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f60(){
		return -1;
	}
	function $f61(){
		this.xget("enca");
	}
	function $f62(){
		this.xget("encb");
	}
	function $f63(){
		this.xget("fn1");
		this.xget("encc");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f64(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("encc");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f65(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fn1");
		this.eq();
		this.stk[this.ptr++]=$f63;
		this.stk[this.ptr++]=$f64;
		var t72=this.stk[--this.ptr];
		var t73=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t73.call(this)==-1) return -1;
		} else {
			if (t72.call(this)==-1) return -1;
		}
	}
	function $f66(){
		this.xget("swc");
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.eq();
		this.stk[this.ptr++]=$f61;
		this.stk[this.ptr++]=$f62;
		var t70=this.stk[--this.ptr];
		var t71=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t71.call(this)==-1) return -1;
		} else {
			if (t70.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f65;
		var t76=this.stk[--this.ptr];
		var t74=this.stk[--this.ptr];
		for (var t75=0; t75<t74; t75++) {
			if (t76.call(this)==-1) break;
		}
		return -1;
	}
	function $f67(){
		this.xget("enca");
	}
	function $f68(){
		this.xget("encb");
	}
	function $f69(){
		this.xget("enca");
	}
	function $f70(){
		this.xget("encb");
	}
	function $f71(){
		this.xget("fn1");
		this.xget("encc");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f72(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("encc");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f73(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fn1");
		this.eq();
		this.stk[this.ptr++]=$f71;
		this.stk[this.ptr++]=$f72;
		var t82=this.stk[--this.ptr];
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		} else {
			if (t82.call(this)==-1) return -1;
		}
	}
	function $f74(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.eq();
		this.stk[this.ptr++]=$f67;
		this.stk[this.ptr++]=$f68;
		var t78=this.stk[--this.ptr];
		var t79=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t79.call(this)==-1) return -1;
		} else {
			if (t78.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("swc");
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.eq();
		this.stk[this.ptr++]=$f69;
		this.stk[this.ptr++]=$f70;
		var t80=this.stk[--this.ptr];
		var t81=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t81.call(this)==-1) return -1;
		} else {
			if (t80.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f73;
		var t86=this.stk[--this.ptr];
		var t84=this.stk[--this.ptr];
		for (var t85=0; t85<t84; t85++) {
			if (t86.call(this)==-1) break;
		}
		return -1;
	}
	function $f75(){
		this.xget("nums");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.xget("rem");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f66;
		var t77=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t77.call(this)==-1) return -1;
		}
		this.xget("nums");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.ne();
		this.xget("rem");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f74;
		var t87=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t87.call(this)==-1) return -1;
		}
	}
	function $f76(){
		this.xget("sft");
		this.xget("encb");
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("enca");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f77(){
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("bbeforea");
		this.stk[this.ptr++]=$f76;
		var t89=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t89.call(this)==-1) return -1;
		}
	}
	function $f78(){
		this.xget("i");
		this.xget("msglen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f77;
		var t90=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t90.call(this)==-1) return -1;
		}
		this.xget("swa");
		this.xget("encb");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("enca");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f79(){
		this.xget("sft");
		this.xget("enca");
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("encb");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f80(){
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("abeforeb");
		this.stk[this.ptr++]=$f79;
		var t92=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t92.call(this)==-1) return -1;
		}
	}
	function $f81(){
		this.xget("i");
		this.xget("msglen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f80;
		var t93=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t93.call(this)==-1) return -1;
		}
		this.xget("swb");
		this.xget("enca");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("encb");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f82(){
		this.xget("swa");
		this.xget("encc");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("enca");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f83(){
		this.xget("i");
		this.xget("abeforeb");
		this.stk[this.ptr++]=$f82;
		var t95=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t95.call(this)==-1) return -1;
		}
		this.xget("swb");
		this.xget("encc");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("encb");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f84(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("enca");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f85(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("encb");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f86(){
		this.xget("fn1");
		this.xget("encc");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f87(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.xget("encc");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f88(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fn1");
		this.eq();
		this.stk[this.ptr++]=$f86;
		this.stk[this.ptr++]=$f87;
		var t99=this.stk[--this.ptr];
		var t100=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t100.call(this)==-1) return -1;
		} else {
			if (t99.call(this)==-1) return -1;
		}
		return -1;
	}
	function $f89(){
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.eq();
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.eq();
		this.or();
		this.xget("nums");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fn1");
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f75;
		var t88=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t88.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.eq();
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("anotb");
		this.and();
		this.xget("rem");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f78;
		var t91=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t91.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.eq();
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("bnota");
		this.and();
		this.xget("rem");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f81;
		var t94=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t94.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.eq();
		this.xget("nums");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.xget("rem");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f83;
		var t96=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t96.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.eq();
		this.xget("seta");
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.and();
		this.xget("rem");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f84;
		var t97=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t97.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.eq();
		this.xget("setb");
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.and();
		this.xget("rem");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f85;
		var t98=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t98.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.eq();
		this.xget("nums");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.xget("rem");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f88;
		var t101=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t101.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="endofrow";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f90(){
		this.stk[this.ptr++]="rem";
		this.xget("c");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("j");
		this.xget("c");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("i");
		this.xget("msglen");
		this.eq();
		this.xget("endofrow");
		this.or();
		this.stk[this.ptr++]=$f60;
		var t69=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t69.call(this)==-1) return -1;
		}
		this.xget("i");
		this.xget("numsscr");
		this.stk[this.ptr++]="nums";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nchars";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f89;
		var t102=this.stk[--this.ptr];
		while (t102.call(this)!=-1);
	}
	function $f91(){
		this.xget("rem");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("padrow");
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("stp");
		this.xget("enca");
		this.stk[this.ptr++]="lastrow";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f92(){
		this.xget("rem");
		this.xget("padrow");
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("stp");
		this.xget("enca");
		this.stk[this.ptr++]="r";
		this.xget("r");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f93(){
		this.xget("lastrow");
		this.stk[this.ptr++]=$f53;
		var t62=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t62.call(this)==-1) return -1;
		}
		this.xget("sta");
		this.xget("enca");
		this.xget("i");
		this.xget("msglen");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f54;
		this.stk[this.ptr++]=$f55;
		var t63=this.stk[--this.ptr];
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		} else {
			if (t63.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="nums";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nchars";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f59;
		var t68=this.stk[--this.ptr];
		while (t68.call(this)!=-1);
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="endofrow";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f90;
		var t103=this.stk[--this.ptr];
		while (t103.call(this)!=-1);
		this.xget("r");
		this.xget("rows");
		this.eq();
		this.xget("rows");
		this.stk[this.ptr++]=-1;
		this.eq();
		this.or();
		this.xget("r");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.xget("i");
		this.xget("msglen");
		this.eq();
		this.and();
		this.xget("rem");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f91;
		this.stk[this.ptr++]=$f92;
		var t104=this.stk[--this.ptr];
		var t105=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t105.call(this)==-1) return -1;
		} else {
			if (t104.call(this)==-1) return -1;
		}
	}
	function $f94(){
	}
	function $f95(){
	}
	function $f96(){
	}
	function $f97(){
	}
	function $f98(){
		this.xget("chkmsg");
		this.xget("j");
		this.xget("char");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f99(){
		this.xget("chkmsg");
		this.xget("j");
		this.stk[this.ptr++]=29;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f100(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="char";
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("char");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f98;
		var t127=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t127.call(this)==-1) return -1;
		}
		this.xget("char");
		this.xget("fn1");
		this.eq();
		this.xget("i");
		this.stk[this.ptr++]=0;
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f99;
		var t128=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t128.call(this)==-1) return -1;
		}
	}
	function $f101(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="t1";
		this.xget("chkmsg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=86;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="t2";
		this.xget("t1");
		this.xget("chkmsg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=86;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k1";
		this.xget("k1");
		this.xget("t2");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=86;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k2";
		this.xget("k2");
		this.xget("t1");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=86;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f102(){
		this.xget("abmap");
	}
	function $f103(){
		this.xget("cmap");
	}
	function $f104(){
		this.xget("abmap");
	}
	function $f105(){
		this.xget("cmap");
	}
	function $f106(){
		this.xget("abmap");
	}
	function $f107(){
		this.xget("cmap");
	}
	function $f108(){
		this.xget("abmap");
	}
	function $f109(){
		this.xget("cmap");
	}
	function $f110(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cws");
		this.xget("i");
		this.xget("c");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
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
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=99;
		this.ne();
		this.stk[this.ptr++]=$f108;
		this.stk[this.ptr++]=$f109;
		var t145=this.stk[--this.ptr];
		var t146=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t146.call(this)==-1) return -1;
		} else {
			if (t145.call(this)==-1) return -1;
		}
		this.xget("i");
		this.stk[this.ptr++]=42;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f111(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="csum";
		this.xget("csum");
		this.xget("rcws");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f112(){
		this.xget("cws");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("c");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("c");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]="rcws";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="csum";
		this.xget("rcws");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("rcws");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f111;
		var t156=this.stk[--this.ptr];
		var t154=this.stk[--this.ptr];
		var t153=this.stk[--this.ptr];
		var t152=this.stk[--this.ptr];
		for (var t155=t152; t153<0 ? t155>=t154 : t155<=t154; t155+=t153) {
			this.stk[this.ptr++]=t155;
			if (t156.call(this)==-1) break;
		}
		this.xget("rcws");
		this.xget("rcws");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("csum");
		this.stk[this.ptr++]=103;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f113(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f114(){
		this.xget("encs");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f113;
		var t162=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t162);
	}
	function $f115(){
		this.stk[this.ptr++]=0;
	}
	function $f116(){
		this.stk[this.ptr++]=$f115;
	}
	function $f117(){
		this.stk[this.ptr++]=1;
	}
	function $f118(){
		this.stk[this.ptr++]=$f117;
	}
	function $f119(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=1;
		this.eq();
		this.stk[this.ptr++]=$f116;
		this.stk[this.ptr++]=$f118;
		var t164=this.stk[--this.ptr];
		var t165=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t165.call(this)==-1) return -1;
		} else {
			if (t164.call(this)==-1) return -1;
		}
		var t168=this.stk[--this.ptr];
		var t166=this.stk[--this.ptr];
		for (var t167=0; t167<t166; t167++) {
			if (t168.call(this)==-1) break;
		}
	}
	function $f120(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sbs";
		this.stk[this.ptr++]=Infinity;
		this.xget("cws");
		this.xget("i");
		this.xget("c");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("c");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f114;
		var t163=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t163);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.xget("sbs");
		this.stk[this.ptr++]=$f119;
		var t169=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t169);
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-1];
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("rowbits");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t171=this.stk[--this.ptr];
		var t170=this.stk[--this.ptr];
		if (t171 < 0) t=this.stk.splice(this.ptr-t170, -t171);
		else t=this.stk.splice(this.ptr-t170, t170-t171);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f121(){
		this.stk[this.ptr++]=1;
	}
	function $f122(){
		this.xget("rowbits");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f123(){
		this.stk[this.ptr++]=1;
	}
	function $f124(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.xget("symwid");
		this.stk[this.ptr++]=24;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f123;
		var t185=this.stk[--this.ptr];
		var t183=this.stk[--this.ptr];
		for (var t184=0; t184<t183; t184++) {
			if (t185.call(this)==-1) break;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
	}
	function $f125(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("rowheight");
		this.stk[this.ptr++]=$f122;
		var t182=this.stk[--this.ptr];
		var t180=this.stk[--this.ptr];
		for (var t181=0; t181<t180; t181++) {
			if (t182.call(this)==-1) break;
		}
		this.xget("sepheight");
		this.stk[this.ptr++]=$f124;
		var t188=this.stk[--this.ptr];
		var t186=this.stk[--this.ptr];
		for (var t187=0; t187<t186; t187++) {
			if (t188.call(this)==-1) break;
		}
	}
	function $f126(){
		this.xget("rowbits");
		this.xget("r");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f127(){
		this.stk[this.ptr++]=1;
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
	this.stk[this.ptr++]="rows";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="columns";
	this.stk[this.ptr++]=8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowheight";
	this.stk[this.ptr++]=10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sepheight";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encoding";
	this.stk[this.ptr++]=BWIPJS.psstring("auto");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parse";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parsefnc";
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
	this.stk[this.ptr++]="rows";
	this.xget("rows");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="columns";
	this.xget("columns");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowheight";
	this.xget("rowheight");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sepheight";
	this.xget("sepheight");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("columns");
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	this.xget("columns");
	this.stk[this.ptr++]=62;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
	this.and();
	this.xget("rows");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	this.xget("rows");
	this.stk[this.ptr++]=44;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
	this.and();
	this.xget("rows");
	this.stk[this.ptr++]=-1;
	this.eq();
	this.or();
	this.and();
	this.stk[this.ptr++]=$f6;
	var t6=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t6.call(this)==-1) return -1;
	}
	this.xget("parse");
	this.stk[this.ptr++]=$f10;
	var t10=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t10.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="barlen";
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="swa";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="swb";
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="swc";
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sft";
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn1";
	this.stk[this.ptr++]=-5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn2";
	this.stk[this.ptr++]=-6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn3";
	this.stk[this.ptr++]=-7;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn4";
	this.stk[this.ptr++]=-8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sta";
	this.stk[this.ptr++]=-9;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="stp";
	this.stk[this.ptr++]=-10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charmaps";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([32,32,BWIPJS.psstring("00")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("!"),BWIPJS.psstring("!"),BWIPJS.psstring("01")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("\""),BWIPJS.psstring("\""),BWIPJS.psstring("02")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("#"),BWIPJS.psstring("#"),BWIPJS.psstring("03")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("$"),BWIPJS.psstring("$"),BWIPJS.psstring("04")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("%"),BWIPJS.psstring("%"),BWIPJS.psstring("05")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("&"),BWIPJS.psstring("&"),BWIPJS.psstring("06")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("'"),BWIPJS.psstring("'"),BWIPJS.psstring("07")]);
	this.stk[this.ptr++]=BWIPJS.psarray([40,40,BWIPJS.psstring("08")]);
	this.stk[this.ptr++]=BWIPJS.psarray([41,41,BWIPJS.psstring("09")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("*"),BWIPJS.psstring("*"),BWIPJS.psstring("10")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("+"),BWIPJS.psstring("+"),BWIPJS.psstring("11")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(","),BWIPJS.psstring(","),BWIPJS.psstring("12")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("-"),BWIPJS.psstring("-"),BWIPJS.psstring("13")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("."),BWIPJS.psstring("."),BWIPJS.psstring("14")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("/"),BWIPJS.psstring("/"),BWIPJS.psstring("15")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0"),BWIPJS.psstring("0"),BWIPJS.psstring("16")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("1"),BWIPJS.psstring("1"),BWIPJS.psstring("17")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("2"),BWIPJS.psstring("2"),BWIPJS.psstring("18")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("3"),BWIPJS.psstring("3"),BWIPJS.psstring("19")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("4"),BWIPJS.psstring("4"),BWIPJS.psstring("20")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("5"),BWIPJS.psstring("5"),BWIPJS.psstring("21")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("6"),BWIPJS.psstring("6"),BWIPJS.psstring("22")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("7"),BWIPJS.psstring("7"),BWIPJS.psstring("23")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("8"),BWIPJS.psstring("8"),BWIPJS.psstring("24")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("9"),BWIPJS.psstring("9"),BWIPJS.psstring("25")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(":"),BWIPJS.psstring(":"),BWIPJS.psstring("26")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(";"),BWIPJS.psstring(";"),BWIPJS.psstring("27")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("<"),BWIPJS.psstring("<"),BWIPJS.psstring("28")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("="),BWIPJS.psstring("="),BWIPJS.psstring("29")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(">"),BWIPJS.psstring(">"),BWIPJS.psstring("30")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("?"),BWIPJS.psstring("?"),BWIPJS.psstring("31")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("@"),BWIPJS.psstring("@"),BWIPJS.psstring("32")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("A"),BWIPJS.psstring("A"),BWIPJS.psstring("33")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("B"),BWIPJS.psstring("B"),BWIPJS.psstring("34")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("C"),BWIPJS.psstring("C"),BWIPJS.psstring("35")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("D"),BWIPJS.psstring("D"),BWIPJS.psstring("36")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("E"),BWIPJS.psstring("E"),BWIPJS.psstring("37")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("F"),BWIPJS.psstring("F"),BWIPJS.psstring("38")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("G"),BWIPJS.psstring("G"),BWIPJS.psstring("39")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("H"),BWIPJS.psstring("H"),BWIPJS.psstring("40")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("I"),BWIPJS.psstring("I"),BWIPJS.psstring("41")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("J"),BWIPJS.psstring("J"),BWIPJS.psstring("42")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("K"),BWIPJS.psstring("K"),BWIPJS.psstring("43")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("L"),BWIPJS.psstring("L"),BWIPJS.psstring("44")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("M"),BWIPJS.psstring("M"),BWIPJS.psstring("45")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("N"),BWIPJS.psstring("N"),BWIPJS.psstring("46")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("O"),BWIPJS.psstring("O"),BWIPJS.psstring("47")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("P"),BWIPJS.psstring("P"),BWIPJS.psstring("48")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Q"),BWIPJS.psstring("Q"),BWIPJS.psstring("49")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("R"),BWIPJS.psstring("R"),BWIPJS.psstring("50")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("S"),BWIPJS.psstring("S"),BWIPJS.psstring("51")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("T"),BWIPJS.psstring("T"),BWIPJS.psstring("52")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("U"),BWIPJS.psstring("U"),BWIPJS.psstring("53")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("V"),BWIPJS.psstring("V"),BWIPJS.psstring("54")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("W"),BWIPJS.psstring("W"),BWIPJS.psstring("55")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("X"),BWIPJS.psstring("X"),BWIPJS.psstring("56")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Y"),BWIPJS.psstring("Y"),BWIPJS.psstring("57")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Z"),BWIPJS.psstring("Z"),BWIPJS.psstring("58")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("["),BWIPJS.psstring("["),BWIPJS.psstring("59")]);
	this.stk[this.ptr++]=BWIPJS.psarray([92,92,BWIPJS.psstring("60")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("]"),BWIPJS.psstring("]"),BWIPJS.psstring("61")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("^"),BWIPJS.psstring("^"),BWIPJS.psstring("62")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("_"),BWIPJS.psstring("_"),BWIPJS.psstring("63")]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,BWIPJS.psstring("`"),BWIPJS.psstring("64")]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,BWIPJS.psstring("a"),BWIPJS.psstring("65")]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,BWIPJS.psstring("b"),BWIPJS.psstring("66")]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,BWIPJS.psstring("c"),BWIPJS.psstring("67")]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,BWIPJS.psstring("d"),BWIPJS.psstring("68")]);
	this.stk[this.ptr++]=BWIPJS.psarray([5,BWIPJS.psstring("e"),BWIPJS.psstring("69")]);
	this.stk[this.ptr++]=BWIPJS.psarray([6,BWIPJS.psstring("f"),BWIPJS.psstring("70")]);
	this.stk[this.ptr++]=BWIPJS.psarray([7,BWIPJS.psstring("g"),BWIPJS.psstring("71")]);
	this.stk[this.ptr++]=BWIPJS.psarray([8,BWIPJS.psstring("h"),BWIPJS.psstring("72")]);
	this.stk[this.ptr++]=BWIPJS.psarray([9,BWIPJS.psstring("i"),BWIPJS.psstring("73")]);
	this.stk[this.ptr++]=BWIPJS.psarray([10,BWIPJS.psstring("j"),BWIPJS.psstring("74")]);
	this.stk[this.ptr++]=BWIPJS.psarray([11,BWIPJS.psstring("k"),BWIPJS.psstring("75")]);
	this.stk[this.ptr++]=BWIPJS.psarray([12,BWIPJS.psstring("l"),BWIPJS.psstring("76")]);
	this.stk[this.ptr++]=BWIPJS.psarray([13,BWIPJS.psstring("m"),BWIPJS.psstring("77")]);
	this.stk[this.ptr++]=BWIPJS.psarray([14,BWIPJS.psstring("n"),BWIPJS.psstring("78")]);
	this.stk[this.ptr++]=BWIPJS.psarray([15,BWIPJS.psstring("o"),BWIPJS.psstring("79")]);
	this.stk[this.ptr++]=BWIPJS.psarray([16,BWIPJS.psstring("p"),BWIPJS.psstring("80")]);
	this.stk[this.ptr++]=BWIPJS.psarray([17,BWIPJS.psstring("q"),BWIPJS.psstring("81")]);
	this.stk[this.ptr++]=BWIPJS.psarray([18,BWIPJS.psstring("r"),BWIPJS.psstring("82")]);
	this.stk[this.ptr++]=BWIPJS.psarray([19,BWIPJS.psstring("s"),BWIPJS.psstring("83")]);
	this.stk[this.ptr++]=BWIPJS.psarray([20,BWIPJS.psstring("t"),BWIPJS.psstring("84")]);
	this.stk[this.ptr++]=BWIPJS.psarray([21,BWIPJS.psstring("u"),BWIPJS.psstring("85")]);
	this.stk[this.ptr++]=BWIPJS.psarray([22,BWIPJS.psstring("v"),BWIPJS.psstring("86")]);
	this.stk[this.ptr++]=BWIPJS.psarray([23,BWIPJS.psstring("w"),BWIPJS.psstring("87")]);
	this.stk[this.ptr++]=BWIPJS.psarray([24,BWIPJS.psstring("x"),BWIPJS.psstring("88")]);
	this.stk[this.ptr++]=BWIPJS.psarray([25,BWIPJS.psstring("y"),BWIPJS.psstring("89")]);
	this.stk[this.ptr++]=BWIPJS.psarray([26,BWIPJS.psstring("z"),BWIPJS.psstring("90")]);
	this.stk[this.ptr++]=BWIPJS.psarray([27,BWIPJS.psstring("{"),BWIPJS.psstring("91")]);
	this.stk[this.ptr++]=BWIPJS.psarray([28,BWIPJS.psstring("|"),BWIPJS.psstring("92")]);
	this.stk[this.ptr++]=BWIPJS.psarray([29,BWIPJS.psstring("}"),BWIPJS.psstring("93")]);
	this.stk[this.ptr++]=BWIPJS.psarray([30,BWIPJS.psstring("~"),BWIPJS.psstring("94")]);
	this.stk[this.ptr++]=BWIPJS.psarray([31,127,BWIPJS.psstring("95")]);
	this.stk[this.ptr++]=Infinity;
	this.xget("fn3");
	this.xget("fn3");
	this.stk[this.ptr++]=BWIPJS.psstring("96");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("fn2");
	this.xget("fn2");
	this.stk[this.ptr++]=BWIPJS.psstring("97");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("sft");
	this.xget("sft");
	this.stk[this.ptr++]=BWIPJS.psstring("98");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("swc");
	this.xget("swc");
	this.stk[this.ptr++]=BWIPJS.psstring("99");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("swb");
	this.xget("fn4");
	this.xget("swb");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("fn4");
	this.xget("swa");
	this.xget("swa");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("fn1");
	this.xget("fn1");
	this.xget("fn1");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("sta");
	this.xget("sta");
	this.xget("sta");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("stp");
	this.xget("stp");
	this.xget("stp");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=105;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=105;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=105;
	this.stk[this.ptr-1]={};
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("charmaps");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f13;
	var t21=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	var t18=this.stk[--this.ptr];
	var t17=this.stk[--this.ptr];
	for (var t20=t17; t18<0 ? t20>=t19 : t20<=t19; t20+=t18) {
		this.stk[this.ptr++]=t20;
		if (t21.call(this)==-1) break;
	}
	this.stk[this.ptr++]="seta";
	this.xget("charvals");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setb";
	this.xget("charvals");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setc";
	this.xget("charvals");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fncvals";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC1");
	this.xget("fn1");
	this.stk[this.ptr++]=BWIPJS.psstring("FNC3");
	this.xget("fn3");
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msg";
	this.xget("barlen");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f18;
	var t26=this.stk[--this.ptr];
	while (t26.call(this)!=-1);
	this.stk[this.ptr++]="msg";
	this.xget("msg");
	this.stk[this.ptr++]=0;
	this.xget("j");
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msglen";
	this.xget("msg");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msgtmp";
	this.stk[this.ptr++]=BWIPJS.psarray([]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("msg");
	this.stk[this.ptr++]=$f21;
	var t29=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t29);
	this.stk[this.ptr++]="msg";
	this.xget("msgtmp");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msglen";
	this.xget("msg");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numsscr";
	this.stk[this.ptr++]=$f28;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="enca";
	this.stk[this.ptr++]=$f29;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encb";
	this.stk[this.ptr++]=$f30;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encc";
	this.stk[this.ptr++]=$f33;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="anotb";
	this.stk[this.ptr++]=$f34;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bnota";
	this.stk[this.ptr++]=$f35;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextanotb";
	this.stk[this.ptr++]=Infinity;
	this.xget("msg");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=$f36;
	var t40=this.stk[--this.ptr];
	var t38=this.stk[--this.ptr];
	for (var t39=0; t39<t38; t39++) {
		if (t40.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextbnota";
	this.stk[this.ptr++]=Infinity;
	this.xget("msg");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=$f37;
	var t43=this.stk[--this.ptr];
	var t41=this.stk[--this.ptr];
	for (var t42=0; t42<t41; t42++) {
		if (t43.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("msg");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f42;
	var t52=this.stk[--this.ptr];
	var t50=this.stk[--this.ptr];
	var t49=this.stk[--this.ptr];
	var t48=this.stk[--this.ptr];
	for (var t51=t48; t49<0 ? t51>=t50 : t51<=t50; t51+=t49) {
		this.stk[this.ptr++]=t51;
		if (t52.call(this)==-1) break;
	}
	this.stk[this.ptr++]="abeforeb";
	this.stk[this.ptr++]=$f43;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bbeforea";
	this.stk[this.ptr++]=$f44;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="padrow";
	this.stk[this.ptr++]=$f50;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cws";
	this.xget("c");
	this.stk[this.ptr++]=5;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.xget("rows");
	this.stk[this.ptr++]=-1;
	this.ne();
	this.stk[this.ptr++]=$f51;
	this.stk[this.ptr++]=$f52;
	var t60=this.stk[--this.ptr];
	var t61=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t61.call(this)==-1) return -1;
	} else {
		if (t60.call(this)==-1) return -1;
	}
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="r";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lastrow";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f93;
	var t106=this.stk[--this.ptr];
	while (t106.call(this)!=-1);
	this.stk[this.ptr++]="cws";
	this.xget("cws");
	this.stk[this.ptr++]=0;
	this.xget("j");
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="abmap";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=64;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=95;
	this.stk[this.ptr++]=$f94;
	var t111=this.stk[--this.ptr];
	var t109=this.stk[--this.ptr];
	var t108=this.stk[--this.ptr];
	var t107=this.stk[--this.ptr];
	for (var t110=t107; t108<0 ? t110>=t109 : t110<=t109; t110+=t108) {
		this.stk[this.ptr++]=t110;
		if (t111.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=15;
	this.stk[this.ptr++]=$f95;
	var t116=this.stk[--this.ptr];
	var t114=this.stk[--this.ptr];
	var t113=this.stk[--this.ptr];
	var t112=this.stk[--this.ptr];
	for (var t115=t112; t113<0 ? t115>=t114 : t115<=t114; t115+=t113) {
		this.stk[this.ptr++]=t115;
		if (t116.call(this)==-1) break;
	}
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=63;
	this.stk[this.ptr++]=$f96;
	var t121=this.stk[--this.ptr];
	var t119=this.stk[--this.ptr];
	var t118=this.stk[--this.ptr];
	var t117=this.stk[--this.ptr];
	for (var t120=t117; t118<0 ? t120>=t119 : t120<=t119; t120+=t118) {
		this.stk[this.ptr++]=t120;
		if (t121.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cmap";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=85;
	this.stk[this.ptr++]=$f97;
	var t126=this.stk[--this.ptr];
	var t124=this.stk[--this.ptr];
	var t123=this.stk[--this.ptr];
	var t122=this.stk[--this.ptr];
	for (var t125=t122; t123<0 ? t125>=t124 : t125<=t124; t125+=t123) {
		this.stk[this.ptr++]=t125;
		if (t126.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="chkmsg";
	this.xget("msglen");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("msglen");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f100;
	var t133=this.stk[--this.ptr];
	var t131=this.stk[--this.ptr];
	var t130=this.stk[--this.ptr];
	var t129=this.stk[--this.ptr];
	for (var t132=t129; t130<0 ? t132>=t131 : t132<=t131; t132+=t130) {
		this.stk[this.ptr++]=t132;
		if (t133.call(this)==-1) break;
	}
	this.stk[this.ptr++]="t1";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="t2";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="k1";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="k2";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("j");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f101;
	var t138=this.stk[--this.ptr];
	var t136=this.stk[--this.ptr];
	var t135=this.stk[--this.ptr];
	var t134=this.stk[--this.ptr];
	for (var t137=t134; t135<0 ? t137>=t136 : t137<=t136; t137+=t135) {
		this.stk[this.ptr++]=t137;
		if (t138.call(this)==-1) break;
	}
	this.xget("cws");
	this.xget("cws");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("cset");
	this.stk[this.ptr++]=BWIPJS.psstring("setc");
	this.ne();
	this.stk[this.ptr++]=$f102;
	this.stk[this.ptr++]=$f103;
	var t139=this.stk[--this.ptr];
	var t140=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t140.call(this)==-1) return -1;
	} else {
		if (t139.call(this)==-1) return -1;
	}
	this.xget("k1");
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.xget("cws");
	this.xget("cws");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("cset");
	this.stk[this.ptr++]=BWIPJS.psstring("setc");
	this.ne();
	this.stk[this.ptr++]=$f104;
	this.stk[this.ptr++]=$f105;
	var t141=this.stk[--this.ptr];
	var t142=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t142.call(this)==-1) return -1;
	} else {
		if (t141.call(this)==-1) return -1;
	}
	this.xget("k2");
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.xget("cws");
	this.stk[this.ptr++]=2;
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
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]=99;
	this.ne();
	this.stk[this.ptr++]=$f106;
	this.stk[this.ptr++]=$f107;
	var t143=this.stk[--this.ptr];
	var t144=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t144.call(this)==-1) return -1;
	} else {
		if (t143.call(this)==-1) return -1;
	}
	this.xget("r");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=1;
	this.xget("r");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f110;
	var t151=this.stk[--this.ptr];
	var t149=this.stk[--this.ptr];
	var t148=this.stk[--this.ptr];
	var t147=this.stk[--this.ptr];
	for (var t150=t147; t148<0 ? t150>=t149 : t150<=t149; t150+=t148) {
		this.stk[this.ptr++]=t150;
		if (t151.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("r");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f112;
	var t161=this.stk[--this.ptr];
	var t159=this.stk[--this.ptr];
	var t158=this.stk[--this.ptr];
	var t157=this.stk[--this.ptr];
	for (var t160=t157; t158<0 ? t160>=t159 : t160<=t159; t160+=t158) {
		this.stk[this.ptr++]=t160;
		if (t161.call(this)==-1) break;
	}
	this.stk[this.ptr++]="encs";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("212222"),BWIPJS.psstring("222122"),BWIPJS.psstring("222221"),BWIPJS.psstring("121223"),BWIPJS.psstring("121322"),BWIPJS.psstring("131222"),BWIPJS.psstring("122213"),BWIPJS.psstring("122312"),BWIPJS.psstring("132212"),BWIPJS.psstring("221213"),BWIPJS.psstring("221312"),BWIPJS.psstring("231212"),BWIPJS.psstring("112232"),BWIPJS.psstring("122132"),BWIPJS.psstring("122231"),BWIPJS.psstring("113222"),BWIPJS.psstring("123122"),BWIPJS.psstring("123221"),BWIPJS.psstring("223211"),BWIPJS.psstring("221132"),BWIPJS.psstring("221231"),BWIPJS.psstring("213212"),BWIPJS.psstring("223112"),BWIPJS.psstring("312131"),BWIPJS.psstring("311222"),BWIPJS.psstring("321122"),BWIPJS.psstring("321221"),BWIPJS.psstring("312212"),BWIPJS.psstring("322112"),BWIPJS.psstring("322211"),BWIPJS.psstring("212123"),BWIPJS.psstring("212321"),BWIPJS.psstring("232121"),BWIPJS.psstring("111323"),BWIPJS.psstring("131123"),BWIPJS.psstring("131321"),BWIPJS.psstring("112313"),BWIPJS.psstring("132113"),BWIPJS.psstring("132311"),BWIPJS.psstring("211313"),BWIPJS.psstring("231113"),BWIPJS.psstring("231311"),BWIPJS.psstring("112133"),BWIPJS.psstring("112331"),BWIPJS.psstring("132131"),BWIPJS.psstring("113123"),BWIPJS.psstring("113321"),BWIPJS.psstring("133121"),BWIPJS.psstring("313121"),BWIPJS.psstring("211331"),BWIPJS.psstring("231131"),BWIPJS.psstring("213113"),BWIPJS.psstring("213311"),BWIPJS.psstring("213131"),BWIPJS.psstring("311123"),BWIPJS.psstring("311321"),BWIPJS.psstring("331121"),BWIPJS.psstring("312113"),BWIPJS.psstring("312311"),BWIPJS.psstring("332111"),BWIPJS.psstring("314111"),BWIPJS.psstring("221411"),BWIPJS.psstring("431111"),BWIPJS.psstring("111224"),BWIPJS.psstring("111422"),BWIPJS.psstring("121124"),BWIPJS.psstring("121421"),BWIPJS.psstring("141122"),BWIPJS.psstring("141221"),BWIPJS.psstring("112214"),BWIPJS.psstring("112412"),BWIPJS.psstring("122114"),BWIPJS.psstring("122411"),BWIPJS.psstring("142112"),BWIPJS.psstring("142211"),BWIPJS.psstring("241211"),BWIPJS.psstring("221114"),BWIPJS.psstring("413111"),BWIPJS.psstring("241112"),BWIPJS.psstring("134111"),BWIPJS.psstring("111242"),BWIPJS.psstring("121142"),BWIPJS.psstring("121241"),BWIPJS.psstring("114212"),BWIPJS.psstring("124112"),BWIPJS.psstring("124211"),BWIPJS.psstring("411212"),BWIPJS.psstring("421112"),BWIPJS.psstring("421211"),BWIPJS.psstring("212141"),BWIPJS.psstring("214121"),BWIPJS.psstring("412121"),BWIPJS.psstring("111143"),BWIPJS.psstring("111341"),BWIPJS.psstring("131141"),BWIPJS.psstring("114113"),BWIPJS.psstring("114311"),BWIPJS.psstring("411113"),BWIPJS.psstring("411311"),BWIPJS.psstring("113141"),BWIPJS.psstring("114131"),BWIPJS.psstring("311141"),BWIPJS.psstring("411131"),BWIPJS.psstring("211412"),BWIPJS.psstring("2331112")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowbits";
	this.xget("r");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("r");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f120;
	var t176=this.stk[--this.ptr];
	var t174=this.stk[--this.ptr];
	var t173=this.stk[--this.ptr];
	var t172=this.stk[--this.ptr];
	for (var t175=t172; t173<0 ? t175>=t174 : t175<=t174; t175+=t173) {
		this.stk[this.ptr++]=t175;
		if (t176.call(this)==-1) break;
	}
	this.stk[this.ptr++]="symwid";
	this.xget("c");
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=57;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pixs";
	this.stk[this.ptr++]=Infinity;
	this.xget("symwid");
	this.xget("sepheight");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f121;
	var t179=this.stk[--this.ptr];
	var t177=this.stk[--this.ptr];
	for (var t178=0; t178<t177; t178++) {
		if (t179.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("r");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f125;
	var t193=this.stk[--this.ptr];
	var t191=this.stk[--this.ptr];
	var t190=this.stk[--this.ptr];
	var t189=this.stk[--this.ptr];
	for (var t192=t189; t190<0 ? t192>=t191 : t192<=t191; t192+=t190) {
		this.stk[this.ptr++]=t192;
		if (t193.call(this)==-1) break;
	}
	this.xget("rowheight");
	this.stk[this.ptr++]=$f126;
	var t196=this.stk[--this.ptr];
	var t194=this.stk[--this.ptr];
	for (var t195=0; t195<t194; t195++) {
		if (t196.call(this)==-1) break;
	}
	this.xget("symwid");
	this.xget("sepheight");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f127;
	var t199=this.stk[--this.ptr];
	var t197=this.stk[--this.ptr];
	for (var t198=0; t198<t197; t198++) {
		if (t199.call(this)==-1) break;
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
	this.xget("symwid");
	this.stk[this.ptr++]="pixy";
	this.xget("pixs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.xget("symwid");
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]="height";
	this.xget("pixs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.xget("symwid");
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="width";
	this.xget("symwid");
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
	var t200=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t200.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("codablockf");
// END OF codablockf

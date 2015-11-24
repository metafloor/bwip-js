// file: bwipp/posicode.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN posicode
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("posicode", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("posicode", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
BWIPJS.bwipp["posicode"]=function() {
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
	function $f8(){
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
		this.stk[this.ptr++]=$f6;
		this.stk[this.ptr++]=$f7;
		var t6=this.stk[--this.ptr];
		var t7=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t7.call(this)==-1) return -1;
		} else {
			if (t6.call(this)==-1) return -1;
		}
	}
	function $f9(){
		this.stk[this.ptr++]="msg";
		this.xget("barcode");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("barcode");
		this.stk[this.ptr++]=$f8;
		var t8=this.stk[--this.ptr];
		while (t8.call(this)!=-1);
	}
	function $f10(){
		this.stk[this.ptr++]="normal";
	}
	function $f11(){
		this.stk[this.ptr++]="limited";
	}
	function $f12(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f13(){
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
		this.stk[this.ptr++]=$f12;
		var t12=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t12.call(this)==-1) return -1;
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
	function $f14(){
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
		this.stk[this.ptr++]=$f13;
		var t17=this.stk[--this.ptr];
		var t15=this.stk[--this.ptr];
		var t14=this.stk[--this.ptr];
		var t13=this.stk[--this.ptr];
		for (var t16=t13; t14<0 ? t16>=t15 : t16<=t15; t16+=t14) {
			this.stk[this.ptr++]=t16;
			if (t17.call(this)==-1) break;
		}
	}
	function $f15(){
		this.stk[this.ptr++]="encoding";
		this.stk[this.ptr++]=BWIPJS.psstring("raw");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f16(){
		return -1;
	}
	function $f17(){
		this.xget("i");
		this.xget("barlen");
		this.eq();
		this.stk[this.ptr++]=$f16;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cw";
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cws");
		this.xget("j");
		this.xget("cw");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f18(){
		this.stk[this.ptr++]="cws";
		this.xget("barlen");
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f17;
		var t25=this.stk[--this.ptr];
		while (t25.call(this)!=-1);
		this.stk[this.ptr++]="cws";
		this.xget("cws");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="text";
		this.stk[this.ptr++]=BWIPJS.psstring("");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f19(){
		return -1;
	}
	function $f20(){
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
		this.xget("text");
		this.xget("j");
		this.stk[this.ptr++]=BWIPJS.psstring(" ");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f21(){
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f22(){
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=94;
		this.ne();
		this.stk[this.ptr++]=$f20;
		this.stk[this.ptr++]=$f21;
		var t28=this.stk[--this.ptr];
		var t29=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t29.call(this)==-1) return -1;
		} else {
			if (t28.call(this)==-1) return -1;
		}
	}
	function $f23(){
		this.xget("i");
		this.xget("barlen");
		this.eq();
		this.stk[this.ptr++]=$f19;
		var t27=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t27.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="char";
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("text");
		this.xget("j");
		this.xget("char");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
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
		this.stk[this.ptr++]=$f22;
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
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
	function $f24(){
		this.stk[this.ptr++]=0;
	}
	function $f25(){
		this.stk[this.ptr++]=0;
	}
	function $f26(){
		this.xget("numEA");
		this.xget("i");
		this.xget("numEA");
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
	function $f27(){
		this.xget("numSA");
		this.xget("i");
		this.xget("numSA");
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
	function $f28(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=128;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f26;
		this.stk[this.ptr++]=$f27;
		var t38=this.stk[--this.ptr];
		var t39=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t39.call(this)==-1) return -1;
		} else {
			if (t38.call(this)==-1) return -1;
		}
	}
	function $f29(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f28;
		var t40=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t40.call(this)==-1) return -1;
		}
	}
	function $f30(){
		this.xget("numSA");
	}
	function $f31(){
		this.xget("numEA");
	}
	function $f32(){
		this.stk[this.ptr++]=3;
	}
	function $f33(){
		this.stk[this.ptr++]=5;
	}
	function $f34(){
		this.stk[this.ptr++]="msgtmp";
		this.stk[this.ptr++]=Infinity;
		this.xget("msgtmp");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("fn4");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f35(){
		this.stk[this.ptr++]="msgtmp";
		this.stk[this.ptr++]=Infinity;
		this.xget("msgtmp");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("fn4");
		this.xget("fn4");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ea";
		this.xget("ea");
		this.not();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f36(){
		this.xget("ea");
		this.stk[this.ptr++]=$f30;
		this.stk[this.ptr++]=$f31;
		var t46=this.stk[--this.ptr];
		var t47=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t47.call(this)==-1) return -1;
		} else {
			if (t46.call(this)==-1) return -1;
		}
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("msglen");
		this.eq();
		this.stk[this.ptr++]=$f32;
		this.stk[this.ptr++]=$f33;
		var t48=this.stk[--this.ptr];
		var t49=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t49.call(this)==-1) return -1;
		} else {
			if (t48.call(this)==-1) return -1;
		}
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f34;
		this.stk[this.ptr++]=$f35;
		var t50=this.stk[--this.ptr];
		var t51=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t51.call(this)==-1) return -1;
		} else {
			if (t50.call(this)==-1) return -1;
		}
	}
	function $f37(){
		this.xget("c");
		this.stk[this.ptr++]=127;
		this.and();
	}
	function $f38(){
		this.xget("c");
	}
	function $f39(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="c";
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ea");
		this.xget("c");
		this.stk[this.ptr++]=128;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.xor();
		this.not();
		this.xget("c");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f36;
		var t52=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t52.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="msgtmp";
		this.stk[this.ptr++]=Infinity;
		this.xget("msgtmp");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("c");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f37;
		this.stk[this.ptr++]=$f38;
		var t53=this.stk[--this.ptr];
		var t54=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t54.call(this)==-1) return -1;
		} else {
			if (t53.call(this)==-1) return -1;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f40(){
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
	function $f41(){
		return -1;
	}
	function $f42(){
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f43(){
		this.stk[this.ptr++]=-99;
	}
	function $f44(){
		this.xget("char1");
		this.xget("cset");
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		this.xget("enc");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f45(){
		this.xget("sf2");
		this.xget("cset");
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		this.xget("enc");
		this.xget("char1");
		this.xget("set2");
		this.xget("enc");
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f46(){
		this.xget("la1");
		this.xget("cset");
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		this.xget("enc");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("set1");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f47(){
		this.xget("la0");
		this.xget("cset");
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		this.xget("enc");
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("set0");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f48(){
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("set0");
		this.eq();
		this.stk[this.ptr++]=$f46;
		this.stk[this.ptr++]=$f47;
		var t65=this.stk[--this.ptr];
		var t66=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t66.call(this)==-1) return -1;
		} else {
			if (t65.call(this)==-1) return -1;
		}
		return -1;
	}
	function $f49(){
		this.xget("sf1");
		this.xget("cset");
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		this.xget("enc");
		this.xget("char1");
		this.xget("set1");
		this.xget("enc");
	}
	function $f50(){
		this.xget("sf0");
		this.xget("cset");
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		this.xget("enc");
		this.xget("char1");
		this.xget("set0");
		this.xget("enc");
	}
	function $f51(){
		this.xget("cset");
		this.stk[this.ptr++]=BWIPJS.psstring("set0");
		this.eq();
		this.stk[this.ptr++]=$f49;
		this.stk[this.ptr++]=$f50;
		var t67=this.stk[--this.ptr];
		var t68=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t68.call(this)==-1) return -1;
		} else {
			if (t67.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f52(){
		this.stk[this.ptr++]="char1";
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="char2";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("msglen");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f42;
		this.stk[this.ptr++]=$f43;
		var t61=this.stk[--this.ptr];
		var t62=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t62.call(this)==-1) return -1;
		} else {
			if (t61.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cset");
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		this.xget("char1");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f44;
		var t63=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t63.call(this)==-1) return -1;
		}
		this.xget("set2");
		this.xget("char1");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f45;
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		}
		this.xget("cset");
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		this.xget("char2");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.stk[this.ptr++]=$f48;
		this.stk[this.ptr++]=$f51;
		var t69=this.stk[--this.ptr];
		var t70=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t70.call(this)==-1) return -1;
		} else {
			if (t69.call(this)==-1) return -1;
		}
		return -1;
	}
	function $f53(){
		this.xget("i");
		this.xget("msglen");
		this.eq();
		this.stk[this.ptr++]=$f41;
		var t60=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t60.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=$f52;
		var t71=this.stk[--this.ptr];
		while (t71.call(this)!=-1);
	}
	function $f54(){
		this.stk[this.ptr++]="fncvals";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("FNC1");
		this.xget("fn1");
		this.stk[this.ptr++]=BWIPJS.psstring("FNC2");
		this.xget("fn2");
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
		this.stk[this.ptr++]="text";
		this.xget("barlen");
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f23;
		var t31=this.stk[--this.ptr];
		while (t31.call(this)!=-1);
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
		this.stk[this.ptr++]="text";
		this.xget("text");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numSA";
		this.stk[this.ptr++]=Infinity;
		this.xget("msglen");
		this.stk[this.ptr++]=$f24;
		var t34=this.stk[--this.ptr];
		var t32=this.stk[--this.ptr];
		for (var t33=0; t33<t32; t33++) {
			if (t34.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numEA";
		this.stk[this.ptr++]=Infinity;
		this.xget("msglen");
		this.stk[this.ptr++]=$f25;
		var t37=this.stk[--this.ptr];
		var t35=this.stk[--this.ptr];
		for (var t36=0; t36<t35; t36++) {
			if (t37.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msglen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f29;
		var t45=this.stk[--this.ptr];
		var t43=this.stk[--this.ptr];
		var t42=this.stk[--this.ptr];
		var t41=this.stk[--this.ptr];
		for (var t44=t41; t42<0 ? t44>=t43 : t44<=t43; t44+=t42) {
			this.stk[this.ptr++]=t44;
			if (t45.call(this)==-1) break;
		}
		this.stk[this.ptr++]="ea";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msgtmp";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("msglen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f39;
		var t59=this.stk[--this.ptr];
		var t57=this.stk[--this.ptr];
		var t56=this.stk[--this.ptr];
		var t55=this.stk[--this.ptr];
		for (var t58=t55; t56<0 ? t58>=t57 : t58<=t57; t58+=t56) {
			this.stk[this.ptr++]=t58;
			if (t59.call(this)==-1) break;
		}
		this.stk[this.ptr++]="msg";
		this.xget("msgtmp");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msglen";
		this.xget("msg");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="enc";
		this.stk[this.ptr++]=$f40;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cws";
		this.xget("msglen");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cset";
		this.stk[this.ptr++]=BWIPJS.psstring("set0");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f53;
		var t72=this.stk[--this.ptr];
		while (t72.call(this)!=-1);
		this.stk[this.ptr++]="cws";
		this.xget("cws");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f55(){
		this.stk[this.ptr++]="v";
		this.xget("v");
		this.stk[this.ptr++]=7682;
		this.xor();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f56(){
		this.xget("cw");
		this.xget("v");
		this.xor();
		this.stk[this.ptr++]=1;
		this.and();
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f55;
		var t74=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t74.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="v";
		this.xget("v");
		this.stk[this.ptr++]=-1;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cw";
		this.xget("cw");
		this.stk[this.ptr++]=-1;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f57(){
		this.stk[this.ptr++]="cw";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=$f56;
		var t77=this.stk[--this.ptr];
		var t75=this.stk[--this.ptr];
		for (var t76=0; t76<t75; t76++) {
			if (t77.call(this)==-1) break;
		}
	}
	function $f58(){
		this.stk[this.ptr++]="v";
		this.xget("v");
		this.stk[this.ptr++]=292;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f59(){
		this.stk[this.ptr++]="v";
		this.xget("v");
		this.stk[this.ptr++]=1023;
		this.and();
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("v");
		this.stk[this.ptr++]=824;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.xget("v");
		this.stk[this.ptr++]=853;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f58;
		var t79=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t79.call(this)==-1) return -1;
		}
	}
	function $f60(){
		this.stk[this.ptr++]="v";
		this.xget("v");
		this.stk[this.ptr++]=1023;
		this.and();
		this.stk[this.ptr++]=45;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f61(){
		return -1;
	}
	function $f62(){
		this.stk[this.ptr++]="w";
		this.xget("w");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("d");
		this.xget("r");
		this.xget("w");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="sum";
		this.xget("t");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f63(){
		this.xget("d");
		this.xget("r");
		this.xget("w");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="r";
		this.xget("r");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="w";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f64(){
		this.stk[this.ptr++]="c";
		this.xget("c");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="w";
		this.xget("w");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sum";
		this.xget("t");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f65(){
		this.xget("sum");
		this.xget("v");
		this.eq();
		this.stk[this.ptr++]=$f61;
		var t82=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t82.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="t";
		this.xget("sum");
		this.xget("c2w");
		this.xget("r");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("c");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("t");
		this.xget("v");
		this.eq();
		this.stk[this.ptr++]=$f62;
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		}
		this.xget("t");
		this.xget("v");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f63;
		var t84=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t84.call(this)==-1) return -1;
		}
		this.xget("t");
		this.xget("v");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f64;
		var t85=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t85.call(this)==-1) return -1;
		}
	}
	function $f66(){
		this.xget("d");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f67(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f68(){
		this.stk[this.ptr++]="d";
		this.stk[this.ptr++]=Infinity;
		this.xget("d");
		this.stk[this.ptr++]=$f67;
		var t92=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t92);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f69(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cbs");
		this.stk[this.ptr++]=5;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("d");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=47;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f70(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("sbs");
		this.xget("j");
		this.xget("encs");
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="j";
		this.xget("j");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f71(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f72(){
		this.xget("height");
	}
	function $f73(){
		this.stk[this.ptr++]=0;
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
	this.stk[this.ptr++]="includetext";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textfont";
	this.stk[this.ptr++]="Courier";
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textsize";
	this.stk[this.ptr++]=10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textxoffset";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="textyoffset";
	this.stk[this.ptr++]=-8.5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encoding";
	this.stk[this.ptr++]=BWIPJS.psstring("auto");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="version";
	this.stk[this.ptr++]=BWIPJS.psstring("a");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checkoffset";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="raw";
	this.stk[this.ptr++]=false;
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
	this.stk[this.ptr++]="encoding";
	this.xget("encoding");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="version";
	this.xget("version");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checkoffset";
	this.xget("checkoffset");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	this.xget("height");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("parse");
	this.stk[this.ptr++]=$f9;
	var t9=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t9.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="barlen";
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="la0";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="la1";
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="la2";
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sf0";
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sf1";
	this.stk[this.ptr++]=-5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sf2";
	this.stk[this.ptr++]=-6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn1";
	this.stk[this.ptr++]=-7;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn2";
	this.stk[this.ptr++]=-8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn3";
	this.stk[this.ptr++]=-9;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn4";
	this.stk[this.ptr++]=-10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="normal";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0"),BWIPJS.psstring("^"),BWIPJS.psstring("'")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("1"),BWIPJS.psstring(";"),27]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("2"),BWIPJS.psstring("<"),28]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("3"),BWIPJS.psstring("="),29]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("4"),BWIPJS.psstring(">"),30]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("5"),BWIPJS.psstring("?"),31]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("6"),BWIPJS.psstring("@"),BWIPJS.psstring("!")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("7"),BWIPJS.psstring("["),BWIPJS.psstring("\"")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("8"),92,BWIPJS.psstring("#")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("9"),BWIPJS.psstring("]"),BWIPJS.psstring("&")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("A"),BWIPJS.psstring("a"),1]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("B"),BWIPJS.psstring("b"),2]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("C"),BWIPJS.psstring("c"),3]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("D"),BWIPJS.psstring("d"),4]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("E"),BWIPJS.psstring("e"),5]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("F"),BWIPJS.psstring("f"),6]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("G"),BWIPJS.psstring("g"),7]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("H"),BWIPJS.psstring("h"),8]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("I"),BWIPJS.psstring("i"),9]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("J"),BWIPJS.psstring("j"),10]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("K"),BWIPJS.psstring("k"),11]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("L"),BWIPJS.psstring("l"),12]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("M"),BWIPJS.psstring("m"),13]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("N"),BWIPJS.psstring("n"),14]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("O"),BWIPJS.psstring("o"),15]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("P"),BWIPJS.psstring("p"),16]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Q"),BWIPJS.psstring("q"),17]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("R"),BWIPJS.psstring("r"),18]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("S"),BWIPJS.psstring("s"),19]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("T"),BWIPJS.psstring("t"),20]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("U"),BWIPJS.psstring("u"),21]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("V"),BWIPJS.psstring("v"),22]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("W"),BWIPJS.psstring("w"),23]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("X"),BWIPJS.psstring("x"),24]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Y"),BWIPJS.psstring("y"),25]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Z"),BWIPJS.psstring("z"),26]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("-"),BWIPJS.psstring("_"),40]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("."),BWIPJS.psstring("`"),41]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(" "),127,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("$"),BWIPJS.psstring("{"),BWIPJS.psstring("*")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("/"),BWIPJS.psstring("|"),BWIPJS.psstring(",")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("+"),BWIPJS.psstring("}"),BWIPJS.psstring(":")]);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("%");
	this.stk[this.ptr++]=BWIPJS.psstring("~");
	this.xget("fn1");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("la1");
	this.xget("la0");
	this.xget("fn2");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("sf1");
	this.xget("sf0");
	this.xget("fn3");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.xget("sf2");
	this.xget("sf2");
	this.xget("fn4");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]="limited";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("1"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("2"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("3"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("4"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("5"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("6"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("7"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("8"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("9"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("A"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("B"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("C"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("D"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("E"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("F"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("G"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("H"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("I"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("J"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("K"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("L"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("M"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("N"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("O"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("P"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Q"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("R"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("S"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("T"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("U"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("V"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("W"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("X"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Y"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Z"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("-"),-98,-98]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("."),-98,-98]);
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
	this.xget("version");
	this.stk[this.ptr++]=BWIPJS.psstring("a");
	this.eq();
	this.xget("version");
	this.stk[this.ptr++]=BWIPJS.psstring("b");
	this.eq();
	this.or();
	this.stk[this.ptr++]=$f10;
	this.stk[this.ptr++]=$f11;
	var t10=this.stk[--this.ptr];
	var t11=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t11.call(this)==-1) return -1;
	} else {
		if (t10.call(this)==-1) return -1;
	}
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]="charmaps";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=Infinity;
	this.xget("charmaps");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-1]={};
	this.xget("charmaps");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-1]={};
	this.xget("charmaps");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
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
	this.stk[this.ptr++]=$f14;
	var t22=this.stk[--this.ptr];
	var t20=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	var t18=this.stk[--this.ptr];
	for (var t21=t18; t19<0 ? t21>=t20 : t21<=t20; t21+=t19) {
		this.stk[this.ptr++]=t21;
		if (t22.call(this)==-1) break;
	}
	this.stk[this.ptr++]="set0";
	this.xget("charvals");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="set1";
	this.xget("charvals");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="set2";
	this.xget("charvals");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("raw");
	this.stk[this.ptr++]=$f15;
	var t23=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t23.call(this)==-1) return -1;
	}
	this.xget("encoding");
	this.stk[this.ptr++]=BWIPJS.psstring("raw");
	this.eq();
	this.stk[this.ptr++]=$f18;
	var t26=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t26.call(this)==-1) return -1;
	}
	this.xget("encoding");
	this.stk[this.ptr++]=BWIPJS.psstring("auto");
	this.eq();
	this.stk[this.ptr++]=$f54;
	var t73=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t73.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="a";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("141112"),BWIPJS.psstring("131212"),BWIPJS.psstring("121312"),BWIPJS.psstring("111412"),BWIPJS.psstring("131113"),BWIPJS.psstring("121213"),BWIPJS.psstring("111313"),BWIPJS.psstring("121114"),BWIPJS.psstring("111214"),BWIPJS.psstring("111115"),BWIPJS.psstring("181111"),BWIPJS.psstring("171211"),BWIPJS.psstring("161311"),BWIPJS.psstring("151411"),BWIPJS.psstring("141511"),BWIPJS.psstring("131611"),BWIPJS.psstring("121711"),BWIPJS.psstring("111811"),BWIPJS.psstring("171112"),BWIPJS.psstring("161212"),BWIPJS.psstring("151312"),BWIPJS.psstring("141412"),BWIPJS.psstring("131512"),BWIPJS.psstring("121612"),BWIPJS.psstring("111712"),BWIPJS.psstring("161113"),BWIPJS.psstring("151213"),BWIPJS.psstring("141313"),BWIPJS.psstring("131413"),BWIPJS.psstring("121513"),BWIPJS.psstring("111613"),BWIPJS.psstring("151114"),BWIPJS.psstring("141214"),BWIPJS.psstring("131314"),BWIPJS.psstring("121414"),BWIPJS.psstring("111514"),BWIPJS.psstring("141115"),BWIPJS.psstring("131215"),BWIPJS.psstring("121315"),BWIPJS.psstring("111415"),BWIPJS.psstring("131116"),BWIPJS.psstring("121216"),BWIPJS.psstring("111316"),BWIPJS.psstring("121117"),BWIPJS.psstring("111217"),BWIPJS.psstring("111118"),BWIPJS.psstring("1<111112"),BWIPJS.psstring("111111111;1")]);
	this.stk[this.ptr++]="b";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("151213"),BWIPJS.psstring("141313"),BWIPJS.psstring("131413"),BWIPJS.psstring("121513"),BWIPJS.psstring("141214"),BWIPJS.psstring("131314"),BWIPJS.psstring("121414"),BWIPJS.psstring("131215"),BWIPJS.psstring("121315"),BWIPJS.psstring("121216"),BWIPJS.psstring("191212"),BWIPJS.psstring("181312"),BWIPJS.psstring("171412"),BWIPJS.psstring("161512"),BWIPJS.psstring("151612"),BWIPJS.psstring("141712"),BWIPJS.psstring("131812"),BWIPJS.psstring("121912"),BWIPJS.psstring("181213"),BWIPJS.psstring("171313"),BWIPJS.psstring("161413"),BWIPJS.psstring("151513"),BWIPJS.psstring("141613"),BWIPJS.psstring("131713"),BWIPJS.psstring("121813"),BWIPJS.psstring("171214"),BWIPJS.psstring("161314"),BWIPJS.psstring("151414"),BWIPJS.psstring("141514"),BWIPJS.psstring("131614"),BWIPJS.psstring("121714"),BWIPJS.psstring("161215"),BWIPJS.psstring("151315"),BWIPJS.psstring("141415"),BWIPJS.psstring("131515"),BWIPJS.psstring("121615"),BWIPJS.psstring("151216"),BWIPJS.psstring("141316"),BWIPJS.psstring("131416"),BWIPJS.psstring("121516"),BWIPJS.psstring("141217"),BWIPJS.psstring("131317"),BWIPJS.psstring("121417"),BWIPJS.psstring("131218"),BWIPJS.psstring("121318"),BWIPJS.psstring("121219"),BWIPJS.psstring("1<121312"),BWIPJS.psstring("121212121<1")]);
	this.stk[this.ptr++]="limiteda";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("111411"),BWIPJS.psstring("111312"),BWIPJS.psstring("111213"),BWIPJS.psstring("111114"),BWIPJS.psstring("121311"),BWIPJS.psstring("121212"),BWIPJS.psstring("121113"),BWIPJS.psstring("141111"),BWIPJS.psstring("131211"),BWIPJS.psstring("131112"),BWIPJS.psstring("171111"),BWIPJS.psstring("161211"),BWIPJS.psstring("151311"),BWIPJS.psstring("141411"),BWIPJS.psstring("131511"),BWIPJS.psstring("121611"),BWIPJS.psstring("111711"),BWIPJS.psstring("161112"),BWIPJS.psstring("151212"),BWIPJS.psstring("141312"),BWIPJS.psstring("131412"),BWIPJS.psstring("121512"),BWIPJS.psstring("111612"),BWIPJS.psstring("151113"),BWIPJS.psstring("141213"),BWIPJS.psstring("131313"),BWIPJS.psstring("121413"),BWIPJS.psstring("111513"),BWIPJS.psstring("141114"),BWIPJS.psstring("131214"),BWIPJS.psstring("121314"),BWIPJS.psstring("111414"),BWIPJS.psstring("131115"),BWIPJS.psstring("121215"),BWIPJS.psstring("111315"),BWIPJS.psstring("121116"),BWIPJS.psstring("111216"),BWIPJS.psstring("111117"),BWIPJS.psstring("151111"),BWIPJS.psstring("1")]);
	this.stk[this.ptr++]="limitedb";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("121512"),BWIPJS.psstring("121413"),BWIPJS.psstring("121314"),BWIPJS.psstring("121215"),BWIPJS.psstring("131412"),BWIPJS.psstring("131313"),BWIPJS.psstring("131214"),BWIPJS.psstring("151212"),BWIPJS.psstring("141312"),BWIPJS.psstring("141213"),BWIPJS.psstring("181212"),BWIPJS.psstring("171312"),BWIPJS.psstring("161412"),BWIPJS.psstring("151512"),BWIPJS.psstring("141612"),BWIPJS.psstring("131712"),BWIPJS.psstring("121812"),BWIPJS.psstring("171213"),BWIPJS.psstring("161313"),BWIPJS.psstring("151413"),BWIPJS.psstring("141513"),BWIPJS.psstring("131613"),BWIPJS.psstring("121713"),BWIPJS.psstring("161214"),BWIPJS.psstring("151314"),BWIPJS.psstring("141414"),BWIPJS.psstring("131514"),BWIPJS.psstring("121614"),BWIPJS.psstring("151215"),BWIPJS.psstring("141315"),BWIPJS.psstring("131415"),BWIPJS.psstring("121515"),BWIPJS.psstring("141216"),BWIPJS.psstring("131316"),BWIPJS.psstring("121416"),BWIPJS.psstring("131217"),BWIPJS.psstring("121317"),BWIPJS.psstring("121218"),BWIPJS.psstring("141212"),BWIPJS.psstring("1")]);
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.xget("version");
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr++]="encs";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="c2w";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([495,330,210,126,70,35,15,5]);
	this.stk[this.ptr++]=BWIPJS.psarray([165,120,84,56,35,20,10,4]);
	this.stk[this.ptr++]=BWIPJS.psarray([45,36,28,21,15,10,6,3]);
	this.stk[this.ptr++]=BWIPJS.psarray([9,8,7,6,5,4,3,2]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,1,1,1,1,1,1,1]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="v";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("cws");
	this.stk[this.ptr++]=$f57;
	var t78=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t78);
	this.stk[this.ptr++]="v";
	this.xget("v");
	this.xget("checkoffset");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("version");
	this.stk[this.ptr++]=BWIPJS.psstring("limiteda");
	this.eq();
	this.xget("version");
	this.stk[this.ptr++]=BWIPJS.psstring("limitedb");
	this.eq();
	this.or();
	this.stk[this.ptr++]=$f59;
	this.stk[this.ptr++]=$f60;
	var t80=this.stk[--this.ptr];
	var t81=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t81.call(this)==-1) return -1;
	} else {
		if (t80.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="d";
	this.stk[this.ptr++]=BWIPJS.psarray([2,2,2,2,2,2]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="r";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="c";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="w";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sum";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f65;
	var t86=this.stk[--this.ptr];
	while (t86.call(this)!=-1);
	this.stk[this.ptr++]=20;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=$f66;
	var t91=this.stk[--this.ptr];
	var t89=this.stk[--this.ptr];
	var t88=this.stk[--this.ptr];
	var t87=this.stk[--this.ptr];
	for (var t90=t87; t88<0 ? t90>=t89 : t90<=t89; t90+=t88) {
		this.stk[this.ptr++]=t90;
		if (t91.call(this)==-1) break;
	}
	this.xget("d");
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=5;
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	this.xget("version");
	this.stk[this.ptr++]=BWIPJS.psstring("b");
	this.eq();
	this.xget("version");
	this.stk[this.ptr++]=BWIPJS.psstring("limitedb");
	this.eq();
	this.or();
	this.stk[this.ptr++]=$f68;
	var t93=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t93.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="cbs";
	this.stk[this.ptr++]=BWIPJS.psstring("111111111111");
	this.stk[this.ptr++]=12;
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
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f69;
	var t98=this.stk[--this.ptr];
	var t96=this.stk[--this.ptr];
	var t95=this.stk[--this.ptr];
	var t94=this.stk[--this.ptr];
	for (var t97=t94; t95<0 ? t97>=t96 : t97<=t96; t97+=t95) {
		this.stk[this.ptr++]=t97;
		if (t98.call(this)==-1) break;
	}
	this.stk[this.ptr++]="sbs";
	this.xget("cws");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=6;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=31;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("encs");
	this.xget("encs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.xget("sbs");
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=0;
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]="j";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("cws");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f70;
	var t103=this.stk[--this.ptr];
	var t101=this.stk[--this.ptr];
	var t100=this.stk[--this.ptr];
	var t99=this.stk[--this.ptr];
	for (var t102=t99; t100<0 ? t102>=t101 : t102<=t101; t102+=t100) {
		this.stk[this.ptr++]=t102;
		if (t103.call(this)==-1) break;
	}
	this.xget("sbs");
	this.xget("j");
	this.xget("cbs");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr++]="j";
	this.xget("j");
	this.stk[this.ptr++]=12;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("encs");
	this.xget("encs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.xget("sbs");
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
	this.stk[this.ptr++]="sbs";
	this.xget("sbs");
	this.stk[this.ptr++]=0;
	this.xget("j");
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	this.stk[this.ptr++]=this.get("renlinear");
	this.stk[this.ptr++]="sbs";
	this.stk[this.ptr++]=Infinity;
	this.xget("sbs");
	this.stk[this.ptr++]=$f71;
	var t104=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t104);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]="bhs";
	this.stk[this.ptr++]=Infinity;
	this.xget("sbs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=$f72;
	var t107=this.stk[--this.ptr];
	var t105=this.stk[--this.ptr];
	for (var t106=0; t106<t105; t106++) {
		if (t107.call(this)==-1) break;
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
	this.stk[this.ptr++]=$f73;
	var t110=this.stk[--this.ptr];
	var t108=this.stk[--this.ptr];
	for (var t109=0; t109<t108; t109++) {
		if (t110.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]="txt";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Infinity;
	this.xget("text");
	this.xget("textxoffset");
	this.xget("textyoffset");
	this.xget("textfont");
	this.xget("textsize");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]="textxalign";
	this.stk[this.ptr++]=BWIPJS.psstring("center");
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
	var t111=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t111.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("posicode");
// END OF posicode

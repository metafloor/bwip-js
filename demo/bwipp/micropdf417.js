// file: bwipp/micropdf417.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN micropdf417
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("micropdf417", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("micropdf417", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
BWIPJS.bwipp["micropdf417"]=function() {
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
		this.xget("version");
		this.stk[this.ptr++]=BWIPJS.psstring("x");
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
		this.stk[this.ptr++]="columns";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="rows";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
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
		this.stk[this.ptr++]="encoding";
		this.stk[this.ptr++]=BWIPJS.psstring("raw");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f12(){
		this.stk[this.ptr++]="encoding";
		this.stk[this.ptr++]=BWIPJS.psstring("cca");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f13(){
		return -1;
	}
	function $f14(){
		this.xget("i");
		this.xget("barcode");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.stk[this.ptr++]=$f13;
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
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
		this.xget("datcws");
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
	function $f15(){
		this.stk[this.ptr++]="datcws";
		this.xget("barcode");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f14;
		var t14=this.stk[--this.ptr];
		while (t14.call(this)!=-1);
		this.stk[this.ptr++]="datcws";
		this.xget("datcws");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f16(){
	}
	function $f17(){
		this.stk[this.ptr++]="encoding";
		this.stk[this.ptr++]=BWIPJS.psstring("ccb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f18(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	}
	function $f19(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	}
	function $f20(){
		this.stk[this.ptr++]="k";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msbs";
		this.stk[this.ptr++]=Infinity;
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
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
		this.stk[this.ptr++]="mscs";
		this.stk[this.ptr++]=Infinity;
		this.xget("msbs");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=256;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=65536;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f18;
		var t20=this.stk[--this.ptr];
		var t18=this.stk[--this.ptr];
		for (var t19=0; t19<t18; t19++) {
			if (t20.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lsbs";
		this.stk[this.ptr++]=Infinity;
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
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
		this.stk[this.ptr++]="lscs";
		this.stk[this.ptr++]=Infinity;
		this.xget("lsbs");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=256;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=65536;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f19;
		var t23=this.stk[--this.ptr];
		var t21=this.stk[--this.ptr];
		for (var t22=0; t22<t21; t22++) {
			if (t23.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("lscs");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=316;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("out");
		this.xget("k");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.xget("lscs");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=641;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=316;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("out");
		this.xget("k");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.xget("lscs");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=20;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=641;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=316;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("out");
		this.xget("k");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.xget("lscs");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=20;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=641;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("out");
		this.xget("k");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.xget("mscs");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=20;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("out");
		this.xget("k");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t25=this.stk[--this.ptr];
		var t24=this.stk[--this.ptr];
		if (t25 < 0) t=this.stk.splice(this.ptr-t24, -t25);
		else t=this.stk.splice(this.ptr-t24, t24-t25);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr++]=900;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f21(){
		this.xget("out");
		this.xget("out");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("rem");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=Infinity;
		this.xget("in");
		this.xget("inlen");
		this.xget("rem");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("rem");
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
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f22(){
		this.stk[this.ptr++]="in";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="inlen";
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="out";
		this.xget("inlen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("inlen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("inlen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f20;
		var t30=this.stk[--this.ptr];
		var t28=this.stk[--this.ptr];
		var t27=this.stk[--this.ptr];
		var t26=this.stk[--this.ptr];
		for (var t29=t26; t27<0 ? t29>=t28 : t29<=t28; t29+=t27) {
			this.stk[this.ptr++]=t29;
			if (t30.call(this)==-1) break;
		}
		this.stk[this.ptr++]="rem";
		this.xget("inlen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("rem");
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f21;
		var t31=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t31.call(this)==-1) return -1;
		}
		this.xget("out");
	}
	function $f23(){
		this.stk[this.ptr++]=924;
	}
	function $f24(){
		this.stk[this.ptr++]=901;
	}
	function $f25(){
		this.stk[this.ptr++]="datcws";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=920;
		this.xget("datcws");
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
	function $f26(){
		this.stk[this.ptr++]="datcws";
		this.xget("barlen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("barlen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("datcws");
		this.stk[this.ptr++]=0;
		this.xget("barlen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f23;
		this.stk[this.ptr++]=$f24;
		var t32=this.stk[--this.ptr];
		var t33=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t33.call(this)==-1) return -1;
		} else {
			if (t32.call(this)==-1) return -1;
		}
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("datcws");
		this.stk[this.ptr++]=1;
		this.xget("barcode");
		this.xget("encb");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("encoding");
		this.stk[this.ptr++]=BWIPJS.psstring("ccb");
		this.eq();
		this.stk[this.ptr++]=$f25;
		var t34=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t34.call(this)==-1) return -1;
		}
	}
	function $f27(){
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f28(){
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
		this.stk[this.ptr++]=$f27;
		var t36=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t36.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("charvals");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("i");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("alltext");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=-1;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f29(){
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
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f28;
		var t41=this.stk[--this.ptr];
		var t39=this.stk[--this.ptr];
		var t38=this.stk[--this.ptr];
		var t37=this.stk[--this.ptr];
		for (var t40=t37; t38<0 ? t40>=t39 : t40<=t39; t40+=t38) {
			this.stk[this.ptr++]=t40;
			if (t41.call(this)==-1) break;
		}
	}
	function $f30(){
		this.stk[this.ptr++]=0;
	}
	function $f31(){
		this.stk[this.ptr++]=0;
	}
	function $f32(){
		this.stk[this.ptr++]=0;
	}
	function $f33(){
		this.xget("numdigits");
		this.xget("i");
		this.xget("numdigits");
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
	function $f34(){
		this.xget("numtext");
		this.xget("i");
		this.xget("numtext");
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
	function $f35(){
		this.xget("numbytes");
		this.xget("i");
		this.xget("numbytes");
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
	function $f36(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f33;
		var t56=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t56.call(this)==-1) return -1;
		}
		this.xget("alltext");
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.xget("numdigits");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f34;
		var t57=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t57.call(this)==-1) return -1;
		}
		this.xget("numtext");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.xget("numdigits");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f35;
		var t58=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t58.call(this)==-1) return -1;
		}
	}
	function $f37(){
		return -1;
	}
	function $f38(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=Infinity;
		this.xget("seq");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("nl");
		this.stk[this.ptr++]=Infinity;
		this.xget("barcode");
		this.xget("p");
		this.xget("n");
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
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="state";
		this.xget("N");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		this.xget("p");
		this.xget("n");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seqlen";
		this.xget("seqlen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("n");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f39(){
		this.xget("tl");
	}
	function $f40(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=Infinity;
		this.xget("seq");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("state");
		this.xget("T");
		this.ne();
		this.stk[this.ptr++]=$f39;
		var t65=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t65.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.xget("barcode");
		this.xget("p");
		this.xget("t");
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
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="state";
		this.xget("T");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		this.xget("p");
		this.xget("t");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seqlen";
		this.xget("seqlen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("t");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f41(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=Infinity;
		this.xget("seq");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("bs");
		this.stk[this.ptr++]=Infinity;
		this.xget("barcode");
		this.xget("p");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		this.xget("p");
		this.xget("b");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seqlen";
		this.xget("seqlen");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f42(){
		this.xget("bl");
	}
	function $f43(){
		this.xget("bl6");
	}
	function $f44(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=Infinity;
		this.xget("seq");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("b");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f42;
		this.stk[this.ptr++]=$f43;
		var t66=this.stk[--this.ptr];
		var t67=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t67.call(this)==-1) return -1;
		} else {
			if (t66.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.xget("barcode");
		this.xget("p");
		this.xget("b");
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
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="state";
		this.xget("B");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		this.xget("p");
		this.xget("b");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seqlen";
		this.xget("seqlen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("b");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f45(){
		this.stk[this.ptr++]="b";
		this.xget("numbytes");
		this.xget("p");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("b");
		this.stk[this.ptr++]=1;
		this.eq();
		this.xget("state");
		this.xget("T");
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f41;
		this.stk[this.ptr++]=$f44;
		var t68=this.stk[--this.ptr];
		var t69=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t69.call(this)==-1) return -1;
		} else {
			if (t68.call(this)==-1) return -1;
		}
	}
	function $f46(){
		this.stk[this.ptr++]="t";
		this.xget("numtext");
		this.xget("p");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("t");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f40;
		this.stk[this.ptr++]=$f45;
		var t70=this.stk[--this.ptr];
		var t71=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t71.call(this)==-1) return -1;
		} else {
			if (t70.call(this)==-1) return -1;
		}
	}
	function $f47(){
		this.xget("p");
		this.xget("barlen");
		this.eq();
		this.stk[this.ptr++]=$f37;
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="n";
		this.xget("numdigits");
		this.xget("p");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("n");
		this.stk[this.ptr++]=13;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f38;
		this.stk[this.ptr++]=$f46;
		var t72=this.stk[--this.ptr];
		var t73=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t73.call(this)==-1) return -1;
		} else {
			if (t72.call(this)==-1) return -1;
		}
	}
	function $f48(){
		this.xget("charvals");
		this.xget("A");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f49(){
		this.xget("charvals");
		this.xget("L");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f50(){
		this.xget("charvals");
		this.xget("M");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f51(){
		this.xget("charvals");
		this.xget("P");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f52(){
		this.xget("text");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("l");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="l";
		this.xget("l");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f53(){
		this.xget("curlen");
		this.xget("y");
		this.xget("cost");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("curseq");
		this.xget("y");
		this.stk[this.ptr++]=Infinity;
		this.xget("curseq");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("latseq");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("y");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="imp";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f54(){
		this.stk[this.ptr++]="y";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cost";
		this.xget("curlen");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("latlen");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("y");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cost");
		this.xget("curlen");
		this.xget("y");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f53;
		var t75=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t75.call(this)==-1) return -1;
		}
	}
	function $f55(){
		this.stk[this.ptr++]="x";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.xget("A");
		this.xget("L");
		this.xget("M");
		this.xget("P");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f54;
		var t76=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t76);
	}
	function $f56(){
		return -1;
	}
	function $f57(){
		this.stk[this.ptr++]="imp";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.xget("A");
		this.xget("L");
		this.xget("M");
		this.xget("P");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f55;
		var t77=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t77);
		this.xget("imp");
		this.not();
		this.stk[this.ptr++]=$f56;
		var t78=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t78.call(this)==-1) return -1;
		}
	}
	function $f58(){
		return -1;
	}
	function $f59(){
		this.xget("nxtlen");
		this.xget("x");
		this.xget("cost");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("nxtseq");
		this.xget("x");
		this.stk[this.ptr++]=Infinity;
		this.xget("curseq");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("char");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f60(){
		this.xget("as");
	}
	function $f61(){
		this.xget("ps");
	}
	function $f62(){
		this.xget("nxtlen");
		this.xget("y");
		this.xget("cost");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("nxtseq");
		this.xget("y");
		this.stk[this.ptr++]=Infinity;
		this.xget("curseq");
		this.xget("y");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("x");
		this.xget("A");
		this.eq();
		this.stk[this.ptr++]=$f60;
		this.stk[this.ptr++]=$f61;
		var t82=this.stk[--this.ptr];
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		} else {
			if (t82.call(this)==-1) return -1;
		}
		this.xget("char");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f63(){
		this.stk[this.ptr++]="cost";
		this.xget("curlen");
		this.xget("y");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("shftlen");
		this.xget("y");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cost");
		this.xget("nxtlen");
		this.xget("y");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f62;
		var t84=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t84.call(this)==-1) return -1;
		}
	}
	function $f64(){
		this.stk[this.ptr++]="y";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("x");
		this.xget("y");
		this.ne();
		this.stk[this.ptr++]=$f63;
		var t85=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t85.call(this)==-1) return -1;
		}
	}
	function $f65(){
		this.xget("charvals");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("char");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.not();
		this.stk[this.ptr++]=$f58;
		var t80=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t80.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cost";
		this.xget("curlen");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cost");
		this.xget("nxtlen");
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f59;
		var t81=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t81.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.xget("A");
		this.xget("L");
		this.xget("M");
		this.xget("P");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f64;
		var t86=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t86);
		return -1;
	}
	function $f66(){
		this.stk[this.ptr++]="x";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f65;
		var t87=this.stk[--this.ptr];
		while (t87.call(this)!=-1);
	}
	function $f67(){
		this.stk[this.ptr++]="char";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f57;
		var t79=this.stk[--this.ptr];
		while (t79.call(this)!=-1);
		this.stk[this.ptr++]="nxtlen";
		this.stk[this.ptr++]=Infinity;
		this.xget("e");
		this.xget("e");
		this.xget("e");
		this.xget("e");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nxtseq";
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.xget("A");
		this.xget("L");
		this.xget("M");
		this.xget("P");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f66;
		var t88=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t88);
		this.stk[this.ptr++]="curlen";
		this.xget("nxtlen");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="curseq";
		this.xget("nxtseq");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f68(){
		this.stk[this.ptr++]="minseq";
		this.xget("curlen");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="txtseq";
		this.xget("curseq");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f69(){
		this.stk[this.ptr++]="k";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("curlen");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("minseq");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f68;
		var t90=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t90.call(this)==-1) return -1;
		}
	}
	function $f70(){
		return -1;
	}
	function $f71(){
		this.xget("enca");
	}
	function $f72(){
		this.xget("encp");
	}
	function $f73(){
		this.xget("txtseq");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("char");
		this.xget("as");
		this.eq();
		this.stk[this.ptr++]=$f71;
		this.stk[this.ptr++]=$f72;
		var t93=this.stk[--this.ptr];
		var t94=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t94.call(this)==-1) return -1;
		} else {
			if (t93.call(this)==-1) return -1;
		}
		this.xget("addtotext");
		this.stk[this.ptr++]="k";
		this.xget("k");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f74(){
		this.stk[this.ptr++]="submode";
		this.xget("A");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f75(){
		this.stk[this.ptr++]="submode";
		this.xget("L");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f76(){
		this.stk[this.ptr++]="submode";
		this.xget("M");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f77(){
		this.stk[this.ptr++]="submode";
		this.xget("P");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f78(){
		this.xget("k");
		this.xget("txtseq");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f70;
		var t92=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t92.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="char";
		this.xget("txtseq");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("char");
		this.xget("textencfuncs");
		this.xget("submode");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.xget("addtotext");
		this.stk[this.ptr++]="k";
		this.xget("k");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("char");
		this.xget("as");
		this.eq();
		this.xget("char");
		this.xget("ps");
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f73;
		var t95=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t95.call(this)==-1) return -1;
		}
		this.xget("char");
		this.xget("al");
		this.eq();
		this.stk[this.ptr++]=$f74;
		var t96=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t96.call(this)==-1) return -1;
		}
		this.xget("char");
		this.xget("ll");
		this.eq();
		this.stk[this.ptr++]=$f75;
		var t97=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t97.call(this)==-1) return -1;
		}
		this.xget("char");
		this.xget("ml");
		this.eq();
		this.stk[this.ptr++]=$f76;
		var t98=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t98.call(this)==-1) return -1;
		}
		this.xget("char");
		this.xget("pl");
		this.eq();
		this.stk[this.ptr++]=$f77;
		var t99=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t99.call(this)==-1) return -1;
		}
	}
	function $f79(){
		this.stk[this.ptr++]="pad";
		this.xget("al");
		this.xget("encp");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="submode";
		this.xget("A");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f80(){
		this.stk[this.ptr++]="pad";
		this.xget("ps");
		this.xget("textencfuncs");
		this.xget("submode");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f81(){
		this.xget("submode");
		this.xget("P");
		this.eq();
		this.stk[this.ptr++]=$f79;
		this.stk[this.ptr++]=$f80;
		var t101=this.stk[--this.ptr];
		var t102=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t102.call(this)==-1) return -1;
		} else {
			if (t101.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="text";
		this.stk[this.ptr++]=Infinity;
		this.xget("text");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("pad");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f82(){
		this.stk[this.ptr++]="k";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("out");
		this.xget("k");
		this.xget("text");
		this.xget("k");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("text");
		this.xget("k");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f83(){
		this.stk[this.ptr++]="in";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="curlen";
		this.stk[this.ptr++]=Infinity;
		this.xget("e");
		this.xget("e");
		this.xget("e");
		this.xget("e");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("curlen");
		this.xget("submode");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="curseq";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("in");
		this.stk[this.ptr++]=$f67;
		var t89=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t89);
		this.stk[this.ptr++]="minseq";
		this.xget("e");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.xget("A");
		this.xget("L");
		this.xget("M");
		this.xget("P");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=$f69;
		var t91=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t91);
		this.stk[this.ptr++]="text";
		this.xget("minseq");
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="l";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f78;
		var t100=this.stk[--this.ptr];
		while (t100.call(this)!=-1);
		this.xget("text");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.eq();
		this.stk[this.ptr++]=$f81;
		var t103=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t103.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="out";
		this.xget("text");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("out");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f82;
		var t108=this.stk[--this.ptr];
		var t106=this.stk[--this.ptr];
		var t105=this.stk[--this.ptr];
		var t104=this.stk[--this.ptr];
		for (var t107=t104; t105<0 ? t107>=t106 : t107<=t106; t107+=t105) {
			this.stk[this.ptr++]=t107;
			if (t108.call(this)==-1) break;
		}
		this.xget("out");
	}
	function $f84(){
		this.ptr--;
		this.stk[this.ptr++]=44;
	}
	function $f85(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f86(){
		return -1;
	}
	function $f87(){
		this.stk[this.ptr++]="gmul";
		this.stk[this.ptr++]=Infinity;
		this.xget("gmul");
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
	function $f88(){
		this.xget("gmul");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		this.ne();
		this.stk[this.ptr++]=$f87;
		var t112=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t112.call(this)==-1) return -1;
		}
	}
	function $f89(){
		this.stk[this.ptr++]="gmul";
		this.stk[this.ptr++]=Infinity;
		this.xget("gmul");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("val");
		this.xget("dv");
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f90(){
		this.xget("gmod");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f86;
		var t111=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t111.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="val";
		this.xget("val");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("gmod");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gmod";
		this.xget("gmod");
		this.stk[this.ptr++]=1;
		this.xget("gmod");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("val");
		this.xget("dv");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f88;
		this.stk[this.ptr++]=$f89;
		var t113=this.stk[--this.ptr];
		var t114=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t114.call(this)==-1) return -1;
		} else {
			if (t113.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="val";
		this.xget("val");
		this.xget("dv");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f91(){
		return -1;
	}
	function $f92(){
		this.stk[this.ptr++]="dv";
		this.stk[this.ptr++]=900;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gmul";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="val";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f90;
		var t115=this.stk[--this.ptr];
		while (t115.call(this)!=-1);
		this.stk[this.ptr++]="dv";
		this.xget("val");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cwn";
		this.stk[this.ptr++]=Infinity;
		this.xget("dv");
		this.xget("cwn");
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
		this.stk[this.ptr++]="gmod";
		this.xget("gmul");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("gmul");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f91;
		var t116=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t116.call(this)==-1) return -1;
		}
	}
	function $f93(){
		this.stk[this.ptr++]="k";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="gmod";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.xget("in");
		this.xget("k");
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("k");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=44;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f84;
		var t109=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t109.call(this)==-1) return -1;
		}
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f85;
		var t110=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t110);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cwn";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f92;
		var t117=this.stk[--this.ptr];
		while (t117.call(this)!=-1);
		this.stk[this.ptr++]="out";
		this.stk[this.ptr++]=Infinity;
		this.xget("out");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cwn");
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
	function $f94(){
		this.stk[this.ptr++]="in";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="out";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=44;
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f93;
		var t122=this.stk[--this.ptr];
		var t120=this.stk[--this.ptr];
		var t119=this.stk[--this.ptr];
		var t118=this.stk[--this.ptr];
		for (var t121=t118; t119<0 ? t121>=t120 : t121<=t120; t121+=t119) {
			this.stk[this.ptr++]=t121;
			if (t122.call(this)==-1) break;
		}
		this.xget("out");
	}
	function $f95(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("datcws");
		this.xget("j");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t124=this.stk[--this.ptr];
		var t123=this.stk[--this.ptr];
		if (t124 < 0) t=this.stk.splice(this.ptr-t123, -t124);
		else t=this.stk.splice(this.ptr-t123, t123-t124);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f96(){
		return -1;
	}
	function $f97(){
		this.xget("chars");
		this.xget("encfuncs");
		this.xget("state");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.xget("addtocws");
	}
	function $f98(){
		this.stk[this.ptr++]="state";
		this.xget("T");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="submode";
		this.xget("A");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f99(){
		this.stk[this.ptr++]="state";
		this.xget("N");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f100(){
		this.stk[this.ptr++]="state";
		this.xget("B");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f101(){
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("seq");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("encb");
		this.xget("addtocws");
	}
	function $f102(){
		this.stk[this.ptr++]=Infinity;
		this.xget("latchcws");
		this.xget("chars");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("addtocws");
		this.xget("chars");
		this.xget("tl");
		this.eq();
		this.stk[this.ptr++]=$f98;
		var t126=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t126.call(this)==-1) return -1;
		}
		this.xget("chars");
		this.xget("nl");
		this.eq();
		this.stk[this.ptr++]=$f99;
		var t127=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t127.call(this)==-1) return -1;
		}
		this.xget("chars");
		this.xget("bl");
		this.eq();
		this.xget("chars");
		this.xget("bl6");
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f100;
		var t128=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t128.call(this)==-1) return -1;
		}
		this.xget("chars");
		this.xget("bs");
		this.eq();
		this.stk[this.ptr++]=$f101;
		var t129=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t129.call(this)==-1) return -1;
		}
	}
	function $f103(){
		this.xget("i");
		this.xget("seq");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f96;
		var t125=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t125.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="chars";
		this.xget("seq");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("chars");
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="arraytype";
		this.eq();
		this.stk[this.ptr++]=$f97;
		this.stk[this.ptr++]=$f102;
		var t130=this.stk[--this.ptr];
		var t131=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t131.call(this)==-1) return -1;
		} else {
			if (t130.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f104(){
		this.stk[this.ptr++]="T";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="N";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="B";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="A";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="L";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="M";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="P";
		this.stk[this.ptr++]=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="tl";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nl";
		this.stk[this.ptr++]=-2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bl";
		this.stk[this.ptr++]=-3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bl6";
		this.stk[this.ptr++]=-4;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bs";
		this.stk[this.ptr++]=-5;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="al";
		this.stk[this.ptr++]=-6;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ll";
		this.stk[this.ptr++]=-7;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ml";
		this.stk[this.ptr++]=-8;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="pl";
		this.stk[this.ptr++]=-9;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="as";
		this.stk[this.ptr++]=-10;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ps";
		this.stk[this.ptr++]=-11;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="charmaps";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("A"),BWIPJS.psstring("a"),BWIPJS.psstring("0"),BWIPJS.psstring(";")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("B"),BWIPJS.psstring("b"),BWIPJS.psstring("1"),BWIPJS.psstring("<")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("C"),BWIPJS.psstring("c"),BWIPJS.psstring("2"),BWIPJS.psstring(">")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("D"),BWIPJS.psstring("d"),BWIPJS.psstring("3"),BWIPJS.psstring("@")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("E"),BWIPJS.psstring("e"),BWIPJS.psstring("4"),BWIPJS.psstring("[")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("F"),BWIPJS.psstring("f"),BWIPJS.psstring("5"),92]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("G"),BWIPJS.psstring("g"),BWIPJS.psstring("6"),BWIPJS.psstring("]")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("H"),BWIPJS.psstring("h"),BWIPJS.psstring("7"),BWIPJS.psstring("_")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("I"),BWIPJS.psstring("i"),BWIPJS.psstring("8"),BWIPJS.psstring("`")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("J"),BWIPJS.psstring("j"),BWIPJS.psstring("9"),BWIPJS.psstring("~")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("K"),BWIPJS.psstring("k"),BWIPJS.psstring("&"),BWIPJS.psstring("!")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("L"),BWIPJS.psstring("l"),13,13]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("M"),BWIPJS.psstring("m"),9,9]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("N"),BWIPJS.psstring("n"),BWIPJS.psstring(","),BWIPJS.psstring(",")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("O"),BWIPJS.psstring("o"),BWIPJS.psstring(":"),BWIPJS.psstring(":")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("P"),BWIPJS.psstring("p"),BWIPJS.psstring("#"),10]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Q"),BWIPJS.psstring("q"),BWIPJS.psstring("-"),BWIPJS.psstring("-")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("R"),BWIPJS.psstring("r"),BWIPJS.psstring("."),BWIPJS.psstring(".")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("S"),BWIPJS.psstring("s"),BWIPJS.psstring("$"),BWIPJS.psstring("$")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("T"),BWIPJS.psstring("t"),BWIPJS.psstring("/"),BWIPJS.psstring("/")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("U"),BWIPJS.psstring("u"),BWIPJS.psstring("+"),BWIPJS.psstring("\"")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("V"),BWIPJS.psstring("v"),BWIPJS.psstring("%"),BWIPJS.psstring("|")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("W"),BWIPJS.psstring("w"),BWIPJS.psstring("*"),BWIPJS.psstring("*")]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("X"),BWIPJS.psstring("x"),BWIPJS.psstring("="),40]);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Y"),BWIPJS.psstring("y"),BWIPJS.psstring("^"),41]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("Z");
		this.stk[this.ptr++]=BWIPJS.psstring("z");
		this.xget("pl");
		this.stk[this.ptr++]=BWIPJS.psstring("?");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(" "),BWIPJS.psstring(" "),BWIPJS.psstring(" "),BWIPJS.psstring("{")]);
		this.stk[this.ptr++]=Infinity;
		this.xget("ll");
		this.xget("as");
		this.xget("ll");
		this.stk[this.ptr++]=BWIPJS.psstring("}");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("ml");
		this.xget("ml");
		this.xget("al");
		this.stk[this.ptr++]=BWIPJS.psstring("'");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("ps");
		this.xget("ps");
		this.xget("ps");
		this.xget("al");
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
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-1]={};
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-1]={};
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-1]={};
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-1]={};
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="alltext";
		this.stk[this.ptr++]=104;
		this.stk[this.ptr-1]={};
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("charmaps");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f29;
		var t46=this.stk[--this.ptr];
		var t44=this.stk[--this.ptr];
		var t43=this.stk[--this.ptr];
		var t42=this.stk[--this.ptr];
		for (var t45=t42; t43<0 ? t45>=t44 : t45<=t44; t45+=t43) {
			this.stk[this.ptr++]=t45;
			if (t46.call(this)==-1) break;
		}
		this.stk[this.ptr++]="e";
		this.stk[this.ptr++]=10000;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="latlen";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([0,1,1,2]);
		this.stk[this.ptr++]=BWIPJS.psarray([2,0,1,2]);
		this.stk[this.ptr++]=BWIPJS.psarray([1,1,0,1]);
		this.stk[this.ptr++]=BWIPJS.psarray([1,2,2,0]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="latseq";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=Infinity;
		this.xget("ll");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("ml");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("ml");
		this.xget("pl");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.xget("ml");
		this.xget("al");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=Infinity;
		this.xget("ml");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("ml");
		this.xget("pl");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.xget("al");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("ll");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.stk[this.ptr++]=Infinity;
		this.xget("pl");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.xget("al");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("al");
		this.xget("ll");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("al");
		this.xget("ml");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="shftlen";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.xget("e");
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("e");
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.xget("e");
		this.xget("e");
		this.xget("e");
		this.xget("e");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numdigits";
		this.stk[this.ptr++]=Infinity;
		this.xget("barlen");
		this.stk[this.ptr++]=$f30;
		var t49=this.stk[--this.ptr];
		var t47=this.stk[--this.ptr];
		for (var t48=0; t48<t47; t48++) {
			if (t49.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numtext";
		this.stk[this.ptr++]=Infinity;
		this.xget("barlen");
		this.stk[this.ptr++]=$f31;
		var t52=this.stk[--this.ptr];
		var t50=this.stk[--this.ptr];
		for (var t51=0; t51<t50; t51++) {
			if (t52.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numbytes";
		this.stk[this.ptr++]=Infinity;
		this.xget("barlen");
		this.stk[this.ptr++]=$f32;
		var t55=this.stk[--this.ptr];
		var t53=this.stk[--this.ptr];
		for (var t54=0; t54<t53; t54++) {
			if (t55.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("barlen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f36;
		var t63=this.stk[--this.ptr];
		var t61=this.stk[--this.ptr];
		var t60=this.stk[--this.ptr];
		var t59=this.stk[--this.ptr];
		for (var t62=t59; t60<0 ? t62>=t61 : t62<=t61; t62+=t60) {
			this.stk[this.ptr++]=t62;
			if (t63.call(this)==-1) break;
		}
		this.stk[this.ptr++]="numdigits";
		this.xget("numdigits");
		this.stk[this.ptr++]=0;
		this.xget("barlen");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numtext";
		this.xget("numtext");
		this.stk[this.ptr++]=0;
		this.xget("barlen");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numbytes";
		this.xget("numbytes");
		this.stk[this.ptr++]=0;
		this.xget("barlen");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seqlen";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="state";
		this.xget("B");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f47;
		var t74=this.stk[--this.ptr];
		while (t74.call(this)!=-1);
		this.stk[this.ptr++]="latchcws";
		this.stk[this.ptr++]=Infinity;
		this.xget("tl");
		this.stk[this.ptr++]=900;
		this.xget("bl");
		this.stk[this.ptr++]=901;
		this.xget("bl6");
		this.stk[this.ptr++]=924;
		this.xget("nl");
		this.stk[this.ptr++]=902;
		this.xget("bs");
		this.stk[this.ptr++]=913;
		t = {};
		for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
			BWIPJS.set(t,this.stk[i-1],this.stk[i]);
		}
		this.ptr = i;
		this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="enca";
		this.stk[this.ptr++]=$f48;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encl";
		this.stk[this.ptr++]=$f49;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encm";
		this.stk[this.ptr++]=$f50;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encp";
		this.stk[this.ptr++]=$f51;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="textencfuncs";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="enca";
		this.stk[this.ptr++]="encl";
		this.stk[this.ptr++]="encm";
		this.stk[this.ptr++]="encp";
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="addtotext";
		this.stk[this.ptr++]=$f52;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="enct";
		this.stk[this.ptr++]=$f83;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encn";
		this.stk[this.ptr++]=$f94;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encfuncs";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]="enct";
		this.stk[this.ptr++]="encn";
		this.stk[this.ptr++]="encb";
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="addtocws";
		this.stk[this.ptr++]=$f95;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="state";
		this.xget("T");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="submode";
		this.xget("A");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="datcws";
		this.xget("seqlen");
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f103;
		var t132=this.stk[--this.ptr];
		while (t132.call(this)!=-1);
		this.stk[this.ptr++]="datcws";
		this.xget("datcws");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f105(){
		this.stk[this.ptr++]="metrics";
		this.xget("ccametrics");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f106(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f107(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f108(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f109(){
		return -1;
	}
	function $f110(){
		this.stk[this.ptr++]="m";
		this.xget("metrics");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="c";
		this.xget("m");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="r";
		this.xget("m");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k";
		this.xget("m");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rapl";
		this.xget("m");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rapc";
		this.xget("m");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rapr";
		this.xget("m");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ncws";
		this.xget("r");
		this.xget("c");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("k");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("datcws");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("ncws");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f106;
		var t135=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t135.call(this)==-1) return -1;
		}
		this.xget("urows");
		this.stk[this.ptr++]=0;
		this.ne();
		this.xget("urows");
		this.xget("r");
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f107;
		var t136=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t136.call(this)==-1) return -1;
		}
		this.xget("ucols");
		this.stk[this.ptr++]=0;
		this.ne();
		this.xget("ucols");
		this.xget("c");
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f108;
		var t137=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t137.call(this)==-1) return -1;
		}
		this.xget("okay");
		this.stk[this.ptr++]=$f109;
		var t138=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t138.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f111(){
		this.stk[this.ptr++]=900;
	}
	function $f112(){
		this.stk[this.ptr++]=0;
	}
	function $f113(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=929;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f114(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("rsalog");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("rslog");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t150=this.stk[--this.ptr];
		var t149=this.stk[--this.ptr];
		if (t150 < 0) t=this.stk.splice(this.ptr-t149, -t150);
		else t=this.stk.splice(this.ptr-t149, t149-t150);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f115(){
		this.xget("rslog");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("rslog");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=928;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.xget("rsalog");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f116(){
		this.ptr--;
		this.ptr--;
		this.stk[this.ptr++]=0;
	}
	function $f117(){
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
		this.ne();
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=0;
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f115;
		this.stk[this.ptr++]=$f116;
		var t156=this.stk[--this.ptr];
		var t157=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t157.call(this)==-1) return -1;
		} else {
			if (t156.call(this)==-1) return -1;
		}
	}
	function $f118(){
		this.stk[this.ptr++]=0;
	}
	function $f119(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("coeffs");
		this.xget("j");
		this.xget("coeffs");
		this.xget("j");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("coeffs");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("rsalog");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("rsprod");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=929;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f120(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("coeffs");
		this.xget("i");
		this.xget("coeffs");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=$f119;
		var t165=this.stk[--this.ptr];
		var t163=this.stk[--this.ptr];
		var t162=this.stk[--this.ptr];
		var t161=this.stk[--this.ptr];
		for (var t164=t161; t162<0 ? t164>=t163 : t164<=t163; t164+=t162) {
			this.stk[this.ptr++]=t164;
			if (t165.call(this)==-1) break;
		}
		this.xget("coeffs");
		this.stk[this.ptr++]=0;
		this.xget("coeffs");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("rsalog");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("rsprod");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f121(){
		this.xget("coeffs");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
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
		this.stk[this.ptr++]=929;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f122(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cws");
		this.xget("n");
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("cws");
		this.xget("n");
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=929;
		this.xget("t");
		this.xget("coeffs");
		this.xget("k");
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=929;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=929;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f123(){
		this.stk[this.ptr++]="t";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("cws");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("cws");
		this.xget("n");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=929;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("k");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f122;
		var t180=this.stk[--this.ptr];
		var t178=this.stk[--this.ptr];
		var t177=this.stk[--this.ptr];
		var t176=this.stk[--this.ptr];
		for (var t179=t176; t177<0 ? t179>=t178 : t179<=t178; t179+=t177) {
			this.stk[this.ptr++]=t179;
			if (t180.call(this)==-1) break;
		}
	}
	function $f124(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("cws");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=929;
		this.xget("cws");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=-1;
		var t187=this.stk[--this.ptr];
		var t186=this.stk[--this.ptr];
		if (t187 < 0) t=this.stk.splice(this.ptr-t186, -t187);
		else t=this.stk.splice(this.ptr-t186, t186-t187);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=929;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f125(){
		this.stk[this.ptr++]=0;
	}
	function $f126(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f127(){
		this.xget("clusters");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]="v";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=17;
		this.stk[this.ptr++]=$f125;
		var t195=this.stk[--this.ptr];
		var t193=this.stk[--this.ptr];
		for (var t194=0; t194<t193; t194++) {
			if (t195.call(this)==-1) break;
		}
		this.xget("v");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=17;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr++]=$f126;
		var t196=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t196);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=17;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=17;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f128(){
		this.stk[this.ptr++]=0;
	}
	function $f129(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f130(){
		this.xget("raps");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]="v";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=$f128;
		var t199=this.stk[--this.ptr];
		var t197=this.stk[--this.ptr];
		for (var t198=0; t198<t197; t198++) {
			if (t199.call(this)==-1) break;
		}
		this.xget("v");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		t=this.stk[this.ptr-3].toString(this.stk[this.ptr-2]).toUpperCase();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-3]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr-=2;
		this.stk[this.ptr++]=$f129;
		var t200=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t200);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f131(){
		this.stk[this.ptr++]="rwid";
		this.stk[this.ptr++]=72;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f132(){
		this.xget("i");
		this.xget("rapl");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("i");
		this.xget("rapr");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f133(){
		this.xget("i");
		this.xget("rapl");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("i");
		this.xget("rapr");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f134(){
		this.xget("i");
		this.xget("rapl");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f135(){
		this.xget("cca");
		this.not();
		this.stk[this.ptr++]=$f134;
		var t204=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t204.call(this)==-1) return -1;
		}
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("i");
		this.xget("rapc");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("i");
		this.xget("rapr");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f136(){
		this.xget("i");
		this.xget("rapl");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("i");
		this.xget("rapc");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("clst");
		this.xget("cwtobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("i");
		this.xget("rapr");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=52;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.xget("raptobits");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f137(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="clst";
		this.xget("i");
		this.xget("rapl");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pixs");
		this.xget("rwid");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=Infinity;
		this.xget("c");
		this.stk[this.ptr++]=1;
		this.eq();
		this.stk[this.ptr++]=$f132;
		var t202=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t202.call(this)==-1) return -1;
		}
		this.xget("c");
		this.stk[this.ptr++]=2;
		this.eq();
		this.stk[this.ptr++]=$f133;
		var t203=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t203.call(this)==-1) return -1;
		}
		this.xget("c");
		this.stk[this.ptr++]=3;
		this.eq();
		this.stk[this.ptr++]=$f135;
		var t205=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t205.call(this)==-1) return -1;
		}
		this.xget("c");
		this.stk[this.ptr++]=4;
		this.eq();
		this.stk[this.ptr++]=$f136;
		var t206=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t206.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
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
	this.stk[this.ptr++]="version";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="columns";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rows";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowmult";
	this.stk[this.ptr++]=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encoding";
	this.stk[this.ptr++]=BWIPJS.psstring("auto");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cca";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ccb";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="raw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parse";
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
	this.xget("version");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.ne();
	this.stk[this.ptr++]=$f6;
	var t6=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t6.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="columns";
	this.xget("columns");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rows";
	this.xget("rows");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowmult";
	this.xget("rowmult");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("parse");
	this.stk[this.ptr++]=$f10;
	var t10=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t10.call(this)==-1) return -1;
	}
	this.xget("raw");
	this.stk[this.ptr++]=$f11;
	var t11=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t11.call(this)==-1) return -1;
	}
	this.xget("cca");
	this.stk[this.ptr++]=$f12;
	var t12=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t12.call(this)==-1) return -1;
	}
	this.xget("encoding");
	this.stk[this.ptr++]=BWIPJS.psstring("raw");
	this.eq();
	this.xget("encoding");
	this.stk[this.ptr++]=BWIPJS.psstring("cca");
	this.eq();
	this.or();
	this.stk[this.ptr++]=$f15;
	var t15=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t15.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="barcode";
	this.stk[this.ptr++]=Infinity;
	this.xget("barcode");
	this.stk[this.ptr++]=$f16;
	var t16=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t16);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barlen";
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("ccb");
	this.stk[this.ptr++]=$f17;
	var t17=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t17.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="encb";
	this.stk[this.ptr++]=$f22;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("encoding");
	this.stk[this.ptr++]=BWIPJS.psstring("byte");
	this.eq();
	this.xget("encoding");
	this.stk[this.ptr++]=BWIPJS.psstring("ccb");
	this.eq();
	this.or();
	this.stk[this.ptr++]=$f26;
	var t35=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t35.call(this)==-1) return -1;
	}
	this.xget("encoding");
	this.stk[this.ptr++]=BWIPJS.psstring("auto");
	this.eq();
	this.stk[this.ptr++]=$f104;
	var t133=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t133.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="metrics";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([1,11,7,1,0,9]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,14,7,8,0,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,17,7,36,0,36]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,20,8,19,0,19]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,24,8,9,0,17]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,28,8,25,0,33]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,8,8,1,0,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,11,9,1,0,9]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,14,9,8,0,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,17,10,36,0,36]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,20,11,19,0,19]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,23,13,9,0,17]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,26,15,27,0,35]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,6,12,1,1,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,8,14,7,7,7]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,10,16,15,15,15]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,12,18,25,25,25]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,15,21,37,37,37]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,20,26,1,17,33]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,26,32,1,9,17]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,32,38,21,29,37]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,38,44,15,31,47]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,44,50,1,25,49]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,4,8,47,19,43]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,6,12,1,1,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,8,14,7,7,7]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,10,16,15,15,15]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,12,18,25,25,25]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,15,21,37,37,37]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,20,26,1,17,33]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,26,32,1,9,17]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,32,38,21,29,37]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,38,44,15,31,47]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,44,50,1,25,49]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ccametrics";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([2,5,4,39,0,19]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,6,4,1,0,33]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,7,5,32,0,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,8,5,8,0,40]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,9,6,14,0,46]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,10,6,43,0,23]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,12,7,20,0,52]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,4,4,11,43,23]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,5,5,1,33,13]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,6,6,5,37,17]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,7,7,15,47,27]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,8,7,21,1,33]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,3,4,40,20,52]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,4,5,43,23,3]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,5,6,46,26,6]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,6,7,34,14,46]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,7,8,29,9,41]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("cca");
	this.stk[this.ptr++]=$f105;
	var t134=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t134.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="urows";
	this.xget("rows");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ucols";
	this.xget("columns");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f110;
	var t139=this.stk[--this.ptr];
	while (t139.call(this)!=-1);
	this.stk[this.ptr++]="m";
	this.xget("datcws");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="n";
	this.xget("c");
	this.xget("r");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.xget("k");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cws";
	this.xget("c");
	this.xget("r");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("cws");
	this.stk[this.ptr++]=0;
	this.xget("datcws");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.xget("cws");
	this.xget("m");
	this.stk[this.ptr++]=Infinity;
	this.xget("n");
	this.xget("m");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f111;
	var t142=this.stk[--this.ptr];
	var t140=this.stk[--this.ptr];
	for (var t141=0; t141<t140; t141++) {
		if (t142.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.xget("cws");
	this.xget("n");
	this.stk[this.ptr++]=Infinity;
	this.xget("k");
	this.stk[this.ptr++]=$f112;
	var t145=this.stk[--this.ptr];
	var t143=this.stk[--this.ptr];
	for (var t144=0; t144<t143; t144++) {
		if (t145.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr++]="rsalog";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=928;
	this.stk[this.ptr++]=$f113;
	var t148=this.stk[--this.ptr];
	var t146=this.stk[--this.ptr];
	for (var t147=0; t147<t146; t147++) {
		if (t148.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rslog";
	this.stk[this.ptr++]=929;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=928;
	this.stk[this.ptr++]=$f114;
	var t155=this.stk[--this.ptr];
	var t153=this.stk[--this.ptr];
	var t152=this.stk[--this.ptr];
	var t151=this.stk[--this.ptr];
	for (var t154=t151; t152<0 ? t154>=t153 : t154<=t153; t154+=t152) {
		this.stk[this.ptr++]=t154;
		if (t155.call(this)==-1) break;
	}
	this.stk[this.ptr++]="rsprod";
	this.stk[this.ptr++]=$f117;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="coeffs";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=1;
	this.xget("k");
	this.stk[this.ptr++]=$f118;
	var t160=this.stk[--this.ptr];
	var t158=this.stk[--this.ptr];
	for (var t159=0; t159<t158; t159++) {
		if (t160.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=1;
	this.xget("k");
	this.stk[this.ptr++]=$f120;
	var t170=this.stk[--this.ptr];
	var t168=this.stk[--this.ptr];
	var t167=this.stk[--this.ptr];
	var t166=this.stk[--this.ptr];
	for (var t169=t166; t167<0 ? t169>=t168 : t169<=t168; t169+=t167) {
		this.stk[this.ptr++]=t169;
		if (t170.call(this)==-1) break;
	}
	this.stk[this.ptr++]="coeffs";
	this.xget("coeffs");
	this.stk[this.ptr++]=0;
	this.xget("coeffs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("coeffs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=-2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f121;
	var t175=this.stk[--this.ptr];
	var t173=this.stk[--this.ptr];
	var t172=this.stk[--this.ptr];
	var t171=this.stk[--this.ptr];
	for (var t174=t171; t172<0 ? t174>=t173 : t174<=t173; t174+=t172) {
		this.stk[this.ptr++]=t174;
		if (t175.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("n");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f123;
	var t185=this.stk[--this.ptr];
	var t183=this.stk[--this.ptr];
	var t182=this.stk[--this.ptr];
	var t181=this.stk[--this.ptr];
	for (var t184=t181; t182<0 ? t184>=t183 : t184<=t183; t184+=t182) {
		this.stk[this.ptr++]=t184;
		if (t185.call(this)==-1) break;
	}
	this.xget("n");
	this.stk[this.ptr++]=1;
	this.xget("n");
	this.xget("k");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f124;
	var t192=this.stk[--this.ptr];
	var t190=this.stk[--this.ptr];
	var t189=this.stk[--this.ptr];
	var t188=this.stk[--this.ptr];
	for (var t191=t188; t189<0 ? t191>=t190 : t191<=t190; t191+=t189) {
		this.stk[this.ptr++]=t191;
		if (t192.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws";
	this.xget("cws");
	this.stk[this.ptr++]=0;
	this.xget("cws");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="clusters";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([120256,125680,128380,120032,125560,128318,108736,119920,108640,86080,108592,86048,110016,120560,125820,109792,120440,125758,88256,109680,88160,89536,110320,120700,89312,110200,120638,89200,110140,89840,110460,89720,110398,89980,128506,119520,125304,128190,107712,119408,125244,107616,119352,84032,107568,119324,84000,107544,83984,108256,119672,125374,85184,108144,119612,85088,108088,119582,85040,108060,85728,108408,119742,85616,108348,85560,108318,85880,108478,85820,85790,107200,119152,125116,107104,119096,125086,83008,107056,119068,82976,107032,82960,82952,83648,107376,119228,83552,107320,119198,83504,107292,83480,83468,83824,107452,83768,107422,83740,83900,106848,118968,125022,82496,106800,118940,82464,106776,118926,82448,106764,82440,106758,82784,106936,119006,82736,106908,82712,106894,82700,82694,106974,82830,82240,106672,118876,82208,106648,118862,82192,106636,82184,106630,82180,82352,82328,82316,82080,118830,106572,106566,82050,117472,124280,127678,103616,117360,124220,103520,117304,124190,75840,103472,75808,104160,117624,124350,76992,104048,117564,76896,103992,76848,76824,77536,104312,117694,77424,104252,77368,77340,77688,104382,77628,77758,121536,126320,128700,121440,126264,128670,111680,121392,126236,111648,121368,126222,111632,121356,103104,117104,124092,112320,103008,117048,124062,112224,121656,126366,93248,74784,102936,117006,93216,112152,93200,75456,103280,117180,93888,75360,103224,117150,93792,112440,121758,93744,75288,93720,75632,103356,94064,75576,103326,94008,112542,93980,75708,94140,75678,94110,121184,126136,128606,111168,121136,126108,111136,121112,126094,111120,121100,111112,111108,102752,116920,123998,111456,102704,116892,91712,74272,121244,116878,91680,74256,102668,91664,111372,102662,74244,74592,102840,116958,92000,74544,102812,91952,111516,102798,91928,74508,74502,74680,102878,92088,74652,92060,74638,92046,92126,110912,121008,126044,110880,120984,126030,110864,120972,110856,120966,110852,110850,74048,102576,116828,90944,74016,102552,116814,90912,111000,121038,90896,73992,102534,90888,110982,90884,74160,102620,91056,74136,102606,91032,111054,91020,74118,91014,91100,91086,110752,120920,125998,110736,120908,110728,120902,110724,110722,73888,102488,116782,90528,73872,102476,90512,110796,102470,90504,73860,90500,73858,73944,90584,90572,90566,120876,120870,110658,102444,73800,90312,90308,90306,101056,116080,123580,100960,116024,70720,100912,115996,70688,100888,70672,70664,71360,101232,116156,71264,101176,116126,71216,101148,71192,71180,71536,101308,71480,101278,71452,71612,71582,118112,124600,127838,105024,118064,124572,104992,118040,124558,104976,118028,104968,118022,100704,115896,123486,105312,100656,115868,79424,70176,118172,115854,79392,105240,100620,79376,70152,79368,70496,100792,115934,79712,70448,118238,79664,105372,100750,79640,70412,79628,70584,100830,79800,70556,79772,70542,70622,79838,122176,126640,128860,122144,126616,128846,122128,126604,122120,126598,122116,104768,117936,124508,113472,104736,126684,124494,113440,122264,126670,113424,104712,117894,113416,122246,104706,69952,100528,115804,78656,69920,100504,115790,96064,78624,104856,117966,96032,113560,122318,100486,96016,78600,104838,96008,69890,70064,100572,78768,70040,100558,96176,78744,104910,96152,113614,70022,78726,70108,78812,70094,96220,78798,122016,126552,128814,122000,126540,121992,126534,121988,121986,104608,117848,124462,113056,104592,126574,113040,122060,117830,113032,104580,113028,104578,113026,69792,100440,115758,78240,69776,100428,95136,78224,104652,100422,95120,113100,69764,95112,78212,69762,78210,69848,100462,78296,69836,95192,78284,69830,95180,78278,69870,95214,121936,126508,121928,126502,121924,121922,104528,117804,112848,104520,117798,112840,121958,112836,104514,112834,69712,100396,78032,69704,100390,94672,78024,104550,94664,112870,69698,94660,78018,94658,78060,94700,94694,126486,121890,117782,104484,104482,69672,77928,94440,69666,77922,99680,68160,99632,68128,99608,115342,68112,99596,68104,99590,68448,99768,115422,68400,99740,68376,99726,68364,68358,68536,99806,68508,68494,68574,101696,116400,123740,101664,116376,101648,116364,101640,116358,101636,67904,99504,115292,72512,67872,116444,115278,72480,101784,116430,72464,67848,99462,72456,101766,67842,68016,99548,72624,67992,99534,72600,101838,72588,67974,68060,72668,68046,72654,118432,124760,127918,118416,124748,118408,124742,118404,118402,101536,116312,105888,101520,116300,105872,118476,116294,105864,101508,105860,101506,105858,67744,99416,72096,67728,116334,80800,72080,101580,99398,80784,105932,67716,80776,72068,67714,72066,67800,99438,72152,67788,80856,72140,67782,80844,72134,67822,72174,80878,126800,128940,126792,128934,126788,126786,118352,124716,122576,126828,124710,122568,126822,122564,118338,122562,101456,116268,105680,101448,116262,114128,105672,118374,114120,122598,101442,114116,105666,114114,67664,99372,71888,67656,99366,80336,71880,101478,97232,80328,105702,67650,97224,114150,71874,97220,67692,71916,67686,80364,71910,97260,80358,97254,126760,128918,126756,126754,118312,124694,122472,126774,122468,118306,122466,101416,116246,105576,101412,113896,105572,101410,113892,105570,113890,67624,99350,71784,101430,80104,71780,67618,96744,80100,71778,96740,80098,96738,71798,96758,126738,122420,122418,105524,113780,113778,71732,79988,96500,96498,66880,66848,98968,66832,66824,66820,66992,66968,66956,66950,67036,67022,100000,99984,115532,99976,115526,99972,99970,66720,98904,69024,100056,98892,69008,100044,69000,100038,68996,66690,68994,66776,98926,69080,100078,69068,66758,69062,66798,69102,116560,116552,116548,116546,99920,102096,116588,115494,102088,116582,102084,99906,102082,66640,68816,66632,98854,73168,68808,66628,73160,68804,66626,73156,68802,66668,68844,66662,73196,68838,73190,124840,124836,124834,116520,118632,124854,118628,116514,118626,99880,115478,101992,116534,106216,101988,99874,106212,101986,106210,66600,98838,68712,99894,72936,68708,66594,81384,72932,68706,81380,72930,66614,68726,72950,81398,128980,128978,124820,126900,124818,126898,116500,118580,116498,122740,118578,122738,99860,101940,99858,106100,101938,114420]);
	this.stk[this.ptr++]=BWIPJS.psarray([128352,129720,125504,128304,129692,125472,128280,129678,125456,128268,125448,128262,125444,125792,128440,129758,120384,125744,128412,120352,125720,128398,120336,125708,120328,125702,120324,120672,125880,128478,110144,120624,125852,110112,120600,125838,110096,120588,110088,120582,110084,110432,120760,125918,89664,110384,120732,89632,110360,120718,89616,110348,89608,110342,89952,110520,120798,89904,110492,89880,110478,89868,90040,110558,90012,89998,125248,128176,129628,125216,128152,129614,125200,128140,125192,128134,125188,125186,119616,125360,128220,119584,125336,128206,119568,125324,119560,125318,119556,119554,108352,119728,125404,108320,119704,125390,108304,119692,108296,119686,108292,108290,85824,108464,119772,85792,108440,119758,85776,108428,85768,108422,85764,85936,108508,85912,108494,85900,85894,85980,85966,125088,128088,129582,125072,128076,125064,128070,125060,125058,119200,125144,128110,119184,125132,119176,125126,119172,119170,107424,119256,125166,107408,119244,107400,119238,107396,107394,83872,107480,119278,83856,107468,83848,107462,83844,83842,83928,107502,83916,83910,83950,125008,128044,125000,128038,124996,124994,118992,125036,118984,125030,118980,118978,106960,119020,106952,119014,106948,106946,82896,106988,82888,106982,82884,82882,82924,82918,124968,128022,124964,124962,118888,124982,118884,118882,106728,118902,106724,106722,82408,106742,82404,82402,124948,124946,118836,118834,106612,106610,124224,127664,129372,124192,127640,129358,124176,127628,124168,127622,124164,124162,117568,124336,127708,117536,124312,127694,117520,124300,117512,124294,117508,117506,104256,117680,124380,104224,117656,124366,104208,117644,104200,117638,104196,104194,77632,104368,117724,77600,104344,117710,77584,104332,77576,104326,77572,77744,104412,77720,104398,77708,77702,77788,77774,128672,129880,93168,128656,129868,92664,128648,129862,92412,128644,128642,124064,127576,129326,126368,124048,129902,126352,128716,127558,126344,124036,126340,124034,126338,117152,124120,127598,121760,117136,124108,121744,126412,124102,121736,117124,121732,117122,121730,103328,117208,124142,112544,103312,117196,112528,121804,117190,112520,103300,112516,103298,112514,75680,103384,117230,94112,75664,103372,94096,112588,103366,94088,75652,94084,75650,75736,103406,94168,75724,94156,75718,94150,75758,128592,129836,91640,128584,129830,91388,128580,91262,128578,123984,127532,126160,123976,127526,126152,128614,126148,123970,126146,116944,124012,121296,116936,124006,121288,126182,121284,116930,121282,102864,116972,111568,102856,116966,111560,121318,111556,102850,111554,74704,102892,92112,74696,102886,92104,111590,92100,74690,92098,74732,92140,74726,92134,128552,129814,90876,128548,90750,128546,123944,127510,126056,128566,126052,123938,126050,116840,123958,121064,116836,121060,116834,121058,102632,116854,111080,121078,111076,102626,111074,74216,102646,91112,74212,91108,74210,91106,74230,91126,128532,90494,128530,123924,126004,123922,126002,116788,120948,116786,120946,102516,110836,102514,110834,73972,90612,73970,90610,128522,123914,125978,116762,120890,102458,110714,123552,127320,129198,123536,127308,123528,127302,123524,123522,116128,123608,127342,116112,123596,116104,123590,116100,116098,101280,116184,123630,101264,116172,101256,116166,101252,101250,71584,101336,116206,71568,101324,71560,101318,71556,71554,71640,101358,71628,71622,71662,127824,129452,79352,127816,129446,79100,127812,78974,127810,123472,127276,124624,123464,127270,124616,127846,124612,123458,124610,115920,123500,118224,115912,123494,118216,124646,118212,115906,118210,100816,115948,105424,100808,115942,105416,118246,105412,100802,105410,70608,100844,79824,70600,100838,79816,105446,79812,70594,79810,70636,79852,70630,79846,129960,95728,113404,129956,95480,113278,129954,95356,95294,127784,129430,78588,128872,129974,95996,78462,128868,127778,95870,128866,123432,127254,124520,123428,126696,128886,123426,126692,124514,126690,115816,123446,117992,115812,122344,117988,115810,122340,117986,122338,100584,115830,104936,100580,113640,104932,100578,113636,104930,113634,70120,100598,78824,70116,96232,78820,70114,96228,78818,96226,70134,78838,129940,94968,113022,129938,94844,94782,127764,78206,128820,127762,95102,128818,123412,124468,123410,126580,124466,126578,115764,117876,115762,122100,117874,122098,100468,104692,100466,113140,104690,113138,69876,78324,69874,95220,78322,95218,129930,94588,94526,127754,128794,123402,124442,126522,115738,117818,121978,100410,104570,112890,69754,78074,94714,94398,123216,127148,123208,127142,123204,123202,115408,123244,115400,123238,115396,115394,99792,115436,99784,115430,99780,99778,68560,99820,68552,99814,68548,68546,68588,68582,127400,129238,72444,127396,72318,127394,123176,127126,123752,123172,123748,123170,123746,115304,123190,116456,115300,116452,115298,116450,99560,115318,101864,99556,101860,99554,101858,68072,99574,72680,68068,72676,68066,72674,68086,72694,129492,80632,105854,129490,80508,80446,127380,72062,127924,127378,80766,127922,123156,123700,123154,124788,123698,124786,115252,116340,115250,118516,116338,118514,99444,101620,99442,105972,101618,105970,67828,72180,67826,80884,72178,80882,97008,114044,96888,113982,96828,96798,129482,80252,130010,97148,80190,97086,127370,127898,128954,123146,123674,124730,126842,115226,116282,118394,122618,99386,101498,105722,114170,67706,71930,80378,96632,113854,96572,96542,80062,96702,96444,96414,96350,123048,123044,123042,115048,123062,115044,115042,99048,115062,99044,99042,67048,99062,67044,67042,67062,127188,68990,127186,123028,123316,123026,123314,114996,115572,114994,115570,98932,100084,98930,100082,66804,69108,66802,69106,129258,73084,73022,127178,127450,123018,123290,123834,114970,115514,116602,98874,99962,102138,66682,68858,73210,81272,106174,81212,81182,72894,81342,97648,114364,97592,114334,97564,97550,81084,97724,81054,97694,97464,114270,97436,97422,80990,97502,97372,97358,97326,114868,114866,98676,98674,66292,66290,123098,114842,115130,98618,99194,66170,67322,69310,73404,73374,81592,106334,81564,81550,73310,81630,97968,114524,97944,114510,97932,97926,81500,98012,81486,97998,97880,114478,97868,97862,81454,97902,97836,97830,69470,73564,73550,81752,106414,81740,81734,73518,81774,81708,81702]);
	this.stk[this.ptr++]=BWIPJS.psarray([109536,120312,86976,109040,120060,86496,108792,119934,86256,108668,86136,129744,89056,110072,129736,88560,109820,129732,88312,109694,129730,88188,128464,129772,89592,128456,129766,89340,128452,89214,128450,125904,128492,125896,128486,125892,125890,120784,125932,120776,125926,120772,120770,110544,120812,110536,120806,110532,84928,108016,119548,84448,107768,119422,84208,107644,84088,107582,84028,129640,85488,108284,129636,85240,108158,129634,85116,85054,128232,129654,85756,128228,85630,128226,125416,128246,125412,125410,119784,125430,119780,119778,108520,119798,108516,108514,83424,107256,119166,83184,107132,83064,107070,83004,82974,129588,83704,107390,129586,83580,83518,128116,83838,128114,125172,125170,119284,119282,107508,107506,82672,106876,82552,106814,82492,82462,129562,82812,82750,128058,125050,119034,82296,106686,82236,82206,82366,82108,82078,76736,103920,117500,76256,103672,117374,76016,103548,75896,103486,75836,129384,77296,104188,129380,77048,104062,129378,76924,76862,127720,129398,77564,127716,77438,127714,124392,127734,124388,124386,117736,124406,117732,117730,104424,117750,104420,104418,112096,121592,126334,92608,111856,121468,92384,111736,121406,92272,111676,92216,111646,92188,75232,103160,117118,93664,74992,103036,93424,112252,102974,93304,74812,93244,74782,93214,129332,75512,103294,129908,129330,93944,75388,129906,93820,75326,93758,127604,75646,128756,127602,94078,128754,124148,126452,124146,126450,117236,121844,117234,121842,103412,103410,91584,111344,121212,91360,111224,121150,91248,111164,91192,111134,91164,91150,74480,102780,91888,74360,102718,91768,111422,91708,74270,91678,129306,74620,129850,92028,74558,91966,127546,128634,124026,126202,116986,121338,102906,90848,110968,121022,90736,110908,90680,110878,90652,90638,74104,102590,91000,74044,90940,74014,90910,74174,91070,90480,110780,90424,110750,90396,90382,73916,90556,73886,90526,90296,110686,90268,90254,73822,90334,90204,90190,71136,101112,116094,70896,100988,70776,100926,70716,70686,129204,71416,101246,129202,71292,71230,127348,71550,127346,123636,123634,116212,116210,101364,101362,79296,105200,118140,79072,105080,118078,78960,105020,78904,104990,78876,78862,70384,100732,79600,70264,100670,79480,105278,79420,70174,79390,129178,70524,129466,79740,70462,79678,127290,127866,123514,124666,115962,118266,100858,113376,122232,126654,95424,113264,122172,95328,113208,122142,95280,113180,95256,113166,95244,78560,104824,117950,95968,78448,104764,95856,113468,104734,95800,78364,95772,78350,95758,70008,100542,78712,69948,96120,78652,69918,96060,78622,96030,70078,78782,96190,94912,113008,122044,94816,112952,122014,94768,112924,94744,112910,94732,94726,78192,104636,95088,78136,104606,95032,113054,95004,78094,94990,69820,78268,69790,95164,78238,95134,94560,112824,121950,94512,112796,94488,112782,94476,94470,78008,104542,94648,77980,94620,77966,94606,69726,78046,94686,94384,112732,94360,112718,94348,94342,77916,94428,77902,94414,94296,112686,94284,94278,77870,94318,94252,94246,68336,99708,68216,99646,68156,68126,68476,68414,127162,123258,115450,99834,72416,101752,116414,72304,101692,72248,101662,72220,72206,67960,99518,72568,67900,72508,67870,72478,68030,72638,80576,105840,118460,80480,105784,118430,80432,105756,80408,105742,80396,80390,72048,101564,80752,71992,101534,80696,71964,80668,71950,80654,67772,72124,67742,80828,72094,80798,114016,122552,126814,96832,113968,122524,96800,113944,122510,96784,113932,96776,113926,96772,80224,105656,118366,97120,80176,105628,97072,114076,105614,97048,80140,97036,80134,97030,71864,101470,80312,71836,97208,80284,71822,97180,80270,97166,67678,71902,80350,97246,96576,113840,122460,96544,113816,122446,96528,113804,96520,113798,96516,96514,80048,105564,96688,80024,105550,96664,113870,96652,80006,96646,71772,80092,71758,96732,80078,96718,96416,113752,122414,96400,113740,96392,113734,96388,96386,79960,105518,96472,79948,96460,79942,96454,71726,79982,96494,96336,113708,96328,113702,96324,96322,79916,96364,79910,96358,96296,113686,96292,96290,79894,96310,66936,99006,66876,66846,67006,68976,100028,68920,99998,68892,68878,66748,69052,66718,69022,73056,102072,116574,73008,102044,72984,102030,72972,72966,68792,99934,73144,68764,73116,68750,73102,66654,68830,73182,81216,106160,118620,81184,106136,118606,81168,106124,81160,106118,81156,81154,72880,101980,81328,72856,101966,81304,106190,81292,72838,81286,68700,72924,68686,81372,72910,81358,114336,122712,126894,114320,122700,114312,122694,114308,114306,81056,106072,118574,97696,81040,106060,97680,114380,106054,97672,81028,97668,81026,97666,72792,101934,81112,72780,97752,81100,72774,97740,81094,97734,68654,72814,81134,97774,114256,122668,114248,122662,114244,114242,80976,106028,97488,80968,106022,97480,114278,97476,80962,97474,72748,81004,72742,97516,80998,97510,114216,122646,114212,114210,80936,106006,97384,80932,97380,80930,97378,72726,80950,97398,114196,114194,80916,97332,80914,97330,66236,66206,67256,99166,67228,67214,66142,67294,69296,100188,69272,100174,69260,69254,67164,69340,67150,69326,73376,102232,116654,73360,102220,73352,102214,73348,73346,69208,100142,73432,102254,73420,69190,73414,67118,69230,73454,106320,118700,106312,118694,106308,106306,73296,102188,81616,106348,102182,81608,73284,81604,73282,81602,69164,73324,69158,81644,73318,81638,122792,126934,122788,122786,106280,118678,114536,106276,114532,106274,114530,73256,102166,81512,73252,98024,81508,73250,98020,81506,98018,69142,73270,81526,98038,122772,122770,106260,114484,106258,114482,73236,81460,73234,97908,81458,97906,122762,106250,114458,73226,81434,97850,66396,66382,67416,99246,67404,67398,66350,67438,69456,100268,69448,100262,69444,69442,67372,69484,67366,69478,102312,116694,102308,102306,69416,100246,73576,102326,73572,69410,73570,67350,69430,73590,118740,118738,102292,106420,102290,106418,69396,73524,69394,81780,73522,81778,118730,102282,106394,69386,73498,81722,66476,66470,67496,99286,67492,67490,66454,67510,100308,100306,67476,69556,67474,69554,116714]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="raps";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([802,930,946,818,882,890,826,954,922,986,970,906,778,794,786,914,978,982,980,916,948,932,934,942,940,936,808,812,814,806,822,950,918,790,788,820,884,868,870,878,876,872,840,856,860,862,846,844,836,838,834,866]);
	this.stk[this.ptr++]=BWIPJS.psarray([718,590,622,558,550,566,534,530,538,570,562,546,610,626,634,762,754,758,630,628,612,614,582,578,706,738,742,740,748,620,556,552,616,744,712,716,708,710,646,654,652,668,664,696,688,656,720,592,600,604,732,734]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cwtobits";
	this.stk[this.ptr++]=$f127;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="raptobits";
	this.stk[this.ptr++]=$f130;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rwid";
	this.stk[this.ptr++]=BWIPJS.psarray([38,55,82,99]);
	this.xget("c");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("c");
	this.stk[this.ptr++]=3;
	this.eq();
	this.xget("cca");
	this.and();
	this.stk[this.ptr++]=$f131;
	var t201=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t201.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="pixs";
	this.xget("rwid");
	this.xget("r");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("r");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f137;
	var t211=this.stk[--this.ptr];
	var t209=this.stk[--this.ptr];
	var t208=this.stk[--this.ptr];
	var t207=this.stk[--this.ptr];
	for (var t210=t207; t208<0 ? t210>=t209 : t210<=t209; t210+=t208) {
		this.stk[this.ptr++]=t210;
		if (t211.call(this)==-1) break;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	this.stk[this.ptr++]=this.get("renmatrix");
	this.stk[this.ptr++]="pixs";
	this.xget("pixs");
	this.stk[this.ptr++]="pixx";
	this.xget("rwid");
	this.stk[this.ptr++]="pixy";
	this.xget("r");
	this.stk[this.ptr++]="height";
	this.xget("r");
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.xget("rowmult");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="width";
	this.xget("rwid");
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
	var t212=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t212.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("micropdf417");
// END OF micropdf417

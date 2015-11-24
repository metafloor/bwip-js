// file: bwipp/qrcode.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN qrcode
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("qrcode", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("qrcode", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
BWIPJS.bwipp["qrcode"]=function() {
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
		return -1;
	}
	function $f11(){
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
	function $f12(){
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f13(){
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=94;
		this.ne();
		this.stk[this.ptr++]=$f11;
		this.stk[this.ptr++]=$f12;
		var t11=this.stk[--this.ptr];
		var t12=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t12.call(this)==-1) return -1;
		} else {
			if (t11.call(this)==-1) return -1;
		}
	}
	function $f14(){
		this.xget("i");
		this.xget("barlen");
		this.eq();
		this.stk[this.ptr++]=$f10;
		var t10=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t10.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f13;
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
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
	function $f15(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	}
	function $f16(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=37;
		this.eq();
		this.stk[this.ptr++]=$f15;
		var t15=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t15.call(this)==-1) return -1;
		}
	}
	function $f17(){
		this.stk[this.ptr++]="fnc1first";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msg";
		this.stk[this.ptr++]=Infinity;
		this.xget("msg");
		this.stk[this.ptr++]=1;
		this.xget("msglen");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f16;
		var t16=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t16);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="msglen";
		this.xget("msg");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f18(){
		this.xget("msg");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("fn1");
		this.eq();
		this.stk[this.ptr++]=$f17;
		var t17=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t17.call(this)==-1) return -1;
		}
	}
	function $f19(){
		this.stk[this.ptr++]=BWIPJS.psstring("M");
	}
	function $f20(){
		this.stk[this.ptr++]=BWIPJS.psstring("L");
	}
	function $f21(){
		this.stk[this.ptr++]="eclevel";
		this.xget("format");
		this.stk[this.ptr++]=BWIPJS.psstring("full");
		this.eq();
		this.stk[this.ptr++]=$f19;
		this.stk[this.ptr++]=$f20;
		var t19=this.stk[--this.ptr];
		var t20=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t20.call(this)==-1) return -1;
		} else {
			if (t19.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f22(){
	}
	function $f23(){
		this.stk[this.ptr++]=-1;
	}
	function $f24(){
	}
	function $f25(){
		this.stk[this.ptr++]=-1;
	}
	function $f26(){
	}
	function $f27(){
	}
	function $f28(){
	}
	function $f29(){
	}
	function $f30(){
		this.stk[this.ptr++]=-1;
	}
	function $f31(){
	}
	function $f32(){
	}
	function $f33(){
		this.stk[this.ptr++]=-1;
	}
	function $f34(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f35(){
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f34;
		var t70=this.stk[--this.ptr];
		var t68=this.stk[--this.ptr];
		var t67=this.stk[--this.ptr];
		var t66=this.stk[--this.ptr];
		for (var t69=t66; t67<0 ? t69>=t68 : t69<=t68; t69+=t67) {
			this.stk[this.ptr++]=t69;
			if (t70.call(this)==-1) break;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t72=this.stk[--this.ptr];
		var t71=this.stk[--this.ptr];
		if (t72 < 0) t=this.stk.splice(this.ptr-t71, -t72);
		else t=this.stk.splice(this.ptr-t71, t71-t72);
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
	function $f36(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("charmap");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("charvals");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t74=this.stk[--this.ptr];
		var t73=this.stk[--this.ptr];
		if (t74 < 0) t=this.stk.splice(this.ptr-t73, -t74);
		else t=this.stk.splice(this.ptr-t73, t73-t74);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f37(){
		this.ptr--;
		this.stk[this.ptr++]=37;
	}
	function $f38(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=-1;
		this.eq();
		this.stk[this.ptr++]=$f37;
		var t80=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t80.call(this)==-1) return -1;
		}
	}
	function $f39(){
		this.stk[this.ptr++]="in";
		this.stk[this.ptr++]=Infinity;
		this.xget("in");
		this.stk[this.ptr++]=$f38;
		var t81=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t81);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f40(){
		return -1;
	}
	function $f41(){
		this.xget("charvals");
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=45;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("charvals");
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=11;
		this.xget("tobin");
		this.stk[this.ptr++]="k";
		this.xget("k");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f42(){
		this.xget("charvals");
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=6;
		this.xget("tobin");
		this.stk[this.ptr++]="k";
		this.xget("k");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f43(){
		this.xget("k");
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.stk[this.ptr++]=$f40;
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		}
		this.xget("k");
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f41;
		this.stk[this.ptr++]=$f42;
		var t84=this.stk[--this.ptr];
		var t85=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t85.call(this)==-1) return -1;
		} else {
			if (t84.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("out");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("m");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("m");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="m";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f44(){
		this.stk[this.ptr++]="in";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("fnc1first");
		this.stk[this.ptr++]=$f39;
		var t82=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t82.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="out";
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="m";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f43;
		var t86=this.stk[--this.ptr];
		while (t86.call(this)!=-1);
		this.xget("out");
		this.stk[this.ptr++]=0;
		this.xget("m");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f45(){
		return -1;
	}
	function $f46(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f47(){
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f46;
		var t88=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t88);
		this.stk[this.ptr++]=10;
		this.xget("tobin");
		this.stk[this.ptr++]="k";
		this.xget("k");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f48(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f49(){
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f48;
		var t89=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t89);
		this.stk[this.ptr++]=7;
		this.xget("tobin");
		this.stk[this.ptr++]="k";
		this.xget("k");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f50(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f51(){
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=0;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f50;
		var t90=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t90);
		this.stk[this.ptr++]=4;
		this.xget("tobin");
		this.stk[this.ptr++]="k";
		this.xget("k");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f52(){
		this.xget("k");
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.eq();
		this.stk[this.ptr++]=$f49;
		this.stk[this.ptr++]=$f51;
		var t91=this.stk[--this.ptr];
		var t92=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t92.call(this)==-1) return -1;
		} else {
			if (t91.call(this)==-1) return -1;
		}
	}
	function $f53(){
		this.xget("k");
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.stk[this.ptr++]=$f45;
		var t87=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t87.call(this)==-1) return -1;
		}
		this.xget("k");
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f47;
		this.stk[this.ptr++]=$f52;
		var t93=this.stk[--this.ptr];
		var t94=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t94.call(this)==-1) return -1;
		} else {
			if (t93.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("out");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("m");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("m");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="m";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f54(){
		this.stk[this.ptr++]="in";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="out";
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="m";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f53;
		var t95=this.stk[--this.ptr];
		while (t95.call(this)!=-1);
		this.xget("out");
		this.stk[this.ptr++]=0;
		this.xget("m");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f55(){
		this.ptr--;
		this.stk[this.ptr++]=29;
	}
	function $f56(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=-1;
		this.eq();
		this.stk[this.ptr++]=$f55;
		var t96=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t96.call(this)==-1) return -1;
		}
	}
	function $f57(){
		this.stk[this.ptr++]="in";
		this.stk[this.ptr++]=Infinity;
		this.xget("in");
		this.stk[this.ptr++]=$f56;
		var t97=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t97);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f58(){
		this.stk[this.ptr++]="k";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=8;
		this.xget("tobin");
		this.xget("out");
		this.xget("k");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t100=this.stk[--this.ptr];
		var t99=this.stk[--this.ptr];
		if (t100 < 0) t=this.stk.splice(this.ptr-t99, -t100);
		else t=this.stk.splice(this.ptr-t99, t99-t100);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f59(){
		this.stk[this.ptr++]="in";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("fnc1first");
		this.stk[this.ptr++]=$f57;
		var t98=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t98.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="out";
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f58;
		var t105=this.stk[--this.ptr];
		var t103=this.stk[--this.ptr];
		var t102=this.stk[--this.ptr];
		var t101=this.stk[--this.ptr];
		for (var t104=t101; t102<0 ? t104>=t103 : t104<=t103; t104+=t102) {
			this.stk[this.ptr++]=t104;
			if (t105.call(this)==-1) break;
		}
		this.xget("out");
	}
	function $f60(){
		return -1;
	}
	function $f61(){
		this.stk[this.ptr++]=33088;
	}
	function $f62(){
		this.stk[this.ptr++]=49472;
	}
	function $f63(){
		this.xget("k");
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.eq();
		this.stk[this.ptr++]=$f60;
		var t106=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t106.call(this)==-1) return -1;
		}
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=256;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("in");
		this.xget("k");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=57408;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f61;
		this.stk[this.ptr++]=$f62;
		var t107=this.stk[--this.ptr];
		var t108=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t108.call(this)==-1) return -1;
		} else {
			if (t107.call(this)==-1) return -1;
		}
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=-8;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=192;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=255;
		this.and();
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=13;
		this.xget("tobin");
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("out");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("m");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("m");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="m";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k";
		this.xget("k");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f64(){
		this.stk[this.ptr++]="in";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="out";
		this.xget("in");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="m";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f63;
		var t109=this.stk[--this.ptr];
		while (t109.call(this)!=-1);
		this.xget("out");
	}
	function $f65(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("bits");
		this.xget("j");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t111=this.stk[--this.ptr];
		var t110=this.stk[--this.ptr];
		if (t111 < 0) t=this.stk.splice(this.ptr-t110, -t111);
		else t=this.stk.splice(this.ptr-t110, t110-t111);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f66(){
		this.stk[this.ptr++]=0;
	}
	function $f67(){
		this.stk[this.ptr++]=0;
	}
	function $f68(){
		this.stk[this.ptr++]=0;
	}
	function $f69(){
		this.stk[this.ptr++]=0;
	}
	function $f70(){
		this.stk[this.ptr++]=0;
	}
	function $f71(){
		this.stk[this.ptr++]=0;
	}
	function $f72(){
		this.stk[this.ptr++]=0;
	}
	function $f73(){
		this.stk[this.ptr++]=0;
	}
	function $f74(){
		this.xget("nextKs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("numKs");
		this.xget("i");
		this.xget("numKs");
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
	function $f75(){
		this.xget("nextKs");
		this.xget("i");
		this.xget("nextKs");
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
	function $f76(){
		this.xget("nextNs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("numNs");
		this.xget("i");
		this.xget("numNs");
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
	function $f77(){
		this.xget("nextNs");
		this.xget("i");
		this.xget("nextNs");
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
	function $f78(){
		this.xget("nextBs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("numBs");
		this.xget("i");
		this.xget("numBs");
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
	function $f79(){
		this.xget("nextBs");
		this.xget("i");
		this.xget("nextBs");
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
	function $f80(){
		this.xget("nextAs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("numAs");
		this.xget("i");
		this.xget("numAs");
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
	function $f81(){
		this.xget("nextAs");
		this.xget("i");
		this.xget("nextAs");
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
	function $f82(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="barchar";
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("Kexcl");
		this.xget("barchar");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f74;
		this.stk[this.ptr++]=$f75;
		var t136=this.stk[--this.ptr];
		var t137=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t137.call(this)==-1) return -1;
		} else {
			if (t136.call(this)==-1) return -1;
		}
		this.xget("Nexcl");
		this.xget("barchar");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f76;
		this.stk[this.ptr++]=$f77;
		var t138=this.stk[--this.ptr];
		var t139=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t139.call(this)==-1) return -1;
		} else {
			if (t138.call(this)==-1) return -1;
		}
		this.xget("Bexcl");
		this.xget("barchar");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f78;
		this.stk[this.ptr++]=$f79;
		var t140=this.stk[--this.ptr];
		var t141=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t141.call(this)==-1) return -1;
		} else {
			if (t140.call(this)==-1) return -1;
		}
		this.xget("Aexcl");
		this.xget("barchar");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1])!==undefined; this.ptr--;
		this.stk[this.ptr++]=$f80;
		this.stk[this.ptr++]=$f81;
		var t142=this.stk[--this.ptr];
		var t143=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t143.call(this)==-1) return -1;
		} else {
			if (t142.call(this)==-1) return -1;
		}
	}
	function $f83(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	}
	function $f84(){
		this.xget("numK");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextBs");
		this.xget("numK");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f85(){
		this.xget("numK");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextAs");
		this.xget("numK");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f86(){
		this.xget("numK");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextNs");
		this.xget("numK");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f87(){
		this.xget("numK");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("numK");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("msglen");
		this.eq();
		this.and();
	}
	function $f88(){
		this.xget("numA");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextKs");
		this.xget("numA");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f89(){
		this.xget("numA");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextBs");
		this.xget("numA");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f90(){
		this.xget("numA");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextNs");
		this.xget("numA");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f91(){
		this.xget("numA");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("numA");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("msglen");
		this.eq();
		this.and();
	}
	function $f92(){
		this.xget("numN");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextKs");
		this.xget("numN");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f93(){
		this.xget("numN");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextBs");
		this.xget("numN");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f94(){
		this.xget("numN");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("nextAs");
		this.xget("numN");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.and();
	}
	function $f95(){
		this.xget("numN");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("numN");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("msglen");
		this.eq();
		this.and();
	}
	function $f96(){
		return -1;
	}
	function $f97(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f98(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f99(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f100(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f101(){
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f102(){
		this.xget("K");
		return -1;
	}
	function $f103(){
		this.xget("K");
		return -1;
	}
	function $f104(){
		this.xget("K");
		return -1;
	}
	function $f105(){
		this.xget("K");
		return -1;
	}
	function $f106(){
		this.xget("B");
		return -1;
	}
	function $f107(){
		this.xget("A");
		return -1;
	}
	function $f108(){
		this.xget("A");
		return -1;
	}
	function $f109(){
		this.xget("B");
	}
	function $f110(){
		this.xget("A");
	}
	function $f111(){
		this.xget("ver");
		this.xget("vM1");
		this.ne();
		this.xget("ver");
		this.xget("vM2");
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f109;
		this.stk[this.ptr++]=$f110;
		var t163=this.stk[--this.ptr];
		var t164=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t164.call(this)==-1) return -1;
		} else {
			if (t163.call(this)==-1) return -1;
		}
		return -1;
	}
	function $f112(){
		this.xget("N");
		return -1;
	}
	function $f113(){
		this.xget("B");
		return -1;
	}
	function $f114(){
		this.xget("N");
		return -1;
	}
	function $f115(){
		this.xget("A");
		return -1;
	}
	function $f116(){
		this.xget("N");
		return -1;
	}
	function $f117(){
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("KbeforeA");
		this.stk[this.ptr++]=$f102;
		var t156=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t156.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("KbeforeN");
		this.stk[this.ptr++]=$f103;
		var t157=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t157.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=6;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=3;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("KbeforeB");
		this.stk[this.ptr++]=$f104;
		var t158=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t158.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("KbeforeE");
		this.stk[this.ptr++]=$f105;
		var t159=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t159.call(this)==-1) return -1;
		}
		this.xget("numK");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f106;
		var t160=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t160.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=8;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=4;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("AbeforeB");
		this.stk[this.ptr++]=$f107;
		var t161=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t161.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("e");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("AbeforeE");
		this.stk[this.ptr++]=$f108;
		var t162=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t162.call(this)==-1) return -1;
		}
		this.xget("numA");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f111;
		var t165=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t165.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=5;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=3;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeB");
		this.stk[this.ptr++]=$f112;
		var t166=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t166.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeB");
		this.stk[this.ptr++]=$f113;
		var t167=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t167.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr++]=9;
		this.xget("e");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=5;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeA");
		this.stk[this.ptr++]=$f114;
		var t168=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t168.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("e");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeA");
		this.stk[this.ptr++]=$f115;
		var t169=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t169.call(this)==-1) return -1;
		}
		this.xget("numN");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f116;
		var t170=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t170.call(this)==-1) return -1;
		}
		this.xget("B");
		return -1;
	}
	function $f118(){
		this.xget("K");
		return -1;
	}
	function $f119(){
		this.xget("K");
		return -1;
	}
	function $f120(){
		this.xget("K");
		return -1;
	}
	function $f121(){
		this.xget("K");
		return -1;
	}
	function $f122(){
		this.xget("A");
		return -1;
	}
	function $f123(){
		this.xget("A");
		return -1;
	}
	function $f124(){
		this.xget("A");
		return -1;
	}
	function $f125(){
		this.xget("A");
		return -1;
	}
	function $f126(){
		this.xget("N");
		return -1;
	}
	function $f127(){
		this.xget("N");
		return -1;
	}
	function $f128(){
		this.xget("N");
		return -1;
	}
	function $f129(){
		this.xget("N");
		return -1;
	}
	function $f130(){
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr++]=13;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=5;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("KbeforeB");
		this.stk[this.ptr++]=$f118;
		var t172=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t172.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=12;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=5;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("KbeforeA");
		this.stk[this.ptr++]=$f119;
		var t173=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t173.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=11;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=6;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("KbeforeN");
		this.stk[this.ptr++]=$f120;
		var t174=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t174.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=6;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=3;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("KbeforeE");
		this.stk[this.ptr++]=$f121;
		var t175=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t175.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=11;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr++]=14;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=7;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("AbeforeK");
		this.stk[this.ptr++]=$f122;
		var t176=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t176.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=11;
		this.stk[this.ptr++]=15;
		this.stk[this.ptr++]=16;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=7;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("AbeforeB");
		this.stk[this.ptr++]=$f123;
		var t177=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t177.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr++]=15;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("AbeforeN");
		this.stk[this.ptr++]=$f124;
		var t178=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t178.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=8;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=4;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("AbeforeE");
		this.stk[this.ptr++]=$f125;
		var t179=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t179.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=8;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=4;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeK");
		this.stk[this.ptr++]=$f126;
		var t180=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t180.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr++]=9;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=4;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeB");
		this.stk[this.ptr++]=$f127;
		var t181=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t181.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=8;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=4;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeA");
		this.stk[this.ptr++]=$f128;
		var t182=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t182.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=5;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=3;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeE");
		this.stk[this.ptr++]=$f129;
		var t183=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t183.call(this)==-1) return -1;
		}
		this.xget("B");
		return -1;
	}
	function $f131(){
		this.xget("K");
		return -1;
	}
	function $f132(){
		this.xget("B");
		return -1;
	}
	function $f133(){
		this.xget("N");
		return -1;
	}
	function $f134(){
		this.xget("N");
		return -1;
	}
	function $f135(){
		this.xget("N");
		return -1;
	}
	function $f136(){
		this.xget("numK");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f131;
		var t185=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t185.call(this)==-1) return -1;
		}
		this.xget("numB");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f132;
		var t186=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t186.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr++]=15;
		this.stk[this.ptr++]=17;
		this.xget("e");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=9;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeA");
		this.stk[this.ptr++]=$f133;
		var t187=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t187.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr++]=17;
		this.stk[this.ptr++]=18;
		this.xget("e");
		this.xget("e");
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=9;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeB");
		this.stk[this.ptr++]=$f134;
		var t188=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t188.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr++]=9;
		this.xget("e");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=5;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("NbeforeE");
		this.stk[this.ptr++]=$f135;
		var t189=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t189.call(this)==-1) return -1;
		}
		this.xget("A");
		return -1;
	}
	function $f137(){
		this.xget("K");
		return -1;
	}
	function $f138(){
		this.xget("B");
		return -1;
	}
	function $f139(){
		this.xget("A");
		return -1;
	}
	function $f140(){
		this.xget("numK");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f137;
		var t191=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t191.call(this)==-1) return -1;
		}
		this.xget("numB");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f138;
		var t192=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t192.call(this)==-1) return -1;
		}
		this.xget("numA");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f139;
		var t193=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t193.call(this)==-1) return -1;
		}
		this.xget("N");
		return -1;
	}
	function $f141(){
		this.xget("B");
		return -1;
	}
	function $f142(){
		this.xget("A");
		return -1;
	}
	function $f143(){
		this.xget("N");
		return -1;
	}
	function $f144(){
		this.xget("numB");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f141;
		var t195=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t195.call(this)==-1) return -1;
		}
		this.xget("numA");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f142;
		var t196=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t196.call(this)==-1) return -1;
		}
		this.xget("numN");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f143;
		var t197=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t197.call(this)==-1) return -1;
		}
		this.xget("K");
		return -1;
	}
	function $f145(){
		this.xget("mode");
		this.stk[this.ptr++]=-1;
		this.eq();
		this.stk[this.ptr++]=$f117;
		var t171=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t171.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.xget("B");
		this.eq();
		this.stk[this.ptr++]=$f130;
		var t184=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t184.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.xget("A");
		this.eq();
		this.stk[this.ptr++]=$f136;
		var t190=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t190.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.xget("N");
		this.eq();
		this.stk[this.ptr++]=$f140;
		var t194=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t194.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.xget("K");
		this.eq();
		this.stk[this.ptr++]=$f144;
		var t198=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t198.call(this)==-1) return -1;
		}
	}
	function $f146(){
		this.ptr--;
		this.xget("B");
	}
	function $f147(){
		this.stk[this.ptr++]=2;
	}
	function $f148(){
		this.stk[this.ptr++]=1;
	}
	function $f149(){
		this.ptr--;
		this.stk[this.ptr++]="dat";
		this.xget("msg");
		this.xget("i");
		this.xget("mode");
		this.xget("K");
		this.eq();
		this.stk[this.ptr++]=$f147;
		this.stk[this.ptr++]=$f148;
		var t201=this.stk[--this.ptr];
		var t202=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t202.call(this)==-1) return -1;
		} else {
			if (t201.call(this)==-1) return -1;
		}
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=Infinity;
		this.xget("seq");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=Infinity;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("dat");
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
	}
	function $f150(){
		this.xget("K");
		this.xget("msg");
		this.xget("i");
		this.xget("numK");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f151(){
		this.xget("B");
		this.xget("msg");
		this.xget("i");
		this.xget("numB");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f152(){
		this.xget("A");
		this.xget("msg");
		this.xget("i");
		this.xget("numA");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f153(){
		this.xget("N");
		this.xget("msg");
		this.xget("i");
		this.xget("numN");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f154(){
		this.stk[this.ptr++]="mode";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("mode");
		this.xget("K");
		this.eq();
		this.stk[this.ptr++]=$f150;
		var t203=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t203.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.xget("B");
		this.eq();
		this.stk[this.ptr++]=$f151;
		var t204=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t204.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.xget("A");
		this.eq();
		this.stk[this.ptr++]=$f152;
		var t205=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t205.call(this)==-1) return -1;
		}
		this.xget("mode");
		this.xget("N");
		this.eq();
		this.stk[this.ptr++]=$f153;
		var t206=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t206.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="dat";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sw";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=Infinity;
		this.xget("seq");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("sw");
		this.xget("dat");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f155(){
		this.xget("i");
		this.xget("msglen");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f96;
		var t150=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t150.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="numK";
		this.xget("numKs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numB";
		this.xget("numBs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numA";
		this.xget("numAs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="numN";
		this.xget("numNs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("ver");
		this.xget("vM1");
		this.eq();
		this.xget("numA");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f97;
		var t151=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t151.call(this)==-1) return -1;
		}
		this.xget("ver");
		this.xget("vM1");
		this.eq();
		this.xget("numB");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f98;
		var t152=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t152.call(this)==-1) return -1;
		}
		this.xget("ver");
		this.xget("vM1");
		this.eq();
		this.xget("numK");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f99;
		var t153=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t153.call(this)==-1) return -1;
		}
		this.xget("ver");
		this.xget("vM2");
		this.eq();
		this.xget("numB");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f100;
		var t154=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t154.call(this)==-1) return -1;
		}
		this.xget("ver");
		this.xget("vM2");
		this.eq();
		this.xget("numK");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.and();
		this.stk[this.ptr++]=$f101;
		var t155=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t155.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=$f145;
		var t199=this.stk[--this.ptr];
		while (t199.call(this)!=-1);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("K");
		this.eq();
		this.xget("fnc1first");
		this.and();
		this.stk[this.ptr++]=$f146;
		var t200=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t200.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("mode");
		this.eq();
		this.stk[this.ptr++]=$f149;
		this.stk[this.ptr++]=$f154;
		var t207=this.stk[--this.ptr];
		var t208=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t208.call(this)==-1) return -1;
		} else {
			if (t207.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.xget("dat");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f156(){
		return -1;
	}
	function $f157(){
		this.stk[this.ptr++]=BWIPJS.psstring("0101");
		this.xget("addtobits");
	}
	function $f158(){
		this.stk[this.ptr++]="abort";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f159(){
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	}
	function $f160(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		this.xget("seq");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("mids");
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("mode");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("addtobits");
		this.stk[this.ptr++]="cclen";
		this.xget("cclens");
		this.xget("ver");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("mode");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="chars";
		this.xget("seq");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("chars");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.xget("cclen");
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f158;
		var t212=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t212.call(this)==-1) return -1;
		}
		this.xget("chars");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("mode");
		this.xget("K");
		this.eq();
		this.stk[this.ptr++]=$f159;
		var t213=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t213.call(this)==-1) return -1;
		}
		this.xget("cclen");
		this.xget("tobin");
		this.xget("addtobits");
		this.xget("chars");
		this.xget("encfuncs");
		this.xget("mode");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.get(this.stk[this.ptr-1]);
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.xget("addtobits");
	}
	function $f161(){
		return -1;
	}
	function $f162(){
		this.xget("seq");
		this.stk[this.ptr++]=-1;
		this.eq();
		this.stk[this.ptr++]=$f156;
		var t210=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t210.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="bits";
		this.stk[this.ptr++]=23648;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("fnc1first");
		this.stk[this.ptr++]=$f157;
		var t211=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t211.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="abort";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.xget("seq");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f160;
		var t218=this.stk[--this.ptr];
		var t216=this.stk[--this.ptr];
		var t215=this.stk[--this.ptr];
		var t214=this.stk[--this.ptr];
		for (var t217=t214; t215<0 ? t217>=t216 : t217<=t216; t217+=t215) {
			this.stk[this.ptr++]=t217;
			if (t218.call(this)==-1) break;
		}
		this.xget("abort");
		this.stk[this.ptr++]=$f161;
		var t219=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t219.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="bits";
		this.xget("bits");
		this.stk[this.ptr++]=0;
		this.xget("j");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msgbits");
		this.xget("ver");
		this.xget("bits");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		return -1;
	}
	function $f163(){
		this.stk[this.ptr++]="ver";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mode";
		this.stk[this.ptr++]=-1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="seq";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f155;
		var t209=this.stk[--this.ptr];
		while (t209.call(this)!=-1);
		this.stk[this.ptr++]=$f162;
		var t220=this.stk[--this.ptr];
		while (t220.call(this)!=-1);
	}
	function $f164(){
		this.stk[this.ptr++]="ncws";
		this.xget("ncws");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rbit";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lc4b";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f165(){
		this.stk[this.ptr++]=4;
	}
	function $f166(){
		this.stk[this.ptr++]=0;
	}
	function $f167(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f168(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f169(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f170(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f171(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f172(){
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f173(){
		this.xget("verbits");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.xget("dmod");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f172;
		var t229=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t229.call(this)==-1) return -1;
		}
	}
	function $f174(){
		return -1;
	}
	function $f175(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="m";
		this.xget("metrics");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="frmt";
		this.xget("m");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="vers";
		this.xget("m");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="vergrp";
		this.xget("m");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="size";
		this.xget("m");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="asp2";
		this.xget("m");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="asp3";
		this.xget("m");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nmod";
		this.xget("m");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ncws";
		this.xget("nmod");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rbit";
		this.xget("nmod");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lc4b";
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.eq();
		this.xget("size");
		this.stk[this.ptr++]=15;
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f164;
		var t222=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t222.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="ecws";
		this.xget("m");
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("eclval");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dcws";
		this.xget("ncws");
		this.xget("ecws");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dmod";
		this.xget("dcws");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("lc4b");
		this.stk[this.ptr++]=$f165;
		this.stk[this.ptr++]=$f166;
		var t223=this.stk[--this.ptr];
		var t224=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t224.call(this)==-1) return -1;
		} else {
			if (t223.call(this)==-1) return -1;
		}
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ecb1";
		this.xget("m");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("eclval");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ecb2";
		this.xget("m");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("eclval");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="okay";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("format");
		this.stk[this.ptr++]=BWIPJS.psstring("any");
		this.ne();
		this.xget("format");
		this.xget("frmt");
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f167;
		var t225=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t225.call(this)==-1) return -1;
		}
		this.xget("frmt");
		this.stk[this.ptr++]=BWIPJS.psstring("micro");
		this.eq();
		this.xget("fnc1first");
		this.and();
		this.stk[this.ptr++]=$f168;
		var t226=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t226.call(this)==-1) return -1;
		}
		this.xget("version");
		this.stk[this.ptr++]=BWIPJS.psstring("unset");
		this.ne();
		this.xget("version");
		this.xget("vers");
		this.ne();
		this.and();
		this.stk[this.ptr++]=$f169;
		var t227=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t227.call(this)==-1) return -1;
		}
		this.xget("ecb1");
		this.stk[this.ptr++]=-1;
		this.eq();
		this.xget("ecb2");
		this.stk[this.ptr++]=-1;
		this.eq();
		this.or();
		this.stk[this.ptr++]=$f170;
		var t228=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t228.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="verbits";
		this.xget("msgbits");
		this.xget("vergrp");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("verbits");
		this.stk[this.ptr++]=-1;
		this.eq();
		this.stk[this.ptr++]=$f171;
		this.stk[this.ptr++]=$f173;
		var t230=this.stk[--this.ptr];
		var t231=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t231.call(this)==-1) return -1;
		} else {
			if (t230.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="term";
		this.stk[this.ptr++]=BWIPJS.psstring("000000000");
		this.stk[this.ptr++]=0;
		this.xget("termlens");
		this.xget("vergrp");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("okay");
		this.stk[this.ptr++]=$f174;
		var t232=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t232.call(this)==-1) return -1;
		}
	}
	function $f176(){
		this.stk[this.ptr++]="bwipp.qrcodeNoValidSymbol";
		this.stk[this.ptr++]=BWIPJS.psstring("No valid symbol available");
		this.stk[this.ptr++]=this.get("raiseerror");
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f177(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f178(){
		this.xget("pad");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f179(){
		this.stk[this.ptr++]=5;
	}
	function $f180(){
		this.stk[this.ptr++]=1;
	}
	function $f181(){
		this.xget("pad");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("padstrs");
		this.xget("padnum");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.stk[this.ptr++]="padnum";
		this.xget("padnum");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f182(){
		this.stk[this.ptr++]="bpcw";
		this.stk[this.ptr++]=4;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f183(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cw";
		this.xget("cw");
		this.stk[this.ptr++]=2;
		this.xget("bpcw");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=Math.pow(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.xget("cwb");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f184(){
		this.stk[this.ptr++]="c";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bpcw";
		this.stk[this.ptr++]=8;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("lc4b");
		this.xget("c");
		this.xget("cws");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f182;
		var t252=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t252.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cwb";
		this.xget("pad");
		this.xget("c");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("bpcw");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cw";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("bpcw");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f183;
		var t257=this.stk[--this.ptr];
		var t255=this.stk[--this.ptr];
		var t254=this.stk[--this.ptr];
		var t253=this.stk[--this.ptr];
		for (var t256=t253; t254<0 ? t256>=t255 : t256<=t255; t256+=t254) {
			this.stk[this.ptr++]=t256;
			if (t257.call(this)==-1) break;
		}
		this.xget("cws");
		this.xget("c");
		this.xget("cw");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f185(){
		this.xget("cws");
		this.xget("cws");
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
		this.stk[this.ptr++]=4;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f186(){
		this.stk[this.ptr++]=285;
		this.xor();
	}
	function $f187(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=256;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f186;
		var t264=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t264.call(this)==-1) return -1;
		}
	}
	function $f188(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.xget("rsalog");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("rslog");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t269=this.stk[--this.ptr];
		var t268=this.stk[--this.ptr];
		if (t269 < 0) t=this.stk.splice(this.ptr-t268, -t269);
		else t=this.stk.splice(this.ptr-t268, t268-t269);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f189(){
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
		this.stk[this.ptr++]=255;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.xget("rsalog");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
	}
	function $f190(){
		this.ptr--;
		this.ptr--;
		this.stk[this.ptr++]=0;
	}
	function $f191(){
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
		this.stk[this.ptr++]=$f189;
		this.stk[this.ptr++]=$f190;
		var t275=this.stk[--this.ptr];
		var t276=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t276.call(this)==-1) return -1;
		} else {
			if (t275.call(this)==-1) return -1;
		}
	}
	function $f192(){
		this.stk[this.ptr++]=0;
	}
	function $f193(){
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
		this.xor();
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f194(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("coeffs");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("coeffs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("i");
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=$f193;
		var t284=this.stk[--this.ptr];
		var t282=this.stk[--this.ptr];
		var t281=this.stk[--this.ptr];
		var t280=this.stk[--this.ptr];
		for (var t283=t280; t281<0 ? t283>=t282 : t283<=t282; t283+=t281) {
			this.stk[this.ptr++]=t283;
			if (t284.call(this)==-1) break;
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
	function $f195(){
	}
	function $f196(){
		this.stk[this.ptr++]=0;
	}
	function $f197(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("rscws");
		this.xget("m");
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("coeffs");
		this.xget("ecpb");
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("k");
		this.xget("rsprod");
		this.xget("rscws");
		this.xget("m");
		this.xget("j");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xor();
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f198(){
		this.stk[this.ptr++]="m";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k";
		this.xget("rscws");
		this.xget("m");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("ecpb");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f197;
		var t298=this.stk[--this.ptr];
		var t296=this.stk[--this.ptr];
		var t295=this.stk[--this.ptr];
		var t294=this.stk[--this.ptr];
		for (var t297=t294; t295<0 ? t297>=t296 : t297<=t296; t297+=t295) {
			this.stk[this.ptr++]=t297;
			if (t298.call(this)==-1) break;
		}
	}
	function $f199(){
		this.stk[this.ptr++]="rscws";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rsnd";
		this.xget("rscws");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rscws";
		this.stk[this.ptr++]=Infinity;
		this.xget("rscws");
		this.stk[this.ptr++]=$f195;
		var t290=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t290);
		this.xget("ecpb");
		this.stk[this.ptr++]=$f196;
		var t293=this.stk[--this.ptr];
		var t291=this.stk[--this.ptr];
		for (var t292=0; t292<t291; t292++) {
			if (t293.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("rsnd");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f198;
		var t303=this.stk[--this.ptr];
		var t301=this.stk[--this.ptr];
		var t300=this.stk[--this.ptr];
		var t299=this.stk[--this.ptr];
		for (var t302=t299; t300<0 ? t302>=t301 : t302<=t301; t302+=t300) {
			this.stk[this.ptr++]=t302;
			if (t303.call(this)==-1) break;
		}
		this.xget("rscws");
		this.xget("rsnd");
		this.xget("ecpb");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f200(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("dcwsb");
		this.xget("i");
		this.xget("cws");
		this.xget("i");
		this.xget("dcpb");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("dcpb");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("ecwsb");
		this.xget("i");
		this.xget("dcwsb");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("rscodes");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f201(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("dcwsb");
		this.xget("ecb1");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("cws");
		this.xget("ecb1");
		this.xget("dcpb");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("i");
		this.xget("dcpb");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("dcpb");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("ecwsb");
		this.xget("ecb1");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("dcwsb");
		this.xget("ecb1");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("rscodes");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f202(){
		this.xget("cws");
		this.xget("cw");
		this.xget("dcwsb");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="cw";
		this.xget("cw");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f203(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("i");
		this.xget("dcwsb");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f202;
		var t314=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t314.call(this)==-1) return -1;
		}
	}
	function $f204(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("ecb1");
		this.xget("ecb2");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f203;
		var t319=this.stk[--this.ptr];
		var t317=this.stk[--this.ptr];
		var t316=this.stk[--this.ptr];
		var t315=this.stk[--this.ptr];
		for (var t318=t315; t316<0 ? t318>=t317 : t318<=t317; t318+=t316) {
			this.stk[this.ptr++]=t318;
			if (t319.call(this)==-1) break;
		}
	}
	function $f205(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cws");
		this.xget("cw");
		this.xget("ecwsb");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="cw";
		this.xget("cw");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f206(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("ecb1");
		this.xget("ecb2");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f205;
		var t329=this.stk[--this.ptr];
		var t327=this.stk[--this.ptr];
		var t326=this.stk[--this.ptr];
		var t325=this.stk[--this.ptr];
		for (var t328=t325; t326<0 ? t328>=t327 : t328<=t327; t328+=t326) {
			this.stk[this.ptr++]=t328;
			if (t329.call(this)==-1) break;
		}
	}
	function $f207(){
		this.stk[this.ptr++]="pad";
		this.xget("cws");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pad");
		this.stk[this.ptr++]=0;
		this.xget("cws");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("pad");
		this.xget("pad");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="cws";
		this.xget("pad");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f208(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("cws");
		this.xget("i");
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=15;
		this.and();
		this.stk[this.ptr++]=4;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("cws");
		this.xget("i");
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=-4;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=15;
		this.and();
		this.xget("cws");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.or();
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f209(){
		this.xget("cws");
		this.xget("dcws");
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
		this.stk[this.ptr++]=-4;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("dcws");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.xget("ncws");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f208;
		var t340=this.stk[--this.ptr];
		var t338=this.stk[--this.ptr];
		var t337=this.stk[--this.ptr];
		var t336=this.stk[--this.ptr];
		for (var t339=t336; t337<0 ? t339>=t338 : t339<=t338; t339+=t337) {
			this.stk[this.ptr++]=t339;
			if (t340.call(this)==-1) break;
		}
		this.xget("cws");
		this.xget("ncws");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("cws");
		this.xget("ncws");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=15;
		this.and();
		this.stk[this.ptr++]=4;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f210(){
		this.stk[this.ptr++]=-1;
	}
	function $f211(){
		this.xget("size");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f212(){
		this.xget("pixs");
		this.xget("size");
		this.xget("x");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("y");
		this.xget("qmv");
		this.xget("fpb");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("pixs");
		this.xget("x");
		this.xget("size");
		this.xget("y");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("qmv");
		this.xget("fpb");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f213(){
		this.stk[this.ptr++]="x";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="fpb";
		this.xget("fpat");
		this.xget("y");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("x");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pixs");
		this.xget("x");
		this.xget("y");
		this.xget("qmv");
		this.xget("fpb");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("format");
		this.stk[this.ptr++]=BWIPJS.psstring("full");
		this.eq();
		this.stk[this.ptr++]=$f212;
		var t345=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t345.call(this)==-1) return -1;
		}
	}
	function $f214(){
		this.stk[this.ptr++]="y";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("fpat");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f213;
		var t350=this.stk[--this.ptr];
		var t348=this.stk[--this.ptr];
		var t347=this.stk[--this.ptr];
		var t346=this.stk[--this.ptr];
		for (var t349=t346; t347<0 ? t349>=t348 : t349<=t348; t349+=t347) {
			this.stk[this.ptr++]=t349;
			if (t350.call(this)==-1) break;
		}
	}
	function $f215(){
		this.stk[this.ptr++]="pa";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pixs");
		this.xget("px");
		this.xget("pa");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("py");
		this.xget("pb");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("qmv");
		this.xget("algnpat");
		this.xget("pb");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("pa");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f216(){
		this.stk[this.ptr++]="pb";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=$f215;
		var t360=this.stk[--this.ptr];
		var t358=this.stk[--this.ptr];
		var t357=this.stk[--this.ptr];
		var t356=this.stk[--this.ptr];
		for (var t359=t356; t357<0 ? t359>=t358 : t359<=t358; t359+=t357) {
			this.stk[this.ptr++]=t359;
			if (t360.call(this)==-1) break;
		}
	}
	function $f217(){
		this.stk[this.ptr++]="py";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="px";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=$f216;
		var t365=this.stk[--this.ptr];
		var t363=this.stk[--this.ptr];
		var t362=this.stk[--this.ptr];
		var t361=this.stk[--this.ptr];
		for (var t364=t361; t362<0 ? t364>=t363 : t364<=t363; t364+=t362) {
			this.stk[this.ptr++]=t364;
			if (t365.call(this)==-1) break;
		}
	}
	function $f218(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("i");
		this.stk[this.ptr++]=4;
		this.xget("putalgnpat");
		this.stk[this.ptr++]=4;
		this.xget("i");
		this.xget("putalgnpat");
	}
	function $f219(){
		this.stk[this.ptr++]="y";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("x");
		this.xget("y");
		this.xget("putalgnpat");
	}
	function $f220(){
		this.stk[this.ptr++]="x";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("asp2");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("asp3");
		this.xget("asp2");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f219;
		var t375=this.stk[--this.ptr];
		var t373=this.stk[--this.ptr];
		var t372=this.stk[--this.ptr];
		var t371=this.stk[--this.ptr];
		for (var t374=t371; t372<0 ? t374>=t373 : t374<=t373; t374+=t372) {
			this.stk[this.ptr++]=t374;
			if (t375.call(this)==-1) break;
		}
	}
	function $f221(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pixs");
		this.xget("i");
		this.stk[this.ptr++]=6;
		this.xget("qmv");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("pixs");
		this.stk[this.ptr++]=6;
		this.xget("i");
		this.xget("qmv");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f222(){
		this.stk[this.ptr++]=8;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f221;
		var t385=this.stk[--this.ptr];
		var t383=this.stk[--this.ptr];
		var t382=this.stk[--this.ptr];
		var t381=this.stk[--this.ptr];
		for (var t384=t381; t382<0 ? t384>=t383 : t384<=t383; t384+=t382) {
			this.stk[this.ptr++]=t384;
			if (t385.call(this)==-1) break;
		}
	}
	function $f223(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("pixs");
		this.xget("i");
		this.stk[this.ptr++]=0;
		this.xget("qmv");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.xget("pixs");
		this.stk[this.ptr++]=0;
		this.xget("i");
		this.xget("qmv");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f224(){
		this.stk[this.ptr++]=8;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f223;
		var t390=this.stk[--this.ptr];
		var t388=this.stk[--this.ptr];
		var t387=this.stk[--this.ptr];
		var t386=this.stk[--this.ptr];
		for (var t389=t386; t387<0 ? t389>=t388 : t389<=t388; t389+=t387) {
			this.stk[this.ptr++]=t389;
			if (t390.call(this)==-1) break;
		}
	}
	function $f225(){
		this.stk[this.ptr++]="formatmap";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([0,8]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=8;
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([1,8]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=8;
		this.xget("size");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([2,8]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=8;
		this.xget("size");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([3,8]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=8;
		this.xget("size");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([4,8]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=8;
		this.xget("size");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([5,8]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=8;
		this.xget("size");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([7,8]);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=8;
		this.xget("size");
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,8]);
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,7]);
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,5]);
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,4]);
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,3]);
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,2]);
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,1]);
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,0]);
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f226(){
		this.stk[this.ptr++]="formatmap";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([1,8]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([2,8]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([3,8]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([4,8]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([5,8]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([6,8]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([7,8]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,8]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,7]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,6]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,5]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,4]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,3]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,2]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([8,1]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f227(){
	}
	function $f228(){
		this.stk[this.ptr++]=$f227;
		var t395=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t395);
		this.xget("qmv");
		this.xget("pixs");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f229(){
		this.stk[this.ptr++]=$f228;
		var t396=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t396);
	}
	function $f230(){
		this.stk[this.ptr++]="versionmap";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=Infinity;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=5;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=5;
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=5;
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=4;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=4;
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=4;
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=3;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=3;
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=3;
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=2;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=2;
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=2;
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.xget("size");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.xget("size");
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
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
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f231(){
		this.stk[this.ptr++]="versionmap";
		this.stk[this.ptr++]=BWIPJS.psarray([]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f232(){
	}
	function $f233(){
		this.stk[this.ptr++]=$f232;
		var t400=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t400);
		this.xget("qmv");
		this.xget("pixs");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=0;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f234(){
		this.stk[this.ptr++]=$f233;
		var t401=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t401);
	}
	function $f235(){
		this.xget("pixs");
		this.stk[this.ptr++]=8;
		this.xget("size");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("qmv");
		this.stk[this.ptr++]=1;
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f236(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f237(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f238(){
		this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f239(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f240(){
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f241(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f242(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f243(){
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
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t405=this.stk[--this.ptr];
		var t404=this.stk[--this.ptr];
		if (t405 < 0) t=this.stk.splice(this.ptr-t404, -t405);
		else t=this.stk.splice(this.ptr-t404, t404-t405);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f244(){
		this.stk[this.ptr++]="maskfuncs";
		this.stk[this.ptr++]=BWIPJS.psarray([$f236,$f237,$f238,$f239,$f240,$f241,$f242,$f243]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f245(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f246(){
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f247(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f248(){
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
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var t407=this.stk[--this.ptr];
		var t406=this.stk[--this.ptr];
		if (t407 < 0) t=this.stk.splice(this.ptr-t406, -t407);
		else t=this.stk.splice(this.ptr-t406, t406-t407);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	}
	function $f249(){
		this.stk[this.ptr++]="maskfuncs";
		this.stk[this.ptr++]=BWIPJS.psarray([$f245,$f246,$f247,$f248]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f250(){
		this.stk[this.ptr++]="maskfuncs";
		this.stk[this.ptr++]=Infinity;
		this.xget("maskfuncs");
		this.xget("mask");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bestmaskval";
		this.xget("mask");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f251(){
		this.stk[this.ptr++]=1;
	}
	function $f252(){
		this.stk[this.ptr++]=0;
	}
	function $f253(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("i");
		this.xget("j");
		this.xget("maskfuncs");
		this.xget("m");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
		this.stk[this.ptr++]=0;
		this.eq();
		this.xget("pixs");
		this.xget("i");
		this.xget("j");
		this.xget("qmv");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=-1;
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f251;
		this.stk[this.ptr++]=$f252;
		var t411=this.stk[--this.ptr];
		var t412=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t412.call(this)==-1) return -1;
		} else {
			if (t411.call(this)==-1) return -1;
		}
		this.xget("mask");
		this.xget("i");
		this.xget("j");
		this.xget("qmv");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t414=this.stk[--this.ptr];
		var t413=this.stk[--this.ptr];
		if (t414 < 0) t=this.stk.splice(this.ptr-t413, -t414);
		else t=this.stk.splice(this.ptr-t413, t413-t414);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f254(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f253;
		var t419=this.stk[--this.ptr];
		var t417=this.stk[--this.ptr];
		var t416=this.stk[--this.ptr];
		var t415=this.stk[--this.ptr];
		for (var t418=t415; t416<0 ? t418>=t417 : t418<=t417; t418+=t416) {
			this.stk[this.ptr++]=t418;
			if (t419.call(this)==-1) break;
		}
	}
	function $f255(){
		this.stk[this.ptr++]="m";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="mask";
		this.xget("size");
		this.xget("size");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f254;
		var t424=this.stk[--this.ptr];
		var t422=this.stk[--this.ptr];
		var t421=this.stk[--this.ptr];
		var t420=this.stk[--this.ptr];
		for (var t423=t420; t421<0 ? t423>=t422 : t423<=t422; t423+=t421) {
			this.stk[this.ptr++]=t423;
			if (t424.call(this)==-1) break;
		}
		this.xget("masks");
		this.xget("m");
		this.xget("mask");
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f256(){
		return -1;
	}
	function $f257(){
		this.xget("cws");
		this.xget("num");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=7;
		this.xget("num");
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.and();
		this.xget("pixs");
		this.xget("posx");
		this.xget("posy");
		this.xget("qmv");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var t432=this.stk[--this.ptr];
		var t431=this.stk[--this.ptr];
		if (t432 < 0) t=this.stk.splice(this.ptr-t431, -t432);
		else t=this.stk.splice(this.ptr-t431, t431-t432);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="num";
		this.xget("num");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f258(){
		this.stk[this.ptr++]="col";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="posx";
		this.xget("posx");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f259(){
		this.stk[this.ptr++]="posx";
		this.xget("posx");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f260(){
		this.stk[this.ptr++]="dir";
		this.xget("dir");
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="posy";
		this.xget("posy");
		this.xget("dir");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="posx";
		this.xget("posx");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("format");
		this.stk[this.ptr++]=BWIPJS.psstring("full");
		this.eq();
		this.xget("posx");
		this.stk[this.ptr++]=6;
		this.eq();
		this.and();
		this.stk[this.ptr++]=$f259;
		var t434=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t434.call(this)==-1) return -1;
		}
	}
	function $f261(){
		this.stk[this.ptr++]="col";
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="posx";
		this.xget("posx");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="posy";
		this.xget("posy");
		this.xget("dir");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("posy");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.xget("posy");
		this.xget("size");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.or();
		this.stk[this.ptr++]=$f260;
		var t435=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t435.call(this)==-1) return -1;
		}
	}
	function $f262(){
		this.xget("posx");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f256;
		var t430=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t430.call(this)==-1) return -1;
		}
		this.xget("pixs");
		this.xget("posx");
		this.xget("posy");
		this.xget("qmv");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=-1;
		this.eq();
		this.stk[this.ptr++]=$f257;
		var t433=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t433.call(this)==-1) return -1;
		}
		this.xget("col");
		this.stk[this.ptr++]=1;
		this.eq();
		this.stk[this.ptr++]=$f258;
		this.stk[this.ptr++]=$f261;
		var t436=this.stk[--this.ptr];
		var t437=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t437.call(this)==-1) return -1;
		} else {
			if (t436.call(this)==-1) return -1;
		}
	}
	function $f263(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	}
	function $f264(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f263;
		var t439=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t439.call(this)==-1) return -1;
		}
		this.ptr--;
	}
	function $f265(){
		this.xget("fact");
		this.eq();
	}
	function $f266(){
		this.stk[this.ptr++]="scr3";
		this.xget("scr3");
		this.stk[this.ptr++]=40;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f267(){
		this.stk[this.ptr++]="scr3";
		this.xget("scr3");
		this.stk[this.ptr++]=40;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f268(){
		this.xget("scrle");
		this.xget("j");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.xget("scrle");
		this.xget("j");
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.or();
		this.stk[this.ptr++]=$f267;
		var t442=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t442.call(this)==-1) return -1;
		}
	}
	function $f269(){
		this.xget("j");
		this.stk[this.ptr++]=3;
		this.eq();
		this.xget("j");
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("scrle");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.or();
		this.stk[this.ptr++]=$f266;
		this.stk[this.ptr++]=$f268;
		var t443=this.stk[--this.ptr];
		var t444=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t444.call(this)==-1) return -1;
		} else {
			if (t443.call(this)==-1) return -1;
		}
	}
	function $f270(){
		this.stk[this.ptr++]="fact";
		this.xget("scrle");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("scrle");
		this.xget("j");
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f265;
		var t441=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t441);
		this.and();
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.and();
		this.and();
		this.stk[this.ptr++]=$f269;
		var t445=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t445.call(this)==-1) return -1;
		}
	}
	function $f271(){
		this.stk[this.ptr++]="j";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("scrle");
		this.xget("j");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f270;
		var t446=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t446.call(this)==-1) return -1;
		}
	}
	function $f272(){
		this.stk[this.ptr++]="scrle";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="scr1";
		this.stk[this.ptr++]=0;
		this.xget("scrle");
		this.stk[this.ptr++]=$f264;
		var t440=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t440);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="scr3";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=2;
		this.xget("scrle");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f271;
		var t451=this.stk[--this.ptr];
		var t449=this.stk[--this.ptr];
		var t448=this.stk[--this.ptr];
		var t447=this.stk[--this.ptr];
		for (var t450=t447; t448<0 ? t450>=t449 : t450<=t449; t450+=t448) {
			this.stk[this.ptr++]=t450;
			if (t451.call(this)==-1) break;
		}
		this.xget("scr1");
		this.xget("scr3");
	}
	function $f273(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f274(){
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f275(){
		this.xget("sym");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.eq();
		this.stk[this.ptr++]=$f273;
		this.stk[this.ptr++]=$f274;
		var t452=this.stk[--this.ptr];
		var t453=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t453.call(this)==-1) return -1;
		} else {
			if (t452.call(this)==-1) return -1;
		}
	}
	function $f276(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f277(){
		this.stk[this.ptr++]=1;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f278(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.eq();
		this.stk[this.ptr++]=$f276;
		this.stk[this.ptr++]=$f277;
		var t459=this.stk[--this.ptr];
		var t460=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t460.call(this)==-1) return -1;
		} else {
			if (t459.call(this)==-1) return -1;
		}
	}
	function $f279(){
		this.stk[this.ptr++]=0;
	}
	function $f280(){
		this.stk[this.ptr++]=1;
	}
	function $f281(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f282(){
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f283(){
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.xget("sizeadd1");
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		this.and();
		this.stk[this.ptr++]=0;
		this.eq();
		this.stk[this.ptr++]=$f282;
		var t465=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t465.call(this)==-1) return -1;
		}
	}
	function $f284(){
		this.stk[this.ptr++]=Infinity;
		this.xget("lastpairs");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("thispairs");
		t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=BWIPJS.get(t,i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.xget("n2");
		this.xget("size");
		this.stk[this.ptr++]=$f283;
		var t468=this.stk[--this.ptr];
		var t466=this.stk[--this.ptr];
		for (var t467=0; t467<t466; t467++) {
			if (t468.call(this)==-1) break;
		}
		this.stk[this.ptr++]="n2";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		this.ptr=i;
	}
	function $f285(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.xget("i");
		this.xget("size");
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f275;
		var t458=this.stk[--this.ptr];
		var t456=this.stk[--this.ptr];
		var t455=this.stk[--this.ptr];
		var t454=this.stk[--this.ptr];
		for (var t457=t454; t455<0 ? t457>=t456 : t457<=t456; t457+=t455) {
			this.stk[this.ptr++]=t457;
			if (t458.call(this)==-1) break;
		}
		this.ptr--;
		this.xget("rle");
		this.stk[this.ptr++]=0;
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-1];
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.xget("evalfulln1n3");
		this.xget("n3");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="n3";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("n1");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="n1";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="symrow";
		this.xget("sym");
		this.xget("i");
		this.xget("size");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("size");
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.xget("symrow");
		this.stk[this.ptr++]=$f278;
		var t461=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t461);
		this.ptr--;
		this.xget("rle");
		this.stk[this.ptr++]=0;
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		t=this.stk[this.ptr-1];
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.xget("evalfulln1n3");
		this.xget("n3");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="n3";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("n1");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="n1";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr++]="lastpairs";
		this.xget("thispairs");
		this.stk[this.ptr++]="thispairs";
		this.xget("lastpairs");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("symrow");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.eq();
		this.stk[this.ptr++]=$f279;
		this.stk[this.ptr++]=$f280;
		var t462=this.stk[--this.ptr];
		var t463=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t463.call(this)==-1) return -1;
		} else {
			if (t462.call(this)==-1) return -1;
		}
		this.xget("symrow");
		this.stk[this.ptr++]=$f281;
		var t464=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t464);
		this.ptr--;
		this.xget("thispairs");
		t=this.stk[this.ptr-1];
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		this.ptr--;
		this.xget("i");
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f284;
		var t469=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t469.call(this)==-1) return -1;
		}
	}
	function $f286(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f287(){
		this.stk[this.ptr++]="sym";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="n1";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="n2";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="n3";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="rle";
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="lastpairs";
		this.xget("size");
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="thispairs";
		this.xget("size");
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sizeadd1";
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f285;
		var t474=this.stk[--this.ptr];
		var t472=this.stk[--this.ptr];
		var t471=this.stk[--this.ptr];
		var t470=this.stk[--this.ptr];
		for (var t473=t470; t471<0 ? t473>=t472 : t473<=t472; t473+=t471) {
			this.stk[this.ptr++]=t473;
			if (t474.call(this)==-1) break;
		}
		this.stk[this.ptr++]="dark";
		this.stk[this.ptr++]=0;
		this.xget("sym");
		this.stk[this.ptr++]=$f286;
		var t475=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t475);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="n4";
		this.xget("dark");
		this.stk[this.ptr++]=100;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("size");
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=50;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=Math.abs(this.stk[this.ptr-1]);
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("n1");
		this.xget("n2");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("n3");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("n4");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f288(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dkrhs";
		this.xget("dkrhs");
		this.xget("sym");
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("i");
		this.xget("qmv");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dkbot";
		this.xget("dkbot");
		this.xget("sym");
		this.xget("i");
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.xget("qmv");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f289(){
		this.xget("dkrhs");
		this.stk[this.ptr++]=16;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("dkbot");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	}
	function $f290(){
		this.xget("dkbot");
		this.stk[this.ptr++]=16;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.xget("dkrhs");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
	}
	function $f291(){
		this.stk[this.ptr++]="sym";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dkrhs";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dkbot";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f288;
		var t480=this.stk[--this.ptr];
		var t478=this.stk[--this.ptr];
		var t477=this.stk[--this.ptr];
		var t476=this.stk[--this.ptr];
		for (var t479=t476; t477<0 ? t479>=t478 : t479<=t478; t479+=t477) {
			this.stk[this.ptr++]=t479;
			if (t480.call(this)==-1) break;
		}
		this.xget("dkrhs");
		this.xget("dkbot");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f289;
		this.stk[this.ptr++]=$f290;
		var t481=this.stk[--this.ptr];
		var t482=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t482.call(this)==-1) return -1;
		} else {
			if (t481.call(this)==-1) return -1;
		}
	}
	function $f292(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("masksym");
		this.xget("i");
		this.xget("pixs");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("masks");
		this.xget("m");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xor();
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f293(){
		this.xget("masksym");
		this.xget("evalfull");
		this.stk[this.ptr++]="score";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f294(){
		this.xget("masksym");
		this.xget("evalmicro");
		this.stk[this.ptr++]="score";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f295(){
		this.stk[this.ptr++]="bestsym";
		this.xget("masksym");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bestmaskval";
		this.xget("m");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="bestscore";
		this.xget("score");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f296(){
		this.xget("format");
		this.stk[this.ptr++]=BWIPJS.psstring("full");
		this.eq();
		this.stk[this.ptr++]=$f293;
		this.stk[this.ptr++]=$f294;
		var t488=this.stk[--this.ptr];
		var t489=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t489.call(this)==-1) return -1;
		} else {
			if (t488.call(this)==-1) return -1;
		}
		this.xget("score");
		this.xget("bestscore");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f295;
		var t490=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t490.call(this)==-1) return -1;
		}
	}
	function $f297(){
		this.stk[this.ptr++]="bestsym";
		this.xget("masksym");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f298(){
		this.stk[this.ptr++]="m";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="masksym";
		this.xget("size");
		this.xget("size");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("size");
		this.xget("size");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f292;
		var t487=this.stk[--this.ptr];
		var t485=this.stk[--this.ptr];
		var t484=this.stk[--this.ptr];
		var t483=this.stk[--this.ptr];
		for (var t486=t483; t484<0 ? t486>=t485 : t486<=t485; t486+=t484) {
			this.stk[this.ptr++]=t486;
			if (t487.call(this)==-1) break;
		}
		this.xget("masks");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.ne();
		this.stk[this.ptr++]=$f296;
		this.stk[this.ptr++]=$f297;
		var t491=this.stk[--this.ptr];
		var t492=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t492.call(this)==-1) return -1;
		} else {
			if (t491.call(this)==-1) return -1;
		}
	}
	function $f299(){
		this.stk[this.ptr++]="fmtvals";
		this.stk[this.ptr++]=BWIPJS.psarray([21522,20773,24188,23371,17913,16590,20375,19104,30660,29427,32170,30877,26159,25368,27713,26998,5769,5054,7399,6608,1890,597,3340,2107,13663,12392,16177,14854,9396,8579,11994,11245]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ecid";
		this.stk[this.ptr++]=BWIPJS.psstring("MLHQ");
		this.xget("eclevel");
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
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="fmtval";
		this.xget("fmtvals");
		this.xget("ecid");
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.xget("bestmaskval");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f300(){
		this.stk[this.ptr++]="fmtvals";
		this.stk[this.ptr++]=BWIPJS.psarray([17477,16754,20011,19228,21934,20633,24512,23287,26515,25252,28157,26826,30328,29519,31766,31009,1758,1001,3248,2439,5941,4610,7515,6252,9480,8255,12134,10833,13539,12756,16013,15290]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="symid";
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psarray([0]);
		this.stk[this.ptr++]=BWIPJS.psarray([1,2]);
		this.stk[this.ptr++]=BWIPJS.psarray([3,4]);
		this.stk[this.ptr++]=BWIPJS.psarray([5,6,7]);
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.xget("size");
		this.stk[this.ptr++]=11;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.xget("eclval");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="fmtval";
		this.xget("fmtvals");
		this.xget("symid");
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.xget("bestmaskval");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f301(){
	}
	function $f302(){
		this.xget("pixs");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f301;
		var t500=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t500);
		this.xget("qmv");
		this.xget("fmtval");
		this.stk[this.ptr++]=14;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.and();
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f303(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("formatmap");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f302;
		var t501=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t501);
	}
	function $f304(){
	}
	function $f305(){
		this.xget("pixs");
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f304;
		var t507=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t507);
		this.xget("qmv");
		this.xget("verval");
		this.stk[this.ptr++]=17;
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=-this.stk[this.ptr-1];
		if (this.stk[this.ptr-1]<0) this.stk[this.ptr-2]>>>=-this.stk[this.ptr-1];
		else this.stk[this.ptr-2]<<=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.and();
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
	}
	function $f306(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("versionmap");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=$f305;
		var t508=this.stk[--this.ptr];
		this.forall(this.stk[--this.ptr],t508);
	}
	function $f307(){
		this.stk[this.ptr++]="vervals";
		this.stk[this.ptr++]=BWIPJS.psarray([31892,34236,39577,42195,48118,51042,55367,58893,63784,68472,70749,76311,79154,84390,87683,92361,96236,102084,102881,110507,110734,117786,119615,126325,127568,133589,136957,141498,145311,150283,152622,158308,161089,167017]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="verval";
		this.xget("vervals");
		this.xget("size");
		this.stk[this.ptr++]=17;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.xget("versionmap");
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f306;
		var t513=this.stk[--this.ptr];
		var t511=this.stk[--this.ptr];
		var t510=this.stk[--this.ptr];
		var t509=this.stk[--this.ptr];
		for (var t512=t509; t510<0 ? t512>=t511 : t512<=t511; t512+=t510) {
			this.stk[this.ptr++]=t512;
			if (t513.call(this)==-1) break;
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
	this.stk[this.ptr++]="format";
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="version";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="eclevel";
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parse";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parsefnc";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="mask";
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
	this.stk[this.ptr++]="mask";
	this.xget("mask");
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
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
	this.stk[this.ptr++]="fn1";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fncvals";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC1");
	this.xget("fn1");
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
	this.stk[this.ptr++]=$f14;
	var t14=this.stk[--this.ptr];
	while (t14.call(this)!=-1);
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
	this.stk[this.ptr++]="fnc1first";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("msglen");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f18;
	var t18=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t18.call(this)==-1) return -1;
	}
	this.xget("eclevel");
	this.stk[this.ptr++]=BWIPJS.psstring("unset");
	this.eq();
	this.stk[this.ptr++]=$f21;
	var t21=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t21.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="N";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="A";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="B";
	this.stk[this.ptr++]=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="K";
	this.stk[this.ptr++]=3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="Nexcl";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=57;
	this.stk[this.ptr++]=$f22;
	var t26=this.stk[--this.ptr];
	var t24=this.stk[--this.ptr];
	var t23=this.stk[--this.ptr];
	var t22=this.stk[--this.ptr];
	for (var t25=t22; t23<0 ? t25>=t24 : t25<=t24; t25+=t23) {
		this.stk[this.ptr++]=t25;
		if (t26.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f23;
	var t27=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t27);
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="Aexcl";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr++]=36;
	this.stk[this.ptr++]=37;
	this.stk[this.ptr++]=42;
	this.stk[this.ptr++]=43;
	this.stk[this.ptr++]=45;
	this.stk[this.ptr++]=46;
	this.stk[this.ptr++]=47;
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=65;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=90;
	this.stk[this.ptr++]=$f24;
	var t32=this.stk[--this.ptr];
	var t30=this.stk[--this.ptr];
	var t29=this.stk[--this.ptr];
	var t28=this.stk[--this.ptr];
	for (var t31=t28; t29<0 ? t31>=t30 : t31<=t30; t31+=t29) {
		this.stk[this.ptr++]=t31;
		if (t32.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f25;
	var t33=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t33);
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="Bexcl";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=31;
	this.stk[this.ptr++]=$f26;
	var t38=this.stk[--this.ptr];
	var t36=this.stk[--this.ptr];
	var t35=this.stk[--this.ptr];
	var t34=this.stk[--this.ptr];
	for (var t37=t34; t35<0 ? t37>=t36 : t37<=t36; t37+=t35) {
		this.stk[this.ptr++]=t37;
		if (t38.call(this)==-1) break;
	}
	this.stk[this.ptr++]=33;
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=35;
	this.stk[this.ptr++]=38;
	this.stk[this.ptr++]=39;
	this.stk[this.ptr++]=40;
	this.stk[this.ptr++]=41;
	this.stk[this.ptr++]=44;
	this.stk[this.ptr++]=59;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=64;
	this.stk[this.ptr++]=$f27;
	var t43=this.stk[--this.ptr];
	var t41=this.stk[--this.ptr];
	var t40=this.stk[--this.ptr];
	var t39=this.stk[--this.ptr];
	for (var t42=t39; t40<0 ? t42>=t41 : t42<=t41; t42+=t40) {
		this.stk[this.ptr++]=t42;
		if (t43.call(this)==-1) break;
	}
	this.stk[this.ptr++]=91;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=127;
	this.stk[this.ptr++]=$f28;
	var t48=this.stk[--this.ptr];
	var t46=this.stk[--this.ptr];
	var t45=this.stk[--this.ptr];
	var t44=this.stk[--this.ptr];
	for (var t47=t44; t45<0 ? t47>=t46 : t47<=t46; t47+=t45) {
		this.stk[this.ptr++]=t47;
		if (t48.call(this)==-1) break;
	}
	this.stk[this.ptr++]=160;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=223;
	this.stk[this.ptr++]=$f29;
	var t53=this.stk[--this.ptr];
	var t51=this.stk[--this.ptr];
	var t50=this.stk[--this.ptr];
	var t49=this.stk[--this.ptr];
	for (var t52=t49; t50<0 ? t52>=t51 : t52<=t51; t52+=t50) {
		this.stk[this.ptr++]=t52;
		if (t53.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f30;
	var t54=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t54);
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="Kexcl";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=129;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=159;
	this.stk[this.ptr++]=$f31;
	var t59=this.stk[--this.ptr];
	var t57=this.stk[--this.ptr];
	var t56=this.stk[--this.ptr];
	var t55=this.stk[--this.ptr];
	for (var t58=t55; t56<0 ? t58>=t57 : t58<=t57; t58+=t56) {
		this.stk[this.ptr++]=t58;
		if (t59.call(this)==-1) break;
	}
	this.stk[this.ptr++]=224;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=235;
	this.stk[this.ptr++]=$f32;
	var t64=this.stk[--this.ptr];
	var t62=this.stk[--this.ptr];
	var t61=this.stk[--this.ptr];
	var t60=this.stk[--this.ptr];
	for (var t63=t60; t61<0 ? t63>=t62 : t63<=t62; t63+=t61) {
		this.stk[this.ptr++]=t63;
		if (t64.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f33;
	var t65=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t65);
	t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		BWIPJS.set(t,this.stk[i-1],this.stk[i]);
	}
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="mids";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0001"),BWIPJS.psstring("0010"),BWIPJS.psstring("0100"),BWIPJS.psstring("1000")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0001"),BWIPJS.psstring("0010"),BWIPJS.psstring("0100"),BWIPJS.psstring("1000")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0001"),BWIPJS.psstring("0010"),BWIPJS.psstring("0100"),BWIPJS.psstring("1000")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(""),-1,-1,-1]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0"),BWIPJS.psstring("1"),-1,-1]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("00"),BWIPJS.psstring("01"),BWIPJS.psstring("10"),BWIPJS.psstring("11")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("000"),BWIPJS.psstring("001"),BWIPJS.psstring("010"),BWIPJS.psstring("011")]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cclens";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([10,9,8,8]);
	this.stk[this.ptr++]=BWIPJS.psarray([12,11,16,10]);
	this.stk[this.ptr++]=BWIPJS.psarray([14,13,16,12]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,-1,-1,-1]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,3,-1,-1]);
	this.stk[this.ptr++]=BWIPJS.psarray([5,4,4,3]);
	this.stk[this.ptr++]=BWIPJS.psarray([6,5,5,4]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="termlens";
	this.stk[this.ptr++]=BWIPJS.psarray([4,4,4,3,5,7,9]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="tobin";
	this.stk[this.ptr++]=$f35;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charmap";
	this.stk[this.ptr++]=BWIPJS.psstring("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=44;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=44;
	this.stk[this.ptr++]=$f36;
	var t79=this.stk[--this.ptr];
	var t77=this.stk[--this.ptr];
	var t76=this.stk[--this.ptr];
	var t75=this.stk[--this.ptr];
	for (var t78=t75; t76<0 ? t78>=t77 : t78<=t77; t78+=t76) {
		this.stk[this.ptr++]=t78;
		if (t79.call(this)==-1) break;
	}
	this.stk[this.ptr++]="encA";
	this.stk[this.ptr++]=$f44;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encN";
	this.stk[this.ptr++]=$f54;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encB";
	this.stk[this.ptr++]=$f59;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encK";
	this.stk[this.ptr++]=$f64;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encfuncs";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="encN";
	this.stk[this.ptr++]="encA";
	this.stk[this.ptr++]="encB";
	this.stk[this.ptr++]="encK";
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="addtobits";
	this.stk[this.ptr++]=$f65;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numNs";
	this.stk[this.ptr++]=Infinity;
	this.xget("msglen");
	this.stk[this.ptr++]=$f66;
	var t114=this.stk[--this.ptr];
	var t112=this.stk[--this.ptr];
	for (var t113=0; t113<t112; t113++) {
		if (t114.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numAs";
	this.stk[this.ptr++]=Infinity;
	this.xget("msglen");
	this.stk[this.ptr++]=$f67;
	var t117=this.stk[--this.ptr];
	var t115=this.stk[--this.ptr];
	for (var t116=0; t116<t115; t116++) {
		if (t117.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numBs";
	this.stk[this.ptr++]=Infinity;
	this.xget("msglen");
	this.stk[this.ptr++]=$f68;
	var t120=this.stk[--this.ptr];
	var t118=this.stk[--this.ptr];
	for (var t119=0; t119<t118; t119++) {
		if (t120.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numKs";
	this.stk[this.ptr++]=Infinity;
	this.xget("msglen");
	this.stk[this.ptr++]=$f69;
	var t123=this.stk[--this.ptr];
	var t121=this.stk[--this.ptr];
	for (var t122=0; t122<t121; t122++) {
		if (t123.call(this)==-1) break;
	}
	this.stk[this.ptr++]=-1;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextNs";
	this.stk[this.ptr++]=Infinity;
	this.xget("msglen");
	this.stk[this.ptr++]=$f70;
	var t126=this.stk[--this.ptr];
	var t124=this.stk[--this.ptr];
	for (var t125=0; t125<t124; t125++) {
		if (t126.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextBs";
	this.stk[this.ptr++]=Infinity;
	this.xget("msglen");
	this.stk[this.ptr++]=$f71;
	var t129=this.stk[--this.ptr];
	var t127=this.stk[--this.ptr];
	for (var t128=0; t128<t127; t128++) {
		if (t129.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextAs";
	this.stk[this.ptr++]=Infinity;
	this.xget("msglen");
	this.stk[this.ptr++]=$f72;
	var t132=this.stk[--this.ptr];
	var t130=this.stk[--this.ptr];
	for (var t131=0; t131<t130; t131++) {
		if (t132.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextKs";
	this.stk[this.ptr++]=Infinity;
	this.xget("msglen");
	this.stk[this.ptr++]=$f73;
	var t135=this.stk[--this.ptr];
	var t133=this.stk[--this.ptr];
	for (var t134=0; t134<t133; t134++) {
		if (t135.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
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
	this.stk[this.ptr++]=$f82;
	var t148=this.stk[--this.ptr];
	var t146=this.stk[--this.ptr];
	var t145=this.stk[--this.ptr];
	var t144=this.stk[--this.ptr];
	for (var t147=t144; t145<0 ? t147>=t146 : t147<=t146; t147+=t145) {
		this.stk[this.ptr++]=t147;
		if (t148.call(this)==-1) break;
	}
	this.stk[this.ptr++]="numKs";
	this.stk[this.ptr++]=Infinity;
	this.xget("numKs");
	this.stk[this.ptr++]=$f83;
	var t149=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t149);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="KbeforeB";
	this.stk[this.ptr++]=$f84;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="KbeforeA";
	this.stk[this.ptr++]=$f85;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="KbeforeN";
	this.stk[this.ptr++]=$f86;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="KbeforeE";
	this.stk[this.ptr++]=$f87;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="AbeforeK";
	this.stk[this.ptr++]=$f88;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="AbeforeB";
	this.stk[this.ptr++]=$f89;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="AbeforeN";
	this.stk[this.ptr++]=$f90;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="AbeforeE";
	this.stk[this.ptr++]=$f91;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="NbeforeK";
	this.stk[this.ptr++]=$f92;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="NbeforeB";
	this.stk[this.ptr++]=$f93;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="NbeforeA";
	this.stk[this.ptr++]=$f94;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="NbeforeE";
	this.stk[this.ptr++]=$f95;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msgbits";
	this.stk[this.ptr++]=BWIPJS.psarray([-1,-1,-1,-1,-1,-1,-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="v1to9";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="v10to26";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="v27to40";
	this.stk[this.ptr++]=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="vM1";
	this.stk[this.ptr++]=3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="vM2";
	this.stk[this.ptr++]=4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="vM3";
	this.stk[this.ptr++]=5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="vM4";
	this.stk[this.ptr++]=6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="e";
	this.stk[this.ptr++]=10000;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.xget("v1to9");
	this.xget("v10to26");
	this.xget("v27to40");
	this.xget("vM1");
	this.xget("vM2");
	this.xget("vM3");
	this.xget("vM4");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=$f163;
	var t221=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t221);
	this.stk[this.ptr++]="metrics";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("micro");
	this.stk[this.ptr++]=BWIPJS.psstring("M1");
	this.xget("vM1");
	this.stk[this.ptr++]=11;
	this.stk[this.ptr++]=98;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=36;
	this.stk[this.ptr++]=BWIPJS.psarray([2,99,99,99]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,-1,-1,-1,-1,-1,-1]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("micro");
	this.stk[this.ptr++]=BWIPJS.psstring("M2");
	this.xget("vM2");
	this.stk[this.ptr++]=13;
	this.stk[this.ptr++]=98;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=80;
	this.stk[this.ptr++]=BWIPJS.psarray([5,6,99,99]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,0,-1,-1,-1,-1]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("micro");
	this.stk[this.ptr++]=BWIPJS.psstring("M3");
	this.xget("vM3");
	this.stk[this.ptr++]=15;
	this.stk[this.ptr++]=98;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=132;
	this.stk[this.ptr++]=BWIPJS.psarray([6,8,99,99]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,0,-1,-1,-1,-1]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("micro");
	this.stk[this.ptr++]=BWIPJS.psstring("M4");
	this.xget("vM4");
	this.stk[this.ptr++]=17;
	this.stk[this.ptr++]=98;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=192;
	this.stk[this.ptr++]=BWIPJS.psarray([8,10,14,99]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,0,1,0,-1,-1]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("1");
	this.xget("v1to9");
	this.stk[this.ptr++]=21;
	this.stk[this.ptr++]=98;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=208;
	this.stk[this.ptr++]=BWIPJS.psarray([7,10,13,17]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,0,1,0,1,0]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("2");
	this.xget("v1to9");
	this.stk[this.ptr++]=25;
	this.stk[this.ptr++]=18;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=359;
	this.stk[this.ptr++]=BWIPJS.psarray([10,16,22,28]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,0,1,0,1,0]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("3");
	this.xget("v1to9");
	this.stk[this.ptr++]=29;
	this.stk[this.ptr++]=22;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=567;
	this.stk[this.ptr++]=BWIPJS.psarray([15,26,36,44]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,0,2,0,2,0]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("4");
	this.xget("v1to9");
	this.stk[this.ptr++]=33;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=807;
	this.stk[this.ptr++]=BWIPJS.psarray([20,36,52,64]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,2,0,2,0,4,0]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("5");
	this.xget("v1to9");
	this.stk[this.ptr++]=37;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=1079;
	this.stk[this.ptr++]=BWIPJS.psarray([26,48,72,88]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,2,0,2,2,2,2]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("6");
	this.xget("v1to9");
	this.stk[this.ptr++]=41;
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=99;
	this.stk[this.ptr++]=1383;
	this.stk[this.ptr++]=BWIPJS.psarray([36,64,96,112]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,0,4,0,4,0,4,0]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("7");
	this.xget("v1to9");
	this.stk[this.ptr++]=45;
	this.stk[this.ptr++]=22;
	this.stk[this.ptr++]=38;
	this.stk[this.ptr++]=1568;
	this.stk[this.ptr++]=BWIPJS.psarray([40,72,108,130]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,0,4,0,2,4,4,1]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("8");
	this.xget("v1to9");
	this.stk[this.ptr++]=49;
	this.stk[this.ptr++]=24;
	this.stk[this.ptr++]=42;
	this.stk[this.ptr++]=1936;
	this.stk[this.ptr++]=BWIPJS.psarray([48,88,132,156]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,0,2,2,4,2,4,2]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("9");
	this.xget("v1to9");
	this.stk[this.ptr++]=53;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=46;
	this.stk[this.ptr++]=2336;
	this.stk[this.ptr++]=BWIPJS.psarray([60,110,160,192]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,0,3,2,4,4,4,4]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("10");
	this.xget("v10to26");
	this.stk[this.ptr++]=57;
	this.stk[this.ptr++]=28;
	this.stk[this.ptr++]=50;
	this.stk[this.ptr++]=2768;
	this.stk[this.ptr++]=BWIPJS.psarray([72,130,192,224]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,2,4,1,6,2,6,2]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("11");
	this.xget("v10to26");
	this.stk[this.ptr++]=61;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=54;
	this.stk[this.ptr++]=3232;
	this.stk[this.ptr++]=BWIPJS.psarray([80,150,224,264]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,0,1,4,4,4,3,8]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("12");
	this.xget("v10to26");
	this.stk[this.ptr++]=65;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=3728;
	this.stk[this.ptr++]=BWIPJS.psarray([96,176,260,308]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,2,6,2,4,6,7,4]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("13");
	this.xget("v10to26");
	this.stk[this.ptr++]=69;
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=62;
	this.stk[this.ptr++]=4256;
	this.stk[this.ptr++]=BWIPJS.psarray([104,198,288,352]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,0,8,1,8,4,12,4]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("14");
	this.xget("v10to26");
	this.stk[this.ptr++]=73;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=46;
	this.stk[this.ptr++]=4651;
	this.stk[this.ptr++]=BWIPJS.psarray([120,216,320,384]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,1,4,5,11,5,11,5]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("15");
	this.xget("v10to26");
	this.stk[this.ptr++]=77;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr++]=5243;
	this.stk[this.ptr++]=BWIPJS.psarray([132,240,360,432]);
	this.stk[this.ptr++]=BWIPJS.psarray([5,1,5,5,5,7,11,7]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("16");
	this.xget("v10to26");
	this.stk[this.ptr++]=81;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=50;
	this.stk[this.ptr++]=5867;
	this.stk[this.ptr++]=BWIPJS.psarray([144,280,408,480]);
	this.stk[this.ptr++]=BWIPJS.psarray([5,1,7,3,15,2,3,13]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("17");
	this.xget("v10to26");
	this.stk[this.ptr++]=85;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=54;
	this.stk[this.ptr++]=6523;
	this.stk[this.ptr++]=BWIPJS.psarray([168,308,448,532]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,5,10,1,1,15,2,17]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("18");
	this.xget("v10to26");
	this.stk[this.ptr++]=89;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=56;
	this.stk[this.ptr++]=7211;
	this.stk[this.ptr++]=BWIPJS.psarray([180,338,504,588]);
	this.stk[this.ptr++]=BWIPJS.psarray([5,1,9,4,17,1,2,19]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("19");
	this.xget("v10to26");
	this.stk[this.ptr++]=93;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=7931;
	this.stk[this.ptr++]=BWIPJS.psarray([196,364,546,650]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,4,3,11,17,4,9,16]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("20");
	this.xget("v10to26");
	this.stk[this.ptr++]=97;
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=62;
	this.stk[this.ptr++]=8683;
	this.stk[this.ptr++]=BWIPJS.psarray([224,416,600,700]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,5,3,13,15,5,15,10]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("21");
	this.xget("v10to26");
	this.stk[this.ptr++]=101;
	this.stk[this.ptr++]=28;
	this.stk[this.ptr++]=50;
	this.stk[this.ptr++]=9252;
	this.stk[this.ptr++]=BWIPJS.psarray([224,442,644,750]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,4,17,0,17,6,19,6]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("22");
	this.xget("v10to26");
	this.stk[this.ptr++]=105;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=50;
	this.stk[this.ptr++]=10068;
	this.stk[this.ptr++]=BWIPJS.psarray([252,476,690,816]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,7,17,0,7,16,34,0]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("23");
	this.xget("v10to26");
	this.stk[this.ptr++]=109;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=54;
	this.stk[this.ptr++]=10916;
	this.stk[this.ptr++]=BWIPJS.psarray([270,504,750,900]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,5,4,14,11,14,16,14]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("24");
	this.xget("v10to26");
	this.stk[this.ptr++]=113;
	this.stk[this.ptr++]=28;
	this.stk[this.ptr++]=54;
	this.stk[this.ptr++]=11796;
	this.stk[this.ptr++]=BWIPJS.psarray([300,560,810,960]);
	this.stk[this.ptr++]=BWIPJS.psarray([6,4,6,14,11,16,30,2]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("25");
	this.xget("v10to26");
	this.stk[this.ptr++]=117;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=12708;
	this.stk[this.ptr++]=BWIPJS.psarray([312,588,870,1050]);
	this.stk[this.ptr++]=BWIPJS.psarray([8,4,8,13,7,22,22,13]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("26");
	this.xget("v10to26");
	this.stk[this.ptr++]=121;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=13652;
	this.stk[this.ptr++]=BWIPJS.psarray([336,644,952,1110]);
	this.stk[this.ptr++]=BWIPJS.psarray([10,2,19,4,28,6,33,4]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("27");
	this.xget("v27to40");
	this.stk[this.ptr++]=125;
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=62;
	this.stk[this.ptr++]=14628;
	this.stk[this.ptr++]=BWIPJS.psarray([360,700,1020,1200]);
	this.stk[this.ptr++]=BWIPJS.psarray([8,4,22,3,8,26,12,28]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("28");
	this.xget("v27to40");
	this.stk[this.ptr++]=129;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=50;
	this.stk[this.ptr++]=15371;
	this.stk[this.ptr++]=BWIPJS.psarray([390,728,1050,1260]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,10,3,23,4,31,11,31]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("29");
	this.xget("v27to40");
	this.stk[this.ptr++]=133;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=54;
	this.stk[this.ptr++]=16411;
	this.stk[this.ptr++]=BWIPJS.psarray([420,784,1140,1350]);
	this.stk[this.ptr++]=BWIPJS.psarray([7,7,21,7,1,37,19,26]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("30");
	this.xget("v27to40");
	this.stk[this.ptr++]=137;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=52;
	this.stk[this.ptr++]=17483;
	this.stk[this.ptr++]=BWIPJS.psarray([450,812,1200,1440]);
	this.stk[this.ptr++]=BWIPJS.psarray([5,10,19,10,15,25,23,25]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("31");
	this.xget("v27to40");
	this.stk[this.ptr++]=141;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=56;
	this.stk[this.ptr++]=18587;
	this.stk[this.ptr++]=BWIPJS.psarray([480,868,1290,1530]);
	this.stk[this.ptr++]=BWIPJS.psarray([13,3,2,29,42,1,23,28]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("32");
	this.xget("v27to40");
	this.stk[this.ptr++]=145;
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=60;
	this.stk[this.ptr++]=19723;
	this.stk[this.ptr++]=BWIPJS.psarray([510,924,1350,1620]);
	this.stk[this.ptr++]=BWIPJS.psarray([17,0,10,23,10,35,19,35]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("33");
	this.xget("v27to40");
	this.stk[this.ptr++]=149;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=20891;
	this.stk[this.ptr++]=BWIPJS.psarray([540,980,1440,1710]);
	this.stk[this.ptr++]=BWIPJS.psarray([17,1,14,21,29,19,11,46]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("34");
	this.xget("v27to40");
	this.stk[this.ptr++]=153;
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=62;
	this.stk[this.ptr++]=22091;
	this.stk[this.ptr++]=BWIPJS.psarray([570,1036,1530,1800]);
	this.stk[this.ptr++]=BWIPJS.psarray([13,6,14,23,44,7,59,1]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("35");
	this.xget("v27to40");
	this.stk[this.ptr++]=157;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=54;
	this.stk[this.ptr++]=23008;
	this.stk[this.ptr++]=BWIPJS.psarray([570,1064,1590,1890]);
	this.stk[this.ptr++]=BWIPJS.psarray([12,7,12,26,39,14,22,41]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("36");
	this.xget("v27to40");
	this.stk[this.ptr++]=161;
	this.stk[this.ptr++]=24;
	this.stk[this.ptr++]=50;
	this.stk[this.ptr++]=24272;
	this.stk[this.ptr++]=BWIPJS.psarray([600,1120,1680,1980]);
	this.stk[this.ptr++]=BWIPJS.psarray([6,14,6,34,46,10,2,64]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("37");
	this.xget("v27to40");
	this.stk[this.ptr++]=165;
	this.stk[this.ptr++]=28;
	this.stk[this.ptr++]=54;
	this.stk[this.ptr++]=25568;
	this.stk[this.ptr++]=BWIPJS.psarray([630,1204,1770,2100]);
	this.stk[this.ptr++]=BWIPJS.psarray([17,4,29,14,49,10,24,46]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("38");
	this.xget("v27to40");
	this.stk[this.ptr++]=169;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=26896;
	this.stk[this.ptr++]=BWIPJS.psarray([660,1260,1860,2220]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,18,13,32,48,14,42,32]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("39");
	this.xget("v27to40");
	this.stk[this.ptr++]=173;
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=54;
	this.stk[this.ptr++]=28256;
	this.stk[this.ptr++]=BWIPJS.psarray([720,1316,1950,2310]);
	this.stk[this.ptr++]=BWIPJS.psarray([20,4,40,7,43,22,10,67]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.stk[this.ptr++]=BWIPJS.psstring("40");
	this.xget("v27to40");
	this.stk[this.ptr++]=177;
	this.stk[this.ptr++]=30;
	this.stk[this.ptr++]=58;
	this.stk[this.ptr++]=29648;
	this.stk[this.ptr++]=BWIPJS.psarray([750,1372,2040,2430]);
	this.stk[this.ptr++]=BWIPJS.psarray([19,6,18,31,34,34,20,61]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="eclval";
	this.stk[this.ptr++]=BWIPJS.psstring("LMQH");
	this.xget("eclevel");
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
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.ptr--;
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=43;
	this.stk[this.ptr++]=$f175;
	var t237=this.stk[--this.ptr];
	var t235=this.stk[--this.ptr];
	var t234=this.stk[--this.ptr];
	var t233=this.stk[--this.ptr];
	for (var t236=t233; t234<0 ? t236>=t235 : t236<=t235; t236+=t234) {
		this.stk[this.ptr++]=t236;
		if (t237.call(this)==-1) break;
	}
	this.xget("okay");
	this.not();
	this.stk[this.ptr++]=$f176;
	var t238=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t238.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="format";
	this.xget("frmt");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="version";
	this.xget("vers");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msgbits";
	this.xget("verbits");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dcpb";
	this.xget("dcws");
	this.xget("ecb1");
	this.xget("ecb2");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ecpb";
	this.xget("ncws");
	this.xget("ecb1");
	this.xget("ecb2");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.xget("dcpb");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="term";
	this.xget("term");
	this.stk[this.ptr++]=0;
	this.xget("dmod");
	this.xget("msgbits");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("term");
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
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f177;
	var t239=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t239.call(this)==-1) return -1;
	}
	this.ptr--;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("msgbits");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.xget("term");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=0;
	this.xget("msgbits");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.xget("msgbits");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.xget("term");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr++]="msgbits";
	t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pad";
	this.xget("dmod");
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("pad");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f178;
	var t244=this.stk[--this.ptr];
	var t242=this.stk[--this.ptr];
	var t241=this.stk[--this.ptr];
	var t240=this.stk[--this.ptr];
	for (var t243=t240; t241<0 ? t243>=t242 : t243<=t242; t243+=t241) {
		this.stk[this.ptr++]=t243;
		if (t244.call(this)==-1) break;
	}
	this.xget("pad");
	this.stk[this.ptr++]=0;
	this.xget("msgbits");
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr++]="padstrs";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("11101100"),BWIPJS.psstring("00010001")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="padnum";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("msgbits");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=Math.ceil(this.stk[this.ptr-1]);
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.stk[this.ptr++]=8;
	this.xget("dmod");
	this.xget("lc4b");
	this.stk[this.ptr++]=$f179;
	this.stk[this.ptr++]=$f180;
	var t245=this.stk[--this.ptr];
	var t246=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t246.call(this)==-1) return -1;
	} else {
		if (t245.call(this)==-1) return -1;
	}
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f181;
	var t251=this.stk[--this.ptr];
	var t249=this.stk[--this.ptr];
	var t248=this.stk[--this.ptr];
	var t247=this.stk[--this.ptr];
	for (var t250=t247; t248<0 ? t250>=t249 : t250<=t249; t250+=t248) {
		this.stk[this.ptr++]=t250;
		if (t251.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws";
	this.xget("dcws");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("cws");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f184;
	var t262=this.stk[--this.ptr];
	var t260=this.stk[--this.ptr];
	var t259=this.stk[--this.ptr];
	var t258=this.stk[--this.ptr];
	for (var t261=t258; t259<0 ? t261>=t260 : t261<=t260; t261+=t259) {
		this.stk[this.ptr++]=t261;
		if (t262.call(this)==-1) break;
	}
	this.xget("lc4b");
	this.stk[this.ptr++]=$f185;
	var t263=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t263.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="rsalog";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=255;
	this.stk[this.ptr++]=$f187;
	var t267=this.stk[--this.ptr];
	var t265=this.stk[--this.ptr];
	for (var t266=0; t266<t265; t266++) {
		if (t267.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rslog";
	this.stk[this.ptr++]=256;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=255;
	this.stk[this.ptr++]=$f188;
	var t274=this.stk[--this.ptr];
	var t272=this.stk[--this.ptr];
	var t271=this.stk[--this.ptr];
	var t270=this.stk[--this.ptr];
	for (var t273=t270; t271<0 ? t273>=t272 : t273<=t272; t273+=t271) {
		this.stk[this.ptr++]=t273;
		if (t274.call(this)==-1) break;
	}
	this.stk[this.ptr++]="rsprod";
	this.stk[this.ptr++]=$f191;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="coeffs";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=1;
	this.xget("ecpb");
	this.stk[this.ptr++]=$f192;
	var t279=this.stk[--this.ptr];
	var t277=this.stk[--this.ptr];
	for (var t278=0; t278<t277; t278++) {
		if (t279.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("ecpb");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f194;
	var t289=this.stk[--this.ptr];
	var t287=this.stk[--this.ptr];
	var t286=this.stk[--this.ptr];
	var t285=this.stk[--this.ptr];
	for (var t288=t285; t286<0 ? t288>=t287 : t288<=t287; t288+=t286) {
		this.stk[this.ptr++]=t288;
		if (t289.call(this)==-1) break;
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
	this.stk[this.ptr++]="rscodes";
	this.stk[this.ptr++]=$f199;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dcwsb";
	this.xget("ecb1");
	this.xget("ecb2");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ecwsb";
	this.xget("ecb1");
	this.xget("ecb2");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("ecb1");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f200;
	var t308=this.stk[--this.ptr];
	var t306=this.stk[--this.ptr];
	var t305=this.stk[--this.ptr];
	var t304=this.stk[--this.ptr];
	for (var t307=t304; t305<0 ? t307>=t306 : t307<=t306; t307+=t305) {
		this.stk[this.ptr++]=t307;
		if (t308.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("ecb2");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f201;
	var t313=this.stk[--this.ptr];
	var t311=this.stk[--this.ptr];
	var t310=this.stk[--this.ptr];
	var t309=this.stk[--this.ptr];
	for (var t312=t309; t310<0 ? t312>=t311 : t312<=t311; t312+=t310) {
		this.stk[this.ptr++]=t312;
		if (t313.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws";
	this.xget("ncws");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cw";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("dcpb");
	this.stk[this.ptr++]=$f204;
	var t324=this.stk[--this.ptr];
	var t322=this.stk[--this.ptr];
	var t321=this.stk[--this.ptr];
	var t320=this.stk[--this.ptr];
	for (var t323=t320; t321<0 ? t323>=t322 : t323<=t322; t323+=t321) {
		this.stk[this.ptr++]=t323;
		if (t324.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("ecpb");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f206;
	var t334=this.stk[--this.ptr];
	var t332=this.stk[--this.ptr];
	var t331=this.stk[--this.ptr];
	var t330=this.stk[--this.ptr];
	for (var t333=t330; t331<0 ? t333>=t332 : t333<=t332; t333+=t331) {
		this.stk[this.ptr++]=t333;
		if (t334.call(this)==-1) break;
	}
	this.xget("rbit");
	this.stk[this.ptr++]=0;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f207;
	var t335=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t335.call(this)==-1) return -1;
	}
	this.xget("lc4b");
	this.stk[this.ptr++]=$f209;
	var t341=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t341.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="pixs";
	this.stk[this.ptr++]=Infinity;
	this.xget("size");
	this.xget("size");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f210;
	var t344=this.stk[--this.ptr];
	var t342=this.stk[--this.ptr];
	for (var t343=0; t343<t342; t343++) {
		if (t344.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="qmv";
	this.stk[this.ptr++]=$f211;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fpat";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([1,1,1,1,1,1,1,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,0,0,0,0,1,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,1,1,0,1,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,1,1,0,1,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,1,1,0,1,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,0,0,0,0,1,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,1,1,1,1,1,1,0]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,0,0,0,0,0,0,0]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("fpat");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f214;
	var t355=this.stk[--this.ptr];
	var t353=this.stk[--this.ptr];
	var t352=this.stk[--this.ptr];
	var t351=this.stk[--this.ptr];
	for (var t354=t351; t352<0 ? t354>=t353 : t354<=t353; t354+=t352) {
		this.stk[this.ptr++]=t354;
		if (t355.call(this)==-1) break;
	}
	this.stk[this.ptr++]="algnpat";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([1,1,1,1,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,0,0,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,1,0,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,0,0,0,1]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,1,1,1,1]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="putalgnpat";
	this.stk[this.ptr++]=$f217;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("asp2");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("asp3");
	this.xget("asp2");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("size");
	this.stk[this.ptr++]=13;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f218;
	var t370=this.stk[--this.ptr];
	var t368=this.stk[--this.ptr];
	var t367=this.stk[--this.ptr];
	var t366=this.stk[--this.ptr];
	for (var t369=t366; t367<0 ? t369>=t368 : t369<=t368; t369+=t367) {
		this.stk[this.ptr++]=t369;
		if (t370.call(this)==-1) break;
	}
	this.xget("asp2");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("asp3");
	this.xget("asp2");
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.xget("size");
	this.stk[this.ptr++]=9;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f220;
	var t380=this.stk[--this.ptr];
	var t378=this.stk[--this.ptr];
	var t377=this.stk[--this.ptr];
	var t376=this.stk[--this.ptr];
	for (var t379=t376; t377<0 ? t379>=t378 : t379<=t378; t379+=t377) {
		this.stk[this.ptr++]=t379;
		if (t380.call(this)==-1) break;
	}
	this.xget("format");
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.eq();
	this.stk[this.ptr++]=$f222;
	this.stk[this.ptr++]=$f224;
	var t391=this.stk[--this.ptr];
	var t392=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t392.call(this)==-1) return -1;
	} else {
		if (t391.call(this)==-1) return -1;
	}
	this.xget("format");
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.eq();
	this.stk[this.ptr++]=$f225;
	this.stk[this.ptr++]=$f226;
	var t393=this.stk[--this.ptr];
	var t394=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t394.call(this)==-1) return -1;
	} else {
		if (t393.call(this)==-1) return -1;
	}
	this.xget("formatmap");
	this.stk[this.ptr++]=$f229;
	var t397=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t397);
	this.xget("size");
	this.stk[this.ptr++]=45;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f230;
	this.stk[this.ptr++]=$f231;
	var t398=this.stk[--this.ptr];
	var t399=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t399.call(this)==-1) return -1;
	} else {
		if (t398.call(this)==-1) return -1;
	}
	this.xget("versionmap");
	this.stk[this.ptr++]=$f234;
	var t402=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t402);
	this.xget("format");
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.eq();
	this.stk[this.ptr++]=$f235;
	var t403=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t403.call(this)==-1) return -1;
	}
	this.xget("format");
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.eq();
	this.stk[this.ptr++]=$f244;
	this.stk[this.ptr++]=$f249;
	var t408=this.stk[--this.ptr];
	var t409=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t409.call(this)==-1) return -1;
	} else {
		if (t408.call(this)==-1) return -1;
	}
	this.xget("mask");
	this.stk[this.ptr++]=-1;
	this.ne();
	this.stk[this.ptr++]=$f250;
	var t410=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t410.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="masks";
	this.xget("maskfuncs");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("masks");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f255;
	var t429=this.stk[--this.ptr];
	var t427=this.stk[--this.ptr];
	var t426=this.stk[--this.ptr];
	var t425=this.stk[--this.ptr];
	for (var t428=t425; t426<0 ? t428>=t427 : t428<=t427; t428+=t426) {
		this.stk[this.ptr++]=t428;
		if (t429.call(this)==-1) break;
	}
	this.stk[this.ptr++]="posx";
	this.xget("size");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="posy";
	this.xget("size");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dir";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="col";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="num";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f262;
	var t438=this.stk[--this.ptr];
	while (t438.call(this)!=-1);
	this.stk[this.ptr++]="evalfulln1n3";
	this.stk[this.ptr++]=$f272;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="evalfull";
	this.stk[this.ptr++]=$f287;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="evalmicro";
	this.stk[this.ptr++]=$f291;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bestscore";
	this.stk[this.ptr++]=999999999;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("masks");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f298;
	var t497=this.stk[--this.ptr];
	var t495=this.stk[--this.ptr];
	var t494=this.stk[--this.ptr];
	var t493=this.stk[--this.ptr];
	for (var t496=t493; t494<0 ? t496>=t495 : t496<=t495; t496+=t494) {
		this.stk[this.ptr++]=t496;
		if (t497.call(this)==-1) break;
	}
	this.stk[this.ptr++]="pixs";
	this.xget("bestsym");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("format");
	this.stk[this.ptr++]=BWIPJS.psstring("full");
	this.eq();
	this.stk[this.ptr++]=$f299;
	this.stk[this.ptr++]=$f300;
	var t498=this.stk[--this.ptr];
	var t499=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t499.call(this)==-1) return -1;
	} else {
		if (t498.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("formatmap");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f303;
	var t506=this.stk[--this.ptr];
	var t504=this.stk[--this.ptr];
	var t503=this.stk[--this.ptr];
	var t502=this.stk[--this.ptr];
	for (var t505=t502; t503<0 ? t505>=t504 : t505<=t504; t505+=t503) {
		this.stk[this.ptr++]=t505;
		if (t506.call(this)==-1) break;
	}
	this.xget("size");
	this.stk[this.ptr++]=45;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f307;
	var t514=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t514.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	this.stk[this.ptr++]=this.get("renmatrix");
	this.stk[this.ptr++]="pixs";
	this.xget("pixs");
	this.stk[this.ptr++]="pixx";
	this.xget("size");
	this.stk[this.ptr++]="pixy";
	this.xget("size");
	this.stk[this.ptr++]="height";
	this.xget("size");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="width";
	this.xget("size");
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
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
	var t515=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t515.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("qrcode");
// END OF qrcode

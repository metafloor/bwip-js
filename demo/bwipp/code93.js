// file: bwipp/code93.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-11-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN code93
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("code93", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("code93", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
BWIPJS.bwipp["code93"]=function() {
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
		return -1;
	}
	function $f7(){
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
	function $f8(){
		this.stk[this.ptr++]="i";
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f9(){
		this.xget("barcode");
		this.xget("i");
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr++]=94;
		this.ne();
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
		this.xget("i");
		this.xget("barlen");
		this.eq();
		this.stk[this.ptr++]=$f6;
		var t6=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t6.call(this)==-1) return -1;
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
		this.stk[this.ptr++]=$f9;
		var t9=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t9.call(this)==-1) return -1;
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
	function $f11(){
		this.stk[this.ptr++]="sbs";
		this.xget("msglen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=25;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f12(){
		this.stk[this.ptr++]="sbs";
		this.xget("msglen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=13;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f13(){
		this.stk[this.ptr++]=42;
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="indx";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="char";
		this.stk[this.ptr++]=BWIPJS.psstring(" ");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f14(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=-1;
		var t14=this.stk[--this.ptr];
		var t13=this.stk[--this.ptr];
		if (t14 < 0) t=this.stk.splice(this.ptr-t13, -t14);
		else t=this.stk.splice(this.ptr-t13, t13-t14);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="char";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("barchars");
		this.xget("char");
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
		this.stk[this.ptr++]="indx";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.ptr--;
	}
	function $f15(){
		this.stk[this.ptr++]="i";
		t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("msg");
		this.xget("i");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f13;
		this.stk[this.ptr++]=$f14;
		var t15=this.stk[--this.ptr];
		var t16=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t16.call(this)==-1) return -1;
		} else {
			if (t15.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="enc";
		this.xget("encs");
		this.xget("indx");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("sbs");
		this.xget("i");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("enc");
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("txt");
		this.xget("i");
		this.stk[this.ptr++]=Infinity;
		this.xget("char");
		this.xget("i");
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=9;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("textyoffset");
		this.xget("textfont");
		this.xget("textsize");
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr-=3;
		this.stk[this.ptr++]="checksum1";
		this.xget("checksum1");
		this.xget("msglen");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=20;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("indx");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="checksum2";
		this.xget("checksum2");
		this.xget("msglen");
		this.xget("i");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=15;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("indx");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f16(){
		this.stk[this.ptr++]="checksum1";
		this.xget("checksum1");
		this.stk[this.ptr++]=47;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="checksum2";
		this.xget("checksum2");
		this.xget("checksum1");
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=47;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.xget("sbs");
		this.xget("msglen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("encs");
		this.xget("checksum1");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("sbs");
		this.xget("msglen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("encs");
		this.xget("checksum2");
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		this.xget("sbs");
		this.xget("msglen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=18;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("encs");
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f17(){
		this.xget("sbs");
		this.xget("msglen");
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=6;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.xget("encs");
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f18(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f19(){
		this.xget("height");
	}
	function $f20(){
		this.stk[this.ptr++]=0;
	}
	function $f21(){
		this.stk[this.ptr++]="txt";
		this.xget("txt");
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
	this.stk[this.ptr++]="includecheck";
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
	this.stk[this.ptr++]="textyoffset";
	this.stk[this.ptr++]=-8.5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=1;
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
	this.stk[this.ptr++]="textyoffset";
	this.xget("textyoffset");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="height";
	this.xget("height");
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encs";
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("131112"),BWIPJS.psstring("111213"),BWIPJS.psstring("111312"),BWIPJS.psstring("111411"),BWIPJS.psstring("121113"),BWIPJS.psstring("121212"),BWIPJS.psstring("121311"),BWIPJS.psstring("111114"),BWIPJS.psstring("131211"),BWIPJS.psstring("141111"),BWIPJS.psstring("211113"),BWIPJS.psstring("211212"),BWIPJS.psstring("211311"),BWIPJS.psstring("221112"),BWIPJS.psstring("221211"),BWIPJS.psstring("231111"),BWIPJS.psstring("112113"),BWIPJS.psstring("112212"),BWIPJS.psstring("112311"),BWIPJS.psstring("122112"),BWIPJS.psstring("132111"),BWIPJS.psstring("111123"),BWIPJS.psstring("111222"),BWIPJS.psstring("111321"),BWIPJS.psstring("121122"),BWIPJS.psstring("131121"),BWIPJS.psstring("212112"),BWIPJS.psstring("212211"),BWIPJS.psstring("211122"),BWIPJS.psstring("211221"),BWIPJS.psstring("221121"),BWIPJS.psstring("222111"),BWIPJS.psstring("112122"),BWIPJS.psstring("112221"),BWIPJS.psstring("122121"),BWIPJS.psstring("123111"),BWIPJS.psstring("121131"),BWIPJS.psstring("311112"),BWIPJS.psstring("311211"),BWIPJS.psstring("321111"),BWIPJS.psstring("112131"),BWIPJS.psstring("113121"),BWIPJS.psstring("211131"),BWIPJS.psstring("121221"),BWIPJS.psstring("312111"),BWIPJS.psstring("311121"),BWIPJS.psstring("122211"),BWIPJS.psstring("111141"),BWIPJS.psstring("1111411")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barchars";
	this.stk[this.ptr++]=BWIPJS.psstring("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barlen";
	this.xget("barcode");
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sft1";
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sft2";
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sft3";
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sft4";
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fncvals";
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("SFT$");
	this.xget("sft1");
	this.stk[this.ptr++]=BWIPJS.psstring("SFT%");
	this.xget("sft2");
	this.stk[this.ptr++]=BWIPJS.psstring("SFT/");
	this.xget("sft3");
	this.stk[this.ptr++]=BWIPJS.psstring("SFT+");
	this.xget("sft4");
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
	this.stk[this.ptr++]=$f10;
	var t10=this.stk[--this.ptr];
	while (t10.call(this)!=-1);
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
	this.xget("includecheck");
	this.stk[this.ptr++]=$f11;
	this.stk[this.ptr++]=$f12;
	var t11=this.stk[--this.ptr];
	var t12=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t12.call(this)==-1) return -1;
	} else {
		if (t11.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="txt";
	this.xget("msglen");
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.xget("sbs");
	this.stk[this.ptr++]=0;
	this.xget("encs");
	this.stk[this.ptr++]=47;
	this.stk[this.ptr-2]=BWIPJS.get(this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr--;
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	this.stk[this.ptr++]="checksum1";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="checksum2";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.xget("msglen");
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f15;
	var t21=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	var t18=this.stk[--this.ptr];
	var t17=this.stk[--this.ptr];
	for (var t20=t17; t18<0 ? t20>=t19 : t20<=t19; t20+=t18) {
		this.stk[this.ptr++]=t20;
		if (t21.call(this)==-1) break;
	}
	this.xget("includecheck");
	this.stk[this.ptr++]=$f16;
	this.stk[this.ptr++]=$f17;
	var t22=this.stk[--this.ptr];
	var t23=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t23.call(this)==-1) return -1;
	} else {
		if (t22.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren";
	this.stk[this.ptr++]=this.get("renlinear");
	this.stk[this.ptr++]="sbs";
	this.stk[this.ptr++]=Infinity;
	this.xget("sbs");
	this.stk[this.ptr++]=$f18;
	var t24=this.stk[--this.ptr];
	this.forall(this.stk[--this.ptr],t24);
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
	this.stk[this.ptr++]=$f19;
	var t27=this.stk[--this.ptr];
	var t25=this.stk[--this.ptr];
	for (var t26=0; t26<t25; t26++) {
		if (t27.call(this)==-1) break;
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
	this.stk[this.ptr++]=$f20;
	var t30=this.stk[--this.ptr];
	var t28=this.stk[--this.ptr];
	for (var t29=0; t29<t28; t29++) {
		if (t30.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.xget("includetext");
	this.stk[this.ptr++]=$f21;
	var t31=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t31.call(this)==-1) return -1;
	}
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
	var t32=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t32.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("code93");
// END OF code93

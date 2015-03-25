// file: bwipp/bc412.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-03-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN bc412
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("bc412", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("bc412", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
BWIPJS.bwipp["bc412"]=function() {
	function $f0(){
		//#line 7377: token false eq {exit} if dup length string cvs (=) search
		return -1;
	}
	function $f1(){
		//#line 7378: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		//#line 7378: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f3(){
		//#line 7377: token false eq {exit} if dup length string cvs (=) search
		var a=/^\s*([^\s]+)(\s+.*)?$/.exec(this.stk[this.ptr-1]);
		if (a) {
			this.stk[this.ptr-1]=BWIPJS.psstring(a[2]===undefined?"":a[2]);
			this.stk[this.ptr++]=BWIPJS.psstring(a[1]);
			this.stk[this.ptr++]=true;
		} else {
			this.stk[this.ptr-1]=false;
		}
		this.stk[this.ptr++]=false;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f0;
		var t0=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t0.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-2].toString();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("=");
		var h=this.stk[this.ptr-2];
		var t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		//#line 7378: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		this.stk[this.ptr++]=true;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
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
		//#line 7375: 1 dict begin
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]={};
		this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
		//#line 7376: options {
		var t=this.dstk.get("options");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f3;
		//#line 7379: } loop
		var t3=this.stk[--this.ptr];
		while (true) {
			if (t3.call(this)==-1) break;
		}
		//#line 7380: currentdict end /options exch def
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		//#line 7382: options {def} forall
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		//#line 7390: /includecheck true def
		this.stk[this.ptr++]="includecheck";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 7391: /includestartstop true def
		this.stk[this.ptr++]="includestartstop";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		//#line 7397: 0 1 34 {charvals exch dup barchars exch 1 getinterval exch put} for
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f8(){
		//#line 7402: /bwipp.bc412badCharacter (BC412 must contain only digits and capital letters except O) //raiseerror exec
		this.stk[this.ptr++]="bwipp.bc412badCharacter";
		this.stk[this.ptr++]=BWIPJS.psstring("BC412 must contain only digits and capital letters except O");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f9(){
		//#line 7401: barcode exch 1 getinterval charvals exch known not {
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		this.stk[this.ptr++]=$f8;
		//#line 7403: } if
		var t14=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t14.call(this)==-1) return -1;
		}
	}
	function $f10(){
		//#line 7406: /barlen barcode length validatecheck {1 sub} if def
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f11(){
		//#line 7410: barcode exch 1 getinterval charvals exch get
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		//#line 7411: checksum add /checksum exch def
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="checksum";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f12(){
		//#line 7416: /bwipp.bc412badCheckDigit (Incorrect BC412 check digit provided) //raiseerror exec
		this.stk[this.ptr++]="bwipp.bc412badCheckDigit";
		this.stk[this.ptr++]=BWIPJS.psstring("Incorrect BC412 check digit provided");
		var t=this.dstk.get("raiseerror");
		this.stk[this.ptr++]=t;
		var t=this.stk[--this.ptr];
		if (t instanceof Function) t.call(this); else this.eval(t);
	}
	function $f13(){
		//#line 7415: barcode barlen get barchars checksum get ne {
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f12;
		//#line 7417: } if
		var t26=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t26.call(this)==-1) return -1;
		}
		//#line 7418: /barcode barcode 0 barlen getinterval def
		this.stk[this.ptr++]="barcode";
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 7419: /includecheck true def
		this.stk[this.ptr++]="includecheck";
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f14(){
		//#line 7436: /txt barlen 1 add array def
		this.stk[this.ptr++]="txt";
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f15(){
		//#line 7438: /txt barlen array def
		this.stk[this.ptr++]="txt";
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f16(){
		//#line 7443: sbs 0 encs 35 get putinterval
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=35;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 7444: /pos 2 def
		this.stk[this.ptr++]="pos";
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 7445: /txtpos 3 def
		this.stk[this.ptr++]="txtpos";
		this.stk[this.ptr++]=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f17(){
		//#line 7447: /pos 0 def
		this.stk[this.ptr++]="pos";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 7448: /txtpos 0 def
		this.stk[this.ptr++]="txtpos";
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f18(){
		//#line 7452: /i exch def
		this.stk[this.ptr++]="i";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 7453: /indx charvals barcode i 1 getinterval get def
		this.stk[this.ptr++]="indx";
		var t=this.dstk.get("charvals");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 7454: sbs pos encs indx get putinterval
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("indx");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 7455: txt i [barcode i 1 getinterval i 12 mul txtpos add textyoffset textfont textsize] put
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("barcode");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("i");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("txtpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		//#line 7456: /pos pos 8 add def
		this.stk[this.ptr++]="pos";
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f19(){
		//#line 7463: txt barlen [barchars checksum 1 getinterval barlen 12 mul txtpos add textyoffset textfont textsize] put
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("barchars");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("txtpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f20(){
		//#line 7465: txt barlen [() barlen 12 mul txtpos add textyoffset textfont textsize] put
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=BWIPJS.psstring("");
		var t=this.dstk.get("barlen");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=12;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("txtpos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("textyoffset");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textfont");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("textsize");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f21(){
		//#line 7461: sbs pos encs checksum get putinterval
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("checksum");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 7462: includecheckintext {
		var t=this.dstk.get("includecheckintext");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f19;
		//#line 7464: } {
		this.stk[this.ptr++]=$f20;
		//#line 7466: } ifelse
		var t37=this.stk[--this.ptr];
		var t38=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t38.call(this)==-1) return -1;
		} else {
			if (t37.call(this)==-1) return -1;
		}
		//#line 7467: /pos pos 8 add def
		this.stk[this.ptr++]="pos";
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f22(){
		//#line 7472: sbs pos encs 36 get putinterval
		var t=this.dstk.get("sbs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encs");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=36;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		//#line 7473: /pos pos 2 add def
		this.stk[this.ptr++]="pos";
		var t=this.dstk.get("pos");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f23(){
		//#line 7480: /sbs [sbs {48 sub} forall]
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f24(){
		//#line 7481: /bhs [sbs length 1 add 2 idiv {height} repeat]
		var t=this.dstk.get("height");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f25(){
		//#line 7482: /bbs [sbs length 1 add 2 idiv {0} repeat]
		this.stk[this.ptr++]=0;
	}
	function $f26(){
		//#line 7484: /txt txt
		this.stk[this.ptr++]="txt";
		var t=this.dstk.get("txt");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	//#line 7356: 20 dict begin                 % Confine variables to local scope
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	//#line 7358: /options exch def       % We are given an option string
	this.stk[this.ptr++]="options";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7359: /barcode exch def       % We are given a barcode string
	this.stk[this.ptr++]="barcode";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7361: /dontdraw false def
	this.stk[this.ptr++]="dontdraw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7362: /includecheck false def
	this.stk[this.ptr++]="includecheck";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7363: /validatecheck false def
	this.stk[this.ptr++]="validatecheck";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7364: /includetext false def
	this.stk[this.ptr++]="includetext";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7365: /includecheckintext false def
	this.stk[this.ptr++]="includecheckintext";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7366: /includestartstop false def
	this.stk[this.ptr++]="includestartstop";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7367: /semi false def
	this.stk[this.ptr++]="semi";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7368: /textfont /Courier def
	this.stk[this.ptr++]="textfont";
	this.stk[this.ptr++]="Courier";
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7369: /textsize 10 def
	this.stk[this.ptr++]="textsize";
	this.stk[this.ptr++]=10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7370: /textyoffset -8 def
	this.stk[this.ptr++]="textyoffset";
	this.stk[this.ptr++]=-8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7371: /height 1 def
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7374: options type /stringtype eq {
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype";
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f4;
	//#line 7381: } if
	var t4=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t4.call(this)==-1) return -1;
	}
	//#line 7382: options {def} forall
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f5;
	var t7=this.stk[--this.ptr];
	var t6=this.stk[--this.ptr];
	for (t5 in t6) {
		if (t6 instanceof BWIPJS.psstring || t6 instanceof BWIPJS.psarray) {
			if (t5.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t6.get(t5);
		} else {
			this.stk[this.ptr++]=t5;
			this.stk[this.ptr++]=t6[t5];
		}
		if (t7.call(this)==-1) break;
	}
	//#line 7384: /textfont textfont cvlit def
	this.stk[this.ptr++]="textfont";
	var t=this.dstk.get("textfont");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7385: /textsize textsize cvr def
	this.stk[this.ptr++]="textsize";
	var t=this.dstk.get("textsize");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7386: /textyoffset textyoffset cvr def
	this.stk[this.ptr++]="textyoffset";
	var t=this.dstk.get("textyoffset");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7387: /height height cvr def
	this.stk[this.ptr++]="height";
	var t=this.dstk.get("height");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseFloat(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7389: semi {
	var t=this.dstk.get("semi");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f6;
	//#line 7392: } if
	var t8=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t8.call(this)==-1) return -1;
	}
	//#line 7395: /barchars (0R9GLVHA8EZ4NTS1J2Q6C7DYKBUIX3FWP5M) def
	this.stk[this.ptr++]="barchars";
	this.stk[this.ptr++]=BWIPJS.psstring("0R9GLVHA8EZ4NTS1J2Q6C7DYKBUIX3FWP5M");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7396: /charvals 35 dict def
	this.stk[this.ptr++]="charvals";
	this.stk[this.ptr++]=35;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7397: 0 1 34 {charvals exch dup barchars exch 1 getinterval exch put} for
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=34;
	this.stk[this.ptr++]=$f7;
	var t13=this.stk[--this.ptr];
	var t11=this.stk[--this.ptr];
	var t10=this.stk[--this.ptr];
	var t9=this.stk[--this.ptr];
	for (var t12=t9; t10<0 ? t12>=t11 : t12<=t11; t12+=t10) {
		this.stk[this.ptr++]=t12;
		if (t13.call(this)==-1) break;
	}
	//#line 7400: 0 1 barcode length 1 sub {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f9;
	//#line 7404: } for
	var t19=this.stk[--this.ptr];
	var t17=this.stk[--this.ptr];
	var t16=this.stk[--this.ptr];
	var t15=this.stk[--this.ptr];
	for (var t18=t15; t16<0 ? t18>=t17 : t18<=t17; t18+=t16) {
		this.stk[this.ptr++]=t18;
		if (t19.call(this)==-1) break;
	}
	//#line 7406: /barlen barcode length validatecheck {1 sub} if def
	this.stk[this.ptr++]="barlen";
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	var t=this.dstk.get("validatecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f10;
	var t20=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t20.call(this)==-1) return -1;
	}
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7408: /checksum 0 def
	this.stk[this.ptr++]="checksum";
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7409: 0 1 barlen 1 sub {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("barlen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f11;
	//#line 7412: } for
	var t25=this.stk[--this.ptr];
	var t23=this.stk[--this.ptr];
	var t22=this.stk[--this.ptr];
	var t21=this.stk[--this.ptr];
	for (var t24=t21; t22<0 ? t24>=t23 : t24<=t23; t24+=t22) {
		this.stk[this.ptr++]=t24;
		if (t25.call(this)==-1) break;
	}
	//#line 7413: /checksum checksum 35 mod def
	this.stk[this.ptr++]="checksum";
	var t=this.dstk.get("checksum");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=35;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7414: validatecheck {
	var t=this.dstk.get("validatecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f13;
	//#line 7420: } if
	var t27=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t27.call(this)==-1) return -1;
	}
	//#line 7423: /encs
	this.stk[this.ptr++]="encs";
	//#line 7424: [ (11111115) (13111212) (11131113) (12111213) (12121311)
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("11111115"),BWIPJS.psstring("13111212"),BWIPJS.psstring("11131113"),BWIPJS.psstring("12111213"),BWIPJS.psstring("12121311"),BWIPJS.psstring("13131111"),BWIPJS.psstring("12111312"),BWIPJS.psstring("11131212"),BWIPJS.psstring("11121411"),BWIPJS.psstring("11151111"),BWIPJS.psstring("15111111"),BWIPJS.psstring("11111511"),BWIPJS.psstring("12131211"),BWIPJS.psstring("13121112"),BWIPJS.psstring("13111212"),BWIPJS.psstring("11111214"),BWIPJS.psstring("12121113"),BWIPJS.psstring("11111313"),BWIPJS.psstring("13111113"),BWIPJS.psstring("11121213"),BWIPJS.psstring("11141112"),BWIPJS.psstring("11121312"),BWIPJS.psstring("11141211"),BWIPJS.psstring("14121111"),BWIPJS.psstring("12121212"),BWIPJS.psstring("11131311"),BWIPJS.psstring("13121211"),BWIPJS.psstring("12111411"),BWIPJS.psstring("14111211"),BWIPJS.psstring("11111412"),BWIPJS.psstring("12111114"),BWIPJS.psstring("14111112"),BWIPJS.psstring("12141111"),BWIPJS.psstring("11121114"),BWIPJS.psstring("12131112"),BWIPJS.psstring("12"),BWIPJS.psstring("111")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7434: /sbs barlen 1 add 8 mul 5 add string def
	this.stk[this.ptr++]="sbs";
	var t=this.dstk.get("barlen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7435: includecheck {
	var t=this.dstk.get("includecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f14;
	//#line 7437: } {
	this.stk[this.ptr++]=$f15;
	//#line 7439: } ifelse
	var t28=this.stk[--this.ptr];
	var t29=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t29.call(this)==-1) return -1;
	} else {
		if (t28.call(this)==-1) return -1;
	}
	//#line 7442: includestartstop {
	var t=this.dstk.get("includestartstop");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f16;
	//#line 7446: } {
	this.stk[this.ptr++]=$f17;
	//#line 7449: } ifelse
	var t30=this.stk[--this.ptr];
	var t31=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t31.call(this)==-1) return -1;
	} else {
		if (t30.call(this)==-1) return -1;
	}
	//#line 7451: 0 1 barlen 1 sub {
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("barlen");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f18;
	//#line 7457: } for
	var t36=this.stk[--this.ptr];
	var t34=this.stk[--this.ptr];
	var t33=this.stk[--this.ptr];
	var t32=this.stk[--this.ptr];
	for (var t35=t32; t33<0 ? t35>=t34 : t35<=t34; t35+=t33) {
		this.stk[this.ptr++]=t35;
		if (t36.call(this)==-1) break;
	}
	//#line 7460: includecheck {
	var t=this.dstk.get("includecheck");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f21;
	//#line 7468: } if 
	var t39=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t39.call(this)==-1) return -1;
	}
	//#line 7471: includestartstop { 
	var t=this.dstk.get("includestartstop");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f22;
	//#line 7474: } if
	var t40=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t40.call(this)==-1) return -1;
	}
	//#line 7477: /sbs sbs 0 pos getinterval def 
	this.stk[this.ptr++]="sbs";
	var t=this.dstk.get("sbs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("pos");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 7478: <<
	this.stk[this.ptr++]=Infinity;
	//#line 7479: /ren //renlinear
	this.stk[this.ptr++]="ren";
	var t=this.dstk.get("renlinear");
	this.stk[this.ptr++]=t;
	//#line 7480: /sbs [sbs {48 sub} forall]
	this.stk[this.ptr++]="sbs";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sbs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f23;
	var t43=this.stk[--this.ptr];
	var t42=this.stk[--this.ptr];
	for (t41 in t42) {
		if (t42 instanceof BWIPJS.psstring || t42 instanceof BWIPJS.psarray) {
			if (t41.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t42.get(t41);
		} else {
			this.stk[this.ptr++]=t41;
			this.stk[this.ptr++]=t42[t41];
		}
		if (t43.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	//#line 7481: /bhs [sbs length 1 add 2 idiv {height} repeat]
	this.stk[this.ptr++]="bhs";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sbs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=$f24;
	var t46=this.stk[--this.ptr];
	var t44=this.stk[--this.ptr];
	for (var t45=0; t45<t44; t45++) {
		if (t46.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	//#line 7482: /bbs [sbs length 1 add 2 idiv {0} repeat]
	this.stk[this.ptr++]="bbs";
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sbs");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=$f25;
	var t49=this.stk[--this.ptr];
	var t47=this.stk[--this.ptr];
	for (var t48=0; t48<t47; t48++) {
		if (t49.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	//#line 7483: includetext {
	var t=this.dstk.get("includetext");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f26;
	//#line 7485: } if
	var t50=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t50.call(this)==-1) return -1;
	}
	//#line 7486: /opt options
	this.stk[this.ptr++]="opt";
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	//#line 7487: >>
	var t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
		t[this.stk[i-1]]=this.stk[i];
	}
	if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
	this.ptr = i;
	this.stk[this.ptr++]=t;
	//#line 7489: dontdraw not //renlinear if
	var t=this.dstk.get("dontdraw");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
	else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
	var t=this.dstk.get("renlinear");
	this.stk[this.ptr++]=t;
	var t51=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t51.call(this)==-1) return -1;
	}
	//#line 7491: end
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("bc412");
// END OF bc412

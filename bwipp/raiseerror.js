// file: bwipp/raiseerror.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-02-18
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2015 Terry Burton
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.
// BEGIN raiseerror
BWIPJS.bwipp["raiseerror"]=function() {
	var t=this.dstk.get("$error");
	if (t===undefined) throw new Error("dict: $error: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]="errorinfo"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	var t=this.dstk.get("$error");
	if (t===undefined) throw new Error("dict: $error: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]="errorname"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	var t=this.dstk.get("$error");
	if (t===undefined) throw new Error("dict: $error: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="command"; //ident
	this.stk[this.ptr++]=null;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	var t=this.dstk.get("$error");
	if (t===undefined) throw new Error("dict: $error: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="newerror"; //ident
	this.stk[this.ptr++]=true;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	var t=this.dstk.get("handleerror");
	if (t===undefined) throw new Error("dict: handleerror: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("quit");
	if (t===undefined) throw new Error("dict: quit: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	psstptr = this.ptr;
}
// END OF raiseerror

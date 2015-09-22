// file: bwipp/raiseerror.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-08-10
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN raiseerror
BWIPJS.bwipp["raiseerror"]=function() {
	var t=this.dstk.get("$error");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]="errorinfo";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	var t=this.dstk.get("$error");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]="errorname";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	var t=this.dstk.get("$error");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="command";
	this.stk[this.ptr++]=null;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	var t=this.dstk.get("$error");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="newerror";
	this.stk[this.ptr++]=true;
	BWIPJS.set(this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1]);
	this.ptr-=3;
	var t=this.dstk.get("handleerror");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("quit");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	psstptr = this.ptr;
}
BWIPJS.decrefs("raiseerror");
// END OF raiseerror

import { core, h } from "@printf83/bsts";

const convert = (attr: h.IAttrTagOl) => {
	let tAttr: core.IAttr = {};

	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ol(attr);

	return tAttr;
};

export class ol extends h.div {
	constructor(); //#1
	constructor(attr: h.IAttrTagOl); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: h.IAttrTagOl, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(core.bsConstArg<h.IAttrTagOl>("elem", convert, arg));
	}
}

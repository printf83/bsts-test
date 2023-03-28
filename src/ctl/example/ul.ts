import { core, h } from "@printf83/bsts";

const convert = (attr: h.IAttrTagUl) => {
	let tAttr: core.IAttr = {};

	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ul(attr);

	return tAttr;
};

export class ul extends h.div {
	constructor(); //#1
	constructor(attr: h.IAttrTagUl); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: h.IAttrTagUl, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(core.bsConstArg<h.IAttrTagUl>("elem", convert, arg));
	}
}

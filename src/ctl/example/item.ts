import { core, h } from "@printf83/bsts";

const convert = (attr: core.IAttr) => {
	attr.marginBottom ??= 3;
	return attr;
};

export class item extends h.div {
	constructor(); //#1
	constructor(attr: core.IAttr); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: core.IAttr, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(core.bsConstArg("elem", convert, arg));
	}
}
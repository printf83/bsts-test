import { core, h } from "@printf83/bsts";

const convert = (attr: h.IAttrTagP) => {
	attr = core.mergeObject({ class: "example-description", lead: true }, attr);
	return attr;
};

export class description extends h.p {
	constructor(); //#1
	constructor(attr: h.IAttrTagP); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: h.IAttrTagP, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(core.bsConstArg<h.IAttrTagP>("elem", convert, arg));
	}
}

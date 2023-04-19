import { core, h } from "@printf83/bsts";

const convert = (attr: h.ITagP) => {
	attr = core.mergeObject({ class: "example-description", lead: true }, attr);
	return attr;
};

export class description extends h.p {
	constructor(); //#1
	constructor(attr: h.ITagP); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: h.ITagP, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(core.bsConstArg<h.ITagP>("elem", convert, arg));
	}
}

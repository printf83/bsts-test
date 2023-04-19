import { core, h } from "@printf83/bsts";

const convert = (attr: h.ITagUl) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-ul";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ul(attr);

	return tAttr;
};

export class ul extends h.div {
	constructor(); //#1
	constructor(attr: h.ITagUl); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: h.ITagUl, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<h.ITagUl>("elem", arg)));
	}
}

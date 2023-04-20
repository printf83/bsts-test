import { core, h } from "@printf83/bsts";

const convert = (attr: h.ITagOl) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-ol";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ol(attr);

	return tAttr;
};

export class ol extends h.div {
	constructor(); //#1
	constructor(attr: h.ITagOl); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: h.ITagOl, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<h.ITagOl>("elem", arg)));
	}
}
export const Ol = (AttrOrElem?: h.ITagOl | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<ol, h.ITagOl>(ol, AttrOrElem, Elem);

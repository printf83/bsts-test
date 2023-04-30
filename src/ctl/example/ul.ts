import { core, h, I } from "@printf83/bsts";

const convert = (attr: I.H.Ul) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-ul";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ul(attr);

	return tAttr;
};

export class ul extends h.div {
	constructor(); //#1
	constructor(attr: I.H.Ul); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: I.H.Ul, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.H.Ul>("elem", arg)));
	}
}

export const Ul = (AttrOrElem?: I.H.Ul | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<ul, I.H.Ul>(ul, AttrOrElem, Elem);

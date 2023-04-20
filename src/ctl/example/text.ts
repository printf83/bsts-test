import { core, h } from "@printf83/bsts";

const convert = (attr: h.ITagP) => {
	return attr;
};

export class text extends h.p {
	constructor(); //#1
	constructor(attr: h.ITagP); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: h.ITagP, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<h.ITagP>("elem", arg)));
	}
}

export const Text = (AttrOrElem?: h.ITagP | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<text, h.ITagP>(text, AttrOrElem, Elem);

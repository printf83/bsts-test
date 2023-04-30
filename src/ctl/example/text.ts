import { core, h, I } from "@printf83/bsts";

const convert = (attr: I.H.P) => {
	return attr;
};

export class text extends h.p {
	constructor(); //#1
	constructor(attr: I.H.P); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: I.H.P, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.H.P>("elem", arg)));
	}
}

export const Text = (AttrOrElem?: I.H.P | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<text, I.H.P>(text, AttrOrElem, Elem);

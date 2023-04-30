import { core, h, I } from "@printf83/bsts";

const convert = (attr: I.H.P) => {
	attr = core.mergeObject({ class: "example-description", lead: true }, attr);
	return attr;
};

export class description extends h.p {
	constructor(); //#1
	constructor(attr: I.H.P); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: I.H.P, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.H.P>("elem", arg)));
	}
}

export const Description = (AttrOrElem?: I.H.P | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<description, I.H.P>(description, AttrOrElem, Elem);

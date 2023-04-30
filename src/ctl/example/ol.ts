import { core, h, I } from "@printf83/bsts";

const convert = (attr: I.H.Ol) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-ol";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ol(attr);

	return tAttr;
};

export class ol extends h.div {
	constructor(); //#1
	constructor(attr: I.H.Ol); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: I.H.Ol, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.H.Ol>("elem", arg)));
	}
}
export const Ol = (AttrOrElem?: I.H.Ol | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<ol, I.H.Ol>(ol, AttrOrElem, Elem);

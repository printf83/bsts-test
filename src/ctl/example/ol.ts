import { core, h, I } from "@printf83/bsts";

const convert = (attr: I.H.Ol) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-ol";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ol(attr);

	return tAttr;
};

export class ol extends h.div {
	constructor();
	constructor(attr: I.H.Ol);
	constructor(elem: core.IElem);
	constructor(attr: I.H.Ol, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.H.Ol>("elem", arg)));
	}
}

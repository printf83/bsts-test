import { core, h, I } from "@printf83/bsts";

const convert = (attr: I.H.P) => {
	attr.class = core.mergeClass(attr.class, "example-text");
	return attr;
};

export class text extends h.p {
	constructor();
	constructor(attr: I.H.P);
	constructor(elem: core.IElem);
	constructor(attr: I.H.P, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.H.P>("elem", arg)));
	}
}

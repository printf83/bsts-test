import { core, h, I } from "@printf83/bsts";

const convert = (attr: I.H.P) => {
	attr = core.mergeObject({ class: "example-description", lead: true }, attr);
	return attr;
};

export class description extends h.p {
	constructor();
	constructor(attr: I.H.P);
	constructor(elem: core.IElem);
	constructor(attr: I.H.P, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.H.P>("elem", arg)));
	}
}

import { core, h, I } from "@printf83/bsts";
type P = I.h.p;

const convert = (attr: P) => {
	attr = core.mergeObject({ class: "example-description", lead: true }, attr);
	return attr;
};

export class description extends h.p {
	constructor();
	constructor(attr: P);
	constructor(elem: core.elem | core.elem[]);
	constructor(attr: P, elem: core.elem | core.elem[]);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<P>("elem", arg)));
	}
}

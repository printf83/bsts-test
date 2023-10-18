// import { P } from "../../../node_modules/@printf83/bsts/build/types/html/p.js";

import { core, h, I } from "@printf83/bsts";
type P = I.h.p;

const convert = (attr: P) => {
	attr.class = core.mergeClass(attr.class, "example-text");
	return attr;
};

export class text extends h.p {
	constructor();
	constructor(attr: P);
	constructor(elem: core.elem);
	constructor(attr: P, elem: core.elem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<P>("elem", arg)));
	}
}

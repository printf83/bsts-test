import { P } from "../../../node_modules/@printf83/bsts/build/types/html/p.js";

import { core, h } from "@printf83/bsts";

const convert = (attr: P) => {
	attr.class = core.mergeClass(attr.class, "example-text");
	return attr;
};

export class text extends h.p {
	constructor();
	constructor(attr: P);
	constructor(elem: core.IElem);
	constructor(attr: P, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<P>("elem", arg)));
	}
}

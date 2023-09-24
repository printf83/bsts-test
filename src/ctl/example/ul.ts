import { Ul } from "../../../node_modules/@printf83/bsts/build/types/html/ul.js";

import { core, h } from "@printf83/bsts";

const convert = (attr: Ul) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-ul";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ul(attr);

	return tAttr;
};

export class ul extends h.div {
	constructor();
	constructor(attr: Ul);
	constructor(elem: core.IElem);
	constructor(attr: Ul, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<Ul>("elem", arg)));
	}
}

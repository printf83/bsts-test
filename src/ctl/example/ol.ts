// import { Ol } from "../../../node_modules/@printf83/bsts/build/types/html/ol.js";

import { core, h, I } from "@printf83/bsts";
type Ol = I.h.ol;

const convert = (attr: Ol) => {
	let tAttr: core.attr = {};

	tAttr.class = "example-ol";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ol(attr);

	return tAttr;
};

export class ol extends h.div {
	constructor();
	constructor(attr: Ol);
	constructor(elem: core.elem | core.elem[]);
	constructor(attr: Ol, elem: core.elem | core.elem[]);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<Ol>("elem", arg)));
	}
}

// import { bsConstArg } from "@printf83/bsts/lib/core/bootstrap";
// import { IElem } from "@printf83/bsts/lib/core/tag";
// import { mergeObject } from "@printf83/bsts/lib/core/mergeObject";
// import { IAttrTagP, p } from "@printf83/bsts/lib/html/p";

import { core } from "@printf83/bsts";
import { bsConstArg } from "@printf83/bsts/lib/cjs/types/core/bootstrap.js";
import { IElem } from "@printf83/bsts/lib/cjs/types/core/tag.js";
import { IAttrTagP, p } from "@printf83/bsts/lib/cjs/types/html/p.js";

const convert = (attr: IAttrTagP) => {
	attr = core.mergeObject({ class: "example-description", lead: true }, attr);
	return attr;
};

export class description extends p {
	constructor(); //#1
	constructor(attr: IAttrTagP); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagP, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrTagP>("elem", convert, arg));
	}
}

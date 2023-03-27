import { bsConstArg } from "@printf83/bsts/lib/types/core/bootstrap.js";
import { IElem } from "@printf83/bsts/lib/types/core/tag.js";
import { IAttrTagP, p } from "@printf83/bsts/lib/types/html/p.js";

const convert = (attr: IAttrTagP) => {
	return attr;
};

export class text extends p {
	constructor(); //#1
	constructor(attr: IAttrTagP); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagP, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrTagP>("elem", convert, arg));
	}
}

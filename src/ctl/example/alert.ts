import { core, h, b } from "@printf83/bsts";

const convert = (attr: b.alert.IAttrBSAlertContainer) => {
	let tAttr: core.IAttr = {};

	tAttr.marginBottom ??= 3;
	tAttr.elem = new b.alert.container(attr);

	return tAttr;
};

export class alert extends h.div {
	constructor(); //#1
	constructor(attr: b.alert.IAttrBSAlertContainer); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: b.alert.IAttrBSAlertContainer, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(core.bsConstArg<b.alert.IAttrBSAlertContainer>("elem", convert, arg));
	}
}

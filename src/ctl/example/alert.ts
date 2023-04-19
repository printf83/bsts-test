import { core, h, b } from "@printf83/bsts";

const convert = (attr: b.alert.IBsAlertContainer) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-alert";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new b.alert.container(attr);

	return tAttr;
};

export class alert extends h.div {
	constructor(); //#1
	constructor(attr: b.alert.IBsAlertContainer); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: b.alert.IBsAlertContainer, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<b.alert.IBsAlertContainer>("elem", arg)));
	}
}

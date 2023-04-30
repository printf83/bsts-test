import { core, h, b, I } from "@printf83/bsts";

const convert = (attr: I.B.Alert.Container) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-alert";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new b.alert.container(attr);

	return tAttr;
};

export class alert extends h.div {
	constructor(); //#1
	constructor(attr: I.B.Alert.Container); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: I.B.Alert.Container, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.B.Alert.Container>("elem", arg)));
	}
}

export const Alert = (AttrOrElem?: I.B.Alert.Container | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<alert, I.B.Alert.Container>(alert, AttrOrElem, Elem);

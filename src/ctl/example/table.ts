import { core, h, b } from "@printf83/bsts";

const convert = (attr: b.table.IAttrBSTableContainer) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-table";
	tAttr.marginBottom ??= 3;
	tAttr.overflow = "auto";

	attr = core.mergeObject({ small: true, class: "small" }, attr);

	tAttr.elem = new b.table.container(attr);

	return tAttr;
};

export class table extends h.div {
	constructor(); //#1
	constructor(attr: b.table.IAttrBSTableContainer); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: b.table.IAttrBSTableContainer, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(core.bsConstArg<b.table.IAttrBSTableContainer>("elem", convert, arg));
	}
}

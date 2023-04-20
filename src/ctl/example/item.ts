import { core, h } from "@printf83/bsts";

const convert = (attr: core.IAttr) => {
	attr.class = core.mergeClass(attr.class, "example-item");
	attr.marginBottom ??= 3;
	return attr;
};

export class item extends h.div {
	constructor(); //#1
	constructor(attr: core.IAttr); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: core.IAttr, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg("elem", arg)));
	}
}
export const Item = (AttrOrElem?: core.IAttr | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<item, core.IAttr>(item, AttrOrElem, Elem);

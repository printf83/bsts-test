import { core, h } from "@printf83/bsts";

const convert = (attr: core.IAttr) => {
	attr.class = core.mergeClass(attr.class, "example-item");
	attr.marginBottom ??= 3;
	return attr;
};

export class item extends h.div {
	constructor();
	constructor(attr: core.IAttr);
	constructor(elem: core.IElem);
	constructor(attr: core.IAttr, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg("elem", arg)));
	}
}

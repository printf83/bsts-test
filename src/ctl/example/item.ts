import { core, h } from "@printf83/bsts";

const convert = (attr: core.attr) => {
	attr.class = core.mergeClass(attr.class, "example-item");
	attr.marginBottom ??= 3;
	return attr;
};

export class item extends h.div {
	constructor();
	constructor(attr: core.attr);
	constructor(elem: core.elem | core.elem[]);
	constructor(attr: core.attr, elem: core.elem | core.elem[]);
	constructor(...arg: any[]) {
		super(convert(core.bsConstructor("elem", arg)));
	}
}

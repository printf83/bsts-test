import { core, h, I } from "@printf83/bsts";

type Ul = I.h.ul;

const convert = (attr: Ul) => {
	let tAttr: core.attr = {};

	tAttr.class = "example-ul";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new h.ul(attr);

	return tAttr;
};

export class ul extends h.div {
	constructor();
	constructor(attr: Ul);
	constructor(elem: core.elem | core.elem[]);
	constructor(attr: Ul, elem: core.elem | core.elem[]);
	constructor(...arg: any[]) {
		super(convert(core.bsConstructor<Ul>("elem", arg)));
	}
}

import { core, b, I } from "@printf83/bsts";

const convert = (attr: I.B.Table.Container) => {
	let tAttr: core.IAttr = {};

	tAttr.class = "example-table";
	tAttr.marginBottom ??= 3;

	attr.class = core.mergeClass(attr.class, "small");
	attr.responsiveAttr ??= "bs-title-name";
	attr.responsiveCol ??= "15ch auto";
	attr.responsiveColXs ??= "auto";
	tAttr.elem = new b.table.container(attr);

	return tAttr;
};

export class table extends b.table.responsive {
	constructor();
	constructor(attr: I.B.Table.Container);
	constructor(elem: core.IElem);
	constructor(attr: I.B.Table.Container, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.B.Table.Container>("elem", arg)));
	}
}

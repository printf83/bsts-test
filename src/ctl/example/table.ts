import { core, b } from "@printf83/bsts";

const convert = (attr: b.table.IBsTableContainer) => {
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
	constructor(); //#1
	constructor(attr: b.table.IBsTableContainer); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: b.table.IBsTableContainer, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<b.table.IBsTableContainer>("elem", arg)));
	}
}

export const Table = (AttrOrElem?: b.table.IBsTableContainer | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<table, b.table.IBsTableContainer>(table, AttrOrElem, Elem);

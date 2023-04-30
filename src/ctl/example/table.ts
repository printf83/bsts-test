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
	constructor(); //#1
	constructor(attr: I.B.Table.Container); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: I.B.Table.Container, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<I.B.Table.Container>("elem", arg)));
	}
}

export const Table = (AttrOrElem?: I.B.Table.Container | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<table, I.B.Table.Container>(table, AttrOrElem, Elem);

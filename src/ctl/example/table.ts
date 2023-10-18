// import { Container as TableContainer } from "../../../node_modules/@printf83/bsts/build/types/bootstrap/table/container.js";

import { core, b, I } from "@printf83/bsts";
type TableContainer = I.b.table.container;

const convert = (attr: TableContainer) => {
	let tAttr: core.attr = {};

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
	constructor(attr: TableContainer);
	constructor(elem: core.elem);
	constructor(attr: TableContainer, elem: core.elem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<TableContainer>("elem", arg)));
	}
}

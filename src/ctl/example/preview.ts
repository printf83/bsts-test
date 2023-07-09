import { core, h } from "@printf83/bsts";
import { codeBeautify, codeBeautifyType } from "./_fn";

export interface IBsExampleCode extends core.IAttr {
	type?: codeBeautifyType;
}

const convert = (attr: IBsExampleCode) => {
	attr = core.mergeObject(
		{
			class: "example-preview",
			display: "block",
			overflow: "auto",
			tabindex: 0,
			marginX: 0,
			marginY: 1,
		},
		attr
	);

	attr.elem = new h.code(
		{ class: ["prettyprint", `lang-${attr.type}`], lang: attr.type, border: false },
		attr.elem ? (typeof attr.elem === "string" ? codeBeautify(attr.type, attr.elem) : attr.elem) : ""
	);

	delete attr.type;

	return attr;
};

export class preview extends h.pre {
	constructor();
	constructor(attr: IBsExampleCode);
	constructor(elem: core.IElem);
	constructor(attr: IBsExampleCode, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<IBsExampleCode>("elem", arg)));
	}
}
export const Preview = (AttrOrElem?: IBsExampleCode | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<preview, IBsExampleCode>(preview, AttrOrElem, Elem);

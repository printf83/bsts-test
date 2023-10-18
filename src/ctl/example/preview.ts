import { core, h } from "@printf83/bsts";
import { codeBeautify, codeBeautifyType } from "./_fn.js";

export interface IPreview extends core.attr {
	type?: codeBeautifyType;
}

const convert = (attr: IPreview) => {
	attr = core.mergeObject(
		{
			class: "example-preview",
			display: "block",
			overflow: "auto",
			tabindex: 0,
			marginX: 0,
			marginY: 1,
			border: false,
		},
		attr
	);

	if (attr.elem && typeof attr.elem === "string") {
		attr.elem = new h.code(
			{ class: ["", `lang-${attr.type}`], lang: attr.type, border: false },
			codeBeautify(attr.type, attr.elem)
		);
	} else {
		if (attr.elem) {
			attr.elem = new h.code(
				{ class: ["", `lang-${attr.type}`], lang: attr.type, border: false },
				attr.elem
			);
		} else {
			attr.elem = new h.code(
				{ class: ["", `lang-${attr.type}`], lang: attr.type, border: false },
				""
			);
		}
	}

	delete attr.type;

	return attr;
};

export class preview extends h.pre {
	constructor();
	constructor(attr: IPreview);
	constructor(elem: core.elem | core.elem[]);
	constructor(attr: IPreview, elem: core.elem | core.elem[]);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<IPreview>("elem", arg)));
	}
}

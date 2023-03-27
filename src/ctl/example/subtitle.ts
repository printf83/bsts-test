import { core, h } from "@printf83/bsts";
import { bsConstArg } from "@printf83/bsts/lib/cjs/types/core/bootstrap.js";
import { IAttr, tag, IElem } from "@printf83/bsts/lib/cjs/types/core/tag.js";
import { h as Th } from "@printf83/bsts/lib/cjs/types/html/h.js";

const genIDFromElem = (attr: IAttr) => {
	if (!attr.id) {
		if (typeof attr.elem === "string") {
			attr.id = (attr.elem as string).toLowerCase().replace(/[\W_]+/g, "_");
		} else {
			attr.id = core.UUID();
		}
	}

	return attr.id;
};

const convert = (attr: IAttr) => {
	attr.id = genIDFromElem(attr);
	attr = core.mergeObject({ class: "example-subtitle", marginTop: 5 }, attr);

	if (attr.elem) {
		let strElem: string = "";
		if (typeof attr.elem === "string") {
			strElem = attr.elem;
		} else {
			strElem = `#${attr.id}`;
		}

		let tElem: (string | tag)[] = [];
		if (Array.isArray(attr.elem)) {
			tElem = attr.elem;
		} else {
			tElem = [attr.elem];
		}

		tElem.push(
			new h.a(
				{
					class: "anchor-link",
					href: `#${attr.id}`,
					aria: { label: `Link to this section: ${strElem}` },
				},
				""
			)
		);

		attr.elem = tElem;

		attr = core.mergeObject(
			{
				data: { text: strElem },
			},
			attr
		);
	}

	return attr;
};

export class subtitle extends Th {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(3, bsConstArg("elem", convert, arg));
	}
}

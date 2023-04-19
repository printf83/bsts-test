import { core, h as html, t } from "@printf83/bsts";

const genIDFromElem = (attr: core.IAttr) => {
	if (!attr.id) {
		if (typeof attr.elem === "string") {
			attr.id = (attr.elem as string).toLowerCase().replace(/[\W_]+/g, "_");
		} else {
			attr.id = core.UUID();
		}
	}

	return attr.id;
};

const convert = (attr: core.IAttr) => {
	attr.id = genIDFromElem(attr);
	attr = core.mergeObject({ class: "example-xsubtitle", marginTop: 5, marginBottom: 3 }, attr);

	if (attr.elem) {
		let strElem: string = "";
		if (typeof attr.elem === "string") {
			strElem = attr.elem;
		} else {
			strElem = `#${attr.id}`;
		}

		let tElem: (string | t)[] = [];
		if (Array.isArray(attr.elem)) {
			tElem = attr.elem;
		} else {
			tElem = [attr.elem];
		}

		tElem.push(
			new html.a(
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

export class xsubtitle extends html.h {
	constructor(); //#1
	constructor(attr: core.IAttr); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: core.IAttr, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(4, convert(core.bsConstArg("elem", arg)));
	}
}

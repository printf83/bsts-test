import { core, t, h as html, s } from "@printf83/bsts";
import { anchorOnClick } from "./_fn.js";

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
	attr.id ??= genIDFromElem(attr);
	attr = core.mergeObject({ class: "example-title", marginTop: 5, marginBottom: 3 }, attr);

	if (attr.elem) {
		let strElem: string = "";
		if (typeof attr.elem === "string") {
			strElem = attr.elem;
		} else {
			strElem = `#${attr.id}`;
		}

		let tElem: (number | string | t | s)[] = [];
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
					on: {
						click: anchorOnClick,
					},
				},
				""
			)
		);

		attr.elem = tElem;
	}

	delete attr.id;

	return attr;
};

export class title extends html.h {
	constructor();
	constructor(attr: core.IAttr);
	constructor(elem: core.IElem);
	constructor(attr: core.IAttr, elem: core.IElem);
	constructor(...arg: any[]) {
		super(2, convert(core.bsConstArg("elem", arg)));
	}
}

export const Title = (AttrOrElem?: core.IAttr | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<title, core.IAttr>(title, AttrOrElem, Elem);

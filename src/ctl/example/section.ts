import { core, t, h, s } from "@printf83/bsts";

const genIDFromText = (text: string) => {
	return text.toLowerCase().replace(/[\W_]+/g, "_");
};

const hasClass = (className: string, attrClass: string | undefined | (string | undefined)[]) => {
	if (attrClass) {
		return attrClass.indexOf(className) > -1;
	} else {
		return false;
	}
};
const convert = (attr: core.IAttr) => {
	let tElem: string | number | t | s | (string | number | t | s)[] | undefined = attr.elem;

	if (tElem) {
		if (!Array.isArray(tElem)) {
			tElem = [tElem];
		}
	} else {
		tElem = [];
	}

	//get info from elem

	if (tElem && tElem.length > 0) {
		const firstElem = tElem[0] as t;
		if (firstElem) {
			let titleDeep: undefined | 0 | 1 | 2 = undefined;

			if (hasClass("example-title", firstElem.attr?.class)) {
				titleDeep = 0;
			} else if (hasClass("example-subtitle", firstElem.attr?.class)) {
				titleDeep = 1;
			} else if (hasClass("example-xsubtitle", firstElem.attr?.class)) {
				titleDeep = 2;
			}

			let titleText: string | undefined = undefined;
			if (titleDeep !== undefined) {
				if (typeof firstElem.elem === "string") {
					titleText = firstElem.elem;
				} else {
					if (Array.isArray(firstElem.elem)) {
						if (firstElem.elem.length > 0) {
							if (typeof firstElem.elem[0] === "string") {
								titleText = firstElem.elem[0];
							} else {
								titleDeep = undefined;
							}
						} else {
							titleDeep = undefined;
						}
					} else {
						titleDeep = undefined;
					}
				}
			}

			if (titleDeep !== undefined && titleText !== undefined) {
				attr = core.mergeObject(
					{
						class: "example-section",
						id: genIDFromText(titleText),
						data: {
							title: titleText,
							deep: titleDeep,
						},
					},
					attr
				);
			}
		}
	} else {
		attr = core.mergeObject({ class: "example-section" }, attr);
	}

	return attr;
};

export class section extends h.section {
	constructor();
	constructor(attr: core.IAttr);
	constructor(elem: core.IElem);
	constructor(attr: core.IAttr, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg("elem", arg)));
	}
}

export const Section = (AttrOrElem?: core.IAttr | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<section, core.IAttr>(section, AttrOrElem, Elem);

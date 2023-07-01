import { core, t, h, s } from "@printf83/bsts";
import { title } from "./title.js";
import { subtitle } from "./subtitle.js";
import { xsubtitle } from "./xsubtitle.js";

export type IBsExampleSectionType = "title" | "subtitle" | "xsubtitle";

export interface IBsExampleSection extends core.IAttr {
	type?: IBsExampleSectionType;
	title?: string;
}

const genIDFromTitle = (title?: string) => {
	if (title) {
		return title.toLowerCase().replace(/[\W_]+/g, "_");
	} else {
		return core.UUID();
	}
};

const convert = (attr: IBsExampleSection) => {
	attr.title ??= "Title";
	// let id = attr.id || genIDFromTitle(attr.title);
	attr.id ??= "section-" + genIDFromTitle(attr.title);
	attr.type ??= "title";
	attr.class = core.mergeClass(attr.class, "example-section");

	let titleElem: core.IElem;

	switch (attr.type) {
		case "title":
			titleElem = new title(attr.title);
			break;
		case "subtitle":
			titleElem = new subtitle(attr.title);
			break;
		case "xsubtitle":
			titleElem = new xsubtitle(attr.title);
			break;
		default:
			titleElem = new title(attr.title);
	}

	let tElem: string | number | t | s | (string | number | t | s)[] | undefined = attr.elem;

	if (tElem) {
		if (!Array.isArray(tElem)) {
			tElem = [tElem];
		}
	} else {
		tElem = [];
	}

	tElem.unshift(titleElem);

	attr.elem = tElem;

	delete attr.type;

	return attr;
};

export class section extends h.section {
	constructor();
	constructor(type: IBsExampleSectionType, title: string, elem: core.IElem);
	constructor(attr: IBsExampleSection);
	constructor(elem: core.IElem);
	constructor(attr: IBsExampleSection, elem: core.IElem);
	constructor(...arg: any[]) {
		if (arg.length === 3) {
			super(convert({ type: arg[0], title: arg[1], elem: arg[2] }));
		} else {
			super(convert(core.bsConstArg("elem", arg)));
		}
	}
}

export const Section = (AttrOrElem?: IBsExampleSection | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<section, IBsExampleSection>(section, AttrOrElem, Elem);

import { b, h } from "@printf83/bsts";
import { bsConsNoElemArg } from "@printf83/bsts/lib/cjs/types/core/bootstrap.js";
import { IAttr } from "@printf83/bsts/lib/cjs/types/core/tag.js";
import { div } from "@printf83/bsts/lib/cjs/types/html/div.js";
import { preview } from "./preview.js";

function itemCodeCopy(e: Event) {
	e.stopPropagation();
	e.preventDefault();

	return false;
}

export interface IAttrBSExampleCodepreview extends IAttr {
	code?: string;
	type?: "js" | "ts" | "css" | "html";
}

const convert = (attr: IAttrBSExampleCodepreview): IAttr => {
	if (attr.code) {
		attr.elem = [
			new b.card.container({ class: "example", marginY: 3, bgColor: "body-tertiary", border: false }, [
				new b.card.body([
					new h.span(
						{ position: "absolute", end: 0, marginEnd: 3 },
						new b.tooltip(
							{ content: "Copy to clipboard" },
							new h.a(
								{ href: "#", color: "secondary", on: { click: itemCodeCopy } },
								b.icon.reg("clipboard")
							)
						)
					),
					new preview({ type: attr.type ? attr.type : "js" }, attr.code),
				]),
			]),
		];
	}

	delete attr.code;
	delete attr.type;

	return attr;
};

export class codepreview extends div {
	constructor();
	constructor(attr: IAttrBSExampleCodepreview);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg<IAttrBSExampleCodepreview>(convert, arg));
	}
}

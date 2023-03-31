import { core, b, h } from "@printf83/bsts";
import { preview } from "./preview.js";

function itemCodeCopy(e: Event) {
	e.stopPropagation();
	e.preventDefault();

	return false;
}

export interface IAttrBSExampleCodepreview extends core.IAttr {
	code?: string;
	type?: "js" | "ts" | "css" | "html";
}

const convert = (attr: IAttrBSExampleCodepreview): core.IAttr => {
	if (attr.code) {
		attr.elem = [
			new b.card.container({ class: "example-preview", marginY: 3, bgColor: "body-tertiary" }, [
				new b.card.body({ padding: 4 }, [
					new h.span(
						{ position: "absolute", end: 0, marginEnd: 3 },
						new b.tooltip(
							{ content: "Copy to clipboard" },
							new h.a(
								{ href: "#", color: "secondary", on: { click: itemCodeCopy } },
								b.icon.bi("clipboard")
							)
						)
					),
					new preview({ type: attr.type ? attr.type : "js", marginEnd: 4 }, attr.code),
				]),
			]),
		];
	}

	delete attr.code;
	delete attr.type;

	return attr;
};

export class codepreview extends h.div {
	constructor();
	constructor(attr: IAttrBSExampleCodepreview);
	constructor(...arg: any[]) {
		super(core.bsConsNoElemArg<IAttrBSExampleCodepreview>(convert, arg));
	}
}

import { core, b, h } from "@printf83/bsts";
import { preview } from "./preview.js";

function successCopyCode(iconElem?: HTMLElement) {
	if (iconElem) {
		iconElem.classList.remove("bi-clipboard");
		iconElem.classList.add("bi-check2");
		iconElem.classList.add("text-success");

		setTimeout(
			(iconElem) => {
				iconElem.classList.remove("text-success");
				iconElem.classList.remove("bi-check2");
				iconElem.classList.add("bi-clipboard");
			},
			1000,
			iconElem
		);
	}
}

function failCopyCode(iconElem?: HTMLElement) {
	if (iconElem) {
		iconElem.classList.remove("bi-clipboard");
		iconElem.classList.add("bi-exclamation-triangle");
		iconElem.classList.add("text-danger");

		setTimeout(
			(iconElem) => {
				iconElem.classList.remove("text-danger");
				iconElem.classList.remove("bi-exclamation-triangle");
				iconElem.classList.add("bi-clipboard");
			},
			1000,
			iconElem
		);
	}
}

function itemCodeCopy(e: Event) {
	e.stopPropagation();
	e.stopImmediatePropagation();

	const target = e.target as HTMLElement;
	const iconElem = target.closest(".bi") as HTMLElement;
	const cardBody = target.closest(".card-body");

	if (cardBody) {
		const text = cardBody.getElementsByTagName("pre")[0].innerText;

		navigator.clipboard.writeText(text).then(
			() => {
				successCopyCode(iconElem);
			},
			() => {
				failCopyCode(iconElem);
			}
		);
	} else {
		failCopyCode(iconElem);
	}

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
						{ position: "absolute", end: 0, marginEnd: 4 },
						new b.tooltip(
							{ content: "Copy to clipboard" },
							new h.a(
								{
									href: "#",
									color: "secondary",
									class: "primary-on-hover",
									on: { click: itemCodeCopy },
								},
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

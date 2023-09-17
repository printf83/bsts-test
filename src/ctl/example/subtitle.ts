import { core, h as html, t, s, b, h } from "@printf83/bsts";
import { anchorOnClick } from "./_fn.js";

export interface ISubTitle extends core.IAttr {
	moreInfo?: string;
}

const genIDFromElem = (attr: ISubTitle) => {
	if (!attr.id) {
		if (typeof attr.elem === "string") {
			attr.id = (attr.elem as string).toLowerCase().replace(/[\W_]+/g, "_");
		} else {
			attr.id = core.UUID();
		}
	}

	return attr.id;
};

const convert = (attr: ISubTitle) => {
	attr.id ??= genIDFromElem(attr);
	attr = core.mergeObject({ class: "example-subtitle", marginTop: 5, marginBottom: 3 }, attr);

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

		if (attr.moreInfo) {
			tElem.push(
				new h.a(
					{
						class: "btn btn-sm",
						focusRing: true,
						textColor: "secondary",
						borderColor: "secondary",
						textColorHover: "primary",
						borderColorHover: "primary",

						float: "end",
						data: { value: attr.moreInfo },
						aria: { label: `Learn more about this section: ${strElem}` },
						on: {
							click: (e: Event) => {
								const target = e.currentTarget as HTMLElement;
								const value = target.getAttribute("data-value");
								document.dispatchEvent(
									new CustomEvent("bs.navigate", {
										detail: value,
									})
								);
							},
						},
					},
					new b.label({ icon: "journal-code" }, "Learn more")
				)
			);
		}

		attr.elem = tElem;
	}

	delete attr.id;

	return attr;
};

export class subtitle extends html.h {
	constructor();
	constructor(attr: ISubTitle);
	constructor(elem: core.IElem);
	constructor(attr: ISubTitle, elem: core.IElem);
	constructor(...arg: any[]) {
		super(3, convert(core.bsConstArg("elem", arg)));
	}
}

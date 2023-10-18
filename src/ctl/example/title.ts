import { core, t, h as html, s, b, h } from "@printf83/bsts";
import { anchorOnClick } from "./_fn.js";

export interface ITitle extends core.attr {
	moreInfo?: string;
}

const genIDFromElem = (attr: ITitle) => {
	if (!attr.id) {
		if (typeof attr.elem === "string") {
			attr.id = (attr.elem as string).toLowerCase().replace(/[\W_]+/g, "_");
		} else {
			attr.id = core.UUID();
		}
	}

	return attr.id;
};

const convert = (attr: ITitle) => {
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
					new b.label(
						{ icon: "journal-code", labelDisplay: ["none", "md-inline"] },
						"Learn more"
					)
				)
			);
		}

		attr.elem = tElem;
	}

	delete attr.id;

	return attr;
};

export class title extends html.h2 {
	constructor();
	constructor(attr: ITitle);
	constructor(elem: core.elem | core.elem[]);
	constructor(attr: ITitle, elem: core.elem | core.elem[]);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg("elem", arg)));
	}
}

import { core, b, h } from "@printf83/bsts";
import { preview } from "./preview.js";

function successCopyCode(iconElem?: Element) {
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

function failCopyCode(iconElem?: Element) {
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

	const target = e.target as Element;
	const iconElem = target.closest(".bi") as Element;
	const card = target.closest(".card");

	if (card) {
		const text = card.getElementsByTagName("pre")[0]?.innerText;
		if (text) {
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
	} else {
		failCopyCode(iconElem);
	}

	return false;
}

export interface ICodePreview extends core.attr {
	code?: string;
	type?: "js" | "ts" | "css" | "html";
	title?: string;
	source?: string;
}

export class codepreview extends h.div {
	constructor();
	constructor(attr: ICodePreview);
	constructor(...arg: any[]) {
		super(core.bsConstructorNoElement<ICodePreview>(arg));
	}

	convert(attr: ICodePreview): core.attr {
		if (attr.code) {
			const copyButton = new h.a(
				{
					textColor: "body-secondary",
					textColorHover: "primary",
					title: "Copy to clipboard",
					on: { click: itemCodeCopy },
				},
				b.icon.bi("clipboard")
			);

			const cardTitle = attr.title
				? new b.card.header(
						{
							padding: 0,
							display: "flex",
							justifyContent: "between",
							verticalAlign: "middle",
							bgColor: "body-tertiary",
						},
						[
							new h.div(
								{
									paddingY: 2,
									paddingX: 4,
									flex: "fill",
								},
								attr.source
									? new h.a(
											{
												textDecoration: "none",
												href: attr.source,
												target: "_blank",
												textColor: "body-secondary",
												textColorHover: "primary",
												monospace: true,
											},
											new h.small(attr.title)
									  )
									: new h.small(
											{ monospace: true, textColor: "body-secondary" },
											attr.title
									  )
							),
							new h.div(
								{ display: "flex" },
								new h.div({ paddingTop: 2, paddingX: 4 }, copyButton)
							),
						]
				  )
				: "";
			const cardBody = new b.card.body({ padding: 4 }, [
				!attr.title
					? new h.span({ position: "absolute", end: 0, marginEnd: 4 }, copyButton)
					: "",
				new preview({ type: attr.type ? attr.type : "js", marginEnd: 4 }, attr.code),
			]);

			attr.elem = [
				new b.card.container(
					{
						class: "example-preview",
						marginY: 3,
						bgColor: "body-tertiary",
						border: true,
						borderWidth: 1,
					},
					[cardTitle, cardBody]
				),
			];
		}

		delete attr.code;
		delete attr.type;
		delete attr.title;
		delete attr.source;

		return super.convert(attr);
	}
}

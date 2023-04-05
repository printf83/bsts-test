import { b, h, t, core } from "@printf83/bsts";
import { preview } from "./preview.js";

export interface IAttrBSExampleExt {
	name?: string;
	output?: Function;
	strOutput?: string;
}

export interface IAttrBSExampleContainer extends core.IAttr {
	lib?: string | string[];
	css?: string;
	extention?: IAttrBSExampleExt | IAttrBSExampleExt[];
	output?: Function;
	manager?: Function;
	strOutput?: string;
	strManager?: string;
	scriptConverter?: Function;

	showOutput?: boolean;
	showScript?: boolean;
	showManager?: boolean;
	showHTML?: boolean;

	previewAttr?: core.IAttr;
}

declare var PR: {
	prettyPrint: () => void;
};

const getOutputHTML = (target: HTMLElement): void => {
	let html = target.closest(".example-code")?.getElementsByClassName("example-output")[0].innerHTML;
	core.replaceChild(target, new preview({ type: "html" }, html ? html : ""));

	setTimeout(() => {
		PR.prettyPrint();
	}, 300);
};

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
	const listGroupItem = target.closest(".list-group-item");

	if (listGroupItem) {
		const nextListGroupItem = listGroupItem.nextElementSibling;
		if (nextListGroupItem) {
			const text = nextListGroupItem.getElementsByTagName("pre")[0].innerText;

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

	return;
}

const itemCode = (
	header: boolean,
	collapseable: boolean,
	allowcopy: boolean,
	title: string,
	elem: string | t | (string | t)[],
	onshow?: (target: HTMLElement) => void
): b.list.item[] => {
	let id = core.UUID();

	let res: b.list.item[] = [];

	if (header) {
		res.push(
			new b.list.item(
				{
					padding: 0,
					bgColor: "body-tertiary",
				},
				new h.div(
					{
						display: "flex",
						justifyContent: "between",
						verticalAlign: "middle",
					},
					[
						new h.div(
							{
								paddingY: 2,
								paddingX: 4,
								flex: "fill",
								control: collapseable ? id : undefined,
								data: {
									"bs-toggle": collapseable ? "collapse" : undefined,
									"bs-target": collapseable ? `#${id}` : undefined,
								},
								aria: {
									expended: collapseable ? "false" : undefined,
								},
							},
							new h.small(
								{
									monospace: true,
									// textTransform: "uppercase",
									textColor: "body-secondary",
								},
								title
							)
						),

						allowcopy
							? new h.div(
									{ display: "flex" },
									new h.div(
										{ paddingTop: 2, paddingX: 4 },
										new b.tooltip(
											{
												content: "Copy to clipboard",
											},
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
									)
							  )
							: "",
					]
				)
			)
		);
	} else {
		if (allowcopy) {
			if (!Array.isArray(elem)) {
				elem = [elem];
			}

			elem.unshift(
				new h.span(
					{ position: "absolute", end: 0, marginEnd: 3 },
					new b.tooltip(
						{ content: "Copy to clipboard" },
						new h.a(
							{ href: "#", color: "secondary", class: "primary-on-hover", on: { click: itemCodeCopy } },
							b.icon.bi("clipboard")
						)
					)
				)
			);
		}
	}

	res.push(
		new b.list.item(
			{
				bgColor: "body-tertiary",
				paddingX: 4,
				class: [collapseable ? "collapse" : undefined],
				id: collapseable ? id : undefined,
				data: { loaded: onshow ? "false" : undefined },
				on: {
					"show.bs.collapse": onshow
						? (e) => {
								let target = e.target as HTMLElement;
								if (target.getAttribute("data-loaded") !== "true") {
									target.setAttribute("data-loaded", "true");
									onshow(target);
								}
						  }
						: undefined,
				},
			},
			elem
		)
	);

	return res;
};

const itemOutput = (previewAttr: core.IAttr | undefined, str: string) => {
	if (previewAttr) {
		return new b.list.item(
			core.mergeObject({ padding: 4 }, previewAttr),
			new h.div({ class: `example-output` }, str)
		);
	} else {
		return new b.list.item({ padding: 4 }, new h.div({ class: `example-output` }, str));
	}
};

const convert = (attr: IAttrBSExampleContainer) => {
	let id = core.UUID();

	attr.showOutput = attr.showOutput === undefined ? true : attr.showOutput;
	attr.showScript = attr.showScript === undefined ? true : attr.showScript;
	attr.showHTML = attr.showHTML === undefined ? true : attr.showHTML;
	attr.showManager = attr.showManager === undefined ? true : attr.showManager;
	attr.scriptConverter ??= (str: string) => {
		return str
			.replace(/_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__\./gm, "")
			.replace(/_ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__\./gm, "e.");
	};

	let e: t[] = [];

	if (attr.output && attr.showOutput) {
		if (attr.manager) {
			e.push(itemOutput(attr.previewAttr, attr.manager(attr.output())));
		} else {
			e.push(itemOutput(attr.previewAttr, attr.output()));
		}
	}

	if (attr.output && attr.showOutput && attr.showHTML) {
		e.push(...itemCode(e.length > 0, true, false, "HTML", "Loading...", getOutputHTML));
	}

	if (attr.css) {
		e.push(...itemCode(e.length > 0, true, true, "CSS", new preview({ type: "css" }, attr.css)));
	}

	if (attr.extention) {
		let f: IAttrBSExampleExt[] = [];
		if (Array.isArray(attr.extention)) {
			f = attr.extention;
		} else {
			f = [attr.extention];
		}

		f.forEach((i) => {
			if (i && i.name && (i.output || i.strOutput)) {
				e.push(
					...itemCode(
						e.length > 0,
						true,
						true,
						i.name,
						new preview(
							{ type: i.strOutput ? "ts" : "js" },
							i.strOutput
								? i.strOutput
								: attr.scriptConverter
								? attr.scriptConverter(i.output!.toString())
								: i.output!.toString()
						)
					)
				);
			}
		});
	}

	if ((attr.output || attr.strOutput) && attr.showScript && (attr.manager || attr.strManager) && attr.showManager) {
		e.push(
			...itemCode(
				e.length > 0,
				true,
				true,
				"MANAGER",
				new preview(
					{ type: attr.strManager ? "ts" : "js" },
					attr.strManager
						? attr.strManager
						: attr.scriptConverter
						? attr.scriptConverter(attr.manager!.toString())
						: attr.manager!.toString()
				)
			)
		);
	}

	if ((attr.output || attr.strOutput) && attr.showScript) {
		e.push(
			...itemCode(
				e.length > 0,
				false,
				true,
				"SOURCE",
				new preview(
					{ type: attr.strOutput ? "ts" : "js" },
					attr.strOutput
						? attr.strOutput
						: attr.scriptConverter
						? attr.scriptConverter(attr.output!.toString())
						: attr.output!.toString()
				)
			)
		);
	}

	attr.elem = [
		new b.card.container(
			{ id: id, class: "example-code", marginY: 3 },
			new b.card.body({ padding: 0 }, [new b.list.container({ flush: true, rounded: 2 }, e)])
		),
	];

	delete attr.lib;
	delete attr.css;
	delete attr.extention;
	delete attr.manager;
	delete attr.strManager;
	delete attr.output;
	delete attr.scriptConverter;
	delete attr.strOutput;

	delete attr.showHTML;
	delete attr.showScript;
	delete attr.showOutput;
	delete attr.showManager;

	delete attr.previewAttr;

	return attr;
};

export class code extends h.div {
	constructor();
	constructor(attr: IAttrBSExampleContainer);
	constructor(...arg: any[]) {
		super(core.bsConsNoElemArg<IAttrBSExampleContainer>(convert, arg));
	}
}

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
	PR.prettyPrint();
};

function itemCodeCopy(e: Event) {
	e.stopPropagation();
	e.preventDefault();

	return false;
}

const itemCode = (
	header: boolean,
	collapseable: boolean,
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
					display: "flex",
					verticalAlign: "middle",
					justifyContent: "between",
					paddingX: 4,
					bgColor: "body-tertiary",
					control: collapseable ? id : undefined,
					data: {
						"bs-toggle": collapseable ? "collapse" : undefined,
						"bs-target": collapseable ? `#${id}` : undefined,
					},
					aria: {
						expended: collapseable ? "false" : undefined,
					},
				},
				[
					new h.span(
						new h.small(
							{
								monospace: true,
								textTransform: "uppercase",
								textColor: "body-secondary",
							},
							title
						)
					),

					!collapseable
						? new b.tooltip(
								{ content: "Copy to clipboard" },
								new h.a(
									{ href: "#", color: "secondary", on: { click: itemCodeCopy } },
									b.icon.reg("clipboard")
								)
						  )
						: "",
				]
			)
		);
	} else {
		if (!collapseable) {
			if (!Array.isArray(elem)) {
				elem = [elem];
			}

			elem.unshift(
				new h.span(
					{ position: "absolute", end: 0, marginEnd: 3 },
					new b.tooltip(
						{ content: "Copy to clipboard" },
						new h.a({ href: "#", color: "secondary", on: { click: itemCodeCopy } }, b.icon.reg("clipboard"))
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
								if (target.getAttribute("data-loaded") === "false") {
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
		return str.replace(/_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__\./gm, "");
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
		e.push(...itemCode(e.length > 0, true, "HTML", "Loading...", getOutputHTML));
	}

	if (attr.css) {
		e.push(...itemCode(e.length > 0, true, "CSS", new preview({ type: "css" }, attr.css)));
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
						i.name,
						i.strOutput
							? i.strOutput
							: attr.scriptConverter
							? attr.scriptConverter(i.output!.toString())
							: i.output!.toString()
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
				"Manager",
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
				"Source",
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

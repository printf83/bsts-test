import { b, h, t, core } from "@printf83/bsts";
import { preview } from "./preview.js";
import {
	ICodePen,
	codeBeautify,
	codePen,
	getCSSBaseOnSource,
	getLibBaseOnSource,
	isRequiredCoreInit,
	replaceEConsole,
} from "./_fn.js";

const BSTSCDN = "https://cdn.jsdelivr.net/npm/@printf83/bsts@0.1.104/+esm";
const BSCDNCSS = [
	"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
	"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css",
	"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
];
const BSCDNJS = ["https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"];

export interface IBsExampleExt {
	name?: string;
	output?: Function;
	strOutput?: string;
}

export interface IBsExampleContainer extends core.IAttr {
	lib?: string | string[];
	css?: string;
	extention?: IBsExampleExt | IBsExampleExt[];
	output?: Function;
	manager?: Function;
	strOutput?: string;
	strManager?: string;
	scriptConverter?: Function;

	showCodepen?: boolean;
	showConsole?: boolean;
	showViewport?: boolean;
	showOutput?: boolean;
	showScript?: boolean;
	showManager?: boolean;
	showHTML?: boolean;

	previewAttr?: core.IAttr;
	outputAttr?: core.IAttr;
}

declare var PR: {
	prettyPrint: () => void;
};

const getOutputHTML = (target: Element): void => {
	let html = target.closest(".example-code")?.getElementsByClassName("example-output")[0].innerHTML;
	core.replaceChild(target, new preview({ type: "html" }, html ? html : ""));

	setTimeout(() => {
		PR.prettyPrint();
	}, 300);
};

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

function successClearConsoleLog(iconElem?: Element) {
	if (iconElem) {
		iconElem.classList.remove("bi-trash3");
		iconElem.classList.add("bi-check2");
		iconElem.classList.add("text-success");

		setTimeout(
			(iconElem) => {
				iconElem.classList.remove("text-success");
				iconElem.classList.remove("bi-check2");
				iconElem.classList.add("bi-trash3");
			},
			1000,
			iconElem
		);
	}
}

function clearConsoleLog(e: Event) {
	e.stopPropagation();
	e.stopImmediatePropagation();

	const target = e.target as Element;
	const iconElem = target.closest(".bi") as Element;
	const listGroupItem = target.closest(".list-group-item");

	if (listGroupItem) {
		const nextListGroupItem = listGroupItem.nextElementSibling;
		if (nextListGroupItem) {
			const exampleConsole = nextListGroupItem.getElementsByClassName("example-console")[0];
			core.removeChildElement(exampleConsole);
			successClearConsoleLog(iconElem);
		}
	}

	return;
}

function addConsoleLog(elem: Element, title: string, msg: string, color?: core.bootstrapType.textColor) {
	const exampleConsole = elem.getElementsByClassName("example-console")[0];
	if (exampleConsole) {
		//add log
		const n = new Date();
		const hour = n.getHours();
		const minute = n.getMinutes();
		const second = n.getSeconds();
		const strNow = `${(hour >= 12 ? hour - 12 : hour === 0 ? 12 : hour).toString().padStart(2, "0")}:${minute
			.toString()
			.padStart(2, "0")}:${second.toString().padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`;
		core.prependChild(
			exampleConsole,
			new h.div(
				{
					display: "flex",
					flex: ["column", "md-row"],
					textColor: "light",
					gap: [0, "md-2"],
					marginBottom: [3, "md-0"],
				},
				[
					new h.span({ textColor: "secondary", textWrap: false }, `[${strNow}]`),
					new h.span({ textColor: color }, `{{b::${title}}}`),
					new h.span(`${msg}`),
				]
			)
		);

		//show notification
		const listGroupItem = exampleConsole.closest(".list-group-item");
		if (listGroupItem) {
			if (!listGroupItem.classList.contains("show")) {
				const codeContainer = listGroupItem.closest(".example-code");
				if (codeContainer) {
					const noti = codeContainer.getElementsByClassName("example-console-notification")[0];
					if (noti) {
						const hash = core.UUID();

						noti.setAttribute("bs-hash", hash);
						noti.classList.add("active");
						setTimeout(
							(noti: Element, hash: string) => {
								if (noti.getAttribute("bs-hash") === hash) {
									noti.classList.remove("active");
								}
							},
							5000,
							noti,
							hash
						);
					}
				}
			}
		}
	}
}

const itemCode = (
	header: boolean,
	collapseable: boolean,
	allowcopy: boolean,
	title: core.IElem,
	elem: core.IElem,
	onshow?: (target: Element) => void,
	onedit?: (event: Event) => void
): b.list.item[] => {
	let id = core.UUID();

	let res: b.list.item[] = [];

	if (header) {
		res.push(
			new b.list.item(
				{
					padding: 0,
					bgColor: "body-tertiary",
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
							controlfor: collapseable ? id : undefined,
							data: {
								"bs-toggle": collapseable ? "collapse" : undefined,
								"bs-target": collapseable ? `#${id}` : undefined,
							},
							aria: {
								expended: collapseable ? "false" : undefined,
							},
							monospace: true,
							textColor: "body-secondary",
						},
						new h.small(title)
					),

					onedit
						? new h.div(
								{ display: "flex" },
								new h.div(
									{ paddingTop: 2, paddingStart: 4, paddingEnd: allowcopy ? 2 : 4 },
									new b.tooltip(
										{
											content: "Edit on CodePen",
											trigger: "hover",
										},
										new h.a(
											{
												color: "secondary",
												class: "primary-on-hover",
												on: { click: onedit },
											},
											b.icon.bi("lightning-charge-fill")
										)
									)
								)
						  )
						: "",

					allowcopy
						? new h.div(
								{ display: "flex" },
								new h.div(
									{ paddingTop: 2, paddingEnd: 4, paddingStart: onedit ? 2 : 4 },
									new b.tooltip(
										{
											content: "Copy to clipboard",
											trigger: "hover",
										},
										new h.a(
											{
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

					onshow
						? new h.div(
								{ display: "flex" },
								new h.div(
									{ paddingTop: 2, paddingX: 4 },
									new b.tooltip(
										{
											content: "Refresh code",
											trigger: "hover",
										},
										new h.a(
											{
												color: "secondary",
												class: "primary-on-hover",
												on: {
													click: (e) => {
														const target = e.target as Element;
														const iconElem = target.closest(".bi") as Element;
														const container = target.closest(".list-group-item")
															?.nextSibling as Element;

														container.setAttribute("data-loaded", "true");
														onshow(container);

														if (iconElem) {
															iconElem.classList.remove("arrow-clockwise");
															iconElem.classList.add("bi-check2");
															iconElem.classList.add("text-success");

															setTimeout(
																(iconElem) => {
																	iconElem.classList.remove("text-success");
																	iconElem.classList.remove("bi-check2");
																	iconElem.classList.add("arrow-clockwise");
																},
																1000,
																iconElem
															);
														}
													},
												},
											},
											b.icon.bi("arrow-clockwise")
										)
									)
								)
						  )
						: "",
				]
			)
		);
	} else {
		if (allowcopy || onedit) {
			if (!Array.isArray(elem)) {
				elem = [elem];
			}

			elem.unshift(
				new h.div({ position: "absolute", end: 0, marginEnd: 3 }, [
					onedit
						? new b.tooltip(
								{
									marginEnd: allowcopy ? 2 : 0,
									content: "Edit on CodePen",
									trigger: "hover",
								},
								new h.a(
									{
										href: "#",
										color: "secondary",
										class: "primary-on-hover",
										on: { click: onedit },
									},
									b.icon.bi("lightning-charge-fill")
								)
						  )
						: "",
					allowcopy
						? new b.tooltip(
								{ content: "Copy to clipboard", trigger: "hover" },
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
						: "",
				])
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
								const target = e.target as Element;
								if (target.getAttribute("data-loaded") !== "true") {
									target.setAttribute("data-loaded", "true");
									onshow(target);
								}
						  }
						: undefined,
				},
			},
			new h.div({ class: "example-preview-container" }, elem)
		)
	);

	return res;
};

const itemOutput = (previewAttr: core.IAttr | undefined, outputAttr: core.IAttr | undefined, str: string) => {
	if (previewAttr) {
		if (outputAttr) {
			return new b.list.item(
				core.mergeObject({ padding: 4 }, previewAttr),
				new h.div(core.mergeObject({ class: `example-output` }, outputAttr), str)
			);
		} else {
			return new b.list.item(
				core.mergeObject({ padding: 4 }, previewAttr),
				new h.div({ class: `example-output` }, str)
			);
		}
	} else {
		if (outputAttr) {
			return new b.list.item(
				{ padding: 4 },
				new h.div(core.mergeObject({ class: `example-output` }, outputAttr), str)
			);
		} else {
			return new b.list.item({ padding: 4 }, new h.div({ class: `example-output` }, str));
		}
	}
};

const itemConsole = () => {
	let id = core.UUID();

	let res: b.list.item[] = [];

	res.push(
		new b.list.item(
			{
				padding: 0,
				bgColor: "body-tertiary",
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
						controlfor: id,
						data: {
							"bs-toggle": "collapse",
							"bs-target": `#${id}`,
						},
						aria: {
							expended: "false",
						},
						monospace: true,
						textColor: "body-secondary",
					},
					new h.small("CONSOLE")
				),

				new h.div(
					{ display: "flex" },
					new h.div(
						{ paddingTop: 2, paddingEnd: 2 },
						new h.span(
							{ class: "example-console-notification", textColor: "primary" },
							b.icon.bi("asterisk")
						)
					)
				),

				new h.div(
					{ display: "flex" },
					new h.div(
						{ paddingTop: 2, paddingEnd: 4, paddingStart: 2 },
						new b.tooltip(
							{
								content: "Cleanup console",
								trigger: "hover",
							},
							new h.a(
								{
									color: "secondary",
									class: "primary-on-hover",
									on: { click: clearConsoleLog },
								},
								b.icon.bi("trash3")
							)
						)
					)
				),
			]
		)
	);

	res.push(
		new b.list.item(
			{
				bgColor: "dark",
				padding: 4,
				class: "collapse",
				id: id,
			},
			new h.div(
				{
					monospace: true,
					small: true,
					overflow: "hidden",
				},
				new h.div(
					{
						class: "example-console",
						overflowY: "scroll",
						overflowX: "hidden",
						tabindex: 0,
						style: { height: "200px" },
					},
					""
				)
			)
		)
	);

	return res;
};

const itemViewport = () => {
	return new b.list.item(
		{
			padding: 0,
			bgColor: "primary-subtle",
			display: "flex",
			justifyContent: "between",
			textColor: "primary-emphasis",
			verticalAlign: "middle",
			monospace: true,
		},
		[
			new h.span(
				{
					paddingY: 1,
					paddingX: 4,
					flex: "fill",
				},
				new h.small("VIEW PORT")
			),

			new h.span(
				{
					paddingY: 1,
					paddingX: 4,
				},

				[
					new h.small([
						new h.span(
							{
								display: ["inline-block", "sm-none"],
							},
							"XS"
						),
						new h.span({ display: ["sm-inline-block", "md-none", "none"] }, "SM"),
						new h.span({ display: ["md-inline-block", "lg-none", "none"] }, "MD"),
						new h.span({ display: ["lg-inline-block", "xl-none", "none"] }, "LG"),
						new h.span({ display: ["xl-inline-block", "xxl-none", "none"] }, "XL"),
						new h.span({ display: ["xxl-inline-block", "none"] }, "XXL"),
					]),
				]
			),
		]
	);
};

const generateCodePenData = (
	reqInit: boolean,
	strLib: string,
	strCode: string,
	strManager?: string,
	strExtention?: string[],
	strCSS?: string
) => {
	let strCodeResult = "";

	if (strCode !== "") {
		let res = replaceEConsole(strCode);
		strCode = res.strCode;

		let strExt = null;
		if (strExtention && strExtention.length > 0) {
			strExt = strExtention.join("");
		}

		strCodeResult =
			"import { " +
			strLib +
			' } from "' +
			BSTSCDN +
			'";\n\n' +
			(res.consoleFn ? res.consoleFn + "\n\n" : "") +
			(strExt ? strExt + "\n\n" : "") +
			(strManager ? "const manager = " + strManager + ";\n\n" : "") +
			"const source = " +
			strCode +
			';\n\ncore.documentReady(() => {	core.replaceChild(document.getElementById("root"), ' +
			(strManager ? "manager(source())" : "source()") +
			");\n" +
			(reqInit ? "core.init(root);\n" : "") +
			"});";

		// strCodeResult = `
		// 	import { ${strLib} } from "${BSTSCDN}";

		// 	${res.consoleFn ? res.consoleFn : ""}
		// 	${strExt ? strExt : ""}
		// 	${strManager ? "const manager = " + strManager + ";" : ""}
		// 	const source = ${strCode};

		// 	core.documentReady(() => {
		// 		core.replaceChild(document.getElementById("root"), ${strManager ? "manager(source())" : "source()"});
		// 		${reqInit ? "core.init(root);" : ""}
		// 	});`;
	}

	const result = {
		title: "Bootstrap TS",
		description: "Create bootstrap using TS/JS",
		private: false,
		tags: ["bsts", "Bootstrap TS", "@printf83/bsts"],
		editors: "001",
		layout: "top",

		css_external: BSCDNCSS,
		css: strCSS ? codeBeautify("css", strCSS) : undefined,
		head: codeBeautify(
			"html",
			`<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">`
		),

		html: codeBeautify(
			"html",
			`<div class="container p-4">
				<div id="root">
				</div>
			</div>`
		),

		js_external: BSCDNJS,
		js: codeBeautify("js", strCodeResult),
	} satisfies ICodePen;

	console.log(result);
	return result;
};

const convert = (attr: IBsExampleContainer) => {
	let id = core.UUID();

	attr.showOutput ??= true;
	attr.showScript ??= true;
	attr.showHTML ??= true;
	attr.showManager ??= true;
	attr.showCodepen ??= attr.showScript;

	attr.scriptConverter ??= (str: string) => {
		return str
			.replace(/_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__\./gm, "")
			.replace(/_ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__\./gm, "e.");
	};

	let e: t[] = [];

	if (attr.output && attr.showOutput) {
		if (attr.manager) {
			e.push(itemOutput(attr.previewAttr, attr.outputAttr, attr.manager(attr.output())));
		} else {
			e.push(itemOutput(attr.previewAttr, attr.outputAttr, attr.output()));
		}
	}

	if (attr.output && attr.showOutput && attr.showViewport) {
		e.push(itemViewport());
	}

	if (attr.showConsole) {
		e.push(...itemConsole());
	}

	if (attr.output && attr.showOutput && attr.showHTML) {
		e.push(...itemCode(e.length > 0, true, false, "HTML", "Loading...", getOutputHTML));
	}

	let strCSS: string | undefined = undefined;
	if (attr.css) {
		const generatedCSS = getCSSBaseOnSource(attr.outputAttr);

		if (generatedCSS) {
			strCSS = `
			${attr.css}
			
			${generatedCSS}
			`;
		} else {
			strCSS = attr.css;
		}

		e.push(...itemCode(e.length > 0, true, true, "CSS", new preview({ type: "css" }, strCSS)));
	} else {
		strCSS = getCSSBaseOnSource(attr.outputAttr);
		if (strCSS) {
			e.push(...itemCode(e.length > 0, true, true, "CSS", new preview({ type: "css" }, strCSS)));
		}
	}

	let strExtention: string[] = [];
	if (attr.extention) {
		let f: IBsExampleExt[] = [];
		if (Array.isArray(attr.extention)) {
			f = attr.extention;
		} else {
			f = [attr.extention];
		}

		f.forEach((i) => {
			if (i && i.name && (i.output || i.strOutput)) {
				let strCode = i.strOutput
					? i.strOutput
					: attr.scriptConverter
					? attr.scriptConverter(i.output!.toString())
					: i.output!.toString();

				strExtention.push(`
						const ${i.name} = ${strCode};
					`);

				e.push(
					...itemCode(
						e.length > 0,
						true,
						true,

						i.name,
						new preview({ type: i.strOutput ? "ts" : "js" }, strCode)
					)
				);
			}
		});
	}

	let strManager: string | undefined = undefined;
	if ((attr.output || attr.strOutput) && attr.showScript && (attr.manager || attr.strManager) && attr.showManager) {
		strManager = attr.strManager
			? attr.strManager
			: attr.scriptConverter
			? attr.scriptConverter(attr.manager!.toString())
			: attr.manager!.toString();

		e.push(
			...itemCode(
				e.length > 0,
				true,
				true,

				"MANAGER",
				new preview({ type: attr.strManager ? "ts" : "js" }, strManager!)
			)
		);
	}

	if ((attr.output || attr.strOutput) && attr.showScript) {
		let strSource = attr.strOutput
			? attr.strOutput
			: attr.scriptConverter
			? attr.scriptConverter(attr.output!.toString())
			: attr.output!.toString();

		e.push(
			...itemCode(
				e.length > 0,
				false,
				true,

				"SOURCE",
				new preview({ type: attr.strOutput ? "ts" : "js" }, strSource),
				undefined,
				attr.showCodepen
					? () => {
							codePen(
								generateCodePenData(
									isRequiredCoreInit(strSource, strManager, strExtention),
									getLibBaseOnSource(strSource, strManager, strExtention),
									strSource,
									strManager,
									strExtention,
									strCSS
								)
							);
					  }
					: undefined
			)
		);
	}

	attr.elem = [
		new b.card.container(
			{
				id: id,
				class: "example-code",
				marginY: 3,
				on: {
					"bs.console.log": attr.showConsole
						? (event) => {
								const ce = event as CustomEvent<{
									title: string;
									msg: string;
									color?: core.bootstrapType.textColor;
								}>;
								addConsoleLog(ce.target as Element, ce.detail.title, ce.detail.msg, ce.detail.color);
						  }
						: undefined,
				},
			},
			new b.card.body({ padding: 0 }, [new b.list.container({ flush: true, rounded: 2 }, e)])
		),
	];

	delete attr.lib;
	delete attr.css;
	delete attr.extention;
	delete attr.output;
	delete attr.manager;
	delete attr.strOutput;
	delete attr.strManager;
	delete attr.scriptConverter;

	delete attr.showCodepen;
	delete attr.showConsole;
	delete attr.showViewport;
	delete attr.showOutput;
	delete attr.showScript;
	delete attr.showManager;
	delete attr.showHTML;
	delete attr.previewAttr;
	delete attr.outputAttr;

	return attr;
};

export class code extends h.div {
	constructor();
	constructor(attr: IBsExampleContainer);
	constructor(...arg: any[]) {
		super(core.bsConsNoElemArg<IBsExampleContainer>(convert, arg));
	}
}

export const Code = (Attr?: IBsExampleContainer) => core.genTagClass<code, IBsExampleContainer>(code, Attr);

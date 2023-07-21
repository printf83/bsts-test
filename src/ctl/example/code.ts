import { b, h, t, core } from "@printf83/bsts";
import { preview } from "./preview.js";
import {
	ICodePen,
	codeBeautify,
	codePen,
	getCSSBaseOnSource,
	getRootBaseOnSource,
	getLibBaseOnSource,
	replaceEConsole,
	replaceExtention,
	codeBeautifyMinify,
} from "./_fn.js";
import hljs from "highlight.js";

const BSTSCDN = "https://cdn.jsdelivr.net/npm/@printf83/bsts@0.3.1/+esm";
const BSCDNJS = ["https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js"];
const BSCDNCSS = [
	"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
	"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
];

export interface ISourceDB {
	source?: string;
	manager?: string;
	extention?: string[];
}

export interface IExtention {
	name?: string;
	rename?: string;
	output?: Function;
	strOutput?: string;
}

export interface ICode extends core.IAttr {
	db?: ISourceDB;
	strExtention?: string | string[];
	strOutput?: string;
	strManager?: string;

	lib?: string | string[];
	css?: string;
	extention?: IExtention | IExtention[];
	output?: Function;
	manager?: Function;

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
	zoom?: 25 | 50 | 75 | 100 | 125 | 150 | 200;
}

const PR = {
	prettyPrint: () => {
		document.querySelectorAll("pre.example-preview code").forEach((el) => {
			hljs.highlightElement(el as HTMLElement);
		});
	},
};

const getOutputHTML = (target: Element, autoPrettyPrint?: boolean): void => {
	autoPrettyPrint ??= true;

	let html = target
		.closest(".example-code")
		?.getElementsByClassName("example-output")[0]?.innerHTML;

	core.replaceChild(
		target,
		new preview({ type: "html", marginX: 4, marginY: 3 }, html ? html : "")
	);

	if (html && autoPrettyPrint) {
		core.requestIdleCallback(() => {
			PR.prettyPrint();
		}, 300);
	}
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
			try {
				//check if pre tag exists
				let preTag = nextListGroupItem.getElementsByTagName("pre");
				if (!preTag || preTag.length === 0) {
					//try raiseEvent listgroupitem
					nextListGroupItem.dispatchEvent(new CustomEvent("load.bs.collapse"));

					setTimeout(
						(iconElem, preTag, nextListGroupItem) => {
							preTag = nextListGroupItem.getElementsByTagName("pre");
							const text = preTag[0]?.innerText;

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
						},
						300,
						iconElem,
						preTag,
						nextListGroupItem
					);
				} else {
					const text = preTag[0]?.innerText;

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
				}
			} catch (error) {
				failCopyCode(iconElem);
			}
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
			if (exampleConsole) {
				while (exampleConsole.firstChild) {
					exampleConsole.firstChild.remove();
				}
			}

			successClearConsoleLog(iconElem);
		}
	}

	return;
}

function addConsoleLog(
	elem: Element,
	title: string,
	msg: string,
	color?: core.bootstrapType.textColor
) {
	const exampleConsole = elem.getElementsByClassName("example-console")[0];
	if (exampleConsole) {
		//add log
		const n = new Date();
		const hour = n.getHours();
		const minute = n.getMinutes();
		const second = n.getSeconds();
		const strNow = `${(hour >= 12 ? hour - 12 : hour === 0 ? 12 : hour)
			.toString()
			.padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second
			.toString()
			.padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`;
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
					const noti = codeContainer.getElementsByClassName(
						"example-console-notification"
					)[0];
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

const itemCode = (arg: {
	title: core.IElem;
	elem: core.IElem;

	header?: boolean;
	islast?: boolean;
	collapseable?: boolean;
	allowcopy?: boolean;
	allowrefresh?: boolean;

	onedit?: (event: Event) => void;
}): b.list.item[] => {
	arg.header ??= true;
	arg.collapseable ??= true;
	arg.allowcopy ??= true;
	arg.allowrefresh ??= false;
	arg.islast ??= false;

	let id = core.UUID();
	let res: b.list.item[] = [];

	if (arg.header) {
		res.push(
			new b.list.item(
				{
					padding: 0,
					bgColor: "body-tertiary",
					display: "flex",
					justifyContent: "between",
					verticalAlign: "middle",
					rounded: arg.islast && arg.collapseable ? "bottom-2" : undefined,
				},
				[
					new h.div(
						{
							paddingY: 2,
							paddingX: 4,
							flex: "fill",
							controlfor: arg.collapseable ? id : undefined,
							data: {
								"bs-toggle": arg.collapseable ? "collapse" : undefined,
								"bs-target": arg.collapseable ? `#${id}` : undefined,
							},
							aria: {
								expended: arg.collapseable ? "false" : undefined,
							},
							monospace: true,
							textColor: "body-secondary",
						},
						new h.small(arg.title)
					),

					arg.onedit
						? new h.div(
								{ display: "flex" },
								new h.div(
									{
										paddingTop: 2,
										paddingStart: 4,
										paddingEnd: arg.allowcopy || arg.allowrefresh ? 2 : 4,
									},
									new h.a(
										{
											textColor: "body-secondary",
											textColorHover: "primary",
											title: "Edit on CodePen",
											on: { click: arg.onedit },
										},
										b.icon.bi("lightning-charge-fill")
									)
								)
						  )
						: "",

					arg.allowrefresh
						? new h.div(
								{ display: "flex" },
								new h.div(
									{
										paddingTop: 2,
										paddingStart: 4,
										paddingEnd: arg.onedit || arg.allowcopy ? 2 : 4,
									},
									new h.a(
										{
											textColor: "body-secondary",
											textColorHover: "primary",
											title: "Refresh code",
											on: {
												click: (e) => {
													const target = e.target as Element;
													const iconElem = target.closest(
														".bi"
													) as Element;
													const container = target.closest(
														".list-group-item"
													)?.nextSibling as Element;

													container.setAttribute("data-loaded", "true");
													getOutputHTML(container);

													if (iconElem) {
														iconElem.classList.remove(
															"arrow-clockwise"
														);
														iconElem.classList.add("bi-check2");
														iconElem.classList.add("text-success");

														setTimeout(
															(iconElem) => {
																iconElem.classList.remove(
																	"text-success"
																);
																iconElem.classList.remove(
																	"bi-check2"
																);
																iconElem.classList.add(
																	"arrow-clockwise"
																);
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
						: "",

					arg.allowcopy
						? new h.div(
								{ display: "flex" },
								new h.div(
									{
										paddingTop: 2,
										paddingEnd: 4,
										paddingStart: arg.onedit || arg.allowrefresh ? 2 : 4,
									},
									new h.a(
										{
											textColor: "body-secondary",
											textColorHover: "primary",
											title: "Copy to clipboard",
											on: { click: itemCodeCopy },
										},
										b.icon.bi("clipboard")
									)
								)
						  )
						: "",
				]
			)
		);
	} else {
		if (arg.allowcopy || arg.onedit) {
			if (!Array.isArray(arg.elem)) {
				arg.elem = [arg.elem];
			}

			arg.elem.unshift(
				new h.div({ position: "absolute", end: 0, marginEnd: 3 }, [
					arg.onedit
						? new h.a(
								{
									href: "#",
									textColor: "body-secondary",
									textColorHover: "primary",
									marginEnd: arg.allowcopy ? 2 : 0,
									title: "Edit on CodePen",
									on: { click: arg.onedit },
								},
								b.icon.bi("lightning-charge-fill")
						  )
						: "",
					arg.allowcopy
						? new h.a(
								{
									href: "#",
									textColor: "body-secondary",
									textColorHover: "primary",
									title: "Copy to clipboard",
									on: { click: itemCodeCopy },
								},
								b.icon.bi("clipboard")
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
				padding: 0,
				class: [arg.collapseable ? "collapse" : undefined],
				id: arg.collapseable ? id : undefined,
				on: {
					"load.bs.collapse":
						arg.islast && !arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									core.requestIdleCallback(() => {
										core.replaceChild(target, arg.elem);
									}, 300);
							  }
							: !arg.islast && arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									core.requestIdleCallback(() => {
										getOutputHTML(target, false);
									}, 300);
							  }
							: arg.islast && arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									core.requestIdleCallback(() => {
										getOutputHTML(target, false);
									}, 300);
							  }
							: (e) => {
									const target = e.target as Element;
									core.requestIdleCallback(() => {
										core.replaceChild(target, arg.elem);
									}, 300);
							  },
					"show.bs.collapse":
						arg.islast && !arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									(
										target.closest(".list-group-item")
											?.previousSibling as Element
									).classList.remove("rounded-bottom-2");

									core.replaceChild(target, arg.elem);
									core.requestIdleCallback(() => {
										PR.prettyPrint();
									}, 300);
							  }
							: !arg.islast && arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									getOutputHTML(target);
							  }
							: arg.islast && arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									(
										target.closest(".list-group-item")
											?.previousSibling as Element
									).classList.remove("rounded-bottom-2");

									getOutputHTML(target);
							  }
							: (e) => {
									const target = e.target as Element;
									core.replaceChild(target, arg.elem);

									core.requestIdleCallback(() => {
										PR.prettyPrint();
									}, 300);
							  },
					"hidden.bs.collapse": arg.islast
						? (e) => {
								const target = e.target as Element;
								(
									target.closest(".list-group-item")?.previousSibling as Element
								).classList.add("rounded-bottom-2");

								setTimeout(
									(target) => {
										let preTag = target.getElementsByTagName("pre");
										if (preTag && preTag.length > 0) {
											core.replaceWith(
												preTag[0] as Element,
												new h.div(
													{
														class: "example-preview",
														marginX: 4,
														marginY: 3,
													},
													"Loading..."
												)
											);
										}
									},
									300,
									target
								);
						  }
						: (e) => {
								const target = e.target as Element;

								setTimeout(
									(target) => {
										let preTag = target.getElementsByTagName("pre");
										if (preTag && preTag.length > 0) {
											core.replaceWith(
												preTag[0] as Element,
												new h.div(
													{
														class: "example-preview",
														marginX: 4,
														marginY: 3,
													},
													"Loading..."
												)
											);
										}
									},
									300,
									target
								);
						  },
				},
			},
			new h.div({ class: "example-preview", marginX: 4, marginY: 3 }, "Loading...")
		)
	);

	return res;
};

const itemOutput = (
	zoom: 25 | 50 | 75 | 100 | 125 | 150 | 200 | undefined,
	previewAttr: core.IAttr | undefined,
	outputAttr: core.IAttr | undefined,
	str: string
) => {
	if (previewAttr) {
		if (outputAttr) {
			return new b.list.item(
				core.mergeObject({ padding: 4 }, previewAttr),
				new h.div(
					core.mergeObject(
						{ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] },
						outputAttr
					),
					str
				)
			);
		} else {
			return new b.list.item(
				core.mergeObject({ padding: 4 }, previewAttr),
				new h.div({ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] }, str)
			);
		}
	} else {
		if (outputAttr) {
			return new b.list.item(
				{ padding: 4 },
				new h.div(
					core.mergeObject(
						{ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] },
						outputAttr
					),
					str
				)
			);
		} else {
			return new b.list.item(
				{ padding: 4 },
				new h.div({ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] }, str)
			);
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
						new h.a(
							{
								textColor: "body-secondary",
								textColorHover: "primary",
								title: "Cleanup console",
								on: { click: clearConsoleLog },
							},
							b.icon.bi("trash3")
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

const itemZoom = (zoom: number) => {
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
				new h.small("ZOOM")
			),

			new h.span(
				{
					paddingY: 1,
					paddingX: 4,
				},

				[
					new h.small(
						new h.a(
							{
								href: "#",
								textDecoration: "none",
								linkColor: "primary",
								data: { "bs-zoom": zoom },
								on: {
									click: (event) => {
										const target = event.target as Element;
										const exampleOutput = target
											.closest(".card")
											?.querySelector(".example-output");
										if (exampleOutput) {
											const val = target.getAttribute("data-bs-zoom");
											if (val) {
												switch (val) {
													case "25":
														exampleOutput.classList.remove("zoom-25");
														exampleOutput.classList.add("zoom-50");
														target.setAttribute("data-bs-zoom", "50");
														target.innerHTML = "50%";
														break;
													case "50":
														exampleOutput.classList.remove("zoom-50");
														exampleOutput.classList.add("zoom-75");
														target.setAttribute("data-bs-zoom", "75");
														target.innerHTML = "75%";
														break;
													case "75":
														exampleOutput.classList.remove("zoom-75");
														exampleOutput.classList.add("zoom-100");
														target.setAttribute("data-bs-zoom", "100");
														target.innerHTML = "100%";
														break;
													case "100":
														exampleOutput.classList.remove("zoom-100");
														exampleOutput.classList.add("zoom-125");
														target.setAttribute("data-bs-zoom", "125");
														target.innerHTML = "125%";
														break;
													case "125":
														exampleOutput.classList.remove("zoom-125");
														exampleOutput.classList.add("zoom-150");
														target.setAttribute("data-bs-zoom", "150");
														target.innerHTML = "150%";
														break;
													case "150":
														exampleOutput.classList.remove("zoom-150");
														exampleOutput.classList.add("zoom-200");
														target.setAttribute("data-bs-zoom", "200");
														target.innerHTML = "200%";
														break;
													case "200":
														exampleOutput.classList.remove("zoom-200");
														exampleOutput.classList.add("zoom-25");
														target.setAttribute("data-bs-zoom", "25");
														target.innerHTML = "25%";
														break;
												}
											}
										}
									},
								},
							},
							`${zoom}%`
						)
					),
				]
			),
		]
	);
};

const generateCodePenData = (
	strLib: string,
	strCode: string,
	strManager?: string,
	strExtention?: string[],
	strCSS?: string,
	strRoot?: string
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
			'";\n' +
			(res.consoleFn ? res.consoleFn + "\n" : "") +
			(strExt ? strExt + "\n" : "") +
			(strManager ? "const MANAGER = " + strManager + ";\n" : "") +
			"const SOURCE = " +
			strCode +
			';\ncore.documentReady(() => {\ncore.replaceChild(document.getElementById("root"), ' +
			(strManager ? "MANAGER(SOURCE())" : "SOURCE()") +
			");\n});";
	}

	const result = {
		title: "Bootstrap TS",
		description: "Create bootstrap using TS/JS",
		private: false,
		tags: ["bsts", "Bootstrap TS", "@printf83/bsts"],
		editors: "001",
		layout: "top",

		js_external: strCodeResult.indexOf("Chart(") > -1 ? BSCDNJS : undefined,
		css_external: BSCDNCSS,
		css: strCSS ? codeBeautify("css", strCSS) : undefined,
		head: codeBeautify(
			"html",
			`<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">`
		),

		html: codeBeautify(
			"html",
			strRoot ? strRoot : `<div class="p-4"><div id="root"></div></div>`
		),

		js: codeBeautify("js", strCodeResult),
	} satisfies ICodePen;

	return result;
};

const convert = (attr: ICode) => {
	let id = core.UUID();

	attr.showOutput ??= true;
	attr.showScript ??= true;
	attr.showHTML ??= true;
	attr.showManager ??= true;
	attr.showCodepen ??= attr.showScript;

	attr.scriptConverter ??= (str: string) => {
		return str
			.replace(/_printf83_bsts__WEBPACK_IMPORTED_MODULE_\d__\./gm, "")
			.replace(/_ctl_example_index_js__WEBPACK_IMPORTED_MODULE_\d__\./gm, "e.")
			.replace(/chart_js_auto__WEBPACK_IMPORTED_MODULE_\d__\[\"default\"\]\(/gm, "Chart(");
	};

	//setup strCode if db is provided
	if (attr.db) {
		if (attr.extention) {
			if (!Array.isArray(attr.extention)) {
				attr.extention = [attr.extention];
			}

			if (attr.db.extention && attr.db.extention.length === attr.extention.length) {
				attr.extention = attr.extention.map((i, ix) => {
					i.strOutput = attr.db?.extention ? attr.db?.extention[ix] : undefined;
					return i;
				});
			}
		}
		attr.strManager = attr.db.manager;
		attr.strOutput = attr.db.source;
	}

	//start create element
	let e: t[] = [];

	if (attr.output && attr.showOutput) {
		if (attr.manager) {
			e.push(
				itemOutput(
					attr.zoom,
					attr.previewAttr,
					attr.outputAttr,
					attr.manager(attr.output())
				)
			);
		} else {
			e.push(itemOutput(attr.zoom, attr.previewAttr, attr.outputAttr, attr.output()));
		}
	}

	if (attr.output && attr.zoom) {
		e.push(itemZoom(attr.zoom));
	}

	if (attr.output && attr.showOutput && attr.showViewport) {
		e.push(itemViewport());
	}

	if (attr.showConsole) {
		e.push(...itemConsole());
	}

	if (attr.output && attr.showOutput && attr.showHTML) {
		e.push(
			...itemCode({
				header: e.length > 0,
				allowrefresh: true,
				title: "HTML",
				elem: new h.div({ marginX: 4, marginY: 3 }, "Loading..."),
			})
		);
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

		e.push(
			...itemCode({
				header: e.length > 0,
				title: "CSS",
				elem: new preview({ type: "css", marginX: 4, marginY: 3 }, strCSS),
			})
		);
	} else {
		strCSS = getCSSBaseOnSource(attr.outputAttr);
		if (strCSS) {
			e.push(
				...itemCode({
					header: e.length > 0,
					title: "CSS",
					elem: new preview({ type: "css", marginX: 4, marginY: 3 }, strCSS),
				})
			);
		}
	}

	let renameExtention: { find: string; replace: string }[] = [];
	if (attr.extention) {
		let f: IExtention[] = [];
		if (Array.isArray(attr.extention)) {
			f = attr.extention;
		} else {
			f = [attr.extention];
		}

		f.forEach((i) => {
			if (i && i.name && (i.output || i.strOutput)) {
				if (i.name && i.rename) {
					renameExtention.push({ find: i.rename, replace: i.name });
				}
			}
		});
	}

	let strExtention: string[] = [];
	let strExtentionDB: string[] = [];

	if (attr.extention) {
		let f: IExtention[] = [];
		if (Array.isArray(attr.extention)) {
			f = attr.extention;
		} else {
			f = [attr.extention];
		}

		f.forEach((i) => {
			if (i && i.name && (i.output || i.strOutput)) {
				let strCode: string | undefined = undefined;

				if (i.strOutput) {
					strCode = i.strOutput;
				} else {
					strCode = attr.scriptConverter
						? attr.scriptConverter(i.output!.toString())
						: i.output!.toString();
					strCode = replaceExtention(renameExtention, strCode);
					if (!attr.db && strCode) {
						strExtentionDB.push(codeBeautifyMinify("js", strCode));
					}
				}

				strExtention.push(`
						const ${i.name} = ${strCode};`);

				e.push(
					...itemCode({
						header: e.length > 0,
						title: i.name,
						elem: new preview({ type: "js", marginX: 4, marginY: 3 }, strCode!),
					})
				);
			}
		});
	}

	let strManager: string | undefined = undefined;
	if (
		(attr.output || attr.strOutput) &&
		attr.showScript &&
		(attr.manager || attr.strManager) &&
		attr.showManager
	) {
		if (attr.strManager) {
			strManager = attr.strManager;
		} else {
			strManager = attr.scriptConverter
				? attr.scriptConverter(attr.manager!.toString())
				: attr.manager!.toString();
			strManager = replaceExtention(renameExtention, strManager);
		}

		e.push(
			...itemCode({
				header: e.length > 0,
				title: "MANAGER",
				elem: new preview({ type: "js", marginX: 4, marginY: 3 }, strManager!),
			})
		);
	}

	let strSource: string | undefined = undefined;
	let strRoot: string | undefined = undefined;

	if ((attr.output || attr.strOutput) && attr.showScript) {
		strRoot = getRootBaseOnSource(attr.previewAttr, attr.outputAttr);

		if (attr.strOutput) {
			strSource = attr.strOutput;
		} else {
			strSource = attr.scriptConverter
				? attr.scriptConverter(attr.output!.toString())
				: attr.output!.toString();
			strSource = replaceExtention(renameExtention, strSource);
		}

		if (strSource) {
			e.push(
				...itemCode({
					islast: true,
					header: e.length > 0,
					title: "SOURCE",
					elem: new preview({ type: "js", marginX: 4, marginY: 3 }, strSource),
					onedit: attr.showCodepen
						? () => {
								codePen(
									generateCodePenData(
										getLibBaseOnSource(strSource, strManager, strExtention),
										strSource!,
										strManager,
										strExtention,
										strCSS,
										strRoot
									)
								);
						  }
						: undefined,
				})
			);
		}
	}

	if (!attr.db) {
		core.dataManager.set(`code-${id}`, {
			source: strSource ? codeBeautifyMinify("js", strSource) : undefined,
			manager: strManager ? codeBeautifyMinify("js", strManager) : undefined,
			extention: strExtentionDB && strExtentionDB.length > 0 ? strExtentionDB : undefined,
		} satisfies ISourceDB);
	}

	attr.elem = [
		new b.card.container(
			{
				id: id,
				class: "example-code",
				marginY: 3,
				border: false,
				on: {
					"bs.console.log": attr.showConsole
						? (event) => {
								const ce = event as CustomEvent<{
									title: string;
									msg: string;
									color?: core.bootstrapType.textColor;
								}>;
								addConsoleLog(
									ce.target as Element,
									ce.detail.title,
									ce.detail.msg,
									ce.detail.color
								);
						  }
						: undefined,
					destroy: (event: Event) => {
						const target = event.currentTarget as Element;
						const id = target.id;
						core.dataManager.remove(`code-${id}`);
					},
				},
			},
			new b.card.body({ padding: 0 }, [new b.list.container(e)])
		),
	];

	delete attr.db;

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
	delete attr.zoom;
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
	constructor(attr: ICode);
	constructor(...arg: any[]) {
		super(core.bsConsNoElemArg<ICode>(convert, arg));
	}
}

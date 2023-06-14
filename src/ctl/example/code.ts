import { b, h, t, core } from "@printf83/bsts";
import { preview } from "./preview.js";
import {
	ICodePen,
	codeBeautify,
	codePen,
	getCSSBaseOnSource,
	getRootBaseOnSource,
	getLibBaseOnSource,
	isRequiredCoreInit,
	replaceEConsole,
	replaceExtention,
} from "./_fn.js";

const BSTSCDN = "https://cdn.jsdelivr.net/npm/@printf83/bsts@0.1.129/+esm";
const BSCDNCSS = [
	"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
	"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
	"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
];
const BSCDNJS = ["https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"];

export interface IBsExampleExt {
	name?: string;
	rename?: string;
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
	zoom?: 25 | 50 | 75 | 100 | 125 | 150 | 200;
}

declare var PR: {
	prettyPrint: () => void;
};

const getOutputHTML = (target: Element, autoPrettyPrint?: boolean): void => {
	autoPrettyPrint ??= true;

	let html = target.closest(".example-code")?.getElementsByClassName("example-output")[0].innerHTML;
	core.replaceChild(target, new preview({ type: "html" }, html ? html : ""));

	if (autoPrettyPrint) {
		const tmr1 = core.UUID();
		setTimeout(
			(dTmr1) => {
				if (dTmr1 === tmr1) {
					PR.prettyPrint();
				} else {
					console.warn("Timer tmr1 expired");
				}
			},
			300,
			tmr1
		);
	}
};

function successCopyCode(iconElem?: Element) {
	if (iconElem) {
		iconElem.classList.remove("bi-clipboard");
		iconElem.classList.add("bi-check2");
		iconElem.classList.add("text-success");

		const tmr2 = core.UUID();
		setTimeout(
			(iconElem, dTmr2) => {
				if (dTmr2 === tmr2) {
					iconElem.classList.remove("text-success");
					iconElem.classList.remove("bi-check2");
					iconElem.classList.add("bi-clipboard");
				} else {
					console.warn("Timer tmr2 expired");
				}
			},
			1000,
			iconElem,
			tmr2
		);
	}
}

function failCopyCode(iconElem?: Element) {
	if (iconElem) {
		iconElem.classList.remove("bi-clipboard");
		iconElem.classList.add("bi-exclamation-triangle");
		iconElem.classList.add("text-danger");

		const tmr3 = core.UUID();
		setTimeout(
			(iconElem, dTmr3) => {
				if (dTmr3 === tmr3) {
					iconElem.classList.remove("text-danger");
					iconElem.classList.remove("bi-exclamation-triangle");
					iconElem.classList.add("bi-clipboard");
				} else {
					console.warn("Timer tmr3 expired");
				}
			},
			1000,
			iconElem,
			tmr3
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

					const tmr4 = core.UUID();
					setTimeout(
						(dTmr4) => {
							if (dTmr4 === tmr4) {
								preTag = nextListGroupItem.getElementsByTagName("pre");
								const text = preTag[0].innerText;
								navigator.clipboard.writeText(text).then(
									() => {
										successCopyCode(iconElem);
									},
									() => {
										failCopyCode(iconElem);
									}
								);
							} else {
								console.warn("Timer tmr4 expired");
							}
						},
						100,
						tmr4
					);
				} else {
					const text = preTag[0].innerText;

					navigator.clipboard.writeText(text).then(
						() => {
							successCopyCode(iconElem);
						},
						() => {
							failCopyCode(iconElem);
						}
					);
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

		const tmr5 = core.UUID();
		setTimeout(
			(iconElem, dTmr5) => {
				if (dTmr5 === tmr5) {
					iconElem.classList.remove("text-success");
					iconElem.classList.remove("bi-check2");
					iconElem.classList.add("bi-trash3");
				} else {
					console.warn("Timer tmr5 expired");
				}
			},
			1000,
			iconElem,
			tmr5
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

						const tmr6 = core.UUID();
						setTimeout(
							(noti: Element, hash: string, dTmr6) => {
								if (dTmr6 === tmr6) {
									if (noti.getAttribute("bs-hash") === hash) {
										noti.classList.remove("active");
									}
								} else {
									console.warn("Timer tmr6 expired");
								}
							},
							5000,
							noti,
							hash,
							tmr6
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
									new b.tooltip(
										{
											content: "Edit on CodePen",
											trigger: "hover",
										},
										new h.a(
											{
												color: "secondary",
												linkHover: "link",
												on: { click: arg.onedit },
											},
											b.icon.bi("lightning-charge-fill")
										)
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
									new b.tooltip(
										{
											content: "Refresh code",
											trigger: "hover",
										},
										new h.a(
											{
												color: "secondary",
												linkHover: "link",
												on: {
													click: (e) => {
														const target = e.target as Element;
														const iconElem = target.closest(".bi") as Element;
														const container = target.closest(".list-group-item")
															?.nextSibling as Element;

														container.setAttribute("data-loaded", "true");
														getOutputHTML(container);

														if (iconElem) {
															iconElem.classList.remove("arrow-clockwise");
															iconElem.classList.add("bi-check2");
															iconElem.classList.add("text-success");

															const tmr7 = core.UUID();
															setTimeout(
																(iconElem, dTmr7) => {
																	if (dTmr7 === tmr7) {
																		iconElem.classList.remove("text-success");
																		iconElem.classList.remove("bi-check2");
																		iconElem.classList.add("arrow-clockwise");
																	} else {
																		console.warn("Timer tmr7 expired");
																	}
																},
																1000,
																iconElem,
																tmr7
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

					arg.allowcopy
						? new h.div(
								{ display: "flex" },
								new h.div(
									{
										paddingTop: 2,
										paddingEnd: 4,
										paddingStart: arg.onedit || arg.allowrefresh ? 2 : 4,
									},
									new b.tooltip(
										{
											content: "Copy to clipboard",
											trigger: "hover",
										},
										new h.a(
											{
												color: "secondary",
												linkHover: "link",
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
		);
	} else {
		if (arg.allowcopy || arg.onedit) {
			if (!Array.isArray(arg.elem)) {
				arg.elem = [arg.elem];
			}

			arg.elem.unshift(
				new h.div({ position: "absolute", end: 0, marginEnd: 3 }, [
					arg.onedit
						? new b.tooltip(
								{
									marginEnd: arg.allowcopy ? 2 : 0,
									content: "Edit on CodePen",
									trigger: "hover",
								},
								new h.a(
									{
										href: "#",
										color: "secondary",
										linkHover: "link",
										on: { click: arg.onedit },
									},
									b.icon.bi("lightning-charge-fill")
								)
						  )
						: "",
					arg.allowcopy
						? new b.tooltip(
								{ content: "Copy to clipboard", trigger: "hover" },
								new h.a(
									{
										href: "#",
										color: "secondary",
										linkHover: "link",
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
				class: [arg.collapseable ? "collapse" : undefined],
				id: arg.collapseable ? id : undefined,
				on: {
					"load.bs.collapse":
						arg.islast && !arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									core.replaceChild(target, arg.elem);
							  }
							: !arg.islast && arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									getOutputHTML(target, false);
							  }
							: arg.islast && arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									getOutputHTML(target, false);
							  }
							: (e) => {
									const target = e.target as Element;
									core.replaceChild(target, arg.elem);
							  },
					"show.bs.collapse":
						arg.islast && !arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									(target.closest(".list-group-item")?.previousSibling as Element).classList.remove(
										"rounded-bottom-2"
									);

									core.replaceChild(target, arg.elem);

									const tmr8 = core.UUID();
									setTimeout(
										(dTmr8) => {
											if (dTmr8 === tmr8) {
												PR.prettyPrint();
											} else {
												console.warn("Timer tmr1 expired");
											}
										},
										300,
										tmr8
									);
							  }
							: !arg.islast && arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									getOutputHTML(target);
							  }
							: arg.islast && arg.allowrefresh
							? (e) => {
									const target = e.target as Element;
									(target.closest(".list-group-item")?.previousSibling as Element).classList.remove(
										"rounded-bottom-2"
									);
									getOutputHTML(target);
							  }
							: (e) => {
									const target = e.target as Element;
									core.replaceChild(target, arg.elem);

									const tmr9 = core.UUID();
									setTimeout(
										(dTmr9) => {
											if (dTmr9 === tmr9) {
												PR.prettyPrint();
											} else {
												console.warn("Timer tmr9 expired");
											}
										},
										300,
										tmr9
									);
							  },
					"hidden.bs.collapse": arg.islast
						? (e) => {
								const target = e.target as Element;
								(target.closest(".list-group-item")?.previousSibling as Element).classList.add(
									"rounded-bottom-2"
								);
								let preTag = target.getElementsByTagName("pre");
								if (preTag && preTag.length > 0) {
									core.removeElement(preTag![0]);
								}
						  }
						: undefined,
				},
			},
			new h.div({ class: "example-preview" }, "Loading...")
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
					core.mergeObject({ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] }, outputAttr),
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
					core.mergeObject({ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] }, outputAttr),
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
						new b.tooltip(
							{
								content: "Cleanup console",
								trigger: "hover",
							},
							new h.a(
								{
									color: "secondary",
									linkHover: "link",
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
										const exampleOutput = target.closest(".card")?.querySelector(".example-output");
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
	reqInit: boolean,
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
			';\ncore.documentReady(() => {	core.replaceChild(document.getElementById("root"), ' +
			(strManager ? "MANAGER(SOURCE())" : "SOURCE()") +
			");\n" +
			(reqInit ? "core.init(root);\n" : "") +
			"});";
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

		html: codeBeautify("html", strRoot ? strRoot : `<div class="p-4"><div id="root"></div></div>`),

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
			e.push(itemOutput(attr.zoom, attr.previewAttr, attr.outputAttr, attr.manager(attr.output())));
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
				elem: "Loading...",
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
				elem: new preview({ type: "css" }, strCSS),
			})
		);
	} else {
		strCSS = getCSSBaseOnSource(attr.outputAttr);
		if (strCSS) {
			e.push(
				...itemCode({
					header: e.length > 0,
					title: "CSS",
					elem: new preview({ type: "css" }, strCSS),
				})
			);
		}
	}

	let renameExtention: { find: string; replace: string }[] = [];
	if (attr.extention) {
		let f: IBsExampleExt[] = [];
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

				strCode = replaceExtention(renameExtention, strCode);

				strExtention.push(`
						const ${i.name} = ${strCode};`);

				e.push(
					...itemCode({
						header: e.length > 0,
						title: i.name,
						elem: new preview({ type: i.strOutput ? "ts" : "js" }, strCode),
					})
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

		strManager = replaceExtention(renameExtention, strManager);

		e.push(
			...itemCode({
				header: e.length > 0,
				title: "MANAGER",
				elem: new preview({ type: attr.strManager ? "ts" : "js" }, strManager!),
			})
		);
	}

	if ((attr.output || attr.strOutput) && attr.showScript) {
		let strSource = attr.strOutput
			? attr.strOutput
			: attr.scriptConverter
			? attr.scriptConverter(attr.output!.toString())
			: attr.output!.toString();

		let strRoot = getRootBaseOnSource(attr.previewAttr, attr.outputAttr);

		strSource = replaceExtention(renameExtention, strSource);

		e.push(
			...itemCode({
				islast: true,
				header: e.length > 0,
				title: "SOURCE",
				elem: new preview({ type: attr.strOutput ? "ts" : "js" }, strSource),
				onedit: attr.showCodepen
					? () => {
							codePen(
								generateCodePenData(
									isRequiredCoreInit(strSource, strManager, strExtention),
									getLibBaseOnSource(strSource, strManager, strExtention),
									strSource,
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
								addConsoleLog(ce.target as Element, ce.detail.title, ce.detail.msg, ce.detail.color);
						  }
						: undefined,
				},
			},
			new b.card.body({ padding: 0 }, [new b.list.container(e)])
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
	constructor(attr: IBsExampleContainer);
	constructor(...arg: any[]) {
		super(core.bsConsNoElemArg<IBsExampleContainer>(convert, arg));
	}
}

export const Code = (Attr?: IBsExampleContainer) => core.genTagClass<code, IBsExampleContainer>(code, Attr);

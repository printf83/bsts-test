import { b, h, t, core } from "@printf83/bsts";
import { preview } from "./preview.js";
import { ICodePen, codeBeautify, codePen } from "./_fn.js";

const BSTSCDN = "https://cdn.jsdelivr.net/npm/@printf83/bsts@0.1.100/+esm";
const BSCDNCSS = [
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
			elem
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

const attrHasClass = (attr: core.IAttr, className: string | string[]) => {
	if (attr.class) {
		if (Array.isArray(className)) {
			if (Array.isArray(attr.class)) {
				return attr.class.every((r) => {
					if (r) {
						className.indexOf(r) >= 0;
					}
				});
			}

			if (className.length === 1) {
				return attr.class === className[0];
			}
		} else {
			if (Array.isArray(attr.class)) {
				return attr.class.indexOf(className) > -1;
			}
			return attr.class === className;
		}
	}

	return false;
};

const propHasValue = (
	prop: string | boolean | number | (string | boolean | number)[],
	value: string | boolean | number
) => {
	if (prop) {
		if (Array.isArray(prop)) {
			return prop.indexOf(value) > -1;
		} else {
			return prop === value;
		}
	}

	return false;
};

const generateCodePenCSS = (attr: core.IAttr) => {
	if (attr) {
		let result: string[] = [];

		if (attrHasClass(attr, "position-box")) {
			result.push(`
				#root div.position-relative {
					display: block;
					background-color: var(--bs-tertiary-bg);
					height: 200px;
				}
				
				#root div.position-relative div.position-absolute {
					display: inline-block;
					width: 2rem;
					height: 2rem;
					background-color: var(--bs-body-color);
					border-radius: .375rem;
				}
			`);
		}

		if (attrHasClass(attr, "span-box")) {
			result.push(`
				#root span {
					display: inline-block;
					background-color: var(--bs-tertiary-bg);
					border-width: 0.5rem;
					padding: 2.5rem;
				}
			`);
		}

		if (attrHasClass(attr, "flex-box")) {
			result.push(`
				#root div {
					background-color: rgba(var(--bs-primary-rgb), 0.15);
					border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
				}
				#root div .vr {
					background-color: rgba(var(--bs-primary-rgb), 1);
				}
			`);
		}

		if (attrHasClass(attr, "row-10")) {
			result.push(`
				#root div.row {
					min-height: 10rem;
					background-color: rgba(var(--bs-primary-rgb), 0.15);
				}
			`);
		}

		if (attrHasClass(attr, "p-box")) {
			result.push(`
				#root div.p-3 {
					background-color: rgba(var(--bs-primary-rgb), 0.15);
					border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
				}
			`);
		}

		if (attrHasClass(attr, "ratio-box")) {
			result.push(`
				#root div.ratio {
					display: inline-block;
					width: 10rem;
					color: var(--bs-secondary-color);
					background-color: var(--bs-tertiary-bg);
					border: var(--bs-border-width) solid var(--bs-border-color);
				}

				#root div.ratio div {
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`);
		}

		if (attrHasClass(attr, "zindex-box")) {
			result.push(`
				#root div{
					background-color: var(--bs-primary);
					border: 1px solid var(--bs-primary-border-subtle);
					color: var(--bs-primary-text-emphasis);
				}

				#root div span{
					position: absolute;
					right: 5px;
					bottom: 0;
					color:var(--bs-body-bg);
				}

				#root div:nth-child(1) {
					top: 1.5rem;
					left: 1.5rem;
					z-index: 5!important;
				}

				#root div:nth-child(2) {
					top:3rem;
					left: 3rem;
					z-index: 4!important;
				}

				#root div:nth-child(3) {
					top: 4.5rem;
					left: 4.5rem;
					z-index: 3!important;
				}

				#root div:nth-child(4) {
					top: 6rem;
					left: 6rem;
					z-index: 2!important;
				}

				#root div:nth-child(5) {
					top: 7.5rem;
					left: 7.5rem;
					z-index: 1 !important;
				}
			`);
		}

		if (attrHasClass(attr, "col-box")) {
			result.push(`
				
			`);

			result.push(`
				#root div.row:not(:last-child) {
					margin-bottom: 1rem;
				}

				#root .col, #root .col-auto, #root .col-0, #root .col-1, #root .col-2, #root .col-3, #root .col-4, #root .col-5, #root .col-6, #root .col-7, #root .col-8, #root .col-9, #root .col-10, #root .col-11, #root .col-12, #root .col-sm, #root .col-sm-auto, #root .col-sm-0, #root .col-sm-1, #root .col-sm-2, #root .col-sm-3, #root .col-sm-4, #root .col-sm-5, #root .col-sm-6, #root .col-sm-7, #root .col-sm-8, #root .col-sm-9, #root .col-sm-10, #root .col-sm-11, #root .col-sm-12, #root .col-md, #root .col-md-auto, #root .col-md-0, #root .col-md-1, #root .col-md-2, #root .col-md-3, #root .col-md-4, #root .col-md-5, #root .col-md-6, #root .col-md-7, #root .col-md-8, #root .col-md-9, #root .col-md-10, #root .col-md-11, #root .col-md-12, #root .col-lg, #root .col-lg-auto, #root .col-lg-0, #root .col-lg-1, #root .col-lg-2, #root .col-lg-3, #root .col-lg-4, #root .col-lg-5, #root .col-lg-6, #root .col-lg-7, #root .col-lg-8, #root .col-lg-9, #root .col-lg-10, #root .col-lg-11, #root .col-lg-12, #root .col-xl, #root .col-xl-auto, #root .col-xl-0, #root .col-xl-1, #root .col-xl-2, #root .col-xl-3, #root .col-xl-4, #root .col-xl-5, #root .col-xl-6, #root .col-xl-7, #root .col-xl-8, #root .col-xl-9, #root .col-xl-10, #root .col-xl-11, #root .col-xl-12, #root .col-xxl, #root .col-xxl-auto, #root .col-xxl-0, #root .col-xxl-1, #root .col-xxl-2, #root .col-xxl-3, #root .col-xxl-4, #root .col-xxl-5, #root .col-xxl-6, #root .col-xxl-7, #root .col-xxl-8, #root .col-xxl-9, #root .col-xxl-10, #root .col-xxl-11, #root .col-xxl-12 {
					background-color: rgba(var(--bs-primary-rgb), 0.15);
					border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
					padding-top: .75rem;
					padding-bottom: .75rem;
				}
			`);
		}

		if (attr.justifyContent === "around") {
			result.push(`
				#root {
					justify-content: space-around !important;
				}
			`);
		}

		if (attr.display) {
			if (propHasValue(attr.display, "grid")) {
				result.push(`
						#root {
							display: grid !important;
						}
					`);
			}

			if (propHasValue(attr.display, "flex")) {
				result.push(`
						#root {
							display: flex !important;
						}
					`);
			}

			if (propHasValue(attr.display, "md-flex")) {
				result.push(`
						@media (min-width: 768px) {
							#root {
								display: flex !important;
							}
						}
					`);
			}
		}

		if (attr.gap === 1) {
			result.push(`
				#root {
					margin: calc(0.25rem * -1);
				}
				
				#root > *:not(.modal) {
					margin: 0.25rem;
				}
			`);
		}

		if (attr.gap === 2) {
			result.push(`
				#root {
					margin: calc(0.5rem * -1);
				}

				#root > *:not(.modal) {
					margin: 0.5rem;
				}
			`);
		}

		if (attr.gap === 3) {
			result.push(`
				#root {
					margin: calc(1rem * -1);
				}

				#root > *:not(.modal) {
					margin: 1rem;
				}
			`);
		}

		if (attr.gap === 4) {
			result.push(`
				#root {
					margin: calc(1.5rem * -1);
				}

				#root > *:not(.modal) {
					margin: 1.5rem;
				}
			`);
		}

		if (attr.gap === 5) {
			result.push(`
				#root {
					margin: calc(3rem * -1);
				}

				#root > *:not(.modal) {
					margin: 3rem;
				}
			`);
		}

		if (result && result.length > 0) {
			return result
				.filter(function (item, pos) {
					return result.indexOf(item) == pos;
				})
				.join("\n");
		} else {
			return "";
		}
	}
};
const generateCodePenData = (
	outputAttr: core.IAttr | undefined,
	strCode: string,
	strExtention?: string[],
	strCSS?: string
) => {
	let libImported: string[] = ["core"];
	let strCodeResult = "";

	if (strCode !== "") {
		const libListA = [
			" b.",
			" h.",
			" t.",
			" s(",
			" B.",
			" H.",
			" T.",
			" I.",
			" S(",
			"(b.",
			"(h.",
			"(t.",
			"(s(",
			"(B.",
			"(H.",
			"(T.",
			"(I.",
			"(S(",
			"...B.",
		];
		const libListB = [
			"b",
			"h",
			"t",
			"s",
			"B",
			"H",
			"T",
			"I",
			"S",
			"b",
			"h",
			"t",
			"s",
			"B",
			"H",
			"T",
			"I",
			"S",
			"B",
		];

		libListA.forEach((i, ix) => {
			if (strCode.indexOf(i) > -1) {
				libImported.push(libListB[ix]);
			}
		});

		if (libImported) {
			libImported = libImported.filter(function (item, pos) {
				return libImported.indexOf(item) == pos;
			});
		}

		let strConsole = null;
		if (strCode.indexOf("e.console") > -1) {
			strConsole = `const consoleOutput = (_target, title, elem, _color) => { 
				console.log(title, elem);
			};
			`;

			strCode = strCode.replace(/e.console/gm, "consoleOutput");
		}

		let strExt = null;
		if (strExtention && strExtention.length > 0) {
			strExt = strExtention.join("");
		}

		if (strConsole && strExt) {
			strCodeResult = `
			import { ${libImported.join(", ")} } from "${BSTSCDN}";

			${strConsole}
			${strExt}
			const source = ${strCode};

			core.documentReady(() => {
				let root = document.getElementById("root");
				core.replaceChild(root, source());
				core.init(root);
			});`;
		} else if (strConsole && !strExt) {
			strCodeResult = `
			import { ${libImported.join(", ")} } from "${BSTSCDN}";

			${strConsole}
			const source = ${strCode};

			core.documentReady(() => {
				let root = document.getElementById("root");
				core.replaceChild(root, source());
				core.init(root);
			});`;
		} else if (!strConsole && strExt) {
			strCodeResult = `
			import { ${libImported.join(", ")} } from "${BSTSCDN}";

			${strExt}
			const source = ${strCode};

			core.documentReady(() => {
				let root = document.getElementById("root");
				core.replaceChild(root, source());
				core.init(root);
			});`;
		} else {
			strCodeResult = `
			import { ${libImported.join(", ")} } from "${BSTSCDN}";

			const source = ${strCode};

			core.documentReady(() => {
				let root = document.getElementById("root");
				core.replaceChild(root, source());
				core.init(root);
			});`;
		}
	}

	if (outputAttr) {
		if (strCSS) {
			strCSS += `${generateCodePenCSS(outputAttr)}`;
		} else {
			strCSS = generateCodePenCSS(outputAttr);
		}
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

	let strCSS: string = "";
	if (attr.css) {
		strCSS = attr.css;
		e.push(...itemCode(e.length > 0, true, true, "CSS", new preview({ type: "css" }, attr.css)));
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
		let outputAttr = attr.outputAttr;

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
							codePen(generateCodePenData(outputAttr, strSource, strExtention, strCSS));
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

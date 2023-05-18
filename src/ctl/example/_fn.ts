import { core, b, I, B, h } from "@printf83/bsts";

export const toast = (color: I.B.Toast.Simple["color"], elem: core.IElem, icon?: string) => {
	b.toast.show(
		B.Toast.Simple({
			title: document.title,
			color: color,
			elem: elem,
		})
	);
};

export const console = (elem: Element, title?: string, msg?: string | object, color?: core.bootstrapType.textColor) => {
	const exampleCodeContainer = elem.closest(".example-code");
	if (exampleCodeContainer) {
		if (typeof msg !== "string") {
			let iserror = false;
			let result = "null";
			try {
				if (msg) {
					result = JSON.stringify(msg);
				}
			} catch (ex) {
				iserror = true;

				if (ex instanceof Error) {
					result = `{{u::Error!}} {{b::${ex.message}}}`;
				} else {
					result = "{{u::Error!}} {{b::Unknow error}}";
				}
			}

			msg = result;
			if (iserror) {
				color = "danger";
			}
		}

		exampleCodeContainer.dispatchEvent(
			new CustomEvent("bs.console.log", {
				detail: {
					title: title,
					msg: msg ? msg : "Message",
					color: color,
				},
			})
		);
	}
};

export type codeBeautifyType = "js" | "ts" | "html" | "css";

declare var js_beautify: {
	(js_source_text: string, options?: js_beautify.JSBeautifyOptions): string;
	js: (js_source_text: string, options?: js_beautify.JSBeautifyOptions) => string;
	js_beautify: (js_source_text: string, options?: js_beautify.JSBeautifyOptions) => string;
};

declare var css_beautify: {
	(js_source_text: string, options?: js_beautify.CSSBeautifyOptions): string;
	css: (js_source_text: string, options?: js_beautify.CSSBeautifyOptions) => string;
	css_beautify: (js_source_text: string, options?: js_beautify.CSSBeautifyOptions) => string;
};

declare var html_beautify: {
	(js_source_text: string, options?: js_beautify.JSBeautifyOptions): string;
	html: (js_source_text: string, options?: js_beautify.HTMLBeautifyOptions) => string;
	html_beautify: (js_source_text: string, options?: js_beautify.HTMLBeautifyOptions) => string;
};

export const codeBeautify = (type: codeBeautifyType | undefined, source_text: string): string => {
	switch (type) {
		case "html":
			// source_text = source_text.replace(/\>/g, ">\n");
			// source_text = source_text.replace(/\</g, "\n<");

			return html_beautify(source_text, {
				preserve_newlines: false,
				end_with_newline: true,
				indent_size: 4,
				brace_style: "preserve-inline",
			}) as string;

		case "css":
			return css_beautify(source_text, {
				preserve_newlines: false,
				end_with_newline: true,
				indent_size: 4,
			}) as string;

		default:
			source_text = source_text.replace(/\};/g, "};\n");

			return js_beautify(source_text, {
				preserve_newlines: true,
				end_with_newline: true,
				indent_size: 4,
				brace_style: "preserve-inline",
				unescape_strings: false,
			}) as string;
	}
};

export interface ICodePen {
	title?: string;
	description?: string;
	parent?: string;
	private?: boolean;
	tags?: string[];
	editors?: string;
	layout?: "left" | "top" | "right";

	html?: string;
	html_pre_processor?: "none" | "slim" | "haml" | "markdown";

	css?: string;
	css_pre_processor?: "none" | "less" | "scss" | "sass" | "stylus";
	css_starter?: "normalize" | "reset" | "neither";
	css_prefix?: "autoprefixer" | "prefixfree" | "neither";

	js?: string;
	js_pre_processor?: "none" | "coffeescript" | "babel" | "livescript" | "typescript";

	html_classes?: string;
	head?: string;

	css_external?: string | string[]; // semi-colon separate multiple files
	js_external?: string | string[]; // semi-colon separate multiple files
}

export const codePen = (data: ICodePen) => {
	if (data) {
		if (data.css_external && Array.isArray(data.css_external)) {
			data.css_external = data.css_external.join(";");
		}

		if (data.js_external && Array.isArray(data.js_external)) {
			data.js_external = data.js_external.join(";");
		}

		const id = core.UUID();
		core.appendChild(
			document.body,
			new h.form(
				{
					id: `codepen-form-${id}`,
					target: "_blank",
					action: "https://codepen.io/pen/define",
					method: "post",
				},
				[
					new b.input({
						type: "hidden",
						name: "data",
						value: JSON.stringify(data),
					}),
				]
			)
		);

		setTimeout(
			(id) => {
				const form = document.getElementById(`codepen-form-${id}`) as HTMLFormElement;
				form.submit();

				setTimeout(
					(id) => {
						const form = document.getElementById(`codepen-form-${id}`) as HTMLFormElement;
						if (form) {
							core.removeElement(form);
						}
					},
					3000,
					id
				);
			},
			300,
			id
		);
	}
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

export const getCSSBaseOnSource = (attr?: core.IAttr) => {
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

	return undefined;
};

export const getLibBaseOnSource = (strCode?: string, strManager?: string, strExtention?: string[]) => {
	let libImported: string[] = ["core"];

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
	const libListB = ["b", "h", "t", "s", "B", "H", "T", "I", "S", "b", "h", "t", "s", "B", "H", "T", "I", "S", "B"];

	if (strCode) {
		libListA.forEach((i, ix) => {
			if (strCode.indexOf(i) > -1) {
				libImported.push(libListB[ix]);
			}
		});
	}

	if (strManager) {
		libListA.forEach((i, ix) => {
			if (strManager.indexOf(i) > -1) {
				libImported.push(libListB[ix]);
			}
		});
	}

	if (strExtention && strExtention.length > 0) {
		strExtention.forEach((j) => {
			libListA.forEach((i, ix) => {
				if (j.indexOf(i) > -1) {
					libImported.push(libListB[ix]);
				}
			});
		});
	}

	return libImported
		.filter(function (item, pos) {
			return libImported.indexOf(item) == pos;
		})
		.join(", ");
};

export const isRequiredCoreInit = (strCode?: string, strManager?: string, strExtention?: string[]) => {
	const strFind = [
		"b.tooltip",
		"b.timer",
		"b.toast.timer",
		"b.popover",
		"b.carousel",
		"b.scrollspy",
		"B.Tooltip",
		"B.Timer",
		"B.Toast.Timer",
		"B.Popover",
		"B.Carousel",
		"B.Scrollspy",
	];
	if (strCode) {
		let result: boolean = false;
		strFind.forEach((i) => {
			if (strCode.indexOf(i) > -1) {
				result = true;
				return;
			}
		});

		if (result) {
			return true;
		}
	}

	if (strManager) {
		let result: boolean = false;
		strFind.forEach((i) => {
			if (strManager.indexOf(i) > -1) {
				result = true;
				return;
			}
		});

		if (result) {
			return true;
		}
	}

	if (strExtention && strExtention.length > 0) {
		let result: boolean = false;
		strExtention.forEach((j) => {
			strFind.forEach((i) => {
				if (j.indexOf(i) > -1) {
					result = true;
					return;
				}
			});

			if (result) {
				return;
			}
		});

		if (result) {
			return true;
		}
	}

	return false;
};

export const replaceEConsole = (strCode: string) => {
	let consoleFn: string | undefined = undefined;
	if (strCode.indexOf("e.console") > -1) {
		consoleFn = `
			const consoleOut = (_target, title, elem, _color) => {
				console.log(title, elem);
			};
			`;

		strCode = strCode.replace(/e.console/gm, "consoleOut");
	}

	return { consoleFn, strCode };
};

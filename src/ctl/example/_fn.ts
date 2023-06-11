import { core, b, I, h } from "@printf83/bsts";

export const toast = (color: I.B.Toast.Simple["color"], elem: core.IElem, icon?: string) => {
	b.toast.show(
		b.toast.simple({
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
			source_text = source_text.replace(/\>\</g, ">\n<");
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

export const getRootBaseOnSource = (attrPreview?: core.IAttr, attrOutput?: core.IAttr) => {
	if (attrPreview) {
		// attr = core.mergeObject({ container: true, padding: 4 }, attr);
		// attr.container ??= "fluid";
		delete attrPreview.overflow;
		attrPreview.padding ??= 4;

		if (attrPreview.padding === 0 || attrPreview.padding === "0") {
			delete attrPreview.padding;
		}

		if (attrOutput) {
			attrOutput.id = "root";

			return core.getHtml(new h.div(attrPreview, new h.div(attrOutput)));
		} else {
			return core.getHtml(new h.div(attrPreview, new h.div({ id: "root" })));
		}
	} else {
		if (attrOutput) {
			attrOutput.id = "root";
			return core.getHtml(new h.div({ padding: 4 }, new h.div(attrOutput)));
		} else {
			return `<div class="p-4"><div id="root"></div></div>`;
		}
	}
};

export const getCSSBaseOnSource = (attr?: core.IAttr) => {
	if (attr) {
		let result: string[] = [];

		if (attrHasClass(attr, "dropdown-menu-w-md-450px")) {
			result.push(`
				@media (min-width: 992px) {
					.dropdown-menu-w-md-450px .dropdown-menu {
						width: 320px !important;
					}
				}
			`);
		}

		if (attrHasClass(attr, "sidebar-item")) {
			result.push(`
				.sidebar-item {
					padding: 0.1875rem 0.5rem;
					margin-top: 0.125rem;
					margin-left: 1.25rem;
				}
	
				.sidebar-item.active{
					color: #fff !important;
					background-color: RGBA(var(--bs-primary-rgb),var(--bs-bg-opacity,1)) !important;
				}
			`);
		}

		if (attrHasClass(attr, "position-box")) {
			result.push(`
				.position-box div.position-relative {
					display: block;
					background-color: var(--bs-tertiary-bg);
					height: 200px;
				}
				
				.position-box div.position-relative div.position-absolute {
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
				.span-box span {
					display: inline-block;
					background-color: var(--bs-tertiary-bg);
					border-width: 0.5rem;
					padding: 2.5rem;
				}
			`);
		}

		if (attrHasClass(attr, "flex-box")) {
			result.push(`
				.flex-box div {
					background-color: rgba(var(--bs-primary-rgb), 0.15);
					border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
				}
				.flex-box div .vr {
					background-color: rgba(var(--bs-primary-rgb), 1);
				}
			`);
		}

		if (attrHasClass(attr, "row-10")) {
			result.push(`
				.row-10 div.row {
					min-height: 10rem;
					background-color: rgba(var(--bs-primary-rgb), 0.15);
				}
			`);
		}

		if (attrHasClass(attr, "p-box")) {
			result.push(`
				.p-box div.p-3 {
					background-color: rgba(var(--bs-primary-rgb), 0.15);
					border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
				}
			`);
		}

		if (attrHasClass(attr, "ratio-box")) {
			result.push(`
				.ratio-box div.ratio {
					display: inline-block;
					width: 10rem;
					color: var(--bs-secondary-color);
					background-color: var(--bs-tertiary-bg);
					border: var(--bs-border-width) solid var(--bs-border-color);
				}

				.ratio-box div.ratio div {
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`);
		}

		if (attrHasClass(attr, "zindex-box")) {
			result.push(`
				.zindex-box div{
					background-color: var(--bs-primary);
					border: 1px solid var(--bs-primary-border-subtle);
					color: var(--bs-primary-text-emphasis);
				}

				.zindex-box div span{
					position: absolute;
					right: 5px;
					bottom: 0;
					color:var(--bs-body-bg);
				}

				.zindex-box div:nth-child(1) {
					top: 1.5rem;
					left: 1.5rem;
					z-index: 5!important;
				}

				.zindex-box div:nth-child(2) {
					top:3rem;
					left: 3rem;
					z-index: 4!important;
				}

				.zindex-box div:nth-child(3) {
					top: 4.5rem;
					left: 4.5rem;
					z-index: 3!important;
				}

				.zindex-box div:nth-child(4) {
					top: 6rem;
					left: 6rem;
					z-index: 2!important;
				}

				.zindex-box div:nth-child(5) {
					top: 7.5rem;
					left: 7.5rem;
					z-index: 1 !important;
				}
			`);
		}

		if (attrHasClass(attr, "col-box")) {
			result.push(`
				.col-box div.row:not(:last-child) {
					margin-bottom: 1rem;
				}

				.col-box .col, .col-box .col-auto, .col-box .col-0, .col-box .col-1, .col-box .col-2, .col-box .col-3, .col-box .col-4, .col-box .col-5, .col-box .col-6, .col-box .col-7, .col-box .col-8, .col-box .col-9, .col-box .col-10, .col-box .col-11, .col-box .col-12, .col-box .col-sm, .col-box .col-sm-auto, .col-box .col-sm-0, .col-box .col-sm-1, .col-box .col-sm-2, .col-box .col-sm-3, .col-box .col-sm-4, .col-box .col-sm-5, .col-box .col-sm-6, .col-box .col-sm-7, .col-box .col-sm-8, .col-box .col-sm-9, .col-box .col-sm-10, .col-box .col-sm-11, .col-box .col-sm-12, .col-box .col-md, .col-box .col-md-auto, .col-box .col-md-0, .col-box .col-md-1, .col-box .col-md-2, .col-box .col-md-3, .col-box .col-md-4, .col-box .col-md-5, .col-box .col-md-6, .col-box .col-md-7, .col-box .col-md-8, .col-box .col-md-9, .col-box .col-md-10, .col-box .col-md-11, .col-box .col-md-12, .col-box .col-lg, .col-box .col-lg-auto, .col-box .col-lg-0, .col-box .col-lg-1, .col-box .col-lg-2, .col-box .col-lg-3, .col-box .col-lg-4, .col-box .col-lg-5, .col-box .col-lg-6, .col-box .col-lg-7, .col-box .col-lg-8, .col-box .col-lg-9, .col-box .col-lg-10, .col-box .col-lg-11, .col-box .col-lg-12, .col-box .col-xl, .col-box .col-xl-auto, .col-box .col-xl-0, .col-box .col-xl-1, .col-box .col-xl-2, .col-box .col-xl-3, .col-box .col-xl-4, .col-box .col-xl-5, .col-box .col-xl-6, .col-box .col-xl-7, .col-box .col-xl-8, .col-box .col-xl-9, .col-box .col-xl-10, .col-box .col-xl-11, .col-box .col-xl-12, .col-box .col-xxl, .col-box .col-xxl-auto, .col-box .col-xxl-0, .col-box .col-xxl-1, .col-box .col-xxl-2, .col-box .col-xxl-3, .col-box .col-xxl-4, .col-box .col-xxl-5, .col-box .col-xxl-6, .col-box .col-xxl-7, .col-box .col-xxl-8, .col-box .col-xxl-9, .col-box .col-xxl-10, .col-box .col-xxl-11, .col-box .col-xxl-12 {
					background-color: rgba(var(--bs-primary-rgb), 0.15);
					border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
					padding-top: .75rem;
					padding-bottom: .75rem;
				}
			`);
		}

		// if (attr.justifyContent === "around") {
		// 	result.push(`
		// 		#root {
		// 			justify-content: space-around !important;
		// 		}
		// 	`);
		// }

		// if (attr.display) {
		// 	if (propHasValue(attr.display, "grid")) {
		// 		result.push(`
		// 				#root {
		// 					display: grid !important;
		// 				}
		// 			`);
		// 	}

		// 	if (propHasValue(attr.display, "flex")) {
		// 		result.push(`
		// 				#root {
		// 					display: flex !important;
		// 				}
		// 			`);
		// 	}

		// 	if (propHasValue(attr.display, "md-flex")) {
		// 		result.push(`
		// 				@media (min-width: 768px) {
		// 					#root {
		// 						display: flex !important;
		// 					}
		// 				}
		// 			`);
		// 	}
		// }

		// if (attr.gap === 1) {
		// 	result.push(`
		// 		#root {
		// 			margin: calc(0.25rem * -1);
		// 		}

		// 		#root > *:not(.modal) {
		// 			margin: 0.25rem;
		// 		}
		// 	`);
		// }

		// if (attr.gap === 2) {
		// 	result.push(`
		// 		#root {
		// 			margin: calc(0.5rem * -1);
		// 		}

		// 		#root > *:not(.modal) {
		// 			margin: 0.5rem;
		// 		}
		// 	`);
		// }

		// if (attr.gap === 3) {
		// 	result.push(`
		// 		#root {
		// 			margin: calc(1rem * -1);
		// 		}

		// 		#root > *:not(.modal) {
		// 			margin: 1rem;
		// 		}
		// 	`);
		// }

		// if (attr.gap === 4) {
		// 	result.push(`
		// 		#root {
		// 			margin: calc(1.5rem * -1);
		// 		}

		// 		#root > *:not(.modal) {
		// 			margin: 1.5rem;
		// 		}
		// 	`);
		// }

		// if (attr.gap === 5) {
		// 	result.push(`
		// 		#root {
		// 			margin: calc(3rem * -1);
		// 		}

		// 		#root > *:not(.modal) {
		// 			margin: 3rem;
		// 		}
		// 	`);
		// }

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

const getLibBaseOnSourceIsContain = (str: string, find: string[]) => {
	let found: boolean = false;

	find.forEach((i) => {
		if (str.indexOf(i) > -1) {
			found = true;
			return;
		}
	});

	return found;
};

export const getLibBaseOnSource = (strCode?: string, strManager?: string, strExtention?: string[]) => {
	let libImported: string[] = ["core"];
	const libList: { find: string[]; lib: string }[] = [
		{
			find: [" b.", "(b.", "...b."],
			lib: "b",
		},
		{
			find: [" h.", "(h."],
			lib: "h",
		},
		{
			find: [" t.", "(t."],
			lib: "t",
		},
		{
			find: [" s(", "(s("],
			lib: "s",
		},
		{
			find: [" I.", "(I."],
			lib: "I",
		},
		{
			find: [" $.", "($.", "...$."],
			lib: "$",
		},
	];

	if (strCode) {
		libList.forEach((i) => {
			if (getLibBaseOnSourceIsContain(strCode, i.find)) {
				libImported.push(i.lib);
			}
		});
	}

	if (strManager) {
		libList.forEach((i) => {
			if (getLibBaseOnSourceIsContain(strManager, i.find)) {
				libImported.push(i.lib);
			}
		});
	}

	if (strExtention && strExtention.length > 0) {
		strExtention.forEach((j) => {
			libList.forEach((i) => {
				if (getLibBaseOnSourceIsContain(j, i.find)) {
					libImported.push(i.lib);
				}
			});
		});
	}

	// const libListA = [" b.", " h.", " t.", " s(", " I.", "(b.", "(h.", "(t.", "(s(", "(I.", "...b."];
	// const libListB = ["b", "h", "t", "s", "I", "b", "h", "t", "s", "I", "b"];

	// if (strCode) {
	// 	libListA.forEach((i, ix) => {
	// 		if (strCode.indexOf(i) > -1) {
	// 			libImported.push(libListB[ix]);
	// 		}
	// 	});
	// }

	// if (strManager) {
	// 	libListA.forEach((i, ix) => {
	// 		if (strManager.indexOf(i) > -1) {
	// 			libImported.push(libListB[ix]);
	// 		}
	// 	});
	// }

	// if (strExtention && strExtention.length > 0) {
	// 	strExtention.forEach((j) => {
	// 		libListA.forEach((i, ix) => {
	// 			if (j.indexOf(i) > -1) {
	// 				libImported.push(libListB[ix]);
	// 			}
	// 		});
	// 	});
	// }

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
		"$.B.Tooltip",
		"$.B.Timer",
		"$.B.Toast.Timer",
		"$.B.Popover",
		"$.B.Carousel",
		"$.B.Scrollspy",
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
			const CONSOLELOG = (_target, title, elem, _color) => {
				console.log(title, elem);
			};
			`;

		strCode = strCode.replace(/e.console/gm, "CONSOLELOG");
	}

	return { consoleFn, strCode };
};

export const replaceExtention = (rule?: { find: string; replace: string }[], strCode?: string) => {
	if (strCode && rule && rule.length > 0) {
		rule.forEach((i) => {
			strCode = strCode?.replace(new RegExp(i.find, "gm"), i.replace);
		});
	}

	return strCode;
};

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
			source_text = source_text.replace(/\>/g, ">\n");
			source_text = source_text.replace(/\</g, "\n<");

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

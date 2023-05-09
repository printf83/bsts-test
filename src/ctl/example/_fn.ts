import { core, b, I, B } from "@printf83/bsts";

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

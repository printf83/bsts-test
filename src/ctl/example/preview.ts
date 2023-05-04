import { core, h } from "@printf83/bsts";

export type IBsExampleCodeType = "js" | "ts" | "html" | "css";

export interface IBsExampleCode extends core.IAttr {
	type?: IBsExampleCodeType;
}

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

const beautify = (type: IBsExampleCodeType | undefined, source_text: string): string => {
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

const convert = (attr: IBsExampleCode) => {
	attr = core.mergeObject(
		{
			class: "example-preview",
			display: "block",
			overflow: "auto",
			tabindex: 0,
			marginX: 0,
			marginY: 1,
		},
		attr
	);

	attr.elem = new h.code(
		{ class: ["prettyprint", `lang-${attr.type}`], lang: attr.type, border: false },
		attr.elem ? (typeof attr.elem === "string" ? beautify(attr.type, attr.elem) : attr.elem) : ""
	);

	delete attr.type;

	return attr;
};

export class preview extends h.pre {
	constructor();
	constructor(attr: IBsExampleCode);
	constructor(elem: core.IElem);
	constructor(attr: IBsExampleCode, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<IBsExampleCode>("elem", arg)));
	}
}
export const Preview = (AttrOrElem?: IBsExampleCode | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<preview, IBsExampleCode>(preview, AttrOrElem, Elem);

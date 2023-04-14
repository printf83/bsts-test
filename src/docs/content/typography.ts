import { core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const typography: IAttrContent = {
	title: "Typography",
	description:
		"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.",
	item: [
		new e.title("Global settings"),
		new e.text(
			"Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the {{https://getbootstrap.com/docs/5.3/utilities/text/::textual utility classes}}."
		),
		new e.ul({
			item: [
				"Use a {{https://getbootstrap.com/docs/5.3/content/reboot/#native-font-stack::native font stack}} that selects the best {{font-family}} for each OS and device.",
				"For a more inclusive and accessible type scale, we use the browser’s default root {{font-size}} (typically 16px) so visitors can customize their browser defaults as needed.",
				"Use the {{$font-family-base}}, {{$font-size-base}}, and {{$line-height-base}} attributes as our typographic base applied to the {{<body>}}.",
				"Set the global link color via {{$link-color}}.",
				"Use {{$body-bg}} to set a {{background-color}} on the {{<body>}} ({{#fff}} by default).",
			],
		}),
		new e.text(
			"These styles can be found within {{_reboot.scss}}, and the global variables are defined in {{_variables.scss}}. Make sure to set {{$font-size-base}} in {{rem}}."
		),

		//-----------------------

		new e.title("Headings"),
		new e.text("All HTML headings, {{<h1>}} through {{<h6>}}, are available."),
		new e.table({
			item: [
				["Heading", "Example"],
				["{{<h1></h1>}}", new h.h(1, "h1.Bootstrap heading")],
				["{{<h2></h2>}}", new h.h(2, "h2.Bootstrap heading")],
				["{{<h3></h3>}}", new h.h(3, "h3.Bootstrap heading")],
				["{{<h4></h4>}}", new h.h(4, "h4.Bootstrap heading")],
				["{{<h5></h5>}}", new h.h(5, "h5.Bootstrap heading")],
				["{{<h6></h6>}}", new h.h(6, "h6.Bootstrap heading")],
			],
		}),
		new e.code({
			output: () => {
				return [1, 2, 3, 4, 5, 6].map((i) => new h.h(i as h.HLevel, `h${i}. Bootstrap heading`));
			},
		}),
		new e.text(
			"{{.h1}} through {{.h6}} classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."
		),
		new e.code({
			output: () => {
				return [1, 2, 3, 4, 5, 6].map((i) => new h.p({ h: i as core.IAttr["h"] }, `h${i}. Bootstrap heading`));
			},
		}),

		//-----------------------

		new e.title("Customizing headings"),
		new e.text("Use the included utility classes to recreate the small secondary heading text from Bootstrap 3."),
		new e.code({
			output: () => {
				return new h.h(3, [
					"Fancy display heading ",
					new h.small({ textColor: "body-secondary" }, "With faded secondary text"),
				]);
			},
		}),

		//-----------------------

		new e.title("Display headings"),
		new e.text(
			"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a {{b::display heading}}—a larger, slightly more opinionated heading style."
		),
		new e.code({
			output: () => {
				return [1, 2, 3, 4, 5, 6].map(
					(i) => new h.h(1, { fontDisplay: i as core.IAttr["fontDisplay"] }, `Display ${i}`)
				);
			},
		}),
		new e.text(
			"Display headings are configured via the {{$display-font-sizes}} Sass map and two variables, {{$display-font-weight}} and {{$display-line-height}}."
		),
		new e.text(
			"Display headings are customizable via two variables, {{$display-font-family}} and {{$display-font-style}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$display-font-sizes: (
				1: 5rem,
				2: 4.5rem,
				3: 4rem,
				4: 3.5rem,
				5: 3rem,
				6: 2.5rem
				);

				$display-font-family: null;
				$display-font-style:  null;
				$display-font-weight: 300;
				$display-line-height: $headings-line-height;
			`,
		}),

		//-----------------------

		new e.title("Lead"),
		new e.text("Make a paragraph stand out by adding {{.lead}}."),
		new e.code({
			output: () => {
				return new h.p({ lead: true }, "This is a lead paragraph. It stands out from regular paragraphs.");
			},
		}),

		//-----------------------

		new e.title("Inline text elements"),
		new e.text("Styling for common inline HTML5 elements."),
		new e.code({
			output: () => {
				return [
					new h.p(["You can use the mark tag to ", new h.mark("highlight"), " text."]),
					new h.p(new h.del("This line of text is meant to be treated as deleted text.")),
					new h.p(new h.s("This line of text is meant to be treated as no longer accurate.")),
					new h.p(new h.ins("This line of text is meant to be treated as an addition to the document.")),
					new h.p(new h.u("This line of text will render as underlined.")),
					new h.p(new h.small("This line of text is meant to be treated as fine print.")),
					new h.p(new h.strong("This line rendered as bold text.")),
					new h.p(new h.em("This line rendered as italicized text.")),
				];
			},
		}),
		new e.text("Beware that those tags should be used for semantic purpose:"),
		new e.ul({
			item: [
				"{{<mark>}} represents text which is marked or highlighted for reference or notation purposes.",
				"{{<small>}} represents side-comments and small print, like copyright and legal text.",
				"{{<s>}} represents element that are no longer relevant or no longer accurate.",
				"{{<u>}} represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.",
			],
		}),
		new e.text("If you want to style your text, you should use the following classes instead:"),
		new e.ul({
			item: [
				"{{.mark}} will apply the same styles as {{<mark>}}.",
				"{{.small}} will apply the same styles as {{<small>}}.",
				"{{.text-decoration-underline}} will apply the same styles as {{<u>}}.",
				"{{.text-decoration-line-through}} will apply the same styles as {{<s>}}.",
			],
		}),
		new e.text(
			"While not shown above, feel free to use {{<b>}} and {{<i>}} in HTML5. {{<b>}} is meant to highlight words or phrases without conveying additional importance, while {{<i>}} is mostly for voice, technical terms, etc."
		),

		//-----------------------

		new e.title(""),
		new e.text(""),
		new e.ul({
			item: [
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
			],
		}),
		new e.alert({ color: "info", callout: true }, ""),
		new e.code({
			output: () => {
				return [];
			},
		}),

		//-----------------------

		new e.title("Inline text elements"),
		new e.text("Styling for common inline HTML5 elements."),
		new e.code({
			output: () => {
				return [];
			},
		}),

		//-----------------------

		new e.title(""),
		new e.text(""),
		new e.code({
			output: () => {
				return [];
			},
		}),

		//-----------------------

		new e.subtitle(""),
		new e.text(""),
		new e.codepreview({
			type: "css",
			code: `
				`,
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(""),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(""),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
			`,
		}),
	],
};

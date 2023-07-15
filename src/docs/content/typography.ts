import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const typography: IContent = {
	title: "Typography",
	description: "Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Global settings"),
				new e.text("Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the {{nav:docs/utilities/text::textual utility classes}}."),
				new e.ul({
					item: [
						"Use a {{nav:docs/content/reboot#native_font_stack::native font stack}} that selects the best {{font-family}} for each OS and device.",
						"For a more inclusive and accessible type scale, Bootstrap use the browser’s default root {{font-size}} (typically 16px) so visitors can customize their browser defaults as needed.",
						"Use the {{$font-family-base}}, {{$font-size-base}}, and {{$line-height-base}} attributes as Bootstrap typographic base applied to the {{<body>}}.",
						"Set the global link color via {{$link-color}}.",
						"Use {{$body-bg}} to set a {{background-color}} on the {{<body>}} ({{#fff}} by default).",
					],
				}),
				new e.text("These styles can be found within {{_reboot.scss}}, and the global variables are defined in {{_variables.scss}}. Make sure to set {{$font-size-base}} in {{rem}}."),
			]),

			//----------------------

			new e.section([
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
					db: getContentCode(db),
					output: () => {
						return [1, 2, 3, 4, 5, 6].map((i) => new h.h(i as I.H.HLevel, `h${i}. Bootstrap heading`));
					},
				}),
				new e.text("{{.h1}} through {{.h6}} classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [1, 2, 3, 4, 5, 6].map((i) => new h.p({ h: i as core.IAttr["h"] }, `h${i}. Bootstrap heading`));
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Customizing headings"),
				new e.text("Use the included utility classes to recreate the small secondary heading text from Bootstrap 3."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.h(3, ["Fancy display heading ", new h.small({ textColor: "body-secondary" }, "With faded secondary text")]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Display headings"),
				new e.text("Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a {{b::display heading}}—a larger, slightly more opinionated heading style."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [1, 2, 3, 4, 5, 6].map((i) => [new h.h(1, { fontDisplay: i as core.IAttr["fontDisplay"] }, `Display ${i}`), i < 6 ? new h.hr() : ""]).flat();
					},
				}),
				new e.text("Display headings are configured via the {{$display-font-sizes}} Sass map and two variables, {{$display-font-weight}} and {{$display-line-height}}."),
				new e.text("Display headings are customizable via two variables, {{$display-font-family}} and {{$display-font-style}}."),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
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
			]),

			//----------------------

			new e.section([
				new e.title("Lead"),
				new e.text("Make a paragraph stand out by adding {{.lead}}."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.p({ lead: true }, "This is a lead paragraph. It stands out from regular paragraphs.");
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Inline text elements"),
				new e.text("Styling for common inline HTML5 elements."),
				new e.code({
					db: getContentCode(db),
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
					item: ["{{.mark}} will apply the same styles as {{<mark>}}.", "{{.small}} will apply the same styles as {{<small>}}.", "{{.text-decoration-underline}} will apply the same styles as {{<u>}}.", "{{.text-decoration-line-through}} will apply the same styles as {{<s>}}."],
				}),
				new e.text("While not shown above, feel free to use {{<b>}} and {{<i>}} in HTML5. {{<b>}} is meant to highlight words or phrases without conveying additional importance, while {{<i>}} is mostly for voice, technical terms, etc."),
			]),

			//----------------------

			new e.section([new e.title("Text utilities"), new e.text("Change text alignment, transform, style, weight, line-height, decoration and color with Bootstrap {{nav:docs/utilities/text::text utilities}} and {{nav:docs/utilities/colors::color utilities}}.")]),

			//----------------------

			new e.section([
				new e.title("Abbreviations"),
				new e.text("Stylized implementation of HTML’s {{<abbr>}} element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies."),
				new e.text("Add {{.initialism}} to an abbreviation for a slightly smaller font-size."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [new h.p(new h.abbr({ title: "attribute" }, "attr")), new h.p(new h.abbr({ title: "HyperText Markup Language", small: true }, "HTML"))];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Blockquotes"),
				new e.text("For quoting blocks of content from another source within your document. Wrap {{<blockquote class='blockquote'>}} around any HTML as the quote."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element."));
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Naming a source"),
				new e.text(
					"The HTML spec requires that blockquote attribution be placed outside the {{<blockquote>}}. When providing attribution, wrap your {{<blockquote>}} in a {{<figure>}} and use a {{<figcaption>}} or a block level element (e.g., {{<p>}}) with the {{.blockquote-footer}} class. Be sure to wrap the name of the source work in {{<cite>}} as well."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.figure([new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")), new b.blockquote.caption(["Someone famous in ", new h.cite({ title: "Source Title" }, "Source Title")])]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Alignment"),
				new e.text("Use text utilities as needed to change the alignment of your blockquote."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.figure({ textAlign: "center" }, [new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")), new b.blockquote.caption(["Someone famous in ", new h.cite({ title: "Source Title" }, "Source Title")])]);
					},
				}),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.figure({ textAlign: "end" }, [new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")), new b.blockquote.caption(["Someone famous in ", new h.cite({ title: "Source Title" }, "Source Title")])]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("List"),
				new e.subtitle("Unstyled"),
				new e.text("Remove the default {{list-style}} and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.ul(
							{
								unstyle: true,
							},
							[
								new h.li("This is a list."),
								new h.li("It appears completely unstyled."),
								new h.li("Structurally, it's still a list."),
								new h.li("However, this style only applies to immediate child elements."),
								new h.li(["Nested lists: ", new h.ul(["are unaffected by this style", "will still show a bullet", "and have appropriate left margin"])]),
								new h.li("This may still come in handy in some situations."),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Inline"),
				new e.text("Remove a list’s bullets and apply some light {{margin}} with a combination of two classes, {{.list-inline}} and {{.list-inline-item}}."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.ul({ inline: true }, [new h.li({ inline: true }, "This is a list item."), new h.li({ inline: true }, "And another one."), new h.li({ inline: true }, "But they're displayed inline.")]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Description list alignment"),
				new e.text("Align terms and descriptions horizontally by using Bootstrap grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a {{.text-truncate}} class to truncate the text with an ellipsis."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.dl({ row: true }, [
							new h.dt({ col: "sm-3" }, "Description lists"),
							new h.dd({ col: "sm-9" }, "A description list is perfect for defining terms."),

							new h.dt({ col: "sm-3" }, "Term"),
							new h.dd({ col: "sm-9" }, [new h.p("Definition for the term."), new h.p("And some more placeholder definition text.")]),

							new h.dt({ col: "sm-3" }, "Another term"),
							new h.dd({ col: "sm-9" }, "his definition is short, so no extra paragraphs or anything."),

							new h.dt({ col: "sm-3", textTruncate: true }, "Truncated term is truncated"),
							new h.dd({ col: "sm-9" }, "This can be useful when space is tight. Adds an ellipsis at the end."),

							new h.dt({ col: "sm-3" }, "Nesting"),
							new h.dd({ col: "sm-9" }, new h.dl({ row: true }, [new h.dt({ col: "sm-4" }, "Nested definition list"), new h.dd({ col: "sm-8" }, "I heard you like definition lists. Let me put a definition list inside your definition list.")])),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Responsive font sizes"),
				new e.text("In Bootstrap 5, Bootstrap enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the {{https://getbootstrap.com/docs/5.3/getting-started/rfs/::RFS page}} to find out how this works."),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Sass variables"),
				new e.text("Headings have some dedicated variables for sizing and spacing."),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$headings-margin-bottom:      $spacer * .5;
						$headings-font-family:        null;
						$headings-font-style:         null;
						$headings-font-weight:        500;
						$headings-line-height:        1.2;
						$headings-color:              null;
					`,
				}),
				new e.text("Miscellaneous typography elements covered here and in {{nav:docs/content/reboot::Reboot}} also have dedicated variables."),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$lead-font-size:              $font-size-base * 1.25;
						$lead-font-weight:            300;

						$small-font-size:             .875em;

						$sub-sup-font-size:           .75em;

						// fusv-disable
						$text-muted:                  var(--#{$prefix}secondary-color); // Deprecated in 5.3.0
						// fusv-enable

						$initialism-font-size:        $small-font-size;

						$blockquote-margin-y:         $spacer;
						$blockquote-font-size:        $font-size-base * 1.25;
						$blockquote-footer-color:     $gray-600;
						$blockquote-footer-font-size: $small-font-size;

						$hr-margin-y:                 $spacer;
						$hr-color:                    inherit;

						// fusv-disable
						$hr-bg-color:                 null; // Deprecated in v5.2.0
						$hr-height:                   null; // Deprecated in v5.2.0
						// fusv-enable

						$hr-border-color:             null; // Allows for inherited colors
						$hr-border-width:             var(--#{$prefix}border-width);
						$hr-opacity:                  .25;

						$legend-margin-bottom:        .5rem;
						$legend-font-size:            1.5rem;
						$legend-font-weight:          null;

						$dt-font-weight:              $font-weight-bold;

						$list-inline-padding:         .5rem;

						$mark-padding:                .1875em;
						$mark-bg:                     $yellow-100;
					`,
				}),
			]),

			//----------------------

			new e.section([new e.subtitle("Sass mixins"), new e.text("There are no dedicated mixins for typography, but Bootstrap does use {{https://getbootstrap.com/docs/5.3/getting-started/rfs/::Responsive Font Sizing (RFS)}}.")]),
		];
	},

};

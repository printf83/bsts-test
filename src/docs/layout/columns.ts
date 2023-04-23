import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const columns: IAttrContent = {
	title: "Columns",
	description:
		"Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to Bootstrap flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements.",
	item: [
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Heads up! }}Be sure to {{nav:docs/layout/grid::read the Grid page}} first before diving into how to modify and customize your grid columns. "
		),
		new e.title("How they work"),
		new e.ul({
			item: [
				"{{b::Columns build on the grid’s flexbox architecture.}} Flexbox means Bootstrap have options for changing individual columns and {{nav:docs/layout/grid#row_columns::modifying groups of columns at the row level}}. You choose how columns grow, shrink, or otherwise change.",
				"{{b::When building grid layouts, all content goes in columns.}} The hierarchy of Bootstrap’s grid goes from {{nav:docs/layout/containers::container}} to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences.",
				"{{b::Bootstrap includes predefined classes for creating fast, responsive layouts.}} With {{nav:docs/layout/breakpoints::six breakpoints}} and a dozen columns at each grid tier, Bootstrap have dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you wish.",
			],
		}),

		//-----------------------

		new e.title("Alignment"),
		new e.text("Use flexbox alignment utilities to vertically and horizontally align columns."),

		//-----------------------

		new e.subtitle("Vertical alignment"),
		new e.text("Change the vertical alignment with any of the responsive {{align-items-*}} classes."),
		new e.code({
			outputAttr: { class: ["col-box", "row-10"] },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, alignItem: "start" }, [
						new h.div({ col: true }, "One of three columns"),
						new h.div({ col: true }, "One of three columns"),
						new h.div({ col: true }, "One of three columns"),
					])
				);
			},
		}),
		new e.code({
			outputAttr: { class: ["col-box", "row-10"] },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, alignItem: "center" }, [
						new h.div({ col: true }, "One of three columns"),
						new h.div({ col: true }, "One of three columns"),
						new h.div({ col: true }, "One of three columns"),
					])
				);
			},
		}),
		new e.code({
			outputAttr: { class: ["col-box", "row-10"] },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, alignItem: "end" }, [
						new h.div({ col: true }, "One of three columns"),
						new h.div({ col: true }, "One of three columns"),
						new h.div({ col: true }, "One of three columns"),
					])
				);
			},
		}),
		new e.text(
			"Or, change the alignment of each column individually with any of the responsive {{.align-self-*}} classes."
		),
		new e.code({
			outputAttr: { class: ["col-box", "row-10"] },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true }, [
						new h.div({ col: true, alignSelf: "start" }, "One of three columns"),
						new h.div({ col: true, alignSelf: "center" }, "One of three columns"),
						new h.div({ col: true, alignSelf: "end" }, "One of three columns"),
					])
				);
			},
		}),

		//-----------------------

		new e.subtitle("Horizontal alignment"),
		new e.text("Change the horizontal alignment with any of the responsive {{justify-content-*}} classes."),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true, justifyContent: "start" }, [
						new h.div({ col: 4 }, "One of two columns"),
						new h.div({ col: 4 }, "One of two columns"),
					]),
					new h.div({ row: true, justifyContent: "center" }, [
						new h.div({ col: 4 }, "One of two columns"),
						new h.div({ col: 4 }, "One of two columns"),
					]),
					new h.div({ row: true, justifyContent: "end" }, [
						new h.div({ col: 4 }, "One of two columns"),
						new h.div({ col: 4 }, "One of two columns"),
					]),
					new h.div({ row: true, justifyContent: "around" }, [
						new h.div({ col: 4 }, "One of two columns"),
						new h.div({ col: 4 }, "One of two columns"),
					]),
					new h.div({ row: true, justifyContent: "between" }, [
						new h.div({ col: 4 }, "One of two columns"),
						new h.div({ col: 4 }, "One of two columns"),
					]),
					new h.div({ row: true, justifyContent: "evenly" }, [
						new h.div({ col: 4 }, "One of two columns"),
						new h.div({ col: 4 }, "One of two columns"),
					]),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Column wrapping"),
		new e.text(
			"If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line."
		),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true },
					new h.div({ row: true }, [
						new h.div({ col: 9 }, ".col-9"),
						new h.div({ col: 4 }, [
							".col-4",
							new h.br(),
							"Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.",
						]),
						new h.div({ col: 6 }, [
							".col-6",
							new h.br(),
							"Subsequent columns continue along the new line.",
						]),
					])
				);
			},
		}),

		//-----------------------

		new e.subtitle("Column breaks"),
		new e.text(
			"Breaking columns to a new line in flexbox requires a small hack: add an element with {{width: 100%}} wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple {{.row}}s, but not every implementation method can account for this."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true }, [
						new h.div({ col: [6, "sm-3"] }, ".col-6 .col-sm-3"),
						new h.div({ col: [6, "sm-3"] }, ".col-6 .col-sm-3"),

						//Force next columns to break to new line
						new h.div({ width: 100 }),

						new h.div({ col: [6, "sm-3"] }, ".col-6 .col-sm-3"),
						new h.div({ col: [6, "sm-3"] }, ".col-6 .col-sm-3"),
					])
				);
			},
		}),
		new e.text(
			"You may also apply this break at specific breakpoints with Bootstrap {{nav:docs/utilities/display::responsive display utilities}}."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true }, [
						new h.div({ col: [6, "sm-4"] }, ".col-6 .col-sm-4"),
						new h.div({ col: [6, "sm-4"] }, ".col-6 .col-sm-4"),

						//Force next columns to break to new line
						new h.div({ width: 100, display: ["none", "md-block"] }),

						new h.div({ col: [6, "sm-4"] }, ".col-6 .col-sm-4"),
						new h.div({ col: [6, "sm-4"] }, ".col-6 .col-sm-4"),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Reordering"),

		//-----------------------

		new e.subtitle("Order classes"),
		new e.text(
			"Use {{.order-}} classes for controlling the {{b::visual order}} of your content. These classes are responsive, so you can set the {{order}} by breakpoint (e.g., {{.order-1.order-md-2}}). Includes support for {{1}} through {{5}} across all six grid tiers. If you need more {{.order-*}} classes, you can modify the default number via Sass variable."
		),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true }, [
						new h.div({ col: true }, "First in DOM, no order applied"),
						new h.div({ col: true, order: 5 }, "Second in DOM, with a larger order"),
						new h.div({ col: true, order: 1 }, "Third in DOM, with an order of 1"),
					])
				);
			},
		}),
		new e.text(
			"There are also responsive {{.order-first}} and {{.order-last}} classes that change the {{order}} of an element by applying {{order: -1}} and {{order: 6}}, respectively. These classes can also be intermixed with the numbered {{.order-*}} classes as needed."
		),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true }, [
						new h.div({ col: true, order: "last" }, "First in DOM, ordered last"),
						new h.div({ col: true }, "Second in DOM, unordered"),
						new h.div({ col: true, order: "first" }, "Third in DOM, ordered first"),
					])
				);
			},
		}),

		//-----------------------

		new e.subtitle("Offsetting columns"),
		new e.text(
			"You can offset grid columns in two ways: Bootstrap responsive {{.offset-}} grid classes and Bootstrap {{nav:docs/utilities/spacing::margin utilities}}. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable."
		),

		//-----------------------

		new e.xsubtitle("Offset classes"),
		new e.text(
			"Move columns to the right using {{.offset-md-*}} classes. These classes increase the left margin of a column by {{*}} columns. For example, {{.offset-md-4}} moves {{.col-md-4}} over four columns."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true }, [
						new h.div({ col: "md-4" }, ".col-md-4"),
						new h.div({ col: "md-4", offset: "md-4" }, ".col-md-4 .offset-md-4"),
					]),
					new h.div({ row: true }, [
						new h.div({ col: "md-3", offset: "md-3" }, ".col-md-3 .offset-md-3"),
						new h.div({ col: "md-3", offset: "md-3" }, ".col-md-3 .offset-md-3"),
					]),
					new h.div({ row: true }, [new h.div({ col: "md-6", offset: "md-3" }, ".col-md-6 .offset-md-3")]),
				]);
			},
		}),
		new e.text(
			"In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in {{nav:docs/examples/grid::the grid example}}."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true }, [
						new h.div({ col: ["sm-5", "md-6"] }, ".col-sm-5 .col-md-6"),
						new h.div(
							{ col: ["sm-5", "md-6"], offset: ["sm-2", "md-0"] },
							".col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0"
						),
					]),
					new h.div({ row: true }, [
						new h.div({ col: ["sm-6", "md-5", "lg-6"] }, ".col-sm-6 .col-md-5 .col-lg-6"),
						new h.div(
							{ col: ["sm-6", "md-5", "lg-6"], offset: ["md-2", "lg-0"] },
							".col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0"
						),
					]),
				]);
			},
		}),

		//-----------------------

		new e.xsubtitle("Margin utilities"),
		new e.text(
			"With the move to flexbox in v4, you can use margin utilities like {{.me-auto}} to force sibling columns away from one another."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true }, [
						new h.div({ col: "md-4" }, ".col-md-4"),
						new h.div({ col: "md-4", marginStart: "auto" }, ".col-md-4 .ms-auto"),
					]),
					new h.div({ row: true }, [
						new h.div({ col: "md-3", marginStart: "md-auto" }, ".col-md-3 .ms-md-auto"),
						new h.div({ col: "md-3", marginStart: "md-auto" }, ".col-md-3 .ms-md-auto"),
					]),
					new h.div({ row: true }, [
						new h.div({ col: "auto", marginEnd: "auto" }, ".col-auto .me-auto"),
						new h.div({ col: "auto" }, ".col-auto"),
					]),
				]);
			},
		}),

		//-----------------------

		new e.title("Standalone column classes"),
		new e.text(
			"The {{.col-*}} classes can also be used outside a {{.row}} to give an element a specific width. Whenever column classes are used as non-direct children of a row, the paddings are omitted."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return [
					new h.div({ col: 3, padding: 3, marginBottom: 2 }, ".col-3: width of 25%"),
					new h.div({ col: "sm-9", padding: 3 }, ".col-sm-9: width of 75% above sm breakpoint"),
				];
			},
		}),
		new e.text(
			"The classes can be used together with utilities to create responsive floated images. Make sure to wrap the content in a {{nav:docs/helpers/clearfix::.clearfix}} wrapper to clear the float if the text is shorter."
		),
		new e.code({
			showViewport: true,
			output: () => {
				return new h.div({ clearfix: true }, [
					new h.img({
						col: "md-6",
						float: "end",
						marginBottom: 3,
						marginStart: "md-3",
						alt: "...",
						src: "https://picsum.photos/seed/bsts_0/300/200",
					}),
					new h.p(
						"A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image."
					),
					new h.p(
						"As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read."
					),
					new h.p(
						"And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here."
					),
				]);
			},
		}),
	],
};

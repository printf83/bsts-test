import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const columns: IAttrContent = {
	title: "Columns",
	description:
		"Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements.",
	item: [
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Heads up! }}Be sure to {{https://getbootstrap.com/docs/5.3/layout/grid/::read the Grid page}} first before diving into how to modify and customize your grid columns. "
		),
		new e.title("How they work"),
		new e.ul({
			item: [
				"{{b::Columns build on the grid’s flexbox architecture.}} Flexbox means we have options for changing individual columns and {{https://getbootstrap.com/docs/5.3/layout/grid/#row-columns::modifying groups of columns at the row level}}. You choose how columns grow, shrink, or otherwise change.",
				"{{b::When building grid layouts, all content goes in columns.}} The hierarchy of Bootstrap’s grid goes from {{https://getbootstrap.com/docs/5.3/layout/containers/::container}} to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences.",
				"{{b::Bootstrap includes predefined classes for creating fast, responsive layouts.}} With {{https://getbootstrap.com/docs/5.3/layout/breakpoints/::six breakpoints}} and a dozen columns at each grid tier, we have dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you wish.",
			],
		}),

		//-----------------------

		new e.title("Alignment"),
		new e.text("Use flexbox alignment utilities to vertically and horizontally align columns."),

		//-----------------------

		new e.title("Vertical alignment"),
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

		new e.title("Horizontal alignment"),
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

		new e.title("Column wrapping"),
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

		new e.title("Column breaks"),
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
			"You may also apply this break at specific breakpoints with our {{https://getbootstrap.com/docs/5.3/utilities/display/::responsive display utilities}}."
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

		new e.title(""),
		new e.text(""),
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
		new e.alert({ color: "info", callout: true }, ""),
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

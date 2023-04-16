import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const gutters: IAttrContent = {
	title: "Gutters",
	description:
		"Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.",
	item: [
		new e.title("How they work"),
		new e.ul({
			item: [
				"{{b::Gutters are the gaps between column content, created by horizontal }}{{bc::padding}}{{b::.}} We set {{padding-right}} and {{padding-left}} on each column, and use negative {{margin}} to offset that at the start and end of each row to align content.",
				"{{b::Gutters start at }}{{bc::1.5rem }}{{b::(}}{{bc::24px}}{{b::) wide.}} This allows us to match Bootstrap grid to the {{nav:docs/utilities/spacing::padding and margin spacers}} scale.",
				"{{b::Gutters can be responsively adjusted.}} Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters.",
			],
		}),

		//-----------------------

		new e.title("Horizontal gutters"),
		new e.text(
			"{{.gx-*}} classes can be used to control the horizontal gutter widths. The {{.container}} or {{.container-fluid}} parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we’ve increased the padding with {{.px-4}}:"
		),
		new e.code({
			outputAttr: { class: "p-box" },
			output: () => {
				return new h.div(
					{ container: true, paddingX: 4, textAlign: "center" },
					new h.div({ row: true, gutterX: 5 }, [
						new h.div({ col: true }, new h.div({ padding: 3 }, "Custom column padding")),
						new h.div({ col: true }, new h.div({ padding: 3 }, "Custom column padding")),
					])
				);
			},
		}),
		new e.text(
			"An alternative solution is to add a wrapper around the {{.row}} with the {{.overflow-hidden}} class:"
		),
		new e.code({
			outputAttr: { class: "p-box" },
			output: () => {
				return new h.div(
					{ container: true, overflow: "hidden", textAlign: "center" },
					new h.div({ row: true, gutterX: 5 }, [
						new h.div({ col: true }, new h.div({ padding: 3 }, "Custom column padding")),
						new h.div({ col: true }, new h.div({ padding: 3 }, "Custom column padding")),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Vertical gutters"),
		new e.text(
			"{{.gy-*}} classes can be used to control the vertical gutter widths within a row when columns wrap to new lines. Like the horizontal gutters, the vertical gutters can cause some overflow below the {{.row}} at the end of a page. If this occurs, you add a wrapper around {{.row}} with the {{.overflow-hidden}} class:"
		),
		new e.code({
			outputAttr: { class: "p-box" },
			output: () => {
				return new h.div(
					{ container: true, overflow: "hidden", textAlign: "center" },
					new h.div({ row: true, gutterY: 5 }, [
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Custom column padding")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Custom column padding")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Custom column padding")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Custom column padding")),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Horizontal & vertical gutters"),
		new e.text(
			"Use {{.g-*}} classes to control the horizontal and vertical grid gutters. In the example below, we use a smaller gutter width, so there isn’t a need for the {{.overflow-hidden}} wrapper class."
		),
		new e.code({
			outputAttr: { class: "p-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, gutter: 2 }, [
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Custom column padding")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Custom column padding")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Custom column padding")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Custom column padding")),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Row columns gutters"),
		new e.text(
			"Gutter classes can also be added to {{nav:docs/layout/grid#row_columns::row columns}}. In the following example, we use responsive row columns and responsive gutter classes."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "p-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, gutter: [2, "lg-3"], rowCol: [2, "lg-5"] }, [
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
						new h.div({ col: 6 }, new h.div({ padding: 3 }, "Row column")),
					])
				);
			},
		}),

		//-----------------------

		new e.title("No gutters"),
		new e.text(
			"The gutters between columns in Bootstrap predefined grid classes can be removed with {{.g-0}}. This removes the negative {{margins}} from {{.row}} and the horizontal {{padding}} from all immediate children columns."
		),
		new e.text(
			"{{b::Need an edge-to-edge design?}} Drop the parent {{.container}} or {{.container-fluid}} and add {{.mx-0}} to the {{.row}} to prevent overflow."
		),
		new e.text(
			"In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more)."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ row: true, gutter: 0, textAlign: "center" }, [
					new h.div({ col: ["sm-6", "md-8"] }, ".col-sm-6 .col-md-8"),
					new h.div({ col: [6, "md-4"] }, ".col-6 .col-md-4"),
				]);
			},
		}),

		//-----------------------

		new e.title("Change the gutters"),
		new e.text(
			"Classes are built from the {{$gutters}} Sass map which is inherited from the {{$spacers}} Sass map."
		),
		new e.codepreview({
			type: "css",
			code: `
				$grid-gutter-width: 1.5rem;
				$gutters: (
				0: 0,
				1: $spacer * .25,
				2: $spacer * .5,
				3: $spacer,
				4: $spacer * 1.5,
				5: $spacer * 3,
				);
			`,
		}),
	],
};

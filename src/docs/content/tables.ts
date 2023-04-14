import { b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const tableItem = () => [
	new b.table.thead(
		new b.table.tr([
			new b.table.th({ scope: "col" }, "#"),
			new b.table.th({ scope: "col" }, "First"),
			new b.table.th({ scope: "col" }, "Last"),
			new b.table.th({ scope: "col" }, "Handle"),
		])
	),
	new b.table.tbody([
		new b.table.tr([
			new b.table.th({ scope: "row" }, "1"),
			new b.table.td("Mark"),
			new b.table.td("Otto"),
			new b.table.td("@mdo"),
		]),
		new b.table.tr([
			new b.table.th({ scope: "row" }, "2"),
			new b.table.td("Jacob"),
			new b.table.td("Thornton"),
			new b.table.td("@fat"),
		]),
		new b.table.tr([
			new b.table.th({ scope: "row" }, "3"),
			new b.table.td({ colspan: 2 }, "Larry the Bird"),
			new b.table.td("@twitter"),
		]),
	]),
];

export const tables: IAttrContent = {
	title: "Tables",
	description:
		"Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.",
	item: [
		new e.title("Overview"),
		new e.text(
			"Due to the widespread use of {{<table>}} elements across third-party widgets like calendars and date pickers, Bootstrap’s tables are opt-in. Add the base class {{.table}} to any {{<table>}}, then extend with our optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent."
		),
		new e.text("Using the most basic table markup, here’s how {{.table}}-based tables look in Bootstrap."),
		new e.code({
			outputAttr: { overflow: "auto" },
			output: () => {
				return new b.table.container([
					new b.table.thead(
						new b.table.tr([
							new b.table.th({ scope: "col" }, "#"),
							new b.table.th({ scope: "col" }, "First"),
							new b.table.th({ scope: "col" }, "Last"),
							new b.table.th({ scope: "col" }, "Handle"),
						])
					),
					new b.table.tbody([
						new b.table.tr([
							new b.table.th({ scope: "row" }, "1"),
							new b.table.td("Mark"),
							new b.table.td("Otto"),
							new b.table.td("@mdo"),
						]),
						new b.table.tr([
							new b.table.th({ scope: "row" }, "2"),
							new b.table.td("Jacob"),
							new b.table.td("Thornton"),
							new b.table.td("@fat"),
						]),
						new b.table.tr([
							new b.table.th({ scope: "row" }, "3"),
							new b.table.td({ colspan: 2 }, "Larry the Bird"),
							new b.table.td("@twitter"),
						]),
					]),
				]);
			},
		}),

		//-----------------------

		new e.title("Variants"),
		new e.text("Use contextual classes to color tables, table rows or individual cells."),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Heads up! }}Because of the more complicated CSS used to generate our table variants, they most likely won’t see color mode adaptive styling until v6."
		),
		new e.code({
			outputAttr: { overflow: "auto" },
			output: () => {
				return new b.table.container([
					new b.table.thead(
						new b.table.tr([
							new b.table.th({ scope: "col" }, "Class"),
							new b.table.th({ scope: "col" }, "Heading"),
							new b.table.th({ scope: "col" }, "Heading"),
						])
					),
					new b.table.tbody(
						[
							undefined,
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map(
							(i) =>
								new b.table.tr({ color: i as b.table.IAttrBSTableTr["color"] }, [
									new b.table.th(
										{ scope: "row" },
										i ? i.charAt(0).toUpperCase() + i.slice(1) : "Default"
									),
									new b.table.td("Cell"),
									new b.table.td("Cell"),
								])
						)
					),
				]);
			},
		}),
		new e.text("Set color on {{table}} and {{cell}}"),
		new e.code({
			outputAttr: { overflow: "auto" },
			output: () => {
				return new b.table.container({ color: "primary" }, [
					new b.table.thead(
						new b.table.tr([
							new b.table.th({ scope: "col" }, "Class"),
							new b.table.th({ scope: "col" }, "Heading"),
							new b.table.th({ scope: "col" }, "Heading"),
						])
					),
					new b.table.tbody(
						[
							undefined,
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map(
							(i) =>
								new b.table.tr([
									new b.table.th(
										{
											scope: "row",
											color: i as b.table.IAttrBSTableTh["color"],
										},
										i ? i.charAt(0).toUpperCase() + i.slice(1) : "Default"
									),
									new b.table.td("Cell"),
									new b.table.td({ color: i as b.table.IAttrBSTableTr["color"] }, "Cell"),
								])
						)
					),
				]);
			},
		}),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
		),

		//-----------------------

		new e.title("Accented tables"),

		//-----------------------

		new e.subtitle("Striped rows"),
		new e.text("Use {{.table-striped}} to add zebra-striping to any table row within the {{<tbody>}}."),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ striped: "row" }, tableItem());
			},
		}),

		//-----------------------

		new e.subtitle("Striped columns"),
		new e.text("Use {{.table-striped-columns}} to add zebra-striping to any table column."),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ striped: "col" }, tableItem());
			},
		}),
		new e.text("These classes can also be added to table variants:"),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ striped: "row", color: "dark" }, tableItem());
			},
		}),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ striped: "col", color: "dark" }, tableItem());
			},
		}),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ striped: "row", color: "success" }, tableItem());
			},
		}),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ striped: "col", color: "success" }, tableItem());
			},
		}),

		//-----------------------

		new e.title("Hoverable rows"),
		new e.text("Add {{.table-hover}} to enable a hover state on table rows within a {{<tbody>}}."),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ hoverable: true }, tableItem());
			},
		}),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ hoverable: true, color: "dark" }, tableItem());
			},
		}),
		new e.text("These hoverable rows can also be combined with the striped rows variant:"),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ hoverable: true, striped: "row" }, tableItem());
			},
		}),

		//-----------------------

		new e.title("Active tables"),
		new e.text("Highlight a table row or cell by adding a {{.table-active}} class."),
		new e.code({
			outputAttr: { overflow: "auto" },
			output: () => {
				return new b.table.container([
					new b.table.thead(
						new b.table.tr([
							new b.table.th({ scope: "col" }, "#"),
							new b.table.th({ scope: "col" }, "First"),
							new b.table.th({ scope: "col" }, "Last"),
							new b.table.th({ scope: "col" }, "Handle"),
						])
					),
					new b.table.tbody([
						new b.table.tr({ active: true }, [
							new b.table.th({ scope: "row" }, "1"),
							new b.table.td("Mark"),
							new b.table.td("Otto"),
							new b.table.td("@mdo"),
						]),
						new b.table.tr([
							new b.table.th({ scope: "row" }, "2"),
							new b.table.td("Jacob"),
							new b.table.td("Thornton"),
							new b.table.td("@fat"),
						]),
						new b.table.tr([
							new b.table.th({ scope: "row" }, "3"),
							new b.table.td({ colspan: 2, active: true }, "Larry the Bird"),
							new b.table.td("@twitter"),
						]),
					]),
				]);
			},
		}),

		//-----------------------

		new e.title("How do the variants and accented tables work?"),
		new e.text(
			"For the accented tables ({{https://getbootstrap.com/docs/5.3/content/tables/#striped-rows::striped rows}}, {{https://getbootstrap.com/docs/5.3/content/tables/#striped-columns::striped columns}}, {{https://getbootstrap.com/docs/5.3/content/tables/#hoverable-rows::hoverable rows}}, and {{https://getbootstrap.com/docs/5.3/content/tables/#active-tables::active tables}}), we used some techniques to make these effects work for all our {{https://getbootstrap.com/docs/5.3/content/tables/#variants::table variants}}:"
		),
		new e.ul({
			item: [
				"We start by setting the background of a table cell with the {{--bs-table-bg}} custom property. All table variants then set that custom property to colorize the table cells. This way, we don’t get into trouble if semi-transparent colors are used as table backgrounds.",
				"Then we add an inset box shadow on the table cells with {{box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);}} to layer on top of any specified {{background-color}}. Because we use a huge spread and no blur, the color will be monotone. Since {{--bs-table-accent-bg}} is unset by default, we don’t have a default box shadow.",
				"When either {{.table-striped}}, {{.table-striped-columns}}, {{.table-hover}} or {{.table-active}} classes are added, the {{--bs-table-accent-bg}} is set to a semitransparent color to colorize the background.",
				"For each table variant, we generate a {{--bs-table-accent-bg}} color with the highest contrast depending on that color. For example, the accent color for {{.table-primary}} is darker while {{.table-dark}} has a lighter accent color.",
				"Text and border colors are generated the same way, and their colors are inherited by default.",
			],
		}),
		new e.text("Behind the scenes it looks like this:"),
		new e.codepreview({
			type: "css",
			title: "scss/mixins/_table-variants.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/mixins/_table-variants.scss",
			code: `
				@mixin table-variant($state, $background) {
				.table-#{$state} {
					$color: color-contrast(opaque($body-bg, $background));
					$hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
					$striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
					$active-bg: mix($color, $background, percentage($table-active-bg-factor));
					$table-border-color: mix($color, $background, percentage($table-border-factor));

					--#{$prefix}table-color: #{$color};
					--#{$prefix}table-bg: #{$background};
					--#{$prefix}table-border-color: #{$table-border-color};
					--#{$prefix}table-striped-bg: #{$striped-bg};
					--#{$prefix}table-striped-color: #{color-contrast($striped-bg)};
					--#{$prefix}table-active-bg: #{$active-bg};
					--#{$prefix}table-active-color: #{color-contrast($active-bg)};
					--#{$prefix}table-hover-bg: #{$hover-bg};
					--#{$prefix}table-hover-color: #{color-contrast($hover-bg)};

					color: var(--#{$prefix}table-color);
					border-color: var(--#{$prefix}table-border-color);
				}
				}
			`,
		}),

		//-----------------------

		new e.title("Table borders"),
		new e.text("Add {{.table-bordered}} for borders on all sides of the table and cells."),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ bordered: true }, tableItem());
			},
		}),
		new e.text(
			"{{https://getbootstrap.com/docs/5.3/utilities/borders/#border-color::Border color utilities}} can be added to change colors:"
		),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ bordered: true, borderColor: "primary" }, tableItem());
			},
		}),

		//-----------------------

		new e.title("Tables without borders"),
		new e.text("Add {{.table-borderless}} for a table without borders."),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ bordered: false }, tableItem());
			},
		}),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ bordered: false, color: "dark" }, tableItem());
			},
		}),

		//-----------------------

		new e.title("Small tables"),
		new e.text("Add {{.table-sm}} to make any {{.table}} more compact by cutting all cell {{padding}} in half."),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ small: true }, tableItem());
			},
		}),
		new e.code({
			outputAttr: { overflow: "auto" },
			extention: [{ name: "tableItem", output: tableItem }],
			output: () => {
				return new b.table.container({ small: true, color: "dark" }, tableItem());
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

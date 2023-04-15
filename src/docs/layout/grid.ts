import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const grid: IAttrContent = {
	title: "Grid",
	description:
		"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.",
	item: [
		new e.title("Example"),
		new e.text(
			"Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with {{https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox::flexbox}} and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together."
		),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::New to or unfamiliar with flexbox? }}{{https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background::Read this CSS Tricks flexbox guide}} for background, terminology, guidelines, and code snippets."
		),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true }, [
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
					])
				);
			},
		}),
		new e.text(
			"The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent {{.container}}."
		),

		//-----------------------

		new e.title("How it works"),
		new e.text("Breaking it down, here’s how the grid system comes together:"),
		new e.ul({
			item: [
				"{{b::Our grid supports }}{{https://getbootstrap.com/docs/5.3/layout/breakpoints/::six responsive breakpoints}}. Breakpoints are based on {{min-width}} media queries, meaning they affect that breakpoint and all those above it (e.g., {{.col-sm-4}} applies to {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}). This means you can control container and column sizing and behavior by each breakpoint.",
				"{{b::Containers center and horizontally pad your content.}} Use {{.container}} for a responsive pixel width, {{.container-fluid}} for {{width: 100%}} across all viewports and devices, or a responsive container (e.g., {{.container-md}}) for a combination of fluid and pixel widths.",
				"{{b::Rows are wrappers for columns.}} Each column has horizontal {{padding}} (called a gutter) for controlling the space between them. This {{padding}} is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to {{https://getbootstrap.com/docs/5.3/layout/grid/#row-columns::uniformly apply column sizing}} and {{https://getbootstrap.com/docs/5.3/layout/gutters/::gutter classes}} to change the spacing of your content.",
				"{{b::Columns are incredibly flexible.}} There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.",
				"{{b::Gutters are also responsive and customizable.}} {{Be aware of the limitations and bugs around flexbox, like the inability to use some HTML elements as flex containers.::Gutter classes are available}} across all breakpoints, with all the same sizes as our {{https://getbootstrap.com/docs/5.3/utilities/spacing/::margin and padding spacing}}. Change horizontal gutters with {{.gx-*}} classes, vertical gutters with {{.gy-*}}, or all gutters with {{.g-*}} classes. {{.g-0}} is also available to remove gutters.",
				"{{b::Sass variables, maps, and mixins power the grid.}} If you don’t want to use the predefined grid classes in Bootstrap, you can use our {{https://getbootstrap.com/docs/5.3/layout/grid/#sass::grid’s source Sass}} to create your own with more semantic markup. We also include some CSS custom properties to consume these Sass variables for even greater flexibility for you.",
			],
		}),
		new e.text(
			"Be aware of the limitations and bugs around flexbox, like the inability to use some HTML elements as flex containers."
		),

		//-----------------------

		new e.title("Grid options"),
		new e.text(
			"Bootstrap’s grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default grid tiers are as follows:"
		),
		new e.ul({
			item: [
				"Extra small (xs)",
				"Small (sm)",
				"Medium (md)",
				"Large (lg)",
				"Extra large (xl)",
				"Extra extra large (xxl)",
			],
		}),
		new e.text(
			"As noted above, each of these breakpoints have their own container, unique class prefix, and modifiers. Here’s how the grid changes across these breakpoints:"
		),
		new e.table([
			new b.table.thead(
				new b.table.tr([
					new b.table.th({ scope: "col" }, ""),
					new b.table.th({ scope: "col" }, ["xs", new h.div({ fontWeight: "normal" }, "<576px")]),
					new b.table.th({ scope: "col" }, ["sm", new h.div({ fontWeight: "normal" }, "≥576px")]),
					new b.table.th({ scope: "col" }, ["md", new h.div({ fontWeight: "normal" }, "≥768px")]),
					new b.table.th({ scope: "col" }, ["lg", new h.div({ fontWeight: "normal" }, "≥992px")]),
					new b.table.th({ scope: "col" }, ["xl", new h.div({ fontWeight: "normal" }, "≥1200px")]),
					new b.table.th({ scope: "col" }, ["xxl", new h.div({ fontWeight: "normal" }, "≥1400px")]),
				])
			),
			new b.table.tbody([
				new b.table.tr([
					new b.table.th({ scope: "row" }, "Container {{max-width}}"),
					new b.table.td("None (auto)"),
					new b.table.td("540px"),
					new b.table.td("720px"),
					new b.table.td("960px"),
					new b.table.td("1140px"),
					new b.table.td("1320px"),
				]),
				new b.table.tr([
					new b.table.th({ scope: "row" }, "Class prefix"),
					new b.table.td("{{.col-}}"),
					new b.table.td("{{.col-sm-}}"),
					new b.table.td("{{.col-md-}}"),
					new b.table.td("{{.col-lg-}}"),
					new b.table.td("{{.col-xl-}}"),
					new b.table.td("{{.col-xxl-}}"),
				]),
				new b.table.tr([
					new b.table.th({ scope: "row" }, "# of columns"),
					new b.table.td({ colspan: 6 }, "12"),
				]),
				new b.table.tr([
					new b.table.th({ scope: "row" }, "Gutter width"),
					new b.table.td({ colspan: 6 }, "1.5rem (.75rem on left and right)"),
				]),
				new b.table.tr([
					new b.table.th({ scope: "row" }, "Custom gutters"),
					new b.table.td({ colspan: 6 }, "{{https://getbootstrap.com/docs/5.3/layout/gutters/::Yes}}"),
				]),
				new b.table.tr([
					new b.table.th({ scope: "row" }, "Nestable"),
					new b.table.td({ colspan: 6 }, "{{https://getbootstrap.com/docs/5.3/layout/grid/#nesting::Yes}}"),
				]),
				new b.table.tr([
					new b.table.th({ scope: "row" }, "Column ordering"),
					new b.table.td(
						{ colspan: 6 },
						"{{https://getbootstrap.com/docs/5.3/layout/columns/#reordering::Yes}}"
					),
				]),
			]),
		]),

		//-----------------------

		new e.title("Auto-layout columns"),
		new e.text(
			"Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like {{.col-sm-6}}."
		),

		//-----------------------

		new e.title("Equal-width"),
		new e.text(
			"For example, here are two grid layouts that apply to every device and viewport, from {{xs}} to {{xxl}}. Add any number of unit-less classes for each breakpoint you need and every column will be the same width."
		),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true }, [new h.div({ col: true }, "1 of 2"), new h.div({ col: true }, "2 of 2")]),
					new h.div({ row: true }, [
						new h.div({ col: true }, "1 of 3"),
						new h.div({ col: true }, "2 of 3"),
						new h.div({ col: true }, "3 of 3"),
					]),
				]);
			},
		}),

		//-----------------------

		new e.title("Setting one column width"),
		new e.text(
			"Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column."
		),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true }, [
						new h.div({ col: true }, "1 of 3"),
						new h.div({ col: 6 }, "2 of 3 (wider)"),
						new h.div({ col: true }, "2 of 3"),
					]),
					new h.div({ row: true }, [
						new h.div({ col: true }, "1 of 3"),
						new h.div({ col: 5 }, "2 of 3 (wider)"),
						new h.div({ col: true }, "3 of 3"),
					]),
				]);
			},
		}),

		//-----------------------

		new e.title("Variable width content"),
		new e.text(
			"Use {{col-{breakpoint}-auto}} classes to size columns based on the natural width of their content."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true, justifyContent: "md-center" }, [
						new h.div({ col: [true, "lg-2"] }, "1 of 3"),
						new h.div({ col: "md-auto" }, "Variable width content"),
						new h.div({ col: [true, "lg-2"] }, "2 of 3"),
					]),
					new h.div({ row: true }, [
						new h.div({ col: true }, "1 of 3"),
						new h.div({ col: "md-auto" }, "Variable witth content"),
						new h.div({ col: true }, "3 of 3"),
					]),
				]);
			},
		}),

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

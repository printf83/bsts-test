import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const grid: IAttrContent = {
	title: "Grid",
	description:
		"Use Bootstrap powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.",
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
			"The above example creates three equal-width columns across all devices and viewports using Bootstrap predefined grid classes. Those columns are centered in the page with the parent {{.container}}."
		),

		//-----------------------

		new e.title("How it works"),
		new e.text("Breaking it down, here’s how the grid system comes together:"),
		new e.ul({
			item: [
				"{{b::Bootstrap grid supports }}{{nav:docs/layout/breakpoints::six responsive breakpoints}}. Breakpoints are based on {{min-width}} media queries, meaning they affect that breakpoint and all those above it (e.g., {{.col-sm-4}} applies to {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}). This means you can control container and column sizing and behavior by each breakpoint.",
				"{{b::Containers center and horizontally pad your content.}} Use {{.container}} for a responsive pixel width, {{.container-fluid}} for {{width: 100%}} across all viewports and devices, or a responsive container (e.g., {{.container-md}}) for a combination of fluid and pixel widths.",
				"{{b::Rows are wrappers for columns.}} Each column has horizontal {{padding}} (called a gutter) for controlling the space between them. This {{padding}} is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to {{nav:docs/layout/grid#row_columns::uniformly apply column sizing}} and {{nav:docs/layout/gutters::gutter classes}} to change the spacing of your content.",
				"{{b::Columns are incredibly flexible.}} There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.",
				"{{b::Gutters are also responsive and customizable.}} {{Be aware of the limitations and bugs around flexbox, like the inability to use some HTML elements as flex containers.::Gutter classes are available}} across all breakpoints, with all the same sizes as Bootstrap {{nav:docs/utilities/spacing::margin and padding spacing}}. Change horizontal gutters with {{.gx-*}} classes, vertical gutters with {{.gy-*}}, or all gutters with {{.g-*}} classes. {{.g-0}} is also available to remove gutters.",
				"{{b::Sass variables, maps, and mixins power the grid.}} If you don’t want to use the predefined grid classes in Bootstrap, you can use Bootstrap {{nav:docs/layout/grid#sass::grid’s source Sass}} to create your own with more semantic markup. Bootstrap also include some CSS custom properties to consume these Sass variables for even greater flexibility for you.",
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
		new e.table(
			{
				responsiveAttr: "bs-title-name",
				responsiveCol: "15ch auto",
				responsiveColXs: "auto",
				responsiveHeader: ["Property", "Extra small", "Small", "Medium", "Large", "X-Large", "XX-Large"],
			},
			[
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
						new b.table.th({ scope: "row" }, new h.div("Container {{max-width}}")),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Small" }, "None (auto)"),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Small" }, "540px"),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Medium" }, "720px"),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Large" }, "960px"),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "X-Large" }, "1140px"),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "XX-Large" }, "1320px"),
					]),
					new b.table.tr([
						new b.table.th({ scope: "row" }, "Class prefix"),
						new b.table.td(
							{ responsiveAttr: "bs-title-name", responsiveTitle: "Extra small" },
							"{{.col-}}"
						),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Small" }, "{{.col-sm-}}"),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Medium" }, "{{.col-md-}}"),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Large" }, "{{.col-lg-}}"),
						new b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "X-Large" }, "{{.col-xl-}}"),
						new b.table.td(
							{ responsiveAttr: "bs-title-name", responsiveTitle: "XX-Large" },
							"{{.col-xxl-}}"
						),
					]),
					new b.table.tr([
						new b.table.th({ scope: "row" }, "# of columns"),
						new b.table.td(
							{ colspan: 6, responsiveAttr: "bs-title-name", responsiveTitle: "All breakpoint" },
							"12"
						),
					]),
					new b.table.tr([
						new b.table.th({ scope: "row" }, "Gutter width"),
						new b.table.td(
							{ colspan: 6, responsiveAttr: "bs-title-name", responsiveTitle: "All breakpoint" },
							"1.5rem (.75rem on left and right)"
						),
					]),
					new b.table.tr([
						new b.table.th({ scope: "row" }, "Custom gutters"),
						new b.table.td(
							{ colspan: 6, responsiveAttr: "bs-title-name", responsiveTitle: "All breakpoint" },
							"{{nav:docs/layout/gutters::Yes}}"
						),
					]),
					new b.table.tr([
						new b.table.th({ scope: "row" }, "Nestable"),
						new b.table.td(
							{ colspan: 6, responsiveAttr: "bs-title-name", responsiveTitle: "All breakpoint" },
							"{{nav:docs/layout/grid#nesting::Yes}}"
						),
					]),
					new b.table.tr([
						new b.table.th({ scope: "row" }, "Column ordering"),
						new b.table.td(
							{ colspan: 6, responsiveAttr: "bs-title-name", responsiveTitle: "All breakpoint" },
							"{{nav:docs/layout/columns#reordering::Yes}}"
						),
					]),
				]),
			]
		),

		//-----------------------

		new e.title("Auto-layout columns"),
		new e.text(
			"Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like {{.col-sm-6}}."
		),

		//-----------------------

		new e.subtitle("Equal-width"),
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

		new e.subtitle("Setting one column width"),
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

		new e.subtitle("Variable width content"),
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

		new e.title("Responsive classes"),
		new e.text(
			"Bootstrap’s grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit."
		),

		//-----------------------

		new e.subtitle("All breakpoints"),
		new e.text(
			"For grids that are the same from the smallest of devices to the largest, use the {{.col}} and {{.col-*}} classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to {{.col}}."
		),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true }, [
						new h.div({ col: true }, "col"),
						new h.div({ col: true }, "col"),
						new h.div({ col: true }, "col"),
						new h.div({ col: true }, "col"),
					]),
					new h.div({ row: true }, [new h.div({ col: 8 }, "col-8"), new h.div({ col: 4 }, "col-4")]),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Stacked to horizontal"),
		new e.text(
			"Using a single set of {{.col-sm-*}} classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint ({{sm}})."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					new h.div({ row: true }, [
						new h.div({ col: "sm-8" }, "col-sm-8"),
						new h.div({ col: "sm-4" }, "col-sm-4"),
					]),
					new h.div({ row: true }, [
						new h.div({ col: "sm" }, "col-sm"),
						new h.div({ col: "sm" }, "col-sm"),
						new h.div({ col: "sm" }, "col-sm"),
					]),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Mix and match"),
		new e.text(
			"Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div({ container: true, textAlign: "center" }, [
					//Stack the columns on mobile by making one full-width and the other half-width
					new h.div({ row: true }, [
						new h.div({ col: "md-8" }, ".col-md-8"),
						new h.div({ col: [6, "md-4"] }, ".col-6.col-md-4"),
					]),
					//Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop
					new h.div({ row: true }, [
						new h.div({ col: [6, "md-4"] }, ".col-6.col-md-4"),
						new h.div({ col: [6, "md-4"] }, ".col-6.col-md-4"),
						new h.div({ col: [6, "md-4"] }, ".col-6.col-md-4"),
					]),
					//Columns are always 50% wide, on mobile and desktop
					new h.div({ row: true }, [new h.div({ col: 6 }, ".col-6"), new h.div({ col: 6 }, ".col-6")]),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Row columns"),
		new e.text(
			"Use the responsive {{.row-cols-*}} classes to quickly set the number of columns that best render your content and layout. Whereas normal {{.col-*}} classes apply to the individual columns (e.g., {{.col-md-4}}), the row columns classes are set on the parent {{.row}} as a shortcut. With {{.row-cols-auto}} you can give the columns their natural width."
		),
		new e.text(
			"Use these row columns classes to quickly create basic grid layouts or to control your card layouts."
		),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, rowCol: 2 }, [
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
					])
				);
			},
		}),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, rowCol: 3 }, [
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
					])
				);
			},
		}),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, rowCol: "auto" }, [
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
					])
				);
			},
		}),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, rowCol: 4 }, [
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
					])
				);
			},
		}),
		new e.code({
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, rowCol: 4 }, [
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: 6 }, "Column"),
						new h.div({ col: true }, "Column"),
					])
				);
			},
		}),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true, rowCol: [1, "sm-2", "md-4"] }, [
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
						new h.div({ col: true }, "Column"),
					])
				);
			},
		}),
		new e.text("You can also use the accompanying Sass mixin, {{row-cols()}}:"),
		new e.codepreview({
			type: "css",
			code: `
				.element {
				// Three columns to start
				@include row-cols(3);

				// Five columns from medium breakpoint up
				@include media-breakpoint-up(md) {
					@include row-cols(5);
				}
				}
				`,
		}),

		//-----------------------

		new e.title("Nesting"),
		new e.text(
			"To nest your content with the default grid, add a new {{.row}} and set of {{.col-sm-*}} columns within an existing {{.col-sm-*}} column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns)."
		),
		new e.code({
			showViewport: true,
			outputAttr: { class: "col-box" },
			output: () => {
				return new h.div(
					{ container: true, textAlign: "center" },
					new h.div({ row: true }, [
						new h.div({ col: "sm-3" }, "Level 1: .col-sm-3"),
						new h.div(
							{ col: "sm-9" },
							new h.div({ row: true }, [
								new h.div({ col: [8, "sm-6"] }, "Level 2: .col-8 .col-sm-6"),
								new h.div({ col: [4, "sm-6"] }, "Level 2: .col-4 .col-sm-6"),
							])
						),
					])
				);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(
			"When using Bootstrap’s source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Bootstrap predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts."
		),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(
			"Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. Bootstrap use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below."
		),
		new e.codepreview({
			type: "css",
			code: `
				$grid-columns:      12;
				$grid-gutter-width: 1.5rem;
				$grid-row-columns:  6;
				`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
				$grid-breakpoints: (
				xs: 0,
				sm: 576px,
				md: 768px,
				lg: 992px,
				xl: 1200px,
				xxl: 1400px
				);
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
				$container-max-widths: (
				sm: 540px,
				md: 720px,
				lg: 960px,
				xl: 1140px,
				xxl: 1320px
				);
			`,
		}),

		//-----------------------

		new e.subtitle("Sass mixins"),
		new e.text(
			"Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns."
		),
		new e.codepreview({
			type: "css",
			code: `
				// Creates a wrapper for a series of columns
				@include make-row();

				// Make the element grid-ready (applying everything but the width)
				@include make-col-ready();

				// Without optional size values, the mixin will create equal columns (similar to using .col)
				@include make-col();
				@include make-col($size, $columns: $grid-columns);

				// Offset with margins
				@include make-col-offset($size, $columns: $grid-columns);
				`,
		}),

		//-----------------------

		new e.subtitle("Example usage"),
		new e.text(
			"You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between."
		),
		new e.codepreview({
			type: "css",
			code: `
				.example-container {
				@include make-container();
				// Make sure to define this width after the mixin to override
				// 'width: 100%' generated by 'make-container()'
				width: 800px;
				}

				.example-row {
				@include make-row();
				}

				.example-content-main {
				@include make-col-ready();

				@include media-breakpoint-up(sm) {
					@include make-col(6);
				}
				@include media-breakpoint-up(lg) {
					@include make-col(8);
				}
				}

				.example-content-secondary {
				@include make-col-ready();

				@include media-breakpoint-up(sm) {
					@include make-col(6);
				}
				@include media-breakpoint-up(lg) {
					@include make-col(4);
				}
				}
				`,
		}),
		new e.code({
			outputAttr: { class: "example-container-css" },
			output: () => {
				return new h.div(
					{ class: "example-container" },
					new h.div({ class: "example-row" }, [
						new h.div({ class: "example-content-main" }, "Main content"),
						new h.div({ class: "example-content-secondary" }, "Secondary content"),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Customizing the grid"),
		new e.text(
			"Using Bootstrap built-in grid Sass variables and maps, it’s possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths—then recompile."
		),

		//-----------------------

		new e.subtitle("Columns and gutters"),
		new e.text(
			"The number of grid columns can be modified via Sass variables. {{$grid-columns}} is used to generate the widths (in percent) of each individual column while {{$grid-gutter-width}} sets the width for the column gutters. {{$grid-row-columns}} is used to set the maximum number of columns of {{.row-cols-*}}, any number over this limit is ignored."
		),
		new e.codepreview({
			type: "css",
			code: `
				$grid-columns: 12 !default;
				$grid-gutter-width: 1.5rem !default;
				$grid-row-columns: 6 !default;
			`,
		}),

		//-----------------------

		new e.subtitle("Grid tiers"),
		new e.text(
			"Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the {{$grid-breakpoints}} and {{$container-max-widths}} to something like this:"
		),
		new e.codepreview({
			type: "css",
			code: `
				$grid-breakpoints: (
				xs: 0,
				sm: 480px,
				md: 768px,
				lg: 1024px
				);

				$container-max-widths: (
				sm: 420px,
				md: 720px,
				lg: 960px
				);
				`,
		}),
		new e.text(
			"When making any changes to the Sass variables or maps, you’ll need to save your changes and recompile. Doing so will output a brand-new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in {{px}} (not {{rem}}, {{em}}, or {{%}})."
		),
	],
};

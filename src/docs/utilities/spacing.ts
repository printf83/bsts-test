import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const spacing: IAttrContent = {
	title: "Spacing",
	description:
		"Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.",
	item: [
		new e.title("Margin and padding"),
		new e.text(
			"Assign responsive-friendly {{margin}} or {{padding}} values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from {{.25rem}} to {{3rem}}."
		),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Using the CSS Grid layout module?}} Consider using {{nav:docs/utilities/spacing#gap::the gap utility}} instead."
		),

		//-----------------------

		new e.subtitle("Notation"),
		new e.text(
			"Spacing utilities that apply to all breakpoints, from {{xs}} to {{xxl}}, have no breakpoint abbreviation in them. This is because those classes are applied from {{min-width: 0}} and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."
		),
		new e.text(
			"The classes are named using the format{{ {property}{sides}-{size} }}for {{xs}} and{{ {property}{sides}-{breakpoint}-{size} }}for {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}."
		),
		new e.text("Where {{i::property}} is one of:"),
		new e.ul({
			item: ["{{m}} - for classes that set {{margin}}", "{{p}} - for classes that set {{padding}}"],
		}),
		new e.text("Where {{i::sides}} is one of:"),
		new e.ul({
			item: [
				"{{t}} - for classes that set {{margin-top}} or {{padding-top}}",
				"{{b}} - for classes that set {{margin-bottom}} or {{padding-bottom}}",
				"{{s}} - (start) for classes that set {{margin-left}} or {{padding-left}} in LTR, {{margin-right}} or {{padding-right}} in RTL",
				"{{e}} - (end) for classes that set {{margin-right}} or {{padding-right}} in LTR, {{margin-left}} or {{padding-left}} in RTL",
				"{{x}} - for classes that set both {{*-left}} and {{*-right}}",
				"{{y}} - for classes that set both {{*-top}} and {{*-bottom}}",
				"blank - for classes that set a {{margin}} or {{padding}} on all 4 sides of the element",
			],
		}),
		new e.text("Where {{i::size}} is one of:"),
		new e.ul({
			item: [
				"{{0}} - for classes that eliminate the {{margin}} or {{padding}} by setting it to {{0}}",
				"{{1}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer * .25}}",
				"{{2}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer * .5}}",
				"{{3}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer}}",
				"{{4}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer * 1.5}}",
				"{{5}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer * 3}}",
				"{{auto}} - for classes that set the {{margin}} to auto",
			],
		}),
		new e.text("(You can add more sizes by adding entries to the {{$spacers}} Sass map variable.)"),

		//-----------------------

		new e.subtitle("Examples"),
		new e.text("Here are some representative examples of these classes:"),
		new e.codepreview({
			type: "css",
			code: `
				.mt-0 {
				margin-top: 0 !important;
				}

				.ms-1 {
				margin-left: ($spacer * .25) !important;
				}

				.px-2 {
				padding-left: ($spacer * .5) !important;
				padding-right: ($spacer * .5) !important;
				}

				.p-3 {
				padding: $spacer !important;
				}
				`,
		}),

		//-----------------------

		new e.subtitle("Horizontal centering"),
		new e.text(
			"Additionally, Bootstrap also includes an {{.mx-auto}} class for horizontally centering fixed-width block level content—that is, content that has {{display: block}} and a {{width}} set—by setting the horizontal margins to {{auto}}."
		),
		new e.code({
			outputAttr: { class: "flex-box" },
			output: () => {
				return new h.div({ marginX: "auto", padding: 2, style: { width: "200px" } }, "Centered element");
			},
		}),

		//-----------------------

		new e.title("Negative margin"),
		new e.alert(
			{ color: "warning", callout: true },
			"These negative margins are {{b::disabled by default}}, but can be enabled in Sass by setting {{$enable-negative-margins: true}}. Then, recompile your Sass. This features currently not supported by {{bsts}} until it enable default by Bootstrap."
		),
		new e.text("In CSS, {{margin}} properties can utilize negative values ({{padding}} cannot)."),
		new e.text(
			"The syntax is nearly the same as the default, positive margin utilities, but with the addition of {{n}} before the requested size. Here’s an example class that’s the opposite of {{.mt-1}}:"
		),
		new e.codepreview({
			type: "css",
			code: `
				.mt-n1 {
				margin-top: -0.25rem !important;
				}
				`,
		}),
		new e.text("If you like to use this feature in {{bsts}}, you need to write the class manually:"),
		new e.codepreview({
			type: "js",
			code: `
				() => {
					return new h.div({ padding: 2, class: "mt-n1" }, "Negative margin");
				}
				`,
		}),

		//-----------------------

		new e.title("Gap"),
		new e.alert(
			{ color: "warning", callout: true },
			"{{b::CSS Grid is opt-in}}. Disable the default grid system by setting {{$enable-grid-classes: false}} and enable the CSS Grid by setting {{$enable-cssgrid: true}}. Then, recompile your Sass. This features currently not supported by {{bsts}} until it enable default by Bootstrap."
		),
		new e.text(
			"When using {{display: grid}} or {{display: flex}}, you can make use of {{gap}} utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container. Gap utilities are responsive by default, and are generated via Bootstrap utilities API, based on the {{$spacers}} Sass map."
		),

		new e.codepreview({
			type: "html",
			code: `
				<div class="grid gap-3">
				<div class="p-2 g-col-6">Grid item 1</div>
				<div class="p-2 g-col-6">Grid item 2</div>
				<div class="p-2 g-col-6">Grid item 3</div>
				<div class="p-2 g-col-6">Grid item 4</div>
				</div>
				`,
		}),
		new e.text("If you like to use this feature in {{bsts}}, you need to write the class manually:"),
		new e.codepreview({
			type: "js",
			code: `
				() => {
					return new h.div({ gap: 3, class: "grid" }, [
						new h.div({ padding: 2, class: "g-col-6" }, "Grid item 1"),
						new h.div({ padding: 2, class: "g-col-6" }, "Grid item 2"),
						new h.div({ padding: 2, class: "g-col-6" }, "Grid item 3"),
						new h.div({ padding: 2, class: "g-col-6" }, "Grid item 4"),
					]);
				}
				`,
		}),

		//-----------------------

		new e.subtitle("row-gap"),
		new e.text("{{row-gap}} sets the vertical space between children items in the specified container."),
		new e.codepreview({
			type: "html",
			code: `
				<div class="grid gap-0 row-gap-3">
				<div class="p-2 g-col-6">Grid item 1</div>
				<div class="p-2 g-col-6">Grid item 2</div>
				<div class="p-2 g-col-6">Grid item 3</div>
				<div class="p-2 g-col-6">Grid item 4</div>
				</div>
				`,
		}),

		//-----------------------

		new e.subtitle("column-gap"),
		new e.text("{{column-gap}} sets the horizontal space between children items in the specified container."),
		new e.codepreview({
			type: "html",
			code: `
				<div class="grid gap-0 column-gap-3">
				<div class="p-2 g-col-6">Grid item 1</div>
				<div class="p-2 g-col-6">Grid item 2</div>
				<div class="p-2 g-col-6">Grid item 3</div>
				<div class="p-2 g-col-6">Grid item 4</div>
				</div>
				`,
		}),

		//-----------------------

		new e.title("Sass"),
		new e.subtitle("Maps"),
		new e.text("Spacing utilities are declared via Sass map and then generated with Bootstrap utilities API."),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
				$spacer: 1rem;
				$spacers: (
				0: 0,
				1: $spacer * .25,
				2: $spacer * .5,
				3: $spacer,
				4: $spacer * 1.5,
				5: $spacer * 3,
				);
			`,
		}),

		//-----------------------

		new e.subtitle("Utilities API"),
		new e.text(
			"Spacing utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
			code: `
				"margin": (
				responsive: true,
				property: margin,
				class: m,
				values: map-merge($spacers, (auto: auto))
				),
				"margin-x": (
				responsive: true,
				property: margin-right margin-left,
				class: mx,
				values: map-merge($spacers, (auto: auto))
				),
				"margin-y": (
				responsive: true,
				property: margin-top margin-bottom,
				class: my,
				values: map-merge($spacers, (auto: auto))
				),
				"margin-top": (
				responsive: true,
				property: margin-top,
				class: mt,
				values: map-merge($spacers, (auto: auto))
				),
				"margin-end": (
				responsive: true,
				property: margin-right,
				class: me,
				values: map-merge($spacers, (auto: auto))
				),
				"margin-bottom": (
				responsive: true,
				property: margin-bottom,
				class: mb,
				values: map-merge($spacers, (auto: auto))
				),
				"margin-start": (
				responsive: true,
				property: margin-left,
				class: ms,
				values: map-merge($spacers, (auto: auto))
				),
				// Negative margin utilities
				"negative-margin": (
				responsive: true,
				property: margin,
				class: m,
				values: $negative-spacers
				),
				"negative-margin-x": (
				responsive: true,
				property: margin-right margin-left,
				class: mx,
				values: $negative-spacers
				),
				"negative-margin-y": (
				responsive: true,
				property: margin-top margin-bottom,
				class: my,
				values: $negative-spacers
				),
				"negative-margin-top": (
				responsive: true,
				property: margin-top,
				class: mt,
				values: $negative-spacers
				),
				"negative-margin-end": (
				responsive: true,
				property: margin-right,
				class: me,
				values: $negative-spacers
				),
				"negative-margin-bottom": (
				responsive: true,
				property: margin-bottom,
				class: mb,
				values: $negative-spacers
				),
				"negative-margin-start": (
				responsive: true,
				property: margin-left,
				class: ms,
				values: $negative-spacers
				),
				// Padding utilities
				"padding": (
				responsive: true,
				property: padding,
				class: p,
				values: $spacers
				),
				"padding-x": (
				responsive: true,
				property: padding-right padding-left,
				class: px,
				values: $spacers
				),
				"padding-y": (
				responsive: true,
				property: padding-top padding-bottom,
				class: py,
				values: $spacers
				),
				"padding-top": (
				responsive: true,
				property: padding-top,
				class: pt,
				values: $spacers
				),
				"padding-end": (
				responsive: true,
				property: padding-right,
				class: pe,
				values: $spacers
				),
				"padding-bottom": (
				responsive: true,
				property: padding-bottom,
				class: pb,
				values: $spacers
				),
				"padding-start": (
				responsive: true,
				property: padding-left,
				class: ps,
				values: $spacers
				),
				// Gap utility
				"gap": (
				responsive: true,
				property: gap,
				class: gap,
				values: $spacers
				),
				"row-gap": (
				responsive: true,
				property: row-gap,
				class: row-gap,
				values: $spacers
				),
				"column-gap": (
				responsive: true,
				property: column-gap,
				class: column-gap,
				values: $spacers
				),
			`,
		}),
	],
};

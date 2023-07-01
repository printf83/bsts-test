import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const breakpoints: IAttrContent = {
	title: "Breakpoints",
	description:
		"Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.",
	item: () => {
		return [
			new e.title("Core concepts"),
			new e.ul({
				item: [
					"{{b::Breakpoints are the building blocks of responsive design}}. Use them to control when your layout can be adapted at a particular viewport or device size.",
					"{{b::Use media queries to architect your CSS by breakpoint}}. Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. Bootstrap most commonly use {{min-width}} in Bootstrap media queries.",
					"{{b::Mobile first, responsive design is the goal}}. Bootstrap’s CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.",
				],
			}),

			//-----------------------

			new e.title("Available breakpoints"),
			new e.text(
				"Bootstrap includes six default breakpoints, sometimes referred to as {{i::grid tiers}}, for building responsively. These breakpoints can be customized if you’re using Bootstrap source Sass files."
			),
			new e.table({
				item: [
					["Breakpoint", "Class infix", "Dimensions"],
					["Extra small", "{{i::None}}", "<576px"],
					["Small", "{{sm}}", "≥576px"],
					["Medium", "{{md}}", "≥768px"],
					["Large", "{{lg}}", "≥992px"],
					["Extra large", "{{xl}}", "≥1200px"],
					["Extra extra large", "{{xxl}}", "≥1400px"],
				],
			}),
			new e.text(
				"Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. Breakpoints are also representative of a subset of common device sizes and viewport dimensions—they don’t specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device."
			),
			new e.text(
				"These breakpoints are customizable via Sass—you’ll find them in a Sass map in Bootstrap {{_variables.scss}} stylesheet."
			),
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
			new e.text(
				"For more information and examples on how to modify Bootstrap Sass maps and variables, please refer to {{nav:docs/layout/grid#sass::the Sass section of the Grid documentation}}."
			),

			//-----------------------

			new e.title("Media queries"),
			new e.text(
				"Since Bootstrap is developed to be mobile first, Bootstrap use a handful of {{https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries::media queries}} to create sensible breakpoints for Bootstrap layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes."
			),

			//-----------------------

			new e.subtitle("Min-width"),
			new e.text(
				"Bootstrap primarily uses the following media query ranges—or breakpoints—in Bootstrap source Sass files for Bootstrap layout, grid system, and components."
			),

			new e.codepreview({
				type: "css",
				code: `
				// Source mixins

				// No media query necessary for xs breakpoint as it's effectively '@media (min-width: 0) { ... }'
				@include media-breakpoint-up(sm) { ... }
				@include media-breakpoint-up(md) { ... }
				@include media-breakpoint-up(lg) { ... }
				@include media-breakpoint-up(xl) { ... }
				@include media-breakpoint-up(xxl) { ... }

				// Usage

				// Example: Hide starting at 'min-width: 0', and then show at the 'sm' breakpoint
				.custom-class {
				display: none;
				}
				@include media-breakpoint-up(sm) {
				.custom-class {
					display: block;
				}
				}

				`,
			}),
			new e.text(
				"These Sass mixins translate in Bootstrap compiled CSS using the values declared in Bootstrap Sass variables. For example:"
			),
			new e.codepreview({
				type: "css",
				code: `
				// X-Small devices (portrait phones, less than 576px)
				// No media query for 'xs' since this is the default in Bootstrap

				// Small devices (landscape phones, 576px and up)
				@media (min-width: 576px) { ... }

				// Medium devices (tablets, 768px and up)
				@media (min-width: 768px) { ... }

				// Large devices (desktops, 992px and up)
				@media (min-width: 992px) { ... }

				// X-Large devices (large desktops, 1200px and up)
				@media (min-width: 1200px) { ... }

				// XX-Large devices (larger desktops, 1400px and up)
				@media (min-width: 1400px) { ... }

				`,
			}),

			//-----------------------

			new e.subtitle("Max-width"),
			new e.text(
				"Bootstrap occasionally use media queries that go in the other direction (the given screen size or smaller):"
			),
			new e.codepreview({
				type: "css",
				code: `
				// No media query necessary for xs breakpoint as it's effectively '@media (max-width: 0) { ... }'
				@include media-breakpoint-down(sm) { ... }
				@include media-breakpoint-down(md) { ... }
				@include media-breakpoint-down(lg) { ... }
				@include media-breakpoint-down(xl) { ... }
				@include media-breakpoint-down(xxl) { ... }

				// Example: Style from medium breakpoint and down
				@include media-breakpoint-down(md) {
				.custom-class {
					display: block;
				}
				}

				`,
			}),
			new e.text(
				"These mixins take those declared breakpoints, subtract {{.02px}} from them, and use them as Bootstrap {{max-width}} values. For example:"
			),
			new e.codepreview({
				type: "css",
				code: `
				// 'xs' returns only a ruleset and no media query
				// ... { ... }

				// 'sm' applies to x-small devices (portrait phones, less than 576px)
				@media (max-width: 575.98px) { ... }

				// 'md' applies to small devices (landscape phones, less than 768px)
				@media (max-width: 767.98px) { ... }

				// 'lg' applies to medium devices (tablets, less than 992px)
				@media (max-width: 991.98px) { ... }

				// 'xl' applies to large devices (desktops, less than 1200px)
				@media (max-width: 1199.98px) { ... }

				// 'xxl' applies to x-large devices (large desktops, less than 1400px)
				@media (max-width: 1399.98px) { ... }

				`,
			}),
			new e.alert(
				{ color: "warning", callout: true },
				"{{b::Why subtract .02px?}} Browsers don’t currently support {{https://www.w3.org/TR/mediaqueries-4/#range-context::range context queries}}, so Bootstrap work around the limitations of {{https://www.w3.org/TR/mediaqueries-4/#mq-min-max::min- and max- prefixes}} and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision."
			),

			//-----------------------

			new e.subtitle("Single breakpoint"),
			new e.text(
				"There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths."
			),
			new e.codepreview({
				type: "css",
				code: `
					@include media-breakpoint-only(xs) { ... }
					@include media-breakpoint-only(sm) { ... }
					@include media-breakpoint-only(md) { ... }
					@include media-breakpoint-only(lg) { ... }
					@include media-breakpoint-only(xl) { ... }
					@include media-breakpoint-only(xxl) { ... }
				`,
			}),
			new e.text("For example the {{@include media-breakpoint-only(md) { ... } }}will result in :"),
			new e.codepreview({
				type: "css",
				code: `@media (min-width: 768px) and (max-width: 991.98px) { ... }`,
			}),

			//-----------------------

			new e.subtitle("Between breakpoints"),
			new e.text("Similarly, media queries may span multiple breakpoint widths:"),
			new e.codepreview({
				type: "css",
				code: `@include media-breakpoint-between(md, xl) { ... }`,
			}),
			new e.text("Which results in:"),
			new e.codepreview({
				type: "css",
				code: `
				// Example
				// Apply styles starting from medium devices and up to extra large devices
				@media (min-width: 768px) and (max-width: 1199.98px) { ... }

				`,
			}),
		];
	},
};

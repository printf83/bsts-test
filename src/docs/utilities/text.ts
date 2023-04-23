import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const text: IAttrContent = {
	title: "Text",
	description:
		"Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.",
	item: [
		new e.title("Text alignment"),
		new e.text(
			"Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system."
		),
		new e.code({
			showViewport: true,
			output: () => {
				return [
					new h.p({ textAlign: "start" }, "Start aligned text on all viewport sizes."),
					new h.p({ textAlign: "center" }, "Center aligned text on all viewport sizes."),
					new h.p({ textAlign: "end" }, "End aligned text on all viewport sizes."),
					new h.p({ textAlign: "sm-end" }, "End aligned text on viewports sized SM (small) or wider."),
					new h.p({ textAlign: "md-end" }, "End aligned text on viewports sized MD (medium) or wider."),
					new h.p({ textAlign: "lg-end" }, "End aligned text on viewports sized LG (large) or wider."),
					new h.p({ textAlign: "xl-end" }, "End aligned text on viewports sized XL (extra-large) or wider."),
				];
			},
		}),
		new e.alert(
			{ color: "info", callout: true },
			" Note that Bootstrap don’t provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read."
		),

		//-----------------------

		new e.title("Text wrapping and overflow"),
		new e.text("Wrap text with a {{.text-wrap}} class."),
		new e.code({
			output: () => {
				return new b.badge(
					{ bgColor: "primary", textWrap: true, style: { width: "6rem" } },
					"This text should wrap."
				);
			},
		}),
		new e.text("Prevent text from wrapping with a {{.text-nowrap}} class."),
		new e.code({
			output: () => {
				return new h.div(
					{ bgColor: "body-secondary", textWrap: false, style: { width: "8rem" } },
					"This text should overflow the parent."
				);
			},
		}),

		//-----------------------

		new e.title("Word break"),
		new e.text(
			"Prevent long strings of text from breaking your components’ layout by using {{.text-break}} to set {{word-wrap: break-word}} and {{word-break: break-word}}. Bootstrap use {{word-wrap}} instead of the more common {{overflow-wrap}} for wider browser support, and add the deprecated {{word-break: break-word}} to avoid issues with flex containers."
		),
		new e.code({
			output: () => {
				return new h.p(
					{ textBreak: true },
					"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
				);
			},
		}),
		new e.alert(
			{ color: "warning", callout: true },
			"Note that {{https://rtlstyling.com/posts/rtl-styling#3.-line-break::breaking words isn’t possible in Arabic}}, which is the most used RTL language. Therefore {{.text-break}} is removed from Bootstrap RTL compiled CSS."
		),

		//-----------------------

		new e.title("Text transform"),
		new e.text("Transform text in components with text capitalization classes."),
		new e.code({
			output: () => {
				return [
					new h.p({ textTransform: "lowercase" }, "Lowercased text."),
					new h.p({ textTransform: "uppercase" }, "Uppercased text."),
					new h.p({ textTransform: "capitalize" }, "CapiTaliZed text."),
				];
			},
		}),
		new e.text(
			"Note how {{.text-capitalize}} only changes the first letter of each word, leaving the case of any other letters unaffected."
		),

		//-----------------------

		new e.title("Font size"),
		new e.text(
			"Quickly change the {{font-size}} of text. While Bootstrap heading classes (e.g., {{.h1}}–{{.h6}}) apply {{font-size}}, {{font-weight}}, and {{line-height}}, these utilities only apply {{font-size}}. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases."
		),
		new e.code({
			output: () => {
				return [1, 2, 3, 4, 5, 6].map(
					(i) => new h.p({ fontSize: i as core.IAttr["fontSize"] }, `.fs-${i} text`)
				);
			},
		}),
		new e.text("Customize your available {{font-sizes}} by modifying the {{$font-sizes}} Sass map."),

		//-----------------------

		new e.title("Font weight and italics"),
		new e.text(
			"Quickly change the {{font-weight}} or {{font-style}} of text with these utilities. {{font-style}} utilities are abbreviated as {{.fst-*}} and {{font-weight}} utilities are abbreviated as {{.fw-*}}."
		),
		new e.code({
			output: () => {
				return [
					new h.p({ fontWeight: "bold" }, "Bold text"),
					new h.p({ fontWeight: "bolder" }, "Bolder weight text (relative to the parent element)."),
					new h.p({ fontWeight: "semibold" }, "Semibold weight text."),
					new h.p({ fontWeight: "medium" }, "Medium weight text."),
					new h.p({ fontWeight: "normal" }, "Normal weight text."),
					new h.p({ fontWeight: "light" }, "Light weight text."),
					new h.p({ fontWeight: "lighter" }, "Lighter weight text (relative to the parent element)."),
					new h.p({ fontItalic: true }, "Italic text."),
					new h.p({ fontItalic: false }, "Text with normal font style"),
				];
			},
		}),

		//-----------------------

		new e.title("Line height"),
		new e.text("Change the line height with {{.lh-*}} utilities."),
		new e.code({
			output: () => {
				const text =
					"This is a long paragraph written to show how the line-height of an element is affected by Bootstrap utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with Bootstrap utility API.";

				return [
					new h.p({ lineHeight: 1 }, text),
					new h.p({ lineHeight: "sm" }, text),
					new h.p({ lineHeight: "base" }, text),
					new h.p({ lineHeight: "lg" }, text),
				];
			},
		}),

		//-----------------------

		new e.title("Monospace"),
		new e.text("Change a selection to Bootstrap monospace font stack with {{.font-monospace}}."),
		new e.code({
			output: () => {
				return new h.p({ monospace: true }, "This is in monospace");
			},
		}),

		//-----------------------

		new e.title("Reset color"),
		new e.text("Reset a text or link’s color with {{.text-reset}}, so that it inherits the color from its parent."),
		new e.code({
			output: () => {
				return new h.p({ textColor: "body-secondary" }, [
					"Muted text with a ",
					new h.a({ href: "#", textColor: "reset" }, "reset link"),
					".",
				]);
			},
		}),

		//-----------------------

		new e.title("Text decoration"),
		new e.text("Decorate text in components with text decoration classes."),
		new e.code({
			output: () => {
				return [
					new h.p({ textDecoration: "underline" }, "This text has a line underneath it."),
					new h.p({ textDecoration: "line-through" }, "This text has a line going through it."),
					new h.a({ href: "#", textDecoration: "none" }, "This link has its text decoration removed"),
				];
			},
		}),

		new e.title("CSS"),
		new e.subtitle("Sass variables"),
		new e.text("Default type and font related Sass variables:"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				// stylelint-disable value-keyword-case
				$font-family-sans-serif:      system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
				$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
				// stylelint-enable value-keyword-case
				$font-family-base:            var(--#{$prefix}font-sans-serif);
				$font-family-code:            var(--#{$prefix}font-monospace);

				// $font-size-root affects the value of 'rem', which is used for as well font sizes, paddings, and margins
				// $font-size-base affects the font size of the body text
				$font-size-root:              null;
				$font-size-base:              1rem; // Assumes the browser default, typically '16px'
				$font-size-sm:                $font-size-base * .875;
				$font-size-lg:                $font-size-base * 1.25;

				$font-weight-lighter:         lighter;
				$font-weight-light:           300;
				$font-weight-normal:          400;
				$font-weight-medium:          500;
				$font-weight-semibold:        600;
				$font-weight-bold:            700;
				$font-weight-bolder:          bolder;

				$font-weight-base:            $font-weight-normal;

				$line-height-base:            1.5;
				$line-height-sm:              1.25;
				$line-height-lg:              2;

				$h1-font-size:                $font-size-base * 2.5;
				$h2-font-size:                $font-size-base * 2;
				$h3-font-size:                $font-size-base * 1.75;
				$h4-font-size:                $font-size-base * 1.5;
				$h5-font-size:                $font-size-base * 1.25;
				$h6-font-size:                $font-size-base;
			`,
		}),

		//-----------------------

		new e.subtitle("Sass maps"),
		new e.text("Font-size utilities are generated from this map, in combination with Bootstrap utilities API."),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$font-sizes: (
				1: $h1-font-size,
				2: $h2-font-size,
				3: $h3-font-size,
				4: $h4-font-size,
				5: $h5-font-size,
				6: $h6-font-size
				);
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_maps.scss",
			code: `
				$theme-colors-text: (
				"primary": $primary-text-emphasis,
				"secondary": $secondary-text-emphasis,
				"success": $success-text-emphasis,
				"info": $info-text-emphasis,
				"warning": $warning-text-emphasis,
				"danger": $danger-text-emphasis,
				"light": $light-text-emphasis,
				"dark": $dark-text-emphasis,
				);
			`,
		}),

		//-----------------------

		new e.title("Utilities API"),
		new e.text(
			"Font and text utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss",
			code: `
				"font-family": (
				property: font-family,
				class: font,
				values: (monospace: var(--#{$prefix}font-monospace))
				),
				"font-size": (
				rfs: true,
				property: font-size,
				class: fs,
				values: $font-sizes
				),
				"font-style": (
				property: font-style,
				class: fst,
				values: italic normal
				),
				"font-weight": (
				property: font-weight,
				class: fw,
				values: (
					lighter: $font-weight-lighter,
					light: $font-weight-light,
					normal: $font-weight-normal,
					medium: $font-weight-medium,
					semibold: $font-weight-semibold,
					bold: $font-weight-bold,
					bolder: $font-weight-bolder
				)
				),
				"line-height": (
				property: line-height,
				class: lh,
				values: (
					1: 1,
					sm: $line-height-sm,
					base: $line-height-base,
					lg: $line-height-lg,
				)
				),
				"text-align": (
				responsive: true,
				property: text-align,
				class: text,
				values: (
					start: left,
					end: right,
					center: center,
				)
				),
				"text-decoration": (
				property: text-decoration,
				values: none underline line-through
				),
				"text-transform": (
				property: text-transform,
				class: text,
				values: lowercase uppercase capitalize
				),
				"white-space": (
				property: white-space,
				class: text,
				values: (
					wrap: normal,
					nowrap: nowrap,
				)
				),
				"word-wrap": (
				property: word-wrap word-break,
				class: text,
				values: (break: break-word),
				rtl: false
				),
			`,
		}),
	],
};

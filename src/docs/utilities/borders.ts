import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const borders: IAttrContent = {
	title: "Borders",
	description:
		"Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.",
	item: [
		new e.title("Border"),
		new e.text(
			"Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time."
		),

		//-----------------------

		new e.subtitle("Additive"),
		new e.text("Add borders to custom elements:"),

		new e.code({
			outputAttr: { display: "flex", gap: 2, class: "span-box" },
			output: () => {
				const data: core.IAttr["border"][] = [true, "top", "end", "bottom", "start"];

				return data.map((i) => {
					return new h.span({
						border: i,
					});
				});
			},
		}),

		//-----------------------

		new e.subtitle("Subtractive"),
		new e.text("Or remove borders:"),

		new e.code({
			outputAttr: { display: "flex", gap: 2, class: "span-box" },
			output: () => {
				const data: core.IAttr["borderNone"][] = [true, "top", "end", "bottom", "start"];

				return data.map((i) => {
					return new h.span({
						border: true,
						borderNone: i,
					});
				});
			},
		}),

		//-----------------------

		new e.title("Color"),
		new e.alert(
			{ color: "info", callout: true },
			"Border utilities like {{.border-*}} that generated from Bootstrap original {{$theme-colors}} Sass map don’t yet respond to color modes, however, any {{.border-*-subtle}} utility will. This will be resolved in v6."
		),
		new e.text("Change the border color using utilities built on Bootstrap theme colors."),
		new e.code({
			outputAttr: { display: "flex", gap: 2, class: "span-box" },
			output: () => {
				const data: core.IAttr["borderColor"][] = [
					"primary",
					"primary-subtle",
					"secondary",
					"secondary-subtle",
					"success",
					"success-subtle",
					"danger",
					"danger-subtle",
					"warning",
					"warning-subtle",
					"info",
					"info-subtle",
					"light",
					"light-subtle",
					"dark",
					"dark-subtle",
					"black",
					"white",
				];

				return data.map((i) => {
					return new h.span({
						border: true,
						borderColor: i,
					});
				});
			},
		}),

		new e.text("Or modify the default {{border-color}} of a component:"),

		new e.code({
			output: () => {
				return [
					b.form.input({
						borderColor: "success",

						container: { marginBottom: 4 },
						label: "Email address",
						type: "email",
						placeholder: "name@example.com",
					}),
					new h.div(
						{
							border: "bottom",
							borderColor: "danger",

							class: "h4",
							paddingBottom: 2,
							marginBottom: 4,
							textColor: "danger",
						},
						"Dangerous heading"
					),
					new h.div(
						{
							border: true,
							borderColor: "info",
							borderNone: "start",

							padding: 3,
							bgColor: "info",
							bgOpacity: 10,
							rounded: "end",
						},
						"Changing border color and width"
					),
				];
			},
		}),

		//-----------------------

		new e.title("Opacity"),
		new e.text(
			"Bootstrap {{border-{color} }}utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes."
		),

		//-----------------------

		new e.subtitle("How it works"),
		new e.text("Consider Bootstrap default {{.border-success}} utility."),
		new e.codepreview({
			type: "css",
			code: `
				.border-success {
				--bs-border-opacity: 1;
				border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
				}
				`,
		}),
		new e.text(
			"Bootstrap use an RGB version of Bootstrap {{--bs-success}} (with the value of {{25}}, {{135}}, {{84}}) CSS variable and attached a second CSS variable, {{--bs-bg-opacity}}, for the alpha transparency (with a default value 1 thanks to a local CSS variable). That means anytime you use {{.bg-success}} now, your computed {{color}} value is {{rgba(25, 135, 84, 1)}}. The local CSS variable inside each {{.bg-*}} class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency."
		),

		//-----------------------

		new e.subtitle("Example"),
		new e.text("To change that opacity, override {{--bs-border-opacity}} via custom styles or inline styles."),
		new e.code({
			output: () => {
				return [
					new h.div(
						{ border: true, borderColor: "success", padding: 2, marginBottom: 2 },
						"This is default success border"
					),
					new h.div(
						{ border: true, borderColor: "success", padding: 2, style: { "--bs-border-opacity": ".5" } },
						"This is 50% opacity success border"
					),
				];
			},
		}),
		new e.text("Or, choose from any of the {{.border-opacity}} utilities:"),
		new e.code({
			output: () => {
				return [undefined, 75, 50, 25, 10].map((i, ix) => {
					return new h.div(
						{
							border: true,
							borderColor: "success",
							borderOpacity: i as core.IAttr["borderOpacity"],
							padding: 2,
							marginBottom: ix < 4 ? 2 : undefined,
						},
						`This is ${i ? i + "% opacity" : "default"} success border`
					);
				});
			},
		}),

		//-----------------------

		new e.title("Width"),
		new e.code({
			outputAttr: { display: "flex", gap: 2, class: "span-box" },
			output: () => {
				return [1, 2, 3, 4, 5].map((i) => {
					return new h.span({
						border: true,
						borderWidth: i as core.IAttr["borderWidth"],
					});
				});
			},
		}),

		//-----------------------

		new e.title("Radius"),
		new e.text("Add classes to an element to easily round its corners."),
		new e.code({
			outputAttr: { display: "flex", gap: 2 },
			output: () => {
				return [true, "top", "end", "bottom", "start", "circle", "pill"].map((i) => {
					return new h.img({
						src: `https://picsum.photos/seed/bsts_0/${i === "pill" ? "150" : "75"}/75.webp`,
						alt: "...",
						rounded: i as core.IAttr["rounded"],
					});
				});
			},
		}),

		//-----------------------

		new e.subtitle("Sizes"),
		new e.text(
			"Use the scaling classes for larger or smaller rounded corners. Sizes range from {{0}} to {{5}}, and can be configured by modifying the utilities API."
		),
		new e.code({
			outputAttr: { display: "flex", gap: 2 },
			output: () => {
				return [0, 1, 2, 3, 4, 5].map((i) => {
					return new h.img({
						src: `https://picsum.photos/seed/bsts_0/75/75.webp`,
						alt: "...",
						roundedSize: i as core.IAttr["roundedSize"],
					});
				});
			},
		}),
		new e.code({
			outputAttr: { display: "flex", gap: 2 },
			output: () => {
				return [
					new h.img({
						src: `https://picsum.photos/seed/bsts_0/75/75.webp`,
						alt: "...",
						rounded: "bottom-1",
					}),
					new h.img({
						src: `https://picsum.photos/seed/bsts_0/75/75.webp`,
						alt: "...",
						rounded: "start-2",
					}),
					new h.img({
						src: `https://picsum.photos/seed/bsts_0/75/75.webp`,
						alt: "...",
						rounded: "end-circle",
					}),
					new h.img({
						src: `https://picsum.photos/seed/bsts_0/75/75.webp`,
						alt: "...",
						rounded: "start-pill",
					}),
					new h.img({
						src: `https://picsum.photos/seed/bsts_0/75/75.webp`,
						alt: "...",
						rounded: "top-0",
						roundedSize: 5,
					}),
				];
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.codepreview({
			type: "css",
			title: "scss/_root.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_root.scss",
			code: `
				--#{$prefix}border-width: #{$border-width};
				--#{$prefix}border-style: #{$border-style};
				--#{$prefix}border-color: #{$border-color};
				--#{$prefix}border-color-translucent: #{$border-color-translucent};

				--#{$prefix}border-radius: #{$border-radius};
				--#{$prefix}border-radius-sm: #{$border-radius-sm};
				--#{$prefix}border-radius-lg: #{$border-radius-lg};
				--#{$prefix}border-radius-xl: #{$border-radius-xl};
				--#{$prefix}border-radius-xxl: #{$border-radius-xxl};
				--#{$prefix}border-radius-2xl: var(--#{$prefix}border-radius-xxl); // Deprecated in v5.3.0 for consistency
				--#{$prefix}border-radius-pill: #{$border-radius-pill};
			`,
		}),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
				$border-width:                1px;
				$border-widths: (
				1: 1px,
				2: 2px,
				3: 3px,
				4: 4px,
				5: 5px
				);
				$border-style:                solid;
				$border-color:                $gray-300;
				$border-color-translucent:    rgba($black, .175);
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
				$border-radius:               .375rem;
				$border-radius-sm:            .25rem;
				$border-radius-lg:            .5rem;
				$border-radius-xl:            1rem;
				$border-radius-xxl:           2rem;
				$border-radius-pill:          50rem;
			`,
		}),
		new e.text("Variables for setting {{border-color}} in {{.border-*-subtle}} utilities in light and dark mode:"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
				$primary-border-subtle:   tint-color($primary, 60%);
				$secondary-border-subtle: tint-color($secondary, 60%);
				$success-border-subtle:   tint-color($success, 60%);
				$info-border-subtle:      tint-color($info, 60%);
				$warning-border-subtle:   tint-color($warning, 60%);
				$danger-border-subtle:    tint-color($danger, 60%);
				$light-border-subtle:     $gray-200;
				$dark-border-subtle:      $gray-500;
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables-dark.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables-dark.scss",
			code: `
				$primary-border-subtle-dark:        shade-color($primary, 40%);
				$secondary-border-subtle-dark:      shade-color($secondary, 40%);
				$success-border-subtle-dark:        shade-color($success, 40%);
				$info-border-subtle-dark:           shade-color($info, 40%);
				$warning-border-subtle-dark:        shade-color($warning, 40%);
				$danger-border-subtle-dark:         shade-color($danger, 40%);
				$light-border-subtle-dark:          $gray-700;
				$dark-border-subtle-dark:           $gray-800;
			`,
		}),

		//-----------------------

		new e.subtitle("Sass maps"),
		new e.text("Color mode adaptive border colors are also available as a Sass map:"),

		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss",
			code: `
				$theme-colors-border-subtle: (
				"primary": $primary-border-subtle,
				"secondary": $secondary-border-subtle,
				"success": $success-border-subtle,
				"info": $info-border-subtle,
				"warning": $warning-border-subtle,
				"danger": $danger-border-subtle,
				"light": $light-border-subtle,
				"dark": $dark-border-subtle,
				);
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss",
			code: `
				$theme-colors-border-subtle-dark: (
				"primary": $primary-border-subtle-dark,
				"secondary": $secondary-border-subtle-dark,
				"success": $success-border-subtle-dark,
				"info": $info-border-subtle-dark,
				"warning": $warning-border-subtle-dark,
				"danger": $danger-border-subtle-dark,
				"light": $light-border-subtle-dark,
				"dark": $dark-border-subtle-dark,
				);
			`,
		}),

		//-----------------------

		new e.subtitle("Sass mixins"),
		new e.codepreview({
			type: "css",
			title: "scss/mixins/_border-radius.scsss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_border-radius.scss",
			code: `
				@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
				@if $enable-rounded {
					border-radius: valid-radius($radius);
				}
				@else if $fallback-border-radius != false {
					border-radius: $fallback-border-radius;
				}
				}

				@mixin border-top-radius($radius: $border-radius) {
				@if $enable-rounded {
					border-top-left-radius: valid-radius($radius);
					border-top-right-radius: valid-radius($radius);
				}
				}

				@mixin border-end-radius($radius: $border-radius) {
				@if $enable-rounded {
					border-top-right-radius: valid-radius($radius);
					border-bottom-right-radius: valid-radius($radius);
				}
				}

				@mixin border-bottom-radius($radius: $border-radius) {
				@if $enable-rounded {
					border-bottom-right-radius: valid-radius($radius);
					border-bottom-left-radius: valid-radius($radius);
				}
				}

				@mixin border-start-radius($radius: $border-radius) {
				@if $enable-rounded {
					border-top-left-radius: valid-radius($radius);
					border-bottom-left-radius: valid-radius($radius);
				}
				}

				@mixin border-top-start-radius($radius: $border-radius) {
				@if $enable-rounded {
					border-top-left-radius: valid-radius($radius);
				}
				}

				@mixin border-top-end-radius($radius: $border-radius) {
				@if $enable-rounded {
					border-top-right-radius: valid-radius($radius);
				}
				}

				@mixin border-bottom-end-radius($radius: $border-radius) {
				@if $enable-rounded {
					border-bottom-right-radius: valid-radius($radius);
				}
				}

				@mixin border-bottom-start-radius($radius: $border-radius) {
				@if $enable-rounded {
					border-bottom-left-radius: valid-radius($radius);
				}
				}
			`,
		}),

		//-----------------------

		new e.subtitle("Utilities API"),
		new e.text(
			"Border utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
			code: `
				"border": (
				property: border,
				values: (
					null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
					0: 0,
				)
				),
				"border-top": (
				property: border-top,
				values: (
					null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
					0: 0,
				)
				),
				"border-end": (
				property: border-right,
				class: border-end,
				values: (
					null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
					0: 0,
				)
				),
				"border-bottom": (
				property: border-bottom,
				values: (
					null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
					0: 0,
				)
				),
				"border-start": (
				property: border-left,
				class: border-start,
				values: (
					null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
					0: 0,
				)
				),
				"border-color": (
				property: border-color,
				class: border,
				local-vars: (
					"border-opacity": 1
				),
				values: $utilities-border-colors
				),
				"subtle-border-color": (
				property: border-color,
				class: border,
				values: $utilities-border-subtle
				),
				"border-width": (
				property: border-width,
				class: border,
				values: $border-widths
				),
				"border-opacity": (
				css-var: true,
				class: border-opacity,
				values: (
					10: .1,
					25: .25,
					50: .5,
					75: .75,
					100: 1
				)
				),
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
			code: `
				"rounded": (
				property: border-radius,
				class: rounded,
				values: (
					null: var(--#{$prefix}border-radius),
					0: 0,
					1: var(--#{$prefix}border-radius-sm),
					2: var(--#{$prefix}border-radius),
					3: var(--#{$prefix}border-radius-lg),
					4: var(--#{$prefix}border-radius-xl),
					5: var(--#{$prefix}border-radius-xxl),
					circle: 50%,
					pill: var(--#{$prefix}border-radius-pill)
				)
				),
				"rounded-top": (
				property: border-top-left-radius border-top-right-radius,
				class: rounded-top,
				values: (
					null: var(--#{$prefix}border-radius),
					0: 0,
					1: var(--#{$prefix}border-radius-sm),
					2: var(--#{$prefix}border-radius),
					3: var(--#{$prefix}border-radius-lg),
					4: var(--#{$prefix}border-radius-xl),
					5: var(--#{$prefix}border-radius-xxl),
					circle: 50%,
					pill: var(--#{$prefix}border-radius-pill)
				)
				),
				"rounded-end": (
				property: border-top-right-radius border-bottom-right-radius,
				class: rounded-end,
				values: (
					null: var(--#{$prefix}border-radius),
					0: 0,
					1: var(--#{$prefix}border-radius-sm),
					2: var(--#{$prefix}border-radius),
					3: var(--#{$prefix}border-radius-lg),
					4: var(--#{$prefix}border-radius-xl),
					5: var(--#{$prefix}border-radius-xxl),
					circle: 50%,
					pill: var(--#{$prefix}border-radius-pill)
				)
				),
				"rounded-bottom": (
				property: border-bottom-right-radius border-bottom-left-radius,
				class: rounded-bottom,
				values: (
					null: var(--#{$prefix}border-radius),
					0: 0,
					1: var(--#{$prefix}border-radius-sm),
					2: var(--#{$prefix}border-radius),
					3: var(--#{$prefix}border-radius-lg),
					4: var(--#{$prefix}border-radius-xl),
					5: var(--#{$prefix}border-radius-xxl),
					circle: 50%,
					pill: var(--#{$prefix}border-radius-pill)
				)
				),
				"rounded-start": (
				property: border-bottom-left-radius border-top-left-radius,
				class: rounded-start,
				values: (
					null: var(--#{$prefix}border-radius),
					0: 0,
					1: var(--#{$prefix}border-radius-sm),
					2: var(--#{$prefix}border-radius),
					3: var(--#{$prefix}border-radius-lg),
					4: var(--#{$prefix}border-radius-xl),
					5: var(--#{$prefix}border-radius-xxl),
					circle: 50%,
					pill: var(--#{$prefix}border-radius-pill)
				)
				),
			`,
		}),
	],
};

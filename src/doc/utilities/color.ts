import { core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const color: IAttrContent = {
	title: "Colors",
	description:
		"Convey meaning through {{color}} with a handful of color utility classes. Includes support for styling links with hover states, too.",
	item: [
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
		),
		new e.title("Colors"),
		new e.text(
			"Colorize text with color utilities. If you want to colorize links, you can use the {{https://getbootstrap.com/docs/5.3/helpers/colored-links/::.link-* helper classes}} which have {{:hover}} and {{:focus}} states."
		),
		new e.alert(
			{ color: "info", callout: true },
			"Color utilities like {{.text-*}} that generated from Bootstrap original {{$theme-colors}} Sass map don’t yet respond to color modes, however, any {{.text-*-emphasis}} utility will. This will be resolved in v6. "
		),
		new e.code({
			output: () => {
				const data: {
					textColor: core.IAttr["textColor"];
					bgColor?: core.IAttr["bgColor"];
					textOpacity?: core.IAttr["textOpacity"];
				}[] = [
					{ textColor: "primary" },
					{ textColor: "primary-emphasis" },
					{ textColor: "secondary" },
					{ textColor: "secondary-emphasis" },
					{ textColor: "success" },
					{ textColor: "success-emphasis" },
					{ textColor: "danger" },
					{ textColor: "danger-emphasis" },
					{ textColor: "warning", bgColor: "dark" },
					{ textColor: "warning-emphasis" },
					{ textColor: "info", bgColor: "dark" },
					{ textColor: "info-emphasis" },
					{ textColor: "light", bgColor: "dark" },
					{ textColor: "light-emphasis" },
					{ textColor: "dark" },
					{ textColor: "dark-emphasis" },

					{ textColor: "body" },
					{ textColor: "body-emphasis" },
					{ textColor: "body-secondary" },
					{ textColor: "body-tertiary" },

					{ textColor: "black" },
					{ textColor: "white", bgColor: "dark" },
					{ textColor: "black", textOpacity: 50 },
					{ textColor: "white", textOpacity: 50, bgColor: "dark" },
				];

				return data.map((i) => {
					return new h.p({ bgColor: i.bgColor, textColor: i.textColor, textOpacity: i.textOpacity }, [
						`.text-${i.textColor}`,
						i.textOpacity ? `.text-opacity-${i.textOpacity}` : "",
					]);
				});
			},
		}),

		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Deprecation:}} With the addition of {{.text-opacity-*}} utilities and CSS variables for text utilities, {{.text-black-50}} and {{.text-white-50}} are deprecated as of v5.1.0. They’ll be removed in v6.0.0. "
		),

		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Deprecation:}} With the addition of the expanded theme colors and variables, the {{.text-muted}} utility has been deprecated as of v5.3.0. Its default value has also been reassigned to the new {{--bs-secondary-color}} CSS variable to better support color modes. It will be removed in v6.0.0."
		),

		//-----------------------

		new e.title("Opacity"),
		new e.text(
			"As of v5.1.0, {{text-color}} utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes."
		),

		//-----------------------

		new e.subtitle("How it works"),
		new e.text("Consider Bootstrap default {{.text-primary}} utility."),
		new e.codepreview({
			type: "css",
			code: `
				.text-primary {
				--bs-text-opacity: 1;
				color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
				}
				`,
		}),
		new e.text(
			"We use an RGB version of Bootstrap {{--bs-primary}} (with the value of {{13}}, {{110}}, {{253}}) CSS variable and attached a second CSS variable, {{--bs-text-opacity}}, for the alpha transparency (with a default value {{1}} thanks to a local CSS variable). That means anytime you use {{.text-primary}} now, your computed {{color}} value is {{rgba(13, 110, 253, 1)}}. The local CSS variable inside each {{.text-*}} class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency."
		),

		//-----------------------

		new e.subtitle("Example"),
		new e.text("To change that opacity, override {{--bs-text-opacity}} via custom styles or inline styles."),
		new e.code({
			output: () => {
				return [
					new h.div({ textColor: "primary" }, "This is default primary text"),
					new h.div(
						{ textColor: "primary", style: { "--bs-text-opacity": ".5" } },
						"This is 50% opacity primary text"
					),
				];
			},
		}),
		new e.text("Or, choose from any of the {{.text-opacity}} utilities:"),
		new e.code({
			output: () => {
				return [undefined, 75, 50, 25].map((i) => {
					return new h.div(
						{
							textColor: "primary",
							textOpacity: i as core.IAttr["textOpacity"],
						},
						`This is ${i ? i + "% opacity" : "default"} primary text`
					);
				});
			},
		}),
		//-----------------------

		new e.title("Specificity"),
		new e.text(
			"Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element’s content in a {{<div>}} or more semantic element with the desired class."
		),

		//-----------------------

		new e.title("CSS"),
		new e.text(
			"In addition to the following Sass functionality, consider reading about Bootstrap included {{https://getbootstrap.com/docs/5.3/customize/css-variables/::CSS custom properties}} (aka CSS variables) for colors and more."
		),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(
			"Most {{color}} utilities are generated by Bootstrap theme colors, reassigned from Bootstrap generic color palette variables."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
                $blue:    #0d6efd;
                $indigo:  #6610f2;
                $purple:  #6f42c1;
                $pink:    #d63384;
                $red:     #dc3545;
                $orange:  #fd7e14;
                $yellow:  #ffc107;
                $green:   #198754;
                $teal:    #20c997;
                $cyan:    #0dcaf0;
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
                $primary:       $blue;
                $secondary:     $gray-600;
                $success:       $green;
                $info:          $cyan;
                $warning:       $yellow;
                $danger:        $red;
                $light:         $gray-100;
                $dark:          $gray-900;
			`,
		}),
		new e.text("Grayscale colors are also available, but only a subset are used to generate any utilities."),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
                $white:    #fff;
                $gray-100: #f8f9fa;
                $gray-200: #e9ecef;
                $gray-300: #dee2e6;
                $gray-400: #ced4da;
                $gray-500: #adb5bd;
                $gray-600: #6c757d;
                $gray-700: #495057;
                $gray-800: #343a40;
                $gray-900: #212529;
                $black:    #000;
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

		new e.text("Variables for setting colors in {{.text-*-emphasis}} utilities in light and dark mode:"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$primary-text-emphasis:   shade-color($primary, 60%);
				$secondary-text-emphasis: shade-color($secondary, 60%);
				$success-text-emphasis:   shade-color($success, 60%);
				$info-text-emphasis:      shade-color($info, 60%);
				$warning-text-emphasis:   shade-color($warning, 60%);
				$danger-text-emphasis:    shade-color($danger, 60%);
				$light-text-emphasis:     $gray-700;
				$dark-text-emphasis:      $gray-700;
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables-dark.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables-dark.scss",
			code: `
				$primary-text-emphasis-dark:        tint-color($primary, 40%);
				$secondary-text-emphasis-dark:      tint-color($secondary, 40%);
				$success-text-emphasis-dark:        tint-color($success, 40%);
				$info-text-emphasis-dark:           tint-color($info, 40%);
				$warning-text-emphasis-dark:        tint-color($warning, 40%);
				$danger-text-emphasis-dark:         tint-color($danger, 40%);
				$light-text-emphasis-dark:          $gray-100;
				$dark-text-emphasis-dark:           $gray-300;
			`,
		}),

		//-----------------------

		new e.subtitle("Sass maps"),
		new e.text(
			"Theme colors are then put into a Sass map so we can loop over them to generate Bootstrap utilities, component modifiers, and more."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
                $theme-colors: (
                "primary":    $primary,
                "secondary":  $secondary,
                "success":    $success,
                "info":       $info,
                "warning":    $warning,
                "danger":     $danger,
                "light":      $light,
                "dark":       $dark
                );
			`,
		}),
		new e.text(
			"Grayscale colors are also available as a Sass map. {{b::This map is not used to generate any utilities}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
                $grays: (
                "100": $gray-100,
                "200": $gray-200,
                "300": $gray-300,
                "400": $gray-400,
                "500": $gray-500,
                "600": $gray-600,
                "700": $gray-700,
                "800": $gray-800,
                "900": $gray-900
                );
			`,
		}),
		new e.text("RGB colors are generated from a separate Sass map:"),
		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_maps.scss",
			code: `
                $theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value");
			`,
		}),
		new e.text("Color opacities build on that with their own map that’s consumed by the utilities API:"),
		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_maps.scss",
			code: `
				$utilities-text: map-merge(
				$utilities-colors,
				(
					"black": to-rgb($black),
					"white": to-rgb($white),
					"body": to-rgb($body-color)
				)
				);
				$utilities-text-colors: map-loop($utilities-text, rgba-css-var, "$key", "text");

				$utilities-text-emphasis-colors: (
				"primary-emphasis": var(--#{$prefix}primary-text-emphasis),
				"secondary-emphasis": var(--#{$prefix}secondary-text-emphasis),
				"success-emphasis": var(--#{$prefix}success-text-emphasis),
				"info-emphasis": var(--#{$prefix}info-text-emphasis),
				"warning-emphasis": var(--#{$prefix}warning-text-emphasis),
				"danger-emphasis": var(--#{$prefix}danger-text-emphasis),
				"light-emphasis": var(--#{$prefix}light-text-emphasis),
				"dark-emphasis": var(--#{$prefix}dark-text-emphasis)
				);
			`,
		}),
		new e.text("Color mode background colors are also available as a Sass map:"),
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
		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_maps.scss",
			code: `
				$theme-colors-text-dark: (
				"primary": $primary-text-emphasis-dark,
				"secondary": $secondary-text-emphasis-dark,
				"success": $success-text-emphasis-dark,
				"info": $info-text-emphasis-dark,
				"warning": $warning-text-emphasis-dark,
				"danger": $danger-text-emphasis-dark,
				"light": $light-text-emphasis-dark,
				"dark": $dark-text-emphasis-dark,
				);
			`,
		}),

		//-----------------------

		new e.subtitle("Utilities API"),
		new e.text(
			"Color utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:doc/utilities/api#using_the_api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss",
			code: `
				"color": (
				property: color,
				class: text,
				local-vars: (
					"text-opacity": 1
				),
				values: map-merge(
					$utilities-text-colors,
					(
					"muted": var(--#{$prefix}secondary-color), // deprecated
					"black-50": rgba($black, .5), // deprecated
					"white-50": rgba($white, .5), // deprecated
					"body-secondary": var(--#{$prefix}secondary-color),
					"body-tertiary": var(--#{$prefix}tertiary-color),
					"body-emphasis": var(--#{$prefix}emphasis-color),
					"reset": inherit,
					)
				)
				),
				"text-opacity": (
				css-var: true,
				class: text-opacity,
				values: (
					25: .25,
					50: .5,
					75: .75,
					100: 1
				)
				),
				"text-color": (
				property: color,
				class: text,
				values: $utilities-text-emphasis-colors
				),
			`,
		}),
	],
};

import { core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const background: IAttrContent = {
	title: "Background",
	description: "Convey meaning through {{background-color}} and add decoration with gradients.",
	item: [
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
		),
		new e.title("Background color"),
		new e.text(
			"Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities {{b::do not set }}{{bc::color}}, so in some cases you’ll want to use {{.text-*}} {{nav:docs/utilities/colors::color utilities}}."
		),
		new e.alert(
			{ color: "info", callout: true },
			" Background utilities like {{.bg-*}} that generated from Bootstrap original {{$theme-colors}} Sass map don’t yet respond to color modes, however, any {{.bg-*-subtle}} utility will. This will be resolved in v6. "
		),
		new e.code({
			output: () => {
				const data: { bgColor: core.IAttr["bgColor"]; textColor?: core.IAttr["textColor"] }[] = [
					{ bgColor: "primary", textColor: "white" },
					{ bgColor: "primary-subtle", textColor: "primary-emphasis" },
					{ bgColor: "secondary", textColor: "white" },
					{ bgColor: "secondary-subtle", textColor: "secondary-emphasis" },
					{ bgColor: "success", textColor: "white" },
					{ bgColor: "success-subtle", textColor: "success-emphasis" },
					{ bgColor: "danger", textColor: "white" },
					{ bgColor: "danger-subtle", textColor: "danger-emphasis" },
					{ bgColor: "warning", textColor: "dark" },
					{ bgColor: "warning-subtle", textColor: "warning-emphasis" },
					{ bgColor: "info", textColor: "dark" },
					{ bgColor: "info-subtle", textColor: "info-emphasis" },
					{ bgColor: "light", textColor: "dark" },
					{ bgColor: "light-subtle", textColor: "light-emphasis" },
					{ bgColor: "dark", textColor: "white" },
					{ bgColor: "dark-subtle", textColor: "dark-emphasis" },
					{ bgColor: "body-secondary" },
					{ bgColor: "body-tertiary" },
					{ bgColor: "body", textColor: "body" },
					{ bgColor: "black", textColor: "white" },
					{ bgColor: "white", textColor: "dark" },
					{ bgColor: "transparent", textColor: "body" },
				];

				return data.map((i) => {
					return new h.div(
						{ padding: 3, marginBottom: 2, bgColor: i.bgColor, textColor: i.textColor },
						`.bg-${i.bgColor}`
					);
				});
			},
		}),

		//-----------------------

		new e.title("Background gradient"),
		new e.text(
			"By adding a {{.bg-gradient}} class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom."
		),
		new e.text("Do you need a gradient in your custom CSS? Just add {{background-image: var(--bs-gradient);}}."),
		new e.code({
			output: () => {
				const data: { bgColor: core.IAttr["bgColor"]; textColor?: core.IAttr["textColor"] }[] = [
					{ bgColor: "primary", textColor: "white" },
					{ bgColor: "primary-subtle", textColor: "primary-emphasis" },
					{ bgColor: "secondary", textColor: "white" },
					{ bgColor: "secondary-subtle", textColor: "secondary-emphasis" },
					{ bgColor: "success", textColor: "white" },
					{ bgColor: "success-subtle", textColor: "success-emphasis" },
					{ bgColor: "danger", textColor: "white" },
					{ bgColor: "danger-subtle", textColor: "danger-emphasis" },
					{ bgColor: "warning", textColor: "dark" },
					{ bgColor: "warning-subtle", textColor: "warning-emphasis" },
					{ bgColor: "info", textColor: "dark" },
					{ bgColor: "info-subtle", textColor: "info-emphasis" },
					{ bgColor: "light", textColor: "dark" },
					{ bgColor: "light-subtle", textColor: "light-emphasis" },
					{ bgColor: "dark", textColor: "white" },
					{ bgColor: "dark-subtle", textColor: "dark-emphasis" },
					{ bgColor: "body-secondary" },
					{ bgColor: "body-tertiary" },
					{ bgColor: "body", textColor: "body" },
					{ bgColor: "black", textColor: "white" },
					{ bgColor: "white", textColor: "dark" },
					{ bgColor: "transparent", textColor: "body" },
				];

				return data.map((i) => {
					return new h.div(
						{ padding: 3, marginBottom: 2, bgColor: i.bgColor, textColor: i.textColor, bgGradient: true },
						`.bg-${i.bgColor}.bg-gradient`
					);
				});
			},
		}),

		//-----------------------

		new e.title("Opacity"),
		new e.text(
			"As of v5.1.0, {{background-color}} utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes."
		),

		//-----------------------

		new e.subtitle("How it works"),
		new e.text("Consider Bootstrap default {{.bg-success}} utility."),
		new e.codepreview({
			type: "css",
			code: `
                .bg-success {
                --bs-bg-opacity: 1;
                background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
                }
				`,
		}),
		new e.text(
			"Bootstrap use an RGB version of Bootstrap {{--bs-success}} (with the value of {{25}}, {{135}}, {{84}}) CSS variable and attached a second CSS variable, {{--bs-bg-opacity}}, for the alpha transparency (with a default value 1 thanks to a local CSS variable). That means anytime you use {{.bg-success}} now, your computed {{color}} value is {{rgba(25, 135, 84, 1)}}. The local CSS variable inside each {{.bg-*}} class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency."
		),

		//-----------------------

		new e.subtitle("Example"),
		new e.text("To change that opacity, override {{--bs-bg-opacity}} via custom styles or inline styles."),
		new e.code({
			output: () => {
				return [
					new h.div(
						{ bgColor: "success", textColor: "white", padding: 2 },
						"This is default success background"
					),
					new h.div(
						{ bgColor: "success", textColor: "white", padding: 2, style: { "--bs-bg-opacity": ".5" } },
						"This is 50% opacity success background"
					),
				];
			},
		}),
		new e.text("Or, choose from any of the {{.bg-opacity}} utilities:"),
		new e.code({
			output: () => {
				return [undefined, 75, 50, 25, 10].map((i) => {
					return new h.div(
						{
							bgColor: "success",
							textColor: i && i < 75 ? "body-emphasis" : "white",
							padding: 2,
							bgOpacity: i as core.IAttr["bgOpacity"],
						},
						`This is ${i ? i + "% opacity" : "default"} success background`
					);
				});
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(
			"In addition to the following Sass functionality, consider reading about Bootstrap included {{https://getbootstrap.com/docs/5.3/customize/css-variables/::CSS custom properties}} (aka CSS variables) for colors and more."
		),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(
			"Most {{background-color}} utilities are generated by Bootstrap theme colors, reassigned from Bootstrap generic color palette variables."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
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
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
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
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
                $gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0));
			`,
		}),
		new e.text("Grayscale colors are also available, but only a subset are used to generate any utilities."),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
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
		new e.text("Variables for setting {{background-color}} in {{.bg-*-subtle}} utilities in light and dark mode:"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
                $primary-bg-subtle:       tint-color($primary, 80%);
                $secondary-bg-subtle:     tint-color($secondary, 80%);
                $success-bg-subtle:       tint-color($success, 80%);
                $info-bg-subtle:          tint-color($info, 80%);
                $warning-bg-subtle:       tint-color($warning, 80%);
                $danger-bg-subtle:        tint-color($danger, 80%);
                $light-bg-subtle:         mix($gray-100, $white);
                $dark-bg-subtle:          $gray-400;
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables-dark.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables-dark.scss",
			code: `
                $primary-bg-subtle-dark:            shade-color($primary, 80%);
                $secondary-bg-subtle-dark:          shade-color($secondary, 80%);
                $success-bg-subtle-dark:            shade-color($success, 80%);
                $info-bg-subtle-dark:               shade-color($info, 80%);
                $warning-bg-subtle-dark:            shade-color($warning, 80%);
                $danger-bg-subtle-dark:             shade-color($danger, 80%);
                $light-bg-subtle-dark:              $gray-800;
                $dark-bg-subtle-dark:               mix($gray-800, $black);
			`,
		}),

		//-----------------------

		new e.subtitle("Sass maps"),
		new e.text(
			"Theme colors are then put into a Sass map so Bootstrap can loop over them to generate Bootstrap utilities, component modifiers, and more."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
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
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
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
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss",
			code: `
                $theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value");
			`,
		}),
		new e.text("Background color opacities build on that with their own map that’s consumed by the utilities API:"),
		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss",
			code: `
                $utilities-bg: map-merge(
                $utilities-colors,
                (
                    "black": to-rgb($black),
                    "white": to-rgb($white),
                    "body": to-rgb($body-bg)
                )
                );
                $utilities-bg-colors: map-loop($utilities-bg, rgba-css-var, "$key", "bg");

                $utilities-bg-subtle: (
                "primary-subtle": var(--#{$prefix}primary-bg-subtle),
                "secondary-subtle": var(--#{$prefix}secondary-bg-subtle),
                "success-subtle": var(--#{$prefix}success-bg-subtle),
                "info-subtle": var(--#{$prefix}info-bg-subtle),
                "warning-subtle": var(--#{$prefix}warning-bg-subtle),
                "danger-subtle": var(--#{$prefix}danger-bg-subtle),
                "light-subtle": var(--#{$prefix}light-bg-subtle),
                "dark-subtle": var(--#{$prefix}dark-bg-subtle)
                );
			`,
		}),
		new e.text("Color mode background colors are also available as a Sass map:"),
		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss",
			code: `
                $theme-colors-bg-subtle: (
                "primary": $primary-bg-subtle,
                "secondary": $secondary-bg-subtle,
                "success": $success-bg-subtle,
                "info": $info-bg-subtle,
                "warning": $warning-bg-subtle,
                "danger": $danger-bg-subtle,
                "light": $light-bg-subtle,
                "dark": $dark-bg-subtle,
                );
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_maps.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss",
			code: `
                $theme-colors-bg-subtle-dark: (
                "primary": $primary-bg-subtle-dark,
                "secondary": $secondary-bg-subtle-dark,
                "success": $success-bg-subtle-dark,
                "info": $info-bg-subtle-dark,
                "warning": $warning-bg-subtle-dark,
                "danger": $danger-bg-subtle-dark,
                "light": $light-bg-subtle-dark,
                "dark": $dark-bg-subtle-dark,
                );
			`,
		}),

		//-----------------------

		new e.subtitle("Sass mixins"),
		new e.text(
			"{{b::No mixins are used to generate Bootstrap background utilities}}, but Bootstrap do have some additional mixins for other situations where you’d like to create your own gradients."
		),
		new e.codepreview({
			type: "css",
			title: "scss/mixins/_gradients.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_gradients.scss",
			code: `
                @mixin gradient-bg($color: null) {
                background-color: $color;

                @if $enable-gradients {
                    background-image: var(--#{$prefix}gradient);
                }
                }
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/mixins/_gradients.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_gradients.scss",
			code: `
                // Horizontal gradient, from left to right
                //
                // Creates two color stops, start and end, by specifying a color and position for each color stop.
                @mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {
                background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);
                }

                // Vertical gradient, from top to bottom
                //
                // Creates two color stops, start and end, by specifying a color and position for each color stop.
                @mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {
                background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);
                }

                @mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {
                background-image: linear-gradient($deg, $start-color, $end-color);
                }

                @mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
                background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);
                }

                @mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
                background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);
                }

                @mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {
                background-image: radial-gradient(circle, $inner-color, $outer-color);
                }

                @mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {
                background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
                }
			`,
		}),

		//-----------------------

		new e.title("Utilities API"),
		new e.text(
			"Background utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
			code: `
                "background-color": (
                property: background-color,
                class: bg,
                local-vars: (
                    "bg-opacity": 1
                ),
                values: map-merge(
                    $utilities-bg-colors,
                    (
                    "transparent": transparent,
                    "body-secondary": rgba(var(--#{$prefix}secondary-bg-rgb), var(--#{$prefix}bg-opacity)),
                    "body-tertiary": rgba(var(--#{$prefix}tertiary-bg-rgb), var(--#{$prefix}bg-opacity)),
                    )
                )
                ),
                "bg-opacity": (
                css-var: true,
                class: bg-opacity,
                values: (
                    10: .1,
                    25: .25,
                    50: .5,
                    75: .75,
                    100: 1
                )
                ),
                "subtle-background-color": (
                property: background-color,
                class: bg,
                values: $utilities-bg-subtle
                ),
			`,
		}),
	],
};

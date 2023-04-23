import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const api: IAttrContent = {
	title: "Utility API",
	description: "The utility API is a Sass-based tool to generate utility classes.",
	item: [
		new e.text(
			"Bootstrap utilities are generated with Bootstrap utility API and can be used to modify or extend Bootstrap default set of utility classes via Sass. Bootstrap utility API is based on a series of Sass maps and functions for generating families of classes with various options. If you’re unfamiliar with Sass maps, read up on the {{https://sass-lang.com/documentation/values/maps::official Sass docs}} to get started."
		),
		new e.text(
			"The {{$utilities}} map contains all Bootstrap utilities and is later merged with your custom {{$utilities}} map, if present. The utility map contains a keyed list of utility groups which accept the following options:"
		),
		new e.table({
			item: [
				["Option", "Type", "Default value", "Description"],
				[
					"{{nav:docs/utilities/api#property::property}}",
					"{{b::Required}}",
					"-",
					"Name of the property, this can be a string or an array of strings (e.g., horizontal paddings or margins).",
				],
				[
					"{{nav:docs/utilities/api#values::values}}",
					"{{b::Required}}",
					"-",
					"List of values, or a map if you don’t want the class name to be the same as the value. If {{null}} is used as map key, {{class}} is not prepended to the class name.",
				],
				[
					"{{nav:docs/utilities/api#class::class}}",
					"Optional",
					"null",
					"Name of the generated class. If not provided and {{property}} is an array of strings, {{class}} will default to the first element of the {{property}} array. If not provided and {{property}} is a string, the {{values}} keys are used for the {{class}} names.",
				],
				[
					"{{nav:docs/utilities/api#css-var::css-var}}",
					"Optional",
					"{{false}}",
					"Boolean to generate CSS variables instead of CSS rules.",
				],
				[
					"{{nav:docs/utilities/api#css-variable-name::css-variable-name}}",
					"Optional",
					"null",
					"Custom un-prefixed name for the CSS variable inside the ruleset.",
				],
				[
					"{{nav:docs/utilities/api#local-vars::local-vars}}",
					"Optional",
					"null",
					"Map of local CSS variables to generate in addition to the CSS rules.",
				],
				[
					"{{nav:docs/utilities/api#state::state}}",
					"Optional",
					"null",
					"List of pseudo-class variants (e.g., {{:hover}} or {{:focus}}) to generate.",
				],
				[
					"{{nav:docs/utilities/api#responsive::responsive}}",
					"Optional",
					"{{false}}",
					"Boolean indicating if responsive classes should be generated.",
				],
				[
					"{{rfs}}",
					"Optional",
					"{{false}}",
					"Boolean to enable {{https://getbootstrap.com/docs/5.3/getting-started/rfs/::fluid rescaling with RFS}}.",
				],
				[
					"{{nav:docs/utilities/api#print::print}}",
					"Optional",
					"{{false}}",
					"Boolean indicating if print classes need to be generated.",
				],
				["{{rtl}}", "Optional", "{{true}}", "Boolean indicating if utility should be kept in RTL."],
			],
		}),

		new e.title("API explained"),
		new e.text(
			"All utility variables are added to the {{$utilities}} variable within Bootstrap {{_utilities.scss}} stylesheet. Each group of utilities looks something like this:"
		),
		new e.codepreview({
			type: "css",
			code: `
                $utilities: (
                "opacity": (
                    property: opacity,
                    values: (
                    0: 0,
                    25: .25,
                    50: .5,
                    75: .75,
                    100: 1,
                    )
                )
                );
				`,
		}),

		new e.text("Which outputs the following:"),
		new e.codepreview({
			type: "css",
			code: `
                .opacity-0 { opacity: 0; }
                .opacity-25 { opacity: .25; }
                .opacity-50 { opacity: .5; }
                .opacity-75 { opacity: .75; }
                .opacity-100 { opacity: 1; }
				`,
		}),

		//-----------------------

		new e.subtitle("Property"),
		new e.text(
			"The required {{property}} key must be set for any utility, and it must contain a valid CSS property. This property is used in the generated utility’s ruleset. When the {{class}} key is omitted, it also serves as the default class name. Consider the {{text-decoration}} utility:"
		),
		new e.codepreview({
			type: "css",
			code: `
                $utilities: (
                "text-decoration": (
                    property: text-decoration,
                    values: none underline line-through
                )
                );
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
                .text-decoration-none { text-decoration: none !important; }
                .text-decoration-underline { text-decoration: underline !important; }
                .text-decoration-line-through { text-decoration: line-through !important; }
				`,
		}),

		//-----------------------

		new e.subtitle("Values"),
		new e.text(
			"Use the {{values}} key to specify which values for the specified {{property}} should be used in the generated class names and rules. Can be a list or map (set in the utilities or in a Sass variable)."
		),
		new e.text("As a list, like with {{nav:docs/utilities/text#text_decoration::text-decoration utilities}}:"),
		new e.codepreview({
			type: "css",
			code: `
                values: none underline line-through
				`,
		}),
		new e.text("As a map, like with {{nav:docs/utilities/opacity::opacity utilities}}:"),
		new e.codepreview({
			type: "css",
			code: `
                values: (
                0: 0,
                25: .25,
                50: .5,
                75: .75,
                100: 1,
                )
				`,
		}),
		new e.text(
			"As a Sass variable that sets the list or map, as in Bootstrap {{nav:docs/utilities/position::position utilities}}:"
		),
		new e.codepreview({
			type: "css",
			code: `
                values: $position-values
				`,
		}),

		//-----------------------

		new e.subtitle("Class"),
		new e.text(
			"Use the {{class}} option to change the class prefix used in the compiled CSS. For example, to change from {{.opacity-*}} to {{.o-*}}:"
		),
		new e.codepreview({
			type: "css",
			code: `
                $utilities: (
				"opacity": (
					property: opacity,
					class: o,
					values: (
					0: 0,
					25: .25,
					50: .5,
					75: .75,
					100: 1,
					)
				)
				);
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
                .o-0 { opacity: 0 !important; }
				.o-25 { opacity: .25 !important; }
				.o-50 { opacity: .5 !important; }
				.o-75 { opacity: .75 !important; }
				.o-100 { opacity: 1 !important; }
				`,
		}),
		new e.text("If {{class: null}}, generates classes for each of the {{values}} keys:"),
		new e.codepreview({
			type: "css",
			code: `
				$utilities: (
				"visibility": (
					property: visibility,
					class: null,
					values: (
					visible: visible,
					invisible: hidden,
					)
				)
				);
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
				.visible { visibility: visible !important; }
				.invisible { visibility: hidden !important; }
				`,
		}),

		//-----------------------

		new e.subtitle("CSS variable utilities"),
		new e.text(
			"Set the {{css-var}} boolean option to {{true}} and the API will generate local CSS variables for the given selector instead of the usual {{property: value}} rules. Add an optional {{css-variable-name}} to set a different CSS variable name than the class name."
		),
		new e.text(
			"Consider Bootstrap {{.text-opacity-*}} utilities. If Bootstrap add the {{css-variable-name}} option, Bootstrap’ll get a custom output."
		),
		new e.codepreview({
			type: "css",
			code: `
				$utilities: (
				"text-opacity": (
					css-var: true,
					css-variable-name: text-alpha,
					class: text-opacity,
					values: (
					25: .25,
					50: .5,
					75: .75,
					100: 1
					)
				),
				);
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
				.text-opacity-25 { --bs-text-alpha: .25; }
				.text-opacity-50 { --bs-text-alpha: .5; }
				.text-opacity-75 { --bs-text-alpha: .75; }
				.text-opacity-100 { --bs-text-alpha: 1; }
				`,
		}),

		//-----------------------

		new e.subtitle("Local CSS variables"),
		new e.text(
			"Use the {{local-vars}} option to specify a Sass map that will generate local CSS variables within the utility class’s ruleset. Please note that it may require additional work to consume those local CSS variables in the generated CSS rules. For example, consider Bootstrap {{.bg-*}} utilities:"
		),
		new e.codepreview({
			type: "css",
			code: `
				$utilities: (
				"background-color": (
					property: background-color,
					class: bg,
					local-vars: (
					"bg-opacity": 1
					),
					values: map-merge(
					$utilities-bg-colors,
					(
						"transparent": transparent
					)
					)
				)
				);
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
				.bg-primary {
				--bs-bg-opacity: 1;
				background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
				}
				`,
		}),

		//-----------------------

		new e.subtitle("States"),
		new e.text(
			"Use the {{state}} option to generate pseudo-class variations. Example pseudo-classes are {{:hover}} and {{:focus}}. When a list of states are provided, classnames are created for that pseudo-class. For example, to change opacity on hover, add {{state: hover}} and you’ll get {{.opacity-hover:hover}} in your compiled CSS."
		),
		new e.text("Need multiple pseudo-classes? Use a space-separated list of states: {{state: hover focus}}."),
		new e.codepreview({
			type: "css",
			code: `
				$utilities: (
				"opacity": (
					property: opacity,
					class: opacity,
					state: hover,
					values: (
					0: 0,
					25: .25,
					50: .5,
					75: .75,
					100: 1,
					)
				)
				);
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
				.opacity-0-hover:hover { opacity: 0 !important; }
				.opacity-25-hover:hover { opacity: .25 !important; }
				.opacity-50-hover:hover { opacity: .5 !important; }
				.opacity-75-hover:hover { opacity: .75 !important; }
				.opacity-100-hover:hover { opacity: 1 !important; }
				`,
		}),

		//-----------------------

		new e.subtitle("Responsive"),
		new e.text(
			"Add the responsive boolean to generate responsive utilities (e.g., .opacity-md-25) across all breakpoints."
		),
		new e.codepreview({
			type: "css",
			code: `
				$utilities: (
				"opacity": (
					property: opacity,
					responsive: true,
					values: (
					0: 0,
					25: .25,
					50: .5,
					75: .75,
					100: 1,
					)
				)
				);
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
				.opacity-0 { opacity: 0 !important; }
				.opacity-25 { opacity: .25 !important; }
				.opacity-50 { opacity: .5 !important; }
				.opacity-75 { opacity: .75 !important; }
				.opacity-100 { opacity: 1 !important; }

				@media (min-width: 576px) {
				.opacity-sm-0 { opacity: 0 !important; }
				.opacity-sm-25 { opacity: .25 !important; }
				.opacity-sm-50 { opacity: .5 !important; }
				.opacity-sm-75 { opacity: .75 !important; }
				.opacity-sm-100 { opacity: 1 !important; }
				}

				@media (min-width: 768px) {
				.opacity-md-0 { opacity: 0 !important; }
				.opacity-md-25 { opacity: .25 !important; }
				.opacity-md-50 { opacity: .5 !important; }
				.opacity-md-75 { opacity: .75 !important; }
				.opacity-md-100 { opacity: 1 !important; }
				}

				@media (min-width: 992px) {
				.opacity-lg-0 { opacity: 0 !important; }
				.opacity-lg-25 { opacity: .25 !important; }
				.opacity-lg-50 { opacity: .5 !important; }
				.opacity-lg-75 { opacity: .75 !important; }
				.opacity-lg-100 { opacity: 1 !important; }
				}

				@media (min-width: 1200px) {
				.opacity-xl-0 { opacity: 0 !important; }
				.opacity-xl-25 { opacity: .25 !important; }
				.opacity-xl-50 { opacity: .5 !important; }
				.opacity-xl-75 { opacity: .75 !important; }
				.opacity-xl-100 { opacity: 1 !important; }
				}

				@media (min-width: 1400px) {
				.opacity-xxl-0 { opacity: 0 !important; }
				.opacity-xxl-25 { opacity: .25 !important; }
				.opacity-xxl-50 { opacity: .5 !important; }
				.opacity-xxl-75 { opacity: .75 !important; }
				.opacity-xxl-100 { opacity: 1 !important; }
				}
				`,
		}),

		//-----------------------

		new e.subtitle("Print"),
		new e.text(
			"Enabling the {{print}} option will also generate utility classes for print, which are only applied within the {{@media print { ... } }}media query."
		),
		new e.codepreview({
			type: "css",
			code: `
				$utilities: (
				"opacity": (
					property: opacity,
					print: true,
					values: (
					0: 0,
					25: .25,
					50: .5,
					75: .75,
					100: 1,
					)
				)
				);
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
				.opacity-0 { opacity: 0 !important; }
				.opacity-25 { opacity: .25 !important; }
				.opacity-50 { opacity: .5 !important; }
				.opacity-75 { opacity: .75 !important; }
				.opacity-100 { opacity: 1 !important; }

				@media print {
				.opacity-print-0 { opacity: 0 !important; }
				.opacity-print-25 { opacity: .25 !important; }
				.opacity-print-50 { opacity: .5 !important; }
				.opacity-print-75 { opacity: .75 !important; }
				.opacity-print-100 { opacity: 1 !important; }
				}
				`,
		}),

		//-----------------------

		new e.title("Importance"),
		new e.text(
			"All utilities generated by the API include {{!important}} to ensure they override components and modifier classes as intended. You can toggle this setting globally with the {{$enable-important-utilities}} variable (defaults to {{true}})."
		),

		//-----------------------

		new e.title("Using the API"),
		new e.text(
			"Now that you’re familiar with how the utilities API works, learn how to add your own custom classes and modify Bootstrap default utilities."
		),

		//-----------------------

		new e.subtitle("Override utilities"),
		new e.text(
			"Override existing utilities by using the same key. For example, if you want additional responsive overflow utility classes, you can do this:"
		),
		new e.codepreview({
			type: "css",
			code: `
				$utilities: (
				"overflow": (
					responsive: true,
					property: overflow,
					values: visible hidden scroll auto,
				),
				);
				`,
		}),

		//-----------------------

		new e.subtitle("Add utilities"),
		new e.text(
			"New utilities can be added to the default {{$utilities}} map with a {{map-merge}}. Make sure Bootstrap required Sass files and {{_utilities.scss}} are imported first, then use the {{map-merge}} to add your additional utilities. For example, here’s how to add a responsive {{cursor}} utility with three values."
		),
		new e.codepreview({
			type: "css",
			code: `
				@import "bootstrap/scss/functions";
				@import "bootstrap/scss/variables";
				@import "bootstrap/scss/variables-dark";
				@import "bootstrap/scss/maps";
				@import "bootstrap/scss/mixins";
				@import "bootstrap/scss/utilities";

				$utilities: map-merge(
				$utilities,
				(
					"cursor": (
					property: cursor,
					class: cursor,
					responsive: true,
					values: auto pointer grab,
					)
				)
				);

				@import "bootstrap/scss/utilities/api";
				`,
		}),

		//-----------------------

		new e.subtitle("Modify utilities"),
		new e.text(
			"Modify existing utilities in the default {{$utilities}} map with {{map-get}} and {{map-merge}} functions. In the example below, Bootstrap’re adding an additional value to the {{width}} utilities. Start with an initial {{map-merge}} and then specify which utility you want to modify. From there, fetch the nested {{'width'}} map with {{map-get}} to access and modify the utility’s options and values."
		),
		new e.codepreview({
			type: "css",
			code: `
				@import "bootstrap/scss/functions";
				@import "bootstrap/scss/variables";
				@import "bootstrap/scss/variables-dark";
				@import "bootstrap/scss/maps";
				@import "bootstrap/scss/mixins";
				@import "bootstrap/scss/utilities";

				$utilities: map-merge(
				$utilities,
				(
					"width": map-merge(
					map-get($utilities, "width"),
					(
						values: map-merge(
						map-get(map-get($utilities, "width"), "values"),
						(10: 10%),
						),
					),
					),
				)
				);

				@import "bootstrap/scss/utilities/api";
				`,
		}),

		//-----------------------

		new e.xsubtitle("Enable responsive"),
		new e.text(
			"You can enable responsive classes for an existing set of utilities that are not currently responsive by default. For example, to make the {{border}} classes responsive:"
		),
		new e.codepreview({
			type: "css",
			code: `
				@import "bootstrap/scss/functions";
				@import "bootstrap/scss/variables";
				@import "bootstrap/scss/variables-dark";
				@import "bootstrap/scss/maps";
				@import "bootstrap/scss/mixins";
				@import "bootstrap/scss/utilities";

				$utilities: map-merge(
				$utilities, (
					"border": map-merge(
					map-get($utilities, "border"),
					( responsive: true ),
					),
				)
				);

				@import "bootstrap/scss/utilities/api";
				`,
		}),
		new e.text(
			"This will now generate responsive variations of {{.border}} and {{.border-0}} for each breakpoint. Your generated CSS will look like this:"
		),
		new e.codepreview({
			type: "css",
			code: `
				.border { ... }
				.border-0 { ... }

				@media (min-width: 576px) {
				.border-sm { ... }
				.border-sm-0 { ... }
				}

				@media (min-width: 768px) {
				.border-md { ... }
				.border-md-0 { ... }
				}

				@media (min-width: 992px) {
				.border-lg { ... }
				.border-lg-0 { ... }
				}

				@media (min-width: 1200px) {
				.border-xl { ... }
				.border-xl-0 { ... }
				}

				@media (min-width: 1400px) {
				.border-xxl { ... }
				.border-xxl-0 { ... }
				}
				`,
		}),

		//-----------------------

		new e.xsubtitle("Rename utilities"),
		new e.text(
			"Missing v4 utilities, or used to another naming convention? The utilities API can be used to override the resulting {{class}} of a given utility—for example, to rename {{.ms-*}} utilities to oldish {{.ml-*}}:"
		),
		new e.codepreview({
			type: "css",
			code: `
				@import "bootstrap/scss/functions";
				@import "bootstrap/scss/variables";
				@import "bootstrap/scss/variables-dark";
				@import "bootstrap/scss/maps";
				@import "bootstrap/scss/mixins";
				@import "bootstrap/scss/utilities";

				$utilities: map-merge(
				$utilities, (
					"margin-start": map-merge(
					map-get($utilities, "margin-start"),
					( class: ml ),
					),
				)
				);

				@import "bootstrap/scss/utilities/api";
				`,
		}),

		//-----------------------

		new e.subtitle("Remove utilities"),
		new e.text(
			"Remove any of the default utilities with the {{https://sass-lang.com/documentation/modules/map#remove::map-remove() Sass function}}."
		),
		new e.codepreview({
			type: "css",
			code: `
				@import "bootstrap/scss/functions";
				@import "bootstrap/scss/variables";
				@import "bootstrap/scss/variables-dark";
				@import "bootstrap/scss/maps";
				@import "bootstrap/scss/mixins";
				@import "bootstrap/scss/utilities";

				// Remove multiple utilities with a comma-separated list
				$utilities: map-remove($utilities, "width", "float");

				@import "bootstrap/scss/utilities/api";
				`,
		}),
		new e.text(
			"You can also use the {{https://sass-lang.com/documentation/modules/map#merge::map-merge() Sass function}} and set the group key to {{null}} to remove the utility."
		),
		new e.codepreview({
			type: "css",
			code: `
				@import "bootstrap/scss/functions";
				@import "bootstrap/scss/variables";
				@import "bootstrap/scss/variables-dark";
				@import "bootstrap/scss/maps";
				@import "bootstrap/scss/mixins";
				@import "bootstrap/scss/utilities";

				$utilities: map-merge(
				$utilities,
				(
					"width": null
				)
				);

				@import "bootstrap/scss/utilities/api";
				`,
		}),

		//-----------------------

		new e.subtitle("Add, remove, modify"),
		new e.text(
			"You can add, remove, and modify many utilities all at once with the {{https://sass-lang.com/documentation/modules/map#merge::map-merge() Sass function}}. Here’s how you can combine the previous examples into one larger map."
		),
		new e.codepreview({
			type: "css",
			code: `
				@import "bootstrap/scss/functions";
				@import "bootstrap/scss/variables";
				@import "bootstrap/scss/variables-dark";
				@import "bootstrap/scss/maps";
				@import "bootstrap/scss/mixins";
				@import "bootstrap/scss/utilities";

				$utilities: map-merge(
				$utilities,
				(
					// Remove the 'width' utility
					"width": null,

					// Make an existing utility responsive
					"border": map-merge(
					map-get($utilities, "border"),
					( responsive: true ),
					),

					// Add new utilities
					"cursor": (
					property: cursor,
					class: cursor,
					responsive: true,
					values: auto pointer grab,
					)
				)
				);

				@import "bootstrap/scss/utilities/api";
				`,
		}),

		//-----------------------

		new e.xsubtitle("Remove utility in RTL"),
		new e.text(
			"Some edge cases make {{https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl::RTL styling difficult}}, such as line breaks in Arabic. Thus utilities can be dropped from RTL output by setting the {{rtl}} option to {{false}}:"
		),
		new e.codepreview({
			type: "css",
			code: `
				$utilities: (
				"word-wrap": (
					property: word-wrap word-break,
					class: text,
					values: (break: break-word),
					rtl: false
				),
				);
				`,
		}),
		new e.text("Output:"),
		new e.codepreview({
			type: "css",
			code: `
				/* rtl:begin:remove */
				.text-break {
				word-wrap: break-word !important;
				word-break: break-word !important;
				}
				/* rtl:end:remove */
				`,
		}),
		new e.text(
			"This doesn’t output anything in RTL, thanks to {{https://rtlcss.com/learn/usage-guide/control-directives/#remove::the RTLCSS remove control directive}}."
		),
	],
};

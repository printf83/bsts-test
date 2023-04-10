import { b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const api: IAttrContent = {
	title: "Utility API",
	description: "The utility API is a Sass-based tool to generate utility classes.",
	item: [
		new e.text(
			"Bootstrap utilities are generated with our utility API and can be used to modify or extend our default set of utility classes via Sass. Our utility API is based on a series of Sass maps and functions for generating families of classes with various options. If you’re unfamiliar with Sass maps, read up on the {{https://sass-lang.com/documentation/values/maps::official Sass docs}} to get started."
		),
		new e.text(
			"The {{$utilities}} map contains all our utilities and is later merged with your custom {{$utilities}} map, if present. The utility map contains a keyed list of utility groups which accept the following options:"
		),
		new e.table({
			item: [
				["Option", "Type", "Default value", "Description"],
				[
					"{{nav:doc/utilities/api#property::property}}",
					"{{b::Required}}",
					"-",
					"Name of the property, this can be a string or an array of strings (e.g., horizontal paddings or margins).",
				],
				[
					"{{nav:doc/utilities/api#values::values}}",
					"{{b::Required}}",
					"-",
					"List of values, or a map if you don’t want the class name to be the same as the value. If {{null}} is used as map key, {{class}} is not prepended to the class name.",
				],
				[
					"{{nav:doc/utilities/api#class::class}}",
					"Optional",
					"null",
					"Name of the generated class. If not provided and {{property}} is an array of strings, {{class}} will default to the first element of the {{property}} array. If not provided and {{property}} is a string, the {{values}} keys are used for the {{class}} names.",
				],
				[
					"{{nav:doc/utilities/api#css-var::css-var}}",
					"Optional",
					"{{false}}",
					"Boolean to generate CSS variables instead of CSS rules.",
				],
				[
					"{{nav:doc/utilities/api#css-variable-name::css-variable-name}}",
					"Optional",
					"null",
					"Custom un-prefixed name for the CSS variable inside the ruleset.",
				],
				[
					"{{nav:doc/utilities/api#local-vars::local-vars}}",
					"Optional",
					"null",
					"Map of local CSS variables to generate in addition to the CSS rules.",
				],
				[
					"{{nav:doc/utilities/api#state::state}}",
					"Optional",
					"null",
					"List of pseudo-class variants (e.g., {{:hover}} or {{:focus}}) to generate.",
				],
				[
					"{{nav:doc/utilities/api#responsive::responsive}}",
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
					"{{nav:doc/utilities/api#print::print}}",
					"Optional",
					"{{false}}",
					"Boolean indicating if print classes need to be generated.",
				],
				["{{rtl}}", "Optional", "{{true}}", "Boolean indicating if utility should be kept in RTL."],
			],
		}),

		new e.title("API explained"),
		new e.text(
			"All utility variables are added to the {{$utilities}} variable within our {{_utilities.scss}} stylesheet. Each group of utilities looks something like this:"
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

		new e.title("Property"),
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

		new e.title("Values"),
		new e.text(
			"Use the {{values}} key to specify which values for the specified {{property}} should be used in the generated class names and rules. Can be a list or map (set in the utilities or in a Sass variable)."
		),
		new e.text(
			"As a list, like with {{https://getbootstrap.com/docs/5.3/utilities/text/#text-decoration::text-decoration utilities}}:"
		),
		new e.codepreview({
			type: "css",
			code: `
                values: none underline line-through
				`,
		}),
		new e.text("As a map, like with {{https://getbootstrap.com/docs/5.3/utilities/opacity/::opacity utilities}}:"),
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
			"As a Sass variable that sets the list or map, as in our {{https://getbootstrap.com/docs/5.3/utilities/position/::position utilities}}:"
		),
		new e.codepreview({
			type: "css",
			code: `
                values: $position-values
				`,
		}),

		//-----------------------

		new e.title("Min and max"),
		new e.text(
			"Range inputs have implicit values for {{min}} and {{max}}—{{0}} and {{100}}, respectively. You may specify new values for those using the {{min}} and {{max}} attributes."
		),
		new e.code({
			output: () => {
				return b.form.input({
					label: "Example range",
					type: "range",
					min: 0,
					max: 5,
					value: 4,
				});
			},
		}),

		//-----------------------

		new e.title("Steps"),
		new e.text(
			"By default, range inputs “snap” to integer values. To change this, you can specify a {{step}} value. In the example below, we double the number of steps by using {{step='0.5'}}."
		),
		new e.code({
			output: () => {
				return b.form.input({
					label: "Example range",
					type: "range",
					min: 0,
					max: 5,
					step: 0.5,
					value: 4,
				});
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Sass variables"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$form-range-track-width:          100%;
				$form-range-track-height:         .5rem;
				$form-range-track-cursor:         pointer;
				$form-range-track-bg:             var(--#{$prefix}tertiary-bg);
				$form-range-track-border-radius:  1rem;
				$form-range-track-box-shadow:     $box-shadow-inset;

				$form-range-thumb-width:                   1rem;
				$form-range-thumb-height:                  $form-range-thumb-width;
				$form-range-thumb-bg:                      $component-active-bg;
				$form-range-thumb-border:                  0;
				$form-range-thumb-border-radius:           1rem;
				$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1);
				$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow;
				$form-range-thumb-focus-box-shadow-width:  $input-focus-width; // For focus box shadow issue in Edge
				$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%);
				$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color);
				$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
			`,
		}),
	],
};

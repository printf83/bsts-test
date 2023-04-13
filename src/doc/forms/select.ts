import { h, b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const select: IAttrContent = {
	title: "Select",
	description: "Customize the native {{<select>}}s with custom CSS that changes the element’s initial appearance.",
	item: [
		new e.title("Default"),
		new e.text(
			"Custom {{<select>}} menus need only a custom class, {{.form-select}} to trigger the custom styles. Custom styles are limited to the {{<select>}}’s initial appearance and cannot modify the {{<option>}}s due to browser limitations."
		),
		new e.code({
			output: () => {
				return new b.select({ label: "Default select example" }, [
					new h.option({ selected: true }, "Open this select menu"),
					new h.option({ value: "1" }, "One"),
					new h.option({ value: "2" }, "Two"),
					new h.option({ value: "3" }, "Three"),
				]);
			},
		}),
		new e.text("Using {{item}} to setup option"),
		new e.code({
			output: () => {
				return new b.select({
					label: "Default select example using item",
					item: [
						{ selected: true, elem: "Open this select menu" },
						{ value: "1", elem: "One" },
						{ value: "2", elem: "Two" },
						{ value: "3", elem: "Three" },
					],
				});
			},
		}),
		new e.text("Using {{b.form.select}}"),
		new e.code({
			output: () => {
				return b.form.select({
					label: "Default select example using b.form.select",
					hideLabel: true,
					item: [
						{ selected: true, elem: "Open this select menu" },
						{ value: "1", elem: "One" },
						{ value: "2", elem: "Two" },
						{ value: "3", elem: "Three" },
					],
				});
			},
		}),

		//-----------------------

		new e.title("Sizing"),
		new e.text("Set heights using classes like {{.form-control-lg}} and {{.form-control-sm}}."),
		new e.code({
			outputAttr: { gap: 2 },
			output: () => {
				return [
					b.form.select({
						weight: "lg",
						label: ".form-select-lg example",
						hideLabel: true,
						item: [
							{ selected: true, elem: "Open this select menu" },
							{ value: "1", elem: "One" },
							{ value: "2", elem: "Two" },
							{ value: "3", elem: "Three" },
						],
					}),
					b.form.select({
						weight: "sm",
						label: ".form-select-sm example",
						hideLabel: true,
						item: [
							{ selected: true, elem: "Open this select menu" },
							{ value: "1", elem: "One" },
							{ value: "2", elem: "Two" },
							{ value: "3", elem: "Three" },
						],
					}),
				];
			},
		}),

		new e.text("The {{multiple}} attribute is also supported:"),
		new e.code({
			output: () => {
				return b.form.select({
					multiple: true,
					label: "Multiple select example",
					hideLabel: true,
					item: [
						{ selected: true, elem: "Open this select menu" },
						{ value: "1", elem: "One" },
						{ value: "2", elem: "Two" },
						{ value: "3", elem: "Three" },
					],
				});
			},
		}),

		new e.text("As is the {{size}} attribute:"),
		new e.code({
			output: () => {
				return b.form.select({
					size: 3,
					label: "Size 3 select example",
					hideLabel: true,
					item: [
						{ selected: true, elem: "Open this select menu" },
						{ value: "1", elem: "One" },
						{ value: "2", elem: "Two" },
						{ value: "3", elem: "Three" },
					],
				});
			},
		}),

		//-----------------------

		new e.title("Disabled"),
		new e.text(
			"Add the {{disabled}} boolean attribute on a select to give it a grayed out appearance and remove pointer events."
		),
		new e.code({
			output: () => {
				return b.form.select({
					disabled: true,
					label: "Disabled select example",
					hideLabel: true,
					item: [
						{ selected: true, elem: "Open this select menu" },
						{ value: "1", elem: "One" },
						{ value: "2", elem: "Two" },
						{ value: "3", elem: "Three" },
					],
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
				$form-select-padding-y:             $input-padding-y;
				$form-select-padding-x:             $input-padding-x;
				$form-select-font-family:           $input-font-family;
				$form-select-font-size:             $input-font-size;
				$form-select-indicator-padding:     $form-select-padding-x * 3; // Extra padding for background-image
				$form-select-font-weight:           $input-font-weight;
				$form-select-line-height:           $input-line-height;
				$form-select-color:                 $input-color;
				$form-select-bg:                    $input-bg;
				$form-select-disabled-color:        null;
				$form-select-disabled-bg:           $input-disabled-bg;
				$form-select-disabled-border-color: $input-disabled-border-color;
				$form-select-bg-position:           right $form-select-padding-x center;
				$form-select-bg-size:               16px 12px; // In pixels because image dimensions
				$form-select-indicator-color:       $gray-800;
				$form-select-indicator:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>");

				$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding;
				$form-select-feedback-icon-position:    center right $form-select-indicator-padding;
				$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half;

				$form-select-border-width:        $input-border-width;
				$form-select-border-color:        $input-border-color;
				$form-select-border-radius:       $input-border-radius;
				$form-select-box-shadow:          $box-shadow-inset;

				$form-select-focus-border-color:  $input-focus-border-color;
				$form-select-focus-width:         $input-focus-width;
				$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color;

				$form-select-padding-y-sm:        $input-padding-y-sm;
				$form-select-padding-x-sm:        $input-padding-x-sm;
				$form-select-font-size-sm:        $input-font-size-sm;
				$form-select-border-radius-sm:    $input-border-radius-sm;

				$form-select-padding-y-lg:        $input-padding-y-lg;
				$form-select-padding-x-lg:        $input-padding-x-lg;
				$form-select-font-size-lg:        $input-font-size-lg;
				$form-select-border-radius-lg:    $input-border-radius-lg;

				$form-select-transition:          $input-transition;
			`,
		}),
	],
};

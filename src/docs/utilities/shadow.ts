import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const shadow: IContent = {
	title: "Shadows",
	description: "Add or remove shadows to elements with box-shadow utilities.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Examples"),
				new e.text(
					"While shadows on components are disabled by default in Bootstrap and can be enabled via {{$enable-shadows}}, you can also quickly add or remove a shadow with Bootstrap {{box-shadow}} utility classes. Includes support for {{.shadow-none}} and three default sizes (which have associated variables to match)."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.div(
								{
									shadow: "none",
									padding: 3,
									marginBottom: 5,
									bgColor: "body-tertiary",
									rounded: true,
								},
								"No shadow"
							),
							new h.div({ shadow: "sm", padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Small shadow"),
							new h.div({ shadow: true, padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Regular shadow"),
							new h.div({ shadow: "lg", padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Large shadow"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Sass")]),

			//----------------------

			new e.section([
				new e.subtitle("Variables"),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$box-shadow:                  0 .5rem 1rem rgba($black, .15);
						$box-shadow-sm:               0 .125rem .25rem rgba($black, .075);
						$box-shadow-lg:               0 1rem 3rem rgba($black, .175);
						$box-shadow-inset:            inset 0 1px 2px rgba($black, .075);
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Utilities API"),
				new e.text("Shadow utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
				new e.codepreview({
					type: "css",
					title: "scss/_utilities.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
					code: `
						"shadow": (
						property: box-shadow,
						class: shadow,
						values: (
							null: $box-shadow,
							sm: $box-shadow-sm,
							lg: $box-shadow-lg,
							none: none,
						)
						),
					`,
				}),
			]),
		];
	},
	db: [
		{
			source: `() => {
                        return [
                            new h.div({
                                shadow: "none",
                                padding: 3,
                                marginBottom: 5,
                                bgColor: "body-tertiary",
                                rounded: true,
                            }, "No shadow"),
                            new h.div({ shadow: "sm", padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Small shadow"),
                            new h.div({ shadow: true, padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Regular shadow"),
                            new h.div({ shadow: "lg", padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Large shadow"),
                        ];
                    }`,
		},
	],
};

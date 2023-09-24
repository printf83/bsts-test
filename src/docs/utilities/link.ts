import { core, h } from "@printf83/bsts";

import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const link: IContent = {
	title: "Link",
	description:
		"Link utilities are used to stylize your anchors to adjust their color, opacity, underline offset, underline color, and more.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Link opacity"),
				new e.text(
					"Change the alpha opacity of the link {{rgba()}} color value with utilities. Please be aware that changes to a color’s opacity can lead to links with {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast::insufficient contrast}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [10, 25, 50, 75, 100].map(
							(i) =>
								new h.p(
									new h.a(
										{
											href: "#",
											linkOpacity: i as core.bootstrapType.linkOpacity,
										},
										`Link opacity ${i}`
									)
								)
						);
					},
				}),
				new e.text("You can even change the opacity level on hover."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [10, 25, 50, 75, 100].map(
							(i) =>
								new h.p(
									new h.a(
										{
											href: "#",
											linkOpacityHover:
												i as core.bootstrapType.linkOpacityHover,
										},
										`Link hover opacity ${i}`
									)
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Link underlines"),
				new e.subtitle("Underline color"),
				new e.text("Change the underline’s color independent of the link text color."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map(
							(i) =>
								new h.p(
									new h.a(
										{
											href: "#",
											linkUnderlineColor:
												i as core.bootstrapType.linkUnderlineColor,
										},
										`${core.uppercaseFirst(i)} underline`
									)
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Underline offset"),
				new e.text(
					"Change the underline’s distance from your text. Offset is set in {{em}} units to automatically scale with the element’s current {{font-size}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [undefined, 1, 2, 3].map(
							(i) =>
								new h.p(
									new h.a(
										{
											href: "#",
											linkOffset: i as core.bootstrapType.linkOffset,
										},
										i ? `Offset ${i} link` : "Default link"
									)
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Underline opacity"),
				new e.text(
					"Change the underline’s opacity. Requires adding {{.link-underline}} to first set an {{rgba()}} color Bootstrap use to then modify the alpha opacity."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [0, 10, 25, 50, 75, 100].map(
							(i) =>
								new h.p(
									new h.a(
										{
											href: "#",
											linkOffset: 2,
											linkUnderline: true,
											linkUnderlineOpacity:
												i as core.bootstrapType.linkUnderlineOpacity,
										},
										`Underline opacity ${i}`
									)
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Hover variants"),
				new e.text(
					"Just like the {{.link-opacity-*-hover}} utilities, {{.link-offset}} and {{.link-underline-opacity}} utilities include {{:hover}} variants by default. Mix and match to create unique link styles."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a(
							{
								href: "#",
								linkOffset: 2,
								linkOffsetHover: 3,
								linkUnderline: true,
								linkUnderlineOpacity: 0,
								linkUnderlineOpacityHover: 75,
							},
							"Underline opacity 0"
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Colored links"),
				new e.text(
					"{{nav:docs/helpers/colored_links::Colored link helpers}} have been updated to pair with Bootstrap link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
							"body-emphasis",
						].map(
							(i) =>
								new h.p(
									new h.a(
										{
											href: "#",
											linkOffset: 2,
											linkUnderlineOpacity: 25,
											linkUnderlineOpacityHover: 100,
											linkColor: i as core.bootstrapType.linkColor,
										},
										`${core.uppercaseFirst(i)} link`
									)
								)
						);
					},
				}),
				new e.alert(
					{ color: "info", callout: true },
					"{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Sass"),
				new e.text(
					"In addition to the following Sass functionality, consider reading about Bootstrap included {{https://getbootstrap.com/docs/5.3/customize/css-variables/::CSS custom properties}} (aka CSS variables) for colors and more."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Utilities API"),
				new e.text(
					"Link utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
				),
				new e.codepreview({
					type: "css",
					title: "scss/_utilities.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
					code: `
						"link-opacity": (
						css-var: true,
						class: link-opacity,
						state: hover,
						values: (
							10: .1,
							25: .25,
							50: .5,
							75: .75,
							100: 1
						)
						),
						"link-offset": (
						property: text-underline-offset,
						class: link-offset,
						state: hover,
						values: (
							1: .125em,
							2: .25em,
							3: .375em,
						)
						),
						"link-underline": (
						property: text-decoration-color,
						class: link-underline,
						local-vars: (
							"link-underline-opacity": 1
						),
						values: map-merge(
							$utilities-links-underline,
							(
							null: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-underline-opacity, 1)),
							)
						)
						),
						"link-underline-opacity": (
						css-var: true,
						class: link-underline-opacity,
						state: hover,
						values: (
							0: 0,
							10: .1,
							25: .25,
							50: .5,
							75: .75,
							100: 1
						),
						),
					`,
				}),
			]),
		];
	},
};

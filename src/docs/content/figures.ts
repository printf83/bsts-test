import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const figures: IAttrContent = {
	title: "Figures",
	description:
		"Documentation and examples for displaying related images and text with the figure component in Bootstrap.",
	item: [
		new e.text(
			"Anytime you need to display a piece of content—like an image with an optional caption, consider using a {{<figure>}}."
		),
		new e.text(
			"Use the included {{.figure}}, {{.figure-img}} and {{.figure-caption}} classes to provide some baseline styles for the HTML5 {{<figure>}} and {{<figcaption>}} elements. Images in figures have no explicit size, so be sure to add the {{.img-fluid}} class to your {{<img>}} to make it responsive."
		),
		new e.code({
			output: () => {
				return new b.figure.container([
					new b.figure.img({
						fluid: true,
						rounded: true,
						src: "https://picsum.photos/seed/bsts_0/400/300",
						alt: "...",
					}),
					new b.figure.caption("A caption for the above image"),
				]);
			},
		}),
		new e.text(
			"Aligning the figure’s caption is easy with our {{https://getbootstrap.com/docs/5.3/utilities/text/#text-alignment::text utilities}}."
		),
		new e.code({
			output: () => {
				return new b.figure.container([
					new b.figure.img({
						fluid: true,
						rounded: true,
						src: "https://picsum.photos/seed/bsts_0/400/300",
						alt: "...",
					}),
					new b.figure.caption({ textAlign: "end" }, "A caption for the above image"),
				]);
			},
		}),

		//-----------------------

		new e.title("CSS"),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(""),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$figure-caption-font-size:          $small-font-size;
				$figure-caption-color:              var(--#{$prefix}secondary-color);
			`,
		}),
	],
};

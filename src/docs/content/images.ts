import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const images: IAttrContent = {
	title: "Images",
	description:
		"Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.",
	item: () => {
		return [
			new e.section([
				new e.title("Responsive images"),
				new e.text(
					"Images in Bootstrap are made responsive with {{.img-fluid}}. This applies {{max-width: 100%;}} and {{height: auto;}} to the image so that it scales with the parent width."
				),
				new e.code({
					output: () => {
						return new b.img({
							fluid: true,
							src: "https://picsum.photos/seed/bsts_0/820/250.webp",
							alt: "...",
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Image thumbnails"),
				new e.text(
					"In addition to Bootstrap {{nav:docs/utilities/borders::border-radius utilities}}, you can use {{.img-thumbnail}} to give an image a rounded 1px border appearance."
				),
				new e.code({
					output: () => {
						return new b.img({
							thumbnail: true,
							src: "https://picsum.photos/seed/bsts_0/200/200.webp",
							alt: "...",
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Aligning images"),
				new e.text(
					"Align images with the {{nav:docs/utilities/float::helper float classes}} or {{nav:docs/utilities/text#text_alignment::text alignment classes}}. {{block}}-level images can be centered using the {{nav:docs/utilities/spacing#horizontal_centering::.mx-auto margin utility class}}."
				),
				new e.code({
					output: () => {
						return [
							new b.img({
								float: "start",
								rounded: true,
								src: "https://picsum.photos/seed/bsts_0/200/200.webp",
								alt: "...",
							}),
							new b.img({
								float: "end",
								rounded: true,
								src: "https://picsum.photos/seed/bsts_0/200/200.webp",
								alt: "...",
							}),
						];
					},
				}),
				new e.code({
					output: () => {
						return new h.div(
							{ textAlign: "center" },
							new b.img({
								rounded: true,
								src: "https://picsum.photos/seed/bsts_0/200/200.webp",
								alt: "...",
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Picture"),
				new e.text(
					"If you are using the {{<picture>}} element to specify multiple {{<source>}} elements for a specific {{<img>}}, make sure to add the {{.img-*}} classes to the {{<img>}} and not to the {{<picture>}} tag."
				),
				new e.code({
					showViewport: true,
					output: () => {
						return new h.picture([
							new h.source({
								media: "(min-width:992px)",
								srcset: "https://picsum.photos/seed/bsts_0/820/250.webp",
							}),
							new h.source({
								media: "(min-width:768px)",
								srcset: "https://picsum.photos/seed/bsts_1/710/200.webp",
							}),
							new b.img({
								fluid: true,
								thumbnail: true,
								src: "https://picsum.photos/seed/bsts_2/450/200.webp",
								alt: "...",
							}),
						]);
					},
				}),
			]),

			//----------------------
			new e.title("CSS"),

			new e.section([
				new e.subtitle("Sass variables"),
				new e.text("Variables are available for image thumbnails."),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$thumbnail-padding:                 .25rem;
						$thumbnail-bg:                      var(--#{$prefix}body-bg);
						$thumbnail-border-width:            var(--#{$prefix}border-width);
						$thumbnail-border-color:            var(--#{$prefix}border-color);
						$thumbnail-border-radius:           var(--#{$prefix}border-radius);
						$thumbnail-box-shadow:              var(--#{$prefix}box-shadow-sm);
					`,
				}),
			]),
		];
	},
};

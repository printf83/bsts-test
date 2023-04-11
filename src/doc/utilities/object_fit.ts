import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const object_fit: IAttrContent = {
	title: "Object fit",
	description:
		"Use the object fit utilities to modify how the content of a {{https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element::replaced element}}, such as an {{<img>}} or {{<video>}}, should be resized to fit its container.",
	item: [
		new e.title("How it works"),
		new e.text(
			"Change the value of the {{https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit::object-fit property}} with our responsive {{object-fit}} utility classes. This property tells the content to fill the parent container in a variety of ways, such as preserving the aspect ratio or stretching to take up as much space as possible."
		),
		new e.text(
			"Classes for the value of {{object-fit}} are named using the format {{.object-fit-{value}.}} Choose from the following values:"
		),
		new e.ul({
			item: ["{{contain}}", "{{cover}}", "{{fill}}", "{{scale}} (for scale-down)", "{{none}}"],
		}),

		//-----------------------

		new e.title("Examples"),
		new e.text(
			"Add the {{object-fit-{value} }}class to the {{https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element::replaced element}}:"
		),
		new e.code({
			outputAttr: { gap: 1 },
			output: () => {
				return ["contain", "cover", "fill", "scale", "none"].map(
					(i) =>
						new h.img({
							src: "https://picsum.photos/seed/bsts_0/110/65",
							objectFit: i as core.IAttr["objectFit"],
							border: true,
							rounded: true,
							alt: "...",
							style: { width: "135px", height: "115px" },
						})
				);
			},
		}),

		//-----------------------

		new e.title("Responsive"),
		new e.text(
			"Responsive variations also exist for each {{object-fit}} value using the format {{.object-fit-{breakpoint}-{value} }}, for the following breakpoint abbreviations: {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}. Classes can be combined for various effects as you need."
		),
		new e.code({
			outputAttr: { gap: 1 },
			output: () => {
				return ["sm-contain", "md-contain", "lg-contain", "xl-contain", "xxl-contain"].map(
					(i) =>
						new h.img({
							src: "https://picsum.photos/seed/bsts_0/110/65",
							objectFit: i as core.IAttr["objectFit"],
							border: true,
							rounded: true,
							alt: "...",
							style: { width: "135px", height: "115px" },
						})
				);
			},
		}),

		//-----------------------

		new e.title("Video"),
		new e.text(
			"The {{.object-fit-{value} }}and responsive {{.object-fit-{breakpoint}-{value} }}utilities also work on {{<video>}} elements."
		),

		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss",
			code: `
				"object-fit": (
				responsive: true,
				property: object-fit,
				values: (
					contain: contain,
					cover: cover,
					fill: fill,
					scale: scale-down,
					none: none,
				)
				),
			`,
		}),

		new e.code({
			outputAttr: { gap: 1 },
			output: () => {
				return new b.button(
					{
						position: "relative",
						on: {
							click: (e) => {
								let target = e.target;
								core.replaceWith(
									target as HTMLElement,
									["contain", "cover", "fill", "scale", "none"].map(
										(i) =>
											new h.video({
												src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
												objectFit: i as core.IAttr["objectFit"],
												border: true,
												rounded: true,
												controls: true,
												style: { width: "135px", height: "115px" },
											})
									)
								);
							},
						},
					},
					[
						"Show live video ",
						new b.badge(
							{
								bgColor: "danger",
								position: "absolute",
								top: 0,
								start: 100,
								tMiddle: true,
								rounded: "pill",
								border: true,
								borderColor: "light",
							},
							["60Mb", new b.visuallyhidden("estimate video size")]
						),
					]
				);
			},
		}),

		//-----------------------

		new e.title("Utilities API"),
		new e.text(
			"Object fit utilities are declared in our utilities API in {{scss/_utilities.scss}}. {{https://getbootstrap.com/docs/5.3/utilities/api/#using-the-api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss",
			code: `
				"object-fit": (
				responsive: true,
				property: object-fit,
				values: (
					contain: contain,
					cover: cover,
					fill: fill,
					scale: scale-down,
					none: none,
				)
				),
			`,
		}),
	],
};

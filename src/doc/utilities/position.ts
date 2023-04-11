import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const position: IAttrContent = {
	title: "Position",
	description: "Use these shorthand utilities for quickly configuring the position of an element.",
	item: [
		new e.title("Position values"),
		new e.text("Quick positioning classes are available, though they are not responsive."),
		new e.codepreview({
			type: "html",
			code: `
				<div class="position-static">...</div>
				<div class="position-relative">...</div>
				<div class="position-absolute">...</div>
				<div class="position-fixed">...</div>
				<div class="position-sticky">...</div>
				`,
		}),

		//-----------------------

		new e.title("Arrange elements"),
		new e.text(
			"Arrange elements easily with the edge positioning utilities. The format is{{ {property}-{position} }}."
		),
		new e.text("Where {{i::property}} is one of:"),
		new e.ul({
			item: [
				"{{top}} - for the vertical {{top}} position",
				"{{start}} - for the horizontal {{left}} position (in LTR)",
				"{{bottom}} - for the vertical {{bottom}} position",
				"{{end}} - for the horizontal {{right}} position (in LTR)",
			],
		}),
		new e.text("Where {{i::position}} is one of:"),
		new e.ul({
			item: [
				"{{0}} - for {{0}} edge position",
				"{{50}} - for {{50%}} edge position",
				"{{100}} - for {{100%}} edge position",
			],
		}),
		new e.text(
			"(You can add more position values by adding entries to the {{$position-values}} Sass map variable.)"
		),

		new e.code({
			outputAttr: { class: "position-box" },
			output: () => {
				return new h.div({ position: "relative" }, [
					new h.div({ position: "absolute", top: 0, start: 0 }),
					new h.div({ position: "absolute", top: 0, end: 0 }),
					new h.div({ position: "absolute", top: 50, start: 50 }),
					new h.div({ position: "absolute", bottom: 50, end: 50 }),
					new h.div({ position: "absolute", bottom: 0, start: 0 }),
					new h.div({ position: "absolute", bottom: 0, end: 0 }),
				]);
			},
		}),

		//-----------------------

		new e.title("Center elements"),
		new e.text(
			"In addition, you can also center the elements with the transform utility class {{.translate-middle}}."
		),
		new e.text(
			"This class applies the transformations {{translateX(-50%)}} and {{translateY(-50%)}} to the element which, in combination with the edge positioning utilities, allows you to absolute center an element."
		),
		new e.code({
			outputAttr: { class: "position-box" },
			output: () => {
				return new h.div({ position: "relative" }, [
					new h.div({ position: "absolute", top: 0, start: 0, tMiddle: true }),
					new h.div({ position: "absolute", top: 0, start: 50, tMiddle: true }),
					new h.div({ position: "absolute", top: 0, start: 100, tMiddle: true }),
					new h.div({ position: "absolute", top: 50, start: 0, tMiddle: true }),
					new h.div({ position: "absolute", top: 50, start: 50, tMiddle: true }),
					new h.div({ position: "absolute", top: 50, start: 100, tMiddle: true }),
					new h.div({ position: "absolute", top: 100, start: 0, tMiddle: true }),
					new h.div({ position: "absolute", top: 100, start: 50, tMiddle: true }),
					new h.div({ position: "absolute", top: 100, start: 100, tMiddle: true }),
				]);
			},
		}),
		new e.text(
			"By adding {{.translate-middle-x}} or {{.translate-middle-y}} classes, elements can be positioned only in horizontal or vertical direction."
		),
		new e.code({
			outputAttr: { class: "position-box" },
			output: () => {
				return new h.div({ position: "relative" }, [
					new h.div({ position: "absolute", top: 0, start: 0 }),
					new h.div({ position: "absolute", top: 0, start: 50, tMiddle: "x" }),
					new h.div({ position: "absolute", top: 0, end: 0 }),
					new h.div({ position: "absolute", top: 50, start: 0, tMiddle: "y" }),
					new h.div({ position: "absolute", top: 50, start: 50, tMiddle: true }),
					new h.div({ position: "absolute", top: 50, end: 0, tMiddle: "y" }),
					new h.div({ position: "absolute", bottom: 0, start: 0 }),
					new h.div({ position: "absolute", bottom: 0, start: 50, tMiddle: "x" }),
					new h.div({ position: "absolute", bottom: 0, end: 0 }),
				]);
			},
		}),

		//-----------------------

		new e.title("Examples"),
		new e.text("Here are some real life examples of these classes:"),
		new e.code({
			outputAttr: { display: "flex", justifyContent: "around" },
			output: () => {
				return [
					new b.button({ position: "relative" }, [
						"Mails ",
						new b.badge(
							{
								bgColor: "secondary",
								position: "absolute",
								top: 0,
								start: 100,
								tMiddle: true,
								rounded: "pill",
							},
							["+99", new b.visuallyhidden("unread messages")]
						),
					]),
					new h.div(
						{
							theme: "dark",
							position: "relative",
							paddingY: 2,
							paddingX: 4,
							textBgColor: "primary",
							borderColor: "primary",
							border: true,
							rounded: "pill",
						},
						[
							"Marker ",
							`<svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-primary)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>`,
						]
					),
					new b.button({ position: "relative" }, [
						"Alerts ",
						new b.badge(
							{
								bgColor: "danger",
								position: "absolute",
								top: 0,
								start: 100,
								tMiddle: true,
								rounded: "circle",
								border: true,
								borderColor: "light",
								padding: 2,
							},
							new b.visuallyhidden("Unread messages")
						),
					]),
				];
			},
		}),

		//-----------------------

		new e.text(
			"You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the {{$position-values}} variable."
		),
		new e.code({
			output: () => {
				return new h.div({ position: "relative", margin: 4 }, [
					new b.progress.container(
						{
							label: "Progress",
							style: { height: "1px" },
							value: 50,
							min: 0,
							max: 100,
						},
						new b.progress.bar({ style: { width: "50%" } })
					),
					new b.button(
						{
							position: "absolute",
							top: 0,
							start: 0,
							tMiddle: true,
							weight: "sm",
							rounded: "pill",
							style: { width: "2rem", height: "2rem" },
						},
						"1"
					),
					new b.button(
						{
							position: "absolute",
							top: 0,
							start: 50,
							tMiddle: true,
							weight: "sm",
							rounded: "pill",
							style: { width: "2rem", height: "2rem" },
						},
						"2"
					),
					new b.button(
						{
							position: "absolute",
							top: 0,
							start: 100,
							tMiddle: true,
							weight: "sm",
							rounded: "pill",
							color: "secondary",
							style: { width: "2rem", height: "2rem" },
						},
						"3"
					),
				]);
			},
		}),

		//-----------------------

		new e.title("Sass"),
		new e.subtitle("Maps"),
		new e.text("Default position utility values are declared in a Sass map, then used to generate our utilities."),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$position-values: (
				0: 0,
				50: 50%,
				100: 100%
				);
			`,
		}),

		//-----------------------

		new e.subtitle("Utilities API"),
		new e.text(
			"Position utilities are declared in our utilities API in {{scss/_utilities.scss}}. {{https://getbootstrap.com/docs/5.3/utilities/api/#using-the-api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss",
			code: `
				"position": (
				property: position,
				values: static relative absolute fixed sticky
				),
				"top": (
				property: top,
				values: $position-values
				),
				"bottom": (
				property: bottom,
				values: $position-values
				),
				"start": (
				property: left,
				class: start,
				values: $position-values
				),
				"end": (
				property: right,
				class: end,
				values: $position-values
				),
				"translate-middle": (
				property: transform,
				class: translate-middle,
				values: (
					null: translate(-50%, -50%),
					x: translateX(-50%),
					y: translateY(-50%),
				)
				),
			`,
		}),
	],
};

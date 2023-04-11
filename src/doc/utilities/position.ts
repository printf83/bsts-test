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
							position: "relative",
							paddingY: 2,
							paddingX: 4,
							textBgColor: "dark",
							border: true,
							borderColor: "dark",
							rounded: "pill",
						},
						[
							"Marker ",
							new h.svg(
								{
									style: { width: "1em", height: "1em" },
									viewBox: "0 0 16 16",
									position: "absolute",
									top: 100,
									start: 50,
									tMiddle: true,
									marginTop: 1,
									fill: "var(--bs-dark)",
								},
								new h.path({
									d: "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z",
								})
							),
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

		new e.subtitle(""),
		new e.text(""),
		new e.codepreview({
			type: "css",
			code: `
				`,
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(""),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(""),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
			`,
		}),
	],
};

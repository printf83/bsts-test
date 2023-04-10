import { core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const flex: IAttrContent = {
	title: "Flex",
	description:
		"Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
	item: [
		new e.title("Enable flex behaviors "),
		new e.text(
			"Apply {{display}} utilities to create a flexbox container and transform {{b::direct children elements}} into flex items. Flex containers and items are able to be modified further with additional flex properties."
		),
		new e.code({
			outputAttr: { class: "flex-box" },
			output: () => {
				return new h.div({ display: "flex", padding: 2 }, "I'm a flexbox container!");
			},
		}),
		new e.code({
			outputAttr: { class: "flex-box" },
			output: () => {
				return new h.div({ display: "inline-flex", padding: 2 }, "I'm a flexbox container!");
			},
		}),
		new e.text("Responsive variations also exist for {{.d-flex}} and {{.d-inline-flex}}."),
		new e.ul({
			item: [
				"{{.d-flex}}",
				"{{.d-inline-flex}}",
				...["sm", "md", "lg", "xl", "xxl"]
					.map((i) => {
						return [`{{.d-${i}-flex}}`, `{{.d-${i}-inline-flex}}`];
					})
					.flat(),
			],
		}),

		//-----------------------

		new e.title("Direction"),
		new e.text(
			"Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is {{row}}. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts)."
		),
		new e.text(
			"Use {{.flex-row}} to set a horizontal direction (the browser default), or {{.flex-row-reverse}} to start the horizontal direction from the opposite side."
		),
		new e.code({
			outputAttr: { class: "flex-box" },
			output: () => {
				return [
					new h.div(
						{ display: "flex", flex: "row", marginBottom: 3 },
						[1, 2, 3].map((i) => new h.div({ padding: 2 }, `Flex item ${i}`))
					),
					new h.div(
						{ display: "flex", flex: "row-reverse" },
						[1, 2, 3].map((i) => new h.div({ padding: 2 }, `Flex item ${i}`))
					),
				];
			},
		}),
		new e.text(
			"Use {{.flex-column}} to set a vertical direction, or {{.flex-column-reverse}} to start the vertical direction from the opposite side."
		),
		new e.code({
			outputAttr: { class: "flex-box" },
			output: () => {
				return [
					new h.div(
						{ display: "flex", flex: "column", marginBottom: 3 },
						[1, 2, 3].map((i) => new h.div({ padding: 2 }, `Flex item ${i}`))
					),
					new h.div(
						{ display: "flex", flex: "column-reverse" },
						[1, 2, 3].map((i) => new h.div({ padding: 2 }, `Flex item ${i}`))
					),
				];
			},
		}),
		new e.text("Responsive variations also exist for {{flex-direction}}."),
		new e.ul({
			item: [
				"{{.flex-row}}",
				"{{.flex-row-reverse}}",
				"{{.flex-column}}",
				"{{.flex-column-reverse}}",
				...["sm", "md", "lg", "xl", "xxl"]
					.map((i) => {
						return [
							`{{.flex-${i}-row}}`,
							`{{.flex-${i}-row-reverse}}`,
							`{{.flex-${i}-column}}`,
							`{{.flex-${i}-column-reverse}}`,
						];
					})
					.flat(),
			],
		}),

		//-----------------------

		new e.title("Justify content"),
		new e.text(
			"Use {{justify-content}} utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if {{flex-direction: column}}). Choose from {{start}} (browser default), {{end}}, {{center}}, {{between}}, {{around}}, or {{evenly}}."
		),
		new e.code({
			outputAttr: { class: "flex-box" },
			output: () => {
				const item = (value: string) => {
					return [
						new h.div({ padding: 2 }, "Justify"),
						new h.div({ padding: 2 }, "Content"),
						new h.div({ padding: 2 }, value),
					];
				};

				return [
					new h.div({ display: "flex", justifyContent: "start", marginBottom: 3 }, item("Start")),
					new h.div({ display: "flex", justifyContent: "end", marginBottom: 3 }, item("End")),
					new h.div({ display: "flex", justifyContent: "center", marginBottom: 3 }, item("Center")),
					new h.div({ display: "flex", justifyContent: "between", marginBottom: 3 }, item("Between")),
					new h.div({ display: "flex", justifyContent: "around", marginBottom: 3 }, item("Around")),
					new h.div({ display: "flex", justifyContent: "evenly" }, item("Evenly")),
				];
			},
		}),
		new e.text("Responsive variations also exist for {{justify-content}}."),
		new e.ul({
			item: [
				"{{.justify-content-start}}",
				"{{.justify-content-end}}",
				"{{.justify-content-center}}",
				"{{.justify-content-between}}",
				"{{.justify-content-around}}",
				"{{.justify-content-evenly}}",
				...["sm", "md", "lg", "xl", "xxl"]
					.map((i) => {
						return [
							`{{.justify-content-${i}-start}}`,
							`{{.justify-content-${i}-end}}`,
							`{{.justify-content-${i}-center}}`,
							`{{.justify-content-${i}-between}}`,
							`{{.justify-content-${i}-around}}`,
							`{{.justify-content-${i}-evenly}}`,
						];
					})
					.flat(),
			],
		}),

		//-----------------------

		new e.title("Align items"),
		new e.text(
			"Use {{align-items}} utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if {{flex-direction: column}}). Choose from {{start}}, {{end}}, {{center}}, {{baseline}}, or {{stretch}} (browser default)."
		),
		new e.code({
			outputAttr: { class: "flex-box" },
			output: () => {
				const item = [
					new h.div({ padding: 2 }, "Flex item"),
					new h.div({ padding: 2 }, "Flex item"),
					new h.div({ padding: 2 }, "Flex item"),
				];

				return [
					new h.div(
						{ display: "flex", alignItem: "start", marginBottom: 3, style: { height: "100px" } },
						item
					),
					new h.div({ display: "flex", alignItem: "end", marginBottom: 3, style: { height: "100px" } }, item),
					new h.div(
						{ display: "flex", alignItem: "center", marginBottom: 3, style: { height: "100px" } },
						item
					),
					new h.div(
						{ display: "flex", alignItem: "baseline", marginBottom: 3, style: { height: "100px" } },
						item
					),
					new h.div(
						{ display: "flex", alignItem: "stretch", marginBottom: 3, style: { height: "100px" } },
						item
					),
				];
			},
		}),
		new e.text("Responsive variations also exist for {{align-items}}."),
		new e.ul({
			item: [
				"{{.align-items-start}}",
				"{{.align-items-end}}",
				"{{.align-items-center}}",
				"{{.align-items-baseline}}",
				"{{.align-items-stretch}}",
				...["sm", "md", "lg", "xl", "xxl"]
					.map((i) => {
						return [
							`{{.align-items-${i}-start}}`,
							`{{.align-items-${i}-end}}`,
							`{{.align-items-${i}-center}}`,
							`{{.align-items-${i}-baseline}}`,
							`{{.align-items-${i}-stretch}}`,
						];
					})
					.flat(),
			],
		}),

		//-----------------------

		new e.title("Align self"),
		new e.text(
			"Use {{align-self}} utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if {{flex-direction: column}}). Choose from the same options as {{align-items}}: {{start}}, {{end}}, {{center}}, {{baseline}}, or {{stretch}} (browser default)."
		),
		new e.code({
			outputAttr: { class: "flex-box" },
			output: () => {
				const item = (i: core.IAttr["alignSelf"]) => {
					return [
						new h.div({ padding: 2 }, "Flex item"),
						new h.div({ padding: 2, alignSelf: i, style: { width: "200px" } }, `.align-self-${i}`),
						new h.div({ padding: 2 }, "Flex item"),
					];
				};

				return ["start", "end", "center", "baseline", "stretch"].map(
					(i) =>
						new h.div(
							{ display: "flex", marginBottom: 3, style: { height: "100px" } },
							item(i as core.IAttr["alignSelf"])
						)
				);
			},
		}),
		new e.text("Responsive variations also exist for {{align-self}}."),
		new e.ul({
			item: [
				"{{.align-self-start}}",
				"{{.align-self-end}}",
				"{{.align-self-center}}",
				"{{.align-self-baseline}}",
				"{{.align-self-stretch}}",
				...["sm", "md", "lg", "xl", "xxl"]
					.map((i) => {
						return [
							`{{.align-self-${i}-start}}`,
							`{{.align-self-${i}-end}}`,
							`{{.align-self-${i}-center}}`,
							`{{.align-self-${i}-baseline}}`,
							`{{.align-self-${i}-stretch}}`,
						];
					})
					.flat(),
			],
		}),

		//-----------------------

		new e.title(""),
		new e.text(""),
		new e.ul({
			item: [
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
			],
		}),
		new e.code({
			output: () => {
				return [];
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

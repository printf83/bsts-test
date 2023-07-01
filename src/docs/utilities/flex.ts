import { core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const FLEXITEM = (length: number) => {
	return Array(length)
		.fill("")
		.map(() => new h.div({ padding: 2 }, "Flex item"));
};

export const flex: IAttrContent = {
	title: "Flex",
	description:
		"Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
	item: () => {
		return [
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
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["flex", "inline-flex"].map((j) => `{{ .d${i}-${j} }}`);
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
				outputAttr: { display: "grid", gap: 3, class: "flex-box" },
				output: () => {
					return [
						new h.div(
							{ display: "flex", flex: "row" },
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
				outputAttr: { display: "grid", gap: 3, class: "flex-box" },
				output: () => {
					return [
						new h.div(
							{ display: "flex", flex: "column" },
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
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["row", "column", "row-reverse", "column-reverse"].map(
								(j) => `{{.justify-content${i}-${j}}}`
							);
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
				outputAttr: { display: "grid", gap: 3, class: "flex-box" },
				output: () => {
					const item = (value: string) => {
						return [
							new h.div({ padding: 2 }, "Justify"),
							new h.div({ padding: 2 }, "Content"),
							new h.div({ padding: 2 }, value),
						];
					};

					return [
						new h.div({ display: "flex", justifyContent: "start" }, item("Start")),
						new h.div({ display: "flex", justifyContent: "end" }, item("End")),
						new h.div({ display: "flex", justifyContent: "center" }, item("Center")),
						new h.div({ display: "flex", justifyContent: "between" }, item("Between")),
						new h.div({ display: "flex", justifyContent: "around" }, item("Around")),
						new h.div({ display: "flex", justifyContent: "evenly" }, item("Evenly")),
					];
				},
			}),
			new e.text("Responsive variations also exist for {{justify-content}}."),
			new e.ul({
				item: [
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["start", "end", "center", "between", "around", "evenly"].map(
								(j) => `{{.justify-content${i}-${j}}}`
							);
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
				outputAttr: { display: "grid", gap: 3, class: "flex-box" },
				output: () => {
					const item = [
						new h.div({ padding: 2 }, "Flex item"),
						new h.div({ padding: 2 }, "Flex item"),
						new h.div({ padding: 2 }, "Flex item"),
					];

					return [
						new h.div({ display: "flex", alignItem: "start", style: { height: "100px" } }, item),
						new h.div({ display: "flex", alignItem: "end", style: { height: "100px" } }, item),
						new h.div({ display: "flex", alignItem: "center", style: { height: "100px" } }, item),
						new h.div({ display: "flex", alignItem: "baseline", style: { height: "100px" } }, item),
						new h.div({ display: "flex", alignItem: "stretch", style: { height: "100px" } }, item),
					];
				},
			}),
			new e.text("Responsive variations also exist for {{align-items}}."),
			new e.ul({
				item: [
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["start", "end", "center", "baseline", "stretch"].map(
								(j) => `{{.align-items${i}-${j}}}`
							);
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
				outputAttr: { display: "grid", gap: 3, class: "flex-box" },
				output: () => {
					const item = (i: core.IAttr["alignSelf"]) => {
						return [
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2, alignSelf: i }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
						];
					};

					return ["start", "end", "center", "baseline", "stretch"].map(
						(i) =>
							new h.div(
								{ display: "flex", style: { height: "100px" } },
								item(i as core.IAttr["alignSelf"])
							)
					);
				},
			}),
			new e.text("Responsive variations also exist for {{align-self}}."),
			new e.ul({
				item: [
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["start", "end", "center", "baseline", "stretch"].map(
								(j) => `{{.align-self${i}-${j}}}`
							);
						})
						.flat(),
				],
			}),

			//-----------------------

			new e.title("Fill"),
			new e.text(
				"Use the {{.flex-fill}} class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space."
			),
			new e.code({
				outputAttr: { class: "flex-box" },
				output: () => {
					return new h.div({ display: "flex" }, [
						new h.div({ flex: "fill", padding: 2 }, "Flex item with a lot of content"),
						new h.div({ flex: "fill", padding: 2 }, "Flex item"),
						new h.div({ flex: "fill", padding: 2 }, "Flex item"),
					]);
				},
			}),
			new e.text("Responsive variations also exist for {{flex-fill}}."),
			new e.ul({
				item: [
					"{{.flex-fill}}",
					"{{.flex-sm-fill}}",
					"{{.flex-md-fill}}",
					"{{.flex-lg-fill}}",
					"{{.flex-xl-fill}}",
					"{{.flex-xxl-fill}}",
				],
			}),

			//-----------------------

			new e.title("Grow and shrink"),
			new e.text(
				"Use {{.flex-grow-*}} utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the {{.flex-grow-1}} elements uses all available space it can, while allowing the remaining two flex items their necessary space."
			),

			new e.code({
				outputAttr: { class: "flex-box" },
				output: () => {
					return new h.div({ display: "flex" }, [
						new h.div({ flex: "grow-1", padding: 2 }, "Flex item"),
						new h.div({ padding: 2 }, "Flex item"),
						new h.div({ padding: 2 }, "Third flex item"),
					]);
				},
			}),
			new e.text(
				"Use {{.flex-shrink-*}} utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with {{.flex-shrink-1}} is forced to wrap its contents to a new line, “shrinking” to allow more space for the previous flex item with {{.w-100}}."
			),
			new e.code({
				outputAttr: { class: "flex-box" },
				output: () => {
					return new h.div({ display: "flex" }, [
						new h.div({ width: 100, padding: 2 }, "Flex item"),
						new h.div({ flex: "shrink-1", padding: 2 }, "Flex item"),
					]);
				},
			}),
			new e.text("Responsive variations also exist for {{flex-grow}} and {{flex-shrink}}."),
			new e.ul({
				item: [
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["grow-0", "grow-1", "shrink-0", "shrink-1"].map((j) => `{{.flex${i}-${j}}}`);
						})
						.flat(),
				],
			}),

			//-----------------------

			new e.title("Auto margins"),
			new e.text(
				"Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right ({{.me-auto}}), and pushing two items to the left ({{.ms-auto}})."
			),
			new e.code({
				outputAttr: { display: "grid", gap: 3, class: "flex-box" },
				output: () => {
					return [
						new h.div({ display: "flex" }, [
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
						]),
						new h.div({ display: "flex" }, [
							new h.div({ padding: 2, marginEnd: "auto" }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
						]),
						new h.div({ display: "flex" }, [
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2, marginStart: "auto" }, "Flex item"),
						]),
					];
				},
			}),

			//-----------------------

			new e.subtitle("With align-items"),
			new e.text(
				"Vertically move one flex item to the top or bottom of a container by mixing {{align-items}}, {{flex-direction: column}}, and {{margin-top: auto}} or {{margin-bottom: auto}}."
			),
			new e.code({
				outputAttr: { display: "grid", gap: 3, class: "flex-box" },
				output: () => {
					return [
						new h.div({ display: "flex", alignItem: "start", flex: "column", style: { height: "200px" } }, [
							new h.div({ padding: 2, marginBottom: "auto" }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
						]),
						new h.div({ display: "flex", alignItem: "end", flex: "column", style: { height: "200px" } }, [
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2 }, "Flex item"),
							new h.div({ padding: 2, marginTop: "auto" }, "Flex item"),
						]),
					];
				},
			}),

			//-----------------------

			new e.title("Warp"),
			new e.text(
				"Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with {{.flex-nowrap}}, wrapping with {{.flex-wrap}}, or reverse wrapping with {{.flex-wrap-reverse}}."
			),
			new e.code({
				outputAttr: { class: "flex-box" },
				extention: [{ name: "FLEXITEM", output: FLEXITEM }],
				output: () => {
					return new h.div({ display: "flex", flex: "nowrap", style: { width: "8rem" } }, FLEXITEM(5));
				},
			}),
			new e.code({
				outputAttr: { class: "flex-box" },
				output: () => {
					return new h.div(
						{ display: "flex", flex: "wrap" },
						Array(14)
							.fill("")
							.map((i, ix) => new h.div({ padding: 2 }, `Flex item ${ix + 1}`))
					);
				},
			}),
			new e.code({
				outputAttr: { class: "flex-box" },
				output: () => {
					return new h.div(
						{ display: "flex", flex: "wrap-reverse" },
						Array(14)
							.fill("")
							.map((i, ix) => new h.div({ padding: 2 }, `Flex item ${ix + 1}`))
					);
				},
			}),
			new e.text("Responsive variations also exist for {{flex-wrap}}."),
			new e.ul({
				item: [
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["nowarp", "wrap", "wrap-reverse"].map((j) => `{{.flex${i}-${j}}}`);
						})
						.flat(),
				],
			}),

			//-----------------------

			new e.title("Order"),
			new e.text(
				"Change the visual order of specific flex items with a handful of {{order}} utilities. Bootstrap only provide options for making an item first or last, as well as a reset to use the DOM order. As {{order}} takes any integer value from 0 to 5, add custom CSS for any additional values needed."
			),
			new e.code({
				outputAttr: { class: "flex-box" },
				output: () => {
					return new h.div({ display: "flex", flex: "nowrap" }, [
						new h.div({ padding: 2, order: 3 }, "First flex item"),
						new h.div({ padding: 2, order: 2 }, "Second flex item"),
						new h.div({ padding: 2, order: 1 }, "Third flex item"),
					]);
				},
			}),
			new e.text("Responsive variations also exist for {{order}}."),
			new e.ul({
				item: [
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return [0, 1, 2, 3, 4, 5].map((j) => `{{.order${i}-${j}}}`);
						})
						.flat(),
				],
			}),
			new e.text(
				"Additionally there are also responsive {{.order-first}} and {{.order-last}} classes that change the {{order}} of an element by applying {{order: -1}} and {{order: 6}}, respectively."
			),
			new e.ul({
				item: [
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["first", "last"].map((j) => `{{.order${i}-${j}}}`);
						})
						.flat(),
				],
			}),

			//-----------------------

			new e.title("Align content"),
			new e.text(
				"Use {{align-content}} utilities on flexbox containers to align flex items together on the cross axis. Choose from {{start}} (browser default), {{end}}, {{center}}, {{between}}, {{around}}, or {{stretch}}. To demonstrate these utilities, Bootstrap enforced {{flex-wrap: wrap}} and increased the number of flex items."
			),
			new e.text("{{b::Heads up! }}This property has no effect on single rows of flex items."),
			new e.code({
				outputAttr: { class: "flex-box" },
				extention: [{ name: "FLEXITEM", output: FLEXITEM }],
				output: () => {
					return new h.div(
						{
							display: "flex",
							flex: "wrap",
							alignContent: "start",
							style: { height: "200px" },
						},
						FLEXITEM(15)
					);
				},
			}),

			new e.code({
				outputAttr: { class: "flex-box" },
				extention: [{ name: "FLEXITEM", output: FLEXITEM }],
				output: () => {
					return new h.div(
						{
							display: "flex",
							flex: "wrap",
							alignContent: "end",
							style: { height: "200px" },
						},
						FLEXITEM(15)
					);
				},
			}),

			new e.code({
				outputAttr: { class: "flex-box" },
				extention: [{ name: "FLEXITEM", output: FLEXITEM }],
				output: () => {
					return new h.div(
						{
							display: "flex",
							flex: "wrap",
							alignContent: "center",
							style: { height: "200px" },
						},
						FLEXITEM(15)
					);
				},
			}),

			new e.code({
				outputAttr: { class: "flex-box" },
				extention: [{ name: "FLEXITEM", output: FLEXITEM }],
				output: () => {
					return new h.div(
						{
							display: "flex",
							flex: "wrap",
							alignContent: "between",
							style: { height: "200px" },
						},
						FLEXITEM(15)
					);
				},
			}),

			new e.code({
				outputAttr: { class: "flex-box" },
				extention: [{ name: "FLEXITEM", output: FLEXITEM }],
				output: () => {
					return new h.div(
						{
							display: "flex",
							flex: "wrap",
							alignContent: "around",
							style: { height: "200px" },
						},
						FLEXITEM(15)
					);
				},
			}),

			new e.code({
				outputAttr: { class: "flex-box" },
				extention: [{ name: "FLEXITEM", output: FLEXITEM }],
				output: () => {
					return new h.div(
						{
							display: "flex",
							flex: "wrap",
							alignContent: "stretch",
							style: { height: "200px" },
						},
						FLEXITEM(15)
					);
				},
			}),
			new e.text("Responsive variations also exist for {{align-content}}."),
			new e.ul({
				item: [
					...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
						.map((i) => {
							return ["start", "end", "center", "between", "around", "stretch"].map(
								(j) => `{{.align-content${i}-${j}}}`
							);
						})
						.flat(),
				],
			}),

			//-----------------------

			new e.title("Media object"),
			new e.text(
				"Looking to replicate the {{https://getbootstrap.com/docs/4.6/components/media-object/::media object component}} from Bootstrap 4? Recreate it in no time with a few flex utilities that allow even more flexibility and customization than before."
			),
			new e.code({
				output: () => {
					return new h.div({ display: "flex" }, [
						new h.div(
							{ flex: "shrink-0" },
							new h.img({ src: "https://picsum.photos/seed/bsts_0/100/100.webp", alt: "..." })
						),
						new h.div(
							{ flex: "grow-1", marginStart: 3 },
							"This is some content from a media component. You can replace this with any content and adjust it as needed."
						),
					]);
				},
			}),

			//-----------------------

			new e.title("Sass"),

			//-----------------------

			new e.subtitle("Utilities API"),
			new e.text(
				"Flexbox utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
			),
			new e.codepreview({
				type: "css",
				title: "scss/_utilities.scss",
				source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
				code: `
				"flex": (
				responsive: true,
				property: flex,
				values: (fill: 1 1 auto)
				),
				"flex-direction": (
				responsive: true,
				property: flex-direction,
				class: flex,
				values: row column row-reverse column-reverse
				),
				"flex-grow": (
				responsive: true,
				property: flex-grow,
				class: flex,
				values: (
					grow-0: 0,
					grow-1: 1,
				)
				),
				"flex-shrink": (
				responsive: true,
				property: flex-shrink,
				class: flex,
				values: (
					shrink-0: 0,
					shrink-1: 1,
				)
				),
				"flex-wrap": (
				responsive: true,
				property: flex-wrap,
				class: flex,
				values: wrap nowrap wrap-reverse
				),
				"justify-content": (
				responsive: true,
				property: justify-content,
				values: (
					start: flex-start,
					end: flex-end,
					center: center,
					between: space-between,
					around: space-around,
					evenly: space-evenly,
				)
				),
				"align-items": (
				responsive: true,
				property: align-items,
				values: (
					start: flex-start,
					end: flex-end,
					center: center,
					baseline: baseline,
					stretch: stretch,
				)
				),
				"align-content": (
				responsive: true,
				property: align-content,
				values: (
					start: flex-start,
					end: flex-end,
					center: center,
					between: space-between,
					around: space-around,
					stretch: stretch,
				)
				),
				"align-self": (
				responsive: true,
				property: align-self,
				values: (
					auto: auto,
					start: flex-start,
					end: flex-end,
					center: center,
					baseline: baseline,
					stretch: stretch,
				)
				),
				"order": (
				responsive: true,
				property: order,
				values: (
					first: -1,
					0: 0,
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					last: 6,
				),
				),
			`,
			}),
		];
	},
};

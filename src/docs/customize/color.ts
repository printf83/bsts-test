import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const hexToRGB = (hex: string) => {
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
};

const RGBToHex = (r: number, g: number, b: number) => {
	return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

const setCSSVar = (variableName: string, value: string) => {
	let root = document.querySelector(":root") as HTMLStyleElement;
	if (root) {
		if (variableName.endsWith("-rgb") && value.startsWith("#")) {
			let v = hexToRGB(value);
			if (v) {
				root.style.setProperty(variableName, `${v.r},${v.g},${v.b}`);
			}
		} else {
			root.style.setProperty(variableName, value);
		}
	}
};
const getCSSVar = (variableName: string) => {
	let root = document.querySelector(":root") as HTMLStyleElement;
	if (root) {
		let value = getComputedStyle(root).getPropertyValue(variableName);
		if (value.startsWith("#")) {
			console.log(`1. ${variableName}:${value}`);
			return value;
		} else {
			let v = value.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
			let result = RGBToHex(parseInt(v[0]), parseInt(v[1]), parseInt(v[2]));
			console.log(`2. ${variableName}:${result}`);
			return result;
		}
	} else {
		return "#ffffff";
	}
};

const colorpickerBg = (variableName: string | string[]) => {
	let v = Array.isArray(variableName) ? variableName.join(",") : variableName;
	let firstVariableName = Array.isArray(variableName) ? variableName[0] : variableName;
	let value = getCSSVar(firstVariableName);
	return new h.div({ class: "swatch", rounded: true, border: true, style: { backgroundColor: value } }, [
		new b.input({
			type: "color",
			data: { "bs-var": v },
			value: value,
			on: {
				input: (e) => {
					let target = e.target as HTMLInputElement;
					let value = target.value;
					let bsVar = target.getAttribute("data-bs-var");
					if (bsVar) {
						let varList = bsVar.split(",");
						varList.forEach((i) => {
							let container = target.closest(".swatch") as HTMLElement;
							if (container) {
								container.style.setProperty("background-color", value);
								setCSSVar(i, value);
							}
						});
					}
				},
			},
		}),
	]);
};

const colorpickerBorder = (variableName: string | string[]) => {
	let v = Array.isArray(variableName) ? variableName.join(",") : variableName;
	let firstVariableName = Array.isArray(variableName) ? variableName[0] : variableName;
	let value = getCSSVar(firstVariableName);
	return new h.div(
		{ class: "swatch", rounded: true, border: true, borderWidth: 5, style: { borderColor: `${value} !important` } },
		[
			new b.input({
				type: "color",
				data: { "bs-var": v },
				value: value,
				on: {
					input: (e) => {
						let target = e.target as HTMLInputElement;
						let value = target.value;
						let bsVar = target.getAttribute("data-bs-var");
						if (bsVar) {
							let varList = bsVar.split(",");
							varList.forEach((i) => {
								let container = target.closest(".swatch") as HTMLElement;
								if (container) {
									container.style.setProperty("border-color", value, "important");
									setCSSVar(i, value);
								}
							});
						}
					},
				},
			}),
		]
	);
};

const colorpickerText = (variableName: string | string[]) => {
	let v = Array.isArray(variableName) ? variableName.join(",") : variableName;
	let firstVariableName = Array.isArray(variableName) ? variableName[0] : variableName;
	let value = getCSSVar(firstVariableName);
	return new h.div({ class: "swatch", position: "relative", style: { color: `${value}` } }, [
		new h.span(
			{
				h: 4,
				fontWeight: "bolder",
				position: "absolute",
				width: 100,
				zIndex: 0,
				textAlign: "center",
				marginTop: 2,
				paddingTop: 1,
			},
			"Text"
		),
		new b.input({
			type: "color",
			data: { "bs-var": v },
			zIndex: 1,
			value: value,
			on: {
				input: (e) => {
					let target = e.target as HTMLInputElement;
					let value = target.value;
					let bsVar = target.getAttribute("data-bs-var");
					if (bsVar) {
						let varList = bsVar.split(",");
						varList.forEach((i) => {
							let container = target.closest(".swatch") as HTMLElement;
							if (container) {
								container.style.setProperty("color", value);
								setCSSVar(i, value);
							}
						});
					}
				},
			},
		}),
	]);
};

export const color: IAttrContent = {
	title: "Color",
	description:
		"Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.",
	item: [
		new e.title("Colors"),
		new e.text(
			"Bootstrap’s color palette has continued to expand and become more nuanced in v5.3.0. We’ve added new variables for {{secondary}} and {{tertiary}} text and background colors, plus{{ {color}-bg-subtle}},{{ {color}-border-subtle}}, and{{ {color}-text-emphasis}} for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on {{:root}} and are adapted for our new dark color mode while our original theme colors remain unchanged."
		),
		new e.text(
			"Colors ending in {{-rgb}} provide the {{red}}, {{green}}, {{blue}} values for use in {{rgb()}} and {{rgba()}} color modes. For example, {{rgba(var(--bs-secondary-bg-rgb), .5)}}."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Heads up!}} There’s some potential confusion with our new secondary and tertiary colors, and our existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6."
		),
		new e.table([
			new b.table.thead(
				new b.table.tr([
					new b.table.th({ scope: "col" }, "Description"),
					new b.table.th({ scope: "col" }, "Swatch"),
					new b.table.th({ scope: "col", style: { minWidth: "15rem" } }, "Variables"),
				])
			),

			new b.table.tbody([
				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 2 },
						"{{b::Body — }}Default foreground (color) and background, including components."
					),
					new b.table.td(colorpickerBg(["--bs-body-color", "--bs-body-color-rgb"])),
					new b.table.td(["{{--bs-body-color}}", new h.br(), "{{--bs-body-color-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg(["--bs-body-bg", "--bs-body-bg-rgb"])),
					new b.table.td(["{{--bs-body-bg}}", new h.br(), "{{--bs-body-bg-rgb}}"]),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 2 },
						"{{b::Secondary — }}Use the {{color}} option for lighter text. Use the {{bg}} option for dividers and to indicate disabled component states."
					),
					new b.table.td(colorpickerBg(["--bs-secondary-color", "--bs-secondary-color-rgb"])),
					new b.table.td(["{{--bs-secondary-color}}", new h.br(), "{{--bs-secondary-color-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg(["--bs-secondary-bg", "--bs-secondary-bg-rgb"])),
					new b.table.td(["{{--bs-secondary-bg}}", new h.br(), "{{--bs-secondary-bg-rgb}}"]),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 2 },
						"{{b::Tertiary — }}Use the {{color}} option for even lighter text. Use the {{bg}} option to style backgrounds for hover states, accents, and wells."
					),
					new b.table.td(colorpickerBg(["--bs-tertiary-color", "--bs-tertiary-color-rgb"])),
					new b.table.td(["{{--bs-tertiary-color}}", new h.br(), "{{--bs-tertiary-color-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg(["--bs-tertiary-bg", "--bs-tertiary-bg-rgb"])),
					new b.table.td(["{{--bs-tertiary-bg}}", new h.br(), "{{--bs-tertiary-bg-rgb}}"]),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td("{{b::Emphasis — }}For higher contrast text. Not applicable for backgrounds."),
					new b.table.td(colorpickerBg(["--bs-emphasis-color", "--bs-emphasis-color-rgb"])),
					new b.table.td(["{{--bs-emphasis-color}}", new h.br(), "{{--bs-emphasis-color-rgb}}"]),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						"{{b::Border — }}For component borders, dividers, and rules. Use {{--bs-border-color-translucent}} to blend with backgrounds with an {{rgba()}} value."
					),
					new b.table.td(colorpickerBg(["--bs-border-color", "--bs-border-color-rgb"])),
					new b.table.td(["{{--bs-border-color}}", new h.br(), "{{--bs-border-color-rgb}}"]),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 4 },
						"{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states."
					),
					new b.table.td(colorpickerBg(["--bs-primary", "--bs-primary-rgb"])),
					new b.table.td(["{{--bs-primary}}", new h.br(), "{{--bs-primary-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg("--bs-primary-bg-subtle")),
					new b.table.td("{{--bs-primary-bg-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBorder("--bs-primary-border-subtle")),
					new b.table.td("{{--bs-primary-border-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerText("--bs-primary-text-emphasis")),
					new b.table.td("{{--bs-primary-text-emphasis}}"),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 4 },
						"{{b::Success — }}Theme color used for positive or successful actions and information."
					),
					new b.table.td(colorpickerBg(["--bs-success", "--bs-success-rgb"])),
					new b.table.td(["{{--bs-success}}", new h.br(), "{{--bs-success-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg("--bs-success-bg-subtle")),
					new b.table.td("{{--bs-success-bg-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBorder("--bs-success-border-subtle")),
					new b.table.td("{{--bs-success-border-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerText("--bs-success-text-emphasis")),
					new b.table.td("{{--bs-success-text-emphasis}}"),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 4 },
						"{{b::Danger — }}Theme color used for errors and dangerous actions."
					),
					new b.table.td(colorpickerBg(["--bs-danger", "--bs-danger-rgb"])),
					new b.table.td(["{{--bs-danger}}", new h.br(), "{{--bs-danger-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg("--bs-danger-bg-subtle")),
					new b.table.td("{{--bs-danger-bg-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBorder("--bs-danger-border-subtle")),
					new b.table.td("{{--bs-danger-border-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerText("--bs-danger-text-emphasis")),
					new b.table.td("{{--bs-danger-text-emphasis}}"),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 4 },
						"{{b::Warning — }}Theme color used for non-destructive warning messages."
					),
					new b.table.td(colorpickerBg(["--bs-warning", "--bs-warning-rgb"])),
					new b.table.td(["{{--bs-warning}}", new h.br(), "{{--bs-warning-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg("--bs-warning-bg-subtle")),
					new b.table.td("{{--bs-warning-bg-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBorder("--bs-warning-border-subtle")),
					new b.table.td("{{--bs-warning-border-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerText("--bs-warning-text-emphasis")),
					new b.table.td("{{--bs-warning-text-emphasis}}"),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 4 },
						"{{b::Info — }}Theme color used for neutral and informative content."
					),
					new b.table.td(colorpickerBg(["--bs-info", "--bs-info-rgb"])),
					new b.table.td(["{{--bs-info}}", new h.br(), "{{--bs-info-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg("--bs-info-bg-subtle")),
					new b.table.td("{{--bs-info-bg-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBorder("--bs-info-border-subtle")),
					new b.table.td("{{--bs-info-border-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerText("--bs-info-text-emphasis")),
					new b.table.td("{{--bs-info-text-emphasis}}"),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 4 },
						"{{b::Light — }}Additional theme option for less contrasting colors."
					),
					new b.table.td(colorpickerBg(["--bs-light", "--bs-light-rgb"])),
					new b.table.td(["{{--bs-light}}", new h.br(), "{{--bs-light-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg("--bs-light-bg-subtle")),
					new b.table.td("{{--bs-light-bg-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBorder("--bs-light-border-subtle")),
					new b.table.td("{{--bs-light-border-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerText("--bs-light-text-emphasis")),
					new b.table.td("{{--bs-light-text-emphasis}}"),
				]),

				//-----------------------
				new b.table.tr([
					new b.table.td(
						{ rowspan: 4 },
						"{{b::Dark — }}Additional theme option for higher contrasting colors."
					),
					new b.table.td(colorpickerBg(["--bs-dark", "--bs-dark-rgb"])),
					new b.table.td(["{{--bs-dark}}", new h.br(), "{{--bs-dark-rgb}}"]),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBg("--bs-dark-bg-subtle")),
					new b.table.td("{{--bs-dark-bg-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerBorder("--bs-dark-border-subtle")),
					new b.table.td("{{--bs-dark-border-subtle}}"),
				]),
				new b.table.tr([
					new b.table.td(colorpickerText("--bs-dark-text-emphasis")),
					new b.table.td("{{--bs-dark-text-emphasis}}"),
				]),
			]),
		]),

		//-----------------------

		new e.title("Using the new colors"),
		new e.text(
			"These new colors are accessible via CSS variables and utility classes—like {{--bs-primary-bg-subtle}} and {{.bg-primary-subtle}}—allowing you to compose your own CSS rules with the variables, or to quickly apply styles via classes. The utilities are built with the color’s associated CSS variables, and since we customize those CSS variables for dark mode, they are also adaptive to color mode by default."
		),
		new e.code({
			output: () => {
				return new h.div(
					{
						padding: 3,
						textColor: "primary-emphasis",
						bgColor: "primary-subtle",
						border: true,
						borderColor: "primary-subtle",
						roundedSize: 3,
					},
					"Example element with utilities"
				);
			},
		}),

		//-----------------------

		new e.title("Theme colors"),
		new e.text(
			"We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s {{scss/_variables.scss}} file."
		),
		new e.item(
			new h.div(
				{ container: "fluid", margin: 0, padding: 0 },
				new h.div(
					{ row: true, gutter: 3 },
					["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
						(i) =>
							new h.div(
								{
									col: [12, "sm-6", "md-4"],
								},
								new h.div(
									{
										padding: 3,
										textBgColor: i as core.IAttr["textBgColor"],
										rounded: true,
									},
									i.charAt(0).toUpperCase() + i.slice(1)
								)
							)
					)
				)
			)
		),
		new e.text("All these colors are available as a Sass map, {{$theme-colors}}."),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$theme-colors: (
				"primary":    $primary,
				"secondary":  $secondary,
				"success":    $success,
				"info":       $info,
				"warning":    $warning,
				"danger":     $danger,
				"light":      $light,
				"dark":       $dark
				);
			`,
		}),
		new e.text("Check out our Sass maps and loops docs for how to modify these colors."),

		//-----------------------

		new e.title("All colors"),
		new e.text(
			"All Bootstrap colors are available as Sass variables and a Sass map in {{scss/_variables.scss}} file. To avoid increased file sizes, we don’t create text or background color classes for each of these variables. Instead, we choose a subset of these colors for a {{https://getbootstrap.com/docs/5.3/customize/color/#theme-colors::theme palette}}."
		),
		new e.text(
			"Be sure to monitor contrast ratios as you customize colors. As shown below, we’ve added three contrast ratios to each of the main colors—one for the swatch’s current colors, one for against white, and one for against black."
		),
		new e.alert({ color: "danger", callout: true }, [
			new b.alert.header(5, "Unsuppoterd in Bootstrap TS"),
			"This feature will supported when Bootstrap make it opt-in by default or available in CDN.",
		]),
		new e.text("If you like to use this feature using Bootstrap TS, you can manually set it by class property:"),
		new e.code({
			output: () => {
				return new h.div(
					{ container: "fluid", margin: 0, padding: 0 },
					new h.div(
						{ row: true, gutter: 3 },
						[
							"blue-100",
							"blue-200",
							"blue-300",
							"blue-400",
							"blue-500",
							"blue-600",
							"blue-700",
							"blue-800",
							"blue-900",
						].map(
							(i) =>
								new h.div(
									{
										col: [12, "sm-6", "md-4"],
									},
									new h.div(
										{
											padding: 3,
											class: i,
											rounded: true,
										},
										`$${i}`
									)
								)
						)
					)
				);
			},
		}),
		// new e.code({
		// 	output: () => {
		// 		return [];
		// 	},
		// }),

		// new e.ul({
		// 	item: [
		// 		"aaaaaaaaaaaaaaaaaaaaaaaa",
		// 		"aaaaaaaaaaaaaaaaaaaaaaaa",
		// 		"aaaaaaaaaaaaaaaaaaaaaaaa",
		// 		"aaaaaaaaaaaaaaaaaaaaaaaa",
		// 	],
		// }),
		// new e.alert({ color: "info", callout: true }, ""),
		// new e.code({
		// 	output: () => {
		// 		return [];
		// 	},
		// }),

		// //-----------------------

		// new e.subtitle(""),
		// new e.text(""),
		// new e.codepreview({
		// 	type: "css",
		// 	code: `
		// 		`,
		// }),

		// //-----------------------

		// new e.title("CSS"),
		// new e.text(""),

		// //-----------------------

		// new e.subtitle("Sass variables"),
		// new e.text(""),
		// new e.codepreview({
		// 	type: "css",
		// 	title: "scss/_variables.scss",
		// 	source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
		// 	code: `
		// 	`,
		// }),
	],
};

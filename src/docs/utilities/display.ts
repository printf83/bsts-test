import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index";
import { IAttrContent } from "../../ctl/main/container";

export const display: IAttrContent = {
	title: "Display property",
	description:
		"Quickly and responsively toggle the display value of components and more with Bootstrap display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.",
	item: () => {
		return [
			new e.section([
				new e.title("How it works"),
				new e.text(
					"Change the value of the {{https://developer.mozilla.org/en-US/docs/Web/CSS/display::display property}} with Bootstrap responsive display utility classes. Bootstrap purposely support only a subset of all possible values for {{display}}. Property value can be combined for various effects as you need."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Notation"),
				new e.text(
					"Display utility classes that apply to all {{nav:docs/layout/breakpoints::breakpoints}}, from {{xs}} to {{xxl}}, have no breakpoint abbreviation in them. This is because those classes are applied from {{min-width: 0;}} and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."
				),
				new e.text("As such, the classes are named using the format:"),
				new e.ul({
					item: [
						"{{display:'{value}' }}for {{xs}}",
						"{{display:'{breakpoint}-{value}' }}for {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}.",
					],
				}),
				new e.text("Where {{i::value}} is one of:"),
				new e.ul({
					item: [
						"{{none}}",
						"{{inline}}",
						"{{inline-block}}",
						"{{block}}",
						"{{grid}}",
						"{{inline-grid}}",
						"{{table}}",
						"{{table-cell}}",
						"{{table-row}}",
						"{{flex}}",
						"{{inline-flex}}",
					],
				}),
				new e.text(
					"The display values can be altered by changing the {{display}} values defined in {{$utilities}} and recompiling the SCSS."
				),
				new e.text(
					"The media queries affect screen widths with the given breakpoint or larger. For example, {{.d-lg-none}} sets {{display: none;}} on {{lg}}, {{xl}}, and {{xxl}} screens."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Examples"),
				new e.code({
					output: () => {
						return [
							new h.div({ display: "inline", padding: 2, textBgColor: "primary" }, "d-inline"),
							new h.div({ display: "inline", padding: 2, textBgColor: "dark" }, "d-inline"),
						];
					},
				}),
				new e.code({
					output: () => {
						return [
							new h.div({ display: "block", padding: 2, textBgColor: "primary" }, "d-block"),
							new h.div({ display: "block", padding: 2, textBgColor: "dark" }, "d-block"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Hiding elements"),
				new e.text(
					"For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size."
				),
				new e.text(
					"To hide elements simply use the {{display:'none'}} property or one of the {{display:'{sm,md,lg,xl,xxl}-none'}} property for any responsive screen variation."
				),
				new e.text(
					"To show an element only on a given interval of screen sizes you can combine one {{display:'*-none'}} property value with a {{display:'*-*'}} property value, for example {{display:['none','md-block','xl-none','xl-none','xxl-none']}} will hide the element for all screen sizes except on medium and large devices."
				),
				new e.table({
					item: [
						["Screen size", "Class"],
						["Hidden on all", "{{display:'none'}}"],
						["Hidden only on xs", "{{display:['none', 'sm-block']}}"],
						["Hidden only on sm", "{{display:['sm-none', 'md-block']}}"],
						["Hidden only on md", "{{display:['md-none', 'lg-block']}}"],
						["Hidden only on lg", "{{display:['lg-none', 'xl-block']}}"],
						["Hidden only on xl", "{{display:['xl-none', 'xxl-block']}}"],
						["Hidden only on xxl", "{{display:['xxl-none']}}"],
						["Visible on all", "{{display:'block'}}"],
						["Visible only on xs", "{{display:['block', 'sm-none']}}"],
						["Visible only on sm", "{{display:['none', 'sm-block', 'md-none']}}"],
						["Visible only on md", "{{display:['none', 'md-block', 'lg-none']}}"],
						["Visible only on lg", "{{display:['none', 'lg-block', 'xl-none']}}"],
						["Visible only on xl", "{{display:['none', 'xl-block', 'xxl-none']}}"],
						["Visible only on xxl", "{{display:['none', 'xxl-block']}}"],
					],
				}),
				new e.code({
					showViewport: true,
					output: () => {
						return [
							new h.div({ display: "lg-none" }, "hide on lg and wider screens"),
							new h.div({ display: ["none", "lg-block"] }, "hide on screens smaller than lg"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Display in print"),
				new e.text(
					"Change the {{print}} property of elements when printing with Bootstrap print display utility classes. Includes support for the same {{display}} values as Bootstrap responsive {{display}} utilities."
				),
				new e.ul({
					item: [
						"{{print:'none'}}",
						"{{print:'inline'}}",
						"{{print:'inline-block'}}",
						"{{print:'block'}}",
						"{{print:'grid'}}",
						"{{print:'inline-grid'}}",
						"{{print:'table'}}",
						"{{print:'table-row'}}",
						"{{print:'table-cell'}}",
						"{{print:'flex'}}",
						"{{print:'inline-flex'}}",
					],
				}),
				new e.text("The print and display classes can be combined."),
				new e.code({
					output: () => {
						return [
							new h.div({ print: "none" }, "Screen Only (Hide on print only)"),
							new h.div({ display: "none", print: "block" }, "Print Only (Hide on screen only)"),
							new h.div(
								{ display: ["none", "lg-block"], print: "block" },
								"Hide up to large on screen, but always show on print"
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Sass")]),

			//----------------------

			new e.section([
				new e.subtitle("Utilities API "),
				new e.text(
					"Display utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
				),
				new e.codepreview({
					type: "css",
					title: "scss/_utilities.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
					code: `
						"display": (
							responsive: true,
							print: true,
							property: display,
							class: d,
							values: inline inline-block block grid inline-grid table table-row table-cell flex inline-flex none
						),
					`,
				}),
			]),
		];
	},
};

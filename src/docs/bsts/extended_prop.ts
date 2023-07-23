import { h } from "@printf83/bsts";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";

export const extended_prop: IContent = {
	title: "Extended property",
	description: "Extend some property to make it avilable on hover, focus and active",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Example"),
				new e.text(
					"We extend property of {{textColor}}, {{borderColor}}, {{textColor}}, {{borderWidth}}, {{textDecoration}}, {{fontItalic}} and {{fontWeight}} to make it available on hover, focus and active state"
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return [
							new h.a(
								{
									href: "#",
									textColor: "primary",
									borderColor: "primary",
									borderWidth: 1,
									textDecoration: "none",
									fontItalic: false,
									fontWeight: "normal",

									textColorHover: "success-emphasis",
									bgColorHover: "success-subtle",
									borderColorHover: "success",
									borderWidthHover: 3,
									textDecorationHover: "underline",
									fontItalicHover: true,
									fontWeightHover: "lighter",

									textColorFocus: "danger-emphasis",
									bgColorFocus: "danger-subtle",
									borderColorFocus: "danger",
									borderWidthFocus: 5,
									textDecorationFocus: "line-through",
									fontItalicActive: true,
									fontWeightActive: "bold",

									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,

									on: {
										click: (event: Event) => {
											const target = event.target as Element;
											if (target.classList.contains("active")) {
												target.classList.remove("active");
											} else {
												target.classList.add("active");
											}
										},
									},
								},
								"Hover me!"
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Hover"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									textColorHover: "primary",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"textColorHover"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									bgColorHover: "primary-subtle",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"bgColorHover"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									borderColorHover: "primary-subtle",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,
								},
								"borderColorHover"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									borderWidthHover: 5,
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,
								},
								"borderWidthHover"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									fontItalicHover: true,
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"fontItalicHover"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									textDecorationHover: "underline",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"textDecorationHover"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									fontWeightHover: "bold",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"fontWeightHover"
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Focus"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									textColorFocus: "primary",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"textColorFocus"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									bgColorFocus: "primary-subtle",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"bgColorFocus"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									borderColorFocus: "primary-subtle",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,
								},
								"borderColorFocus"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									borderWidthFocus: 5,
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,
								},
								"borderWidthFocus"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									fontItalicFocus: true,
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"fontItalicFocus"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									textDecorationFocus: "underline",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"textDecorationFocus"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									fontWeightFocus: "bold",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
								},
								"fontWeightFocus"
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Active"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						const toggleActive = (event: Event) => {
							const target = event.target as Element;
							if (target.classList.contains("active")) {
								target.classList.remove("active");
							} else {
								target.classList.add("active");
							}
						};

						return [
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									textColorActive: "primary-emphasis",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									on: { click: toggleActive },
								},
								"textColorActive"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									bgColorActive: "primary-subtle",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									on: { click: toggleActive },
								},
								"bgColorActive"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									borderColorActive: "primary-subtle",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,
									on: { click: toggleActive },
								},
								"borderColorActive"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									borderWidthActive: 5,
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,
									on: { click: toggleActive },
								},
								"borderWidthActive"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									fontItalicActive: true,
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									on: { click: toggleActive },
								},
								"fontItalicActive"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									textDecorationActive: "underline",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									on: { click: toggleActive },
								},
								"textDecorationActive"
							),
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									fontWeightActive: "bold",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									on: { click: toggleActive },
								},
								"fontWeightActive"
							),
						];
					},
				}),
			]),

			//----------------------
		];
	},
};

import { h } from "@printf83/bsts";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";

export const extended_color: IContent = {
	title: "Extend color",
	description: "Extend bootstrap color to make it avilable on hover, focus and active",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Example"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return [
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "primary",
									borderColor: "primary",
									textColorHover: "success-emphasis",
									bgColorHover: "success-subtle",
									borderColorHover: "success",
									textColorFocus: "danger-emphasis",
									bgColorFocus: "danger-subtle",
									borderColorFocus: "danger",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,
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
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return [
							new h.a(
								{
									href: "#",
									textDecoration: "none",
									textColor: "body",
									textColorHover: "primary-emphasis",
									paddingX: 2,
									paddingY: 1,
									rounded: 2,
									border: true,
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
									border: true,
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
						];
					},
				}),
			]),

			//----------------------
		];
	},
};

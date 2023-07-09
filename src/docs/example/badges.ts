import { b, core } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const badges: IAttrContent = {
	title: "Badges",
	description: "Make badges work with custom inner HTML and new looks.",
	item: () => {
		return [
			new e.section([
				new e.title("Style 1"),
				new e.code({
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
							(i) => {
								return new b.badge(
									{ textBgColor: i as core.bootstrapType.textBgColor, rounded: "pill" },
									core.uppercaseFirst(i)
								);
							}
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Style 2"),
				new e.code({
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
							(i) => {
								return new b.badge(
									{
										bgColor: `${i}-subtle` as core.bootstrapType.bgColor,
										textColor: `${i}-emphasis` as core.bootstrapType.textColor,
										rounded: "pill",
									},
									core.uppercaseFirst(i)
								);
							}
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Style 3"),
				new e.code({
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
							(i) => {
								return new b.badge(
									{
										bgColor: `${i}-subtle` as core.bootstrapType.bgColor,
										textColor: `${i}-emphasis` as core.bootstrapType.textColor,
										border: true,
										borderColor: `${i}-subtle` as core.bootstrapType.borderColor,
										rounded: "pill",
									},
									core.uppercaseFirst(i)
								);
							}
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("With image"),
				new e.code({
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
							(i, ix) => {
								return new b.badge(
									{
										bgColor: `${i}-subtle` as core.bootstrapType.bgColor,
										textColor: `${i}-emphasis` as core.bootstrapType.textColor,
										border: true,
										borderColor: `${i}-subtle` as core.bootstrapType.borderColor,
										rounded: "pill",
										display: "flex",
										alignItem: "center",
										gap: 2,
									},
									[
										new b.img({
											rounded: "circle",
											attrWidth: 24,
											attrHeight: 24,
											src: `https://picsum.photos/seed/bsts_${ix}/24/24.webp`,
										}),
										core.uppercaseFirst(i),
									]
								);
							}
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("With close button"),
				new e.code({
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
							(i, ix) => {
								return new b.badge(
									{
										bgColor: `${i}-subtle` as core.bootstrapType.bgColor,
										textColor: `${i}-emphasis` as core.bootstrapType.textColor,
										border: true,
										borderColor: `${i}-subtle` as core.bootstrapType.borderColor,
										rounded: "pill",
										display: "flex",
										alignItem: "center",
										gap: 2,
									},
									[
										core.uppercaseFirst(i),
										new b.icon({
											id: "x-circle-fill",
											fontSize: 6,
											pointerEvent: "auto",
											on: {
												click: (event) => {
													const target = event.target as Element;
													core.removeElement(target.closest(".badge") as Element);
												},
											},
										}),
									]
								);
							}
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("With image and close button"),
				new e.code({
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
							(i, ix) => {
								return new b.badge(
									{
										bgColor: `${i}-subtle` as core.bootstrapType.bgColor,
										textColor: `${i}-emphasis` as core.bootstrapType.textColor,
										border: true,
										borderColor: `${i}-subtle` as core.bootstrapType.borderColor,
										rounded: "pill",
										display: "flex",
										alignItem: "center",
										gap: 2,
									},
									[
										new b.img({
											rounded: "circle",
											attrWidth: 24,
											attrHeight: 24,
											src: `https://picsum.photos/seed/bsts_${ix}/24/24.webp`,
										}),
										core.uppercaseFirst(i),
										new b.verticalrule(),
										new b.icon({
											id: "x-circle-fill",
											fontSize: 6,
											pointerEvent: "auto",
											on: {
												click: (event) => {
													const target = event.target as Element;
													core.removeElement(target.closest(".badge") as Element);
												},
											},
										}),
									]
								);
							}
						);
					},
				}),
			]),

			//----------------------
		];
	},
};

import { b, h, core, I } from "@printf83/bsts";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";

export const transform: IContent = {
	title: "Transform",
	description: "Change element rotation and flip",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Rotate"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 3, flex: "wrap" },
					output: () => {
						return [undefined, 45, 90, 135, 180, 225, 270, 315].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												rotate: i as core.bstsType.rotate,
												fontSize: 1,
											},
											"at"
										),
										iconPosition: "top",
										elem: i ? i : "normal",
									})
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Flip"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 3, flex: "wrap" },
					output: () => {
						return [undefined, "vertical", "horizontal", "both"].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												flip: i as I.B.Icon["flip"],
												fontSize: 1,
											},
											"at"
										),
										iconPosition: "top",
										elem: i ? i : "normal",
									})
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Combination"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 3, flex: "wrap" },
					output: () => {
						return new h.div(
							{
								display: "flex",
								justifyContent: "center",
								alignItem: "center",
								padding: 2,
								border: true,
								rounded: 2,
								style: { width: "8rem" },
							},
							new b.caption({
								icon: new b.icon(
									{
										rotate: 135,
										flip: "vertical",
										fontSize: 1,
									},
									"at"
								),
								iconPosition: "top",
								elem: "rotate:135 & flip:vertical",
							})
						);
					},
				}),
			]),
		];
	},
};

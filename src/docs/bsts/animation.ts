import { b, h, I } from "@printf83/bsts";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";

export const animation: IContent = {
	title: "Animation",
	description: "Add animation to element",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Animation"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						return [
							"rotation",
							"sidetoside",
							"zoom-in",
							"zoom-out",
							"spin",
							"pulse",
							"shake",
							"barrel-roll",
							"floater",
							"wiggle",
							"pound",
							"heartbeat",
							"roller-in-right",
							"roller-in-left",
							"roller-out-right",
							"roller-out-left",
							"slide-in-bottom",
							"slide-in-top",
							"slide-in-left",
							"slide-in-right",
							"slide-out-bottom",
							"slide-out-top",
							"slide-out-left",
							"slide-out-right",
							"fade-in",
							"fade-out",
							"rotate-in-right",
							"rotate-in-left",
							"rotate-in",
							"rotate-out-right",
							"rotate-out-left",
							"rotate-out",
							"bounce-in",
							"bounce-out",
						].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										overflow: "hidden",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												animate: i as I.B.Icon["animate"],
												animateRepeat: "infinite",
												fontSize: 1,
											},
											"asterisk"
										),
										iconPosition: "top",
										elem: i,
									})
								)
						);
					},
				}),
			]),
		];
	},
};

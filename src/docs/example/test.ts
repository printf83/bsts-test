import { b, h, core, I } from "@printf83/bsts";
import { IAttrContent } from "../../ctl/main/container.js";
import * as e from "../../ctl/example/_index.js";
import Chart from "chart.js/auto";

export const test: IAttrContent = {
	title: "Testing memory leak",
	description: "This is testing page to test our library one by one",
	item: () => {
		return [
			// new e.section([
			// 	new e.title("Tooltip"),
			// 	new e.code({
			// 		output: () => {
			// 			return new b.button("Hello");
			// 		},
			// 	}),
			// ]),

			//----------------------

			new e.section([
				new e.title("Animation"),
				new e.code({
					outputAttr: { display: "flex", gap: 3, flex: "wrap" },
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
							"roller-right",
							"roller-left",
							"slide-down",
							"slide-up",
							"slide-left",
							"slide-right",
							"fade-in",
							"fade-out",
							"rotate-in-right",
							"rotate-in-left",
							"rotate-in",
							"bounce-in",
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
										col: [6, "md-4", "lg-3", "xl-2"],
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

			//----------------------

			new e.section([
				new e.title("Rotate"),
				new e.code({
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
										col: [6, "md-4", "lg-3", "xl-2"],
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
										col: [6, "md-4", "lg-3", "xl-2"],
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
				new e.title("Duplicate ID"),
				new e.code({
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return [
							new b.button({ id: "chart" }, "chart"),
							new b.button({ id: "duplicate_id" }, "duplicate_id"),
							new b.button({ id: "tooltip" }, "tooltip"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Chart"),
				new e.code({
					showCodepen: false,
					output: () => {
						const item = (arg: { data: number[] }) => {
							return new b.card.container(
								{ style: { maxWidth: "120px" } },
								new b.card.body(
									new h.canvas({
										ratio: "4x3",
										on: {
											build: (event) => {
												const target = event.target as HTMLCanvasElement;

												//dialog show after 300 ms
												setTimeout(
													(target) => {
														new Chart(target, {
															type: "line",
															data: {
																labels: Array(arg.data.length).fill(""),
																datasets: [
																	{
																		data: arg.data,
																		borderWidth: 2,
																		pointRadius: 0,
																		tension: 0.5,
																	},
																],
															},
															options: {
																plugins: {
																	legend: {
																		display: false,
																	},
																},
																scales: {
																	x: { display: false },
																	y: {
																		display: false,
																		beginAtZero: true,
																	},
																},
															},
														});
													},
													300,
													target
												);
											},
										},
									})
								)
							);
						};

						return new b.button(
							{
								on: {
									click: () => {
										b.modal.show(
											b.modal.create({
												customStyle: 2,
												title: "Chatjs example",
												scrollable: true,
												elem: new h.div(
													{
														display: "flex",
														gap: 3,
														justifyContent: "center",
														flex: "wrap",
														marginTop: 3,
													},
													new Array(15).fill("").map(() => {
														return item({
															data: Array(core.rndBetween(5, 20))
																.fill("")
																.map(() => {
																	return core.rndBetween(1, 20);
																}),
														});
													})
												),
												btn: ["ok", "cancel"],
											})
										);
									},
								},
							},
							"Test"
						);
					},
				}),
			]),
		];
	},
};

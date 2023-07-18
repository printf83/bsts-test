import { b, h, core } from "@printf83/bsts";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import Chart from "chart.js/auto";

export const chart: IContent = {
	title: "ChartJS",
	description: "Example using bsts with Chart.js",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Chart"),
				new e.code({
					db: getContentCode(db),
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
																labels: Array(arg.data.length).fill(
																	""
																),
																datasets: [
																	{
																		data: arg.data,
																		borderWidth: 1.5,
																		pointRadius: 0,
																		tension: 0.5,
																		borderColor:
																			core.getCSSVar(
																				"--bs-primary"
																			),
																		fill: {
																			target: "origin",
																			above: core.getCSSVar(
																				"--bs-primary-bg-subtle"
																			),
																		},
																	},
																],
															},
															options: {
																// elements: {
																// 	line: {
																// 		backgroundColor:
																// core.getCSSVar(
																// 	"--bs-primary-bg-subtle"
																// ),
																// 	},
																// },
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

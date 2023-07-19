import { b, h, core } from "@printf83/bsts";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import Chart from "chart.js/auto";
// import ChartDataLabels from "chartjs-plugin-datalabels";

export const chart: IContent = {
	title: "ChartJS",
	description: "Example using bsts with Chart.js",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Doughnut"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");
						const value = core.rndBetween(1, 100);
						const data = [value, 100 - value];

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											new Chart(target, {
												type: "doughnut",
												data: {
													labels: Array(data.length).fill(""),
													datasets: [
														{
															data: data,
															// borderRadius: 50,
															borderWidth: 0,
															backgroundColor: [
																lineColor,
																lineColor2,
															],
														},
													],
												},
												options: {
													aspectRatio: 2,
													cutout: "80%",
													rotation: 270,
													// responsive: true,
													plugins: {
														legend: {
															display: false,
														},
													},
													// scales: {
													// 	x: { display: false },
													// 	y: {
													// 		display: false,
													// 		beginAtZero: true,
													// 	},
													// },
												},
											});
										},
									},
								})
							)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Half doughnut"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");
						const value = core.rndBetween(1, 100);
						const data = [value, 100 - value];

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											new Chart(target, {
												type: "doughnut",
												data: {
													labels: Array(data.length).fill(""),
													datasets: [
														{
															data: data,
															// borderRadius: 50,
															borderWidth: 0,
															backgroundColor: [
																lineColor,
																lineColor2,
															],
														},
													],
												},
												options: {
													aspectRatio: 2,
													cutout: "90%",
													circumference: 180,
													rotation: 270,
													// responsive: true,
													plugins: {
														legend: {
															display: false,
														},
													},
													// scales: {
													// 	x: { display: false },
													// 	y: {
													// 		display: false,
													// 		beginAtZero: true,
													// 	},
													// },
												},
											});
										},
									},
								})
							)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Half doughnut with label"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");
						const value = core.rndBetween(1, 100);
						const data = [value, 100 - value];

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									ratio: "16x9",
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											// Chart.register(ChartDataLabels);

											new Chart(target, {
												type: "doughnut",
												data: {
													labels: Array(data.length).fill(""),
													datasets: [
														{
															data: data,
															// borderRadius: 50,
															borderWidth: 0,
															backgroundColor: [
																lineColor,
																lineColor2,
															],
														},
													],
												},

												options: {
													aspectRatio: 2,
													cutout: "90%",
													circumference: 180,
													rotation: 270,
													// responsive: true,
													plugins: {
														legend: {
															display: false,
														},
														// datalabels: {
														// 	formatter: () => {
														// 		return `${50}%`;
														// 	},
														// 	color: lineColor,
														// 	backgroundColor: lineColor2,
														// },
													},
													// scales: {
													// 	x: { display: false },
													// 	y: {
													// 		display: false,
													// 		beginAtZero: true,
													// 	},
													// },
												},
											});
										},
									},
								})
							)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Line"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
						const lineColor = core.getCSSVarRgbColor("--bs-primary");

						const data = Array(core.rndBetween(5, 10))
							.fill("")
							.map(() => {
								return core.rndBetween(1, 10);
							});

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									ratio: "16x9",
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											new Chart(target, {
												type: "line",
												data: {
													labels: Array(data.length).fill(""),
													datasets: [
														{
															data: data,
															borderWidth: 1,
															pointRadius: 0,
															tension: 0.5,
															borderColor: lineColor,
															fill: {
																target: "origin",
																above: fillColor,
															},
														},
													],
												},
												options: {
													// responsive: true,
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
									},
								})
							)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Line with grid"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const gridColor = core.getCSSVarRgbColor("--bs-tertiary-bg");

						const data = Array(core.rndBetween(5, 10))
							.fill("")
							.map(() => {
								return core.rndBetween(1, 10);
							});

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									ratio: "16x9",
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											new Chart(target, {
												type: "line",
												data: {
													labels: Array(data.length).fill(""),
													datasets: [
														{
															data: data,
															borderWidth: 1,
															pointRadius: 0,
															tension: 0.5,
															borderColor: lineColor,
															fill: {
																target: "origin",
																above: fillColor,
															},
														},
													],
												},
												options: {
													// responsive: true,
													plugins: {
														legend: {
															display: false,
														},
													},
													scales: {
														x: {
															ticks: {
																display: false,
															},
															grid: {
																color: gridColor,
															},
														},
														y: {
															beginAtZero: true,
															grid: {
																color: gridColor,
															},
														},
													},
												},
											});
										},
									},
								})
							)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Chart in modal"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						let fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
						const lineColor = core.getCSSVarRgbColor("--bs-primary");

						const item = (arg: { data: number[] }) => {
							return new b.card.container(
								new b.card.body(
									{ padding: 2 },
									new h.canvas({
										ratio: "16x9",
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
																		borderWidth: 1,
																		pointRadius: 0,
																		tension: 0.5,
																		borderColor: lineColor,
																		fill: {
																			target: "origin",
																			above: fillColor,
																		},
																	},
																],
															},
															options: {
																// responsive: true,
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
												title: "Chatjs example",
												scrollable: true,
												elem: new h.div(
													{
														display: "grid",
														gridTemplateColumns: "1fr 1fr",
														gap: 2,
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

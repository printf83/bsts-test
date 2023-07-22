import { b, h, core } from "@printf83/bsts";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import Chart from "chart.js/auto";

const drawValuePlugin = (arg: {
	fontFamily?: string;
	fontSize?: number;
	fonstSizeAdjustment?: number;
	lineColor?: string;
}) => {
	arg.fonstSizeAdjustment ??= 0.35;
	arg.fontFamily ??= "Arial";
	arg.fontSize ??= 40;
	arg.lineColor ??= core.getCSSVarHexColor("--bs-body");

	return {
		id: "bsts_draw_value",
		afterDraw: (chart: Chart) => {
			const ctx = chart.ctx;

			const w = chart.width;
			const h = chart.height;
			const x = w * 0.5;
			const y = h * 0.5;

			ctx.font = `${arg.fontSize}px ${arg.fontFamily}`;
			const approxFontHeight = parseInt(ctx.font);
			ctx.fillStyle = arg.lineColor ? arg.lineColor : "#000";
			ctx.textAlign = "center";
			ctx.fillText(
				`${chart.data.datasets[0]?.data[0]?.toString()}%`,
				x,
				y + approxFontHeight * arg.fonstSizeAdjustment!
			);
		},
	};
};

const randomDoughnutData = (id: string, chart?: Chart<"doughnut", number[], any>) => {
	const canvas = document.getElementById(id);
	if (canvas) {
		if (
			chart &&
			chart.data.datasets &&
			chart.data.datasets.length >= 0 &&
			chart.data.datasets[0] &&
			chart.data.datasets[0].data
		) {
			const value = core.rndBetween(0, 100);
			chart.data.datasets[0].data = [value, 100 - value];
			chart.update();
			setTimeout(
				(id, chart) => {
					randomDoughnutData(id, chart);
				},
				1000,
				id,
				chart
			);
		}
	}
};

const randomLineData = (id: string, chart?: Chart<"line", number[], any>) => {
	const canvas = document.getElementById(id);
	if (canvas) {
		if (
			chart &&
			chart.data.datasets &&
			chart.data.datasets.length >= 0 &&
			chart.data.datasets[0] &&
			chart.data.datasets[0].data
		) {
			const value = core.rndBetween(0, 100);

			chart.data.labels?.shift();
			chart.data.labels?.push("");

			chart.data.datasets[0].data.push(value);
			chart.data.datasets[0].data.shift();
			chart.update("none");
			setTimeout(
				(id, chart) => {
					randomLineData(id, chart);
				},
				1000,
				id,
				chart
			);
		}
	}
};

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
					extention: [
						{
							name: "RANDOMDATA",
							rename: "randomDoughnutData",
							output: randomDoughnutData,
						},
					],
					output: () => {
						const id = core.UUID();

						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									ratio: "21x9",
									id: id,
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											const res = new Chart(target, {
												type: "doughnut",
												data: {
													datasets: [
														{
															data: [0, 100],
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
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															enabled: false,
														},
													},
												},
											});

											randomDoughnutData(id, res);
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
				new e.title("Doughnut with label"),
				new e.code({
					db: getContentCode(db),
					extention: [
						{
							name: "RANDOMDATA",
							rename: "randomDoughnutData",
							output: randomDoughnutData,
						},
						{
							name: "DRAWVALUE",
							rename: "drawValuePlugin",
							output: drawValuePlugin,
						},
					],
					output: () => {
						const id = core.UUID();

						const fontFamily = core.getCSSVar("--bs-font-sans-serif");
						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body({ padding: 2, position: "relative" }, [
								//label
								new h.div(
									{
										textColor: "primary",
										position: "absolute",
										top: 50,
										start: 50,
										tMiddle: "x",
										textAlign: "center",
									},
									[
										new b.caption({
											icon: new b.icon({
												id: "device-hdd-fill",
												fontSize: 3,
											}),
											iconPosition: "bottom",
										}),
									]
								),

								//chart
								new h.canvas({
									ratio: "21x9",
									id: id,
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											const res = new Chart(target, {
												type: "doughnut",
												data: {
													datasets: [
														{
															data: [0, 100],
															borderWidth: 0,
															backgroundColor: [
																lineColor,
																lineColor2,
															],
														},
													],
												},
												plugins: [
													drawValuePlugin({
														fontFamily,
														lineColor,
														fonstSizeAdjustment: -0.15,
													}),
												],
												options: {
													aspectRatio: 2,
													cutout: "80%",
													rotation: 270,
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															enabled: false,
														},
													},
												},
											});

											randomDoughnutData(id, res);
										},
									},
								}),
							])
						);
					},
				}),
			]),

			//----------------------

			new e.section({ id: "doughnut_180" }, [
				new e.title({ id: "doughnut_180" }, "180° doughnut"),
				new e.code({
					db: getContentCode(db),
					extention: [
						{
							name: "RANDOMDATA",
							rename: "randomDoughnutData",
							output: randomDoughnutData,
						},
					],
					output: () => {
						const id = core.UUID();

						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									ratio: "21x9",
									id: id,
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											const res = new Chart(target, {
												type: "doughnut",
												data: {
													datasets: [
														{
															data: [0, 100],
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
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															enabled: false,
														},
													},
												},
											});

											randomDoughnutData(id, res);
										},
									},
								})
							)
						);
					},
				}),
			]),

			//----------------------

			new e.section({ id: "doughnut_180_label" }, [
				new e.title({ id: "doughnut_180_label" }, "180° doughnut with label"),
				new e.code({
					db: getContentCode(db),
					extention: [
						{
							name: "RANDOMDATA",
							rename: "randomDoughnutData",
							output: randomDoughnutData,
						},
						{
							name: "DRAWVALUE",
							rename: "drawValuePlugin",
							output: drawValuePlugin,
						},
					],
					output: () => {
						const id = core.UUID();
						const fontFamily = core.getCSSVar("--bs-font-sans-serif");
						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body({ padding: 2, position: "relative" }, [
								//label
								new h.div(
									{
										textColor: "primary",
										position: "absolute",
										bottom: 0,
										start: 50,
										tMiddle: "x",
										textAlign: "center",
										marginBottom: 4,
									},
									[
										new b.caption(
											{
												icon: new b.icon({
													id: "memory",
													fontSize: 3,
												}),
											},
											"RAM Usage"
										),
									]
								),

								//chart
								new h.canvas({
									ratio: "21x9",
									id: id,
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											const res = new Chart(target, {
												type: "doughnut",
												data: {
													datasets: [
														{
															data: [0, 100],
															borderWidth: 0,
															backgroundColor: [
																lineColor,
																lineColor2,
															],
														},
													],
												},
												plugins: [
													drawValuePlugin({
														fontFamily,
														lineColor,
														fontSize: 60,
													}),
												],
												options: {
													aspectRatio: 1.75,
													cutout: "90%",
													circumference: 180,
													rotation: 270,
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															enabled: false,
														},
													},
												},
											});

											randomDoughnutData(id, res);
										},
									},
								}),
							])
						);
					},
				}),
			]),

			//----------------------

			new e.section({ id: "doughnut_315" }, [
				new e.title({ id: "doughnut_315" }, "315° doughnut"),
				new e.code({
					db: getContentCode(db),
					extention: [
						{
							name: "RANDOMDATA",
							rename: "randomDoughnutData",
							output: randomDoughnutData,
						},
					],
					output: () => {
						const id = core.UUID();

						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									ratio: "21x9",
									id: id,
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											const res = new Chart(target, {
												type: "doughnut",
												data: {
													datasets: [
														{
															data: [0, 100],
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
													circumference: 315,
													rotation: 202.5,
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															enabled: false,
														},
													},
												},
											});

											randomDoughnutData(id, res);
										},
									},
								})
							)
						);
					},
				}),
			]),
			//----------------------

			new e.section({ id: "doughnut_315_label" }, [
				new e.title({ id: "doughnut_315_label" }, "315° doughnut with icon and label"),
				new e.code({
					db: getContentCode(db),
					extention: [
						{
							name: "RANDOMDATA",
							rename: "randomDoughnutData",
							output: randomDoughnutData,
						},
						{
							name: "DRAWVALUE",
							rename: "drawValuePlugin",
							output: drawValuePlugin,
						},
					],
					output: () => {
						const id = core.UUID();

						const fontFamily = core.getCSSVar("--bs-font-sans-serif");
						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const lineColor2 = core.getCSSVarRgbColor("--bs-secondary-bg");

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body({ padding: 2, position: "relative" }, [
								//label
								new h.div(
									{
										textColor: "primary",
										position: "absolute",
										bottom: 0,
										start: 50,
										tMiddle: "x",
										textAlign: "center",
									},
									[
										new b.caption(
											{
												icon: new b.icon({
													id: "cpu-fill",
													fontSize: 3,
												}),
												iconPosition: "bottom",
											},
											"CPU Usage"
										),
									]
								),

								//chart
								new h.canvas({
									ratio: "21x9",
									id: id,
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											const res = new Chart(target, {
												type: "doughnut",
												data: {
													datasets: [
														{
															data: [0, 100],
															borderWidth: 0,
															backgroundColor: [
																lineColor,
																lineColor2,
															],
														},
													],
												},
												plugins: [
													drawValuePlugin({ fontFamily, lineColor }),
												],
												options: {
													aspectRatio: 2,
													cutout: "80%",
													circumference: 315,
													rotation: 202.5,
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															enabled: false,
														},
													},
												},
											});

											randomDoughnutData(id, res);
										},
									},
								}),
							])
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Line"),
				new e.code({
					db: getContentCode(db),
					extention: [
						{ name: "RANDOMDATA", rename: "randomLineData", output: randomLineData },
					],
					output: () => {
						const id = core.UUID();
						const fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
						const lineColor = core.getCSSVarRgbColor("--bs-primary");

						const data = Array(10)
							.fill("")
							.map(() => {
								return core.rndBetween(1, 100);
							});

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									ratio: "21x9",
									id: id,
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											const res = new Chart(target, {
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
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															enabled: false,
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

											randomLineData(id, res);
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
					extention: [
						{
							name: "RANDOMDATA",
							rename: "randomLineData",
							output: randomLineData,
						},
					],
					output: () => {
						const id = core.UUID();
						const fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
						const lineColor = core.getCSSVarRgbColor("--bs-primary");
						const gridColor = core.getCSSVarRgbColor("--bs-tertiary-bg");

						const data = Array(10)
							.fill("")
							.map(() => {
								return core.rndBetween(0, 100);
							});

						return new b.card.container(
							{ style: { maxWidth: "380px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
									ratio: "21x9",
									id: id,
									on: {
										build: (event) => {
											const target = event.target as HTMLCanvasElement;

											const res = new Chart(target, {
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
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															enabled: false,
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

											randomLineData(id, res);
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
					extention: [
						{ name: "RANDOMDATA", rename: "randomLineData", output: randomLineData },
					],
					output: () => {
						const fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
						const lineColor = core.getCSSVarRgbColor("--bs-primary");

						const item = (arg: { data: number[] }) => {
							const id = core.UUID();
							return new b.card.container(
								new b.card.body(
									{ padding: 2 },
									new h.canvas({
										ratio: "21x9",
										id: id,
										on: {
											build: (event) => {
												const target = event.target as HTMLCanvasElement;
												const id = target.id;
												//dialog show after 300 ms
												setTimeout(
													(target, id) => {
														const res = new Chart(target, {
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
																plugins: {
																	legend: {
																		display: false,
																	},
																	tooltip: {
																		enabled: false,
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

														randomLineData(id, res);
													},
													300,
													target,
													id
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
													new Array(4).fill("").map(() => {
														return item({
															data: Array(10)
																.fill("")
																.map(() => {
																	return core.rndBetween(0, 100);
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

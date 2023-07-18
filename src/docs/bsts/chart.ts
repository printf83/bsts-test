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
				new e.title("Doughnut chart"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						// const primarySubtileRGB = core.getRGBVar("--bs-primary-bg-subtle");
						// let fillColor = `rgba(${primarySubtileRGB.r},${primarySubtileRGB.g},${primarySubtileRGB.b},.2)`;
						const lineColor = core.getCSSVar("--bs-primary");
						const value = core.rndBetween(1, 100);
						const data = [value, 100 - value];

						return new b.card.container(
							{ style: { maxWidth: "200px" } },
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
															borderWidth: 1,
															borderColor: lineColor,
															borderRadius: 2,
														},
													],
												},
												options: {
													aspectRatio: 2,
													cutout: "80%",
													circumference: 180,
													rotation: 270,
													responsive: true,
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
				new e.title("Line chart"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const primarySubtileRGB = core.getRGBVar("--bs-primary-bg-subtle");
						let fillColor = `rgba(${primarySubtileRGB.r},${primarySubtileRGB.g},${primarySubtileRGB.b},.2)`;
						const lineColor = core.getCSSVar("--bs-primary");

						const data = Array(core.rndBetween(5, 10))
							.fill("")
							.map(() => {
								return core.rndBetween(1, 10);
							});

						return new b.card.container(
							{ style: { maxWidth: "200px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
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
													responsive: true,
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
				new e.title("Line chart with grid"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const primarySubtileRGB = core.getRGBVar("--bs-primary-bg-subtle");
						let fillColor = `rgba(${primarySubtileRGB.r},${primarySubtileRGB.g},${primarySubtileRGB.b},.2)`;
						const lineColor = core.getCSSVar("--bs-primary");

						const data = Array(core.rndBetween(5, 10))
							.fill("")
							.map(() => {
								return core.rndBetween(1, 10);
							});

						return new b.card.container(
							{ style: { maxWidth: "200px" } },
							new b.card.body(
								{ padding: 2 },
								new h.canvas({
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
													responsive: true,
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
														},
														y: {
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
				new e.title("Chart in modal"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const primarySubtileRGB = core.getRGBVar("--bs-primary-bg-subtle");
						let fillColor = `rgba(${primarySubtileRGB.r},${primarySubtileRGB.g},${primarySubtileRGB.b},.2)`;
						const lineColor = core.getCSSVar("--bs-primary");

						const item = (arg: { data: number[] }) => {
							return new b.card.container(
								{ col: [12, "sm-6", "lg-4", "xl-3"] },
								new b.card.body(
									{ padding: 2 },
									new h.canvas({
										on: {
											build: (event) => {
												const target = event.target as HTMLCanvasElement;

												//dialog show after 300 ms
												new Chart(target, {
													type: "line",
													data: {
														labels: Array(arg.data.length).fill(""),
														datasets: [
															{
																data: arg.data,
																borderWidth: 1.5,
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
														responsive: true,
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

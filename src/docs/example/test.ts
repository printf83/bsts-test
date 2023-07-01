import { b, h, core } from "@printf83/bsts";
import { IAttrContent } from "../../ctl/main/container.js";
import * as e from "../../ctl/example/_index.js";
import Chart from "chart.js/auto";

export const test: IAttrContent = {
	title: "Testing memory leak",
	description: "This is testing page to test our library one by one",
	item: () => {
		return [
			new e.section(
				"title",
				"Tooltip",
				new e.code({
					output: () => {
						return new b.button("Hello");
					},
				})
			),

			//-----------------------

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
											customStyle: "android",
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
		];
	},
};

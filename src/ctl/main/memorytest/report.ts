import { Chart } from "chart.js";
import { core, b, h } from "@printf83/bsts";
import { secondToDurationText } from "./common.js";
import { initTest } from "./test.js";
import { speedDB } from "./speed.js";

export const report = (arg: {
	testId: string;
	docCount: number;
	loadSpeed: number;
	memoryLeak: number | undefined;
	durationSecond: number;
	memorySupported: boolean;
	counttag: boolean;
	LESSTAG: { title: string; count: number };
	MOSTTAG: { title: string; count: number };
	showchart: boolean;
	waitonesec: boolean;
	random: boolean;
	checkduplicateid: boolean;
	count: number;
	speedDB: { title: string; data: number[] }[];
}): core.elem | core.elem[] => {
	return [
		new h.p("{{s::Memory test complete}}"),
		new b.card.container(
			{ marginBottom: 2 },
			new b.card.body([
				new h.canvas({
					id: `${arg.testId}-chart`,
					ratio: "21x9",
					on: {
						build: (event) => {
							const target = event.target as HTMLCanvasElement;

							//dialog show after 300 ms
							setTimeout(
								(target: HTMLCanvasElement) => {
									const lineColor = core.getCSSVarRgbColor("--bs-primary");
									const gridColor = core.getCSSVarRgbColor("--bs-tertiary-bg");

									new Chart(target, {
										type: "bar",
										data: {
											labels: arg.speedDB.map((i) => i.title),
											datasets: [
												{
													data: speedDB.map((i) => {
														if (i.data.length > 1) {
															const sum = i.data.reduce(
																(partialSum, a) => partialSum + a,
																0
															);
															return sum / i.data.length;
														} else {
															return i.data[0];
														}
													}),
													borderWidth: 0,
													backgroundColor: lineColor,
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
													display: true,
													beginAtZero: true,
													grid: {
														color: gridColor,
													},
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
				}),
				new h.div(
					{ textAlign: "center", textColor: "secondary", small: true },
					"Process speed in milisecond (Less is better)"
				),
			])
		),

		new h.div({ textColor: "secondary", lineHeight: "sm" }, [
			new h.small([`Page count : `, new h.strong(arg.docCount)]),
			new h.br(),
			new h.small([`Load speed : `, new h.strong(arg.loadSpeed), " page/sec"]),
			new h.br(),
			arg.memorySupported
				? new h.div([
						new h.small([
							`Memory leak : `,
							new h.strong(
								{
									textColor:
										arg.memoryLeak === undefined
											? "success"
											: arg.memoryLeak < 0.2
												? "success"
												: arg.memoryLeak < 0.4
													? "warning"
													: "danger",
								},
								arg.memoryLeak === undefined || arg.memoryLeak < 0.2
									? [
											new b.icon({ id: "check-circle-fill" }),
											" Not detected (0%)",
										]
									: arg.memoryLeak < 0.2
										? [
												new b.icon({ id: "check-circle-fill" }),
												` Too low (${(arg.memoryLeak * 100).toFixed(0)}%)`,
											]
										: arg.memoryLeak < 0.4
											? [
													new b.icon({
														id: "exclamation-triangle-fill",
													}),
													` Possible (${(arg.memoryLeak * 100).toFixed(0)}%)`,
												]
											: [
													new b.icon({
														id: "exclamation-triangle-fill",
													}),
													` Detected (${(arg.memoryLeak * 100).toFixed(0)}%)`,
												]
							),
						]),
						new h.br(),
					])
				: "",
			new h.small([`Duration : `, new h.strong(secondToDurationText(arg.durationSecond))]),
			arg.counttag ? new h.br() : "",
			arg.counttag
				? new h.small([
						`Less element : `,
						new h.strong(arg.LESSTAG.title),
						"(",
						new h.strong(arg.LESSTAG.count),
						" tag)",
					])
				: "",
			arg.counttag ? new h.br() : "",
			arg.counttag
				? new h.small([
						`Most element : `,
						new h.strong(arg.MOSTTAG.title),
						"(",
						new h.strong(arg.MOSTTAG.count),
						" tag)",
					])
				: "",
		]),

		new h.div({ display: "grid", gap: 3, gridTemplateColumns: "1fr 1fr", marginTop: 3 }, [
			new b.button(
				{
					color: "secondary",
					outline: true,
					weight: "lg",
					on: {
						click: () => {
							initTest({
								testId: core.UUID(),
								count: arg.count,
								checkduplicateid: arg.checkduplicateid,
								counttag: arg.counttag,
								random: arg.random,
								showchart: arg.showchart,
								waitonesec: arg.waitonesec,
							});
						},
					},
				},
				"Try again"
			),
			new b.button(
				{
					weight: "lg",
					on: {
						click: (event) => {
							const target = event.target as Element;
							b.modal.hide(target);

							//bugfix drowdown fail if dropdown documentation is downloaded faster
							//reload document
							location.reload();
						},
					},
				},
				"Close"
			),
		]),
	];
};

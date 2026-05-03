import { Chart } from "chart.js";
import { core, b, h } from "@printf83/bsts";
import { secondToDurationText } from "./common.js";

//if element not found, return false. if found, update element and return true
export const updateProgress = (arg: {
	testId: string;
	chart?: Chart;
	chartData?: number;
	count?: number;
	progress?: number;
	current?: string | null;
	speed?: number;
	memoryLeak?: number | string;
	time?: number;
}) => {
	const progressBar = document.getElementById(`${arg.testId}-bar`);

	if (progressBar) {
		if (arg.count) {
			const progressCount = document.getElementById(`${arg.testId}-count`);
			if (progressCount) {
				progressCount.innerText = arg.count.toString();
			}
		}

		if (arg.progress) {
			progressBar.setAttribute("style", `width:${arg.progress.toString()}%;`);
		}

		if (arg.current) {
			const progressCurrent = document.getElementById(`${arg.testId}-current`);
			if (progressCurrent) {
				progressCurrent.innerText = arg.current;
			}
		}

		if (arg.speed !== undefined) {
			const progressSpeed = document.getElementById(`${arg.testId}-speed`);
			if (progressSpeed) {
				progressSpeed.innerText = arg.speed.toString();
			}
		}

		if (arg.memoryLeak !== undefined) {
			const progressMemoryLeakLabel = document.getElementById(
				`${arg.testId}-memory-leak-label`
			);
			if (progressMemoryLeakLabel) {
				if (typeof arg.memoryLeak === "string") {
					progressMemoryLeakLabel.innerText = arg.memoryLeak;
				} else {
					if (arg.memoryLeak === undefined) {
						progressMemoryLeakLabel.innerText = "Checking";
					} else if (arg.memoryLeak === 0) {
						progressMemoryLeakLabel.innerText = `Not detected (0%)`;
					} else if (arg.memoryLeak < 0.2) {
						progressMemoryLeakLabel.innerText = `Too low (${(arg.memoryLeak * 100).toFixed(0)}%)`;
					} else if (arg.memoryLeak < 0.4) {
						progressMemoryLeakLabel.innerText = `Possible (${(arg.memoryLeak * 100).toFixed(0)}%)`;
					} else {
						progressMemoryLeakLabel.innerText = `Detected (${(arg.memoryLeak * 100).toFixed(0)}%)`;
					}
				}
			}
		}

		if (arg.time) {
			const progressTime = document.getElementById(`${arg.testId}-time`);
			if (progressTime) {
				progressTime.innerText = secondToDurationText(arg.time + 1);
			}
		}

		if (arg.chart && arg.chartData) {
			arg.chart.data.labels?.shift();
			arg.chart.data.labels?.push(arg.current);
			arg.chart.data.datasets[1]!.data.shift();
			arg.chart.data.datasets[1]!.data.push(arg.chartData);
			arg.chart.data.datasets[0]!.data = Array(30).fill(arg.chartData);

			arg.chart.update("none");
		}

		return true;
	} else {
		return false;
	}
};
export const progressUI = (arg: {
	msg: string;
	testId: string;
	counterLabel: string;
	currentLabel: string;
	speedLabel: string;
	memoryLeakLabel: string;
	timeLabel: string;
	stopLabel: string;
	total: number;
	showchart: boolean;
	showMemoryLeak: boolean;
}) => {
	return [
		new h.p({ marginBottom: 2 }, arg.msg),

		arg.showchart
			? new b.card.container(
					{ marginBottom: 2 },
					new b.card.body([
						new h.canvas({
							id: `${arg.testId}-chart`,
							ratio: "21x9",
						}),
						new h.div(
							{ textAlign: "center", textColor: "secondary", small: true },
							"Process speed in milisecond (Less is better)"
						),
					])
				)
			: "",

		new h.div({ textColor: "secondary", lineHeight: "sm" }, [
			new h.small([
				`${arg.counterLabel} : `,
				new h.strong({ id: `${arg.testId}-count` }, "..."),
				" / ",
				new h.strong(
					{ id: `${arg.testId}-total` },
					arg.total ? arg.total.toString() : "..."
				),
			]),
			new h.br(),
			new h.small([
				`${arg.currentLabel} : `,
				new h.strong({ id: `${arg.testId}-current` }, "..."),
			]),
			new h.br(),
			new h.small([
				`${arg.speedLabel} : ±`,
				new h.strong({ id: `${arg.testId}-speed` }, "..."),
				" page/sec",
			]),
			arg.showMemoryLeak ? new h.br() : "",
			arg.showMemoryLeak
				? new h.small([
						`${arg.memoryLeakLabel} :`,
						new h.strong({ id: `${arg.testId}-memory-leak-label` }, ""),
					])
				: "",
			arg.showMemoryLeak ? new h.br() : "",
			new h.small([`${arg.timeLabel} : `, new h.strong({ id: `${arg.testId}-time` }, "...")]),
			new h.div(
				{ marginTop: 2 },
				new b.progress.container(
					new b.progress.bar({
						id: `${arg.testId}-bar`,
					})
				)
			),
			new h.div(
				{ display: "grid", marginTop: 2 },
				new b.button(
					{
						weight: "lg",
						on: {
							click: () => {
								core.replaceChild(
									document.getElementById("memory-test-dialog") as Element,
									[]
								);
							},
						},
					},
					arg.stopLabel
				)
			),
		]),
	];
};

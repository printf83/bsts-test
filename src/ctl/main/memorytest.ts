import { b, core, h } from "@printf83/bsts";
import { menu } from "./menu.js";
import { highlightCurrentMenu } from "./menu.js";
import { onMenuChange } from "./menu.js";
import * as main from "./_index.js";
import { getData } from "./data.js";
import Chart from "chart.js/auto";

const MOSTTAG: { title: string; count: number } = { title: "NONE", count: Number.MIN_VALUE };
const LESSTAG: { title: string; count: number } = { title: "NONE", count: Number.MAX_VALUE };
let lastTestTime = 0;
let lastEstimateTest = 0;

let _docDB: string[] = [];
const docDB = () => {
	if (_docDB.length > 0) {
		return _docDB;
	} else {
		_docDB = menu.doc
			.map((i) => {
				return i.item.map((j) => {
					return j.value;
				});
			})
			.flat();

		return _docDB;
	}
};

const genDurationText = (second: number) => {
	if (second > 60) {
		if (second % 60 === 0) {
			return `${~~(second / 60)} minute${~~(second / 60) > 1 ? "s" : ""}`;
		} else {
			return `${~~(second / 60)} minute${~~(second / 60) > 1 ? "s" : ""} ${second % 60} second${second % 60 > 1 ? "s" : ""}`;
		}
	} else {
		return `${second} second${second > 1 ? "s" : ""}`;
	}
};

const getDuplicateID = () => {
	const duplicateIds = Array.from(document.querySelectorAll("[id]"))
		.map((v: Element) => v.id)
		.reduce((acc: { [key: string]: number }, v: string) => {
			acc[v] = (acc[v] || 0) + 1;
			return acc;
		}, {});

	const duplicates = Object.entries(duplicateIds)
		.filter(([_key, value]: [string, number]) => value > 1)
		.map(([key, _value]: [string, number]) => key);

	return duplicates;
};

const RGBToHex = (r: number, g: number, b: number) => {
	return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

const getCSSVar = (variableName: string) => {
	let root = document.querySelector(":root") as HTMLStyleElement;
	if (root) {
		let value = getComputedStyle(root).getPropertyValue(variableName);
		if (value.startsWith("#")) {
			//console.log(`1. ${variableName}:${value}`);
			return value;
		} else {
			let v = value.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
			let result = RGBToHex(parseInt(v[0]), parseInt(v[1]), parseInt(v[2]));
			//console.log(`2. ${variableName}:${result}`);
			return result;
		}
	} else {
		return "#ffffff";
	}
};

const genTestChart = (container: HTMLCanvasElement) => {
	return new Chart(container, {
		type: "line",
		data: {
			labels: Array(30).fill(""),
			datasets: [
				{
					data: Array(30).fill(0),
					borderWidth: 1.5,
					pointRadius: 1.5,
					tension: 0.5,
					borderColor: getCSSVar("--bs-primary"),
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			aspectRatio: 2,
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				y: {
					display: true,
					min: 0,
					title: {
						display: false,
						text: "Speed (ms)",
					},
					beginAtZero: true,
					grid: { color: getCSSVar("--bs-tertiary-bg") },
					// ticks: { color: getCSSVar("--bs-tertiary-color") },
				},
				x: {
					display: false,
					// grid: { color: getCSSVar("--bs-tertiary-color") },
				},
			},
		},
	});
};

const updateProgressInfo = (arg: { testId: string; chart: Chart; chartData?: number; count?: number; progress?: number; current?: string | null; speed?: number; time?: number }) => {
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

		if (arg.speed) {
			const progressSpeed = document.getElementById(`${arg.testId}-speed`);
			if (progressSpeed) {
				progressSpeed.innerText = arg.speed.toString();
			}
		}

		if (arg.time) {
			const progressTime = document.getElementById(`${arg.testId}-time`);
			if (progressTime) {
				progressTime.innerText = genDurationText(arg.time + 1);
			}
		}

		if (arg.chartData) {
			arg.chart.data.labels?.shift();
			arg.chart.data.labels?.push(arg.current);
			arg.chart.data.datasets.forEach((dataset) => {
				dataset.data.shift();
				dataset.data.push(arg.chartData!);
			});
			arg.chart.update("none");
		}

		return true;
	} else {
		return false;
	}
};

const genProgressDialog = (arg: { msg: string; testId: string; counterLabel: string; currentLabel: string; speedLabel: string; timeLabel: string; total: number }) => {
	return [
		new h.p(arg.msg),

		new b.card.container(
			{ marginBottom: 2 },
			new b.card.body([
				new h.canvas({
					id: `${arg.testId}-chart`,
					ratio: "21x9",
				}),
				new h.div({ textAlign: "center", textColor: "secondary", small: true }, "Process speed in milisecond (Less is better)"),
			])
		),

		new h.div({ textColor: "secondary", lineHeight: "sm" }, [
			new h.small([`${arg.counterLabel} : `, new h.strong({ id: `${arg.testId}-count` }, "..."), " / ", new h.strong({ id: `${arg.testId}-total` }, arg.total ? arg.total.toString() : "...")]),
			new h.br(),
			new h.small([`${arg.currentLabel} : `, new h.strong({ id: `${arg.testId}-current` }, "...")]),
			new h.br(),
			new h.small([`${arg.speedLabel} : ±`, new h.strong({ id: `${arg.testId}-speed` }, "..."), " page/sec"]),
			new h.br(),
			new h.small([`${arg.timeLabel} : `, new h.strong({ id: `${arg.testId}-time` }, "...")]),
			new h.div(
				{ marginTop: 2 },
				new b.progress.container(
					new b.progress.bar({
						id: `${arg.testId}-bar`,
					})
				)
			),
		]),
	];
};

const runMemoryTest = (arg: { startTime: number; chart: Chart; testId: string; count: number; random?: boolean; checkduplicateid?: boolean; counttag?: boolean; max?: number }, callback: (counter: number, docId: string) => void) => {
	arg.max ??= arg.count;

	let mDB = docDB();
	let mDBLength = mDB.length;
	let docId = arg.random ? mDB[core.rndBetween(0, mDBLength - 1)] : mDB[(arg.max - arg.count) % mDB.length];

	if (arg.count > 0) {
		core.requestIdleCallback(() => {
			getData(docId, (docData) => {
				//add to page
				let contentbody = document.getElementById("bs-main") as Element;
				contentbody = core.replaceChild(contentbody, main.genMainContent(docData));
				highlightCurrentMenu(docId);
				const pagetitle = document.querySelector("h1.display-5.page-title-text")?.textContent;

				//get duplicate id
				if (arg.checkduplicateid) {
					const duplicateID = getDuplicateID();
					const duplicateIDCount = duplicateID.length;
					if (duplicateIDCount > 0) {
						console.warn(`${pagetitle} have ${duplicateIDCount} duplicate key${duplicateIDCount > 1 ? "s" : ""}`, duplicateID);
					}
				}

				let tagCount: number | undefined;
				//count tag
				if (arg.counttag) {
					tagCount = contentbody.getElementsByTagName("*").length;
					if (tagCount > MOSTTAG.count) {
						MOSTTAG.title = pagetitle ? pagetitle : "Bootstrap TS";
						MOSTTAG.count = tagCount;
					}

					if (tagCount < LESSTAG.count) {
						LESSTAG.title = pagetitle ? pagetitle : "Bootstrap TS";
						LESSTAG.count = tagCount;
					}
				}

				//calculate data
				const currentTime = performance.now();
				const dataChart = currentTime - lastTestTime;
				const dataCount = arg.max! - arg.count;
				const dataProgress = (dataCount / arg.max!) * 100;
				const dataCurrent = tagCount ? `${pagetitle ? pagetitle : "..."} (${tagCount} tag)` : pagetitle;
				let dataSpeed: number | undefined;
				let dataTime: number | undefined;
				if (currentTime > lastEstimateTest + 1000) {
					lastEstimateTest = currentTime;
					dataSpeed = ~~(((arg.max! - arg.count) / (currentTime - arg.startTime)) * 1000);
					dataTime = ~~((((currentTime - arg.startTime) / dataProgress) * (100 - dataProgress)) / 1000);
				}

				if (updateProgressInfo({ testId: arg.testId, chart: arg.chart, chartData: dataChart, count: dataCount, progress: dataProgress, current: dataCurrent, speed: dataSpeed, time: dataTime })) {
					lastTestTime = currentTime;
					runMemoryTest({ startTime: arg.startTime, chart: arg.chart, testId: arg.testId, count: arg.count - 1, random: arg.random, checkduplicateid: arg.checkduplicateid, counttag: arg.counttag, max: arg.max }, callback);
				} else {
					callback(arg.max! - arg.count, docId);
				}
			});
		}, 300);
	} else {
		callback(arg.max! - arg.count, docId);
	}
};

const startMemoryTest = (arg: { sender: Element; testId: string; count: number; random: boolean; checkduplicateid: boolean; counttag: boolean }) => {
	core.replaceChild(
		document.getElementById("memory-test-progress") as Element,
		genProgressDialog({
			msg: "{{s::Memory test in progress}}. Kindly await its completion, or if necessary, you may click outside the dialog to interrupt the test.",
			testId: arg.testId,
			counterLabel: "Counter",
			currentLabel: "Load page",
			speedLabel: "Estimate load speed",
			timeLabel: "Estimate time remaining",
			total: arg.count,
		})
	);

	const chart = genTestChart(document.getElementById(`${arg.testId}-chart`) as HTMLCanvasElement);

	lastTestTime = performance.now();
	lastEstimateTest = lastTestTime;
	const startTime = lastTestTime;
	runMemoryTest(
		{
			startTime: lastTestTime,
			chart: chart,
			testId: arg.testId,
			count: arg.count,
			random: arg.random,
			checkduplicateid: arg.checkduplicateid,
			counttag: arg.counttag,
		},
		(docCount: number, docId: string) => {
			const endTime = performance.now();

			if (arg.sender) {
				const mdl = arg.sender.closest(".modal-dialog") as Element;
				if (mdl) {
					b.modal.hide(mdl);
				}
			}

			highlightCurrentMenu(docId);
			onMenuChange(docId, false, "push", () => {
				let result: string = "";

				let loadSpeed = ~~((docCount / (endTime - startTime)) * 1000);
				let durationSecond = ~~((endTime - startTime) / 1000);

				if (arg.counttag) {
					result = `
					Page count : {{s::${docCount}}} page{{br}}
					Load speed : ±{{s::${loadSpeed}}} page/sec{{br}}
					Duration : {{s::${genDurationText(durationSecond)}}}{{br}}
					Less element : {{s::${LESSTAG.title} (${LESSTAG.count} element)}}{{br}}
					Most element : {{s::${MOSTTAG.title} (${MOSTTAG.count} element)}}`;
				} else {
					result = `
					Page count : {{s::${docCount}}} page{{br}}
					Load speed : ±{{s::${loadSpeed}}} page/sec{{br}}
					Duration : {{s::${genDurationText(durationSecond)}}}`;
				}

				b.modal.show(
					b.modal.create({
						title: "Memory test complete",
						elem: new b.msg({
							icon: new b.icon({ id: "info-circle-fill", textColor: "primary", fontSize: 1 }),
							elem: result,
						}),
						btn: "ok",
					})
				);
			});
		}
	);
};

const startDownloadResource = (testId: string, callback: () => void) => {
	const item = menu.doc.map((i) => i.item).flat();

	core.replaceChild(
		document.getElementById("memory-test-progress") as Element,
		genProgressDialog({
			msg: "{{s::Download resource in progress}}. Kindly await its completion, or if necessary, you may click outside the dialog to interrupt the process.",
			testId: testId,
			counterLabel: "Counter",
			currentLabel: "Downloading page",
			speedLabel: "Estimate download speed",
			timeLabel: "Estimate time remaining",
			total: item.length,
		})
	);

	const chart = genTestChart(document.getElementById(`${testId}-chart`) as HTMLCanvasElement);

	lastTestTime = performance.now();
	lastEstimateTest = lastTestTime;

	downloadResource(
		{
			index: 0,
			item: item,
			startTime: lastTestTime,
			chart: chart,
			testId: testId,
		},
		() => {
			chart.destroy();
			callback();
		}
	);
};

const downloadResource = (
	arg: {
		index: number;
		item: main.IAttrItemSubMenu[];
		startTime: number;
		chart: Chart;
		testId: string;
	},
	callback: () => void
) => {
	let count = arg.item.length - 1;
	if (arg.index <= count) {
		getData(arg.item[arg.index].value, (_data) => {
			//calculate data
			const currentTime = performance.now();
			const dataChart = currentTime - lastTestTime;
			const dataCount = arg.index + 1;
			const dataProgress = (arg.index / count) * 100;
			const dataCurrent = arg.item[arg.index].label ? arg.item[arg.index].label : "...";

			let dataSpeed: number | undefined;
			let dataTime: number | undefined;
			if (currentTime > lastEstimateTest + 1000) {
				lastEstimateTest = currentTime;
				dataSpeed = ~~(((arg.index + 1) / (currentTime - arg.startTime)) * 1000);
				dataTime = ~~((((currentTime - arg.startTime) / dataProgress) * (100 - dataProgress)) / 1000);
			}

			if (updateProgressInfo({ testId: arg.testId, chart: arg.chart, chartData: dataChart, count: dataCount, progress: dataProgress, current: dataCurrent, speed: dataSpeed, time: dataTime })) {
				lastTestTime = currentTime;
				core.requestIdleCallback(() => {
					downloadResource(
						{
							index: arg.index + 1,
							item: arg.item,
							startTime: arg.startTime,
							chart: arg.chart,
							testId: arg.testId,
						},
						callback
					);
				}, 300);
			}
		});
	} else {
		callback();
	}
};

export const showMemoryTestDialog = () => {
	const testId = core.UUID();

	b.modal.show(
		new b.modal.container([
			new b.modal.body({ id: "memory-test-msg" }, [
				new h.p(
					"Please select one of the buttons below to open a specified number of pages for the purpose of detecting potential memory leaks. To facilitate this process, you can utilize either the {{Memory Monitor Program}} on your device or the {{Developer Tools}} available in your browser. Before commencing the memory leak test, please make a note of the current memory usage. Upon completion of the test, kindly compare the memory difference. It is anticipated that the memory should revert back to its original state once the test is finalized."
				),

				new h.p([
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Random page",
						checked: false,
						id: "memory-test-random",
					}),
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Calcuate element",
						checked: false,
						id: "memory-test-counttag",
					}),
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Check duplicate id",
						checked: false,
						id: "memory-test-duplicateid",
					}),
					b.form.check({
						container: { marginBottom: 3 },
						type: "checkbox",
						switch: true,
						label: "Download resouce first",
						checked: true,
						id: "memory-test-downloadfirst",
					}),
					new h.div(
						{
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr",
							gap: 2,
						},
						[10, 30, 50, 100, 300, 500, 1000, 3000, 5000].map((i) => {
							return new b.button(
								{
									outline: true,
									color: i === 100 ? "primary" : "secondary",
									data: {
										counter: i,
									},
									on: {
										click: (event) => {
											const target = event.target as Element;
											const counter = parseInt(target.getAttribute("data-counter")!);
											const randomtest = (document.getElementById("memory-test-random") as HTMLInputElement).checked;
											const downloadfirst = (document.getElementById("memory-test-downloadfirst") as HTMLInputElement).checked;
											const checkduplicateid = (document.getElementById("memory-test-duplicateid") as HTMLInputElement).checked;
											const counttag = (document.getElementById("memory-test-counttag") as HTMLInputElement).checked;

											document.getElementById("memory-test-msg")?.classList.add("d-none");
											document.getElementById("memory-test-progress")?.classList.remove("d-none");

											if (downloadfirst) {
												startDownloadResource(testId, () => {
													startMemoryTest({ sender: target, testId: testId, count: counter, random: randomtest, checkduplicateid: checkduplicateid, counttag: counttag });
												});
											} else {
												startMemoryTest({ sender: target, testId: testId, count: counter, random: randomtest, checkduplicateid: checkduplicateid, counttag: counttag });
											}
										},
									},
								},
								`${i}`
							);
						})
					),
				]),

				new h.small(new b.caption({ icon: "info-circle-fill", textColor: "secondary" }, "To cancel the test, simply click outside the dialog.")),
			]),
			new b.modal.body({ id: "memory-test-progress", display: "none" }, []),
		])
	);
};

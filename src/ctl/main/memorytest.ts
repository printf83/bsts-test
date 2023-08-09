import { b, core, h } from "@printf83/bsts";
import { IMenuItem, highlightMenu } from "./menu.js";
import { getContent } from "./data.js";
import Chart from "chart.js/auto";
import { DEFAULTDOCUMENT, menu, menuItem } from "./_db.js";
import { setupContentContainerItem } from "./content.js";

const MOSTTAG: { title: string; count: number } = { title: "NONE", count: Number.MIN_VALUE };
const LESSTAG: { title: string; count: number } = { title: "NONE", count: Number.MAX_VALUE };
let lastTestTime = 0;
let lastEstimateTest = 0;

const secondToDurationText = (second: number) => {
	if (second > 60) {
		if (second % 60 === 0) {
			return `${~~(second / 60)} minute${~~(second / 60) > 1 ? "s" : ""}`;
		} else {
			return `${~~(second / 60)} minute${~~(second / 60) > 1 ? "s" : ""} ${
				second % 60
			} second${second % 60 > 1 ? "s" : ""}`;
		}
	} else {
		return `${second} second${second > 1 ? "s" : ""}`;
	}
};

const checkDuplicateID = () => {
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

const setupChart = (container: HTMLCanvasElement) => {
	const fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
	const lineColor = core.getCSSVarRgbColor("--bs-primary");
	const gridColor = core.getCSSVarRgbColor("--bs-tertiary-bg");

	return new Chart(container, {
		type: "line",
		data: {
			labels: Array(30).fill(""),
			datasets: [
				{
					data: Array(30).fill(0),
					borderWidth: 1,
					pointRadius: 0,
					borderColor: lineColor,
					borderDash: [3, 3],
				},
				{
					data: Array(30).fill(0),
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
			maintainAspectRatio: true,
			aspectRatio: 2,
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					enabled: false,
				},
			},
			scales: {
				y: {
					display: true,
					beginAtZero: true,
					grid: { color: gridColor },
				},
				x: {
					ticks: { display: false },
					grid: { color: gridColor },
				},
			},
		},
	});
};

const updateProgress = (arg: {
	testId: string;
	chart?: Chart;
	chartData?: number;
	count?: number;
	progress?: number;
	current?: string | null;
	speed?: number;
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

		if (arg.speed) {
			const progressSpeed = document.getElementById(`${arg.testId}-speed`);
			if (progressSpeed) {
				progressSpeed.innerText = arg.speed.toString();
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

const setupProgressUI = (arg: {
	msg: string;
	testId: string;
	counterLabel: string;
	currentLabel: string;
	speedLabel: string;
	timeLabel: string;
	stopLabel: string;
	total: number;
	showchart: boolean;
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

let speedDB: { id: string; title: string; data: number[] }[];
const addToSpeedDB = (id: string, title: string, data: number) => {
	let index = speedDB.findIndex((i) => i.id === id);
	if (index > -1) {
		speedDB[index]!.data.push(data);
	} else {
		speedDB.push({ id: id, title: title, data: [data] });
	}
};

let _docDB: string[] = [];
const docDB = () => {
	if (_docDB.length > 0) {
		return _docDB;
	} else {
		_docDB = menu
			.map((i) => {
				return i.item.map((j) => {
					return j.value;
				});
			})
			.flat();

		return _docDB;
	}
};

const getDocId = (random: boolean, max: number, count: number, mDB: string[]): string => {
	const mDBLength = mDB.length;
	let result = random ? mDB[core.rndBetween(0, mDBLength - 1)] : mDB[(max - count) % mDBLength];

	if (result) {
		return result;
	} else {
		if (random) {
			return getDocId(random, max, count, mDB);
		} else {
			return DEFAULTDOCUMENT;
		}
	}
};

const runMemoryTest = (
	arg: {
		startTime: number;
		chart?: Chart;
		testId: string;
		count: number;
		random?: boolean;
		checkduplicateid?: boolean;
		counttag?: boolean;
		max?: number;
		waitonesec?: boolean;
	},
	callback: (counter: number, docId: string) => void
) => {
	arg.random ??= false;
	arg.waitonesec ??= false;
	arg.max ??= arg.count;

	let mDB = docDB();
	let docId = getDocId(arg.random, arg.max, arg.count, mDB);

	if (arg.count > 0) {
		getContent(docId, (docData) => {
			//add to page
			let contentbody = document.getElementById("bs-main") as Element;
			contentbody = core.replaceChild(contentbody, setupContentContainerItem(docData));
			highlightMenu(docId);
			const pagetitle = docData.title;

			//get duplicate id
			if (arg.checkduplicateid) {
				const duplicateID = checkDuplicateID();
				const duplicateIDCount = duplicateID.length;
				if (duplicateIDCount > 0) {
					console.warn(
						`${pagetitle} have ${duplicateIDCount} duplicate key${
							duplicateIDCount > 1 ? "s" : ""
						}`,
						duplicateID
					);
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
			const dataCurrent = tagCount
				? `${pagetitle ? pagetitle : "..."} (${tagCount} tag)`
				: pagetitle;
			let dataSpeed: number | undefined;
			let dataTime: number | undefined;
			if (currentTime > lastEstimateTest + 1000) {
				lastEstimateTest = currentTime;
				dataSpeed = ~~(((arg.max! - arg.count) / (currentTime - arg.startTime)) * 1000);
				dataTime = ~~(
					(((currentTime - arg.startTime) / dataProgress) * (100 - dataProgress)) /
					1000
				);
			}

			//keep speed result
			addToSpeedDB(docId, pagetitle ? pagetitle : "...", dataChart);

			if (
				updateProgress({
					testId: arg.testId,
					chart: arg.chart,
					chartData: dataChart,
					count: dataCount,
					progress: dataProgress,
					current: dataCurrent,
					speed: dataSpeed,
					time: dataTime,
				})
			) {
				lastTestTime = currentTime;

				if (arg.waitonesec) {
					setTimeout(
						(arg) => {
							runMemoryTest(
								{
									startTime: arg.startTime,
									chart: arg.chart,
									testId: arg.testId,
									count: arg.count - 1,
									random: arg.random,
									checkduplicateid: arg.checkduplicateid,
									counttag: arg.counttag,
									max: arg.max,
									waitonesec: arg.waitonesec,
								},
								callback
							);
						},
						1000,
						arg
					);
				} else {
					core.requestIdleCallback(() => {
						runMemoryTest(
							{
								startTime: arg.startTime,
								chart: arg.chart,
								testId: arg.testId,
								count: arg.count - 1,
								random: arg.random,
								checkduplicateid: arg.checkduplicateid,
								counttag: arg.counttag,
								max: arg.max,
								waitonesec: arg.waitonesec,
							},
							callback
						);
					}, 300);
				}
			} else {
				callback(arg.max! - arg.count, docId);
			}
		});
	} else {
		callback(arg.max! - arg.count, docId);
	}
};

const runDownloadResource = (
	arg: {
		index: number;
		item: IMenuItem[];
		startTime: number;
		chart?: Chart;
		testId: string;
	},
	callback: () => void
) => {
	let count = arg.item.length - 1;
	if (arg.index <= count) {
		getContent(arg.item[arg.index]!.value, (_data) => {
			//calculate data
			const currentTime = performance.now();
			const dataChart = currentTime - lastTestTime;
			const dataCount = arg.index + 1;
			const dataProgress = (arg.index / count) * 100;
			const dataCurrent = arg.item[arg.index]!.label ? arg.item[arg.index]!.label : "...";

			let dataSpeed: number | undefined;
			let dataTime: number | undefined;
			if (currentTime > lastEstimateTest + 1000) {
				lastEstimateTest = currentTime;
				dataSpeed = ~~(((arg.index + 1) / (currentTime - arg.startTime)) * 1000);
				dataTime = ~~(
					(((currentTime - arg.startTime) / dataProgress) * (100 - dataProgress)) /
					1000
				);
			}

			if (
				updateProgress({
					testId: arg.testId,
					chart: arg.chart,
					chartData: dataChart,
					count: dataCount,
					progress: dataProgress,
					current: dataCurrent,
					speed: dataSpeed,
					time: dataTime,
				})
			) {
				lastTestTime = currentTime;
				core.requestIdleCallback(() => {
					runDownloadResource(
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
			} else {
				callback();
			}
		});
	} else {
		callback();
	}
};

const startMemoryTest = (arg: {
	testId: string;
	count: number;
	random: boolean;
	checkduplicateid: boolean;
	counttag: boolean;
	showchart: boolean;
	waitonesec: boolean;
}) => {
	const container = document.getElementById("memory-test-dialog");
	if (container) {
		core.replaceChild(
			container as Element,
			setupProgressUI({
				msg: "{{s::Memory test in progress}}",
				testId: arg.testId,
				counterLabel: "Counter",
				currentLabel: "Load page",
				speedLabel: "Estimate load speed",
				timeLabel: "Estimate time remaining",
				stopLabel: "Stop",
				total: arg.count,
				showchart: arg.showchart,
			})
		);

		const chart = arg.showchart
			? setupChart(document.getElementById(`${arg.testId}-chart`) as HTMLCanvasElement)
			: undefined;

		speedDB = [];
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
				waitonesec: arg.waitonesec,
			},
			(docCount: number) => {
				const endTime = performance.now();
				let detailReport: core.IElem;

				let loadSpeed = ~~((docCount / (endTime - startTime)) * 1000);
				let durationSecond = ~~((endTime - startTime) / 1000);

				chart?.destroy();

				detailReport = [
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
											(target) => {
												const lineColor =
													core.getCSSVarRgbColor("--bs-primary");
												const gridColor =
													core.getCSSVarRgbColor("--bs-tertiary-bg");

												new Chart(target, {
													type: "bar",
													data: {
														labels: speedDB.map((i) => i.title),
														datasets: [
															{
																data: speedDB.map((i) => {
																	if (i.data.length > 1) {
																		let sum = i.data.reduce(
																			(partialSum, a) =>
																				partialSum + a,
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
						new h.small([`Page count : `, new h.strong(docCount)]),
						new h.br(),
						new h.small([`Load speed : `, new h.strong(loadSpeed), " page/sec"]),
						new h.br(),
						new h.small([
							`Duration : `,
							new h.strong(secondToDurationText(durationSecond)),
						]),
						arg.counttag ? new h.br() : "",
						arg.counttag
							? new h.small([
									`Less element : `,
									new h.strong(LESSTAG.title),
									"(",
									new h.strong(LESSTAG.count),
									" tag)",
							  ])
							: "",
						arg.counttag ? new h.br() : "",
						arg.counttag
							? new h.small([
									`Most element : `,
									new h.strong(MOSTTAG.title),
									"(",
									new h.strong(MOSTTAG.count),
									" tag)",
							  ])
							: "",
					]),

					new h.div(
						{ display: "grid", gap: 3, gridTemplateColumns: "1fr 1fr", marginTop: 3 },
						[
							new b.button(
								{
									color: "secondary",
									outline: true,
									weight: "lg",
									on: {
										click: () => {
											startMemoryTest({
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
										},
									},
								},
								"Close"
							),
						]
					),
				];

				core.replaceChild(
					document.getElementById("memory-test-dialog") as Element,
					detailReport
				);
			}
		);
	}
};

const startDownloadResource = (testId: string, showchart: boolean, callback: () => void) => {
	const item = menuItem();

	core.replaceChild(
		document.getElementById("memory-test-dialog") as Element,
		setupProgressUI({
			msg: "{{s::Download resource in progress}}",
			testId: testId,
			counterLabel: "Counter",
			currentLabel: "Downloading page",
			speedLabel: "Estimate download speed",
			timeLabel: "Estimate time remaining",
			stopLabel: "Skip",
			total: item.length,
			showchart: showchart,
		})
	);

	const chart = showchart
		? setupChart(document.getElementById(`${testId}-chart`) as HTMLCanvasElement)
		: undefined;

	lastTestTime = performance.now();
	lastEstimateTest = lastTestTime;

	runDownloadResource(
		{
			index: 0,
			item: item,
			startTime: lastTestTime,
			chart: chart,
			testId: testId,
		},
		() => {
			chart?.destroy();
			callback();
		}
	);
};

const btnStartTest = (event: Event) => {
	const target = event.target as Element;
	const counter = parseInt(target.getAttribute("data-counter")!);
	const randomtest = (document.getElementById("memory-test-random") as HTMLInputElement).checked;
	const downloadfirst = (document.getElementById("memory-test-downloadfirst") as HTMLInputElement)
		.checked;
	const checkduplicateid = (
		document.getElementById("memory-test-duplicateid") as HTMLInputElement
	).checked;
	const counttag = (document.getElementById("memory-test-counttag") as HTMLInputElement).checked;
	const showchart = (document.getElementById("memory-test-showchart") as HTMLInputElement)
		.checked;
	const waitonesec = (document.getElementById("memory-test-wait") as HTMLInputElement).checked;

	if (downloadfirst) {
		startDownloadResource(core.UUID(), showchart, () => {
			startMemoryTest({
				testId: core.UUID(),
				count: counter,
				random: randomtest,
				checkduplicateid: checkduplicateid,
				counttag: counttag,
				showchart: showchart,
				waitonesec: waitonesec,
			});
		});
	} else {
		startMemoryTest({
			testId: core.UUID(),
			count: counter,
			random: randomtest,
			checkduplicateid: checkduplicateid,
			counttag: counttag,
			showchart: showchart,
			waitonesec: waitonesec,
		});
	}
};

export const showMemoryTestDialog = () => {
	const docCounter = menuItem().length;

	b.modal.show(
		new b.modal.container({ backdrop: "static", view: "center", scrollable: true }, [
			new b.modal.body({ id: "memory-test-dialog" }, [
				new h.p(
					"{{s::Memory test}}. Please choose a button below to open a specific number of pages for detecting memory leaks. You can use either the {{Memory Monitor Program}} on your device or the {{Developer Tools}} in your browser. Before starting the memory leak test, remember the current memory usage. After the test, compare the memory difference. The memory should return to its original state after the test."
				),

				new h.p([
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
						type: "checkbox",
						switch: true,
						label: "Random page",
						checked: false,
						id: "memory-test-random",
					}),
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Wait 1 second for each page",
						checked: false,
						id: "memory-test-wait",
					}),
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Show chart",
						checked: true,
						id: "memory-test-showchart",
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
						[
							~~(docCounter * 0.1),
							~~(docCounter * 0.3),
							~~(docCounter * 0.5),
							docCounter,
							docCounter * 3,
							docCounter * 5,
							docCounter * 10,
							docCounter * 30,
							docCounter * 50,
						].map((i) => {
							return new b.button(
								{
									outline: true,
									color: i === 100 ? "primary" : "secondary",
									data: {
										counter: i,
									},
									on: {
										click: btnStartTest,
									},
								},
								`${i}`
							);
						})
					),
				]),
				new h.div(
					{ display: "grid" },
					new b.button(
						{
							weight: "lg",
							on: {
								click: (event) => {
									const target = event.target as Element;
									b.modal.hide(target);
								},
							},
						},
						"Close"
					)
				),
			]),
		])
	);
};

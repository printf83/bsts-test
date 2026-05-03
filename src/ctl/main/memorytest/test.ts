import { Chart } from "chart.js";
import { core } from "@printf83/bsts";
import { setupContentContainerItemFS, setupContentContainerItem } from "../content.js";
import { getContent } from "../data.js";
import { highlightMenu } from "../menu.js";
import { docDB, getDocId } from "./db.js";
import { checkDuplicateID } from "./duplicate.js";
import { supportsPerformanceMemory, getPerformanceMemory } from "./memory.js";
import { progressUI as progressUI, updateProgress } from "./progress.js";
import { addToSpeedDB, getSpeedDB, resetSpeedDB } from "./speed.js";
import { setupChart } from "./chart.js";
import { report } from "./report.js";
import { countTag, getTagReport, resetTagReport } from "./counttag.js";

let lastTestTime = 0;
let lastEstimateTest = 0;
let highestDataSpeed: number | undefined;
let lastDataSpeed: number | undefined;
let lastMemoryLeak: number | undefined;

type runArg = {
	startTime: number;
	chart?: Chart;
	testId: string;
	count: number;
	random?: boolean;
	checkduplicateid?: boolean;
	counttag?: boolean;
	max?: number;
	memoryBaseline?: number;
	memoryLeak?: number;
	memorySupported?: boolean;
	waitonesec?: boolean;
	callback: (arg: runCallbackArg) => void;
};

type runCallbackArg = {
	counter: number;
	docId: string;
	memoryLeak: number;
	memorySupported: boolean;
	LESSTAG: { title: string; count: number };
	MOSTTAG: { title: string; count: number };
	speedDB: { title: string; data: number[] }[];
};

type startArg = {
	testId: string;
	count: number;
	random: boolean;
	checkduplicateid: boolean;
	counttag: boolean;
	showchart: boolean;
	waitonesec: boolean;
};

const resetRunReport = (defaultLastTestTime?: number) => {
	highestDataSpeed = undefined;
	lastDataSpeed = undefined;
	lastMemoryLeak = undefined;
	lastEstimateTest = 0;
	lastTestTime = defaultLastTestTime ?? 0;

	resetTagReport();

	return {
		highestDataSpeed,
		lastDataSpeed,
		lastMemoryLeak,
		lastEstimateTest,
		lastTestTime,
	};
};

export const runTest = (arg: runArg) => {
	arg.random ??= false;
	arg.waitonesec ??= false;
	arg.max ??= arg.count;

	const mDB = docDB();
	const docId = getDocId(arg.random, arg.max, arg.count, mDB);

	if (arg.count > 0) {
		const bsMainRoot = document.getElementById("bs-main-root") as Element;
		const bsMainFSRoot = document.getElementById("bs-main-fs-root") as Element;

		getContent(docId, (docData) => {
			//add to page
			let contentbody: Element | undefined;

			if (docData.fullscreen) {
				contentbody = document.getElementById("bs-main-fs") as Element;

				bsMainRoot.classList.add("d-none");
				bsMainFSRoot.classList.remove("d-none");

				contentbody = core.replaceChild(contentbody, setupContentContainerItemFS(docData));
			} else {
				contentbody = document.getElementById("bs-main") as Element;

				bsMainFSRoot.classList.add("d-none");
				bsMainRoot.classList.remove("d-none");

				contentbody = core.replaceChild(contentbody, setupContentContainerItem(docData));
			}

			highlightMenu(docId);
			const pagetitle = docData.title;

			//get duplicate id
			if (arg.checkduplicateid) {
				checkDuplicateID(pagetitle);
			}

			let tagCount: number | undefined;
			//count tag
			if (arg.counttag) {
				tagCount = countTag(pagetitle, contentbody);
			}

			//calculate data
			const currentTime = performance.now();
			const dataChart = currentTime - lastTestTime;
			const dataCount = arg.max! - arg.count + 1;
			const dataProgress = (dataCount / arg.max!) * 100;
			const dataCurrent = tagCount
				? `${pagetitle ? pagetitle : "..."} (${tagCount} tag)`
				: pagetitle;
			let dataSpeed: number | undefined;
			let dataTime: number | undefined;
			let memoryLeak: number | undefined;

			if (currentTime > lastEstimateTest + 1000 || lastDataSpeed === undefined) {
				lastEstimateTest = currentTime;

				// calculate speed based on current data count and time, and make sure it won't be negative
				dataSpeed = Math.round((dataCount / (currentTime - arg.startTime)) * 1000);
				lastDataSpeed = dataSpeed;

				// calculate time remaining based on current speed, and make sure it won't be negative
				dataTime = ~~(
					(((currentTime - arg.startTime) / dataProgress) * (100 - dataProgress)) /
					1000
				);

				// calculate memory leak if supported
				const performanceMemory = arg.memorySupported ? getPerformanceMemory() : undefined;
				const currentHeap = performanceMemory?.usedJSHeapSize;

				if (arg.memorySupported && currentHeap !== undefined) {
					if (arg.memoryBaseline === undefined) {
						arg.memoryBaseline = currentHeap;
						memoryLeak = undefined;
						lastMemoryLeak = memoryLeak;
					} else {
						memoryLeak =
							Math.round(
								((currentHeap - arg.memoryBaseline) / arg.memoryBaseline) * 100
							) / 100;
						if (memoryLeak < 0) {
							memoryLeak = 0;
						}
						lastMemoryLeak = memoryLeak;
					}
				} else {
					memoryLeak = undefined;
					lastMemoryLeak = memoryLeak;
				}
			} else {
				dataSpeed = lastDataSpeed;
				memoryLeak = lastMemoryLeak;
			}

			const elapsedTime = currentTime - arg.startTime;
			if (dataSpeed !== undefined && elapsedTime >= 2000) {
				highestDataSpeed =
					highestDataSpeed !== undefined
						? Math.max(highestDataSpeed, dataSpeed)
						: dataSpeed;
			}

			// keep speed result
			addToSpeedDB({ id: docId, title: pagetitle ? pagetitle : "...", data: dataChart });

			// update progress interface
			// detect if user stop the test by checking the return value of updateProgress.
			// if user stop, call callback to show report, if not, continue to next test
			const progressUpdated = updateProgress({
				testId: arg.testId,
				chart: arg.chart,
				chartData: dataChart,
				count: dataCount,
				progress: dataProgress,
				current: dataCurrent,
				speed: dataSpeed,
				memoryLeak: memoryLeak,
				time: dataTime,
			});

			if (progressUpdated) {
				lastTestTime = currentTime;

				if (arg.waitonesec) {
					setTimeout(
						(arg: runArg) => {
							runTest({
								...arg,
								count: arg.count - 1, //decrease count here to make sure the progress will move at least 1 step after wait
								memoryLeak,
							});
						},
						1000,
						arg
					);
				} else {
					core.requestIdleCallback(() => {
						runTest({
							...arg,
							count: arg.count - 1, //decrease count here to make sure the progress will move at least 1 step after wait
							memoryLeak,
						});
					}, 300);
				}
			} else {
				const { LESSTAG, MOSTTAG } = getTagReport();
				const speedDB = getSpeedDB();
				arg.callback({
					counter: arg.max! - arg.count,
					docId: docId,
					memoryLeak: arg.memoryLeak ?? 0,
					memorySupported: arg.memorySupported ?? false,
					LESSTAG,
					MOSTTAG,
					speedDB,
				});
			}
		});
	} else {
		const { LESSTAG, MOSTTAG } = getTagReport();
		const speedDB = getSpeedDB();
		arg.callback({
			counter: arg.max! - arg.count,
			docId: docId,
			memoryLeak: arg.memoryLeak ?? 0,
			memorySupported: arg.memorySupported ?? false,
			LESSTAG,
			MOSTTAG,
			speedDB,
		});
	}
};

export const initTest = ({
	testId,
	count,
	random,
	checkduplicateid,
	counttag,
	showchart,
	waitonesec,
}: startArg) => {
	const container = document.getElementById("memory-test-dialog");
	if (container) {
		const startTime = performance.now();
		const memorySupported = supportsPerformanceMemory();
		const memoryBaseline = memorySupported ? getPerformanceMemory()?.usedJSHeapSize : undefined;

		resetSpeedDB();
		resetTagReport();
		resetRunReport(startTime);

		core.replaceChild(
			container,
			progressUI({
				msg: "{{s::Memory test in progress}}",
				testId: testId,
				counterLabel: "Counter",
				currentLabel: "Load page",
				speedLabel: "Estimate load speed",
				memoryLeakLabel: "Memory leak",
				timeLabel: "Estimate time remaining",
				stopLabel: "Stop",
				total: count,
				showchart: showchart,
				showMemoryLeak: memorySupported,
			})
		);

		const chart = showchart
			? setupChart(document.getElementById(`${testId}-chart`) as HTMLCanvasElement)
			: undefined;

		runTest({
			count, //initialize with count, because it will be decreased at the beginning of the function
			startTime,
			chart,
			testId,
			random,
			checkduplicateid,
			counttag,
			waitonesec,
			memorySupported,
			memoryBaseline,
			callback: (result) => {
				const container = document.getElementById("memory-test-dialog");
				if (container) {
					const endTime = performance.now();
					const loadSpeed = Math.round((result.counter / (endTime - startTime)) * 1000);
					const durationSecond = ~~((endTime - startTime) / 1000);

					chart?.destroy();

					core.replaceChild(
						container,
						report({
							loadSpeed: loadSpeed,
							durationSecond: durationSecond,
							testId: testId,
							counttag: counttag,
							showchart: showchart,
							waitonesec: waitonesec,
							random: random,
							checkduplicateid: checkduplicateid,
							count: count,
							docCount: result.counter,
							memoryLeak: result.memoryLeak,
							memorySupported: result.memorySupported,
							LESSTAG: result.LESSTAG,
							MOSTTAG: result.MOSTTAG,
							speedDB: result.speedDB,
						})
					);
				} else {
					chart?.destroy();
				}
			},
		});
	}
};

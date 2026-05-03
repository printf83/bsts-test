import { Chart } from "chart.js";
import { core } from "@printf83/bsts";
import { getContent } from "../data.js";
import { IMenuItem } from "../menu.js";
import { progressUI, updateProgress } from "./progress.js";
import { menuItem } from "../_db.js";
import { setupChart } from "./chart.js";
import { resetSpeedDB } from "./speed.js";
import { resetTagReport } from "./counttag.js";

let lastTestTime = 0;
let lastEstimateTest = 0;
let lastDataSpeed: number | undefined;

type runDownloadArg = {
	index: number;
	item: IMenuItem[];
	startTime: number;
	chart?: Chart;
	testId: string;
	callback: () => void;
};

const resetDownloadReport = (defaultLastTestTime?: number) => {
	lastEstimateTest = 0;
	lastTestTime = defaultLastTestTime ?? 0;
	lastDataSpeed = undefined;

	resetTagReport();

	return {
		lastEstimateTest,
		lastTestTime,
		lastDataSpeed,
	};
};

const runDownload = (arg: runDownloadArg) => {
	const count = arg.item.length - 1;

	if (arg.index <= count) {
		getContent(arg.item[arg.index]!.value, () => {
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
				dataSpeed = Math.round(((arg.index + 1) / (currentTime - arg.startTime)) * 1000);
				lastDataSpeed = dataSpeed;
				dataTime = ~~(
					(((currentTime - arg.startTime) / dataProgress) * (100 - dataProgress)) /
					1000
				);
			} else {
				dataSpeed = lastDataSpeed;
			}

			const progressUpdated = updateProgress({
				testId: arg.testId,
				chart: arg.chart,
				chartData: dataChart,
				count: dataCount,
				progress: dataProgress,
				current: dataCurrent,
				speed: dataSpeed,
				time: dataTime,
			});

			if (progressUpdated) {
				lastTestTime = currentTime;
				core.requestIdleCallback(() => {
					runDownload({
						...arg,
						index: arg.index + 1,
					});
				}, 300);
			} else {
				arg.callback();
			}
		});
	} else {
		arg.callback();
	}
};

type DownloadArg = {
	testId: string;
	showchart: boolean;
	callback: () => void;
};

export const initDownload = ({ testId, showchart, callback }: DownloadArg) => {
	const container = document.getElementById("memory-test-dialog");
	if (container) {
		const startTime = performance.now();
		const item = menuItem();

		resetSpeedDB();
		resetTagReport();
		resetDownloadReport(startTime);

		core.replaceChild(
			container,
			progressUI({
				msg: "{{s::Download resource in progress}}",
				testId,
				counterLabel: "Counter",
				currentLabel: "Downloading page",
				speedLabel: "Estimate download speed",
				memoryLeakLabel: "Memory leak",
				timeLabel: "Estimate time remaining",
				stopLabel: "Skip",
				total: item.length,
				showchart: showchart,
				showMemoryLeak: false,
			})
		);

		const chart = showchart
			? setupChart(document.getElementById(`${testId}-chart`) as HTMLCanvasElement)
			: undefined;

		runDownload({
			index: 0, //initialize with 0, because it will be increased at the beginning of the function
			startTime,
			chart,
			testId,
			item,
			callback: () => {
				chart?.destroy();
				callback();
			},
		});
	} else {
		callback();
	}
};

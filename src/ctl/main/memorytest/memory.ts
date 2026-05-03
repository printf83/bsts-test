import { convertMemoryUsageToText } from "./common.js";

export type PerformanceMemoryInfo = {
	usedJSHeapSize: number;

	totalJSHeapSize: number;

	jsHeapSizeLimit: number;
};

const isPerformanceMemory = (value: unknown): value is PerformanceMemoryInfo => {
	return (
		typeof value === "object" &&
		value !== null &&
		typeof (value as PerformanceMemoryInfo).usedJSHeapSize === "number" &&
		typeof (value as PerformanceMemoryInfo).totalJSHeapSize === "number" &&
		typeof (value as PerformanceMemoryInfo).jsHeapSizeLimit === "number"
	);
};

export const supportsPerformanceMemory = (): boolean => {
	const perf = performance as Performance & { memory?: unknown };

	return isPerformanceMemory(perf.memory);
};

export const getPerformanceMemory = (): PerformanceMemoryInfo | undefined => {
	const perf = performance as Performance & { memory?: unknown };

	return isPerformanceMemory(perf.memory) ? perf.memory : undefined;
};

export type MemoryCheckController = {
	canceled: boolean;

	timeoutId?: number;
};

export const createMemoryCheckController = (): MemoryCheckController => ({
	canceled: false,
});

export type CancelToken = {
	canceled: boolean;
};

export const createCancelToken = (): CancelToken => ({
	canceled: false,
});

export const isCancelTokenCanceled = (token?: CancelToken) => token?.canceled === true;

export const cancelMemoryCheck = (controller: MemoryCheckController) => {
	controller.canceled = true;

	if (controller.timeoutId !== undefined) {
		clearTimeout(controller.timeoutId);

		controller.timeoutId = undefined;
	}
};

export const isCanceled = (controller: MemoryCheckController) => controller.canceled;

const runMemoryCheckLoop = (
	labelId: string,

	controller: MemoryCheckController,

	tick: (label: Element) => void,

	delay: number,

	retry = 0
) => {
	if (isCanceled(controller)) {
		return;
	}

	const label = document.getElementById(labelId);

	if (label) {
		tick(label);

		controller.timeoutId = window.setTimeout(() => {
			runMemoryCheckLoop(labelId, controller, tick, delay);
		}, delay);
	} else if (retry < 1) {
		controller.timeoutId = window.setTimeout(() => {
			runMemoryCheckLoop(labelId, controller, tick, delay, retry + 1);
		}, 100);
	}
};

const runMemoryCheck = (testId: string, controller: MemoryCheckController) => {
	runMemoryCheckLoop(
		`${testId}-memory-usage-label`,

		controller,

		(label) => {
			// we run memory test only if the element still exists, otherwise it means the test has been stopped

			const performanceMemory = getPerformanceMemory();

			if (performanceMemory) {
				const currentHeap = performanceMemory.usedJSHeapSize;

				if (currentHeap >= 0) {
					label.textContent = convertMemoryUsageToText(currentHeap);
				} else {
					label.textContent = "Checking";
				}
			} else {
				label.textContent = "Checking";
			}
		},

		1000
	);
};

const runMemoryCheckResult = (
	testId: string,

	beforeTest: number,

	controller: MemoryCheckController
) => {
	runMemoryCheckLoop(
		`${testId}-memory-result-label`,

		controller,

		(label) => {
			// we run memory test only if the element still exists, otherwise it means the test has been stopped

			const performanceMemory = getPerformanceMemory();

			if (performanceMemory) {
				const currentHeap = performanceMemory.usedJSHeapSize;

				if (currentHeap >= 0) {
					const memoryLeak = currentHeap - beforeTest;
					const percent = beforeTest > 0 ? (memoryLeak / beforeTest) * 100 : 0;
					const leakText = convertMemoryUsageToText(memoryLeak);

					const HIGH_LEAK = 100 * 1024 * 1024; // 100 MB
					const LOW_LEAK = 10 * 1024 * 1024; // 10 MB
					const VERY_LOW_LEAK = 1 * 1024 * 1024; // 1 MB
					const HIGH_PERCENT = 10; // 10%
					const LOW_PERCENT = 2; // 2%
					const VERY_LOW_PERCENT = 0.5; // 0.5%

					if (memoryLeak > HIGH_LEAK || percent >= HIGH_PERCENT) {
						label.textContent = `High (${percent.toFixed(0)}%, ${leakText})`;
					} else if (memoryLeak > LOW_LEAK || percent >= LOW_PERCENT) {
						label.textContent = `Low (${percent.toFixed(0)}%, ${leakText})`;
					} else if (memoryLeak > VERY_LOW_LEAK || percent >= VERY_LOW_PERCENT) {
						label.textContent = `Very low (${percent.toFixed(0)}%, ${leakText})`;
					} else {
						label.textContent = "No memory leak detected";
					}
				} else {
					label.textContent = "No memory leak detected";
				}
			} else {
				label.textContent = "Checking";
			}
		},

		1000
	);
};

export const initMemoryCheck = (testId: string, controller: MemoryCheckController) => {
	if (supportsPerformanceMemory()) {
		runMemoryCheck(testId, controller);
	}
};

export const initMemoryCheckReport = (
	testId: string,

	beforeTest: number,

	controller: MemoryCheckController
) => {
	if (supportsPerformanceMemory()) {
		runMemoryCheckResult(testId, beforeTest, controller);
	}
};

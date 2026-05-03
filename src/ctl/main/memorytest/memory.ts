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

const runMemoryCheck = (testId: string) => {
	const label = document.getElementById(`${testId}-memory-usage-label`);
	if (label) {
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

		setTimeout(
			(testId: string) => {
				runMemoryCheck(testId);
			},
			1000,
			testId
		);
	}
};

const runMemoryCheckResult = (testId: string, beforeTest: number) => {
	const label = document.getElementById(`${testId}-memory-result-label`);
	if (label) {
		// we run memory test only if the element still exists, otherwise it means the test has been stopped
		const performanceMemory = getPerformanceMemory();
		if (performanceMemory) {
			const currentHeap = performanceMemory.usedJSHeapSize;
			if (currentHeap >= 0) {
				const memoryLeak = currentHeap - beforeTest;
				const percent = (memoryLeak / beforeTest) * 100;

				// We consider memory leak > 100MB as high, > 1MB as low, and < 1MB as very low.
				// This is just a rough estimation and can be adjusted based on the actual test results and requirements.

				if (memoryLeak > 100 * 1024 * 1024) {
					label.textContent = `High (${percent.toFixed(0)}%)`;
				} else if (memoryLeak > 1024 * 1024) {
					label.textContent = `Low (${percent.toFixed(0)}%)`;
				} else if (memoryLeak > 1024) {
					label.textContent = `Very low (${percent.toFixed(0)}%)`;
				} else {
					label.textContent = "No memory leak detected";
				}
			} else {
				label.textContent = "No memory leak detected";
			}
		} else {
			label.textContent = "Checking";
		}

		setTimeout(
			(testId: string, beforeTest: number) => {
				runMemoryCheckResult(testId, beforeTest);
			},
			1000,
			testId,
			beforeTest
		);
	}
};

export const initMemoryCheck = (testId: string) => {
	if (supportsPerformanceMemory()) {
		// wait for 500 ms to make sure the label has been added to the DOM, then run the memory check
		setTimeout(
			(testId: string) => {
				runMemoryCheck(testId);
			},
			1000,
			testId
		);
	}
};

export const initMemoryCheckReport = (testId: string, beforeTest: number) => {
	if (supportsPerformanceMemory()) {
		// wait for 500 ms to make sure the label has been added to the DOM, then run the memory check result
		setTimeout(
			(testId: string, beforeTest: number) => {
				runMemoryCheckResult(testId, beforeTest);
			},
			1000,
			testId,
			beforeTest
		);
	}
};

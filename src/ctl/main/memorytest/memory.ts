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

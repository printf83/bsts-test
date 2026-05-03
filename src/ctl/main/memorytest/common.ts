export const secondToDurationText = (second: number) => {
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

export const convertMemoryUsageToText = (memoryUsage: number) => {
	if (memoryUsage > 1024 * 1024 * 1024) {
		return `${(memoryUsage / (1024 * 1024 * 1024)).toFixed(2)} GB`;
	} else if (memoryUsage > 1024 * 1024) {
		return `${(memoryUsage / (1024 * 1024)).toFixed(2)} MB`;
	} else if (memoryUsage > 1024) {
		return `${(memoryUsage / 1024).toFixed(2)} KB`;
	} else {
		return `${memoryUsage} bytes`;
	}
};

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

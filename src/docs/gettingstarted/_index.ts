export const introduction = async () => {
	return (await import("./introduction.js")).introduction;
};

export const bootswatch = async () => {
	return (await import("./bootswatch.js")).bootswatch;
};

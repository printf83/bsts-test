export const headers = async () => {
	return (await import("./headers.js")).headers;
};
export const heroes = async () => {
	return (await import("./heroes.js")).heroes;
};
export const features = async () => {
	return (await import("./features.js")).features;
};
export const sidebars = async () => {
	return (await import("./sidebars.js")).sidebars;
};
export const footers = async () => {
	return (await import("./footers.js")).footers;
};

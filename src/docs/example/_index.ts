export const headers = async () => {
	return (await import("./headers.js")).headers;
};
export const heroes = async () => {
	return (await import("./heroes.js")).heroes;
};

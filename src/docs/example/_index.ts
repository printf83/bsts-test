export const headers = async () => {
	return (await import("./headers.js")).headers;
};

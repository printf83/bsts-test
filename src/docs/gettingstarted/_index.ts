export const introduction = async () => {
	return (await import("./introduction")).introduction;
};

export const bootswatch = async () => {
	return (await import("./bootswatch")).bootswatch;
};

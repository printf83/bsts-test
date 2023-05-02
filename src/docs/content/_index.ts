// import { reboot } from "./reboot.js";
// import { typography } from "./typography.js";
// import { images } from "./images.js";
// import { tables } from "./tables.js";
// import { figures } from "./figures.js";

// export { reboot, typography, images, tables, figures };

export const reboot = async () => {
	return (await import("./reboot.js")).reboot;
};
export const typography = async () => {
	return (await import("./typography.js")).typography;
};
export const images = async () => {
	return (await import("./images.js")).images;
};
export const tables = async () => {
	return (await import("./tables.js")).tables;
};
export const figures = async () => {
	return (await import("./figures.js")).figures;
};

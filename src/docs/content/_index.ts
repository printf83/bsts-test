export const reboot = async () => {
	return (await import("./reboot")).reboot;
};
export const typography = async () => {
	return (await import("./typography")).typography;
};
export const images = async () => {
	return (await import("./images")).images;
};
export const tables = async () => {
	return (await import("./tables")).tables;
};
export const figures = async () => {
	return (await import("./figures")).figures;
};

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
export const dropdowns = async () => {
	return (await import("./dropdowns.js")).dropdowns;
};
export const list_groups = async () => {
	return (await import("./list_groups.js")).list_groups;
};
export const modals = async () => {
	return (await import("./modals.js")).modals;
};
export const badges = async () => {
	return (await import("./badges.js")).badges;
};
export const breadcrumbs = async () => {
	return (await import("./breadcrumbs.js")).breadcrumbs;
};
export const test = async () => {
	return (await import("./test.js")).test;
};

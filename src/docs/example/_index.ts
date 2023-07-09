export const headers = async () => {
	return (await import("./headers")).headers;
};
export const heroes = async () => {
	return (await import("./heroes")).heroes;
};
export const features = async () => {
	return (await import("./features")).features;
};
export const sidebars = async () => {
	return (await import("./sidebars")).sidebars;
};
export const footers = async () => {
	return (await import("./footers")).footers;
};
export const dropdowns = async () => {
	return (await import("./dropdowns")).dropdowns;
};
export const list_groups = async () => {
	return (await import("./list_groups")).list_groups;
};
export const modals = async () => {
	return (await import("./modals")).modals;
};
export const badges = async () => {
	return (await import("./badges")).badges;
};
export const breadcrumbs = async () => {
	return (await import("./breadcrumbs")).breadcrumbs;
};
export const test = async () => {
	return (await import("./test")).test;
};

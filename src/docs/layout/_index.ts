// import { breakpoints } from "./breakpoints.js";
// import { containers } from "./containers.js";
// import { grid } from "./grid.js";
// import { columns } from "./columns.js";
// import { gutters } from "./gutters.js";
// import { utilities } from "./utilities.js";
// import { zindex } from "./zindex.js";
// import { cssgrid } from "./cssgrid.js";

// export { breakpoints, containers, grid, columns, gutters, utilities, zindex, cssgrid };

export const breakpoints = async () => {
	return (await import("./breakpoints.js")).breakpoints;
};
export const containers = async () => {
	return (await import("./containers.js")).containers;
};
export const grid = async () => {
	return (await import("./grid.js")).grid;
};
export const columns = async () => {
	return (await import("./columns.js")).columns;
};
export const gutters = async () => {
	return (await import("./gutters.js")).gutters;
};
export const utilities = async () => {
	return (await import("./utilities.js")).utilities;
};
export const zindex = async () => {
	return (await import("./zindex.js")).zindex;
};
export const cssgrid = async () => {
	return (await import("./cssgrid.js")).cssgrid;
};

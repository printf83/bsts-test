// import { clearfix } from "./clearfix.js";
// import { color_background } from "./color_background.js";
// import { colored_links } from "./colored_links.js";
// import { focus_ring } from "./focus_ring.js";
// import { icon_link } from "./icon_link.js";
// import { position } from "./position.js";
// import { ratio } from "./ratio.js";
// import { stacks } from "./stacks.js";
// import { stretched_link } from "./stretched_link.js";
// import { text_truncation } from "./text_truncation.js";
// import { vertical_rule } from "./vertical_rule.js";
// import { visually_hidden } from "./visually_hidden.js";

// export {
// 	clearfix,
// 	color_background,
// 	colored_links,
// 	focus_ring,
// 	icon_link,
// 	position,
// 	ratio,
// 	stacks,
// 	stretched_link,
// 	text_truncation,
// 	vertical_rule,
// 	visually_hidden,
// };

export const clearfix = async () => {
	return (await import("./clearfix.js")).clearfix;
};
export const color_background = async () => {
	return (await import("./color_background.js")).color_background;
};
export const colored_links = async () => {
	return (await import("./colored_links.js")).colored_links;
};
export const focus_ring = async () => {
	return (await import("./focus_ring.js")).focus_ring;
};
export const icon_link = async () => {
	return (await import("./icon_link.js")).icon_link;
};
export const position = async () => {
	return (await import("./position.js")).position;
};
export const ratio = async () => {
	return (await import("./ratio.js")).ratio;
};
export const stacks = async () => {
	return (await import("./stacks.js")).stacks;
};
export const stretched_link = async () => {
	return (await import("./stretched_link.js")).stretched_link;
};
export const text_truncation = async () => {
	return (await import("./text_truncation.js")).text_truncation;
};
export const vertical_rule = async () => {
	return (await import("./vertical_rule.js")).vertical_rule;
};
export const visually_hidden = async () => {
	return (await import("./visually_hidden.js")).visually_hidden;
};

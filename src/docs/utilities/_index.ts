export const api = async () => {
	return (await import("./api.js")).api;
};
export const background = async () => {
	return (await import("./background.js")).background;
};
export const colors = async () => {
	return (await import("./colors.js")).colors;
};
export const borders = async () => {
	return (await import("./borders.js")).borders;
};
export const display = async () => {
	return (await import("./display.js")).display;
};
export const flex = async () => {
	return (await import("./flex.js")).flex;
};
export const float = async () => {
	return (await import("./float.js")).float;
};
export const interactions = async () => {
	return (await import("./interactions.js")).interactions;
};
export const link = async () => {
	return (await import("./link.js")).link;
};
export const object_fit = async () => {
	return (await import("./object_fit.js")).object_fit;
};
export const opacity = async () => {
	return (await import("./opacity.js")).opacity;
};
export const overflow = async () => {
	return (await import("./overflow.js")).overflow;
};
export const position = async () => {
	return (await import("./position.js")).position;
};
export const shadow = async () => {
	return (await import("./shadow.js")).shadow;
};
export const sizing = async () => {
	return (await import("./sizing.js")).sizing;
};
export const spacing = async () => {
	return (await import("./spacing.js")).spacing;
};
export const text = async () => {
	return (await import("./text.js")).text;
};
export const vertical_align = async () => {
	return (await import("./vertical_align.js")).vertical_align;
};
export const visibility = async () => {
	return (await import("./visibility.js")).visibility;
};
export const zindex = async () => {
	return (await import("./zindex.js")).zindex;
};

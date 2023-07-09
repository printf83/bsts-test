export const api = async () => {
	return (await import("./api")).api;
};
export const background = async () => {
	return (await import("./background")).background;
};
export const colors = async () => {
	return (await import("./colors")).colors;
};
export const borders = async () => {
	return (await import("./borders")).borders;
};
export const display = async () => {
	return (await import("./display")).display;
};
export const flex = async () => {
	return (await import("./flex")).flex;
};
export const float = async () => {
	return (await import("./float")).float;
};
export const interactions = async () => {
	return (await import("./interactions")).interactions;
};
export const link = async () => {
	return (await import("./link")).link;
};
export const object_fit = async () => {
	return (await import("./object_fit")).object_fit;
};
export const opacity = async () => {
	return (await import("./opacity")).opacity;
};
export const overflow = async () => {
	return (await import("./overflow")).overflow;
};
export const position = async () => {
	return (await import("./position")).position;
};
export const shadow = async () => {
	return (await import("./shadow")).shadow;
};
export const sizing = async () => {
	return (await import("./sizing")).sizing;
};
export const spacing = async () => {
	return (await import("./spacing")).spacing;
};
export const text = async () => {
	return (await import("./text")).text;
};
export const vertical_align = async () => {
	return (await import("./vertical_align")).vertical_align;
};
export const visibility = async () => {
	return (await import("./visibility")).visibility;
};
export const zindex = async () => {
	return (await import("./zindex")).zindex;
};

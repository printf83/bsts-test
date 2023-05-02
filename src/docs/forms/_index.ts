// import { check_radio } from "./check_radio.js";
// import { control } from "./control.js";
// import { floating_label } from "./floating_label.js";
// import { input_group } from "./input_group.js";
// import { layout } from "./layout.js";
// import { overview } from "./overview.js";
// import { range } from "./range.js";
// import { select } from "./select.js";
// import { validation } from "./validation.js";

// export { check_radio, control, floating_label, input_group, layout, overview, range, select, validation };

export const check_radio = async () => {
	return (await import("./check_radio.js")).check_radio;
};
export const control = async () => {
	return (await import("./control.js")).control;
};
export const floating_label = async () => {
	return (await import("./floating_label.js")).floating_label;
};
export const input_group = async () => {
	return (await import("./input_group.js")).input_group;
};
export const layout = async () => {
	return (await import("./layout.js")).layout;
};
export const overview = async () => {
	return (await import("./overview.js")).overview;
};
export const range = async () => {
	return (await import("./range.js")).range;
};
export const select = async () => {
	return (await import("./select.js")).select;
};
export const validation = async () => {
	return (await import("./validation.js")).validation;
};

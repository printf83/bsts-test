// import { color } from "./color.js";

// export { color };

export const color = async () => {
	return (await import("./color.js")).color;
};

// import { introduction } from "./introduction.js";

// export { introduction };

export const introduction = async () => {
	return (await import("./introduction.js")).introduction;
};

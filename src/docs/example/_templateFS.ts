import { h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const carousel: IContent = {
	fullscreen: true,
	title: "Carousel",
	item: () => {
		return new h.div("content");
	},
};

import { h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const sticky_footer: IContent = {
	fullscreen: true,
	title: "Sticky Footer",
	item: () => {
		return new h.div("content");
	},
};

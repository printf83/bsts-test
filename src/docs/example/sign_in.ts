import { h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const sign_in: IContent = {
	fullscreen: true,
	title: "Sign in",
	item: () => {
		return new h.div("content");
	},
};

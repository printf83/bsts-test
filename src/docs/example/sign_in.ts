import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const sign_in: IContent = {
	fullscreen: true,
	title: "Sign in",
	item: () => {
		return new h.div(
			{ display: "flex", alignItem: "center", bgColor: "body-tertiary", viewHeight: 100 },
			new h.div(
				{ width: 100, margin: "auto", padding: 3, style: { maxWidth: "330px" } },
				new h.form({}, [
					new b.icon({
						id: "hexagon-fill",
						marginBottom: 3,
						textColor: "primary-emphasis",
						style: {
							fontSize: "6rem",
						},
					}),
					new h.h(1, {}),
				])
			)
		);
	},
};

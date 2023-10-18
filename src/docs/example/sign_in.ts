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
						textColor: "primary",
						style: {
							fontSize: "6rem",
						},
					}),
					new h.h1({ h: 3, marginBottom: 3, fontWeight: "normal" }, "Please sign in"),
					b.form.floatinglabel.input({
						type: "email",
						label: "Email address",
						roundedNone: "bottom",
						borderNone: "bottom",
					}),
					b.form.floatinglabel.input({
						type: "password",
						label: "Password",
						roundedNone: "top",
					}),
					new h.div({ marginY: 3 }, b.form.check({ label: "Remember me" })),
					new b.button({ width: 100, paddingY: 2, type: "submit" }, "Sign in"),
					new h.p({ marginTop: 5, marginBottom: 3, textColor: "body" }, "© 2017–2023"),
				])
			)
		);
	},
};

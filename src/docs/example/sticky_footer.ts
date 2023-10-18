import { h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const sticky_footer: IContent = {
	fullscreen: true,
	title: "Sticky Footer",
	item: () => {
		const main = new h.main(
			{ flex: "shrink-0" },
			new h.div({ container: true }, [
				new h.h1({ marginTop: 5 }, "Sticky footer"),
				new h.p(
					{ lead: true },
					"Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS."
				),
				new h.p(
					"Use {{nav:docs/example/sticky_footer_navbar::the sticky footer with a fixed navbar}} if need be, too."
				),
			])
		);

		const footer = new h.footer(
			{ sticky: "bottom", marginTop: "auto", paddingY: 3, bgColor: "body-tertiary" },
			new h.div(
				{ container: true },
				new h.span({ textColor: "body-secondary" }, "Place sticky footer content here.")
			)
		);

		return new h.div({ display: "flex", flex: "column", viewHeight: 100 }, [main, footer]);
	},
};

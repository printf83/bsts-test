import { I, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const ex = {
	c1: (arg: { copyright: string; logo: string; link?: I.B.Nav.Header.Link[] }) => {
		return new h.footer({
			display: "flex",
			flex: "wrap",
			justifyContent: "between",
			alignItem: "center",
			paddingY: 3,
			marginY: 4,
			border: "top",
		});
	},
	c2: () => {},
	c3: () => {},
};
export const footers: IAttrContent = {
	title: "Footers",
	description: "Finish every page strong with an awesome footer, big or small.",
	item: [
		new e.title("Example footer 1"),
		new e.code({
			previewAttr: { padding: 0 },
			extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
			output: () => {
				return ex.c1({
					copyright: "© 2023 Company, Inc",
					logo: "fab bootstrap",
					link: [
						{ href: "#", elem: "Home" },
						{ href: "#", elem: "Features" },
						{ href: "#", elem: "Pricing" },
						{ href: "#", elem: "FAQs" },
						{ href: "#", elem: "About" },
					],
				});
			},
		}),

		//-----------------------

		new e.title(""),
		new e.text(""),
		new e.code({
			output: () => {
				return [];
			},
		}),

		//-----------------------

		new e.subtitle(""),
		new e.text(""),
		new e.codepreview({
			type: "css",
			code: `
				`,
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(""),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(""),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
			`,
		}),
	],
};

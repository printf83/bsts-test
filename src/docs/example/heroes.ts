import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const heroes: IAttrContent = {
	title: "Heroes",
	description: "Set the stage on your homepage with heroes that feature clear calls to action.",
	item: [
		new e.title("Example heroes 1"),
		new e.code({
			previewAttr: { padding: 0 },
			output: () => {
				const component = (arg: { icon: string; title: string; description: string; elem?: core.IElem }) => {
					return new h.div({ paddingX: 4, paddingY: 5, marginY: 5, textAlign: "center" }, [
						new h.h(1, new b.icon({ id: arg.icon, weight: "2xl", fontDisplay: 1 })),
						new h.h(1, { fontDisplay: 5, fontWeight: "bold", textColor: "body-emphasis" }, arg.title),
						new h.div({ col: "lg-6", marginX: "auto" }, [
							new h.p({ lead: true, marginBottom: 4 }, arg.description),
							new h.div(
								{ display: ["grid", "sm-flex"], gap: 2, justifyContent: "sm-center" },
								arg.elem ? arg.elem : ""
							),
						]),
					]);
				};

				return component({
					icon: "fab bootstrap",
					title: "Centered hero",
					description:
						"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
					elem: [
						new b.button({ weight: "lg", color: "primary" }, "Primary button"),
						new b.button({ weight: "lg", color: "secondary", outline: true }, "Secondary"),
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

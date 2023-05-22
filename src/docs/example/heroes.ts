import { B, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const heroes: IAttrContent = {
	title: "Heroes",
	description: "Set the stage on your homepage with heroes that feature clear calls to action.",
	item: [
		new e.title("Example heroes 1"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
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

		new e.title("Example heroes 2"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
			output: () => {
				const component = (arg: { title: string; description: string; elem?: core.IElem; img: string }) => {
					return new h.div(
						{
							paddingX: 4,
							paddingTop: 5,
							marginY: 5,
							textAlign: "center",
							border: "bottom",
						},
						[
							new h.h(1, { fontDisplay: 4, fontWeight: "bold", textColor: "body-emphasis" }, arg.title),
							new h.div({ col: "lg-6", marginX: "auto" }, [
								new h.p({ lead: true, marginBottom: 4 }, arg.description),
								new h.div(
									{
										display: ["grid", "sm-flex"],
										gap: 2,
										justifyContent: "sm-center",
										marginBottom: 5,
									},
									arg.elem ? arg.elem : ""
								),
							]),
							new h.div(
								{ overflow: "hidden", style: { maxHeight: "30vh" } },
								new h.div(
									{ container: true, paddingX: 5 },
									new b.img({
										src: arg.img,
										fluid: true,
										border: true,
										rounded: 3,
										shadow: "lg",
										marginBottom: 4,
										alt: "Example image",
										attrWidth: 700,
										attrHeight: 500,
									})
								)
							),
						]
					);
				};
				return component({
					title: "Centered screenshot",
					description:
						"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
					elem: [
						new b.button({ weight: "lg", color: "primary" }, "Primary button"),
						new b.button({ weight: "lg", color: "secondary", outline: true }, "Secondary"),
					],
					img: "https://picsum.photos/seed/bsts_0/622/393",
				});
			},
		}),

		//-----------------------

		new e.title("Example heroes 3"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
			output: () => {
				const component = (arg: { title: string; description: string; elem?: core.IElem; img: string }) => {
					return new h.div(
						{
							col: "xxl-8",
							container: true,
							paddingX: 4,
							paddingY: 5,
						},
						new h.div({ row: true, flex: "lg-row-reverse", alignItem: "center", gutter: 5, paddingY: 5 }, [
							new h.div(
								{ col: [10, "sm-8", "lg-6"] },
								new b.img({
									src: arg.img,
									fluid: true,
									marginX: "lg-auto",
									display: "block",
									alt: "Example image",
									attrWidth: 700,
									attrHeight: 500,
									rounded: 3,
									shadow: true,
								})
							),
							new h.div({ col: "lg-6" }, [
								new h.h(
									1,
									{
										fontDisplay: 5,
										fontWeight: "bold",
										textColor: "body-emphasis",
										lineHeight: 1,
										marginBottom: 3,
									},
									arg.title
								),
								new h.p({ lead: true }, arg.description),
								new h.div(
									{
										display: ["grid", "md-flex"],
										gap: 2,
										justifyContent: "md-start",
									},
									arg.elem ? arg.elem : ""
								),
							]),
						])
					);
				};
				return component({
					title: "Responsive left-aligned hero with image",
					description:
						"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
					elem: [
						new b.button({ weight: "lg", color: "primary" }, "Primary"),
						new b.button({ weight: "lg", color: "secondary", outline: true }, "Default"),
					],
					img: "https://picsum.photos/seed/bsts_0/432/308",
				});
			},
		}),

		//-----------------------

		new e.title("Example heroes 4"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
			output: () => {
				const component = (arg: { title: string; description: string; onsignup: EventListener }) => {
					return new h.div(
						{
							col: ["xl-10", "xxl-8"],
							container: true,
							paddingX: 4,
							paddingY: 5,
						},
						new h.div({ row: true, alignItem: "center", gutter: 5, paddingY: 5 }, [
							new h.div({ col: "lg-7", textAlign: ["center", "lg-start"] }, [
								new h.h(
									1,
									{
										fontDisplay: 4,
										fontWeight: "bold",
										textColor: "body-emphasis",
										lineHeight: 1,
										marginBottom: 3,
									},
									arg.title
								),
								new h.p({ col: "lg-10", fontSize: 4 }, arg.description),
							]),
							new h.div(
								{
									col: ["md-10", "lg-5"],
									marginX: "auto",
								},
								new h.form(
									{
										padding: [4, "md-5"],
										border: true,
										rounded: 3,
										bgColor: "body-tertiary",
										gap: 3,
										display: "grid",
										on: { submit: arg.onsignup },
									},
									[
										B.Form.FloatingLabel.Input({ type: "email", label: "Email address" }),
										B.Form.FloatingLabel.Input({ type: "password", label: "Password" }),
										B.Form.Check({ type: "checkbox", label: "Remember me" }),
										new b.button({ color: "primary", weight: "lg", width: 100 }, "Sign up"),
										new h.hr(),
										new h.small(
											{ textColor: "body-secondary" },
											"By clicking Sign up, you agree to the terms of use."
										),
									]
								)
							),
						])
					);
				};
				return component({
					title: "Vertically centered hero sign-up form",
					description:
						"Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
					onsignup: (event) => {
						//do signup
					},
				});
			},
		}),

		//-----------------------

		new e.title("Example heroes 5"),
		new e.code({
			zoom: 75,
			output: () => {
				const component = (arg: { img: string; title: string; description: string; elem: core.IElem }) => {
					return new h.div(
						{
							container: true,
							marginY: 5,
						},
						new h.div(
							{
								row: true,
								padding: 4,
								paddingBottom: 0,
								paddingEnd: "lg-0",
								paddingTop: "lg-5",
								alignItem: "center",
								rounded: 3,
								border: true,
								shadow: "lg",
							},
							[
								new h.div({ col: "lg-7", padding: [3, "lg-5"], paddingTop: "lg-3" }, [
									new h.h(
										1,
										{
											fontDisplay: 4,
											fontWeight: "bold",
											textColor: "body-emphasis",
											lineHeight: 1,
										},
										arg.title
									),
									new h.p({ lead: true }, arg.description),
									new h.div(
										{
											display: ["grid", "md-flex"],
											gap: 2,
											justifyContent: "md-start",
											marginBottom: [4, "lg-3"],
										},
										arg.elem ? arg.elem : ""
									),
								]),

								new h.div(
									{ col: "lg-4", offset: "lg-1", padding: 0, overflow: "hidden", shadow: "lg" },
									new b.img({
										src: arg.img,
										alt: "Example image",
										attrWidth: 720,
										rounded: 3,
									})
								),
							]
						)
					);
				};
				return component({
					img: "https://picsum.photos/seed/bsts_0/432/308",
					title: "Border hero with cropped image and shadows",
					description:
						"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
					elem: [
						new b.button({ weight: "lg", color: "primary" }, "Primary"),
						new b.button({ weight: "lg", color: "secondary", outline: true }, "Default"),
					],
				});
			},
		}),
	],
};

import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const features: IAttrContent = {
	title: "Features",
	description: "Explain the features, benefits, or other details in your marketing content.",
	item: [
		new e.title("Columns with icons"),
		new e.code({
			output: () => {
				const component = (arg: { icon: string; title: string; description: string; href: string }) => {
					return new h.div({ col: true, marginBottom: 5 }, [
						new h.div(
							{
								display: "inline-flex",
								alignItem: "center",
								justifyContent: "center",
								textBgColor: "primary",
								bgGradient: true,
								fontSize: 2,
								marginBottom: 3,
								paddingX: 3,
								paddingY: 2,
								rounded: 3,
							},
							new b.icon(arg.icon)
						),
						new h.h(3, { fontSize: 2 }, arg.title),
						new h.p(arg.description),
						new h.a({ href: arg.href, iconLink: true }, ["Call to action", new b.icon("chevron-right")]),
					]);
				};

				return [
					component({
						icon: "collection",
						title: "Featured title",
						description:
							"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
						href: "",
					}),
					component({
						icon: "person-circle",
						title: "Featured title",
						description:
							"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
						href: "",
					}),
					component({
						icon: "toggles2",
						title: "Featured title",
						description:
							"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
						href: "",
					}),
				];
			},
		}),

		//-----------------------

		new e.title("Hanging icons"),
		new e.code({
			// zoom: 75,
			output: () => {
				const component = (arg: { icon: string; title: string; description: string; elem: core.IElem }) => {
					return new h.div(
						{
							col: true,
							display: "flex",
							alignItem: "start",
						},
						[
							new h.div(
								{
									textColor: "body-emphasis",
									bgColor: "body-secondary",
									display: "inline-flex",
									alignItem: "center",
									justifyContent: "center",
									fontSize: 4,
									flex: "shrink-0",
									marginEnd: 3,
									paddingX: 3,
									paddingY: 2,
									rounded: 3,
								},
								new b.icon(arg.icon)
							),
							new h.div([
								new h.h(3, { fontSize: 2 }, arg.title),
								new h.p(arg.description),
								new h.div(arg.elem),
							]),
						]
					);
				};

				return new h.div({ row: true, gutter: 4, paddingY: 5, rowCol: [1, "md-2", "lg-3"] }, [
					component({
						icon: "toggles2",
						title: "Featured title",
						description:
							"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
						elem: new b.button({ href: "#" }, "Primary button"),
					}),
					component({
						icon: "cpu-fill",
						title: "Featured title",
						description:
							"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
						elem: new b.button({ href: "#" }, "Primary button"),
					}),
					component({
						icon: "tools",
						title: "Featured title",
						description:
							"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
						elem: new b.button({ href: "#" }, "Primary button"),
					}),
				]);
			},
		}),

		//-----------------------
		new e.title("Custom cards"),
		new e.code({
			// zoom: 75,
			// previewAttr: { padding: 0 },
			output: () => {
				const component = (arg: { bg: string; img: string; title: string; location: string; date: string }) => {
					return new h.div(
						{
							col: true,
						},
						[
							new b.card.container(
								{
									textBgColor: "dark",
									border: false,
									rounded: 3,
								},
								[
									new b.card.img({
										src: arg.bg,
										alt: "Card image",
										rounded: 3,
									}),
									new b.card.imgoverlay(
										{
											display: "flex",
											flex: "column",
											height: 100,
											padding: 5,
											paddingBottom: 3,
										},
										[
											new b.card.title(
												{
													marginTop: "auto",
													marginBottom: 4,
													// fontDisplay: 6,
													h: 5,
													lineHeight: 1,
													fontWeight: "bold",
												},
												arg.title
											),
											new h.ul({ display: "flex", unstyle: true, marginBottom: 3 }, [
												new h.li(
													{ marginEnd: "auto" },
													new h.img({
														src: arg.img,
														alt: "Image",
														attrWidth: 32,
														attrHeight: 32,
														rounded: "circle",
														border: true,
														borderWidth: 2,
														borderColor: "light",
													})
												),
												new h.li(
													{ display: "flex", marginEnd: 3, textAlign: "center" },
													new b.caption({ icon: "geo-fill" }, arg.location)
												),
												new h.li(
													{ display: "flex", textAlign: "center" },
													new b.caption({ icon: "calendar3" }, arg.date)
												),
											]),
										]
									),
								]
							),
						]
					);
				};

				return new h.div(
					{
						row: true,
						alignItem: "stretch",
						gutter: 4,
						paddingY: 5,
						rowCol: [1, "md-2", "lg-3"],
					},
					[
						component({
							img: "https://picsum.photos/seed/bsts_0/32/32",
							bg: "https://picsum.photos/seed/bsts_1/506/495",
							title: "Short title, long jacket",
							location: "Earth",
							date: "3d",
						}),
						component({
							img: "https://picsum.photos/seed/bsts_2/32/32",
							bg: "https://picsum.photos/seed/bsts_3/506/495",
							title: "Much longer title that wraps to multiple lines",
							location: "Putatan",
							date: "4d",
						}),
						component({
							img: "https://picsum.photos/seed/bsts_4/32/32",
							bg: "https://picsum.photos/seed/bsts_5/506/495",
							title: "Another longer title belongs here",
							location: "Kedah",
							date: "5d",
						}),
					]
				);
			},
		}),

		//-----------------------

		new e.title("Icon grid"),
		new e.code({
			// zoom: 75,
			output: () => {
				const component = (arg: { icon: string; title: string; description: string }) => {
					return new h.div(
						{
							col: true,
							display: "flex",
							alignItem: "start",
						},
						[
							new h.div(
								{
									textColor: "body-secondary",
									flex: "shrink-0",
									marginEnd: 3,
									h: 3,
								},
								new b.icon(arg.icon)
							),
							new h.div([
								new h.h(3, { fontSize: 4, marginBottom: 0, fontWeight: "bold" }, arg.title),
								new h.p(arg.description),
							]),
						]
					);
				};

				return new h.div(
					{
						row: true,
						gutter: 4,
						paddingY: 5,
						rowCol: [1, "sm-2", "md-3", "lg-4"],
					},
					[
						component({
							icon: "fab bootstrap",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
						component({
							icon: "cpu-fill",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
						component({
							icon: "calendar3",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
						component({
							icon: "house",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
						component({
							icon: "speedometer2",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
						component({
							icon: "toggles2",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
						component({
							icon: "toggles2",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
						component({
							icon: "geo-fill",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
						component({
							icon: "tools",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						}),
					]
				);
			},
		}),

		//-----------------------

		new e.title("Features with title"),
		new e.code({
			output: () => {
				const componentFeature = (arg: { icon: string; title: string; description: string }) => {
					return new h.div(
						{
							col: true,
							display: "flex",
							flex: "column",
							gap: 2,
						},
						[
							new h.div(
								new h.div(
									{
										display: "inline-flex",
										alignItem: "center",
										justifyContent: "center",
										textBgColor: "primary",
										bgGradient: true,
										fontSize: 4,
										paddingX: 3,
										paddingY: 2,
										rounded: 3,
									},
									new b.icon(arg.icon)
								)
							),
							new h.h(4, { fontWeight: "semibold", marginBottom: 0 }, arg.title),
							new h.p({ textColor: "body-secondary" }, arg.description),
						]
					);
				};

				const componentTitle = (arg: { title: string; description: string; elem: core.IElem }) => {
					return new h.div(
						{
							col: true,
							display: "flex",
							flex: "column",
							alignItem: "start",
							gap: 2,
						},
						[
							new h.h(3, { fontWeight: "bold" }, arg.title),
							new h.p({ textColor: "body-secondary" }, arg.description),
							new h.div(arg.elem),
						]
					);
				};

				const component = (arg: {
					main: { title: string; description: string; elem: core.IElem };
					feature: { icon: string; title: string; description: string }[];
				}) => {
					return new h.div(
						{ row: true, rowCol: [1, "md-2"], alignItem: "md-center", gutter: 5, paddingY: 5 },
						[
							componentTitle(arg.main),
							new h.div(
								{ col: true },
								new h.div(
									{ row: true, rowCol: [1, "sm-2"], gutter: 4 },
									arg.feature.map((i) => componentFeature(i))
								)
							),
						]
					);
				};

				return component({
					main: {
						title: "Left-aligned title explaining these awesome features",
						description:
							"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
						elem: new b.button({ weight: "lg" }, "Primary button"),
					},
					feature: [
						{
							icon: "collection",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						},
						{
							icon: "gear-fill",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						},
						{
							icon: "person-circle",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						},
						{
							icon: "toggles2",
							title: "Featured title",
							description: "Paragraph of text beneath the heading to explain the heading.",
						},
					],
				});
			},
		}),

		//-----------------------
	],
};

import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";
import Chart from "chart.js/auto";

export const modals: IAttrContent = {
	title: "Modals",
	description: "Transform modals to serve any purpose, from feature tours to dialogs.",
	item: [
		new e.title("IOS Style"),
		new e.code({
			previewAttr: { bgColor: "body-tertiary" },
			showCodepen: false,
			output: () => {
				return new b.modal.container({ debug: true, contentAttr: { rounded: 4 } }, [
					new b.modal.header({ close: true, borderNone: "bottom" }, new b.modal.title("Modal title")),
					new b.modal.body(
						{ paddingY: 0 },
						new h.p(
							"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."
						)
					),
					new b.modal.footer(
						{
							flex: "column",
							alignItem: "stretch",
							width: 100,
							gap: 2,
							paddingBottom: 3,
							borderNone: "top",
						},
						[
							new b.button({ color: "primary", weight: "lg" }, "Save changes"),
							new b.button(
								{
									dismiss: "modal",
									color: "secondary",
									weight: "lg",
								},
								"Close"
							),
						]
					),
				]);
			},
		}),

		new e.text("Using {{b.modal.create}}"),
		new e.code({
			previewAttr: { bgColor: "body-tertiary" },
			showCodepen: false,
			output: () => {
				return b.modal.create({
					debug: true,
					customStyle: "ios",
					title: "Modal title",
					elem: new h.p(
						"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."
					),
					btn: ["savechanges", "close"],
					btnFn: [(_event) => {}],
				});
			},
		}),

		new e.text("Live preview"),
		new e.code({
			outputAttr: { display: "flex", gap: 2 },
			output: () => {
				return [
					new b.button(
						{
							on: {
								click: (_event) => {
									b.modal.show(
										new b.modal.container({ contentAttr: { rounded: 4 } }, [
											new b.modal.header(
												{ close: true, borderNone: "bottom" },
												new b.modal.title("Modal title")
											),
											new b.modal.body(
												{ paddingY: 0 },
												new h.p(
													"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."
												)
											),
											new b.modal.footer(
												{
													flex: "column",
													alignItem: "stretch",
													width: 100,
													gap: 2,
													paddingBottom: 3,
													borderNone: "top",
												},
												[
													new b.button({ color: "primary", weight: "lg" }, "Save changes"),
													new b.button(
														{
															dismiss: "modal",
															color: "secondary",
															weight: "lg",
														},
														"Close"
													),
												]
											),
										])
									);
								},
							},
						},
						"b.modal.container"
					),
					new b.button(
						{
							on: {
								click: (_event) => {
									b.modal.show(
										b.modal.create({
											customStyle: "ios",
											title: "Modal title",
											elem: new h.p(
												"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."
											),
											btn: ["savechanges", "close"],
											btnFn: [(_event) => {}],
										})
									);
								},
							},
						},
						"b.modal.create"
					),
				];
			},
		}),

		//-----------------------

		new e.title("Android Style"),
		new e.code({
			previewAttr: { bgColor: "body-tertiary" },
			showCodepen: false,
			output: () => {
				return new b.modal.container({ debug: true }, [
					new b.modal.header(
						{
							textAlign: "center",
							padding: 4,
							paddingBottom: 0,
							borderNone: "bottom",
							position: "relative",
							close: false,
						},
						new b.modal.title({ width: 100 }, "Enable this setting?")
					),
					new b.modal.body({ padding: 4, paddingTop: 0, textAlign: "center" }, [
						new h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
					]),
					new b.modal.footer(
						{
							flex: ["nowrap", "grow-1"],
							padding: 0,
						},
						[
							new b.button(
								{
									fontWeight: "bold",
									border: "end",
									flex: "grow-1",
									textDecoration: "none",
									color: "link",
									rounded: 0,
									weight: "lg",
									fontSize: 6,
									paddingY: 3,
									margin: 0,
								},
								"Yes, enable"
							),
							new b.button(
								{
									dismiss: "modal",
									flex: "grow-1",
									textDecoration: "none",
									color: "link",
									rounded: 0,
									weight: "lg",
									fontSize: 6,
									paddingY: 3,
									margin: 0,
								},
								"No thanks"
							),
						]
					),
				]);
			},
		}),

		new e.text("Using {{b.modal.create}}"),
		new e.code({
			previewAttr: { bgColor: "body-tertiary" },
			showCodepen: false,
			output: () => {
				return b.modal.create({
					debug: true,
					customStyle: "android",
					title: "Enable this setting?",
					elem: new h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
					btn: ["yesenable", "nothanks"],
					btnFn: [(_event) => {}],
				});
			},
		}),

		new e.text("Live preview"),
		new e.code({
			outputAttr: { display: "flex", gap: 2 },
			output: () => {
				return [
					new b.button(
						{
							on: {
								click: (_event) => {
									b.modal.show(
										new b.modal.container([
											new b.modal.header(
												{
													textAlign: "center",
													padding: 4,
													paddingBottom: 0,
													borderNone: "bottom",
													position: "relative",
													close: false,
												},
												new b.modal.title({ width: 100 }, "Enable this setting?")
											),
											new b.modal.body({ padding: 4, paddingTop: 0, textAlign: "center" }, [
												new h.p(
													{ marginBottom: 0 },
													"You can always change your mind in your account settings."
												),
											]),
											new b.modal.footer(
												{
													flex: ["nowrap", "grow-1"],
													padding: 0,
												},
												[
													new b.button(
														{
															fontWeight: "bold",
															border: "end",
															flex: "grow-1",
															textDecoration: "none",
															color: "link",
															rounded: 0,
															weight: "lg",
															fontSize: 6,
															paddingY: 3,
															margin: 0,
														},
														"Yes, enable"
													),
													new b.button(
														{
															dismiss: "modal",
															flex: "grow-1",
															textDecoration: "none",
															color: "link",
															rounded: 0,
															weight: "lg",
															fontSize: 6,
															paddingY: 3,
															margin: 0,
														},
														"No thanks"
													),
												]
											),
										])
									);
								},
							},
						},
						"b.modal.container"
					),
					new b.button(
						{
							on: {
								click: (_event) => {
									b.modal.show(
										b.modal.create({
											customStyle: "android",
											title: "Enable this setting?",
											elem: new h.p(
												{ marginBottom: 0 },
												"You can always change your mind in your account settings."
											),
											btn: ["yesenable", "nothanks"],
											btnFn: [(_event) => {}],
										})
									);
								},
							},
						},
						"b.modal.create"
					),
				];
			},
		}),

		//-----------------------

		new e.title("What's new"),
		new e.code({
			previewAttr: { bgColor: "body-tertiary" },
			showCodepen: false,
			output: () => {
				return new b.modal.container({ debug: true, contentAttr: { rounded: 4 } }, [
					new b.modal.body({ padding: 5 }, [
						new h.h(2, { fontWeight: "bold", marginBottom: 0 }, "What's new"),
						new h.ul(
							{ unstyle: true, display: "grid", gap: 4, marginY: 5, small: true },
							[
								{
									icon: "grid-fill",
									iconColor: "secondary",
									title: "Grid view",
									description: "Not into lists? Try the new grid view.",
								},
								{
									icon: "bookmark-star",
									iconColor: "warning",
									title: "Bookmarks",
									description: "Save items you love for easy access later.",
								},
								{
									icon: "film",
									iconColor: "primary",
									title: "Video embeds",
									description: "Share videos wherever you go.",
								},
							].map((i) => {
								return new h.li({ display: "flex", gap: 4 }, [
									new b.icon({
										id: i.icon,
										fontSize: 1,
										h: 1,
										fontWeight: "bold",
										color: i.iconColor as I.B.Icon["color"],
									}),
									new h.div([new h.h(5, { marginBottom: 0 }, i.title), i.description]),
								]);
							})
						),
						new b.button({ weight: "lg", marginTop: 5, width: 100, dismiss: "modal" }, "Great, thanks!"),
					]),
				]);
			},
		}),

		new e.text("Live preview"),
		new e.code({
			output: () => {
				return new b.button(
					{
						on: {
							click: (_event) => {
								b.modal.show(
									new b.modal.container({ contentAttr: { rounded: 4 } }, [
										new b.modal.body({ padding: 5 }, [
											new h.h(2, { fontWeight: "bold", marginBottom: 0 }, "What's new"),
											new h.ul(
												{ unstyle: true, display: "grid", gap: 4, marginY: 5, small: true },
												[
													{
														icon: "grid-fill",
														iconColor: "secondary",
														title: "Grid view",
														description: "Not into lists? Try the new grid view.",
													},
													{
														icon: "bookmark-star",
														iconColor: "warning",
														title: "Bookmarks",
														description: "Save items you love for easy access later.",
													},
													{
														icon: "film",
														iconColor: "primary",
														title: "Video embeds",
														description: "Share videos wherever you go.",
													},
												].map((i) => {
													return new h.li({ display: "flex", gap: 4 }, [
														new b.icon({
															id: i.icon,
															fontSize: 1,
															h: 1,
															fontWeight: "bold",
															color: i.iconColor as I.B.Icon["color"],
														}),
														new h.div([
															new h.h(5, { marginBottom: 0 }, i.title),
															i.description,
														]),
													]);
												})
											),
											new b.button(
												{ weight: "lg", marginTop: 5, width: 100, dismiss: "modal" },
												"Great, thanks!"
											),
										]),
									])
								);
							},
						},
					},
					"Show dialog"
				);
			},
		}),

		//-----------------------

		new e.title("Testing"),
		new e.code({
			showCodepen: false,
			outputAttr: { display: "flex", gap: 3, flex: "wrap" },
			output: () => {
				const item = (arg: { data: number[] }) => {
					return new b.card.container(
						{ style: { maxWidth: "150px" } },
						new b.card.body(
							new h.canvas({
								ratio: "4x3",
								on: {
									build: (event) => {
										const target = event.target as HTMLCanvasElement;
										new Chart(target, {
											type: "line",
											data: {
												labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
												datasets: [
													{
														label: "# of Votes",
														data: arg.data,
														borderWidth: 1,
														tension: 0.5,
													},
												],
											},
											options: {
												plugins: {
													legend: {
														display: false,
													},
												},
												scales: {
													x: { display: false },
													y: {
														display: false,
														beginAtZero: true,
													},
												},
											},
										});
									},
								},
							})
						)
					);
				};
				return new Array(15).fill("").map(() => {
					return item({
						data: [
							core.rndBetween(1, 20),
							core.rndBetween(1, 20),
							core.rndBetween(1, 20),
							core.rndBetween(1, 20),
							core.rndBetween(1, 20),
							core.rndBetween(1, 20),
						],
					});
				});
				// return new b.modal.container({ debug: true}, [
				// 	new b.modal.body({ padding: 5 }, []),
				// ]);
			},
		}),
	],
};

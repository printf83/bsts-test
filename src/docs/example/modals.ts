import { I, b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const modals: IContent = {
	title: "Modals",
	description: "Transform modals to serve any purpose, from feature tours to dialogs.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Style 1"),
				new e.code({
					db: getContentCode(db),
					previewAttr: { bgColor: "body-tertiary" },
					showCodepen: false,
					output: () => {
						return new b.modal.container({ debug: true, view: "end", contentAttr: { rounded: 4 } }, [
							new b.modal.header({ close: true, borderNone: "bottom" }, new b.modal.title("Modal title")),
							new b.modal.body({ paddingY: 0 }, new h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.")),
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
					db: getContentCode(db),
					previewAttr: { bgColor: "body-tertiary" },
					showCodepen: false,
					output: () => {
						return b.modal.create({
							debug: true,
							customStyle: 1,
							title: "Modal title",
							elem: new h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."),
							btn: ["savechanges", "close"],
							btnFn: [(_event) => {}],
						});
					},
				}),

				new e.text("Live preview"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return [
							new b.button(
								{
									on: {
										click: (_event) => {
											b.modal.show(
												new b.modal.container(
													{
														view: "end",
														animate: "slide-in-bottom",
														animateDuration: "300ms",
														contentAttr: {
															rounded: 4,
														},
													},
													[
														new b.modal.header({ close: true, borderNone: "bottom" }, new b.modal.title("Modal title")),
														new b.modal.body({ paddingY: 0 }, new h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.")),
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
													]
												)
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
													customStyle: 1,
													title: "Modal title",
													elem: new h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."),
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
			]),

			//----------------------

			new e.section([
				new e.title("Style 2"),
				new e.code({
					db: getContentCode(db),
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
							new b.modal.body({ padding: 4, paddingTop: 0, textAlign: "center" }, [new h.p({ marginBottom: 0 }, "You can always change your mind in your account settings.")]),
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
											color: "transparent",
											textColor: "primary",
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
											defColor: false,
											dismiss: "modal",
											flex: "grow-1",
											textDecoration: "none",
											color: "transparent",
											textColor: "primary",
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
					db: getContentCode(db),
					previewAttr: { bgColor: "body-tertiary" },
					showCodepen: false,
					output: () => {
						return b.modal.create({
							debug: true,
							customStyle: 2,
							title: "Enable this setting?",
							elem: new h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
							btn: ["yesenable", "nothanks"],
							btnFn: [(_event) => {}],
						});
					},
				}),

				new e.text("Live preview"),
				new e.code({
					db: getContentCode(db),
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
													new b.modal.body({ padding: 4, paddingTop: 0, textAlign: "center" }, [new h.p({ marginBottom: 0 }, "You can always change your mind in your account settings.")]),
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
																	color: "transparent",
																	textColor: "primary",
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
																	color: "transparent",
																	textColor: "primary",
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
													customStyle: 2,
													title: "Enable this setting?",
													elem: new h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
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
			]),

			//----------------------

			new e.section([
				new e.title("What's new"),
				new e.code({
					db: getContentCode(db),
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
												textColor: i.iconColor as I.B.Icon["textColor"],
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
					db: getContentCode(db),
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
														{
															unstyle: true,
															display: "grid",
															gap: 4,
															marginY: 5,
															small: true,
														},
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
																	textColor: i.iconColor as I.B.Icon["textColor"],
																}),
																new h.div([new h.h(5, { marginBottom: 0 }, i.title), i.description]),
															]);
														})
													),
													new b.button({ weight: "lg", marginTop: 5, width: 100, dismiss: "modal" }, "Great, thanks!"),
												]),
											])
										);
									},
								},
							},
							"What's new"
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Sign up form"),
				new e.code({
					db: getContentCode(db),
					previewAttr: { bgColor: "body-tertiary" },
					showCodepen: false,
					output: () => {
						return new b.modal.container({ debug: true, contentAttr: { rounded: 4, padding: 0 } }, [
							new b.modal.header({ padding: 5, paddingBottom: 4, borderNone: "bottom", close: true }, new b.modal.title({ fontWeight: "bold", marginBottom: 0, fontSize: 2 }, "Sign up for free")),
							new b.modal.body({ padding: 5, paddingTop: 0 }, [
								new h.form({ display: "grid", gap: 3 }, [
									b.form.floatinglabel.input({
										type: "email",
										label: "Email address",
										required: true,
									}),
									b.form.floatinglabel.input({ type: "password", label: "Password", required: true }),
									new b.button({ weight: "lg", type: "submit" }, "Sign up"),
									new h.small({ textColor: "body-secondary" }, "By clicking Sign up, you agree to the terms of use."),
									new h.hr({ marginY: 4 }),
									new h.h(2, { fontSize: 5, fontWeight: "bold" }, "Or use a third-party"),
									new h.div({ display: "grid", gap: 2 }, [
										new b.button({ outline: true, color: "info" }, new b.caption({ icon: "twitter" }, "Sign up with Twitter")),
										new b.button({ outline: true, color: "primary" }, new b.caption({ icon: "facebook" }, "Sign up with Facebook")),
										new b.button({ outline: true, color: "secondary" }, new b.caption({ icon: "github" }, "Sign up with Github")),
									]),
								]),
							]),
						]);
					},
				}),

				new e.text("Live preview"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.button(
							{
								on: {
									click: (_event) => {
										b.modal.show(
											new b.modal.container(
												{
													contentAttr: { rounded: 4, padding: 0 },
													on: {
														submit: (event) => {
															event.preventDefault();
															event.stopPropagation();

															b.modal.hide(event.target as Element);
														},
													},
												},
												[
													new b.modal.header(
														{
															padding: 5,
															paddingBottom: 4,
															borderNone: "bottom",
															close: true,
														},
														new b.modal.title({ fontWeight: "bold", marginBottom: 0, fontSize: 2 }, "Sign up for free")
													),
													new b.modal.body({ padding: 5, paddingTop: 0 }, [
														new h.form({ display: "grid", gap: 3 }, [
															b.form.floatinglabel.input({
																type: "email",
																label: "Email address",
																required: true,
															}),
															b.form.floatinglabel.input({
																type: "password",
																label: "Password",
																required: true,
															}),
															new b.button({ weight: "lg", type: "submit" }, "Sign up"),
															new h.small({ textColor: "body-secondary" }, "By clicking Sign up, you agree to the terms of use."),
															new h.hr({ marginY: 4 }),
															new h.h(2, { fontSize: 5, fontWeight: "bold" }, "Or use a third-party"),
															new h.div({ display: "grid", gap: 2 }, [
																new b.button({ outline: true, color: "info" }, new b.caption({ icon: "twitter" }, "Sign up with Twitter")),
																new b.button({ outline: true, color: "primary" }, new b.caption({ icon: "facebook" }, "Sign up with Facebook")),
																new b.button({ outline: true, color: "secondary" }, new b.caption({ icon: "github" }, "Sign up with Github")),
															]),
														]),
													]),
												]
											)
										);
									},
								},
							},
							"Sign up"
						);
					},
				}),
			]),
		];
	},
	db: [
		{
			source: `() => {
return new b.modal.container({
debug: true,
view: "end",
contentAttr: {
rounded: 4
}
}, [
new b.modal.header({
close: true,
borderNone: "bottom"
}, new b.modal.title("Modal title")),
new b.modal.body({
paddingY: 0
}, new h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.")),
new b.modal.footer({
flex: "column",
alignItem: "stretch",
width: 100,
gap: 2,
paddingBottom: 3,
borderNone: "top",
}, [
new b.button({
color: "primary",
weight: "lg"
}, "Save changes"),
new b.button({
dismiss: "modal",
color: "secondary",
weight: "lg",
}, "Close"),
]),
]);
}`,
		},
		{
			source: `() => {
return b.modal.create({
debug: true,
customStyle: 1,
title: "Modal title",
elem: new h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."),
btn: ["savechanges", "close"],
btnFn: [(_event) => {}],
});
}`,
		},
		{
			source: `() => {
return [
new b.button({
on: {
click: (_event) => {
b.modal.show(new b.modal.container({
view: "end",
animate: "slide-in-bottom",
animateDuration: "300ms",
contentAttr: {
rounded: 4,
},
}, [
new b.modal.header({
close: true,
borderNone: "bottom"
}, new b.modal.title("Modal title")),
new b.modal.body({
paddingY: 0
}, new h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.")),
new b.modal.footer({
flex: "column",
alignItem: "stretch",
width: 100,
gap: 2,
paddingBottom: 3,
borderNone: "top",
}, [
new b.button({
color: "primary",
weight: "lg"
}, "Save changes"),
new b.button({
dismiss: "modal",
color: "secondary",
weight: "lg",
}, "Close"),
]),
]));
},
},
}, "b.modal.container"),
new b.button({
on: {
click: (_event) => {
b.modal.show(b.modal.create({
customStyle: 1,
title: "Modal title",
elem: new h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."),
btn: ["savechanges", "close"],
btnFn: [(_event) => {}],
}));
},
},
}, "b.modal.create"),
];
}`,
		},
		{
			source: `() => {
return new b.modal.container({
debug: true
}, [
new b.modal.header({
textAlign: "center",
padding: 4,
paddingBottom: 0,
borderNone: "bottom",
position: "relative",
close: false,
}, new b.modal.title({
width: 100
}, "Enable this setting?")),
new b.modal.body({
padding: 4,
paddingTop: 0,
textAlign: "center"
}, [new h.p({
marginBottom: 0
}, "You can always change your mind in your account settings.")]),
new b.modal.footer({
flex: ["nowrap", "grow-1"],
padding: 0,
}, [
new b.button({
fontWeight: "bold",
border: "end",
flex: "grow-1",
textDecoration: "none",
color: "transparent",
textColor: "primary",
rounded: 0,
weight: "lg",
fontSize: 6,
paddingY: 3,
margin: 0,
}, "Yes, enable"),
new b.button({
defColor: false,
dismiss: "modal",
flex: "grow-1",
textDecoration: "none",
color: "transparent",
textColor: "primary",
rounded: 0,
weight: "lg",
fontSize: 6,
paddingY: 3,
margin: 0,
}, "No thanks"),
]),
]);
}`,
		},
		{
			source: `() => {
return b.modal.create({
debug: true,
customStyle: 2,
title: "Enable this setting?",
elem: new h.p({
marginBottom: 0
}, "You can always change your mind in your account settings."),
btn: ["yesenable", "nothanks"],
btnFn: [(_event) => {}],
});
}`,
		},
		{
			source: `() => {
return [
new b.button({
on: {
click: (_event) => {
b.modal.show(new b.modal.container([
new b.modal.header({
textAlign: "center",
padding: 4,
paddingBottom: 0,
borderNone: "bottom",
position: "relative",
close: false,
}, new b.modal.title({
width: 100
}, "Enable this setting?")),
new b.modal.body({
padding: 4,
paddingTop: 0,
textAlign: "center"
}, [new h.p({
marginBottom: 0
}, "You can always change your mind in your account settings.")]),
new b.modal.footer({
flex: ["nowrap", "grow-1"],
padding: 0,
}, [
new b.button({
fontWeight: "bold",
border: "end",
flex: "grow-1",
textDecoration: "none",
color: "transparent",
textColor: "primary",
rounded: 0,
weight: "lg",
fontSize: 6,
paddingY: 3,
margin: 0,
}, "Yes, enable"),
new b.button({
dismiss: "modal",
flex: "grow-1",
textDecoration: "none",
color: "transparent",
textColor: "primary",
rounded: 0,
weight: "lg",
fontSize: 6,
paddingY: 3,
margin: 0,
}, "No thanks"),
]),
]));
},
},
}, "b.modal.container"),
new b.button({
on: {
click: (_event) => {
b.modal.show(b.modal.create({
customStyle: 2,
title: "Enable this setting?",
elem: new h.p({
marginBottom: 0
}, "You can always change your mind in your account settings."),
btn: ["yesenable", "nothanks"],
btnFn: [(_event) => {}],
}));
},
},
}, "b.modal.create"),
];
}`,
		},
		{
			source: `() => {
return new b.modal.container({
debug: true,
contentAttr: {
rounded: 4
}
}, [
new b.modal.body({
padding: 5
}, [
new h.h(2, {
fontWeight: "bold",
marginBottom: 0
}, "What's new"),
new h.ul({
unstyle: true,
display: "grid",
gap: 4,
marginY: 5,
small: true
}, [
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
}, ].map((i) => {
return new h.li({
display: "flex",
gap: 4
}, [
new b.icon({
id: i.icon,
fontSize: 1,
h: 1,
fontWeight: "bold",
textColor: i.iconColor,
}),
new h.div([new h.h(5, {
marginBottom: 0
}, i.title), i.description]),
]);
})),
new b.button({
weight: "lg",
marginTop: 5,
width: 100,
dismiss: "modal"
}, "Great, thanks!"),
]),
]);
}`,
		},
		{
			source: `() => {
return new b.button({
on: {
click: (_event) => {
b.modal.show(new b.modal.container({
contentAttr: {
rounded: 4
}
}, [
new b.modal.body({
padding: 5
}, [
new h.h(2, {
fontWeight: "bold",
marginBottom: 0
}, "What's new"),
new h.ul({
unstyle: true,
display: "grid",
gap: 4,
marginY: 5,
small: true,
}, [
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
}, ].map((i) => {
return new h.li({
display: "flex",
gap: 4
}, [
new b.icon({
id: i.icon,
fontSize: 1,
h: 1,
fontWeight: "bold",
textColor: i.iconColor,
}),
new h.div([new h.h(5, {
marginBottom: 0
}, i.title), i.description]),
]);
})),
new b.button({
weight: "lg",
marginTop: 5,
width: 100,
dismiss: "modal"
}, "Great, thanks!"),
]),
]));
},
},
}, "What's new");
}`,
		},
		{
			source: `() => {
return new b.modal.container({
debug: true,
contentAttr: {
rounded: 4,
padding: 0
}
}, [
new b.modal.header({
padding: 5,
paddingBottom: 4,
borderNone: "bottom",
close: true
}, new b.modal.title({
fontWeight: "bold",
marginBottom: 0,
fontSize: 2
}, "Sign up for free")),
new b.modal.body({
padding: 5,
paddingTop: 0
}, [
new h.form({
display: "grid",
gap: 3
}, [
b.form.floatinglabel.input({
type: "email",
label: "Email address",
required: true,
}),
b.form.floatinglabel.input({
type: "password",
label: "Password",
required: true
}),
new b.button({
weight: "lg",
type: "submit"
}, "Sign up"),
new h.small({
textColor: "body-secondary"
}, "By clicking Sign up, you agree to the terms of use."),
new h.hr({
marginY: 4
}),
new h.h(2, {
fontSize: 5,
fontWeight: "bold"
}, "Or use a third-party"),
new h.div({
display: "grid",
gap: 2
}, [
new b.button({
outline: true,
color: "info"
}, new b.caption({
icon: "twitter"
}, "Sign up with Twitter")),
new b.button({
outline: true,
color: "primary"
}, new b.caption({
icon: "facebook"
}, "Sign up with Facebook")),
new b.button({
outline: true,
color: "secondary"
}, new b.caption({
icon: "github"
}, "Sign up with Github")),
]),
]),
]),
]);
}`,
		},
		{
			source: `() => {
return new b.button({
on: {
click: (_event) => {
b.modal.show(new b.modal.container({
contentAttr: {
rounded: 4,
padding: 0
},
on: {
submit: (event) => {
event.preventDefault();
event.stopPropagation();
b.modal.hide(event.target);
},
},
}, [
new b.modal.header({
padding: 5,
paddingBottom: 4,
borderNone: "bottom",
close: true,
}, new b.modal.title({
fontWeight: "bold",
marginBottom: 0,
fontSize: 2
}, "Sign up for free")),
new b.modal.body({
padding: 5,
paddingTop: 0
}, [
new h.form({
display: "grid",
gap: 3
}, [
b.form.floatinglabel.input({
type: "email",
label: "Email address",
required: true,
}),
b.form.floatinglabel.input({
type: "password",
label: "Password",
required: true,
}),
new b.button({
weight: "lg",
type: "submit"
}, "Sign up"),
new h.small({
textColor: "body-secondary"
}, "By clicking Sign up, you agree to the terms of use."),
new h.hr({
marginY: 4
}),
new h.h(2, {
fontSize: 5,
fontWeight: "bold"
}, "Or use a third-party"),
new h.div({
display: "grid",
gap: 2
}, [
new b.button({
outline: true,
color: "info"
}, new b.caption({
icon: "twitter"
}, "Sign up with Twitter")),
new b.button({
outline: true,
color: "primary"
}, new b.caption({
icon: "facebook"
}, "Sign up with Facebook")),
new b.button({
outline: true,
color: "secondary"
}, new b.caption({
icon: "github"
}, "Sign up with Github")),
]),
]),
]),
]));
},
},
}, "Sign up");
}`,
		},
	],
};

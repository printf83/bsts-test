import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const stretched_link: IContent = {
	title: "Stretched link",
	description: "Make any HTML element or Bootstrap component clickable by “stretching” a nested link via CSS.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.text(
					"Add {{.stretched-link}} to a link to make its {{https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block::containing block}} clickable via a {{::after}} pseudo element. In most cases, this means that an element with {{position: relative;}} that contains a link with the {{.stretched-link}} class is clickable. Please note given {{https://www.w3.org/TR/CSS21/visuren.html#propdef-position::how CSS position works}}, {{.stretched-link}} cannot be mixed with most table elements."
				),
				new e.text("Cards have {{position: relative}} by default in Bootstrap, so in this case you can safely add the {{.stretched-link}} class to a link in the card without any other HTML changes."),
				new e.text("Multiple links and tap targets are not recommended with stretched links. However, some {{position}} and {{z-index}} styles can help should this be required."),

				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.img({
								location: "top",
								src: "https://picsum.photos/seed/bsts_0/286/180.webp",
								alt: "Image cap",
							}),
							new b.card.body([
								new b.card.title("Card with stretched link"),
								new b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content."),
								new b.button(
									{
										href: "#",
										stretched: true,
										on: {
											click: (event) => {
												const target = event.target as Element;
												e.console(target, "click", "Go somewhere button clicked");
											},
										},
									},
									"Go somewhere"
								),
							]),
						]);
					},
				}),

				new e.text("Most custom components do not have {{position: relative}} by default, so Bootstrap need to add the {{.position-relative}} here to prevent the link from stretching outside the parent element."),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						return new h.div({ display: "flex", position: "relative" }, [
							new h.img({
								flex: "shrink-0",
								marginEnd: 3,
								src: "https://picsum.photos/seed/bsts_0/144/144.webp",
								alt: "Image cap",
							}),
							new h.div([
								new h.h(5, { marginTop: 0 }, "Custom component with stretched link"),
								new h.p("This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and Bootstrap're using it here to give the component a bit of body and size."),
								new h.a(
									{
										href: "#",
										stretched: true,
										on: {
											click: (event) => {
												const target = event.target as Element;
												e.console(target, "click", "Go somewhere link clicked");
											},
										},
									},
									"Go somewhere"
								),
							]),
						]);
					},
				}),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						return new h.div({ row: true, gutter: 0, bgColor: "body-secondary", position: "relative" }, [
							new h.div(
								{ col: "md-6", marginBottom: "md-0", padding: "md-4" },
								new h.img({
									width: 100,
									src: "https://picsum.photos/seed/bsts_0/330/200.webp",
									alt: "Image cap",
								})
							),
							new h.div({ col: "md-6", padding: 4, paddingStart: "md-0" }, [
								new h.h(5, { marginTop: 0 }, "Columns with stretched link"),
								new h.p("Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and Bootstrap're using it here to give the component a bit of body and size."),
								new h.a(
									{
										href: "#",
										stretched: true,
										on: {
											click: (event) => {
												const target = event.target as Element;
												e.console(target, "click", "Go somewhere link clicked");
											},
										},
									},
									"Go somewhere"
								),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Identifying the containing block"),
				new e.text("If the stretched link doesn’t seem to work, the {{https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block::containing block}} will probably be the cause. The following CSS properties will make an element the containing block:"),
				new e.ul({
					item: [
						"A {{position}} value other than {{static}}",
						"A {{transform}} or {{perspective}} value other than {{none}}",
						"A {{will-change}} value of {{transform}} or {{perspective}}",
						"A {{filter}} value other than {{none}} or a {{will-change}} value of {{filter}} (only works on Firefox)",
					],
				}),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.img({
								location: "top",
								src: "https://picsum.photos/seed/bsts_0/286/180.webp",
								alt: "Image cap",
							}),
							new b.card.body([
								new b.card.title("Card with stretched link"),
								new b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content."),
								new b.card.text(
									new h.a(
										{
											href: "#",
											stretched: true,
											textColor: "danger",
											style: { position: "relative" },
											on: {
												click: (event) => {
													const target = event.target as Element;
													e.console(target, "click", "Link 1 clicked");
												},
											},
										},
										"Stretched link will not work here, because {{position: relative}} is added to the link"
									)
								),
								new b.card.text(
									{
										bgColor: "body-tertiary",
										style: { transform: "rotate(0)" },
									},
									[
										"This ",
										new h.a(
											{
												href: "#",
												textColor: "warning",
												stretched: true,
												on: {
													click: (event) => {
														const target = event.target as Element;
														e.console(target, "click", "Link 2 clicked");
													},
												},
											},
											"stretched link"
										),
										" will only be spread over the {{p}}-tag, because a transform is applied to it.",
									]
								),
							]),
						]);
					},
				}),
			]),
		];
	},
	db: [
		{
			source: `() => {
                        return new b.card.container({ style: { width: "18rem" } }, [
                            new b.card.img({
                                location: "top",
                                src: "https://picsum.photos/seed/bsts_0/286/180.webp",
                                alt: "Image cap",
                            }),
                            new b.card.body([
                                new b.card.title("Card with stretched link"),
                                new b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content."),
                                new b.button({
                                    href: "#",
                                    stretched: true,
                                    on: {
                                        click: (event) => {
                                            const target = event.target;
                                            e.console(target, "click", "Go somewhere button clicked");
                                        },
                                    },
                                }, "Go somewhere"),
                            ]),
                        ]);
                    }`,
		},
		{
			source: `() => {
                        return new h.div({ display: "flex", position: "relative" }, [
                            new h.img({
                                flex: "shrink-0",
                                marginEnd: 3,
                                src: "https://picsum.photos/seed/bsts_0/144/144.webp",
                                alt: "Image cap",
                            }),
                            new h.div([
                                new h.h(5, { marginTop: 0 }, "Custom component with stretched link"),
                                new h.p("This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and Bootstrap're using it here to give the component a bit of body and size."),
                                new h.a({
                                    href: "#",
                                    stretched: true,
                                    on: {
                                        click: (event) => {
                                            const target = event.target;
                                            e.console(target, "click", "Go somewhere link clicked");
                                        },
                                    },
                                }, "Go somewhere"),
                            ]),
                        ]);
                    }`,
		},
		{
			source: `() => {
                        return new h.div({ row: true, gutter: 0, bgColor: "body-secondary", position: "relative" }, [
                            new h.div({ col: "md-6", marginBottom: "md-0", padding: "md-4" }, new h.img({
                                width: 100,
                                src: "https://picsum.photos/seed/bsts_0/330/200.webp",
                                alt: "Image cap",
                            })),
                            new h.div({ col: "md-6", padding: 4, paddingStart: "md-0" }, [
                                new h.h(5, { marginTop: 0 }, "Columns with stretched link"),
                                new h.p("Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and Bootstrap're using it here to give the component a bit of body and size."),
                                new h.a({
                                    href: "#",
                                    stretched: true,
                                    on: {
                                        click: (event) => {
                                            const target = event.target;
                                            e.console(target, "click", "Go somewhere link clicked");
                                        },
                                    },
                                }, "Go somewhere"),
                            ]),
                        ]);
                    }`,
		},
		{
			source: `() => {
                        return new b.card.container({ style: { width: "18rem" } }, [
                            new b.card.img({
                                location: "top",
                                src: "https://picsum.photos/seed/bsts_0/286/180.webp",
                                alt: "Image cap",
                            }),
                            new b.card.body([
                                new b.card.title("Card with stretched link"),
                                new b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content."),
                                new b.card.text(new h.a({
                                    href: "#",
                                    stretched: true,
                                    textColor: "danger",
                                    style: { position: "relative" },
                                    on: {
                                        click: (event) => {
                                            const target = event.target;
                                            e.console(target, "click", "Link 1 clicked");
                                        },
                                    },
                                }, "Stretched link will not work here, because {{position: relative}} is added to the link")),
                                new b.card.text({
                                    bgColor: "body-tertiary",
                                    style: { transform: "rotate(0)" },
                                }, [
                                    "This ",
                                    new h.a({
                                        href: "#",
                                        textColor: "warning",
                                        stretched: true,
                                        on: {
                                            click: (event) => {
                                                const target = event.target;
                                                e.console(target, "click", "Link 2 clicked");
                                            },
                                        },
                                    }, "stretched link"),
                                    " will only be spread over the {{p}}-tag, because a transform is applied to it.",
                                ]),
                            ]),
                        ]);
                    }`,
		},
	],
};

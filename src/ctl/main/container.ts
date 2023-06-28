import { core, b, h, t, I } from "@printf83/bsts";
import * as e from "../example/_index.js";

const dispatchCustomEvent = (root: Element | null, eventName: string, value: string) => {
	if (root) {
		requestIdleCallback(
			() => {
				root.dispatchEvent(new CustomEvent(eventName, { detail: value }));
			},
			{ timeout: 300 }
		);
	}
};

const changeTheme = (value: string, icon: I.B.Icon) => {
	let bsTheme = document.getElementById("bs-theme") as Element;
	let bsThemeMenu = bsTheme.nextSibling as Element;

	let lastActive = bsThemeMenu.querySelectorAll(".dropdown-item.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	let newActive = bsThemeMenu.querySelectorAll(`.dropdown-item[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
		newActive.setAttribute("aria-current", "true");
	}

	core.replaceChild(bsTheme, new b.caption({ icon: icon, labelDisplay: "lg-none" }, "Toggle theme"));

	let root = bsTheme.closest(".bs-main-root");
	dispatchCustomEvent(root, "bs-theme-change", value);
};

const changeBootswatch = (value: string) => {
	let bsBootswatch = document.getElementById("bs-bootswatch") as Element;
	let bsBootswatchMenu = bsBootswatch.nextSibling as Element;
	let bsBootswatchLabel = document.getElementById("bs-bootswatch-label") as Element;

	let lastActive = bsBootswatchMenu.querySelectorAll("a.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	let newActive = bsBootswatchMenu.querySelectorAll(`a[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
		newActive.setAttribute("aria-current", "true");
	}

	core.replaceWith(bsBootswatchLabel, new h.span({ id: "bs-bootswatch-label" }, `${core.uppercaseFirst(value)}`));

	let root = bsBootswatch.closest(".bs-main-root");
	dispatchCustomEvent(root, "bs-bootswatch-change", value);
};

const changeVersion = (value: string) => {
	let bsVersion = document.getElementById("bs-version") as Element;
	let bsVersionMenu = bsVersion.nextSibling as Element;
	let bsVersionLabel = document.getElementById("bs-version-label") as Element;

	let lastActive = bsVersionMenu.querySelectorAll(".dropdown-item.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	let newActive = bsVersionMenu.querySelectorAll(`.dropdown-item[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
		newActive.setAttribute("aria-current", "true");
	}

	core.replaceWith(bsVersionLabel, new h.span({ id: "bs-version-label" }, `v${value}`));

	let root = bsVersion.closest(".bs-main-root");
	dispatchCustomEvent(root, "bs-version-change", value);
};

const changeInsideLink = (value: string) => {
	let bsInsideLink = document.getElementById("bs-inside-link") as Element;

	let lastActive = bsInsideLink.querySelectorAll(".nav-link.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
	}

	let newActive = bsInsideLink.querySelectorAll(`.nav-link[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
	}

	let root = bsInsideLink.closest(".bs-main-root");
	dispatchCustomEvent(root, "bs-inside-link-change", value);
};

const changeMenu = (value: string) => {
	let bsMenu = document.getElementById("bs-menu") as Element;

	let lastActive = bsMenu.querySelectorAll(".bs-links-link.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	let newActive = bsMenu.querySelectorAll(`.bs-links-link[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
		newActive.setAttribute("aria-current", "page");
	}

	let root = bsMenu.closest(".bs-main-root");
	dispatchCustomEvent(root, "bs-menu-change", value);
};

export type availabelTheme = "dark" | "light" | "auto";

export interface IAttrItemInsideLink {
	value: string;
	label: string;
}

export interface IAttrItemOutsideLink {
	href: string;
	label: string;
	icon: I.B.Icon;
	onclick?: EventListener;
}

export interface IAttrItemTheme {
	value: string;
	icon: I.B.Icon;
	label: string;
}

export interface IAttrItemBootswatch {
	value: string;
	label: string;
}

export interface IAttrItemVersion {
	value: string;
	label: string;
}

export interface IAttrItemMenu {
	label: string;
	icon: I.B.Icon;
	item: IAttrItemSubMenu[];
}

export interface IAttrItemSubMenu {
	label: string;
	value: string;
}

export interface IAttrTocItem {
	href: string;
	label: string;
	item?: IAttrTocItem[];
}

export interface IAttrContent {
	loading?: boolean;

	title?: string;
	sourceUrl?: string;
	sourceWeb?: string;
	addedVersion?: string;

	description?: string;

	item?: core.IElem;
}

export interface IAttrFooterItem {
	href: string;
	label: string;
}

export interface IAttrFooter {
	title: string;
	item: IAttrFooterItem[];
}

const genTheme = (
	textColor: core.bootstrapType.textColor,
	navbarItemTheme?: IAttrItemTheme[],
	currentTheme?: string
) => {
	if (navbarItemTheme) {
		let indexIcon = -1;
		navbarItemTheme.forEach((i, ix) => {
			if (i.value === currentTheme) {
				indexIcon = ix;
			}
		});
		if (indexIcon > -1) {
			let getCurrentIconIndex = navbarItemTheme[indexIcon];
			let currentIcon = getCurrentIconIndex.icon;

			return [
				new b.navbar.item(
					{
						paddingY: [2, "lg-1"],
						col: [12, "lg-auto"],
					},
					[
						new b.verticalrule({
							display: ["none", "lg-flex"],
							height: 100,
							marginX: "lg-2",
							textColor: textColor,
						}),
						new h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
					]
				),
				new b.navbar.item({ dropdown: true }, [
					new b.dropdown.button(
						{
							navItem: true,
							id: "bs-theme",
							paddingY: 2,
							paddingX: [0, "lg-2"],
							display: "flex",
							alignItem: "center",
							textColor: textColor,
						},
						new b.caption(
							{
								icon: currentIcon,
								labelDisplay: "lg-none",
							},
							"Toggle theme"
						)
					),
					new b.dropdown.menu(
						{ positionView: "end", customStyle: 1 },
						navbarItemTheme.map((i) => {
							return new b.dropdown.item(
								{
									on: {
										click: (_e) => {
											changeTheme(i.value, i.icon);
										},
									},
									active: i.value === currentTheme,
									data: { value: i.value },
								},
								new b.caption({ icon: i.icon }, i.label)
							);
						})
					),
				]),
			];
		} else {
			return [];
		}
	} else {
		return [];
	}
};

const genBootswatch = (
	textColor: core.bootstrapType.textColor,
	navbarItemBootswatch?: IAttrItemBootswatch[],
	currentBootswatch?: string
) => {
	if (navbarItemBootswatch) {
		return [
			new b.navbar.item(
				{
					paddingY: [2, "lg-1"],
					col: [12, "lg-auto"],
				},
				[
					new b.verticalrule({
						display: ["none", "lg-flex"],
						height: 100,
						marginX: "lg-2",
						textColor: textColor,
					}),
					new h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
				]
			),
			new b.navbar.item({ dropdown: true }, [
				new b.dropdown.button(
					{
						navItem: true,
						id: "bs-bootswatch",
						paddingY: 2,
						paddingX: [0, "lg-2"],
						textColor: textColor,
					},
					[
						new h.span({ marginEnd: 2 }, new b.icon({ type: "solid", id: "swatchbook" })),
						new h.span(
							{ id: "bs-bootswatch-label" },
							`${core.uppercaseFirst(currentBootswatch ? currentBootswatch : "Default")}`
						),
					]
				),
				new b.dropdown.menu(
					{
						positionView: "end",
						customStyle: 1,
						style: { minWidth: "20rem" },
					},
					new h.div(
						{
							class: "bs-bootswatch-menu",
							display: "grid",
							gap: 1,
							style: { "grid-template-columns": "1fr 1fr 1fr" },
						},
						navbarItemBootswatch.map((i) => {
							return new h.a(
								{
									on: {
										click: (_e) => {
											changeBootswatch(i.value);
										},
									},
									class: [i.value === currentBootswatch ? "active" : undefined],
									data: { value: i.value },
								},
								i.label
							);
						})
					)
				),
			]),
		];
	} else {
		return [];
	}
};

const genVersion = (
	textColor: core.bootstrapType.textColor,
	name: string,
	navbarItemVersion?: IAttrItemVersion[],
	currentVersion?: string
) => {
	if (navbarItemVersion) {
		return [
			new b.navbar.item(
				{
					paddingY: [2, "lg-1"],
					col: [12, "lg-auto"],
				},
				[
					new b.verticalrule({
						display: ["none", "lg-flex"],
						height: 100,
						marginX: "lg-2",
						textColor: textColor,
					}),
					new h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
				]
			),
			new b.navbar.item({ dropdown: true }, [
				new b.dropdown.button(
					{
						navItem: true,
						id: "bs-version",
						paddingY: 2,
						paddingX: [0, "lg-2"],
						textColor: textColor,
					},
					[
						new h.span({ display: "lg-none", marginEnd: 2, aria: { hidden: "true" } }, name),
						new h.span({ id: "bs-version-label" }, `v${currentVersion}`),
					]
				),
				new b.dropdown.menu(
					{ positionView: "end", customStyle: 1 },
					navbarItemVersion.map((i) => {
						return new b.dropdown.item(
							{
								on: {
									click: (_e) => {
										changeVersion(i.value);
									},
								},
								active: i.value === currentVersion,
								data: { value: i.value },
							},
							i.label
						);
					})
				),
			]),
		];
	} else {
		return [];
	}
};

const genOutsideLink = (
	textColor: core.bootstrapType.textColor,
	itemOutsideLink?: IAttrItemOutsideLink[],
	itemVersion?: t[],
	itemBootswatch?: t[],
	itemTheme?: t[]
) => {
	return [
		new h.hr({ display: "lg-none", textColor: "light" }),
		new b.navbar.itemcontainer({ flex: ["row", "wrap"], marginStart: "md-auto" }, [
			...(itemOutsideLink
				? itemOutsideLink.map((i) => {
						return new b.navbar.item({ col: [6, "lg-auto"] }, [
							new b.navbar.link(
								{
									paddingY: 2,
									paddingX: [0, "lg-2"],
									textColor: textColor,
									href: i.href,
									target: i.onclick ? undefined : "_blank",
									on: { click: i.onclick },
								},
								new b.caption({ icon: i.icon, labelDisplay: "lg-none" }, i.label)
							),
						]);
				  })
				: []),
			...(itemVersion ? itemVersion : []),
			...(itemBootswatch ? itemBootswatch : []),
			...(itemTheme ? itemTheme : []),
		]),
	];
};

const genInsideLink = (
	textColor: core.bootstrapType.textColor,
	itemInsideLink?: IAttrItemInsideLink[],
	currentInsideLink?: string
) => {
	if (itemInsideLink) {
		return [
			new h.hr({ display: "lg-none", textColor: "light" }),
			new b.navbar.itemcontainer(
				{ flex: ["wrap", "row"], class: "bs-navbar-nav", id: "bs-inside-link" },
				itemInsideLink.map((i) => {
					return new b.navbar.item({ col: [6, "lg-auto"] }, [
						new b.navbar.link(
							{
								paddingY: 2,
								paddingX: [0, "lg-2"],
								href: "#",
								active: i.value === currentInsideLink,
								textColor: textColor,
								data: { value: i.value },
								on: {
									click: (_e) => {
										changeInsideLink(i.value);
									},
								},
							},
							i.label
						),
					]);
				})
			),
		];
	} else {
		return [];
	}
};

const genMenu = (itemMenu?: IAttrItemMenu[], currentMenu?: string) => {
	if (itemMenu) {
		return itemMenu.map((i) => {
			return new h.li({ class: "bs-links-group", paddingY: 2 }, [
				new h.strong(
					{
						class: "bs-links-heading",
						display: "flex",
						width: 100,
						alignItem: "center",
						fontWeight: "semibold",
					},
					new b.caption({ icon: i.icon }, i.label)
				),
				new h.ul(
					{
						unstyle: true,
						fontWeight: "normal",
						paddingBottom: 2,
						small: true,
					},
					i.item.map((j) => {
						let active = j.value === currentMenu ? true : false;

						return new h.li(
							new h.a(
								{
									class: ["bs-links-link", active ? "active" : undefined],
									display: "inline-block",
									rounded: true,
									href: "#",
									aria: { current: active ? "page" : undefined },
									data: {
										value: j.value,
									},
									on: {
										click: (_e) => {
											changeMenu(j.value);
										},
									},
								},
								j.label
							)
						);
					})
				),
			]);
		});
	} else {
		return [];
	}
};

const genIntro = (content?: IAttrContent) => {
	if (content) {
		if (content.loading) {
			return new h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
				new e.pagetitle(
					{
						loading: true,
					},
					core.placeholder(1, 3)
				),
				new e.description({ loadingPlaceholderAnimation: "wave" }, core.placeholder(10, 15)),
			]);
		} else {
			return new h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
				content.title
					? new e.pagetitle(
							{
								sourceWeb: content.sourceWeb,
								sourceUrl: content.sourceUrl,
								addedVersion: content.addedVersion,
							},
							content.title ? content.title : ""
					  )
					: "",
				content.description ? new e.description(content.description) : "",
			]);
		}
	} else {
		return "";
	}
};

interface IAttrTocTemp {
	deep: number;
	item: IAttrTocItem;
}

const genToc = (content?: IAttrContent) => {
	if (content && content.item && Array.isArray(content.item)) {
		let t: IAttrTocTemp[] = [];

		//get title
		content.item.forEach((i) => {
			if (core.isTag<e.title>(i) && i.tag === "h2") {
				if (i.attr?.id && i.attr?.data?.text) {
					let item = { href: `#${i.attr?.id}`, label: i.attr?.data?.text as string };
					t.push({
						deep: 0,
						item: item,
					});
				}
			} else if (core.isTag<e.subtitle>(i) && i.tag === "h3") {
				if (i.attr?.id && i.attr?.data?.text) {
					let item = { href: `#${i.attr?.id}`, label: i.attr?.data?.text as string };

					t.push({
						deep: 1,
						item: item,
					});
				}
			} else if (core.isTag<e.subtitle>(i) && i.tag === "h4") {
				if (i.attr?.id && i.attr?.data?.text) {
					let item = { href: `#${i.attr?.id}`, label: i.attr?.data?.text as string };

					t.push({
						deep: 2,
						item: item,
					});
				}
			}
		});

		//detect same id
		const listOfHref = t.map((i) => i.item.href);
		const duplicateItem = listOfHref.filter((i, ix) => listOfHref.indexOf(i) !== ix);
		if (duplicateItem && duplicateItem.length > 0) {
			console.warn(`Found ${duplicateItem.length} anchor in ${content.title}.`, duplicateItem);
		}

		//arrange title
		let u: IAttrTocItem[] = [];
		if (t && t.length > 0) {
			t.forEach((i) => {
				if (i.deep === 0) {
					u.push(i.item);
				} else if (i.deep === 1) {
					if (!u[u.length - 1].item) {
						u[u.length - 1].item = [];
					}

					u[u.length - 1].item!.push(i.item);
				} else if (i.deep === 2) {
					let y = u.length - 1;
					let x = u[y].item!.length - 1;

					if (!u[y].item![x].item) {
						u[y].item![x].item = [];
					}

					u[y].item![x].item!.push(i.item);
				}
			});
		}

		//process toc
		if (u.length > 1) {
			return new h.div(
				{
					class: "bs-toc",
					marginTop: 3,
					marginBottom: [5, "lg-5"],
					marginStart: [0, "md-3", "lg-0"],
					marginY: "lg-0",
					paddingStart: "xl-3",
					textColor: "body-secondary",
				},
				[
					new b.collapse.button(
						{
							color: "link",
							padding: "md-0",
							marginBottom: [2, "md-0"],

							textDecoration: "none",
							class: "bs-toc-toggle",
							display: "md-none",
							target: "#tocContents",
							controlfor: "tocContents",
						},
						[
							"On this page",
							new b.icon({
								id: "chevron-expand",
								display: "md-none",
								marginStart: 2,
								aria: { hidden: "true" },
							}),
						]
					),
					new h.h(5, { display: ["none", "md-block"], fontSize: 6, marginY: 2 }, "On this page"),
					new h.hr({ display: ["none", "md-block"], marginY: 2 }),
					new b.collapse.container(
						{
							id: "tocContents",
							class: "bs-toc-collapse",
						},
						new h.nav(
							{ id: "TableOfContents" },
							new h.ul(
								{
									marginStart: [3, "md-0"],
								},
								content.loading
									? u.map((_i) => {
											return new h.li(
												{ loadingPlaceholderAnimation: "wave" },
												core.placeholder(1, 3, 1, 3)
											);
									  })
									: u.map((i) => {
											return new h.li([
												new h.a({ href: i.href }, i.label),
												i.item
													? new h.ul(
															i.item.map((j) => {
																return new h.li([
																	new h.a({ href: j.href }, j.label),
																	j.item
																		? new h.ul(
																				j.item.map((k) => {
																					return new h.li(
																						new h.a(
																							{ href: k.href },
																							k.label
																						)
																					);
																				})
																		  )
																		: "",
																]);
															})
													  )
													: "",
											]);
									  })
							)
						)
					),
				]
			);
		} else {
			return "";
		}
	} else {
		return "";
	}
};

const genContent = (content?: IAttrContent) => {
	if (content && content.item) {
		return new b.scrollspy(
			{
				target: "#TableOfContents",
				smooth: true,
				class: "bs-content",
				paddingStart: "lg-2",
				rootMargin: "0px 0px -40%",
			},
			content.item
		);
	} else {
		return "";
	}
};

const genFooter = (itemFooter?: IAttrFooter[]) => {
	if (itemFooter) {
		return itemFooter.map((i, ix) => {
			return new h.div({ col: [6, "lg-2"], marginBottom: 3, offset: ix === 0 ? "lg-1" : undefined }, [
				new h.h(5, i.title),
				new h.ul(
					{ unstyle: true },
					i.item.map((j) => {
						return new h.li({ marginBottom: 2 }, new h.a({ href: j.href }, j.label));
					})
				),
			]);
		});
	} else {
		return [];
	}
};

export const genMainContent = (content?: IAttrContent) => {
	if (content?.loading) {
		content.item = Array(core.rndBetween(3, 10))
			.fill("")
			.map((i) => {
				return [
					new e.title({ loadingPlaceholderAnimation: "wave" }, core.placeholder(3, 6, 1, 3)),
					...Array(core.rndBetween(1, 3))
						.fill("")
						.map(() => {
							return new e.text({ loadingPlaceholderAnimation: "wave" }, core.placeholder(10, 20));
						}),
					new e.item(new b.card.container({ style: { minHeight: "18rem" } }, new b.card.body(""))),
				];
			})
			.flat();

		return [genIntro(content), genToc(content), genContent(content)];
	} else {
		return [genIntro(content), genToc(content), genContent(content)];
	}
};

export interface IBsMainContainer extends core.IAttr {
	icon?: I.B.Icon;
	name?: string;

	textColor?: core.bootstrapType.textColor;
	bgColor?: core.bootstrapType.bgColor;

	itemOutsideLink?: IAttrItemOutsideLink[];

	itemMenu?: IAttrItemMenu[];
	itemInsideLink?: IAttrItemInsideLink[];
	itemTheme?: IAttrItemTheme[];
	itemBootswatch?: IAttrItemBootswatch[];
	itemVersion?: IAttrItemVersion[];
	itemFooter?: IAttrFooter[];

	currentMenu?: string;
	currentInsideLink?: string;
	currentTheme?: availabelTheme;
	currentBootswatch?: string;
	currentVersion?: string;

	content?: IAttrContent;
}

const convert = (attr: IBsMainContainer) => {
	attr.class = core.mergeClass(attr.class, "bs-main-root");
	attr.elem = [
		new b.navbar.containerHeader(
			{
				expand: "lg",
				sticky: "top",
				bgColor: attr.bgColor || "primary",
				bgGradient: true,
				shadow: true,
				padding: 2,
			},
			[
				new b.navbar.innercontainerNav(
					{
						class: "bs-gutter",
						container: "xxl",
						padding: 0,
						flex: ["wrap", "lg-nowrap"],
						label: "Main navigation",
					},
					[
						new h.div({ class: "bs-navbar-toggle" }, [
							new b.navbar.toggle.offcanvas(
								{
									class: "bs-noshadow",
									padding: 2,
									target: "#bsSidebar",
									controlfor: "bsSidebar",
									label: "Toggle docs navigation",
									textColor: attr.textColor || "light",
								},
								b.icon.bi("list")
							),
						]),

						new b.navbar.brand(
							{
								href: "#",
								label: attr.name || "Bootstrap",
								marginEnd: ["lg-2", 0],
								fontSize: 6,
								padding: 0,
								textColor: attr.textColor || "light",
							},
							attr.icon ? new b.icon(attr.icon) : b.icon.brand("bootstrap", { weight: "xl" })
						),
						new h.div({ display: "flex" }, [
							new b.navbar.toggle.offcanvas(
								{
									class: "bs-noshadow",
									display: ["flex", "lg-none"],
									order: 3,
									padding: 2,
									target: "#bsNavbar",
									controlfor: "bsNavbar",
									label: "Toggle navigation",
									textColor: attr.textColor || "light",
								},
								b.icon.bi("three-dots")
							),
						]),
						new b.offcanvas.container(
							{
								id: "bsNavbar",
								placement: "end",
								show: "lg",
								flex: "grow-1",
								labelledby: "bsNavbarOffcanvasLabel",
								scroll: true,
							},
							[
								new b.offcanvas.header(
									{ paddingX: 4, paddingBottom: 0, bgColor: attr.bgColor || "primary" },
									[
										new b.offcanvas.title(
											{ id: "bsNavbarOffcanvasLabel", textColor: attr.textColor || "light" },
											attr.name || "Bootstrap"
										),
										new b.offcanvas.btnclose({ target: "#bsNavbar", white: true }),
									]
								),
								new b.offcanvas.body(
									{ padding: [4, "lg-0"], paddingTop: 0, bgColor: attr.bgColor || "primary" },
									[
										...genInsideLink(
											attr.textColor || "primary",
											attr.itemInsideLink,
											attr.currentInsideLink
										),
										...(attr.itemOutsideLink ||
										attr.itemVersion ||
										attr.itemTheme ||
										attr.itemBootswatch
											? genOutsideLink(
													attr.textColor || "primary",
													attr.itemOutsideLink,
													genVersion(
														attr.textColor || "primary",
														"@printf83/bsts",
														attr.itemVersion,
														attr.currentVersion
													),
													genBootswatch(
														attr.textColor || "primary",
														attr.itemBootswatch,
														attr.currentBootswatch
													),
													genTheme(
														attr.textColor || "primary",
														attr.itemTheme,
														attr.currentTheme
													)
											  )
											: []),
									]
								),
							]
						),
					]
				),
			]
		),

		new h.div({ class: ["bs-gutter", "bs-layout"], container: "xxl", marginTop: 3, marginY: "md-4" }, [
			new h.aside({ class: "bs-sidebar" }, [
				new b.offcanvas.container(
					{
						id: "bsSidebar",
						show: "lg",
						placement: "start",
						labelledby: "bsSidebarOffcanvasLabel",
					},
					[
						new b.offcanvas.header({ border: "bottom" }, [
							new b.offcanvas.title({ id: "bsSidebarOffcanvasLabel" }, "Browse docs"),
							new b.offcanvas.btnclose({ target: "#bsSidebar" }),
						]),
						new b.offcanvas.body([
							new h.nav({ id: "bs-menu", class: "bs-links", width: 100, label: "Docs navication" }, [
								new h.ul(
									{
										class: "bs-links-nav",
										unstyle: true,
										marginBottom: 0,
										paddingBottom: [3, "md-2"],
										paddingEnd: "lg-2",
										data: {
											"bs-dismiss": "offcanvas",
											"bs-target": "#bsSidebar",
										},
									},

									genMenu(attr.itemMenu, attr.currentMenu)
								),
							]),
						]),
					]
				),
			]),
			new h.main({ order: 1, class: "bs-main", id: "bs-main" }, [
				genIntro(attr.content),
				genToc(attr.content),
				genContent(attr.content),
			]),
		]),
		new h.footer(
			{ class: "bs-footer", paddingY: [4, "md-5"], marginTop: 5, bgColor: "body-tertiary" },
			new h.div(
				{ container: true, paddingY: 4, paddingX: [4, "md-3"], textColor: "body-secondary" },
				new h.div({ row: true }, [
					new h.div({ col: "lg-3", marginBottom: 3 }, [
						new h.a(
							{
								display: "inline-flex",
								alignItem: "center",
								marginBottom: 2,
								textColor: "body-secondary",
								textDecoration: "none",
								href: "#",
								label: attr.name || "Bootstrap",
								on: {
									click: () => {
										window.scroll(0, 0);
									},
								},
							},
							[
								attr.icon ? new b.icon(attr.icon) : b.icon.brand("bootstrap", { weight: "xl" }),
								new h.span({ fontSize: 5, marginStart: 2 }, attr.name || "Bootstrap"),
							]
						),
						new h.ul({ unstyle: true, class: "small" }, [
							new h.li({ marginBottom: 2 }, [
								new h.strong({ textColor: "primary" }, "Disclaimer! "),
								"This is {{s::not a real Bootstrap}} website. This is only a {{s::Bootstrap TS test website}} to test {{https://github.com/printf83/bsts::@printf83/bsts}} library and make sure it's fully support Bootstrap. ",
								"Bootsrap is designed and built with all the love in the world by the {{https://getbootstrap.com/docs/5.3/about/team/::Bootstrap team}} with the help of {{https://github.com/twbs/bootstrap/graphs/contributors::Bootstrap contributors}}.",
							]),
							new h.li(
								{ marginBottom: 2 },
								"Code licensed {{https://github.com/twbs/bootstrap/blob/main/LICENSE::MIT}}, docs {{https://creativecommons.org/licenses/by/3.0/::CC BY 3.0}}."
							),
							new h.li({ marginBottom: 2 }, "Currently v5.3.0."),
						]),
					]),
					...genFooter(attr.itemFooter),
				])
			)
		),
	];

	delete attr.icon;
	delete attr.name;

	delete attr.textColor;
	delete attr.bgColor;

	delete attr.itemOutsideLink;

	delete attr.itemMenu;
	delete attr.itemInsideLink;
	delete attr.itemTheme;
	delete attr.itemBootswatch;
	delete attr.itemVersion;
	delete attr.itemFooter;

	delete attr.currentMenu;
	delete attr.currentInsideLink;
	delete attr.currentTheme;
	delete attr.currentBootswatch;
	delete attr.currentVersion;

	delete attr.content;

	return attr;
};

export class container extends h.div {
	constructor();
	constructor(attr: IBsMainContainer);
	constructor(...arg: any[]) {
		super(core.bsConsNoElemArg<IBsMainContainer>(convert, arg));
	}
}

export const Container = (Attr?: IBsMainContainer) => core.genTagClass<container, IBsMainContainer>(container, Attr);

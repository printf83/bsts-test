import { core, b, h, I } from "@printf83/bsts";
import { IAttrItemBootswatch, genBootswatch } from "./bootswatch.js";
import { IAttrItemTheme, availabelTheme, setupTheme } from "./theme.js";
import { IAttrItemInsideLink, setupInsideLink } from "./insidelink.js";
import { IOutsideLink, setupOutsideLink } from "./outsidelink.js";
import { IMenu, setupMenu } from "./menu.js";
import { IFooter, setupFooter } from "./footer.js";
import { IContent, setupContentContainer } from "./content.js";
import { showSearchDialog } from "./search.js";

export const dispatchCustomEvent = (root: Element | null, eventName: string, value?: string) => {
	if (root) {
		if (value) {
			core.requestIdleCallback(() => {
				root.dispatchEvent(new CustomEvent(eventName, { detail: value }));
			}, 300);
		} else {
			core.requestIdleCallback(() => {
				root.dispatchEvent(new CustomEvent(eventName));
			}, 300);
		}
	}
};

export interface IBsMainContainer extends core.IAttr {
	icon?: I.B.Icon;
	name?: string;

	textColor?: core.bootstrapType.textColor;
	bgColor?: core.bootstrapType.bgColor;

	itemOutsideLink?: IOutsideLink[];

	itemMenu?: IMenu[];
	itemInsideLink?: IAttrItemInsideLink[];
	itemTheme?: IAttrItemTheme[];
	itemBootswatch?: IAttrItemBootswatch[];
	itemFooter?: IFooter[];

	currentMenu?: string;
	currentInsideLink?: string;
	currentTheme?: availabelTheme;
	currentBootswatch?: string;

	content?: IContent;
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
								on: {
									click: () => {
										window.scrollTo(0, 0);
									},
								},
							},
							attr.icon ? new b.icon(attr.icon) : new b.icon({ id: "bootstrap", fontSize: 3 })
						),

						new h.div({ display: "flex", class: "bs-navbar-toggle" }, [
							new h.div(
								{
									class: "bs-search",
									on: {
										click: (_e) => {
											showSearchDialog();
										},
									},
								},
								new h.button(
									{
										type: "button",
										class: "bs-search-button",
										aria: { label: "Search" },
										display: "flex",
										justifyContent: "between",
										alignItem: "center",
										focusRing: true,
									},
									[
										new h.span(
											{
												class: "bs-search-button-container",
											},
											[new b.icon({ class: "bs-search-icon", id: "search" }), new h.span({ class: "bs-search-button-placeholder", marginStart: 2 }, "Search")]
										),
										new h.span(
											{
												class: "bs-search-button-keys",
											},
											[new h.kbd({ class: "bs-search-button-key" }, new h.span({ style: { fontSize: "0.75em" } }, "CTRL")), new h.kbd({ class: "bs-search-button-key" }, "K")]
										),
									]
								)
							),

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
								new b.offcanvas.header({ paddingX: 4, paddingBottom: 0, bgColor: attr.bgColor || "primary" }, [
									new b.offcanvas.title({ id: "bsNavbarOffcanvasLabel", textColor: attr.textColor || "light" }, attr.name || "Bootstrap"),
									new b.offcanvas.btnclose({ target: "#bsNavbar", white: true }),
								]),
								new b.offcanvas.body({ padding: [4, "lg-0"], paddingTop: 0, bgColor: attr.bgColor || "primary" }, [
									...setupInsideLink(attr.textColor || "primary", attr.itemInsideLink, attr.currentInsideLink),
									...(attr.itemOutsideLink || attr.itemTheme || attr.itemBootswatch
										? setupOutsideLink(attr.textColor || "primary", attr.itemOutsideLink, genBootswatch(attr.textColor || "primary", attr.itemBootswatch, attr.currentBootswatch), setupTheme(attr.textColor || "primary", attr.itemTheme, attr.currentTheme))
										: []),
								]),
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
						new b.offcanvas.header({ border: "bottom" }, [new b.offcanvas.title({ id: "bsSidebarOffcanvasLabel" }, "Browse docs"), new b.offcanvas.btnclose({ target: "#bsSidebar" })]),
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

									setupMenu(attr.itemMenu, attr.currentMenu)
								),
							]),
						]),
					]
				),
			]),

			setupContentContainer(attr.content),
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
										window.scrollTo(0, 0);
									},
								},
							},
							[attr.icon ? new b.icon(attr.icon) : new b.icon({ id: "bootstrap", fontSize: 3 }), new h.span({ fontSize: 5, marginStart: 2 }, attr.name || "Bootstrap")]
						),
						new h.ul({ unstyle: true, class: "small" }, [
							new h.li({ marginBottom: 2 }, [
								new h.strong({ textColor: "primary" }, "Disclaimer! "),
								"This is {{s::not a real Bootstrap}} website. This is only a {{s::Bootstrap TS test website}} to test {{https://github.com/printf83/bsts::@printf83/bsts}} library and make sure it's fully support Bootstrap. ",
								"Bootsrap is designed and built with all the love in the world by the {{https://getbootstrap.com/docs/5.3/about/team/::Bootstrap team}} with the help of {{https://github.com/twbs/bootstrap/graphs/contributors::Bootstrap contributors}}.",
							]),
							new h.li({ marginBottom: 2 }, "Code licensed {{https://github.com/twbs/bootstrap/blob/main/LICENSE::MIT}}, docs {{https://creativecommons.org/licenses/by/3.0/::CC BY 3.0}}."),
							new h.li({ marginBottom: 2 }, "Currently v5.3.0."),
						]),
					]),
					...setupFooter(attr.itemFooter),
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
	delete attr.itemFooter;

	delete attr.currentMenu;
	delete attr.currentInsideLink;
	delete attr.currentTheme;
	delete attr.currentBootswatch;

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

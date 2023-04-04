import { core } from "@printf83/bsts";
import { data } from "./data/_index.js";
import * as main from "./ctl/main/_index.js";

let CURRENT_PAGE = "doc_component_tooltip";

declare var PR: {
	prettyPrint: () => void;
};

let m = {
	doc: [
		{
			label: "Getting started",
			icon: { id: "book-half", color: "primary" },
			item: [{ label: "Introduction", value: "doc_gettingstarted_introduction" }],
		},
		{
			label: "Component",
			icon: { id: "menu-button-wide-fill", color: "info" },
			item: [
				{ label: "Accordion", value: "doc_component_accordion" },
				{ label: "Alert", value: "doc_component_alert" },
				{ label: "Badge", value: "doc_component_badge" },
				{ label: "Breadcrumb", value: "doc_component_breadcrumb" },
				{ label: "Button", value: "doc_component_button" },
				{ label: "Button group", value: "doc_component_btngroup" },
				{ label: "Card", value: "doc_component_card" },
				{ label: "Carousel", value: "doc_component_carousel" },
				{ label: "Close button", value: "doc_component_btnclose" },
				{ label: "Collapse", value: "doc_component_collapse" },
				{ label: "Dropdowns", value: "doc_component_dropdown" },
				{ label: "List group", value: "doc_component_list" },
				{ label: "Modal", value: "doc_component_modal" },
				{ label: "Navbar", value: "doc_component_navbar" },
				{ label: "Navs & tabs", value: "doc_component_nav" },
				{ label: "Offcanvas", value: "doc_component_offcanvas" },
				{ label: "Pagination", value: "doc_component_pagination" },
				{ label: "Placeholder", value: "doc_component_placeholder" },
				{ label: "Popovers", value: "doc_component_popover" },
				{ label: "Progress", value: "doc_component_progress" },
				{ label: "Scrollspy", value: "doc_component_scrollspy" },
				{ label: "Spinners", value: "doc_component_spinner" },
				{ label: "Toasts", value: "doc_component_toast" },
				{ label: "Tooltips", value: "doc_component_tooltip" },
			],
		},
	] as main.IAttrItemMenu[],
};

const getData = (value: string) => {
	let c = data(value);
	c.sourceUrl = `https://github.com/printf83/bsts-test/blob/main/src/data/${value}.ts`;
	c.sourceWeb = "Github";
	return c;
};

const onmenuchange = (value: string) => {
	window.scrollTo(0, 0);
	setTimeout(
		(value) => {
			let contentbody = document.getElementById("bs-main") as HTMLElement;
			core.replaceChild(contentbody, main.genMainContent(getData(value)));
			core.init(contentbody);

			setTimeout(() => {
				PR.prettyPrint();
			}, 300);
		},
		100,
		value
	);
};

const maincontainer = new main.container({
	name: "BSTS",
	bgColor: "primary",
	textColor: "light",
	icon: { class: "animate-icon", weight: "2xl", id: "node-js", type: "brand" },

	on: {
		"bs-menu-change": (e) => {
			onmenuchange((<CustomEvent>e).detail);
		},
	},

	itemMenu: m.doc,
	currentMenu: CURRENT_PAGE,

	content: getData(CURRENT_PAGE),

	itemInsideLink: [
		{ value: "doc", label: "Docs" },
		{ value: "example", label: "Examples" },
	],
	currentInsideLink: "doc",

	itemOutsideLink: [
		{ href: "#", icon: { id: "github" }, label: "Github" },
		{ href: "#", icon: { id: "twitter" }, label: "Twitter" },
		{ href: "#", icon: { id: "bootstrap" }, label: "Bootstrap" },
	],

	itemTheme: [
		{ value: "light", icon: { id: "sun-fill" }, label: "Light" },
		{ value: "dark", icon: { id: "moon-stars-fill" }, label: "Dark" },
		{ value: "auto", icon: { id: "circle-half" }, label: "Auto" },
	],
	currentTheme: "auto",

	itemVersion: [{ value: "0.1.71", label: "Latest (0.1.71)" }],
	currentVersion: "0.1.71",

	itemFooter: [
		{
			title: "Links",
			item: [
				{ href: "#", label: "Home" },
				{ href: "#", label: "Docs" },
				{ href: "#", label: "Examples" },
				{ href: "#", label: "Icons" },
				{ href: "#", label: "Themes" },
				{ href: "#", label: "Blog" },
				{ href: "#", label: "Swag Store" },
			],
		},
		{
			title: "Guides",
			item: [
				{ href: "#", label: "Getting started" },
				{ href: "#", label: "Starter template" },
				{ href: "#", label: "Webpack" },
				{ href: "#", label: "Parcel" },
				{ href: "#", label: "Vite" },
			],
		},
		{
			title: "Projects",
			item: [
				{ href: "#", label: "Bootstrap 5" },
				{ href: "#", label: "Bootstrap 4" },
				{ href: "#", label: "Icons" },
				{ href: "#", label: "RFS" },
				{ href: "#", label: "npm starter" },
			],
		},
		{
			title: "Community",
			item: [
				{ href: "#", label: "Issues" },
				{ href: "#", label: "Discussions" },
				{ href: "#", label: "Corporate sponsors" },
				{ href: "#", label: "Open Collective" },
				{ href: "#", label: "Stack Overflow" },
			],
		},
	],
});

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, maincontainer);
	core.init(body);
});

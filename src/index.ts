import { core } from "@printf83/bsts";
import { data } from "./data/_index.js";
import * as main from "./ctl/main/_index.js";

const cookie = {
	set: (name: string, value: string, expiredInDays?: number, path?: string) => {
		expiredInDays ??= 7;
		path ??= window.location.hostname;

		let date = new Date();
		date.setTime(date.getTime() + expiredInDays * 24 * 60 * 60 * 1000);
		const expires = `expires=${date.toUTCString()}`;
		document.cookie = `${name}=${value};${expires};path=${path}`;
	},
	delete: (name: string) => {
		cookie.set(name, "", -1);
	},
	get: (name: string) => {
		name = `${name}=`;
		const cDecoded = decodeURIComponent(document.cookie);
		const cArr = cDecoded.split("; ");
		let res: string | null = null;
		cArr.forEach((val) => {
			if (val.indexOf(name) === 0) res = val.substring(name.length);
		});
		return res;
	},
};

let CURRENT_PAGE = cookie.get("current_page") || "doc_gettingstarted_introduction";
let CURRENT_THEME = cookie.get("current_theme") || "auto";

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
			label: "Forms",
			icon: { id: "ui-radios", color: "primary" },
			item: [
				{ label: "Overview", value: "doc_form_overview" },
				{ label: "Form control", value: "doc_form_control" },
				{ label: "Select", value: "doc_form_select" },
				{ label: "Checks & radios", value: "doc_form_checkradio" },
				{ label: "Range", value: "doc_form_range" },
				{ label: "Input group", value: "doc_form_inputgroup" },
				{ label: "Floating labels", value: "doc_form_floatinglabel" },
			],
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
			cookie.set("current_page", value);
			//-------------------------------
			// TODO :  set location without reload
			// https://stackoverflow.com/questions/824349/how-do-i-modify-the-url-without-reloading-the-page
			// location.href = `?d=${value}`;
			//-------------------------------
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

const onthmemechange = (value: string) => {
	cookie.set("current_theme", value);
	document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", value);
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
		"bs-theme-change": (e) => {
			onthmemechange((<CustomEvent>e).detail);
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
	currentTheme: CURRENT_THEME as main.IAttrBSMainContainer["currentTheme"],

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
	onthmemechange(CURRENT_THEME);
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, maincontainer);
	core.init(body);
});

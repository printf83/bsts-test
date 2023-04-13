import { core } from "@printf83/bsts";
import { doc } from "./doc/_index.js";
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

let CURRENT_PAGE: string | null = null;
let CURRENT_THEME = cookie.get("current_theme") || "auto";

declare var PR: {
	prettyPrint: () => void;
};

let m = {
	doc: [
		{
			label: "Getting started",
			icon: { id: "book-half", color: "primary" },
			item: [{ label: "Introduction", value: "doc/gettingstarted/introduction" }],
		},
		{
			label: "Forms",
			icon: { id: "ui-radios", color: "primary" },
			item: [
				{ label: "Overview", value: "doc/forms/overview" },
				{ label: "Form control", value: "doc/forms/control" },
				{ label: "Select", value: "doc/forms/select" },
				{ label: "Checks & radios", value: "doc/forms/check_radio" },
				{ label: "Range", value: "doc/forms/range" },
				{ label: "Input group", value: "doc/forms/input_group" },
				{ label: "Floating labels", value: "doc/forms/floating_label" },
				{ label: "Layout", value: "doc/forms/layout" },
				{ label: "Validation", value: "doc/forms/validation" },
			],
		},
		{
			label: "Component",
			icon: { id: "menu-button-wide-fill", color: "info" },
			item: [
				{ label: "Accordion", value: "doc/components/accordion" },
				{ label: "Alert", value: "doc/components/alert" },
				{ label: "Badge", value: "doc/components/badge" },
				{ label: "Breadcrumb", value: "doc/components/breadcrumb" },
				{ label: "Button", value: "doc/components/button" },
				{ label: "Button group", value: "doc/components/button_group" },
				{ label: "Card", value: "doc/components/card" },
				{ label: "Carousel", value: "doc/components/carousel" },
				{ label: "Close button", value: "doc/components/close_button" },
				{ label: "Collapse", value: "doc/components/collapse" },
				{ label: "Dropdowns", value: "doc/components/dropdown" },
				{ label: "List group", value: "doc/components/list" },
				{ label: "Modal", value: "doc/components/modal" },
				{ label: "Navbar", value: "doc/components/navbar" },
				{ label: "Navs & tabs", value: "doc/components/nav" },
				{ label: "Offcanvas", value: "doc/components/offcanvas" },
				{ label: "Pagination", value: "doc/components/pagination" },
				{ label: "Placeholder", value: "doc/components/placeholder" },
				{ label: "Popovers", value: "doc/components/popover" },
				{ label: "Progress", value: "doc/components/progress" },
				{ label: "Scrollspy", value: "doc/components/scrollspy" },
				{ label: "Spinners", value: "doc/components/spinner" },
				{ label: "Toasts", value: "doc/components/toast" },
				{ label: "Tooltips", value: "doc/components/tooltip" },
			],
		},
		{
			label: "Helpers",
			icon: { id: "magic", color: "warning" },
			item: [
				{ label: "Clearfix", value: "doc/helpers/clearfix" },
				{ label: "Color & background", value: "doc/helpers/color_background" },
				{ label: "Colored links", value: "doc/helpers/colored_links" },
				{ label: "Focus ring", value: "doc/helpers/focus_ring" },
				{ label: "Icon link", value: "doc/helpers/icon_link" },
				{ label: "Position", value: "doc/helpers/position" },
				{ label: "Ratio", value: "doc/helpers/ratio" },
				{ label: "Stacks", value: "doc/helpers/stacks" },
				{ label: "Stretched link", value: "doc/helpers/stretched_link" },
				{ label: "Text truncation", value: "doc/helpers/text_truncation" },
				{ label: "Vertical rule", value: "doc/helpers/vertical_rule" },
				{ label: "Visually hidden", value: "doc/helpers/visually_hidden" },
			],
		},
		{
			label: "Utilities",
			icon: { id: "braces-asterisk", color: "danger" },
			item: [
				{ label: "API", value: "doc/utilities/api" },
				{ label: "Background", value: "doc/utilities/background" },
				{ label: "Borders", value: "doc/utilities/border" },
				{ label: "Colors", value: "doc/utilities/color" },
				{ label: "Display", value: "doc/utilities/display" },
				{ label: "Flex", value: "doc/utilities/flex" },
				{ label: "Float", value: "doc/utilities/float" },
				{ label: "Interactions", value: "doc/utilities/interactions" },
				{ label: "Link", value: "doc/utilities/link" },
				{ label: "Object fit", value: "doc/utilities/object_fit" },
				{ label: "Opacity", value: "doc/utilities/opacity" },
				{ label: "Overflow", value: "doc/utilities/overflow" },
				{ label: "Position", value: "doc/utilities/position" },
				{ label: "Shadows", value: "doc/utilities/shadow" },
				{ label: "Sizing", value: "doc/utilities/sizing" },
				{ label: "Spacing", value: "doc/utilities/spacing" },
				{ label: "Text", value: "doc/utilities/text" },
				{ label: "Vertical align", value: "doc/utilities/vertical_align" },
				{ label: "Visibility", value: "doc/utilities/visibility" },
				{ label: "Z-index", value: "doc/utilities/zindex" },
			],
		},
	] as main.IAttrItemMenu[],
};

const notfoundData = (value: string) => {
	return {
		title: "Oooopppsss!",
		description: `Content {{${value}}} not found`,
		sourceUrl: `https://github.com/printf83/bsts-test/blob/main/src/doc/_index.ts`,
		sourceWeb: "Github",
	} as main.IAttrContent;
};

const getData = (value: string) => {
	let tValue = value.split("/");
	if (tValue.length === 3 && tValue[0] === "doc") {
		let c = doc(value);
		if (c) {
			c.sourceUrl = `https://github.com/printf83/bsts-test/blob/main/src/${value}.ts`;
			c.sourceWeb = "Github";
			return c;
		} else {
			return notfoundData(value);
		}
	} else {
		return notfoundData(value);
	}
};

const onmenuchange = (value: string, isfirsttime?: boolean) => {
	setTimeout(
		(value) => {
			isfirsttime ??= false;
			//-------------------------------
			// TODO :  set location without reload
			// https://stackoverflow.com/questions/824349/how-do-i-modify-the-url-without-reloading-the-page
			// location.href = `?d=${value}`;
			//-------------------------------
			let docId: string = value;
			let anchorId: string | null = null;

			if (value.indexOf("#") > -1) {
				let tempValue = value.split("#");
				docId = tempValue[0];
				anchorId = tempValue[1];
			}

			//chekc if value have #
			if (CURRENT_PAGE !== docId) {
				//keep current page in cookie
				CURRENT_PAGE = docId;
				cookie.set("current_page", docId);

				//remove active popup
				core.removeActiveModal();
				core.removeActivePopover();
				core.removeActiveTooltip();

				//generate content
				let contentbody = document.getElementById("bs-main") as HTMLElement;
				core.replaceChild(contentbody, main.genMainContent(getData(docId)));

				//rename page title and push history
				let pagetitle = document.querySelector("h1.display-5.page-title-text")?.textContent;
				document.title = `${pagetitle} · Bootstrap TS`;
				core.init(contentbody);

				setTimeout(() => {
					PR.prettyPrint();
				}, 300);
			}

			//focus to e
			if (anchorId) {
				let anchorNode = document.querySelectorAll(`a.anchor-link[href="#${anchorId}"]`);
				if (anchorNode) {
					let anchorElem = anchorNode[0] as HTMLElement;
					let elemPosition = anchorElem.getBoundingClientRect().top;
					let offsetElemPosition = elemPosition + window.pageYOffset - 60;
					window.scrollTo(0, offsetElemPosition);
				}
			} else {
				if (!isfirsttime) {
					console.log("is not first");
					window.scrollTo(0, 0);
				}
			}
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
	name: "Bootstrap TS",
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

	// currentMenu: CURRENT_PAGE,
	// content: getData(CURRENT_PAGE),

	itemInsideLink: [
		{ value: "doc", label: "Docs" },
		{ value: "example", label: "Examples" },
	],
	currentInsideLink: "doc",

	itemOutsideLink: [
		{ href: "https://github.com/printf83/bsts", icon: { id: "github", type: "brand" }, label: "Github" },
		{ href: "https://twitter.com/printf83", icon: { id: "twitter", type: "brand" }, label: "Twitter" },
		{ href: "https://getbootstrap.com/", icon: { id: "bootstrap", type: "brand" }, label: "Bootstrap" },
	],

	itemTheme: [
		{ value: "light", icon: { id: "sun-fill" }, label: "Light" },
		{ value: "dark", icon: { id: "moon-stars-fill" }, label: "Dark" },
		{ value: "auto", icon: { id: "circle-half" }, label: "Auto" },
	],
	currentTheme: CURRENT_THEME as main.IAttrBSMainContainer["currentTheme"],

	itemVersion: [{ value: "0.1.84", label: "Latest (0.1.84)" }],
	currentVersion: "0.1.84",

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

const highlightCurrentMenu = (value: string) => {
	let bsMenu = document.getElementById("bs-menu") as HTMLElement;
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
};

core.documentReady(() => {
	onthmemechange(CURRENT_THEME);
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, maincontainer);
	onmenuchange(cookie.get("current_page") || "doc/gettingstarted/introduction", true);
	highlightCurrentMenu(cookie.get("current_page") || "doc/gettingstarted/introduction");

	document.addEventListener(
		"bs-navigate",
		(e) => {
			let value = (<CustomEvent>e).detail;
			highlightCurrentMenu(value);
			onmenuchange(value);
		},
		false
	);
});

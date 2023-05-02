import { core } from "@printf83/bsts";
import { doc } from "./docs/_index.js";
import * as main from "./ctl/main/_index.js";

const cookie = {
	set: (name: string, value: string, expiredInDays?: number, path?: string) => {
		expiredInDays ??= 7;
		path ??= window.location.hostname;

		let date = new Date();
		date.setTime(date.getTime() + expiredInDays * 24 * 60 * 60 * 1000);
		const expires = `expires=${date.toUTCString()}`;
		document.cookie = `${name}=${value};${expires};SameSite=Strict;path=${path}`;
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

const getCurrentTheme = () => {
	let themeCookie = cookie.get("current_theme");
	if (themeCookie) {
		return themeCookie;
	} else {
		let defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		cookie.set("current_theme", defaultTheme);
		return defaultTheme;
	}
};

let CURRENT_PAGE: string | null = null;
let CURRENT_THEME = getCurrentTheme();

declare var PR: {
	prettyPrint: () => void;
};

let m = {
	doc: [
		{
			label: "Getting started",
			icon: { id: "book-half", color: "primary" },
			item: [{ label: "Introduction", value: "docs/gettingstarted/introduction" }],
		},
		{
			label: "Customize",
			icon: { id: "palette2", color: "danger" },
			item: [
				{ label: "Color", value: "docs/customize/color" },
				// { label: "Color", value: "docs/customize/color" },
			],
		},
		{
			label: "Layout",
			icon: { id: "grid-fill", color: "success" },
			item: [
				{ label: "Breakpoints", value: "docs/layout/breakpoints" },
				{ label: "Containers", value: "docs/layout/containers" },
				{ label: "Grid", value: "docs/layout/grid" },
				{ label: "Columns", value: "docs/layout/columns" },
				{ label: "Gutters", value: "docs/layout/gutters" },
				{ label: "Utilities", value: "docs/layout/utilities" },
				{ label: "Z-index", value: "docs/layout/zindex" },
				{ label: "CSS Grid", value: "docs/layout/cssgrid" },
			],
		},
		{
			label: "Content",
			icon: { id: "file-earmark-richtext", color: "secondary" },
			item: [
				{ label: "Reboot", value: "docs/content/reboot" },
				{ label: "Typography", value: "docs/content/typography" },
				{ label: "Images", value: "docs/content/images" },
				{ label: "Tables", value: "docs/content/tables" },
				{ label: "Figures", value: "docs/content/figures" },
			],
		},
		{
			label: "Forms",
			icon: { id: "ui-radios", color: "primary" },
			item: [
				{ label: "Overview", value: "docs/forms/overview" },
				{ label: "Form control", value: "docs/forms/control" },
				{ label: "Select", value: "docs/forms/select" },
				{ label: "Checks & radios", value: "docs/forms/check_radio" },
				{ label: "Range", value: "docs/forms/range" },
				{ label: "Input group", value: "docs/forms/input_group" },
				{ label: "Floating labels", value: "docs/forms/floating_label" },
				{ label: "Layout", value: "docs/forms/layout" },
				{ label: "Validation", value: "docs/forms/validation" },
			],
		},
		{
			label: "Component",
			icon: { id: "menu-button-wide-fill", color: "info" },
			item: [
				{ label: "Accordion", value: "docs/components/accordion" },
				{ label: "Alert", value: "docs/components/alert" },
				{ label: "Badge", value: "docs/components/badge" },
				{ label: "Breadcrumb", value: "docs/components/breadcrumb" },
				{ label: "Button", value: "docs/components/button" },
				{ label: "Button group", value: "docs/components/button_group" },
				{ label: "Card", value: "docs/components/card" },
				{ label: "Carousel", value: "docs/components/carousel" },
				{ label: "Close button", value: "docs/components/close_button" },
				{ label: "Collapse", value: "docs/components/collapse" },
				{ label: "Dropdowns", value: "docs/components/dropdown" },
				{ label: "List group", value: "docs/components/list" },
				{ label: "Modal", value: "docs/components/modal" },
				{ label: "Navbar", value: "docs/components/navbar" },
				{ label: "Navs & tabs", value: "docs/components/nav" },
				{ label: "Offcanvas", value: "docs/components/offcanvas" },
				{ label: "Pagination", value: "docs/components/pagination" },
				{ label: "Placeholder", value: "docs/components/placeholder" },
				{ label: "Popovers", value: "docs/components/popover" },
				{ label: "Progress", value: "docs/components/progress" },
				{ label: "Scrollspy", value: "docs/components/scrollspy" },
				{ label: "Spinners", value: "docs/components/spinner" },
				{ label: "Toasts", value: "docs/components/toast" },
				{ label: "Tooltips", value: "docs/components/tooltip" },
			],
		},
		{
			label: "Helpers",
			icon: { id: "magic", color: "warning" },
			item: [
				{ label: "Clearfix", value: "docs/helpers/clearfix" },
				{ label: "Color & background", value: "docs/helpers/color_background" },
				{ label: "Colored links", value: "docs/helpers/colored_links" },
				{ label: "Focus ring", value: "docs/helpers/focus_ring" },
				{ label: "Icon link", value: "docs/helpers/icon_link" },
				{ label: "Position", value: "docs/helpers/position" },
				{ label: "Ratio", value: "docs/helpers/ratio" },
				{ label: "Stacks", value: "docs/helpers/stacks" },
				{ label: "Stretched link", value: "docs/helpers/stretched_link" },
				{ label: "Text truncation", value: "docs/helpers/text_truncation" },
				{ label: "Vertical rule", value: "docs/helpers/vertical_rule" },
				{ label: "Visually hidden", value: "docs/helpers/visually_hidden" },
			],
		},
		{
			label: "Utilities",
			icon: { id: "braces-asterisk", color: "danger" },
			item: [
				{ label: "API", value: "docs/utilities/api" },
				{ label: "Background", value: "docs/utilities/background" },
				{ label: "Borders", value: "docs/utilities/borders" },
				{ label: "Colors", value: "docs/utilities/colors" },
				{ label: "Display", value: "docs/utilities/display" },
				{ label: "Flex", value: "docs/utilities/flex" },
				{ label: "Float", value: "docs/utilities/float" },
				{ label: "Interactions", value: "docs/utilities/interactions" },
				{ label: "Link", value: "docs/utilities/link" },
				{ label: "Object fit", value: "docs/utilities/object_fit" },
				{ label: "Opacity", value: "docs/utilities/opacity" },
				{ label: "Overflow", value: "docs/utilities/overflow" },
				{ label: "Position", value: "docs/utilities/position" },
				{ label: "Shadows", value: "docs/utilities/shadow" },
				{ label: "Sizing", value: "docs/utilities/sizing" },
				{ label: "Spacing", value: "docs/utilities/spacing" },
				{ label: "Text", value: "docs/utilities/text" },
				{ label: "Vertical align", value: "docs/utilities/vertical_align" },
				{ label: "Visibility", value: "docs/utilities/visibility" },
				{ label: "Z-index", value: "docs/utilities/zindex" },
			],
		},
	] as main.IAttrItemMenu[],
};

const notfoundData = (value: string) => {
	return {
		title: "Oooopppsss!",
		description: `Content {{${value} }}not found`,
		sourceUrl: `https://github.com/printf83/bsts-test/blob/main/src/doc/_index.ts`,
		sourceWeb: "Github",
	} as main.IAttrContent;
};

const getDataPromise = async (value: string, callback: (arg: main.IAttrContent | null) => void) => {
	doc(value).then((d) => {
		callback(d);
	});
};

const getData = (value: string, callback: (arg: main.IAttrContent) => void) => {
	let tValue = value.split("/");
	if (tValue.length === 3 && tValue[0] === "docs") {
		getDataPromise(value, (c) => {
			if (c) {
				c.sourceUrl = `https://github.com/printf83/bsts-test/blob/main/src/${value}.ts`;
				c.sourceWeb = "Github";
				callback(c);
			} else {
				callback(notfoundData(value));
			}
		});
	} else {
		callback(notfoundData(value));
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
				getData(docId, (docData) => {
					//keep current page in cookie
					CURRENT_PAGE = docId;
					cookie.set("current_page", docId);

					//remove active popup
					core.removeActiveModal();
					core.removeActivePopover();
					core.removeActiveTooltip();

					//generate content
					let contentbody = document.getElementById("bs-main") as Element;
					core.replaceChild(contentbody, main.genMainContent(docData));

					//rename page title and push history
					let pagetitle = document.querySelector("h1.display-5.page-title-text")?.textContent;
					document.title = `${pagetitle} · Bootstrap TS`;
					core.init(contentbody);

					focusToAnchor(anchorId, isfirsttime);

					setTimeout(() => {
						PR.prettyPrint();
					}, 300);
				});
			} else {
				//focus to e
				focusToAnchor(anchorId, isfirsttime);
			}
		},
		100,
		value
	);
};

const focusToAnchor = (anchorId: string | null, isfirsttime?: boolean) => {
	if (anchorId) {
		let anchorNode = document.querySelectorAll(`a.anchor-link[href="#${anchorId}"]`);
		if (anchorNode) {
			let anchorElem = anchorNode[0] as Element;
			let elemPosition = anchorElem.getBoundingClientRect().top;
			let offsetElemPosition = elemPosition + window.pageYOffset - 60;
			window.scrollTo(0, offsetElemPosition);
		}
	} else {
		if (!isfirsttime) {
			window.scrollTo(0, 0);
		}
	}
};

const onthmemechange = (value: string) => {
	cookie.set("current_theme", value);
	document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", value);
};

const maincontainer = main.Container({
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
	currentTheme: CURRENT_THEME as main.IBsMainContainer["currentTheme"],

	itemVersion: [{ value: "0.1.96", label: "Latest (0.1.96)" }],
	currentVersion: "0.1.96",

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
};

core.documentReady(() => {
	onthmemechange(CURRENT_THEME);
	let body = document.getElementById("main") as Element;
	core.replaceChild(body, maincontainer);
	onmenuchange(cookie.get("current_page") || "docs/gettingstarted/introduction", true);
	highlightCurrentMenu(cookie.get("current_page") || "docs/gettingstarted/introduction");

	document.addEventListener(
		"bs.navigate",
		(e) => {
			let value = (<CustomEvent>e).detail;
			highlightCurrentMenu(value);
			onmenuchange(value);
		},
		false
	);
});

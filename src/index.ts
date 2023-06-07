import { b, core, h } from "@printf83/bsts";
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

const getSavedTheme = () => {
	let themeCookie = cookie.get("current_theme");
	if (themeCookie) {
		return themeCookie;
	} else {
		return "auto";
	}
};

const onThemeChange = (value: string) => {
	const ICONFORMAT = "png";
	cookie.set("current_theme", value);
	const faviconEl = document.querySelector('link[rel="icon"]') as HTMLLinkElement;

	if (value === "auto") {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", "dark");
			faviconEl.setAttribute("href", `favicon-light.${ICONFORMAT}`);
		} else {
			document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", "light");
			faviconEl.setAttribute("href", `favicon.${ICONFORMAT}`);
		}
	} else {
		document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", value);
		if (value === "dark") {
			faviconEl.setAttribute("href", `favicon-light.${ICONFORMAT}`);
		} else {
			faviconEl.setAttribute("href", `favicon.${ICONFORMAT}`);
		}
	}
};

const getSavedBootswatch = () => {
	let bootswatchCookie = cookie.get("current_bootswatch");
	if (bootswatchCookie) {
		return bootswatchCookie;
	} else {
		return "default";
	}
};

const onBootswatchChange = (value: string) => {
	cookie.set("current_bootswatch", value);
	const bootstrapCssLink = document.getElementById("bootswatchCssLink") as HTMLLinkElement;

	if (bootstrapCssLink) {
		if (value === "default") {
			bootstrapCssLink.disabled = true;
			bootstrapCssLink.setAttribute("href", "");
		} else {
			bootstrapCssLink.disabled = false;
			bootstrapCssLink.setAttribute(
				"href",
				`https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/${value}/bootstrap.min.css`
			);
		}
	}
};

const setupBootswatch = () => {
	onBootswatchChange(CURRENT_BOOTSWATCH);
};

const setupThemeChanges = () => {
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
		if (getSavedTheme() === "auto") {
			onThemeChange("auto");
		}
	});
};

let CURRENT_THEME = getSavedTheme();
let CURRENT_BOOTSWATCH = getSavedBootswatch();
// let CURRENT_VERSION = "0.1.122";

declare var PR: {
	prettyPrint: () => void;
};

let m = {
	doc: [
		{
			label: "Getting started",
			icon: { id: "book-half", color: "primary" },
			item: [
				{ label: "Introduction", value: "docs/gettingstarted/introduction" },
				{ label: "Bootswatch", value: "docs/gettingstarted/bootswatch" },
			],
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
		{
			label: "Example",
			icon: { id: "code", color: "success" },
			item: [
				{ label: "Headers", value: "docs/example/headers" },
				{ label: "Heroes", value: "docs/example/heroes" },
				{ label: "Features", value: "docs/example/features" },
				{ label: "Sidebars", value: "docs/example/sidebars" },
				{ label: "Footers", value: "docs/example/footers" },
				{ label: "Dropdowns", value: "docs/example/dropdowns" },
			],
		},
	] as main.IAttrItemMenu[],
};

const dataNotFound = (value: string) => {
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
				callback(dataNotFound(value));
			}
		});
	} else {
		callback(dataNotFound(value));
	}
};

const loadDefaultDoc = () => {
	const { search } = window.location;
	if (search && search.startsWith("?d=")) {
		let docId: string = search.slice(3);
		let anchorId: string | null = null;

		if (docId.indexOf("#") > -1) {
			let tempValue = docId.split("#");
			docId = tempValue[0];
			anchorId = tempValue[1];
		}

		onMenuChange(`${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`, true);
		highlightCurrentMenu(docId);
	} else {
		onMenuChange(cookie.get("current_page") || "docs/gettingstarted/introduction", true);
		highlightCurrentMenu(cookie.get("current_page") || "docs/gettingstarted/introduction");
	}
};

const setLoading = (contentbody: Element) => {
	if (!contentbody.classList.contains("loading")) {
		contentbody.classList.add("loading");

		let a = [
			".page-title-text",
			".example-description",
			".example-text",
			".example-ul li",
			".example-ol li",
			".example-alert .alert",
			".example-item",
			".example-table .table td",
			".example-table .table th",
			".example-code .example-preview-container",
			".example-code .font-monospace small",
			".example-preview.card .card-header a.font-monospace",
			".example-preview.card .card-body pre",
			".example-title",
			".example-subtitle",
			".example-xsubtitle",
			".bs-toc ul li",
			".bs-toc h5",
		];

		a.forEach((selector) => {
			let m1: number = 10;
			let m2: number = 20;
			let m3: 1 | 2 | 3 | 4 | 5 | 6 = 1;
			let m4: 1 | 2 | 3 | 4 | 5 | 6 = 6;

			switch (selector) {
				case ".example-table .table td":
				case ".example-table .table th":
				case ".bs-toc h5":
				case ".bs-toc ul li":
				case ".example-xsubtitle":
				case ".example-subtitle":
				case ".example-title":
				case ".example-code .font-monospace small":
				case ".example-preview.card .card-header a.font-monospace":
				case ".page-title-text":
					m1 = 3;
					m2 = 3;
					m3 = 1;
					m4 = 4;
					break;
			}

			let elem = contentbody.querySelectorAll(selector);
			if (elem) {
				elem.forEach((i) => {
					core.appendChild(
						i,
						new h.div(
							{
								loadingPlaceholderAnimation: "wave",
							},
							core.placeholder(m1, m2, m3, m4)
						)
					);
				});
			}
		});
	}
};
const resetLoading = (contentbody: Element) => {
	if (contentbody.classList.contains("loading")) {
		contentbody.classList.remove("loading");
	}
};

const onMenuChange = (value: string, isfirsttime?: boolean, state?: "push" | "replace") => {
	isfirsttime ??= false;
	state ??= "push";

	let docId: string = value;
	let anchorId: string | undefined;

	if (value.indexOf("#") > -1) {
		let tempValue = value.split("#");
		docId = tempValue[0];
		anchorId = tempValue[1];
	}

	let contentbody = document.getElementById("bs-main") as Element;

	//set loading
	setLoading(contentbody);
	setTimeout(() => {
		getData(docId, (docData) => {
			//keep current page in cookie
			cookie.set("current_page", `${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);

			//remove active popup
			core.removeAllActivePopup();

			//generate content
			contentbody = core.replaceChild(contentbody, main.genMainContent(docData));

			//reset loading
			resetLoading(contentbody);

			//rename page title
			let pagetitle = document.querySelector("h1.display-5.page-title-text")?.textContent;
			let strPagetitle = pagetitle ? `${pagetitle} · Bootstrap TS` : "Bootstrap TS";
			const { origin, pathname } = window.location;
			document.title = strPagetitle;

			//set history
			if (state === "push") {
				window.history.pushState(
					{
						docId: docId,
						anchorId: anchorId,
						isfirsttime: isfirsttime,
					} satisfies IWindowState,
					strPagetitle,
					`${origin}${pathname}?d=${value}`
				);
			} else if (state === "replace") {
				window.history.replaceState(
					{
						docId: docId,
						anchorId: anchorId,
						isfirsttime: isfirsttime,
					} satisfies IWindowState,
					strPagetitle,
					`${origin}${pathname}?d=${value}`
				);
			}

			core.init(contentbody);
			focusToAnchor(anchorId, isfirsttime);

			setTimeout(() => {
				PR.prettyPrint();
			}, 10);
		});
	}, 0);
};

const setupBSNavigate = () => {
	document.addEventListener(
		"bs.navigate",
		(e) => {
			let value = (<CustomEvent>e).detail;
			highlightCurrentMenu(value);
			onMenuChange(value);
		},
		false
	);
};

interface IWindowState {
	docId?: string;
	anchorId?: string;
	isfirsttime?: boolean;
}

const setupWindowPopState = () => {
	window.onpopstate = function (e) {
		if (e.state) {
			const state: IWindowState = e.state as IWindowState;

			onMenuChange(
				`${state.docId}${state.anchorId ? "#" : ""}${state.anchorId ? state.anchorId : ""}`,
				true,
				"replace"
			);
			highlightCurrentMenu(state.docId);
		}
	};
};

const focusToAnchor = (anchorId?: string, isfirsttime?: boolean) => {
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

let _docDB: string[] = [];
const docDB = () => {
	if (_docDB.length > 0) {
		return _docDB;
	} else {
		_docDB = m.doc
			.map((i) => {
				return i.item.map((j) => {
					return j.value;
				});
			})
			.flat();

		return _docDB;
	}
};

const runMemoryTest = (count: number, max?: number) => {
	max ??= count;

	let mDB = docDB();
	let docId = mDB[core.rndBetween(0, mDB.length - 1)];

	if (count > 0) {
		setTimeout(() => {
			getData(docId, (docData) => {
				let contentbody = document.getElementById("bs-main") as Element;
				contentbody = core.replaceChild(contentbody, main.genMainContent(docData));
				highlightCurrentMenu(docId);
				core.init(contentbody);

				document.title = `${Math.floor(((max! - count) / max!) * 100)}% complete`;
				runMemoryTest(count - 1, max);
			});
		}, 0);
	} else {
		highlightCurrentMenu(docId);
		onMenuChange(docId);
	}
};

const mainContainer = main.Container({
	name: "Bootstrap TS",
	bgColor: "primary",
	textColor: "light",
	icon: { class: "animate-icon", weight: "2xl", id: "bootstrap", type: "brand" },
	on: {
		"bs-menu-change": (e) => {
			onMenuChange((<CustomEvent>e).detail);
		},
		"bs-theme-change": (e) => {
			onThemeChange((<CustomEvent>e).detail);
		},
		"bs-bootswatch-change": (e) => {
			onBootswatchChange((<CustomEvent>e).detail);
		},
	},

	itemMenu: m.doc,

	itemInsideLink: [{ value: "doc", label: "Docs" }],
	currentInsideLink: "doc",

	itemOutsideLink: [
		{
			href: "#",
			icon: { id: "cpu-fill" },
			label: "Memory test",
			onclick: (_event) => {
				b.modal.show(
					new b.modal.container(
						new b.modal.body([
							new h.p(
								"Open random page to detect memory leak. Please open Memory Monitor Program on your device and compare the memory diffrence before start memory leak test and after the test complete. You should have back your memory when the test complete."
							),
							new b.tabList.container(
								[10, 100, 1000, 5000, 10000].map((i) => {
									return new b.tabList.item(
										{
											href: "#",
											action: true,
											data: { "bs-toggle": "modal" },
											on: {
												click: (_event) => {
													runMemoryTest(i);
												},
											},
										},
										`Open ${i} random page`
									);
								})
							),
						])
					)
				);
			},
		},
		{ href: "https://github.com/printf83/bsts", icon: { id: "github" }, label: "Github" },
		{ href: "https://twitter.com/printf83", icon: { id: "twitter" }, label: "Twitter" },
		{ href: "https://getbootstrap.com/", icon: { id: "bootstrap", type: "brand" }, label: "Bootstrap" },
	],

	itemTheme: [
		{ value: "light", icon: { id: "sun-fill" }, label: "Light" },
		{ value: "dark", icon: { id: "moon-stars-fill" }, label: "Dark" },
		{ value: "auto", icon: { id: "circle-half" }, label: "Auto" },
	],
	currentTheme: CURRENT_THEME as main.IBsMainContainer["currentTheme"],

	// itemVersion: [{ value: CURRENT_VERSION, label: `Latest (${CURRENT_VERSION})` }],
	// currentVersion: CURRENT_VERSION,

	itemBootswatch: [
		{
			value: "default",
			label: "Default",
		},
		{ value: "cerulean", label: "Cerulean" },
		{ value: "cosmo", label: "Cosmo" },
		{ value: "cyborg", label: "Cyborg" },
		{ value: "darkly", label: "Darkly" },
		{ value: "flatly", label: "Flatly" },
		{ value: "journal", label: "Journal" },
		{ value: "litera", label: "Litera" },
		{ value: "lumen", label: "Lumen" },
		{ value: "lux", label: "Lux" },
		{ value: "materia", label: "Materia" },
		{ value: "minty", label: "Minty" },
		{ value: "morph", label: "Morph" },
		{ value: "pulse", label: "Pulse" },
		{ value: "quartz", label: "Quartz" },
		{ value: "sandstone", label: "Sandstone" },
		{ value: "simplex", label: "Simplex" },
		{ value: "sketchy", label: "Sketchy" },
		{ value: "slate", label: "Slate" },
		{ value: "solar", label: "Solar" },
		{ value: "spacelab", label: "Spacelab" },
		{ value: "superhero", label: "Superhero" },
		{ value: "united", label: "United" },
		{ value: "vapor", label: "Vapor" },
		{ value: "yeti", label: "Yeti" },
		{ value: "zephyr", label: "Zephyr" },
	],
	currentBootswatch: CURRENT_BOOTSWATCH,
	content: {
		loading: true,
	} as main.IAttrContent,
	itemFooter: [
		{
			title: "Links",
			item: [
				{ href: "https://getbootstrap.com/", label: "Home" },
				{ href: "https://getbootstrap.com/docs/5.3/", label: "Docs" },
				{ href: "https://getbootstrap.com/docs/5.3/examples/", label: "Examples" },
				{ href: "https://icons.getbootstrap.com/", label: "Icons" },
				{ href: "https://themes.getbootstrap.com/", label: "Themes" },
				{ href: "https://blog.getbootstrap.com/", label: "Blog" },
				{ href: "https://cottonbureau.com/people/bootstrap", label: "Swag Store" },
			],
		},
		{
			title: "Guides",
			item: [
				{ href: "https://getbootstrap.com/docs/5.3/getting-started/", label: "Getting started" },
				{ href: "https://getbootstrap.com/docs/5.3/examples/starter-template/", label: "Starter template" },
				{ href: "https://getbootstrap.com/docs/5.3/getting-started/webpack/", label: "Webpack" },
				{ href: "https://getbootstrap.com/docs/5.3/getting-started/parcel/", label: "Parcel" },
				{ href: "https://getbootstrap.com/docs/5.3/getting-started/vite/", label: "Vite" },
			],
		},
		{
			title: "Projects",
			item: [
				{ href: "https://github.com/twbs/bootstrap", label: "Bootstrap 5" },
				{ href: "https://github.com/twbs/bootstrap/tree/v4-dev", label: "Bootstrap 4" },
				{ href: "https://github.com/twbs/icons", label: "Icons" },
				{ href: "https://github.com/twbs/rfs", label: "RFS" },
				{ href: "https://github.com/twbs/examples/", label: "npm starter" },
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

const highlightCurrentMenu = (value?: string) => {
	let bsMenu = document.getElementById("bs-menu") as Element;
	let lastActive = bsMenu.querySelectorAll(".bs-links-link.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	if (value) {
		let newActive = bsMenu.querySelectorAll(`.bs-links-link[data-value='${value}']`)[0];
		if (newActive) {
			newActive.classList.add("active");
			newActive.setAttribute("aria-current", "page");
		}
	}
};

core.documentReady(() => {
	onThemeChange(getSavedTheme());

	let body = document.getElementById("main") as Element;
	core.replaceChild(body, mainContainer);

	loadDefaultDoc();
	setupWindowPopState();
	setupBSNavigate();
	setupBootswatch();
	setupThemeChanges();
});

import { b, core, h } from "@printf83/bsts";
import { doc } from "./docs/_index.js";
import * as main from "./ctl/main/_index.js";
import { updateMenu } from "./ctl/main/container.js";
import * as e from "./ctl/example/_index.js";

const DEBUG = false;
const MEMORYLEAKTEST_COUNTTAG = false;

declare var PR: {
	prettyPrint: () => void;
};

const cookie = {
	set: (name: string, value: string, expiredInDays?: number, path?: string) => {
		expiredInDays ??= 7;

		let date = new Date();
		date.setTime(date.getTime() + expiredInDays * 24 * 60 * 60 * 1000);
		const optExpires = `expires=${date.toUTCString()};`;
		const optSamesite = `samesite=strict;`;
		const optPath = `path=${path || window.location.hostname};`;
		const optValue = `${name}=${value};`;

		document.cookie = `${optValue}${optExpires}${optSamesite}${optPath}`;
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
	onBootswatchChange(getSavedBootswatch());
};

const setupThemeChanges = () => {
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
		if (getSavedTheme() === "auto") {
			onThemeChange("auto");
		}
	});
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
			item: [{ label: "Color", value: "docs/customize/color" }],
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
				{ label: "List groups", value: "docs/example/list_groups" },
				{ label: "Modals", value: "docs/example/modals" },
				{ label: "Test", value: "docs/example/test" },
			],
		},
	] as main.IAttrItemMenu[],
};

const getSavedBookmark = () => {
	let bookmarkCookie = cookie.get("saved_bookmark");
	if (bookmarkCookie) {
		return JSON.parse(bookmarkCookie) as main.IAttrItemSubMenu[];
	} else {
		return [];
	}
};

let bm: main.IAttrItemSubMenu[] = getSavedBookmark();

const isInBookmark = (value: string) => {
	if (bm && bm.length > 0) {
		return bm.filter((i) => i.value === value).length > 0;
	} else {
		return false;
	}
};

const addToBookmark = (value: string) => {
	let label = document.getElementById("bs-menu")?.querySelector(`a[data-value="${value}"]`)?.textContent;
	if (label) {
		bm.push({
			label: label,
			value: value,
		});
	}
};

const removeFromBookmark = (value: string) => {
	bm = bm.filter((i) => i.value !== value);
};

const onBookmarkChange = (value: string) => {
	if (isInBookmark(value)) {
		removeFromBookmark(value);
	} else {
		addToBookmark(value);
	}

	cookie.set("saved_bookmark", JSON.stringify(bm));
	updateMenu(genMenuWithBookmark(), cookie.get("current_page") || "docs/gettingstarted/introduction");
};

const genMenuWithBookmark = () => {
	let result: main.IAttrItemMenu[] = [];

	if (bm && bm.length > 0) {
		result.push({
			icon: new b.icon({ id: "pin-fill", color: "secondary" }),
			label: "Pinned",
			item: bm,
		});
	}

	for (const doc of Object.values(m.doc)) {
		let item = doc.item.filter((i) => !isInBookmark(i.value));
		if (item && item.length > 0) {
			result.push({
				icon: doc.icon,
				label: doc.label,
				item: item,
			});
		}
	}

	return result && result.length > 0 ? result : m.doc;
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
				c.docId = value;
				c.bookmark = bm.filter((i) => i.value === value).length > 0;
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

const PERFORMANCEINFO: { title?: string; download?: number; build?: number } = {};

const onMenuChange = (value: string, isfirsttime?: boolean, state?: "push" | "replace", callback?: Function) => {
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

	//show the loading before download new documentation

	core.requestIdleCallback(() => {
		const PERFORMANCE_GETDATA = DEBUG ? performance.now() : 0;
		getData(docId, (docData) => {
			PERFORMANCEINFO.download = DEBUG ? performance.now() - PERFORMANCE_GETDATA : 0;

			//keep current page in cookie
			cookie.set("current_page", `${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);

			//remove active popup
			core.removeAllActivePopup();

			//generate content

			const PERFORMANCE_BUILD = DEBUG ? performance.now() : 0;
			contentbody = core.replaceChild(contentbody, main.genMainContent(docData));
			PERFORMANCEINFO.build = DEBUG ? performance.now() - PERFORMANCE_BUILD : 0;

			//reset loading
			resetLoading(contentbody);

			//rename page title
			const pagetitle = document.querySelector("h1.display-5.page-title-text")?.textContent;
			const strPagetitle = pagetitle ? `${pagetitle} · Bootstrap TS` : "Bootstrap TS";
			const { origin, pathname } = window.location;
			document.title = strPagetitle;
			PERFORMANCEINFO.title = pagetitle ? pagetitle : "Bootstrap TS";

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

			focusToAnchor(anchorId, isfirsttime);

			core.requestIdleCallback(() => {
				PR.prettyPrint();

				//REPORT PERFORMANCE
				if (DEBUG) {
					const tagCount = contentbody.getElementsByTagName("*").length;

					console.info(
						`${
							PERFORMANCEINFO.title
						} page has ${tagCount} tag in it. It took ${~~PERFORMANCEINFO.download!}ms to download and ${~~PERFORMANCEINFO.build!}ms to build.`
					);
				}

				if (typeof callback === "function") {
					callback();
				}
			}, 300);
		});
	}, 300);
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

const focusToAnchor = (anchorId?: string, isfirsttime?: boolean) => {
	if (anchorId) {
		let anchorNode = document.querySelectorAll(`a.anchor-link[href="#${anchorId}"]`);
		if (anchorNode) {
			let anchorElem = anchorNode[0] as Element;
			let elemPosition = anchorElem.getBoundingClientRect().top;
			let offsetElemPosition = elemPosition + window.scrollY - 60;
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

const MOSTTAG: { title: string; count: number } = { title: "NONE", count: Number.MIN_VALUE };
const LESSTAG: { title: string; count: number } = { title: "NONE", count: Number.MAX_VALUE };
let lastEstimate = 0;

const genDurationText = (second: number) => {
	if (second > 60) {
		if (second % 60 === 0) {
			return `${~~(second / 60)} minute${~~(second / 60) > 1 ? "s" : ""}`;
		} else {
			return `${~~(second / 60)} minute${~~(second / 60) > 1 ? "s" : ""} ${second % 60} second${
				second % 60 > 1 ? "s" : ""
			}`;
		}
	} else {
		return `${second} second${second > 1 ? "s" : ""}`;
	}
};

const runMemoryTest = (
	startTime: number,
	testId: string,
	count: number,
	callback: Function,
	random?: boolean,
	max?: number
) => {
	max ??= count;

	let mDB = docDB();
	let mDBLength = mDB.length;
	let docId = random ? mDB[core.rndBetween(0, mDBLength - 1)] : mDB[(max - count) % mDB.length];

	if (count > 0) {
		core.requestIdleCallback(() => {
			getData(docId, (docData) => {
				const progressBar = document.getElementById(`${testId}-bar`);
				const progressPage = document.getElementById(`${testId}-page`);
				const progressCount = document.getElementById(`${testId}-count`);
				const progressSpeed = document.getElementById(`${testId}-speed`);
				const progressEstimate = document.getElementById(`${testId}-estimate`);

				if (progressBar && progressCount && progressPage && progressEstimate && progressSpeed) {
					let contentbody = document.getElementById("bs-main") as Element;
					contentbody = core.replaceChild(contentbody, main.genMainContent(docData));
					highlightCurrentMenu(docId);
					const pagetitle = document.querySelector("h1.display-5.page-title-text")?.textContent;

					const currentProgress = ((max! - count) / max!) * 100;

					progressBar.setAttribute("style", `width:${currentProgress}%;`);
					progressPage.innerText = pagetitle ? pagetitle : "...";
					progressCount.innerText = (max! - count).toString();

					const currentTime = performance.now();
					if (currentTime > lastEstimate + 1000) {
						lastEstimate = currentTime;

						progressSpeed.innerText = `${~~(((max! - count) / (currentTime - startTime)) * 1000)}`;
						const estimateTime = ~~(
							(((currentTime - startTime) / currentProgress) * (100 - currentProgress)) /
							1000
						);
						progressEstimate.innerText = `${genDurationText(estimateTime + 1)}`;
					}

					if (MEMORYLEAKTEST_COUNTTAG) {
						const tagCount = contentbody.getElementsByTagName("*").length;
						if (tagCount > MOSTTAG.count) {
							MOSTTAG.title = pagetitle ? pagetitle : "Bootstrap TS";
							MOSTTAG.count = tagCount;
						}

						if (tagCount < LESSTAG.count) {
							LESSTAG.title = pagetitle ? pagetitle : "Bootstrap TS";
							LESSTAG.count = tagCount;
						}
					}

					runMemoryTest(startTime, testId, count - 1, callback, random, max);
				} else {
					callback(max! - count, docId);
				}
			});
		}, 300);
	} else {
		callback(max! - count, docId);
	}
};

const startMemoryTest = (sender: Element, testId: string, count: number, random: boolean) => {
	const progressTotal = document.getElementById(`${testId}-total`);
	if (progressTotal) {
		progressTotal.innerText = count.toString();
	}

	const STARTMEMORYTEST = performance.now();
	runMemoryTest(
		performance.now(),
		testId,
		count,
		(docCount: number, docId: string) => {
			const ENDMEMORYTEST = performance.now();

			if (sender) {
				const mdl = sender.closest(".modal-dialog") as Element;
				if (mdl) {
					console.log(mdl);
					b.modal.hide(mdl);
				}
			}

			highlightCurrentMenu(docId);
			onMenuChange(docId, false, "push", () => {
				let result: string = "";

				let loadSpeed = ~~((docCount / (ENDMEMORYTEST - STARTMEMORYTEST)) * 1000);
				let durationSecond = ~~((ENDMEMORYTEST - STARTMEMORYTEST) / 1000);

				if (MEMORYLEAKTEST_COUNTTAG) {
					result = `
					Page count : {{s::${docCount}}} page{{br}}
					Load speed : ±{{s::${loadSpeed}}} page/sec{{br}}
					Duration : {{s::${genDurationText(durationSecond)}}}{{br}}
					Less element : {{s::${LESSTAG.title} (${LESSTAG.count} element)}}{{br}}
					Most element : {{s::${MOSTTAG.title} (${MOSTTAG.count} element)}}`;
				} else {
					result = `
					Page count : {{s::${docCount}}} page{{br}}
					Load speed : ±{{s::${loadSpeed}}} page/sec{{br}}
					Duration : {{s::${genDurationText(durationSecond)}}}`;
				}

				b.modal.show(
					b.modal.create({
						title: "Memory test complete",
						elem: new b.msg({
							icon: new b.icon({ id: "info-circle-fill", color: "primary" }),
							elem: result,
						}),
						btn: "ok",
					})
				);
			});
		},
		random
	);
};

const showMemoryTestDialog = () => {
	const testId = core.UUID();

	b.modal.show(
		new b.modal.container([
			new b.modal.body({ id: "memory-test-msg" }, [
				new h.p(
					"Please select one of the buttons below to open a specified number of pages for the purpose of detecting potential memory leaks. To facilitate this process, you can utilize either the {{Memory Monitor Program}} on your device or the {{Developer Tools}} available in your browser. Before commencing the memory leak test, please make a note of the current memory usage. Upon completion of the test, kindly compare the memory difference. It is anticipated that the memory should revert back to its original state once the test is finalized."
				),

				new h.p([
					b.form.check({
						container: { marginBottom: 3 },
						type: "checkbox",
						switch: true,
						label: "Random page",
						checked: true,
						id: "memory-test-random",
					}),
					new h.div(
						{
							display: "grid",
							gap: 2,
							style: { "grid-template-columns": "1fr 1fr 1fr" },
						},
						[10, 30, 50, 100, 300, 500, 1000, 3000, 5000].map((i) => {
							return new b.button(
								{
									outline: true,
									color: i === 500 ? "primary" : "secondary",
									data: {
										counter: i,
									},
									on: {
										click: (event) => {
											const target = event.target as Element;
											const counter = parseInt(target.getAttribute("data-counter")!);

											document.getElementById("memory-test-progress")?.classList.remove("d-none");
											document.getElementById("memory-test-msg")?.classList.add("d-none");

											startMemoryTest(
												target,
												testId,
												counter,
												(document.getElementById("memory-test-random") as HTMLInputElement)
													.checked
											);
										},
									},
								},
								`${i}`
							);
						})
					),
				]),

				new h.small(
					new b.caption(
						{ icon: "info-circle-fill", textColor: "secondary" },
						"To cancel the test, simply click outside the dialog."
					)
				),
			]),

			new b.modal.body({ id: "memory-test-progress", display: "none" }, [
				new h.p(
					"Memory Test in Progress. Kindly await its completion, or if necessary, you may click outside the dialog to interrupt the test."
				),

				new h.div({ textColor: "secondary", lineHeight: "sm" }, [
					new h.small([
						"Counter : ",
						new h.strong({ id: `${testId}-count` }, "..."),
						" / ",
						new h.strong({ id: `${testId}-total` }, "..."),
					]),
					new h.br(),
					new h.small(["Current page : ", new h.strong({ id: `${testId}-page` }, "...")]),
					new h.br(),
					new h.small([
						"Page load speed : ±",
						new h.strong({ id: `${testId}-speed` }, "Calculating..."),
						" page/sec",
					]),
					new h.br(),
					new h.small([
						"Estimated time remaining : ",
						new h.strong({ id: `${testId}-estimate` }, "Calculating..."),
					]),
					new h.div(
						{ marginTop: 2 },
						new b.progress.container(
							new b.progress.bar({
								id: `${testId}-bar`,
							})
						)
					),
				]),
			]),
		])
	);
};

interface pageIndex {
	category: string;

	page: string;
	pageId: string;

	section?: string | null;
	sectionId?: string;

	text: string | null;
}

let _docIndexDB: pageIndex[] = [];

const isDocItemIndexed = (pageId: string) => {
	if (_docIndexDB && _docIndexDB.length > 0) {
		return _docIndexDB.filter((i) => i.pageId === pageId).length > 0;
	} else {
		return false;
	}
};

const indexDocMenu = (index: number, callback: () => void) => {
	if (index < m.doc.length) {
		indexDocItem(0, m.doc[index].label, m.doc[index].item, () => {
			indexDocMenu(index + 1, callback);
		});
	} else {
		callback();
	}
};

const indexDocItem = (index: number, category: string, item: main.IAttrItemSubMenu[], callback: () => void) => {
	if (index < item.length) {
		if (!isDocItemIndexed(item[index].value)) {
			getData(item[index].value, (data) => {
				if (data && data.item) {
					let contentItem = data.item();
					if (contentItem) {
						let n = core.getNode(contentItem);

						if (n) {
							if (!Array.isArray(n)) {
								n = [n];
							}

							if (n.length > 0) {
								n.forEach((i) => {
									_docIndexDB.push({
										category: category,

										page: item[index].label,
										pageId: item[index].value,

										section: i.getAttribute("data-title"),
										sectionId: i.id,

										text: i.textContent,
									});
								});
							}
						}
					}
				}

				core.requestIdleCallback(() => {
					indexDocItem(index + 1, category, item, callback);
				}, 300);
			});
		} else {
			indexDocItem(index + 1, category, item, callback);
		}
	} else {
		callback();
	}
};

interface searchGroup {
	title: string;
	pageId: string;
	item: searchItem[];
}

interface searchItem {
	section?: string | null;
	sectionId?: string;

	text: string | null;
}

const doSearch = (value: string, callback: (result: searchGroup[]) => void) => {
	if (value) {
		core.requestIdleCallback(() => {
			let filtered = _docIndexDB
				.map((i) => {
					if (i.text) {
						let match = new RegExp(value, "gmi").exec(i.text);
						if (match) {
							let text = i.text.substring(match.index - 10, match.index + value.length + 10);

							let st = new RegExp(value, "gmi").exec(text);
							if (st) {
								text = `${text.substring(0, st?.index)}{{m::${text.substring(
									st?.index,
									st?.index + value.length
								)}}}${text.substring(st?.index! + value.length)}`;
							} else {
								text = text;
							}

							return {
								category: i.category,
								page: i.page,
								pageId: i.pageId,
								section: i.section,
								sectionId: i.sectionId,
								text: text,
							};
						} else {
							return undefined;
						}
					} else {
						return undefined;
					}
				})
				.filter(Boolean) as pageIndex[];

			if (filtered) {
				let lastPageId = "";
				let result: searchGroup[] = [];
				filtered.forEach((i) => {
					if (lastPageId !== i.pageId) {
						lastPageId = i.pageId;
						result.push({
							title: `${i.category} - ${i.page}`,
							pageId: i.pageId,
							item: [],
						});
					}

					result[result.length - 1].item.push({
						section: i.section,
						sectionId: i.sectionId,
						text: i.text,
					});
				});

				callback(result);
			} else {
				callback([]);
			}
		}, 300);
	} else {
		callback([]);
	}
};

const searchIndexOnClick = (event: Event) => {
	const target = event.target as Element;
	const listItem = target.closest("a[data-sectionId]");
	if (listItem) {
		const listGroup = listItem.closest("div[data-pageId]");
		if (listGroup) {
			const sectionId = listItem.getAttribute("data-sectionId");
			const pageId = listGroup.getAttribute("data-pageId");
			const value = `${pageId}${sectionId ? "#" : ""}${sectionId}`;

			highlightCurrentMenu(value);
			onMenuChange(value);
		}
	}
};

const searchIndex = (searchId: string, value: string) => {
	doSearch(value, (result) => {
		const currentSearchId = document.getElementById("doc-search-input")?.getAttribute("data-searchId");
		if (searchId === currentSearchId) {
			const searchResultContainer = document.getElementById("doc-search-result") as HTMLDivElement;

			if (result && result.length > 0) {
				console.log(result);

				core.replaceChild(
					searchResultContainer,
					result.map((i) => {
						return new h.div(
							{
								fontSize: 6,
								data: {
									pageId: i.pageId,
								},
							},
							[
								new h.small({ textColor: "primary", fontWeight: "semibold" }, i.title),
								new b.list.containerDiv(
									{
										marginBottom: 3,
									},
									i.item.map((j) => {
										return new b.list.itemLink(
											{
												action: true,
												small: true,
												href: "#",
												data: { sectionId: j.sectionId },
												on: {
													click: searchIndexOnClick,
												},
											},
											[
												new h.div(
													{
														display: "flex",
														alignItem: "center",
														justifyContent: "start",
														gap: 3,
													},
													[
														new h.div({ fontSize: 4 }, new b.icon("list")),
														new h.div([
															new h.div({ fontWeight: "semibold" }, j.text ? j.text : ""),
															new h.div(
																{ textColor: "secondary", small: true },
																j.section ? j.section : ""
															),
														]),
													]
												),
											]
										);
									})
								),
							]
						);
					})
				);
			} else {
				core.replaceChild(
					searchResultContainer,
					new h.div({ textAlign: "center", textColor: "secondary", margin: "5" }, "No result")
				);
			}
		}
	});
};

const showSearchDialog = () => {
	b.modal.show(
		new b.modal.container(
			{
				fullscreen: "sm",
				scrollable: true,
				contentAttr: { overflow: "hidden" },
				on: {
					"shown.bs.modal": (_event) => {
						let searchInput = document.getElementById("doc-search-input") as HTMLDivElement;
						let searchStatus = document.getElementById("doc-search-status") as HTMLDivElement;
						if (searchStatus && searchInput) {
							searchInput.focus();

							indexDocMenu(0, () => {
								core.replaceChild(
									searchStatus,
									new b.icon({ id: "hexagon-fill", fontSize: 4, color: "primary" })
								);
							});
						}
					},
				},
			},
			[
				new b.modal.header(
					{ padding: 3, bgColor: "body-tertiary", borderNone: "bottom" },
					new h.div({ display: "flex", gap: 3, width: 100 }, [
						b.form.input({
							container: { width: 100 },
							id: "doc-search-input",
							type: "search",
							weight: "lg",
							placeholder: "Search",
							autocomplete: "on",
							on: {
								keyup: (event) => {
									const searchId = core.UUID();
									const target = event.target as HTMLInputElement;
									target.setAttribute("data-searchId", searchId);
									searchIndex(searchId, target.value);
								},
							},
						}),
						new b.button({ toggle: "modal", display: ["block", "sm-none"], weight: "lg" }, "Close"),
					])
				),
				new b.modal.body(
					{ id: "doc-search-result", padding: 0, paddingX: 3, bgColor: "body-tertiary", zIndex: 0 },
					[new h.div({ textAlign: "center", textColor: "secondary", margin: "5" }, "No recent search")]
				),
				new b.modal.footer(
					{
						small: true,
						shadow: true,
						zIndex: 1,
						paddingX: 3,
						paddingY: 1,
						display: "flex",
						justifyContent: ["end", "sm-between"],
					},
					[
						new h.div({ display: ["none", "sm-flex"], gap: 2, alignItem: "center" }, [
							new h.kbd(new b.icon("arrow-return-left")),
							" to select ",
							new h.kbd(new b.icon("arrow-up")),
							new h.kbd(new b.icon("arrow-down")),
							" to navigate ",
							new h.kbd("ESC"),
							" to close ",
						]),
						new h.div({ display: "flex", gap: 2, alignItem: "center" }, [
							"Search by",
							new h.div(
								{ id: "doc-search-status" },
								new b.icon({ id: "hexagon-fill", fontSize: 4, color: "secondary" })
							),
						]),
					]
				),
			]
		)
	);
};

const mainContainer = () => {
	return main.Container({
		name: "Bootstrap TS",
		bgColor: "primary",
		textColor: "light",
		icon: new h.div({ class: "animated-icon", fontSize: 3 }, new b.icon({ id: "hexagon-fill" })),
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
			"bs-bookmark-change": (e) => {
				onBookmarkChange((<CustomEvent>e).detail);
			},
			"bs-search-click": (_e) => {
				showSearchDialog();
			},
		},
		itemMenu: genMenuWithBookmark(),
		itemInsideLink: [{ value: "doc", label: "Docs" }],
		currentInsideLink: "doc",
		itemOutsideLink: [
			// {
			// 	href: "#",
			// 	icon: { id: "search" },
			// 	label: "Search",
			// 	onclick: (_event) => {
			// 		const offcanvas = document.getElementById("bsNavbar") as Element;
			// 		b.offcanvas.hide(offcanvas);
			// 		showSearchDialog();
			// 	},
			// },
			{
				href: "#",
				icon: { id: "cpu" },
				label: "Memory test",
				onclick: (_event) => {
					const offcanvas = document.getElementById("bsNavbar") as Element;
					b.offcanvas.hide(offcanvas);
					showMemoryTestDialog();
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
		currentTheme: getSavedTheme() as main.IBsMainContainer["currentTheme"],
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
		currentBootswatch: getSavedBootswatch(),
		content: {
			loading: true,
			item: () => {
				return Array(core.rndBetween(3, 10))
					.fill("")
					.map(() => {
						return new e.section([
							new e.title({ loadingPlaceholderAnimation: "wave" }, core.placeholder(3, 6, 1, 3)),
							...Array(core.rndBetween(1, 3))
								.fill("")
								.map(() => {
									return new e.text(
										{ loadingPlaceholderAnimation: "wave" },
										core.placeholder(10, 20)
									);
								}),
							new e.item(new b.card.container({ style: { minHeight: "18rem" } }, new b.card.body(""))),
						]);
					})
					.flat();
			},
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
};

core.documentReady(() => {
	onThemeChange(getSavedTheme());

	let body = document.getElementById("main") as Element;
	core.replaceChild(body, mainContainer());

	loadDefaultDoc();
	setupWindowPopState();
	setupBSNavigate();
	setupBootswatch();
	setupThemeChanges();
});

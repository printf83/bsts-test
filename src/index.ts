import { b, core, h } from "@printf83/bsts";
import { cookie } from "./ctl/main/cookie.js";
import * as e from "./ctl/example/_index.js";

import { onBootswatchChange, getSavedBootswatch } from "./ctl/main/bootswatch.js";
import { menuWithBookmark } from "./ctl/main/bookmark.js";
import { getSavedTheme, onThemeChange, setupThemeChanges } from "./ctl/main/theme.js";
import { highlightMenu } from "./ctl/main/menu.js";
import { setupSearchShortcut } from "./ctl/main/search.js";
import { showMemoryTestDialog } from "./ctl/main/memorytest.js";
import { IBsMainContainer, container } from "./ctl/main/container.js";
import { IContent, setupContentDocument } from "./ctl/main/content.js";
import { setupState } from "./ctl/main/history.js";

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

		setupContentDocument(`${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);
		highlightMenu(docId);
	} else {
		setupContentDocument(cookie.get("current_page") || "docs/gettingstarted/introduction");
		highlightMenu(cookie.get("current_page") || "docs/gettingstarted/introduction");
	}
};

const setupBSNavigate = () => {
	document.addEventListener(
		"bs.navigate",
		(e) => {
			let value = (<CustomEvent>e).detail;
			highlightMenu(value);
			setupContentDocument(value);
		},
		false
	);
};

const setupCopyDataManager = () => {
	document.addEventListener("keydown", (event: KeyboardEvent) => {
		if (event.ctrlKey && event.key == "l") {
			event.stopPropagation();
			event.preventDefault();

			let listOfCodePreview = document.getElementsByClassName("example-code");
			if (listOfCodePreview && listOfCodePreview.length > 0) {
				let codeData = Array.from(listOfCodePreview)
					.map((i) => {
						let id = `code-${i.id}`;
						if (core.dataManager.exists(id)) {
							let dmCode = core.dataManager.get(id) as e.IBsExampleData;
							if (dmCode) {
								let source = dmCode.source ? `source: \`${dmCode.source}\`,` : "";
								let manager = dmCode.manager ? `manager: \`${dmCode.manager}\`,` : "";
								let extention = "";

								if (dmCode.extention && dmCode.extention.length > 0) {
									extention = `extention: [\`${dmCode.extention.join("`,`")}\`] ,`;
								}

								return `{
									${source}
									${manager}
									${extention}
								},
								`;
							}
						}

						return undefined;
					})
					.filter(Boolean)
					.join("");

				navigator.clipboard.writeText(`code: [${codeData}],`).then(
					() => {
						b.toast.show(b.toast.create({ color: "primary", title: new b.caption({ icon: "hexagon-fill" }, "Bootstrap TS"), elem: "Code added to clipboard" }));
					},
					() => {
						b.toast.show(b.toast.create({ color: "danger", title: new b.caption({ icon: "hexagon-fill" }, "Bootstrap TS"), elem: "Fail add code to clipboard" }));
					}
				);
			}
		}
	});
};

const mainContainer = () => {
	return new container({
		name: "Bootstrap TS",
		bgColor: "primary",
		textColor: "light",
		icon: new h.div({ class: "animated-icon", fontSize: 3 }, new b.icon({ id: "hexagon-fill" })),
		itemMenu: menuWithBookmark(),
		itemInsideLink: [{ value: "doc", label: "Docs" }],
		currentInsideLink: "doc",
		itemOutsideLink: [
			{
				href: "#",
				icon: { id: "speedometer" },
				label: "Memory test",
				onclick: (_event) => {
					const offcanvas = document.getElementById("bsNavbar") as Element;
					b.offcanvas.hide(offcanvas);
					showMemoryTestDialog();
				},
			},
			{ href: "https://github.com/printf83/bsts", icon: { id: "github" }, label: "Github" },
			{ href: "https://twitter.com/printf83", icon: { id: "twitter" }, label: "Twitter" },
			{ href: "https://getbootstrap.com/", icon: { id: "bootstrap" }, label: "Bootstrap" },
		],
		itemTheme: [
			{ value: "light", icon: { id: "sun-fill" }, label: "Light" },
			{ value: "dark", icon: { id: "moon-stars-fill" }, label: "Dark" },
			{ value: "auto", icon: { id: "circle-half" }, label: "Auto" },
		],
		currentTheme: getSavedTheme() as IBsMainContainer["currentTheme"],
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
									return new e.text({ loadingPlaceholderAnimation: "wave" }, core.placeholder(10, 20));
								}),
							new e.item(new b.card.container({ style: { minHeight: "18rem" } }, new b.card.body(""))),
						]);
					})
					.flat();
			},
		} as IContent,
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
	onBootswatchChange(getSavedBootswatch());

	core.requestIdleCallback(() => {
		let body = document.getElementById("main") as Element;
		core.replaceChild(body, mainContainer());

		core.requestIdleCallback(() => {
			setupSearchShortcut();
			setupState();
			setupBSNavigate();
			setupThemeChanges();
			setupCopyDataManager();
			core.requestIdleCallback(() => {
				loadDefaultDoc();
			}, 300);
		}, 300);
	}, 300);
});

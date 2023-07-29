import { b, core } from "@printf83/bsts";
import { cookie } from "./ctl/main/cookie.js";
import * as e from "./ctl/example/_index.js";
import { onBootswatchChange, getSavedBootswatch } from "./ctl/main/bootswatch.js";
import { getSavedTheme, onThemeChange, setupThemeChanges } from "./ctl/main/theme.js";
import { highlightMenu } from "./ctl/main/menu.js";
import { setupSearchShortcut } from "./ctl/main/search.js";
import { setupContentDocument } from "./ctl/main/content.js";
import { setupOnHistoryChange } from "./ctl/main/history.js";
import { DEFAULTDOCUMENT } from "./ctl/main/_db.js";
import { mainContainerFS } from "./ctl/main/mainContainerFS.js";
import { mainContainer } from "./ctl/main/mainContainer.js";

const loadDefaultDoc = () => {
	const { search, hash } = window.location;
	if (search && search.startsWith("?d=")) {
		let docId: string = search.slice(3);
		let anchorId: string | undefined = hash.slice(1);
		setupContentDocument(`${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);
		highlightMenu(docId);
	} else {
		let docId = cookie.get("current_page") || DEFAULTDOCUMENT;
		setupContentDocument(docId);
		highlightMenu(docId);
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

const escapeBackQuote = (str: string) => {
	return str.replaceAll("`", "\\`").replaceAll("${", "\\${");
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
							let dmCode = core.dataManager.get(id) as e.ISourceDB;
							if (dmCode) {
								let source = dmCode.source
									? `source: \`${escapeBackQuote(dmCode.source)}\`,`
									: "";
								let manager = dmCode.manager
									? `manager: \`${escapeBackQuote(dmCode.manager)}\`,`
									: "";
								let extention = "";

								if (dmCode.extention && dmCode.extention.length > 0) {
									extention = `extention: [\`${dmCode.extention
										.map((j) => {
											return escapeBackQuote(j);
										})
										.join("`,`")}\`] ,`;
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

				if (codeData) {
					navigator.clipboard.writeText(`db: [${codeData}],`).then(
						() => {
							b.toast.show(
								b.toast.create({
									color: "success",
									title: new b.caption({ icon: "hexagon-fill" }, "Bootstrap TS"),
									elem: "Code added to clipboard",
								})
							);
						},
						() => {
							b.toast.show(
								b.toast.create({
									color: "danger",
									title: new b.caption({ icon: "hexagon-fill" }, "Bootstrap TS"),
									elem: "Fail add code to clipboard",
								})
							);
						}
					);
				} else {
					b.toast.show(
						b.toast.create({
							color: "info",
							title: new b.caption({ icon: "hexagon-fill" }, "Bootstrap TS"),
							elem: "Code already added",
						})
					);
				}
			} else {
				b.toast.show(
					b.toast.create({
						color: "warning",
						title: new b.caption({ icon: "hexagon-fill" }, "Bootstrap TS"),
						elem: "This document not have any code",
					})
				);
			}
		}
	});
};

core.documentReady(() => {
	onThemeChange(getSavedTheme());
	onBootswatchChange(getSavedBootswatch());

	core.requestIdleCallback(() => {
		let body = document.getElementById("main") as Element;
		core.replaceChild(body, [mainContainer(), mainContainerFS()]);

		core.requestIdleCallback(() => {
			setupSearchShortcut();
			setupOnHistoryChange();
			setupBSNavigate();
			setupThemeChanges();
			setupCopyDataManager();
			core.requestIdleCallback(() => {
				loadDefaultDoc();
			}, 300);
		}, 300);
	}, 300);
});

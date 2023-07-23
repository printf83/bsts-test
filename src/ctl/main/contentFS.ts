import { b, core, h } from "@printf83/bsts";
import { setupTOC } from "./toc.js";
import * as e from "../example/_index.js";
import { onBookmarkChange } from "./bookmark.js";
import { getContent } from "./data.js";
import { cookie } from "./cookie.js";
import { addHistory } from "./history.js";
import hljs from "highlight.js";
import { DEFAULTDOCUMENT } from "./_db.js";
import { IContent } from "./content.js";

const setupIntro = (content?: IContent) => {
	if (content) {
		if (content.loading) {
			return new h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
				new e.pagetitle(
					{
						loading: true,
					},
					core.placeholder(1, 3)
				),
				new e.description(
					{ loadingPlaceholderAnimation: "wave" },
					core.placeholder(10, 15)
				),
			]);
		} else {
			return new h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
				content.title
					? new e.pagetitle(
							{
								sourceWeb: content.sourceWeb,
								sourceUrl: content.sourceUrl,
								addedVersion: content.addedVersion,
								bookmark: content.bookmark,
								docId: content.docId,
								on: {
									"toggle.bs.bookmark": (event: Event) => {
										const target = event.target as Element;
										const docId = target.getAttribute("data-bs-docid");
										if (docId) {
											onBookmarkChange(docId);
										}
									},
								},
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

const setupContent = (content?: IContent) => {
	if (content && content.item) {
		return new h.div(
			{
				class: "bs-content-fs",
				paddingStart: "lg-2",
			},
			content.item(content.usedb ? content.db : undefined)
		);
	} else {
		return "";
	}
};

export const setupContentContainer = (content?: IContent) => {
	return new h.main(
		{
			order: 1,
			class: "bs-main-fs",
			id: "bs-main-fs",
			data: {
				"bs-target": "#bs-toc-fs",
				"bs-smooth-scroll": "true",
				"bs-root-margin": "0px 0px -40%",
			},
			tabindex: 0,
			on: {
				build: (_event) => {
					const target = document.getElementById("bs-main-fs");

					if (target) {
						const id = core.UUID();
						target.setAttribute("data-build-id", id);

						core.requestIdleCallback(() => {
							const target = document.getElementById("bs-main-fs");
							const bstoc = document.getElementById("bs-toc-fs");

							if (target && bstoc) {
								if (target.getAttribute("data-build-id") === id) {
									target.removeAttribute("data-build-id");
									b.scrollspy.init(target, {
										target: "#bs-toc-fs",
										smoothScroll: true,
										rootMargin: "0px 0px -40%",
									});
								}
							}
						}, 300);
					}
				},
				destroy: (event) => {
					const target = event.target as Element;
					b.scrollspy.dispose(target);
				},
			},
		},
		setupContentContainerItem(content)
	);
};

export const setupContentContainerItem = (content?: IContent) => {
	return [setupIntro(content), setupTOC(content), setupContent(content)];
};

export const focusToAnchorFS = (anchorId?: string) => {
	if (anchorId) {
		let anchorNode = document.querySelectorAll(`a.anchor-link[href="#${anchorId}"]`);
		if (anchorNode) {
			let anchorElem = anchorNode[0] as Element;
			let elemPosition = anchorElem.getBoundingClientRect().top;
			let offsetElemPosition = elemPosition + window.scrollY - 60;
			window.scrollTo(0, offsetElemPosition);
		}
	} else {
		window.scrollTo(0, 0);
	}
};

const PR = {
	prettyPrint: () => {
		document.querySelectorAll("pre.example-preview code").forEach((el) => {
			hljs.highlightElement(el as HTMLElement);
		});
	},
};

export const setupContentDocumentFS = (
	value: string,
	addToHistory?: boolean,
	callback?: Function
) => {
	addToHistory ??= true;

	let docId: string = value;
	let anchorId: string | undefined;

	if (value.indexOf("#") > -1) {
		let tempValue = value.split("#");
		docId = tempValue[0] || DEFAULTDOCUMENT;
		anchorId = tempValue[1];
	}

	getContent(docId, (docData) => {
		//keep current page in cookie
		cookie.set("current_page", `${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);

		//remove active popup
		core.removeAllActivePopup();

		//generate content
		let contentbody = document.getElementById("bs-main-fs") as Element;
		contentbody = core.replaceWith(contentbody, setupContentContainer(docData))!;

		//setup state value
		const currentStatePage = docData.title;
		const currentStatePageTitle = currentStatePage
			? `${currentStatePage} · Bootstrap TS`
			: "Bootstrap TS";

		document.title = currentStatePageTitle;

		//set history
		if (addToHistory) {
			addHistory({
				action: "push",
				docId: docId,
				anchorId: anchorId,
				pagetitle: currentStatePageTitle,
			});
		}

		core.requestIdleCallback(() => {
			focusToAnchorFS(anchorId);

			PR.prettyPrint();

			if (typeof callback === "function") {
				callback();
			}
		}, 300);
	});
};

import { b, core, h } from "@printf83/bsts";
import { setupTOC } from "./toc.js";
import * as e from "../example/_index.js";
import { onBookmarkChange } from "./bookmark.js";
import { getContent } from "./data.js";
import { cookie } from "./cookie.js";
import { addHistory } from "./history.js";
import hljs from "highlight.js";
import { DEFAULTDOCUMENT } from "./_db.js";

export interface IContent {
	fullscreen?: boolean;

	usedb?: boolean;
	loading?: boolean;

	bookmark?: boolean;
	docId?: string;

	title?: string;
	sourceUrl?: string;
	sourceWeb?: string;
	addedVersion?: string;

	description?: string;

	item?: (db?: e.ISourceDB[]) => core.IElem;
	db?: e.ISourceDB[];
}

let contentIndex: number = 0;
export const resetContentIndex = () => {
	contentIndex = 0;
};

export const getContentCode = (db?: e.ISourceDB[]) => {
	if (db && db.length > 0) {
		if (contentIndex < db.length) {
			contentIndex = contentIndex + 1;
			return db[contentIndex - 1];
		} else {
			console.warn(`Invalid content code index`);
			return undefined;
		}
	} else {
		return undefined;
	}
};

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
				class: "bs-content",
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
			class: "bs-main",
			id: "bs-main",
			data: {
				"bs-target": "#bs-toc",
				"bs-smooth-scroll": "true",
				"bs-root-margin": "0px 0px -40%",
			},
			tabindex: 0,
			on: {
				build: (_event) => {
					const target = document.getElementById("bs-main");

					if (target) {
						const id = core.UUID();
						target.setAttribute("data-build-id", id);

						core.requestIdleCallback(() => {
							const target = document.getElementById("bs-main");
							const bstoc = document.getElementById("bs-toc");

							if (target && bstoc) {
								if (target.getAttribute("data-build-id") === id) {
									target.removeAttribute("data-build-id");
									b.scrollspy.init(target, {
										target: "#bs-toc",
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

export const focusToAnchor = (anchorId?: string) => {
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

export const setupContentDocument = (
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

	let contentbody = document.getElementById("bs-main") as Element;

	getContent(docId, (docData) => {
		//keep current page in cookie
		cookie.set("current_page", `${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);

		//remove active popup
		core.removeAllActivePopup();

		//generate content
		contentbody = core.replaceWith(contentbody, setupContentContainer(docData))!;

		//setup state value
		const currentStatePage = document.querySelector(
			"h1.display-5.page-title-text"
		)?.textContent;
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
			focusToAnchor(anchorId);

			PR.prettyPrint();

			if (typeof callback === "function") {
				callback();
			}
		}, 300);
	});
};

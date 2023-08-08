import { b, core, h } from "@printf83/bsts";
import { setupTOC } from "./toc.js";
import * as e from "../example/_index.js";
import { onBookmarkChange } from "./bookmark.js";
import { getContent } from "./data.js";
import { cookie } from "./cookie.js";
import { addHistory } from "./history.js";
import hljs from "highlight.js";
import { DEFAULTDOCUMENT } from "./_db.js";
import { codeBeautify } from "../example/_fn.js";
import { scriptConverter } from "../example/code.js";
import { highlightMenu } from "./menu.js";

export interface IContent {
	fullscreen?: boolean;
	fullscreencode?: boolean;

	usedb?: boolean;
	loading?: boolean;

	bookmark?: boolean;
	docId?: string;

	title?: string;
	sourceUrl?: string;
	sourceWeb?: string;
	addedVersion?: string;

	description?: string;

	prevDocId?: string;
	prevTitle?: string;
	nextDocId?: string;
	nextTitle?: string;

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

const setupNavDoc = (content?: IContent) => {
	if (content) {
		if ((content.prevDocId && content.prevTitle) || (content.nextDocId && content.nextTitle)) {
			let prevButton =
				content.prevDocId && content.prevTitle
					? new h.a(
							{
								textColor: "body",
								textDecoration: "none",
								textColorHover: "primary",
								lineHeight: 1,
								display: "inline-block",
								data: { value: content.prevDocId },
								on: {
									click: (event: Event) => {
										const target = event.currentTarget as Element;
										const value = target.getAttribute("data-value");
										if (value) {
											setupContentDocument(value);
											highlightMenu(value);
										}
									},
								},
							},
							new b.caption({
								icon: new b.icon({ id: "chevron-left", fontDisplay: 6 }),
								elem: new h.div([
									new h.div({ fontWeight: "bold" }, "Previous"),
									new h.small(content.prevTitle),
								]),
							})
					  )
					: "";

			let nextButton =
				content.nextDocId && content.nextTitle
					? new h.a(
							{
								textColor: "body",
								textDecoration: "none",
								textColorHover: "primary",
								display: "inline-block",
								lineHeight: 1,
								data: { value: content.nextDocId },
								on: {
									click: (event: Event) => {
										const target = event.currentTarget as Element;
										const value = target.getAttribute("data-value");
										if (value) {
											setupContentDocument(value);
											highlightMenu(value);
										}
									},
								},
							},
							new b.caption({
								icon: new b.icon({ id: "chevron-right", fontDisplay: 6 }),
								iconPosition: "end",
								elem: new h.div([
									new h.div({ fontWeight: "bold" }, "Next"),
									new h.small(content.nextTitle),
								]),
							})
					  )
					: "";

			return new h.div(
				{
					display: "flex",
					justifyContent: "between",
					marginTop: 5,
				},
				[prevButton, nextButton]
			);
		} else {
			return new h.div({ marginTop: 5 }, "");
		}
	} else {
		return "";
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
			[new h.div(content.item(content.usedb ? content.db : undefined)), setupNavDoc(content)]
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
	prettyPrint: (selector?: string) => {
		selector ??= "pre.example-preview code";
		document.querySelectorAll(selector).forEach((el) => {
			hljs.highlightElement(el as HTMLElement);
		});
	},
};

const codeContainerFS = (code: string) => {
	return new h.pre(
		{
			id: "bs-main-fs-code",
			display: "block",
			tabindex: 0,
			margin: 0,
			padding: 3,
			bgColor: "body-tertiary",
			border: false,
			rounded: 3,
		},
		new h.code(
			{
				class: ["", "lang-js"],
				lang: "js",
				border: false,
				overflow: "auto",
				display: "block",
				on: {
					build: () => {
						PR.prettyPrint("#bs-main-fs-code code");
					},
				},
			},
			codeBeautify("js", scriptConverter(code))
		)
	);
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

	getContent(docId, (docData) => {
		if (docData) {
			//keep current page in cookie
			cookie.set("current_page", `${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);

			//remove active popup
			core.removeAllActivePopup();

			//generate content
			const bsMainRoot = document.getElementById("bs-main-root") as Element;
			const bsMainFSRoot = document.getElementById("bs-main-fs-root") as Element;

			if (docData.fullscreen && docData.item) {
				const bsMainFS = document.getElementById("bs-main-fs") as Element;

				bsMainRoot.classList.add("d-none");
				bsMainFSRoot.classList.remove("d-none");

				core.replaceChild(bsMainFS, docData.item());

				const bsMainFSToggle = document.getElementById("bs-main-fs-toggle") as Element;

				docData.fullscreencode ??= true;
				if (docData.fullscreencode) {
					//title
					const bsMainFSTitle = document.getElementById("bs-main-fs-title") as Element;
					bsMainFSTitle.innerHTML = docData.title ? docData.title : "Unknow";

					//menu
					const bsMainFSMenu = document.getElementById("bs-main-fs-menu") as Element;
					bsMainFSMenu.querySelector(".active")?.classList.remove("active");
					bsMainFSMenu
						.querySelector(`.dropdown-item[data-value='${docId}']`)
						?.classList.add("active");

					//document
					const bsMainFSCode = document.getElementById("bs-main-fs-code") as Element;
					core.replaceWith(bsMainFSCode, codeContainerFS(docData.item.toString()));

					bsMainFSToggle.classList.remove("d-none");
				} else {
					bsMainFSToggle.classList.add("d-none");
				}
			} else {
				const bsMain = document.getElementById("bs-main") as Element;

				bsMainFSRoot.classList.add("d-none");
				bsMainRoot.classList.remove("d-none");
				core.replaceWith(bsMain, setupContentContainer(docData))!;

				//setup back button for fullscree doc
				const fsbackbutton = document.getElementById("btn-last-non-fs-page") as Element;
				fsbackbutton.setAttribute(
					"data-docId",
					`${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`
				);
			}

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
				focusToAnchor(anchorId);

				PR.prettyPrint();

				if (typeof callback === "function") {
					callback();
				}
			}, 300);
		}
	});
};

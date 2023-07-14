import { b, core, h } from "@printf83/bsts";
import { setupTOC } from "./toc.js";
import * as e from "../example/_index.js";
import { onBookmarkChange } from "./bookmark.js";
import { getContent } from "./data.js";
import { cookie } from "./cookie.js";
import { pushState, replaceState } from "./history.js";

export interface IContent {
	loading?: boolean;

	bookmark?: boolean;
	docId?: string;

	title?: string;
	sourceUrl?: string;
	sourceWeb?: string;
	addedVersion?: string;

	description?: string;

	item?: (code?: e.IBsExampleData[]) => core.IElem;
	code?: e.IBsExampleData[];
}

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
				new e.description({ loadingPlaceholderAnimation: "wave" }, core.placeholder(10, 15)),
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
			content.item(content.code)
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

const focusToAnchor = (anchorId?: string) => {
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

const setupContentPlaceholder = (contentbody: Element) => {
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

declare var PR: {
	prettyPrint: () => void;
};

export const setupContentDocument = (value: string, state?: "push" | "replace", callback?: Function) => {
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
	setupContentPlaceholder(contentbody);

	//show the loading before download new documentation
	core.requestIdleCallback(() => {
		getContent(docId, (docData) => {
			//keep current page in cookie
			cookie.set("current_page", `${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);

			//remove active popup
			core.removeAllActivePopup();

			//generate content
			contentbody = core.replaceWith(contentbody, setupContentContainer(docData))!;

			//rename page title
			const pagetitle = document.querySelector("h1.display-5.page-title-text")?.textContent;
			const strPagetitle = pagetitle ? `${pagetitle} · Bootstrap TS` : "Bootstrap TS";
			document.title = strPagetitle;

			//set history
			if (state === "push") {
				pushState({ docId: docId, anchorId: anchorId, pagetitle: strPagetitle, value: value });
			} else if (state === "replace") {
				replaceState({ docId: docId, anchorId: anchorId, pagetitle: strPagetitle, value: value });
			}

			focusToAnchor(anchorId);

			core.requestIdleCallback(() => {
				PR.prettyPrint();

				if (typeof callback === "function") {
					callback();
				}
			}, 300);
		});
	}, 300);
};

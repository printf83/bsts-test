import { b, h, core } from "@printf83/bsts";
import { getContent } from "./data.js";
import { IMenuItem, highlightMenu } from "./menu.js";
import { setupContentDocument } from "./content.js";
import { menu } from "./_db.js";

interface pageIndex {
	category: string;

	page: string;
	pageId: string;

	section?: string | undefined;
	sectionId?: string;

	text: string | undefined;
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
	if (index < menu.length) {
		indexDocItem(0, menu[index].label, menu[index].item, () => {
			indexDocMenu(index + 1, callback);
		});
	} else {
		callback();
	}
};

const indexDocItem = (index: number, category: string, item: IMenuItem[], callback: () => void) => {
	if (index < item.length) {
		if (!isDocItemIndexed(item[index].value)) {
			getContent(item[index].value, (data) => {
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
									let textContent = i.textContent || undefined;
									if (textContent) {
										textContent = textContent.replace(/HTMLLoading\.\.\./g, "");
										textContent = textContent.replace(/SOURCELoading\.\.\./g, "");
										textContent = textContent.replace(/CSSLoading\.\.\./g, "");
										textContent = textContent.replace(/MANAGERLoading\.\.\./g, "");
										textContent = textContent.replace(/VIEW PORTXSSMMDLGXLXXL/g, "");
										textContent = textContent.replace(/ZOOM25\%/g, "");
										textContent = textContent.replace(/ZOOM50\%/g, "");
										textContent = textContent.replace(/ZOOM75\%/g, "");
										textContent = textContent.replace(/ZOOM100\%/g, "");
										textContent = textContent.replace(/CONSOLE/g, "");
										textContent = textContent.replace(/Loading\.\.\./g, "");
										textContent = textContent.replace(/  |\r\n|\n|\r/gm, "");
									}

									_docIndexDB.push({
										category: category,

										page: item[index].label,
										pageId: item[index].value,

										section: i.getAttribute("data-title") || undefined,
										sectionId: i.id,

										text: textContent,
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
	category: string;
	page: string;
	pageId: string;
	item: searchItem[];
}

interface searchItem {
	section?: string | undefined;
	sectionId?: string;

	text: string | undefined;
}

const searchTitle = (value: string, i: pageIndex) => {
	if (i.category) {
		let match = new RegExp(value, "gmi").exec(i.category);
		if (match) {
			return true;
		}
	}

	if (i.page) {
		let match = new RegExp(value, "gmi").exec(i.page);
		if (match) {
			return true;
		}
	}

	if (i.section) {
		let match = new RegExp(value, "gmi").exec(i.section);
		if (match) {
			return true;
		}
	}

	return false;
};

const searchText = (value: string, valueRegEx: string, i: pageIndex) => {
	if (i.text) {
		let match = new RegExp(valueRegEx, "gmi").exec(i.text);
		if (match) {
			let text = i.text.substring(match.index - 10, match.index + value.length + 10);

			let st = new RegExp(valueRegEx, "gmi").exec(text);
			if (st) {
				text = `${text.substring(0, st?.index)}{{m::${text.substring(st?.index, st?.index + value.length)}}}${text.substring(st?.index! + value.length)}`;
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
		}
	}

	return undefined;
};

const doSearch = (value: string, callback: (result: searchGroup[]) => void) => {
	if (value) {
		core.requestIdleCallback(() => {
			let valRegEx = value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

			let filtered = _docIndexDB
				.map((i) => {
					if (searchTitle(value, i)) {
						return {
							category: i.category,
							page: i.page,
							pageId: i.pageId,
							section: i.section,
							sectionId: i.sectionId,
							text: null,
						};
					} else {
						return searchText(value, valRegEx, i);
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
							category: i.category,
							page: i.page,
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

			highlightMenu(value);
			setupContentDocument(value);
		}
	}
};

const genSearchItem = (page: string | undefined, section: string | undefined, text: string | undefined) => {
	if (text) {
		if (section) {
			return [new h.div({ fontSize: 4 }, new b.icon("list")), new h.div([new h.div({ fontWeight: "semibold" }, text), new h.div({ textColor: "secondary", small: true }, section)])];
		} else {
			return [new h.div({ fontSize: 4 }, new b.icon("list")), new h.div([new h.div({ fontWeight: "semibold" }, text)])];
		}
	} else {
		if (section) {
			return [new h.div({ fontSize: 4 }, new b.icon("file-text")), new h.div([new h.div(section)])];
		} else if (page) {
			return [new h.div({ fontSize: 4 }, new b.icon("file-text")), new h.div([new h.div(page)])];
		} else {
			return [];
		}
	}
};
const searchIndex = (searchId: string, value: string) => {
	doSearch(value, (result) => {
		const currentSearchId = document.getElementById("doc-search-input")?.getAttribute("data-searchId");
		if (searchId === currentSearchId) {
			const searchResultContainer = document.getElementById("doc-search-result") as HTMLDivElement;

			if (result && result.length > 0) {
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
								new h.small({ textColor: "primary", fontWeight: "semibold" }, i.page),
								new b.list.containerDiv(
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
													genSearchItem(i.page, j.section, j.text)
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
				core.replaceChild(searchResultContainer, new h.div({ textAlign: "center", textColor: "secondary", margin: "5" }, "No result"));
			}
		}
	});
};

let lastSearchText = "";
let indexingInProgress = false;

export const showSearchDialog = () => {
	b.modal.show(
		new b.modal.container(
			{
				fullscreen: "sm",
				scrollable: true,
				contentAttr: { overflow: "hidden" },
				on: {
					"shown.bs.modal": (_event) => {
						let searchInput = document.getElementById("doc-search-input") as HTMLInputElement;
						if (searchInput) {
							if (!indexingInProgress) {
								indexingInProgress = true;

								indexDocMenu(0, () => {
									indexingInProgress = false;

									let searchStatus = document.getElementById("doc-search-status");
									if (searchStatus) {
										core.replaceWith(searchStatus, [
											new h.div(
												{
													id: "doc-search-status",
													display: "flex",
													gap: 2,
													alignItem: "center",
													lineHeight: 1,
													on: {
														click: () => {
															b.modal.show(
																b.modal.create({
																	elem: b.form.textarea({
																		label: "docIndexDB",
																		rows: 10,
																		value: JSON.stringify(_docIndexDB),
																	}),
																	btn: "ok",
																})
															);
														},
													},
												},
												[
													"Search by ",
													new b.icon({
														id: "hexagon-fill",
														fontSize: 5,
														textColor: "primary",
													}),
												]
											),
										]);
									}
								});
							}

							searchInput.focus();
							searchInput.setSelectionRange(-1, -1);

							if (lastSearchText) {
								const searchId = core.UUID();
								searchInput.setAttribute("data-searchId", searchId);
								searchIndex(searchId, lastSearchText);
							}
						}
					},
				},
			},
			[
				new b.modal.header(
					{ padding: 3, bgColor: "body-tertiary", borderNone: "bottom" },
					new h.div({ display: "flex", gap: 3, width: 100 }, [
						new h.div(
							{
								position: "absolute",
								border: false,
								class: "form-control form-control-lg",
								style: {
									width: "auto",
									backgroundColor: "transparent",
								},
							},
							new b.icon({ id: "search", textColor: "secondary" })
						),
						b.form.input({
							container: { width: 100 },
							id: "doc-search-input",
							maxlength: 100,
							type: "search",
							weight: "lg",
							placeholder: "Search docs",
							paddingStart: 5,
							value: lastSearchText,
							on: {
								keyup: (event) => {
									const target = event.target as HTMLInputElement;

									if (target.value !== lastSearchText) {
										lastSearchText = target.value;
										const searchId = core.UUID();
										target.setAttribute("data-searchId", searchId);
										searchIndex(searchId, lastSearchText);
									}
								},
								keydown: (event) => {
									const ev = event as KeyboardEvent;

									if (ev.key == "Enter" || ev.key == "ArrowDown" || ev.key == "ArrowUp") {
										event.stopPropagation();
										event.preventDefault();

										const docSearchResult = document.getElementById("doc-search-result");
										if (docSearchResult) {
											const docSearchItem = docSearchResult.querySelectorAll("a.list-group-item");
											if (docSearchItem && docSearchItem.length > 0) {
												let currentActive = docSearchResult.querySelector("a.list-group-item.active") as Element;

												//active
												let activeIndex = -1;
												if (currentActive) {
													activeIndex = Array.from(docSearchItem).indexOf(currentActive);

													//do action
													if (currentActive) {
														if (ev.key == "Enter") {
															currentActive.dispatchEvent(new Event("click"));
														} else if (ev.key == "ArrowDown") {
															currentActive.classList.remove("active");
															if (activeIndex + 1 > docSearchItem.length - 1) {
																docSearchItem[0].classList.add("active");
															} else {
																docSearchItem[activeIndex + 1].classList.add("active");
															}
														} else if (ev.key == "ArrowUp") {
															currentActive.classList.remove("active");
															if (activeIndex - 1 < 0) {
																docSearchItem[docSearchItem.length - 1].classList.add("active");
															} else {
																docSearchItem[activeIndex - 1].classList.add("active");
															}
														}
													}
												} else {
													docSearchItem[0].classList.add("active");
													currentActive = docSearchResult.querySelector("a.list-group-item.active") as Element;
													activeIndex = 0;

													if (ev.key == "Enter") {
														currentActive?.dispatchEvent(new Event("click"));
													}
												}
											}
										}
									}
								},
							},
						}),
						new b.button({ toggle: "modal", display: ["block", "sm-none"], weight: "lg" }, "Close"),
					])
				),
				new b.modal.body(
					{
						id: "doc-search-result",
						padding: 3,
						paddingTop: 0,
						bgColor: "body-tertiary",
						zIndex: 0,
						display: "grid",
						gap: 3,
					},
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
							new h.kbd({ padding: 1, lineHeight: 1 }, new b.icon("arrow-return-left")),
							" to select ",
							new h.kbd({ padding: 1, lineHeight: 1 }, new b.icon("arrow-up")),
							new h.kbd({ padding: 1, lineHeight: 1 }, new b.icon("arrow-down")),
							" to navigate ",
							new h.kbd({ padding: 1, lineHeight: 1 }, new h.span({ style: { fontSize: "0.85em" } }, "ESC")),
							" to close ",
						]),
						new h.div({ id: "doc-search-status", display: "flex", gap: 2, alignItem: "center", lineHeight: 1 }, ["Indexing ", new b.spinner({ small: true })]),
					]
				),
			]
		)
	);
};

export const setupSearchShortcut = () => {
	document.addEventListener("keydown", (event: KeyboardEvent) => {
		if (event.ctrlKey && event.key == "k") {
			event.stopPropagation();
			event.preventDefault();

			showSearchDialog();
		}
	});
};

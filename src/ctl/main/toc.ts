import { core, h, b } from "@printf83/bsts";
import * as e from "../example/_index.js";
import { IContent } from "./content.js";

interface ITOCItem {
	href: string;
	label: string;
	item?: ITOCItem[];
}

export const setupTOC = (content?: IContent) => {
	if (content && typeof content.item === "function") {
		let contentItem = content.item();
		if (contentItem && Array.isArray(contentItem)) {
			let t: {
				deep: number;
				item: ITOCItem;
			}[] = [];

			//get title
			contentItem.forEach((i) => {
				if (core.isTag<e.section>(i) && i.tag === "section") {
					if (i.attr?.id && i.attr?.data?.title) {
						let item = { href: `#${i.attr?.id}`, label: i.attr?.data?.title as string };
						let deep = i.attr?.data?.deep ? parseInt(i.attr?.data?.deep as string) : 0;
						t.push({
							deep: deep,
							item: item,
						});
					}
				} else {
					console.warn(`${content.title} section problem`);
				}
			});

			//detect same id
			const listOfHref = t.map((i) => i.item.href);
			const duplicateItem = listOfHref.filter((i, ix) => listOfHref.indexOf(i) !== ix);
			if (duplicateItem && duplicateItem.length > 0) {
				console.warn(
					`Found ${duplicateItem.length} anchor in ${content.title}.`,
					duplicateItem
				);
			}

			//arrange title
			let u: ITOCItem[] = [];
			if (t && t.length > 0) {
				t.forEach((i) => {
					if (i.deep === 0) {
						u.push(i.item);
					} else if (i.deep === 1) {
						if (u[u.length - 1] !== undefined) {
							if (!u[u.length - 1]!.item) {
								u[u.length - 1]!.item = [];
							}

							u[u.length - 1]!.item!.push(i.item);
						}
					} else if (i.deep === 2) {
						let y = u.length - 1;

						if (u[y] !== undefined) {
							let x = u[y]!.item!.length - 1;

							if (u[y]!.item![x] !== undefined) {
								if (!u[y]!.item![x]!.item) {
									u[y]!.item![x]!.item = [];
								}

								u[y]!.item![x]!.item!.push(i.item);
							}
						}
					}
				});
			}

			//process toc
			if (u.length > 1) {
				return new h.div(
					{
						class: "bs-toc",
						marginTop: 3,
						marginBottom: [5, "lg-5"],
						marginStart: [0, "md-3", "lg-0"],
						marginY: "lg-0",
						paddingStart: "xl-3",
						textColor: "body-secondary",
					},
					[
						new b.collapse.button(
							{
								color: "link",
								padding: "md-0",
								marginBottom: [2, "md-0"],

								textDecoration: "none",
								class: "bs-toc-toggle",
								display: "md-none",
								target: "#tocContents",
								controlfor: "tocContents",
							},
							[
								"On this page",
								new b.icon({
									id: "chevron-expand",
									display: "md-none",
									marginStart: 2,
									aria: { hidden: "true" },
								}),
							]
						),
						new h.h(
							5,
							{ display: ["none", "md-block"], fontSize: 6, marginY: 2 },
							"On this page"
						),
						new h.hr({ display: ["none", "md-block"], marginY: 2 }),
						new b.collapse.container(
							{
								id: "tocContents",
								class: "bs-toc-collapse",
							},
							new h.nav(
								{ id: "bs-toc" },
								new h.ul(
									{
										marginStart: [3, "md-0"],
									},
									content.loading
										? u.map((_i) => {
												return new h.li(
													{ loadingPlaceholderAnimation: "wave" },
													core.placeholder(1, 3, 1, 3)
												);
										  })
										: u.map((i) => {
												return new h.li([
													new h.a({ href: i.href }, i.label),
													i.item
														? new h.ul(
																i.item.map((j) => {
																	return new h.li([
																		new h.a(
																			{ href: j.href },
																			j.label
																		),
																		j.item
																			? new h.ul(
																					j.item.map(
																						(k) => {
																							return new h.li(
																								new h.a(
																									{
																										href: k.href,
																									},
																									k.label
																								)
																							);
																						}
																					)
																			  )
																			: "",
																	]);
																})
														  )
														: "",
												]);
										  })
								)
							)
						),
					]
				);
			} else {
				return "";
			}
		} else {
			return "";
		}
	} else {
		return "";
	}
};

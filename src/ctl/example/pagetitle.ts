import { core, h, t, b } from "@printf83/bsts";

export interface IBsExamplePagetitle extends core.IAttr {
	bookmark?: boolean;
	docId?: string;
	loading?: boolean;
	sourceUrl?: string;
	sourceWeb?: string;
	addedVersion?: string;
}

const convert = (attr: IBsExamplePagetitle) => {
	attr = core.mergeObject(
		{
			class: "example-pagetitle",
			display: "md-flex",
			flex: "md-row-reverse",
			alignItem: "center",
			justifyContent: "between",
			data: {
				"bs-docid": attr.docId,
			},
		},
		attr
	);

	let tElem: t[] = [];
	if (attr.loading) {
		tElem.push(
			new h.div({ marginBottom: [3, "md-0"], display: "flex" }, [
				new h.a(
					{
						class: "btn btn-sm",
						focusRing: true,
						textColor: "secondary",
						borderColor: "secondary",
						textColorHover: "primary",
						borderColorHover: "primary",
						href: "#",
						loadingPlaceholder: true,
					},
					"View on Github"
				),
			])
		);

		attr.marginBottom = 3;
	}
	//is update
	if (attr.sourceUrl || attr.addedVersion) {
		tElem.push(
			new b.btngroup({ marginBottom: [3, "md-0"] }, [
				attr.addedVersion
					? new h.a(
							{
								class: "btn btn-sm btn-outline-success",
								textColor: "success",
								borderColor: "success",
								pointerEvent: "none",
							},
							`Added in v${attr.addedVersion}`
					  )
					: "",
				attr.sourceUrl
					? new h.a(
							{
								class: "btn btn-sm",
								focusRing: true,
								textColor: "secondary",
								borderColor: "secondary",
								textColorHover: "primary",
								borderColorHover: "primary",
								href: attr.sourceUrl,
								title: `View and edit this file on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`,
								target: "_blank",
							},
							`View on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`
					  )
					: "",
				attr.docId
					? new h.a(
							{
								class: ["btn", "btn-sm", attr.bookmark ? "active" : undefined],
								focusRing: true,
								textColor: attr.bookmark ? "primary" : "secondary",
								borderColor: attr.bookmark ? "primary" : "secondary",
								textColorHover: attr.bookmark ? "secondary" : "primary",
								borderColorHover: attr.bookmark ? "secondary" : "primary",

								title: `Add to bookmark`,
								on: {
									click: (e: Event) => {
										const target = (e.target as Element).closest(".btn") as Element;
										const icon = target.querySelector("i.bi") as Element;

										if (target.classList.contains("active")) {
											target.removeAttribute("aria-pressed");
											target.classList.remove("active");

											target.classList.remove("link-normal-link");
											target.classList.remove("link-border-link");
											target.classList.remove("link-hover-secondary");
											target.classList.remove("link-hover-border-secondary");

											target.classList.add("link-normal-secondary");
											target.classList.add("link-border-secondary");
											target.classList.add("link-hover-link");
											target.classList.add("link-hover-border-link");

											icon.classList.remove("bi-pin-fill");
											icon.classList.add("bi-pin-angle-fill");
										} else {
											target.setAttribute("aria-pressed", "true");
											target.classList.add("active");

											target.classList.remove("link-normal-secondary");
											target.classList.remove("link-border-secondary");
											target.classList.remove("link-hover-link");
											target.classList.remove("link-hover-border-link");

											target.classList.add("link-normal-link");
											target.classList.add("link-border-link");
											target.classList.add("link-hover-secondary");
											target.classList.add("link-hover-border-secondary");

											icon.classList.remove("bi-pin-angle-fill");
											icon.classList.add("bi-pin-fill");
										}

										const container = target.closest(".example-pagetitle");
										if (container) {
											container.dispatchEvent(
												new CustomEvent("toggle.bs.bookmark", {
													detail: target.classList.contains("active"),
												})
											);
										}
									},
								},
							},
							new b.icon({
								handleBubble: false,
								id: attr.bookmark ? "pin-fill" : "pin-angle-fill",
							})
					  )
					: "",
			])
		);
	}

	if (attr.elem) {
		tElem.push(
			new h.h(
				1,
				{
					fontDisplay: 5,
					fontWeight: "normal",
					marginBottom: 0,
					class: "page-title-text",
					loadingPlaceholderAnimation: attr.loading ? "wave" : undefined,
					col: attr.loading ? 6 : undefined,
				},
				attr.elem
			)
		);
	}

	if (tElem) {
		attr.elem = tElem;
	}

	delete attr.bookmark;
	delete attr.docId;
	delete attr.loading;
	delete attr.sourceUrl;
	delete attr.sourceWeb;
	delete attr.addedVersion;

	return attr;
};

export class pagetitle extends h.div {
	constructor();
	constructor(attr: IBsExamplePagetitle);
	constructor(elem: core.IElem);
	constructor(attr: IBsExamplePagetitle, elem: core.IElem);
	constructor(...arg: any[]) {
		super(convert(core.bsConstArg<IBsExamplePagetitle>("elem", arg)));
	}
}
export const Pagetitle = (AttrOrElem?: IBsExamplePagetitle | core.IElem, Elem?: core.IElem) =>
	core.genTagClass<pagetitle, IBsExamplePagetitle>(pagetitle, AttrOrElem, Elem);

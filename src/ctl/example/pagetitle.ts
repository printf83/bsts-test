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
						linkNormal: "secondary",
						linkBorder: "secondary",
						linkHover: "link",
						linkHoverBorder: "link",
						href: "#",
						loadingPlaceholder: true,
					},
					"View on Github"
				),
			])
		);

		attr.marginBottom = 3;
	}

	if (attr.sourceUrl || attr.addedVersion) {
		tElem.push(
			new h.div({ marginBottom: [3, "md-0"], display: "flex", gap: 2 }, [
				attr.addedVersion
					? new h.small(
							{
								display: "inline-flex",
								paddingX: 2,
								paddingY: 1,
								verticalAlign: "baseline",
								fontWeight: "semibold",
								textColor: "success",
								bgColor: "success",
								bgOpacity: 10,
								roundedSize: 2,
								marginEnd: 2,
								border: true,
								borderColor: "success",
								borderOpacity: 10,
							},
							new h.span(`Added in v${attr.addedVersion}`)
					  )
					: "",
				attr.sourceUrl
					? new h.a(
							{
								class: "btn btn-sm",
								focusRing: true,
								linkNormal: "secondary",
								linkBorder: "secondary",
								linkHover: "link",
								linkHoverBorder: "link",
								href: attr.sourceUrl,
								title: `View and edit this file on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`,
								target: "_blank",
							},
							`View on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`
					  )
					: "",
				attr.docId
					? new b.button(
							{
								weight: "sm",
								color: "success",
								outline: true,
								toggle: "button",
								active: attr.bookmark,
								marginStart: "auto",
								title: `Add to bookmark`,
								on: {
									click: (e: Event) => {
										const target = (e.target as Element).closest(".btn") as Element;
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
							new b.icon({ handleBubble: false, id: "bookmark-fill" })
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

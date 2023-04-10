import { core, h, t } from "@printf83/bsts";

export interface IAttrBSExamplePagetitle extends core.IAttr {
	sourceUrl?: string;
	sourceWeb?: string;
	addedVersion?: string;
}

const convert = (attr: IAttrBSExamplePagetitle) => {
	attr = core.mergeObject(
		{
			class: "example-pagetitle",
			display: "md-flex",
			flex: "md-row-reverse",
			alignItem: "center",
			justifyContent: "between",
		},
		attr
	);

	let tElem: t[] = [];
	if (attr.sourceUrl || attr.addedVersion) {
		tElem.push(
			new h.div({ marginBottom: [3, "md-0"], display: "flex" }, [
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
								class: "primary-on-hover btn btn-sm btn-outline-secondary",
								paddingY: 1,
								href: attr.sourceUrl,
								title: `View and edit this file on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`,
								target: "_blank",
							},
							`View on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`
					  )
					: "",
			])
		);
	}

	if (attr.elem) {
		tElem.push(
			new h.h(1, { fontDisplay: 5, fontWeight: "normal", marginBottom: 0, class: "page-title-text" }, attr.elem)
		);
	}

	if (tElem) {
		attr.elem = tElem;
	}

	delete attr.sourceUrl;
	delete attr.sourceWeb;
	delete attr.addedVersion;

	return attr;
};

export class pagetitle extends h.div {
	constructor(); //#1
	constructor(attr: IAttrBSExamplePagetitle); //#2
	constructor(elem: core.IElem); //#3
	constructor(attr: IAttrBSExamplePagetitle, elem: core.IElem); //#4
	constructor(...arg: any[]) {
		super(core.bsConstArg<IAttrBSExamplePagetitle>("elem", convert, arg));
	}
}

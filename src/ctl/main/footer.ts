import { h } from "@printf83/bsts";

interface IFooterItem {
	href: string;
	label: string;
}

export interface IFooter {
	title: string;
	item: IFooterItem[];
}

export const setupFooter = (footerItem?: IFooter[]) => {
	if (footerItem) {
		return footerItem.map((i, ix) => {
			return new h.div(
				{ col: [6, "lg-2"], marginBottom: 3, offset: ix === 0 ? "lg-1" : undefined },
				[
					new h.h5(i.title),
					new h.ul(
						{ unstyle: true },
						i.item.map((j) => {
							return new h.li(
								{ marginBottom: 2 },
								new h.a({ href: j.href, target: "_blank" }, j.label)
							);
						})
					),
				]
			);
		});
	} else {
		return [];
	}
};

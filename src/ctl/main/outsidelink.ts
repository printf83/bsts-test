// import { Icon } from "../../../node_modules/@printf83/bsts/build/types/bootstrap/icon.js";

import { b, h, t, I } from "@printf83/bsts";

type Icon = I.b.icon;

export interface IOutsideLink {
	href: string;
	label: string;
	icon: Icon;
	onclick?: EventListener;
}

export const setupOutsideLink = (
	itemOutsideLink?: IOutsideLink[],
	itemBootswatch?: t[],
	itemTheme?: t[]
) => {
	return [
		new h.hr({ display: "lg-none" }),
		new b.navbar.itemcontainer({ flex: ["row", "wrap"], marginStart: "md-auto" }, [
			...(itemOutsideLink
				? itemOutsideLink.map((i) => {
						return new b.navbar.item({ col: [6, "lg-auto"] }, [
							new b.navbar.link(
								{
									paddingY: 2,
									paddingX: [0, "lg-2"],
									href: i.href,
									target: i.onclick ? undefined : "_blank",
									aria: { label: i.label },
									on: { click: i.onclick },
								},
								new b.caption({ icon: i.icon, labelDisplay: "lg-none" }, i.label)
							),
						]);
				  })
				: []),
			...(itemBootswatch ? itemBootswatch : []),
			...(itemTheme ? itemTheme : []),
		]),
	];
};

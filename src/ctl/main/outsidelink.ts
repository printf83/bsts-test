import { I, b, core, h, t } from "@printf83/bsts";

export interface IOutsideLink {
	href: string;
	label: string;
	icon: I.B.Icon;
	onclick?: EventListener;
}

export const setupOutsideLink = (textColor: core.bootstrapType.textColor, itemOutsideLink?: IOutsideLink[], itemBootswatch?: t[], itemTheme?: t[]) => {
	return [
		new h.hr({ display: "lg-none", textColor: "light" }),
		new b.navbar.itemcontainer({ flex: ["row", "wrap"], marginStart: "md-auto" }, [
			...(itemOutsideLink
				? itemOutsideLink.map((i) => {
						return new b.navbar.item({ col: [6, "lg-auto"] }, [
							new b.navbar.link(
								{
									paddingY: 2,
									paddingX: [0, "lg-2"],
									textColor: textColor,
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

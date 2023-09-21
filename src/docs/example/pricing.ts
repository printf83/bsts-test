import { I, b, core, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const pricing: IContent = {
	fullscreen: true,
	title: "Pricing",
	item: () => {
		const header = new h.header(
			{
				display: "flex",
				flex: "wrap",
				justifyContent: "center",
				paddingY: 3,
				marginBottom: 4,
				border: "bottom",
				container: true,
			},
			[
				new h.a(
					{
						href: "#",
						display: "flex",
						alignItem: "center",
						marginBottom: [3, "md-0"],
						marginEnd: "md-auto",
						linkColor: "body-emphasis",
						textDecoration: "none",
					},
					new b.caption(
						{
							icon: new b.icon({ id: "hexagon-fill", marginBottom: 0 }),
							fontSize: 4,
						},
						"Pricing example"
					)
				),

				new b.nav.header.container({
					link: [
						{ href: "#", textColor: "body", elem: "Features" },
						{ href: "#", textColor: "body", elem: "Enterprise" },
						{ href: "#", textColor: "body", elem: "Support" },
						{ href: "#", textColor: "body", elem: "Pricing" },
					],
				}),
			]
		);

		const jumbotron = new h.section(
			new h.div({ container: true, textAlign: "center", paddingX: 5 }, [
				new h.h(1, { textColor: "body-emphasis", marginTop: 4, fontDisplay: 3 }, "Pricing"),
				new h.p(
					{ lead: true },
					"Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization."
				),
			])
		);

		const plan = (arg: {
			name: string;
			price: number;
			item: core.IElem;
			button: core.tag;
			borderColor?: core.bootstrapType.borderColor;
			headerColor?: core.bootstrapType.textBgColor;
		}) => {
			return new h.div(
				{ col: true },
				new b.card.container(
					{
						shadow: true,
						textAlign: "center",
						borderColor: arg.borderColor,
					},
					[
						new b.card.header({ fontSize: 4, textBgColor: arg.headerColor }, arg.name),
						new b.card.body([
							new b.card.title({ fontDisplay: 5 }, [
								`$${arg.price}`,
								new h.small(
									{ textColor: "body-secondary", fontWeight: "light" },
									"/mo"
								),
							]),
							new h.ul({
								unstyle: true,
								marginTop: 3,
								marginBottom: 4,
								item: arg.item,
							}),

							new h.div({ display: "grid" }, arg.button),
						]),
					]
				)
			);
		};

		const plan_container = new h.main(
			{
				paddingY: 5,
			},
			new h.div(
				{ container: true },
				new h.div({ row: true, rowCol: ["1", "md-3"], gutter: 4 }, [
					plan({
						name: "Free",
						price: 0,
						item: [
							"10 users included",
							"2 GB of storage",
							"Email support",
							"Help center access",
						],
						button: new b.button({ outline: true, weight: "lg" }, "Sign up for free"),
					}),
					plan({
						name: "Pro",
						price: 15,
						item: [
							"20 users included",
							"10 GB of storage",
							"Priority email support",
							"Help center access",
						],
						button: new b.button({ weight: "lg" }, "Get started"),
						borderColor: "primary",
					}),
					plan({
						name: "Enterprise",
						price: 29,
						item: [
							"30 users included",
							"15 GB of storage",
							"Phone and email support",
							"Help center access",
						],
						button: new b.button({ weight: "lg" }, "Contact us"),
						borderColor: "primary",
						headerColor: "primary",
					}),
				])
			)
		);

		const check_icon = new b.icon({ id: "check2", fontSize: 4, textColor: "primary" });
		const plan_compare = new h.section({ container: true }, [
			new h.h(2, { fontDisplay: 6, textAlign: "center", marginBottom: 4 }, "Compare plans"),
			new b.table.responsive(
				new b.table.container(
					{
						textAlign: "center",
					},
					[
						new b.table.thead(
							new b.table.tr([
								new b.table.th({ scope: "col", style: { width: "34%" } }, ""),
								new b.table.th({ scope: "col", style: { width: "22%" } }, "Free"),
								new b.table.th({ scope: "col", style: { width: "22%" } }, "Pro"),
								new b.table.th(
									{ scope: "col", style: { width: "22%" } },
									"Enterprise"
								),
							])
						),
						new b.table.tbody([
							new b.table.tr([
								new b.table.th({ scope: "row", textAlign: "start" }, "Public"),
								new b.table.td(check_icon),
								new b.table.td(check_icon),
								new b.table.td(check_icon),
							]),
							new b.table.tr([
								new b.table.th({ scope: "row", textAlign: "start" }, "Private"),
								new b.table.td(""),
								new b.table.td(check_icon),
								new b.table.td(check_icon),
							]),
							new b.table.tr([
								new b.table.th({ scope: "row", textAlign: "start" }, "Permission"),
								new b.table.td(check_icon),
								new b.table.td(check_icon),
								new b.table.td(check_icon),
							]),
							new b.table.tr([
								new b.table.th({ scope: "row", textAlign: "start" }, "Sharing"),
								new b.table.td(""),
								new b.table.td(check_icon),
								new b.table.td(check_icon),
							]),
							new b.table.tr([
								new b.table.th(
									{ scope: "row", textAlign: "start" },
									"Unlimited members"
								),
								new b.table.td(""),
								new b.table.td(check_icon),
								new b.table.td(check_icon),
							]),
							new b.table.tr([
								new b.table.th(
									{ scope: "row", textAlign: "start" },
									"Extra security"
								),
								new b.table.td(""),
								new b.table.td(""),
								new b.table.td(check_icon),
							]),
						]),
					]
				)
			),
		]);

		const section = (arg: { title: string; link: I.B.Nav.Header.Link[] }) => {
			return [
				new h.h(5, arg.title),
				new b.nav.header.container({
					flex: "column",
					elem: arg.link.map((i) => {
						return new b.nav.header.item(
							{ marginBottom: 2 },
							new b.nav.header.link({
								textColor: "secondary",
								textColorHover: "primary-emphasis",
								href: i.href,
								elem: i.elem,
								padding: 0,
							})
						);
					}),
				}),
			];
		};

		const footer = new h.footer(
			{
				container: true,
			},
			new h.div(
				{ row: true, rowCol: [1, "sm-2", "md-5"], paddingY: 5, marginY: 5, border: "top" },
				[
					new h.div({ col: true, marginBottom: 3 }, [
						new h.a(
							{
								href: "#",
								display: "flex",
								alignItem: "center",
								marginBottom: 3,
								textDecoration: "none",
							},
							new b.icon({ id: "hexagon-fill", fontSize: 3, textColor: "body" })
						),
						new h.p({ textColor: "body-tertiary" }, "© 2017–2023"),
					]),
					...[
						undefined,
						section({
							title: "Features",
							link: [
								{ href: "#", elem: "Cool stuff" },
								{ href: "#", elem: "Random feature" },
								{ href: "#", elem: "Team feature" },
								{ href: "#", elem: "Stuff for developers" },
								{ href: "#", elem: "Another one" },
								{ href: "#", elem: "Last time" },
							],
						}),
						section({
							title: "Resources",
							link: [
								{ href: "#", elem: "Resource" },
								{ href: "#", elem: "Resource name" },
								{ href: "#", elem: "Another resource" },
								{ href: "#", elem: "Final resource" },
							],
						}),
						section({
							title: "About",
							link: [
								{ href: "#", elem: "Team" },
								{ href: "#", elem: "Locations" },
								{ href: "#", elem: "Privacy" },
								{ href: "#", elem: "Terms" },
							],
						}),
					].map((i) => {
						return new h.div({ col: true, marginBottom: 3 }, i ? i : "");
					}),
				]
			)
		);

		return [header, jumbotron, plan_container, plan_compare, footer];
	},
};

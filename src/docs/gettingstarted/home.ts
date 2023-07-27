import { h, b } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";
import { CURRENTVERSION } from "../../ctl/main/_db.js";
import { setupFooter } from "../../ctl/main/footer.js";
import { setupOutsideLink } from "../../ctl/main/outsidelink.js";
import { genBootswatch, getSavedBootswatch } from "../../ctl/main/bootswatch.js";
import { setupInsideLink } from "../../ctl/main/insidelink.js";
import { showSearchDialog } from "../../ctl/main/search.js";
import { getSavedTheme, setupTheme } from "../../ctl/main/theme.js";
import { showMemoryTestDialog } from "../../ctl/main/memorytest.js";
import { IMainContainer } from "../../ctl/main/container.js";

export const home: IContent = {
	fullscreen: true,
	fullscreencode: false,
	title: "Home",
	item: () => {
		const jumbotrons = new h.section(
			{
				container: true,
				paddingY: 5,
				textColor: "body-emphasis",
			},
			new h.div({ col: "md-8", marginX: "auto", textAlign: "center" }, [
				new b.icon({
					id: "hexagon-fill",
					marginBottom: 3,
					textColor: "primary-emphasis",
					style: { fontSize: "10rem" },
				}),

				new h.h(
					1,
					{ fontWeight: "bolder", marginBottom: 3 },
					"Testing Bootstrap TS (BSTS)"
				),
				new h.p(
					{ lead: true, fontWeight: "medium", marginBottom: 3 },
					"Disclaimer! This is {{b::not a real Bootstrap}} website. This is only a {{b::Bootstrap TS test website}} to test {{b::Bootstrap TS library}} {{bc::(bsts)}} and make sure it's fully support Bootstrap because we love it."
				),
				new h.div(
					{
						display: ["grid", "md-flex"],
						flex: "wrap",
						justifyContent: ["evenly", "md-center"],
						gap: 3,
						marginBottom: 3,
					},
					[
						new h.div(
							{
								class: "form-control",
								width: "auto",
								display: "flex",
								justifyContent: "center",
								alignItem: "center",
								gap: 2,
								paddingX: 3,
								paddingY: 2,
								bgColor: "body-tertiary",
							},
							[
								"$",
								new h.span(`npm i @printf83/bsts@${CURRENTVERSION}`),
								new b.icon("clipboard"),
							]
						),
						new b.button(
							{
								weight: "lg",
								href: "?d=docs/gettingstarted/introduction",
							},
							new b.caption({ icon: "book" }, "Read the docs")
						),
					]
				),
				new h.div({ marginBottom: 3 }, [
					"Currently ",
					new h.b(`v${CURRENTVERSION}`),
					" · ",
					new h.a({ href: "#" }, "Download"),
					" · ",
					new h.a({ href: "#" }, "All releases"),
				]),
			])
		);

		const footer = new h.footer(
			{ class: "bs-footer", paddingY: [4, "md-5"], marginTop: 5, bgColor: "body-tertiary" },
			new h.div(
				{
					container: true,
					paddingY: 4,
					paddingX: [4, "md-3"],
					textColor: "body-secondary",
				},
				new h.div({ row: true }, [
					new h.div({ col: "lg-3", marginBottom: 3 }, [
						new h.a(
							{
								display: "inline-flex",
								alignItem: "center",
								marginBottom: 2,
								textColor: "body-secondary",
								textDecoration: "none",
								href: "#",
								label: "Bootstrap TS",
								on: {
									click: () => {
										window.scrollTo(0, 0);
									},
								},
							},
							[new b.icon("hexagon-fill"), "Bootstrap TS"]
						),
						new h.ul({ unstyle: true, class: "small" }, [
							new h.li({ marginBottom: 2 }, [
								new h.strong({ textColor: "primary" }, "Disclaimer! "),
								"This is {{s::not a real Bootstrap}} website. This is only a {{s::Bootstrap TS test website}} to test {{https://github.com/printf83/bsts::@printf83/bsts}} library and make sure it's fully support Bootstrap. ",
								"Bootsrap is designed and built with all the love in the world by the {{https://getbootstrap.com/docs/5.3/about/team/::Bootstrap team}} with the help of {{https://github.com/twbs/bootstrap/graphs/contributors::Bootstrap contributors}}.",
							]),
							new h.li(
								{ marginBottom: 2 },
								"Code licensed {{https://github.com/twbs/bootstrap/blob/main/LICENSE::MIT}}, docs {{https://creativecommons.org/licenses/by/3.0/::CC BY 3.0}}."
							),
							new h.li({ marginBottom: 2 }, "Currently v5.3.0."),
						]),
					]),
					...setupFooter([
						{
							title: "Links",
							item: [
								{ href: "https://getbootstrap.com/", label: "Home" },
								{ href: "https://getbootstrap.com/docs/5.3/", label: "Docs" },
								{
									href: "https://getbootstrap.com/docs/5.3/examples/",
									label: "Examples",
								},
								{ href: "https://icons.getbootstrap.com/", label: "Icons" },
								{ href: "https://themes.getbootstrap.com/", label: "Themes" },
								{ href: "https://blog.getbootstrap.com/", label: "Blog" },
								{
									href: "https://cottonbureau.com/people/bootstrap",
									label: "Swag Store",
								},
							],
						},
						{
							title: "Guides",
							item: [
								{
									href: "https://getbootstrap.com/docs/5.3/getting-started/",
									label: "Getting started",
								},
								{
									href: "https://getbootstrap.com/docs/5.3/examples/starter-template/",
									label: "Starter template",
								},
								{
									href: "https://getbootstrap.com/docs/5.3/getting-started/webpack/",
									label: "Webpack",
								},
								{
									href: "https://getbootstrap.com/docs/5.3/getting-started/parcel/",
									label: "Parcel",
								},
								{
									href: "https://getbootstrap.com/docs/5.3/getting-started/vite/",
									label: "Vite",
								},
							],
						},
						{
							title: "Projects",
							item: [
								{ href: "https://github.com/twbs/bootstrap", label: "Bootstrap 5" },
								{
									href: "https://github.com/twbs/bootstrap/tree/v4-dev",
									label: "Bootstrap 4",
								},
								{ href: "https://github.com/twbs/icons", label: "Icons" },
								{ href: "https://github.com/twbs/rfs", label: "RFS" },
								{ href: "https://github.com/twbs/examples/", label: "npm starter" },
							],
						},
						{
							title: "Community",
							item: [
								{ href: "#", label: "Issues" },
								{ href: "#", label: "Discussions" },
								{ href: "#", label: "Corporate sponsors" },
								{ href: "#", label: "Open Collective" },
								{ href: "#", label: "Stack Overflow" },
							],
						},
					]),
				])
			)
		);

		const header = new b.navbar.containerHeader(
			{
				expand: "lg",
				sticky: "top",
				bgColor: "primary",
				bgGradient: true,
				shadow: true,
				padding: 2,
			},
			[
				new b.navbar.innercontainerNav(
					{
						class: "bs-gutter",
						container: "xxl",
						padding: 0,
						flex: ["wrap", "lg-nowrap"],
						label: "Main navigation",
					},
					[
						new h.div({ class: "bs-navbar-toggle" }, [
							new b.navbar.toggle.offcanvas(
								{
									class: "bs-noshadow",
									padding: 2,
									target: "#bsSidebar",
									controlfor: "bsSidebar",
									label: "Toggle docs navigation",
									textColor: "light",
								},
								b.icon.bi("list")
							),
						]),

						new b.navbar.brand(
							{
								href: "#",
								label: "Bootstrap TS",
								marginEnd: ["lg-2", 0],
								fontSize: 6,
								padding: 0,
								textColor: "light",
								on: {
									click: () => {
										window.scrollTo(0, 0);
									},
								},
							},
							new b.icon("hexagon-fill")
						),

						new h.div({ display: "flex", class: "bs-navbar-toggle" }, [
							new h.div(
								{
									class: "bs-search",
									on: {
										click: (_e) => {
											showSearchDialog();
										},
									},
								},
								new h.button(
									{
										type: "button",
										class: "bs-search-button",
										aria: { label: "Search" },
										display: "flex",
										justifyContent: "between",
										alignItem: "center",
										focusRing: true,
									},
									[
										new h.span(
											{
												class: "bs-search-button-container",
											},
											[
												new b.icon({
													class: "bs-search-icon",
													id: "search",
												}),
												new h.span(
													{
														class: "bs-search-button-placeholder",
														marginStart: 2,
													},
													"Search"
												),
											]
										),
										new h.span(
											{
												class: "bs-search-button-keys",
											},
											[
												new h.kbd(
													{ class: "bs-search-button-key" },
													new h.span(
														{ style: { fontSize: "0.75em" } },
														"CTRL"
													)
												),
												new h.kbd({ class: "bs-search-button-key" }, "K"),
											]
										),
									]
								)
							),

							new b.navbar.toggle.offcanvas(
								{
									class: "bs-noshadow",
									display: ["flex", "lg-none"],
									order: 3,
									padding: 2,
									target: "#bsNavbar",
									controlfor: "bsNavbar",
									label: "Toggle navigation",
									textColor: "light",
								},
								b.icon.bi("three-dots")
							),
						]),
						new b.offcanvas.container(
							{
								id: "bsNavbar",
								placement: "end",
								show: "lg",
								flex: "grow-1",
								labelledby: "bsNavbarOffcanvasLabel",
								scroll: true,
							},
							[
								new b.offcanvas.header(
									{
										paddingX: 4,
										paddingBottom: 0,
										bgColor: "primary",
									},
									[
										new b.offcanvas.title(
											{
												id: "bsNavbarOffcanvasLabel",
												textColor: "light",
											},
											"Bootstrap TS"
										),
										new b.offcanvas.btnclose({
											target: "#bsNavbar",
											white: true,
										}),
									]
								),
								new b.offcanvas.body(
									{
										padding: [4, "lg-0"],
										paddingTop: 0,
										bgColor: "primary",
									},
									[
										...setupInsideLink(
											"primary",
											[
												{
													value: "docs/gettingstarted/home",
													label: "Home",
												},
												{
													value: "docs/gettingstarted/introduction",
													label: "Docs",
												},
											],
											"home"
										),
										...setupOutsideLink(
											"primary",
											[
												{
													href: "#",
													icon: { id: "speedometer" },
													label: "Memory test",
													onclick: (_event) => {
														const offcanvas = document.getElementById(
															"bsNavbar"
														) as Element;
														b.offcanvas.hide(offcanvas);
														showMemoryTestDialog();
													},
												},
												{
													href: "https://github.com/printf83/bsts",
													icon: { id: "github" },
													label: "Github",
												},
												{
													href: "https://twitter.com/printf83",
													icon: { id: "twitter" },
													label: "Twitter",
												},
												{
													href: "https://getbootstrap.com/",
													icon: { id: "bootstrap" },
													label: "Bootstrap",
												},
											],
											genBootswatch(
												"primary",
												[
													{
														value: "default",
														label: "Default",
													},
													{ value: "cerulean", label: "Cerulean" },
													{ value: "cosmo", label: "Cosmo" },
													{ value: "cyborg", label: "Cyborg" },
													{ value: "darkly", label: "Darkly" },
													{ value: "flatly", label: "Flatly" },
													{ value: "journal", label: "Journal" },
													{ value: "litera", label: "Litera" },
													{ value: "lumen", label: "Lumen" },
													{ value: "lux", label: "Lux" },
													{ value: "materia", label: "Materia" },
													{ value: "minty", label: "Minty" },
													{ value: "morph", label: "Morph" },
													{ value: "pulse", label: "Pulse" },
													{ value: "quartz", label: "Quartz" },
													{ value: "sandstone", label: "Sandstone" },
													{ value: "simplex", label: "Simplex" },
													{ value: "sketchy", label: "Sketchy" },
													{ value: "slate", label: "Slate" },
													{ value: "solar", label: "Solar" },
													{ value: "spacelab", label: "Spacelab" },
													{ value: "superhero", label: "Superhero" },
													{ value: "united", label: "United" },
													{ value: "vapor", label: "Vapor" },
													{ value: "yeti", label: "Yeti" },
													{ value: "zephyr", label: "Zephyr" },
												],
												getSavedBootswatch()
											),
											setupTheme(
												"primary",
												[
													{
														value: "light",
														icon: { id: "sun-fill" },
														label: "Light",
													},
													{
														value: "dark",
														icon: { id: "moon-stars-fill" },
														label: "Dark",
													},
													{
														value: "auto",
														icon: { id: "circle-half" },
														label: "Auto",
													},
												],
												getSavedTheme() as IMainContainer["currentTheme"]
											)
										),
									]
								),
							]
						),
					]
				),
			]
		);

		const bg = new h.div(
			{
				viewWidth: "100",
				viewHeight: "100",
				style: {
					backgroundImage:
						"linear-gradient(180deg, rgba(var(--bs-body-bg-rgb), 0.01), rgba(var(--bs-body-bg-rgb), 1) 85%),radial-gradient(ellipse at top left, rgba(var(--bs-primary-rgb), 0.5), transparent 50%),radial-gradient(ellipse at top right, rgba(var(--bs-success-rgb), 0.5), transparent 50%),radial-gradient(ellipse at center right, rgba(var(--bs-primary-rgb), 0.5), transparent 50%),radial-gradient(ellipse at center left, rgba(var(--bs-danger-rgb), 0.5), transparent 50%)",
				},
			},
			[header, jumbotrons, footer]
		);

		return [bg];
	},
};

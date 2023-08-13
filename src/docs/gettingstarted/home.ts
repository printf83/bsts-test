import { h, b, core, s } from "@printf83/bsts";
import { IContent, setupContentDocument } from "../../ctl/main/content.js";
import { BOOTSWATCHDB, CURRENTVERSION, THEMEDB } from "../../ctl/main/_db.js";
import { setupFooter } from "../../ctl/main/footer.js";
import { setupOutsideLink } from "../../ctl/main/outsidelink.js";
import { genBootswatch, getSavedBootswatch } from "../../ctl/main/bootswatch.js";
import { setupInsideLink } from "../../ctl/main/insidelink.js";
import { showSearchDialog } from "../../ctl/main/search.js";
import { getSavedTheme, setupTheme } from "../../ctl/main/theme.js";
import { showMemoryTestDialog } from "../../ctl/main/memorytest.js";
import { IMainContainer } from "../../ctl/main/container.js";
import { failCopyCode, successCopyCode } from "../../ctl/example/code.js";
import { highlightMenu } from "../../ctl/main/menu.js";
import { cookie } from "../../ctl/main/cookie.js";

function itemCodeCopy(e: Event) {
	e.stopPropagation();
	e.stopImmediatePropagation();

	const target = e.currentTarget as Element;
	const iconElem = target.firstChild as Element;
	const text = target.previousSibling?.textContent;

	if (text) {
		navigator.clipboard.writeText(text).then(
			() => {
				successCopyCode(iconElem);
			},
			() => {
				failCopyCode(iconElem);
			}
		);
	} else {
		failCopyCode(iconElem);
	}

	return false;
}

const arrowNextIcon = new s(
	'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>'
);

interface colorPalletItem {
	light: string;
	dark: string;
	primary: string;
	secondary: string;
	info: string;
	success: string;
	warning: string;
	danger: string;
}

const COLORPALLETDB = (): colorPalletItem[] => {
	return [
		{
			light: "#f8f9fa",
			dark: "#212529",
			primary: "#0d6efd",
			secondary: "#6c757d",
			info: "#0dcaf0",
			success: "#198754",
			warning: "#ffc107",
			danger: "#dc3545",
		},
		{
			light: "#f8f9fa",
			dark: "#212529",
			primary: "#712cf9",
			secondary: "#6c757d",
			info: "#0dcaf0",
			success: "#198754",
			warning: "#ffc107",
			danger: "#dc3545",
		},
		{
			light: "#add4cd",
			dark: "#290405",
			primary: "#610ebb",
			secondary: "#e85129",
			info: "#e5a832",
			success: "#0cad69",
			warning: "#e2ce0b",
			danger: "#f22704",
		},
		{
			light: "#c1f0fa",
			dark: "#0b0d0e",
			primary: "#731949",
			secondary: "#e62c74",
			info: "#dcb0a9",
			success: "#1fa976",
			warning: "#d6d11e",
			danger: "#e2410e",
		},
		{
			light: "#f9e6c1",
			dark: "#2b170b",
			primary: "#0d4a3c",
			secondary: "#42878a",
			info: "#00e0e2",
			success: "#00b03b",
			warning: "#f5c800",
			danger: "#f8003f",
		},
		{
			light: "#d9f8fe",
			dark: "#00263c",
			primary: "#043150",
			secondary: "#ea1570",
			info: "#f4d1c6",
			success: "#0cac60",
			warning: "#e7cc0b",
			danger: "#f80804",
		},
		{
			light: "#f5c8c3",
			dark: "#070706",
			primary: "#c4a04d",
			secondary: "#504e3e",
			info: "#be5c56",
			success: "#51a629",
			warning: "#fdc151",
			danger: "#f0175d",
		},
		{
			light: "#e0e6f2",
			dark: "#20095d",
			primary: "#3300f5",
			secondary: "#c8787b",
			info: "#fad9cf",
			success: "#00ba6e",
			warning: "#e7d100",
			danger: "#fa2100",
		},
		{
			light: "#cfd2f2",
			dark: "#040f28",
			primary: "#63c3d2",
			secondary: "#136364",
			info: "#a85b89",
			success: "#14af55",
			warning: "#edcb13",
			danger: "#f8082c",
		},
		{
			light: "#d1efee",
			dark: "#040530",
			primary: "#3840b4",
			secondary: "#d83e88",
			info: "#ebba9f",
			success: "#2daf6c",
			warning: "#e4cf2b",
			danger: "#f32817",
		},
		{
			light: "#f1e5aa",
			dark: "#0a0807",
			primary: "#5f3527",
			secondary: "#954527",
			info: "#d50031",
			success: "#4e9400",
			warning: "#ffba43",
			danger: "#ea0060",
		},
		{
			light: "#e4d8d1",
			dark: "#191728",
			primary: "#483b2a",
			secondary: "#e7342e",
			info: "#f94134",
			success: "#4a9d13",
			warning: "#febd37",
			danger: "#ed095c",
		},
		{
			light: "#ccf1eb",
			dark: "#070c0d",
			primary: "#0f3943",
			secondary: "#c62c44",
			info: "#5944e8",
			success: "#19974e",
			warning: "#e4c51c",
			danger: "#ed0d25",
		},
		{
			light: "#bcd2ee",
			dark: "#0e060b",
			primary: "#003bfc",
			secondary: "#56443c",
			info: "#e14355",
			success: "#009858",
			warning: "#dec800",
			danger: "#eb1c00",
		},
		{
			light: "#cde8dd",
			dark: "#2f155a",
			primary: "#3e4349",
			secondary: "#3266f8",
			info: "#0078b0",
			success: "#009a53",
			warning: "#e2c700",
			danger: "#f00005",
		},
		{
			light: "#c8e9f9",
			dark: "#230749",
			primary: "#002ca1",
			secondary: "#9c3097",
			info: "#c1a5bf",
			success: "#00a05d",
			warning: "#e0ca00",
			danger: "#ef1b00",
		},
		{
			light: "#b5b5a7",
			dark: "#6e3a3b",
			primary: "#6f5560",
			secondary: "#866868",
			info: "#c4faf5",
			success: "#3cb784",
			warning: "#dad535",
			danger: "#e6471d",
		},
		{
			light: "#8f5e52",
			dark: "#05283c",
			primary: "#c9254e",
			secondary: "#e96796",
			info: "#97f286",
			success: "#72bc24",
			warning: "#fec88b",
			danger: "#fb126d",
		},
		{
			light: "#ede9fb",
			dark: "#462eac",
			primary: "#0f60ff",
			secondary: "#c860f7",
			info: "#debefc",
			success: "#00be6e",
			warning: "#ead200",
			danger: "#fd1c00",
		},
		{
			light: "#a9e5fb",
			dark: "#353476",
			primary: "#a185d5",
			secondary: "#969ce8",
			info: "#debefc",
			success: "#19ca7d",
			warning: "#ead613",
			danger: "#fe2c08",
		},
		{
			light: "#cde8dd",
			dark: "#2f155a",
			primary: "#3e4349",
			secondary: "#3266f8",
			info: "#0078b0",
			success: "#009a53",
			warning: "#e2c700",
			danger: "#f00005",
		},
		{
			light: "#dadef2",
			dark: "#1a1a29",
			primary: "#493085",
			secondary: "#d84357",
			info: "#7b5ec3",
			success: "#2d9861",
			warning: "#dcc930",
			danger: "#e62c1a",
		},
		{
			light: "#0c40d5",
			dark: "#f5f100",
			primary: "#074712",
			secondary: "#129458",
			info: "#f92a0c",
			success: "#05a113",
			warning: "#f5c206",
			danger: "#f00248",
		},
		{
			light: "#c8e9f9",
			dark: "#230749",
			primary: "#002ca1",
			secondary: "#9c3097",
			info: "#c1a5bf",
			success: "#00a05d",
			warning: "#e0ca00",
			danger: "#ef1b00",
		},
		{
			light: "#dce3e1",
			dark: "#130025",
			primary: "#91154b",
			secondary: "#d10f78",
			info: "#ecad47",
			success: "#0ba976",
			warning: "#d4d20a",
			danger: "#e14203",
		},
		{
			light: "#ffedd2",
			dark: "#080403",
			primary: "#643e2d",
			secondary: "#dc5540",
			info: "#eeb370",
			success: "#61aa2e",
			warning: "#fdc26f",
			danger: "#f11a65",
		},
	];
};

const removeCustomVarContainer = (name?: string) => {
	const customVarContainer = document.getElementById(
		`bsts-custom${name ? "-" + name : ""}-var-container`
	);

	if (customVarContainer) {
		core.removeElement(customVarContainer);
	}
};

const removeAllCustomVar = () => {
	removeCustomVarContainer("primary");
	removeCustomVarContainer("secondary");
	removeCustomVarContainer("success");
	removeCustomVarContainer("info");
	removeCustomVarContainer("warning");
	removeCustomVarContainer("danger");
	removeCustomVarContainer("dark");
	removeCustomVarContainer("light");
	removeCustomVarContainer("body");
	removeCustomVarContainer();
};

const colorPalletItem = (value: colorPalletItem) => {
	return new h.div({ class: "color-pallet", paddingStart: 3, paddingEnd: 1 }, [
		new h.div({ style: { backgroundColor: value.primary } }),
		new h.div({ style: { backgroundColor: value.secondary } }),
		new h.div({ style: { backgroundColor: value.success } }),
		new h.div({ style: { backgroundColor: value.danger } }),
		new h.div({ style: { backgroundColor: value.warning } }),
		new h.div({ style: { backgroundColor: value.info } }),
		new h.div({ style: { backgroundColor: value.light } }),
		new h.div({ style: { backgroundColor: value.dark } }),
	]);
};

const colorPalletChange = (event: Event) => {
	const target = event.currentTarget as Element;
	const dataValue = target.getAttribute("data-value");
	if (dataValue) {
		const value: colorPalletItem = JSON.parse(dataValue) as colorPalletItem;
		if (value) {
			const dark = "#000";
			const light = "#fff";

			const css = [
				core.accentColor.primary(value.primary, light, dark),
				core.accentColor.success(value.success, light, dark),
				core.accentColor.danger(value.danger, light, dark),
				core.accentColor.info(value.info, light, dark),
				core.accentColor.warning(value.warning, light, dark),
				core.accentColor.secondary(value.secondary, light, dark),
				core.accentColor.light(value.light, light, dark),
				core.accentColor.dark(value.dark, light, dark),
			];

			//remove all custom var container
			removeAllCustomVar();

			//add bsts-custom-var-container to head
			core.accentColor.apply(css.join("\n"));

			//update dropdown label
			// const btnPallet = target.closest(".dropdown-menu")?.previousSibling as Element;
			// core.replaceChild(btnPallet, colorPalletItem(value));

			//save into cookies
			cookie.set("current_color", dataValue);
		}
	}
};

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
				new h.div(
					{ style: { height: "17rem" } },
					new b.icon({
						id: "hexagon-fill",
						class: "animated-icon",
						marginBottom: 3,
						textColor: "primary-emphasis",
						style: {
							fontSize: "11rem",
							textShadow: "0 0 0.5rem var(--bs-primary-border-subtle)",
						},
					})
				),

				new h.h(
					1,
					{ marginBottom: 3, fontWeight: "semibold", lineHeight: 1, fontDisplay: 3 },
					"Testing website for Bootstrap TS"
				),
				new h.p(
					{ lead: true, marginBottom: 4, fontWeight: "normal" },
					"{{b::Note:}} This is not a real Bootstrap website. This is only a Bootstrap TS test website to test {{https://github.com/printf83/bsts::@printf83/bsts}} library and make sure it's fully support Bootstrap."
				),
				new h.div(
					{
						display: ["grid", "md-flex"],
						flex: "wrap",
						justifyContent: "md-center",
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
								paddingX: 4,
								paddingY: 3,
								bgColor: "body-tertiary",
								textColor: "body-emphasis",
							},
							[
								"$",
								new h.span(`npm i @printf83/bsts@${CURRENTVERSION}`),
								new h.a(
									{
										textDecoration: "none",
										textColor: "body-emphasis",
										textColorHover: "primary",
										on: {
											click: itemCodeCopy,
										},
									},
									new b.icon({ id: "clipboard" })
								),
							]
						),
						new b.button(
							{
								weight: "lg",
								display: "flex",
								justifyContent: "center",
								alignItem: "center",
								paddingX: 5,
								paddingY: 3,
								on: {
									click: () => {
										setupContentDocument("docs/gettingstarted/introduction");
										highlightMenu("docs/gettingstarted/introduction");
									},
								},
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
							[
								new h.i(
									{ marginEnd: 2 },
									new b.icon({
										id: "hexagon-fill",
										class: "animated-icon",
										fontSize: 3,
									})
								),
								"Bootstrap TS",
							]
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

		const bsNavbar = core.UUID();
		const bsNavbarOffcanvasLabel = core.UUID();

		const header = new b.navbar.containerHeader(
			{
				class: "bs-main-navbar",
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
						new b.navbar.brand(
							{
								href: "#",
								label: "Bootstrap TS",
								marginEnd: "lg-2",
								fontSize: 6,
								padding: 0,
								marginStart: ["lg-0", "2"],
								on: {
									click: () => {
										window.scrollTo(0, 0);
									},
								},
							},
							new b.icon({
								id: "hexagon-fill",
								class: "animated-icon",
								fontSize: 3,
							})
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
									target: `#${bsNavbar}`,
									controlfor: bsNavbar,
									label: "Toggle navigation",
								},
								b.icon.bi("three-dots")
							),
						]),
						new b.offcanvas.container(
							{
								id: bsNavbar,
								class: "bs-main-navbar-offcanvas",
								placement: "end",
								show: "lg",
								flex: "grow-1",
								labelledby: bsNavbarOffcanvasLabel,
								scroll: true,
							},
							[
								new b.offcanvas.header(
									{
										paddingX: 4,
										paddingBottom: 0,
									},
									[
										new b.offcanvas.title(
											{
												id: bsNavbarOffcanvasLabel,
											},
											"Bootstrap TS"
										),
										new b.offcanvas.btnclose({
											target: `#${bsNavbar}`,
											white: true,
										}),
									]
								),
								new b.offcanvas.body(
									{
										padding: [4, "lg-0"],
										paddingTop: 0,
									},
									[
										...setupInsideLink(
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
											"docs/gettingstarted/home"
										),
										...setupOutsideLink(
											[
												{
													href: "#",
													icon: { id: "speedometer" },
													label: "Memory test",
													onclick: (event) => {
														const target =
															event.currentTarget as Element;
														const offcanvas = target.closest(
															".offcanvas-lg"
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
											genBootswatch(BOOTSWATCHDB, getSavedBootswatch()),
											setupTheme(
												THEMEDB,
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

		const feature = (arg: {
			icon: string;
			title: string;
			description: string;
			elem?: core.IElem;
		}) => {
			return new h.div(
				{
					marginBottom: 5,
					display: "flex",
					flex: "column",
					alignItem: ["start", "md-center"],
					justifyContent: ["start", "md-center"],
				},
				[
					new h.div(
						new h.div(
							{
								display: "inline-flex",
								alignItem: "center",
								justifyContent: "center",
								bgColor: "primary-subtle",
								textColor: "primary-emphasis",
								fontDisplay: 4,
								marginBottom: 3,
								paddingX: 3,
								paddingY: 2,
								rounded: 3,
							},
							new b.icon(arg.icon)
						)
					),
					new h.h(2, { fontDisplay: 5, fontWeight: "semibold", col: "md-6" }, arg.title),
					new h.p({ lead: true, fontWeight: "normal", col: "md-6" }, arg.description),
					new h.p(
						{
							lead: true,
							fontWeight: "normal",
						},
						arg.elem ? arg.elem : ""
					),
				]
			);
		};

		const main = new h.div(
			{
				container: true,
				paddingY: 4,
				paddingX: [4, "md-3"],
				textAlign: ["start", "md-center"],
			},
			[
				{
					icon: "speedometer",
					title: "Unleash the Power of Speed!",
					description:
						"Built with performance in mind, our library is optimized to deliver a seamless and snappy user experience, making your web applications faster than ever before!",
					elem: new h.a(
						{
							href: "#",
							iconLink: "hover",
							on: {
								click: () => {
									showMemoryTestDialog();
								},
							},
						},
						["Run memory test", arrowNextIcon]
					),
				},
				{
					icon: "palette",
					title: "Elevate Your Design with Accent Color Support!",
					description:
						"With our library, you can easily customize accent colors to match your brand or design preferences. Effortlessly add a touch of uniqueness and style to your web projects by leveraging our accent color support.",
					elem: new h.div(
						{
							display: "flex",
							flex: "column",
							alignItem: "center",
							justifyContent: "center",
						},
						[
							new h.div({ class: "color-pallet-big", marginBottom: 3 }, [
								new h.div({ bgColor: "primary", title: "primary" }),
								new h.div({ bgColor: "secondary", title: "Secondary" }),
								new h.div({ bgColor: "success", title: "Success" }),
								new h.div({ bgColor: "danger", title: "Danger" }),
								new h.div({ bgColor: "warning", title: "Warning" }),
								new h.div({ bgColor: "info", title: "Info" }),
								new h.div({ bgColor: "light", title: "Light" }),
								new h.div({ bgColor: "dark", title: "Dark" }),
							]),
							new b.dropdown.container([
								new b.dropdown.button(
									{
										id: "btn-color-pallet",
										display: "flex",
										alignItem: "center",
										weight: "lg",
										paddingX: 4,
										paddingY: 2,
										marginBottom: 3,
									},
									"Choose color pallet"
								),
								new b.dropdown.menu(
									{ dropdownMenuPositionView: "center" },
									new h.div(
										{
											display: "grid",
											gap: 1,
											gridTemplateColumns: "1fr 1fr",
											overflowX: "auto",
										},
										COLORPALLETDB().map(
											(i: {
												light: string;
												dark: string;
												primary: string;
												secondary: string;
												info: string;
												success: string;
												warning: string;
												danger: string;
											}) => {
												return new b.dropdown.item(
													{
														paddingX: 1,
														data: {
															value: JSON.stringify(i),
														},
														on: {
															click: colorPalletChange,
														},
													},
													colorPalletItem(i)
												);
											}
										)
									)
								),
							]),
							new h.a(
								{
									href: "#",
									iconLink: "hover",
									on: {
										click: () => {
											setupContentDocument("docs/bsts/accent_color");
											highlightMenu("docs/bsts/accent_color");
										},
									},
								},
								["Read documentation", arrowNextIcon]
							),
						]
					),
				},
				{
					icon: "palette2",
					title: "Find Your Perfect Fit!",
					description:
						"No more struggling to find the perfect theme! Our library lets you effortlessly compare our theme variations side-by-side with a wide range of Bootswatch themes. Choose the design that best suits your vision, and seamlessly integrate it into your web applications with just a few lines of code.",
					elem: new h.a(
						{
							href: "#",
							iconLink: "hover",
							on: {
								click: () => {
									setupContentDocument("docs/gettingstarted/bootswatch");
									highlightMenu("docs/gettingstarted/bootswatch");
								},
							},
						},
						["Read documentation", arrowNextIcon]
					),
				},
			].map((i: { icon: string; title: string; description: string; elem?: core.IElem }) => {
				return feature({
					icon: i.icon,
					title: i.title,
					description: i.description,
					elem: i.elem,
				});
			})
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
			[header, jumbotrons, main, footer]
		);

		return [bg];
	},
};

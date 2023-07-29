import { h, b } from "@printf83/bsts";
import { menuWithBookmark } from "./bookmark.js";
import { getSavedBootswatch } from "./bootswatch.js";
import { IMainContainer, container } from "./container.js";
import { showMemoryTestDialog } from "./memorytest.js";
import { getSavedTheme } from "./theme.js";
import { BOOTSWATCHDB, THEMEDB } from "./_db.js";

export const mainContainer = () => {
	return new container({
		name: "Bootstrap TS",
		bgColor: "primary",
		textColor: "light",
		icon: new h.div(
			{ class: "animated-icon", fontSize: 3 },
			new b.icon({ id: "hexagon-fill" })
		),
		itemMenu: menuWithBookmark(),
		itemInsideLink: [
			{ value: "docs/gettingstarted/home", label: "Home" },
			{ value: "docs/gettingstarted/introduction", label: "Docs" },
		],
		currentInsideLink: "docs/gettingstarted/introduction",
		itemOutsideLink: [
			{
				href: "#",
				icon: { id: "speedometer" },
				label: "Memory test",
				onclick: (event) => {
					const target = event.currentTarget as Element;
					const offcanvas = target.closest(".offcanvas-lg") as Element;
					b.offcanvas.hide(offcanvas);
					showMemoryTestDialog();
				},
			},
			{ href: "https://github.com/printf83/bsts", icon: { id: "github" }, label: "Github" },
			{ href: "https://twitter.com/printf83", icon: { id: "twitter" }, label: "Twitter" },
			{ href: "https://getbootstrap.com/", icon: { id: "bootstrap" }, label: "Bootstrap" },
		],
		itemTheme: THEMEDB,
		currentTheme: getSavedTheme() as IMainContainer["currentTheme"],
		itemBootswatch: BOOTSWATCHDB,
		currentBootswatch: getSavedBootswatch(),
		// content: {
		// 	loading: true,
		// 	item: () => {
		// 		return Array(core.rndBetween(3, 10))
		// 			.fill("")
		// 			.map(() => {
		// 				return new e.section([
		// 					new e.title(
		// 						{ loadingPlaceholderAnimation: "wave" },
		// 						core.placeholder(3, 6, 1, 3)
		// 					),
		// 					...Array(core.rndBetween(1, 3))
		// 						.fill("")
		// 						.map(() => {
		// 							return new e.text(
		// 								{ loadingPlaceholderAnimation: "wave" },
		// 								core.placeholder(10, 20)
		// 							);
		// 						}),
		// 					new e.item(
		// 						new b.card.container(
		// 							{ style: { minHeight: "18rem" } },
		// 							new b.card.body("")
		// 						)
		// 					),
		// 				]);
		// 			})
		// 			.flat();
		// 	},
		// } as IContent,
		itemFooter: [
			{
				title: "Links",
				item: [
					{ href: "https://getbootstrap.com/", label: "Home" },
					{ href: "https://getbootstrap.com/docs/5.3/", label: "Docs" },
					{ href: "https://getbootstrap.com/docs/5.3/examples/", label: "Examples" },
					{ href: "https://icons.getbootstrap.com/", label: "Icons" },
					{ href: "https://themes.getbootstrap.com/", label: "Themes" },
					{ href: "https://blog.getbootstrap.com/", label: "Blog" },
					{ href: "https://cottonbureau.com/people/bootstrap", label: "Swag Store" },
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
					{ href: "https://github.com/twbs/bootstrap/tree/v4-dev", label: "Bootstrap 4" },
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
		],
	});
};

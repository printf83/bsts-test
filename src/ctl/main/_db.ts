import { IMenu, IMenuItem } from "./menu.js";

export const DEFAULTDOCUMENT = "docs/gettingstarted/home";
export const CURRENTVERSION = "1.1.1";

export const THEMEDB = [
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
];

export const BOOTSWATCHDB = [
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
];

export const menuFS = [
	{ label: "Album", value: "docs/example/album" },
	{ label: "Pricing", value: "docs/example/pricing" },
	{ label: "Checkout", value: "docs/example/checkout" },
	{ label: "Product", value: "docs/example/product" },
	{ label: "Cover", value: "docs/example/cover" },
	{ label: "Carousel", value: "docs/example/carousel" },
	{ label: "Blog", value: "docs/example/blog" },
	{ label: "Dashboard", value: "docs/example/dashboard" },
	{ label: "Sign in", value: "docs/example/sign_in" },
	{ label: "Sticky footer", value: "docs/example/sticky_footer" },
	{ label: "Sticky footer navbar", value: "docs/example/sticky_footer_navbar" },
	{ label: "Jumbotron", value: "docs/example/jumbotron" },
];

export const menu: IMenu[] = [
	{
		label: "Getting started",
		icon: { id: "book-half", textColor: "primary" },
		item: [
			{ label: "Introduction", value: "docs/gettingstarted/introduction" },
			{ label: "Bootswatch", value: "docs/gettingstarted/bootswatch" },
		],
	},
	{
		label: "Customize",
		icon: { id: "palette2", textColor: "danger" },
		item: [{ label: "Color", value: "docs/customize/color" }],
	},
	{
		label: "Layout",
		icon: { id: "grid-fill", textColor: "success" },
		item: [
			{ label: "Breakpoints", value: "docs/layout/breakpoints" },
			{ label: "Containers", value: "docs/layout/containers" },
			{ label: "Grid", value: "docs/layout/grid" },
			{ label: "Columns", value: "docs/layout/columns" },
			{ label: "Gutters", value: "docs/layout/gutters" },
			{ label: "Utilities", value: "docs/layout/utilities" },
			{ label: "Z-index", value: "docs/layout/zindex" },
			{ label: "CSS Grid", value: "docs/layout/cssgrid" },
		],
	},
	{
		label: "Content",
		icon: { id: "file-earmark-richtext", textColor: "secondary" },
		item: [
			{ label: "Reboot", value: "docs/content/reboot" },
			{ label: "Typography", value: "docs/content/typography" },
			{ label: "Images", value: "docs/content/images" },
			{ label: "Tables", value: "docs/content/tables" },
			{ label: "Figures", value: "docs/content/figures" },
		],
	},
	{
		label: "Forms",
		icon: { id: "ui-radios", textColor: "primary" },
		item: [
			{ label: "Overview", value: "docs/forms/overview" },
			{ label: "Form control", value: "docs/forms/control" },
			{ label: "Select", value: "docs/forms/select" },
			{ label: "Checks & radios", value: "docs/forms/check_radio" },
			{ label: "Range", value: "docs/forms/range" },
			{ label: "Input group", value: "docs/forms/input_group" },
			{ label: "Floating labels", value: "docs/forms/floating_label" },
			{ label: "Layout", value: "docs/forms/layout" },
			{ label: "Validation", value: "docs/forms/validation" },
		],
	},
	{
		label: "Component",
		icon: { id: "menu-button-wide-fill", textColor: "info" },
		item: [
			{ label: "Accordion", value: "docs/components/accordion" },
			{ label: "Alert", value: "docs/components/alert" },
			{ label: "Badge", value: "docs/components/badge" },
			{ label: "Breadcrumb", value: "docs/components/breadcrumb" },
			{ label: "Button", value: "docs/components/button" },
			{ label: "Button group", value: "docs/components/button_group" },
			{ label: "Card", value: "docs/components/card" },
			{ label: "Carousel", value: "docs/components/carousel" },
			{ label: "Close button", value: "docs/components/close_button" },
			{ label: "Collapse", value: "docs/components/collapse" },
			{ label: "Dropdowns", value: "docs/components/dropdown" },
			{ label: "List group", value: "docs/components/list" },
			{ label: "Modal", value: "docs/components/modal" },
			{ label: "Navbar", value: "docs/components/navbar" },
			{ label: "Navs & tabs", value: "docs/components/nav" },
			{ label: "Offcanvas", value: "docs/components/offcanvas" },
			{ label: "Pagination", value: "docs/components/pagination" },
			{ label: "Placeholder", value: "docs/components/placeholder" },
			{ label: "Popovers", value: "docs/components/popover" },
			{ label: "Progress", value: "docs/components/progress" },
			{ label: "Scrollspy", value: "docs/components/scrollspy" },
			{ label: "Spinners", value: "docs/components/spinner" },
			{ label: "Toasts", value: "docs/components/toast" },
			{ label: "Tooltips", value: "docs/components/tooltip" },
		],
	},
	{
		label: "Helpers",
		icon: { id: "magic", textColor: "warning" },
		item: [
			{ label: "Clearfix", value: "docs/helpers/clearfix" },
			{ label: "Color & background", value: "docs/helpers/color_background" },
			{ label: "Colored links", value: "docs/helpers/colored_links" },
			{ label: "Focus ring", value: "docs/helpers/focus_ring" },
			{ label: "Icon link", value: "docs/helpers/icon_link" },
			{ label: "Position", value: "docs/helpers/position" },
			{ label: "Ratio", value: "docs/helpers/ratio" },
			{ label: "Stacks", value: "docs/helpers/stacks" },
			{ label: "Stretched link", value: "docs/helpers/stretched_link" },
			{ label: "Text truncation", value: "docs/helpers/text_truncation" },
			{ label: "Vertical rule", value: "docs/helpers/vertical_rule" },
			{ label: "Visually hidden", value: "docs/helpers/visually_hidden" },
		],
	},
	{
		label: "Utilities",
		icon: { id: "braces-asterisk", textColor: "danger" },
		item: [
			{ label: "API", value: "docs/utilities/api" },
			{ label: "Background", value: "docs/utilities/background" },
			{ label: "Borders", value: "docs/utilities/borders" },
			{ label: "Colors", value: "docs/utilities/colors" },
			{ label: "Display", value: "docs/utilities/display" },
			{ label: "Flex", value: "docs/utilities/flex" },
			{ label: "Float", value: "docs/utilities/float" },
			{ label: "Interactions", value: "docs/utilities/interactions" },
			{ label: "Link", value: "docs/utilities/link" },
			{ label: "Object fit", value: "docs/utilities/object_fit" },
			{ label: "Opacity", value: "docs/utilities/opacity" },
			{ label: "Overflow", value: "docs/utilities/overflow" },
			{ label: "Position", value: "docs/utilities/position" },
			{ label: "Shadows", value: "docs/utilities/shadow" },
			{ label: "Sizing", value: "docs/utilities/sizing" },
			{ label: "Spacing", value: "docs/utilities/spacing" },
			{ label: "Text", value: "docs/utilities/text" },
			{ label: "Vertical align", value: "docs/utilities/vertical_align" },
			{ label: "Visibility", value: "docs/utilities/visibility" },
			{ label: "Z-index", value: "docs/utilities/zindex" },
		],
	},
	{
		label: "Snippets",
		icon: { id: "code", textColor: "success" },
		item: [
			{ label: "Headers", value: "docs/snippets/headers" },
			{ label: "Heroes", value: "docs/snippets/heroes" },
			{ label: "Features", value: "docs/snippets/features" },
			{ label: "Sidebars", value: "docs/snippets/sidebars" },
			{ label: "Footers", value: "docs/snippets/footers" },
			{ label: "Dropdowns", value: "docs/snippets/dropdowns" },
			{ label: "List groups", value: "docs/snippets/list_groups" },
			{ label: "Modals", value: "docs/snippets/modals" },
			{ label: "Badges", value: "docs/snippets/badges" },
			{ label: "Breadcrumbs", value: "docs/snippets/breadcrumbs" },
			{ label: "Buttons", value: "docs/snippets/buttons" },
			{ label: "Jumbotrons", value: "docs/snippets/jumbotrons" },
		],
	},
	{
		label: "Example",
		icon: { id: "archive-fill", textColor: "secondary" },
		item: menuFS,
	},
	{
		label: "More",
		icon: { id: "hexagon-fill", textColor: "primary" },
		item: [
			{ label: "Animation", value: "docs/bsts/animation" },
			{ label: "Transform", value: "docs/bsts/transform" },
			{ label: "Extended property", value: "docs/bsts/extended_prop" },
			{ label: "ChartJS", value: "docs/bsts/chart" },
			{ label: "Accent color", value: "docs/bsts/accent_color" },
			{ label: "Test", value: "docs/bsts/test" },
		],
	},
];

let menuItemDB: IMenuItem[] = [];
export const menuItem = (): IMenuItem[] => {
	if (menuItemDB && menuItemDB.length > 0) {
		return menuItemDB;
	} else {
		menuItemDB = menu.map((i) => i.item).flat();
		return menuItem();
	}
};

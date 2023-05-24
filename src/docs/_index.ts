import * as gettingstarted from "./gettingstarted/_index.js";
import * as forms from "./forms/_index.js";
import * as components from "./components/_index.js";
import * as utilities from "./utilities/_index.js";
import * as helpers from "./helpers/_index.js";
import * as content from "./content/_index.js";
import * as layout from "./layout/_index.js";
import * as customize from "./customize/_index.js";
import * as example from "./example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc = async (value: string) => {
	let result: IAttrContent;

	switch (value) {
		//--------------------------
		case "docs/example/headers":
			result = await example.headers();
			break;
		case "docs/example/heroes":
			result = await example.heroes();
			break;
		case "docs/example/features":
			result = await example.features();
			break;
		case "docs/example/sidebars":
			result = await example.sidebars();
			break;

		//--------------------------
		case "docs/customize/color":
			result = await customize.color();
			break;

		//--------------------------
		case "docs/layout/breakpoints":
			result = await layout.breakpoints();
			break;
		case "docs/layout/containers":
			result = await layout.containers();
			break;
		case "docs/layout/grid":
			result = await layout.grid();
			break;
		case "docs/layout/columns":
			result = await layout.columns();
			break;
		case "docs/layout/gutters":
			result = await layout.gutters();
			break;
		case "docs/layout/utilities":
			result = await layout.utilities();
			break;
		case "docs/layout/zindex":
			result = await layout.zindex();
			break;
		case "docs/layout/cssgrid":
			result = await layout.cssgrid();
			break;

		//--------------------------
		case "docs/content/reboot":
			result = await content.reboot();
			break;
		case "docs/content/typography":
			result = await content.typography();
			break;
		case "docs/content/images":
			result = await content.images();
			break;
		case "docs/content/tables":
			result = await content.tables();
			break;
		case "docs/content/figures":
			result = await content.figures();
			break;

		//--------------------------
		case "docs/helpers/clearfix":
			result = await helpers.clearfix();
			break;
		case "docs/helpers/color_background":
			result = await helpers.color_background();
			break;
		case "docs/helpers/colored_links":
			result = await helpers.colored_links();
			break;
		case "docs/helpers/focus_ring":
			result = await helpers.focus_ring();
			break;
		case "docs/helpers/icon_link":
			result = await helpers.icon_link();
			break;
		case "docs/helpers/position":
			result = await helpers.position();
			break;
		case "docs/helpers/ratio":
			result = await helpers.ratio();
			break;
		case "docs/helpers/stacks":
			result = await helpers.stacks();
			break;
		case "docs/helpers/stretched_link":
			result = await helpers.stretched_link();
			break;
		case "docs/helpers/text_truncation":
			result = await helpers.text_truncation();
			break;
		case "docs/helpers/vertical_rule":
			result = await helpers.vertical_rule();
			break;
		case "docs/helpers/visually_hidden":
			result = await helpers.visually_hidden();
			break;

		//--------------------------
		case "docs/utilities/api":
			result = await utilities.api();
			break;
		case "docs/utilities/background":
			result = await utilities.background();
			break;
		case "docs/utilities/colors":
			result = await utilities.colors();
			break;
		case "docs/utilities/borders":
			result = await utilities.borders();
			break;
		case "docs/utilities/display":
			result = await utilities.display();
			break;
		case "docs/utilities/flex":
			result = await utilities.flex();
			break;
		case "docs/utilities/float":
			result = await utilities.float();
			break;
		case "docs/utilities/interactions":
			result = await utilities.interactions();
			break;
		case "docs/utilities/link":
			result = await utilities.link();
			break;
		case "docs/utilities/object_fit":
			result = await utilities.object_fit();
			break;
		case "docs/utilities/opacity":
			result = await utilities.opacity();
			break;
		case "docs/utilities/overflow":
			result = await utilities.overflow();
			break;
		case "docs/utilities/position":
			result = await utilities.position();
			break;
		case "docs/utilities/shadow":
			result = await utilities.shadow();
			break;
		case "docs/utilities/sizing":
			result = await utilities.sizing();
			break;
		case "docs/utilities/spacing":
			result = await utilities.spacing();
			break;
		case "docs/utilities/text":
			result = await utilities.text();
			break;
		case "docs/utilities/vertical_align":
			result = await utilities.vertical_align();
			break;
		case "docs/utilities/visibility":
			result = await utilities.visibility();
			break;
		case "docs/utilities/zindex":
			result = await utilities.zindex();
			break;

		//--------------------------
		case "docs/forms/overview":
			result = await forms.overview();
			break;
		case "docs/forms/control":
			result = await forms.control();
			break;
		case "docs/forms/select":
			result = await forms.select();
			break;
		case "docs/forms/check_radio":
			result = await forms.check_radio();
			break;
		case "docs/forms/range":
			result = await forms.range();
			break;
		case "docs/forms/floating_label":
			result = await forms.floating_label();
			break;
		case "docs/forms/input_group":
			result = await forms.input_group();
			break;
		case "docs/forms/layout":
			result = await forms.layout();
			break;
		case "docs/forms/validation":
			result = await forms.validation();
			break;

		//--------------------------
		case "docs/components/accordion":
			result = await components.accordion();
			break;
		case "docs/components/alert":
			result = await components.alert();
			break;
		case "docs/components/badge":
			result = await components.badge();
			break;
		case "docs/components/breadcrumb":
			result = await components.breadcrumb();
			break;
		case "docs/components/button":
			result = await components.button();
			break;
		case "docs/components/button_group":
			result = await components.button_group();
			break;
		case "docs/components/card":
			result = await components.card();
			break;
		case "docs/components/carousel":
			result = await components.carousel();
			break;
		case "docs/components/close_button":
			result = await components.close_button();
			break;
		case "docs/components/collapse":
			result = await components.collapse();
			break;
		case "docs/components/dropdown":
			result = await components.dropdown();
			break;
		case "docs/components/list":
			result = await components.list();
			break;
		case "docs/components/modal":
			result = await components.modal();
			break;
		case "docs/components/navbar":
			result = await components.navbar();
			break;
		case "docs/components/nav":
			result = await components.nav();
			break;
		case "docs/components/offcanvas":
			result = await components.offcanvas();
			break;
		case "docs/components/pagination":
			result = await components.pagination();
			break;
		case "docs/components/popover":
			result = await components.popover();
			break;
		case "docs/components/placeholder":
			result = await components.placeholder();
			break;
		case "docs/components/progress":
			result = await components.progress();
			break;
		case "docs/components/scrollspy":
			result = await components.scrollspy();
			break;
		case "docs/components/spinner":
			result = await components.spinner();
			break;
		case "docs/components/toast":
			result = await components.toast();
			break;
		case "docs/components/tooltip":
			result = await components.tooltip();
			break;

		//--------------------------
		case "docs/gettingstarted/introduction":
			result = await gettingstarted.introduction();
			break;

		default:
			return null;
	}

	return result;
};

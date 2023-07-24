import * as gettingstarted from "./gettingstarted/_index.js";
import * as forms from "./forms/_index.js";
import * as components from "./components/_index.js";
import * as utilities from "./utilities/_index.js";
import * as helpers from "./helpers/_index.js";
import * as content from "./content/_index.js";
import * as layout from "./layout/_index.js";
import * as customize from "./customize/_index.js";
import * as snippets from "./snippets/_index.js";
import * as bsts from "./bsts/_index.js";
import * as custom_component from "./custom_component/_index.js";
import { IContent } from "../ctl/main/content.js";

export const doc = (value: string, callback: (result: IContent | null) => void) => {
	switch (value) {
		//--------------------------

		case "docs/custom_component/album":
			custom_component.album().then((res) => {
				callback(res.album);
			});
			break;
		case "docs/custom_component/pricing":
			custom_component.pricing().then((res) => {
				callback(res.pricing);
			});
			break;

		//--------------------------

		case "docs/bsts/animation":
			bsts.animation().then((res) => {
				callback(res.animation);
			});
			break;
		case "docs/bsts/transform":
			bsts.transform().then((res) => {
				callback(res.transform);
			});
			break;
		case "docs/bsts/extended_prop":
			bsts.extended_prop().then((res) => {
				callback(res.extended_prop);
			});
			break;
		case "docs/bsts/chart":
			bsts.chart().then((res) => {
				callback(res.chart);
			});
			break;
		case "docs/bsts/test":
			bsts.test().then((res) => {
				callback(res.test);
			});
			break;

		//--------------------------
		case "docs/snippets/headers":
			snippets.headers().then((res) => {
				callback(res.headers);
			});
			break;
		case "docs/snippets/heroes":
			snippets.heroes().then((res) => {
				callback(res.heroes);
			});
			break;
		case "docs/snippets/features":
			snippets.features().then((res) => {
				callback(res.features);
			});
			break;
		case "docs/snippets/sidebars":
			snippets.sidebars().then((res) => {
				callback(res.sidebars);
			});
			break;
		case "docs/snippets/footers":
			snippets.footers().then((res) => {
				callback(res.footers);
			});
			break;
		case "docs/snippets/dropdowns":
			snippets.dropdowns().then((res) => {
				callback(res.dropdowns);
			});
			break;
		case "docs/snippets/list_groups":
			snippets.list_groups().then((res) => {
				callback(res.list_groups);
			});
			break;
		case "docs/snippets/modals":
			snippets.modals().then((res) => {
				callback(res.modals);
			});
			break;
		case "docs/snippets/badges":
			snippets.badges().then((res) => {
				callback(res.badges);
			});
			break;
		case "docs/snippets/breadcrumbs":
			snippets.breadcrumbs().then((res) => {
				callback(res.breadcrumbs);
			});
			break;
		case "docs/snippets/buttons":
			snippets.buttons().then((res) => {
				callback(res.buttons);
			});
			break;
		case "docs/snippets/jumbotrons":
			snippets.jumbotrons().then((res) => {
				callback(res.jumbotrons);
			});
			break;

		//--------------------------
		case "docs/customize/color":
			customize.color().then((res) => {
				callback(res.color);
			});
			break;

		//--------------------------
		case "docs/layout/breakpoints":
			layout.breakpoints().then((res) => {
				callback(res.breakpoints);
			});
			break;
		case "docs/layout/containers":
			layout.containers().then((res) => {
				callback(res.containers);
			});
			break;
		case "docs/layout/grid":
			layout.grid().then((res) => {
				callback(res.grid);
			});
			break;
		case "docs/layout/columns":
			layout.columns().then((res) => {
				callback(res.columns);
			});
			break;
		case "docs/layout/gutters":
			layout.gutters().then((res) => {
				callback(res.gutters);
			});
			break;
		case "docs/layout/utilities":
			layout.utilities().then((res) => {
				callback(res.utilities);
			});
			break;
		case "docs/layout/zindex":
			layout.zindex().then((res) => {
				callback(res.zindex);
			});
			break;
		case "docs/layout/cssgrid":
			layout.cssgrid().then((res) => {
				callback(res.cssgrid);
			});
			break;

		//--------------------------
		case "docs/content/reboot":
			content.reboot().then((res) => {
				callback(res.reboot);
			});
			break;
		case "docs/content/typography":
			content.typography().then((res) => {
				callback(res.typography);
			});
			break;
		case "docs/content/images":
			content.images().then((res) => {
				callback(res.images);
			});
			break;
		case "docs/content/tables":
			content.tables().then((res) => {
				callback(res.tables);
			});
			break;
		case "docs/content/figures":
			content.figures().then((res) => {
				callback(res.figures);
			});
			break;

		//--------------------------
		case "docs/helpers/clearfix":
			helpers.clearfix().then((res) => {
				callback(res.clearfix);
			});
			break;
		case "docs/helpers/color_background":
			helpers.color_background().then((res) => {
				callback(res.color_background);
			});
			break;
		case "docs/helpers/colored_links":
			helpers.colored_links().then((res) => {
				callback(res.colored_links);
			});
			break;
		case "docs/helpers/focus_ring":
			helpers.focus_ring().then((res) => {
				callback(res.focus_ring);
			});
			break;
		case "docs/helpers/icon_link":
			helpers.icon_link().then((res) => {
				callback(res.icon_link);
			});
			break;
		case "docs/helpers/position":
			helpers.position().then((res) => {
				callback(res.position);
			});
			break;
		case "docs/helpers/ratio":
			helpers.ratio().then((res) => {
				callback(res.ratio);
			});
			break;
		case "docs/helpers/stacks":
			helpers.stacks().then((res) => {
				callback(res.stacks);
			});
			break;
		case "docs/helpers/stretched_link":
			helpers.stretched_link().then((res) => {
				callback(res.stretched_link);
			});
			break;
		case "docs/helpers/text_truncation":
			helpers.text_truncation().then((res) => {
				callback(res.text_truncation);
			});
			break;
		case "docs/helpers/vertical_rule":
			helpers.vertical_rule().then((res) => {
				callback(res.vertical_rule);
			});
			break;
		case "docs/helpers/visually_hidden":
			helpers.visually_hidden().then((res) => {
				callback(res.visually_hidden);
			});
			break;

		//--------------------------
		case "docs/utilities/api":
			utilities.api().then((res) => {
				callback(res.api);
			});
			break;
		case "docs/utilities/background":
			utilities.background().then((res) => {
				callback(res.background);
			});
			break;
		case "docs/utilities/colors":
			utilities.colors().then((res) => {
				callback(res.colors);
			});
			break;
		case "docs/utilities/borders":
			utilities.borders().then((res) => {
				callback(res.borders);
			});
			break;
		case "docs/utilities/display":
			utilities.display().then((res) => {
				callback(res.display);
			});
			break;
		case "docs/utilities/flex":
			utilities.flex().then((res) => {
				callback(res.flex);
			});
			break;
		case "docs/utilities/float":
			utilities.float().then((res) => {
				callback(res.float);
			});
			break;
		case "docs/utilities/interactions":
			utilities.interactions().then((res) => {
				callback(res.interactions);
			});
			break;
		case "docs/utilities/link":
			utilities.link().then((res) => {
				callback(res.link);
			});
			break;
		case "docs/utilities/object_fit":
			utilities.object_fit().then((res) => {
				callback(res.object_fit);
			});
			break;
		case "docs/utilities/opacity":
			utilities.opacity().then((res) => {
				callback(res.opacity);
			});
			break;
		case "docs/utilities/overflow":
			utilities.overflow().then((res) => {
				callback(res.overflow);
			});
			break;
		case "docs/utilities/position":
			utilities.position().then((res) => {
				callback(res.position);
			});
			break;
		case "docs/utilities/shadow":
			utilities.shadow().then((res) => {
				callback(res.shadow);
			});
			break;
		case "docs/utilities/sizing":
			utilities.sizing().then((res) => {
				callback(res.sizing);
			});
			break;
		case "docs/utilities/spacing":
			utilities.spacing().then((res) => {
				callback(res.spacing);
			});
			break;
		case "docs/utilities/text":
			utilities.text().then((res) => {
				callback(res.text);
			});
			break;
		case "docs/utilities/vertical_align":
			utilities.vertical_align().then((res) => {
				callback(res.vertical_align);
			});
			break;
		case "docs/utilities/visibility":
			utilities.visibility().then((res) => {
				callback(res.visibility);
			});
			break;
		case "docs/utilities/zindex":
			utilities.zindex().then((res) => {
				callback(res.zindex);
			});
			break;

		//--------------------------
		case "docs/forms/overview":
			forms.overview().then((res) => {
				callback(res.overview);
			});
			break;
		case "docs/forms/control":
			forms.control().then((res) => {
				callback(res.control);
			});
			break;
		case "docs/forms/select":
			forms.select().then((res) => {
				callback(res.select);
			});
			break;
		case "docs/forms/check_radio":
			forms.check_radio().then((res) => {
				callback(res.check_radio);
			});
			break;
		case "docs/forms/range":
			forms.range().then((res) => {
				callback(res.range);
			});
			break;
		case "docs/forms/floating_label":
			forms.floating_label().then((res) => {
				callback(res.floating_label);
			});
			break;
		case "docs/forms/input_group":
			forms.input_group().then((res) => {
				callback(res.input_group);
			});
			break;
		case "docs/forms/layout":
			forms.layout().then((res) => {
				callback(res.layout);
			});
			break;
		case "docs/forms/validation":
			forms.validation().then((res) => {
				callback(res.validation);
			});
			break;

		//--------------------------
		case "docs/components/accordion":
			components.accordion().then((res) => {
				callback(res.accordion);
			});
			break;
		case "docs/components/alert":
			components.alert().then((res) => {
				callback(res.alert);
			});
			break;
		case "docs/components/badge":
			components.badge().then((res) => {
				callback(res.badge);
			});
			break;
		case "docs/components/breadcrumb":
			components.breadcrumb().then((res) => {
				callback(res.breadcrumb);
			});
			break;
		case "docs/components/button":
			components.button().then((res) => {
				callback(res.button);
			});
			break;
		case "docs/components/button_group":
			components.button_group().then((res) => {
				callback(res.button_group);
			});
			break;
		case "docs/components/card":
			components.card().then((res) => {
				callback(res.card);
			});
			break;
		case "docs/components/carousel":
			components.carousel().then((res) => {
				callback(res.carousel);
			});
			break;
		case "docs/components/close_button":
			components.close_button().then((res) => {
				callback(res.close_button);
			});
			break;
		case "docs/components/collapse":
			components.collapse().then((res) => {
				callback(res.collapse);
			});
			break;
		case "docs/components/dropdown":
			components.dropdown().then((res) => {
				callback(res.dropdown);
			});
			break;
		case "docs/components/list":
			components.list().then((res) => {
				callback(res.list);
			});
			break;
		case "docs/components/modal":
			components.modal().then((res) => {
				callback(res.modal);
			});
			break;
		case "docs/components/navbar":
			components.navbar().then((res) => {
				callback(res.navbar);
			});
			break;
		case "docs/components/nav":
			components.nav().then((res) => {
				callback(res.nav);
			});
			break;
		case "docs/components/offcanvas":
			components.offcanvas().then((res) => {
				callback(res.offcanvas);
			});
			break;
		case "docs/components/pagination":
			components.pagination().then((res) => {
				callback(res.pagination);
			});
			break;
		case "docs/components/popover":
			components.popover().then((res) => {
				callback(res.popover);
			});
			break;
		case "docs/components/placeholder":
			components.placeholder().then((res) => {
				callback(res.placeholder);
			});
			break;
		case "docs/components/progress":
			components.progress().then((res) => {
				callback(res.progress);
			});
			break;
		case "docs/components/scrollspy":
			components.scrollspy().then((res) => {
				callback(res.scrollspy);
			});
			break;
		case "docs/components/spinner":
			components.spinner().then((res) => {
				callback(res.spinner);
			});
			break;
		case "docs/components/toast":
			components.toast().then((res) => {
				callback(res.toast);
			});
			break;
		case "docs/components/tooltip":
			components.tooltip().then((res) => {
				callback(res.tooltip);
			});
			break;

		//--------------------------
		case "docs/gettingstarted/introduction":
			gettingstarted.introduction().then((res) => {
				callback(res.introduction);
			});
			break;
		case "docs/gettingstarted/bootswatch":
			gettingstarted.bootswatch().then((res) => {
				callback(res.bootswatch);
			});
			break;

		default:
			callback(null);
	}
};

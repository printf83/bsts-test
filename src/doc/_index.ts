import * as gettingstarted from "./gettingstarted/_index.js";
import * as forms from "./forms/_index.js";
import * as components from "./components/_index.js";
import * as utilities from "./utilities/_index.js";
import * as helpers from "./helpers/_index.js";

export { components as component, forms as form, gettingstarted, utilities };

export const doc = (value: string) => {
	switch (value) {
		//--------------------------
		case "doc/helpers/clearfix":
			return helpers.clearfix;
		case "doc/helpers/color_background":
			return helpers.color_background;
		case "doc/helpers/colored_links":
			return helpers.colored_links;
		case "doc/helpers/focus_ring":
			return helpers.focus_ring;
		case "doc/helpers/icon_link":
			return helpers.icon_link;
		case "doc/helpers/position":
			return helpers.position;
		case "doc/helpers/ratio":
			return helpers.ratio;
		case "doc/helpers/stacks":
			return helpers.stacks;
		case "doc/helpers/stretched_link":
			return helpers.stretched_link;
		case "doc/helpers/text_truncation":
			return helpers.text_truncation;
		case "doc/helpers/vertical_rule":
			return helpers.vertical_rule;
		case "doc/helpers/visually_hidden":
			return helpers.visually_hidden;

		//--------------------------
		case "doc/utilities/api":
			return utilities.api;
		case "doc/utilities/background":
			return utilities.background;
		case "doc/utilities/color":
			return utilities.color;
		case "doc/utilities/border":
			return utilities.border;
		case "doc/utilities/display":
			return utilities.display;
		case "doc/utilities/flex":
			return utilities.flex;
		case "doc/utilities/float":
			return utilities.float;
		case "doc/utilities/interactions":
			return utilities.interactions;
		case "doc/utilities/link":
			return utilities.link;
		case "doc/utilities/object_fit":
			return utilities.object_fit;
		case "doc/utilities/opacity":
			return utilities.opacity;
		case "doc/utilities/overflow":
			return utilities.overflow;
		case "doc/utilities/position":
			return utilities.position;
		case "doc/utilities/shadow":
			return utilities.shadow;
		case "doc/utilities/sizing":
			return utilities.sizing;
		case "doc/utilities/spacing":
			return utilities.spacing;
		case "doc/utilities/text":
			return utilities.text;
		case "doc/utilities/vertical_align":
			return utilities.vertical_align;
		case "doc/utilities/visibility":
			return utilities.visibility;
		case "doc/utilities/zindex":
			return utilities.zindex;

		//--------------------------
		case "doc/forms/overview":
			return forms.overview;
		case "doc/forms/control":
			return forms.control;
		case "doc/forms/select":
			return forms.select;
		case "doc/forms/check_radio":
			return forms.check_radio;
		case "doc/forms/range":
			return forms.range;
		case "doc/forms/floating_label":
			return forms.floating_label;
		case "doc/forms/input_group":
			return forms.input_group;
		case "doc/forms/layout":
			return forms.layout;
		case "doc/forms/validation":
			return forms.validation;

		//--------------------------
		case "doc/components/accordion":
			return components.accordion;
		case "doc/components/alert":
			return components.alert;
		case "doc/components/badge":
			return components.badge;
		case "doc/components/breadcrumb":
			return components.breadcrumb;
		case "doc/components/button":
			return components.button;
		case "doc/components/button_group":
			return components.button_group;
		case "doc/components/card":
			return components.card;
		case "doc/components/carousel":
			return components.carousel;
		case "doc/components/close_button":
			return components.close_button;
		case "doc/components/collapse":
			return components.collapse;
		case "doc/components/dropdown":
			return components.dropdown;
		case "doc/components/list":
			return components.list;
		case "doc/components/modal":
			return components.modal;
		case "doc/components/navbar":
			return components.navbar;
		case "doc/components/nav":
			return components.nav;
		case "doc/components/offcanvas":
			return components.offcanvas;
		case "doc/components/pagination":
			return components.pagination;
		case "doc/components/popover":
			return components.popover;
		case "doc/components/placeholder":
			return components.placeholder;
		case "doc/components/progress":
			return components.progress;
		case "doc/components/scrollspy":
			return components.scrollspy;
		case "doc/components/spinner":
			return components.spinner;
		case "doc/components/toast":
			return components.toast;
		case "doc/components/tooltip":
			return components.tooltip;

		//--------------------------
		case "doc/gettingstarted/introduction":
			return gettingstarted.introduction;
		default:
			return null;
	}
};

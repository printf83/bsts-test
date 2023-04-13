import * as gettingstarted from "./gettingstarted/_index.js";
import * as forms from "./forms/_index.js";
import * as components from "./components/_index.js";
import * as utilities from "./utilities/_index.js";
import * as helpers from "./helpers/_index.js";

export { components as component, forms as form, gettingstarted, utilities };

export const doc = (value: string) => {
	switch (value) {
		//--------------------------
		case "docs/helpers/clearfix":
			return helpers.clearfix;
		case "docs/helpers/color_background":
			return helpers.color_background;
		case "docs/helpers/colored_links":
			return helpers.colored_links;
		case "docs/helpers/focus_ring":
			return helpers.focus_ring;
		case "docs/helpers/icon_link":
			return helpers.icon_link;
		case "docs/helpers/position":
			return helpers.position;
		case "docs/helpers/ratio":
			return helpers.ratio;
		case "docs/helpers/stacks":
			return helpers.stacks;
		case "docs/helpers/stretched_link":
			return helpers.stretched_link;
		case "docs/helpers/text_truncation":
			return helpers.text_truncation;
		case "docs/helpers/vertical_rule":
			return helpers.vertical_rule;
		case "docs/helpers/visually_hidden":
			return helpers.visually_hidden;

		//--------------------------
		case "docs/utilities/api":
			return utilities.api;
		case "docs/utilities/background":
			return utilities.background;
		case "docs/utilities/color":
			return utilities.color;
		case "docs/utilities/border":
			return utilities.border;
		case "docs/utilities/display":
			return utilities.display;
		case "docs/utilities/flex":
			return utilities.flex;
		case "docs/utilities/float":
			return utilities.float;
		case "docs/utilities/interactions":
			return utilities.interactions;
		case "docs/utilities/link":
			return utilities.link;
		case "docs/utilities/object_fit":
			return utilities.object_fit;
		case "docs/utilities/opacity":
			return utilities.opacity;
		case "docs/utilities/overflow":
			return utilities.overflow;
		case "docs/utilities/position":
			return utilities.position;
		case "docs/utilities/shadow":
			return utilities.shadow;
		case "docs/utilities/sizing":
			return utilities.sizing;
		case "docs/utilities/spacing":
			return utilities.spacing;
		case "docs/utilities/text":
			return utilities.text;
		case "docs/utilities/vertical_align":
			return utilities.vertical_align;
		case "docs/utilities/visibility":
			return utilities.visibility;
		case "docs/utilities/zindex":
			return utilities.zindex;

		//--------------------------
		case "docs/forms/overview":
			return forms.overview;
		case "docs/forms/control":
			return forms.control;
		case "docs/forms/select":
			return forms.select;
		case "docs/forms/check_radio":
			return forms.check_radio;
		case "docs/forms/range":
			return forms.range;
		case "docs/forms/floating_label":
			return forms.floating_label;
		case "docs/forms/input_group":
			return forms.input_group;
		case "docs/forms/layout":
			return forms.layout;
		case "docs/forms/validation":
			return forms.validation;

		//--------------------------
		case "docs/components/accordion":
			return components.accordion;
		case "docs/components/alert":
			return components.alert;
		case "docs/components/badge":
			return components.badge;
		case "docs/components/breadcrumb":
			return components.breadcrumb;
		case "docs/components/button":
			return components.button;
		case "docs/components/button_group":
			return components.button_group;
		case "docs/components/card":
			return components.card;
		case "docs/components/carousel":
			return components.carousel;
		case "docs/components/close_button":
			return components.close_button;
		case "docs/components/collapse":
			return components.collapse;
		case "docs/components/dropdown":
			return components.dropdown;
		case "docs/components/list":
			return components.list;
		case "docs/components/modal":
			return components.modal;
		case "docs/components/navbar":
			return components.navbar;
		case "docs/components/nav":
			return components.nav;
		case "docs/components/offcanvas":
			return components.offcanvas;
		case "docs/components/pagination":
			return components.pagination;
		case "docs/components/popover":
			return components.popover;
		case "docs/components/placeholder":
			return components.placeholder;
		case "docs/components/progress":
			return components.progress;
		case "docs/components/scrollspy":
			return components.scrollspy;
		case "docs/components/spinner":
			return components.spinner;
		case "docs/components/toast":
			return components.toast;
		case "docs/components/tooltip":
			return components.tooltip;

		//--------------------------
		case "doc/gettingstarted/introduction":
			return gettingstarted.introduction;
		default:
			return null;
	}
};

import * as gettingstarted from "./gettingstarted/_index.js";
import * as form from "./form/_index.js";
import * as component from "./component/_index.js";
import * as utilities from "./utilities/_index.js";
import * as helpers from "./helpers/_index.js";

export { component, form, gettingstarted, utilities };

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
		case "doc/form/overview":
			return form.overview;
		case "doc/form/control":
			return form.control;
		case "doc/form/select":
			return form.select;
		case "doc/form/check_radio":
			return form.check_radio;
		case "doc/form/range":
			return form.range;
		case "doc/form/floating_label":
			return form.floating_label;
		case "doc/form/input_group":
			return form.input_group;
		case "doc/form/layout":
			return form.layout;
		case "doc/form/validation":
			return form.validation;

		//--------------------------
		case "doc/component/accordion":
			return component.accordion;
		case "doc/component/alert":
			return component.alert;
		case "doc/component/badge":
			return component.badge;
		case "doc/component/breadcrumb":
			return component.breadcrumb;
		case "doc/component/button":
			return component.button;
		case "doc/component/button_group":
			return component.button_group;
		case "doc/component/card":
			return component.card;
		case "doc/component/carousel":
			return component.carousel;
		case "doc/component/close_button":
			return component.close_button;
		case "doc/component/collapse":
			return component.collapse;
		case "doc/component/dropdown":
			return component.dropdown;
		case "doc/component/list":
			return component.list;
		case "doc/component/modal":
			return component.modal;
		case "doc/component/navbar":
			return component.navbar;
		case "doc/component/nav":
			return component.nav;
		case "doc/component/offcanvas":
			return component.offcanvas;
		case "doc/component/pagination":
			return component.pagination;
		case "doc/component/popover":
			return component.popover;
		case "doc/component/placeholder":
			return component.placeholder;
		case "doc/component/progress":
			return component.progress;
		case "doc/component/scrollspy":
			return component.scrollspy;
		case "doc/component/spinner":
			return component.spinner;
		case "doc/component/toast":
			return component.toast;
		case "doc/component/tooltip":
			return component.tooltip;

		//--------------------------
		case "doc/gettingstarted/introduction":
			return gettingstarted.introduction;
		default:
			return null;
	}
};

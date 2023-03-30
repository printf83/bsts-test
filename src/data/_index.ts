import { IAttrContent } from "../ctl/main/container.js";
import { doc_component_alert } from "./doc_component_alert.js";
import { doc_component_accordion } from "./doc_component_accordion.js";
import { doc_gettingstarted_introduction } from "./doc_gettingstarted_introduction.js";
import { doc_component_badge } from "./doc_component_badge.js";
import { doc_component_breadcrumb } from "./doc_component_breadcrumb.js";
import { doc_component_button } from "./doc_component_button.js";
import { doc_component_btngroup } from "./doc_component_btngroup.js";
import { doc_component_card } from "./doc_component_card.js";
import { doc_component_carousel } from "./doc_component_carousel.js";
import { doc_component_btnclose } from "./doc_component_btnclose.js";
import { doc_component_collapse } from "./doc_component_collapse.js";
import { doc_component_dropdown } from "./doc_component_dropdown.js";
import { doc_component_list } from "./doc_component_list.js";
import { doc_component_modal } from "./doc_component_modal.js";
import { doc_component_navbar } from "./doc_component_navbar.js";
import { doc_component_nav } from "./doc_component_nav.js";
import { doc_component_offcanvas } from "./doc_component_offcanvas.js";
import { doc_component_pagination } from "./doc_component_pagination.js";
import { doc_component_popover } from "./doc_component_popover.js";

export const data = (doc: string): IAttrContent => {
	switch (doc) {
		case "doc_component_accordion":
			return doc_component_accordion;
		case "doc_component_alert":
			return doc_component_alert;
		case "doc_component_badge":
			return doc_component_badge;
		case "doc_component_breadcrumb":
			return doc_component_breadcrumb;
		case "doc_component_button":
			return doc_component_button;
		case "doc_component_btngroup":
			return doc_component_btngroup;
		case "doc_component_card":
			return doc_component_card;
		case "doc_component_carousel":
			return doc_component_carousel;
		case "doc_component_btnclose":
			return doc_component_btnclose;
		case "doc_component_collapse":
			return doc_component_collapse;
		case "doc_component_dropdown":
			return doc_component_dropdown;
		case "doc_component_list":
			return doc_component_list;
		case "doc_component_modal":
			return doc_component_modal;
		case "doc_component_navbar":
			return doc_component_navbar;
		case "doc_component_nav":
			return doc_component_nav;
		case "doc_component_offcanvas":
			return doc_component_offcanvas;
		case "doc_component_pagination":
			return doc_component_pagination;
		case "doc_component_popover":
			return doc_component_popover;

		case "doc_gettingstarted_introduction":
			return doc_gettingstarted_introduction;
		default:
			return { title: "Ooopppssss!", description: `Document {{${doc}}} not found!` } as IAttrContent;
	}
};

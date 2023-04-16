import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const utilities: IAttrContent = {
	title: "Utilities for layout",
	description:
		"For faster mobile-friendly and responsive development, Bootstrap includes dozens of utility classes for showing, hiding, aligning, and spacing content.",
	item: [
		new e.title("Changing {{display}}"),
		new e.text(
			"Use our {{https://getbootstrap.com/docs/5.3/utilities/display/::display utilities}} for responsively toggling common values of the {{display}} property. Mix it with our grid system, content, or components to show or hide them across specific viewports."
		),

		//-----------------------

		new e.title("Flexbox options"),
		new e.text(
			"Bootstrap is built with flexbox, but not every element’s {{display}} has been changed to {{display: flex}} as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of {{https://getbootstrap.com/docs/5.3/components/alerts/::our components}} are built with flexbox enabled."
		),
		new e.text(
			"Should you need to add {{display: flex}} to an element, do so with {{.d-flex}} or one of the responsive variants (e.g., {{.d-sm-flex}}). You’ll need this class or {{display}} value to allow the use of our extra {{https://getbootstrap.com/docs/5.3/utilities/flex/::flexbox utilities}} for sizing, alignment, spacing, and more."
		),

		//-----------------------

		new e.title("Margin and padding"),
		new e.text(
			"Use the {{margin}} and {{padding}} {{https://getbootstrap.com/docs/5.3/utilities/spacing/::spacing utilities}} to control how elements and components are spaced and sized. Bootstrap includes a six-level scale for spacing utilities, based on a {{1rem}} value default {{$spacer}} variable. Choose values for all viewports (e.g., {{.me-3}} for {{margin-right: 1rem}} in LTR), or pick responsive variants to target specific viewports (e.g., {{.me-md-3}} for {{margin-right: 1rem}} —in LTR— starting at the {{md}} breakpoint)."
		),

		//-----------------------

		new e.title("Toggle visibility"),
		new e.text(
			"When toggling {{display}} isn’t needed, you can toggle the {{visibility}} of an element with our {{https://getbootstrap.com/docs/5.3/utilities/visibility/::visibility utilities}}. Invisible elements will still affect the layout of the page, but are visually hidden from visitors."
		),
	],
};

import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent } from "../../ctl/main/content.js";

export const close_button: IContent = {
	title: "Close button",
	description: "A generic close button for dismissing content like modals and alerts.",
	item: () => {
		return [
			new e.section([
				new e.title("Examples"),
				new e.text(
					"Provide an option to dismiss or close a component with {{b.btnclose}}. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default {{background-image}}. {{b::Be sure to include text for screen readers}}, as {{bsts}} done with {{label}}."
				),
				new e.code({
					output: () => {
						return new b.btnclose();
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Disabled state"),
				new e.text("Disabled close buttons change their {{opacity}}. Bootstrap’ve also applied {{pointer-events:}} none and {{user-select: none}} to preventing hover and active states from triggering."),
				new e.code({
					output: () => {
						return new b.btnclose({ disabled: true });
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Dark variant"),
				new e.text("Add {{theme:'dark'}} to the {{b.btnclose}}, or to its parent element, to invert the close button. Bootstrap uses the {{filter}} property to invert the {{background-image}} without overriding its value."),
				new e.code({
					previewAttr: { bgColor: "dark" },
					output: () => {
						return new h.div({ theme: "dark" }, [new b.btnclose(), new b.btnclose({ disabled: true })]);
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Variables"),
				new e.text("As part of Bootstrap’s evolving CSS variables approach, close button now use local CSS variables on {{.btn-close}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),

				new e.codepreview({
					type: "css",
					title: "scss/_close.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_close.scss",
					code: `
						--#{$prefix}btn-close-color: #{$btn-close-color};
						--#{$prefix}btn-close-bg: #{ escape-svg($btn-close-bg) };
						--#{$prefix}btn-close-opacity: #{$btn-close-opacity};
						--#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};
						--#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};
						--#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};
						--#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};
						--#{$prefix}btn-close-white-filter: #{$btn-close-white-filter};
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sass variables"),

				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$btn-close-width:            1em;
						$btn-close-height:           $btn-close-width;
						$btn-close-padding-x:        .25em;
						$btn-close-padding-y:        $btn-close-padding-x;
						$btn-close-color:            $black;
						$btn-close-bg:               url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>");
						$btn-close-focus-shadow:     $focus-ring-box-shadow;
						$btn-close-opacity:          .5;
						$btn-close-hover-opacity:    .75;
						$btn-close-focus-opacity:    1;
						$btn-close-disabled-opacity: .25;
						$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%);
					`,
				}),
			]),
		];
	},
};

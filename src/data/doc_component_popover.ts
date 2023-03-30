import { h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_popover: IAttrContent = {
	title: "Popovers",
	description:
		"Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.",
	item: [
		new e.title("Overview"),
		new e.text(
			"We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping {{<nav>}} element to identify it as a navigation section to screen readers and other assistive technologies."
		),
		new e.text(
			"In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive {{aria-label}} for the {{<nav>}} to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be {{aria-label='Search results pages'}}."
		),
		new e.code({
			output: () => {
				return new b.pagination.container({ label: "Page navigation example" }, [
					new b.pagination.item({ href: "#" }, "Previous"),
					new b.pagination.item({ href: "#" }, "1"),
					new b.pagination.item({ href: "#" }, "2"),
					new b.pagination.item({ href: "#" }, "3"),
					new b.pagination.item({ href: "#" }, "Next"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Working with icons"),
		new e.text(
			"Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with {{aria}} attributes."
		),
		new e.code({
			output: () => {
				return new b.pagination.container({ label: "Page navigation example" }, [
					new b.pagination.item(
						{ href: "#", label: "Previous" },
						new h.span({ aria: { hidden: true } }, "«")
					),
					new b.pagination.item({ href: "#" }, "1"),
					new b.pagination.item({ href: "#" }, "2"),
					new b.pagination.item({ href: "#" }, "3"),
					new b.pagination.item({ href: "#", label: "Next" }, new h.span({ aria: { hidden: true } }, "»")),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Disabled and active states"),
		new e.text(
			"Pagination links are customizable for different circumstances. Use {{.disabled}} for links that appear un-clickable and {{.active}} to indicate the current page."
		),
		new e.text(
			"While the {{.disabled}} class uses {{pointer-events: none}} to {{i::try}} to disable the link functionality of {{<a>}}s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add {{tabindex='-1'}} on disabled links and use custom JavaScript to fully disable their functionality."
		),
		new e.code({
			output: () => {
				return new b.pagination.container({ label: "..." }, [
					new b.pagination.item({ disabled: true }, "Previous"),
					new b.pagination.item({ href: "#" }, "1"),
					new b.pagination.item({ href: "#", active: true }, "2"),
					new b.pagination.item({ href: "#" }, "3"),
					new b.pagination.item({ href: "#" }, "Next"),
				]);
			},
		}),
		new e.text(
			"You can optionally swap out active or disabled anchors for {{<span>}}, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles."
		),
		new e.code({
			output: () => {
				return new b.pagination.container({ label: "..." }, [
					new b.pagination.item({ disabled: true }, "Previous"),
					new b.pagination.item({ href: "#" }, "1"),
					new b.pagination.item({ active: true }, "2"),
					new b.pagination.item({ href: "#" }, "3"),
					new b.pagination.item({ href: "#" }, "Next"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Sizing"),
		new e.text(
			"Fancy larger or smaller pagination? Add {{.pagination-lg}} or {{.pagination-sm}} for additional sizes."
		),
		new e.code({
			output: () => {
				return new b.pagination.container({ label: "...", weight: "lg" }, [
					new b.pagination.item({ active: true }, "1"),
					new b.pagination.item({ href: "#" }, "2"),
					new b.pagination.item({ href: "#" }, "3"),
				]);
			},
		}),
		new e.code({
			output: () => {
				return new b.pagination.container({ label: "...", weight: "sm" }, [
					new b.pagination.item({ active: true }, "1"),
					new b.pagination.item({ href: "#" }, "2"),
					new b.pagination.item({ href: "#" }, "3"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Alignment"),
		new e.text(
			"Change the alignment of pagination components with {{https://getbootstrap.com/docs/5.3/utilities/flex/::flexbox utilities}}. For example, with {{.justify-content-center}}:"
		),
		new e.code({
			output: () => {
				return new b.pagination.container({ label: "Page navigation example", justifyContent: "center" }, [
					new b.pagination.item({ disabled: true }, "Previous"),
					new b.pagination.item({ href: "#" }, "1"),
					new b.pagination.item({ href: "#" }, "2"),
					new b.pagination.item({ href: "#" }, "3"),
					new b.pagination.item({ href: "#" }, "Next"),
				]);
			},
		}),
		new e.text("Or with {{.justify-content-end}}:"),
		new e.code({
			output: () => {
				return new b.pagination.container({ label: "Page navigation example", justifyContent: "end" }, [
					new b.pagination.item({ disabled: true }, "Previous"),
					new b.pagination.item({ href: "#" }, "1"),
					new b.pagination.item({ href: "#" }, "2"),
					new b.pagination.item({ href: "#" }, "3"),
					new b.pagination.item({ href: "#" }, "Next"),
				]);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on {{.pagination}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}pagination-padding-x: #{$pagination-padding-x};
				--#{$prefix}pagination-padding-y: #{$pagination-padding-y};
				@include rfs($pagination-font-size, --#{$prefix}pagination-font-size);
				--#{$prefix}pagination-color: #{$pagination-color};
				--#{$prefix}pagination-bg: #{$pagination-bg};
				--#{$prefix}pagination-border-width: #{$pagination-border-width};
				--#{$prefix}pagination-border-color: #{$pagination-border-color};
				--#{$prefix}pagination-border-radius: #{$pagination-border-radius};
				--#{$prefix}pagination-hover-color: #{$pagination-hover-color};
				--#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};
				--#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};
				--#{$prefix}pagination-focus-color: #{$pagination-focus-color};
				--#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};
				--#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};
				--#{$prefix}pagination-active-color: #{$pagination-active-color};
				--#{$prefix}pagination-active-bg: #{$pagination-active-bg};
				--#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};
				--#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};
				--#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};
				--#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$pagination-padding-y:              .375rem;
				$pagination-padding-x:              .75rem;
				$pagination-padding-y-sm:           .25rem;
				$pagination-padding-x-sm:           .5rem;
				$pagination-padding-y-lg:           .75rem;
				$pagination-padding-x-lg:           1.5rem;

				$pagination-font-size:              $font-size-base;

				$pagination-color:                  var(--#{$prefix}link-color);
				$pagination-bg:                     var(--#{$prefix}body-bg);
				$pagination-border-radius:          var(--#{$prefix}border-radius);
				$pagination-border-width:           var(--#{$prefix}border-width);
				$pagination-margin-start:           calc($pagination-border-width * -1); // stylelint-disable-line function-disallowed-list
				$pagination-border-color:           var(--#{$prefix}border-color);

				$pagination-focus-color:            var(--#{$prefix}link-hover-color);
				$pagination-focus-bg:               var(--#{$prefix}secondary-bg);
				$pagination-focus-box-shadow:       $focus-ring-box-shadow;
				$pagination-focus-outline:          0;

				$pagination-hover-color:            var(--#{$prefix}link-hover-color);
				$pagination-hover-bg:               var(--#{$prefix}tertiary-bg);
				$pagination-hover-border-color:     var(--#{$prefix}border-color); // Todo in v6: remove this?

				$pagination-active-color:           $component-active-color;
				$pagination-active-bg:              $component-active-bg;
				$pagination-active-border-color:    $component-active-bg;

				$pagination-disabled-color:         var(--#{$prefix}secondary-color);
				$pagination-disabled-bg:            var(--#{$prefix}secondary-bg);
				$pagination-disabled-border-color:  var(--#{$prefix}border-color);

				$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

				$pagination-border-radius-sm:       $border-radius-sm;
				$pagination-border-radius-lg:       $border-radius-lg;

			`,
		}),

		new e.subtitle("Sass mixins"),

		new e.codepreview({
			type: "css",
			code: `
				@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {
				--#{$prefix}pagination-padding-x: #{$padding-x};
				--#{$prefix}pagination-padding-y: #{$padding-y};
				@include rfs($font-size, --#{$prefix}pagination-font-size);
				--#{$prefix}pagination-border-radius: #{$border-radius};
				}
			`,
		}),
	],
};

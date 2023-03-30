import { h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_popover: IAttrContent = {
	title: "Popovers",
	description:
		"Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.",
	item: [
		new e.title("Overview"),
		new e.text("Things to know when using the popover plugin:"),
		new e.ul({
			item: [
				"Popovers rely on the third party library {{https://popper.js.org/::Popper}} for positioning. You must include {{https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js::popper.min.js}} before {{bootstrap.js}}, or use one {{bootstrap.bundle.min.js}} which contains Popper.",
				"Popovers require the {{https://getbootstrap.com/docs/5.3/components/popovers/::popover plugin}} as a dependency.",
				"Popovers are opt-in for performance reasons, so you must initialize them yourself.",
				"Zero-length {{title}} and {{content}} values will never show a popover.",
				"Specify {{container: 'body'}} to avoid rendering problems in more complex components (like our input groups, button groups, etc).",
				"Triggering popovers on hidden elements will not work.",
				"Popovers for {{.disabled}} or {{disabled}} elements must be triggered on a wrapper element.",
				"When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors’ overall width. Use {{.text-nowrap}} on your {{<a>}}s to avoid this behavior.",
				"Popovers must be hidden before their corresponding elements have been removed from the DOM.",
				"Popovers can be triggered thanks to an element inside a shadow DOM.",
			],
		}),
		new e.alert(
			{ color: "info", callout: true },
			"By default, this component uses the built-in content sanitizer, which strips out any HTML elements that are not explicitly allowed. See the {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#sanitizer::sanitizer section in our JavaScript documentation}} for more details."
		),
		new e.alert(
			{ color: "info", callout: true },
			"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of our accessibility documentation}}."
		),
		new e.text("Keep reading to see how popovers work with some examples."),

		//-----------------------

		new e.title("Examples"),
		new e.subtitle("Enable popovers"),
		new e.text(
			"As mentioned above, you must initialize popovers before they can be used. One way to initialize all popovers on a page would be to select them by their {{data-bs-toggle}} attribute, like so:"
		),
		new e.codepreview({
			type: "js",
			code: `
				const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
				const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
			`,
		}),

		//-----------------------

		new e.subtitle("Live demo"),
		new e.text(
			"We use JavaScript similar to the snippet above to render the following live popover. Titles are set via {{data-bs-title}} and body content is set via {{data-bs-content}}."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"Feel free to use either {{title}} or {{data-bs-title}} in your HTML. When {{title}} is used, Popper will replace it automatically with {{data-bs-title}} when the element is rendered."
		),
		new e.code({
			output: () => {
				return new b.popover(
					{ title: "Popover title", content: "And here's some amazing content. It's very engaging. Right?" },
					new b.button({ weight: "lg", color: "danger" }, "Click to toggle popover")
				);
			},
		}),

		//-----------------------

		new e.subtitle("Four directions"),
		new e.text(
			"Four options are available: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL. Set {{data-bs-placement}} to change the direction."
		),
		new e.code({
			output: () => {
				return ["top", "right", "bottom", "left"].map((i) => {
					return new b.popover(
						{
							placement: i as b.IAttrBSPopover["placement"],
							content: `${i.charAt(0).toUpperCase() + i.slice(1)} popover`,
						},
						new b.button({ color: "secondary" }, `Popover on ${i}`)
					);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Custom {{container}}"),
		new e.text(
			"When you have some styles on a parent element that interfere with a popover, you’ll want to specify a custom {{container}} so that the popover’s HTML appears within that element instead. This is common in responsive tables, input groups, and the like."
		),
		new e.codepreview({
			type: "js",
			code: `
				const popover = new bootstrap.Popover('.example-popover', {
				container: 'body'
				})
			`,
		}),
		new e.text(
			"Another situation where you’ll want to set an explicit custom {{container}} are popovers inside a {{https://getbootstrap.com/docs/5.3/components/modal/::modal dialog}}, to make sure that the popover itself is appended to the modal. This is particularly important for popovers that contain interactive elements – modal dialogs will trap focus, so unless the popover is a child element of the modal, users won’t be able to focus or activate these interactive elements."
		),
		new e.codepreview({
			type: "js",
			code: `
				const popover = new bootstrap.Popover('.example-popover', {
				container: '.modal-body'
				})
			`,
		}),

		//-----------------------

		new e.title("Custom popovers"),
		new e.text(
			"You can customize the appearance of popovers using {{https://getbootstrap.com/docs/5.3/components/popovers/#variables::CSS variables}}. We set a custom class with {{data-bs-custom-class='custom-popover'}} to scope our custom appearance and use it to override some of the local CSS variables."
		),

		new e.codepreview({
			type: "css",
			code: `
				.custom-popover {
				--bs-popover-max-width: 200px;
				--bs-popover-border-color: var(--bs-primary);
				--bs-popover-header-bg: var(--bs-primary);
				--bs-popover-header-color: var(--bs-white);
				--bs-popover-body-padding-x: 1rem;
				--bs-popover-body-padding-y: .5rem;
				}
			`,
		}),
		new e.code({
			output: () => {
				return new b.popover(
					{
						title: "Custom popover",
						content: "This popover is themed via CSS variables.",
						customClass: "custom-popover",
					},
					new b.button({ color: "secondary" }, "Custom popover")
				);
			},
		}),

		//-----------------------

		new e.subtitle("Dismiss on next click"),
		new e.text(
			"Use the {{focus}} trigger to dismiss popovers on the user’s next click of an element other than the toggle element."
		),
		new e.alert(
			{ color: "danger", callout: true },
			"{{b::Dismissing on next click requires specific HTML for proper cross-browser and cross-platform behavior}}. You can only use {{<a>}} elements, not {{<button>}}s, and you must include a {{https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex::tabindex}}."
		),
		new e.code({
			output: () => {
				return new b.popover(
					{
						title: "Dismissible popover",
						content: "And here's some amazing content. It's very engaging. Right?",
						trigger: "focus",
					},
					new b.button({ weight: "lg", color: "danger" }, "Dismissible popover")
				);
			},
		}),

		//-----------------------

		new e.subtitle("Disabled elements"),
		new e.text(
			"Elements with the {{disabled}} attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper {{<div>}} or {{<span>}}, ideally made keyboard-focusable using {{tabindex='0'}}."
		),
		new e.text(
			"For disabled popover triggers, you may also prefer {{data-bs-trigger='hover focus'}} so that the popover appears as immediate visual feedback to your users as they may not expect to click on a disabled element."
		),
		new e.code({
			output: () => {
				return new b.popover(
					{
						content: "Disabled popover",
						trigger: ["hover", "focus"],
					},
					new b.button({ color: "primary", disabled: true }, "Disabled button")
				);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on {{.popover}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}popover-zindex: #{$zindex-popover};
				--#{$prefix}popover-max-width: #{$popover-max-width};
				@include rfs($popover-font-size, --#{$prefix}popover-font-size);
				--#{$prefix}popover-bg: #{$popover-bg};
				--#{$prefix}popover-border-width: #{$popover-border-width};
				--#{$prefix}popover-border-color: #{$popover-border-color};
				--#{$prefix}popover-border-radius: #{$popover-border-radius};
				--#{$prefix}popover-inner-border-radius: #{$popover-inner-border-radius};
				--#{$prefix}popover-box-shadow: #{$popover-box-shadow};
				--#{$prefix}popover-header-padding-x: #{$popover-header-padding-x};
				--#{$prefix}popover-header-padding-y: #{$popover-header-padding-y};
				@include rfs($popover-header-font-size, --#{$prefix}popover-header-font-size);
				--#{$prefix}popover-header-color: #{$popover-header-color};
				--#{$prefix}popover-header-bg: #{$popover-header-bg};
				--#{$prefix}popover-body-padding-x: #{$popover-body-padding-x};
				--#{$prefix}popover-body-padding-y: #{$popover-body-padding-y};
				--#{$prefix}popover-body-color: #{$popover-body-color};
				--#{$prefix}popover-arrow-width: #{$popover-arrow-width};
				--#{$prefix}popover-arrow-height: #{$popover-arrow-height};
				--#{$prefix}popover-arrow-border: var(--#{$prefix}popover-border-color);
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$popover-font-size:                 $font-size-sm;
				$popover-bg:                        var(--#{$prefix}body-bg);
				$popover-max-width:                 276px;
				$popover-border-width:              var(--#{$prefix}border-width);
				$popover-border-color:              var(--#{$prefix}border-color-translucent);
				$popover-border-radius:             var(--#{$prefix}border-radius-lg);
				$popover-inner-border-radius:       calc($popover-border-radius - $popover-border-width); // stylelint-disable-line function-disallowed-list
				$popover-box-shadow:                $box-shadow;

				$popover-header-font-size:          $font-size-base;
				$popover-header-bg:                 var(--#{$prefix}secondary-bg);
				$popover-header-color:              $headings-color;
				$popover-header-padding-y:          .5rem;
				$popover-header-padding-x:          $spacer;

				$popover-body-color:                var(--#{$prefix}body-color);
				$popover-body-padding-y:            $spacer;
				$popover-body-padding-x:            $spacer;

				$popover-arrow-width:               1rem;
				$popover-arrow-height:              .5rem;
			`,
		}),

		//-----------------------

		new e.subtitle("Usage"),
		new e.text("Enable popovers via JavaScript:"),
		new e.codepreview({
			type: "css",
			code: `
				const exampleEl = document.getElementById('example');
				const popover = new bootstrap.Popover(exampleEl, options);
			`,
		}),
		new e.alert({ color: "warning", callout: true }, [
			new h.p(
				"{{b::Keep popovers accessible to keyboard and assistive technology users}} by only adding them to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). While other HTML elements can be made focusable by adding {{tabindex='0'}}, this can create annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce popovers in this situation. Additionally, do not rely solely on {{hover}} as the trigger for your popovers as this will make them impossible to trigger for keyboard users."
			),
			new h.p(
				"Avoid adding an excessive amount of content in popovers with the {{html}} option. Once popovers are displayed, their content is tied to the trigger element with the {{aria-describedby}} attribute, causing all of the popover’s content to be announced to assistive technology users as one long, uninterrupted stream."
			),
			new h.p(
				"Popovers do not manage keyboard focus order, and their placement can be random in the DOM, so be careful when adding interactive elements (like forms or links), as it may lead to an illogical focus order or make the popover content itself completely unreachable for keyboard users. In cases where you must use these elements, consider using a modal dialog instead."
			),
		]),

		//-----------------------

		new e.subtitle("Options"),
		new e.text(
			`As options can be passed via data attributes or JavaScript, you can append an option name to {{data-bs-}}, as in {{data-bs-animation="{value}"}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data-bs-custom-class="beautifier"}} instead of {{data-bs-customClass="beautifier"}}.`
		),
		new e.text(
			`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data-bs-config='{"delay":0, "title":123}'}} and {{data-bs-title="456"}} attributes, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data-bs-config}}. In addition, existing data attributes are able to house JSON values like {{data-bs-delay='{"show":0,"hide":150}'}}.`
		),
		new e.alert(
			{ color: "warning", callout: true },
			"Note that for security reasons the {{sanitize}}, {{sanitizeFn}}, and {{allowList}} options cannot be supplied using data attributes."
		),
		new e.table({
			item: [
				["Name", "Type", "Default", "Description"],
				[
					"{{allowList}}",
					"object",
					"{{https://getbootstrap.com/docs/5.3/getting-started/javascript/#sanitizer::Default value}}",
					"Object which contains allowed attributes and tags.",
				],
				["{{animation}}", "boolean", "{{true}}", "Apply a CSS fade transition to the popover."],
				[
					"{{boundary}}",
					"string, element",
					"{{'clippingParents'}}",
					"Overflow constraint boundary of the popover (applies only to Popper’s preventOverflow modifier). By default, it’s {{'clippingParents'}} and can accept an HTMLElement reference (via JavaScript only). For more information refer to Popper’s {{https://popper.js.org/docs/v2/utils/detect-overflow/#boundary::detectOverflow docs}}.",
				],
				[
					"{{container}}",
					"string, element, false",
					"{{false}}",
					"Appends the popover to a specific element. Example: {{container: 'body'}}. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.",
				],
				["{{boundary}}", "boolean", "{{false}}", "Allow body scrolling while offcanvas is open."],
				["{{boundary}}", "boolean", "{{false}}", "Allow body scrolling while offcanvas is open."],
				["{{boundary}}", "boolean", "{{false}}", "Allow body scrolling while offcanvas is open."],
				["{{boundary}}", "boolean", "{{false}}", "Allow body scrolling while offcanvas is open."],
				["{{boundary}}", "boolean", "{{false}}", "Allow body scrolling while offcanvas is open."],
				["{{boundary}}", "boolean", "{{false}}", "Allow body scrolling while offcanvas is open."],
				["{{boundary}}", "boolean", "{{false}}", "Allow body scrolling while offcanvas is open."],
			],
		}),
	],
};

import { h, b, core, I } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const popover: IAttrContent = {
	title: "Popovers",
	description:
		"Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.",
	item: [
		new e.title("Overview"),
		new e.text("Things to know when using the popover plugin:"),
		new e.ul({
			item: [
				"Popovers rely on the third party library {{https://popper.js.org/::Popper}} for positioning. You must include {{https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js::popper.min.js}} before {{bootstrap.js}}, or use one {{bootstrap.bundle.min.js}} which contains Popper.",
				"Popovers require the {{nav:docs/components/popover::popover plugin}} as a dependency.",
				"Popovers initialize by {{core.init}} function.",
				"Zero-length {{title}} and {{content}} values will never show a popover.",
				"{{b.popover}} automaticly specify {{container:'body'}} to avoid rendering problems in more complex components (like Bootstrap input groups, button groups, etc). You can change this by set {{container:'.modal-body'}} when you need.",
				"Triggering popovers on hidden component will not work.",
				"Popovers for {{disabled}} component must be triggered on a wrapper element. {{bsts}} currently using this method for showing popover over other component.",
				"When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors’ overall width. Use {{textWrap:false}} on your {{h.a}}s to avoid this behavior.",
				"Popovers must be hidden before their corresponding elements have been removed from the DOM.",
				"Popovers can be triggered thanks to an element inside a shadow DOM.",
			],
		}),
		new e.alert(
			{ color: "info", callout: true },
			"By default, this component uses the built-in content sanitizer, which strips out any HTML elements that are not explicitly allowed. See the {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#sanitizer::sanitizer section in Bootstrap JavaScript documentation}} for more details."
		),
		new e.alert(
			{ color: "info", callout: true },
			"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}."
		),
		new e.text("Keep reading to see how popovers work with some examples."),

		//-----------------------

		new e.title("Examples"),
		new e.subtitle("Enable popovers"),
		new e.text(
			"As mentioned above, you must initialize popovers before they can be used. One way to initialize all popovers on a page would be to call {{core.init}} function after {{core.build}}, like so:"
		),
		new e.codepreview({
			type: "js",
			code: `
				core.documentReady(() => {
					let root = document.getElementById("root");
					core.replaceChild(root, new h.div([
						"Hello world", 
						new b.popover(
							{ title: "Popover title", content: "And here's some amazing content. It's very engaging. Right?" },
							new b.button({ weight: "lg", color: "danger" }, "Click to toggle popover")
						),
					]));

					core.init(root);
				});
			`,
		}),

		new e.text(
			"{{bsts}} automaticly call {{core.init}} when you show your modal dialog using {{b.modal.show}} function."
		),

		//-----------------------

		new e.subtitle("Live demo"),
		new e.text(
			"Bootstrap use JavaScript similar to the snippet above to render the following live popover. Titles are set via {{title}} and body content is set via {{content}}."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"When {{title}} is used, Popper will replace it automatically with {{data-bs-title}} attribute when the element is rendered."
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
			"Four options are available: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL. Set {{placement}} to change the direction."
		),
		new e.code({
			outputAttr: { display: "flex", gap: 2 },
			output: () => {
				return ["top", "right", "bottom", "left"].map((i) => {
					return new b.popover(
						{
							placement: i as I.B.Popover["placement"],
							content: `${core.uppercaseFirst(i)} popover`,
						},
						new b.button({ color: "secondary" }, `Popover on ${i}`)
					);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Custom {{container}}"),
		new e.text(
			"When you have some styles on a parent element that interfere with a popover, you’ll want to specify a custom {{container}} by set {{parent:'container'}} so that the popover’s HTML appears within that element instead. This is common in responsive tables, input groups, and the like."
		),
		new e.codepreview({
			type: "js",
			code: `
				new b.popover({parent:'body'});
			`,
		}),
		new e.text(
			"Another situation where you’ll want to set an explicit custom {{container}} are popovers inside a {{nav:docs/components/modal::modal dialog}}, to make sure that the popover itself is appended to the modal. This is particularly important for popovers that contain interactive elements – modal dialogs will trap focus, so unless the popover is a child element of the modal, users won’t be able to focus or activate these interactive elements."
		),
		new e.codepreview({
			type: "js",
			code: `
				new b.popover({parent:'.modal-body'});
			`,
		}),

		new e.alert(
			{ color: "danger", callout: true },
			"Setting {{parent}} currently not working correctly. But it still working only when you set {{parent:'body'}} (default)."
		),

		//-----------------------

		new e.subtitle("Custom popovers"),
		new e.text(
			"You can customize the appearance of popovers using {{nav:docs/components/popover#variables::CSS variables}}. Bootstrap set a custom class with {{customClass:'custom-popover'}} property to scope Bootstrap custom appearance and use it to override some of the local CSS variables."
		),
		new e.code({
			css: `
			.custom-popover {
				--bs-popover-max-width: 200px;
				--bs-popover-border-color: var(--bs-primary);
				--bs-popover-header-bg: var(--bs-primary);
				--bs-popover-header-color: var(--bs-white);
				--bs-popover-body-padding-x: 1rem;
				--bs-popover-body-padding-y: .5rem;
			}
			`,
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
			"Use the {{trigger:'focus'}} to dismiss popovers on the user’s next click of an element other than the toggle element."
		),
		new e.alert(
			{ color: "danger", callout: true },
			"{{b::Dismissing on next click requires specific HTML for proper cross-browser and cross-platform behavior}}. You can only use {{h.a}} elements, not {{b.button}}s or {{h.button}}s, and you must include a {{https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex::tabindex}}.{{hr}}This not a problem in {{b.popover}} since it is a wrapper."
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
			"Elements with the {{disabled}} attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper {{h.div}} or {{h.span}}, ideally made keyboard-focusable using {{tabindex:'0'}}."
		),
		new e.text(
			"{{b.popover}} create a wrapper using {{h.span}}. You can change the {{display:'block'}} to make it behave like {{h.div}}"
		),
		new e.text(
			"For disabled popover triggers, you may also prefer {{trigger:['hover','focus']}} so that the popover appears as immediate visual feedback to your users as they may not expect to click on a disabled element."
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
			"As part of Bootstrap’s evolving CSS variables approach, popover now use local CSS variables on {{.popover}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			title: "scss/_popover.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_popover.scss",
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
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
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

		new e.title("Usage"),
		new e.text("Enable popovers via JavaScript:"),
		new e.codepreview({
			type: "js",
			code: `
				core.init();
			`,
		}),
		new e.alert({ color: "warning", callout: true }, [
			new h.p(
				"{{b::Keep popovers accessible to keyboard and assistive technology users}} by only adding them to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). While other HTML elements can be made focusable by adding {{tabindex='0'}}, this can create annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce popovers in this situation. Additionally, do not rely solely on {{hover}} as the trigger for your popovers as this will make them impossible to trigger for keyboard users."
			),
			new h.p(
				"Avoid adding an excessive amount of content in popovers with the {{html}} option. Once popovers are displayed, their content is tied to the trigger element with the {{describedby}} property, causing all of the popover’s content to be announced to assistive technology users as one long, uninterrupted stream."
			),
			new h.p(
				"Popovers do not manage keyboard focus order, and their placement can be random in the DOM, so be careful when adding interactive elements (like forms or links), as it may lead to an illogical focus order or make the popover content itself completely unreachable for keyboard users. In cases where you must use these elements, consider using a modal dialog instead."
			),
		]),

		//-----------------------

		new e.subtitle("Options"),
		new e.text(
			`As options can be passed via data attributes or JavaScript, you can append an option name to {{data:{'bs-*':'{value}'\}\}}, as in {{data:{'bs-animation':'{value}'\}\}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data:{'bs-custom-class':'beautifier'\}\}} instead of {{data:{'bs-customClass':'beautifier'\}\}}.`
		),
		new e.text(
			`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data:{'bs-config':'{"delay":0, "title":123}'/}/}} and {{data:{'bs-title':'456'/}/}} property, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data:{'bs-config':''/}/}}. In addition, existing data attributes are able to house JSON values like {{data:{'bs-delay':'{"show":0,"hide":150}'/}/}}.`
		),
		new e.alert(
			{ color: "warning", callout: true },
			"Note that for security reasons the {{sanitize}}, {{sanitizeFn}}, and {{allowList}} options cannot be supplied using data attributes."
		),
		new e.table({
			item: [
				["Name", "Type", "Default", "Description"],
				[
					"{{autoInit}}",
					"boolean",
					"{{true}}",
					"Auto add {{data:{'bs-toggle':'popover'/}/}} to the component for auto initilize.",
				],
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
					"Overflow constraint boundary of the popover (applies only to Popper’s preventOverflow modifier). By default, it’s {{'clippingParents'}} and can accept an Element reference (via JavaScript only). For more information refer to Popper’s {{https://popper.js.org/docs/v2/utils/detect-overflow/#boundary::detectOverflow docs}}.",
				],
				[
					"{{parent}}",
					"string, false",
					"{{false}}",
					"Appends the popover to a specific element. Example: {{parent: 'body'}}. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.",
				],
				["{{content}}", "string, element", "{{undefinde}}", "Default content value."],
				["{{title}}", "string, element", "{{undefinde}}", "Default title value."],
				[
					"{{customClass}}",
					"string",
					"{{undefined}}",
					"Add classes to the popover when it is shown. Note that these classes will be added in addition to any classes specified in the template. To add multiple classes, separate them with spaces: {{'class-1 class-2'}}. You can also pass a function that should return a single string containing additional class names.",
				],
				[
					"{{delay}}",
					"number",
					"{{0}}",
					`Delay showing and hiding the popover (ms)—doesn’t apply to manual trigger type. If a value is supplied, delay is applied to both hide/show.`,
				],
				[
					"{{hideDelay}}",
					"number",
					"{{0}}",
					`Delay hiding the popover (ms)—doesn’t apply to manual trigger type. If a number is supplied, delay is applied to both hide. Object structure created is: {{delay: { "hide": value } }}.`,
				],
				[
					"{{showDelay}}",
					"number",
					"{{0}}",
					`Delay showing the popover (ms)—doesn’t apply to manual trigger type. If a number is supplied, delay is applied to show. Object structure created is: {{delay: { "show": value } }}.`,
				],
				[
					"{{fallbackPlacements}}",
					"string, array",
					"{{['top', 'right', 'bottom', 'left']}}",
					"Define fallback placements by providing a list of placements in array (in order of preference). For more information refer to Popper’s {{https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements::behavior docs}}.",
				],
				[
					"{{html}}",
					"boolean",
					"{{false}}",
					"Allow HTML in the popover. If true, HTML tags in the popover’s {{title}} will be rendered in the popover. If false, {{innerText}} property will be used to insert content into the DOM. Use text if you’re worried about XSS attacks.",
				],
				[
					"{{viewOffset}}",
					"array number, string",
					"{{[0, 0]}}",
					"Offset of the popover relative to its target. You can pass a string in data attributes with comma separated values like: {{'10,20'}}. For more information refer to Popper’s {{https://popper.js.org/docs/v2/modifiers/offset/#options::offset docs}}.",
				],
				[
					"{{placement}}",
					"string",
					"{{'top'}}",
					"How to position the popover: auto, top, bottom, left, right. When {{auto}} is specified, it will dynamically reorient the popover. When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The {{this}} context is set to the popover instance.",
				],
				[
					"{{popperConfig}}",
					"null, object, function",
					"{{null}}",
					"To change Bootstrap’s default Popper config, see {{https://popper.js.org/docs/v2/constructors/#options::Popper’s configuration}}. When a function is used to create the Popper configuration, it’s called with an object that contains the Bootstrap’s default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper.",
				],
				[
					"{{sanitize}}",
					"boolean",
					"{{true}}",
					"Enable or disable the sanitization. If activated {{'template'}}, {{'content'}} and {{'title'}} options will be sanitized.",
				],
				[
					"{{sanitizeFn}}",
					"function name in string",
					"{{undefined}}",
					"Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization.",
				],
				[
					"{{selector}}",
					"string, false",
					"{{false}}",
					"If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to also apply popovers to dynamically added DOM elements (jQuery.on support). See {{https://github.com/twbs/bootstrap/issues/4215::this issue}} and {{https://codepen.io/Johann-S/pen/djJYPb::an informative example}}. {{b::Note}}: {{title}} attribute must not be used as a selector.",
				],
				[
					"{{template}}",
					"string",
					`{{'<div class="popover" role="popover"><div class="popover-arrow"></div><div class="popover-inner"></div></div>'}}`,
					`Base HTML to use when creating the popover. The popover’s {{title}} will be injected into the {{.popover-inner}}. {{.popover-arrow}} will become the popover’s arrow. The outermost wrapper element should have the {{.popover}} class and {{role="popover"}}.`,
				],

				[
					"{{trigger}}",
					"string",
					"{{'hover focus'}}",
					"How popover is triggered: click, hover, focus, manual. You may pass multiple triggers; separate them with a space. {{'manual'}} indicates that the popover will be triggered programmatically via the {{.popover('show')}}, {{.popover('hide')}} and {{.popover('toggle')}} methods; this value cannot be combined with any other trigger. {{'hover'}} on its own will result in popovers that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present.",
				],
			],
		}),
		new e.alert({ color: "info", callout: true }, [
			new b.alert.header(4, "Data attributes for individual popovers"),
			"Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.",
		]),

		//-----------------------

		new e.xsubtitle("Using function with {{popperConfig}}"),
		new e.codepreview({
			type: "js",
			code: `
				const popover = new bootstrap.Popover(element, {
				popperConfig(defaultBsPopperConfig) {
					// const newPopperConfig = {...}
					// use defaultBsPopperConfig if needed...
					// return newPopperConfig
				}
				})

			`,
		}),

		//-----------------------

		new e.subtitle("Methods"),
		new e.alert(
			{ color: "danger", callout: true },
			"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}."
		),
		new e.table({
			item: [
				["Method", "Description"],
				[
					"{{disable}}",
					"Removes the ability for an element’s popover to be shown. The popover will only be able to be shown if it is re-enabled.",
				],
				[
					"{{dispose}}",
					"Hides and destroys an element’s popover (Removes stored data on the DOM element). Popovers that use delegation (which are created using {{nav:docs/components/popovers#options::the selector option}}) cannot be individually destroyed on descendant trigger elements.",
				],
				[
					"{{enable}}",
					"Gives an element’s popover the ability to be shown. {{b::Popovers are enabled by default}}.",
				],
				[
					"{{getInstance}}",
					"{{i::Static}} method which allows you to get the popover instance associated with a DOM element.",
				],
				[
					"{{getOrCreateInstance}}",
					"{{i::Static}} method which allows you to get the popover instance associated with a DOM element, or create a new one in case it wasn’t initialized.",
				],
				[
					"{{hide}}",
					"Hides an element’s popover. {{b::Returns to the caller before the popover has actually been hidden}} (i.e. before the {{hidden.bs.popover}} event occurs). This is considered a “manual” triggering of the popover.",
				],
				["{{setContent}}", "Gives a way to change the popover’s content after its initialization."],
				[
					"{{show}}",
					"Reveals an element’s popover. {{b::Returns to the caller before the popover has actually been shown}} (i.e. before the {{shown.bs.popover}} event occurs). This is considered a “manual” triggering of the popover. Popovers whose title and content are both zero-length are never displayed.",
				],
				[
					"{{toggle}}",
					"Toggles an element’s popover. {{b::Returns to the caller before the popover has actually been shown or hidden}} (i.e. before the {{shown.bs.popover}} or {{hidden.bs.popover}} event occurs). This is considered a “manual” triggering of the popover.",
				],
				["{{toggleEnabled}}", "Toggles the ability for an element’s popover to be shown or hidden."],
				["{{update}}", "Updates the position of an element’s popover."],
			],
		}),

		new e.code({
			showConsole: true,
			output: () => {
				const myDefaultAllowList = window.bootstrap.Tooltip.Default.allowList;
				myDefaultAllowList.img = ["src", "alt"];

				return [
					new h.div({ display: "flex", overflow: "auto" }, [
						new h.div(
							{
								width: 100,
								marginEnd: 3,
								bgColor: "body-tertiary",
								rounded: true,
								position: "relative",
							},
							new h.div(
								{ position: "absolute", top: 50, start: 50, tMiddle: true },
								new b.popover(
									{
										autoInit: false,
										id: "example-popover",
										placement: "top",
										fallbackPlacement: "bottom",
										allowHtml: true,
										allowList: myDefaultAllowList,
										title: "Popover title",
										content: "And here's some amazing content. It's very engaging. Right?",
										on: {
											"hidden.bs.popover": (eent) => {
												b.popover.setContent("#example-popover", {
													".popover-header": "Popover title",
													".popover-body":
														"And here's some amazing content. It's very engaging. Right?",
												});
											},
										},
									},
									new b.button(
										{
											color: "primary",
											weight: "lg",
										},
										"Example"
									)
								)
							)
						),
						new h.div(
							{ marginStart: "auto" },
							new b.btngroup({ vertical: true, weight: "sm" }, [
								new b.button(
									{
										color: "success",
										on: {
											click: () => {
												b.popover.enable("#example-popover");
											},
										},
									},
									"enable"
								),
								new b.button(
									{
										color: "success",
										on: {
											click: (event) => {
												const elem = b.popover.getInstance("#example-popover");

												e.console(
													event.target as Element,
													"b.popover.getInstance",
													elem ? elem : "null",
													elem ? "success" : "danger"
												);
											},
										},
									},
									"getInstance"
								),
								new b.button(
									{
										color: "success",
										on: {
											click: (event) => {
												const elem = b.popover.getOrCreateInstance("#example-popover");
												e.console(
													event.target as Element,
													"b.popover.getOrCreateInstance",
													elem,
													elem ? "success" : "danger"
												);
											},
										},
									},
									"getOrCreateInstance"
								),

								new b.button(
									{
										on: {
											click: () => {
												b.popover.toggle("#example-popover");
											},
										},
									},
									"toggle"
								),
								new b.button(
									{
										color: "warning",
										toggle: true,
										on: {
											click: () => {
												b.popover.toggleEnabled("#example-popover");
											},
										},
									},
									"toggleEnabled"
								),
								new b.button(
									{
										on: {
											click: () => {
												b.popover.show("#example-popover");
											},
										},
									},
									"show"
								),
								new b.button(
									{
										on: {
											click: () => {
												b.popover.hide("#example-popover");
											},
										},
									},
									"hide"
								),
								new b.button(
									{
										on: {
											click: () => {
												b.popover.update("#example-popover");
											},
										},
									},
									"update"
								),
								new b.button(
									{
										on: {
											click: () => {
												b.popover.setContent("#example-popover", {
													".popover-header": "Image",
													".popover-body":
														"<img class='rounded' src='https://picsum.photos/seed/bsts_0/170/170.webp' alt='Image cap'>",
												});
											},
										},
									},
									"setContent"
								),

								new b.button(
									{
										color: "danger",
										on: {
											click: () => {
												b.popover.disable("#example-popover");
											},
										},
									},
									"disabled"
								),
								new b.button(
									{
										color: "danger",
										on: {
											click: () => {
												b.popover.dispose("#example-popover");
											},
										},
									},
									"dispose"
								),
							])
						),
					]),
				];
			},
		}),
		new e.alert(
			{ color: "info", callout: true },
			" The {{setContent}} method accepts an {{object}} argument, where each property-key is a valid {{string}} selector within the popover template, and each related property-value can be {{string}} | {{element}} | {{function}} | {{null}}"
		),

		//-----------------------

		new e.subtitle("Events"),
		new e.table({
			item: [
				["Event", "Description"],
				[
					"{{hide.bs.popover}}",
					"This event is fired immediately when the {{hide}} instance method has been called.",
				],
				[
					"{{hidden.bs.popover}}",
					"This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete).",
				],
				[
					"{{inserted.bs.popover}}",
					"This event is fired after the {{show.bs.popover }}event when the popover template has been added to the DOM.",
				],
				["{{show.bs.popover}}", "This event fires immediately when the {{show}} instance method is called."],
				[
					"{{shown.bs.popover}}",
					"This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).",
				],
			],
		}),

		new e.code({
			showConsole: true,
			output: () => {
				return new b.popover(
					{
						title: "Popover title",
						content: "And here's some amazing content. It's very engaging. Right?",
						on: {
							"shown.bs.popover": (event) => {
								const target = event.target as Element;
								e.console(
									target,
									"shown.bs.popover",
									`Target: {{b::${core.elemInfo(target)}}}`,
									"success"
								);
							},

							"hidden.bs.popover": (event) => {
								const target = event.target as Element;
								e.console(
									target,
									"hidden.bs.popover",
									`Target: {{b::${core.elemInfo(target)}}}`,
									"danger"
								);
							},

							"inserted.bs.popover": (event) => {
								const target = event.target as Element;
								e.console(
									target,
									"inserted.bs.popover",
									`Target: {{b::${core.elemInfo(target)}}}`,
									"info"
								);
							},
						},
					},
					new b.button({ weight: "lg" }, "Click to toggle popover")
				);
			},
		}),
	],
};

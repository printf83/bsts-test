import { h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_tooltip: IAttrContent = {
	title: "Tooltips",
	description:
		"Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.",
	item: [
		new e.title("Overview"),
		new e.text("Things to know when using the tooltip plugin:"),
		new e.ul({
			item: [
				"Tooltips rely on the third party library {{https://popper.js.org/::Popper}} for positioning. You must include {{https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js::popper.min.js}} before {{bootstrap.js}}, or use one {{bootstrap.bundle.min.js}} which contains Popper.",
				"Tooltips are opt-in for performance reasons, so {{b::you must initialize them yourself}}.",
				"Tooltips with zero-length title are never displayed.",
				"Specify {{container: 'body'}} to avoid rendering problems in more complex components (like our input groups, button groups, etc).",
				"Triggering tooltips on hidden elements will not work.",
				"Tooltips for {{.disabled}} or {{disabled}} elements must be triggered on a wrapper element.",
				"When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use {{white-space: nowrap;}} on your {{<a>}}s to avoid this behavior.",
				"Tooltips must be hidden before their corresponding elements have been removed from the DOM.",
				"Tooltips can be triggered thanks to an element inside a shadow DOM.",
			],
		}),
		new e.text("Got all that? Great, let’s see how they work with some examples."),
		new e.alert(
			{ color: "info", callout: true },
			"By default, this component uses the built-in content sanitizer, which strips out any HTML elements that are not explicitly allowed. See the {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#sanitizer::sanitizer section in our JavaScript documentation}} for more details."
		),
		new e.alert(
			{ color: "info", callout: true },
			"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of our accessibility documentation}}."
		),

		//-----------------------

		new e.title("Examples"),
		new e.subtitle("Enable tooltips"),
		new e.text(
			"As mentioned above, you must initialize tooltips before they can be used. One way to initialize all tooltips on a page would be to select them by their {{data-bs-toggle}} attribute, like so:"
		),
		new e.codepreview({
			type: "js",
			code: `
				const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
				const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
			`,
		}),

		//-----------------------

		new e.subtitle("Tooltips on links"),
		new e.text("Hover over the links below to see tooltips:"),

		new e.code({
			output: () => {
				return new h.p({ textColor: "body-secondary" }, [
					"Placeholder text to demonstrate some ",
					new b.tooltip({ content: "Default tooltip" }, new h.a({ href: "#" }, "inline links")),
					" with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of ",
					new b.tooltip({ content: "Another tooltip" }, new h.a({ href: "#" }, "real text")),
					". And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how ",
					new b.tooltip(
						{ content: "Another one here too" },
						new h.a({ href: "#" }, "these tooltips on links")
					),
					" can work in practice, once you use them on ",
					new b.tooltip({ content: "The last tip!" }, new h.a({ href: "#" }, "your own")),
					" site or project.",
				]);
			},
		}),
		new e.alert(
			{ color: "warning", callout: true },
			"Feel free to use either {{title}} or {{data-bs-title}} in your HTML. When {{title}} is used, Popper will replace it automatically with {{data-bs-title}} when the element is rendered."
		),

		//-----------------------

		new e.subtitle("Custom tooltips"),
		new e.text(
			"You can customize the appearance of tooltips using {{https://getbootstrap.com/docs/5.3/components/tooltips/#variables::CSS variables}}. We set a custom class with {{data-bs-custom-class='custom-tooltip'}} to scope our custom appearance and use it to override some of the local CSS variables."
		),

		new e.codepreview({
			type: "css",
			code: `
				.custom-tooltip {
				--bs-tooltip-bg: var(--bs-primary);
				}
			`,
		}),
		new e.code({
			css: `
			.custom-tooltip {
				--bs-tooltip-bg: var(--bs-primary);
			}
			`,
			output: () => {
				return new b.tooltip(
					{
						title: "Custom tooltip",
						content: "This tooltip is themed via CSS variables.",
						customClass: "custom-tooltip",
					},
					new b.button({ color: "secondary" }, "Custom tooltip")
				);
			},
		}),

		//-----------------------

		new e.subtitle("Directions"),
		new e.text(
			"Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL."
		),
		new e.code({
			output: () => {
				return ["top", "right", "bottom", "left"].map((i) => {
					return new b.tooltip(
						{
							placement: i as b.IAttrBSTooltip["placement"],
							content: `Tooltip on ${i}`,
						},
						new b.button({ color: "secondary" }, `Tooltip on ${i}`)
					);
				});
			},
		}),
		new e.text("And with custom HTML added:"),
		// new e.code({
		// 	output: () => {
		// 		return new b.tooltip(
		// 			{
		// 				content: "<em>Tooltip</em> <u>with</u> <b>HTML</b>",
		// 			},
		// 			new b.button({ color: "secondary" }, "Tooltip on HTML")
		// 		);
		// 	},
		// }),
		new e.codepreview({
			type: "html",
			code: `
				<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b>HTML&lt;/b&gt;">
				Tooltip with HTML
				</button>
			`,
		}),
		new e.text("With an SVG:"),
		new e.code({
			showHTML: false,
			showScript: false,
			output: () => {
				return new b.tooltip(
					{
						content: "Default tooltip",
					},
					new b.img({ src: "favicon.svg", style: { width: "50px", height: "50px" } })
				);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, tooltip now use local CSS variables on {{.tooltip}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}tooltip-zindex: #{$zindex-tooltip};
				--#{$prefix}tooltip-max-width: #{$tooltip-max-width};
				--#{$prefix}tooltip-padding-x: #{$tooltip-padding-x};
				--#{$prefix}tooltip-padding-y: #{$tooltip-padding-y};
				--#{$prefix}tooltip-margin: #{$tooltip-margin};
				@include rfs($tooltip-font-size, --#{$prefix}tooltip-font-size);
				--#{$prefix}tooltip-color: #{$tooltip-color};
				--#{$prefix}tooltip-bg: #{$tooltip-bg};
				--#{$prefix}tooltip-border-radius: #{$tooltip-border-radius};
				--#{$prefix}tooltip-opacity: #{$tooltip-opacity};
				--#{$prefix}tooltip-arrow-width: #{$tooltip-arrow-width};
				--#{$prefix}tooltip-arrow-height: #{$tooltip-arrow-height};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$tooltip-font-size:                 $font-size-sm;
				$tooltip-max-width:                 200px;
				$tooltip-color:                     var(--#{$prefix}body-bg);
				$tooltip-bg:                        var(--#{$prefix}emphasis-color);
				$tooltip-border-radius:             var(--#{$prefix}border-radius);
				$tooltip-opacity:                   .9;
				$tooltip-padding-y:                 $spacer * .25;
				$tooltip-padding-x:                 $spacer * .5;
				$tooltip-margin:                    null; // TODO: remove this in v6

				$tooltip-arrow-width:               .8rem;
				$tooltip-arrow-height:              .4rem;
				// fusv-disable
				$tooltip-arrow-color:               null; // Deprecated in Bootstrap 5.2.0 for CSS variables
				// fusv-enable
			`,
		}),

		//-----------------------

		new e.title("Usage"),
		new e.text(
			"The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element. Trigger the tooltip via JavaScript:"
		),
		new e.codepreview({
			type: "js",
			code: `
				const exampleEl = document.getElementById('example')
				const tooltip = new bootstrap.Tooltip(exampleEl, options)
			`,
		}),
		new e.alert(
			{ color: "warning", callout: true },
			"Tooltips automatically attempt to change positions when a parent container has {{overflow: auto}} or {{overflow: scroll}}, but still keeps the original placement’s positioning. Set the {{https://popper.js.org/docs/v2/modifiers/flip/#boundary::boundary option}} (for the flip modifier using the {{popperConfig}} option) to any HTMLElement to override the default value, {{'clippingParents'}}, such as {{document.body}}:"
		),
		new e.codepreview({
			type: "js",
			code: `
				const tooltip = new bootstrap.Tooltip('#example', {
				boundary: document.body // or document.querySelector('#boundary')
				})
			`,
		}),

		//-----------------------

		new e.subtitle("Markup"),
		new e.text(
			"The required markup for a tooltip is only a {{data}} attribute and {{title}} on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to {{top}} by the plugin)."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Keep tooltips accessible to keyboard and assistive technology users}} by only adding them to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). While other HTML elements can be made focusable by adding {{tabindex='0'}}, this can create annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce tooltips in this situation. Additionally, do not rely solely on {{hover}} as the trigger for your tooltips as this will make theme impossible to trigger for keyboard users."
		),
		new e.codepreview({
			type: "html",
			code: `
				<!-- HTML to write -->
				<a href="#" data-bs-toggle="tooltip" data-bs-title="Some tooltip text!">Hover over me</a>

				<!-- Generated markup by the plugin -->
				<div class="tooltip bs-tooltip-top" role="tooltip">
				<div class="tooltip-arrow"></div>
				<div class="tooltip-inner">
					Some tooltip text!
				</div>
				</div>
			`,
		}),

		//-----------------------

		new e.subtitle("Disabled elements"),
		new e.text(
			"Elements with the {{disabled}} attribute aren’t interactive, meaning users cannot hover or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper {{<div>}} or {{<span>}}, ideally made keyboard-focusable using {{tabindex='0'}}."
		),
		new e.code({
			output: () => {
				return new b.tooltip(
					{
						content: "Disabled tooltip",
					},
					new b.button({ color: "primary", disabled: true }, "Disabled button")
				);
			},
		}),

		//-----------------------

		new e.subtitle("Options"),
		new e.text(
			`As options can be passed via data attributes or JavaScript, you can append an option name to {{data-bs-}}, as in {{data-bs-animation="{value}"}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data-bs-custom-class="beautifier"}} instead of {{data-bs-customClass="beautifier"}}.`
		),
		new e.text(
			`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data-bs-config='{"delay":0, "title":123}'}} and {{data-bs-title="456"}} attributes, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data-bs-config}}. In addition, existing data attributes are able to house JSON values like {{data-bs-delay='{"show":0,"hide":150}'}}.`
		),
		new e.text(
			"The final configuration object is the merged result of {{data-bs-config}}, {{data-bs-}}, and {{js object}} where the latest given key-value overrides the others."
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
				["{{animation}}", "boolean", "{{true}}", "Apply a CSS fade transition to the tooltip."],
				[
					"{{boundary}}",
					"string, element",
					"{{'clippingParents'}}",
					"Overflow constraint boundary of the tooltip (applies only to Popper’s preventOverflow modifier). By default, it’s {{'clippingParents'}} and can accept an HTMLElement reference (via JavaScript only). For more information refer to Popper’s {{https://popper.js.org/docs/v2/utils/detect-overflow/#boundary::detectOverflow docs}}.",
				],
				[
					"{{container}}",
					"string, element, false",
					"{{false}}",
					"Appends the tooltip to a specific element. Example: {{container: 'body'}}. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize.",
				],
				[
					"{{customClass}}",
					"string, function",
					"{{''}}",
					"Add classes to the tooltip when it is shown. Note that these classes will be added in addition to any classes specified in the template. To add multiple classes, separate them with spaces: {{'class-1 class-2'}}. You can also pass a function that should return a single string containing additional class names.",
				],
				[
					"{{delay}}",
					"number, object",
					"{{0}}",
					`Delay showing and hiding the tooltip (ms)—doesn’t apply to manual trigger type. If a number is supplied, delay is applied to both hide/show. Object structure is: {{delay: { "show": 500, "hide": 100 }}}.`,
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
					"Allow HTML in the tooltip. If true, HTML tags in the tooltip’s {{title}} will be rendered in the tooltip. If false, {{innerText}} property will be used to insert content into the DOM. Use text if you’re worried about XSS attacks.",
				],
				[
					"{{offset}}",
					"number, string, function",
					"{{[0, 0]}}",
					"Offset of the tooltip relative to its target. You can pass a string in data attributes with comma separated values like: {{data-bs-offset='10,20'}}. When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: {{https://popper.js.org/docs/v2/modifiers/offset/#skidding-1::skidding}}, {{https://popper.js.org/docs/v2/modifiers/offset/#distance-1::distance}}. For more information refer to Popper’s {{https://popper.js.org/docs/v2/modifiers/offset/#options::offset docs}}.",
				],
				[
					"{{placement}}",
					"string, function",
					"{{'top'}}",
					"How to position the tooltip: auto, top, bottom, left, right. When {{auto}} is specified, it will dynamically reorient the tooltip. When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The {{this}} context is set to the tooltip instance.",
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
					"null, function",
					"{{null}}",
					"Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization.",
				],
				[
					"{{selector}}",
					"string, false",
					"{{false}}",
					"If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to also apply tooltips to dynamically added DOM elements (jQuery.on support). See {{https://github.com/twbs/bootstrap/issues/4215::this issue}} and {{https://codepen.io/Johann-S/pen/djJYPb::an informative example}}. {{b::Note}}: {{title}} attribute must not be used as a selector.",
				],
				[
					"{{template}}",
					"string",
					`{{'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}}`,
					`Base HTML to use when creating the tooltip. The tooltip’s {{title}} will be injected into the {{.tooltip-inner}}. {{.tooltip-arrow}} will become the tooltip’s arrow. The outermost wrapper element should have the {{.tooltip}} class and {{role="tooltip"}}.`,
				],
				[
					"{{title}}",
					"string, element, function",
					"{{''}}",
					"The tooltip title. If a function is given, it will be called with its {{this}} reference set to the element that the popover is attached to.",
				],
				[
					"{{trigger}}",
					"string",
					"{{'hover focus'}}",
					"How tooltip is triggered: click, hover, focus, manual. You may pass multiple triggers; separate them with a space. {{'manual'}} indicates that the tooltip will be triggered programmatically via the {{.tooltip('show')}}, {{.tooltip('hide')}} and {{.tooltip('toggle')}} methods; this value cannot be combined with any other trigger. {{'hover'}} on its own will result in tooltips that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present.",
				],
			],
		}),
		new e.alert({ color: "info", callout: true }, [
			new b.alert.header(4, "Data attributes for individual tooltips"),
			"Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.",
		]),

		//-----------------------

		new e.xsubtitle("Using function with {{popperConfig}}"),
		new e.codepreview({
			type: "js",
			code: `
				const tooltip = new bootstrap.Tooltip(element, {
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
			"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in our JavaScript docs}}."
		),
		new e.table({
			item: [
				["Method", "Description"],
				[
					"{{disable}}",
					"Removes the ability for an element’s tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled.",
				],
				[
					"{{dispose}}",
					"Hides and destroys an element’s tooltip (Removes stored data on the DOM element). Tooltips that use delegation (which are created using {{https://getbootstrap.com/docs/5.3/components/tooltips/#options::the selector option}}) cannot be individually destroyed on descendant trigger elements.",
				],
				[
					"{{enable}}",
					"Gives an element’s tooltip the ability to be shown. {{b::Tooltips are enabled by default}}.",
				],
				[
					"{{getInstance}}",
					"{{i::Static}} method which allows you to get the tooltip instance associated with a DOM element.",
				],
				[
					"{{getOrCreateInstance}}",
					"{{i::Static}} method which allows you to get the tooltip instance associated with a DOM element, or create a new one in case it wasn’t initialized.",
				],
				[
					"{{hide}}",
					"Hides an element’s tooltip. {{b::Returns to the caller before the tooltip has actually been hidden}} (i.e. before the {{hidden.bs.tooltip}} event occurs). This is considered a “manual” triggering of the tooltip.",
				],
				["{{setContent}}", "Gives a way to change the tooltip’s content after its initialization."],
				[
					"{{show}}",
					"Reveals an element’s tooltip. {{b::Returns to the caller before the tooltip has actually been shown}} (i.e. before the {{shown.bs.tooltip}} event occurs). This is considered a “manual” triggering of the tooltip. Tooltips whose title and content are both zero-length are never displayed.",
				],
				[
					"{{toggle}}",
					"Toggles an element’s tooltip. {{b::Returns to the caller before the tooltip has actually been shown or hidden}} (i.e. before the {{shown.bs.tooltip}} or {{hidden.bs.tooltip}} event occurs). This is considered a “manual” triggering of the tooltip.",
				],
				["{{toggleEnabled}}", "Toggles the ability for an element’s tooltip to be shown or hidden."],
				["{{update}}", "Updates the position of an element’s tooltip."],
			],
		}),

		new e.codepreview({
			type: "js",
			code: `
				const tooltip = bootstrap.Tooltip.getInstance('#example') // Returns a Bootstrap tooltip instance

				// setContent example
				tooltip.setContent({ '.tooltip-inner': 'another title' })
			`,
		}),

		new e.alert(
			{ color: "info", callout: true },
			" The {{setContent}} method accepts an {{object}} argument, where each property-key is a valid {{string}} selector within the tooltip template, and each related property-value can be {{string}} | {{element}} | {{function}} | {{null}}"
		),

		//-----------------------

		new e.subtitle("Events"),
		new e.table({
			item: [
				["Event", "Description"],
				[
					"{{hide.bs.tooltip}}",
					"This event is fired immediately when the {{hide}} instance method has been called.",
				],
				[
					"{{hidden.bs.tooltip}}",
					"This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete).",
				],
				[
					"{{inserted.bs.tooltip}}",
					"This event is fired after the {{show.bs.tooltip }}event when the tooltip template has been added to the DOM.",
				],
				["{{show.bs.tooltip}}", "This event fires immediately when the {{show}} instance method is called."],
				[
					"{{shown.bs.tooltip}}",
					"This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete).",
				],
			],
		}),

		new e.codepreview({
			type: "js",
			code: `
				const myTooltipEl = document.getElementById('myTooltip')
				const tooltip = bootstrap.Tooltip.getOrCreateInstance(myTooltipEl)

				myTooltipEl.addEventListener('hidden.bs.tooltip', () => {
				// do something...
				})

				tooltip.hide()
			`,
		}),
	],
};

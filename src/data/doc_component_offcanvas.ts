import { h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_offcanvas: IAttrContent = {
	title: "Offcanvas",
	description:
		"Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.",
	item: [
		new e.title("How it works"),
		new e.text(
			"Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, top, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and {{data}} attributes are used to invoke our JavaScript."
		),
		new e.ul({
			item: [
				"Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are separate plugins.",
				"Similarly, some source {{https://getbootstrap.com/docs/5.3/components/offcanvas/#sass-variables::Sass variables}} for offcanvas’s styles and dimensions are inherited from the modal’s variables.",
				"When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.",
				"Similar to modals, only one offcanvas can be shown at a time.",
			],
		}),
		new e.text(
			"{{b::Heads up!}} Given how CSS handles animations, you cannot use {{margin}} or {{translate}} on an {{.offcanvas}} element. Instead, use the class as an independent wrapping element."
		),
		new e.alert(
			{ color: "info", callout: true },
			" The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of our accessibility documentation}}."
		),

		//-----------------------

		new e.title("Examples"),
		new e.subtitle("Offcanvas components"),
		new e.text(
			"Below is an offcanvas example that is shown by default (via {{.show}} on {{.offcanvas}}). Offcanvas includes support for a header with a close button and an optional body class for some initial {{padding}}. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action."
		),
		new e.code({
			previewAttr: { bgColor: "body-tertiary", padding: 0 },
			output: () => {
				return new b.offcanvas.container(
					{
						debug: true,
						labelledby: "offcanvasLabel",
					},
					[
						new b.offcanvas.header([
							new b.offcanvas.title({ id: "offcanvasLabel" }, "Offcanvas"),
							new b.offcanvas.btnclose(),
						]),
						new b.offcanvas.body(
							"Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here."
						),
					]
				);
			},
		}),

		//-----------------------

		new e.subtitle("Live demo"),
		new e.text(
			"Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the {{.show}} class on an element with the {{.offcanvas}} class."
		),
		new e.ul({
			item: ["{{.offcanvas}} hides content (default)", "{{.offcanvas.show}} shows content"],
		}),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ href: "#offcanvasExample", control: "offcanvasExample" },
						"Link with href"
					),
					new b.offcanvas.toggle(
						{ target: "#offcanvasExample", control: "offcanvasExample" },
						"Button with data-bs-target"
					),
					new b.offcanvas.container({ id: "offcanvasExample", labelledby: "offcanvasExampleLabel" }, [
						new b.offcanvas.header([
							new b.offcanvas.title({ id: "offcanvasExampleLabel" }, "Offcanvas"),
							new b.offcanvas.btnclose(),
						]),
						new b.offcanvas.body([
							new h.div(
								"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."
							),
							new b.dropdown.container({ marginTop: 3 }, [
								new b.dropdown.toggle({ color: "secondary" }, "Dropdown button"),
								new b.dropdown.menu([
									new b.dropdown.item({ href: "#" }, "Action"),
									new b.dropdown.item({ href: "#" }, "Another action"),
									new b.dropdown.item({ href: "#" }, "Something else here"),
								]),
							]),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Body scrolling"),
		new e.text(
			"Scrolling the {{<body>}} element is disabled when an offcanvas and its backdrop are visible. Use the {{data-bs-scroll}} attribute to enable {{<body>}} scrolling."
		),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasScrolling", control: "offcanvasScrolling" },
						"Enable body scrolling"
					),
					new b.offcanvas.container(
						{
							id: "offcanvasScrolling",
							scroll: true,
							backdrop: false,
							labelledby: "offcanvasScrollingLabel",
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title(
									{ id: "offcanvasScrollingLabel" },
									"Offcanvas with body scrolling"
								),
								new b.offcanvas.btnclose(),
							]),
							new b.offcanvas.body(
								new h.p("Try scrolling the rest of the page to see this option in action.")
							),
						]
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Body scrolling and backdrop"),
		new e.text("You can also enable {{<body>}} scrolling with a visible backdrop."),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasWithBothOptions", control: "offcanvasWithBothOptions" },
						"Enable both scrolling & backdrop"
					),
					new b.offcanvas.container(
						{
							id: "offcanvasWithBothOptions",
							scroll: true,
							backdrop: true,
							labelledby: "offcanvasWithBothOptionsLabel",
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title(
									{ id: "offcanvasWithBothOptionsLabel" },
									"Backdrop with scrolling"
								),
								new b.offcanvas.btnclose(),
							]),
							new b.offcanvas.body(
								new h.p("Try scrolling the rest of the page to see this option in action.")
							),
						]
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Static backdrop"),
		new e.text("When backdrop is set to static, the offcanvas will not close when clicking outside of it."),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#staticBackdrop", control: "staticBackdrop" },
						"Toggle static offcanvas"
					),
					new b.offcanvas.container(
						{
							id: "staticBackdrop",
							backdrop: "static",
							labelledby: "staticBackdropLabel",
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title({ id: "staticBackdropLabel" }, "Offcanvas"),
								new b.offcanvas.btnclose(),
							]),
							new b.offcanvas.body(new h.div("I will not close if you click outside of me.")),
						]
					),
				];
			},
		}),

		//-----------------------

		new e.title("Dark offcanvas"),
		new e.text(
			"Change the appearance of offcanvases with utilities to better match them to different contexts like dark navbars. Here we add {{.text-bg-dark}} to the {{.offcanvas}} and {{.btn-close-white}} to {{.btn-close}} for proper styling with a dark offcanvas. If you have dropdowns within, consider also adding {{.dropdown-menu-dark}} to {{.dropdown-menu}}."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Heads up!}} Dark variants for components were deprecated in v5.3.0 with the introduction of color modes. Instead of manually adding classes mentioned above, set {{data-bs-theme='dark'}} on the root element, a parent wrapper, or the component itself."
		),
		new e.code({
			previewAttr: { bgColor: "body-tertiary", padding: 0 },
			output: () => {
				return new b.offcanvas.container(
					{
						debug: true,
						theme: "dark",
						labelledby: "offcanvasDarkLabel",
					},
					[
						new b.offcanvas.header([
							new b.offcanvas.title({ id: "offcanvasDarkLabel" }, "Offcanvas"),
							new b.offcanvas.btnclose(),
						]),
						new b.offcanvas.body("Place offcanvas content here."),
					]
				);
			},
		}),

		//-----------------------

		new e.title("Responsive"),
		new e.text(
			"Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above that breakpoint, the contents within will behave as usual. For example, {{.offcanvas-lg}} hides content in an offcanvas below the {{lg}} breakpoint, but shows the content above the {{lg}} breakpoint."
		),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{
							target: "#offcanvasResponsive",
							control: "offcanvasResponsive",
							display: "lg-none",
						},
						"Toggle offcanvas"
					),
					new b.alert.container(
						{ color: "info", display: ["none", "lg-block"] },
						"Resize your browser to show the responsive offcanvas toggle."
					),
					new b.offcanvas.container(
						{
							id: "offcanvasResponsive",
							placement: "end",
							hide: "lg",
							labelledby: "offcanvasResponsiveLabel",
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title({ id: "offcanvasResponsiveLabel" }, "Responsive offcanvas"),
								new b.offcanvas.btnclose({ target: "#offcanvasResponsive" }),
							]),
							new b.offcanvas.body(
								new h.p({ marginBottom: 0 }, "This is content within an {{.offcanvas-lg}}.")
							),
						]
					),
				];
			},
		}),
		new e.text("Responsive offcanvas classes are available across for each breakpoint."),
		new e.ul({
			item: [
				"{{.offcanvas}}",
				"{{.offcanvas-sm}}",
				"{{.offcanvas-md}}",
				"{{.offcanvas-lg}}",
				"{{.offcanvas-xl}}",
				"{{.offcanvas-xxl}}",
			],
		}),

		//-----------------------

		new e.title("Placement"),
		new e.text(
			"There’s no default placement for offcanvas components, so you must add one of the modifier classes below."
		),
		new e.ul({
			item: [
				"{{.offcanvas-start}} places offcanvas on the left of the viewport (shown above)",
				"{{.offcanvas-end}} places offcanvas on the right of the viewport",
				"{{.offcanvas-top}} places offcanvas on the top of the viewport",
				"{{.offcanvas-bottom}} places offcanvas on the bottom of the viewport",
			],
		}),
		new e.text("Try the top, right, and bottom examples out below."),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasTop", control: "offcanvasTop" },
						"Toggle top offcanvas"
					),
					new b.offcanvas.container(
						{
							id: "offcanvasTop",
							placement: "top",
							labelledby: "offcanvasTopLabel",
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title({ id: "offcanvasTopLabel" }, "Offcanvas top"),
								new b.offcanvas.btnclose(),
							]),
							new b.offcanvas.body("..."),
						]
					),
				];
			},
		}),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasEnd", control: "offcanvasEnd" },
						"Toggle end offcanvas"
					),
					new b.offcanvas.container(
						{
							id: "offcanvasEnd",
							placement: "end",
							labelledby: "offcanvasEndLabel",
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title({ id: "offcanvasEndLabel" }, "Offcanvas end"),
								new b.offcanvas.btnclose(),
							]),
							new b.offcanvas.body("..."),
						]
					),
				];
			},
		}),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasBottom", control: "offcanvasBottom" },
						"Toggle bottom offcanvas"
					),
					new b.offcanvas.container(
						{
							id: "offcanvasBottom",
							placement: "bottom",
							labelledby: "offcanvasBottomLabel",
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title({ id: "offcanvasBottomLabel" }, "Offcanvas bottom"),
								new b.offcanvas.btnclose(),
							]),
							new b.offcanvas.body("..."),
						]
					),
				];
			},
		}),

		//-----------------------

		new e.title("Accessibility"),
		new e.text(
			"Since the offcanvas panel is conceptually a modal dialog, be sure to add {{aria-labelledby='...'}}—referencing the offcanvas title—to {{.offcanvas}}. Note that you don’t need to add {{role='dialog'}} since we already add it via JavaScript."
		),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, offcanvas now use local CSS variables on {{.offcanvas}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};
				--#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};
				--#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};
				--#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};
				--#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};
				--#{$prefix}offcanvas-color: #{$offcanvas-color};
				--#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};
				--#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};
				--#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};
				--#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};
				--#{$prefix}offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};
				--#{$prefix}offcanvas-title-line-height: #{$offcanvas-title-line-height};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$offcanvas-padding-y:               $modal-inner-padding;
				$offcanvas-padding-x:               $modal-inner-padding;
				$offcanvas-horizontal-width:        400px;
				$offcanvas-vertical-height:         30vh;
				$offcanvas-transition-duration:     .3s;
				$offcanvas-border-color:            $modal-content-border-color;
				$offcanvas-border-width:            $modal-content-border-width;
				$offcanvas-title-line-height:       $modal-title-line-height;
				$offcanvas-bg-color:                var(--#{$prefix}body-bg);
				$offcanvas-color:                   var(--#{$prefix}body-color);
				$offcanvas-box-shadow:              $modal-content-box-shadow-xs;
				$offcanvas-backdrop-bg:             $modal-backdrop-bg;
				$offcanvas-backdrop-opacity:        $modal-backdrop-opacity;
			`,
		}),

		//-----------------------

		new e.title("Usage"),
		new e.text("The offcanvas plugin utilizes a few classes and attributes to handle the heavy lifting:"),
		new e.ul({
			item: [
				"{{.offcanvas}} hides the content",
				"{{.offcanvas.show}} shows the content",
				"{{.offcanvas-start}} hides the offcanvas on the left",
				"{{.offcanvas-end}} hides the offcanvas on the right",
				"{{.offcanvas-top}} hides the offcanvas on the top",
				"{{.offcanvas-bottom}} hides the offcanvas on the bottom",
			],
		}),
		new e.text(
			"Add a dismiss button with the {{data-bs-dismiss='offcanvas'}} attribute, which triggers the JavaScript functionality. Be sure to use the {{<button>}} element with it for proper behavior across all devices."
		),

		//-----------------------

		new e.subtitle("Via data attributes"),
		new e.xsubtitle("Toggle"),
		new e.text(
			"Add {{data-bs-toggle='offcanvas'}} and a {{data-bs-target}} or {{href}} to the element to automatically assign control of one offcanvas element. The {{data-bs-target}} attribute accepts a CSS selector to apply the offcanvas to. Be sure to add the class {{offcanvas}} to the offcanvas element. If you’d like it to default open, add the additional class {{show}}."
		),
		new e.xsubtitle("Dismiss"),
		new e.text(
			"Dismissal can be achieved with the {{data-bs-dismiss}} attribute on a button {{b::within the offcanvas}} as demonstrated below:"
		),
		new e.codepreview({
			type: "html",
			code: `
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			`,
		}),
		new e.text(
			"or on a button {{outside the offcanvas}} using the additional {{data-bs-target}} as demonstrated below:"
		),
		new e.codepreview({
			type: "html",
			code: `
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#my-offcanvas" aria-label="Close"></button>
			`,
		}),
		new e.alert(
			{ color: "warning", callout: true },
			" While both ways to dismiss an offcanvas are supported, keep in mind that dismissing from outside an offcanvas does not match the {{https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/::ARIA Authoring Practices Guide dialog (modal) pattern}}. Do this at your own risk."
		),

		//-----------------------

		new e.subtitle("Via JavaScript"),
		new e.text("Enable manually with:"),
		new e.codepreview({
			type: "js",
			code: `
				const offcanvasElementList = document.querySelectorAll('.offcanvas')
				const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
			`,
		}),

		//-----------------------

		new e.subtitle("Options"),
		new e.text(
			`As options can be passed via data attributes or JavaScript, you can append an option name to {{data-bs-}}, as in {{data-bs-animation="{value}"}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data-bs-custom-class="beautifier"}} instead of {{data-bs-customClass="beautifier"}}.`
		),
		new e.text(
			`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data-bs-config='{"delay":0, "title":123}'}} and {{data-bs-title="456"}} attributes, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data-bs-config}}. In addition, existing data attributes are able to house JSON values like {{data-bs-delay='{"show":0,"hide":150}'}}.`
		),
		new e.table({
			item: [
				["Name", "Type", "Default", "Description"],
				[
					"{{backdrop}}",
					"boolean or the string {{static}}",
					"{{true}}",
					"Apply a backdrop on body while offcanvas is open. Alternatively, specify {{static}} for a backdrop which doesn’t close the offcanvas when clicked.",
				],
				["{{keyboard}}", "boolean", "{{true}}", "Closes the offcanvas when escape key is pressed."],
				["{{scroll}}", "boolean", "{{false}}", "Allow body scrolling while offcanvas is open."],
			],
		}),

		//-----------------------

		new e.subtitle("Methods"),
		new e.alert(
			{ color: "danger", callout: true },
			"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in our JavaScript docs}}."
		),
		new e.text("Activates your content as an offcanvas element. Accepts an optional options {{object}}."),
		new e.text("You can create an offcanvas instance with the constructor, for example:"),
		new e.codepreview({
			type: "js",
			code: `
				const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas')
			`,
		}),
		new e.table({
			item: [
				["Method", "Description"],
				[
					"{{getInstance}}",
					"{{i::Static}} method which allows you to get the offcanvas instance associated with a DOM element.",
				],
				[
					"{{getOrCreateInstance	}}",
					"{{i::Static}} method which allows you to get the offcanvas instance associated with a DOM element, or create a new one in case it wasn’t initialized.",
				],
				[
					"{{hide}}",
					"Hides an offcanvas element. {{b::Returns to the caller before the offcanvas element has actually been hidden}} (i.e. before the {{hidden.bs.offcanvas}} event occurs).",
				],
				[
					"{{show}}",
					"Shows an offcanvas element. {{b::Returns to the caller before the offcanvas element has actually been shown}} (i.e. before the {{shown.bs.offcanvas}} event occurs).",
				],
				[
					"{{toggle}}",
					"Toggles an offcanvas element to shown or hidden. {{b::Returns to the caller before the offcanvas element has actually been shown or hidden}} (i.e. before the {{shown.bs.offcanvas}} or {{hidden.bs.offcanvas}} event occurs).",
				],
			],
		}),

		//-----------------------

		new e.subtitle("Events"),
		new e.text("Bootstrap’s offcanvas class exposes a few events for hooking into offcanvas functionality."),
		new e.table({
			item: [
				["Event type", "Description"],
				[
					"{{hide.bs.offcanvas}}",
					"This event is fired immediately when the {{hide}} instance method has been called.",
				],
				[
					"{{hidden.bs.offcanvas}}",
					"This event is fired when an offcanvas has finished being hidden from the user (will wait for CSS transitions to complete).",
				],
				[
					"{{hidePrevented.bs.offcanvas}}",
					"This event is fired when an offcanvas is shown, its backdrop is {{static}} and a click outside of the offcanvas is performed. The event is also fired when the escape key is pressed and the {{keyboard}} option is set to {{false}}.",
				],
				["{{show.bs.offcanvas}}", "This event fires immediately when the {{show}} instance method is called."],
				[
					"{{shown.bs.offcanvas}}",
					"This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).",
				],
			],
		}),

		new e.codepreview({
			type: "js",
			code: `
				const myOffcanvas = document.getElementById('myOffcanvas')
				myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
				// do something...
				})
			`,
		}),
	],
};

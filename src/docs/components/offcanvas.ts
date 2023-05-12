import { h, b, core } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const offcanvas: IAttrContent = {
	title: "Offcanvas",
	description:
		"Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and Bootstrap JavaScript plugin.",
	item: [
		new e.title("How it works"),
		new e.text(
			"Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, top, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and {{data}} attributes are used to invoke Bootstrap JavaScript."
		),
		new e.ul({
			item: [
				"Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are separate plugins.",
				"Similarly, some source {{nav:docs/components/offcanvas#sass_variables::Sass variables}} for offcanvas’s styles and dimensions are inherited from the modal’s variables.",
				"When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.",
				"Similar to modals, only one offcanvas can be shown at a time.",
			],
		}),
		new e.text(
			"{{b::Heads up!}} Given how CSS handles animations, you cannot use {{margin}} or {{translate}} on an {{.offcanvas}} element. Instead, use the class as an independent wrapping element."
		),
		new e.alert(
			{ color: "info", callout: true },
			" The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}."
		),

		//-----------------------

		new e.title("Examples"),
		new e.subtitle("Offcanvas components"),
		new e.text(
			"Below is an offcanvas example that is shown by default (via {{debug}} on {{b.offcanvas.container}}). Offcanvas includes support for a header ({{b.offcanvas.header}}) with a close button ({{b.offcanvas.btnclose}}) and an optional body ({{b.offcanvas.body}}) component for some initial {{padding}}. Bootstrap suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action."
		),
		new e.code({
			previewAttr: { bgColor: "body-tertiary", padding: 0 },
			showCodepen: false,
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
			"Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the {{b.offcanvas.container}} component."
		),
		new e.ul({
			item: ["{{b.offcanvas.container}} hides content (default)", "{{hide:false}} to shows content"],
		}),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ href: "#offcanvasExample", controlfor: "offcanvasExample", marginEnd: 2 },
						"Link with href"
					),
					new b.offcanvas.toggle(
						{ target: "#offcanvasExample", controlfor: "offcanvasExample" },
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
			"Scrolling the {{<body>}} element is disabled when an offcanvas and its backdrop are visible. Use the {{scroll:true}} property to enable {{<body>}} scrolling."
		),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasScrolling", controlfor: "offcanvasScrolling" },
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
		new e.text(
			"You can also enable {{<body>}} scrolling with a visible backdrop by set {{scroll:true}} and {{backdrop:true}}."
		),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasWithBothOptions", controlfor: "offcanvasWithBothOptions" },
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
		new e.text("When {{backdrop}} is set to {{static}}, the offcanvas will not close when clicking outside of it."),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#staticBackdrop", controlfor: "staticBackdrop" },
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
			"Change the appearance of offcanvases to dark by setting {{theme:'dark'}} to {{b.offcanvas.container}}."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Heads up!}} Dark variants for components were deprecated in v5.3.0 with the introduction of color modes."
		),
		new e.code({
			previewAttr: { bgColor: "body-tertiary", padding: 0 },
			showCodepen: false,
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
			"Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above that breakpoint, the contents within will behave as usual. For example, {{show:'lg'}} hides content in an offcanvas below the {{lg}} breakpoint, but shows the content above the {{lg}} breakpoint."
		),
		new e.code({
			showViewport: true,
			output: () => {
				return [
					new b.offcanvas.toggle(
						{
							target: "#offcanvasResponsive",
							controlfor: "offcanvasResponsive",
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
							show: "lg",
							labelledby: "offcanvasResponsiveLabel",
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title({ id: "offcanvasResponsiveLabel" }, "Responsive offcanvas"),
								new b.offcanvas.btnclose({ target: "#offcanvasResponsive" }),
							]),
							new b.offcanvas.body(
								new h.p({ marginBottom: 0 }, "This is content within an {{show:lg}}.")
							),
						]
					),
				];
			},
		}),
		new e.text("Responsive offcanvas classes are available across for each breakpoint."),
		new e.ul({
			item: [
				"{{show:true}}",
				"{{show:'sm'}}",
				"{{show:'md'}}",
				"{{show:'lg'}}",
				"{{show:'xl'}}",
				"{{show:'xxl'}}",
			],
		}),

		//-----------------------

		new e.title("Placement"),
		new e.text(
			"There’s no default placement for offcanvas components, so you must add one of the modifier classes below."
		),
		new e.ul({
			item: [
				"{{placement:'start'}} places offcanvas on the left of the viewport (shown above)",
				"{{placement:'end'}} places offcanvas on the right of the viewport",
				"{{placement:'top'}} places offcanvas on the top of the viewport",
				"{{placement:'bottom'}} places offcanvas on the bottom of the viewport",
			],
		}),
		new e.text("Try the top, right, and bottom examples out below."),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasTop", controlfor: "offcanvasTop" },
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
						{ target: "#offcanvasEnd", controlfor: "offcanvasEnd" },
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
						{ target: "#offcanvasBottom", controlfor: "offcanvasBottom" },
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
			"Since the offcanvas panel is conceptually a modal dialog, be sure to add {{labelledby:'...'}}—referencing the offcanvas title—to {{b.offcanvas.title(id)}}. Note that you don’t need to add {{role:'dialog'}} since Bootstrap already add it via JavaScript."
		),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, offcanvas now use local CSS variables on {{.offcanvas}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			title: "scss/_offcanvas.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_offcanvas.scss",
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
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
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
				"{{show:false}} hides the content",
				"{{show:true}} shows the content",
				"{{placement:'start'}} hides the offcanvas on the left",
				"{{placement:'end'}} hides the offcanvas on the right",
				"{{placement:'top'}} hides the offcanvas on the top",
				"{{placement:'bottom'}} hides the offcanvas on the bottom",
			],
		}),
		new e.text(
			"Add a dismiss button with the {{dismiss:'offcanvas'}} property, which triggers the JavaScript functionality. Be sure to use the {{b.button}} component with it for proper behavior across all devices."
		),

		//-----------------------

		new e.subtitle("Via data attributes"),
		new e.xsubtitle("Toggle"),
		new e.text(
			"Add {{toggle:'offcanvas'}} and a {{target}} or {{href}} to the component to automatically assign control of one offcanvas component. The {{target}} property accepts a CSS selector to apply the offcanvas to. Be sure to add the class {{offcanvas}} to the offcanvas element. If you’d like it to default open, add the additional class {{show}}."
		),
		new e.xsubtitle("Dismiss"),
		new e.text(
			"Dismissal can be achieved with the {{dismiss}} property on a {{b.button}} {{b::within the offcanvas}} as demonstrated below:"
		),
		new e.codepreview({
			type: "js",
			code: `
				b.offcanvas.btnclose();
				b.button({dismiss:"offcanvas"});
			`,
		}),
		new e.text(
			"or on a button {{outside the offcanvas}} using the additional {{data-bs-target}} as demonstrated below:"
		),
		new e.codepreview({
			type: "js",
			code: `
				b.offcanvas.btnclose({target:"#myOffcanvas"});
				b.button({dismiss:"offcanvas",target:"#myOffcanvas"});
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
				const offcanvasList = [...offcanvasElementList].map(offcanvasEl => b.offcanvas.init(offcanvasEl))
			`,
		}),

		//-----------------------

		new e.subtitle("Options"),
		new e.text(
			`As options can be passed via data attributes or JavaScript, you can append an option name to {{data:{'bs-*':'{value}'\}\}}, as in {{data:{'bs-animation':'{value}'\}\}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data:{'bs-custom-class':'beautifier'\}\}} instead of {{data:{'bs-customClass':'beautifier'\}\}}.`
		),
		new e.text(
			`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data:{'bs-config':'{"delay":0, "title":123}'/}/}} and {{data:{'bs-title':'456'/}/}} property, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data:{'bs-config':''/}/}}. In addition, existing data attributes are able to house JSON values like {{data:{'bs-delay':'{"show":0,"hide":150}'/}/}}.`
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
			"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}."
		),
		new e.text("Activates your content as an offcanvas element. Accepts an optional options {{object}}."),
		new e.text("You can create an offcanvas instance with the constructor, for example:"),
		new e.codepreview({
			type: "js",
			code: `
				const bsOffcanvas = b.offcanvas.init('#myOffcanvas')
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
					"{{toggles}}",
					"Toggles an offcanvas element to shown or hidden. {{b::Returns to the caller before the offcanvas element has actually been shown or hidden}} (i.e. before the {{shown.bs.offcanvas}} or {{hidden.bs.offcanvas}} event occurs).",
				],
			],
		}),

		new e.code({
			showConsole: true,
			output: () => {
				const offcanvasContainer = new b.offcanvas.container(
					{
						id: "example-offcanvas",
						labelledby: "example-offcanvas-label",
					},
					[
						new b.offcanvas.header([
							new b.offcanvas.title({ id: "example-offcanvas-label" }, "Offcanvas"),
							new b.offcanvas.btnclose(),
						]),
						new b.offcanvas.body(
							"Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here."
						),
					]
				);

				const initButton = new b.button(
					{
						color: "success",
						on: {
							click: (event) => {
								const oc = b.offcanvas.init("#example-offcanvas", {
									keyboard: false,
									backdrop: false,
									scroll: true,
								});
								e.console(
									event.target as Element,
									"b.offcanvas.init",
									oc ? oc : "null",
									oc ? "success" : "danger"
								);
							},
						},
					},
					"init"
				);

				const getInstanceButton = new b.button(
					{
						color: "success",
						on: {
							click: (event) => {
								const oc = b.offcanvas.getInstance("#example-offcanvas");
								e.console(
									event.target as Element,
									"b.offcanvas.getInstance",
									oc ? oc : "null",
									oc ? "success" : "danger"
								);
							},
						},
					},
					"getInstance"
				);

				const getOrCreateInstanceButton = new b.button(
					{
						color: "success",
						on: {
							click: (event) => {
								const oc = b.offcanvas.getOrCreateInstance("#example-offcanvas");
								e.console(
									event.target as Element,
									"b.offcanvas.getOrCreateInstance",
									oc ? oc : "null",
									oc ? "success" : "danger"
								);
							},
						},
					},
					"getOrCreateInstance"
				);

				const showButton = new b.button(
					{
						on: {
							click: (event) => {
								b.offcanvas.show("#example-offcanvas", event.target as HTMLElement);
							},
						},
					},
					"show"
				);

				const hideButton = new b.button(
					{
						on: {
							click: () => {
								b.offcanvas.hide("#example-offcanvas");
							},
						},
					},
					"hide"
				);

				const toggleButton = new b.button(
					{
						on: {
							click: (event) => {
								b.offcanvas.toggles("#example-offcanvas", event.target as HTMLElement);
							},
						},
					},
					"toggle"
				);

				const disposeButton = new b.button(
					{
						color: "danger",
						on: {
							click: () => {
								b.offcanvas.dispose("#example-offcanvas");
							},
						},
					},
					"dispose"
				);

				const buttonGroup = new b.btngroup({ vertical: true, weight: "sm" }, [
					initButton,
					getInstanceButton,
					getOrCreateInstanceButton,
					showButton,
					hideButton,
					toggleButton,
					disposeButton,
				]);

				const previewContainer = new h.div(
					{
						width: 100,
						marginEnd: 3,
						bgColor: "body-tertiary",
						rounded: true,
					},
					offcanvasContainer
				);

				const controlContainer = new h.div(
					{
						marginStart: "auto",
					},
					buttonGroup
				);

				const mainContainer = new h.div({ display: "flex" }, [previewContainer, controlContainer]);

				return [mainContainer];
			},
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

		// new e.codepreview({
		// 	type: "js",
		// 	code: `
		// 		const myOffcanvas = document.getElementById('myOffcanvas')
		// 		myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
		// 		// do something...
		// 		})
		// 	`,
		// }),

		new e.code({
			showConsole: true,
			output: () => {
				interface EventWithTargetAndRelatedTarget extends Event {
					target: Element;
					relatedTarget: Element;
				}

				return [
					new b.offcanvas.toggle(
						{ target: "#offcanvasEventExample", controlfor: "offcanvasEventExample" },
						"Show offcanvas event"
					),
					new b.offcanvas.container(
						{
							id: "offcanvasEventExample",
							labelledby: "offcanvasEventExampleLabel",
							backdrop: "static",
							on: {
								"shown.bs.offcanvas": (event) => {
									const evnt = event as EventWithTargetAndRelatedTarget;
									e.console(
										evnt.target,
										"shown.bs.offcanvas",
										`Target: {{b::${core.elemInfo(
											evnt.target
										)}}}{{br}}RelatedTarget: {{b::${core.elemInfo(evnt.relatedTarget)}}}`,
										"success"
									);
								},

								"hidden.bs.offcanvas": (event) => {
									const target = event.target as Element;
									e.console(
										target,
										"hidden.bs.offcanvas",
										`Target: {{b::${core.elemInfo(target)}}}`,
										"danger"
									);
								},

								"hidePrevented.bs.offcanvas": (event) => {
									const target = event.target as Element;

									e.console(
										target,
										"hidePrevented.bs.offcanvas",
										`Target: {{b::${core.elemInfo(target)}}}`,
										"warning"
									);
								},
							},
						},
						[
							new b.offcanvas.header([
								new b.offcanvas.title({ id: "offcanvasEventExampleLabel" }, "Offcanvas"),
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
						]
					),
				];
			},
		}),
	],
};

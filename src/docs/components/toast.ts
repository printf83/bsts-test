import { h, b, core, I } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const toast: IContent = {
	title: "Toasts",
	description: "Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([new e.text("Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.")]),

			//----------------------

			new e.section([
				new e.title("Overview"),

				new e.text("Things to know when using the toast plugin:"),
				new e.ul({
					item: ["Toasts are opt-in for performance reasons, so {{b::you must initialize them yourself}}.", "Toasts will automatically hide if you do not specify {{autohide: false}}.", "{{bsts}} automaticly initialize toast on {{build}}."],
				}),
				new e.alert(
					{ color: "info", callout: true },
					"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}."
				),
			]),

			//----------------------

			new e.section([new e.title("Examples")]),

			//----------------------

			new e.section([
				new e.subtitle("Basic"),

				new e.text("To encourage extensible and predictable toasts, Bootstrap recommend a header and body. Toast headers use {{display:'flex'}}, allowing easy alignment of content thanks to Bootstrap margin and flexbox utilities."),
				new e.text("Toasts are as flexible as you need and have very little required markup. At a minimum, Bootstrap require a single element to contain your “toasted” content and strongly encourage a dismiss button."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.toast.item({ debug: true, live: "assertive", atomic: true }, [
							new b.toast.header([
								new h.div({
									bgColor: "primary",
									rounded: true,
									marginEnd: 2,
									style: { width: "20px", height: "20px" },
								}),
								new h.strong({ marginEnd: "auto" }, "Bootstrap"),
								new h.small("11 mins ago"),
								new b.toast.btnclose(),
							]),
							new b.toast.body("Hello, world! This is a toast message."),
						]);
					},
				}),
				new e.alert(
					{ color: "warning", callout: true },
					"Previously, Bootstrap scripts dynamically added the {{.hide}} class to completely hide a toast (with {{display:none}}, rather than just with {{opacity:0}}). This is now not necessary anymore. However, for backwards compatibility, Bootstrap script will continue to toggle the class (even though there is no practical need for it) until the next major version."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Live example"),
				new e.text("Click the button below to show a toast (positioned with Bootstrap utilities in the lower right corner) that has been hidden by default."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new b.button(
								{
									id: "liveToastBtn",
									on: {
										click: (_e) => {
											//trigger live toast demo
											const toastLiveExample = document.getElementById("liveToast");
											const toastBootstrap = b.toast.getOrCreateInstance(toastLiveExample as Element);
											toastBootstrap.show();
										},
									},
								},
								"Show live toast"
							),
							new b.toast.container(
								{ placement: "bottom-end" },
								new b.toast.item({ id: "liveToast", live: "assertive", atomic: true }, [
									new b.toast.header([
										new h.div({
											bgColor: "primary",
											rounded: true,
											marginEnd: 2,
											style: { width: "20px", height: "20px" },
										}),
										new h.strong({ marginEnd: "auto" }, "Bootstrap"),
										new h.small("11 mins ago"),
										new b.toast.btnclose(),
									]),
									new b.toast.body("Hello, world! This is a toast message."),
								])
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Toast show"),
				new e.text("You also can use Bootstrap {{b.toast.show}} function to show the toast. This toast will be regenerated every time you call it and get will be destroy automaticly on {{hidden.bs.toast}}."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.button(
							{
								on: {
									click: (_e) => {
										const tItem = new b.toast.item({ live: "assertive", atomic: true }, [
											new b.toast.header([
												new h.div({
													bgColor: "primary",
													rounded: true,
													marginEnd: 2,
													style: { width: "20px", height: "20px" },
												}),
												new h.strong({ marginEnd: "auto" }, "Bootstrap"),
												new b.toast.timer(),
												new b.toast.btnclose(),
											]),
											new b.toast.body("Hello, world! This is a toast message."),
										]);

										//show the above toast on the top-end
										b.toast.show(tItem, "top-end");
									},
								},
							},
							"Show live toast"
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Simple toast"),
				new e.text("You can use Bootstrap simple toast by calling {{b.toast.create}} function."),
				new e.table({
					item: [
						["Option", "Type", "Default", "Description"],
						["{{elem}}", "{{IElem}}", "*required", "Toast main element / message"],
						["{{title}}", "{{IElem}}", "{{undefined}}", "Set toast title. If set, btnclosewhite value is not effected the close button."],
						["{{atomic}}", "{{boolean}}", "{{true}}", "Set {{aria-atomic}} value"],
						["{{live}}", "{{assertive}} | {{polite}}", "{{assertive}}", "Set {{aria-live}} value"],
						["{{color}}", "{{primary}} | {{secondary}} | {{success}} | {{info}} | {{warning}} | {{danger}} | {{dark}} | {{light}} | {{undefined}}", "{{undefined}}", "Toast main element / message"],
						["{{btnclosewhite}}", "{{boolean}} | {{undefined}}", "{{undefined}}", "Manually set close button white. If not, automaticly set base on {{color}}"],
						["{{delay}}", "{{number}} | {{undefined}}", "{{5000}}", "Set toast timeout delay in milisecond"],
						["{{animation}}", "{{boolean}} | {{undefined}}", "{{true}}", "Set toast animation."],
					],
				}),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						const fnToast = (color: I.B.Toast.Create["color"], elem: core.IElem, icon?: string) => {
							let tElem;

							switch (color) {
								case "danger":
									tElem = new b.caption({
										icon: b.icon.bi(icon || "x-circle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
									break;
								case "dark":
									tElem = new b.caption({
										icon: b.icon.bi(icon || "info-circle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
									break;
								case "info":
									tElem = new b.caption({
										icon: b.icon.bi(icon || "info-circle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
									break;
								case "light":
									tElem = new b.caption({
										icon: b.icon.bi(icon || "info-circle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
									break;
								case "primary":
									tElem = new b.caption({
										icon: b.icon.bi(icon || "info-circle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
									break;
								case "secondary":
									tElem = new b.caption({
										icon: b.icon.bi(icon || "info-circle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
									break;
								case "success":
									tElem = new b.caption({
										icon: b.icon.bi(icon || "check-circle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
									break;
								case "warning":
									tElem = new b.caption({
										icon: b.icon.bi(icon || "exclamation-triangle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
									break;
								default:
									tElem = new b.caption({
										icon: b.icon.bi(icon || "info-circle-fill", {
											fontSize: 5,
										}),
										elem: elem,
									});
							}
							b.toast.show(
								b.toast.create({
									color: color,
									elem: tElem,

									title: document.title,
								})
							);
						};

						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
							return new b.button(
								{
									color: i as I.B.Button["color"],
									on: {
										click: (_e) => {
											fnToast(i as I.B.Toast.Create["color"], `This is {{b::${i} }}toast.`);
										},
									},
								},
								`Show ${i} toast`
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Translucent"),
				new e.text("Toasts are slightly translucent to blend in with what’s below them."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					previewAttr: { bgColor: "dark" },
					output: () => {
						return new b.toast.item({ debug: true, live: "assertive", atomic: true }, [
							new b.toast.header([
								new h.div({
									bgColor: "primary",
									rounded: true,
									marginEnd: 2,
									style: { width: "20px", height: "20px" },
								}),
								new h.strong({ marginEnd: "auto" }, "Bootstrap"),
								new h.small("11 mins ago"),
								new b.toast.btnclose(),
							]),
							new b.toast.body("Hello, world! This is a toast message."),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Stacking"),
				new e.text("You can stack toasts by wrapping them in a toast container, which will vertically add some spacing."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						const item = (msg: string, timer: string) => {
							return new b.toast.item({ debug: true, live: "assertive", atomic: true }, [
								new b.toast.header([
									new h.div({
										bgColor: "primary",
										rounded: true,
										marginEnd: 2,
										style: { width: "20px", height: "20px" },
									}),
									new h.strong({ marginEnd: "auto" }, "Bootstrap"),
									new h.small(timer),
									new b.toast.btnclose(),
								]),
								new b.toast.body(msg),
							]);
						};

						return new b.toast.container({ debug: true }, [item("See? just like this", "Just now"), item("Heads up, toasts will stack automatically", "2 second ago")]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Custom content"),
				new e.text(
					"Customize your toasts by removing sub-components, tweaking them with {{nav:docs/utilities/api::utilities}}, or by adding your own markup. Here Bootstrap created a simpler toast by removing the default {{b.toast.header}}, adding a custom hide icon from {{https://icons.getbootstrap.com/::Bootstrap Icons}}, and using some {{nav:docs/utilities/flex::flexbox utilities}} to adjust the layout."
				),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.toast.item({ debug: true, alignItem: "center", live: "assertive", atomic: true }, new h.div({ display: "flex" }, [new b.toast.body("Hello, world! This is a toast message."), new b.toast.btnclose({ marginEnd: 2, margin: "auto" })]));
					},
				}),
				new e.text("Alternatively, you can also add additional controls and components to toasts."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.toast.item({ debug: true, alignItem: "center", live: "assertive", atomic: true }, [
							new b.toast.body([
								"Hello, world! This is a toast message.",
								new h.div({ marginTop: 2, paddingTop: 2, border: "top", display: "flex", gap: 1 }, [new b.button({ weight: "sm" }, "Take action"), new b.button({ weight: "sm", color: "secondary", dismiss: "toast" }, "Close")]),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Color schemes"),
				new e.text(
					"Building on the above example, you can create different toast color schemes with Bootstrap {{nav:docs/utilities/colors::color}} and {{nav:docs/utilities/background::background}} utilities. Here Bootstrap added {{textBgColor:'primary'}} to the {{b.toast.item}}, and then added {{b.toast.btnclose({white:true})}} to Bootstrap close button. For a crisp edge, Bootstrap remove the default border with {{border:false}}."
				),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.toast.item(
							{
								debug: true,
								alignItem: "center",
								textBgColor: "primary",
								border: false,
								live: "assertive",
								atomic: true,
							},
							new h.div({ display: "flex" }, [new b.toast.body("Hello, world! This is a toast message."), new b.toast.btnclose({ white: true, marginEnd: 2, margin: "auto" })])
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Disable animation"),
				new e.text("{{bsts}} automaticly set {{animation:true}} on {{b.toast.item}}. Set {{animation:false}} to disable toast animation."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.button(
							{
								on: {
									click: () => {
										b.toast.show(
											b.toast.create({
												delay: 30000,
												animation: false,
												elem: "Toast without animation",
												title: document.title,
											})
										);
									},
								},
							},
							"Show live toast"
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Placement"),
				new e.text("Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the .toast."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						const container = (placement: I.B.Toast.Container["placement"]) => {
							return new b.toast.container(
								{
									class: "debug",
									padding: 3,
									id: "toastPlacement",
									placement: placement,
									position: undefined,
								},
								new b.toast.item({ debug: true }, [
									new b.toast.header([
										new h.div({
											bgColor: "primary",
											rounded: true,
											marginEnd: 2,
											style: { width: "20px", height: "20px" },
										}),
										new h.strong({ marginEnd: "auto" }, "Bootstrap"),
										new h.small("11 mins ago"),
										new b.toast.btnclose(),
									]),
									new b.toast.body("Hello, world! This is a toast message."),
								])
							);
						};

						return [
							new h.form([
								new h.label({ for: "selectToastPlacement" }, "Toast placement"),
								new b.select({
									marginTop: 2,
									id: "selectToastPlacement",
									item: [
										{ value: "", selected: true, elem: "Select a position..." },
										{ value: "top-start", elem: "Top start" },
										{ value: "top-end", elem: "Top end" },
										{ value: "top-center", elem: "Top center" },
										{ value: "middle-start", elem: "Middle start" },
										{ value: "middle-end", elem: "Middle end" },
										{ value: "middle-center", elem: "Middle center" },
										{ value: "bottom-start", elem: "Bottom start" },
										{ value: "bottom-end", elem: "Bottom end" },
										{ value: "bottom-center", elem: "Bottom center" },
									],
									on: {
										change: (e) => {
											const target = e.target as HTMLSelectElement;
											const value = target.value;
											core.replaceWith(document.getElementById("toastPlacement") as Element, container(value as I.B.Toast.Container["placement"]));
										},
									},
								}),
							]),
							new h.div(
								{
									position: "relative",
									rounded: 3,
									bgColor: "body-secondary",
									marginTop: 3,
									style: { minHeight: "240px", zIndex: "0" },
									aria: { live: "polite", atomic: "true" },
								},
								container("top-start")
							),
						];
					},
				}),
				new e.text("For systems that generate more notifications, consider using a wrapping element so they can easily stack."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						const item = (msg: string, timer: string) => {
							return new b.toast.item({ debug: true, live: "assertive", atomic: true }, [
								new b.toast.header([
									new h.div({
										bgColor: "primary",
										rounded: true,
										marginEnd: 2,
										style: { width: "20px", height: "20px" },
									}),
									new h.strong({ marginEnd: "auto" }, "Bootstrap"),
									new h.small(timer),
									new b.toast.btnclose(),
								]),
								new b.toast.body(msg),
							]);
						};

						return new h.div({ aria: { live: "polite", atomic: "true" }, position: "relative" }, new b.toast.container({ debug: true, placement: "top-end" }, [item("See? just like this", "Just now"), item("Heads up, toasts will stack automatically", "2 second ago")]));
					},
				}),
				new e.text("You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						const item = (msg: string, timer: string) => {
							return new b.toast.item({ debug: true, live: "assertive", atomic: true }, [
								new b.toast.header([
									new h.div({
										bgColor: "primary",
										rounded: true,
										marginEnd: 2,
										style: { width: "20px", height: "20px" },
									}),
									new h.strong({ marginEnd: "auto" }, "Bootstrap"),
									new h.small(timer),
									new b.toast.btnclose(),
								]),
								new b.toast.body(msg),
							]);
						};

						return new h.div(
							{
								aria: { live: "polite", atomic: "true" },
								display: "flex",
								justifyContent: "center",
								alignItem: "center",
								width: 100,
								style: { minHeight: "200px" },
							},
							item("Hello, world! This is a toast message.", "11 mins ago")
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Accessibility"),
				new e.text(
					"Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an {{https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions::aria-live region}}. Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user’s focus or otherwise interrupt the user. Additionally, include {{aria:{atomic:'true'/}/}} to ensure that the entire toast is always announced as a single (atomic) unit, rather than just announcing what was changed (which could lead to problems if you only update part of the toast’s content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the {{nav:docs/components/alert::alert component}} instead of toast."
				),
				new e.text("Note that the live region needs to be present in the markup {{i::before}} the toast is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies."),
				new e.text("You also need to adapt the {{role}} and {{aria:{live:'...'/}/}} level depending on the content. If it’s an important message like an error, use {{role:'alert'}} {{aria:{live:'assertive'/}/}}, otherwise use {{role:'status'}} {{aria:{live:'polite'/}/}} attributes."),
				new e.text("As the content you’re displaying changes, be sure to update the {{nav:docs/components/toast#options::delay timeout}} so that users have enough time to read the toast."),
				new e.codepreview({
					type: "js",
					code: `
						new h.div(
							{
								class:"toast",
								role:"alert",
								aria: { live: "polite", atomic: "true" },
								data: { "bs-delay": "10000" },
							},
							new h.div(
								{
									class:"toast",
									role:"alert",
									aria: { live: "assertive", atomic: "true" },
								},
								"..."
							)	
						);
					`,
				}),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new b.button(
								{
									on: {
										click: (_e) => {
											const tItem = new b.toast.item({ live: "assertive", atomic: true, delay: 10000 }, [
												new b.toast.header([
													new h.div({
														bgColor: "primary",
														rounded: true,
														marginEnd: 2,
														style: { width: "20px", height: "20px" },
													}),
													new h.strong({ marginEnd: "auto" }, "Bootstrap"),
													new b.toast.timer(),
													new b.toast.btnclose(),
												]),
												new b.toast.body("This toast auto close {{delay}} set to 10 second"),
											]);

											b.toast.show(tItem);
										},
									},
								},
								"Show delay timeout toast"
							),
						];
					},
				}),
				new e.text("When using {{autohide:false}}, you must add a close button to allow users to dismiss the toast."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.toast.item({ debug: true, live: "assertive", atomic: true, autohide: false }, [
							new b.toast.header([
								new h.div({
									bgColor: "primary",
									rounded: true,
									marginEnd: 2,
									style: { width: "20px", height: "20px" },
								}),
								new h.strong({ marginEnd: "auto" }, "Bootstrap"),
								new b.toast.timer(),
								new b.toast.btnclose(),
							]),
							new b.toast.body("Hello, world! This is a toast message."),
						]);
					},
				}),
				new e.text(
					"While technically it’s possible to add focusable/actionable controls (such as additional buttons or links) in your toast, you should avoid doing this for autohiding toasts. Even if you give the toast a long {{nav:docs/components/toast#options::delay timeout}}, keyboard and assistive technology users may find it difficult to reach the toast in time to take action (since toasts don’t receive focus when they are displayed). If you absolutely must have further controls, Bootstrap recommend using a toast with {{autohide:false}}."
				),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Variables"),
				new e.text("As part of Bootstrap’s evolving CSS variables approach, toasts now use local CSS variables on {{.toast}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),
				new e.codepreview({
					type: "css",
					title: "scss/_toast.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_toast.scss",
					code: `
						--#{$prefix}toast-zindex: #{$zindex-toast};
						--#{$prefix}toast-padding-x: #{$toast-padding-x};
						--#{$prefix}toast-padding-y: #{$toast-padding-y};
						--#{$prefix}toast-spacing: #{$toast-spacing};
						--#{$prefix}toast-max-width: #{$toast-max-width};
						@include rfs($toast-font-size, --#{$prefix}toast-font-size);
						--#{$prefix}toast-color: #{$toast-color};
						--#{$prefix}toast-bg: #{$toast-background-color};
						--#{$prefix}toast-border-width: #{$toast-border-width};
						--#{$prefix}toast-border-color: #{$toast-border-color};
						--#{$prefix}toast-border-radius: #{$toast-border-radius};
						--#{$prefix}toast-box-shadow: #{$toast-box-shadow};
						--#{$prefix}toast-header-color: #{$toast-header-color};
						--#{$prefix}toast-header-bg: #{$toast-header-background-color};
						--#{$prefix}toast-header-border-color: #{$toast-header-border-color};
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
						$toast-max-width:                   350px;
						$toast-padding-x:                   .75rem;
						$toast-padding-y:                   .5rem;
						$toast-font-size:                   .875rem;
						$toast-color:                       null;
						$toast-background-color:            rgba(var(--#{$prefix}body-bg-rgb), .85);
						$toast-border-width:                var(--#{$prefix}border-width);
						$toast-border-color:                var(--#{$prefix}border-color-translucent);
						$toast-border-radius:               var(--#{$prefix}border-radius);
						$toast-box-shadow:                  var(--#{$prefix}box-shadow);
						$toast-spacing:                     $container-padding-x;

						$toast-header-color:                var(--#{$prefix}secondary-color);
						$toast-header-background-color:     rgba(var(--#{$prefix}body-bg-rgb), .85);
						$toast-header-border-color:         $toast-border-color;
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Usage"),
				new e.text("Initialize toasts via JavaScript:"),

				new e.codepreview({
					type: "js",
					code: `
						b.toast.show(document.getElementById("my-toast"),"top-end");
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Triggers"),
				new e.text("Dismissal can be achieved with the {{dismiss:'toast'}} property on a button {{b::within the toast}} as demonstrated below:"),
				new e.codepreview({
					type: "js",
					code: `
						new b.button({ dismiss: "toast" }, "Close")
						new b.toast.btnclose();
					`,
				}),
				new e.text("or on a button {{b::outside the toast}} using the additional {{target}} as demonstrated below:"),
				new e.codepreview({
					type: "js",
					code: `
						new b.button({ dismiss: "toast", target: "#my-toast" }, "Close")
						new b.toast.btnclose({ target: "#my-toast" });
					`,
				}),
			]),

			//----------------------

			new e.section([
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
						["{{animation}}", "boolean", "{{true}}", "Apply a CSS fade transition to the toast."],
						["{{autohide}}", "boolean", "{{true}}", "Automatically hide the toast after the delay."],
						["{{delay}}", "number", "{{5000}}", "Delay in milliseconds before hiding the toast."],
					],
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Methods"),
				new e.alert(
					{ color: "danger", callout: true },
					"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}."
				),

				new e.table({
					item: [
						["Method", "Description"],
						["{{dispose}}", "Hides an element’s toast. Your toast will remain on the DOM but won’t show anymore."],
						[
							"{{getInstance}}",
							"{{i::Static}} method which allows you to get the toast instance associated with a DOM element. For example: {{const myToastEl = document.getElementById('myToastEl') const myToast = bootstrap.Toast.getInstance(myToastEl)}} Returns a Bootstrap toast instance.",
						],
						[
							"{{getOrCreateInstance}}",
							"{{i::Static}} method which allows you to get the toast instance associated with a DOM element, or create a new one, in case it wasn’t initialized. {{const myToastEl = document.getElementById('myToastEl') const myToast = bootstrap.Toast.getOrCreateInstance(myToastEl)}} Returns a Bootstrap toast instance.",
						],
						["{{hide}}", "Hides an element’s toast. {{b::Returns to the caller before the toast has actually been hidden}} (i.e. before the {{hidden.bs.toast}} event occurs). You have to manually call this method if you made {{autohide}} to {{false}}."],
						["{{isShown}}", "Returns a boolean according to toast’s visibility state."],
						["{{show}}", "Reveals an element’s toast. {{b::Returns to the caller before the toast has actually been shown}} (i.e. before the {{shown.bs.toast}} event occurs). You have to manually call this method, instead your toast won’t show."],
					],
				}),

				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
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
										new b.toast.item({ id: "example-toast", live: "assertive", atomic: true, autohide: false }, [
											new b.toast.header([
												new h.div({
													bgColor: "primary",
													rounded: true,
													marginEnd: 2,
													style: { width: "20px", height: "20px" },
												}),
												new h.strong({ marginEnd: "auto" }, "Bootstrap"),
												new h.small("Just now"),
												new b.toast.btnclose(),
											]),
											new b.toast.body("Example toast"),
										])
									)
								),
								new h.div(
									{ marginStart: "auto" },
									new b.btngroup({ vertical: true, weight: "sm" }, [
										new b.button(
											{
												on: {
													click: () => {
														b.toast.show("#example-toast");
													},
												},
											},
											"show"
										),
										new b.button(
											{
												on: {
													click: () => {
														b.toast.hide("#example-toast");
													},
												},
											},
											"hide"
										),
										new b.button(
											{
												on: {
													click: (event) => {
														const target = event.target as Element;
														const result = b.toast.isShown("#example-toast");
														e.console(target, "b.toast.isShown", result ? "true" : "false", "info");
													},
												},
											},
											"isShown"
										),

										new b.button(
											{
												color: "danger",
												on: {
													click: () => {
														b.toast.dispose("#example-toast");
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
			]),

			//----------------------

			new e.section([
				new e.subtitle("Events"),
				new e.table({
					item: [
						["Event", "Description"],
						["{{hide.bs.toast}}", "This event is fired immediately when the {{hide}} instance method has been called."],
						["{{hidden.bs.toast}}", "This event is fired when the toast has finished being hidden from the user."],
						["{{show.bs.toast}}", "This event fires immediately when the {{show}} instance method is called."],
						["{{shown.bs.toast}}", "This event is fired when the toast has been made visible to the user."],
					],
				}),

				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						return new b.button(
							{
								on: {
									click: (btnEvent) => {
										const tItem = new b.toast.item(
											{
												color: "primary",
												autohide: false,
												live: "assertive",
												atomic: true,
												on: {
													"shown.bs.toast": (event) => {
														const target = event.target as Element;
														e.console(btnEvent.target as Element, "shown.bs.toast", `Target: {{b::${core.elemInfo(target)}}}`, "success");
													},

													"hidden.bs.toast": (event) => {
														const target = event.target as Element;
														e.console(btnEvent.target as Element, "hidden.bs.toast", `Target: {{b::${core.elemInfo(target)}}}`, "danger");
													},
												},
											},
											[
												new b.toast.header([
													new h.div({
														bgColor: "primary",
														rounded: true,
														marginEnd: 2,
														style: { width: "20px", height: "20px" },
													}),
													new h.strong({ marginEnd: "auto" }, "Bootstrap"),
													new b.toast.timer(),
													new b.toast.btnclose(),
												]),
												new b.toast.body("Hello, world! This is a toast event example. This toast {{b::dose not}} close automaticly. Click on the close button to close this toast."),
											]
										);

										//show the above toast on the top-end
										b.toast.show(tItem, "top-end");
									},
								},
							},
							"Show toast event"
						);
					},
				}),
			]),
		];
	},
	db: [
		{
			source: `() => {
return new b.toast.item({
debug: true,
live: "assertive",
atomic: true
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new h.small("11 mins ago"),
new b.toast.btnclose(),
]),
new b.toast.body("Hello, world! This is a toast message."),
]);
}`,
		},
		{
			source: `() => {
return [
new b.button({
id: "liveToastBtn",
on: {
click: (_e) => {
//trigger live toast demo
const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = b.toast.getOrCreateInstance(toastLiveExample);
toastBootstrap.show();
},
},
}, "Show live toast"),
new b.toast.container({
placement: "bottom-end"
}, new b.toast.item({
id: "liveToast",
live: "assertive",
atomic: true
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new h.small("11 mins ago"),
new b.toast.btnclose(),
]),
new b.toast.body("Hello, world! This is a toast message."),
])),
];
}`,
		},
		{
			source: `() => {
return new b.button({
on: {
click: (_e) => {
const tItem = new b.toast.item({
live: "assertive",
atomic: true
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new b.toast.timer(),
new b.toast.btnclose(),
]),
new b.toast.body("Hello, world! This is a toast message."),
]);
//show the above toast on the top-end
b.toast.show(tItem, "top-end");
},
},
}, "Show live toast");
}`,
		},
		{
			source: `() => {
const fnToast = (color, elem, icon) => {
let tElem;
switch (color) {
case "danger":
tElem = new b.caption({
icon: b.icon.bi(icon || "x-circle-fill", {
fontSize: 5,
}),
elem: elem,
});
break;
case "dark":
tElem = new b.caption({
icon: b.icon.bi(icon || "info-circle-fill", {
fontSize: 5,
}),
elem: elem,
});
break;
case "info":
tElem = new b.caption({
icon: b.icon.bi(icon || "info-circle-fill", {
fontSize: 5,
}),
elem: elem,
});
break;
case "light":
tElem = new b.caption({
icon: b.icon.bi(icon || "info-circle-fill", {
fontSize: 5,
}),
elem: elem,
});
break;
case "primary":
tElem = new b.caption({
icon: b.icon.bi(icon || "info-circle-fill", {
fontSize: 5,
}),
elem: elem,
});
break;
case "secondary":
tElem = new b.caption({
icon: b.icon.bi(icon || "info-circle-fill", {
fontSize: 5,
}),
elem: elem,
});
break;
case "success":
tElem = new b.caption({
icon: b.icon.bi(icon || "check-circle-fill", {
fontSize: 5,
}),
elem: elem,
});
break;
case "warning":
tElem = new b.caption({
icon: b.icon.bi(icon || "exclamation-triangle-fill", {
fontSize: 5,
}),
elem: elem,
});
break;
default:
tElem = new b.caption({
icon: b.icon.bi(icon || "info-circle-fill", {
fontSize: 5,
}),
elem: elem,
});
}
b.toast.show(b.toast.create({
color: color,
elem: tElem,
title: document.title,
}));
};
return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
return new b.button({
color: i,
on: {
click: (_e) => {
fnToast(i, \`This is {{b::\${i} }}toast.\`);
},
},
}, \`Show \${i} toast\`);
});
}`,
		},
		{
			source: `() => {
return new b.toast.item({
debug: true,
live: "assertive",
atomic: true
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new h.small("11 mins ago"),
new b.toast.btnclose(),
]),
new b.toast.body("Hello, world! This is a toast message."),
]);
}`,
		},
		{
			source: `() => {
const item = (msg, timer) => {
return new b.toast.item({
debug: true,
live: "assertive",
atomic: true
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new h.small(timer),
new b.toast.btnclose(),
]),
new b.toast.body(msg),
]);
};
return new b.toast.container({
debug: true
}, [item("See? just like this", "Just now"), item("Heads up, toasts will stack automatically", "2 second ago")]);
}`,
		},
		{
			source: `() => {
return new b.toast.item({
debug: true,
alignItem: "center",
live: "assertive",
atomic: true
}, new h.div({
display: "flex"
}, [new b.toast.body("Hello, world! This is a toast message."), new b.toast.btnclose({
marginEnd: 2,
margin: "auto"
})]));
}`,
		},
		{
			source: `() => {
return new b.toast.item({
debug: true,
alignItem: "center",
live: "assertive",
atomic: true
}, [
new b.toast.body(["Hello, world! This is a toast message.",
new h.div({
marginTop: 2,
paddingTop: 2,
border: "top",
display: "flex",
gap: 1
}, [new b.button({
weight: "sm"
}, "Take action"), new b.button({
weight: "sm",
color: "secondary",
dismiss: "toast"
}, "Close")]),
]),
]);
}`,
		},
		{
			source: `() => {
return new b.toast.item({
debug: true,
alignItem: "center",
textBgColor: "primary",
border: false,
live: "assertive",
atomic: true,
}, new h.div({
display: "flex"
}, [new b.toast.body("Hello, world! This is a toast message."), new b.toast.btnclose({
white: true,
marginEnd: 2,
margin: "auto"
})]));
}`,
		},
		{
			source: `() => {
return new b.button({
on: {
click: () => {
b.toast.show(b.toast.create({
delay: 30000,
animation: false,
elem: "Toast without animation",
title: document.title,
}));
},
},
}, "Show live toast");
}`,
		},
		{
			source: `() => {
const container = (placement) => {
return new b.toast.container({
class: "debug",
padding: 3,
id: "toastPlacement",
placement: placement,
position: undefined,
}, new b.toast.item({
debug: true
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new h.small("11 mins ago"),
new b.toast.btnclose(),
]),
new b.toast.body("Hello, world! This is a toast message."),
]));
};
return [
new h.form([
new h.label({
for: "selectToastPlacement"
}, "Toast placement"),
new b.select({
marginTop: 2,
id: "selectToastPlacement",
item: [{
value: "",
selected: true,
elem: "Select a position..."
}, {
value: "top-start",
elem: "Top start"
}, {
value: "top-end",
elem: "Top end"
}, {
value: "top-center",
elem: "Top center"
}, {
value: "middle-start",
elem: "Middle start"
}, {
value: "middle-end",
elem: "Middle end"
}, {
value: "middle-center",
elem: "Middle center"
}, {
value: "bottom-start",
elem: "Bottom start"
}, {
value: "bottom-end",
elem: "Bottom end"
}, {
value: "bottom-center",
elem: "Bottom center"
}, ],
on: {
change: (e) => {
const target = e.target;
const value = target.value;
core.replaceWith(document.getElementById("toastPlacement"), container(value));
},
},
}),
]),
new h.div({
position: "relative",
rounded: 3,
bgColor: "body-secondary",
marginTop: 3,
style: {
minHeight: "240px",
zIndex: "0"
},
aria: {
live: "polite",
atomic: "true"
},
}, container("top-start")),
];
}`,
		},
		{
			source: `() => {
const item = (msg, timer) => {
return new b.toast.item({
debug: true,
live: "assertive",
atomic: true
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new h.small(timer),
new b.toast.btnclose(),
]),
new b.toast.body(msg),
]);
};
return new h.div({
aria: {
live: "polite",
atomic: "true"
},
position: "relative"
}, new b.toast.container({
debug: true,
placement: "top-end"
}, [item("See? just like this", "Just now"), item("Heads up, toasts will stack automatically", "2 second ago")]));
}`,
		},
		{
			source: `() => {
const item = (msg, timer) => {
return new b.toast.item({
debug: true,
live: "assertive",
atomic: true
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new h.small(timer),
new b.toast.btnclose(),
]),
new b.toast.body(msg),
]);
};
return new h.div({
aria: {
live: "polite",
atomic: "true"
},
display: "flex",
justifyContent: "center",
alignItem: "center",
width: 100,
style: {
minHeight: "200px"
},
}, item("Hello, world! This is a toast message.", "11 mins ago"));
}`,
		},
		{
			source: `() => {
return [
new b.button({
on: {
click: (_e) => {
const tItem = new b.toast.item({
live: "assertive",
atomic: true,
delay: 10000
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new b.toast.timer(),
new b.toast.btnclose(),
]),
new b.toast.body("This toast auto close {{delay}} set to 10 second"),
]);
b.toast.show(tItem);
},
},
}, "Show delay timeout toast"),
];
}`,
		},
		{
			source: `() => {
return new b.toast.item({
debug: true,
live: "assertive",
atomic: true,
autohide: false
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new b.toast.timer(),
new b.toast.btnclose(),
]),
new b.toast.body("Hello, world! This is a toast message."),
]);
}`,
		},
		{
			source: `() => {
return [
new h.div({
display: "flex",
overflow: "auto"
}, [
new h.div({
width: 100,
marginEnd: 3,
bgColor: "body-tertiary",
rounded: true,
position: "relative",
}, new h.div({
position: "absolute",
top: 50,
start: 50,
tMiddle: true
}, new b.toast.item({
id: "example-toast",
live: "assertive",
atomic: true,
autohide: false
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new h.small("Just now"),
new b.toast.btnclose(),
]),
new b.toast.body("Example toast"),
]))),
new h.div({
marginStart: "auto"
}, new b.btngroup({
vertical: true,
weight: "sm"
}, [
new b.button({
on: {
click: () => {
b.toast.show("#example-toast");
},
},
}, "show"),
new b.button({
on: {
click: () => {
b.toast.hide("#example-toast");
},
},
}, "hide"),
new b.button({
on: {
click: (event) => {
const target = event.target;
const result = b.toast.isShown("#example-toast");
e.console(target, "b.toast.isShown", result ? "true" : "false", "info");
},
},
}, "isShown"),
new b.button({
color: "danger",
on: {
click: () => {
b.toast.dispose("#example-toast");
},
},
}, "dispose"),
])),
]),
];
}`,
		},
		{
			source: `() => {
return new b.button({
on: {
click: (btnEvent) => {
const tItem = new b.toast.item({
color: "primary",
autohide: false,
live: "assertive",
atomic: true,
on: {
"shown.bs.toast": (event) => {
const target = event.target;
e.console(btnEvent.target, "shown.bs.toast", \`Target: {{b::\${core.elemInfo(target)}}}\`, "success");
},
"hidden.bs.toast": (event) => {
const target = event.target;
e.console(btnEvent.target, "hidden.bs.toast", \`Target: {{b::\${core.elemInfo(target)}}}\`, "danger");
},
},
}, [
new b.toast.header([
new h.div({
bgColor: "primary",
rounded: true,
marginEnd: 2,
style: {
width: "20px",
height: "20px"
},
}),
new h.strong({
marginEnd: "auto"
}, "Bootstrap"),
new b.toast.timer(),
new b.toast.btnclose(),
]),
new b.toast.body("Hello, world! This is a toast event example. This toast {{b::dose not}} close automaticly. Click on the close button to close this toast."),
]);
//show the above toast on the top-end
b.toast.show(tItem, "top-end");
},
},
}, "Show toast event");
}`,
		},
	],
};

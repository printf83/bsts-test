import { h, b, core } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_toast: IAttrContent = {
	title: "Toasts",
	description:
		"Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.",
	item: [
		new e.text(
			"Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position."
		),

		//-----------------------

		new e.title("Overview"),

		new e.text("Things to know when using the toast plugin:"),
		new e.ul({
			item: [
				"Toasts are opt-in for performance reasons, so {{b:you must initialize them yourself}}.",
				"Toasts will automatically hide if you do not specify {{autohide: false}}.",
			],
		}),
		new e.alert(
			{ color: "info", callout: true },
			"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of our accessibility documentation}}."
		),

		//-----------------------

		new e.title("Examples"),
		new e.text(
			"To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use {{display: flex}}, allowing easy alignment of content thanks to our margin and flexbox utilities."
		),
		new e.text(
			"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button."
		),
		new e.code({
			output: () => {
				return new b.toast.item({ debug: true, live: "assertive", atomic: true }, [
					new b.toast.header([
						new h.div({
							bgColor: "primary",
							rounded: true,
							marginEnd: 2,
							style: { width: "22px", height: "22px" },
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
			"Previously, our scripts dynamically added the {{.hide}} class to completely hide a toast (with {{display:none}}, rather than just with {{opacity:0}}). This is now not necessary anymore. However, for backwards compatibility, our script will continue to toggle the class (even though there is no practical need for it) until the next major version."
		),

		//-----------------------

		new e.subtitle("Live example"),
		new e.text(
			"Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default."
		),
		new e.code({
			output: () => {
				return [
					new b.button(
						{
							id: "liveToastBtn",
							on: {
								click: (_e) => {
									const toastLiveExample = document.getElementById("liveToast");
									const toastBootstrap = window.bootstrap.Toast.getOrCreateInstance(
										toastLiveExample as Element
									);
									toastBootstrap.show();
								},
							},
						},
						"Show live toast"
					),
					new b.toast.container(
						{ bottom: 0, end: 0, padding: 3, position: "fixed" },
						new b.toast.item({ id: "liveToast", live: "assertive", atomic: true }, [
							new b.toast.header([
								new h.div({
									bgColor: "primary",
									rounded: true,
									marginEnd: 2,
									style: { width: "22px", height: "22px" },
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
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Why not use }}{{cb::border-color}}{{b:: utilities?}} Each border spinner specifies a {{transparent}} border for at least one side, so {{.border-{color}}} utilities would override that."
		),

		//-----------------------

		new e.title("Growing spinner"),
		new e.text(
			"If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!"
		),
		new e.code({
			output: () => {
				return new b.spinner({ type: "grow" });
			},
		}),
		new e.text(
			"Once again, this spinner is built with {{currentColor}}, so you can easily change its appearance with {{https://getbootstrap.com/docs/5.3/utilities/colors/::text color utilities}}. Here it is in blue, along with the supported variants."
		),
		new e.code({
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.spinner({ type: "grow", color: i as b.IAttrBSSpinner["color"] });
				});
			},
		}),

		//-----------------------

		new e.title("Alignment"),
		new e.text("Use margin utilities like {{.m-5}} for easy spacing."),

		//-----------------------

		new e.subtitle("Margin"),
		new e.text(
			"Spinners in Bootstrap are built with {{rems}}, {{currentColor}}, and {{display: inline-flex}}. This means they can easily be resized, recolored, and quickly aligned."
		),
		new e.code({
			output: () => {
				return new b.spinner({ type: "border", margin: 5 });
			},
		}),
		new e.alert({ color: "info", callout: true }, [
			new h.h(5, "Conveying meaning to assistive technologies"),
			new h.p(
				"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
			),
		]),

		//-----------------------

		new e.subtitle("Placement"),
		new e.text(
			"Use {{https://getbootstrap.com/docs/5.3/utilities/flex/::flexbox utilities}}, {{https://getbootstrap.com/docs/5.3/utilities/float/::float utilities}}, or {{https://getbootstrap.com/docs/5.3/utilities/text/::text alignment}} utilities to place spinners exactly where you need them in any situation."
		),

		//-----------------------

		new e.xsubtitle("Flex"),
		new e.code({
			output: () => {
				return new b.spinner({ type: "border", display: "flex", justifyContent: "center" });
			},
		}),
		new e.code({
			output: () => {
				return new h.div({ display: "flex", alignItem: "center" }, [
					new h.strong("Loading..."),
					new b.spinner({ type: "border", marginStart: "auto" }, ""),
				]);
			},
		}),

		//-----------------------

		new e.xsubtitle("Floats"),
		new e.code({
			output: () => {
				return new h.div({ clearfix: true }, new b.spinner({ type: "border", float: "end" }));
			},
		}),

		//-----------------------

		new e.xsubtitle("Text align"),
		new e.code({
			output: () => {
				return new h.div({ textAlign: "center" }, new b.spinner({ type: "border" }));
			},
		}),

		//-----------------------

		new e.title("Size"),
		new e.text(
			"Add {{.spinner-border-sm}} and {{.spinner-grow-sm}} to make a smaller spinner that can quickly be used within other components."
		),
		new e.code({
			output: () => {
				return [new b.spinner({ type: "border", small: true }), new b.spinner({ type: "grow", small: true })];
			},
		}),
		new e.text("Or, use custom CSS or inline styles to change the dimensions as needed."),
		new e.code({
			output: () => {
				return [
					new b.spinner({ style: { width: "3rem", height: "3rem" }, type: "border" }),
					new b.spinner({ style: { width: "3rem", height: "3rem" }, type: "grow" }),
				];
			},
		}),

		//-----------------------

		new e.title("Buttons"),
		new e.text(
			"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed."
		),
		new e.code({
			output: () => {
				return [
					new b.button({ disabled: true }, [
						new b.spinner({ type: "border", small: true }, ""),
						new b.visuallyhidden("Loading..."),
					]),
					new b.button({ disabled: true }, [
						new b.spinner({ type: "border", small: true }, ""),
						" Loading...",
					]),
				];
			},
		}),
		new e.code({
			output: () => {
				return [
					new b.button({ disabled: true }, [
						new b.spinner({ type: "grow", small: true }, ""),
						new b.visuallyhidden("Loading..."),
					]),
					new b.button({ disabled: true }, [new b.spinner({ type: "grow", small: true }, ""), " Loading..."]),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Buttons with label"),
		new e.text(
			"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed."
		),
		new e.code({
			output: () => {
				return [
					new b.button(
						{ disabled: true },
						new b.label(
							{ iconPosition: "end", icon: new b.spinner({ type: "border", small: true }, "") },
							"Loading"
						)
					),
					new b.button(
						{ disabled: true },
						new b.label({ icon: new b.spinner({ type: "border", small: true }, "") }, "Loading")
					),
				];
			},
		}),
		new e.code({
			output: () => {
				return [
					new b.button(
						{ disabled: true },
						new b.label(
							{ iconPosition: "end", icon: new b.spinner({ type: "grow", small: true }, "") },
							"Loading"
						)
					),
					new b.button(
						{ disabled: true },
						new b.label({ icon: new b.spinner({ type: "grow", small: true }, "") }, "Loading")
					),
				];
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, spinners now use local CSS variables on {{.spinner-border}} and {{.spinner-grow}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),
		new e.text("Border spinner variables:"),
		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}spinner-width: #{$spinner-width};
				--#{$prefix}spinner-height: #{$spinner-height};
				--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
				--#{$prefix}spinner-border-width: #{$spinner-border-width};
				--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
				--#{$prefix}spinner-animation-name: spinner-border;
			`,
		}),
		new e.text("Growing spinner variables:"),
		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}spinner-width: #{$spinner-width};
				--#{$prefix}spinner-height: #{$spinner-height};
				--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
				--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
				--#{$prefix}spinner-animation-name: spinner-grow;
			`,
		}),
		new e.text(
			"For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the {{.spinner-border-sm}} class does the following:"
		),
		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}spinner-width: #{$spinner-width-sm};
				--#{$prefix}spinner-height: #{$spinner-height-sm};
				--#{$prefix}spinner-border-width: #{$spinner-border-width-sm};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$spinner-width:           2rem;
				$spinner-height:          $spinner-width;
				$spinner-vertical-align:  -.125em;
				$spinner-border-width:    .25em;
				$spinner-animation-speed: .75s;

				$spinner-width-sm:        1rem;
				$spinner-height-sm:       $spinner-width-sm;
				$spinner-border-width-sm: .2em;
			`,
		}),

		new e.subtitle("Keyframes"),
		new e.text("Used for creating the CSS animations for our spinners. Included in {{scss/_spinners.scss}}."),

		new e.codepreview({
			type: "css",
			code: `
				@keyframes spinner-border {
				to { transform: rotate(360deg) #{"/* rtl:ignore */"}; }
				}
			`,
		}),
		new e.codepreview({
			type: "css",
			code: `
				@keyframes spinner-grow {
					0% {
						transform: scale(0);
					}
					50% {
						opacity: 1;
						transform: none;
					}
				}
			`,
		}),
	],
};

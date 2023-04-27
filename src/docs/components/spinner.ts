import { h, b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const spinner: IAttrContent = {
	title: "Spinner",
	description:
		"Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.",
	item: [
		new e.title("About"),
		new e.text(
			"Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with Bootstrap amazing utility classes."
		),
		new e.text(
			"For accessibility purposes, each loader includes {{role:'status'}} and a nested {{h.span({visually:'hidden'},'Loading...')}} automaticly by {{b.spinner}}."
		),
		new e.alert(
			{ color: "info", callout: true },
			"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}."
		),

		//-----------------------

		new e.title("Border spinner"),
		new e.text("Use the border spinners for a lightweight loading indicator."),
		new e.code({
			output: () => {
				return new b.spinner({ type: "border" });
			},
		}),

		//-----------------------

		new e.subtitle("Colors"),
		new e.text(
			"The border spinner uses {{currentColor}} for its {{borderColor}}, meaning you can customize the color with text color utilities. You can use any of Bootstrap {{nav:docs/utilities/colors::text color utilities}} on the standard spinner."
		),
		new e.code({
			outputAttr: { gap: 1 },
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.spinner({ type: "border", color: i as b.IBsSpinner["color"] });
				});
			},
		}),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Why not use }}{{cb::borderColor}}{{b:: utilities?}} Each border spinner specifies a {{transparent}} border for at least one side, so {{borderColor}} utilities would override that."
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
			"Once again, this spinner is built with {{currentColor}}, so you can easily change its appearance with {{nav:docs/utilities/colors::text color utilities}}. Here it is in blue, along with the supported variants."
		),
		new e.code({
			outputAttr: { gap: 1 },
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.spinner({ type: "grow", color: i as b.IBsSpinner["color"] });
				});
			},
		}),

		//-----------------------

		new e.title("Alignment"),
		new e.text("Use margin utilities like {{margin:5}} for easy spacing."),

		//-----------------------

		new e.subtitle("Margin"),
		new e.text(
			"Spinners in Bootstrap are built with {{rems}}, {{currentColor}}, and {{display:'inline-flex'}}. This means they can easily be resized, recolored, and quickly aligned."
		),
		new e.code({
			output: () => {
				return new b.spinner({ type: "border", margin: 5 });
			},
		}),
		new e.alert({ color: "info", callout: true }, [
			new h.h(5, "Conveying meaning to assistive technologies"),
			new h.p(
				"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property."
			),
		]),

		//-----------------------

		new e.subtitle("Placement"),
		new e.text(
			"Use {{nav:docs/utilities/flex::flexbox utilities}}, {{nav:docs/utilities/float::float utilities}}, or {{nav:docs/utilities/text::text alignment}} utilities to place spinners exactly where you need them in any situation."
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
			"Add {{small:true}} to make a smaller spinner that can quickly be used within other components."
		),
		new e.code({
			outputAttr: { gap: 1 },
			output: () => {
				return [new b.spinner({ type: "border", small: true }), new b.spinner({ type: "grow", small: true })];
			},
		}),
		new e.text("Or, use custom CSS or inline styles to change the dimensions as needed."),
		new e.code({
			outputAttr: { gap: 1 },
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
			outputAttr: { gap: 1 },
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
			outputAttr: { gap: 1 },
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
			outputAttr: { gap: 1 },
			output: () => {
				return [
					new b.button(
						{ disabled: true },
						new b.caption(
							{ iconPosition: "end", icon: new b.spinner({ type: "border", small: true }, "") },
							"Loading"
						)
					),
					new b.button(
						{ disabled: true },
						new b.caption({ icon: new b.spinner({ type: "border", small: true }, "") }, "Loading")
					),
				];
			},
		}),
		new e.code({
			outputAttr: { gap: 1 },
			output: () => {
				return [
					new b.button(
						{ disabled: true },
						new b.caption(
							{ iconPosition: "end", icon: new b.spinner({ type: "grow", small: true }, "") },
							"Loading"
						)
					),
					new b.button(
						{ disabled: true },
						new b.caption({ icon: new b.spinner({ type: "grow", small: true }, "") }, "Loading")
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
			title: "scss/_spinners.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_spinners.scss",
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
			title: "scss/_spinners.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_spinners.scss",
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
			title: "scss/_spinners.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_spinners.scss",
			code: `
				--#{$prefix}spinner-width: #{$spinner-width-sm};
				--#{$prefix}spinner-height: #{$spinner-height-sm};
				--#{$prefix}spinner-border-width: #{$spinner-border-width-sm};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
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
		new e.text("Used for creating the CSS animations for Bootstrap spinners. Included in {{scss/_spinners.scss}}."),

		new e.codepreview({
			type: "css",
			title: "scss/_spinners.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_spinners.scss",
			code: `
				@keyframes spinner-border {
				to { transform: rotate(360deg) #{"/* rtl:ignore */"}; }
				}
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_spinners.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_spinners.scss",
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

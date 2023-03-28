import { core, h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_modal: IAttrContent = {
	title: "Modal",
	description:
		"Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.",
	item: [
		new e.title("How it works"),
		new e.text(
			"Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed."
		),
		new e.ul({
			item: [
				"Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the {{<body>}} so that modal content scrolls instead.",
				"Clicking on the modal “backdrop” will automatically close the modal.",
				"Bootstrap only supports one modal window at a time. Nested modals aren’t supported as we believe them to be poor user experiences.",
				"Modals use {{position: fixed}}, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a {{.modal}} within another fixed element.",
				"Once again, due to {{position: fixed}}, there are some caveats with using modals on mobile devices. {{https://getbootstrap.com/docs/5.3/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile::See our browser support docs}} for details.",
				"Due to how HTML5 defines its semantics, {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus::the autofocus HTML attribute}} has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:",
			],
		}),

		new e.codepreview({
			type: "js",
			code: `
			const myModal = document.getElementById('myModal')
			const myInput = document.getElementById('myInput')

			myModal.addEventListener('shown.bs.modal', () => {
				myInput.focus()
			})
			`,
		}),

		new e.alert(
			{ color: "info", callout: true },
			"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of our accessibility documentation}}."
		),

		new e.text("Keep reading for demos and usage guidelines."),

		//-----------------------

		new e.title("Examples"),
		new e.subtitle("Modal components"),
		new e.text(
			"Below is a static modal example (meaning its {{position}} and {{display}} have been overridden). Included are the modal header, modal body (required for {{padding}}), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action."
		),
		new e.code({
			previewTemplate: "none",
			previewAttr: { bgColor: "body-tertiary" },
			output: () => {
				return new b.modal.container({ debug: true }, [
					new b.modal.header({ close: true }, new b.modal.title("Modal title")),
					new b.modal.body(new h.p("Modal body text gose here")),
					new b.modal.footer([
						new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
						new b.button({ color: "primary" }, "Save changes"),
					]),
				]);
			},
		}),

		new e.alert(
			{ color: "info", callout: true },
			"In the above static example, we use {{<h5>}}, to avoid issues with the heading hierarchy in the documentation page. Structurally, however, a modal dialog represents its own separate document/context, so the {{.modal-title}} should ideally be an {{<h1>}}. If necessary, you can use the {{https://getbootstrap.com/docs/5.3/utilities/text/#font-size::font size utilities}} to control the heading’s appearance. All the following live examples use this approach."
		),

		//-----------------------

		new e.subtitle("Live demo"),
		new e.text(
			"Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page."
		),
		new e.code({
			previewTemplate: "none",
			previewAttr: { padding: 4 },
			output: () => {
				return [
					new b.button({ color: "primary", toggle: "modal", target: "#exampleModal" }, "Launch demo modal"),
					new b.modal.container({ id: "exampleModal", labelledby: "exampleModalLabel" }, [
						new b.modal.header(
							{ close: true },
							new b.modal.title({ id: "exampleModalLabel" }, "Modal title")
						),
						new b.modal.body(new h.p("Woo-hoo, you're reading this text in a modal!")),
						new b.modal.footer([
							new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
							new b.button({ color: "primary" }, "Save changes"),
						]),
					]),
				];
			},
		}),
		new e.text(
			"Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button."
		),
		new e.text(
			"Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text."
		),

		//-----------------------

		new e.subtitle("Positioned"),
		new e.text("Use utilities to modify a {{.badge}} and position it in the corner of a link or button."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.button({ position: "relative" }, [
					"Inbox ",
					new b.badge(
						{
							bgColor: "danger",
							position: "absolute",
							top: 0,
							start: 100,
							tMiddle: true,
							rounded: "pill",
						},
						["99+", new b.visuallyhidden("unread messages")]
					),
				]);
			},
		}),
		new e.text(
			"You can also replace the {{.badge}} class with a few more utilities without a count for a more generic indicator."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.button({ position: "relative" }, [
					"Profile ",
					new b.badge(
						{
							bgColor: "danger",
							position: "absolute",
							top: 0,
							start: 100,
							tMiddle: true,
							rounded: "circle",
							border: true,
							borderColor: "light",
							padding: 2,
						},
						new b.visuallyhidden("New alerts")
					),
				]);
			},
		}),

		//-----------------------

		new e.title("Background colors"),
		new e.text(
			"Set a {{background-color}} with contrasting foreground {{color}} with {{https://getbootstrap.com/docs/5.3/helpers/color-background/::our .text-bg-{color} helpers}}. Previously it was required to manually pair your choice of {{https://getbootstrap.com/docs/5.3/utilities/colors/::.text-{color}}} and {{https://getbootstrap.com/docs/5.3/utilities/background/::.bg-{color}}} utilities for styling, which you still may use if you prefer."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.badge(
						{ textBgColor: i as core.bootstrapType.textBgColor[number] },
						i.charAt(0).toUpperCase() + i.slice(1)
					);
				});
			},
		}),
		new e.alert({ color: "info", callout: true }, [
			new h.h(5, "Conveying meaning to assistive technologies"),
			new h.p(
				"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
			),
		]),

		//-----------------------

		new e.title("Pill badges"),
		new e.text(
			"Use the {{.rounded-pill}} utility class to make badges more rounded with a larger {{border-radius}}."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.badge(
						{ textBgColor: i as core.bootstrapType.textBgColor[number], rounded: "pill" },
						i.charAt(0).toUpperCase() + i.slice(1)
					);
				});
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on {{.badge}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
			    --#{$prefix}badge-padding-x: #{$badge-padding-x};
				--#{$prefix}badge-padding-y: #{$badge-padding-y};
				@include rfs($badge-font-size, --#{$prefix}badge-font-size);
				--#{$prefix}badge-font-weight: #{$badge-font-weight};
				--#{$prefix}badge-color: #{$badge-color};
				--#{$prefix}badge-border-radius: #{$badge-border-radius};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$badge-font-size:                   .75em;
				$badge-font-weight:                 $font-weight-bold;
				$badge-color:                       $white;
				$badge-padding-y:                   .35em;
				$badge-padding-x:                   .65em;
				$badge-border-radius:               $border-radius;
			`,
		}),
	],
};

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
			output: () => {
				return [
					// Button trigger modal
					new b.button({ color: "primary", toggle: "modal", target: "#exampleModal" }, "Launch demo modal"),

					// Modal
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

		//-----------------------

		new e.subtitle("Static backdrop"),
		new e.text(
			"When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it."
		),
		new e.code({
			output: () => {
				return [
					new b.button(
						{ color: "primary", toggle: "modal", target: "#staticBackdrop" },
						"Launch static backdrop modal"
					),

					new b.modal.container({ id: "staticBackdrop", labelledby: "staticBackdropLabel", static: true }, [
						new b.modal.header(
							{ close: true },
							new b.modal.title({ id: "staticBackdropLabel" }, "Modal title")
						),
						new b.modal.body(
							new h.p("I will not close if you click outside of me. Don't even try to press escape key.")
						),
						new b.modal.footer([
							new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
							new b.button({ color: "primary" }, "Save changes"),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Scrolling long content"),
		new e.text(
			"When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean."
		),
		new e.code({
			showScript: false,
			showHTML: false,
			output: () => {
				return [
					new b.button({ color: "primary", toggle: "modal", target: "#scrollingModal" }, "Launch demo modal"),

					new b.modal.container({ id: "scrollingModal", labelledby: "scrollingModalLabel" }, [
						new b.modal.header(
							{ close: true },
							new b.modal.title({ id: "scrollingModalLabel" }, "Modal title")
						),
						new b.modal.body(
							new h.p(
								{ style: { height: "100vh" } },
								"This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text the modal, we use an inline style set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed."
							)
						),
						new b.modal.footer([
							new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
							new b.button({ color: "primary" }, "Save changes"),
						]),
					]),
				];
			},
		}),

		new e.text(
			"You can also create a scrollable modal that allows scroll the modal body by adding {{.modal-dialog-scrollable}} to {{.modal-dialog}}."
		),

		new e.code({
			output: () => {
				return [
					new b.button(
						{ color: "primary", toggle: "modal", target: "#scrollableModal" },
						"Launch demo modal"
					),

					new b.modal.container(
						{ id: "scrollableModal", labelledby: "scrollableModalLabel", scrollable: true },
						[
							new b.modal.header(
								{ close: true },
								new b.modal.title({ id: "scrollableModalLabel" }, "Modal title")
							),
							new b.modal.body([
								new h.p(
									{ style: { height: "100vh" } },
									"This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal."
								),
								new h.p("This content should appear at the bottom after you scroll."),
							]),
							new b.modal.footer([
								new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
								new b.button({ color: "primary" }, "Save changes"),
							]),
						]
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Vertically centered"),
		new e.text("Add {{.modal-dialog-centered}} to {{.modal-dialog}} to vertically center the modal."),
		new e.code({
			showScript: false,
			showHTML: false,
			output: () => {
				let modalContent = (id: string, elem: core.IElem) => {
					return [
						new b.modal.header({ close: true }, new b.modal.title({ id: `${id}Label` }, "Modal title")),
						new b.modal.body(elem),
						new b.modal.footer([
							new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
							new b.button({ color: "primary" }, "Save changes"),
						]),
					];
				};

				return [
					// Button trigger modal
					new b.button(
						{ color: "primary", toggle: "modal", target: "#verticalCenterModal", textWrap: false },
						"Vertically centered modal"
					),
					new b.button(
						{
							color: "primary",
							toggle: "modal",
							target: "#verticalCenterScrollableModal",
							textWrap: false,
						},
						"Vertically centered scrollable modal"
					),

					// Vertically centered modal
					new b.modal.container(
						{ id: "verticalCenterModal", labelledby: "verticalCenterModalLabel", centered: true },
						modalContent("verticalCenterModal", new h.p("This is a vertically centered modal."))
					),

					// Vertically centered modal
					new b.modal.container(
						{
							id: "verticalCenterScrollableModal",
							labelledby: "verticalCenterScrollableModalLabel",
							centered: true,
						},
						modalContent("verticalCenterScrollableModal", [
							new h.p(
								{ style: { height: "50vh" } },
								"This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal."
							),
							new h.p("Just like that."),
						])
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Tooltips and popovers"),
		new e.text(
			"{{https://getbootstrap.com/docs/5.3/components/tooltips/::Tooltips}} and {{https://getbootstrap.com/docs/5.3/components/popovers/::popovers}} can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed."
		),
		new e.code({
			output: () => {
				return [
					// Button trigger modal
					new b.button(
						{ color: "primary", toggle: "modal", target: "#tooltipPopoverModal" },
						"Launch demo modal"
					),

					// Modal
					new b.modal.container({ id: "tooltipPopoverModal", labelledby: "tooltipPopoverModalLabel" }, [
						new b.modal.header(
							{ close: true },
							new b.modal.title({ id: "tooltipPopoverModalLabel" }, "Modal title")
						),
						new b.modal.body([
							new h.h(2, { fontSize: 5 }, "Popover in a modal"),
							new h.p([
								"This ",
								new b.popover(
									{
										title: "Popover title",
										content: "Popover body content is set in this attribute",
									},
									new b.button({ color: "secondary" }, "button")
								),
								" triggers a popover on click.",
							]),
							new h.h(2, { fontSize: 5 }, "Tooltips in a modal"),
							new h.p([
								new b.tooltip(
									{
										content: "Tooltip",
									},
									new h.a({ href: "#" }, "This link")
								),
								" and ",
								new b.tooltip(
									{
										content: "Tooltip",
									},
									new h.a({ href: "#" }, "that link")
								),
								" have tooltips on hover.",
							]),
						]),
						new b.modal.footer([
							new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
							new b.button({ color: "primary" }, "Save changes"),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Using the grid"),
		new e.text(
			"Utilize the Bootstrap grid system within a modal by nesting {{.container-fluid}} within the {{.modal-body}}. Then, use the normal grid system classes as you would anywhere else."
		),
		new e.code({
			output: () => {
				return [
					// Button trigger modal
					new b.button({ color: "primary", toggle: "modal", target: "#gridModal" }, "Launch demo modal"),

					// Modal
					new b.modal.container({ id: "gridModal", labelledby: "gridModalLabel" }, [
						new b.modal.header({ close: true }, new b.modal.title({ id: "gridModalLabel" }, "Modal title")),
						new b.modal.body(
							{ class: "bs-highlight-col" },
							new h.div({ container: "fluid" }, [
								new b.row([
									new b.col({ col: "md-4" }, ".col-md-4"),
									new b.col({ col: "md-4", marginStart: "auto" }, ".col-md-4 .ms-auto"),
								]),
								new b.row([
									new b.col({ col: "md-3", marginStart: "auto" }, ".col-md-3 .ms-auto"),
									new b.col({ col: "md-2", marginStart: "auto" }, ".col-md-2 .ms-auto"),
								]),
								new b.row([new b.col({ col: "md-6", marginStart: "auto" }, ".col-md-6 .ms-auto")]),
								new b.row(
									new b.col({ col: "sm-9" }, [
										"Level 1: .col-sm-9",
										new b.row([
											new b.col({ col: [8, "sm-6"] }, "Level 2: .col-8 .col-sm-6"),
											new b.col({ col: [4, "sm-6"] }, "Level 2: .col-4 .col-sm-6"),
										]),
									])
								),
							])
						),
						new b.modal.footer([
							new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
							new b.button({ color: "primary" }, "Save changes"),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Varying modal content"),
		new e.text(
			"Have a bunch of buttons that all trigger the same modal with slightly different contents? Use {{event.relatedTarget}} and {{https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes::HTML data-bs-* attributes}} to vary the contents of the modal depending on which button was clicked."
		),
		new e.text(
			"Below is a live demo followed by example HTML and JavaScript. For more information, {{https://getbootstrap.com/docs/5.3/components/modal/#events::read the modal events docs}} for details on {{relatedTarget}}."
		),

		new e.code({
			previewTemplate: "flex",
			output: () => {
				interface EventWithRelatedTarget extends Event {
					relatedTarget: HTMLElement;
				}

				return [
					// Button trigger modal
					...["@mdo", "@fat", "@printf83"].map((i) => {
						return new b.button(
							{
								color: "primary",
								toggle: "modal",
								target: "#varyingContentModal",
								data: { "bs-whatever": i },
							},
							`Open modal for ${i}`
						);
					}),

					// Modal
					new b.modal.container(
						{
							id: "varyingContentModal",
							labelledby: "varyingContentModalLabel",
							on: {
								"show.bs.modal": (e) => {
									//Get data from relatedTarget
									const btn = (e as EventWithRelatedTarget).relatedTarget;
									const recipient = btn.getAttribute("data-bs-whatever");
									const mdl = document.getElementById("varyingContentModal");
									const mdlTitle = mdl?.querySelector(".modal-title") as HTMLElement;
									const mdlName = mdl?.querySelector("#recipient-name") as HTMLInputElement;

									mdlTitle.textContent = `New message to ${recipient}`;
									mdlName.value = recipient!;
								},
							},
						},
						[
							new b.modal.header(
								{ close: true },
								new b.modal.title({ id: "varyingContentModalLabel" }, "Modal title")
							),
							new b.modal.body(
								new h.form([
									new h.div({ marginBottom: 3 }, [
										new b.label({ for: "recipient-name" }, "Recipient:"),
										new b.input({ id: "recipient-name", type: "text" }),
									]),
									new h.div({ marginBottom: 3 }, [
										new b.label({ for: "message-text" }, "Message:"),
										new b.textarea({ id: "message-text" }),
									]),
								])
							),
							new b.modal.footer([
								new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
								new b.button({ color: "primary" }, "Save changes"),
							]),
						]
					),
				];
			},
		}),

		new e.codepreview({
			type: "js",
			code: `
			const exampleModal = document.getElementById('exampleModal')
			exampleModal.addEventListener('show.bs.modal', event => {
			// Button that triggered the modal
			const button = event.relatedTarget
			// Extract info from data-bs-* attributes
			const recipient = button.getAttribute('data-bs-whatever')
			// If necessary, you could initiate an Ajax request here
			// and then do the updating in a callback.
			//
			// Update the modal's content.
			const modalTitle = exampleModal.querySelector('.modal-title')
			const modalBodyInput = exampleModal.querySelector('.modal-body input')

			modalTitle.textContent = "New message to " + recipient
			modalBodyInput.value = recipient
			})
			`,
		}),

		//-----------------------

		new e.subtitle("Positioned"),
		new e.text("Use utilities to modify a {{.badge}} and position it in the corner of a link or button."),
		new e.code({
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

import { core, h, b, I, s } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const modal: IContent = {
	title: "Modal",
	description:
		"Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("How it works"),
				new e.text(
					"Before getting started with Bootstrap’s modal component, be sure to read the following as Bootstrap menu options have recently changed."
				),
				new e.ul({
					item: [
						"Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the {{<body>}} so that modal content scrolls instead.",
						"Clicking on the modal “backdrop” will automatically close the modal.",
						"Bootstrap only supports one modal window at a time. Nested modals aren’t supported as Bootstrap believe them to be poor user experiences.",
						"Modals use {{position: fixed}}, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a {{.modal}} within another fixed element.",
						"Once again, due to {{position: fixed}}, there are some caveats with using modals on mobile devices. {{https://getbootstrap.com/docs/5.3/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile::See Bootstrap browser support docs}} for details.",
						"Due to how HTML5 defines its semantics, {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus::the autofocus HTML attribute}} has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:",
					],
				}),

				new e.code({
					db: getContentCode(db),
					output: () => {
						const myModal = new b.modal.container(
							{
								id: "myModal",
								labelledby: "myModalLabel",
								on: {
									"shown.bs.modal": () => {
										const myInput = document.getElementById("myModalInput");
										if (myInput) {
											//focus to input when modal is shown
											myInput.focus();
										}
									},
								},
							},
							[
								new b.modal.header(
									{ close: true },
									new b.modal.title({ id: "myModalLabel" }, "Modal title")
								),
								new b.modal.body(new b.input({ id: "myModalInput" })),
								new b.modal.footer([
									new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
									new b.button({ color: "primary" }, "Save changes"),
								]),
							]
						);

						const myModalToggle = new b.button(
							{ color: "primary", toggle: "modal", target: "#myModal" },
							"Launch demo modal"
						);

						return [myModalToggle, myModal];
					},
				}),

				new e.alert(
					{ color: "info", callout: true },
					"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}."
				),

				new e.text("Keep reading for demos and usage guidelines."),
			]),

			//----------------------

			new e.section([new e.title("Examples")]),

			//----------------------

			new e.section([
				new e.subtitle("Modal components"),
				new e.text(
					"Below is a static modal ({{b.modal.container}}) example (meaning its {{position}} and {{display}} have been overridden using {{debug}} property). Included are the {{b.modal.header}}, {{b.modal.body}} (required for {{padding}}), and {{b.modal.footer}} (optional). Bootstrap ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action."
				),
				new e.code({
					db: getContentCode(db),
					previewAttr: { bgColor: "body-tertiary" },
					showCodepen: false,
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
					"In the above static example, Bootstrap use {{<h5>}}, to avoid issues with the heading hierarchy in the documentation page. Structurally, however, a modal dialog represents its own separate document/context, so the {{.modal-title}} should ideally be an {{<h1>}}. If necessary, you can use the {{nav:docs/utilities/text#font_size::font size utilities}} to control the heading’s appearance. All the following live examples use this approach.{{hr}}{{bsts}} using {{h.h(1)}} because we don't have that issue."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Live demo"),
				new e.text(
					"Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							// Button trigger modal
							new b.button(
								{ color: "primary", toggle: "modal", target: "#exampleModal" },
								"Launch demo modal"
							),

							// Modal
							new b.modal.container(
								{ id: "exampleModal", labelledby: "exampleModalLabel" },
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title(
											{ id: "exampleModalLabel" },
											"Modal title"
										)
									),
									new b.modal.body(
										new h.p("Woo-hoo, you're reading this text in a modal!")
									),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Modal show"),
				new e.text(
					"You also can use {{bsts}} {{b.modal.show}} function to show the modal. This modal will be regenerated every time you call it and get destroy automaticly on {{hidden.bs.modal}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							// Button trigger modal
							new b.button(
								{
									color: "primary",
									on: {
										click: (_e) => {
											//manually generate modal using bsts component
											const mdl = new b.modal.container(
												{ labelledby: "exampleShowModalLabel" },
												[
													new b.modal.header(
														{ close: true },
														new b.modal.title(
															{ id: "exampleShowModalLabel" },
															"Modal title"
														)
													),
													new b.modal.body(
														new h.p(
															"Woo-hoo, you're reading this text in a modal!"
														)
													),
													new b.modal.footer([
														new b.button(
															{
																dismiss: "modal",
																color: "secondary",
															},
															"Close"
														),
														new b.button(
															{ color: "primary" },
															"Save changes"
														),
													]),
												]
											);

											//show the manually generated modal
											b.modal.show(mdl);
										},
									},
								},
								"Launch demo modal"
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Simple modal"),
				new e.text(
					"You can use Bootstrap simple modal by calling function {{b.modal.create}}."
				),

				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							new b.button(
								{
									id: "btntestcheckbox",
									focusRing: true,
									on: {
										click: () => {
											//simple modal
											const mdl = b.modal.create({
												title: document.title,
												elem: b.form.check({
													id: "testcheckbox",
													label: "Please tick this checkbox before click {{k::Okay}}",
												}),
												btn: ["ok", "cancel"], //easy button setup
												btnFn: [
													(event) => {
														//event handler for first button
														const target = event.target as Element;
														const container = target.closest(
															".modal"
														) as Element;
														const ischecked = (
															container?.querySelectorAll(
																"#testcheckbox"
															)[0] as HTMLInputElement
														)?.checked;

														//hide modal base on rules
														if (ischecked) {
															b.toast.show(
																b.toast.create({
																	title: "Simple modal example",
																	color: "success",
																	elem: "Thank you for tick the checkbox.",
																})
															);

															//hide the modal because the checkbox is ticked
															b.modal.hide(container);
														} else {
															b.toast.show(
																b.toast.create({
																	title: "Simple modal example",
																	color: "danger",
																	elem: "Please tick the checkbox before press okay.",
																})
															);

															//dont hide the modal until user tick the check box
															//b.modal.hide(container);
														}
													},
												],
												on: {
													"shown.bs.modal": (_e) => {
														//focus to checkbox when modal show
														document
															.getElementById("testcheckbox")
															?.focus();
													},
													"hidden.bs.modal": (_e) => {
														//focus to button when modal hide
														document
															.getElementById("btntestcheckbox")
															?.focus();
													},
												},
											});

											//show the simple modal using b.modal.show
											b.modal.show(mdl);
										},
									},
								},
								"Launch demo modal"
							),
							new b.button(
								{
									on: {
										click: () => {
											//simple modal

											const mdl = b.modal.create({
												title: document.title,
												elem: new b.msg(
													{
														id: "info-circle-fill",
														textColor: "primary",
													},
													"Hello world. Open {{nav:docs/forms/select#disabled::Forms select}} document from msgbox then show {{#disabled}} section"
												),
												//easy button wihtout btnFn will act as close button
												btn: ["ok"],
											});

											//show the simple modal using b.modal.show
											b.modal.show(mdl);
										},
									},
								},
								"Msgbox box"
							),
							new b.button(
								{
									on: {
										click: () => {
											//simple modal
											const mdl = b.modal.create({
												title: document.title,
												backdrop: "static",
												elem: new b.msg(
													{
														id: "question-circle-fill",
														textColor: "success",
													},
													"Do you like javascript?"
												),
												btn: ["yes", "no", "cancel"], //easy button setup
												btnFn: [
													(event) => {
														//event handler for first button
														b.toast.show(
															b.toast.create({
																title: "Simple modal example",
																color: "success",
																elem: "Me too.",
															})
														);

														//manually hidden the modal when you create handler for the button
														b.modal.hide(event.target as Element);
													},
													(event) => {
														//event handler for second button
														b.toast.show(
															b.toast.create({
																title: "Simple modal example",
																color: "danger",
																elem: "Its so sad! :'(",
															})
														);

														//manually hidden the modal when you create handler for the button
														b.modal.hide(event.target as Element);
													},
												],
											});

											//show the simple modal using b.modal.show
											b.modal.show(mdl);
										},
									},
								},
								"Confirm box"
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Static backdrop"),
				new e.text(
					"When backdrop is set to static by setting {{backdrop:'static'}} on {{b.modal.container}}, the modal will not close when clicking outside of it. Click the button below to try it."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new b.button(
								{ color: "primary", toggle: "modal", target: "#staticBackdrop" },
								"Launch static backdrop modal"
							),

							new b.modal.container(
								{
									id: "staticBackdrop",
									labelledby: "staticBackdropLabel",
									backdrop: "static", //set static backdrop
								},
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title(
											{ id: "staticBackdropLabel" },
											"Modal title"
										)
									),
									new b.modal.body(
										new h.p(
											"I will not close if you click outside of me. Don't even try to press escape key."
										)
									),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Scrolling long content"),
				new e.text(
					"When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what Bootstrap mean."
				),
				new e.code({
					db: getContentCode(db),
					showScript: false,
					showHTML: false,
					output: () => {
						return [
							new b.button(
								{ color: "primary", toggle: "modal", target: "#scrollingModal" },
								"Launch demo modal"
							),

							new b.modal.container(
								{ id: "scrollingModal", labelledby: "scrollingModalLabel" },
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title(
											{ id: "scrollingModalLabel" },
											"Modal title"
										)
									),
									new b.modal.body(
										new h.p(
											{ style: { height: "100vh" } },
											"This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text the modal, Bootstrap use an inline style set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed."
										)
									),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),

				new e.text(
					"You can also create a scrollable modal that allows scroll the modal body by set {{scrollable:true}} to {{b.modal.container}}."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new b.button(
								{ color: "primary", toggle: "modal", target: "#scrollableModal" },
								"Launch demo modal"
							),

							new b.modal.container(
								{
									id: "scrollableModal",
									labelledby: "scrollableModalLabel",
									scrollable: true, //set scrollable
								},
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title(
											{ id: "scrollableModalLabel" },
											"Modal title"
										)
									),
									new b.modal.body([
										new h.p(
											{ style: { height: "100vh" } },
											"This is some placeholder content to show the scrolling behavior for modals. Bootstrap use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal."
										),
										new h.p(
											"This content should appear at the bottom after you scroll."
										),
									]),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Vertically centered"),
				new e.text(
					"Set {{centered:true}} to {{b.modal.container}} to vertically center the modal."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						let modalContent = (id: string, elem: core.IElem) => {
							return [
								new b.modal.header(
									{ close: true },
									new b.modal.title({ id: `${id}Label` }, "Modal title")
								),
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
								{
									color: "primary",
									toggle: "modal",
									target: "#verticalCenterModal",
									textWrap: false,
								},
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
								{
									id: "verticalCenterModal",
									labelledby: "verticalCenterModalLabel",
									view: "center", //set centered
								},
								modalContent(
									"verticalCenterModal",
									new h.p("This is a vertically centered modal.")
								)
							),

							// Vertically centered modal
							new b.modal.container(
								{
									id: "verticalCenterScrollableModal",
									labelledby: "verticalCenterScrollableModalLabel",
									view: "center",
								},
								modalContent("verticalCenterScrollableModal", [
									new h.p(
										{ style: { height: "50vh" } },
										"This is some placeholder content to show a vertically centered modal. Bootstrap've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. Bootstrap also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal."
									),
									new h.p("Just like that."),
								])
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Tooltips and popovers"),
				new e.text(
					"{{nav:docs/components/tooltip::Tooltips}} and {{nav:docs/components/popover::popovers}} can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						const modalElem = [
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
							new h.hr(),
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
						];

						return [
							// Button trigger modal
							new b.button(
								{
									color: "primary",
									toggle: "modal",
									target: "#tooltipPopoverModal",
								},
								"Launch demo modal"
							),

							// using b.modal.create
							new b.button(
								{
									color: "primary",
									on: {
										click: () => {
											b.modal.show(
												b.modal.create({
													title: "Modal title",
													elem: modalElem,
													btn: ["savechanges", "close"],
												})
											);
										},
									},
								},
								"b.modal.create"
							),

							// Modal
							new b.modal.container(
								{
									id: "tooltipPopoverModal",
									labelledby: "tooltipPopoverModalLabel",
								},
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title(
											{ id: "tooltipPopoverModalLabel" },
											"Modal title"
										)
									),
									new b.modal.body(modalElem),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),
				new e.text(
					"Test {{b.modal.show}} function for {{auto init}} popover and tooltips."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							// Button trigger modal
							new b.button(
								{
									color: "primary",
									toggle: "modal",
									on: {
										click: () => {
											const mdl = new b.modal.container(
												{ labelledby: "tooltipPopoverLiveModalLabel" },
												[
													new b.modal.header(
														{ close: true },
														new b.modal.title(
															{ id: "tooltipPopoverLiveModalLabel" },
															"Modal title"
														)
													),
													new b.modal.body([
														new h.h(
															2,
															{ fontSize: 5 },
															"Popover in a modal"
														),
														new h.p([
															"This ",
															new b.popover(
																{
																	title: "Popover title",
																	content:
																		"Popover body content is set in this attribute",
																},
																new b.button(
																	{ color: "secondary" },
																	"button"
																)
															),
															" triggers a popover on click.",
														]),
														new h.hr(),
														new h.h(
															2,
															{ fontSize: 5 },
															"Tooltips in a modal"
														),
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
														new b.button(
															{
																dismiss: "modal",
																color: "secondary",
															},
															"Close"
														),
														new b.button(
															{ color: "primary" },
															"Save changes"
														),
													]),
												]
											);

											b.modal.show(mdl);
										},
									},
								},
								"Launch demo modal"
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Using the grid"),
				new e.text(
					"Utilize the Bootstrap grid system within a modal by nesting {{container:'fluid'}} within the {{b.modal.body}}. Then, use the normal grid system as you would anywhere else."
				),
				new e.code({
					db: getContentCode(db),
					css: `
						.bs-highlight-col div[class^="col"]{
							padding-top:0.75rem;
							padding-bottom: 0.75rem;
							background-color: rgba(var(--bs-primary-rgb), 0.15);
							border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
						}

						.bs-highlight-col div.row{
							margin-bottom: 0.75rem;
						}
					`,
					output: () => {
						return [
							// Button trigger modal
							new b.button(
								{ color: "primary", toggle: "modal", target: "#gridModal" },
								"Launch demo modal"
							),

							// Modal
							new b.modal.container(
								{ id: "gridModal", labelledby: "gridModalLabel" },
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title({ id: "gridModalLabel" }, "Modal title")
									),
									new b.modal.body(
										{ class: "bs-highlight-col" },
										new h.div({ container: "fluid" }, [
											new b.row([
												new b.col({ col: "md-4" }, ".col-md-4"),
												new b.col(
													{ col: "md-4", marginStart: "auto" },
													".col-md-4 .ms-auto"
												),
											]),
											new b.row([
												new b.col(
													{ col: "md-3", marginStart: "auto" },
													".col-md-3 .ms-auto"
												),
												new b.col(
													{ col: "md-2", marginStart: "auto" },
													".col-md-2 .ms-auto"
												),
											]),
											new b.row([
												new b.col(
													{ col: "md-6", marginStart: "auto" },
													".col-md-6 .ms-auto"
												),
											]),
											new b.row(
												new b.col({ col: "sm-9" }, [
													"Level 1: .col-sm-9",
													new b.row([
														new b.col(
															{ col: [8, "sm-6"] },
															"Level 2: .col-8 .col-sm-6"
														),
														new b.col(
															{ col: [4, "sm-6"] },
															"Level 2: .col-4 .col-sm-6"
														),
													]),
												])
											),
										])
									),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),
				new e.text("Or using {{s}} or {{S}} library :"),
				new e.alert(
					{ color: "warning", callout: true },
					"{{Warning!}} When you using {{s}} or {{S}} library to create html tag, it may broken when future update of Bootstrap library without any warning."
				),
				new e.code({
					db: getContentCode(db),
					css: `
						.bs-highlight-col div[class^="col"]{
							padding-top:0.75rem;
							padding-bottom: 0.75rem;
							background-color: rgba(var(--bs-primary-rgb), 0.15);
							border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
						}

						.bs-highlight-col div.row{
							margin-bottom: 0.75rem;
						}
					`,
					output: () => {
						return [
							// Button trigger modal
							new b.button(
								{ color: "primary", toggle: "modal", target: "#gridModal2" },
								"Launch demo modal"
							),

							// Modal
							new b.modal.container(
								{ id: "gridModal2", labelledby: "gridModalLabel2" },
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title({ id: "gridModalLabel2" }, "Modal title")
									),
									new b.modal.body(
										{ class: "bs-highlight-col" },

										//using s bsts library
										new s(
											'<div class="container-fluid"><div class="row"><div class="col-md-4">.col-md-4</div><div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div></div><div class="row"><div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div><div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div></div><div class="row"><div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div></div><div class="row"><div class="col-sm-9">Level 1: .col-sm-9<div class="row"><div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div><div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div></div></div></div></div>'
										)
									),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Varying modal content"),
				new e.text(
					"Have a bunch of buttons that all trigger the same modal with slightly different contents? Use {{event.relatedTarget}} and {{https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes::HTML data-bs-* attributes}} by setting {{data:{'bs-*':'value'} }} to vary the contents of the modal depending on which button was clicked."
				),
				new e.text(
					"Below is a live demo followed by example HTML and JavaScript. For more information, {{nav:docs/components/modal#events::read the modal events docs}} for details on {{relatedTarget}}."
				),

				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						interface EventWithRelatedTarget extends Event {
							relatedTarget: Element;
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
											const mdl =
												document.getElementById("varyingContentModal");
											const mdlTitle = mdl?.querySelector(
												".modal-title"
											) as Element;
											const mdlName = mdl?.querySelector(
												"#recipient-name"
											) as HTMLInputElement;

											mdlTitle.textContent = `New message to ${recipient}`;
											mdlName.value = recipient!;
										},
									},
								},
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title(
											{ id: "varyingContentModalLabel" },
											"Modal title"
										)
									),
									new b.modal.body(
										new h.form([
											new h.div({ marginBottom: 3 }, [
												new b.label(
													{ for: "recipient-name" },
													"Recipient:"
												),
												new b.input({ id: "recipient-name", type: "text" }),
											]),
											new h.div({ marginBottom: 3 }, [
												new b.label({ for: "message-text" }, "Message:"),
												new b.textarea({ id: "message-text" }),
											]),
										])
									),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Toggle between modals"),
				new e.text(
					"Toggle between multiple modals with some clever placement of the {{target}} and {{toggle}} property. For example, you could toggle a password reset modal from within an already open sign in modal. {{b::Please note multiple modals cannot be open at the same time}}—this method simply toggles between two separate modals."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const mdl = (
							id: string,
							title: string,
							content: string,
							target: string,
							targetName: string
						) => {
							return new b.modal.container(
								{
									id: id,
									labelledby: `${id}Label`,
									view: "center",
								},
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title({ id: `${id}Label` }, title)
									),
									new b.modal.body(new h.p(content)),
									new b.modal.footer([
										new b.button(
											{ toggle: "modal", color: "primary", target: target },
											`Open ${targetName}`
										),
									]),
								]
							);
						};

						return [
							new b.button(
								{
									color: "primary",
									toggle: "modal",
									target: "#exampleModalToggle",
								},
								"Open first modal"
							),
							mdl(
								"exampleModalToggle",
								"Modal 1",
								"Show a second modal and hide this one with the button below.",
								"#exampleModalToggle2",
								"second modal"
							),
							mdl(
								"exampleModalToggle2",
								"Modal 2",
								"Hide this modal and show the first with the button below.",
								"#exampleModalToggle",
								"first modal"
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Change animation"),
				new e.text(
					"The {{$modal-fade-transform}} variable determines the transform state of {{b.modal.container}} before the modal fade-in animation, the {{$modal-show-transform}} variable determines the transform of {{b.modal.container}} at the end of the modal fade-in animation."
				),
				new e.text(
					"If you want for example a zoom-in animation, you can set {{$modal-fade-transform: scale(.8)}}."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Remove animation"),
				new e.text(
					"For modals that simply appear rather than fade in to view, set {{animation:false}} property to {{b.modal.container}}."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							// Button trigger modal
							new b.button(
								{ color: "primary", toggle: "modal", target: "#noAnimationModal" },
								"Launch no animation modal"
							),

							// Modal
							new b.modal.container(
								{
									id: "noAnimationModal",
									labelledby: "noAnimationModalLabel",
									animation: false, //remove animation
								},
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title(
											{ id: "noAnimationModalLabel" },
											"Modal title"
										)
									),
									new b.modal.body(new h.p("This modal has no animation.")),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Save changes"),
									]),
								]
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Dynamic heights"),
				new e.text(
					"If the height of a modal changes while it is open, you should call {{b.modal.handleUpdate}} to readjust the modal’s position in case a scrollbar appears."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.button(
							{
								color: "primary",
								on: {
									click: () => {
										const ct = new Date();

										b.modal.show(
											b.modal.create({
												title: "Modal title",
												view: "center",
												elem: new h.p([
													"This modal body content will change after ",
													new h.b(
														new b.timer({
															time: ct.setSeconds(
																ct.getSeconds() + 6
															),
															callback: (target: Element) => {
																const body = target.closest(
																	".modal-body"
																) as HTMLDivElement;
																const modal = body.closest(
																	".modal"
																) as Element;

																core.replaceChild(body, [
																	new h.p(
																		{
																			style: {
																				height: "100vh",
																			},
																		},
																		"This is some placeholder content to show the scrolling behavior for modals. Bootstrap use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal."
																	),
																	new h.p(
																		"This content should appear at the bottom after you scroll."
																	),
																]);

																// readjust the modal’s position
																b.modal.handleUpdate(modal);
															},
														})
													),
													".",
												]),
												btn: ["ok", "cancel"],
											})
										);
									},
								},
							},
							"Launch dynamic height modal"
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Accessibility"),
				new e.text(
					"Be sure to add {{labelledby:'...'}}, referencing the {{b.modal.title({id:'...'})}}, to {{b.modal.container}}. Additionally, you may give a description of your modal dialog with {{describedby}} on {{b.modal.container}}. Note that you don’t need to add {{role:'dialog'}} since Bootstrap already add it via JavaScript."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Embedding YouTube videos"),
				new e.text(
					"Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. {{https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal::See this helpful Stack Overflow post}} for more information."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							// Button trigger modal
							new b.button(
								{ color: "primary", toggle: "modal", target: "#youtubeModal" },
								"Launch Youtube modal"
							),

							// Modal
							new b.modal.container(
								{
									id: "youtubeModal",
									labelledby: "youtubeModalLabel",
									view: "center",
									weight: "lg",
									on: {
										"shown.bs.modal": (event) => {
											const target = event.target as Element;
											const iframe = target.querySelector(
												".modal-body iframe"
											) as HTMLIFrameElement;

											//set video to play when modal shown
											iframe.setAttribute(
												"src",
												"https://www.youtube.com/embed/eVxNksC88_U?autoplay=1"
											);
										},
										"hidden.bs.modal": (event) => {
											const target = event.target as Element;
											const iframe = target.querySelector(
												".modal-body iframe"
											) as HTMLIFrameElement;

											//stop video from playing when modal is hidden
											iframe.setAttribute("src", "");
										},
									},
								},
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title(
											{ id: "youtubeModalLabel" },
											"Modal title"
										)
									),
									new b.modal.body(
										new h.div(
											{ ratio: "16x9" },
											new h.iframe({
												src: "",
												title: "YouTube video player",
												allowfullscreen: true,
											})
										)
									),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Okay"),
									]),
								]
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Optional sizes"),
				new e.text(
					"Modals have three optional sizes, available via modifier classes to be placed on a {{b.modal.container}}. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports."
				),
				new e.table({
					item: [
						["Size", "Property", "Modal max-width"],
						["Small", "{{weight:'sm'}}", "{{300px}}"],
						["Default", "None", "{{500px}}"],
						["Large", "{{weight:'lg'}}", "{{800px}}"],
						["Extra large", "{{weight:'xl'}}", "{{1140px}}"],
					],
				}),
				new e.text(
					"Bootstrap default modal without modifier class constitutes the “medium” size modal."
				),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						const d = [
							{ weight: "xl", label: "Extra large modal" },
							{ weight: "lg", label: "Large modal" },
							{ weight: "sm", label: "Small modal" },
						];

						return [
							...d.map((i) => {
								return new b.button(
									{
										color: "primary",
										toggle: "modal",
										target: `#${i.weight}SizeModal`,
									},
									i.label
								);
							}),
							...d.map((i) => {
								return new b.modal.container(
									{
										id: `${i.weight}SizeModal`,
										labelledby: `#${i.weight}SizeModalLabel`,
										weight: i.weight as I.B.Modal.Container["weight"], //set modal weight
									},
									[
										new b.modal.header(
											{ close: true },
											new b.modal.title(
												{ id: `${i.weight}SizeModalLabel` },
												`${i.label}`
											)
										),
										new b.modal.body("..."),
									]
								);
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Fullscreen Modal"),
				new e.text(
					"Another override is the option to pop up a modal that covers the user viewport, available via {{fullscreen}} property that are placed on a {{b.modal.container}}."
				),
				new e.table({
					item: [
						["Property", "Availability"],
						["{{fullscreen:true}}", "Always"],
						["{{fullscreen:'sm-down'}}", "{{576px}}"],
						["{{fullscreen:'md-down'}}", "{{768px}}"],
						["{{fullscreen:'lg-down'}}", "{{992px}}"],
						["{{fullscreen:'xl-down'}}", "{{1200px}}"],
						["{{fullscreen:'xxl-down'}}", "{{1400px}}"],
					],
				}),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						const d = [
							{ fullscreen: true, label: "Full screen" },
							{ fullscreen: "sm", label: "Full screen below sm" },
							{ fullscreen: "md", label: "Full screen below md" },
							{ fullscreen: "lg", label: "Full screen below lg" },
							{ fullscreen: "xl", label: "Full screen below xl" },
							{ fullscreen: "xxl", label: "Full screen below xxl" },
						];

						return [
							...d.map((i) => {
								return new b.button(
									{
										color: "primary",
										toggle: "modal",
										target: `#${
											i.fullscreen !== true ? i.fullscreen : "xs"
										}FSModal`,
									},
									i.label
								);
							}),
							...d.map((i) => {
								return new b.modal.container(
									{
										id: `${i.fullscreen !== true ? i.fullscreen : "xs"}FSModal`,
										labelledby: `#${
											i.fullscreen !== true ? i.fullscreen : "xs"
										}FSModalLabel`,

										//set fullscreen property
										fullscreen: i.fullscreen
											? (i.fullscreen as I.B.Modal.Container["fullscreen"])
											: undefined,
									},
									[
										new b.modal.header(
											{ close: true },
											new b.modal.title(
												{
													id: `${
														i.fullscreen !== true ? i.fullscreen : "xs"
													}FSModalLabel`,
												},
												`${i.label}`
											)
										),
										new b.modal.body("..."),
										new b.modal.footer(
											new b.button(
												{ dismiss: "modal", color: "secondary" },
												"Close"
											)
										),
									]
								);
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Variables"),
				new e.text(
					"As part of Bootstrap’s evolving CSS variables approach, modals now use local CSS variables on {{.modal}} and {{.modal-backdrop}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
				),

				new e.codepreview({
					type: "css",
					title: "scss/_modal.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_modal.scss",
					code: `
						--#{$prefix}modal-zindex: #{$zindex-modal};
						--#{$prefix}modal-width: #{$modal-md};
						--#{$prefix}modal-padding: #{$modal-inner-padding};
						--#{$prefix}modal-margin: #{$modal-dialog-margin};
						--#{$prefix}modal-color: #{$modal-content-color};
						--#{$prefix}modal-bg: #{$modal-content-bg};
						--#{$prefix}modal-border-color: #{$modal-content-border-color};
						--#{$prefix}modal-border-width: #{$modal-content-border-width};
						--#{$prefix}modal-border-radius: #{$modal-content-border-radius};
						--#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-xs};
						--#{$prefix}modal-inner-border-radius: #{$modal-content-inner-border-radius};
						--#{$prefix}modal-header-padding-x: #{$modal-header-padding-x};
						--#{$prefix}modal-header-padding-y: #{$modal-header-padding-y};
						--#{$prefix}modal-header-padding: #{$modal-header-padding}; // Todo in v6: Split this padding into x and y
						--#{$prefix}modal-header-border-color: #{$modal-header-border-color};
						--#{$prefix}modal-header-border-width: #{$modal-header-border-width};
						--#{$prefix}modal-title-line-height: #{$modal-title-line-height};
						--#{$prefix}modal-footer-gap: #{$modal-footer-margin-between};
						--#{$prefix}modal-footer-bg: #{$modal-footer-bg};
						--#{$prefix}modal-footer-border-color: #{$modal-footer-border-color};
						--#{$prefix}modal-footer-border-width: #{$modal-footer-border-width};
					`,
				}),

				new e.codepreview({
					type: "css",
					title: "scss/_modal.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_modal.scss",
					code: `
						--#{$prefix}backdrop-zindex: #{$zindex-modal-backdrop};
						--#{$prefix}backdrop-bg: #{$modal-backdrop-bg};
						--#{$prefix}backdrop-opacity: #{$modal-backdrop-opacity};
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
						$modal-inner-padding:               $spacer;

						$modal-footer-margin-between:       .5rem;

						$modal-dialog-margin:               .5rem;
						$modal-dialog-margin-y-sm-up:       1.75rem;

						$modal-title-line-height:           $line-height-base;

						$modal-content-color:               null;
						$modal-content-bg:                  var(--#{$prefix}body-bg);
						$modal-content-border-color:        var(--#{$prefix}border-color-translucent);
						$modal-content-border-width:        var(--#{$prefix}border-width);
						$modal-content-border-radius:       var(--#{$prefix}border-radius-lg);
						$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width);
						$modal-content-box-shadow-xs:       $box-shadow-sm;
						$modal-content-box-shadow-sm-up:    $box-shadow;

						$modal-backdrop-bg:                 $black;
						$modal-backdrop-opacity:            .5;

						$modal-header-border-color:         var(--#{$prefix}border-color);
						$modal-header-border-width:         $modal-content-border-width;
						$modal-header-padding-y:            $modal-inner-padding;
						$modal-header-padding-x:            $modal-inner-padding;
						$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x; // Keep this for backwards compatibility

						$modal-footer-bg:                   null;
						$modal-footer-border-color:         $modal-header-border-color;
						$modal-footer-border-width:         $modal-header-border-width;

						$modal-sm:                          300px;
						$modal-md:                          500px;
						$modal-lg:                          800px;
						$modal-xl:                          1140px;

						$modal-fade-transform:              translate(0, -50px);
						$modal-show-transform:              none;
						$modal-transition:                  transform .3s ease-out;
						$modal-scale-transform:             scale(1.02);
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sass loop"),
				new e.text(
					"{{nav:docs/components/modal#fullscreen_modal::Responsive fullscreen modals}} are generated via the {{$breakpoints}} map and a loop in {{scss/_modal.scss}}."
				),

				new e.codepreview({
					type: "css",
					title: "scss/_modal.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_modal.scss",
					code: `
						@each $breakpoint in map-keys($grid-breakpoints) {
						$infix: breakpoint-infix($breakpoint, $grid-breakpoints);
						$postfix: if($infix != "", $infix + "-down", "");

						@include media-breakpoint-down($breakpoint) {
							.modal-fullscreen#{$postfix} {
							width: 100vw;
							max-width: none;
							height: 100%;
							margin: 0;

							.modal-content {
								height: 100%;
								border: 0;
								@include border-radius(0);
							}

							.modal-header,
							.modal-footer {
								@include border-radius(0);
							}

							.modal-body {
								overflow-y: auto;
							}
							}
						}
						}
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Usage"),
				new e.text(
					"The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also overrides default scrolling behavior and generates a {{.modal-backdrop}} to provide a click area for dismissing shown modals when clicking outside the modal."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Via data attributes"),
				new e.xsubtitle("Toggle"),
				new e.text(
					"Activate a modal without writing JavaScript. Set {{toggle:'modal'}} on a controller component, like a button, along with a {{target:'#foo'}} or {{href:'#foo'}} to target a specific modal to toggle."
				),

				new e.codepreview({
					type: "js",
					code: `
						new b.button({ toggle: "modal", target: "#myModal" }, "Launch modal")
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.xsubtitle("Dismiss"),
				new e.text(
					"Dismissal can be achieved with the {{b.modal.btnclose}} as demonstrated below:"
				),

				new e.codepreview({
					type: "js",
					code: `
						new b.modal.btnclose();
						new b.button({dismiss:"modal", label:"Close"});
					`,
				}),

				new e.text(
					"or on a button {{b::outside the modal}} using the additional {{target}} as demonstrated below:"
				),

				new e.codepreview({
					type: "js",
					code: `
						new b.modal.btnclose({target: "#myModal"});
						new b.button({target: "#myModal", dismiss: "modal",label: "Close"});
					`,
				}),

				new e.alert(
					{ color: "warning", callout: true },
					"While both ways to dismiss a modal are supported, keep in mind that dismissing from outside a modal does not match the {{https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/::ARIA Authoring Practices Guide dialog (modal) pattern}}. Do this at your own risk."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Via JavaScript"),
				new e.text("Create a modal with a single line of JavaScript:"),

				new e.codepreview({
					type: "js",
					code: `
						const myModal = b.modal.init(document.getElementById('myModal'), options)
						// or
						const myModalAlternative = b.modal.init('#myModal', options)
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
						[
							"{{backdrop}}",
							"boolean, {{'static'}}",
							"{{true}}",
							"Includes a modal-backdrop element. Alternatively, specify {{static}} for a backdrop which doesn’t close the modal when clicked.",
						],
						[
							"{{focus}}",
							"boolean",
							"{{true}}",
							"Puts the focus on the modal when initialized.",
						],
						[
							"{{keyboard}}",
							"boolean",
							"{{true}}",
							"Closes the modal when escape key is pressed.",
						],
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
			]),

			//----------------------

			new e.section([
				new e.xsubtitle("Passing options"),
				new e.text(
					"Activates your content as a modal. Accepts an optional options {{object}}."
				),
				new e.codepreview({
					type: "js",
					code: `
						const myModal = b.modal.init('#myModal', {
						keyboard: false,
						backdrop: 'static',
						focus: false,
						})
					`,
				}),
				new e.table({
					item: [
						["Method", "Description"],
						[
							"{{dispose}}",
							"Destroys an element’s modal. (Removes stored data on the DOM element)",
						],
						[
							"{{getInstance}}",
							"{{i::Static}} method which allows you to get the modal instance associated with a DOM element.",
						],
						[
							"{{getOrCreateInstance	}}",
							"{{i::Static}} method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn’t initialized.",
						],
						[
							"{{handleUpdate}}",
							"Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).",
						],
						[
							"{{hide}}",
							"Manually hides a modal. {{b::Returns to the caller before the modal has actually been hidden}} (i.e. before the hidden.bs.modal event occurs).",
						],
						[
							"{{show}}",
							"Manually opens a modal. {{b::Returns to the caller before the modal has actually been shown}} (i.e. before the {{shown.bs.modal}} event occurs). Also, you can pass a DOM element as an argument that can be received in the modal events (as the {{relatedTarget}} property). (i.e. {{const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle)}}.",
						],
						[
							"{{toggle}}",
							"Manually toggles a modal. {{b::Returns to the caller before the modal has actually been shown or hidden}} (i.e. before the {{shown.bs.modal}} or {{hidden.bs.modal}} event occurs).",
						],
					],
				}),

				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						const modalBody = new b.modal.body(
							{ id: "example-modal-body" },
							new h.p("Woo-hoo, you're reading this text in a modal!")
						);

						const modalContainer = new b.modal.container(
							{
								id: "example-modal",
								labelledby: "example-modal-label",
								on: {
									"show.bs.modal": () => {
										const mdlBody =
											document.getElementById("example-modal-body");
										if (mdlBody) {
											core.replaceWith(mdlBody, modalBody);
										}
									},
								},
							},
							[
								new b.modal.header(
									{ close: true },
									new b.modal.title({ id: "example-modal-label" }, "Modal title")
								),
								modalBody,
								new b.modal.footer([
									new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
									new b.button({ color: "primary" }, "Save changes"),
								]),
							]
						);

						const initButton = new b.button(
							{
								color: "success",
								on: {
									click: (event) => {
										const mdl = b.modal.init("#example-modal");
										e.console(
											event.target as Element,
											"b.modal.init",
											mdl ? mdl : "null",
											mdl ? "success" : "danger"
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
										const mdl = b.modal.getInstance("#example-modal");
										e.console(
											event.target as Element,
											"b.modal.getInstance",
											mdl ? mdl : "null",
											mdl ? "success" : "danger"
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
										const mdl = b.modal.getOrCreateInstance("#example-modal");
										e.console(
											event.target as Element,
											"b.modal.getOrCreateInstance",
											mdl ? mdl : "null",
											mdl ? "success" : "danger"
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
										b.modal.show("#example-modal", event.target as HTMLElement);
									},
								},
							},
							"show"
						);

						const hideButton = new b.button(
							{
								on: {
									click: () => {
										b.modal.hide("#example-modal");
									},
								},
							},
							"hide"
						);

						const toggleButton = new b.button(
							{
								on: {
									click: () => {
										b.modal.toggle("#example-modal");
									},
								},
							},
							"toggle"
						);

						const handleUpdateButton = new b.button(
							{
								on: {
									click: () => {
										b.modal.handleUpdate("#example-modal");
									},
								},
							},
							"handleUpdate"
						);

						const changeContent = new b.button(
							{
								color: "warning",
								on: {
									click: () => {
										const mdlBody =
											document.getElementById("example-modal-body");
										if (mdlBody) {
											core.replaceWith(
												mdlBody,
												new b.modal.body({ id: "example-modal-body" }, [
													new h.p(
														{ style: { height: "100vh" } },
														"This is some placeholder content to show the scrolling behavior for modals. Bootstrap use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal."
													),
													new h.p(
														"This content should appear at the bottom after you scroll."
													),
												])
											);
										}
									},
								},
							},
							"changeContent"
						);

						const disposeButton = new b.button(
							{
								color: "danger",
								on: {
									click: () => {
										b.modal.dispose("#example-modal");
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
							handleUpdateButton,
							changeContent,
							disposeButton,
						]);

						const previewContainer = new h.div(
							{
								width: 100,
								margin: 1,
								marginEnd: 2,
								bgColor: "body-tertiary",
								rounded: true,
								padding: 2,
							},
							modalContainer
						);

						const controlContainer = new h.div(
							{
								marginStart: "auto",
								padding: 1,
								rounded: true,
								bgColor: "body",
								style: { zIndex: "1055" },
							},
							buttonGroup
						);

						const mainContainer = new h.div({ display: "flex" }, [
							previewContainer,
							controlContainer,
						]);

						return [mainContainer];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Events"),
				new e.text(
					"Bootstrap’s modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the {{b.modal.container}})."
				),
				new e.table({
					item: [
						["Event", "Description"],
						[
							"{{hide.bs.modal}}",
							"This event is fired immediately when the {{hide}} instance method has been called.",
						],
						[
							"{{hidden.bs.modal}}",
							"This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).",
						],
						[
							"{{hidePrevented.bs.modal}}",
							"This event is fired when the modal is shown, its backdrop is {{static}} and a click outside of the modal is performed. The event is also fired when the escape key is pressed and the {{keyboard}} option is set to {{false}}.",
						],
						[
							"{{show.bs.modal}}",
							"This event fires immediately when the {{show}} instance method is called. If caused by a click, the clicked element is available as the {{relatedTarget}} property of the event.",
						],
						[
							"{{shown.bs.modal}}",
							"This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the {{relatedTarget}} property of the event.",
						],
					],
				}),

				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						interface EventWithTargetAndRelatedTarget extends Event {
							target: Element;
							relatedTarget: Element;
						}

						return [
							// Button trigger modal
							new b.button(
								{ color: "primary", toggle: "modal", target: "#eventModal" },
								"Show modal event"
							),

							// Modal
							new b.modal.container(
								{
									id: "eventModal",
									labelledby: "eventModalLabel",
									backdrop: "static",
									on: {
										"shown.bs.modal": (event) => {
											const evnt = event as EventWithTargetAndRelatedTarget;
											e.console(
												evnt.target,
												"shown.bs.modal",
												`Target: {{b::${core.elemInfo(evnt.target)}}}{{br}}
												RelatedTarget: {{b::${core.elemInfo(evnt.relatedTarget)}}}`,
												"success"
											);
										},

										"hidden.bs.modal": (event) => {
											const target = event.target as Element;
											e.console(
												target,
												"hidden.bs.modal",
												`Target: {{b::${core.elemInfo(target)}}}`,
												"danger"
											);
										},

										"hidePrevented.bs.modal": (event) => {
											const target = event.target as Element;
											e.console(
												target,
												"hidePrevented.bs.modal",
												`Target: {{b::${core.elemInfo(target)}}}`,
												"warning"
											);
										},
									},
								},
								[
									new b.modal.header(
										{ close: true },
										new b.modal.title({ id: "eventModalLabel" }, "Modal title")
									),
									new b.modal.body("Try press {{k::Esc}} key"),
									new b.modal.footer([
										new b.button(
											{ dismiss: "modal", color: "secondary" },
											"Close"
										),
										new b.button({ color: "primary" }, "Okay"),
									]),
								]
							),
						];
					},
				}),
			]),
		];
	},
};

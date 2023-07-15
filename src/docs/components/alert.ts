import { b, h, core, I } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const alert: IContent = {
	title: "Alert",
	description: "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Examples"),
				new e.text(
					"Alerts ({{b.alert.container}}) are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required contextual classes (e.g., {{color:'success'}}). For inline dismissal, use the {{nav:docs/components/alert#dismissing::alerts JavaScript plugin}}."
				),
				new e.alert({ color: "info", callout: true }, "{{b::Heads up!}} As of v5.3.0, the {{alert-variant()}} Sass mixin is deprecated. Alert variants now have their CSS variables overridden in the {{nav:docs/components/alert#sass_loop::Sass loop}}."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
							return new b.alert.container({ color: i as I.B.Alert.Container["color"] }, `A simple ${i} alert—check it out!`);
						});
					},
				}),

				new e.alert({ color: "info", callout: true }, [
					new h.h(5, "Conveying meaning to assistive technologies"),
					new h.p(
						"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property."
					),
				]),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Callout"),
				new e.text("Just set {{callout:true}} to change the {{alert}} to {{callout}}"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
							return new b.alert.container({ color: i as I.B.Alert.Container["color"], callout: true }, `A simple ${i} callout—check it out!`);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Live example"),
				new e.text("Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.div({ id: "liveAlertPlaceholder" }),
							new h.div(
								new b.button(
									{
										color: "primary",
										on: {
											click: (_e) => {
												let container = document.getElementById("liveAlertPlaceholder") as Element;
												core.appendChild(container, new b.alert.container({ color: "success", dismissible: true }, "Nice, you triggered this alert message!"));
											},
										},
									},
									"Show live alert"
								)
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Link color"),
				new e.text("Use the {{b.alert.link}} component to quickly provide matching colored links within any alert."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
							return new b.alert.container({ color: i as I.B.Alert.Container["color"] }, [`A simple ${i} alert with `, new b.alert.link({ href: "#" }, "an example link"), "."]);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Additional content"),
				new e.text("Alerts can also contain additional HTML elements like headings, paragraphs and dividers."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.alert.container({ color: "success" }, [
							new b.alert.header(4, "Well done!"),
							new h.p("Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),
							new h.hr(),
							new h.p({ marginBottom: 0 }, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Icons"),
				new e.text("Similarly, you can use {{nav:docs/utilities/flex::flexbox utilities}} and {{https://icons.getbootstrap.com/::Bootstrap Icons}} to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.alert.container({ color: "info" }, new b.msg({ icon: "info-circle-fill" }, "An example alert with an icon"));
					},
				}),

				new e.text("Need more than one icon for your alerts? Consider using more Bootstrap Icons and making a local SVG sprite like so to easily reference the same icons repeatedly."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							{ color: "info", icon: "info-circle-fill" },
							{ color: "success", icon: "check-circle-fill" },
							{ color: "warning", icon: "exclamation-triangle-fill" },
							{ color: "danger", icon: "x-circle-fill" },
						].map((i) => {
							return new b.alert.container({ color: i.color as I.B.Alert.Container["color"] }, [new b.msg({ icon: i.icon }, `An example ${i.color} alert with an icon`)]);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Dismissing"),

				new e.text("Add {{dismissible:true}} to {{b.alert.container}} to dismiss the alert."),
				new e.ul({
					item: [
						"Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.",
						"Set {{dismissible:true}} property to {{b.alert.container}} to add {{nav:docs/components/close_button::close button}}.",
						"{{dismissible:true}} add the {{data-bs-dismiss='alert'}} attribute automaticly, which triggers the JavaScript functionality and use the {{<button>}} element with it for proper behavior across all devices.",
						"{{b.alert.container}} automaticly animate alerts when dismissing them, by add the {{.fade}} and {{.show}} classes.",
					],
				}),
				new e.text("You can see this in action with a live demo:"),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.alert.container({ color: "warning", dismissible: true }, "{{b::Holy guacamole!}} You should check in on some of those fields below.");
					},
				}),

				new e.alert(
					{ color: "warning", callout: true },
					"When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, Bootstrap recommend including additional JavaScript that listens for the {{on:{'closed.bs.alert':Event} }} and programmatically sets {{focus()}} to the most appropriate location in the page. If you’re planning to move focus to a non-interactive element that normally does not receive focus, make sure to add {{tabindex:'-1'}} to the element."
				),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Variables"),
				new e.text("As part of Bootstrap’s evolving CSS variables approach, alerts now use local CSS variables on {{.alert}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),

				new e.codepreview({
					type: "css",
					title: "scss/_alert.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_alert.scss",
					code: `
						--#{$prefix}alert-bg: transparent;
						--#{$prefix}alert-padding-x: #{$alert-padding-x};
						--#{$prefix}alert-padding-y: #{$alert-padding-y};
						--#{$prefix}alert-margin-bottom: #{$alert-margin-bottom};
						--#{$prefix}alert-color: inherit;
						--#{$prefix}alert-border-color: transparent;
						--#{$prefix}alert-border: #{$alert-border-width} solid var(--#{$prefix}alert-border-color);
						--#{$prefix}alert-border-radius: #{$alert-border-radius};
						--#{$prefix}alert-link-color: inherit;
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
						$alert-padding-y:               $spacer;
						$alert-padding-x:               $spacer;
						$alert-margin-bottom:           1rem;
						$alert-border-radius:           $border-radius;
						$alert-link-font-weight:        $font-weight-bold;
						$alert-border-width:            var(--#{$prefix}border-width);
						$alert-bg-scale:                -80%;
						$alert-border-scale:            -70%;
						$alert-color-scale:             40%;
						$alert-dismissible-padding-r:   $alert-padding-x * 3; // 3x covers width of x plus defaut
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sass mixin"),
				new e.text("Used in combination with {{$theme-colors}} to create contextual modifier classes for Bootstrap alerts."),
				new e.codepreview({
					type: "css",
					title: "scss/mixins/_alert.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_alert.scss",
					code: `
						@mixin alert-variant($background, $border, $color) {
						--#{$prefix}alert-color: #{$color};
						--#{$prefix}alert-bg: #{$background};
						--#{$prefix}alert-border-color: #{$border};
						--#{$prefix}alert-link-color: #{shade-color($color, 20%)};

						@if $enable-gradients {
							background-image: var(--#{$prefix}gradient);
						}

						.alert-link {
							color: var(--#{$prefix}alert-link-color);
						}
						}
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sass loop"),
				new e.text("Loop that generates the modifier classes with the {{alert-variant()}} mixin."),
				new e.codepreview({
					type: "css",
					title: "scss/_alert.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_alert.scss",
					code: `
						// Generate contextual modifier classes for colorizing the alert
						@each $state in map-keys($theme-colors) {
							.alert-#{$state} {
								--#{$prefix}alert-color: var(--#{$prefix}#{$state}-text);
								--#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);
								--#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);
								--#{$prefix}alert-link-color: var(--#{$prefix}#{$state}-text);
							}
						}

					`,
				}),
			]),

			//----------------------

			new e.section([new e.title("JavaScript behavior")]),

			//----------------------

			new e.section([
				new e.subtitle("Initialize"),
				new e.text("Initialize elements as alerts"),

				new e.codepreview({
					type: "js",
					code: `
						const alertList = document.querySelectorAll('.alert')
						const alerts = [...alertList].map(element => b.alert.init(element))
					`,
				}),

				new e.alert({ color: "warning", callout: true }, [
					new h.p("For the sole purpose of dismissing an alert, it isn’t necessary to initialize the component manually via the JS API. By making use of {{b.alert.btnclose}} component, the alert component will be initialized automatically and properly dismissed."),
					new h.p("See the {{nav:docs/components/alerts#triggers::triggers}} section for more details."),
				]),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Triggers"),

				new e.text("Dismissal can be achieved with the {{data}} attribute on a button within the alert as demonstrated below:"),
				new e.codepreview({
					type: "js",
					code: `
						new b.alert.btnclose();
						new b.button({dismiss:"alert"},"Close");
					`,
				}),

				new e.text("or on a button outside the alert using the {{data-bs-target}} as demonstrated below:"),
				new e.codepreview({
					type: "js",
					code: `
						new b.alert.btnclose({target:"#my-alert"});
						new b.button({dismiss:"alert", target:"#my-alert"},"Close");
					`,
				}),

				new e.text("{{b::Note :}} that closing an alert will remove it from the DOM."),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Methods"),
				new e.text("You can create an alert instance with the alert constructor, for example:"),
				new e.codepreview({
					type: "js",
					code: `
						const bsAlert = b.alert.init('#myAlert');
					`,
				}),
				new e.text("This makes an alert listen for click events on descendant elements which have the {{dismiss:'alert'}} property. (Not necessary when using the data-api’s auto-initialization.)"),
				new e.table({
					item: [
						["Method", "Description"],
						["{{close}}", "Closes an alert by removing it from the DOM. If the {{.fade}} and {{.show}} classes are present on the element, the alert will fade out before it is removed."],
						["{{dispose}}", "Destroys an element’s alert. (Removes stored data on the DOM element)"],
						["{{getInstance}}", "Static method which allows you to get the alert instance associated to a DOM element. For example: {{b.alert.getInstance('#alert')}}."],
						["{{getOrCreateInstance}}", "Static method which returns an alert instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{b.alert.getOrCreateInstance('#alert')}}."],
					],
				}),
				new e.text("Basic usage:"),
				new e.codepreview({
					type: "js",
					code: `
						b.alert.close('#myAlert');
					`,
				}),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						const exampleAlert = new h.div(
							{ id: "example-alert-container" },
							new b.alert.container(
								{
									id: "example-alert",
									animation: true,
									color: "primary",
									marginBottom: 0,
									dismissible: true,
								},
								"Example"
							)
						);

						return [
							new h.div({ display: "flex", overflow: "auto" }, [
								new h.div(
									{
										width: 100,
										marginEnd: 3,
										bgColor: "body-tertiary",
										rounded: true,
										padding: [1, "md-4"],
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
									},
									exampleAlert
								),
								new h.div(
									{ marginStart: "auto" },
									new b.btngroup({ vertical: true, weight: "sm" }, [
										new b.button(
											{
												color: "success",
												on: {
													click: (event) => {
														const elem = b.alert.init("#example-alert");

														e.console(event.target as Element, "b.alert.init", elem ? elem : "null", elem ? "success" : "danger");
													},
												},
											},
											"init"
										),
										new b.button(
											{
												color: "success",
												on: {
													click: (event) => {
														const elem = b.alert.getInstance("#example-alert");

														e.console(event.target as Element, "b.alert.getInstance", elem ? elem : "null", elem ? "success" : "danger");
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
														const elem = b.alert.getOrCreateInstance("#example-alert");

														e.console(event.target as Element, "b.alert.getOrCreateInstance", elem ? elem : "null", elem ? "success" : "danger");
													},
												},
											},
											"getOrCreateInstance"
										),

										new b.button(
											{
												color: "danger",
												on: {
													click: () => {
														b.alert.close("#example-alert");
													},
												},
											},
											"close"
										),
										new b.button(
											{
												color: "danger",
												on: {
													click: () => {
														b.alert.dispose("#example-alert");
													},
												},
											},
											"dispose"
										),
										new b.button(
											{
												on: {
													click: () => {
														core.replaceWith(document.getElementById("example-alert-container")!, exampleAlert);
													},
												},
											},
											"reset"
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
				new e.text("Bootstrap’s alert plugin exposes a few events for hooking into alert functionality."),
				new e.table({
					item: [
						["Event", "Description"],
						["{{close.bs.alert}}", "Fires immediately when the {{close}} instance method is called."],
						["{{closed.bs.alert}}", "Fired when the alert has been closed and CSS transitions have completed."],
					],
				}),

				new e.code({
					db: getContentCode(db),
					showConsole: true,
					output: () => {
						return new b.alert.container(
							{
								color: "info",
								dismissible: true,
								on: {
									"close.bs.alert": (event) => {
										const target = event.target as Element;
										e.console(target, "close.bs.alert", `Target: {{b::${core.elemInfo(target)}}}`, "info");
									},
								},
							},
							"Click close to see event trigged."
						);
					},
				}),
			]),
		];
	},
	db: [
		{
			source: `() => {
return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
return new b.alert.container({
color: i
}, \`A simple \${i} alert—check it out!\`);
});
}`,
		},
		{
			source: `() => {
return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
return new b.alert.container({
color: i,
callout: true
}, \`A simple \${i} callout—check it out!\`);
});
}`,
		},
		{
			source: `() => {
return [
new h.div({
id: "liveAlertPlaceholder"
}),
new h.div(new b.button({
color: "primary",
on: {
click: (_e) => {
let container = document.getElementById("liveAlertPlaceholder");
core.appendChild(container, new b.alert.container({
color: "success",
dismissible: true
}, "Nice, you triggered this alert message!"));
},
},
}, "Show live alert")),
];
}`,
		},
		{
			source: `() => {
return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
return new b.alert.container({
color: i
}, [\`A simple \${i} alert with \`, new b.alert.link({
href: "#"
}, "an example link"), "."]);
});
}`,
		},
		{
			source: `() => {
return new b.alert.container({
color: "success"
}, [
new b.alert.header(4, "Well done!"),
new h.p("Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),
new h.hr(),
new h.p({
marginBottom: 0
}, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),
]);
}`,
		},
		{
			source: `() => {
return new b.alert.container({
color: "info"
}, new b.msg({
icon: "info-circle-fill"
}, "An example alert with an icon"));
}`,
		},
		{
			source: `() => {
return [{
color: "info",
icon: "info-circle-fill"
}, {
color: "success",
icon: "check-circle-fill"
}, {
color: "warning",
icon: "exclamation-triangle-fill"
}, {
color: "danger",
icon: "x-circle-fill"
}, ].map((i) => {
return new b.alert.container({
color: i.color
}, [new b.msg({
icon: i.icon
}, \`An example \${i.color} alert with an icon\`)]);
});
}`,
		},
		{
			source: `() => {
return new b.alert.container({
color: "warning",
dismissible: true
}, "{{b::Holy guacamole!}} You should check in on some of those fields below.");
}`,
		},
		{
			source: `() => {
const exampleAlert = new h.div({
id: "example-alert-container"
}, new b.alert.container({
id: "example-alert",
animation: true,
color: "primary",
marginBottom: 0,
dismissible: true,
}, "Example"));
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
padding: [1, "md-4"],
display: "flex",
justifyContent: "center",
alignItem: "center",
}, exampleAlert),
new h.div({
marginStart: "auto"
}, new b.btngroup({
vertical: true,
weight: "sm"
}, [
new b.button({
color: "success",
on: {
click: (event) => {
const elem = b.alert.init("#example-alert");
e.console(event.target, "b.alert.init", elem ? elem : "null", elem ? "success" : "danger");
},
},
}, "init"),
new b.button({
color: "success",
on: {
click: (event) => {
const elem = b.alert.getInstance("#example-alert");
e.console(event.target, "b.alert.getInstance", elem ? elem : "null", elem ? "success" : "danger");
},
},
}, "getInstance"),
new b.button({
color: "success",
on: {
click: (event) => {
const elem = b.alert.getOrCreateInstance("#example-alert");
e.console(event.target, "b.alert.getOrCreateInstance", elem ? elem : "null", elem ? "success" : "danger");
},
},
}, "getOrCreateInstance"),
new b.button({
color: "danger",
on: {
click: () => {
b.alert.close("#example-alert");
},
},
}, "close"),
new b.button({
color: "danger",
on: {
click: () => {
b.alert.dispose("#example-alert");
},
},
}, "dispose"),
new b.button({
on: {
click: () => {
core.replaceWith(document.getElementById("example-alert-container"), exampleAlert);
},
},
}, "reset"),
])),
]),
];
}`,
		},
		{
			source: `() => {
return new b.alert.container({
color: "info",
dismissible: true,
on: {
"close.bs.alert": (event) => {
const target = event.target;
e.console(target, "close.bs.alert", \`Target: {{b::\${core.elemInfo(target)}}}\`, "info");
},
},
}, "Click close to see event trigged.");
}`,
		},
	],
};

import { core, h, b, I } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
type Drop = I.b.dropdown.drop;

export const dropdown: IContent = {
	title: "Dropdowns",
	description:
		"Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Overview"),
				new e.text(
					"Dropdowns are toggleable ({{b.dropdown.button}}), contextual overlays for displaying lists of links and more using {{b.dropdown.menu}}. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is {{https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/::an intentional design decision}}."
				),
				new e.text(
					"Dropdowns are built on a third party library, {{https://popper.js.org/::Popper}}, which provides dynamic positioning and viewport detection. Be sure to include {{https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js::popper.min.js}} before Bootstrap’s JavaScript or use {{bootstrap.bundle.min.js}} / {{bootstrap.bundle.js}} which contains Popper. Popper isn’t used to position dropdowns in navbars though as dynamic positioning isn’t required."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Accessibility"),
				new e.text(
					"The {{https://www.w3.org/TR/wai-aria/::WAI ARIA}} standard defines an actual {{https://www.w3.org/TR/wai-aria/#menu::role='menu' widget}}, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus."
				),
				new e.text(
					"Bootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the {{role}} and {{aria-}} attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves."
				),
				new e.text(
					"However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual {{b.dropdown.item}} elements using the cursor keys and close the menu with the {{k::Esc}} key."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Examples"),
				new e.text(
					"Wrap the dropdown’s toggle (your button or link) and the dropdown menu within {{class:'dropdown'}}, or another component that declares {{position: relative}}. Ideally, you should use a {{b.dropdown.button}} element as the dropdown trigger. The examples shown here use {{b.dropdown.item}} component where appropriate, but custom markup is supported."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Single button"),
				new e.text(
					"Use {{b.dropdown.button}} like this to toggle the {{b.dropdown.menu}} component:"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.dropdown.container([
							new b.dropdown.button({ color: "secondary" }, "Dropdown button"),
							new b.dropdown.menu([
								new b.dropdown.item({ href: "#" }, "Action"),
								new b.dropdown.item({ href: "#" }, "Another action"),
								new b.dropdown.item({ href: "#" }, "Something else here"),
							]),
						]);
					},
				}),
				new e.text(
					"While {{b.dropdown.button}} is the recommended control for a dropdown toggle, there might be situations where you have to use an {{b.dropdown.button(href:'')}} component that create {{h.a}} component. {{bsts}} automaticly add {{role='button'}} property which recomended by Bootstrap to appropriately convey control’s purpose to assistive technologies such as screen readers."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.dropdown.container([
							new b.dropdown.button(
								{ color: "secondary", href: "#" },
								"Dropdown link"
							),
							new b.dropdown.menu([
								new b.dropdown.item({ href: "#" }, "Action"),
								new b.dropdown.item({ href: "#" }, "Another action"),
								new b.dropdown.item({ href: "#" }, "Something else here"),
							]),
						]);
					},
				}),

				new e.text(
					"The best part is you can do this with any button {{color}} variant, too:"
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "info", "warning", "danger"].map(
							(i) => {
								return new b.dropdown.container([
									new b.dropdown.button(
										{ color: i as core.bsType.btnColor },
										core.uppercaseFirst(i)
									),
									new b.dropdown.menu([
										new b.dropdown.item({ href: "#" }, "Action"),
										new b.dropdown.item({ href: "#" }, "Another action"),
										new b.dropdown.item({ href: "#" }, "Something else here"),
										new b.dropdown.divider(),
										new b.dropdown.item({ href: "#" }, "Separated link"),
									]),
								]);
							}
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Split button"),
				new e.text(
					"Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of {{b.dropdown.button({split:true})}} for proper spacing around the dropdown caret."
				),
				new e.text(
					"Bootstrap use this extra property to reduce the horizontal {{padding}} on either side of the caret by 25% and remove the {{margin-left}} that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "info", "warning", "danger"].map(
							(i) => {
								return new b.dropdown.container([
									new b.button(
										{ color: i as core.bsType.btnColor },
										core.uppercaseFirst(i)
									),
									new b.dropdown.button({
										color: i as core.bsType.btnColor,
										split: true,
									}),
									new b.dropdown.menu([
										new b.dropdown.item({ href: "#" }, "Action"),
										new b.dropdown.item({ href: "#" }, "Another action"),
										new b.dropdown.item({ href: "#" }, "Something else here"),
										new b.dropdown.divider(),
										new b.dropdown.item({ href: "#" }, "Separated link"),
									]),
								]);
							}
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Sizing"),
				new e.text(
					"Button dropdowns work with buttons of all sizes, including default and split dropdown buttons."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						let menu = new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]);

						return [
							new b.dropdown.container([
								new b.dropdown.button(
									{ color: "secondary", weight: "lg" },
									"Large button "
								),
								menu,
							]),
							new b.dropdown.container([
								new b.button(
									{ color: "secondary", weight: "lg" },
									"Large split button"
								),
								new b.dropdown.button({
									color: "secondary",
									weight: "lg",
									split: true,
								}),
								menu,
							]),
						];
					},
				}),

				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						let menu = new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]);

						return [
							new b.dropdown.container([
								new b.dropdown.button(
									{ color: "secondary", weight: "sm" },
									"Small button "
								),
								menu,
							]),
							new b.dropdown.container([
								new b.button(
									{ color: "secondary", weight: "sm" },
									"Small split button"
								),
								new b.dropdown.button({
									color: "secondary",
									weight: "sm",
									split: true,
								}),
								menu,
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Dark dropdowns"),
				new e.text(
					"Opt into darker dropdowns to match a dark navbar or custom style by adding {{.dropdown-menu-dark}} onto an existing {{.dropdown-menu}}. No changes are required to the dropdown items."
				),
				new e.alert(
					{ color: "warning", callout: true },
					"{{b::Heads up!}} Dark variants for components were deprecated in v5.3.0 with the introduction of color modes. Instead of adding {{.dropdown-menu-dark}}, set {{theme:'dark'}} on {{b.dropdown.menu}} component, a parent wrapper ({{new b.dropdown.container}}), or the component itself."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.dropdown.container([
							new b.dropdown.button({ color: "secondary" }, "Dropdown button"),
							new b.dropdown.menu({ theme: "dark" }, [
								new b.dropdown.item({ href: "#" }, "Action"),
								new b.dropdown.item({ href: "#" }, "Another action"),
								new b.dropdown.item({ href: "#" }, "Something else here"),
								new b.dropdown.divider(),
								new b.dropdown.item({ href: "#" }, "Separated link"),
							]),
						]);
					},
				}),

				new e.text("And putting it to use in a navbar:"),

				new e.code({
					db: getContentCode(db),
					previewAttr: { bgColor: "dark" },
					output: () => {
						return new b.navbar.container(
							{ expand: "lg", theme: "dark", bgColor: "dark" },
							new b.navbar.innercontainer({ container: "fluid" }, [
								new b.navbar.brand({ href: "#" }, "Navbar"),
								new b.navbar.toggle.collapse({
									target: "#navbarNavDarkDropdown",
									controlfor: "navbarNavDarkDropdown",
								}),
								new b.navbar.collapse(
									{ id: "navbarNavDarkDropdown" },
									new b.navbar.itemcontainer([
										new b.navbar.item({ dropdown: true }, [
											new b.dropdown.button({ navItem: true }, "Dropdown"),
											new b.dropdown.menu([
												new b.dropdown.item({ href: "#" }, "Action"),
												new b.dropdown.item(
													{ href: "#" },
													"Another action"
												),
												new b.dropdown.item(
													{ href: "#" },
													"Something else here"
												),
												new b.dropdown.divider(),
												new b.dropdown.item(
													{ href: "#" },
													"Separated link"
												),
											]),
										]),
									])
								),
							])
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Directions"),
				new e.alert(
					{ color: "info", callout: true },
					"{{b::Directions are flipped in RTL mode}}. As such, {{.dropstart}} will appear on the right side."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Centered"),
				new e.text(
					"Make the dropdown menu centered below the toggle with {{drop:'down-center'}} on the {{b.dropdown.container}} component."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.dropdown.container({ drop: "down-center" }, [
							new b.dropdown.button({ color: "secondary" }, "Centered dropdown"),
							new b.dropdown.menu([
								new b.dropdown.item({ href: "#" }, "Action"),
								new b.dropdown.item({ href: "#" }, "Action two"),
								new b.dropdown.item({ href: "#" }, "Action three"),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Dropup"),
				new e.text(
					"Trigger dropdown menus above elements by adding {{drop:'up'}} on the {{b.dropdown.container}} component."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						let menu = new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]);

						return [
							new b.dropdown.container({ drop: "up" }, [
								new b.dropdown.button({ color: "secondary" }, "Dropup "),
								menu,
							]),
							new b.dropdown.container({ drop: "up" }, [
								new b.button({ color: "secondary" }, "Split dropup"),
								new b.dropdown.button({ color: "secondary", split: true }),
								menu,
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Dropup centered"),
				new e.text(
					"Make the dropup menu centered above the toggle with {{drop:'up-center'}} on the {{b.dropdown.container}} component."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.dropdown.container({ drop: "up-center" }, [
							new b.dropdown.button({ color: "secondary" }, "Centered dropup"),
							new b.dropdown.menu([
								new b.dropdown.item({ href: "#" }, "Action"),
								new b.dropdown.item({ href: "#" }, "Action two"),
								new b.dropdown.item({ href: "#" }, "Action three"),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Dropend"),
				new e.text(
					"Trigger dropdown menus at the right of the elements by adding {{drop:'end'}} on the {{b.dropdown.container}} component."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						let menu = new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]);

						return [
							new b.dropdown.container({ drop: "end" }, [
								new b.dropdown.button({ color: "secondary" }, "Dropend "),
								menu,
							]),
							new b.dropdown.container({ drop: "end" }, [
								new b.button({ color: "secondary" }, "Split dropend"),
								new b.dropdown.button({ color: "secondary", split: true }),
								menu,
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Dropstart"),
				new e.text(
					"Trigger dropdown menus at the left of the elements by adding {{drop:'start'}} on the {{b.dropdown.container}} component."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						let menu = new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]);

						return [
							new b.dropdown.container({ drop: "start" }, [
								new b.dropdown.button({ color: "secondary" }, " Dropstart"),
								menu,
							]),
							new b.dropdown.container({ drop: "start" }, [
								//the order is split -> menu -> button
								new b.dropdown.button({ color: "secondary", split: true }),
								menu,
								new b.button({ color: "secondary" }, "Split dropstart"),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Menu items"),
				new e.text("You can use {{new b.dropdown.item}} elements as dropdown items."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.dropdown.container([
							new b.dropdown.button({ color: "secondary" }, "Dropdown button"),
							new b.dropdown.menu([
								new b.dropdown.item("Action"),
								new b.dropdown.item("Another action"),
								new b.dropdown.item("Something else here"),
							]),
						]);
					},
				}),
				new e.text(
					"You can also create non-interactive dropdown items with {{b.dropdown.text}}. Feel free to style further with custom CSS or text utilities."
				),
				new e.alert(
					{ color: "info", callout: true },
					"{{b::Heads up!}} In this example, Bootstrap use {{debug='true'}} for documentation only."
				),

				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.dropdown.menu({ debug: true }, [
							new b.dropdown.text("Dropdown item text"),
							new b.dropdown.item("Action"),
							new b.dropdown.item("Another action"),
							new b.dropdown.item("Something else here"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Active"),
				new e.text(
					"Add {{active:true}} to items in the {{b.dropdown.item}} to {{b::style them as active}}."
				),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.dropdown.menu({ debug: true }, [
							new b.dropdown.item({ href: "#" }, "Regular link"),
							new b.dropdown.item({ href: "#", active: true }, "Active link"),
							new b.dropdown.item({ href: "#" }, "Another link"),
						]);
					},
				}),
				new e.text(
					"By default {{bsts}} set active item as {{aria-current:'true'}}. To convey the active state to assistive technologies, set {{current:'page'}} property — when you using the {{page}} value for the current page."
				),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.dropdown.menu({ debug: true }, [
							new b.dropdown.item({ href: "#" }, "Regular link"),
							new b.dropdown.item(
								{ href: "#", active: true, current: "page" },
								"Active link"
							),
							new b.dropdown.item({ href: "#" }, "Another link"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Disabled"),
				new e.text(
					"Add {{disabled:true}} to {{b.dropdown.item}} in the {{b.dropdown.menu}} to {{b::style them as disabled}}."
				),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.dropdown.menu({ debug: true }, [
							new b.dropdown.item({ href: "#" }, "Regular link"),
							new b.dropdown.item({ href: "#", disabled: true }, "Disabled link"),
							new b.dropdown.item({ href: "#" }, "Another link"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Menu alignment"),
				new e.text(
					"By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. You can change this with the directional .{{positionView}} property, but you can also control them with additional modifier classes."
				),
				new e.text(
					"Add {{positionView:'end'}} to a {{b.dropdown.menu}} to right align the dropdown menu. Directions are mirrored when using Bootstrap in RTL, meaning {{positionView:'end'}} will appear on the left side."
				),
				new e.alert(
					{ color: "info", callout: true },
					"{{b::Heads up!}} Dropdowns are positioned thanks to Popper except when they are contained in a navbar."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.dropdown.container([
							new b.dropdown.button(
								{ color: "secondary" },
								"Right-aligned menu example"
							),
							new b.dropdown.menu({ positionView: "end" }, [
								new b.dropdown.item("Action"),
								new b.dropdown.item("Another action"),
								new b.dropdown.item("Something else here"),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Responsive alignment"),
				new e.text(
					"If you want to use responsive alignment, disable Popper dynamic positioning by set the {{dynamicPosition:false}} property and use the responsive variation classes."
				),
				new e.text(
					"To align {{b::right}} the dropdown menu with the given breakpoint or larger, set {{positionView:'{sm|md|lg|xl|xxl}-end'}}."
				),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new b.dropdown.container([
							new b.dropdown.button(
								{ color: "secondary" },
								"Left-aligned but right aligned when large screen"
							),
							new b.dropdown.menu({ positionView: "lg-end", positioning: "static" }, [
								new b.dropdown.item("Action"),
								new b.dropdown.item("Another action"),
								new b.dropdown.item("Something else here"),
							]),
						]);
					},
				}),
				new e.text(
					"To align {{b::left}} the dropdown menu with the given breakpoint or larger, set {{positionView:['end','{sm|md|lg|xl|xxl}-start']}}."
				),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new b.dropdown.container([
							new b.dropdown.button(
								{ color: "secondary" },
								"Right-aligned but left aligned when large screen"
							),
							new b.dropdown.menu(
								{ positionView: ["end", "lg-start"], positioning: "static" },
								[
									new b.dropdown.item("Action"),
									new b.dropdown.item("Another action"),
									new b.dropdown.item("Something else here"),
								]
							),
						]);
					},
				}),
				new e.text(
					"Note that you don’t need to add a {{dynamicPosition:false}} property to {{b.dropdown.menu}} in navbars, since Popper isn’t used in navbars."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Alignment options"),
				new e.text(
					"Taking most of the options shown above, here’s a small kitchen sink demo of various dropdown alignment options in one place."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							{ label: "Dropdown" },
							{ label: "Right-aligned menu", positionView: "end" },
							{ label: "Left-aligned, right-aligned lg", positionView: "lg-end" },
							{
								label: "Right-aligned, left-aligned lg",
								positionView: ["end", "lg-start"],
							},
							{ label: "Dropstart", drop: "start" },
							{ label: "Dropend", drop: "end" },
							{ label: "Dropup", drop: "up" },
						].map((i) => {
							return new b.dropdown.container({ drop: i.drop as Drop }, [
								new b.dropdown.button({ color: "secondary" }, i.label),
								new b.dropdown.menu(
									{
										positionView: i.positionView as
											| core.bsType.dropdownMenuPositionView
											| core.bsType.dropdownMenuPositionView[],
									},
									[
										new b.dropdown.item("Action"),
										new b.dropdown.item("Another action"),
										new b.dropdown.item("Something else here"),
									]
								),
							]);
						});
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Menu content")]),

			//----------------------

			new e.section([
				new e.subtitle("Headers"),
				new e.text(
					"Add a {{b.dropdown.header}} to label sections of actions in any dropdown menu."
				),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.dropdown.menu({ debug: true }, [
							new b.dropdown.header("Dropdown header"),
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Dividers"),
				new e.text("Separate groups of related menu items with a {{b.dropdown.divider}}."),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.dropdown.menu({ debug: true }, [
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Text"),
				new e.text(
					"Place any freeform text within a dropdown menu with text and use {{nav:docs/utilities/spacing::spacing utilities}}. Note that you’ll likely need additional sizing styles to constrain the menu width."
				),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.dropdown.menu(
							{
								debug: true,
								padding: 4,
								textColor: "body-secondary",
								style: { maxWidth: "200px" },
							},
							[
								new h.p(
									"Some example text that's free-flowing within the dropdown menu."
								),
								new h.p({ marginBottom: 0 }, "And this is more example text."),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Forms"),
				new e.text(
					"Put a form using {{h.form}} within a dropdown menu, or make it into a dropdown menu, and use {{nav:docs/utilities/spacing::margin or padding utilities}} to give it the negative space you require."
				),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					output: () => {
						return new b.dropdown.menu(
							{
								debug: true,
							},
							[
								new h.form(
									{
										padding: 3,
									},
									[
										new h.div({ marginBottom: 3 }, [
											new b.label(
												{ for: "exampleDropdownFormEmail1" },
												"Email address"
											),
											new b.input({
												type: "email",
												id: "exampleDropdownFormEmail1",
												placeholder: "email@example.com",
											}),
										]),
										new h.div({ marginBottom: 3 }, [
											new b.label(
												{ for: "exampleDropdownFormPassword1" },
												"Password"
											),
											new b.input({
												type: "email",
												id: "exampleDropdownFormPassword1",
												placeholder: "email@example.com",
											}),
										]),
										new h.div({ marginBottom: 3 }, [
											new h.div({ class: "form-check" }, [
												new b.input({
													type: "checkbox",
													id: "dropdownCheck",
													placeholder: "email@example.com",
												}),
												new b.label(
													{ for: "dropdownCheck" },
													"Remember me"
												),
											]),
										]),
										new b.button({ type: "submit" }, "Sign in"),
									]
								),
								new b.dropdown.divider(),
								new b.dropdown.item({ href: "#" }, "New around here? Sign up"),
								new b.dropdown.item({ href: "#" }, "Forgot password?"),
							]
						);
					},
				}),

				new e.text(
					"Use {{h.div({class:'dropdown'})}} to prevent small form layout under menu:"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div({ class: "dropdown" }, [
							new b.dropdown.button({ autoClose: "outside" }, "Dropdown form"),
							new b.dropdown.menu(
								new h.form(
									{
										padding: 3,
									},
									[
										new h.div({ marginBottom: 3 }, [
											new b.label(
												{ for: "exampleDropdownFormEmail2" },
												"Email address"
											),
											new b.input({
												type: "email",
												id: "exampleDropdownFormEmail2",
												placeholder: "email@example.com",
											}),
										]),
										new h.div({ marginBottom: 3 }, [
											new b.label(
												{ for: "exampleDropdownFormPassword2" },
												"Password"
											),
											new b.input({
												type: "email",
												id: "exampleDropdownFormPassword2",
												placeholder: "email@example.com",
											}),
										]),
										new h.div({ marginBottom: 3 }, [
											new h.div({ class: "form-check" }, [
												new b.input({
													type: "checkbox",
													id: "dropdownCheck2",
													placeholder: "email@example.com",
												}),
												new b.label(
													{ for: "dropdownCheck2" },
													"Remember me"
												),
											]),
										]),
										new b.button({ type: "submit" }, "Sign in"),
									]
								)
							),
						]);
					},
				}),
				new e.text(
					"Use {{b.dropdown.container}} and set{{ style:{width:''} }}property on {{b.dropdown.menu}} to prevent small form layout under menu:"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.dropdown.container([
							new b.dropdown.button({ autoClose: "outside" }, "Dropdown form"),
							new b.dropdown.menu(
								{ style: { width: "18rem" } },
								new h.form(
									{
										padding: 3,
									},
									[
										new h.div({ marginBottom: 3 }, [
											new b.label(
												{ for: "exampleDropdownFormEmail3" },
												"Email address"
											),
											new b.input({
												type: "email",
												id: "exampleDropdownFormEmail3",
												placeholder: "email@example.com",
											}),
										]),
										new h.div({ marginBottom: 3 }, [
											new b.label(
												{ for: "exampleDropdownFormPassword3" },
												"Password"
											),
											new b.input({
												type: "email",
												id: "exampleDropdownFormPassword3",
												placeholder: "email@example.com",
											}),
										]),
										new h.div({ marginBottom: 3 }, [
											new h.div({ class: "form-check" }, [
												new b.input({
													type: "checkbox",
													id: "dropdownCheck3",
													placeholder: "email@example.com",
												}),
												new b.label(
													{ for: "dropdownCheck3" },
													"Remember me"
												),
											]),
										]),
										new b.button({ type: "submit" }, "Sign in"),
									]
								)
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Dropdown options"),
				new e.text(
					"Use {{menuOffset}} or {{menuReference}} property on {{b.dropdown.button}} to change the location of the dropdown."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						let menu = new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]);

						return [
							new b.dropdown.container([
								new b.dropdown.button(
									{ color: "secondary", viewOffset: "10,20" },
									"Offset "
								),
								menu,
							]),
							new b.dropdown.container([
								new b.button({ color: "secondary" }, "Reference"),
								new b.dropdown.button({
									color: "secondary",
									split: true,
									reference: "parent",
								}),
								menu,
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Auto close behavior"),
				new e.text(
					"By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the {{menuAutoClose}} option to change this behavior of the dropdown."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						let menu = new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]);

						return [
							new b.dropdown.container([
								new b.dropdown.button({ color: "secondary" }, "Default dropdown "),
								menu,
							]),
							new b.dropdown.container([
								new b.dropdown.button(
									{ color: "secondary", autoClose: "inside" },
									"Clickable inside "
								),
								menu,
							]),
							new b.dropdown.container([
								new b.dropdown.button(
									{ color: "secondary", autoClose: "outside" },
									"Clickable outside "
								),
								menu,
							]),
							new b.dropdown.container([
								new b.dropdown.button(
									{ color: "secondary", autoClose: "manual" },
									"Manual close "
								),
								menu,
							]),
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
					"As part of Bootstrap’s evolving CSS variables approach, dropdowns now use local CSS variables on {{.dropdown-menu}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
				),

				new e.codepreview({
					type: "css",
					title: "scss/_dropdown.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_dropdown.scss",
					code: `
						--#{$prefix}dropdown-zindex: #{$zindex-dropdown};
						--#{$prefix}dropdown-min-width: #{$dropdown-min-width};
						--#{$prefix}dropdown-padding-x: #{$dropdown-padding-x};
						--#{$prefix}dropdown-padding-y: #{$dropdown-padding-y};
						--#{$prefix}dropdown-spacer: #{$dropdown-spacer};
						@include rfs($dropdown-font-size, --#{$prefix}dropdown-font-size);
						--#{$prefix}dropdown-color: #{$dropdown-color};
						--#{$prefix}dropdown-bg: #{$dropdown-bg};
						--#{$prefix}dropdown-border-color: #{$dropdown-border-color};
						--#{$prefix}dropdown-border-radius: #{$dropdown-border-radius};
						--#{$prefix}dropdown-border-width: #{$dropdown-border-width};
						--#{$prefix}dropdown-inner-border-radius: #{$dropdown-inner-border-radius};
						--#{$prefix}dropdown-divider-bg: #{$dropdown-divider-bg};
						--#{$prefix}dropdown-divider-margin-y: #{$dropdown-divider-margin-y};
						--#{$prefix}dropdown-box-shadow: #{$dropdown-box-shadow};
						--#{$prefix}dropdown-link-color: #{$dropdown-link-color};
						--#{$prefix}dropdown-link-hover-color: #{$dropdown-link-hover-color};
						--#{$prefix}dropdown-link-hover-bg: #{$dropdown-link-hover-bg};
						--#{$prefix}dropdown-link-active-color: #{$dropdown-link-active-color};
						--#{$prefix}dropdown-link-active-bg: #{$dropdown-link-active-bg};
						--#{$prefix}dropdown-link-disabled-color: #{$dropdown-link-disabled-color};
						--#{$prefix}dropdown-item-padding-x: #{$dropdown-item-padding-x};
						--#{$prefix}dropdown-item-padding-y: #{$dropdown-item-padding-y};
						--#{$prefix}dropdown-header-color: #{$dropdown-header-color};
						--#{$prefix}dropdown-header-padding-x: #{$dropdown-header-padding-x};
						--#{$prefix}dropdown-header-padding-y: #{$dropdown-header-padding-y};
					`,
				}),

				new e.alert({ color: "info", callout: true }, [
					"Dropdown items include at least one variable that is not set on {{.dropdown}}. This allows you to provide a new value while Bootstrap defaults to a fallback value.",
					new h.ul([new h.li("{{--bs-dropdown-item-border-radius}}")]),
				]),

				new e.text(
					"Customization through CSS variables can be seen on the {{.dropdown-menu-dark}} class where Bootstrap override specific values without adding duplicate CSS selectors."
				),

				new e.codepreview({
					type: "css",
					title: "scss/_dropdown.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_dropdown.scss",
					code: `
						--#{$prefix}dropdown-color: #{$dropdown-dark-color};
						--#{$prefix}dropdown-bg: #{$dropdown-dark-bg};
						--#{$prefix}dropdown-border-color: #{$dropdown-dark-border-color};
						--#{$prefix}dropdown-box-shadow: #{$dropdown-dark-box-shadow};
						--#{$prefix}dropdown-link-color: #{$dropdown-dark-link-color};
						--#{$prefix}dropdown-link-hover-color: #{$dropdown-dark-link-hover-color};
						--#{$prefix}dropdown-divider-bg: #{$dropdown-dark-divider-bg};
						--#{$prefix}dropdown-link-hover-bg: #{$dropdown-dark-link-hover-bg};
						--#{$prefix}dropdown-link-active-color: #{$dropdown-dark-link-active-color};
						--#{$prefix}dropdown-link-active-bg: #{$dropdown-dark-link-active-bg};
						--#{$prefix}dropdown-link-disabled-color: #{$dropdown-dark-link-disabled-color};
						--#{$prefix}dropdown-header-color: #{$dropdown-dark-header-color};
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sass variables"),
				new e.text("Variables for all dropdowns:"),

				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$dropdown-min-width:                10rem;
						$dropdown-padding-x:                0;
						$dropdown-padding-y:                .5rem;
						$dropdown-spacer:                   .125rem;
						$dropdown-font-size:                $font-size-base;
						$dropdown-color:                    var(--#{$prefix}body-color);
						$dropdown-bg:                       var(--#{$prefix}body-bg);
						$dropdown-border-color:             var(--#{$prefix}border-color-translucent);
						$dropdown-border-radius:            $border-radius;
						$dropdown-border-width:             var(--#{$prefix}border-width);
						$dropdown-inner-border-radius:      calc($dropdown-border-radius - $dropdown-border-width); // stylelint-disable-line function-disallowed-list
						$dropdown-divider-bg:               $dropdown-border-color;
						$dropdown-divider-margin-y:         $spacer * .5;
						$dropdown-box-shadow:               $box-shadow;

						$dropdown-link-color:               var(--#{$prefix}body-color);
						$dropdown-link-hover-color:         $dropdown-link-color;
						$dropdown-link-hover-bg:            var(--#{$prefix}tertiary-bg);

						$dropdown-link-active-color:        $component-active-color;
						$dropdown-link-active-bg:           $component-active-bg;

						$dropdown-link-disabled-color:      var(--#{$prefix}tertiary-color);

						$dropdown-item-padding-y:           $spacer * .25;
						$dropdown-item-padding-x:           $spacer;

						$dropdown-header-color:             $gray-600;
						$dropdown-header-padding-x:         $dropdown-item-padding-x;
						$dropdown-header-padding-y:         $dropdown-padding-y;
						// fusv-disable
						$dropdown-header-padding:           $dropdown-header-padding-y $dropdown-header-padding-x; // Deprecated in v5.2.0
						// fusv-enable
					`,
				}),

				new e.text(
					"Variables for the {{nav:docs/components/dropdowns#dark_dropdowns::dark dropdown}}:"
				),

				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$dropdown-dark-color:               $gray-300;
						$dropdown-dark-bg:                  $gray-800;
						$dropdown-dark-border-color:        $dropdown-border-color;
						$dropdown-dark-divider-bg:          $dropdown-divider-bg;
						$dropdown-dark-box-shadow:          null;
						$dropdown-dark-link-color:          $dropdown-dark-color;
						$dropdown-dark-link-hover-color:    $white;
						$dropdown-dark-link-hover-bg:       rgba($white, .15);
						$dropdown-dark-link-active-color:   $dropdown-link-active-color;
						$dropdown-dark-link-active-bg:      $dropdown-link-active-bg;
						$dropdown-dark-link-disabled-color: $gray-500;
						$dropdown-dark-header-color:        $gray-500;
					`,
				}),

				new e.text(
					"Variables for the CSS-based carets that indicate a dropdown’s interactivity:"
				),

				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$caret-width:                 .3em;
						$caret-vertical-align:        $caret-width * .85;
						$caret-spacing:               $caret-width * .85;
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sass mixins"),
				new e.text(
					"Mixins are used to generate the CSS-based carets and can be found in {{scss/mixins/_caret.scss}}."
				),

				new e.codepreview({
					type: "css",
					title: "scss/mixins/_caret.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_caret.scss",
					code: `
						@mixin caret-down($width: $caret-width) {
						border-top: $width solid;
						border-right: $width solid transparent;
						border-bottom: 0;
						border-left: $width solid transparent;
						}

						@mixin caret-up($width: $caret-width) {
						border-top: 0;
						border-right: $width solid transparent;
						border-bottom: $width solid;
						border-left: $width solid transparent;
						}

						@mixin caret-end($width: $caret-width) {
						border-top: $width solid transparent;
						border-right: 0;
						border-bottom: $width solid transparent;
						border-left: $width solid;
						}

						@mixin caret-start($width: $caret-width) {
						border-top: $width solid transparent;
						border-right: $width solid;
						border-bottom: $width solid transparent;
						}

						@mixin caret(
						$direction: down,
						$width: $caret-width,
						$spacing: $caret-spacing,
						$vertical-align: $caret-vertical-align
						) {
						@if $enable-caret {
							&::after {
							display: inline-block;
							margin-left: $spacing;
							vertical-align: $vertical-align;
							content: "";
							@if $direction == down {
								@include caret-down($width);
							} @else if $direction == up {
								@include caret-up($width);
							} @else if $direction == end {
								@include caret-end($width);
							}
							}

							@if $direction == start {
							&::after {
								display: none;
							}

							&::before {
								display: inline-block;
								margin-right: $spacing;
								vertical-align: $vertical-align;
								content: "";
								@include caret-start($width);
							}
							}

							&:empty::after {
							margin-left: 0;
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
					"Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the {{.show}} class on the parent {{.dropdown-menu}}. The {{data-bs-toggle='dropdown'}} attribute is relied on for closing dropdown menus at an application level, so it’s a good idea to always use it."
				),

				new e.alert(
					{ color: "info", callout: true },
					"On touch-enabled devices, opening a dropdown adds empty {{mouseover}} handlers to the immediate children of the {{<body>}} element. This admittedly ugly hack is necessary to work around a {{https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html::quirk in iOS’ event delegation}}, which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty {{mouseover}} handlers are removed."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Via data attributes"),
				new e.text(
					"Add {{data-bs-toggle='dropdown'}} to a link or button to toggle a dropdown."
				),
				new e.codepreview({
					type: "html",
					code: `
						<div class="dropdown">
						<button type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown trigger
						</button>
						<ul class="dropdown-menu">
							...
						</ul>
						</div>
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Via JavaScript"),
				new e.alert(
					{ color: "warning", callout: true },
					"Dropdowns must have {{data-bs-toggle='dropdown'}} on their trigger element, regardless of whether you call your dropdown via JavaScript or use the data-api."
				),
				new e.text("Call the dropdowns via JavaScript:"),
				new e.codepreview({
					type: "js",
					code: `
						const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
						const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))
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
							"{{autoClose}}",
							"boolean, string",
							"{{true}}",
							[
								"Configure the auto close behavior of the dropdown:",
								new h.ul([
									new h.li(
										"{{true}} - the dropdown will be closed by clicking outside or inside the dropdown menu."
									),
									new h.li(
										"{{false}} - the dropdown will be closed by clicking the toggle button and manually calling hide or toggle method. (Also will not be closed by pressing {{k::Esc}} key)"
									),
									new h.li(
										"{{'inside'}} - the dropdown will be closed (only) by clicking inside the dropdown menu."
									),
									new h.li(
										"{{'outside'}} - the dropdown will be closed (only) by clicking outside the dropdown menu."
									),
								]),
								"Note: the dropdown can always be closed with the {{k::Esc}} key.",
							],
						],
						[
							"{{boundary}}",
							"boolean, string",
							"{{'clippingParents'}}",
							"Overflow constraint boundary of the dropdown menu (applies only to Popper’s preventOverflow modifier). By default it’s {{clippingParents}} and can accept an Element reference (via JavaScript only). For more information refer to Popper’s {{https://popper.js.org/docs/v2/utils/detect-overflow/#boundary::detectOverflow docs}}.",
						],
						[
							"{{display}}",
							"string, element",
							"{{'dynamic'}}",
							"By default, Bootstrap use Popper for dynamic positioning. Disable this with {{static}}.",
						],
						[
							"{{offset}}",
							"array, string, function",
							"{{[0, 2]}}",
							"Offset of the dropdown relative to its target. You can pass a string in data attributes with comma separated values like: {{data-bs-offset='10,20'}}. When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: {{https://popper.js.org/docs/v2/modifiers/offset/#skidding-1::skidding}}, {{https://popper.js.org/docs/v2/modifiers/offset/#distance-1::distance}}. For more information refer to Popper’s {{https://popper.js.org/docs/v2/modifiers/offset/#options::offset docs}}.",
						],
						[
							"{{popperConfig}}",
							"null, object, function",
							"{{null}}",
							"To change Bootstrap’s default Popper config, see {{https://popper.js.org/docs/v2/constructors/#options::Popper’s configuration}}. When a function is used to create the Popper configuration, it’s called with an object that contains the Bootstrap’s default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper.",
						],
						[
							"{{reference}}",
							"string, element, object, string",
							"{{'toggle'}}",
							"Reference element of the dropdown menu. Accepts the values of {{'toggle'}}, {{'parent'}}, an Element reference or an object providing {{getBoundingClientRect}}. For more information refer to Popper’s {{https://popper.js.org/docs/v2/constructors/#createpopper::constructor docs}} and {{https://popper.js.org/docs/v2/virtual-elements/::virtual element docs}}.",
						],
					],
				}),
			]),

			//----------------------

			new e.section([
				new e.xsubtitle("Using function with {{popperConfig}} "),
				new e.codepreview({
					type: "js",
					code: `
						const dropdown = new bootstrap.Dropdown(element, {
						popperConfig(defaultBsPopperConfig) {
							// const newPopperConfig = {...}
							// use defaultBsPopperConfig if needed...
							// return newPopperConfig
						}
						})
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Methods"),
				new e.table({
					item: [
						["Name", "Description"],
						[
							"{{dispose}}",
							"Destroys an element’s dropdown. (Removes stored data on the DOM element)",
						],
						[
							"{{getInstance}}",
							"Static method which allows you to get the dropdown instance associated to a DOM element, you can use it like this: {{bootstrap.Dropdown.getInstance(element)}}.",
						],
						[
							"{{getOrCreateInstance}}",
							"Static method which returns a dropdown instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Dropdown.getOrCreateInstance(element)}}.",
						],
						[
							"{{hide}}",
							"Hides the dropdown menu of a given navbar or tabbed navigation.",
						],
						[
							"{{show}}",
							"Shows the dropdown menu of a given navbar or tabbed navigation.",
						],
						[
							"{{toggle}}",
							"Toggles the dropdown menu of a given navbar or tabbed navigation.",
						],
						["{{update}}", "Updates the position of an element’s dropdown."],
					],
				}),

				new e.code({
					db: getContentCode(db),
					outputAttr: { position: "relative" },
					showConsole: true,
					output: () => {
						const dropdownMenu = new b.dropdown.menu(
							{
								id: "example-dropdown",
								reference: "parent",
							},
							[
								new b.dropdown.item({ href: "#" }, "Action"),
								new b.dropdown.item({ href: "#" }, "Another action"),
								new b.dropdown.item({ href: "#" }, "Something else here"),
							]
						);

						const dropdownContainer = new b.dropdown.container([
							new b.dropdown.button("Dropdown button"),
							dropdownMenu,
						]);

						const initButton = new b.button(
							{
								color: "success",
								on: {
									click: (event) => {
										const elem = b.dropdown.init("#example-dropdown");
										e.console(
											event.target as Element,
											"b.dropdown.init",
											elem ? elem : "null",
											elem ? "success" : "danger"
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
										const elem = b.dropdown.getInstance("#example-dropdown");
										e.console(
											event.target as Element,
											"b.dropdown.getInstance",
											elem ? elem : "null",
											elem ? "success" : "danger"
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
										const elem =
											b.dropdown.getOrCreateInstance("#example-dropdown");
										e.console(
											event.target as Element,
											"b.dropdown.getOrCreateInstance",
											elem,
											elem ? "success" : "danger"
										);
									},
								},
							},
							"getOrCreateInstance"
						);

						const hideButton = new b.button(
							{
								on: {
									click: () => {
										b.dropdown.hide("#example-dropdown");
									},
								},
							},
							"hide"
						);

						const showButton = new b.button(
							{
								on: {
									click: () => {
										b.dropdown.show("#example-dropdown");
									},
								},
							},
							"show"
						);

						const toggleButton = new b.button(
							{
								on: {
									click: () => {
										b.dropdown.toggle("#example-dropdown");
									},
								},
							},
							"toggle"
						);
						const updateButton = new b.button(
							{
								on: {
									click: () => {
										b.dropdown.update("#example-dropdown");
									},
								},
							},
							"update"
						);

						const disposeButton = new b.button(
							{
								color: "danger",
								on: {
									click: () => {
										b.dropdown.dispose("#example-dropdown");
									},
								},
							},
							"dispose"
						);

						const buttonGroup = new b.btngroup({ vertical: true, weight: "sm" }, [
							initButton,
							getInstanceButton,
							getOrCreateInstanceButton,
							hideButton,
							showButton,
							toggleButton,
							updateButton,
							disposeButton,
						]);

						const previewContainer = new h.div(
							{
								width: 100,
								marginEnd: 3,
								bgColor: "body-tertiary",
								rounded: true,
								position: "relative",
							},
							[
								new h.div(
									{
										position: "absolute",
										top: 50,
										start: 50,
										tMiddle: true,
									},
									dropdownContainer
								),
							]
						);

						const controlContainer = new h.div(
							{
								marginStart: "auto",
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
					"All dropdown events are fired at the toggling element and then bubbled up. So you can also add event listeners on the {{.dropdown-menu}}’s parent element. {{hide.bs.dropdown}} and {{hidden.bs.dropdown}} events have a {{clickEvent}} property (only when the original Event type is {{click}}) that contains an Event Object for the click event."
				),
				new e.table({
					item: [
						["Event type", "Description"],
						[
							"{{hide.bs.dropdown}}",
							"Fires immediately when the {{hide}} instance method has been called.",
						],
						[
							"{{hidden.bs.dropdown}}",
							"Fired when the dropdown has finished being hidden from the user and CSS transitions have completed.",
						],
						[
							"{{show.bs.dropdown}}",
							"Fires immediately when the {{show}} instance method is called.",
						],
						[
							"{{shown.bs.dropdown}}",
							"Fired when the dropdown has been made visible to the user and CSS transitions have completed.",
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

						return new b.dropdown.container(
							{
								on: {
									"shown.bs.dropdown": (event) => {
										const evnt = event as EventWithTargetAndRelatedTarget;
										e.console(
											evnt.target,
											"shown.bs.dropdown",
											`Target: {{b::${core.elemInfo(evnt.target)}}}{{br}}
											RelatedTarget: {{b::${core.elemInfo(evnt.relatedTarget)}}}`,
											"success"
										);
									},

									"hidden.bs.dropdown": (event) => {
										const target = event.target as Element;
										e.console(
											target,
											"hidden.bs.dropdown",
											`Target: {{b::${core.elemInfo(target)}}}`,
											"success"
										);
									},
								},
							},
							[
								new b.dropdown.button({ color: "secondary" }, "Dropdown button"),
								new b.dropdown.menu([
									new b.dropdown.item({ href: "#" }, "Action"),
									new b.dropdown.item({ href: "#" }, "Another action"),
									new b.dropdown.item({ href: "#" }, "Something else here"),
								]),
							]
						);
					},
				}),
			]),
		];
	},
};

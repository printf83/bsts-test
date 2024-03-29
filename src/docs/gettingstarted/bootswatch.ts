import { b, core, h, I } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
type ITooltip = I.b.tooltip;
type IPopover = I.b.popover;

export const bootswatch: IContent = {
	title: "Bootswatch",
	description: "Free themes for Bootstrap from Bootswatch",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section(),

			new e.section([
				new e.title({ moreInfo: "docs/components/navbar#color_schemes" }, "Navbars"),

				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "grid", gap: 3 },
					output: () => {
						const navbarItem = () => {
							const id = core.UUID();

							return new b.navbar.innercontainer({ container: "fluid" }, [
								new b.navbar.brand({ href: "#" }, "Navbar"),
								new b.navbar.toggle.collapse({
									target: `#${id}`,
									controlfor: id,
									label: "Toggle navigation",
								}),
								new b.navbar.collapse({ id: id }, [
									new b.navbar.itemcontainer(
										{
											marginEnd: "auto",
											marginBottom: [2, "lg-0"],
										},
										[
											new b.navbar.item(
												new b.navbar.link(
													{ href: "#", active: true },
													"Home"
												)
											),
											new b.navbar.item(
												new b.navbar.link({ href: "#" }, "Features")
											),
											new b.navbar.item(
												new b.navbar.link({ href: "#" }, "Pricing")
											),
											new b.navbar.item(
												new b.navbar.link({ href: "#" }, "About")
											),
											new b.navbar.item({ dropdown: true }, [
												new b.dropdown.button(
													{ navItem: true },
													"Dropdown"
												),
												new b.dropdown.menu([
													new b.dropdown.item({ href: "#" }, "Action"),
													new b.dropdown.item(
														{ href: "#" },
														"Another action"
													),
													new b.dropdown.divider(),
													new b.dropdown.item(
														{ href: "#" },
														"Something else here"
													),
												]),
											]),
										]
									),
									new h.form({ display: "flex", role: "search" }, [
										new b.input({
											type: "search",
											marginEnd: 2,
											placeholder: "Search",
											label: "Search",
										}),
										new b.button(
											{
												type: "submit",
												// outline: true
											},
											"Search"
										),
									]),
								]),
							]);
						};

						const bsWhiteRGB = core.getCSSVar("--bs-white-rgb");
						return [
							new b.navbar.container(
								{
									bgColor: "primary",
									textColorRGB: bsWhiteRGB,
								},
								navbarItem()
							),
							new b.navbar.container(
								{
									bgColor: "dark",
									textColorRGB: bsWhiteRGB,
								},
								navbarItem()
							),
							new b.navbar.container({ bgColor: "body-tertiary" }, navbarItem()),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title({ moreInfo: "docs/components/button#examples" }, "Buttons"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
							"link",
						].map((i) => {
							return new b.button(
								{ color: i as core.bsType.btnColor },
								core.uppercaseFirst(i)
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/button#disabled_state" }, "Disabled"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
							"link",
						].map((i) => {
							return new b.button(
								{ color: i as core.bsType.btnColor, disabled: true },
								core.uppercaseFirst(i)
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/button#outline_buttons" }, "Outline"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
							"link",
						].map((i) => {
							return new b.button(
								{ color: i as core.bsType.btnColor, outline: true },
								core.uppercaseFirst(i)
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/button#sizes" }, "Sizing"),
				new e.code({
					db: getContentCode(db),
					outputAttr: {
						display: "flex",
						flex: "wrap",
						alignItem: "center",
						gap: 2,
					},
					output: () => {
						return [
							new b.button({ weight: "lg" }, "Large button"),
							new b.button("Default button"),
							new b.button({ weight: "sm" }, "Small button"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/button#block_buttons" }, "Block"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div({ display: "grid", gap: 2 }, [
							new b.button("Button"),
							new b.button("Button"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/button_group#basic_example" },
					"Button group"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.btngroup({ label: "Basic example", role: "group" }, [
							new b.button("Left"),
							new b.button("Middle"),
							new b.button("Right"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/button_group#checkbox_and_radio_button_groups" },
					"Checkbox"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.btngroup(
							{ label: "Basic checkbox toggle button group", role: "group" },
							[
								new b.input({ type: "checkbox", toggle: true, id: "btncheck1" }),
								new b.label(
									{ for: "btncheck1", color: "primary", outline: true },
									"Checkbox 1"
								),

								new b.input({ type: "checkbox", toggle: true, id: "btncheck2" }),
								new b.label(
									{ for: "btncheck2", color: "primary", outline: true },
									"Checkbox 2"
								),

								new b.input({ type: "checkbox", toggle: true, id: "btncheck3" }),
								new b.label(
									{ for: "btncheck3", color: "primary", outline: true },
									"Checkbox 3"
								),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/button_group#checkbox_and_radio_button_groups" },
					"Radio"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.btngroup(
							{ label: "Basic checkbox toggle button group", role: "group" },
							[
								new b.input({
									type: "radio",
									toggle: true,
									id: "btnradio1",
									name: "btnradio",
									checked: true,
								}),
								new b.label(
									{ for: "btnradio1", color: "primary", outline: true },
									"Radio 1"
								),

								new b.input({
									type: "radio",
									toggle: true,
									id: "btnradio2",
									name: "btnradio",
								}),
								new b.label(
									{ for: "btnradio2", color: "primary", outline: true },
									"Radio 2"
								),

								new b.input({
									type: "radio",
									toggle: true,
									id: "btnradio3",
									name: "btnradio",
								}),
								new b.label(
									{ for: "btnradio3", color: "primary", outline: true },
									"Radio 3"
								),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/button_group#button_toolbar" },
					"Toolbar"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.btngroup(
							{ label: "Toolbar with button groups", role: "toolbar" },
							[
								new b.btngroup(
									{ label: "First group", marginEnd: 2 },
									["1", "2", "3", "4"].map((i) => new b.button(i))
								),
								new b.btngroup(
									{ label: "Second group", marginEnd: 2 },
									["5", "6", "7"].map(
										(i) => new b.button({ color: "secondary" }, i)
									)
								),
								new b.btngroup(
									{ label: "Third group" },
									["8"].map((i) => new b.button({ color: "info" }, i))
								),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.xsubtitle(
					{ moreInfo: "docs/components/button_group#vertical_variation" },
					"Vertical"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.btngroup({ label: "Vertical button group", vertical: true }, [
							new b.button("Button"),
							new b.button("Button"),
							new b.btngroup([
								new b.dropdown.button({}, "Dropdown"),
								new b.dropdown.menu([
									new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
									new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
								]),
							]),
							new b.button("Button"),
							new b.button("Button"),
							new b.btngroup([
								new b.dropdown.button({}, "Dropdown"),
								new b.dropdown.menu([
									new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
									new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
								]),
							]),
							new b.btngroup([
								new b.dropdown.button({}, "Dropdown"),
								new b.dropdown.menu([
									new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
									new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
								]),
							]),
							new b.btngroup([
								new b.dropdown.button({}, "Dropdown"),
								new b.dropdown.menu([
									new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
									new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
								]),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title({ moreInfo: "docs/components/dropdown#single_button" }, "Dropdown"),
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
				new e.subtitle(
					{ moreInfo: "docs/components/dropdown#split_button" },
					"Split button"
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
				new e.title({ moreInfo: "docs/content/typography#headings" }, "Typography"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.h1("h1. Bootstrap heading"),
							new h.h2("h2. Bootstrap heading"),
							new h.h3("h3. Bootstrap heading"),
							new h.h4("h4. Bootstrap heading"),
							new h.h5("h5. Bootstrap heading"),
							new h.h6("h6. Bootstrap heading"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/content/typography#customizing_headings" },
					"With secondary text"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.h1([
								"h1. Heading",
								new h.small(
									{ textColor: "body-secondary" },
									" with faded secondary text"
								),
							]),
							new h.h2([
								"h2. Heading",
								new h.small(
									{ textColor: "body-secondary" },
									" with faded secondary text"
								),
							]),
							new h.h3([
								"h3. Heading",
								new h.small(
									{ textColor: "body-secondary" },
									" with faded secondary text"
								),
							]),
							new h.h4([
								"h4. Heading",
								new h.small(
									{ textColor: "body-secondary" },
									" with faded secondary text"
								),
							]),
							new h.h5([
								"h5. Heading",
								new h.small(
									{ textColor: "body-secondary" },
									" with faded secondary text"
								),
							]),
							new h.h6([
								"h6. Heading",
								new h.small(
									{ textColor: "body-secondary" },
									" with faded secondary text"
								),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/content/typography#lead" }, "Lead paragraph"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.p(
							{ lead: true },
							"This is a lead paragraph. It stands out from regular paragraphs."
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/content/typography#inline_text_elements" },
					"Body text"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.p([
								"You can use the mark tag to ",
								new h.mark("highlight"),
								" text.",
							]),
							new h.p(
								new h.del(
									"This line of text is meant to be treated as deleted text."
								)
							),
							new h.p(
								new h.s(
									"This line of text is meant to be treated as no longer accurate."
								)
							),
							new h.p(
								new h.ins(
									"This line of text is meant to be treated as an addition to the document."
								)
							),
							new h.p(new h.u("This line of text will render as underlined.")),
							new h.p(
								new h.small(
									"This line of text is meant to be treated as fine print."
								)
							),
							new h.p(new h.strong("This line rendered as bold text.")),
							new h.p(new h.em("This line rendered as italicized text.")),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/utilities/colors#colors" }, "Text color"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const data: {
							textColor: core.attr["textColor"];
							bgColor?: core.attr["bgColor"];
							textOpacity?: core.attr["textOpacity"];
						}[] = [
							{ textColor: "primary" },
							{ textColor: "primary-emphasis" },
							{ textColor: "secondary" },
							{ textColor: "secondary-emphasis" },
							{ textColor: "success" },
							{ textColor: "success-emphasis" },
							{ textColor: "danger" },
							{ textColor: "danger-emphasis" },
							{ textColor: "warning", bgColor: "dark" },
							{ textColor: "warning-emphasis" },
							{ textColor: "info", bgColor: "dark" },
							{ textColor: "info-emphasis" },
							{ textColor: "light", bgColor: "dark" },
							{ textColor: "light-emphasis" },
							{ textColor: "dark" },
							{ textColor: "dark-emphasis" },

							{ textColor: "body" },
							{ textColor: "body-emphasis" },
							{ textColor: "body-secondary" },
							{ textColor: "body-tertiary" },

							{ textColor: "black" },
							{ textColor: "white", bgColor: "dark" },
							{ textColor: "black", textOpacity: 50 },
							{ textColor: "white", textOpacity: 50, bgColor: "dark" },
						];

						return data.map((i) => {
							return new h.p(
								{
									bgColor: i.bgColor,
									textColor: i.textColor,
									textOpacity: i.textOpacity,
								},
								[
									`.text-${i.textColor}`,
									i.textOpacity ? `.text-opacity-${i.textOpacity}` : "",
								]
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/content/typography#blockquotes" }, "Blockquote"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.figure([
							new b.blockquote.container(
								new h.p("A well-known quote, contained in a blockquote element.")
							),
							new b.blockquote.caption([
								"Someone famous in ",
								new h.cite({ title: "Source Title" }, "Source Title"),
							]),
						]);
					},
				}),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.figure({ textAlign: "center" }, [
							new b.blockquote.container(
								new h.p("A well-known quote, contained in a blockquote element.")
							),
							new b.blockquote.caption([
								"Someone famous in ",
								new h.cite({ title: "Source Title" }, "Source Title"),
							]),
						]);
					},
				}),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.figure({ textAlign: "end" }, [
							new b.blockquote.container(
								new h.p("A well-known quote, contained in a blockquote element.")
							),
							new b.blockquote.caption([
								"Someone famous in ",
								new h.cite({ title: "Source Title" }, "Source Title"),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title({ moreInfo: "docs/content/tables#variants" }, "Table"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { overflow: "auto" },
					output: () => {
						return new b.table.container([
							new b.table.thead(
								new b.table.tr([
									new b.table.th({ scope: "col" }, "Class"),
									new b.table.th({ scope: "col" }, "Heading"),
									new b.table.th({ scope: "col" }, "Heading"),
								])
							),
							new b.table.tbody(
								[
									undefined,
									"primary",
									"secondary",
									"success",
									"danger",
									"warning",
									"info",
									"light",
									"dark",
								].map(
									(i) =>
										new b.table.tr({ color: i as core.bsType.color }, [
											new b.table.th(
												{ scope: "row" },
												i ? core.uppercaseFirst(i) : "Default"
											),
											new b.table.td("Cell"),
											new b.table.td("Cell"),
										])
								)
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title({ moreInfo: "docs/forms/overview#overview" }, "Forms"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.form(
							new h.fieldset([
								new h.legend("Legend"),
								b.form.input({
									container: { marginBottom: 3 },
									value: "email@example.com",
									label: "Email",
									plaintext: true,
									col1: "sm-2",
									col2: "sm-10",
								}),
								b.form.input({
									container: { marginBottom: 3 },
									label: "Email address",
									type: "email",
									placeholder: "Enter email",
									description: "We'll never share your email with anyone else.",
								}),
								b.form.input({
									label: "Password",
									type: "password",
									placeholder: "Password",
								}),
							])
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/select" }, "Select"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.select({
								container: { marginBottom: 3 },
								label: "Example select",
								item: [
									{ selected: true, value: "1", elem: "One" },
									{ value: "2", elem: "Two" },
									{ value: "3", elem: "Three" },
									{ value: "4", elem: "Four" },
									{ value: "5", elem: "Five" },
								],
							}),
							b.form.select({
								disabled: true,
								container: { marginBottom: 3 },
								label: "Example disable select",
								item: [
									{ selected: true, value: "1", elem: "One" },
									{ value: "2", elem: "Two" },
									{ value: "3", elem: "Three" },
									{ value: "4", elem: "Four" },
									{ value: "5", elem: "Five" },
								],
							}),
							b.form.select({
								multiple: true,
								label: "Example multiple select",
								item: [
									{ value: "1", elem: "One" },
									{ value: "2", elem: "Two" },
									{ value: "3", elem: "Three" },
									{ value: "4", elem: "Four" },
									{ value: "5", elem: "Five" },
								],
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/control#example" }, "Textarea"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return b.form.textarea({
							label: "Example textarea",
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/control#file_input" }, "File input"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return b.form.input({
							label: "Default file input exampe",
							type: "file",
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/check_radio#radios" }, "Radio buttons"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.check({
								label: "Option one is this and that—be sure to include why it's great",
								type: "radio",
								name: "btnradio2",
								checked: true,
							}),
							b.form.check({
								label: "Option two can be something else and selecting it will deselect option one",
								type: "radio",
								name: "btnradio2",
							}),
							b.form.check({
								label: "Option three is disabled",
								type: "radio",
								name: "btnradio2",
								disabled: true,
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section({ id: "checkbox2" }, [
				new e.subtitle(
					{ id: "checkbox2", moreInfo: "docs/forms/check_radio#checks" },
					"Checkbox"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.check({
								label: "Default checkbox",
							}),
							b.form.check({
								label: "Checked checkbox",
								checked: true,
							}),
							b.form.check({
								label: "Indeterminate checkbox",
								indeterminate: true,
							}),
							b.form.check({
								label: "Disabled checkbox",
								disabled: true,
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/check_radio#switches" }, "Switch"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.check({
								label: "Default switch checkbox",
								switch: true,
							}),
							b.form.check({
								label: "Checked switch checkbox",
								switch: true,
								checked: true,
							}),
							b.form.check({
								label: "Disabled switch checkbox",
								switch: true,
								disabled: true,
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/range" }, "Range"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								label: "Example range",
								type: "range",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								label: "Example range",
								type: "range",
								disabled: true,
							}),
							b.form.input({
								label: "Example range",
								type: "range",
								min: 0,
								max: 5,
								step: 0.5,
								value: 2.5,
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/button#button_tags" }, "Button"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							new b.button({ type: "submit" }, "Submit"),
							new b.button({ type: "reset" }, "Reset"),
							new b.button({ type: "button" }, "Button"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/control#disabled" }, "Disable & readonly"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								label: "Disabled input",
								placeholder: "Disabled input here...",
								disabled: true,
							}),
							b.form.input({
								label: "Readonly input",
								placeholder: "Readonly input here...",
								readonly: true,
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/validation" }, "Validation"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								label: "Valid input",
								value: "corrent value",
								validFeedback: "Success! You've done it.",
								isvalid: true,
							}),
							b.form.input({
								label: "Invalid input",
								value: "wrong value",
								invalidFeedback: "Sorry, that username's taken. Try another?",
								isvalid: false,
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/control#sizing" }, "Weight"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								label: "Large input",
								placeholder: "weight: 'lg'",
								weight: "lg",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								label: "Default input",
							}),
							b.form.input({
								label: "Small input",
								placeholder: "weight: 'sm'",
								weight: "sm",
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/input_group" }, "Input addon"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								before: "$",
								after: "0.00",
							}),
							b.form.input({
								placeholder: "Recipient's username",
								after: new b.button("Button"),
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/forms/floating_label" }, "Floating label"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.floatinglabel.input({
								container: { marginBottom: 3 },
								label: "Email address",
								type: "email",
							}),
							b.form.floatinglabel.input({
								label: "Password",
								type: "password",
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Navs")]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/nav#tabs" }, "Tabs"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const content = (title: string) =>
							`This is some placeholder content the {{b::${title} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{type:'tab|pill|underline'}}powered navigation.`;

						return b.nav.tab({
							item: [
								{ label: "Home", active: true, elem: content("Home") },
								{ label: "Profile", elem: content("Profile") },
								{ label: "Contact", elem: content("Contact") },
								{ label: "Disabled", disabled: true, elem: content("Disabled") },
							],
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/nav#pills" }, "Pills"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const content = (title: string) =>
							`This is some placeholder content the {{b::${title} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{type:'tab|pill|underline'}}powered navigation.`;

						return b.nav.tab({
							type: "pill",
							item: [
								{ label: "Home", active: true, elem: content("Home") },
								{ label: "Profile", elem: content("Profile") },
								{ label: "Contact", elem: content("Contact") },
								{ label: "Disabled", disabled: true, elem: content("Disabled") },
							],
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/breadcrumb" }, "Breadcrumbs"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "column", gap: 3 },
					output: () => {
						return [["Home"], ["Home", "Library"], ["Home", "Library", "Data"]].map(
							(i) => {
								return new b.breadcrumb.container(
									{ label: "breadcrumb" },
									i.map((j, jx) => {
										return new b.breadcrumb.item(
											{ active: jx === i.length - 1, href: "#" },
											j
										);
									})
								);
							}
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/pagination" }, "Pagination"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "column", gap: 3, overflowX: "auto" },
					output: () => {
						return [
							new b.pagination.container({
								total: 1284,
								limit: 10,
								maxBtnCount: 3,
								nextPrev: false,
							}),
							new b.pagination.container({
								weight: "lg",
								total: 1284,
								limit: 10,
								maxBtnCount: 3,
								firstLast: false,
							}),
							new b.pagination.container({
								weight: "sm",
								total: 1284,
								limit: 10,
								maxBtnCount: 5,
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Indicators")]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/alert#examples" }, "Alerts"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map((i) => {
							return new b.alert.container(
								{ dismissible: true, color: i as core.bsType.alertColor },
								`A simple ${i} alert—check it out!`
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/alert#callout" }, "Callout"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map((i) => {
							return new b.alert.container(
								{ callout: true, color: i as core.bsType.alertColor },
								`A simple ${i} alert—check it out!`
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/badge" }, "Badges"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map((i) => {
							return new b.badge(
								{ textBgColor: i as core.bsClass["textBgColor"] },
								core.uppercaseFirst(i)
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.xsubtitle({ moreInfo: "docs/components/badge#pill_badges" }, "Rounded pill"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map((i) => {
							return new b.badge(
								{
									textBgColor: i as core.bsClass["textBgColor"],
									rounded: "pill",
								},
								core.uppercaseFirst(i)
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Progress")]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/progress" }, "Basic"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.progress.container({
							value: 25,
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/progress#backgrounds" },
					"Contextual alternatives"
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "column", gap: 3 },
					output: () => {
						return ["success", "info", "warning", "danger"].map((i, ix) => {
							let val = [25, 50, 75, 100][ix];
							return new b.progress.container(
								{
									label: `${core.uppercaseFirst(i)} example`,
									value: val,
									min: 0,
									max: 100,
								},
								new b.progress.bar({
									color: i as core.bsType.color,
									style: { width: `${val}%` },
								})
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/progress#multiple_bars" },
					"Multiple bars"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.progress.stacked([
							new b.progress.container({
								label: "Segment one",
								value: 15,
								min: 0,
								max: 100,
								stacked: true,
							}),
							new b.progress.container({
								label: "Segment two",
								value: 30,
								min: 0,
								max: 100,
								stacked: true,
								color: "success",
							}),
							new b.progress.container({
								label: "Segment three",
								value: 20,
								min: 0,
								max: 100,
								stacked: true,
								color: "info",
							}),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/progress#striped" }, "Striped"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "column", gap: 3 },
					output: () => {
						return [undefined, "success", "info", "warning", "danger"].map((i, ix) => {
							let val = [10, 25, 50, 75, 100][ix];
							return new b.progress.container(
								{
									label: `${
										i ? core.uppercaseFirst(i) : "Default"
									} striped example`,
									value: val,
									min: 0,
									max: 100,
								},
								new b.progress.bar({
									striped: true,
									textBgColor: i as core.bsType.textBgColor,
									style: { width: `${val}%` },
								})
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/progress#animated_stripes" },
					"Animated"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.progress.container({
							value: 75,
							striped: true,
							animated: true,
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title({ moreInfo: "docs/components/list#basic_example" }, "List groups"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container([
							new b.list.item("An item"),
							new b.list.item("A second item"),
							new b.list.item("A third item"),
							new b.list.item("A fourth item"),
							new b.list.item("And a fifth one"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/list#with_badges" }, "With badge"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container(
							[
								{ label: "A list item", counter: 14 },
								{ label: "A second list item", counter: 2 },
								{ label: "A third list item", counter: 1 },
							].map((i) => {
								return new b.list.item(
									{
										display: "flex",
										justifyContent: "between",
										alignItem: "center",
									},
									[
										i.label,
										new b.badge(
											{ bgColor: "primary", rounded: "pill" },
											i.counter.toString()
										),
									]
								);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/list#variants" }, "Color"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container(
							[
								"primary",
								"secondary",
								"success",
								"danger",
								"warning",
								"info",
								"light",
								"dark",
							].map((i) => {
								return new b.list.item(
									{
										color: i as core.bsType.color,
										display: "flex",
										justifyContent: "between",
										alignItem: "center",
									},
									[
										core.uppercaseFirst(i),
										new b.badge(
											{
												textBgColor: i as core.bsClass["textBgColor"],
												rounded: "pill",
											},
											core.rndBetween(1, 20).toString()
										),
									]
								);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/list#for_links_and_buttons" },
					"Active action"
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container(
							[
								"An item",
								"A second item",
								"A third item",
								"A fourth item",
								"And a fifth one",
							].map((i, ix) => {
								return new b.list.item(
									{ action: true, handleActive: true, active: ix === 0 },
									i
								);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(
					{ moreInfo: "docs/components/list#custom_content" },
					"Custom content"
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.tabList.container(
							{ style: { maxWidth: "400px" } },
							[
								{ label: "And some small print", active: true },
								{ label: "And some muted small print" },
								{ label: "And some muted small print" },
							].map((i) => {
								return new b.tabList.item(
									{ href: "#", action: true, active: i.active },
									[
										new h.div(
											{
												display: "flex",
												width: 100,
												justifyContent: "between",
											},
											[
												new h.h5(
													{ marginBottom: 1 },
													"List group item heading"
												),
												new h.small(
													{
														textColor: !i.active
															? "body-secondary"
															: undefined,
													},
													"3 days ago"
												),
											]
										),
										new h.p(
											{ marginBottom: 1 },
											"Some placeholder content in a paragraph."
										),
										new h.small(
											{ textColor: !i.active ? "body-secondary" : undefined },
											i.label
										),
									]
								);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Containers")]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/card#background_and_color" }, "Card"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map((i, ix) => {
							return new b.card.container(
								{
									textBgColor: i as core.bsClass["textBgColor"],
									marginTop: ix !== 0 ? 3 : undefined,
									style: { width: "18rem" },
								},
								[
									new b.card.header("Header"),
									new b.card.body([
										new b.card.title(`${core.uppercaseFirst(i)} card title`),
										new b.card.text(
											"Some quick example text to build on the card title and make up the bulk of the card's content."
										),
									]),
								]
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.xsubtitle({ moreInfo: "docs/components/card#border" }, "Card outline"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
						].map((i, ix) => {
							return new b.card.container(
								{
									borderColor: i as core.bsClass["borderColor"],
									marginTop: ix !== 0 ? 3 : undefined,
									style: { width: "18rem" },
								},
								[
									new b.card.header("Header"),
									new b.card.body({ textColor: i as core.bsClass["textColor"] }, [
										new b.card.title(`${core.uppercaseFirst(i)} card title`),
										new b.card.text(
											"Some quick example text to build on the card title and make up the bulk of the card's content."
										),
									]),
								]
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.xsubtitle({ moreInfo: "docs/components/card#kitchen_sink" }, "Kitchen sink"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.header("Header"),

							new b.card.body([
								new b.card.title("Card title"),
								new b.card.subtitle("Card subtitle."),
							]),
							new b.card.img({
								src: "https://picsum.photos/seed/bsts_0/286/180.webp",
								alt: "Image cap",
							}),
							new b.card.body([
								new b.card.text(
									"Some quick example text to build on the card title and make up the bulk of the card's content."
								),
							]),
							new b.list.container({ flush: true }, [
								new b.list.item("An item"),
								new b.list.item("A second item"),
								new b.list.item("A third item"),
							]),
							new b.card.body([
								new b.card.link({ href: "#" }, "Card link"),
								new b.card.link({ href: "#" }, "Another link"),
							]),
							new b.card.footer("2 days ago"),
						]);
					},
				}),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container(
							{ style: { width: "18rem" } },
							new b.card.body([
								new b.card.title("Card title"),
								new b.card.subtitle("Card subtitle"),
								new b.card.text(
									"Some quick example text to build on the card title and make up the bulk of the card's content."
								),
								new b.card.link({ href: "#" }, "Card link"),
								new b.card.link({ href: "#" }, "Another link"),
							])
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/accordion" }, "Accordion"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.accordion.container({
							item: [
								{
									title: "Accordion Item #1",
									elem: "{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
									show: true,
								},
								{
									title: "Accordion Item #2",
									elem: "{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
								},
								{
									title: "Accordion Item #3",
									elem: "{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
								},
							],
						});
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Dialogs")]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/modal" }, "Modal"),
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
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/offcanvas" }, "Offcanvas"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new b.offcanvas.button(
								{
									href: "#offcanvasExample",
									controlfor: "offcanvasExample",
									marginEnd: 2,
								},
								"Link with href"
							),
							new b.offcanvas.button(
								{ target: "#offcanvasExample", controlfor: "offcanvasExample" },
								"Button with data-bs-target"
							),
							new b.offcanvas.container(
								{ id: "offcanvasExample", labelledby: "offcanvasExampleLabel" },
								[
									new b.offcanvas.header([
										new b.offcanvas.title(
											{ id: "offcanvasExampleLabel" },
											"Offcanvas"
										),
										new b.offcanvas.btnclose(),
									]),
									new b.offcanvas.body([
										new h.div(
											"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."
										),
										new b.dropdown.container({ marginTop: 3 }, [
											new b.dropdown.button(
												{ color: "secondary" },
												"Dropdown button"
											),
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
											]),
										]),
									]),
								]
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/popover" }, "Popovers"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["top", "right", "bottom", "left"].map((i) => {
							return new b.popover(
								{
									placement: i as IPopover["placement"],
									content: `${core.uppercaseFirst(i)} popover`,
								},
								new b.button({ color: "secondary" }, `Popover on ${i}`)
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/tooltip" }, "Tooltips"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["top", "right", "bottom", "left"].map((i) => {
							return new b.tooltip(
								{
									placement: i as ITooltip["placement"],
									content: `Tooltip on ${i}`,
								},
								new b.button({ color: "secondary" }, `Tooltip on ${i}`)
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle({ moreInfo: "docs/components/toast" }, "Toasts"),
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
			]),

			//----------------------
		];
	},
};

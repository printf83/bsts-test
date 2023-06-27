import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const bootswatch: IAttrContent = {
	title: "Bootswatch",
	description: "Free themes for Bootstrap from Bootswatch",
	item: [
		new e.title("Navbars"),
		new e.code({
			outputAttr: { display: "grid", gap: 3 },
			output: () => {
				const navbarItem = (btnColor: I.B.Button["color"]) => {
					let id = core.UUID();
					return new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.toggle.collapse({
							target: `#${id}`,
							controlfor: id,
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: id }, [
							new b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Features")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Pricing")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "About")),
								new b.navbar.item({ dropdown: true }, [
									new b.dropdown.button({ navItem: true }, "Dropdown"),
									new b.dropdown.menu([
										new b.dropdown.item({ href: "#" }, "Action"),
										new b.dropdown.item({ href: "#" }, "Another action"),
										new b.dropdown.divider(),
										new b.dropdown.item({ href: "#" }, "Something else here"),
									]),
								]),
							]),
							new h.form({ display: "flex", role: "search" }, [
								new b.input({
									type: "search",
									marginEnd: 2,
									placeholder: "Search",
									label: "Search",
								}),
								new b.button({ type: "submit", color: btnColor, outline: true }, "Search"),
							]),
						]),
					]);
				};

				return [
					new b.navbar.container({ bgColor: "primary", theme: "dark" }, navbarItem("light")),
					new b.navbar.container({ bgColor: "dark", theme: "dark" }, navbarItem("light")),
					new b.navbar.container({ bgColor: "light", theme: "light" }, navbarItem("dark")),
				];
			},
		}),

		//-----------------------

		new e.title("Buttons"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 2 },
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map(
					(i) => {
						return new b.button({ color: i as I.B.Button["color"] }, core.uppercaseFirst(i));
					}
				);
			},
		}),

		//-----------------------

		new e.subtitle("Disabled"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 2 },
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map(
					(i) => {
						return new b.button(
							{ color: i as I.B.Button["color"], disabled: true },
							core.uppercaseFirst(i)
						);
					}
				);
			},
		}),

		//-----------------------

		new e.subtitle("Outline"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 2 },
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map(
					(i) => {
						return new b.button({ color: i as I.B.Button["color"], outline: true }, core.uppercaseFirst(i));
					}
				);
			},
		}),

		//-----------------------

		new e.subtitle("Sizing"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Block"),
		new e.code({
			output: () => {
				return new h.div({ display: "grid", gap: 2 }, [new b.button("Button"), new b.button("Button")]);
			},
		}),

		//-----------------------

		new e.title("Dropdown"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 2 },
			output: () => {
				return ["primary", "secondary", "success", "info", "warning", "danger"].map((i) => {
					return new b.dropdown.container([
						new b.dropdown.button({ color: i as core.bootstrapType.color }, core.uppercaseFirst(i)),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]),
					]);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Split button"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 2 },
			output: () => {
				return ["primary", "secondary", "success", "info", "warning", "danger"].map((i) => {
					return new b.dropdown.container([
						new b.button({ color: i as core.bootstrapType.color }, core.uppercaseFirst(i)),
						new b.dropdown.button({ color: i as core.bootstrapType.color, split: true }),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]),
					]);
				});
			},
		}),

		//-----------------------

		new e.title("Button group"),
		new e.code({
			output: () => {
				return new b.btngroup({ label: "Basic example", role: "group" }, [
					new b.button("Left"),
					new b.button("Middle"),
					new b.button("Right"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Checkbox"),
		new e.code({
			output: () => {
				return new b.btngroup({ label: "Basic checkbox toggle button group", role: "group" }, [
					new b.input({ type: "checkbox", toggle: true, id: "btncheck1" }),
					new b.label({ for: "btncheck1", color: "primary", outline: true }, "Checkbox 1"),

					new b.input({ type: "checkbox", toggle: true, id: "btncheck2" }),
					new b.label({ for: "btncheck2", color: "primary", outline: true }, "Checkbox 2"),

					new b.input({ type: "checkbox", toggle: true, id: "btncheck3" }),
					new b.label({ for: "btncheck3", color: "primary", outline: true }, "Checkbox 3"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Radio"),
		new e.code({
			output: () => {
				return new b.btngroup({ label: "Basic checkbox toggle button group", role: "group" }, [
					new b.input({ type: "radio", toggle: true, id: "btnradio1", name: "btnradio", checked: true }),
					new b.label({ for: "btnradio1", color: "primary", outline: true }, "Radio 1"),

					new b.input({ type: "radio", toggle: true, id: "btnradio2", name: "btnradio" }),
					new b.label({ for: "btnradio2", color: "primary", outline: true }, "Radio 2"),

					new b.input({ type: "radio", toggle: true, id: "btnradio3", name: "btnradio" }),
					new b.label({ for: "btnradio3", color: "primary", outline: true }, "Radio 3"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Toolbar"),
		new e.code({
			output: () => {
				return new b.btngroup({ label: "Toolbar with button groups", role: "toolbar" }, [
					new b.btngroup(
						{ label: "First group", marginEnd: 2 },
						["1", "2", "3", "4"].map((i) => new b.button(i))
					),
					new b.btngroup(
						{ label: "Second group", marginEnd: 2 },
						["5", "6", "7"].map((i) => new b.button({ color: "secondary" }, i))
					),
					new b.btngroup(
						{ label: "Third group" },
						["8"].map((i) => new b.button({ color: "info" }, i))
					),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Vertical"),
		new e.code({
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

		//-----------------------

		new e.title("Typography"),
		new e.code({
			output: () => {
				return [1, 2, 3, 4, 5, 6].map((i) => new h.h(i as I.H.HLevel, `h${i}. Bootstrap heading`));
			},
		}),

		//-----------------------

		new e.code({
			output: () => {
				return [1, 2, 3, 4, 5, 6].map(
					(i) =>
						new h.h(i as I.H.HLevel, [
							`h${i}. Heading`,
							new h.small({ textColor: "body-secondary" }, " with faded secondary text"),
						])
				);
			},
		}),

		//-----------------------

		new e.subtitle("Lead paragraph"),
		new e.code({
			output: () => {
				return new h.p({ lead: true }, "This is a lead paragraph. It stands out from regular paragraphs.");
			},
		}),

		//-----------------------

		new e.title("Body text"),
		new e.code({
			output: () => {
				return [
					new h.p(["You can use the mark tag to ", new h.mark("highlight"), " text."]),
					new h.p(new h.del("This line of text is meant to be treated as deleted text.")),
					new h.p(new h.s("This line of text is meant to be treated as no longer accurate.")),
					new h.p(new h.ins("This line of text is meant to be treated as an addition to the document.")),
					new h.p(new h.u("This line of text will render as underlined.")),
					new h.p(new h.small("This line of text is meant to be treated as fine print.")),
					new h.p(new h.strong("This line rendered as bold text.")),
					new h.p(new h.em("This line rendered as italicized text.")),
				];
			},
		}),

		//-----------------------

		new e.title("Text color"),
		new e.code({
			output: () => {
				const data: {
					textColor: core.IAttr["textColor"];
					bgColor?: core.IAttr["bgColor"];
					textOpacity?: core.IAttr["textOpacity"];
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
					return new h.p({ bgColor: i.bgColor, textColor: i.textColor, textOpacity: i.textOpacity }, [
						`.text-${i.textColor}`,
						i.textOpacity ? `.text-opacity-${i.textOpacity}` : "",
					]);
				});
			},
		}),

		//-----------------------

		new e.title("Blockquote"),
		new e.code({
			output: () => {
				return new h.figure([
					new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")),
					new b.blockquote.caption([
						"Someone famous in ",
						new h.cite({ title: "Source Title" }, "Source Title"),
					]),
				]);
			},
		}),
		new e.code({
			output: () => {
				return new h.figure({ textAlign: "center" }, [
					new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")),
					new b.blockquote.caption([
						"Someone famous in ",
						new h.cite({ title: "Source Title" }, "Source Title"),
					]),
				]);
			},
		}),
		new e.code({
			output: () => {
				return new h.figure({ textAlign: "end" }, [
					new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")),
					new b.blockquote.caption([
						"Someone famous in ",
						new h.cite({ title: "Source Title" }, "Source Title"),
					]),
				]);
			},
		}),

		//-----------------------

		new e.title("Table"),
		new e.code({
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
								new b.table.tr({ color: i as I.B.Table.Tr["color"] }, [
									new b.table.th({ scope: "row" }, i ? core.uppercaseFirst(i) : "Default"),
									new b.table.td("Cell"),
									new b.table.td("Cell"),
								])
						)
					),
				]);
			},
		}),

		//-----------------------

		new e.title("Forms"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Select"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Textarea"),
		new e.code({
			output: () => {
				return b.form.textarea({
					label: "Example textarea",
				});
			},
		}),

		//-----------------------

		new e.subtitle("File input"),
		new e.code({
			output: () => {
				return b.form.input({
					label: "Default file input exampe",
					type: "file",
				});
			},
		}),

		//-----------------------

		new e.subtitle("Radio buttons"),
		new e.code({
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

		//-----------------------

		new e.subtitle({ id: "checkbox2" }, "Checkbox"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Switch"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Range"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Button"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 2 },
			output: () => {
				return [
					new b.button({ type: "submit" }, "Submit"),
					new b.button({ type: "reset" }, "Reset"),
					new b.button({ type: "button" }, "Button"),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Disable & readonly"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Validation"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Weight"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Input addon"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Floating label"),
		new e.code({
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

		//-----------------------

		new e.title("Navs"),
		new e.subtitle("Tabs"),
		new e.code({
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

		//-----------------------

		new e.subtitle("Pills"),
		new e.code({
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

		//-----------------------

		new e.title("Breadcrumbs"),
		new e.code({
			outputAttr: { display: "flex", flex: "column", gap: 2 },
			output: () => {
				return [["Home"], ["Home", "Library"], ["Home", "Library", "Data"]].map((i) => {
					return new b.breadcrumb.container(
						{ label: "breadcrumb" },
						i.map((j, jx) => {
							return new b.breadcrumb.item({ active: jx === i.length - 1, href: "#" }, j);
						})
					);
				});
			},
		}),

		//-----------------------

		new e.title("Pagination"),
		new e.code({
			outputAttr: { display: "flex", flex: "column", gap: 2 },
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

		//-----------------------

		new e.title("Indicators"),
		new e.subtitle("Alerts"),
		new e.code({
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.alert.container(
						{ dismissible: true, color: i as core.bootstrapType.color },
						`A simple ${i} alert—check it out!`
					);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Badges"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 2 },
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.badge({ textBgColor: i as core.bootstrapType.textBgColor }, core.uppercaseFirst(i));
				});
			},
		}),

		new e.xsubtitle("Rounded pill"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 2 },
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.badge(
						{
							textBgColor: i as core.bootstrapType.textBgColor,
							rounded: "pill",
						},
						core.uppercaseFirst(i)
					);
				});
			},
		}),

		//-----------------------

		new e.title("Progress"),
		new e.subtitle("Basic"),
		new e.code({
			output: () => {
				return new b.progress.container({
					value: 25,
				});
			},
		}),

		new e.subtitle("Contextual alternatives"),
		new e.code({
			outputAttr: { display: "flex", flex: "column", gap: 3 },
			output: () => {
				return ["success", "info", "warning", "danger"].map((i, ix) => {
					let val = [25, 50, 75, 100][ix];
					return new b.progress.container(
						{ label: `${core.uppercaseFirst(i)} example`, value: val, min: 0, max: 100 },
						new b.progress.bar({
							color: i as I.B.Progress.Bar["color"],
							style: { width: `${val}%` },
						})
					);
				});
			},
		}),

		new e.subtitle("Multiple bars"),
		new e.code({
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

		new e.subtitle("Striped"),
		new e.code({
			outputAttr: { display: "flex", flex: "column", gap: 3 },
			output: () => {
				return [undefined, "success", "info", "warning", "danger"].map((i, ix) => {
					let val = [10, 25, 50, 75, 100][ix];
					return new b.progress.container(
						{
							label: `${i ? core.uppercaseFirst(i) : "Default"} striped example`,
							value: val,
							min: 0,
							max: 100,
						},
						new b.progress.bar({
							striped: true,
							textBgColor: i as I.B.Progress.Bar["textBgColor"],
							style: { width: `${val}%` },
						})
					);
				});
			},
		}),

		new e.subtitle("Animated"),
		new e.code({
			output: () => {
				return new b.progress.container({
					value: 75,
					striped: true,
					animated: true,
				});
			},
		}),
	],
};

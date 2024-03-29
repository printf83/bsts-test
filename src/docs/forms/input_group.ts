import { b, I } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
type SelectItem = I.h.selectItem;

export const input_group: IContent = {
	title: "Input group",
	description:
		"Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Basic example"),
				new e.text(
					"Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place {{<label>}}s outside the input group."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								placeholder: "Username",
								before: "@",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								placeholder: "Recipient's username",
								after: "@example.com",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								label: "Your vanity URL",
								type: "text",
								before: "https://example.com/users/",
								description: "Example help text goes outside the input group.",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								before: "$",
								after: ".00",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								placeholder: "Username",
								after: ["@", new b.input({ type: "text", placeholder: "Server" })],
							}),
							b.form.textarea({
								before: "With textarea",
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Wrapping"),
				new e.text(
					"Input groups wrap by default via {{flex-wrap: wrap}} in order to accommodate custom form field validation within an input group. You may disable this with {{.flex-nowrap}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return b.form.input({
							type: "text",
							placeholder: "Username",
							before: "@",
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Sizing"),
				new e.text(
					"Add the relative form sizing classes to the {{.input-group}} itself and contents within will automatically resize—no need for repeating the form control size classes on each element."
				),
				new e.text("{{b::Sizing on the individual input group elements isn’t supported.}}"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								before: "Small",
								weight: "sm",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								before: "Default",
							}),
							b.form.input({
								type: "text",
								before: "Large",
								weight: "lg",
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Checkboxes and radios"),
				new e.text(
					"Place any checkbox or radio option within an input group’s addon instead of text. Bootstrap recommend adding {{.mt-0}} to the {{.form-check-input}} when there’s no visible text next to the input."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								aria: { label: "Text input with checkbox" },
								before: "[checkbox]",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								aria: { label: "Text input with radio" },
								before: "[radio]",
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Multiple inputs"),
				new e.text(
					"While multiple {{<input>}}s are supported visually, validation styles are only available for input groups with a single {{<input>}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								type: "text",
								aria: { label: "First name" },
								before: "First and last name",
								after: new b.input({ type: "text", aria: { label: "Last name" } }),
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Multiple addons"),
				new e.text(
					"Multiple add-ons are supported and can be mixed with checkbox and radio input versions."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								aria: { label: "Dollar amount (with dot and two decimal places)" },
								before: ["$", "0.00"],
							}),
							b.form.input({
								type: "text",
								aria: { label: "Dollar amount (with dot and two decimal places)" },
								after: ["$", "0.00"],
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Button addons"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								aria: { label: "Example text with button addon" },
								before: new b.button(
									{ color: "secondary", outline: true },
									"Button"
								),
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								placeholder: "Recipient's username",
								aria: { label: "Example text with button addon" },
								after: new b.button(
									{ color: "secondary", outline: true },
									"Button"
								),
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								aria: { label: "Example text with button addons" },
								before: [
									new b.button({ color: "secondary", outline: true }, "Button"),
									new b.button({ color: "secondary", outline: true }, "Button"),
								],
							}),
							b.form.input({
								type: "text",
								placeholder: "Recipient's username",
								aria: { label: "Example text with button addons" },
								after: [
									new b.button({ color: "secondary", outline: true }, "Button"),
									new b.button({ color: "secondary", outline: true }, "Button"),
								],
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Buttons with dropdowns"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const dropdownItem = [
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						];

						return [
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								aria: { label: "Text input with dropdown button" },
								before: [
									new b.dropdown.button(
										{ color: "secondary", outline: true },
										"Dropdown"
									),
									new b.dropdown.menu(dropdownItem),
								],
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								aria: { label: "Text input with dropdown button" },
								after: [
									new b.dropdown.button(
										{ color: "secondary", outline: true },
										"Dropdown"
									),
									new b.dropdown.menu({ positionView: "end" }, dropdownItem),
								],
							}),
							b.form.input({
								type: "text",
								aria: { label: "Text input with dropdown button" },
								before: [
									new b.dropdown.button(
										{ color: "secondary", outline: true },
										"Dropdown"
									),
									new b.dropdown.menu(dropdownItem),
								],
								after: [
									new b.dropdown.button(
										{ color: "secondary", outline: true },
										"Dropdown"
									),
									new b.dropdown.menu({ positionView: "end" }, dropdownItem),
								],
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Segmented buttons"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						const dropdownItem = [
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						];

						return [
							b.form.input({
								container: { marginBottom: 3 },
								type: "text",
								aria: { label: "Text input with segmented dropdown button" },
								before: [
									new b.button({ color: "secondary", outline: true }, "Action"),
									new b.dropdown.button({
										color: "secondary",
										outline: true,
										split: true,
									}),
									new b.dropdown.menu(dropdownItem),
								],
							}),
							b.form.input({
								type: "text",
								aria: { label: "Text input with segmented dropdown button" },
								after: [
									new b.button({ color: "secondary", outline: true }, "Action"),
									new b.dropdown.button({
										color: "secondary",
										outline: true,
										split: true,
									}),
									new b.dropdown.menu({ positionView: "end" }, dropdownItem),
								],
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Custom forms"),
				new e.text(
					"Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported."
				),
				new e.subtitle("Custom select"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						let selectItem: SelectItem[] = [
							{ selected: true, elem: "Choose..." },
							{ value: "1", elem: "One" },
							{ value: "2", elem: "Two" },
							{ value: "3", elem: "Three" },
						];

						return [
							b.form.select({
								container: { marginBottom: 3 },
								item: selectItem,
								before: "Options",
							}),
							b.form.select({
								container: { marginBottom: 3 },
								item: selectItem,
								after: "Options",
							}),
							b.form.select({
								container: { marginBottom: 3 },
								item: selectItem,
								before: new b.button(
									{ color: "secondary", outline: true },
									"Button"
								),
							}),
							b.form.select({
								container: { marginBottom: 3 },
								item: selectItem,
								after: new b.button(
									{ color: "secondary", outline: true },
									"Button"
								),
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Custom file input"),
				new e.text(
					"Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							b.form.input({
								container: { marginBottom: 3 },
								type: "file",
								before: "Upload",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "file",
								after: "Upload",
							}),
							b.form.input({
								container: { marginBottom: 3 },
								type: "file",
								before: new b.button(
									{ color: "secondary", outline: true },
									"Button"
								),
							}),
							b.form.input({
								type: "file",
								after: new b.button(
									{ color: "secondary", outline: true },
									"Button"
								),
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Sass variables"),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
				$input-group-addon-padding-y:           $input-padding-y;
				$input-group-addon-padding-x:           $input-padding-x;
				$input-group-addon-font-weight:         $input-font-weight;
				$input-group-addon-color:               $input-color;
				$input-group-addon-bg:                  var(--#{$prefix}tertiary-bg);
				$input-group-addon-border-color:        $input-border-color;
			`,
				}),
			]),
		];
	},
};

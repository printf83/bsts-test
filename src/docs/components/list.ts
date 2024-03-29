import { core, b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const list: IContent = {
	title: "List group",
	description:
		"List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Basic example"),
				new e.text(
					"The most basic list group is an unordered list ({{b.list.container}}) with list items ({{b.list.item}}) and the proper classes. Build upon it with the options that follow, or with your own CSS as needed."
				),
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
				new e.title("Active items"),
				new e.text(
					"Add {{active:true}} to a {{b.list.item}} to indicate the current active selection."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container([
							new b.list.item({ active: true }, "An active item"),
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
				new e.title("Disabled items"),
				new e.text(
					"Add {{disabled:true}} to a {{b.list.item}} to make it appear disabled."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container([
							new b.list.item({ disabled: true }, "A disabled item"),
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
				new e.title("Links and buttons"),
				new e.text(
					"Use {{b.tabList.item({href:''})}}s to create actionable list group items with hover, disabled, and active states by set {{action:true}} property. Bootstrap separate these pseudo-classes to ensure list groups made of non-interactive elements (like {{h.li}}s or {{h.div}}s) don’t provide a click or tap affordance."
				),
				new e.text(
					"{{bsts}} not {{b::use the standard}} {{cb::.btn}}{{b:: classes here}}."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.tabList.container([
							new b.tabList.item(
								{ href: "#", active: true },
								"The current link item"
							),
							new b.tabList.item({ href: "#" }, "A second link item"),
							new b.tabList.item({ href: "#" }, "A third link item"),
							new b.tabList.item({ href: "#" }, "A fourth link item"),
							new b.tabList.item({ disabled: true }, "A disabled link item"),
						]);
					},
				}),

				new e.text(
					"With {{b.list.item}}s or {{b.tabList.item}}, {{bsts}} also make use of the {{disabled}} attribute instead of the {{.disabled}} class automaticly."
				),

				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.tabList.container([
							new b.tabList.item(
								{ href: "#", action: true, active: true },
								"The current link item"
							),
							new b.tabList.item({ href: "#", action: true }, "A second link item"),
							new b.tabList.item({ href: "#", action: true }, "A third link item"),
							new b.tabList.item({ href: "#", action: true }, "A fourth link item"),
							new b.tabList.item(
								{ disabled: true, action: true },
								"A disabled link item"
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Flush"),
				new e.text(
					"Set {{flush:true}} property on {{b.list.container}} to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards)."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container({ flush: true }, [
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
				new e.title("Numbered"),
				new e.text(
					"Set {{numbered:true}} property on {{b.list.container}} to opt into numbered list group items. Numbers are generated via CSS for better placement inside list group items and to allow for better customization."
				),
				new e.text(
					"Numbers are generated by {{counter-reset}} on the {{h.ol}}, and then styled and placed with a {{/://:/before}} pseudo-element on the {{h.li}} with counter-increment and content."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container({ numbered: true }, [
							new b.list.item("A list item"),
							new b.list.item("A list item"),
							new b.list.item("A list item"),
						]);
					},
				}),

				new e.text("These work great with custom content as well."),

				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container(
							{ numbered: true },
							[1, 2, 3].map((_i) => {
								return new b.list.item(
									{
										display: "flex",
										justifyContent: "between",
										alignItem: "start",
									},
									[
										new h.div({ marginStart: 2, marginEnd: "auto" }, [
											new h.div({ fontWeight: "bold" }, "Subheading"),
											"Content for list item",
										]),
										new b.badge({ bgColor: "primary", rounded: "pill" }, "14"),
									]
								);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Horizontal"),
				new e.text(
					"Add {{horizontal:true}} to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant {{horizontal:'{sm|md|lg|xl|xxl}'}} to make a list group horizontal starting at that breakpoint’s {{min-width}}. Currently {{b::horizontal list groups cannot be combined with flush list groups}}."
				),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					outputAttr: { display: "grid", gap: 3 },
					output: () => {
						let items = [
							new b.list.item("An item"),
							new b.list.item("A second item"),
							new b.list.item("A third item"),
						];

						return [
							new b.list.container({ horizontal: true }, items),
							new b.list.container({ horizontal: "sm" }, items),
							new b.list.container({ horizontal: "md" }, items),
							new b.list.container({ horizontal: "lg" }, items),
							new b.list.container({ horizontal: "xl" }, items),
							new b.list.container({ horizontal: "xxl" }, items),
							,
						];
					},
				}),
				new e.text(
					"{{b::ProTip:}} Want equal-width list group items when horizontal? Add {{flex:'fill'}} to each {{b.list.item}}."
				),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					outputAttr: { display: "grid", gap: 3 },
					output: () => {
						let items = [
							new b.list.item({ flex: "fill" }, "An item"),
							new b.list.item({ flex: "fill" }, "A second item"),
							new b.list.item({ flex: "fill" }, "A third item"),
						];

						return [
							new b.list.container({ horizontal: true }, items),
							new b.list.container({ horizontal: "sm" }, items),
							new b.list.container({ horizontal: "md" }, items),
							new b.list.container({ horizontal: "lg" }, items),
							new b.list.container({ horizontal: "xl" }, items),
							new b.list.container({ horizontal: "xxl" }, items),
							,
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Variants"),

				new e.alert(
					{ color: "info", callout: true },
					"{{b::Heads up!}} As of v5.3.0, the {{list-group-item-variant()}} Sass mixin is deprecated. List group item variants now have their CSS variables overridden in {{nav:docs/components/list#sass_loop::the Sass loop}}."
				),
				new e.text(
					"Use {{color:'<value>'}} property to style list items with a stateful background and color."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container(
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
							].map((i) => {
								return new b.list.item(
									{ color: i as core.bsType.color },
									`A simple ${i ? i : "default"} list group item`
								);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("For links and buttons"),
				new e.text(
					"The {{color:'<value>'}} property also work with {{action:true}} for {{new b.tabList.item}} component. Note the addition of the hover styles here not present in the previous example. Also supported is the {{active:true}} state; apply it to indicate an active selection on a contextual list group item."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.tabList.container(
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
							].map((i) => {
								return new b.tabList.item(
									{
										href: "#",
										action: true,
										color: i as core.bsType.color,
									},
									`A simple ${i ? i : "default"} list group item`
								);
							})
						);
					},
				}),

				new e.alert(
					{ color: "info", callout: true },
					"{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property."
				),
			]),

			//----------------------

			new e.section([
				new e.title("With badges"),
				new e.text(
					"Add badges to any list group item to show unread counts, activity, and more with the help of some {{nav:docs/utilities/flex::utilities}}."
				),

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
				new e.title("Custom content"),
				new e.text(
					"Add nearly any component within, even for linked list groups like the one below, with the help of {{nav:docs/utilities/flex::flexbox utilities}}."
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

			new e.section([
				new e.title("Checkboxes and radios"),
				new e.text(
					"Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without {{b.label}}s, but please remember to include an {{label}} property and value for accessibility."
				),

				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container(
							["first", "second", "third"].map((i) => {
								return new b.list.item([
									new b.input({
										type: "checkbox",
										id: `${i}Checkbox`,
										marginEnd: 2,
									}),
									new b.label(
										{ for: `${i}Checkbox`, class: "form-check-label" },
										`${core.uppercaseFirst(i)} checkbox`
									),
								]);
							})
						);
					},
				}),

				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container(
							["first", "second", "third"].map((i) => {
								return new b.list.item([
									new b.input({
										type: "radio",
										id: `${i}Radio`,
										name: "listGroupRadio",
										marginEnd: 2,
									}),
									new b.label(
										{ for: `${i}Radio`, class: "form-check-label" },
										`${core.uppercaseFirst(i)} radio`
									),
								]);
							})
						);
					},
				}),

				new e.text(
					"You can use {{stretched:true}} property on {{b.label}}s to make the whole {{b.list.item}} clickable."
				),

				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "list-group-w-400px" },
					output: () => {
						return new b.list.container(
							["first", "second", "third"].map((i) => {
								return new b.list.item([
									new b.input({
										type: "checkbox",
										id: `${i}CheckboxStretched`,
										marginEnd: 2,
									}),
									new b.label(
										{
											for: `${i}CheckboxStretched`,
											class: "form-check-label",
											stretched: true,
										},
										`${core.uppercaseFirst(i)} checkbox`
									),
								]);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Variables"),
				new e.text(
					"As part of Bootstrap’s evolving CSS variables approach, list groups now use local CSS variables on {{.list-group}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
				),

				new e.codepreview({
					type: "css",
					title: "scss/_list-group.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_list-group.scss",
					code: `
						--#{$prefix}list-group-color: #{$list-group-color};
						--#{$prefix}list-group-bg: #{$list-group-bg};
						--#{$prefix}list-group-border-color: #{$list-group-border-color};
						--#{$prefix}list-group-border-width: #{$list-group-border-width};
						--#{$prefix}list-group-border-radius: #{$list-group-border-radius};
						--#{$prefix}list-group-item-padding-x: #{$list-group-item-padding-x};
						--#{$prefix}list-group-item-padding-y: #{$list-group-item-padding-y};
						--#{$prefix}list-group-action-color: #{$list-group-action-color};
						--#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};
						--#{$prefix}list-group-action-hover-bg: #{$list-group-hover-bg};
						--#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};
						--#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};
						--#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};
						--#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};
						--#{$prefix}list-group-active-color: #{$list-group-active-color};
						--#{$prefix}list-group-active-bg: #{$list-group-active-bg};
						--#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};
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
						$list-group-color:                  var(--#{$prefix}body-color);
						$list-group-bg:                     var(--#{$prefix}body-bg);
						$list-group-border-color:           var(--#{$prefix}border-color);
						$list-group-border-width:           var(--#{$prefix}border-width);
						$list-group-border-radius:          var(--#{$prefix}border-radius);

						$list-group-item-padding-y:         $spacer * .5;
						$list-group-item-padding-x:         $spacer;
						// fusv-disable
						$list-group-item-bg-scale:          -80%; // Deprecated in v5.3.0
						$list-group-item-color-scale:       40%; // Deprecated in v5.3.0
						// fusv-enable

						$list-group-hover-bg:               var(--#{$prefix}tertiary-bg);
						$list-group-active-color:           $component-active-color;
						$list-group-active-bg:              $component-active-bg;
						$list-group-active-border-color:    $list-group-active-bg;

						$list-group-disabled-color:         var(--#{$prefix}secondary-color);
						$list-group-disabled-bg:            $list-group-bg;

						$list-group-action-color:           var(--#{$prefix}secondary-color);
						$list-group-action-hover-color:     var(--#{$prefix}emphasis-color);

						$list-group-action-active-color:    var(--#{$prefix}body-color);
						$list-group-action-active-bg:       var(--#{$prefix}secondary-bg);
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sass loop"),
				new e.text(
					"Loop that generates the modifier classes with an overriding of CSS variables."
				),

				new e.codepreview({
					type: "css",
					title: "scss/_list-group.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_list-group.scss",
					code: `
						// List group contextual variants
						//
						// Add modifier classes to change text and background color on individual items.
						// Organizationally, this must come after the ":hover" states.

						@each $state in map-keys($theme-colors) {
							.list-group-item-#{$state} {
								--#{$prefix}list-group-color: var(--#{$prefix}#{$state}-text-emphasis);
								--#{$prefix}list-group-bg: var(--#{$prefix}#{$state}-bg-subtle);
								--#{$prefix}list-group-border-color: var(--#{$prefix}#{$state}-border-subtle);
								--#{$prefix}list-group-action-hover-color: var(--#{$prefix}emphasis-color);
								--#{$prefix}list-group-action-hover-bg: var(--#{$prefix}#{$state}-border-subtle);
								--#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);
								--#{$prefix}list-group-action-active-bg: var(--#{$prefix}#{$state}-border-subtle);
								--#{$prefix}list-group-active-color: var(--#{$prefix}#{$state}-bg-subtle);
								--#{$prefix}list-group-active-bg: var(--#{$prefix}#{$state}-text-emphasis);
								--#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);
							}
						}
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Tab behavior"),
				new e.text(
					"Use the tab JavaScript plugin—include it individually or through the compiled {{bootstrap.js}} file—to extend Bootstrap list group to create tabbable panes of local content."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						const data = ["home", "profile", "messages", "settings"];

						return new h.div({ row: true }, [
							new h.div(
								{ col: [5, "md-4"] },
								new b.tabList.container(
									{ id: "list-tab" },
									data.map((i, ix) => {
										return new b.tabList.item(
											{
												active: ix === 0,
												id: `list-${i}-list`,
												controlfor: `list-${i}`,
												href: `#list-${i}`,
												autoInit: true,
											},
											core.uppercaseFirst(i)
										);
									})
								)
							),
							new h.div(
								{ col: [7, "md-8"] },
								new b.tabList.tab.content(
									{ id: "nav-tabContent" },
									data.map((i, ix) => {
										return new b.tabList.tab.pane(
											{
												active: ix === 0,
												id: `list-${i}`,
												labelledby: `#list-${i}-list`,
											},
											`Some placeholder content in a paragraph relating to "${core.uppercaseFirst(
												i
											)}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
										);
									})
								)
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Using {{autoInit}} property"),
				new e.text(
					"You can activate a list group navigation automaticly by simply specifying {{autoInit:true}} on {{b.tabList.item}}. Make sure you provide {{href}} property that point to {{b.tabList.tab.pane}} {{id}}"
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						const data = ["home", "profile", "messages", "settings"];

						return new h.div({ row: true }, [
							new h.div(
								{ col: [5, "md-4"] },
								new b.tabList.container(
									{ id: "list-useprop-tab" },
									data.map((i, ix) => {
										return new b.tabList.item(
											{
												active: ix === 0,
												id: `list-useprop-${i}-list`,
												controlfor: `list-useprop-${i}`,
												href: `#list-useprop-${i}`, //point to tab pane
												autoInit: true, //auto init tab item
											},
											core.uppercaseFirst(i)
										);
									})
								)
							),
							new h.div(
								{ col: [7, "md-8"] },
								new b.tabList.tab.content(
									{ id: "nav-useprop-tabContent" },
									data.map((i, ix) => {
										return new b.tabList.tab.pane(
											{
												active: ix === 0,
												id: `list-useprop-${i}`,
												labelledby: `#list-useprop-${i}-list`,
											},
											`Some placeholder content in a paragraph relating to "${core.uppercaseFirst(
												i
											)}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
										);
									})
								)
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Manual init"),
				new e.text(
					"Enable tabbable list item via JavaScript (each list item needs to be activated individually):"
				),

				new e.alert(
					{ callout: true, color: "warning" },
					"By manually addEventListener, make sure you remove the event listernet on element remove to prevent memory leak."
				),

				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						const btnAttach = new b.button(
							{
								textWrap: false,
								on: {
									click: (e) => {
										const target = e.target as Element;
										const elem =
											document.querySelectorAll("#list-manual-tab a");
										elem.forEach((i) => {
											const tabTrigger = b.tabList.init(i);

											i.addEventListener("click", (event) => {
												event.preventDefault();
												tabTrigger.show();
											});
										});

										b.toast.show(
											b.toast.create({
												title: document.title,
												color: "success",
												elem: "Tab trigger attached",
											})
										);

										target.closest(".row")?.remove();
									},
								},
							},
							new b.caption({ icon: "paperclip" }, "Attach tab")
						);

						const data = ["home", "profile", "messages", "settings"];

						return [
							new h.div(
								{ row: true },
								new h.div({ col: [5, "md-4"], display: "grid" }, btnAttach)
							),

							new h.div({ row: true }, [
								new h.div(
									{ col: [5, "md-4"] },
									new b.tabList.container(
										{ id: "list-manual-tab" },
										data.map((i, ix) => {
											return new b.tabList.item(
												{
													active: ix === 0,
													id: `list-manual-${i}-list`,
													controlfor: `list-manual-${i}`,
													href: `#list-manual-${i}`,
												},
												core.uppercaseFirst(i)
											);
										})
									)
								),
								new h.div(
									{ col: [7, "md-8"] },
									new b.tabList.tab.content(
										{ id: "nav-manual-tabContent" },
										data.map((i, ix) => {
											return new b.tabList.tab.pane(
												{
													active: ix === 0,
													id: `list-manual-${i}`,
													labelledby: `#list-manual-${i}-list`,
												},
												`Some placeholder content in a paragraph relating to "${core.uppercaseFirst(
													i
												)}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
											);
										})
									)
								),
							]),
						];
					},
				}),

				new e.text("You can activate individual list item in several ways:"),
				new e.alert(
					{ callout: true, color: "success" },
					"{{bsts}} automaticly {{removeEventListener}} for event that create using {{on}} property to prevent memory leak."
				),

				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						const data = ["home", "profile", "messages", "settings"];

						return new h.div({ row: true }, [
							new h.div(
								{ col: [5, "md-4"] },
								new b.tabList.container(
									{ id: "list-direct-tab" },
									data.map((i, ix) => {
										return new b.tabList.item(
											{
												active: ix === 0,
												id: `list-direct-${i}-list`,
												controlfor: `list-direct-${i}`,
												href: `#list-direct-${i}`,
												on: {
													click: (e) => {
														e.preventDefault();
														const target = e.target as Element;
														b.tabList.show(target); //direct init and show the tab
													},
												},
											},
											core.uppercaseFirst(i)
										);
									})
								)
							),
							new h.div(
								{ col: [7, "md-8"] },
								new b.tabList.tab.content(
									{ id: "nav-direct-tabContent" },
									data.map((i, ix) => {
										return new b.tabList.tab.pane(
											{
												active: ix === 0,
												id: `list-direct-${i}`,
												labelledby: `#list-direct-${i}-list`,
											},
											`Some placeholder content in a paragraph relating to "${core.uppercaseFirst(
												i
											)}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
										);
									})
								)
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Fade effect"),

				new e.text(
					"By default, {{bsts}} add {{.fade}} class automaticly into {{b.tabList.tab.pane}} component. You can disable it by set {{animation:false}} to each {{b.tabList.tab.pane}}"
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						const data = ["home", "profile", "messages", "settings"];

						return new h.div({ row: true }, [
							new h.div(
								{ col: [5, "md-4"] },
								new b.tabList.container(
									{ id: "list-noanimate-tab" },
									data.map((i, ix) => {
										return new b.tabList.item(
											{
												active: ix === 0,
												id: `list-noanimate-${i}-list`,
												controlfor: `list-noanimate-${i}`,
												href: `#list-noanimate-${i}`,
												autoInit: true,
											},
											core.uppercaseFirst(i)
										);
									})
								)
							),
							new h.div(
								{ col: [7, "md-8"] },
								new b.tabList.tab.content(
									{ id: "nav-noanimate-tabContent" },
									data.map((i, ix) => {
										return new b.tabList.tab.pane(
											{
												active: ix === 0,
												id: `list-noanimate-${i}`,
												labelledby: `#list-noanimate-${i}-list`,
												animation: false, //disable tab pane animation
											},
											`Some placeholder content in a paragraph relating to "${core.uppercaseFirst(
												i
											)}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
										);
									})
								)
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Methods"),
				new e.alert(
					{ color: "danger", callout: true },
					"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}."
				),
				new e.text("Activates your content as a tab element."),
				new e.text("You can create a tab instance with the constructor, for example:"),

				new e.codepreview({
					type: "js",
					code: `
						const bsTab = new bootstrap.Tab('#myTab')
					`,
				}),

				new e.table({
					item: [
						["Method", "Description"],
						["{{dispose}}", "Destroys an element’s tab."],
						[
							"{{getInstance}}",
							"Static method which allows you to get the tab instance associated with a DOM element, you can use it like this: {{bootstrap.Tab.getInstance(element)}}.",
						],
						[
							"{{getOrCreateInstance}}",
							"Static method which returns a tab instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Tab.getOrCreateInstance(element)}}.",
						],
						[
							"{{show}}",
							"Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. {{b::Returns to the caller before the tab pane has actually been shown}} (i.e. before the {{shown.bs.tab}} event occurs).",
						],
					],
				}),

				new e.code({
					db: getContentCode(db),
					outputAttr: { position: "relative" },
					showConsole: true,
					output: () => {
						const data = ["home", "profile", "messages", "settings"];

						const clickTabEvent = (event: Event) => {
							event.preventDefault();
							const target = event.target as Element;
							b.tabList.show(target);
						};

						const tabContainer = new h.div({ row: true }, [
							new h.div(
								{ col: [5, "md-4"] },
								new b.tabList.container(
									{ id: "list-method-tab" },
									data.map((i, ix) => {
										return new b.tabList.item(
											{
												active: ix === 0,
												id: `list-method-${i}-list`,
												controlfor: `list-method-${i}`,
												href: `#list-method-${i}`,
											},
											core.uppercaseFirst(i)
										);
									})
								)
							),
							new h.div(
								{ col: [7, "md-8"] },
								new b.tabList.tab.content(
									{ id: "nav-method-tabContent" },
									data.map((i, ix) => {
										return new b.tabList.tab.pane(
											{
												active: ix === 0,
												id: `list-method-${i}`,
												labelledby: `#list-method-${i}-list`,
											},
											`Some placeholder content in a paragraph relating to "${core.uppercaseFirst(
												i
											)}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
										);
									})
								)
							),
						]);

						const initButton = new b.button(
							{
								color: "success",
								on: {
									click: (event) => {
										const elem =
											document.querySelectorAll("#list-method-tab a");
										elem.forEach((i) => {
											i.addEventListener("click", clickTabEvent);
										});

										e.console(
											event.target as Element,
											"b.tabList.init",
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
										const elem =
											document.querySelectorAll("#list-method-tab a");
										let elemInstance: (bootstrap.Tab | null)[] = [];

										elem.forEach((i) => {
											elemInstance.push(b.tabList.getInstance(i));
										});

										e.console(
											event.target as Element,
											"b.tabList.getInstance",
											elemInstance && elemInstance.length > 0
												? elemInstance
												: "null",
											elemInstance && elemInstance.length > 0
												? "success"
												: "danger"
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
											document.querySelectorAll("#list-method-tab a");
										let elemInstance: (bootstrap.Tab | null)[] = [];

										elem.forEach((i) => {
											elemInstance.push(b.tabList.getOrCreateInstance(i));
										});

										e.console(
											event.target as Element,
											"b.tabList.getOrCreateInstance",
											elemInstance && elemInstance.length > 0
												? elemInstance
												: "null",
											elemInstance && elemInstance.length > 0
												? "success"
												: "danger"
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
										const elem =
											document.querySelectorAll("#list-method-tab a");
										if (elem) {
											let i = elem[core.rndBetween(0, elem.length - 1)];
											if (i) {
												b.tabList.show(i);
												e.console(
													event.target as Element,
													"b.tabList.show",
													i ? i : "null",
													i ? "success" : "danger"
												);
											}
										}
									},
								},
							},
							"show (random)"
						);

						const disposeButton = new b.button(
							{
								color: "danger",
								on: {
									click: (event) => {
										const elem =
											document.querySelectorAll("#list-method-tab a");

										elem.forEach((i) => {
											b.tabList.dispose(i);
											i.removeEventListener("click", clickTabEvent);
										});

										e.console(
											event.target as Element,
											"b.tabList.dispose",
											elem && elem.length > 0 ? elem : "null",
											elem && elem.length > 0 ? "success" : "danger"
										);
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
							disposeButton,
						]);

						const previewContainer = new h.div(
							{
								width: 100,
								marginEnd: 3,
								bgColor: "body-tertiary",
								rounded: true,
								padding: 2,
							},
							tabContainer
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
				new e.text("When showing a new tab, the events fire in the following order:"),
				new e.ol({
					item: [
						"{{hide.bs.tab}} (on the current active tab)",
						"{{show.bs.tab}} (on the to-be-shown tab)",
						"{{hidden.bs.tab}} (on the previous active tab, the same one as for the {{hide.bs.tab}} event)",
						"{{shown.bs.tab}} (on the newly-active just-shown tab, the same one as for the {{show.bs.tab}} event)",
					],
				}),

				new e.text(
					"If no tab was already active, then the {{hide.bs.tab}} and {{hidden.bs.tab}} events will not be fired."
				),

				new e.table({
					item: [
						["Event type", "Description"],
						[
							"{{hide.bs.tab}}",
							"This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use {{event.target}} and {{event.relatedTarget}} to target the current active tab and the new soon-to-be-active tab, respectively.",
						],
						[
							"{{hidden.bs.tab}}",
							"This event fires after a new tab is shown (and thus the previous active tab is hidden). Use {{event.target}} and {{event.relatedTarget}} to target the previous active tab and the new active tab, respectively.",
						],
						[
							"{{show.bs.tab}}",
							"This event fires on tab show, but before the new tab has been shown. Use {{event.target}} and {{event.relatedTarget}} to target the active tab and the previous active tab (if available) respectively.",
						],
						[
							"{{shown.bs.tab}}",
							"This event fires on tab show after a tab has been shown. Use {{event.target}} and {{event.relatedTarget}} to target the active tab and the previous active tab (if available) respectively.",
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

						const data = ["home", "profile", "messages", "settings"];

						return new h.div({ row: true }, [
							new h.div(
								{ col: [5, "md-4"] },
								new b.tabList.container(
									{ id: "list-event-tab" },
									data.map((i, ix) => {
										return new b.tabList.item(
											{
												active: ix === 0,
												id: `list-event-${i}-list`,
												controlfor: `list-event-${i}`,
												href: `#list-event-${i}`,
												autoInit: true,
												on: {
													"shown.bs.tab": (event) => {
														const evnt =
															event as EventWithTargetAndRelatedTarget;
														e.console(
															evnt.target,
															"shown.bs.tab",
															`target: {{b::${evnt.target}}}{{br}}relatedTarget: {{b::${evnt.relatedTarget}}}`,
															"info"
														);
													},
												},
											},
											core.uppercaseFirst(i)
										);
									})
								)
							),
							new h.div(
								{ col: [7, "md-8"] },
								new b.tabList.tab.content(
									{ id: "nav-event-tabContent" },
									data.map((i, ix) => {
										return new b.tabList.tab.pane(
											{
												active: ix === 0,
												id: `list-event-${i}`,
												labelledby: `#list-event-${i}-list`,
												animation: false,
											},
											`Some placeholder content in a paragraph relating to "${core.uppercaseFirst(
												i
											)}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
										);
									})
								)
							),
						]);
					},
				}),
			]),
		];
	},
};

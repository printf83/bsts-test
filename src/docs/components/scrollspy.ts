import { core, h, b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const scrollspy: IAttrContent = {
	title: "Scrollspy",
	description:
		"Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.",
	item: [
		new e.title("How it works"),
		new e.text(
			"Scrollspy toggles the {{.active}} class on anchor ({{<a>}}) elements when the element with the {{id}} referenced by the anchor’s {{href}} is scrolled into view. Scrollspy is best used in conjunction with a Bootstrap {{nav:docs/components/nav::nav component}} or {{nav:docs/components/list::list group}}, but it will also work with any anchor elements in the current page. Here’s how it works."
		),
		new e.ul({
			item: [
				"To start, scrollspy requires two things: a navigation, list group, or a simple set of links, plus a scrollable container. The scrollable container can be the {{<body>}} or a custom element with a set {{height}} and {{overflow-y: scroll}}.",
				"On the scrollable container, add {{data-bs-spy='scroll'}} and {{data-bs-target='#navId'}} where {{navId}} is the unique {{id}} of the associated navigation. If there is no focusable element inside the element, be sure to also include a {{tabindex='0'}} to ensure keyboard access.",
				"As you scroll the “spied” container, an {{.active}} class is added and removed from anchor links within the associated navigation. Links must have resolvable {{id}} targets, otherwise they’re ignored. For example, a {{<a href='#home'>home</a>}} must correspond to something in the DOM like {{<div id='home'></div>}}",
				"Target elements that are not visible will be ignored. See the Non-visible elements section below.",
			],
		}),

		//-----------------------

		new e.title("Examples"),
		new e.subtitle("Navbar"),
		new e.text(
			"Scroll the area below the navbar and watch the active class change. Open the dropdown menu and watch the dropdown items be highlighted as well."
		),
		new e.code({
			output: () => {
				let headerItems = [
					new b.nav.header.item(new b.nav.header.link({ href: "#scrollspyHeading1" }, "First")),
					new b.nav.header.item(new b.nav.header.link({ href: "#scrollspyHeading2" }, "Second")),
					new b.nav.header.item({ dropdown: true }, [
						new b.dropdown.toggle({ navItem: true, href: "#" }, "Dropdown"),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#scrollspyHeading3" }, "Third"),
							new b.dropdown.item({ href: "#scrollspyHeading4" }, "Fourth"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#scrollspyHeading5" }, "Fifth"),
						]),
					]),
				];

				let contentItems: core.tag[] = [];
				["First", "Second", "Third", "Forth", "Fifth"].forEach((i, ix) => {
					contentItems.push(new h.h(4, { id: `scrollspyHeading${ix + 1}` }, `${i} heading`));
					contentItems.push(
						new h.p(
							"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. Bootstrap keep adding some more example copy here to emphasize the scrolling and highlighting."
						)
					);
				});

				return [
					new b.navbar.container(
						{
							id: "navbar-example",
							bgColor: "body-tertiary",
							paddingX: 3,
							marginBottom: 3,
							rounded: 2,
						},
						[
							new b.navbar.brand({ href: "#" }, "Navbar"),
							new b.nav.header.container({ type: "pill" }, headerItems),
						]
					),
					new b.scrollspy(
						{
							target: "#navbar-example",
							rootMargin: "0px 0px -40%",
							smooth: true,
							bgColor: "body-tertiary",
							padding: 3,
							rounded: 2,
							overflowX: "auto",
							style: { maxHeight: "200px" },
						},
						contentItems
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Nested nav"),
		new e.text(
			"Scrollspy also works with nested {{.navs}}. If a nested {{.nav}} is {{.active}}, its parents will also be {{.active}}. Scroll the area next to the navbar and watch the active class change."
		),
		new e.code({
			output: () => {
				let headerItems = new b.nav.header.containerNav(
					{
						type: "pill",
						flex: "column",
					},
					[
						new b.nav.header.link({ href: "#item-1" }, "Item 1"),
						new b.nav.header.containerNav(
							{
								type: "pill",
								flex: "column",
							},
							[
								new b.nav.header.link({ href: "#item-1-1", marginStart: 3, marginY: 1 }, "Item 1-1"),
								new b.nav.header.link({ href: "#item-1-2", marginStart: 3, marginY: 1 }, "Item 1-2"),
							]
						),
						new b.nav.header.link({ href: "#item-2" }, "Item 2"),
						new b.nav.header.link({ href: "#item-3" }, "Item 3"),
						new b.nav.header.containerNav(
							{
								type: "pill",
								flex: "column",
							},
							[
								new b.nav.header.link({ href: "#item-3-1", marginStart: 3, marginY: 1 }, "Item 3-1"),
								new b.nav.header.link({ href: "#item-3-2", marginStart: 3, marginY: 1 }, "Item 3-2"),
							]
						),
					]
				);

				let contentItems = ["1", "1-1", "1-2", "2", "3", "3-1", "3-2"].map((i) => {
					return new h.div({ id: `item-${i}` }, [
						new h.h(4, `Item ${i}`),
						new h.p(
							"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. Bootstrap keep adding some more example copy here to emphasize the scrolling and highlighting."
						),
						new h.p(
							"Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues."
						),
					]);
				});

				return new h.div({ row: true }, [
					new h.div(
						{ col: 4 },
						new h.nav(
							{
								id: "navbar-example2",
								height: 100,
								flex: "column",
								alignItem: "stretch",
								paddingEnd: 4,
								border: "end",
							},
							headerItems
						)
					),
					new h.div(
						{ col: 8 },
						new b.scrollspy(
							{
								target: "#navbar-example2",
								smooth: true,
								overflowX: "auto",
								style: { maxHeight: "312px" },
							},
							contentItems
						)
					),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("List group"),
		new e.text(
			"Scrollspy also works with {{.list-groups}}. Scroll the area next to the list group and watch the active class change."
		),
		new e.code({
			output: () => {
				let d = ["1", "2", "3", "4"];
				let headerItems = d.map((i) => {
					return new b.listDiv.item({ action: true, href: `#list-item-${i}` }, `Item ${i}`);
				});

				let contentItems: core.tag[] = [];
				d.forEach((i) => {
					contentItems.push(new h.h(4, { id: `list-item-${i}` }, `Item ${i}`));
					contentItems.push(
						new h.p(
							"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. Bootstrap keep adding some more example copy here to emphasize the scrolling and highlighting."
						)
					);
				});

				return new h.div({ row: true }, [
					new h.div(
						{ col: 4 },
						new b.listDiv.container(
							{
								id: "list-example",
							},
							headerItems
						)
					),
					new h.div(
						{ col: 8 },
						new b.scrollspy(
							{
								target: "#list-example",
								smooth: true,
								overflowX: "auto",
								style: { maxHeight: "165px" },
							},
							contentItems
						)
					),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Simple anchors"),
		new e.text(
			"Scrollspy is not limited to nav components and list groups, so it will work on any {{<a>}} anchor elements in the current document. Scroll the area and watch the {{.active}} class change."
		),
		new e.code({
			css: `
			#simple-list-example a.active{
				background-color: var(--bs-secondary-bg);
			}
			`,
			output: () => {
				let d = ["1", "2", "3", "4", "5"];
				let headerItems = d.map((i) => {
					return new h.a({ href: `#simple-list-item-${i}`, padding: 2, rounded: true }, `Item ${i}`);
				});

				let contentItems: core.tag[] = [];
				d.forEach((i) => {
					contentItems.push(new h.h(4, { id: `simple-list-item-${i}` }, `Item ${i}`));
					contentItems.push(
						new h.p(
							"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. Bootstrap keep adding some more example copy here to emphasize the scrolling and highlighting."
						)
					);
				});

				return new h.div({ row: true }, [
					new h.div(
						{ col: 4 },
						new h.div(
							{
								id: "simple-list-example",
								display: "flex",
								flex: "column",
								gap: 2,
								textAlign: "center",
							},
							headerItems
						)
					),
					new h.div(
						{ col: 8 },
						new b.scrollspy(
							{
								target: "#simple-list-example",
								smooth: true,
								overflowX: "auto",
								style: { maxHeight: "232px" },
								data: { "bs-offset": "0" },
							},
							contentItems
						)
					),
				]);
			},
		}),

		//-----------------------

		new e.title("Non-visible elements"),
		new e.text(
			"Target elements that aren’t visible will be ignored and their corresponding nav items won’t receive an {{.active}} class. Scrollspy instances initialized in a non-visible wrapper will ignore all target elements. Use the {{refresh}} method to check for observable elements once the wrapper becomes visible."
		),
		new e.codepreview({
			type: "js",
			code: `
				document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
				el.addEventListener('shown.bs.tab', () => {
					const target = el.getAttribute('data-bs-target')
					const scrollElem = document.querySelector('\${target} [data-bs-spy="scroll"]')
					bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
				});
				});
			`,
		}),

		//-----------------------

		new e.title("Usage"),
		new e.subtitle("Via data attributes"),
		new e.text(
			"To easily add scrollspy behavior to your topbar navigation, add {{data-bs-spy='scroll'}} to the element you want to spy on (most typically this would be the {{<body>}}). Then add the {{data-bs-target}} attribute with the {{id}} or {{class}} name of the parent element of any Bootstrap {{.nav}} component."
		),
		new e.codepreview({
			type: "html",
			code: `
				<body data-bs-spy="scroll" data-bs-target="#navbar-example">
				...
				<div id="navbar-example">
					<ul class="nav nav-tabs" role="tablist">
					...
					</ul>
				</div>
				...
				</body>
			`,
		}),

		//-----------------------

		new e.subtitle("Via JavaScript"),
		new e.codepreview({
			type: "js",
			code: `
				const scrollSpy = new bootstrap.ScrollSpy(document.body, {
					target: '#navbar-example'
				})
			`,
		}),

		//-----------------------

		new e.subtitle("Options"),
		new e.text(
			`As options can be passed via data attributes or JavaScript, you can append an option name to {{data-bs-}}, as in {{data-bs-animation="{value}"}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data-bs-custom-class="beautifier"}} instead of {{data-bs-customClass="beautifier"}}.`
		),
		new e.text(
			`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data-bs-config='{"delay":0, "title":123}'}} and {{data-bs-title="456"}} attributes, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data-bs-config}}. In addition, existing data attributes are able to house JSON values like {{data-bs-delay='{"show":0,"hide":150}'}}.`
		),
		new e.table({
			item: [
				["Name", "Type", "Default", "Description"],
				[
					"{{rootMargin}}",
					"string",
					"{{0px 0px -25%}}",
					"Intersection Observer {{https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin::rootMargin}} valid units, when calculating scroll position.",
				],
				[
					"{{smoothScroll}}",
					"boolean",
					"{{false}}",
					"Enables smooth scrolling when a user clicks on a link that refers to ScrollSpy observables.",
				],
				["{{target}}", "string, DOM element", "{{null}}", "Specifies element to apply Scrollspy plugin."],
				[
					"{{threshold}}",
					"array",
					"{{[0.1, 0.5, 1]}}",
					"{{IntersectionObserver}} {{https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold::threshold}} valid input, when calculating scroll position.",
				],
			],
		}),

		new e.alert({ color: "warning", callout: true }, [
			new b.alert.header(4, "Deprecated Options"),
			"Up until v5.1.3 Bootstrap were using {{offset}} & {{method}} options, which are now deprecated and replaced by {{rootMargin}}. To keep backwards compatibility, Bootstrap will continue to parse a given {{offset}} to {{rootMargin}}, but this feature will be removed in {{b::v6}}.",
		]),

		//-----------------------

		new e.subtitle("Methods"),
		new e.table({
			item: [
				["Method", "Description"],
				["{{dispose}}", "Destroys an element’s scrollspy. (Removes stored data on the DOM element)"],
				[
					"{{getInstance}}",
					"{{i::Static}} method to get the scrollspy instance associated with a DOM element.",
				],
				[
					"{{getOrCreateInstance}}",
					"{{i::Static}} method to get the scrollspy instance associated with a DOM element, or to create a new one in case it wasn’t initialized.",
				],
				["{{refresh}}", "When adding or removing elements in the DOM, you’ll need to call the refresh method."],
			],
		}),
		new e.text("Here’s an example using the refresh method:"),
		new e.codepreview({
			type: "js",
			code: `
				const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
				dataSpyList.forEach(dataSpyEl => {
					bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
				})
			`,
		}),

		//-----------------------

		new e.subtitle("Events"),
		new e.table({
			item: [
				["Event", "Description"],
				[
					"{{activate.bs.scrollspy}}",
					"This event fires on the scroll element whenever an anchor is activated by the scrollspy.",
				],
			],
		}),
		new e.codepreview({
			type: "css",
			code: `
				const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
				firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
					// do something...
				})
			`,
		}),
	],
};

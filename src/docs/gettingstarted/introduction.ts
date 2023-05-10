import { h, b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index";
import { IAttrContent } from "../../ctl/main/container";

const BSTSCDN = "https://cdn.jsdelivr.net/npm/@printf83/bsts@0.1.100/+esm";
const BSCDNCSS = [
	"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css",
	"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
];
const BSCDNJS = ["https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"];

export const introduction: IAttrContent = {
	title: "Get started with Bootstrap",
	description:
		"Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.",
	item: [
		new e.alert({ color: "warning", callout: true }, [
			new b.alert.header(3, "Disclaimer"),
			"This is {{b::not a real Bootstrap}} website. This is only a {{b::Bootstrap TS test website}} to test {{b::Bootstrap TS library}} {{bc::(bsts)}} and make sure it's fully support Bootstrap.",
		]),

		new e.title("Quick start"),
		new e.text([
			"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this ",
			new h.a(
				{
					href: "#",
					on: {
						click: () => {
							e.codePen({
								title: "Bootstrap TS demo",
								description: "Create bootstrap using TS/JS",
								private: false,
								tags: ["bsts", "Bootstrap TS", "@printf83/bsts"],
								editors: "001",
								layout: "top",

								css_external: BSCDNCSS,
								head: e.codeBeautify(
									"html",
									`<meta charset="utf-8">
									<meta name="viewport" content="width=device-width, initial-scale=1">`
								),

								html: e.codeBeautify("html", `<div id="root"></div>`),

								js_external: BSCDNJS,
								js: e.codeBeautify(
									"js",
									`
									import {core, h, b} from '${BSTSCDN}';

									const Component1 = new h.p("Hello world");
									const Component2 = new b.button({ color: "primary" }, "Button");
									const Component3 = new h.div({ row: true }, [
										new h.div({ col:4 }, ".col-4"),
										new h.div({ col:4 }, ".col-4"),
										new h.div({ col:4 }, ".col-4"),
									]);
									
									core.documentReady(() => {
										core.replaceChild(document.getElementById("root"), [
											Component1, 
											Component2, 
											Component3
										]);
									});
								`
								),
							} satisfies e.ICodePen);
						},
					},
				},
				"Bootstrap TS Demo"
			),
			" on {{CodePen}}.",
		]),
		new e.ol({
			item: [
				new h.div([
					'{{b::Create a new }}{{bc::index.html}}{{b:: file in your project root}}. Include the {{<meta name="viewport">}} tag as well for {{https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag::proper responsive behavior}} in mobile devices.',
					new e.codepreview({
						class: "ms-n4",
						marginStart: "md-0",
						type: "html",
						code: `
							<!doctype html>
							<html lang="en">
							<head>
								<meta charset="utf-8">
								<meta name="viewport" content="width=device-width, initial-scale=1">
								<link rel="stylesheet" href="${BSCDNCSS[0]}">
								<link rel="stylesheet" href="${BSCDNCSS[1]}">
								<title>Bootstrap TS demo</title>
							</head>
							<body>
								<div id="root"></div>
								<script src="${BSCDNJS[0]}"></script>
							</body>
							</html>
							`,
					}),
				]),
				new h.div([
					`{{b::Create a new }}{{bc::index.js}}{{b:: file in your project root}}. Import {{bsts}} library {{import {core, h} from "${BSTSCDN}";}} and write some code. Learn more about {{bsts}} {{nav:docs/gettingstarted/introduction#expose_function::Exposed function}}.`,
					new e.codepreview({
						class: "ms-n4",
						marginStart: "md-0",
						type: "js",
						code: `
							import {core, h, b} from '${BSTSCDN}';
							
							const Component1 = new h.p("Hello world");
							const Component2 = new b.button({ color: "primary" }, "Button");
							const Component3 = new h.div({ row: true }, [
								new h.div({ col:4 }, ".col-4"),
								new h.div({ col:4 }, ".col-4"),
								new h.div({ col:4 }, ".col-4"),
							]);
							
							core.documentReady(() => {
								core.replaceChild(document.getElementById("root"), [
									Component1, 
									Component2, 
									Component3
								]);
							});
							`,
					}),
				]),
				new h.div([
					"{{b::Include your index.js file in the index.html}}. Place the {{<script>}} tag before the closing {{</body>}}.",
					new e.codepreview({
						class: "ms-n4",
						marginStart: "md-0",
						type: "html",
						code: `
							<!doctype html>
							<html lang="en">
							<head>
								<meta charset="utf-8">
								<meta name="viewport" content="width=device-width, initial-scale=1">
								<link rel="stylesheet" href="${BSCDNCSS[0]}">
								<link rel="stylesheet" href="${BSCDNCSS[1]}">
								<title>Bootstrap TS demo</title>
							</head>
							<body>
								<div id="root"></div>
								<script src="${BSCDNJS[0]}"></script>

								<!--- put your script here ---->
								<script src="index.js" type="module"></script>
							</body>
							</html>
							`,
					}),
				]),
				new h.div(
					"{{b::Hello, world!}} Open the page in your browser of choice to see your Bootstrapped page. Now you can start building with Bootstrap by creating your own {{nav:docs/layout/grid::layout}}, adding dozens of {{nav:docs/components/button::components}}, and utilizing {{https://getbootstrap.com/docs/5.3/examples/::Bootstrap official examples}}."
				),
			],
		}),

		//-----------------------

		new e.title("Expose function"),
		new e.text("As reference, here are {{bsts}} primary CDN links."),
		new e.codepreview({
			type: "js",
			code: `import { core } from "${BSTSCDN}";`,
		}),
		new e.table({
			item: [
				["Library", "Description"],
				["core", "Core function to build html using {{bsts}}"],
				["I", "Interface if you like to use {{Typescript}}"],
				["h", "HTML component"],
				["H", "Create HTML component without {{new}} keyword"],
				["b", "Bootstrap component"],
				["B", "Create Bootstrap component without {{new}} keyword"],
				["t", "Main class that build all HTML and Bootstrap component"],
				["T", "Create t without {{new}} keyword."],
				["s", "Class to allow HTML syntax and process by {{core.build}} as HTML"],
				["S", "Create s wihthout {{new}} keyword."],
			],
		}),

		new e.text("Example usage."),
		new e.codepreview({
			type: "js",
			code: `
				import {core, h, b} from "${BSTSCDN}";

				const Component1 = new h.p("Hello world");
				const Component2 = new b.button({ color: "primary" }, "Button");

				core.documentReady(() => {
					core.replaceChild(document.getElementById("root"), [
						Component1,
						Component2,
					]);
				});
				`,
		}),
		new e.text("Example usage without {{new}} keyword."),
		new e.codepreview({
			type: "js",
			code: `
				import {core, H, B} from "${BSTSCDN}";

				const Component1 = H.P("Hello world");
				const Component2 = B.Button({ color: "primary" }, "Button");

				core.documentReady(() => {
					core.replaceChild(document.getElementById("root"), [
						Component1,
						Component2,
					]);
				});
				`,
		}),

		new e.text(
			"You can also use the CDN to fetch any of Bootstrap {{nav:docs/gettingstarted/content::additional builds listed in the Contents page}}."
		),

		//-----------------------

		new e.title("Next steps"),
		new e.ul({
			item: [
				"Read a bit more about some {{nav:docs/gettingstarted/introduction#important_globals::important global environment settings}} that Bootstrap utilizes.",
				"Read about what’s included in Bootstrap in Bootstrap {{https://getbootstrap.com/docs/5.3/getting-started/contents/::contents section}} and the list of {{nav:docs/gettingstarted/introduction#js_components::components that require JavaScript}} below.",
				"Need a little more power? Consider building with Bootstrap by {{https://getbootstrap.com/docs/5.3/getting-started/download/#package-managers::including the source files via package manager}}.",
				"Looking to use Bootstrap as a module with {{<script type='module'>}}? Please refer to Bootstrap using {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#using-bootstrap-as-a-module::Bootstrap as a module}} section.",
			],
		}),

		//-----------------------

		new e.title("JS components"),
		new e.text(
			"Curious which components explicitly require Bootstrap JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template."
		),

		new e.item(
			new h.details([
				new h.summary({ textColor: "primary" }, "Components requiring JavaScript"),
				new h.p(
					{ marginY: 3 },
					new h.ul({
						item: [
							"Alerts for dismissing",
							"Buttons for toggling states and checkbox/radio functionality",
							"Carousel for all slide behaviors, controls, and indicators",
							"Collapse for toggling visibility of content",
							"Dropdowns for displaying and positioning (also requires {{https://popper.js.org/::Popper}})",
							"Modals for displaying, positioning, and scroll behavior",
							"Navbar for extending Bootstrap Collapse and Offcanvas plugins to implement responsive behaviors",
							"Navs with the Tab plugin for toggling content panes",
							"Offcanvases for displaying, positioning, and scroll behavior",
							"Scrollspy for scroll behavior and navigation updates",
							"Toasts for displaying and dismissing",
							"Tooltips and popovers for displaying and positioning (also requires {{https://popper.js.org/::Popper}})",
						],
					})
				),
			])
		),

		//-----------------------

		new e.title("Important globals"),
		new e.text(
			"Bootstrap employs a handful of important global styles and settings, all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in."
		),

		//-----------------------

		new e.subtitle("HTML5 doctype"),
		new e.text(
			"Bootstrap requires the use of the HTML5 doctype. Without it, you’ll see some funky and incomplete styling."
		),
		new e.codepreview({
			type: "html",
			code: `
				<!doctype html>
				<html lang="en">
				...
				</html>
				`,
		}),

		//-----------------------

		new e.subtitle("Viewport meta"),
		new e.text(
			"Bootstrap is developed {{i::mobile first}}, a strategy in which Bootstrap optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your {{<head>}}."
		),
		new e.codepreview({
			type: "html",
			code: `
				<meta name="viewport" content="width=device-width, initial-scale=1">
				`,
		}),
		new e.text(
			"You can see an example of this in action in the {{nav:docs/gettingstarted/introduction#quick_start::quick start}}."
		),

		//-----------------------

		new e.subtitle("Box-sizing"),
		new e.text(
			"For more straightforward sizing in CSS, Bootstrap switch the global {{box-sizing}} value from {{content-box}} to {{border-box}}. This ensures {{padding}} does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine."
		),
		new e.text("On the rare occasion you need to override it, use something like the following:"),
		new e.codepreview({
			type: "css",
			code: `
				.selector-for-some-widget {
				box-sizing: content-box;
				}
				`,
		}),
		new e.text(
			"With the above snippet, nested elements—including generated content via {{/://:/before}} and {{/://:/after}}—will all inherit the specified {{box-sizing}} for that {{.selector-for-some-widget}}."
		),
		new e.text("Learn more about {{https://css-tricks.com/box-sizing/::box model and sizing at CSS Tricks}}."),

		//-----------------------

		new e.subtitle("Reboot"),
		new e.text(
			"For improved cross-browser rendering, Bootstrap use {{nav:docs/content/reboot::Reboot}} to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements."
		),

		//-----------------------

		new e.title("Community"),
		new e.text(
			"Stay up-to-date on the development of Bootstrap and reach out to the community with these helpful resources."
		),
		new e.ul({
			item: [
				"Read and subscribe to {{https://blog.getbootstrap.com/::The Official Bootstrap Blog}}.",
				"Ask and explore {{https://github.com/twbs/bootstrap/discussions::Bootstrap GitHub Discussions}}.",
				"Chat with fellow Bootstrappers in IRC. On the {{irc.libera.chat}} server, in the {{#bootstrap}} channel.",
				"Implementation help may be found at Stack Overflow (tagged {{https://stackoverflow.com/questions/tagged/bootstrap-5::bootstrap-5}}).",
				"Developers should use the keyword {{bootstrap}} on packages that modify or add to the functionality of Bootstrap when distributing through {{https://www.npmjs.com/search?q=keywords:bootstrap::npm}} or similar delivery mechanisms for maximum discoverability.",
			],
		}),
		new e.text(
			"You can also follow {{https://twitter.com/getbootstrap::@getbootstrap on Twitter}} for the latest gossip and awesome music videos."
		),
	],
};

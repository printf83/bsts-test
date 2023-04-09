import { h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index";
import { IAttrContent } from "../ctl/main/container";

export const doc_gettingstarted_introduction: IAttrContent = {
	title: "Get started with Bootstrap",
	description:
		"Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.",
	item: [
		new e.alert({ color: "warning", callout: true }, [
			new b.alert.header(1, "Disclaimer"),
			"This is {{b::not a real Bootstrap}} website. This is only a {{b::BSTS test website}} to test our {{b::bsts library}} and make sure it's fully support Bootstrap.",
		]),

		new e.title("Quick start"),
		new e.text(
			"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this {{https://codepen.io/team/bootstrap/pen/qBamdLj::Bootstrap CodePen demo}}."
		),
		new e.item(
			new h.ol({ paddingStart: [0, "md-4"] }, [
				new h.li([
					'{{b::Create a new}} {{index.html}} file in your project root. Include the {{<meta name="viewport">}} tag as well for {{https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag::proper responsive behavior}} in mobile devices.',
					new e.codepreview({
						type: "html",
						code: `
							<!doctype html>
							<html lang="en">
							<head>
								<meta charset="utf-8">
								<meta name="viewport" content="width=device-width, initial-scale=1">
								<title>Bootstrap demo</title>
							</head>
							<body>
								<h1>Hello, world!</h1>
							</body>
							</html>
							`,
					}),
				]),
				new h.li([
					"{{b::Include Bootstrap’s CSS and JS}}. Place the {{<link>}} tag in the {{<head>}} for our CSS, and the {{<script>}} tag for our JavaScript bundle (including Popper for positioning dropdowns, poppers, and tooltips) before the closing {{</body>}}. Learn more about our {{https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-links::CDN links}}.",
					new e.codepreview({
						type: "html",
						code: `
							<!doctype html>
							<html lang="en">
							<head>
								<meta charset="utf-8">
								<meta name="viewport" content="width=device-width, initial-scale=1">
								<title>Bootstrap demo</title>
								<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
							</head>
							<body>
								<h1>Hello, world!</h1>
								<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
							</body>
							</html>

							`,
					}),
					"You can also include {{https://popper.js.org/::Popper}} and our JS separately. If you don’t plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.",
					new e.codepreview({
						type: "html",
						code: `
							<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
							<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
							`,
					}),
				]),
				new h.li([
					"{{b::Hello, world!}} Open the page in your browser of choice to see your Bootstrapped page. Now you can start building with Bootstrap by creating your own {{?q=doc_layout_grid::layout}}, adding dozens of {{?q=doc_component_button::components}}, and utilizing {{https://getbootstrap.com/docs/5.3/examples/::our official examples}}.",
				]),
			])
		),

		//-----------------------

		new e.title("CDN links"),
		new e.text("As reference, here are our primary CDN links."),
		new e.table({
			item: [
				["Description", "URLs"],
				["CSS", "{{https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css}}"],
				["JS", "{{https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js}}"],
			],
		}),
		new e.text(
			"You can also use the CDN to fetch any of our {{?q=doc_gettingstarted_content::additional builds listed in the Contents page}}."
		),

		//-----------------------

		new e.title("Next steps"),
		new e.ul({
			item: [
				"Read a bit more about some {{https://getbootstrap.com/docs/5.3/getting-started/introduction/#important-globals::important global environment settings}} that Bootstrap utilizes.",
				"Read about what’s included in Bootstrap in our {{https://getbootstrap.com/docs/5.3/getting-started/contents/::contents section}} and the list of {{https://getbootstrap.com/docs/5.3/getting-started/introduction/#js-components::components that require JavaScript}} below.",
				"Need a little more power? Consider building with Bootstrap by {{https://getbootstrap.com/docs/5.3/getting-started/download/#package-managers::including the source files via package manager}}.",
				"Looking to use Bootstrap as a module with {{<script type='module'>}}? Please refer to our using {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#using-bootstrap-as-a-module::Bootstrap as a module}} section.",
			],
		}),

		//-----------------------

		new e.title("JS components"),
		new e.text(
			"Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template."
		),
		new e.text("Components requiring JavaScript"),

		new e.ul({
			item: [
				"Alerts for dismissing",
				"Buttons for toggling states and checkbox/radio functionality",
				"Carousel for all slide behaviors, controls, and indicators",
				"Collapse for toggling visibility of content",
				"Dropdowns for displaying and positioning (also requires {{https://popper.js.org/::Popper}})",
				"Modals for displaying, positioning, and scroll behavior",
				"Navbar for extending our Collapse and Offcanvas plugins to implement responsive behaviors",
				"Navs with the Tab plugin for toggling content panes",
				"Offcanvases for displaying, positioning, and scroll behavior",
				"Scrollspy for scroll behavior and navigation updates",
				"Toasts for displaying and dismissing",
				"Tooltips and popovers for displaying and positioning (also requires {{https://popper.js.org/::Popper}})",
			],
		}),

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
			"Bootstrap is developed {{i::mobile first}}, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your {{<head>}}."
		),
		new e.codepreview({
			type: "html",
			code: `
				<meta name="viewport" content="width=device-width, initial-scale=1">
				`,
		}),
		new e.text(
			"You can see an example of this in action in the {{https://getbootstrap.com/docs/5.3/getting-started/introduction/#quick-start::quick start}}."
		),

		//-----------------------

		new e.subtitle("Box-sizing"),
		new e.text(
			"For more straightforward sizing in CSS, we switch the global {{box-sizing}} value from {{content-box}} to {{border-box}}. This ensures {{padding}} does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine."
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
			"With the above snippet, nested elements—including generated content via {{::before}} and {{::after}}—will all inherit the specified {{box-sizing}} for that {{.selector-for-some-widget}}."
		),
		new e.text("Learn more about {{https://css-tricks.com/box-sizing/::box model and sizing at CSS Tricks}}."),

		//-----------------------

		new e.subtitle("Reboot"),
		new e.text(
			"For improved cross-browser rendering, we use {{https://getbootstrap.com/docs/5.3/content/reboot/::Reboot}} to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements."
		),

		//-----------------------

		new e.title("Community"),
		new e.text(
			"Stay up-to-date on the development of Bootstrap and reach out to the community with these helpful resources."
		),
		new e.ul({
			item: [
				"Read and subscribe to {{https://blog.getbootstrap.com/::The Official Bootstrap Blog}}.",
				"Ask and explore {{https://github.com/twbs/bootstrap/discussions::our GitHub Discussions}}.",
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

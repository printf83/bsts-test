import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const card: IContent = {
	title: "Cards",
	description:
		"Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("About"),
				new e.text(
					"A {{card}} ({{b.card.container}}) is a flexible and extensible content container. It includes options for headers ({{b.card.header}}) and footers ({{b.card.footer}}), a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace Bootstrap old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Example"),
				new e.text(
					"Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no {{margin}} by default, so use {{nav:docs/utilities/spacing::spacing utilities}} as needed."
				),
				new e.text(
					"Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with Bootstrap various {{nav:docs/components/card#sizing::sizing options}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.img({
								location: "top",
								src: "https://picsum.photos/seed/bsts_0/286/180.webp",
								alt: "Image cap",
							}),
							new b.card.body([
								new b.card.title("Card title"),
								new b.card.text(
									"Some quick example text to build on the card title and make up the bulk of the card's content."
								),
								new b.button("Go somewhere"),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Content types"),
				new e.text(
					"Cards support a wide variety of content, including images ({{b.card.img}}), text ({{b.card.text}}), list groups ({{b.list.container}}), links ({{b.card.link}}), and more. Below are examples of what’s supported."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Body"),
				new e.text(
					"The building block of a card is the {{b.card.body}}. Use it whenever you need a padded section within a card."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container(
							new b.card.body("This is some text within a card body.")
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Titles, text, and links"),
				new e.text(
					"Card titles are used by adding {{b.card.title}} component. In the same way, links are added and placed next to each other by adding {{b.card.link}} component."
				),
				new e.text(
					"Subtitles are used by adding a {{b.card.subtitle}} component. If the {{b.card.title}} and the {{b.card.subtitle}} items are placed in a {{b.card.body}} component, the card title and subtitle are aligned nicely."
				),

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

			new e.section({ id: "contenttype_images" }, [
				new e.subtitle({ id: "contenttype_images" }, "Images"),
				new e.text(
					"{{location:top}} places an image ({{b.card.img}}) to the top of the card. With {{b.card.text}}, text can be added to the card. Text within {{b.card.text}} can also be styled with the standard HTML tags using {{s}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.img({
								location: "top",
								src: "https://picsum.photos/seed/bsts_0/286/180.webp",
								alt: "Image cap",
							}),
							new b.card.body([
								new b.card.text(
									"Some quick example text to build on the card title and make up the bulk of the card's content."
								),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("List groups"),
				new e.text(
					"Create lists of content in a card using {{b.list.container}} with a flush list group using {{flush:true}} property."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.list.container({ flush: true }, [
								new b.list.item("An item"),
								new b.list.item("A second item"),
								new b.list.item("A third item"),
							]),
						]);
					},
				}),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.header("Featured"),
							new b.list.container({ flush: true }, [
								new b.list.item("An item"),
								new b.list.item("A second item"),
								new b.list.item("A third item"),
							]),
						]);
					},
				}),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.list.container({ flush: true }, [
								new b.list.item("An item"),
								new b.list.item("A second item"),
								new b.list.item("A third item"),
							]),
							new b.card.footer("Card footer"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Kitchen sink"),
				new e.text(
					"Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.img({
								location: "top",
								src: "https://picsum.photos/seed/bsts_0/286/180.webp",
								alt: "Image cap",
							}),
							new b.card.body([
								new b.card.title("Card title"),
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
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Header and footer"),
				new e.text(
					"Add an optional header ({{b.card.header}}) and/or footer ({{b.card.footer}}) within a card."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container([
							new b.card.header("Featured"),
							new b.card.body([
								new b.card.title("Special title treatment"),
								new b.card.text(
									"With supporting text below as a natural lead-in to additional content."
								),
								new b.button("Go somewhere"),
							]),
						]);
					},
				}),

				new e.text("Card headers can be styled by adding {{b.card.header}} component."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container([
							new h.h(5, { class: "card-header" }, "Featured"),
							new b.card.body([
								new b.card.title("Special title treatment"),
								new b.card.text(
									"With supporting text below as a natural lead-in to additional content."
								),
								new b.button("Go somewhere"),
							]),
						]);
					},
				}),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container([
							new h.div({ class: "card-header" }, "Quote"),
							new b.card.body([
								new b.blockquote.container({ marginBottom: 0 }, [
									new h.p(
										"A well-known quote, contained in a blockquote element."
									),
									new b.blockquote.footer([
										"Someone famous in ",
										new h.cite({ title: "Source Title" }, "Source Title"),
									]),
								]),
							]),
						]);
					},
				}),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ textAlign: "center" }, [
							new b.card.header("Featured"),
							new b.card.body([
								new b.card.title("Special title treatment"),
								new b.card.text(
									"With supporting text below as a natural lead-in to additional content."
								),
								new b.button("Go somewhere"),
							]),
							new b.card.footer({ textColor: "body-secondary" }, "2 days ago"),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Sizing"),
				new e.text(
					"Cards assume no specific {{width}} to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Using grid markup"),
				new e.text("Using the grid, wrap cards in columns and rows as needed."),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div({ row: true }, [
							new h.div(
								{ col: "sm-6", marginBottom: [3, "sm-0"] },
								new b.card.container(
									new b.card.body([
										new b.card.title("Special title treatment"),
										new b.card.text(
											"With supporting text below as a natural lead-in to additional content."
										),
										new b.button("Go somewhere"),
									])
								)
							),
							new h.div(
								{ col: "sm-6", marginBottom: [3, "sm-0"] },
								new b.card.container(
									new b.card.body([
										new b.card.title("Special title treatment"),
										new b.card.text(
											"With supporting text below as a natural lead-in to additional content."
										),
										new b.button("Go somewhere"),
									])
								)
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Using utilities"),
				new e.text(
					"Use Bootstrap handful of {{nav:docs/utilities/sizing::available sizing utilities}} to quickly set a card’s width."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new b.card.container(
								{ width: 75, marginBottom: 3 },
								new b.card.body([
									new b.card.title("Card title"),
									new b.card.text(
										"With supporting text below as a natural lead-in to additional content."
									),
									new b.button("Button"),
								])
							),
							new b.card.container(
								{ width: 50 },
								new b.card.body([
									new b.card.title("Card title"),
									new b.card.text(
										"With supporting text below as a natural lead-in to additional content."
									),
									new b.button("Button"),
								])
							),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Using custom CSS"),
				new e.text(
					"Use custom CSS in your stylesheets or as inline styles to set a width."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.body([
								new b.card.title("Special title treatment"),
								new b.card.text(
									"With supporting text below as a natural lead-in to additional content."
								),
								new b.button("Go somewhere"),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Text alignment"),
				new e.text(
					"You can quickly change the text alignment of any card—in its entirety or specific parts—with Bootstrap {{nav:docs/utilities/text#text_alignment::text align property}} like {{textAlign:<value>}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [undefined, "center", "end"].map((i) => {
							return new b.card.container(
								{
									style: { width: "18rem" },
									marginTop: i ? 3 : undefined,
									textAlign: i as core.Class["textAlign"],
								},
								[
									new b.card.body([
										new b.card.title("Special title treatment"),
										new b.card.text(
											"With supporting text below as a natural lead-in to additional content."
										),
										new b.button("Go somewhere"),
									]),
								]
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Navigation"),
				new e.text(
					"Add some navigation to a card’s header (or block) with Bootstrap’s {{nav:docs/components/nav::nav components}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ textAlign: "center" }, [
							new b.card.header(
								new b.card.nav({ type: "tab" }, [
									new b.nav.header.item(
										new b.nav.header.link({ active: true, href: "#" }, "Active")
									),
									new b.nav.header.item(
										new b.nav.header.link({ href: "#" }, "Link")
									),
									new b.nav.header.item(
										new b.nav.header.link(
											{ disabled: true, href: "#" },
											"Disabled"
										)
									),
								])
							),
							new b.card.body([
								new b.card.title("Special title treatment"),
								new b.card.text(
									"With supporting text below as a natural lead-in to additional content."
								),
								new b.button("Go somewhere"),
							]),
						]);
					},
				}),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ textAlign: "center" }, [
							new b.card.header(
								new b.card.nav({ type: "pill" }, [
									new b.nav.header.item(
										new b.nav.header.link({ active: true, href: "#" }, "Active")
									),
									new b.nav.header.item(
										new b.nav.header.link({ href: "#" }, "Link")
									),
									new b.nav.header.item(
										new b.nav.header.link(
											{ disabled: true, href: "#" },
											"Disabled"
										)
									),
								])
							),
							new b.card.body([
								new b.card.title("Special title treatment"),
								new b.card.text(
									"With supporting text below as a natural lead-in to additional content."
								),
								new b.button("Go somewhere"),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Images"),
				new e.text(
					"Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Image caps"),
				new e.text(
					"Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card using {{location:'top'|'bottom'}} property to {{b.card.img}}."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new b.card.container({ marginBottom: 3 }, [
								new b.card.img({
									location: "top",
									src: "https://picsum.photos/seed/bsts_0/708/180.webp",
									alt: "Image cap",
								}),
								new b.card.body([
									new b.card.title("Card title"),
									new b.card.text(
										"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
									),
									new b.card.text(
										new h.small(
											{ textColor: "body-secondary" },
											"Last updated 3 mins ago"
										)
									),
								]),
							]),
							new b.card.container([
								new b.card.body([
									new b.card.title("Card title"),
									new b.card.text(
										"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
									),
									new b.card.text(
										new h.small(
											{ textColor: "body-secondary" },
											"Last updated 3 mins ago"
										)
									),
								]),
								new b.card.img({
									location: "bottom",
									src: "https://picsum.photos/seed/bsts_0/708/180.webp",
									alt: "Image cap",
								}),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Image overlays"),
				new e.text(
					"Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ textBgColor: "dark", overflow: "hidden" }, [
							new b.card.img({
								src: "https://picsum.photos/seed/bsts_0/708/180.webp",
								alt: "Card image",
							}),
							new b.card.imgoverlay([
								new b.card.title("Card title"),
								new b.card.text(
									"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
								),
								new b.card.text(
									new h.small(
										{ textColor: "body-secondary" },
										"Last updated 3 mins ago"
									)
								),
							]),
						]);
					},
				}),

				new e.alert(
					{ color: "info", callout: true },
					"Note that content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image."
				),

				new e.text(
					"You can use {{nav:docs/content/images#picture::picture source}} to change image base on viewport like this."
				),

				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new b.card.container({ textBgColor: "dark", overflow: "hidden" }, [
							new h.picture([
								new h.source({
									media: "(min-width:992px)",
									srcset: "https://picsum.photos/seed/bsts_0/708/180.webp",
								}),
								new h.source({
									media: "(min-width:768px)",
									srcset: "https://picsum.photos/seed/bsts_0/608/180.webp",
								}),
								new h.source({
									media: "(min-width:576px)",
									srcset: "https://picsum.photos/seed/bsts_0/508/180.webp",
								}),
								new b.card.img({
									src: "https://picsum.photos/seed/bsts_0/308/180.webp",
									width: 100,
									alt: "Card image",
								}),
							]),

							new b.card.imgoverlay([
								new b.card.title("Card title"),
								new b.card.text(
									"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
								),
								new b.card.text(
									new h.small(
										{ textColor: "body-secondary" },
										"Last updated 3 mins ago"
									)
								),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Horizontal"),
				new e.text(
					"Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, Bootstrap remove the grid gutters with {{gutter:0}} and use {{col:'<value>'}} property to make the card horizontal at the {{md}} breakpoint. Further adjustments may be needed depending on your card content."
				),

				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new b.card.container(
							{ overflow: "hidden", style: { maxWidth: "540px" } },
							[
								new h.div({ row: true, gutter: 0 }, [
									new h.div(
										{ col: "md-4" },
										new b.card.img({
											fluid: true,
											src: "https://picsum.photos/seed/bsts_0/180/250.webp",
											alt: "Image",
										})
									),
									new h.div(
										{ col: "md-8" },
										new b.card.body([
											new b.card.title("Card title"),
											new b.card.text(
												"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
											),
											new b.card.text(
												new h.small(
													{ textColor: "body-secondary" },
													"Last updated 3 mins ago"
												)
											),
										])
									),
								]),
							]
						);
					},
				}),

				new e.text(
					"You can use {{nav:docs/content/images#picture::picture source}} to change image base on viewport like this."
				),

				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new b.card.container(
							{ overflow: "hidden", style: { maxWidth: "540px" } },
							[
								new h.div({ row: true, gutter: 0 }, [
									new h.div(
										{ col: "md-4" },

										new h.picture([
											new h.source({
												media: "(min-width:768px)",
												srcset: "https://picsum.photos/seed/bsts_0/180/250.webp",
											}),
											new b.card.img({
												src: "https://picsum.photos/seed/bsts_0/308/180.webp",
												width: 100,
												alt: "Card image",
											}),
										])
									),
									new h.div(
										{ col: "md-8" },
										new b.card.body([
											new b.card.title("Card title"),
											new b.card.text(
												"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
											),
											new b.card.text(
												new h.small(
													{ textColor: "body-secondary" },
													"Last updated 3 mins ago"
												)
											),
										])
									),
								]),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Card styles"),
				new e.text(
					"Cards include various options for customizing their backgrounds, borders, and color."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Background and color"),
				new e.text(
					"Set a {{bgColor}} with contrasting foreground {{textColor}} with {{nav:docs/helpers/color_background::Bootstrap textBgColor helpers}}. Previously it was required to manually pair your choice of {{nav:docs/utilities/colors::textColor}} and {{nav:docs/utilities/background::bgColor}} utilities for styling, which you still may use if you prefer."
				),

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
									textBgColor: i as core.Class["textBgColor"],
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

				new e.alert({ color: "info", callout: true }, [
					new h.h(5, "Conveying meaning to assistive technologies"),
					new h.p(
						"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property."
					),
				]),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Border"),
				new e.text(
					"Use {{nav:docs/utilities/borders::border utilities}} to change just the {{borderColor}} of a card. Note that you can put {{textColor}} property on the parent {{b.card.container}} or a subset of the card’s contents as shown below."
				),

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
									borderColor: i as core.Class["borderColor"],
									marginTop: ix !== 0 ? 3 : undefined,
									style: { width: "18rem" },
								},
								[
									new b.card.header("Header"),
									new b.card.body({ textColor: i as core.Class["textColor"] }, [
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
				new e.subtitle("Mixins utilities"),
				new e.text(
					"You can also change the borders on the card header and footer as needed, and even remove their {{background-color}} with {{bgColor:'transparent'}}."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container(
							{
								borderColor: "success",
								style: { width: "18rem" },
							},
							[
								new b.card.header(
									{ borderColor: "success", bgColor: "transparent" },
									"Header"
								),
								new b.card.body({ textColor: "success" }, [
									new b.card.title("Success card title"),
									new b.card.text(
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									),
								]),
								new b.card.footer(
									{ borderColor: "success", bgColor: "transparent" },
									"Footer"
								),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Card layout"),
				new e.text(
					"In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, {{b::these layout options are not yet responsive}}."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Card groups"),
				new e.text(
					"Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use {{display:'flex'}} to become attached with uniform dimensions starting at the {{sm}} breakpoint."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.group(
							[
								"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
								"This card has supporting text below as a natural lead-in to additional content.",
								"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
							].map((i) => {
								return new b.card.container([
									new b.card.img({
										src: "https://picsum.photos/seed/bsts_0/235/180.webp",
										alt: "Image cap",
										location: "top",
									}),
									new b.card.body([
										new b.card.title("Card title"),
										new b.card.text(i),
										new b.card.text(
											new h.small(
												{ textColor: "body-secondary" },
												"Last updated 3 mins ago"
											)
										),
									]),
								]);
							})
						);
					},
				}),

				new e.text(
					"When using card groups with footers, their content will automatically line up."
				),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.group(
							[
								"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
								"This card has supporting text below as a natural lead-in to additional content.",
								"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
							].map((i) => {
								return new b.card.container([
									new b.card.img({
										src: "https://picsum.photos/seed/bsts_0/235/180.webp",
										alt: "Image cap",
										location: "top",
									}),
									new b.card.body([
										new b.card.title("Card title"),
										new b.card.text(i),
									]),
									new b.card.footer(
										new h.small(
											{ textColor: "body-secondary" },
											"Last updated 3 mins ago"
										)
									),
								]);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Grid cards"),
				new e.text(
					"Use the Bootstrap grid system and its {{nav:docs/layout/grid#row_columns::.row-cols classes}} to control how many grid columns (wrapped around your cards) you show per row. For example, here’s {{rowCols:1}} laying out the cards on one column, and {{rowCols:'md-2'}} splitting four cards to equal width across multiple rows, from the medium breakpoint up."
				),

				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new h.div(
							{
								row: true,
								rowCol: [1, "md-2"],
								gutter: 4,
							},
							[
								"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
								"This card has supporting text below as a natural lead-in to additional content.",
								"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
								"This is a longer card with supporting text below as a natural lead-in to additional content.",
							].map((i) => {
								return new h.div(
									{ col: true },
									new b.card.container([
										new b.card.img({
											src: "https://picsum.photos/seed/bsts_0/341/140.webp",
											alt: "Image cap",
											location: "top",
										}),
										new b.card.body([
											new b.card.title("Card title"),
											new b.card.text(i),
										]),
									])
								);
							})
						);
					},
				}),

				new e.text("Change it to {{rowCols:3}} and you’ll see the fourth card wrap."),

				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new h.div(
							{
								row: true,
								rowCol: [1, "md-3"],
								gutter: 4,
							},
							[
								"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
								"This card has supporting text below as a natural lead-in to additional content.",
								"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
								"This is a longer card with supporting text below as a natural lead-in to additional content.",
							].map((i) => {
								return new h.div(
									{ col: true },
									new b.card.container([
										new b.card.img({
											src: "https://picsum.photos/seed/bsts_0/218/140.webp",
											alt: "Image cap",
											location: "top",
										}),
										new b.card.body([
											new b.card.title("Card title"),
											new b.card.text(i),
										]),
									])
								);
							})
						);
					},
				}),

				new e.text(
					"When you need equal height, add {{height:100}} to the cards. If you want equal heights by default, you can set {{$card-height: 100%}} in Sass."
				),

				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new h.div(
							{
								row: true,
								rowCol: [1, "md-3"],
								gutter: 4,
							},
							[
								"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
								"This is a short card.",
								"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
								"This is a longer card with supporting text below as a natural lead-in to additional content.",
							].map((i) => {
								return new h.div(
									{ col: true },
									new b.card.container({ height: 100 }, [
										new b.card.img({
											src: "https://picsum.photos/seed/bsts_0/218/140.webp",
											alt: "Image cap",
											location: "top",
										}),
										new b.card.body([
											new b.card.title("Card title"),
											new b.card.text(i),
										]),
									])
								);
							})
						);
					},
				}),

				new e.text("Just like with card groups, card footers will automatically line up."),

				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new h.div(
							{
								row: true,
								rowCol: [1, "md-3"],
								gutter: 4,
							},
							[
								"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
								"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
								"This is a longer card with supporting text below as a natural lead-in to additional content.",
							].map((i) => {
								return new h.div(
									{ col: true },
									new b.card.container({ height: 100 }, [
										new b.card.img({
											src: "https://picsum.photos/seed/bsts_0/218/140.webp",
											alt: "Image cap",
											location: "top",
										}),
										new b.card.body([
											new b.card.title("Card title"),
											new b.card.text(i),
										]),
										new b.card.footer(
											new h.small(
												{ textColor: "body-secondary" },
												"Last updated 3 mins ago"
											)
										),
									])
								);
							})
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Masonry"),
				new e.text(
					"In v4 Bootstrap used a CSS-only technique to mimic the behavior of {{https://masonry.desandro.com/::Masonry}}-like columns, but this technique came with lots of unpleasant {{https://github.com/twbs/bootstrap/pull/28922::side effects}}. If you want to have this type of layout in v5, you can just make use of Masonry plugin. {{b::Masonry is not included in Bootstrap}}, but Bootstrap made a {{https://getbootstrap.com/docs/5.3/examples/masonry/::demo example}} to help you get started."
				),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Variables"),
				new e.text(
					"As part of Bootstrap’s evolving CSS variables approach, card now use local CSS variables on {{.card}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
				),

				new e.codepreview({
					type: "css",
					title: "scss/_card.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_card.scss",
					code: `
						--#{$prefix}card-spacer-y: #{$card-spacer-y};
						--#{$prefix}card-spacer-x: #{$card-spacer-x};
						--#{$prefix}card-title-spacer-y: #{$card-title-spacer-y};
						--#{$prefix}card-title-color: #{$card-title-color};
						--#{$prefix}card-subtitle-color: #{$card-subtitle-color};
						--#{$prefix}card-border-width: #{$card-border-width};
						--#{$prefix}card-border-color: #{$card-border-color};
						--#{$prefix}card-border-radius: #{$card-border-radius};
						--#{$prefix}card-box-shadow: #{$card-box-shadow};
						--#{$prefix}card-inner-border-radius: #{$card-inner-border-radius};
						--#{$prefix}card-cap-padding-y: #{$card-cap-padding-y};
						--#{$prefix}card-cap-padding-x: #{$card-cap-padding-x};
						--#{$prefix}card-cap-bg: #{$card-cap-bg};
						--#{$prefix}card-cap-color: #{$card-cap-color};
						--#{$prefix}card-height: #{$card-height};
						--#{$prefix}card-color: #{$card-color};
						--#{$prefix}card-bg: #{$card-bg};
						--#{$prefix}card-img-overlay-padding: #{$card-img-overlay-padding};
						--#{$prefix}card-group-margin: #{$card-group-margin};
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
						$card-spacer-y:                     $spacer;
						$card-spacer-x:                     $spacer;
						$card-title-spacer-y:               $spacer * .5;
						$card-title-color:                  null;
						$card-subtitle-color:               null;
						$card-border-width:                 var(--#{$prefix}border-width);
						$card-border-color:                 var(--#{$prefix}border-color-translucent);
						$card-border-radius:                var(--#{$prefix}border-radius);
						$card-box-shadow:                   null;
						$card-inner-border-radius:          subtract($card-border-radius, $card-border-width);
						$card-cap-padding-y:                $card-spacer-y * .5;
						$card-cap-padding-x:                $card-spacer-x;
						$card-cap-bg:                       rgba(var(--#{$prefix}body-color-rgb), .03);
						$card-cap-color:                    null;
						$card-height:                       null;
						$card-color:                        null;
						$card-bg:                           var(--#{$prefix}body-bg);
						$card-img-overlay-padding:          $spacer;
						$card-group-margin:                 $grid-gutter-width * .5;
					`,
				}),
			]),
		];
	},
};

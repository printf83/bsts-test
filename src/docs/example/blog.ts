import { b, core, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const blog: IContent = {
	fullscreen: true,
	title: "Blog",
	item: () => {
		const header = new h.header(
			{ border: "bottom", lineHeight: 1, paddingY: 3 },
			new h.div(
				{ row: true, flex: "nowrap", justifyContent: "between", alignItem: "center" },
				[
					new h.div(
						{ col: 4, paddingTop: 1 },
						new h.a({ linkColor: "secondary", href: "#" }, "Subscribe")
					),
					new h.div(
						{ col: 4, textAlign: "center" },
						new h.a(
							{
								class: "font-serif",
								h: 3,
								fontWeight: "bold",
								textColor: "body-emphasis",
								textDecoration: "none",
								href: "#",
							},
							"Large"
						)
					),
					new h.div(
						{
							col: 4,
							display: "flex",
							justifyContent: "end",
							alignItem: "center",
						},
						[
							new h.a(
								{ linkColor: "secondary", href: "#", label: "Search", marginX: 3 },
								new b.icon("search")
							),
							new b.button(
								{ weight: "sm", outline: true, color: "secondary", href: "#" },
								"Sign up"
							),
						]
					),
				]
			)
		);

		const navbar = new h.div(
			{ paddingY: 1, marginBottom: 3, border: "bottom" },
			new b.nav.header.container({
				flex: "nowrap",
				overflowX: "hidden",
				justifyContent: "between",
				link: [
					{
						active: true,
						href: "#",
						textColor: "body-emphasis",
						fontWeight: "bold",
						elem: "World",
					},
					{ href: "#", textColor: "body-emphasis", elem: "MY" },
					{ href: "#", textColor: "body-emphasis", elem: "Technology" },
					{ href: "#", textColor: "body-emphasis", elem: "Design" },
					{ href: "#", textColor: "body-emphasis", elem: "Culture" },
					{ href: "#", textColor: "body-emphasis", elem: "Business" },
					{ href: "#", textColor: "body-emphasis", elem: "Politics" },
					{ href: "#", textColor: "body-emphasis", elem: "Opinion" },
					{ href: "#", textColor: "body-emphasis", elem: "Science" },
					{ href: "#", textColor: "body-emphasis", elem: "Health" },
					{ href: "#", textColor: "body-emphasis", elem: "Style" },
					{ href: "#", textColor: "body-emphasis", elem: "Travel" },
				],
			})
		);

		const banner = new h.div(
			{
				padding: [4, "md-5"],
				marginBottom: 4,
				rounded: true,
				textColor: "body-emphasis",
				bgColor: "body-secondary",
			},
			new h.div({ col: "lg-6", paddingX: 0 }, [
				new h.h(
					1,
					{ class: "font-serif", fontDisplay: 4, fontItalic: true, fontWeight: "bold" },
					"Title of a longer featured blog post"
				),
				new h.p(
					{ lead: true, marginY: 3 },
					"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents."
				),
				new h.p(
					{ lead: true, marginBottom: 0 },
					new h.a(
						{ textColor: "body-emphasis", fontWeight: "bold", href: "#" },
						"Continue reading..."
					)
				),
			])
		);

		const card = (opt: {
			img: string;
			group: string;
			title: string;
			date: string;
			description: string;
			href: string;
		}) => {
			return new h.div(
				{ col: "md-6" },
				new b.card.container(
					{ position: "relative", overflow: "hidden", shadow: "sm" },
					new h.div({ row: true }, [
						new h.div({ col: "md-8" }, [
							new b.card.body({ padding: 4 }, [
								new h.strong(
									{ display: "inline-block", marginBottom: 2 },
									opt.group
								),
								new b.card.title(
									{ class: "font-serif", h: 3, fontWeight: "bold", margin: 0 },
									opt.title
								),
								new b.card.text({ textColor: "secondary", margin: 0 }, opt.date),
								new b.card.text({ marginTop: 1, marginBottom: 3 }, opt.description),
								new b.card.link(
									{
										stretched: true,
										href: opt.href,
										display: "inline-block",
									},
									new b.label(
										{ icon: new b.icon("chevron-right"), iconPosition: "end" },
										"Continue reading"
									)
								),
							]),
						]),
						new h.div(
							{ col: true, display: ["none", "md-block"] },
							new b.card.img({
								fluid: true,
								src: opt.img,
								alt: "Image",
							})
						),
					])
				)
			);
		};

		const card_section = new h.div(
			{ overflow: "hidden" },
			new h.div(
				{ row: true, gutter: 3, marginY: 3 },
				[
					{
						img: "https://picsum.photos/seed/bsts_0/200/250.webp",
						group: "World",
						title: "Featured post",
						date: "Nov 12",
						description:
							"This is a wider card with supporting text below as a natural lead-in to additional content.",
						href: "#",
					},
					{
						img: "https://picsum.photos/seed/bsts_1/200/250.webp",
						group: "Design",
						title: "Post title",
						date: "Nov 11",
						description:
							"This is a wider card with supporting text below as a natural lead-in to additional content.",
						href: "#",
					},
				].map((i) => card(i))
			)
		);

		const post = (opt: {
			title: string;
			date: string;
			writer: string;
			writer_url: string;
			elem: core.IElem;
		}) => {
			return new h.article([
				new h.h(
					2,
					{
						class: "font-serif",
						fontWeight: "bold",
						fontDisplay: 5,
						textColor: "body-emphasis",
						marginBottom: 1,
						marginTop: 5,
					},
					opt.title
				),
				new h.p({ marginBottom: 5, textColor: "secondary" }, [
					opt.date,
					" by ",
					new h.a({ href: opt.writer_url }, opt.writer),
				]),
				new h.div(opt.elem),
			]);
		};

		const recent_post = (opt: { url: string; img: string; title: string; date: string }) => {
			return new h.a(
				{
					display: "flex",
					flex: ["column", "lg-row"],
					gap: 3,
					alignItem: ["start", "lg-center"],
					paddingY: 3,
					linkColor: "body-emphasis",
					textDecoration: "none",
					border: "top",
					href: opt.url,
				},
				[
					new b.img({ fluid: true, src: opt.img }),
					new h.div([
						new h.h(
							6,
							{
								class: "font-serif",
								fontWeight: "bold",
								h: 5,
								marginBottom: 0,
							},
							opt.title
						),
						new h.small({ textColor: "body-secondary" }, opt.date),
					]),
				]
			);
		};

		const content_main = new h.div({ col: "md-8" }, [
			new h.h(
				3,
				{
					class: "font-serif",
					fontWeight: "bold",
					paddingBottom: 4,
					marginBottom: 4,
					fontItalic: true,
					border: "bottom",
				},
				"From the Firehose"
			),
			...[
				{
					title: "Sample blog post",
					date: "January 1, 2021",
					writer: "Mark",
					writer_url: "#",
					elem: [
						new h.p(
							"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected."
						),
						new h.hr(),
						new h.p(
							"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
						),
						new h.h(2, { class: "font-serif", fontWeight: "bold" }, "Blockquote"),
						new h.p("This is an example blockquote in action:"),
						new b.blockquote.container("Quoted text goes here."),
						new h.p(
							"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
						),
						new h.h(2, { class: "font-serif", fontWeight: "bold" }, "Example lists"),
						new h.p(
							"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:"
						),
						new h.ul([
							new h.li("First list item"),
							new h.li("Second list item with a longer description"),
							new h.li("Third list item to close it out"),
						]),
						new h.p("And this is an ordered list:"),
						new h.ol([
							new h.li("First list item"),
							new h.li("Second list item with a longer description"),
							new h.li("Third list item to close it out"),
						]),
						new h.p("And this is a definition list:"),
						new h.dl([
							new h.dt("HyperText Markup Language (HTML)"),
							new h.dd(
								"The language used to describe and define the content of a Web page"
							),
							new h.dt("Cascading Style Sheets (CSS)"),
							new h.dd("Used to describe the appearance of Web content"),
							new h.dt("JavaScript (JS)"),
							new h.dd(
								"The programming language used to build advanced Web sites and applications"
							),
						]),
						new h.h(
							2,
							{ class: "font-serif", fontWeight: "bold" },
							"Inline HTML elements"
						),
						new h.p(
							"HTML defines a long list of available inline tags, a complete list of which can be found on the {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element::Mozilla Developer Network}}."
						),
						new h.ul([
							new h.li("{{s::To bold text}} use {{<strong>}}"),
							new h.li("{{i::To italicize text}}, use {{<em>}}."),
							new h.li([
								"Abbreviations, like ",
								new h.abbr({ title: "HyperText Markup Language" }, "HTML"),
								" should use {{<abbr>}}, with an optional {{title}} attribute for the full phrase.",
							]),
							new h.li([
								"Citations, like ",
								new h.cite("— Mark Otto"),
								", should use {{<cite>}}.",
							]),
							new h.li([
								new h.del("Deleted"),
								" text should use {{<del>}} and ",
								new h.ins("inserted"),
								" text should use {{<ins>}}.",
							]),
							new h.li([
								"Superscript ",
								new h.sup("text"),
								" uses {{<sup>}} and subscript ",
								new h.sub("text"),
								" uses {{<sub>}}.",
							]),
						]),
						new h.p(
							"Most of these elements are styled by browsers with few modifications on our part."
						),
						new h.h(1, { class: "font-serif", fontWeight: "bold" }, "Heading"),
						new h.p(
							"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
						),
						new h.h(2, { class: "font-serif", fontWeight: "bold" }, "Sub-heading"),
						new h.p(
							"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
						),

						new h.code(
							{ marginBottom: 3, display: "inline-block" },
							"Example code block"
						),
						new h.p(
							"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."
						),
					],
				},
				{
					title: "Another blog post",
					date: "December 23, 2020",
					writer: "Jacob",
					writer_url: "#",
					elem: [
						new h.p(
							"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
						),
						new h.p(
							"Longer quote goes here, maybe with some {{s::emphasized text}} in the middle of it."
						),
						new h.p(
							"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
						),
						new h.h(2, { class: "font-serif", fontWeight: "bold" }, "Example table"),
						new h.p("And don't forget about tables in these posts:"),
						new b.table.container({
							item: [
								["Name", "Upvotes", "Downvotes"],
								["Alice", "10", "11"],
								["Bob", "4", "3"],
								["Charlie", "7", "9"],
								["Totals", "21", "23"],
							],
						}),
						new h.p(
							"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."
						),
					],
				},
				{
					title: "New feature",
					date: "December 14, 2020",
					writer: "Chris",
					writer_url: "#",
					elem: [
						new h.p(
							"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
						),
						new h.ul([
							new h.li("First list item"),
							new h.li("Second list item with a longer description"),
							new h.li("Third list item to close it out"),
						]),
						new h.p(
							"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."
						),
					],
				},
			].map((i) => post(i)),
			new h.nav({ label: "Pagination", display: "flex", gap: 2, marginY: 5 }, [
				new b.button(
					{ outline: true, color: "primary", rounded: "pill", href: "#" },
					"Older"
				),
				new b.button(
					{
						disabled: true,
						outline: true,
						color: "secondary",
						rounded: "pill",
						href: "#",
					},
					"Newer"
				),
			]),
		]);

		const content_side = new h.div(
			{ col: "md-4" },
			new h.div({ position: "sticky", style: { top: "2rem" } }, [
				new h.div(
					{ padding: 4, marginBottom: 3, bgColor: "body-tertiary", rounded: true },
					[
						new h.h(
							4,
							{ class: "font-serif", fontWeight: "bold", fontItalic: true },
							"About"
						),
						new h.p(
							{ marginBottom: 0 },
							"Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you."
						),
					]
				),
				new h.div([
					new h.h(
						4,
						{ class: "font-serif", fontWeight: "bold", fontItalic: true },
						"Recent post"
					),
					new h.ul(
						{ unstyle: true },
						[
							{
								url: "#",
								img: "https://picsum.photos/seed/bsts_2/200/96.webp",
								title: "Example blog post title",
								date: "January 15, 2023",
							},
							{
								url: "#",
								img: "https://picsum.photos/seed/bsts_3/200/96.webp",
								title: "This is another blog post title",
								date: "January 14, 2023",
							},
							{
								url: "#",
								img: "https://picsum.photos/seed/bsts_4/200/96.webp",
								title: "Longer blog post title: This one has multiple lines!",
								date: "January 13, 2023",
							},
						].map((i) => {
							return new h.li(recent_post(i));
						})
					),
				]),

				new h.div({ padding: 4 }, [
					new h.h(
						4,
						{ class: "font-serif", fontWeight: "bold", fontItalic: true },
						"Archives"
					),
					new h.ul(
						{ unstyle: true, marginBottom: 0 },
						[
							{ url: "#", title: "March 2021" },
							{ url: "#", title: "February 2021" },
							{ url: "#", title: "January 2021" },
							{ url: "#", title: "December 2020" },
							{ url: "#", title: "November 2020" },
							{ url: "#", title: "October 2020" },
							{ url: "#", title: "Septermber 2020" },
							{ url: "#", title: "August 2020" },
							{ url: "#", title: "July 2020" },
							{ url: "#", title: "June 2020" },
							{ url: "#", title: "May 2020" },
							{ url: "#", title: "April 2020" },
						].map((i) => {
							return new h.li(new h.a({ href: i.url }, i.title));
						})
					),
				]),
				new h.div({ padding: 4 }, [
					new h.h(
						4,
						{ class: "font-serif", fontWeight: "bold", fontItalic: true },
						"Elsewhere"
					),
					new h.ul(
						{ unstyle: true, marginBottom: 0 },
						[
							{ url: "#", title: "Github" },
							{ url: "#", title: "Twitter" },
							{ url: "#", title: "Facebook" },
						].map((i) => {
							return new h.li(new h.a({ href: i.url }, i.title));
						})
					),
				]),
			])
		);

		const content_section = new h.div({ row: true, gutter: 5, marginTop: 0 }, [
			content_main,
			content_side,
		]);

		const footer = new h.footer(
			{ bgColor: "body-tertiary" },
			new h.div(
				{ container: true, paddingY: 5, textAlign: "center", textColor: "body-secondary" },
				[
					new h.p(
						"Blog template built for {{https://getbootstrap.com/::Bootstrap}} by {{https://twitter.com/mdo::@mdo}}."
					),
					new h.p({ marginBottom: 0 }, new h.a({ href: "#" }, "Back to top")),
				]
			)
		);

		return new h.div([
			new h.div({ container: true }, [header, navbar, banner, card_section, content_section]),
			footer,
		]);
	},
};

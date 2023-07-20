import { core, h, b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const placeholder: IContent = {
	title: "Placeholder",
	description:
		"Use loading placeholders for your components or pages to indicate something may still be loading.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("About"),
				new e.text(
					"Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with Bootstrap utility classes."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Example"),
				new e.text(
					"In the example below, Bootstrap take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two."
				),

				new e.code({
					db: getContentCode(db),
					manager: (item: core.tag[]) => {
						return new h.div(
							{ row: true },
							item.map((i) => {
								return new h.div({ col: [12, "md-6"], paddingY: 3 }, i);
							})
						);
					},
					output: () => {
						return [
							new b.card.container([
								new h.div({
									class: "card-img-top",
									bgColor: "primary",
									style: { height: "180px" },
								}),
								new b.card.body([
									new b.card.title("Card title"),
									new b.card.text(
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									),
									new b.button("Go somewhere"),
								]),
							]),

							new b.card.container([
								new h.div({
									class: "card-img-top",
									bgColor: "secondary",
									style: { height: "180px" },
								}),
								new b.card.body([
									new b.card.title(
										{ loadingPlaceholderAnimation: "glow" },
										new h.span({ loadingPlaceholder: true, col: 6 }, " ")
									),
									new b.card.text({ loadingPlaceholderAnimation: "glow" }, [
										new h.span(
											{ loadingPlaceholder: true, col: 7, marginEnd: 1 },
											" "
										),
										new h.span(
											{ loadingPlaceholder: true, col: 4, marginEnd: 1 },
											" "
										),
										new h.span(
											{ loadingPlaceholder: true, col: 4, marginEnd: 1 },
											" "
										),
										new h.span(
											{ loadingPlaceholder: true, col: 6, marginEnd: 1 },
											" "
										),
										new h.span({ loadingPlaceholder: true, col: 8 }, " "),
									]),
									new b.button(
										{ loadingPlaceholder: true, col: 6, disabled: true },
										" "
									),
								]),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("How it works"),
				new e.text(
					"Create placeholders with the {{loadingPlaceholder:true}} property and a grid column property (e.g., {{col:6}}) to set the {{width}}. They can replace the text inside an element or be added as a modifier class to an existing component."
				),
				new e.text(
					"Bootstrap apply additional styling to {{b.button}}s via {{/://:/before}} to ensure the {{height}} is respected. You may extend this pattern for other situations as needed, or add a {{empty string}} within the element to reflect the height when actual text is rendered in its place."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.p(
								{ aria: { hidden: true } },
								new h.span({ loadingPlaceholder: true, col: 6 }, " ")
							),
							new b.button({
								color: "primary",
								disabled: true,
								loadingPlaceholder: true,
								col: 4,
							}),
						];
					},
				}),
				new e.alert(
					{ color: "info", callout: true },
					" The use of {{aria:{hidden:'true'} }}only indicates that the element should be hidden to screen readers. The loading behavior of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript code may be needed to swap the state of the placeholder and inform AT users of the update."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Width"),
				new e.text(
					"You can change the {{width}} through grid column propertu, width utilities, or inline styles."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.span({ loadingPlaceholder: true, col: 6 }, " "),
							new h.span({ loadingPlaceholder: true, width: 75 }, " "),
							new h.span({ loadingPlaceholder: true, style: { width: "30%" } }, " "),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Colors"),
				new e.text(
					"By default, the {{placeholder}} uses {{currentColor}}. This can be overridden with a custom color or utility property."
				),
				new e.code({
					db: getContentCode(db),
					manager: (item: core.tag[]) => {
						return new h.div({ row: true, gutter: 2 }, item);
					},
					output: () => {
						return [
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
							return new h.span(
								{
									bgColor: i as core.IAttr["bgColor"],
									col: 12,
									loadingPlaceholder: true,
								},
								" "
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sizing"),
				new e.text(
					"The size of {{placeholders}} are based on the typographic style of the parent element. Customize them with sizing modifiers: {{placeholderWeight:'lg'}}, {{placeholderWeight:'sm'}}, or {{placeholderWeight:'xs'}}."
				),
				new e.code({
					db: getContentCode(db),
					manager: (item: core.tag[]) => {
						return new h.div({ row: true, gutter: 2 }, item);
					},
					output: () => {
						return ["lg", undefined, "sm", "xs"].map((i) => {
							return new h.span(
								{
									col: 12,
									loadingPlaceholder: true,
									loadingPlaceholderWeight:
										i as core.IAttr["loadingPlaceholderWeight"],
								},
								" "
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Animation"),
				new e.text(
					"Animate placeholders with {{loadingPlaceholderAnimation:'glow'}} or {{loadingPlaceholderAnimation:'wave'}} to better convey the perception of something being {{i::actively}} loaded."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return ["glow", "wave"].map((i) => {
							return new h.p(
								{
									loadingPlaceholderAnimation:
										i as core.IAttr["loadingPlaceholderAnimation"],
								},
								new h.span(
									{
										col: 12,
										loadingPlaceholder: true,
									},
									" "
								)
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("CSS")]),

			//----------------------

			new e.section([
				new e.subtitle("Variables"),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$placeholder-opacity-max:           .5;
						$placeholder-opacity-min:           .2;
					`,
				}),
			]),
		];
	},
};

import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const jumbotrons: IContent = {
	title: "Jumbotrons",
	description: "Create modernized versions of the classic Bootstrap component.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Jumbotron with icon"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div(
							{
								padding: 5,
								textAlign: "center",
								bgColor: "body-tertiary",
								rounded: 3,
							},
							[
								new b.icon({
									id: "hexagon-fill",
									fontDisplay: 1,
								}),
								new h.h(
									1,
									{ textColor: "body-emphasis", marginTop: 3 },
									"Jumbotron with icon"
								),
								new h.p(
									{
										col: "lg-8",
										marginX: "auto",
										fontSize: 5,
										textColor: "body-secondary",
									},
									"This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive {{.col-*}} class, and a customized call to action."
								),
								new h.div(
									{
										display: "inline-flex",
										flex: "wrap",
										justifyContent: "center",
										gap: 2,
										marginBottom: 5,
									},
									[
										new b.button(
											{
												display: "inline-flex",
												alignItem: "center",
												weight: "lg",
												rounded: "pill",
											},
											new b.caption(
												{ icon: "arrow-right", iconPosition: "end" },
												"Call to action"
											)
										),
										new b.button(
											{
												display: "inline-flex",
												alignItem: "center",
												weight: "lg",
												rounded: "pill",
												outline: true,
												color: "secondary",
											},
											"Secondary link"
										),
									]
								),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Placeholder jumbotron"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div(
							{
								position: "relative",
								padding: 5,
								textAlign: "center",
								textColor: "body-secondary",
								bgColor: "body",
								rounded: 3,
								border: true,
								style: { borderStyle: "dashed !important" },
							},
							[
								new b.btnclose({
									position: "absolute",
									top: 0,
									end: 0,
									padding: 3,
									margin: 3,
									bgColor: "secondary",
									bgOpacity: 10,
									rounded: 5,
								}),
								new b.icon({
									id: "check2-circle",
									fontDisplay: 3,
								}),
								new h.h(
									1,
									{ textColor: "body-emphasis", marginTop: 3 },
									"Placeholder jumbotron"
								),
								new h.p(
									{
										col: "lg-6",
										marginX: "auto",
										marginBottom: 4,
									},
									"This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action."
								),
								new b.button(
									{
										marginBottom: 5,
										paddingX: 5,
									},
									"Call to action"
								),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Full-width jumbotron"),
				new e.code({
					db: getContentCode(db),
					// outputAttr: { padding: 0 },
					previewAttr: { paddingX: 0 },
					output: () => {
						return new h.div(
							{
								padding: 5,
								textAlign: "center",
								bgColor: "body-tertiary",
							},
							new h.div({ container: true, paddingY: 5 }, [
								new h.h(1, { textColor: "body-emphasis" }, "Full-width jumbotron"),
								new h.p(
									{
										col: "lg-8",
										marginX: "auto",
										lead: true,
									},
									"This takes the basic jumbotron above and makes its background edge-to-edge with a {{.container}} inside to align content. Similar to above, it's been recreated with built-in grid and utility classes."
								),
							])
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Basic jumbotron"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div(
							{ container: true, marginY: 5 },
							new h.div(
								{
									padding: 5,
									textAlign: "center",
									bgColor: "body-tertiary",
									rounded: 3,
								},
								[
									new h.h(1, { textColor: "body-emphasis" }, "Basic jumbotron"),
									new h.p(
										{
											lead: true,
										},
										"This is a simple Bootstrap jumbotron that sits within a {{.container}}, recreated with built-in utility classes."
									),
								]
							)
						);
					},
				}),
			]),

			//----------------------
		];
	},
};

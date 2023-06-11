import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const ex = {
	c1: (arg: { img: string; title: string; details: string; date: string; href: string }) => {
		return new b.tabList.item({ action: true, display: "flex", gap: 3, paddingY: 3, href: arg.href }, [
			new h.img({
				rounded: "circle",
				flex: "shrink-0",
				src: arg.img,
				attrWidth: 32,
				attrHeight: 32,
			}),
			new h.div({ display: "flex", gap: 2, width: 100, justifyContent: "between" }, [
				new h.div([
					new h.h(6, { marginBottom: 0 }, arg.title),
					new h.p({ marginBottom: 0, opacity: 75 }, arg.details),
				]),
				new h.small({ opacity: 50, textWrap: false }, arg.date),
			]),
		]);
	},
	c2: (arg: { type: "checkbox" | "radio"; label: string; description: string; checked?: boolean; name?: string }) => {
		return new h.label({ class: "list-group-item", display: "flex", gap: 2 }, [
			new h.input({
				class: "form-check-input",
				flex: "shrink-0",
				type: arg.type,
				checked: arg.checked,
				name: arg.name,
			}),
			new h.span([arg.label, new h.small({ display: "block", textColor: "body-secondary" }, arg.description)]),
		]);
	},
	c3: (arg: { type: "checkbox" | "radio"; label: string; description: string; checked?: boolean; name?: string }) => {
		return new b.list.item(
			b.form.check({
				label: arg.label,
				description: arg.description,
				type: arg.type,
				checked: arg.checked,
				name: arg.name,
			})
		);
	},
};
export const list_groups: IAttrContent = {
	title: "List groups",
	description: "Extend list groups with utilities and custom styles for any content.",
	item: [
		new e.title("List with icon"),
		new e.code({
			extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
			output: () => {
				return new b.tabList.container({ style: { maxWidth: "460px" } }, [
					ex.c1({
						href: "#",
						img: "https://picsum.photos/seed/bsts_0/32/32.webp",
						title: "List group item heading",
						details: "Some placeholder content in a paragraph.",
						date: "now",
					}),
					ex.c1({
						href: "#",
						img: "https://picsum.photos/seed/bsts_1/32/32.webp",
						title: "Another title here",
						details:
							"Some placeholder content in a paragraph that gose a little longer so it wraps to a new line.",
						date: "3d",
					}),
					ex.c1({
						href: "#",
						img: "https://picsum.photos/seed/bsts_2/32/32.webp",
						title: "Third heading",
						details: "Some placeholder content in a paragraph.",
						date: "1w",
					}),
				]);
			},
		}),

		//-----------------------

		new e.title("Checkbox and radio"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 3 },
			extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
			output: () => {
				return [
					new h.div({ class: "list-group", style: { maxWidth: "460px" } }, [
						ex.c2({
							checked: true,
							type: "checkbox",
							label: "First checkbox",
							description: "With support text underneath to add more detail",
						}),
						ex.c2({
							type: "checkbox",
							label: "Second checkbox",
							description: "Some other text goes here",
						}),
						ex.c2({
							type: "checkbox",
							label: "Third checkbox",
							description: "And we end with another snippet of text",
						}),
					]),
					new b.list.container({ style: { maxWidth: "460px" } }, [
						ex.c2({
							name: "group1",
							checked: true,
							type: "radio",
							label: "First radio",
							description: "With support text underneath to add more detail",
						}),
						ex.c2({
							name: "group1",
							type: "radio",
							label: "Second radio",
							description: "Some other text goes here",
						}),
						ex.c2({
							name: "group1",
							type: "radio",
							label: "Third radio",
							description: "And we end with another snippet of text",
						}),
					]),
				];
			},
		}),
		new e.text("Using {{form.check}}"),
		new e.code({
			outputAttr: { display: "flex", flex: "wrap", gap: 3 },
			extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
			output: () => {
				return [
					new b.list.container({ style: { maxWidth: "460px" } }, [
						ex.c3({
							checked: true,
							type: "checkbox",
							label: "First checkbox",
							description: "With support text underneath to add more detail",
						}),
						ex.c3({
							type: "checkbox",
							label: "Second checkbox",
							description: "Some other text goes here",
						}),
						ex.c3({
							type: "checkbox",
							label: "Third checkbox",
							description: "And we end with another snippet of text",
						}),
					]),
					new b.list.container({ style: { maxWidth: "460px" } }, [
						ex.c3({
							name: "group1",
							checked: true,
							type: "radio",
							label: "First radio",
							description: "With support text underneath to add more detail",
						}),
						ex.c3({
							name: "group1",
							type: "radio",
							label: "Second radio",
							description: "Some other text goes here",
						}),
						ex.c3({
							name: "group1",
							type: "radio",
							label: "Third radio",
							description: "And we end with another snippet of text",
						}),
					]),
				];
			},
		}),

		//-----------------------

		new e.title(""),
		new e.text(""),
		new e.code({
			output: () => {
				return [];
			},
		}),

		//-----------------------

		new e.subtitle(""),
		new e.text(""),
		new e.codepreview({
			type: "css",
			code: `
				`,
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(""),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(""),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
			`,
		}),
	],
};

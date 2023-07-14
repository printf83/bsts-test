import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const buttons: IContent = {
	title: "Buttons",
	description: "Create custom buttons for just about any use case with utilities.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Style 1"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map((i) => {
							return new b.button({ color: i as I.B.Button["color"] }, core.uppercaseFirst(i));
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Style 2"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map((i) => {
							return new b.button({ color: i as I.B.Button["color"], rounded: "pill" }, core.uppercaseFirst(i));
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Button block"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div({
							col: ["lg-6", "xxl-4"],
							marginX: "auto",
							elem: new h.div({ display: "grid", gap: 2 }, [new b.button({ color: "secondary", outline: true }, "Secondary action"), new b.button({ color: "primary" }, "Primary action")]),
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("With icon"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [new b.button({ color: "primary" }, new b.caption({ icon: "arrow-right-short", iconPosition: "end" }, "Primary icon")), new b.button({ color: "secondary", outline: true }, new b.caption({ icon: "arrow-right-short", iconPosition: "end" }, "Secondary icon"))];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Spinner"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [new b.button({ disabled: true }, [new b.spinner({ type: "border", small: true }, ""), new b.visuallyhidden("Loading...")]), new b.button({ disabled: true }, new b.caption({ icon: new b.spinner({ type: "border", small: true }, "") }, "Loading..."))];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Close circle"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "grid", gap: 2 },
					output: () => {
						return [
							new h.div({ display: "flex", flex: "wrap", gap: 2 }, [
								new b.button({ color: "primary", rounded: "circle", padding: 2, lineHeight: 1 }, [new b.icon("x-lg"), new b.visuallyhidden("Close")]),
								new b.button({ color: "primary", outline: true, rounded: "circle", padding: 2, lineHeight: 1 }, [new b.icon("x-lg"), new b.visuallyhidden("Close")]),
							]),
							new h.div({ display: "flex", flex: "wrap", gap: 2 }, [
								new b.button({ color: "primary", rounded: "circle", padding: 3, lineHeight: 1, weight: "lg" }, [new b.icon("x-lg"), new b.visuallyhidden("Close")]),
								new b.button(
									{
										color: "primary",
										outline: true,
										rounded: "circle",
										padding: 3,
										lineHeight: 1,
										weight: "lg",
									},
									[new b.icon("x-lg"), new b.visuallyhidden("Close")]
								),
							]),
						];
					},
				}),
			]),

			//----------------------
		];
	},
	db: [
		{
			source: `() => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map((i) => {
                            return new b.button({ color: i }, core.uppercaseFirst(i));
                        });
                    }`,
		},
		{
			source: `() => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map((i) => {
                            return new b.button({ color: i, rounded: "pill" }, core.uppercaseFirst(i));
                        });
                    }`,
		},
		{
			source: `() => {
                        return new h.div({
                            col: ["lg-6", "xxl-4"],
                            marginX: "auto",
                            elem: new h.div({ display: "grid", gap: 2 }, [new b.button({ color: "secondary", outline: true }, "Secondary action"), new b.button({ color: "primary" }, "Primary action")]),
                        });
                    }`,
		},
		{
			source: `() => {
                        return [new b.button({ color: "primary" }, new b.caption({ icon: "arrow-right-short", iconPosition: "end" }, "Primary icon")), new b.button({ color: "secondary", outline: true }, new b.caption({ icon: "arrow-right-short", iconPosition: "end" }, "Secondary icon"))];
                    }`,
		},
		{
			source: `() => {
                        return [new b.button({ disabled: true }, [new b.spinner({ type: "border", small: true }, ""), new b.visuallyhidden("Loading...")]), new b.button({ disabled: true }, new b.caption({ icon: new b.spinner({ type: "border", small: true }, "") }, "Loading..."))];
                    }`,
		},
		{
			source: `() => {
                        return [
                            new h.div({ display: "flex", flex: "wrap", gap: 2 }, [
                                new b.button({ color: "primary", rounded: "circle", padding: 2, lineHeight: 1 }, [new b.icon("x-lg"), new b.visuallyhidden("Close")]),
                                new b.button({ color: "primary", outline: true, rounded: "circle", padding: 2, lineHeight: 1 }, [new b.icon("x-lg"), new b.visuallyhidden("Close")]),
                            ]),
                            new h.div({ display: "flex", flex: "wrap", gap: 2 }, [
                                new b.button({ color: "primary", rounded: "circle", padding: 3, lineHeight: 1, weight: "lg" }, [new b.icon("x-lg"), new b.visuallyhidden("Close")]),
                                new b.button({
                                    color: "primary",
                                    outline: true,
                                    rounded: "circle",
                                    padding: 3,
                                    lineHeight: 1,
                                    weight: "lg",
                                }, [new b.icon("x-lg"), new b.visuallyhidden("Close")]),
                            ]),
                        ];
                    }`,
		},
	],
};

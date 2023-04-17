import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const cssgrid: IAttrContent = {
	title: "CSS Grid",
	description:
		"Learn how to enable, use, and customize Bootstrap alternate layout system built on CSS Grid with examples and code snippets.",
	item: [
		new e.text(
			"Bootstrap’s default grid system represents the culmination of over a decade of CSS layout techniques, tried and tested by millions of people. But, it was also created without many of the modern CSS features and techniques we’re seeing in browsers like the new CSS Grid."
		),

		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Heads up—Bootstrap CSS Grid system is experimental and opt-in as of v5.1.0!}} We included it in Bootstrap documentation’s CSS to demonstrate it for you, but it’s disabled by default. Keep reading to learn how to enable it in your projects."
		),
		new e.alert({ color: "danger", callout: true }, [
			new b.alert.header(5, "Unsuppoterd in Bootstrap TS"),
			"This feature will supported when Bootstrap make it opt-in by default or available in CDN.",
		]),
		new e.text("If you like to use this feature using Bootstrap TS, you can manually set it by class property:"),
		new e.code({
			output: () => {
				return new h.div({ class: "grid", textAlign: "center" }, [
					new h.div({ class: "g-col-4" }, ".g-col-4"),
					new h.div({ class: "g-col-4" }, ".g-col-4"),
					new h.div({ class: "g-col-4" }, ".g-col-4"),
				]);
			},
		}),
	],
};

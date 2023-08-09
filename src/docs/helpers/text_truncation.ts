import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const text_truncation: IContent = {
	title: "Text truncation",
	description: "Truncate long strings of text with an ellipsis.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.text(
					"For longer content, you can add a {{.text-truncate}} class to truncate the text with an ellipsis. {{b::Requires }}{{cb::display: inline-block}}{{b:: or }}{{cb::display: block}}{{b::.}}"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							//Block level
							new h.div(
								{ row: true },
								new h.div(
									{ col: 2, textTruncate: true },
									"This text is quite long, and will be truncated once displayed."
								)
							),

							//Inline level
							new h.span(
								{
									display: "inline-block",
									textTruncate: true,
									style: { maxWidth: "150px" },
								},
								"This text is quite long, and will be truncated once displayed."
							),
						];
					},
				}),
			]),
		];
	},
};

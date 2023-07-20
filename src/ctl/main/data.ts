import { doc } from "../../docs/_index.js";
import { isInBookmark } from "./bookmark.js";
import { IContent } from "./content.js";
import * as e from "../example/_index.js";
import { h } from "@printf83/bsts";

const contentNotFound = (key: string) => {
	return {
		title: "404 Not Found",
		description: `Oops! It seems like you've stumbled upon uncharted territory.`,
		sourceUrl: `https://github.com/printf83/bsts-test/blob/beta/src/doc/_index.ts`,
		sourceWeb: "Github",
		item: () => {
			return [
				new e.section([
					new e.text(
						{ marginBottom: 4 },
						`Content for {{${key}\}} couldn't be located. Perhaps it has been moved, deleted, or never even existed in the first place. We apologize for any inconvenience this may have caused.`
					),
					new e.text(
						{ marginBottom: 4 },
						"Here are a few steps you can take to get back on track:"
					),
					new e.item(
						new h.ol({ marginBottom: 4 }, [
							new h.li(
								{ marginBottom: 2 },
								"{{b::Check the URL:}} Make sure you have entered the correct web address. A tiny typo can lead you astray!"
							),
							new h.li(
								{ marginBottom: 2 },
								"{{b::Navigate Back:}} Use the browser's back button to return to the previous page. You can also click on any relevant links or buttons to find your way."
							),
							new h.li(
								{ marginBottom: 2 },
								"{{b::Start from the Homepage:}} Head back to our {{/?d=docs/gettingstarted/introduction::homepage}} to explore the site from the beginning. There, you'll find plenty of exciting content waiting for you."
							),
							new h.li(
								{ marginBottom: 2 },
								"{{b::Use the Search:}} If you are looking for something specific, feel free to use our search bar or press {{k::ctrl}}+{{k::K}} to find what you need."
							),
							new h.li(
								"{{b::Contact Us:}} If you believe there's an issue with our website or you can't find the information you seek, don't hesitate to contact our support team. We're here to help!"
							),
						])
					),
					new e.text(
						{ marginBottom: 4 },
						"We strive to provide a smooth browsing experience, and your feedback is invaluable to us. Let us know if you encountered a broken link or a missing page, so we can work on fixing it promptly."
					),
					new e.text(
						{ marginBottom: 4 },
						"Thank you for visiting, and we hope you find what you're looking for soon!"
					),
					new e.text("Best regards,{{br}}The Web Team"),
				]),
			];
		},
	} as IContent;
};

export const getContent = (docId: string, callback: (arg: IContent) => void) => {
	let tValue = docId.split("/");
	if (tValue.length === 3 && tValue[0] === "docs") {
		doc(docId, (c) => {
			if (c) {
				c.usedb = true;
				c.docId = docId;
				c.bookmark = isInBookmark(docId);
				c.sourceUrl = `https://github.com/printf83/bsts-test/blob/beta/src/${docId}.ts`;
				c.sourceWeb = "Github";
				callback(c);
			} else {
				callback(contentNotFound(docId));
			}
		});
	} else {
		callback(contentNotFound(docId));
	}
};

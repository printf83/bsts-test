import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import { b, h } from "@printf83/bsts";

export const test: IContent = {
	title: "Testing",
	description: "This is testing page to test our library one by one",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Duplicate ID"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return [
							new b.button("chart"),
							// new b.button({ id: "chart" }, "chart"),
							// new b.button({ id: "duplicate_id" }, "duplicate_id"),
							// new b.button({ id: "tooltip" }, "tooltip"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Picture source"),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new h.picture([
							new h.source({
								media: "(min-width:992px)",
								srcset: "https://picsum.photos/seed/bsts_0/820/480.webp",
							}),
							new h.source({
								media: "(min-width:768px)",
								srcset: "https://picsum.photos/seed/bsts_1/410/240.webp",
							}),
							new b.img({
								fluid: true,
								thumbnail: true,
								src: "https://picsum.photos/seed/bsts_2/205/120.webp",
								alt: "...",
								style: { width: "18rem" },
							}),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Picture card"),
				new e.text(
					"{{location:top}} places an image ({{b.card.img}}) to the top of the card. With {{b.card.text}}, text can be added to the card. Text within {{b.card.text}} can also be styled with the standard HTML tags using {{s}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new b.card.img({
								location: "top",
								src: "https://picsum.photos/seed/bsts_0/205/120.webp",
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
				new e.subtitle("Test 1"),
				new e.text(
					"The picture should same with picture on {{nav:docs/bsts/test#picture_source::Picture source}}"
				),
				new e.alert(
					{ callout: true, color: "danger" },
					"This is NOT working! Put picture tag outside card"
				),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new h.picture([
							new h.source({
								media: "(min-width:992px)",
								srcset: "https://picsum.photos/seed/bsts_0/820/480.webp",
							}),
							new h.source({
								media: "(min-width:768px)",
								srcset: "https://picsum.photos/seed/bsts_1/410/240.webp",
							}),

							new b.card.container({ style: { width: "18rem" } }, [
								new b.card.img({
									location: "top",
									src: "https://picsum.photos/seed/bsts_2/205/120.webp",
									alt: "Image cap",
								}),
								new b.card.body([
									new b.card.text(
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									),
								]),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Test 2"),
				new e.text(
					"The picture should same with picture on {{nav:docs/bsts/test#picture_source::Picture source}}"
				),
				new e.alert(
					{ callout: true, color: "success" },
					"This is working! Put picture tag inside card"
				),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					output: () => {
						return new b.card.container({ style: { width: "18rem" } }, [
							new h.picture([
								new h.source({
									media: "(min-width:992px)",
									srcset: "https://picsum.photos/seed/bsts_0/820/480.webp",
								}),
								new h.source({
									media: "(min-width:768px)",
									srcset: "https://picsum.photos/seed/bsts_1/410/240.webp",
								}),
								new b.card.img({
									location: "top",
									src: "https://picsum.photos/seed/bsts_2/205/120.webp",
									alt: "Image cap",
								}),
							]),

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
		];
	},
};

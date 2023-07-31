import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import { b, core, h } from "@printf83/bsts";

interface variableItem {
	variableName: string;
	selector?: string;
	value?: string;
}

const CUSTOMCSSVARDB: variableItem[] = [];

const addCustomCSSVar = (variableName: string, value: string, selector?: string) => {
	//find index
	const index = CUSTOMCSSVARDB.findIndex((i) => {
		return i.variableName === variableName && i.selector === selector;
	});

	//add, remove or change value
	if (index > -1) {
		if (value) {
			CUSTOMCSSVARDB[index]!.value = value;
		} else {
			CUSTOMCSSVARDB.splice(index, 1);
		}
	} else {
		if (value) {
			CUSTOMCSSVARDB.push({
				variableName: variableName,
				selector: selector,
				value: value,
			});
		}
	}
};

const setCustomCSSVar = () => {
	//sort
	CUSTOMCSSVARDB.sort((a, b) =>
		`${a.selector}${a.variableName}` > `${b.selector}${b.variableName}` ? -1 : 1
	);

	//gen css
	const CSS: string[] = [];
	let lastSelector: string | null = null;

	CUSTOMCSSVARDB.forEach((i) => {
		const sel = i.selector ? i.selector : ":root";

		if (lastSelector !== sel) {
			if (lastSelector !== null) {
				CSS.push("}\n");
			}

			CSS.push(`${sel} {\n`);
			lastSelector = sel;
		}

		CSS.push(`\t${i.variableName}: ${i.value};\n`);
	});

	if (CSS && CSS.length > 0) {
		CSS.push("}\n");
	}

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(
			document.head,
			new h.style({ id: "bsts-custom-var-container" }, CSS.join(""))
		);
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-var-container" }, CSS.join(""))
		);
	}
};

const setupCustomCSSVar = (hex: string) => {
	const rgb = core.hexToRGB(hex);
	const sRGB = `${rgb?.r},${rgb?.g},${rgb?.b}`;

	addCustomCSSVar("--bs-primary", hex);
	addCustomCSSVar("--bs-primary-rgb", sRGB);

	addCustomCSSVar("--bs-dropdown-link-active-bg", hex, ".dropdown-item");

	addCustomCSSVar("--bs-list-group-active-bg", hex, ".list-group");
	addCustomCSSVar("--bs-list-group-active-border-color", hex, ".list-group");

	addCustomCSSVar("--bs-btn-bg", hex, ".btn-primary");
	addCustomCSSVar("--bs-btn-border-color", hex, ".btn-primary");

	setCustomCSSVar();
};

export const test: IContent = {
	title: "Testing",
	description: "This is testing page to test our library one by one",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		const cssBsPrimary = core.getCSSVarHexColor("--bs-primary");

		return [
			//----------------------

			new e.section([
				new e.title("Accent color"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return new h.div(
							{
								class: "swatch",
								rounded: true,
								border: true,
								style: { backgroundColor: cssBsPrimary },
							},
							[
								new b.input({
									type: "color",
									value: cssBsPrimary,
									on: {
										input: (e) => {
											let target = e.target as HTMLInputElement;
											let value = target.value;
											let container = target.closest(
												".swatch"
											) as HTMLElement;

											if (container) {
												container.style.setProperty(
													"background-color",
													value
												);
												setupCustomCSSVar(value);
											}
										},
									},
								}),
							]
						);
					},
				}),
			]),

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

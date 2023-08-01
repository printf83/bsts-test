import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import { b, core, h } from "@printf83/bsts";

interface variableItem {
	variableName: string;
	selector?: string;
	value?: string;
}

const CUSTOMCSSVARDB: variableItem[] = [];

const addCustomCSSVar = (selector: string, variableName: string, value: string) => {
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
		`${a.selector}${a.variableName}` > `${b.selector}${b.variableName}` ? 1 : -1
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

const getHSLDistance = (fromHex: string, toHex: string) => {
	const fromHSL = core.hexToHSL(fromHex);
	const toHSL = core.hexToHSL(toHex);

	if (fromHSL && toHSL) {
		return {
			h: fromHSL.h - toHSL.h,
			s: fromHSL.s - toHSL.s,
			l: fromHSL.l - toHSL.l,
		};
	} else {
		return {
			h: 0,
			s: 0,
			l: 0,
		};
	}
};

const addDistanceHex = (hex: string, distanceHSL: { h: number; s: number; l: number }) => {
	const HSL = core.hexToHSL(hex);

	if (HSL) {
		const calcLoop = (val: number, max: number) => {
			if (val > max) {
				val = val - max;
			}

			if (val < 0) {
				val = max + val;
			}

			return val;
		};

		const calcStop = (val: number, max: number) => {
			if (val > max) {
				val = max;
			}

			if (val < 0) {
				val = 0;
			}

			return val;
		};

		return {
			h: calcLoop(HSL.h - distanceHSL.h, 360),
			s: calcStop(HSL.s - distanceHSL.s, 100),
			l: calcStop(HSL.l - distanceHSL.l, 100),
		};
	} else {
		return {
			h: 0,
			s: 0,
			l: 0,
		};
	}
};

const getNewHex = (mainHex: string, refHex: string, hex: string) => {
	const HSLDistance = getHSLDistance(mainHex, refHex);
	const addedDistance = addDistanceHex(hex, HSLDistance);
	const result = core.hslToHex(addedDistance);
	return result;
	// return core.hslToHex(addDistanceHex(hex, getHSLDistance(mainHex, refHex)));
};

const setupCustomCSSVar = (hex: string) => {
	const btnBg = "#0d6efd"; //main
	const btnColorNew = core.hexIsDark(hex) ? "#fff" : "#000";

	const btnBorder = "#0d6efd";
	const btnBorderNew = getNewHex(btnBg, btnBorder, hex);

	const btnHoverBg = "#0b5ed7";
	const btnHoverBgNew = getNewHex(btnBg, btnHoverBg, hex);
	const btnHoverColorNew = core.hexIsDark(btnHoverBgNew) ? "#fff" : "#000";

	const btnHoverBorder = "#0a58ca";
	const btnHoverBorderNew = getNewHex(btnBg, btnHoverBorder, hex);

	const btnActiveBg = "#0a58ca";
	const btnActiveBgNew = getNewHex(btnBg, btnActiveBg, hex);
	const btnActiveColorNew = core.hexIsDark(btnActiveBgNew) ? "#fff" : "#000";

	const btnActiveBorder = "#0a53be";
	const btnActiveBorderNew = getNewHex(btnBg, btnActiveBorder, hex);

	const btnDisabledBg = "#0d6efd";
	const btnDisabledBgNew = getNewHex(btnBg, btnDisabledBg, hex);
	const btnDisabledColorNew = core.hexIsDark(btnDisabledBgNew) ? "#fff" : "#000";

	const btnDisabledBorder = "#0d6efd";
	const btnDisabledBorderNew = getNewHex(btnBg, btnDisabledBorder, hex);

	// Normal
	const rgb = core.hexToRGB(hex);
	const sRGB = `${rgb?.r},${rgb?.g},${rgb?.b}`;

	addCustomCSSVar(":root", "--bs-primary", hex);
	addCustomCSSVar(":root", "--bs-primary-rgb", sRGB);

	addCustomCSSVar(
		".text-bg-primary",
		"background-color",
		`rgba(${sRGB},var(--bs-bg-opacity,1)) !important`
	);

	/**
	 * LIGHT
	 *    --bs-primary-text-emphasis: #052c65;
	 *    --bs-primary-bg-subtle: #cfe2ff;
	 *    --bs-primary-border-subtle: #9ec5fe;
	 * 	  --bs-link-color: #0d6efd;
	 *    --bs-link-hover-color: #0a58ca;
	 * 	  --bs-link-color-rgb: 13,110,253;
	 *	  --bs-link-hover-color-rgb: 10,88,202;
	 *
	 */

	const bsPrimaryTextEmphasis = "#052c65";
	const bsPrimaryTextEmphasisNew = getNewHex(btnBg, bsPrimaryTextEmphasis, hex);

	const bsPrimaryBgSubtle = "#cfe2ff";
	const bsPrimaryBgSubtleNew = getNewHex(btnBg, bsPrimaryBgSubtle, hex);

	const bsPrimaryBorderSubtle = "#9ec5fe";
	const bsPrimaryBorderSubtleNew = getNewHex(btnBg, bsPrimaryBorderSubtle, hex);

	const bsLinkColor = "#0d6efd";
	const bsLinkColorNew = getNewHex(btnBg, bsLinkColor, hex);
	const bsLinkColorRGB = core.hexToRGB(bsLinkColorNew);
	const bsLinkColorRGBNew = `${bsLinkColorRGB?.r},${bsLinkColorRGB?.g},${bsLinkColorRGB?.b}`;

	const bsLinkHoverColor = "#0a58ca";
	const bsLinkHoverColorNew = getNewHex(btnBg, bsLinkHoverColor, hex);
	const bsLinkHoverColorRGB = core.hexToRGB(bsLinkHoverColorNew);
	const bsLinkHoverColorRGBNew = `${bsLinkHoverColorRGB?.r},${bsLinkHoverColorRGB?.g},${bsLinkHoverColorRGB?.b}`;

	addCustomCSSVar(":root, [data-bs-theme='light']", "--bs-link-color", bsLinkColorNew);
	addCustomCSSVar(":root, [data-bs-theme='light']", "--bs-link-color-rgb", bsLinkColorRGBNew);
	addCustomCSSVar(":root, [data-bs-theme='light']", "--bs-link-hover-color", bsLinkHoverColorNew);
	addCustomCSSVar(
		":root, [data-bs-theme='light']",
		"--bs-link-hover-color-rgb",
		bsLinkHoverColorRGBNew
	);
	addCustomCSSVar(
		":root, [data-bs-theme='light']",
		"--bs-primary-text-emphasis",
		bsPrimaryTextEmphasisNew
	);
	addCustomCSSVar(
		":root, [data-bs-theme='light']",
		"--bs-primary-bg-subtle",
		bsPrimaryBgSubtleNew
	);
	addCustomCSSVar(
		":root, [data-bs-theme='light']",
		"--bs-primary-border-subtle",
		bsPrimaryBorderSubtleNew
	);

	/**
	 *
	 * DARK
	 *
	 *    --bs-primary-text-emphasis: #6ea8fe;
	 *    --bs-primary-bg-subtle: #031633;
	 *    --bs-primary-border-subtle: #084298;
	 *    --bs-link-color: #6ea8fe;
	 *    --bs-link-hover-color: #8bb9fe;
	 * 	  --bs-link-color-rgb: 13,110,253;
	 *	  --bs-link-hover-color-rgb: 10,88,202;
	 */

	const bsDarkPrimaryTextEmphasis = "#031633";
	const bsDarkPrimaryTextEmphasisNew = getNewHex(btnBg, bsDarkPrimaryTextEmphasis, hex);

	const bsDarkPrimaryBgSubtle = "#6ea8fe";
	const bsDarkPrimaryBgSubtleNew = getNewHex(btnBg, bsDarkPrimaryBgSubtle, hex);

	const bsDarkPrimaryBorderSubtle = "#084298";
	const bsDarkPrimaryBorderSubtleNew = getNewHex(btnBg, bsDarkPrimaryBorderSubtle, hex);

	const bsDarkLinkColor = "#6ea8fe";
	const bsDarkLinkColorNew = getNewHex(btnBg, bsDarkLinkColor, hex);
	const bsDarkLinkColorRGB = core.hexToRGB(bsDarkLinkColorNew);
	const bsDarkLinkColorRGBNew = `${bsDarkLinkColorRGB?.r},${bsDarkLinkColorRGB?.g},${bsDarkLinkColorRGB?.b}`;

	const bsDarkLinkHoverColor = "#8bb9fe";
	const bsDarkLinkHoverColorNew = getNewHex(btnBg, bsDarkLinkHoverColor, hex);
	const bsDarkLinkHoverColorRGB = core.hexToRGB(bsDarkLinkHoverColorNew);
	const bsDarkLinkHoverColorRGBNew = `${bsDarkLinkHoverColorRGB?.r},${bsDarkLinkHoverColorRGB?.g},${bsDarkLinkHoverColorRGB?.b}`;

	addCustomCSSVar("[data-bs-theme='dark']", "--bs-link-color", bsDarkLinkColorNew);
	addCustomCSSVar("[data-bs-theme='dark']", "--bs-link-color-rgb", bsDarkLinkColorRGBNew);
	addCustomCSSVar("[data-bs-theme='dark']", "--bs-link-hover-color", bsDarkLinkHoverColorNew);
	addCustomCSSVar(
		"[data-bs-theme='dark']",
		"--bs-link-hover-color-rgb",
		bsDarkLinkHoverColorRGBNew
	);
	addCustomCSSVar(
		"[data-bs-theme='dark']",
		"--bs-primary-text-emphasis",
		bsDarkPrimaryTextEmphasisNew
	);
	addCustomCSSVar("[data-bs-theme='dark']", "--bs-primary-bg-subtle", bsDarkPrimaryBgSubtleNew);
	addCustomCSSVar(
		"[data-bs-theme='dark']",
		"--bs-primary-border-subtle",
		bsDarkPrimaryBorderSubtleNew
	);

	/**
	--bs-table-color: #000;
    --bs-table-bg: #cfe2ff;
    --bs-table-border-color: #bacbe6;
    --bs-table-striped-bg: #c5d7f2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bacbe6;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfd1ec;
    --bs-table-hover-color: #000;
	 */

	const bsTableBg = "#cfe2ff";
	const bsTableBgNew = getNewHex(btnBg, bsTableBg, hex);
	const bsTableColorNew = core.hexIsDark(bsTableBgNew) ? "#fff" : "#000";

	const bsTableBorderColor = "#bacbe6";
	const bsTableBorderColorNew = getNewHex(btnBg, bsTableBorderColor, hex);

	const bsTableStripedBg = "#c5d7f2";
	const bsTableStripedBgNew = getNewHex(btnBg, bsTableStripedBg, hex);
	const bsTableStripedColorNew = core.hexIsDark(bsTableStripedBgNew) ? "#fff" : "#000";

	const bsTableActiveBg = "#bacbe6";
	const bsTableActiveBgNew = getNewHex(btnBg, bsTableActiveBg, hex);
	const bsTableActiveColorNew = core.hexIsDark(bsTableActiveBgNew) ? "#fff" : "#000";

	const bsTableHoverBg = "#bfd1ec";
	const bsTableHoverBgNew = getNewHex(btnBg, bsTableHoverBg, hex);
	const bsTableHoverColorNew = core.hexIsDark(bsTableHoverBgNew) ? "#fff" : "#000";

	addCustomCSSVar(".table-primary", "--bs-table-bg", bsTableBgNew);
	addCustomCSSVar(".table-primary", "--bs-table-color", bsTableColorNew);
	addCustomCSSVar(".table-primary", "--bs-table-border-color", bsTableBorderColorNew);
	addCustomCSSVar(".table-primary", "--bs-table-striped-bg", bsTableStripedBgNew);
	addCustomCSSVar(".table-primary", "--bs-table-striped-color", bsTableStripedColorNew);
	addCustomCSSVar(".table-primary", "--bs-table-active-bg", bsTableActiveBgNew);
	addCustomCSSVar(".table-primary", "--bs-table-active-color", bsTableActiveColorNew);
	addCustomCSSVar(".table-primary", "--bs-table-hover-bg", bsTableHoverBgNew);
	addCustomCSSVar(".table-primary", "--bs-table-hover-color", bsTableHoverColorNew);

	// Others
	addCustomCSSVar(".dropdown-item", "--bs-dropdown-link-active-bg", hex);

	addCustomCSSVar(".list-group", "--bs-list-group-active-bg", hex);
	addCustomCSSVar(".list-group", "--bs-list-group-active-border-color", hex);

	addCustomCSSVar(".btn-primary", "--bs-btn-color", btnColorNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-bg", hex);
	addCustomCSSVar(".btn-primary", "--bs-btn-border-color", btnBorderNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-hover-color", btnHoverColorNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-hover-bg", btnHoverBgNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-hover-border-color", btnHoverBorderNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-focus-shadow-rgb", sRGB);
	addCustomCSSVar(".btn-primary", "--bs-btn-active-color", btnActiveColorNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-active-bg", btnActiveBgNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-active-border-color", btnActiveBorderNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-disabled-color", btnDisabledColorNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-disabled-bg", btnDisabledBgNew);
	addCustomCSSVar(".btn-primary", "--bs-btn-disabled-border-color", btnDisabledBorderNew);

	addCustomCSSVar(".btn-outline-primary", "--bs-btn-color", hex);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-border-color", btnBorderNew);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-hover-color", btnHoverColorNew);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-hover-bg", btnHoverBgNew);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-hover-border-color", btnHoverBorderNew);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-focus-shadow-rgb", sRGB);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-active-color", btnActiveColorNew);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-active-bg", btnActiveBgNew);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-active-border-color", btnActiveBorderNew);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-disabled-color", btnDisabledColorNew);
	addCustomCSSVar(".btn-outline-primary", "--bs-btn-disabled-border-color", btnDisabledBorderNew);

	// ========

	addCustomCSSVar(".progress, .progress-stacked", "--bs-progress-bar-bg", hex);

	addCustomCSSVar(".nav-pills", "--bs-nav-pills-link-active-bg", hex);

	addCustomCSSVar(".pagination", "--bs-pagination-color", hex);
	addCustomCSSVar(".pagination", "--bs-pagination-active-bg", hex);
	addCustomCSSVar(".pagination", "--bs-pagination-active-border-color", hex);

	addCustomCSSVar(".form-check-input:checked", "background-color", hex);
	addCustomCSSVar(".form-check-input:checked", "border-color", hex);

	addCustomCSSVar(".form-check-input[type=checkbox]:indeterminate", "background-color", hex);
	addCustomCSSVar(".form-check-input[type=checkbox]:indeterminate", "border-color", hex);

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

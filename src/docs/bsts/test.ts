import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import { b, core, h } from "@printf83/bsts";

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

		// const calcStop = (val: number, max: number) => {
		// 	if (val > max) {
		// 		val = max;
		// 	}

		// 	if (val < 0) {
		// 		val = 0;
		// 	}

		// 	return val;
		// };

		const calcBounce = (val: number, max: number) => {
			if (val > max) {
				val = max - (val - max);
			}

			if (val < 0) {
				val = -val;
			}

			return val;
		};

		return {
			h: calcLoop(HSL.h - distanceHSL.h, 360),
			s: calcBounce(HSL.s - distanceHSL.s, 100),
			l: calcBounce(HSL.l - distanceHSL.l, 100),
		};
	} else {
		return {
			h: 0,
			s: 0,
			l: 0,
		};
	}
};

const getHex = (mainHex: string, refHex: string, hex: string) => {
	return core.hslToHex(addDistanceHex(hex, getHSLDistance(mainHex, refHex)));
};

const getHexDark = (hex: string, light?: string, dark?: string) => {
	light ??= "#fff";
	dark ??= "#000";
	return core.hexIsDark(hex) ? light : dark;
};

const getRGB = (hex: string) => {
	const rgb = core.hexToRGB(hex);
	return `${rgb?.r},${rgb?.g},${rgb?.b}`;
};

const setupCustomCSSVar = (hex: string) => {
	// Normal
	const rgb = getRGB(hex);

	const baseColor = "#0d6efd"; //main
	const btnColor = getHexDark(hex);
	const btnBorder = getHex(baseColor, "#0d6efd", hex);
	const btnHoverBg = getHex(baseColor, "#0b5ed7", hex);
	const btnHoverColor = getHexDark(btnHoverBg);
	const btnHoverBorder = getHex(baseColor, "#0a58ca", hex);
	const btnActiveBg = getHex(baseColor, "#0a58ca", hex);
	const btnActiveColor = getHexDark(btnActiveBg);
	const btnActiveBorder = getHex(baseColor, "#0a53be", hex);
	const btnDisabledBg = getHex(baseColor, "#0d6efd", hex);
	const btnDisabledColor = getHexDark(btnDisabledBg);
	const btnDisabledBorder = getHex(baseColor, "#0d6efd", hex);

	const bsPrimaryTextEmphasis = getHex(baseColor, "#052c65", hex);
	const bsPrimaryBgSubtle = getHex(baseColor, "#cfe2ff", hex);
	const bsPrimaryBorderSubtle = getHex(baseColor, "#9ec5fe", hex);

	const bsLinkColor = getHex(baseColor, "#0d6efd", hex);
	const bsLinkColorRGB = getRGB(bsLinkColor);
	const bsLinkHoverColor = getHex(baseColor, "#0a58ca", hex);
	const bsLinkHoverColorRGB = getRGB(bsLinkHoverColor);

	const bsDarkPrimaryTextEmphasis = getHex(baseColor, "#6ea8fe", hex);
	const bsDarkPrimaryBgSubtle = getHex(baseColor, "#031633", hex);
	const bsDarkPrimaryBorderSubtle = getHex(baseColor, "#084298", hex);
	const bsDarkLinkColor = getHex(baseColor, "#6ea8fe", hex);
	const bsDarkLinkColorRGB = getRGB(bsDarkLinkColor);
	const bsDarkLinkHoverColor = getHex(baseColor, "#8bb9fe", hex);
	const bsDarkLinkHoverColorRGB = getRGB(bsDarkLinkHoverColor);

	const bsTableBg = getHex(baseColor, "#cfe2ff", hex);
	const bsTableColor = getHexDark(bsTableBg);
	const bsTableBorderColor = getHex(baseColor, "#bacbe6", hex);
	const bsTableStripedBg = getHex(baseColor, "#c5d7f2", hex);
	const bsTableStripedColor = getHexDark(bsTableStripedBg);
	const bsTableActiveBg = getHex(baseColor, "#bacbe6", hex);
	const bsTableActiveColor = getHexDark(bsTableActiveBg);
	const bsTableHoverBg = getHex(baseColor, "#bfd1ec", hex);
	const bsTableHoverColor = getHexDark(bsTableHoverBg);

	const bsFormControlFocusBorder = getHex(baseColor, "#86b7fe", hex);

	const css = `
		[data-bs-theme='dark'] {
			--bs-primary-text-emphasis: ${bsDarkPrimaryTextEmphasis};
			--bs-primary-bg-subtle: ${bsDarkPrimaryBgSubtle};
			--bs-primary-border-subtle: ${bsDarkPrimaryBorderSubtle};

			--bs-link-color: ${bsDarkLinkColor};
			--bs-link-color-rgb: ${bsDarkLinkColorRGB};
			--bs-link-hover-color: ${bsDarkLinkHoverColor};
			--bs-link-hover-color-rgb: ${bsDarkLinkHoverColorRGB};
		}

		:root, [data-bs-theme='light'] {
			--bs-primary: ${hex};
			--bs-primary-rgb: ${rgb};
			--bs-focus-ring-color: rgba(${rgb}, 0.25);

			--bs-primary-text-emphasis: ${bsPrimaryTextEmphasis};
			--bs-primary-bg-subtle: ${bsPrimaryBgSubtle};
			--bs-primary-border-subtle: ${bsPrimaryBorderSubtle};

			--bs-link-color: ${bsLinkColor};
			--bs-link-color-rgb: ${bsLinkColorRGB};
			--bs-link-hover-color: ${bsLinkHoverColor};
			--bs-link-hover-color-rgb: ${bsLinkHoverColorRGB};
		}

		.table-primary {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}

		.form-control:focus, .form-select:focus, .form-check-input:focus {
			border-color: ${bsFormControlFocusBorder};
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}

		.form-switch .form-check-input:focus {
			--bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${encodeURIComponent(
				bsFormControlFocusBorder
			)}'/%3e%3c/svg%3e");
		}

		.form-switch .form-check-input:checked {
			--bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${encodeURIComponent(
				btnColor
			)}'/%3e%3c/svg%3e");
		}

		.form-check-input:checked[type='checkbox'] {
			--bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='${encodeURIComponent(
				btnColor
			)}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
		}

		.form-check-input:checked {
			background-color: ${hex};
			border-color: ${hex};
		}

		.form-check-input[type=checkbox]:indeterminate {
			background-color: ${hex};
			border-color: ${hex};
		}

		.form-range::-moz-range-thumb, .form-range::-webkit-slider-thumb {
			background-color: ${hex};
		}

		.form-range:focus::-moz-range-thumb, .form-range:focus::-webkit-slider-thumb {
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}

		.dropdown-item {
			--bs-dropdown-link-active-bg: ${hex};
		}

		.list-group {
			--bs-list-group-active-bg: ${hex};
			--bs-list-group-active-border-color: ${hex};
		}

		.text-bg-primary{
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-primary {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-primary {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.progress, .progress-stacked {
			--bs-progress-bar-bg: ${hex};
		}

		.nav-pills {
			--bs-nav-pills-link-active-bg: ${hex};
		}

		.pagination {
			--bs-pagination-color: ${hex};
			--bs-pagination-active-bg: ${hex};
			--bs-pagination-active-border-color: ${hex};
			--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(${rgb}, 0.25);
		}

		
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-primary-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(
			document.head,
			new h.style({ id: "bsts-custom-primary-var-container" }, css)
		);
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-primary-var-container" }, css)
		);
	}
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

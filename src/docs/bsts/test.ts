import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import { I, b, core, h } from "@printf83/bsts";

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

const getHexDark = (hex: string, light: string, dark: string) => {
	return core.hexIsDark(hex) ? light : dark;
};

const getRGB = (hex: string) => {
	const rgb = core.hexToRGB(hex);
	return `${rgb?.r},${rgb?.g},${rgb?.b}`;
};

const setupCustomDarkCSSVar = (hex: string, light: string, dark: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#212529"; //--bs-dark
	const rgb = getRGB(hex); //--bs-dark-rgb

	//.btn-dark
	const btnColor = getHexDark(hex, light, dark); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#212529", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#424649", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#373b3e", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#4d5154", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#373b3e", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#212529", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#212529", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#495057", hex); //--bs-dark-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#ced4da", hex); //--bs-dark-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#adb5bd", hex); //--bs-dark-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#f8f9fa", hex); //--bs-dark-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#1a1d20", hex); //--bs-dark-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#343a40", hex); //--bs-dark-border-subtle

	//.table-dark
	const bsTableBg = getHex(baseColor, "#212529", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#373b3e", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#2c3034", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#373b3e", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#323539", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg, light, dark); //--bs-table-hover-color

	const css = `
		

		:root, [data-bs-theme='light'] {
			--bs-dark: ${hex};
			--bs-dark-rgb: ${rgb};

			--bs-dark-text-emphasis: ${bsTextEmphasis};
			--bs-dark-bg-subtle: ${bsBgSubtle};
			--bs-dark-border-subtle: ${bsBorderSubtle};
		}

		[data-bs-theme='dark'] {
			--bs-dark-text-emphasis: ${bsDarkTextEmphasis};
			--bs-dark-bg-subtle: ${bsDarkBgSubtle};
			--bs-dark-border-subtle: ${bsDarkBorderSubtle};
		}

		.table-dark {
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
		
		.text-bg-dark {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-dark {
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

		.btn-outline-dark {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-dark-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(document.head, new h.style({ id: "bsts-custom-dark-var-container" }, css));
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-dark-var-container" }, css)
		);
	}
};

const setupCustomLightCSSVar = (hex: string, light: string, dark: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#f8f9fa"; //--bs-light
	const rgb = getRGB(hex); //--bs-light-rgb

	//.btn-light
	const btnColor = getHexDark(hex, light, dark); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#f8f9fa", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#d3d4d5", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#c6c7c8", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#c6c7c8", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#babbbc", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#f8f9fa", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#f8f9fa", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#495057", hex); //--bs-light-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#fcfcfd", hex); //--bs-light-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#e9ecef", hex); //--bs-light-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#f8f9fa", hex); //--bs-light-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#343a40", hex); //--bs-light-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#495057", hex); //--bs-light-border-subtle

	//.table-light
	const bsTableBg = getHex(baseColor, "#f8f9fa", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#dfe0e1", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#ecedee", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#dfe0e1", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#e5e6e7", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg, light, dark); //--bs-table-hover-color

	const css = `	
		:root, [data-bs-theme='light'] {
			--bs-light: ${hex};
			--bs-light-rgb: ${rgb};

			--bs-light-text-emphasis: ${bsTextEmphasis};
			--bs-light-bg-subtle: ${bsBgSubtle};
			--bs-light-border-subtle: ${bsBorderSubtle};
		}

		[data-bs-theme='dark'] {
			--bs-light-text-emphasis: ${bsDarkTextEmphasis};
			--bs-light-bg-subtle: ${bsDarkBgSubtle};
			--bs-light-border-subtle: ${bsDarkBorderSubtle};
		}

		.table-light {
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
		
		.text-bg-light {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-light {
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

		.btn-outline-light {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-light-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(
			document.head,
			new h.style({ id: "bsts-custom-light-var-container" }, css)
		);
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-light-var-container" }, css)
		);
	}
};

const setupCustomSecondaryCSSVar = (hex: string, light: string, dark: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#6c757d"; //--bs-secondary
	const rgb = getRGB(hex); //--bs-secondary-rgb

	//.btn-secondary
	const btnColor = getHexDark(hex, light, dark); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#6c757d", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#5c636a", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#565e64", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#565e64", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#51585e", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#6c757d", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#6c757d", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#2b2f32", hex); //--bs-secondary-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#e2e3e5", hex); //--bs-secondary-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#c4c8cb", hex); //--bs-secondary-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#a7acb1", hex); //--bs-secondary-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#161719", hex); //--bs-secondary-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#41464b", hex); //--bs-secondary-border-subtle

	//.table-secondary
	const bsTableBg = getHex(baseColor, "#e2e3e5", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#cbccce", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#d7d8da", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#cbccce", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#d1d2d4", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg, light, dark); //--bs-table-hover-color

	const css = `
		

		:root, [data-bs-theme='light'] {
			--bs-secondary: ${hex};
			--bs-secondary-rgb: ${rgb};

			--bs-secondary-text-emphasis: ${bsTextEmphasis};
			--bs-secondary-bg-subtle: ${bsBgSubtle};
			--bs-secondary-border-subtle: ${bsBorderSubtle};
		}

		[data-bs-theme='dark'] {
			--bs-secondary-text-emphasis: ${bsDarkTextEmphasis};
			--bs-secondary-bg-subtle: ${bsDarkBgSubtle};
			--bs-secondary-border-subtle: ${bsDarkBorderSubtle};
		}

		.table-secondary {
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
		
		.text-bg-secondary {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-secondary {
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

		.btn-outline-secondary {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-secondary-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(
			document.head,
			new h.style({ id: "bsts-custom-secondary-var-container" }, css)
		);
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-secondary-var-container" }, css)
		);
	}
};

const setupCustomWarningCSSVar = (hex: string, light: string, dark: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#ffc107"; //--bs-warning
	const rgb = getRGB(hex); //--bs-warning-rgb

	//.btn-warning
	const btnColor = getHexDark(hex, light, dark); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#ffc107", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#ffca2c", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#ffc720", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#ffcd39", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#ffc720", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#ffc107", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#ffc107", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#664d03", hex); //--bs-warning-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#fff3cd", hex); //--bs-warning-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#ffe69c", hex); //--bs-warning-border-subtle
	const bsHighlightBg = getHex(baseColor, "#fff3cd", hex); //--bs-highlight-bg

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#ffda6a", hex); //--bs-warning-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#332701", hex); //--bs-warning-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#997404", hex); //--bs-warning-border-subtle
	const bsDarkHighlightBg = getHex(baseColor, "#ffe69c", hex); //--bs-highlight-bg

	//.table-warning
	const bsTableBg = getHex(baseColor, "#fff3cd", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#e6dbb9", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#f2e7c3", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#e6dbb9", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#ece1be", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg, light, dark); //--bs-table-hover-color

	const css = `
		

		:root, [data-bs-theme='light'] {
			--bs-warning: ${hex};
			--bs-warning-rgb: ${rgb};

			--bs-warning-text-emphasis: ${bsTextEmphasis};
			--bs-warning-bg-subtle: ${bsBgSubtle};
			--bs-warning-border-subtle: ${bsBorderSubtle};

			--bs-highlight-bg: ${bsHighlightBg};
		}

		[data-bs-theme='dark'] {
			--bs-warning-text-emphasis: ${bsDarkTextEmphasis};
			--bs-warning-bg-subtle: ${bsDarkBgSubtle};
			--bs-warning-border-subtle: ${bsDarkBorderSubtle};

			--bs-highlight-bg: ${bsDarkHighlightBg};
		}

		.table-warning {
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
		
		.text-bg-warning {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-warning {
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

		.btn-outline-warning {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-warning-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(
			document.head,
			new h.style({ id: "bsts-custom-warning-var-container" }, css)
		);
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-warning-var-container" }, css)
		);
	}
};

const setupCustomInfoCSSVar = (hex: string, light: string, dark: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#0dcaf0"; //--bs-info
	const rgb = getRGB(hex); //--bs-info-rgb

	//.btn-info
	const btnColor = getHexDark(hex, light, dark); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#0dcaf0", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#31d2f2", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#25cff2", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#3dd5f3", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#25cff2", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#0dcaf0", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#0dcaf0", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#58151c", hex); //--bs-info-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#cff4fc", hex); //--bs-info-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#9eeaf9", hex); //--bs-info-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#6edff6", hex); //--bs-info-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#032830", hex); //--bs-info-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#087990", hex); //--bs-info-border-subtle

	//.table-info
	const bsTableBg = getHex(baseColor, "#cff4fc", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#badce3", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#c5e8ef", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#badce3", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#bfe2e9", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg, light, dark); //--bs-table-hover-color

	const css = `
		

		:root, [data-bs-theme='light'] {
			--bs-info: ${hex};
			--bs-info-rgb: ${rgb};

			--bs-info-text-emphasis: ${bsTextEmphasis};
			--bs-info-bg-subtle: ${bsBgSubtle};
			--bs-info-border-subtle: ${bsBorderSubtle};
		}

		[data-bs-theme='dark'] {
			--bs-info-text-emphasis: ${bsDarkTextEmphasis};
			--bs-info-bg-subtle: ${bsDarkBgSubtle};
			--bs-info-border-subtle: ${bsDarkBorderSubtle};
		}

		.table-info {
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
		
		.text-bg-info {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-info {
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

		.btn-outline-info {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-info-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(document.head, new h.style({ id: "bsts-custom-info-var-container" }, css));
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-info-var-container" }, css)
		);
	}
};

const setupCustomDangerCSSVar = (hex: string, light: string, dark: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#dc3545"; //--bs-danger
	const rgb = getRGB(hex); //--bs-danger-rgb

	//.btn-danger
	const btnColor = getHexDark(hex, light, dark); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#dc3545", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#bb2d3b", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#b02a37", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#b02a37", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#a52834", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#dc3545", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#dc3545", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#58151c", hex); //--bs-danger-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#f8d7da", hex); //--bs-danger-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#f1aeb5", hex); //--bs-danger-border-subtle
	const bsFormInvalid = getHex(baseColor, "#dc3545", hex); //--bs-form-invalid-color
	const bsFormInvalidBorder = getHex(baseColor, "#dc3545", hex); //--bs-form-invalid-border-color
	const bsCodeColor = getHex(baseColor, "#d63384", hex); //--bs-code-color

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#ea868f", hex); //--bs-danger-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#2c0b0e", hex); //--bs-danger-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#842029", hex); //--bs-danger-border-subtle
	const bsDarkFormInvalid = getHex(baseColor, "#ea868f", hex); //--bs-form-invalid-color
	const bsDarkFormInvalidBorder = getHex(baseColor, "#ea868f", hex); //--bs-form-invalid-border-color
	const bsDarkCodeColor = getHex(baseColor, "#e685b5", hex); //--bs-code-color

	//.table-danger
	const bsTableBg = getHex(baseColor, "#f8d7da", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#dfc2c4", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#eccccf", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#dfc2c4", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#e5c7ca", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg, light, dark); //--bs-table-hover-color

	const css = `
		

		:root, [data-bs-theme='light'] {
			--bs-danger: ${hex};
			--bs-danger-rgb: ${rgb};

			--bs-danger-text-emphasis: ${bsTextEmphasis};
			--bs-danger-bg-subtle: ${bsBgSubtle};
			--bs-danger-border-subtle: ${bsBorderSubtle};

			--bs-form-invalid-color: ${bsFormInvalid};
			--bs-form-invalid-border-color: ${bsFormInvalidBorder};

			--bs-code-color: ${bsCodeColor};
		}

		[data-bs-theme='dark'] {
			--bs-danger-text-emphasis: ${bsDarkTextEmphasis};
			--bs-danger-bg-subtle: ${bsDarkBgSubtle};
			--bs-danger-border-subtle: ${bsDarkBorderSubtle};

			--bs-form-invalid-color: ${bsDarkFormInvalid};
			--bs-form-invalid-border-color: ${bsDarkFormInvalidBorder};

			--bs-code-color: ${bsDarkCodeColor};
		}

		.table-danger {
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

		.form-control.is-invalid, .was-validated .form-control:invalid {
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='${encodeURIComponent(
				bsDarkFormInvalidBorder
			)}'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='${encodeURIComponent(
		bsDarkFormInvalidBorder
	)}' stroke='none'/%3e%3c/svg%3e");
		}

		.form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"], .was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"]{
			--bs-form-select-bg-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='${encodeURIComponent(
				bsDarkFormInvalidBorder
			)}'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='${encodeURIComponent(
		bsDarkFormInvalidBorder
	)}' stroke='none'/%3e%3c/svg%3e");
		}
		
		.text-bg-danger {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-danger {
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

		.btn-outline-danger {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-danger-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(
			document.head,
			new h.style({ id: "bsts-custom-danger-var-container" }, css)
		);
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-danger-var-container" }, css)
		);
	}
};

const setupCustomSuccessCSSVar = (hex: string, light: string, dark: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#198754"; //--bs-success
	const rgb = getRGB(hex); //--bs-success-rgb

	//.btn-success
	const btnColor = getHexDark(hex, light, dark); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#198754", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#157347", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#146c43", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#146c43", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#13653f", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#198754", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#198754", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#0a3622", hex); //--bs-success-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#d1e7dd", hex); //--bs-success-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#a3cfbb", hex); //--bs-success-border-subtle
	const bsFormValid = getHex(baseColor, "#198754", hex); //--bs-form-valid-color
	const bsFormValidBorder = getHex(baseColor, "#198754", hex); //--bs-form-valid-border-color

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#75b798", hex); //--bs-success-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#051b11", hex); //--bs-success-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#084298", hex); //--bs-success-border-subtle
	const bsDarkFormValid = getHex(baseColor, "#75b798", hex); //--bs-form-valid-color
	const bsDarkFormValidBorder = getHex(baseColor, "#75b798", hex); //--bs-form-valid-border-color

	//.table-succcess
	const bsTableBg = getHex(baseColor, "#d1e7dd", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#bcd0c7", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#c7dbd2", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#bcd0c7", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#c1d6cc", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg, light, dark); //--bs-table-hover-color

	const css = `
		

		:root, [data-bs-theme='light'] {
			--bs-success: ${hex};
			--bs-success-rgb: ${rgb};

			--bs-success-text-emphasis: ${bsTextEmphasis};
			--bs-success-bg-subtle: ${bsBgSubtle};
			--bs-success-border-subtle: ${bsBorderSubtle};

			--bs-form-valid-color: ${bsFormValid};
			--bs-form-valid-border-color: ${bsFormValidBorder};
		}

		[data-bs-theme='dark'] {
			--bs-success-text-emphasis: ${bsDarkTextEmphasis};
			--bs-success-bg-subtle: ${bsDarkBgSubtle};
			--bs-success-border-subtle: ${bsDarkBorderSubtle};

			--bs-form-valid-color: ${bsDarkFormValid};
			--bs-form-valid-border-color: ${bsDarkFormValidBorder};
		}

		.table-success {
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

		.form-control.is-valid, .was-validated .form-control:valid {
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='${encodeURIComponent(
				bsDarkFormValidBorder
			)}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
		}

		.form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"], .was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"]{
			--bs-form-select-bg-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='${encodeURIComponent(
				bsDarkFormValidBorder
			)}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
		}
		
		.text-bg-success {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-success {
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

		.btn-outline-success {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-success-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(
			document.head,
			new h.style({ id: "bsts-custom-success-var-container" }, css)
		);
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-success-var-container" }, css)
		);
	}
};

const setupCustomPrimaryCSSVar = (hex: string, light: string, dark: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#0d6efd"; //--bs-primary
	const rgb = getRGB(hex); //--bs-primary-rgb
	const bsFocusBorder = getHex(baseColor, "#86b7fe", hex); //form-control-focus

	//.btn-primary
	const btnColor = getHexDark(hex, light, dark); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#0d6efd", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#0b5ed7", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#0a58ca", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#0a58ca", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#0a53be", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#0d6efd", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#0d6efd", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#052c65", hex); //--bs-primary-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#cfe2ff", hex); //--bs-primary-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#9ec5fe", hex); //--bs-primary-border-subtle
	const bsLinkColor = getHex(baseColor, "#0d6efd", hex); //--bs-link-color
	const bsLinkColorRGB = getRGB(bsLinkColor); //--bs-link-color-rgb
	const bsLinkHoverColor = getHex(baseColor, "#0a58ca", hex); //--bs-link-hover-color
	const bsLinkHoverColorRGB = getRGB(bsLinkHoverColor); //--bs-link-hover-color-rgb

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#6ea8fe", hex); //--bs-primary-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#031633", hex); //--bs-primary-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#084298", hex); //--bs-primary-border-subtle
	const bsDarkLinkColor = getHex(baseColor, "#6ea8fe", hex); //--bs-link-color
	const bsDarkLinkColorRGB = getRGB(bsDarkLinkColor); //--bs-link-color-rgb
	const bsDarkLinkHoverColor = getHex(baseColor, "#8bb9fe", hex); //--bs-link-hover-color
	const bsDarkLinkHoverColorRGB = getRGB(bsDarkLinkHoverColor); //--bs-link-hover-color-rgb

	//.table-primary
	const bsTableBg = getHex(baseColor, "#cfe2ff", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#bacbe6", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#c5d7f2", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#bacbe6", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#bfd1ec", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg, light, dark); //--bs-table-hover-color

	const css = `
		
		::selection {
			color: ${btnColor};
  			background-color: ${hex};
		}

		:root, [data-bs-theme='light'] {
			--bs-primary: ${hex};
			--bs-primary-rgb: ${rgb};
			--bs-focus-ring-color: rgba(${rgb}, 0.25);

			--bs-primary-text-emphasis: ${bsTextEmphasis};
			--bs-primary-bg-subtle: ${bsBgSubtle};
			--bs-primary-border-subtle: ${bsBorderSubtle};

			--bs-link-color: ${bsLinkColor};
			--bs-link-color-rgb: ${bsLinkColorRGB};
			--bs-link-hover-color: ${bsLinkHoverColor};
			--bs-link-hover-color-rgb: ${bsLinkHoverColorRGB};
		}

		[data-bs-theme='dark'] {
			--bs-primary-text-emphasis: ${bsDarkTextEmphasis};
			--bs-primary-bg-subtle: ${bsDarkBgSubtle};
			--bs-primary-border-subtle: ${bsDarkBorderSubtle};

			--bs-link-color: ${bsDarkLinkColor};
			--bs-link-color-rgb: ${bsDarkLinkColorRGB};
			--bs-link-hover-color: ${bsDarkLinkHoverColor};
			--bs-link-hover-color-rgb: ${bsDarkLinkHoverColorRGB};
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
			border-color: ${bsFocusBorder};
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}

		.form-switch .form-check-input:focus {
			--bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${encodeURIComponent(
				bsFocusBorder
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


		.text-bg-primary {
			color: ${btnColor} !important;
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
			--bs-btn-disabled-color: ${hex};
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

		.accordion {
			--bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
			--bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${encodeURIComponent(
				bsTextEmphasis
			)}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
			--bs-accordion-btn-focus-border-color: ${bsFocusBorder};
    		--bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(${rgb}, 0.25);
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

// const getLightDarkFontColor = (hex: string) => {
// 	const baseColor = "#ffffff"; //--bs-body-bg
// 	const bsBodyColor = getHex(baseColor, "#212529", hex); //--bs-body-color
// 	const bsDarkBodyColor = getHex(baseColor, "#dee2e6", hex); //--bs-body-color

// 	return { light: bsBodyColor, dark: bsDarkBodyColor };
// };

const setupCustomBodyCSSVar = (hex: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#ffffff"; //--bs-body-bg
	const rgb = getRGB(hex); //--bs-body-bg-rgb

	const bsBodyColor = getHex(baseColor, "#212529", hex); //--bs-body-color
	const bsBodyColorRGB = getRGB(bsBodyColor); //--bs-body-color-rgb
	const bsEmphasisColor = getHex(baseColor, "#000000", hex); //--bs-emphasis-color
	const bsEmphasisColorRGB = getRGB(bsEmphasisColor); //--bs-emphasis-color-rgb
	const bsSecondaryColor = `rgba(${bsBodyColorRGB}, 0.75)`; //--bs-secondary-color
	const bsSecondaryColorRGB = bsBodyColorRGB; //--bs-secondary-color-rgb
	const bsSecondaryBg = getHex(baseColor, "#e9ecef", hex); //--bs-secondary-bg
	const bsSecondaryBgRGB = getRGB(bsSecondaryBg); //--bs-secondary-bg-rgb
	const bsTertiaryColor = `rgba(${bsBodyColorRGB}, 0.5)`; //--bs-tertiary-color
	const bsTertiaryColorRGB = bsBodyColorRGB; //--bs-tertiary-color-rgb
	const bsTertiaryBg = getHex(baseColor, "#f8f9fa", hex); //--bs-secondary-bg
	const bsTertiaryBgRGB = getRGB(bsTertiaryBg); //--bs-secondary-bg-rgb
	const bsBorderColor = getHex(baseColor, "#dee2e6", hex); //--bs-border-color

	//[data-bs-theme="dark"]
	const bsDarkBodyBg = getHex(baseColor, "#212529", hex); //--bs-body-bg
	const rgbDark = getRGB(bsDarkBodyBg); //--bs-body-bg-rgb

	const bsDarkBodyColor = getHex(baseColor, "#dee2e6", hex); //--bs-body-color
	const bsDarkBodyColorRGB = getRGB(bsDarkBodyColor); //--bs-body-color-rgb
	const bsDarkEmphasisColor = getHex(baseColor, "#ffffff", hex); //--bs-emphasis-color
	const bsDarkEmphasisColorRGB = getRGB(bsDarkEmphasisColor); //--bs-emphasis-color-rgb
	const bsDarkSecondaryColor = `rgba(${bsDarkBodyColorRGB}, 0.75)`; //--bs-secondary-color
	const bsDarkSecondaryColorRGB = bsDarkBodyColorRGB; //--bs-secondary-color-rgb
	const bsDarkSecondaryBg = getHex(baseColor, "#343a40", hex); //--bs-secondary-bg
	const bsDarkSecondaryBgRGB = getRGB(bsDarkSecondaryBg); //--bs-secondary-bg-rgb
	const bsDarkTertiaryColor = `rgba(${bsDarkBodyColorRGB}, 0.5)`; //--bs-tertiary-color
	const bsDarkTertiaryColorRGB = bsDarkBodyColorRGB; //--bs-tertiary-color-rgb
	const bsDarkTertiaryBg = getHex(baseColor, "#2b3035", hex); //--bs-secondary-bg
	const bsDarkTertiaryBgRGB = getRGB(bsDarkTertiaryBg); //--bs-secondary-bg-rgb
	const bsDarkBorderColor = getHex(baseColor, "#495057", hex); //--bs-border-color

	const css = `
		:root, [data-bs-theme='light'] {
			--bs-body-bg: ${hex};
			--bs-body-bg-rgb: ${rgb};
			--bs-body-color: ${bsBodyColor};
			--bs-body-color-rgb: ${bsBodyColorRGB};
			--bs-emphasis-color: ${bsEmphasisColor};
			--bs-emphasis-color-rgb: ${bsEmphasisColorRGB};
			--bs-secondary-color: ${bsSecondaryColor};
			--bs-secondary-color-rgb: ${bsSecondaryColorRGB};
			--bs-secondary-bg: ${bsSecondaryBg};
			--bs-secondary-bg-rgb: ${bsSecondaryBgRGB};
			--bs-tertiary-color: ${bsTertiaryColor};
			--bs-tertiary-color-rgb: ${bsTertiaryColorRGB};
			--bs-tertiary-bg: ${bsTertiaryBg};
			--bs-tertiary-bg-rgb: ${bsTertiaryBgRGB};
			--bs-border-color: ${bsBorderColor};
			
		}

		[data-bs-theme='dark'] {
			--bs-body-bg: ${bsDarkBodyBg};
			--bs-body-bg-rgb: ${rgbDark};
			--bs-body-color: ${bsDarkBodyColor};
			--bs-body-color-rgb: ${bsDarkBodyColorRGB};
			--bs-emphasis-color: ${bsDarkEmphasisColor};
			--bs-emphasis-color-rgb: ${bsDarkEmphasisColorRGB};
			--bs-secondary-color: ${bsDarkSecondaryColor};
			--bs-secondary-color-rgb: ${bsDarkSecondaryColorRGB};
			--bs-secondary-bg: ${bsDarkSecondaryBg};
			--bs-secondary-bg-rgb: ${bsDarkSecondaryBgRGB};
			--bs-tertiary-color: ${bsDarkTertiaryColor};
			--bs-tertiary-color-rgb: ${bsDarkTertiaryColorRGB};
			--bs-tertiary-bg: ${bsDarkTertiaryBg};
			--bs-tertiary-bg-rgb: ${bsDarkTertiaryBgRGB};
			--bs-border-color: ${bsDarkBorderColor};
		}
	`;

	//add to custom stylesheet
	let bstsCustomVarContainer = document.getElementById("bsts-custom-body-var-container");
	if (!bstsCustomVarContainer) {
		core.appendChild(document.head, new h.style({ id: "bsts-custom-body-var-container" }, css));
	} else {
		core.replaceWith(
			bstsCustomVarContainer,
			new h.style({ id: "bsts-custom-body-var-container" }, css)
		);
	}
};

const setupCustomAccentCSSVar = (hex: string) => {
	const basePrimary = "#0d6efd";
	const baseSuccess = "#198754";
	const baseDanger = "#dc3545";
	const baseInfo = "#0dcaf0";
	const baseWarning = "#ffc107";
	const baseSecondary = "#6c757d";
	const baseLight = "#f8f9fa";
	const baseDark = "#212529";

	const dark = "#000";
	const light = "#fff";

	setupCustomPrimaryCSSVar(hex, light, dark);
	setupCustomSuccessCSSVar(getHex(basePrimary, baseSuccess, hex), light, dark);
	setupCustomDangerCSSVar(getHex(basePrimary, baseDanger, hex), light, dark);
	setupCustomInfoCSSVar(getHex(basePrimary, baseInfo, hex), light, dark);
	setupCustomWarningCSSVar(getHex(basePrimary, baseWarning, hex), light, dark);
	setupCustomSecondaryCSSVar(getHex(basePrimary, baseSecondary, hex), light, dark);
	setupCustomLightCSSVar(getHex(basePrimary, baseLight, hex), light, dark);
	setupCustomDarkCSSVar(getHex(basePrimary, baseDark, hex), light, dark);
};

export const test: IContent = {
	title: "Testing",
	description: "This is testing page to test our library one by one",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		const cssBsPrimary = core.getCSSVarHexColor("--bs-primary");
		const cssBsBodyBg = core.getCSSVarHexColor("--bs-body-bg");
		// const cssBsSuccess = core.getCSSVarHexColor("--bs-success");
		// const cssBsDanger = core.getCSSVarHexColor("--bs-danger");
		// const cssBsInfo = core.getCSSVarHexColor("--bs-info");
		// const cssBsWarning = core.getCSSVarHexColor("--bs-warning");

		return [
			//----------------------

			new e.section([
				new e.title("Accent color"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							new h.div([
								"Accent color",
								new h.div(
									{
										class: "swatch",
										rounded: true,
										border: true,
										style: { backgroundColor: cssBsPrimary },
									},

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
													setupCustomAccentCSSVar(value);
												}
											},
										},
									})
								),
							]),
							new h.div([
								"Body color",
								new h.div(
									{
										class: "swatch",
										rounded: true,
										border: true,
										style: { backgroundColor: cssBsBodyBg },
									},

									new b.input({
										type: "color",
										value: cssBsBodyBg,
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
													setupCustomBodyCSSVar(value);
												}
											},
										},
									})
								),
							]),
							// new h.div([
							// 	"Primary",
							// 	new h.div(
							// 		{
							// 			class: "swatch",
							// 			rounded: true,
							// 			border: true,
							// 			style: { backgroundColor: cssBsPrimary },
							// 		},

							// 		new b.input({
							// 			type: "color",
							// 			value: cssBsPrimary,
							// 			on: {
							// 				input: (e) => {
							// 					let target = e.target as HTMLInputElement;
							// 					let value = target.value;
							// 					let container = target.closest(
							// 						".swatch"
							// 					) as HTMLElement;

							// 					if (container) {
							// 						container.style.setProperty(
							// 							"background-color",
							// 							value
							// 						);
							// 						setupCustomPrimaryCSSVar(value);
							// 					}
							// 				},
							// 			},
							// 		})
							// 	),
							// ]),
							// new h.div([
							// 	"Success",
							// 	new h.div(
							// 		{
							// 			class: "swatch",
							// 			rounded: true,
							// 			border: true,
							// 			style: { backgroundColor: cssBsSuccess },
							// 		},

							// 		new b.input({
							// 			type: "color",
							// 			value: cssBsSuccess,
							// 			on: {
							// 				input: (e) => {
							// 					let target = e.target as HTMLInputElement;
							// 					let value = target.value;
							// 					let container = target.closest(
							// 						".swatch"
							// 					) as HTMLElement;

							// 					if (container) {
							// 						container.style.setProperty(
							// 							"background-color",
							// 							value
							// 						);
							// 						setupCustomSuccessCSSVar(value);
							// 					}
							// 				},
							// 			},
							// 		})
							// 	),
							// ]),
							// new h.div([
							// 	"Danger",
							// 	new h.div(
							// 		{
							// 			class: "swatch",
							// 			rounded: true,
							// 			border: true,
							// 			style: { backgroundColor: cssBsDanger },
							// 		},

							// 		new b.input({
							// 			type: "color",
							// 			value: cssBsDanger,
							// 			on: {
							// 				input: (e) => {
							// 					let target = e.target as HTMLInputElement;
							// 					let value = target.value;
							// 					let container = target.closest(
							// 						".swatch"
							// 					) as HTMLElement;

							// 					if (container) {
							// 						container.style.setProperty(
							// 							"background-color",
							// 							value
							// 						);
							// 						setupCustomDangerCSSVar(value);
							// 					}
							// 				},
							// 			},
							// 		})
							// 	),
							// ]),
							// new h.div([
							// 	"Info",
							// 	new h.div(
							// 		{
							// 			class: "swatch",
							// 			rounded: true,
							// 			border: true,
							// 			style: { backgroundColor: cssBsInfo },
							// 		},

							// 		new b.input({
							// 			type: "color",
							// 			value: cssBsInfo,
							// 			on: {
							// 				input: (e) => {
							// 					let target = e.target as HTMLInputElement;
							// 					let value = target.value;
							// 					let container = target.closest(
							// 						".swatch"
							// 					) as HTMLElement;

							// 					if (container) {
							// 						container.style.setProperty(
							// 							"background-color",
							// 							value
							// 						);
							// 						setupCustomInfoCSSVar(value);
							// 					}
							// 				},
							// 			},
							// 		})
							// 	),
							// ]),
							// new h.div([
							// 	"Warning",
							// 	new h.div(
							// 		{
							// 			class: "swatch",
							// 			rounded: true,
							// 			border: true,
							// 			style: { backgroundColor: cssBsWarning },
							// 		},

							// 		new b.input({
							// 			type: "color",
							// 			value: cssBsWarning,
							// 			on: {
							// 				input: (e) => {
							// 					let target = e.target as HTMLInputElement;
							// 					let value = target.value;
							// 					let container = target.closest(
							// 						".swatch"
							// 					) as HTMLElement;

							// 					if (container) {
							// 						container.style.setProperty(
							// 							"background-color",
							// 							value
							// 						);
							// 						setupCustomWarningCSSVar(value);
							// 					}
							// 				},
							// 			},
							// 		})
							// 	),
							// ]),
						];
					},
				}),
			]),

			new e.section([
				new e.title("Accent color preview"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					output: () => {
						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
							"link",
						].map((i) => {
							return new b.button(
								{ color: i as I.B.Button["color"] },
								core.uppercaseFirst(i)
							);
						});
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

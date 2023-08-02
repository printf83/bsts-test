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

const setupCustomDangerCSSVar = (hex: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#dc3545"; //--bs-danger
	const rgb = getRGB(hex); //--bs-danger-rgb

	//.btn-danger
	const btnColor = getHexDark(hex); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#dc3545", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#bb2d3b", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#b02a37", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#b02a37", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#a52834", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#dc3545", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg); //--bs-btn-disabled-color
	const btnDisabledBorder = getHex(baseColor, "#dc3545", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = getHex(baseColor, "#58151c", hex); //--bs-danger-text-emphasis
	const bsBgSubtle = getHex(baseColor, "#f8d7da", hex); //--bs-danger-bg-subtle
	const bsBorderSubtle = getHex(baseColor, "#f1aeb5", hex); //--bs-danger-border-subtle
	const bsFormInvalid = getHex(baseColor, "#dc3545", hex); //--bs-form-invalid-color
	const bsFormInvalidBorder = getHex(baseColor, "#dc3545", hex); //--bs-form-invalid-border-color

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = getHex(baseColor, "#ea868f", hex); //--bs-danger-text-emphasis
	const bsDarkBgSubtle = getHex(baseColor, "#2c0b0e", hex); //--bs-danger-bg-subtle
	const bsDarkBorderSubtle = getHex(baseColor, "#842029", hex); //--bs-danger-border-subtle
	const bsDarkFormInvalid = getHex(baseColor, "#ea868f", hex); //--bs-form-invalid-color
	const bsDarkFormInvalidBorder = getHex(baseColor, "#ea868f", hex); //--bs-form-invalid-border-color

	//.table-danger
	const bsTableBg = getHex(baseColor, "#f8d7da", hex); //--bs-table-bg
	const bsTableColor = getHexDark(bsTableBg); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#dfc2c4", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#eccccf", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#dfc2c4", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#e5c7ca", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg); //--bs-table-hover-color

	const css = `
		

		:root, [data-bs-theme='light'] {
			--bs-danger: ${hex};
			--bs-danger-rgb: ${rgb};

			--bs-danger-text-emphasis: ${bsTextEmphasis};
			--bs-danger-bg-subtle: ${bsBgSubtle};
			--bs-danger-border-subtle: ${bsBorderSubtle};

			--bs-form-invalid-color: ${bsFormInvalid};
			--bs-form-invalid-border-color: ${bsFormInvalidBorder};
		}

		[data-bs-theme='dark'] {
			--bs-danger-text-emphasis: ${bsDarkTextEmphasis};
			--bs-danger-bg-subtle: ${bsDarkBgSubtle};
			--bs-danger-border-subtle: ${bsDarkBorderSubtle};

			--bs-form-invalid-color: ${bsDarkFormInvalid};
			--bs-form-invalid-border-color: ${bsDarkFormInvalidBorder};
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
				hex
			)}'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='${encodeURIComponent(
		hex
	)}' stroke='none'/%3e%3c/svg%3e")' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
		}
		
		.text-bg-danger{
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
			--bs-btn-disabled-color: ${btnDisabledColor};
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

const setupCustomSuccessCSSVar = (hex: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#198754"; //--bs-success
	const rgb = getRGB(hex); //--bs-success-rgb

	//.btn-success
	const btnColor = getHexDark(hex); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#198754", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#157347", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#146c43", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#146c43", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#13653f", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#198754", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg); //--bs-btn-disabled-color
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
	const bsTableColor = getHexDark(bsTableBg); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#bcd0c7", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#c7dbd2", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#bcd0c7", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#c1d6cc", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg); //--bs-table-hover-color

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
				hex
			)}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
		}
		
		.text-bg-success{
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
			--bs-btn-disabled-color: ${btnDisabledColor};
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

const setupCustomPrimaryCSSVar = (hex: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#0d6efd"; //--bs-primary
	const rgb = getRGB(hex); //--bs-primary-rgb

	//.btn-primary
	const btnColor = getHexDark(hex); //--bs-btn-color
	const btnBorder = getHex(baseColor, "#0d6efd", hex); //--bs-btn-border-color
	const btnHoverBg = getHex(baseColor, "#0b5ed7", hex); //--bs-btn-hover-bg
	const btnHoverColor = getHexDark(btnHoverBg); //--bs-btn-hover-color
	const btnHoverBorder = getHex(baseColor, "#0a58ca", hex); //--bs-btn-hover-border-color
	const btnActiveBg = getHex(baseColor, "#0a58ca", hex); //--bs-btn-active-bg
	const btnActiveColor = getHexDark(btnActiveBg); //--bs-btn-active-color
	const btnActiveBorder = getHex(baseColor, "#0a53be", hex); //--bs-btn-active-border-color
	const btnDisabledBg = getHex(baseColor, "#0d6efd", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = getHexDark(btnDisabledBg); //--bs-btn-disabled-color
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
	const bsTableColor = getHexDark(bsTableBg); //--bs-table-color
	const bsTableBorderColor = getHex(baseColor, "#bacbe6", hex); //--bs-table-border-color
	const bsTableStripedBg = getHex(baseColor, "#c5d7f2", hex); //--bs-table-striped-bg
	const bsTableStripedColor = getHexDark(bsTableStripedBg); //--bs-table-striped-color
	const bsTableActiveBg = getHex(baseColor, "#bacbe6", hex); //--bs-table-active-bg
	const bsTableActiveColor = getHexDark(bsTableActiveBg); //--bs-table-active-color
	const bsTableHoverBg = getHex(baseColor, "#bfd1ec", hex); //--bs-table-hover-bg
	const bsTableHoverColor = getHexDark(bsTableHoverBg); //--bs-table-hover-color

	const bsFormControlFocusBorder = getHex(baseColor, "#86b7fe", hex); //form-control-focus

	const css = `
		

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
		const cssBsSuccess = core.getCSSVarHexColor("--bs-success");
		const cssBsDanger = core.getCSSVarHexColor("--bs-danger");

		return [
			//----------------------

			new e.section([
				new e.title("Accent color"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return [
							new h.div([
								"Primary",
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
													setupCustomPrimaryCSSVar(value);
												}
											},
										},
									})
								),
							]),
							new h.div([
								"Success",
								new h.div(
									{
										class: "swatch",
										rounded: true,
										border: true,
										style: { backgroundColor: cssBsSuccess },
									},

									new b.input({
										type: "color",
										value: cssBsSuccess,
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
													setupCustomSuccessCSSVar(value);
												}
											},
										},
									})
								),
							]),
							new h.div([
								"Danger",
								new h.div(
									{
										class: "swatch",
										rounded: true,
										border: true,
										style: { backgroundColor: cssBsDanger },
									},

									new b.input({
										type: "color",
										value: cssBsDanger,
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
													setupCustomDangerCSSVar(value);
												}
											},
										},
									})
								),
							]),
						];
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

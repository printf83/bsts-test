import { cookie } from "./cookie.js";

export const getSavedTheme = () => {
	let themeCookie = cookie.get("current_theme");
	if (themeCookie) {
		return themeCookie;
	} else {
		return "auto";
	}
};

export const onThemeChange = (value: string) => {
	const ICONFORMAT = "png";
	cookie.set("current_theme", value);
	const faviconEl = document.querySelector('link[rel="icon"]') as HTMLLinkElement;

	if (value === "auto") {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", "dark");
			faviconEl.setAttribute("href", `favicon-light.${ICONFORMAT}`);
		} else {
			document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", "light");
			faviconEl.setAttribute("href", `favicon.${ICONFORMAT}`);
		}
	} else {
		document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", value);
		if (value === "dark") {
			faviconEl.setAttribute("href", `favicon-light.${ICONFORMAT}`);
		} else {
			faviconEl.setAttribute("href", `favicon.${ICONFORMAT}`);
		}
	}
};

import { cookie } from "./cookie.js";

export const getSavedBootswatch = () => {
	let bootswatchCookie = cookie.get("current_bootswatch");
	if (bootswatchCookie) {
		return bootswatchCookie;
	} else {
		return "default";
	}
};

export const onBootswatchChange = (value: string) => {
	cookie.set("current_bootswatch", value);
	const bootstrapCssLink = document.getElementById("bootswatchCssLink") as HTMLLinkElement;

	if (bootstrapCssLink) {
		if (value === "default") {
			bootstrapCssLink.disabled = true;
			bootstrapCssLink.setAttribute("href", "");
		} else {
			bootstrapCssLink.disabled = false;
			bootstrapCssLink.setAttribute("href", `https://cdn.jsdelivr.net/npm/bootswatch@5.3/dist/${value}/bootstrap.min.css`);
		}
	}
};

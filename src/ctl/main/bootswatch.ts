import { b, core, h } from "@printf83/bsts";
import { cookie } from "./cookie.js";

export interface IAttrItemBootswatch {
	value: string;
	label: string;
}

export const changeBootswatch = (value: string) => {
	let bsBootswatch = document.getElementById("bs-bootswatch") as Element;
	let bsBootswatchMenu = bsBootswatch.nextSibling as Element;
	let bsBootswatchLabel = document.getElementById("bs-bootswatch-label") as Element;

	let lastActive = bsBootswatchMenu.querySelectorAll("a.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	let newActive = bsBootswatchMenu.querySelectorAll(`a[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
		newActive.setAttribute("aria-current", "true");
	}

	core.replaceWith(bsBootswatchLabel, new h.span({ id: "bs-bootswatch-label" }, `${core.uppercaseFirst(value)}`));

	onBootswatchChange(value);
};

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

export const genBootswatch = (textColor: core.bootstrapType.textColor, navbarItemBootswatch?: IAttrItemBootswatch[], currentBootswatch?: string) => {
	if (navbarItemBootswatch) {
		return [
			new b.navbar.item(
				{
					paddingY: [2, "lg-1"],
					col: [12, "lg-auto"],
				},
				[
					new b.verticalrule({
						display: ["none", "lg-flex"],
						height: 100,
						marginX: "lg-2",
						textColor: textColor,
					}),
					new h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
				]
			),
			new b.navbar.item({ dropdown: true }, [
				new b.dropdown.button(
					{
						navItem: true,
						id: "bs-bootswatch",
						paddingY: 2,
						paddingX: [0, "lg-2"],
						textColor: textColor,
						label: "Bootswatch theme",
					},
					[new h.span({ marginEnd: 2 }, new b.icon("palette2")), new h.span({ id: "bs-bootswatch-label" }, `${core.uppercaseFirst(currentBootswatch ? currentBootswatch : "Default")}`)]
				),
				new b.dropdown.menu(
					{
						positionView: "end",
						customStyle: 1,
						style: { minWidth: "20rem" },
					},
					new h.div(
						{
							class: "bs-bootswatch-menu",
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr",
							gap: 1,
						},
						navbarItemBootswatch.map((i) => {
							return new h.a(
								{
									on: {
										click: (_e) => {
											changeBootswatch(i.value);
										},
									},
									class: [i.value === currentBootswatch ? "active" : undefined],
									data: { value: i.value },
								},
								i.label
							);
						})
					)
				),
			]),
		];
	} else {
		return [];
	}
};

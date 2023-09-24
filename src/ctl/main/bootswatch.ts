import { b, core, h } from "@printf83/bsts";
import { cookie } from "./cookie.js";

export interface IBootswatchItem {
	value: string;
	label: string;
}

const removeCustomVarContainer = (name?: string) => {
	const customVarContainer = document.getElementById(
		`bsts-custom${name ? "-" + name : ""}-var-container`
	);

	if (customVarContainer) {
		core.removeElement(customVarContainer);
	}
};

const removeAllCustomVar = () => {
	removeCustomVarContainer("primary");
	removeCustomVarContainer("secondary");
	removeCustomVarContainer("success");
	removeCustomVarContainer("info");
	removeCustomVarContainer("warning");
	removeCustomVarContainer("danger");
	removeCustomVarContainer("dark");
	removeCustomVarContainer("light");
	removeCustomVarContainer("body");
	removeCustomVarContainer();
};

export const changeBootswatch = (value: string) => {
	//change menu
	let bsBootswatch = document.getElementsByClassName("bs-bootswatch");
	if (bsBootswatch && bsBootswatch.length > 0) {
		Array.from(bsBootswatch).forEach((elem) => {
			let bsBootswatchMenu = elem.nextSibling as Element;
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
		});
	}

	//change label
	let bsBootswatchLabel = document.getElementsByClassName("bs-bootswatch-label");
	if (bsBootswatchLabel && bsBootswatchLabel.length > 0) {
		Array.from(bsBootswatchLabel).forEach((elem) => {
			elem.innerHTML = `${core.uppercaseFirst(value)}`;
		});
	}

	//raise event

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

export const onBootswatchChange = (value: string, resetAccentColor?: boolean) => {
	resetAccentColor ??= true;

	cookie.set("current_bootswatch", value);
	const bootstrapCssLink = document.getElementById("bootswatchCssLink") as HTMLLinkElement;

	if (bootstrapCssLink) {
		if (resetAccentColor) removeAllCustomVar();

		if (value === "default") {
			bootstrapCssLink.disabled = true;
			bootstrapCssLink.setAttribute("href", "");
		} else {
			bootstrapCssLink.disabled = false;
			bootstrapCssLink.setAttribute(
				"href",
				`https://cdn.jsdelivr.net/npm/bootswatch@5.3/dist/${value}/bootstrap.min.css`
			);
		}
	}
};

export const genBootswatch = (
	navbarItemBootswatch?: IBootswatchItem[],
	currentBootswatch?: string
) => {
	const bsBootswatch = core.UUID();
	const bsBootswatchLabel = core.UUID();

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
					}),
					new h.hr({ display: "lg-none", marginY: 2 }),
				]
			),
			new b.navbar.item({ dropdown: true }, [
				new b.dropdown.button(
					{
						navItem: true,
						id: bsBootswatch,
						class: "bs-bootswatch",
						paddingY: 2,
						paddingX: [0, "lg-2"],
						label: "Bootswatch theme",
					},
					[
						new h.span({ marginEnd: 2 }, new b.icon("palette2")),
						new h.span(
							{ id: bsBootswatchLabel, class: "bs-bootswatch-label" },
							`${core.uppercaseFirst(
								currentBootswatch ? currentBootswatch : "Default"
							)}`
						),
					]
				),
				new b.dropdown.menu(
					{
						positionView: "end",
						customStyle: 1,
						style: { minWidth: "20rem" },
					},
					new h.div(
						{
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr",
							gap: 1,
							style: { minWidth: "320px" },
						},
						navbarItemBootswatch.map((i) => {
							return new b.dropdown.item(
								{
									on: {
										click: (_e) => {
											changeBootswatch(i.value);
										},
									},
									active: i.value === currentBootswatch,
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

import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import { b, core, h } from "@printf83/bsts";
import { cookie } from "../../ctl/main/cookie.js";

interface colorPalletItem {
	light: string;
	dark: string;
	primary: string;
	secondary: string;
	info: string;
	success: string;
	warning: string;
	danger: string;
}

const COLORPALLETDB = (): colorPalletItem[] => {
	return [
		{
			light: "#f8f9fa",
			dark: "#212529",
			primary: "#0d6efd",
			secondary: "#6c757d",
			info: "#0dcaf0",
			success: "#198754",
			warning: "#ffc107",
			danger: "#dc3545",
		},
		{
			light: "#f8f9fa",
			dark: "#212529",
			primary: "#712cf9",
			secondary: "#6c757d",
			info: "#0dcaf0",
			success: "#198754",
			warning: "#ffc107",
			danger: "#dc3545",
		},
		{
			light: "#add4cd",
			dark: "#290405",
			primary: "#610ebb",
			secondary: "#e85129",
			info: "#e5a832",
			success: "#0cad69",
			warning: "#e2ce0b",
			danger: "#f22704",
		},
		{
			light: "#c1f0fa",
			dark: "#0b0d0e",
			primary: "#731949",
			secondary: "#e62c74",
			info: "#dcb0a9",
			success: "#1fa976",
			warning: "#d6d11e",
			danger: "#e2410e",
		},
		{
			light: "#f9e6c1",
			dark: "#2b170b",
			primary: "#0d4a3c",
			secondary: "#42878a",
			info: "#00e0e2",
			success: "#00b03b",
			warning: "#f5c800",
			danger: "#f8003f",
		},
		{
			light: "#d9f8fe",
			dark: "#00263c",
			primary: "#043150",
			secondary: "#ea1570",
			info: "#f4d1c6",
			success: "#0cac60",
			warning: "#e7cc0b",
			danger: "#f80804",
		},
		{
			light: "#f5c8c3",
			dark: "#070706",
			primary: "#c4a04d",
			secondary: "#504e3e",
			info: "#be5c56",
			success: "#51a629",
			warning: "#fdc151",
			danger: "#f0175d",
		},
		{
			light: "#e0e6f2",
			dark: "#20095d",
			primary: "#3300f5",
			secondary: "#c8787b",
			info: "#fad9cf",
			success: "#00ba6e",
			warning: "#e7d100",
			danger: "#fa2100",
		},
		{
			light: "#cfd2f2",
			dark: "#040f28",
			primary: "#63c3d2",
			secondary: "#136364",
			info: "#a85b89",
			success: "#14af55",
			warning: "#edcb13",
			danger: "#f8082c",
		},
		{
			light: "#d1efee",
			dark: "#040530",
			primary: "#3840b4",
			secondary: "#d83e88",
			info: "#ebba9f",
			success: "#2daf6c",
			warning: "#e4cf2b",
			danger: "#f32817",
		},
		{
			light: "#f1e5aa",
			dark: "#0a0807",
			primary: "#5f3527",
			secondary: "#954527",
			info: "#d50031",
			success: "#4e9400",
			warning: "#ffba43",
			danger: "#ea0060",
		},
		{
			light: "#e4d8d1",
			dark: "#191728",
			primary: "#483b2a",
			secondary: "#e7342e",
			info: "#f94134",
			success: "#4a9d13",
			warning: "#febd37",
			danger: "#ed095c",
		},
		{
			light: "#ccf1eb",
			dark: "#070c0d",
			primary: "#0f3943",
			secondary: "#c62c44",
			info: "#5944e8",
			success: "#19974e",
			warning: "#e4c51c",
			danger: "#ed0d25",
		},
		{
			light: "#bcd2ee",
			dark: "#0e060b",
			primary: "#003bfc",
			secondary: "#56443c",
			info: "#e14355",
			success: "#009858",
			warning: "#dec800",
			danger: "#eb1c00",
		},
		{
			light: "#cde8dd",
			dark: "#2f155a",
			primary: "#3e4349",
			secondary: "#3266f8",
			info: "#0078b0",
			success: "#009a53",
			warning: "#e2c700",
			danger: "#f00005",
		},
		{
			light: "#c8e9f9",
			dark: "#230749",
			primary: "#002ca1",
			secondary: "#9c3097",
			info: "#c1a5bf",
			success: "#00a05d",
			warning: "#e0ca00",
			danger: "#ef1b00",
		},
		{
			light: "#b5b5a7",
			dark: "#6e3a3b",
			primary: "#6f5560",
			secondary: "#866868",
			info: "#c4faf5",
			success: "#3cb784",
			warning: "#dad535",
			danger: "#e6471d",
		},
		{
			light: "#8f5e52",
			dark: "#05283c",
			primary: "#c9254e",
			secondary: "#e96796",
			info: "#97f286",
			success: "#72bc24",
			warning: "#fec88b",
			danger: "#fb126d",
		},
		{
			light: "#ede9fb",
			dark: "#462eac",
			primary: "#0f60ff",
			secondary: "#c860f7",
			info: "#debefc",
			success: "#00be6e",
			warning: "#ead200",
			danger: "#fd1c00",
		},
		{
			light: "#a9e5fb",
			dark: "#353476",
			primary: "#a185d5",
			secondary: "#969ce8",
			info: "#debefc",
			success: "#19ca7d",
			warning: "#ead613",
			danger: "#fe2c08",
		},
		{
			light: "#cde8dd",
			dark: "#2f155a",
			primary: "#3e4349",
			secondary: "#3266f8",
			info: "#0078b0",
			success: "#009a53",
			warning: "#e2c700",
			danger: "#f00005",
		},
		{
			light: "#dadef2",
			dark: "#1a1a29",
			primary: "#493085",
			secondary: "#d84357",
			info: "#7b5ec3",
			success: "#2d9861",
			warning: "#dcc930",
			danger: "#e62c1a",
		},
		{
			light: "#0c40d5",
			dark: "#f5f100",
			primary: "#074712",
			secondary: "#129458",
			info: "#f92a0c",
			success: "#05a113",
			warning: "#f5c206",
			danger: "#f00248",
		},
		{
			light: "#c8e9f9",
			dark: "#230749",
			primary: "#002ca1",
			secondary: "#9c3097",
			info: "#c1a5bf",
			success: "#00a05d",
			warning: "#e0ca00",
			danger: "#ef1b00",
		},
		{
			light: "#dce3e1",
			dark: "#130025",
			primary: "#91154b",
			secondary: "#d10f78",
			info: "#ecad47",
			success: "#0ba976",
			warning: "#d4d20a",
			danger: "#e14203",
		},
		{
			light: "#ffedd2",
			dark: "#080403",
			primary: "#643e2d",
			secondary: "#dc5540",
			info: "#eeb370",
			success: "#61aa2e",
			warning: "#fdc26f",
			danger: "#f11a65",
		},
	];
};

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

export const accent_color: IContent = {
	title: "Accent color",
	description: "Change accent color without compiling SASS",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Base color"),
				new e.text("You can create multiple color from one color."),
				new e.code({
					db: getContentCode(db),
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 3,
						class: "color-pallet-big-box",
					},
					extention: [
						{
							name: "REMOVECUSTOMVARCONTAINER",
							rename: "removeCustomVarContainer",
							output: removeCustomVarContainer,
						},
						{
							name: "REMOVEALLCUSTOMVAR",
							rename: "removeAllCustomVar",
							output: removeAllCustomVar,
						},
					],
					output: () => {
						const id = core.UUID();

						return new h.div([
							new b.label({ for: id }, "Accent color :"),
							new h.div(
								{
									rounded: true,
									border: true,
									bgColor: "primary",
									style: { height: "2.5rem", width: "11rem" },
									marginBottom: 3,
								},

								new b.input({
									id: id,
									type: "color",
									width: 100,
									height: 100,
									opacity: 0,
									on: {
										click: (e) => {
											const target = e.currentTarget as HTMLInputElement;
											const bsPrimary =
												core.getCSSVarHexColor("--bs-primary");
											target.value = bsPrimary ? bsPrimary : "#0d6efd";
										},
										input: (e) => {
											let target = e.target as HTMLInputElement;
											let value = target.value;

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

											const css = [
												core.accentColor.primary(value, light, dark),
												core.accentColor.success(
													core.accentColor.calcHex(
														basePrimary,
														baseSuccess,
														value
													),
													light,
													dark
												),
												core.accentColor.danger(
													core.accentColor.calcHex(
														basePrimary,
														baseDanger,
														value
													),
													light,
													dark
												),
												core.accentColor.info(
													core.accentColor.calcHex(
														basePrimary,
														baseInfo,
														value
													),
													light,
													dark
												),
												core.accentColor.warning(
													core.accentColor.calcHex(
														basePrimary,
														baseWarning,
														value
													),
													light,
													dark
												),
												core.accentColor.secondary(
													core.accentColor.calcHex(
														basePrimary,
														baseSecondary,
														value
													),
													light,
													dark
												),
												core.accentColor.light(
													core.accentColor.calcHex(
														basePrimary,
														baseLight,
														value
													),
													light,
													dark
												),
												core.accentColor.dark(
													core.accentColor.calcHex(
														basePrimary,
														baseDark,
														value
													),
													light,
													dark
												),
											];

											//remove custom var
											removeAllCustomVar();

											//add custom var
											core.accentColor.apply(css.join("\n"));
										},
									},
								})
							),

							new b.label("Color preview :"),
							new h.div(
								{
									class: "color-pallet-big",
									marginBottom: 3,
									display: "flex",
									flex: "wrap",
									justifyContent: "center",
									gap: 1,
								},
								[
									new h.div({ bgColor: "primary", title: "primary" }),
									new h.div({ bgColor: "secondary", title: "Secondary" }),
									new h.div({ bgColor: "success", title: "Success" }),
									new h.div({ bgColor: "danger", title: "Danger" }),
									new h.div({ bgColor: "warning", title: "Warning" }),
									new h.div({ bgColor: "info", title: "Info" }),
									new h.div({ bgColor: "light", title: "Light" }),
									new h.div({ bgColor: "dark", title: "Dark" }),
								]
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Custom color"),
				new e.text("We automaticly create variation form one color you give."),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						const onclick = (e: Event) => {
							const target = e.currentTarget as HTMLInputElement;
							const key = target.getAttribute("data-key");

							const bsBgColor = core.getCSSVarHexColor(
								`--bs-${key === "body" ? "body-bg" : key}`
							);

							target.value = bsBgColor ? bsBgColor : "#000000";
						};

						const oninput = (e: Event) => {
							let target = e.target as HTMLInputElement;
							const key = target.getAttribute("data-key");
							let value = target.value;

							//remove other custom var
							const customVarContainer =
								document.getElementById(`bsts-custom-var-container`);
							if (customVarContainer) {
								core.removeElement(customVarContainer);
							}

							//add custom var to head
							switch (key) {
								case "primary":
									core.accentColor.apply(
										core.accentColor.primary(value),
										`bsts-custom-${key}-var-container`
									);
									break;
								case "success":
									core.accentColor.apply(
										core.accentColor.success(value),
										`bsts-custom-${key}-var-container`
									);
									break;
								case "danger":
									core.accentColor.apply(
										core.accentColor.danger(value),
										`bsts-custom-${key}-var-container`
									);
									break;
								case "info":
									core.accentColor.apply(
										core.accentColor.info(value),
										`bsts-custom-${key}-var-container`
									);
									break;
								case "warning":
									core.accentColor.apply(
										core.accentColor.warning(value),
										`bsts-custom-${key}-var-container`
									);
									break;
								case "secondary":
									core.accentColor.apply(
										core.accentColor.secondary(value),
										`bsts-custom-${key}-var-container`
									);
									break;
								case "light":
									core.accentColor.apply(
										core.accentColor.light(value),
										`bsts-custom-${key}-var-container`
									);
									break;
								case "dark":
									core.accentColor.apply(
										core.accentColor.dark(value),
										`bsts-custom-${key}-var-container`
									);
									break;
								case "body":
									core.accentColor.apply(
										core.accentColor.body(value),
										`bsts-custom-${key}-var-container`
									);
									break;
							}
						};

						return [
							"primary",
							"secondary",
							"success",
							"danger",
							"warning",
							"info",
							"light",
							"dark",
							"body",
						].map((i) => {
							const id = core.UUID();
							return new h.div([
								new b.label({ id: id }, core.uppercaseFirst(`${i} color`)),
								new h.div(
									{
										rounded: true,
										border: true,
										bgColor: i as core.bsType.bgColor,
										style: { height: "2.5rem", width: "11rem" },
									},

									new b.input({
										id: id,
										type: "color",
										width: 100,
										height: 100,
										opacity: 0,
										data: { key: i },
										on: {
											click: onclick,
											input: oninput,
										},
									})
								),
							]);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Color pallet"),
				new e.code({
					db: getContentCode(db),
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 2,
						class: "color-pallet-box",
					},
					extention: [
						{
							name: "COLORPALLET",
							rename: "COLORPALLETDB",
							output: COLORPALLETDB,
						},
						{
							name: "REMOVECUSTOMVARCONTAINER",
							rename: "removeCustomVarContainer",
							output: removeCustomVarContainer,
						},
						{
							name: "REMOVEALLCUSTOMVAR",
							rename: "removeAllCustomVar",
							output: removeAllCustomVar,
						},
					],
					output: () => {
						const colorPalletItem = (value?: colorPalletItem) => {
							if (value) {
								return new h.div(
									{
										class: "color-pallet",
										paddingStart: 3,
										paddingEnd: 1,
										display: "flex",
										flex: value ? undefined : "wrap",
										justifyContent: "center",
									},
									[
										new h.div({ style: { backgroundColor: value.primary } }),
										new h.div({ style: { backgroundColor: value.secondary } }),
										new h.div({ style: { backgroundColor: value.success } }),
										new h.div({ style: { backgroundColor: value.danger } }),
										new h.div({ style: { backgroundColor: value.warning } }),
										new h.div({ style: { backgroundColor: value.info } }),
										new h.div({ style: { backgroundColor: value.light } }),
										new h.div({ style: { backgroundColor: value.dark } }),
									]
								);
							} else {
								return new h.div(
									{
										class: "color-pallet",
										paddingStart: 3,
										paddingEnd: 1,
										display: "flex",
										justifyContent: "center",
									},
									[
										new h.div({ bgColor: "primary" }),
										new h.div({ bgColor: "secondary" }),
										new h.div({ bgColor: "success" }),
										new h.div({ bgColor: "danger" }),
										new h.div({ bgColor: "warning" }),
										new h.div({ bgColor: "info" }),
										new h.div({ bgColor: "light" }),
										new h.div({ bgColor: "dark" }),
									]
								);
							}
						};

						const colorPalletChange = (event: Event) => {
							const target = event.currentTarget as Element;
							const dataValue = target.getAttribute("data-value");
							if (dataValue) {
								const value: colorPalletItem = JSON.parse(
									dataValue
								) as colorPalletItem;
								if (value) {
									const dark = "#000";
									const light = "#fff";

									const css = [
										core.accentColor.primary(value.primary, light, dark),
										core.accentColor.success(value.success, light, dark),
										core.accentColor.danger(value.danger, light, dark),
										core.accentColor.info(value.info, light, dark),
										core.accentColor.warning(value.warning, light, dark),
										core.accentColor.secondary(value.secondary, light, dark),
										core.accentColor.light(value.light, light, dark),
										core.accentColor.dark(value.dark, light, dark),
										core.accentColor.body("#ffffff"),
									];

									//remove all custom var container
									removeAllCustomVar();

									//add bsts-custom-var-container to head
									core.accentColor.apply(css.join("\n"));

									//update dropdown label
									const btnPallet = target.closest(".dropdown-menu")
										?.previousSibling as Element;
									core.replaceChild(btnPallet, colorPalletItem(value));

									//update selected value for remember my pallet
									btnPallet.setAttribute("data-value", dataValue);
								}
							}
						};

						return [
							new b.dropdown.container([
								new b.dropdown.button(
									{
										id: "btn-color-pallet",
										display: "flex",
										alignItem: "center",
									},
									colorPalletItem()
								),
								new b.dropdown.menu(
									new h.div(
										{
											display: "grid",
											gap: 1,
											gridTemplateColumns: "1fr 1fr",
											overflowX: "auto",
										},
										COLORPALLETDB().map(
											(i: {
												light: string;
												dark: string;
												primary: string;
												secondary: string;
												info: string;
												success: string;
												warning: string;
												danger: string;
											}) => {
												return new b.dropdown.item(
													{
														paddingX: 1,
														data: {
															value: JSON.stringify(i),
														},
														on: {
															click: colorPalletChange,
														},
													},
													colorPalletItem(i)
												);
											}
										)
									)
								),
							]),
							new b.button(
								{
									color: "success",
									on: {
										click: () => {
											const btn = document.getElementById("btn-color-pallet");
											if (btn) {
												const value = btn.getAttribute("data-value");

												if (value) {
													//its up to you to handle the color pallet
													cookie.set("current_color", value);

													b.toast.show(
														b.toast.create({
															color: "primary",
															title: document.title,
															elem: "Current color pallet has been saved",
														})
													);
												} else {
													b.toast.show(
														b.toast.create({
															color: "danger",
															title: document.title,
															elem: "Please choose color pallet to save",
														})
													);
												}
											}
										},
									},
								},
								new b.caption({ icon: "save" }, "Remember this pallet")
							),
							new b.button(
								{
									color: "danger",
									on: {
										click: () => {
											const btn = document.getElementById("btn-color-pallet");

											if (btn) {
												btn.setAttribute("data-value", "");
												btn.innerText = "Choose color pallet";

												//its up to you to handle the color pallet
												cookie.set("current_color", "");

												removeAllCustomVar();
											}
										},
									},
								},
								new b.caption({ icon: "eraser-fill" }, "Reset")
							),
						];
					},
				}),
			]),

			//----------------------
		];
	},
};

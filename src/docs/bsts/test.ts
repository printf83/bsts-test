import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import { I, b, core, h } from "@printf83/bsts";

type colorPalletItem = {
	light: string;
	dark: string;
	primary: string;
	secondary: string;
	info: string;
	success: string;
	warning: string;
	danger: string;
};

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

export const test: IContent = {
	title: "Testing",
	description: "This is testing page to test our library one by one",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

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
										bgColor: "primary",
									},

									new b.input({
										type: "color",
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

												core.accentColor.apply(css.join("\n"));
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
										bgColor: "body",
									},

									new b.input({
										type: "color",
										on: {
											click: (e) => {
												const target = e.currentTarget as HTMLInputElement;
												const bsBodyBg =
													core.getCSSVarHexColor("--bs-body-bg");
												target.value = bsBodyBg ? bsBodyBg : "#ffffff";
											},
											input: (e) => {
												let target = e.target as HTMLInputElement;
												let value = target.value;
												core.accentColor.apply(
													core.accentColor.body(value),
													"bsts-custom-body-var-container"
												);
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
				new e.title("Color pallet"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 2 },
					extention: [
						{
							name: "COLORPALLET",
							rename: "COLORPALLETDB",
							output: COLORPALLETDB,
						},
					],
					output: () => {
						const colorPalletItem = (value: colorPalletItem) => {
							return new h.div(
								{ class: "color-pallet", paddingStart: 3, paddingEnd: 1 },
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
									];

									core.accentColor.apply(css.join("\n"));

									const btnPallet = target.closest(".dropdown-menu")
										?.previousSibling as Element;
									core.replaceChild(btnPallet, colorPalletItem(value));
								}
							}
						};

						return new b.dropdown.container([
							new b.dropdown.button(
								{
									display: "flex",
									alignItem: "center",
								},
								"Choose color pallet"
							),
							new b.dropdown.menu(
								// new h.div(
								// 	{
								// 		display: "grid",
								// 		gap: 1,
								// 		gridTemplateColumns: "1fr 1fr 1fr",
								// 		overflowX: "auto",
								// 	},
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
								// )
							),
						]);
					},
				}),
			]),

			//----------------------

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

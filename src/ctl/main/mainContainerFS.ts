import { Icon } from "../../../node_modules/@printf83/bsts/build/types/bootstrap/icon.js";

import { b, core, h } from "@printf83/bsts";
import { ICodePen, codeBeautify, codePen, getLibBaseOnSource } from "../example/_fn.js";
import { BOOTSWATCHDB, CURRENTVERSION, DEFAULTDOCUMENT, THEMEDB, menuFS } from "./_db.js";
import { setupContentDocument } from "./content.js";
import { highlightMenu } from "./menu.js";
import { failCopyCode, successCopyCode } from "../example/code.js";
import { changeBootswatch, getSavedBootswatch } from "./bootswatch.js";
import { getSavedTheme, highlghtTheme } from "./theme.js";

const BSTSCDN = `https://cdn.jsdelivr.net/npm/@printf83/bsts@${CURRENTVERSION}/+esm`;
const BSCDNJS = ["https://cdn.jsdelivr.net/npm/chart.js@4.3/dist/chart.umd.min.js"];
const BSCDNCSS = [
	"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11/font/bootstrap-icons.css",
	"https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css",
];

function itemCodeCopy(e: Event) {
	e.stopPropagation();
	e.stopImmediatePropagation();

	const target = e.currentTarget as Element;
	const iconElem = target.getElementsByTagName("i")[0] as Element;
	const container = target.closest(".modal");

	if (container) {
		const text = container.getElementsByTagName("pre")[0]?.innerText;
		if (text) {
			navigator.clipboard.writeText(text).then(
				() => {
					successCopyCode(iconElem, "light");
				},
				() => {
					failCopyCode(iconElem, "warning");
				}
			);
		} else {
			failCopyCode(iconElem, "warning");
		}
	} else {
		failCopyCode(iconElem, "warning");
	}

	return false;
}

const navigateToDoc = (event: Event) => {
	const target = event.currentTarget as Element;
	const docId = target.getAttribute("data-value");
	if (docId) {
		setupContentDocument(docId);
		highlightMenu(docId);
	}
};

export const mainContainerFS = () => {
	const currentBootswatch = getSavedBootswatch();
	const currentTheme = getSavedTheme();

	let currentThemeIcon: Icon | undefined;
	THEMEDB.forEach((i, ix) => {
		if (i.value === currentTheme) {
			currentThemeIcon = THEMEDB[ix]?.icon;
		}
	});

	return new h.div({ id: "bs-main-fs-root", display: "none", position: "relative" }, [
		new h.div(
			{
				id: "bs-main-fs-toggle",
				position: "fixed",
				end: 0,
				bottom: 0,
				marginEnd: 4,
				marginBottom: 4,
				style: { zIndex: "5000" },
			},
			new b.button(
				{
					target: "#bs-main-fs-modal",
					toggle: "modal",
					rounded: "circle",
					shadow: true,
					weight: "lg",
					lineHeight: 1,
					padding: 3,
					border: true,
					borderWidth: 3,
					borderColor: "primary-subtle",
				},
				new b.icon({ id: "list", fontWeight: "bolder" })
			)
		),
		new b.modal.container(
			{
				id: "bs-main-fs-modal",
				weight: "lg",
				scrollable: true,
				fullscreen: "md",
			},
			[
				new b.modal.header(
					{
						close: false,
						display: "flex",
						flex: ["column", "md-row"],
						justifyContent: ["md-between"],
						alignContent: "center",
						bgColor: "primary",
						bgGradient: true,
						borderNone: "bottom",
						shadow: true,
						zIndex: 3,
						class: "bs-main-navbar",
					},
					[
						new h.div(
							{
								flex: "fill",
							},
							new h.div(
								{
									display: "flex",
									flex: "fill",
									justifyContent: ["between", "md-start"],
								},
								[
									new b.button(
										{
											id: "btn-last-non-fs-page",
											data: { docId: "docs/gettingstarted/home" },

											color: "transparent",

											on: {
												click: (event) => {
													const target = event.currentTarget as Element;
													const docId = target.getAttribute("data-docId");
													if (docId) {
														setupContentDocument(docId);
														highlightMenu(docId);
													} else {
														setupContentDocument(DEFAULTDOCUMENT);
														highlightMenu(DEFAULTDOCUMENT);
													}
												},
											},
										},
										new b.caption({ icon: "chevron-left" }, "Back")
									),
									new b.dropdown.container([
										new b.dropdown.button(
											{
												color: "transparent",
												id: "bs-main-fs-title",
											},
											"Button"
										),
										new b.dropdown.menu(
											{ customStyle: 1, id: "bs-main-fs-menu" },
											new h.div(
												{
													display: "grid",
													gridTemplateColumns: "1fr 1fr",
													gap: 1,
												},
												menuFS.map((i) => {
													return new b.dropdown.item(
														{
															data: { value: i.value },
															on: { click: navigateToDoc },
														},
														i.label
													);
												})
											)
										),
									]),
								]
							)
						),
						new h.div(
							{ flex: "fill" },
							new h.div({ display: "flex", justifyContent: ["between", "md-end"] }, [
								new h.div([
									new b.dropdown.container([
										new b.dropdown.button(
											{
												class: "bs-bootswatch",
												label: "Bootswatch theme",
												color: "transparent",
											},
											[
												new h.span(
													{ marginX: ["lg-2", 0] },
													new b.icon("palette2")
												),
												new h.span(
													{
														class: "bs-bootswatch-label",
														display: ["lg-inline", "none"],
													},
													`${core.uppercaseFirst(
														currentBootswatch
															? currentBootswatch
															: "Default"
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
												},
												BOOTSWATCHDB.map((i) => {
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
									new b.dropdown.container([
										new b.dropdown.button(
											{
												color: "transparent",

												class: "bs-theme",
												display: "flex",
												alignItem: "center",
												label: "Toggle theme",
											},
											new b.caption(
												{
													icon: currentThemeIcon,
													labelDisplay: "none",
												},
												"Toggle theme"
											)
										),
										new b.dropdown.menu(
											{ positionView: "end", customStyle: 1 },
											THEMEDB.map((i) => {
												return new b.dropdown.item(
													{
														on: {
															click: (_e) => {
																highlghtTheme(i.value, i.icon);
															},
														},
														active: i.value === currentTheme,
														data: { value: i.value },
													},
													new b.caption({ icon: i.icon }, i.label)
												);
											})
										),
									]),
								]),

								new h.div([
									new b.button(
										{
											color: "transparent",
											on: { click: itemCodeCopy },
										},
										new b.icon("clipboard")
									),
									new b.button(
										{
											color: "transparent",

											title: "Edit on CodePen",
											on: {
												click: (event) => {
													const target = event.currentTarget as Element;
													const container = target.closest(
														".modal"
													) as Element;

													const strSource =
														container.getElementsByTagName("pre")[0]
															?.innerText;

													codePen(
														generateCodePenData(
															getLibBaseOnSource(strSource),
															strSource!
														)
													);
												},
											},
										},
										new b.icon("lightning-charge-fill")
									),
									new b.button(
										{
											color: "transparent",

											toggle: "modal",
											target: "#bs-main-fs-modal",
										},
										new b.icon("x-lg")
									),
								]),
							])
						),
					]
				),
				new b.modal.body({ zIndex: 0 }, [new h.div({ id: "bs-main-fs-code", rounded: 3 })]),
			]
		),
		new h.div({ id: "bs-main-fs", class: "bs-main-fs" }),
	]);
};

const generateCodePenData = (strLib: string, strCode: string) => {
	let strCodeResult = "";

	if (strCode !== "") {
		strCodeResult =
			"import { " +
			strLib +
			' } from "' +
			BSTSCDN +
			'";\n' +
			"const SOURCE = " +
			strCode +
			';\ncore.documentReady(() => {\ncore.replaceChild(document.getElementById("root"), SOURCE());\n});';
	}

	const result = {
		title: "Bootstrap TS",
		description: "Create bootstrap using TS/JS",
		private: false,
		tags: ["bsts", "Bootstrap TS", "@printf83/bsts"],
		editors: "001",
		layout: "top",

		js_external: strCodeResult.indexOf("Chart(") > -1 ? BSCDNJS : undefined,
		css_external: BSCDNCSS,
		head: codeBeautify(
			"html",
			`<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">`
		),

		html: codeBeautify("html", `<div id="root"></div>`),

		js: codeBeautify("js", strCodeResult),
	} satisfies ICodePen;

	return result;
};

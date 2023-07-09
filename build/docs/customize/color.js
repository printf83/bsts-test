"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
const hexToRGB = (hex) => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
};
const RGBToHex = (r, g, b) => {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};
const setCSSVar = (variableName, value) => {
    let root = document.querySelector(":root");
    if (root) {
        if (variableName.endsWith("-rgb") && value.startsWith("#")) {
            let v = hexToRGB(value);
            if (v) {
                root.style.setProperty(variableName, `${v.r},${v.g},${v.b}`);
            }
        }
        else {
            root.style.setProperty(variableName, value);
        }
    }
};
const getCSSVar = (variableName) => {
    let root = document.querySelector(":root");
    if (root) {
        let value = getComputedStyle(root).getPropertyValue(variableName);
        if (value.startsWith("#")) {
            //console.log(`1. ${variableName}:${value}`);
            return value;
        }
        else {
            let v = value.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
            let result = RGBToHex(parseInt(v[0]), parseInt(v[1]), parseInt(v[2]));
            //console.log(`2. ${variableName}:${result}`);
            return result;
        }
    }
    else {
        return "#ffffff";
    }
};
const colorpickerBg = (variableName) => {
    let v = Array.isArray(variableName) ? variableName.join(",") : variableName;
    let firstVariableName = Array.isArray(variableName) ? variableName[0] : variableName;
    let value = getCSSVar(firstVariableName);
    return new bsts_1.h.div({ class: "swatch", rounded: true, border: true, style: { backgroundColor: value } }, [
        new bsts_1.b.input({
            type: "color",
            value: value,
            on: {
                input: (e) => {
                    let target = e.target;
                    let value = target.value;
                    let bsVar = v; //target.getAttribute("data-bs-var");
                    if (bsVar) {
                        let varList = bsVar.split(",");
                        varList.forEach((i) => {
                            let container = target.closest(".swatch");
                            if (container) {
                                container.style.setProperty("background-color", value);
                                setCSSVar(i, value);
                            }
                        });
                    }
                },
            },
        }),
    ]);
};
const colorpickerBorder = (variableName) => {
    let v = Array.isArray(variableName) ? variableName.join(",") : variableName;
    let firstVariableName = Array.isArray(variableName) ? variableName[0] : variableName;
    let value = getCSSVar(firstVariableName);
    return new bsts_1.h.div({ class: "swatch", rounded: true, border: true, borderWidth: 5, style: { borderColor: `${value} !important` } }, [
        new bsts_1.b.input({
            type: "color",
            value: value,
            on: {
                input: (e) => {
                    let target = e.target;
                    let value = target.value;
                    let bsVar = v; //target.getAttribute("data-bs-var");
                    if (bsVar) {
                        let varList = bsVar.split(",");
                        varList.forEach((i) => {
                            let container = target.closest(".swatch");
                            if (container) {
                                container.style.setProperty("border-color", value, "important");
                                setCSSVar(i, value);
                            }
                        });
                    }
                },
            },
        }),
    ]);
};
const colorpickerText = (variableName) => {
    let v = Array.isArray(variableName) ? variableName.join(",") : variableName;
    let firstVariableName = Array.isArray(variableName) ? variableName[0] : variableName;
    let value = getCSSVar(firstVariableName);
    return new bsts_1.h.div({ class: "swatch", position: "relative", style: { color: `${value}` } }, [
        new bsts_1.h.span({
            h: 4,
            fontWeight: "bolder",
            position: "absolute",
            width: 100,
            zIndex: 0,
            textAlign: "center",
            marginTop: 2,
            paddingTop: 1,
        }, "Text"),
        new bsts_1.b.input({
            type: "color",
            zIndex: 1,
            value: value,
            on: {
                input: (e) => {
                    let target = e.target;
                    let value = target.value;
                    let bsVar = v; //target.getAttribute("data-bs-var");
                    if (bsVar) {
                        let varList = bsVar.split(",");
                        varList.forEach((i) => {
                            let container = target.closest(".swatch");
                            if (container) {
                                container.style.setProperty("color", value);
                                setCSSVar(i, value);
                            }
                        });
                    }
                },
            },
        }),
    ]);
};
exports.color = {
    title: "Color",
    description: "Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.",
    item: () => {
        return [
            new e.section([
                new e.title("Colors"),
                new e.text("Bootstrap’s color palette has continued to expand and become more nuanced in v5.3.0. Bootstrap’ve added new variables for {{secondary}} and {{tertiary}} text and background colors, plus{{ {color}-bg-subtle}},{{ {color}-border-subtle}}, and{{ {color}-text-emphasis}} for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on {{:root}} and are adapted for our new dark color mode while our original theme colors remain unchanged."),
                new e.text("Colors ending in {{-rgb}} provide the {{red}}, {{green}}, {{blue}} values for use in {{rgb()}} and {{rgba()}} color modes. For example, {{rgba(var(--bs-secondary-bg-rgb), .5)}}."),
                new e.alert({ color: "warning", callout: true }, "{{b::Heads up!}} There’s some potential confusion with our new secondary and tertiary colors, and our existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6."),
                new e.table({
                    responsiveAttr: "bs-title-name",
                    responsiveCol: "15ch auto",
                    responsiveColXs: "auto",
                }, [
                    new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                        new bsts_1.b.table.th({ scope: "col" }, "Description"),
                        new bsts_1.b.table.th({ scope: "col" }, "Swatch"),
                        new bsts_1.b.table.th({ scope: "col", style: { minWidth: "15rem" } }, "Variables"),
                    ])),
                    new bsts_1.b.table.tbody([
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 2, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Body — }}Default foreground (color) and background, including components.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-body-color", "--bs-body-color-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-body-color}}{{br}}{{--bs-body-color-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Body — }}Default foreground (color) and background, including components.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-body-bg", "--bs-body-bg-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-body-bg}}{{br}}{{--bs-body-bg-rgb}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 2, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Secondary — }}Use the {{color}} option for lighter text. Use the {{bg}} option for dividers and to indicate disabled component states.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-secondary-color", "--bs-secondary-color-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-secondary-color}}{{br}}{{--bs-secondary-color-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Secondary — }}Use the {{color}} option for lighter text. Use the {{bg}} option for dividers and to indicate disabled component states.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-secondary-bg", "--bs-secondary-bg-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-secondary-bg}}{{br}}{{--bs-secondary-bg-rgb}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 2, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Tertiary — }}Use the {{color}} option for even lighter text. Use the {{bg}} option to style backgrounds for hover states, accents, and wells.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-tertiary-color", "--bs-tertiary-color-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-tertiary-color}}{{br}}{{--bs-tertiary-color-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Tertiary — }}Use the {{color}} option for even lighter text. Use the {{bg}} option to style backgrounds for hover states, accents, and wells.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-tertiary-bg", "--bs-tertiary-bg-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-tertiary-bg}}{{br}}{{--bs-tertiary-bg-rgb}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Emphasis — }}For higher contrast text. Not applicable for backgrounds.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-emphasis-color", "--bs-emphasis-color-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-emphasis-color}}{{br}}{{--bs-emphasis-color-rgb}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Border — }}For component borders, dividers, and rules. Use {{--bs-border-color-translucent}} to blend with backgrounds with an {{rgba()}} value.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-border-color", "--bs-border-color-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-border-color}}{{br}}{{--bs-border-color-rgb}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 4, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-primary", "--bs-primary-rgb", "--bs-dropdown-link-active-bg"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-primary}}{{br}}{{--bs-primary-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg("--bs-primary-bg-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-primary-bg-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBorder("--bs-primary-border-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-primary-border-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerText("--bs-primary-text-emphasis")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-primary-text-emphasis}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 4, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Success — }}Theme color used for positive or successful actions and information.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-success", "--bs-success-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-success}}{{br}}{{--bs-success-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Success — }}Theme color used for positive or successful actions and information.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg("--bs-success-bg-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-success-bg-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Success — }}Theme color used for positive or successful actions and information.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBorder("--bs-success-border-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-success-border-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Success — }}Theme color used for positive or successful actions and information.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerText("--bs-success-text-emphasis")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-success-text-emphasis}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 4, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Danger — }}Theme color used for errors and dangerous actions.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-danger", "--bs-danger-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-danger}}{{br}}{{--bs-danger-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Danger — }}Theme color used for errors and dangerous actions.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg("--bs-danger-bg-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-danger-bg-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Danger — }}Theme color used for errors and dangerous actions.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBorder("--bs-danger-border-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-danger-border-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Danger — }}Theme color used for errors and dangerous actions.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerText("--bs-danger-text-emphasis")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-danger-text-emphasis}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 4, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Warning — }}Theme color used for non-destructive warning messages.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-warning", "--bs-warning-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-warning}}{{br}}{{--bs-warning-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Warning — }}Theme color used for non-destructive warning messages.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg("--bs-warning-bg-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-warning-bg-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Warning — }}Theme color used for non-destructive warning messages.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBorder("--bs-warning-border-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-warning-border-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Warning — }}Theme color used for non-destructive warning messages.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerText("--bs-warning-text-emphasis")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-warning-text-emphasis}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 4, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Info — }}Theme color used for neutral and informative content.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-info", "--bs-info-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-info}}{{br}}{{--bs-info-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Info — }}Theme color used for neutral and informative content.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg("--bs-info-bg-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-info-bg-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Info — }}Theme color used for neutral and informative content.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBorder("--bs-info-border-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-info-border-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Info — }}Theme color used for neutral and informative content.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerText("--bs-info-text-emphasis")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-info-text-emphasis}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 4, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Light — }}Additional theme option for less contrasting colors.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-light", "--bs-light-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-light}}{{br}}{{--bs-light-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Light — }}Additional theme option for less contrasting colors.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg("--bs-light-bg-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-light-bg-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Light — }}Additional theme option for less contrasting colors.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBorder("--bs-light-border-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-light-border-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Light — }}Additional theme option for less contrasting colors.")),
                            new bsts_1.b.table.td(colorpickerText("--bs-light-text-emphasis")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-light-text-emphasis}}"])),
                        ]),
                        //----------------------
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({ rowspan: 4, responsiveAttr: "bs-title-name", responsiveTitle: "Description" }, new bsts_1.h.div("{{b::Dark — }}Additional theme option for higher contrasting colors.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg(["--bs-dark", "--bs-dark-rgb"])),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-dark}}{{br}}{{--bs-dark-rgb}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Dark — }}Additional theme option for higher contrasting colors.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBg("--bs-dark-bg-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-dark-bg-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Dark — }}Additional theme option for higher contrasting colors.")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" }, colorpickerBorder("--bs-dark-border-subtle")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variables" }, new bsts_1.h.div(["{{--bs-dark-border-subtle}}"])),
                        ]),
                        new bsts_1.b.table.tr([
                            new bsts_1.b.table.td({
                                responsiveAttr: "bs-title-name",
                                responsiveTitle: "Description",
                                display: ["grid", "md-none"],
                            }, new bsts_1.h.div("{{b::Dark — }}Additional theme option for higher contrasting colors.")),
                            new bsts_1.b.table.td(colorpickerText("--bs-dark-text-emphasis")),
                            new bsts_1.b.table.td({ responsiveAttr: "bs-title-name", responsiveTitle: "Variable" }, new bsts_1.h.div(["{{--bs-dark-text-emphasis}}"])),
                        ]),
                    ]),
                ]),
            ]),
            //----------------------
            new e.section([
                new e.title("Using the new colors"),
                new e.text("These new colors are accessible via CSS variables and utility classes—like {{--bs-primary-bg-subtle}} and {{.bg-primary-subtle}}—allowing you to compose your own CSS rules with the variables, or to quickly apply styles via classes. The utilities are built with the color’s associated CSS variables, and since Bootstrap customize those CSS variables for dark mode, they are also adaptive to color mode by default."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({
                            padding: 3,
                            textColor: "primary-emphasis",
                            bgColor: "primary-subtle",
                            border: true,
                            borderColor: "primary-subtle",
                            roundedSize: 3,
                        }, "Example element with utilities");
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Theme colors"),
                new e.text("Bootstrap use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s {{scss/_variables.scss}} file."),
                new e.item(new bsts_1.h.div({ container: "fluid", margin: 0, padding: 0 }, new bsts_1.h.div({ row: true, gutter: 3 }, ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => new bsts_1.h.div({
                    col: [12, "sm-6", "md-4"],
                }, new bsts_1.h.div({
                    padding: 3,
                    textBgColor: i,
                    rounded: true,
                }, bsts_1.core.uppercaseFirst(i))))))),
                new e.text("All these colors are available as a Sass map, {{$theme-colors}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$theme-colors: (
						"primary":    $primary,
						"secondary":  $secondary,
						"success":    $success,
						"info":       $info,
						"warning":    $warning,
						"danger":     $danger,
						"light":      $light,
						"dark":       $dark
						);
					`,
                }),
                new e.text("Check out our Sass maps and loops docs for how to modify these colors."),
            ]),
            //----------------------
            new e.section([
                new e.title("All colors"),
                new e.text("All Bootstrap colors are available as Sass variables and a Sass map in {{scss/_variables.scss}} file. To avoid increased file sizes, Bootstrap don’t create text or background color classes for each of these variables. Instead, Bootstrap choose a subset of these colors for a {{https://getbootstrap.com/docs/5.3/customize/color/#theme-colors::theme palette}}."),
                new e.text("Be sure to monitor contrast ratios as you customize colors. As shown below, Bootstrap added three contrast ratios to each of the main colors—one for the swatch’s current colors, one for against white, and one for against black."),
                new e.alert({ color: "danger", callout: true }, [
                    new bsts_1.b.alert.header(5, "Unsuppoterd in {{bsts}}"),
                    "This feature will supported when Bootstrap make it opt-in by default or available in CDN.",
                ]),
                new e.text("If you like to use this feature using {{bsts}}, you can manually set it by class property:"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ container: "fluid", margin: 0, padding: 0 }, new bsts_1.h.div({ row: true, gutter: 3 }, [
                            "blue-100",
                            "blue-200",
                            "blue-300",
                            "blue-400",
                            "blue-500",
                            "blue-600",
                            "blue-700",
                            "blue-800",
                            "blue-900",
                        ].map((i) => new bsts_1.h.div({
                            col: [12, "sm-6", "md-4"],
                        }, new bsts_1.h.div({
                            padding: 3,
                            class: i,
                            rounded: true,
                        }, `$${i}`)))));
                    },
                }),
            ]),
        ];
    },
};

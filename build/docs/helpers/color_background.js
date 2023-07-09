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
exports.color_background = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.color_background = {
    title: "Color and background",
    description: "Set a background color with contrasting foreground color.",
    item: () => {
        return [
            new e.section([
                new e.title("Overview"),
                new e.text("Color and background helpers combine the power of Bootstrap {{nav:docs/utilities/colors::.text-* utilities}} and {{nav:docs/utilities/background::.bg-* utilities}} in one class. Using Bootstrap Sass {{color-contrast()}} function, Bootstrap automatically determine a contrasting {{color}} for a particular {{background-color}}."),
                new e.alert({ color: "warning", callout: true }, "{{b::Heads up! }}There’s currently no support for a CSS-native {{color-contrast}} function, so Bootstrap use Bootstrap own via Sass. This means that customizing Bootstrap theme colors via CSS variables may cause color contrast issues with these utilities."),
                new e.code({
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => new bsts_1.h.div({ textBgColor: i, padding: 3 }, `${bsts_1.core.uppercaseFirst(i)} with contrasting color`));
                    },
                }),
                new e.alert({ color: "info", callout: true }, "{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."),
            ]),
            //----------------------
            new e.section([
                new e.title("With components"),
                new e.text("Use them in place of combined {{.text-*}} and {{.bg-*}} classes, like on {{nav:docs/components/badge#background-colors::badges}}:"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            new bsts_1.b.badge({ textBgColor: "primary" }, "Primary"),
                            new bsts_1.b.badge({ textBgColor: "info" }, "Info"),
                        ];
                    },
                }),
                new e.text("Or on {{nav:docs/components/card#background_and_color::cards}}:"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 4 },
                    output: () => {
                        const item = (textBgColor) => new bsts_1.b.card.container({ textBgColor: textBgColor, style: { width: "18rem" } }, [
                            new bsts_1.b.card.header("Header"),
                            new bsts_1.b.card.body(new bsts_1.b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content.")),
                        ]);
                        return [item("primary"), item("info")];
                    },
                }),
            ]),
        ];
    },
};

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
exports.sizing = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.sizing = {
    title: "Sizing",
    description: "Easily make an element as wide or as tall with Bootstrap width and height utilities.",
    item: () => {
        return [
            new e.section([
                new e.title("Relative to the parent"),
                new e.text("Width and height utilities are generated from the utility API in {{_utilities.scss}}. Includes support for {{25%}}, {{50%}}, {{75%}}, {{100%}}, and auto by default. Modify those values as you need to generate different utilities here."),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return [25, 50, 75, 100, "auto"].map((i) => new bsts_1.h.div({ width: i, padding: 3 }, `Width ${i}${i !== "auto" ? "%" : ""}`));
                    },
                }),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return new bsts_1.h.div({ style: { height: "100px" } }, [25, 50, 75, 100, "auto"].map((i) => new bsts_1.h.div({
                            height: i,
                            display: "inline-block",
                            marginEnd: 1,
                            style: { width: "120px" },
                        }, `Height ${i}${i !== "auto" ? "%" : ""}`)));
                    },
                }),
                new e.text("You can also use {{max-width: 100%;}} and {{max-height: 100%;}} utilities as needed."),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return new bsts_1.h.div({ style: { width: "50%", height: "100px" } }, new bsts_1.h.div({ maxWidth: 100, style: { width: "200%" } }, "Max-width 100%"));
                    },
                }),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return new bsts_1.h.div({ style: { height: "100px" } }, new bsts_1.h.div({ maxHeight: 100, style: { width: "100px", height: "200px" } }, "Max-height 100%"));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Relative to the viewport"),
                new e.text("You can also use utilities to set the width and height relative to the viewport."),
                new e.code({
                    outputAttr: { class: "flex-box", overflow: "auto", style: { maxHeight: "200px" } },
                    output: () => {
                        return [
                            new bsts_1.h.div({ minViewWidth: 100 }, "Min-width 100vw"),
                            new bsts_1.h.div({ minViewHeight: 100 }, "Min-height 100vh"),
                            new bsts_1.h.div({ viewWidth: 100 }, "Width 100vw"),
                            new bsts_1.h.div({ viewHeight: 100 }, "Height 100vh"),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Sass")]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities API"),
                new e.text("Sizing utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"width": (
						property: width,
						class: w,
						values: (
							25: 25%,
							50: 50%,
							75: 75%,
							100: 100%,
							auto: auto
						)
						),
						"max-width": (
						property: max-width,
						class: mw,
						values: (100: 100%)
						),
						"viewport-width": (
						property: width,
						class: vw,
						values: (100: 100vw)
						),
						"min-viewport-width": (
						property: min-width,
						class: min-vw,
						values: (100: 100vw)
						),
						"height": (
						property: height,
						class: h,
						values: (
							25: 25%,
							50: 50%,
							75: 75%,
							100: 100%,
							auto: auto
						)
						),
						"max-height": (
						property: max-height,
						class: mh,
						values: (100: 100%)
						),
						"viewport-height": (
						property: height,
						class: vh,
						values: (100: 100vh)
						),
						"min-viewport-height": (
						property: min-height,
						class: min-vh,
						values: (100: 100vh)
						),
					`,
                }),
            ]),
        ];
    },
};

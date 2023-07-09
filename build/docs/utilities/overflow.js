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
exports.overflow = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.overflow = {
    title: "Overflow",
    description: "Use these shorthand utilities for quickly configuring how content overflows an element.",
    item: () => {
        return [
            new e.section([
                new e.title("Overflow"),
                new e.text("Adjust the {{overflow}} property on the fly with four default values and classes. These classes are not responsive by default."),
                new e.code({
                    previewAttr: { overflow: "hidden" },
                    outputAttr: { display: ["md-flex", "grid"], gap: 2 },
                    output: () => {
                        return ["auto", "hidden", "visible", "scroll"].map((i, ix) => {
                            return new bsts_1.h.div({
                                overflow: i,
                                padding: 3,
                                bgColor: "body-tertiary",
                                style: { maxHeight: "100px", maxWidth: "260px" },
                            }, [
                                `This is an example of using {{.overflow-${i} }}on an element with set width and height dimensions. `,
                                i === "auto" ? "By design, this content will vertically scroll." : "",
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("{{overflow-x}}"),
                new e.text("Adjust the {{overflow-x}} property to affect the overflow of content horizontally."),
                new e.code({
                    previewAttr: { overflow: "hidden" },
                    outputAttr: { display: ["md-flex", "grid"], gap: 2 },
                    output: () => {
                        return ["auto", "hidden", "visible", "scroll"].map((i, ix) => {
                            return new bsts_1.h.div({
                                overflowX: i,
                                padding: 3,
                                bgColor: "body-tertiary",
                                style: { maxHeight: "100px", maxWidth: "200px", whiteSpace: "nowrap" },
                            }, [
                                `{{.overflow-x-${i} }}example{{br}}on an element with set width and height dimensions.`,
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("{{overflow-y}}"),
                new e.text("Adjust the {{overflow-y}} property to affect the overflow of content vertically."),
                new e.code({
                    previewAttr: { overflow: "hidden" },
                    outputAttr: { display: ["md-flex", "grid"], gap: 2 },
                    output: () => {
                        return ["auto", "hidden", "visible", "scroll"].map((i, ix) => {
                            return new bsts_1.h.div({
                                overflowY: i,
                                padding: 3,
                                bgColor: "body-tertiary",
                                style: { maxHeight: "100px", maxWidth: "200px" },
                            }, `This is an example of using {{.overflow-${i} }}on an element with set width and height dimensions.`);
                        });
                    },
                }),
                new e.text("Using Sass variables, you may customize the overflow utilities by changing the {{$overflows}} variable in {{_variables.scss}}."),
            ]),
            //----------------------
            new e.section([new e.title("Sass")]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities API"),
                new e.text("Overflow utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"overflow": (
						property: overflow,
						values: auto hidden visible scroll,
						),
						"overflow-x": (
						property: overflow-x,
						values: auto hidden visible scroll,
						),
						"overflow-y": (
						property: overflow-y,
						values: auto hidden visible scroll,
						),
					`,
                }),
            ]),
        ];
    },
};

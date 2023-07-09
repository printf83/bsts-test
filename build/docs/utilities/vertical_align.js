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
exports.vertical_align = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.vertical_align = {
    title: "Vertical alignment",
    description: "Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.",
    item: () => {
        return [
            new e.section([
                new e.text("Change the alignment of elements with the {{https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align::vertical-alignment}} utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements."),
                new e.text("Choose from {{.align-baseline}}, {{.align-top}}, {{.align-middle}}, {{.align-bottom}}, {{.align-text-bottom}}, and {{.align-text-top}} as needed."),
                new e.text("To vertically center non-inline content (like {{<div>}}s and more), use Bootstrap {{nav:docs/utilities/flex#align_items::flex box utilities}}."),
                new e.text("With inline elements:"),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.span({ verticalAlign: "baseline" }, "baseline"),
                            new bsts_1.h.span({ verticalAlign: "top" }, "top"),
                            new bsts_1.h.span({ verticalAlign: "middle" }, "middle"),
                            new bsts_1.h.span({ verticalAlign: "bottom" }, "bottom"),
                            new bsts_1.h.span({ verticalAlign: "text-top" }, "text-top"),
                            new bsts_1.h.span({ verticalAlign: "text-bottom" }, "text-bottom"),
                        ];
                    },
                }),
                new e.text("With table cells:"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.table({ style: { height: "100px" } }, new bsts_1.h.tbody(new bsts_1.h.tr([
                            new bsts_1.h.td({ verticalAlign: "baseline" }, "baseline"),
                            new bsts_1.h.td({ verticalAlign: "top" }, "top"),
                            new bsts_1.h.td({ verticalAlign: "middle" }, "middle"),
                            new bsts_1.h.td({ verticalAlign: "bottom" }, "bottom"),
                            new bsts_1.h.td({ verticalAlign: "text-top" }, "text-top"),
                            new bsts_1.h.td({ verticalAlign: "text-bottom" }, "text-bottom"),
                        ])));
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Sass")]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities API"),
                new e.text("Vertical align utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"align": (
						property: vertical-align,
						class: align,
						values: baseline top middle bottom text-bottom text-top
						),
					`,
                }),
            ]),
        ];
    },
};

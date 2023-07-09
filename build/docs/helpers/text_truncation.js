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
exports.text_truncation = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.text_truncation = {
    title: "Text truncation",
    description: "Truncate long strings of text with an ellipsis.",
    item: () => {
        return [
            new e.section([
                new e.text("For longer content, you can add a {{.text-truncate}} class to truncate the text with an ellipsis. {{b::Requires }}{{cb::display: inline-block}}{{b:: or }}{{cb::display: block}}{{b::.}}"),
                new e.code({
                    output: () => {
                        return [
                            //Block level
                            new bsts_1.h.div({ row: true }, new bsts_1.h.div({ col: 2, textTruncate: true }, "This text is quite long, and will be truncated once displayed.")),
                            //Inline level
                            new bsts_1.h.span({ display: "inline-block", textTruncate: true, style: { maxWidth: "150px" } }, "This text is quite long, and will be truncated once displayed."),
                        ];
                    },
                }),
            ]),
        ];
    },
};

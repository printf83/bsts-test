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
exports.vertical_rule = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.vertical_rule = {
    title: "Vertical rule",
    description: "Use the custom vertical rule helper to create vertical dividers like the {{<hr>}} element.",
    item: () => {
        return [
            new e.section([
                new e.title("How it works"),
                new e.text("Vertical rules are inspired by the {{<hr>}} element, allowing you to create vertical dividers in common layouts. They’re styled just like {{<hr>}} elements:"),
                new e.ul({
                    item: [
                        "They’re {{1px}} wide",
                        "They have {{min-height}} of {{1em}}",
                        "Their color is set via {{currentColor}} and {{opacity}}",
                    ],
                }),
                new e.text("Customize them with additional styles as needed."),
            ]),
            //----------------------
            new e.section([
                new e.title("Example"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.verticalrule();
                    },
                }),
                new e.text("Vertical rules scale their height in flex layouts:"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ display: "flex", style: { height: "200px" } }, new bsts_1.b.verticalrule());
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("With stack"),
                new e.text("They can also be used in {{nav:docs/helpers/stacks::stacks}}:"),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return new bsts_1.h.div({ hstack: true, gap: 3 }, [
                            new bsts_1.h.div({ padding: 2 }, "First item"),
                            new bsts_1.h.div({ padding: 2, marginStart: "auto" }, "Second item"),
                            new bsts_1.b.verticalrule(),
                            new bsts_1.h.div({ padding: 2 }, "Third item"),
                        ]);
                    },
                }),
            ]),
        ];
    },
};

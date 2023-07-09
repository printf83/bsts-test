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
exports.cssgrid = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.cssgrid = {
    title: "CSS Grid",
    description: "Learn how to enable, use, and customize Bootstrap alternate layout system built on CSS Grid with examples and code snippets.",
    item: () => {
        return [
            new e.section([
                new e.text("Bootstrap’s default grid system represents the culmination of over a decade of CSS layout techniques, tried and tested by millions of people. But, it was also created without many of the modern CSS features and techniques Bootstrap’re seeing in browsers like the new CSS Grid."),
                new e.alert({ color: "warning", callout: true }, "{{b::Heads up—Bootstrap CSS Grid system is experimental and opt-in as of v5.1.0!}} Bootstrap included it in Bootstrap documentation’s CSS to demonstrate it for you, but it’s disabled by default. Keep reading to learn how to enable it in your projects."),
                new e.alert({ color: "danger", callout: true }, [
                    new bsts_1.b.alert.header(5, "Unsuppoterd in {{bsts}}"),
                    "This feature will supported when Bootstrap make it opt-in by default or available in CDN.",
                ]),
                new e.text("If you like to use this feature using {{bsts}}, you can manually set it by class property:"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ class: "grid", textAlign: "center" }, [
                            new bsts_1.h.div({ class: "g-col-4" }, ".g-col-4"),
                            new bsts_1.h.div({ class: "g-col-4" }, ".g-col-4"),
                            new bsts_1.h.div({ class: "g-col-4" }, ".g-col-4"),
                        ]);
                    },
                }),
            ]),
        ];
    },
};

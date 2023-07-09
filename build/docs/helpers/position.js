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
exports.position = void 0;
const e = __importStar(require("../../ctl/example/_index.js"));
exports.position = {
    title: "Position",
    description: "Use these helpers for quickly configuring the position of an element.",
    item: () => {
        return [
            new e.section([
                new e.title("Fixed top"),
                new e.text("Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS."),
                new e.codepreview({
                    type: "js",
                    code: `new h.div({fixed: "top"}, "...");`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Fixed bottom"),
                new e.text("Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS."),
                new e.codepreview({
                    type: "js",
                    code: `new h.div({fixed: "bottom"}, "...");`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Sticky top"),
                new e.text("Position an element at the top of the viewport, from edge to edge, but only after you scroll past it."),
                new e.codepreview({
                    type: "js",
                    code: `new h.div({sticky: "top"}, "...");`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Responsive sticky top"),
                new e.text("Responsive variations also exist for .sticky-top utility."),
                new e.codepreview({
                    type: "js",
                    code: `
						new h.div({sticky: "sm-top"}, "Stick to the top on viewports sized SM (small) or wider");
						new h.div({sticky: "md-top"}, "Stick to the top on viewports sized MD (medium) or wider");
						new h.div({sticky: "lg-top"}, "Stick to the top on viewports sized LG (large) or wider");
						new h.div({sticky: "xl-top"}, "Stick to the top on viewports sized XL (extra-large) or wider");
						new h.div({sticky: "xxl-top"}, "Stick to the top on viewports sized XXL (extra-extra-large) or wider");
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Sticky bottom"),
                new e.text("Position an element at the bottom of the viewport, from edge to edge, but only after you scroll past it."),
                new e.codepreview({
                    type: "js",
                    code: `new h.div({sticky: "bottom"}, "...");`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Responsive sticky bottom"),
                new e.text("Responsive variations also exist for .sticky-bottom utility."),
                new e.codepreview({
                    type: "js",
                    code: `
						new h.div({sticky: "sm-bottom"}, "Stick to the bottom on viewports sized SM (small) or wider");
						new h.div({sticky: "md-bottom"}, "Stick to the bottom on viewports sized MD (medium) or wider");
						new h.div({sticky: "lg-bottom"}, "Stick to the bottom on viewports sized LG (large) or wider");
						new h.div({sticky: "xl-bottom"}, "Stick to the bottom on viewports sized XL (extra-large) or wider");
						new h.div({sticky: "xxl-bottom"}, "Stick to the bottom on viewports sized XXL (extra-extra-large) or wider");
					`,
                }),
            ]),
        ];
    },
};

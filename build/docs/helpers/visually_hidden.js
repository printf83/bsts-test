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
exports.visually_hidden = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.visually_hidden = {
    title: "Visually hidden",
    description: "Use these helpers to visually hide elements but keep them accessible to assistive technologies.",
    item: () => {
        return [
            new e.section([
                new e.text("Visually hide an element while still allowing it to be exposed to assistive technologies (such as screen readers) with {{.visually-hidden}}. Use {{.visually-hidden-focusable}} to visually hide an element by default, but to display it when it’s focused (e.g. by a keyboard-only user). {{.visually-hidden-focusable}} can also be applied to a container–thanks to {{:focus-within}}, the container will be displayed when any child element of the container receives focus."),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.h(2, { visually: "hidden" }, "Title for screen readers"),
                            new bsts_1.h.a({ visually: "hidden-focusable", href: "#content" }, "Skip to main content"),
                            new bsts_1.h.div({ visually: "hidden-focusable" }, [
                                "A container wiht a ",
                                new bsts_1.h.a({ href: "#" }, "focusable element"),
                                ".",
                            ]),
                        ];
                    },
                }),
                new e.text("Both {{visually-hidden}} and {{visually-hidden-focusable}} can also be used as mixins."),
                new e.codepreview({
                    type: "css",
                    code: `
						// Usage as a mixin

						.visually-hidden-title {
						@include visually-hidden;
						}

						.skip-navigation {
						@include visually-hidden-focusable;
						}
						`,
                }),
            ]),
        ];
    },
};

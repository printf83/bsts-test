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
exports.shadow = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.shadow = {
    title: "Shadows",
    description: "Add or remove shadows to elements with box-shadow utilities.",
    item: () => {
        return [
            new e.section([
                new e.title("Examples"),
                new e.text("While shadows on components are disabled by default in Bootstrap and can be enabled via {{$enable-shadows}}, you can also quickly add or remove a shadow with Bootstrap {{box-shadow}} utility classes. Includes support for {{.shadow-none}} and three default sizes (which have associated variables to match)."),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.div({
                                shadow: "none",
                                padding: 3,
                                marginBottom: 5,
                                bgColor: "body-tertiary",
                                rounded: true,
                            }, "No shadow"),
                            new bsts_1.h.div({ shadow: "sm", padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Small shadow"),
                            new bsts_1.h.div({ shadow: true, padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Regular shadow"),
                            new bsts_1.h.div({ shadow: "lg", padding: 3, marginBottom: 5, bgColor: "body-tertiary", rounded: true }, "Large shadow"),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Sass")]),
            //----------------------
            new e.section([
                new e.subtitle("Variables"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$box-shadow:                  0 .5rem 1rem rgba($black, .15);
						$box-shadow-sm:               0 .125rem .25rem rgba($black, .075);
						$box-shadow-lg:               0 1rem 3rem rgba($black, .175);
						$box-shadow-inset:            inset 0 1px 2px rgba($black, .075);
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities API"),
                new e.text("Shadow utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"shadow": (
						property: box-shadow,
						class: shadow,
						values: (
							null: $box-shadow,
							sm: $box-shadow-sm,
							lg: $box-shadow-lg,
							none: none,
						)
						),
					`,
                }),
            ]),
        ];
    },
};

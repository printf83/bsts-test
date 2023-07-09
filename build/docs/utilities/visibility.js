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
exports.visibility = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.visibility = {
    title: "Visibility",
    description: "Control the visibility of elements, without modifying their display, with visibility utilities.",
    item: () => {
        return [
            new e.section([
                new e.text("Set the {{visibility}} of elements with Bootstrap visibility utilities. These utility classes do not modify the {{display}} value at all and do not affect layout – {{.invisible}} elements still take up space in the page."),
                new e.alert({ color: "warning", callout: true }, "Elements with the {{.invisible}} class will be hidden {{i::both}} visually and for assistive technology/screen reader users."),
                new e.text("Apply {{.visible}} or {{.invisible}} as needed."),
                new e.code({
                    output: () => {
                        return [new bsts_1.h.div({ visible: true }, "Visible"), new bsts_1.h.div({ visible: false }, "Invisible")];
                    },
                }),
                new e.codepreview({
                    type: "css",
                    code: `
						// Class
						.visible {
						visibility: visible !important;
						}
						.invisible {
						visibility: hidden !important;
						}
						`,
                }),
            ]),
            //----------------------
            new e.section([new e.title("Sass")]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities API"),
                new e.text("Visibility utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"visibility": (
						property: visibility,
						class: null,
						values: (
							visible: visible,
							invisible: hidden,
						)
						),
					`,
                }),
            ]),
        ];
    },
};

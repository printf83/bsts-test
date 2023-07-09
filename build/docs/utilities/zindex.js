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
exports.zindex = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.zindex = {
    title: "Z-index",
    description: "Use Bootstrap low-level {{z-index}} utilities to quickly change the stack level of an element or component.",
    item: () => {
        return [
            new e.section([
                new e.title("Example"),
                new e.text("Use {{z-index}} utilities to stack elements on top of one another. Requires a {{position}} value other than {{static}}, which can be set with custom styles or using Bootstrap {{nav:docs/utilities/position::position utilities}}."),
                new e.alert({ color: "info", callout: true }, "Bootstrap call these “low-level” {{z-index}} utilities because of their default values of {{-1}} through {{3}}, which Bootstrap use for the layout of overlapping components. High-level {{z-index}} values are used for overlay components like modals and tooltips."),
                new e.code({
                    outputAttr: { class: "zindex-box", style: { height: "200px" } },
                    output: () => {
                        return [3, 2, 1, 0, "n1"].map((i) => new bsts_1.h.div({ zIndex: i, position: "absolute", rounded: 3, padding: 5 }, new bsts_1.h.span(`z-${i}`)));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Overlays"),
                new e.text("Bootstrap overlay components—dropdown, modal, offcanvas, popover, toast, and tooltip—all have their own {{z-index}} values to ensure a usable experience with competing “layers” of an interface."),
                new e.text("Read about them in the {{nav:docs/layout/zindex::z-index layout page}}."),
            ]),
            //----------------------
            new e.section([
                new e.title("Component approach"),
                new e.text("On some components, Bootstrap use Bootstrap low-level {{z-index}} values to manage repeating elements that overlap one another (like buttons in a button group or items in a list group)."),
                new e.text("Learn about Bootstrap {{https://getbootstrap.com/docs/5.3/extend/approach/#z-index-scales::z-index approach}}."),
            ]),
            //----------------------
            new e.section([new e.title("CSS")]),
            //----------------------
            new e.section([
                new e.subtitle("Sass map "),
                new e.text("Customize this Sass map to change the available values and generated utilities."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$zindex-levels: (
						n1: -1,
						0: 0,
						1: 1,
						2: 2,
						3: 3
						);
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities API"),
                new e.text("Position utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"z-index": (
						property: z-index,
						class: z,
						values: $zindex-levels,
						)
					`,
                }),
            ]),
        ];
    },
};

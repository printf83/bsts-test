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
exports.float = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.float = {
    title: "Float",
    description: "Toggle floats on any element, across any breakpoint, using Bootstrap responsive float utilities.",
    item: () => {
        return [
            new e.section([
                new e.title("Overview"),
                new e.text("These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the {{https://developer.mozilla.org/en-US/docs/Web/CSS/float::CSS float property}}. {{!important}} is included to avoid specificity issues. These use the same viewport breakpoints as Bootstrap grid system. Please be aware float utilities have no effect on flex items."),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.div({ float: "start" }, "Float start on all viewport sizes"),
                            new bsts_1.h.br(),
                            new bsts_1.h.div({ float: "end" }, "Float end on all viewport sizes"),
                            new bsts_1.h.br(),
                            new bsts_1.h.div({ float: "none" }, "Don't float on all viewport sizes"),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Responsive"),
                new e.text("Responsive variations also exist for each {{float}} value."),
                new e.code({
                    showViewport: true,
                    output: () => {
                        return [
                            new bsts_1.h.div({ float: "sm-end" }, "Float end on viewports sized SM (small) or wider"),
                            new bsts_1.h.br(),
                            new bsts_1.h.div({ float: "md-end" }, "Float end on viewports sized MD (medium) or wider"),
                            new bsts_1.h.br(),
                            new bsts_1.h.div({ float: "lg-end" }, "Float end on viewports sized LG (large) or wider"),
                            new bsts_1.h.br(),
                            new bsts_1.h.div({ float: "xl-end" }, "Float end on viewports sized XL (extra-large) or wider"),
                        ];
                    },
                }),
                new e.text("Here are all the support classes:"),
                new e.ul({
                    item: [
                        ...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
                            .map((i) => {
                            return ["start", "end", "none"].map((j) => `{{.float${i}-${j}}}`);
                        })
                            .flat(),
                    ],
                }),
            ]),
            //----------------------
            new e.section([new e.title("Sass")]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities API"),
                new e.text("Float utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"float": (
						responsive: true,
						property: float,
						values: (
							start: left,
							end: right,
							none: none,
						)
						),
					`,
                }),
            ]),
        ];
    },
};

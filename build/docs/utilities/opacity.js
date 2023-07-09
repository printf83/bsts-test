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
exports.opacity = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.opacity = {
    title: "Opacity",
    description: "Control the opacity of elements.",
    item: () => {
        return [
            new e.section([
                new e.text("The {{opacity}} property sets the opacity level for an element. The opacity level describes the transparency level, where {{1}} is not transparent at all, {{.5}} is 50% visible, and {{0}} is completely transparent."),
                new e.text("Set the {{opacity}} of an element using {{.opacity-{value} }}utilities."),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [100, 75, 50, 25].map((i) => new bsts_1.h.div({
                            opacity: i,
                            padding: 3,
                            textBgColor: "primary",
                            rounded: true,
                            fontWeight: "bold",
                            display: "inline-block",
                        }, `${i}%`));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Utilities API"),
                new e.text("Opacity utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"opacity": (
						property: opacity,
						values: (
							0: 0,
							25: .25,
							50: .5,
							75: .75,
							100: 1,
						)
						),
					`,
                }),
            ]),
        ];
    },
};

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
exports.ratio = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.ratio = {
    title: "Ratios",
    description: "Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.",
    item: () => {
        return [
            new e.section([
                new e.title("About"),
                new e.text("Use the ratio helper to manage the aspect ratios of external content like {{h.iframe}}s, {{h.embed}}s, {{h.video}}s, and {{h.obj}}s. These helpers also can be used on any standard HTML child element (e.g., a {{h.div}} or {{h.img}}). Styles are applied from the parent {{ratio}} property directly to the child."),
                new e.text("Aspect ratios are declared in a Sass map and included in each class via CSS variable, which also allows {{nav:docs/helpers/ratio#custom_ratios::custom aspect ratios}}."),
                new e.alert({ color: "info", callout: true }, "{{b::Pro-Tip! }}You don’t need {{frameborder:'0'}} on your {{h.iframe}}s as Bootstrap override that for you in {{nav:docs/content/reboot::Reboot}}."),
            ]),
            //----------------------
            new e.section([
                new e.title("Example"),
                new e.text("Wrap any embed, like an {{h.iframe}}, in a parent element with {{ratio}} and an aspect ratio class. The immediate child element is automatically sized thanks to Bootstrap universal selector {{.ratio > *}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ ratio: "16x9" }, new bsts_1.h.iframe({
                            src: "https://www.youtube.com/embed/eVxNksC88_U",
                            title: "YouTube video player",
                            allowfullscreen: true,
                        }));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Aspect ratios"),
                new e.text("Aspect ratios can be customized with modifier classes. By default the following ratio classes are provided:"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2, class: "ratio-box" },
                    output: () => {
                        return [
                            new bsts_1.h.div({ ratio: "1x1" }, new bsts_1.h.div("1X1")),
                            new bsts_1.h.div({ ratio: "4x3" }, new bsts_1.h.div("4X3")),
                            new bsts_1.h.div({ ratio: "16x9" }, new bsts_1.h.div("16X9")),
                            new bsts_1.h.div({ ratio: "21x9" }, new bsts_1.h.div("21X9")),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Custom ratios"),
                new e.text("Each {{ratio}} property includes a CSS custom property (or CSS variable) in the selector. You can override this CSS variable to create custom aspect ratios on the fly with some quick math on your part."),
                new e.text("For example, to create a 2x1 aspect ratio, set {{style:{'--bs-aspect-ratio': '50%'} }}beside the {{ratio}} property."),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2, class: "ratio-box" },
                    output: () => {
                        return new bsts_1.h.div({ ratio: true, style: { "--bs-aspect-ratio": "50%" } }, new bsts_1.h.div("2X1"));
                    },
                }),
                new e.text("This CSS variable makes it easy to modify the aspect ratio across breakpoints. The following is 4x3 to start, but changes to a custom 2x1 at the medium breakpoint."),
                new e.codepreview({
                    type: "css",
                    code: `
						.ratio-4x3 {
						@include media-breakpoint-up(md) {
							--bs-aspect-ratio: 50%; // 2x1
						}
						}
						`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Sass map"),
                new e.text("Within {{_variables.scss}}, you can change the aspect ratios you want to use. Here’s Bootstrap default {{$ratio-aspect-ratios}} map. Modify the map as you like and recompile your Sass to put them to use."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$aspect-ratios: (
						"1x1": 100%,
						"4x3": calc(3 / 4 * 100%),
						"16x9": calc(9 / 16 * 100%),
						"21x9": calc(9 / 21 * 100%)
						);
					`,
                }),
            ]),
        ];
    },
};

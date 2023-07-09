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
exports.figures = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.figures = {
    title: "Figures",
    description: "Documentation and examples for displaying related images and text with the figure component in Bootstrap.",
    item: () => {
        return [
            new e.section([
                new e.text("Anytime you need to display a piece of content—like an image with an optional caption, consider using a {{<figure>}}."),
                new e.text("Use the included {{.figure}}, {{.figure-img}} and {{.figure-caption}} classes to provide some baseline styles for the HTML5 {{<figure>}} and {{<figcaption>}} elements. Images in figures have no explicit size, so be sure to add the {{.img-fluid}} class to your {{<img>}} to make it responsive."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.figure.container([
                            new bsts_1.b.figure.img({
                                fluid: true,
                                rounded: true,
                                src: "https://picsum.photos/seed/bsts_0/400/300.webp",
                                alt: "...",
                            }),
                            new bsts_1.b.figure.caption("A caption for the above image"),
                        ]);
                    },
                }),
                new e.text("Aligning the figure’s caption is easy with Bootstrap {{nav:docs/utilities/text#text_alignment::text utilities}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.figure.container([
                            new bsts_1.b.figure.img({
                                fluid: true,
                                rounded: true,
                                src: "https://picsum.photos/seed/bsts_0/400/300.webp",
                                alt: "...",
                            }),
                            new bsts_1.b.figure.caption({ textAlign: "end" }, "A caption for the above image"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("CSS")]),
            //----------------------
            new e.section([
                new e.subtitle("Sass variables"),
                new e.text(""),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$figure-caption-font-size:          $small-font-size;
						$figure-caption-color:              var(--#{$prefix}secondary-color);
					`,
                }),
            ]),
        ];
    },
};

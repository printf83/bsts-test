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
exports.object_fit = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.object_fit = {
    title: "Object fit",
    description: "Use the object fit utilities to modify how the content of a {{https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element::replaced element}}, such as an {{<img>}} or {{<video>}}, should be resized to fit its container.",
    item: () => {
        return [
            new e.section([
                new e.title("How it works"),
                new e.text("Change the value of the {{https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit::object-fit property}} with Bootstrap responsive {{object-fit}} utility classes. This property tells the content to fill the parent container in a variety of ways, such as preserving the aspect ratio or stretching to take up as much space as possible."),
                new e.text("Classes for the value of {{object-fit}} are named using the format {{.object-fit-{value}.}} Choose from the following values:"),
                new e.ul({
                    item: ["{{contain}}", "{{cover}}", "{{fill}}", "{{scale}} (for scale-down)", "{{none}}"],
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Examples"),
                new e.text("Add the {{object-fit-{value} }}class to the {{https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element::replaced element}}:"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["contain", "cover", "fill", "scale", "none"].map((i) => new bsts_1.h.img({
                            src: "https://picsum.photos/seed/bsts_0/110/65.webp",
                            objectFit: i,
                            border: true,
                            rounded: true,
                            alt: "...",
                            style: { width: "135px", height: "115px" },
                        }));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Responsive"),
                new e.text("Responsive variations also exist for each {{object-fit}} value using the format {{.object-fit-{breakpoint}-{value} }}, for the following breakpoint abbreviations: {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}. Classes can be combined for various effects as you need."),
                new e.code({
                    showViewport: true,
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["sm-contain", "md-contain", "lg-contain", "xl-contain", "xxl-contain"].map((i) => new bsts_1.h.img({
                            src: "https://picsum.photos/seed/bsts_0/110/65.webp",
                            objectFit: i,
                            border: true,
                            rounded: true,
                            alt: "...",
                            style: { width: "135px", height: "115px" },
                        }));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Video"),
                new e.text("The {{.object-fit-{value} }}and responsive {{.object-fit-{breakpoint}-{value} }}utilities also work on {{<video>}} elements."),
                new e.codepreview({
                    type: "html",
                    code: `
						<video src="..." class="object-fit-contain" autoplay></video>
						<video src="..." class="object-fit-cover" autoplay></video>
						<video src="..." class="object-fit-fill" autoplay></video>
						<video src="..." class="object-fit-scale" autoplay></video>
						<video src="..." class="object-fit-none" autoplay></video>
					`,
                }),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        const videoFn = () => {
                            return ["contain", "cover", "fill", "scale", "none"].map((i) => new bsts_1.h.video({
                                src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                                objectFit: i,
                                border: true,
                                rounded: true,
                                controls: true,
                                style: { width: "135px", height: "115px" },
                            }));
                        };
                        return new bsts_1.b.button({
                            position: "relative",
                            on: {
                                click: (e) => {
                                    let target = e.target;
                                    bsts_1.core.replaceWith(target, videoFn());
                                },
                            },
                        }, [
                            "Show live video ",
                            new bsts_1.b.badge({
                                bgColor: "danger",
                                position: "absolute",
                                top: 0,
                                start: 100,
                                tMiddle: true,
                                rounded: "pill",
                                border: true,
                                borderColor: "light",
                            }, ["61.5Mb", new bsts_1.b.visuallyhidden("estimate video size")]),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Utilities API"),
                new e.text("Object fit utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"object-fit": (
						responsive: true,
						property: object-fit,
						values: (
							contain: contain,
							cover: cover,
							fill: fill,
							scale: scale-down,
							none: none,
						)
						),
					`,
                }),
            ]),
        ];
    },
};

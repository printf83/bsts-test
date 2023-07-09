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
exports.colored_links = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.colored_links = {
    title: "Colored links",
    description: "Colored links with hover states",
    item: () => {
        return [
            new e.section([
                new e.title("Link colors"),
                new e.text("You can use the {{.link-*}} classes to colorize links. Unlike the {{nav:docs/utilities/colors::.text-* classes}}, these classes have a {{:hover}} and {{:focus}} state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast."),
                new e.alert({ color: "info", callout: true }, "{{b::Heads up! }}{{.link-body-emphasis}} is currently the only colored link that adapts to color modes. It’s treated as a special case until v6 arrives and Bootstrap can more thoroughly rebuild Bootstrap theme colors for color modes. Until then, it’s a unique, high-contrast link color with custom {{:hover}} and {{:focus}} styles. However, it still responds to the new link utilities."),
                new e.code({
                    output: () => {
                        return [
                            "primary",
                            "secondary",
                            "success",
                            "danger",
                            "warning",
                            "info",
                            "light",
                            "dark",
                            "body-emphasis",
                        ].map((i) => new bsts_1.h.p(new bsts_1.h.a({ href: "#", linkColor: i }, `${bsts_1.core.uppercaseFirst(i)} link`)));
                    },
                }),
                new e.alert({ color: "info", callout: true }, "{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."),
            ]),
            //----------------------
            new e.section([
                new e.title("Link utilities"),
                new e.text("Colored links can also be modified by Bootstrap {{nav:docs/utilities/link::link utilities}}."),
                new e.code({
                    output: () => {
                        return [
                            "primary",
                            "secondary",
                            "success",
                            "danger",
                            "warning",
                            "info",
                            "light",
                            "dark",
                            "body-emphasis",
                        ].map((i) => new bsts_1.h.p(new bsts_1.h.a({
                            href: "#",
                            linkColor: i,
                            linkOffset: 2,
                            linkUnderlineOpacity: 25,
                            linkUnderlineOpacityHover: 100,
                        }, `${bsts_1.core.uppercaseFirst(i)} link`)));
                    },
                }),
            ]),
        ];
    },
};

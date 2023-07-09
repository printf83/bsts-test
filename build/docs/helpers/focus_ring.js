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
exports.focus_ring = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.focus_ring = {
    title: "Focus ring",
    description: "Utility classes that allows you to add and modify custom focus ring styles to elements and components.",
    item: () => {
        return [
            new e.section([
                new e.text("The {{.focus-ring}} helper removes the default {{outline}} on {{:focus}}, replacing it with a {{box-shadow}} that can be more broadly customized. The new shadow is made up of a series of CSS variables, inherited from the {{:root}} level, that can be modified for any element or component."),
            ]),
            //----------------------
            new e.section([
                new e.title("Example"),
                new e.text("Click directly on the link below to see the focus ring in action, or into the example below and then press {{k::Tab}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.a({
                            href: "#",
                            display: "inline-flex",
                            paddingY: 1,
                            paddingX: 2,
                            textDecoration: "none",
                            border: true,
                            rounded: true,
                            focusRing: true,
                        }, "Custom focus ring");
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Customize"),
                new e.text("Modify the styling of a focus ring with Bootstrap CSS variables, Sass variables, utilities, or custom styles."),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("CSS variables "),
                new e.text("Modify the {{--bs-focus-ring-*}} CSS variables as needed to change the default appearance."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.a({
                            href: "#",
                            display: "inline-flex",
                            paddingY: 1,
                            paddingX: 2,
                            textDecoration: "none",
                            border: true,
                            rounded: true,
                            focusRing: true,
                            style: {
                                "--bs-focus-ring-color": "rgba(var(--bs-success-rgb), .25)",
                            },
                        }, "Green focus ring");
                    },
                }),
                new e.text("{{.focus-ring}} sets styles via global CSS variables that can be overridden on any parent element, as shown above. These variables are generated from their Sass variable counterparts."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_root.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_root.scss",
                    code: `
						--#{$prefix}focus-ring-width: #{$focus-ring-width};
						--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};
						--#{$prefix}focus-ring-color: #{$focus-ring-color};
					`,
                }),
                new e.text("By default, there is no {{--bs-focus-ring-x}}, {{--bs-focus-ring-y}}, or {{--bs-focus-ring-blur}}, but Bootstrap provide CSS variables with fallbacks to initial {{0}} values. Modify them to change the default appearance."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.a({
                            href: "#",
                            display: "inline-flex",
                            paddingY: 1,
                            paddingX: 2,
                            textDecoration: "none",
                            border: true,
                            rounded: true,
                            focusRing: true,
                            style: {
                                "--bs-focus-ring-x": "10px",
                                "--bs-focus-ring-y": "10px",
                                "--bs-focus-ring-blur": "4px",
                            },
                        }, "Blurry offset focus ring");
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Sass"),
                new e.text("Customize the focus ring Sass variables to modify all usage of the focus ring styles across your Bootstrap-powered project."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$focus-ring-width:      .25rem;
						$focus-ring-opacity:    .25;
						$focus-ring-color:      rgba($primary, $focus-ring-opacity);
						$focus-ring-blur:       0;
						$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities"),
                new e.text("In addition to {{.focus-ring}}, Bootstrap have several {{.focus-ring-*}} utilities to modify the helper class defaults. Modify the color with any of Bootstrap {{https://getbootstrap.com/docs/5.3/customize/color/#theme-colors::theme colors}}. Note that the light and dark variants may not be visible on all background colors given current color mode support."),
                new e.code({
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => new bsts_1.h.p(new bsts_1.h.a({
                            href: "#",
                            display: "inline-flex",
                            focusRing: i,
                            paddingY: 1,
                            paddingX: 2,
                            textDecoration: "none",
                            border: true,
                            rounded: 2,
                        }, `${bsts_1.core.uppercaseFirst(i)} focus`)));
                    },
                }),
                new e.text("Focus ring utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						"focus-ring": (
						css-var: true,
						css-variable-name: focus-ring-color,
						class: focus-ring,
						values: map-loop($theme-colors-rgb, rgba-css-var, "$key", "focus-ring")
						),
					`,
                }),
            ]),
        ];
    },
};

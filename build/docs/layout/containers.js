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
exports.containers = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.containers = {
    title: "Containers",
    description: "Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.",
    item: () => {
        return [
            new e.section([
                new e.title("How they work"),
                new e.text("Containers are the most basic layout element in Bootstrap and are {{b::required when using Bootstrap default grid system}}. Containers are used to contain, pad, and (sometimes) center the content within them. While containers {{i::can}} be nested, most layouts do not require a nested container."),
                new e.text("Bootstrap comes with three different containers:"),
                new e.ul({
                    item: [
                        "{{.container}}, which sets a {{max-width}} at each responsive breakpoint",
                        "{{.container-{breakpoint} }}, which is {{width: 100%}} until the specified breakpoint",
                        "{{.container-fluid}}, which is {{width: 100%}} at all breakpoints",
                    ],
                }),
                new e.text("The table below illustrates how each container’s {{max-width}} compares to the original {{.container}} and {{.container-fluid}} across each breakpoint."),
                new e.text("See them in action and compare them in Bootstrap {{https://getbootstrap.com/docs/5.3/examples/grid/#containers::Grid example}}."),
                new e.table({
                    responsiveHeader: [
                        "Property",
                        "Extra small (576px)",
                        "Small (≥576px)",
                        "Medium (≥768px)",
                        "Large (≥992px)",
                        "X-Large (≥1200px)",
                        "XX-Large (≥1400px)",
                    ],
                    responsiveCol: "20ch auto",
                    item: [
                        [
                            "",
                            new bsts_1.h.div(["Extra small", new bsts_1.h.div({ fontWeight: "normal" }, "<576px")]),
                            new bsts_1.h.div(["Small", new bsts_1.h.div({ fontWeight: "normal" }, "≥576px")]),
                            new bsts_1.h.div(["Medium", new bsts_1.h.div({ fontWeight: "normal" }, "≥768px")]),
                            new bsts_1.h.div(["Large", new bsts_1.h.div({ fontWeight: "normal" }, "≥992px")]),
                            new bsts_1.h.div(["X-Large", new bsts_1.h.div({ fontWeight: "normal" }, "≥1200px")]),
                            new bsts_1.h.div(["XX-Large", new bsts_1.h.div({ fontWeight: "normal" }, "≥1400px")]),
                        ],
                        ["{{.container}}", "100%", "540px", "720px", "960px", "1140px", "1320px"],
                        ["{{.container-sm}}", "100%", "540px", "720px", "960px", "1140px", "1320px"],
                        ["{{.container-md}}", "100%", "100%", "720px", "960px", "1140px", "1320px"],
                        ["{{.container-lg}}", "100%", "100%", "100%", "960px", "1140px", "1320px"],
                        ["{{.container-xl}}", "100%", "100%", "100%", "100%", "1140px", "1320px"],
                        ["{{.container-xxl}}", "100%", "100%", "100%", "100%", "100%", "1320px"],
                        ["{{.container-fluid}}", "100%", "100%", "100%", "100%", "100%", "100%"],
                    ],
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Default container"),
                new e.text("Bootstrap default {{.container}} class is a responsive, fixed-width container, meaning its {{max-width}} changes at each breakpoint."),
                new e.codepreview({
                    type: "js",
                    code: `new h.div({ container: true }, "Content here")`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Responsive containers"),
                new e.text("Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which Bootstrap apply {{max-widths}} for each of the higher breakpoints. For example, {{.container-sm}} is 100% wide to start until the {{sm}} breakpoint is reached, where it will scale up with {{md}}, {{lg}}, {{xl}}, and {{xxl}}."),
                new e.codepreview({
                    type: "js",
                    code: `
						new h.div({ container: "sm" }, "100% wide until small breakpoint");
						new h.div({ container: "md" }, "100% wide until medium breakpoint");
						new h.div({ container: "lg" }, "100% wide until large breakpoint");
						new h.div({ container: "xl" }, "100% wide until extra large breakpoint");
						new h.div({ container: "xxl" }, "100% wide until extra extra large breakpoint");
						`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Fluid containers"),
                new e.text("Use {{.container-fluid}} for a full width container, spanning the entire width of the viewport."),
                new e.codepreview({
                    type: "js",
                    code: `new h.div({container:"fluid"},"Content here");`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Sass"),
                new e.text("As shown above, Bootstrap generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in {{_variables.scss}}) that powers them:"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$container-max-widths: (
						sm: 540px,
						md: 720px,
						lg: 960px,
						xl: 1140px,
						xxl: 1320px
						);
					`,
                }),
                new e.text("In addition to customizing the Sass, you can also create your own containers with Bootstrap Sass mixin."),
                new e.codepreview({
                    type: "css",
                    code: `
						// Source mixin
						@mixin make-container($padding-x: $container-padding-x) {
						width: 100%;
						padding-right: $padding-x;
						padding-left: $padding-x;
						margin-right: auto;
						margin-left: auto;
						}

						// Usage
						.custom-container {
						@include make-container();
						}
					`,
                }),
                new e.text("For more information and examples on how to modify Bootstrap Sass maps and variables, please refer to {{nav:docs/layout/grid#sass::the Sass section of the Grid documentation}}."),
            ]),
        ];
    },
};

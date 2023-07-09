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
exports.progress = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.progress = {
    title: "Progress",
    description: "Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.",
    item: () => {
        return [
            new e.section([
                new e.alert({ color: "info", callout: true }, "{{b::New markup in v5.3.0 —}} Bootstrap’ve deprecated the previous HTML structure for progress bars and replaced it with a more accessible one. The previous structure will continue to work until v6. {{https://getbootstrap.com/docs/5.3/migration/#improved-markup-for-progress-bars::See what’s changed in Bootstrap migration guide}}."),
                new e.title("How it works"),
                new e.text("Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. Bootstrap don’t use the {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress::HTML5 <progress> element}}, ensuring you can stack progress bars, animate them, and place text labels over them."),
                new e.ul({
                    item: [
                        "Bootstrap use the {{b.progress.container}} as a wrapper to indicate the max value of the progress bar.",
                        "The {{b.progress.container}} wrapper automaticly get {{role:'progressbar'}} and {{aria}} attributes to make it accessible, including an accessible name (using {{label}}, {{labelledby}}, or similar).",
                        "Bootstrap use the inner {{b.progress.bar}} purely for the visual bar and label.",
                        "The {{b.progress.bar}} requires an inline style, utility class, or custom CSS to set its width.",
                        "Bootstrap provide a special {{stacked}} property to create multiple/stacked progress bars.",
                    ],
                }),
                new e.text("Put that all together, and you have the following examples."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return [0, 25, 50, 75, 100].map((i) => {
                            return new bsts_1.b.progress.container({ label: "Basic example", value: i, min: 0, max: 100 }, new bsts_1.b.progress.bar({ style: { width: `${i}%` } }));
                        });
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return [0, 25, 50, 75, 100].map((i) => {
                            return new bsts_1.b.progress.container({
                                label: "Basic example",
                                value: i,
                                min: 0,
                                max: 100,
                            });
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Bar sizing")]),
            //----------------------
            new e.section([
                new e.subtitle("Width"),
                new e.text("Bootstrap provides a handful of {{nav:docs/utilities/sizing::utilities for setting width}}. Depending on your needs, these may help with quickly configuring the width of the {{b.progress.bar}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({ label: "Basic example", value: 75, min: 0, max: 100 }, new bsts_1.b.progress.bar({ width: 75 }));
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({ label: "Basic example", value: 75, min: 0, max: 100 });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Height"),
                new e.text("You only set a {{height}} value on the {{b.progress.container}} component, so if you change that value, the inner {{b.progress.bar}} will automatically resize accordingly."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return [
                            new bsts_1.b.progress.container({ label: "Example 1px high", value: 25, min: 0, max: 100, style: { height: "1px" } }, new bsts_1.b.progress.bar({ style: { width: "25%" } })),
                            new bsts_1.b.progress.container({ label: "Example 20px high", value: 25, min: 0, max: 100, style: { height: "20px" } }, new bsts_1.b.progress.bar({ style: { width: "25%" } })),
                        ];
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return [
                            new bsts_1.b.progress.container({
                                label: "Example 1px high",
                                value: 25,
                                min: 0,
                                max: 100,
                                style: { height: "1px" },
                            }),
                            new bsts_1.b.progress.container({
                                label: "Example 20px high",
                                value: 25,
                                min: 0,
                                max: 100,
                                style: { height: "20px" },
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Labels"),
                new e.text("Add labels to your progress bars by placing text within the {{b.progress.bar}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({ label: "Example with label", value: 25, min: 0, max: 100 }, new bsts_1.b.progress.bar({ style: { width: "25%" } }, "25%"));
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({
                            label: "Example with label",
                            value: 25,
                            min: 0,
                            max: 100,
                            text: "percent",
                        });
                    },
                }),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({
                            label: "Example with label",
                            value: 25,
                            min: 0,
                            max: 100,
                            text: "progress",
                        });
                    },
                }),
                new e.text("Note that by default, the content inside the {{b.progress.bar}} is controlled with {{overflow: hidden}}, so it doesn’t bleed out of the bar. If your progress bar is shorter than its label, the content will be capped and may become unreadable. To change this behavior, you can use {{overflow:'visible'}} from the {{nav:docs/utilities/overflow::overflow utilities}}, but make sure to also define an explicit {{nav:docs/utilities/colors#colors::text color}} so the text remains readable. Be aware though that currently this approach does not take into account {{https://getbootstrap.com/docs/5.3/customize/color-modes/::color modes}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({ label: "Example with label", value: 10, min: 0, max: 100 }, new bsts_1.b.progress.bar({ style: { width: "10%" }, overflow: "visible", textColor: "dark" }, "Long label text for the progress bar, set to a dark color"));
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({
                            label: "Example with label",
                            value: 10,
                            min: 0,
                            max: 100,
                            text: "Long label text for the progress bar, set to a dark color",
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Backgrounds"),
                new e.text("Use background utility classes to change the appearance of individual progress bars."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return ["success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [25, 50, 75, 100][ix];
                            return new bsts_1.b.progress.container({ label: `${bsts_1.core.uppercaseFirst(i)} example`, value: val, min: 0, max: 100 }, new bsts_1.b.progress.bar({
                                color: i,
                                style: { width: `${val}%` },
                            }));
                        });
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return ["success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [25, 50, 75, 100][ix];
                            return new bsts_1.b.progress.container({
                                label: `${bsts_1.core.uppercaseFirst(i)} example`,
                                value: val,
                                min: 0,
                                max: 100,
                                color: i,
                            });
                        });
                    },
                }),
                new e.alert({ color: "info", callout: true }, "{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property."),
                new e.text("If you’re adding labels to progress bars with a custom background color, make sure to also set an appropriate {{textColor}}, so the labels remain readable and have sufficient contrast."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return ["success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [25, 50, 75, 100][ix];
                            let text = ["light", "dark", "dark", "light"][ix];
                            return new bsts_1.b.progress.container({ label: `${bsts_1.core.uppercaseFirst(i)} example`, value: val, min: 0, max: 100 }, new bsts_1.b.progress.bar({
                                color: i,
                                textColor: text,
                                style: { width: `${val}%` },
                            }, `${val}%`));
                        });
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return ["success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [25, 50, 75, 100][ix];
                            return new bsts_1.b.progress.container({
                                label: `${bsts_1.core.uppercaseFirst(i)} example`,
                                value: val,
                                min: 0,
                                max: 100,
                                color: i,
                                text: "percent",
                            });
                        });
                    },
                }),
                new e.text("Alternatively, you can use the new combined {{nav:docs/helpers/color_background::color and background}} property. Without {{b.progress.bar}} the {{textBgColor}} will be used."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return ["success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [25, 50, 75, 100][ix];
                            return new bsts_1.b.progress.container({ label: `${bsts_1.core.uppercaseFirst(i)} example`, value: val, min: 0, max: 100 }, new bsts_1.b.progress.bar({
                                textBgColor: i,
                                style: { width: `${val}%` },
                            }, `${val}%`));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Multiple bars"),
                new e.text("You can include multiple progress components inside a container with {{B.progress.stacked}} to create a single stacked progress bar. Note that in this case, the styling to set the visual width of the progress bar must be applied to the {{b.progress.container}} component, rather than the {{b.progress.bar}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.stacked([
                            new bsts_1.b.progress.container({
                                label: "Segment one",
                                value: 15,
                                min: 0,
                                max: 100,
                                style: { width: "15%" },
                            }, new bsts_1.b.progress.bar()),
                            new bsts_1.b.progress.container({
                                label: "Segment two",
                                value: 30,
                                min: 0,
                                max: 100,
                                style: { width: "30%" },
                            }, new bsts_1.b.progress.bar({ color: "success" })),
                            new bsts_1.b.progress.container({
                                label: "Segment three",
                                value: 20,
                                min: 0,
                                max: 100,
                                style: { width: "20%" },
                            }, new bsts_1.b.progress.bar({ color: "info" })),
                        ]);
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.stacked([
                            new bsts_1.b.progress.container({
                                label: "Segment one",
                                value: 15,
                                min: 0,
                                max: 100,
                                stacked: true,
                            }),
                            new bsts_1.b.progress.container({
                                label: "Segment two",
                                value: 30,
                                min: 0,
                                max: 100,
                                stacked: true,
                                color: "success",
                            }),
                            new bsts_1.b.progress.container({
                                label: "Segment three",
                                value: 20,
                                min: 0,
                                max: 100,
                                stacked: true,
                                color: "info",
                            }),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Striped"),
                new e.text("Add {{striped:true}} to any {{b.progress.bar}} to apply a stripe via CSS gradient over the progress bar’s background color."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return [undefined, "success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [10, 25, 50, 75, 100][ix];
                            return new bsts_1.b.progress.container({
                                label: `${i ? bsts_1.core.uppercaseFirst(i) : "Default"} striped example`,
                                value: val,
                                min: 0,
                                max: 100,
                            }, new bsts_1.b.progress.bar({
                                striped: true,
                                textBgColor: i,
                                style: { width: `${val}%` },
                            }));
                        });
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return [undefined, "success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [10, 25, 50, 75, 100][ix];
                            return new bsts_1.b.progress.container({
                                label: `${i ? bsts_1.core.uppercaseFirst(i) : "Default"} striped example`,
                                value: val,
                                min: 0,
                                max: 100,
                                striped: true,
                                color: i,
                            });
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Animated stripes"),
                new e.text("The striped gradient can also be animated. Add {{striped:true}} and {{animated:true}} togather to {{b.progress.bar}} to animate the stripes right to left via CSS3 animations."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({
                            label: `Animated striped example`,
                            value: 75,
                            min: 0,
                            max: 100,
                        }, new bsts_1.b.progress.bar({
                            striped: true,
                            animated: true,
                            style: { width: `75%` },
                        }));
                    },
                }),
                new e.text("Or without {{b.progress.bar}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({
                            label: `Animated striped example`,
                            value: 75,
                            min: 0,
                            max: 100,
                            striped: true,
                            animated: true,
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("CSS")]),
            //----------------------
            new e.section([
                new e.subtitle("Variables"),
                new e.text("As part of Bootstrap’s evolving CSS variables approach, progress bars now use local CSS variables on {{.progress}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_progress.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_progress.scss",
                    code: `
						--#{$prefix}progress-height: #{$progress-height};
						@include rfs($progress-font-size, --#{$prefix}progress-font-size);
						--#{$prefix}progress-bg: #{$progress-bg};
						--#{$prefix}progress-border-radius: #{$progress-border-radius};
						--#{$prefix}progress-box-shadow: #{$progress-box-shadow};
						--#{$prefix}progress-bar-color: #{$progress-bar-color};
						--#{$prefix}progress-bar-bg: #{$progress-bar-bg};
						--#{$prefix}progress-bar-transition: #{$progress-bar-transition};
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Sass variables"),
                new e.text("As part of Bootstrap’s evolving CSS variables approach, progress bars now use local CSS variables on {{.progress}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$progress-height:                   1rem;
						$progress-font-size:                $font-size-base * .75;
						$progress-bg:                       var(--#{$prefix}secondary-bg);
						$progress-border-radius:            var(--#{$prefix}border-radius);
						$progress-box-shadow:               var(--#{$prefix}box-shadow-inset);
						$progress-bar-color:                $white;
						$progress-bar-bg:                   $primary;
						$progress-bar-animation-timing:     1s linear infinite;
						$progress-bar-transition:           width .6s ease;
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Keyframes"),
                new e.text("Used for creating the CSS animations for {{.progress-bar-animated}}. Included in {{scss/_progress-bar.scss}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_progress.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_progress.scss",
                    code: `
						@if $enable-transitions {
						@keyframes progress-bar-stripes {
							0% { background-position-x: $progress-height; }
						}
						}
					`,
                }),
            ]),
        ];
    },
};

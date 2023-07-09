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
exports.badge = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.badge = {
    title: "Badges",
    description: "Documentation and examples for badges, Bootstrap small count and labeling component.",
    item: () => {
        return [
            new e.section([
                new e.title("Examples"),
                new e.text("Badges ({{b.badge}}) scale to match the size of the immediate parent element by using relative font sizing and {{em}} units. As of v5, badges no longer have focus or hover styles for links."),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Headings"),
                new e.code({
                    output: () => {
                        return [1, 2, 3, 4, 5, 6].map((i) => {
                            return new bsts_1.h.h(i, [
                                "Example heading ",
                                new bsts_1.b.badge({ bgColor: "secondary" }, "New"),
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Buttons"),
                new e.text("Badges can be used as part of links or buttons to provide a counter."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.button(["Notification ", new bsts_1.b.badge({ bgColor: "secondary" }, "4")]);
                    },
                }),
                new e.text("Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button."),
                new e.text("Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text."),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Positioned"),
                new e.text("Use utilities to modify a {{b.badge}} and position it in the corner of a link or button."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.button({ position: "relative" }, [
                            "Inbox ",
                            new bsts_1.b.badge({
                                bgColor: "danger",
                                position: "absolute",
                                top: 0,
                                start: 100,
                                tMiddle: true,
                                rounded: "pill",
                            }, ["99+", new bsts_1.b.visuallyhidden("unread messages")]),
                        ]);
                    },
                }),
                new e.text("You can also replace the {{b.badge}} component with a few more utilities without a count for a more generic indicator."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.button({ position: "relative" }, [
                            "Profile ",
                            new bsts_1.b.badge({
                                bgColor: "danger",
                                position: "absolute",
                                top: 0,
                                start: 100,
                                tMiddle: true,
                                rounded: "circle",
                                border: true,
                                borderColor: "light",
                                padding: 2,
                            }, new bsts_1.b.visuallyhidden("New alerts")),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Background colors"),
                new e.text("Set a {{bgColor}} with contrasting foreground {{textColor}} with {{nav:docs/helpers/color_background::textBgColor:<color> property}}. Previously it was required to manually pair your choice of {{nav:docs/utilities/colors::textColor:<color> }}and {{nav:docs/utilities/background::bgColor:<color> }}utilities for styling, which you still may use if you prefer."),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.badge({ textBgColor: i }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
                new e.alert({ color: "info", callout: true }, [
                    new bsts_1.h.h(5, "Conveying meaning to assistive technologies"),
                    new bsts_1.h.p("Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property."),
                ]),
            ]),
            //----------------------
            new e.section([
                new e.title("Pill badges"),
                new e.text("Use the {{rounded:'pill'}} property to make badges more rounded with a larger {{border-radius}}."),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.badge({ textBgColor: i, rounded: "pill" }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("CSS")]),
            //----------------------
            new e.section([
                new e.subtitle("Variables"),
                new e.text("As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on {{.badge}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_badge.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_badge.scss",
                    code: `
						--#{$prefix}badge-padding-x: #{$badge-padding-x};
						--#{$prefix}badge-padding-y: #{$badge-padding-y};
						@include rfs($badge-font-size, --#{$prefix}badge-font-size);
						--#{$prefix}badge-font-weight: #{$badge-font-weight};
						--#{$prefix}badge-color: #{$badge-color};
						--#{$prefix}badge-border-radius: #{$badge-border-radius};
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Sass variables"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$badge-font-size:                   .75em;
						$badge-font-weight:                 $font-weight-bold;
						$badge-color:                       $white;
						$badge-padding-y:                   .35em;
						$badge-padding-x:                   .65em;
						$badge-border-radius:               $border-radius;
					`,
                }),
            ]),
        ];
    },
};

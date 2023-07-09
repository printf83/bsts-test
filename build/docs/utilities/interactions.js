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
exports.interactions = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.interactions = {
    title: "Interactions",
    description: "Utility classes that change how users interact with contents of a website.",
    item: () => {
        return [
            new e.section([
                new e.title("Text selection"),
                new e.text("Change the way in which the content is selected when the user interacts with it."),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.p({ userSelect: "all" }, "This paragraph will be entirely selected when clicked by the user."),
                            new bsts_1.h.p({ userSelect: "auto" }, "This paragraph has default select behavior."),
                            new bsts_1.h.p({ userSelect: "none" }, "This paragraph will not be selectable when clicked by the user."),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Pointer events"),
                new e.text("Bootstrap provides {{.pe-none}} and {{.pe-auto}} classes to prevent or add element interactions."),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.p([
                                new bsts_1.h.a({ href: "#", pointerEvent: "none", tabindex: "-1", aria: { disabled: "true" } }, "This link"),
                                " can not be clicked",
                            ]),
                            new bsts_1.h.p([
                                new bsts_1.h.a({ href: "#", pointerEvent: "auto" }, "This link"),
                                " can be clicked (this is default behavior).",
                            ]),
                            new bsts_1.h.p({ pointerEvent: "none" }, [
                                new bsts_1.h.a({ href: "#" }, "This link"),
                                "  can not be clicked because the {{pointer-events}} property is inherited from its parent. However, ",
                                new bsts_1.h.a({ href: "#", pointerEvent: "auto" }, "this link"),
                                " has a {{pe-auto}} class and can be clicked.",
                            ]),
                        ];
                    },
                }),
                new e.text("The {{.pe-none}} class (and the {{pointer-events}} CSS property it sets) only prevents interactions with a pointer (mouse, stylus, touch). Links and controls with {{.pe-none}} are, by default, still focusable and actionable for keyboard users. To ensure that they are completely neutralized even for keyboard users, you may need to add further attributes such as {{tabindex='-1'}} (to prevent them from receiving keyboard focus) and {{aria-disabled='true'}} (to convey the fact they are effectively disabled to assistive technologies), and possibly use JavaScript to completely prevent them from being actionable."),
                new e.text("If possible, the simpler solution is:"),
                new e.ul({
                    item: [
                        "For form controls, add the {{disabled}} HTML attribute.",
                        "For links, remove the {{href}} attribute, making it a non-interactive anchor or placeholder link.",
                    ],
                }),
            ]),
            //----------------------
            new e.section([new e.title("Sass")]),
            //----------------------
            new e.section([
                new e.subtitle("Utilities API"),
                new e.text("Interaction utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_utilities.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
                    code: `
						"user-select": (
						property: user-select,
						values: all auto none
						),
						"pointer-events": (
						property: pointer-events,
						class: pe,
						values: none auto,
						),
					`,
                }),
            ]),
        ];
    },
};

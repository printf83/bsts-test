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
exports.stacks = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.stacks = {
    title: "Stacks",
    description: "Shorthand helpers that build on top of Bootstrap flexbox utilities to make component layout faster and easier than ever.",
    item: () => {
        return [
            new e.section([
                new e.text("Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Bootstrap. All credit for the concept and implementation goes to the open source {{https://almonk.github.io/pylon/::Pylon project}}."),
                new e.alert({ color: "info", callout: true }, "{{b::Heads up! }}Support for gap utilities with flexbox was recently added to Safari, so consider verifying your intended browser support. Grid layout should have no issues. {{https://caniuse.com/flexbox-gap::Read more}}."),
            ]),
            //----------------------
            new e.section([
                new e.title("Vertical"),
                new e.text("Use {{.vstack}} to create vertical layouts. Stacked items are full-width by default. Use {{.gap-*}} utilities to add space between items."),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return new bsts_1.h.div({ vstack: true, gap: 3 }, [
                            new bsts_1.h.div({ padding: 2 }, "First item"),
                            new bsts_1.h.div({ padding: 2 }, "Second item"),
                            new bsts_1.h.div({ padding: 2 }, "Third item"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Horizontal"),
                new e.text("Use {{.hstack}} for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use {{.gap-*}} utilities to add space between items."),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return new bsts_1.h.div({ hstack: true, gap: 3 }, [
                            new bsts_1.h.div({ padding: 2 }, "First item"),
                            new bsts_1.h.div({ padding: 2 }, "Second item"),
                            new bsts_1.h.div({ padding: 2 }, "Third item"),
                        ]);
                    },
                }),
                new e.text("Using horizontal margin utilities like {{.ms-auto}} as spacers:"),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return new bsts_1.h.div({ hstack: true, gap: 3 }, [
                            new bsts_1.h.div({ padding: 2 }, "First item"),
                            new bsts_1.h.div({ padding: 2, marginStart: "auto" }, "Second item"),
                            new bsts_1.h.div({ padding: 2 }, "Third item"),
                        ]);
                    },
                }),
                new e.text("And with {{nav:docs/helpers/vertical_rule::vertical rules}}:"),
                new e.code({
                    outputAttr: { class: "flex-box" },
                    output: () => {
                        return new bsts_1.h.div({ hstack: true, gap: 3 }, [
                            new bsts_1.h.div({ padding: 2 }, "First item"),
                            new bsts_1.h.div({ padding: 2 }, "Second item"),
                            new bsts_1.b.verticalrule(),
                            new bsts_1.h.div({ padding: 2 }, "Third item"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Examples"),
                new e.text("Use {{.vstack}} to stack buttons and other elements:"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ vstack: true, gap: 3, col: "md-5", marginX: "auto" }, [
                            new bsts_1.b.button({ color: "secondary" }, "Save changes"),
                            new bsts_1.b.button({ color: "secondary", outline: true }, "Cancel"),
                        ]);
                    },
                }),
                new e.text("Create an inline form with {{.hstack}}:"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ hstack: true, gap: 3 }, [
                            new bsts_1.b.input({
                                marginEnd: "auto",
                                placeholder: "Add your item here...",
                                label: "Add your item here...",
                            }),
                            new bsts_1.b.button({ color: "secondary" }, "Submit"),
                            new bsts_1.b.verticalrule(),
                            new bsts_1.b.button({ color: "danger", outline: true }, "Reset"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("CSS"),
                new e.codepreview({
                    type: "css",
                    title: "scss/helpers/_stacks.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/helpers/_stacks.scss",
                    code: `
						.hstack {
						display: flex;
						flex-direction: row;
						align-items: center;
						align-self: stretch;
						}

						.vstack {
						display: flex;
						flex: 1 1 auto;
						flex-direction: column;
						align-self: stretch;
						}
					`,
                }),
            ]),
        ];
    },
};

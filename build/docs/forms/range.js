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
exports.range = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.range = {
    title: "Range",
    description: "Use Bootstrap custom range inputs for consistent cross-browser styling and built-in customization.",
    item: () => {
        return [
            new e.section([
                new e.title("Overview"),
                new e.text("Create custom {{<input type='range'>}} controls with {{.form-range}}. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress, Bootstrap do not currently support it."),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.b.label({ for: "customRange1", class: "form-label" }, "Example range"),
                            new bsts_1.b.input({ type: "range", id: "customRange1" }),
                        ];
                    },
                }),
                new e.text("Using {{item}} to setup option"),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.input({
                            label: "Example range",
                            type: "range",
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Disabled"),
                new e.text("Add the {{disabled}} boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing."),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.input({
                            label: "Disabled range",
                            type: "range",
                            disabled: true,
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Min and max"),
                new e.text("Range inputs have implicit values for {{min}} and {{max}}—{{0}} and {{100}}, respectively. You may specify new values for those using the {{min}} and {{max}} attributes."),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.input({
                            label: "Example range",
                            type: "range",
                            min: 0,
                            max: 5,
                            value: 4,
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Steps"),
                new e.text("By default, range inputs “snap” to integer values. To change this, you can specify a {{step}} value. In the example below, Bootstrap double the number of steps by using {{step='0.5'}}."),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.input({
                            label: "Example range",
                            type: "range",
                            min: 0,
                            max: 5,
                            step: 0.5,
                            value: 4,
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("CSS")]),
            //----------------------
            new e.section([
                new e.subtitle("Sass variables"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$form-range-track-width:          100%;
						$form-range-track-height:         .5rem;
						$form-range-track-cursor:         pointer;
						$form-range-track-bg:             var(--#{$prefix}tertiary-bg);
						$form-range-track-border-radius:  1rem;
						$form-range-track-box-shadow:     $box-shadow-inset;

						$form-range-thumb-width:                   1rem;
						$form-range-thumb-height:                  $form-range-thumb-width;
						$form-range-thumb-bg:                      $component-active-bg;
						$form-range-thumb-border:                  0;
						$form-range-thumb-border-radius:           1rem;
						$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1);
						$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow;
						$form-range-thumb-focus-box-shadow-width:  $input-focus-width; // For focus box shadow issue in Edge
						$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%);
						$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color);
						$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
					`,
                }),
            ]),
        ];
    },
};

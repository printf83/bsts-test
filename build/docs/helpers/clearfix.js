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
exports.clearfix = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.clearfix = {
    title: "Clearfix",
    description: "Quickly and easily clear floated content within a container by adding a clearfix utility.",
    item: () => {
        return [
            new e.section([
                new e.text("Easily clear {{floats}} by adding {{.clearfix}}{{b:: to the parent element}}. Can also be used as a mixin."),
                new e.text("Use in HTML:"),
                new e.codepreview({
                    type: "html",
                    code: `<div class="clearfix">...</div>`,
                }),
                new e.text("The mixin source code:"),
                new e.codepreview({
                    type: "css",
                    title: "scss/mixins/clearfix.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/clearfix.scss",
                    code: `
						@mixin clearfix() {
						&::after {
							display: block;
							clear: both;
							content: "";
						}
						}
					`,
                }),
                new e.text("Use the mixin in SCSS:"),
                new e.codepreview({
                    type: "css",
                    code: `
						.element {
						@include clearfix;
						}

					`,
                }),
                new e.text("The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ bgColor: "info", clearfix: true }, [
                            new bsts_1.b.button({ float: "start", color: "secondary" }, "Example button floated left"),
                            new bsts_1.b.button({ float: "end", color: "secondary" }, "Example button floated right"),
                        ]);
                    },
                }),
                new e.text("Without clearfix, it will look like this:"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ bgColor: "info" }, [
                            new bsts_1.b.button({ float: "start", color: "secondary" }, "Example button floated left"),
                            new bsts_1.b.button({ float: "end", color: "secondary" }, "Example button floated right"),
                        ]);
                    },
                }),
            ]),
        ];
    },
};

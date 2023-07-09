"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = exports.preview = void 0;
const bsts_1 = require("@printf83/bsts");
const _fn_js_1 = require("./_fn.js");
const convert = (attr) => {
    attr = bsts_1.core.mergeObject({
        class: "example-preview",
        display: "block",
        overflow: "auto",
        tabindex: 0,
        marginX: 0,
        marginY: 1,
    }, attr);
    attr.elem = new bsts_1.h.code({ class: ["prettyprint", `lang-${attr.type}`], lang: attr.type, border: false }, attr.elem ? (typeof attr.elem === "string" ? (0, _fn_js_1.codeBeautify)(attr.type, attr.elem) : attr.elem) : "");
    delete attr.type;
    return attr;
};
class preview extends bsts_1.h.pre {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.preview = preview;
const Preview = (AttrOrElem, Elem) => bsts_1.core.genTagClass(preview, AttrOrElem, Elem);
exports.Preview = Preview;

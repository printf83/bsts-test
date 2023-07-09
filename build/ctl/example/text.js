"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.text = void 0;
const bsts_1 = require("@printf83/bsts");
const convert = (attr) => {
    attr.class = bsts_1.core.mergeClass(attr.class, "example-text");
    return attr;
};
class text extends bsts_1.h.p {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.text = text;
const Text = (AttrOrElem, Elem) => bsts_1.core.genTagClass(text, AttrOrElem, Elem);
exports.Text = Text;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ol = exports.ol = void 0;
const bsts_1 = require("@printf83/bsts");
const convert = (attr) => {
    var _a;
    let tAttr = {};
    tAttr.class = "example-ol";
    (_a = tAttr.marginBottom) !== null && _a !== void 0 ? _a : (tAttr.marginBottom = 3);
    tAttr.elem = new bsts_1.h.ol(attr);
    return tAttr;
};
class ol extends bsts_1.h.div {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.ol = ol;
const Ol = (AttrOrElem, Elem) => bsts_1.core.genTagClass(ol, AttrOrElem, Elem);
exports.Ol = Ol;

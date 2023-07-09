"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ul = exports.ul = void 0;
const bsts_1 = require("@printf83/bsts");
const convert = (attr) => {
    var _a;
    let tAttr = {};
    tAttr.class = "example-ul";
    (_a = tAttr.marginBottom) !== null && _a !== void 0 ? _a : (tAttr.marginBottom = 3);
    tAttr.elem = new bsts_1.h.ul(attr);
    return tAttr;
};
class ul extends bsts_1.h.div {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.ul = ul;
const Ul = (AttrOrElem, Elem) => bsts_1.core.genTagClass(ul, AttrOrElem, Elem);
exports.Ul = Ul;

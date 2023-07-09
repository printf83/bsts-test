"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.item = void 0;
const bsts_1 = require("@printf83/bsts");
const convert = (attr) => {
    var _a;
    attr.class = bsts_1.core.mergeClass(attr.class, "example-item");
    (_a = attr.marginBottom) !== null && _a !== void 0 ? _a : (attr.marginBottom = 3);
    return attr;
};
class item extends bsts_1.h.div {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.item = item;
const Item = (AttrOrElem, Elem) => bsts_1.core.genTagClass(item, AttrOrElem, Elem);
exports.Item = Item;

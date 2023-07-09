"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.table = void 0;
const bsts_1 = require("@printf83/bsts");
const convert = (attr) => {
    var _a, _b, _c, _d;
    let tAttr = {};
    tAttr.class = "example-table";
    (_a = tAttr.marginBottom) !== null && _a !== void 0 ? _a : (tAttr.marginBottom = 3);
    attr.class = bsts_1.core.mergeClass(attr.class, "small");
    (_b = attr.responsiveAttr) !== null && _b !== void 0 ? _b : (attr.responsiveAttr = "bs-title-name");
    (_c = attr.responsiveCol) !== null && _c !== void 0 ? _c : (attr.responsiveCol = "15ch auto");
    (_d = attr.responsiveColXs) !== null && _d !== void 0 ? _d : (attr.responsiveColXs = "auto");
    tAttr.elem = new bsts_1.b.table.container(attr);
    return tAttr;
};
class table extends bsts_1.b.table.responsive {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.table = table;
const Table = (AttrOrElem, Elem) => bsts_1.core.genTagClass(table, AttrOrElem, Elem);
exports.Table = Table;

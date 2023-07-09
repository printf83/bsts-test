"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = exports.alert = void 0;
const bsts_1 = require("@printf83/bsts");
const convert = (attr) => {
    var _a;
    let tAttr = {};
    tAttr.class = "example-alert";
    (_a = tAttr.marginBottom) !== null && _a !== void 0 ? _a : (tAttr.marginBottom = 3);
    tAttr.elem = new bsts_1.b.alert.container(attr);
    return tAttr;
};
class alert extends bsts_1.h.div {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.alert = alert;
const Alert = (AttrOrElem, Elem) => bsts_1.core.genTagClass(alert, AttrOrElem, Elem);
exports.Alert = Alert;

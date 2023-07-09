"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xsubtitle = exports.xsubtitle = void 0;
const bsts_1 = require("@printf83/bsts");
const genIDFromElem = (attr) => {
    if (!attr.id) {
        if (typeof attr.elem === "string") {
            attr.id = attr.elem.toLowerCase().replace(/[\W_]+/g, "_");
        }
        else {
            attr.id = bsts_1.core.UUID();
        }
    }
    return attr.id;
};
const convert = (attr) => {
    var _a;
    (_a = attr.id) !== null && _a !== void 0 ? _a : (attr.id = genIDFromElem(attr));
    attr = bsts_1.core.mergeObject({ class: "example-xsubtitle", marginTop: 5, marginBottom: 3 }, attr);
    if (attr.elem) {
        let strElem = "";
        if (typeof attr.elem === "string") {
            strElem = attr.elem;
        }
        else {
            strElem = `#${attr.id}`;
        }
        let tElem = [];
        if (Array.isArray(attr.elem)) {
            tElem = attr.elem;
        }
        else {
            tElem = [attr.elem];
        }
        tElem.push(new bsts_1.h.a({
            class: "anchor-link",
            href: `#${attr.id}`,
            aria: { label: `Link to this section: ${strElem}` },
        }, ""));
        attr.elem = tElem;
    }
    delete attr.id;
    return attr;
};
class xsubtitle extends bsts_1.h.h {
    constructor(...arg) {
        super(4, convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.xsubtitle = xsubtitle;
const Xsubtitle = (AttrOrElem, Elem) => bsts_1.core.genTagClass(xsubtitle, AttrOrElem, Elem);
exports.Xsubtitle = Xsubtitle;

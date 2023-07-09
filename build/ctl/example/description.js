"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Description = exports.description = void 0;
const bsts_1 = require("@printf83/bsts");
const convert = (attr) => {
    attr = bsts_1.core.mergeObject({ class: "example-description", lead: true }, attr);
    return attr;
};
class description extends bsts_1.h.p {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.description = description;
const Description = (AttrOrElem, Elem) => bsts_1.core.genTagClass(description, AttrOrElem, Elem);
exports.Description = Description;

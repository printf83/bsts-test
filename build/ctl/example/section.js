"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = exports.section = void 0;
const bsts_1 = require("@printf83/bsts");
const genIDFromText = (text) => {
    return text.toLowerCase().replace(/[\W_]+/g, "_");
};
const hasClass = (className, attrClass) => {
    if (attrClass) {
        return attrClass.indexOf(className) > -1;
    }
    else {
        return false;
    }
};
const convert = (attr) => {
    var _a, _b, _c;
    let tElem = attr.elem;
    if (tElem) {
        if (!Array.isArray(tElem)) {
            tElem = [tElem];
        }
    }
    else {
        tElem = [];
    }
    //get info from elem
    if (tElem && tElem.length > 0) {
        const firstElem = tElem[0];
        if (firstElem) {
            let titleDeep = undefined;
            if (hasClass("example-title", (_a = firstElem.attr) === null || _a === void 0 ? void 0 : _a.class)) {
                titleDeep = 0;
            }
            else if (hasClass("example-subtitle", (_b = firstElem.attr) === null || _b === void 0 ? void 0 : _b.class)) {
                titleDeep = 1;
            }
            else if (hasClass("example-xsubtitle", (_c = firstElem.attr) === null || _c === void 0 ? void 0 : _c.class)) {
                titleDeep = 2;
            }
            let titleText = undefined;
            if (titleDeep !== undefined) {
                if (typeof firstElem.elem === "string") {
                    titleText = firstElem.elem;
                }
                else {
                    if (Array.isArray(firstElem.elem)) {
                        if (firstElem.elem.length > 0) {
                            if (typeof firstElem.elem[0] === "string") {
                                titleText = firstElem.elem[0];
                            }
                            else {
                                titleDeep = undefined;
                            }
                        }
                        else {
                            titleDeep = undefined;
                        }
                    }
                    else {
                        titleDeep = undefined;
                    }
                }
            }
            if (titleDeep !== undefined && titleText !== undefined) {
                attr = bsts_1.core.mergeObject({
                    class: "example-section",
                    id: genIDFromText(titleText),
                    data: {
                        title: titleText,
                        deep: titleDeep,
                    },
                }, attr);
            }
        }
    }
    else {
        attr = bsts_1.core.mergeObject({ class: "example-section" }, attr);
    }
    return attr;
};
class section extends bsts_1.h.section {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.section = section;
const Section = (AttrOrElem, Elem) => bsts_1.core.genTagClass(section, AttrOrElem, Elem);
exports.Section = Section;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codepreview = exports.codepreview = void 0;
const bsts_1 = require("@printf83/bsts");
const preview_js_1 = require("./preview.js");
function successCopyCode(iconElem) {
    if (iconElem) {
        iconElem.classList.remove("bi-clipboard");
        iconElem.classList.add("bi-check2");
        iconElem.classList.add("text-success");
        setTimeout((iconElem) => {
            iconElem.classList.remove("text-success");
            iconElem.classList.remove("bi-check2");
            iconElem.classList.add("bi-clipboard");
        }, 1000, iconElem);
    }
}
function failCopyCode(iconElem) {
    if (iconElem) {
        iconElem.classList.remove("bi-clipboard");
        iconElem.classList.add("bi-exclamation-triangle");
        iconElem.classList.add("text-danger");
        setTimeout((iconElem) => {
            iconElem.classList.remove("text-danger");
            iconElem.classList.remove("bi-exclamation-triangle");
            iconElem.classList.add("bi-clipboard");
        }, 1000, iconElem);
    }
}
function itemCodeCopy(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const target = e.target;
    const iconElem = target.closest(".bi");
    const card = target.closest(".card");
    if (card) {
        const text = card.getElementsByTagName("pre")[0].innerText;
        navigator.clipboard.writeText(text).then(() => {
            successCopyCode(iconElem);
        }, () => {
            failCopyCode(iconElem);
        });
    }
    else {
        failCopyCode(iconElem);
    }
    return false;
}
const convert = (attr) => {
    if (attr.code) {
        const copyButton = new bsts_1.h.a({
            color: "body-secondary",
            linkHover: "link",
            title: "Copy to clipboard",
            on: { click: itemCodeCopy },
        }, bsts_1.b.icon.bi("clipboard"));
        const cardTitle = attr.title
            ? new bsts_1.b.card.header({
                padding: 0,
                display: "flex",
                justifyContent: "between",
                verticalAlign: "middle",
                bgColor: "body-tertiary",
            }, [
                new bsts_1.h.div({
                    paddingY: 2,
                    paddingX: 4,
                    flex: "fill",
                }, attr.source
                    ? new bsts_1.h.a({
                        textDecoration: "none",
                        href: attr.source,
                        target: "_blank",
                        color: "secondary",
                        linkHover: "link",
                        monospace: true,
                        textColor: "body-secondary",
                    }, new bsts_1.h.small(attr.title))
                    : new bsts_1.h.small({ monospace: true, textColor: "body-secondary" }, attr.title)),
                new bsts_1.h.div({ display: "flex" }, new bsts_1.h.div({ paddingTop: 2, paddingX: 4 }, copyButton)),
            ])
            : "";
        const cardBody = new bsts_1.b.card.body({ padding: 4 }, [
            !attr.title ? new bsts_1.h.span({ position: "absolute", end: 0, marginEnd: 4 }, copyButton) : "",
            new preview_js_1.preview({ type: attr.type ? attr.type : "js", marginEnd: 4 }, attr.code),
        ]);
        attr.elem = [
            new bsts_1.b.card.container({
                class: "example-preview",
                marginY: 3,
                bgColor: !attr.title ? "body-secondary" : "body-tertiary",
                bgOpacity: !attr.title ? 75 : undefined,
                border: !attr.title ? false : undefined,
            }, [cardTitle, cardBody]),
        ];
    }
    delete attr.code;
    delete attr.type;
    delete attr.title;
    delete attr.source;
    return attr;
};
class codepreview extends bsts_1.h.div {
    constructor(...arg) {
        super(bsts_1.core.bsConsNoElemArg(convert, arg));
    }
}
exports.codepreview = codepreview;
const Codepreview = (Attr) => bsts_1.core.genTagClass(codepreview, Attr);
exports.Codepreview = Codepreview;

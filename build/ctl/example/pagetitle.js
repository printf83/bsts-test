"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagetitle = exports.pagetitle = void 0;
const bsts_1 = require("@printf83/bsts");
const convert = (attr) => {
    attr = bsts_1.core.mergeObject({
        class: "example-pagetitle",
        display: "md-flex",
        flex: "md-row-reverse",
        alignItem: "center",
        justifyContent: "between",
        data: {
            "bs-docid": attr.docId,
        },
    }, attr);
    let tElem = [];
    if (attr.loading) {
        tElem.push(new bsts_1.h.div({ marginBottom: [3, "md-0"], display: "flex" }, [
            new bsts_1.h.a({
                class: "btn btn-sm",
                focusRing: true,
                linkNormal: "secondary",
                linkBorder: "secondary",
                linkHover: "link",
                linkHoverBorder: "link",
                href: "#",
                loadingPlaceholder: true,
            }, "View on Github"),
        ]));
        attr.marginBottom = 3;
    }
    //is update
    if (attr.sourceUrl || attr.addedVersion) {
        tElem.push(new bsts_1.b.btngroup({ marginBottom: [3, "md-0"] }, [
            attr.addedVersion
                ? new bsts_1.h.a({
                    class: "btn btn-sm btn-outline-success",
                    linkNormal: "success",
                    linkBorder: "success",
                    pointerEvent: "none",
                }, `Added in v${attr.addedVersion}`)
                : "",
            attr.sourceUrl
                ? new bsts_1.h.a({
                    class: "btn btn-sm",
                    focusRing: true,
                    linkNormal: "secondary",
                    linkBorder: "secondary",
                    linkHover: "link",
                    linkHoverBorder: "link",
                    href: attr.sourceUrl,
                    title: `View and edit this file on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`,
                    target: "_blank",
                }, `View on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`)
                : "",
            attr.docId
                ? new bsts_1.h.a({
                    class: ["btn", "btn-sm", attr.bookmark ? "active" : undefined],
                    focusRing: true,
                    linkNormal: attr.bookmark ? "link" : "secondary",
                    linkBorder: attr.bookmark ? "link" : "secondary",
                    linkHover: attr.bookmark ? "secondary" : "link",
                    linkHoverBorder: attr.bookmark ? "secondary" : "link",
                    title: `Add to bookmark`,
                    on: {
                        click: (e) => {
                            const target = e.target.closest(".btn");
                            const icon = target.querySelector("i.bi");
                            if (target.classList.contains("active")) {
                                target.removeAttribute("aria-pressed");
                                target.classList.remove("active");
                                target.classList.remove("link-normal-link");
                                target.classList.remove("link-border-link");
                                target.classList.remove("link-hover-secondary");
                                target.classList.remove("link-hover-border-secondary");
                                target.classList.add("link-normal-secondary");
                                target.classList.add("link-border-secondary");
                                target.classList.add("link-hover-link");
                                target.classList.add("link-hover-border-link");
                                icon.classList.remove("bi-pin-fill");
                                icon.classList.add("bi-pin-angle-fill");
                            }
                            else {
                                target.setAttribute("aria-pressed", "true");
                                target.classList.add("active");
                                target.classList.remove("link-normal-secondary");
                                target.classList.remove("link-border-secondary");
                                target.classList.remove("link-hover-link");
                                target.classList.remove("link-hover-border-link");
                                target.classList.add("link-normal-link");
                                target.classList.add("link-border-link");
                                target.classList.add("link-hover-secondary");
                                target.classList.add("link-hover-border-secondary");
                                icon.classList.remove("bi-pin-angle-fill");
                                icon.classList.add("bi-pin-fill");
                            }
                            const container = target.closest(".example-pagetitle");
                            if (container) {
                                container.dispatchEvent(new CustomEvent("toggle.bs.bookmark", {
                                    detail: target.classList.contains("active"),
                                }));
                            }
                        },
                    },
                }, new bsts_1.b.icon({
                    handleBubble: false,
                    id: attr.bookmark ? "pin-fill" : "pin-angle-fill",
                }))
                : "",
        ]));
    }
    if (attr.elem) {
        tElem.push(new bsts_1.h.h(1, {
            fontDisplay: 5,
            fontWeight: "normal",
            marginBottom: 0,
            class: "page-title-text",
            loadingPlaceholderAnimation: attr.loading ? "wave" : undefined,
            col: attr.loading ? 6 : undefined,
        }, attr.elem));
    }
    if (tElem) {
        attr.elem = tElem;
    }
    delete attr.bookmark;
    delete attr.docId;
    delete attr.loading;
    delete attr.sourceUrl;
    delete attr.sourceWeb;
    delete attr.addedVersion;
    return attr;
};
class pagetitle extends bsts_1.h.div {
    constructor(...arg) {
        super(convert(bsts_1.core.bsConstArg("elem", arg)));
    }
}
exports.pagetitle = pagetitle;
const Pagetitle = (AttrOrElem, Elem) => bsts_1.core.genTagClass(pagetitle, AttrOrElem, Elem);
exports.Pagetitle = Pagetitle;

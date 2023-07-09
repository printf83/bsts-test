"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = exports.code = void 0;
const bsts_1 = require("@printf83/bsts");
const preview_js_1 = require("./preview.js");
const _fn_js_1 = require("./_fn.js");
const BSTSCDN = "https://cdn.jsdelivr.net/npm/@printf83/bsts@0.2.0/+esm";
const BSCDNCSS = [
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
];
const getOutputHTML = (target, autoPrettyPrint) => {
    var _a;
    autoPrettyPrint !== null && autoPrettyPrint !== void 0 ? autoPrettyPrint : (autoPrettyPrint = true);
    let html = (_a = target.closest(".example-code")) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("example-output")[0].innerHTML;
    bsts_1.core.replaceChild(target, new preview_js_1.preview({ type: "html" }, html ? html : ""));
    if (autoPrettyPrint) {
        bsts_1.core.requestIdleCallback(() => {
            PR.prettyPrint();
        }, 300);
    }
};
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
    const listGroupItem = target.closest(".list-group-item");
    if (listGroupItem) {
        const nextListGroupItem = listGroupItem.nextElementSibling;
        if (nextListGroupItem) {
            try {
                //check if pre tag exists
                let preTag = nextListGroupItem.getElementsByTagName("pre");
                if (!preTag || preTag.length === 0) {
                    //try raiseEvent listgroupitem
                    nextListGroupItem.dispatchEvent(new CustomEvent("load.bs.collapse"));
                    setTimeout((iconElem, preTag, nextListGroupItem) => {
                        preTag = nextListGroupItem.getElementsByTagName("pre");
                        const text = preTag[0].innerText;
                        navigator.clipboard.writeText(text).then(() => {
                            successCopyCode(iconElem);
                        }, () => {
                            failCopyCode(iconElem);
                        });
                    }, 300, iconElem, preTag, nextListGroupItem);
                }
                else {
                    const text = preTag[0].innerText;
                    navigator.clipboard.writeText(text).then(() => {
                        successCopyCode(iconElem);
                    }, () => {
                        failCopyCode(iconElem);
                    });
                }
            }
            catch (error) {
                failCopyCode(iconElem);
            }
        }
        else {
            failCopyCode(iconElem);
        }
    }
    else {
        failCopyCode(iconElem);
    }
    return;
}
function successClearConsoleLog(iconElem) {
    if (iconElem) {
        iconElem.classList.remove("bi-trash3");
        iconElem.classList.add("bi-check2");
        iconElem.classList.add("text-success");
        setTimeout((iconElem) => {
            iconElem.classList.remove("text-success");
            iconElem.classList.remove("bi-check2");
            iconElem.classList.add("bi-trash3");
        }, 1000, iconElem);
    }
}
function clearConsoleLog(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const target = e.target;
    const iconElem = target.closest(".bi");
    const listGroupItem = target.closest(".list-group-item");
    if (listGroupItem) {
        const nextListGroupItem = listGroupItem.nextElementSibling;
        if (nextListGroupItem) {
            const exampleConsole = nextListGroupItem.getElementsByClassName("example-console")[0];
            while (exampleConsole.firstChild) {
                exampleConsole.firstChild.remove();
            }
            successClearConsoleLog(iconElem);
        }
    }
    return;
}
function addConsoleLog(elem, title, msg, color) {
    const exampleConsole = elem.getElementsByClassName("example-console")[0];
    if (exampleConsole) {
        //add log
        const n = new Date();
        const hour = n.getHours();
        const minute = n.getMinutes();
        const second = n.getSeconds();
        const strNow = `${(hour >= 12 ? hour - 12 : hour === 0 ? 12 : hour).toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}:${second.toString().padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`;
        bsts_1.core.prependChild(exampleConsole, new bsts_1.h.div({
            display: "flex",
            flex: ["column", "md-row"],
            textColor: "light",
            gap: [0, "md-2"],
            marginBottom: [3, "md-0"],
        }, [
            new bsts_1.h.span({ textColor: "secondary", textWrap: false }, `[${strNow}]`),
            new bsts_1.h.span({ textColor: color }, `{{b::${title}}}`),
            new bsts_1.h.span(`${msg}`),
        ]));
        //show notification
        const listGroupItem = exampleConsole.closest(".list-group-item");
        if (listGroupItem) {
            if (!listGroupItem.classList.contains("show")) {
                const codeContainer = listGroupItem.closest(".example-code");
                if (codeContainer) {
                    const noti = codeContainer.getElementsByClassName("example-console-notification")[0];
                    if (noti) {
                        const hash = bsts_1.core.UUID();
                        noti.setAttribute("bs-hash", hash);
                        noti.classList.add("active");
                        setTimeout((noti, hash) => {
                            if (noti.getAttribute("bs-hash") === hash) {
                                noti.classList.remove("active");
                            }
                        }, 5000, noti, hash);
                    }
                }
            }
        }
    }
}
const itemCode = (arg) => {
    var _a, _b, _c, _d, _e;
    (_a = arg.header) !== null && _a !== void 0 ? _a : (arg.header = true);
    (_b = arg.collapseable) !== null && _b !== void 0 ? _b : (arg.collapseable = true);
    (_c = arg.allowcopy) !== null && _c !== void 0 ? _c : (arg.allowcopy = true);
    (_d = arg.allowrefresh) !== null && _d !== void 0 ? _d : (arg.allowrefresh = false);
    (_e = arg.islast) !== null && _e !== void 0 ? _e : (arg.islast = false);
    let id = bsts_1.core.UUID();
    let res = [];
    if (arg.header) {
        res.push(new bsts_1.b.list.item({
            padding: 0,
            bgColor: "body-tertiary",
            display: "flex",
            justifyContent: "between",
            verticalAlign: "middle",
            rounded: arg.islast && arg.collapseable ? "bottom-2" : undefined,
        }, [
            new bsts_1.h.div({
                paddingY: 2,
                paddingX: 4,
                flex: "fill",
                controlfor: arg.collapseable ? id : undefined,
                data: {
                    "bs-toggle": arg.collapseable ? "collapse" : undefined,
                    "bs-target": arg.collapseable ? `#${id}` : undefined,
                },
                aria: {
                    expended: arg.collapseable ? "false" : undefined,
                },
                monospace: true,
                textColor: "body-secondary",
            }, new bsts_1.h.small(arg.title)),
            arg.onedit
                ? new bsts_1.h.div({ display: "flex" }, new bsts_1.h.div({
                    paddingTop: 2,
                    paddingStart: 4,
                    paddingEnd: arg.allowcopy || arg.allowrefresh ? 2 : 4,
                }, new bsts_1.h.a({
                    color: "secondary",
                    linkHover: "link",
                    title: "Edit on CodePen",
                    on: { click: arg.onedit },
                }, bsts_1.b.icon.bi("lightning-charge-fill"))))
                : "",
            arg.allowrefresh
                ? new bsts_1.h.div({ display: "flex" }, new bsts_1.h.div({
                    paddingTop: 2,
                    paddingStart: 4,
                    paddingEnd: arg.onedit || arg.allowcopy ? 2 : 4,
                }, new bsts_1.h.a({
                    color: "secondary",
                    title: "Refresh code",
                    linkHover: "link",
                    on: {
                        click: (e) => {
                            var _a;
                            const target = e.target;
                            const iconElem = target.closest(".bi");
                            const container = (_a = target.closest(".list-group-item")) === null || _a === void 0 ? void 0 : _a.nextSibling;
                            container.setAttribute("data-loaded", "true");
                            getOutputHTML(container);
                            if (iconElem) {
                                iconElem.classList.remove("arrow-clockwise");
                                iconElem.classList.add("bi-check2");
                                iconElem.classList.add("text-success");
                                setTimeout((iconElem) => {
                                    iconElem.classList.remove("text-success");
                                    iconElem.classList.remove("bi-check2");
                                    iconElem.classList.add("arrow-clockwise");
                                }, 1000, iconElem);
                            }
                        },
                    },
                }, bsts_1.b.icon.bi("arrow-clockwise"))))
                : "",
            arg.allowcopy
                ? new bsts_1.h.div({ display: "flex" }, new bsts_1.h.div({
                    paddingTop: 2,
                    paddingEnd: 4,
                    paddingStart: arg.onedit || arg.allowrefresh ? 2 : 4,
                }, new bsts_1.h.a({
                    color: "secondary",
                    linkHover: "link",
                    title: "Copy to clipboard",
                    on: { click: itemCodeCopy },
                }, bsts_1.b.icon.bi("clipboard"))))
                : "",
        ]));
    }
    else {
        if (arg.allowcopy || arg.onedit) {
            if (!Array.isArray(arg.elem)) {
                arg.elem = [arg.elem];
            }
            arg.elem.unshift(new bsts_1.h.div({ position: "absolute", end: 0, marginEnd: 3 }, [
                arg.onedit
                    ? new bsts_1.h.a({
                        href: "#",
                        color: "secondary",
                        linkHover: "link",
                        marginEnd: arg.allowcopy ? 2 : 0,
                        title: "Edit on CodePen",
                        on: { click: arg.onedit },
                    }, bsts_1.b.icon.bi("lightning-charge-fill"))
                    : "",
                arg.allowcopy
                    ? new bsts_1.h.a({
                        href: "#",
                        color: "secondary",
                        linkHover: "link",
                        title: "Copy to clipboard",
                        on: { click: itemCodeCopy },
                    }, bsts_1.b.icon.bi("clipboard"))
                    : "",
            ]));
        }
    }
    res.push(new bsts_1.b.list.item({
        bgColor: "body-tertiary",
        paddingX: 4,
        class: [arg.collapseable ? "collapse" : undefined],
        id: arg.collapseable ? id : undefined,
        on: {
            "load.bs.collapse": arg.islast && !arg.allowrefresh
                ? (e) => {
                    const target = e.target;
                    bsts_1.core.replaceChild(target, arg.elem);
                }
                : !arg.islast && arg.allowrefresh
                    ? (e) => {
                        const target = e.target;
                        getOutputHTML(target, false);
                    }
                    : arg.islast && arg.allowrefresh
                        ? (e) => {
                            const target = e.target;
                            getOutputHTML(target, false);
                        }
                        : (e) => {
                            const target = e.target;
                            bsts_1.core.replaceChild(target, arg.elem);
                        },
            "show.bs.collapse": arg.islast && !arg.allowrefresh
                ? (e) => {
                    var _a;
                    const target = e.target;
                    ((_a = target.closest(".list-group-item")) === null || _a === void 0 ? void 0 : _a.previousSibling).classList.remove("rounded-bottom-2");
                    bsts_1.core.replaceChild(target, arg.elem);
                    bsts_1.core.requestIdleCallback(() => {
                        PR.prettyPrint();
                    }, 300);
                }
                : !arg.islast && arg.allowrefresh
                    ? (e) => {
                        const target = e.target;
                        getOutputHTML(target);
                    }
                    : arg.islast && arg.allowrefresh
                        ? (e) => {
                            var _a;
                            const target = e.target;
                            ((_a = target.closest(".list-group-item")) === null || _a === void 0 ? void 0 : _a.previousSibling).classList.remove("rounded-bottom-2");
                            getOutputHTML(target);
                        }
                        : (e) => {
                            const target = e.target;
                            bsts_1.core.replaceChild(target, arg.elem);
                            bsts_1.core.requestIdleCallback(() => {
                                PR.prettyPrint();
                            }, 300);
                        },
            "hidden.bs.collapse": arg.islast
                ? (e) => {
                    var _a;
                    const target = e.target;
                    ((_a = target.closest(".list-group-item")) === null || _a === void 0 ? void 0 : _a.previousSibling).classList.add("rounded-bottom-2");
                    let preTag = target.getElementsByTagName("pre");
                    if (preTag && preTag.length > 0) {
                        preTag[0].remove();
                    }
                }
                : (e) => {
                    const target = e.target;
                    let preTag = target.getElementsByTagName("pre");
                    if (preTag && preTag.length > 0) {
                        preTag[0].remove();
                    }
                },
        },
    }, new bsts_1.h.div({ class: "example-preview" }, "Loading...")));
    return res;
};
const itemOutput = (zoom, previewAttr, outputAttr, str) => {
    if (previewAttr) {
        if (outputAttr) {
            return new bsts_1.b.list.item(bsts_1.core.mergeObject({ padding: 4 }, previewAttr), new bsts_1.h.div(bsts_1.core.mergeObject({ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] }, outputAttr), str));
        }
        else {
            return new bsts_1.b.list.item(bsts_1.core.mergeObject({ padding: 4 }, previewAttr), new bsts_1.h.div({ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] }, str));
        }
    }
    else {
        if (outputAttr) {
            return new bsts_1.b.list.item({ padding: 4 }, new bsts_1.h.div(bsts_1.core.mergeObject({ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] }, outputAttr), str));
        }
        else {
            return new bsts_1.b.list.item({ padding: 4 }, new bsts_1.h.div({ class: [`example-output`, zoom ? `zoom-${zoom}` : undefined] }, str));
        }
    }
};
const itemConsole = () => {
    let id = bsts_1.core.UUID();
    let res = [];
    res.push(new bsts_1.b.list.item({
        padding: 0,
        bgColor: "body-tertiary",
        display: "flex",
        justifyContent: "between",
        verticalAlign: "middle",
    }, [
        new bsts_1.h.div({
            paddingY: 2,
            paddingX: 4,
            flex: "fill",
            controlfor: id,
            data: {
                "bs-toggle": "collapse",
                "bs-target": `#${id}`,
            },
            aria: {
                expended: "false",
            },
            monospace: true,
            textColor: "body-secondary",
        }, new bsts_1.h.small("CONSOLE")),
        new bsts_1.h.div({ display: "flex" }, new bsts_1.h.div({ paddingTop: 2, paddingEnd: 2 }, new bsts_1.h.span({ class: "example-console-notification", textColor: "primary" }, bsts_1.b.icon.bi("asterisk")))),
        new bsts_1.h.div({ display: "flex" }, new bsts_1.h.div({ paddingTop: 2, paddingEnd: 4, paddingStart: 2 }, new bsts_1.h.a({
            color: "secondary",
            linkHover: "link",
            title: "Cleanup console",
            on: { click: clearConsoleLog },
        }, bsts_1.b.icon.bi("trash3")))),
    ]));
    res.push(new bsts_1.b.list.item({
        bgColor: "dark",
        padding: 4,
        class: "collapse",
        id: id,
    }, new bsts_1.h.div({
        monospace: true,
        small: true,
        overflow: "hidden",
    }, new bsts_1.h.div({
        class: "example-console",
        overflowY: "scroll",
        overflowX: "hidden",
        tabindex: 0,
        style: { height: "200px" },
    }, ""))));
    return res;
};
const itemViewport = () => {
    return new bsts_1.b.list.item({
        padding: 0,
        bgColor: "primary-subtle",
        display: "flex",
        justifyContent: "between",
        textColor: "primary-emphasis",
        verticalAlign: "middle",
        monospace: true,
    }, [
        new bsts_1.h.span({
            paddingY: 1,
            paddingX: 4,
            flex: "fill",
        }, new bsts_1.h.small("VIEW PORT")),
        new bsts_1.h.span({
            paddingY: 1,
            paddingX: 4,
        }, [
            new bsts_1.h.small([
                new bsts_1.h.span({
                    display: ["inline-block", "sm-none"],
                }, "XS"),
                new bsts_1.h.span({ display: ["sm-inline-block", "md-none", "none"] }, "SM"),
                new bsts_1.h.span({ display: ["md-inline-block", "lg-none", "none"] }, "MD"),
                new bsts_1.h.span({ display: ["lg-inline-block", "xl-none", "none"] }, "LG"),
                new bsts_1.h.span({ display: ["xl-inline-block", "xxl-none", "none"] }, "XL"),
                new bsts_1.h.span({ display: ["xxl-inline-block", "none"] }, "XXL"),
            ]),
        ]),
    ]);
};
const itemZoom = (zoom) => {
    return new bsts_1.b.list.item({
        padding: 0,
        bgColor: "primary-subtle",
        display: "flex",
        justifyContent: "between",
        textColor: "primary-emphasis",
        verticalAlign: "middle",
        monospace: true,
    }, [
        new bsts_1.h.span({
            paddingY: 1,
            paddingX: 4,
            flex: "fill",
        }, new bsts_1.h.small("ZOOM")),
        new bsts_1.h.span({
            paddingY: 1,
            paddingX: 4,
        }, [
            new bsts_1.h.small(new bsts_1.h.a({
                href: "#",
                textDecoration: "none",
                linkColor: "primary",
                data: { "bs-zoom": zoom },
                on: {
                    click: (event) => {
                        var _a;
                        const target = event.target;
                        const exampleOutput = (_a = target.closest(".card")) === null || _a === void 0 ? void 0 : _a.querySelector(".example-output");
                        if (exampleOutput) {
                            const val = target.getAttribute("data-bs-zoom");
                            if (val) {
                                switch (val) {
                                    case "25":
                                        exampleOutput.classList.remove("zoom-25");
                                        exampleOutput.classList.add("zoom-50");
                                        target.setAttribute("data-bs-zoom", "50");
                                        target.innerHTML = "50%";
                                        break;
                                    case "50":
                                        exampleOutput.classList.remove("zoom-50");
                                        exampleOutput.classList.add("zoom-75");
                                        target.setAttribute("data-bs-zoom", "75");
                                        target.innerHTML = "75%";
                                        break;
                                    case "75":
                                        exampleOutput.classList.remove("zoom-75");
                                        exampleOutput.classList.add("zoom-100");
                                        target.setAttribute("data-bs-zoom", "100");
                                        target.innerHTML = "100%";
                                        break;
                                    case "100":
                                        exampleOutput.classList.remove("zoom-100");
                                        exampleOutput.classList.add("zoom-125");
                                        target.setAttribute("data-bs-zoom", "125");
                                        target.innerHTML = "125%";
                                        break;
                                    case "125":
                                        exampleOutput.classList.remove("zoom-125");
                                        exampleOutput.classList.add("zoom-150");
                                        target.setAttribute("data-bs-zoom", "150");
                                        target.innerHTML = "150%";
                                        break;
                                    case "150":
                                        exampleOutput.classList.remove("zoom-150");
                                        exampleOutput.classList.add("zoom-200");
                                        target.setAttribute("data-bs-zoom", "200");
                                        target.innerHTML = "200%";
                                        break;
                                    case "200":
                                        exampleOutput.classList.remove("zoom-200");
                                        exampleOutput.classList.add("zoom-25");
                                        target.setAttribute("data-bs-zoom", "25");
                                        target.innerHTML = "25%";
                                        break;
                                }
                            }
                        }
                    },
                },
            }, `${zoom}%`)),
        ]),
    ]);
};
const generateCodePenData = (strLib, strCode, strManager, strExtention, strCSS, strRoot) => {
    let strCodeResult = "";
    if (strCode !== "") {
        let res = (0, _fn_js_1.replaceEConsole)(strCode);
        strCode = res.strCode;
        let strExt = null;
        if (strExtention && strExtention.length > 0) {
            strExt = strExtention.join("");
        }
        strCodeResult =
            "import { " +
                strLib +
                ' } from "' +
                BSTSCDN +
                '";\n' +
                (res.consoleFn ? res.consoleFn + "\n" : "") +
                (strExt ? strExt + "\n" : "") +
                (strManager ? "const MANAGER = " + strManager + ";\n" : "") +
                "const SOURCE = " +
                strCode +
                ';\ncore.documentReady(() => {\ncore.replaceChild(document.getElementById("root"), ' +
                (strManager ? "MANAGER(SOURCE())" : "SOURCE()") +
                ");\n});";
    }
    const result = {
        title: "Bootstrap TS",
        description: "Create bootstrap using TS/JS",
        private: false,
        tags: ["bsts", "Bootstrap TS", "@printf83/bsts"],
        editors: "001",
        layout: "top",
        css_external: BSCDNCSS,
        css: strCSS ? (0, _fn_js_1.codeBeautify)("css", strCSS) : undefined,
        head: (0, _fn_js_1.codeBeautify)("html", `<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">`),
        html: (0, _fn_js_1.codeBeautify)("html", strRoot ? strRoot : `<div class="p-4"><div id="root"></div></div>`),
        js: (0, _fn_js_1.codeBeautify)("js", strCodeResult),
    };
    return result;
};
const convert = (attr) => {
    var _a, _b, _c, _d, _e, _f;
    let id = bsts_1.core.UUID();
    (_a = attr.showOutput) !== null && _a !== void 0 ? _a : (attr.showOutput = true);
    (_b = attr.showScript) !== null && _b !== void 0 ? _b : (attr.showScript = true);
    (_c = attr.showHTML) !== null && _c !== void 0 ? _c : (attr.showHTML = true);
    (_d = attr.showManager) !== null && _d !== void 0 ? _d : (attr.showManager = true);
    (_e = attr.showCodepen) !== null && _e !== void 0 ? _e : (attr.showCodepen = attr.showScript);
    (_f = attr.scriptConverter) !== null && _f !== void 0 ? _f : (attr.scriptConverter = (str) => {
        return str
            .replace(/_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__\./gm, "")
            .replace(/_ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__\./gm, "e.")
            .replace(/chart_js_auto__WEBPACK_IMPORTED_MODULE_2__\[\"default\"\]\(/gm, "Chart(");
    });
    let e = [];
    if (attr.output && attr.showOutput) {
        if (attr.manager) {
            e.push(itemOutput(attr.zoom, attr.previewAttr, attr.outputAttr, attr.manager(attr.output())));
        }
        else {
            e.push(itemOutput(attr.zoom, attr.previewAttr, attr.outputAttr, attr.output()));
        }
    }
    if (attr.output && attr.zoom) {
        e.push(itemZoom(attr.zoom));
    }
    if (attr.output && attr.showOutput && attr.showViewport) {
        e.push(itemViewport());
    }
    if (attr.showConsole) {
        e.push(...itemConsole());
    }
    if (attr.output && attr.showOutput && attr.showHTML) {
        e.push(...itemCode({
            header: e.length > 0,
            allowrefresh: true,
            title: "HTML",
            elem: "Loading...",
        }));
    }
    let strCSS = undefined;
    if (attr.css) {
        const generatedCSS = (0, _fn_js_1.getCSSBaseOnSource)(attr.outputAttr);
        if (generatedCSS) {
            strCSS = `
			${attr.css}
			
			${generatedCSS}
			`;
        }
        else {
            strCSS = attr.css;
        }
        e.push(...itemCode({
            header: e.length > 0,
            title: "CSS",
            elem: new preview_js_1.preview({ type: "css" }, strCSS),
        }));
    }
    else {
        strCSS = (0, _fn_js_1.getCSSBaseOnSource)(attr.outputAttr);
        if (strCSS) {
            e.push(...itemCode({
                header: e.length > 0,
                title: "CSS",
                elem: new preview_js_1.preview({ type: "css" }, strCSS),
            }));
        }
    }
    let renameExtention = [];
    if (attr.extention) {
        let f = [];
        if (Array.isArray(attr.extention)) {
            f = attr.extention;
        }
        else {
            f = [attr.extention];
        }
        f.forEach((i) => {
            if (i && i.name && (i.output || i.strOutput)) {
                if (i.name && i.rename) {
                    renameExtention.push({ find: i.rename, replace: i.name });
                }
            }
        });
    }
    let strExtention = [];
    if (attr.extention) {
        let f = [];
        if (Array.isArray(attr.extention)) {
            f = attr.extention;
        }
        else {
            f = [attr.extention];
        }
        f.forEach((i) => {
            if (i && i.name && (i.output || i.strOutput)) {
                let strCode = i.strOutput
                    ? i.strOutput
                    : attr.scriptConverter
                        ? attr.scriptConverter(i.output.toString())
                        : i.output.toString();
                strCode = (0, _fn_js_1.replaceExtention)(renameExtention, strCode);
                strExtention.push(`
						const ${i.name} = ${strCode};`);
                e.push(...itemCode({
                    header: e.length > 0,
                    title: i.name,
                    elem: new preview_js_1.preview({ type: i.strOutput ? "ts" : "js" }, strCode),
                }));
            }
        });
    }
    let strManager = undefined;
    if ((attr.output || attr.strOutput) && attr.showScript && (attr.manager || attr.strManager) && attr.showManager) {
        strManager = attr.strManager
            ? attr.strManager
            : attr.scriptConverter
                ? attr.scriptConverter(attr.manager.toString())
                : attr.manager.toString();
        strManager = (0, _fn_js_1.replaceExtention)(renameExtention, strManager);
        e.push(...itemCode({
            header: e.length > 0,
            title: "MANAGER",
            elem: new preview_js_1.preview({ type: attr.strManager ? "ts" : "js" }, strManager),
        }));
    }
    if ((attr.output || attr.strOutput) && attr.showScript) {
        let strSource = attr.strOutput
            ? attr.strOutput
            : attr.scriptConverter
                ? attr.scriptConverter(attr.output.toString())
                : attr.output.toString();
        let strRoot = (0, _fn_js_1.getRootBaseOnSource)(attr.previewAttr, attr.outputAttr);
        strSource = (0, _fn_js_1.replaceExtention)(renameExtention, strSource);
        e.push(...itemCode({
            islast: true,
            header: e.length > 0,
            title: "SOURCE",
            elem: new preview_js_1.preview({ type: attr.strOutput ? "ts" : "js" }, strSource),
            onedit: attr.showCodepen
                ? () => {
                    (0, _fn_js_1.codePen)(generateCodePenData((0, _fn_js_1.getLibBaseOnSource)(strSource, strManager, strExtention), strSource, strManager, strExtention, strCSS, strRoot));
                }
                : undefined,
        }));
    }
    attr.elem = [
        new bsts_1.b.card.container({
            id: id,
            class: "example-code",
            marginY: 3,
            border: false,
            on: {
                "bs.console.log": attr.showConsole
                    ? (event) => {
                        const ce = event;
                        addConsoleLog(ce.target, ce.detail.title, ce.detail.msg, ce.detail.color);
                    }
                    : undefined,
            },
        }, new bsts_1.b.card.body({ padding: 0 }, [new bsts_1.b.list.container(e)])),
    ];
    delete attr.lib;
    delete attr.css;
    delete attr.extention;
    delete attr.output;
    delete attr.manager;
    delete attr.strOutput;
    delete attr.strManager;
    delete attr.scriptConverter;
    delete attr.showCodepen;
    delete attr.showConsole;
    delete attr.showViewport;
    delete attr.zoom;
    delete attr.showOutput;
    delete attr.showScript;
    delete attr.showManager;
    delete attr.showHTML;
    delete attr.previewAttr;
    delete attr.outputAttr;
    return attr;
};
class code extends bsts_1.h.div {
    constructor(...arg) {
        super(bsts_1.core.bsConsNoElemArg(convert, arg));
    }
}
exports.code = code;
const Code = (Attr) => bsts_1.core.genTagClass(code, Attr);
exports.Code = Code;

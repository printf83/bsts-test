"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bsts_1 = require("@printf83/bsts");
const _index_js_1 = require("./docs/_index.js");
const main = __importStar(require("./ctl/main/_index.js"));
const container_js_1 = require("./ctl/main/container.js");
const e = __importStar(require("./ctl/example/_index.js"));
const DEBUG = false;
const MEMORYLEAKTEST_COUNTTAG = false;
const cookie = {
    set: (name, value, expiredInDays, path) => {
        expiredInDays !== null && expiredInDays !== void 0 ? expiredInDays : (expiredInDays = 7);
        let date = new Date();
        date.setTime(date.getTime() + expiredInDays * 24 * 60 * 60 * 1000);
        const optExpires = `expires=${date.toUTCString()};`;
        const optSamesite = `samesite=strict;`;
        const optPath = `path=${path || window.location.hostname};`;
        const optValue = `${name}=${value};`;
        document.cookie = `${optValue}${optExpires}${optSamesite}${optPath}`;
    },
    delete: (name) => {
        cookie.set(name, "", -1);
    },
    get: (name) => {
        name = `${name}=`;
        const cDecoded = decodeURIComponent(document.cookie);
        const cArr = cDecoded.split("; ");
        let res = null;
        cArr.forEach((val) => {
            if (val.indexOf(name) === 0)
                res = val.substring(name.length);
        });
        return res;
    },
};
const getSavedTheme = () => {
    let themeCookie = cookie.get("current_theme");
    if (themeCookie) {
        return themeCookie;
    }
    else {
        return "auto";
    }
};
const onThemeChange = (value) => {
    const ICONFORMAT = "png";
    cookie.set("current_theme", value);
    const faviconEl = document.querySelector('link[rel="icon"]');
    if (value === "auto") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", "dark");
            faviconEl.setAttribute("href", `favicon-light.${ICONFORMAT}`);
        }
        else {
            document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", "light");
            faviconEl.setAttribute("href", `favicon.${ICONFORMAT}`);
        }
    }
    else {
        document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", value);
        if (value === "dark") {
            faviconEl.setAttribute("href", `favicon-light.${ICONFORMAT}`);
        }
        else {
            faviconEl.setAttribute("href", `favicon.${ICONFORMAT}`);
        }
    }
};
const getSavedBootswatch = () => {
    let bootswatchCookie = cookie.get("current_bootswatch");
    if (bootswatchCookie) {
        return bootswatchCookie;
    }
    else {
        return "default";
    }
};
const onBootswatchChange = (value) => {
    cookie.set("current_bootswatch", value);
    const bootstrapCssLink = document.getElementById("bootswatchCssLink");
    if (bootstrapCssLink) {
        if (value === "default") {
            bootstrapCssLink.disabled = true;
            bootstrapCssLink.setAttribute("href", "");
        }
        else {
            bootstrapCssLink.disabled = false;
            bootstrapCssLink.setAttribute("href", `https://cdn.jsdelivr.net/npm/bootswatch@5.3/dist/${value}/bootstrap.min.css`);
        }
    }
};
const setupBootswatch = () => {
    onBootswatchChange(getSavedBootswatch());
};
const setupThemeChanges = () => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (getSavedTheme() === "auto") {
            onThemeChange("auto");
        }
    });
};
let m = {
    doc: [
        {
            label: "Getting started",
            icon: { id: "book-half", textColor: "primary" },
            item: [
                { label: "Introduction", value: "docs/gettingstarted/introduction" },
                { label: "Bootswatch", value: "docs/gettingstarted/bootswatch" },
            ],
        },
        {
            label: "Customize",
            icon: { id: "palette2", textColor: "danger" },
            item: [{ label: "Color", value: "docs/customize/color" }],
        },
        {
            label: "Layout",
            icon: { id: "grid-fill", textColor: "success" },
            item: [
                { label: "Breakpoints", value: "docs/layout/breakpoints" },
                { label: "Containers", value: "docs/layout/containers" },
                { label: "Grid", value: "docs/layout/grid" },
                { label: "Columns", value: "docs/layout/columns" },
                { label: "Gutters", value: "docs/layout/gutters" },
                { label: "Utilities", value: "docs/layout/utilities" },
                { label: "Z-index", value: "docs/layout/zindex" },
                { label: "CSS Grid", value: "docs/layout/cssgrid" },
            ],
        },
        {
            label: "Content",
            icon: { id: "file-earmark-richtext", textColor: "secondary" },
            item: [
                { label: "Reboot", value: "docs/content/reboot" },
                { label: "Typography", value: "docs/content/typography" },
                { label: "Images", value: "docs/content/images" },
                { label: "Tables", value: "docs/content/tables" },
                { label: "Figures", value: "docs/content/figures" },
            ],
        },
        {
            label: "Forms",
            icon: { id: "ui-radios", textColor: "primary" },
            item: [
                { label: "Overview", value: "docs/forms/overview" },
                { label: "Form control", value: "docs/forms/control" },
                { label: "Select", value: "docs/forms/select" },
                { label: "Checks & radios", value: "docs/forms/check_radio" },
                { label: "Range", value: "docs/forms/range" },
                { label: "Input group", value: "docs/forms/input_group" },
                { label: "Floating labels", value: "docs/forms/floating_label" },
                { label: "Layout", value: "docs/forms/layout" },
                { label: "Validation", value: "docs/forms/validation" },
            ],
        },
        {
            label: "Component",
            icon: { id: "menu-button-wide-fill", textColor: "info" },
            item: [
                { label: "Accordion", value: "docs/components/accordion" },
                { label: "Alert", value: "docs/components/alert" },
                { label: "Badge", value: "docs/components/badge" },
                { label: "Breadcrumb", value: "docs/components/breadcrumb" },
                { label: "Button", value: "docs/components/button" },
                { label: "Button group", value: "docs/components/button_group" },
                { label: "Card", value: "docs/components/card" },
                { label: "Carousel", value: "docs/components/carousel" },
                { label: "Close button", value: "docs/components/close_button" },
                { label: "Collapse", value: "docs/components/collapse" },
                { label: "Dropdowns", value: "docs/components/dropdown" },
                { label: "List group", value: "docs/components/list" },
                { label: "Modal", value: "docs/components/modal" },
                { label: "Navbar", value: "docs/components/navbar" },
                { label: "Navs & tabs", value: "docs/components/nav" },
                { label: "Offcanvas", value: "docs/components/offcanvas" },
                { label: "Pagination", value: "docs/components/pagination" },
                { label: "Placeholder", value: "docs/components/placeholder" },
                { label: "Popovers", value: "docs/components/popover" },
                { label: "Progress", value: "docs/components/progress" },
                { label: "Scrollspy", value: "docs/components/scrollspy" },
                { label: "Spinners", value: "docs/components/spinner" },
                { label: "Toasts", value: "docs/components/toast" },
                { label: "Tooltips", value: "docs/components/tooltip" },
            ],
        },
        {
            label: "Helpers",
            icon: { id: "magic", textColor: "warning" },
            item: [
                { label: "Clearfix", value: "docs/helpers/clearfix" },
                { label: "Color & background", value: "docs/helpers/color_background" },
                { label: "Colored links", value: "docs/helpers/colored_links" },
                { label: "Focus ring", value: "docs/helpers/focus_ring" },
                { label: "Icon link", value: "docs/helpers/icon_link" },
                { label: "Position", value: "docs/helpers/position" },
                { label: "Ratio", value: "docs/helpers/ratio" },
                { label: "Stacks", value: "docs/helpers/stacks" },
                { label: "Stretched link", value: "docs/helpers/stretched_link" },
                { label: "Text truncation", value: "docs/helpers/text_truncation" },
                { label: "Vertical rule", value: "docs/helpers/vertical_rule" },
                { label: "Visually hidden", value: "docs/helpers/visually_hidden" },
            ],
        },
        {
            label: "Utilities",
            icon: { id: "braces-asterisk", textColor: "danger" },
            item: [
                { label: "API", value: "docs/utilities/api" },
                { label: "Background", value: "docs/utilities/background" },
                { label: "Borders", value: "docs/utilities/borders" },
                { label: "Colors", value: "docs/utilities/colors" },
                { label: "Display", value: "docs/utilities/display" },
                { label: "Flex", value: "docs/utilities/flex" },
                { label: "Float", value: "docs/utilities/float" },
                { label: "Interactions", value: "docs/utilities/interactions" },
                { label: "Link", value: "docs/utilities/link" },
                { label: "Object fit", value: "docs/utilities/object_fit" },
                { label: "Opacity", value: "docs/utilities/opacity" },
                { label: "Overflow", value: "docs/utilities/overflow" },
                { label: "Position", value: "docs/utilities/position" },
                { label: "Shadows", value: "docs/utilities/shadow" },
                { label: "Sizing", value: "docs/utilities/sizing" },
                { label: "Spacing", value: "docs/utilities/spacing" },
                { label: "Text", value: "docs/utilities/text" },
                { label: "Vertical align", value: "docs/utilities/vertical_align" },
                { label: "Visibility", value: "docs/utilities/visibility" },
                { label: "Z-index", value: "docs/utilities/zindex" },
            ],
        },
        {
            label: "Example",
            icon: { id: "code", textColor: "success" },
            item: [
                { label: "Headers", value: "docs/example/headers" },
                { label: "Heroes", value: "docs/example/heroes" },
                { label: "Features", value: "docs/example/features" },
                { label: "Sidebars", value: "docs/example/sidebars" },
                { label: "Footers", value: "docs/example/footers" },
                { label: "Dropdowns", value: "docs/example/dropdowns" },
                { label: "List groups", value: "docs/example/list_groups" },
                { label: "Modals", value: "docs/example/modals" },
                { label: "Badges", value: "docs/example/badges" },
                { label: "Breadcrumbs", value: "docs/example/breadcrumbs" },
                { label: "Test", value: "docs/example/test" },
            ],
        },
    ],
};
const getSavedBookmark = () => {
    let bookmarkCookie = cookie.get("saved_bookmark");
    if (bookmarkCookie) {
        return JSON.parse(bookmarkCookie);
    }
    else {
        return [];
    }
};
let bm = getSavedBookmark();
const isInBookmark = (value) => {
    if (bm && bm.length > 0) {
        return bm.filter((i) => i.value === value).length > 0;
    }
    else {
        return false;
    }
};
const addToBookmark = (value) => {
    var _a, _b;
    let label = (_b = (_a = document.getElementById("bs-menu")) === null || _a === void 0 ? void 0 : _a.querySelector(`a[data-value="${value}"]`)) === null || _b === void 0 ? void 0 : _b.textContent;
    if (label) {
        bm.push({
            label: label,
            value: value,
        });
    }
};
const removeFromBookmark = (value) => {
    bm = bm.filter((i) => i.value !== value);
};
const onBookmarkChange = (value) => {
    if (isInBookmark(value)) {
        removeFromBookmark(value);
    }
    else {
        addToBookmark(value);
    }
    cookie.set("saved_bookmark", JSON.stringify(bm));
    (0, container_js_1.updateMenu)(genMenuWithBookmark(), cookie.get("current_page") || "docs/gettingstarted/introduction");
};
const genMenuWithBookmark = () => {
    let result = [];
    if (bm && bm.length > 0) {
        result.push({
            icon: new bsts_1.b.icon({ id: "pin-fill", textColor: "secondary" }),
            label: "Pinned",
            item: bm,
        });
    }
    for (const doc of Object.values(m.doc)) {
        let item = doc.item.filter((i) => !isInBookmark(i.value));
        if (item && item.length > 0) {
            result.push({
                icon: doc.icon,
                label: doc.label,
                item: item,
            });
        }
    }
    return result && result.length > 0 ? result : m.doc;
};
const dataNotFound = (value) => {
    return {
        title: "Oooopppsss!",
        description: `Content {{${value} }}not found`,
        sourceUrl: `https://github.com/printf83/bsts-test/blob/main/src/doc/_index.ts`,
        sourceWeb: "Github",
    };
};
const getDataPromise = (value, callback) => __awaiter(void 0, void 0, void 0, function* () {
    (0, _index_js_1.doc)(value).then((d) => {
        callback(d);
    });
});
const getData = (value, callback) => {
    let tValue = value.split("/");
    if (tValue.length === 3 && tValue[0] === "docs") {
        getDataPromise(value, (c) => {
            if (c) {
                c.docId = value;
                c.bookmark = bm.filter((i) => i.value === value).length > 0;
                c.sourceUrl = `https://github.com/printf83/bsts-test/blob/main/src/${value}.ts`;
                c.sourceWeb = "Github";
                callback(c);
            }
            else {
                callback(dataNotFound(value));
            }
        });
    }
    else {
        callback(dataNotFound(value));
    }
};
const loadDefaultDoc = () => {
    const { search } = window.location;
    if (search && search.startsWith("?d=")) {
        let docId = search.slice(3);
        let anchorId = null;
        if (docId.indexOf("#") > -1) {
            let tempValue = docId.split("#");
            docId = tempValue[0];
            anchorId = tempValue[1];
        }
        onMenuChange(`${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`, true);
        highlightCurrentMenu(docId);
    }
    else {
        onMenuChange(cookie.get("current_page") || "docs/gettingstarted/introduction", true);
        highlightCurrentMenu(cookie.get("current_page") || "docs/gettingstarted/introduction");
    }
};
const setLoading = (contentbody) => {
    if (!contentbody.classList.contains("loading")) {
        contentbody.classList.add("loading");
        let a = [
            ".page-title-text",
            ".example-description",
            ".example-text",
            ".example-ul li",
            ".example-ol li",
            ".example-alert .alert",
            ".example-item",
            ".example-table .table td",
            ".example-table .table th",
            ".example-code .example-preview-container",
            ".example-code .font-monospace small",
            ".example-preview.card .card-header a.font-monospace",
            ".example-preview.card .card-body pre",
            ".example-title",
            ".example-subtitle",
            ".example-xsubtitle",
            ".bs-toc ul li",
            ".bs-toc h5",
        ];
        a.forEach((selector) => {
            let m1 = 10;
            let m2 = 20;
            let m3 = 1;
            let m4 = 6;
            switch (selector) {
                case ".example-table .table td":
                case ".example-table .table th":
                case ".bs-toc h5":
                case ".bs-toc ul li":
                case ".example-xsubtitle":
                case ".example-subtitle":
                case ".example-title":
                case ".example-code .font-monospace small":
                case ".example-preview.card .card-header a.font-monospace":
                case ".page-title-text":
                    m1 = 3;
                    m2 = 3;
                    m3 = 1;
                    m4 = 4;
                    break;
            }
            let elem = contentbody.querySelectorAll(selector);
            if (elem) {
                elem.forEach((i) => {
                    bsts_1.core.appendChild(i, new bsts_1.h.div({
                        loadingPlaceholderAnimation: "wave",
                    }, bsts_1.core.placeholder(m1, m2, m3, m4)));
                });
            }
        });
    }
};
const PERFORMANCEINFO = {};
const onMenuChange = (value, isfirsttime, state, callback) => {
    isfirsttime !== null && isfirsttime !== void 0 ? isfirsttime : (isfirsttime = false);
    state !== null && state !== void 0 ? state : (state = "push");
    let docId = value;
    let anchorId;
    if (value.indexOf("#") > -1) {
        let tempValue = value.split("#");
        docId = tempValue[0];
        anchorId = tempValue[1];
    }
    let contentbody = document.getElementById("bs-main");
    //set loading
    setLoading(contentbody);
    //show the loading before download new documentation
    bsts_1.core.requestIdleCallback(() => {
        const PERFORMANCE_GETDATA = DEBUG ? performance.now() : 0;
        getData(docId, (docData) => {
            var _a;
            PERFORMANCEINFO.download = DEBUG ? performance.now() - PERFORMANCE_GETDATA : 0;
            //keep current page in cookie
            cookie.set("current_page", `${docId}${anchorId ? "#" : ""}${anchorId ? anchorId : ""}`);
            //remove active popup
            bsts_1.core.removeAllActivePopup();
            //generate content
            const PERFORMANCE_BUILD = DEBUG ? performance.now() : 0;
            contentbody = bsts_1.core.replaceWith(contentbody, main.genMain(docData));
            PERFORMANCEINFO.build = DEBUG ? performance.now() - PERFORMANCE_BUILD : 0;
            //reset loading
            // resetLoading(contentbody);
            //rename page title
            const pagetitle = (_a = document.querySelector("h1.display-5.page-title-text")) === null || _a === void 0 ? void 0 : _a.textContent;
            const strPagetitle = pagetitle ? `${pagetitle} · Bootstrap TS` : "Bootstrap TS";
            const { origin, pathname } = window.location;
            document.title = strPagetitle;
            PERFORMANCEINFO.title = pagetitle ? pagetitle : "Bootstrap TS";
            //set history
            if (state === "push") {
                window.history.pushState({
                    docId: docId,
                    anchorId: anchorId,
                    isfirsttime: isfirsttime,
                }, strPagetitle, `${origin}${pathname}?d=${value}`);
            }
            else if (state === "replace") {
                window.history.replaceState({
                    docId: docId,
                    anchorId: anchorId,
                    isfirsttime: isfirsttime,
                }, strPagetitle, `${origin}${pathname}?d=${value}`);
            }
            focusToAnchor(anchorId, isfirsttime);
            bsts_1.core.requestIdleCallback(() => {
                PR.prettyPrint();
                //REPORT PERFORMANCE
                if (DEBUG) {
                    const tagCount = contentbody.getElementsByTagName("*").length;
                    console.info(`${PERFORMANCEINFO.title} page has ${tagCount} tag in it. It took ${~~PERFORMANCEINFO.download}ms to download and ${~~PERFORMANCEINFO.build}ms to build.`);
                }
                if (typeof callback === "function") {
                    callback();
                }
            }, 300);
        });
    }, 300);
};
const setupBSNavigate = () => {
    document.addEventListener("bs.navigate", (e) => {
        let value = e.detail;
        highlightCurrentMenu(value);
        onMenuChange(value);
    }, false);
};
const setupWindowPopState = () => {
    window.onpopstate = function (e) {
        if (e.state) {
            const state = e.state;
            onMenuChange(`${state.docId}${state.anchorId ? "#" : ""}${state.anchorId ? state.anchorId : ""}`, true, "replace");
            highlightCurrentMenu(state.docId);
        }
    };
};
const highlightCurrentMenu = (value) => {
    let bsMenu = document.getElementById("bs-menu");
    let lastActive = bsMenu.querySelectorAll(".bs-links-link.active")[0];
    if (lastActive) {
        lastActive.classList.remove("active");
        lastActive.removeAttribute("aria-current");
    }
    if (value) {
        let newActive = bsMenu.querySelectorAll(`.bs-links-link[data-value='${value}']`)[0];
        if (newActive) {
            newActive.classList.add("active");
            newActive.setAttribute("aria-current", "page");
        }
    }
};
const focusToAnchor = (anchorId, isfirsttime) => {
    if (anchorId) {
        let anchorNode = document.querySelectorAll(`a.anchor-link[href="#${anchorId}"]`);
        if (anchorNode) {
            let anchorElem = anchorNode[0];
            let elemPosition = anchorElem.getBoundingClientRect().top;
            let offsetElemPosition = elemPosition + window.scrollY - 60;
            window.scrollTo(0, offsetElemPosition);
        }
    }
    else {
        if (!isfirsttime) {
            window.scrollTo(0, 0);
        }
    }
};
let _docDB = [];
const docDB = () => {
    if (_docDB.length > 0) {
        return _docDB;
    }
    else {
        _docDB = m.doc
            .map((i) => {
            return i.item.map((j) => {
                return j.value;
            });
        })
            .flat();
        return _docDB;
    }
};
const MOSTTAG = { title: "NONE", count: Number.MIN_VALUE };
const LESSTAG = { title: "NONE", count: Number.MAX_VALUE };
let lastEstimate = 0;
const genDurationText = (second) => {
    if (second > 60) {
        if (second % 60 === 0) {
            return `${~~(second / 60)} minute${~~(second / 60) > 1 ? "s" : ""}`;
        }
        else {
            return `${~~(second / 60)} minute${~~(second / 60) > 1 ? "s" : ""} ${second % 60} second${second % 60 > 1 ? "s" : ""}`;
        }
    }
    else {
        return `${second} second${second > 1 ? "s" : ""}`;
    }
};
const getDuplicateID = () => {
    const duplicateIds = Array.from(document.querySelectorAll("[id]"))
        .map((v) => v.id)
        .reduce((acc, v) => {
        acc[v] = (acc[v] || 0) + 1;
        return acc;
    }, {});
    const duplicates = Object.entries(duplicateIds)
        .filter(([_key, value]) => value > 1)
        .map(([key, _value]) => key);
    return duplicates;
};
const runMemoryTest = (startTime, testId, count, callback, random, checkduplicateid, max) => {
    max !== null && max !== void 0 ? max : (max = count);
    let mDB = docDB();
    let mDBLength = mDB.length;
    let docId = random ? mDB[bsts_1.core.rndBetween(0, mDBLength - 1)] : mDB[(max - count) % mDB.length];
    if (count > 0) {
        bsts_1.core.requestIdleCallback(() => {
            getData(docId, (docData) => {
                var _a;
                const progressBar = document.getElementById(`${testId}-bar`);
                const progressPage = document.getElementById(`${testId}-page`);
                const progressCount = document.getElementById(`${testId}-count`);
                const progressSpeed = document.getElementById(`${testId}-speed`);
                const progressEstimate = document.getElementById(`${testId}-estimate`);
                if (progressBar && progressCount && progressPage && progressEstimate && progressSpeed) {
                    //show content
                    let contentbody = document.getElementById("bs-main");
                    contentbody = bsts_1.core.replaceChild(contentbody, main.genMainContent(docData));
                    highlightCurrentMenu(docId);
                    const pagetitle = (_a = document.querySelector("h1.display-5.page-title-text")) === null || _a === void 0 ? void 0 : _a.textContent;
                    //get duplicate id
                    if (checkduplicateid) {
                        const duplicateID = getDuplicateID();
                        const duplicateIDCount = duplicateID.length;
                        if (duplicateIDCount > 0) {
                            console.warn(`${pagetitle} have ${duplicateIDCount} duplicate key${duplicateIDCount > 1 ? "s" : ""}`, duplicateID);
                        }
                    }
                    //update progress
                    const currentProgress = ((max - count) / max) * 100;
                    progressBar.setAttribute("style", `width:${currentProgress}%;`);
                    progressPage.innerText = pagetitle ? pagetitle : "...";
                    progressCount.innerText = (max - count).toString();
                    const currentTime = performance.now();
                    if (currentTime > lastEstimate + 1000) {
                        lastEstimate = currentTime;
                        progressSpeed.innerText = `${~~(((max - count) / (currentTime - startTime)) * 1000)}`;
                        const estimateTime = ~~((((currentTime - startTime) / currentProgress) * (100 - currentProgress)) /
                            1000);
                        progressEstimate.innerText = `${genDurationText(estimateTime + 1)}`;
                    }
                    if (MEMORYLEAKTEST_COUNTTAG) {
                        const tagCount = contentbody.getElementsByTagName("*").length;
                        if (tagCount > MOSTTAG.count) {
                            MOSTTAG.title = pagetitle ? pagetitle : "Bootstrap TS";
                            MOSTTAG.count = tagCount;
                        }
                        if (tagCount < LESSTAG.count) {
                            LESSTAG.title = pagetitle ? pagetitle : "Bootstrap TS";
                            LESSTAG.count = tagCount;
                        }
                    }
                    runMemoryTest(startTime, testId, count - 1, callback, random, checkduplicateid, max);
                }
                else {
                    callback(max - count, docId);
                }
            });
        }, 300);
    }
    else {
        callback(max - count, docId);
    }
};
const startMemoryTest = (sender, testId, count, random, checkduplicateid) => {
    const progressTotal = document.getElementById(`${testId}-total`);
    if (progressTotal) {
        progressTotal.innerText = count.toString();
    }
    const STARTMEMORYTEST = performance.now();
    runMemoryTest(performance.now(), testId, count, (docCount, docId) => {
        const ENDMEMORYTEST = performance.now();
        if (sender) {
            const mdl = sender.closest(".modal-dialog");
            if (mdl) {
                bsts_1.b.modal.hide(mdl);
            }
        }
        highlightCurrentMenu(docId);
        onMenuChange(docId, false, "push", () => {
            let result = "";
            let loadSpeed = ~~((docCount / (ENDMEMORYTEST - STARTMEMORYTEST)) * 1000);
            let durationSecond = ~~((ENDMEMORYTEST - STARTMEMORYTEST) / 1000);
            if (MEMORYLEAKTEST_COUNTTAG) {
                result = `
					Page count : {{s::${docCount}}} page{{br}}
					Load speed : ±{{s::${loadSpeed}}} page/sec{{br}}
					Duration : {{s::${genDurationText(durationSecond)}}}{{br}}
					Less element : {{s::${LESSTAG.title} (${LESSTAG.count} element)}}{{br}}
					Most element : {{s::${MOSTTAG.title} (${MOSTTAG.count} element)}}`;
            }
            else {
                result = `
					Page count : {{s::${docCount}}} page{{br}}
					Load speed : ±{{s::${loadSpeed}}} page/sec{{br}}
					Duration : {{s::${genDurationText(durationSecond)}}}`;
            }
            bsts_1.b.modal.show(bsts_1.b.modal.create({
                title: "Memory test complete",
                elem: new bsts_1.b.msg({
                    icon: new bsts_1.b.icon({ id: "info-circle-fill", textColor: "primary" }),
                    elem: result,
                }),
                btn: "ok",
            }));
        });
    }, random, checkduplicateid);
};
const showMemoryTestDialog = () => {
    const testId = bsts_1.core.UUID();
    bsts_1.b.modal.show(new bsts_1.b.modal.container([
        new bsts_1.b.modal.body({ id: "memory-test-msg" }, [
            new bsts_1.h.p("Please select one of the buttons below to open a specified number of pages for the purpose of detecting potential memory leaks. To facilitate this process, you can utilize either the {{Memory Monitor Program}} on your device or the {{Developer Tools}} available in your browser. Before commencing the memory leak test, please make a note of the current memory usage. Upon completion of the test, kindly compare the memory difference. It is anticipated that the memory should revert back to its original state once the test is finalized."),
            new bsts_1.h.p([
                bsts_1.b.form.check({
                    type: "checkbox",
                    switch: true,
                    label: "Random page",
                    checked: false,
                    id: "memory-test-random",
                }),
                bsts_1.b.form.check({
                    container: { marginBottom: 3 },
                    type: "checkbox",
                    switch: true,
                    label: "Check duplicate id",
                    checked: false,
                    id: "memory-test-duplicateid",
                }),
                new bsts_1.h.div({
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 2,
                }, [10, 30, 50, 100, 300, 500, 1000, 3000, 5000].map((i) => {
                    return new bsts_1.b.button({
                        outline: true,
                        color: i === 100 ? "primary" : "secondary",
                        data: {
                            counter: i,
                        },
                        on: {
                            click: (event) => {
                                var _a, _b;
                                const target = event.target;
                                const counter = parseInt(target.getAttribute("data-counter"));
                                (_a = document.getElementById("memory-test-progress")) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
                                (_b = document.getElementById("memory-test-msg")) === null || _b === void 0 ? void 0 : _b.classList.add("d-none");
                                startMemoryTest(target, testId, counter, document.getElementById("memory-test-random")
                                    .checked, document.getElementById("memory-test-duplicateid")
                                    .checked);
                            },
                        },
                    }, `${i}`);
                })),
            ]),
            new bsts_1.h.small(new bsts_1.b.caption({ icon: "info-circle-fill", textColor: "secondary" }, "To cancel the test, simply click outside the dialog.")),
        ]),
        new bsts_1.b.modal.body({ id: "memory-test-progress", display: "none" }, [
            new bsts_1.h.p("Memory Test in Progress. Kindly await its completion, or if necessary, you may click outside the dialog to interrupt the test."),
            new bsts_1.h.div({ textColor: "secondary", lineHeight: "sm" }, [
                new bsts_1.h.small([
                    "Counter : ",
                    new bsts_1.h.strong({ id: `${testId}-count` }, "..."),
                    " / ",
                    new bsts_1.h.strong({ id: `${testId}-total` }, "..."),
                ]),
                new bsts_1.h.br(),
                new bsts_1.h.small(["Current page : ", new bsts_1.h.strong({ id: `${testId}-page` }, "...")]),
                new bsts_1.h.br(),
                new bsts_1.h.small(["Page load speed : ±", new bsts_1.h.strong({ id: `${testId}-speed` }, "..."), " page/sec"]),
                new bsts_1.h.br(),
                new bsts_1.h.small(["Estimated time remaining : ", new bsts_1.h.strong({ id: `${testId}-estimate` }, "...")]),
                new bsts_1.h.div({ marginTop: 2 }, new bsts_1.b.progress.container(new bsts_1.b.progress.bar({
                    id: `${testId}-bar`,
                }))),
            ]),
        ]),
    ]));
};
let _docIndexDB = [];
const isDocItemIndexed = (pageId) => {
    if (_docIndexDB && _docIndexDB.length > 0) {
        return _docIndexDB.filter((i) => i.pageId === pageId).length > 0;
    }
    else {
        return false;
    }
};
const indexDocMenu = (index, callback) => {
    if (index < m.doc.length) {
        indexDocItem(0, m.doc[index].label, m.doc[index].item, () => {
            indexDocMenu(index + 1, callback);
        });
    }
    else {
        callback();
    }
};
const indexDocItem = (index, category, item, callback) => {
    if (index < item.length) {
        if (!isDocItemIndexed(item[index].value)) {
            getData(item[index].value, (data) => {
                if (data && data.item) {
                    let contentItem = data.item();
                    if (contentItem) {
                        let n = bsts_1.core.getNode(contentItem);
                        if (n) {
                            if (!Array.isArray(n)) {
                                n = [n];
                            }
                            if (n.length > 0) {
                                n.forEach((i) => {
                                    let textContent = i.textContent || undefined;
                                    if (textContent) {
                                        textContent = textContent.replace(/HTMLLoading\.\.\./g, "");
                                        textContent = textContent.replace(/SOURCELoading\.\.\./g, "");
                                        textContent = textContent.replace(/CSSLoading\.\.\./g, "");
                                        textContent = textContent.replace(/MANAGERLoading\.\.\./g, "");
                                        textContent = textContent.replace(/VIEW PORTXSSMMDLGXLXXL/g, "");
                                        textContent = textContent.replace(/ZOOM25\%/g, "");
                                        textContent = textContent.replace(/ZOOM50\%/g, "");
                                        textContent = textContent.replace(/ZOOM75\%/g, "");
                                        textContent = textContent.replace(/ZOOM100\%/g, "");
                                        textContent = textContent.replace(/CONSOLE/g, "");
                                        textContent = textContent.replace(/Loading\.\.\./g, "");
                                        textContent = textContent.replace(/  |\r\n|\n|\r/gm, "");
                                    }
                                    _docIndexDB.push({
                                        category: category,
                                        page: item[index].label,
                                        pageId: item[index].value,
                                        section: i.getAttribute("data-title") || undefined,
                                        sectionId: i.id,
                                        text: textContent,
                                    });
                                });
                            }
                        }
                    }
                }
                bsts_1.core.requestIdleCallback(() => {
                    indexDocItem(index + 1, category, item, callback);
                }, 300);
            });
        }
        else {
            indexDocItem(index + 1, category, item, callback);
        }
    }
    else {
        callback();
    }
};
const searchTitle = (value, i) => {
    if (i.category) {
        let match = new RegExp(value, "gmi").exec(i.category);
        if (match) {
            return true;
        }
    }
    if (i.page) {
        let match = new RegExp(value, "gmi").exec(i.page);
        if (match) {
            return true;
        }
    }
    if (i.section) {
        let match = new RegExp(value, "gmi").exec(i.section);
        if (match) {
            return true;
        }
    }
    return false;
};
const searchText = (value, valueRegEx, i) => {
    if (i.text) {
        let match = new RegExp(valueRegEx, "gmi").exec(i.text);
        if (match) {
            let text = i.text.substring(match.index - 10, match.index + value.length + 10);
            let st = new RegExp(valueRegEx, "gmi").exec(text);
            if (st) {
                text = `${text.substring(0, st === null || st === void 0 ? void 0 : st.index)}{{m::${text.substring(st === null || st === void 0 ? void 0 : st.index, (st === null || st === void 0 ? void 0 : st.index) + value.length)}}}${text.substring((st === null || st === void 0 ? void 0 : st.index) + value.length)}`;
            }
            else {
                text = text;
            }
            return {
                category: i.category,
                page: i.page,
                pageId: i.pageId,
                section: i.section,
                sectionId: i.sectionId,
                text: text,
            };
        }
    }
    return undefined;
};
const doSearch = (value, callback) => {
    if (value) {
        bsts_1.core.requestIdleCallback(() => {
            let valRegEx = value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            let filtered = _docIndexDB
                .map((i) => {
                if (searchTitle(value, i)) {
                    return {
                        category: i.category,
                        page: i.page,
                        pageId: i.pageId,
                        section: i.section,
                        sectionId: i.sectionId,
                        text: null,
                    };
                }
                else {
                    return searchText(value, valRegEx, i);
                }
            })
                .filter(Boolean);
            if (filtered) {
                let lastPageId = "";
                let result = [];
                filtered.forEach((i) => {
                    if (lastPageId !== i.pageId) {
                        lastPageId = i.pageId;
                        result.push({
                            category: i.category,
                            page: i.page,
                            pageId: i.pageId,
                            item: [],
                        });
                    }
                    result[result.length - 1].item.push({
                        section: i.section,
                        sectionId: i.sectionId,
                        text: i.text,
                    });
                });
                callback(result);
            }
            else {
                callback([]);
            }
        }, 300);
    }
    else {
        callback([]);
    }
};
const searchIndexOnClick = (event) => {
    const target = event.target;
    const listItem = target.closest("a[data-sectionId]");
    if (listItem) {
        const listGroup = listItem.closest("div[data-pageId]");
        if (listGroup) {
            const sectionId = listItem.getAttribute("data-sectionId");
            const pageId = listGroup.getAttribute("data-pageId");
            const value = `${pageId}${sectionId ? "#" : ""}${sectionId}`;
            highlightCurrentMenu(value);
            onMenuChange(value);
        }
    }
};
const genSearchItem = (page, section, text) => {
    if (text) {
        if (section) {
            return [
                new bsts_1.h.div({ fontSize: 4 }, new bsts_1.b.icon("list")),
                new bsts_1.h.div([
                    new bsts_1.h.div({ fontWeight: "semibold" }, text),
                    new bsts_1.h.div({ textColor: "secondary", small: true }, section),
                ]),
            ];
        }
        else {
            return [
                new bsts_1.h.div({ fontSize: 4 }, new bsts_1.b.icon("list")),
                new bsts_1.h.div([new bsts_1.h.div({ fontWeight: "semibold" }, text)]),
            ];
        }
    }
    else {
        if (section) {
            return [new bsts_1.h.div({ fontSize: 4 }, new bsts_1.b.icon("file-text")), new bsts_1.h.div([new bsts_1.h.div(section)])];
        }
        else if (page) {
            return [new bsts_1.h.div({ fontSize: 4 }, new bsts_1.b.icon("file-text")), new bsts_1.h.div([new bsts_1.h.div(page)])];
        }
        else {
            return [];
        }
    }
};
const searchIndex = (searchId, value) => {
    doSearch(value, (result) => {
        var _a;
        const currentSearchId = (_a = document.getElementById("doc-search-input")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-searchId");
        if (searchId === currentSearchId) {
            const searchResultContainer = document.getElementById("doc-search-result");
            if (result && result.length > 0) {
                bsts_1.core.replaceChild(searchResultContainer, result.map((i) => {
                    return new bsts_1.h.div({
                        fontSize: 6,
                        data: {
                            pageId: i.pageId,
                        },
                    }, [
                        new bsts_1.h.small({ textColor: "primary", fontWeight: "semibold" }, i.page),
                        new bsts_1.b.list.containerDiv(i.item.map((j) => {
                            return new bsts_1.b.list.itemLink({
                                action: true,
                                small: true,
                                href: "#",
                                data: { sectionId: j.sectionId },
                                on: {
                                    click: searchIndexOnClick,
                                },
                            }, [
                                new bsts_1.h.div({
                                    display: "flex",
                                    alignItem: "center",
                                    justifyContent: "start",
                                    gap: 3,
                                }, genSearchItem(i.page, j.section, j.text)),
                            ]);
                        })),
                    ]);
                }));
            }
            else {
                bsts_1.core.replaceChild(searchResultContainer, new bsts_1.h.div({ textAlign: "center", textColor: "secondary", margin: "5" }, "No result"));
            }
        }
    });
};
let lastSearchText = "";
let indexingInProgress = false;
const showSearchDialog = () => {
    bsts_1.b.modal.show(new bsts_1.b.modal.container({
        fullscreen: "sm",
        scrollable: true,
        contentAttr: { overflow: "hidden" },
        on: {
            "shown.bs.modal": (_event) => {
                let searchInput = document.getElementById("doc-search-input");
                if (searchInput) {
                    if (!indexingInProgress) {
                        indexingInProgress = true;
                        indexDocMenu(0, () => {
                            indexingInProgress = false;
                            let searchStatus = document.getElementById("doc-search-status");
                            if (searchStatus) {
                                bsts_1.core.replaceWith(searchStatus, [
                                    new bsts_1.h.div({
                                        id: "doc-search-status",
                                        display: "flex",
                                        gap: 2,
                                        alignItem: "center",
                                        lineHeight: 1,
                                        on: {
                                            click: (event) => {
                                                bsts_1.b.modal.show(bsts_1.b.modal.create({
                                                    elem: bsts_1.b.form.textarea({
                                                        label: "docIndexDB",
                                                        rows: 10,
                                                        value: JSON.stringify(_docIndexDB),
                                                    }),
                                                    btn: "ok",
                                                }));
                                            },
                                        },
                                    }, [
                                        "Search by ",
                                        new bsts_1.b.icon({
                                            id: "hexagon-fill",
                                            fontSize: 5,
                                            textColor: "primary",
                                        }),
                                    ]),
                                ]);
                            }
                        });
                    }
                    searchInput.focus();
                    searchInput.setSelectionRange(-1, -1);
                    if (lastSearchText) {
                        const searchId = bsts_1.core.UUID();
                        searchInput.setAttribute("data-searchId", searchId);
                        searchIndex(searchId, lastSearchText);
                    }
                }
            },
        },
    }, [
        new bsts_1.b.modal.header({ padding: 3, bgColor: "body-tertiary", borderNone: "bottom" }, new bsts_1.h.div({ display: "flex", gap: 3, width: 100 }, [
            new bsts_1.h.div({
                position: "absolute",
                border: false,
                class: "form-control form-control-lg",
                style: {
                    width: "auto",
                    backgroundColor: "transparent",
                },
            }, new bsts_1.b.icon({ id: "search", textColor: "secondary" })),
            bsts_1.b.form.input({
                container: { width: 100 },
                id: "doc-search-input",
                maxlength: 100,
                type: "search",
                weight: "lg",
                placeholder: "Search docs",
                paddingStart: 5,
                value: lastSearchText,
                on: {
                    keyup: (event) => {
                        const target = event.target;
                        if (target.value !== lastSearchText) {
                            lastSearchText = target.value;
                            const searchId = bsts_1.core.UUID();
                            target.setAttribute("data-searchId", searchId);
                            searchIndex(searchId, lastSearchText);
                        }
                    },
                    keydown: (event) => {
                        const ev = event;
                        if (ev.key == "Enter" || ev.key == "ArrowDown" || ev.key == "ArrowUp") {
                            event.stopPropagation();
                            event.preventDefault();
                            const docSearchResult = document.getElementById("doc-search-result");
                            if (docSearchResult) {
                                const docSearchItem = docSearchResult.querySelectorAll("a.list-group-item");
                                if (docSearchItem && docSearchItem.length > 0) {
                                    let currentActive = docSearchResult.querySelector("a.list-group-item.active");
                                    //active
                                    let activeIndex = -1;
                                    if (currentActive) {
                                        activeIndex = Array.from(docSearchItem).indexOf(currentActive);
                                        //do action
                                        if (currentActive) {
                                            if (ev.key == "Enter") {
                                                currentActive.dispatchEvent(new Event("click"));
                                            }
                                            else if (ev.key == "ArrowDown") {
                                                currentActive.classList.remove("active");
                                                if (activeIndex + 1 > docSearchItem.length - 1) {
                                                    docSearchItem[0].classList.add("active");
                                                }
                                                else {
                                                    docSearchItem[activeIndex + 1].classList.add("active");
                                                }
                                            }
                                            else if (ev.key == "ArrowUp") {
                                                currentActive.classList.remove("active");
                                                if (activeIndex - 1 < 0) {
                                                    docSearchItem[docSearchItem.length - 1].classList.add("active");
                                                }
                                                else {
                                                    docSearchItem[activeIndex - 1].classList.add("active");
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        docSearchItem[0].classList.add("active");
                                        currentActive = docSearchResult.querySelector("a.list-group-item.active");
                                        activeIndex = 0;
                                        if (ev.key == "Enter") {
                                            currentActive === null || currentActive === void 0 ? void 0 : currentActive.dispatchEvent(new Event("click"));
                                        }
                                    }
                                }
                            }
                        }
                    },
                },
            }),
            new bsts_1.b.button({ toggle: "modal", display: ["block", "sm-none"], weight: "lg" }, "Close"),
        ])),
        new bsts_1.b.modal.body({
            id: "doc-search-result",
            padding: 3,
            paddingTop: 0,
            bgColor: "body-tertiary",
            zIndex: 0,
            display: "grid",
            gap: 3,
        }, [new bsts_1.h.div({ textAlign: "center", textColor: "secondary", margin: "5" }, "No recent search")]),
        new bsts_1.b.modal.footer({
            small: true,
            shadow: true,
            zIndex: 1,
            paddingX: 3,
            paddingY: 1,
            display: "flex",
            justifyContent: ["end", "sm-between"],
        }, [
            new bsts_1.h.div({ display: ["none", "sm-flex"], gap: 2, alignItem: "center" }, [
                new bsts_1.h.kbd({ padding: 1, lineHeight: 1 }, new bsts_1.b.icon("arrow-return-left")),
                " to select ",
                new bsts_1.h.kbd({ padding: 1, lineHeight: 1 }, new bsts_1.b.icon("arrow-up")),
                new bsts_1.h.kbd({ padding: 1, lineHeight: 1 }, new bsts_1.b.icon("arrow-down")),
                " to navigate ",
                new bsts_1.h.kbd({ padding: 1, lineHeight: 1 }, new bsts_1.h.span({ style: { fontSize: "0.85em" } }, "ESC")),
                " to close ",
            ]),
            new bsts_1.h.div({ id: "doc-search-status", display: "flex", gap: 2, alignItem: "center", lineHeight: 1 }, ["Indexing ", new bsts_1.b.spinner({ small: true })]),
        ]),
    ]));
};
const mainContainer = () => {
    return main.Container({
        name: "Bootstrap TS",
        bgColor: "primary",
        textColor: "light",
        icon: new bsts_1.h.div({ class: "animated-icon", fontSize: 3 }, new bsts_1.b.icon({ id: "hexagon-fill" })),
        on: {
            "bs-menu-change": (e) => {
                onMenuChange(e.detail);
            },
            "bs-theme-change": (e) => {
                onThemeChange(e.detail);
            },
            "bs-bootswatch-change": (e) => {
                onBootswatchChange(e.detail);
            },
            "bs-bookmark-change": (e) => {
                onBookmarkChange(e.detail);
            },
            "bs-search-click": (_e) => {
                showSearchDialog();
            },
        },
        itemMenu: genMenuWithBookmark(),
        itemInsideLink: [{ value: "doc", label: "Docs" }],
        currentInsideLink: "doc",
        itemOutsideLink: [
            // {
            // 	href: "#",
            // 	icon: { id: "search" },
            // 	label: "Search",
            // 	onclick: (_event) => {
            // 		const offcanvas = document.getElementById("bsNavbar") as Element;
            // 		b.offcanvas.hide(offcanvas);
            // 		showSearchDialog();
            // 	},
            // },
            {
                href: "#",
                icon: { id: "speedometer" },
                label: "Memory test",
                onclick: (_event) => {
                    const offcanvas = document.getElementById("bsNavbar");
                    bsts_1.b.offcanvas.hide(offcanvas);
                    showMemoryTestDialog();
                },
            },
            { href: "https://github.com/printf83/bsts", icon: { id: "github" }, label: "Github" },
            { href: "https://twitter.com/printf83", icon: { id: "twitter" }, label: "Twitter" },
            { href: "https://getbootstrap.com/", icon: { id: "bootstrap" }, label: "Bootstrap" },
        ],
        itemTheme: [
            { value: "light", icon: { id: "sun-fill" }, label: "Light" },
            { value: "dark", icon: { id: "moon-stars-fill" }, label: "Dark" },
            { value: "auto", icon: { id: "circle-half" }, label: "Auto" },
        ],
        currentTheme: getSavedTheme(),
        itemBootswatch: [
            {
                value: "default",
                label: "Default",
            },
            { value: "cerulean", label: "Cerulean" },
            { value: "cosmo", label: "Cosmo" },
            { value: "cyborg", label: "Cyborg" },
            { value: "darkly", label: "Darkly" },
            { value: "flatly", label: "Flatly" },
            { value: "journal", label: "Journal" },
            { value: "litera", label: "Litera" },
            { value: "lumen", label: "Lumen" },
            { value: "lux", label: "Lux" },
            { value: "materia", label: "Materia" },
            { value: "minty", label: "Minty" },
            { value: "morph", label: "Morph" },
            { value: "pulse", label: "Pulse" },
            { value: "quartz", label: "Quartz" },
            { value: "sandstone", label: "Sandstone" },
            { value: "simplex", label: "Simplex" },
            { value: "sketchy", label: "Sketchy" },
            { value: "slate", label: "Slate" },
            { value: "solar", label: "Solar" },
            { value: "spacelab", label: "Spacelab" },
            { value: "superhero", label: "Superhero" },
            { value: "united", label: "United" },
            { value: "vapor", label: "Vapor" },
            { value: "yeti", label: "Yeti" },
            { value: "zephyr", label: "Zephyr" },
        ],
        currentBootswatch: getSavedBootswatch(),
        content: {
            loading: true,
            item: () => {
                return Array(bsts_1.core.rndBetween(3, 10))
                    .fill("")
                    .map(() => {
                    return new e.section([
                        new e.title({ loadingPlaceholderAnimation: "wave" }, bsts_1.core.placeholder(3, 6, 1, 3)),
                        ...Array(bsts_1.core.rndBetween(1, 3))
                            .fill("")
                            .map(() => {
                            return new e.text({ loadingPlaceholderAnimation: "wave" }, bsts_1.core.placeholder(10, 20));
                        }),
                        new e.item(new bsts_1.b.card.container({ style: { minHeight: "18rem" } }, new bsts_1.b.card.body(""))),
                    ]);
                })
                    .flat();
            },
        },
        itemFooter: [
            {
                title: "Links",
                item: [
                    { href: "https://getbootstrap.com/", label: "Home" },
                    { href: "https://getbootstrap.com/docs/5.3/", label: "Docs" },
                    { href: "https://getbootstrap.com/docs/5.3/examples/", label: "Examples" },
                    { href: "https://icons.getbootstrap.com/", label: "Icons" },
                    { href: "https://themes.getbootstrap.com/", label: "Themes" },
                    { href: "https://blog.getbootstrap.com/", label: "Blog" },
                    { href: "https://cottonbureau.com/people/bootstrap", label: "Swag Store" },
                ],
            },
            {
                title: "Guides",
                item: [
                    { href: "https://getbootstrap.com/docs/5.3/getting-started/", label: "Getting started" },
                    { href: "https://getbootstrap.com/docs/5.3/examples/starter-template/", label: "Starter template" },
                    { href: "https://getbootstrap.com/docs/5.3/getting-started/webpack/", label: "Webpack" },
                    { href: "https://getbootstrap.com/docs/5.3/getting-started/parcel/", label: "Parcel" },
                    { href: "https://getbootstrap.com/docs/5.3/getting-started/vite/", label: "Vite" },
                ],
            },
            {
                title: "Projects",
                item: [
                    { href: "https://github.com/twbs/bootstrap", label: "Bootstrap 5" },
                    { href: "https://github.com/twbs/bootstrap/tree/v4-dev", label: "Bootstrap 4" },
                    { href: "https://github.com/twbs/icons", label: "Icons" },
                    { href: "https://github.com/twbs/rfs", label: "RFS" },
                    { href: "https://github.com/twbs/examples/", label: "npm starter" },
                ],
            },
            {
                title: "Community",
                item: [
                    { href: "#", label: "Issues" },
                    { href: "#", label: "Discussions" },
                    { href: "#", label: "Corporate sponsors" },
                    { href: "#", label: "Open Collective" },
                    { href: "#", label: "Stack Overflow" },
                ],
            },
        ],
    });
};
const searchShortcutHandler = (event) => {
    if (event.ctrlKey && event.key == "k") {
        event.stopPropagation();
        event.preventDefault();
        showSearchDialog();
    }
};
const setupSearchShortcut = () => {
    document.addEventListener("keydown", searchShortcutHandler);
};
bsts_1.core.documentReady(() => {
    onThemeChange(getSavedTheme());
    let body = document.getElementById("main");
    bsts_1.core.replaceChild(body, mainContainer());
    setupSearchShortcut();
    loadDefaultDoc();
    setupWindowPopState();
    setupBSNavigate();
    setupBootswatch();
    setupThemeChanges();
});

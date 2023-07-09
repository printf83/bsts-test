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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMenu = exports.Container = exports.container = exports.genMain = exports.genMainContent = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../example/_index.js"));
const dispatchCustomEvent = (root, eventName, value) => {
    if (root) {
        if (value) {
            bsts_1.core.requestIdleCallback(() => {
                root.dispatchEvent(new CustomEvent(eventName, { detail: value }));
            }, 300);
        }
        else {
            bsts_1.core.requestIdleCallback(() => {
                root.dispatchEvent(new CustomEvent(eventName));
            }, 300);
        }
    }
};
const changeTheme = (value, icon) => {
    let bsTheme = document.getElementById("bs-theme");
    let bsThemeMenu = bsTheme.nextSibling;
    let lastActive = bsThemeMenu.querySelectorAll(".dropdown-item.active")[0];
    if (lastActive) {
        lastActive.classList.remove("active");
        lastActive.removeAttribute("aria-current");
    }
    let newActive = bsThemeMenu.querySelectorAll(`.dropdown-item[data-value='${value}']`)[0];
    if (newActive) {
        newActive.classList.add("active");
        newActive.setAttribute("aria-current", "true");
    }
    bsts_1.core.replaceChild(bsTheme, new bsts_1.b.caption({ icon: icon, labelDisplay: "lg-none" }, "Toggle theme"));
    let root = bsTheme.closest(".bs-main-root");
    dispatchCustomEvent(root, "bs-theme-change", value);
};
const changeBootswatch = (value) => {
    let bsBootswatch = document.getElementById("bs-bootswatch");
    let bsBootswatchMenu = bsBootswatch.nextSibling;
    let bsBootswatchLabel = document.getElementById("bs-bootswatch-label");
    let lastActive = bsBootswatchMenu.querySelectorAll("a.active")[0];
    if (lastActive) {
        lastActive.classList.remove("active");
        lastActive.removeAttribute("aria-current");
    }
    let newActive = bsBootswatchMenu.querySelectorAll(`a[data-value='${value}']`)[0];
    if (newActive) {
        newActive.classList.add("active");
        newActive.setAttribute("aria-current", "true");
    }
    bsts_1.core.replaceWith(bsBootswatchLabel, new bsts_1.h.span({ id: "bs-bootswatch-label" }, `${bsts_1.core.uppercaseFirst(value)}`));
    let root = bsBootswatch.closest(".bs-main-root");
    dispatchCustomEvent(root, "bs-bootswatch-change", value);
};
const changeVersion = (value) => {
    let bsVersion = document.getElementById("bs-version");
    let bsVersionMenu = bsVersion.nextSibling;
    let bsVersionLabel = document.getElementById("bs-version-label");
    let lastActive = bsVersionMenu.querySelectorAll(".dropdown-item.active")[0];
    if (lastActive) {
        lastActive.classList.remove("active");
        lastActive.removeAttribute("aria-current");
    }
    let newActive = bsVersionMenu.querySelectorAll(`.dropdown-item[data-value='${value}']`)[0];
    if (newActive) {
        newActive.classList.add("active");
        newActive.setAttribute("aria-current", "true");
    }
    bsts_1.core.replaceWith(bsVersionLabel, new bsts_1.h.span({ id: "bs-version-label" }, `v${value}`));
    let root = bsVersion.closest(".bs-main-root");
    dispatchCustomEvent(root, "bs-version-change", value);
};
const changeInsideLink = (value) => {
    let bsInsideLink = document.getElementById("bs-inside-link");
    let lastActive = bsInsideLink.querySelectorAll(".nav-link.active")[0];
    if (lastActive) {
        lastActive.classList.remove("active");
    }
    let newActive = bsInsideLink.querySelectorAll(`.nav-link[data-value='${value}']`)[0];
    if (newActive) {
        newActive.classList.add("active");
    }
    let root = bsInsideLink.closest(".bs-main-root");
    dispatchCustomEvent(root, "bs-inside-link-change", value);
};
const changeMenu = (value) => {
    let bsMenu = document.getElementById("bs-menu");
    let lastActive = bsMenu.querySelectorAll(".bs-links-link.active")[0];
    if (lastActive) {
        lastActive.classList.remove("active");
        lastActive.removeAttribute("aria-current");
    }
    let newActive = bsMenu.querySelectorAll(`.bs-links-link[data-value='${value}']`)[0];
    if (newActive) {
        newActive.classList.add("active");
        newActive.setAttribute("aria-current", "page");
    }
    let root = bsMenu.closest(".bs-main-root");
    dispatchCustomEvent(root, "bs-menu-change", value);
};
const genTheme = (textColor, navbarItemTheme, currentTheme) => {
    if (navbarItemTheme) {
        let indexIcon = -1;
        navbarItemTheme.forEach((i, ix) => {
            if (i.value === currentTheme) {
                indexIcon = ix;
            }
        });
        if (indexIcon > -1) {
            let getCurrentIconIndex = navbarItemTheme[indexIcon];
            let currentIcon = getCurrentIconIndex.icon;
            return [
                new bsts_1.b.navbar.item({
                    paddingY: [2, "lg-1"],
                    col: [12, "lg-auto"],
                }, [
                    new bsts_1.b.verticalrule({
                        display: ["none", "lg-flex"],
                        height: 100,
                        marginX: "lg-2",
                        textColor: textColor,
                    }),
                    new bsts_1.h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
                ]),
                new bsts_1.b.navbar.item({ dropdown: true }, [
                    new bsts_1.b.dropdown.button({
                        navItem: true,
                        id: "bs-theme",
                        paddingY: 2,
                        paddingX: [0, "lg-2"],
                        display: "flex",
                        alignItem: "center",
                        textColor: textColor,
                        label: "Toggle theme",
                    }, new bsts_1.b.caption({
                        icon: currentIcon,
                        labelDisplay: "lg-none",
                    }, "Toggle theme")),
                    new bsts_1.b.dropdown.menu({ positionView: "end", customStyle: 1 }, navbarItemTheme.map((i) => {
                        return new bsts_1.b.dropdown.item({
                            on: {
                                click: (_e) => {
                                    changeTheme(i.value, i.icon);
                                },
                            },
                            active: i.value === currentTheme,
                            data: { value: i.value },
                        }, new bsts_1.b.caption({ icon: i.icon }, i.label));
                    })),
                ]),
            ];
        }
        else {
            return [];
        }
    }
    else {
        return [];
    }
};
const genBootswatch = (textColor, navbarItemBootswatch, currentBootswatch) => {
    if (navbarItemBootswatch) {
        return [
            new bsts_1.b.navbar.item({
                paddingY: [2, "lg-1"],
                col: [12, "lg-auto"],
            }, [
                new bsts_1.b.verticalrule({
                    display: ["none", "lg-flex"],
                    height: 100,
                    marginX: "lg-2",
                    textColor: textColor,
                }),
                new bsts_1.h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
            ]),
            new bsts_1.b.navbar.item({ dropdown: true }, [
                new bsts_1.b.dropdown.button({
                    navItem: true,
                    id: "bs-bootswatch",
                    paddingY: 2,
                    paddingX: [0, "lg-2"],
                    textColor: textColor,
                    label: "Bootswatch theme",
                }, [
                    new bsts_1.h.span({ marginEnd: 2 }, new bsts_1.b.icon("palette2")),
                    new bsts_1.h.span({ id: "bs-bootswatch-label" }, `${bsts_1.core.uppercaseFirst(currentBootswatch ? currentBootswatch : "Default")}`),
                ]),
                new bsts_1.b.dropdown.menu({
                    positionView: "end",
                    customStyle: 1,
                    style: { minWidth: "20rem" },
                }, new bsts_1.h.div({
                    class: "bs-bootswatch-menu",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 1,
                }, navbarItemBootswatch.map((i) => {
                    return new bsts_1.h.a({
                        on: {
                            click: (_e) => {
                                changeBootswatch(i.value);
                            },
                        },
                        class: [i.value === currentBootswatch ? "active" : undefined],
                        data: { value: i.value },
                    }, i.label);
                }))),
            ]),
        ];
    }
    else {
        return [];
    }
};
const genVersion = (textColor, name, navbarItemVersion, currentVersion) => {
    if (navbarItemVersion) {
        return [
            new bsts_1.b.navbar.item({
                paddingY: [2, "lg-1"],
                col: [12, "lg-auto"],
            }, [
                new bsts_1.b.verticalrule({
                    display: ["none", "lg-flex"],
                    height: 100,
                    marginX: "lg-2",
                    textColor: textColor,
                }),
                new bsts_1.h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
            ]),
            new bsts_1.b.navbar.item({ dropdown: true }, [
                new bsts_1.b.dropdown.button({
                    navItem: true,
                    id: "bs-version",
                    paddingY: 2,
                    paddingX: [0, "lg-2"],
                    textColor: textColor,
                }, [
                    new bsts_1.h.span({ display: "lg-none", marginEnd: 2, aria: { hidden: "true" } }, name),
                    new bsts_1.h.span({ id: "bs-version-label" }, `v${currentVersion}`),
                ]),
                new bsts_1.b.dropdown.menu({ positionView: "end", customStyle: 1 }, navbarItemVersion.map((i) => {
                    return new bsts_1.b.dropdown.item({
                        on: {
                            click: (_e) => {
                                changeVersion(i.value);
                            },
                        },
                        active: i.value === currentVersion,
                        data: { value: i.value },
                    }, i.label);
                })),
            ]),
        ];
    }
    else {
        return [];
    }
};
const genOutsideLink = (textColor, itemOutsideLink, itemVersion, itemBootswatch, itemTheme) => {
    return [
        new bsts_1.h.hr({ display: "lg-none", textColor: "light" }),
        new bsts_1.b.navbar.itemcontainer({ flex: ["row", "wrap"], marginStart: "md-auto" }, [
            ...(itemOutsideLink
                ? itemOutsideLink.map((i) => {
                    return new bsts_1.b.navbar.item({ col: [6, "lg-auto"] }, [
                        new bsts_1.b.navbar.link({
                            paddingY: 2,
                            paddingX: [0, "lg-2"],
                            textColor: textColor,
                            href: i.href,
                            target: i.onclick ? undefined : "_blank",
                            aria: { label: i.label },
                            on: { click: i.onclick },
                        }, new bsts_1.b.caption({ icon: i.icon, labelDisplay: "lg-none" }, i.label)),
                    ]);
                })
                : []),
            ...(itemVersion ? itemVersion : []),
            ...(itemBootswatch ? itemBootswatch : []),
            ...(itemTheme ? itemTheme : []),
        ]),
    ];
};
const genInsideLink = (textColor, itemInsideLink, currentInsideLink) => {
    if (itemInsideLink) {
        return [
            new bsts_1.h.hr({ display: "lg-none", textColor: "light" }),
            new bsts_1.b.navbar.itemcontainer({ flex: ["wrap", "row"], class: "bs-navbar-nav", id: "bs-inside-link" }, itemInsideLink.map((i) => {
                return new bsts_1.b.navbar.item({ col: [6, "lg-auto"] }, [
                    new bsts_1.b.navbar.link({
                        paddingY: 2,
                        paddingX: [0, "lg-2"],
                        href: "#",
                        active: i.value === currentInsideLink,
                        textColor: textColor,
                        data: { value: i.value },
                        on: {
                            click: (_e) => {
                                changeInsideLink(i.value);
                            },
                        },
                    }, i.label),
                ]);
            })),
        ];
    }
    else {
        return [];
    }
};
const genMenu = (itemMenu, currentMenu) => {
    if (itemMenu) {
        return itemMenu.map((i) => {
            return new bsts_1.h.li({ class: "bs-links-group", paddingY: 2 }, [
                new bsts_1.h.strong({
                    class: "bs-links-heading",
                    display: "flex",
                    width: 100,
                    alignItem: "center",
                    fontWeight: "semibold",
                }, new bsts_1.b.caption({ icon: i.icon }, i.label)),
                new bsts_1.h.ul({
                    unstyle: true,
                    fontWeight: "normal",
                    paddingBottom: 2,
                    small: true,
                }, i.item.map((j) => {
                    let itemValue = j.value;
                    let itemLabel = j.label;
                    let active = itemValue === currentMenu ? true : false;
                    return new bsts_1.h.li(new bsts_1.h.a({
                        class: ["bs-links-link", active ? "active" : undefined],
                        display: "inline-block",
                        rounded: true,
                        href: `?d=${itemValue}`,
                        aria: { current: active ? "page" : undefined },
                        data: {
                            value: itemValue,
                        },
                        on: {
                            click: (event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                changeMenu(itemValue);
                            },
                        },
                    }, itemLabel));
                })),
            ]);
        });
    }
    else {
        return [];
    }
};
const genIntro = (content) => {
    if (content) {
        if (content.loading) {
            return new bsts_1.h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
                new e.pagetitle({
                    loading: true,
                }, bsts_1.core.placeholder(1, 3)),
                new e.description({ loadingPlaceholderAnimation: "wave" }, bsts_1.core.placeholder(10, 15)),
            ]);
        }
        else {
            return new bsts_1.h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
                content.title
                    ? new e.pagetitle({
                        sourceWeb: content.sourceWeb,
                        sourceUrl: content.sourceUrl,
                        addedVersion: content.addedVersion,
                        bookmark: content.bookmark,
                        docId: content.docId,
                        on: {
                            "toggle.bs.bookmark": (event) => {
                                const target = event.target;
                                const docId = target.getAttribute("data-bs-docid");
                                if (docId) {
                                    const root = target.closest(".bs-main-root");
                                    dispatchCustomEvent(root, "bs-bookmark-change", docId);
                                }
                            },
                        },
                    }, content.title ? content.title : "")
                    : "",
                content.description ? new e.description(content.description) : "",
            ]);
        }
    }
    else {
        return "";
    }
};
const genToc = (content) => {
    if (content && typeof content.item === "function") {
        let contentItem = content.item();
        if (contentItem && Array.isArray(contentItem)) {
            let t = [];
            //get title
            contentItem.forEach((i) => {
                var _a, _b, _c, _d, _f, _g, _h, _j, _k, _l;
                if (bsts_1.core.isTag(i) && i.tag === "section") {
                    if (((_a = i.attr) === null || _a === void 0 ? void 0 : _a.id) && ((_c = (_b = i.attr) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.title)) {
                        let item = { href: `#${(_d = i.attr) === null || _d === void 0 ? void 0 : _d.id}`, label: (_g = (_f = i.attr) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.title };
                        let deep = ((_j = (_h = i.attr) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.deep) ? parseInt((_l = (_k = i.attr) === null || _k === void 0 ? void 0 : _k.data) === null || _l === void 0 ? void 0 : _l.deep) : 0;
                        t.push({
                            deep: deep,
                            item: item,
                        });
                    }
                }
                else {
                    console.warn(`${content.title} section problem`);
                }
            });
            //detect same id
            const listOfHref = t.map((i) => i.item.href);
            const duplicateItem = listOfHref.filter((i, ix) => listOfHref.indexOf(i) !== ix);
            if (duplicateItem && duplicateItem.length > 0) {
                console.warn(`Found ${duplicateItem.length} anchor in ${content.title}.`, duplicateItem);
            }
            //arrange title
            let u = [];
            if (t && t.length > 0) {
                t.forEach((i) => {
                    if (i.deep === 0) {
                        u.push(i.item);
                    }
                    else if (i.deep === 1) {
                        if (!u[u.length - 1].item) {
                            u[u.length - 1].item = [];
                        }
                        u[u.length - 1].item.push(i.item);
                    }
                    else if (i.deep === 2) {
                        let y = u.length - 1;
                        let x = u[y].item.length - 1;
                        if (!u[y].item[x].item) {
                            u[y].item[x].item = [];
                        }
                        u[y].item[x].item.push(i.item);
                    }
                });
            }
            //process toc
            if (u.length > 1) {
                return new bsts_1.h.div({
                    class: "bs-toc",
                    marginTop: 3,
                    marginBottom: [5, "lg-5"],
                    marginStart: [0, "md-3", "lg-0"],
                    marginY: "lg-0",
                    paddingStart: "xl-3",
                    textColor: "body-secondary",
                }, [
                    new bsts_1.b.collapse.button({
                        color: "link",
                        padding: "md-0",
                        marginBottom: [2, "md-0"],
                        textDecoration: "none",
                        class: "bs-toc-toggle",
                        display: "md-none",
                        target: "#tocContents",
                        controlfor: "tocContents",
                    }, [
                        "On this page",
                        new bsts_1.b.icon({
                            id: "chevron-expand",
                            display: "md-none",
                            marginStart: 2,
                            aria: { hidden: "true" },
                        }),
                    ]),
                    new bsts_1.h.h(5, { display: ["none", "md-block"], fontSize: 6, marginY: 2 }, "On this page"),
                    new bsts_1.h.hr({ display: ["none", "md-block"], marginY: 2 }),
                    new bsts_1.b.collapse.container({
                        id: "tocContents",
                        class: "bs-toc-collapse",
                    }, new bsts_1.h.nav({ id: "bs-toc" }, new bsts_1.h.ul({
                        marginStart: [3, "md-0"],
                    }, content.loading
                        ? u.map((_i) => {
                            return new bsts_1.h.li({ loadingPlaceholderAnimation: "wave" }, bsts_1.core.placeholder(1, 3, 1, 3));
                        })
                        : u.map((i) => {
                            return new bsts_1.h.li([
                                new bsts_1.h.a({ href: i.href }, i.label),
                                i.item
                                    ? new bsts_1.h.ul(i.item.map((j) => {
                                        return new bsts_1.h.li([
                                            new bsts_1.h.a({ href: j.href }, j.label),
                                            j.item
                                                ? new bsts_1.h.ul(j.item.map((k) => {
                                                    return new bsts_1.h.li(new bsts_1.h.a({ href: k.href }, k.label));
                                                }))
                                                : "",
                                        ]);
                                    }))
                                    : "",
                            ]);
                        })))),
                ]);
            }
            else {
                return "";
            }
        }
        else {
            return "";
        }
    }
    else {
        return "";
    }
};
const genContent = (content) => {
    if (content && content.item) {
        return new bsts_1.h.div({
            // id: "bs-content-scrollspy",
            // target: "#bs-toc",
            // smooth: true,
            class: "bs-content",
            paddingStart: "lg-2",
            // rootMargin: "0px 0px -40%",
        }, content.item());
    }
    else {
        return "";
    }
};
const genFooter = (itemFooter) => {
    if (itemFooter) {
        return itemFooter.map((i, ix) => {
            return new bsts_1.h.div({ col: [6, "lg-2"], marginBottom: 3, offset: ix === 0 ? "lg-1" : undefined }, [
                new bsts_1.h.h(5, i.title),
                new bsts_1.h.ul({ unstyle: true }, i.item.map((j) => {
                    return new bsts_1.h.li({ marginBottom: 2 }, new bsts_1.h.a({ href: j.href }, j.label));
                })),
            ]);
        });
    }
    else {
        return [];
    }
};
const genMainContent = (content) => {
    return [genIntro(content), genToc(content), genContent(content)];
};
exports.genMainContent = genMainContent;
const genMain = (content) => {
    return new bsts_1.h.main({
        order: 1,
        class: "bs-main",
        id: "bs-main",
        data: {
            "bs-target": "#bs-toc",
            "bs-smooth-scroll": "true",
            "bs-root-margin": "0px 0px -40%",
        },
        tabindex: 0,
        on: {
            build: (_event) => {
                const target = document.getElementById("bs-main");
                if (target) {
                    const id = bsts_1.core.UUID();
                    target.setAttribute("data-build-id", id);
                    bsts_1.core.requestIdleCallback(() => {
                        const target = document.getElementById("bs-main");
                        const bstoc = document.getElementById("bs-toc");
                        if (target && bstoc) {
                            if (target.getAttribute("data-build-id") === id) {
                                target.removeAttribute("data-build-id");
                                bsts_1.b.scrollspy.init(target, {
                                    target: "#bs-toc",
                                    smoothScroll: true,
                                    rootMargin: "0px 0px -40%",
                                });
                            }
                        }
                    }, 300);
                }
            },
            destroy: (event) => {
                const target = event.target;
                bsts_1.b.scrollspy.dispose(target);
            },
        },
    }, [genIntro(content), genToc(content), genContent(content)]);
};
exports.genMain = genMain;
const convert = (attr) => {
    attr.class = bsts_1.core.mergeClass(attr.class, "bs-main-root");
    attr.elem = [
        new bsts_1.b.navbar.containerHeader({
            expand: "lg",
            sticky: "top",
            bgColor: attr.bgColor || "primary",
            bgGradient: true,
            shadow: true,
            padding: 2,
        }, [
            new bsts_1.b.navbar.innercontainerNav({
                class: "bs-gutter",
                container: "xxl",
                padding: 0,
                flex: ["wrap", "lg-nowrap"],
                label: "Main navigation",
            }, [
                new bsts_1.h.div({ class: "bs-navbar-toggle" }, [
                    new bsts_1.b.navbar.toggle.offcanvas({
                        class: "bs-noshadow",
                        padding: 2,
                        target: "#bsSidebar",
                        controlfor: "bsSidebar",
                        label: "Toggle docs navigation",
                        textColor: attr.textColor || "light",
                    }, bsts_1.b.icon.bi("list")),
                ]),
                new bsts_1.b.navbar.brand({
                    href: "#",
                    label: attr.name || "Bootstrap",
                    marginEnd: ["lg-2", 0],
                    fontSize: 6,
                    padding: 0,
                    textColor: attr.textColor || "light",
                    on: {
                        click: () => {
                            window.scrollTo(0, 0);
                        },
                    },
                }, attr.icon ? new bsts_1.b.icon(attr.icon) : new bsts_1.b.icon({ id: "bootstrap", fontSize: 3 })),
                new bsts_1.h.div({ display: "flex", class: "bs-navbar-toggle" }, [
                    new bsts_1.h.div({
                        class: "bs-search",
                        on: {
                            click: (event) => {
                                let root = event.target.closest(".bs-main-root");
                                dispatchCustomEvent(root, "bs-search-click");
                            },
                        },
                    }, new bsts_1.h.button({
                        type: "button",
                        class: "bs-search-button",
                        aria: { label: "Search" },
                        display: "flex",
                        justifyContent: "between",
                        alignItem: "center",
                        focusRing: true,
                    }, [
                        new bsts_1.h.span({
                            class: "bs-search-button-container",
                        }, [
                            new bsts_1.b.icon({ class: "bs-search-icon", id: "search" }),
                            new bsts_1.h.span({ class: "bs-search-button-placeholder", marginStart: 2 }, "Search"),
                        ]),
                        new bsts_1.h.span({
                            class: "bs-search-button-keys",
                        }, [
                            new bsts_1.h.kbd({ class: "bs-search-button-key" }, new bsts_1.h.span({ style: { fontSize: "0.75em" } }, "CTRL")),
                            new bsts_1.h.kbd({ class: "bs-search-button-key" }, "K"),
                        ]),
                    ])),
                    new bsts_1.b.navbar.toggle.offcanvas({
                        class: "bs-noshadow",
                        display: ["flex", "lg-none"],
                        order: 3,
                        padding: 2,
                        target: "#bsNavbar",
                        controlfor: "bsNavbar",
                        label: "Toggle navigation",
                        textColor: attr.textColor || "light",
                    }, bsts_1.b.icon.bi("three-dots")),
                ]),
                new bsts_1.b.offcanvas.container({
                    id: "bsNavbar",
                    placement: "end",
                    show: "lg",
                    flex: "grow-1",
                    labelledby: "bsNavbarOffcanvasLabel",
                    scroll: true,
                }, [
                    new bsts_1.b.offcanvas.header({ paddingX: 4, paddingBottom: 0, bgColor: attr.bgColor || "primary" }, [
                        new bsts_1.b.offcanvas.title({ id: "bsNavbarOffcanvasLabel", textColor: attr.textColor || "light" }, attr.name || "Bootstrap"),
                        new bsts_1.b.offcanvas.btnclose({ target: "#bsNavbar", white: true }),
                    ]),
                    new bsts_1.b.offcanvas.body({ padding: [4, "lg-0"], paddingTop: 0, bgColor: attr.bgColor || "primary" }, [
                        ...genInsideLink(attr.textColor || "primary", attr.itemInsideLink, attr.currentInsideLink),
                        ...(attr.itemOutsideLink ||
                            attr.itemVersion ||
                            attr.itemTheme ||
                            attr.itemBootswatch
                            ? genOutsideLink(attr.textColor || "primary", attr.itemOutsideLink, genVersion(attr.textColor || "primary", "@printf83/bsts", attr.itemVersion, attr.currentVersion), genBootswatch(attr.textColor || "primary", attr.itemBootswatch, attr.currentBootswatch), genTheme(attr.textColor || "primary", attr.itemTheme, attr.currentTheme))
                            : []),
                    ]),
                ]),
            ]),
        ]),
        new bsts_1.h.div({ class: ["bs-gutter", "bs-layout"], container: "xxl", marginTop: 3, marginY: "md-4" }, [
            new bsts_1.h.aside({ class: "bs-sidebar" }, [
                new bsts_1.b.offcanvas.container({
                    id: "bsSidebar",
                    show: "lg",
                    placement: "start",
                    labelledby: "bsSidebarOffcanvasLabel",
                }, [
                    new bsts_1.b.offcanvas.header({ border: "bottom" }, [
                        new bsts_1.b.offcanvas.title({ id: "bsSidebarOffcanvasLabel" }, "Browse docs"),
                        new bsts_1.b.offcanvas.btnclose({ target: "#bsSidebar" }),
                    ]),
                    new bsts_1.b.offcanvas.body([
                        new bsts_1.h.nav({ id: "bs-menu", class: "bs-links", width: 100, label: "Docs navication" }, [
                            new bsts_1.h.ul({
                                class: "bs-links-nav",
                                unstyle: true,
                                marginBottom: 0,
                                paddingBottom: [3, "md-2"],
                                paddingEnd: "lg-2",
                                data: {
                                    "bs-dismiss": "offcanvas",
                                    "bs-target": "#bsSidebar",
                                },
                            }, genMenu(attr.itemMenu, attr.currentMenu)),
                        ]),
                    ]),
                ]),
            ]),
            // new h.main(
            // 	{
            // 		order: 1,
            // 		class: "bs-main",
            // 		id: "bs-main",
            // 		data: {
            // 			"bs-target": "#bs-toc",
            // 			"bs-smooth-scroll": "true",
            // 			"bs-root-margin": "0px 0px -40%",
            // 		},
            // 		tabindex: 0,
            // 		on: {
            // 			build: (event) => {
            // 				const target = event.target as Element;
            // 				const id = core.UUID();
            // 				target.setAttribute("data-build-id", id);
            // 				setTimeout(
            // 					(id: string, target: Element) => {
            // 						if (target.getAttribute("data-build-id") === id) {
            // 							target.removeAttribute("data-build-id");
            // 							core.observeResizeObserver(target, (r) => {
            // 								if (r && r.length > 0) {
            // 									console.log("Scrollspy refresh");
            // 									b.scrollspy.refresh("#bs-main");
            // 								}
            // 							});
            // 							console.log("Setup scrollspy");
            // 							b.scrollspy.init("#bs-main");
            // 						} else {
            // 							console.log("Expired");
            // 						}
            // 					},
            // 					1000,
            // 					id,
            // 					target
            // 				);
            // 			},
            // 			destroy: (event) => {
            // 				const target = event.target as Element;
            // 				console.log("Remove scrollspy");
            // 				core.disconnectResizeObserver(target);
            // 				b.scrollspy.dispose(target);
            // 			},
            // 		},
            // 	},
            // 	[genIntro(attr.content), genToc(attr.content), genContent(attr.content)]
            // ),
            (0, exports.genMain)(attr.content),
        ]),
        new bsts_1.h.footer({ class: "bs-footer", paddingY: [4, "md-5"], marginTop: 5, bgColor: "body-tertiary" }, new bsts_1.h.div({ container: true, paddingY: 4, paddingX: [4, "md-3"], textColor: "body-secondary" }, new bsts_1.h.div({ row: true }, [
            new bsts_1.h.div({ col: "lg-3", marginBottom: 3 }, [
                new bsts_1.h.a({
                    display: "inline-flex",
                    alignItem: "center",
                    marginBottom: 2,
                    textColor: "body-secondary",
                    textDecoration: "none",
                    href: "#",
                    label: attr.name || "Bootstrap",
                    on: {
                        click: () => {
                            window.scrollTo(0, 0);
                        },
                    },
                }, [
                    attr.icon ? new bsts_1.b.icon(attr.icon) : new bsts_1.b.icon({ id: "bootstrap", fontSize: 3 }),
                    new bsts_1.h.span({ fontSize: 5, marginStart: 2 }, attr.name || "Bootstrap"),
                ]),
                new bsts_1.h.ul({ unstyle: true, class: "small" }, [
                    new bsts_1.h.li({ marginBottom: 2 }, [
                        new bsts_1.h.strong({ textColor: "primary" }, "Disclaimer! "),
                        "This is {{s::not a real Bootstrap}} website. This is only a {{s::Bootstrap TS test website}} to test {{https://github.com/printf83/bsts::@printf83/bsts}} library and make sure it's fully support Bootstrap. ",
                        "Bootsrap is designed and built with all the love in the world by the {{https://getbootstrap.com/docs/5.3/about/team/::Bootstrap team}} with the help of {{https://github.com/twbs/bootstrap/graphs/contributors::Bootstrap contributors}}.",
                    ]),
                    new bsts_1.h.li({ marginBottom: 2 }, "Code licensed {{https://github.com/twbs/bootstrap/blob/main/LICENSE::MIT}}, docs {{https://creativecommons.org/licenses/by/3.0/::CC BY 3.0}}."),
                    new bsts_1.h.li({ marginBottom: 2 }, "Currently v5.3.0."),
                ]),
            ]),
            ...genFooter(attr.itemFooter),
        ]))),
    ];
    delete attr.icon;
    delete attr.name;
    delete attr.textColor;
    delete attr.bgColor;
    delete attr.itemOutsideLink;
    delete attr.itemMenu;
    delete attr.itemInsideLink;
    delete attr.itemTheme;
    delete attr.itemBootswatch;
    delete attr.itemVersion;
    delete attr.itemFooter;
    delete attr.currentMenu;
    delete attr.currentInsideLink;
    delete attr.currentTheme;
    delete attr.currentBootswatch;
    delete attr.currentVersion;
    delete attr.content;
    return attr;
};
class container extends bsts_1.h.div {
    constructor(...arg) {
        super(bsts_1.core.bsConsNoElemArg(convert, arg));
    }
}
exports.container = container;
const Container = (Attr) => bsts_1.core.genTagClass(container, Attr);
exports.Container = Container;
const updateMenu = (itemMenu, currentMenu) => {
    const bsMenu = document.getElementById("bs-menu");
    bsts_1.core.replaceWith(bsMenu, new bsts_1.h.nav({ id: "bs-menu", class: "bs-links", width: 100, label: "Docs navication" }, [
        new bsts_1.h.ul({
            class: "bs-links-nav",
            unstyle: true,
            marginBottom: 0,
            paddingBottom: [3, "md-2"],
            paddingEnd: "lg-2",
            data: {
                "bs-dismiss": "offcanvas",
                "bs-target": "#bsSidebar",
            },
        }, genMenu(itemMenu, currentMenu)),
    ]));
};
exports.updateMenu = updateMenu;

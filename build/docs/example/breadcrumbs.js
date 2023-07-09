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
exports.breadcrumbs = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.breadcrumbs = {
    title: "Breadcrumbs",
    description: "Integrate custom icons and create stepper components.",
    item: () => {
        return [
            new e.section([
                new e.title("Rounded padding"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.breadcrumb.container({ label: "breadcrumb", bgColor: "body-tertiary", rounded: 3, padding: 3 }, [
                            new bsts_1.b.breadcrumb.item({ href: "#" }, "Home"),
                            new bsts_1.b.breadcrumb.item({ href: "#" }, "Library"),
                            new bsts_1.b.breadcrumb.item({ active: true, href: "#" }, "Data"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("With icon"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.breadcrumb.container({ label: "breadcrumb", bgColor: "body-tertiary", rounded: 3, padding: 3 }, [
                            new bsts_1.b.breadcrumb.item({
                                textDecoration: "none",
                                fontWeight: "semibold",
                                linkColor: "body-emphasis",
                                href: "#",
                            }, new bsts_1.b.icon("house-fill")),
                            new bsts_1.b.breadcrumb.item({
                                textDecoration: "none",
                                fontWeight: "semibold",
                                linkColor: "body-emphasis",
                                href: "#",
                            }, "Library"),
                            new bsts_1.b.breadcrumb.item({ active: true, href: "#" }, "Data"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Custom divider"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.breadcrumb.container({
                            label: "breadcrumb",
                            bgColor: "body-tertiary",
                            rounded: 3,
                            padding: 3,
                            divider: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236c757d'%3E%3Cpath fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
                        }, [
                            new bsts_1.b.breadcrumb.item({
                                textDecoration: "none",
                                fontWeight: "semibold",
                                linkColor: "body-emphasis",
                                href: "#",
                            }, new bsts_1.b.icon("house-fill")),
                            new bsts_1.b.breadcrumb.item({
                                textDecoration: "none",
                                fontWeight: "semibold",
                                linkColor: "body-emphasis",
                                href: "#",
                            }, "Library"),
                            new bsts_1.b.breadcrumb.item({ active: true, href: "#" }, "Data"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Flex"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.breadcrumb.container({
                            label: "breadcrumb",
                            bgColor: "body-tertiary",
                            rounded: 3,
                            border: true,
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            textAlign: "center",
                            padding: 3,
                            divider: "''",
                        }, [
                            new bsts_1.b.breadcrumb.item({
                                textDecoration: "none",
                                fontWeight: "semibold",
                                linkColor: "body-emphasis",
                                href: "#",
                            }, new bsts_1.b.caption({ icon: "house-fill" }, "Home")),
                            new bsts_1.b.breadcrumb.item({
                                textDecoration: "none",
                                fontWeight: "semibold",
                                linkColor: "body-emphasis",
                                href: "#",
                            }, "Library"),
                            new bsts_1.b.breadcrumb.item({ active: true, href: "#" }, "Data"),
                        ]);
                    },
                }),
            ]),
            //----------------------
        ];
    },
};

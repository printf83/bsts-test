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
exports.badges = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.badges = {
    title: "Badges",
    description: "Make badges work with custom inner HTML and new looks.",
    item: () => {
        return [
            new e.section([
                new e.title("Style 1"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.badge({ textBgColor: i, rounded: "pill" }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Style 2"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.badge({
                                bgColor: `${i}-subtle`,
                                textColor: `${i}-emphasis`,
                                rounded: "pill",
                            }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Style 3"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.badge({
                                bgColor: `${i}-subtle`,
                                textColor: `${i}-emphasis`,
                                border: true,
                                borderColor: `${i}-subtle`,
                                rounded: "pill",
                            }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("With image"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i, ix) => {
                            return new bsts_1.b.badge({
                                bgColor: `${i}-subtle`,
                                textColor: `${i}-emphasis`,
                                border: true,
                                borderColor: `${i}-subtle`,
                                rounded: "pill",
                                display: "flex",
                                alignItem: "center",
                                gap: 2,
                            }, [
                                new bsts_1.b.img({
                                    rounded: "circle",
                                    attrWidth: 24,
                                    attrHeight: 24,
                                    src: `https://picsum.photos/seed/bsts_${ix}/24/24.webp`,
                                }),
                                bsts_1.core.uppercaseFirst(i),
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("With close button"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i, ix) => {
                            return new bsts_1.b.badge({
                                bgColor: `${i}-subtle`,
                                textColor: `${i}-emphasis`,
                                border: true,
                                borderColor: `${i}-subtle`,
                                rounded: "pill",
                                display: "flex",
                                alignItem: "center",
                                gap: 2,
                            }, [
                                bsts_1.core.uppercaseFirst(i),
                                new bsts_1.b.icon({
                                    id: "x-circle-fill",
                                    fontSize: 6,
                                    pointerEvent: "auto",
                                    on: {
                                        click: (event) => {
                                            const target = event.target;
                                            bsts_1.core.removeElement(target.closest(".badge"));
                                        },
                                    },
                                }),
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("With image and close button"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i, ix) => {
                            return new bsts_1.b.badge({
                                bgColor: `${i}-subtle`,
                                textColor: `${i}-emphasis`,
                                border: true,
                                borderColor: `${i}-subtle`,
                                rounded: "pill",
                                display: "flex",
                                alignItem: "center",
                                gap: 2,
                            }, [
                                new bsts_1.b.img({
                                    rounded: "circle",
                                    attrWidth: 24,
                                    attrHeight: 24,
                                    src: `https://picsum.photos/seed/bsts_${ix}/24/24.webp`,
                                }),
                                bsts_1.core.uppercaseFirst(i),
                                new bsts_1.b.verticalrule(),
                                new bsts_1.b.icon({
                                    id: "x-circle-fill",
                                    fontSize: 6,
                                    pointerEvent: "auto",
                                    on: {
                                        click: (event) => {
                                            const target = event.target;
                                            bsts_1.core.removeElement(target.closest(".badge"));
                                        },
                                    },
                                }),
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
        ];
    },
};

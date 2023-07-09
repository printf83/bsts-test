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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
const auto_1 = __importDefault(require("chart.js/auto"));
exports.test = {
    title: "Testing memory leak",
    description: "This is testing page to test our library one by one",
    item: () => {
        return [
            // new e.section([
            // 	new e.title("Tooltip"),
            // 	new e.code({
            // 		output: () => {
            // 			return new b.button("Hello");
            // 		},
            // 	}),
            // ]),
            //----------------------
            new e.section([
                new e.title("Animation"),
                new e.code({
                    outputAttr: { display: "flex", gap: 3, flex: "wrap" },
                    output: () => {
                        return [
                            "rotation",
                            "sidetoside",
                            "zoom-in",
                            "zoom-out",
                            "spin",
                            "pulse",
                            "shake",
                            "barrel-roll",
                            "floater",
                            "wiggle",
                            "pound",
                            "heartbeat",
                            "roller-right",
                            "roller-left",
                            "slide-down",
                            "slide-up",
                            "slide-left",
                            "slide-right",
                            "fade-in",
                            "fade-out",
                            "rotate-in-right",
                            "rotate-in-left",
                            "rotate-in",
                            "bounce-in",
                        ].map((i) => new bsts_1.h.div({
                            display: "flex",
                            justifyContent: "center",
                            alignItem: "center",
                            overflow: "hidden",
                            padding: 2,
                            border: true,
                            rounded: 2,
                            col: [6, "md-4", "lg-3", "xl-2"],
                        }, new bsts_1.b.caption({
                            icon: new bsts_1.b.icon({
                                animate: i,
                                animateRepeat: "infinite",
                                fontSize: 1,
                            }, "asterisk"),
                            iconPosition: "top",
                            elem: i,
                        })));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Rotate"),
                new e.code({
                    outputAttr: { display: "flex", gap: 3, flex: "wrap" },
                    output: () => {
                        return [undefined, 45, 90, 135, 180, 225, 270, 315].map((i) => new bsts_1.h.div({
                            display: "flex",
                            justifyContent: "center",
                            alignItem: "center",
                            padding: 2,
                            border: true,
                            rounded: 2,
                            col: [6, "md-4", "lg-3", "xl-2"],
                        }, new bsts_1.b.caption({
                            icon: new bsts_1.b.icon({
                                rotate: i,
                                fontSize: 1,
                            }, "at"),
                            iconPosition: "top",
                            elem: i ? i : "normal",
                        })));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Flip"),
                new e.code({
                    outputAttr: { display: "flex", gap: 3, flex: "wrap" },
                    output: () => {
                        return [undefined, "vertical", "horizontal", "both"].map((i) => new bsts_1.h.div({
                            display: "flex",
                            justifyContent: "center",
                            alignItem: "center",
                            padding: 2,
                            border: true,
                            rounded: 2,
                            col: [6, "md-4", "lg-3", "xl-2"],
                        }, new bsts_1.b.caption({
                            icon: new bsts_1.b.icon({
                                flip: i,
                                fontSize: 1,
                            }, "at"),
                            iconPosition: "top",
                            elem: i ? i : "normal",
                        })));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Duplicate ID"),
                new e.code({
                    outputAttr: { display: "flex", gap: 2 },
                    output: () => {
                        return [
                        // new b.button({ id: "chart" }, "chart"),
                        // new b.button({ id: "duplicate_id" }, "duplicate_id"),
                        // new b.button({ id: "tooltip" }, "tooltip"),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Chart"),
                new e.code({
                    output: () => {
                        const item = (arg) => {
                            return new bsts_1.b.card.container({ style: { maxWidth: "120px" } }, new bsts_1.b.card.body(new bsts_1.h.canvas({
                                ratio: "4x3",
                                on: {
                                    build: (event) => {
                                        const target = event.target;
                                        //dialog show after 300 ms
                                        setTimeout((target) => {
                                            new auto_1.default(target, {
                                                type: "line",
                                                data: {
                                                    labels: Array(arg.data.length).fill(""),
                                                    datasets: [
                                                        {
                                                            data: arg.data,
                                                            borderWidth: 2,
                                                            pointRadius: 0,
                                                            tension: 0.5,
                                                        },
                                                    ],
                                                },
                                                options: {
                                                    plugins: {
                                                        legend: {
                                                            display: false,
                                                        },
                                                    },
                                                    scales: {
                                                        x: { display: false },
                                                        y: {
                                                            display: false,
                                                            beginAtZero: true,
                                                        },
                                                    },
                                                },
                                            });
                                        }, 300, target);
                                    },
                                },
                            })));
                        };
                        return new bsts_1.b.button({
                            on: {
                                click: () => {
                                    bsts_1.b.modal.show(bsts_1.b.modal.create({
                                        customStyle: 2,
                                        title: "Chatjs example",
                                        scrollable: true,
                                        elem: new bsts_1.h.div({
                                            display: "flex",
                                            gap: 3,
                                            justifyContent: "center",
                                            flex: "wrap",
                                            marginTop: 3,
                                        }, new Array(15).fill("").map(() => {
                                            return item({
                                                data: Array(bsts_1.core.rndBetween(5, 20))
                                                    .fill("")
                                                    .map(() => {
                                                    return bsts_1.core.rndBetween(1, 20);
                                                }),
                                            });
                                        })),
                                        btn: ["ok", "cancel"],
                                    }));
                                },
                            },
                        }, "Test");
                    },
                }),
            ]),
        ];
    },
};

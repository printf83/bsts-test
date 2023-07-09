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
exports._template = void 0;
const e = __importStar(require("../../ctl/example/_index.js"));
exports._template = {
    title: "",
    description: "",
    item: () => {
        return [
            new e.section([
                new e.title(""),
                new e.text(""),
                new e.ul({
                    item: [
                        "aaaaaaaaaaaaaaaaaaaaaaaa",
                        "aaaaaaaaaaaaaaaaaaaaaaaa",
                        "aaaaaaaaaaaaaaaaaaaaaaaa",
                        "aaaaaaaaaaaaaaaaaaaaaaaa",
                    ],
                }),
                new e.alert({ color: "info", callout: true }, ""),
                new e.code({
                    output: () => {
                        return [];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title(""),
                new e.text(""),
                new e.code({
                    output: () => {
                        return [];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle(""),
                new e.text(""),
                new e.codepreview({
                    type: "css",
                    code: `
						`,
                }),
            ]),
            //----------------------
            new e.section([new e.title("CSS"), new e.text("")]),
            //----------------------
            new e.section([
                new e.subtitle("Sass variables"),
                new e.text(""),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
					`,
                }),
            ]),
        ];
    },
};

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
exports.zindex = exports.visibility = exports.vertical_align = exports.text = exports.spacing = exports.sizing = exports.shadow = exports.position = exports.overflow = exports.opacity = exports.object_fit = exports.link = exports.interactions = exports.float = exports.flex = exports.display = exports.borders = exports.colors = exports.background = exports.api = void 0;
const api = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./api.js")))).api;
});
exports.api = api;
const background = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./background.js")))).background;
});
exports.background = background;
const colors = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./colors.js")))).colors;
});
exports.colors = colors;
const borders = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./borders.js")))).borders;
});
exports.borders = borders;
const display = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./display.js")))).display;
});
exports.display = display;
const flex = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./flex.js")))).flex;
});
exports.flex = flex;
const float = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./float.js")))).float;
});
exports.float = float;
const interactions = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./interactions.js")))).interactions;
});
exports.interactions = interactions;
const link = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./link.js")))).link;
});
exports.link = link;
const object_fit = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./object_fit.js")))).object_fit;
});
exports.object_fit = object_fit;
const opacity = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./opacity.js")))).opacity;
});
exports.opacity = opacity;
const overflow = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./overflow.js")))).overflow;
});
exports.overflow = overflow;
const position = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./position.js")))).position;
});
exports.position = position;
const shadow = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./shadow.js")))).shadow;
});
exports.shadow = shadow;
const sizing = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./sizing.js")))).sizing;
});
exports.sizing = sizing;
const spacing = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./spacing.js")))).spacing;
});
exports.spacing = spacing;
const text = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./text.js")))).text;
});
exports.text = text;
const vertical_align = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./vertical_align.js")))).vertical_align;
});
exports.vertical_align = vertical_align;
const visibility = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./visibility.js")))).visibility;
});
exports.visibility = visibility;
const zindex = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./zindex.js")))).zindex;
});
exports.zindex = zindex;

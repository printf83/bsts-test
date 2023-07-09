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
exports.test = exports.breadcrumbs = exports.badges = exports.modals = exports.list_groups = exports.dropdowns = exports.footers = exports.sidebars = exports.features = exports.heroes = exports.headers = void 0;
const headers = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./headers.js")))).headers;
});
exports.headers = headers;
const heroes = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./heroes.js")))).heroes;
});
exports.heroes = heroes;
const features = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./features.js")))).features;
});
exports.features = features;
const sidebars = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./sidebars.js")))).sidebars;
});
exports.sidebars = sidebars;
const footers = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./footers.js")))).footers;
});
exports.footers = footers;
const dropdowns = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./dropdowns.js")))).dropdowns;
});
exports.dropdowns = dropdowns;
const list_groups = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./list_groups.js")))).list_groups;
});
exports.list_groups = list_groups;
const modals = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./modals.js")))).modals;
});
exports.modals = modals;
const badges = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./badges.js")))).badges;
});
exports.badges = badges;
const breadcrumbs = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./breadcrumbs.js")))).breadcrumbs;
});
exports.breadcrumbs = breadcrumbs;
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Promise.resolve().then(() => __importStar(require("./test.js")))).test;
});
exports.test = test;

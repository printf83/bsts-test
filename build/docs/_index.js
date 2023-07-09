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
exports.doc = void 0;
const gettingstarted = __importStar(require("./gettingstarted/_index.js"));
const forms = __importStar(require("./forms/_index.js"));
const components = __importStar(require("./components/_index.js"));
const utilities = __importStar(require("./utilities/_index.js"));
const helpers = __importStar(require("./helpers/_index.js"));
const content = __importStar(require("./content/_index.js"));
const layout = __importStar(require("./layout/_index.js"));
const customize = __importStar(require("./customize/_index.js"));
const example = __importStar(require("./example/_index.js"));
const doc = (value) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    switch (value) {
        //--------------------------
        case "docs/example/headers":
            result = yield example.headers();
            break;
        case "docs/example/heroes":
            result = yield example.heroes();
            break;
        case "docs/example/features":
            result = yield example.features();
            break;
        case "docs/example/sidebars":
            result = yield example.sidebars();
            break;
        case "docs/example/footers":
            result = yield example.footers();
            break;
        case "docs/example/dropdowns":
            result = yield example.dropdowns();
            break;
        case "docs/example/list_groups":
            result = yield example.list_groups();
            break;
        case "docs/example/modals":
            result = yield example.modals();
            break;
        case "docs/example/badges":
            result = yield example.badges();
            break;
        case "docs/example/breadcrumbs":
            result = yield example.breadcrumbs();
            break;
        case "docs/example/test":
            result = yield example.test();
            break;
        //--------------------------
        case "docs/customize/color":
            result = yield customize.color();
            break;
        //--------------------------
        case "docs/layout/breakpoints":
            result = yield layout.breakpoints();
            break;
        case "docs/layout/containers":
            result = yield layout.containers();
            break;
        case "docs/layout/grid":
            result = yield layout.grid();
            break;
        case "docs/layout/columns":
            result = yield layout.columns();
            break;
        case "docs/layout/gutters":
            result = yield layout.gutters();
            break;
        case "docs/layout/utilities":
            result = yield layout.utilities();
            break;
        case "docs/layout/zindex":
            result = yield layout.zindex();
            break;
        case "docs/layout/cssgrid":
            result = yield layout.cssgrid();
            break;
        //--------------------------
        case "docs/content/reboot":
            result = yield content.reboot();
            break;
        case "docs/content/typography":
            result = yield content.typography();
            break;
        case "docs/content/images":
            result = yield content.images();
            break;
        case "docs/content/tables":
            result = yield content.tables();
            break;
        case "docs/content/figures":
            result = yield content.figures();
            break;
        //--------------------------
        case "docs/helpers/clearfix":
            result = yield helpers.clearfix();
            break;
        case "docs/helpers/color_background":
            result = yield helpers.color_background();
            break;
        case "docs/helpers/colored_links":
            result = yield helpers.colored_links();
            break;
        case "docs/helpers/focus_ring":
            result = yield helpers.focus_ring();
            break;
        case "docs/helpers/icon_link":
            result = yield helpers.icon_link();
            break;
        case "docs/helpers/position":
            result = yield helpers.position();
            break;
        case "docs/helpers/ratio":
            result = yield helpers.ratio();
            break;
        case "docs/helpers/stacks":
            result = yield helpers.stacks();
            break;
        case "docs/helpers/stretched_link":
            result = yield helpers.stretched_link();
            break;
        case "docs/helpers/text_truncation":
            result = yield helpers.text_truncation();
            break;
        case "docs/helpers/vertical_rule":
            result = yield helpers.vertical_rule();
            break;
        case "docs/helpers/visually_hidden":
            result = yield helpers.visually_hidden();
            break;
        //--------------------------
        case "docs/utilities/api":
            result = yield utilities.api();
            break;
        case "docs/utilities/background":
            result = yield utilities.background();
            break;
        case "docs/utilities/colors":
            result = yield utilities.colors();
            break;
        case "docs/utilities/borders":
            result = yield utilities.borders();
            break;
        case "docs/utilities/display":
            result = yield utilities.display();
            break;
        case "docs/utilities/flex":
            result = yield utilities.flex();
            break;
        case "docs/utilities/float":
            result = yield utilities.float();
            break;
        case "docs/utilities/interactions":
            result = yield utilities.interactions();
            break;
        case "docs/utilities/link":
            result = yield utilities.link();
            break;
        case "docs/utilities/object_fit":
            result = yield utilities.object_fit();
            break;
        case "docs/utilities/opacity":
            result = yield utilities.opacity();
            break;
        case "docs/utilities/overflow":
            result = yield utilities.overflow();
            break;
        case "docs/utilities/position":
            result = yield utilities.position();
            break;
        case "docs/utilities/shadow":
            result = yield utilities.shadow();
            break;
        case "docs/utilities/sizing":
            result = yield utilities.sizing();
            break;
        case "docs/utilities/spacing":
            result = yield utilities.spacing();
            break;
        case "docs/utilities/text":
            result = yield utilities.text();
            break;
        case "docs/utilities/vertical_align":
            result = yield utilities.vertical_align();
            break;
        case "docs/utilities/visibility":
            result = yield utilities.visibility();
            break;
        case "docs/utilities/zindex":
            result = yield utilities.zindex();
            break;
        //--------------------------
        case "docs/forms/overview":
            result = yield forms.overview();
            break;
        case "docs/forms/control":
            result = yield forms.control();
            break;
        case "docs/forms/select":
            result = yield forms.select();
            break;
        case "docs/forms/check_radio":
            result = yield forms.check_radio();
            break;
        case "docs/forms/range":
            result = yield forms.range();
            break;
        case "docs/forms/floating_label":
            result = yield forms.floating_label();
            break;
        case "docs/forms/input_group":
            result = yield forms.input_group();
            break;
        case "docs/forms/layout":
            result = yield forms.layout();
            break;
        case "docs/forms/validation":
            result = yield forms.validation();
            break;
        //--------------------------
        case "docs/components/accordion":
            result = yield components.accordion();
            break;
        case "docs/components/alert":
            result = yield components.alert();
            break;
        case "docs/components/badge":
            result = yield components.badge();
            break;
        case "docs/components/breadcrumb":
            result = yield components.breadcrumb();
            break;
        case "docs/components/button":
            result = yield components.button();
            break;
        case "docs/components/button_group":
            result = yield components.button_group();
            break;
        case "docs/components/card":
            result = yield components.card();
            break;
        case "docs/components/carousel":
            result = yield components.carousel();
            break;
        case "docs/components/close_button":
            result = yield components.close_button();
            break;
        case "docs/components/collapse":
            result = yield components.collapse();
            break;
        case "docs/components/dropdown":
            result = yield components.dropdown();
            break;
        case "docs/components/list":
            result = yield components.list();
            break;
        case "docs/components/modal":
            result = yield components.modal();
            break;
        case "docs/components/navbar":
            result = yield components.navbar();
            break;
        case "docs/components/nav":
            result = yield components.nav();
            break;
        case "docs/components/offcanvas":
            result = yield components.offcanvas();
            break;
        case "docs/components/pagination":
            result = yield components.pagination();
            break;
        case "docs/components/popover":
            result = yield components.popover();
            break;
        case "docs/components/placeholder":
            result = yield components.placeholder();
            break;
        case "docs/components/progress":
            result = yield components.progress();
            break;
        case "docs/components/scrollspy":
            result = yield components.scrollspy();
            break;
        case "docs/components/spinner":
            result = yield components.spinner();
            break;
        case "docs/components/toast":
            result = yield components.toast();
            break;
        case "docs/components/tooltip":
            result = yield components.tooltip();
            break;
        //--------------------------
        case "docs/gettingstarted/introduction":
            result = yield gettingstarted.introduction();
            break;
        case "docs/gettingstarted/bootswatch":
            result = yield gettingstarted.bootswatch();
            break;
        default:
            return null;
    }
    return result;
});
exports.doc = doc;

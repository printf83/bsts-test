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
exports.zindex = void 0;
const e = __importStar(require("../../ctl/example/_index.js"));
exports.zindex = {
    title: "Z-index",
    description: "While not a part of Bootstrap’s grid system, z-indexes play an important part in how Bootstrap components overlay and interact with one another.",
    item: () => {
        return [
            new e.section([
                new e.text("Several Bootstrap components utilize {{z-index}}, the CSS property that helps control layout by providing a third axis to arrange content. Bootstrap utilize a default z-index scale in Bootstrap that’s been designed to properly layer navigation, tooltips and popovers, modals, and more."),
                new e.text("These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. Bootstrap need a standard set of these across Bootstrap layered components—tooltips, popovers, navbars, dropdowns, modals—so Bootstrap can be reasonably consistent in the behaviors. There’s no reason Bootstrap couldn’t have used {{100+}} or {{500+}}."),
                new e.text("Bootstrap don’t encourage customization of these individual values; should you change one, you likely need to change them all."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
				$zindex-dropdown:                   1000;
				$zindex-sticky:                     1020;
				$zindex-fixed:                      1030;
				$zindex-offcanvas-backdrop:         1040;
				$zindex-offcanvas:                  1045;
				$zindex-modal-backdrop:             1050;
				$zindex-modal:                      1055;
				$zindex-popover:                    1070;
				$zindex-tooltip:                    1080;
				$zindex-toast:                      1090;
			`,
                }),
                new e.text("To handle overlapping borders within components (e.g., buttons and inputs in input groups), Bootstrap use low single digit {{z-index}} values of {{1}}, {{2}}, and {{3}} for default, hover, and active states. On hover/focus/active, Bootstrap bring a particular element to the forefront with a higher {{z-index}} value to show their border over the sibling elements."),
            ]),
        ];
    },
};

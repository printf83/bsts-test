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
exports.utilities = void 0;
const e = __importStar(require("../../ctl/example/_index.js"));
exports.utilities = {
    title: "Utilities for layout",
    description: "For faster mobile-friendly and responsive development, Bootstrap includes dozens of utility classes for showing, hiding, aligning, and spacing content.",
    item: () => {
        return [
            new e.section([
                new e.title("Changing {{display}}"),
                new e.text("Use Bootstrap {{nav:docs/utilities/display::display utilities}} for responsively toggling common values of the {{display}} property. Mix it with Bootstrap grid system, content, or components to show or hide them across specific viewports."),
            ]),
            //----------------------
            new e.section([
                new e.title("Flexbox options"),
                new e.text("Bootstrap is built with flexbox, but not every element’s {{display}} has been changed to {{display: flex}} as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of {{nav:docs/components/alert::Bootstrap components}} are built with flexbox enabled."),
                new e.text("Should you need to add {{display: flex}} to an element, do so with {{.d-flex}} or one of the responsive variants (e.g., {{.d-sm-flex}}). You’ll need this class or {{display}} value to allow the use of Bootstrap extra {{nav:docs/utilities/flex::flexbox utilities}} for sizing, alignment, spacing, and more."),
            ]),
            //----------------------
            new e.section([
                new e.title("Margin and padding"),
                new e.text("Use the {{margin}} and {{padding}} {{nav:docs/utilities/spacing::spacing utilities}} to control how elements and components are spaced and sized. Bootstrap includes a six-level scale for spacing utilities, based on a {{1rem}} value default {{$spacer}} variable. Choose values for all viewports (e.g., {{.me-3}} for {{margin-right: 1rem}} in LTR), or pick responsive variants to target specific viewports (e.g., {{.me-md-3}} for {{margin-right: 1rem}} —in LTR— starting at the {{md}} breakpoint)."),
            ]),
            //----------------------
            new e.section([
                new e.title("Toggle visibility"),
                new e.text("When toggling {{display}} isn’t needed, you can toggle the {{visibility}} of an element with Bootstrap {{nav:docs/utilities/visibility::visibility utilities}}. Invisible elements will still affect the layout of the page, but are visually hidden from visitors."),
            ]),
        ];
    },
};

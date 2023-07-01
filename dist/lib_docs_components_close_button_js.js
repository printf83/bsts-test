"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_close_button_js"],{

/***/ "./lib/docs/components/close_button.js":
/*!*********************************************!*\
  !*** ./lib/docs/components/close_button.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   close_button: () => (/* binding */ close_button)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst close_button = {\n    title: \"Close button\",\n    description: \"A generic close button for dismissing content like modals and alerts.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Provide an option to dismiss or close a component with {{b.btnclose}}. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default {{background-image}}. {{b::Be sure to include text for screen readers}}, as {{bsts}} done with {{label}}.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btnclose();\n                },\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disabled state\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Disabled close buttons change their {{opacity}}. Bootstrap’ve also applied {{pointer-events:}} none and {{user-select: none}} to preventing hover and active states from triggering.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btnclose({ disabled: true });\n                },\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Dark variant\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{theme:'dark'}} to the {{b.btnclose}}, or to its parent element, to invert the close button. Bootstrap uses the {{filter}} property to invert the {{background-image}} without overriding its value.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                previewAttr: { bgColor: \"dark\" },\n                output: () => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ theme: \"dark\" }, [new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btnclose(), new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btnclose({ disabled: true })]);\n                },\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, close button now use local CSS variables on {{.btn-close}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                type: \"css\",\n                title: \"scss/_close.scss\",\n                source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_close.scss\",\n                code: `\n\t\t\t    --#{$prefix}btn-close-color: #{$btn-close-color};\n\t\t\t\t--#{$prefix}btn-close-bg: #{ escape-svg($btn-close-bg) };\n\t\t\t\t--#{$prefix}btn-close-opacity: #{$btn-close-opacity};\n\t\t\t\t--#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};\n\t\t\t\t--#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};\n\t\t\t\t--#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};\n\t\t\t\t--#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};\n\t\t\t\t--#{$prefix}btn-close-white-filter: #{$btn-close-white-filter};\n\t\t\t`,\n            }),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                type: \"css\",\n                title: \"scss/_variables.scss\",\n                source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                code: `\n\t\t\t\t$btn-close-width:            1em;\n\t\t\t\t$btn-close-height:           $btn-close-width;\n\t\t\t\t$btn-close-padding-x:        .25em;\n\t\t\t\t$btn-close-padding-y:        $btn-close-padding-x;\n\t\t\t\t$btn-close-color:            $black;\n\t\t\t\t$btn-close-bg:               url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>\");\n\t\t\t\t$btn-close-focus-shadow:     $focus-ring-box-shadow;\n\t\t\t\t$btn-close-opacity:          .5;\n\t\t\t\t$btn-close-hover-opacity:    .75;\n\t\t\t\t$btn-close-focus-opacity:    1;\n\t\t\t\t$btn-close-disabled-opacity: .25;\n\t\t\t\t$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%);\n\t\t\t`,\n            }),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/close_button.js?");

/***/ })

}]);
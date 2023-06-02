"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_object_fit_js"],{

/***/ "./lib/docs/utilities/object_fit.js":
/*!******************************************!*\
  !*** ./lib/docs/utilities/object_fit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   object_fit: () => (/* binding */ object_fit)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst object_fit = {\n    title: \"Object fit\",\n    description: \"Use the object fit utilities to modify how the content of a {{https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element::replaced element}}, such as an {{<img>}} or {{<video>}}, should be resized to fit its container.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the value of the {{https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit::object-fit property}} with Bootstrap responsive {{object-fit}} utility classes. This property tells the content to fill the parent container in a variety of ways, such as preserving the aspect ratio or stretching to take up as much space as possible.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Classes for the value of {{object-fit}} are named using the format {{.object-fit-{value}.}} Choose from the following values:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\"{{contain}}\", \"{{cover}}\", \"{{fill}}\", \"{{scale}} (for scale-down)\", \"{{none}}\"],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the {{object-fit-{value} }}class to the {{https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element::replaced element}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\"contain\", \"cover\", \"fill\", \"scale\", \"none\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                    src: \"https://picsum.photos/seed/bsts_0/110/65\",\n                    objectFit: i,\n                    border: true,\n                    rounded: true,\n                    alt: \"...\",\n                    style: { width: \"135px\", height: \"115px\" },\n                }));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Responsive\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for each {{object-fit}} value using the format {{.object-fit-{breakpoint}-{value} }}, for the following breakpoint abbreviations: {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}. Classes can be combined for various effects as you need.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\"sm-contain\", \"md-contain\", \"lg-contain\", \"xl-contain\", \"xxl-contain\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                    src: \"https://picsum.photos/seed/bsts_0/110/65\",\n                    objectFit: i,\n                    border: true,\n                    rounded: true,\n                    alt: \"...\",\n                    style: { width: \"135px\", height: \"115px\" },\n                }));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Video\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{.object-fit-{value} }}and responsive {{.object-fit-{breakpoint}-{value} }}utilities also work on {{<video>}} elements.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `\r\n\t\t\t\t<video src=\"...\" class=\"object-fit-contain\" autoplay></video>\r\n\t\t\t\t<video src=\"...\" class=\"object-fit-cover\" autoplay></video>\r\n\t\t\t\t<video src=\"...\" class=\"object-fit-fill\" autoplay></video>\r\n\t\t\t\t<video src=\"...\" class=\"object-fit-scale\" autoplay></video>\r\n\t\t\t\t<video src=\"...\" class=\"object-fit-none\" autoplay></video>\r\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                const videoFn = () => {\n                    return [\"contain\", \"cover\", \"fill\", \"scale\", \"none\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.video({\n                        src: \"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4\",\n                        objectFit: i,\n                        border: true,\n                        rounded: true,\n                        controls: true,\n                        style: { width: \"135px\", height: \"115px\" },\n                    }));\n                };\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    position: \"relative\",\n                    on: {\n                        click: (e) => {\n                            let target = e.target;\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.replaceWith(target, videoFn());\n                        },\n                    },\n                }, [\n                    \"Show live video \",\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({\n                        bgColor: \"danger\",\n                        position: \"absolute\",\n                        top: 0,\n                        start: 100,\n                        tMiddle: true,\n                        rounded: \"pill\",\n                        border: true,\n                        borderColor: \"light\",\n                    }, [\"61.5Mb\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.visuallyhidden(\"estimate video size\")]),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Object fit utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\r\n\t\t\t\t\"object-fit\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: object-fit,\r\n\t\t\t\tvalues: (\r\n\t\t\t\t\tcontain: contain,\r\n\t\t\t\t\tcover: cover,\r\n\t\t\t\t\tfill: fill,\r\n\t\t\t\t\tscale: scale-down,\r\n\t\t\t\t\tnone: none,\r\n\t\t\t\t)\r\n\t\t\t\t),\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/object_fit.js?");

/***/ })

}]);
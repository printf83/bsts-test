"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_example_sticky_footer_navbar_ts"],{

/***/ "./src/docs/example/sticky_footer_navbar.ts":
/*!**************************************************!*\
  !*** ./src/docs/example/sticky_footer_navbar.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sticky_footer_navbar: () => (/* binding */ sticky_footer_navbar)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n\nconst sticky_footer_navbar = {\n    fullscreen: true,\n    title: \"Sticky Footer Navbar\",\n    item: () => {\n        const header = () => {\n            const id = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.UUID();\n            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.container({ bgColor: \"dark\", theme: \"dark\", expand: \"md\", fixed: \"top\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.innercontainer({ container: \"fluid\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.brand({ href: \"#\" }, \"Fixed navbar\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.toggle.collapse({\n                    target: `#${id}`,\n                    controlfor: id,\n                    label: \"Toggle navigation\",\n                }),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.collapse({ id: id }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.itemcontainer({ marginEnd: \"auto\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\", active: true }, \"Home\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\" }, \"Link\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\", disabled: true }, \"Disabled\")),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({ display: \"flex\", role: \"search\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                            type: \"search\",\n                            marginEnd: 2,\n                            placeholder: \"Search\",\n                            label: \"Search\",\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ type: \"submit\", color: \"success\", outline: true }, \"Search\"),\n                    ]),\n                ]),\n            ]));\n        };\n        const main = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.main({ flex: \"shrink-0\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, style: { paddingTop: \"60px\" } }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, { marginTop: 5 }, \"Sticky footer with fixed navbar\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true }, \"Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with {{padding-top: 60px;}} on the {{main > .container}}.\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Use {{?d=docs/example/sticky_footer::the sticky footer with a fixed navbar}} if need be, too.\"),\n        ]));\n        const footer = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.footer({ sticky: \"bottom\", marginTop: \"auto\", paddingY: 3, bgColor: \"body-tertiary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ textColor: \"body-secondary\" }, \"Place sticky footer content here.\")));\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"column\", viewHeight: 100 }, [\n            header(),\n            main,\n            footer,\n        ]);\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/example/sticky_footer_navbar.ts?");

/***/ })

}]);
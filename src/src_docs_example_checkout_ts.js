"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_example_checkout_ts"],{

/***/ "./src/docs/example/checkout.ts":
/*!**************************************!*\
  !*** ./src/docs/example/checkout.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkout: () => (/* binding */ checkout)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n\nconst checkout = {\n    fullscreen: true,\n    title: \"Checkout\",\n    item: () => {\n        const jumbotron = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.section(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\", paddingX: 5, paddingTop: 4 }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"hexagon-fill\", fontDisplay: 1 }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, { textColor: \"body-emphasis\", fontDisplay: 5 }, \"Checkout form\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true }, \"Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.\"),\n        ]));\n        const payment = [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { marginBottom: 3 }, \"Payment\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ marginY: 3 }, [\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.check({\n                    type: \"radio\",\n                    name: \"payment_type\",\n                    label: \"Credit card\",\n                    checked: true,\n                }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.check({ type: \"radio\", name: \"payment_type\", label: \"Debit card\" }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.check({ type: \"radio\", name: \"payment_type\", label: \"PayPal\" }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.check({ type: \"radio\", name: \"payment_type\", label: \"Boost\" }),\n            ]),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutterY: 3 }, [\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                    container: { col: \"md-6\" },\n                    label: \"Name on card\",\n                    description: \"Full name as displayed on card\",\n                }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({ container: { col: \"md-6\" }, label: \"Credit card number\" }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({ container: { col: \"md-3\" }, label: \"Expiration\" }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({ container: { col: \"md-3\" }, label: \"CVV\" }),\n            ]),\n        ];\n        const billing_address = [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { marginBottom: 3 }, \"Billing address\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({ novalidate: true, class: \"needs-validation\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    row: true,\n                    gutter: 3,\n                }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { col: \"sm-6\" },\n                        label: \"First name\",\n                        required: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { col: \"sm-6\" },\n                        label: \"Last name\",\n                        required: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        label: \"Username\",\n                        before: \"@\",\n                        placeholder: \"Username\",\n                        required: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        type: \"email\",\n                        label: \"Email\",\n                        placeholder: \"you@example.com\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        label: \"Address\",\n                        placeholder: \"1234 Main St\",\n                        required: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        label: \"Address 2\",\n                        placeholder: \"1234 Main St\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                        container: { col: \"sm-5\" },\n                        label: \"Country\",\n                        required: true,\n                        item: [\n                            { elem: \"Choose...\", value: \"\" },\n                            { elem: \"Malaysia\", value: \"my\" },\n                        ],\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                        container: { col: \"sm-4\" },\n                        label: \"State\",\n                        required: true,\n                        item: [\n                            { elem: \"Choose...\", value: \"\" },\n                            { elem: \"Sabah\", value: \"sabah\" },\n                        ],\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { col: \"sm-3\" },\n                        type: \"number\",\n                        label: \"Zip\",\n                        required: true,\n                    }),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr({ marginY: 4 }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.check({ label: \"Shipping address is the same as my billing address\" }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.check({ label: \"Save this information for next time\" }),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr({ marginY: 4 }),\n                ...payment,\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr({ marginY: 4 }),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"grid\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", type: \"submit\" }, \"Continue to checkout\")),\n            ]),\n        ];\n        const promo = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body({ padding: 2 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.inputgroup.container([\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ placeholder: \"Promo code\" }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", type: \"submit\" }, \"Redeem\"),\n        ]))));\n        const cart_item = (arg) => {\n            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.item({ display: \"flex\", justifyContent: \"between\", lineHeight: \"sm\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(6, { marginY: 0 }, arg.name),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ textColor: \"body-secondary\" }, arg.description),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ textColor: \"body-secondary\" }, `$${arg.price}`),\n            ]);\n        };\n        const cart_promo = (arg) => {\n            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.item({\n                display: \"flex\",\n                justifyContent: \"between\",\n                lineHeight: \"sm\",\n                textColor: \"success\",\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(6, { marginY: 0 }, \"Promo code\"), new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small(arg.code)]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span(`-$${arg.price}`),\n            ]);\n        };\n        const cart_total = (arg) => {\n            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.item({\n                display: \"flex\",\n                justifyContent: \"between\",\n                lineHeight: \"sm\",\n            }, [new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span(`Total (${arg.code})`), new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.strong(`$${arg.price}`)]);\n        };\n        const cart = [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, {\n                display: \"flex\",\n                justifyContent: \"between\",\n                alignItem: \"center\",\n                marginBottom: 3,\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ textColor: \"primary\" }, \"Your cart\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ textBgColor: \"primary\", rounded: \"pill\" }, \"3\"),\n            ]),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.container({ marginBottom: 3 }, [\n                cart_item({ name: \"Product name\", description: \"Brief description\", price: 12 }),\n                cart_item({ name: \"Second product\", description: \"Brief description\", price: 12 }),\n                cart_item({ name: \"Third product\", description: \"Brief description\", price: 12 }),\n                cart_promo({ code: \"EXAMPLECODE\", price: 5 }),\n                cart_total({ code: \"MYR\", price: 20 }),\n            ]),\n            promo,\n        ];\n        const main = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.main({ row: true, gutter: 5, marginBottom: 5 }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.section({ col: [\"md-5\", \"lg-4\"], order: \"md-last\" }, cart),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.section({ col: [\"md-7\", \"lg-8\"] }, billing_address),\n        ]);\n        const footer = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.footer({\n            paddingY: 3,\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textAlign: \"center\", textColor: \"body-tertiary\" }, \"© 2017–2023 Company Name\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                paddingBottom: 3,\n                marginBottom: 3,\n                justifyContent: \"center\",\n                textColor: \"secondary\",\n                link: [\n                    { href: \"#\", elem: \"Privacy\" },\n                    { href: \"#\", elem: \"Terms\" },\n                    { href: \"#\", elem: \"Support\" },\n                ],\n            }),\n        ]);\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"body-tertiary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, [jumbotron, main, footer]));\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/example/checkout.ts?");

/***/ })

}]);
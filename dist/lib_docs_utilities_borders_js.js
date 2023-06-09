"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_borders_js"],{

/***/ "./lib/docs/utilities/borders.js":
/*!***************************************!*\
  !*** ./lib/docs/utilities/borders.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   borders: () => (/* binding */ borders)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst borders = {\n    title: \"Borders\",\n    description: \"Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Border\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Additive\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add borders to custom elements:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2, class: \"span-box\" },\n            output: () => {\n                const data = [true, \"top\", \"end\", \"bottom\", \"start\"];\n                return data.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({\n                        border: i,\n                    });\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Subtractive\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or remove borders:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2, class: \"span-box\" },\n            output: () => {\n                const data = [true, \"top\", \"end\", \"bottom\", \"start\"];\n                return data.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({\n                        border: true,\n                        borderNone: i,\n                    });\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Color\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"Border utilities like {{.border-*}} that generated from Bootstrap original {{$theme-colors}} Sass map don’t yet respond to color modes, however, any {{.border-*-subtle}} utility will. This will be resolved in v6.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the border color using utilities built on Bootstrap theme colors.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2, class: \"span-box\" },\n            output: () => {\n                const data = [\n                    \"primary\",\n                    \"primary-subtle\",\n                    \"secondary\",\n                    \"secondary-subtle\",\n                    \"success\",\n                    \"success-subtle\",\n                    \"danger\",\n                    \"danger-subtle\",\n                    \"warning\",\n                    \"warning-subtle\",\n                    \"info\",\n                    \"info-subtle\",\n                    \"light\",\n                    \"light-subtle\",\n                    \"dark\",\n                    \"dark-subtle\",\n                    \"black\",\n                    \"white\",\n                ];\n                return data.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({\n                        border: true,\n                        borderColor: i,\n                    });\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or modify the default {{border-color}} of a component:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        borderColor: \"success\",\n                        container: { marginBottom: 4 },\n                        label: \"Email address\",\n                        type: \"email\",\n                        placeholder: \"name@example.com\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        border: \"bottom\",\n                        borderColor: \"danger\",\n                        class: \"h4\",\n                        paddingBottom: 2,\n                        marginBottom: 4,\n                        textColor: \"danger\",\n                    }, \"Dangerous heading\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        border: true,\n                        borderColor: \"info\",\n                        borderNone: \"start\",\n                        padding: 3,\n                        bgColor: \"info\",\n                        bgOpacity: 10,\n                        rounded: \"end\",\n                    }, \"Changing border color and width\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Opacity\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap {{border-{color} }}utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Consider Bootstrap default {{.border-success}} utility.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t.border-success {\n\t\t\t\t--bs-border-opacity: 1;\n\t\t\t\tborder-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;\n\t\t\t\t}\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap use an RGB version of Bootstrap {{--bs-success}} (with the value of {{25}}, {{135}}, {{84}}) CSS variable and attached a second CSS variable, {{--bs-bg-opacity}}, for the alpha transparency (with a default value 1 thanks to a local CSS variable). That means anytime you use {{.bg-success}} now, your computed {{color}} value is {{rgba(25, 135, 84, 1)}}. The local CSS variable inside each {{.bg-*}} class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To change that opacity, override {{--bs-border-opacity}} via custom styles or inline styles.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ border: true, borderColor: \"success\", padding: 2, marginBottom: 2 }, \"This is default success border\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ border: true, borderColor: \"success\", padding: 2, style: { \"--bs-border-opacity\": \".5\" } }, \"This is 50% opacity success border\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or, choose from any of the {{.border-opacity}} utilities:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [undefined, 75, 50, 25, 10].map((i, ix) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        border: true,\n                        borderColor: \"success\",\n                        borderOpacity: i,\n                        padding: 2,\n                        marginBottom: ix < 4 ? 2 : undefined,\n                    }, `This is ${i ? i + \"% opacity\" : \"default\"} success border`);\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Width\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2, class: \"span-box\" },\n            output: () => {\n                return [1, 2, 3, 4, 5].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({\n                        border: true,\n                        borderWidth: i,\n                    });\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Radius\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add classes to an element to easily round its corners.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [true, \"top\", \"end\", \"bottom\", \"start\", \"circle\", \"pill\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: `https://picsum.photos/seed/bsts_0/${i === \"pill\" ? \"150\" : \"75\"}/75.webp`,\n                        alt: \"...\",\n                        rounded: i,\n                    });\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sizes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the scaling classes for larger or smaller rounded corners. Sizes range from {{0}} to {{5}}, and can be configured by modifying the utilities API.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [0, 1, 2, 3, 4, 5].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: `https://picsum.photos/seed/bsts_0/75/75.webp`,\n                        alt: \"...\",\n                        roundedSize: i,\n                    });\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: `https://picsum.photos/seed/bsts_0/75/75.webp`,\n                        alt: \"...\",\n                        rounded: \"bottom-1\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: `https://picsum.photos/seed/bsts_0/75/75.webp`,\n                        alt: \"...\",\n                        rounded: \"start-2\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: `https://picsum.photos/seed/bsts_0/75/75.webp`,\n                        alt: \"...\",\n                        rounded: \"end-circle\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: `https://picsum.photos/seed/bsts_0/75/75.webp`,\n                        alt: \"...\",\n                        rounded: \"start-pill\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: `https://picsum.photos/seed/bsts_0/75/75.webp`,\n                        alt: \"...\",\n                        rounded: \"top-0\",\n                        roundedSize: 5,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_root.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_root.scss\",\n            code: `\n\t\t\t\t--#{$prefix}border-width: #{$border-width};\n\t\t\t\t--#{$prefix}border-style: #{$border-style};\n\t\t\t\t--#{$prefix}border-color: #{$border-color};\n\t\t\t\t--#{$prefix}border-color-translucent: #{$border-color-translucent};\n\n\t\t\t\t--#{$prefix}border-radius: #{$border-radius};\n\t\t\t\t--#{$prefix}border-radius-sm: #{$border-radius-sm};\n\t\t\t\t--#{$prefix}border-radius-lg: #{$border-radius-lg};\n\t\t\t\t--#{$prefix}border-radius-xl: #{$border-radius-xl};\n\t\t\t\t--#{$prefix}border-radius-xxl: #{$border-radius-xxl};\n\t\t\t\t--#{$prefix}border-radius-2xl: var(--#{$prefix}border-radius-xxl); // Deprecated in v5.3.0 for consistency\n\t\t\t\t--#{$prefix}border-radius-pill: #{$border-radius-pill};\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$border-width:                1px;\n\t\t\t\t$border-widths: (\n\t\t\t\t1: 1px,\n\t\t\t\t2: 2px,\n\t\t\t\t3: 3px,\n\t\t\t\t4: 4px,\n\t\t\t\t5: 5px\n\t\t\t\t);\n\t\t\t\t$border-style:                solid;\n\t\t\t\t$border-color:                $gray-300;\n\t\t\t\t$border-color-translucent:    rgba($black, .175);\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$border-radius:               .375rem;\n\t\t\t\t$border-radius-sm:            .25rem;\n\t\t\t\t$border-radius-lg:            .5rem;\n\t\t\t\t$border-radius-xl:            1rem;\n\t\t\t\t$border-radius-xxl:           2rem;\n\t\t\t\t$border-radius-pill:          50rem;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Variables for setting {{border-color}} in {{.border-*-subtle}} utilities in light and dark mode:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$primary-border-subtle:   tint-color($primary, 60%);\n\t\t\t\t$secondary-border-subtle: tint-color($secondary, 60%);\n\t\t\t\t$success-border-subtle:   tint-color($success, 60%);\n\t\t\t\t$info-border-subtle:      tint-color($info, 60%);\n\t\t\t\t$warning-border-subtle:   tint-color($warning, 60%);\n\t\t\t\t$danger-border-subtle:    tint-color($danger, 60%);\n\t\t\t\t$light-border-subtle:     $gray-200;\n\t\t\t\t$dark-border-subtle:      $gray-500;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables-dark.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables-dark.scss\",\n            code: `\n\t\t\t\t$primary-border-subtle-dark:        shade-color($primary, 40%);\n\t\t\t\t$secondary-border-subtle-dark:      shade-color($secondary, 40%);\n\t\t\t\t$success-border-subtle-dark:        shade-color($success, 40%);\n\t\t\t\t$info-border-subtle-dark:           shade-color($info, 40%);\n\t\t\t\t$warning-border-subtle-dark:        shade-color($warning, 40%);\n\t\t\t\t$danger-border-subtle-dark:         shade-color($danger, 40%);\n\t\t\t\t$light-border-subtle-dark:          $gray-700;\n\t\t\t\t$dark-border-subtle-dark:           $gray-800;\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass maps\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Color mode adaptive border colors are also available as a Sass map:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n\t\t\t\t$theme-colors-border-subtle: (\n\t\t\t\t\"primary\": $primary-border-subtle,\n\t\t\t\t\"secondary\": $secondary-border-subtle,\n\t\t\t\t\"success\": $success-border-subtle,\n\t\t\t\t\"info\": $info-border-subtle,\n\t\t\t\t\"warning\": $warning-border-subtle,\n\t\t\t\t\"danger\": $danger-border-subtle,\n\t\t\t\t\"light\": $light-border-subtle,\n\t\t\t\t\"dark\": $dark-border-subtle,\n\t\t\t\t);\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n\t\t\t\t$theme-colors-border-subtle-dark: (\n\t\t\t\t\"primary\": $primary-border-subtle-dark,\n\t\t\t\t\"secondary\": $secondary-border-subtle-dark,\n\t\t\t\t\"success\": $success-border-subtle-dark,\n\t\t\t\t\"info\": $info-border-subtle-dark,\n\t\t\t\t\"warning\": $warning-border-subtle-dark,\n\t\t\t\t\"danger\": $danger-border-subtle-dark,\n\t\t\t\t\"light\": $light-border-subtle-dark,\n\t\t\t\t\"dark\": $dark-border-subtle-dark,\n\t\t\t\t);\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass mixins\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/mixins/_border-radius.scsss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_border-radius.scss\",\n            code: `\n\t\t\t\t@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t@else if $fallback-border-radius != false {\n\t\t\t\t\tborder-radius: $fallback-border-radius;\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@mixin border-top-radius($radius: $border-radius) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-top-left-radius: valid-radius($radius);\n\t\t\t\t\tborder-top-right-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@mixin border-end-radius($radius: $border-radius) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-top-right-radius: valid-radius($radius);\n\t\t\t\t\tborder-bottom-right-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@mixin border-bottom-radius($radius: $border-radius) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-bottom-right-radius: valid-radius($radius);\n\t\t\t\t\tborder-bottom-left-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@mixin border-start-radius($radius: $border-radius) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-top-left-radius: valid-radius($radius);\n\t\t\t\t\tborder-bottom-left-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@mixin border-top-start-radius($radius: $border-radius) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-top-left-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@mixin border-top-end-radius($radius: $border-radius) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-top-right-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@mixin border-bottom-end-radius($radius: $border-radius) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-bottom-right-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@mixin border-bottom-start-radius($radius: $border-radius) {\n\t\t\t\t@if $enable-rounded {\n\t\t\t\t\tborder-bottom-left-radius: valid-radius($radius);\n\t\t\t\t}\n\t\t\t\t}\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Border utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"border\": (\n\t\t\t\tproperty: border,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n\t\t\t\t\t0: 0,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"border-top\": (\n\t\t\t\tproperty: border-top,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n\t\t\t\t\t0: 0,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"border-end\": (\n\t\t\t\tproperty: border-right,\n\t\t\t\tclass: border-end,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n\t\t\t\t\t0: 0,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"border-bottom\": (\n\t\t\t\tproperty: border-bottom,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n\t\t\t\t\t0: 0,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"border-start\": (\n\t\t\t\tproperty: border-left,\n\t\t\t\tclass: border-start,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n\t\t\t\t\t0: 0,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"border-color\": (\n\t\t\t\tproperty: border-color,\n\t\t\t\tclass: border,\n\t\t\t\tlocal-vars: (\n\t\t\t\t\t\"border-opacity\": 1\n\t\t\t\t),\n\t\t\t\tvalues: $utilities-border-colors\n\t\t\t\t),\n\t\t\t\t\"subtle-border-color\": (\n\t\t\t\tproperty: border-color,\n\t\t\t\tclass: border,\n\t\t\t\tvalues: $utilities-border-subtle\n\t\t\t\t),\n\t\t\t\t\"border-width\": (\n\t\t\t\tproperty: border-width,\n\t\t\t\tclass: border,\n\t\t\t\tvalues: $border-widths\n\t\t\t\t),\n\t\t\t\t\"border-opacity\": (\n\t\t\t\tcss-var: true,\n\t\t\t\tclass: border-opacity,\n\t\t\t\tvalues: (\n\t\t\t\t\t10: .1,\n\t\t\t\t\t25: .25,\n\t\t\t\t\t50: .5,\n\t\t\t\t\t75: .75,\n\t\t\t\t\t100: 1\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"rounded\": (\n\t\t\t\tproperty: border-radius,\n\t\t\t\tclass: rounded,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-radius),\n\t\t\t\t\t0: 0,\n\t\t\t\t\t1: var(--#{$prefix}border-radius-sm),\n\t\t\t\t\t2: var(--#{$prefix}border-radius),\n\t\t\t\t\t3: var(--#{$prefix}border-radius-lg),\n\t\t\t\t\t4: var(--#{$prefix}border-radius-xl),\n\t\t\t\t\t5: var(--#{$prefix}border-radius-xxl),\n\t\t\t\t\tcircle: 50%,\n\t\t\t\t\tpill: var(--#{$prefix}border-radius-pill)\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"rounded-top\": (\n\t\t\t\tproperty: border-top-left-radius border-top-right-radius,\n\t\t\t\tclass: rounded-top,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-radius),\n\t\t\t\t\t0: 0,\n\t\t\t\t\t1: var(--#{$prefix}border-radius-sm),\n\t\t\t\t\t2: var(--#{$prefix}border-radius),\n\t\t\t\t\t3: var(--#{$prefix}border-radius-lg),\n\t\t\t\t\t4: var(--#{$prefix}border-radius-xl),\n\t\t\t\t\t5: var(--#{$prefix}border-radius-xxl),\n\t\t\t\t\tcircle: 50%,\n\t\t\t\t\tpill: var(--#{$prefix}border-radius-pill)\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"rounded-end\": (\n\t\t\t\tproperty: border-top-right-radius border-bottom-right-radius,\n\t\t\t\tclass: rounded-end,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-radius),\n\t\t\t\t\t0: 0,\n\t\t\t\t\t1: var(--#{$prefix}border-radius-sm),\n\t\t\t\t\t2: var(--#{$prefix}border-radius),\n\t\t\t\t\t3: var(--#{$prefix}border-radius-lg),\n\t\t\t\t\t4: var(--#{$prefix}border-radius-xl),\n\t\t\t\t\t5: var(--#{$prefix}border-radius-xxl),\n\t\t\t\t\tcircle: 50%,\n\t\t\t\t\tpill: var(--#{$prefix}border-radius-pill)\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"rounded-bottom\": (\n\t\t\t\tproperty: border-bottom-right-radius border-bottom-left-radius,\n\t\t\t\tclass: rounded-bottom,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-radius),\n\t\t\t\t\t0: 0,\n\t\t\t\t\t1: var(--#{$prefix}border-radius-sm),\n\t\t\t\t\t2: var(--#{$prefix}border-radius),\n\t\t\t\t\t3: var(--#{$prefix}border-radius-lg),\n\t\t\t\t\t4: var(--#{$prefix}border-radius-xl),\n\t\t\t\t\t5: var(--#{$prefix}border-radius-xxl),\n\t\t\t\t\tcircle: 50%,\n\t\t\t\t\tpill: var(--#{$prefix}border-radius-pill)\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"rounded-start\": (\n\t\t\t\tproperty: border-bottom-left-radius border-top-left-radius,\n\t\t\t\tclass: rounded-start,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: var(--#{$prefix}border-radius),\n\t\t\t\t\t0: 0,\n\t\t\t\t\t1: var(--#{$prefix}border-radius-sm),\n\t\t\t\t\t2: var(--#{$prefix}border-radius),\n\t\t\t\t\t3: var(--#{$prefix}border-radius-lg),\n\t\t\t\t\t4: var(--#{$prefix}border-radius-xl),\n\t\t\t\t\t5: var(--#{$prefix}border-radius-xxl),\n\t\t\t\t\tcircle: 50%,\n\t\t\t\t\tpill: var(--#{$prefix}border-radius-pill)\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/borders.js?");

/***/ })

}]);
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_text_js"],{

/***/ "./lib/docs/utilities/text.js":
/*!************************************!*\
  !*** ./lib/docs/utilities/text.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   text: () => (/* binding */ text)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst text = {\n    title: \"Text\",\n    description: \"Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Text alignment\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                showViewport: true,\n                output: () => {\n                    return [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textAlign: \"start\" }, \"Start aligned text on all viewport sizes.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textAlign: \"center\" }, \"Center aligned text on all viewport sizes.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textAlign: \"end\" }, \"End aligned text on all viewport sizes.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textAlign: \"sm-end\" }, \"End aligned text on viewports sized SM (small) or wider.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textAlign: \"md-end\" }, \"End aligned text on viewports sized MD (medium) or wider.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textAlign: \"lg-end\" }, \"End aligned text on viewports sized LG (large) or wider.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textAlign: \"xl-end\" }, \"End aligned text on viewports sized XL (extra-large) or wider.\"),\n                    ];\n                },\n            }),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \" Note that Bootstrap don’t provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.\"),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Text wrapping and overflow\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Wrap text with a {{.text-wrap}} class.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ bgColor: \"primary\", textWrap: true, style: { width: \"6rem\" } }, \"This text should wrap.\");\n                },\n            }),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Prevent text from wrapping with a {{.text-nowrap}} class.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"body-secondary\", textWrap: false, style: { width: \"8rem\" } }, \"This text should overflow the parent.\");\n                },\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Word break\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Prevent long strings of text from breaking your components’ layout by using {{.text-break}} to set {{word-wrap: break-word}} and {{word-break: break-word}}. Bootstrap use {{word-wrap}} instead of the more common {{overflow-wrap}} for wider browser support, and add the deprecated {{word-break: break-word}} to avoid issues with flex containers.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textBreak: true }, \"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm\");\n                },\n            }),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"Note that {{https://rtlstyling.com/posts/rtl-styling#3.-line-break::breaking words isn’t possible in Arabic}}, which is the most used RTL language. Therefore {{.text-break}} is removed from Bootstrap RTL compiled CSS.\"),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Text transform\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Transform text in components with text capitalization classes.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textTransform: \"lowercase\" }, \"Lowercased text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textTransform: \"uppercase\" }, \"Uppercased text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textTransform: \"capitalize\" }, \"CapiTaliZed text.\"),\n                    ];\n                },\n            }),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Note how {{.text-capitalize}} only changes the first letter of each word, leaving the case of any other letters unaffected.\"),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Font size\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Quickly change the {{font-size}} of text. While Bootstrap heading classes (e.g., {{.h1}}–{{.h6}}) apply {{font-size}}, {{font-weight}}, and {{line-height}}, these utilities only apply {{font-size}}. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return [1, 2, 3, 4, 5, 6].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontSize: i }, `.fs-${i} text`));\n                },\n            }),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Customize your available {{font-sizes}} by modifying the {{$font-sizes}} Sass map.\"),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Font weight and italics\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Quickly change the {{font-weight}} or {{font-style}} of text with these utilities. {{font-style}} utilities are abbreviated as {{.fst-*}} and {{font-weight}} utilities are abbreviated as {{.fw-*}}.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontWeight: \"bold\" }, \"Bold text\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontWeight: \"bolder\" }, \"Bolder weight text (relative to the parent element).\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontWeight: \"semibold\" }, \"Semibold weight text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontWeight: \"medium\" }, \"Medium weight text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontWeight: \"normal\" }, \"Normal weight text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontWeight: \"light\" }, \"Light weight text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontWeight: \"lighter\" }, \"Lighter weight text (relative to the parent element).\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontItalic: true }, \"Italic text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ fontItalic: false }, \"Text with normal font style\"),\n                    ];\n                },\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Line height\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the line height with {{.lh-*}} utilities.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    const text = \"This is a long paragraph written to show how the line-height of an element is affected by Bootstrap utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with Bootstrap utility API.\";\n                    return [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lineHeight: 1 }, text),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lineHeight: \"sm\" }, text),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lineHeight: \"base\" }, text),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lineHeight: \"lg\" }, text),\n                    ];\n                },\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Monospace\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change a selection to Bootstrap monospace font stack with {{.font-monospace}}.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ monospace: true }, \"This is in monospace\");\n                },\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Reset color\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Reset a text or link’s color with {{.text-reset}}, so that it inherits the color from its parent.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textColor: \"body-secondary\" }, [\n                        \"Muted text with a \",\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", textColor: \"reset\" }, \"reset link\"),\n                        \".\",\n                    ]);\n                },\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Text decoration\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Decorate text in components with text decoration classes.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                output: () => {\n                    return [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textDecoration: \"underline\" }, \"This text has a line underneath it.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textDecoration: \"line-through\" }, \"This text has a line going through it.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", textDecoration: \"none\" }, \"This link has its text decoration removed\"),\n                    ];\n                },\n            }),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Default type and font related Sass variables:\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                type: \"css\",\n                title: \"scss/_variables.scss\",\n                source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                code: `\n\t\t\t\t// stylelint-disable value-keyword-case\n\t\t\t\t$font-family-sans-serif:      system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\t\t\t\t$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n\t\t\t\t// stylelint-enable value-keyword-case\n\t\t\t\t$font-family-base:            var(--#{$prefix}font-sans-serif);\n\t\t\t\t$font-family-code:            var(--#{$prefix}font-monospace);\n\n\t\t\t\t// $font-size-root affects the value of 'rem', which is used for as well font sizes, paddings, and margins\n\t\t\t\t// $font-size-base affects the font size of the body text\n\t\t\t\t$font-size-root:              null;\n\t\t\t\t$font-size-base:              1rem; // Assumes the browser default, typically '16px'\n\t\t\t\t$font-size-sm:                $font-size-base * .875;\n\t\t\t\t$font-size-lg:                $font-size-base * 1.25;\n\n\t\t\t\t$font-weight-lighter:         lighter;\n\t\t\t\t$font-weight-light:           300;\n\t\t\t\t$font-weight-normal:          400;\n\t\t\t\t$font-weight-medium:          500;\n\t\t\t\t$font-weight-semibold:        600;\n\t\t\t\t$font-weight-bold:            700;\n\t\t\t\t$font-weight-bolder:          bolder;\n\n\t\t\t\t$font-weight-base:            $font-weight-normal;\n\n\t\t\t\t$line-height-base:            1.5;\n\t\t\t\t$line-height-sm:              1.25;\n\t\t\t\t$line-height-lg:              2;\n\n\t\t\t\t$h1-font-size:                $font-size-base * 2.5;\n\t\t\t\t$h2-font-size:                $font-size-base * 2;\n\t\t\t\t$h3-font-size:                $font-size-base * 1.75;\n\t\t\t\t$h4-font-size:                $font-size-base * 1.5;\n\t\t\t\t$h5-font-size:                $font-size-base * 1.25;\n\t\t\t\t$h6-font-size:                $font-size-base;\n\t\t\t`,\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass maps\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Font-size utilities are generated from this map, in combination with Bootstrap utilities API.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                type: \"css\",\n                title: \"scss/_variables.scss\",\n                source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                code: `\n\t\t\t\t$font-sizes: (\n\t\t\t\t1: $h1-font-size,\n\t\t\t\t2: $h2-font-size,\n\t\t\t\t3: $h3-font-size,\n\t\t\t\t4: $h4-font-size,\n\t\t\t\t5: $h5-font-size,\n\t\t\t\t6: $h6-font-size\n\t\t\t\t);\n\t\t\t`,\n            }),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                type: \"css\",\n                title: \"scss/_maps.scss\",\n                source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n                code: `\n\t\t\t\t$theme-colors-text: (\n\t\t\t\t\"primary\": $primary-text-emphasis,\n\t\t\t\t\"secondary\": $secondary-text-emphasis,\n\t\t\t\t\"success\": $success-text-emphasis,\n\t\t\t\t\"info\": $info-text-emphasis,\n\t\t\t\t\"warning\": $warning-text-emphasis,\n\t\t\t\t\"danger\": $danger-text-emphasis,\n\t\t\t\t\"light\": $light-text-emphasis,\n\t\t\t\t\"dark\": $dark-text-emphasis,\n\t\t\t\t);\n\t\t\t`,\n            }),\n            //-----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Utilities API\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Font and text utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                type: \"css\",\n                title: \"scss/_utilities.scss\",\n                source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n                code: `\n\t\t\t\t\"font-family\": (\n\t\t\t\tproperty: font-family,\n\t\t\t\tclass: font,\n\t\t\t\tvalues: (monospace: var(--#{$prefix}font-monospace))\n\t\t\t\t),\n\t\t\t\t\"font-size\": (\n\t\t\t\trfs: true,\n\t\t\t\tproperty: font-size,\n\t\t\t\tclass: fs,\n\t\t\t\tvalues: $font-sizes\n\t\t\t\t),\n\t\t\t\t\"font-style\": (\n\t\t\t\tproperty: font-style,\n\t\t\t\tclass: fst,\n\t\t\t\tvalues: italic normal\n\t\t\t\t),\n\t\t\t\t\"font-weight\": (\n\t\t\t\tproperty: font-weight,\n\t\t\t\tclass: fw,\n\t\t\t\tvalues: (\n\t\t\t\t\tlighter: $font-weight-lighter,\n\t\t\t\t\tlight: $font-weight-light,\n\t\t\t\t\tnormal: $font-weight-normal,\n\t\t\t\t\tmedium: $font-weight-medium,\n\t\t\t\t\tsemibold: $font-weight-semibold,\n\t\t\t\t\tbold: $font-weight-bold,\n\t\t\t\t\tbolder: $font-weight-bolder\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"line-height\": (\n\t\t\t\tproperty: line-height,\n\t\t\t\tclass: lh,\n\t\t\t\tvalues: (\n\t\t\t\t\t1: 1,\n\t\t\t\t\tsm: $line-height-sm,\n\t\t\t\t\tbase: $line-height-base,\n\t\t\t\t\tlg: $line-height-lg,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"text-align\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: text-align,\n\t\t\t\tclass: text,\n\t\t\t\tvalues: (\n\t\t\t\t\tstart: left,\n\t\t\t\t\tend: right,\n\t\t\t\t\tcenter: center,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"text-decoration\": (\n\t\t\t\tproperty: text-decoration,\n\t\t\t\tvalues: none underline line-through\n\t\t\t\t),\n\t\t\t\t\"text-transform\": (\n\t\t\t\tproperty: text-transform,\n\t\t\t\tclass: text,\n\t\t\t\tvalues: lowercase uppercase capitalize\n\t\t\t\t),\n\t\t\t\t\"white-space\": (\n\t\t\t\tproperty: white-space,\n\t\t\t\tclass: text,\n\t\t\t\tvalues: (\n\t\t\t\t\twrap: normal,\n\t\t\t\t\tnowrap: nowrap,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"word-wrap\": (\n\t\t\t\tproperty: word-wrap word-break,\n\t\t\t\tclass: text,\n\t\t\t\tvalues: (break: break-word),\n\t\t\t\trtl: false\n\t\t\t\t),\n\t\t\t`,\n            }),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/text.js?");

/***/ })

}]);
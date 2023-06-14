"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_colors_js"],{

/***/ "./lib/docs/utilities/colors.js":
/*!**************************************!*\
  !*** ./lib/docs/utilities/colors.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   colors: () => (/* binding */ colors)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst colors = {\n    title: \"Colors\",\n    description: \"Convey meaning through {{color}} with a handful of color utility classes. Includes support for styling links with hover states, too.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Colors\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Colorize text with color utilities. If you want to colorize links, you can use the {{nav:docs/helpers/colored_links::.link-* helper classes}} which have {{:hover}} and {{:focus}} states.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"Color utilities like {{.text-*}} that generated from Bootstrap original {{$theme-colors}} Sass map don’t yet respond to color modes, however, any {{.text-*-emphasis}} utility will. This will be resolved in v6. \"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                const data = [\n                    { textColor: \"primary\" },\n                    { textColor: \"primary-emphasis\" },\n                    { textColor: \"secondary\" },\n                    { textColor: \"secondary-emphasis\" },\n                    { textColor: \"success\" },\n                    { textColor: \"success-emphasis\" },\n                    { textColor: \"danger\" },\n                    { textColor: \"danger-emphasis\" },\n                    { textColor: \"warning\", bgColor: \"dark\" },\n                    { textColor: \"warning-emphasis\" },\n                    { textColor: \"info\", bgColor: \"dark\" },\n                    { textColor: \"info-emphasis\" },\n                    { textColor: \"light\", bgColor: \"dark\" },\n                    { textColor: \"light-emphasis\" },\n                    { textColor: \"dark\" },\n                    { textColor: \"dark-emphasis\" },\n                    { textColor: \"body\" },\n                    { textColor: \"body-emphasis\" },\n                    { textColor: \"body-secondary\" },\n                    { textColor: \"body-tertiary\" },\n                    { textColor: \"black\" },\n                    { textColor: \"white\", bgColor: \"dark\" },\n                    { textColor: \"black\", textOpacity: 50 },\n                    { textColor: \"white\", textOpacity: 50, bgColor: \"dark\" },\n                ];\n                return data.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ bgColor: i.bgColor, textColor: i.textColor, textOpacity: i.textOpacity }, [\n                        `.text-${i.textColor}`,\n                        i.textOpacity ? `.text-opacity-${i.textOpacity}` : \"\",\n                    ]);\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"{{b::Deprecation:}} With the addition of {{.text-opacity-*}} utilities and CSS variables for text utilities, {{.text-black-50}} and {{.text-white-50}} are deprecated as of v5.1.0. They’ll be removed in v6.0.0. \"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"{{b::Deprecation:}} With the addition of the expanded theme colors and variables, the {{.text-muted}} utility has been deprecated as of v5.3.0. Its default value has also been reassigned to the new {{--bs-secondary-color}} CSS variable to better support color modes. It will be removed in v6.0.0.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Opacity\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As of v5.1.0, {{text-color}} utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Consider Bootstrap default {{.text-primary}} utility.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t.text-primary {\n\t\t\t\t--bs-text-opacity: 1;\n\t\t\t\tcolor: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\n\t\t\t\t}\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap use an RGB version of Bootstrap {{--bs-primary}} (with the value of {{13}}, {{110}}, {{253}}) CSS variable and attached a second CSS variable, {{--bs-text-opacity}}, for the alpha transparency (with a default value {{1}} thanks to a local CSS variable). That means anytime you use {{.text-primary}} now, your computed {{color}} value is {{rgba(13, 110, 253, 1)}}. The local CSS variable inside each {{.text-*}} class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To change that opacity, override {{--bs-text-opacity}} via custom styles or inline styles.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textColor: \"primary\" }, \"This is default primary text\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textColor: \"primary\", style: { \"--bs-text-opacity\": \".5\" } }, \"This is 50% opacity primary text\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or, choose from any of the {{.text-opacity}} utilities:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [undefined, 75, 50, 25].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        textColor: \"primary\",\n                        textOpacity: i,\n                    }, `This is ${i ? i + \"% opacity\" : \"default\"} primary text`);\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Specificity\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element’s content in a {{<div>}} or more semantic element with the desired class.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In addition to the following Sass functionality, consider reading about Bootstrap included {{https://getbootstrap.com/docs/5.3/customize/css-variables/::CSS custom properties}} (aka CSS variables) for colors and more.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Most {{color}} utilities are generated by Bootstrap theme colors, reassigned from Bootstrap generic color palette variables.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $blue:    #0d6efd;\n                $indigo:  #6610f2;\n                $purple:  #6f42c1;\n                $pink:    #d63384;\n                $red:     #dc3545;\n                $orange:  #fd7e14;\n                $yellow:  #ffc107;\n                $green:   #198754;\n                $teal:    #20c997;\n                $cyan:    #0dcaf0;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $primary:       $blue;\n                $secondary:     $gray-600;\n                $success:       $green;\n                $info:          $cyan;\n                $warning:       $yellow;\n                $danger:        $red;\n                $light:         $gray-100;\n                $dark:          $gray-900;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Grayscale colors are also available, but only a subset are used to generate any utilities.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $white:    #fff;\n                $gray-100: #f8f9fa;\n                $gray-200: #e9ecef;\n                $gray-300: #dee2e6;\n                $gray-400: #ced4da;\n                $gray-500: #adb5bd;\n                $gray-600: #6c757d;\n                $gray-700: #495057;\n                $gray-800: #343a40;\n                $gray-900: #212529;\n                $black:    #000;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n                $theme-colors-text: (\n\t\t\t\t\"primary\": $primary-text-emphasis,\n\t\t\t\t\"secondary\": $secondary-text-emphasis,\n\t\t\t\t\"success\": $success-text-emphasis,\n\t\t\t\t\"info\": $info-text-emphasis,\n\t\t\t\t\"warning\": $warning-text-emphasis,\n\t\t\t\t\"danger\": $danger-text-emphasis,\n\t\t\t\t\"light\": $light-text-emphasis,\n\t\t\t\t\"dark\": $dark-text-emphasis,\n\t\t\t\t);\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Variables for setting colors in {{.text-*-emphasis}} utilities in light and dark mode:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$primary-text-emphasis:   shade-color($primary, 60%);\n\t\t\t\t$secondary-text-emphasis: shade-color($secondary, 60%);\n\t\t\t\t$success-text-emphasis:   shade-color($success, 60%);\n\t\t\t\t$info-text-emphasis:      shade-color($info, 60%);\n\t\t\t\t$warning-text-emphasis:   shade-color($warning, 60%);\n\t\t\t\t$danger-text-emphasis:    shade-color($danger, 60%);\n\t\t\t\t$light-text-emphasis:     $gray-700;\n\t\t\t\t$dark-text-emphasis:      $gray-700;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables-dark.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables-dark.scss\",\n            code: `\n\t\t\t\t$primary-text-emphasis-dark:        tint-color($primary, 40%);\n\t\t\t\t$secondary-text-emphasis-dark:      tint-color($secondary, 40%);\n\t\t\t\t$success-text-emphasis-dark:        tint-color($success, 40%);\n\t\t\t\t$info-text-emphasis-dark:           tint-color($info, 40%);\n\t\t\t\t$warning-text-emphasis-dark:        tint-color($warning, 40%);\n\t\t\t\t$danger-text-emphasis-dark:         tint-color($danger, 40%);\n\t\t\t\t$light-text-emphasis-dark:          $gray-100;\n\t\t\t\t$dark-text-emphasis-dark:           $gray-300;\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass maps\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Theme colors are then put into a Sass map so Bootstrap can loop over them to generate Bootstrap utilities, component modifiers, and more.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $theme-colors: (\n                \"primary\":    $primary,\n                \"secondary\":  $secondary,\n                \"success\":    $success,\n                \"info\":       $info,\n                \"warning\":    $warning,\n                \"danger\":     $danger,\n                \"light\":      $light,\n                \"dark\":       $dark\n                );\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Grayscale colors are also available as a Sass map. {{b::This map is not used to generate any utilities}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $grays: (\n                \"100\": $gray-100,\n                \"200\": $gray-200,\n                \"300\": $gray-300,\n                \"400\": $gray-400,\n                \"500\": $gray-500,\n                \"600\": $gray-600,\n                \"700\": $gray-700,\n                \"800\": $gray-800,\n                \"900\": $gray-900\n                );\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"RGB colors are generated from a separate Sass map:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n                $theme-colors-rgb: map-loop($theme-colors, to-rgb, \"$value\");\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Color opacities build on that with their own map that’s consumed by the utilities API:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n\t\t\t\t$utilities-text: map-merge(\n\t\t\t\t$utilities-colors,\n\t\t\t\t(\n\t\t\t\t\t\"black\": to-rgb($black),\n\t\t\t\t\t\"white\": to-rgb($white),\n\t\t\t\t\t\"body\": to-rgb($body-color)\n\t\t\t\t)\n\t\t\t\t);\n\t\t\t\t$utilities-text-colors: map-loop($utilities-text, rgba-css-var, \"$key\", \"text\");\n\n\t\t\t\t$utilities-text-emphasis-colors: (\n\t\t\t\t\"primary-emphasis\": var(--#{$prefix}primary-text-emphasis),\n\t\t\t\t\"secondary-emphasis\": var(--#{$prefix}secondary-text-emphasis),\n\t\t\t\t\"success-emphasis\": var(--#{$prefix}success-text-emphasis),\n\t\t\t\t\"info-emphasis\": var(--#{$prefix}info-text-emphasis),\n\t\t\t\t\"warning-emphasis\": var(--#{$prefix}warning-text-emphasis),\n\t\t\t\t\"danger-emphasis\": var(--#{$prefix}danger-text-emphasis),\n\t\t\t\t\"light-emphasis\": var(--#{$prefix}light-text-emphasis),\n\t\t\t\t\"dark-emphasis\": var(--#{$prefix}dark-text-emphasis)\n\t\t\t\t);\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Color mode background colors are also available as a Sass map:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n\t\t\t\t$theme-colors-text: (\n\t\t\t\t\"primary\": $primary-text-emphasis,\n\t\t\t\t\"secondary\": $secondary-text-emphasis,\n\t\t\t\t\"success\": $success-text-emphasis,\n\t\t\t\t\"info\": $info-text-emphasis,\n\t\t\t\t\"warning\": $warning-text-emphasis,\n\t\t\t\t\"danger\": $danger-text-emphasis,\n\t\t\t\t\"light\": $light-text-emphasis,\n\t\t\t\t\"dark\": $dark-text-emphasis,\n\t\t\t\t);\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n\t\t\t\t$theme-colors-text-dark: (\n\t\t\t\t\"primary\": $primary-text-emphasis-dark,\n\t\t\t\t\"secondary\": $secondary-text-emphasis-dark,\n\t\t\t\t\"success\": $success-text-emphasis-dark,\n\t\t\t\t\"info\": $info-text-emphasis-dark,\n\t\t\t\t\"warning\": $warning-text-emphasis-dark,\n\t\t\t\t\"danger\": $danger-text-emphasis-dark,\n\t\t\t\t\"light\": $light-text-emphasis-dark,\n\t\t\t\t\"dark\": $dark-text-emphasis-dark,\n\t\t\t\t);\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Color utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"color\": (\n\t\t\t\tproperty: color,\n\t\t\t\tclass: text,\n\t\t\t\tlocal-vars: (\n\t\t\t\t\t\"text-opacity\": 1\n\t\t\t\t),\n\t\t\t\tvalues: map-merge(\n\t\t\t\t\t$utilities-text-colors,\n\t\t\t\t\t(\n\t\t\t\t\t\"muted\": var(--#{$prefix}secondary-color), // deprecated\n\t\t\t\t\t\"black-50\": rgba($black, .5), // deprecated\n\t\t\t\t\t\"white-50\": rgba($white, .5), // deprecated\n\t\t\t\t\t\"body-secondary\": var(--#{$prefix}secondary-color),\n\t\t\t\t\t\"body-tertiary\": var(--#{$prefix}tertiary-color),\n\t\t\t\t\t\"body-emphasis\": var(--#{$prefix}emphasis-color),\n\t\t\t\t\t\"reset\": inherit,\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"text-opacity\": (\n\t\t\t\tcss-var: true,\n\t\t\t\tclass: text-opacity,\n\t\t\t\tvalues: (\n\t\t\t\t\t25: .25,\n\t\t\t\t\t50: .5,\n\t\t\t\t\t75: .75,\n\t\t\t\t\t100: 1\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"text-color\": (\n\t\t\t\tproperty: color,\n\t\t\t\tclass: text,\n\t\t\t\tvalues: $utilities-text-emphasis-colors\n\t\t\t\t),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/colors.js?");

/***/ })

}]);
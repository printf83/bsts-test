"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_background_js"],{

/***/ "./lib/docs/utilities/background.js":
/*!******************************************!*\
  !*** ./lib/docs/utilities/background.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   background: () => (/* binding */ background)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst background = {\n    title: \"Background\",\n    description: \"Convey meaning through {{background-color}} and add decoration with gradients.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Background color\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities {{b::do not set }}{{bc::color}}, so in some cases you’ll want to use {{.text-*}} {{nav:docs/utilities/colors::color utilities}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \" Background utilities like {{.bg-*}} that generated from Bootstrap original {{$theme-colors}} Sass map don’t yet respond to color modes, however, any {{.bg-*-subtle}} utility will. This will be resolved in v6. \"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                const data = [\n                    { bgColor: \"primary\", textColor: \"white\" },\n                    { bgColor: \"primary-subtle\", textColor: \"primary-emphasis\" },\n                    { bgColor: \"secondary\", textColor: \"white\" },\n                    { bgColor: \"secondary-subtle\", textColor: \"secondary-emphasis\" },\n                    { bgColor: \"success\", textColor: \"white\" },\n                    { bgColor: \"success-subtle\", textColor: \"success-emphasis\" },\n                    { bgColor: \"danger\", textColor: \"white\" },\n                    { bgColor: \"danger-subtle\", textColor: \"danger-emphasis\" },\n                    { bgColor: \"warning\", textColor: \"dark\" },\n                    { bgColor: \"warning-subtle\", textColor: \"warning-emphasis\" },\n                    { bgColor: \"info\", textColor: \"dark\" },\n                    { bgColor: \"info-subtle\", textColor: \"info-emphasis\" },\n                    { bgColor: \"light\", textColor: \"dark\" },\n                    { bgColor: \"light-subtle\", textColor: \"light-emphasis\" },\n                    { bgColor: \"dark\", textColor: \"white\" },\n                    { bgColor: \"dark-subtle\", textColor: \"dark-emphasis\" },\n                    { bgColor: \"body-secondary\" },\n                    { bgColor: \"body-tertiary\" },\n                    { bgColor: \"body\", textColor: \"body\" },\n                    { bgColor: \"black\", textColor: \"white\" },\n                    { bgColor: \"white\", textColor: \"dark\" },\n                    { bgColor: \"transparent\", textColor: \"body\" },\n                ];\n                return data.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3, marginBottom: 2, bgColor: i.bgColor, textColor: i.textColor }, `.bg-${i.bgColor}`);\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Background gradient\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"By adding a {{.bg-gradient}} class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Do you need a gradient in your custom CSS? Just add {{background-image: var(--bs-gradient);}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                const data = [\n                    { bgColor: \"primary\", textColor: \"white\" },\n                    { bgColor: \"primary-subtle\", textColor: \"primary-emphasis\" },\n                    { bgColor: \"secondary\", textColor: \"white\" },\n                    { bgColor: \"secondary-subtle\", textColor: \"secondary-emphasis\" },\n                    { bgColor: \"success\", textColor: \"white\" },\n                    { bgColor: \"success-subtle\", textColor: \"success-emphasis\" },\n                    { bgColor: \"danger\", textColor: \"white\" },\n                    { bgColor: \"danger-subtle\", textColor: \"danger-emphasis\" },\n                    { bgColor: \"warning\", textColor: \"dark\" },\n                    { bgColor: \"warning-subtle\", textColor: \"warning-emphasis\" },\n                    { bgColor: \"info\", textColor: \"dark\" },\n                    { bgColor: \"info-subtle\", textColor: \"info-emphasis\" },\n                    { bgColor: \"light\", textColor: \"dark\" },\n                    { bgColor: \"light-subtle\", textColor: \"light-emphasis\" },\n                    { bgColor: \"dark\", textColor: \"white\" },\n                    { bgColor: \"dark-subtle\", textColor: \"dark-emphasis\" },\n                    { bgColor: \"body-secondary\" },\n                    { bgColor: \"body-tertiary\" },\n                    { bgColor: \"body\", textColor: \"body\" },\n                    { bgColor: \"black\", textColor: \"white\" },\n                    { bgColor: \"white\", textColor: \"dark\" },\n                    { bgColor: \"transparent\", textColor: \"body\" },\n                ];\n                return data.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3, marginBottom: 2, bgColor: i.bgColor, textColor: i.textColor, bgGradient: true }, `.bg-${i.bgColor}.bg-gradient`);\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Opacity\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As of v5.1.0, {{background-color}} utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Consider Bootstrap default {{.bg-success}} utility.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n                .bg-success {\n                --bs-bg-opacity: 1;\n                background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;\n                }\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap use an RGB version of Bootstrap {{--bs-success}} (with the value of {{25}}, {{135}}, {{84}}) CSS variable and attached a second CSS variable, {{--bs-bg-opacity}}, for the alpha transparency (with a default value 1 thanks to a local CSS variable). That means anytime you use {{.bg-success}} now, your computed {{color}} value is {{rgba(25, 135, 84, 1)}}. The local CSS variable inside each {{.bg-*}} class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To change that opacity, override {{--bs-bg-opacity}} via custom styles or inline styles.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"success\", textColor: \"white\", padding: 2 }, \"This is default success background\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"success\", textColor: \"white\", padding: 2, style: { \"--bs-bg-opacity\": \".5\" } }, \"This is 50% opacity success background\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or, choose from any of the {{.bg-opacity}} utilities:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [undefined, 75, 50, 25, 10].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        bgColor: \"success\",\n                        textColor: i && i < 75 ? \"body-emphasis\" : \"white\",\n                        padding: 2,\n                        bgOpacity: i,\n                    }, `This is ${i ? i + \"% opacity\" : \"default\"} success background`);\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In addition to the following Sass functionality, consider reading about Bootstrap included {{https://getbootstrap.com/docs/5.3/customize/css-variables/::CSS custom properties}} (aka CSS variables) for colors and more.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Most {{background-color}} utilities are generated by Bootstrap theme colors, reassigned from Bootstrap generic color palette variables.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $blue:    #0d6efd;\n                $indigo:  #6610f2;\n                $purple:  #6f42c1;\n                $pink:    #d63384;\n                $red:     #dc3545;\n                $orange:  #fd7e14;\n                $yellow:  #ffc107;\n                $green:   #198754;\n                $teal:    #20c997;\n                $cyan:    #0dcaf0;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $primary:       $blue;\n                $secondary:     $gray-600;\n                $success:       $green;\n                $info:          $cyan;\n                $warning:       $yellow;\n                $danger:        $red;\n                $light:         $gray-100;\n                $dark:          $gray-900;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0));\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Grayscale colors are also available, but only a subset are used to generate any utilities.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $white:    #fff;\n                $gray-100: #f8f9fa;\n                $gray-200: #e9ecef;\n                $gray-300: #dee2e6;\n                $gray-400: #ced4da;\n                $gray-500: #adb5bd;\n                $gray-600: #6c757d;\n                $gray-700: #495057;\n                $gray-800: #343a40;\n                $gray-900: #212529;\n                $black:    #000;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Variables for setting {{background-color}} in {{.bg-*-subtle}} utilities in light and dark mode:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $primary-bg-subtle:       tint-color($primary, 80%);\n                $secondary-bg-subtle:     tint-color($secondary, 80%);\n                $success-bg-subtle:       tint-color($success, 80%);\n                $info-bg-subtle:          tint-color($info, 80%);\n                $warning-bg-subtle:       tint-color($warning, 80%);\n                $danger-bg-subtle:        tint-color($danger, 80%);\n                $light-bg-subtle:         mix($gray-100, $white);\n                $dark-bg-subtle:          $gray-400;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables-dark.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables-dark.scss\",\n            code: `\n                $primary-bg-subtle-dark:            shade-color($primary, 80%);\n                $secondary-bg-subtle-dark:          shade-color($secondary, 80%);\n                $success-bg-subtle-dark:            shade-color($success, 80%);\n                $info-bg-subtle-dark:               shade-color($info, 80%);\n                $warning-bg-subtle-dark:            shade-color($warning, 80%);\n                $danger-bg-subtle-dark:             shade-color($danger, 80%);\n                $light-bg-subtle-dark:              $gray-800;\n                $dark-bg-subtle-dark:               mix($gray-800, $black);\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass maps\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Theme colors are then put into a Sass map so Bootstrap can loop over them to generate Bootstrap utilities, component modifiers, and more.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $theme-colors: (\n                \"primary\":    $primary,\n                \"secondary\":  $secondary,\n                \"success\":    $success,\n                \"info\":       $info,\n                \"warning\":    $warning,\n                \"danger\":     $danger,\n                \"light\":      $light,\n                \"dark\":       $dark\n                );\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Grayscale colors are also available as a Sass map. {{b::This map is not used to generate any utilities}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n                $grays: (\n                \"100\": $gray-100,\n                \"200\": $gray-200,\n                \"300\": $gray-300,\n                \"400\": $gray-400,\n                \"500\": $gray-500,\n                \"600\": $gray-600,\n                \"700\": $gray-700,\n                \"800\": $gray-800,\n                \"900\": $gray-900\n                );\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"RGB colors are generated from a separate Sass map:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n                $theme-colors-rgb: map-loop($theme-colors, to-rgb, \"$value\");\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Background color opacities build on that with their own map that’s consumed by the utilities API:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n                $utilities-bg: map-merge(\n                $utilities-colors,\n                (\n                    \"black\": to-rgb($black),\n                    \"white\": to-rgb($white),\n                    \"body\": to-rgb($body-bg)\n                )\n                );\n                $utilities-bg-colors: map-loop($utilities-bg, rgba-css-var, \"$key\", \"bg\");\n\n                $utilities-bg-subtle: (\n                \"primary-subtle\": var(--#{$prefix}primary-bg-subtle),\n                \"secondary-subtle\": var(--#{$prefix}secondary-bg-subtle),\n                \"success-subtle\": var(--#{$prefix}success-bg-subtle),\n                \"info-subtle\": var(--#{$prefix}info-bg-subtle),\n                \"warning-subtle\": var(--#{$prefix}warning-bg-subtle),\n                \"danger-subtle\": var(--#{$prefix}danger-bg-subtle),\n                \"light-subtle\": var(--#{$prefix}light-bg-subtle),\n                \"dark-subtle\": var(--#{$prefix}dark-bg-subtle)\n                );\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Color mode background colors are also available as a Sass map:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n                $theme-colors-bg-subtle: (\n                \"primary\": $primary-bg-subtle,\n                \"secondary\": $secondary-bg-subtle,\n                \"success\": $success-bg-subtle,\n                \"info\": $info-bg-subtle,\n                \"warning\": $warning-bg-subtle,\n                \"danger\": $danger-bg-subtle,\n                \"light\": $light-bg-subtle,\n                \"dark\": $dark-bg-subtle,\n                );\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_maps.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_maps.scss\",\n            code: `\n                $theme-colors-bg-subtle-dark: (\n                \"primary\": $primary-bg-subtle-dark,\n                \"secondary\": $secondary-bg-subtle-dark,\n                \"success\": $success-bg-subtle-dark,\n                \"info\": $info-bg-subtle-dark,\n                \"warning\": $warning-bg-subtle-dark,\n                \"danger\": $danger-bg-subtle-dark,\n                \"light\": $light-bg-subtle-dark,\n                \"dark\": $dark-bg-subtle-dark,\n                );\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass mixins\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{b::No mixins are used to generate Bootstrap background utilities}}, but Bootstrap do have some additional mixins for other situations where you’d like to create your own gradients.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/mixins/_gradients.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_gradients.scss\",\n            code: `\n                @mixin gradient-bg($color: null) {\n                background-color: $color;\n\n                @if $enable-gradients {\n                    background-image: var(--#{$prefix}gradient);\n                }\n                }\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/mixins/_gradients.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_gradients.scss\",\n            code: `\n                // Horizontal gradient, from left to right\n                //\n                // Creates two color stops, start and end, by specifying a color and position for each color stop.\n                @mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n                background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n                }\n\n                // Vertical gradient, from top to bottom\n                //\n                // Creates two color stops, start and end, by specifying a color and position for each color stop.\n                @mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {\n                background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n                }\n\n                @mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n                background-image: linear-gradient($deg, $start-color, $end-color);\n                }\n\n                @mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n                background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n                }\n\n                @mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n                background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n                }\n\n                @mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n                background-image: radial-gradient(circle, $inner-color, $outer-color);\n                }\n\n                @mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n                background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n                }\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Background utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\n                \"background-color\": (\n                property: background-color,\n                class: bg,\n                local-vars: (\n                    \"bg-opacity\": 1\n                ),\n                values: map-merge(\n                    $utilities-bg-colors,\n                    (\n                    \"transparent\": transparent,\n                    \"body-secondary\": rgba(var(--#{$prefix}secondary-bg-rgb), var(--#{$prefix}bg-opacity)),\n                    \"body-tertiary\": rgba(var(--#{$prefix}tertiary-bg-rgb), var(--#{$prefix}bg-opacity)),\n                    )\n                )\n                ),\n                \"bg-opacity\": (\n                css-var: true,\n                class: bg-opacity,\n                values: (\n                    10: .1,\n                    25: .25,\n                    50: .5,\n                    75: .75,\n                    100: 1\n                )\n                ),\n                \"subtle-background-color\": (\n                property: background-color,\n                class: bg,\n                values: $utilities-bg-subtle\n                ),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/background.js?");

/***/ })

}]);
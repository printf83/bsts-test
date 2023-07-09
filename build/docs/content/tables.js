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
exports.tables = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
const TABLEITEM = () => {
    return [
        new bsts_1.b.table.thead(new bsts_1.b.table.tr([
            new bsts_1.b.table.th({ scope: "col" }, "#"),
            new bsts_1.b.table.th({ scope: "col" }, "First"),
            new bsts_1.b.table.th({ scope: "col" }, "Last"),
            new bsts_1.b.table.th({ scope: "col" }, "Handle"),
        ])),
        new bsts_1.b.table.tbody([
            new bsts_1.b.table.tr([
                new bsts_1.b.table.th({ scope: "row" }, "1"),
                new bsts_1.b.table.td("Mark"),
                new bsts_1.b.table.td("Otto"),
                new bsts_1.b.table.td("@mdo"),
            ]),
            new bsts_1.b.table.tr([
                new bsts_1.b.table.th({ scope: "row" }, "2"),
                new bsts_1.b.table.td("Jacob"),
                new bsts_1.b.table.td("Thornton"),
                new bsts_1.b.table.td("@fat"),
            ]),
            new bsts_1.b.table.tr([
                new bsts_1.b.table.th({ scope: "row" }, "3"),
                new bsts_1.b.table.td({ colspan: 2 }, "Larry the Bird"),
                new bsts_1.b.table.td("@twitter"),
            ]),
        ]),
    ];
};
const TABLEHEAD = () => {
    return new bsts_1.b.table.tr([
        new bsts_1.b.table.th({ scope: "col" }, "#"),
        new bsts_1.b.table.th({ scope: "col" }, "First"),
        new bsts_1.b.table.th({ scope: "col" }, "Last"),
        new bsts_1.b.table.th({ scope: "col" }, "Handle"),
    ]);
};
const TABLEBODY = () => {
    return [
        new bsts_1.b.table.tr([
            new bsts_1.b.table.th({ scope: "row" }, "1"),
            new bsts_1.b.table.td("Mark"),
            new bsts_1.b.table.td("Otto"),
            new bsts_1.b.table.td("@mdo"),
        ]),
        new bsts_1.b.table.tr([
            new bsts_1.b.table.th({ scope: "row" }, "2"),
            new bsts_1.b.table.td("Jacob"),
            new bsts_1.b.table.td("Thornton"),
            new bsts_1.b.table.td("@fat"),
        ]),
        new bsts_1.b.table.tr([
            new bsts_1.b.table.th({ scope: "row" }, "3"),
            new bsts_1.b.table.td("Larry"),
            new bsts_1.b.table.td("the Bird"),
            new bsts_1.b.table.td("@twitter"),
        ]),
    ];
};
const TABLEBIG = (row, col) => {
    return [
        new bsts_1.b.table.thead(new bsts_1.b.table.tr(Array(col)
            .fill("")
            .map((_i, ix) => new bsts_1.b.table.th({ scope: "col" }, ix === 0 ? "#" : `Head#${ix + 1}`)))),
        new bsts_1.b.table.tbody(Array(row)
            .fill("")
            .map((_i, ix) => new bsts_1.b.table.tr(Array(col)
            .fill("")
            .map((_j, jx) => jx === 0
            ? new bsts_1.b.table.th({ scope: "row" }, (ix + 1).toString())
            : new bsts_1.b.table.td(`Cell#${jx + 1}`))))),
    ];
};
exports.tables = {
    title: "Tables",
    description: "Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.",
    item: () => {
        return [
            new e.section([
                new e.title("Overview"),
                new e.text("Due to the widespread use of {{<table>}} elements across third-party widgets like calendars and date pickers, Bootstrap’s tables are opt-in. Add the base class {{.table}} to any {{<table>}}, then extend with Bootstrap optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent."),
                new e.text("Using the most basic table markup, here’s how {{.table}}-based tables look in Bootstrap."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    output: () => {
                        return new bsts_1.b.table.container([
                            new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({ scope: "col" }, "#"),
                                new bsts_1.b.table.th({ scope: "col" }, "First"),
                                new bsts_1.b.table.th({ scope: "col" }, "Last"),
                                new bsts_1.b.table.th({ scope: "col" }, "Handle"),
                            ])),
                            new bsts_1.b.table.tbody([
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "1"),
                                    new bsts_1.b.table.td("Mark"),
                                    new bsts_1.b.table.td("Otto"),
                                    new bsts_1.b.table.td("@mdo"),
                                ]),
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "2"),
                                    new bsts_1.b.table.td("Jacob"),
                                    new bsts_1.b.table.td("Thornton"),
                                    new bsts_1.b.table.td("@fat"),
                                ]),
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "3"),
                                    new bsts_1.b.table.td({ colspan: 2 }, "Larry the Bird"),
                                    new bsts_1.b.table.td("@twitter"),
                                ]),
                            ]),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Variants"),
                new e.text("Use contextual classes to color tables, table rows or individual cells."),
                new e.alert({ color: "info", callout: true }, "{{b::Heads up! }}Because of the more complicated CSS used to generate Bootstrap table variants, they most likely won’t see color mode adaptive styling until v6."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    output: () => {
                        return new bsts_1.b.table.container([
                            new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({ scope: "col" }, "Class"),
                                new bsts_1.b.table.th({ scope: "col" }, "Heading"),
                                new bsts_1.b.table.th({ scope: "col" }, "Heading"),
                            ])),
                            new bsts_1.b.table.tbody([
                                undefined,
                                "primary",
                                "secondary",
                                "success",
                                "danger",
                                "warning",
                                "info",
                                "light",
                                "dark",
                            ].map((i) => new bsts_1.b.table.tr({ color: i }, [
                                new bsts_1.b.table.th({ scope: "row" }, i ? bsts_1.core.uppercaseFirst(i) : "Default"),
                                new bsts_1.b.table.td("Cell"),
                                new bsts_1.b.table.td("Cell"),
                            ]))),
                        ]);
                    },
                }),
                new e.text("Set color on {{table}} and {{cell}}"),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    output: () => {
                        return new bsts_1.b.table.container({ color: "primary" }, [
                            new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({ scope: "col" }, "Class"),
                                new bsts_1.b.table.th({ scope: "col" }, "Heading"),
                                new bsts_1.b.table.th({ scope: "col" }, "Heading"),
                            ])),
                            new bsts_1.b.table.tbody([
                                undefined,
                                "primary",
                                "secondary",
                                "success",
                                "danger",
                                "warning",
                                "info",
                                "light",
                                "dark",
                            ].map((i) => new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({
                                    scope: "row",
                                    color: i,
                                }, i ? bsts_1.core.uppercaseFirst(i) : "Default"),
                                new bsts_1.b.table.td("Cell"),
                                new bsts_1.b.table.td({ color: i }, "Cell"),
                            ]))),
                        ]);
                    },
                }),
                new e.alert({ color: "info", callout: true }, "{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."),
            ]),
            //----------------------
            new e.section([new e.title("Accented tables")]),
            //----------------------
            new e.section([
                new e.subtitle("Striped rows"),
                new e.text("Use {{.table-striped}} to add zebra-striping to any table row within the {{<tbody>}}."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ striped: "row" }, TABLEITEM());
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Striped columns"),
                new e.text("Use {{.table-striped-columns}} to add zebra-striping to any table column."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ striped: "col" }, TABLEITEM());
                    },
                }),
                new e.text("These classes can also be added to table variants:"),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ striped: "row", color: "dark" }, TABLEITEM());
                    },
                }),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ striped: "col", color: "dark" }, TABLEITEM());
                    },
                }),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ striped: "row", color: "success" }, TABLEITEM());
                    },
                }),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ striped: "col", color: "success" }, TABLEITEM());
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Hoverable rows"),
                new e.text("Add {{.table-hover}} to enable a hover state on table rows within a {{<tbody>}}."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ hoverable: true }, TABLEITEM());
                    },
                }),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ hoverable: true, color: "dark" }, TABLEITEM());
                    },
                }),
                new e.text("These hoverable rows can also be combined with the striped rows variant:"),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ hoverable: true, striped: "row" }, TABLEITEM());
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Active tables"),
                new e.text("Highlight a table row or cell by adding a {{.table-active}} class."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    output: () => {
                        return new bsts_1.b.table.container([
                            new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({ scope: "col" }, "#"),
                                new bsts_1.b.table.th({ scope: "col" }, "First"),
                                new bsts_1.b.table.th({ scope: "col" }, "Last"),
                                new bsts_1.b.table.th({ scope: "col" }, "Handle"),
                            ])),
                            new bsts_1.b.table.tbody([
                                new bsts_1.b.table.tr({ active: true }, [
                                    new bsts_1.b.table.th({ scope: "row" }, "1"),
                                    new bsts_1.b.table.td("Mark"),
                                    new bsts_1.b.table.td("Otto"),
                                    new bsts_1.b.table.td("@mdo"),
                                ]),
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "2"),
                                    new bsts_1.b.table.td("Jacob"),
                                    new bsts_1.b.table.td("Thornton"),
                                    new bsts_1.b.table.td("@fat"),
                                ]),
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "3"),
                                    new bsts_1.b.table.td({ colspan: 2, active: true }, "Larry the Bird"),
                                    new bsts_1.b.table.td("@twitter"),
                                ]),
                            ]),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("How do the variants and accented tables work?"),
                new e.text("For the accented tables ({{nav:docs/content/tables#striped_rows::striped rows}}, {{nav:docs/content/tables#striped_columns::striped columns}}, {{nav:docs/content/tables#hoverable_rows::hoverable rows}}, and {{nav:docs/content/tables#active_tables::active tables}}), Bootstrap used some techniques to make these effects work for all Bootstrap {{nav:docs/content/tables#variants::table variants}}:"),
                new e.ul({
                    item: [
                        "Bootstrap start by setting the background of a table cell with the {{--bs-table-bg}} custom property. All table variants then set that custom property to colorize the table cells. This way, Bootstrap don’t get into trouble if semi-transparent colors are used as table backgrounds.",
                        "Then Bootstrap add an inset box shadow on the table cells with {{box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);}} to layer on top of any specified {{background-color}}. Because Bootstrap use a huge spread and no blur, the color will be monotone. Since {{--bs-table-accent-bg}} is unset by default, Bootstrap don’t have a default box shadow.",
                        "When either {{.table-striped}}, {{.table-striped-columns}}, {{.table-hover}} or {{.table-active}} classes are added, the {{--bs-table-accent-bg}} is set to a semitransparent color to colorize the background.",
                        "For each table variant, Bootstrap generate a {{--bs-table-accent-bg}} color with the highest contrast depending on that color. For example, the accent color for {{.table-primary}} is darker while {{.table-dark}} has a lighter accent color.",
                        "Text and border colors are generated the same way, and their colors are inherited by default.",
                    ],
                }),
                new e.text("Behind the scenes it looks like this:"),
                new e.codepreview({
                    type: "css",
                    title: "scss/mixins/_table-variants.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_table-variants.scss",
                    code: `
						@mixin table-variant($state, $background) {
						.table-#{$state} {
							$color: color-contrast(opaque($body-bg, $background));
							$hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
							$striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
							$active-bg: mix($color, $background, percentage($table-active-bg-factor));
							$table-border-color: mix($color, $background, percentage($table-border-factor));

							--#{$prefix}table-color: #{$color};
							--#{$prefix}table-bg: #{$background};
							--#{$prefix}table-border-color: #{$table-border-color};
							--#{$prefix}table-striped-bg: #{$striped-bg};
							--#{$prefix}table-striped-color: #{color-contrast($striped-bg)};
							--#{$prefix}table-active-bg: #{$active-bg};
							--#{$prefix}table-active-color: #{color-contrast($active-bg)};
							--#{$prefix}table-hover-bg: #{$hover-bg};
							--#{$prefix}table-hover-color: #{color-contrast($hover-bg)};

							color: var(--#{$prefix}table-color);
							border-color: var(--#{$prefix}table-border-color);
						}
						}
					`,
                }),
            ]),
            //----------------------
            new e.section([new e.title("Table borders")]),
            //----------------------
            new e.section([
                new e.subtitle("Bordered tables"),
                new e.text("Add {{.table-bordered}} for borders on all sides of the table and cells."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ bordered: true }, TABLEITEM());
                    },
                }),
                new e.text("{{nav:docs/utilities/borders#border_color::Border color utilities}} can be added to change colors:"),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ bordered: true, borderColor: "primary" }, TABLEITEM());
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Tables without borders"),
                new e.text("Add {{.table-borderless}} for a table without borders."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ bordered: false }, TABLEITEM());
                    },
                }),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ bordered: false, color: "dark" }, TABLEITEM());
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Small tables"),
                new e.text("Add {{.table-sm}} to make any {{.table}} more compact by cutting all cell {{padding}} in half."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ small: true }, TABLEITEM());
                    },
                }),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [{ name: "TABLEITEM", output: TABLEITEM }],
                    output: () => {
                        return new bsts_1.b.table.container({ small: true, color: "dark" }, TABLEITEM());
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Table group dividers"),
                new e.text("Add a thicker border, darker between table groups—{{<thead>}}, {{<tbody>}}, and {{<tfoot>}}—with {{.table-group-divider}}. Customize the color by changing the {{border-top-color}} (which Bootstrap don’t currently provide a utility class for at this time)."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    output: () => {
                        return new bsts_1.b.table.container([
                            new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({ scope: "col" }, "#"),
                                new bsts_1.b.table.th({ scope: "col" }, "First"),
                                new bsts_1.b.table.th({ scope: "col" }, "Last"),
                                new bsts_1.b.table.th({ scope: "col" }, "Handle"),
                            ])),
                            new bsts_1.b.table.tbody({ divider: true }, [
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "1"),
                                    new bsts_1.b.table.td("Mark"),
                                    new bsts_1.b.table.td("Otto"),
                                    new bsts_1.b.table.td("@mdo"),
                                ]),
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "2"),
                                    new bsts_1.b.table.td("Jacob"),
                                    new bsts_1.b.table.td("Thornton"),
                                    new bsts_1.b.table.td("@fat"),
                                ]),
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "3"),
                                    new bsts_1.b.table.td({ colspan: 2 }, "Larry the Bird"),
                                    new bsts_1.b.table.td("@twitter"),
                                ]),
                            ]),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Vertical alignment"),
                new e.text("Table cells of {{<thead>}} are always vertical aligned to the bottom. Table cells in {{<tbody>}} inherit their alignment from {{<table>}} and are aligned to the top by default. Use the {{nav:docs/utilities/vertical_align::vertical align}} classes to re-align where needed."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.table.responsive(new bsts_1.b.table.container({ verticalAlign: "middle" }, [
                            new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({ scope: "col", width: 25 }, "Heading 1"),
                                new bsts_1.b.table.th({ scope: "col", width: 25 }, "Heading 2"),
                                new bsts_1.b.table.th({ scope: "col", width: 25 }, "Heading 3"),
                                new bsts_1.b.table.th({ scope: "col", width: 25 }, "Heading 4"),
                            ])),
                            new bsts_1.b.table.tbody([
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.td("This cell inherits {{vertical-align: middle;}} from the table"),
                                    new bsts_1.b.table.td("This cell inherits {{vertical-align: middle;}} from the table"),
                                    new bsts_1.b.table.td("This cell inherits {{vertical-align: middle;}} from the table"),
                                    new bsts_1.b.table.td("This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells."),
                                ]),
                                new bsts_1.b.table.tr({ verticalAlign: "bottom" }, [
                                    new bsts_1.b.table.td("This cell inherits {{vertical-align: bottom;}} from the table row"),
                                    new bsts_1.b.table.td("This cell inherits {{vertical-align: bottom;}} from the table row"),
                                    new bsts_1.b.table.td("This cell inherits {{vertical-align: bottom;}} from the table row"),
                                    new bsts_1.b.table.td("This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells."),
                                ]),
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.td("This cell inherits {{vertical-align: middle;}} from the table"),
                                    new bsts_1.b.table.td("This cell inherits {{vertical-align: middle;}} from the table"),
                                    new bsts_1.b.table.td({ verticalAlign: "top" }, "This cell is aligned to the top."),
                                    new bsts_1.b.table.td("This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells."),
                                ]),
                            ]),
                        ]));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Nesting"),
                new e.text("Border styles, active styles, and table variants are not inherited by nested tables."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    output: () => {
                        return new bsts_1.b.table.container({ striped: "row", bordered: true }, [
                            new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({ scope: "col" }, "#"),
                                new bsts_1.b.table.th({ scope: "col" }, "First"),
                                new bsts_1.b.table.th({ scope: "col" }, "Last"),
                                new bsts_1.b.table.th({ scope: "col" }, "Handle"),
                            ])),
                            new bsts_1.b.table.tbody([
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "1"),
                                    new bsts_1.b.table.td("Mark"),
                                    new bsts_1.b.table.td("Otto"),
                                    new bsts_1.b.table.td("@mdo"),
                                ]),
                                new bsts_1.b.table.tr(new bsts_1.b.table.td({ colspan: 4 }, new bsts_1.b.table.container({ marginBottom: 0 }, [
                                    new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                        new bsts_1.b.table.th({ scope: "col" }, "Header"),
                                        new bsts_1.b.table.th({ scope: "col" }, "Header"),
                                        new bsts_1.b.table.th({ scope: "col" }, "Header"),
                                    ])),
                                    new bsts_1.b.table.tbody(["A", "B", "C"].map((i) => new bsts_1.b.table.tr([
                                        new bsts_1.b.table.th({ scope: "row" }, i),
                                        new bsts_1.b.table.td("First"),
                                        new bsts_1.b.table.td("Last"),
                                    ]))),
                                ]))),
                                new bsts_1.b.table.tr([
                                    new bsts_1.b.table.th({ scope: "row" }, "3"),
                                    new bsts_1.b.table.td("Larry"),
                                    new bsts_1.b.table.td("the Bird"),
                                    new bsts_1.b.table.td("@twitter"),
                                ]),
                            ]),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("How nesting works"),
                new e.text("To prevent any styles from leaking to nested tables, Bootstrap use the child combinator ({{>}}) selector in Bootstrap CSS. Since Bootstrap need to target all the {{td}}s and {{th}}s in the {{thead}}, {{tbody}}, and {{tfoot}}, Bootstrap selector would look pretty long without it. As such, Bootstrap use the rather odd looking {{.table > :not(caption) > * > *}} selector to target all {{td}}s and {{th}}s of the {{.table}}, but none of any potential nested tables."),
                new e.text("Note that if you add {{<tr>}}s as direct children of a table, those {{<tr>}} will be wrapped in a {{<tbody>}} by default, thus making Bootstrap selectors work as intended."),
            ]),
            //----------------------
            new e.section([new e.title("Anatomy")]),
            //----------------------
            new e.section([
                new e.subtitle("Table head"),
                new e.text("Similar to tables and dark tables, use the modifier classes {{.table-light}} or {{.table-dark}} to make {{<thead>}}s appear light or dark gray."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [
                        { name: "TABLEHEAD", output: TABLEHEAD },
                        { name: "TABLEBODY", output: TABLEBODY },
                    ],
                    output: () => {
                        return new bsts_1.b.table.container([
                            new bsts_1.b.table.thead({ color: "light" }, TABLEHEAD()),
                            new bsts_1.b.table.tbody(TABLEBODY()),
                        ]);
                    },
                }),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [
                        { name: "TABLEHEAD", output: TABLEHEAD },
                        { name: "TABLEBODY", output: TABLEBODY },
                    ],
                    output: () => {
                        return new bsts_1.b.table.container([
                            new bsts_1.b.table.thead({ color: "dark" }, TABLEHEAD()),
                            new bsts_1.b.table.tbody(TABLEBODY()),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Table foot"),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [
                        { name: "TABLEHEAD", output: TABLEHEAD },
                        { name: "TABLEBODY", output: TABLEBODY },
                    ],
                    output: () => {
                        return new bsts_1.b.table.container([
                            new bsts_1.b.table.thead({ color: "light" }, TABLEHEAD()),
                            new bsts_1.b.table.tbody(TABLEBODY()),
                            new bsts_1.b.table.tfoot(new bsts_1.b.table.tr([
                                new bsts_1.b.table.td("Footer"),
                                new bsts_1.b.table.td("Footer"),
                                new bsts_1.b.table.td("Footer"),
                                new bsts_1.b.table.td("Footer"),
                            ])),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Captions"),
                new e.text("A {{<caption>}} functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [
                        { name: "TABLEHEAD", output: TABLEHEAD },
                        { name: "TABLEBODY", output: TABLEBODY },
                    ],
                    output: () => {
                        return new bsts_1.b.table.container({ small: true }, [
                            new bsts_1.h.caption("List of user"),
                            new bsts_1.b.table.thead(TABLEHEAD()),
                            new bsts_1.b.table.tbody(TABLEBODY()),
                        ]);
                    },
                }),
                new e.text("You can also put the {{<caption>}} on the top of the table with {{.caption-top}}."),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    extention: [
                        { name: "TABLEHEAD", output: TABLEHEAD },
                        { name: "TABLEBODY", output: TABLEBODY },
                    ],
                    output: () => {
                        return new bsts_1.b.table.container({ small: true, captionLocation: "top" }, [
                            new bsts_1.h.caption("List of user"),
                            new bsts_1.b.table.thead(TABLEHEAD()),
                            new bsts_1.b.table.tbody(TABLEBODY()),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Responsive tables"),
                new e.text("Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a {{.table}} with {{.table-responsive}}. Or, pick a maximum breakpoint with which to have a responsive table up to by using {{.table-responsive{-sm|-md|-lg|-xl|-xxl} }}."),
                new e.alert({ color: "warning", callout: true }, [
                    new bsts_1.b.alert.header(5, "Vertical clipping/truncation"),
                    "Responsive tables make use of {{overflow-y: hidden}}, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.",
                ]),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Always responsive"),
                new e.text("Across every breakpoint, use {{.table-responsive}} for horizontally scrolling tables."),
                new e.code({
                    showViewport: true,
                    outputAttr: { overflow: "hidden" },
                    extention: [{ name: "TABLEBIG", output: TABLEBIG }],
                    output: () => {
                        return new bsts_1.b.table.responsive(new bsts_1.b.table.container(TABLEBIG(3, 9)));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Breakpoint specific"),
                new e.text("Use {{.table-responsive{-sm|-md|-lg|-xl|-xxl} }}as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally."),
                new e.text("{{b::These tables may appear broken until their responsive styles apply at specific viewport widths.}}"),
                new e.code({
                    showViewport: true,
                    outputAttr: { overflow: "hidden" },
                    extention: [{ name: "TABLEBIG", output: TABLEBIG }],
                    output: () => {
                        return new bsts_1.b.table.responsive(new bsts_1.b.table.container({ captionLocation: "top" }, [
                            new bsts_1.h.caption(".table-responsive"),
                            ...TABLEBIG(3, 12),
                        ]));
                    },
                }),
                new e.code({
                    showViewport: true,
                    outputAttr: { overflow: "hidden" },
                    extention: [{ name: "TABLEBIG", output: TABLEBIG }],
                    output: () => {
                        return new bsts_1.b.table.responsive({ responsive: "sm" }, new bsts_1.b.table.container({ captionLocation: "top" }, [
                            new bsts_1.h.caption(".table-responsive-sm"),
                            ...TABLEBIG(3, 12),
                        ]));
                    },
                }),
                new e.code({
                    showViewport: true,
                    outputAttr: { overflow: "hidden" },
                    extention: [{ name: "TABLEBIG", output: TABLEBIG }],
                    output: () => {
                        return new bsts_1.b.table.responsive({ responsive: "md" }, new bsts_1.b.table.container({ captionLocation: "top" }, [
                            new bsts_1.h.caption(".table-responsive-md"),
                            ...TABLEBIG(3, 12),
                        ]));
                    },
                }),
                new e.code({
                    showViewport: true,
                    outputAttr: { overflow: "hidden" },
                    extention: [{ name: "TABLEBIG", output: TABLEBIG }],
                    output: () => {
                        return new bsts_1.b.table.responsive({ responsive: "lg" }, new bsts_1.b.table.container({ captionLocation: "top" }, [
                            new bsts_1.h.caption(".table-responsive-lg"),
                            ...TABLEBIG(3, 12),
                        ]));
                    },
                }),
                new e.code({
                    outputAttr: { overflow: "hidden" },
                    extention: [{ name: "TABLEBIG", output: TABLEBIG }],
                    output: () => {
                        return new bsts_1.b.table.responsive({ responsive: "xl" }, new bsts_1.b.table.container({ captionLocation: "top" }, [
                            new bsts_1.h.caption(".table-responsive-xxl"),
                            ...TABLEBIG(3, 12),
                        ]));
                    },
                }),
                new e.code({
                    showViewport: true,
                    outputAttr: { overflow: "hidden" },
                    extention: [{ name: "TABLEBIG", output: TABLEBIG }],
                    output: () => {
                        return new bsts_1.b.table.responsive({ responsive: "xxl" }, new bsts_1.b.table.container({ captionLocation: "top" }, [
                            new bsts_1.h.caption(".table-responsive-xxl"),
                            ...TABLEBIG(3, 12),
                        ]));
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("CSS")]),
            //----------------------
            new e.section([
                new e.subtitle("Sass variables"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$table-cell-padding-y:        .5rem;
						$table-cell-padding-x:        .5rem;
						$table-cell-padding-y-sm:     .25rem;
						$table-cell-padding-x-sm:     .25rem;

						$table-cell-vertical-align:   top;

						$table-color:                 var(--#{$prefix}body-color);
						$table-bg:                    transparent;
						$table-accent-bg:             transparent;

						$table-th-font-weight:        null;

						$table-striped-color:         $table-color;
						$table-striped-bg-factor:     .05;
						$table-striped-bg:            rgba($black, $table-striped-bg-factor);

						$table-active-color:          $table-color;
						$table-active-bg-factor:      .1;
						$table-active-bg:             rgba($black, $table-active-bg-factor);

						$table-hover-color:           $table-color;
						$table-hover-bg-factor:       .075;
						$table-hover-bg:              rgba($black, $table-hover-bg-factor);

						$table-border-factor:         .1;
						$table-border-width:          var(--#{$prefix}border-width);
						$table-border-color:          var(--#{$prefix}border-color);

						$table-striped-order:         odd;
						$table-striped-columns-order: even;

						$table-group-separator-color: currentcolor;

						$table-caption-color:         var(--#{$prefix}secondary-color);

						$table-bg-scale:              -80%;
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Sass loop"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$table-variants: (
						"primary":    shift-color($primary, $table-bg-scale),
						"secondary":  shift-color($secondary, $table-bg-scale),
						"success":    shift-color($success, $table-bg-scale),
						"info":       shift-color($info, $table-bg-scale),
						"warning":    shift-color($warning, $table-bg-scale),
						"danger":     shift-color($danger, $table-bg-scale),
						"light":      $light,
						"dark":       $dark,
						);
					`,
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Customizing"),
                new e.ul({
                    item: [
                        "The factor variables ({{$table-striped-bg-factor}}, {{$table-active-bg-factor}} & {{$table-hover-bg-factor}}) are used to determine the contrast in table variants.",
                        "Apart from the light & dark table variants, theme colors are lightened by the {{$table-bg-scale}} variable.",
                    ],
                }),
            ]),
        ];
    },
};

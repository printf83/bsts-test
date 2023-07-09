"use strict";(self.webpackChunk_printf83_bsts_test=self.webpackChunk_printf83_bsts_test||[]).push([[334],{334:(t,e,o)=>{o.r(e),o.d(e,{tables:()=>b});var n=o(195),a=o(7763);const r=()=>[new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"#"),new n.b.Kz.th({scope:"col"},"First"),new n.b.Kz.th({scope:"col"},"Last"),new n.b.Kz.th({scope:"col"},"Handle")])),new n.b.Kz.gE([new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"1"),new n.b.Kz.td("Mark"),new n.b.Kz.td("Otto"),new n.b.Kz.td("@mdo")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"2"),new n.b.Kz.td("Jacob"),new n.b.Kz.td("Thornton"),new n.b.Kz.td("@fat")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"3"),new n.b.Kz.td({colspan:2},"Larry the Bird"),new n.b.Kz.td("@twitter")])])],l=()=>new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"#"),new n.b.Kz.th({scope:"col"},"First"),new n.b.Kz.th({scope:"col"},"Last"),new n.b.Kz.th({scope:"col"},"Handle")]),s=()=>[new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"1"),new n.b.Kz.td("Mark"),new n.b.Kz.td("Otto"),new n.b.Kz.td("@mdo")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"2"),new n.b.Kz.td("Jacob"),new n.b.Kz.td("Thornton"),new n.b.Kz.td("@fat")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"3"),new n.b.Kz.td("Larry"),new n.b.Kz.td("the Bird"),new n.b.Kz.td("@twitter")])],i=(t,e)=>[new n.b.Kz.r(new n.b.Kz.tr(Array(e).fill("").map(((t,e)=>new n.b.Kz.th({scope:"col"},0===e?"#":`Head#${e+1}`))))),new n.b.Kz.gE(Array(t).fill("").map(((t,o)=>new n.b.Kz.tr(Array(e).fill("").map(((t,e)=>0===e?new n.b.Kz.th({scope:"row"},(o+1).toString()):new n.b.Kz.td(`Cell#${e+1}`)))))))],b={title:"Tables",description:"Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.",item:()=>[new a.qi([new a.TN("Overview"),new a.fL("Due to the widespread use of {{<table>}} elements across third-party widgets like calendars and date pickers, Bootstrap’s tables are opt-in. Add the base class {{.table}} to any {{<table>}}, then extend with Bootstrap optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent."),new a.fL("Using the most basic table markup, here’s how {{.table}}-based tables look in Bootstrap."),new a.TU({outputAttr:{overflow:"auto"},output:()=>new n.b.Kz.nC([new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"#"),new n.b.Kz.th({scope:"col"},"First"),new n.b.Kz.th({scope:"col"},"Last"),new n.b.Kz.th({scope:"col"},"Handle")])),new n.b.Kz.gE([new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"1"),new n.b.Kz.td("Mark"),new n.b.Kz.td("Otto"),new n.b.Kz.td("@mdo")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"2"),new n.b.Kz.td("Jacob"),new n.b.Kz.td("Thornton"),new n.b.Kz.td("@fat")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"3"),new n.b.Kz.td({colspan:2},"Larry the Bird"),new n.b.Kz.td("@twitter")])])])})]),new a.qi([new a.TN("Variants"),new a.fL("Use contextual classes to color tables, table rows or individual cells."),new a.Z9({color:"info",callout:!0},"{{b::Heads up! }}Because of the more complicated CSS used to generate Bootstrap table variants, they most likely won’t see color mode adaptive styling until v6."),new a.TU({outputAttr:{overflow:"auto"},output:()=>new n.b.Kz.nC([new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"Class"),new n.b.Kz.th({scope:"col"},"Heading"),new n.b.Kz.th({scope:"col"},"Heading")])),new n.b.Kz.gE([void 0,"primary","secondary","success","danger","warning","info","light","dark"].map((t=>new n.b.Kz.tr({color:t},[new n.b.Kz.th({scope:"row"},t?n.v.uppercaseFirst(t):"Default"),new n.b.Kz.td("Cell"),new n.b.Kz.td("Cell")]))))])}),new a.fL("Set color on {{table}} and {{cell}}"),new a.TU({outputAttr:{overflow:"auto"},output:()=>new n.b.Kz.nC({color:"primary"},[new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"Class"),new n.b.Kz.th({scope:"col"},"Heading"),new n.b.Kz.th({scope:"col"},"Heading")])),new n.b.Kz.gE([void 0,"primary","secondary","success","danger","warning","info","light","dark"].map((t=>new n.b.Kz.tr([new n.b.Kz.th({scope:"row",color:t},t?n.v.uppercaseFirst(t):"Default"),new n.b.Kz.td("Cell"),new n.b.Kz.td({color:t},"Cell")]))))])}),new a.Z9({color:"info",callout:!0},"{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class.")]),new a.qi([new a.TN("Accented tables")]),new a.qi([new a.Oc("Striped rows"),new a.fL("Use {{.table-striped}} to add zebra-striping to any table row within the {{<tbody>}}."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({striped:"row"},r())})]),new a.qi([new a.Oc("Striped columns"),new a.fL("Use {{.table-striped-columns}} to add zebra-striping to any table column."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({striped:"col"},r())}),new a.fL("These classes can also be added to table variants:"),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({striped:"row",color:"dark"},r())}),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({striped:"col",color:"dark"},r())}),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({striped:"row",color:"success"},r())}),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({striped:"col",color:"success"},r())})]),new a.qi([new a.Oc("Hoverable rows"),new a.fL("Add {{.table-hover}} to enable a hover state on table rows within a {{<tbody>}}."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({hoverable:!0},r())}),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({hoverable:!0,color:"dark"},r())}),new a.fL("These hoverable rows can also be combined with the striped rows variant:"),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({hoverable:!0,striped:"row"},r())})]),new a.qi([new a.Oc("Active tables"),new a.fL("Highlight a table row or cell by adding a {{.table-active}} class."),new a.TU({outputAttr:{overflow:"auto"},output:()=>new n.b.Kz.nC([new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"#"),new n.b.Kz.th({scope:"col"},"First"),new n.b.Kz.th({scope:"col"},"Last"),new n.b.Kz.th({scope:"col"},"Handle")])),new n.b.Kz.gE([new n.b.Kz.tr({active:!0},[new n.b.Kz.th({scope:"row"},"1"),new n.b.Kz.td("Mark"),new n.b.Kz.td("Otto"),new n.b.Kz.td("@mdo")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"2"),new n.b.Kz.td("Jacob"),new n.b.Kz.td("Thornton"),new n.b.Kz.td("@fat")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"3"),new n.b.Kz.td({colspan:2,active:!0},"Larry the Bird"),new n.b.Kz.td("@twitter")])])])})]),new a.qi([new a.TN("How do the variants and accented tables work?"),new a.fL("For the accented tables ({{nav:docs/content/tables#striped_rows::striped rows}}, {{nav:docs/content/tables#striped_columns::striped columns}}, {{nav:docs/content/tables#hoverable_rows::hoverable rows}}, and {{nav:docs/content/tables#active_tables::active tables}}), Bootstrap used some techniques to make these effects work for all Bootstrap {{nav:docs/content/tables#variants::table variants}}:"),new a.ul({item:["Bootstrap start by setting the background of a table cell with the {{--bs-table-bg}} custom property. All table variants then set that custom property to colorize the table cells. This way, Bootstrap don’t get into trouble if semi-transparent colors are used as table backgrounds.","Then Bootstrap add an inset box shadow on the table cells with {{box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);}} to layer on top of any specified {{background-color}}. Because Bootstrap use a huge spread and no blur, the color will be monotone. Since {{--bs-table-accent-bg}} is unset by default, Bootstrap don’t have a default box shadow.","When either {{.table-striped}}, {{.table-striped-columns}}, {{.table-hover}} or {{.table-active}} classes are added, the {{--bs-table-accent-bg}} is set to a semitransparent color to colorize the background.","For each table variant, Bootstrap generate a {{--bs-table-accent-bg}} color with the highest contrast depending on that color. For example, the accent color for {{.table-primary}} is darker while {{.table-dark}} has a lighter accent color.","Text and border colors are generated the same way, and their colors are inherited by default."]}),new a.fL("Behind the scenes it looks like this:"),new a.LX({type:"css",title:"scss/mixins/_table-variants.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_table-variants.scss",code:"\n\t\t\t\t\t\t@mixin table-variant($state, $background) {\n\t\t\t\t\t\t.table-#{$state} {\n\t\t\t\t\t\t\t$color: color-contrast(opaque($body-bg, $background));\n\t\t\t\t\t\t\t$hover-bg: mix($color, $background, percentage($table-hover-bg-factor));\n\t\t\t\t\t\t\t$striped-bg: mix($color, $background, percentage($table-striped-bg-factor));\n\t\t\t\t\t\t\t$active-bg: mix($color, $background, percentage($table-active-bg-factor));\n\t\t\t\t\t\t\t$table-border-color: mix($color, $background, percentage($table-border-factor));\n\n\t\t\t\t\t\t\t--#{$prefix}table-color: #{$color};\n\t\t\t\t\t\t\t--#{$prefix}table-bg: #{$background};\n\t\t\t\t\t\t\t--#{$prefix}table-border-color: #{$table-border-color};\n\t\t\t\t\t\t\t--#{$prefix}table-striped-bg: #{$striped-bg};\n\t\t\t\t\t\t\t--#{$prefix}table-striped-color: #{color-contrast($striped-bg)};\n\t\t\t\t\t\t\t--#{$prefix}table-active-bg: #{$active-bg};\n\t\t\t\t\t\t\t--#{$prefix}table-active-color: #{color-contrast($active-bg)};\n\t\t\t\t\t\t\t--#{$prefix}table-hover-bg: #{$hover-bg};\n\t\t\t\t\t\t\t--#{$prefix}table-hover-color: #{color-contrast($hover-bg)};\n\n\t\t\t\t\t\t\tcolor: var(--#{$prefix}table-color);\n\t\t\t\t\t\t\tborder-color: var(--#{$prefix}table-border-color);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t"})]),new a.qi([new a.TN("Table borders")]),new a.qi([new a.Oc("Bordered tables"),new a.fL("Add {{.table-bordered}} for borders on all sides of the table and cells."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({bordered:!0},r())}),new a.fL("{{nav:docs/utilities/borders#border_color::Border color utilities}} can be added to change colors:"),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({bordered:!0,borderColor:"primary"},r())})]),new a.qi([new a.Oc("Tables without borders"),new a.fL("Add {{.table-borderless}} for a table without borders."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({bordered:!1},r())}),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({bordered:!1,color:"dark"},r())})]),new a.qi([new a.TN("Small tables"),new a.fL("Add {{.table-sm}} to make any {{.table}} more compact by cutting all cell {{padding}} in half."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({small:!0},r())}),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEITEM",output:r}],output:()=>new n.b.Kz.nC({small:!0,color:"dark"},r())})]),new a.qi([new a.TN("Table group dividers"),new a.fL("Add a thicker border, darker between table groups—{{<thead>}}, {{<tbody>}}, and {{<tfoot>}}—with {{.table-group-divider}}. Customize the color by changing the {{border-top-color}} (which Bootstrap don’t currently provide a utility class for at this time)."),new a.TU({outputAttr:{overflow:"auto"},output:()=>new n.b.Kz.nC([new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"#"),new n.b.Kz.th({scope:"col"},"First"),new n.b.Kz.th({scope:"col"},"Last"),new n.b.Kz.th({scope:"col"},"Handle")])),new n.b.Kz.gE({divider:!0},[new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"1"),new n.b.Kz.td("Mark"),new n.b.Kz.td("Otto"),new n.b.Kz.td("@mdo")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"2"),new n.b.Kz.td("Jacob"),new n.b.Kz.td("Thornton"),new n.b.Kz.td("@fat")]),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"3"),new n.b.Kz.td({colspan:2},"Larry the Bird"),new n.b.Kz.td("@twitter")])])])})]),new a.qi([new a.TN("Vertical alignment"),new a.fL("Table cells of {{<thead>}} are always vertical aligned to the bottom. Table cells in {{<tbody>}} inherit their alignment from {{<table>}} and are aligned to the top by default. Use the {{nav:docs/utilities/vertical_align::vertical align}} classes to re-align where needed."),new a.TU({output:()=>new n.b.Kz.jW(new n.b.Kz.nC({verticalAlign:"middle"},[new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col",width:25},"Heading 1"),new n.b.Kz.th({scope:"col",width:25},"Heading 2"),new n.b.Kz.th({scope:"col",width:25},"Heading 3"),new n.b.Kz.th({scope:"col",width:25},"Heading 4")])),new n.b.Kz.gE([new n.b.Kz.tr([new n.b.Kz.td("This cell inherits {{vertical-align: middle;}} from the table"),new n.b.Kz.td("This cell inherits {{vertical-align: middle;}} from the table"),new n.b.Kz.td("This cell inherits {{vertical-align: middle;}} from the table"),new n.b.Kz.td("This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.")]),new n.b.Kz.tr({verticalAlign:"bottom"},[new n.b.Kz.td("This cell inherits {{vertical-align: bottom;}} from the table row"),new n.b.Kz.td("This cell inherits {{vertical-align: bottom;}} from the table row"),new n.b.Kz.td("This cell inherits {{vertical-align: bottom;}} from the table row"),new n.b.Kz.td("This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.")]),new n.b.Kz.tr([new n.b.Kz.td("This cell inherits {{vertical-align: middle;}} from the table"),new n.b.Kz.td("This cell inherits {{vertical-align: middle;}} from the table"),new n.b.Kz.td({verticalAlign:"top"},"This cell is aligned to the top."),new n.b.Kz.td("This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.")])])]))})]),new a.qi([new a.TN("Nesting"),new a.fL("Border styles, active styles, and table variants are not inherited by nested tables."),new a.TU({outputAttr:{overflow:"auto"},output:()=>new n.b.Kz.nC({striped:"row",bordered:!0},[new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"#"),new n.b.Kz.th({scope:"col"},"First"),new n.b.Kz.th({scope:"col"},"Last"),new n.b.Kz.th({scope:"col"},"Handle")])),new n.b.Kz.gE([new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"1"),new n.b.Kz.td("Mark"),new n.b.Kz.td("Otto"),new n.b.Kz.td("@mdo")]),new n.b.Kz.tr(new n.b.Kz.td({colspan:4},new n.b.Kz.nC({marginBottom:0},[new n.b.Kz.r(new n.b.Kz.tr([new n.b.Kz.th({scope:"col"},"Header"),new n.b.Kz.th({scope:"col"},"Header"),new n.b.Kz.th({scope:"col"},"Header")])),new n.b.Kz.gE(["A","B","C"].map((t=>new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},t),new n.b.Kz.td("First"),new n.b.Kz.td("Last")]))))]))),new n.b.Kz.tr([new n.b.Kz.th({scope:"row"},"3"),new n.b.Kz.td("Larry"),new n.b.Kz.td("the Bird"),new n.b.Kz.td("@twitter")])])])})]),new a.qi([new a.TN("How nesting works"),new a.fL("To prevent any styles from leaking to nested tables, Bootstrap use the child combinator ({{>}}) selector in Bootstrap CSS. Since Bootstrap need to target all the {{td}}s and {{th}}s in the {{thead}}, {{tbody}}, and {{tfoot}}, Bootstrap selector would look pretty long without it. As such, Bootstrap use the rather odd looking {{.table > :not(caption) > * > *}} selector to target all {{td}}s and {{th}}s of the {{.table}}, but none of any potential nested tables."),new a.fL("Note that if you add {{<tr>}}s as direct children of a table, those {{<tr>}} will be wrapped in a {{<tbody>}} by default, thus making Bootstrap selectors work as intended.")]),new a.qi([new a.TN("Anatomy")]),new a.qi([new a.Oc("Table head"),new a.fL("Similar to tables and dark tables, use the modifier classes {{.table-light}} or {{.table-dark}} to make {{<thead>}}s appear light or dark gray."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEHEAD",output:l},{name:"TABLEBODY",output:s}],output:()=>new n.b.Kz.nC([new n.b.Kz.r({color:"light"},l()),new n.b.Kz.gE(s())])}),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEHEAD",output:l},{name:"TABLEBODY",output:s}],output:()=>new n.b.Kz.nC([new n.b.Kz.r({color:"dark"},l()),new n.b.Kz.gE(s())])})]),new a.qi([new a.Oc("Table foot"),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEHEAD",output:l},{name:"TABLEBODY",output:s}],output:()=>new n.b.Kz.nC([new n.b.Kz.r({color:"light"},l()),new n.b.Kz.gE(s()),new n.b.Kz.Gy(new n.b.Kz.tr([new n.b.Kz.td("Footer"),new n.b.Kz.td("Footer"),new n.b.Kz.td("Footer"),new n.b.Kz.td("Footer")]))])})]),new a.qi([new a.Oc("Captions"),new a.fL("A {{<caption>}} functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEHEAD",output:l},{name:"TABLEBODY",output:s}],output:()=>new n.b.Kz.nC({small:!0},[new n.h.VJ("List of user"),new n.b.Kz.r(l()),new n.b.Kz.gE(s())])}),new a.fL("You can also put the {{<caption>}} on the top of the table with {{.caption-top}}."),new a.TU({outputAttr:{overflow:"auto"},extention:[{name:"TABLEHEAD",output:l},{name:"TABLEBODY",output:s}],output:()=>new n.b.Kz.nC({small:!0,captionLocation:"top"},[new n.h.VJ("List of user"),new n.b.Kz.r(l()),new n.b.Kz.gE(s())])})]),new a.qi([new a.TN("Responsive tables"),new a.fL("Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a {{.table}} with {{.table-responsive}}. Or, pick a maximum breakpoint with which to have a responsive table up to by using {{.table-responsive{-sm|-md|-lg|-xl|-xxl} }}."),new a.Z9({color:"warning",callout:!0},[new n.b.Z9.header(5,"Vertical clipping/truncation"),"Responsive tables make use of {{overflow-y: hidden}}, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets."])]),new a.qi([new a.Oc("Always responsive"),new a.fL("Across every breakpoint, use {{.table-responsive}} for horizontally scrolling tables."),new a.TU({showViewport:!0,outputAttr:{overflow:"hidden"},extention:[{name:"TABLEBIG",output:i}],output:()=>new n.b.Kz.jW(new n.b.Kz.nC(i(3,9)))})]),new a.qi([new a.Oc("Breakpoint specific"),new a.fL("Use {{.table-responsive{-sm|-md|-lg|-xl|-xxl} }}as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally."),new a.fL("{{b::These tables may appear broken until their responsive styles apply at specific viewport widths.}}"),new a.TU({showViewport:!0,outputAttr:{overflow:"hidden"},extention:[{name:"TABLEBIG",output:i}],output:()=>new n.b.Kz.jW(new n.b.Kz.nC({captionLocation:"top"},[new n.h.VJ(".table-responsive"),...i(3,12)]))}),new a.TU({showViewport:!0,outputAttr:{overflow:"hidden"},extention:[{name:"TABLEBIG",output:i}],output:()=>new n.b.Kz.jW({responsive:"sm"},new n.b.Kz.nC({captionLocation:"top"},[new n.h.VJ(".table-responsive-sm"),...i(3,12)]))}),new a.TU({showViewport:!0,outputAttr:{overflow:"hidden"},extention:[{name:"TABLEBIG",output:i}],output:()=>new n.b.Kz.jW({responsive:"md"},new n.b.Kz.nC({captionLocation:"top"},[new n.h.VJ(".table-responsive-md"),...i(3,12)]))}),new a.TU({showViewport:!0,outputAttr:{overflow:"hidden"},extention:[{name:"TABLEBIG",output:i}],output:()=>new n.b.Kz.jW({responsive:"lg"},new n.b.Kz.nC({captionLocation:"top"},[new n.h.VJ(".table-responsive-lg"),...i(3,12)]))}),new a.TU({outputAttr:{overflow:"hidden"},extention:[{name:"TABLEBIG",output:i}],output:()=>new n.b.Kz.jW({responsive:"xl"},new n.b.Kz.nC({captionLocation:"top"},[new n.h.VJ(".table-responsive-xxl"),...i(3,12)]))}),new a.TU({showViewport:!0,outputAttr:{overflow:"hidden"},extention:[{name:"TABLEBIG",output:i}],output:()=>new n.b.Kz.jW({responsive:"xxl"},new n.b.Kz.nC({captionLocation:"top"},[new n.h.VJ(".table-responsive-xxl"),...i(3,12)]))})]),new a.qi([new a.TN("CSS")]),new a.qi([new a.Oc("Sass variables"),new a.LX({type:"css",title:"scss/_variables.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",code:"\n\t\t\t\t\t\t$table-cell-padding-y:        .5rem;\n\t\t\t\t\t\t$table-cell-padding-x:        .5rem;\n\t\t\t\t\t\t$table-cell-padding-y-sm:     .25rem;\n\t\t\t\t\t\t$table-cell-padding-x-sm:     .25rem;\n\n\t\t\t\t\t\t$table-cell-vertical-align:   top;\n\n\t\t\t\t\t\t$table-color:                 var(--#{$prefix}body-color);\n\t\t\t\t\t\t$table-bg:                    transparent;\n\t\t\t\t\t\t$table-accent-bg:             transparent;\n\n\t\t\t\t\t\t$table-th-font-weight:        null;\n\n\t\t\t\t\t\t$table-striped-color:         $table-color;\n\t\t\t\t\t\t$table-striped-bg-factor:     .05;\n\t\t\t\t\t\t$table-striped-bg:            rgba($black, $table-striped-bg-factor);\n\n\t\t\t\t\t\t$table-active-color:          $table-color;\n\t\t\t\t\t\t$table-active-bg-factor:      .1;\n\t\t\t\t\t\t$table-active-bg:             rgba($black, $table-active-bg-factor);\n\n\t\t\t\t\t\t$table-hover-color:           $table-color;\n\t\t\t\t\t\t$table-hover-bg-factor:       .075;\n\t\t\t\t\t\t$table-hover-bg:              rgba($black, $table-hover-bg-factor);\n\n\t\t\t\t\t\t$table-border-factor:         .1;\n\t\t\t\t\t\t$table-border-width:          var(--#{$prefix}border-width);\n\t\t\t\t\t\t$table-border-color:          var(--#{$prefix}border-color);\n\n\t\t\t\t\t\t$table-striped-order:         odd;\n\t\t\t\t\t\t$table-striped-columns-order: even;\n\n\t\t\t\t\t\t$table-group-separator-color: currentcolor;\n\n\t\t\t\t\t\t$table-caption-color:         var(--#{$prefix}secondary-color);\n\n\t\t\t\t\t\t$table-bg-scale:              -80%;\n\t\t\t\t\t"})]),new a.qi([new a.Oc("Sass loop"),new a.LX({type:"css",title:"scss/_variables.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",code:'\n\t\t\t\t\t\t$table-variants: (\n\t\t\t\t\t\t"primary":    shift-color($primary, $table-bg-scale),\n\t\t\t\t\t\t"secondary":  shift-color($secondary, $table-bg-scale),\n\t\t\t\t\t\t"success":    shift-color($success, $table-bg-scale),\n\t\t\t\t\t\t"info":       shift-color($info, $table-bg-scale),\n\t\t\t\t\t\t"warning":    shift-color($warning, $table-bg-scale),\n\t\t\t\t\t\t"danger":     shift-color($danger, $table-bg-scale),\n\t\t\t\t\t\t"light":      $light,\n\t\t\t\t\t\t"dark":       $dark,\n\t\t\t\t\t\t);\n\t\t\t\t\t'})]),new a.qi([new a.Oc("Customizing"),new a.ul({item:["The factor variables ({{$table-striped-bg-factor}}, {{$table-active-bg-factor}} & {{$table-hover-bg-factor}}) are used to determine the contrast in table variants.","Apart from the light & dark table variants, theme colors are lightened by the {{$table-bg-scale}} variable."]})])]}}}]);
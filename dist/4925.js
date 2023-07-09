"use strict";(self.webpackChunk_printf83_bsts_test=self.webpackChunk_printf83_bsts_test||[]).push([[4925],{4925:(t,e,n)=>{n.r(e),n.d(e,{flex:()=>a});var i=n(195),l=n(7763);const s=t=>Array(t).fill("").map((()=>new i.h.hi({padding:2},"Flex item"))),a={title:"Flex",description:"Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",item:()=>[new l.qi([new l.TN("Enable flex behaviors "),new l.fL("Apply {{display}} utilities to create a flexbox container and transform {{b::direct children elements}} into flex items. Flex containers and items are able to be modified further with additional flex properties."),new l.TU({outputAttr:{class:"flex-box"},output:()=>new i.h.hi({display:"flex",padding:2},"I'm a flexbox container!")}),new l.TU({outputAttr:{class:"flex-box"},output:()=>new i.h.hi({display:"inline-flex",padding:2},"I'm a flexbox container!")}),new l.fL("Responsive variations also exist for {{.d-flex}} and {{.d-inline-flex}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["flex","inline-flex"].map((e=>`{{ .d${t}-${e} }}`)))).flat()]})]),new l.qi([new l.TN("Direction"),new l.fL("Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is {{row}}. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts)."),new l.fL("Use {{.flex-row}} to set a horizontal direction (the browser default), or {{.flex-row-reverse}} to start the horizontal direction from the opposite side."),new l.TU({outputAttr:{display:"grid",gap:3,class:"flex-box"},output:()=>[new i.h.hi({display:"flex",flex:"row"},[1,2,3].map((t=>new i.h.hi({padding:2},`Flex item ${t}`)))),new i.h.hi({display:"flex",flex:"row-reverse"},[1,2,3].map((t=>new i.h.hi({padding:2},`Flex item ${t}`))))]}),new l.fL("Use {{.flex-column}} to set a vertical direction, or {{.flex-column-reverse}} to start the vertical direction from the opposite side."),new l.TU({outputAttr:{display:"grid",gap:3,class:"flex-box"},output:()=>[new i.h.hi({display:"flex",flex:"column"},[1,2,3].map((t=>new i.h.hi({padding:2},`Flex item ${t}`)))),new i.h.hi({display:"flex",flex:"column-reverse"},[1,2,3].map((t=>new i.h.hi({padding:2},`Flex item ${t}`))))]}),new l.fL("Responsive variations also exist for {{flex-direction}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["row","column","row-reverse","column-reverse"].map((e=>`{{.justify-content${t}-${e}}}`)))).flat()]})]),new l.qi([new l.TN("Justify content"),new l.fL("Use {{justify-content}} utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if {{flex-direction: column}}). Choose from {{start}} (browser default), {{end}}, {{center}}, {{between}}, {{around}}, or {{evenly}}."),new l.TU({outputAttr:{display:"grid",gap:3,class:"flex-box"},output:()=>{const t=t=>[new i.h.hi({padding:2},"Justify"),new i.h.hi({padding:2},"Content"),new i.h.hi({padding:2},t)];return[new i.h.hi({display:"flex",justifyContent:"start"},t("Start")),new i.h.hi({display:"flex",justifyContent:"end"},t("End")),new i.h.hi({display:"flex",justifyContent:"center"},t("Center")),new i.h.hi({display:"flex",justifyContent:"between"},t("Between")),new i.h.hi({display:"flex",justifyContent:"around"},t("Around")),new i.h.hi({display:"flex",justifyContent:"evenly"},t("Evenly"))]}}),new l.fL("Responsive variations also exist for {{justify-content}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["start","end","center","between","around","evenly"].map((e=>`{{.justify-content${t}-${e}}}`)))).flat()]})]),new l.qi([new l.TN("Align items"),new l.fL("Use {{align-items}} utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if {{flex-direction: column}}). Choose from {{start}}, {{end}}, {{center}}, {{baseline}}, or {{stretch}} (browser default)."),new l.TU({outputAttr:{display:"grid",gap:3,class:"flex-box"},output:()=>{const t=[new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item")];return[new i.h.hi({display:"flex",alignItem:"start",style:{height:"100px"}},t),new i.h.hi({display:"flex",alignItem:"end",style:{height:"100px"}},t),new i.h.hi({display:"flex",alignItem:"center",style:{height:"100px"}},t),new i.h.hi({display:"flex",alignItem:"baseline",style:{height:"100px"}},t),new i.h.hi({display:"flex",alignItem:"stretch",style:{height:"100px"}},t)]}}),new l.fL("Responsive variations also exist for {{align-items}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["start","end","center","baseline","stretch"].map((e=>`{{.align-items${t}-${e}}}`)))).flat()]})]),new l.qi([new l.TN("Align self"),new l.fL("Use {{align-self}} utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if {{flex-direction: column}}). Choose from the same options as {{align-items}}: {{start}}, {{end}}, {{center}}, {{baseline}}, or {{stretch}} (browser default)."),new l.TU({outputAttr:{display:"grid",gap:3,class:"flex-box"},output:()=>["start","end","center","baseline","stretch"].map((t=>new i.h.hi({display:"flex",style:{height:"100px"}},(t=>[new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2,alignSelf:t},"Flex item"),new i.h.hi({padding:2},"Flex item")])(t))))}),new l.fL("Responsive variations also exist for {{align-self}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["start","end","center","baseline","stretch"].map((e=>`{{.align-self${t}-${e}}}`)))).flat()]})]),new l.qi([new l.TN("Fill"),new l.fL("Use the {{.flex-fill}} class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space."),new l.TU({outputAttr:{class:"flex-box"},output:()=>new i.h.hi({display:"flex"},[new i.h.hi({flex:"fill",padding:2},"Flex item with a lot of content"),new i.h.hi({flex:"fill",padding:2},"Flex item"),new i.h.hi({flex:"fill",padding:2},"Flex item")])}),new l.fL("Responsive variations also exist for {{flex-fill}}."),new l.ul({item:["{{.flex-fill}}","{{.flex-sm-fill}}","{{.flex-md-fill}}","{{.flex-lg-fill}}","{{.flex-xl-fill}}","{{.flex-xxl-fill}}"]})]),new l.qi([new l.TN("Grow and shrink"),new l.fL("Use {{.flex-grow-*}} utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the {{.flex-grow-1}} elements uses all available space it can, while allowing the remaining two flex items their necessary space."),new l.TU({outputAttr:{class:"flex-box"},output:()=>new i.h.hi({display:"flex"},[new i.h.hi({flex:"grow-1",padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Third flex item")])}),new l.fL("Use {{.flex-shrink-*}} utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with {{.flex-shrink-1}} is forced to wrap its contents to a new line, “shrinking” to allow more space for the previous flex item with {{.w-100}}."),new l.TU({outputAttr:{class:"flex-box"},output:()=>new i.h.hi({display:"flex"},[new i.h.hi({width:100,padding:2},"Flex item"),new i.h.hi({flex:"shrink-1",padding:2},"Flex item")])}),new l.fL("Responsive variations also exist for {{flex-grow}} and {{flex-shrink}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["grow-0","grow-1","shrink-0","shrink-1"].map((e=>`{{.flex${t}-${e}}}`)))).flat()]})]),new l.qi([new l.TN("Auto margins"),new l.fL("Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right ({{.me-auto}}), and pushing two items to the left ({{.ms-auto}})."),new l.TU({outputAttr:{display:"grid",gap:3,class:"flex-box"},output:()=>[new i.h.hi({display:"flex"},[new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item")]),new i.h.hi({display:"flex"},[new i.h.hi({padding:2,marginEnd:"auto"},"Flex item"),new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item")]),new i.h.hi({display:"flex"},[new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2,marginStart:"auto"},"Flex item")])]})]),new l.qi([new l.Oc("With align-items"),new l.fL("Vertically move one flex item to the top or bottom of a container by mixing {{align-items}}, {{flex-direction: column}}, and {{margin-top: auto}} or {{margin-bottom: auto}}."),new l.TU({outputAttr:{display:"grid",gap:3,class:"flex-box"},output:()=>[new i.h.hi({display:"flex",alignItem:"start",flex:"column",style:{height:"200px"}},[new i.h.hi({padding:2,marginBottom:"auto"},"Flex item"),new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item")]),new i.h.hi({display:"flex",alignItem:"end",flex:"column",style:{height:"200px"}},[new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2},"Flex item"),new i.h.hi({padding:2,marginTop:"auto"},"Flex item")])]})]),new l.qi([new l.TN("Warp"),new l.fL("Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with {{.flex-nowrap}}, wrapping with {{.flex-wrap}}, or reverse wrapping with {{.flex-wrap-reverse}}."),new l.TU({outputAttr:{class:"flex-box"},extention:[{name:"FLEXITEM",output:s}],output:()=>new i.h.hi({display:"flex",flex:"nowrap",style:{width:"8rem"}},s(5))}),new l.TU({outputAttr:{class:"flex-box"},output:()=>new i.h.hi({display:"flex",flex:"wrap"},Array(14).fill("").map(((t,e)=>new i.h.hi({padding:2},`Flex item ${e+1}`))))}),new l.TU({outputAttr:{class:"flex-box"},output:()=>new i.h.hi({display:"flex",flex:"wrap-reverse"},Array(14).fill("").map(((t,e)=>new i.h.hi({padding:2},`Flex item ${e+1}`))))}),new l.fL("Responsive variations also exist for {{flex-wrap}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["nowarp","wrap","wrap-reverse"].map((e=>`{{.flex${t}-${e}}}`)))).flat()]})]),new l.qi([new l.TN("Order"),new l.fL("Change the visual order of specific flex items with a handful of {{order}} utilities. Bootstrap only provide options for making an item first or last, as well as a reset to use the DOM order. As {{order}} takes any integer value from 0 to 5, add custom CSS for any additional values needed."),new l.TU({outputAttr:{class:"flex-box"},output:()=>new i.h.hi({display:"flex",flex:"nowrap"},[new i.h.hi({padding:2,order:3},"First flex item"),new i.h.hi({padding:2,order:2},"Second flex item"),new i.h.hi({padding:2,order:1},"Third flex item")])}),new l.fL("Responsive variations also exist for {{order}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>[0,1,2,3,4,5].map((e=>`{{.order${t}-${e}}}`)))).flat()]}),new l.fL("Additionally there are also responsive {{.order-first}} and {{.order-last}} classes that change the {{order}} of an element by applying {{order: -1}} and {{order: 6}}, respectively."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["first","last"].map((e=>`{{.order${t}-${e}}}`)))).flat()]})]),new l.qi([new l.TN("Align content"),new l.fL("Use {{align-content}} utilities on flexbox containers to align flex items together on the cross axis. Choose from {{start}} (browser default), {{end}}, {{center}}, {{between}}, {{around}}, or {{stretch}}. To demonstrate these utilities, Bootstrap enforced {{flex-wrap: wrap}} and increased the number of flex items."),new l.fL("{{b::Heads up! }}This property has no effect on single rows of flex items."),new l.TU({outputAttr:{class:"flex-box"},extention:[{name:"FLEXITEM",output:s}],output:()=>new i.h.hi({display:"flex",flex:"wrap",alignContent:"start",style:{height:"200px"}},s(15))}),new l.TU({outputAttr:{class:"flex-box"},extention:[{name:"FLEXITEM",output:s}],output:()=>new i.h.hi({display:"flex",flex:"wrap",alignContent:"end",style:{height:"200px"}},s(15))}),new l.TU({outputAttr:{class:"flex-box"},extention:[{name:"FLEXITEM",output:s}],output:()=>new i.h.hi({display:"flex",flex:"wrap",alignContent:"center",style:{height:"200px"}},s(15))}),new l.TU({outputAttr:{class:"flex-box"},extention:[{name:"FLEXITEM",output:s}],output:()=>new i.h.hi({display:"flex",flex:"wrap",alignContent:"between",style:{height:"200px"}},s(15))}),new l.TU({outputAttr:{class:"flex-box"},extention:[{name:"FLEXITEM",output:s}],output:()=>new i.h.hi({display:"flex",flex:"wrap",alignContent:"around",style:{height:"200px"}},s(15))}),new l.TU({outputAttr:{class:"flex-box"},extention:[{name:"FLEXITEM",output:s}],output:()=>new i.h.hi({display:"flex",flex:"wrap",alignContent:"stretch",style:{height:"200px"}},s(15))}),new l.fL("Responsive variations also exist for {{align-content}}."),new l.ul({item:[...["","-sm","-md","-lg","-xl","-xxl"].map((t=>["start","end","center","between","around","stretch"].map((e=>`{{.align-content${t}-${e}}}`)))).flat()]})]),new l.qi([new l.TN("Media object"),new l.fL("Looking to replicate the {{https://getbootstrap.com/docs/4.6/components/media-object/::media object component}} from Bootstrap 4? Recreate it in no time with a few flex utilities that allow even more flexibility and customization than before."),new l.TU({output:()=>new i.h.hi({display:"flex"},[new i.h.hi({flex:"shrink-0"},new i.h.lv({src:"https://picsum.photos/seed/bsts_0/100/100.webp",alt:"..."})),new i.h.hi({flex:"grow-1",marginStart:3},"This is some content from a media component. You can replace this with any content and adjust it as needed.")])})]),new l.qi([new l.TN("Sass")]),new l.qi([new l.Oc("Utilities API"),new l.fL("Flexbox utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),new l.LX({type:"css",title:"scss/_utilities.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",code:'\n\t\t\t\t\t\t"flex": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: flex,\n\t\t\t\t\t\tvalues: (fill: 1 1 auto)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"flex-direction": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: flex-direction,\n\t\t\t\t\t\tclass: flex,\n\t\t\t\t\t\tvalues: row column row-reverse column-reverse\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"flex-grow": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: flex-grow,\n\t\t\t\t\t\tclass: flex,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tgrow-0: 0,\n\t\t\t\t\t\t\tgrow-1: 1,\n\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"flex-shrink": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: flex-shrink,\n\t\t\t\t\t\tclass: flex,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tshrink-0: 0,\n\t\t\t\t\t\t\tshrink-1: 1,\n\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"flex-wrap": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: flex-wrap,\n\t\t\t\t\t\tclass: flex,\n\t\t\t\t\t\tvalues: wrap nowrap wrap-reverse\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"justify-content": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: justify-content,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tstart: flex-start,\n\t\t\t\t\t\t\tend: flex-end,\n\t\t\t\t\t\t\tcenter: center,\n\t\t\t\t\t\t\tbetween: space-between,\n\t\t\t\t\t\t\taround: space-around,\n\t\t\t\t\t\t\tevenly: space-evenly,\n\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"align-items": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: align-items,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tstart: flex-start,\n\t\t\t\t\t\t\tend: flex-end,\n\t\t\t\t\t\t\tcenter: center,\n\t\t\t\t\t\t\tbaseline: baseline,\n\t\t\t\t\t\t\tstretch: stretch,\n\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"align-content": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: align-content,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tstart: flex-start,\n\t\t\t\t\t\t\tend: flex-end,\n\t\t\t\t\t\t\tcenter: center,\n\t\t\t\t\t\t\tbetween: space-between,\n\t\t\t\t\t\t\taround: space-around,\n\t\t\t\t\t\t\tstretch: stretch,\n\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"align-self": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: align-self,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tauto: auto,\n\t\t\t\t\t\t\tstart: flex-start,\n\t\t\t\t\t\t\tend: flex-end,\n\t\t\t\t\t\t\tcenter: center,\n\t\t\t\t\t\t\tbaseline: baseline,\n\t\t\t\t\t\t\tstretch: stretch,\n\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t"order": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: order,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tfirst: -1,\n\t\t\t\t\t\t\t0: 0,\n\t\t\t\t\t\t\t1: 1,\n\t\t\t\t\t\t\t2: 2,\n\t\t\t\t\t\t\t3: 3,\n\t\t\t\t\t\t\t4: 4,\n\t\t\t\t\t\t\t5: 5,\n\t\t\t\t\t\t\tlast: 6,\n\t\t\t\t\t\t),\n\t\t\t\t\t\t),\n\t\t\t\t\t'})])]}}}]);
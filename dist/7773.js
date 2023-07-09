"use strict";(self.webpackChunk_printf83_bsts_test=self.webpackChunk_printf83_bsts_test||[]).push([[7773],{7773:(t,e,s)=>{s.r(e),s.d(e,{zindex:()=>i});var o=s(195),n=s(7763);const i={title:"Z-index",description:"Use Bootstrap low-level {{z-index}} utilities to quickly change the stack level of an element or component.",item:()=>[new n.qi([new n.TN("Example"),new n.fL("Use {{z-index}} utilities to stack elements on top of one another. Requires a {{position}} value other than {{static}}, which can be set with custom styles or using Bootstrap {{nav:docs/utilities/position::position utilities}}."),new n.Z9({color:"info",callout:!0},"Bootstrap call these “low-level” {{z-index}} utilities because of their default values of {{-1}} through {{3}}, which Bootstrap use for the layout of overlapping components. High-level {{z-index}} values are used for overlay components like modals and tooltips."),new n.TU({outputAttr:{class:"zindex-box",style:{height:"200px"}},output:()=>[3,2,1,0,"n1"].map((t=>new o.h.hi({zIndex:t,position:"absolute",rounded:3,padding:5},new o.h.yP(`z-${t}`))))})]),new n.qi([new n.TN("Overlays"),new n.fL("Bootstrap overlay components—dropdown, modal, offcanvas, popover, toast, and tooltip—all have their own {{z-index}} values to ensure a usable experience with competing “layers” of an interface."),new n.fL("Read about them in the {{nav:docs/layout/zindex::z-index layout page}}.")]),new n.qi([new n.TN("Component approach"),new n.fL("On some components, Bootstrap use Bootstrap low-level {{z-index}} values to manage repeating elements that overlap one another (like buttons in a button group or items in a list group)."),new n.fL("Learn about Bootstrap {{https://getbootstrap.com/docs/5.3/extend/approach/#z-index-scales::z-index approach}}.")]),new n.qi([new n.TN("CSS")]),new n.qi([new n.Oc("Sass map "),new n.fL("Customize this Sass map to change the available values and generated utilities."),new n.LX({type:"css",title:"scss/_variables.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",code:"\n\t\t\t\t\t\t$zindex-levels: (\n\t\t\t\t\t\tn1: -1,\n\t\t\t\t\t\t0: 0,\n\t\t\t\t\t\t1: 1,\n\t\t\t\t\t\t2: 2,\n\t\t\t\t\t\t3: 3\n\t\t\t\t\t\t);\n\t\t\t\t\t"})]),new n.qi([new n.Oc("Utilities API"),new n.fL("Position utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),new n.LX({type:"css",title:"scss/_utilities.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",code:'\n\t\t\t\t\t\t"z-index": (\n\t\t\t\t\t\tproperty: z-index,\n\t\t\t\t\t\tclass: z,\n\t\t\t\t\t\tvalues: $zindex-levels,\n\t\t\t\t\t\t)\n\t\t\t\t\t'})])]}}}]);
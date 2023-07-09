"use strict";(self.webpackChunk_printf83_bsts_test=self.webpackChunk_printf83_bsts_test||[]).push([[8355],{8355:(t,e,s)=>{s.r(e),s.d(e,{focus_ring:()=>n});var o=s(195),i=s(7763);const n={title:"Focus ring",description:"Utility classes that allows you to add and modify custom focus ring styles to elements and components.",item:()=>[new i.qi([new i.fL("The {{.focus-ring}} helper removes the default {{outline}} on {{:focus}}, replacing it with a {{box-shadow}} that can be more broadly customized. The new shadow is made up of a series of CSS variables, inherited from the {{:root}} level, that can be modified for any element or component.")]),new i.qi([new i.TN("Example"),new i.fL("Click directly on the link below to see the focus ring in action, or into the example below and then press {{k::Tab}}."),new i.TU({output:()=>new o.h.a({href:"#",display:"inline-flex",paddingY:1,paddingX:2,textDecoration:"none",border:!0,rounded:!0,focusRing:!0},"Custom focus ring")})]),new i.qi([new i.TN("Customize"),new i.fL("Modify the styling of a focus ring with Bootstrap CSS variables, Sass variables, utilities, or custom styles.")]),new i.qi([new i.Oc("CSS variables "),new i.fL("Modify the {{--bs-focus-ring-*}} CSS variables as needed to change the default appearance."),new i.TU({output:()=>new o.h.a({href:"#",display:"inline-flex",paddingY:1,paddingX:2,textDecoration:"none",border:!0,rounded:!0,focusRing:!0,style:{"--bs-focus-ring-color":"rgba(var(--bs-success-rgb), .25)"}},"Green focus ring")}),new i.fL("{{.focus-ring}} sets styles via global CSS variables that can be overridden on any parent element, as shown above. These variables are generated from their Sass variable counterparts."),new i.LX({type:"css",title:"scss/_root.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_root.scss",code:"\n\t\t\t\t\t\t--#{$prefix}focus-ring-width: #{$focus-ring-width};\n\t\t\t\t\t\t--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};\n\t\t\t\t\t\t--#{$prefix}focus-ring-color: #{$focus-ring-color};\n\t\t\t\t\t"}),new i.fL("By default, there is no {{--bs-focus-ring-x}}, {{--bs-focus-ring-y}}, or {{--bs-focus-ring-blur}}, but Bootstrap provide CSS variables with fallbacks to initial {{0}} values. Modify them to change the default appearance."),new i.TU({output:()=>new o.h.a({href:"#",display:"inline-flex",paddingY:1,paddingX:2,textDecoration:"none",border:!0,rounded:!0,focusRing:!0,style:{"--bs-focus-ring-x":"10px","--bs-focus-ring-y":"10px","--bs-focus-ring-blur":"4px"}},"Blurry offset focus ring")})]),new i.qi([new i.Oc("Sass"),new i.fL("Customize the focus ring Sass variables to modify all usage of the focus ring styles across your Bootstrap-powered project."),new i.LX({type:"css",title:"scss/_variables.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",code:"\n\t\t\t\t\t\t$focus-ring-width:      .25rem;\n\t\t\t\t\t\t$focus-ring-opacity:    .25;\n\t\t\t\t\t\t$focus-ring-color:      rgba($primary, $focus-ring-opacity);\n\t\t\t\t\t\t$focus-ring-blur:       0;\n\t\t\t\t\t\t$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;\n\t\t\t\t\t"})]),new i.qi([new i.Oc("Utilities"),new i.fL("In addition to {{.focus-ring}}, Bootstrap have several {{.focus-ring-*}} utilities to modify the helper class defaults. Modify the color with any of Bootstrap {{https://getbootstrap.com/docs/5.3/customize/color/#theme-colors::theme colors}}. Note that the light and dark variants may not be visible on all background colors given current color mode support."),new i.TU({output:()=>["primary","secondary","success","danger","warning","info","light","dark"].map((t=>new o.h.p(new o.h.a({href:"#",display:"inline-flex",focusRing:t,paddingY:1,paddingX:2,textDecoration:"none",border:!0,rounded:2},`${o.v.uppercaseFirst(t)} focus`))))}),new i.fL("Focus ring utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),new i.LX({type:"css",title:"scss/_variables.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",code:'\n\t\t\t\t\t\t"focus-ring": (\n\t\t\t\t\t\tcss-var: true,\n\t\t\t\t\t\tcss-variable-name: focus-ring-color,\n\t\t\t\t\t\tclass: focus-ring,\n\t\t\t\t\t\tvalues: map-loop($theme-colors-rgb, rgba-css-var, "$key", "focus-ring")\n\t\t\t\t\t\t),\n\t\t\t\t\t'})])]}}}]);
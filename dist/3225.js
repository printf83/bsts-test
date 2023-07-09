"use strict";(self.webpackChunk_printf83_bsts_test=self.webpackChunk_printf83_bsts_test||[]).push([[3225],{3225:(e,t,s)=>{s.r(t),s.d(t,{color:()=>d});var r=s(195),n=s(7763);const i=(e,t)=>{let s=document.querySelector(":root");if(s)if(e.endsWith("-rgb")&&t.startsWith("#")){let r=(e=>{e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,s,r){return t+t+s+s+r+r}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null})(t);r&&s.style.setProperty(e,`${r.r},${r.g},${r.b}`)}else s.style.setProperty(e,t)},o=e=>{let t=document.querySelector(":root");if(t){let s=getComputedStyle(t).getPropertyValue(e);if(s.startsWith("#"))return s;{let e=s.replace(/^rgba?\(|\s+|\)$/g,"").split(",");return"#"+(1<<24|parseInt(e[0])<<16|parseInt(e[1])<<8|parseInt(e[2])).toString(16).slice(1)}}return"#ffffff"},a=e=>{let t=Array.isArray(e)?e.join(","):e,s=Array.isArray(e)?e[0]:e,n=o(s);return new r.h.hi({class:"swatch",rounded:!0,border:!0,style:{backgroundColor:n}},[new r.b.qH({type:"color",value:n,on:{input:e=>{let s=e.target,r=s.value;t&&t.split(",").forEach((e=>{let t=s.closest(".swatch");t&&(t.style.setProperty("background-color",r),i(e,r))}))}}})])},b=e=>{let t=Array.isArray(e)?e.join(","):e,s=Array.isArray(e)?e[0]:e,n=o(s);return new r.h.hi({class:"swatch",rounded:!0,border:!0,borderWidth:5,style:{borderColor:`${n} !important`}},[new r.b.qH({type:"color",value:n,on:{input:e=>{let s=e.target,r=s.value;t&&t.split(",").forEach((e=>{let t=s.closest(".swatch");t&&(t.style.setProperty("border-color",r,"important"),i(e,r))}))}}})])},l=e=>{let t=Array.isArray(e)?e.join(","):e,s=Array.isArray(e)?e[0]:e,n=o(s);return new r.h.hi({class:"swatch",position:"relative",style:{color:`${n}`}},[new r.h.yP({h:4,fontWeight:"bolder",position:"absolute",width:100,zIndex:0,textAlign:"center",marginTop:2,paddingTop:1},"Text"),new r.b.qH({type:"color",zIndex:1,value:n,on:{input:e=>{let s=e.target,r=s.value;t&&t.split(",").forEach((e=>{let t=s.closest(".swatch");t&&(t.style.setProperty("color",r),i(e,r))}))}}})])},d={title:"Color",description:"Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.",item:()=>[new n.qi([new n.TN("Colors"),new n.fL("Bootstrap’s color palette has continued to expand and become more nuanced in v5.3.0. Bootstrap’ve added new variables for {{secondary}} and {{tertiary}} text and background colors, plus{{ {color}-bg-subtle}},{{ {color}-border-subtle}}, and{{ {color}-text-emphasis}} for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on {{:root}} and are adapted for our new dark color mode while our original theme colors remain unchanged."),new n.fL("Colors ending in {{-rgb}} provide the {{red}}, {{green}}, {{blue}} values for use in {{rgb()}} and {{rgba()}} color modes. For example, {{rgba(var(--bs-secondary-bg-rgb), .5)}}."),new n.Z9({color:"warning",callout:!0},"{{b::Heads up!}} There’s some potential confusion with our new secondary and tertiary colors, and our existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6."),new n.Kz({responsiveAttr:"bs-title-name",responsiveCol:"15ch auto",responsiveColXs:"auto"},[new r.b.Kz.r(new r.b.Kz.tr([new r.b.Kz.th({scope:"col"},"Description"),new r.b.Kz.th({scope:"col"},"Swatch"),new r.b.Kz.th({scope:"col",style:{minWidth:"15rem"}},"Variables")])),new r.b.Kz.gE([new r.b.Kz.tr([new r.b.Kz.td({rowspan:2,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Body — }}Default foreground (color) and background, including components.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-body-color","--bs-body-color-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-body-color}}{{br}}{{--bs-body-color-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Body — }}Default foreground (color) and background, including components.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-body-bg","--bs-body-bg-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-body-bg}}{{br}}{{--bs-body-bg-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:2,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Secondary — }}Use the {{color}} option for lighter text. Use the {{bg}} option for dividers and to indicate disabled component states.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-secondary-color","--bs-secondary-color-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-secondary-color}}{{br}}{{--bs-secondary-color-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Secondary — }}Use the {{color}} option for lighter text. Use the {{bg}} option for dividers and to indicate disabled component states.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-secondary-bg","--bs-secondary-bg-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-secondary-bg}}{{br}}{{--bs-secondary-bg-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:2,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Tertiary — }}Use the {{color}} option for even lighter text. Use the {{bg}} option to style backgrounds for hover states, accents, and wells.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-tertiary-color","--bs-tertiary-color-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-tertiary-color}}{{br}}{{--bs-tertiary-color-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Tertiary — }}Use the {{color}} option for even lighter text. Use the {{bg}} option to style backgrounds for hover states, accents, and wells.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-tertiary-bg","--bs-tertiary-bg-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-tertiary-bg}}{{br}}{{--bs-tertiary-bg-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Emphasis — }}For higher contrast text. Not applicable for backgrounds.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-emphasis-color","--bs-emphasis-color-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-emphasis-color}}{{br}}{{--bs-emphasis-color-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Border — }}For component borders, dividers, and rules. Use {{--bs-border-color-translucent}} to blend with backgrounds with an {{rgba()}} value.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-border-color","--bs-border-color-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-border-color}}{{br}}{{--bs-border-color-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:4,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-primary","--bs-primary-rgb","--bs-dropdown-link-active-bg"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-primary}}{{br}}{{--bs-primary-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a("--bs-primary-bg-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-primary-bg-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},b("--bs-primary-border-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-primary-border-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},l("--bs-primary-text-emphasis")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-primary-text-emphasis}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:4,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Success — }}Theme color used for positive or successful actions and information.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-success","--bs-success-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-success}}{{br}}{{--bs-success-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Success — }}Theme color used for positive or successful actions and information.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a("--bs-success-bg-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-success-bg-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Success — }}Theme color used for positive or successful actions and information.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},b("--bs-success-border-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-success-border-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Success — }}Theme color used for positive or successful actions and information.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},l("--bs-success-text-emphasis")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-success-text-emphasis}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:4,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Danger — }}Theme color used for errors and dangerous actions.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-danger","--bs-danger-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-danger}}{{br}}{{--bs-danger-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Danger — }}Theme color used for errors and dangerous actions.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a("--bs-danger-bg-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-danger-bg-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Danger — }}Theme color used for errors and dangerous actions.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},b("--bs-danger-border-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-danger-border-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Danger — }}Theme color used for errors and dangerous actions.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},l("--bs-danger-text-emphasis")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-danger-text-emphasis}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:4,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Warning — }}Theme color used for non-destructive warning messages.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-warning","--bs-warning-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-warning}}{{br}}{{--bs-warning-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Warning — }}Theme color used for non-destructive warning messages.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a("--bs-warning-bg-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-warning-bg-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Warning — }}Theme color used for non-destructive warning messages.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},b("--bs-warning-border-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-warning-border-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Warning — }}Theme color used for non-destructive warning messages.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},l("--bs-warning-text-emphasis")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-warning-text-emphasis}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:4,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Info — }}Theme color used for neutral and informative content.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-info","--bs-info-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-info}}{{br}}{{--bs-info-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Info — }}Theme color used for neutral and informative content.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a("--bs-info-bg-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-info-bg-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Info — }}Theme color used for neutral and informative content.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},b("--bs-info-border-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-info-border-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Info — }}Theme color used for neutral and informative content.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},l("--bs-info-text-emphasis")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-info-text-emphasis}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:4,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Light — }}Additional theme option for less contrasting colors.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-light","--bs-light-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-light}}{{br}}{{--bs-light-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Light — }}Additional theme option for less contrasting colors.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a("--bs-light-bg-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-light-bg-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Light — }}Additional theme option for less contrasting colors.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},b("--bs-light-border-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-light-border-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Light — }}Additional theme option for less contrasting colors.")),new r.b.Kz.td(l("--bs-light-text-emphasis")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-light-text-emphasis}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({rowspan:4,responsiveAttr:"bs-title-name",responsiveTitle:"Description"},new r.h.hi("{{b::Dark — }}Additional theme option for higher contrasting colors.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a(["--bs-dark","--bs-dark-rgb"])),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-dark}}{{br}}{{--bs-dark-rgb}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Dark — }}Additional theme option for higher contrasting colors.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},a("--bs-dark-bg-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-dark-bg-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Dark — }}Additional theme option for higher contrasting colors.")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Swatch"},b("--bs-dark-border-subtle")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variables"},new r.h.hi(["{{--bs-dark-border-subtle}}"]))]),new r.b.Kz.tr([new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Description",display:["grid","md-none"]},new r.h.hi("{{b::Dark — }}Additional theme option for higher contrasting colors.")),new r.b.Kz.td(l("--bs-dark-text-emphasis")),new r.b.Kz.td({responsiveAttr:"bs-title-name",responsiveTitle:"Variable"},new r.h.hi(["{{--bs-dark-text-emphasis}}"]))])])])]),new n.qi([new n.TN("Using the new colors"),new n.fL("These new colors are accessible via CSS variables and utility classes—like {{--bs-primary-bg-subtle}} and {{.bg-primary-subtle}}—allowing you to compose your own CSS rules with the variables, or to quickly apply styles via classes. The utilities are built with the color’s associated CSS variables, and since Bootstrap customize those CSS variables for dark mode, they are also adaptive to color mode by default."),new n.TU({output:()=>new r.h.hi({padding:3,textColor:"primary-emphasis",bgColor:"primary-subtle",border:!0,borderColor:"primary-subtle",roundedSize:3},"Example element with utilities")})]),new n.qi([new n.TN("Theme colors"),new n.fL("Bootstrap use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s {{scss/_variables.scss}} file."),new n.wc(new r.h.hi({container:"fluid",margin:0,padding:0},new r.h.hi({row:!0,gutter:3},["primary","secondary","success","danger","warning","info","light","dark"].map((e=>new r.h.hi({col:[12,"sm-6","md-4"]},new r.h.hi({padding:3,textBgColor:e,rounded:!0},r.v.uppercaseFirst(e)))))))),new n.fL("All these colors are available as a Sass map, {{$theme-colors}}."),new n.LX({type:"css",title:"scss/_variables.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",code:'\n\t\t\t\t\t\t$theme-colors: (\n\t\t\t\t\t\t"primary":    $primary,\n\t\t\t\t\t\t"secondary":  $secondary,\n\t\t\t\t\t\t"success":    $success,\n\t\t\t\t\t\t"info":       $info,\n\t\t\t\t\t\t"warning":    $warning,\n\t\t\t\t\t\t"danger":     $danger,\n\t\t\t\t\t\t"light":      $light,\n\t\t\t\t\t\t"dark":       $dark\n\t\t\t\t\t\t);\n\t\t\t\t\t'}),new n.fL("Check out our Sass maps and loops docs for how to modify these colors.")]),new n.qi([new n.TN("All colors"),new n.fL("All Bootstrap colors are available as Sass variables and a Sass map in {{scss/_variables.scss}} file. To avoid increased file sizes, Bootstrap don’t create text or background color classes for each of these variables. Instead, Bootstrap choose a subset of these colors for a {{https://getbootstrap.com/docs/5.3/customize/color/#theme-colors::theme palette}}."),new n.fL("Be sure to monitor contrast ratios as you customize colors. As shown below, Bootstrap added three contrast ratios to each of the main colors—one for the swatch’s current colors, one for against white, and one for against black."),new n.Z9({color:"danger",callout:!0},[new r.b.Z9.header(5,"Unsuppoterd in {{bsts}}"),"This feature will supported when Bootstrap make it opt-in by default or available in CDN."]),new n.fL("If you like to use this feature using {{bsts}}, you can manually set it by class property:"),new n.TU({output:()=>new r.h.hi({container:"fluid",margin:0,padding:0},new r.h.hi({row:!0,gutter:3},["blue-100","blue-200","blue-300","blue-400","blue-500","blue-600","blue-700","blue-800","blue-900"].map((e=>new r.h.hi({col:[12,"sm-6","md-4"]},new r.h.hi({padding:3,class:e,rounded:!0},`$${e}`))))))})])]}}}]);
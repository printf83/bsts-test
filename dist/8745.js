"use strict";(self.webpackChunk_printf83_bsts_test=self.webpackChunk_printf83_bsts_test||[]).push([[8745],{8745:(t,e,n)=>{n.r(e),n.d(e,{range:()=>o});var r=n(195),a=n(7763);const o={title:"Range",description:"Use Bootstrap custom range inputs for consistent cross-browser styling and built-in customization.",item:()=>[new a.qi([new a.TN("Overview"),new a.fL("Create custom {{<input type='range'>}} controls with {{.form-range}}. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress, Bootstrap do not currently support it."),new a.TU({output:()=>[new r.b.PS({for:"customRange1",class:"form-label"},"Example range"),new r.b.qH({type:"range",id:"customRange1"})]}),new a.fL("Using {{item}} to setup option"),new a.TU({output:()=>r.b.cr.input({label:"Example range",type:"range"})})]),new a.qi([new a.TN("Disabled"),new a.fL("Add the {{disabled}} boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing."),new a.TU({output:()=>r.b.cr.input({label:"Disabled range",type:"range",disabled:!0})})]),new a.qi([new a.TN("Min and max"),new a.fL("Range inputs have implicit values for {{min}} and {{max}}—{{0}} and {{100}}, respectively. You may specify new values for those using the {{min}} and {{max}} attributes."),new a.TU({output:()=>r.b.cr.input({label:"Example range",type:"range",min:0,max:5,value:4})})]),new a.qi([new a.TN("Steps"),new a.fL("By default, range inputs “snap” to integer values. To change this, you can specify a {{step}} value. In the example below, Bootstrap double the number of steps by using {{step='0.5'}}."),new a.TU({output:()=>r.b.cr.input({label:"Example range",type:"range",min:0,max:5,step:.5,value:4})})]),new a.qi([new a.TN("CSS")]),new a.qi([new a.Oc("Sass variables"),new a.LX({type:"css",title:"scss/_variables.scss",source:"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",code:"\n\t\t\t\t\t\t$form-range-track-width:          100%;\n\t\t\t\t\t\t$form-range-track-height:         .5rem;\n\t\t\t\t\t\t$form-range-track-cursor:         pointer;\n\t\t\t\t\t\t$form-range-track-bg:             var(--#{$prefix}tertiary-bg);\n\t\t\t\t\t\t$form-range-track-border-radius:  1rem;\n\t\t\t\t\t\t$form-range-track-box-shadow:     $box-shadow-inset;\n\n\t\t\t\t\t\t$form-range-thumb-width:                   1rem;\n\t\t\t\t\t\t$form-range-thumb-height:                  $form-range-thumb-width;\n\t\t\t\t\t\t$form-range-thumb-bg:                      $component-active-bg;\n\t\t\t\t\t\t$form-range-thumb-border:                  0;\n\t\t\t\t\t\t$form-range-thumb-border-radius:           1rem;\n\t\t\t\t\t\t$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1);\n\t\t\t\t\t\t$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow;\n\t\t\t\t\t\t$form-range-thumb-focus-box-shadow-width:  $input-focus-width; // For focus box shadow issue in Edge\n\t\t\t\t\t\t$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%);\n\t\t\t\t\t\t$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color);\n\t\t\t\t\t\t$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n\t\t\t\t\t"})])]}}}]);
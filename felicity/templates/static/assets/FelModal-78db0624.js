import{d as i,N as c,k as m,z as u,o as p,c as _,b as o,x as f,w as h,y as v,aE as s,H as d,g as b,I as y,J as w}from"./index-03fd00e9.js";const $=i({name:"simple-modal",props:{contentWidth:String},setup(e,{emit:t}){return c(()=>{document.addEventListener("keydown",n=>{n.keyCode==27&&t("close")})}),{}}});const l=e=>(y("data-v-05372a21"),e=e(),w(),e),k={class:"modal-mask"},C={class:"modal-wrapper"},x={class:"modal-header"},I={class:"flex justify-between"},N=l(()=>o("hr",null,null,-1)),S={class:"modal-body"},g=l(()=>o("hr",null,null,-1)),M={class:"modal-footer"},V={class:"flex justify-end"};function j(e,t,n,B,E,W){const r=u("font-awesome-icon");return p(),_("div",k,[o("div",C,[f(` @click="$emit('close')" `),o("div",{onClick:t[2]||(t[2]=h(()=>{},["stop"])),class:v(["modal-container max-h-screen overflow-y-scroll",e.contentWidth?e.contentWidth:"w-1/2"])},[o("div",x,[o("div",I,[s(e.$slots,"header",{},()=>[d("default header")],!0),o("button",{onClick:t[0]||(t[0]=a=>e.$emit("close")),class:"ml-4 inline-flex items-center justify-center w-8 h-8 mr-2 text-red-500 transition-colors duration-150 bg-white rounded-full border-red-200 border focus:outline-none hover:border-red-500"},[b(r,{icon:"times"})])])]),N,o("div",S,[s(e.$slots,"body",{},()=>[d("default body")],!0)]),g,o("div",M,[s(e.$slots,"footer",{},()=>[o("div",V,[o("button",{class:"modal-default-button text-red-500 border-red-200 border rounded py-1 px-2 transition-colors hover:outline-none hover:border-red-500",onClick:t[1]||(t[1]=a=>e.$emit("close"))}," Cancel ")])],!0)])],2)])])}const D=m($,[["render",j],["__scopeId","data-v-05372a21"],["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/ui/FelModal.vue"]]);export{D as default};
import{_ as r,t as f}from"./billing-356772f3.js";import{f as b,G as o,c as y,r as g,d as c,aj as h,h as t,k as a,ag as k,x as _,F as x,ak as D,s as T,D as S,j as i,u as n,y as l,_ as E}from"./_plugin-vue_export-helper-3f67fb71.js";const w={class:"col-span-12"},C={class:"bg-white shadow-md mt-2"},I={class:"-mb-px flex justify-start"},L=["onClick"],V=b({__name:"SampleDetail",setup(A){const p=o(()=>r(()=>import("./Results-3587b982.js"),["assets/Results-3587b982.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/Button-dc046b43.js","assets/index-3189f120.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/index-5bee2eb9.css","assets/analysis-ff49db01.js","assets/constants-df420cc9.js"])),m=o(()=>r(()=>import("./Impress-5c46c6c9.js"),["assets/Impress-5c46c6c9.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/index-3189f120.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/index-5bee2eb9.css","assets/samples-6869bb19.js"])),u=o(()=>r(()=>import("./AuditLog-4ad6be59.js"),["assets/AuditLog-4ad6be59.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js"])),d=f(),e=y({currentTab:g("analysis-results"),tabs:["analysis-results","logs","impress-reports"],sample:c(()=>d.getSample)});return c(()=>"tab-"+e.currentTab),(B,P)=>{const v=h("motion-slide-left");return t(),a("section",w,[k((t(),a("nav",C,[_("div",I,[(t(!0),a(x,null,D(e.tabs,s=>(t(),a("a",{key:s,class:T(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e.currentTab===s}]),onClick:R=>e.currentTab=s},S(s),11,L))),128))])])),[[v]]),_("div",null,[e.currentTab==="analysis-results"?(t(),i(n(p),{key:0})):l("v-if",!0),e.currentTab==="logs"?(t(),i(n(u),{key:1,targetType:"sample",targetId:e.sample?.uid},null,8,["targetId"])):l("v-if",!0),e.currentTab==="impress-reports"?(t(),i(n(m),{key:2})):l("v-if",!0)])])}}}),F=E(V,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/sample/_id/SampleDetail.vue"]]);export{F as default};

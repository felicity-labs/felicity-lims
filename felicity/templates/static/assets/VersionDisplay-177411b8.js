import{d as f,r as o,q as h,o as n,c as l,b as t,t as u,B as d,a as v,ab as m,k as x}from"./index-b31857b9.js";const y={class:"flex items-center gap-x-4 p-2 rounded-md"},g={class:"flex items-center gap-x-2"},w={class:"font-medium"},k=t("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"})],-1),b=[k],V={key:0,class:"flex items-center gap-x-2 text-sky-800 animate-bounce"},B=t("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"10"}),t("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),t("line",{x1:"12",y1:"8",x2:"12",y2:"8"})],-1),C=f({__name:"VersionDisplay",setup(D){const s=o(!1),r=o("0.0.0"),a=o(null),i=o(null),p=async()=>{s.value=!0,v.get("/version").then(({data:{version:e}})=>{r.value=e}).catch(e=>{i.value="Failed to get current version",console.error(e)}).finally(()=>s.value=!1)},{toastInfo:c}=m(),_=async()=>{s.value=!0,v.get("/version/updates").then(({data:e})=>{a.value=e,e.update_available?c(`Update available: ${e.latest_version}`):c("No updates available")}).catch(e=>{i.value="Failed to get current version",console.error(e)}).finally(()=>s.value=!1)};return h(()=>{p()}),(e,M)=>(n(),l("div",y,[t("div",g,[t("span",w,u(r.value),1),a.value?.update_available?d("",!0):(n(),l("button",{key:0,onClick:_,class:"p-1 text-gray-500 hover:text-gray-700 focus:outline-none rounded-full"},[...b]))]),a.value?.update_available?(n(),l("div",V,[t("span",null,u(e.latestVersion)+" available",1),B])):d("",!0)]))}}),I=x(C,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/VersionDisplay.vue"]]);export{I as default};

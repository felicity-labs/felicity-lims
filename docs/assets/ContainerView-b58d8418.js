import{_ as r,Z as c}from"./billing-356772f3.js";import{G as o,f as d,r as m,d as n,B as t,al as s,F as g}from"./_plugin-vue_export-helper-3f67fb71.js";const u=o(()=>r(()=>import("./ContainerColumn-0475b590.js"),["assets/ContainerColumn-0475b590.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/billing-356772f3.js"])),x=o(()=>r(()=>import("./ContainerGrid-896220b2.js"),["assets/ContainerGrid-896220b2.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/billing-356772f3.js"])),f=d({name:"contaner-view",setup(e,p){const a=c();let l=m("column-view");const i=n(()=>a.getStorageContainer?.grid?["column-view","grid-view"]:["column-view"]);return{currentTab:l,tabs:i,storageContainer:n(()=>a.getStorageContainer)}},render(){return t(g,null,[t("div",{class:"grid grid-cols-2 mt-2"},[t("div",{class:"col-span-1"},[t("div",{class:"flex"},[t("span",{class:"text-gray-600 text-md font-bold w-52"},[s("Name:")]),t("span",{class:"text-gray-600 text-md"},[this.storageContainer?.name])]),t("div",{class:"flex"},[t("span",{class:"text-gray-600 text-md font-bold w-52"},[s("Layout:")]),t("span",{class:"text-gray-600 text-md"},[this.storageContainer?.grid?"grid":"column"]),this.storageContainer?.grid?t("span",{class:"ml-2 text-gray-600 text-md italic bg-slate-400 px-1 rounded-sm"},[this.storageContainer?.rowWise?"by-row":"by-column"]):null])]),t("div",{class:"col-span-1"},[t("div",{class:"flex"},[t("span",{class:"text-gray-600 text-md font-bold w-52"},[s("Slots:")]),t("span",{class:"text-gray-600 text-md"},[this.storageContainer?.slots])]),t("div",{class:"flex mt-2"},[t("span",{class:"text-gray-600 text-md font-bold w-52"},[s("Empty Slots:")]),t("span",{class:"text-gray-600 text-md mr-2"},[+this.storageContainer?.slots-this.storageContainer?.samples?.length])])])]),t("div",null,[t("div",{class:"mt-4"},[t("nav",{class:"bg-white shadow-sm my-2"},[t("div",{class:"-mb-px flex justify-start"},[this.tabs.map(e=>t("a",{key:e,class:["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":this.currentTab===e}],onClick:()=>this.currentTab=e,role:"tab"},[e]))])]),this.currentTab==="column-view"?t(u,null,null):null,this.currentTab==="grid-view"?t(x,null,null):null])])])}});export{f as ContainerView,f as default};
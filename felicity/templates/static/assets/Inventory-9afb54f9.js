import{_ as s,n as u,t as c}from"./billing-356772f3.js";import{G as a,f as i,r as p,d as m,B as t}from"./_plugin-vue_export-helper-3f67fb71.js";const _=a(()=>s(()=>import("./StockCategory-9d8368a0.js"),["assets/StockCategory-9d8368a0.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/inventory.mutations-91e62f9a.js","assets/runtime-dom.esm-bundler-6e07ef74.js"])),d=a(()=>s(()=>import("./StockItem-781d6ad0.js"),["assets/StockItem-781d6ad0.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/inventory.mutations-91e62f9a.js","assets/runtime-dom.esm-bundler-6e07ef74.js"])),v=a(()=>s(()=>import("./StockPackaging-b09ac4c6.js"),["assets/StockPackaging-b09ac4c6.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/inventory.mutations-91e62f9a.js","assets/runtime-dom.esm-bundler-6e07ef74.js"])),k=a(()=>s(()=>import("./StockUnit-772e019e.js"),["assets/StockUnit-772e019e.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/inventory.mutations-91e62f9a.js","assets/runtime-dom.esm-bundler-6e07ef74.js"])),g=a(()=>s(()=>import("./Hazard-5bc68a43.js"),["assets/Hazard-5bc68a43.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/inventory.mutations-91e62f9a.js","assets/runtime-dom.esm-bundler-6e07ef74.js"])),S=i({name:"InventoryHome",setup(e){const n=u(),o=c();let r=p("stock-items");const l=["stock-items","stock-categories","hazards","stock-units","stock-packaging"];return m(()=>"tab-"+r.value),o.fetchSampleTypes(),n.fetchDepartments({}),{exposed:{currentTab:r,tabs:l}}},render(){const{currentTab:e,tabs:n}=this.exposed;return t("div",{class:"mt-4"},[t("nav",{class:"bg-white shadow-md mt-2"},[t("div",{class:"-mb-px flex justify-start"},[n.map(o=>t("a",{key:o,class:["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e.value===o}],onClick:()=>e.value=o,role:"tab"},[o]))])]),e.value==="stock-items"?t(d,null,null):null,e.value==="stock-categories"?t(_,null,null):null,e.value==="stock-packaging"?t(v,null,null):null,e.value==="stock-units"?t(k,null,null):null,e.value==="hazards"?t(g,null,null):null])}});export{S as InventoryHome,S as default};
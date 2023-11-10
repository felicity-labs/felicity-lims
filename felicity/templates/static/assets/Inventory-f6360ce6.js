import{_ as n,aE as f,t as k,a5 as _,a2 as w,w as x}from"./shipment-53265c2d.js";import{G as o,f as T,r as i,d as u,B as t,al as s,v as O,F as p,ag as m,aj as S}from"./_plugin-vue_export-helper-dacf3d65.js";import{A as E}from"./inventory.mutations-f4d79d64.js";import{v as I}from"./runtime-dom.esm-bundler-98433118.js";const C=o(()=>n(()=>import("./Drawer-87b382b6.js"),["assets/Drawer-87b382b6.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),D=o(()=>n(()=>import("./PageHeading-f8f1dd15.js"),["assets/PageHeading-f8f1dd15.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),A=o(()=>n(()=>import("./InvAdjustments-75d83d49.js"),["assets/InvAdjustments-75d83d49.js","assets/shipment-53265c2d.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),B=o(()=>n(()=>import("./InvListing-72b8f798.js"),["assets/InvListing-72b8f798.js","assets/shipment-53265c2d.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/inventory.mutations-f4d79d64.js","assets/runtime-dom.esm-bundler-98433118.js"])),P=o(()=>n(()=>import("./InvTransactions-fcdc3ea0.js"),["assets/InvTransactions-fcdc3ea0.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/DataTable-f385048e.js","assets/runtime-dom.esm-bundler-98433118.js","assets/shipment-53265c2d.js"])),R=o(()=>n(()=>import("./InvOrders-fe485ee0.js"),["assets/InvOrders-fe485ee0.js","assets/shipment-53265c2d.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/inventory.mutations-f4d79d64.js","assets/runtime-dom.esm-bundler-98433118.js"])),q=T({name:"inventory-home",setup(){const{withClientMutation:e}=x(),r=f(),l=k(),h=_(),b=w();r.fetchItems({first:1e4,after:"",text:"",sortBy:["-uid"]}),b.fetchUsers({}),l.fetchSuppliers(),l.fetchDepartments({}),r.fetchCategories(),r.fetchHazards(),h.fetchStoreRooms(),r.fetchUnits(),r.fetchPackages();const d=i("orders"),y=i(["orders","stock-listing","transactions","adjustments"]),v=u(()=>"tab-"+d.value),c=i(!1);return{currentTab:d,inventoryTabs:y,currentTabComponent:v,basket:u(()=>r.getBasket),viewBasket:c,inventoryStore:r,createOrder:()=>{const g=r.getBasket;e(E,{payload:{orderProducts:g.map(a=>({productUid:a.product.uid,quantity:a.quantity,remarks:""})),departmentUid:void 0}},"createStockOrder").then(a=>{r.addStockOrder(a?.stockOrder),r.clearBasket(),c.value=!1})}}},render(){return t(p,null,[t(D,{title:"Inventory"},null),t("section",{class:"col-span-12 mt-2"},[t("nav",{class:"flex justify-between bg-white shadow-md mt-2"},[t("div",{class:"-mb-px flex justify-start"},[this.inventoryTabs?.map(e=>t("a",{key:e,class:["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":this.currentTab===e}],onClick:()=>this.currentTab=e,href:"#"},[e]))]),this.basket.length>0&&t("button",{type:"button",class:"flex items-center mr-4",onClick:()=>this.viewBasket=!0},[t("span",{class:"mr-2"},[s("View")]),s(" "),t(O("font-awesome-icon"),{icon:"cart-shopping"},null)])]),t("div",null,[this.currentTab==="orders"&&t(R,null,null),this.currentTab==="stock-listing"&&t(B,null,null),this.currentTab==="transactions"&&t(P,null,null),this.currentTab==="adjustments"&&t(A,null,null)]),t(C,{show:this.viewBasket,onClose:()=>this.viewBasket=!1},{header:()=>"Your Order Basket",body:()=>t(p,null,[t("div",{class:"overflow-x-auto mt-2 mb-4"},[t("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[t("table",{class:"min-w-full"},[t("thead",null,[t("tr",null,[t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Product Name")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Quantity")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null)])]),t("tbody",{class:"bg-white"},[this.basket.map(e=>m(t("tr",{key:e.product.uid},[t("td",null,[t("p",null,[e.product.name])]),t("td",{class:"px-1 py-1 whitespace-no-wrap"},[t("label",{class:"block"},[m(t("input",{class:"form-input",type:"number","onUpdate:modelValue":r=>e.quantity=r,placeholder:e.quantity},null),[[I,e.quantity]])])]),t("td",{class:"px-1 whitespace-no-wrap"},[t("button",{type:"button",class:"bg-sky-800 text-white rounded-sm leading-none px-2 py-1",onClick:()=>this.inventoryStore.removeFromBasket(e.product.uid)},[s("Remove")])])]),[[S("motion-slide-right")]]))])])])]),t("hr",null,null),t("button",{type:"button",class:"mt-4 bg-sky-800 text-white rounded-sm leading-none px-2 py-1",onClick:()=>this.createOrder()},[s("Create Order")])]),footer:()=>[]})])])}});export{q as InventoryHome,q as default};

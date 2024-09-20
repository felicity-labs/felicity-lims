import{d as g,r as s,W as x,c2 as m,cj as h,D as f,g as t,H as r,F as a,aH as b,O as k}from"./index-73e47413.js";const v=g({name:"product-detail",emits:["close"],props:{product:{type:Object}},setup(e,{emit:p}){const{withClientQuery:o}=k(),i=s([]),n=s([]);x(()=>e.product?.uid,async(l,w)=>{l&&(o(m,{productUid:l},"stockLots").then(d=>{i.value=d}),o(h,{first:25,after:"",text:"",sortBy:["-uid"],productUid:l},"stockAdjustmentAll").then(d=>{n.value=d.items??[]}))});const c=s("stock-lots"),u=s(["stock-lots","ledger"]),y=f(()=>"tab-"+c.value);return{currentTab:c,inventoryTabs:u,currentTabComponent:y,props:e,stockLots:i,stockAdjustments:n,emit:p}},render(){return t(a,null,[t("h3",{class:"font-bold text-l text-gray-600"},[r("Stock Item: "),this.props.product?.stockItem?.name]),t("p",{class:"italic text-gray-500"},[this.props.product?.stockItem?.description]),t("hr",{class:"my-2"},null),t("h3",{class:"font-bold text-l text-gray-600"},[r("Stock Variant: "),this.props.product?.name]),t("p",{class:"italic text-gray-500"},[this.props.product?.description]),t("hr",{class:"mt-2 mb-4"},null),t("nav",{class:"flex justify-between bg-white shadow-md mt-2"},[t("div",{class:"-mb-px flex justify-start"},[this.inventoryTabs?.map(e=>t("a",{key:e,class:["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":this.currentTab===e}],onClick:()=>this.currentTab=e},[e]))])]),t("div",{class:"pt-2"},[this.currentTab==="stock-lots"&&t(a,null,[t("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard p-2 rounded-bl-lg rounded-br-lg"},[t("table",{class:"min-w-full"},[t("thead",null,[t("tr",null,[t("th",{class:"px-1 py-1 border-b-2 border-gray-500 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Lot Number")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-500 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Quantity")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-500 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Expiry Date")])])]),t("tbody",null,[this.stockLots?.map(e=>t("tr",{key:e.uid},[t("td",{class:"border-b-2 border-gray-200 p-1 text-sm"},[e.lotNumber]),t("td",{class:"border-b-2 border-gray-200 p-1 text-sm"},[e.quantity]),t("td",{class:"border-b-2 border-gray-200 p-1 text-sm"},[b(e.expiryDate,!1)])]))])])])]),this.currentTab==="ledger"&&t(a,null,[t("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard p-2 rounded-bl-lg rounded-br-lg"},[t("table",{class:"min-w-full"},[t("thead",null,[t("tr",null,[t("th",{class:"px-1 py-1 border-b-2 border-gray-500 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Date")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-500 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Lot")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-500 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Transaction Type")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-500 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Quantity")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-500 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("By")])])]),t("tbody",null,[this.stockAdjustments?.map(e=>t(a,null,[t("tr",null,[t("td",{class:"border-b-2 border-gray-200 p-1 text-sm"},[b(e?.adjustmentDate)]),t("td",{class:"border-b-2 border-gray-200 p-1 text-sm"},[e?.lotNumber]),t("td",{class:"border-b-2 border-gray-200 p-1 text-sm"},[e?.adjustmentType]),t("td",{class:"border-b-2 border-gray-200 p-1 text-sm"},[e?.adjust]),t("td",{class:"border-b-2 border-gray-200 p-1 text-sm"},[e?.adjustmentBy?.firstName])])]))])])])])])])}});export{v as ProductDetail,v as default};
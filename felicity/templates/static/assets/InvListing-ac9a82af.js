import{d as L,I as C,n as P,r as c,P as T,at as u,p as I,g as t,A as o,e as l,ad as h,az as U,v as m,F as M,j as i,_ as d}from"./index-dcd7b802.js";import{u as j,a as S,G as V}from"./inventory-4ab77caa.js";const q=i(()=>d(()=>import("./FelDataTable-1af86474.js"),["assets/FelDataTable-1af86474.js","assets/index-dcd7b802.js","assets/index-a67f0314.css"])),v=i(()=>d(()=>import("./FelDrawer-96455655.js"),["assets/FelDrawer-96455655.js","assets/index-dcd7b802.js","assets/index-a67f0314.css"])),x=i(()=>d(()=>import("./FelModal-80650623.js"),["assets/FelModal-80650623.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),B=i(()=>d(()=>import("./StockReceiveForm-0877ae85.js"),["assets/StockReceiveForm-0877ae85.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/vue-multiselect.esm-3a5e6fb9.js","assets/array-e202a31f.js","assets/inventory-4ab77caa.js","assets/storage-74944de5.js","assets/setup-6f06eb41.js","assets/_queries-f2a7ab3f.js","assets/user-15738887.js"])),N=i(()=>d(()=>import("./ProductDetail-9df63ea0.js"),["assets/ProductDetail-9df63ea0.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/inventory-4ab77caa.js"])),H=L({name:"stock-listing",setup(e,R){const{withClientMutation:w,withClientQuery:_}=C(),r=j();r.fetchProducts({first:50,after:"",text:"",sortBy:["-uid"]});const a=P({product:{},quantity:0,stockLotUid:"",type:"",remarks:""}),f=c(!1),y=c([]),A=s=>{_(V,{productUid:s},"stockLots").then(p=>{y.value=p})};T(()=>a.product?.uid,(s,p)=>s&&A(s));const b=c(!1),g=c(!1),k=c({}),D=c([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Name",value:"stockItem.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Type",value:"name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Category",value:"stockItem.category.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Hazard",value:"stockItem.hazard.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Quantity",value:"quantity",sortable:!1,sortBy:"asc",hidden:!1},{name:"Description",value:"description",sortable:!1,sortBy:"asc",hidden:!1},{name:"Actions",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(s,p){return u("div",{class:"flex justify-start align-items-center gap-x-4"},[u("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none disabled:bg-gray-500",innerHTML:"+ Basket",disabled:s.quantity<1,onClick:()=>{a.product=s,a.quantity=0,f.value=!0}},[]),u("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none disabled:bg-gray-500",innerHTML:"+/- Adjust",disabled:s.quantity<1,onClick:()=>{a.product=s,a.quantity=0,b.value=!0}},[]),u("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:"View Detail",onClick:()=>{g.value=!0,k.value=s}},[])])}}]);let n=P({first:50,before:"",text:"",sortBy:["-uid"],filterAction:!1});return{tableColumns:D,inventoryStore:r,openDrawer:c(!1),openAddProduct:f,choiceProduct:a,openAdjustProduct:b,stockLots:y,openProductDetail:g,productDetailItem:k,filterProducts:s=>{n.first=50,n.before="",n.text=s.filterText,n.filterAction=!0,r.fetchProducts(n)},showMoreProducts:s=>{n.first=s.fetchCount,n.before=r.productsPaging?.pageInfo?.endCursor??"",n.text=s.filterText,n.filterAction=!1,r.fetchProducts(n)},countNone:I(()=>r.products?.length+" of "+r.productsPaging.totalCount+" products"),validateMinMax:s=>{},adjustStock:()=>{w(S,{payload:{productUid:a.product.uid,stockLotUid:a.stockLotUid,adjustmentType:a.type,adjust:a.quantity,remarks:a.remarks}},"createStockAjustment").then(s=>{})}}},render(){return t(M,null,[t("div",null,[t("button",{onClick:()=>this.openDrawer=!0,class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},[o("Receive Stock")])]),t(q,{columns:this.tableColumns,data:this.inventoryStore.products,toggleColumns:!1,loading:!1,paginable:!0,pageMeta:{fetchCount:10,hasNextPage:!1,countNone:this.countNone},searchable:!0,filterable:!1,selectable:!1,onOnSearch:e=>this.filterProducts(e),onOnPaginate:e=>this.showMoreProducts(e)},null),t(v,{show:this.openDrawer,onClose:()=>this.openDrawer=!1},{header:()=>"Receive Stock",body:()=>[t(B,{onClose:()=>this.openDrawer=!1},null)]}),t(v,{show:this.openProductDetail,onClose:()=>this.openProductDetail=!1},{header:()=>"Product Details",body:()=>[t(N,{product:this.productDetailItem,onClose:()=>this.openProductDetail=!1},null)]}),this.openAddProduct&&t(x,{onClose:()=>this.openAddProduct=!1,contentWidth:"w-1/4"},{header:()=>t("h3",null,[this.choiceProduct.product?.stockItem?.name,o(" ("),this.choiceProduct.product.name,o(")")]),body:()=>t("form",{action:"post",class:"p-1"},[t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700  text-nowrap"},[o("Product Lot")]),l(t("select",{class:"col-span-3 form-select block w-full mt-1","onUpdate:modelValue":e=>this.choiceProduct.stockLotUid=e},[t("option",null,null),this.stockLots?.map(e=>t("option",{key:e.uid,value:e.uid},[e.lotNumber,o(" ("),e.quantity,o(") ["),U(e.expiryDate,!1),o("]")]))]),[[h,this.choiceProduct.stockLotUid]])]),t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700 text-nowrap"},[o("Quantiy")]),l(t("input",{class:"col-span-3 form-input mt-1 block w-full",type:"number",onChange:this.validateMinMax,"onUpdate:modelValue":e=>this.choiceProduct.quantity=e,placeholder:"Name ..."},null),[[m,this.choiceProduct.quantity]])]),t("hr",null,null),t("button",{type:"button",onClick:()=>{this.inventoryStore.addToBasket(this.choiceProduct.product.uid,this.choiceProduct.stockLotUid,this.choiceProduct.quantity),this.openAddProduct=!1},class:"-mb-4 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline disabled:bg-gray-500",disabled:!this.choiceProduct.stockLotUid},[o("Add to basket")])])}),this.openAdjustProduct&&t(x,{onClose:()=>this.openAdjustProduct=!1,contentWidth:"w-1/4"},{header:()=>t("h3",null,[this.choiceProduct.product?.stockItem?.name,o(" ("),this.choiceProduct.product.name,o(")")]),body:()=>t("form",{action:"post",class:"p-1"},[t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700  text-nowrap"},[o("Product Lot")]),l(t("select",{class:"col-span-3 form-select block w-full mt-1","onUpdate:modelValue":e=>this.choiceProduct.stockLotUid=e},[t("option",null,null),this.stockLots?.map(e=>t("option",{key:e.uid,value:e.uid},[e.lotNumber]))]),[[h,this.choiceProduct.stockLotUid]])]),t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700"},[o("Adjustmet")]),l(t("select",{class:"col-span-3 form-select block w-full mt-1","onUpdate:modelValue":e=>this.choiceProduct.type=e},[t("option",{value:"lost"},[o("Lost")]),t("option",{value:"theft"},[o("Theft")]),t("option",{value:"transfer-out"},[o("Transfer Out")])]),[[h,this.choiceProduct.type]])]),t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700"},[o("Quantiy")]),l(t("input",{class:"col-span-3 form-input mt-1 block w-full",type:"number",onChange:this.validateMinMax,"onUpdate:modelValue":e=>this.choiceProduct.quantity=e,placeholder:"Name ..."},null),[[m,this.choiceProduct.quantity]])]),t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700"},[o("Remarks")]),l(t("textarea",{class:"col-span-3 form-input mt-1 block w-full",rows:"3","onUpdate:modelValue":e=>this.choiceProduct.remarks=e,placeholder:"Remarks ..."},null),[[m,this.choiceProduct.remarks]])]),t("hr",null,null),t("button",{type:"button",onClick:()=>{this.adjustStock(),this.openAdjustProduct=!1},class:"-mb-4 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline disabled:bg-gray-500",disabled:!this.choiceProduct.stockLotUid},[o("Adjust")])])})])}});export{H as InventoryListing,H as default};

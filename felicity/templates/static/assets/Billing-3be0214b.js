import{d as S,I as B,a8 as E,P as p,n as x,r as w,o as u,c,b as e,e as i,v as m,w as D,ad as _,F as h,C as y,t as g,L as b,f as C,ae as M,k as I}from"./index-48799f0c.js";import{u as $,c as j,d as q,e as F,f as L}from"./billing-77a2d981.js";const N={class:"grid grid-cols-12"},R={class:"col-span-6 gap-x-4 pr-4 mb-2"},z=e("h3",{class:"font-semibold text-l text-gray-600"},"Pricing Information",-1),G=e("hr",null,null,-1),H={class:"mt-4"},J={class:""},K={class:"flex justify-start items-center gap-x-4 mb-4"},O=e("span",{class:"col-span-1 text-gray-700"},"Amount: $",-1),Q={class:"col-span-6 gap-x-4 mb-2 border-l-2 border-l-gray-500 pl-4"},W=e("h3",{class:"font-semibold text-l text-gray-600"},"Discounts Information",-1),X=e("hr",null,null,-1),Y={class:"mt-4"},Z={class:"grid grid-cols-2 gap-4"},ee={class:"col-span-1 whitespace-nowrap mb-2 w-full"},te=e("span",{class:"text-gray-700 w-4/12"},"Discount Type",-1),se={class:"w-full"},oe=e("option",null,null,-1),le=["value"],ne={class:"col-span-1 whitespace-nowrap mb-2 w-full"},ie=e("span",{class:"text-gray-700 w-4/12"},"Value Type",-1),ae={class:"w-full"},ue=e("option",null,null,-1),ce=["value"],re={class:"grid grid-cols-4 gap-4 mt-1"},de={class:"col-span-2"},pe=e("span",{class:"col-span-1 text-gray-700"},"Start Date",-1),me={class:"col-span-2"},fe=e("span",{class:"col-span-1 text-gray-700"},"End Date",-1),ve={class:"col-span-2 whitespace-nowrap w-full mb-2"},_e=e("span",{class:"text-gray-700 w-4/12"},"Voucher",-1),he={class:"w-full"},ye=e("option",null,null,-1),ge=["value"],be={class:"grid grid-cols-2 gap-x-4 mt-1"},xe={class:"col-span-1"},we=e("span",{class:"text-gray-700"},"Value Percent",-1),De=e("span",{class:"italic leading text-xs"},"Example: 0.05 for 5%",-1),Pe={class:"col-span-1"},Ae=e("span",{class:"text-gray-700"},"Value Amount",-1),Ue={class:"grid grid-cols-2 gap-4 mt-4 mb-2"},Te={class:"col-span-4 flex justify-start items-center gap-x-4"},ke=e("span",{class:"col-span-1 text-gray-700"},"Is Active",-1),Ve=e("hr",null,null,-1),Se=S({__name:"Billing",props:{target:{type:String,required:!0},targetUid:{type:String,required:!0}},setup(P){const n=$(),{withClientMutation:f}=B(),A=P,{target:a,targetUid:r}=E(A),v=()=>{n.clear(),a?.value==="profile"&&(n.fetchProfilePrice(r.value),n.fetchProfileDiscount(r.value)),a?.value==="analysis"&&(n.fetchAnalysisPrice(r.value),n.fetchAnalysisDiscount(r.value)),n.fetchVouchers()};v(),p(()=>a.value,(l,o)=>v()),p(()=>r.value,(l,o)=>v());const d=x({amount:0});p(()=>n.fetchingPrice,(l,o)=>{l||(a?.value==="profile"&&(d.amount=n.profilePrice?.amount??0),a?.value==="analysis"&&(d.amount=n.analysisPrice?.amount??0))});const U=()=>{const l={...d};a?.value==="profile"?f(j,{uid:pricing?.uid,payload:l},"updateProfilePrice").then():f(q,{uid:pricing?.uid,payload:l},"updateAnalysisPrice").then()},s=x({discountType:"",valueType:"",startDate:"",endDate:"",voucherUid:"",valuePercent:0,valueAmount:0,isActive:!0});p(()=>n.fetchingDiscount,(l,o)=>{if(!l){let t={};a?.value==="profile"&&(t={...n.profileDiscount}),a?.value==="analysis"&&(t={...n.analyisDiscount}),s.discountType=t.discountType,s.valueType=t.valueType,s.startDate=t.startDate,s.endDate=t.endDate,s.voucherUid=t.voucherUid,s.valuePercent=t.valuePercent,s.valueAmount=t.valueAmount,s.isActive=t.isActive}});const T=w(["sale","voucher"]),k=w(["percentage","amount"]),V=()=>{const l={...s};a.value=="profile"?f(F,{uid:discount?.uid,payload:l},"updateProfileDiscount").then():f(L,{uid:discount?.uid,payload:l},"updateAnalysisDiscount").then()};return p(()=>s.discountType,(l,o)=>{l!=="voucher"&&(s.voucherUid=void 0)}),(l,o)=>(u(),c("div",N,[e("section",R,[z,G,e("form",H,[e("div",J,[e("label",K,[O,i(e("input",{class:"form-input mt-1","onUpdate:modelValue":o[0]||(o[0]=t=>d.amount=t),type:"number",min:"0.0",step:"0.1"},null,512),[[m,d.amount]])])]),e("button",{type:"button",onClick:o[1]||(o[1]=D(t=>U(),["prevent"])),class:"border border-sky-800 bg-sky-800 text-white rounded-sm mt-4 px-2 py-1 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Update Pricing ")])]),e("section",Q,[W,X,e("form",Y,[e("div",Z,[e("label",ee,[te,e("div",se,[i(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":o[2]||(o[2]=t=>s.discountType=t)},[oe,(u(!0),c(h,null,y(T.value,t=>(u(),c("option",{key:t,value:t},g(t),9,le))),128))],512),[[_,s.discountType]])])]),e("label",ne,[ie,e("div",ae,[i(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":o[3]||(o[3]=t=>s.valueType=t)},[ue,(u(!0),c(h,null,y(k.value,t=>(u(),c("option",{key:t,value:t},g(t),9,ce))),128))],512),[[_,s.valueType]])])])]),e("div",re,[e("label",de,[pe,i(e("input",{class:"form-input w-full","onUpdate:modelValue":o[4]||(o[4]=t=>s.startDate=t),type:"date"},null,512),[[m,s.startDate]])]),e("label",me,[fe,i(e("input",{class:"form-input w-full","onUpdate:modelValue":o[5]||(o[5]=t=>s.endDate=t),type:"date"},null,512),[[m,s.endDate]])]),i(e("label",ve,[_e,e("div",he,[i(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":o[6]||(o[6]=t=>s.voucherUid=t)},[ye,(u(!0),c(h,null,y(C(n).vouchers,t=>(u(),c("option",{key:t.uid,value:t.uid},g(t.name),9,ge))),128))],512),[[_,s.voucherUid]])])],512),[[b,s.discountType==="voucher"]])]),e("div",be,[i(e("label",xe,[we,i(e("input",{class:"form-input w-full","onUpdate:modelValue":o[7]||(o[7]=t=>s.valuePercent=t),type:"number",step:"0.01",min:"0.00",max:"1"},null,512),[[m,s.valuePercent]]),De],512),[[b,s.valueType==="percentage"]]),i(e("label",Pe,[Ae,i(e("input",{class:"form-input w-full","onUpdate:modelValue":o[8]||(o[8]=t=>s.valueAmount=t),type:"number",step:"0.1",min:"0.0"},null,512),[[m,s.valueAmount]])],512),[[b,s.valueType==="amount"]])]),e("div",Ue,[e("label",Te,[ke,i(e("input",{class:"form-checkbox","onUpdate:modelValue":o[9]||(o[9]=t=>s.isActive=t),type:"checkbox"},null,512),[[M,s.isActive]])])]),Ve,e("button",{type:"button",onClick:o[10]||(o[10]=D(t=>V(),["prevent"])),class:"border border-sky-800 bg-sky-800 text-white rounded-sm mt-4 px-2 py-1 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Update Discount ")])])]))}}),Ce=I(Se,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/analyses/Billing.vue"]]);export{Ce as default};

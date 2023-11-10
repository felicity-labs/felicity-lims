import{_ as T,A as U,t as D,bh as N,bi as V,w as L}from"./shipment-53265c2d.js";import{f as O,G as j,T as B,r as p,c as $,w as Y,d as q,h as r,k as i,x as e,F as m,ak as w,D as d,u as l,y as k,j as K,A as I,ag as y,i as P,_ as G}from"./_plugin-vue_export-helper-dacf3d65.js";import{d as W,v as A,a as z}from"./runtime-dom.esm-bundler-98433118.js";const H=e("hr",null,null,-1),J={class:"overflow-x-auto mt-4"},Q={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},X={class:"min-w-full"},Z=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Interim Key"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Result Value"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Intrument"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),ee={class:"bg-white"},te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},se={class:"flex items-center"},oe={class:"text-sm leading-5 text-gray-800"},ne={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},le={class:"text-sm leading-5 text-sky-800"},ae={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},re={class:"text-sm leading-5 text-sky-800"},ie={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},de=["onClick"],ue={action:"post",class:"p-1"},ce={class:"grid grid-cols-3 gap-x-4 mb-4"},pe={class:"block col-span-1 mb-2"},me=e("span",{class:"text-gray-700 w-4/12"},"Instrument",-1),ye={class:"w-full"},_e=e("option",null,null,-1),be=["value"],he={class:"block col-span-1 mb-2"},fe=e("span",{class:"text-gray-700"},"Interim",-1),ve={class:"block col-span-1 mb-2"},xe=e("span",{class:"text-gray-700"},"Result",-1),ge=e("hr",null,null,-1),we=O({__name:"InterimFields",props:{analysis:{type:Object,required:!0,default:()=>({})},analysisUid:{type:String,required:!0,default:0}},setup(S){const _=S,C=j(()=>T(()=>import("./SimpleModal-9e28c074.js"),["assets/SimpleModal-9e28c074.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/runtime-dom.esm-bundler-98433118.js","assets/SimpleModal-f645a074.css"])),b=U(),h=D(),{withClientMutation:f}=L(),{analysis:v}=B(_);let a=p(!1),x=p(""),o=$({});const u=p(!0);Y(()=>_.analysisUid,(n,t)=>{}),h.fetchInstruments();const c=q(()=>h.getInstruments);function E(){o.key=+o.key;const n={...o,analysisUid:v?.value?.uid};f(N,{payload:n},"createAnalysisInterim").then(t=>b.addAnalysisInterim(t))}function R(){const n={...o};delete n.uid,delete n.__typename,f(V,{uid:o.uid,payload:n},"updateAnalysisInterim").then(t=>b.updateAnalysisInterim(t))}function g(n,t={}){u.value=n,a.value=!0,x.value=(n?"CREATE":"EDIT")+" ANALYSIS INTERIM",n?Object.assign(o,{key:null,value:null}):Object.assign(o,{...t})}function F(){u.value===!0&&E(),u.value===!1&&R(),a.value=!1}const M=n=>{const t=c?.value?.findIndex(s=>s.uid===n);return c?.value[t]?.name||"unknown"};return(n,t)=>(r(),i(m,null,[e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=s=>g(!0))},"Add Interim Field"),H,e("div",J,[e("div",Q,[e("table",X,[Z,e("tbody",ee,[(r(!0),i(m,null,w(l(v)?.interims,s=>(r(),i("tr",{key:s?.uid},[e("td",te,[e("div",se,[e("div",null,[e("div",oe,d(s?.key),1)])])]),e("td",ne,[e("div",le,d(s?.value),1)]),e("td",ae,[e("div",re,d(M(s?.instrumentUid)),1)]),e("td",ie,[e("button",{onClick:ke=>g(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,de)])]))),128))])])])]),k(" Result Options Form Modal "),l(a)?(r(),K(l(C),{key:0,onClose:t[5]||(t[5]=s=>P(a)?a.value=!1:a=!1),contentWidth:"w-2/4"},{header:I(()=>[e("h3",null,d(l(x)),1)]),body:I(()=>[e("form",ue,[e("div",ce,[e("label",pe,[me,e("div",ye,[y(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":t[1]||(t[1]=s=>l(o).instrumentUid=s)},[_e,(r(!0),i(m,null,w(l(c),s=>(r(),i("option",{key:s?.uid,value:s.uid},d(s?.name),9,be))),128))],512),[[W,l(o).instrumentUid]])])]),e("label",he,[fe,y(e("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=s=>l(o).key=s),placeholder:"Interim Key ..."},null,512),[[A,l(o).key]])]),e("label",ve,[xe,y(e("input",{type:"text",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[3]||(t[3]=s=>l(o).value=s),placeholder:"Resut Value ..."},null,512),[[A,l(o).value]])])]),ge,e("button",{type:"button",onClick:t[4]||(t[4]=z(s=>F(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):k("v-if",!0)],64))}}),Ce=G(we,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/admin/analyses/services/InterimFields.vue"]]);export{Ce as default};

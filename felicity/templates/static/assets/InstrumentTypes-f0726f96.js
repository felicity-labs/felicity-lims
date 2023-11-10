import{_ as M,t as A,w as N}from"./shipment-53265c2d.js";import{f as S,G as j,r as c,d as F,c as R,h as a,k as d,x as e,F as f,ak as U,D as h,u as l,y,j as V,A as v,ag as b,i as B,_ as P}from"./_plugin-vue_export-helper-dacf3d65.js";import{A as $,E as O}from"./instrument.mutations-db9aed1a.js";import{a as g,v as T}from"./runtime-dom.esm-bundler-98433118.js";const L={class:""},Y={class:"container w-full my-4"},z=e("hr",null,null,-1),G=e("hr",null,null,-1),q=e("hr",null,null,-1),H={class:"grid grid-cols-12 gap-4 mt-2"},J={class:"col-span-5"},K=["onClick"],Q={class:"cursor-pointer"},W={class:"flex-grow p-1"},X={class:"font-medium text-gray-500 hover:text-gray-700 flex justify-between"},Z=e("span",{class:"text-sm text-gray-500"},null,-1),ee=["onClick"],te=e("svg",{class:"w-4 h-4 fill-current",viewBox:"0 0 20 20"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1),se=[te],ne={action:"post",class:"p-1"},oe={class:"grid grid-cols-2 gap-x-4 mb-4"},le={class:"block col-span-2 mb-2"},ie=e("span",{class:"text-gray-700"},"Instrument Type",-1),re={class:"block col-span-2 mb-2"},ae=e("span",{class:"text-gray-700"},"Description",-1),ue=e("hr",null,null,-1),ce=S({__name:"InstrumentTypes",setup(de){const x=j(()=>M(()=>import("./SimpleModal-9e28c074.js"),["assets/SimpleModal-9e28c074.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/runtime-dom.esm-bundler-98433118.js","assets/SimpleModal-f645a074.css"])),r=A(),{withClientMutation:m}=N();let i=c(!1),p=c("");const u=c(!0);r.fetchInstrumentTypes();const k=F(()=>r.getInstrumentTypes);let s=R({});function w(){const o={name:s.name,description:s.description};m($,{payload:o},"createInstrumentType").then(t=>r.addInstrumentType(t))}function I(){const o={name:s.name,description:s.description};m(O,{uid:s.uid,payload:o},"updateInstrumentType").then(t=>r.updateInstrumentType(t))}function E(o){Object.assign(s,{...o})}function _(o,t={}){u.value=o,i.value=!0,p.value=(o?"CREATE":"EDIT")+" INSTRUMENT TYPE",o?Object.assign(s,{}):Object.assign(s,{...t})}function C(){u.value===!0&&w(),u.value===!1&&I(),i.value=!1}return(o,t)=>(a(),d(f,null,[e("div",L,[e("div",Y,[z,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=n=>_(!0))}," Add Instrument Type"),G]),q,e("div",H,[e("section",J,[e("ul",null,[(a(!0),d(f,null,U(l(k),n=>(a(),d("li",{key:n?.uid,onClick:g(D=>E(n),["prevent","stop"]),class:"flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold bg-white p-1 mb-2"},[e("span",Q,[e("div",W,[e("div",X,[e("span",null,h(n?.name),1),Z])])]),e("button",{onClick:D=>_(!1,n),class:"ml-4 inline-flex items-center justify-center w-8 h-8 mr-2 border-sky-800 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"},se,8,ee)],8,K))),128))])])])]),y(" instType Form Modal "),l(i)?(a(),V(l(x),{key:0,onClose:t[4]||(t[4]=n=>B(i)?i.value=!1:i=!1)},{header:v(()=>[e("h3",null,h(l(p)),1)]),body:v(()=>[e("form",ne,[e("div",oe,[e("label",le,[ie,b(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=n=>l(s).name=n),placeholder:"Name ..."},null,512),[[T,l(s).name]])]),e("label",re,[ae,b(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=n=>l(s).description=n),placeholder:"Description ..."},null,512),[[T,l(s).description]])])]),ue,e("button",{type:"button",onClick:t[3]||(t[3]=g(n=>C(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):y("v-if",!0)],64))}}),he=P(ce,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/admin/instruments/InstrumentTypes.vue"]]);export{he as default};
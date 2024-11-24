import{d as D,I as R,a8 as V,r as m,n as M,P as N,p as T,o as i,c as r,b as e,F as p,C as w,t as d,f as l,y as B,z as k,e as y,ad as O,v as I,w as j,i as $,B as L,j as P,_ as q,k as K}from"./index-dcd7b802.js";import{N as z,O as W}from"./analyses.mutations-ac82bb91.js";import{u as Y}from"./analysis-734a1bdc.js";import{u as G}from"./setup-6f06eb41.js";import"./_queries-f2a7ab3f.js";const H=e("hr",null,null,-1),J={class:"overflow-x-auto mt-4"},Q={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},X={class:"min-w-full"},Z=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Interim Key"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Result Value"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Intrument"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),ee={class:"bg-white"},te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},se={class:"flex items-center"},oe={class:"text-sm leading-5 text-gray-800"},ne={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},le={class:"text-sm leading-5 text-sky-800"},ae={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ie={class:"text-sm leading-5 text-sky-800"},re={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},de=["onClick"],ue={action:"post",class:"p-1"},ce={class:"grid grid-cols-3 gap-x-4 mb-4"},me={class:"block col-span-1 mb-2"},pe=e("span",{class:"text-gray-700 w-4/12"},"Instrument",-1),ye={class:"w-full"},be=e("option",null,null,-1),_e=["value"],fe={class:"block col-span-1 mb-2"},he=e("span",{class:"text-gray-700"},"Interim",-1),ve={class:"block col-span-1 mb-2"},xe=e("span",{class:"text-gray-700"},"Result",-1),ge=e("hr",null,null,-1),we=D({__name:"InterimFields",props:{analysis:{type:Object,required:!0,default:()=>({})},analysisUid:{type:String,required:!0,default:0}},setup(A){const C=P(()=>q(()=>import("./FelModal-80650623.js"),["assets/FelModal-80650623.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),b=Y(),_=G(),{withClientMutation:f}=R(),h=A,{analysis:v}=V(h);let a=m(!1),x=m(""),o=M({});const u=m(!0);N(()=>h.analysisUid,(n,t)=>{}),_.fetchInstruments();const c=T(()=>_.getInstruments);function S(){o.key=+o.key;const n={...o,analysisUid:v?.value?.uid};f(z,{payload:n},"createAnalysisInterim").then(t=>b.addAnalysisInterim(t))}function U(){const n={...o};delete n.uid,delete n.__typename,f(W,{uid:o.uid,payload:n},"updateAnalysisInterim").then(t=>b.updateAnalysisInterim(t))}function g(n,t={}){u.value=n,a.value=!0,x.value=(n?"CREATE":"EDIT")+" ANALYSIS INTERIM",n?Object.assign(o,{key:null,value:null}):Object.assign(o,{...t})}function E(){u.value===!0&&S(),u.value===!1&&U(),a.value=!1}const F=n=>{const t=c?.value?.findIndex(s=>s.uid===n);return c?.value[t]?.name||"unknown"};return(n,t)=>(i(),r(p,null,[e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=s=>g(!0))},"Add Interim Field"),H,e("div",J,[e("div",Q,[e("table",X,[Z,e("tbody",ee,[(i(!0),r(p,null,w(l(v)?.interims,s=>(i(),r("tr",{key:s?.uid},[e("td",te,[e("div",se,[e("div",null,[e("div",oe,d(s?.key),1)])])]),e("td",ne,[e("div",le,d(s?.value),1)]),e("td",ae,[e("div",ie,d(F(s?.instrumentUid)),1)]),e("td",re,[e("button",{onClick:ke=>g(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,de)])]))),128))])])])]),l(a)?(i(),B(l(C),{key:0,onClose:t[5]||(t[5]=s=>$(a)?a.value=!1:a=!1),contentWidth:"w-2/4"},{header:k(()=>[e("h3",null,d(l(x)),1)]),body:k(()=>[e("form",ue,[e("div",ce,[e("label",me,[pe,e("div",ye,[y(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":t[1]||(t[1]=s=>l(o).instrumentUid=s)},[be,(i(!0),r(p,null,w(c.value,s=>(i(),r("option",{key:s?.uid,value:s.uid},d(s?.name),9,_e))),128))],512),[[O,l(o).instrumentUid]])])]),e("label",fe,[he,y(e("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=s=>l(o).key=s),placeholder:"Interim Key ..."},null,512),[[I,l(o).key]])]),e("label",ve,[xe,y(e("input",{type:"text",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[3]||(t[3]=s=>l(o).value=s),placeholder:"Resut Value ..."},null,512),[[I,l(o).value]])])]),ge,e("button",{type:"button",onClick:t[4]||(t[4]=j(s=>E(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):L("",!0)],64))}}),Ee=K(we,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/analyses/services/InterimFields.vue"]]);export{Ee as default};

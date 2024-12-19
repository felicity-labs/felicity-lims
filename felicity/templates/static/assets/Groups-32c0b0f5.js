import{d as S,I as T,p as x,r as c,n as I,o as d,c as p,b as e,F as g,C as w,t as m,y as k,f as r,z as M,A,e as _,v as O,ad as P,B as R,ae as D,w as L,i as B,j as F,_ as V,K as n,b8 as j,b9 as U,k as $}from"./index-7210a26e.js";import{u as z}from"./user-08d5de87.js";import"./_queries-db036553.js";const K={class:"container w-full my-4"},H=e("hr",null,null,-1),Y=e("hr",null,null,-1),Q=e("hr",null,null,-1),W={class:"overflow-x-auto mt-4"},q={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},J={class:"min-w-full"},X=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Group Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Access Pages "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),Z={class:"bg-white"},ee={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},te={class:"flex items-center"},oe={class:"text-sm leading-5 text-gray-800"},se={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ne={class:"text-sm leading-5 text-sky-800"},le={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},re=["onClick"],ae={action:"post",class:"p-1"},ie={class:"grid grid-cols-2 gap-x-4 mb-4"},de={class:"block col-span-2 mb-2"},ue=e("span",{class:"text-gray-700"},"Group Name",-1),ce={class:"block col-span-2 mb-2"},pe=e("span",{class:"text-gray-700"},"Pages",-1),me=["size"],be=["value"],ge={for:"toggle",class:"text-xs text-gray-700 mr-4"},_e={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},he=e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1),fe=e("hr",null,null,-1),ve=S({__name:"Groups",setup(ye){const E=F(()=>V(()=>import("./FelModal-b8e55526.js"),["assets/FelModal-b8e55526.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),h=[n.ADMINISTRATION,n.DASHBOARD,n.CLIENTS,n.PATIENTS,n.PATIENTS_COMPACT,n.SAMPLES,n.QC_SAMPLES,n.WORKSHEETS,n.NOTICE_MANAGER,n.BIO_BANKING,n.INVENTORY,n.REFERRAL];let i=z();const{withClientMutation:f}=T();i.fetchGroupsAndPermissions();const C=x(()=>i.getGroups);c("permissions");let a=c(!1),v=c("");const b=c(!0);let l=I({});function y(s,o={}){b.value=s,a.value=!0,v.value=(s?"CREATE":"EDIT")+" ANALYSES PROFILE",s?Object.assign(l,{name:"",pages:[]}):Object.assign(l,{...o})}function G(){const s={...l},o=s.pages;s.pages=o.join(","),b.value===!0&&f(j,{payload:s},"createGroup").then(t=>i.addGroup(t)),b.value===!1&&f(U,{uid:l?.uid,payload:{name:s.name,pages:s.pages}},"updateGroup").then(t=>i.updateGroup(t)),a.value=!1}const N=(s,o)=>s?.reduce(function(t,u){return(t[u[o]]=t[u[o]]||[]).push(u),t},{});return x(()=>Array.from(Object.entries(N(i.getPermissions,"target")))),(s,o)=>(d(),p(g,null,[e("div",K,[H,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:o[0]||(o[0]=t=>y(!0))},"Add Group"),Y]),Q,e("div",W,[e("div",q,[e("table",J,[X,e("tbody",Z,[(d(!0),p(g,null,w(C.value,t=>(d(),p("tr",{key:t.uid},[e("td",ee,[e("div",te,[e("div",oe,m(t.name),1)])]),e("td",se,[e("div",ne,m(t.pages),1)]),e("td",le,[e("button",{onClick:u=>y(!1,t),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500 rounded-sm transition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Edit ",8,re)])]))),128))])])])]),k(" Group Form Modal "),r(a)?(d(),M(r(E),{key:0,onClose:o[5]||(o[5]=t=>B(a)?a.value=!1:a=!1)},{header:A(()=>[e("h3",null,m(r(v)),1)]),body:A(()=>[e("form",ae,[e("div",ie,[e("label",de,[ue,_(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[1]||(o[1]=t=>r(l).name=t),placeholder:"Name ..."},null,512),[[O,r(l).name]])]),e("label",ce,[pe,_(e("select",{name:"controlLevels",id:"controlLevels","onUpdate:modelValue":o[2]||(o[2]=t=>r(l).pages=t),class:"form-input mt-1 block w-full",multiple:"",size:h.length},[(d(),p(g,null,w(h,t=>e("option",{key:t,value:t},m(t),9,be)),64))],8,me),[[P,r(l).pages]])]),e("label",ge,[R("Active "),e("div",_e,[_(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":o[3]||(o[3]=t=>r(l).active=t),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[D,r(l).active]]),he])])]),fe,e("button",{type:"button",onClick:o[4]||(o[4]=L(t=>G(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):k("v-if",!0)],64))}}),Ae=$(ve,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/users/Groups.vue"]]);export{Ae as default};

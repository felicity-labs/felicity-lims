import{_ as Q,w as E,aX as A,aY as D,q as I}from"./billing-356772f3.js";import{f as S,G as F,r as _,c as M,d as T,h as c,k as v,x as e,F as f,ak as V,D as b,u as a,y,j as B,A as g,ag as $,i as j,p as N,e as O,_ as R}from"./_plugin-vue_export-helper-3f67fb71.js";import{v as q,a as P}from"./runtime-dom.esm-bundler-6e07ef74.js";const i=r=>(N("data-v-89951d03"),r=r(),O(),r),U={class:"container w-full my-4"},G=i(()=>e("hr",null,null,-1)),X=i(()=>e("hr",null,null,-1)),Y={class:"overflow-x-auto mt-4"},z={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},H={class:"min-w-full"},J=i(()=>e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Level"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1)),K={class:"bg-white"},W={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"flex items-center"},ee={class:"text-sm leading-5 text-gray-800"},te={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},se=["onClick"],oe={action:"post",class:"p-1"},le={class:"grid grid-cols-2 gap-x-4 mb-4"},ne={class:"block col-span-2 mb-2"},ae=i(()=>e("span",{class:"text-gray-700"},"QC Level",-1)),ie=i(()=>e("hr",null,null,-1)),re=S({__name:"QCLevels",setup(r){const x=F(()=>Q(()=>import("./SimpleModal-1f91868a.js"),["assets/SimpleModal-1f91868a.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/SimpleModal-f645a074.css"])),d=E(),{withClientMutation:p}=I();let n=_(!1),h=_(""),l=M({});const u=_(!0);d.fetchQCLevels();const w=T(()=>d.getQCLevels);function L(){p(A,{level:l.level},"createQcLevel").then(s=>d.addQcLevel(s))}function k(){p(D,{uid:l.uid,level:l.level},"updateQcLevel").then(s=>d.updateQcLevel(s))}function m(s,t={}){u.value=s,n.value=!0,h.value=(s?"CREATE":"EDIT")+" QC Level",s?Object.assign(l,{}):Object.assign(l,{...t})}function C(){u.value===!0&&L(),u.value===!1&&k(),n.value=!1}return(s,t)=>(c(),v(f,null,[e("div",U,[G,e("button",{onClick:t[0]||(t[0]=o=>m(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add QC Level"),X,e("div",Y,[e("div",z,[e("table",H,[J,e("tbody",K,[(c(!0),v(f,null,V(a(w),o=>(c(),v("tr",{key:o?.uid},[e("td",W,[e("div",Z,[e("div",null,[e("div",ee,b(o?.level),1)])])]),e("td",te,[e("button",{onClick:de=>m(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,se)])]))),128))])])])])]),y(" Location Edit Form Modal "),a(n)?(c(),B(a(x),{key:0,onClose:t[3]||(t[3]=o=>j(n)?n.value=!1:n=!1)},{header:g(()=>[e("h3",null,b(a(h)),1)]),body:g(()=>[e("form",oe,[e("div",le,[e("label",ne,[ae,$(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=o=>a(l).level=o),placeholder:"Level/Name ..."},null,512),[[q,a(l).level]])])]),ie,e("button",{type:"button",onClick:t[2]||(t[2]=P(o=>C(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):y("v-if",!0)],64))}});const ve=R(re,[["__scopeId","data-v-89951d03"],["__file","/home/aurthurm/Development/felicity-lims/webapp/views/admin/analyses/QCLevels.vue"]]);export{ve as default};
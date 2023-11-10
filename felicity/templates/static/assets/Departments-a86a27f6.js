import{_ as w,t as k,aO as D,aP as E,w as A}from"./shipment-53265c2d.js";import{f as C,G as T,r as d,c as M,d as N,h as i,k as c,x as e,F as h,ak as F,D as b,u as r,y as f,j as O,A as y,ag as P,i as R,_ as S}from"./_plugin-vue_export-helper-dacf3d65.js";import{v as j,a as B}from"./runtime-dom.esm-bundler-98433118.js";const V={class:"container w-full my-4"},$=e("hr",null,null,-1),L=e("hr",null,null,-1),U={class:"overflow-x-auto mt-4"},I={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},G={class:"min-w-full"},H=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"HOD"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),q={class:"bg-white"},z={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},J={class:"flex items-center"},K={class:"text-sm leading-5 text-gray-800"},Q=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"text-sm leading-5 text-sky-800"},"Aurthur")],-1),W={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},X=["onClick"],Y={action:"post",class:"p-1"},Z={class:"grid grid-cols-2 gap-x-4 mb-4"},ee={class:"block col-span-2 mb-2"},te=e("span",{class:"text-gray-700"},"Department Name",-1),se=e("hr",null,null,-1),oe=C({__name:"Departments",setup(ae){const v=T(()=>w(()=>import("./SimpleModal-9e28c074.js"),["assets/SimpleModal-9e28c074.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/runtime-dom.esm-bundler-98433118.js","assets/SimpleModal-f645a074.css"])),l=k(),{withClientMutation:u}=A();let n=d(!1),m=d(""),a=M({});const p=d(!0);l.fetchDepartments({});const g=N(()=>l.getDepartments);function _(s,t){p.value=s,n.value=!0,m.value=(s?"CREATE":"EDIT")+" Department",s?Object.assign(a,{...new Object}):Object.assign(a,{...t})}function x(){p.value===!0?u(D,{payload:{name:a.name}},"createDepartment").then(s=>l.addDepartment(s)):u(E,{uid:a.uid,payload:{name:a.name}},"updateDepartment").then(s=>l.updateDepartment(s)),n.value=!1}return(s,t)=>(i(),c(h,null,[e("div",V,[$,e("button",{onClick:t[0]||(t[0]=o=>_(!0,null)),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add Department"),L,e("div",U,[e("div",I,[e("table",G,[H,e("tbody",q,[(i(!0),c(h,null,F(r(g),o=>(i(),c("tr",{key:o?.uid},[e("td",z,[e("div",J,[e("div",null,[e("div",K,b(o?.name),1)])])]),Q,e("td",W,[e("button",{onClick:ne=>_(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,X)])]))),128))])])])])]),f(" Location Edit Form Modal "),r(n)?(i(),O(r(v),{key:0,onClose:t[3]||(t[3]=o=>R(n)?n.value=!1:n=!1)},{header:y(()=>[e("h3",null,b(r(m)),1)]),body:y(()=>[e("form",Y,[e("div",Z,[e("label",ee,[te,P(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=o=>r(a).name=o),placeholder:"Name ..."},null,512),[[j,r(a).name]])])]),se,e("button",{type:"button",onClick:t[2]||(t[2]=B(o=>x(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):f("v-if",!0)],64))}}),de=S(oe,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/admin/laboratory/Departments.vue"]]);export{de as default};
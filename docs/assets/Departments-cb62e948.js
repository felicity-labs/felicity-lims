import{_ as w,n as k,aL as D,aM as E,q as A}from"./billing-356772f3.js";import{f as C,G as T,r as c,c as M,d as N,h as i,k as u,x as e,F as _,ak as F,D as f,y as d,u as r,j as O,A as y,ag as P,i as R,_ as S}from"./_plugin-vue_export-helper-3f67fb71.js";import{v as j,a as B}from"./runtime-dom.esm-bundler-6e07ef74.js";const L={class:"container w-full my-4"},V=e("hr",null,null,-1),$=e("hr",null,null,-1),U={class:"overflow-x-auto mt-4"},I={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},q={class:"min-w-full"},G=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),d(' <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">HOD</th> '),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),H={class:"bg-white"},z={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},J={class:"flex items-center"},K={class:"text-sm leading-5 text-gray-800"},Q={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},W=["onClick"],X={action:"post",class:"p-1"},Y={class:"grid grid-cols-2 gap-x-4 mb-4"},Z={class:"block col-span-2 mb-2"},ee=e("span",{class:"text-gray-700"},"Department Name",-1),te=e("hr",null,null,-1),se=C({__name:"Departments",setup(oe){const v=T(()=>w(()=>import("./SimpleModal-1f91868a.js"),["assets/SimpleModal-1f91868a.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/SimpleModal-f645a074.css"])),l=k(),{withClientMutation:m}=A();let n=c(!1),p=c(""),a=M({});const b=c(!0);l.fetchDepartments({});const g=N(()=>l.getDepartments);function h(s,t){b.value=s,n.value=!0,p.value=(s?"CREATE":"EDIT")+" Department",s?Object.assign(a,{...new Object}):Object.assign(a,{...t})}function x(){b.value===!0?m(D,{payload:{name:a.name}},"createDepartment").then(s=>l.addDepartment(s)):m(E,{uid:a.uid,payload:{name:a.name}},"updateDepartment").then(s=>l.updateDepartment(s)),n.value=!1}return(s,t)=>(i(),u(_,null,[e("div",L,[V,e("button",{onClick:t[0]||(t[0]=o=>h(!0,null)),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add Department"),$,e("div",U,[e("div",I,[e("table",q,[G,e("tbody",H,[(i(!0),u(_,null,F(r(g),o=>(i(),u("tr",{key:o?.uid},[e("td",z,[e("div",J,[e("div",null,[e("div",K,f(o?.name),1)])])]),d(` <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">\r
                    <div class="text-sm leading-5 text-sky-800"></div>\r
                    </td> `),e("td",Q,[e("button",{onClick:ae=>h(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,W)])]))),128))])])])])]),d(" Location Edit Form Modal "),r(n)?(i(),O(r(v),{key:0,onClose:t[3]||(t[3]=o=>R(n)?n.value=!1:n=!1)},{header:y(()=>[e("h3",null,f(r(p)),1)]),body:y(()=>[e("form",X,[e("div",Y,[e("label",Z,[ee,P(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=o=>r(a).name=o),placeholder:"Name ..."},null,512),[[j,r(a).name]])])]),te,e("button",{type:"button",onClick:t[2]||(t[2]=B(o=>x(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):d("v-if",!0)],64))}}),ie=S(se,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/admin/laboratory/Departments.vue"]]);export{ie as default};

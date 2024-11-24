import{d as D,I as B,r as c,n as T,p as y,o as l,c as u,b as e,F as b,C as j,t as d,f as n,y as I,z as f,g as N,i as g,B as O,j as x,_ as v,k as V}from"./index-dcd7b802.js";import{u as F}from"./analysis-734a1bdc.js";import{u as L}from"./setup-6f06eb41.js";import"./_queries-f2a7ab3f.js";const P={class:""},R={class:"container w-full my-4"},$=e("hr",null,null,-1),U=e("hr",null,null,-1),z=e("hr",null,null,-1),H={class:"overflow-x-auto mt-4"},Y={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},q={class:"min-w-full"},G=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Instruments"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Analyses"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),J={class:"bg-white"},K={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Q={class:"text-sm leading-5 text-gray-800"},W={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},X={class:"text-sm leading-5 text-gray-800"},Z={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ee={class:"text-sm leading-5 text-sky-800"},te={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},se=["onClick"],oe=D({__name:"Methods",setup(re){const w=x(()=>v(()=>import("./FelModal-80650623.js"),["assets/FelModal-80650623.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),k=x(()=>v(()=>import("./MethodForm-92711ed0.js"),["assets/MethodForm-92711ed0.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/instrument.mutations-86534c8a.js","assets/analysis-734a1bdc.js","assets/setup-6f06eb41.js","assets/_queries-f2a7ab3f.js","assets/vue-multiselect-a538cd7c.css"])),m=F(),h=L();B();let o=c(!1),p=c("");const A=c(!0);let a=T({});const E={first:1e3,after:"",text:"",sortBy:["name"]};m.fetchAnalysesServices(E);const C=y(()=>m.getAnalysesServicesSimple);h.fetchMethods();const S=y(()=>h.getMethods);function _(r,t={}){A.value=r,o.value=!0,p.value=(r?"CREATE":"EDIT")+" ANALYSES METHOD",r?Object.assign(a,{}):Object.assign(a,{...t})}function M(r){let t=[];return C.value?.forEach(s=>{s?.methods?.some(i=>i.uid==r?.uid)&&t.push(s?.name)}),t.join(", ")}return(r,t)=>(l(),u(b,null,[e("div",P,[e("div",R,[$,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=s=>_(!0))}," Add Method"),U]),z,e("div",H,[e("div",Y,[e("table",q,[G,e("tbody",J,[(l(!0),u(b,null,j(S.value,s=>(l(),u("tr",{key:s?.uid},[e("td",K,[e("div",Q,d(s?.name),1)]),e("td",W,[e("div",X,d(s?.instruments?.map(i=>i?.name)?.join(",")),1)]),e("td",Z,[e("div",ee,d(M(s)),1)]),e("td",te,[e("button",{onClick:i=>_(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,se)])]))),128))])])])])]),n(o)?(l(),I(n(w),{key:0,onClose:t[2]||(t[2]=s=>g(o)?o.value=!1:o=!1)},{header:f(()=>[e("h3",null,d(n(p)),1)]),body:f(()=>[N(n(k),{method:n(a),methodUid:n(a)?.uid,onClose:t[1]||(t[1]=s=>g(o)?o.value=!1:o=!1)},null,8,["method","methodUid"])]),_:1})):O("",!0)],64))}}),de=V(oe,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/instruments/Methods.vue"]]);export{de as default};

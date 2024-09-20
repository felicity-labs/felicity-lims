import{d as D,as as T,L as j,r as c,C as B,D as y,o as l,c as u,b as e,F as b,p as L,t as i,f as n,q as N,G as f,g as O,i as g,x as V,j as x,_ as v,k as F}from"./index-73e47413.js";const I={class:""},P={class:"container w-full my-4"},R=e("hr",null,null,-1),$=e("hr",null,null,-1),U=e("hr",null,null,-1),q={class:"overflow-x-auto mt-4"},G={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},H={class:"min-w-full"},Y=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Instruments"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Analyses"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),z={class:"bg-white"},J={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},K={class:"text-sm leading-5 text-gray-800"},Q={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},W={class:"text-sm leading-5 text-gray-800"},X={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"text-sm leading-5 text-sky-800"},ee={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},te=["onClick"],se=D({__name:"Methods",setup(oe){const w=x(()=>v(()=>import("./FelModal-344bef25.js"),["assets/FelModal-344bef25.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/FelModal-a7d23795.css"])),k=x(()=>v(()=>import("./MethodForm-52a0a716.js"),["assets/MethodForm-52a0a716.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/instrument.mutations-b9a77351.js","assets/vue-multiselect-a538cd7c.css"])),h=T(),_=j();let o=c(!1),m=c("");const A=c(!0);let a=B({});const E={first:1e3,after:"",text:"",sortBy:["name"]};h.fetchAnalysesServices(E);const C=y(()=>h.getAnalysesServicesSimple);_.fetchMethods();const S=y(()=>_.getMethods);function p(r,t={}){A.value=r,o.value=!0,m.value=(r?"CREATE":"EDIT")+" ANALYSES METHOD",r?Object.assign(a,{}):Object.assign(a,{...t})}function M(r){let t=[];return C.value?.forEach(s=>{s?.methods?.some(d=>d.uid==r?.uid)&&t.push(s?.name)}),t.join(", ")}return(r,t)=>(l(),u(b,null,[e("div",I,[e("div",P,[R,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=s=>p(!0))}," Add Method"),$]),U,e("div",q,[e("div",G,[e("table",H,[Y,e("tbody",z,[(l(!0),u(b,null,L(S.value,s=>(l(),u("tr",{key:s?.uid},[e("td",J,[e("div",K,i(s?.name),1)]),e("td",Q,[e("div",W,i(s?.instruments?.map(d=>d?.name)?.join(",")),1)]),e("td",X,[e("div",Z,i(M(s)),1)]),e("td",ee,[e("button",{onClick:d=>p(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,te)])]))),128))])])])])]),n(o)?(l(),N(n(w),{key:0,onClose:t[2]||(t[2]=s=>g(o)?o.value=!1:o=!1)},{header:f(()=>[e("h3",null,i(n(m)),1)]),body:f(()=>[O(n(k),{method:n(a),methodUid:n(a)?.uid,onClose:t[1]||(t[1]=s=>g(o)?o.value=!1:o=!1)},null,8,["method","methodUid"])]),_:1})):V("",!0)],64))}}),ne=F(se,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/instruments/Methods.vue"]]);export{ne as default};

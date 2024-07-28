import{d as T,as as j,L as B,r as c,C as F,D as y,o as d,c as u,b as e,F as b,p as L,t as i,x as f,f as n,q as N,G as g,g as O,i as x,j as v,_ as w,k as P}from"./index-03fd00e9.js";const V={class:""},I={class:"container w-full my-4"},R=e("hr",null,null,-1),$=e("hr",null,null,-1),U=e("hr",null,null,-1),q={class:"overflow-x-auto mt-4"},G={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},H={class:"min-w-full"},Y=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Instruments"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Analyses"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),z={class:"bg-white"},J={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},K={class:"text-sm leading-5 text-gray-800"},Q={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},W={class:"text-sm leading-5 text-gray-800"},X={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"text-sm leading-5 text-sky-800"},ee={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},te=["onClick"],se=T({__name:"Methods",setup(oe){const k=v(()=>w(()=>import("./FelModal-78db0624.js"),["assets/FelModal-78db0624.js","assets/index-03fd00e9.js","assets/index-91994633.css","assets/FelModal-a7d23795.css"])),A=v(()=>w(()=>import("./MethodForm-33e2bb0b.js"),["assets/MethodForm-33e2bb0b.js","assets/index-03fd00e9.js","assets/index-91994633.css","assets/instrument.mutations-2a9c0225.js","assets/vue-multiselect-a538cd7c.css"])),h=j(),_=B();let o=c(!1),m=c("");const E=c(!0);let a=F({});const C={first:1e3,after:"",text:"",sortBy:["name"]};h.fetchAnalysesServices(C);const M=y(()=>h.getAnalysesServicesSimple);_.fetchMethods();const S=y(()=>_.getMethods);function p(r,t={}){E.value=r,o.value=!0,m.value=(r?"CREATE":"EDIT")+" ANALYSES METHOD",r?Object.assign(a,{}):Object.assign(a,{...t})}function D(r){let t=[];return M.value?.forEach(s=>{s?.methods?.some(l=>l.uid==r?.uid)&&t.push(s?.name)}),t.join(", ")}return(r,t)=>(d(),u(b,null,[e("div",V,[e("div",I,[R,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=s=>p(!0))}," Add Method"),$]),U,e("div",q,[e("div",G,[e("table",H,[Y,e("tbody",z,[(d(!0),u(b,null,L(S.value,s=>(d(),u("tr",{key:s?.uid},[e("td",J,[e("div",K,i(s?.name),1)]),e("td",Q,[e("div",W,i(s?.instruments?.map(l=>l?.name)?.join(",")),1)]),e("td",X,[e("div",Z,i(D(s)),1)]),e("td",ee,[e("button",{onClick:l=>p(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,te)])]))),128))])])])])]),f(" AnaltsisProfile Form Modal "),n(o)?(d(),N(n(k),{key:0,onClose:t[2]||(t[2]=s=>x(o)?o.value=!1:o=!1)},{header:g(()=>[e("h3",null,i(n(m)),1)]),body:g(()=>[O(n(A),{method:n(a),methodUid:n(a)?.uid,onClose:t[1]||(t[1]=s=>x(o)?o.value=!1:o=!1)},null,8,["method","methodUid"])]),_:1})):f("v-if",!0)],64))}}),ne=P(se,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/instruments/Methods.vue"]]);export{ne as default};
import{d as V,J as L,I as R,s as I,r as u,o as d,c as m,b as e,e as i,L as f,F as w,C as S,t as c,A as B,f as a,g as $,B as k,y as j,z as N,v as _,w as O,i as q,j as z,_ as J,k as G}from"./index-dcd7b802.js";import H from"./FelModal-80650623.js";import{D as K,a as Q,b as W}from"./clients.mutations-71d92082.js";import{u as X}from"./client-851824b4.js";import{h as g,o as C,a as y}from"./constants-054f7af0.js";import"./location-9f3dd6f9.js";const Y={class:"overflow-x-auto"},Z={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},ee={class:"min-w-full"},te=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Full Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Email "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Phone "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),oe={class:"bg-white"},se={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ae={class:"flex items-center"},le={class:"text-sm leading-5 text-gray-800"},ne={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ie={class:"text-sm leading-5 text-sky-800"},re={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},de={class:"text-sm leading-5 text-sky-800"},ce={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ue=["onClick"],me=["onClick"],pe={key:0,class:"py-4 text-center"},be={action:"post",class:"p-1"},he={class:"grid grid-cols-2 gap-x-4 mb-4"},fe={class:"block col-span-1 mb-2"},_e=e("span",{class:"text-gray-700"},"Full Name",-1),ge={class:"block col-span-1 mb-2"},Ce=e("span",{class:"text-gray-700"},"Email",-1),ye={class:"block col-span-1 mb-2"},ve=e("span",{class:"text-gray-700"},"Mobile Phone",-1),xe=e("hr",null,null,-1),we=V({__name:"ContactTable",props:{clientUid:String},setup(ke){const E=z(()=>J(()=>import("./FelLoadingMessage-bdff49d2.js"),["assets/FelLoadingMessage-bdff49d2.js","assets/index-dcd7b802.js","assets/index-a67f0314.css"]));let r=X(),p=L();const{withClientMutation:b}=R(),{clientContacts:T,fetchingClientContacts:D}=I(r);let v=u(""),n=u(!1),h=u(!1),s=u({});r.fetchClientContacts(p.query.clientUid);function P(){b(Q,{payload:{clientUid:p.query.clientUid,firstName:s.value.firstName,mobilePhone:s.value.mobilePhone,email:s.value.email}},"createClientContact").then(l=>r.addClientContact(l))}function U(){b(W,{uid:s.value.uid,payload:{clientUid:p.query.clientUid,firstName:s.value.firstName,mobilePhone:s.value.mobilePhone,email:s.value.email}},"updateClientContact").then(l=>r.updateClientContact(l))}function x(l,t={}){h.value=l,v.value=(l?"CREATE":"EDIT")+" CONTACT",n.value=!0,l?Object.assign(s,{}):Object.assign(s.value,{...t})}function A(){h.value===!0&&P(),h.value||U(),n.value=!1}function F(l){b(K,{uid:l},"deleteClientContact").then(t=>r.deleteClientContact(t?.uid))}return(l,t)=>(d(),m(w,null,[e("div",Y,[i(e("button",{onClick:t[0]||(t[0]=o=>x(!0)),class:"px-1 py-0 mb-4 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add Contact ",512),[[f,g(y.CREATE,C.CLIENT)]]),e("div",Z,[e("table",ee,[te,e("tbody",oe,[(d(!0),m(w,null,S(a(T),o=>(d(),m("tr",{key:o.uid},[e("td",se,[e("div",ae,[e("div",null,[e("div",le,c(o.firstName)+" "+c(o.lastName),1)])])]),e("td",ne,[e("div",ie,c(o.email),1)]),e("td",re,[e("div",de,c(o.mobilePhone),1)]),e("td",ce,[i(e("button",{onClick:M=>x(!1,o),class:"px-2 py-1 mr-2 border-gray-500 border text-orange-500rounded-smtransition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none"}," Edit ",8,ue),[[f,g(y.UPDATE,C.CLIENT)]]),B(),i(e("button",{onClick:M=>F(o?.uid),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500rounded-smtransition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Deactivate ",8,me),[[f,g(y.UPDATE,C.CLIENT)]])])]))),128))])]),a(D)?(d(),m("div",pe,[$(a(E),{message:"Fetching client contacts ..."})])):k("",!0)])]),a(n)?(d(),j(H,{key:0,onClose:t[5]||(t[5]=o=>q(n)?n.value=!1:n=!1)},{header:N(()=>[e("h3",null,c(a(v)),1)]),body:N(()=>[e("form",be,[e("div",he,[e("label",fe,[_e,i(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=o=>a(s).firstName=o),placeholder:"Full Name ..."},null,512),[[_,a(s).firstName]])]),e("label",ge,[Ce,i(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=o=>a(s).email=o),placeholder:"Email ..."},null,512),[[_,a(s).email]])]),e("label",ye,[ve,i(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=o=>a(s).mobilePhone=o),placeholder:"Mobile Phone ..."},null,512),[[_,a(s).mobilePhone]])])]),xe,e("button",{type:"button",onClick:t[4]||(t[4]=O(o=>A(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):k("",!0)],64))}}),Ae=G(we,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/client/_id/ContactTable.vue"]]);export{Ae as default};

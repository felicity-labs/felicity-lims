import{d as U,ac as $,ad as R,s as j,r as b,o as i,g as u,y as m,h as e,i as p,C as k,F as y,z as F,t as d,j as a,l as O,L as B,D as C,E as N,v as g,w as q,k as A,I as z,ak as H,_ as M,U as T,H as G}from"./index-b7f12717.js";import{t as J}from"./SampleListing-ac4eebab.js";import{a as K,b as Q}from"./clients.mutations-0fb71134.js";import{h as E,o as D,a as P}from"./constants-000fbf7c.js";import"./samples-f082807c.js";const W={class:"overflow-x-auto"},X={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},Y={class:"min-w-full"},Z=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Full Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Email "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Phone "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),ee={class:"bg-white"},te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},se={class:"flex items-center"},oe={class:"text-sm leading-5 text-gray-800"},ae={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},le={class:"text-sm leading-5 text-sky-800"},ne={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ie={class:"text-sm leading-5 text-sky-800"},re={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ce=["onClick"],de={key:0,class:"py-4 text-center"},ue={action:"post",class:"p-1"},me={class:"grid grid-cols-2 gap-x-4 mb-4"},pe={class:"block col-span-1 mb-2"},be=e("span",{class:"text-gray-700"},"Full Name",-1),he={class:"block col-span-1 mb-2"},fe=e("span",{class:"text-gray-700"},"Email",-1),_e={class:"block col-span-1 mb-2"},ve=e("span",{class:"text-gray-700"},"Mobile Phone",-1),ge=e("hr",null,null,-1),ye=U({__name:"ContactTable",props:{clientUid:Number},setup(I){let c=$(),n=R();const{withClientMutation:h}=H(),{clientContacts:_,fetchingClientContacts:x}=j(c);let v=b(""),l=b(!1),f=b(!1),t=b();c.fetchClientContacts(n.query.clientUid);function L(){h(K,{clientUid:n.query.clientUid,firstName:t.value.firstName,mobilePhone:t.value.mobilePhone,email:t.value.email},"createClientContact").then(r=>c.addClientContact(r))}function S(){h(Q,{uid:t.value.uid,firstName:t.value.firstName,mobilePhone:t.value.mobilePhone,email:t.value.email},"updateClientContact").then(r=>c.updateClientContact(r))}function w(r,o={}){f.value=r,v.value=(r?"CREATE":"EDIT")+" CONTACT",l.value=!0,r?Object.assign(t,{}):Object.assign(t.value,{...o})}function V(){f.value===!0&&L(),f.value||S(),l.value=!1}return(r,o)=>(i(),u(y,null,[m(" Contacts Table View "),e("div",W,[p(e("button",{onClick:o[0]||(o[0]=s=>w(!0)),class:"px-1 py-0 mb-4 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add Contact ",512),[[k,E(P.CREATE,D.CLIENT)]]),e("div",X,[e("table",Y,[Z,e("tbody",ee,[(i(!0),u(y,null,F(a(_),s=>(i(),u("tr",{key:s.uid},[e("td",te,[e("div",se,[e("div",null,[e("div",oe,d(s.firstName)+" "+d(s.lastName),1)])])]),e("td",ae,[e("div",le,d(s.email),1)]),e("td",ne,[e("div",ie,d(s.mobilePhone),1)]),e("td",re,[p(e("button",{onClick:De=>w(!1,s),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500rounded-smtransition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Edit ",8,ce),[[k,E(P.UPDATE,D.CLIENT)]])])]))),128))])]),a(x)?(i(),u("div",de,[O(B,{message:"Fetching client contacts ..."})])):m("v-if",!0)])]),m(" Contact Edit Form Modal "),a(l)?(i(),C(z,{key:0,onClose:o[5]||(o[5]=s=>A(l)?l.value=!1:l=!1)},{header:N(()=>[e("h3",null,d(a(v)),1)]),body:N(()=>[e("form",ue,[e("div",me,[e("label",pe,[be,p(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":o[1]||(o[1]=s=>a(t).firstName=s),placeholder:"Full Name ..."},null,512),[[g,a(t).firstName]])]),e("label",he,[fe,p(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":o[2]||(o[2]=s=>a(t).email=s),placeholder:"Email ..."},null,512),[[g,a(t).email]])]),e("label",_e,[ve,p(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":o[3]||(o[3]=s=>a(t).mobilePhone=s),placeholder:"Mobile Phone ..."},null,512),[[g,a(t).mobilePhone]])])]),ge,e("button",{type:"button",onClick:o[4]||(o[4]=q(s=>V(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):m("v-if",!0)],64))}}),Ce=M(ye,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/client/comps/ContactTable.vue"]]),xe={class:"col-span-12"},we={class:"bg-white shadow-md mt-2"},ke={class:"-mb-px flex justify-start"},Ne=["onClick"],Te={class:"pt-4"},Ee=U({__name:"ClientDetail",setup(I){const c=$();let n=b("samples");const h=["samples","contacts"];T(()=>"tab-"+n.value);let _=T(()=>c.getClient);return(x,v)=>(i(),u("section",xe,[e("nav",we,[e("div",ke,[(i(),u(y,null,F(h,l=>e("a",{key:l,class:G(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":a(n)===l}]),onClick:f=>A(n)?n.value=l:n=l,href:"#"},d(l),11,Ne)),64))])]),e("div",Te,[a(n)==="samples"?(i(),C(J,{key:0})):m("v-if",!0),a(n)==="contacts"?(i(),C(Ce,{key:1,clientUid:a(_)?.uid},null,8,["clientUid"])):m("v-if",!0)])]))}}),Me=M(Ee,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/client/_id/ClientDetail.vue"]]);export{Me as default};

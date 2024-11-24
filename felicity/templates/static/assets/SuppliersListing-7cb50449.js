import{d as E,I,r as u,n as A,p as L,o as p,c as m,b as e,F as y,C as B,t as _,f as n,y as F,z as g,e as v,v as x,w as M,i as T,B as V,j as N,_ as P,D as R,E as U,k as $}from"./index-dcd7b802.js";import{u as j}from"./setup-6f06eb41.js";import{g as O,h as z}from"./instrument.mutations-86534c8a.js";import"./_queries-f2a7ab3f.js";const r=a=>(R("data-v-33160deb"),a=a(),U(),a),q={class:"container w-full my-4"},G=r(()=>e("hr",null,null,-1)),H=r(()=>e("hr",null,null,-1)),J={class:"overflow-x-auto mt-4"},K={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},Q={class:"min-w-full"},W=r(()=>e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Supplier"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Description"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1)),X={class:"bg-white"},Y={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"flex items-center"},ee={class:"text-sm leading-5 text-gray-800"},te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},se={class:"text-sm leading-5 text-sky-800"},oe={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ie=["onClick"],ne={action:"post",class:"p-1"},le={class:"grid grid-cols-2 gap-x-4 mb-4"},re={class:"block col-span-1 mb-2"},ae=r(()=>e("span",{class:"text-gray-700"},"Name",-1)),de={class:"block col-span-2 mb-2"},pe=r(()=>e("span",{class:"text-gray-700"},"Description",-1)),ce=r(()=>e("hr",null,null,-1)),ue=E({__name:"SuppliersListing",setup(a){const w=N(()=>P(()=>import("./FelModal-80650623.js"),["assets/FelModal-80650623.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),d=j(),{withClientMutation:b}=I();let l=u(!1),h=u(""),s=A({});const c=u(!0);d.fetchSuppliers();const k=L(()=>d.getSuppliers);function S(){const i={name:s.name,description:s.description};b(O,{payload:i},"createSupplier").then(t=>d.addSupplier(t))}function C(){const i={name:s.name,description:s.description};b(z,{uid:s.uid,payload:i},"updateSupplier").then(t=>d.updateSupplier(t))}function f(i,t={}){c.value=i,l.value=!0,h.value=(i?"CREATE":"EDIT")+" SUPPLIER",i?Object.assign(s,{}):Object.assign(s,{...t})}function D(){c.value===!0&&S(),c.value===!1&&C(),l.value=!1}return(i,t)=>(p(),m(y,null,[e("div",q,[G,e("button",{onClick:t[0]||(t[0]=o=>f(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add Supplier"),H,e("div",J,[e("div",K,[e("table",Q,[W,e("tbody",X,[(p(!0),m(y,null,B(k.value,o=>(p(),m("tr",{key:o?.uid},[e("td",Y,[e("div",Z,[e("div",null,[e("div",ee,_(o?.name),1)])])]),e("td",te,[e("div",se,_(o?.description),1)]),e("td",oe,[e("button",{onClick:me=>f(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,ie)])]))),128))])])])])]),n(l)?(p(),F(n(w),{key:0,onClose:t[4]||(t[4]=o=>T(l)?l.value=!1:l=!1)},{header:g(()=>[e("h3",null,_(n(h)),1)]),body:g(()=>[e("form",ne,[e("div",le,[e("label",re,[ae,v(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=o=>n(s).name=o),placeholder:"Name ..."},null,512),[[x,n(s).name]])]),e("label",de,[pe,v(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=o=>n(s).description=o),placeholder:"Description ..."},null,512),[[x,n(s).description]])])]),ce,e("button",{type:"button",onClick:t[3]||(t[3]=M(o=>D(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):V("",!0)],64))}});const ye=$(ue,[["__scopeId","data-v-33160deb"],["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/suppliers/SuppliersListing.vue"]]);export{ye as default};

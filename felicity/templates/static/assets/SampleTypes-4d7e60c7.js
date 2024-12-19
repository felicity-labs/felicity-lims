import{d as C,R as D,I as E,r as b,n as A,p as M,o as c,c as _,b as e,F as x,C as V,t as p,y as v,f as l,z as F,A as w,e as u,v as h,B as I,ae as P,w as B,i as N,j as U,_ as L,D as R,E as $,k as j}from"./index-7210a26e.js";import{D as O,F as z}from"./analyses.mutations-0e64e3ff.js";const a=i=>(R("data-v-f73ce93d"),i=i(),$(),i),Y={class:"container w-full my-4"},q=a(()=>e("hr",null,null,-1)),G=a(()=>e("hr",null,null,-1)),H={class:"overflow-x-auto mt-4"},J={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},K={class:"min-w-full"},Q=a(()=>e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Sample Type"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Prefix"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Active"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1)),W={class:"bg-white"},X={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"flex items-center"},ee={class:"text-sm leading-5 text-gray-800"},te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},oe={class:"text-sm leading-5 text-sky-800"},se={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},le={class:"text-sm leading-5 text-sky-800"},ae={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ne=["onClick"],re={action:"post",class:"p-1"},ie={class:"grid grid-cols-2 gap-x-4 mb-4"},de={class:"block col-span-1 mb-2"},ce=a(()=>e("span",{class:"text-gray-700"},"Sample Type Name",-1)),pe={class:"block col-span-1 mb-2"},ue=a(()=>e("span",{class:"text-gray-700"},"Prefix",-1)),me={class:"block col-span-2 mb-2"},be=a(()=>e("span",{class:"text-gray-700"},"Description",-1)),_e={for:"toggle",class:"text-xs text-gray-700 mr-4"},he={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},ye=a(()=>e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1)),fe=a(()=>e("hr",null,null,-1)),ge=C({__name:"SampleTypes",setup(i){const k=U(()=>L(()=>import("./FelModal-b8e55526.js"),["assets/FelModal-b8e55526.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),d=D(),{withClientMutation:y}=E();let r=b(!1),f=b(""),s=A({});const m=b(!0);d.fetchSampleTypes();const S=M(()=>d.getSampleTypes);function g(n,t={}){m.value=n,r.value=!0,f.value=(n?"CREATE":"EDIT")+" SAMPLE TYPE",n?Object.assign(s,{}):Object.assign(s,{...t})}function T(){const n={name:s.name,abbr:s.abbr,description:s.description,active:s.active};m.value===!0&&y(O,{payload:n},"createSampleType").then(t=>d.addSampleType(t)),m.value===!1&&y(z,{uid:s.uid,payload:n},"updateSampleType").then(t=>d.updateSampleType(t)),r.value=!1}return(n,t)=>(c(),_(x,null,[e("div",Y,[q,e("button",{onClick:t[0]||(t[0]=o=>g(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add Sample Type"),G,e("div",H,[e("div",J,[e("table",K,[Q,e("tbody",W,[(c(!0),_(x,null,V(S.value,o=>(c(),_("tr",{key:o?.uid},[e("td",X,[e("div",Z,[e("div",null,[e("div",ee,p(o?.name),1)])])]),e("td",te,[e("div",oe,p(o?.abbr),1)]),e("td",se,[e("div",le,p(o?.active),1)]),e("td",ae,[e("button",{onClick:xe=>g(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,ne)])]))),128))])])])])]),v(" Location Edit Form Modal "),l(r)?(c(),F(l(k),{key:0,onClose:t[6]||(t[6]=o=>N(r)?r.value=!1:r=!1)},{header:w(()=>[e("h3",null,p(l(f)),1)]),body:w(()=>[e("form",re,[e("div",ie,[e("label",de,[ce,u(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=o=>l(s).name=o),placeholder:"Name ..."},null,512),[[h,l(s).name]])]),e("label",pe,[ue,u(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=o=>l(s).abbr=o),placeholder:"Prefix ..."},null,512),[[h,l(s).abbr]])]),e("label",me,[be,u(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[3]||(t[3]=o=>l(s).description=o),placeholder:"Description ..."},null,512),[[h,l(s).description]])]),e("label",_e,[I("Active "),e("div",he,[u(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":t[4]||(t[4]=o=>l(s).active=o),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[P,l(s).active]]),ye])])]),fe,e("button",{type:"button",onClick:t[5]||(t[5]=B(o=>T(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):v("v-if",!0)],64))}});const ke=j(ge,[["__scopeId","data-v-f73ce93d"],["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/sample/SampleTypes.vue"]]);export{ke as default};
import{d as J,aB as Q,B as W,r as c,az as X,aA as Y,s as D,C as T,D as Z,o as i,c as u,g as E,e as f,E as ee,b as s,G as g,f as n,x as N,q as te,t as v,v as M,i as y,F as h,p as _,at as k,w as se,O as oe,k as le}from"./index-03fd00e9.js";import ne from"./FelDataTable-b2e5c7c1.js";import ae from"./FelModal-78db0624.js";import{A as ie,E as re}from"./clients.mutations-37a002fb.js";import{h as ce,o as ue,a as de}from"./constants-0e2456be.js";import fe from"./FelPageHeading-f1b46a01.js";const me=s("hr",null,null,-1),pe={action:"post",class:"p-1"},be={class:"grid grid-cols-2 gap-x-4 mb-4"},ve={class:"block col-span-1 mb-2"},he=s("span",{class:"text-gray-700"},"Name",-1),Ce={class:"block col-span-1 mb-2"},ge=s("span",{class:"text-gray-700"},"Code",-1),ye={class:"grid grid-cols-3 gap-x-4 mb-4"},_e={class:"block col-span-1 mb-2"},ke=s("span",{class:"text-gray-700"},"Country",-1),xe=s("option",null,null,-1),we=["value"],Ue={class:"block col-span-1 mb-2"},Be=s("span",{class:"text-gray-700"},"Province",-1),De=s("option",null,null,-1),Te=["value"],Ee={class:"block col-span-1 mb-2"},Ne=s("span",{class:"text-gray-700"},"District",-1),Me=s("option",null,null,-1),Pe=["value"],Ae=s("hr",null,null,-1),Ie=J({__name:"ClientListing",setup(Le){const r=Q(),b=W(),{withClientMutation:x}=oe(),P=c([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Client Name",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(o,t){return X(Y,{to:{name:"client-detail",query:{clientUid:o?.uid}},class:"px-1 ml-2 border-white border text-gray-500rounded-smtransition duration-300 hover:border-sky-800 hover:text-sky-800 focus:outline-none",innerHTML:o?.name})}},{name:"Client ID",value:"code",sortable:!1,sortBy:"asc",hidden:!1},{name:"District",value:"district.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Province",value:"district.province.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Mobile Number",value:"mobilePhone",sortable:!1,sortBy:"asc",hidden:!1},{name:"Email Asdress",value:"email",sortable:!1,sortBy:"asc",hidden:!1}]),{countries:A,provinces:I,districts:L}=D(b),{clients:w,clientPageInfo:U,fetchingClients:S}=D(r);let d=c(!1),C=c(!1),V=c(""),l=T({});const B=c(""),F=()=>Object.assign(l,{});let a=T({first:50,after:"",text:"",sortBy:["uid"],filterAction:!1}),m=c(),p=c();r.fetchClients(a),b.fetchCountries();function O(){x(ie,{payload:{name:l.name,code:l.code,districtUid:l.districtUid}},"createClient").then(o=>r.addClient(o))}function R(){x(re,{uid:l.uid,payload:{name:l.name,code:l.code,districtUid:l.districtUid}},"updateClient").then(o=>r.updateClient(o))}function j(o){b.filterProvincesByCountry(m.value)}function q(o){b.filterDistrictsByProvince(p.value)}function H(o){a.first=100,a.after="",a.text=o.filterText,a.filterAction=!0,r.fetchClients(a)}function z(o){a.first=o.fetchCount,a.after=U?.value?.endCursor,a.text=o.filterText,a.filterAction=!1,r.fetchClients(a)}function G(o,t,e={}){C.value=o,V.value=t,B.value=(o?"CREATE":"EDIT")+" "+t.toUpperCase(),t=="client"&&(d.value=!0),o?t=="client"&&Object.assign(l,{}):t=="client"&&Object.assign(l,{...e})}function K(){C.value&&O(),C.value||R(),d.value=!1}const $=Z(()=>w?.value?.length+" of "+r.getClientCount+" clients");return(o,t)=>(i(),u(h,null,[E(fe,{title:"Clients"}),f(s("button",{class:"p-2 my-2 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:t[0]||(t[0]=e=>G(!0,"client"))}," Add client ",512),[[ee,ce(de.CREATE,ue.CLIENT)]]),me,E(ne,{columns:P.value,data:n(w),toggleColumns:!0,loading:n(S),paginable:!0,pageMeta:{fetchCount:n(a).first,hasNextPage:n(U)?.hasNextPage,countNone:$.value},searchable:!0,filterable:!1,onOnSearchKeyUp:H,onOnSearchFocus:F,onOnPaginate:z,selectable:!1},{footer:g(()=>[]),_:1},8,["columns","data","loading","pageMeta"]),N(" Location Edit Form Modal "),n(d)?(i(),te(ae,{key:0,onClose:t[9]||(t[9]=e=>y(d)?d.value=!1:d=!1)},{header:g(()=>[s("h3",null,v(B.value),1)]),body:g(()=>[s("form",pe,[s("div",be,[s("label",ve,[he,f(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=e=>n(l).name=e),placeholder:"Name ..."},null,512),[[M,n(l).name]])]),s("label",Ce,[ge,f(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=e=>n(l).code=e),placeholder:"Code ..."},null,512),[[M,n(l).code]])])]),s("div",ye,[s("label",_e,[ke,f(s("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t[3]||(t[3]=e=>y(m)?m.value=e:m=e),onChange:t[4]||(t[4]=e=>j(e))},[xe,(i(!0),u(h,null,_(n(A),e=>(i(),u("option",{key:e.uid,value:e.uid},v(e.name),9,we))),128))],544),[[k,n(m)]])]),s("label",Ue,[Be,f(s("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t[5]||(t[5]=e=>y(p)?p.value=e:p=e),onChange:t[6]||(t[6]=e=>q(e))},[De,(i(!0),u(h,null,_(n(I),e=>(i(),u("option",{key:e.uid,value:e.uid},v(e.name),9,Te))),128))],544),[[k,n(p)]])]),s("label",Ee,[Ne,f(s("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t[7]||(t[7]=e=>n(l).districtUid=e)},[Me,(i(!0),u(h,null,_(n(L),e=>(i(),u("option",{key:e.uid,value:e.uid},v(e.name),9,Pe))),128))],512),[[k,n(l).districtUid]])])]),Ae,s("button",{type:"button",onClick:t[8]||(t[8]=se(e=>K(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):N("v-if",!0)],64))}}),qe=le(Ie,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/client/ClientListing.vue"]]);export{qe as default};
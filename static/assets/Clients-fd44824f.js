import{d as Q,ac as W,a3 as X,s as D,r as i,U as B,A as E,b5 as Y,b6 as Z,o as r,g as u,h as t,i as m,C as ee,l as te,E as _,j as o,ao as se,y as N,D as le,t as d,v as I,k as g,F as v,z as y,R as k,w as oe,I as ne,ak as ae,_ as ie}from"./index-b7f12717.js";import{A as re,E as ce}from"./clients.mutations-0fb71134.js";import{h as ue,o as de,a as fe}from"./constants-000fbf7c.js";const me={class:"flex items-center"},be=t("h1",{class:"h1 my-4 font-bold text-dark-700"},"Clients",-1),he=t("hr",null,null,-1),pe={action:"post",class:"p-1"},ve={class:"grid grid-cols-2 gap-x-4 mb-4"},Ce={class:"block col-span-1 mb-2"},_e=t("span",{class:"text-gray-700"},"Name",-1),ge={class:"block col-span-1 mb-2"},ye=t("span",{class:"text-gray-700"},"Code",-1),ke={class:"grid grid-cols-3 gap-x-4 mb-4"},xe={class:"block col-span-1 mb-2"},we=t("span",{class:"text-gray-700"},"Country",-1),Ue=t("option",null,null,-1),Te=["value"],De={class:"block col-span-1 mb-2"},Be=t("span",{class:"text-gray-700"},"Province",-1),Ee=t("option",null,null,-1),Ne=["value"],Ie={class:"block col-span-1 mb-2"},Me=t("span",{class:"text-gray-700"},"District",-1),Pe=t("option",null,null,-1),Ae=["value"],Se=t("hr",null,null,-1),Le=Q({__name:"Clients",setup(Re){const c=W(),p=X(),{withClientMutation:x}=ae(),{countries:M}=D(p),{clients:w,clientPageInfo:U,fetchingClients:P}=D(c);let A=i("samples");B(()=>"tab-"+A.value);let f=i(!1),C=i(!1),S=i(""),L=i([]),R=i([]),n=E({});const V=()=>Object.assign(n,{}),F=i([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Client Name",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(l,s){return Y(Z,{to:{name:"client-detail",query:{clientUid:l?.uid}},class:"p-1 ml-2 border-white border text-gray-500rounded-smtransition duration-300 hover:border-sky-800 hover:text-sky-800 focus:outline-none",innerHTML:l?.name})}},{name:"Client ID",value:"code",sortable:!1,sortBy:"asc",hidden:!1},{name:"District",value:"district.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Province",value:"district.province.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Mobile Number",value:"mobilePhone",sortable:!1,sortBy:"asc",hidden:!1},{name:"Email Asdress",value:"email",sortable:!1,sortBy:"asc",hidden:!1}]);let a=E({first:50,after:"",text:"",sortBy:["uid"],filterAction:!1}),b=i(),h=i(),T=i("");c.fetchClients(a),p.fetchCountries();function O(){x(re,{name:n.name,code:n.code,districtUid:n.districtUid},"createClient").then(l=>c.addClient(l))}function j(){x(ce,{uid:n.uid,name:n.name,code:n.code,districtUid:n.districtUid},"updateClient").then(l=>c.updateClient(l))}function q(l){p.filterProvincesByCountry(b.value)}function z(l){p.filterDistrictsByProvince(h.value)}function H(l){a.first=100,a.after="",a.text=l.filterText,a.filterAction=!0,c.fetchClients(a)}function K(l){a.first=l.fetchCount,a.after=U?.value?.endCursor,a.text=l.filterText,a.filterAction=!1,c.fetchClients(a)}function $(l,s,e={}){C.value=l,S.value=s,T.value=(l?"CREATE":"EDIT")+" "+s.toUpperCase(),s=="client"&&(f.value=!0),l?s=="client"&&Object.assign(n,{}):s=="client"&&Object.assign(n,{...e})}function G(){C.value&&O(),C.value||j(),f.value=!1}const J=B(()=>w?.value?.length+" of "+c.getClientCount+" clients");return(l,s)=>(r(),u(v,null,[t("div",me,[be,m(t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:s[0]||(s[0]=e=>$(!0,"client"))}," Add client ",512),[[ee,ue(fe.CREATE,de.CLIENT)]])]),he,te(se,{columns:F.value,data:o(w),toggleColumns:!0,loading:o(P),paginable:!0,pageMeta:{fetchCount:o(a).first,hasNextPage:o(U)?.hasNextPage,countNone:o(J)},searchable:!0,filterable:!1,onOnSearchKeyUp:H,onOnSearchFocus:V,onOnPaginate:K,selectable:!1},{footer:_(()=>[]),_:1},8,["columns","data","loading","pageMeta"]),N(" Location Edit Form Modal "),o(f)?(r(),le(ne,{key:0,onClose:s[9]||(s[9]=e=>g(f)?f.value=!1:f=!1)},{header:_(()=>[t("h3",null,d(o(T)),1)]),body:_(()=>[t("form",pe,[t("div",ve,[t("label",Ce,[_e,m(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[1]||(s[1]=e=>o(n).name=e),placeholder:"Name ..."},null,512),[[I,o(n).name]])]),t("label",ge,[ye,m(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[2]||(s[2]=e=>o(n).code=e),placeholder:"Code ..."},null,512),[[I,o(n).code]])])]),t("div",ke,[t("label",xe,[we,m(t("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":s[3]||(s[3]=e=>g(b)?b.value=e:b=e),onChange:s[4]||(s[4]=e=>q(e))},[Ue,(r(!0),u(v,null,y(o(M),e=>(r(),u("option",{key:e.uid,value:e.uid},d(e.name)+" "+d(e.uid),9,Te))),128))],544),[[k,o(b)]])]),t("label",De,[Be,m(t("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":s[5]||(s[5]=e=>g(h)?h.value=e:h=e),onChange:s[6]||(s[6]=e=>z(e))},[Ee,(r(!0),u(v,null,y(o(L),e=>(r(),u("option",{key:e.uid,value:e.uid},d(e.name)+" "+d(e.uid),9,Ne))),128))],544),[[k,o(h)]])]),t("label",Ie,[Me,m(t("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":s[7]||(s[7]=e=>o(n).districtUid=e)},[Pe,(r(!0),u(v,null,y(o(R),e=>(r(),u("option",{key:e.uid,value:e.uid},d(e.name)+" "+d(e.uid),9,Ae))),128))],512),[[k,o(n).districtUid]])])]),Se,t("button",{type:"button",onClick:s[8]||(s[8]=oe(e=>G(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):N("v-if",!0)],64))}}),je=ie(Le,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/client/Clients.vue"]]);export{je as default};

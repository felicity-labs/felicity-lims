import{d as x,a3 as _,a4 as C,s as B,r as f,b6 as l,b7 as r,A as T,U as N,o as k,g as w,l as c,W as I,E as m,h as s,i as R,j as a,G as A,C as S,ap as D,F as M,_ as E}from"./index-cd9e6ac8.js";import{h as L,a as U,o as F}from"./constants-99d18042.js";const H=s("div",{class:"flex content-start items-center"},[s("span",{class:"text-sky-800"},[s("i",{class:"fas fa-info-circle"})]),s("p",{class:"ml-2 italic text-orange-600"}," Click register when you dont find your patient during search* ")],-1),V=s("hr",{class:"my-2"},null,-1),j=x({__name:"Patients",setup(q){let n=_(),h=C();const{patients:u,fetchingPatients:p,patientPageInfo:i}=B(n),g=f([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Patient Id",value:"patientId",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,o){return l(r,{to:{name:"patient-detail",params:{patientUid:e?.uid}},innerHTML:e?.patientId})}},{name:"Full Name",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,o){return l(r,{to:{name:"patient-detail",params:{patientUid:e?.uid}},innerHTML:P(e)})}},{name:"Age",value:"age",sortable:!1,sortBy:"asc",hidden:!1},{name:"Gender",value:"gender",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client Patient ID",value:"clientPatientId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Province",value:"client.district.province.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"District",value:"client.district.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client",value:"client.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"",value:"",sortable:!1,sortBy:"asc",showInToggler:!1,hidden:!1,customRender:function(e,o){return l(r,{to:{name:"samples-add",params:{patientUid:e?.uid}},class:"px-2 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",innerHTML:"+ Analysis Request"})}}]);h.fetchCountries();let t=T({first:50,before:"",text:"",sortBy:["-uid"],filterAction:!1});n.fetchPatients(t);let d=f("");function b(e){t.first=100,t.before=i?.value?.endCursor??"",t.text=e.filterText,t.filterAction=!0,d.value=e.filterText,n.fetchPatients(t)}const v=N(()=>u?.value?.length+" of "+n.getPatientCount+" patients");function y(e){t.first=e.fetchCount,t.before=i?.value?.endCursor??"",t.text=e.filterText,t.filterAction=!1,n.fetchPatients(t)}let P=e=>e.firstName+" "+e.lastName;return(e,o)=>(k(),w(M,null,[c(I,{title:"Patients"}),c(D,{columns:g.value,data:a(u),toggleColumns:!0,loading:a(p),paginable:!0,pageMeta:{fetchCount:a(t).first,hasNextPage:a(i)?.hasNextPage,countNone:a(v)},searchable:!0,filterable:!1,onOnSearch:b,onOnPaginate:y,selectable:!1},{footer:m(()=>[s("div",null,[H,V,R(c(a(r),{to:{name:"patients-register",query:{cpid:a(d)}},class:"px-4 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:m(()=>[A(" Register New Patiet ")]),_:1},8,["to"]),[[S,L(U.CREATE,F.PATIENT)]])])]),_:1},8,["columns","data","loading","pageMeta"])],64))}}),W=E(j,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/patient/Patients.vue"]]);export{W as default};
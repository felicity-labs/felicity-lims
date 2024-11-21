import{d as B,s as C,r as f,at as l,au as i,n as N,p as k,o as I,c as w,g as c,f as a,z as m,b as s,e as A,A as R,L,F as D,j as h,_ as p,k as E}from"./index-48799f0c.js";import{u as M}from"./patient-9ce25932.js";import{h as S,a as V,o as F}from"./constants-9cf3ef05.js";const H=s("div",{class:"flex content-start items-center"},[s("span",{class:"text-sky-800"},[s("i",{class:"fas fa-info-circle"})]),s("p",{class:"ml-2 italic text-orange-600"}," Click register when you dont find your patient during search* ")],-1),O=s("hr",{class:"my-2"},null,-1),U=B({__name:"PatientListing",setup(j){const g=h(()=>p(()=>import("./FelDataTable-24c349ea.js"),["assets/FelDataTable-24c349ea.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),_=h(()=>p(()=>import("./FelPageHeading-58e05e1b.js"),["assets/FelPageHeading-58e05e1b.js","assets/index-48799f0c.js","assets/index-c2286288.css"]));let n=M();const{patients:u,fetchingPatients:v,patientPageInfo:r}=C(n),b=f([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Patient Id",value:"patientId",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,o){return l(i,{to:{name:"patient-detail",params:{patientUid:e?.uid}},innerHTML:e?.patientId})}},{name:"Full Name",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,o){return l(i,{to:{name:"patient-detail",params:{patientUid:e?.uid}},innerHTML:T(e)})}},{name:"Age",value:"age",sortable:!1,sortBy:"asc",hidden:!1},{name:"Gender",value:"gender",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client Patient ID",value:"clientPatientId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Province",value:"client.district.province.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"District",value:"client.district.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client",value:"client.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"",value:"",sortable:!1,sortBy:"asc",showInToggler:!1,hidden:!1,customRender:function(e,o){return l(i,{to:{name:"samples-add",params:{patientUid:e?.uid}},class:"px-2 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",innerHTML:"+ Analysis Request"})}}]);let t=N({first:50,before:"",text:"",sortBy:["-uid"],filterAction:!1});n.fetchPatients(t);let d=f("");function P(e){t.first=100,t.before=r?.value?.endCursor??"",t.text=e.filterText,t.filterAction=!0,d.value=e.filterText,n.fetchPatients(t)}const y=k(()=>u?.value?.length+" of "+n.getPatientCount+" patients");function x(e){t.first=e.fetchCount,t.before=r?.value?.endCursor??"",t.text=e.filterText,t.filterAction=!1,n.fetchPatients(t)}let T=e=>e.firstName+" "+e.lastName;return(e,o)=>(I(),w(D,null,[c(a(_),{title:"Patients"}),c(a(g),{columns:b.value,data:a(u),toggleColumns:!0,loading:a(v),paginable:!0,pageMeta:{fetchCount:a(t).first,hasNextPage:a(r)?.hasNextPage,countNone:y.value},searchable:!0,filterable:!1,onOnSearch:P,onOnPaginate:x,selectable:!1},{footer:m(()=>[s("div",null,[H,O,A(c(a(i),{to:{name:"patients-register",query:{cpid:a(d)}},class:"px-4 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:m(()=>[R(" Register New Patiet ")]),_:1},8,["to"]),[[L,S(V.CREATE,F.PATIENT)]])])]),_:1},8,["columns","data","loading","pageMeta"])],64))}}),J=E(U,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/patient/PatientListing.vue"]]);export{J as default};

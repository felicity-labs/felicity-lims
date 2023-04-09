import{d as H,a2 as K,a3 as O,s as Q,r as v,A as W,U as J,B as X,V as Y,o,g as l,h as e,y as n,i as h,C,l as y,E as g,G as Z,j as s,w as ee,F as I,z as S,k as b,D as _,I as te,a4 as se,a5 as ae,L as oe,H as T,t as c,_ as ne}from"./index-b7f12717.js";import{t as ie,a as re}from"./CaseTable-1cd88c78.js";import{t as le}from"./AuditLog-465663e5.js";import{P as ce}from"./PatientForm-a98f4554.js";import{P as de}from"./PatientInfo-3c87c22d.js";import{h as E,o as F,a as N}from"./constants-000fbf7c.js";/* empty css                                                                 */const x=f=>(se("data-v-81af20fc"),f=f(),ae(),f),ue={class:""},pe={class:"flex justify-between"},me={class:"flex items-center content-between"},fe=["onClick"],he=x(()=>e("hr",null,null,-1)),ye={class:"grid grid-cols-12 gap-4 mt-2"},_e={initial:{opacity:0,y:100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-3 h-screen overflow-y-scroll overscroll-contain patient-scroll"},ve={key:0,class:"py-4 text-center bg-white w-full mb-1 rounded-sm shadow border"},ge={key:1},be=["onClick"],xe={class:"flex-grow p-1"},ke={class:"font-semibold text-gray-800 flex justify-between"},Pe={class:"text-sm text-gray-500"},we={class:"text-sm text-gray-500 flex justify-between"},Ce={class:"text-sm text-gray-500 flex justify-between"},Ie=x(()=>e("div",{class:"p-2"},[n(' <span class="block h-4 w-4 bg-sky-800 rounded-full bottom-0 right-0"></span> ')],-1)),Se={key:0,initial:{opacity:0,y:-100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-9"},Te={class:"bg-white shadow-md mt-2"},Ee={class:"-mb-px flex justify-start"},Fe=["onClick"],Ne=x(()=>e("h3",null,"Patient Form",-1)),je=H({__name:"PatientsCompact",setup(f){let m=K(),j=O();const{patients:A,fetchingPatients:R}=Q(m);let i=v(!1),d=v("samples");const B=["samples","cases","logs"];let u=v({}),p=W({first:25,before:"",text:"",sortBy:["-uid"],filterAction:!1});const D=["Male","Female","Missing","Trans Gender"];j.fetchCountries(),m.fetchPatients(p);function L(a){p.first=100,p.before="",p.text=a.target.value,p.filterAction=!0,m.fetchPatients(p)}const M=J(()=>Object.keys(u?.value)?.length>0);let V=a=>a.firstName+" "+a.lastName,$=a=>D[a],k=a=>{u.value=a,m.setPatient(a)},P=()=>{u.value={},m.resetPatient()};const G=async()=>{P(),i.value=!0},U=a=>{k(a),i.value=!1};return(a,r)=>{const z=X("router-link"),w=Y("motion");return o(),l("div",ue,[e("div",pe,[e("div",me,[n(' <h1 class="h1 my-4 font-bold text-dark-700">Listing</h1> '),h(y(z,{to:"/patients/search",class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-800 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:g(()=>[Z(" Add Patient")]),_:1},512),[[C,E(N.CREATE,F.PATIENT)]]),e("input",{class:"w-64 ml-6 pl-4 pr-2 py-1 text-sm text-gray-800 placeholder-gray-400 border-1 border-gray-400 rounded-sm focus:placeholder-gray-500 focus:border-sky-800 focus:outline-none focus:shadow-outline-purple form-input",type:"text",placeholder:"Search ...","aria-label":"Search",onKeyup:r[0]||(r[0]=t=>L(t)),onFocus:r[1]||(r[1]=t=>s(P)())},null,32)]),h(e("button",{onClick:ee(G,["prevent"]),class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"}," Quick Registration ",8,fe),[[C,E(N.CREATE,F.PATIENT)]])]),he,e("div",ye,[h((o(),l("section",_e,[s(R)?(o(),l("div",ve,[y(oe,{message:"Fetching patients ..."})])):(o(),l("div",ge,[(o(!0),l(I,null,S(s(A),t=>(o(),l("a",{key:t.patientId,href:"#",onClick:q=>s(k)(t),class:T(["bg-white w-full flex items-center p-1 mb-1 rounded-sm shadow border",{"border-sky-800 bg-emerald-200":t.uid===s(u)?.uid}])},[e("div",xe,[e("div",ke,[e("span",null,c(s(V)(t)),1),e("span",Pe,c(t.age)+" yrs, "+c(s($)(t.gender)),1)]),e("div",we,[e("span",null,c(t.patientId),1),e("span",null,c(t.clientPatientId),1)]),e("div",Ce,[e("span",null,c(t?.client?.district?.province?.name),1),e("span",null,c(t?.client?.name),1)])]),Ie],10,be))),128))]))])),[[w]]),s(M)?h((o(),l("section",Se,[n(" PatientInfo "),y(de,{onEditPatient:r[2]||(r[2]=()=>b(i)?i.value=!0:i=!0)}),n(" Sample and Case Data "),e("nav",Te,[e("div",Ee,[(o(),l(I,null,S(B,t=>e("a",{key:t,class:T(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200 hover:bg-sky-600 hover:text-gray-200",{"tab-active":s(d)===t}]),onClick:q=>b(d)?d.value=t:d=t,href:"#"},c(t),11,Fe)),64))])]),s(d)==="samples"?(o(),_(ie,{key:0,target:"patient-samples",targetUid:s(u).uid},null,8,["targetUid"])):n("v-if",!0),s(d)==="cases"?(o(),_(re,{key:1})):n("v-if",!0),s(d)==="logs"?(o(),_(le,{key:2,targetType:"patient",targetId:s(u)?.uid},null,8,["targetId"])):n("v-if",!0)])),[[w]]):n("v-if",!0)]),n(" Patient Edit Form Modal "),s(i)?(o(),_(te,{key:0,onClose:r[3]||(r[3]=t=>b(i)?i.value=!1:i=!1),contentWidth:"w-3/6"},{header:g(()=>[Ne]),body:g(()=>[y(ce,{patient:s(u),navigate:!1,onClose:U},null,8,["patient"])]),_:1})):n("v-if",!0)])}}});const $e=ne(je,[["__scopeId","data-v-81af20fc"],["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/patient/PatientsCompact.vue"]]);export{$e as default};

import{d as se,A as oe,B as ae,s as ne,r as b,C as ie,D as re,z as le,n as ce,o,c as u,g as f,f as e,b as t,e as h,E as T,G as x,H as de,w as ue,F as P,p as A,i as k,q as y,x as m,j as i,I as _e,J as pe,y as R,t as _,_ as r,k as me}from"./index-2a6c9271.js";import{h as D,o as V,a as L}from"./constants-b0c30fb3.js";const w=g=>(_e("data-v-81af20fc"),g=g(),pe(),g),ve={class:""},fe={class:"flex justify-between"},ye={class:"flex items-center content-between"},ge=w(()=>t("hr",null,null,-1)),he={class:"grid grid-cols-12 gap-4 mt-2"},be={initial:{opacity:0,y:100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-3 h-screen overflow-y-scroll overscroll-contain patient-scroll"},xe={key:0,class:"py-4 text-center bg-white w-full mb-1 rounded-sm shadow border"},Pe={key:1},ke=["onClick"],we={class:"flex-grow p-1"},Ee={class:"font-semibold text-gray-800 flex justify-between"},Ce={class:"text-sm text-gray-500"},Ie={class:"text-sm text-gray-500 flex justify-between"},Te={class:"text-sm text-gray-500 flex justify-between"},Ae=w(()=>t("div",{class:"p-2"},null,-1)),Re={key:0,initial:{opacity:0,y:-100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-9"},De={class:"bg-white shadow-md mt-2"},Ve={class:"-mb-px flex justify-start"},Le=["onClick"],Se=w(()=>t("h3",null,"Patient Form",-1)),Ne=se({__name:"PatientsCompact",setup(g){const S=i(()=>r(()=>import("./LoadingMessage-72d34fcf.js"),["assets/LoadingMessage-72d34fcf.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),N=i(()=>r(()=>import("./PageHeading-e77f7be2.js"),["assets/PageHeading-e77f7be2.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),O=i(()=>r(()=>import("./AnalyisRequestListing-88db15e5.js"),["assets/AnalyisRequestListing-88db15e5.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),F=i(()=>r(()=>import("./CaseTable-9387d471.js"),["assets/CaseTable-9387d471.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),j=i(()=>r(()=>import("./AuditLog-1297894b.js"),["assets/AuditLog-1297894b.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),B=i(()=>r(()=>import("./SimpleModal-0c0664c5.js"),["assets/SimpleModal-0c0664c5.js","assets/index-2a6c9271.js","assets/index-88806377.css","assets/SimpleModal-f645a074.css"])),M=i(()=>r(()=>import("./PatientForm-31aa3d65.js"),["assets/PatientForm-31aa3d65.js","assets/index-2a6c9271.js","assets/index-88806377.css","assets/vue-multiselect.esm-82622b05.js","assets/patient.mutations-07df35b4.js","assets/array-52a0b0d0.js","assets/vue-multiselect-a538cd7c.css"])),U=i(()=>r(()=>import("./PatientInfo-3befb56f.js"),["assets/PatientInfo-3befb56f.js","assets/index-2a6c9271.js","assets/index-88806377.css","assets/constants-b0c30fb3.js"])),$=i(()=>r(()=>import("./PatientBill-e063c32a.js"),["assets/PatientBill-e063c32a.js","assets/index-2a6c9271.js","assets/index-88806377.css","assets/billing.mutations-ad702213.js","assets/array-52a0b0d0.js","assets/PatientBill-7bdbff76.css"]));let v=oe(),G=ae();const{patients:q,fetchingPatients:z}=ne(v);let n=b(!1),l=b("samples");const H=["samples","cases","billing","logs"];let c=b({}),p=ie({first:25,before:"",text:"",sortBy:["-uid"],filterAction:!1});const Q=["Male","Female","Missing","Trans Gender"];G.fetchCountries(),v.fetchPatients(p);function J(a){p.first=100,p.before="",p.text=a.target.value,p.filterAction=!0,v.fetchPatients(p)}const K=re(()=>Object.keys(c?.value)?.length>0);let W=a=>a.firstName+" "+a.lastName,X=a=>Q[a],E=a=>{c.value=a,v.setPatient(a)},C=()=>{c.value={},v.resetPatient()};const Y=async()=>{C(),n.value=!0},Z=a=>{E(a),n.value=!1};return(a,d)=>{const ee=le("router-link"),I=ce("motion");return o(),u(P,null,[f(e(N),{title:"Patients Quick View"}),t("div",ve,[t("div",fe,[t("div",ye,[h(f(ee,{to:"/patients/search",class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-800 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:x(()=>[de(" Add Patient")]),_:1},512),[[T,D(L.CREATE,V.PATIENT)]]),t("input",{class:"w-64 ml-6 pl-4 pr-2 py-1 text-sm text-gray-800 placeholder-gray-400 border-1 border-gray-400 rounded-sm focus:placeholder-gray-500 focus:border-sky-800 focus:outline-none focus:shadow-outline-purple form-input",type:"text",placeholder:"Search ...","aria-label":"Search",onKeyup:d[0]||(d[0]=s=>J(s)),onFocus:d[1]||(d[1]=s=>e(C)())},null,32)]),h(t("button",{onClick:ue(Y,["prevent"]),class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"}," Quick Registration ",512),[[T,D(L.CREATE,V.PATIENT)]])]),ge,t("div",he,[h((o(),u("section",be,[e(z)?(o(),u("div",xe,[f(e(S),{message:"Fetching patients ..."})])):(o(),u("div",Pe,[(o(!0),u(P,null,A(e(q),s=>(o(),u("a",{key:s.patientId,onClick:te=>e(E)(s),class:R(["bg-white w-full flex items-center p-1 mb-1 rounded-sm shadow border",{"border-sky-800 bg-emerald-200":s.uid===e(c)?.uid}])},[t("div",we,[t("div",Ee,[t("span",null,_(e(W)(s)),1),t("span",Ce,_(s.age)+" yrs, "+_(e(X)(s.gender)),1)]),t("div",Ie,[t("span",null,_(s.patientId),1),t("span",null,_(s.clientPatientId),1)]),t("div",Te,[t("span",null,_(s?.client?.district?.province?.name),1),t("span",null,_(s?.client?.name),1)])]),Ae],10,ke))),128))]))])),[[I]]),K.value?h((o(),u("section",Re,[f(e(U),{onEditPatient:d[2]||(d[2]=()=>k(n)?n.value=!0:n=!0)}),t("nav",De,[t("div",Ve,[(o(),u(P,null,A(H,s=>t("a",{key:s,class:R(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200 hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(l)===s}]),onClick:te=>k(l)?l.value=s:l=s},_(s),11,Le)),64))])]),e(l)==="samples"?(o(),y(e(O),{key:0,target:"patient-samples",targetUid:e(c).uid},null,8,["targetUid"])):m("",!0),e(l)==="cases"?(o(),y(e(F),{key:1})):m("",!0),e(l)==="billing"?(o(),y(e($),{key:2,patientUid:e(c)?.uid},null,8,["patientUid"])):m("",!0),e(l)==="logs"?(o(),y(e(j),{key:3,targetType:"patient",targetId:e(c)?.uid},null,8,["targetId"])):m("",!0)])),[[I]]):m("",!0)]),e(n)?(o(),y(e(B),{key:0,onClose:d[3]||(d[3]=s=>k(n)?n.value=!1:n=!1),contentWidth:"w-3/6"},{header:x(()=>[Se]),body:x(()=>[f(e(M),{patient:e(c),navigate:!1,onClose:Z},null,8,["patient"])]),_:1})):m("",!0)])],64)}}});const je=me(Ne,[["__scopeId","data-v-81af20fc"],["__file","/home/aurthur/Documents/Development/felicity-lims/webapp/views/patient/PatientsCompact.vue"]]);export{je as default};
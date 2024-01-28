import{_ as r,k as se,l as oe,j as ae}from"./billing-356772f3.js";import{f as ne,G as l,r as b,c as ie,d as re,v as le,aj as ce,h as o,k as _,B as v,u as e,x as t,y as n,ag as g,A as x,al as de,F as k,ak as T,i as P,j as y,p as ue,e as _e,s as A,D as p,_ as pe}from"./_plugin-vue_export-helper-3f67fb71.js";import{h as R,o as D,a as L}from"./constants-df420cc9.js";import{b as S,a as me}from"./runtime-dom.esm-bundler-6e07ef74.js";const w=h=>(ue("data-v-81af20fc"),h=h(),_e(),h),fe={class:""},ve={class:"flex justify-between"},ye={class:"flex items-center content-between"},he=["onClick"],ge=w(()=>t("hr",null,null,-1)),be={class:"grid grid-cols-12 gap-4 mt-2"},xe={initial:{opacity:0,y:100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-3 h-screen overflow-y-scroll overscroll-contain patient-scroll"},ke={key:0,class:"py-4 text-center bg-white w-full mb-1 rounded-sm shadow border"},Pe={key:1},we=["onClick"],Ee={class:"flex-grow p-1"},Ce={class:"font-semibold text-gray-800 flex justify-between"},Ie={class:"text-sm text-gray-500"},Te={class:"text-sm text-gray-500 flex justify-between"},Ae={class:"text-sm text-gray-500 flex justify-between"},Re=w(()=>t("div",{class:"p-2"},[n(' <span class="block h-4 w-4 bg-sky-800 rounded-full bottom-0 right-0"></span> ')],-1)),De={key:0,initial:{opacity:0,y:-100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-9"},Le={class:"bg-white shadow-md mt-2"},Se={class:"-mb-px flex justify-start"},Ve=["onClick"],je=w(()=>t("h3",null,"Patient Form",-1)),Fe=ne({__name:"PatientsCompact",setup(h){const V=l(()=>r(()=>import("./LoadingMessage-83976fce.js"),["assets/LoadingMessage-83976fce.js","assets/_plugin-vue_export-helper-3f67fb71.js"])),j=l(()=>r(()=>import("./PageHeading-8026de94.js"),["assets/PageHeading-8026de94.js","assets/_plugin-vue_export-helper-3f67fb71.js"])),F=l(()=>r(()=>import("./AnalyisRequestListing-e93a00a6.js"),["assets/AnalyisRequestListing-e93a00a6.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js"])),N=l(()=>r(()=>import("./CaseTable-127addf1.js"),["assets/CaseTable-127addf1.js","assets/_plugin-vue_export-helper-3f67fb71.js"])),O=l(()=>r(()=>import("./AuditLog-4ad6be59.js"),["assets/AuditLog-4ad6be59.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js"])),B=l(()=>r(()=>import("./SimpleModal-1f91868a.js"),["assets/SimpleModal-1f91868a.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/SimpleModal-f645a074.css"])),M=l(()=>r(()=>import("./PatientForm-f3264c82.js"),["assets/PatientForm-f3264c82.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/vue-multiselect.esm-ea7276db.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/index-3189f120.js","assets/billing-356772f3.js","assets/index-5bee2eb9.css","assets/patient.mutations-91559ac2.js","assets/array-a5aedee5.js","assets/vue-multiselect-b0b22fef.css"])),U=l(()=>r(()=>import("./PatientInfo-f1ef08d4.js"),["assets/PatientInfo-f1ef08d4.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/constants-df420cc9.js","assets/index-3189f120.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/index-5bee2eb9.css"])),$=l(()=>r(()=>import("./PatientBill-10f65f21.js"),["assets/PatientBill-10f65f21.js","assets/billing-356772f3.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/billing.mutations-59bfac39.js","assets/array-a5aedee5.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/PatientBill-7bdbff76.css"]));let f=se(),G=oe();const{patients:Q,fetchingPatients:q}=ae(f);let i=b(!1),c=b("samples");const z=["samples","cases","billing","logs"];let d=b({}),m=ie({first:25,before:"",text:"",sortBy:["-uid"],filterAction:!1});const H=["Male","Female","Missing","Trans Gender"];G.fetchCountries(),f.fetchPatients(m);function K(a){m.first=100,m.before="",m.text=a.target.value,m.filterAction=!0,f.fetchPatients(m)}const W=re(()=>Object.keys(d?.value)?.length>0);let J=a=>a.firstName+" "+a.lastName,X=a=>H[a],E=a=>{d.value=a,f.setPatient(a)},C=()=>{d.value={},f.resetPatient()};const Y=async()=>{C(),i.value=!0},Z=a=>{E(a),i.value=!1};return(a,u)=>{const ee=le("router-link"),I=ce("motion");return o(),_(k,null,[v(e(j),{title:"Patients Quick View"}),t("div",fe,[t("div",ve,[t("div",ye,[n(' <h1 class="h1 my-4 font-bold text-dark-700">Listing</h1> '),g(v(ee,{to:"/patients/search",class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-800 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:x(()=>[de(" Add Patient")]),_:1},512),[[S,R(L.CREATE,D.PATIENT)]]),t("input",{class:"w-64 ml-6 pl-4 pr-2 py-1 text-sm text-gray-800 placeholder-gray-400 border-1 border-gray-400 rounded-sm focus:placeholder-gray-500 focus:border-sky-800 focus:outline-none focus:shadow-outline-purple form-input",type:"text",placeholder:"Search ...","aria-label":"Search",onKeyup:u[0]||(u[0]=s=>K(s)),onFocus:u[1]||(u[1]=s=>e(C)())},null,32)]),g(t("button",{onClick:me(Y,["prevent"]),class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"}," Quick Registration ",8,he),[[S,R(L.CREATE,D.PATIENT)]])]),ge,t("div",be,[g((o(),_("section",xe,[e(q)?(o(),_("div",ke,[v(e(V),{message:"Fetching patients ..."})])):(o(),_("div",Pe,[(o(!0),_(k,null,T(e(Q),s=>(o(),_("a",{key:s.patientId,onClick:te=>e(E)(s),class:A(["bg-white w-full flex items-center p-1 mb-1 rounded-sm shadow border",{"border-sky-800 bg-emerald-200":s.uid===e(d)?.uid}])},[t("div",Ee,[t("div",Ce,[t("span",null,p(e(J)(s)),1),t("span",Ie,p(s.age)+" yrs, "+p(e(X)(s.gender)),1)]),t("div",Te,[t("span",null,p(s.patientId),1),t("span",null,p(s.clientPatientId),1)]),t("div",Ae,[t("span",null,p(s?.client?.district?.province?.name),1),t("span",null,p(s?.client?.name),1)])]),Re],10,we))),128))]))])),[[I]]),e(W)?g((o(),_("section",De,[n(" PatientInfo "),v(e(U),{onEditPatient:u[2]||(u[2]=()=>P(i)?i.value=!0:i=!0)}),n(" Sample and Case Data "),t("nav",Le,[t("div",Se,[(o(),_(k,null,T(z,s=>t("a",{key:s,class:A(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200 hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(c)===s}]),onClick:te=>P(c)?c.value=s:c=s},p(s),11,Ve)),64))])]),e(c)==="samples"?(o(),y(e(F),{key:0,target:"patient-samples",targetUid:e(d).uid},null,8,["targetUid"])):n("v-if",!0),e(c)==="cases"?(o(),y(e(N),{key:1})):n("v-if",!0),e(c)==="billing"?(o(),y(e($),{key:2,patientUid:e(d)?.uid},null,8,["patientUid"])):n("v-if",!0),e(c)==="logs"?(o(),y(e(O),{key:3,targetType:"patient",targetId:e(d)?.uid},null,8,["targetId"])):n("v-if",!0)])),[[I]]):n("v-if",!0)]),n(" Patient Edit Form Modal "),e(i)?(o(),y(e(B),{key:0,onClose:u[3]||(u[3]=s=>P(i)?i.value=!1:i=!1),contentWidth:"w-3/6"},{header:x(()=>[je]),body:x(()=>[v(e(M),{patient:e(d),navigate:!1,onClose:Z},null,8,["patient"])]),_:1})):n("v-if",!0)])],64)}}});const Ue=pe(Fe,[["__scopeId","data-v-81af20fc"],["__file","/home/aurthurm/Development/felicity-lims/webapp/views/patient/PatientsCompact.vue"]]);export{Ue as default};

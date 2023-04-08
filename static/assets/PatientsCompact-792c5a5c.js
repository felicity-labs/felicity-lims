import{d as K,a1 as W,a2 as Y,s as J,r as N,A as j,B as D,U as X,o as i,g as m,h as t,y as n,i as h,C as v,l as p,E as x,G as Z,j as e,w as tt,F,z as B,t as a,k as b,D as g,I as et,a3 as st,a4 as ot,L as at,H as L,_ as nt}from"./index-00041ead.js";import{t as it,a as lt}from"./CaseTable-773f67e1.js";import{t as rt}from"./AuditLog-711dee35.js";import{P as dt}from"./PatientForm-a476cbc3.js";import{h as k,o as w,a as C}from"./constants-f2a89c53.js";/* empty css                                                                 */const d=f=>(st("data-v-81af20fc"),f=f(),ot(),f),ct={class:""},mt={class:"flex justify-between"},ut={class:"flex items-center content-between"},_t=["onClick"],pt=d(()=>t("hr",null,null,-1)),ht={class:"grid grid-cols-12 gap-4 mt-2"},ft={initial:{opacity:0,y:100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-4 h-screen overflow-y-scroll overscroll-contain patient-scroll"},xt={key:0,class:"py-4 text-center bg-white w-full mb-1 rounded-sm shadow border"},gt={key:1},yt=["onClick"],vt={class:"flex-grow p-1"},bt={class:"font-semibold text-gray-800 flex justify-between"},kt={class:"text-sm text-gray-500"},wt={class:"text-sm text-gray-500 flex justify-between"},Ct={class:"text-sm text-gray-500 flex justify-between"},Pt=d(()=>t("div",{class:"p-2"},[n(' <span class="block h-4 w-4 bg-sky-800 rounded-full bottom-0 right-0"></span> ')],-1)),It={key:0,initial:{opacity:0,y:-100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-8"},St={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4"},Tt={class:"grid grid-cols-12 gap-3"},At={class:"sm:col-span-2 text-center hidden sm:block"},Et={class:"inline-block font-md text-medium mb-2"},Nt={class:"grid grid-rows-2 mx-auto mb-1 py-1 w-4/5 2lg:w-3/5 rounded-sm bg-sky-800"},jt={class:"inline-block font-medium text-2xl text-white"},Dt=d(()=>t("div",{class:"inline-block font-medium text-white text-sm lg:text-md"}," Yrs Old ",-1)),Ft={class:"col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0"},Bt={class:"flex justify-between items-center mb-2 sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold"},Lt={class:"font-medium text-md"},Mt=d(()=>t("hr",null,null,-1)),Rt={class:"grid grid-cols-2 mt-2"},Ut={class:"col-span-1"},$t={class:"flex"},Ot=d(()=>t("span",{class:"text-gray-800 text-sm font-medium w-16"},"Client",-1)),Vt={class:"text-gray-600 text-sm md:text-md"},Gt={class:"flex"},zt=d(()=>t("span",{class:"text-gray-800 text-sm font-medium w-16"},"District:",-1)),Qt={class:"text-gray-600 text-sm md:text-md"},qt={class:"flex"},Ht=d(()=>t("span",{class:"text-gray-800 text-sm font-medium w-16"},"Province:",-1)),Kt={class:"text-gray-600 text-sm md:text-md"},Wt={class:"col-span-1"},Yt={class:"col-span-2 flex mt-2"},Jt=d(()=>t("span",{class:"text-gray-800 text-sm font-medium w-16"},"Client Patient ID",-1)),Xt={class:"text-gray-600 text-sm md:text-md"},Zt={class:"bg-white shadow-md mt-2"},te={class:"-mb-px flex justify-start"},ee=["onClick"],se=d(()=>t("h3",null,"Patient Form",-1)),oe=K({__name:"PatientsCompact",setup(f){let y=W(),M=Y();const{patients:R,fetchingPatients:U}=J(y);let r=N(!1),u=N("samples");const $=["samples","cases","logs"];let o=j({}),_=j({first:25,before:"",text:"",sortBy:["-uid"],filterAction:!1});const O=["Male","Female","Missing","Trans Gender"];M.fetchCountries(),y.fetchPatients(_);function V(l){_.first=100,_.before="",_.text=l.target.value,_.filterAction=!0,y.fetchPatients(_)}function G(){return o.patientId!==void 0}let P=l=>l.firstName+" "+l.lastName,z=l=>O[l],I=l=>{Object.assign(o,l)},S=()=>{Object.assign(o,{})};const Q=()=>{S(),r.value=!0},q=l=>{I(l),r.value=!1};return(l,c)=>{const T=D("router-link"),A=D("font-awesome-icon"),E=X("motion");return i(),m("div",ct,[t("div",mt,[t("div",ut,[n(' <h1 class="h1 my-4 font-bold text-dark-700">Listing</h1> '),h(p(T,{to:"/patients/search",class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-800 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:x(()=>[Z(" Add Patient")]),_:1},512),[[v,k(C.CREATE,w.PATIENT)]]),t("input",{class:"w-64 ml-6 pl-4 pr-2 py-1 text-sm text-gray-800 placeholder-gray-400 border-1 border-gray-400 rounded-sm focus:placeholder-gray-500 focus:border-sky-800 focus:outline-none focus:shadow-outline-purple form-input",type:"text",placeholder:"Search ...","aria-label":"Search",onKeyup:c[0]||(c[0]=s=>V(s)),onFocus:c[1]||(c[1]=s=>e(S)())},null,32)]),h(t("button",{onClick:tt(Q,["prevent"]),class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"}," Quick Registration ",8,_t),[[v,k(C.CREATE,w.PATIENT)]])]),pt,t("div",ht,[h((i(),m("section",ft,[e(U)?(i(),m("div",xt,[p(at,{message:"Fetching patients ..."})])):(i(),m("div",gt,[(i(!0),m(F,null,B(e(R),s=>(i(),m("a",{key:s.patientId,href:"#",onClick:H=>e(I)(s),class:L(["bg-white w-full flex items-center p-1 mb-1 rounded-sm shadow border",{"border-sky-800 bg-emerald-200":s.uid===e(o).uid}])},[t("div",vt,[t("div",bt,[t("span",null,a(e(P)(s)),1),t("span",kt,a(s.age)+" yrs, "+a(e(z)(s.gender)),1)]),t("div",wt,[t("span",null,a(s.patientId),1),t("span",null,a(s.clientPatientId),1)]),t("div",Ct,[t("span",null,a(s?.client?.district?.province?.name),1),t("span",null,a(s?.client?.name),1)])]),Pt],10,yt))),128))]))])),[[E]]),G()?h((i(),m("section",It,[n(" Question Listing Item Card "),t("div",St,[t("div",Tt,[n(" Meta Column "),t("div",At,[t("div",Et,a(e(o).patientId),1),n(" Age "),t("div",Nt,[t("div",jt,a(e(o).age),1),Dt])]),n(" Summary Column "),t("div",Ft,[t("div",Bt,[t("span",null,a(e(P)(e(o))),1),t("div",null,[t("span",Lt,a(e(o).dateOfBirth),1),h(t("button",{onClick:c[2]||(c[2]=s=>b(r)?r.value=!0:r=!0),class:"p-1 ml-2 border-white border text-gray-500 text-md rounded-sm transition duration-300 hover:border-sky-800 hover:text-sky-800 focus:outline-none"},[p(A,{icon:"fa-edit"})],512),[[v,k(C.UPDATE,w.PATIENT)]]),p(T,{to:{name:"patient-detail",params:{patientUid:e(o).uid}},class:"p-1 ml-2 border-white border text-gray-500 rounded-sm transition duration-300 hover:border-sky-800 hover:text-sky-800 focus:outline-none"},{default:x(()=>[p(A,{icon:"fa-left-right"})]),_:1},8,["to"])])]),Mt,t("div",Rt,[t("div",Ut,[n(" Client Details "),t("div",$t,[Ot,t("span",Vt,a(e(o)?.client?.name),1)]),t("div",Gt,[zt,t("span",Qt,a(e(o)?.client?.district?.name),1)]),t("div",qt,[Ht,t("span",Kt,a(e(o)?.client?.district?.province?.name),1)])]),t("div",Wt,[n(" Identifiers "),t("div",Yt,[Jt,t("span",Xt,a(e(o).clientPatientId),1)])])])])])]),n(" Sample and Case Data "),t("nav",Zt,[t("div",te,[(i(),m(F,null,B($,s=>t("a",{key:s,class:L(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200 hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(u)===s}]),onClick:H=>b(u)?u.value=s:u=s,href:"#"},a(s),11,ee)),64))])]),e(u)==="samples"?(i(),g(it,{key:0,target:"patient-samples",targetUid:e(o).uid},null,8,["targetUid"])):n("v-if",!0),e(u)==="cases"?(i(),g(lt,{key:1})):n("v-if",!0),e(u)==="logs"?(i(),g(rt,{key:2,targetType:"patient",targetId:e(o)?.uid},null,8,["targetId"])):n("v-if",!0)])),[[E]]):n("v-if",!0)]),n(" Patient Edit Form Modal "),e(r)?(i(),g(et,{key:0,onClose:c[3]||(c[3]=s=>b(r)?r.value=!1:r=!1),contentWidth:"w-3/6"},{header:x(()=>[se]),body:x(()=>[p(dt,{patient:e(o),navigate:!1,onClose:q},null,8,["patient"])]),_:1})):n("v-if",!0)])}}});const ce=nt(oe,[["__scopeId","data-v-81af20fc"],["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/patient/PatientsCompact.vue"]]);export{ce as default};
import{d as u,u as v,s as b,p as n,j as e,o as f,c as h,b as r,e as E,L as D,w as P,f as p,g,_ as t,k as T}from"./index-48799f0c.js";import{u as y}from"./patient-9ce25932.js";import{h as A,o as R,a as k}from"./constants-9cf3ef05.js";const w={class:"col-span-12"},V={class:"my-4"},x=u({__name:"PatientDetail",setup(I){const l=e(()=>t(()=>import("./FelTabs-18f17709.js"),["assets/FelTabs-18f17709.js","assets/index-48799f0c.js","assets/index-c2286288.css","assets/FelTabs-e0c91a0a.css"])),_=y(),d=v(),{patient:a}=b(_);function c(o){d?.push({name:"samples-add",params:{patientUid:o?.uid??""}})}const s=n(()=>a?.value?.uid),m=n(()=>[{id:"samples",label:"samples",component:e(()=>t(()=>import("./FelAnalyisRequestListing-60a5943e.js"),["assets/FelAnalyisRequestListing-60a5943e.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),props:{target:"patient-samples",targetUid:s.value}},{id:"cases",label:"cases",component:e(()=>t(()=>import("./CaseTable-a6383194.js"),["assets/CaseTable-a6383194.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),hidden:!0},{id:"billing",label:"billing",component:e(()=>t(()=>import("./PatientBill-42268134.js"),["assets/PatientBill-42268134.js","assets/index-48799f0c.js","assets/index-c2286288.css","assets/billing-77a2d981.js","assets/array-7041bb33.js","assets/PatientBill-7bdbff76.css"])),props:{patientUid:s.value}},{id:"logs",label:"logs",component:e(()=>t(()=>import("./FelAuditLog-00f3977b.js"),["assets/FelAuditLog-00f3977b.js","assets/index-48799f0c.js","assets/index-c2286288.css","assets/user-5df4f874.js","assets/_queries-16a4477d.js"])),props:{targetType:"patient",targetUid:s.value}}]);return(o,i)=>(f(),h("section",w,[r("section",V,[E(r("button",{class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:i[0]||(i[0]=P(L=>c(p(a)),["prevent"]))}," Add Sample ",512),[[D,A(k.UPDATE,R.PATIENT)]])]),g(p(l),{tabs:m.value,"initial-tab":"samples"},null,8,["tabs"])]))}}),B=T(x,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/patient/_id/PatientDetail.vue"]]);export{B as default};

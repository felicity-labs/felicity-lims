import{d as se,r as v,at as b,az as oe,au as R,R as ae,I as le,s as ne,n as x,p as m,q as re,o as f,c as h,b as s,g as p,f as a,e as P,L as ie,w as y,i as T,z as g,A as ue,y as ce,F as w,C as L,t as de,ad as me,B as E,j as S,_ as C,k as fe}from"./index-0b8039cf.js";import{u as pe}from"./setup-7da018b2.js";import{u as he}from"./analysis-0f81a9d5.js";import{h as ve,o as _e,a as be}from"./constants-0604be95.js";import{e as ye}from"./analyses.mutations-891c10cb.js";import"./_queries-58a09d05.js";const ge={class:"flex items-center justify-between"},Se=s("hr",null,null,-1),Ce=s("h3",null,"Create QC Analyses Requests",-1),xe={action:"post",class:"mb-8 bg-white"},we={class:"grid grid-cols-3 gap-x-4 mb-4"},ke={class:"block col-span-1"},Ae=s("span",{class:"text-gray-700"},"Department",-1),qe=s("option",{value:""},null,-1),Qe=["value"],Ve={id:"samples"},Re=s("hr",null,null,-1),Pe={class:"flex justify-between items-center py-2"},Te=s("h5",null,"Add Control Samples",-1),Le=s("hr",{class:"mb-4"},null,-1),Ee={class:"flex items-center justify-between"},Ue={class:""},De={class:"grid grid-cols-4 gap-x-4"},Ie={class:"block col-span-1 mb-2"},Me=s("span",{class:"text-gray-700"},"QC Template",-1),Be={class:"block col-span-1 mb-2"},je=s("span",{class:"text-gray-700"},"QC Levels",-1),Oe={class:"block col-span-1 mb-2"},$e=s("span",{class:"text-gray-700"},"Analysis Profiles",-1),Ne={class:"block col-span-1 mb-2"},Fe=s("span",{class:"text-gray-700"},"Analysis Services",-1),ze={class:"ml-4"},He=["onClick"],We=s("hr",null,null,-1),Ze=s("hr",null,null,-1),Ge=se({__name:"QualityControlListing",setup(Je){const _=S(()=>C(()=>import("./vue-multiselect.esm-400dcdee.js"),["assets/vue-multiselect.esm-400dcdee.js","assets/index-0b8039cf.js","assets/index-a67f0314.css"])),U=S(()=>C(()=>import("./FelDataTable-42b05155.js"),["assets/FelDataTable-42b05155.js","assets/index-0b8039cf.js","assets/index-a67f0314.css"])),D=S(()=>C(()=>import("./FelPageHeading-7e5eb6ca.js"),["assets/FelPageHeading-7e5eb6ca.js","assets/index-0b8039cf.js","assets/index-a67f0314.css"])),I=S(()=>C(()=>import("./FelModal-fd93dd15.js"),["assets/FelModal-fd93dd15.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),M=v([{name:"All",value:""},{name:"Pending",value:"pending"},{name:"Awaiting",value:"awaiting"},{name:"Approved",value:"approved"}]),B=v([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Date Created",value:"createdAt",sortable:!1,defaultSort:!0,showInToggler:!1,hidden:!1,customRender:function(o,t){return b("div",oe(o.createdAt))}},{name:"Run Sets (samples)",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(o,t){return b("div",K(o.samples??[]))}},{name:"Test(s)",value:"code",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(o,t){return b("div",X(o.samples??[]))}},{name:"Status",value:"status",sortable:!1,defaultSort:!1,showInToggler:!0},{name:"",value:"",sortable:!1,hidden:!1,showInToggler:!1,customRender:function(o,t){return b(R,{to:{name:"qc-set-detail",params:{qcSetUid:o.uid}},class:"px-2 mr-2 border-sky-800 border text-gray-500rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",innerHTML:"View Run Set"})}}]),u=ae(),i=he(),k=pe(),{withClientMutation:j}=le(),{qcSets:A,fetchingQCSets:O}=ne(u);let $=x({first:void 0,after:"",text:"",sortBy:["name"]});i.fetchAnalysesServices($),i.fetchQCLevels(),i.fetchQCTemplates(),i.fetchAnalysesProfiles(),k.fetchDepartments({}),u.resetQCSets();let q=v(25),N=m(()=>`Showing ${A?.value?.length} of ${u.getQCSetCount} QC Sets`),l=x({first:q.value,after:"",status:"",sortBy:["-uid"],filterAction:!1});u.fetchQCSets(l);function F(o){l.first=25,l.after="",l.status=o.filterStatus,l.filterAction=!0,u.fetchQCSets(l)}const z=m(()=>i.getAnalysesProfiles);m(()=>{const o=i.getAnalysesServicesSimple;let t=new Set;return o.forEach(e=>{e.profiles?.length===0&&t.add(e)}),[...t]});let r=v(!1),H=v(!0),d=x({departmentUid:void 0,samples:[]});re(()=>Q());function Q(){d.samples?.push({qcTemplate:void 0,qcLevels:[],analysisProfiles:[],analysisServices:[]})}function W(){const o=d.samples?.map(t=>({qcTemplateUid:t.qcTemplate?.uid,qcLevels:t.qcLevels?.map(e=>e.uid),analysisProfiles:t.analysisProfiles?.map(e=>e.uid),analysisServices:t.analysisServices?.map(e=>e.uid)}));j(ye,{samples:o},"createQcSet").then(t=>u.addQCSets(t?.qcSets))}function Z(o){d.samples?.splice(o,1)}function G(){H.value===!0&&W(),r.value=!1}const V=m(()=>u.getQCSetPageInfo);function J(){l.first=+q.value,l.after=V?.value?.pageInfo?.endCursor??"",l.text="",l.filterAction=!1,u.fetchQCSets(l)}function K(o){let t=[];return o?.forEach(e=>{e?.sampleId+""+e.status;let n=e?.qcLevel?.level?.match(/\b([A-Z])/g).join("")+" ("+e.status+")";t.includes(n)||t.push(n)}),t.join(", ")}function X(o){let t=[];return o?.forEach(e=>{e?.profiles?.forEach(n=>{t.includes(n.name)||t.push(n.name)})}),o?.forEach(e=>{e?.analyses?.forEach(n=>{t.includes(n.name)||t.push(n.name)})}),t.join(", ")}const Y=m(()=>k.getDepartments),ee=m(()=>i.getQCTemplates),te=m(()=>i.getQCLevels);return(o,t)=>(f(),h(w,null,[s("div",ge,[p(a(D),{title:"Reference Runs (QC)"}),s("div",null,[P(s("button",{type:"button",class:"border border-sky-800 text-sky-800 rounded-sm px-2 py-1 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 hover:text-white focus:outline-none focus:shadow-outline",onClick:t[0]||(t[0]=y(e=>T(r)?r.value=!a(r):r=!a(r),["prevent"]))}," Add Reference Runs ",512),[[ie,ve(be.CREATE,_e.SAMPLE)]]),p(a(R),{to:"/quality-control/charts",id:"control-charts",class:"border border-orange-800 text-orange-800 rounded-sm px-2 py-1 m-2 transition-colors duration-500 ease select-none hover:bg-orange-800 hover:text-white focus:outline-none focus:shadow-outline"},{default:g(()=>[ue(" View Run Charts ")]),_:1})])]),Se,p(a(U),{columns:B.value,data:a(A),toggleColumns:!0,loading:a(O),paginable:!0,pageMeta:{fetchCount:a(l).first,hasNextPage:V.value?.pageInfo?.hasNextPage,qcSetCount:a(N)},searchable:!1,onOnSearch:F,filterable:!0,filterMeta:{defaultFilter:a(l).status,filters:M.value},onOnPaginate:J,selectable:!1},{footer:g(()=>[]),_:1},8,["columns","data","loading","pageMeta","filterMeta"]),a(r)?(f(),ce(a(I),{key:0,onClose:t[4]||(t[4]=e=>T(r)?r.value=!1:r=!1),contentWidth:"w-4/5"},{header:g(()=>[Ce]),body:g(()=>[s("form",xe,[s("div",we,[s("label",ke,[Ae,P(s("select",{name:"clientContacts",id:"clientContacts","onUpdate:modelValue":t[1]||(t[1]=e=>a(d).departmentUid=e),class:"form-input mt-1 block w-full"},[qe,(f(!0),h(w,null,L(Y.value,e=>(f(),h("option",{key:e.uid,value:e.uid},de(e.name),9,Qe))),128))],512),[[me,a(d).departmentUid]])])]),s("section",Ve,[Re,s("div",Pe,[Te,a(d).samples?.length<20?(f(),h("button",{key:0,onClick:t[2]||(t[2]=y(e=>Q(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add QCSet")):E("",!0)]),Le,(f(!0),h(w,null,L(a(d).samples,(e,n)=>(f(),h("div",{key:n},[s("div",Ee,[s("div",Ue,[s("div",De,[s("label",Ie,[Me,p(a(_),{class:"max-w-[300px]",modelValue:e.qcTemplateUid,"onUpdate:modelValue":c=>e.qcTemplateUid=c,options:ee.value,multiple:!1,searchable:!0,label:"name","track-by":"uid"},null,8,["modelValue","onUpdate:modelValue","options"])]),s("label",Be,[je,p(a(_),{class:"max-w-[300px]",modelValue:e.qcLevels,"onUpdate:modelValue":c=>e.qcLevels=c,options:te.value,multiple:!0,searchable:!0,label:"level","track-by":"uid"},null,8,["modelValue","onUpdate:modelValue","options"])]),s("label",Oe,[$e,p(a(_),{class:"max-w-[300px]",modelValue:e.analysisProfiles,"onUpdate:modelValue":c=>e.analysisProfiles=c,options:z.value,multiple:!0,searchable:!0,label:"name","track-by":"uid"},null,8,["modelValue","onUpdate:modelValue","options"])]),s("label",Ne,[Fe,p(a(_),{class:"max-w-[300px]",modelValue:e.analysisServices,"onUpdate:modelValue":c=>e.analysisServices=c,options:a(i).getAnalysesServicesSimple,multiple:!0,searchable:!0,label:"name","track-by":"uid"},null,8,["modelValue","onUpdate:modelValue","options"])])])]),s("div",ze,[s("button",{onClick:y(c=>Z(n),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"},"Remove",8,He)])]),We]))),128))]),Ze,s("button",{type:"button",onClick:t[3]||(t[3]=y(e=>G(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):E("",!0)],64))}}),ot=fe(Ge,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/qcontrol/QualityControlListing.vue"]]);export{ot as default};

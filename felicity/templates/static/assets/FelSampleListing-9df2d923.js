import{d as fe,R as me,s as ve,J as ye,u as he,n as A,p as B,r as L,at as o,au as M,az as k,bg as be,o as ke,c as Ce,b as i,e as u,L as c,g as N,z as T,A as Se,f as C,w as d,F as _e,j as xe,_ as ge,k as Re}from"./index-0b8039cf.js";import{u as Ae}from"./analysis-0f81a9d5.js";import{u as Le}from"./samples-8ba0dad4.js";import{h as p,o as f,a as m}from"./constants-0604be95.js";import"./analyses.mutations-891c10cb.js";import"./storage.mutations-49cb40f5.js";const we={class:"mb-4 flex justify-start"},Ee=i("hr",null,null,-1),Pe=fe({__name:"FelSampleListing",setup(Be){const I=xe(()=>ge(()=>import("./FelDataTable-42b05155.js"),["assets/FelDataTable-42b05155.js","assets/index-0b8039cf.js","assets/index-a67f0314.css"])),v=me(),w=Ae(),{samplePageInfo:E,fetchingSamples:D}=ve(v);let P=ye(),x=he();const a=A({barcodes:!1,can_cancel:!1,can_receive:!1,can_reinstate:!1,can_reject:!1,can_copy_to:!1,can_download:!1,can_print:!1,can_publish:!1,can_store:!1,can_recover:!1}),b=B(()=>v.getSamples),q=L([{name:"All",value:""},{name:"Expected",value:"expected"},{name:"Received",value:"received"},{name:"Awaiting",value:"awaiting"},{name:"Approved",value:"approved"},{name:"Published",value:"published"},{name:"Invalidated",value:"invalidated"},{name:"Cancelled",value:"cancelled"},{name:"Rejected",value:"rejected"},{name:"Stored",value:"stored"},{name:"Referred",value:"referred"},{name:"Paired",value:"paired"}]),j=L([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"",value:"",sortable:!1,showInToggler:!1,hidden:!1,customRender:function(t,e){return o("div",[t.priority>1?o("span",{class:[{"text-orange-600":t.priority>1}]},o("i",{class:"fa fa-star"})):"",t.status==="stored"?o("span",o("i",{class:"fa-briefcase"})):""])}},{name:"Sampe ID",value:"sampleId",sortable:!0,sortBy:"asc",hidden:!1,customRender:function(t,e){return o(M,{to:{name:"sample-detail",params:{patientUid:t?.analysisRequest?.patient?.uid,sampleUid:t?.uid}},innerHTML:t?.sampleId})}},{name:"Sample Type",value:"sampleType.name",sortable:!1,sortBy:"asc",hidden:!0},{name:"Test(s)",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(t,e){return o("span",{innerHTML:H(t.profiles,t.analyses)},[])}},{name:"Patient",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(t,e){const s="analysisRequest.patient.firstName".split(".").reduce((r,R)=>r?.[R],t),n="analysisRequest.patient.lastName".split(".").reduce((r,R)=>r?.[R],t);return o("span",{innerHTML:`${s} ${n}`},[])}},{name:"Gender",value:"analysisRequest.patient.gender",sortable:!1,sortBy:"asc",hidden:!0},{name:"Age",value:"analysisRequest.patient.age",sortable:!1,sortBy:"asc",hidden:!0},{name:"Client Patient ID",value:"analysisRequest.patient.clientPatientId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client",value:"analysisRequest.client.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client Code",value:"analysisRequest.client.code",sortable:!1,sortBy:"asc",hidden:!0},{name:"Province",value:"analysisRequest.client.district.province.name",sortable:!1,sortBy:"asc",hidden:!0},{name:"District",value:"analysisRequest.client.district.name",sortable:!1,sortBy:"asc",hidden:!0},{name:"Client Request Id",value:"analysisRequest.clientRequestId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Date Collected",value:"dateCollected",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(t,e){const s=e.value.split(".").reduce((n,r)=>n?.[r],t);return o("span",{innerHTML:k(s)},[])}},{name:"Date Created",value:"createdAt",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(t,e){const s=e.value.split(".").reduce((n,r)=>n?.[r],t);return o("span",{innerHTML:k(s)},[])}},{name:"Creator",value:"createdBy.firstName",sortable:!1,sortBy:"asc",hidden:!1},{name:"Date Received",value:"dateReceived",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(t,e){const s=e.value.split(".").reduce((n,r)=>n?.[r],t);return o("span",{innerHTML:k(s)},[])}},{name:"Date Submitted",value:"dateSubmitted",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(t,e){const s=e.value.split(".").reduce((n,r)=>n?.[r],t);return o("span",{innerHTML:k(s)},[])}},{name:"Date Verified",value:"dateVerified",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(t,e){const s=e.value.split(".").reduce((n,r)=>n?.[r],t);return o("span",{innerHTML:k(s)},[])}},{name:"Date Published",value:"datePublished",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(t,e){const s=e.value.split(".").reduce((n,r)=>n?.[r],t);return o("span",{innerHTML:k(s)},[])}},{name:"Date Printed",value:"datePrinted",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(t,e){const s=e.value.split(".").reduce((n,r)=>n?.[r],t);return o("span",{innerHTML:k(s)},[])}},{name:"Printed",value:"printed",sortable:!1,sortBy:"asc",hidden:!0},{name:"Status",value:"status",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(t,e){const s=e.value.split(".").reduce((n,r)=>n?.[r],t);return o("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:s},[])}}]);P?.query?.clientUid&&v.resetSamples(),v.fetchSampleTypes();let $=A({first:void 0,after:"",text:"",sortBy:["name"]});w.fetchAnalysesServices($),w.fetchAnalysesProfiles();function H(t,e){let s=[];return t.forEach(n=>s.push(n.name)),e.forEach(n=>s.push(n.name)),s.join(", ")}let l=A({first:50,before:"",status:"received",text:"",sortBy:["-uid"],clientUid:be(P?.query?.clientUid),filterAction:!1});v.fetchSamples(l);function O(t){l.first=t.fetchCount,l.before=E?.value?.endCursor??"",l.text=t.filterText,l.status=t.filterStatus,l.filterAction=!1,v.fetchSamples(l)}function U(t){l.first=50,l.before="",l.text=t.filterText,l.status=t.filterStatus,l.filterAction=!0,v.fetchSamples(l)}const S=L(!1);function F(t){b.value?.forEach(e=>e.checked=t.checked),S.value=t.checked,g()}function V(t){const e=b.value.findIndex(s=>s.uid===t.uid);b.value[e].checked=t.checked,J()?S.value=!0:S.value=!1,g()}async function y(){b.value?.forEach(t=>t.checked=!1),S.value=!1,g()}function J(){return b.value?.every(t=>t.checked===!0)}function _(){let t=[];return b.value?.forEach(e=>{e.checked&&t.push(e)}),t}function g(){a.can_cancel=!1,a.can_receive=!1,a.can_reinstate=!1,a.can_download=!1,a.can_publish=!1,a.can_print=!1,a.can_reject=!1,a.can_store=!1,a.can_recover=!1,a.can_copy_to=!1,a.barcodes=!1;const t=_();t.length!==0&&(a.barcodes=!0,t.every(e=>e.status==="expected")&&(a.can_receive=!0),t.every(e=>["received","expected"].includes(e.status))&&(a.can_cancel=!0,a.can_reject=!0),t.every(e=>["received"].includes(e.status))&&(a.can_store=!0,a.can_copy_to=!0),t.every(e=>["stored"].includes(e.status))&&(a.can_recover=!0),t.every(e=>e.status==="cancelled")&&(a.can_reinstate=!0),t.every(e=>["approved","published"].includes(e.status))&&(a.can_copy_to=!0),t.every(e=>e.status==="approved")&&(a.can_publish=!0),t.every(e=>e.status==="published")&&(a.can_print=!0,a.can_download=!0))}function h(){const t=_();let e=[];return t?.forEach(s=>e.push(s.uid)),e}function z(){const t=_();let e=[];return t?.forEach(s=>e.push(s.sampleId)),e}const{cancelSamples:G,reInstateSamples:Z,receiveSamples:K,printSamples:Q,downloadSamplesImpress:W,publishSamples:X,recoverSamples:Y,cloneSamples:ee}=Le(),te=B(()=>v.getSamples?.length+" of "+v.getSampleCount+" samples"),se=async()=>ee(h()).finally(()=>y()),ae=async()=>G(h()).finally(()=>y()),ne=async()=>Z(h()).finally(()=>y()),re=async()=>K(h()).finally(()=>y()),oe=async()=>{const t=h().map(e=>({uid:e,action:"publish"}));await X(t).finally(()=>y())},le=async()=>await Q(h()).finally(()=>y()),ie=async()=>await W(z()).finally(()=>y()),ue=async()=>{const t=_();x.push({name:"reject-samples",state:{samples:JSON.stringify(t)}})},ce=async()=>{const t=_();x.push({name:"store-samples",state:{samples:JSON.stringify(t)}})},de=async()=>Y(h()).finally(()=>y()),pe=async()=>x.push({name:"print-barcodes",state:{sampleUids:JSON.stringify(h())}});return(t,e)=>(ke(),Ce(_e,null,[i("div",we,[u(N(C(M),{to:"/patients/search",class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},{default:T(()=>[Se("Add Laboratory Request")]),_:1},512),[[c,p(m.CREATE,f.SAMPLE)]])]),Ee,N(C(I),{columns:j.value,data:b.value,toggleColumns:!0,loading:C(D),paginable:!0,pageMeta:{fetchCount:C(l).first,hasNextPage:C(E)?.hasNextPage,countNone:te.value},searchable:!0,filterable:!0,filterMeta:{defaultFilter:C(l).status,filters:q.value},selectable:!0,allChecked:S.value,onOnSearch:U,onOnPaginate:O,onOnCheck:V,onOnCheckAll:F},{footer:T(()=>[i("div",null,[u(i("button",{onClick:e[0]||(e[0]=d(s=>ae(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Cancel ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_cancel]]),u(i("button",{onClick:e[1]||(e[1]=d(s=>ne(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," ReInstate ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_reinstate]]),u(i("button",{onClick:e[2]||(e[2]=d(s=>re(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Reveive ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_receive]]),u(i("button",{onClick:e[3]||(e[3]=d(s=>ce(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Store ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_store]]),u(i("button",{onClick:e[4]||(e[4]=d(s=>de(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Recover ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_recover]]),u(i("button",{onClick:e[5]||(e[5]=d(s=>ue(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Reject ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_reject]]),u(i("button",{onClick:e[6]||(e[6]=d(s=>se(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Copy to New ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_copy_to]]),u(i("button",{onClick:e[7]||(e[7]=d(s=>ie(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Download ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_download]]),u(i("button",{onClick:e[8]||(e[8]=d(s=>oe(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Publish ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_publish]]),u(i("button",{onClick:e[9]||(e[9]=d(s=>le(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Print ",512),[[c,p(m.CANCEL,f.SAMPLE)&&a.can_print]]),u(i("button",{onClick:d(pe,["prevent"]),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Print Barcodes ",512),[[c,a.barcodes]])])]),_:1},8,["columns","data","loading","pageMeta","filterMeta","allChecked"])],64))}}),je=Re(Pe,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/sample/FelSampleListing.vue"]]);export{je as default};
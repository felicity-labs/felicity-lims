import{d as E,q as F,P as T,p as x,o as n,c as i,b as e,F as g,C as S,y as L,f as o,t as r,B as v,w as P,e as w,ad as q,L as R,g as $,aA as O,j as W,aB as j,_ as J,k as z}from"./index-0b8039cf.js";import{u as G}from"./samples-8ba0dad4.js";import{u as H,a as K}from"./storage-abd16e04.js";import{c as Q,e as X,u as Y,b as Z}from"./array-f7fa765a.js";import"./analyses.mutations-891c10cb.js";import"./storage.mutations-49cb40f5.js";const M=e("h4",null,"Store Samples",-1),ee={class:"grid grid-cols-12 gap-4 min-h-full bg-white"},se={className:"col-span-2 pt-4 pl-4 bg-sky-200"},te={className:"col-span-7 pt-4"},oe={class:"mb-2"},ae={key:0},ne={class:"grid grid-cols-2 mt-2"},le={class:"col-span-1"},ie={class:"flex"},re=e("span",{class:"text-gray-600 text-md font-bold w-52"},"Name:",-1),de={class:"text-gray-600 text-md"},ce={class:"flex"},me=e("span",{class:"text-gray-600 text-md font-bold w-52"},"Layout:",-1),pe={class:"text-gray-600 text-md"},ue={key:0,class:"ml-2 text-gray-600 text-md italic bg-slate-400 px-1 rounded-sm"},_e={class:"col-span-1"},he={class:"flex"},ge=e("span",{class:"text-gray-600 text-md font-bold w-52"},"Slots:",-1),ve={class:"text-gray-600 text-md"},fe={class:"flex mt-2"},Se=e("span",{class:"text-gray-600 text-md font-bold w-52"},"Empty Slots:",-1),ye={class:"text-gray-600 text-md mr-2"},be={key:1},xe=e("hr",null,null,-1),we=e("div",{class:"grid grid-cols-12 mb-4"},[e("div",{class:"col-span-1 font-semibold"},"Position"),e("div",{class:"col-span-1 font-semibold"},"Label"),e("div",{class:"col-span-10 font-semibold"},"Sample")],-1),Ce=e("div",{class:"col-span-12 mb-2"},[e("hr")],-1),Ue={class:"col-span-1"},ke={class:"col-span-1"},Ie={class:"col-span-10"},Ne=["onUpdate:modelValue"],Ae=["value"],De=["onClick"],Ve=e("hr",{class:"mt-8"},null,-1),Be={key:0,type:"submit",class:"px-2 py-1 mt-4 border-orange-600 border text-orange-600 rounded-sm transition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"},Ee=e("div",{className:"col-span-3 p-2"},null,-1),Fe=E({__name:"StoreSamples",setup(Te){const C=W(()=>J(()=>import("./FelTreeItem-ad159d41.js"),["assets/FelTreeItem-ad159d41.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/storage-abd16e04.js"])),{treeData:U,tags:f,activeTree:h,resetActiveTree:k}=H();k();const u=K(),{storeSamples:I}=G();let _=JSON.parse(window.history.state.samples),m=[];const N=a=>{m=[],c.value.forEach(s=>{s.sampleUid&&m.push(s.sampleUid?.toString())})};F(()=>u.fetchStorageTree()),T(()=>h.value,(a,s)=>{a.tag==="storage-container"&&(u.fetchStorageContainer(a.uid),c.value=[])},{deep:!0});const l=x(()=>u.getStorageContainer),A=x(()=>{const a=u.getStorageContainer;return(a?.slots??0)-(a?.storedCount??0)}),y=()=>{_=[..._,...l.value?.samples??[]],c.value=[],j(l.value?.cols??1,l.value?.rows??1,!l.value?.grid,l.value?.rowWise??!1).map(s=>({...s,storageContainerUid:l.value?.uid})).forEach(s=>{const t=_.filter(p=>p.storageSlotIndex===s.storageSlotIndex&&p.storageContainerUid===s.storageContainerUid);t.length>0&&(s={...s,sampleUid:t[0].uid},m.push(s.sampleUid.toString())),c.value.push({sampleUid:void 0,...s})})},D=Q({samples:X().required().min(1,"Select At least one sample")}),{handleSubmit:V,errors:Le}=Y({validationSchema:D,initialValues:{priority:0,samples:l.value?.samples??[]}}),{value:c}=Z("samples"),B=a=>{c.value=c.value.map(s=>(s.sampleUid===a&&(s={...s,sampleUid:void 0}),s)),m=m.filter(s=>+s!==a)},b=V(async a=>{const s=a.samples.filter(t=>t.sampleUid);await I(s).then(async t=>{await u.fetchStorageContainer(s[0].storageContainerUid),y()})});return(a,s)=>(n(),i(g,null,[M,e("div",ee,[e("div",se,[e("ul",null,[(n(!0),i(g,null,S(o(U),(t,p)=>(n(),L(o(C),{tree:t,key:p},null,8,["tree"]))),128))])]),e("div",te,[e("div",oe,[o(h).tag===o(f).storageContainer?(n(),i("div",ae,[e("div",ne,[e("div",le,[e("div",ie,[re,e("span",de,r(l.value?.name),1)]),e("div",ce,[me,e("span",pe,r(l.value?.grid?"grid":"column"),1),l.value?.grid?(n(),i("span",ue,r(l.value?.rowWise?"by-row":"by-column"),1)):v("",!0)])]),e("div",_e,[e("div",he,[ge,e("span",ve,r(l.value?.slots),1)]),e("div",fe,[Se,e("span",ye,r(A.value),1)])])])])):(n(),i("div",be,"Please select a storage container"))]),xe,o(h).tag===o(f).storageContainer?(n(),i("button",{key:0,class:"border border-sky-800 bg-sky-800 text-white rounded-sm mt-2 px-4 py-1 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline",onClick:s[0]||(s[0]=t=>y())}," Reset Slots ")):v("",!0),e("form",{action:"post",class:"p-4 mb-8 bg-white",onSubmit:s[1]||(s[1]=P((...t)=>o(b)&&o(b)(...t),["prevent"]))},[we,(n(!0),i(g,null,S(o(c),(t,p)=>(n(),i("div",{class:"mt-2 grid grid-cols-12",key:p},[Ce,e("div",Ue,r(t.storageSlotIndex),1),e("div",ke,r(t.storageSlot),1),e("label",Ie,[w(e("select",{name:"sampleUid",id:"sampleUid","onUpdate:modelValue":d=>t.sampleUid=d,class:"form-input w-64 h-8 p-0",onChange:N},[(n(!0),i(g,null,S(o(_),d=>w((n(),i("option",{key:d.uid,value:d.uid},r(d?.sampleId)+" ❲"+r(d?.analysisRequest?.clientRequestId)+"❳ ",9,Ae)),[[R,!o(m).includes(d.uid.toString())]])),128))],40,Ne),[[q,t.sampleUid]]),t.sampleUid?(n(),i("span",{key:0,class:"ml-2 text-red-500",onClick:d=>B(t.sampleUid)},[$(o(O),{icon:"ban"})],8,De)):v("",!0)])]))),128)),Ve,o(h).tag===o(f).storageContainer&&o(_)?.length>0?(n(),i("button",Be," Store Samples ")):v("",!0)],32)]),Ee])],64))}}),je=z(Fe,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/sample/StoreSamples.vue"]]);export{je as default};
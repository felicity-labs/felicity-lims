import{d as I,I as N,a8 as F,n as C,P as j,p as y,r as _,o as B,c as O,b as s,e as c,v as m,g as k,f as d,i as w,w as P,j as R,_ as T,k as K}from"./index-dcd7b802.js";import{k as L,l as q}from"./instrument.mutations-86534c8a.js";import{u as z}from"./analysis-734a1bdc.js";import{u as G}from"./setup-6f06eb41.js";/* empty css                                                                 */import"./_queries-f2a7ab3f.js";const H={action:"post",class:"p-1"},J={class:"grid grid-cols-3 gap-x-4 mb-4"},Q={class:"block col-span-2 mb-2"},W=s("span",{class:"text-gray-700"},"Method Name",-1),X={class:"block col-span-1 mb-2"},Y=s("span",{class:"text-gray-700"},"keyword",-1),Z={class:"grid grid-cols-2 gap-x-4 mb-4"},$={class:"block col-span-2 mb-2"},ee=s("span",{class:"text-gray-700"},"Analyses",-1),se={class:"block col-span-2 mb-2"},te=s("span",{class:"text-gray-700"},"Instruments",-1),oe={class:"block col-span-2 mb-2"},ae=s("span",{class:"text-gray-700"},"Description",-1),le=s("hr",null,null,-1),ne=I({__name:"MethodForm",props:{method:Object,methodUid:Number,analysis:Object,analysisUid:Number},emits:["close"],setup(g,{emit:M}){const p=R(()=>T(()=>import("./vue-multiselect.esm-3a5e6fb9.js"),["assets/vue-multiselect.esm-3a5e6fb9.js","assets/index-dcd7b802.js","assets/index-a67f0314.css"])),x=z(),u=G(),{withClientMutation:h}=N(),f=g,{method:i,analysis:r}=F(f),t=C({...i?.value});j(()=>f.analysisUid,(o,e)=>{});const v=M,b=y(()=>x.getAnalysesServicesSimple);let l=_([]);r?.value?.uid!==void 0?l.value.push(r.value):b.value?.forEach(o=>{o?.methods?.some(e=>e.uid==i?.value?.uid)&&l.value.push(o)}),u.fetchInstruments();const V=y(()=>u.getInstruments);let n=_([]);const A=()=>{const o=[];return i?.value?.instruments?.forEach(e=>{r?.value?.instruments?.some(E=>E?.uid===e?.uid)&&o.push(e)}),o};n.value=A(),i?.value?.uid!==void 0&&i?.value?.instruments?.forEach(o=>n.value.push(o));function U(){const o={name:t?.name,keyword:t?.keyword,description:t?.description,instruments:n.value?.map(e=>e.uid),analyses:l.value?.map(e=>e.uid)};h(L,{payload:o},"createMethod").then(e=>{v("close"),u.addMethod(e)})}function D(){const o={name:t?.name,keyword:t?.keyword,description:t?.description,instruments:n.value?.map(e=>e.uid),analyses:l.value?.map(e=>e.uid)};h(q,{uid:t?.uid,payload:o},"updateMethod").then(e=>{v("close"),u.updateMethod(e)})}function S(){i?.value?.uid||U(),i?.value?.uid&&D()}return(o,e)=>(B(),O("form",H,[s("div",J,[s("label",Q,[W,c(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[0]||(e[0]=a=>t.name=a),placeholder:"Name ..."},null,512),[[m,t.name]])]),s("label",X,[Y,c(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[1]||(e[1]=a=>t.keyword=a),placeholder:"Keyword ..."},null,512),[[m,t.keyword]])])]),s("div",Z,[s("label",$,[ee,k(d(p),{modelValue:d(l),"onUpdate:modelValue":e[2]||(e[2]=a=>w(l)?l.value=a:l=a),options:b.value,multiple:!0,searchable:!0,label:"name","track-by":"uid",disabled:d(r)?.uid!=null},null,8,["modelValue","options","disabled"])]),s("label",se,[te,k(d(p),{modelValue:d(n),"onUpdate:modelValue":e[3]||(e[3]=a=>w(n)?n.value=a:n=a),options:V.value,multiple:!0,searchable:!0,label:"name","track-by":"uid"},null,8,["modelValue","options"])]),s("label",oe,[ae,c(s("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":e[4]||(e[4]=a=>t.description=a),placeholder:"Description ..."},null,512),[[m,t.description]])])]),le,s("button",{type:"button",onClick:e[5]||(e[5]=P(a=>S(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")]))}}),pe=K(ne,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/instruments/MethodForm.vue"]]);export{pe as default};
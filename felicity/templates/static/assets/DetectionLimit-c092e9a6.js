import{d as O,as as F,L as j,ab as B,r as y,C as R,W as $,D as L,o as l,c as a,b as e,F as c,p as h,t as r,f as i,x as D,q,G as I,e as p,at as A,v as U,w as Y,i as P,j as W,_ as G,cc as z,cd as H,O as J,k as K}from"./index-a40c2365.js";const Q=e("hr",null,null,-1),X={class:"overflow-x-auto mt-4"},Z={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},ee={class:"min-w-full"},te=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Intrument"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Method"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Lower Limit"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Upper Limit"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),se={class:"bg-white"},oe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ne={class:"flex items-center"},ie={class:"text-sm leading-5 text-gray-800"},le={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ae={class:"text-sm leading-5 text-sky-800"},re={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},de={class:"text-sm leading-5 text-sky-800"},ue={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ce={class:"text-sm leading-5 text-sky-800"},pe={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},me=["onClick"],_e={action:"post",class:"p-1"},be={class:"grid grid-cols-4 gap-x-4 mb-4"},ye={class:"block col-span-1 mb-2"},he=e("span",{class:"text-gray-700 w-4/12"},"Instrument",-1),fe={class:"w-full"},xe=e("option",null,null,-1),ve=["value"],ge={class:"block col-span-1 mb-2"},we=e("span",{class:"text-gray-700 w-4/12"},"Method",-1),ke={class:"w-full"},Le=e("option",null,null,-1),De=["value"],Ie={class:"block col-span-1 mb-2"},Ae=e("span",{class:"text-gray-700"},"Lower Limit",-1),Ue={class:"block col-span-1 mb-2"},Ce=e("span",{class:"text-gray-700"},"Upper Limit",-1),Se=e("hr",null,null,-1),Te=O({__name:"DetectionLimit",props:{analysis:{type:Object,required:!0,default:()=>({})},analysisUid:{type:String,required:!0,default:0}},setup(C){const S=W(()=>G(()=>import("./FelModal-b0fb9a0b.js"),["assets/FelModal-b0fb9a0b.js","assets/index-a40c2365.js","assets/index-12195ca3.css","assets/FelModal-a7d23795.css"])),f=F(),u=j(),{withClientMutation:x}=J(),v=C,{analysis:g}=B(v);let d=y(!1),w=y(""),n=R({});const m=y(!0);$(()=>v.analysisUid,(o,s)=>{}),u.fetchInstruments();const _=L(()=>u.getInstruments);u.fetchMethods();const b=L(()=>u.getMethods);function T(){const o={...n,analysisUid:g?.value?.uid};x(z,{payload:o},"createAnalysisDetectionLimit").then(s=>f.addAnalysisDetectionLimit(s))}function E(){const o={...n};delete o.uid,delete o.__typename,x(H,{uid:n.uid,payload:o},"updateAnalysisDetectionLimit").then(s=>f.updateAnalysisDetectionLimit(s))}function k(o,s={}){m.value=o,d.value=!0,w.value=(o?"CREATE":"EDIT")+" ANALYSIS DETECTION_LIMIT",o?Object.assign(n,{lowerLimit:null,upperLimit:null,instrumentUid:null,methodUid:null}):Object.assign(n,{...s})}function M(){m.value===!0&&T(),m.value===!1&&E(),d.value=!1}const N=o=>{const s=_?.value?.findIndex(t=>t.uid===o);return _?.value[s]?.name||"unknown"},V=o=>{const s=b?.value?.findIndex(t=>t.uid===o);return b?.value[s]?.name||"unknown"};return(o,s)=>(l(),a(c,null,[e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:s[0]||(s[0]=t=>k(!0))},"Add Detection Limit"),Q,e("div",X,[e("div",Z,[e("table",ee,[te,e("tbody",se,[(l(!0),a(c,null,h(i(g)?.detectionLimits,t=>(l(),a("tr",{key:t?.uid},[e("td",oe,[e("div",ne,[e("div",null,[e("div",ie,r(N(t?.instrumentUid)),1)])])]),e("td",le,[e("div",ae,r(V(t?.instrumentUid)),1)]),e("td",re,[e("div",de,r(t.lowerLimit),1)]),e("td",ue,[e("div",ce,r(t.upperLimit),1)]),e("td",pe,[e("button",{onClick:Ee=>k(!1,t),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,me)])]))),128))])])])]),D(" Detection Limit Form Modal "),i(d)?(l(),q(i(S),{key:0,onClose:s[6]||(s[6]=t=>P(d)?d.value=!1:d=!1),contentWidth:"w-2/4"},{header:I(()=>[e("h3",null,r(i(w)),1)]),body:I(()=>[e("form",_e,[e("div",be,[e("label",ye,[he,e("div",fe,[p(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":s[1]||(s[1]=t=>i(n).instrumentUid=t)},[xe,(l(!0),a(c,null,h(_.value,t=>(l(),a("option",{key:t?.uid,value:t.uid},r(t?.name),9,ve))),128))],512),[[A,i(n).instrumentUid]])])]),e("label",ge,[we,e("div",ke,[p(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":s[2]||(s[2]=t=>i(n).methodUid=t)},[Le,(l(!0),a(c,null,h(b.value,t=>(l(),a("option",{key:t?.uid,value:t.uid},r(t?.name),9,De))),128))],512),[[A,i(n).methodUid]])])]),e("label",Ie,[Ae,p(e("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[3]||(s[3]=t=>i(n).lowerLimit=t),placeholder:"Value ..."},null,512),[[U,i(n).lowerLimit]])]),e("label",Ue,[Ce,p(e("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[4]||(s[4]=t=>i(n).upperLimit=t),placeholder:"Value ..."},null,512),[[U,i(n).upperLimit]])])]),Se,e("button",{type:"button",onClick:s[5]||(s[5]=Y(t=>M(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):D("v-if",!0)],64))}}),Ne=K(Te,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/analyses/services/DetectionLimit.vue"]]);export{Ne as default};
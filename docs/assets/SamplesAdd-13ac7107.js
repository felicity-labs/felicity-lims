import{_ as se,t as le,k as ae,w as oe,B as ne,C as ie,q as ce,z as re,D as de}from"./billing-356772f3.js";import{f as ue,G as pe,d,c as T,r as me,h as n,k as i,x as e,ag as r,u as l,i as m,D as c,B as I,F as _,ak as f,y as _e,_ as fe}from"./_plugin-vue_export-helper-3f67fb71.js";import he from"./vue-multiselect.esm-ea7276db.js";import{u as ye}from"./index-3189f120.js";import{c as E,a as N,d as B,e as ve,u as we,b as u}from"./array-a5aedee5.js";import{v as U,d as b,a as V}from"./runtime-dom.esm-bundler-6e07ef74.js";/* empty css                                                                 */const be={class:"w-3/6 mt-4 py-4"},xe=e("h5",{class:"mb-4"},"Add Analysis Request",-1),Se={class:""},ge={class:"flex whitespace-nowrap mb-2 w-full"},Ce=e("span",{class:"text-gray-700 w-4/12"},"Client Request ID",-1),ke={class:"w-full"},Ae={class:"text-orange-600 w-4/12"},Re={class:"flex whitespace-nowrap mb-2 w-full"},Ue=e("span",{class:"text-gray-700 w-4/12"},"Clinical Data",-1),Ve={class:"w-full"},De={class:"text-orange-600 w-4/12"},qe={class:"flex whitespace-nowrap mb-2 w-full"},Pe=e("span",{class:"text-gray-700 w-4/12"},"Client",-1),Te={class:"w-full"},Ie={class:"flex whitespace-nowrap mb-2 w-full"},Ee=e("span",{class:"text-gray-700 w-4/12"},"Client Contacts",-1),Ne={class:"w-full"},Be=e("option",{value:""},null,-1),Me=["value"],Fe={class:"text-orange-600 w-4/12"},$e={class:"flex whitespace-nowrap mb-2 w-full"},Le=e("span",{class:"text-gray-700 w-4/12"},"Priority",-1),je={class:"w-full"},ze={class:"text-orange-600 w-4/12"},Ge={id:"samples"},Oe=e("hr",null,null,-1),Qe={class:"flex justify-between items-center py-2"},Ye=e("h5",null,"Samples",-1),He={class:"text-orange-600"},Je=e("hr",{class:"mb-4"},null,-1),Ke={class:"flex items-center justify-between"},We={class:"flex items-top gap-x-4"},Xe={class:"flex flex-col whitespace-nowrap mb-2"},Ze=e("span",{class:"text-gray-700"},"Sample Type",-1),et=["onUpdate:modelValue"],tt=e("option",{value:""},null,-1),st=["value"],lt={class:"flex flex-col whitespace-nowrap mb-2"},at=e("span",{class:"text-gray-700"},"Analysis Profiles",-1),ot=["onUpdate:modelValue"],nt=e("option",{value:""},null,-1),it=["value"],ct={class:"flex flex-col whitespace-nowrap mb-2"},rt=e("span",{class:"text-gray-700"},"Analysis Services",-1),dt=["onUpdate:modelValue"],ut=e("option",{value:""},null,-1),pt=["value"],mt={class:""},_t=["onClick"],ft=e("hr",null,null,-1),ht=e("hr",null,null,-1),yt={key:0,type:"submit",class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},vt={key:1,class:"py-4 text-center"},wt=ue({__name:"SamplesAdd",setup(bt){const M=pe(()=>se(()=>import("./LoadingMessage-83976fce.js"),["assets/LoadingMessage-83976fce.js","assets/_plugin-vue_export-helper-3f67fb71.js"])),x=le(),F=ae(),h=oe(),y=ne(),$=ye(),{withClientMutation:L}=ce(),{swalError:D}=re();let q=d(()=>F.getPatient),j=T({first:void 0,after:"",text:"",sortBy:["name"]});y.fetchClients(j);const z=d(()=>y.getClients);function G(o){de(o)&&y.fetchClientContacts(o?.uid)}const O=d(()=>y.getClientContacts);x.fetchSampleTypes();const Q=d(()=>x.getSampleTypes);let Y=T({first:void 0,after:"",text:"",sortBy:["name"]});h.fetchAnalysesServices(Y);const H=d(()=>{const o=h.getAnalysesServicesSimple;let s=new Set;return o.forEach((t,R)=>{t.profiles?.length===0&&s.add(t)}),[...s]});h.fetchAnalysesProfiles();const J=d(()=>h.getAnalysesProfiles),S=me(!1),K=E({clientRequestId:N().required("Client Request ID is Required"),clinicalData:N().nullable(),client:E().required("Client is Required"),clientContactUid:B().required("Client Contact is Required"),samples:ve().required().min(1,"Add at least 1 sample"),priority:B()}),{handleSubmit:W,errors:p}=we({validationSchema:K,initialValues:{priority:0,samples:[]}}),{value:g}=u("clientRequestId"),{value:C}=u("clinicalData"),{value:v}=u("client"),{value:k}=u("clientContactUid"),{value:A}=u("priority"),{value:w}=u("samples"),P=W(o=>{S.value=!0;for(let s of o.samples||[]){if(typeof s?.sampleType!="string"){D("Samples must have sample types");return}if(s?.analyses?.length<=0&&s?.profiles?.length<=0){D("Samples must have either profiles/analyses or both");return}}X(o)});function X(o){const s={patientUid:q.value?.uid,clientRequestId:o.clientRequestId,clinicalData:o.clinicalData,clientUid:v?.value?.uid,clientContactUid:o.clientContactUid,samples:o.samples};L(ie,{payload:s},"createAnalysisRequest").then(t=>{x.addAnalysisRequest(t),$.push({name:"patient-detail",params:{patientUid:q.value?.uid}})}).finally(()=>{S.value=!1})}function Z(){const o={sampleType:{},profiles:[],analyses:[]};w.value.push(o)}function ee(o){w.value.splice(o,1)}return(o,s)=>(n(),i("div",be,[xe,e("form",{action:"post",class:"p-4 mb-8 bg-white",onSubmit:s[6]||(s[6]=V((...t)=>l(P)&&l(P)(...t),["prevent"]))},[e("div",Se,[e("label",ge,[Ce,e("div",ke,[r(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[0]||(s[0]=t=>m(g)?g.value=t:null),placeholder:"CRID ..."},null,512),[[U,l(g)]]),e("div",Ae,c(l(p).clientRequestId),1)])]),e("label",Re,[Ue,e("div",Ve,[r(e("textarea",{cols:"2",class:"form-input mt-1 w-full","onUpdate:modelValue":s[1]||(s[1]=t=>m(C)?C.value=t:null),placeholder:"Clinical Data ..."},null,512),[[U,l(C)]]),e("div",De,c(l(p).clinicalData),1)])]),e("label",qe,[Pe,e("div",Te,[I(l(he),{placeholder:"Select a Client",modelValue:l(v),"onUpdate:modelValue":s[2]||(s[2]=t=>m(v)?v.value=t:null),options:l(z),searchable:!0,label:"name","track-by":"uid",onSelect:G},null,8,["modelValue","options"])])]),e("label",Ie,[Ee,e("div",Ne,[r(e("select",{name:"clientContacts",id:"clientContacts","onUpdate:modelValue":s[3]||(s[3]=t=>m(k)?k.value=t:null),class:"form-input mt-1 block w-full"},[Be,(n(!0),i(_,null,f(l(O),t=>(n(),i("option",{key:t.uid,value:t.uid},c(t.firstName)+" "+c(t.lastName),9,Me))),128))],512),[[b,l(k)]]),e("div",Fe,c(l(p).clientContactUid),1)])]),e("label",$e,[Le,e("div",je,[r(e("input",{type:"number",min:"0",max:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[4]||(s[4]=t=>m(A)?A.value=t:null)},null,512),[[U,l(A)]]),e("div",ze,c(l(p).priority),1)])])]),e("section",Ge,[Oe,e("div",Qe,[Ye,e("span",He,c(l(p).samples),1),l(w)?.length!==20?(n(),i("button",{key:0,onClick:s[5]||(s[5]=V(t=>Z(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add Sample ")):_e("v-if",!0)]),Je,(n(!0),i(_,null,f(l(w),(t,R)=>(n(),i("div",{key:R},[e("div",Ke,[e("div",We,[e("label",Xe,[Ze,r(e("select",{name:"sampleTypes",id:"sampleTypes","onUpdate:modelValue":a=>t.sampleType=a,class:"form-input mt-1"},[tt,(n(!0),i(_,null,f(l(Q),a=>(n(),i("option",{key:a.uid,value:a.uid},c(a.name),9,st))),128))],8,et),[[b,t.sampleType]])]),e("label",lt,[at,r(e("select",{name:"analysisProfiles",id:"analysisProfiles","onUpdate:modelValue":a=>t.profiles=a,class:"form-input mt-1",multiple:""},[nt,(n(!0),i(_,null,f(l(J),(a,te)=>(n(),i("option",{key:a.uid,value:a.uid},c(a.name),9,it))),128))],8,ot),[[b,t.profiles]])]),e("label",ct,[rt,r(e("select",{name:"analysesServices",id:"analysesServices","onUpdate:modelValue":a=>t.analyses=a,class:"form-input mt-1",multiple:""},[ut,(n(!0),i(_,null,f(l(H),(a,te)=>(n(),i("option",{key:a.uid,value:a.uid},c(a.name),9,pt))),128))],8,dt),[[b,t.analyses]])])]),e("div",mt,[e("button",{onClick:V(a=>ee(R),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"}," Remove ",8,_t)])]),ft]))),128))]),ht,S.value?(n(),i("div",vt,[I(l(M),{message:"Adding Samples ..."})])):(n(),i("button",yt," Add Sample(s) "))],32)]))}}),Ut=fe(wt,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/sample/SamplesAdd.vue"]]);export{Ut as default};

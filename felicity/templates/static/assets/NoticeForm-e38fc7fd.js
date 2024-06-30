import{d as F,M as q,at as T,o as V,c as B,b as t,e as d,v as p,f as s,i as m,t as b,w as C,O as I,k as M}from"./index-2a6c9271.js";import{A as O,E as U}from"./Notices-7aa064d9.js";import{c as $,d as A,a as v,f as R,e as h,u as j,b as a}from"./array-52a0b0d0.js";const z={class:"grid grid-cols-2 gap-x-4 mb-4"},G={class:"block col-span-2 mb-2"},H=t("span",{class:"text-gray-700"},"Title",-1),J={class:"text-orange-600 w-4/12"},K={class:"block col-span-2 mb-2"},L=t("span",{class:"text-gray-700"},"Body",-1),P={class:"text-orange-600 w-4/12"},Q={class:"block col-span-2 mb-2"},W=t("span",{class:"text-gray-700"},"Expiration",-1),X={class:"text-orange-600 w-4/12"},Y=t("hr",null,null,-1),Z=t("button",{type:"submit",class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ",-1),ee=F({__name:"NoticeForm",props:{notice:Object},emits:["close"],setup(g,{emit:N}){const w=g,f=N,{withClientMutation:y}=I(),_=q(),{notice:r}=T(w),k=$({uid:A(),title:v().required("Notice is required"),body:v().required("Notice body message is required"),expiry:R().required("Expiry is required").typeError("Invalid Date format"),groups:h(),departments:h()}),{handleSubmit:D,errors:l}=j({validationSchema:k,initialValues:{uid:r?.value?.uid,title:r?.value?.title,body:r?.value?.body,expiry:r?.value?.expiry,groups:r?.value?.groups,departments:r?.value?.departments}}),{value:n}=a("title"),{value:c}=a("body"),{value:u}=a("expiry");a("groups"),a("departments");const x=D(e=>{e.uid||E(e),e.uid&&S(e)});function E(e){y(O,{payload:{title:e.title,body:e.body,expiry:e.expiry,groups:e.groups||[],departments:e.departments||[]}},"createNotice").then(o=>{_.addNotice(o),f("close")})}function S(e){y(U,{uid:e.uid,payload:{title:e.title,body:e.body,expiry:e.expiry,groups:e.groups||[],departments:e.departments||[]}},"updateNotice").then(o=>{_.updateNotice(o),f("close")})}return(e,o)=>(V(),B("form",{action:"post",class:"p-1",onSubmit:o[3]||(o[3]=C((...i)=>s(x)&&s(x)(...i),["prevent"]))},[t("div",z,[t("label",G,[H,d(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[0]||(o[0]=i=>m(n)?n.value=i:null),placeholder:"Name ..."},null,512),[[p,s(n)]]),t("div",J,b(s(l).title),1)]),t("label",K,[L,d(t("textarea",{class:"form-input mt-1 block w-full",rows:"5","onUpdate:modelValue":o[1]||(o[1]=i=>m(c)?c.value=i:null),placeholder:"Name ..."},null,512),[[p,s(c)]]),t("div",P,b(s(l).body),1)]),t("label",Q,[W,d(t("input",{class:"form-input mt-1 block w-full",type:"datetime-local","onUpdate:modelValue":o[2]||(o[2]=i=>m(u)?u.value=i:null),placeholder:"Name ..."},null,512),[[p,s(u)]]),t("div",X,b(s(l).expiry),1)])]),Y,Z],32))}}),ie=M(ee,[["__file","/home/aurthur/Documents/Development/felicity-lims/webapp/views/notice/NoticeForm.vue"]]);export{ie as default};
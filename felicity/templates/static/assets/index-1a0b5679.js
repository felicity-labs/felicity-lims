import{_ as f,u as h}from"./shipment-53265c2d.js";import{f as v,G as x,r as y,h as n,k as l,x as e,ag as w,u as t,i as b,D as C,B as g,ah as k,_ as B}from"./_plugin-vue_export-helper-dacf3d65.js";import{a as I}from"./index-fe7cd8a1.js";import{c as L,a as S,u as F,b as M}from"./array-9d3d6c63.js";import{a as N,v as V}from"./runtime-dom.esm-bundler-98433118.js";const D={class:"flex justify-center items-center h-screen bg-sky-800 px-6"},R={class:"p-6 max-w-sm w-full bg-white shadow-md rounded-sm"},j=k('<div class="flex justify-center items-center"><svg class="h-10 w-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path></svg><span class="text-gray-700 font-semibold text-2xl">Install Felicity LIMS</span></div>',1),E={class:"block"},q=e("span",{class:"text-gray-700 text-sm"},"Laboratory Name",-1),A=["disabled"],G={class:"text-orange-600 w-4/12"},O={class:"mt-6"},P={key:0,type:"submit",class:"py-2 px-4 text-center bg-sky-800 rounded-sm w-full text-white text-sm hover:bg-sky-800"},T={key:1,class:"text-center"},Z=v({__name:"index",setup(U){const c=x(()=>f(()=>import("./LoadingMessage-097e117a.js"),["assets/LoadingMessage-097e117a.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),m=h(),a=y(!1),u=L({name:S().required("Laboratory Name is Required")}),{handleSubmit:p,errors:_}=F({validationSchema:u,initialValues:{name:"Felicity Labs"}}),{value:o}=M("name"),r=p(d=>{a.value=!0,I.post("setup/installation",d).then(s=>{s.data.installed&&m.push({name:"LOGIN"})}).finally(()=>a.value=!1)});return(d,s)=>(n(),l("div",D,[e("div",R,[j,e("form",{class:"mt-4",onSubmit:s[1]||(s[1]=N((...i)=>t(r)&&t(r)(...i),["prevent"]))},[e("label",E,[q,w(e("input",{type:"text",class:"form-input mt-1 block w-full rounded-sm focus:border-sky-800","onUpdate:modelValue":s[0]||(s[0]=i=>b(o)?o.value=i:null),disabled:a.value},null,8,A),[[V,t(o)]]),e("div",G,C(t(_).name),1)]),e("div",O,[a.value?(n(),l("div",T,[g(t(c),{message:"Installing felicity lims ..."})])):(n(),l("button",P," Install "))])],32)])]))}}),Q=B(Z,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/install/index.vue"]]);export{Q as default};

import{_ as l,ap as _}from"./shipment-53265c2d.js";import{f as p,G as f,r as u,h as e,k as s,j as h,u as t,x as o,B as v,_ as w}from"./_plugin-vue_export-helper-dacf3d65.js";import{u as y}from"./shipment-fb4d3a89.js";import{F as b}from"./index-fe7cd8a1.js";import"./runtime-dom.esm-bundler-98433118.js";const x={class:"pt-4"},k={key:1},g={key:0,class:"flex justify-start mt-4 mr-4"},M={class:"mb-2 p-3 rounded-sm border w-96"},j={class:"flex justify-between items-center space-x-4"},B=o("p",null,"Manifest Report",-1),C={key:1,class:"mt-4 text-red-500"},A=p({__name:"Manifest",setup(D){const r=f(()=>l(()=>import("./LoadingMessage-097e117a.js"),["assets/LoadingMessage-097e117a.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),c=u(!1),{shipment:n}=_(),{downloadManifest:d}=y(),m=async a=>await d(a);return(a,i)=>(e(),s("div",x,[c.value?(e(),h(t(r),{key:0,message:"Loading your manifest report ..."},null,8,["message"])):(e(),s("section",k,[t(n)?.jsonContent?(e(),s("div",g,[o("div",M,[o("div",j,[B,o("span",{class:"flex justify-center items-center animate-bounce h-8 w-8 rounded-full bg-white border border-gray-200 drop-shadow-sm",onClick:i[0]||(i[0]=E=>m(t(n).uid))},[v(t(b),{class:"text-blue-500",icon:"fa-download"})])])])])):(e(),s("div",C,"This shipment has no Manifest Report"))]))]))}}),I=w(A,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/shipment/_id/Manifest.vue"]]);export{I as default};

import{d as o,r as u,N as r,cg as c,D as m,o as y,q as _,f as p,x as v,j as d,_ as f,O as A,k}from"./index-8a5660e7.js";const b=o({__name:"AnalysisSneak",props:["analysisUid"],setup(s){const n=d(()=>f(()=>import("./FelLabelValueList-8f2f3019.js"),["assets/FelLabelValueList-8f2f3019.js","assets/index-8a5660e7.js","assets/index-227a7d92.css"])),l=s,{withClientQuery:t}=A(),e=u(null);r(async()=>{await t(c,{uid:l.analysisUid},"analysisByUid").then(a=>e.value=a)});const i=m(()=>[{label:"Analysis Name",value:e.value?.name,link:{name:"analyses-conf",query:{tab:"analyses-services",item:e.value?.name}}},{label:"Analysis KeyWord",value:e.value?.keyword},{label:"Analysis Unit",value:e.value?.unit?.name},{label:"Analysis Category",value:e.value?.category?.name}]);return(a,C)=>e.value?.uid?(y(),_(p(n),{key:0,items:i.value},null,8,["items"])):v("v-if",!0)}}),S=k(b,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/analysis/AnalysisSneak.vue"]]);export{S as default};
import{d as o,r as u,N as r,ci as c,D as m,o as y,q as _,f as p,x as v,j as d,_ as f,O as A,k}from"./index-03fd00e9.js";const b=o({__name:"AnalysisSneak",props:["analysisUid"],setup(s){const n=d(()=>f(()=>import("./FelLabelValueList-7df30c70.js"),["assets/FelLabelValueList-7df30c70.js","assets/index-03fd00e9.js","assets/index-91994633.css"])),l=s,{withClientQuery:t}=A(),e=u(null);r(async()=>{await t(c,{uid:l.analysisUid},"analysisByUid").then(a=>e.value=a)});const i=m(()=>[{label:"Analysis Name",value:e.value?.name,link:{name:"analyses-conf",query:{tab:"analyses-services",item:e.value?.name}}},{label:"Analysis KeyWord",value:e.value?.keyword},{label:"Analysis Unit",value:e.value?.unit?.name},{label:"Analysis Category",value:e.value?.category?.name}]);return(a,C)=>e.value?.uid?(y(),_(p(n),{key:0,items:i.value},null,8,["items"])):v("v-if",!0)}}),S=k(b,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/analysis/AnalysisSneak.vue"]]);export{S as default};
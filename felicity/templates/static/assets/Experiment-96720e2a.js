import{_ as p}from"./billing-356772f3.js";import{f as u,G as d,c as n,h,j as f,u as _,_ as v}from"./_plugin-vue_export-helper-3f67fb71.js";const b=u({__name:"Experiment",setup(y){const s=d(()=>p(()=>import("./DataTable-6e858f1d.js"),["assets/DataTable-6e858f1d.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js"])),r=n([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,hidden:!0},{name:"Patient Name",value:"patient.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Gender",value:"patient.gender",sortable:!1,sortBy:"asc",hidden:!0},{name:"BirthDate",value:"patient.birthDate",sortable:!1,sortBy:"asc",hidden:!0},{name:"Sample ID",value:"sampleId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Sample Type",value:"sampleType.name",sortable:!1,sortBy:"asc",hidden:!1}]),a=n([{sampleId:"BP23-982392",sampleType:{name:"Blood Plasma"},patient:{name:"Aurthur",gender:"Female",birthDate:"2020-12-12"}},{sampleId:"DBS23-0001",sampleType:{name:"Dry Blood Spot"},patient:{name:"Tatenda",gender:"Female",birthDate:"2020-12-12"}}]),l=e=>{},o=e=>{},m=e=>{},c=e=>{Object.assign(a,[...a.map(t=>t.sampleId===e.entry.sampleId?{...t,checked:!0}:t)])},i=()=>Object.assign(a,[...a.map(e=>({...e,checked:!0}))]);return(e,t)=>(h(),f(_(s),{columns:r,data:a,toggleColumns:!0,loading:!1,onOnSort:l,paginable:!0,pageMeta:{fetchCount:50,hasNextPage:!1},onOnPaginate:o,searchable:!0,searchMeta:{defaultFilter:"all",filters:[{name:"All",value:"all"}]},onOnSearch:m,onOnCheck:c,onOnCheckAll:i},null,8,["columns","data"]))}}),D=v(b,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/experiment/Experiment.vue"]]);export{D as default};
import{d as m,A as n,o as d,D as u,ao as p,_ as h}from"./index-b7f12717.js";const f=m({__name:"index",setup(g){const l=n([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,hidden:!0},{name:"Patient Name",value:"patient.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Gender",value:"patient.gender",sortable:!1,sortBy:"asc",hidden:!0},{name:"BirthDate",value:"patient.birthDate",sortable:!1,sortBy:"asc",hidden:!0},{name:"Sample ID",value:"sampleId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Sample Type",value:"sampleType.name",sortable:!1,sortBy:"asc",hidden:!1}]),a=n([{sampleId:"BP23-982392",sampleType:{name:"Blood Plasma"},patient:{name:"Aurthur",gender:"Female",birthDate:"2020-12-12"}},{sampleId:"DBS23-0001",sampleType:{name:"Dry Blood Spot"},patient:{name:"Tatenda",gender:"Female",birthDate:"2020-12-12"}}]),s=e=>console.log(e),o=e=>console.log(e),r=e=>console.log(e),c=e=>{console.log(e),Object.assign(a,[...a.map(t=>t.sampleId===e.entry.sampleId?{...t,checked:!0}:t)])},i=()=>Object.assign(a,[...a.map(e=>({...e,checked:!0}))]);return(e,t)=>(d(),u(p,{columns:l,data:a,toggleColumns:!0,loading:!1,onOnSort:s,paginable:!0,pageMeta:{fetchCount:50,hasNextPage:!1,totalCount:200},onOnPaginate:o,searchable:!0,searchMeta:{defaultFilter:"all",filters:[{name:"All",value:"all"}]},onOnSearch:r,onOnCheck:c,onOnCheckAll:i},null,8,["columns","data"]))}}),y=h(f,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/experiment/index.vue"]]);export{y as default};

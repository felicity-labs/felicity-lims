import{d as s,p as o,g as r,A as i}from"./index-48799f0c.js";import{a as l}from"./storage-1c29e739.js";const m=s({name:"container-column-view",setup(t){const n=l();return{container:o(()=>n.getStorageContainer)}},render(){const t=n=>{const e=this.container.samples?.findIndex(a=>a.storageSlotIndex===n);return e>-1?this.container.samples[e]:null};return r("div",{class:"max-h-[600px] overflow-y-auto"},[[...Array(this.container?.slots??0).keys()].map((n,e)=>r("div",{class:"grid grid-cols-12 gap-x-2 w-1/2",key:e},[r("span",{class:"col-span-1 my-1"},[e+1,i(":")]),r("span",{class:["col-span-5 my-1 p-1 text-white flex justify-center border-2",{"bg-slate-400":t(e+1)===null},{"bg-emerald-400":t(e+1)!==null}]},[t(e+1)?.sampleId])]))])}});export{m as ContainerColumn,m as default};

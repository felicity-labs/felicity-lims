import{f as o,d as l,B as e,al as a,F as n}from"./_plugin-vue_export-helper-3f67fb71.js";import{Z as c}from"./billing-356772f3.js";const p=o({name:"container-grid-view",setup(s){const t=c();return{container:l(()=>t.getStorageContainer)}},render(){if(this.container?.grid===!1)return e(n,null,[e("p",null,[a("The selected container does not support grid view")])]);const s=t=>{const r=this.container.samples?.findIndex(i=>i.storageSlotIndex===t);return r>-1?this.container.samples[r]:null};return e("div",{class:"overflow-auto"},[this.container?.rowWise?e(n,null,[[...Array(this.container?.rows??0).keys()].map(t=>e("div",{class:["grid grid-cols-"+this.container?.cols,"border-2"],key:t+"_x"},[[...Array(this.container?.cols??0).keys()].map(r=>e(n,null,[e("div",{class:["col-span-1 w-full border-l-2 p-1 text-gray-800 hover:opacity-70 hover:text-white",{"bg-slate-400":s(t*(this.container?.cols??0)+r+1)===null},{"bg-emerald-400":s(t*(this.container?.cols??0)+r+1)!==null}],key:r+"_y"},[e("div",{class:["text-center w-full"]},[t*(this.container?.cols??0)+r+1]),e("div",{class:"text-xs text-center"},[s(t*(this.container?.cols??0)+r+1)?.sampleId])])]))]))]):e(n,null,[e("div",{class:["grid grid-cols-"+this.container?.cols,"gap-2"]},[[...Array(this.container?.cols??0).keys()].map(t=>e("div",{class:"col-span-1",key:t+"_y"},[[...Array(this.container?.rows??0).keys()].map(r=>e("div",{key:r+"_x"},[e("span",{class:["my-1 p-1 rounded-xl flex justify-center"]},[a("("),t*(this.container?.rows??0)+r+1,a(")")])]))]))])])])}});export{p as ContainerGrid,p as default};

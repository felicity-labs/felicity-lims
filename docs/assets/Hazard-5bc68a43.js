import{_ as x,aB as v,q as w}from"./billing-356772f3.js";import{G as k,f as H,r as d,c as A,d as z,B as e,al as o,ag as p}from"./_plugin-vue_export-helper-3f67fb71.js";import{j as D,k as _}from"./inventory.mutations-91e62f9a.js";import{v as m}from"./runtime-dom.esm-bundler-6e07ef74.js";const M=k(()=>x(()=>import("./SimpleModal-1f91868a.js"),["assets/SimpleModal-1f91868a.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/SimpleModal-f645a074.css"])),R=H({name:"hazard",setup(t,C){const l=v(),{withClientMutation:c}=w();let n=d(!1),u=d(""),a=A({});const i=d(!0);l.fetchHazards();const b=z(()=>l.getHazards);function h(){const r={...a};c(D,{payload:r},"createHazard").then(s=>l.addHazard(s))}function f(){const r={name:a.name,description:a.description};c(_,{uid:a.uid,payload:r},"updateHazard").then(s=>l.updateHazard(s))}function y(r,s){i.value=r,u.value=(r?"CREATE":"EDIT")+" A HAZARD",n.value=!0,r?Object.assign(a,{}):Object.assign(a,{...s})}function g(){i.value===!0&&h(),i.value===!1&&f(),n.value=!1}return{form:a,FormManager:y,saveForm:g,hazards:b,showModal:n,formTitle:u}},render(){return e("div",{class:"container w-full my-4"},[e("hr",null,null),e("button",{onClick:()=>this.FormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[o("Add Hazard")]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[o("Hazard Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[o("Description")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"},null)])]),e("tbody",{class:"bg-white"},[this.hazards.map(t=>e("tr",{key:t?.uid},[e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"flex items-center"},[e("div",{class:"text-sm leading-5 text-gray-800"},[t?.name])])]),e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"text-sm leading-5 text-sky-800"},[t?.description])]),e("td",{class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},[e("button",{onClick:()=>this.FormManager(!1,t),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[o("Edit")])])]))])])])]),this.showModal?e(M,{onClose:()=>this.showModal=!1,contentWidth:"w-1/4"},{header:()=>e("h3",null,[this.formTitle]),body:()=>e("form",{action:"post",class:"p-1"},[e("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[o("Hazard Name")]),p(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.name=t,placeholder:"Name ..."},null),[[m,this.form.name]])]),e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[o("Description")]),p(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.description=t,placeholder:"Description ..."},null),[[m,this.form.description]])])]),e("hr",null,null),e("button",{type:"button",onClick:()=>this.saveForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[o("Save Form")])])}):null])}});export{R as Hazard,R as default};

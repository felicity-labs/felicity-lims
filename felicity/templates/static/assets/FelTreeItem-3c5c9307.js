import{k as h,p as v,m as k,o as a,c as s,b as p,A as y,t as l,B as i,G as u,f as n,F as T,C,y as x}from"./index-dcd7b802.js";import{u as B}from"./storage-74944de5.js";const I={class:"cursor-pointer leading-6 mb-2"},S={key:0},F={name:"TreeItem"},O=Object.assign(F,{props:{tree:{type:Object,required:!0}},setup(e){const t=e,{tags:r,setActiveTree:m,activePath:o}=B(),d=()=>m(t.tree),g=v(()=>{if(!t.tree)return!1;switch(t.tree.tag){case r.storeRoom:return o.value.room===t.tree.uid;case r.storageLocation:return o.value.location===t.tree.uid;case r.storageSection:return o.value.section===t.tree.uid;case r.storageContainer:return o.value.container===t.tree.uid;default:return!1}});return(D,L)=>{const f=k("TreeItem");return a(),s("li",I,[p("div",{class:u([{"text-blue-500 font-bold":g.value}]),onClick:d},[y(l(e.tree?.name)+" ",1),e.tree.children?.length?(a(),s("span",S," ["+l(e.tree.isOpen?"-":"+")+"] ",1)):i("",!0)],2),e.tree.children?.length&&e.tree.isOpen?(a(),s("ul",{key:0,class:u(["pl-4 border-l-2",{"border-l-orange-200":e.tree.tag===n(r).storeRoom,"border-l-blue-200":e.tree.tag===n(r).storageLocation,"border-l-green-200":e.tree.tag===n(r).storageSection}])},[(a(!0),s(T,null,C(e.tree?.children,(c,b)=>(a(),x(f,{key:c.uid||b,tree:c},null,8,["tree"]))),128))],2)):i("",!0)])}}}),j=h(O,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/storage/FelTreeItem.vue"]]);export{j as default};

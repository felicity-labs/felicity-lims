import{_ as h,v as k,h as a,k as o,x as T,al as x,D as c,y as u,s as m,ag as y,u as s,F as C,ak as S,j as I}from"./_plugin-vue_export-helper-dacf3d65.js";import{a4 as w}from"./shipment-53265c2d.js";import{b as B}from"./runtime-dom.esm-bundler-98433118.js";const D={class:"cursor-pointer leading-6 mb-2"},L={key:0},O={__name:"TreeItem",props:{tree:Object},setup(e){const{tags:r,setActiveTree:g,activePath:n}=w(),f=t=>g(t);function v(t){if(t.tag===r.storeRoom)return n.value.room===t.uid;if(t.tag===r.storageLocation)return n.value.location===t.uid;if(t.tag===r.storageSection)return n.value.section===t.uid;if(t.tag===r.storageContainer)return n.value.container===t.uid}return(t,i)=>{const d=k("TreeItem",!0);return a(),o("li",D,[T("div",{class:m([{"text-blue-500 font-bold":v(e.tree)}]),onClick:i[0]||(i[0]=l=>f(e.tree))},[x(c(e.tree?.name)+" ",1),e.tree.children?.length?(a(),o("span",L,"["+c(e.tree.isOpen?"-":"+")+"]",1)):u("v-if",!0)],2),e.tree.children?.length?y((a(),o("ul",{key:0,class:m(["pl-4 border-l-2",{"border-l-orange-200":e.tree.tag===s(r).storeRoom,"border-l-blue-200":e.tree.tag===s(r).storageLocation,"border-l-green-200":e.tree.tag===s(r).storageSection}])},[(a(!0),o(C,null,S(e.tree?.children,(l,b)=>(a(),I(d,{tree:l,key:b},null,8,["tree"]))),128))],2)),[[B,e.tree.isOpen]]):u("v-if",!0)])}}},F=h(O,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/components/TreeItem.vue"]]);export{F as default};

import{d as m,B as u,z as s,o as p,c as _,g as i,G as f,b as t,t as h,k as b}from"./index-8a5660e7.js";const g={class:"shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-sm flex flex-1 items-center p-4"},v={class:"mr-4"},k={class:"flex-1 pl-1 md:mr-16"},x={class:"font-medium dark:text-white"},C=m({__name:"FelAdminBreadCrumb",props:{title:String,path:String,icon:String},setup(e){const r=e,a=u(),c=o=>a.updateConfRoute(o);return(o,n)=>{const l=s("font-awesome-icon"),d=s("router-link");return p(),_("li",{class:"col-span-4 border-gray-400",onClick:n[0]||(n[0]=w=>c(r.title))},[i(d,{to:e.path??"",class:"no-underline"},{default:f(()=>[t("div",g,[t("div",v,[i(l,{icon:e.icon},null,8,["icon"])]),t("div",k,[t("div",x,h(e.title),1)])])]),_:1},8,["to"])])}}}),S=b(C,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/nav/FelAdminBreadCrumb.vue"]]);export{S as default};
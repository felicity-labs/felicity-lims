import{d as k,ar as g,r as v,D as f,o,c,b as a,F as y,p as x,y as D,f as t,i as b,t as w,q as r,x as i,j as n,_ as l,k as S}from"./index-73e47413.js";const E={class:""},C={class:"col-span-12"},W={class:"bg-white shadow-md mt-2"},A={class:"-mb-px flex justify-start"},L=["onClick"],R=k({__name:"WorkSheetDetail",setup(T){const _=n(()=>l(()=>import("./WorkSheetAssign-b3501d14.js"),["assets/WorkSheetAssign-b3501d14.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/constants-04322845.js"])),d=n(()=>l(()=>import("./WorkSheetResults-ffcaeef1.js"),["assets/WorkSheetResults-ffcaeef1.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/analysis-ed8fd016.js","assets/constants-04322845.js"])),u=n(()=>l(()=>import("./FelAuditLog-39717d19.js"),["assets/FelAuditLog-39717d19.js","assets/index-73e47413.js","assets/index-227a7d92.css"]));let p=g(),e=v("detail");const m=["detail","assign-samples","logs"],h=f(()=>p.getWorkSheet);return(V,B)=>(o(),c("div",E,[a("section",C,[a("nav",W,[a("div",A,[(o(),c(y,null,x(m,s=>a("a",{key:s,class:D(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":t(e)===s}]),onClick:P=>b(e)?e.value=s:e=s},w(s),11,L)),64))])]),a("div",null,[t(e)==="detail"?(o(),r(t(d),{key:0})):i("",!0),t(e)==="assign-samples"?(o(),r(t(_),{key:1})):i("",!0),t(e)==="logs"?(o(),r(t(u),{key:2,targetType:"worksheet",targetUid:h.value?.uid},null,8,["targetUid"])):i("",!0)])])]))}}),O=S(R,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/worksheet/_id/WorkSheetDetail.vue"]]);export{O as default};
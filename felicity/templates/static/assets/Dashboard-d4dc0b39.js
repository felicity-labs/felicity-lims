import{d as f,m as E,s as g,n as k,o as t,c,g as L,f as e,b as _,F as u,p as x,e as P,q as s,x as n,j as r,y as V,t as R,_ as o,k as A}from"./index-73e47413.js";const O={class:"col-span-12 mt-2"},w={class:"bg-white shadow-md mt-2"},I={class:"-mb-px flex justify-start"},C=["onClick"],B={class:"pt-4",initial:{opacity:0,y:100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400},N=f({__name:"Dashboard",setup(S){const l=r(()=>o(()=>import("./Overview-9ec4c712.js"),["assets/Overview-9ec4c712.js","assets/index-73e47413.js","assets/index-227a7d92.css"])),m=r(()=>o(()=>import("./Laggard-7b21a659.js"),["assets/Laggard-7b21a659.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/index-b1a05acb.js"])),p=r(()=>o(()=>import("./Resource-58f80c8f.js"),["assets/Resource-58f80c8f.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/index-b1a05acb.js"])),b=r(()=>o(()=>import("./Peformance-ed656bfd.js"),["assets/Peformance-ed656bfd.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/index-b1a05acb.js"])),v=r(()=>o(()=>import("./Tat-9117fbdf.js"),["assets/Tat-9117fbdf.js","assets/index-73e47413.js","assets/index-227a7d92.css"])),y=r(()=>o(()=>import("./LineListing-8ca58a84.js"),["assets/LineListing-8ca58a84.js","assets/index-73e47413.js","assets/index-227a7d92.css"])),h=r(()=>o(()=>import("./Notice-000bf3a8.js"),["assets/Notice-000bf3a8.js","assets/index-73e47413.js","assets/index-227a7d92.css"])),T=r(()=>o(()=>import("./FelPageHeading-c7245553.js"),["assets/FelPageHeading-c7245553.js","assets/index-73e47413.js","assets/index-227a7d92.css"])),d=E(),{dashboard:a}=g(d);return(j,F)=>{const D=k("motion");return t(),c(u,null,[L(e(T),{title:"Dashboard"}),_("section",O,[_("nav",w,[_("div",I,[(t(!0),c(u,null,x(e(a).tabs,i=>(t(),c("a",{key:i,class:V(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(a).currentTab===i}]),onClick:q=>e(d).setCurrentTab(i)},R(i),11,C))),128))])]),P((t(),c("div",B,[e(a).currentTab==="overview"?(t(),s(e(l),{key:0})):n("",!0),e(a).currentTab==="resource"?(t(),s(e(p),{key:1})):n("",!0),e(a).currentTab==="laggard"?(t(),s(e(m),{key:2})):n("",!0),e(a).currentTab==="peformance"?(t(),s(e(b),{key:3})):n("",!0),e(a).currentTab==="tat"?(t(),s(e(v),{key:4})):n("",!0),e(a).currentTab==="notices"?(t(),s(e(h),{key:5})):n("",!0),e(a).currentTab==="line-listing"?(t(),s(e(y),{key:6})):n("",!0)])),[[D]])])],64)}}}),H=A(N,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/dashboard/Dashboard.vue"]]);export{H as default};
import{d as m,s as p,q as f,P as x,o as e,c as o,f as r,g as y,y as i,b as t,F as d,C as l,t as n,j as v,_ as g,k as w}from"./index-7210a26e.js";import{u as b}from"./dashboard-2f799312.js";const S={key:0,class:"text-start my-4 w-100"},V={class:"mt-4"},k=t("h1",{class:"text-xl text-gray-700 font-semibold"},"Analyses Status",-1),O=t("hr",{class:"my-2"},null,-1),j={class:"flex justify-start"},B={class:"mr-4 font-bold text-gray-600 text-xl"},D={class:"font-semibold text-gray-400 text-l"},I={key:0,class:"my-4"},C=t("h1",{class:"mt-4 text-xl text-gray-700 font-semibold"},"Sample Status",-1),E=t("hr",{class:"my-2"},null,-1),A={class:"flex justify-start"},L={class:"mr-4 font-bold text-gray-600 text-xl"},N={class:"font-semibold text-gray-400 text-l"},P={key:1,class:"my-4"},R=t("h1",{class:"mt-4 text-xl text-gray-700 font-semibold"},"WorkSheet Status",-1),F=t("hr",{class:"my-2"},null,-1),M={class:"flex justify-start"},T={class:"mr-4 font-bold text-gray-600 text-xl"},q={class:"font-semibold text-gray-400 text-l"},W={key:2,class:"my-4"},z=t("h1",{class:"mt-4 text-xl text-gray-700 font-semibold"},"Extras",-1),G=t("hr",{class:"my-2"},null,-1),H={class:"flex justify-start"},J={class:"mr-4 font-bold text-gray-600 text-xl"},K={class:"font-semibold text-gray-400 text-l"},Q={key:0,class:"my-4"},U=m({__name:"Overview",setup(X){const _=v(()=>g(()=>import("./FelLoadingMessage-03c7adb7.js"),["assets/FelLoadingMessage-03c7adb7.js","assets/index-7210a26e.js","assets/index-a67f0314.css"])),c=b(),{dashboard:a}=p(c);return f(async()=>{c.getOverViewStats()}),x(()=>a.value.filterRange,(h,u)=>{c.getOverViewStats()},{deep:!0}),(h,u)=>(e(),o(d,null,[r(a).fetchingOverViewStats?(e(),o("div",S,[y(r(_),{message:"fetching updated overview stats ..."})])):i("v-if",!0),t("section",V,[k,O,t("div",j,[(e(!0),o(d,null,l(r(a).overViewStats?.analyses,s=>(e(),o("div",{key:s.group,class:"flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"},[t("span",B,n(s.count),1),t("span",D,n(s.group),1)]))),128))]),r(a).overViewStats?.analyses?.length?i("v-if",!0):(e(),o("p",I,"I did not find any analyses indicators to show")),C,E,t("div",A,[(e(!0),o(d,null,l(r(a).overViewStats?.samples,s=>(e(),o("div",{key:s.group,class:"flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"},[t("span",L,n(s.count),1),t("span",N,n(s.group),1)]))),128))]),r(a).overViewStats?.samples?.length?i("v-if",!0):(e(),o("p",P,"I did not find any sample indicators to show")),R,F,t("div",M,[(e(!0),o(d,null,l(r(a).overViewStats?.worksheets,s=>(e(),o("div",{key:s.group,class:"flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"},[t("span",T,n(s.count),1),t("span",q,n(s.group),1)]))),128))]),r(a).overViewStats?.worksheets?.length?i("v-if",!0):(e(),o("p",W,"I did not find any worksheet indicators to show")),z,G,t("div",H,[(e(!0),o(d,null,l(r(a).overViewStats?.extras,s=>(e(),o("div",{key:s.group,class:"flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"},[t("span",J,n(s.count),1),t("span",K,n(s.group),1)]))),128)),r(a).overViewStats?.extras?.length?i("v-if",!0):(e(),o("p",Q,"I did not find any extra indicators to show"))])])],64))}}),$=w(U,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/dashboard/Overview.vue"]]);export{$ as default};

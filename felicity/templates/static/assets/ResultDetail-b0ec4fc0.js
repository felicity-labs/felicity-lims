import{d as m,r as h,N as p,ch as y,o as s,c as o,q as g,f as n,g as v,F as R,b as e,j as u,_ as i,O as b,k as A}from"./index-a40c2365.js";const x=e("h4",{class:"mt-4 font-bold text-xl text-gray-500"},"Result Mutations",-1),D=e("hr",{class:"mb-2"},null,-1),T={key:1},U=e("h4",{class:"mt-4 font-bold text-xl text-gray-500"},"Result Audit Log",-1),E=e("hr",null,null,-1),k=m({__name:"ResultDetail",props:["analysisResultesultUid"],setup(a){const r=u(()=>i(()=>import("./FelAuditLog-1bc490d2.js"),["assets/FelAuditLog-1bc490d2.js","assets/index-a40c2365.js","assets/index-12195ca3.css"])),c=u(()=>i(()=>import("./FelDataTable-2b3e82a3.js"),["assets/FelDataTable-2b3e82a3.js","assets/index-a40c2365.js","assets/index-12195ca3.css"])),d=a,{withClientQuery:_}=b(),t=h(null);p(async()=>{await _(y,{resultUid:d.analysisResultesultUid},"resultMutationByResultUid").then(l=>t.value=l)});const f=[{name:"Before",value:"before",sortable:!1,hidden:!1},{name:"After",value:"after",sortable:!1,hidden:!1},{name:"Mutation",value:"mutation",sortable:!1,hidden:!1},{name:"Date",value:"date",sortable:!1,hidden:!1}];return(l,B)=>(s(),o(R,null,[x,D,(t.value?.length??0)>0?(s(),g(n(c),{key:0,columns:f,data:t.value||[],toggleColumns:!1},null,8,["data"])):(s(),o("span",T,"No Mutations for this result")),U,E,v(n(r),{targetType:"analysis_result",targetId:a.analysisResultesultUid},null,8,["targetId"])],64))}}),L=A(k,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/result/ResultDetail.vue"]]);export{L as default};
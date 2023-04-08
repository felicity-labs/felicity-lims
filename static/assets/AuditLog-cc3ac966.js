import{d as U,a5 as I,a8 as j,a9 as z,s as F,aa as V,U as O,o as r,g as d,j as u,l as R,i as C,F as g,z as m,h as i,L as E,t as a,G as h,a7 as l,_ as G}from"./index-e95f8522.js";const M={class:"relative mt-4"},P=i("div",{class:"border-r-2 border-gray-400 border-dotted absolute h-full top-0 z-0",style:{left:"7px"}},null,-1),q={key:0,class:"py-4 text-center"},H={key:1,initial:{opacity:0,y:100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:200,class:"list-none m-0 p-0"},J={class:"flex items-center mb-1"},K=i("div",{class:"bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"},null,-1),Q={class:"ml-4 font-medium"},W={class:"ml-12 w-100"},X={class:"grid grid-cols-4"},Y={class:"col-span-1"},Z={class:"text-sm text-gray-600 italic"},$={class:"col-span-3"},v={class:"text-muted text-xs text-orange-600"},B={class:"text-muted text-xs text-sky-800"},k=U({__name:"AuditLog",props:{targetId:Number,targetType:String},setup(b){const x=b,{targetType:y,targetId:L}=I(x),f=j(),p=z();p.restLogs();const{auditLogs:S,fetchingAudits:w}=F(p);f.fetchUsers({}),p.fetchAuditLogs({targetType:y?.value,targetId:L?.value});let N=V(()=>f.getUsers);function n(o){const c=N?.value?.find(_=>_.uid?.toString()===o?.toString());return c?c.auth.userName:""}function T(o){return o===1?"created":o===2?"updated":o===3?"deleted":""}function D(o){let c=new Set;return Object.entries(o?.stateBefore)?.map(([_,e])=>{Object.entries(o?.stateAfter)?.map(([t,s])=>{_===t&&e!==s&&(t&&t==="updated_by_uid"&&(t="updated_by",e=n(e),s=n(s)),t&&t==="submitted_by_uid"&&(t="submitted_by",e=n(e),s=n(s)),t&&t==="verified_by_uid"&&(t="verified_by",e=n(e),s=n(s)),t&&t==="updated_at"&&(t="updated_on",e=l(e),s=l(s)),t&&t==="cancelled_by_uid"&&(t="cancelled_by",e=n(e),s=n(s)),t&&t==="received_by_uid"&&(t="received_by",e=n(e),s=n(s)),c.add({key:t,old:e?.length>0?e:"None",new:s?.toString()?.length>0?s:"None"}))})}),c}return(o,c)=>{const _=O("motion");return r(),d("div",M,[P,u(w)?(r(),d("div",q,[R(E,{message:"Fetching audit logs ..."})])):C((r(),d("ul",H,[(r(!0),d(g,null,m(u(S),e=>(r(),d("li",{key:e.uid,class:"mb-2"},[i("div",J,[K,i("div",Q,[i("span",null,a(n(e?.userId))+" "+a(T(e?.action))+" "+a(e?.targetType),1),h(" on "),i("span",null,a(u(l)(e?.stateAfter?.updated_at)),1)])]),i("div",W,[(r(!0),d(g,null,m(D(e),t=>(r(),d("div",X,[i("span",Y,[i("span",Z,a(t?.key),1)]),i("span",$,[i("span",v,a(t?.old),1),h(" → "),i("span",B,a(t?.new),1)])]))),256))])]))),128))])),[[_]])])}}}),tt=G(k,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/components/AuditLog.vue"]]);export{tt as t};

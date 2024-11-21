import{I as T,Q as O,d as C,a8 as V,s as j,p as z,x as E,o as a,c as d,f as g,g as R,e as I,F as b,C as y,b as i,t as c,A as L,az as m,j as J,_ as P,k as Q}from"./index-48799f0c.js";import{u as G}from"./user-5df4f874.js";import{d as M}from"./_queries-16a4477d.js";const{withClientQuery:q}=T(),H=O("auditlog",{state:()=>({auditLogs:[],fetchingAudits:!1}),getters:{getAuditLogs:_=>_.auditLogs},actions:{async fetchAuditLogs(_){this.fetchingAudits=!0,await q(M,_,"auditLogsFilter").then(p=>{this.fetchingAudits=!1,this.auditLogs=p?.map(r=>(r.stateAfter=typeof r?.stateAfter=="string"?JSON.parse(r?.stateAfter):r?.stateAfter,r.stateBefore=typeof r?.stateBefore=="string"?JSON.parse(r?.stateBefore):r?.stateBefore,r))}).catch(p=>this.fetchingAudits=!1)},async restLogs(){this.auditLogs=[]}}}),K={class:"relative mt-4"},W=i("div",{class:"border-r-2 border-gray-400 border-dotted absolute h-full top-0 z-0",style:{left:"7px"}},null,-1),X={key:0,class:"py-4 text-center"},Y={key:1,initial:{opacity:0,y:100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:200,class:"list-none m-0 p-0"},Z={class:"flex items-center mb-1"},$=i("div",{class:"bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"},null,-1),v={class:"ml-4 font-medium italic"},B={class:"ml-12 w-100"},k={class:"col-span-1"},A={class:"text-sm text-gray-600 italic"},tt={class:"col-span-3"},et={class:"text-muted text-xs text-orange-600"},st={class:"text-muted text-xs text-sky-800"},it=C({__name:"FelAuditLog",props:{targetUid:String,targetType:String},setup(_){const p=J(()=>P(()=>import("./FelLoadingMessage-9cf89d4d.js"),["assets/FelLoadingMessage-9cf89d4d.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),r=_,{targetType:x,targetUid:S}=V(r),h=G(),l=H();l.restLogs();const{auditLogs:w,fetchingAudits:U}=j(l);h.fetchUsers({}),l.fetchAuditLogs({targetType:x?.value,targetUid:S?.value});let D=z(()=>h.getUsers);function n(o){const u=D?.value?.find(f=>f.uid?.toString()===o?.toString());return u?u.userName:""}function N(o){return o===1?"created":o===2?"updated":o===3?"deleted":""}function F(o){let u=new Set;return Object.entries(o?.stateBefore)?.map(([f,e])=>{Object.entries(o?.stateAfter)?.map(([t,s])=>{f===t&&e!==s&&(t&&t==="updated_by_uid"&&(t="updated_by",e=n(e),s=n(s)),t&&t==="submitted_by_uid"&&(t="submitted_by",e=n(e),s=n(s)),t&&t==="verified_by_uid"&&(t="verified_by",e=n(e),s=n(s)),t&&t==="updated_at"&&(t="updated_on",e=m(e),s=m(s)),t&&t==="cancelled_by_uid"&&(t="cancelled_by",e=n(e),s=n(s)),t&&t==="received_by_uid"&&(t="received_by",e=n(e),s=n(s)),u.add({key:t,old:e?.length>0?e:"None",new:s?.toString()?.length>0?s:"None"}))})}),u}return(o,u)=>{const f=E("motion");return a(),d("div",K,[W,g(U)?(a(),d("div",X,[R(g(p),{message:"Fetching audit logs ..."})])):I((a(),d("ul",Y,[(a(!0),d(b,null,y(g(w),e=>(a(),d("li",{key:e.uid,class:"mb-2"},[i("div",Z,[$,i("div",v,[i("span",null,c(n(e?.userUid))+" "+c(N(e?.action))+" "+c(e?.targetType),1),L(" on "),i("span",null,c(g(m)(e?.stateAfter?.updated_at)),1)])]),i("div",B,[(a(!0),d(b,null,y(F(e),t=>(a(),d("div",{key:t.key,class:"grid grid-cols-4"},[i("span",k,[i("span",A,c(t?.key),1)]),i("span",tt,[i("span",et,c(t?.old),1),L(" → "),i("span",st,c(t?.new),1)])]))),128))])]))),128))])),[[f]])])}}}),at=Q(it,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/audit/FelAuditLog.vue"]]);export{at as default};

import{d as c,ad as _,a2 as v,r as P,B as h,o as s,g as x,h as d,l as o,k as i,y as r,j as l,D as y,E as p,I as w,F as B,_ as C}from"./index-b7f12717.js";import{P as k}from"./PatientForm-a98f4554.js";import{P as F}from"./PatientInfo-3c87c22d.js";/* empty css                                                                 */import"./constants-000fbf7c.js";const E={class:""},g=d("h3",null,"Patient Form",-1),N=c({__name:"index",setup(V){const m=_(),a=v();let e=P(!1);a.fetchPtientByUid(m.params.patientUid);const u=n=>{a.updatePatient(n),e.value=!1};return(n,t)=>{const f=h("router-view");return s(),x(B,null,[d("div",E,[o(F,{onEditPatient:t[0]||(t[0]=()=>i(e)?e.value=!0:e=!0)}),o(f)]),r(" Patient Edit Form Modal "),l(e)?(s(),y(w,{key:0,onClose:t[1]||(t[1]=b=>i(e)?e.value=!1:e=!1)},{header:p(()=>[g]),body:p(()=>[o(k,{patient:l(a).patient,navigate:!1,onClose:u},null,8,["patient"])]),_:1})):r("v-if",!0)],64)}}}),U=C(N,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/patient/_id/index.vue"]]);export{U as default};

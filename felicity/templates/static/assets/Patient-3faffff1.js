import{d as E,J as y,r as C,m as h,o as _,c as w,b as m,g as n,i as l,f as t,y as B,z as u,B as V,F as k,j as s,_ as i,k as D}from"./index-dcd7b802.js";import{u as R}from"./patient-9eb0fa2a.js";const x={class:""},A=m("h3",null,"Patient Form",-1),F=E({__name:"Patient",setup(I){const p=s(()=>i(()=>import("./FelModal-80650623.js"),["assets/FelModal-80650623.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),c=s(()=>i(()=>import("./PatientForm-14da4282.js"),["assets/PatientForm-14da4282.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/vue-multiselect.esm-3a5e6fb9.js","assets/patient.mutations-3df4b9c7.js","assets/client-851824b4.js","assets/location-9f3dd6f9.js","assets/patient-9eb0fa2a.js","assets/array-e202a31f.js","assets/vue-multiselect-a538cd7c.css"])),d=s(()=>i(()=>import("./PatientInfo-f9cdbf61.js"),["assets/PatientInfo-f9cdbf61.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/constants-054f7af0.js","assets/patient-9eb0fa2a.js"])),f=y(),a=R();let e=C(!1);a.fetchPtientByUid(f.params.patientUid);const v=r=>{a.updatePatient(r),e.value=!1};return(r,o)=>{const P=h("router-view");return _(),w(k,null,[m("div",x,[n(t(d),{onEditPatient:o[0]||(o[0]=()=>l(e)?e.value=!0:e=!0)}),n(P)]),t(e)?(_(),B(t(p),{key:0,onClose:o[1]||(o[1]=b=>l(e)?e.value=!1:e=!1)},{header:u(()=>[A]),body:u(()=>[n(t(c),{patient:t(a).patient,navigate:!1,onClose:v},null,8,["patient"])]),_:1})):V("",!0)],64)}}}),N=D(F,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/patient/_id/Patient.vue"]]);export{N as default};

import{d as g,r as y,p,o as s,c as _,b as n,y as i,F as k,C as S,G as D,f as e,i as b,t as x,z as o,j as r,_ as l,k as E}from"./index-7210a26e.js";import{u as C}from"./shipment-716996d5.js";const A={class:""},L={class:"col-span-12"},T={class:"bg-white shadow-md mt-2"},V={class:"-mb-px flex justify-start"},w=["onClick"],P=g({__name:"ShipmentDetail",setup(R){const m=r(()=>l(()=>import("./ShipmentAssign-db44d369.js"),["assets/ShipmentAssign-db44d369.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/FelButton-1a7817c1.js","assets/shipment-716996d5.js","assets/shipment-7d887fd2.js"])),u=r(()=>l(()=>import("./ShipmentSamples-21b571cb.js"),["assets/ShipmentSamples-21b571cb.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/shipment-7d887fd2.js","assets/shipment-716996d5.js"])),d=r(()=>l(()=>import("./Manifest-e6bad366.js"),["assets/Manifest-e6bad366.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/shipment-7d887fd2.js","assets/shipment-716996d5.js"])),f=r(()=>l(()=>import("./FelAuditLog-31b25f31.js"),["assets/FelAuditLog-31b25f31.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/user-08d5de87.js","assets/_queries-db036553.js"]));let v=C(),t=y("detail");const c=p(()=>v.getShipment),h=p(()=>["preperation","empty"].includes(c.value?.state??"")?["detail","assign-samples","logs"]:["detail","manifest","logs"]);return(B,I)=>(s(),_("div",A,[n("section",L,[i(" Sample and Case Data "),n("nav",T,[n("div",V,[(s(!0),_(k,null,S(h.value,a=>(s(),_("a",{key:a,class:D(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(t)===a}]),onClick:O=>b(t)?t.value=a:t=a},x(a),11,w))),128))])]),n("div",null,[e(t)==="detail"?(s(),o(e(u),{key:0})):i("v-if",!0),e(t)==="assign-samples"?(s(),o(e(m),{key:1})):i("v-if",!0),e(t)==="manifest"?(s(),o(e(d),{key:2})):i("v-if",!0),e(t)==="logs"?(s(),o(e(f),{key:3,targetType:"shipment",targetUid:c.value?.uid},null,8,["targetUid"])):i("v-if",!0)])])]))}}),F=E(P,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/shipment/_id/ShipmentDetail.vue"]]);export{F as default};

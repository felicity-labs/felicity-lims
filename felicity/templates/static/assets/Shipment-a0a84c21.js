import{d as L,J as $,p as d,n as O,m as v,x as R,o as h,c as y,e as s,b as e,y as p,t as a,g as x,L as n,k as B}from"./index-7210a26e.js";import{u as N}from"./shipment-716996d5.js";import{u as j}from"./shipment-7d887fd2.js";const E={class:""},V={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 py-4"},z={class:"grid grid-cols-12 gap-1"},A={class:"col-span-12 flex justify-between font-bold text-medium mb-2"},F={class:"flex"},I={class:"mr-10"},U={type:"button",class:"bg-sky-800 text-white px-2 py-1 rounded-sm leading-none"},J={class:"ml-2"},M={class:"absolute mt-4 py-0 bg-gray-300 rounded-sm shadow-xl z-20"},T={class:"col-span-12 sm:col-end-13 px-3 sm:px-0"},q=e("hr",null,null,-1),G={class:"grid grid-cols-2 mt-2"},H={class:"col-span-1"},K={class:"flex"},P=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"External Laboratory",-1),Q={class:"text-gray-600 text-sm md:text-md"},W={class:"flex"},X=e("span",{class:"text-gray-800 text-md font-semibold w-1/6"},"Courier:",-1),Y={class:"text-gray-600 text-sm md:text-md"},Z={class:"flex"},ee=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Assigned Count:",-1),te={class:"text-gray-600 text-sm md:text-md"},oe={class:"col-span-1"},se={class:"flex"},ne=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Comment:",-1),re={class:"text-gray-600 text-sm md:text-md"},ae=L({__name:"Shipment",setup(ie){const _=$(),c=N(),{actionShipment:b}=j();c.fetchReferralLaboratories(),c.fetchShipmentByUid(_.params.shipmentUid);const t=d(()=>c.getShipment),l=O({dropdownOpen:!1}),m=d(()=>!!["due"].includes(t?.value?.state?.toLowerCase())),f=d(()=>!!["preperation"].includes(t?.value?.state?.toLowerCase())),g=d(()=>!!["preperation","ready"].includes(t?.value?.state?.toLowerCase())),w=d(()=>!!["ready"].includes(t?.value?.state?.toLowerCase())),k=d(()=>!!["failed"].includes(t?.value?.state?.toLowerCase())),i=u=>{if(!t.value?.incoming&&!(t.value?.laboratory?.url&&t.value?.laboratory?.password&&t.value?.laboratory?.username&&t.value?.courier)){alert("The External Laboratory has missing information or the courier missing");return}b(t.value?.uid,u)};return(u,o)=>{const C=v("font-awesome-icon"),S=v("router-view"),D=R("motion-slide-top");return h(),y("div",E,[s((h(),y("div",V,[e("div",z,[p(" Meta Column "),e("div",A,[e("div",F,[e("h3",I,a(t.value?.shipmentId),1),e("h3",null,a(t.value?.incoming?"InBound":"OutBound"),1)]),e("div",null,[e("div",{onClick:o[0]||(o[0]=r=>l.dropdownOpen=!l.dropdownOpen),class:"hidden md:block md:flex md:items-center ml-2 mt-2"},[e("button",U,a(t.value?.state||"unknown"),1),e("div",J,[x(C,{icon:"chevron-down",class:"text-gray-400"})])]),s(e("div",{onClick:o[1]||(o[1]=r=>l.dropdownOpen=!1),class:"fixed inset-0 h-full w-full z-10"},null,512),[[n,l.dropdownOpen]]),s(e("div",M,[s(e("div",{onClick:o[2]||(o[2]=r=>i("reject")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Reject ",512),[[n,m.value]]),s(e("div",{onClick:o[3]||(o[3]=r=>i("receive")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Receive ",512),[[n,m.value]]),s(e("div",{onClick:o[4]||(o[4]=r=>i("finalise")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Finalise ",512),[[n,f.value]]),s(e("div",{onClick:o[5]||(o[5]=r=>i("dispatch")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Dispatch ",512),[[n,w.value]]),s(e("div",{onClick:o[6]||(o[6]=r=>i("dispatch-now")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Retry Notification ",512),[[n,k.value]]),s(e("div",{onClick:o[7]||(o[7]=r=>i("cancel")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Cancel ",512),[[n,g.value]])],512),[[n,l.dropdownOpen]])])]),p(" Summary Column "),e("div",T,[q,e("div",G,[e("div",H,[p(" Client Details "),e("div",K,[P,e("span",Q,a(t.value?.laboratory?.name),1)]),e("div",W,[X,e("span",Y,a(t.value?.courier),1)]),e("div",Z,[ee,e("span",te,a(t.value?.assignedCount),1)])]),e("div",oe,[e("div",se,[ne,e("span",re,a(t.value?.comment),1)])])])])])])),[[D]]),x(S)])}}}),pe=B(ae,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/shipment/_id/Shipment.vue"]]);export{pe as default};

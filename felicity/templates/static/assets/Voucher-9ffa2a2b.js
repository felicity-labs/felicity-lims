import{d as te,I as se,s as oe,q as ae,r as ne,m as le,x as Y,o as r,c as u,b as e,e as c,f as t,g as C,F as ie,C as de,G as p,t as d,i as m,y as P,z as re,A as q,v as D,ae as F,w as ce,j as L,_ as O,av as N,D as ue,E as me,k as _e}from"./index-7210a26e.js";import{u as pe,b as he,E as fe}from"./billing-e7acd4c4.js";import{c as be,a as U,f as R,d as xe,g as A,u as ye,b as _}from"./array-096e3bee.js";const n=h=>(ue("data-v-3f30ca74"),h=h(),me(),h),ge={class:"mt-4"},ve=n(()=>e("hr",null,null,-1)),we={class:"grid grid-cols-12 gap-4 mt-2"},Ve={initial:{opacity:0,y:100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-3 overflow-y-scroll overscroll-contain voucher-scroll"},ke={key:0,class:"py-4 text-center bg-white w-full mb-1 rounded-sm shadow border"},De={key:1},Ce=["onClick"],Pe={class:"flex-grow p-1"},Le={class:"font-semibold text-gray-800 flex justify-between"},Oe={class:"text-sm text-gray-500"},Ue={key:0,initial:{opacity:0,y:-100},enter:{opacity:1,y:0,scale:1},variants:{custom:{scale:2}},delay:400,class:"col-span-9"},Ee={class:"bg-white rounded-sm shadow-sm hover:shadow-xs duration-500 px-4 sm:px-6 md:px-2 py-4"},Se={class:"flex justify-between items-center"},Me={class:"text-gray-800 text-l font-bold"},je=n(()=>e("hr",null,null,-1)),Ye={class:"grid grid-cols-3 gap-x-8"},qe={class:"col-span-1"},Fe={class:"flex justify-between items-center mt-2"},Ne=n(()=>e("span",{class:"text-gray-800 text-sm font-semibold"},"Start Date:",-1)),Re={class:"text-gray-600 text-sm md:text-md"},Ae={class:"flex justify-between items-center mt-2"},Ie=n(()=>e("span",{class:"text-gray-800 text-sm font-semibold"},"End Date:",-1)),$e={class:"text-gray-600 text-sm md:text-md"},Te={class:"col-span-1"},Be={class:"flex justify-between items-center mt-2"},ze=n(()=>e("span",{class:"text-gray-800 text-sm font-semibold"},"Usage Limit:",-1)),Ge={class:"text-gray-600 text-sm md:text-md"},We={class:"flex justify-between items-center mt-2"},He=n(()=>e("span",{class:"text-gray-800 text-sm font-semibold"},"Used:",-1)),Je={class:"text-gray-600 text-sm md:text-md"},Ke={class:"col-span-1"},Qe={class:"flex justify-between items-center mt-2"},Xe=n(()=>e("span",{class:"text-gray-800 text-sm font-semibold"},"Once per customer:",-1)),Ze={class:"text-gray-600 text-sm md:text-md"},et={class:"flex justify-between items-center mt-2"},tt=n(()=>e("span",{class:"text-gray-800 text-sm font-semibold"},"Once per order:",-1)),st={class:"text-gray-600 text-sm md:text-md"},ot=n(()=>e("h3",null,"Voucher Form",-1)),at={class:"grid grid-cols-4 gap-x-4 mb-4"},nt={class:"block col-span-2 mb-2"},lt=n(()=>e("span",{class:"text-gray-700"},"Voucher Name",-1)),it={class:"block col-span-1 mb-2"},dt=n(()=>e("span",{class:"text-gray-700"},"Start Date",-1)),rt={class:"block col-span-1 mb-2"},ct=n(()=>e("span",{class:"text-gray-700"},"End Date",-1)),ut={class:"grid grid-cols-4 gap-x-4 mb-4"},mt={class:"block col-span-2 mb-2"},_t=n(()=>e("span",{class:"text-gray-700"},"Usage Limit",-1)),pt={class:"grid grid-cols-2 gap-x-4 mb-4"},ht={class:"block col-span-1 mb-2"},ft=n(()=>e("span",{class:"text-gray-700"},"Once Per Customer",-1)),bt={class:"block col-span-1 mb-2"},xt=n(()=>e("span",{class:"text-gray-700"},"Once Per Order",-1)),yt=n(()=>e("hr",null,null,-1)),gt=te({__name:"Voucher",setup(h){const I=L(()=>O(()=>import("./FelLoadingMessage-03c7adb7.js"),["assets/FelLoadingMessage-03c7adb7.js","assets/index-7210a26e.js","assets/index-a67f0314.css"])),$=L(()=>O(()=>import("./FelModal-b8e55526.js"),["assets/FelModal-b8e55526.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),T=L(()=>O(()=>import("./VoucherCodes-ab0bf9ec.js"),["assets/VoucherCodes-ab0bf9ec.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/billing-e7acd4c4.js","assets/array-096e3bee.js","assets/VoucherCodes-bd5edd75.css"])),{withClientMutation:E}=se();let f=pe();const{vouchers:S,fetchingVouchers:B}=oe(f);ae(()=>{f.fetchVouchers()});let i=ne(!1);const z=be({uid:U().nullable(),name:U().required("Voucher Name is Required"),startDate:R().required("Start Date is Required"),endDate:R().required("End Date is Required"),usageLimit:xe().required("Usage Limit is Required"),used:U().nullable(),oncePerCustomer:A().default(!0),oncePerOrder:A().default(!0)}),{handleSubmit:G,errors:b,setFieldValue:l}=ye({validationSchema:z,initialValues:{oncePerCustomer:!0,oncePerOrder:!0}}),{value:x}=_("uid"),{value:y}=_("name"),{value:g}=_("startDate"),{value:v}=_("endDate"),{value:w}=_("usageLimit"),{value:W}=_("used"),{value:V}=_("oncePerCustomer"),{value:k}=_("oncePerOrder"),M=G(a=>{a.uid||Q(a),a.uid&&X(a)});let H=a=>{l("uid",a.uid),l("name",a.name),l("startDate",N(a.startDate,"DD/MM/YYYY")),l("endDate",N(a.endDate,"DD/MM/YYYY")),l("usageLimit",a.usageLimit),l("used",a.used),l("oncePerCustomer",a.oncePerCustomer),l("oncePerOrder",a.oncePerOrder)},J=()=>{l("uid",void 0),l("name",void 0),l("startDate",void 0),l("endDate",void 0),l("usageLimit",void 0),l("oncePerCustomer",!0),l("oncePerOrder",!0)};const K=()=>{J(),i.value=!0},Q=a=>{delete a.uid,E(he,{payload:a},"createVoucher").then(s=>f.addVoucher(s)).finally(()=>i.value=!1)},X=a=>{delete a.uid,delete a.used,E(fe,{uid:x?.value,payload:a},"updateVoucher").then(s=>f.updateVoucher(s)).finally(()=>i.value=!1)};return(a,s)=>{const Z=le("font-awesome-icon"),j=Y("motion"),ee=Y("motion-slide-top");return r(),u("div",ge,[e("div",{class:"flex justify-between"},[e("button",{class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:K}," Add Voucher ")]),ve,e("div",we,[c((r(),u("section",Ve,[t(B)?(r(),u("div",ke,[C(t(I),{message:"Fetching vouchers ..."})])):(r(),u("div",De,[(r(!0),u(ie,null,de(t(S),o=>(r(),u("a",{key:o.uid,onClick:vt=>t(H)(o),class:p(["bg-white w-full flex items-center p-1 mb-1 rounded-sm shadow border",{"border-sky-800 bg-emerald-200":o.uid===t(x)}])},[e("div",Pe,[e("div",Le,[e("span",null,d(o.name),1),e("span",Oe,d(o.used)+" of "+d(o.usageLimit),1)])])],10,Ce))),128))]))])),[[j]]),t(S)?.length>0&&t(x)?c((r(),u("section",Ue,[c((r(),u("div",Ee,[e("div",Se,[e("h4",Me,d(t(y)?.toUpperCase()),1),e("a",{onClick:s[0]||(s[0]=o=>m(i)?i.value=!0:i=!0),class:"px-2 cursor text-gray-400 hover:text-gray-900"},[C(Z,{icon:"pen"})])]),je,e("section",Ye,[e("div",qe,[e("div",Fe,[Ne,e("span",Re,d(t(g)),1)]),e("div",Ae,[Ie,e("span",$e,d(t(v)),1)])]),e("div",Te,[e("div",Be,[ze,e("span",Ge,d(t(w)),1)]),e("div",We,[He,e("span",Je,d(t(W)),1)])]),e("div",Ke,[e("div",Qe,[Xe,e("span",Ze,d(t(V)?"Yes":"No"),1)]),e("div",et,[tt,e("span",st,d(t(k)?"Yes":"No"),1)])])])])),[[ee]]),C(t(T),{voucherUid:t(x)},null,8,["voucherUid"])])),[[j]]):P("v-if",!0)]),P(" Voucher Form Modal "),t(i)?(r(),re(t($),{key:0,onClose:s[8]||(s[8]=o=>m(i)?i.value=!1:i=!1),contentWidth:"w-2/6"},{header:q(()=>[ot]),body:q(()=>[e("form",null,[e("div",at,[e("label",nt,[lt,c(e("input",{class:p(["form-input mt-1 block w-full",{"border-red-500 animate-pulse":t(b).name}]),type:"text","onUpdate:modelValue":s[1]||(s[1]=o=>m(y)?y.value=o:null),placeholder:"Name ..."},null,2),[[D,t(y)]])]),e("label",it,[dt,c(e("input",{class:p(["form-input mt-1 block w-full",{"border-red-500 animate-pulse":t(b).startDate}]),type:"date","onUpdate:modelValue":s[2]||(s[2]=o=>m(g)?g.value=o:null)},null,2),[[D,t(g)]])]),e("label",rt,[ct,c(e("input",{class:p(["form-input mt-1 block w-full",{"border-red-500 animate-pulse":t(b).endDate}]),type:"date","onUpdate:modelValue":s[3]||(s[3]=o=>m(v)?v.value=o:null)},null,2),[[D,t(v)]])])]),e("div",ut,[e("label",mt,[_t,c(e("input",{class:p(["form-input mt-1 block w-full",{"border-red-500 animate-pulse":t(b).usageLimit}]),type:"number",min:"1","onUpdate:modelValue":s[4]||(s[4]=o=>m(w)?w.value=o:null)},null,2),[[D,t(w)]])])]),e("div",pt,[e("label",ht,[ft,c(e("input",{class:"form-checkbox ml-4",type:"checkbox","onUpdate:modelValue":s[5]||(s[5]=o=>m(V)?V.value=o:null),checked:""},null,512),[[F,t(V)]])]),e("label",bt,[xt,c(e("input",{class:"form-checkbox ml-4",type:"checkbox","onUpdate:modelValue":s[6]||(s[6]=o=>m(k)?k.value=o:null),checked:""},null,512),[[F,t(k)]])])]),yt,e("button",{type:"submit",class:"-mb-4 border border-sky-800 bg-sky-800 text-white rounded-sm px-2 py-1 mt-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline",onClick:s[7]||(s[7]=ce((...o)=>t(M)&&t(M)(...o),["prevent"]))}," Save Voucher ")])]),_:1})):P("v-if",!0)])}}});const Dt=_e(gt,[["__scopeId","data-v-3f30ca74"],["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/billing/Voucher.vue"]]);export{Dt as default};

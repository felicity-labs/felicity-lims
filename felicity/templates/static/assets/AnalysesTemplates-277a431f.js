import{d as z,as as Y,L as G,r as h,C as q,D as x,o as a,c as i,b as e,F as p,p as _,w as C,y as v,f as l,t as d,i as S,g as H,G as y,H as J,e as f,au as K,x as k,q as Q,v as D,at as W,j as U,_ as M,bF as X,bG as Z,O as ee,k as se}from"./index-73e47413.js";const te={class:""},oe={class:"container w-full my-4"},le=e("hr",null,null,-1),ne=e("hr",null,null,-1),ae=e("hr",null,null,-1),ie={class:"grid grid-cols-12 gap-4 mt-2"},re={class:"col-span-3 overflow-y-scroll overscroll-contain max-h-[540px]"},de=["onClick"],ce={class:"cursor-pointer"},ue={class:"flex-grow p-1"},pe={class:"font-medium text-gray-500 hover:text-gray-700 flex justify-between"},me=e("span",{class:"text-sm text-gray-500"},null,-1),_e={key:0,class:"col-span-9"},he={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4"},ye={class:"grid grid-cols-12 gap-3"},fe={class:"col-span-12 px-3 sm:px-0"},ve={class:"flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold"},ge=e("svg",{class:"w-4 h-4 fill-current",viewBox:"0 0 20 20"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1),be=[ge],xe={class:"bg-white shadow-md mt-2"},ke={class:"-mb-px flex justify-start"},we=["onClick"],Ae={class:"mt-2 p-2 bg-white"},Te={key:0},Ee=e("h3",null,"Analyses",-1),Ce=e("hr",null,null,-1),Se={class:"col-span-4 overflow-y-scroll overscroll-contain analyses-scroll bg-white p-1"},De={class:"grid grid-cols-6 gap-2 w-full"},Ue={class:"flex-grow p-1"},Me={class:v(["font-medium text-gray-500 hover:text-gray-700",{"text-gray-700 font-medium":!1}])},Ve=["id","onUpdate:modelValue"],Le=["for"],Ne=e("hr",null,null,-1),$e={action:"post",class:"p-1"},je={class:"grid grid-cols-2 gap-x-4 mb-4"},Fe={class:"block col-span-2 mb-2"},Ie=e("span",{class:"text-gray-700"},"Analysis Template Name",-1),Oe={class:"block col-span-2 mb-2"},Pe=e("span",{class:"text-gray-700"},"Description",-1),Be={class:"block col-span-1 mb-2"},Re=e("span",{class:"text-gray-700"},"Department",-1),ze=e("option",null,null,-1),Ye=["value"],Ge=e("hr",null,null,-1),qe=z({__name:"AnalysesTemplates",setup(He){const V=U(()=>M(()=>import("./FelModal-344bef25.js"),["assets/FelModal-344bef25.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/FelModal-a7d23795.css"])),L=U(()=>M(()=>import("./FelAccordion-bf10055d.js"),["assets/FelAccordion-bf10055d.js","assets/index-73e47413.js","assets/index-227a7d92.css"])),c=Y(),N=G(),{withClientMutation:w}=ee();let m=h("analyses-services");const $=["analyses-services"];let u=h(!1),A=h("");const g=h(!0);let o=q({});const j=x(()=>N.getDepartments);c.fetchAnalysesServices({}),c.fetchAnalysesTemplates();const b=x(()=>c.getAnalysesServices),F=x(()=>c.getAnalysesTemplates);function I(){const n={name:o.name,description:o.description,departmentUid:o.departmentUid};w(X,{payload:n},"createAnalysisTemplate").then(t=>c.addAnalysisTemplate(t))}function T(){const n={name:o.name,description:o.description,departmentUid:o.departmentUid,active:o.active,services:o.analyses?.map(t=>t.uid)};w(Z,{uid:o.uid,payload:n},"updateAnalysisTemplate").then(t=>c.updateAnalysesTemplate(t))}function O(n){Object.assign(o,{...n}),b.value?.forEach(t=>{t[1].forEach(s=>{s.checked=!1,n.analyses?.some(r=>r.uid===s.uid)&&(s.checked=!0)})})}function P(){const n=[];b.value?.forEach(t=>{t[1].forEach(s=>{s.checked&&n.push(s)})}),o.analyses=n,T()}function E(n,t={}){g.value=n,u.value=!0,A.value=(n?"CREATE":"EDIT")+" ANALYSES TEMPLATE",n?Object.assign(o,{}):Object.assign(o,{...t})}function B(){g.value===!0&&I(),g.value===!1&&T(),u.value=!1}return(n,t)=>(a(),i(p,null,[e("div",te,[e("div",oe,[le,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=s=>E(!0))}," Add Analyses Template "),ne]),ae,e("div",ie,[e("section",re,[e("ul",null,[(a(!0),i(p,null,_(F.value,s=>(a(),i("li",{key:s.uid,onClick:C(r=>O(s),["prevent","stop"]),class:v(["bg-white w-full p-1 mb-1 rounded",{"border-gray-100 bg-emerald-200":s?.uid===l(o)?.uid}])},[e("a",ce,[e("div",ue,[e("div",pe,[e("span",null,d(s?.name),1),me])])])],10,de))),128))])]),l(o)?.uid!==void 0?(a(),i("section",_e,[e("div",he,[e("div",ye,[e("div",fe,[e("div",ve,[e("span",null,d(l(o)?.name),1),e("div",null,[e("button",{onClick:t[1]||(t[1]=s=>E(!1)),class:"ml-4 inline-flex items-center justify-center w-8 h-8 mr-2 border-sky-800 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"},[...be])])])])])]),e("nav",xe,[e("div",ke,[(a(),i(p,null,_($,s=>e("a",{key:s,class:v(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":l(m)===s}]),onClick:r=>S(m)?m.value=s:m=s},d(s),11,we)),64))])]),e("section",Ae,[l(m)==="analyses-services"?(a(),i("div",Te,[Ee,Ce,e("section",Se,[e("div",De,[(a(!0),i(p,null,_(b.value,s=>(a(),i("div",{class:"col-span-2",key:s[0]},[H(l(L),null,{title:y(()=>[J(d(s[0]),1)]),body:y(()=>[e("div",null,[e("ul",null,[(a(!0),i(p,null,_(s[1],r=>(a(),i("li",{key:r?.uid,class:v(["cursor-pointer",[{"border-sky-800 bg-gray-200 underline pl-3":!1}]])},[e("div",Ue,[e("div",Me,[f(e("input",{type:"checkbox",id:`toggle-${r?.uid}`,class:"form-control","onUpdate:modelValue":R=>r.checked=R},null,8,Ve),[[K,r.checked]]),e("label",{for:`toggle-${r?.uid}`,class:"text-gray-700 ml-4"},d(r?.name),9,Le)])]),Ne]))),128))])])]),_:2},1024)]))),128))]),e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[2]||(t[2]=s=>P())}," Update Template ")])])):k("",!0)])])):k("",!0)])]),l(u)?(a(),Q(l(V),{key:0,onClose:t[7]||(t[7]=s=>S(u)?u.value=!1:u=!1)},{header:y(()=>[e("h3",null,d(l(A)),1)]),body:y(()=>[e("form",$e,[e("div",je,[e("label",Fe,[Ie,f(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[3]||(t[3]=s=>l(o).name=s),placeholder:"Name ..."},null,512),[[D,l(o).name]])]),e("label",Oe,[Pe,f(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[4]||(t[4]=s=>l(o).description=s),placeholder:"Description ..."},null,512),[[D,l(o).description]])]),e("label",Be,[Re,f(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t[5]||(t[5]=s=>l(o).departmentUid=s)},[ze,(a(!0),i(p,null,_(j.value,s=>(a(),i("option",{key:s.uid,value:s?.uid},d(s.name),9,Ye))),128))],512),[[W,l(o).departmentUid]])])]),Ge,e("button",{type:"button",onClick:t[6]||(t[6]=C(s=>B(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):k("",!0)],64))}}),Ke=se(qe,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/analyses/AnalysesTemplates.vue"]]);export{Ke as default};

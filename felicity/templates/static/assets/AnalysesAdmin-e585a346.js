import{d as A,L as k,W as b,r as h,D as E,o as t,c as i,b as l,F as x,p as D,y as g,f as e,i as C,t as L,q as a,x as R,j as o,_ as n,k as S}from"./index-2a6c9271.js";const T={class:"mt-4"},P={class:"bg-white shadow-md mt-2"},V={class:"-mb-px flex justify-start"},I=["onClick"],O=A({__name:"AnalysesAdmin",setup(j){const c=o(()=>n(()=>import("./AnalysesCategories-f9a18cc9.js"),["assets/AnalysesCategories-f9a18cc9.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),_=o(()=>n(()=>import("./AnalysesProfiles-c3108f5f.js"),["assets/AnalysesProfiles-c3108f5f.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),p=o(()=>n(()=>import("./ServicesAdmin-96ceaeb9.js"),["assets/ServicesAdmin-96ceaeb9.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),m=o(()=>n(()=>import("./QCLevels-7479fd7e.js"),["assets/QCLevels-7479fd7e.js","assets/index-2a6c9271.js","assets/index-88806377.css","assets/QCLevels-b0e61712.css"])),y=o(()=>n(()=>import("./QCTemplates-5dcd7afd.js"),["assets/QCTemplates-5dcd7afd.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),u=o(()=>n(()=>import("./RejectionReasons-2aa98b04.js"),["assets/RejectionReasons-2aa98b04.js","assets/index-2a6c9271.js","assets/index-88806377.css"])),d=k(),v=b();let s=h("analyses-profiles");const f=["analyses-profiles","analyses-services","analyses-categories","quality-control-levels","quality-control-templates","rejection-reasons"];return E(()=>"tab-"+s.value),v.fetchSampleTypes(),d.fetchDepartments({}),(q,w)=>(t(),i("div",T,[l("nav",P,[l("div",V,[(t(),i(x,null,D(f,r=>l("a",{key:r,class:g(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(s)===r}]),onClick:B=>C(s)?s.value=r:s=r},L(r),11,I)),64))])]),e(s)==="analyses-profiles"?(t(),a(e(_),{key:0})):e(s)==="analyses-services"?(t(),a(e(p),{key:1})):e(s)==="analyses-categories"?(t(),a(e(c),{key:2})):e(s)==="quality-control-levels"?(t(),a(e(m),{key:3})):e(s)==="quality-control-templates"?(t(),a(e(y),{key:4})):e(s)==="rejection-reasons"?(t(),a(e(u),{key:5})):R("",!0)]))}}),N=S(O,[["__file","/home/aurthur/Documents/Development/felicity-lims/webapp/views/admin/analyses/AnalysesAdmin.vue"]]);export{N as default};
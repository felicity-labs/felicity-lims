import{d,r as f,p as v,o as r,c as _,b as o,F as y,C as k,G as h,f as s,i as b,t as x,y as a,B as n,j as i,_ as c,k as g}from"./index-dcd7b802.js";const A={class:"mt-4"},C={class:"bg-white shadow-md mt-2"},E={class:"-mb-px flex justify-start"},D=["onClick"],w=d({__name:"UsersAdmin",setup(B){const m=i(()=>c(()=>import("./UsersListing-f8847b38.js"),["assets/UsersListing-f8847b38.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/user-15738887.js","assets/_queries-f2a7ab3f.js"])),u=i(()=>c(()=>import("./Groups-0b2a1e6f.js"),["assets/Groups-0b2a1e6f.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/user-15738887.js","assets/_queries-f2a7ab3f.js"])),l=i(()=>c(()=>import("./Permissions-1bef1155.js"),["assets/Permissions-1bef1155.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/user-15738887.js","assets/_queries-f2a7ab3f.js"]));let e=f("users");const p=["users","groups","permissions"];return v(()=>"tab-"+e.value),(P,V)=>(r(),_("div",A,[o("nav",C,[o("div",E,[(r(),_(y,null,k(p,t=>o("a",{key:t,class:h(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":s(e)===t}]),onClick:L=>b(e)?e.value=t:e=t},x(t),11,D)),64))])]),s(e)==="users"?(r(),a(s(m),{key:0})):n("",!0),s(e)==="groups"?(r(),a(s(u),{key:1})):n("",!0),s(e)==="permissions"?(r(),a(s(l),{key:2})):n("",!0)]))}}),T=g(w,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/users/UsersAdmin.vue"]]);export{T as default};

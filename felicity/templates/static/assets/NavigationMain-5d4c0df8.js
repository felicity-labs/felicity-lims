import{d as A,I as D,r as i,l as E,N as M,q as I,p as L,m as g,o as m,c as p,b as e,e as l,L as c,f as a,g as o,M as P,K as T,z as f,t as _,F as x,C as j,j as z,_ as B,k as F}from"./index-0b8039cf.js";import{u as O}from"./notification-0c2f9dd1.js";const V={id:"main-nav",class:"flex items-center pr-4 bg-sky-800",role:"navigation"},R=e("div",{class:"flex-1 py-2"},[e("div",{class:"relative w-full max-w-xl mr-6 focus-within:text-purple-500"})],-1),q={class:"flex"},K=e("span",null,"Errors",-1),U=e("span",null,"Notifications",-1),G=e("span",{class:"text-sm"},"Settings",-1),H={class:"flex text-right align-middle py-2"},J={class:"flex justify-center items-center h-8 w-8 rounded-full border-2 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none text-white"},Q={class:"relative"},W={class:"text-white text-sm mr-2"},X={class:"absolute right-0 mt-4 py-2 w-48 bg-sky-800 rounded-sm shadow-xl z-20"},Y={class:"flex items-center justify-between"},Z=e("h3",{class:"font-semibold text-lg"},"Errors List",-1),ee=A({__name:"NavigationMain",setup(te){const b=z(()=>B(()=>import("./FelDrawer-bdbe33dd.js"),["assets/FelDrawer-bdbe33dd.js","assets/index-0b8039cf.js","assets/index-a67f0314.css"])),{errors:v,clearErrors:y}=D(),n=i(!1);i(!1),i(!1);const w=O(),d=E(),{theme:se,toggleTheme:oe,loadPreferedTheme:k}=M();I(()=>k());const N=L(()=>`${d.auth?.user?.firstName} ${d.auth?.user?.lastName}`),C=h=>w.showNotifications(h),u=i(!1);return(h,t)=>{const r=g("font-awesome-icon"),$=g("router-link");return m(),p(x,null,[e("nav",V,[R,e("div",q,[l(e("a",{class:"no-underline text-gray-100 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark",onClick:t[0]||(t[0]=s=>u.value=!0)},[o(r,{icon:"bell",class:"mr-2"}),K],512),[[c,a(v).length>0]]),e("a",{class:"no-underline text-gray-100 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark",onClick:t[1]||(t[1]=s=>C(!0))},[o(r,{icon:"bell",class:"mr-2"}),U]),l(o($,{to:"/admin",class:"no-underline text-gray-100 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"},{default:f(()=>[o(r,{icon:"cog",class:"mr-2"}),G]),_:1},512),[[c,P(T.ADMINISTRATION)]]),e("div",H,[e("span",J,[o(r,{icon:"user"})]),e("div",Q,[e("div",{onClick:t[2]||(t[2]=s=>n.value=!n.value),class:"hidden md:block md:flex md:items-center ml-2 mt-1"},[e("span",W,_(N.value),1),e("div",null,[o(r,{icon:"chevron-down",class:"text-gray-400"})])]),l(e("div",{onClick:t[3]||(t[3]=s=>n.value=!1),class:"fixed inset-0 h-full w-full z-100"},null,512),[[c,n.value]]),l(e("div",X,[e("li",{onClick:t[4]||(t[4]=s=>a(d).logout()),class:"no-underline text-gray-100 py-1 opacity-80 flex items-center px-4 border-b border-transparent hover:bg-gray-800 hover:bg-opacity-25 hover:text-white"}," Log out ")],512),[[c,n.value]])])])])]),o(a(b),{show:u.value,onClose:t[6]||(t[6]=s=>u.value=!1)},{header:f(()=>[e("div",Y,[Z,e("button",{class:"p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors",onClick:t[5]||(t[5]=s=>a(y)())},[o(r,{icon:"fa-delete-left",class:"w-5 h-5"})])])]),body:f(()=>[e("ul",null,[(m(!0),p(x,null,j(a(v),(s,S)=>(m(),p("li",{key:S,class:"mb-2 p-2 bg-white italic text-xs"},[e("code",null,_(s),1)]))),128))])]),_:1},8,["show"])],64)}}}),ae=F(ee,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/nav/NavigationMain.vue"]]);export{ae as default};
import{d as L,aL as S,r as b,C as F,D as x,o as c,c as p,b as e,F as m,p as y,t as i,y as w,e as r,E as G,f as l,q as M,G as k,v as u,at as P,H as v,au as U,w as T,i as R,x as O,j as $,_ as I,bq as j,br as q,O as z,k as H}from"./index-73e47413.js";const J={class:"w-full my-4"},K=e("hr",null,null,-1),Q={class:"flex justify-between items-center"},W=e("h3",null,"Users",-1),X=e("hr",null,null,-1),Y={class:"overflow-x-auto mt-4"},Z={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},ee={class:"min-w-full"},te=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," First Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Last Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Email Adress "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Active "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Groups "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Username "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Blocked "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),se={class:"bg-white"},oe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},le={class:"flex items-center"},ae={class:"text-sm leading-5 text-gray-800"},re={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ne={class:"text-sm leading-5 text-sky-800"},ie={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},de={class:"text-sm leading-5 text-sky-800"},ce={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ue={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},pe={class:"text-sm leading-5 text-sky-800"},be={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},me={class:"text-sm leading-5 text-sky-800"},ge={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},he={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},_e=["onClick"],fe={action:"post",class:"p-1",disabled:""},xe={class:"grid grid-cols-2 gap-x-4 mb-4"},ye={class:"block col-span-1 mb-2"},we=e("span",{class:"text-gray-700"},"First Name",-1),ke={class:"block col-span-1 mb-2"},ve=e("span",{class:"text-gray-700"},"Last Name",-1),Ue={class:"block col-span-1 mb-2"},Ne=e("span",{class:"text-gray-700"},"Email",-1),Ae={class:"block col-span-1 mb-2"},Ce=e("span",{class:"text-gray-700"},"UserName",-1),Ee=["disabled"],Ve={class:"block col-span-1 mb-2"},Be=e("span",{class:"text-gray-700"},"Password",-1),De={class:"block col-span-1 mb-2"},Le=e("span",{class:"text-gray-700"},"Confirm Password",-1),Se={class:"block col-span-2 mb-2"},Fe=e("span",{class:"text-gray-700"},"Group",-1),Ge=e("option",null,null,-1),Me=["value"],Pe={for:"toggle",class:"block col-span-1 text-xs text-gray-700 mt-4"},Te={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},Re=e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1),Oe={for:"toggle",class:"block col-span-1 text-xs text-gray-700 mt-4"},$e={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},Ie=e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1),je=e("hr",null,null,-1),qe=L({__name:"UsersListing",setup(ze){const N=$(()=>I(()=>import("./FelModal-344bef25.js"),["assets/FelModal-344bef25.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/FelModal-a7d23795.css"])),n=S(),{withClientMutation:g}=z();let d=b(!1),h=b(""),o=F({});const _=b(!0);n.fetchUsers({}),n.fetchGroupsAndPermissions(),n.fetchGroupsAndPermissions(),n.fetchUsers({});let A=x(()=>n.getUsers);const C=x(()=>n.getGroups);function E(){g(j,o,"createUser").then(a=>n.addUser(a))}function V(){g(q,o,"updateUser").then(a=>n.updateUser(a))}function B(a){let s=[];return a?.groups?.forEach(t=>s.push(t?.name)),s.join(", ")}function f(a,s={}){if(_.value=a,d.value=!0,h.value=(a?"CREATE":"EDIT")+" USER",a){let t=new Object;t.firstName=void 0,t.lastName=void 0,t.email=void 0,t.isActive=!0,t.groupUid=void 0,t.userName=void 0,t.isBlocked=!1,Object.assign(o,{...t})}else s.userUid=s?.uid,s.groupUid=s?.groups[0]?.uid,Object.assign(o,{...s})}function D(){_.value?E():V(),d.value=!1}return(a,s)=>(c(),p(m,null,[e("div",J,[K,e("div",Q,[W,e("button",{onClick:s[0]||(s[0]=t=>f(!0)),class:"px-2 py-1 ml-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add User/Lab Contact ")]),X,e("div",Y,[e("div",Z,[e("table",ee,[te,e("tbody",se,[(c(!0),p(m,null,y(l(A),t=>(c(),p("tr",{key:t.uid},[e("td",oe,[e("div",le,[e("div",ae,i(t.firstName),1)])]),e("td",re,[e("div",ne,i(t.lastName),1)]),e("td",ie,[e("div",de,i(t.email),1)]),e("td",ce,[e("span",{class:w(["",["block h-4 w-4 rounded-full bottom-0 right-0",t?.isActive?"bg-emerald-600":"bg-orange-600"]])},null,2)]),e("td",ue,[e("div",pe,i(B(t)),1)]),e("td",be,[e("div",me,i(t?.userName),1)]),e("td",ge,[e("span",{class:w(["block h-4 w-4 rounded-full bottom-0 right-0",t?.isBlocked?"bg-orange-600":"bg-emerald-600"])},null,2)]),e("td",he,[r(e("button",{onClick:He=>f(!1,t),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500 rounded-sm transition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Edit User ",8,_e),[[G,!t.isSuperuser]])])]))),128))])])])])]),l(d)?(c(),M(l(N),{key:0,onClose:s[11]||(s[11]=t=>R(d)?d.value=!1:d=!1)},{header:k(()=>[e("h3",null,i(l(h)),1)]),body:k(()=>[e("form",fe,[e("div",xe,[e("label",ye,[we,r(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[1]||(s[1]=t=>l(o).firstName=t),placeholder:"First Name ..."},null,512),[[u,l(o).firstName]])]),e("label",ke,[ve,r(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[2]||(s[2]=t=>l(o).lastName=t),placeholder:"Last Name ..."},null,512),[[u,l(o).lastName]])]),e("label",Ue,[Ne,r(e("input",{class:"form-input mt-1 block w-full",type:"email","onUpdate:modelValue":s[3]||(s[3]=t=>l(o).email=t),placeholder:"Email ..."},null,512),[[u,l(o).email]])]),e("label",Ae,[Ce,r(e("input",{class:"form-input mt-1 block w-full disabled:bg-slate-300","onUpdate:modelValue":s[4]||(s[4]=t=>l(o).userName=t),placeholder:"First Name ...",disabled:l(o).uid!=null},null,8,Ee),[[u,l(o).userName]])]),e("label",Ve,[Be,r(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[5]||(s[5]=t=>l(o).password=t),placeholder:"Password ..."},null,512),[[u,l(o).password]])]),e("label",De,[Le,r(e("input",{class:"form-input mt-1 block w-full",type:"email","onUpdate:modelValue":s[6]||(s[6]=t=>l(o).passwordc=t),placeholder:"confirm ..."},null,512),[[u,l(o).passwordc]])]),e("label",Se,[Fe,r(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":s[7]||(s[7]=t=>l(o).groupUid=t)},[Ge,(c(!0),p(m,null,y(C.value,t=>(c(),p("option",{key:t.uid,value:t.uid},i(t?.name),9,Me))),128))],512),[[P,l(o).groupUid]])]),e("label",Pe,[v("Blocked "),e("div",Te,[r(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":s[8]||(s[8]=t=>l(o).isBlocked=t),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[U,l(o).isBlocked]]),Re])]),e("label",Oe,[v("Active "),e("div",$e,[r(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":s[9]||(s[9]=t=>l(o).isActive=t),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[U,l(o).isActive]]),Ie])])]),je,e("button",{type:"button",onClick:s[10]||(s[10]=T(t=>D(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):O("",!0)],64))}}),Ke=H(qe,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/users/UsersListing.vue"]]);export{Ke as default};

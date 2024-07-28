import{d as L,aL as S,r as b,C as M,D as x,o as c,c as p,b as e,F as m,p as y,t as i,y as w,e as r,E as G,f as l,x as v,q as P,G as k,v as u,at as T,H as U,au as N,w as R,i as O,j as $,_ as I,bq as j,br as q,O as z,k as H}from"./index-a40c2365.js";const J={class:"w-full my-4"},K=e("hr",null,null,-1),Q={class:"flex justify-between items-center"},W=e("h3",null,"Users",-1),X=e("hr",null,null,-1),Y={class:"overflow-x-auto mt-4"},Z={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},ee={class:"min-w-full"},se=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," First Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Last Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Email Adress "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Active "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Groups "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Username "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Blocked "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),te={class:"bg-white"},oe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},le={class:"flex items-center"},ae={class:"text-sm leading-5 text-gray-800"},re={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ne={class:"text-sm leading-5 text-sky-800"},ie={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},de={class:"text-sm leading-5 text-sky-800"},ce={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ue={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},pe={class:"text-sm leading-5 text-sky-800"},be={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},me={class:"text-sm leading-5 text-sky-800"},ge={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},he={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},_e=["onClick"],fe={action:"post",class:"p-1",disabled:""},xe={class:"grid grid-cols-2 gap-x-4 mb-4"},ye={class:"block col-span-1 mb-2"},we=e("span",{class:"text-gray-700"},"First Name",-1),ve={class:"block col-span-1 mb-2"},ke=e("span",{class:"text-gray-700"},"Last Name",-1),Ue={class:"block col-span-1 mb-2"},Ne=e("span",{class:"text-gray-700"},"Email",-1),Ae={class:"block col-span-1 mb-2"},Ce=e("span",{class:"text-gray-700"},"UserName",-1),Ee=["disabled"],Ve={class:"block col-span-1 mb-2"},Be=e("span",{class:"text-gray-700"},"Password",-1),De={class:"block col-span-1 mb-2"},Fe=e("span",{class:"text-gray-700"},"Confirm Password",-1),Le={class:"block col-span-2 mb-2"},Se=e("span",{class:"text-gray-700"},"Group",-1),Me=e("option",null,null,-1),Ge=["value"],Pe={for:"toggle",class:"block col-span-1 text-xs text-gray-700 mt-4"},Te={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},Re=e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1),Oe={for:"toggle",class:"block col-span-1 text-xs text-gray-700 mt-4"},$e={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},Ie=e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1),je=e("hr",null,null,-1),qe=L({__name:"UsersListing",setup(ze){const A=$(()=>I(()=>import("./FelModal-b0fb9a0b.js"),["assets/FelModal-b0fb9a0b.js","assets/index-a40c2365.js","assets/index-12195ca3.css","assets/FelModal-a7d23795.css"])),n=S(),{withClientMutation:g}=z();let d=b(!1),h=b(""),o=M({});const _=b(!0);n.fetchUsers({}),n.fetchGroupsAndPermissions(),n.fetchGroupsAndPermissions(),n.fetchUsers({});let C=x(()=>n.getUsers);const E=x(()=>n.getGroups);function V(){g(j,o,"createUser").then(a=>n.addUser(a))}function B(){g(q,o,"updateUser").then(a=>n.updateUser(a))}function D(a){let t=[];return a?.groups?.forEach(s=>t.push(s?.name)),t.join(", ")}function f(a,t={}){if(_.value=a,d.value=!0,h.value=(a?"CREATE":"EDIT")+" USER",a){let s=new Object;s.firstName=void 0,s.lastName=void 0,s.email=void 0,s.isActive=!0,s.groupUid=void 0,s.userName=void 0,s.isBlocked=!1,Object.assign(o,{...s})}else t.userUid=t?.uid,t.groupUid=t?.groups[0]?.uid,Object.assign(o,{...t})}function F(){_.value?V():B(),d.value=!1}return(a,t)=>(c(),p(m,null,[e("div",J,[K,e("div",Q,[W,e("button",{onClick:t[0]||(t[0]=s=>f(!0)),class:"px-2 py-1 ml-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add User/Lab Contact ")]),X,e("div",Y,[e("div",Z,[e("table",ee,[se,e("tbody",te,[(c(!0),p(m,null,y(l(C),s=>(c(),p("tr",{key:s.uid},[e("td",oe,[e("div",le,[e("div",ae,i(s.firstName),1)])]),e("td",re,[e("div",ne,i(s.lastName),1)]),e("td",ie,[e("div",de,i(s.email),1)]),e("td",ce,[e("span",{class:w(["",["block h-4 w-4 rounded-full bottom-0 right-0",s?.isActive?"bg-emerald-600":"bg-orange-600"]])},null,2)]),e("td",ue,[e("div",pe,i(D(s)),1)]),e("td",be,[e("div",me,i(s?.userName),1)]),e("td",ge,[e("span",{class:w(["block h-4 w-4 rounded-full bottom-0 right-0",s?.isBlocked?"bg-orange-600":"bg-emerald-600"])},null,2)]),e("td",he,[r(e("button",{onClick:He=>f(!1,s),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500 rounded-sm transition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Edit User ",8,_e),[[G,!s.isSuperuser]])])]))),128))])])])])]),v(" UserForm Modal "),l(d)?(c(),P(l(A),{key:0,onClose:t[11]||(t[11]=s=>O(d)?d.value=!1:d=!1)},{header:k(()=>[e("h3",null,i(l(h)),1)]),body:k(()=>[e("form",fe,[e("div",xe,[e("label",ye,[we,r(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=s=>l(o).firstName=s),placeholder:"First Name ..."},null,512),[[u,l(o).firstName]])]),e("label",ve,[ke,r(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=s=>l(o).lastName=s),placeholder:"Last Name ..."},null,512),[[u,l(o).lastName]])]),e("label",Ue,[Ne,r(e("input",{class:"form-input mt-1 block w-full",type:"email","onUpdate:modelValue":t[3]||(t[3]=s=>l(o).email=s),placeholder:"Email ..."},null,512),[[u,l(o).email]])]),e("label",Ae,[Ce,r(e("input",{class:"form-input mt-1 block w-full disabled:bg-slate-300","onUpdate:modelValue":t[4]||(t[4]=s=>l(o).userName=s),placeholder:"First Name ...",disabled:l(o).uid!=null},null,8,Ee),[[u,l(o).userName]])]),e("label",Ve,[Be,r(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[5]||(t[5]=s=>l(o).password=s),placeholder:"Password ..."},null,512),[[u,l(o).password]])]),e("label",De,[Fe,r(e("input",{class:"form-input mt-1 block w-full",type:"email","onUpdate:modelValue":t[6]||(t[6]=s=>l(o).passwordc=s),placeholder:"confirm ..."},null,512),[[u,l(o).passwordc]])]),e("label",Le,[Se,r(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t[7]||(t[7]=s=>l(o).groupUid=s)},[Me,(c(!0),p(m,null,y(E.value,s=>(c(),p("option",{key:s.uid,value:s.uid},i(s?.name),9,Ge))),128))],512),[[T,l(o).groupUid]])]),e("label",Pe,[U("Blocked "),e("div",Te,[r(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":t[8]||(t[8]=s=>l(o).isBlocked=s),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[N,l(o).isBlocked]]),Re])]),e("label",Oe,[U("Active "),e("div",$e,[r(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":t[9]||(t[9]=s=>l(o).isActive=s),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[N,l(o).isActive]]),Ie])])]),je,e("button",{type:"button",onClick:t[10]||(t[10]=R(s=>F(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):v("v-if",!0)],64))}}),Ke=H(qe,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/users/UsersListing.vue"]]);export{Ke as default};

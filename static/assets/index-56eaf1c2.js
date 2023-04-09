import{d as A,a9 as I,am as j,r as v,U as D,A as N,x as M,o as c,g as _,h as e,F as $,z as L,H as F,j as t,k as T,t as k,y as g,i,v as b,R as z,C as R,w as C,ai as w,ax as H,ay as W,ak as B,_ as V,D as S,E as O,I as Y,az as G,aA as q}from"./index-b7f12717.js";const J={class:"container w-full my-4"},K={class:"bg-gray-200 px-6 pt-2 shadow-md mt-2"},Q={class:"-mb-px flex justify-start"},X=["onClick"],Z={key:0,class:"pt-4"},ee={action:"post"},te={class:"grid grid-cols-2 gap-x-4 mb-4"},se={class:"block col-span-1 mb-2"},oe=e("span",{class:"text-gray-700"},"Laboratory Name",-1),le=["disabled"],ae={class:"block col-span-1 mb-2"},ne=e("span",{class:"text-gray-700"},"Lab Manager",-1),ie={class:"w-full"},de=["disabled"],re=e("option",null,null,-1),ce=["value"],ue={class:"block col-span-1 mb-2"},pe=e("span",{class:"text-gray-700"},"Laboratory Email",-1),be=["disabled"],me={class:"block col-span-1 mb-2"},_e=e("span",{class:"text-gray-700"},"CC Emails",-1),he=["disabled"],ye={class:"block col-span-1 mb-2"},fe=e("span",{class:"text-gray-700"},"Lab Mobile Phone",-1),ge=["disabled"],ve={class:"block col-span-1 mb-2"},ke=e("span",{class:"text-gray-700"},"Lab Bunsiness Phone",-1),xe=["disabled"],we={class:"block col-span-1 mb-2"},De=e("span",{class:"text-gray-700"},"Address",-1),$e=["disabled"],Le=e("hr",null,null,-1),Ue={key:1,class:"pt-4"},Ne={action:"post"},Ce={class:"grid grid-cols-2 gap-x-4 mb-4"},Se={class:"block col-span-1 mb-2"},Ae=e("span",{class:"text-gray-700"},"Default Landing Page",-1),Te=["disabled"],Ve={class:"block col-span-1 mb-2"},Pe=e("span",{class:"text-gray-700"},"Default Theme",-1),Ee=["disabled"],Me={class:"block col-span-1 mb-2"},Re=e("span",{class:"text-gray-700"},"Password Lifetime (days)",-1),Oe=["disabled"],je={class:"block col-span-1 mb-2"},Fe=e("span",{class:"text-gray-700"},"Inactivity Auto Logout (minutes)",-1),Be=["disabled"],Ie={class:"block col-span-1 mb-2"},ze=e("span",{class:"text-gray-700 ml-3"},"Default Sticker copies",-1),He=["disabled"],We=e("span",{class:"block col-span-1 mb-2"},null,-1),Ye={class:"block col-span-1 mb-2"},Ge=["disabled"],qe=e("span",{class:"text-gray-700 ml-3"},"Allow self verificaion",-1),Je={class:"block col-span-1 mb-2"},Ke=["disabled"],Qe=e("span",{class:"text-gray-700 ml-3"},"Allow patient registration",-1),Xe={class:"block col-span-1 mb-2"},Ze=["disabled"],et=e("span",{class:"text-gray-700 ml-3"},"Allow sample registration",-1),tt={class:"block col-span-1 mb-2"},st=["disabled"],ot=e("span",{class:"text-gray-700 ml-3"},"Allow worksheet creation",-1),lt={class:"block col-span-1 mb-2"},at=["disabled"],nt=e("span",{class:"text-gray-700 ml-3"},"Auto receive samples",-1),it=e("hr",null,null,-1),dt=A({__name:"Laboratory",setup(P){const d=I(),m=j(),{withClientMutation:h}=B();let y=v("general-info");const r=["general-info","other-settings"];let a=v(!1);m.fetchLaboratory();const x=D(()=>m.getLaboratory),n=N({...x.value});M(()=>x.value?.uid,(p,o)=>Object.assign(n,x.value));const U=()=>{const p={...n};delete p.uid,delete p.__typename,p.labManagerUid=+p.labManagerUid,h(H,{uid:n.uid,payload:p},"updateLaboratory").then(o=>m.updateLaboratory(o))};m.fetchLaboratorySetting();const u=D(()=>m.getLaboratorySetting),l=N({...u.value});M(()=>u.value?.uid,(p,o)=>Object.assign(l,u.value));const f=()=>{const p={...l};delete p.uid,delete p.__typename,h(W,{uid:l.uid,payload:p},"updateLaboratorySetting").then(o=>m.updateLaboratorySetting(o))};d.fetchUsers({});const E=D(()=>d.getUsers);return(p,o)=>(c(),_("div",J,[e("nav",K,[e("div",Q,[(c(),_($,null,L(r,s=>e("a",{key:s,class:F(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":t(y)===s}]),onClick:Mt=>T(y)?y.value=s:y=s,href:"#"},k(s),11,X)),64))])]),g(` 
        <tab-laboratory v-if="currentTab === 'laboratory'"/>
        <tab-departments v-if="currentTab === 'departments'" /> `),t(y)==="general-info"?(c(),_("section",Z,[e("form",ee,[e("div",te,[e("label",se,[oe,i(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[0]||(o[0]=s=>t(n).labName=s),placeholder:"Name ...",disabled:t(a)},null,8,le),[[b,t(n).labName]])]),e("label",ae,[ne,e("div",ie,[i(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":o[1]||(o[1]=s=>t(n).labManagerUid=s),disabled:t(a)},[re,(c(!0),_($,null,L(t(E),s=>(c(),_("option",{key:s?.uid,value:s.uid},k(s?.firstName)+" "+k(s?.lastName),9,ce))),128))],8,de),[[z,t(n).labManagerUid]])])]),e("label",ue,[pe,i(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[2]||(o[2]=s=>t(n).email=s),placeholder:"Name ...",disabled:t(a)},null,8,be),[[b,t(n).email]])]),e("label",me,[_e,i(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[3]||(o[3]=s=>t(n).emailCc=s),placeholder:"Name ...",disabled:t(a)},null,8,he),[[b,t(n).emailCc]])]),e("label",ye,[fe,i(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[4]||(o[4]=s=>t(n).mobilePhone=s),placeholder:"Name ...",disabled:t(a)},null,8,ge),[[b,t(n).mobilePhone]])]),e("label",ve,[ke,i(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[5]||(o[5]=s=>t(n).businessPhone=s),placeholder:"Name ...",disabled:t(a)},null,8,xe),[[b,t(n).businessPhone]])]),e("label",we,[De,i(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":o[6]||(o[6]=s=>t(n).address=s),placeholder:"Description ...",disabled:t(a)},null,8,$e),[[b,t(n).address]])]),g(` <label class="block col-span-1 mb-2">
                <span class="text-gray-700">Laboratory Logo</span>
                <input
                  class="form-input mt-1 block w-full"
                  v-model="formLaboratory.logo"
                  placeholder="Name ..."
                  :disabled="editDisabled"
                />
              </label> `)]),Le,i(e("button",{type:"button",onClick:o[7]||(o[7]=C(s=>U(),["prevent"])),class:"w-2/5 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Update ",512),[[R,!t(a)]])])])):g("v-if",!0),t(y)==="other-settings"?(c(),_("section",Ue,[e("form",Ne,[e("div",Ce,[e("label",Se,[Ae,i(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[8]||(o[8]=s=>t(l).defaultRoute=s),placeholder:"Name ...",disabled:t(a)},null,8,Te),[[b,t(l).defaultRoute]])]),e("label",Ve,[Pe,i(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[9]||(o[9]=s=>t(l).defaultTheme=s),placeholder:"Name ...",disabled:t(a)},null,8,Ee),[[b,t(l).defaultTheme]])]),e("label",Me,[Re,i(e("input",{type:"number",min:"0",class:"form-input mt-1 block w-full","onUpdate:modelValue":o[10]||(o[10]=s=>t(l).passwordLifetime=s),placeholder:"Name ...",disabled:t(a)},null,8,Oe),[[b,t(l).passwordLifetime]])]),e("label",je,[Fe,i(e("input",{type:"number",min:"0",class:"form-input mt-1 block w-full","onUpdate:modelValue":o[11]||(o[11]=s=>t(l).inactivityLogOut=s),placeholder:"Name ...",disabled:t(a)},null,8,Be),[[b,t(l).inactivityLogOut]])]),e("label",Ie,[ze,i(e("input",{type:"number",min:"0",class:"form-input mt-1 block w-full","onUpdate:modelValue":o[12]||(o[12]=s=>t(l).stickerCopies=s),placeholder:"Name ...",disabled:t(a)},null,8,He),[[b,t(l).stickerCopies]])]),We,e("label",Ye,[i(e("input",{type:"checkbox",class:"","onUpdate:modelValue":o[13]||(o[13]=s=>t(l).allowSelfVerification=s),placeholder:"Name ...",disabled:t(a)},null,8,Ge),[[w,t(l).allowSelfVerification]]),qe]),e("label",Je,[i(e("input",{type:"checkbox",class:"","onUpdate:modelValue":o[14]||(o[14]=s=>t(l).allowPatientRegistration=s),placeholder:"Name ...",disabled:t(a)},null,8,Ke),[[w,t(l).allowPatientRegistration]]),Qe]),e("label",Xe,[i(e("input",{type:"checkbox",class:"","onUpdate:modelValue":o[15]||(o[15]=s=>t(l).allowSampleRegistration=s),placeholder:"Name ...",disabled:t(a)},null,8,Ze),[[w,t(l).allowSampleRegistration]]),et]),e("label",tt,[i(e("input",{type:"checkbox",class:"","onUpdate:modelValue":o[16]||(o[16]=s=>t(l).allowWorksheetCreation=s),placeholder:"Name ...",disabled:t(a)},null,8,st),[[w,t(l).allowWorksheetCreation]]),ot]),e("label",lt,[i(e("input",{type:"checkbox",class:"","onUpdate:modelValue":o[17]||(o[17]=s=>t(l).autoReceiveSamples=s),placeholder:"Name ...",disabled:t(a)},null,8,at),[[w,t(l).autoReceiveSamples]]),nt])]),it,i(e("button",{type:"button",onClick:o[18]||(o[18]=C(s=>f(),["prevent"])),class:"mb-4 w-2/5 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Update ",512),[[R,!t(a)]])])])):g("v-if",!0)]))}}),rt=V(dt,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/laboratory/Laboratory.vue"]]),ct={class:"container w-full my-4"},ut=e("hr",null,null,-1),pt=e("hr",null,null,-1),bt={class:"overflow-x-auto mt-4"},mt={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},_t={class:"min-w-full"},ht=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"HOD"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),yt={class:"bg-white"},ft={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},gt={class:"flex items-center"},vt={class:"text-sm leading-5 text-gray-800"},kt=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"text-sm leading-5 text-sky-800"},"Aurthur")],-1),xt={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},wt=["onClick"],Dt={action:"post",class:"p-1"},$t={class:"grid grid-cols-2 gap-x-4 mb-4"},Lt={class:"block col-span-2 mb-2"},Ut=e("span",{class:"text-gray-700"},"Department Name",-1),Nt=e("hr",null,null,-1),Ct=A({__name:"Departments",setup(P){const d=j(),{withClientMutation:m}=B();let h=v(!1),y=v(""),r=N({});const a=v(!0);d.fetchDepartments({});const x=D(()=>d.getDepartments);function n(u,l){a.value=u,h.value=!0,y.value=(u?"CREATE":"EDIT")+" Department",u?Object.assign(r,{...new Object}):Object.assign(r,{...l})}function U(){a.value===!0?m(G,{payload:{name:r.name}},"createDepartment").then(u=>d.addDepartment(u)):m(q,{uid:r.uid,payload:{name:r.name}},"updateDepartment").then(u=>d.updateDepartment(u)),h.value=!1}return(u,l)=>(c(),_($,null,[e("div",ct,[ut,e("button",{onClick:l[0]||(l[0]=f=>n(!0,null)),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add Department"),pt,e("div",bt,[e("div",mt,[e("table",_t,[ht,e("tbody",yt,[(c(!0),_($,null,L(t(x),f=>(c(),_("tr",{key:f?.uid},[e("td",ft,[e("div",gt,[e("div",null,[e("div",vt,k(f?.name),1)])])]),kt,e("td",xt,[e("button",{onClick:E=>n(!1,f),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,wt)])]))),128))])])])])]),g(" Location Edit Form Modal "),t(h)?(c(),S(Y,{key:0,onClose:l[3]||(l[3]=f=>T(h)?h.value=!1:h=!1)},{header:O(()=>[e("h3",null,k(t(y)),1)]),body:O(()=>[e("form",Dt,[e("div",$t,[e("label",Lt,[Ut,i(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":l[1]||(l[1]=f=>t(r).name=f),placeholder:"Name ..."},null,512),[[b,t(r).name]])])]),Nt,e("button",{type:"button",onClick:l[2]||(l[2]=C(f=>U(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):g("v-if",!0)],64))}}),St=V(Ct,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/laboratory/Departments.vue"]]),At={class:"mt-4"},Tt={class:"bg-white shadow-md mt-2"},Vt={class:"-mb-px flex justify-start"},Pt=["onClick"],Et=A({__name:"index",setup(P){let d=v("laboratory");const m=["laboratory","departments"];return D(()=>"tab-"+d.value),(h,y)=>(c(),_("div",At,[e("nav",Tt,[e("div",Vt,[(c(),_($,null,L(m,r=>e("a",{key:r,class:F(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":t(d)===r}]),onClick:a=>T(d)?d.value=r:d=r,href:"#"},k(r),11,Pt)),64))])]),t(d)==="laboratory"?(c(),S(rt,{key:0})):g("v-if",!0),t(d)==="departments"?(c(),S(St,{key:1})):g("v-if",!0)]))}}),Ot=V(Et,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/laboratory/index.vue"]]);export{Ot as default};

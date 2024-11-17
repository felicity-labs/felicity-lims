import{d as B,aK as D,K as M,x as h,q as w,V as x,r as v,o as b,A as O,B as R,c as m,b as s,e as n,f as a,v as d,F as E,E as I,t as U,as as F,w as L,P as V,D as S,at as r,j,_ as q,bH as K,bI as Q,ap as W,M as Y,k as $}from"./index-e62f5c21.js";const G={key:0},H=s("h2",{class:"text-lg font-semibold text-gray-700"},"Laboratory Information",-1),z=s("hr",{class:"my-4"},null,-1),J={class:"grid grid-cols-2 gap-x-4"},X={class:"block col-span-1 mb-2"},Z=s("span",{class:"text-gray-700"},"Laboratory Name",-1),ss=["disabled"],es={class:"block col-span-1 mb-2"},ts=s("span",{class:"text-gray-700"},"Tag Line",-1),ls=["disabled"],os={class:"block col-span-1 mb-2"},as=s("span",{class:"text-gray-700"},"Lab Manager",-1),ns={class:"w-full"},is=["disabled"],ds=s("option",null,null,-1),cs=["value"],rs={class:"block col-span-1 mb-2"},us=s("span",{class:"text-gray-700"},"Laboratory Email",-1),bs=["disabled"],ps={class:"block col-span-1 mb-2"},ms=s("span",{class:"text-gray-700"},"CC Emails",-1),_s=["disabled"],ys={class:"block col-span-1 mb-2"},hs=s("span",{class:"text-gray-700"},"Lab Mobile Phone",-1),gs=["disabled"],fs={class:"block col-span-1 mb-2"},ks=s("span",{class:"text-gray-700"},"Lab Bunsiness Phone",-1),ws=["disabled"],xs={class:"block col-span-1 mb-2"},vs=s("span",{class:"text-gray-700"},"Address",-1),Us=["disabled"],Ls={class:"block col-span-1 mb-2"},Vs=s("span",{class:"text-gray-700"},"Banking Details",-1),Ss=["disabled"],As={class:"block col-span-1 mb-2"},Ts=s("span",{class:"text-gray-700"},"Quality Statemnt",-1),Ns=["disabled"],Cs=s("hr",{class:"my-4"},null,-1),Ps={key:1},Bs=s("h2",{class:"text-lg font-semibold text-gray-700"},"Other Settings",-1),Ds=s("hr",{class:"my-4"},null,-1),Ms={class:"grid grid-cols-2 gap-x-4"},Os={class:"block col-span-1 mb-2"},Rs=s("span",{class:"text-gray-700"},"Default Landing Page",-1),Es=["disabled"],Is={class:"block col-span-1 mb-2"},Fs=s("span",{class:"text-gray-700"},"Default Theme",-1),js=["disabled"],qs={class:"block col-span-1 mb-2"},Ks=s("span",{class:"text-gray-700"},"Password Lifetime (days)",-1),Qs=["disabled"],Ws={class:"block col-span-1 mb-2"},Ys=s("span",{class:"text-gray-700"},"Inactivity Auto Logout (minutes)",-1),$s=["disabled"],Gs={class:"block col-span-1 mb-2"},Hs=s("span",{class:"text-gray-700 ml-3"},"Default Sticker copies",-1),zs=["disabled"],Js=s("span",{class:"block col-span-1 mb-2"},null,-1),Xs={class:"block col-span-1 mb-2"},Zs=["disabled"],se=s("span",{class:"text-gray-700 ml-3"},"Allow self verificaion",-1),ee={class:"block col-span-1 mb-2"},te=["disabled"],le=s("span",{class:"text-gray-700 ml-3"},"Allow patient registration",-1),oe={class:"block col-span-1 mb-2"},ae=["disabled"],ne=s("span",{class:"text-gray-700 ml-3"},"Allow sample registration",-1),ie={class:"block col-span-1 mb-2"},de=["disabled"],ce=s("span",{class:"text-gray-700 ml-3"},"Allow worksheet creation",-1),re={class:"block col-span-1 mb-2"},ue=["disabled"],be=s("span",{class:"text-gray-700 ml-3"},"Auto receive samples",-1),pe=s("span",{class:"block col-span-1 mb-2"},null,-1),me=s("hr",{class:"my-4"},null,-1),_e={class:"grid grid-cols-2 gap-x-4"},ye={class:"block col-span-1 mb-2"},he=["disabled"],ge=s("span",{class:"text-gray-700 ml-3"},"Enable Sample Billing",-1),fe={class:"block col-span-1 mb-2"},ke=["disabled"],we=s("span",{class:"text-gray-700 ml-3"},"Allow automatic billing on sample registration",-1),xe={class:"block col-span-1 mb-2"},ve=s("span",{class:"text-gray-700 ml-3"},"Currency",-1),Ue=["disabled"],Le={class:"block col-span-1 mb-2"},Ve=s("span",{class:"text-gray-700 ml-3"},"Payment Terms (Days)",-1),Se=["disabled"],Ae=s("hr",{class:"my-4"},null,-1),Te=B({__name:"Laboratory",setup(Ne){const A=j(()=>q(()=>import("./FelTabsAside-fb3d1b86.js"),["assets/FelTabsAside-fb3d1b86.js","assets/index-e62f5c21.js","assets/index-332ec99e.css"])),{toastSuccess:g}=W(),f=D(),u=M();u.fetchLaboratory();const _=h(()=>u.getLaboratory),i=w({..._.value});x(()=>_.value?.uid,(c,e)=>Object.assign(i,_.value));const{withClientMutation:k}=Y();let o=v(!1);const T=()=>{o.value=!0;const c={...i};delete c.uid,delete c.__typename,c.labManagerUid=c.labManagerUid,k(K,{uid:i.uid,payload:c},"updateLaboratory").then(e=>{u.updateLaboratory(e),o.value=!1,g("Laboratory information updated")})};u.fetchLaboratorySetting();const y=h(()=>u.getLaboratorySetting),l=w({...y.value});x(()=>y.value?.uid,(c,e)=>Object.assign(l,y.value));const N=()=>{o.value=!0;const c={...l};delete c.uid,delete c.__typename,k(Q,{uid:l.uid,payload:c},"updateLaboratorySetting").then(e=>{u.updateLaboratorySetting(e),o.value=!1,g("Laboratory settings updated")})};f.fetchUsers({});const C=h(()=>f.getUsers),p=v("general-info"),P=[{id:"general-info",label:"Information",icon:"fas fa-chart-bar"},{id:"other-settings",label:"Other",icon:"fas fa-user-clock"}];return(c,e)=>(b(),O(a(A),{title:"Settings",items:P,modelValue:p.value,"onUpdate:modelValue":e[26]||(e[26]=t=>p.value=t)},{default:R(()=>[p.value==="general-info"?(b(),m("section",G,[H,z,s("form",null,[s("div",J,[s("label",X,[Z,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[0]||(e[0]=t=>i.labName=t),placeholder:"Name ...",disabled:a(o)},null,8,ss),[[d,i.labName]])]),s("label",es,[ts,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[1]||(e[1]=t=>i.tagLine=t),placeholder:"Tag Line ...",disabled:a(o)},null,8,ls),[[d,i.tagLine]])]),s("label",os,[as,s("div",ns,[n(s("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":e[2]||(e[2]=t=>i.labManagerUid=t),disabled:a(o)},[ds,(b(!0),m(E,null,I(C.value,t=>(b(),m("option",{key:t?.uid,value:t.uid},U(t?.firstName)+" "+U(t?.lastName),9,cs))),128))],8,is),[[F,i.labManagerUid]])])]),s("label",rs,[us,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[3]||(e[3]=t=>i.email=t),placeholder:"Name ...",disabled:a(o)},null,8,bs),[[d,i.email]])]),s("label",ps,[ms,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[4]||(e[4]=t=>i.emailCc=t),placeholder:"Name ...",disabled:a(o)},null,8,_s),[[d,i.emailCc]])]),s("label",ys,[hs,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[5]||(e[5]=t=>i.mobilePhone=t),placeholder:"Name ...",disabled:a(o)},null,8,gs),[[d,i.mobilePhone]])]),s("label",fs,[ks,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[6]||(e[6]=t=>i.businessPhone=t),placeholder:"Name ...",disabled:a(o)},null,8,ws),[[d,i.businessPhone]])]),s("label",xs,[vs,n(s("textarea",{cols:"3",class:"form-input mt-1 block w-full","onUpdate:modelValue":e[7]||(e[7]=t=>i.address=t),placeholder:"Address ...",disabled:a(o)},null,8,Us),[[d,i.address]])]),s("label",Ls,[Vs,n(s("textarea",{cols:"3",class:"form-input mt-1 block w-full","onUpdate:modelValue":e[8]||(e[8]=t=>i.banking=t),placeholder:"Banking ...",disabled:a(o)},null,8,Ss),[[d,i.banking]])]),s("label",As,[Ts,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[9]||(e[9]=t=>i.qualityStatement=t),placeholder:"Quality Statemnt ...",disabled:a(o)},null,8,Ns),[[d,i.qualityStatement]])])]),Cs,n(s("button",{type:"button",onClick:e[10]||(e[10]=L(t=>T(),["prevent"])),class:"w-2/5 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Update ",512),[[V,!a(o)]])])])):S("",!0),p.value==="other-settings"?(b(),m("section",Ps,[Bs,Ds,s("form",null,[s("div",Ms,[s("label",Os,[Rs,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[11]||(e[11]=t=>l.defaultRoute=t),placeholder:"Name ...",disabled:a(o)},null,8,Es),[[d,l.defaultRoute]])]),s("label",Is,[Fs,n(s("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[12]||(e[12]=t=>l.defaultTheme=t),placeholder:"Name ...",disabled:a(o)},null,8,js),[[d,l.defaultTheme]])]),s("label",qs,[Ks,n(s("input",{type:"number",min:"0",class:"form-input mt-1 block w-full","onUpdate:modelValue":e[13]||(e[13]=t=>l.passwordLifetime=t),placeholder:"Name ...",disabled:a(o)},null,8,Qs),[[d,l.passwordLifetime]])]),s("label",Ws,[Ys,n(s("input",{type:"number",min:"0",class:"form-input mt-1 block w-full","onUpdate:modelValue":e[14]||(e[14]=t=>l.inactivityLogOut=t),placeholder:"Name ...",disabled:a(o)},null,8,$s),[[d,l.inactivityLogOut]])]),s("label",Gs,[Hs,n(s("input",{type:"number",min:"0",class:"form-input mt-1 block w-full","onUpdate:modelValue":e[15]||(e[15]=t=>l.stickerCopies=t),placeholder:"Name ...",disabled:a(o)},null,8,zs),[[d,l.stickerCopies]])]),Js,s("label",Xs,[n(s("input",{type:"checkbox",class:"","onUpdate:modelValue":e[16]||(e[16]=t=>l.allowSelfVerification=t),disabled:a(o)},null,8,Zs),[[r,l.allowSelfVerification]]),se]),s("label",ee,[n(s("input",{type:"checkbox",class:"","onUpdate:modelValue":e[17]||(e[17]=t=>l.allowPatientRegistration=t),disabled:a(o)},null,8,te),[[r,l.allowPatientRegistration]]),le]),s("label",oe,[n(s("input",{type:"checkbox",class:"","onUpdate:modelValue":e[18]||(e[18]=t=>l.allowSampleRegistration=t),disabled:a(o)},null,8,ae),[[r,l.allowSampleRegistration]]),ne]),s("label",ie,[n(s("input",{type:"checkbox",class:"","onUpdate:modelValue":e[19]||(e[19]=t=>l.allowWorksheetCreation=t),disabled:a(o)},null,8,de),[[r,l.allowWorksheetCreation]]),ce]),s("label",re,[n(s("input",{type:"checkbox",class:"","onUpdate:modelValue":e[20]||(e[20]=t=>l.autoReceiveSamples=t),disabled:a(o)},null,8,ue),[[r,l.autoReceiveSamples]]),be]),pe]),me,s("div",_e,[s("label",ye,[n(s("input",{type:"checkbox",class:"","onUpdate:modelValue":e[21]||(e[21]=t=>l.allowBilling=t),disabled:a(o)},null,8,he),[[r,l.allowBilling]]),ge]),s("label",fe,[n(s("input",{type:"checkbox",class:"","onUpdate:modelValue":e[22]||(e[22]=t=>l.allowAutoBilling=t),disabled:a(o)},null,8,ke),[[r,l.allowAutoBilling]]),we]),s("label",xe,[ve,n(s("input",{type:"text",class:"form-input mt-1 block w-full","onUpdate:modelValue":e[23]||(e[23]=t=>l.currency=t),disabled:a(o)},null,8,Ue),[[d,l.currency]])]),s("label",Le,[Ve,n(s("input",{type:"number",min:"0",class:"form-input mt-1 block w-full","onUpdate:modelValue":e[24]||(e[24]=t=>l.paymentTermsDays=t),disabled:a(o)},null,8,Se),[[d,l.paymentTermsDays]])])]),Ae,n(s("button",{type:"button",onClick:e[25]||(e[25]=L(t=>N(),["prevent"])),class:"mb-4 w-2/5 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Update ",512),[[V,!a(o)]])])])):S("",!0)]),_:1},8,["modelValue"]))}}),Pe=$(Te,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/laboratory/Laboratory.vue"]]);export{Pe as default};

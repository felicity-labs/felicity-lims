import{d as se,R as oe,I as le,s as ne,n as Q,r as C,p as v,q as ae,m as re,o as l,c as n,b as e,e as h,L as V,w as x,i as A,f as r,F as m,C as _,t as f,g as E,z as q,A as ie,B as w,ad as g,y as de,h as T,j as R,_ as D,k as ce}from"./index-48799f0c.js";import{u as ue}from"./setup-0815b6ec.js";import{u as pe}from"./analysis-8819abc7.js";import{h as he,o as me,a as fe}from"./constants-9cf3ef05.js";import{e as ve}from"./analyses.mutations-fb432970.js";import"./_queries-16a4477d.js";const _e={class:"flex items-center justify-between"},be=e("h1",{class:"h1 font-bold text-dark-700"},"QC Analyses Requests",-1),ye=T('<hr><section class="my-4 flex sm:flex-row flex-col"><div class="flex flex-row mb-1 sm:mb-0"><div class="relative"><select class="appearance-none h-full rounded-l-sm border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><option value="">All</option><option value="received">Received</option><option value="awaiting">Awaiting</option><option value="approved">Approved</option><option value="cancelled">Cancelled</option></select><div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div></div></div><div class="block relative"><span class="h-full absolute inset-y-0 left-0 flex items-center pl-2"><svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500"><path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path></svg></span><input placeholder="Search ..." class="appearance-none rounded-r-sm rounded-l-sm sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"></div><button class="px-2 py-1 ml-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"> Filter ...</button></section>',2),ge={class:"overflow-x-auto mt-4"},xe={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},we={class:"min-w-full"},ke=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},"Date Created"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"QCSet (samples)"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Test(s)"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),Ce={class:"bg-white"},Se=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},null,-1),Qe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ae={class:"flex items-center"},qe={class:"text-sm leading-5 text-gray-800"},Le={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Pe={class:"text-sm leading-5 text-sky-800"},Ue={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ve={class:"text-sm leading-5 text-sky-800"},Ee={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},Re={key:0,class:"py-4 text-center"},De={class:"flex justify-between"},Te=e("div",null,null,-1),Me={class:"my-4 flex sm:flex-row flex-col"},Be={class:"flex flex-row mb-1 sm:mb-0"},je={class:"relative"},Ie=["disabled"],Ne=T('<option value="25">25</option><option value="50">50</option><option value="100">100</option><option value="250">250</option><option value="500">500</option><option value="1000">1000</option><option value="5000">5000</option><option value="10000">10000</option>',8),Fe=[Ne],$e=e("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[e("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),ze={class:"block relative"},Oe=["placeholder"],Ze=e("h3",null,"Create QC Analyses Requests",-1),Ge={action:"post",class:"mb-8 bg-white"},He={class:"grid grid-cols-3 gap-x-4 mb-4"},Je={class:"block col-span-1"},Ke=e("span",{class:"text-gray-700"},"Department",-1),We=e("option",{value:""},null,-1),Xe=["value"],Ye={id:"samples"},et=e("hr",null,null,-1),tt={class:"flex justify-between items-center py-2"},st=e("h5",null,"Process Control Samples",-1),ot=e("i",{class:"fa fa-ellipsis-h","aria-hidden":"true"},null,-1),lt=[ot],nt=e("hr",{class:"mb-4"},null,-1),at={class:"flex items-center justify-between"},rt={class:""},it={class:"grid grid-cols-4 gap-x-4"},dt={class:"block col-span-1 mb-2"},ct=e("span",{class:"text-gray-700"},"QC Template",-1),ut=["onUpdate:modelValue"],pt=e("option",{value:""},null,-1),ht=["value"],mt={key:0,class:"block col-span-1 mb-2"},ft=e("span",{class:"text-gray-700"},"QC Levels",-1),vt=["onUpdate:modelValue"],_t=e("option",{value:""},null,-1),bt=["value"],yt={class:"block col-span-1 mb-2"},gt=e("span",{class:"text-gray-700"},"Analysis Profiles",-1),xt=["onUpdate:modelValue"],wt=e("option",{value:""},null,-1),kt=["value"],Ct={key:1,class:"block col-span-1 mb-2"},St=e("span",{class:"text-gray-700"},"Analysis Services",-1),Qt=["onUpdate:modelValue"],At=e("option",{value:""},null,-1),qt=["value"],Lt={class:""},Pt=["onClick"],Ut=e("hr",null,null,-1),Vt=e("hr",null,null,-1),Et=se({__name:"QualityControlListing",setup(Rt){const M=R(()=>D(()=>import("./FelLoadingMessage-9cf89d4d.js"),["assets/FelLoadingMessage-9cf89d4d.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),B=R(()=>D(()=>import("./FelModal-12de65c9.js"),["assets/FelModal-12de65c9.js","assets/index-48799f0c.js","assets/index-c2286288.css","assets/FelModal-780aeea9.css"])),c=oe(),u=pe(),L=ue(),{withClientMutation:j}=le(),{qcSets:I,fetchingQCSets:N}=ne(c);let F=Q({first:void 0,after:"",text:"",sortBy:["name"]});u.fetchAnalysesServices(F),u.fetchQCLevels(),u.fetchQCTemplates(),u.fetchAnalysesProfiles(),L.fetchDepartments({}),c.resetQCSets();let b=C(25),y=Q({first:b.value,after:"",text:"",sortBy:["-uid"],filterAction:!1});c.fetchQCSets(y);const $=v(()=>u.getAnalysesProfiles),z=v(()=>{const i=u.getAnalysesServicesSimple;let s=new Set;return i.forEach(a=>{a.profiles?.length===0&&s.add(a)}),[...s]});let d=C(!1),O=C(!0),p=Q({departmentUid:void 0,samples:[]});ae(()=>P());function P(){p.samples?.push({qcTemplateUid:void 0,qcLevels:[],analysisProfiles:[],analysisServices:[]})}function Z(){console.log(p),j(ve,{samples:p.samples},"createQcSet").then(i=>c.addQCSets(i?.qcSets))}function G(i){p.samples?.splice(i,1)}function H(){O.value===!0&&Z(),d.value=!1}const S=v(()=>c.getQCSetPageInfo);function J(){y.first=+b.value,y.after=S?.value?.pageInfo?.endCursor??"",y.text="",y.filterAction=!1,c.fetchQCSets(y)}function K(i){let s=[];return i?.forEach(a=>{a?.sampleId+""+a.status;let t=a?.qcLevel?.level?.match(/\b([A-Z])/g).join("")+" ("+a.status+")";s.includes(t)||s.push(t)}),s.join(", ")}function W(i){let s=[];return i?.forEach(a=>{a.profiles.forEach(t=>{s.includes(t.name)||s.push(t.name)})}),i?.forEach(a=>{a.analyses.forEach(t=>{s.includes(t.name)||s.push(t.name)})}),s.join(", ")}const k=C(!1),X=v(()=>L.getDepartments),Y=v(()=>u.getQCTemplates),ee=v(()=>u.getQCLevels),te=v(()=>c.getQCSets?.length+" of "+c.getQCSetCount+" QC Sets");return(i,s)=>{const a=re("router-link");return l(),n(m,null,[e("div",_e,[be,h(e("button",{type:"button",class:"border border-sky-800 text-sky-800 rounded-sm px-2 py-1 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 hover:text-white focus:outline-none focus:shadow-outline",onClick:s[0]||(s[0]=x(t=>A(d)?d.value=!r(d):d=!r(d),["prevent"]))}," Add New QC Request ",512),[[V,he(fe.CREATE,me.SAMPLE)]])]),ye,e("section",ge,[e("div",xe,[e("table",we,[ke,e("tbody",Ce,[(l(!0),n(m,null,_(r(I),t=>(l(),n("tr",{key:t.uid},[Se,e("td",Qe,[e("div",Ae,[e("div",qe,f(t.createdAt),1)])]),e("td",Le,[e("div",Pe,f(K(t.samples??[])),1)]),e("td",Ue,[e("div",Ve,f(W(t.samples??[])),1)]),e("td",Ee,[E(a,{to:{name:"qc-set-detail",params:{qcSetUid:t.uid}},class:"px-2 py-1 mr-2 border-sky-800 border text-gray-500rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},{default:q(()=>[ie("View Detail")]),_:2},1032,["to"])])]))),128))])]),r(N)?(l(),n("div",Re,[E(r(M),{message:"Fetching QCSets ..."})])):w("",!0)])]),e("section",De,[Te,e("div",Me,[h(e("button",{onClick:s[1]||(s[1]=x(t=>J(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Show More",512),[[V,S.value?.pageInfo?.hasNextPage]]),e("div",Be,[e("div",je,[h(e("select",{class:"appearance-none h-full rounded-l-sm border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500","onUpdate:modelValue":s[2]||(s[2]=t=>A(b)?b.value=t:b=t),disabled:!S.value?.pageInfo?.hasNextPage},[...Fe],8,Ie),[[g,r(b)]]),$e])]),e("div",ze,[e("input",{placeholder:te.value,class:"appearance-none rounded-r-sm rounded-l-sm sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none",disabled:""},null,8,Oe)])])]),r(d)?(l(),de(r(B),{key:0,onClose:s[7]||(s[7]=t=>A(d)?d.value=!1:d=!1)},{header:q(()=>[Ze]),body:q(()=>[e("form",Ge,[e("div",He,[e("label",Je,[Ke,h(e("select",{name:"clientContacts",id:"clientContacts","onUpdate:modelValue":s[3]||(s[3]=t=>r(p).departmentUid=t),class:"form-input mt-1 block w-full"},[We,(l(!0),n(m,null,_(X.value,t=>(l(),n("option",{key:t.uid,value:t.uid},f(t.name),9,Xe))),128))],512),[[g,r(p).departmentUid]])])]),e("section",Ye,[et,e("div",tt,[st,e("span",{class:"cursor-pointer text-xl text-sky-800",onClick:s[4]||(s[4]=t=>k.value=!k.value)},[...lt]),r(p).samples?.length<20?(l(),n("button",{key:0,onClick:s[5]||(s[5]=x(t=>P(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add QCSet")):w("",!0)]),nt,(l(!0),n(m,null,_(r(p).samples,(t,U)=>(l(),n("div",{key:U},[e("div",at,[e("div",rt,[e("div",it,[e("label",dt,[ct,h(e("select",{"onUpdate:modelValue":o=>t.qcTemplateUid=o,class:"form-input mt-1 block w-full"},[pt,(l(!0),n(m,null,_(Y.value,o=>(l(),n("option",{key:o.uid,value:o.uid},f(o.name),9,ht))),128))],8,ut),[[g,t.qcTemplateUid]])]),k.value?(l(),n("label",mt,[ft,h(e("select",{"onUpdate:modelValue":o=>t.qcLevels=o,class:"form-input mt-1 block w-full",multiple:""},[_t,(l(!0),n(m,null,_(ee.value,o=>(l(),n("option",{key:o.uid,value:o.uid},f(o.level),9,bt))),128))],8,vt),[[g,t.qcLevels]])])):w("",!0),e("label",yt,[gt,h(e("select",{"onUpdate:modelValue":o=>t.analysisProfiles=o,class:"form-input mt-1 block w-full",multiple:""},[wt,(l(!0),n(m,null,_($.value,o=>(l(),n("option",{key:o.uid,value:o.uid},f(o.name),9,kt))),128))],8,xt),[[g,t.analysisProfiles]])]),k.value?(l(),n("label",Ct,[St,h(e("select",{"onUpdate:modelValue":o=>t.analysisServices=o,class:"form-input mt-1 block w-full",multiple:""},[At,(l(!0),n(m,null,_(z.value,o=>(l(),n("option",{key:o.uid,value:o.uid},f(o.name),9,qt))),128))],8,Qt),[[g,t.analysisServices]])])):w("",!0)])]),e("div",Lt,[e("button",{onClick:x(o=>G(U),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"},"Remove",8,Pt)])]),Ut]))),128))]),Vt,e("button",{type:"button",onClick:s[6]||(s[6]=x(t=>H(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):w("",!0)],64)}}}),Nt=ce(Et,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/qcontrol/QualityControlListing.vue"]]);export{Nt as default};

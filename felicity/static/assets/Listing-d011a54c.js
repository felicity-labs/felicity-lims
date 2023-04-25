import{d as X,a8 as Y,P as ee,an as te,s as se,r as C,A,U as v,B as oe,o as n,g as l,h as e,i as p,C as q,w,k as U,j as a,y as g,F as h,z as b,t as f,l as E,E as L,G as ne,L as le,R as x,D as ae,I as ie,m as re,bA as de,ak as ce,_ as ue}from"./index-cd9e6ac8.js";import{h as pe,o as he,a as fe}from"./constants-99d18042.js";const _e={class:"flex items-center justify-between"},ve=e("h1",{class:"h1 font-bold text-dark-700"},"QC Analyses Requests",-1),be=e("hr",null,null,-1),me={class:"overflow-x-auto mt-4"},ye={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},ge={class:"min-w-full"},xe=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},"Date Created"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"QCSet (samples)"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Test(s)"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),we={class:"bg-white"},ke=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},null,-1),Ce={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Se={class:"flex items-center"},Qe={class:"text-sm leading-5 text-gray-800"},Ae={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ue={class:"text-sm leading-5 text-sky-800"},Le={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ve={class:"text-sm leading-5 text-sky-800"},Pe={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},qe={key:0,class:"py-4 text-center"},Ee={class:"flex justify-between"},De=e("div",null,null,-1),Re={class:"my-4 flex sm:flex-row flex-col"},Te={class:"flex flex-row mb-1 sm:mb-0"},Be={class:"relative"},Me=["disabled"],je=re('<option value="25">25</option><option value="50">50</option><option value="100">100</option><option value="250">250</option><option value="500">500</option><option value="1000">1000</option><option value="5000">5000</option><option value="10000">10000</option>',8),Ne=[je],Fe=e("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[e("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),$e={class:"block relative"},ze=["placeholder"],Ie=e("h3",null,"Create QC Analyses Requests",-1),Ge={action:"post",class:"mb-8 bg-white"},Ze={class:"grid grid-cols-3 gap-x-4 mb-4"},He={class:"block col-span-1"},Je=e("span",{class:"text-gray-700"},"Department",-1),Ke=e("option",{value:""},null,-1),Oe=["value"],We={id:"samples"},Xe=e("hr",null,null,-1),Ye={class:"flex justify-between items-center py-2"},et=e("h5",null,"Process Control Samples",-1),tt=e("i",{class:"fa fa-ellipsis-h","aria-hidden":"true"},null,-1),st=[tt],ot=e("hr",{class:"mb-4"},null,-1),nt={class:"flex items-center justify-between"},lt={class:""},at={class:"grid grid-cols-4 gap-x-4"},it={class:"block col-span-1 mb-2"},rt=e("span",{class:"text-gray-700"},"QC Template",-1),dt=["onUpdate:modelValue"],ct=e("option",{value:""},null,-1),ut=["value"],pt={key:0,class:"block col-span-1 mb-2"},ht=e("span",{class:"text-gray-700"},"QC Levels",-1),ft=["onUpdate:modelValue"],_t=e("option",{value:""},null,-1),vt=["value"],bt={class:"block col-span-1 mb-2"},mt=e("span",{class:"text-gray-700"},"Analysis Profiles",-1),yt=["onUpdate:modelValue"],gt=e("option",{value:""},null,-1),xt=["value"],wt={key:1,class:"block col-span-1 mb-2"},kt=e("span",{class:"text-gray-700"},"Analysis Services",-1),Ct=["onUpdate:modelValue"],St=e("option",{value:""},null,-1),Qt=["value"],At={class:""},Ut=["onClick"],Lt=e("hr",null,null,-1),Vt=e("hr",null,null,-1),Pt=X({__name:"Listing",setup(qt){const c=Y(),u=ee(),V=te(),{withClientMutation:D}=ce(),{qcSets:R,fetchingQCSets:T}=se(c);let d=C(!1),B=C(!0),_=A({departmentUid:void 0,samples:[{}]}),M=A({first:void 0,after:"",text:"",sortBy:["name"]});u.fetchAnalysesServices(M),u.fetchQCLevels(),u.fetchQCTemplates(),u.fetchAnalysesProfiles(),V.fetchDepartments({}),c.resetQCSets();let m=C(25),y=A({first:m.value,after:"",text:"",sortBy:["uid"],filterAction:!1});c.fetchQCSets(y);const j=v(()=>u.getAnalysesProfiles),N=v(()=>{const r=u.getAnalysesServicesSimple;let s=new Set;return r.forEach(i=>{i.profiles?.length===0&&s.add(i)}),[...s]});function F(){D(de,{samples:_.samples},"createQcSet").then(r=>c.addQCSet(r))}function $(){_.samples?.push({})}function z(r){_.samples?.splice(r,1)}function I(){B.value===!0&&F(),d.value=!1}const S=v(()=>c.getQCSetPageInfo);function G(){y.first=+m.value,y.after=S?.value?.endCursor,y.text="",y.filterAction=!1,c.fetchQCSets(y)}function Z(r){let s=[];return r?.forEach(i=>{i?.sampleId+""+i.status;let t=i?.qcLevel?.level?.match(/\b([A-Z])/g).join("")+" ("+i.status+")";s.includes(t)||s.push(t)}),s.join(", ")}function H(r){let s=[];return r?.forEach(i=>{i.profiles.forEach(t=>{s.includes(t.name)||s.push(t.name)})}),r?.forEach(i=>{i.analyses.forEach(t=>{s.includes(t.name)||s.push(t.name)})}),s.join(", ")}const k=C(!1),J=v(()=>V.getDepartments),K=v(()=>u.getQCTemplates),O=v(()=>u.getQCLevels),W=v(()=>c.getQCSets?.length+" of "+c.getQCSetCount+" QC Sets");return(r,s)=>{const i=oe("router-link");return n(),l(h,null,[e("div",_e,[ve,p(e("button",{type:"button",class:"border border-sky-800 text-sky-800 rounded-sm px-2 py-1 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 hover:text-white focus:outline-none focus:shadow-outline",onClick:s[0]||(s[0]=w(t=>U(d)?d.value=!a(d):d=!a(d),["prevent"]))}," Add New QC Request ",512),[[q,pe(fe.CREATE,he.SAMPLE)]])]),be,g(` <section class="my-4 flex sm:flex-row flex-col">
        <div class="flex flex-row mb-1 sm:mb-0">
            <div class="relative">
                <select
                class="appearance-none h-full rounded-l-sm border block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                   <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="resulted">Resulted</option>
                    <option value="to_be_verified">To be Verified</option>
                    <option value="verified">Verified</option>
                </select>
                <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="block relative">
            <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                    <path
                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                    </path>
                </svg>
            </span>
            <input placeholder="Search ..."
                
                class="appearance-none rounded-r-sm rounded-l-sm sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
      </div>
      <button
        class="px-2 py-1 ml-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
        Filter ...</button>
      
    </section> `),e("section",me,[e("div",ye,[e("table",ge,[xe,e("tbody",we,[(n(!0),l(h,null,b(a(R),t=>(n(),l("tr",{key:t.uid},[ke,e("td",Ce,[e("div",Se,[e("div",Qe,f(t.createdAt),1)])]),e("td",Ae,[e("div",Ue,f(Z(t.samples)),1)]),e("td",Le,[e("div",Ve,f(H(t.samples)),1)]),e("td",Pe,[E(i,{to:{name:"qc-set-detail",params:{qcSetUid:t.uid}},class:"px-2 py-1 mr-2 border-sky-800 border text-gray-500rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},{default:L(()=>[ne("View Detail")]),_:2},1032,["to"])])]))),128))])]),a(T)?(n(),l("div",qe,[E(le,{message:"Fetching QCSets ..."})])):g("v-if",!0)])]),e("section",Ee,[De,e("div",Re,[p(e("button",{onClick:s[1]||(s[1]=w(t=>G(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Show More",512),[[q,a(S)?.hasNextPage]]),e("div",Te,[e("div",Be,[p(e("select",{class:"appearance-none h-full rounded-l-sm border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500","onUpdate:modelValue":s[2]||(s[2]=t=>U(m)?m.value=t:m=t),disabled:!a(S)?.hasNextPage},Ne,8,Me),[[x,a(m)]]),Fe])]),e("div",$e,[e("input",{placeholder:a(W),class:"appearance-none rounded-r-sm rounded-l-sm sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none",disabled:""},null,8,ze)])])]),a(d)?(n(),ae(ie,{key:0,onClose:s[7]||(s[7]=t=>U(d)?d.value=!1:d=!1)},{header:L(()=>[Ie]),body:L(()=>[e("form",Ge,[e("div",Ze,[e("label",He,[Je,p(e("select",{name:"clientContacts",id:"clientContacts","onUpdate:modelValue":s[3]||(s[3]=t=>a(_).departmentUid=t),class:"form-input mt-1 block w-full"},[Ke,(n(!0),l(h,null,b(a(J),t=>(n(),l("option",{key:t.uid,value:t.uid},f(t.name),9,Oe))),128))],512),[[x,a(_).departmentUid]])])]),e("section",We,[Xe,e("div",Ye,[et,e("span",{class:"cursor-pointer text-xl text-sky-800",onClick:s[4]||(s[4]=t=>k.value=!k.value)},st),a(_).samples?.length<20?(n(),l("button",{key:0,onClick:s[5]||(s[5]=w(t=>$(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add QCSet")):g("v-if",!0)]),ot,(n(!0),l(h,null,b(a(_).samples,(t,P)=>(n(),l("div",{key:P},[e("div",nt,[e("div",lt,[e("div",at,[e("label",it,[rt,p(e("select",{"onUpdate:modelValue":o=>t.qcTemplateUid=o,class:"form-input mt-1 block w-full"},[ct,(n(!0),l(h,null,b(a(K),(o,Q)=>(n(),l("option",{key:o.uid,value:o.uid},f(o.name),9,ut))),128))],8,dt),[[x,t.qcTemplateUid]])]),k.value?(n(),l("label",pt,[ht,p(e("select",{"onUpdate:modelValue":o=>t.qcLevels=o,class:"form-input mt-1 block w-full",multiple:""},[_t,(n(!0),l(h,null,b(a(O),(o,Q)=>(n(),l("option",{key:o.uid,value:o.uid},f(o.level),9,vt))),128))],8,ft),[[x,t.qcLevels]])])):g("v-if",!0),e("label",bt,[mt,p(e("select",{"onUpdate:modelValue":o=>t.analysisProfiles=o,class:"form-input mt-1 block w-full",multiple:""},[gt,(n(!0),l(h,null,b(a(j),(o,Q)=>(n(),l("option",{key:o.uid,value:o.uid},f(o.name),9,xt))),128))],8,yt),[[x,t.analysisProfiles]])]),k.value?(n(),l("label",wt,[kt,p(e("select",{"onUpdate:modelValue":o=>t.analysisServices=o,class:"form-input mt-1 block w-full",multiple:""},[St,(n(!0),l(h,null,b(a(N),(o,Q)=>(n(),l("option",{key:o.uid,value:o.uid},f(o.name),9,Qt))),128))],8,Ct),[[x,t.analysisServices]])])):g("v-if",!0)])]),e("div",At,[e("button",{onClick:w(o=>z(P),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"},"Remove",8,Ut)])]),Lt]))),128))]),Vt,e("button",{type:"button",onClick:s[6]||(s[6]=w(t=>I(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):g("v-if",!0)],64)}}}),Rt=ue(Pt,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/qcontrol/Listing.vue"]]);export{Rt as default};
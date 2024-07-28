import{d as oe,X as ne,P as re,u as ie,C as le,s as de,W as C,D as c,z as k,n as ce,o as u,c as m,b as e,H as _,g as x,f as s,q as ue,G as R,x as v,e as i,y as pe,t as o,E as l,aH as y,F as j,p as me,j as ve,_ as ye,k as he}from"./index-03fd00e9.js";import{u as xe}from"./samples-72819b73.js";const be={class:"flex justify-between items-center"},_e=e("h3",{class:"my-4 font-bold"},"Sample Detail",-1),fe=e("hr",null,null,-1),ge={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4"},we={key:0,class:"py-4 text-center"},Se={key:1,class:"grid grid-cols-12 gap-3"},ke={class:"col-span-12 px-3 sm:px-0"},Ce={class:"mb-2 flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold"},Re=e("i",{class:"fa fa-star"},null,-1),je=[Re],De={key:1},Le={type:"button",class:"bg-sky-800 text-white px-2 py-1 rounded-sm leading-none"},Pe={class:"ml-2"},$e={class:"absolute mt-4 py-0 bg-gray-300 rounded-sm shadow-xl z-20"},Oe=e("hr",null,null,-1),qe={class:"grid grid-cols-3 gap-x-4 mt-2"},Be={class:"col-span-1"},Ie={class:"flex justify-between"},Te=e("span",{class:"text-gray-800 text-sm font-semibold"},"Client Request ID:",-1),Ue={class:"text-gray-600 text-sm md:text-md"},Ve={class:"flex justify-between"},Ne=e("span",{class:"text-gray-800 text-sm font-semibold"},"Client:",-1),Ee={class:"text-gray-600 text-sm md:text-md"},Ae=e("div",{class:"flex justify-between"},[e("span",{class:"text-gray-800 text-sm font-semibold"},"Cliet Contact:"),e("span",{class:"text-gray-600 text-sm md:text-md"},"Sister in Charge")],-1),ze={class:"col-span-1"},Fe={class:"flex justify-between"},Je=e("span",{class:"text-gray-800 text-sm font-semibold"},"Sample Type:",-1),We={class:"text-gray-600 text-sm md:text-md"},He={class:"flex justify-between"},Ge=e("span",{class:"text-gray-800 text-sm font-semibold"},"Date Sampled:",-1),Me={class:"text-gray-600 text-sm md:text-md"},Xe={class:"flex justify-between"},Ke=e("span",{class:"text-gray-800 text-sm font-semibold"},"Date Registered:",-1),Qe={class:"text-gray-600 text-sm md:text-md"},Ye={class:"flex justify-between"},Ze=e("span",{class:"text-gray-800 text-sm font-semibold"},"Date Received:",-1),et={class:"text-gray-600 text-sm md:text-md"},tt={class:"col-span-1"},st={class:"flex justify-between"},at=e("span",{class:"text-gray-800 text-sm font-semibold"},"Date Submitted:",-1),ot={class:"text-gray-600 text-sm md:text-md"},nt={class:"flex justify-between"},rt=e("span",{class:"text-gray-800 text-sm font-semibold"},"Date Verified:",-1),it={class:"text-gray-600 text-sm md:text-md"},lt={class:"flex justify-between"},dt=e("span",{class:"text-gray-800 text-sm font-semibold"},"Date Published:",-1),ct={class:"text-gray-600 text-sm md:text-md"},ut={class:"flex justify-between"},pt=e("span",{class:"text-gray-800 text-sm font-semibold"},"Date Printed:",-1),mt={class:"text-gray-600 text-sm md:text-md"},vt={class:"bg-blue-300 rounded-sm shadow-md duration-500 px-4 sm:px-6 md:px-2 py-4 my-4"},yt={class:"flex"},ht=e("div",{class:"mr-4 font-semibold"},"Storage:",-1),xt={class:"bg-orange-600 rounded-sm shadow-md duration-500 px-4 sm:px-6 md:px-2 py-4 my-4"},bt=oe({__name:"Sample",setup(_t){const D=ve(()=>ye(()=>import("./FelLoadingMessage-6ca9c805.js"),["assets/FelLoadingMessage-6ca9c805.js","assets/index-03fd00e9.js","assets/index-91994633.css"])),p=ne(),f=re(),g=ie();p.resetSample();const{cancelSamples:L,reInstateSamples:P,receiveSamples:$,invalidateSamples:O,publishSamples:q,verifySamples:B,recoverSamples:I}=xe(),b=le({dropdownOpen:!1}),{sample:t,fetchingSample:T,repeatSample:w}=de(p);p.fetchSampleByUid(f.params.sampleUid),C(()=>t?.value?.status,(n,a)=>{if(n)if(n!=="invalidated"){p.resetRepeatSample();return}else p.fetchRepeatSampleByParentId(f.params.sampleUid)}),C(()=>f.params.sampleUid,(n,a)=>{p.fetchSampleByUid(+n)});function U(n,a){let d=[];return n?.forEach(h=>d.push(h.name)),a?.forEach(h=>d.push(h.name)),d.join(", ")}const V=c(()=>!!["expected"].includes(t?.value?.status?.toLowerCase())),N=async()=>$([t?.value?.uid]),E=c(()=>!!["received","expected"].includes(t?.value?.status?.toLowerCase())),A=async()=>L([t?.value?.uid]),z=c(()=>!!["cancelled"].includes(t?.value?.status?.toLowerCase())),F=async()=>P([t?.value?.uid]),J=c(()=>t?.value?.status?.toLowerCase()==="awaiting"),W=async()=>B([t?.value?.uid]),H=c(()=>t?.value?.status?.toLowerCase()==="published"),S=c(()=>["approved"].includes(t?.value?.status?.toLowerCase())?"Publish":["published"].includes(t?.value?.status?.toLowerCase())?"Re publish":"Pre publish"),G=c(()=>{if(["awaiting","approved","published"].includes(t?.value?.status?.toLowerCase()))return!0;const n=p.analysisResults;return!!(["received","paired"].includes(t?.value?.status?.toLowerCase()??"")&&n?.some(a=>["approved"].includes(a.status?.toLowerCase()??"")))}),M=async()=>{const n=S.value.startsWith("Pre")?"pre-publish":S.value.startsWith("Re")?"re-publish":"publish";q([{uid:t?.value?.uid,action:n}])},X=async()=>O([t?.value?.uid]).then(n=>{let a=n?.filter(d=>d.uid!==t?.value?.uid);a.length>0&&p.setRepeatSample(a[0])}),K=async()=>g.push({name:"print-barcodes",state:{sampleUids:JSON.stringify([t?.value?.uid])}}),Q=c(()=>!!["received","expected"].includes(t?.value?.status?.toLowerCase())),Y=async()=>g.push({name:"reject-samples",params:{samples:JSON.stringify([t?.value])}}),Z=c(()=>!!["stored"].includes(t?.value?.status?.toLowerCase())),ee=async()=>I([t?.value?.uid]),te=async n=>{g.push({path:"/bio-banking",state:{sample:JSON.stringify(n)}})};return(n,a)=>{const d=k("font-awesome-icon"),h=k("router-link"),se=k("router-view"),ae=ce("motion-slide-right");return u(),m(j,null,[e("div",be,[_e,e("div",null,[e("button",{class:"p-2 mr-8 text-sm hover:border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none",onClick:K},[_(" Barcode "),x(d,{icon:"barcode",class:"ml-2"})]),s(t)?.analysisRequest?.patient?.uid?(u(),ue(h,{key:0,to:{name:"patient-detail",params:{patientUid:s(t)?.analysisRequest?.patient?.uid}},class:"p-2 my-2 ml-4 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:R(()=>[_(" ... other samples ")]),_:1},8,["to"])):v("v-if",!0)])]),fe,i((u(),m("div",ge,[s(T)?(u(),m("div",we,[x(s(D),{message:"Fetching sample details ..."})])):(u(),m("div",Se,[v(" Summary Column "),e("div",ke,[e("div",Ce,[e("div",null,[s(t)?.priority??0<1?(u(),m("span",{key:0,class:pe(["font-small",{"text-orange-600":s(t)?.priority??0<1}])},[...je],2)):v("v-if",!0),_(" "+o(s(t)?.sampleId)+" ",1),v(` <button\r
                                                class="ml-4 text-xs inline-flex items-center justify-center w-6 h-6 mr-2 border-sky-800 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"\r
                                              >\r
                                                <i class="fa fa-pen"></i>\r
                                              </button> `),s(t)?.analysisRequest?.patient?.uid&&s(w)?.uid?(u(),m("span",De,[x(d,{icon:"angle-double-right",class:"mx-2"}),x(h,{to:{name:"sample-detail",params:{patientUid:s(t)?.analysisRequest?.patient?.uid,sampleUid:s(w)?.uid}},class:"p-2 my-2 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:R(()=>[_(o(s(w)?.sampleId),1)]),_:1},8,["to"])])):v("v-if",!0)]),e("span",null,o(U(s(t)?.profiles,s(t)?.analyses)),1),v(' <button type="button" class="bg-sky-800 text-white p-1rounded-smleading-none">{{ sample?.status }}</button> '),e("div",null,[e("div",{onClick:a[0]||(a[0]=r=>b.dropdownOpen=!b.dropdownOpen),class:"hidden md:block md:flex md:items-center ml-2 mt-2"},[e("button",Le,o(s(t)?.status),1),e("div",Pe,[x(d,{icon:"chevron-down",class:"text-gray-400"})])]),i(e("div",{onClick:a[1]||(a[1]=r=>b.dropdownOpen=!1),class:"fixed inset-0 h-full w-full z-10"},null,512),[[l,b.dropdownOpen]]),i(e("div",$e,[i(e("div",{onClick:a[2]||(a[2]=r=>N()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Receive ",512),[[l,V.value]]),i(e("div",{onClick:a[3]||(a[3]=r=>W()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Approve ",512),[[l,J.value]]),i(e("div",{onClick:a[4]||(a[4]=r=>Y()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white"}," Reject ",512),[[l,Q.value]]),i(e("div",{onClick:a[5]||(a[5]=r=>A()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white"}," Cancel ",512),[[l,E.value]]),i(e("div",{onClick:a[6]||(a[6]=r=>F()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white"}," Reinstate ",512),[[l,z.value]]),i(e("div",{onClick:a[7]||(a[7]=r=>M()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white"},o(S.value),513),[[l,G.value]]),i(e("div",{onClick:a[8]||(a[8]=r=>X()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white"}," Invalidate ",512),[[l,H.value]]),i(e("div",{onClick:a[9]||(a[9]=r=>ee()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white"}," Recover ",512),[[l,Z.value]])],512),[[l,b.dropdownOpen]])])]),Oe,e("div",qe,[e("div",Be,[e("div",Ie,[Te,e("span",Ue,o(s(t)?.analysisRequest?.clientRequestId),1)]),e("div",Ve,[Ne,e("span",Ee,o(s(t)?.analysisRequest?.client?.name),1)]),Ae]),e("div",ze,[e("div",Fe,[Je,e("span",We,o(s(t)?.sampleType?.name),1)]),e("div",He,[Ge,e("span",Me,o(s(y)(s(t)?.dateCollected,!0)),1)]),e("div",Xe,[Ke,e("span",Qe,o(s(y)(s(t)?.createdAt,!0)),1)]),e("div",Ye,[Ze,e("span",et,o(s(y)(s(t)?.dateReceived,!0)),1)])]),e("div",tt,[e("div",st,[at,e("span",ot,o(s(y)(s(t)?.dateSubmitted,!0)),1)]),e("div",nt,[rt,e("span",it,o(s(y)(s(t)?.dateVerified,!0)),1)]),e("div",lt,[dt,e("span",ct,o(s(y)(s(t)?.datePublished,!0)),1)]),e("div",ut,[pt,e("span",mt,o(s(y)(s(t)?.datePrinted,!0)),1)])])])])]))])),[[ae]]),i(e("div",vt,[e("div",yt,[ht,v("  "),e("div",{class:"hover:underline hover:cursor-pointer",onClick:a[10]||(a[10]=r=>te(s(t)))},[e("span",null,o(s(t)?.storageContainer?.storageSection?.storageLocation?.storeRoom?.name)+" › ",1),e("span",null,o(s(t)?.storageContainer?.storageSection?.storageLocation?.name)+" › ",1),e("span",null,o(s(t)?.storageContainer?.storageSection?.name)+" › ",1),e("span",null,o(s(t)?.storageContainer?.name)+" › ",1),e("span",null,o(s(t)?.storageSlot),1)])])],512),[[l,s(t)?.status==="stored"]]),i(e("div",xt,[v(' <h3 clas="font-bold text-gray-800 text-md">This sample was rejected because of the following reason(s):</h3> '),e("ul",null,[(u(!0),m(j,null,me(s(t)?.rejectionReasons,r=>(u(),m("li",{key:r.uid},o(r.reason),1))),128))])],512),[[l,s(t)?.status==="rejected"]]),x(se)],64)}}}),wt=he(bt,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/sample/_id/Sample.vue"]]);export{wt as default};
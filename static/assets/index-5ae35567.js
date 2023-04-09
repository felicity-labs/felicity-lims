import{d as V,am as O,r as x,U as T,A as P,o as u,g as y,h as e,F as $,z as E,w as F,t as v,j as t,y as U,D as C,E as A,i as k,v as S,k as D,I as R,ak as B,_ as j,a9 as q,R as z,P as H,a6 as G,x as J,l as L,aj as Y,ai as Q,H as W}from"./index-b7f12717.js";import{A as X,E as Z,a as ee,b as te,c as se,d as ne,e as oe,f as le}from"./instrument.mutations-54f1dec5.js";/* empty css                                                                 */const ie={class:""},ae={class:"container w-full my-4"},re=e("hr",null,null,-1),de=e("hr",null,null,-1),ue=e("hr",null,null,-1),ce={class:"grid grid-cols-12 gap-4 mt-2"},me={class:"col-span-5"},pe=["onClick"],he={class:"cursor-pointer"},_e={class:"flex-grow p-1"},ye={class:"font-medium text-gray-500 hover:text-gray-700 flex justify-between"},be=e("span",{class:"text-sm text-gray-500"},null,-1),fe=["onClick"],ve=e("svg",{class:"w-4 h-4 fill-current",viewBox:"0 0 20 20"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1),ge=[ve],xe={action:"post",class:"p-1"},we={class:"grid grid-cols-2 gap-x-4 mb-4"},ke={class:"block col-span-2 mb-2"},$e=e("span",{class:"text-gray-700"},"Instrument Type",-1),Ue={class:"block col-span-2 mb-2"},Te=e("span",{class:"text-gray-700"},"Description",-1),Ie=e("hr",null,null,-1),Me=V({__name:"InstrumentTypes",setup(N){const i=O(),{withClientMutation:g}=B();let r=x(!1),f=x("");const h=x(!0);i.fetchInstrumentTypes();const n=T(()=>i.getInstrumentTypes);let a=P({});function _(){const o={name:a.name,description:a.description};g(X,{payload:o},"createInstrumentType").then(l=>i.addInstrumentType(l))}function I(){const o={name:a.name,description:a.description};g(Z,{uid:a.uid,payload:o},"updateInstrumentType").then(l=>i.updateInstrumentType(l))}function b(o){Object.assign(a,{...o})}function M(o,l={}){h.value=o,r.value=!0,f.value=(o?"CREATE":"EDIT")+" INSTRUMENT TYPE",o?Object.assign(a,{}):Object.assign(a,{...l})}function c(){h.value===!0&&_(),h.value===!1&&I(),r.value=!1}return(o,l)=>(u(),y($,null,[e("div",ie,[e("div",ae,[re,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:l[0]||(l[0]=m=>M(!0))}," Add Instrument Type"),de]),ue,e("div",ce,[e("section",me,[e("ul",null,[(u(!0),y($,null,E(t(n),m=>(u(),y("li",{key:m?.uid,onClick:F(p=>b(m),["prevent","stop"]),class:"flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold bg-white p-1 mb-2"},[e("span",he,[e("div",_e,[e("div",ye,[e("span",null,v(m?.name),1),be])])]),e("button",{onClick:p=>M(!1,m),class:"ml-4 inline-flex items-center justify-center w-8 h-8 mr-2 border-sky-800 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"},ge,8,fe)],8,pe))),128))])])])]),U(" instType Form Modal "),t(r)?(u(),C(R,{key:0,onClose:l[4]||(l[4]=m=>D(r)?r.value=!1:r=!1)},{header:A(()=>[e("h3",null,v(t(f)),1)]),body:A(()=>[e("form",xe,[e("div",we,[e("label",ke,[$e,k(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":l[1]||(l[1]=m=>t(a).name=m),placeholder:"Name ..."},null,512),[[S,t(a).name]])]),e("label",Ue,[Te,k(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":l[2]||(l[2]=m=>t(a).description=m),placeholder:"Description ..."},null,512),[[S,t(a).description]])])]),Ie,e("button",{type:"button",onClick:l[3]||(l[3]=F(m=>c(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):U("v-if",!0)],64))}}),Se=j(Me,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/instruments/InstrumentTypes.vue"]]),Ee={class:""},Ce={class:"container w-full my-4"},Ae=e("hr",null,null,-1),De=e("hr",null,null,-1),Ne=e("hr",null,null,-1),Ve={class:"overflow-x-auto mt-4"},je={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},Fe={class:"min-w-full"},Oe=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Type"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Manufacturer"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Supplier"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),Pe={class:"bg-white"},Re={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Be={class:"text-sm leading-5 text-gray-800"},ze={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Le={class:"text-sm leading-5 text-gray-800"},Ye={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},He={class:"text-sm leading-5 text-sky-800"},Ke={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},qe={class:"text-sm leading-5 text-sky-800"},Ge={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},Je=["onClick"],Qe={action:"post",class:"p-1"},We={class:"grid grid-cols-3 gap-x-4 mb-4"},Xe={class:"block col-span-2 mb-2"},Ze=e("span",{class:"text-gray-700"},"Instrument Name",-1),et={class:"block col-span-1 mb-2"},tt=e("span",{class:"text-gray-700"},"keyword",-1),st={class:"block col-span-1 mb-2"},nt=e("span",{class:"text-gray-700 w-4/12"},"Instrument Type",-1),ot={class:"w-full"},lt=e("option",null,null,-1),it=["value"],at={class:"block col-span-1 mb-2"},rt=e("span",{class:"text-gray-700 w-4/12"},"Manufacturer",-1),dt={class:"w-full"},ut=e("option",null,null,-1),ct=["value"],mt={class:"block col-span-1 mb-2"},pt=e("span",{class:"text-gray-700 w-4/12"},"Supplier",-1),ht={class:"w-full"},_t=e("option",null,null,-1),yt=["value"],bt={class:"block col-span-3 mb-2"},ft=e("span",{class:"text-gray-700"},"Description",-1),vt=e("hr",null,null,-1),gt=V({__name:"Instruments",setup(N){q();const i=O(),{withClientMutation:g}=B();x("view");let r=x(!1),f=x("");const h=x(!0);let n=P({});i.fetchInstrumentTypes();const a=T(()=>i.getInstrumentTypes);i.fetchInstruments();const _=T(()=>i.getInstruments);i.fetchManufacturers();const I=T(()=>i.getManufacturers);i.fetchSuppliers();const b=T(()=>i.getSuppliers);function M(){const m={name:n.name,keyword:n.keyword,description:n.description,instrumentTypeUid:n.instrumentTypeUid,manufacturerUid:n.manufacturerUid,supplierUid:n.supplierUid};g(ee,{payload:m},"createInstrument").then(p=>i.addInstrument(p))}function c(){const m={name:n.name,keyword:n.keyword,description:n.description,instrumentTypeUid:n.instrumentTypeUid,manufacturerUid:n.manufacturerUid,supplierUid:n.supplierUid};g(te,{uid:n.uid,payload:m},"updateInstrument").then(p=>i.updateInstrument(p))}function o(m,p={}){h.value=m,r.value=!0,f.value=(m?"CREATE":"EDIT")+" ANALYSES INSTRUMENT",m?Object.assign(n,{}):Object.assign(n,{...p})}function l(){h.value===!0&&M(),h.value===!1&&c(),r.value=!1}return(m,p)=>(u(),y($,null,[e("div",Ee,[e("div",Ce,[Ae,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:p[0]||(p[0]=s=>o(!0))}," Add Instrument"),De]),Ne,e("div",Ve,[e("div",je,[e("table",Fe,[Oe,e("tbody",Pe,[(u(!0),y($,null,E(t(_),s=>(u(),y("tr",{key:s?.uid},[e("td",Re,[e("div",Be,v(s?.name),1)]),e("td",ze,[e("div",Le,v(s?.instrumentType?.name),1)]),e("td",Ye,[e("div",He,v(s?.manufacturer?.name),1)]),e("td",Ke,[e("div",qe,v(s?.supplier?.name),1)]),e("td",Ge,[e("button",{onClick:d=>o(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,Je)])]))),128))])])])])]),U(" AnaltsisProfile Form Modal "),t(r)?(u(),C(R,{key:0,onClose:p[8]||(p[8]=s=>D(r)?r.value=!1:r=!1)},{header:A(()=>[e("h3",null,v(t(f)),1)]),body:A(()=>[e("form",Qe,[e("div",We,[e("label",Xe,[Ze,k(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":p[1]||(p[1]=s=>t(n).name=s),placeholder:"Name ..."},null,512),[[S,t(n).name]])]),e("label",et,[tt,k(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":p[2]||(p[2]=s=>t(n).keyword=s),placeholder:"Keyword ..."},null,512),[[S,t(n).keyword]])]),e("label",st,[nt,e("div",ot,[k(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":p[3]||(p[3]=s=>t(n).instrumentTypeUid=s)},[lt,(u(!0),y($,null,E(t(a),s=>(u(),y("option",{key:s?.uid,value:s.uid},v(s?.name),9,it))),128))],512),[[z,t(n).instrumentTypeUid]])])]),e("label",at,[rt,e("div",dt,[k(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":p[4]||(p[4]=s=>t(n).manufacturerUid=s)},[ut,(u(!0),y($,null,E(t(I),s=>(u(),y("option",{key:s?.uid,value:s.uid},v(s?.name),9,ct))),128))],512),[[z,t(n).manufacturerUid]])])]),e("label",mt,[pt,e("div",ht,[k(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":p[5]||(p[5]=s=>t(n).supplierUid=s)},[_t,(u(!0),y($,null,E(t(b),s=>(u(),y("option",{key:s?.uid,value:s.uid},v(s?.name),9,yt))),128))],512),[[z,t(n).supplierUid]])])]),e("label",bt,[ft,k(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":p[6]||(p[6]=s=>t(n).description=s),placeholder:"Description ..."},null,512),[[S,t(n).description]])])]),vt,e("button",{type:"button",onClick:p[7]||(p[7]=F(s=>l(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):U("v-if",!0)],64))}}),xt=j(gt,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/instruments/Instruments.vue"]]),wt={action:"post",class:"p-1"},kt={class:"grid grid-cols-3 gap-x-4 mb-4"},$t={class:"block col-span-2 mb-2"},Ut=e("span",{class:"text-gray-700"},"Method Name",-1),Tt={class:"block col-span-1 mb-2"},It=e("span",{class:"text-gray-700"},"keyword",-1),Mt={class:"grid grid-cols-2 gap-x-4 mb-4"},St={class:"block col-span-2 mb-2"},Et=e("span",{class:"text-gray-700"},"Analyses",-1),Ct={class:"block col-span-2 mb-2"},At=e("span",{class:"text-gray-700"},"Instruments",-1),Dt={class:"block col-span-2 mb-2"},Nt=e("span",{class:"text-gray-700"},"Description",-1),Vt=e("hr",null,null,-1),jt=V({__name:"MethodForm",props:{method:Object,methodUid:Number,analysis:Object,analysisUid:Number},emits:["close"],setup(N,{emit:i}){const g=N,r=H(),f=O(),{withClientMutation:h}=B(),{method:n,analysis:a}=G(g),_=P({...n?.value});J(()=>g.analysisUid,(s,d)=>{});const I=T(()=>r.getAnalysesServicesSimple);let b=x([]);a?.value?.uid!==void 0?b.value.push(a.value):I.value?.forEach(s=>{s?.methods?.some(d=>d.uid==n?.value?.uid)&&b.value.push(s)}),f.fetchInstruments();const M=T(()=>f.getInstruments);let c=x([]);const o=()=>{const s=[];return n?.value?.instruments?.forEach(d=>{a?.value?.instruments?.some(K=>K?.uid===d?.uid)&&s.push(d)}),s};c.value=o(),n?.value?.uid!==void 0&&n?.value?.instruments?.forEach(s=>c.value.push(s));function l(){const s={name:_?.name,keyword:_?.keyword,description:_?.description,instruments:c.value?.map(d=>d.uid),analyses:b.value?.map(d=>d.uid)};h(se,{payload:s},"createMethod").then(d=>{i("close"),f.addMethod(d)})}function m(){const s={name:_?.name,keyword:_?.keyword,description:_?.description,instruments:c.value?.map(d=>d.uid),analyses:b.value?.map(d=>d.uid)};h(ne,{uid:_?.uid,payload:s},"updateMethod").then(d=>{i("close"),f.updateMethod(d)})}function p(){n?.value?.uid||l(),n?.value?.uid&&m()}return(s,d)=>(u(),y("form",wt,[e("div",kt,[e("label",$t,[Ut,k(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":d[0]||(d[0]=w=>_.name=w),placeholder:"Name ..."},null,512),[[S,_.name]])]),e("label",Tt,[It,k(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":d[1]||(d[1]=w=>_.keyword=w),placeholder:"Keyword ..."},null,512),[[S,_.keyword]])])]),e("div",Mt,[e("label",St,[Et,L(t(Y),{modelValue:t(b),"onUpdate:modelValue":d[2]||(d[2]=w=>D(b)?b.value=w:b=w),options:t(I),multiple:!0,searchable:!0,label:"name","track-by":"uid",disabled:t(a)?.uid!=null},null,8,["modelValue","options","disabled"])]),e("label",Ct,[At,L(t(Y),{modelValue:t(c),"onUpdate:modelValue":d[3]||(d[3]=w=>D(c)?c.value=w:c=w),options:t(M),multiple:!0,searchable:!0,label:"name","track-by":"uid"},null,8,["modelValue","options"])]),e("label",Dt,[Nt,k(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":d[4]||(d[4]=w=>_.description=w),placeholder:"Description ..."},null,512),[[S,_.description]])])]),Vt,e("button",{type:"button",onClick:d[5]||(d[5]=F(w=>p(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")]))}}),Ft=j(jt,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/instruments/MethodForm.vue"]]),Ot={class:""},Pt={class:"container w-full my-4"},Rt=e("hr",null,null,-1),Bt=e("hr",null,null,-1),zt=e("hr",null,null,-1),Lt={class:"overflow-x-auto mt-4"},Yt={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},Ht={class:"min-w-full"},Kt=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Instruments"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Analyses"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),qt={class:"bg-white"},Gt={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Jt={class:"text-sm leading-5 text-gray-800"},Qt={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Wt={class:"text-sm leading-5 text-gray-800"},Xt={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Zt={class:"text-sm leading-5 text-sky-800"},es={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ts=["onClick"],ss=V({__name:"Methods",setup(N){const i=H(),g=O();let r=x(!1),f=x("");const h=x(!0);let n=P({});const a={first:1e3,after:"",text:"",sortBy:["name"]};i.fetchAnalysesServices(a);const _=T(()=>i.getAnalysesServicesSimple);g.fetchMethods();const I=T(()=>g.getMethods);function b(c,o={}){h.value=c,r.value=!0,f.value=(c?"CREATE":"EDIT")+" ANALYSES METHOD",c?Object.assign(n,{}):Object.assign(n,{...o})}function M(c){let o=[];return _.value?.forEach(l=>{l?.methods?.some(m=>m.uid==c?.uid)&&o.push(l?.name)}),o.join(", ")}return(c,o)=>(u(),y($,null,[e("div",Ot,[e("div",Pt,[Rt,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:o[0]||(o[0]=l=>b(!0))}," Add Method"),Bt]),zt,e("div",Lt,[e("div",Yt,[e("table",Ht,[Kt,e("tbody",qt,[(u(!0),y($,null,E(t(I),l=>(u(),y("tr",{key:l?.uid},[e("td",Gt,[e("div",Jt,v(l?.name),1)]),e("td",Qt,[e("div",Wt,v(l?.instruments?.map(m=>m?.name)?.join(",")),1)]),e("td",Xt,[e("div",Zt,v(M(l)),1)]),e("td",es,[e("button",{onClick:m=>b(!1,l),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,ts)])]))),128))])])])])]),U(" AnaltsisProfile Form Modal "),t(r)?(u(),C(R,{key:0,onClose:o[2]||(o[2]=l=>D(r)?r.value=!1:r=!1)},{header:A(()=>[e("h3",null,v(t(f)),1)]),body:A(()=>[L(Ft,{method:t(n),methodUid:t(n)?.uid,onClose:o[1]||(o[1]=l=>D(r)?r.value=!1:r=!1)},null,8,["method","methodUid"])]),_:1})):U("v-if",!0)],64))}}),ns=j(ss,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/instruments/Methods.vue"]]),os={class:""},ls={class:"container w-full my-4"},is=e("hr",null,null,-1),as=e("hr",null,null,-1),rs=e("hr",null,null,-1),ds={class:"grid grid-cols-12 gap-4 mt-2"},us={class:"col-span-5"},cs={class:"cursor-pointer"},ms={class:"flex-grow p-1"},ps={class:"font-medium text-gray-500 hover:text-gray-700 flex justify-between"},hs=e("span",{class:"text-sm text-gray-500"},null,-1),_s=["onClick"],ys=e("svg",{class:"w-4 h-4 fill-current",viewBox:"0 0 20 20"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1),bs=[ys],fs={action:"post",class:"p-1"},vs={class:"grid grid-cols-2 gap-x-4 mb-4"},gs={class:"block col-span-2 mb-2"},xs=e("span",{class:"text-gray-700"},"Instrument Type",-1),ws={class:"block col-span-2 my-2"},ks=e("span",{class:"text-gray-700 ml-4"},"Is SI Unit",-1),$s=e("hr",null,null,-1),Us=V({__name:"Units",setup(N){const i=O(),{withClientMutation:g}=B();let r=x(!1),f=x("");const h=x(!0);i.fetchUnits();const n=T(()=>i.getUnits);let a=P({});function _(){const c={name:a.name,isSiUnit:a.isSiUnit==!0};g(oe,{payload:c},"createUnit").then(o=>i.addUnit(o))}function I(){const c={name:a.name,isSiUnit:a.isSiUnit==!0};g(le,{uid:a.uid,payload:c},"updateUnit").then(o=>i.updateUnit(o))}function b(c,o={}){h.value=c,r.value=!0,f.value=(c?"CREATE":"EDIT")+" UNIT",c?Object.assign(a,{}):Object.assign(a,{...o})}function M(){h.value===!0&&_(),h.value===!1&&I(),r.value=!1}return(c,o)=>(u(),y($,null,[e("div",os,[e("div",ls,[is,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:o[0]||(o[0]=l=>b(!0))}," Add Unit"),as]),rs,e("div",ds,[e("section",us,[e("ul",null,[(u(!0),y($,null,E(t(n),l=>(u(),y("li",{key:l?.uid,class:"flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold bg-white p-1 mb-2"},[e("span",cs,[e("div",ms,[e("div",ps,[e("span",null,v(l?.name),1),hs])])]),e("button",{onClick:m=>b(!1,l),class:"ml-4 inline-flex items-center justify-center w-8 h-8 mr-2 border-sky-800 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"},bs,8,_s)]))),128))])])])]),U(" instType Form Modal "),t(r)?(u(),C(R,{key:0,onClose:o[4]||(o[4]=l=>D(r)?r.value=!1:r=!1)},{header:A(()=>[e("h3",null,v(t(f)),1)]),body:A(()=>[e("form",fs,[e("div",vs,[e("label",gs,[xs,k(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o[1]||(o[1]=l=>t(a).name=l),placeholder:"Name ..."},null,512),[[S,t(a).name]])]),e("label",ws,[k(e("input",{type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=l=>t(a).isSiUnit=l)},null,512),[[Q,t(a).isSiUnit]]),ks])]),$s,e("button",{type:"button",onClick:o[3]||(o[3]=F(l=>M(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):U("v-if",!0)],64))}}),Ts=j(Us,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/instruments/Units.vue"]]),Is={class:"mt-4"},Ms={class:"bg-white shadow-md mt-2"},Ss={class:"-mb-px flex justify-start"},Es=["onClick"],Cs=V({__name:"index",setup(N){let i=x("instruments");const g=["instrument-types","instruments","methods","units"];return T(()=>"tab-"+i.value),(r,f)=>(u(),y("div",Is,[e("nav",Ms,[e("div",Ss,[(u(),y($,null,E(g,h=>e("a",{key:h,class:W(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":t(i)===h}]),onClick:n=>D(i)?i.value=h:i=h,href:"#"},v(h),11,Es)),64))])]),t(i)==="instrument-types"?(u(),C(Se,{key:0})):U("v-if",!0),t(i)==="instruments"?(u(),C(xt,{key:1})):U("v-if",!0),t(i)==="methods"?(u(),C(ns,{key:2})):U("v-if",!0),t(i)==="units"?(u(),C(Ts,{key:3})):U("v-if",!0)]))}}),Vs=j(Cs,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/admin/instruments/index.vue"]]);export{Vs as default};

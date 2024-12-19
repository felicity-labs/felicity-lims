import{d as W,J as X,r as _,p as R,n as Y,m as V,x as D,o as l,c as d,e as a,L as i,b as e,F as A,C as I,t as p,f as n,ad as Z,v as ee,g as B,A as M,B as E,w as b,y as g,i as te,ae as j,G as se,z as oe,j as ae,_ as re,k as ne}from"./index-7210a26e.js";import{u as le}from"./shipment-7d887fd2.js";import{u as ie}from"./shipment-716996d5.js";const de={class:""},ce=e("hr",{class:"mt-4"},null,-1),pe={class:"flex justify-between items-center"},ue={action:"post",class:"p-1"},me={class:"flex justify-start items-center mb-4"},he={class:"flex justify-between items-center"},ye=e("span",{class:"text-gray-700 mr-2 whitespace-nowrap"},"Reference Laboratory",-1),_e=["value"],be={class:"flex justify-between items-center ml-4"},fe=e("span",{class:"text-gray-700 mr-2"},"Courier",-1),ve={class:"ml-6 mt-2"},ge=e("hr",{class:"mb-4"},null,-1),xe={class:"overflow-x-auto"},ke={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},we={class:"min-w-full"},Se={class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},Ce=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null,-1),Ue=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}," Sample ID ",-1),Re={class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},Ve=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}," Client Request Id ",-1),De=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Date Collected ",-1),Ae=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Analysis ",-1),Ie=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Status ",-1),Be={class:"bg-white"},Me={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ee=["onUpdate:modelValue"],je={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},qe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},$e={class:"text-sm leading-5 text-gray-800 font-semibold"},Le={key:1},Ne={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Pe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Fe=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",null,"tests")],-1),ze={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ge={type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none"},Je={class:"my-4"},Oe=W({__name:"ShipmentSamples",setup(He){const q=ae(()=>re(()=>import("./FelButton-1a7817c1.js"),["assets/FelButton-1a7817c1.js","assets/index-7210a26e.js","assets/index-a67f0314.css"])),u=ie(),x=X();let c=_(!1),r=R(()=>u.getShipment);const k=()=>{u.fetchShipmentByUid(x.params.shipmentUid)},m=Y({laboratoryUid:void 0,comment:void 0,courier:void 0}),h=_(!1),$=()=>{h.value=!0,u.updateShipment({uid:x.params.shipmentUid,payload:m}).then(()=>{h.value=!1,k()})};function L(){return r.value?.samples?.every(o=>o.checked===!0)}function w(){let o=[];return r.value?.shippedSamples?.forEach(s=>{s?.checked&&o.push(s.sample)}),o}function N(){L()?c.value=!0:c.value=!1,y()}function P(o){if(T(o)||r.value?.state!=="preperation"){S(o);return}o.checked=!0,y()}function T(o){return["retracted","approved"].includes(o.status)}function S(o){o.checked=!1,y()}function F(){r?.value?.samples?.forEach(o=>c.value?P(o):S(o)),y()}function z(){return w().map(o=>({sampleUid:o.uid,shipedSampleUid:void 0,analyses:[]}))}let f=_(!1),v=_(!1);function y(){f.value=!1,v.value=!1;const o=w();o.length!==0&&(o.every(s=>["referred","paired"].includes(s.status??""))&&(f.value=!0),o.every(s=>s.status==="referred")&&(v.value=!0))}const G=R(()=>!["cancelled","dispatched"].includes(r.value?.state??"")),{manageSamples:J}=le(),C=o=>{const s=z();J(r?.value?.uid,s,o)};return(o,s)=>{const O=V("font-awesome-icon"),H=V("router-link"),K=D("motion-slide-left"),Q=D("motion-slide-right");return l(),d("div",de,[ce,a((l(),d("div",pe,[a(e("form",ue,[e("div",me,[e("label",he,[ye,a(e("select",{name:"laboratory_uid","onUpdate:modelValue":s[0]||(s[0]=t=>m.laboratoryUid=t),class:"form-input mt-1 block w-full py-1"},[(l(!0),d(A,null,I(n(u).laboratories,t=>(l(),d("option",{key:t.uid,value:t.uid},p(t.name),9,_e))),128))],512),[[Z,m.laboratoryUid]])]),e("label",be,[fe,a(e("input",{type:"text",class:"form-input mt-1 block w-full py-1","onUpdate:modelValue":s[1]||(s[1]=t=>m.courier=t)},null,512),[[ee,m.courier]])]),e("div",ve,[B(n(q),{onClick:s[2]||(s[2]=b(t=>$(),["prevent"])),color:"sky-800",class:"p-1"},{default:M(()=>[E("Apply")]),_:1})])])],512),[[i,!h.value&&!n(u).shipment?.incoming]]),a(e("p",null,"updating ...",512),[[i,h.value]]),e("div",null,[e("button",{onClick:s[3]||(s[3]=b(t=>k(),["prevent"])),class:"px-1 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Refresh ")])])),[[i,G.value],[K]]),ge,g(" Sampe Table View "),e("div",xe,[e("div",ke,[e("table",we,[e("thead",null,[e("tr",null,[a(e("th",Se,[a(e("input",{type:"checkbox",class:"",onChange:s[4]||(s[4]=t=>F()),"onUpdate:modelValue":s[5]||(s[5]=t=>te(c)?c.value=t:c=t)},null,544),[[j,n(c)]])],512),[[i,n(r)?.state==="preperation"]]),Ce,Ue,a(e("th",Re," Exernal SID ",512),[[i,n(r)?.incoming]]),Ve,De,Ae,Ie,g(' <th class="px-1 py-1 border-b-2 border-gray-300"></th> ')])]),e("tbody",Be,[(l(!0),d(A,null,I(n(r)?.shippedSamples,t=>a((l(),d("tr",{key:t.sampleUid},[a(e("td",Me,[a(e("input",{type:"checkbox",class:"","onUpdate:modelValue":U=>t.checked=U,onChange:s[6]||(s[6]=U=>N())},null,40,Ee),[[j,t.checked]])],512),[[i,n(r)?.state==="preperation"]]),e("td",je,[t.sample?.priority??0>0?(l(),d("span",{key:0,class:se(["font-small",{"text-orange-600":t.sample?.priority??0>1}])},[B(O,{icon:"fa-star"})],2)):g("v-if",!0)]),e("td",qe,[e("div",$e,[t.sample?.analysisRequest?.patient?.uid?(l(),oe(H,{key:0,to:{name:"sample-detail",params:{patientUid:t.sample?.analysisRequest?.patient?.uid,sampleUid:t.sample?.uid}}},{default:M(()=>[E(p(t.sample?.sampleId),1)]),_:2},1032,["to"])):(l(),d("div",Le,p(t.sample?.sampleId),1))])]),a(e("td",Ne,[e("div",null,p(t.extSampleId),1)],512),[[i,n(r)?.incoming]]),e("td",Pe,[e("div",null,p(t.sample?.analysisRequest?.clientRequestId),1)]),e("td",Te,[e("div",null,p(t.sample?.dateCollected),1)]),Fe,e("td",ze,[e("button",Ge,p(t.sample?.status||"unknown"),1)])])),[[Q]])),128))])])])]),e("section",Je,[a(e("button",{onClick:s[7]||(s[7]=b(t=>C("recover"),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Remove ",512),[[i,n(f)]]),a(e("button",{onClick:s[8]||(s[8]=b(t=>C("recall"),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Pair ",512),[[i,n(v)]])])])}}}),Xe=ne(Oe,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/shipment/_id/ShipmentSamples.vue"]]);export{Xe as default};
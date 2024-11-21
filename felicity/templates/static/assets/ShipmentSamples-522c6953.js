import{d as O,J as H,r as _,p as U,n as K,m as Q,x as R,o as l,c as d,e as a,L as i,b as e,F as D,C as V,t as p,f as n,ad as W,v as X,g as Y,z as A,A as I,w as b,i as Z,ae as B,G as ee,B as te,y as se,j as oe,_ as ae,k as re}from"./index-48799f0c.js";import{u as ne}from"./shipment-6bc7db64.js";import{u as le}from"./shipment-fb777d71.js";const ie={class:""},de=e("hr",{class:"mt-4"},null,-1),ce={class:"flex justify-between items-center"},pe={action:"post",class:"p-1"},ue={class:"flex justify-start items-center mb-4"},me={class:"flex justify-between items-center"},he=e("span",{class:"text-gray-700 mr-2 whitespace-nowrap"},"Reference Laboratory",-1),ye=["value"],_e={class:"flex justify-between items-center ml-4"},be=e("span",{class:"text-gray-700 mr-2"},"Courier",-1),fe={class:"ml-6 mt-2"},ve=e("hr",{class:"mb-4"},null,-1),ge={class:"overflow-x-auto"},xe={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},ke={class:"min-w-full"},we={class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},Se=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null,-1),Ce=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}," Sample ID ",-1),Ue={class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},Re=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}," Client Request Id ",-1),De=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Date Collected ",-1),Ve=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Analysis ",-1),Ae=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Status ",-1),Ie={class:"bg-white"},Be={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Me=["onUpdate:modelValue"],Ee={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},je=e("i",{class:"fa fa-star"},null,-1),qe=[je],$e={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Le={class:"text-sm leading-5 text-gray-800 font-semibold"},Ne={key:1},Pe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Fe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ze=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",null,"tests")],-1),Ge={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Je={type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none"},Oe={class:"my-4"},He=O({__name:"ShipmentSamples",setup(Ke){const M=oe(()=>ae(()=>import("./FelButton-b511bf75.js"),["assets/FelButton-b511bf75.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),u=le(),g=H();let c=_(!1),r=U(()=>u.getShipment);const x=()=>{u.fetchShipmentByUid(g.params.shipmentUid)},m=K({laboratoryUid:void 0,comment:void 0,courier:void 0}),h=_(!1),E=()=>{h.value=!0,u.updateShipment({uid:g.params.shipmentUid,payload:m}).then(()=>{h.value=!1,x()})};function j(){return r.value?.samples?.every(o=>o.checked===!0)}function k(){let o=[];return r.value?.shippedSamples?.forEach(s=>{s?.checked&&o.push(s.sample)}),o}function q(){j()?c.value=!0:c.value=!1,y()}function $(o){if(L(o)||r.value?.state!=="preperation"){w(o);return}o.checked=!0,y()}function L(o){return["retracted","approved"].includes(o.status)}function w(o){o.checked=!1,y()}function N(){r?.value?.samples?.forEach(o=>c.value?$(o):w(o)),y()}function P(){return k().map(o=>({sampleUid:o.uid,shipedSampleUid:void 0,analyses:[]}))}let f=_(!1),v=_(!1);function y(){f.value=!1,v.value=!1;const o=k();o.length!==0&&(o.every(s=>["referred","paired"].includes(s.status??""))&&(f.value=!0),o.every(s=>s.status==="referred")&&(v.value=!0))}const F=U(()=>!["cancelled","dispatched"].includes(r.value?.state??"")),{manageSamples:T}=ne(),S=o=>{const s=P();T(r?.value?.uid,s,o)};return(o,s)=>{const z=Q("router-link"),G=R("motion-slide-left"),J=R("motion-slide-right");return l(),d("div",ie,[de,a((l(),d("div",ce,[a(e("form",pe,[e("div",ue,[e("label",me,[he,a(e("select",{name:"laboratory_uid","onUpdate:modelValue":s[0]||(s[0]=t=>m.laboratoryUid=t),class:"form-input mt-1 block w-full py-1"},[(l(!0),d(D,null,V(n(u).laboratories,t=>(l(),d("option",{key:t.uid,value:t.uid},p(t.name),9,ye))),128))],512),[[W,m.laboratoryUid]])]),e("label",_e,[be,a(e("input",{type:"text",class:"form-input mt-1 block w-full py-1","onUpdate:modelValue":s[1]||(s[1]=t=>m.courier=t)},null,512),[[X,m.courier]])]),e("div",fe,[Y(n(M),{onClick:s[2]||(s[2]=b(t=>E(),["prevent"])),color:"sky-800",class:"p-1"},{default:A(()=>[I("Apply")]),_:1})])])],512),[[i,!h.value&&!n(u).shipment?.incoming]]),a(e("p",null,"updating ...",512),[[i,h.value]]),e("div",null,[e("button",{onClick:s[3]||(s[3]=b(t=>x(),["prevent"])),class:"px-1 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Refresh ")])])),[[i,F.value],[G]]),ve,e("div",ge,[e("div",xe,[e("table",ke,[e("thead",null,[e("tr",null,[a(e("th",we,[a(e("input",{type:"checkbox",class:"",onChange:s[4]||(s[4]=t=>N()),"onUpdate:modelValue":s[5]||(s[5]=t=>Z(c)?c.value=t:c=t)},null,544),[[B,n(c)]])],512),[[i,n(r)?.state==="preperation"]]),Se,Ce,a(e("th",Ue," Exernal SID ",512),[[i,n(r)?.incoming]]),Re,De,Ve,Ae])]),e("tbody",Ie,[(l(!0),d(D,null,V(n(r)?.shippedSamples,t=>a((l(),d("tr",{key:t.sampleUid},[a(e("td",Be,[a(e("input",{type:"checkbox",class:"","onUpdate:modelValue":C=>t.checked=C,onChange:s[6]||(s[6]=C=>q())},null,40,Me),[[B,t.checked]])],512),[[i,n(r)?.state==="preperation"]]),e("td",Ee,[t.sample?.priority??0>0?(l(),d("span",{key:0,class:ee(["font-small",{"text-orange-600":t.sample?.priority??0>1}])},[...qe],2)):te("",!0)]),e("td",$e,[e("div",Le,[t.sample?.analysisRequest?.patient?.uid?(l(),se(z,{key:0,to:{name:"sample-detail",params:{patientUid:t.sample?.analysisRequest?.patient?.uid,sampleUid:t.sample?.uid}}},{default:A(()=>[I(p(t.sample?.sampleId),1)]),_:2},1032,["to"])):(l(),d("div",Ne,p(t.sample?.sampleId),1))])]),a(e("td",Pe,[e("div",null,p(t.extSampleId),1)],512),[[i,n(r)?.incoming]]),e("td",Fe,[e("div",null,p(t.sample?.analysisRequest?.clientRequestId),1)]),e("td",Te,[e("div",null,p(t.sample?.dateCollected),1)]),ze,e("td",Ge,[e("button",Je,p(t.sample?.status||"unknown"),1)])])),[[J]])),128))])])])]),e("section",Oe,[a(e("button",{onClick:s[7]||(s[7]=b(t=>S("recover"),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Remove ",512),[[i,n(f)]]),a(e("button",{onClick:s[8]||(s[8]=b(t=>S("recall"),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Pair ",512),[[i,n(v)]])])])}}}),Ye=re(He,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/shipment/_id/ShipmentSamples.vue"]]);export{Ye as default};

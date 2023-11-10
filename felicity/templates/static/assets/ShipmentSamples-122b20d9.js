import{_ as J,ap as K,D as Q}from"./shipment-53265c2d.js";import{f as W,G as X,r as _,d as D,c as Y,v as Z,aj as R,h as l,k as d,ag as a,u as r,x as e,F as V,ak as A,D as p,B as ee,A as I,al as B,y as g,i as te,s as se,j as oe,_ as ae}from"./_plugin-vue_export-helper-dacf3d65.js";import{u as re}from"./shipment-fb4d3a89.js";import{b as i,d as ne,v as le,a as b,e as M}from"./runtime-dom.esm-bundler-98433118.js";const ie={class:""},de=e("hr",{class:"mt-4"},null,-1),ce={class:"flex justify-between items-center"},pe={action:"post",class:"p-1"},ue={class:"flex justify-start items-center mb-4"},me={class:"flex justify-between items-center"},he=e("span",{class:"text-gray-700 mr-2 whitespace-nowrap"},"Reference Laboratory",-1),ye=["value"],_e={class:"flex justify-between items-center ml-4"},be=e("span",{class:"text-gray-700 mr-2"},"Courier",-1),fe={class:"ml-6 mt-2"},ve=e("hr",{class:"mb-4"},null,-1),ge={class:"overflow-x-auto"},xe={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},ke={class:"min-w-full"},we={class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},Se=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null,-1),Ce=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}," Sample ID ",-1),Ue={class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},De=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}," Client Request Id ",-1),Re=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Date Collected ",-1),Ve=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Analysis ",-1),Ae=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Status ",-1),Ie={class:"bg-white"},Be={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Me=["onUpdate:modelValue"],je={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ee=e("i",{class:"fa fa-star"},null,-1),qe=[Ee],$e={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ne={class:"text-sm leading-5 text-gray-800 font-semibold"},Pe={key:1},Te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Fe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Le={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ze=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",null,"tests")],-1),Ge={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Oe={type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none"},He={class:"my-4"},Je=W({__name:"ShipmentSamples",setup(Ke){const j=X(()=>J(()=>import("./Button-ea0a63f5.js"),["assets/Button-ea0a63f5.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),u=K(),x=Q();let c=_(!1),n=D(()=>u.getShipment);const k=()=>{u.fetchShipmentByUid(x.params.shipmentUid)},m=Y({laboratoryUid:void 0,comment:void 0,courier:void 0}),h=_(!1),E=()=>{h.value=!0,u.updateShipment({uid:x.params.shipmentUid,payload:m}).then(()=>{h.value=!1,k()})};function q(){return n.value?.samples?.every(o=>o.checked===!0)}function w(){let o=[];return n.value?.shippedSamples?.forEach(s=>{s?.checked&&o.push(s.sample)}),o}function $(){q()?c.value=!0:c.value=!1,y()}function N(o){if(P(o)||n.value?.state!=="preperation"){S(o);return}o.checked=!0,y()}function P(o){return["retracted","approved"].includes(o.status)}function S(o){o.checked=!1,y()}function T(){n?.value?.samples?.forEach(o=>c.value?N(o):S(o)),y()}function F(){return w().map(o=>({sampleUid:o.uid,shipedSampleUid:void 0,analyses:[]}))}let f=_(!1),v=_(!1);function y(){f.value=!1,v.value=!1;const o=w();o.length!==0&&(o.every(s=>["referred","paired"].includes(s.status??""))&&(f.value=!0),o.every(s=>s.status==="referred")&&(v.value=!0))}const L=D(()=>!["cancelled","dispatched"].includes(n.value?.state??"")),{manageSamples:z}=re(),C=o=>{const s=F();z(n?.value?.uid,s,o)};return(o,s)=>{const G=Z("router-link"),O=R("motion-slide-left"),H=R("motion-slide-right");return l(),d("div",ie,[de,a((l(),d("div",ce,[a(e("form",pe,[e("div",ue,[e("label",me,[he,a(e("select",{name:"laboratory_uid","onUpdate:modelValue":s[0]||(s[0]=t=>m.laboratoryUid=t),class:"form-input mt-1 block w-full py-1"},[(l(!0),d(V,null,A(r(u).laboratories,t=>(l(),d("option",{key:t.uid,value:t.uid},p(t.name),9,ye))),128))],512),[[ne,m.laboratoryUid]])]),e("label",_e,[be,a(e("input",{type:"text",class:"form-input mt-1 block w-full py-1","onUpdate:modelValue":s[1]||(s[1]=t=>m.courier=t)},null,512),[[le,m.courier]])]),e("div",fe,[ee(r(j),{onClick:s[2]||(s[2]=b(t=>E(),["prevent"])),color:"sky-800",class:"p-1"},{default:I(()=>[B("Apply")]),_:1})])])],512),[[i,!h.value&&!r(u).shipment?.incoming]]),a(e("p",null,"updating ...",512),[[i,h.value]]),e("div",null,[e("button",{onClick:s[3]||(s[3]=b(t=>k(),["prevent"])),class:"px-1 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Refresh ")])])),[[i,r(L)],[O]]),ve,g(" Sampe Table View "),e("div",ge,[e("div",xe,[e("table",ke,[e("thead",null,[e("tr",null,[a(e("th",we,[a(e("input",{type:"checkbox",class:"",onChange:s[4]||(s[4]=t=>T()),"onUpdate:modelValue":s[5]||(s[5]=t=>te(c)?c.value=t:c=t)},null,544),[[M,r(c)]])],512),[[i,r(n)?.state==="preperation"]]),Se,Ce,a(e("th",Ue," Exernal SID ",512),[[i,r(n)?.incoming]]),De,Re,Ve,Ae,g(' <th class="px-1 py-1 border-b-2 border-gray-300"></th> ')])]),e("tbody",Ie,[(l(!0),d(V,null,A(r(n)?.shippedSamples,t=>a((l(),d("tr",{key:t.sampleUid},[a(e("td",Be,[a(e("input",{type:"checkbox",class:"","onUpdate:modelValue":U=>t.checked=U,onChange:s[6]||(s[6]=U=>$())},null,40,Me),[[M,t.checked]])],512),[[i,r(n)?.state==="preperation"]]),e("td",je,[t.sample?.priority??0>0?(l(),d("span",{key:0,class:se(["font-small",{"text-orange-600":t.sample?.priority??0>1}])},qe,2)):g("v-if",!0)]),e("td",$e,[e("div",Ne,[t.sample?.analysisRequest?.patient?.uid?(l(),oe(G,{key:0,to:{name:"sample-detail",params:{patientUid:t.sample?.analysisRequest?.patient?.uid,sampleUid:t.sample?.uid}}},{default:I(()=>[B(p(t.sample?.sampleId),1)]),_:2},1032,["to"])):(l(),d("div",Pe,p(t.sample?.sampleId),1))])]),a(e("td",Te,[e("div",null,p(t.extSampleId),1)],512),[[i,r(n)?.incoming]]),e("td",Fe,[e("div",null,p(t.sample?.analysisRequest?.clientRequestId),1)]),e("td",Le,[e("div",null,p(t.sample?.dateCollected),1)]),ze,e("td",Ge,[e("button",Oe,p(t.sample?.status||"unknown"),1)])])),[[H]])),128))])])])]),e("section",He,[a(e("button",{onClick:s[7]||(s[7]=b(t=>C("recover"),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Remove ",512),[[i,r(f)]]),a(e("button",{onClick:s[8]||(s[8]=b(t=>C("recall"),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Pair ",512),[[i,r(v)]])])])}}}),Ze=ae(Je,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/shipment/_id/ShipmentSamples.vue"]]);export{Ze as default};

import{d as B,s as N,n as A,r as j,q as $,P as y,m as I,o as n,c as u,b as t,e as f,L as x,f as o,F as g,C as b,y as w,z as h,A as P,t as p,G as U,i as k,g as H,B as R,v as C,w as O,h as z,j as S,_ as T,aM as F,k as W}from"./index-dcd7b802.js";import{C as q}from"./index-0e0043e1.js";import{u as G}from"./dashboard-80e69822.js";const J={class:"flex justify-between"},K={class:"flex justify-end align-items-center mt-4 mb-8"},Q=["onClick"],X={key:0,class:"text-start my-4 w-100"},Y=t("h1",{class:"text-xl text-gray-700 font-semibold"},"Instrument Matrix / Load",-1),Z=t("hr",{class:"my-2"},null,-1),ee={key:0},te={key:1,class:"flex justify-start"},se={class:"mr-4 font-bold text-gray-600 text-xl"},oe={class:"font-semibold text-gray-400 text-l"},re=z('<h1 class="mt-8 text-xl text-gray-700 font-semibold">User Matrix / Load</h1><hr class="my-2"><div class="flex flex-wrap justify-start" id="user-matrix"><div><div id="registration"></div></div><div><div id="submission"></div></div><div><div id="verification"></div></div><div><div id="publication"></div></div></div>',3),ae=t("h3",null,"Custom Filter Date Range",-1),ie={action:"post",class:"p-1"},ne={class:"grid grid-cols-2 gap-x-4 mb-4"},le={class:"block col-span-2 mb-2"},de=t("span",{class:"text-gray-700"},"Date From",-1),ce={class:"block col-span-2 mb-2"},ue=t("span",{class:"text-gray-700"},"Date To",-1),me=t("hr",null,null,-1),pe=B({__name:"Resource",setup(ve){const M=S(()=>T(()=>import("./FelModal-80650623.js"),["assets/FelModal-80650623.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),V=S(()=>T(()=>import("./FelLoadingMessage-bdff49d2.js"),["assets/FelLoadingMessage-bdff49d2.js","assets/index-dcd7b802.js","assets/index-a67f0314.css"])),c=G(),{dashboard:r}=N(c),m=A({range:{from:"",to:""}});let l=j(!1);const D=()=>{c.setFilterRange(F(m.range.from),F(m.range.to)),l.value=!1};$(async()=>{_(),c.setShowFilters(!0),c.getResourceStats()}),y(()=>r.value.filterRange.from,(d,s)=>{_(),c.getResourceStats()}),y(()=>r.value.resourceStats?.samples,(d,s)=>{r.value.resourceStats?.samples?.forEach(i=>{let e=[],v=0;i.counts?.forEach(a=>v+=a.count),i.counts?.forEach(a=>{e.push({item:a.group,count:a.count,percent:a.count/v})}),L(e,i.group,i.group)})});const E=d=>{let s=0;return r.value.resourceStats?.instruments?.forEach(e=>s+=e.count),(d/s*100).toFixed(2)+" %"},L=(d,s,i)=>{const e=new q({container:s,autoFit:!0,height:250,width:500,localRefresh:!1});e.coordinate("theta",{radius:.75,innerRadius:.5}),e.data(d),e.scale("percent",{formatter:a=>(a=(a*100).toFixed(2)+"%",a)}),e.tooltip({showTitle:!1,showMarkers:!1}),e.legend(!1),e.interval().position("percent").color("item").label("percent",{layout:[{type:"pie-spider"},{type:"hide-overlap"}],offset:8,labelHeight:38,content:a=>`${a.item} (${a.count})`,labelLine:{style:{lineWidth:.5}}}).adjust("stack"),e.createView().annotation().text({position:["50%","50%"],content:i,style:{fill:"#262626",textAlign:"center"}}),e.interaction("element-active"),e.render()},_=()=>{document.getElementById("user-matrix").innerHTML="";const d=`
      <div>
        <div id="registration"></div>
      </div>
      <div>
        <div id="submission"></div>
      </div>
      <div>
        <div id="verification"></div>
      </div>
      <div>
        <div id="publication"></div>
      </div>
    `;document.getElementById("user-matrix").innerHTML=d};return(d,s)=>{const i=I("VTooltip");return n(),u(g,null,[t("section",J,[f(t("div",K,[(n(!0),u(g,null,b(o(r).filters,(e,v)=>f((n(),w(i,{key:v,placements:["right-start"]},{popper:h(()=>[P(p(o(c).filterToolTip(e)),1)]),default:h(()=>[t("button",{onClick:a=>o(c).setCurrentFilter(e),type:"button",class:U(["px-2 py-1 mr-2 border-gray-800 border text-gray-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",{"bg-sky-800 text-white":o(r).currentFilter===e}])},p(e),11,Q)]),_:2},1024)),[[x,e!==o(r).filters[o(r).filters.length]]])),128)),t("button",{onClick:s[0]||(s[0]=e=>k(l)?l.value=!0:l=!0),class:"ml-4 mr-1 px-2 py-1 border-gray-500 border text-gray-500 rounded-sm transition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none"},p(o(r).filterRange.from)+" - "+p(o(r).filterRange.to),1)],512),[[x,o(r).showFilters]])]),o(r).fetchingResourceStats?(n(),u("div",X,[H(o(V),{message:"fetching resource stats ..."})])):R("",!0),t("section",null,[Y,Z,o(r).resourceStats?.instruments?.length===0?(n(),u("div",ee,"NO DATA")):(n(),u("div",te,[(n(!0),u(g,null,b(o(r).resourceStats?.instruments,e=>(n(),u("div",{key:e.group,class:"flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"},[t("span",se,p(E(e?.count)),1),t("span",oe,p(e.group),1)]))),128))])),re]),o(l)?(n(),w(o(M),{key:1,onClose:s[4]||(s[4]=e=>k(l)?l.value=!1:l=!1),contentWidth:"w-1/4"},{header:h(()=>[ae]),body:h(()=>[t("form",ie,[t("div",ne,[t("label",le,[de,f(t("input",{type:"datetime-local",class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":s[1]||(s[1]=e=>m.range.from=e),placeholder:"Name ..."},null,512),[[C,m.range.from]])]),t("label",ce,[ue,f(t("input",{type:"datetime-local",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[2]||(s[2]=e=>m.range.to=e),placeholder:"Name ..."},null,512),[[C,m.range.to]])])]),me,t("button",{type:"button",onClick:s[3]||(s[3]=O(e=>D(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):R("",!0)],64)}}}),_e=W(pe,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/dashboard/Resource.vue"]]);export{_e as default};

import{d as g,P as x,r as i,o as t,q as k,f as c,c as a,b as e,F as I,p as C,y as A,t as d,x as M,g as m,aP as E,j as u,_,b_ as P,O as D,k as R}from"./index-8a5660e7.js";import{u as V}from"./samples-04831162.js";const F={key:1},L={key:0,class:"flex justify-start mt-4 mr-4"},T={class:""},j=["onClick"],B={class:"flex justify-between items-center space-x-4"},S={class:"flex-1 min-w-0"},N={class:"text-sm font-medium text-gray-900 truncat"},O={class:"text-sm text-gray-500 truncat"},G=["onClick"],J={class:"ml-4 w-full"},U=e("h5",null,"Json Impress",-1),$=e("hr",{class:"mb-2"},null,-1),q={key:1,class:"mt-4 text-red-500"},z=g({__name:"Impress",setup(Q){const p=u(()=>_(()=>import("./FelLoadingMessage-160ea06c.js"),["assets/FelLoadingMessage-160ea06c.js","assets/index-8a5660e7.js","assets/index-227a7d92.css"])),f=u(()=>_(()=>import("./FelJsonPreViewer-669c1887.js"),["assets/FelJsonPreViewer-669c1887.js","assets/index-8a5660e7.js","assets/index-227a7d92.css","assets/FelJsonPreViewer-b8ce05bb.css"])),{withClientQuery:h}=D(),v=x(),l=i(!1),r=i([]),o=i({});(()=>{l.value=!0,h(P,{uids:[v?.params?.sampleUid]},"impressReportsMeta").then(n=>{r.value=n}).finally(()=>{l.value=!1})})();const{downloadImpress:y}=V(),w=async n=>await y(n);return(n,K)=>l.value?(t(),k(c(p),{key:0,message:"Loading your reports ..."},null,8,["message"])):(t(),a("section",F,[r.value.length>0?(t(),a("div",L,[e("ul",T,[(t(!0),a(I,null,C(r.value,s=>(t(),a("li",{key:s?.uid,class:A(["mb-2 p-3 rounded-sm border w-96",[{"border-gray-300 bg-white":s?.uid!==o.value?.uid},{"border-3 border-blue-800 bg-green-200":s?.uid===o.value?.uid}]]),onClick:b=>o.value=s},[e("div",B,[e("div",S,[e("p",N,d(s.state),1),e("p",O," Generated on "+d(s.createdAt),1),M(` <FontAwesomeIcon class="text-red-500 mr-2" icon="fa-message" />\r
                <FontAwesomeIcon class="text-red-500" icon="fa-envelope" /> `)]),e("span",{class:"flex justify-center items-center animate-bounce h-8 w-8 rounded-full bg-white border border-gray-200 drop-shadow-sm",onClick:b=>w(s.uid)},[m(c(E),{class:"text-blue-500",icon:"fa-download"})],8,G)])],10,j))),128))]),e("div",J,[U,$,m(c(f),{data:o.value,wrapper:"max-h-96 overflow-y-scroll"},null,8,["data"])])])):(t(),a("div",q,"This sample has no Impress Reports"))]))}}),Y=R(z,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/sample/_id/Impress.vue"]]);export{Y as default};
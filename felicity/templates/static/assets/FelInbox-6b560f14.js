import{d as g,r as x,p as w,o as s,c as l,b as t,t as i,y as n,G as u,F as c,C as f,h as k,k as K}from"./index-7210a26e.js";const q={class:"min-h-[450px] flex flex-col"},S={class:"text-xl text-gray-700 font-semibold p-4 border-b"},C={class:"flex flex-1 overflow-hidden"},B={class:"divide-y"},I=k('<div class="flex items-start space-x-4"><div class="w-8 h-8 bg-gray-200 rounded-full"></div><div class="flex-1"><div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div><div class="h-3 bg-gray-200 rounded w-1/2"></div></div></div>',1),F=[I],H=["onClick"],N={class:"flex items-start space-x-4"},z={key:0,class:"inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-gray-600 rounded-full"},L={class:"flex-1 min-w-0"},P={class:"flex justify-between"},j={class:"text-sm font-medium text-gray-900 truncate"},D={key:0,class:"text-xs font-medium text-orange-600"},V={class:"mt-1 text-sm text-gray-500 truncate"},A={class:"flex-1 overflow-y-auto bg-white"},E={key:0,class:"p-6"},M={class:"mb-4 border-b pb-4"},T={class:"text-2xl font-bold text-gray-900 mb-2"},W={key:0,class:"text-sm font-medium text-orange-600"},$=["innerHTML"],G={key:1,class:"h-full flex items-center justify-center text-gray-500"},J=g({__name:"FelInbox",props:{items:{type:Array,required:!0,default:()=>[]},title:{type:String,required:!1,default:"Inbox"},titleKey:{type:String,required:!1,default:"title"},bodyKey:{type:String,required:!1,default:"body"},statusKey:{type:String,required:!1,default:"status"},showNumbers:{type:Boolean,required:!1,default:!0},leftPanelWidth:{type:String,required:!1,default:"w-1/5"},sanitizeHtml:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1}},emits:["select"],setup(y,{emit:m}){const h=y,p=m,a=x(null),v=e=>{a.value=e,p("select",e)},_=(e,r=100)=>(h.sanitizeHtml&&(e=e.replace(/<[^>]*>/g,"")),e.length>r?`${e.substring(0,r)}...`:e),b=w(()=>Array(3).fill(null));return(e,r)=>(s(),l("div",q,[t("h1",S,i(e.title),1),t("div",C,[n(" List Panel "),t("div",{class:u([e.leftPanelWidth,"border-r overflow-y-auto"])},[t("div",B,[e.loading?(s(!0),l(c,{key:0},f(b.value,(o,d)=>(s(),l("div",{key:d,class:"p-4 animate-pulse"},[...F]))),128)):(s(!0),l(c,{key:1},f(e.items,(o,d)=>(s(),l("div",{key:o.uid,onClick:O=>v(o),class:u(["p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-150",a.value?.uid===o.uid?"bg-blue-50":""])},[t("div",N,[e.showNumbers?(s(),l("span",z,i(d+1),1)):n("v-if",!0),t("div",L,[t("div",P,[t("h2",j,i(o[e.titleKey]),1),o[e.statusKey]?(s(),l("span",D,i(o[e.statusKey]),1)):n("v-if",!0)]),t("p",V,i(_(o[e.bodyKey])),1)])])],10,H))),128))])],2),n(" Content Panel "),t("div",A,[a.value?(s(),l("article",E,[t("div",M,[t("h2",T,i(a.value[e.titleKey]),1),a.value[e.statusKey]?(s(),l("span",W,i(a.value[e.statusKey]),1)):n("v-if",!0)]),t("div",{class:"prose max-w-none",innerHTML:(e.sanitizeHtml,a.value[e.bodyKey])},null,8,$)])):(s(),l("div",G," Select an item to view its contents "))])])]))}}),R=K(J,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/ui/inbox/FelInbox.vue"]]);export{R as default};

import{R,ac as w,I as g,S as r,ab as B}from"./index-dcd7b802.js";import{f as p,g as C,S as y,h as A,i as x,j as v}from"./analyses.mutations-ac82bb91.js";function D(){const n=R(),a=w(),{withClientMutation:o}=g(),{toastInfo:i}=B(),m=async t=>{try{await r.fire({title:"Are you sure?",text:"You want to cancel these analytes",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, cancel now!",cancelButtonText:"No, do not cancel!"}).then(async s=>{s.isConfirmed&&o(p,{analyses:t},"cancelAnalysisResults").then(e=>{n.updateAnalysesResultsStatus(e.results),a.updateWorksheetResultsStatus(e.results)})})}catch{}},d=async t=>{try{await r.fire({title:"Are you sure?",text:"You want to reinstate analystes",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, reinstate now!",cancelButtonText:"No, do not reinstate!"}).then(async s=>{s.isConfirmed&&o(C,{analyses:t},"reInstateAnalysisResults").then(e=>{n.updateAnalysesResultsStatus(e.results),a.updateWorksheetResultsStatus(e.results)})})}catch{}};function f(t){t.status==="pending"&&(t.result=t.editResult,o(y,[{uid:t.uid,result:t.result}],"submitAnalysisResults").then(s=>{i(s.message),n.backgroundProcessing([{uid:t.uid,result:t.result}],void 0,"submitting"),a.backgroundProcessing([{uid:t.uid,result:t.result}],void 0,"submitting")}))}return{submitResult:f,submitResults:async(t,s,e)=>{try{await r.fire({title:"Are you sure?",text:"You want to submit these results",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, submit now!",cancelButtonText:"No, cancel submission!"}).then(async u=>{u.isConfirmed&&o(y,{analysisResults:t,sourceObject:s,sourceObjectUid:e},"submitAnalysisResults").then(l=>{i(l.message),n.backgroundProcessing(t,s==="sample"?e:void 0,"submitting"),a.backgroundProcessing(t,s==="worksheet"?e:void 0,"submitting")})})}catch{}},cancelResults:m,reInstateResults:d,approveResults:async(t,s,e)=>{try{await r.fire({title:"Are you sure?",text:"You want to approve these results",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, approve now!",cancelButtonText:"No, cancel approval!"}).then(async u=>{u.isConfirmed&&o(A,{analyses:t,sourceObject:s,sourceObjectUid:e},"verifyAnalysisResults").then(l=>{i(l.message);const c=t.map(h=>({uid:h}));n.backgroundProcessing(c,s==="sample"?e:void 0,"approving"),a.backgroundProcessing(c,s==="worksheet"?e:void 0,"approving")})})}catch{}},retractResults:async t=>{try{await r.fire({title:"Are you sure?",text:"You want to retract these results",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, retract now!",cancelButtonText:"No, cancel retraction!"}).then(async s=>{s.isConfirmed&&o(x,{analyses:t},"retractAnalysisResults").then(e=>{n.updateAnalysesResults(e.results),a.updateWorksheetResultsStatus(e.results)})})}catch{}},retestResults:async t=>{try{await r.fire({title:"Are you sure?",text:"You want to retest these results",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, retest now!",cancelButtonText:"No, cancel retesting!"}).then(async s=>{s.isConfirmed&&o(v,{analyses:t},"retestAnalysisResults").then(e=>n.updateAnalysesResults(e.results))})}catch{}}}}export{D as u};

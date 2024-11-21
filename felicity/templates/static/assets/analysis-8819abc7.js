import{I as d,Q as c,ah as r,ai as o,aj as f,ak as h,al as u,am as y,an as p,ao as g,ap as A,aq as m,ar as S}from"./index-48799f0c.js";const{withClientQuery:t}=d(),C=c("analysis",{state:()=>({codingStandards:[],fetchingCodingStandards:!1,analysesCategories:[],analysesServices:[],analysesMappings:[],analysesProfiles:[],analysesTemplates:[],profileMappings:[],qcLevels:[],qcTemplates:[],rejectionReasons:[]}),getters:{getCodingStandards:s=>s.codingStandards,getAnalysesCategories:s=>s.analysesCategories,getAnalysesServices:s=>{const e=s.analysesServices;if(e?.length>0){const i=e?.reduce((n,l)=>{const a=l?.category?.name||"No Category";return n[a]=n[a]||[],n[a].push(l),n},{});return Object.entries(i||{}).sort()}else return[]},getAnalysesServicesSimple:s=>s.analysesServices,analysesMapings:s=>s.analysesMappings,getAnalysesProfiles:s=>s.analysesProfiles,getAnalysesTemplates:s=>s.analysesTemplates,profileMapings:s=>s.profileMappings,getQCLevels:s=>s.qcLevels,getQCTemplates:s=>s.qcTemplates,getRejectionReasons:s=>s.rejectionReasons},actions:{async fetchCodingStandards(){this.fetchingCodingStandards=!0,await t(r,{},"codingStandardAll").then(s=>{this.fetchingCodingStandards=!1,this.codingStandards=s}).catch(s=>this.fetchingCodingStandards=!1)},updateCodingStandard(s){const e=this.codingStandards.findIndex(i=>i.uid===s?.uid);e>-1&&(this.codingStandards[e]=s)},addCodingStandard(s){this.codingStandards?.unshift(s)},async fetchAnalysesCategories(){await t(o,{},"analysisCategoryAll").then(s=>this.analysesCategories=s)},updateAnalysisCategory(s){const e=this.analysesCategories.findIndex(i=>i.uid===s.uid);this.analysesCategories[e]=s},addAnalysisCategory(s){this.analysesCategories?.unshift(s)},async fetchAnalysesServices(s){await t(f,s,"analysisAll").then(e=>this.analysesServices=e.items)},updateAnalysisService(s){const e=this.analysesServices.findIndex(i=>i.uid===s.uid);this.analysesServices[e]=s},addAnalysesService(s){this.analysesServices?.unshift(s)},async fetchAnalysesProfilesAndServices(){await t(h,{},void 0).then(s=>{this.analysesProfiles=s.profileAll,this.analysesServices=s.analysisAll?.items})},async fetchAnalysesMappings(s){await t(u,{uid:s},"analysisMappingsByAnalysis").then(e=>this.analysesMappings=e)},addAnalysesMapping(s){this.analysesMappings?.unshift(s)},updateAnalysesMapping(s){const e=this.analysesMappings.findIndex(i=>i.uid===s.uid);this.analysesMappings[e]=s},async fetchAnalysesProfiles(){await t(y,{},"profileAll").then(s=>this.analysesProfiles=s)},updateAnalysesProfile(s){const e=this.analysesProfiles.findIndex(i=>i.uid===s.uid);this.analysesProfiles[e]=s},addAnalysisProfile(s){this.analysesProfiles.unshift(s)},async fetchProfileMappings(s){await t(p,{uid:s},"profileMappingsByProfile").then(e=>this.profileMappings=e)},addProfileMapping(s){this.profileMapings?.unshift(s)},updateProfileMapping(s){const e=this.profileMapings.findIndex(i=>i.uid===s.uid);this.profileMapings[e]=s},async fetchAnalysesTemplates(){await t(g,{},"analysisTemplateAll").then(s=>this.analysesTemplates=s)},updateAnalysesTemplate(s){const e=this.analysesTemplates.findIndex(i=>i.uid===s.uid);this.analysesTemplates[e]=s},addAnalysisTemplate(s){this.analysesTemplates.unshift(s)},async fetchQCLevels(){await t(A,{},"qcLevelAll").then(s=>this.qcLevels=s)},updateQcLevel(s){const e=this.qcLevels.findIndex(i=>i.uid===s.uid);this.qcLevels[e]=s},addQcLevel(s){this.qcLevels.unshift(s)},async fetchQCTemplates(){await t(m,{},"qcTemplateAll").then(s=>{this.qcTemplates=s.map(e=>(e.qcLevels=e?.qcLevels||[],e.departments=e?.departments||[],e))})},updateQcTemplate(s){const e=this.qcTemplates.findIndex(i=>i.uid===s.uid);s.qcLevels=s?.qcLevels||[],s.departments=s?.departments||[],this.qcTemplates[e]=s},addQcTemplate(s){s.qcLevels=s?.qcLevels||[],s.departments=s?.departments||[],this.qcTemplates.unshift(s)},addResultOption(s){this.analysesServices?.forEach(e=>{e?.uid==s?.analysisUid&&(e?.resultOptions?e?.resultOptions?.push(s):e.resultOptions=[s])})},updateResultOption(s){this.analysesServices?.forEach(e=>{if(e?.uid==s?.analysisUid){const i=e.resultOptions.findIndex(n=>n.uid===s.uid);e.resultOptions[i]=s}})},addAnalysisInterim(s){this.analysesServices?.forEach(e=>{e?.uid==s?.analysisUid&&(e?.interims?e?.interims?.push(s):e.interims=[s])})},updateAnalysisInterim(s){this.analysesServices?.forEach(e=>{if(e?.uid==s?.analysisUid){const i=e.interims.findIndex(n=>n.uid===s.uid);e.interims[i]=s}})},AddAnalysisCorrectionFactor(s){this.analysesServices?.forEach(e=>{e?.uid==s?.analysisUid&&(e?.correctionFactors?e?.correctionFactors?.push(s):e.correctionFactors=[s])})},updateAnalysisCorrectionFactor(s){this.analysesServices?.forEach(e=>{if(e?.uid==s?.analysisUid){const i=e.correctionFactors.findIndex(n=>n.uid===s.uid);e.correctionFactors[i]=s}})},addAnalysisDetectionLimit(s){this.analysesServices?.forEach(e=>{e?.uid==s?.analysisUid&&(e?.detectionLimits?e?.detectionLimits?.push(s):e.detectionLimits=[s])})},updateAnalysisDetectionLimit(s){this.analysesServices?.forEach(e=>{if(e?.uid==s?.analysisUid){const i=e.detectionLimits.findIndex(n=>n.uid===s.uid);e.detectionLimits[i]=s}})},addAnalysisUncertainty(s){this.analysesServices?.forEach(e=>{e?.uid==s?.analysisUid&&(e?.uncertainties?e?.uncertainties?.push(s):e.uncertainties=[s])})},updateAnalysisUncertainty(s){this.analysesServices?.forEach(e=>{if(e?.uid==s?.analysisUid){const i=e.uncertainties.findIndex(n=>n.uid===s.uid);e.uncertainties[i]=s}})},addAnalysisSpecification(s){this.analysesServices?.forEach(e=>{e?.uid==s?.analysisUid&&(e?.specifications?e?.specifications?.push(s):e.specifications=[s])})},updateAnalysisSpecification(s){this.analysesServices?.forEach(e=>{if(e?.uid==s?.analysisUid){const i=e.specifications.findIndex(n=>n.uid===s.uid);e.specifications[i]=s}})},async fetchRejectionReasons(){await t(S,{},"rejectionReasonsAll").then(s=>this.rejectionReasons=s)},updateRejectionReason(s){const e=this.rejectionReasons.findIndex(i=>i.uid===s.uid);this.rejectionReasons[e]=s},addRejectionReason(s){this.rejectionReasons.unshift(s)}}});export{C as u};

"use strict";(self.webpackChunkqaautomater=self.webpackChunkqaautomater||[]).push([[725],{45374:(e,t,a)=>{a.d(t,{p:()=>i});var i={EnvironmentList:[],SelectedEnvironment:"",ComponentList:[],SelectedComponent:"",ThreadCount:1,TestingType:"Integration Testing",ReportingInDashboard:"No",ListOfTestScripts:[],SelectedTestScripts:[],TotalPassFailInLastXResults:[],BarChartDataForComponent:[],ThreadList:[1,2,3,4,5,6,7,8,9,10],AssertionResultsForAllResults:{},ResponseDataForAllResults:{},AllConfigData:{},ExecutionTimeGraphXaxis:[],ExecutionTimeGraphYaxis:[[]],ExecutionTimeColor:["#F39C12"],IsGlobalError:!1,GlobalErrorMessage:"",ListOfTestSuite:[],SelectedTestSuite:"",IsTestSuiteSelected:!1,IsTestSuiteSelected:!1,IsThisReportForExistingSuite:!1,TestSuiteExecutionDuration:"",TestSuiteExecutionFrom:"",TestSuiteReExecutionHistory:"0",TestsuiteReportEnv:"",TestsuiteNameForReports:"",ExecutedByTestSuite:"",SelectedExecutionDateandTime:"",ExistingTestSuiteName:""}},26518:(e,t,a)=>{a.d(t,{Z:()=>u});var i=a(45374),s=a(10123),o=a(58390),r=a(92234),n=a(71121),l=a(95831),c=a(72638),d=a(79696);const u=new class{async apiExecutionLabPageLoadData(){try{var e=null;o.D.isDemo||(e=await n.Z.readConfigurationFile(),l.M.AllConfigData=await e),await this.renderEnvironment(await e),await this.renderAllComponent(),await this.renderThreadCount(),i.p.ListOfTestSuite=await s.Z.getTestSuiteFile("Api")}catch(t){}}async renderEnvironment(e){await n.Z.updateEnvironmentTableData(e),i.p.EnvironmentList=l.M.EnvironmentList,i.p.SelectedEnvironment=l.M.DefaultSelectedEnvironment}async renderAllComponent(){if(o.D.isDemo)i.p.ComponentList=["All","LandingPage","SignIn","ProductList","ShoppingCart","BookingSummary"],i.p.SelectedComponent="All";else try{var e=await localStorage.getItem("UserSelectedAccount"),t=await o.D.backendAPI;"remote"===o.D.backendServiceAt&&(t=await o.D.remoteBackendAPI);var a={Authorization:await o.Q.userToken,userEmail:await o.Q.userEmail},s=await d.Z.get(t+"components/project/"+e+"/testingtype/Api",await a),r=await s.data;if(r.length>0){var n=await this.setComponentAsSelectBox(await r);i.p.ComponentList=await n;var l=[];l.push(await n[0]),i.p.SelectedComponent=await l}else i.p.ComponentList=[],i.p.SelectedComponent=[]}catch(c){i.p.ComponentList=[],i.p.SelectedComponent=[]}}async setComponentAsSelectBox(e){try{var t=[],a={};await e.length>0&&(a={value:"Select All",label:"Select All"},t.push(await a));for(let s=0;s<await e.length;s++){var i=await e[s];a={},a={value:await i,label:await i},t.push(await a)}}catch(s){}return await t}async renderThreadCount(){i.p.ThreadList.length>0&&(i.p.ThreadCount=i.p.ThreadList[0])}async getAllTestScriptsfromComponent(e){var t=[];if(o.D.isDemo)return t;try{var a=await localStorage.getItem("UserSelectedAccount"),s=o.D.backendAPI;"remote"===await o.D.backendServiceAt&&(s=o.D.remoteBackendAPI);var r={};r.components=await e;var n={Authorization:await o.Q.userToken,userEmail:await o.Q.userEmail},l=await d.Z.post(await s+"testsuite/project/"+await a+"/testingtype/Api/fetchtestscriptsfromcomponent",await n,await r),c=await l.data;t=await c}catch(u){t=[]}i.p.ListOfTestScripts=await t}async executeAPITestScripts(e,t,a,s,n,l,u){var p=i.p.ListOfTestScripts,w=0,m=0,h=[],S={},x={},g=[],T={},v="Pass";if(o.D.isDemo){var D={};for(let e=0;e<await n.length;e++){var y=new Date,E=await n[e],A=await r.Z.getNumberFromRange(0,1);v="Pass";var f=[{id:1,expression:"ResponseCode",function:"ShouldBe",expected:200,actual:200}];D.ResponseCode=200,D.ResponseHeader={headkerKey:"Hope you are enjoing QAautoMater"},D.ResponseBody={message:"I m just hradcoded data , on real data you will get whatever you sent and whatever you get from the server"},1===A&&(v="Fail",f=[{id:1,expression:"ResponseCode",function:"ShouldBe",expected:201,actual:200}]),p[E-1].status=v,i.p.AssertionResultsForAllResults[E]=await f,i.p.ResponseDataForAllResults[E]=await D;var C=((new Date).getTime()-y.getTime())/1e3;D["Execution Time"]=await C+" Seconds"}}else{var F=await localStorage.getItem("UserSelectedAccount"),b={};b.environment=await e,b.suiteName=await l,b.threadCount=await t,b.testingType=await a,b.reportInDashBoard=await s,b.existingSuiteName=await u;var R=[];for(let e=0;e<await n.length;e++){var I=await p[Number(await n[await e])-1];R.push(await I)}b.testscriptforExecution=await R;var N=await o.D.backendAPI;"remote"===o.D.backendServiceAt&&(N=await o.D.remoteBackendAPI);var k={Authorization:await o.Q.userToken,userEmail:await o.Q.userEmail},P=await d.Z.post(N+"apiexecutor/project/"+F,await k,await b);if(T=await P.data,i.p.GlobalErrorMessage=await T.globalError,""!==await T.globalError)return void(i.p.IsGlobalError=!0);i.p.IsGlobalError=!1,i.p.GlobalErrorMessage="";for(let e=0;e<await n.length;e++)p[Number(await n[await e])-1].status=await T.listOfTestScipts[e].status,i.p.AssertionResultsForAllResults[await n[e]]=await T.testscriptAssertionData[e+1],i.p.ResponseDataForAllResults[await n[e]]=await T.testscriptResponseData[e+1]}i.p.ListOfTestScripts=p;for(let i=0;i<p.length;i++){var L=await p[i].component;"Pass"===(v=await p[i].status)?(w+=1,void 0===S[L]?S[L]=1:S[L]=S[L]+1):"Fail"===v&&(m+=1,void 0===x[L]?x[L]=1:x[L]=x[L]+1)}await new Promise((e=>setTimeout(e,2e3))),h.push(w),h.push(m),i.p.TotalPassFailInLastXResults=h,g.push(S),g.push(x),i.p.BarChartDataForComponent=g;var Z=await T.executionTimeForComponent,B=await c.Z.getAllKeyValueInJsonArrayFromJsonObject(await Z);i.p.ExecutionTimeGraphXaxis=await await B.key;var j=[];j.push(await B.value),i.p.ExecutionTimeGraphYaxis=await j}async createTestSuiteForSpecificComponent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;var a=[],i={};if(o.D.isDemo){var s=await r.Z.getNumberFromRange(10,20);for(let o=0;o<s;o++)(i={id:0,component:await e,testid:0,testname:"",status:""}).id=t,i.testid="QA-"+await r.Z.getNumberFromRange(100,500),i.testname=" This is test case No "+(o+1),i.status="",a.push(i),t+=1}else{var n=await localStorage.getItem("UserSelectedAccount"),l=await c.Z.getListOfTestIdAndTestName(n,"Api",e);for(let s=0;s<l.length;s++)i={id:t,component:await e,testid:await l[s].testid,testname:await l[s].testname,status:""},a.push(i),t+=1}return a}async createTestSuiteForAllComponent(e){var t=[],a=1;for(let s=1;s<await e.length;s++){var i=await this.createTestSuiteForSpecificComponent(await e[s],a);a=i.length+a,t=t.concat(i)}return t}async updateAssertionTable(e,t){for(let l=0;l<await t.length;l++){var a=await t[l].expression,i=await t[l].function,o=await c.Z.createNameSpaceFromExpression(await a),r=await c.Z.getValueFromJsonUsingNameSpace(await e,o);void 0===r&&(r="Key not found!"),i.toString().toLowerCase().includes("length")&&(r=await r.length),t[l].actual="object"===typeof r?await JSON.stringify(await r):await r;var n=await t[l].expected;t[l].expected=await s.Z.getSessionVariableValue(await n)}return t}async updateAssertionTableForAllDataset(e,t){var a=await e.length+1;for(let s=0;s<await t.length;s++){var i={id:await a,expression:await t[s].expression,function:await t[s].function,expected:await t[s].expected,actual:await t[s].actual};e.push(await i),a+=1}return e}async getTestSuiteNameFromtheEnvirinment(e){if(await o.D.isDemo)return await new Promise((e=>setTimeout(e,3e3))),[];try{var t=await localStorage.getItem("UserSelectedAccount"),a=await o.D.backendAPI;"remote"===o.D.backendServiceAt&&(a=await o.D.remoteBackendAPI);var i={};i.envName=await e;var s={Authorization:await o.Q.userToken,userEmail:await o.Q.userEmail},r=await d.Z.post(a+"configuration/project/"+await t+"/testingtype/Api/gettestsuitenamelist",await s,await i),n=await r.data;return await n}catch(l){}return[]}async getExecutedByList(e,t){if(await o.D.isDemo)return await new Promise((e=>setTimeout(e,3e3))),[];try{var a=await localStorage.getItem("UserSelectedAccount"),i=await o.D.backendAPI;"remote"===o.D.backendServiceAt&&(i=await o.D.remoteBackendAPI);var s={};s.envName=await e,s.testSuiteName=await t;var r={Authorization:await o.Q.userToken,userEmail:await o.Q.userEmail},n=await d.Z.post(i+"configuration/project/"+await a+"/testingtype/Api/getexecutedbylist",await r,await s),l=await n.data;return await l}catch(c){}return[]}async getExecutedExecutionDateByList(e,t,a){if(await o.D.isDemo)return await new Promise((e=>setTimeout(e,3e3))),[];try{var i=await localStorage.getItem("UserSelectedAccount"),s=await o.D.backendAPI;"remote"===o.D.backendServiceAt&&(s=await o.D.remoteBackendAPI);var r={};r.envName=await e,r.testSuiteName=await t,r.executedBy=await a;var n={Authorization:await o.Q.userToken,userEmail:await o.Q.userEmail},l=await d.Z.post(s+"configuration/project/"+await i+"/testingtype/Api/getexecutiondateandtime",await n,await r),c=await l.data;return await c}catch(u){}return[]}async getReportsDataForTestSuite(e,t,a){if(await o.D.isDemo)return await new Promise((e=>setTimeout(e,3e3))),[];try{var i=await localStorage.getItem("UserSelectedAccount"),s=await o.D.backendAPI;"remote"===o.D.backendServiceAt&&(s=await o.D.remoteBackendAPI);var r={};r.envName=await e,r.testSuiteName=await t,r.executionTime=await a;var n={Authorization:await o.Q.userToken,userEmail:await o.Q.userEmail},l=await d.Z.post(s+"configuration/project/"+await i+"/testingtype/Api/gettestsuitereports",await n,await r),c=await l.data;return await c}catch(u){}return[]}}},9370:(e,t,a)=>{a.d(t,{Fp:()=>n,Rh:()=>c,dI:()=>l,r$:()=>r});var i=a(94118),s=(a(44),a(14501)),o=a(46417),r=[{dataField:"id",text:"#",headerStyle:{width:"50px"}},{dataField:"component",text:"Component",headerStyle:{width:"110px"},filter:(0,i.DN)({placeholder:"Search",caseSensitive:!1})},{dataField:"testid",text:"Test Id",headerStyle:{width:"80px"},filter:(0,i.DN)({delay:1e3,className:"test-classname",placeholder:"Search"})},{dataField:"testname",text:"Test name",headerStyle:{width:"150px"},filter:(0,i.DN)({delay:1e3,className:"test-classname",placeholder:"Search"})},{dataField:"status",text:"Status",headerStyle:{width:"80px"},style:e=>"Fail"===e?{backgroundColor:"#F38295"}:"Pass"===e?{backgroundColor:"#17E798"}:void 0,filter:(0,i.DN)({className:"test-classname",placeholder:"Status"})}],n=[{dataField:"id",text:"#",headerStyle:{width:"30px"}},{dataField:"expression",text:"Expression",headerStyle:{width:"140px"}},{dataField:"function",text:"Function",headerStyle:{width:"100px"}},{dataField:"expected",text:"Expected",headerStyle:{width:"100px"}},{dataField:"actual",text:"Actual",headerStyle:{width:"100px"}}],l=[{dataField:"id",text:"#",headerStyle:{width:"50px"}},{dataField:"component",text:"Component",headerStyle:{width:"110px"},filter:(0,i.DN)({placeholder:"Search",caseSensitive:!1})},{dataField:"testid",text:"Test Id",headerStyle:{width:"80px"},filter:(0,i.DN)({delay:1e3,className:"test-classname",placeholder:"Search"})},{dataField:"testname",text:"Test name",headerStyle:{width:"150px"},filter:(0,i.DN)({delay:1e3,className:"test-classname",placeholder:"Search"})}],c=[{dataField:"id",text:"#",headerStyle:{width:"30px"}},{dataField:"stepdefinition",text:"Step Definition",headerStyle:{width:"200px"},editable:!1},{dataField:"action",text:"Action",headerStyle:{width:"100px"},editable:!1},{dataField:"testdata",text:"Test Data/Error",headerStyle:{width:"200px"},editable:!1},{dataField:"status",text:"Status",headerStyle:{width:"60px"},style:e=>"Fail"===e?{backgroundColor:"#F38295"}:"Pass"===e?{backgroundColor:"#17E798"}:void 0,editable:!1},{dataField:"screenshot",text:"Screenshot",headerStyle:{width:"100px"},formatter:e=>{var t="data:image/png;base64, "+e;if(""!==e)return(0,o.jsx)("img",{alt:"screenshot",width:"100",height:"50",src:t})},events:{onClick:(e,t,a,i,o)=>{if(""!==i.screenshot){s.W.IsScreenshotModalOpen=!0;var r="data:image/png;base64, "+i.screenshot;s.W.ImageData=r,s.W.StepsDetailsForScreenshot=i.stepdefinition}}}}]},14501:(e,t,a)=>{a.d(t,{W:()=>i});var i={TotalTestScripts:0,TotalComponents:0,TotalTestScriptsOnLastExecution:0,PassPercentageInLastExecution:0,ModuleScriptCountXaxis:[],ModuleScriptCountYaxis:[],ComponentScriptCountColorCode:["#0E24DE"],EnvironmentList:[],SelectedEnvironment:"",ReportHistoryCounter:10,TotalPassFailInLastXResults:[],TotalPassFailColorCode:["#0C84EF","#EF0C7E"],ExecutionXaxisInLastXResults:[],ExecutionYaxisInLastXResults:[],ExecutionHistoryColorCode:["#186A3B","#CB4335"],ExecutionTimeXaxisInLastXResults:[],ExecutionTimeYaxisInLastXResults:[],ExecutionTimeColorCode:["#0E24DE"],FailedComponentInLastXResults:[],ComponentFailedCountColorCode:["#DA0F25"],PastDateList:[],DayWiseTestScriptDevelopment:[],DayWiseTestExecutionData:[],TestScriptDevelopmentColorCode:["#5A1D75"],TestScriptExecutionColorCode:["#0000FF"],SelectedExecutionDate:"",ListOfExecutionTimeForaDay:[],SelectedExecutionTime:"",TableDataforDetailedReports:[],SelectedTab:"",DefaultSaveDaysToReport:10,DefaultSaveDaysToDevelopment:30,ListOfPastDateforDaysToDevelopment:[],IsViewResultButtonDisabled:!0,SelectedReportTotalPassFailData:[[]],SelectedReportListOfTestScripts:[{}],SelectedReportExecutionTimeGraphXaxis:[],SelectedReportExecutionTimeGraphYaxis:[[]],SelectedReportExecutionTimeColor:["#F39C12"],SelectedReportComponentPassFailData:[[]],AssertionResultsForAllResults:{},ResponseDataForAllResults:{},TestingMethod:"Unit Testing",IsScreenshotModalOpen:!1,ImageData:"",StepsDetailsForScreenshot:"",ExecutionTimeForUITestScripts:{},ExistingReportTestExecutionTime:"10 Seconds",ExistingReportExecutionStartFrom:"QAautoMATER",ExistingReportExecutionPlatform:"",ExistingReportExecutionDevice:"",ExecutedBy:"",TestSuiteName:""}},66075:(e,t,a)=>{a.d(t,{Z:()=>d});a(47313),a(66982);var i=a(99174),s=a(63476),o=a(61583),r=a(35277),n=a(46417);const l=i.ZP.create("page"),c=e=>{let{title:t,breadcrumbs:a,tag:i,className:c,children:d,...u}=e;const p=l.b("px-3",c);return(0,n.jsxs)(i,{className:p,...u,children:[(0,n.jsxs)("div",{className:l.e("header"),children:[t&&"string"===typeof t?(0,n.jsx)(r.Z,{type:"h1",className:l.e("title"),children:t}):t,a&&(0,n.jsxs)(s.Z,{className:l.e("breadcrumb"),children:[(0,n.jsx)(o.Z,{children:"Home"}),a.length&&a.map(((e,t)=>{let{name:a,active:i}=e;return(0,n.jsx)(o.Z,{active:i,children:a},t)}))]})]}),d]})};c.defaultProps={tag:"div",title:""};const d=c},35277:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(46123),s=a.n(i),o=(a(47313),a(66982),a(46417));const r={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},n=e=>{let{tag:t,className:a,type:i,...n}=e;const l=s()({[i]:!!i},a);let c;return c=t||(!t&&r[i]?r[i]:"p"),(0,o.jsx)(c,{...n,className:l})};n.defaultProps={type:"p"};const l=n}}]);
"use strict";(self.webpackChunkqaautomater=self.webpackChunkqaautomater||[]).push([[921],{8921:(t,e,s)=>{s.r(e),s.d(e,{default:()=>q});var i=s(9950),a=s(6095),n=s(7176),r=s(6114),o=s(4084),l=s(7537),c=s(8156),h=s(9343),d=s(3452),u=s(9708),x=s(9969),S=s(1646),p=s(5488),m=s(9401),A=s(8081),g=s(1340),T=s(877),w=s(6754),E=s(4670),j=s(946),b=s(6821),v=s(6502),f=(s(2104),s(7692),s(7319)),y=s(3936),R=s(1919),C=s(9455),F=s.n(C),O=s(576),D=s(8795),L=s.n(D),P=s(2592),N=s(3284),k=s(1578),I=s(3377),B=s(159),G=s(1638),M=s(8866),V=s(1052),X=s.n(V),H=s(4414);const Y={sizePerPage:10,hidePageListOnlyOnePage:!0,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50},{text:"100",value:100},{text:"200",value:200},{text:"500",value:500}]};class z extends i.Component{constructor(){super(...arguments),this.notificationSystem=i.createRef(),this.reportRef=i.createRef(),this.testScriptReportRef=i.createRef(),this.state={isPageLoading:!1,environmentList:E.A.EnvironmentList,selectedEnv:E.A.SelectedEnvironment,componentList:E.A.ComponentList,selectedComponent:E.A.SelectedComponent,showErrorOnEnvironment:!1,showErrorOnComponent:!1,threadList:E.A.ThreadList,threadCount:E.A.ThreadCount,testingType:E.A.TestingType,reportingInDashboard:E.A.ReportingInDashboard,listOfTestScripts:E.A.ListOfTestScripts,selectedTestScripts:E.A.SelectedTestScripts,executionProgressBar:!1,totalPassFailInLastXResults:E.A.TotalPassFailInLastXResults,barChartDataForComponent:E.A.BarChartDataForComponent,assertionResultsForAllResults:E.A.AssertionResultsForAllResults,responseDataForAllResults:E.A.ResponseDataForAllResults,executionTimeGraphXaxis:E.A.ExecutionTimeGraphXaxis,executionTimeGraphYaxis:E.A.ExecutionTimeGraphYaxis,executionTimeColor:E.A.ExecutionTimeColor,isGlobalError:E.A.IsGlobalError,globalErrorMessage:E.A.GlobalErrorMessage,listOfTestSuite:E.A.ListOfTestSuite,selectedTestSuite:E.A.SelectedTestSuite,isTestSuiteSelected:E.A.IsTestSuiteSelected,isViewReportsModal:!1,listOfEnvforTestSuite:E.A.EnvironmentList,testsuiteReportEnv:E.A.TestsuiteReportEnv,testsuiteNameForReports:E.A.TestsuiteNameForReports,listOfExecutedTestSuite:[],listOfExecutedByTestSuite:[],executedByTestSuite:E.A.ExecutedByTestSuite,listOfExecutionDateandTime:[],selectedExecutionDateandTime:E.A.SelectedExecutionDateandTime,isErrorOnTestSuiteEnv:!1,isErrorOnExistingTestSuite:!1,isErrorOnExecutedByTestSuite:!1,isErrorOnExecutionDateandTimeTestSuite:!1,isConfirmationViewReportsModal:!1,isThisReportForExistingSuite:E.A.IsThisReportForExistingSuite,testSuiteExecutionDuration:E.A.TestSuiteExecutionDuration,testSuiteExecutionFrom:E.A.TestSuiteExecutionFrom,testSuiteReExecutionHistory:E.A.TestSuiteReExecutionHistory,existingTestSuiteName:E.A.ExistingTestSuiteName},this.componentDidMount=async()=>{window.scrollTo(0,0),await b.A.apiExecutionLabPageLoadData(),this.setState({environmentList:E.A.EnvironmentList}),this.setState({selectedEnv:E.A.SelectedEnvironment}),this.setState({componentList:E.A.ComponentList}),this.setState({selectedComponent:E.A.SelectedComponent}),this.setState({threadList:E.A.ThreadList}),this.setState({threadCount:E.A.ThreadCount}),this.setState({testingType:E.A.TestingType}),this.setState({reportingInDashboard:E.A.ReportingInDashboard}),this.setState({executionProgressBar:!1}),this.setState({listOfTestScripts:E.A.ListOfTestScripts}),this.setState({selectedTestScripts:E.A.SelectedTestScripts}),this.setState({totalPassFailInLastXResults:E.A.TotalPassFailInLastXResults}),this.setState({barChartDataForComponent:E.A.BarChartDataForComponent}),this.setState({executionTimeGraphXaxis:E.A.ExecutionTimeGraphXaxis}),this.setState({executionTimeGraphYaxis:E.A.ExecutionTimeGraphYaxis}),E.A.ExecutionTimeColor=await k.A.gerHexaColorCodeForArray(1),this.setState({executionTimeColor:E.A.ExecutionTimeColor}),this.setState({listOfTestSuite:E.A.ListOfTestSuite}),this.setState({selectedTestSuite:E.A.SelectedTestSuite}),this.setState({isTestSuiteSelected:E.A.IsTestSuiteSelected}),this.setState({existingTestSuiteName:E.A.ExistingTestSuiteName})},this.getNotification=async(t,e)=>{this.notificationSystem.current.addNotification({message:e,level:t})},this.selectEnv=async t=>{this.setState({showErrorOnEnvironment:!1});var e=await t.target.value;this.state.selectedEnv!==await e&&(this.setState({selectedEnv:await e}),E.A.SelectedEnvironment=await e)},this.selectComponent=async t=>{E.A.SelectedComponent=await t;var e=await t;for(let a=0;a<await e.length;a++){var s=await e[a].value;if("Select All"===await s){var i=[];i.push(await await e[a]),E.A.SelectedComponent=await i;break}}this.setState({selectedComponent:E.A.SelectedComponent})},this.selectThreadCount=async t=>{var e=await t.target.value;this.state.threadCount!==await e&&(this.setState({threadCount:await e}),E.A.ThreadCount=await e)},this.selectTestingType=async t=>{var e=await t.target.value;this.state.testingType!==await e&&(this.setState({testingType:await e}),E.A.TestingType=await e)},this.selectReportingInDashBoard=async t=>{var e=await t.target.value;this.state.reportingInDashboard!==await e&&(this.setState({reportingInDashboard:await e}),E.A.ReportingInDashboard=await await e)},this.handleOnSelect=async(t,e)=>{await e?this.setState((()=>({selectedTestScripts:[...this.state.selectedTestScripts,t.id]}))):this.setState((()=>({selectedTestScripts:this.state.selectedTestScripts.filter((e=>e!==t.id))}))),E.A.SelectedTestScripts=this.state.selectedTestScripts},this.handleOnSelectAll=async(t,e)=>{const s=await e.map((t=>t.id));if(t){var i=E.A.SelectedTestScripts;let t=await i.concat(await s.filter((t=>!i.includes(t))));E.A.SelectedTestScripts=await t,this.setState((()=>({selectedTestScripts:t})))}else{i=E.A.SelectedTestScripts;let t=await i.filter((t=>!s.includes(t)));E.A.SelectedTestScripts=await t,this.setState((()=>({selectedTestScripts:t})))}},this.ExecuteAPIScripts=async()=>{var t=this.state.selectedEnv;if(""===t||void 0===t)return this.setState({showErrorOnEnvironment:!0}),await this.getNotification("error","Please select Environment before test script execution.");var e=this.state.threadCount,s=this.state.testingType,i=this.state.reportingInDashboard,a=this.state.selectedTestScripts,n=this.state.existingTestSuiteName;if(0===a.length)return await this.getNotification("error","Please select atleast one test script for execution");var r=this.state.selectedTestSuite;r=void 0===await r||""===await r?"CustomTestScriptSelection":await r.replace(/_/g,"."),this.setState({executionProgressBar:!0}),await b.A.executeAPITestScripts(await t,e,s,i,a,r,n),this.setState({listOfTestScripts:[]},(()=>{this.setState({listOfTestScripts:E.A.ListOfTestScripts})})),this.setState({totalPassFailInLastXResults:E.A.TotalPassFailInLastXResults}),this.setState({barChartDataForComponent:E.A.BarChartDataForComponent}),this.setState({executionTimeGraphXaxis:E.A.ExecutionTimeGraphXaxis}),this.setState({executionTimeGraphYaxis:E.A.ExecutionTimeGraphYaxis}),E.A.ExecutionTimeColor=await k.A.gerHexaColorCodeForArray(1),this.setState({executionTimeColor:E.A.ExecutionTimeColor}),this.setState({executionProgressBar:!1}),E.A.IsGlobalError&&(this.setState({isGlobalError:!0}),this.setState({globalErrorMessage:E.A.GlobalErrorMessage}))},this.toggleGlobalError=async()=>{this.setState({isGlobalError:!1}),E.A.IsGlobalError=!1},this.selectTestSuite=async t=>{var e=await t.target.value;if(this.state.selectedScreenOption!==await e)if(E.A.ExistingTestSuiteName="",this.setState({existingTestSuiteName:""}),""!==await e){this.setState({selectedTestScripts:[]}),E.A.SelectedTestScripts=[],this.setState({selectedTestSuite:await e}),E.A.SelectedTestSuite=await e,this.setState({isPageLoading:!0});var s=await B.A.getTestSuiteData("Api",await e);if(await s.testsuite.length>0){this.setState({isTestSuiteSelected:!0}),E.A.IsTestSuiteSelected=!0,this.setState({listOfTestScripts:await s.testsuite}),E.A.ListOfTestScripts=await s.testsuite;var i=await s.environment;await this.state.environmentList.includes(await i)&&(E.A.SelectedEnv=await i,this.setState({selectedEnv:await i}));var a=await s.threadcount;await this.state.threadList.includes(await a)&&(E.A.SelectedThreadCount=await a,this.setState({selectedThreadCount:await a}));var n=await s.testingtype;await["Unit Testing","Integration Testing"].includes(await n)&&(E.A.TestingType=await n,this.setState({testingType:await n}))}else this.setState({listOfTestScripts:[]}),E.A.ListOfTestScripts=[];this.setState({isPageLoading:!1})}else this.setState({selectedTestSuite:""}),E.A.SelectedTestSuite="",this.setState({isTestSuiteSelected:!1}),E.A.IsTestSuiteSelected=!1,this.setState({listOfTestScripts:[]}),E.A.ListOfTestScripts=[]},this.toggleViewReportsModal=async()=>{this.setState({isViewReportsModal:!1})},this.openViewReportsModal=async t=>{this.setState({testsuiteReportEnv:""}),E.A.TestsuiteReportEnv="",this.setState({listOfEnvforTestSuite:E.A.EnvironmentList}),this.setState({listOfExecutedTestSuite:[]}),this.setState({testsuiteNameForReports:""}),E.A.TestsuiteNameForReports="",this.setState({listOfExecutedByTestSuite:[]}),this.setState({executedByTestSuite:""}),E.A.ExecutedByTestSuite="",this.setState({listOfExecutionDateandTime:[]}),this.setState({selectedExecutionDateandTime:""}),E.A.SelectedExecutionDateandTime="",this.setState({isViewReportsModal:!0})},this.selectEnvironmentForReport=async t=>{var e=await t.target.value;if(await this.state.testsuiteReportEnv!==await e){this.setState({isErrorOnTestSuiteEnv:!1}),this.setState({isPageLoading:!0}),this.setState({listOfExecutedTestSuite:[]}),this.setState({testsuiteNameForReports:""}),E.A.TestsuiteNameForReports="",this.setState({listOfExecutedByTestSuite:[]}),this.setState({executedByTestSuite:""}),E.A.ExecutedByTestSuite="",this.setState({listOfExecutionDateandTime:[]}),this.setState({selectedExecutionDateandTime:""}),E.A.SelectedExecutionDateandTime="",this.setState({testsuiteReportEnv:await e}),E.A.TestsuiteReportEnv=await e;var s=await b.A.getTestSuiteNameFromtheEnvirinment(await e);this.setState({listOfExecutedTestSuite:await s}),this.setState({isPageLoading:!1})}},this.selectTestSuiteForReport=async t=>{var e=await t.target.value;if(await this.state.testsuiteNameForReports!==await e){this.setState({isErrorOnExistingTestSuite:!1});var s=await this.state.testsuiteReportEnv;this.setState({isPageLoading:!0}),this.setState({listOfExecutedByTestSuite:[]}),this.setState({executedByTestSuite:""}),E.A.ExecutedByTestSuite="",this.setState({listOfExecutionDateandTime:[]}),this.setState({selectedExecutionDateandTime:""}),E.A.SelectedExecutionDateandTime="",this.setState({testsuiteNameForReports:await e}),E.A.TestsuiteNameForReports=await e;var i=await b.A.getExecutedByList(await s,await e);this.setState({listOfExecutedByTestSuite:await i}),this.setState({isPageLoading:!1})}},this.selectExecutedByForReport=async t=>{var e=await t.target.value;if(await this.state.executedByTestSuite!==await e){this.setState({isErrorOnExecutedByTestSuite:!1});var s=await this.state.testsuiteReportEnv,i=await this.state.testsuiteNameForReports;this.setState({isPageLoading:!0}),this.setState({listOfExecutionDateandTime:[]}),this.setState({selectedExecutionDateandTime:""}),E.A.SelectedExecutionDateandTime="",this.setState({executedByTestSuite:await e}),E.A.ExecutedByTestSuite=await e;var a=await b.A.getExecutedExecutionDateByList(await s,await i,await e);this.setState({listOfExecutionDateandTime:await a}),this.setState({isPageLoading:!1})}},this.selectExecutionDateAndTime=async t=>{var e=await t.target.value;await this.state.selectedExecutionDateandTime!==await e&&(this.setState({isErrorOnExecutionDateandTimeTestSuite:!1}),this.setState({selectedExecutionDateandTime:await e}),E.A.SelectedExecutionDateandTime=await e)},this.viewExistingTestSuiteReportModal=async()=>{var t=await this.state.testsuiteReportEnv;""===await t&&this.setState({isErrorOnTestSuiteEnv:!0});var e=await this.state.testsuiteNameForReports;""===await e&&this.setState({isErrorOnExistingTestSuite:!0});var s=await this.state.executedByTestSuite;""===await s&&this.setState({isErrorOnExecutedByTestSuite:!0});var i=await this.state.selectedExecutionDateandTime;""===await i&&this.setState({isErrorOnExecutionDateandTimeTestSuite:!0}),""!==await t&&""!==e&&""!==s&&""!==i&&(this.setState({isViewReportsModal:!1}),this.setState({isConfirmationViewReportsModal:!0}))},this.toggleConfirmationViewReportsModal=async()=>{this.setState({isConfirmationViewReportsModal:!1})},this.viewReportsForExistingSuite=async()=>{this.setState({isPageLoading:!0});var t=await this.state.testsuiteReportEnv,e=await this.state.testsuiteNameForReports,s=await this.state.selectedExecutionDateandTime;this.setState({selectedTestScripts:[]}),E.A.SelectedTestScripts=[],this.setState({existingTestSuiteName:""}),E.A.ExistingTestSuiteName="",this.setState({selectedTestSuite:""}),this.setState({listOfTestScripts:[]}),this.setState({totalPassFailInLastXResults:[]}),this.setState({executionTimeGraphXaxis:[]}),this.setState({barChartDataForComponent:[]}),this.setState({executionTimeGraphYaxis:[]}),E.A.TestSuiteExecutionDuration="",this.setState({testSuiteExecutionDuration:""}),this.setState({testSuiteExecutionPlatform:""}),this.setState({testSuiteExecutionBrowser:""}),this.setState({testSuiteExecutionFrom:""}),E.A.TestSuiteExecutionFrom="",this.setState({testSuiteReExecutionHistory:"0"}),E.A.TestSuiteReExecutionHistory="0";var i=await b.A.getReportsDataForTestSuite(await t,await e,await s);E.A.IsThisReportForExistingSuite=!0,this.setState({isThisReportForExistingSuite:!0});var a=await i.listOfExecutedTestScripts,n=await i.testResultsDataForAllTestScripts,r=await i.executionTimeForTestScripts,o=await i.executionTimeData,l=await i.componentPassFail;E.A.ResponseDataForAllResults=await n;var c=await i.assertionResultsForAllTestScripts,h=[],d=await i.totalPass,u=await i.totalFail;h.push(d),h.push(u),E.A.TotalPassFailInLastXResults=h,E.A.AssertionResultsForAllResults=await c,E.A.ListOfTestScripts=await a,E.A.ExecutionTimeForTestScripts=await r;var x=await G.A.getAllKeyValueInJsonArrayFromJsonObject(await o);E.A.ExecutionTimeGraphXaxis=await x.key;var S=[];S.push(await x.value),E.A.ExecutionTimeGraphYaxis=await S,E.A.BarChartDataForComponent=l,this.setState({listOfTestScripts:await a}),this.setState({assertionResultsForAllResults:await c}),this.setState({totalPassFailInLastXResults:await h}),this.setState({executionTimeGraphXaxis:await x.key}),this.setState({executionTimeGraphYaxis:await S}),this.setState({barChartDataForComponent:await l});var p=await i.totalExecutionTime+" seconds",m=await i.triggerFrom,A=await i.testSuiteReExecutionHistory;this.setState({testSuiteExecutionDuration:await p}),this.setState({testSuiteExecutionFrom:await m}),void 0!==await A&&(this.setState({testSuiteReExecutionHistory:await A.length}),E.A.TestSuiteReExecutionHistory=await A.length),E.A.TestSuiteExecutionDuration=await p,E.A.TestSuiteExecutionFrom=await m,this.setState({isConfirmationViewReportsModal:!1});var g=await e+"-"+await s;this.setState({existingTestSuiteName:await g}),E.A.ExecutedByTestSuite=await g,this.setState({responseDataForAllResults:await n}),this.setState({isPageLoading:!1})},this.ExportReportsInImage=async()=>{try{var t=this.state.executionTimeGraphXaxis;if(await t.length>0){const t=await this.reportRef.current,e=await X()(await t),s=await e.toDataURL("image/png"),i=await document.createElement("a");i.href=await s,i.download="Api-TestSuiteReports.png",await document.body.appendChild(await i),await i.click(),await document.body.removeChild(i)}}catch(e){}},this.ExportTestScriptsReportsInImage=async()=>{try{var t=this.state.listOfTestScripts;if(await t.length>0){const t=await this.testScriptReportRef.current,e=await X()(await t),s=await e.toDataURL("image/png"),i=await document.createElement("a");i.href=await s,i.download="Api-TestScriptsReports.png",await document.body.appendChild(await i),await i.click(),await document.body.removeChild(i)}}catch(e){}}}async LoadTestScripts(){var t=this.state.selectedComponent;if(""===await t||void 0===await t||0===await t.length)return this.setState({isErrorOnComponent:!0}),await this.getNotification("error","Component can not be left blank.");this.setState({selectedTestScripts:[]}),E.A.SelectedTestScripts=[],this.setState({listOfTestScripts:[]}),E.A.ListOfTestScripts=[],E.A.ExistingTestSuiteName="",this.setState({existingTestSuiteName:""}),await this.setState({isPageLoading:!0}),await b.A.getAllTestScriptsfromComponent(E.A.SelectedComponent),E.A.AssertionResultsForAllResults={},E.A.ResponseDataForAllResults={},this.setState({assertionResultsForAllResults:{}}),this.setState({responseDataForAllResults:{}}),await this.setState({isPageLoading:!1}),this.setState({listOfTestScripts:E.A.ListOfTestScripts})}showTestResults(t){var e="default",s=[];void 0!==E.A.AssertionResultsForAllResults[t.id]&&(s=E.A.AssertionResultsForAllResults[t.id]);var i={};return void 0!==E.A.ResponseDataForAllResults[t.id]&&(i=E.A.ResponseDataForAllResults[t.id]),"Pass"===E.A.ListOfTestScripts[Number(t.id)-1].status&&(e="#17E798"),"Fail"===E.A.ListOfTestScripts[Number(t.id)-1].status&&(e="#FF5733"),(0,H.jsxs)(n.A,{children:[(0,H.jsx)(r.A,{lg:6,md:6,sm:6,xs:12,children:(0,H.jsxs)(o.A,{style:{borderColor:e},children:[(0,H.jsx)(l.A,{children:"Expected vs Actual"}),(0,H.jsx)(c.A,{children:(0,H.jsx)(r.A,{style:{overflowX:"auto",maxWidth:"100%"},children:(0,H.jsx)(v.A,{keyField:"id",data:s,columns:y.X,wrapperClasses:"table-responsive",striped:!0,hover:!0,condensed:!0})})})]})}),(0,H.jsx)(r.A,{lg:6,md:6,sm:6,xs:12,children:(0,H.jsxs)(o.A,{style:{borderColor:e},children:[(0,H.jsx)(l.A,{children:"Test results data"}),(0,H.jsx)(c.A,{children:(0,H.jsx)(r.A,{children:(0,H.jsx)(L(),{name:!1,collapsed:!0,collapseStringsAfterLength:25,displayDataTypes:!1,indentWidth:0,iconStyle:"circle",src:i})})})]})})]})}async ExportReportsInPdf(){}render(){const t={mode:"checkbox",selected:this.state.selectedTestScripts,onSelect:this.handleOnSelect,onSelectAll:this.handleOnSelectAll},e={showExpandColumn:!0,expandByColumnOnly:!1,renderer:this.showTestResults};return(0,H.jsxs)(a.A,{className:"ExecutionLabPage",title:"Api Test Execution Lab",children:[(0,H.jsx)(F(),{ref:this.notificationSystem}),this.state.isPageLoading&&(0,H.jsx)(P.A,{sentences:N.$,height:"150%",color:"black"}),(0,H.jsxs)(n.A,{children:[(0,H.jsx)(r.A,{lg:6,md:6,sm:6,xs:12,children:(0,H.jsxs)(o.A,{children:[(0,H.jsx)(l.A,{children:(0,H.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Select Test Suite",(0,H.jsx)(h.A,{size:"sm",children:(0,H.jsx)(d.A,{color:"black",onClick:this.openViewReportsModal.bind(this),children:(0,H.jsx)("small",{children:"View test suite report"})})})]})}),(0,H.jsx)(c.A,{children:(0,H.jsx)(u.A,{children:(0,H.jsxs)(x.A,{row:!0,children:[(0,H.jsx)(S.A,{sm:6,children:"Test Suite"}),(0,H.jsx)(r.A,{children:(0,H.jsxs)(p.A,{type:"select",name:"screen",value:this.state.selectedTestSuite,onChange:this.selectTestSuite.bind(this),children:[(0,H.jsx)("option",{}),(0,H.jsx)(j.A,{options:this.state.listOfTestSuite})]})})]})})})]})}),(0,H.jsx)(r.A,{lg:6,md:6,sm:6,xs:12,children:(0,H.jsxs)(o.A,{children:[(0,H.jsx)(l.A,{children:"Select Execution Configuration*"}),(0,H.jsx)(c.A,{children:(0,H.jsx)(u.A,{children:(0,H.jsxs)(x.A,{row:!0,children:[(0,H.jsx)(S.A,{sm:6,children:"Environment*"}),(0,H.jsx)(r.A,{children:(0,H.jsx)(p.A,{type:"select",invalid:this.state.showErrorOnEnvironment,onChange:this.selectEnv.bind(this),name:"envList",value:this.state.selectedEnv,children:(0,H.jsx)(j.A,{options:this.state.environmentList})})}),!this.state.isTestSuiteSelected&&(0,H.jsx)(S.A,{sm:6,children:"Component*"}),!this.state.isTestSuiteSelected&&(0,H.jsx)(r.A,{children:(0,H.jsx)(I.Ay,{defaultValue:this.state.selectedComponent,value:this.state.selectedComponent,isMulti:!0,name:"component",options:this.state.componentList,className:"basic-multi-select",classNamePrefix:"select",onChange:this.selectComponent.bind(this)})}),(0,H.jsx)(S.A,{sm:6,children:"Thread count*"}),(0,H.jsx)(r.A,{children:(0,H.jsx)(p.A,{type:"select",name:"threadCount",value:this.state.threadCount,onChange:this.selectThreadCount.bind(this),children:(0,H.jsx)(j.A,{options:this.state.threadList})})}),(0,H.jsx)(S.A,{sm:6,children:"Testing type*"}),(0,H.jsx)(r.A,{children:(0,H.jsxs)(p.A,{type:"select",name:"testingType",value:this.state.testingType,onChange:this.selectTestingType.bind(this),children:[(0,H.jsx)("option",{children:"Unit Testing"}),(0,H.jsx)("option",{children:"Integration Testing"})]})}),(0,H.jsx)(S.A,{sm:6,children:"Want to add report in Dashboard*"}),(0,H.jsx)(r.A,{children:(0,H.jsxs)(p.A,{type:"select",name:"reportingInDashBoard",value:this.state.reportingInDashboard,onChange:this.selectReportingInDashBoard.bind(this),children:[(0,H.jsx)("option",{children:"Yes"}),(0,H.jsx)("option",{children:"No"})]})})]})})})]})})]}),(0,H.jsx)(n.A,{children:(0,H.jsx)(r.A,{lg:12,md:12,sm:12,xs:12,children:(0,H.jsxs)(o.A,{children:[(0,H.jsx)(l.A,{children:(0,H.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["API Test Scripts",(0,H.jsxs)(h.A,{size:"sm",children:[!this.state.isTestSuiteSelected&&(0,H.jsx)(d.A,{color:"black",name:"loadTestScript",onClick:this.LoadTestScripts.bind(this),children:(0,H.jsx)("small",{children:"Load"})}),(0,H.jsx)(d.A,{color:"info",onClick:this.ExecuteAPIScripts.bind(this),children:(0,H.jsx)("small",{children:"Run"})}),(0,H.jsx)(d.A,{color:"black",name:"run",onClick:this.ExportTestScriptsReportsInImage.bind(this),children:(0,H.jsx)("small",{children:"Export Reports as Image"})})]})]})}),(0,H.jsxs)(c.A,{children:[(0,H.jsx)(r.A,{children:(0,H.jsx)(m.A,{style:{visibility:this.state.executionProgressBar?"visible":"hidden"},animated:!0,color:"dark",value:100,className:"mb-3"},0)}),(0,H.jsx)("div",{ref:this.testScriptReportRef,children:(0,H.jsx)(r.A,{style:{overflowX:"auto",maxWidth:"100%"},children:(0,H.jsx)(v.A,{keyField:"id",data:this.state.listOfTestScripts,columns:y.yF,wrapperClasses:"table-responsive",striped:!0,hover:!0,condensed:!0,selectRow:t,filter:(0,f.Ay)(),pagination:(0,O.Ay)(Y),expandRow:e})})})]})]})})}),(0,H.jsx)(n.A,{children:(0,H.jsx)(r.A,{lg:12,md:12,sm:12,xs:12,children:(0,H.jsx)(o.A,{children:(0,H.jsxs)(l.A,{children:[(0,H.jsx)(F(),{ref:this.notificationSystem}),(0,H.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Execution Results",(0,H.jsx)(h.A,{size:"sm",children:(0,H.jsx)(d.A,{color:"black",name:"exportReports",onClick:this.ExportReportsInImage.bind(this),children:(0,H.jsx)("small",{children:"Save as Image"})})})]})]})})})}),(0,H.jsxs)("div",{ref:this.reportRef,children:[this.state.isThisReportForExistingSuite&&(0,H.jsxs)(n.A,{children:[(0,H.jsx)(r.A,{lg:4,md:6,sm:6,xs:12,children:(0,H.jsx)(M.qj,{title:"Test Suite Name",number:this.state.testsuiteNameForReports,color:"black"})}),(0,H.jsx)(r.A,{lg:4,md:6,sm:6,xs:12,children:(0,H.jsx)(M.qj,{title:"Environment",number:this.state.testsuiteReportEnv,color:"black"})}),(0,H.jsx)(r.A,{lg:4,md:6,sm:6,xs:12,children:(0,H.jsx)(M.qj,{title:"Executed By",number:this.state.executedByTestSuite,color:"black"})}),(0,H.jsx)(r.A,{lg:4,md:6,sm:6,xs:12,children:(0,H.jsx)(M.qj,{title:"Execution Duration",number:this.state.testSuiteExecutionDuration,color:"black"})}),(0,H.jsx)(r.A,{lg:4,md:6,sm:6,xs:12,children:(0,H.jsx)(M.qj,{title:"Execution Completion date & time",number:this.state.selectedExecutionDateandTime,color:"black"})}),(0,H.jsx)(r.A,{lg:4,md:6,sm:6,xs:12,children:(0,H.jsx)(M.qj,{title:"Reexecution Count",number:this.state.testSuiteReExecutionHistory,color:"black"})}),(0,H.jsx)(r.A,{lg:4,md:6,sm:6,xs:12,children:(0,H.jsx)(M.qj,{title:"Execution From",number:this.state.testSuiteExecutionFrom,color:"black"})})]}),(0,H.jsxs)(n.A,{children:[(0,H.jsx)(r.A,{lg:3,md:6,sm:6,xs:12,children:(0,H.jsxs)(o.A,{children:[(0,H.jsx)(l.A,{children:"Pass fail count"}),(0,H.jsx)(c.A,{children:(0,H.jsx)(r.A,{children:(0,H.jsx)(R.le,{color:["#17E798","#F38295"],labels:["Pass","Fail"],data:this.state.totalPassFailInLastXResults})})})]})}),(0,H.jsx)(r.A,{lg:5,md:6,sm:6,xs:12,children:(0,H.jsxs)(o.A,{children:[(0,H.jsx)(l.A,{children:"Component Test Results"}),(0,H.jsx)(c.A,{children:(0,H.jsx)(r.A,{children:(0,H.jsx)(R.Es,{color:["#17E798","#F38295"],labels:this.state.executionTimeGraphXaxis,data:this.state.barChartDataForComponent})})})]})}),(0,H.jsx)(r.A,{lg:4,md:6,sm:6,xs:12,children:(0,H.jsxs)(o.A,{children:[(0,H.jsx)(l.A,{children:"Execution time in seconds"}),(0,H.jsx)(c.A,{children:(0,H.jsx)(r.A,{children:(0,H.jsx)(R.bl,{labels:this.state.executionTimeGraphXaxis,data:this.state.executionTimeGraphYaxis,color:this.state.executionTimeColor})})})]})})]})]}),(0,H.jsxs)(A.A,{isOpen:this.state.isGlobalError,className:this.props.className,backdrop:"static",children:[this.state.isPageLoading&&(0,H.jsx)(P.A,{sentences:N.$,height:"2000%",color:"black"}),(0,H.jsx)(g.A,{toggle:this.toggleGlobalError.bind(this),children:"Oh Sorry,we encountered an error"}),(0,H.jsx)(T.A,{children:this.state.globalErrorMessage})]}),(0,H.jsxs)(A.A,{size:"lg",isOpen:this.state.isViewReportsModal,toggle:this.toggleViewReportsModal,className:this.props.className,backdrop:"static",children:[this.state.isPageLoading&&(0,H.jsx)(P.A,{sentences:N.$,height:"2000%",color:"black"}),(0,H.jsx)(g.A,{toggle:this.toggleViewReportsModal,children:"View your test suite report"}),(0,H.jsx)(T.A,{children:(0,H.jsx)(c.A,{children:(0,H.jsxs)(u.A,{children:[(0,H.jsxs)(x.A,{row:!0,children:[(0,H.jsx)(S.A,{sm:6,children:"Environment*"}),(0,H.jsx)(r.A,{children:(0,H.jsxs)(p.A,{type:"select",invalid:this.state.isErrorOnTestSuiteEnv,name:"screen",value:this.state.testsuiteReportEnv,onChange:this.selectEnvironmentForReport.bind(this),children:[(0,H.jsx)("option",{}),(0,H.jsx)(j.A,{options:this.state.listOfEnvforTestSuite})]})})]}),(0,H.jsxs)(x.A,{row:!0,children:[(0,H.jsx)(S.A,{sm:6,children:"Test Suite*"}),(0,H.jsx)(r.A,{children:(0,H.jsxs)(p.A,{invalid:this.state.isErrorOnExistingTestSuite,type:"select",name:"screen",value:this.state.testsuiteNameForReports,onChange:this.selectTestSuiteForReport.bind(this),children:[(0,H.jsx)("option",{}),(0,H.jsx)(j.A,{options:this.state.listOfExecutedTestSuite})]})})]}),(0,H.jsxs)(x.A,{row:!0,children:[(0,H.jsx)(S.A,{sm:6,children:"Executed By*"}),(0,H.jsx)(r.A,{children:(0,H.jsxs)(p.A,{invalid:this.state.isErrorOnExecutedByTestSuite,type:"select",name:"screen",value:this.state.executedByTestSuite,onChange:this.selectExecutedByForReport.bind(this),children:[(0,H.jsx)("option",{}),(0,H.jsx)(j.A,{options:this.state.listOfExecutedByTestSuite})]})})]}),(0,H.jsxs)(x.A,{row:!0,children:[(0,H.jsx)(S.A,{sm:6,children:"Execution date & time*"}),(0,H.jsx)(r.A,{children:(0,H.jsxs)(p.A,{invalid:this.state.isErrorOnExecutionDateandTimeTestSuite,type:"select",name:"screen",value:this.state.selectedExecutionDateandTime,onChange:this.selectExecutionDateAndTime.bind(this),children:[(0,H.jsx)("option",{}),(0,H.jsx)(j.A,{options:this.state.listOfExecutionDateandTime})]})})]})]})})}),(0,H.jsx)(w.A,{children:(0,H.jsxs)(h.A,{size:"sm",children:[(0,H.jsx)(d.A,{color:"black",onClick:this.toggleViewReportsModal.bind(this),children:(0,H.jsx)("small",{children:"Cancel"})}),(0,H.jsx)(d.A,{color:"info",onClick:this.viewExistingTestSuiteReportModal.bind(this),children:(0,H.jsx)("small",{children:"View Report"})})]})})]}),(0,H.jsxs)(A.A,{size:"lg",toggle:this.toggleConfirmationViewReportsModal.bind(this),isOpen:this.state.isConfirmationViewReportsModal,className:this.props.className,backdrop:"static",children:[this.state.isPageLoading&&(0,H.jsx)(P.A,{sentences:N.$,height:"2000%",color:"black"}),(0,H.jsx)(g.A,{toggle:this.toggleConfirmationViewReportsModal.bind(this),children:"Confirmation"}),(0,H.jsx)(T.A,{children:"Are you sure you want to view the report? Your previous test script selections, along with reports on the Execution Lab page, will be overridden."}),(0,H.jsx)(w.A,{children:(0,H.jsxs)(h.A,{size:"sm",children:[(0,H.jsx)(d.A,{color:"black",onClick:this.toggleConfirmationViewReportsModal.bind(this),children:(0,H.jsx)("small",{children:"Cancel"})}),(0,H.jsx)(d.A,{color:"info",onClick:this.viewReportsForExistingSuite.bind(this),children:(0,H.jsx)("small",{children:"Continue"})})]})})]})]})}}const q=z},1919:(t,e,s)=>{s.d(e,{Es:()=>u,rm:()=>m,le:()=>c,bl:()=>S});s(9950),s(4297);var i=s(278),a=s(9709),n=s(6187),r=s(1578),o=s(4414);i.t1.register(i.Bs,i.m_,i.s$),i.t1.register(a.A);const l=t=>{let{...e}=t;var s={...e}.labels,i={...e}.data,a={...e}.color,l=[];if(void 0===a||0===a.length){const t=i.map((()=>Promise.resolve(r.A.gerHexaColorCode())));Promise.all(t).then((t=>{l.push(...t)})).catch((t=>{console.error(t)}))}else l=a;var c={labels:s,datasets:[{data:i,backgroundColor:l,borderColor:l,borderWidth:2,cutout:"80%",borderRadius:10}]};return(0,o.jsx)(n.nu,{data:c,options:{responsive:!0,plugins:{legend:{position:"bottom",display:!0},datalabels:{color:"white",labels:{title:{font:{weight:"bold"}}},formatter:function(t,e){return t}}}}})};l.defaultProps={labels:[],data:[],color:[]};const c=l;var h=s(1090);h.Ay.register(a.A);const d=t=>{let{...e}=t;var s=!1,i={...e}.labels,a={...e}.data,l={...e}.color,c={...e}.label,h=[];for(let n=0;n<a.length;n++){var d={label:""};d.data=a[n],d.borderWidth=2,h.push(d)}if(c.length>0){s=!0;for(let t=0;t<h.length;t++)h[t].label=c[t]}if(void 0===l||0===l.length)for(let n=0;n<h.length;n++){Promise.resolve(r.A.gerHexaColorCode()).then((t=>{h[n].backgroundColor=t}))}else for(let n=0;n<h.length;n++)h[n].backgroundColor=l[n];var u={labels:i,datasets:h},x={responsive:!0,plugins:{legend:{position:"bottom",display:s}},datalabels:{color:"black",labels:{title:{font:{weight:"bold"}}},formatter:function(t,e){return t}},scales:{x:{ticks:{callback:function(t,e,s){var a=i[e];if(void 0!==a)return a.length>10?a.substring(0,10)+"...":a}}}}};return(0,o.jsx)(n.yP,{options:x,data:u})};d.defaultProps={labels:[],data:[],color:[],label:[]};const u=d,x=t=>{let{...e}=t;var s=!1,i={...e}.labels,a={...e}.data,l={...e}.color,c={...e}.label,h=[];for(let n=0;n<a.length;n++){var d={label:""};d.data=a[n],d.borderWidth=3,d.tension=.1,h.push(d)}if(c.length>0){s=!0;for(let t=0;t<h.length;t++)h[t].label=c[t]}if(void 0===l||0===l.length)for(let n=0;n<h.length;n++){Promise.resolve(r.A.gerHexaColorCode()).then((t=>{h[n].borderColor=t}))}else for(let n=0;n<h.length;n++)h[n].borderColor=l[n];var u={labels:i,datasets:h},x={responsive:!0,plugins:{legend:{position:"bottom",display:s}},datalabels:{color:"black",labels:{title:{font:{weight:"bold"}}},formatter:function(t,e){return t}},scales:{x:{ticks:{callback:function(t,e,s){var a=i[e];if(void 0!==a)return a.length>11?a.substring(0,11)+"...":a}}}}};return(0,o.jsx)(n.N1,{data:u,options:x})};x.defaultProps={labels:[],data:[],color:[],label:[]};const S=x;h.Ay.register(a.A);const p=t=>{let{...e}=t;var s=!1,i={...e}.labels,a={...e}.data,l={...e}.color,c={...e}.label,h=[];for(let n=0;n<a.length;n++){var d={label:""};d.data=a[n],d.borderColor="#000000",d.borderWidth=2,h.push(d)}if(c.length>0){s=!0;for(let t=0;t<h.length;t++)h[t].label=c[t]}if(void 0===l||0===l.length)for(let n=0;n<h.length;n++){Promise.resolve(r.A.gerHexaColorCode()).then((t=>{h[n].backgroundColor=t}))}else for(let n=0;n<h.length;n++)h[n].backgroundColor=l[n];var u={labels:i,datasets:h},x={responsive:!0,plugins:{legend:{position:"bottom",display:s}},datalabels:{color:"black",labels:{title:{font:{weight:"bold"}}},formatter:function(t,e){return t}},scales:{x:{stacked:!0,ticks:{callback:function(t){var e=i[t];if(void 0!==e)return e.length>10?e.substring(0,10)+"...":e}}},y:{stacked:!0}}};return(0,o.jsx)(n.yP,{options:x,data:u})};p.defaultProps={labels:[],data:[],color:[],label:[]};const m=p},8866:(t,e,s)=>{s.d(e,{GU:()=>d,qj:()=>g});var i=s(9950),a=(s(4297),s(4084)),n=s(5703),r=s(3924),o=s(9401),l=s(2189),c=s(4414);const h=t=>{let{title:e,subtitle:s,number:h,color:d,progress:{value:u,label:x},...S}=t;const[p,m]=(0,i.useState)("");(0,i.useEffect)((()=>{(async()=>{const t=await async function(t){return t>=1e6?(t/1e6).toLocaleString("en",{maximumFractionDigits:3})+"M":t>=1e3?(t/1e3).toLocaleString("en",{maximumFractionDigits:3})+"K":t.toLocaleString("en")}(h);m(t)})()}),[h]);let A=Number(u),g=0===A&&0!==h?100:100-A;0===h&&(A=0,g=0);const T=A.toFixed(2),w=g.toFixed(2),E={height:"8px",backgroundImage:`linear-gradient(to right, green ${T}%, red ${w}%)`,backgroundColor:"transparent"};return(0,c.jsxs)(a.A,{body:!0,...S,children:[(0,c.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,c.jsxs)(n.A,{tag:"div",children:[(0,c.jsx)(l.A,{className:"mb-0",children:(0,c.jsx)("strong",{children:e})}),(0,c.jsx)(l.A,{className:"mb-0 text-muted small",children:s})]}),(0,c.jsx)(r.A,{className:"text-black",children:p})]}),(0,c.jsx)(o.A,{style:E}),(0,c.jsxs)(n.A,{tag:"div",className:"d-flex justify-content-between",children:[(0,c.jsxs)(l.A,{tag:"span",className:"text-left text-muted small",children:[x,(0,c.jsxs)("small",{children:[" (",T,"%)"]})]}),(0,c.jsxs)(l.A,{tag:"span",className:"text-right text-muted small",children:["Fail ",(0,c.jsxs)("small",{children:["(",w,"%)"]})]})]})]})};h.defaultProps={title:"",subtitle:"",number:0,color:"primary",progress:{value:0,label:""}};const d=h;var u=s(8738),x=s.n(u),S=s(8156),p=s(1848);const m=t=>{let{bgColor:e,icon:s,iconProps:i,title:n,subtitle:o,className:l,...h}=t;const d=x()("cr-widget",l,{[`bg-${e}`]:e});return(0,c.jsxs)(a.A,{inverse:!0,className:d,...h,children:[(0,c.jsx)(S.A,{className:"cr-widget__icon",children:(0,c.jsx)(s,{size:50,...i})}),(0,c.jsxs)(S.A,{children:[(0,c.jsx)(r.A,{children:n}),(0,c.jsx)(p.A,{children:o})]})]})};m.defaultProps={bgColor:"primary",icon:"span",iconProps:{size:50}};const A=t=>{let{title:e,number:s,color:o,...h}=t;const[d,u]=(0,i.useState)("");return(0,i.useEffect)((()=>{(async()=>{const t=await async function(t){return t>=1e6?(t/1e6).toLocaleString("en",{maximumFractionDigits:3})+"M":t>=1e3?(t/1e3).toLocaleString("en",{maximumFractionDigits:3})+"K":t.toLocaleString("en")}(s);u(t)})()}),[s]),(0,c.jsx)(a.A,{body:!0,...h,children:(0,c.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,c.jsx)(n.A,{tag:"div",children:(0,c.jsx)(l.A,{className:"mb-0",children:(0,c.jsx)("strong",{children:e})})}),(0,c.jsx)(r.A,{className:`text-${o}`,children:d})]})})};A.defaultProps={title:"",number:0,color:"black"};const g=A}}]);
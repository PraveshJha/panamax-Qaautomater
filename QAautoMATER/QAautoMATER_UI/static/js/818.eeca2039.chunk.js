"use strict";(self.webpackChunkqaautomater=self.webpackChunkqaautomater||[]).push([[818],{3786:(t,e,a)=>{a.r(e),a.d(e,{default:()=>w});var s=a(6075),o=a(7313),i=a(106),r=a(6782),l=a(5399),n=a(238),c=a(2527),d=a(1781),C=a(3516),x=a(2944),u={ListOfTestCycle:[],SelectedTestCycle:"",TotalTestCase:0,TotalDefects:0,TotalTestPlan:0,TotalTestCaseOnLastExecution:0,PassPercentageInLastExecution:0,AutomatedandNotAutomatedData:[],ColorCodeForAutomatedGraph:[],TestPriorityDataXaxis:[],TestPriorityDataYaxis:[],ColorCodeForTestPriority:[],ComponentTestCaseCountXaxisData:[],ComponentTestCaseCountYaxisData:[],ColorCodeForComponentTestCaseCount:[],DefectPriorityDataXaxis:[],DefectPriorityDataYaxis:[],DefectSeverityDataXaxis:[],DefectSeverityDataYaxis:[],ColorCodeOfDefectPriority:[],DefectComponentDataXaxis:[],DefectComponentDataYAxis:[],ColorCodeForDefectComponentData:[],DefectStatusDataXaxis:[],DefectStatusDataYaxis:[],ColorCodeOfDefectStatus:[],TestPlanTotalDataXaxis:[],TestPlanTotalDataYaxis:[],ColorCodeOfTestPlanTotalData:[],TestPlanExecutedComponentXaxis:[],TestPlanExecutedComponentYaxis:[],TestPlanTestSuiteXaxis:[],TestPlanTestSuiteYaxis:[],TestCaseCreatedByXaxis:[],TestCaseCreatedByYaxis:[],ColorCodeOfTestCaseCreatedBy:[],DefectCreatedByXaxis:[],DefectCreatedByYaxis:[],ColorCodeOfDefectCreatedBy:[],TestCaseExecutedByXaxis:[],TestCaseExecutedByYaxis:[],ColorCodeOfTestCaseExecutedBy:[],TestCaseCustomFieldGraphData:[],DefectCustomFieldGraphData:[]},h=a(8390),D=a(8758),f=a(5002),y=a(9696),m=a(2638);const T=new class{async loadDashboardPage(){try{await D.Z.manualConfigPageLoad(),u.ListOfTestCycle=await f.M.ListOfTestCycle,u.SelectedTestCycle=await f.M.CurrentTestCycle,await this.getDashBoardData(u.SelectedTestCycle)}catch(t){}}async getDashBoardData(t){if(await h.D.isDemo);else{if(""===await t||void 0===await t)return;try{var e=await localStorage.getItem("UserSelectedAccount"),a={};a.testCycle=await t;var s=h.D.backendAPI;"remote"===await h.D.backendServiceAt&&(s=h.D.remoteBackendAPI);var o={Authorization:await h.Q.userToken,userEmail:await h.Q.userEmail},i=await y.Z.post(await s+"manualdashboard/project/"+await e+"/getdashboarddata",await o,await a),r=await i.data;u.TotalTestCase=await r.totaltestcase,u.TotalDefects=await r.totaldefect,u.TotalTestPlan=await r.totaltestplan,u.TotalTestCaseOnLastExecution=await r.totaltestcaseonlastexecution,u.PassPercentageInLastExecution=await r.passpercentageinlastexecution,u.AutomatedandNotAutomatedData=await r.automatedgraphdata;var l=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.testprioritydata);u.TestPriorityDataXaxis=await l.key,u.TestPriorityDataYaxis=await l.value;var n=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.componenttestcasedata);u.ComponentTestCaseCountXaxisData=[],u.ComponentTestCaseCountYaxisData=[],u.ComponentTestCaseCountXaxisData=await n.key,u.ComponentTestCaseCountYaxisData.push(await n.value),u.DefectPriorityDataXaxis=[],u.DefectPriorityDataYaxis=[];var c=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.defectprioritydata);u.DefectPriorityDataXaxis=await c.key,u.DefectPriorityDataYaxis=await c.value,u.DefectSeverityDataXaxis=[],u.DefectSeverityDataYaxis=[];var d=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.defectseveritydata);u.DefectSeverityDataXaxis=await d.key,u.DefectSeverityDataYaxis=await d.value;var C=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.defectComponentData);u.DefectComponentDataXaxis=[],u.DefectComponentDataYAxis=[],u.DefectComponentDataXaxis=await C.key,u.DefectComponentDataYAxis.push(await C.value);var x=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.defectStatusData);u.DefectStatusDataXaxis=await x.key,u.DefectStatusDataYaxis=await x.value;var D=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.testPlanTotalTestData);u.TestPlanTotalDataXaxis=await D.key,u.TestPlanTotalDataYaxis=await D.value,u.TestPlanExecutedComponentXaxis=await r.testPlanComponentPassFailXaxis,u.TestPlanExecutedComponentYaxis=await r.testPlanComponentPassFailYaxis,u.TestPlanTestSuiteXaxis=await r.testPlanPassFailXaxis,u.TestPlanTestSuiteYaxis=await r.testPlanPassFailYaxis;var f=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.testCaseCreationByUser);u.TestCaseCreatedByXaxis=[],u.TestCaseCreatedByYaxis=[],u.TestCaseCreatedByXaxis=await f.key,u.TestCaseCreatedByYaxis.push(await f.value);var T=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.defectCreationByUser);u.DefectCreatedByXaxis=[],u.DefectCreatedByYaxis=[],u.DefectCreatedByXaxis=await T.key,u.DefectCreatedByYaxis.push(await T.value);var p=await m.Z.getAllKeyValueInJsonArrayFromJsonObject(await r.testCaseExecutedByUser);return u.TestCaseExecutedByXaxis=[],u.TestCaseExecutedByYaxis=[],u.TestCaseExecutedByXaxis=await p.key,u.TestCaseExecutedByYaxis.push(await p.value),u.TestCaseCustomFieldGraphData=[],u.TestCaseCustomFieldGraphData=await r.testCaseCustomFieldGraphData,u.DefectCustomFieldGraphData=[],u.DefectCustomFieldGraphData=await r.defectCustomFieldGraphData,await r}catch(P){u.TotalTestCase=0,u.TotalDefects=0,u.TotalTestPlan=0,u.TotalTestCaseOnLastExecution=0,u.PassPercentageInLastExecution=0,u.AutomatedandNotAutomatedData=[],u.TestPriorityDataXaxis=[],u.TestPriorityDataYaxis=[],u.ComponentTestCaseCountXaxisData=[],u.ComponentTestCaseCountYaxisData=[],u.DefectPriorityDataXaxis=[],u.DefectPriorityDataYaxis=[],u.DefectComponentDataXaxis=[],u.DefectComponentDataYAxis=[],u.DefectStatusDataXaxis=[],u.DefectStatusDataYaxis=[],u.TestPlanTotalDataXaxis=[],u.TestPlanTotalDataYaxis=[],u.TestPlanExecutedComponentXaxis=[],u.TestPlanExecutedComponentYaxis=[],u.TestPlanTestSuiteXaxis=[],u.TestPlanTestSuiteYaxis=[],u.TestCaseCreatedByXaxis=[],u.TestCaseCreatedByYaxis=[],u.DefectCreatedByXaxis=[],u.DefectCreatedByYaxis=[],u.TestCaseExecutedByXaxis=[],u.TestCaseExecutedByYaxis=[],u.TestCaseCustomFieldGraphData=[],u.DefectCustomFieldGraphData=[],u.DefectSeverityDataXaxis=[],u.DefectSeverityDataYaxis=[]}}}};a(4100),a(44);var p=a(6939),P=a.n(p),g=(a(8137),a(207)),b=a(4104),S=(a(1123),a(4230),a(8944)),j=a(2102),Z=a(2234),X=a(6417);class v extends o.Component{constructor(){super(...arguments),this.notificationSystem=o.createRef(),this.state={isPageLoading:!1,listOfTestCycle:u.ListOfTestCycle,selectedTestCycle:u.SelectedTestCycle,totalTestCase:u.TotalTestCase,totalDefects:u.TotalDefects,totalTestPlan:u.TotalTestPlan,totalTestCaseOnLastExecution:u.TotalTestCaseOnLastExecution,passPercentageInLastExecution:u.PassPercentageInLastExecution,automatedandNotAutomatedData:u.AutomatedandNotAutomatedData,colorCodeForAutomatedGraph:u.ColorCodeForAutomatedGraph,testPriorityDataXaxis:u.TestPriorityDataXaxis,testPriorityDataYaxis:u.TestPriorityDataYaxis,colorCodeForTestPriority:u.ColorCodeForTestPriority,componentTestCaseCountXaxisData:u.ComponentTestCaseCountXaxisData,componentTestCaseCountYaxisData:u.ComponentTestCaseCountYaxisData,colorCodeForComponentTestCaseCount:u.ColorCodeForComponentTestCaseCount,defectPriorityDataXaxis:u.DefectPriorityDataXaxis,defectPriorityDataYaxis:u.DefectPriorityDataYaxis,colorCodeOfDefectPriority:u.ColorCodeOfDefectPriority,defectSeverityDataXaxis:u.DefectSeverityDataXaxis,defectSeverityDataYaxis:u.DefectSeverityDataYaxis,defectComponentDataXaxis:u.DefectComponentDataXaxis,defectComponentDataYAxis:u.DefectComponentDataYAxis,colorCodeForDefectComponentData:u.ColorCodeForDefectComponentData,defectStatusDataXaxis:u.DefectStatusDataXaxis,defectStatusDataYaxis:u.DefectStatusDataYaxis,colorCodeOfDefectStatus:u.ColorCodeOfDefectStatus,testPlanTotalDataXaxis:u.TestPlanTotalDataXaxis,testPlanTotalDataYaxis:u.TestPlanTotalDataYaxis,colorCodeOfTestPlanTotalData:u.ColorCodeOfTestPlanTotalData,testPlanExecutedComponentXaxis:u.TestPlanExecutedComponentXaxis,testPlanExecutedComponentYaxis:u.TestPlanExecutedComponentYaxis,testPlanTestSuiteXaxis:u.TestPlanTestSuiteXaxis,testPlanTestSuiteYaxis:u.TestPlanTestSuiteYaxis,testCaseCreatedByXaxis:u.TestCaseCreatedByXaxis,testCaseCreatedByYaxis:u.TestCaseCreatedByYaxis,colorCodeOfTestCaseCreatedBy:u.ColorCodeOfTestCaseCreatedBy,defectCreatedByXaxis:u.DefectCreatedByXaxis,defectCreatedByYaxis:u.DefectCreatedByYaxis,colorCodeOfDefectCreatedBy:u.ColorCodeOfDefectCreatedBy,testCaseExecutedByXaxis:u.TestCaseExecutedByXaxis,testCaseExecutedByYaxis:u.TestCaseExecutedByYaxis,colorCodeOfTestCaseExecutedBy:u.ColorCodeOfTestCaseExecutedBy,testCaseCustomFieldGraphData:u.TestCaseCustomFieldGraphData,defectCustomFieldGraphData:u.DefectCustomFieldGraphData},this.componentDidMount=async()=>{await window.scrollTo(0,0),this.setState({isPageLoading:!0}),await T.loadDashboardPage(),this.setState({listOfTestCycle:u.ListOfTestCycle}),this.setState({selectedTestCycle:u.SelectedTestCycle}),this.setState({totalTestCase:u.TotalTestCase}),this.setState({totalDefects:u.TotalDefects}),this.setState({totalTestPlan:u.TotalTestPlan}),this.setState({totalTestCaseOnLastExecution:u.TotalTestCaseOnLastExecution}),this.setState({passPercentageInLastExecution:u.PassPercentageInLastExecution}),this.setState({automatedandNotAutomatedData:u.AutomatedandNotAutomatedData}),u.ColorCodeForAutomatedGraph=await Z.Z.gerHexaColorCodeForArray(3),this.setState({colorCodeForAutomatedGraph:u.ColorCodeForAutomatedGraph}),this.setState({testPriorityDataXaxis:u.TestPriorityDataXaxis}),this.setState({testPriorityDataYaxis:u.TestPriorityDataYaxis}),this.setState({defectSeverityDataXaxis:u.DefectSeverityDataXaxis}),this.setState({defectSeverityDataYaxis:u.DefectSeverityDataYaxis}),u.ColorCodeForTestPriority=await Z.Z.gerHexaColorCodeForArray(u.TestPriorityDataXaxis.length),this.setState({colorCodeForTestPriority:u.ColorCodeForTestPriority}),this.setState({componentTestCaseCountXaxisData:u.ComponentTestCaseCountXaxisData}),this.setState({componentTestCaseCountYaxisData:u.ComponentTestCaseCountYaxisData}),u.ColorCodeForComponentTestCaseCount=await Z.Z.gerHexaColorCodeForArray(u.ComponentTestCaseCountXaxisData.length),this.setState({colorCodeForComponentTestCaseCount:u.ColorCodeForComponentTestCaseCount}),this.setState({defectPriorityDataXaxis:u.DefectPriorityDataXaxis}),this.setState({defectPriorityDataYaxis:u.DefectPriorityDataYaxis}),u.ColorCodeOfDefectPriority=await Z.Z.gerHexaColorCodeForArray(u.DefectPriorityDataXaxis.length),this.setState({colorCodeOfDefectPriority:u.ColorCodeOfDefectPriority}),this.setState({defectComponentDataXaxis:u.DefectComponentDataXaxis}),this.setState({defectComponentDataYAxis:u.DefectComponentDataYAxis}),u.ColorCodeForDefectComponentData=await Z.Z.gerHexaColorCodeForArray(u.DefectComponentDataXaxis.length),this.setState({colorCodeForDefectComponentData:u.ColorCodeForDefectComponentData}),this.setState({defectStatusDataXaxis:u.DefectStatusDataXaxis}),this.setState({defectStatusDataYaxis:u.DefectStatusDataYaxis}),u.ColorCodeOfDefectStatus=await Z.Z.gerHexaColorCodeForArray(u.DefectStatusDataXaxis.length),this.setState({colorCodeOfDefectStatus:u.ColorCodeOfDefectStatus}),this.setState({testPlanTotalDataXaxis:u.TestPlanTotalDataXaxis}),this.setState({testPlanTotalDataYaxis:u.TestPlanTotalDataYaxis}),u.ColorCodeOfTestPlanTotalData=await Z.Z.gerHexaColorCodeForArray(u.TestPlanTotalDataXaxis.length),this.setState({colorCodeOfTestPlanTotalData:u.ColorCodeOfTestPlanTotalData}),this.setState({testPlanExecutedComponentXaxis:u.TestPlanExecutedComponentXaxis}),this.setState({testPlanExecutedComponentYaxis:u.TestPlanExecutedComponentYaxis}),this.setState({testPlanTestSuiteXaxis:u.TestPlanTestSuiteXaxis}),this.setState({testPlanTestSuiteYaxis:u.TestPlanTestSuiteYaxis}),this.setState({testCaseCreatedByXaxis:u.TestCaseCreatedByXaxis}),this.setState({testCaseCreatedByYaxis:u.TestCaseCreatedByYaxis}),u.ColorCodeOfTestCaseCreatedBy=await Z.Z.gerHexaColorCodeForArray(u.TestCaseCreatedByXaxis.length),this.setState({colorCodeOfTestCaseCreatedBy:u.ColorCodeOfTestCaseCreatedBy}),this.setState({defectCreatedByXaxis:u.DefectCreatedByXaxis}),this.setState({defectCreatedByYaxis:u.DefectCreatedByYaxis}),u.ColorCodeOfDefectCreatedBy=await Z.Z.gerHexaColorCodeForArray(u.DefectCreatedByXaxis.length),this.setState({colorCodeOfDefectCreatedBy:u.ColorCodeOfDefectCreatedBy}),this.setState({testCaseExecutedByXaxis:u.TestCaseExecutedByXaxis}),this.setState({testCaseExecutedByYaxis:u.TestCaseExecutedByYaxis}),u.ColorCodeOfTestCaseExecutedBy=await Z.Z.gerHexaColorCodeForArray(u.TestCaseExecutedByXaxis.length),this.setState({colorCodeOfTestCaseExecutedBy:u.ColorCodeOfTestCaseExecutedBy}),this.setState({testCaseCustomFieldGraphData:u.TestCaseCustomFieldGraphData}),this.setState({defectCustomFieldGraphData:u.DefectCustomFieldGraphData}),this.setState({isPageLoading:!1})},this.getNotification=async(t,e)=>{this.notificationSystem.current.addNotification({message:e,level:t,autoDismiss:10})},this.selectTestCycle=async t=>{var e=await t.target.value;await this.state.selectedTestCycle!==await e&&(u.SelectedTestCycle=await e,this.setState({selectedTestCycle:await e}),await T.getDashBoardData(await e),this.setState({isPageLoading:!0}),this.setState({totalTestCase:u.TotalTestCase}),this.setState({totalDefects:u.TotalDefects}),this.setState({totalTestPlan:u.TotalTestPlan}),this.setState({totalTestCaseOnLastExecution:u.TotalTestCaseOnLastExecution}),this.setState({passPercentageInLastExecution:u.PassPercentageInLastExecution}),this.setState({automatedandNotAutomatedData:u.AutomatedandNotAutomatedData}),u.ColorCodeForAutomatedGraph=await Z.Z.gerHexaColorCodeForArray(3),this.setState({colorCodeForAutomatedGraph:u.ColorCodeForAutomatedGraph}),this.setState({testPriorityDataXaxis:u.TestPriorityDataXaxis}),this.setState({testPriorityDataYaxis:u.TestPriorityDataYaxis}),u.ColorCodeForTestPriority=await Z.Z.gerHexaColorCodeForArray(u.TestPriorityDataXaxis.length),this.setState({colorCodeForTestPriority:u.ColorCodeForTestPriority}),this.setState({componentTestCaseCountXaxisData:u.ComponentTestCaseCountXaxisData}),this.setState({componentTestCaseCountYaxisData:u.ComponentTestCaseCountYaxisData}),u.ColorCodeForComponentTestCaseCount=await Z.Z.gerHexaColorCodeForArray(u.ComponentTestCaseCountXaxisData.length),this.setState({colorCodeForComponentTestCaseCount:u.ColorCodeForComponentTestCaseCount}),this.setState({defectPriorityDataXaxis:u.DefectPriorityDataXaxis}),this.setState({defectPriorityDataYaxis:u.DefectPriorityDataYaxis}),u.ColorCodeOfDefectPriority=await Z.Z.gerHexaColorCodeForArray(u.DefectPriorityDataXaxis.length),this.setState({colorCodeOfDefectPriority:u.ColorCodeOfDefectPriority}),this.setState({defectComponentDataXaxis:u.DefectComponentDataXaxis}),this.setState({defectComponentDataYAxis:u.DefectComponentDataYAxis}),u.ColorCodeForDefectComponentData=await Z.Z.gerHexaColorCodeForArray(u.DefectComponentDataXaxis.length),this.setState({colorCodeForDefectComponentData:u.ColorCodeForDefectComponentData}),this.setState({defectStatusDataXaxis:u.DefectStatusDataXaxis}),this.setState({defectStatusDataYaxis:u.DefectStatusDataYaxis}),u.ColorCodeOfDefectStatus=await Z.Z.gerHexaColorCodeForArray(u.DefectStatusDataXaxis.length),this.setState({colorCodeOfDefectStatus:u.ColorCodeOfDefectStatus}),this.setState({testPlanTotalDataXaxis:u.TestPlanTotalDataXaxis}),this.setState({testPlanTotalDataYaxis:u.TestPlanTotalDataYaxis}),u.ColorCodeOfTestPlanTotalData=await Z.Z.gerHexaColorCodeForArray(u.TestPlanTotalDataXaxis.length),this.setState({colorCodeOfTestPlanTotalData:u.ColorCodeOfTestPlanTotalData}),this.setState({testPlanExecutedComponentXaxis:u.TestPlanExecutedComponentXaxis}),this.setState({testPlanExecutedComponentYaxis:u.TestPlanExecutedComponentYaxis}),this.setState({testPlanTestSuiteXaxis:u.TestPlanTestSuiteXaxis}),this.setState({testPlanTestSuiteYaxis:u.TestPlanTestSuiteYaxis}),this.setState({testCaseCreatedByXaxis:u.TestCaseCreatedByXaxis}),this.setState({testCaseCreatedByYaxis:u.TestCaseCreatedByYaxis}),u.ColorCodeOfTestCaseCreatedBy=await Z.Z.gerHexaColorCodeForArray(u.TestCaseCreatedByXaxis.length),this.setState({colorCodeOfTestCaseCreatedBy:u.ColorCodeOfTestCaseCreatedBy}),this.setState({defectCreatedByXaxis:u.DefectCreatedByXaxis}),this.setState({defectCreatedByYaxis:u.DefectCreatedByYaxis}),u.ColorCodeOfDefectCreatedBy=await Z.Z.gerHexaColorCodeForArray(u.DefectCreatedByXaxis.length),this.setState({colorCodeOfDefectCreatedBy:u.ColorCodeOfDefectCreatedBy}),this.setState({testCaseExecutedByXaxis:u.TestCaseExecutedByXaxis}),this.setState({testCaseExecutedByYaxis:u.TestCaseExecutedByYaxis}),u.ColorCodeOfTestCaseExecutedBy=await Z.Z.gerHexaColorCodeForArray(u.TestCaseExecutedByXaxis.length),this.setState({colorCodeOfTestCaseExecutedBy:u.ColorCodeOfTestCaseExecutedBy}),this.setState({isPageLoading:!1}))}}render(){return(0,X.jsxs)(s.Z,{className:"dashboard",title:"Dashboard",children:[this.state.isPageLoading&&(0,X.jsx)(g.Z,{sentences:b.b,height:"150%",color:"black"}),(0,X.jsxs)(i.Z,{in:!this.state.isPageLoading,children:[(0,X.jsx)(P(),{ref:this.notificationSystem}),(0,X.jsx)(r.Z,{children:(0,X.jsx)(l.Z,{lg:12,md:12,sm:12,xs:12,children:(0,X.jsx)(n.Z,{children:(0,X.jsx)(c.Z,{children:(0,X.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Select Test Cycle",(0,X.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(d.Z,{type:"select",name:"placeHolder",value:this.state.selectedTestCycle,onChange:this.selectTestCycle.bind(this),children:(0,X.jsx)(S.Z,{options:this.state.listOfTestCycle})})})})]})})})})}),(0,X.jsxs)(r.Z,{children:[(0,X.jsx)(l.Z,{lg:3,md:6,sm:6,xs:12,children:(0,X.jsx)(x.yE,{title:"Total test cases",number:this.state.totalTestCase,color:"black"})}),(0,X.jsx)(l.Z,{lg:3,md:6,sm:6,xs:12,children:(0,X.jsx)(x.yE,{title:"Total defects",number:this.state.totalDefects,color:"black"})}),(0,X.jsx)(l.Z,{lg:3,md:6,sm:6,xs:12,children:(0,X.jsx)(x.yE,{title:"Total test plan",number:this.state.totalTestPlan,color:"black"})}),(0,X.jsx)(l.Z,{lg:3,md:6,sm:6,xs:12,children:(0,X.jsx)(x.LR,{title:"Last Execution Results",number:this.state.totalTestCaseOnLastExecution,color:"success",progress:{value:this.state.passPercentageInLastExecution,label:"Pass"}})})]}),(0,X.jsxs)(r.Z,{children:[(0,X.jsx)(l.Z,{lg:3,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsx)(c.Z,{children:"Test Case Automation Type"}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.LD,{color:this.state.colorCodeForAutomatedGraph,labels:["Automated","Not Automated","Not a right candidate"],data:this.state.automatedandNotAutomatedData})})})]})}),(0,X.jsx)(l.Z,{lg:3,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsx)(c.Z,{children:"Test case count based on Priority"}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.LD,{color:this.state.colorCodeForTestPriority,labels:this.state.testPriorityDataXaxis,data:this.state.testPriorityDataYaxis})})})]})}),(0,X.jsx)(l.Z,{lg:6,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Component",(0,X.jsx)("small",{children:" Test Case count"})]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:this.state.componentTestCaseCountXaxisData,data:this.state.componentTestCaseCountYaxisData,color:this.state.colorCodeForComponentTestCaseCount})})})]})})]}),(0,X.jsx)(r.Z,{children:this.state.testCaseCustomFieldGraphData.map(((t,e)=>(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Test count based on '",t.header,"' field"]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:t.labels,data:[t.yAxis]})})})]})},e)))}),(0,X.jsxs)(r.Z,{children:[(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsx)(c.Z,{children:"Defect Count based on Priority"}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:this.state.defectPriorityDataXaxis,data:[this.state.defectPriorityDataYaxis]})})})]})}),(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsx)(c.Z,{children:"Defect Count based on Severity"}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:this.state.defectSeverityDataXaxis,data:[this.state.defectSeverityDataYaxis]})})})]})}),(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsx)(c.Z,{children:"Defect Count based on Status"}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:this.state.defectStatusDataXaxis,data:[this.state.defectStatusDataYaxis]})})})]})}),(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Component",(0,X.jsx)("small",{children:" Defect count"})]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:this.state.defectComponentDataXaxis,data:this.state.defectComponentDataYAxis})})})]})}),this.state.defectCustomFieldGraphData.map(((t,e)=>(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Defect count based on '",t.header,"' field"]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:t.labels,data:[t.yAxis]})})})]})},e)))]}),(0,X.jsxs)(r.Z,{children:[(0,X.jsx)(l.Z,{lg:3,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsx)(c.Z,{children:"Execution Summary"}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.LD,{color:["#17E798","#F38295","#ffcc00","#A9A9A9","#5DADE2"],labels:this.state.testPlanTotalDataXaxis,data:this.state.testPlanTotalDataYaxis})})})]})}),(0,X.jsx)(l.Z,{lg:5,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Component",(0,X.jsx)("small",{children:" Summary"})]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.iT,{labels:this.state.testPlanExecutedComponentXaxis,label:["Pass","Fail","Pending","NA","Blocked"],data:this.state.testPlanExecutedComponentYaxis,color:["#17E798","#F38295","#ffcc00","#A9A9A9","#5DADE2"]})})})]})}),(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Test Plan",(0,X.jsx)("small",{children:" Summary"})]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.iT,{labels:this.state.testPlanTestSuiteXaxis,label:["Pass","Fail","Pending","NA","Blocked"],data:this.state.testPlanTestSuiteYaxis,color:["#17E798","#F38295","#ffcc00","#A9A9A9","#5DADE2"]})})})]})})]}),(0,X.jsxs)(r.Z,{children:[(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Test Case",(0,X.jsx)("small",{children:" Created By"})]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:this.state.testCaseCreatedByXaxis,data:this.state.testCaseCreatedByYaxis})})})]})}),(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Test Case",(0,X.jsx)("small",{children:" Executed By"})]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:this.state.testCaseExecutedByXaxis,data:this.state.testCaseExecutedByYaxis})})})]})}),(0,X.jsx)(l.Z,{lg:4,md:6,sm:6,xs:12,children:(0,X.jsxs)(n.Z,{children:[(0,X.jsxs)(c.Z,{children:["Defect",(0,X.jsx)("small",{children:" Created By"})]}),(0,X.jsx)(C.Z,{children:(0,X.jsx)(l.Z,{children:(0,X.jsx)(j.vz,{labels:this.state.defectCreatedByXaxis,data:this.state.defectCreatedByYaxis})})})]})})]})]})]})}}const w=v},2102:(t,e,a)=>{a.d(e,{vz:()=>x,iT:()=>f,LD:()=>c,wW:()=>h});a(7313),a(6982);var s=a(8501),o=a(2123),i=a(5743),r=a(2234),l=a(6417);s.kL.register(s.qi,s.u,s.De),s.kL.register(o.Z);const n=t=>{let{...e}=t;var a={...e}.labels,s={...e}.data,o={...e}.color,n=[];if(void 0===o||0===o.length){const t=s.map((()=>Promise.resolve(r.Z.gerHexaColorCode())));Promise.all(t).then((t=>{n.push(...t)})).catch((t=>{console.error(t)}))}else n=o;var c={labels:a,datasets:[{data:s,backgroundColor:n,borderColor:n,borderWidth:2,cutout:"80%",borderRadius:10}]};return(0,l.jsx)(i.$I,{data:c,options:{responsive:!0,plugins:{legend:{position:"bottom",display:!0},datalabels:{color:"white",labels:{title:{font:{weight:"bold"}}},formatter:function(t,e){return t}}}}})};n.defaultProps={labels:[],data:[],color:[]};const c=n;var d=a(3551);d.ZP.register(o.Z);const C=t=>{let{...e}=t;var a=!1,s={...e}.labels,o={...e}.data,n={...e}.color,c={...e}.label,d=[];for(let i=0;i<o.length;i++){var C={label:""};C.data=o[i],C.borderWidth=2,d.push(C)}if(c.length>0){a=!0;for(let t=0;t<d.length;t++)d[t].label=c[t]}if(void 0===n||0===n.length)for(let i=0;i<d.length;i++){Promise.resolve(r.Z.gerHexaColorCode()).then((t=>{d[i].backgroundColor=t}))}else for(let i=0;i<d.length;i++)d[i].backgroundColor=n[i];var x={labels:s,datasets:d},u={responsive:!0,plugins:{legend:{position:"bottom",display:a}},datalabels:{color:"black",labels:{title:{font:{weight:"bold"}}},formatter:function(t,e){return t}}};return(0,l.jsx)(i.$Q,{options:u,data:x})};C.defaultProps={labels:[],data:[],color:[],label:[]};const x=C,u=t=>{let{...e}=t;var a=!1,s={...e}.labels,o={...e}.data,n={...e}.color,c={...e}.label,d=[];for(let i=0;i<o.length;i++){var C={label:""};C.data=o[i],C.borderColor="#000000",C.borderWidth=3,C.tension=.1,d.push(C)}if(c.length>0){a=!0;for(let t=0;t<d.length;t++)d[t].label=c[t]}if(void 0===n||0===n.length)for(let i=0;i<d.length;i++){Promise.resolve(r.Z.gerHexaColorCode()).then((t=>{d[i].borderColor=t}))}else for(let i=0;i<d.length;i++)d[i].borderColor=n[i];var x={responsive:!0,plugins:{legend:{position:"bottom",display:a},datalabels:{color:"black",labels:{title:{font:{weight:"bold"}}},formatter:function(t){return"\n\n"+t}}}},u={labels:s,datasets:d};return(0,l.jsx)(i.x1,{data:u,options:x})};u.defaultProps={labels:[],data:[],color:[],label:[]};const h=u;d.ZP.register(o.Z);const D=t=>{let{...e}=t;var a=!1,s={...e}.labels,o={...e}.data,n={...e}.color,c={...e}.label,d=[];for(let i=0;i<o.length;i++){var C={label:""};C.data=o[i],C.borderColor="#000000",C.borderWidth=2,d.push(C)}if(c.length>0){a=!0;for(let t=0;t<d.length;t++)d[t].label=c[t]}if(void 0===n||0===n.length)for(let i=0;i<d.length;i++){Promise.resolve(r.Z.gerHexaColorCode()).then((t=>{d[i].backgroundColor=t}))}else for(let i=0;i<d.length;i++)d[i].backgroundColor=n[i];var x={labels:s,datasets:d},u={responsive:!0,plugins:{legend:{position:"bottom",display:a}},datalabels:{color:"black",labels:{title:{font:{weight:"bold"}}},formatter:function(t,e){return t}},scales:{x:{stacked:!0},y:{stacked:!0}}};return(0,l.jsx)(i.$Q,{options:u,data:x})};D.defaultProps={labels:[],data:[],color:[],label:[]};const f=D},2944:(t,e,a)=>{a.d(e,{LR:()=>d,yE:()=>y});a(7313),a(6982);var s=a(238),o=a(2770),i=a(3953),r=a(5977),l=a(5277),n=a(6417);const c=t=>{let{title:e,subtitle:a,number:c,color:d,progress:{value:C,label:x},...u}=t;return(0,n.jsxs)(s.Z,{body:!0,...u,children:[(0,n.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,n.jsxs)(o.Z,{tag:"div",children:[(0,n.jsx)(l.Z,{className:"mb-0",children:(0,n.jsx)("strong",{children:e})}),(0,n.jsx)(l.Z,{className:"mb-0 text-muted small",children:a})]}),(0,n.jsx)(i.Z,{className:"text-black",children:c})]}),(0,n.jsx)(r.Z,{value:Number(C),color:d,style:{height:"8px"}}),(0,n.jsxs)(o.Z,{tag:"div",className:"d-flex justify-content-between",children:[(0,n.jsx)(l.Z,{tag:"span",className:"text-left text-muted small",children:x}),(0,n.jsxs)(l.Z,{tag:"span",className:"text-right text-muted small",children:[Number(C),"%"]})]})]})};c.defaultProps={title:"",subtitle:"",number:0,color:"primary",progress:{value:0,label:""}};const d=c;var C=a(6123),x=a.n(C),u=a(3516),h=a(6581);const D=t=>{let{bgColor:e,icon:a,iconProps:o,title:r,subtitle:l,className:c,...d}=t;const C=x()("cr-widget",c,{["bg-".concat(e)]:e});return(0,n.jsxs)(s.Z,{inverse:!0,className:C,...d,children:[(0,n.jsx)(u.Z,{className:"cr-widget__icon",children:(0,n.jsx)(a,{size:50,...o})}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(i.Z,{children:r}),(0,n.jsx)(h.Z,{children:l})]})]})};D.defaultProps={bgColor:"primary",icon:"span",iconProps:{size:50}};const f=t=>{let{title:e,number:a,color:r,...c}=t;return(0,n.jsx)(s.Z,{body:!0,...c,children:(0,n.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,n.jsx)(o.Z,{tag:"div",children:(0,n.jsx)(l.Z,{className:"mb-0",children:(0,n.jsx)("strong",{children:e})})}),(0,n.jsx)(i.Z,{className:"text-".concat(r),children:a})]})})};f.defaultProps={title:"",number:0,color:"black"};const y=f},3476:(t,e,a)=>{a.d(e,{Z:()=>h});var s=a(7313),o=a(5192),i=a.n(o),r=a(6123),l=a.n(r),n=a(986),c=["className","listClassName","cssModule","children","tag","listTag","aria-label"];function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},d.apply(this,arguments)}function C(t,e){if(null==t)return{};var a,s,o=function(t,e){if(null==t)return{};var a,s,o={},i=Object.keys(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var x={"aria-label":i().string,children:i().node,className:i().string,cssModule:i().object,listClassName:i().string,listTag:n.iC,tag:n.iC};function u(t){var e=t.className,a=t.listClassName,o=t.cssModule,i=t.children,r=t.tag,x=void 0===r?"nav":r,u=t.listTag,h=void 0===u?"ol":u,D=t["aria-label"],f=void 0===D?"breadcrumb":D,y=C(t,c),m=(0,n.mx)(l()(e),o),T=(0,n.mx)(l()("breadcrumb",a),o);return s.createElement(x,d({},y,{className:m,"aria-label":f}),s.createElement(h,{className:T},i))}u.propTypes=x;const h=u},1583:(t,e,a)=>{a.d(e,{Z:()=>h});var s=a(7313),o=a(5192),i=a.n(o),r=a(6123),l=a.n(r),n=a(986),c=["className","cssModule","active","tag"];function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},d.apply(this,arguments)}function C(t,e){if(null==t)return{};var a,s,o=function(t,e){if(null==t)return{};var a,s,o={},i=Object.keys(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var x={active:i().bool,className:i().string,cssModule:i().object,tag:n.iC};function u(t){var e=t.className,a=t.cssModule,o=t.active,i=t.tag,r=void 0===i?"li":i,x=C(t,c),u=(0,n.mx)(l()(e,!!o&&"active","breadcrumb-item"),a);return s.createElement(r,d({},x,{className:u,"aria-current":o?"page":void 0}))}u.propTypes=x;const h=u},1123:()=>{},8137:()=>{},4942:(t,e,a)=>{a.d(e,{Z:()=>o});var s=a(9142);function o(t,e,a){return(e=(0,s.Z)(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},9142:(t,e,a)=>{a.d(e,{Z:()=>o});var s=a(1002);function o(t){var e=function(t,e){if("object"!=(0,s.Z)(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var o=a.call(t,e||"default");if("object"!=(0,s.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==(0,s.Z)(e)?e:String(e)}},1002:(t,e,a)=>{function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}a.d(e,{Z:()=>s})}}]);
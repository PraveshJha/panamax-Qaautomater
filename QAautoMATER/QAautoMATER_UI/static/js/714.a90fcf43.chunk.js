"use strict";(self.webpackChunkqaautomater=self.webpackChunkqaautomater||[]).push([[714],{9370:(e,t,i)=>{i.d(t,{Fp:()=>r,Rh:()=>c,dI:()=>l,r$:()=>o});var s=i(4118),a=(i(44),i(4501)),n=i(6417),o=[{dataField:"id",text:"#",headerStyle:{width:"50px"}},{dataField:"component",text:"Component",headerStyle:{width:"110px"},filter:(0,s.DN)({placeholder:"Search",caseSensitive:!1})},{dataField:"testid",text:"Test Id",headerStyle:{width:"80px"},filter:(0,s.DN)({delay:1e3,className:"test-classname",placeholder:"Search"})},{dataField:"testname",text:"Test name",headerStyle:{width:"150px"},filter:(0,s.DN)({delay:1e3,className:"test-classname",placeholder:"Search"})},{dataField:"status",text:"Status",headerStyle:{width:"80px"},style:e=>"Fail"===e?{backgroundColor:"#F38295"}:"Pass"===e?{backgroundColor:"#17E798"}:void 0,filter:(0,s.DN)({className:"test-classname",placeholder:"Status"})}],r=[{dataField:"id",text:"#",headerStyle:{width:"30px"}},{dataField:"expression",text:"Expression",headerStyle:{width:"140px"}},{dataField:"function",text:"Function",headerStyle:{width:"100px"}},{dataField:"expected",text:"Expected",headerStyle:{width:"100px"}},{dataField:"actual",text:"Actual",headerStyle:{width:"100px"}}],l=[{dataField:"id",text:"#",headerStyle:{width:"50px"}},{dataField:"component",text:"Component",headerStyle:{width:"110px"},filter:(0,s.DN)({placeholder:"Search",caseSensitive:!1})},{dataField:"testid",text:"Test Id",headerStyle:{width:"80px"},filter:(0,s.DN)({delay:1e3,className:"test-classname",placeholder:"Search"})},{dataField:"testname",text:"Test name",headerStyle:{width:"150px"},filter:(0,s.DN)({delay:1e3,className:"test-classname",placeholder:"Search"})}],c=[{dataField:"id",text:"#",headerStyle:{width:"30px"}},{dataField:"stepdefinition",text:"Step Definition",headerStyle:{width:"200px"},editable:!1},{dataField:"action",text:"Action",headerStyle:{width:"100px"},editable:!1},{dataField:"testdata",text:"Test Data/Error",headerStyle:{width:"200px"},editable:!1},{dataField:"status",text:"Status",headerStyle:{width:"60px"},style:e=>"Fail"===e?{backgroundColor:"#F38295"}:"Pass"===e?{backgroundColor:"#17E798"}:void 0,editable:!1},{dataField:"screenshot",text:"Screenshot",headerStyle:{width:"100px"},formatter:e=>{var t="data:image/png;base64, "+e;if(""!==e)return(0,n.jsx)("img",{alt:"screenshot",width:"100",height:"50",src:t})},events:{onClick:(e,t,i,s,n)=>{if(""!==s.screenshot){a.W.IsScreenshotModalOpen=!0;var o="data:image/png;base64, "+s.screenshot;a.W.ImageData=o,a.W.StepsDetailsForScreenshot=s.stepdefinition}}}}]},6021:(e,t,i)=>{i.r(t),i.d(t,{default:()=>W});var s=i(6075),a=i(7313),n=i(106),o=i(6782),r=i(2742),l=i(5399),c=i(4660),d=i(9327),S=i(238),h=i(2527),p=i(3516),u=i(6597),m=i(308),T=i(4209),v=i(1781),w=i(9174),g={AllConfigData:{},SelectedTab:"",ListOfTestScripts:[],SelectedTestScripts:[],EnvironmentList:[],SelectedEnv:"",IsErrorOnEnvironment:!1,ComponentList:[],SelectedComponent:"",IsErrorOnComponent:!1,TestingType:"Integration Testing",ThreadCount:"1",ThreadList:[1,2,3,4,5,6,7,8,9,10],ScreenOptionList:["Desktop","Mobile","Tablet"],SelectedScreenOption:"Desktop",DeviceList:["Chrome","Firefox","Edge"],SelectedDevice:"Chrome",SelectedTestSuite:"",AllTestSuite:[],IsValidTestSuiteName:!1,ExecutionApi:"",ApiUrl:"",CustomApiUrl:"",ListOfTestingType:["Integration Testing"],RunAtOptionList:["Server","BrowserStack","LamdaTest","SauceLabs"],SelectedRunAtOption:"Server"},C=i(8390),D=i(1121),b=i(2638),E=i(2234),x=i(9696);const L=new class{async loadCICDPage(){try{""===g.SelectedTab&&(await C.D.isUIComponentDisplayed?g.SelectedTab="Web":await C.D.isApiComponentDisplayed?g.SelectedTab="Api":g.SelectedTab="Mobile"),await this.initializeCICDPage(),await this.getTestSuiteFile(g.SelectedTab),"Mobile"===g.SelectedTab&&await this.renderExecutionInfoForMobile(g.AllConfigData)}catch(e){}}async initializeCICDPage(){var e=null;C.D.isDemo||(e=await D.Z.readConfigurationFile(g.SelectedTab),g.AllConfigData=await e),await this.renderEnvironment(await e),await this.renderAllComponent()}async getWebButtonColor(){return"Web"===g.SelectedTab?"black":"white"}async getMobileButtonColor(){return"Mobile"===g.SelectedTab?"black":"white"}async getApiButtonColor(){return"Api"===g.SelectedTab?"black":"white"}async renderEnvironment(e){if(C.D.isDemo)g.EnvironmentList=["Dev","QA","STG"],g.SelectedEnv="Dev";else{void 0===await e.Environment&&(e.Environment=[]);var t=await b.Z.jsonArrayGetallKeyValue(await e.Environment,"name");void 0===await t?(g.EnvironmentList=[],g.SelectedEnv=""):(g.EnvironmentList=await t,void 0===await e.DefaultSelectedEnvironment?g.EnvironmentList.length>0&&(g.SelectedEnv=await g.EnvironmentList[0]):g.SelectedEnv=await e.DefaultSelectedEnvironment)}}async renderAllComponent(){if(C.D.isDemo)g.ComponentList=["All","LandingPage","SignIn","ProductList","ShoppingCart","BookingSummary"],g.SelectedComponent="All";else{var e=await localStorage.getItem("UserSelectedAccount"),t=await C.D.backendAPI;"remote"===C.D.backendServiceAt&&(t=await C.D.remoteBackendAPI);var i={Authorization:await C.Q.userToken,userEmail:await C.Q.userEmail},s=await x.Z.get(t+"components/project/"+e+"/testingtype/"+g.SelectedTab,await i),a=await s.data;a.length>0&&(g.ComponentList=["All"].concat(a),g.SelectedComponent="All")}}async getAllTestScriptsfromComponent(e){g.ListOfTestScripts="All"===e?await this.createTestSuiteForAllComponent(g.ComponentList):await this.createTestSuiteForSpecificComponent(e)}async createTestSuiteForSpecificComponent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;var i=[],s={};if(C.D.isDemo){var a=await E.Z.getNumberFromRange(10,20);for(let n=0;n<a;n++)(s={id:0,component:await e,testid:0,testname:"",status:""}).id=t,s.testid="QA-"+await E.Z.getNumberFromRange(100,500),s.testname=" This is test case No "+(n+1),s.status="",i.push(s),t+=1}else{var n=await localStorage.getItem("UserSelectedAccount"),o=await b.Z.getListOfTestIdAndTestName(n,g.SelectedTab,e);for(let a=0;a<o.length;a++)s={id:t,component:await e,testid:await o[a].testid,testname:await o[a].testname,status:""},i.push(s),t+=1}return i}async createTestSuiteForAllComponent(e){var t=[],i=1;for(let a=1;a<await e.length;a++){var s=await this.createTestSuiteForSpecificComponent(await e[a],i);i=s.length+i,t=t.concat(s)}return t}async setDeviceListData(e){if(C.D.isDemo)switch(e){case"Desktop":g.DeviceList=["Chrome","Firefox","Edge","Safari"],g.SelectedDevice="Chrome";break;case"Mobile":g.DeviceList=["iPhone 12 Pro","Pixel 5"],g.SelectedDevice="iPhone 12 Pro";break;case"Tablet":g.DeviceList=["iPad Air","iPad Mini"],g.SelectedDevice="iPad Air"}else if("Desktop"===e)g.DeviceList=["Chrome","Firefox","Edge","Safari"],g.SelectedDevice="Chrome";else{var t=await g.AllConfigData.Emulator;if(void 0===await t)g.DeviceList=[],g.SelectedDevice="";else{var i=[],s=[];for(let e=0;e<await t.length;e++){switch((await t[e].device).toString()){case"Mobile":i.push(await t[e].name);break;case"Tablet":s.push(await t[e].name)}}switch(e){case"Mobile":g.DeviceList=await i;break;case"Tablet":g.DeviceList=await s}g.DeviceList.length>0&&(g.SelectedDevice=await g.DeviceList[0])}}}async getTestSuiteFile(e){if(C.D.isDemo)g.AllTestSuite=["Regression","Smoke","Sanity"];else{var t=await localStorage.getItem("UserSelectedAccount"),i=await C.D.backendAPI;"remote"===C.D.backendServiceAt&&(i=await C.D.remoteBackendAPI);var s={Authorization:await C.Q.userToken,userEmail:await C.Q.userEmail},a=await x.Z.get(i+"cicd/project/"+t+"/testingtype/"+e,await s),n=await a.data;void 0!==n&&n.length>0?g.AllTestSuite=await n:g.AllTestSuite=[]}}async saveTestSuite(){if(C.D.isDemo)return await new Promise((e=>setTimeout(e,2e3))),!0;var e=await localStorage.getItem("UserSelectedAccount"),t={};t.fileName=g.SelectedTestSuite,t.environment=g.SelectedEnv,t.testingtype=g.TestingType,t.threadcount=g.ThreadCount,"Web"!==g.SelectedTab&&"Mobile"!==g.SelectedTab||(t.runat=g.SelectedRunAtOption,t.screen=g.SelectedScreenOption,t.device=g.SelectedDevice);var i=[];for(let r=0;r<g.SelectedTestScripts.length;r++)i.push(g.ListOfTestScripts[g.SelectedTestScripts[r]-1]);t.testsuite=await i;var s=C.D.backendAPI;"remote"===await C.D.backendServiceAt&&(s=C.D.remoteBackendAPI);var a={Authorization:await C.Q.userToken,userEmail:await C.Q.userEmail},n=await x.Z.post(s+"cicd/project/"+e+"/testingtype/"+g.SelectedTab,await a,await t),o=await n.data;return C.D.ErrorMessage=await o.errorMessage,await o.isFileSaved}async getTestSuiteData(e){if(C.D.isDemo);else{var t=await localStorage.getItem("UserSelectedAccount"),i=C.D.backendAPI;"remote"===await C.D.backendServiceAt&&(i=C.D.remoteBackendAPI);try{var s={Authorization:await C.Q.userToken,userEmail:await C.Q.userEmail},a=await x.Z.get(i+"cicd/project/"+t+"/testingtype/"+g.SelectedTab+"/testsuite/"+e,await s),n=await a.data;Object.keys(n).length>0&&(g.SelectedEnv=await n.environment,g.TestingType=await n.testingtype,g.ThreadCount=await n.threadcount,"Web"===g.SelectedTab&&(g.SelectedScreenOption=await n.screen,g.SelectedDevice=await n.device),g.ListOfTestScripts=await n.testsuite)}catch(o){}}}async renderExecutionInfoForMobile(e){g.ScreenOptionList=await(["Android","iOS"]);var t=await e.DefaultExecutionPlatform;void 0===await t?g.SelectedScreenOption="Android":g.SelectedScreenOption=await t;var i=await e.DefaultRunAtOption;void 0===await i?g.SelectedRunAtOption="Server":g.SelectedRunAtOption=await i,await this.setDeviceInforMation(await t,await g.SelectedRunAtOption,await e)}async setDeviceInforMation(e,t,i){if(C.D.isDemo)switch(e){case"Android":g.DeviceList=["One plus 9R","Pixel 3"],g.SelectedDevice="Pixel 3";break;case"iOS":g.DeviceList=["iPhone 12","iPhone 14"],g.SelectedDevice="iPhone 14";break;default:g.DeviceList=[],g.SelectedDevice=""}else{var s=[];if("Server"===await t||"Client"===await t){var a=await i.Emulator;for(let t=0;t<await a.length;t++)await a[t].platform===await e&&s.push(await a[t].name);await s.length>0?(g.DeviceList=await s,g.SelectedDevice=await s[0]):(g.DeviceList=[],g.SelectedDevice="")}else await this.setDeviceDetailsForCloud(await i,await t,await e)}}async setDeviceDetailsForCloud(e,t,i){try{var s=await e.ExecutionCapabilities[await t];if(void 0===await s)g.DeviceList=[],g.SelectedDevice="";else{var a=await s.hostname;if(void 0===await a||"providehostname"===await a)return g.DeviceList=[],void(g.SelectedDevice="");var n=await s.user;if(void 0===await n||"provideusername"===await n)return g.DeviceList=[],void(g.SelectedDevice="");var o=await s.key;if(void 0===await o||"providePassword"===await o)return g.DeviceList=[],void(g.SelectedDevice="")}var r=await s[await i];if(void 0===await r)return g.DeviceList=[],void(g.SelectedDevice="");var l=await Object.keys(await r);if(0===await l.length)return g.DeviceList=[],void(g.SelectedDevice="");s=[];for(let e=0;e<await l.length;e++){var c=await l[e];s.push(await c)}g.DeviceList=await s,g.SelectedDevice=await s[0]}catch(d){return g.DeviceList=[],void(g.SelectedDevice="")}}};var f=i(3701),O=(i(4100),i(44),i(6939)),y=i.n(O),A=(i(8137),i(207)),I=i(4104),j=i(4118),Z=i(6620),P=i(6446),F=i(9370),k=i(8944),N=i(6417);const R=w.ZP.create("header");class M extends a.Component{constructor(){super(...arguments),this.notificationSystem=a.createRef(),this.state={isPageLoading:!1,buttonWebColor:"black",buttonApiColor:"white",buttonMobileColor:"white",selectedTab:g.SelectedTab,isWebSelected:!0,environmentList:g.EnvironmentList,selectedEnv:g.SelectedEnv,isErrorOnEnvironment:g.IsErrorOnEnvironment,componentList:g.ComponentList,selectedComponent:g.SelectedComponent,isErrorOnComponent:g.IsErrorOnComponent,testingType:g.TestingType,threadList:g.ThreadList,threadCount:g.ThreadCount,listOfTestingType:g.ListOfTestingType,screenOptionList:g.ScreenOptionList,selectedScreenOption:g.SelectedScreenOption,deviceList:g.DeviceList,selectedDevice:g.SelectedDevice,allTestSuite:g.AllTestSuite,selectedTestSuite:g.SelectedTestSuite,isValidTestSuiteName:g.IsValidTestSuiteName,listOfTestScripts:g.ListOfTestScripts,selectedTestScripts:g.SelectedTestScripts,apiUrl:g.ApiUrl,customApiUrl:g.CustomApiUrl,selectedRunAtOption:g.SelectedRunAtOption,runAtOptionList:g.RunAtOptionList},this.componentDidMount=async()=>{window.scrollTo(0,0),await L.loadCICDPage(),this.setState({selectedTab:g.SelectedTab}),this.setState({buttonWebColor:await L.getWebButtonColor()}),this.setState({buttonApiColor:await L.getApiButtonColor()}),this.setState({buttonMobileColor:await L.getMobileButtonColor()}),this.setState({environmentList:g.EnvironmentList}),this.setState({selectedEnv:g.SelectedEnv}),this.setState({isErrorOnEnvironment:g.IsErrorOnEnvironment}),this.setState({componentList:g.ComponentList}),this.setState({selectedComponent:g.SelectedComponent}),this.setState({isErrorOnComponent:g.IsErrorOnComponent}),this.setState({testingType:g.TestingType}),this.setState({threadList:g.ThreadList}),this.setState({threadCount:g.ThreadCount}),this.setState({allTestSuite:g.AllTestSuite}),this.setState({selectedTestSuite:g.SelectedTestSuite}),this.setState({isValidTestSuiteName:g.IsValidTestSuiteName}),this.setState({screenOptionList:g.ScreenOptionList}),this.setState({selectedScreenOption:g.SelectedScreenOption}),this.setState({deviceList:g.DeviceList}),this.setState({selectedDevice:g.SelectedDevice}),this.setState({listOfTestScripts:g.ListOfTestScripts}),this.setState({selectedTestScripts:g.SelectedTestScripts}),this.setState({selectedRunAtOption:g.SelectedRunAtOption}),this.setState({runAtOptionList:g.RunAtOptionList})},this.getNotification=async(e,t)=>{this.notificationSystem.current.addNotification({message:t,level:e,autoDismiss:10})},this.selectWebDashboard=async()=>{"Web"!==g.SelectedTab&&(this.setState({isWebSelected:!0}),this.setState({isPageLoading:!0}),g.SelectedTab="Web",this.setState({buttonWebColor:"black"}),this.setState({buttonApiColor:"white"}),this.setState({buttonMobileColor:"white"}),g.EnvironmentList=[],this.setState({environmentList:g.EnvironmentList}),g.SelectedEnv="",this.setState({selectedEnv:g.SelectedEnv}),g.IsErrorOnEnvironment=!1,this.setState({isErrorOnEnvironment:g.IsErrorOnEnvironment}),g.ComponentList=[],this.setState({componentList:g.ComponentList}),g.SelectedComponent="",this.setState({selectedComponent:g.SelectedComponent}),g.IsErrorOnComponent=!1,this.setState({isErrorOnComponent:g.IsErrorOnComponent}),g.ListOfTestScripts=[],this.setState({listOfTestScripts:g.ListOfTestScripts}),g.SelectedTestScripts="",this.setState({selectedTestScripts:g.SelectedTestScripts}),g.TestingType="Integration Testing",this.setState({testingType:g.TestingType}),g.ThreadCount=1,this.setState({threadCount:g.ThreadCount}),g.AllTestSuite=[],this.setState({allTestSuite:g.AllTestSuite}),g.SelectedTestSuite="",this.setState({selectedTestSuite:g.SelectedTestSuite}),await L.loadCICDPage("Web"),this.setState({environmentList:g.EnvironmentList}),this.setState({selectedEnv:g.SelectedEnv}),this.setState({isErrorOnEnvironment:g.IsErrorOnEnvironment}),this.setState({componentList:g.ComponentList}),this.setState({selectedComponent:g.SelectedComponent}),this.setState({isErrorOnComponent:g.IsErrorOnComponent}),this.setState({screenOptionList:g.ScreenOptionList}),this.setState({selectedScreenOption:g.SelectedScreenOption}),this.setState({deviceList:g.DeviceList}),this.setState({selectedDevice:g.SelectedDevice}),this.setState({allTestSuite:g.AllTestSuite}),this.setState({selectedTestSuite:g.SelectedTestSuite}),this.setState({listOfTestScripts:g.ListOfTestScripts}),this.setState({selectedTestScripts:g.SelectedTestScripts}),g.ListOfTestingType=["Integration Testing"],this.setState({isPageLoading:!1}))},this.selectApiDashboard=async()=>{"Api"!==g.SelectedTab&&(this.setState({isWebSelected:!1}),this.setState({isPageLoading:!0}),g.SelectedTab="Api",this.setState({buttonWebColor:"white"}),this.setState({buttonApiColor:"black"}),this.setState({buttonMobileColor:"white"}),g.EnvironmentList=[],this.setState({environmentList:g.EnvironmentList}),g.SelectedEnv="",this.setState({selectedEnv:g.SelectedEnv}),g.IsErrorOnEnvironment=!1,this.setState({isErrorOnEnvironment:g.IsErrorOnEnvironment}),g.ComponentList=[],this.setState({componentList:g.ComponentList}),g.SelectedComponent="",this.setState({selectedComponent:g.SelectedComponent}),g.IsErrorOnComponent=!1,this.setState({isErrorOnComponent:g.IsErrorOnComponent}),g.ListOfTestScripts=[],this.setState({listOfTestScripts:g.ListOfTestScripts}),g.SelectedTestScripts="",this.setState({selectedTestScripts:g.SelectedTestScripts}),g.TestingType="Unit Testing",this.setState({testingType:g.TestingType}),g.ThreadCount=1,this.setState({threadCount:g.ThreadCount}),g.AllTestSuite=[],this.setState({allTestSuite:g.AllTestSuite}),g.SelectedTestSuite="",this.setState({selectedTestSuite:g.SelectedTestSuite}),await L.loadCICDPage("Api"),this.setState({environmentList:g.EnvironmentList}),this.setState({selectedEnv:g.SelectedEnv}),this.setState({isErrorOnEnvironment:g.IsErrorOnEnvironment}),this.setState({componentList:g.ComponentList}),this.setState({selectedComponent:g.SelectedComponent}),this.setState({isErrorOnComponent:g.IsErrorOnComponent}),this.setState({allTestSuite:g.AllTestSuite}),this.setState({selectedTestSuite:g.SelectedTestSuite}),this.setState({listOfTestScripts:g.ListOfTestScripts}),this.setState({selectedTestScripts:g.SelectedTestScripts}),g.ListOfTestingType=["Integration Testing","Unit Testing"],this.setState({listOfTestingType:g.ListOfTestingType}),this.setState({isPageLoading:!1}))},this.selectMobileDashboard=async()=>{"Mobile"!==g.SelectedTab&&(this.setState({isWebSelected:!0}),this.setState({isPageLoading:!0}),g.SelectedTab="Mobile",this.setState({buttonWebColor:"white"}),this.setState({buttonApiColor:"white"}),this.setState({buttonMobileColor:"black"}),g.EnvironmentList=[],this.setState({environmentList:g.EnvironmentList}),g.SelectedEnv="",this.setState({selectedEnv:g.SelectedEnv}),g.IsErrorOnEnvironment=!1,this.setState({isErrorOnEnvironment:g.IsErrorOnEnvironment}),g.ComponentList=[],this.setState({componentList:g.ComponentList}),g.SelectedComponent="",this.setState({selectedComponent:g.SelectedComponent}),g.IsErrorOnComponent=!1,this.setState({isErrorOnComponent:g.IsErrorOnComponent}),g.ListOfTestScripts=[],this.setState({listOfTestScripts:g.ListOfTestScripts}),g.SelectedTestScripts="",this.setState({selectedTestScripts:g.SelectedTestScripts}),g.TestingType="Integration Testing",this.setState({testingType:g.TestingType}),g.ThreadCount=1,this.setState({threadCount:g.ThreadCount}),g.AllTestSuite=[],this.setState({allTestSuite:g.AllTestSuite}),g.SelectedTestSuite="",this.setState({selectedTestSuite:g.SelectedTestSuite}),await L.loadCICDPage("Mobile"),this.setState({environmentList:g.EnvironmentList}),this.setState({selectedEnv:g.SelectedEnv}),this.setState({isErrorOnEnvironment:g.IsErrorOnEnvironment}),this.setState({componentList:g.ComponentList}),this.setState({selectedComponent:g.SelectedComponent}),this.setState({isErrorOnComponent:g.IsErrorOnComponent}),this.setState({selectedRunAtOption:g.SelectedRunAtOption}),this.setState({screenOptionList:g.ScreenOptionList}),this.setState({selectedScreenOption:g.SelectedScreenOption}),this.setState({deviceList:g.DeviceList}),this.setState({selectedDevice:g.SelectedDevice}),this.setState({allTestSuite:g.AllTestSuite}),this.setState({selectedTestSuite:g.SelectedTestSuite}),this.setState({listOfTestScripts:g.ListOfTestScripts}),this.setState({selectedTestScripts:g.SelectedTestScripts}),g.ListOfTestingType=["Integration Testing"],this.setState({isPageLoading:!1}))},this.selectEnv=async e=>{this.setState({isErrorOnEnvironment:!1});var t=await e.target.value;this.state.selectedEnv!==await t&&(this.setState({selectedEnv:await t}),g.SelectedEnv=await t)},this.selectComponent=async e=>{this.setState({isErrorOnComponent:!1});var t=await e.target.value;this.state.selectedComponent!==await t&&(this.setState({selectedComponent:await t}),g.SelectedComponent=await t)},this.selectTestingType=async e=>{var t=await e.target.value;this.state.testingType!==await t&&(this.setState({testingType:await t}),g.TestingType=await t)},this.selectThreadCount=async e=>{var t=await e.target.value;this.state.threadCount!==await t&&(this.setState({threadCount:await t}),g.ThreadCount=await t)},this.selectScreen=async e=>{var t=await e.target.value;this.state.selectedScreenOption!==await t&&(this.setState({selectedScreenOption:await t}),g.SelectedScreenOption=await t,this.setState({isPageLoading:!0}),"Web"===g.SelectedTab&&await L.setDeviceListData(await t),"Mobile"===g.SelectedTab&&await L.setDeviceInforMation(await t,await g.SelectedRunAtOption,await g.AllConfigData),this.setState({isPageLoading:!1}),this.setState({deviceList:g.DeviceList}),this.setState({SelectedDevice:g.SelectedDevice}))},this.selectDevice=async e=>{var t=await e.target.value;this.state.selectedDevice!==await t&&(this.setState({selectedDevice:await t}),g.SelectedDevice=await t)},this.selectTestSuite=async e=>{var t=await e;this.state.selectedTestSuite!==await t&&(g.SelectedTestSuite=await t,this.setState({selectedTestSuite:g.SelectedTestSuite}),g.IsValidTestSuiteName=!0,this.setState({isValidTestSuiteName:g.IsValidTestSuiteName}),this.setState({isPageLoading:!0}),await L.getTestSuiteData(await t),this.setState({isPageLoading:!1}),this.setState({selectedEnv:g.SelectedEnv}),this.setState({testingType:g.TestingType}),this.setState({threadCount:g.ThreadCount}),this.setState({listOfTestScripts:g.ListOfTestScripts}),"Web"===g.SelectedTab&&(this.setState({selectedScreenOption:g.SelectedScreenOption}),this.setState({selectedDevice:g.SelectedDevice})))},this.addNewTestSuite=async e=>{var t=await e;if(this.state.selectedTestSuite!==await t){if(g.SelectedTestSuite=await t,this.setState({selectedTestSuite:g.SelectedTestSuite}),g.ListOfTestScripts=[],this.setState({listOfTestScripts:g.ListOfTestScripts}),g.SelectedTestScripts=[],this.setState({selectedTestScripts:g.SelectedTestScripts}),""===t.toString().trim())return g.IsValidTestSuiteName=!1,void this.setState({isValidTestSuiteName:g.IsValidTestSuiteName});/[^A-Za-z0-9-]/gi.test(await t)?(g.IsValidTestSuiteName=!1,this.setState({isValidTestSuiteName:g.IsValidTestSuiteName})):(g.IsValidTestSuiteName=!0,this.setState({isValidTestSuiteName:g.IsValidTestSuiteName}))}},this.handleOnSelect=async(e,t)=>{await t?(g.SelectedTestScripts.push(e.id),this.setState({selectedTestScripts:g.SelectedTestScripts})):(g.SelectedTestScripts=g.SelectedTestScripts.filter((t=>t!==e.id)),this.setState({selectedTestScripts:g.SelectedTestScripts}))},this.handleOnSelectAll=async e=>{const t=this.state.listOfTestScripts.map((e=>e.id));if(e){g.SelectedTestScripts=[];for(let e=0;e<t.length;e++)g.SelectedTestScripts.push(t[e]);this.setState({selectedTestScripts:g.SelectedTestScripts})}else this.setState((()=>({selectedTestScripts:[]}))),g.SelectedTestScripts=[]},this.selectRunAtOption=async e=>{var t=await e.target.value;this.state.selectedRunAtOption!==await t&&(this.setState({selectedRunAtOption:await t}),g.SelectedRunAtOption=await t)}}async LoadTestScripts(){this.setState({selectedTestScripts:[]}),g.SelectedTestScripts=[],this.setState({listOfTestScripts:[]}),g.ListOfTestScripts=[];var e=this.state.selectedComponent;if(""===e||void 0===e)return this.setState({isErrorOnComponent:!0}),await this.getNotification("error","Component can not be left blank.");await this.setState({isPageLoading:!0}),await L.getAllTestScriptsfromComponent(g.SelectedComponent),await this.setState({isPageLoading:!1}),this.setState({listOfTestScripts:g.ListOfTestScripts})}async saveTestSuite(){if(""!==this.state.selectedTestSuite.toString().trim()&&this.state.isValidTestSuiteName){var e=this.state.listOfTestScripts;if(0===await e.length)return await this.getNotification("error","There is no test script found, Please load the test script before saving test suite");if(0===this.state.selectedTestScripts.length)return await this.getNotification("error","Please select test script before saving test suite");if("Web"===g.SelectedTab||"Mobile"===g.SelectedTab){var t=this.state.selectedScreenOption;if(""===await t)return await this.getNotification("error","Please select Screen name before saving test suite");var i=this.state.selectedDevice;if(""===await i)return await this.getNotification("error","Please select Devive name before saving test suite")}this.setState({isPageLoading:!0});var s=await L.saveTestSuite();return this.setState({isPageLoading:!1}),s?await this.getNotification("success","Custom Test Suite file saved successfully"):await this.getNotification("error","Unable to save default custom test suite because of "+C.D.ErrorMessage)}return await this.getNotification("error","Please add the valid Test suite name")}render(){const e={mode:"checkbox",selected:this.state.selectedTestScripts,onSelect:this.handleOnSelect,onSelectAll:this.handleOnSelectAll};return(0,N.jsxs)(s.Z,{className:"ciccdpage",title:"Integrate with CI/CD tool",children:[this.state.isPageLoading&&(0,N.jsx)(A.Z,{sentences:I.b,height:"150%",color:"black"}),(0,N.jsxs)(n.Z,{in:!this.state.isPageLoading,children:[(0,N.jsx)(y(),{ref:this.notificationSystem}),(0,N.jsx)(o.Z,{children:(0,N.jsxs)(r.Z,{className:R.e("nav-right"),children:[(0,N.jsxs)(l.Z,{children:[(0,N.jsx)("img",{alt:"jenkins",height:"32",width:"32",src:"https://cdn.simpleicons.org/jenkins/grey"}),(0,N.jsx)("img",{alt:"azure",height:"32",width:"32",src:"https://cdn.simpleicons.org/AzureDevOps/black"})]}),(0,N.jsxs)(c.Z,{className:"mr-3 mb-3",size:"sm",children:[C.D.isUIComponentDisplayed&&(0,N.jsx)(d.Z,{color:this.state.buttonWebColor,onClick:this.selectWebDashboard.bind(this),children:"Web"}),C.D.isApiComponentDisplayed&&(0,N.jsx)(d.Z,{color:this.state.buttonApiColor,onClick:this.selectApiDashboard.bind(this),children:"Api"}),C.D.isMobileComponentDisplayed&&(0,N.jsx)(d.Z,{color:this.state.buttonMobileColor,onClick:this.selectMobileDashboard.bind(this),children:"Mobile"})]})]})}),(0,N.jsxs)(o.Z,{children:[(0,N.jsx)(l.Z,{lg:6,md:6,sm:6,xs:12,children:(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(h.Z,{children:"Execution Configuration*"}),(0,N.jsx)(p.Z,{children:(0,N.jsx)(u.Z,{children:(0,N.jsxs)(m.Z,{row:!0,children:[(0,N.jsx)(T.Z,{sm:6,children:"Environment*"}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(v.Z,{type:"select",invalid:this.state.isErrorOnEnvironment,onChange:this.selectEnv.bind(this),name:"envList",value:this.state.selectedEnv,children:(0,N.jsx)(k.Z,{options:this.state.environmentList})})}),(0,N.jsx)(T.Z,{sm:6,children:"Testing type*"}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(v.Z,{type:"select",name:"testingType",value:this.state.testingType,onChange:this.selectTestingType.bind(this),children:(0,N.jsx)(k.Z,{options:this.state.listOfTestingType})})}),(0,N.jsx)(T.Z,{sm:6,children:"Thread count*"}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(v.Z,{type:"select",name:"threadCount",value:this.state.threadCount,onChange:this.selectThreadCount.bind(this),children:(0,N.jsx)(k.Z,{options:this.state.threadList})})}),(0,N.jsx)(T.Z,{sm:6,children:"Component*"}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(v.Z,{invalid:this.state.isErrorOnComponent,type:"select",onChange:this.selectComponent.bind(this),name:"componentList",value:this.state.selectedComponent,children:(0,N.jsx)(k.Z,{options:this.state.componentList})})})]})})})]})}),(0,N.jsx)(l.Z,{lg:6,md:6,sm:6,xs:12,children:(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(h.Z,{children:"Create your custom test suite"}),(0,N.jsx)(p.Z,{children:(0,N.jsxs)(u.Z,{children:[(0,N.jsxs)(m.Z,{row:!0,children:[(0,N.jsx)(T.Z,{sm:6,children:"Test Suite Name"}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(P.hQ,{defaultValue:this.state.selectedTestSuite,data:this.state.allTestSuite,onSelect:this.selectTestSuite.bind(this),onChange:this.addNewTestSuite.bind(this)})})]}),this.state.isWebSelected&&(0,N.jsxs)(m.Z,{row:!0,children:[(0,N.jsx)(T.Z,{sm:6,children:"Screen*"}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(v.Z,{type:"select",name:"screen",value:this.state.selectedScreenOption,onChange:this.selectScreen.bind(this),children:(0,N.jsx)(k.Z,{options:this.state.screenOptionList})})}),(0,N.jsx)(T.Z,{sm:6,children:"Device/Browser*"}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(v.Z,{type:"select",name:"screen",value:this.state.selectedDevice,onChange:this.selectDevice.bind(this),children:(0,N.jsx)(k.Z,{options:this.state.deviceList})})}),(0,N.jsx)(T.Z,{sm:6,children:"Run at*"}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(v.Z,{type:"select",onChange:this.selectRunAtOption.bind(this),name:"screenshotOptionsList",value:this.state.selectedRunAtOption,children:(0,N.jsx)(k.Z,{options:this.state.runAtOptionList})})})]})]})})]})})]}),(0,N.jsx)(o.Z,{children:(0,N.jsx)(l.Z,{lg:12,md:12,sm:12,xs:12,children:(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(h.Z,{children:(0,N.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Choose Your Test Scripts",(0,N.jsxs)(c.Z,{size:"sm",children:[(0,N.jsx)(d.Z,{color:"black",name:"loadTestScript",onClick:this.LoadTestScripts.bind(this),children:(0,N.jsx)("small",{children:"Load"})}),(0,N.jsx)(d.Z,{color:"info",name:"saveCustomSuite",onClick:this.saveTestSuite.bind(this),children:(0,N.jsx)("small",{children:"Save Test Suite"})})]})]})}),(0,N.jsx)(p.Z,{children:(0,N.jsx)(l.Z,{style:{overflowX:"auto",maxWidth:"100%"},children:(0,N.jsx)(f.Z,{keyField:"id",data:this.state.listOfTestScripts,columns:F.dI,wrapperClasses:"table-responsive",striped:!0,hover:!0,condensed:!0,selectRow:e,filter:(0,j.ZP)(),pagination:(0,Z.ZP)()})})})]})})})]})]})}}const W=M},4501:(e,t,i)=>{i.d(t,{W:()=>s});var s={TotalTestScripts:0,TotalComponents:0,TotalTestScriptsOnLastExecution:0,PassPercentageInLastExecution:0,ModuleScriptCountXaxis:[],ModuleScriptCountYaxis:[],ComponentScriptCountColorCode:["#0E24DE"],EnvironmentList:[],SelectedEnvironment:"",ReportHistoryCounter:10,TotalPassFailInLastXResults:[],TotalPassFailColorCode:["#0C84EF","#EF0C7E"],ExecutionXaxisInLastXResults:[],ExecutionYaxisInLastXResults:[],ExecutionHistoryColorCode:["#186A3B","#CB4335"],ExecutionTimeXaxisInLastXResults:[],ExecutionTimeYaxisInLastXResults:[],ExecutionTimeColorCode:["#0E24DE"],FailedComponentInLastXResults:[],ComponentFailedCountColorCode:["#DA0F25"],PastDateList:[],DayWiseTestScriptDevelopment:[],DayWiseTestExecutionData:[],TestScriptDevelopmentColorCode:["#5A1D75"],TestScriptExecutionColorCode:["#0000FF"],SelectedExecutionDate:"",ListOfExecutionTimeForaDay:[],SelectedExecutionTime:"",TableDataforDetailedReports:[],SelectedTab:"",DefaultSaveDaysToReport:10,DefaultSaveDaysToDevelopment:30,ListOfPastDateforDaysToDevelopment:[],IsViewResultButtonDisabled:!0,SelectedReportTotalPassFailData:[[]],SelectedReportListOfTestScripts:[{}],SelectedReportExecutionTimeGraphXaxis:[],SelectedReportExecutionTimeGraphYaxis:[[]],SelectedReportExecutionTimeColor:["#F39C12"],SelectedReportComponentPassFailData:[[]],AssertionResultsForAllResults:{},ResponseDataForAllResults:{},TestingMethod:"Unit Testing",IsScreenshotModalOpen:!1,ImageData:"",StepsDetailsForScreenshot:"",ExecutionTimeForUITestScripts:{},ExistingReportTestExecutionTime:"10 Seconds",ExistingReportExecutionStartFrom:"QAautoMATER",ExistingReportExecutionPlatform:"",ExistingReportExecutionDevice:""}},6075:(e,t,i)=>{i.d(t,{Z:()=>d});i(7313),i(6982);var s=i(9174),a=i(3476),n=i(1583),o=i(5277),r=i(6417);const l=s.ZP.create("page"),c=e=>{let{title:t,breadcrumbs:i,tag:s,className:c,children:d,...S}=e;const h=l.b("px-3",c);return(0,r.jsxs)(s,{className:h,...S,children:[(0,r.jsxs)("div",{className:l.e("header"),children:[t&&"string"===typeof t?(0,r.jsx)(o.Z,{type:"h1",className:l.e("title"),children:t}):t,i&&(0,r.jsxs)(a.Z,{className:l.e("breadcrumb"),children:[(0,r.jsx)(n.Z,{children:"Home"}),i.length&&i.map(((e,t)=>{let{name:i,active:s}=e;return(0,r.jsx)(n.Z,{active:s,children:i},t)}))]})]}),d]})};c.defaultProps={tag:"div",title:""};const d=c},5277:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(6123),a=i.n(s),n=(i(7313),i(6982),i(6417));const o={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},r=e=>{let{tag:t,className:i,type:s,...r}=e;const l=a()({[s]:!!s},i);let c;return c=t||(!t&&o[s]?o[s]:"p"),(0,n.jsx)(c,{...r,className:l})};r.defaultProps={type:"p"};const l=r}}]);
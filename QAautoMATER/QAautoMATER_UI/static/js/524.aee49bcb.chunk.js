"use strict";(self.webpackChunkqaautomater=self.webpackChunkqaautomater||[]).push([[524],{66075:(t,e,a)=>{a.d(e,{Z:()=>d});a(47313),a(66982);var i=a(99174),s=a(63476),n=a(61583),o=a(35277),r=a(46417);const l=i.ZP.create("page"),m=t=>{let{title:e,breadcrumbs:a,tag:i,className:m,children:d,...c}=t;const h=l.b("px-3",m);return(0,r.jsxs)(i,{className:h,...c,children:[(0,r.jsxs)("div",{className:l.e("header"),children:[e&&"string"===typeof e?(0,r.jsx)(o.Z,{type:"h1",className:l.e("title"),children:e}):e,a&&(0,r.jsxs)(s.Z,{className:l.e("breadcrumb"),children:[(0,r.jsx)(n.Z,{children:"Home"}),a.length&&a.map(((t,e)=>{let{name:a,active:i}=t;return(0,r.jsx)(n.Z,{active:i,children:a},e)}))]})]}),d]})};m.defaultProps={tag:"div",title:""};const d=m},92524:(t,e,a)=>{a.r(e),a.d(e,{default:()=>R});var i=a(66075),s=a(47313),n=a(40106),o=a(66782),r=a(25399),l=a(70238),m=a(52527),d=a(44660),c=a(9327),h=a(33516),w=a(23455),v=a(82020),D=a(68642),g=a(46597),T=a(40308),u=a(94209),E=a(1781),b=a(72147),f=a(33333),C=a(58390),p=a(79696),x=a(63386);const y=new class{async testDataPageLoad(){try{var t;t=await f.Z.readConfigurationFile("Web"),b.s.AllConfigData=await t,await this.renderEnvironment(await t),await this.readCommonTestData(),await this.renderTestDataColumn()}catch(e){}}async renderTestDataColumn(){var t=await x.ZR,e=await b.s.TestDataExistingEnvironment;for(let i=0;i<await e.length;i++){let s=await e[i];const n=await t.some((t=>t.dataField===s));if(!await n){var a={dataField:await s,text:await s};t.push(await a)}}b.s.TestDataTableColumn=await t}async renderEnvironment(t){try{var e=await t.Environment;if(void 0===await e)b.s.EnvironmentList=[];else if(0===await e.length)b.s.EnvironmentList=[];else{var a=[];for(let t=0;t<await e.length;t++){var i=await e[t].name;await a.push(await i)}b.s.EnvironmentList=await a}}catch(s){b.s.EnvironmentList=[]}}async saveCommonTestData(){if(C.D.isDemo)return await new Promise((t=>setTimeout(t,3e3))),!0;try{var t=await localStorage.getItem("UserSelectedAccount"),e=C.D.backendAPI;"remote"===await C.D.backendServiceAt&&(e=C.D.remoteBackendAPI);var a={};a.keyForAddandUpdate=await b.s.TestDataToAdd,a.keyForDelete=await b.s.DeletedKey;var i={Authorization:await C.Q.userToken,userEmail:await C.Q.userEmail},s=await p.Z.post(e+"testdata/project/"+t+"/testingtype/Web",await i,await a),n=await s.data;return C.D.ErrorMessage=await n.errorMessage,await n.isFileSaved}catch(o){C.D.ErrorMessage=await o.message}}async readCommonTestData(){if(C.D.isDemo)b.s.AllCommonTestData=[{id:1,key:"searchItem",value:"QAautoMATER"}];else{var t=await localStorage.getItem("UserSelectedAccount"),e=C.D.backendAPI;"remote"===await C.D.backendServiceAt&&(e=C.D.remoteBackendAPI);var a={Authorization:await C.Q.userToken,userEmail:await C.Q.userEmail},i=await p.Z.get(e+"testdata/project/"+t+"/testingtype/Web",await a),s=await i.data;if(void 0===s)b.s.AllCommonTestData=[],b.s.TestDataExistingEnvironment=[];else{var n=[],o=await s.CommonTestData;if(void 0===await o)b.s.AllCommonTestData=await n;else{var r=await Object.keys(await o);for(let t=0;t<await r.length;t++){var l=await r[t],m={id:t+1,key:await l},d=await Object.keys(await o[await l]);for(let t=0;t<await d.length;t++){var c=await d[t],h=await o[await l][await c];m[await c]=await h}n.push(await m)}b.s.AllCommonTestData=await n}var w=await s.TestDataExistingEnvironment;void 0===await w?b.s.TestDataExistingEnvironment=[]:b.s.TestDataExistingEnvironment=await w}}}async saveNewEnvironmentInCommonTestData(t){if(C.D.isDemo)return await new Promise((t=>setTimeout(t,3e3))),!0;try{var e=await localStorage.getItem("UserSelectedAccount"),a=C.D.backendAPI;"remote"===await C.D.backendServiceAt&&(a=C.D.remoteBackendAPI);var i={};i.envname=await t;var s={Authorization:await C.Q.userToken,userEmail:await C.Q.userEmail},n=await p.Z.post(a+"testdata/project/"+e+"/testingtype/Web/addnewenvironment",await s,await i),o=await n.data;return C.D.ErrorMessage=await o.errorMessage,await o.isFileSaved}catch(r){C.D.ErrorMessage=await r.message}}async deleteEnvironmentInCommonTestData(t){if(C.D.isDemo)return await new Promise((t=>setTimeout(t,3e3))),!0;try{var e=await localStorage.getItem("UserSelectedAccount"),a=C.D.backendAPI;"remote"===await C.D.backendServiceAt&&(a=C.D.remoteBackendAPI);var i={};i.envname=await t;var s={Authorization:await C.Q.userToken,userEmail:await C.Q.userEmail},n=await p.Z.post(a+"testdata/project/"+e+"/testingtype/Web/deleteenvironment",await s,await i),o=await n.data;return C.D.ErrorMessage=await o.errorMessage,await o.isFileSaved}catch(r){C.D.ErrorMessage=await r.message}}};var S=a(43701),j=(a(34100),a(44),a(80758)),k=a(16939),Z=a.n(k),N=(a(18137),a(50207)),A=a(4104),P=a(94118),L=a(36620),I=a(78944),F=a(46417);class M extends s.Component{constructor(){super(...arguments),this.notificationSystem=s.createRef(),this.state={isPageLoading:!1,testDataTableColumn:b.s.TestDataTableColumn,testDataExistingEnvironment:b.s.TestDataExistingEnvironment,allCommonTestData:b.s.AllCommonTestData,selectedRowFromCommonTestDataTable:b.s.SelectedRowFromCommonTestDataTable,isDataValidInCommonTestDataTable:b.s.IsDataValidInCommonTestDataTable,newEnvModal:!1,isErroronEnvList:!1,selectedEnvironment:"",environmentList:b.s.EnvironmentList},this.componentDidMount=async()=>{this.setState({isPageLoading:!0}),await window.scrollTo(0,0),await y.testDataPageLoad(),this.setState({testDataTableColumn:b.s.TestDataTableColumn}),this.setState({testDataExistingEnvironment:b.s.TestDataExistingEnvironment}),this.setState({allCommonTestData:await b.s.AllCommonTestData}),this.setState({selectedRowFromCommonTestDataTable:await b.s.SelectedRowFromCommonTestDataTable}),this.setState({isDataValidInCommonTestDataTable:await b.s.IsDataValidInCommonTestDataTable}),this.setState({environmentList:await b.s.EnvironmentList}),this.setState({isPageLoading:!1})},this.getNotification=async(t,e)=>{this.notificationSystem.current.addNotification({message:e,level:t,autoDismiss:10})},this.selectRadioButtonFromCommonTestDataTable=async(t,e)=>{await e&&(b.s.SelectedRowFromCommonTestDataTable=await t.id,this.setState({selectedRowFromCommonTestDataTable:await t.id}))},this.addNewData=async t=>{await t.preventDefault();var e=this.state.allCommonTestData;if(e.length>0&&""===e[e.length-1].key.toString().trim())return this.setState({isDataValidInCommonTestDataTable:!1}),await this.getNotification("error","Please add correct details in 'Common Test data' table section");this.setState({isDataValidInCommonTestDataTable:!0});var a={id:e.length+1,key:""},i=this.state.testDataTableColumn;for(let n=0;n<await i.length;n++){var s=await i[n].dataField;"id"!==await s&&"key"!==await s&&(a[await s]="")}this.setState({allCommonTestData:[...this.state.allCommonTestData,a]}),b.s.AllCommonTestData.push(a)},this.deleteTestData=async t=>{await t.preventDefault();var e=this.state.allCommonTestData;if(0===e.length)return await this.getNotification("error","No information is found under 'Common Test Data' table section");if(!(Number(this.state.selectedRowFromCommonTestDataTable)>0&&Number(this.state.selectedRowFromCommonTestDataTable)<=e.length))return this.setState({isDataValidInCommonTestDataTable:!1}),await this.getNotification("error","No Row is selected in 'Common Test Data' table section");var a=await this.state.allCommonTestData[Number(this.state.selectedRowFromCommonTestDataTable)-1].key;""!==a.toString().trim()&&(await b.s.DeletedKey.includes(await a)||await b.s.DeletedKey.push(await a));var i=await f.Z.updateRowIdAfterDelete(e,this.state.selectedRowFromCommonTestDataTable);this.setState({allCommonTestData:[]},(()=>{this.setState({allCommonTestData:i})})),b.s.AllCommonTestData=i,this.setState({selectedRowFromCommonTestDataTable:-1}),b.s.SelectedRowFromCommonTestDataTable=-1},this.saveCommonTestData=async t=>{await t.preventDefault();var e=this.state.allCommonTestData;if(this.state.isDataValidInCommonTestDataTable){if(e.length>0)if(""===e[e.length-1].key.toString().trim())return await this.getNotification("error","Please add correct details in 'Common Test data' table section");if(0===await Object.keys(await b.s.TestDataToAdd).length&&0===await b.s.DeletedKey.length)return await this.getNotification("error","There is no any test data added or updated.");b.s.AllCommonTestData=e,this.setState({isPageLoading:!0});var a=await y.saveCommonTestData();return this.setState({isPageLoading:!1}),a?await this.getNotification("success","Common test data information is successfully saved."):await this.getNotification("error","Unable to save common test data because of "+C.D.ErrorMessage)}return this.setState({isPageLoading:!1}),await this.getNotification("error","Please add the correct information in 'Common Test Data' table")},this.openNewEnvironmentModal=async t=>{this.setState({isErroronEnvList:!1}),this.setState({newEnvModal:!0}),this.setState({selectedEnvironment:""})},this.toggleNewEnvModal=async()=>{this.setState({isErroronEnvList:!1}),this.setState({newEnvModal:!1})},this.selectEnv=async t=>{this.setState({isErroronEnvList:!1});var e=await t.target.value;this.state.selectedEnvironment!==await e&&this.setState({selectedEnvironment:await e})},this.addNewEnvironment=async t=>{await t.preventDefault();var e=await this.state.selectedEnvironment;if(""===await e)return this.setState({isErroronEnvList:!0}),await this.getNotification("error","Please select environment, if there is no environment please add environment from the configuration page.");var a=await this.state.testDataExistingEnvironment;if(await a.includes(await e))return this.setState({isErroronEnvList:!0}),await this.getNotification("error","Environment is already present in common test data, Please add different environment.");this.setState({isPageLoading:!0});var i=await y.saveNewEnvironmentInCommonTestData(await e);if(this.setState({isPageLoading:!1}),!i)return await this.getNotification("error","Unable to save new environment because of "+C.D.ErrorMessage);this.setState({newEnvModal:!1}),await this.getNotification("success","New Environment "+await e+" is successfully added on Common Test data page."),await new Promise((t=>setTimeout(t,1e3))),await window.location.reload()},this.deleteEnvironment=async t=>{await t.preventDefault();var e=await this.state.selectedEnvironment;if(""===await e)return this.setState({isErroronEnvList:!0}),await this.getNotification("error","Environment name can not be blank.");var a=await this.state.testDataExistingEnvironment;if(!await a.includes(await e))return this.setState({isErroronEnvList:!0}),await this.getNotification("error","Environment is already does not exist in common test data page.");this.setState({isPageLoading:!0});var i=await y.deleteEnvironmentInCommonTestData(await e);if(this.setState({isPageLoading:!1}),!i)return await this.getNotification("error","Unable to delete environment because of "+C.D.ErrorMessage);this.setState({newEnvModal:!1}),await this.getNotification("success","Environment "+await e+" is successfully deleted from Common Test data page."),await new Promise((t=>setTimeout(t,1e3))),await window.location.reload()}}render(){const t={mode:"radio",onSelect:this.selectRadioButtonFromCommonTestDataTable,selected:[this.state.selectedRowFromCommonTestDataTable]};return(0,F.jsxs)(i.Z,{className:"testDataPage",title:"Common Test Data",children:[this.state.isPageLoading&&(0,F.jsx)(N.Z,{sentences:A.b,height:"150%",color:"black"}),(0,F.jsxs)(n.Z,{in:!this.state.isPageLoading,children:[(0,F.jsx)(Z(),{ref:this.notificationSystem}),(0,F.jsx)(o.Z,{children:(0,F.jsx)(r.Z,{lg:12,md:12,sm:12,xs:12,children:(0,F.jsxs)(l.Z,{children:[(0,F.jsx)(m.Z,{children:(0,F.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Add or Delete Environment",(0,F.jsx)(d.Z,{size:"sm",children:(0,F.jsx)(c.Z,{color:"black",onClick:this.openNewEnvironmentModal.bind(this),children:(0,F.jsx)("small",{children:"Add New Environment"})})})]})}),(0,F.jsx)(h.Z,{children:(0,F.jsxs)(l.Z,{children:[(0,F.jsx)(m.Z,{children:(0,F.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Add or Update Common Test Data",(0,F.jsxs)(d.Z,{size:"sm",children:[(0,F.jsx)(c.Z,{color:"black",onClick:this.addNewData.bind(this),children:(0,F.jsx)("small",{children:"Add"})}),(0,F.jsx)(c.Z,{color:"info",onClick:this.saveCommonTestData.bind(this),children:(0,F.jsx)("small",{children:"Save"})}),(0,F.jsx)(c.Z,{color:"black",onClick:this.deleteTestData.bind(this),children:(0,F.jsx)("small",{children:"Delete"})})]})]})}),(0,F.jsx)(h.Z,{children:(0,F.jsx)(h.Z,{children:(0,F.jsx)(r.Z,{children:(0,F.jsx)(S.Z,{keyField:"id",data:this.state.allCommonTestData,columns:this.state.testDataTableColumn,wrapperClasses:"table-responsive",striped:!0,hover:!0,condensed:!0,selectRow:t,cellEdit:(0,j.ZP)({mode:"click",blurToSave:!0,afterSaveCell:(t,e,a,i)=>{var s=a.key.toString().trim().toUpperCase();if(a.key=s,""!==s){void 0===b.s.TestDataToAdd[s]&&(b.s.TestDataToAdd[s]={});var n=Object.keys(a);for(let t=0;t<n.length;t++){var o=n[t];"id"!==o&&"key"!==o&&(b.s.TestDataToAdd[s][o]=a[o])}}}}),pagination:(0,L.ZP)(),filter:(0,P.ZP)()})})})})]})})]})})})]}),(0,F.jsxs)(w.Z,{isOpen:this.state.newEnvModal,className:this.props.className,backdrop:"static",children:[this.state.isPageLoading&&(0,F.jsx)(N.Z,{sentences:A.b,height:"2000%",color:"black"}),(0,F.jsx)(v.Z,{toggle:this.toggleNewEnvModal.bind(this),children:"Add new environment"}),(0,F.jsx)(D.Z,{children:(0,F.jsxs)(g.Z,{children:[(0,F.jsxs)(T.Z,{col:"true",children:[(0,F.jsx)(u.Z,{sm:5,children:"Environment*"}),(0,F.jsx)(r.Z,{children:(0,F.jsxs)(E.Z,{type:"select",name:"environment",invalid:this.state.isErroronEnvList,onChange:this.selectEnv.bind(this),value:this.state.selectedEnvironment,children:[(0,F.jsx)("option",{}),(0,F.jsx)(I.Z,{options:this.state.environmentList})]})})]}),(0,F.jsx)(T.Z,{row:!0,children:(0,F.jsxs)(d.Z,{size:"sm",children:[(0,F.jsx)(c.Z,{color:"black",onClick:this.addNewEnvironment.bind(this),children:(0,F.jsx)("small",{children:"Add"})}),(0,F.jsx)(c.Z,{color:"info",onClick:this.deleteEnvironment.bind(this),children:(0,F.jsx)("small",{children:"Delete"})})]})})]})})]})]})}}const R=M},35277:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(46123),s=a.n(i),n=(a(47313),a(66982),a(46417));const o={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},r=t=>{let{tag:e,className:a,type:i,...r}=t;const l=s()({[i]:!!i},a);let m;return m=e||(!e&&o[i]?o[i]:"p"),(0,n.jsx)(m,{...r,className:l})};r.defaultProps={type:"p"};const l=r},18137:()=>{}}]);
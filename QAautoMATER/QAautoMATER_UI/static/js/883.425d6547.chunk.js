"use strict";(self.webpackChunkqaautomater=self.webpackChunkqaautomater||[]).push([[883],{6883:(e,t,s)=>{s.r(t),s.d(t,{default:()=>q});var a=s(6095),i=s(9950),o=s(7176),n=s(6114),r=s(4084),d=s(7537),l=s(8156),c=s(9708),h=s(9969),p=s(1646),m=s(5488),y=s(9343),u=s(3452),S=s(5961),w=s(532),D=s(5845),R=s(1184),x=s(3383),v=s(6228),b=s(1638),g=s(1312),A=s(7319),j=[{dataField:"id",text:"#",headerStyle:{width:"30px"}},{dataField:"key",text:"Key",headerStyle:{width:"200px"},validator:async(e,t,s,a)=>{if(""===await e.trim())return a({valid:!1,message:"key name can not be empty"});var i=await b.A.jsonArrayGetallKeyValue(R.Z.ResponseHeaderData,"key");return await g.A.isValuePresentInArray(await i,await e)?a({valid:!1,message:"key name can not be duplicate."}):a()}},{dataField:"value",text:"Value",headerStyle:{width:"300px"},validator:async(e,t,s,a)=>""===await e.trim()?a({valid:!1,message:"value can not be empty"}):a()}],T=[{dataField:"id",text:"#",headerStyle:{width:"40px"}},{dataField:"key",text:"Data Key",editable:!1,headerStyle:{width:"170px"},filter:(0,A.CA)({className:"test-classname",placeholder:"Search"})},{dataField:"custom",text:"Parameter",headerStyle:{width:"150px"}}],k=s(6502),f=(s(2104),s(7692),s(248)),I=s(946),N=s(9455),Z=s.n(N),M=(s(8486),s(8795)),B=s.n(M),C=s(159),H=s(5079),O=s(2592),F=s(3284),P=s(576),E=(s(6681),s(4414));class L extends i.Component{constructor(){super(...arguments),this.notificationSystem=i.createRef(),this.state={isPageLoading:!1,allComponentList:R.Z.AllComponentList,selectedComponent:R.Z.SelectedComponent,isErrorOnComponentName:R.Z.IsErrorOnComponentName,allTestId:R.Z.AllTestId,selectedTestId:R.Z.SelectedTestId,isErrorOnTestId:R.Z.IsErrorOnTestId,testName:R.Z.TestName,isMockResponseOverride:R.Z.IsMockResponseOverride,responseHeaderData:R.Z.ResponseHeaderData,selectedRowForResponseHeaderTable:R.Z.SelectedRowForResponseHeaderTable,responseBody:R.Z.ResponseBody,isDynamicDataButtonDisable:R.Z.IsDynamicDataButtonDisable,selectedKeyNameInRequestBody:"",selectedKeyNameSpaceinRequestBody:[],testDataModal:!1,dynamicDataValue:"",selectedRowFromDynamicDataTable:R.Z.SelectedRowFromDynamicDataTable},this.componentDidMount=async()=>{window.scrollTo(0,0),this.setState({isPageLoading:!0}),await x.A.apiMockRepoPageLoadData(),this.setState({allComponentList:R.Z.AllComponentList}),this.setState({selectedComponent:R.Z.SelectedComponent}),this.setState({isErrorOnComponentName:R.Z.IsErrorOnComponentName}),this.setState({allTestId:R.Z.AllTestId}),this.setState({selectedTestId:R.Z.SelectedTestId}),this.setState({isErrorOnTestId:R.Z.IsErrorOnTestId}),this.setState({testName:R.Z.TestName}),this.setState({isMockResponseOverride:R.Z.IsMockResponseOverride}),this.setState({responseHeaderData:R.Z.ResponseHeaderData}),this.setState({selectedRowForResponseHeaderTable:R.Z.SelectedRowForResponseHeaderTable}),this.setState({responseBody:R.Z.ResponseBody}),this.setState({isDynamicDataButtonDisable:R.Z.IsDynamicDataButtonDisable}),this.setState({selectedRowFromDynamicDataTable:R.Z.SelectedRowFromDynamicDataTable}),this.setState({isPageLoading:!1})},this.getNotification=async(e,t)=>{this.notificationSystem.current.addNotification({message:t,level:e,autoDismiss:10})},this.selectComponent=async e=>{var t=await e.target.value;this.setState({isErrorOnComponentName:!1}),this.state.selectedComponent!==await t&&(R.Z.SelectedComponent=await t,this.setState({selectedComponent:R.Z.SelectedComponent}),this.setState({allTestId:[]}),this.setState({selectedTestId:""}),this.setState({testName:""}),this.setState({isPageLoading:!0}),await x.A.getTestIdAndTestName(await t),this.setState({isPageLoading:!1}),this.setState({allTestId:R.Z.AllTestId}),this.setState({isMockResponseOverride:!1}),R.Z.IsMockResponseOverride=!1)},this.selectTestId=async e=>{var t=await e.target.value;if(this.setState({isErrorOnTestId:!1}),this.state.selectedTestId!==await t){R.Z.SelectedTestId=await t,this.setState({selectedTestId:R.Z.SelectedTestId}),await x.A.getTestName(await t),this.setState({testName:R.Z.TestName}),this.setState({isPageLoading:!0});var s=await x.A.getMockDataForExistingTestId(R.Z.SelectedComponent,R.Z.SelectedTestId,R.Z.TestName,"Api");if(this.setState({isPageLoading:!1}),Object.keys(s).length>0){this.setState({responseHeaderData:await s.ResponseHeader}),this.setState({responseBody:await s.ResponseBody}),R.Z.ResponseBody=await s.ResponseBody,R.Z.ResponseHeaderData=await s.ResponseHeader;var a=await s.IsMockResponseOverride;void 0===await a?(this.setState({isMockResponseOverride:!1}),R.Z.IsMockResponseOverride=!1):(this.setState({isMockResponseOverride:await a}),R.Z.IsMockResponseOverride=await a),R.Z.IsMockedTestIdOnServer=!0}else this.setState({responseHeaderData:[{id:1,key:"content-type",value:"application/json"}]}),this.setState({responseBody:{MockedResponseBody:"Paste Mock Response Body here"}}),this.setState({isMockResponseOverride:!1}),R.Z.IsMockResponseOverride=!1,R.Z.IsMockedTestIdOnServer=!1}},this.changeMockResponseOverrideValue=async e=>{var t=await e.target.checked;this.setState({isMockResponseOverride:await t}),R.Z.IsMockResponseOverride=await t},this.toggle=async()=>{this.setState({apiResponseModalView:!1})},this.toggleTestData=async()=>{this.setState({testDataModal:!1})},this.selectRadioButtonFromDynamicDataTable=async(e,t)=>{await t&&(R.Z.SelectedRowFromDynamicDataTable=await e.id,this.setState({selectedRowFromDynamicDataTable:await e.id}))},this.updateRequestBodyKeyData=async()=>{var e={},t=Number(this.state.selectedRowFromDynamicDataTable);if(!(t>-1))return await this.getNotification("error","Please select any data key before evaluating the value");var s,a=H.G[Number(t)-1].key,i=H.G[Number(t)-1].custom,o=this.state.selectedKeyNameInRequestBody,n=this.state.selectedKeyNameSpaceinRequestBody;""!==o.trim()&&(e=this.state.responseBody,s=""!==i.trim()?"{{RandomData."+a+"||"+i+"}}":"{{RandomData."+a+"}}",e=await x.A.updateRequestBody(this.state.responseBody,await n,s),this.setState({responseBody:{}},(()=>{this.setState({responseBody:e})})),R.Z.ResponseBody=this.state.responseBody),this.setState({testDataModal:!1}),this.setState({isDynamicDataButtonDisable:!0}),this.setState({selectedRowFromDynamicDataTable:-1}),this.setState({dynamicDataValue:""})},this.evaluateDymanicDataValue=async()=>{var e=Number(this.state.selectedRowFromDynamicDataTable);if(!(e>-1))return await this.getNotification("error","Please select any data key before evaluating the value");var t=H.G[Number(e)-1].key,s=H.G[Number(e)-1].custom,a=await x.A.getDynamicDataValue(t,s);this.setState({dynamicDataValue:a})},this.selectRadioButtonFromResponseHeaderTable=async(e,t)=>{await t&&(R.Z.SelectedRowForResponseHeaderTable=await e.id,this.setState({selectedRowForResponseHeaderTable:await e.id}))},this.addRowInResponseHeaderTable=async e=>{await e.preventDefault();var t=this.state.responseHeaderData,s=t.length+1,a={id:s,key:"",value:""};if(s>1){var i=await t[s-2].key,o=await t[s-2].value;if(""===i.trim()||""===o.trim())return await this.getNotification("error","Please add correct details for key/value in 'Response Header' table")}this.setState({responseHeaderData:[...this.state.responseHeaderData,a]}),void 0===R.Z.ResponseHeaderData&&(R.Z.ResponseHeaderData=[]),R.Z.ResponseHeaderData.push(a)},this.deleteRowFromResponseHeaderTable=async e=>{await e.preventDefault();var t=this.state.responseHeaderData;if(!(Number(this.state.selectedRowForResponseHeaderTable)>0&&Number(this.state.selectedRowForResponseHeaderTable)<=t.length))return await this.getNotification("error","No row is selected for delete from 'Request Header' table");var s=await C.A.updateTableAfterDeleteRowId(t,this.state.selectedRowForResponseHeaderTable);this.setState({responseHeaderData:await s}),R.Z.ResponseHeaderData=await s},this.editRequestBody=async e=>{var t=await e.updated_src;return this.setState({responseBody:await t}),R.Z.ResponseBody=await t,this.setState({isDynamicDataButtonDisable:!0})},this.selectKeyInRequestBody=async e=>{var t=await e.name,s=await e.namespace;return s.push(t),this.setState({selectedKeyNameInRequestBody:t}),this.setState({selectedKeyNameSpaceinRequestBody:s}),this.setState({isDynamicDataButtonDisable:!1})},this.openDynamicTestDataModal=async()=>this.setState({testDataModal:!0}),this.saveMockData=async e=>{await e.preventDefault();var t=this.state.selectedComponent,s=this.state.selectedTestId;if(""===t.toString().trim()&&this.setState({isErrorOnComponentName:!0}),""===s.toString().trim()&&this.setState({isErrorOnTestId:!0}),""===t.trim()||""===s.toString().trim())return await this.getNotification("error","Component/TestId can not be blank, Please add the value in highlited field");var a=x.A.isAllDetailsValidForResponseHeaderTable();if(!await a)return await this.getNotification("error","Response header data is not valid , please add the correct data in Response Header table");var i=await x.A.isResponseBodyValid();if(!await i)return await this.getNotification("error","Response Body is not valid , Mocked Response body should be in JSON format");this.setState({isPageLoading:!0});var o=await x.A.saveMockData();return this.setState({isPageLoading:!1}),o?(R.Z.IsMockedTestIdOnServer=!0,await this.getNotification("success","Mock data is successfully saved.")):(R.Z.IsMockedTestIdOnServer=!1,await this.getNotification("error","Unable to save Mock Data because of "+v.T.ErrorMessage))},this.deleteMockData=async e=>{await e.preventDefault();var t=this.state.selectedComponent,s=this.state.selectedTestId;if(""===t.toString().trim()&&this.setState({isErrorOnComponentName:!0}),""===s.toString().trim()&&this.setState({isErrorOnTestId:!0}),""===t.trim()||""===s.toString().trim())return await this.getNotification("error","Component/TestId can not be blank, Please add the value in highlited field");if(!await R.Z.IsMockedTestIdOnServer)return await this.getNotification("error","Mocked Response data is not found on server for testId "+s);this.setState({isPageLoading:!0});var a=await x.A.deleteMockedDataForTestId();return this.setState({isPageLoading:!1}),a?(R.Z.IsMockedTestIdOnServer=!1,this.setState({selectedComponent:""}),this.setState({selectedTestId:""}),this.setState({testName:""}),R.Z.SelectedComponent="",R.Z.SelectedTestId="",R.Z.TestName="",R.Z.ResponseBody={MockedResponseBody:"Paste Mock Response Body here"},R.Z.ResponseHeaderData=[{id:1,key:"content-type",value:"application/json"}],this.setState({responseBody:R.Z.ResponseBody}),this.setState({responseHeaderData:R.Z.ResponseHeaderData}),await this.getNotification("success","Mocked Response data is successfully deleted for testId "+s)):(R.Z.IsMockedTestIdOnServer=!0,await this.getNotification("error","Unable to delete Mocked Response data because of "+v.T.ErrorMessage))}}render(){const e={mode:"radio",onSelect:this.selectRadioButtonFromResponseHeaderTable,selected:[this.state.selectedRowForResponseHeaderTable]},t={mode:"radio",onSelect:this.selectRadioButtonFromDynamicDataTable,selected:[this.state.selectedRowFromDynamicDataTable],disabled:[0]};return(0,E.jsxs)(a.A,{className:"MockrepositoryPage",title:"Mock repository",children:[this.state.isPageLoading&&(0,E.jsx)("div",{className:"fullscreen-loader",children:(0,E.jsx)(O.A,{sentences:F.$,color:"blue"})}),(0,E.jsx)(Z(),{ref:this.notificationSystem}),(0,E.jsx)(o.A,{children:(0,E.jsx)(n.A,{lg:6,md:6,sm:6,xs:12,children:(0,E.jsxs)(r.A,{children:[(0,E.jsx)(d.A,{children:(0,E.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:"Choose Api Scripts"})}),(0,E.jsx)(l.A,{children:(0,E.jsxs)(c.A,{children:[(0,E.jsxs)(h.A,{row:!0,children:[(0,E.jsx)(p.A,{sm:5,children:"Component"}),(0,E.jsx)(n.A,{children:(0,E.jsxs)(m.A,{type:"select",invalid:this.state.isErrorOnComponentName,onChange:this.selectComponent.bind(this),name:"component",value:this.state.selectedComponent,children:[(0,E.jsx)("option",{}),(0,E.jsx)(I.A,{options:this.state.allComponentList})]})})]}),(0,E.jsxs)(h.A,{row:!0,children:[(0,E.jsx)(p.A,{sm:5,children:"Test Id"}),(0,E.jsx)(n.A,{children:(0,E.jsxs)(m.A,{invalid:this.state.isErrorOnTestId,type:"select",value:this.state.selectedTestId,onChange:this.selectTestId.bind(this),children:[(0,E.jsx)("option",{}),(0,E.jsx)(I.A,{options:this.state.allTestId})]})})]}),(0,E.jsxs)(h.A,{row:!0,children:[(0,E.jsx)(p.A,{sm:5,children:"Test Name"}),(0,E.jsx)(n.A,{children:(0,E.jsx)(m.A,{readOnly:!0,type:"input",name:"testName",defaultValue:this.state.testName})})]}),(0,E.jsxs)(h.A,{row:!0,children:[(0,E.jsx)(p.A,{sm:10,children:"Do you want the mock response data to be overridden by real data after script execution"}),(0,E.jsx)(n.A,{children:(0,E.jsx)(m.A,{type:"checkbox",name:"testName",checked:this.state.isMockResponseOverride,onChange:this.changeMockResponseOverrideValue.bind(this)})})]})]})})]})})}),(0,E.jsx)(o.A,{children:(0,E.jsx)(n.A,{lg:12,md:12,sm:12,xs:12,children:(0,E.jsxs)(r.A,{children:[(0,E.jsx)(d.A,{children:(0,E.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Mock Response",(0,E.jsxs)(y.A,{size:"sm",children:[(0,E.jsx)(u.A,{color:"black",onClick:this.saveMockData.bind(this),children:(0,E.jsx)("small",{children:"Save"})}),(0,E.jsx)(u.A,{color:"info",onClick:this.deleteMockData.bind(this),children:(0,E.jsx)("small",{children:"Delete"})})]})]})}),(0,E.jsx)(l.A,{children:(0,E.jsxs)(o.A,{children:[(0,E.jsx)(n.A,{lg:6,md:6,sm:6,xs:12,children:(0,E.jsxs)(r.A,{children:[(0,E.jsx)(d.A,{children:(0,E.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Response Header",(0,E.jsxs)(y.A,{size:"sm",children:[(0,E.jsx)(u.A,{color:"black",onClick:this.addRowInResponseHeaderTable.bind(this),children:(0,E.jsx)("small",{children:"Add"})}),(0,E.jsx)(u.A,{color:"info",onClick:this.deleteRowFromResponseHeaderTable.bind(this),children:(0,E.jsx)("small",{children:"Delete"})})]})]})}),(0,E.jsx)(l.A,{children:(0,E.jsx)(n.A,{style:{overflowX:"auto",maxWidth:"100%"},children:(0,E.jsx)(k.A,{keyField:"id",data:this.state.responseHeaderData,columns:j,wrapperClasses:"table-responsive",striped:!0,hover:!0,condensed:!0,selectRow:e,cellEdit:(0,f.Ay)({mode:"click",blurToSave:!0,afterSaveCell:(e,t,s,a)=>{this.setState({responseHeaderData:R.Z.ResponseHeaderData})}})})})})]})}),(0,E.jsx)(n.A,{lg:6,md:6,sm:6,xs:12,children:(0,E.jsxs)(r.A,{children:[(0,E.jsx)(d.A,{children:(0,E.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Response Body",(0,E.jsx)(u.A,{disabled:this.state.isDynamicDataButtonDisable,color:"black",size:"sm",onClick:this.openDynamicTestDataModal.bind(this),children:(0,E.jsx)("small",{children:"Select Dynamic Data"})})]})}),(0,E.jsx)(l.A,{children:(0,E.jsx)(n.A,{children:(0,E.jsx)(B(),{name:!1,collapseStringsAfterLength:30,displayDataTypes:!1,indentWidth:0,enableClipboard:!0,iconStyle:"circle",src:this.state.responseBody,onEdit:this.editRequestBody.bind(this),onSelect:this.selectKeyInRequestBody})})})]})})]})})]})})}),(0,E.jsxs)(S.A,{returnFocusAfterClose:!0,isOpen:this.state.testDataModal,toggle:this.toggleTestData.bind(this),direction:"end",backdrop:!1,children:[(0,E.jsxs)(w.A,{toggle:this.toggleTestData.bind(this),children:["Dynamic Data : ",this.state.dynamicDataValue]}),(0,E.jsx)(D.A,{children:(0,E.jsx)(o.A,{children:(0,E.jsx)(n.A,{lg:12,md:12,sm:12,xs:12,children:(0,E.jsxs)(r.A,{children:[(0,E.jsx)(d.A,{children:(0,E.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:["Choose Data",(0,E.jsxs)(y.A,{size:"sm",children:[(0,E.jsx)(u.A,{color:"black",onClick:this.evaluateDymanicDataValue.bind(this),children:(0,E.jsx)("small",{children:"Evaluate"})}),(0,E.jsx)(u.A,{size:"sm",color:"info",onClick:this.updateRequestBodyKeyData.bind(this),children:(0,E.jsx)("small",{children:"Update"})})]})]})}),(0,E.jsx)(l.A,{children:(0,E.jsx)(n.A,{style:{overflowX:"auto",maxWidth:"100%"},children:(0,E.jsx)(k.A,{keyField:"id",data:H.G,columns:T,wrapperClasses:"table-responsive",striped:!0,hover:!0,condensed:!0,selectRow:t,filter:(0,A.Ay)(),pagination:(0,P.Ay)(),cellEdit:(0,f.Ay)({mode:"click",blurToSave:!0,nonEditableRows:()=>[0,1,2,3,4,5,6,7,8,9,10]})})})})]})})})})]})]})}}const q=L},6095:(e,t,s)=>{s.d(t,{A:()=>c});s(9950),s(4297);var a=s(3067),i=s(1091),o=s(2464),n=s(2189),r=s(4414);const d=a.Ay.create("page"),l=e=>{let{title:t,breadcrumbs:s,tag:a,className:l,children:c,...h}=e;const p=d.b("px-3",l);return(0,r.jsxs)(a,{className:p,...h,children:[(0,r.jsxs)("div",{className:d.e("header"),children:[t&&"string"===typeof t?(0,r.jsx)(n.A,{type:"h1",className:d.e("title"),children:t}):t,s&&(0,r.jsxs)(i.A,{className:d.e("breadcrumb"),children:[(0,r.jsx)(o.A,{children:"Home"}),s.length&&s.map(((e,t)=>{let{name:s,active:a}=e;return(0,r.jsx)(o.A,{active:a,children:s},t)}))]})]}),c]})};l.defaultProps={tag:"div",title:""};const c=l},2189:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(8738),i=s.n(a),o=(s(9950),s(4297),s(4414));const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},r=e=>{let{tag:t,className:s,type:a,...r}=e;const d=i()({[a]:!!a},s);let l;return l=t||(!t&&n[a]?n[a]:"p"),(0,o.jsx)(l,{...r,className:d})};r.defaultProps={type:"p"};const d=r},8486:()=>{}}]);
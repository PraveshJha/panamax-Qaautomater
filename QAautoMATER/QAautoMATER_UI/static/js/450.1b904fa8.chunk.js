"use strict";(self.webpackChunkqaautomater=self.webpackChunkqaautomater||[]).push([[450],{805:(e,t,a)=>{a.d(t,{S:()=>s});var s={paragraph:"UI driven AI-Powered Codeless Test Automation solution on the Cloud",oneStopSolutionText:"QAautoMATER is a one-stop solution for all QA needs. It provides comprehensive solutions for test case management, defect management, and automation testing. As a complete AI-driven testing solution, it eliminates the need for coding.",toolCostText:"Best results at the most affordable price, best suited for any kind of resources.",latestupdatetext:"Report Export functionality",TotalStorage:localStorage.getItem("totalStorage"),ConsumedSpace:""}},2522:(e,t,a)=>{a.a(e,(async(e,s)=>{try{a.d(t,{A:()=>c});var r=a(805),n=a(6228),l=a(7212),o=e([n]);n=(o.then?(await o)():o)[0];class i{async loadAboutUsPage(){await this.getStorage()}async getStorage(){if(n.T.isDemo)return await new Promise((e=>setTimeout(e,2e3))),!0;try{var e=await localStorage.getItem("UserSelectedAccount"),t=n.T.backendAPI;"remote"===await n.T.backendServiceAt&&(t=n.T.remoteBackendAPI);var a={Authorization:await n.z.userToken,userEmail:await n.z.userEmail},s=await l.A.get(await t+"aboutus/project/"+e+"/getstorage",await a),o=await s.data;r.S.ConsumedSpace=await o.consumedStorage}catch(i){}}}const c=new i;s()}catch(i){s(i)}}))},8450:(e,t,a)=>{a.a(e,(async(e,s)=>{try{a.r(t),a.d(t,{default:()=>O});var r=a(6095),n=a(9950),l=(a(2189),a(7176)),o=a(6114),i=a(4084),c=a(9529),d=a(8156),u=a(3924),m=a(5703),g=(a(2104),a(7692),a(2592)),b=a(3284),p=a(820),h=a(5135),x=a(805),j=a(9257),f=a(2522),y=(a(6681),a(4414)),v=e([f]);f=(v.then?(await v)():v)[0];class A extends n.Component{constructor(){super(...arguments),this.state={activeIndex:0,totalStorage:x.S.TotalStorage,consumedSpace:x.S.ConsumedSpace,isPageLoading:!1},this.componentDidMount=async()=>{window.scrollTo(0,0),this.setState({isPageLoading:!0}),await f.A.loadAboutUsPage(),this.setState({totalStorage:x.S.TotalStorage}),this.setState({consumedSpace:x.S.ConsumedSpace}),this.setState({isPageLoading:!1})}}render(){return(0,y.jsxs)(r.A,{className:"About us",children:[this.state.isPageLoading&&(0,y.jsx)("div",{className:"fullscreen-loader",children:(0,y.jsx)(g.A,{sentences:b.$,color:"blue"})}),(0,y.jsxs)(l.A,{children:[(0,y.jsx)(o.A,{lg:6,md:6,sm:6,xs:12,children:(0,y.jsx)(j.qj,{title:"Total Storage",number:this.state.totalStorage,color:"black"})}),(0,y.jsx)(o.A,{lg:6,md:6,sm:6,xs:12,children:(0,y.jsx)(j.qj,{title:"Consumed Storage",number:this.state.consumedSpace,color:"black"})})]}),(0,y.jsxs)(l.A,{children:[(0,y.jsx)(o.A,{md:6,sm:6,xs:12,className:"mb-3",children:(0,y.jsxs)(i.A,{children:[(0,y.jsx)(c.A,{top:!0,src:h}),(0,y.jsxs)(d.A,{children:[(0,y.jsx)(u.A,{children:"One stop solution"}),(0,y.jsx)(m.A,{children:x.S.oneStopSolutionText})]})]})}),(0,y.jsx)(o.A,{md:6,sm:6,xs:12,className:"mb-3",children:(0,y.jsxs)(i.A,{children:[(0,y.jsx)(c.A,{top:!0,src:p}),(0,y.jsxs)(d.A,{children:[(0,y.jsx)(u.A,{children:"Tool Comparison"}),(0,y.jsx)(m.A,{children:x.S.toolCostText})]})]})})]})]})}}const O=A;s()}catch(A){s(A)}}))},6095:(e,t,a)=>{a.d(t,{A:()=>d});a(9950),a(4297);var s=a(3067),r=a(1091),n=a(2464),l=a(2189),o=a(4414);const i=s.Ay.create("page"),c=e=>{let{title:t,breadcrumbs:a,tag:s,className:c,children:d,...u}=e;const m=i.b("px-3",c);return(0,o.jsxs)(s,{className:m,...u,children:[(0,o.jsxs)("div",{className:i.e("header"),children:[t&&"string"===typeof t?(0,o.jsx)(l.A,{type:"h1",className:i.e("title"),children:t}):t,a&&(0,o.jsxs)(r.A,{className:i.e("breadcrumb"),children:[(0,o.jsx)(n.A,{children:"Home"}),a.length&&a.map(((e,t)=>{let{name:a,active:s}=e;return(0,o.jsx)(n.A,{active:s,children:a},t)}))]})]}),d]})};c.defaultProps={tag:"div",title:""};const d=c},2189:(e,t,a)=>{a.d(t,{A:()=>i});var s=a(8738),r=a.n(s),n=(a(9950),a(4297),a(4414));const l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},o=e=>{let{tag:t,className:a,type:s,...o}=e;const i=r()({[s]:!!s},a);let c;return c=t||(!t&&l[s]?l[s]:"p"),(0,n.jsx)(c,{...o,className:i})};o.defaultProps={type:"p"};const i=o},9257:(e,t,a)=>{a.d(t,{GU:()=>u,qj:()=>j});var s=a(9950),r=(a(4297),a(4084)),n=a(5703),l=a(3924),o=a(9401),i=a(2189),c=a(4414);const d=e=>{let{title:t,subtitle:a,number:d,color:u,progress:{value:m,label:g,label2:b},...p}=e;const[h,x]=(0,s.useState)("");(0,s.useEffect)((()=>{(async()=>{const e=await async function(e){try{return e>=1e6?(e/1e6).toLocaleString("en",{maximumFractionDigits:3})+"M":e>=1e3?(e/1e3).toLocaleString("en",{maximumFractionDigits:3})+"K":e.toLocaleString("en")}catch(t){return 0}}(d);x(e)})()}),[d]),void 0===b&&(b="Fail");let j=Number(m),f=0===j&&0!==d?100:100-j;0===d&&(j=0,f=0);const y=j.toFixed(2),v=f.toFixed(2),A={height:"8px",backgroundImage:`linear-gradient(to right, green ${y}%, red ${v}%)`,backgroundColor:"transparent"};return(0,c.jsxs)(r.A,{body:!0,...p,children:[(0,c.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,c.jsxs)(n.A,{tag:"div",children:[(0,c.jsx)(i.A,{className:"mb-0",children:(0,c.jsx)("strong",{children:t})}),(0,c.jsx)(i.A,{className:"mb-0 text-muted small",children:a})]}),(0,c.jsx)(l.A,{className:"text-black",children:h})]}),(0,c.jsx)(o.A,{style:A}),(0,c.jsxs)(n.A,{tag:"div",className:"d-flex justify-content-between",children:[(0,c.jsxs)(i.A,{tag:"span",className:"text-left text-muted small",children:[g,(0,c.jsxs)("small",{children:[" (",y,"%)"]})]}),(0,c.jsxs)(i.A,{tag:"span",className:"text-right text-muted small",children:[b," ",(0,c.jsxs)("small",{children:["(",v,"%)"]})]})]})]})};d.defaultProps={title:"",subtitle:"",number:0,color:"primary",progress:{value:0,label:""}};const u=d;var m=a(8738),g=a.n(m),b=a(8156),p=a(1848);const h=e=>{let{bgColor:t,icon:a,iconProps:s,title:n,subtitle:o,className:i,...d}=e;const u=g()("cr-widget",i,{[`bg-${t}`]:t});return(0,c.jsxs)(r.A,{inverse:!0,className:u,...d,children:[(0,c.jsx)(b.A,{className:"cr-widget__icon",children:(0,c.jsx)(a,{size:50,...s})}),(0,c.jsxs)(b.A,{children:[(0,c.jsx)(l.A,{children:n}),(0,c.jsx)(p.A,{children:o})]})]})};h.defaultProps={bgColor:"primary",icon:"span",iconProps:{size:50}};const x=e=>{let{title:t,number:a,color:o,...d}=e;const[u,m]=(0,s.useState)("");return(0,s.useEffect)((()=>{(async()=>{const e=await async function(e){return e>=1e6?(e/1e6).toLocaleString("en",{maximumFractionDigits:3})+"M":e>=1e3?(e/1e3).toLocaleString("en",{maximumFractionDigits:3})+"K":e.toLocaleString("en")}(a);m(e)})()}),[a]),(0,c.jsx)(r.A,{body:!0,...d,children:(0,c.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,c.jsx)(n.A,{tag:"div",children:(0,c.jsx)(i.A,{className:"mb-0",children:(0,c.jsx)("strong",{children:t})})}),(0,c.jsx)(l.A,{className:`text-${o}`,children:u})]})})};x.defaultProps={title:"",number:0,color:"black"};const j=x;const f=e=>{let{title:t,number:a,color:d,progress:{value:u,label:m,label2:g},...b}=e;const[p,h]=(0,s.useState)("");(0,s.useEffect)((()=>{(async()=>{const e=await async function(e){try{return e>=1e6?(e/1e6).toLocaleString("en",{maximumFractionDigits:3})+"M":e>=1e3?(e/1e3).toLocaleString("en",{maximumFractionDigits:3})+"K":e.toLocaleString("en")}catch(t){return 0}}(a);h(e)})()}),[a]),void 0===g&&(g="Fail");let x=Number(u),j=0===x&&0!==a?100:100-x;0===a&&(x=0,j=0);const f=x.toFixed(2),y=j.toFixed(2),v={height:"8px",backgroundImage:`linear-gradient(to right, green ${f}%, red ${y}%)`,backgroundColor:"transparent"};return(0,c.jsxs)(r.A,{body:!0,...b,children:[(0,c.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,c.jsx)(n.A,{tag:"div",children:(0,c.jsx)(i.A,{className:"mb-0",children:(0,c.jsx)("strong",{children:t})})}),(0,c.jsx)(l.A,{className:"text-black",children:p})]}),(0,c.jsx)(o.A,{style:v}),(0,c.jsxs)(n.A,{tag:"div",className:"d-flex justify-content-between",children:[(0,c.jsxs)(i.A,{tag:"span",className:"text-left text-muted small",children:["Pass",(0,c.jsxs)("small",{children:[" (",f,"%)"]})]}),(0,c.jsxs)(i.A,{tag:"span",className:"text-right text-muted small",children:["Fail ",(0,c.jsxs)("small",{children:["(",y,"%)"]})]}),(0,c.jsxs)(i.A,{tag:"span",className:"text-right text-muted small",children:["Pending ",(0,c.jsxs)("small",{children:["(",y,"%)"]})]}),(0,c.jsxs)(i.A,{tag:"span",className:"text-right text-muted small",children:["NA ",(0,c.jsxs)("small",{children:["(",y,"%)"]})]}),(0,c.jsxs)(i.A,{tag:"span",className:"text-right text-muted small",children:["Blocked ",(0,c.jsxs)("small",{children:["(",y,"%)"]})]})]})]})};f.defaultProps={title:"",number:0,progress:{value:0,label:""}}},1091:(e,t,a)=>{a.d(t,{A:()=>b});var s=a(9950),r=a(1942),n=a.n(r),l=a(8738),o=a.n(l),i=a(1497),c=["className","listClassName","cssModule","children","tag","listTag","aria-label"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={"aria-label":n().string,children:n().node,className:n().string,cssModule:n().object,listClassName:n().string,listTag:i.Wx,tag:i.Wx};function g(e){var t=e.className,a=e.listClassName,r=e.cssModule,n=e.children,l=e.tag,m=void 0===l?"nav":l,g=e.listTag,b=void 0===g?"ol":g,p=e["aria-label"],h=void 0===p?"breadcrumb":p,x=u(e,c),j=(0,i.qO)(o()(t),r),f=(0,i.qO)(o()("breadcrumb",a),r);return s.createElement(m,d({},x,{className:j,"aria-label":h}),s.createElement(b,{className:f},n))}g.propTypes=m;const b=g},2464:(e,t,a)=>{a.d(t,{A:()=>b});var s=a(9950),r=a(1942),n=a.n(r),l=a(8738),o=a.n(l),i=a(1497),c=["className","cssModule","active","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={active:n().bool,className:n().string,cssModule:n().object,tag:i.Wx};function g(e){var t=e.className,a=e.cssModule,r=e.active,n=e.tag,l=void 0===n?"li":n,m=u(e,c),g=(0,i.qO)(o()(t,!!r&&"active","breadcrumb-item"),a);return s.createElement(l,d({},m,{className:g,"aria-current":r?"page":void 0}))}g.propTypes=m;const b=g},9401:(e,t,a)=>{a.d(t,{A:()=>x});var s=a(9950),r=a(1942),n=a.n(r),l=a(8738),o=a.n(l),i=a(1497),c=["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},d.apply(this,arguments)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p={animated:n().bool,bar:n().bool,barAriaLabelledBy:n().string,barAriaValueText:n().string,barClassName:n().string,barStyle:n().object,children:n().node,className:n().string,cssModule:n().object,color:n().string,max:n().oneOfType([n().string,n().number]),min:n().oneOfType([n().string,n().number]),multi:n().bool,striped:n().bool,style:n().object,tag:i.Wx,value:n().oneOfType([n().string,n().number])};function h(e){var t=e.children,a=e.className,r=e.barClassName,n=e.cssModule,l=e.value,u=void 0===l?0:l,g=e.min,p=void 0===g?0:g,h=e.max,x=void 0===h?100:h,j=e.animated,f=e.striped,y=e.color,v=e.bar,A=e.multi,O=e.tag,S=void 0===O?"div":O,N=e.style,w=void 0===N?{}:N,P=e.barStyle,T=void 0===P?{}:P,k=e.barAriaValueText,C=e.barAriaLabelledBy,E=b(e,c),L=(0,i.Ro)(u)/(0,i.Ro)(x)*100,q=(0,i.qO)(o()(a,"progress"),n),I={className:(0,i.qO)(o()("progress-bar",v&&a||r,j?"progress-bar-animated":null,y?"bg-".concat(y):null,f||j?"progress-bar-striped":null),n),style:m(m(m({},v?w:{}),T),{},{width:"".concat(L,"%")}),role:"progressbar","aria-valuenow":u,"aria-valuemin":p,"aria-valuemax":x,"aria-valuetext":k,"aria-labelledby":C,children:t};return v?s.createElement(S,d({},E,I)):s.createElement(S,d({},E,{style:w,className:q}),A?t:s.createElement("div",I))}h.propTypes=p;const x=h},820:(e,t,a)=>{e.exports=a.p+"static/media/qaautomaterimage3.e8ed8709f1b5896a1a84.jpg"},5135:(e,t,a)=>{e.exports=a.p+"static/media/qaautomaterimage4.a77dadd02f46edacb093.jpg"}}]);
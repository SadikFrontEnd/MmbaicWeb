(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[76],{1100:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(202),a=n(196),o=n(197),l=n(198),i=n(199),c=n(0),s=n.n(c),u=n(623),f=n.n(u),m=n(642),d=n(659),p=n(200),y=n(671),h=n(677),b=n(606),g=n(620),v=n(643),E=n(860),O=n.n(E),w=(n(861),n(618)),j=n.n(w),S=n(2),P=n(59),C=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name})},o.otpHandler=function(e){e.preventDefault(),P.a.post("/user/userVryfyotp",{mobile:parseInt(o.state.mobile),otp:parseInt(o.state.otp)}).then((function(e){var t,n,r,a,l,i;!0===e.data.status&&(o.setState({otpMsg:e.data.msg}),localStorage.setItem("userData",JSON.stringify(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data)),localStorage.setItem("token",JSON.stringify(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.token)),localStorage.setItem("user_id",JSON.stringify(null===e||void 0===e||null===(r=e.data)||void 0===r||null===(a=r.data)||void 0===a?void 0:a._id)),localStorage.setItem("user_mobile_no",JSON.stringify(null===e||void 0===e||null===(l=e.data)||void 0===l||null===(i=l.data)||void 0===i?void 0:i.mobile)),"otp verified"===e.data.msg&&o.props.history.push("/"))})).catch((function(e){console.log(e)}))},o.loginHandler=function(e){if(e.preventDefault(),console.log("Login"),""!==o.state.mobile){var t={mobile:parseInt(o.state.mobile)};P.a.post("/user/userlogin",t).then((function(e){console.log(e),o.setState({otpMsg:e.data.msg}),"otp Send Successfully"===e.data.msg?(localStorage.setItem("mobileNumber",o.state.mobile),j()("OTP Send Successfully")):j()("OTP Send Successfully")})).catch((function(e){console.log(e.response),j()("Error!","User doesn't Exist","error")}))}else o.setState({mobileError:"Please enter mobile number"})},o.changeHandler=function(e){e.preventDefault(),o.setState(Object(r.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){if(e.preventDefault(),o.state.password===o.state.cnfmPassword){var t=new FormData;t.append("fullname",o.state.fullname),t.append("email",o.state.email),t.append("mobile",o.state.mobile),t.append("gender",o.state.gender),t.append("city",o.state.city),t.append("dob",o.state.dob),t.append("password",o.state.password),t.append("cnfmPassword",o.state.cnfmPassword),null!==o.state.selectedFile&&t.append("userimg",o.state.selectedFile,o.state.selectedName),P.a.post("/user/usersignup",t).then((function(e){console.log(e.data.msg),localStorage.setItem("auth-token",e.data.token),o.setState({otpMsg:e.data.otp}),j()("Success!"," Register Successful Done!","success"),o.props.history.push("/")})).catch((function(e){j()("Error!","Already Registered","error")}))}},o.state={fullname:"",email:"",mobile:"",dob:"",gender:"",city:"",userimg:"",selectedName:"",selectedFile:null,otp:"",otpMsg:"",passMsg:"",cnfmPassword:"",password:"",mobileError:""},o}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement(c.Fragment,null,s.a.createElement(f.a,null,s.a.createElement("title",null,"Astrogyata"),s.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),s.a.createElement(p.a,{headerTop:"visible"},s.a.createElement("div",{className:"login-register-area pt-100 pb-100"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},s.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},s.a.createElement("div",{className:"login-register-wrapper"},s.a.createElement(m.a.Container,{defaultActiveKey:"login"},s.a.createElement(d.a,{variant:"pills",className:"login-register-tab-list"},s.a.createElement(d.a.Item,null,s.a.createElement(d.a.Link,{eventKey:"login"},s.a.createElement("h4",null,"Login"))),s.a.createElement(d.a.Item,null,s.a.createElement(d.a.Link,{eventKey:"register"},s.a.createElement("h4",null,"Register")))),s.a.createElement(m.a.Content,null,s.a.createElement(m.a.Pane,{eventKey:"login"},s.a.createElement("div",{className:"login-form-container"},"otp Send Successfully"===this.state.otpMsg?s.a.createElement("div",{className:"login-register-form"},s.a.createElement(y.a,{onSubmit:this.otpHandler},s.a.createElement(h.a,{type:"otp",name:"otp",required:!0,placeholder:"Enter OTP",value:this.state.otp,onChange:this.changeHandler}),s.a.createElement("div",{className:"button-box"},s.a.createElement("div",{className:"login-toggle-btn"},s.a.createElement(S.c,{to:"/password"},"Login with password")),s.a.createElement("div",{className:"login-toggle-btn"}),s.a.createElement("button",{type:"submit"},s.a.createElement("span",null,"OTP Verify"))))):s.a.createElement("div",{className:"login-register-form"},s.a.createElement(y.a,{onSubmit:this.loginHandler},s.a.createElement(b.a,null,s.a.createElement(g.a,{md:"12"},s.a.createElement(O.a,{countryCodeEditable:!1,className:"mob-int",country:"in",value:this.state.mobile,onChange:function(t){return e.setState({mobile:t})}}),""!==this.state.mobileError?s.a.createElement("span",{style:{color:"red"}},this.state.mobileError):null)),s.a.createElement("div",{className:"button-box"},s.a.createElement("div",{className:"login-toggle-btn"},s.a.createElement(S.c,{to:"/ForgotPassword"},"Forgot Password?")),s.a.createElement("div",{className:"login-toggle-btn"}),s.a.createElement("button",{type:"submit"},s.a.createElement("span",null,"Login"))))))),s.a.createElement(m.a.Pane,{eventKey:"register"},s.a.createElement("div",{className:"login-form-container"},s.a.createElement("div",{className:"login-register-form"},s.a.createElement(y.a,{className:"text-center",onSubmit:this.submitHandler,method:"post"},s.a.createElement(b.a,null,s.a.createElement(g.a,{md:"12"},s.a.createElement("h3",null,"User Image"),s.a.createElement(h.a,{type:"file",name:"userimg",onChange:this.onChangeHandler,className:"form-controller"})),s.a.createElement(g.a,{md:"6"},s.a.createElement(h.a,{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname",value:this.state.fullname,onChange:this.changeHandler,className:"form-controller"})),s.a.createElement(g.a,{md:"6"},s.a.createElement(h.a,{type:"email",name:"email",required:!0,placeholder:"Enter Your Email",value:this.state.email,onChange:this.changeHandler,className:"form-controller"})),s.a.createElement(g.a,{md:"6"},s.a.createElement(O.a,{countryCodeEditable:!1,country:"in",value:this.state.mobile,onChange:function(t){return e.setState({mobile:t})},width:"80%",className:"form-controller"})),s.a.createElement(g.a,{md:"6"},s.a.createElement(h.a,{type:"password",name:"password",maxLength:"12",required:!0,placeholder:"Enter Your password",value:this.state.password,onChange:this.changeHandler,className:"form-controller"})),s.a.createElement(g.a,{md:"6"},s.a.createElement(h.a,{type:"password",name:"cnfmPassword",maxLength:"12",required:!0,placeholder:"Enter Your Confirm Password",value:this.state.cnfmPassword,onChange:this.changeHandler,className:"form-controller"})),s.a.createElement(g.a,{md:"6"},s.a.createElement(h.a,{type:"date",name:"dob",required:!0,placeholder:"Date of birth",value:this.state.dob,onChange:this.changeHandler,className:"form-controller"}))),s.a.createElement("div",{className:"button-box"},s.a.createElement(v.a,{type:"submit"},s.a.createElement("span",null,"Register")))))))))),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"login-form-container"},s.a.createElement("div",{className:"login-register-form"},s.a.createElement("div",{className:"button-box"},s.a.createElement("div",{className:"login-toggle-btn"})))))))))))}}]),n}(c.Component)},620:function(e,t,n){"use strict";var r=n(7),a=n(15),o=n(0),l=n.n(o),i=n(4),c=n.n(i),s=n(78),u=n.n(s),f=n(54),m=["className","cssModule","widths","tag"],d=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),y={tag:f.n,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,o=e.widths,i=e.tag,c=Object(a.a)(e,m),s=[];o.forEach((function(t,r){var a=e[t];if(delete c[t],a||""===a){var o=!r;if(Object(f.h)(a)){var l,i=o?"-":"-"+t+"-",m=b(o,t,a.size);s.push(Object(f.j)(u()(((l={})[m]=a.size||""===a.size,l["order"+i+a.order]=a.order||0===a.order,l["offset"+i+a.offset]=a.offset||0===a.offset,l)),n))}else{var d=b(o,t,a);s.push(d)}}})),s.length||s.push("col");var d=Object(f.j)(u()(t,s),n);return l.a.createElement(i,Object(r.a)({},c,{className:d}))};g.propTypes=y,g.defaultProps=h,t.a=g},623:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=l(n(639)),a=l(n(624)),o=l(n(641));function l(e){return e&&e.__esModule?e:{default:e}}var i=a.default;t.default=i},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=i(n(4)),o=i(n(34)),l=n(640);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,y,h,b=function(e){function t(){return s(this,t),f(this,m(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);o.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),a=document.head,o=a.innerHTML;(r=(r=r.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,l.getDuplicateTitle)();n&&(0,l.removeChild)(a,n)}else if("meta"===t){var r=(0,l.getDuplicateMeta)(e);r&&(0,l.removeChild)(a,r)}else if("link"===t&&"canonical"===e.rel){var o=(0,l.getDuplicateCanonical)(e);o&&(0,l.removeChild)(a,o)}})),(0,l.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(n.prototype,a),i&&u(n,i),t}(r.Component);p=b,y="contextTypes",h={extract:a.default.func},y in p?Object.defineProperty(p,y,{value:h,enumerable:!0,configurable:!0,writable:!0}):p[y]=h;var g=b;t.default=g,e.exports=t.default},639:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(0),o=(r=n(4))&&r.__esModule?r:{default:r};function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return i(this,t),s(this,u(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&c(n.prototype,r),o&&c(n,o),t}(a.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(m,"childContextTypes",{extract:o.default.func});var d=m;t.default=d,e.exports=t.default},640:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],l=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?n=e:"meta"===a?r.push(e):l.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var l=e[r],i=l.props.id;(i?!t.id[i]:0===a.filter((function(e){var n=l.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(l),o.forEach((function(e){var n=l.props[e];n&&(t[e][n]=l)})))},l=e.length-1;l>=0;l--)r(l);return n}(r)),[n],l)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var a,o=e.getAttribute(r);return o?n.concat((a=t.querySelectorAll("[".concat(r,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,a=t.length;r<a;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],a=r.concat(["itemProp"]),o=a.concat(["id"])},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(4)),o=l(n(624));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,p,y,h=function(e){function t(){return c(this,t),u(this,f(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.default.createElement(o.default,null,r.default.createElement("title",null,this.props.title))}}])&&s(n.prototype,a),l&&s(n,l),t}(r.Component);d=h,p="propTypes",y={title:a.default.string},p in d?Object.defineProperty(d,p,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[p]=y;var b=h;t.default=b,e.exports=t.default}}]);
//# sourceMappingURL=76.625f4dad.chunk.js.map
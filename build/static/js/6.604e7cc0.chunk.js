(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{112:function(e,t,a){"use strict";t.a=function(e){return Uint8Array.from(atob(e),(function(e){return e.charCodeAt(0)}))}},113:function(e,t,a){"use strict";var s=a(25),n=a.n(s),r=a(34),c=a(112),o=a(53),i=function(){var e=Object(r.a)(n.a.mark((function e(t,a){var s,r,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.crypto.subtle.importKey("spki",Object(c.a)(a),{name:"RSA-OAEP",modulusLength:4096,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["encrypt"]);case 2:return s=e.sent,r=new TextEncoder,e.next=6,window.crypto.subtle.encrypt({name:"RSA-OAEP"},s,r.encode(JSON.stringify(t)));case 6:return i=e.sent,e.abrupt("return",Object(o.a)(i));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();t.a=i},122:function(e,t,a){e.exports={Parent:"Auth_Parent__1zouR"}},123:function(e,t,a){e.exports={Left:"Left_Left__q5zL8"}},124:function(e,t,a){e.exports={Right:"Right_Right__uwx5t"}},125:function(e,t,a){e.exports={SignIn:"SignIn_SignIn__3rPp4",Input:"SignIn_Input__11VzC",Button:"SignIn_Button__1rOvb",P:"SignIn_P__3ixKf"}},126:function(e,t,a){e.exports={SignIn:"SignUp_SignIn__cuKDJ",Input:"SignUp_Input__2pbYV",Button:"SignUp_Button__141mt",P:"SignUp_P__2QGT5",P2:"SignUp_P2__1KGHC",Error:"SignUp_Error__2rAZG"}},144:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(122),r=a.n(n),c=a(123),o=a.n(c),i=a(1),u=function(e){return Object(i.jsxs)("div",{className:o.a.Left,children:[Object(i.jsx)("i",{style:{fontSize:"4vw",margin:"1vh auto"},className:"fab fa-atlassian"}),Object(i.jsx)("p",{children:"Deposit Cheques with a single click!"})]})},l=a(26),h=a(27),d=a(38),p=a(37),m=a(124),b=a.n(m),j=a(25),f=a.n(j),x=a(34),g=a(10),O=a(113),v=a(125),w=a.n(v),E=a(18),y=a(35),C=a(118),S=a(6),N=a(36),I=a(121),_=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:"",loading:!1,error:!1},e.change=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.submit=function(t){if(e.setState({loading:!0}),""!==e.state.username&&""!==e.state.password){t.preventDefault();var a={username:e.state.username,password:e.state.password};Object(O.a)(a,e.props.server_public_key).then((function(t){if("/auth"===e.props.location.pathname){var a=function(){var a=Object(x.a)(f.a.mark((function a(){var s,n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.post("/api/login",{obj:t,public_key:e.props.clientPublicKey}).catch((function(e){console.log(e)}));case 2:(s=a.sent)&&s.data?(console.log(s.data),sessionStorage.setItem("token",JSON.stringify(s.data.accessToken)),n={mobileNumber:s.data.user.mobileNumber,name:s.data.user.name,username:s.data.user.username},e.setState({loading:!1}),e.props.setAuthTrue(n),e.props.setAesKey(s.data.user.encrypted_aes_key),e.props.history.push("/")):e.setState({error:!0,loading:!1});case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();a()}else{var s=function(){var a=Object(x.a)(f.a.mark((function a(){var s,n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.post("/api/adminLogin",{obj:t,public_key:e.props.clientPublicKey}).catch((function(e){console.log(e)}));case 2:(s=a.sent)&&s.data?(sessionStorage.setItem("token",JSON.stringify(s.data.accessToken)),console.log(s.data),n={name:"",username:s.data.username},e.setState({loading:!1}),e.props.setAuthTrue(n),e.props.setAesKey(s.data.encrypted_aes_key),e.props.history.push("/adminDashboard")):e.setState({error:!0,loading:!1});case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();s()}}))}},e}return Object(h.a)(a,[{key:"render",value:function(){return console.log(this.props.location.pathname),this.state.loading?Object(i.jsx)("img",{src:N.a,alt:"loader",style:{display:"block",margin:"10vh auto"}}):Object(i.jsxs)(i.Fragment,{children:["/auth"===this.props.location.pathname?Object(i.jsx)("h1",{children:"Sign In to Apna Cheques"}):null,"/admin"===this.props.location.pathname?Object(i.jsx)("h1",{children:"Log In as Admin"}):null,Object(i.jsxs)(C.a,{className:w.a.SignIn,children:[this.state.error&&Object(i.jsx)("p",{style:{color:"#dc3546"},children:"*Invalid credentials"}),Object(i.jsx)("p",{style:{color:"#dc3546"},children:"*All fields are required"}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"username",children:[Object(i.jsx)(C.a.Label,{children:"Username"}),Object(i.jsx)(C.a.Control,{type:"text",required:!0,placeholder:"Enter username",className:w.a.Input,autoFocus:!0,name:"username",value:this.state.username,onChange:this.change})]}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"formBasicPassword",children:[Object(i.jsx)(C.a.Label,{children:"Password"}),Object(i.jsx)(C.a.Control,{type:"password",required:!0,placeholder:"Password",className:w.a.Input,name:"password",value:this.state.password,onChange:this.change,minLength:"7"})]}),Object(i.jsx)(I.a,{sitekey:"6Ld-tgodAAAAAIKYDYuoZHEIhpgiLJdJQToCPNw3",onChange:this.onChangeCaptcha,size:"normal"}),"/auth"===this.props.location.pathname?Object(i.jsx)("p",{className:w.a.P,onClick:this.props.changeAuthMethod,children:"New User?"}):null,Object(i.jsxs)("button",{className:w.a.Button,type:"submit",onClick:this.submit,children:["Sign In ",Object(i.jsx)("i",{className:"fas fa-chevron-right"})]})]})]})}}]),a}(s.Component),A=Object(E.b)((function(e){return{server_public_key:e.key,clientPublicKey:e.clientPublicKey}}),(function(e){return{setAuthTrue:function(t){return e({type:"True_Auth",user:t})},setAesKey:function(t){return e({type:"SET_AES_KEY",key:t})}}}))(Object(S.g)(_)),k=a(126),P=a.n(k),L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={div:0,username:"",password:"",cPassword:"",name:"",contact:"",account:"",IFSCCode:"",usernameLenErr:!1,passwordLenErr:!1,cPasswordErr:!1,firstReqErr:!0,contactErr:!1,nameErr:!1,accountErr:!1,IFSCCodeErr:!1,secondReqErr:!0,accountExistErr:!1,usernameExistErr:!1,captchaToken:"",loading:!1},e.checkVal=function(t){if(0===e.state.div)if(e.setState({firstReqErr:""===e.state.username||""===e.state.password||""===e.state.cPassword}),"username"===t)e.setState({usernameLenErr:e.state.username.length<4});else if("password"===t){var a="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";console.log(!e.state.password.match(a)),e.setState({passwordLenErr:!e.state.password.match(a),cPasswordErr:e.state.password!==e.state.cPassword})}else"cPassword"===t&&e.setState({cPasswordErr:e.state.password!==e.state.cPassword});else if(e.setState({secondReqErr:""===e.state.name||""===e.state.contact||""===e.state.account||""===e.state.IFSCCode}),"name"===t){e.setState({nameErr:!e.state.name.match(/[A-Za-z]+/)})}else if("contact"===t){e.setState({contactErr:!e.state.contact.match(/^\d{10}$/)})}else if("account"===t){e.setState({accountErr:!e.state.account.match(/^\d{15}$/)})}else if("IFSCCode"===t){e.setState({IFSCCodeErr:!e.state.IFSCCode.match(/^[A-Z]{4}0[A-Z0-9]{6}$/)})}},e.change=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value),(function(){e.checkVal(t.target.name)}))},e.next=function(){var t=Object(x.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),e.state.usernameLenErr||e.state.passwordLenErr||e.state.cPasswordErr||e.state.firstReqErr){t.next=8;break}return e.setState({loading:!0}),t.next=5,y.a.get("/api/checkUsernameExists",{params:{username:e.state.username}});case 5:t.sent.data?e.setState({div:1,usernameExistErr:!1}):e.setState({usernameExistErr:!0}),e.setState({loading:!1});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.submit=function(){var t=Object(x.a)(f.a.mark((function t(a){var s,n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),a.preventDefault(),t.next=4,y.a.post("/api/captchaVerification",{token:e.state.captchaToken});case 4:if(s=t.sent,console.log(s.data),!s.data.success){t.next=13;break}if(e.state.nameErr||e.state.accountErr||e.state.contactErr||e.state.IFSCCodeErr||e.state.secondReqErr){t.next=13;break}return t.next=10,y.a.get("/api/checkAccountNumber",{params:{accountNumber:e.state.account}});case 10:n=t.sent,console.log(n.data),n.data?(r={username:e.state.username,password:e.state.password,name:e.state.name,mobileNumber:e.state.contact,accountNumber:e.state.account,ifscCode:e.state.IFSCCode},Object(O.a)(r,e.props.server_public_key).then((function(t){var a=function(){var a=Object(x.a)(f.a.mark((function a(){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.post("/api/signUp",{obj:t});case 2:a.sent.data&&e.props.changeAuthMethod();case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();a()}))):e.setState({accountExistErr:!0,div:0});case 13:e.setState({loading:!1});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeCaptcha=function(t){e.setState({captchaToken:t})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Welcome to Apna Cheques!"}),this.state.loading?Object(i.jsx)("img",{src:N.a,alt:"loader",style:{display:"block",margin:"10vh auto"}}):Object(i.jsxs)(C.a,{className:P.a.SignIn,children:[Object(i.jsxs)("p",{className:P.a.P2,onClick:this.props.changeAuthMethod,children:[Object(i.jsx)("i",{className:"fas fa-chevron-left"})," Already a User?"]}),0===this.state.div&&Object(i.jsxs)("div",{children:[this.state.firstReqErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*All fields are required"}),this.state.usernameExistErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Username already exists"}),this.state.accountExistErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Bank Account does not exist"}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"username",children:[Object(i.jsx)(C.a.Label,{children:"Username"}),Object(i.jsx)(C.a.Control,{type:"text",placeholder:"Enter username",className:P.a.Input,autoFocus:!0,name:"username",onChange:this.change,value:this.state.username}),this.state.usernameLenErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Username must be of atleast 4 characters"})]}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"formBasicPassword",children:[Object(i.jsx)(C.a.Label,{children:"Password"}),Object(i.jsx)(C.a.Control,{type:"password",placeholder:"Password",className:P.a.Input,name:"password",onChange:this.change,value:this.state.password}),this.state.passwordLenErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Password must contain atleast 8 characters, one uppercase letter, one lowercase letter, one number and one special character."})]}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"formBasicCPassword",children:[Object(i.jsx)(C.a.Label,{children:"Confirm Password"}),Object(i.jsx)(C.a.Control,{type:"password",placeholder:"Confirm Password",className:P.a.Input,name:"cPassword",onChange:this.change,value:this.state.cPassword}),this.state.cPasswordErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Confirm Password must match Password"})]}),Object(i.jsxs)("button",{className:P.a.Button,onClick:this.next,children:["Next ",Object(i.jsx)("i",{className:"fas fa-chevron-right"})]})]}),1===this.state.div&&Object(i.jsxs)("div",{children:[this.state.secondReqErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*All fields are required"}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"name",children:[Object(i.jsx)(C.a.Label,{children:"Name"}),Object(i.jsx)(C.a.Control,{type:"text",placeholder:"What shall we call you?",className:P.a.Input,autoFocus:!0,name:"name",onChange:this.change,value:this.state.name}),this.state.nameErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Invalid name"})]}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"number",children:[Object(i.jsx)(C.a.Label,{children:"Mobile Number"}),Object(i.jsx)(C.a.Control,{type:"text",placeholder:"We need it to contact you!",className:P.a.Input,name:"contact",onChange:this.change,value:this.state.contact}),this.state.contactErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Invalid Phone Number"})]}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"account",children:[Object(i.jsx)(C.a.Label,{children:"Account Number"}),Object(i.jsx)(C.a.Control,{type:"text",placeholder:"Account Number",className:P.a.Input,name:"account",onChange:this.change,value:this.state.account}),this.state.accountErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Invalid Account Number"})]}),Object(i.jsxs)(C.a.Group,{className:"mb-4",controlId:"ifsc",children:[Object(i.jsx)(C.a.Label,{children:"IFSC Code"}),Object(i.jsx)(C.a.Control,{type:"text",placeholder:"Okay, Last One!",className:P.a.Input,name:"IFSCCode",onChange:this.change,value:this.state.IFSCCode}),this.state.IFSCCodeErr&&Object(i.jsx)("p",{className:P.a.Error,children:"*Invalid IFSC Code"})]}),Object(i.jsx)(I.a,{sitekey:"6Ld-tgodAAAAAIKYDYuoZHEIhpgiLJdJQToCPNw3",onChange:this.onChangeCaptcha,size:"normal"}),Object(i.jsxs)("p",{className:P.a.P2,onClick:function(){return e.setState({div:0})},children:[Object(i.jsx)("i",{className:"fas fa-chevron-left"})," Back"]}),Object(i.jsxs)("button",{className:P.a.Button,onClick:this.submit,type:"submit",children:["Submit ",Object(i.jsx)("i",{className:"fas fa-chevron-right"})]})]})]})]})}}]),a}(s.Component),F=Object(E.b)((function(e){return{server_public_key:e.key}}))(L),q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={div:!1},e.changeAuthMethod=function(){e.setState((function(e){return{div:!e.div}}))},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:b.a.Right,children:this.state.div?Object(i.jsx)(F,{changeAuthMethod:this.changeAuthMethod}):Object(i.jsx)(A,{changeAuthMethod:this.changeAuthMethod})})}}]),a}(s.Component),U=q;t.default=function(e){var t=Object(S.f)(),a=Object(E.c)((function(e){return e.auth})),s=Object(E.c)((function(e){return e.user}));return a&&(null!==s.name?t.push("/"):t.push("/adminDashboard")),!a&&Object(i.jsxs)("div",{className:r.a.Parent,children:[Object(i.jsx)(u,{}),Object(i.jsx)(U,{})]})}}}]);
//# sourceMappingURL=6.604e7cc0.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,a,t){e.exports=t(375)},222:function(e,a,t){},374:function(e,a,t){},375:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(18),o=t.n(i),s=(t(222),t(27));var l=function(){return!1},c=t(20),m=t(21),u=t(23),d=t(22),h=t(36),g=t(24),p=t(6),b=t.n(p),f=t(26),E=t(19),v=t(8),w=t(147),k=t.n(w),C=t(149),S=t.n(C),O=t(150),y=t.n(O),j=t(146),x=t.n(j),N=t(144),P=t.n(N),T={default:"/",home:"/home",about:"/about",signin:"/signin",signup:"/signup"},V=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={open:!1},t.handleDrawerOpen=t.handleDrawerOpen.bind(Object(h.a)(t)),t.handleDrawerClose=t.handleDrawerClose.bind(Object(h.a)(t)),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"handleDrawerOpen",value:function(){this.setState({open:!0})}},{key:"handleDrawerClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.location.pathname,a=this.props,t=a.classes,n=a.theme,i=this.state.open,o=[{text:"Home",link:T.home,iconComponent:r.a.createElement(P.a,{className:t.icon})},{text:"About",link:T.about,iconComponent:r.a.createElement(x.a,{className:t.icon})}];return r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{position:"static"},r.a.createElement(v.r,null,r.a.createElement(v.j,{onClick:this.handleDrawerOpen,className:b()(t.menuButton,i&&t.hide),color:"inherit","aria-label":"Menu"},r.a.createElement(k.a,null)),r.a.createElement(v.s,{variant:"h6",className:t.grow,color:"inherit"},r.a.createElement(v.k,{to:T.default,component:f.b,underline:"none",color:"inherit"},"ZNO")),r.a.createElement(v.c,{color:"inherit"},r.a.createElement(v.k,{to:T.signin,component:f.b,underline:"none",color:"inherit"},"Sign in / Sing up")))),r.a.createElement(v.h,{className:t.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(v.s,{variant:"h6",color:"inherit",className:t.grow},"ZNO"),r.a.createElement(v.j,{onClick:this.handleDrawerClose},"ltr"===n.direction?r.a.createElement(S.a,null):r.a.createElement(y.a,null))),r.a.createElement(v.g,null),r.a.createElement(v.l,null,o.map(function(a,n){return r.a.createElement(v.k,{underline:"none",className:t.link,key:a.text,component:f.b,to:a.link},r.a.createElement(v.m,{button:!0,selected:a.link===e||e===T.default&&a.link===T.home},r.a.createElement(v.n,null,a.iconComponent),r.a.createElement(v.o,{primary:a.text})))}))))}}]),a}(n.Component),R=Object(s.g)(Object(E.withStyles)(function(e){return{root:{flexGrow:1,position:"static"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},label:{textTransform:"capitalize"},hide:{display:"none"},drawer:{width:250,flexShrink:0},drawerPaper:{width:250},drawerHeader:{display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"flex-end"},link:{textDecoration:"none",fontWeight:"bold"},currentLink:{border:"1px solid gray"},icon:{}}},{withTheme:!0})(V)),q=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{border:"1px solid black"}},"HOME")}}]),a}(n.Component),M=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{border:"1px solid red"}},"About")}}]),a}(n.Component),U=t(65),D=t(25),B=t(152),W=t.n(B),L=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).changeState=function(e){var a=t.state;for(var n in e)a[n]=e[n];t.setState(a)},t.handleCloseSnackbar=function(){return t.changeState({isSnackbarVisible:!1})},console.log({props:e}),t.state={isSnackbarVisible:e.isSnackbarVisible,snackbarMessage:e.snackbarMessage},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(v.q,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.isSnakbarVisible,autoHideDuration:6e3,onClose:this.handleCloseSnackbar,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},this.state.snakbarText),action:[r.a.createElement(v.j,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleCloseSnackbar},r.a.createElement(W.a,null))]})}}]),a}(r.a.Component),A=t(66),H=t.n(A),z=t(5),F=t.n(z),I=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).changeState=function(e){var a=t.state;for(var n in e)a[n]=e[n];t.setState(a)},t.handleChange=function(e){var a=t.state.signupUser;a[e.target.name]=e.target.value,t.changeState({signupUser:a,loading:!1}),t.shouldBlockNavigation=""!==a.phone||""!==a.password},t.handleCloseSnackbar=function(){return t.changeState({isSnackbarVisible:!1})},t.state={signupUser:{phone:"",password:"",confirmPassword:"",email:""},loading:!1,isSnackbarVisible:!0,snackbarMessage:"Hello"},t.shouldBlockNavigation=!1,t.handleSubmit=t.handleSubmit.bind(Object(h.a)(t)),D.ValidatorForm.addValidationRule("isPasswordMatch",function(e){return e===t.state.signupUser.password}),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"handleSubmit",value:function(){var e=this;console.log("Submit"),console.log(this.state.signupUser),this.changeState({loading:!0}),fetch("").then(function(a){e.changeState({loading:!1})}).catch(function(a){console.error(a),e.changeState({loading:!1})})}},{key:"render",value:function(){var e=this.props.classes,a=this.state.signupUser;return r.a.createElement("main",{className:e.main},r.a.createElement(v.f,null),r.a.createElement(s.a,{when:this.shouldBlockNavigation,message:"You have unsaved changes, are you sure you want to leave?"}),r.a.createElement(v.p,{className:e.paper},r.a.createElement(v.b,{className:e.avatar},r.a.createElement(H.a,null)),r.a.createElement(v.s,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement(D.ValidatorForm,{onSubmit:this.handleSubmit,className:e.form},r.a.createElement(D.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Phone",name:"phone",autoComplete:"tel",onChange:this.handleChange,value:a.phone,validators:["required","matchRegexp:^\\+?(38)?(0\\d{9})$"],errorMessages:["Phone is required","Phone must be like 0123456789 or +380123456789"]}),r.a.createElement(D.TextValidator,{margin:"normal",autoComplete:"new-password",required:!0,fullWidth:!0,label:"Password",name:"password",type:"password",onChange:this.handleChange,value:a.password,validators:["required"],errorMessages:["Password is required"]}),r.a.createElement(D.TextValidator,{margin:"normal",autoComplete:"new-password",required:!0,fullWidth:!0,label:"Confirm Password",name:"confirmPassword",type:"password",onChange:this.handleChange,value:a.confirmPassword,validators:["isPasswordMatch","required"],errorMessages:["Password mismatch","This field is required"]}),r.a.createElement(D.TextValidator,{margin:"normal",autoComplete:"email",fullWidth:!0,label:"Email",name:"email",validators:["isEmail"],errorMessages:["Email is not valid"],value:a.email,onChange:this.handleChange}),r.a.createElement(v.c,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:this.state.loading,className:e.submit},"Sign Up"),this.state.loading&&r.a.createElement(v.e,{size:24,className:e.buttonProgress})),r.a.createElement(v.k,{className:e.link,color:"secondary",component:f.b,to:T.signin},"Sign in")),r.a.createElement(L,{isSnackbarVisible:!0,snackbarMessage:this.state.snackbarMessage}))}}]),a}(n.Component),Z=F()(function(e){return{main:Object(U.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:-2*e.spacing.unit},submit:{marginTop:3*e.spacing.unit},link:{cursor:"pointer"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})(I),$=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).changeState=function(e){var a=t.state;for(var n in e)a[n]=e[n];t.setState(a)},t.handleSubmit=function(){console.log("Submit");var e={login:t.state.signinUser.login,password:t.state.signinUser.password},a=JSON.stringify(e),n=new Headers;n.append("Content-Type","application/json"),n.append("Access-Control-Allow-Origin","*");var r={method:"POST",body:a,mode:"cors",cache:"default",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}};console.log({requestSettings:r}),t.changeState({loading:!0}),fetch("http://104.248.135.234:8080/api/v1/account/Login",r).then(function(e){console.log({resp:e}),t.changeState({loading:!1})}).catch(function(e){console.log("ERRRRORRRRRR"),console.log({err:e}),t.changeState({loading:!1})})},t.handleChange=function(e){var a=t.state.signinUser;a[e.target.name]="checkbox"===e.target.type?e.target.checked:e.target.value.trim(),t.changeState({signinUser:a}),t.shouldBlockNavigation=""!==a.login||""!==a.password,console.log(t.shouldBlockNavigation)},t.state={signinUser:{login:"admin@domain.com",password:"QwertY123@",remember:!0},loading:!1,isSnakbarVisible:!0,snakbarText:"Hello"},t.shouldBlockNavigation=!1,D.ValidatorForm.addValidationRule("isPhoneOrEmail",function(e){var a=String(e).toLowerCase();return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||/^\+?(38)?(0\d{9})$/.test(a)}),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.signinUser;return r.a.createElement("main",{className:e.main},r.a.createElement(v.f,null),r.a.createElement(s.a,{when:this.shouldBlockNavigation,message:"You have unsaved changes, are you sure you want to leave?"}),r.a.createElement(v.p,{className:e.paper},r.a.createElement(v.b,{className:e.avatar},r.a.createElement(H.a,null)),r.a.createElement(v.s,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(D.ValidatorForm,{onSubmit:this.handleSubmit,className:e.form},r.a.createElement(D.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Email/Phone",name:"login",autoComplete:"tel email",onChange:this.handleChange,value:a.login,validators:["required","isPhoneOrEmail"],errorMessages:["Field is required","This should be Email or Phone"]}),r.a.createElement(D.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Password",name:"password",type:"password",autoComplete:"current-password",onChange:this.handleChange,value:a.password,validators:["required"],errorMessages:["Password is required"]}),r.a.createElement(v.i,{control:r.a.createElement(v.d,{checked:a.remember,name:"remember",onChange:this.handleChange,color:"primary"}),label:"Remember me"}),r.a.createElement(v.c,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:this.state.loading,className:e.submit},"Sign in"),this.state.loading&&r.a.createElement(v.e,{size:24,className:e.buttonProgress})),r.a.createElement(v.k,{className:e.link,color:"secondary",component:f.b,to:T.signup},"Sign up")))}}]),a}(n.Component),J=F()(function(e){return{main:Object(U.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},link:{cursor:"pointer"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})($);t(374);var Y=function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(s.e,null,r.a.createElement(s.c,{exact:!0,path:T.default,render:function(){return l()?r.a.createElement(q,null):r.a.createElement(s.b,{to:T.signin})}}),r.a.createElement(s.c,{exact:!0,path:T.home,render:function(){return l()?r.a.createElement(q,null):r.a.createElement(s.b,{to:T.signin})}}),r.a.createElement(s.c,{path:T.about,component:M}),!l()&&r.a.createElement(s.c,{path:T.signin,component:J}),!l()&&r.a.createElement(s.c,{path:T.signup,component:Z}),r.a.createElement(s.c,{component:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f.a,null," ",r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[217,1,2]]]);
//# sourceMappingURL=main.47d05f15.chunk.js.map
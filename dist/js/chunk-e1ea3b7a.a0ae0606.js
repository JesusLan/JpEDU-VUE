(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1ea3b7a"],{5502:function(e,t,r){},"666f":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var o=function(e){return"https://jpedu-lw-demo.herokuapp.com/line-redirect-to-provider/"+e},i=function(e){return o(e)}},bd01:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"loginForm",staticClass:"login-box",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("h3",{staticClass:"login-title"},[e._v("欢迎登录")]),r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入邮箱"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-radio",{attrs:{label:"students"},model:{value:e.form.provider,callback:function(t){e.$set(e.form,"provider",t)},expression:"form.provider"}},[e._v("学生")]),r("el-radio",{attrs:{label:"teachers"},model:{value:e.form.provider,callback:function(t){e.$set(e.form,"provider",t)},expression:"form.provider"}},[e._v("教师")])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登陆")]),r("el-button",{attrs:{type:"primary"},on:{click:e.lineLogin}},[e._v("Line登陆")])],1)],1),r("el-dialog",{attrs:{title:"温馨提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("span",[e._v("请输入账号和密码")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},i=[],n=r("5530"),s=r("2f62"),a=r("666f"),l={name:"Login",components:{},data:function(){return{form:{username:"",password:"",provider:"students"},rules:{username:[{required:!0,message:"账号不可为空",trigger:"blur"}],password:[{required:!0,message:"密码不可为空",trigger:"blur"}]},dialogVisible:!1}},methods:Object(n["a"])(Object(n["a"])({},Object(s["b"])(["loginHandle"])),{},{lineLogin:function(){window.location.href=Object(a["b"])(this.form.provider)},onSubmit:function(){var e=this;this.loginHandle(this.form).then((function(){e.$router.push({name:"Home"})}))}})},u=l,c=(r("bf37"),r("2877")),d=Object(c["a"])(u,o,i,!1,null,"99e325c6",null);t["default"]=d.exports},bf37:function(e,t,r){"use strict";var o=r("5502"),i=r.n(o);i.a}}]);
//# sourceMappingURL=chunk-e1ea3b7a.a0ae0606.js.map
(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0626eae0":"d5643d70","chunk-2b3f2c1a":"841ba422","chunk-2db5b119":"0a020fbe","chunk-5da11ae2":"24b49801","chunk-7dc4598d":"31228326","chunk-7fd95249":"49bcec3d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0626eae0":1,"chunk-2b3f2c1a":1,"chunk-5da11ae2":1,"chunk-7dc4598d":1,"chunk-7fd95249":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0626eae0":"9c18c4d7","chunk-2b3f2c1a":"c80214e3","chunk-2db5b119":"31d6cfe0","chunk-5da11ae2":"6e34a712","chunk-7dc4598d":"59071f7e","chunk-7fd95249":"cd5dc2ad"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"235b":function(e,t,n){"use strict";var r=n("5fc0"),o=n.n(r);o.a},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=(n("d3b7"),n("5530")),c=n("d232"),u=function(e){var t=e.username,n=e.password,r=e.provider;return c["a"].post("/oauth/token",{username:t,password:n,provider:r,grant_type:"password",scope:"*",client_id:"2",client_secret:"Y4lHD7luQd9efbBddVJ3A8n2ypgGzPhiX4mtY4pp"})},i=n("c98b"),s={token:{}},d={token:function(e){return e.token},accessToken:function(e){return e.token.access_token},provider:function(e){return e.token.provider},isLogin:function(e){return e.token.created_at+1e3*e.token.expires_in>(new Date).getTime()}},l={SET_TOKEN:function(e,t){var n=t.token;e.token=n}},p={loginHandle:function(e,t){var n=e.commit,r=t.username,o=t.password,c=t.provider;return new Promise((function(e,t){return u({username:r,password:o,provider:c}).then((function(t){var r=Object(a["a"])(Object(a["a"])({},t.data),{},{created_at:(new Date).getTime(),provider:c});n("SET_TOKEN",{token:r}),e(Object(i["b"])(r))})).catch((function(e){t(e)}))}))},logoutHandle:function(e){var t=e.commit;return new Promise((function(){Object(i["a"])(),t("SET_TOKEN",{token:{}})}))}},f={state:s,getters:d,mutations:l,actions:p},h=function(e){e.subscribe((function(e,t){switch(e.type){case"SET_TOKEN":Object(c["b"])(t.auth.token.access_token)}}))},m=function(e){h(e)};r["default"].use(o["a"]);var b=new o["a"].Store({modules:{auth:f},plugins:[m]});t["a"]=b},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",{attrs:{direction:"vertical"}},[n("app-header"),n("el-main",[n("router-view")],1)],1)],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",[n("el-row",[n("el-col",{attrs:{span:18}},[n("router-link",{attrs:{to:"/"}},[e._v("JPEDU")])],1),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"right"},[e.isLogin?e._e():n("el-button",{attrs:{icon:"el-icon-user-solid",type:"primary"},nativeOn:{click:function(t){return e.login(t)}}},[e._v("登陆")]),e.isLogin?e._e():n("el-button",{attrs:{icon:"el-icon-s-promotion",type:"primary"},nativeOn:{click:function(t){return e.register(t)}}},[e._v("注册")]),e.isLogin?n("el-dropdown",[n("el-button",{attrs:{type:"primary"}},[n("i",{staticClass:"el-icon-user-solid"}),n("i",{staticClass:"el-icon-arrow-down el-icon--right"}),e._v(" 用户中心 ")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{icon:"el-icon-s-tools"},nativeOn:{click:function(t){return e.personalCenter(t)}}},[e._v("我的资料")]),n("el-dropdown-item",{attrs:{icon:"el-icon-info"},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登陆")])],1)],1):e._e()],1)])],1)],1)},u=[],i=n("5530"),s=n("2f62"),d={name:"AppHeader",data:function(){return{}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["logoutHandle"])),{},{personalCenter:function(){var e="students"===this.provider?"StudentPersonalCenter":"TeacherPersonalCenter";this.$router.push({name:e})},login:function(){this.$router.push({name:"Login"})},register:function(){this.$router.push({name:"Register"})},logout:function(){this.logoutHandle(),this.$router.push({name:"Login"})}}),computed:Object(i["a"])({},Object(s["c"])(["isLogin","provider"]))},l=d,p=(n("235b"),n("2877")),f=Object(p["a"])(l,c,u,!1,null,"6dcebc26",null),h=f.exports,m=n("a002"),b=n.n(m),g={name:"app",components:{AppHeader:h},created:function(){var e=this;b.a.getItem("token").then((function(t){t&&!e.$store.token&&e.$store.commit("SET_TOKEN",{token:t})}))}},v=g,k=(n("034f"),Object(p["a"])(v,o,a,!1,null,null,null)),y=k.exports,w=n("a18c"),O=n("4360"),_=n("5c96"),j=n.n(_);n("0fae");r["default"].config.productionTip=!1,r["default"].use(j.a),new r["default"]({router:w["a"],store:O["a"],render:function(e){return e(y)}}).$mount("#app")},"5fc0":function(e,t,n){},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";n("99af");var r=n("2909"),o=n("2b0e"),a=n("8c4f"),c=n("a002"),u=n.n(c),i=n("4360"),s=function(e,t,n){!0===e.meta.login?u.a.getItem("token").then((function(e){!e||!e.hasOwnProperty("access_token")||((new Date).getTime()-e.created_at)/1e3>=e.expires_in?n({name:"Login"}):(i["a"].getters.token||i["a"].commit("SET_TOKEN",{token:e}),n())})):n()},d=s,l=(n("d3b7"),[{path:"/auth/login",name:"Login",component:function(){return n.e("chunk-7fd95249").then(n.bind(null,"bd01"))}},{path:"/auth/register",name:"Register",component:function(){return n.e("chunk-2b3f2c1a").then(n.bind(null,"6d75"))}}]),p=[{path:"/",name:"Home",meta:{login:!1},component:function(){return n.e("chunk-2db5b119").then(n.bind(null,"77b8"))}}],f=[{path:"/personal-center/student",name:"StudentPersonalCenter",component:function(){return n.e("chunk-7dc4598d").then(n.bind(null,"b424"))}},{path:"/personal-center/teacher",name:"TeacherPersonalCenter",component:function(){return n.e("chunk-0626eae0").then(n.bind(null,"84da"))}}],h=[{path:"/push-message",name:"PushMessage",meta:{login:!1},component:function(){return n.e("chunk-5da11ae2").then(n.bind(null,"fd3a"))}}];o["default"].use(a["a"]);var m=a["a"].prototype.push;a["a"].prototype.push=function(e){return m.call(this,e).catch((function(e){return e}))};var b=new a["a"]({mode:"history",base:"/",routes:[].concat(Object(r["a"])(l),Object(r["a"])(p),Object(r["a"])(f),Object(r["a"])(h))});b.beforeEach(d);t["a"]=b},c98b:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n("a002"),o=n.n(r),a="token",c=function(e){return o.a.setItem(a,e)},u=function(){return o.a.removeItem(a)}},d232:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));n("4160"),n("d3b7"),n("159b");var r=n("bc3a"),o=n.n(r),a=n("5c96"),c=n("a18c"),u=o.a.create({timeout:1e4,baseURL:"https://jpedu-lw-demo.herokuapp.com"});function i(e){u.defaults.headers.common.Authorization="Bearer ".concat(e)}u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){var t=e.response.data.message?e.response.data.message:e.response.statusText,n=!1;if(422===e.response.status&&e.response.data.hasOwnProperty.call(e,"error")){for(var r in t+="<br>",e.response.data.errors){var o=e.response.data.errors[r];"string"===typeof o?t+="".concat(o," <br>"):e.response.data.errors[r].forEach((function(e){t+="".concat(e," <br>")}))}n=!0}return 401===e.response.status&&"Unauthenticated."===e.response.data.message&&c["a"].push({name:"Login"}),Object(a["Message"])({dangerouslyUseHTMLString:n,message:t,type:"error"}),Promise.reject(e)})),t["a"]=u}});
//# sourceMappingURL=app.4a086213.js.map
(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d217357":"7bffaa2b","chunk-2d22d746":"5cb7c574","chunk-50dbd120":"838fb5b4","chunk-be1b00fe":"dc42f143"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-50dbd120":1,"chunk-be1b00fe":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d217357":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-50dbd120":"44eb6ffb","chunk-be1b00fe":"44eb6ffb"}[t]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[t],p.parentNode.removeChild(p),r(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,r){n=s[t]=[e,r]}));e.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var r=s[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("64a9")},"2b1b":function(t,e,r){"use strict";r("5f2a")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("br"),r("br"),r("div",{staticClass:"container"},[t.error?r("Errors",{attrs:{msg:t.error}}):t._e(),r("router-view")],1)],1)},s=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("MEVN")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item active"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n          Home\n          "),r("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),t.isLoggedIn?t._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),t.isLoggedIn?t._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1),t.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[t._v("Profile")])],1):t._e(),t.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{to:"/logout"},on:{click:function(e){return e.preventDefault(),t.logoutUser(e)}}},[t._v("Logout")])]):t._e()])])],1)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={computed:d({},Object(i["c"])(["isLoggedIn"])),methods:d(d({},Object(i["b"])(["logout"])),{},{logoutUser:function(){this.logout()}})},f=p,b=r("2877"),g=Object(b["a"])(f,c,u,!1,null,null,null),h=g.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.msg))])},m=[],_={props:["msg"]},y=_,w=(r("2b1b"),Object(b["a"])(y,v,m,!1,null,"b795a97e",null)),k=w.exports;function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var j={components:{Navbar:h,Errors:k},computed:O({},Object(i["c"])(["error"]))},x=j,E=(r("034f"),Object(b["a"])(x,a,s,!1,null,null,null)),P=E.exports,S=r("8c4f"),I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"jumbotron jumbotron-fluid"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"display-4"},[t._v("MEVN Stack")]),r("p",{staticClass:"lead"},[t._v("Simple authentication application built with MEVN Stack using Express, Node.js, Vue.js and MongoDB by Codebook Inc.")])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"card bg-dark text-white"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("MongoDB")]),r("p",{staticClass:"card-text"},[t._v("MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.")]),r("a",{staticClass:"btn bg-white",attrs:{href:"https://www.mongodb.com/",target:"_blank"}},[t._v("More Info.")])])])]),r("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"card bg-info text-white"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Express.js")]),r("p",{staticClass:"card-text"},[t._v("Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.")]),r("a",{staticClass:"btn bg-white",attrs:{href:"https://expressjs.com/",target:"_blank"}},[t._v("More Info.")])])])]),r("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"card bg-danger text-white"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Vue.js")]),r("p",{staticClass:"card-text"},[t._v("Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing...")]),r("a",{staticClass:"btn bg-white",attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("More Info.")])])])]),r("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"card bg-success text-white"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Node.js")]),r("p",{staticClass:"card-text"},[t._v('As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently.')]),r("a",{staticClass:"btn bg-white",attrs:{href:"https://nodejs.org/",target:"_blank"}},[t._v("More Info.")])])])])])])}],D={name:"home",components:{}},L=D,A=Object(b["a"])(L,I,M,!1,null,null,null),N=A.exports,q=(r("96cf"),r("3b8d")),T=r("bc3a"),B=r.n(T),R={token:localStorage.getItem("token")||"",user:{},status:"",error:null},$={isLoggedIn:function(t){return!!t.token},authState:function(t){return t.status},user:function(t){return t.user},error:function(t){return t.error}},V={login:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e,r){var n,a,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("auth_request"),t.prev=2,t.next=5,B.a.post("https://localhost:5000/api/users/login",r);case 5:return a=t.sent,a.data.success&&(s=a.data.token,o=a.data.user,localStorage.setItem("token",s),B.a.defaults.headers.common["Authorization"]=s,n("auth_success",s,o)),t.abrupt("return",a);case 10:t.prev=10,t.t0=t["catch"](2),n("auth_error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));function e(e,r){return t.apply(this,arguments)}return e}(),register:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,n("register_request"),t.next=5,B.a.post("https://localhost:5000/api/users/register",r);case 5:return a=t.sent,void 0!==a.data.success&&n("register_success"),t.abrupt("return",a);case 10:t.prev=10,t.t0=t["catch"](1),n("register_error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(e,r){return t.apply(this,arguments)}return e}(),getProfile:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("profile_request"),t.next=4,B.a.get("https://localhost:5000/api/users/profile");case 4:return n=t.sent,r("user_profile",n.data.user),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete B.a.defaults.headers.common["Authorization"],H.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},J={auth_request:function(t){t.error=null,t.status="loading"},auth_success:function(t,e,r){t.token=e,t.user=r,t.status="success",t.error=null},auth_error:function(t,e){t.error=e.response.data.msg},register_request:function(t){t.error=null,t.status="loading"},register_success:function(t){t.error=null,t.status="success"},register_error:function(t,e){t.error=e.response.data.msg},logout:function(t){t.error=null,t.status="",t.token="",t.user=""},profile_request:function(t){t.status="loading"},user_profile:function(t,e){t.user=e}},z={state:R,actions:V,mutations:J,getters:$};n["a"].use(i["a"]);var G=new i["a"].Store({modules:{Auth:z},state:{},mutations:{},actions:{}});n["a"].use(S["a"]);var U=new S["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return r.e("chunk-50dbd120").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"register",component:function(){return r.e("chunk-be1b00fe").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}}]});U.beforeEach((function(t,e,r){t.matched.some((function(t){return t.meta.requiresAuth}))?G.getters.isLoggedIn?r():r("/login"):t.matched.some((function(t){return t.meta.requiresGuest}))&&G.getters.isLoggedIn?r("/profile"):r()}));var H=U;n["a"].config.productionTip=!1,n["a"].prototype.$http=B.a;var F=localStorage.getItem("token");F&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=F),new n["a"]({router:H,store:G,render:function(t){return t(P)}}).$mount("#app")},"5f2a":function(t,e,r){},"64a9":function(t,e,r){}});
//# sourceMappingURL=app.dad3e11d.js.map
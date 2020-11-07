(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],l=0,_=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&_.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(_.length)_.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b8dd7":"5679693a","chunk-8526fd86":"0fbd2954","chunk-f4fcd46a":"5dd33f76"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,r[1](u)}n[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2ec3":function(t,e,r){"use strict";r("be7f")},"421b":function(t,e,r){"use strict";r("d79f")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",class:{body__dark:t.darkMode},attrs:{id:"app"}},[r("router-view")],1)},s=[],o=r("5530"),i=r("2f62"),c={name:"App",components:{},computed:Object(o["a"])({},Object(i["d"])(["darkMode"])),methods:{},watch:{darkMode:{handler:function(){localStorage.setItem("darkMode",JSON.stringify(this.$store.state.darkMode))}}},mounted:function(){this.$store.state.darkMode=JSON.parse(localStorage.getItem("darkMode"))}},u=c,l=(r("421b"),r("2877")),d=Object(l["a"])(u,n,s,!1,null,null,null),_=d.exports,g=(r("45fc"),r("d3b7"),r("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Heading"),r("Input"),r("Cards")],1)},h=[],f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"grid"},t._l(t.getPages,(function(e){return r("div",{key:e.name,staticClass:"cards",class:{cards__dark:t.darkMode},attrs:{to:"/description"},on:{click:function(r){return t.goToDescription(e.alpha3Code)}}},[r("div",{staticClass:"cards__img",style:{backgroundImage:"url("+e.flag+")"}}),r("div",{staticClass:"cards__text",class:{cards__text__dark:t.darkMode}},[r("h2",{staticClass:"cards__heading"},[t._v(t._s(e.name))]),r("p",{staticClass:"cards__population"},[r("strong",[t._v("Population:")]),t._v(" "+t._s(e.population.toLocaleString())+" ")]),r("p",{staticClass:"cards__population"},[r("strong",[t._v("Region:")]),t._v(" "+t._s(e.region)+" ")]),r("p",{staticClass:"cards__population"},[r("strong",[t._v("Capital:")]),t._v(" "+t._s(e.capital)+" ")])])])})),0),r("Pages",{attrs:{"total-pages":Math.ceil(t.allCountries.length/12),total:t.allCountries.length,"per-page":t.resPerPage,currentPage:t.curPage},on:{pageChanged:t.onPageChanged}})],1)},m=[],k=(r("fb6a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pages"},[r("li",{staticClass:"pages__list"},[r("button",{staticClass:"pages__btn",class:{pages__btn__dark:t.darkMode},attrs:{disabled:t.isInFirstPage},on:{click:t.onClickFirstPage}},[t._v(" First ")])]),r("li",{staticClass:"pages__list"},[r("button",{staticClass:"pages__btn",class:{pages__btn__dark:t.darkMode},attrs:{disabled:t.isInFirstPage},on:{click:t.onClickPreviousPage}},[t._v(" Prev ")])]),t._l(t.pages,(function(e){return r("li",{key:e.name,staticClass:"pages__list"},[r("button",{staticClass:"pages__btn",class:{active:t.isPageActive(e.name),pages__btn__dark:t.darkMode,active__dark:t.darkMode&&t.isPageActive(e.name)},attrs:{disabled:e.isDisabled},on:{click:function(r){return t.onClickPage(e.name)}}},[t._v(" "+t._s(e.name)+" ")])])})),r("li",{staticClass:"pages__list"},[r("button",{staticClass:"pages__btn",class:{pages__btn__dark:t.darkMode},attrs:{disabled:t.isInLastPage},on:{click:t.onClickNextPage}},[t._v(" Next ")])]),r("li",{staticClass:"pages__list"},[r("button",{staticClass:"pages__btn",class:{pages__btn__dark:t.darkMode},attrs:{disabled:t.isInLastPage},on:{click:t.onClickLastPage}},[t._v(" Last ")])])],2)}),b=[],v=(r("a9e3"),{name:"Pages",props:{maxVisibleButtons:{type:Number,required:!1,default:3},totalPages:{type:Number,required:!0},total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:Object(o["a"])(Object(o["a"])({},Object(i["d"])(["darkMode"])),{},{startPage:function(){return 1===this.currentPage?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons:this.currentPage-1},endPage:function(){return Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages)},pages:function(){for(var t=[],e=this.startPage;e<=this.endPage;e+=1)t.push({name:e,isDisabled:e===this.currentPage});return t},isInFirstPage:function(){return 1===this.currentPage},isInLastPage:function(){return this.currentPage===this.totalPages}}),methods:{onClickFirstPage:function(){this.$emit("pageChanged",1)},onClickPreviousPage:function(){this.$emit("pageChanged",this.currentPage-1)},onClickPage:function(t){this.$emit("pageChanged",t)},onClickNextPage:function(){this.$emit("pageChanged",this.currentPage+1)},onClickLastPage:function(){this.$emit("pageChanged",this.totalPages)},isPageActive:function(t){return this.currentPage===t}}}),C=v,P=(r("2ec3"),Object(l["a"])(C,k,b,!1,null,null,null)),y=P.exports,M={name:"Cards",data:function(){return{img:"country.flag",curPage:1,resPerPage:12}},components:{Pages:y},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])(["darkMode"])),Object(i["c"])(["allCountries"])),{},{getPages:function(){var t=(this.curPage-1)*this.resPerPage,e=this.curPage*this.resPerPage;return this.allCountries?this.allCountries.slice(t,e):this.allCountries}}),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["toggleColor","fetchCountryData","searchCountry"])),{},{onPageChanged:function(t){console.log(t),this.curPage=t},goToDescription:function(t){this.$router.push({name:"Description",query:{country:t}})}}),created:function(){this.fetchCountryData()}},O=M,w=Object(l["a"])(O,f,m,!1,null,null,null),j=w.exports,x=r("b43e"),D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input"},[r("form",{staticClass:"input__search",on:{submit:function(e){return e.preventDefault(),t.searchCountry(t.country)}}},[r("i",{staticClass:"fas fa-search input__search__icon",class:{input__search__icon__dark:t.darkMode}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"input__search__input",class:{input__search__input__dark:t.darkMode},attrs:{type:"text",name:"text",placeholder:"Search for a country..."},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}})]),r("div",{staticClass:"select"},[r("div",{staticClass:"selected"},[r("button",{staticClass:"selected__btn",class:{selected__btn__dark:t.darkMode},on:{click:t.dropDown}},[t._v(" Filter by Region ")]),r("i",{staticClass:"fas fa-angle-down selected__icon"})]),r("ul",{staticClass:"select__list",class:{select__list__drop:t.drop}},[r("li",{staticClass:"select__list__item",on:{click:function(e){return t.fetchCountryData()}}},[r("button",{staticClass:"pad",class:t.selectBtnDark()},[t._v(" All ")])]),r("li",{staticClass:"select__list__item",on:{click:function(e){return t.fetchRegions(t.regions.africa)}}},[r("button",{class:t.selectBtnDark()},[t._v(" "+t._s(t.regions.africa)+" ")])]),r("li",{staticClass:"select__list__item",on:{click:function(e){return t.fetchRegions(t.regions.america)}}},[r("button",{class:t.selectBtnDark()},[t._v(" "+t._s(t.regions.america)+" ")])]),r("li",{staticClass:"select__list__item",on:{click:function(e){return t.fetchRegions(t.regions.asia)}}},[r("button",{class:t.selectBtnDark()},[t._v(" "+t._s(t.regions.asia)+" ")])]),r("li",{staticClass:"select__list__item",on:{click:function(e){return t.fetchRegions(t.regions.europe)}}},[r("button",{class:t.selectBtnDark()},[t._v(" "+t._s(t.regions.europe)+" ")])]),r("li",{staticClass:"select__list__item",on:{click:function(e){return t.fetchRegions(t.regions.oceania)}}},[r("button",{staticClass:"pad2",class:t.selectBtnDark()},[t._v(" "+t._s(t.regions.oceania)+" ")])])])])])},R=[],I={name:"Input",data:function(){return{drop:!1,country:"",regions:{africa:"Africa",america:"Americas",asia:"Asia",europe:"Europe",oceania:"Oceania"}}},computed:Object(o["a"])({},Object(i["d"])(["darkMode"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["toggleColor","fetchRegions","searchCountry","fetchCountryData"])),{},{searchIconDark:function(){return this.$store.state.darkMode?"input__search__icon__dark":""},inputDark:function(){return this.$store.state.darkMode?"input__search__input__dark":""},selectedBtnDark:function(){return this.$store.state.darkMode?"selected__btn__dark":""},selectBtnDark:function(){return this.$store.state.darkMode?"select__btn__dark":"select__btn"},dropDown:function(){this.drop=!this.drop}}),watch:{country:function(){this.searchCountry(this.country)}}},$=I,L=Object(l["a"])($,D,R,!1,null,null,null),S=L.exports,q={name:"Home",components:{Input:S,Cards:j,Heading:x["a"]}},A=q,N=Object(l["a"])(A,p,h,!1,null,null,null),B=N.exports,E=(r("96cf"),r("1da1")),T=r("bc3a"),H=r.n(T);a["a"].use(i["a"]);var F=new i["a"].Store({state:{token:localStorage.getItem("token")||"",user:{},status:"",darkMode:!1,countries:[],country:[],error:null},mutations:{changeColor:function(t,e){return t.darkMode=e},countryData:function(t,e){return t.countries=e},country:function(t,e){return t.country=e},auth_request:function(t){t.status="loading",t.error=null},auth_success:function(t,e,r){t.token=e,t.user=r,t.status="success",t.error=null},auth_error:function(t,e){t.error=e.response.data.msg},register_request:function(t){t.status="loading",t.error=null},register_success:function(t){t.status="success",t.error=null},register_error:function(t,e){t.error=e.response.data.msg},logout:function(t){t.status="",t.token="",t.user="",t.error=null}},actions:{toggleColor:function(t){var e=t.commit;this.darkMode=!this.darkMode,e("changeColor",this.darkMode)},fetchCountryData:function(t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,H.a.get("https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;alpha3Code;");case 3:a=e.sent,r("countryData",a.data);case 5:case"end":return e.stop()}}),e)})))()},fetchRegions:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.next=3,H.a.get("https://restcountries.eu/rest/v2/region/".concat(e,"?fields=flag;name;population;region;capital;"));case 3:n=r.sent,a("countryData",n.data);case 5:case"end":return r.stop()}}),r)})))()},searchCountry:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.next=3,H.a.get("https://restcountries.eu/rest/v2/name/".concat(e));case 3:n=r.sent,a("countryData",n.data);case 5:case"end":return r.stop()}}),r)})))()},searchFullCountry:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.next=3,H.a.get("https://restcountries.eu/rest/v2/name/".concat(e,"?fullText=true"));case 3:n=r.sent,a("country",n.data);case 5:case"end":return r.stop()}}),r)})))()},login:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,a("auth_request"),r.prev=2,r.next=5,H.a.post("/api/users/login",e);case 5:return n=r.sent,n.data.success&&(s=n.data.token,o=n.data.user,localStorage.setItem("token",s),H.a.defaults.headers.common["Proxy-Authorization"]=s,a("auth_success",s,o)),r.abrupt("return",n);case 10:r.prev=10,r.t0=r["catch"](2),a("auth_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},register:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,a("register_request"),r.prev=2,r.next=5,H.a.post("/api/users/register",e);case 5:return n=r.sent,void 0!==n.data.success&&a("register_success"),r.abrupt("return",n);case 10:r.prev=10,r.t0=r["catch"](2),a("register_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},logout:function(t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete H.a.defaults.headers.common["Proxy-Authorization"],G.push("/login"),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))()}},getters:{allCountries:function(t){return t.countries},isLoggedIn:function(t){return!!t.token},authState:function(t){return t.status},user:function(t){return t.user},error:function(t){return t.error}},modules:{}});a["a"].use(g["a"]);var J=[{path:"/",name:"Home",component:B,meta:{authRequired:!0}},{path:"/login",name:"Login",component:function(){return r.e("chunk-f4fcd46a").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:function(){return r.e("chunk-8526fd86").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/description",name:"Description",component:function(){return r.e("chunk-2d0b8dd7").then(r.bind(null,"3103"))},meta:{authRequired:!0}}],z=new g["a"]({mode:"history",base:"/",routes:J});z.beforeEach((function(t,e,r){t.matched.some((function(t){return t.meta.authRequired}))?F.getters.isLoggedIn?r():r("/login"):t.matched.some((function(t){return t.meta.requiresGuest}))&&F.getters.isLoggedIn?r("/"):r()}));var G=z;a["a"].config.productionTip=!1,a["a"].prototype.$http=H.a;var V=localStorage.getItem("token");V&&(a["a"].prototype.$http.defaults.headers.common["Proxy-Authorization"]=V),new a["a"]({router:G,store:F,render:function(t){return t(_)}}).$mount("#app")},b43e:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Header",{staticClass:"header",class:{header__dark:t.darkMode}},[r("h1",{staticClass:"header__heading",on:{click:t.goHome}},[t._v("Where in the world?")]),r("div",[r("div",{staticClass:"side"},[r("div",{staticClass:"header__toggler",class:{header__link__dark:t.darkMode},on:{click:t.toggleColor}},[r("span",{staticClass:"header__icon"},[r("i",{class:t.bulb})]),t._v(" "+t._s(t.toggleText)+" ")]),r("i",{staticClass:"fas fa-sort-down dropdown",on:{click:t.dropdown}})]),r("ul",{staticClass:"header__list",class:{show:t.drop}},[t.isLoggedIn?t._e():r("li",{staticClass:"header__list__item",class:{header__list__item__dark:t.darkMode}},[r("router-link",{staticClass:"header__link",class:{header__link__dark_2:t.darkMode},attrs:{to:"/login"}},[t._v("Login")])],1),t.isLoggedIn?t._e():r("li",{staticClass:"header__list__item",class:{header__list__item__dark:t.darkMode}},[r("router-link",{staticClass:"header__link",class:{header__link__dark_2:t.darkMode},attrs:{to:"/register"}},[t._v("Register")])],1),t.isLoggedIn?r("li",{staticClass:"header__list__item",class:{header__list__item__dark:t.darkMode}},[r("router-link",{staticClass:"header__link",class:{header__link__dark_2:t.darkMode},attrs:{to:"/"}},[t._v("Home")])],1):t._e(),t.isLoggedIn?r("li",{staticClass:"header__list__item",class:{header__list__item__dark:t.darkMode}},[r("a",{staticClass:"header__link",class:{header__link__dark_2:t.darkMode},attrs:{to:"/logout"},on:{click:function(e){return e.preventDefault(),t.logoutUser(e)}}},[t._v("Logout")])]):t._e()])])])},n=[],s=r("5530"),o=r("2f62"),i={name:"App",data:function(){return{drop:!1}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(o["d"])(["darkMode"])),Object(o["c"])(["isLoggedIn"])),{},{bulb:function(){return this.$store.state.darkMode?"far fa-lightbulb":"far fa-moon"},toggleText:function(){return this.$store.state.darkMode?"Light Mode":"Dark Mode"}}),methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["toggleColor","logout"])),{},{goHome:function(){this.$router.push({name:"Home"})},dropdown:function(){this.drop=!this.drop},logoutUser:function(){this.logout()}}),watch:{darkMode:{handler:function(){localStorage.setItem("darkMode",JSON.stringify(this.$store.state.darkMode))}}},mounted:function(){this.$store.state.darkMode=JSON.parse(localStorage.getItem("darkMode"))}},c=i,u=(r("421b"),r("2877")),l=Object(u["a"])(c,a,n,!1,null,null,null);e["a"]=l.exports},be7f:function(t,e,r){},d79f:function(t,e,r){}});
//# sourceMappingURL=app.11f586d3.js.map
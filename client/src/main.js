import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

//  Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
/** Load the token from the local storage and this is doing this in order to make our axios calls so we are just setting its default authorization headers to this token so that incase any token is present we'll load that token on the initialization of the app */
const token = localStorage.getItem("token");

//  If there is any token then we will simply append default axios authorization headers

if (token) {
  Vue.prototype.$http.defaults.headers.common["Proxy-Authorization"] = token;
}
//  In essence, we are just storing the token from the local storage with the value name "token" and then we said that if there is any token we will set the token to the $http default header or to the axios header which we will be  sending back and fort

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // For the authentication we will need a token and we will get it from the local storage
    //  If the user is logged in that means that the token will be available in the local storage and that will be fetched if not then the token will be set to an empty string.
    token: localStorage.getItem("token") || "",

    /** This will store the user data */
    user: {},
    status: "",
    darkMode: false,
    countries: [],
    country: [],
    error: null
  },
  /** This will change the state of the data */
  mutations: {
    changeColor: (state, darkMode) => (state.darkMode = darkMode),
    countryData: (state, countries) => (state.countries = countries),
    country: (state, country) => (state.country = country),
    auth_request: state => {
      state.status = "loading";
      state.error = null;
    },
    auth_success: (state, token, user) => {
      state.token = token;
      state.user = user;
      state.status = "success";
      state.error = null;
    },
    auth_error(state, err) {
      state.error = err.response.data.msg;
    },
    register_request: state => {
      state.status = "loading";
      state.error = null;
    },
    register_success: state => {
      state.status = "success";
      state.error = null;
    },
    register_error(state, err) {
      state.error = err.response.data.msg;
    },
    logout: state => {
      state.status = "";
      state.token = "";
      state.user = "";
      state.error = null;
    }
  },
  /** This will do all the actions that we want to perform on our data */
  actions: {
    toggleColor({ commit }) {
      this.darkMode = !this.darkMode;
      commit("changeColor", this.darkMode);
    },
    async fetchCountryData({ commit }) {
      const response = await axios.get(
        // https://restcountries.com/v2/all?fields=name,capital,currencies

        `https://restcountries.com/v2/all?fields=flag,name,population,region,capital,alpha3Code;`
      );
      commit("countryData", response.data);
    },
    async fetchRegions({ commit }, region) {
      const response = await axios.get(
        // `https://restcountries.com/v2/region/${region}?fields=flag;name;population;region;capital;`
        `https://restcountries.com/v3.1/region/${region}?fields=flag,name,population,region,capital;`
      );
      commit("countryData", response.data);
    },
    async searchCountry({ commit }, input) {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${input}`
      );
      commit("countryData", response.data);
    },
    async searchFullCountry({ commit }, input) {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${input}?fullText=true`
      );
      commit("country", response.data);
    },

    //  Login Action
    async login({ commit }, user) {
      commit("auth_request");
      try {
        let res = await axios.post("/api/users/login", user);
        if (res.data.success) {
          const token = res.data.token;
          const user = res.data.user;
          //  Store the token into the localStorage
          localStorage.setItem("token", token);
          //  Set the axios defaults
          axios.defaults.headers.common["Proxy-Authorization"] = token;
          commit("auth_success", token, user);
        }
        return res;
      } catch (err) {
        commit("auth_error", err);
      }
    },

    //  Register User
    async register({ commit }, userData) {
      commit("register_request");

      //  axios.post() since we're sending data
      try {
        let res = await axios.post("/api/users/register", userData);
        if (res.data.success !== undefined) {
          commit("register_success");
        }
        return res;
      } catch (err) {
        commit("register_error", err);
      }
    },

    //  Logout function
    async logout({ commit }) {
      await localStorage.removeItem("token");
      commit("logout");
      delete axios.defaults.headers.common["Proxy-Authorization"];
      router.push("/login");
      return;
    }
  },
  /** Now in order for us to get the state into our app component to display, we need to add a getter */
  getters: {
    allCountries: state => state.countries,
    // isLoggedIn: function (state)  {
    //     if(state.token !== '') {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
  },
  modules: {}
});

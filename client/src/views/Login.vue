<template>
  <div :class="{ body__dark: darkMode }">
    <Heading />
    <div class="form" :class="{ form__dark: darkMode }">
      <h2 class="form__heading">
        Sign In to Rest Countries
      </h2>
      <form class="form__body" @submit.prevent="loginUser">
        <div class="form__group">
          <label class="form__label" for="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            v-model="username"
            class="form__control"
            :class="{ form__control__dark: darkMode, error: includesUser() }"
          />
          <small v-if="error" class="small__text">{{
            error.includes(user) ? error : ""
          }}</small>
        </div>

        <div class="form__group">
          <label class="form__label" for="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            v-model="password"
            class="form__control"
            :class="{
              form__control__dark: darkMode,
              error: includesPass()
            }"
          />
          <small v-if="error" class="small__text">{{
            error.includes(pass) ? error : ""
          }}</small>
        </div>

        <button class="form__btn" :class="{ form__btn__dark: darkMode }">
          Sign In
        </button>
        <p class="form__link" :class="{ form__link__dark: darkMode }">
          <router-link
            to="/register"
            class="form__link"
            :class="{ form__link__dark: darkMode }"
            >Need an account?</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Heading from "../components/Heading";
// import store from "../store/index"
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      pass: "password",
      user: "Username"
    };
  },
  components: {
    Heading
  },
  computed: {
    ...mapState(["darkMode"]),
    ...mapGetters(["error"])
    // includesPass() {
    //   if (this.error) {
    //     return this.error.includes(this.pass);
    //   }
    // },
    // includesUser() {
    //   if (this.error) {
    //     return this.error.includes(this.user);
    //   }
    // },
  },
  methods: {
    ...mapActions(["login"]),
    includesPass() {
      if (this.error) {
        return this.error.includes(this.pass);
      }
    },
    includesUser() {
      if (this.error) {
        return this.error.includes(this.user);
      }
    },
    loginUser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>

<template>
  <div :class="{ body__dark: darkMode }">
    <Heading />
    <div class="form" :class="{ form__dark: darkMode }">
      <h2 class="form__heading">
        Sign up to Rest Countries
      </h2>
      <form class="form__body" @submit.prevent="registerUser">
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
            error.includes("username") ? error : ""
          }}</small>
        </div>

        <div class="form__group">
          <label class="form__label" for="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            v-model="name"
            class="form__control"
            :class="{ form__control__dark: darkMode }"
          />
        </div>

        <div class="form__group">
          <label class="form__label" for="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            v-model="email"
            class="form__control"
            :class="{ form__control__dark: darkMode, error: includesMail() }"
          />
          <small v-if="error" class="small__text">{{
            error.includes("email") ? error : ""
          }}</small>
        </div>

        <div class="form__group">
          <label class="form__label" for="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="8+ characters"
            name="password"
            v-model="password"
            class="form__control"
            :class="{ form__control__dark: darkMode, error: includesPass() }"
          />
          <small v-if="error" class="small__text">{{
            error.includes("Password") ? error : ""
          }}</small>
        </div>

        <div class="form__group">
          <label class="form__label" for="confirm_password"
            >Confirm Password</label
          >
          <input
            id="confirm_password"
            type="password"
            placeholder="Confirm Password"
            name="password"
            v-model="confirm_password"
            class="form__control"
            :class="{ form__control__dark: darkMode, error: includesPass() }"
          />
          <small v-if="error" class="small__text">{{
            error.includes("Password") ? error : ""
          }}</small>
        </div>
        <button class="form__btn" :class="{ form__btn__dark: darkMode }">
          Register
        </button>
        <p class="form__link" :class="{ form__link__dark: darkMode }">
          <router-link
            to="/login"
            class="form__link"
            :class="{ form__link__dark: darkMode }"
            >Already have an account?</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Heading from "../components/Heading";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      name: "",
      email: "",
      pass: "Password",
      user: "username",
      mail: "email"
    };
  },
  components: {
    Heading
  },
  computed: {
    ...mapState(["darkMode"]),
    ...mapGetters(["error"])
  },
  methods: {
    ...mapActions(["register"]),
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
    includesMail() {
      if (this.error) {
        return this.error.includes(this.mail);
      }
    },
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name
      };
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style></style>

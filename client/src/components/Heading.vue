<template>
  <Header :class="{ header__dark: darkMode }" class="header">
    <h1 @click="goHome" class="header__heading">Where in the world?</h1>
    <div>
      <div class="side">
        <div
          @click="toggleColor"
          class="header__toggler"
          :class="{ header__link__dark: darkMode }"
        >
          <span class="header__icon">
            <i :class="bulb"></i>
          </span>
          {{ toggleText }}
        </div>
        <i class="fas fa-sort-down dropdown" @click="dropdown"></i>
      </div>
      <ul class="header__list" :class="{ show: drop }">
        <li
          class="header__list__item"
          :class="{ header__list__item__dark: darkMode }"
          v-if="!isLoggedIn"
        >
          <!-- <button
            class="header__list__btn"
            :class="{ header__list__btn__dark: darkMode }"
          > -->
          <router-link
            class="header__link"
            :class="{ header__link__dark_2: darkMode }"
            to="/login"
            >Login</router-link
          >
          <!-- </button> -->
        </li>
        <li
          class="header__list__item"
          :class="{ header__list__item__dark: darkMode }"
          v-if="!isLoggedIn"
        >
          <!-- <button
            class="header__list__btn"
            :class="{ header__list__btn__dark: darkMode }"
          > -->
          <router-link
            class="header__link"
            :class="{ header__link__dark_2: darkMode }"
            to="/register"
            >Register</router-link
          >
          <!-- </button> -->
        </li>
        <li
          class="header__list__item"
          :class="{ header__list__item__dark: darkMode }"
          v-if="isLoggedIn"
        >
          <!-- <button
            class="header__list__btn"
            :class="{ header__list__btn__dark: darkMode }"
          > -->
          <router-link
            class="header__link"
            :class="{ header__link__dark_2: darkMode }"
            to="/"
            >Home</router-link
          >
          <!-- </button> -->
        </li>
        <li
          class="header__list__item"
          :class="{ header__list__item__dark: darkMode }"
          v-if="isLoggedIn"
        >
          <!-- <button
            class="header__list__btn"
            :class="{ header__list__btn__dark: darkMode }"
            @click.prevent="logoutUser"
          > -->
          <a
            class="header__link"
            :class="{ header__link__dark_2: darkMode }"
            to="/logout"
            @click.prevent="logoutUser"
            >Logout</a
          >
          <!-- </button> -->
        </li>
      </ul>
      <!-- <ul class="select__list" :class="{ show: drop }">
          <li class="select__list__item">
            <button class="select__list__btn">My Account</button>
          </li>
          <li class="select__list__item">
            <button class="select__list__btn">Settings</button>
          </li>
          <li class="select__list__item">
            <button class="select__list__btn">Logout</button>
          </li>
        </ul> -->
    </div>
  </Header>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      drop: false
    };
  },
  computed: {
    ...mapState(["darkMode"]),
    ...mapGetters(["isLoggedIn"]),
    bulb() {
      return this.$store.state.darkMode ? "far fa-lightbulb" : "far fa-moon";
    },
    toggleText() {
      return this.$store.state.darkMode ? "Light Mode" : "Dark Mode";
    }
  },
  methods: {
    ...mapActions(["toggleColor", "logout"]),
    goHome() {
      this.$router.push({ name: "Home" });
    },
    dropdown() {
      this.drop = !this.drop;
    },
    logoutUser() {
      this.logout();
    }
  },
  watch: {
    darkMode: {
      handler() {
        localStorage.setItem(
          "darkMode",
          JSON.stringify(this.$store.state.darkMode)
        );
      }
    }
  },
  mounted() {
    this.$store.state.darkMode = JSON.parse(localStorage.getItem("darkMode"));
  }
};
</script>

<style lang="scss" src="../sass/main.scss" />

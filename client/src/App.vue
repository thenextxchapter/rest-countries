<template>
  <div id="app" class="container" :class="{ body__dark: darkMode }">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  components: {},
  computed: {
    ...mapState(["darkMode"])
    // bulb() {
    //   return this.$store.state.darkMode ? "far fa-lightbulb" : "far fa-moon";
    // },
    // toggleText() {
    //   return this.$store.state.darkMode ? "Light Mode" : "Dark Mode";
    // },
  },
  methods: {
    // ...mapActions(["toggleColor"]),
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

<style lang="scss" src="./sass/main.scss" />

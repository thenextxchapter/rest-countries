<template>
  <div>
    <Heading />
    <button
      @click="goHome"
      class="desc__btn"
      :class="{ desc__btn__dark: darkMode }"
    >
      <i class="fas fa-long-arrow-alt-left arrow"></i>
      Back
    </button>
    <div class="divide">
      <div class="divide__left">
        <img
          :src="country[0].flags.png"
          :alt="country[0].name.common"
          class="img__left"
        />
      </div>
      <div class="divide__right">
        <h2 class="country__name">{{ country[0].name.common }}</h2>
        <div class="text">
          <p class="others">
            <strong>Offical Name:</strong> {{ country[0].name.official }}
          </p>
          <p class="others">
            <strong>Population:</strong>
            {{ country[0].population.toLocaleString() }}
          </p>
          <p class="others"><strong>Region:</strong> {{ country[0].region }}</p>
          <p class="others">
            <strong>Sub Region:</strong> {{ country[0].subregion }}
          </p>
          <p class="others"><strong>Capital:</strong> {{ country[0].capital }}</p>
          <p class="others">
            <strong>Top Level Domain:</strong>
            {{ country[0].topLevelDomain[0] }}
          </p>
          <p class="others">
            <strong>Currencies:</strong>
            {{ country[0].currencies[0].name }},
            {{ country[0].currencies[0].symbol }}
          </p>
          <p class="others">
            <strong>Languages:</strong> {{ country[0].languages[0].name }}
          </p>
          <p class="others">
            <strong>Calling Codes:</strong> +{{ country[0].callingCodes[0] }}
          </p>
        </div>

        <div class="borders" v-if="country[0].borders[0]">
          <h4 class="border__text">Border Countries:</h4>
          <div>
            <button
              v-for="btn in country[0].borders"
              :key="btn"
              class="border__btn"
              :class="{ border__btn__dark: darkMode }"
              @click="goToCountry(btn)"
            >
              {{ btn }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../components/Heading";
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Description",
  data() {
    return {
      details: this.$route.query.country,
      country: [],
      code: [],
    };
  },
  components: {
    Heading,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
  methods: {
    ...mapActions(["searchFullCountry"]),
    goHome() {
      this.$router.push({ name: "Home" });
    },
    async getCountry(details) {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${details}?fullText=true`
      );
      this.country = response.data;
    },
    async getCode(details) {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${details}`
      );
      this.country = response.data;
    },
    goToCountry(country) {
      this.$router.push({ name: "Description", query: { country } });
      this.getCode(country);
    },
  },
  created() {
    this.getCode(this.details);
  },
};
</script>

<style lang="scss" src="../sass/main.scss" />

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
        <img :src="country.flags.svg" :alt="country.name.common" class="img__left" />
      </div>
      <div class="divide__right">
        <h2 class="country__name">{{ country.name.common }}</h2>
        <div class="text">
          <p class="others">
            <strong>Offical Name:</strong> {{ country.nativeName }}
          </p>
          <p class="others">
            <strong>Population:</strong>
            {{ country.population.toLocaleString() }}
          </p>
          <p class="others"><strong>Region:</strong> {{ country.region }}</p>
          <p class="others">
            <strong>Sub Region:</strong> {{ country.subregion }}
          </p>
          <p class="others"><strong>Capital:</strong> {{ country.capital }}</p>
          <p class="others">
            <strong>Top Level Domain:</strong>
            {{ country.topLevelDomain[0] }}
          </p>
          <p class="others">
            <strong>Currencies:</strong>
            {{ country.currencies[0].name }},
            {{ country.currencies[0].symbol }}
          </p>
          <p class="others">
            <strong>Languages:</strong> {{ country.languages[0].name }}
          </p>
          <p class="others">
            <strong>Calling Codes:</strong> +{{ country.callingCodes[0] }}
          </p>
        </div>

        <div class="borders" v-if="country.borders[0]">
          <h4 class="border__text">Border Countries:</h4>
          <div>
            <button
              v-for="btn in country.borders"
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
      code: []
    };
  },
  components: {
    Heading
  },
  computed: {
    ...mapState(["darkMode"])
  },
  methods: {
    ...mapActions(["searchFullCountry"]),
    goHome() {
      this.$router.push({ name: "Home" });
    },
    async getCountry(details) {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${details}?fullText=true`
      );
      this.country = response.data;
    },
    async getCode(details) {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${details}`
      );
      this.country = response.data;
    },
    goToCountry(country) {
      this.$router.push({ name: "Description", query: { country } });
      this.getCode(country);
    }
  },
  created() {
    this.getCode(this.details);
  }
};
</script>

<style lang="scss" src="../sass/main.scss" />

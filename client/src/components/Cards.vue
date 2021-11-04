<template>
  <div>
    <div class="grid">
      <div
        to="/description"
        class="cards"
        :class="{ cards__dark: darkMode }"
        v-for="country in getPages"
        :key="country[0].name.common"
        @click="goToDescription(country[0].cioc)"
      >
        <div
          class="cards__img"
          :style="{ backgroundImage: `url(${country[0].flags.png})` }"
        ></div>
        <!-- <img :src="country.flag" :alt="country.name" class="cards__img" /> -->
        <div class="cards__text" :class="{ cards__text__dark: darkMode }">
          <h2 class="cards__heading">{{ country[0].name.common }}</h2>
          <p class="cards__population">
            <strong>Population:</strong>
            {{ country[0].population.toLocaleString() }}
          </p>
          <p class="cards__population">
            <strong>Region:</strong> {{ country[0].region }}
          </p>
          <p class="cards__population">
            <strong>Capital:</strong> {{ country[0].capital[0] }}
          </p>
        </div>
      </div>
    </div>
    <Pages
      :total-pages="Math.ceil(allCountries.length / 12)"
      :total="allCountries.length"
      :per-page="resPerPage"
      :currentPage="curPage"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import Pages from "../components/Pages";

export default {
  name: "Cards",
  data() {
    return {
      img: "country[0].flag",
      curPage: 1,
      resPerPage: 12
    };
  },
  components: {
    Pages
  },
  computed: {
    ...mapState(["darkMode"]),
    ...mapGetters(["allCountries"]),
    getPages() {
      const start = (this.curPage - 1) * this.resPerPage;
      const end = this.curPage * this.resPerPage;

      if (this.allCountries) {
        return this.allCountries.slice(start, end);
      }
      return this.allCountries;
    }
  },
  methods: {
    ...mapActions(["toggleColor", "fetchCountryData", "searchCountry"]),
    onPageChanged(page) {
      console.log(page);
      this.curPage = page;
    },
    goToDescription(country) {
      // this.$emit("display", country);
      this.$router.push({ name: "Description", query: { country } });
    }

    // openDescription() {
    //   this.$router.push({ name: "Description" });
    // },
  },
  created() {
    this.fetchCountryData();
  }
};
</script>

<style lang="scss" src="../sass/main.scss" />

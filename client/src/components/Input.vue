<template>
  <div class="input">
    <form class="input__search" @submit.prevent="searchCountry(country)">
      <i
        class="fas fa-search input__search__icon"
        :class="{ input__search__icon__dark: darkMode }"
      ></i>
      <input
        type="text"
        name="text"
        placeholder="Search for a country..."
        class="input__search__input"
        :class="{ input__search__input__dark: darkMode }"
        v-model="country"
      />
    </form>

    <div class="select">
      <div class="selected">
        <button
          :class="{ selected__btn__dark: darkMode }"
          class="selected__btn"
          @click="dropDown"
        >
          Filter by Region
        </button>
        <i class="fas fa-angle-down selected__icon"></i>
      </div>
      <ul class="select__list" :class="{ select__list__drop: drop }">
        <li class="select__list__item" @click="fetchCountryData()">
          <button :class="selectBtnDark()" class="pad">
            All
          </button>
        </li>
        <li class="select__list__item" @click="fetchRegions(regions.africa)">
          <button :class="selectBtnDark()">
            {{ regions.africa }}
          </button>
        </li>
        <li class="select__list__item" @click="fetchRegions(regions.america)">
          <button :class="selectBtnDark()">
            {{ regions.america }}
          </button>
        </li>
        <li class="select__list__item" @click="fetchRegions(regions.asia)">
          <button :class="selectBtnDark()">
            {{ regions.asia }}
          </button>
        </li>
        <li class="select__list__item" @click="fetchRegions(regions.europe)">
          <button :class="selectBtnDark()">
            {{ regions.europe }}
          </button>
        </li>
        <li class="select__list__item" @click="fetchRegions(regions.oceania)">
          <button :class="selectBtnDark()" class="pad2">
            {{ regions.oceania }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Input",
  data() {
    return {
      drop: false,
      country: "",
      regions: {
        africa: "Africa",
        america: "Americas",
        asia: "Asia",
        europe: "Europe",
        oceania: "Oceania"
      }
    };
  },
  computed: {
    ...mapState(["darkMode"])
  },
  methods: {
    ...mapActions([
      "toggleColor",
      "fetchRegions",
      "searchCountry",
      "fetchCountryData"
    ]),
    searchIconDark() {
      return this.$store.state.darkMode ? "input__search__icon__dark" : "";
    },
    inputDark() {
      return this.$store.state.darkMode ? "input__search__input__dark" : "";
    },
    selectedBtnDark() {
      return this.$store.state.darkMode ? "selected__btn__dark" : "";
    },
    selectBtnDark() {
      return this.$store.state.darkMode ? "select__btn__dark" : "select__btn";
    },
    dropDown() {
      this.drop = !this.drop;
    }
  },
  watch: {
    country() {
      this.searchCountry(this.country);
    }
  }
};
</script>

<style lang="scss" src="../sass/main.scss" />

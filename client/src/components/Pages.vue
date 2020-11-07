<template>
  <ul class="pages">
    <li class="pages__list">
      <button
        class="pages__btn"
        :class="{ pages__btn__dark: darkMode }"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        First
      </button>
    </li>
    <li class="pages__list">
      <button
        class="pages__btn"
        :class="{ pages__btn__dark: darkMode }"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        Prev
      </button>
    </li>
    <li class="pages__list" v-for="page in pages" :key="page.name">
      <button
        :disabled="page.isDisabled"
        :class="{
          active: isPageActive(page.name),
          pages__btn__dark: darkMode,
          active__dark: darkMode && isPageActive(page.name)
        }"
        class="pages__btn"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </button>
    </li>
    <li class="pages__list">
      <button
        class="pages__btn"
        :class="{ pages__btn__dark: darkMode }"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        Next
      </button>
    </li>
    <li class="pages__list">
      <button
        class="pages__btn"
        :class="{ pages__btn__dark: darkMode }"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        Last
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Pages",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(["darkMode"]),
    startPage() {
      //  When on the first page
      if (this.currentPage === 1) {
        return 1;
      }
      //  When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }
      //  When in between
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pageChanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pageChanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pageChanged", page);
    },
    onClickNextPage() {
      this.$emit("pageChanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pageChanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  }
};
</script>

<style>
.pages {
  list-style-type: none;
  text-align: center;
  margin-top: 60px;
  padding-bottom: 60px;
}

.pages__list {
  display: inline-block;
}

.active {
  background-color: #000;
  color: #fff;
}

.pages__btn {
  /* background-color: #fff; */
  border: none;
  padding: 20px 20px;
  margin-bottom: 0.3rem;
  margin-left: 3px;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px 0.5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.pages__btn__dark {
  background-color: hsl(209, 23%, 22%);
  color: #fff;
}

.active__dark {
  background-color: hsl(203, 19%, 30%);
}
</style>

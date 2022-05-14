<template>
  <div class="home">
    <blog-banner :image="image"></blog-banner>
    <div v-if="isLoading">
      <blog-loader></blog-loader>
    </div>
    <div v-else>
      <div class="wrapper post-list pt-55 pb-40">
        <div id="latest-articles" class="heading" data-cy="latestArticleHeader">
          Latest articles
        </div>
        <div class="category pt-30 pb-30">
          <select
            class="post-category-selector pb-20 pt-20 pl-20 pr-20"
            name="categories"
            id="post-categories"
            v-model="selectedCategory"
            @change="changeCategory"
          >
            <option value="">All categories</option>
            <option
              v-for="category of categories"
              :key="category.slug"
              v-bind:value="category.slug"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="article-list row">
          <blog-card
            v-for="blog of blogs"
            :key="blog.slug"
            :cardImage="blog?.post_thumbnail?.URL"
            :cardTitle="blog.title"
            :cardPostedDate="blog.date"
            :cardCategory="blog.categories"
            :cardSlug="blog.slug"
          ></blog-card>
        </div>
        <div class="pagination pt-40 pb-30">
          <paginate
            v-model="currentPage"
            :pageCount="totalPages"
            :clickHandler="changePage"
            :prevText="prevContentLeft"
            :nextText="prevContentRight"
            :containerClass="'pagination-container'"
          >
          </paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @View DetailView
 * Route: /
 * List view for all the blogs
 * @component BlogBanner
 * @component BlogLoader
 * @component BlogCard
 * @component Paginate
 *
 * Built using Options API
 */
import BlogBanner from "@/components/BlogBanner.vue";
import BlogCard from "@/components/BlogCard.vue";
import BlogLoader from "@/components/BlogLoader.vue";
import Paginate from "vuejs-paginate-next";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {
    BlogBanner,
    BlogCard,
    Paginate,
    BlogLoader,
  },
  data: () => ({
    selectedCategory: "",
    image: `url(${require("@/assets/header.jpg")})`,
    prevContentLeft: `<i class="fa-solid fa-angle-left"></i>`,
    prevContentRight: `<i class="fa-solid fa-angle-right"></i>`,
    isLoading: true,
  }),
  async mounted() {
    this.isLoading = true;
    // fetching all the blogs
    await this.fetchBlogs();
    // fetching all the categories
    await this.fetchCategories();
    this.isLoading = false;
  },
  methods: {
    ...mapActions("blogs", {
      fetchBlogs: "FETCH_BLOGS",
      fetchCategories: "FETCH_CATEGORIES",
      selectedCategorySlug: "SET_CATEGORY",
      setCurrentPageNumber: "SET_CURRENT_PAGE_NUMBER",
    }),
    scrollToTop() {
      // scroll to start of latest-artciles
      let element = document.querySelector(`#latest-articles`);
      element.scrollIntoView({ behavior: "smooth" });
    },
    /**
     * Triggerd when page Change is triggered from the paginate component
     * @param {*} pageNum
     */
    async changePage(pageNum) {
      this.isLoading = true;
      // Sets the selected Page Number in the store
      this.setCurrentPageNumber(pageNum);
      // Fetch all the blogs based on the page number
      await this.fetchBlogs();
      this.isLoading = false;
      this.scrollToTop();
    },
    /**
     * Triggered when category is selected
     */
    async changeCategory() {
      this.isLoading = true;
      // Sets the selected category
      this.selectedCategorySlug(this.selectedCategory);
      this.changePage(1);
      await this.fetchBlogs();
      this.isLoading = false;
    },
  },
  computed: {
    ...mapGetters("blogs", {
      categories: "getCategories",
      blogs: "getAllBlogs",
      totalPages: "getTotalPage",
      currentPage: "getPageNumber",
    }),
  },
};
</script>
<style lang="scss">
@import "@/styles/variables";
@import "@/styles/medias";
.home {
  .post-list {
    .heading {
      font-size: 65px;
      font-weight: 900;
    }
  }
  .post-category-selector {
    font-size: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    border: none;
    background-position-x: 94%;
    -moz-appearance: none;
    -webkit-appearance: none;
    apperance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
    @media only screen and (max-width: 576px) {
      width: 100%;
    }
    &:after {
      color: red;
      padding-right: 30px;
      margin-right: 30px;
      right: 30px;
    }
  }
  .article-list {
    margin-left: -15px;
    margin-right: -15px;
    @include media_mobile {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .pagination {
    display: flex;
    width: 100%;
    justify-content: center;
    .pagination-container {
      display: flex;
      @include media_mobile {
        padding: 0;
      }
      .page-item {
        margin-left: 10px;
        margin-right: 10px;
        height: 30px;
        width: 30px;
        cursor: pointer;
        .page-link {
          text-align: center;
          display: block;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 14px;
          color: $color-black;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-weight: 700;
        &.active {
          a {
            color: $color-white;
          }
          background: $color-blue;
          color: $color-white;
        }
      }
    }
  }
}
</style>

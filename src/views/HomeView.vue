<template>
  <div class="home">
    <blog-banner :image="image"></blog-banner>
    <div v-if="isLoading">
      <blog-loader></blog-loader>
    </div>
    <div v-else>
      <div ref="root" class="wrapper post-list pt-55 pb-40">
        <div class="col col--12 heading" data-cy="latestArticleHeader">
          Latest articles
        </div>
        <div class="col col--12 category ml-15 mr-15 pt-30 pb-30">
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
    await this.fetchBlogs();
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
    async changePage(pageNum) {
      this.isLoading = true;
      this.setCurrentPageNumber(pageNum);
      await this.fetchBlogs();
      this.isLoading = false;
    },
    async changeCategory() {
      this.isLoading = true;
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
    }),
  },
};
</script>
<style lang="scss">
@import "../styles/variables";
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
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
}
.article-list {
  margin-left: -15px;
  margin-right: -15px;
}
.pagination {
  display: flex;
  width: 100%;
  justify-content: center;
  .pagination-container {
    display: flex;
    .page-item {
      margin-left: 10px;
      margin-right: 10px;
      height: 30px;
      width: 30px;
      cursor: pointer;
      .page-link {
        text-align: center;
        display: block;
        vertical-align: middle;
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
</style>

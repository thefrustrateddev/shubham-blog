<template>
  <div class="detail">
    <div v-if="isLoading">
      <blog-loader></blog-loader>
    </div>
    <div v-else>
      <blog-banner
        :image="blog.featured_image"
        :is-default="false"
      ></blog-banner>
      <div class="wrapper mt-40 pr-50 pl-50 detail-wrapper">
        <div
          class="blog-title mb-40"
          data-cy="blogTitle"
          v-html="blog?.title"
        ></div>
        <div class="blog-author mb-30">
          <div class="image">
            <img :src="blog?.author?.avatar_URL" />
          </div>
          <div class="details pl-30">
            <div class="name pb-10">{{ blog?.author?.name }}</div>
            <div class="date">{{ modDate }}</div>
          </div>
        </div>
        <div v-html="blog.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogBanner from "@/components/BlogBanner.vue";
import BlogLoader from "@/components/BlogLoader.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {
    BlogBanner,
    BlogLoader,
  },
  data: () => ({ isLoading: true }),
  async mounted() {
    this.isLoading = true;
    const slug = this.$route.params.slug;
    await this.fetchBlogBySlug(slug);
    this.isLoading = false;
  },
  methods: {
    ...mapActions("blogs", {
      fetchBlogBySlug: "FETCH_BLOG_BY_SLUG",
    }),
  },
  computed: {
    ...mapGetters("blogs", {
      blog: "getBlog",
    }),
    modDate() {
      if (this.blog?.date) {
        return new Date(this.blog?.date).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }
      return "";
    },
  },
};
</script>
<style lang="scss">
@import "../styles/variables";
.detail-wrapper {
  max-width: 768px;
  .blog-title {
    font-size: 65px;
    font-weight: 700;
  }
  .blog-author {
    display: flex;
    // justify-content: center;
    .image {
      img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 700;
      .name {
      }
      .date {
        color: $color-gray;
        font-size: 14px;
      }
    }
  }
}
li {
  margin-bottom: 20px !important;
}
</style>
